/* Twilight of the Idols — book-owned reading enhancements (twilight-book.js).
   Contract §3: listens for reader:chapter only; fills no shared internals;
   touches only #chapter-text paragraphs (class + data attrs + spans).
   Loaded with defer AFTER shared/reader.js in index.html. */

(function () {
  "use strict";

  /* TR3/T3 — the 22 titled raids of p1c10 (Reconnaissance Raids, 61 served
     paras). Indices verified against served data/chapters/p1c10.json:
     every index opens a titled raid ("Title.—…" or "Title.*—…"). */
  var RAIDS = [0, 1, 2, 5, 6, 8, 15, 17, 22, 26, 30, 31, 34, 36, 37, 39, 40, 42, 45, 47, 50, 54];

  /* G1/G3 — p1c5 stage splits. Served paras 6/7/8 fuse aside + stage
     ("(aside)* N. stage…"); pure CSS cannot split a text node, so the
     stage numeral and INCIPIT get addressable spans for the two-voice
     treatment. Text-verbatim: no words change. */
  var P1C5_STAGES = [
    { para: 6, mark: "4." },
    { para: 7, mark: "5." },
    { para: 8, mark: "6." }
  ];

  /* G5 — p1c7 plate-head splits. The head line ("Error of … .—" /
     "Psychological Explanation for This.—" /
     "The Entire Realm of … Imaginary Causes.—") leads a long paragraph;
     isolate it so the phase disc + plate-head line sit on their own. */
  var P1C7_HEADS = [0, 2, 5, 7, 8];

  function tagRaids() {
    var grafs = document.querySelectorAll("#chapter-text > p");
    RAIDS.forEach(function (idx, n) {
      var p = grafs[idx];
      if (!p || p.classList.contains("raid-start")) return;
      p.classList.add("raid-start");
      p.setAttribute("data-raid", String(n + 1).padStart(2, "0"));
    });
  }

  /* Split "…aside…)* N. stage…" at the FIRST ")* N. " boundary (the
     asterisk is the print footnote sigil). */
  function splitP1c5() {
    var grafs = document.querySelectorAll("#chapter-text > p");
    P1C5_STAGES.forEach(function (job) {
      var p = grafs[job.para];
      if (!p || p.dataset.split === "1") return;
      var text = p.textContent;
      var needle = ")* " + job.mark + " ";
      var at = text.indexOf(needle);
      if (at < 0) return;
      var cut = at + 2; /* keep ")*" with the aside, stage starts at "N." */
      var aside = text.slice(0, cut);
      var stage = text.slice(cut);
      p.textContent = "";
      var a = document.createElement("span");
      a.className = "fable-aside";
      a.textContent = aside;
      var s = document.createElement("span");
      s.className = "fable-stage";
      s.textContent = stage;
      p.appendChild(a);
      p.appendChild(document.createTextNode(" "));
      p.appendChild(s);
      p.dataset.split = "1";
    });
    /* INCIPIT: the closing caps inside p1c5's last graf get their own span. */
    var last = grafs[grafs.length - 1];
    if (last && !last.dataset.incipit) {
      var t = last.textContent;
      var key = "INCIPIT ZARATHUSTRA";
      var at = t.indexOf(key);
      if (at >= 0) {
        last.textContent = "";
        last.appendChild(document.createTextNode(t.slice(0, at)));
        var b = document.createElement("span");
        b.className = "fable-incipit";
        b.textContent = key;
        last.appendChild(b);
        last.appendChild(document.createTextNode(t.slice(at + key.length)));
        last.dataset.incipit = "1";
      }
    }
  }

  /* Split the plate-head lead ("… .—" / ".—…") onto its own line. The head
     ends at the first ".—" or "—" after the opening words; the remainder
     becomes the plate body. Text-verbatim: punctuation preserved. */
  function splitP1c7() {
    var grafs = document.querySelectorAll("#chapter-text > p");
    P1C7_HEADS.forEach(function (idx) {
      var p = grafs[idx];
      if (!p || p.dataset.split === "1") return;
      var text = p.textContent;
      var at = text.indexOf(".—");
      var end = 2;
      if (at < 0) {
        at = text.indexOf("—");
        end = 1;
        if (at < 0 || at > 140) return; /* not a head-led graf, leave alone */
      }
      var cut = at + end;
      var head = text.slice(0, cut);
      var rest = text.slice(cut);
      p.textContent = "";
      var h = document.createElement("span");
      h.className = "plate-head";
      h.textContent = head;
      var r = document.createElement("span");
      r.className = "plate-body";
      r.textContent = rest;
      p.appendChild(h);
      p.appendChild(document.createTextNode(" "));
      p.appendChild(r);
      p.dataset.split = "1";
    });
  }

  document.addEventListener("reader:chapter", function (ev) {
    if (!ev.detail) return;
    if (ev.detail.chapterId === "p1c10") tagRaids();
    else if (ev.detail.chapterId === "p1c5") splitP1c5();
    else if (ev.detail.chapterId === "p1c7") splitP1c7();
  });
})();
