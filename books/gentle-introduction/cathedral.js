/* Gentle Introduction — Cathedral book script (supervisor-owned).
 * Listens for reader:chapter (contract §2/§4); fills nothing outside the
 * #cover-art slot (progress notches) and chapter-text drop-cap markers.
 * Never touches shared internals. No polling.
 */
(function () {
  "use strict";

  /* GIR1: chapters whose first paragraph cannot carry the Marcellus cap —
     p1c1/p1c5 open with single-letter "I" (stem reads as a bar),
     p1c7/p1c8/p1c11 open "It"/"In" (narrow I + tight pair reads bar +
     ghost), p1c3/p1c10 open short (.no-drop). Verified first droppable
     paragraph index + head:
     p1c1 P1 "New UR readers…", p1c5 P1 "Obviously, I can't…",
     p1c3 P1 "The story of the American Rebellion…",
     p1c7 P2 "Patience, that's all…" (P1 is another "I"),
     p1c8 P1 "But not yet…", p1c10 P1 "At last count…",
     p1c11 P1 "This essay should be…".
     The head guard keeps the mark off the prose if text ever shifts;
     unmarked chapters simply keep first-of-type caps. */
  var GI_DROP = {
    p1c1: { para: 1, head: "New UR readers:" },
    p1c5: { para: 1, head: "Obviously," },
    p1c3: { para: 1, head: "The story of the American Rebellion" },
    p1c7: { para: 2, head: "Patience, that" },
    p1c8: { para: 1, head: "But not yet, because" },
    p1c10: { para: 1, head: "At last count:" },
    p1c11: { para: 1, head: "This essay should be" }
  };

  function markDropCap(chapterId) {
    var spec = GI_DROP[chapterId];
    if (!spec) return;
    var ps = document.querySelectorAll("#chapter-text > p");
    var p = ps[spec.para];
    if (p && p.textContent.slice(0, spec.head.length) === spec.head) {
      p.classList.add("gi-drop");
    }
  }

  /* Cover dose-notches: light the manifest's ember→gold arc with real
     read[] progress. The plate's own 11 notches stay as authored; this
     overlay row (book-owned figure, aria-hidden) tints read doses gold. */
  var NOTCH_TINTS = ["#A83A2C", "#AC432B", "#B14D2A", "#B65729", "#BB622A",
    "#C06D2C", "#C6782F", "#CC8333", "#D48C49", "#DA964C", "#DFA050"];

  function paintCoverNotches() {
    var fig = document.getElementById("cover-art");
    if (!fig || document.body.dataset.view !== "cover") return;
    var old = fig.querySelector(".gi-read-row");
    if (old) old.remove();
    var read = [];
    try {
      var saved = JSON.parse(localStorage.getItem("reader-gentle-introduction") || "{}");
      read = saved.read || [];
    } catch (e) { /* no storage, no progress */ }
    if (!read.length) return;
    var row = document.createElement("div");
    row.className = "gi-read-row";
    row.setAttribute("aria-hidden", "true");
    read.forEach(function (id) {
      var m = /^p1c(\d+)$/.exec(id);
      if (!m) return;
      var i = document.createElement("i");
      i.style.background = NOTCH_TINTS[Number(m[1]) - 1] || "#DFA050";
      row.appendChild(i);
    });
    fig.appendChild(row);
  }

  document.addEventListener("reader:chapter", function (ev) {
    if (!ev.detail || ev.detail.book !== "gentle-introduction") return;
    if (ev.detail.chapterId) markDropCap(ev.detail.chapterId);
    paintCoverNotches();
  });
  document.addEventListener("DOMContentLoaded", paintCoverNotches);
})();
