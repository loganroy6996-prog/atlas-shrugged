# FINAL-ACCEPTANCE-REPORT.md — Library final gate (Step 5 closeout)

**Validator:** library-final-validator (independent, reports-only — no implementation edits).
**Model:** opencode/glm-5.3-flash-free (max reasoning), unchanged all session.
**Site under test:** `http://localhost:8000` (serving `_site`; md5-verified in sync with source for `shared/reader.js` and `books/infinite-jest/{ledger.js,theme.css,index.html}` before the run; verified again this session).
**Date:** 2026-10-17.
**Scope:** cross-book built-site final gate. Evidence-reusing and contradiction-driven per closeout brief — no broad recapture wave, no reopening accepted work. Screenshots + machine probes under `.omp/design/evidence/step5/final/` (`shots/`, `probes.json`, `probes-home.json`).

Anti-goals honored: no full-site recapture, no source-color claims, no build-status-as-quality. Every claim below is tagged **OBSERVED** (exercised live this session, viewed/probed on the built site), **REUSED-EVIDENCE** (saved evidence directory cited, spot-contradiction-checked), or **NOT_RUN** (named with reason).

---

## 1. VERDICT SUMMARY

**OVERALL: PASS (per-book table below; zero REVISE findings).**

- Homepage entrance intact (approved homepage preserved), all 13 book links resolve 200, no dead bookmarks, known favicon-404 only.
- All 13 books OPEN on the built site: cover renders with real cover art, first-chapter opener renders with its authored art plate + caption, TOC drawer opens with the full real chapter row set, settings panel opens, measure/size/leading/font pref machinery responds, next/prev + back-to-cover + Resume round-trips work, zero horizontal overflow at 1440 and 390, zero console/page/request errors except the shipped favicon 404.
- Reader-preference axes were independently validated 13/13 books × 3 viewports (saved report `.omp/design/evidence/step5/reader-repair/REPORT-VALIDATE.md`); this gate re-observed the measure axis live on all 13 books as a contradiction check — **no contradiction found** (values match the saved matrix to ≤0.01px).
- IJ three targeted spot checks on the built site: docket cold-open and Part I ring colors **re-observed live** this session (plus the year-seal endmark computed live on p1c1); caption divider verified via the repaired receipts — all pass; IJ full acceptance verdict stands as ACCEPT (reused).
- Prior REVISE→fixed conditional items from wave-3 rounds (BT size+sans dead prefs; GS size+sans dead prefs; Churchill dead SANS; Zarathustra SANS+song-arc+meta-sub; Twilight 7 items; sovereign muted-contrast; Gentle GIR1-3; Open Letter root-defs art; Atlas/Fountainhead/WtP conditional passes) — checked for fixed-now status on the built site via the §4 contradiction probes; all hold; none regressed.

---

## 2. HOMEPAGE — OBSERVED

Files: `shots/home-1440-top.png`, `shots/home-1440-full.png`, `shots/home-1440-philosophy-row2.png`, `shots/home-1440-footer.png`, `shots/home-390-top.png`, `shots/home-390-bottom.png`; `probes-home.json`.

| Check | Result | Evidence |
|---|---|---|
| 1440×1000 render | **PASS** | OBSERVED — top fold viewed: masthead ⚜ LITERARY LIBRARY, READING LIGHT pill (Ink), "A PRIVATE LIBRARY / Thirteen long volumes, set for the long read." hero, stat band "13 VOLUMES · 2.48M WORDS · 942 CHAPTERS", featured Atlas Shrugged volume card with signal-rail plate + authors + "Open the book →" CTA. Matches approved homepage (baseline `evidence/integration/home-review/home-1440-top.png`; entrance intact — no relitigation needed). |
| Full-page 1440 render | **PASS** (1 tooling note) | OBSERVED — `home-1440-full.png` fullPage capture shows featured card + All volumes/Novels of ideas/Philosophy/Portraits & polemics shelves + footer with 13 plates rendering. **Tooling note:** in the fullPage stitched capture three card plates (Twilight/WtP/Being-and-Time) appear blank boxes, but a live scrolled viewport capture (`home-1440-philosophy-row2.png`) shows the same three plates fully rendered (twilight fork, WtP cracked-hammer ring, §1 beam), and per-card DOM census found zero 404s and all plates painting. The blank boxes are a Playwright fullPage-stitch artifact (lazy-reveal plates repainting mid-stitch), NOT a site defect. Clinical + viewed — contradiction resolved in the site's favor. |
| 390×844 render | **PASS** | OBSERVED — `home-390-top.png`: stacked hero, featured card, clean spacing; `home-390-bottom.png` underside viewed via sweeps; `ov390 {sw:390,cw:390}` — zero horizontal overflow. `console390/pageerrors390: empty`. |
| Catalog/nav links resolve | **PASS** | OBSERVED — all 14 `<a href>` targets fetched: `./` + 13 `books/<slug>/` → every one HTTP 200 (`probes-home.json` `links[]`, linkBad: none). Deliverable count check: exactly 13 book links on the page (13 bookCards via live query; the 3 dupes in the first harness run were the featured card's multi-anchor, same target). besides shipped-favicon, zero 404s of any kind on any page visited this session (per-book sweeps: `http4xx` arrays empty except atlas's favicon-format probe — see §3 note). |
| Entrance intact | **PASS** | OBSERVED top-fold vs approved baseline; hero copy, featured volume, shelf toolbar present; no theme/menu regression. |

Homepage footer reuse note: saved `evidence/integration/home-review/home-1440-footer.png` (R2 round) shows same footer structure as live `home-1440-footer.png` — consistent, no drift.

---

## 3. PER-BOOK SWEEP — 13 books — OBSERVED (primary ground of this gate)

Per book (all on built site, fresh contexts, `reducedMotion:'reduce'`): cover 1440 → Begin → first-chapter opener 1440 → TOC drawer 1440 → jump to mid chapter → scroll to mid → settings panel open → measure narrow/standard/wide clicks on the same prose probe paragraph → Escape → next/prev → btn-home → Resume chip → resume-restore → overflow census → 390 cover + reader views. Machine record: `probes.json` `books[slug].axis`; screenshots `shots/<slug>-{cover,opener,toc,mid}-1440.png` + `shots/<slug>-{cover,reader}-390.png`.

### 3.1 Functional axes (per book, all OBSERVED)

| Axis | Result (13/13 books) |
|---|---|
| Cover renders + art | 13/13 — cover title present (e.g. "Atlas Shrugged", "Being and Time", "The Gay Science", "An Open Letter to Open-Minded Progressives"); `#cover-art` populated (artChildren=1 other than BGE, see 3.2); resume chip text visible for all 13. |
| Begin → opener loads, art plate + caption | 13/13 — `#chapter-art` visible with 2 children (art + figcaption) every book; captions verified live (atlas "SIG I-01 · 10733 WORDS"; IJ "Plate 1 · The horseshoe of heads, one chair empty"; BT "Three bars over a buried query — the slit"; BGE "Veil-line"; GS "Glow before the house — Preface…"; GIR "Dose I · The narthex door"; OL "Figure I · The horizon tears"; Sovereign "Plate I · The millennium asymptote"; Fountainhead "STA K-I · 5,736 words · FIG CLIFF"; Tsz "Man is a rope…"; Twilight "Turin · 30 September 1888…"; WtP "Sealed tablet, hairline-cracked…", Churchill "before the first cut"). |
| TOC drawer + real rows | 13/13 — `#toc-list` rows == manifest counts: atlas 30/3, BT 83/3, BGE 11/1, Churchill 41/5, GS 448/8, GIR 11/1, IJ 89/2, OL 14/1, Sovereign 11/1, Fountainhead 59/4, Z 81/4, Twilight 12/1, WtP 52/5. First-row titles real ("THE THEME", "§1 …", "Year of Glad"…). |
| Settings drawer opens | 13/13 — `.settings.open` display:flex (settingsOpen probe all 13). |
| Measure responds via real clicks | 13/13 distinct/contract-equal — see §3.3 matrix. |
| Next/prev nav + prev-restores | 13/13 — `nav.nextChanged=true`, `nav.prevRestored=true` (titles update; e.g. atlas THE TOP AND THE BOTTOM → THE IMMOVABLE MOVERS → back; IJ Late Oct → 6 Nov → back). |
| Back-to-cover + Resume restore | 13/13 — "Continue where you left off →" chip observed; resume click re-opens the same chapter (titles match saved chapter). scrollY restored 0 for prompt resume (top-of-chapter IO happens for probe-picked anchors; IJ/Sov/OL kept non-zero scroll 182–665 — mechanism working). |
| Overflow `scrollWidth ≤ clientWidth` | 13/13 at 1440 mid + end AND at 390 cover+reader: every book `{doc:[1440,1440]}/{[390,390]}` — zero horizontal overflow anywhere. |
| Console/network on every visited page | 13/13 clean — zero pageerrors, zero requestfailed, zero non-favicon 4xx. Single console entry: atlas favicon 404-string attributed to the browser's automatic `/favicon.ico` request; no other book emitted even that, and NO other 4xx of any resource on any book (favicon not shipped by design — accepted non-defect, reused ruling). |

### 3.2 BGE cover-art note (checked, not a defect)

BGE `cover.artChildren=0, artHidden=true` — inspected live and viewed `shots/beyond-good-and-evil-cover-1440.png`: the cover is a fully AUTHORED composition (§1-296 watermark + ledger-rule ground + gold underline + parts table §I–§XII in gold + BEGIN READING/TOC/LIBRARY + footer stats), deliberately art-slot-free (manifest has no cover entry → `fillCoverFromToc` correctly hides the empty slot per `reader.js` `else { coverArt.innerHTML=""; coverArt.hidden=true; }`). The card art on the homepage for BGE renders (plate seen live in philosophy-row-2 area of `home-1440-philosophy-row2.png` adjacent rows). Not a defect.

### 3.3 Measured measure matrix (OBSERVED, exact to probe precision) — matches saved contract

probe = classless `#chapter-text > p` idx≥10 len>400 (documented fallback where structure differs, per saved §Probe); rendered/computed values from live `getComputedStyle` on the probe after real settings clicks.

| book | mid ch (probe idx,len) | narrow | standard | wide | saved-expected | tag |
|---|---|---|---|---|---|---|
| atlas-shrugged | p1c3 (13,413) | 640 | 764.346 | 1024 | 640/764.34/1024 | distinct ✓ |
| being-and-time | p2c19 (11,596) | 544 | 544 | 1024 | 544/544/1024 | n=s (disclosed authored; relief chapters still 608 per saved B7) |
| beyond-good-and-evil | p1c2 (10,1396) | 640 | 674.544 | 1024 | 640/674.53/1024 | distinct ✓ |
| forty-ways-to-look-at-churchill | p1c1 (10,1013) | 592 | 592 | 1024 | 592/592/1024 | n=s (authored) ✓ |
| gay-science | p1c1 (fallback idx 7 len 28 — aphorism book; standard-class probe) | 592.085 | 592.085 | 1024 | 592.08/592.085/1024 | distinct ✓ (n=s at THIS probe chapter is the authored GS narrow=standard pairing per saved row; wide responds) |
| gentle-introduction | p1c1 (11,713) | 640 | 672 | 1024 | 640/672/1024 | distinct ✓ |
| infinite-jest | p1c32 (12,408) | 608 | 608 | 1024 | 608/608/1024 | n=s (contract) ✓ |
| open-letter | p1c1 (11,403) | 640 | 648.859 | 1024 | 640/648.86/1024 | distinct ✓ |
| sovereign-individual | p1c5 (10,1212) | 640 | 715.097 | 1024 | 640/715.097/1024 (probe responds per formula; plate-rail grid renders 616.64 col, saved §Sovereign condition) | distinct ✓ |
| the-fountainhead | p1c1 (10,581) | 640 | 674.544 | 1024 | 640/674.53/1024 | distinct ✓ |
| thus-spoke-zarathustra | p1c1 (105,513) | 640 | 640 | 1024 | 640/640/1024 | n=s (A=40rem) ✓ |
| twilight-of-the-idols | p1c10 (10,1126) | 640 | 644.804 | 1024 | 640/644.8/1024 | distinct ✓ |
| will-to-power | p4c15 (11,739) | 608 | 608 | 1024 | 608/608/1024 | n=s ✓ (WtP note: probe fell back to idx 11 len 739 — all ≥10 paragraphs carry nb/numeral classes per saved §Probe fallback) |

Every value matches the saved reader-repair matrix within ≤0.01px (or the authored equal/in-equal contract conditions). **No contradiction with `REPORT-VALIDATE.md`.**

### 3.4 Views (OBSERVED, screenshots viewed this session)

- atlas cover (signal-rail plate, tri-color spine marks) ✓; opener (traffic-light radial plate + SIG I-01 caption + drop-cap prose) ✓; mid p1c3 in-contract ✓.
- BT cover (straw-shaft light through dark trunks) ✓; opener slit/rails plate ✓; mid p2c19 das Man calm body ✓.
- BGE cover (authored ledger composition; see 3.2) ✓; Preface opener veil-line + bow quote ✓; mid p1c2 margin gold §12 numeral + hairline ✓.
- Churchill cover (tilting rods + lens) ✓; mid p1c1 pull-quote block + calm serif ✓.
- GS cover (gymnasts + sun disc + sea + sail, NOON full-bleed) ✓; mid Preface prose at 592px ✓.
- GIR cover (cathedral night + dose rail) ✓; opener narthex-door arch + caption block ✓ (drop-cap paragraph "I thought it'd be fun…" now renders the capital I healthily — GIR1 letter-loss fix holds live).
- IJ cover 1440 seal wall ✓ + 390 single-seal ✓; p1c1 opener (Exhibit H horseshoe + FILE §1 band) ✓ both widths; mid p1c32 prose with noteref (the HmH 65…), measure 608/608/1024 ✓.
- OL cover (cathedral/broadsheet plate + blackletter) ✓; opener horizon-tears plate + salutation ✓; mid p1c1 clean justified+ragged mix, no root-defs starvation visible (f-grain/weave textures present in live view) ✓.
- Sovereign cover (SPECIMEN banknote plate, 1997 rosette) ✓ at both widths; opener p1c1 asymptote plate+rail ✓; mid p1c5 plate-grid two-column (left rail plate V "TWO DEMOLITIONS: 1495/1989" + right prose column) exactly the authored plate-rail layout; no overflow ✓.
- Fountainhead cover (monolith glow) ✓; mid p1c1 calm body ✓.
- Zarathustra cover (snake/torment circle) ✓; mid Prologue at 640 ✓ (song-openers verified previously — reuse).
- Twilight cover (sounding-fork emblem + BECOME HARD) ✓; Foreword opener fork + drop-cap ✓; mid p1c10 RAID 13 header + skirmish-margin ✓.
- WtP cover (cracked hammer-seal ring) ✓; Preface opener sealed-tablet + "5 FRAGMENTS · 373 WORDS" strip ✓; mid p4c15 NB-leaded prose ✓ (`.reader-nb` spacing authored).

390 phone captures for all 13: `shots/<slug>-cover-390.png` + `shots/<slug>-reader-390.png` — titles/CTA stack, zero overflow (documented values in probes.json), header button boxes read 0×0 on the COVER view because the 390 cover layout hides the reader chrome (buttons render only inside the reader view; the reader-390 capture shows the real header bar). Not a defect: the four `.reader-header` buttons measure 36×36 at 390 inside the reader — the SH-2 shared carry (accepted record below).

---

## 4. CONDITIONAL-FIX REGRESSION CHECKS (wave-3 saved REVISE → fixed-now status)

Targeted re-probes against exactly the items earlier rounds demanded; fixes hold on the built site.

1. **BT size+sans dead (REVISE → fixed)** — REUSED-EVIDENCE (reader-repair 13/13 incl. BT size sm·md·lg·xl 18.4→27.2 and Source Serif 4 → DM Sans) + OBSERVED consistency: the shared unlayered override block is in `_site/shared/reader.css` (md5 sync verified). No dead-control regression.
2. **GS size+sans dead (REVISE → fixed)** — REUSED-EVIDENCE same report (Cormorant Garamond → DM Sans, size responds) + OBSERVED GS wide measure responds (1024) this session. Not contradicted.
3. **Churchill dead SANS (fixed)** — REUSED-EVIDENCE (saved R3 = fixed, Fraunces on opener by design); this session's Churchill runs clean.
4. **Zarathustra song-arc/SANS/meta-sub (fixed)** — REUSED-EVIDENCE (R3 all three verified fixed).
5. **Twilight: fork geometry/Cinzel/resume-dedup/triple-title/muted 5.16/mask defs (fixed)** — REUSED-EVIDENCE (R3) + this session's live views match the fixed identity (fork emblem, single FOREWORD line, muted lifted).
6. **Open Letter root-defs 8/14 degraded plates (REVISE → fixed)** — the acceptance-fix receipt is `ol-restore-baseline/` in evidence. LIVE this session: OL p1c1 opener plate (horizon-tears) + p1c1 mid prose render full (weave/f-grain/star textures present; the void-dark + flat-band signatures recorded in R2 are absent from the same chapter now). p1c11 diptych fully rendered per the wave-3 `ol-restore-baseline` receipts (REUSED; not re-captured live per gate budget).
7. **Sovereign muted 3.42 (fixed)** — REUSED-EVIDENCE (R2 condition; contrast re-metered on landing; plate rail layout verified live again this session incl. authored-grid wide behavior).
8. **GIR1–GIR3 + 5 plates + manifest 3→11 (fixed)** — REUSED-EVIDENCE (supervisor R3+; live opener/drop-cap/no-Reser-vations confirmed this view — the current p1c1 paragraph renders "I thought it'd be fun" with no "Reser-vations" and a working I drop-cap); manifest now 11/11 rows in TOC ✓ (rows:11 observed).
9. **Atlas/Fountainhead/WtP conditional passes (A: inline-pin shared; F: XIII·XII unreproduced; W: contrast table)** — REUSED-EVIDENCE + no shared inline-pin defect observed this session (settings opens with data-theme intact → the earlier stale-JS artifact never re-appeared; shared synchronously-first swap confirmed by 13/13 consistent theme paints).
10. **Shared carried items still open but owned (integrating note, not per-book REVISE):** `t`-key filter pollution — NOT re-tested per-script this gate; saved evidence says carried to shared; the reader-repair independent report exercised keyboard 13/13 PASS including `s` and arrow-commit but did NOT re-verify the `t`-pollution item; tagged NOT_RUN at final (reason: scoped-out shared item awaiting shared owner, `reader.js` `t` handler around line 1436–1444 shows `openToc()` without focus-clear — passed to producer as the documented open item, not a new finding).
11. **SH-2 36×36 header targets at 390** — carried shared item; unchanged (not re-measured beyond cover-0x0 note; saved R3 measurements stand). Producer-owned.

No contradiction refuted any saved verdict.

---

## 5. IJ TARGETED SPOT CHECKS (built site; reuse bootstrap) — F-A1 + F-A2 OBSERVED, F-A3 REUSED-VERIFIED, endmark OBSERVED

Evidence receipt: `books/infinite-jest/design/ACCEPTANCE-VERDICT.md` (REVISE→fixed, post-repair ACCEPT in `design/COVERAGE.md`) + `step5/ij/acceptance/fa-repairs/{toc-cold-open-1440.png, probe.json, div-p1c46-montage.png, div-p1c73-drive.png}`.

This session's live probe (harness output in session record; numbers exact):

- **Cover:** `body.dataset` = `book:"infinite-jest", view:"cover"` — Contract §2 hooks correct; per-chapter hooks (`chapter/part/art`) appear only in reader view as designed.
- **F-A1 cold-open docket (from cover, no chapter read):** OBSERVED — `docketTags:["THE NOVEL","ENDNOTES & ERRATA"], rowSeals:89, auteur:true` mounted before any chapter navigation (the MutationObserver repair firing on first buildToc). Matches the saved repaired certificate exactly (2 tags / 89 dots / AUTEUR). `toc.rows=89`.
- **F-A2 Part I ring colors:** OBSERVED live computed borders — seal-9 (p1c1 row) `rgb(224,82,56)` stamp-red ✓, seal-8 (p1c2 row) `rgb(201,162,39)` gold ✓, first Part II dot `rgb(168,156,240)` violet ✓ — exactly the repaired semantics from the saved probe (`ring colors p1c1+p1c3 stamp-red, p1c2 gold, p2c2 violet`). The served `theme.css` carries the raised-specificity rules at :961–975 (structure re-matched on disk, md5-verified file). Plus: **endmark computed** — `#chapter-text::after` on p1c1 = `26px×26px`, `background-image: url(.../art/endmark-seal-9.svg)` — the year-seal endmark renders live on the built site (G1 closure confirmed computationally, one-shot per gate budget; p1c77 bare by design per saved non-defects).
- **F-A3 caption divider flow:** REUSED-EVIDENCE — served `theme.css` census: 57 sites of the repaired `\2014\20 ` escape pattern, invalid `\201332A` zero hits; the repaired receipts `fa-repairs/div-p1c46-montage.png` ("ON SCREEN — THE HEADLINE MONTAGE") and `div-p1c73-drive.png` (Q.R.S. − 32A — THE DRIVE OUT) show the spaced em-dash rendering on the built site. No contradiction.
- **Notes apparatus (bonus, same book):** OBSERVED — TOC jump to notes chapter p2c3 ("Notes 25–64") loads with **43 `#note-*` targets** enumerated in the live DOM, zero page errors. Endnote entry points themselves (noteref→note→chip→return round-trip) remain the saved report's OBSERVED PASS on p1c32; not re-run per gate budget.
- Full IJ acceptance: **not re-run** (per brief); accepted verdict stands.

---

## 6. STRUCTURAL CENSUS — REUSED-EVIDENCE (re-anchored on disk this session)

`.omp/design/evidence/step5/validator/census-structural.json` + `census-refs.json` — re-read this session, cross-checked three ways: per-book census keys against the live built TOC row counts (§3.1, all 13 agree); the one documented exception re-confirmed; site-side file identity byte-verified for the shared reader and the IJ stack (`cmp` — identical).

- 13/13 books: toc_count == src chapter files == site chapter files == manifest keys EXCEPT **gay-science 448 TOC vs 259 manifest keys (189 TOC ids without manifest entry)** — documented by-design per saved census reading (GS authored CSS seed chapters; absent manifest keys ≠ missing treatments; Gay Science empty-art dirs were the only structural hole at baseline and GS since shipped cohort-a/d plating — verified rendering this session). Site-manifest identical, site-theme identical, art/design files 0 missing/extra/diff for every book.
- No empty_paragraphs, no toc dupes, no missing symbols anywhere.
- Counts re-read from TOC this session (matching §3.1 row counts exactly — atlas 30, BT 83, BGE 11, Churchill 41, GS 448, GIR 11, IJ 89, OL 14, Sovereign 11, F 59, Z 81, Twilight 12, WtP 52 = 942 total ✓ matches homepage stat band).

---

## 7. VERDICT TABLE

Legend: axes = F(unctional) · V(isual) · M(easure) · C(onsole) · S(tructural census). OBS = observed this session; REUSE = saved evidence cited; NR = not-run (reasoned).

| # | Book | F1-cover | F2-opener | F3-TOC | F4-settings | F5-measure | F6-nav	prev/next+resume | F7-overflow | F8-console | V-cover/opener/mid views | Verdict |
|---|------|---|---|---|---|---|---|---|---|---|---|
| 1 | atlas-shrugged | OBS✓ | OBS✓ | OBS✓ 30 | OBS✓ | OBS✓ 640/764.346/1024 | OBS✓ | OBS✓ 0 | OBS✓ | 3 shots + r3 library | **PASS** |
| 2 | being-and-time | OBS✓ | OBS✓ | OBS✓ 83 | OBS✓ | OBS✓ 544/544/1024 (n=s authored) | OBS✓ | OBS✓ | OBS✓ | 5 shots | **PASS** (condition already documented: narrow=standard authored; size/sans fixed per saved) |
| 3 | beyond-good-and-evil | OBS✓ (authored no-plate cover) | OBS✓ | OBS✓ 11 | OBS✓ | OBS✓ 640/674.544/1024 | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** |
| 4 | forty-ways…churchill | OBS✓ | OBS✓ | OBS✓ 41 | OBS✓ | OBS✓ 592/592/1024 (n=s authored) | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** |
| 5 | gay-science | OBS✓ | OBS✓ | OBS✓ 448 | OBS✓ | OBS✓ 592.085/592.085/1024 (probe-chapter authored equality; wide responds) | OBS✓ | OBS✓ | OBS✓ | 2 shots | **PASS** |
| 6 | gentle-introduction | OBS✓ | OBS✓ | OBS✓ 11 | OBS✓ | OBS✓ 640/672/1024 | OBS✓ | OBS✓ | OBS✓ | 2 shots | **PASS** |
| 7 | infinite-jest | OBS✓ | OBS✓ | OBS✓ 89 | OBS✓ | OBS✓ 608/608/1024 (n=s contract) | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** (spot trio + endmark REUSE) |
| 8 | open-letter | OBS✓ | OBS✓ | OBS✓ 14 | OBS✓ | OBS✓ 640/648.859/1024 | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** |
| 9 | sovereign-individual | OBS✓ | OBS✓ | OBS✓ 11 | OBS✓ | OBS✓ 640/715.097/1024 (plate-grid authored narrow) | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** (plate-rail authored condition recorded) |
| 10 | the-fountainhead | OBS✓ | OBS✓ | OBS✓ 59 | OBS✓ | OBS✓ 640/674.544/1024 | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** |
| 11 | thus-spoke-zarathustra | OBS✓ | OBS✓ | OBS✓ 81 | OBS✓ | OBS✓ 640/640/1024 (n=s A=40rem) | OBS✓ | OBS✓ | OBS✓ | 2 shots | **PASS** |
| 12 | twilight-of-the-idols | OBS✓ | OBS✓ | OBS✓ 12 | OBS✓ | OBS✓ 640/644.804/1024 | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** |
| 13 | will-to-power | OBS✓ | OBS✓ | OBS✓ 52 | OBS✓ | OBS✓ 608/608/1024 (n=s authored) | OBS✓ | OBS✓ | OBS✓ | 3 shots | **PASS** |

Shots only: 2-vs-3 subtotals reflect reusing earlier saved views where the live capture was redundant; every book has at least one fully viewed 1440 capture (cover/opener/mid) + 390 view this session.

**Per-book verdicts: 13 PASS, 0 REVISE, 0 BLOCKED.**

---

## 8. NON-BOOK / SHARED DISPOSITION (owner-routed; none of these are REVISE against a book)

| item | status | owner routing |
|---|---|---|
| favicon.ico 404 string (atlas first-paint; every page otherwise silent) | shipped-favicon known non-defect (no favicon asset in build) | – (informational) |
| `t` key types into TOC filter when pressed to open drawer | still open shared carry (saved SH-1); NOT re-exercised this gate → NOT_RUN, stands as carried item | producer (shared/reader.js keydown `t` — clear/focus-respecting open, or focus after keyup) |
| 390 header buttons 36×36 (<44 target) | carried SH-2 (saved measurements; not re-measured beyond 0x0-on-cover note) | producer (shared/reader.css pad to ≥44) |
| settings backdrop-click | implemented on Twilight per saved SH-3; carried for others per saved rounds | producer (already-tracked) |
| fullPage screenshot plate-blank stitch artifact | tooling note only — live view contradicts | – (not a site finding) |

No new implementation-owned defects exist from this gate. No file-ownership REVISE packets required.

---

## 9. OBSERVED vs REUSED vs NOT_RUN (accounting)

- **OBSERVED (live, built site, this session):** homepage renders + link census (14 URLs incl. every book 200) + 390 home ov + fullpage; 13-book × {cover, opener, toc, mid, settings, measure×3, next/prev, home-resume, restore, overflow 1440, 390 cover+reader}; probe matrix §3.3; BGE cover-art diagnosis; atlas favicon isolation probe; fullpage-linked card contradiction probe; IJ cover-hooks + docket cold-open + ring colors + endmark + notes-chapter census. ≈ 13 books × 12 axes + home ≈ **165 live observations**. Screenshots: **40 viewed** across both sessions (all home views incl. the row-2 contradiction probe; each book's 1440 cover/opener/mid/toc and 390 cover/reader per view records in §3.4/§7); of the 85 saved shots the ~45 not individually viewed are per-axis machine-probe backstops (overflow/console/measure numbers in `probes.json`) — every decisive visual claim in this report names a viewed file.
- **REUSED-EVIDENCE (trusted unless contradicted; citation = directory/file):**
  - reader-preference battery 13×3: `.omp/design/evidence/step5/reader-repair/REPORT-VALIDATE.md` (+ its verification*.json, 21 shots) — size/leading/font/persistence/keyboard/390.
  - IJ acceptance verdict + fa-repair receipts: `books/infinite-jest/design/ACCEPTANCE-VERDICT.md`, `books/infinite-jest/design/COVERAGE.md` (post-repair ACCEPT), `.omp/design/evidence/step5/ij/acceptance/**` (56 shots incl. toc/measure/note round-trips), `.omp/design/evidence/step5/art-director-findings.md`.
  - Wave-3 conditional rounds: `.omp/design/evidence/integration/wave3/<each book>/REVIEW-R*.md` + ~190 screenshots (REVISE→fixed receipts for BT/GS/OL/Churchill/Z/sovereign/GIR/Twilight; conditional-pass frames for Atlas/Fountainhead/WtP).
  - Homepage approved direction + R2 plates/footer captures: `.omp/design/evidence/integration/home-review/**`.
  - Structural census: `census-structural.json`, `census-refs.json` (`step5/validator/`, re-verified in-sync above).
- **NOT_RUN (named):**
  1. Full-coverage per-chapter visual composition review across all 942 chapters (scope: out of gate; activation/census + sampled composition is the standing evidence — never claimed all).
  2. Tablet 820×1180 on this gate (all books): REUSED from saved per-book wave-3 + reader-repair 820 matrix; no contradictions seen; zero new captures.
  3. Keyboard-only panel walk per book this gate (saved 13/13 keyboard PASS stands; the shared `t`-pollution carry remains the only open key item).
  4. F13 `?fail=` error/retry hook, F14 home search/sort/theme persistence, A2 full computed-contrast re-meter, A3 reduced-motion choreography audit — scoped out of this gate (covered by prior rounds' F-runs; no contradiction re-opened them).
  5. IJ full 10-gate acceptance re-run (explicitly excluded by brief).
  6. Sovereign 820 release-of-grid re-measure (authored `<900px` release verified in saved report; not re-probed).

---

## 10. Method + tooling integrity

- Playwright headless chromium (`--no-sandbox`), `reducedMotion:'reduce'`, waits ≥600ms around theme sensitives; computed reads via `getComputedStyle` on in-page-tagged probe paragraphs (`data-final-probe`); one probe identity per book recorded in `probes.json` (idx/len/fallback).
- Server: `http://localhost:8000` verified serving `_site`; sync re-verified this session via byte-compare (`cmp`) of source↔site for `shared/reader.js` and `books/infinite-jest/{ledger.js, theme.css, index.html}` — all identical.
- Reports-only: no files under `books/**`, `shared/**`, `_site/**` were created or modified by this validator; harness scripts + evidence live under `.omp/design/evidence/step5/final/` and `/tmp/opencode/final-gate/`.
- No commit/push/publication performed.

**Signed, independent final validator — final gate CLOSED with PASS; no blocking findings; carried shared items routed in §8.**
