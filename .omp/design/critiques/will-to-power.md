# The Will to Power — critique (ArtDirector)

Spec: `books/will-to-power/design/ART-DIRECTION.md` + `book-identity.json`.
Baseline: capture #12 (crimson forge glow + skew rails, centered shell).
Note: this book's design work is advanced (plate-mark grammar, NB. hooks,
fragment census) — the critique below answers the designer's three
questions first, then binding conditions.

## Verdict: PROVISIONAL PASS (binding conditions below)

"The Black Notebook" is approved as the identity: the fragment-as-exhibit
reading is the book's own form (numbered fragments, NB. cries, `(a)/(b)`
sub-notes), the DFGA-facsimile + Vintage + Munch + woodcut + Penguin
references are genuinely load-bearing, and both rejections are correctly
argued (B belongs to Zarathustra; C fits only Book III and drifts toward
broadsheet-default). The `book-identity.json` opener contract is exemplary.
This is provisional only because I have not yet seen the cover plate or
any opener rendered — Phase B prototype review is where approval finalizes.

## The three questions, answered

1. **Four part-inks + one accent: contained, on one condition.**
   Gloom Violet / Bloodline / Verdigris / Heights Blue stay PART inks
   (plate-marks, eyebrows, art, fragment numerals at ≤0.8rem) and Sulphur
   stays THE action color (progress, NB. markers except Book II, links,
   focus). The spec already says this — make it a validator check: no
   part ink may appear on two different interactive roles in one chapter.
   Verdigris is the social risk (IJ Phosphor #9FE870 and Being&Time shaft
   families live nearby) — keep it desaturated and lens-like, never neon.
2. **Fraunces 900 at opsz 144: yes for short openers, quieter for the
   long polemics.** p3c4 (159 paras), p3c10 (168), p4c19 (13357 words),
   p5c3 (198 paras) get the specified quieter variant: Fraunces 700,
   smaller clamp, plate-mark above rather than overlapping the title edge
   (overlap at polemic scale reads aggressive-before-reading). The
   gouged plate-mark carries the identity in those chapters, not the
   weight.
3. **Cover asymmetry: keep it.** A centered tablet would echo the old
   centered shell this relaunch exists to kill. Left monumental title +
   right ring/hammer plate reads archival (object beside its label) and
   differentiates from Twilight's centered struck disc. Condition: the
   plate must be large (right 40% desktop, full-width above title on
   phone) — a small medallion floating right would read timid, not
   monumental.

## Binding conditions

- **W1 — Woodcut vs neighbors.** WtP's gouge grammar must stay visually
  distinct from Sovereign's intaglio guilloche (precise lathe lines) and
  Churchill's flat shards: WtP = TORN, irregular, knockout-mask violence.
  If the prototypes blur, WtP goes rougher, never cleaner.
- **W2 — Gold-family watch.** Sulphur #E3A82B sits near Churchill Ochre,
  Twilight Bronze, Gay Science Noon Gold. WtP's separator is the MATCH
  logic: small, hot, sparse applications (numerals, NB., rules) — never
  large glowing fields.
- **W3 — Authored fleurons, verified.** The "every ~8th paragraph"
  sulphur fleuron is approved ONLY with exact paragraph indices in
  cohort JSON (as the contract requires) and a census check. Any
  nth-child/modulo implementation is an automatic REVISE.
- **W4 — NB. hook.** Prefer the reader-lead contract hook (`p.nb` class);
  the `body[data-chapter]` fallback is acceptable only with an explicit
  per-chapter selector table, never text-guessing in CSS.
- **W5 — Tablet openers.** p3c1, p4c1, p5c1 (single-paragraph spaced
  titles) render as specified tablet openers (huge centered title, no
  drop cap, plate above) — and must read intentional, not empty.
- **W6 — Prototype scope.** Cover plate + part plates for all five parts +
  openers p1c1 (tablet hush), p3c4 (long polemic, quiet variant), p3c10,
  p4c15 (lens-eye), p5c3 (198-fragment braid), one NB.-heavy spread —
  at three viewports — before expansion.
