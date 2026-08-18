/**
 * Atlas Shrugged — Literary Reader
 */
(() => {
  "use strict";

  const STORAGE_KEY = "atlas-shrugged-reader";
  const DEFAULTS = {
    theme: "dark",
    size: "md",
    leading: "normal",
    chapterId: null,
    scrollY: 0,
  };

  const SIZE_MAP = {
    sm: "1.15rem",
    md: "1.3rem",
    lg: "1.5rem",
    xl: "1.7rem",
  };
  const LEADING_MAP = {
    tight: "1.55",
    normal: "1.8",
    loose: "2.1",
  };

  /**
   * Site root for fetch() — works at domain root and under /repo-name/ on GitHub Pages.
   * Derived from this script's URL so it stays correct even without a trailing slash.
   */
  const BASE_URL = (() => {
    const el = document.querySelector('script[src*="app.js"]');
    if (el && el.src) {
      return el.src.replace(/js\/app\.js(?:\?.*)?$/i, "");
    }
    // Fallback: directory of the current page
    const path = location.pathname.replace(/\/index\.html?$/i, "/");
    if (path.endsWith("/")) return path;
    return path.replace(/[^/]*$/, "");
  })();

  function asset(path) {
    return BASE_URL + path.replace(/^\//, "");
  }

  /** @type {{ title: string, author: string, dedication: string, parts: any[] } | null} */
  let toc = null;
  /** Flat list of chapter stubs for prev/next */
  let flatChapters = [];
  /** @type {string | null} */
  let currentId = null;
  /** @type {Map<string, any>} */
  const chapterCache = new Map();

  // DOM
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const cover = $("#cover");
  const reader = $("#reader");
  const tocDrawer = $("#toc-drawer");
  const tocList = $("#toc-list");
  const settingsPanel = $("#settings-panel");
  const loading = $("#loading");
  const chapterText = $("#chapter-text");
  const progressFill = $("#progress-fill");
  const coverContinue = $("#cover-continue");

  // ── State ──────────────────────────────────

  function loadState() {
    try {
      return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch {
      return { ...DEFAULTS };
    }
  }

  function saveState(partial) {
    const next = { ...loadState(), ...partial };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  }

  function applyPrefs(state = loadState()) {
    const root = document.documentElement;
    const theme = ["dark", "sepia", "light"].includes(state.theme) ? state.theme : DEFAULTS.theme;
    const size = SIZE_MAP[state.size] ? state.size : DEFAULTS.size;
    const leading = LEADING_MAP[state.leading] ? state.leading : DEFAULTS.leading;

    // Data attributes drive theme CSS + fallbacks
    root.dataset.theme = theme;
    root.dataset.size = size;
    root.dataset.leading = leading;

    // Inline vars win over stylesheet — guarantees size/leading update live
    root.style.setProperty("--text-size", SIZE_MAP[size]);
    root.style.setProperty("--leading", LEADING_MAP[leading]);

    // Force a reflow so theme tokens resolve, then paint body
    const styles = getComputedStyle(root);
    document.body.style.backgroundColor = styles.getPropertyValue("--bg").trim();
    document.body.style.color = styles.getPropertyValue("--text").trim();

    // Active button states in the settings panel
    $$(".seg-btn[data-pref]").forEach((btn) => {
      const pref = btn.dataset.pref;
      const value = btn.dataset.value;
      const current =
        pref === "theme" ? theme :
        pref === "size" ? size :
        pref === "leading" ? leading :
        null;
      const on = value === current;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setPref(key, value) {
    if (!["theme", "size", "leading"].includes(key)) return;
    saveState({ [key]: value });
    applyPrefs();
  }

  // ── Data ───────────────────────────────────

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

  async function loadChapter(id) {
    if (chapterCache.has(id)) return chapterCache.get(id);
    const res = await fetch(asset(`data/chapters/${id}.json`));
    if (!res.ok) throw new Error(`Failed to load chapter ${id}`);
    const data = await res.json();
    chapterCache.set(id, data);
    return data;
  }

  function chapterIndex(id) {
    return flatChapters.findIndex((c) => c.id === id);
  }

  // ── Views ──────────────────────────────────

  function showCover() {
    cover.classList.add("active");
    cover.hidden = false;
    reader.classList.remove("active");
    reader.hidden = true;
    closeToc();
    closeSettings();
    document.title = "Atlas Shrugged — Ayn Rand";
    window.scrollTo(0, 0);

    const state = loadState();
    if (state.chapterId && flatChapters.some((c) => c.id === state.chapterId)) {
      coverContinue.classList.remove("hidden");
    } else {
      coverContinue.classList.add("hidden");
    }
  }

  function showReader() {
    cover.classList.remove("active");
    cover.hidden = true;
    reader.classList.add("active");
    reader.hidden = false;
  }

  function setLoading(on) {
    loading.classList.toggle("hidden", !on);
  }

  // ── TOC ────────────────────────────────────

  function buildToc() {
    if (!toc) return;
    const frag = document.createDocumentFragment();

    for (const part of toc.parts) {
      const section = document.createElement("div");
      section.className = "toc-part";

      const header = document.createElement("div");
      header.className = "toc-part-header";
      header.innerHTML = `Part ${part.roman}<span class="toc-part-sub">${escapeHtml(part.subtitle)}</span>`;
      section.appendChild(header);

      part.chapters.forEach((ch, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "toc-chapter";
        btn.dataset.chapterId = ch.id;
        btn.innerHTML = `
          <span class="toc-num">${romanToArabic(ch.roman) || i + 1}</span>
          <span class="toc-name">${escapeHtml(ch.title)}</span>
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
  }

  function highlightToc(id) {
    $$(".toc-chapter", tocList).forEach((el) => {
      el.classList.toggle("active", el.dataset.chapterId === id);
    });
  }

  function openToc() {
    tocDrawer.classList.add("open");
    tocDrawer.setAttribute("aria-hidden", "false");
    highlightToc(currentId);
  }

  function closeToc() {
    tocDrawer.classList.remove("open");
    tocDrawer.setAttribute("aria-hidden", "true");
  }

  function openSettings() {
    if (!settingsPanel) return;
    applyPrefs(); // sync active buttons
    settingsPanel.classList.add("open");
    settingsPanel.setAttribute("aria-hidden", "false");
    // focus first control for keyboard users
    const first = settingsPanel.querySelector(".seg-btn.active") || settingsPanel.querySelector(".seg-btn");
    first?.focus({ preventScroll: true });
  }

  function closeSettings() {
    if (!settingsPanel) return;
    settingsPanel.classList.remove("open");
    settingsPanel.setAttribute("aria-hidden", "true");
    $("#btn-settings")?.focus({ preventScroll: true });
  }

  // ── Render chapter ─────────────────────────

  async function openChapter(id, { restoreScroll = false } = {}) {
    if (!id) return;
    const idx = chapterIndex(id);
    if (idx < 0) return;

    setLoading(true);
    try {
      const ch = await loadChapter(id);
      currentId = id;
      showReader();
      renderChapter(ch, idx);
      saveState({ chapterId: id, scrollY: restoreScroll ? loadState().scrollY : 0 });

      if (restoreScroll) {
        const y = loadState().scrollY || 0;
        requestAnimationFrame(() => window.scrollTo(0, y));
      } else {
        window.scrollTo(0, 0);
      }

      document.title = `${ch.title} — Atlas Shrugged`;
      highlightToc(id);
      updateProgress();
    } catch (err) {
      console.error(err);
      alert("Could not load this chapter. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function renderChapter(ch, idx) {
    $("#meta-part").textContent = `Part ${ch.part_roman} · ${ch.part_subtitle}`;
    $("#meta-title").textContent = ch.title;
    $("#meta-number").textContent = ch.number_label;
    $("#header-part").textContent = `Part ${ch.part_roman}`;
    $("#header-chapter").textContent = ch.title;

    // Paragraphs
    const frag = document.createDocumentFragment();
    ch.paragraphs.forEach((text, i) => {
      const p = document.createElement("p");
      p.textContent = text;
      // Skip drop-cap for short opening dialogue lines
      if (i === 0 && (text.length < 80 || /^["\u201c\u2018']/.test(text))) {
        p.classList.add("no-drop");
      }
      frag.appendChild(p);
    });
    chapterText.innerHTML = "";
    chapterText.appendChild(frag);

    // Prev / next
    const prev = flatChapters[idx - 1];
    const next = flatChapters[idx + 1];
    const btnPrev = $("#btn-prev");
    const btnNext = $("#btn-next");

    btnPrev.disabled = !prev;
    btnNext.disabled = !next;
    $("#prev-title").textContent = prev ? prev.title : "—";
    $("#next-title").textContent = next ? next.title : "—";
  }

  // ── Progress ───────────────────────────────

  function updateProgress() {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }

  let scrollSaveTimer = null;
  function onScroll() {
    updateProgress();
    if (!currentId) return;
    clearTimeout(scrollSaveTimer);
    scrollSaveTimer = setTimeout(() => {
      saveState({ chapterId: currentId, scrollY: window.scrollY });
    }, 400);
  }

  // ── Helpers ────────────────────────────────

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function romanToArabic(roman) {
    if (!roman) return null;
    if (/^\d+$/.test(roman)) return roman;
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let n = 0;
    const s = roman.toUpperCase();
    for (let i = 0; i < s.length; i++) {
      const cur = map[s[i]] || 0;
      const next = map[s[i + 1]] || 0;
      n += cur < next ? -cur : cur;
    }
    return n || null;
  }

  // ── Events ─────────────────────────────────

  function bindEvents() {
    // Cover actions
    document.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (action === "begin") {
        openChapter(flatChapters[0]?.id);
      } else if (action === "open-toc") {
        openToc();
      } else if (action === "close-toc") {
        closeToc();
      } else if (action === "resume") {
        const state = loadState();
        openChapter(state.chapterId, { restoreScroll: true });
      }
    });

    $("#btn-home")?.addEventListener("click", showCover);
    $("#btn-toc")?.addEventListener("click", openToc);
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
      if (idx >= 0 && idx < flatChapters.length - 1) openChapter(flatChapters[idx + 1].id);
    });

    // Settings: dedicated handlers (not data-action) so they always fire
    $("#settings-backdrop")?.addEventListener("click", closeSettings);
    $("#settings-close")?.addEventListener("click", closeSettings);

    settingsPanel?.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn[data-pref]");
      if (!btn || !settingsPanel.contains(btn)) return;
      e.preventDefault();
      e.stopPropagation();
      setPref(btn.dataset.pref, btn.dataset.value);
    });

    // Prevent clicks inside the card from hitting the backdrop layer
    $("#settings-card")?.addEventListener("click", (e) => e.stopPropagation());

    window.addEventListener("scroll", onScroll, { passive: true });

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if (e.target.matches("input, textarea")) return;

      if (e.key === "Escape") {
        if (settingsPanel?.classList.contains("open")) {
          closeSettings();
          return;
        }
        if (tocDrawer.classList.contains("open")) {
          closeToc();
          return;
        }
        return;
      }

      // Settings shortcut
      if ((e.key === "s" || e.key === "S") && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (reader.classList.contains("active")) {
          e.preventDefault();
          if (settingsPanel?.classList.contains("open")) closeSettings();
          else openSettings();
          return;
        }
      }

      if (!reader.classList.contains("active")) return;

      if (e.key === "ArrowLeft" && (e.altKey || e.metaKey)) {
        e.preventDefault();
        $("#btn-prev")?.click();
      } else if (e.key === "ArrowRight" && (e.altKey || e.metaKey)) {
        e.preventDefault();
        $("#btn-next")?.click();
      } else if (e.key === "t" || e.key === "T") {
        if (tocDrawer.classList.contains("open")) closeToc();
        else openToc();
      }
    });
  }

  // ── Init ───────────────────────────────────

  async function init() {
    applyPrefs();
    bindEvents();
    setLoading(true);
    try {
      await loadToc();
      buildToc();
      showCover();
    } catch (err) {
      console.error(err);
      cover.querySelector(".cover-content").insertAdjacentHTML(
        "beforeend",
        `<p style="color:var(--accent);margin-top:2rem">Could not load the book data. Serve this folder over HTTP (e.g. <code>python -m http.server</code>).</p>`
      );
    } finally {
      setLoading(false);
    }
  }

  init();
})();
