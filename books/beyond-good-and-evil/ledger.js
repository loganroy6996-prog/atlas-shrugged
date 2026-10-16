/* Beyond Good and Evil — The Numbered Ledger (book-owned JS).
 * Contract: READER-CONTRACT v1.1 §2–§4. Listens ONLY for `reader:chapter`
 * (dispatched by shared/reader.js after render) + DOMContentLoaded safety.
 * NEVER touches shared internals, prose text, or reader-* classes.
 * ArtDirector E1: numerals are DOM-wrapped, never guessed; the §5.1 index
 * in design/directions.md is the test oracle for the validator.
 */
(() => {
  "use strict";

  var SLUG = "beyond-good-and-evil";
  // Matches `NNN. `, `NNNA. `, and dash-form `NNN.--` (verified: 298 starts).
  var SEC_RE = /^(\d{1,3}[A-Z]?)\.(\s|--)/;
  var UNNUMBERED = { p1c1: true, p1c11: true };

  // Static per-chapter opener data (glosses are supervisor summaries or
  // verbatim-cited fragments; ranges verified against chapter JSON).
  var CHAPTERS = {
    p1c1:  { range: "—",        figuresRange: null,      gloss: "Supposing that Truth is a woman — the bow is drawn.", figures: null },
    p1c2:  { range: "§§1–23",   figuresRange: "1–23",    gloss: "The Will to Truth puts itself on trial.", figures: "1–23" },
    p1c3:  { range: "§§24–44",  figuresRange: "24–44",   gloss: "O sancta simplicitas — the free spirit takes the air.", figures: "24–44" },
    p1c4:  { range: "§§45–62",  figuresRange: "45–62",   gloss: "The saint as the enigma of self-subjugation.", figures: "45–62" },
    p1c5:  { range: "§§63–185", figuresRange: "63–185",  gloss: "Maxims and interludes — 125 sparks, gazed back at by the abyss.", figures: "63–185" },
    p1c6:  { range: "§§186–203", figuresRange: "186–203", gloss: "A natural history of morals — herds, obedience, rank.", figures: "186–203" },
    p1c7:  { range: "§§204–213", figuresRange: "204–213", gloss: "We scholars — the objective spirit under the lens.", figures: "204–213" },
    p1c8:  { range: "§§214–239", figuresRange: "214–239", gloss: "Our virtues — motley-coloured under two suns.", figures: "214–239" },
    p1c9:  { range: "§§240–256", figuresRange: "240–256", gloss: "Peoples and countries — an overture, Wagner first.", figures: "240–256" },
    p1c10: { range: "§§257–296", figuresRange: "257–296", gloss: "What is noble? — the pathos of distance.", figures: "257–296" },
    p1c11: { range: "—",        figuresRange: null,      gloss: null, figures: null }
  };

  // Sanguine-rationed numerals (E3): chapter -> { section: true }.
  var RED = {
    p1c4:  { "50": true },
    p1c5:  { "146": true },
    p1c10: { "278": true, "287": true, "296": true }
  };

  // Verse tags (back-design §4.1): EXPLICIT paragraph indices only (1-based),
  // never inferred. p1c8 §228 rhyme + SEVEN APOPHTHEGMS; p1c9 Rome finale.
  var VERSE_FRAG = { p1c8: [38, 39, 40, 41, 42, 43, 61, 62, 63, 64, 65, 66, 67, 68] };
  var VERSE_FINALE = { p1c9: [59] };

  // p1c9 overture movement index (back-design §3): static authored map.
  var MOVEMENTS = [
    ["I.", "Wagner", "240"], ["II.", "Germans", "244"], ["III.", "Music", "245"],
    ["IV.", "Jews", "250"], ["V.", "English", "252"], ["VI.", "French", "254"],
    ["VII.", "Europe", "256"]
  ];

  function $(sel, root) { return (root || document).querySelector(sel); }

  // Wrap leading section numbers in .sec-num spans (DOM-only, reversible).
  function wrapNumerals(chapterId) {
    var text = $("#chapter-text");
    if (!text) return { wrapped: 0, numbers: [] };
    var paras = text.querySelectorAll(":scope > p");
    var count = 0, numbers = [];
    Array.prototype.forEach.call(paras, function (p, i) {
      if (p.querySelector(":scope > .sec-num")) return; // idempotent
      var node = p.firstChild;
      if (!node || node.nodeType !== 3) return;
      var m = SEC_RE.exec(node.nodeValue);
      if (!m) return;
      var num = m[1];
      var span = document.createElement("span");
      span.className = "sec-num";
      span.setAttribute("data-sec", num);
      span.textContent = num;
      var rest = node.nodeValue.slice(m[0].length);
      node.nodeValue = m[2] === "--" ? "--" + rest : rest;
      // Keep a hair of separation where the period stood.
      p.insertBefore(span, node);
      p.insertBefore(document.createTextNode(" "), node);
      p.classList.add("sec-start");
      if (RED[chapterId] && RED[chapterId][num]) {
        span.classList.add("sec-red");
        p.classList.add("sec-marked");
      }
      count += 1;
      numbers.push(num);
    });
    text.dataset.numerals = String(count);
    return { wrapped: count, numbers: numbers };
  }

  // Presentational verse tags at explicit indices (E1-safe: no numerals).
  function tagVerse(chapterId) {
    var text = $("#chapter-text");
    if (!text) return;
    var frags = VERSE_FRAG[chapterId] || [];
    var fins = VERSE_FINALE[chapterId] || [];
    if (!frags.length && !fins.length) return;
    var paras = text.querySelectorAll(":scope > p");
    frags.forEach(function (n) {
      if (paras[n - 1]) paras[n - 1].classList.add("verse-frag");
    });
    fins.forEach(function (n) {
      if (paras[n - 1]) paras[n - 1].classList.add("verse-finale");
    });
  }

  // Paint the opener extras: gloss line + giant range figures + kicker range.
  function paintOpener(chapterId) {
    var info = CHAPTERS[chapterId];
    var gloss = $("#meta-gloss");
    if (gloss) {
      if (info && info.gloss) {
        gloss.textContent = info.gloss;
        gloss.hidden = false;
      } else {
        gloss.textContent = "";
        gloss.hidden = true;
      }
    }
    // Giant archival range figures, painted as plain text (E2: engraved —
    // color comes from book CSS only; p1c8's split is pure-CSS halves).
    var figures = $(".range-figures");
    if (!figures) {
      var meta = $("#chapter-meta");
      var title = $("#meta-title");
      if (meta && title) {
        figures = document.createElement("p");
        figures.className = "range-figures";
        figures.setAttribute("aria-hidden", "true");
        title.after(figures);
      }
    }
    if (figures) {
      if (info && info.figures) {
        figures.textContent = info.figures;
        figures.hidden = false;
      } else {
        figures.textContent = "";
        figures.hidden = true;
      }
    }
    // p1c8 twin-figure split: wrap halves so book CSS can voice them brass
    // (214) → faded (dash) → sanguine (239). Pure spans, no content change.
    // p1c10 keeps plain text (summit is full-brass, §4.2).
    if (chapterId === "p1c8" && figures && info && info.figuresRange) {
      var bits = info.figuresRange.split("–");
      figures.textContent = "";
      var h1 = document.createElement("span");
      h1.className = "rf-first";
      h1.textContent = bits[0];
      var hs = document.createElement("span");
      hs.className = "rf-sep";
      hs.textContent = "–";
      var h2 = document.createElement("span");
      h2.className = "rf-last";
      h2.textContent = bits[1];
      figures.appendChild(h1);
      figures.appendChild(hs);
      figures.appendChild(h2);
    }
    // p1c10 rank-steps rule: inline the ascending-steps mark (three spans —
    // the ONLY chapter whose rule climbs). CSS background url(#fragment)
    // cannot resolve a <symbol>, so the steps ride as real elements.
    var STEPS_SVG = '<svg viewBox="0 0 60 24" aria-hidden="true"><path d="M6,19 h10 v-5 h10 v-5 h10 v-5 h10" fill="none" stroke="currentColor" stroke-width="1.25"/></svg>';
    var oldSteps = document.querySelector(".rank-steps");
    if (oldSteps) oldSteps.remove();
    if (chapterId === "p1c10") {
      var rule = document.querySelector("#chapter-meta .meta-rule");
      if (rule) {
        var steps = document.createElement("span");
        steps.className = "rank-steps";
        steps.setAttribute("aria-hidden", "true");
        steps.innerHTML = STEPS_SVG;
        rule.appendChild(steps);
      }
    }
    // Kicker range: REBUILD the part line every chapter (renderChapter's
    // paintChapterMeta overwrites #meta-part textContent on each navigation,
    // which would wipe an appended span AND duplicate it on revisit).
    var old = $("#movement-index");
    if (old) old.remove();
    if (chapterId === "p1c9") {
      var mmeta = $("#chapter-meta");
      var mgloss = $("#meta-gloss");
      if (mmeta && mgloss) {
        var ol = document.createElement("ol");
        ol.id = "movement-index";
        ol.className = "movement-index";
        ol.setAttribute("aria-label", "Movements");
        MOVEMENTS.forEach(function (mv) {
          var li = document.createElement("li");
          var a = document.createElement("span");
          a.className = "mv-no";
          a.textContent = mv[0];
          var b = document.createElement("span");
          b.className = "mv-name";
          b.textContent = mv[1];
          var c = document.createElement("span");
          c.className = "mv-sec";
          c.textContent = "§" + mv[2];
          li.appendChild(a);
          li.appendChild(b);
          li.appendChild(c);
          ol.appendChild(li);
        });
        mgloss.after(ol);
      }
    }
  }

  // Ledger-ize TOC rows once the drawer list exists (idempotent).
  var tocDone = false;
  function paintToc() {
    if (tocDone) return;
    var list = $("#toc-list");
    if (!list || !list.querySelector(".toc-chapter")) return;
    Array.prototype.forEach.call(list.querySelectorAll(".toc-chapter"), function (btn) {
      var info = CHAPTERS[btn.dataset.chapterId];
      if (!info || btn.querySelector(".toc-range")) return;
      var main = btn.querySelector(".toc-main");
      var s = document.createElement("span");
      s.className = "toc-range";
      s.textContent = info.range;
      s.setAttribute("aria-hidden", "true");
      if (main) main.after(s);
      else btn.appendChild(s);
    });
    tocDone = true;
  }

  function onChapter(detail) {
    if (!detail || detail.book !== SLUG) return;
    var id = detail.chapterId;
    paintOpener(id);
    paintToc();
    if (UNNUMBERED[id]) {
      var text = $("#chapter-text");
      if (text) text.dataset.numerals = "0";
      return; // E4: total silence in Preface/Aftersong
    }
    tagVerse(id);
    var r = wrapNumerals(id);
    // Self-check against the oracle (operator diagnostics only):
    var expected = { p1c2: 23, p1c3: 21, p1c4: 18, p1c5: 125, p1c6: 18,
                     p1c7: 10, p1c8: 26, p1c9: 17, p1c10: 40 };
    if (expected[id] !== undefined && r.wrapped !== expected[id]) {
      console.warn("[ledger] numeral count mismatch on " + id +
        ": wrapped " + r.wrapped + ", oracle " + expected[id]);
    }
  }

  document.addEventListener("reader:chapter", function (e) {
    onChapter(e && e.detail);
  });
  // Safety: if the event already fired before this script ran (cached
  // instant render), paint from the live DOM exactly once.
  document.addEventListener("DOMContentLoaded", function () {
    paintToc();
    var ch = document.body.dataset && document.body.dataset.chapter;
    if (ch && $("#chapter-text") && $("#chapter-text").children.length) {
      onChapter({ book: SLUG, chapterId: ch });
    }
  });
})();
