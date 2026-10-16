/**
 * Shared literary reader — used by every book in the library.
 * Expects window.BOOK_CONFIG = { storageKey, slug?, libraryHref?, notesPart?, tagline? }.
 * Implements .omp/design/READER-CONTRACT.md (chapter hooks, art slots + manifest,
 * endnote round-trips, paragraph classifiers, reader:chapter event).
 * Shared contracts (do not rename): storage keys, data/*.json paths,
 * asset() resolution, data-action names, and every element id below.
 */
(() => {
  "use strict";

  const cfg = window.BOOK_CONFIG || {};
  const STORAGE_KEY = cfg.storageKey || "literary-reader";
  const BOOK_SLUG = cfg.slug || String(STORAGE_KEY).replace(/^reader-/, "") || "book";
  // Library-home theme (root index.html) seeds first-visit reader theme only.
  // A per-book explicit choice always wins; reader mirrors its theme back so
  // both surfaces stay in sync without sharing a storage key.
  const LIBRARY_THEME_KEY = "literary-library-theme";
  const WORDS_PER_MINUTE = 200;

  const THEMES = ["dark", "nocturne", "verdant", "oxblood", "candlelight", "sepia", "light", "slate"];
  // Dark-first order for injected settings buttons.
  const THEME_META = [
    { value: "dark", label: "Ink", title: "Ink · Deep ink, candle-gold" },
    { value: "nocturne", label: "Nocturne", title: "Nocturne · Midnight lamp" },
    { value: "verdant", label: "Verdant", title: "Verdant · Court green" },
    { value: "oxblood", label: "Oxblood", title: "Oxblood · Leather library" },
    { value: "candlelight", label: "Candle", title: "Candlelight · Amber glow" },
    { value: "sepia", label: "Sepia", title: "Sepia · Aged paper" },
    { value: "light", label: "Vellum", title: "Vellum · Warm morning paper" },
    { value: "slate", label: "Slate", title: "Slate · Cold steel evening" },
  ];
  const THEME_SWATCH = {
    dark: ["#08090b", "#e8d5a3"],
    nocturne: ["#0a0f1e", "#a3b8ff"],
    verdant: ["#0b1510", "#c6f135"],
    oxblood: ["#160d0d", "#d9a441"],
    candlelight: ["#120b06", "#ffb84d"],
    sepia: ["#171310", "#d4a94e"],
    light: ["#f5f0e6", "#8a6414"],
    slate: ["#10161c", "#8fc3dd"],
  };
  const AUTO = "auto";

  const DEFAULTS = {
    theme: "dark",
    size: "md",
    leading: "normal",
    font: "serif",
    measure: "standard",
    chapterId: null,
    scrollY: 0,
    read: [],
  };
  const SIZE_MAP = {
    sm: "1.15rem",
    md: "1.3rem",
    lg: "1.5rem",
    xl: "1.7rem",
  };
  const LEADING_MAP = {
    tight: "1.6",
    normal: "1.85",
    loose: "2.1",
  };
  const PREF_KEYS = ["theme", "size", "leading", "font", "measure"];
  const VALID = {
    theme: [...THEMES, AUTO],
    size: Object.keys(SIZE_MAP),
    leading: Object.keys(LEADING_MAP),
    font: ["serif", "sans"],
    measure: ["narrow", "standard", "wide"],
  };

  // Directory of the current book page (works on GitHub Pages project paths)
  const BASE_URL = new URL("./", window.location.href).href;
  // Contract §9: frozen data-action target. BOOK_CONFIG.libraryHref wins;
  // default walks from books/<slug>/ back to the library root.
  const LIBRARY_HREF = cfg.libraryHref || new URL("../../index.html", BASE_URL).href;

  function asset(path) {
    return new URL(path.replace(/^\//, ""), BASE_URL).href;
  }

  const REDUCED_MOTION =
    typeof matchMedia === "function" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  let toc = null;
  let flatChapters = [];
  let currentId = null;
  let lastAttemptId = null;
  const chapterCache = new Map();
  // Contract §4–§6 state: art manifest, fetched SVG files, note backlink.
  let artManifest = null;
  let artManifestTried = false;
  const artFileCache = new Map();
  let notesIndex = null;
  let noteReturn = null;
  let lastFocusedBeforeDrawer = null;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const cover = $("#cover");
  const reader = $("#reader");
  const readerBody = $("#reader-body");
  const headerEl = $(".reader-header");
  const tocDrawer = $("#toc-drawer");
  const tocList = $("#toc-list");
  const settingsPanel = $("#settings-panel");
  const settingsCard = $("#settings-card");
  const loading = $("#loading");
  const loadingText = loading ? loading.querySelector("p") : null;
  const chapterText = $("#chapter-text");
  const progressFill = $("#progress-fill");
  const coverContinue = $("#cover-continue");

  // Chrome injected by JS so every per-book index.html stays untouched.
  let tocSearch = null;
  let tocProgress = null;
  let tocEmpty = null;
  let metaSub = null;
  let chapterError = null;
  let resumeDetail = null;
  let chapterArt = null;
  let coverArt = null;
  let noteReturnChip = null;

  // Dark-first: "auto" resolves to light only when the OS asks for light.
  function osTheme() {
    try {
      return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    } catch { return "dark"; }
  }

  // Effective (concrete) theme for a stored value: only the 8 data-theme values
  // ever reach the DOM. Unknown/legacy values fall back to dark.
  function effectiveTheme(stored) {
    if (stored === AUTO) return osTheme();
    return THEMES.includes(stored) ? stored : DEFAULTS.theme;
  }

  function libraryTheme() {
    try {
      const v = localStorage.getItem(LIBRARY_THEME_KEY);
      return VALID.theme.includes(v) ? v : null;
    } catch {
      return null;
    }
  }

  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (raw && typeof raw === "object" && !("theme" in raw)) {
        const seeded = libraryTheme();
        if (seeded) raw.theme = seeded;
      }
      const state = { ...DEFAULTS, ...raw };
      if (!Array.isArray(state.read)) state.read = [];
      return state;
    } catch {
      return { ...DEFAULTS };
    }
  }

  function saveState(partial) {
    const next = { ...loadState(), ...partial };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage full or unavailable — reader still works for the session */
    }
    return next;
  }

  function prefValue(key, state) {
    const valid = VALID[key] || [];
    return valid.includes(state[key]) ? state[key] : DEFAULTS[key];
  }

  function paintTheme(concrete, { animate = true } = {}) {
    const root = document.documentElement;
    // Swap synchronously FIRST so computed styles read fresh below; the
    // view transition then animates the already-correct tree as pure effect.
    root.dataset.theme = concrete;
    if (
      animate &&
      typeof document.startViewTransition === "function" &&
      !REDUCED_MOTION &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      root.classList.add("theme-crossfade");
      const done = () => root.classList.remove("theme-crossfade");
      try {
        document.startViewTransition(() => {}).finished.then(done, done);
      } catch { done(); }
    }
  }

  function applyPrefs(state = loadState(), { animate = false } = {}) {
    const root = document.documentElement;
    const prefs = {};
    for (const key of PREF_KEYS) prefs[key] = prefValue(key, state);

    paintTheme(effectiveTheme(prefs.theme), { animate });
    root.dataset.size = prefs.size;
    root.dataset.leading = prefs.leading;
    root.dataset.font = prefs.font;
    root.dataset.measure = prefs.measure;
    root.style.setProperty("--text-size", SIZE_MAP[prefs.size]);
    root.style.setProperty("--leading", LEADING_MAP[prefs.leading]);

    const styles = getComputedStyle(root);
    document.body.style.backgroundColor = styles.getPropertyValue("--bg").trim();
    document.body.style.color = styles.getPropertyValue("--text").trim();

    $$(".seg-btn[data-pref]").forEach((btn) => {
      const pref = btn.dataset.pref;
      if (!PREF_KEYS.includes(pref)) return;
      const on = btn.dataset.value === prefs[pref];
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    paintFollowNote(prefs.theme);
  }

  function setPref(key, value, { animate = true } = {}) {
    if (!PREF_KEYS.includes(key) || !VALID[key].includes(value)) return;
    saveState({ [key]: value });
    if (key === "theme") {
      try {
        localStorage.setItem(LIBRARY_THEME_KEY, value);
      } catch {
        /* non-fatal */
      }
    }
    applyPrefs(loadState(), { animate });
  }

  // "Following the library" indicator: a per-book theme seeded from the home
  // key at first visit is still a stored value, so we detect the seed by
  // comparing the mirrored library key — equal means the reader is following.
  function paintFollowNote(stored) {
    const note = $("#theme-follow");
    if (!note) return;
    if (stored === AUTO) {
      note.textContent = "Auto · showing " + (osTheme() === "light" ? "Vellum" : "Ink") + " now";
      return;
    }
    // Seeded first-visit state mirrors the home key; an explicit per-book
    // pick diverges from it. Equal (or seeded-but-unwritten) = following.
    let lib = null;
    try { lib = localStorage.getItem(LIBRARY_THEME_KEY); } catch {}
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch {}
    const seeded = !raw || typeof raw !== "object" || !("theme" in raw);
    if (seeded || (lib != null && String(stored) === String(lib))) {
      note.textContent = "Following the library";
    } else {
      note.textContent = "";
    }
  }

  function minsLeft(words) {
    return Math.max(1, Math.round((words || 0) / WORDS_PER_MINUTE));
  }

  function fmtWords(n) {
    return (n || 0).toLocaleString("en-US");
  }

  function fmtDuration(words) {
    const mins = Math.max(1, Math.round((words || 0) / WORDS_PER_MINUTE));
    if (mins < 90) return `\u2248${mins} min`;
    const hours = Math.round((mins / 60) * 10) / 10;
    return `\u2248${hours} h`;
  }

  function countWords(paragraphs) {
    return paragraphs
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;
  }

  function chapterWords(flat, data) {
    if (flat && flat.word_count) return flat.word_count;
    if (data && Array.isArray(data.paragraphs)) return countWords(data.paragraphs);
    return 0;
  }

  function totalWords() {
    return flatChapters.reduce((sum, c) => sum + (c.word_count || 0), 0);
  }

  async function loadToc() {
    if (toc) return toc;
    const res = await fetch(asset("data/toc.json"));
    if (!res.ok) throw new Error("Failed to load table of contents");
    toc = await res.json();
    flatChapters = [];
    for (const part of toc.parts) {
      for (const ch of part.chapters) {
        flatChapters.push({
          ...ch,
          part_roman: part.roman,
          part_subtitle: part.subtitle,
          part_id: part.id,
        });
      }
    }
    return toc;
  }

  // Contract §12/F13: validator failure-simulation hook. `?fail=<id>` (or a
  // `readerFailChapter` query/session flag) forces loadChapter(id) to throw
  // ONCE, exercising the chapter-error → retry → recover path end-to-end.
  // A module-lifetime set consumes the flag so retry succeeds without
  // editing the URL; production behavior is otherwise unchanged.
  const failConsumed = new Set();
  function consumeFailFlag(id) {
    try {
      if (failConsumed.has("*") || failConsumed.has(id)) return false;
      const q = new URLSearchParams(location.search);
      const param = q.get("fail") || q.get("readerFailChapter");
      const session = sessionStorage.getItem("readerFailChapter");
      const target = param || session;
      if (target && (target === "*" || target === id)) {
        failConsumed.add(target === "*" ? "*" : id);
        sessionStorage.removeItem("readerFailChapter");
        return true;
      }
    } catch { /* storage/URL unavailable — never fail loading */ }
    return false;
  }

  async function loadChapter(id) {
    if (chapterCache.has(id)) return chapterCache.get(id);
    if (consumeFailFlag(id)) throw new Error(`Simulated load failure for ${id} (?fail=)`);
    const res = await fetch(asset(`data/chapters/${id}.json`));
    if (!res.ok) throw new Error(`Failed to load chapter ${id}`);
    const data = await res.json();
    chapterCache.set(id, data);
    return data;
  }

  function chapterIndex(id) {
    return flatChapters.findIndex((c) => c.id === id);
  }

  /** Inject search, progress, error, and settings chrome (no per-book HTML edits). */
  function injectChrome() {
    if (tocList && !tocSearch) {
      const tools = document.createElement("div");
      tools.className = "toc-tools";
      tools.innerHTML =
        '<input type="search" id="toc-search" class="toc-search" ' +
        'placeholder="Filter chapters\u2026" aria-label="Filter chapters" autocomplete="off" />' +
        '<p class="toc-progress" id="toc-progress" aria-live="polite"></p>';
      tocList.before(tools);
      tocSearch = $("#toc-search");
      tocProgress = $("#toc-progress");
      tocEmpty = document.createElement("p");
      tocEmpty.className = "toc-empty hidden";
      tocEmpty.id = "toc-empty";
      tocEmpty.textContent = "No chapters match that filter.";
      tocSearch?.addEventListener("input", () => filterToc(tocSearch.value));
    }
    const metaNumber = $("#meta-number");
    if (metaNumber && !metaSub) {
      metaSub = document.createElement("p");
      metaSub.className = "meta-sub";
      metaSub.id = "meta-sub";
      metaNumber.after(metaSub);
    }
    if (chapterText && !chapterError) {
      chapterError = document.createElement("div");
      chapterError.className = "chapter-error hidden";
      chapterError.id = "chapter-error";
      chapterError.setAttribute("role", "alert");
      chapterError.innerHTML =
        '<p class="chapter-error-title">This chapter didn\u2019t load.</p>' +
        '<p class="chapter-error-sub">Check your connection, then try again.</p>' +
        '<button type="button" class="btn btn-primary" data-action="retry">Retry</button>';
      chapterText.before(chapterError);
    }
    // Theme row: replace the 3-button static markup with all 8 themes + Auto.
    // Static HTML keeps dark/sepia/light for no-JS; JS upgrades in place so the
    // file number of per-book index.html files stays untouched (13 files).
    const themeSeg = settingsCard ? settingsCard.querySelector('.seg[aria-label="Theme"]') : null;
    if (themeSeg && !themeSeg.dataset.upgraded) {
      themeSeg.dataset.upgraded = "1";
      themeSeg.classList.add("seg-theme");
      themeSeg.setAttribute("aria-label", "Reading theme");
      themeSeg.innerHTML = THEME_META.map((t) => {
        const sw = THEME_SWATCH[t.value] || ["#000", "#fff"];
        return (
          '<button type="button" class="seg-btn seg-theme-btn" data-pref="theme" data-value="' +
          t.value +
          '" title="' +
          t.title +
          '" aria-label="' +
          t.label +
          ' theme" style="--sw-bg:' +
          sw[0] +
          ";--sw-ac:" +
          sw[1] +
          '"><span class="sw" aria-hidden="true"></span><span class="seg-theme-label">' +
          t.label +
          "</span></button>"
        );
      }).join("") +
        '<button type="button" class="seg-btn seg-theme-btn seg-auto" data-pref="theme" data-value="auto" ' +
        'title="Auto · follows your system" aria-label="Auto theme, follows your system" ' +
        'style="--sw-bg:#08090b;--sw-ac:#f5f0e6"><span class="sw" aria-hidden="true"></span>' +
        '<span class="seg-theme-label">Auto</span></button>';
      const row = themeSeg.closest(".settings-row");
      if (row && !row.querySelector(".theme-follow")) {
        const note = document.createElement("p");
        note.className = "theme-follow";
        note.id = "theme-follow";
        note.setAttribute("aria-live", "polite");
        row.appendChild(note);
      }
    }
    if (settingsCard && !settingsCard.querySelector('[data-pref="font"]')) {
      settingsCard.insertAdjacentHTML(
        "beforeend",
        '<div class="settings-row">' +
          "<span>Typeface</span>" +
          '<div class="seg" role="group" aria-label="Typeface">' +
          '<button type="button" class="seg-btn" data-pref="font" data-value="serif" style="font-family:var(--font-serif)">Serif</button>' +
          '<button type="button" class="seg-btn" data-pref="font" data-value="sans" style="font-family:var(--font-sans)">Sans</button>' +
          "</div>" +
          "</div>" +
          '<div class="settings-row">' +
          "<span>Line length</span>" +
          '<div class="seg" role="group" aria-label="Line length">' +
          '<button type="button" class="seg-btn" data-pref="measure" data-value="narrow">Narrow</button>' +
          '<button type="button" class="seg-btn" data-pref="measure" data-value="standard">Standard</button>' +
          '<button type="button" class="seg-btn" data-pref="measure" data-value="wide">Wide</button>' +
          "</div>" +
          "</div>"
      );
    }
    if (coverContinue && !resumeDetail) {
      resumeDetail = document.createElement("span");
      resumeDetail.className = "cover-resume-detail";
      resumeDetail.id = "cover-resume-detail";
      coverContinue.appendChild(resumeDetail);
    }
    // Contract §3: art slots. Adopt book-authored figures when present;
    // otherwise inject empty hidden figures so all books gain the hooks.
    coverArt = $("#cover-art");
    if (!coverArt && cover) {
      coverArt = document.createElement("figure");
      coverArt.className = "cover-art";
      coverArt.id = "cover-art";
      coverArt.setAttribute("aria-hidden", "true");
      coverArt.hidden = true;
      const anchor = cover.querySelector(".cover-content");
      if (anchor) anchor.before(coverArt);
      else cover.prepend(coverArt);
    }
    chapterArt = $("#chapter-art");
    if (!chapterArt && readerBody) {
      chapterArt = document.createElement("figure");
      chapterArt.className = "chapter-art";
      chapterArt.id = "chapter-art";
      chapterArt.setAttribute("aria-hidden", "true");
      chapterArt.hidden = true;
      const meta = $("#chapter-meta");
      if (meta) meta.before(chapterArt);
      else readerBody.prepend(chapterArt);
    }
    // Contract §6.4: note-return chip, hidden until a note link is followed.
    if (readerBody && !noteReturnChip) {
      noteReturnChip = document.createElement("button");
      noteReturnChip.type = "button";
      noteReturnChip.className = "note-return-chip hidden";
      noteReturnChip.id = "note-return-chip";
      noteReturnChip.dataset.action = "note-return";
      noteReturnChip.hidden = true;
      readerBody.prepend(noteReturnChip);
    }
  }

  // Contract §2: body hooks. Cover keeps book+view only; reader sets all.
  function paintBodyHooks({ chapterId = null, partId = null, partRoman = "", motif = null } = {}) {
    const body = document.body;
    body.dataset.book = BOOK_SLUG;
    if (chapterId) {
      body.dataset.view = "reader";
      body.dataset.chapter = chapterId;
      body.dataset.part = partRoman || "";
      if (partId) body.dataset.partId = partId;
      else delete body.dataset.partId;
      if (motif) body.dataset.art = motif;
      else delete body.dataset.art;
    } else {
      body.dataset.view = "cover";
      delete body.dataset.chapter;
      delete body.dataset.part;
      delete body.dataset.partId;
      delete body.dataset.art;
    }
  }

  // Contract §4: optional per-book art manifest (404-tolerant).
  async function loadArtManifest() {
    if (artManifestTried) return artManifest;
    artManifestTried = true;
    try {
      const res = await fetch(asset("design/chapters.json"));
      if (!res.ok) return null;
      const data = await res.json();
      if (!data || typeof data !== "object") return null;
      artManifest = data;
      return artManifest;
    } catch {
      return null;
    }
  }

  function artEntryFor(chapterId) {
    if (!artManifest || typeof artManifest !== "object") return null;
    const chapters = artManifest.chapters || {};
    const entry = chapters[chapterId];
    if (entry && typeof entry === "object") return entry;
    const fallback = artManifest.default;
    return fallback && typeof fallback === "object" ? fallback : null;
  }

  // Contract §4 + A.2: fetch sprite file once, cache parsed document.
  async function loadArtFile(src) {
    const file = String(src).split("#")[0];
    if (artFileCache.has(file)) return artFileCache.get(file);
    const promise = (async () => {
      const res = await fetch(asset(file));
      if (!res.ok) throw new Error(`art file ${file} missing`);
      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, "image/svg+xml");
      if (doc.querySelector("parsererror")) throw new Error(`art file ${file} invalid`);
      return doc;
    })();
    artFileCache.set(file, promise);
    try {
      return await promise;
    } catch (err) {
      artFileCache.delete(file);
      throw err;
    }
  }

  // Contract §4: inline manifest art into a slot. Returns motif id or null.
  async function fillArtSlot(slot, entry) {
    if (!slot) return null;
    const clear = () => {
      slot.innerHTML = "";
      slot.hidden = true;
      slot.className = slot.id === "cover-art" ? "cover-art" : "chapter-art";
      slot.setAttribute("aria-hidden", "true");
    };
    if (!entry || typeof entry !== "object" || !entry.src) {
      // Class-only entries (motif treatments) still apply without art.
      if (entry && typeof entry === "object" && (entry.class || entry.motif)) {
        slot.innerHTML = "";
        slot.hidden = true;
        slot.className =
          (slot.id === "cover-art" ? "cover-art" : "chapter-art") +
          (entry.class ? ` ${entry.class}` : "");
        return entry.motif || null;
      }
      clear();
      return null;
    }
    const rawSrc = String(entry.src);
    const symbol = entry.symbol || (rawSrc.includes("#") ? rawSrc.split("#")[1] : null);
    try {
      const doc = await loadArtFile(rawSrc);
      const svgNS = "http://www.w3.org/2000/svg";
      let node = null;
      if (symbol) {
        const target = doc.getElementById(symbol);
        if (!target) throw new Error(`symbol #${symbol} missing`);
        node = document.createElementNS(svgNS, "svg");
        const vb = target.getAttribute("viewBox") || doc.documentElement.getAttribute("viewBox");
        if (vb) node.setAttribute("viewBox", vb);
        // Splice the symbol's CHILDREN into the new svg: a nested <symbol>
        // without x/y/width/height renders at 0×0 per SVG2 (Churchill defect).
        const clone = target.cloneNode(true);
        clone.removeAttribute("id");
        if (clone.tagName.toLowerCase() === "symbol") {
          for (const child of [...clone.childNodes]) node.appendChild(child);
        } else {
          node.appendChild(clone);
        }
      } else {
        node = doc.documentElement.cloneNode(true);
        node.removeAttribute("width");
        node.removeAttribute("height");
      }
      node.setAttribute("aria-hidden", "true");
      node.removeAttribute("id");
      slot.innerHTML = "";
      slot.appendChild(node);
      if (entry.caption) {
        const cap = document.createElement("figcaption");
        cap.textContent = entry.caption;
        slot.appendChild(cap);
      }
      slot.className =
        (slot.id === "cover-art" ? "cover-art" : "chapter-art") +
        (entry.class ? ` ${entry.class}` : "");
      slot.hidden = false;
      slot.setAttribute("aria-hidden", entry.caption ? "false" : "true");
      return entry.motif || null;
    } catch (err) {
      console.warn(`[reader] art skipped for ${rawSrc}:`, err?.message || err);
      clear();
      return null;
    }
   }

  async function showCover() {
    paintBodyHooks();
    cover.classList.add("active");
    cover.hidden = false;
    reader.classList.remove("active");
    reader.hidden = true;
    closeToc();
    closeSettings();
    hideNoteReturn();
    if (toc) document.title = `${toc.title} — ${toc.author}`;
    window.scrollTo(0, 0);
    const state = loadState();
    const saved = flatChapters.find((c) => c.id === state.chapterId);
    if (saved) {
      coverContinue?.classList.remove("hidden");
      if (resumeDetail) {
        const label = saved.number_label || saved.title;
        resumeDetail.textContent =
          label.trim().toLowerCase() === saved.title.trim().toLowerCase()
            ? saved.title
            : `${label} · ${saved.title}`;
      }
    } else {
      coverContinue?.classList.add("hidden");
    }
    // Cover art: manifest cover entry, if any.
    try {
      const manifest = await loadArtManifest();
      if (manifest && manifest.cover) await fillArtSlot(coverArt, manifest.cover);
      else if (coverArt) { coverArt.innerHTML = ""; coverArt.hidden = true; }
    } catch { /* art never blocks the cover */ }
  }

  function showReader() {
    cover.classList.remove("active");
    cover.hidden = true;
    reader.classList.add("active");
    reader.hidden = false;
  }

  function setLoading(on) {
    loading?.classList.toggle("hidden", !on);
  }

  function buildToc() {
    if (!toc) return;
    const frag = document.createDocumentFragment();
    for (const part of toc.parts) {
      const section = document.createElement("div");
      section.className = "toc-part";
      const header = document.createElement("div");
      header.className = "toc-part-header";
      const countLabel = `${part.chapters.length} chapter${part.chapters.length === 1 ? "" : "s"}`;
      header.innerHTML = `Part ${escapeHtml(part.roman)}<span class="toc-part-sub">${escapeHtml(
        [part.subtitle || part.name || "", countLabel].filter(Boolean).join(" \u00b7 ")
      )}</span>`;
      section.appendChild(header);
      part.chapters.forEach((ch, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "toc-chapter";
        btn.dataset.chapterId = ch.id;
        btn.dataset.search = `${ch.roman || ""} ${ch.title}`.toLowerCase();
        const sub = ch.word_count
          ? `${fmtWords(ch.word_count)} words \u00b7 \u2248${minsLeft(ch.word_count)} min`
          : "";
        btn.innerHTML = `
          <span class="toc-num">${escapeHtml(String(ch.roman || i + 1))}</span>
          <span class="toc-main">
            <span class="toc-name">${escapeHtml(ch.title)}</span>
            ${sub ? `<span class="toc-sub">${escapeHtml(sub)}</span>` : ""}
          </span>
          <span class="toc-check" aria-hidden="true">\u2713</span>
        `;
        btn.addEventListener("click", () => {
          closeToc();
          openChapter(ch.id);
        });
        section.appendChild(btn);
      });
      frag.appendChild(section);
    }
    tocList.innerHTML = "";
    tocList.appendChild(frag);
    if (tocEmpty) tocList.appendChild(tocEmpty);
    if (tocSearch && tocSearch.value) filterToc(tocSearch.value);
    updateTocProgress();
  }

  function filterToc(query) {
    const q = String(query || "").trim().toLowerCase();
    let visible = 0;
    $$(".toc-part", tocList).forEach((section) => {
      let partVisible = 0;
      $$(".toc-chapter", section).forEach((btn) => {
        const hit = !q || (btn.dataset.search || "").includes(q);
        btn.classList.toggle("hidden", !hit);
        if (hit) {
          partVisible += 1;
          visible += 1;
        }
      });
      section.classList.toggle("hidden", partVisible === 0);
    });
    tocEmpty?.classList.toggle("hidden", visible !== 0);
  }

  function highlightToc(id) {
    $$(".toc-chapter", tocList).forEach((el) => {
      el.classList.toggle("active", el.dataset.chapterId === id);
    });
  }

  function markRead(id) {
    if (!id) return;
    const state = loadState();
    if (state.read.includes(id)) return;
    saveState({ read: [...state.read, id].slice(-3000) });
    updateTocProgress();
  }

  function updateTocProgress() {
    $$(".toc-chapter", tocList).forEach((el) => {
      el.classList.toggle("active", el.dataset.chapterId === currentId);
    });
    if (!tocProgress || flatChapters.length === 0) return;
    const state = loadState();
    const readSet = new Set(state.read);
    let done = 0;
    let wordsRead = 0;
    const total = totalWords();
    for (const c of flatChapters) {
      if (readSet.has(c.id)) {
        done += 1;
        wordsRead += c.word_count || 0;
      }
    }
    $$(".toc-chapter", tocList).forEach((el) => {
      el.classList.toggle("read", readSet.has(el.dataset.chapterId));
    });
    if (done === 0) {
      tocProgress.textContent =
        `${flatChapters.length} chapters \u00b7 ${fmtWords(total)} words \u00b7 ${fmtDuration(total)} total`;
    } else {
      const pct = total > 0 ? Math.round((wordsRead / total) * 100) : 0;
      tocProgress.textContent = `${done} of ${flatChapters.length} finished \u00b7 ${pct}% of the book`;
    }
  }

  function openToc() {
    lastFocusedBeforeDrawer = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    tocDrawer.classList.add("open");
    tocDrawer.setAttribute("aria-hidden", "false");
    highlightToc(currentId);
    // Reveal the active chapter, then focus the filter.
    tocDrawer.querySelector(".toc-chapter.active")?.scrollIntoView({ block: "nearest" });
    tocSearch?.focus({ preventScroll: true });
  }

  function closeToc() {
    const wasOpen = tocDrawer.classList.contains("open");
    tocDrawer.classList.remove("open");
    tocDrawer.setAttribute("aria-hidden", "true");
    if (wasOpen && lastFocusedBeforeDrawer?.isConnected) {
      lastFocusedBeforeDrawer.focus({ preventScroll: true });
    }
    lastFocusedBeforeDrawer = null;
  }

  function openSettings() {
    if (!settingsPanel) return;
    applyPrefs();
    settingsPanel.classList.add("open");
    settingsPanel.setAttribute("aria-hidden", "false");
    const first =
      settingsPanel.querySelector(".seg-btn.active") || settingsPanel.querySelector(".seg-btn");
    first?.focus({ preventScroll: true });
  }

  function closeSettings() {
    if (!settingsPanel) return;
    const wasOpen = settingsPanel.classList.contains("open");
    settingsPanel.classList.remove("open");
    settingsPanel.setAttribute("aria-hidden", "true");
    hideShortcutHelp();
    if (wasOpen) $("#btn-settings")?.focus({ preventScroll: true });
  }

  // Contract §9: "?" shortcut reference, injected once, book-agnostic.
  const SHORTCUTS = [
    ["t", "Open / close contents"],
    ["/", "Focus the contents filter"],
    ["↑ ↓", "Move between chapters (contents open)"],
    ["s", "Open / close reading settings"],
    ["← →", "Move within a settings row"],
    ["j / k", "Next / previous chapter"],
    ["Alt + ← →", "Previous / next chapter"],
    ["Esc", "Close dialog · return from note"],
    ["?", "This reference"],
  ];

  function toggleShortcutHelp() {
    if (!settingsCard) return;
    let help = settingsCard.querySelector("#shortcut-help");
    if (help) {
      const showing = !help.classList.contains("hidden");
      help.classList.toggle("hidden", showing);
      if (showing) settingsCard.querySelector(".seg-btn")?.focus({ preventScroll: true });
      else {
        if (!settingsPanel.classList.contains("open")) openSettings();
        help.querySelector("button")?.focus({ preventScroll: true });
        help.scrollIntoView({ block: "nearest" });
      }
      return;
    }
    help = document.createElement("div");
    help.className = "shortcut-help";
    help.id = "shortcut-help";
    help.setAttribute("role", "note");
    help.setAttribute("aria-label", "Keyboard shortcuts");
    help.innerHTML =
      '<div class="shortcut-help-head"><span>Keyboard</span>' +
      '<button type="button" class="link-btn" data-shortcut-close>Done</button></div>' +
      "<dl>" +
      SHORTCUTS.map(([k, d]) => `<div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(d)}</dd></div>`).join("") +
      "</dl>";
    settingsCard.appendChild(help);
    help.querySelector("[data-shortcut-close]")?.addEventListener("click", () => {
      help.classList.add("hidden");
      settingsCard.querySelector(".seg-btn")?.focus({ preventScroll: true });
    });
    if (!settingsPanel.classList.contains("open")) openSettings();
    help.querySelector("button")?.focus({ preventScroll: true });
    help.scrollIntoView({ block: "nearest" });
  }

  function hideShortcutHelp() {
    settingsCard?.querySelector("#shortcut-help")?.classList.add("hidden");
  }

  function paintChapterMeta(flat, words) {
    $("#meta-part").textContent = `Part ${flat.part_roman}${
      flat.part_subtitle ? " \u00b7 " + flat.part_subtitle : ""
    }`;
    $("#meta-title").textContent = flat.title;
    $("#meta-number").textContent = flat.number_label || "";
    $("#header-part").textContent = `Part ${flat.part_roman}`;
    $("#header-chapter").textContent = flat.title;
    if (metaSub) {
      metaSub.textContent = words
        ? `\u2248${minsLeft(words)} min \u00b7 ${fmtWords(words)} words`
        : "";
    }
  }

  async function openChapter(id, { restoreScroll = false } = {}) {
    if (!id) return;
    const idx = chapterIndex(id);
    if (idx < 0) return;
    lastAttemptId = id;
    setLoading(true);
    if (loadingText) {
      const flat = flatChapters[idx];
      loadingText.textContent = `Loading ${flat ? flat.title : "chapter"}\u2026`;
    }
    try {
      const ch = await loadChapter(id);
      currentId = id;
      const flat = flatChapters[idx];
      const partRoman = ch.part_roman || flat?.part_roman || "";
      const partId = ch.part || flat?.part_id || "";
      // Chapter art resolves before hooks so data-art is set on first paint.
      let motif = null;
      try {
        await loadArtManifest();
        motif = await fillArtSlot(chapterArt, artEntryFor(id));
      } catch { /* art never blocks the chapter */ }
      paintBodyHooks({ chapterId: id, partId, partRoman, motif });
      showReader();
      chapterError?.classList.add("hidden");
      renderChapter(ch, idx);
      saveState({ chapterId: id, scrollY: restoreScroll ? loadState().scrollY : 0 });
      if (restoreScroll) {
        const y = loadState().scrollY || 0;
        requestAnimationFrame(() => window.scrollTo(0, y));
      } else {
        window.scrollTo(0, 0);
      }
      document.title = `${ch.title} — ${toc?.title || "Reader"}`;
      highlightToc(id);
      updateProgress();
      updateTocProgress();
      headerEl?.classList.toggle("scrolled", window.scrollY > 8);
      // Contract §2: book-owned JS integration event.
      document.dispatchEvent(new CustomEvent("reader:chapter", {
        detail: {
          book: BOOK_SLUG,
          chapterId: id,
          partId,
          partRoman,
          index: idx,
          paragraphs: Array.isArray(ch.paragraphs) ? ch.paragraphs.length : 0,
          words: chapterWords(flat, ch),
        },
      }));
    } catch (err) {
      console.error(err);
      const flat = flatChapters[idx];
      currentId = id;
      paintBodyHooks({ chapterId: id, partId: flat?.part_id || "", partRoman: flat?.part_roman || "" });
      showReader();
      paintChapterMeta(
        {
          part_roman: flat.part_roman,
          part_subtitle: flat.part_subtitle,
          title: flat.title,
          number_label: flat.number_label,
        },
        flat.word_count || 0
      );
      chapterText.innerHTML = "";
      if (chapterText) chapterText.dataset.paras = "0";
      chapterError?.classList.remove("hidden");
      document.title = `${flat.title} — ${toc?.title || "Reader"}`;
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  }

  // ── Contract §6: endnote round-trips ──
  const NOTE_LEAD_RE = /^(\d{1,3}[a-z]?)\.\s/;
  const NOTE_TITLE_RE = /^\s*notes?\b/i;
  // Cross-refs inside the notes part (verified against IJ data):
  // "Q.v. Note 211 sub.", "See Note 304 supra.", "(q.v. Note 78)",
  // "Expanding where appropriate on Note 12", "Q.v. note a to Note 12".
  const NOTEREF_RE = /\b(?:Q\.v\.|q\.v\.|See|see|on)\s+(?:note\s+[a-z]\s+to\s+)?[Nn]ote\s+(\d{1,3}[a-z]?)\b/g;

  function notesPartId() {
    if (cfg.notesPart) return cfg.notesPart;
    if (toc?.notes_part) return toc.notes_part;
    if (!toc || !Array.isArray(toc.parts)) return null;
    for (const part of toc.parts) {
      const chs = part.chapters || [];
      if (!chs.length) continue;
      const hits = chs.filter((c) => NOTE_TITLE_RE.test(c.title || "")).length;
      if (hits > chs.length / 2) return part.id;
    }
    return null;
  }

  function isNotesChapter(ch) {
    if (!ch) return false;
    const np = notesPartId();
    if (np) return ch.part === np;
    return NOTE_TITLE_RE.test(ch.title || "");
  }

  async function loadNotesIndex() {
    if (notesIndex) return notesIndex;
    notesIndex = {};
    try {
      const res = await fetch(asset("data/notes-index.json"));
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data === "object") notesIndex = data;
      }
    } catch { /* optional file; fall through to bounded scan */ }
    return notesIndex;
  }

  // Resolve note N to its notes-chapter id: live DOM → index → bounded fetch.
  // Live step matches NOTE TARGETS only (.reader-note ids), never the clicked
  // a.reader-noteref itself (it also carries data-note).
  async function resolveNoteChapter(num) {
    const live = chapterText?.querySelector(`#note-${CSS.escape(String(num))}`);
    if (live) return { chapterId: currentId, cached: true };
    const idx = await loadNotesIndex();
    if (idx && idx[String(num)]) return { chapterId: idx[String(num)], cached: false };
    const np = notesPartId();
    const candidates = np
      ? flatChapters.filter((c) => c.part_id === np)
      : flatChapters.filter((c) => NOTE_TITLE_RE.test(c.title || ""));
    for (const cand of candidates) {
      try {
        const data = await loadChapter(cand.id);
        const paras = Array.isArray(data.paragraphs) ? data.paragraphs : [];
        if (paras.some((p) => String(p).startsWith(`${num}.`) || String(p).startsWith(`${num} `))) {
          notesIndex[String(num)] = cand.id;
          return { chapterId: cand.id, cached: false };
        }
      } catch { /* keep scanning */ }
    }
    return null;
  }

  function linkifyNoteRefs(container) {
    if (!container) return;
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest("a")) continue;
      texts.push(node);
    }
    for (const node of texts) {
      const text = node.textContent;
      NOTEREF_RE.lastIndex = 0;
      let m;
      let last = 0;
      const frag = document.createDocumentFragment();
      let found = false;
      while ((m = NOTEREF_RE.exec(text))) {
        found = true;
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const a = document.createElement("a");
        a.className = "reader-noteref";
        a.href = `#note-${m[1]}`;
        a.dataset.note = m[1];
        a.textContent = m[0];
        frag.appendChild(a);
        last = m.index + m[0].length;
      }
      if (!found) continue;
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.replaceWith(frag);
    }
  }

  // Curator-supplied body→note links (§5 note_refs). Invalid entries ignored.
  function applyCuratedRefs(ch) {
    const refs = ch?.note_refs;
    if (!Array.isArray(refs) || !refs.length || !chapterText) return;
    const paras = chapterText.querySelectorAll(":scope > p");
    for (const ref of refs) {
      if (!ref || typeof ref !== "object") continue;
      const p = paras[ref.para];
      const match = typeof ref.match === "string" ? ref.match : "";
      const note = ref.note;
      if (!p || !match || note == null) continue;
      const at = p.textContent.indexOf(match);
      if (at < 0) continue;
      // Walk text nodes to the match offset (linkify may have split them).
      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
      let offset = 0;
      let placed = false;
      while (walker.nextNode() && !placed) {
        const node = walker.currentNode;
        if (node.parentElement?.closest("a")) { offset += node.textContent.length; continue; }
        const len = node.textContent.length;
        if (at >= offset && at + match.length <= offset + len) {
          const before = node.splitText(at - offset);
          const after = before.splitText(match.length);
          void after;
          const a = document.createElement("a");
          a.className = "reader-noteref";
          a.href = `#note-${note}`;
          a.dataset.note = String(note);
          a.textContent = match;
          before.replaceWith(a);
          placed = true;
        }
        offset += len;
      }
    }
  }

  function showNoteReturn(fromTitle) {
    if (!noteReturnChip) return;
    noteReturnChip.textContent = fromTitle ? `\u21A9 Return to ${fromTitle}` : "\u21A9 Return";
    noteReturnChip.classList.remove("hidden");
    noteReturnChip.hidden = false;
  }

  function hideNoteReturn() {
    noteReturn = null;
    if (!noteReturnChip) return;
    noteReturnChip.classList.add("hidden");
    noteReturnChip.hidden = true;
  }

  async function followNoteRef(noteNum, originTitle) {
    if (noteNum == null || noteNum === "") return;
    const target = await resolveNoteChapter(noteNum);
    // Unresolvable refs stay inert: no backlink, no chip, no jump.
    if (!target) return;
    noteReturn = { chapterId: currentId, scrollY: window.scrollY, title: originTitle || "" };
    const jump = () => {
      showNoteReturn(noteReturn?.title);
      requestAnimationFrame(() => {
        const el = document.getElementById(`note-${noteNum}`);
        if (el) {
          el.scrollIntoView({ block: "center", behavior: REDUCED_MOTION ? "auto" : "smooth" });
          el.classList.add("reader-note-flash");
          setTimeout(() => el.classList.remove("reader-note-flash"), 1600);
          history.replaceState(null, "", `#note-${noteNum}`);
        }
      });
    };
    if (target.chapterId === currentId) jump();
    else {
      await openChapter(target.chapterId);
      // openChapter clears nothing about noteReturn; re-show for the new view.
      if (noteReturn) jump();
    }
  }

  async function returnFromNote() {
    if (!noteReturn?.chapterId) { hideNoteReturn(); return; }
    const { chapterId, scrollY } = noteReturn;
    hideNoteReturn();
    await openChapter(chapterId, { restoreScroll: false });
    requestAnimationFrame(() => window.scrollTo(0, scrollY || 0));
  }

  function renderChapter(ch, idx) {
    const flat = flatChapters[idx];
    const words = chapterWords(flat, ch);
    paintChapterMeta(
      {
        part_roman: ch.part_roman || flat.part_roman,
        part_subtitle: ch.part_subtitle || flat.part_subtitle,
        title: ch.title,
        number_label: ch.number_label,
      },
      words
    );
    $("#header-part").textContent = `Part ${ch.part_roman || flat.part_roman}`;
    $("#header-chapter").textContent = ch.title;

    const paras = Array.isArray(ch.paragraphs) ? ch.paragraphs : [];
    if (chapterText) chapterText.dataset.paras = String(paras.length);
    const inNotes = isNotesChapter(ch);
    const frag = document.createDocumentFragment();
    // Optional curator epigraph (§5): rendered above the first paragraph.
    if (ch.epigraph && typeof ch.epigraph === "object" && ch.epigraph.text) {
      const epi = document.createElement("blockquote");
      epi.className = "chapter-epigraph";
      epi.textContent = ch.epigraph.text;
      if (ch.epigraph.source) {
        const cite = document.createElement("cite");
        cite.textContent = ch.epigraph.source;
        epi.appendChild(cite);
      }
      frag.appendChild(epi);
    }
    let lastNoteNum = null;
    paras.forEach((text, i) => {
      const p = document.createElement("p");
      p.textContent = String(text ?? "");
      // Drop-caps only suit a plain letter opener: short lines look cramped,
      // and ::first-letter would otherwise swallow a leading quote, dash, or
      // numeral. Numeral-led fragment openers ("125. The madman.") also earn
      // .reader-fragnum so books can style the number label (Gay Science GR6).
      if (i === 0 && (p.textContent.length < 80 || /^[^A-Za-z\u00C0-\u024F]/.test(p.textContent))) {
        p.classList.add("no-drop");
      }
      if (/^\d{1,4}\.\s/.test(p.textContent)) p.classList.add("reader-fragnum");
      // Contract §7: start-anchored NB paragraphs (WtP).
      if (/^(?:NB[\s.:]|N\.B\.\s)/.test(p.textContent)) p.classList.add("reader-nb");
      // Contract §6.1: note anchors in the notes part.
      if (inNotes) {
        const m = NOTE_LEAD_RE.exec(p.textContent);
        if (m) {
          const num = m[1];
          if (/^\d/.test(num)) {
            lastNoteNum = num;
            p.id = `note-${num}`;
            p.classList.add("reader-note");
            p.dataset.note = num;
          } else if (lastNoteNum) {
            // Lettered sub-note (e.g. "a. Q.v. Note 304 sub.").
            p.id = `note-${lastNoteNum}${num}`;
            p.classList.add("reader-note-sub");
            p.dataset.note = `${lastNoteNum}${num}`;
          }
        } else if (/^[a-z]\.\s/.test(p.textContent) && lastNoteNum) {
          const sub = p.textContent[0];
          p.id = `note-${lastNoteNum}${sub}`;
          p.classList.add("reader-note-sub");
          p.dataset.note = `${lastNoteNum}${sub}`;
        }
      }
      frag.appendChild(p);
    });
    chapterText.innerHTML = "";
    chapterText.appendChild(frag);
    // Contract §6.2–6.3: note→note idioms + curated body→note refs.
    if (inNotes) linkifyNoteRefs(chapterText);
    applyCuratedRefs(ch);

    const prev = flatChapters[idx - 1];
    const next = flatChapters[idx + 1];
    const btnPrev = $("#btn-prev");
    const btnNext = $("#btn-next");
    if (btnPrev) {
      btnPrev.disabled = !prev;
      $("#prev-title").textContent = prev ? prev.title : "—";
    }
    if (btnNext) {
      btnNext.disabled = !next;
      $("#next-title").textContent = next ? next.title : "—";
    }

    if (!REDUCED_MOTION && readerBody && typeof readerBody.animate === "function") {
      readerBody.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 320, easing: "cubic-bezier(0.22,1,0.36,1)" }
      );
    }
  }

  function updateProgress() {
    if (!progressFill) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }

  let scrollSaveTimer = null;
  function onScroll() {
    updateProgress();
    headerEl?.classList.toggle("scrolled", window.scrollY > 8);
    if (!currentId) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable > 0 && window.scrollY / scrollable > 0.8) markRead(currentId);
    clearTimeout(scrollSaveTimer);
    scrollSaveTimer = setTimeout(() => {
      saveState({ chapterId: currentId, scrollY: window.scrollY });
    }, 400);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fillCoverFromToc() {
    if (!toc) return;
    // Title HTML is designed per-book in index.html — don't flatten it.
    const a = $("#cover-author");
    const d = $("#cover-dedication");
    const q = $("#cover-quote");
    const f = $("#cover-footer-meta");
    if (a) a.textContent = toc.author;
    if (d) {
      if (toc.dedication) {
        d.textContent = toc.dedication;
        d.hidden = false;
      } else if (!d.textContent.trim()) {
        d.hidden = true;
      }
    }
    if (q && cfg.tagline && !q.textContent.trim()) q.textContent = cfg.tagline;
    if (f) {
      const n = flatChapters.length;
      const parts = toc.parts?.length || 0;
      const total = totalWords();
      f.textContent =
        `${parts} part${parts === 1 ? "" : "s"} \u00b7 ${n} chapter${n === 1 ? "" : "s"}` +
        (total > 0 ? ` \u00b7 ${fmtWords(total)} words \u00b7 ${fmtDuration(total)}` : "");
    }
    document.title = `${toc.title} — ${toc.author}`;
  }

  function bindEvents() {
    document.addEventListener("click", (e) => {
      // Contract §6: note references route through the resolver.
      const ref = e.target.closest(".reader-noteref");
      if (ref?.dataset.note) {
        e.preventDefault();
        const origin = $("#header-chapter")?.textContent || $("#meta-title")?.textContent || "";
        followNoteRef(ref.dataset.note, origin);
        return;
      }
      const actionEl = e.target.closest("[data-action]");
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (action === "begin") openChapter(flatChapters[0]?.id);
      else if (action === "open-toc") openToc();
      else if (action === "close-toc") closeToc();
      else if (action === "retry") openChapter(lastAttemptId || flatChapters[0]?.id);
      else if (action === "note-return") returnFromNote();
      else if (action === "resume") {
        const state = loadState();
        openChapter(state.chapterId, { restoreScroll: true });
      } else if (action === "library") {
        window.location.href = LIBRARY_HREF;
      }
    });

    $("#btn-home")?.addEventListener("click", showCover);
    $("#btn-library")?.addEventListener("click", () => {
      window.location.href = LIBRARY_HREF;
    });
    $("#btn-toc")?.addEventListener("click", openToc);
    // Arrow-key travel across visible TOC chapters (contract §9).
    tocList?.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const current = e.target.closest(".toc-chapter");
      if (!current || !tocList.contains(current)) return;
      const visible = [...tocList.querySelectorAll(".toc-chapter:not(.hidden)")];
      const i = visible.indexOf(current);
      if (i < 0) return;
      e.preventDefault();
      const next = visible[(i + (e.key === "ArrowDown" ? 1 : -1) + visible.length) % visible.length];
      next?.focus();
    });
    $("#btn-settings")?.addEventListener("click", (e) => {
      e.stopPropagation();
      openSettings();
    });

    $("#btn-prev")?.addEventListener("click", () => {
      const idx = chapterIndex(currentId);
      if (idx > 0) openChapter(flatChapters[idx - 1].id);
    });
    $("#btn-next")?.addEventListener("click", () => {
      const idx = chapterIndex(currentId);
      if (idx >= 0 && idx < flatChapters.length - 1) {
        markRead(currentId);
        openChapter(flatChapters[idx + 1].id);
      }
    });

    settingsCard?.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn[data-pref]");
      if (!btn || !settingsCard.contains(btn)) return;
      e.preventDefault();
      e.stopPropagation();
      setPref(btn.dataset.pref, btn.dataset.value);
    });
    // Arrow-key travel across each settings segmented row (single control).
    settingsCard?.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const btn = e.target.closest(".seg-btn[data-pref]");
      if (!btn) return;
      const row = btn.closest(".seg");
      if (!row) return;
      const btns = [...row.querySelectorAll(".seg-btn")];
      const i = btns.indexOf(btn);
      if (i < 0) return;
      e.preventDefault();
      const next = btns[(i + (e.key === "ArrowRight" ? 1 : -1) + btns.length) % btns.length];
      next.focus();
      setPref(next.dataset.pref, next.dataset.value);
    });
    // Auto tracks the OS while it stays selected (dark-leaning). Explicit
    // themes never re-resolve.
    try {
      matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
        const state = loadState();
        if (state.theme === AUTO) applyPrefs(state);
        else paintFollowNote(prefValue("theme", state));
      });
    } catch {}
    $("#settings-backdrop")?.addEventListener("click", closeSettings);
    $("#settings-close")?.addEventListener("click", closeSettings);

    window.addEventListener("scroll", onScroll, { passive: true });

    document.addEventListener("keydown", (e) => {
      const inField =
        e.target && typeof e.target.matches === "function"
          ? e.target.matches("input, textarea")
          : !!e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA");
      if (e.key === "Escape") {
        if (inField && e.target.blur) e.target.blur();
        if (settingsPanel?.classList.contains("open")) return closeSettings();
        if (tocDrawer?.classList.contains("open")) return closeToc();
        // On a note target with a pending return, Esc offers the way back.
        if (noteReturn && /^#note-/.test(location.hash || "")) return returnFromNote();
        return;
      }
      if (e.key === "/" && !inField && tocDrawer?.classList.contains("open")) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        tocSearch?.focus();
        return;
      }
      // "?" opens the keyboard shortcut reference (contract §9).
      if (e.key === "?" && !inField) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        toggleShortcutHelp();
        return;
      }
      if (e.key === "s" || e.key === "S") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        if (inField) return;
        if (reader.classList.contains("active")) {
          e.preventDefault();
          if (settingsPanel?.classList.contains("open")) closeSettings();
          else openSettings();
        }
        return;
      }
      if (e.key === "t" || e.key === "T") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        if (inField) return;
        e.preventDefault();
        if (tocDrawer.classList.contains("open")) closeToc();
        else if (reader.classList.contains("active") || cover.classList.contains("active")) openToc();
        return;
      }
      if (!reader.classList.contains("active")) return;
      if (tocDrawer?.classList.contains("open") || settingsPanel?.classList.contains("open")) return;
      if (e.key === "ArrowLeft" && (e.altKey || e.metaKey)) {
        e.preventDefault();
        $("#btn-prev")?.click();
      } else if (e.key === "ArrowRight" && (e.altKey || e.metaKey)) {
        e.preventDefault();
        $("#btn-next")?.click();
      } else if (e.key === "j" || e.key === "J") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        $("#btn-next")?.click();
      } else if (e.key === "k" || e.key === "K") {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        $("#btn-prev")?.click();
      }
    });
  }

  async function init() {
    // Landmark hardening (books share one template; roles enforced here so
    // all 13 pages gain them without per-book edits).
    tocDrawer?.setAttribute("role", "dialog");
    tocDrawer?.setAttribute("aria-modal", "false");
    if (tocDrawer && !tocDrawer.getAttribute("aria-label")) {
      tocDrawer.setAttribute("aria-label", "Table of contents");
    }
    reader?.setAttribute("role", "main");
    applyPrefs();
    injectChrome();
    bindEvents();
    try {
      await loadToc();
      buildToc();
      fillCoverFromToc();
      showCover();
    } catch (err) {
      console.error(err);
      const el = cover?.querySelector(".cover-content");
      if (el) {
        el.insertAdjacentHTML(
          "beforeend",
          `<p style="color:var(--accent);margin-top:2rem">Could not load book data. Serve over HTTP.</p>`
        );
      }
    } finally {
      setLoading(false);
    }
  }

  init();
})();
