/* Forty Facets — book-owned behavior (supervisor-owned).
 * READER-CONTRACT v1/v1.1 conformance. Strictly additive: fills the two
 * art slots ONLY if reader.js hasn't, stamps data-fw/data-fw-label from
 * the merged manifest, injects the p4c2/p3c4 ledger mini-index, wraps the
 * p5c5 answers para in <details>. Numerals live IN the SVG symbols
 * (paint order = z-order; no HTML numeral injection). Listens for
 * `reader:chapter`; never polls or patches reader.js internals.
 */
(function () {
  "use strict";
  var BOOK = "forty-ways-to-look-at-churchill";
  // Closed 22-role vocabulary (ART-DIRECTION v1.2 §8 + supervisor rulings).
  var ROLES = {
    prose: 1, caption: 1, head: 1, verdict: 1, quote: 1, verse: 1,
    speech: 1, letter: 1, "letter-signoff": 1, setup: 1, quip: 1,
    "list-head": 1, "list-item": 1, symbol: 1, thesis: 1, coda: 1,
    "mask-q": 1, "mask-a": 1, "date-beat": 1, memo: 1,
    "ledger-head": 1, "ledger-row": 1, epitaph: 1
  };
  var manifestPromise = null;

  function bookDir() {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length - 1; i >= 0; i--) {
      var src = scripts[i].getAttribute("src") || "";
      if (src.indexOf("facets.js") !== -1) {
        return src.slice(0, src.indexOf("design/facets.js"));
      }
    }
    return "";
  }
  function loadManifest() {
    if (!manifestPromise) {
      manifestPromise = fetch(bookDir() + "design/chapters.json", { cache: "force-cache" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    }
    return manifestPromise;
  }
  function ensureSlot(id, cls, refNode, before) {
    var slot = document.getElementById(id);
    if (!slot && refNode && refNode.parentNode) {
      slot = document.createElement("figure");
      slot.id = id;
      slot.className = cls;
      slot.setAttribute("aria-hidden", "true");
      slot.setAttribute("hidden", "");
      if (before) refNode.parentNode.insertBefore(slot, refNode);
      else refNode.parentNode.appendChild(slot);
    }
    return slot;
  }
  // Clone a <symbol> (or whole-file root) from an SVG document into the slot.
  function fillSlotFromSVG(slot, src, symbol) {
    if (!slot || !src) return;
    if (!slot.hasAttribute("hidden") && slot.childNodes.length > 0) return;
    fetch(bookDir() + src, { cache: "force-cache" })
      .then(function (r) { return r.ok ? r.text() : ""; })
      .then(function (text) {
        if (!text) return;
        var doc = new DOMParser().parseFromString(text, "image/svg+xml");
        var node = symbol ? doc.getElementById(symbol) : null;
        if (!node) node = doc.documentElement;
        if (!node || node.tagName === "parsererror") return;
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var vb = node.getAttribute("viewBox");
        svg.setAttribute("viewBox", vb || "0 0 1200 360");
        svg.setAttribute("class", "fw-plate");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
        var kids = node.childNodes;
        for (var i = 0; i < kids.length; i++) {
          svg.appendChild(document.importNode(kids[i], true));
        }
        slot.textContent = "";
        slot.appendChild(svg);
        slot.removeAttribute("hidden");
      })
      .catch(function () { /* art is enhancement; prose stands alone */ });
  }
  // Sticky ledger mini-index for p4c2/p3c4 (contract: .fw-index, book-owned).
  function buildIndex(entry) {
    var old = document.querySelector(".fw-index");
    if (old && old.parentNode) old.parentNode.removeChild(old);
    if (!entry || !entry.reading || !entry.reading.ledger) return;
    var paras = document.querySelectorAll("#chapter-text > p");
    var heads = [];
    (entry.paragraphs || []).forEach(function (pr) {
      if (pr.role === "ledger-head" && paras[pr.index]) {
        heads.push({ el: paras[pr.index], label: pr.label || paras[pr.index].textContent });
      }
    });
    if (!heads.length) return;
    var nav = document.createElement("nav");
    nav.className = "fw-index";
    nav.setAttribute("aria-label", "Sections in this chapter");
    var list = document.createElement("ol");
    heads.forEach(function (h, i) {
      var id = "fw-ledger-" + i;
      h.el.setAttribute("id", id);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.setAttribute("href", "#" + id);
      a.textContent = h.label;
      li.appendChild(a);
      list.appendChild(li);
    });
    nav.appendChild(list);
    var text = document.getElementById("chapter-text");
    if (text && text.parentNode) text.parentNode.insertBefore(nav, text);
  }
  function stampRoles(chapterId, entry) {
    var paras = document.querySelectorAll("#chapter-text > p");
    if (!paras.length || !entry || !entry.paragraphs) { buildIndex(entry); return; }
    entry.paragraphs.forEach(function (pr) {
      var p = paras[pr.index];
      if (!p) return;
      if (pr.role && ROLES[pr.role] && pr.role !== "prose") {
        p.setAttribute("data-fw", pr.role);
      }
      if (pr.label) {
        p.setAttribute("data-fw-label", String(pr.label));
      }
    });
    // C5: p5c5 answers para wrapped once in <details> (keyboard-honest).
    if (chapterId === "p5c5") {
      var maze = document.querySelector('#chapter-text > p[data-fw="mask-a"]');
      if (maze && maze.parentNode.id === "chapter-text") {
        var det = document.createElement("details");
        det.className = "fw-mask";
        var sum = document.createElement("summary");
        sum.textContent = "Answers";
        maze.parentNode.insertBefore(det, maze);
        det.appendChild(sum);
        det.appendChild(maze);
      }
    }
    buildIndex(entry);
  }
  function onChapter(detail) {
    if (!detail || detail.book !== BOOK) return;
    loadManifest().then(function (man) {
      if (!man || !man.chapters) return;
      var entry = man.chapters[detail.chapterId];
      var meta = document.getElementById("chapter-meta");
      var slot = ensureSlot("chapter-art", "chapter-art", meta, true);
      if (entry && entry.src) {
        fillSlotFromSVG(slot, entry.src, entry.symbol);
      }
      if (entry && entry.motif && !document.body.hasAttribute("data-art")) {
        document.body.setAttribute("data-art", entry.motif);
      }
      stampRoles(detail.chapterId, entry);
    });
  }
  function onCover() {
    loadManifest().then(function (man) {
      if (!man || !man.cover || !man.cover.src) return;
      var content = document.querySelector("#cover .cover-content");
      var slot = ensureSlot("cover-art", "cover-art", content, true);
      fillSlotFromSVG(slot, man.cover.src, man.cover.symbol);
    });
  }
  document.addEventListener("reader:chapter", function (e) { onChapter(e.detail || {}); });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onCover);
  } else {
    onCover();
  }
  // Defensive: older reader.js without the event — run once against live DOM.
  setTimeout(function () {
    var ch = document.body.getAttribute("data-chapter");
    if (ch) {
      if (!document.getElementById("chapter-art")) {
        onChapter({ book: BOOK, chapterId: ch });
      }
    } else {
      onCover();
    }
  }, 0);
})();
