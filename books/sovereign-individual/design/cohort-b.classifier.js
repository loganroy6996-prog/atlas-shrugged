/* SPECIE — Cohort B (B-dissolution) book-JS classifier snippet.
   Supervisor-owned integration: paste into the book-owned index.html script tag
   (reader:chapter listener, slots-only + class tagging; never prose edits, never
   reader-* class names). Source: design/cohort-b.design.md §9 + §4 banner.
   Standalone reference copy: design/cohort-b.classifier.js (this file).
   Index convention: 0-based JSON paragraph indices. The heading_index_map in
   design/cohort-b.json is 1-based nth-of-type (= JS index + 1); every map
   below is the JSON value minus one. */
(function () {
  "use strict";

  /* §9.1 stop-words: cohort-A set + {or,at,from,into,not} per the B spec
     (not for p1c8 "That's Not My Job"). */
  var STOPWORDS = {
    of: 1, the: 1, a: 1, an: 1, and: 1, in: 1, on: 1, to: 1,
    for: 1, with: 1, without: 1, as: 1, by: 1, vs: 1,
    or: 1, at: 1, from: 1, into: 1, not: 1
  };

  /* Explicit census completions: heads the Title-Case rule misses (lowercase
     lead, terminal punctuation, too many words). Verified against
     books/sovereign-individual/data/chapters/p1c{5,6,8}.json 2026-10-15. */
  var EXPLICIT_TITLE_HEADS = {
    p1c5: [23],           /* [24] "Magnitude over Efficiency" (over = prep lead) */
    p1c6: [217],          /* [218] "Protecting What?" (terminal ?) */
    p1c8: [132, 168]      /* [133] "Non citizens of the Pale" [sic]; [169] "Why Firms?" (?) */
  };
  /* Quoted minor heads → sv-head-quote (Bodoni italic display). */
  var QUOTE_HEADS = {
    p1c5: [],
    p1c6: [134],          /* [135] "Tools with a Voice" */
    p1c8: [131, 189, 196] /* [132] "Town air brings freedom." MEDIEVAL ADAGE;
                             [190] "Organizational Slack"; [197] "That's Not My Job" */
  };
  var ATTR_STOPS = {
    p1c5: [98, 139],              /* TILLY · FUJIMORI tail */
    p1c6: [8, 16, 183, 264, 265], /* HOBBES, ISAIAH, BLIAS, CAMPEN pair */
    p1c8: [42, 85]                /* SHERMAN · DAVIDSON tails */
  };
  /* Quote paras reuniting visually with a following sv-attr (pairing rule). */
  var QUOTE_LEDES = {
    p1c5: [97, 138],  /* [98] Tilly quote wrap · [139] Fujimori ([140] is the pull attr) */
    p1c6: [263],      /* [264] blind-and-deafen quote (CAMPEN pair follows) */
    p1c8: [41, 84]    /* [42] Jenkins-and-Barrie · [85] postcolonial-state quotes */
  };
  var EPIGRAPHS = { p1c5: [0], p1c6: [1], p1c8: [0] };
  var TITLE_HEADS = { p1c6: [0] };        /* [1] chapter-title line above the epigraph */
  /* p1c6 enumerations: run-in Plex Mono Specie numerals, body serif untouched.
     The 8-vs-6 asymmetry is the argument — never renumbered. */
  var ENUMS = {
    p1c5: [],
    p1c6: [83, 84, 86, 89, 92, 94, 96, 97, 107, 108, 110, 111, 112, 114],
    p1c8: []
  };
  var PULLS = { p1c5: [138] };            /* [139] Fujimori framed pull (+ attr [140]) */
  var PULLS_FLINT = { p1c6: [4] };        /* [5] Flint payoff — opening detonation */
  var COLON_LEDES = { p1c5: [118] };      /* [119] hidden-reasons rubric */
  var TRAILERS = { p1c6: [285, 286] };    /* [286–287] imprint trailer */
  var RUNINS = { p1c8: [20, 22, 24, 27] };/* [21,23,25,28] Ammon trait ledes */
  /* p1c5 date-stamp ledger rows (the one special): 0-based idx → stamp year. */
  var STAMPS = {
    p1c5: { 140: "1993", 143: "1993", 147: "1993", 156: "1994" }
  };
  var STAMP_HEADS = { p1c5: [146] };      /* [147] "Peru in Ruins" + · 1993 suffix */
  var CUT_RULES = { p1c6: [221] };        /* [222] hinge head cut-rule ornament */
  /* p1c8 prize-table (the one special): row (a) pair + wrap, rows (b)/(c). */
  var PRIZES = { p1c8: [6] };
  var PRIZE_WRAPS = { p1c8: [7] };
  var PRIZE_ROWS = { p1c8: [8, 9] };
  /* p1c8 Dray triptych: one verse block (first/last frame it). */
  var VERSES = { p1c8: [193, 194, 195] };

  function inList(map, chapterId, idx) {
    return !!(map[chapterId] && map[chapterId].indexOf(idx) !== -1);
  }

  function stripEdge(word) {
    return word.replace(/^["“”‘’(),—–]+|["“”‘’(),—–.]+$/g, "");
  }

  function isCapsHead(text, chapterId, idx) {
    var t = text.trim();
    if (t.length < 4 || t.length > 120) return false;
    if (t[0] === "-" || (t[0] >= "0" && t[0] <= "9")) return false;
    if (inList(ATTR_STOPS, chapterId, idx)) return false;
    if (inList(TRAILERS, chapterId, idx)) return false;
    var alpha = t.replace(/[^A-Za-z]/g, "");
    if (!alpha) return false;
    return alpha === alpha.toUpperCase();
  }

  function isTitleHead(text) {
    var t = text.trim();
    if (!t || t.length > 70) return false;
    if (".:;\"?!".indexOf(t[t.length - 1]) !== -1) return false;
    var words = t.split(/\s+/);
    if (!words.length || words.length > 9) return false;
    if (words[0][0] !== words[0][0].toUpperCase()) return false;
    for (var i = 0; i < words.length; i++) {
      var core = stripEdge(words[i]);
      if (!core) continue;
      if (STOPWORDS[core.toLowerCase()]) continue;
      if (core[0] !== core[0].toUpperCase()) return false;
    }
    return true;
  }

  /* Served leading numeral ("1."–"8.") restated as a struck marker. */
  function enumNumeral(text) {
    var m = text.trim().match(/^(\d{1,2})\.\s/);
    return m ? m[1] : "";
  }

  function tagParagraphs(chapterId) {
    var text = document.getElementById("chapter-text");
    if (!text) return;
    var paras = text.querySelectorAll(":scope > p");
    paras.forEach(function (p, idx) {
      var raw = (p.textContent || "").trim();
      /* Order matters: explicit roles first, generic heads last. */
      if (inList(EPIGRAPHS, chapterId, idx)) { p.classList.add("sv-epigraph"); return; }
      if (inList(QUOTE_HEADS, chapterId, idx)) { p.classList.add("sv-head-quote"); return; }
      if (inList(ENUMS, chapterId, idx)) {
        p.classList.add("sv-enum");
        var n = enumNumeral(raw);
        if (n) p.setAttribute("data-enum", n);
        return;
      }
      if (inList(ATTR_STOPS, chapterId, idx)) { p.classList.add("sv-attr"); return; }
      if (inList(QUOTE_LEDES, chapterId, idx)) {
        /* Fujimori [138] is the framed pull; its lede styling is the frame. */
        if (!(chapterId === "p1c5" && idx === 138)) p.classList.add("sv-quote-lede");
      }
      if (inList(PULLS, chapterId, idx)) { p.classList.add("sv-pull"); return; }
      if (inList(PULLS_FLINT, chapterId, idx)) { p.classList.add("sv-pull-flint"); return; }
      if (inList(COLON_LEDES, chapterId, idx)) { p.classList.add("sv-rubric"); return; }
      if (inList(TRAILERS, chapterId, idx)) { p.classList.add("sv-trailer"); return; }
      if (inList(RUNINS, chapterId, idx)) { p.classList.add("sv-runin"); return; }
      if (STAMPS[chapterId] && STAMPS[chapterId][idx]) {
        p.classList.add("sv-stamp");
        p.setAttribute("data-stamp", STAMPS[chapterId][idx]);
        return;
      }
      if (inList(PRIZES, chapterId, idx)) { p.classList.add("sv-prize"); return; }
      if (inList(PRIZE_WRAPS, chapterId, idx)) { p.classList.add("sv-prize-wrap"); return; }
      if (inList(PRIZE_ROWS, chapterId, idx)) { p.classList.add("sv-prize-row"); return; }
      if (inList(VERSES, chapterId, idx)) {
        p.classList.add("sv-verse");
        if (idx === 193) p.classList.add("sv-verse-first");
        if (idx === 195) p.classList.add("sv-verse-last");
        return;
      }
      if (inList(TITLE_HEADS, chapterId, idx)) { p.classList.add("sv-head-title"); return; }
      if (isCapsHead(raw, chapterId, idx)) { p.classList.add("sv-head-caps"); return; }
      if (isTitleHead(raw) || inList(EXPLICIT_TITLE_HEADS, chapterId, idx)) {
        p.classList.add("sv-head-title");
        if (inList(STAMP_HEADS, chapterId, idx)) p.classList.add("sv-stamp-head");
        if (inList(CUT_RULES, chapterId, idx)) p.classList.add("sv-cut-rule");
      }
    });
  }

  /* §3 banner: meet <-> slice swap at 900px (default attribute is meet). */
  function fitPlate() {
    var svg = document.querySelector("#chapter-art.plate svg");
    if (!svg) return;
    svg.setAttribute("preserveAspectRatio",
      window.innerWidth < 900 ? "xMidYMid slice" : "xMidYMid meet");
  }

  /* §9.4 assay label: "ASSAYED n%" on the progress channel. */
  function assayLabel() {
    var fill = document.getElementById("progress-fill");
    if (!fill) return;
    var pct = Math.round(parseFloat(fill.style.width) || 0);
    var track = fill.closest(".progress-track");
    if (track) track.setAttribute("aria-label", "Assayed " + pct + "%");
  }

  document.addEventListener("reader:chapter", function (ev) {
    if (!ev.detail || ev.detail.book !== "sovereign-individual") return;
    tagParagraphs(ev.detail.chapterId);
    fitPlate();
    assayLabel();
  });
  window.addEventListener("resize", fitPlate);
  document.addEventListener("scroll", assayLabel, { passive: true });
})();
