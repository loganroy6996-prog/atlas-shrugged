/* Atlas Shrugged — THE SIGNAL · book-owned JS (contract §3: slots + reader:chapter only).
 * 1. Signal-code numerals in the TOC: replaces shared roman numerals with
 *    board codes (I-01 … III-10) inside .toc-num. Text swap only; no shared
 *    selectors are redefined, no reader.js internals touched.
 * 2. Monumental inscriptions: caption-adjacent board lines for p1c7/p3c2/p3c8,
 *    hung under #chapter-art from the manifest's `inscription` key. Shown
 *    ONLY when the chapter's own plate rendered (hidden slot = no inscription).
 * 3. p3c7 speech apparatus: movement numerals at verified speech beats +
 *    margin progress spine. No-JS fallback: plain calm paragraphs.
 */
(() => {
  "use strict";

  const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  const PART_ROMAN = ["I", "II", "III"];

  function paintSignalCodes() {
    const parts = document.querySelectorAll("#toc-list .toc-part");
    parts.forEach((section, pi) => {
      const rows = section.querySelectorAll(":scope > .toc-chapter .toc-num");
      rows.forEach((num, ci) => {
        if (num.dataset.coded) return;
        num.dataset.coded = "1";
        const code = `${PART_ROMAN[pi] || "?"}-${String(ci + 1).padStart(2, "0")}`;
        num.textContent = code;
      });
    });
  }

  // Verified speech beats: para index → movement numeral (p3c7, 396 paras).
  const P3C7_BEATS = [
    [103, "0"],   // the hijack: "Mr. Thompson will not speak to you tonight"
    [108, "I"],   // moral crisis
    [120, "II"],  // code of morality
    [150, "III"], // existence exists
    [168, "IV"],  // virtues
    [181, "V"],   // the trader
    [210, "VI"],  // deathbed of the mind
    [250, "VII"], // the mystics
    [313, "VIII"],// the inventor
    [344, "IX"],  // no middle
  ];

  function clearSpeech() {
    document.querySelectorAll(".as-spine").forEach((el) => el.remove());
    document.querySelectorAll("#chapter-text > p.as-beat").forEach((p) => {
      p.classList.remove("as-beat");
      p.removeAttribute("data-beat");
      p.removeAttribute("id");
    });
  }

  function buildSpeech() {
    const text = document.getElementById("chapter-text");
    if (!text) return;
    const paras = text.querySelectorAll(":scope > p");
    const spine = document.createElement("nav");
    spine.className = "as-spine";
    spine.setAttribute("aria-label", "Address movements");
    const links = [];
    P3C7_BEATS.forEach(([idx, numeral], k) => {
      const p = paras[idx];
      if (!p) return;
      const id = `as-beat-${k}`;
      p.classList.add("as-beat");
      p.dataset.beat = numeral === "0" ? "THE HIJACK" : `MOVEMENT ${numeral}`;
      p.id = id;
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.innerHTML = `<span>Movement ${numeral}</span>`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        p.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      spine.appendChild(a);
      links.push([a, p]);
    });
    document.getElementById("reader-body")?.appendChild(spine);
    const light = () => {
      let current = -1;
      links.forEach(([, p], i) => {
        if (p.getBoundingClientRect().top < window.innerHeight * 0.4) current = i;
      });
      links.forEach(([a], i) => a.classList.toggle("lit", i <= current));
    };
    light();
    window.addEventListener("scroll", light, { passive: true });
    spine._asLight = light;
  }

  function clearInscription() {
    document.querySelectorAll(".as-inscription").forEach((el) => el.remove());
  }

  async function hangInscription(chapterId) {
    clearInscription();
    const slot = document.getElementById("chapter-art");
    // Discipline: inscription ONLY when this chapter's own plate rendered.
    if (!slot || slot.hidden || !slot.querySelector("svg")) return;
    let manifest = null;
    try {
      const res = await fetch("design/chapters.json", { cache: "force-cache" });
      if (!res.ok) return;
      manifest = await res.json();
    } catch { return; }
    const entry = manifest?.chapters?.[chapterId];
    const lines = entry?.inscription;
    if (!Array.isArray(lines) || !lines.length) return;
    const el = document.createElement("p");
    el.className = "as-inscription";
    el.setAttribute("aria-hidden", "true");
    lines.slice(0, 2).forEach((line) => {
      const s = document.createElement("span");
      s.textContent = String(line);
      el.appendChild(s);
    });
    slot.after(el);
  }

  let lastSpine = null;
  function teardownSpine() {
    if (lastSpine?._asLight) window.removeEventListener("scroll", lastSpine._asLight);
    lastSpine = null;
  }

  document.addEventListener("reader:chapter", (e) => {
    const id = e?.detail?.chapterId;
    if (!id) return;
    const svg = document.querySelector("#chapter-art svg");
    if (svg) svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    teardownSpine();
    clearSpeech();
    hangInscription(id);
    paintSignalCodes();
    if (id === "p3c7") {
      buildSpeech();
      lastSpine = document.querySelector(".as-spine");
    }
  });

  // TOC exists before any chapter opens (cover view): code it on load too.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(paintSignalCodes, 0));
  } else {
    setTimeout(paintSignalCodes, 0);
  }
  // Re-code after TOC rebuilds (reader re-renders rows on filter init).
  new MutationObserver(paintSignalCodes).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
