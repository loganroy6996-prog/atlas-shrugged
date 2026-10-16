/* Open Letter book-owned behavior (READER-CONTRACT v1.1 §2–§3: listens to
   reader:chapter only; touches #chapter-text markers + slot-adjacent classes;
   never rewrites shared IDs/classes or reader.js internals). */
(() => {
  "use strict";

  // O3 salutation cockade: margin mark on opener-salutation chapters only.
  // Audited list: p1c4 (mid-sentence P0) + p1c7–p1c14. p1c10–p1c14 lead with
  // "Dear open-minded progressive," (full line treatment); p1c4/p1c7–p1c9
  // salute mid-sentence (cockade only). NEVER p1c1/p1c2/p1c3/p1c5/p1c6.
  const SALUTE_FULL = new Set(["p1c10", "p1c11", "p1c12", "p1c13", "p1c14"]);
  const SALUTE_COCKADE = new Set(["p1c4", "p1c7", "p1c8", "p1c9"]);

  // O4 content-bearing redactions: [chapterId, exact prose substring, label].
  // One per spread max; every bar redacts real argument content.
  const REDACTIONS = [
    ["p1c1", "Somaliland", "a recognized state"],
    ["p1c2", "443 million", "the gold reserve"],
    ["p1c4", "St. Petersburg", "the lyric city"],
    ["p1c9", "1924", "Hayes edition year"],
    ["p1c10", "Receiver", "the office"],
    ["p1c14", "Resartus", "the machine"],
  ];

  function markSalutation(chapterId) {
    const text = document.getElementById("chapter-text");
    if (!text) return;
    const first = text.querySelector("p");
    if (!first) return;
    if (SALUTE_FULL.has(chapterId)) {
      first.classList.add("ol-salute-full");
    } else if (SALUTE_COCKADE.has(chapterId)) {
      first.classList.add("ol-salute-cockade");
    }
  }

  function markRedactions(chapterId) {
    const rules = REDACTIONS.filter(([id]) => id === chapterId);
    if (!rules.length) return;
    const text = document.getElementById("chapter-text");
    if (!text) return;
    const paras = text.querySelectorAll("p");
    for (const [, needle, label] of rules) {
      let done = false;
      for (const p of paras) {
        if (done) break;
        const idx = p.textContent.indexOf(needle);
        if (idx < 0 || p.querySelector("mark.ol-redact")) continue;
        // Split the single text node around the first match (reader.js
        // renders textContent-only <p>, so firstChild is the text node).
        const node = p.firstChild;
        if (!node || node.nodeType !== Node.TEXT_NODE) continue;
        const before = node.data.slice(0, idx);
        const after = node.data.slice(idx + needle.length);
        node.data = before;
        const mark = document.createElement("mark");
        mark.className = "ol-redact";
        mark.textContent = needle;
        mark.setAttribute("aria-label", `redacted: ${label}`);
        mark.title = `Redacted: ${label} — select to reveal`;
        p.insertBefore(mark, node.nextSibling);
        if (after) p.insertBefore(document.createTextNode(after), mark.nextSibling);
        done = true;
      }
    }
  }

  document.addEventListener("reader:chapter", (ev) => {
    const id = ev.detail && ev.detail.chapterId;
    if (!id) return;
    markSalutation(id);
    markRedactions(id);
  });
})();
