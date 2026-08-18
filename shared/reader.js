/**
 * Shared literary reader — used by every book in the library.
 * Expects window.BOOK_CONFIG = { storageKey, libraryHref? }
 */
(() => {
  "use strict";

  const cfg = window.BOOK_CONFIG || {};
  const STORAGE_KEY = cfg.storageKey || "literary-reader";
  const LIBRARY_HREF = cfg.libraryHref || "../../index.html";

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

  // Directory of the current book page (works on GitHub Pages project paths)
  const BASE_URL = new URL("./", window.location.href).href;

  function asset(path) {
    return new URL(path.replace(/^\//, ""), BASE_URL).href;
  }

  let toc = null;
  let flatChapters = [];
  let currentId = null;
  const chapterCache = new Map();

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

    root.dataset.theme = theme;
    root.dataset.size = size;
    root.dataset.leading = leading;
    root.style.setProperty("--text-size", SIZE_MAP[size]);
    root.style.setProperty("--leading", LEADING_MAP[leading]);

    const styles = getComputedStyle(root);
    document.body.style.backgroundColor = styles.getPropertyValue("--bg").trim();
    document.body.style.color = styles.getPropertyValue("--text").trim();

    $$(".seg-btn[data-pref]").forEach((btn) => {
      const pref = btn.dataset.pref;
      const value = btn.dataset.value;
      const current =
        pref === "theme" ? theme : pref === "size" ? size : pref === "leading" ? leading : null;
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

  function showCover() {
    cover.classList.add("active");
    cover.hidden = false;
    reader.classList.remove("active");
    reader.hidden = true;
    closeToc();
    closeSettings();
    if (toc) document.title = `${toc.title} — ${toc.author}`;
    window.scrollTo(0, 0);
    const state = loadState();
    if (state.chapterId && flatChapters.some((c) => c.id === state.chapterId)) {
      coverContinue?.classList.remove("hidden");
    } else {
      coverContinue?.classList.add("hidden");
    }
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
      header.innerHTML = `Part ${escapeHtml(part.roman)}<span class="toc-part-sub">${escapeHtml(
        part.subtitle || part.name || ""
      )}</span>`;
      section.appendChild(header);
      part.chapters.forEach((ch, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "toc-chapter";
        btn.dataset.chapterId = ch.id;
        btn.innerHTML = `
          <span class="toc-num">${escapeHtml(String(ch.roman || i + 1))}</span>
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
    applyPrefs();
    settingsPanel.classList.add("open");
    settingsPanel.setAttribute("aria-hidden", "false");
    const first =
      settingsPanel.querySelector(".seg-btn.active") || settingsPanel.querySelector(".seg-btn");
    first?.focus({ preventScroll: true });
  }

  function closeSettings() {
    if (!settingsPanel) return;
    settingsPanel.classList.remove("open");
    settingsPanel.setAttribute("aria-hidden", "true");
    $("#btn-settings")?.focus({ preventScroll: true });
  }

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
      document.title = `${ch.title} — ${toc?.title || "Reader"}`;
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
    $("#meta-part").textContent = `Part ${ch.part_roman}${
      ch.part_subtitle ? " · " + ch.part_subtitle : ""
    }`;
    $("#meta-title").textContent = ch.title;
    $("#meta-number").textContent = ch.number_label;
    $("#header-part").textContent = `Part ${ch.part_roman}`;
    $("#header-chapter").textContent = ch.title;

    const frag = document.createDocumentFragment();
    ch.paragraphs.forEach((text, i) => {
      const p = document.createElement("p");
      p.textContent = text;
      if (i === 0 && (text.length < 80 || /^["\u201c\u2018']/.test(text))) {
        p.classList.add("no-drop");
      }
      frag.appendChild(p);
    });
    chapterText.innerHTML = "";
    chapterText.appendChild(frag);

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
    if (!currentId) return;
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
      f.textContent = `${parts} part${parts === 1 ? "" : "s"} · ${n} chapter${n === 1 ? "" : "s"}`;
    }
    document.title = `${toc.title} — ${toc.author}`;
  }

  function bindEvents() {
    document.addEventListener("click", (e) => {
      const actionEl = e.target.closest("[data-action]");
      if (!actionEl) return;
      const action = actionEl.dataset.action;
      if (action === "begin") openChapter(flatChapters[0]?.id);
      else if (action === "open-toc") openToc();
      else if (action === "close-toc") closeToc();
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

    $("#settings-backdrop")?.addEventListener("click", closeSettings);
    $("#settings-close")?.addEventListener("click", closeSettings);
    settingsPanel?.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn[data-pref]");
      if (!btn || !settingsPanel.contains(btn)) return;
      e.preventDefault();
      e.stopPropagation();
      setPref(btn.dataset.pref, btn.dataset.value);
    });
    $("#settings-card")?.addEventListener("click", (e) => e.stopPropagation());

    window.addEventListener("scroll", onScroll, { passive: true });

    document.addEventListener("keydown", (e) => {
      if (e.target.matches("input, textarea")) return;
      if (e.key === "Escape") {
        if (settingsPanel?.classList.contains("open")) return closeSettings();
        if (tocDrawer?.classList.contains("open")) return closeToc();
        return;
      }
      if ((e.key === "s" || e.key === "S") && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (reader.classList.contains("active")) {
          e.preventDefault();
          if (settingsPanel?.classList.contains("open")) closeSettings();
          else openSettings();
        }
        return;
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

  async function init() {
    applyPrefs();
    bindEvents();
    setLoading(true);
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
