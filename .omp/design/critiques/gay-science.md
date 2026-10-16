# The Gay Science — critique (ArtDirector)

Spec: `books/gay-science/design/directions.md` (448 chapters, 8 parts).
Baseline: capture #8 (sun-dot conic fan + dot grids) + capture #19
(GS p1c1 reader, same meta grammar as Atlas/IJ).

## Verdict: DIRECTION A ("NOON") APPROVED, with binding conditions

The pick is right. A is the only direction whose signature (the day-cycle
sun as book progress) spans mischievous rhymes AND the §125 abyss AND
amor-fati sunrise without splitting in two; B is beautiful but static
manuscript craft for a book that dances; C's voyage grammar, while
textually real, would drown 168 tiny Book-3 aphorisms in chart furniture.
The Munch-Sun + Matisse-ring + Tarot-soleil + troubadour reference stack
is the best-cited in the library so far. Proceed to ART-DIRECTION.md +
prototype; expansion only after prototype review.

## The three questions, answered

1. **Distance from rejected SUN-DANCE: directionally sufficient, must be
   proven in the render.** The old theme was a tiny glyph + gradients; A
   is full-bleed architectural mural SVG. The proof is scale and
   draftsmanship — the prototype MUST show a Prelude rhyme opener and the
   §125 zenith side by side: if either reads as "sun glyph over tint,"
   it fails. Flat wedges, zero radial-gradient glow discs.
2. **Prelude treatment: A with B's discipline — as recommended, sharpened.**
   63 rhymes get dance-ring FRAGMENTS that complete the ring across the
   part (not 63 full openers). Borrow from B exactly one thing: rubricated
   first lines in Dance Vermilion for the rhyme titles. Do not borrow
   historiated initials or vine borders — two grammars would muddle.
3. **Palette/type flags: two.** (a) Noon Gold #F5B301 vs WtP Sulphur
   #E3A82B vs Churchill Ochre vs Twilight Bronze: the library's fourth
   gold. Gay Science owns gold at the LARGEST scale (architectural sun
   masses) — everyone else's gold is small/hot/sparse/flat; hold that
   division and the four books stay distinct. (b) Fraunces display is now
   registry-crowded (home, Churchill, WtP, Being&Time): Gay Science's
   Fraunces MUST be its wonkiest, most joyful register (SOFT high, loose
   leading, dance-tilted kickers allowed) — if it reads confusably close
   to Churchill's occluded numerals or WtP's black 900, Gay Science moves
   further into joy, never toward solemnity.

## Binding conditions

- **G1 — The day-cycle must be legible without a legend.** A reader
   jumping Preface → §125 → Appendix must FEEL dawn → zenith glare →
   black-sea sunset from the art alone. Sun altitude per part is fixed
   in the manifest (8 altitudes); prototype shows three of them.
- **G2 — Scale sensitivity is the whole game.** 1-line aphorisms (§275,
   17 words, verified in chapter JSON) get a marginal sun-spark sized to
   the text; landmarks (§125 madman, §341, §342, §343, §382–383, Appendix
   songs) get full-bleed ray openers. Anything in between follows the
   altitude × weather grammar. No giant heroes on tiny texts.
- **G3 — §125 is the book's climax: the lantern lit AT NOON.** Zenith
   glare + inverted lantern. This opener is the prototype's centerpiece;
   if it doesn't raise the hair on your arms, revise.
- **G4 — Sea bands stay flat.** Ultramarine #173A8F bands are FLAT SVG
   shapes, never gradients — the rejected baseline's conic fan must be
   unrecognizable.
- **G5 — Dusk Aubergine #2A1540 is for night chapters only.** One part's
   weather, not a roaming accent.
- **G6 — Prototype scope.** Cover mural + Preface + one Prelude rhyme +
   §125 + §342 + one Book-5 essay + one Appendix song, at three
   viewports, before any cohort expands.

## Prototype review G6 (2026-10-15) — REVISE (then expansion)

Rendered prototype walked end to end at :8123 (desktop 1440, 13
viewport captures: cover, Preface, §13, §125, §341/342, §343, Appendix,
§275 + phone cover/§125). Fonts confirmed computed (Fraunces + Source
Serif 4). Verdict: REVISE — the day-cycle system WORKS (dawn → zenith
→ sunset felt without a legend; §275's 26px spark vs §125's full-bleed
landmark is exactly the scale grammar G2 demanded), but the cover has
draftsmanship failures, the phone build overflows horizontally, and
openers repeat the supervisor's three flagged defects. All bounded;
no rethink.

### What clears the bar

- §125 zenith: template-of-doom grid + inverted lantern + glare + full
  madman text — the book's climax lands. G3 satisfied.
- Day-cycle legible: Prelude sparkle → zenith → St Januarius gold →
  Appendix red disc over black sea. G1 satisfied.
- Scale grammar proven: §275 one-liner with marginal spark; landmarks
  full-bleed. G2 satisfied. Flat bands, zero glow discs (G4); Aubergine
  reserved (G5).
- Body prose calm and readable throughout; truncation honestly marked.

### Required repairs (GR1–GR7)

- **GR1 — Cover: the dance ring reads clip-art.** Three identical
  vermilion figures + dot-dash orbit rings + "A work by" letterspaced
  across the sun: stiff, symmetrical, mascot-like. Redraw the ring
  with Matisse grammar (five+ figures, varied gesture, hand-drawn
  bezier irregularity, broken ring); move "A work by" off the sun
  disc (eyebrow above the art, not across it).
- **GR2 — Cover sun-face still smiles.** The H2-ruling repair (Tarot
  impassive) was NOT applied — the phone view shows the same happy
  face. Redraw sterner/flatter NOW; this is the second ruling.
- **GR3 — Horizontal overflow on phone.** scrollWidth 585 vs 390
  client — the mural/spark bands bleed off-canvas and force sideways
  scroll. Contain all opener art to the viewport (overflow-x clip on
  the art containers + sized SVG viewBoxes). Zero phone overflow is
  a shipping floor.
- **GR4 — Opener art left-half empty (supervisor's flag, confirmed).**
  §125/§342 openers leave half the band vacant. Compose full-width:
  art across the whole opener zone, title set into/across it per the
  mural-inscription rule — never a half-empty band beside a title.
- **GR5 — Inscription clipping (supervisor's flag, confirmed).** Mural
  titles clip against band edges at some widths. Inset + balanced wrap
  + min-padding on all inscription titles.
- **GR6 — Drop-cap numerals (supervisor's flag, confirmed).** Section
  numerals set as drop caps read as a furniture bug. Numerals stay in
  the meta/margin system; drop caps are LETTERS only.
- **GR7 — Appendix opener under-composed.** Red disc + black sea + ship
  are all present but scattered (disc top-right, ship bottom-left,
  title floating between). Compose one sunset tableau: disc low over
  the sea band, ship crossing before it, title inscribed across —
  the book's farewell image must be its most composed, not its
  loosest.

Re-inspection: cover (GR1+GR2) + one full-width opener (GR4/GR5) +
phone overflow probe (GR3) + Appendix (GR7). Then PASS + expansion.
P11: §125 and the day-cycle match the homepage bar; the cover does
not yet — GR1/GR2 close it.
