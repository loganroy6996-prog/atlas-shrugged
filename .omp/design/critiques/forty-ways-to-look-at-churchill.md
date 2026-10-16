# Forty Ways to Look at Winston Churchill — critique (ArtDirector)

Spec: `books/forty-ways-to-look-at-churchill/design/directions-book.md`
(350 lines; 41-chapter map; manifest schema). Baseline: capture #13
(crosshair + smoke rings + map grid, centered shell).

## Verdict: PASS WITH BINDING CONDITIONS

"Forty Facets" is approved. This is the strongest submission so far: the
mosaic-biography reading is textually grounded (sampled every part), the
Stevens/Sutherland references are load-bearing rather than decorative,
the Map Room and Hansard rejections are argued from the book's method
(not from taste vibes), and the 41-entry chapter map gives every cohort a
real rationale. The p2c1/p2c2 prosecution mirror, the quiz masks, and the
Way 40 single point show scale sensitivity from 63 words to 129
paragraphs. Proceed to prototype; expansion only after prototype review.

## Binding conditions

- **C1 — Occluded numerals stay legible.** Numeral is real text at
  clamp(8–15rem); occlusion by ≥2 shards, but only darker shards may
  cross numeral strokes — no Bone-on-ochre stroke crossings below 4.5:1.
  State the z-order/contrast rule in the build contract; validator
  spot-checks the mirror pair and one collage chapter.
- **C2 — "Unique" is testable.** No two of the 40 plates may share the
  same polygon arrangement; the supervisor spot-checks 6 pairs. The
  p2c1/p2c2 inversion must be exact (same shard set, inverted, Vermilion
  relight) — near-mirrors read as mistakes.
- **C3 — Fraunces differentiation.** WONK occluded display numerals are
  Churchill's alone: if the WtP (black 900) or home (masthead) prototypes
  read confusably close, Churchill pushes further into SOFT/WONK extremes
  rather than retreating. Side-by-side check at prototype review.
- **C4 — Accent discipline.** Vermilion #C4502C and Slate #5E6E93 are ART
  colors: large display and plates only, never body text or small labels
  (both fall below 4.5:1 on Lampblack at small sizes). Ochre #C8984A may
  carry large numerals and rules; body stays Bone.
- **C5 — Quiz chapter (p5c5) is keyboard-honest.** Masked answers via
  details/summary (or buttons), answers in the DOM, operable without a
  pointer, no JS-only reveal.
- **C6 — Way 40 must read intentional, not broken.** Single ochre point +
  63 centered words needs a colophon-like finish (plate floor, generous
  air, explicit end state) so validators don't file it as missing art.
- **C7 — TOC gallery wall performs.** 40 clip-path thumbnails + full-width
  part bands: cap paint cost, keep phone behavior (smaller thumbs are
  fine; dropping all markers is not). Progress-as-shard-fill must be
  perceivable as progress, not just pretty.
- **C8 — Font proof.** Fraunces SOFT/WONK axes + Newsreader opticals must
  show in computed styles AND visually; fallbacks Georgia/serif real.
- **C9 — Prototype order (as spec'd).** Cover (mid-scatter void), mirror
  pair p2c1+p2c2, p3c1, p3c7, p4c2, p5c3, p5c6, p5c10 — all five parts,
  hardest content kinds — at 1440×1000 / 820×1180 / 390×844 before any
  cohort expands.

## Corrections (small, do now)

- Chapter-map typo: p5c1 "two telefón wires" → "transatlantic cable pair"
  (and drop the stray accent whatever you choose).
- Manifest titles MUST be copied verbatim from `data/toc.json`, never
  retyped: the §5.7 example title for p2c4 needs verification against the
  real TOC string before it becomes a contract example.
- Gold-family collision is now a library-wide watch: Ochre #C8984A sits
  near Twilight Bronze #D29A4A, WtP Sulphur #E3A82B, and Gay Science Noon
  Gold #F5B301. Churchill's separator is FLAT SHARD MASS, never glow —
  no `text-shadow`/`box-shadow` light effects in ochre anywhere, or the
  four Nietzsche-adjacent books blur together.
