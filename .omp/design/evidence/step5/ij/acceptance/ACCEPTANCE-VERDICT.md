# ACCEPTANCE VERDICT — Infinite Jest (assembled book, slug `infinite-jest`)

**Date:** 2026-10-17 · **Validator:** independent acceptance review (this agent)
**Method:** shipped build only, at `http://127.0.0.1:8000/books/infinite-jest/index.html`; native-browser screenshots at 1440×1000 / 820×1180 / 390×844 (deviceScaleFactor 1.5), dark theme default, seeded localStorage themes/measurements where a gate required them; every defect claim backed by a viewed screenshot, a computed-style probe, or both. No CSS injection; `_site/` previously verified md5-identical to source.

## OVERALL VERDICT: **REVISE**

Two narrowly-scoped wiring defects in the TOC docket layer (F-A1, F-A2) and one systematic caption-typo class (F-A3). No art, typography, palette, legibility, or composition failures. No blockers. All other gates pass on viewed evidence.

## Per-gate table

| # | Gate | Result | Evidence viewed |
|---|------|--------|-----------------|
| 1 | Cover 1440 + 390 (J1 seal wall, J7 single-seal ≤560) | **PASS** (one POLISH) | cover/cover-1440.png, cover-1440-fullpage.png, cover-390.png |
| 2 | TOC docket (tags, year-seal dots, AUTEUR) | **REVISE** | toc/toc-1440.png, toc-1440-post-chapter.png, toc-1440-appendix.png, toc-390.png; zoom crops; probe-ledger.json |
| 3 | Openers, cohorts A–G (10 chapters) | **PASS** | openers-1440/op-p1c{1,18,22,32,35,41,46,60,77}.png, op-p2c2.png (sheet op1440); openers-390/ ×4; openers-820/op-p1c41.png |
| 4 | Mid-chapter treatments (F-1 run, montage, ticks) | **PASS** (one POLISH) | mids/p1c18-f1-a.png, p1c18-f1-b.png, p1c46-montage.png (+ zoom-divider.png crop), p1c35-top/mid/tick.png, p1c73-div.png |
| 5 | p1c32 measure matrix + endnote round-trip | **PASS** | p1c32-measure/{narrow,standard,wide}-p1c32.png, settings-dark.png, note-jump.png, note-return.png |
| 6 | Note 24 broadsheet (p2c2) | **PASS** | note24/note24-top.png, note24-gauges.png; ends/end-p2c2.png |
| 7 | Chapter ends + year-seal endmarks + nav cards | **PASS** | ends/end-p1c1.png, end-p1c32.png, end-p1c60.png, end-p2c2.png, end-p2c5.png |
| 8 | Finale p1c77 (F-11, suppressed endmark) | **PASS** | finale/finale-top.png, finale-end.png |
| 9 | Vellum + Sepia themes | **PASS** | themes/light-cover.png, light-p1c32.png, light-p2c5.png, sepia-cover.png, sepia-p1c32.png |
| 10 | No horizontal overflow at any width | **PASS** | computed `scrollWidth−clientWidth = 0` on every capture (1440 / 820 / 390); tablet 820 opener viewed |

## Findings

### REVISE
- **F-A1 · TOC docket absent on first drawer-open from cover.** Opening the TOC directly from the cover (before any chapter is read) shows bare rows: no "THE NOVEL"/"ENDNOTES & ERRATA" tags, no year-seal ring dots, no AUTEUR tag. After any chapter load the treatments mount correctly (gold tag, 89 dots, violet part-2 register, AUTEUR on Note 24). Root cause: `ledger.js paintDocket` runs on `DOMContentLoaded` (TOC rows not yet built; early-return guard) and on `reader:chapter` only; `shared/reader.js buildToc` (lines 671/1474) dispatches no post-build event. Evidence: toc/toc-1440.png (bare) vs toc/toc-1440-post-chapter.png (mounted); probe `tags:[], rowSeals:0` pre-chapter. **Repair (ledger.js):** add a `MutationObserver` on `#toc-list` (childList, subtree) that re-runs the docket paint, or listen for a new `reader:toc` event and dispatch it at the end of `buildToc` in shared/reader.js.
- **F-A2 · Part I year-seal ring colors never fire — all rings render gold.** The miniature year-seal dots in TOC rows are 10px rings whose border color encodes the year (`--ij-stamp` red for seals 9,1–7; `--ij-seal` gold for 8/filing; violet in Part II). theme.css:948 `body[data-book] .toc-chapter .ij-row-seal { border: 1px solid var(--ij-seal) }` has higher specificity (0-3-1, and `border` shorthand includes color) than the year rules at :956–968 (0-2-1), so every Part I ring computes gold. Computed proof: p1c1 (seal-9) and p1c3 (seal-2) border = `rgb(201,162,39)`, expected `rgb(224,82,56)`; p1c2 (seal-8) gold by accident; p2c2 violet wins (its rule is higher-specificity). Evidence: zoom-left-rings.png (all-gold rings next to red chapter numerals), probe-ledger.json. **Repair (theme.css):** raise the year rules to `body[data-book="infinite-jest"] .toc-chapter .ij-row-seal-9, … { border-color: var(--ij-stamp) }` (and same for -8/filing), or drop the color from the :948 shorthand.

### POLISH
- **F-A3 · Em-dash space swallowed by CSS escape in divider captions (15 sites) + one invalid escape.** Content strings written `"… \2014 THE …"` make the browser consume the space as the hex-escape terminator, rendering glued "—THE"/"—LYLE". Visual receipt: zoom-divider.png ("ON SCREEN —THE HEADLINE MONTAGE" on the p1c46 p:nth-of-type(38) plate). Affected theme.css lines: 5231, 11041, 11598, 11690, 11707, 16447, 16515, 16532, 16566, 16583, 17043, 17448, 17689, 17921, 17974. Additionally line 8438 (p1c73, p:nth-of-type(30)) writes `\201332A`, parsed as a six-hex-digit escape (U+201332, invalid → U+FFFD) instead of intended en-dash + "32A". **Repair:** use the correct pattern already used elsewhere (`\2014\20 `, cf. lines 7298+); line 8438 → `"…Q.R.S.\2013\20 32A \2014\20 THE DRIVE OUT"`.
- **F-A4 · Cover title band starts 37px below the 1440×1000 fold** (`.cover-title` top ≈ 1037px; seal wall + caption fill the first fold). Composition itself is art-director-approved — flag only if a tighter first impression is wanted: trim `#cover` top padding by ~40px. Do not relitigate J1.

### NOTE (no repair required)
- `ends/end-mid-p1c1|p1c32|p1c60.png` are stale duplicates (captured at chapter tops during a harness scroll fix; superseded by the true `end-*.png` set). Not evidence.
- The reader clamps instant scroll-jumps to the lazily-mounted content window; deep anchors complete via scroll-anchoring. Affects automated jumps only — human scrolling mounts progressively and works.
- `document.fonts.check()` false-negatives at the cover (Archivo/Newsreader reported unloaded while visibly rendered) — a `check()` quirk, not a load failure.

## Honesty ledger
- **Captured:** 56 PNGs under `.omp/design/evidence/step5/ij/acceptance/` (11 subfolders: cover 3, toc 4, openers 15, mids 11, p1c32-measure 6, note24 2, ends 8, finale 2, themes 5).
- **Viewed (full frames or decisive crops):** 53 of 56 — every file except the 3 stale `ends/end-mid-*.png` duplicates noted below; one item (the recaptured `mids/p1c46-montage.png`) is viewed via a decisive 1500×300 crop of its plate region.
- 8 review-only contact sheets + 3 zoom crops were generated in `/tmp` for viewing economy; every cited defect is backed by a viewed artifact.

## Known non-defects (honored, not flagged)
favicon 404 on every page (no favicon shipped); p1c77's intentionally bare endmark (`--ij-endmark:none`, "IJ-F77e colophon closes the file") with its "PART I ENDS" closing strip; ≤480px plate letterbox bands (F-D2); cohort-C relative plate numbering (F-D4, e.g. "PLATE 33 · NINE YEARS, BY YEAR"); the "E.R." stamp in p1c1's margin (seen at its end); p2c2 violet intro block; Part I progress fill in phosphor green (sanctioned N1); synthesized Newsreader 600 in montage headers (R2); ledger gutter ticks coexisting with endmarks.

## Verification details behind PASS results
- **G3:** each of the 10 openers renders a real, distinct per-chapter exhibit plate (Exhibit H horseshoe; Lyle rooms ×3; transparent phone; subsidized-time 3×3 seal grid; separatism questionnaire; gala puppet stage; Gately interfaces; pre-fête inventories; G2 filmography) above a filing-stamp band with `FILE § n · …` caption, PART chip, big sans title, §-ornament and word/time line. Part II opener (p2c2) uses violet furniture throughout.
- **G4:** p1c18 blocked-run P81–P120 vertical margins computed zero inside the run, restored at boundaries (p78/79 bottom 23.92px; p121 top 45.76px); transcript reads continuous in both shots. p1c35's single note-tick (`◈ 79`, species `--low`) hangs 16px right of the paragraph edge, stacked under the cohort `// RAIN` gutter label — no glyph collision.
- **G5:** measure widths exactly 608/608/1024 at 1440 (narrow=standard by contract); settings card renders Themes(9)/Text size(4)/Line height(3)/Typeface(2)/Length(3) and live-switches measure without reload; noteref → notes (p2c3, `#note-62`) with inline return chip; chip click returns to p1c32 with no residual chip overlay.
- **G7:** year-seal endmarks (26px) render below final prose in p1c1 (seal-9), p1c32/p1c60 (seal-8); filing endmarks close the Part II notes (p2c2, p2c5); nav cards show PREVIOUS/NEXT with real neighbor titles ("Previous Notes 1–23 / Next Notes 25–64" etc.).
- **G8:** finale opens with the F-11 arrival-freeze plate; title computes 112px Archivo Black (8.5vw clamp capped at 7rem); ends with the gold "PART I ENDS — THE FILE CONTINUES ON ENDNOTES & ERRATA" strip and no endmark, as designed.
- **G9:** Vellum (paper `rgb(250,249,247)`, near-black ink) and Sepia (`rgb(239,228,204)`) re-ink the cover seal wall and prose; plates remain self-contained dark exhibits; violet Part II furniture stays legible on paper.

---

## Supervisor resolution (post-verdict, 2026-10-17 — IJ supervisor, not the validator)

- **F-A1 FIXED.** `ledger.js` DOMContentLoaded block now observes `#toc-list` (childList+subtree) and re-runs the one-shot `paintDocket()` when rows mount. Cold-open probe (fresh context, zero chapter reads): tags `["THE NOVEL","ENDNOTES & ERRATA"]`, dots 89, AUTEUR true. Receipt: `fa-repairs/toc-cold-open-1440.png` (viewed).
- **F-A2 FIXED.** Year-ring rules raised to `.toc-chapter` specificity (0-3-1, later in file than the :948 shorthand; Part II violet 0-4-1 still wins). Computed: p1c1/p1c3 `rgb(224,82,56)` stamp red; p1c2 `rgb(201,162,39)` gold; p2c2 violet. Same receipt.
- **F-A3 FIXED.** All 15+1 caption sites: `\2014 ` → `\2014\20 ` (16 lines), invalid `\201332A ` → `\2013\20 32A ` (p1c73). Computed `content`: "ON SCREEN — THE HEADLINE MONTAGE", "◈ Q.R.S.– 32A — THE DRIVE OUT". Receipts: `fa-repairs/div-p1c46-montage.png`, `div-p1c73-drive.png` + probe.json.
- **F-A4** left as approved composition (POLISH, optional per validator).
Verdict file mirrored to `books/infinite-jest/design/ACCEPTANCE-VERDICT.md`; site rebuilt after repairs (_site in sync).
