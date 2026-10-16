/* Infinite Jest — the Subsidized Time Ledger (book-owned JS).
 * Contract: READER-CONTRACT v1.1 §2–§4 (book MAY ship its own script driving
 * the slots on `reader:chapter`; NEVER touches shared internals, prose text,
 * or reader-* classes). Listens ONLY for `reader:chapter` + DOMContentLoaded.
 *
 * Jobs (all DOM-only, idempotent, reversible):
 *  1. Ledger filing band: stamp seal + filing line + year numerals injected
 *     into #chapter-meta from the FILING table (frozen TOC titles verbatim).
 *  2. Marginal note-ticks: gold circleticks mirroring curated body→note links
 *     (Part I gold register, J5); Part II violet for note→note cross-refs.
 *  3. Note 24 broadsheet: gauge/medium/UNRELEASED stamps per film paragraph.
 *  4. Chronology overlay data for p1c35 (CSS does the actual overlay, J4).
 *  5. Docket TOC: seal dots + part divider labels + Note 24 auteur flag.
 *  6. Cover: single-seal swap is pure CSS (J7); JS only stamps the docket no.
 */
(() => {
  "use strict";

  var SLUG = "infinite-jest";
  var SEALS = "art/seals.svg";

  /* Filing table: chapter -> [sealSymbol, stampBand, filingLine].
   * Titles verbatim from data/toc.json (frozen FINAL). Seal order per
   * ART-DIRECTION §4: 1 Whopper · 2 Tucks · 3 Dove Bar · 4 Wonderchicken ·
   * 5 Dishmaster · 6 Yushityu · 7 Dairy · 8 Depend · 9 Glad · filing. */
  var FILING = {
    p1c1:  ["seal-9", "YEAR OF GLAD", "FILE § 1 · NOVEL OPENS · INTERROGATION"],
    p1c2:  ["seal-8", "YEAR OF THE DEPEND ADULT UNDERGARMENT", "FILE § 2 · SEALED ROOM · THE WAITING"],
    p1c3:  ["seal-2", "1 APRIL — YR. OF THE TUCKS MEDICATED PAD", "FILE § 3 · INTAKE · THE CHAIR TO THE LEFT"],
    p1c4:  ["seal-8", "9 MAY — Y.D.A.U.", "FILE § 4 · DAWN PACKOUT · THREE DUNLOPS"],
    p1c5:  ["seal-8", "Y.D.A.U. (2)", "FILE § 5 · THE MAILER · HAPPY ANNIVERSARY"],
    p1c6:  ["seal-3", "YEAR OF THE TRIAL-SIZE DOVE BAR", "FILE § 6 · BLACKTOP · DOUBLE-DUTCH"],
    p1c7:  ["seal-8", "Y.D.A.U. (3) — ‘HAL?’", "FILE § 7 · NIGHT DORM · THE FLAGPOLE"],
    p1c8:  ["seal-8", "OCTOBER — Y.D.A.U.", "FILE § 8 · EVIDENCE BOARD · VIOLET BOND"],
    p1c9:  ["seal-8", "Y.D.A.U. (4) — HAL, 17", "FILE § 9 · TUNNELS · PUMP ROOM FAN"],
    p1c10: ["seal-7", "AUTUMN — YR. OF DAIRY PRODUCTS", "FILE § 10 · RAP SHEET · CLOWN MASKS"],
    p1c11: ["seal-8", "3 NOVEMBER — Y.D.A.U.", "FILE § 11 · FROM THE PILLOW · BLANKET TERRAIN"],
    p1c12: ["seal-filing", "AS OF Y.D.A.U.", "FILE § 12 · PROSPECTUS · THE ACADEMY SEAL"],
    p1c13: ["seal-8", "DENVER CO, 1 NOV — Y.D.A.U.", "FILE § 13 · PROGRAM COVER · WINGS / STRING"],
    p1c14: ["seal-8", "Y.D.A.U. (5) — THE DOCTORS", "FILE § 14 · CHART + CONE · HORROR RULE"],
    p1c15: ["seal-8", "Y.D.A.U. (6) — EASTBOUND", "FILE § 15 · TRANSIT MINIATURE · VENT #5"],
    p1c16: ["seal-8", "30 APRIL — Y.D.A.U.", "FILE § 16 · HORIZON · VISCOUS-DROP SUN"],
    p1c17: ["seal-8", "Y.D.A.U. (7) — TUES 3 NOV, E.T.A.", "FILE § 17 · LITANY · THE TIRED CASCADE"],
    p1c18: ["seal-8", "3 NOVEMBER Y.D.A.U.", "FILE § 18 · NIGHT DORM · THREE ROOMS"],
    p1c19: ["seal-8", "MARIO’S FIRST ROMANCE, THUS FAR", "FILE § 19 · OCTOBER WALK · THE THICKET"],
    p1c20: ["seal-8", "30 APRIL — Y.D.A.U. (2)", "FILE § 20 · NIGHT SESSION · DANCE-HALL GLOBE"],
    p1c21: ["seal-8", "30 APRIL — Y.D.A.U. (3)", "FILE § 21 · THE GURU · LOTUS / PULL-DOWN"],
    p1c22: ["seal-8", "3 NOVEMBER Y.D.A.U. (2)", "FILE § 22 · TRANSPARENT PHONE · GRANITE"],
    p1c23: ["seal-7", "INTCOM MEMO CAH-NNE22", "FILE § 23 · TRANSMISSION · PULLEY + BARREL"],
    p1c24: ["seal-4", "HAL ON FILM, GRADED B/B+", "FILE § 24 · GRADED PAPER · HERO TRIPTYCH"],
    p1c25: ["seal-8", "STEEPLY, PUTATIVE PROFILE", "FILE § 25 · TABLOID · THE AIGNER HEART"],
    p1c26: ["seal-filing", "ALPHABETICAL TALLY · Q/E/S/V/VV", "FILE § 26 · DOSSIER CARD · SEVEN GROUPS"],
    p1c27: ["seal-8", "WHY INTERLACE FAILED UPWARD", "FILE § 27 · WHITEPAPER · MASKS + VENDORS"],
    p1c28: ["seal-filing", "WINTER B.S. 1960 — TUCSON AZ", "FILE § 28 · GARAGE LESSON · PRE-SUBSIDIZED"],
    p1c29: ["seal-8", "4 NOVEMBER — Y.D.A.U.", "FILE § 29 · EVASION LOG · RED LINE"],
    p1c30: ["seal-6", "HAL ON O. INCANDENZA · 11.5 MIN", "FILE § 30 · CARTRIDGE LABEL · CUE DOTS 1–51"],
    p1c31: ["seal-8", "MONTESIAN DROP-IN 1300–1500H", "FILE § 31 · PLACARD DOOR · SIGN-IN STRIP"],
    p1c32: ["seal-8", "LATE OCTOBER — Y.D.A.U.", "FILE § 32 · RADIO DIAL · WYYY-109 MIDNIGHT"],
    p1c33: ["seal-8", "6 NOVEMBER — Y.D.A.U.", "FILE § 33 · COPPER BEECH · WEIGHT PLATES"],
    p1c34: ["seal-8", "7 NOVEMBER — Y.D.A.U.", "FILE § 34 · DIRECTOR CHAIRS · CUKOR/MÉLIÈS/MURNAU"],
    p1c35: ["seal-filing", "SUBSIDIZED TIME™ · BY YEAR", "FILE § 35 · CHRONOLOGY · NINE YEARS (1)–(9)"],
    p1c36: ["seal-filing", "HELEN P. STEEPLY · PUTATIVE C.V.", "FILE § 36 · DOSSIER · TENURE STAMPS"],
    p1c37: ["seal-8", "5 NOVEMBER — Y.D.A.U.", "FILE § 37 · CALL RHYTHM · 239 TURNS"],
    p1c38: ["seal-8", "6 NOVEMBER — Y.D.A.U. (2)", "FILE § 38 · TRI-DOME · E.T.A. v P.W.T.A. 108"],
    p1c39: ["seal-8", "14 NOVEMBER — Y.D.A.U.", "FILE § 39 · SEIZURE STUDY · GRAY LINE"],
    p1c40: ["seal-8", "7 NOVEMBER — Y.D.A.U. (2)", "FILE § 40 · EXAM MASTHEAD · MS. THODE"],
    p1c41: ["seal-filing", "AS OF Y.D.A.U. — EXAM FILE", "FILE § 41 · SEPARATISM + RETURN · Mlle. POUTRINCOURT"],
    p1c42: ["seal-8", "30 APR / 1 MAY — Y.D.A.U.", "FILE § 42 · NIGHT INTERFACE · STARFIELD SHELF"],
    p1c43: ["seal-8", "8 NOV — I.-DAY · ESCHATON", "FILE § 43 · WAR-MAP · REDCHI/AMNAT/INDIR"],
    p1c44: ["seal-8", "8 NOV — WHITE FLAG COMMITMENT", "FILE § 44 · HANDBILL · PROVIDENT CAFETERIA"],
    p1c45: ["seal-8", "30 APR / 1 MAY — Y.D.A.U. (2)", "FILE § 45 · INTERFACE LULL · SEAM SPLIT"],
    p1c46: ["seal-8", "8 NOV — I.-DAY GALA · PUPPET FILM", "FILE § 46 · THREE-PLATE BRAID · GENTLE/TINE"],
    p1c47: ["seal-8", "30 APR / 1 MAY — Y.D.A.U. (3)", "FILE § 47 · SOUP SEMINAR · HABITANT CAN"],
    p1c48: ["seal-8", "Y.D.A.U. (8) — BRAINTREE", "FILE § 48 · BIKER HANDBILL · UNDERSEA CODA"],
    p1c49: ["seal-8", "VERY LATE OCTOBER Y.D.A.U.", "FILE § 49 · DREAM FILE · SINGLE PARAGRAPH"],
    p1c50: ["seal-8", "9 NOVEMBER — Y.D.A.U.", "FILE § 50 · DAWN DRILLS · AVENTURA PLATE AT §46"],
    p1c51: ["seal-8", "PRE-DAWN 1 MAY — STILL", "FILE § 51 · P-TERMINALS · THREE-PLATE BRAID"],
    p1c52: ["seal-8", "PRE-DAWN 1 MAY — LAST WATCH", "FILE § 52 · BONFIRE RING · TWO FIGURES"],
    p1c53: ["seal-filing", "WINTER B.S. 1963 — SEPULVEDA CA", "FILE § 53 · SUN-BLAZED ROOM · THREE-PLATE BRAID"],
    p1c54: ["seal-8", "10 NOVEMBER — Y.D.A.U.", "FILE § 54 · WAITING ROOM · SIX CHAIRS"],
    p1c55: ["seal-8", "PRE-DAWN + DAWN, 1 MAY — STILL", "FILE § 55 · DESERT DIPTYCH · TWO FIGURES"],
    p1c56: ["seal-8", "0450H, 11 NOV — ENNET FRONT OFFICE", "FILE § 56 · NIGHT OFFICE · THE 0450H INTERFACE"],
    p1c57: ["seal-filing", "UNDATED DOSSIER · METRIC RULER", "FILE § 57 · LOCKED DRAWER · MOTH SPECIMEN"],
    p1c58: ["seal-8", "LATE P.M. MON 9 NOV — Y.D.A.U.", "FILE § 58 · BLAZING RECTANGLE · DOORLESS OFFICE"],
    p1c59: ["seal-8", "WED 11 NOVEMBER — Y.D.A.U.", "FILE § 59 · NIGHT WALK · FANEUIL ST. ROUTE"],
    p1c60: ["seal-8", "GATELY · INTERFACE MOMENTS", "FILE § 60 · CENTERPIECE · THE LONG NIGHT"],
    p1c61: ["seal-8", "11 NOVEMBER — Y.D.A.U.", "FILE § 61 · DINING HALL · SUPPER, 133 KIDS"],
    p1c62: ["seal-8", "1 MAY — OUTCROPPING · STILL", "FILE § 62 · DESERT-NIGHT · THE RECLINER"],
    p1c63: ["seal-8", "13 NOVEMBER — Y.D.A.U.", "FILE § 63 · WEE HOURS · THE WING-ARC"],
    p1c64: ["seal-8", "11 NOVEMBER — Y.D.A.U. (2)", "FILE § 64 · MATCH-DAY BROADSIDE · WEST COURTS"],
    p1c65: ["seal-8", "14 NOVEMBER — Y.D.A.U. (2)", "FILE § 65 · WINDOW FRAME · SOUP + STEAM"],
    p1c66: ["seal-8", "11 NOVEMBER — Y.D.A.U. (3)", "FILE § 66 · VIEWING ROOM 6 · DARK SHELF"],
    p1c67: ["seal-8", "14 NOVEMBER — Y.D.A.U. (3)", "FILE § 67 · MAMBO · LOCOMOTIVE CARD TIPPED IN"],
    p1c68: ["seal-8", "14 NOVEMBER — Y.D.A.U. (4)", "FILE § 68 · SODIUM LAMP · PROSPECT ST. 2200H"],
    p1c69: ["seal-8", "14 NOVEMBER — Y.D.A.U. (5)", "FILE § 69 · FROST STUDY · FLUORESCENT SLASH"],
    p1c70: ["seal-8", "14 NOVEMBER — Y.D.A.U. (6)", "FILE § 70 · THE SPRINT · UNBROKEN MIRRORS"],
    p1c71: ["seal-8", "14 NOVEMBER — Y.D.A.U. (7)", "FILE § 71 · TRIPTYCH OF CARE · TRAY/CHAIR/DOOR"],
    p1c72: ["seal-8", "11 NOVEMBER — Y.D.A.U. (4)", "FILE § 72 · BOLEX SLATE · E.T.A. AT NIGHT"],
    p1c73: ["seal-8", "17 NOVEMBER — Y.D.A.U.", "FILE § 73 · TRIPLE GATE · LOG/LAMP/CHART"],
    p1c74: ["seal-8", "19 NOVEMBER — Y.D.A.U.", "FILE § 74 · OPERATION ORDER · KITCHEN FIXTURE"],
    p1c75: ["seal-8", "20 NOV — Y.D.A.U. · GAUDEAMUS", "FILE § 75 · FROZEN WINDOW · FIRST SNOW"],
    p1c76: ["seal-8", "PARTIAL TRANSCRIPT · MTG DELAYED", "FILE § 76 · PLACARD ROW · STORM WINDOW"],
    p1c77: ["seal-8", "20 NOV — PRE-FÊTE · GAUDEAMUS", "FILE § 77 · FINALE · THE INVERTED TUMBLER"],
    p2c1:  ["seal-filing", "NOTES 1–23 · THRESHOLD", "APPENDIX G1 · CARDIOID PLAN · LEAVING THE NOVEL"],
    p2c2:  ["seal-filing", "NOTE 24 · J.O. INCANDENZA", "APPENDIX G2 · FILMOGRAPHY · MOSTLY UNRELEASED"],
    p2c3:  ["seal-filing", "NOTES 25–64 · PRIMER", "APPENDIX G3 · A.F.R. BRIEFING · WHEEL + FLEUR"],
    p2c4:  ["seal-filing", "NOTES 65–104 · INTERFACE", "APPENDIX G4 · GATELY HOURS · 47 TURNS"],
    p2c5:  ["seal-filing", "NOTES 105–144 · HALO-ANKLE", "APPENDIX G5 · PAIL + SHOEBOX · A–L APPARATUS"],
    p2c6:  ["seal-filing", "NOTES 145–184 · MOMENT", "APPENDIX G6 · PRESS BADGE · FRENCH GLOSS"],
    p2c7:  ["seal-filing", "NOTES 185–224 · BALLPERSONS", "APPENDIX G7 · PORTRAIT ROW · N216 ‘NO CLUE’"],
    p2c8:  ["seal-filing", "NOTES 225–264 · MOMS", "APPENDIX G8 · SECOND BADGE · STAGE DIRECTIONS"],
    p2c9:  ["seal-filing", "NOTES 265–304 · NEXT TRAIN", "APPENDIX G9 · BAIN LETTER · LE JEU DU TRAIN"],
    p2c10: ["seal-filing", "NOTES 305–344 · LOCKERS", "APPENDIX G10 · NOVEMBER INTERIORS · DUETS"],
    p2c11: ["seal-filing", "NOTES 345–384 · FORMULARY", "APPENDIX G11 · APOTHECARY LABEL · ® CHANT"],
    p2c12: ["seal-filing", "NOTES 385–388 · TERMINUS", "APPENDIX G12 · LAST FILING · TALWIN-NX COLOPHON"]
  };

  /* p1c35 chronology markers (1)–(9) in para 0, in print order. The overlay
   * is CSS-only (J4); this table only records the verified split points so
   * a future reader extension can key off them. DO NOT restructure the DOM. */
  var CHRONO_NINE = [
    "Year of the Whopper", "Year of the Tucks Medicated Pad",
    "Year of the Trial-Size Dove Bar", "Year of the Perdue Wonderchicken",
    "Year of the Whisper-Quiet Maytag Dishmaster",
    "Year of the Yushityu 2007 Mimetic-Resolution-Cartridge-View-Motherboard",
    "Year of Dairy Products from the American Heartland",
    "Year of the Depend Adult Undergarment", "Year of Glad"
  ];

  function $(sel, root) { return (root || document).querySelector(sel); }

  function isIJ() {
    return document.body && document.body.dataset.book === SLUG;
  }

  /* 1. Filing band ---------------------------------------------------- */
  function paintFiling(chapterId) {
    if (!isIJ()) return;
    var meta = $("#chapter-meta");
    if (!meta) return;
    var old = meta.querySelector(":scope > .ij-filing");
    if (old) old.remove();
    var f = FILING[chapterId];
    if (!f) return;
    var seal = f[0], band = f[1], line = f[2];
    var wrap = document.createElement("div");
    wrap.className = "ij-filing";
    wrap.setAttribute("aria-hidden", "true");
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("class", "ij-filing-seal");
    var use = document.createElementNS(NS, "use");
    use.setAttribute("href", SEALS + "#" + seal);
    svg.appendChild(use);
    var texts = document.createElement("div");
    texts.className = "ij-filing-texts";
    var b = document.createElement("p");
    b.className = "ij-stamp-band";
    b.textContent = band;
    var l = document.createElement("p");
    l.className = "ij-filing-line";
    l.textContent = line;
    texts.appendChild(b);
    texts.appendChild(l);
    wrap.appendChild(svg);
    wrap.appendChild(texts);
    meta.insertBefore(wrap, meta.firstChild);
  }

  /* 2. Marginal note-ticks --------------------------------------------
     One tick per paragraph carrying note refs (F3, 2026-10-16: the old
     paragraph-head-text hash swallowed a second note ref in the same
     paragraph AND any other paragraph with an identical 40-char head
     (~2 pills/chapter in cohort D). Notes are now grouped per paragraph
     with the full note-number list; >3 mount as a +N count).
     R4 species hook (DESIGN-FINDINGS-D.md R4): when the paragraph's ::after
     already mounts a cohort gutter label, the pill gets .ij-tick--low and
     theme.css stacks it one line below instead of overprinting. */
  function paintNoteTicks() {
    if (!isIJ()) return;
    var text = $("#chapter-text");
    if (!text) return;
    Array.prototype.forEach.call(
      text.querySelectorAll(":scope > p > .ij-tick"), function (t) { t.remove(); });
    var refs = text.querySelectorAll(":scope > p > a.reader-noteref");
    var order = [];
    var byPara = new Map();
    Array.prototype.forEach.call(refs, function (a) {
      var p = a.parentElement;
      if (!p) return;
      if (!byPara.has(p)) { byPara.set(p, []); order.push(p); }
      var n = a.dataset.note || (a.textContent || "").replace(/[^0-9]/g, "");
      if (n) {
        var list = byPara.get(p);
        if (list.indexOf(n) === -1) list.push(n);
      }
    });
    order.forEach(function (p) {
      var list = byPara.get(p);
      if (!list.length) return;
      var shown = list.slice(0, 3).join(" · ");
      if (list.length > 3) shown += " +" + (list.length - 3);
      var tick = document.createElement("span");
      tick.className = "ij-tick";
      var ghost = getComputedStyle(p, "::after").content;
      if (ghost && ghost !== "none" && ghost.length > 2) tick.classList.add("ij-tick--low");
      tick.setAttribute("aria-hidden", "true");
      tick.textContent = "◈ " + shown;
      p.appendChild(tick);
    });
  }

  /* 3. Note 24 broadsheet stamps -------------------------------------- */
  var GAUGE_RE = /(?<!Super-)(?<!\d)\b(16|35|78)\s+mm\./;
  var UNREL_RE = /\bUNRELEASED\b/;
  function paintFilmography(chapterId) {
    if (!isIJ()) return;
    var text = $("#chapter-text");
    if (!text) return;
    Array.prototype.forEach.call(
      text.querySelectorAll(":scope > p > .ij-stamp"), function (s) { s.remove(); });
    if (chapterId !== "p2c2") return;
    Array.prototype.forEach.call(text.querySelectorAll(":scope > p"), function (p) {
      var t = p.textContent;
      var stamps = [];
      var g = GAUGE_RE.exec(t);
      if (g) stamps.push([g[1] + "MM", "ij-stamp-gauge"]);
      if (UNREL_RE.test(t)) stamps.push(["UNRELEASED", "ij-stamp-unrel"]);
      else if (/waiting for/i.test(t) && stamps.length) stamps.push(["VAULT", "ij-stamp-vault"]);
      stamps.forEach(function (st) {
        var s = document.createElement("span");
        s.className = "ij-stamp " + st[1];
        s.setAttribute("aria-hidden", "true");
        s.textContent = st[0];
        p.appendChild(s);
      });
      if (stamps.length) p.classList.add("ij-film");
    });
  }
  /* 5. Docket TOC ------------------------------------------------------ */
  var docketDone = false;
  function paintDocket() {
    if (!isIJ() || docketDone) return;
    var list = $("#toc-list");
    if (!list || !list.querySelector(".toc-chapter")) return;
    docketDone = true;
    var parts = list.querySelectorAll(":scope > .toc-part");
    Array.prototype.forEach.call(parts, function (section, pi) {
      var head = section.querySelector(":scope > .toc-part-header");
      if (head && !head.querySelector(".ij-docket-tag")) {
        var tag = document.createElement("span");
        tag.className = "ij-docket-tag";
        tag.textContent = pi === 0 ? "THE NOVEL" : "ENDNOTES & ERRATA";
        head.appendChild(tag);
      }
      Array.prototype.forEach.call(
        section.querySelectorAll(":scope > .toc-chapter"), function (btn) {
          var cid = btn.dataset.chapterId;
          var f = FILING[cid];
          if (!f || btn.querySelector(".ij-row-seal")) return;
          var dot = document.createElement("span");
          dot.className = "ij-row-seal ij-row-" + f[0];
          dot.setAttribute("aria-hidden", "true");
          btn.insertBefore(dot, btn.firstChild);
          if (cid === "p2c2" && !btn.querySelector(".ij-auteur")) {
            var au = document.createElement("span");
            au.className = "ij-auteur";
            au.textContent = "AUTEUR";
            au.setAttribute("aria-hidden", "true");
            btn.appendChild(au);
          }
        });
    });
  }

  /* Cover docket number (stamped once the TOC is known). */
  function paintCoverDocket() {
    if (!isIJ()) return;
    var foot = $("#cover-footer-meta");
    if (!foot || foot.dataset.ijStamped) return;
    foot.dataset.ijStamped = "1";
  }

  function onChapter(e) {
    var id = (e && e.detail && e.detail.chapterId) || document.body.dataset.chapter;
    if (!id) return;
    paintFiling(id);
    paintNoteTicks();
    paintFilmography(id);
    paintDocket();
    paintCoverDocket();
  }

  document.addEventListener("reader:chapter", onChapter);
  document.addEventListener("DOMContentLoaded", function () {
    paintDocket();
    if (document.body.dataset.chapter) onChapter(null);
    /* F-A1 (acceptance verdict 2026-10-17): TOC rows are built by
       shared/reader.js buildToc AFTER DOMContentLoaded, so a cold drawer
       open from the cover showed bare rows. Repaint whenever rows mount.
       paintDocket() is one-shot (docketDone) and guarded, so this fires
       at most once per mount wave. */
    var tocList = document.getElementById("toc-list");
    if (tocList && window.MutationObserver) {
      new MutationObserver(function () { paintDocket(); })
        .observe(tocList, { childList: true, subtree: true });
    }
  });

  /* Expose the chronology table for inspection (read-only reference). */
  window.IJ_LEDGER = window.IJ_LEDGER || {};
  window.IJ_LEDGER.chronoNine = CHRONO_NINE.slice();
  window.IJ_LEDGER.filingCount = Object.keys(FILING).length;
})();
