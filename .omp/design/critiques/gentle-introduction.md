# A Gentle Introduction to Unqualified Reservations — critique (ArtDirector)

Spec: `books/gentle-introduction/design/directions.md` (245 lines, all
three with SVG massing sketches; prose read from ALL 11 chapters).
Baseline: capture #15 (waterlines + swell glow) + `.omp/design/critiques/
gentle-introduction.md` brief (N1–N3) — now superseded by this verdict.

## Verdict: DIRECTION 1 ("THE CONTEMPLATIVE CATHEDRAL") APPROVED, with binding conditions

The pick is right and the submission is exemplary: prose read from all
11 chapters with deep reads at p1c1/p1c5/p1c9, references honestly
studied (including Mercein's warning used as Direction 2's epitaph —
superb), three genuinely different directions with sketches, and both
rejections book-specific and non-portable (dose pun is the subtitle
joke, not the argument; Goya is one simile in c5). The N1 action line
(contemplative vs Open Letter's dissolving) is held as the load-bearing
distinction, correctly. Proceed to ART-DIRECTION.md + book-identity.json
+ art/cover.svg; cohorts build only after prototype review.

## Binding conditions

- **GI1 — N1 is absolute.** Nothing dissolves, sheds, cracks, or comes
  apart in any Gentle Intro plate. Twin chapels (p1c7) separate; they do
  not ruin. If any plate reads as "Open Letter's facade mid-collapse,"
  automatic REVISE.
- **GI2 — The dose arc must be felt, not decoded.** Narthex dark (p1c1)
  → nave candlelight (p1c4–p1c8) → crossing lamp (p1c9) → rose light
  (p1c10) → full sanctuary (p1c11). Prototype review views p1c1/p1c5/
  p1c11 openers side by side: the light progression must be unmistakable.
- **GI3 — Piranesi second-state rule is binding.** Bitten line + tonal
  mass, no mid-tone murk; plates must hold as authored image at ~200px
  on phones. Murky small-scale plates fail (Direction 3's own epitaph).
- **GI4 — Marcellus is yours.** Unheld in the registry — inscriptional
  solemnity without Cinzel's monumentality. Keep display large-only;
  Source Serif body stays quiet (voice from plates + dose numerals).
- **GI5 — Candle discipline.** One flame grammar across all 11 plates
  (Candle #DFA050); Sanctuary Red #A83A2C for ember accents and the
  p1c10 rose only. No second flame color, no glow-filter halos — light
  is drawn (spilling shapes, tonal mass), not blurred.
- **GI6 — Prototype scope.** Cover (west front + ajar portal + eleven
  dose-notches ember→gold) + p1c1 + p1c5 (westwork flagship) + p1c6 +
  p1c11 at three viewports. The p1c5 flagship added to the N3 minimum —
  the Cathedral's portrait chapter carries the book's name and must be
  the most ambitious interior plate.
- **GI7 — Benchmark.** Per USER-FEEDBACK.md, the rendered prototype is
  judged side-by-side with the new homepage: comparable authorship and
  care through THIS book's stone-still identity, never by borrowing the
  homepage's look. Quiet doses earn beauty through composition, numerals,
  rules, and controls — not through louder plates.

## Prototype review R2 (2026-10-15) — REVISE (narrow, high-value)

Live :8941 inspected: cover + p1c1 opener + TOC drawer at 1440.
Fonts confirmed computed (Marcellus display, Source Serif 4 body).
The identity is RIGHT — Marcellus solemnity, narthex-door plate,
dose cartouche, amber progress — and Main's observation (1) is
confirmed: the opener composes well. But three defects block a PASS,
all fixable without rethinking anything.

### Required repairs (GIR1–GIR3)

- **GIR1 — The drop cap eats the first letter.** p1c1's first
  paragraph renders "I thought" as "| thought" — the "I" is replaced
  by a gold bar (drop-cap styling colliding with a single-letter
  capital + hyphenation "Reser-vations" breaking mid-word on line 2).
  Fix the drop-cap/pseudo-element so the letter survives (and calm
  the hyphenation — "Reser-vations" at 1440 is too aggressive for
  Source Serif measure).
- **GIR2 — Cover plate too dark/faint (Main's observation 2,
  confirmed).** The west front reads as near-silhouette beside the
  luminous p1c1 plate: portal glow + rose window + notches carry it,
  but the towers dissolve into the ground. Raise the plate's tonal
  floor (Ashlar line-work to visible, portal spill wider) while
  keeping GI2's narthex-dark intent — the cover is night, not void.
  Side-by-side with the opener, the cover must feel like the same
  building seen from farther, not a different exposure.
- **GIR3 — TOC is unstyled shared chrome.** The drawer (filter box,
  rows, numerals, progress dots) wears no Cathedral grammar: no
  Marcellus part header, no dose-notch progress, no arch/amber
  furniture. Per P11 the TOC must feel designed — restyle rows with
  dose numerals (I–XI Marcellus), ember→gold read-state, candle-rule
  part header. (Benchmark: Sovereign's ledger TOC is the bar for
  what "designed drawer" means.)

Micro-note: cover "Continue where you left off" resume line + footer
meta are good craft — keep. Re-inspection: p1c1 first paragraph
(GIR1) + cover/opener side-by-side (GIR2) + TOC (GIR3). Then PASS.
