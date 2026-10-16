/**
 * Zarathustra Solar Gospel shell — book-owned behavior.
 * Listens to `reader:chapter` ONLY (contract §2-§3); never patches shared
 * internals, never polls. Pull-line captions render via the manifest
 * figcaption (reader-owned) — this script MUST NOT duplicate captions.
 * It adds: opener class flags on body (form/song/phase), TOC part-seal
 * markers + song ticks, and progress-horizon part-phase dots.
 * Decorative nodes are aria-hidden. Console-clean by design.
 */
(() => {
  "use strict";

  const BOOK = "thus-spoke-zarathustra";

  // Form grammar from the §81 map (titles verified against toc.json; prose
  // verification stays with cohort leads). Songs get the lyric flag; visions
  // get the scene flag; the three finales get the finale flag.
  const SONGS = new Set([
    "p2c9", "p2c10", "p2c11",
    "p3c4", "p3c6", "p3c9", "p3c14", "p3c15", "p3c16",
    "p4c14", "p4c16", "p4c19",
  ]);
  const VISIONS = new Set([
    "p1c1", "p2c1", "p2c22", "p3c1", "p3c2", "p3c13", "p4c10", "p4c2",
  ]);
  const FINALES = new Set(["p1c23", "p3c16", "p4c20"]);

  // Part IV ember pivot (Z6): p4c1–p4c9 ember-led, p4c10 the still pivot,
  // p4c11–p4c20 gold returns. Phase flags let cohort CSS key treatments.
  function phaseFor(partId, chapterId) {
    if (partId === "part-1") return "dawn";
    if (partId === "part-2") return "night";
    if (partId === "part-3") return "zenith";
    if (partId === "part-4") {
      if (chapterId === "p4c10") return "pivot";
      const n = parseInt(String(chapterId).slice(3), 10);
      if (Number.isFinite(n)) return n < 10 ? "ember" : "morning";
      return "ember";
    }
    return null;
  }

  function formFor(chapterId) {
    if (FINALES.has(chapterId)) return "finale";
    if (SONGS.has(chapterId)) return "song";
    if (VISIONS.has(chapterId)) return "vision";
    return "sermon";
  }

  // 81 chapters: p1c1-23, p2c1-22, p3c1-16, p4c1-20 (toc.json census).
  const PART_BOUNDARIES = [
    { phase: "dawn", frac: 0 },
    { phase: "night", frac: 23 / 81 },
    { phase: "zenith", frac: 45 / 81 },
    { phase: "sign", frac: 61 / 81 },
  ];

  function ensurePhaseDots(track) {
    if (!track || track.querySelector(":scope > .z-phase-dots")) return;
    const wrap = document.createElement("span");
    wrap.className = "z-phase-dots";
    wrap.setAttribute("aria-hidden", "true");
    for (const b of PART_BOUNDARIES) {
      const dot = document.createElement("span");
      dot.className = "z-phase-dot";
      dot.dataset.phase = b.phase;
      dot.style.left = `${(b.frac * 100).toFixed(2)}%`;
      wrap.appendChild(dot);
    }
    track.appendChild(wrap);
  }

  function markPhaseDots(track, partId) {
    if (!track) return;
    const order = ["part-1", "part-2", "part-3", "part-4"];
    const idx = order.indexOf(partId);
    track.querySelectorAll(".z-phase-dot").forEach((dot, i) => {
      dot.classList.toggle("z-passed", idx >= 0 && i <= idx);
    });
  }

  function decorateToc() {
    const list = document.getElementById("toc-list");
    if (!list) return;
    // Part seal markers: one engraved ring per part header (CSS phases them).
    list.querySelectorAll(":scope > .toc-part > .toc-part-header").forEach((header) => {
      if (header.querySelector(":scope > .z-seal-dot")) return;
      const dot = document.createElement("span");
      dot.className = "z-seal-dot";
      dot.setAttribute("aria-hidden", "true");
      header.prepend(dot);
    });
    // Song rows earn the fountain tick; finale rows earn the seal tick.
    list.querySelectorAll(".toc-chapter[data-chapter-id]").forEach((btn) => {
      const id = btn.dataset.chapterId;
      if (SONGS.has(id)) btn.classList.add("z-song");
      if (FINALES.has(id)) btn.classList.add("z-finale");
    });
  }

  function onChapter(detail) {
    if (!detail || detail.book !== BOOK) return;
    const { chapterId, partId } = detail;
    if (!chapterId) return;
    document.body.dataset.zForm = formFor(chapterId);
    const phase = phaseFor(partId, chapterId);
    if (phase) document.body.dataset.zPhase = phase;
    else delete document.body.dataset.zPhase;
    const track = document.querySelector(".progress-track");
    ensurePhaseDots(track);
    markPhaseDots(track, partId);
    decorateToc();
  }

  document.addEventListener("reader:chapter", (ev) => {
    try {
      onChapter(ev && ev.detail);
    } catch {
      // Shell markers must never break reading; stay console-clean.
    }
  });

  // TOC + progress nodes are reader-owned and render after boot: observe
  // their arrival (no polling, no shared patching), then decorate once.
  function observeOwned() {
    const tocList = document.getElementById("toc-list");
    if (tocList && !tocList.dataset.zObserved) {
      tocList.dataset.zObserved = "1";
      const tocObserver = new MutationObserver(() => {
        decorateToc();
      });
      tocObserver.observe(tocList, { childList: true });
      decorateToc();
    }
    const fill = document.getElementById("progress-fill");
    const track = fill ? fill.closest(".progress-track") : null;
    if (track && !track.dataset.zObserved) {
      track.dataset.zObserved = "1";
      ensurePhaseDots(track);
      const fillObserver = new MutationObserver(() => {
        const partId = document.body.dataset.partId;
        markPhaseDots(track, partId);
      });
      fillObserver.observe(fill, { attributes: true, attributeFilter: ["style"] });
    }
    if ((!tocList || tocList.dataset.zObserved) && (!track || track.dataset.zObserved)) {
      document.removeEventListener("DOMContentLoaded", observeOwned);
      return true;
    }
    return false;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", observeOwned);
  }
  observeOwned();
})();
