# IJ integration spec (supervisor-owned; implements ART-DIRECTION.md FINAL + contract v1.1)

Read with: `books/infinite-jest/design/ART-DIRECTION.md`,
`.omp/design/READER-CONTRACT.md` (v1.1, A.2 `symbol` form),
`.omp/design/critiques/infinite-jest.md` (binding J1–J8).

## 1. What the supervisor built (foundation, landed)

- `art/seals.svg` — 10 symbols: `seal-1..9` (fixed Subsidized Time order per
  ART-DIRECTION §4) + `seal-filing` (AS OF Y.D.A.U.). Cohorts `<use>`-reference
  these for stamp-band seals, cover, TOC strip — NEVER redraw.
- `art/cover.svg` — the 3×3 seal grid (references seals.svg, single-source).
- `theme.css` — full Ledger rebuild: §1 eight-theme tokens, §2 @font-face,
  §3 cover, §4 opener scaffold, §5 calm core + `.ij-insert` blocks, §6 docket
  TOC/chrome, §7 Part II violet shift + note apparatus, §8 responsive, §9
  guards, §10 cohort merge zone.
- `design/fonts/` — 5 book-relative latin woff2 (Archivo Black 400, Newsreader
  400/400i, Plex Mono 400/600). R2 RESOLVED 2026-10-16: the old Newsreader 600
  file (flagged byte-equal to 400, later an unverifiable 15.6KB subset) was
  REMOVED and its @font-face dropped; weight-600 usages now synthesize from the
  real 400 face (font-synthesis: auto), and the index.html Google Fonts link
  still supplies a true 600 cut when online.
- `design/chapters.json` v1 — cover + 89/89 placeholder seal plates. Cohort
  engineers REPLACE their entries' src/symbol with authored plates; supervisor
  merges sequentially.
- `ledger.js` — book furniture JS (filing bands, docket stamps, note ticks,
  filmography). F-A1 fix (2026-10-17): MutationObserver on `#toc-list` re-runs
  the one-shot docket paint when TOC rows mount, so a cold drawer open from
  the cover shows tags/rings/AUTEUR. F-A2 fix: TOC year-ring color rules live
  at `.toc-chapter` specificity (see theme.css §6 zone) so stamp-red years
  fire over the row-seal shorthand.

- `index.html` — Ledger fonts link, BOOK_CONFIG slug/notesPart/tagline.

## 2. Cohort engineer deliverable shape (per cohort X)

1. `art/cohort-x.svg` — ONE sprite, one `<symbol id="<motif>">` per chapter
   (+ optional `braid-*` divider symbols). viewBox per symbol RECOMMENDED
   (reader clones target viewBox else file viewBox). All strokes explicit
   (no currentColor dependence across the clone boundary); no external refs.
2. `design/cohort-x.css` — UNLAYERED, scoped to
   `body[data-book="infinite-jest"][data-chapter="pNcM"]`, `ij-`-prefixed
   classes only, NEVER `reader-*`. Covers: `.ij-insert` assignments (explicit
   researched nth-of-type ONLY, no modulo), braid dividers (bounded, clear
   measure, J2), marginalia (gutter only, collapse below 720px), any
   chapter-specific plate-frame tweaks via `.ij-*` classes on #chapter-art.
3. `design/cohort-x.json` — manifest entries keyed by id with
   `contract_manifest: {src: "art/cohort-x.svg", symbol: "<motif>",
   class, motif, caption}` + remap keys (part/order/title) + rationale.
4. Endmark: each entry names its year seal; supervisor wires
   `--ij-endmark: url("art/seals.svg#seal-N")` per chapter (A.0, ≤32px).
   WIRED 2026-10-16: per-chapter body rules set `--ij-endmark` from
   `design/chapters.json` `year_seal` (89/89); §5 paints it at container
   close `.chapter-text::after` (26px) with a `> p:last-child::after`
   suppressor (shared art.css fleuron slot); p1c77 is the intended bare
   exception (`--ij-endmark: none`). Scan: 88/89 painted.

## 3. Merge protocol (supervisor only, sequential)

Per cohort, in release order: (a) validate svg (well-formed, ids match
manifest symbols); (b) validate css (scoped, prefixed, no reader-*, no
modulo); (c) append css to theme.css §10 with dated header; (d) merge
manifest entries into design/chapters.json; (e) screenshot the cohort's
chapters at 3 viewports; (f) record in COVERAGE.md. One cohort at a time.

## 4. J8 prototype scope (before any cohort expands)

Cover + p1c1 (A) / p1c30, p1c35, p1c37, p1c38 (C) / p1c60 (E) / p1c77 (F) /
p2c2 (G) at 1440×1000 / 820×1180 / 390×844. Director re-inspects; REVISE
findings fixed before expansion. Release order: C → A → E → F → G, then
B/D second wave. p1c37 positional set must prove itself or be cut honestly.

## 5. Guardrails restated (violations bounce the merge)

J1 nine distinct seals (done, supervisor) · J2 plates above prose, dividers
bounded · J3 title clamp incl. p1c77 at 390px · J4 bounded found-paper,
prose untouched · J5 no violet in Part I / no gold in Part II · J6 Note 24
broadsheet · J7 single seal cover ≤560px · P1 art ≥200px on phones, never
display:none · contrast ≥4.5:1 body (measured) · focus visible (phosphor) ·
reduced-motion cuts all · benchmark: homepage-side-by-side ambition through
the LEDGER medium, never homepage copying.
