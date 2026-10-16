/* SPECIE — The Private Banknote · book-owned reader integration.
   Supervisor-owned. Listens for `reader:chapter` only (READER-CONTRACT §2–§3);
   tags paragraphs with `sv-` classes (never `reader-*`), swaps the plate
   preserveAspectRatio at the 900px banner breakpoint, and labels the assay bar.
   Never edits prose; never touches shared files. Built from cohort-a.classifier.js
   + cohort-c.json heading_index_map (1-based nth-of-type → 0-based here). */
(function () {
  "use strict";

  var STOPWORDS = {
    of: 1, the: 1, a: 1, an: 1, and: 1, in: 1, on: 1, to: 1,
    for: 1, with: 1, without: 1, as: 1, by: 1, vs: 1,
    or: 1, at: 1, from: 1, into: 1, not: 1
  };

  /* 0-based paragraph indices, verified against data/chapters/*.json 2026-10-15.
     Cohort B/C manifests record 1-based nth-of-type; subtract 1 here. */
  var EXPLICIT_TITLE_HEADS = {
    p1c1: [81],
    p1c2: [36, 58],
    p1c3: [93, 103],
    p1c4: [34, 85, 120],
    p1c5: [23],            /* "Magnitude over Efficiency" */
    p1c6: [217],           /* "Protecting What?" (terminal ?) */
    p1c8: [132, 168]       /* "Non citizens of the Pale" [sic]; "Why Firms?" */
  };
  var QUOTE_HEADS = {
    p1c4: [120],
    p1c6: [134],           /* "Tools with a Voice" */
    p1c8: [131, 189, 196]  /* "Town air…"; "Organizational Slack"; "That's Not My Job" */
  };
  /* Attribution stoplists: ALL-CAPS lines that are citations, not heads. */
  var ATTR_STOPS = {
    p1c1: [111], p1c2: [1, 114, 117, 119, 121],
    p1c3: [], p1c4: [67, 95, 163, 170],
    p1c5: [98, 139],                 /* TILLY · FUJIMORI tail */
    p1c6: [8, 16, 183, 264, 265],    /* HOBBES, ISAIAH, BLIAS, CAMPEN pair */
    p1c7: [24],                      /* CLARKE — epigraph attribution */
    p1c8: [42, 85],                  /* SHERMAN; DAVIDSON — quote attributions */
    p1c9: [], p1c10: [118],
    p1c11: []
  };
  /* Quote paras reuniting visually with a following sv-attr (pairing rule). */
  var QUOTE_LEDES = {
    p1c5: [97, 138],  /* Tilly quote wrap · Fujimori (framed pull, not lede) */
    p1c6: [263],      /* blind-and-deafen quote (CAMPEN pair follows) */
    p1c8: [41, 84]    /* Jenkins-and-Barrie · postcolonial-state quotes */
  };
  var EPIGRAPHS = { p1c1: [0], p1c2: [0], p1c5: [0], p1c6: [1], p1c8: [0], p1c9: [0, 1], p1c10: [0], p1c11: [0] };
  var EPIGRAPH_ATTRS = { p1c2: [1], p1c9: [2], p1c10: [1], p1c11: [] };
  var TITLE_HEADS = { p1c6: [0] };  /* chapter-title line above the epigraph */
  var ENUMS = {
    p1c2: [114, 117, 119, 121],
    p1c6: [83, 84, 86, 89, 92, 94, 96, 97, 107, 108, 110, 111, 112, 114]
  };
  var LEDGER = { p1c2: [71, 72, 73, 74, 75, 76, 77, 78, 79] };
  var PULLS = { p1c1: [66], p1c5: [138] };   /* Fujimori framed pull (+ attr [139]) */
  var PULLS_FLINT = { p1c6: [4] };           /* Flint payoff — opening detonation */
  var QUOTE_PAIRS = { p1c1: [110] };        /* + following sv-attr [111] */
  var BALLAD_ATTR_ONLY = { p1c4: [163], p1c1: [111], p1c2: [1, 114, 117, 119, 121] };
  var TECH_CARDS = { p1c3: [91] };
  var SCANDAL = { p1c4: [6, 7] };
  var BALLAD = { p1c4: [160, 161, 162] };
  var GLOSS = { p1c4: [2] };
  var COLON_LEDES = { p1c5: [118] };        /* hidden-reasons rubric */
  var TRAILERS = { p1c6: [285, 286] };      /* imprint trailer */
  var RUNINS = { p1c8: [20, 22, 24, 27] };  /* Ammon trait ledes */
  /* p1c5 date-stamp ledger rows (the one special): 0-based idx → stamp year. */
  var STAMPS = { p1c5: { 140: "1993", 143: "1993", 147: "1993", 156: "1994" } };
  var STAMP_HEADS = { p1c5: [146] };        /* "Peru in Ruins" + · 1993 suffix */
  var CUT_RULES = { p1c6: [221] };          /* hinge head cut-rule ornament */
  /* p1c8 prize-table (the one special): row (a) pair + wrap, rows (b)/(c). */
  var PRIZES = { p1c8: [6] };
  var PRIZE_WRAPS = { p1c8: [7] };
  var PRIZE_ROWS = { p1c8: [8, 9] };
  /* p1c8 Dray triptych: one verse block (first/last frame it). */
  var VERSES = { p1c8: [193, 194, 195] };
  /* Cohort C specials. */
  var TRADE_CARDS = { p1c9: [3] };            /* http://www.ibm.com */
  var ASSAY_ROWS = { p1c10: [3, 4, 5] };      /* Quigley conditions table */
  var APPENDIX_HEADS = { p1c11: [248, 249] }; /* APPENDIX 1: / IMPLICATIONS AND STRATEGIES */
  var APPENDIX_EPI = { p1c11: [250] };        /* "Of all 36 ways…" + CHINESE PROVERB [251] */
  var APPENDIX_EPI_ATTRS = { p1c11: [251] };
  /* p1c11 footnote tail: 288 'Footnotes' divider; chapter headers; notes. */
  var TAIL_START = { p1c11: 288 };
  var TAIL_HEADS = { p1c11: [289, 317, 345, 391, 461, 488, 543, 568, 608, 739, 781, 824] };

  function inList(map, chapterId, idx) {
    return !!(map[chapterId] && map[chapterId].indexOf(idx) !== -1);
  }

  /* Served leading numeral ("1."–"8.") restated as a struck marker. */
  function enumNumeral(text) {
    var m = text.trim().match(/^(\d{1,2})\.\s/);
    return m ? m[1] : "";
  }

  function stripEdge(word) {
    return word.replace(/^["“”‘’(),—–]+|["“”‘’(),—–.]+$/g, "");
  }

  function isCapsHead(text, chapterId, idx) {
    var t = text.trim();
    if (t.length < 4 || t.length > 120) return false;
    if (t[0] === "-" || (t[0] >= "0" && t[0] <= "9")) return false;
    if (t[t.length - 1] === ",") return false; /* wrapped attribution, e.g. p1c6[264] */
    if (inList(ATTR_STOPS, chapterId, idx)) return false;
    if (inList(TAIL_HEADS, chapterId, idx)) return false;
    var ts = TAIL_START[chapterId];
    if (ts !== undefined && idx >= ts) return false;
    var alpha = t.replace(/[^A-Za-z]/g, "");
    if (!alpha) return false;
    return alpha === alpha.toUpperCase();
  }

  function isTitleHead(text) {
    var t = text.trim();
    if (!t || t.length > 70) return false;
    if (".:;\"?!".indexOf(t[t.length - 1]) !== -1) return false;
    var words = t.split(/\s+/);
    if (!words.length || words.length > 8) return false;
    if (words[0][0] !== words[0][0].toUpperCase()) return false;
    for (var i = 0; i < words.length; i++) {
      var core = stripEdge(words[i]);
      if (!core) continue;
      if (STOPWORDS[core.toLowerCase()]) continue;
      if (core[0] !== core[0].toUpperCase()) return false;
    }
    return true;
  }

  function tagParagraphs(chapterId) {
    var text = document.getElementById("chapter-text");
    if (!text) return;
    var transitionStep = 0;
    var paras = text.querySelectorAll(":scope > p");
    paras.forEach(function (p, idx) {
      var raw = (p.textContent || "").trim();
      /* Footnote tail first: archive treatment owns everything from TAIL_START. */
      var ts = TAIL_START[chapterId];
      if (ts !== undefined && idx >= ts) {
        if (idx === ts) p.classList.add("sv-archive-divider");
        else if (inList(TAIL_HEADS, chapterId, idx)) p.classList.add("sv-archive-head");
        else p.classList.add("sv-archive-note");
        return;
      }
      /* Explicit roles first, generic heads last. */
      if (inList(EPIGRAPHS, chapterId, idx)) { p.classList.add("sv-epigraph"); return; }
      if (inList(EPIGRAPH_ATTRS, chapterId, idx)) { p.classList.add("sv-epigraph-attr"); return; }
      if (inList(APPENDIX_EPI, chapterId, idx)) { p.classList.add("sv-epigraph"); return; }
      if (inList(APPENDIX_EPI_ATTRS, chapterId, idx)) { p.classList.add("sv-epigraph-attr"); return; }
      if (inList(APPENDIX_HEADS, chapterId, idx)) { p.classList.add("sv-head-caps"); return; }
      if (inList(TITLE_HEADS, chapterId, idx)) { p.classList.add("sv-head-title"); return; }
      if (inList(ENUMS, chapterId, idx)) {
        p.classList.add("sv-enum");
        var n = enumNumeral(raw);
        if (n) p.setAttribute("data-enum", n);
        return;
      }
      if (inList(ATTR_STOPS, chapterId, idx)) {
        /* Standalone attributions keep their own margins EXCEPT the verified
           reunion pairs (cohort A + B quote-ledes + Fujimori pull), which
           rejoin their quote via sv-attr-pair (margin-top 0). */
        p.classList.add("sv-attr");
        if (inList(BALLAD_ATTR_ONLY, chapterId, idx)) p.classList.add("sv-attr-pair");
        if (inList(QUOTE_LEDES, chapterId, idx - 1) || (chapterId === "p1c5" && idx === 139)) p.classList.add("sv-attr-pair");
        if (inList(BALLAD, chapterId, idx - 1) || (chapterId === "p1c4" && idx === 163)) p.classList.add("sv-ballad-attr");
        return;
      }
      if (inList(QUOTE_HEADS, chapterId, idx)) { p.classList.add("sv-head-quote"); return; }
      if (inList(LEDGER, chapterId, idx)) { p.classList.add("sv-ledger"); return; }
      if (inList(QUOTE_LEDES, chapterId, idx)) {
        /* Fujimori [138] is the framed pull; its lede styling is the frame. */
        if (!(chapterId === "p1c5" && idx === 138)) p.classList.add("sv-quote-lede");
      }
      if (inList(PULLS, chapterId, idx)) { p.classList.add("sv-pull"); return; }
      if (inList(PULLS_FLINT, chapterId, idx)) { p.classList.add("sv-pull-flint"); return; }
      if (inList(QUOTE_PAIRS, chapterId, idx)) { p.classList.add("sv-quote-pair"); return; }
      if (inList(TECH_CARDS, chapterId, idx)) { p.classList.add("sv-tech"); return; }
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
      if (inList(TRADE_CARDS, chapterId, idx)) { p.classList.add("sv-trade"); return; }
      if (inList(ASSAY_ROWS, chapterId, idx)) { p.classList.add("sv-assay-row"); return; }
      if (inList(SCANDAL, chapterId, idx)) {
        p.classList.add("sv-scandal");
        if (idx === 6) p.classList.add("sv-scandal-first");
        return;
      }
      if (inList(BALLAD, chapterId, idx)) {
        p.classList.add("sv-ballad");
        if (idx === 160) p.classList.add("sv-ballad-first");
        if (idx === 162) p.classList.add("sv-ballad-last");
        return;
      }
      if (inList(GLOSS, chapterId, idx)) { p.classList.add("sv-gloss"); return; }
      if (isCapsHead(raw, chapterId, idx)) {
        p.classList.add("sv-head-caps");
        /* p1c9: cycle the three transition ornaments across major heads. */
        if (chapterId === "p1c9") {
          p.classList.add("sv-tr-" + "abc"[transitionStep % 3]);
          transitionStep += 1;
        }
        /* p1c10: marginal hour-tick on major heads. */
        if (chapterId === "p1c10") p.classList.add("sv-hour");
        return;
      }
      if (isTitleHead(raw) || inList(EXPLICIT_TITLE_HEADS, chapterId, idx)) {
        p.classList.add("sv-head-title");
        if (inList(STAMP_HEADS, chapterId, idx)) p.classList.add("sv-stamp-head");
        if (inList(CUT_RULES, chapterId, idx)) p.classList.add("sv-cut-rule");
      }
    });
  }

  /* Banner: meet <-> slice swap at 900px (default attribute is meet). */
  function fitPlate() {
    var svg = document.querySelector("#chapter-art.plate svg");
    if (!svg) return;
    svg.setAttribute("preserveAspectRatio",
      window.innerWidth < 900 ? "xMidYMid slice" : "xMidYMid meet");
  }

  /* Assay label: "ASSAYED n%" on the progress channel. */
  function assayLabel() {
    var fill = document.getElementById("progress-fill");
    if (!fill) return;
    var pct = Math.round(parseFloat(fill.style.width) || 0);
    var track = fill.closest(".progress-track");
    if (track) track.setAttribute("aria-label", "Assayed " + pct + "%");
  }

  /* Main ruling 2026-10-15: data roman fields carry arabic (Main-owned
     provenance, keep as-is); the I–XI want renders book-side. Map TOC
     numerals arabic→roman once the drawer is built; idempotent, reruns on
     reader:chapter in case the TOC rebuilds. Text-only transform inside the
     book-owned integration script — no shared change, no CSS content hack. */
  var ROMAN = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI",
    7: "VII", 8: "VIII", 9: "IX", 10: "X", 11: "XI" };
  function romanizeToc() {
    var nums = document.querySelectorAll('#toc-list .toc-chapter .toc-num');
    nums.forEach(function (el) {
      if (el.dataset.romanized) return;
      var n = parseInt((el.textContent || "").trim(), 10);
      if (ROMAN[n]) {
        el.textContent = ROMAN[n];
        el.dataset.romanized = "1";
      }
    });
  }

  document.addEventListener("reader:chapter", function (ev) {
    if (!ev.detail || ev.detail.book !== "sovereign-individual") return;
    tagParagraphs(ev.detail.chapterId);
    fitPlate();
    assayLabel();
    romanizeToc();
  });
  window.addEventListener("resize", fitPlate);
  document.addEventListener("scroll", assayLabel, { passive: true });
  /* Cover view fires no reader:chapter — romanize once the TOC exists. */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(romanizeToc, 600);
    });
  } else {
    setTimeout(romanizeToc, 600);
  }
})();
