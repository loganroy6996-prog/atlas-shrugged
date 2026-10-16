/* SPECIE — Cohort A (A-rupture) book-JS classifier snippet.
   Supervisor-owned integration: paste into the book-owned index.html script tag
   (reader:chapter listener, slots-only + class tagging; never prose edits, never
   reader-* class names). Source: design/cohort-a.design.md §9.1–§9.2 + §4 banner.
   Standalone reference copy: design/cohort-a.classifier.js (this file). */
(function () {
  "use strict";

  var STOPWORDS = {
    of: 1, the: 1, a: 1, an: 1, and: 1, in: 1, on: 1, to: 1,
    for: 1, with: 1, without: 1, as: 1, by: 1, vs: 1
  };

  /* Explicit census completions: heads the Title-Case rule misses (lowercase lead,
     terminal punctuation, quote-led, too long, too many words). Verified against
     books/sovereign-individual/data/chapters/p1c{1..4}.json 2026-10-15. */
  var EXPLICIT_TITLE_HEADS = {
    p1c1: [81],            /* "Get ready to duck" (lowercase lead) */
    p1c2: [36, 58],        /* "So What?" (terminal ?); "Learning from the Past" (verb lead) */
    p1c3: [93, 103],       /* quote-led heads */
    p1c4: [34, 85, 120]    /* "Uniforms or Divergences?" (?); "War at a Higher Scale" (verb lead);
                              [120] quote-head gets sv-head-quote instead — see below */
  };
  var QUOTE_HEADS = { p1c4: [120] };
  var ATTR_STOPS = {
    p1c1: [111], p1c2: [1, 114, 117, 119, 121],
    p1c3: [], p1c4: [67, 95, 163, 170]
  };
  var EPIGRAPHS = { p1c1: [0], p1c2: [0] };
  var EPIGRAPH_ATTRS = { p1c2: [1] };
  var ENUMS = { p1c2: [114, 117, 119, 121] };
  var LEDGER = { p1c2: [71, 72, 73, 74, 75, 76, 77, 78, 79] };
  var PULLS = { p1c1: [66] };
  var QUOTE_PAIRS = { p1c1: [110] };        /* + following sv-attr [111] */
  var TECH_CARDS = { p1c3: [91] };
  var SCANDAL = { p1c4: [6, 7] };           /* [6] also sv-scandal-first */
  var BALLAD = { p1c4: [160, 161, 162] };   /* + sv-attr [163]; [160]/[162] first/last */
  var GLOSS = { p1c4: [2] };

  function inList(map, chapterId, idx) {
    return map[chapterId] && map[chapterId].indexOf(idx) !== -1;
  }

  function stripEdge(word) {
    return word.replace(/^["“”‘’(),—–]+|["“”‘’(),—–.]+$/g, "");
  }

  function isCapsHead(text, chapterId, idx) {
    var t = text.trim();
    if (t.length < 4 || t.length > 120) return false;
    if (t[0] === "-" || (t[0] >= "0" && t[0] <= "9")) return false;
    if (inList(ATTR_STOPS, chapterId, idx)) return false;
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
    var paras = text.querySelectorAll(":scope > p");
    paras.forEach(function (p, idx) {
      var raw = (p.textContent || "").trim();
      /* Order matters: explicit roles first, generic heads last. */
      if (inList(EPIGRAPHS, chapterId, idx)) { p.classList.add("sv-epigraph"); return; }
      if (inList(EPIGRAPH_ATTRS, chapterId, idx)) { p.classList.add("sv-epigraph-attr"); return; }
      if (inList(ENUMS, chapterId, idx)) { p.classList.add("sv-enum"); return; }
      if (inList(ATTR_STOPS, chapterId, idx)) {
        p.classList.add("sv-attr");
        if (inList(BALLAD, chapterId, idx - 1) || idx === 163) p.classList.add("sv-ballad-attr");
        return;
      }
      if (inList(QUOTE_HEADS, chapterId, idx)) { p.classList.add("sv-head-quote"); return; }
      if (inList(LEDGER, chapterId, idx)) { p.classList.add("sv-ledger"); return; }
      if (inList(PULLS, chapterId, idx)) { p.classList.add("sv-pull"); return; }
      if (inList(QUOTE_PAIRS, chapterId, idx)) { p.classList.add("sv-quote-pair"); return; }
      if (inList(TECH_CARDS, chapterId, idx)) { p.classList.add("sv-tech"); return; }
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
      if (isCapsHead(raw, chapterId, idx)) { p.classList.add("sv-head-caps"); return; }
      if (isTitleHead(raw) || inList(EXPLICIT_TITLE_HEADS, chapterId, idx)) {
        p.classList.add("sv-head-title");
      }
    });
  }

  /* §4 banner: meet <-> slice swap at 900px (default attribute is meet). */
  function fitPlate() {
    var svg = document.querySelector("#chapter-art.plate svg");
    if (!svg) return;
    svg.setAttribute("preserveAspectRatio",
      window.innerWidth < 900 ? "xMidYMid slice" : "xMidYMid meet");
  }

  /* §9.5 assay label: "ASSAYED n%" on the progress channel. */
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
