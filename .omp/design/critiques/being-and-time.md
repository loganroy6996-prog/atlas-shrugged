# Being and Time — critique (ArtDirector)

Spec: `books/being-and-time/design/directions.md` (428 lines) +
`ART-DIRECTION.md` (binding build spec, 9 sections incl. reader-contract
conformance addendum). Baselines: capture #7 (cover) + designer-viewed
§1/§15 readers + TOC drawer.
Note: this book's prose grounding is the deepest submitted (14 sections
read closely, motif uncertainties flagged honestly).

## Verdict: PROVISIONAL PASS (binding conditions below)

"The Clearing" (Lichtung) is approved. The signature — a light-gap that
widens from a 4% slit to a full clearing across 83 sections — is the
book's OWN master image (§§28/40/69, documented), it paces the whole
treatise with a genuine arc, and the Firewall (§1: no rails, no cartouche
badge, no glyph ornaments, no modulo, no centered Cormorant, no drop
caps, no justification) is exactly the break required. The chapter-level
authored notes (§5: leaning Destruktion trunk, braided care-shafts, split
conscience beam, ecstasis horizons, Cartesian grid argued-against) argue
the treatise instead of decorating it. Both rejections are correctly
argued (1927-constructivism fits any Weimar text; Inscription over-claims
a thin Greek thread). Provisional only until the Phase B prototype
renders (cover + p1c1/p2c32/p3c9/p3c39).

## Binding conditions

- **B1 — Shafts are SVG art, never CSS stripes.** The spec says authored
   SVG skewed polygons + grain; prototype review enforces it. A
   `linear-gradient` bar in `#chapter-meta` is the rejected baseline
   wearing straw paint — automatic REVISE.
- **B2 — Ghost numerals are authored, verified.** 18–24vw Fraunces 300
   at 7–10% opacity, cropped per the cohort placement table. Validator
   checks the table against renders; any badge-like centering fails.
- **B3 — Light NEVER behind body text.** Shafts terminate above the
   first paragraph; floor-flecks live in opener zones and explicit
   breather rules only. Mist #C9D4C3 body on Humus must meter ≥7:1
   (spec's own bar) on the composited background.
- **B4 — Threshold treatment must read designed.** First paragraph as
   Fraunces 21px on a soft well INSTEAD of a drop cap is a real risk:
   it can read as a rendering bug ("why is paragraph one different?").
   The well + type change must be confident (clear inset, clear size
   step) or it becomes the new tell. Prototype review judges this
   explicitly; fallback if it fails: quiet Source Serif with a shaft
   tick in the margin.
- **B5 — Ember discipline.** Ember #C96F3B appears in §40 + the death
   cohort floor ONLY (p3c3–p3c9). Anywhere else it becomes a second
   accent and the one-light system collapses.
- **B6 — The finale earns its silence.** p3c39: 100% clearing, no
   trunks, shaft-color title, NO closing ornament. Style prose as served
   (back-matter paras 4+ are Main/ReaderLead's text question — no
   workaround edits, as the supervisor already ordered).
- **B7 — Long-chapter relief is mandatory.** p3c24/p3c25/p3c39 get the
   38rem measure + breather spacing + rail mini-map; p2c36 (§44, 7106w)
   the Parmenides rail.
- **B8 — Fraunces registry check.** Being&Time's Fraunces (light 300–400,
   opsz 100–144, WONK 1, flush-left ledger) must not read confusably
   close to Churchill (occluded WONK numerals), WtP (black 900), Gay
   Science (joyful), or home (masthead). The light-weight + asymmetric-
   ledger + straw-light combination is the separator — hold it.

## Corrections (small, do now)

- directions.md §C proposes Cormorant→Cinzel + Newsreader + Noto Serif
  Greek; the binding ART-DIRECTION.md correctly overrides with
  Fraunces + Source Serif 4. Ensure no cohort works from the §C type
  lines — the binding file wins everywhere it differs (it says so; make
  it true in practice).
- The §5 table's cohort file names must match the actual
  `design/<cohort>.json` + `art/<cohort>.svg` files exactly; the census
  (§8) checks names, not intentions.

## Prototype review R2 (2026-10-15) — REVISE (one blocking plate + craft list)

Live :8099 inspected: cover, TOC, p1c1 (opener + body), p2c32 (§40),
p3c9 (§53), p3c39 (§83), phone p1c1. Fonts confirmed (Fraunces
display/threshold, Source Serif 4 body — the earlier Fraunces-body
probe was the threshold well, as designed). Ghost "83" verified
345px authored numeral. The arc READS: slit → ember night → beam →
full clearing with horizons. But one plate fails outright and the
finale needs a legibility rescue.

### Required repairs (BT1–BT6)

- **BT1 — p3c9 plate fails: redraw (BLOCKING).** The §53 "single beam,
  NO trunks" plate renders as a beige wall with a grey stick-figure
  (tripod easel? ladder? drying rack?) + ruled lines + an orange
  thermometer bar. The stick-figure reads as clip-art accident, not
  anticipation. Redraw per spec: ONE vertical shaft of light on night
  ground, no figures, no furniture — the quietest plate before
  temporality. Nothing in this plate may be a person, tool, or gauge.
- **BT2 — p3c39 title-over-ghost legibility.** The shaft-gold title
  sits directly over the giant "83" ghost, and at "Analytic of Dasein"
  the strokes collide ("Dasein" partially occluded by the ghost's
  bowl). Dim the finale ghost to ≤5% opacity OR shift it right so the
  title column clears it — the finale title must read effortlessly.
- **BT3 — Phone horizontal overflow.** p1c1 at 390: scrollWidth 415
  vs 390 client — the ghost numeral bleeds off-canvas and forces
  sideways scroll. Crop/clip the ghost inside the viewport at <640
  (spec already says cropped backdrop — enforce it).
- **BT4 — p1c1 threshold hyphenation.** "forgot-ten-although" +
  "meta-physics" breaking mid-word on line 1–2 of the threshold well
  reads fussy at the book's front door. Calm hyphenation in the
  threshold (hyphens:none or manual soft-hyphen audit for the first
  paragraph).
- **BT5 — p2c32 plate: nearly perfect; one note.** Cold pillar +
  ember floor + breathers + caption compose beautifully. The ember
  floor's right edge ends in a hard vertical cut against black —
  feather or resolve the edge (floor should ground, not card).
- **BT6 — TOC numeral rhythm.** Rows show Fraunces § numerals at
  uniform size; the spec's shaft-tick widths encoding the arc are
  present but whisper-quiet. Widen the tick range so the slit→
  clearing miniature is actually perceivable in the drawer.

What holds: cover parting-trunks scene (superb), TOC Fraunces
headers, p1c1 slit plate + Sophist rail, p2c19/p2c13/p2c33/p3c21
credited sight-unseen per supervisor ledger (spot-check one at
re-inspection), threshold well reads designed (B4 PASSED — the
Fraunces-21px inset is confident, not buggy).

Re-inspection: p3c9 redraw + p3c39 title/ghost + phone overflow
probe. Then PASS. P11: cover + p1c1 + p2c32 match the homepage bar;
p3c9 does not yet — BT1 closes it.

### Re-inspection (2026-10-15) — PASS

BT1: p3c9 redraw verified — single vertical shaft + pool + flecks on
night ground, zero figures. BT2: finale ghost dimmed/shifted, title
clears it. BT3: phone scrollWidth 390 = client. BT4: computed
hyphens:none on thresholds. BT5/BT6 credited per ledger + screenshots.
Being and Time art-director work is COMPLETE. P11 satisfied: the book
stands beside the homepage in authorship.
