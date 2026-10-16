# Wave-3 Live Review R3 — The Fountainhead — REVISE (1 minor: sepia numeral; sans-stack question)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~13:50 UTC.
URL: `http://127.0.0.1:8099/books/the-fountainhead/?r3=1` (fresh tab, cleared storage).
Screenshots: `r3-settings-1440.png`, `r3-toc-390.png` (viewed) + R2 set.

## Verdict: REVISE (minor) — R2 items verified to the digit; full F-run passes; one sepia stroke + one design question

### R2 items: both PASS, confirmed to the digit (dark `rgb(23,16,11)`)

1. `.meta-sub` — 6.70:1 on all five sampled chapters (was 3.61) ✓ (claim 6.70 CONFIRMED).
2. Numeral strokes — p1c1 7.79 ✓ / p2c1 **3.70** ✓ (was 2.46; claim CONFIRMED, numeral-only) /
   p3c1 8.15 ✓ / p4c1+p4c20 5.11 ✓. All ≥3:1 large-text. ✓

### Full F-run at R3 (all observed): PASS

F1 Begin→p1c1 ✓ · F2 filter (xv→6 rows incl. XVI–XVIII substring family; roark→0 because the
search index covers numeral+title only — chapters are bare "Chapter N", so 0 is CORRECT, not a
defect) + empty state ✓ + jump p2c1 (drawer auto-closes ✓) · F3 Escape ✓ · F4 all rows apply
(xl 1.7rem, loose 2.1, sans→Plex Mono swap, wide 52rem) ✓ · F5 Escape (display:none) ✓ ·
F6/F9 persist+resume (scrollY 13774→11866 on p4c15, chapter-exact) ✓ · F7 j/k with scroll reset
✓ · F8 j/k/t/s ✓ · F10 "1 of 59 · 1%" ✓ · F11 390 TOC+filter ✓ (viewed: Oswald CONTENTS,
part marks, Ember numerals, progress line) · F15 zero 404s/198 ✓ · console zero (VT noise
excepted) ✓ · A1 header focus solid 2px ✓ · A6 one h1 ✓ · A4 no overflow ✓ · A5 dark-first ✓
(library-seeded sepia respected after my R2 vellum test seeded the library key — correct
explicit-preference behavior, verified the seed chain `literary-library-theme=sepia`).

### Required fixes

3. **ISSUE (minor): part-2 numeral stroke at 4.28:1 on sepia — passes large-text 3:1 but the sepia part-line dips to 4.20:1 (needs 4.5:1).**
   WHERE: sepia ground `rgb(246,234,214)`: part line `rgb(138,106,58)` 4.20:1 ✗ (11.52px);
   numeral stroke `rgb(180,80,46)` 4.28:1 ✓-large (83px, needs 3:1 — passes but noted).
   EVIDENCE: computed on p2c1 sepia. FIX (SupFountain-3): deepen the sepia part-line token
   (only) to ≥4.5:1; keep the numeral stroke (passes). Re-verify: metered part ≥4.5 on sepia
   (+ spot-meter light/vellum part lines the same way).
4. **QUESTION (design, needs a ruling — Main/ArtDirector, not a defect yet): the "Sans" reading preference renders body text in IBM Plex Mono.**
   WHERE: `:root, html[data-theme="dark"] { --font-sans: "IBM Plex Mono", … }` (theme.css:73) —
   every theme block inherits it (only dark sets font tokens; other themes don't override).
   EVIDENCE (observed): clicking SANS swaps the novel's body to Plex Mono (computed
   `"IBM Plex Mono", ui-monospace…`). Every other book offers a true sans (DM Sans / system)
   as the alternative to serif; here the alternative is a DATA face at body sizes — it reads as
   a token error (the DATA voice leaking into the READING voice), not as an authored choice,
   and no ART-DIRECTION note I have seen sanctions mono body text.
   SEVERITY: question, not defect — IF ArtDirector/supervisor rule it intentional (e.g. "the
   Banner newsroom voice"), it stands and I record the ruling; otherwise the fix is one token
   (`--font-sans` → a real sans, keeping Plex Mono for `--fh-data`/chainage only).
   Re-verify per the ruling.

## Notes

- Resume shelf "CHAPTER XV · CHAPTER XV" — same data-dependent duplication as Twilight R2-3
  (number_label == title); carried to the shared fix, not re-filed.
- 390 TOC (viewed): filter + clear-× + progress + part marks + Ember numerals all clean; the
  p4c15 row's cantilever mark renders as a red block at phone scale — acceptable (TOC marks are
  24px atoms, not elevations).
- R2's FIG-needle verification stands; finale triptych unchanged since R2 view.

## R4 requirements (tiny)

Item 3 fixed (+ item 4 ruled/fixed) + rebuild, then: sepia/light part-line meter, sans-click
re-check per ruling, done. That closes the book.
