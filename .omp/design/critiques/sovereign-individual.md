# The Sovereign Individual — critique (ArtDirector)

Spec: `books/sovereign-individual/design/directions.md` (3 directions) +
`ART-DIRECTION-DRAFT.md` + `art/cover.svg` (guilloche specimen plate,
reported rendered) + `manifest-draft.json` (all 11 IDs).
Baseline: capture #16 (orbit rings + conic rays, centered shell).

## Verdict: PASS WITH BINDING CONDITIONS

SPECIE (The Private Banknote) is approved. The thesis is airtight — this
is the one book in the library ABOUT money itself, and a state-stripped
banknote is its argument drawn. The medium (authored SVG intaglio:
hypotrochoid guilloche, lathe borders, cross-hatch, microtext rings) is
the most original craft proposed so far, and the denomination system
scales honestly to exactly 11 chapters. Both rejections are correctly
argued (RHUMB abandons the money thesis; CIPHER is the generic dark
dossier default). Proceed to prototype; expansion only after prototype
review.

## Binding conditions

- **S1 — Intaglio density must survive the render.** Guilloche at web
   scale dies into moiré or mush. Prototype review zooms the cover
   plate and one chapter plate at 1440/820/390: strokes must stay crisp
   (no sub-pixel shimmer), rosettes distinct at banner size. Tune
   stroke-widths per breakpoint if needed; never hide plates on phones.
- **S2 — Gold-echo firewall.** The doc already names the risk (gold-on-
   dark echoes the rejected baseline) and the correct defense: difference
   spent on MEDIUM (dense authored line-work) and COMPOSITION (asymmetric
   plates). Prototype review holds this line: if the cover reads as
   "gold glow on charcoal" rather than "engraved note," REVISE.
- **S3 — Ink discipline.** Specie gold carries display/denominations/
   assay; Copper #B26A3B (4.0:1) and Seal #9E3B2E (3.4:1) are GRAPHICS
   only, never text of any size. Verdigris leads ch. 3 & 7 plates only.
- **S4 — Eleven rosettes, genuinely eleven.** Petal count/layers/dash
   rhythm/ink must differ per chapter (validator spot-checks 3 pairs);
   near-duplicates read as a bug in a denomination set.
- **S5 — Microtext is real text or honest ornament.** Circular microtext
   rings: if legible, they must say true things (lockups from the spec);
   if too small to read, they must read as line-work, never as fake
   pseudo-text. No lorem, no glyph salad.
- **S6 — Bodoni body-contrast risk.** Bodoni Moda's hairlines at small
   sizes on dark grounds can shimmer. Display use only (titles,
   numerals, wordmark); body stays Source Serif 4. If the chapter-title
   clamp's small end thins out at 390px, bump weight, not size.
- **S7 — The p1c11 misregistered seal must read intentional.** Double
   (misregistered) seal + red lead ink needs a colophon finish so it
   reads as climax, not printing error.
- **S8 — Prototype scope.** Cover specimen + p1c1 + p1c7 (knot-mesh,
   warmest constructive chapter — CIPHER's ghost must not haunt it) +
   p1c11, at three viewports, before cohorts expand.

## Prototype review R1 (2026-10-15) — CONDITIONAL PASS (SR repairs, then expansion)

Live preview at :8137 inspected: cover, TOC ledger, p1c7/p1c9/p1c10/
p1c11 openers at desktop 1440, p1c9 mid-chapter scroll, phone cover +
p1c1 (zero overflow). Fonts confirmed computed (Bodoni Moda display,
Source Serif 4 body). Plates render in real slots via chapters.json.
The p1c1-substitution (p1c9/p1c10 for missing plate-p1c1) is accepted
for R1 — p1c1 MUST carry its asymptote plate before full expansion.

### What clears the bar

- The specimen-note cover is superb: guilloche rosette, promise
  clause, denomination rail, assay button, microtext frame — a real
  engraved object, zero glow-default. Matches the homepage bar.
- Plate-left openers (knot-mesh, shuttle, sundial, double seal) are
  four genuinely distinct rosette geometries + motifs (S4 satisfied).
- TOC ledger with denomination numerals + assay ticks; progress as
  assay bar; Bodoni numerals hold at all sizes (S6 satisfied).
- Phone: cover stacks with dignity, p1c1 shell reads clean, no
  overflow. Intaglio stays crisp (S1 satisfied at inspected sizes).

### Required repairs (SR1–SR6)

- **SR1 — Kill the floating diamond (acknowledged).** The gold ◆
  pinned at the viewport's top-left over the reader is a shared
  artifact. Suppress before expansion (supervisor-owned fix).
- **SR2 — TOC drawer traps the header button.** After closing the
  drawer, `.drawer-backdrop` keeps covering `#btn-toc` (three
  consecutive click-blockeds in testing; had to navigate via
  prev/next). Fix drawer close/backdrop teardown — this is a
  functional blocker, not taste.
- **SR3 — TOC rows need hover/active craft.** Rows read flat (roman +
  title + words, no engraved rules, no rosette mini-mark strike on
  hover per the adopted spec §TOC). Add the hairline rules + hover
  strike + current-chapter seal-bar.
- **SR4 — p1c11 misregistered seal: nearly there.** The double seal
  reads intentional EXCEPT the red seal's microtext ring degrades to
  glyph salad at 1440 ("OMM…"). Either make the ring lettering real
  microtext (S5) or reduce it to pure line-work. No middle state.
- **SR5 — p1c10 sundial motif legibility.** The sundial plate reads as
  a handsome dial, but "at dusk" needs one explicit cue (long-shadow
  gnomon, ember horizon tick) — currently it could be noon. Small
  authored addition.
- **SR6 — p1c1 asymptote plate owed.** The shell-without-art state is
  clean, but Chapter 1 is the book's front door: Cohort A delivers
  plate-p1c1 before expansion, and I re-view it with the SR repairs.

P11: cover + plates match the homepage bar. SR2 is the only functional
blocker; the rest is craft.
