# Cohort D — Final Published Review · Infinite Jest p1c41–p1c53

```
Book         : infinite-jest · Cohort D (Part I ch. 41–53) · art/cohort-d.svg (21 symbols)
Review date  : 2026-10-16 · Reviewer: library-designer (review-only; zero implementation edits)
Site         : http://127.0.0.1:8000/books/infinite-jest/index.html
Evidence dir : .omp/design/evidence/step5/ij/d-review/
Screens      : 46 screenshots physically inspected (36 phase-1 across 1440/820/390 + 10 phase-2 receipts)
Method       : computed-style geometry sweeps (r4-sweep.txt), boundary overflow checks (1024–1280),
               on-disk e-book PDF page images used only as print proxies. No injected CSS as evidence.
Binding      : ART-DIRECTION.md §5/§6/§9 · critiques J1–J8 · known-items (unwired A.0 endmark,
               Newsreader 600==400, favicon 404, p1c45 scene cut) excluded from findings.
```

## Verdict

**HOLD — cohort D is merge-worthy and its grammar stands; everything it shipped with REVISE-level weight has been fixed and re-verified at the code level during this closeout.** The examining-file gold furniture, phosphor/midnight plate strips, dark data-strip band dividers, and the four-color gutter taxonomy are an unmistakably distinct language, and the reading body stays calm at 1440/820/390 with zero overflow anywhere. The one visual defect the review proved before fix — ledger pills overprinting cohort gutter ticks on 23 dual-species paragraphs — is now resolved exactly as prescribed (ledger.js species-hook + `.ij-tick--low`, theme.css:890), the exam-item labels and note-tick dedupe are repaired, and the unverifiable teleconference italics were removed to upright. What remains open is POLISH/NOTE-grade only (manifest wording, one shared theme tweak option, two cross-cohort routes); none of it blocks D.

## Findings — open items

| ID | Severity | Concern | Evidence | Repair instruction (supervisor) |
|----|----------|---------|----------|--------------------------------|
| **F-D1** | POLISH | cohort-d.json design field (p1c46/p1c47 TINE/GENTLE script set) promises "hanging gold speakers"; shipped is hanging indent only (pl 35.2px / ti −35.2px, continuations ml 2.4rem), speakers Manila like body | d-review/style-1.json + theme.css:16655–16680 | Amend the cohort-d.json record to describe the shipped state (hanging indent, roman speakers). Do not add a `.speaker` span pass — the CSS-only record amendment is the right cost/landscape trade. |
| **F-D2** | POLISH | 21:9 plate strips letterbox at ≤480px viewport: theme `#chapter-art svg { min-height: 200px }` (theme.css:409) forces ~30px empty bands above/below ~140px-tall art (p1c43/50/53) | d-review/open-390-p1c50.png, d-review/open-390-p1c53.png | Theme-wide, coordinator's call (touches all cohorts' plates): `@media (max-width: 480px) { #chapter-art svg { min-height: 150px; } }`. If rejected, bless the band as intentional. |
| **F-D3** | NOTE | p1c50 ledger FILING line "FILE § 50 · DAWN DRILLS · AVENTURA AT §46" (ledger.js:76) vs caption "Aventura plate at §46" — coherent filing shorthand (the same phrase is set inside the plate art), alignment optional | d-review/receipt-open-1440-p1c50.png | Optional one-line wording: "DAWN DRILLS · AVENTURA PLATE AT §46". No urgency. |
| **F-D4** | NOTE (route) | Cohort C captions use cohort-relative plate numbering ("Plate 1"…"Plate 13" across p1c28–40) instead of absolute §-refs | books/infinite-jest/design/chapters.json (cohort C entries) | Route to cohort C's owner / coordinator: reword to absolute refs or bless relative numbering scheme-wide. D is unaffected. |

## Resolved during review — do not double-count

| Item | Status | Evidence |
|------|--------|----------|
| **R1 caption plumbing** ("via CSS content" jargon on p1c46/47/50/51/53) | FIXED — verified live at 1440, all five reworded and jargon-free | d-review/receipt-open-1440-p1c46/47/50/51/53.png |
| **R4 tick clipping / species collision** (ledger pill vs cohort `::after` tick, 23 dual-species paragraphs in p1c41/43/44/45/46/47/48/50) | FIXED — implemented as prescribed: ledger.js:207 ghost-check → `.ij-tick--low`, theme.css:890 `top: 1.9rem` stacks the pill one line below the tick (comment cites this findings file). Supervisor census (all `.ij-tick` 28px tall, max width 107px, no wrap at 1440) also closes the original clip/wrap bill. Reviewer re-verified in code post-fix; pre-fix proof remains d-review/zoom-p1c46-r4.png for the archive | theme.css:886–891, ledger.js:201–208 |
| **F2 p1c41 exam item labels** (mislabeled 1(b)/1(c)/1(d) on the wrong paragraphs) | FIXED — rules re-keyed exactly per instruction (¶2/¶3 now `ITEM 1(a) · CONT`, ¶4 → 1(b)) | theme.css:16038–16088; supervisor receipt f2-p1c41-exam-after.png ("§EXAM · ITEM 1(a) stacking clean"; file cited from supervisor verification, not present in d-review dir) |
| **F3 ledger dedupe swallowing second note ref per paragraph** | FIXED — refs grouped per paragraph into one pill ("◈ 147 · 148", "◈ 113 · 114" cited by supervisor; >3 mount as +N), plus paragraph-head hash defect removed | ledger.js:172–211 |
| **F5 teleconference italics** (partial, unverifiable device) | RESOLVED by removal — teleconference transcript now upright (option (a)); zero italic rules remain in the p1c46 zone; no prose mutation was ever involved | theme.css:16666–16715 (0 `font-style: italic` hits); supervisor receipt shows upright transcript |

## Conditions to close

- [x] R4 species fix verified in built code (ledger.js hook + `.ij-tick--low` rule present, `_site` in sync) — reviewer-verified 2026-10-16
- [x] F2 label re-key verified in built code (six rules re-calibrated to 1(a)/1(a)·CONT/1(a)·CONT/1(b)/1(c)/1(d))
- [x] F3 grouped-pills behavior verified in built code (per-paragraph grouping, "· " join, +N overflow)
- [x] F5 upright transcript verified (no italic rules remain in the teleconference zone)
- [x] R1 caption receipts live and jargon-free (5/5 reworded)
- [x] Zero overflow retained at 390 (13/13 chapters, docSW=390) and at 1024/1100/1180/1280 boundary sweep
- [x] Contrast retained (prose 14.15:1, ticks ≥7.4:1 per style dumps)
- [x] Zero-animation honored (no keyframes/SMIL in cohort D block or SVG; reduced-motion stub intact)
- [ ] F-D1: amend cohort-d.json script-set wording (supervisor, manifest-only)
- [ ] F-D2: coordinator decision on ≤480px `min-height` tweak (affects all cohorts)
- [ ] F-D3: optional FILING wording alignment (ledger.js:76)
- [ ] F-D4: route cohort C relative-numbering call to its owner
- [ ] Optional belt-and-braces: one zoom re-receipt of p1c46 ¶37 after the ledger rebuild, same clip recipe as zoom-p1c46-r4.png, to visually confirm the stacked pill line (code path is verified; this is a receipt nicety)

## Lens note

Cohort D's grammar — examination-file gold furniture, phosphor/midnight plate strips, dark data-strip band dividers, four-color gutter taxonomy — is unmistakably its own language against the IJ base theme. Distinctness from the accepted C/E/F/G grammars rests on their own accepted reviews; no confusable overlap with the base theme's furniture was found anywhere in 46 inspected frames.
