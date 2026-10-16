# Main Acceptance Supplement — Will to Power p2c2 title fix (confirms R4 CONDITIONAL PASS)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~16:40 UTC. Requested by Main.
URL: `http://127.0.0.1:8099/books/will-to-power/` (data mtime 16:15 — Main's title repair served).

## Verdict: PASS (conditional, as R4) — title fix VERIFIED in source + render + TOC

### p2c2 title repair (Main's data fix): VERIFIED at all three layers

- Source: TOC `title` + chapter JSON `title` both read "Nihilism — Nihilism as a Consequence of
  the Previous Interpretation of the Value of Existence" (48 paras, word_count 3422; tail para
  removed per Main's report — plast is now the "pessimism of energetic men" fragment). ✓
- Render: `#meta-title` shows the FULL title (viewed 1440/820/390 — wraps cleanly, no truncation,
  no mid-word cut); `document.title` full; numeral "PART 1 · 1" distinct. ✓
- TOC row: full title + "3,422 WORDS · ≈17 MIN" (viewed). ✓
- Contrast on the (persisted-sepia) ground: title 13.23, part 5.65, sub/caption 6.26 — all pass. ✓
- R2 item 3 (title truncation) is now CLOSED by data repair; no rendering change was ever needed.

### Main's set coverage

- p1c1/p3c3/p4c15 (R2 set, 1440) + p5c9 (R2+R3 1440/820/390) + colophon (R2 end-shot) +
  p2c2-1440/820/390 (NEW main-* set) + main-toc. All viewed; zero overflow; console clean.

### New observation (NOT a defect — data note for Main, no action)

- Part IV TOC (viewed, sepia): chapters p5c1/p5c8/p5c9 are ALL titled "Discipline and Cultivation"
  (numbered 1/1/1) while p5c3–p5c7 carry distinct doctrine titles. This is VERBATIM source TOC
  shape (confirmed in data) — the book's real fragment-catalogue structure (part-title tablets +
  doctrine chapters), not a renderer defect. The opener/TOC handle it gracefully (EXHIBIT tags
  disambiguate). Recorded, not filed.

No new defects. The R4 CONDITIONAL PASS stands; carried items unchanged.
Evidence: `main-p2c2-{1440,820,390}.png`, `main-p5c9-{820,390}.png`, `main-toc-1440.png`.
