/* The Will to Power — supervisor-owned book behavior ("The Black Notebook").
   READER-CONTRACT v1.1 §2–§3: listens ONLY to `reader:chapter`; fills the two
   declarative art-adjacent hooks + authored marginalia; never rewrites shared
   IDs/classes, never polls, never patches reader.js internals. Idempotent per
   chapter render (reader.js rebuilds #chapter-text/#chapter-meta each time).

   What it does, per chapter (all indices 0-based into data/chapters/<id>.json
   paragraphs, verified by census 2026-10-15 — see design/COVERAGE.md):
   1. Inscriptions — "<N> FRAGMENTS · <W> WORDS" lines from LIVE
      reader:chapter detail (cohort JSON strings are fallback/validator
      reference only). Tablets (p3c1/p3c2/p4c1/p5c1) get none (contract).
   2. Fleurons — one marker element AFTER each authored boundary index (W3:
      authored indices ONLY, never modulo/nth-child). 343 book-wide.
   3. NB. markers — wraps the leading "NB." token in .reader-nb paragraphs in
      a mono marker span (styling stays in cohort CSS). Mid-paragraph NBs:
      p4c15[28]→true [27] and p4c18[68]→true [67] get .nat-nb-mid (nature.json
      used 1-based § numbers; corrected here — see COVERAGE.md §N1).
   4. Sub-notes — adds .know-sub to authored (a)/(b)/(1)… paragraphs.
   5. Fragment numerals — wraps leading "(N)/(a)" markers in .wtp-fragnum
      (early: part-2 violet; nature: Book III verdigris).
   6. Relief bands + end-seals — inlines band/seal symbols via <use> at
      authored positions (art only, never behind text).
   7. Opener extras — crown step-rule + exhibit tag + inscription nodes,
      critique rule-fragment lines, crown colophon + seal on p5c9.
   8. TOC program — annotates .toc-part[data-part-id], movement labels, motif
      atoms, reduced-emphasis rows; nav signets (Book II); translator edition
      numerals → superscript apparatus spans.
*/
(() => {
  "use strict";
  // Guard on the book-owned BOOK_CONFIG (reader.js sets body[data-book]
  // asynchronously at boot; reading the dataset here would exit early).
  try {
    if (window.BOOK_CONFIG?.storageKey !== "reader-will-to-power") return;
  } catch { return; }

  /* ---------- 0. Verified data tables (0-based; see COVERAGE.md) ---------- */

  // Fleuron AFTER-indices per chapter: [cohort-class, ...indices].
  const FLEURONS = {
    p2c1: ["wtp-fleuron", 4],
    p2c2: ["wtp-fleuron", 9, 15, 23, 29, 33, 38, 45],
    p2c3: ["wtp-fleuron", 6, 16, 19, 26, 30, 34, 39, 43],
    p2c4: ["wtp-fleuron", 11, 17, 26, 33, 39, 45, 54],
    p2c5: ["wtp-fleuron", 3, 11],
    p2c6: ["wtp-fleuron", 1, 12, 16, 20, 24, 30, 38, 48, 58, 66, 81],
    p2c7: ["wtp-fleuron", 4, 11, 14, 24, 33, 48, 54, 57, 63, 70],
    p2c8: ["wtp-fleuron", 8, 13, 16, 26, 38, 44, 49, 54, 64, 67],
    p3c3: ["wtp-fleuron", 3, 9, 16, 26, 34, 44, 51, 57],
    p3c4: ["wtp-fleuron", 3, 13, 20, 31, 41, 50, 57, 67, 76, 93, 103, 111, 125, 134, 141, 148, 155],
    p3c5: ["wtp-fleuron", 2, 9, 18, 27, 33, 41, 48, 53, 59, 65, 70, 79],
    p3c6: ["wtp-fleuron", 1, 8, 15, 20, 28, 32, 44, 57, 63, 68, 78],
    p3c7: ["wtp-fleuron", 4, 13, 22, 31, 40],
    p3c8: ["wtp-fleuron", 5, 14, 19, 26, 38, 43],
    p3c9: ["wtp-fleuron", 1, 9, 19, 28, 39, 48],
    p3c10: ["wtp-fleuron", 8, 17, 24, 29, 36, 43, 53, 60, 67, 71, 87, 95, 100, 110, 119, 127, 136, 141, 153, 159, 166],
    p3c11: ["wtp-fleuron", 4, 10, 16, 26, 31],
    p3c12: ["wtp-fleuron", 5, 13, 18, 26, 31, 41, 50],
    p3c13: ["wtp-fleuron", 3, 9, 15, 24, 35, 44, 50, 57, 64, 69],
    p3c14: ["wtp-fleuron", 3, 10, 17],
    p3c15: ["wtp-fleuron", 1, 5, 12, 17, 20],
    p4c2: ["know-fleuron", 4],
    p4c3: ["know-fleuron", 8],
    p4c4: ["know-fleuron", 2],
    p4c5: ["know-fleuron", 7],
    p4c6: ["know-fleuron", 12],
    p4c7: ["know-fleuron", 8],
    p4c8: ["know-fleuron", 4, 25, 32],
    p4c9: ["know-fleuron", 14, 24],
    p4c10: ["know-fleuron", 12, 26, 38],
    p4c11: ["know-fleuron", 60, 90],
    p4c13: ["know-fleuron", 16, 34, 48],
    // NATURE (corrected −1: nature.json used 1-based § numbers; COVERAGE §N1).
    p4c14: ["nat-fleuron", 4, 13, 22, 28, 35],
    p4c15: ["nat-fleuron", 9, 17, 29, 39, 40, 49, 59, 89, 98, 109, 122, 129],
    p4c16: ["nat-fleuron", 8, 17, 22, 28, 35, 41, 50, 60, 68],
    p4c17: ["nat-fleuron", 6, 11, 19, 32, 39, 46, 54, 60, 72, 82],
    p4c18: ["nat-fleuron", 8, 12, 20, 28, 38, 47, 51, 57, 67, 72, 76],
    p4c19: ["nat-fleuron", 12, 16, 25, 41, 51, 59, 74, 79, 89, 96, 107, 117, 127, 136, 146, 148, 158, 163, 168],
    p5c2: ["crown-fleuron", 4, 8],
    p5c3: ["crown-fleuron", 8, 15, 23, 33, 43, 54, 67, 78, 87, 95, 120, 126, 134, 145, 153, 163, 169, 179, 192],
    p5c4: ["crown-fleuron", 2, 6, 9, 12, 18, 34, 38, 48],
    p5c5: ["crown-fleuron", 5],
    p5c6: ["crown-fleuron", 6, 10],
    p5c7: ["crown-fleuron", 2, 10, 19, 27, 33],
    p5c8: ["crown-fleuron", 8, 12, 16, 25, 29, 37, 41, 48, 54, 59, 76, 88, 96, 105, 114, 119, 127],
    p5c9: ["crown-fleuron", 3, 10, 18, 24, 30],
  };

  // Sub-note paragraph indices → .know-sub (Book III green-tick grammar).
  const SUBNOTES = {
    p4c6: [5, 6], p4c8: [7], p4c9: [20], p4c10: [36, 37, 38],
    p4c11: [30, 31, 47, 52, 53, 54, 55, 63, 64, 91, 95, 96, 100, 104, 105, 106, 111],
    p4c15: [0, 37, 38, 40], p4c16: [58, 59, 60, 66, 67],
    p4c18: [11, 13, 14, 15, 19, 20, 27, 28, 53, 54, 63, 64, 65, 66],
    p4c19: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 53, 159, 163, 169, 170],
  };

  // Mid-paragraph NBs (shared .reader-nb cannot fire): corrected 0-based.
  const NB_MID = { p4c15: [27], p4c18: [67] };

  // Relief bands: chapter → {after (0-based), sprite, symbol, class}.
  const RELIEFS = {
    p3c4: { after: 80, sprite: "art/critique.svg", symbol: "cri-relief-mid", cls: "cri-relief", mode: "before" },
    p3c10: { after: 79, sprite: "art/critique.svg", symbol: "cri-relief-turn", cls: "cri-relief", mode: "before" },
    p4c11: { after: 60, sprite: "art/knowledge.svg", symbol: "k-p4c11-band", cls: "know-band", mode: "after" },
    p4c15: { after: 98, sprite: "art/nature.svg", symbol: "plate-c15", cls: "nat-band", mode: "after", memo: "membrane arc" },
    p4c19: { after: 148, sprite: "art/nature.svg", symbol: "plate-c19", cls: "nat-band", mode: "after", memo: "spiral arc" },
    p5c3: { after: 112, sprite: "art/crown.svg", symbol: "crown-p5c3-relief", cls: "crown-relief", mode: "after" },
    p5c8: { after: 68, sprite: "art/crown.svg", symbol: "crown-p5c8-relief", cls: "crown-relief", mode: "after" },
  };

  // End-seals AFTER the final paragraph (Book II colophon figures).
  const ENDSEALS = {
    p3c4: { sprite: "art/critique.svg", symbol: "cri-seal-p3c4", caption: "Seal — the keys, cancelled." },
    p3c10: { sprite: "art/critique.svg", symbol: "cri-seal-p3c10", caption: "Seal — bridle against cage." },
    p3c11: { sprite: "art/critique.svg", symbol: "cri-seal-p3c11", caption: "Seal — the devoured ring at rest." },
    p3c15: { sprite: "art/critique.svg", symbol: "cri-seal-hermit", caption: "Colophon — the hermit's lamp.", hermit: true },
  };

  // Book II authored rule-fragment lines (each verified verbatim in-chapter).
  const RULE_FRAGMENTS = {
    p3c3: "an exaggerated sense of power",
    p3c4: "Everything that now goes by the name of Christian.",
    p3c5: "War against the Christian ideal…",
    p3c6: "without falling under its spell",
    p3c7: "the establishment of hierarchy",
    p3c8: "Man is a minor, transitional animal species",
    p3c9: "not for everyone’s ears",
    p3c10: "confusing taming with weakening",
    p3c11: "morality itself obliges us to deny morality",
    p3c12: "rid ourselves of a few superstitions",
    p3c13: "a symptom of décadence",
    p3c14: "the art of living",
    p3c15: "the free-thinker must be a hermit",
  };

  const TABLETS = new Set(["p1c1", "p3c1", "p3c2", "p4c1", "p5c1"]);
  const BOOK_ORDER = ["p1c1",
    "p2c1", "p2c2", "p2c3", "p2c4", "p2c5", "p2c6", "p2c7", "p2c8",
    "p3c1", "p3c2", "p3c3", "p3c4", "p3c5", "p3c6", "p3c7", "p3c8", "p3c9", "p3c10", "p3c11", "p3c12", "p3c13", "p3c14", "p3c15",
    "p4c1", "p4c2", "p4c3", "p4c4", "p4c5", "p4c6", "p4c7", "p4c8", "p4c9", "p4c10", "p4c11", "p4c12", "p4c13", "p4c14", "p4c15", "p4c16", "p4c17", "p4c18", "p4c19",
    "p5c1", "p5c2", "p5c3", "p5c4", "p5c5", "p5c6", "p5c7", "p5c8", "p5c9"];

  const PART_OF = {};
  BOOK_ORDER.forEach((id) => {
    PART_OF[id] = id.startsWith("p1") ? "part-1" : id.startsWith("p2") ? "part-2"
      : id.startsWith("p3") ? "part-3" : id.startsWith("p4") ? "part-4" : "part-5";
  });

  // Book II TOC movement program (critique.json toc_program).
  const MOVEMENTS = [
    { label: "I. Religion", chapters: ["p3c3", "p3c4", "p3c5"] },
    { label: "II. Morality", chapters: ["p3c6", "p3c7", "p3c8", "p3c9", "p3c10", "p3c11"] },
    { label: "III. Philosophy", chapters: ["p3c12", "p3c13", "p3c14", "p3c15"] },
  ];
  const MOTIF_OF = {
    p3c1: "cri-tablet-crack", p3c2: "cri-crack-light", p3c3: "cri-split-self",
    p3c4: "cri-altar-slabs", p3c5: "cri-eroded-word", p3c6: "cri-specimen-slab",
    p3c7: "cri-herd-band", p3c8: "cri-snapped-chain", p3c9: "cri-stage-flat",
    p3c10: "cri-warp-slash", p3c11: "cri-seal-devoured", p3c12: "cri-seven-wedges",
    p3c13: "cri-stele-band", p3c14: "cri-arc-vine", p3c15: "cri-hermit-lamp",
  };

  const SVGNS = "http://www.w3.org/2000/svg";
  const fmt = (n) => Number(n || 0).toLocaleString("en-US");

  /* ---------- 1. Inscriptions (LIVE counts from reader:chapter) ---------- */
  function addInscription(meta, detail) {
    const { chapterId, partId, paragraphs, words } = detail;
    // Tablets carry no inscription — EXCEPT p1c1, whose opener contract
    // explicitly layers the live fragment-count line (early.json).
    if (TABLETS.has(chapterId) && chapterId !== "p1c1") return;
    const text = `${fmt(paragraphs)} FRAGMENTS · ${fmt(words)} WORDS`;
    const aria = `${paragraphs} fragments, ${words} words`;
    let node = null;
    if (partId === "part-3") {
      node = document.createElement("p");
      node.className = "cri-inscription";
      node.textContent = text;
      const frag = RULE_FRAGMENTS[chapterId];
      if (frag) {
        const rf = document.createElement("p");
        rf.className = "cri-rule-fragment";
        rf.textContent = frag;
        const rule = meta.querySelector(".meta-rule");
        rule ? rule.after(rf) : meta.appendChild(rf);
        rf.after(node);
        return;
      }
    } else if (partId === "part-4") {
      node = document.createElement("p");
      node.className = chapterId >= "p4c14" ? "nat-inscription" : "know-inscription";
      node.textContent = text;
    } else if (partId === "part-5") {
      node = document.createElement("p");
      node.className = "crown-inscription";
      node.setAttribute("aria-label", aria);
      node.dataset.fragments = fmt(paragraphs);
      node.dataset.words = fmt(words);
      // Visible text comes from crown.css ::before (attr hooks) — no
      // textContent here, or the line renders doubled.
    } else {
      // Parts 0–I: the early.css contract — data-inscription on .meta-rule.
      const rule = meta.querySelector(".meta-rule");
      if (rule) rule.setAttribute("data-inscription", text);
      return;
    }
    if (node) {
      const anchor = meta.querySelector(".meta-rule") || meta.querySelector(".meta-number");
      anchor ? anchor.after(node) : meta.appendChild(node);
    }
  }

  /* ---------- 2. Fleurons (authored indices ONLY) ---------- */
  function addFleurons(text, chapterId) {
    const spec = FLEURONS[chapterId];
    if (!spec) return;
    const [cls, ...indices] = spec;
    // Relief-band boundaries carry the visual weight alone: a fleuron stacked
    // beside a band reads as clutter (R2 minor 2). The band's boundary para
    // index is skipped here; addReliefs renders the band instead.
    const bandBoundary = RELIEFS[chapterId]
      ? (RELIEFS[chapterId].mode === "before" ? RELIEFS[chapterId].after - 1 : RELIEFS[chapterId].after)
      : -1;
    const paras = [...text.querySelectorAll(":scope > p")];
    for (const i of indices) {
      if (i === bandBoundary) continue;
      const para = paras[i];
      if (!para || para.nextElementSibling?.classList.contains(cls)) continue;
      const mark = document.createElement("div");
      mark.className = cls;
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = "·";
      para.after(mark);
    }
  }

  /* ---------- 3. NB markers + mid-para fallbacks + sub-notes + numerals ---------- */
  function markNB(text, chapterId) {
    for (const p of text.querySelectorAll(":scope > p.reader-nb")) {
      if (p.querySelector(".wtp-nbmark")) continue;
      const node = p.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) continue;
      const m = /^(NB\.?|N\.B\.)(\s|:)/.exec(node.data);
      if (!m) continue;
      const mark = document.createElement("span");
      mark.className = "wtp-nbmark";
      mark.textContent = m[1];
      node.data = node.data.slice(m[1].length);
      p.insertBefore(mark, p.firstChild);
    }
    for (const i of NB_MID[chapterId] || []) {
      const para = text.querySelectorAll(":scope > p")[i];
      if (para && !para.classList.contains("reader-nb")) para.classList.add("nat-nb-mid");
    }
  }

  function markSubnotes(text, chapterId) {
    for (const i of SUBNOTES[chapterId] || []) {
      const para = text.querySelectorAll(":scope > p")[i];
      if (para) para.classList.add("know-sub");
    }
  }

  function markFragnums(text, chapterId) {
    const part = PART_OF[chapterId];
    if (part !== "part-2" && part !== "part-4") return;
    for (const p of text.querySelectorAll(":scope > p")) {
      if (p.querySelector(".wtp-fragnum")) continue;
      const node = p.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) continue;
      const m = /^\((\d{1,3}|[a-z])\)\s/.exec(node.data);
      if (!m) continue;
      const wrap = document.createElement("span");
      wrap.className = "wtp-fragnum";
      wrap.textContent = m[0].trimEnd();
      node.data = node.data.slice(m[0].length);
      p.insertBefore(wrap, p.firstChild);
      p.insertBefore(document.createTextNode(" "), wrap.nextSibling);
    }
  }

  /* ---------- Ed. numerals → superscript apparatus (all parts) ----------
     D5: the translator's edition numerals are GLUED tails ("values.1",
     "chandalas,15", "Magny.25 Russian") — never leading "NNN. " paragraphs
     (that pattern occurs in 0/52 chapters). Census: 152 occurrences in 144
     paragraphs across 37 chapters, always mid-text or trailing. This pass
     wraps every glued tail in .wtp-ednum (Ash superscript per theme.css —
     no Sulphur, no links). Idempotent: skips paragraphs already processed. */
  function markEdnums(text) {
    for (const p of text.querySelectorAll(":scope > p")) {
      if (p.querySelector(".wtp-ednum") || p.querySelector(".wtp-fragnum")) continue;
      const node = p.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) continue;
      // Glued tail: sentence punctuation (or comma) directly followed by
      // 1–3 digits. The punctuation stays in the text flow; only the digits
      // lift into the superscript span.
      const re = /([.,;:!?])(\d{1,3})(?=\s|$|[.,;:!?”"’'\)\]])/g;
      let m = re.exec(node.data);
      if (!m) continue;
      const frag = document.createDocumentFragment();
      let rest = node.data;
      re.lastIndex = 0;
      let last = 0;
      while ((m = re.exec(rest)) !== null) {
        frag.appendChild(document.createTextNode(rest.slice(last, m.index + 1)));
        const sup = document.createElement("span");
        sup.className = "wtp-ednum";
        sup.textContent = m[2];
        frag.appendChild(sup);
        last = m.index + 1 + m[2].length;
      }
      frag.appendChild(document.createTextNode(rest.slice(last)));
      p.insertBefore(frag, node);
      node.remove();
    }
  }

  /* ---------- 4. Relief bands + end-seals ---------- */
  function artFigure(sprite, symbol, cls, caption) {
    const fig = document.createElement("figure");
    fig.className = cls;
    fig.setAttribute("aria-hidden", "true");
    const svg = document.createElementNS(SVGNS, "svg");
    const use = document.createElementNS(SVGNS, "use");
    use.setAttribute("href", `${sprite}#${symbol}`);
    svg.appendChild(use);
    fig.appendChild(svg);
    if (caption) {
      const cap = document.createElement("figcaption");
      cap.textContent = caption;
      fig.appendChild(cap);
    }
    return fig;
  }

  function addReliefs(text, chapterId) {
    const r = RELIEFS[chapterId];
    if (!r) return;
    const paras = text.querySelectorAll(":scope > p");
    const anchor = paras[r.after];
    if (!anchor || text.querySelector(`.${r.cls}`)) return;
    const fig = artFigure(r.sprite, r.symbol, r.cls, null);
    if (r.mode === "before") anchor.before(fig);
    else anchor.after(fig);
  }

  function addEndseal(chapterId) {
    const s = ENDSEALS[chapterId];
    if (!s) return;
    const text = document.getElementById("chapter-text");
    const nav = document.getElementById("chapter-nav");
    if (!text || !nav || document.querySelector(".cri-endseal")) return;
    const fig = artFigure(s.sprite, s.symbol, "cri-endseal" + (s.hermit ? " cri-endseal-hermit" : ""), s.caption);
    nav.before(fig);
  }

  /* ---------- 5. Crown opener extras + colophon ---------- */
  function crownExtras(meta, detail) {
    const { chapterId } = detail;
    if (PART_OF[chapterId] !== "part-5") return;
    const order = BOOK_ORDER.indexOf(chapterId) + 1;
    if (!meta.querySelector(".crown-exhibit-tag")) {
      const tag = document.createElement("p");
      tag.className = "crown-exhibit-tag";
      tag.textContent = `EXHIBIT ${order} OF 52` + (chapterId === "p5c1" ? " · THE BOOK'S FOURTH DOOR" : "");
      meta.prepend(tag);
    }
    if (chapterId !== "p5c1" && !meta.querySelector(".crown-step-rule")) {
      const rule = document.createElement("div");
      rule.className = "crown-step-rule";
      rule.setAttribute("aria-hidden", "true");
      for (const c of ["tread-first", "riser-first", "tread-mid", "riser-last", "tread-last"]) {
        const seg = document.createElement("i");
        seg.className = c;
        rule.appendChild(seg);
      }
      const title = meta.querySelector(".meta-title");
      title ? title.after(rule) : meta.appendChild(rule);
    }
    if (chapterId === "p5c9") {
      const text = document.getElementById("chapter-text");
      const nav = document.getElementById("chapter-nav");
      const last = text?.querySelector(":scope > p:last-of-type");
      if (last && !last.querySelector(".crown-seal")) {
        const svg = document.createElementNS(SVGNS, "svg");
        svg.setAttribute("class", "crown-seal");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("width", "28");
        svg.setAttribute("height", "28");
        const use = document.createElementNS(SVGNS, "use");
        use.setAttribute("href", "art/crown.svg#crown-seal");
        svg.appendChild(use);
        last.appendChild(svg);
      }
      if (nav && !document.querySelector(".crown-colophon")) {
        const col = document.createElement("div");
        col.className = "crown-colophon";
        col.setAttribute("aria-label", "End of the book");
        col.innerHTML = "<div class='crown-colophon-rule' aria-hidden='true'></div>" +
          "<p class='crown-colophon-line'>HERE END THE NOTEBOOKS OF THE 1880s</p>" +
          "<p class='crown-colophon-sub'>BOOK IV · DISCIPLINE AND CULTIVATION · 52 EXHIBITS</p>";
        nav.before(col);
      }
    }
  }

  function critiqueTabletSub(meta, chapterId) {
    if (chapterId !== "p3c1" || meta.querySelector(".cri-tablet-sub")) return;
    const sub = document.createElement("p");
    sub.className = "cri-tablet-sub";
    sub.textContent = "BOOK II · PART-TITLE TABLET";
    const title = meta.querySelector(".meta-title");
    title ? title.after(sub) : meta.appendChild(sub);
  }

  /* ---------- 6. TOC program + nav signets (rebuilt each chapter) ---------- */
  function annotateToc() {
    const list = document.getElementById("toc-list");
    if (!list || list.dataset.wtp === "1") return;
    const sections = [...list.querySelectorAll(":scope > .toc-part")];
    const partIds = ["part-1", "part-2", "part-3", "part-4", "part-5"];
    sections.forEach((sec, i) => {
      if (partIds[i]) sec.dataset.partId = partIds[i];
    });
    const book3 = list.querySelector('.toc-part[data-part-id="part-3"]');
    if (book3) {
      for (const mv of MOVEMENTS) {
        const first = book3.querySelector(`.toc-chapter[data-chapter-id="${mv.chapters[0]}"]`);
        if (!first || first.previousElementSibling?.classList.contains("cri-movement")) continue;
        const lab = document.createElement("div");
        lab.className = "cri-movement";
        lab.textContent = mv.label;
        first.before(lab);
      }
      for (const btn of book3.querySelectorAll(".toc-chapter")) {
        const id = btn.dataset.chapterId;
        if (!id || btn.querySelector(".wtp-toc-atom") || !MOTIF_OF[id]) continue;
        const svg = document.createElementNS(SVGNS, "svg");
        svg.setAttribute("class", "wtp-toc-atom");
        svg.setAttribute("aria-hidden", "true");
        const use = document.createElementNS(SVGNS, "use");
        use.setAttribute("href", `art/critique.svg#${MOTIF_OF[id]}`);
        svg.appendChild(use);
        btn.prepend(svg);
      }
    }
    list.dataset.wtp = "1";
  }

  function navSignet(chapterId) {
    if (PART_OF[chapterId] !== "part-3" || !MOTIF_OF[chapterId]) return;
    const next = document.getElementById("btn-next");
    if (!next || next.querySelector(".wtp-nav-signet")) return;
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("class", "wtp-nav-signet");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS(SVGNS, "use");
    use.setAttribute("href", `art/critique.svg#${MOTIF_OF[chapterId]}`);
    svg.appendChild(use);
    next.prepend(svg);
  }

  /* ---------- main ---------- */
  document.addEventListener("reader:chapter", (ev) => {
    const detail = ev.detail || {};
    if (detail.book && detail.book !== "will-to-power") return;
    const { chapterId } = detail;
    if (!chapterId) return;
    const meta = document.getElementById("chapter-meta");
    const text = document.getElementById("chapter-text");
    if (!meta || !text) return;
    // Purge supervisor nodes from the previous chapter: reader.js rebuilds
    // #chapter-text but PERSISTS #chapter-meta (textContent-only repaints),
    // so inscription/rule/exhibit/tag nodes must be removed explicitly.
    // .cri-endseal/.crown-colophon live between text and nav — same purge.
    meta.querySelectorAll(".cri-inscription, .know-inscription, .nat-inscription, .crown-inscription, .cri-rule-fragment, .crown-exhibit-tag, .crown-step-rule, .cri-tablet-sub").forEach((n) => n.remove());
    meta.querySelector(".meta-rule")?.removeAttribute("data-inscription");
    document.querySelectorAll(".cri-endseal, .crown-colophon").forEach((n) => n.remove());
    // Nav buttons persist across chapters: drop last chapter's signet (the
    // disabled end-state button must never carry another part's motif).
    document.querySelectorAll(".wtp-nav-signet").forEach((n) => n.remove());
    try {
      addInscription(meta, detail);
      crownExtras(meta, detail);
      critiqueTabletSub(meta, chapterId);
      markEdnums(text);
      markFragnums(text, chapterId);
      markNB(text, chapterId);
      markSubnotes(text, chapterId);
      addFleurons(text, chapterId);
      addReliefs(text, chapterId);
      addEndseal(chapterId);
      annotateToc();
      navSignet(chapterId);
    } catch (err) {
      console.warn("[wtp] book enhancement skipped:", err?.message || err);
    }
  });
})();
