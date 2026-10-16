# Being and Time — Three directions, comparison, and chosen identity spec

Book: *Being and Time* (Martin Heidegger, 1927), slug `being-and-time`.
Authority: `books/being-and-time/data/toc.json` — 83 sections §§1–83:
- Introduction ("The Question of Being"): p1c1–p1c8 (§§1–8)
- Division One ("The Preparatory Fundamental Analysis of Dasein"): p2c1–p2c36 (§§9–44)
- Division Two ("Dasein and Temporality"): p3c1–p3c39 (§§45–83)

Skills read: `skill://frontend-design`, `skill://frontend-workflow`, `skill://reference-study`
via injected content (no local fallback needed). RELAUNCH contract §Phase A followed.
Baseline viewed in Eval browser at `http://127.0.0.1:8000/books/being-and-time/`
(cover, §1 reader view, TOC drawer, §15 reader view).

## Baseline diagnosis (observed, 1440×1000)

- The prior identity is the rejected "forest-green manuscript" look: centered
  Cormorant Garamond title, repeating vertical rail stripes for the cover,
  a cartouche-style `SS § N` numeral badge, and ❧/◇/◆/✦/§ pseudo-element
  ornaments on `hr` and titles. Rules, badges, and glyphs repeat with only
  border-color/border-style variation; chapters are visually interchangeable.
- TOC rows show tiny numeral badges with (in this build) a full-width seal
  bar that reads as a form element, not art. Prose is calm and legible —
  that calm is worth keeping; everything around it must change.

## Prose actually read (grounding)

p1c1 (forgotten question of Being; "Battle of Giants"; Being as most
universal yet most obscure), p1c6 (Destruktion; Dasein "is" its past which
"goes ahead of it"), p1c7 (phenomenological method; "to the things
themselves"; ontology from the objective necessity of the questions),
p2c7–p2c8 (dealings/Umgang; handling not cognition; worldliness announced
in innerworldly beings), p2c19 (the They; Dasein as what it does),
p2c27 (idle talk as Dasein's interpretedness, not disparagement),
p2c32 (anxiety; flight from oneself), p2c33 (care; existentiality /
facticity / falling as one woven coherence), p2c36 (truth and disclosedness;
Parmenides/Aristotle), p3c9 (authentic being-toward-death; the question
whether the project is a "chimerical undertaking"), p3c14 (the call of
conscience; the They-self summoned to its potentiality-of-being),
p3c25 (ecstatic temporality; the "clearing" [Lichtung]; care as what
clears), p3c39 (finale: temporality revealed as ground; question of Being
in general still open).

Subject-matter notes and uncertainties: key motifs below come from the
prose itself (question/circle, the clearing, ecstatic horizons, craft and
equipment, destruction of tradition, Greek antiquity). I treat Heideggerian
terms as the translation renders them; German originals are quoted only
where the TOC or prose supplies them. No narrative events exist to invent;
the drama is methodological — questioning, dismantling, disclosing.

## References studied (with citations)

1. Jan Tschichold, *Die neue Typographie* (1928) — asymmetry, sans-serif,
   grid, rejection of the centred axis. Context: the book's exact
   contemporary (Sein und Zeit 1927; Tschichold's *elementare
   typographie* 1925, manifesto 1928). Sources: The Graphic Design School,
   "Jan Tschichold | Graphic Design History, New Typography & Penguin"
   (https://www.thegraphicdesignschool.com/design-history/jan-tschichold);
   MoMA exhibition "The New Typography" (2009–2010),
   (https://www.moma.org/calendar/exhibitions/1013). Takeaway for one
   direction: the Weimar-modernist option; dropped as the lead because a
   second direction fit the book's own imagery better, and because pure
   constructivism risks the generic "broadsheet" tell.
2. Max Niemeyer 1927 first edition facts — light-brown cloth boards, tall
   octavo, xi + 438 pp. (Biblio listing; WorldCat
   https://search.worldcat.org/title/Sein-und-Zeit/oclc/716214253;
   Open Library https://openlibrary.org/books/OL23015507M/Sein_und_Zeit).
   Takeaway: the original object was sober and material, not mystical —
   supports a direction grounded in craft/print rather than fog.
3. Todtnauberg hut / Black Forest timber architecture — small cabin at
   ~1,100 m among Schwarzwaldhöfe farmhouses (Adam Sharr, *Heidegger's Hut*,
   via https://static1.squarespace.com/static/5e265eb50aee2d7e8a81ae69/t/621568d896cda973e405e850/1645570294806/Heideggers+Hut.pdf;
   FT, "Heidegger's hut and Wittgenstein House",
   https://www.ft.com/content/9db1fbc4-1bc2-11e3-94a3-00144feab7de).
   Takeaway: building/dwelling/craft vocabulary; wary of repeating the
   rejected forest look, so timber appears only as disciplined horizontal
   coursing in one direction, never as trunk stripes.
4. Penguin Modern Classics design lineage (Tschichold's 1947–49 three-band
   system; https://www.penguin.co.uk/discover/articles/penguin-modern-classics-design).
   Takeaway: proof that a strict band/system can carry philosophy — but
   also a warning that bands alone feel editorial, not authored; rejected
   as the signature.
5. Greek epigraphy / Parmenides fragment typography (general knowledge,
   flagged as [INFERENCE]): the book opens with Sophist 245e and returns
   to Parmenides in §44. Takeaway: inscriptional Roman/Greek capitals as
   one direction's display voice — distinctive, but risks coldness across
   83 long chapters; kept only as a rejected direction.
6. Clearing / Lichtung imagery in the prose itself (§§28, 40, 69):
   Dasein as "cleared," light as care, not a lamp. This is the book's own
   master image and anchors the chosen direction.

---

# Direction A — "The Clearing" (Lichtung)

A dark forest of vertical strokes parts around a shaft of light that is
the text itself. Division One walks *among the trunks*; Division Two
emerges *into the clearing* — light grows as the analysis reaches
temporality.

- Type: display **Fraunces** (Google Fonts, variable, SOFT/WONK axes —
  available via existing Google Fonts link pattern), body **Source Serif 4**
  (Google Fonts, highly legible at 1.3rem/1.8). Headings: Fraunces 72pt
  optical, tight leading 1.02, `-0.01em` tracking; body 19–21px, 1.75
  leading, measure 34–38rem (shorter than baseline 50rem for density).
  German terms (Dasein, Sorge, Lichtung) set in Fraunces italic as
  in-text landmarks.
- Dark palette (5 named): `Humus #0C0F0A` (bg), `Canopy #141B12`
  (elevated), `Lichen #9DB89A` (muted text), `Shaft #E9D488` (clearing
  light — the single accent, warm straw, never green-on-green), `Bark
  #3E4A34` (hairlines). Light/sepia map Shaft to `#7A6414` on paper.
- Layout: asymmetric — chapter number as a 20vw ghost numeral bleeding off
  the left edge; title column inset right; a single vertical light-shaft
  bar (authored SVG gradient + grain, not a CSS stripe) separates meta
  from prose. Cover: full-bleed authored SVG of parting trunks with one
  warm gap; title sits *inside* the gap.
- Illustration medium: layered SVG — irregular trunk silhouettes
  (hand-plotted paths, varying per part), grain via feTurbulence, light
  shafts as skewed translucent polygons.
- Signature idea: **the light-gap that widens**. Intro chapters: slit of
  light (4% width). Div One: gap grows per cohort. Div Two: full clearing
  glow behind the finale. Progress through the book is literally
  enlightenment — defensible from §69 ("ecstatic temporality clears the
  there primordially").
- Navigation: TOC rows carry a mini light-slit whose width encodes reading
  position; progress bar is a narrowing/widening beam.
- Chapter variation: shaft angle/width, trunk density, ghost-numeral scale
  driven by a per-cohort table (7 cohorts), not modulo.
- Title-swap test: the parting-darkness composition only makes sense for a
  book whose climax is *clearing/Lichtung*; transplant "Moby-Dick" into it
  and the widening light means nothing.

# Direction B — "Elementare / 1927" (Weimar constructivist)

The book as a 1927 German printed object: asymmetric grid, grotesk type,
red/black rules, section numbers as architecture.

- Type: display **Archivo Expanded / Space Grotesk** (Google Fonts),
  body **Inter**-like grotesk or **IBM Plex Sans**; headings all flush-left,
  uppercase kickers, oversized § numerals (e.g. "§40" at 12rem) anchoring
  each opener. Measure 40rem; ragged-right body (no justification — a
  deliberate break from the manuscript baseline).
- Dark palette: `Paper-black #101010`, `Sheet #1B1B1B`, `Signal red
  #E0342B` (sole accent, Bauhaus red), `Warm grey #B9B4A8` (text),
  `Rule grey #3A3A3A`, `Bone #F2EDE1` (reversed panels).
- Layout: strict 12-column asymmetric grid; cover is a poster — huge "SEIN
  / UND / ZEIT" stacked grotesk with a red bar; chapter openers put the §
  numeral as a structural block with title hung beside it.
- Illustration medium: geometric SVG — bars, circles, diagonals, crop-mark
  frames; photomontage-style halftone SVGs for equipment chapters
  (hammer, sign) drawn as flat pictograms.
- Signature idea: **the treatise as machine-age poster series**. Every
  opener is a small Tschichold poster; the TOC is an index table with
  leader rules.
- Navigation: TOC as a dense tabular index (roman / title / words),
  hover reveals red marginal bar; progress as a thin red rule.
- Chapter variation: grid position of the numeral block rotates through 4
  composed placements; red used sparingly (death chapters near-black with
  red only on the § mark).
- Title-swap test: the 1927-Weimar apparatus fits a German treatise of
  that year; another book would need another year-style. Fails the test
  more weakly than A — constructivism could dress any 1920s text.

# Direction C — "Inscription" (stone and bronze)

The book as excavation: Greek fragments, incised Roman capitals, bronze
on basalt. Honors the book's origin in Plato/Aristotle/Parmenides and the
Destruktion method (chipping away tradition to reach the phenomenon).

- Type: display **Cormorant** replaced by **Cinzel** (Google Fonts,
  inscriptional Roman) for part titles and § numerals; body **Newsreader**
  (Google Fonts, optical sizes, excellent long-form serif). Greek
  epigraphs (Sophist 245e etc.) set large in **Noto Serif** Greek
  coverage. Measure 36rem; generous leading 1.85; small-caps kickers.
- Dark palette: `Basalt #131315`, `Ashlar #1E1E22`, `Marble #E8E2D4`
  (text), `Bronze #C08A3E` (accent — metal, not light), `Verdigris
  #5F8A7A` (secondary, used only for Greek text), `Dust #7A766C`.
- Layout: centered, monumental — part pages as full-viewport stone
  tablets; chapter openers with a bronze § numeral incised above the
  title, flanked by hairline architrave rules; Greek marginalia in the
  outer margin on wide screens.
- Illustration medium: SVG stone texture (feTurbulence + lighting
  filter), incised-letter effects via layered text shadows, fragment
  diagrams (broken-column dividers whose "break" differs per cohort).
- Signature idea: **the fragment that completes**. Each opener shows a
  broken inscription band; across the 83 sections the band reassembles —
  §83 shows the whole line ("the question of Being in general").
- Navigation: TOC as an excavated wall — part headers as courses of
  masonry; progress as a bronze fill rising in an incised channel.
- Chapter variation: fragment shape per cohort; Greek epigraph presence
  keyed to chapters that actually cite antiquity (Intro, §44, history
  chapters) — content-driven, never decorative.
- Title-swap test: strong — the Parmenides/Sophist apparatus belongs to
  this book's Greek origin. But risks monotony and coldness across 184k
  words of German phenomenology; the Greek thread is real but thin
  outside a dozen chapters.

## Comparison and choice

| Axis | A Clearing | B 1927 | C Inscription |
|---|---|---|---|
| Rooted in this book's prose | Deepest (§§28/40/69 Lichtung; anxiety→care→light arc) | Period-true but extrinsic | Real (Greek origin) but thin |
| Visual distance from rejected baseline | Total: warm light vs green rails; authored SVG scenes vs stripes | Total: grid/poster vs manuscript | Large, but centered monument risks echoing old centered shell |
| 83-chapter stamina | Strong: light arc paces the whole treatise | Medium: posters fatigue in long reads | Weakest: monumentality tires |
| Title-swap test | Passes — light-gap means nothing elsewhere | Weak pass — any 1927 text fits | Passes — but over-claims the Greek thread |
| Risk | Light effects must stay out of the text's way | Generic-broadsheet tell; red/black cliché | Cold, repetitive; Cinzel at length |

**Chosen: Direction A — "The Clearing" (Lichtung).**

Reason: it is the only direction whose signature idea is *the book's own
master image*, it paces all 83 sections with a genuine arc (slit → stand
→ clearing), and it is maximally distant from the rejected green-rail
manuscript look (warm straw light on near-black humus, asymmetric
composition, authored SVG scenes, new type pairing). Directions B and C
contribute salvage: B's tabular TOC discipline informs the contents
design; C's bronze §-numeral craft informs numeral detailing (but in
straw, not bronze, and never as a repeated cartouche badge).

Rejected-baseline firewall: no repeating vertical rail backgrounds, no
`SS § N` cartouche badge, no ❧/◇/◆/✦/§ glyph ornaments, no modulo tint
rhythms, no centered Cormorant title block. Ghost numerals are
per-cohort authored compositions (position/scale/crop specified in the
manifest), not a badge component.

---

# Chosen identity spec — "The Clearing" (for 7 cohort teams)

## Tokens (dark-first; light/sepia must map, not vanish)

```
--bt-humus:   #0C0F0A   page ground (near-black, green-undertone)
--bt-canopy:  #141B12   elevated surfaces (TOC panel, cards)
--bt-under:   #1D2619   soft wells (blockquote ground, code)
--bt-lichen:  #9DB89A   muted text / secondary
--bt-mist:    #C9D4C3   body text (warm-grey-green, ≥7:1 on humus)
--bt-shaft:   #E9D488   THE accent: clearing light (straw)
--bt-ember:   #C96F3B   sparse second accent: Div Two night chapters only
--bt-bark:    #3E4A34   hairlines / borders
--bt-ink:     #060805   deepest black (cover vignette, ghost underlay)
```

Light theme: ground `#F5F1E4`, text `#1C231A`, accent `#7A6414`
(darkened shaft), muted `#5A6B54`. Sepia: ground `#EFE6D0`, text
`#232B1F`, accent `#6E5A10`. Ember light-mapped to `#A34E22`.

Contrast discipline: body text uses `--bt-mist` on `--bt-humus` only;
`--bt-shaft` is reserved for display, numerals, shafts, focus rings —
never for paragraph text.

## Typography

- Display: **Fraunces** (Google Fonts variable; opsz + SOFT + WONK).
  Availability: Google Fonts CDN — same mechanism as the current
  Cormorant link; supervisor adds the family to `index.html`. Fallback:
  `Georgia, "Times New Roman", serif`.
  - Cover title: Fraunces 96–160px, opsz 144, wght 340, WONK 1.
  - Chapter titles: Fraunces 40–64px (clamp), opsz 100, wght 400,
    leading 1.05, tracking −0.01em, flush-left (never centered).
  - German landmark terms: Fraunces italic 1.02em in-line.
- Body: **Source Serif 4** (Google Fonts; fallback Georgia). 19px /
  1.75, measure `34rem` max. Justified? **No** — left-aligned, ragged
  right (breaks the manuscript tell; Heidegger's long compounds hyphenate
  badly justified).
- Small caps kickers: Source Serif 4, 12px, 0.22em tracking, lichen
  color. No ALL-CAPS eyebrows above every heading — one kicker line in
  the opener only (part + § + words/min), then silence.
- Scale: 12 / 15 / 19 / 24 / 32 / 48 / 72 / 112 (minor-third-ish ramp).
- Ghost numerals: Fraunces 300, 18–24vw, color `mist` at 7–10% opacity,
  cropped by viewport edge per cohort placement table.

## Composition rules (all openers)

1. **Asymmetric ledger**: opener grid = [ghost numeral gutter 22%] +
   [title column 52%] + [margin note rail 26%, ≥1100px only]. Below
   1100px the rail folds under the title as a horizontal strip; below
   640px single column, ghost numeral becomes a cropped backdrop.
2. **The shaft**: one authored SVG light-shaft per opener (skewed
   polygon + grain), entering from top-right at a cohort-specified
   angle (12°–38°), terminating above the first paragraph — never
   behind body text.
3. **First-paragraph treatment**: no drop cap (rejected-baseline tell);
   instead a 3-line lead set in Fraunces 22px (the "threshold"),
   then Source Serif body.
4. **Meta line**: `Part · § N · words · min` in one 12px lichen line —
   replaces the cartouche badge. The § numeral lives large in the
   ghost gutter, small in the meta line, nowhere else.
5. **Reading body**: calm — mist on humus, 34rem, generous paragraph
   spacing (1.1em), blockquotes as soft `--bt-under` wells with a 2px
   shaft-colored left edge *only where the prose quotes* (Heidegger
   quotes Greek/German sources often; the well marks real quotation).
6. **Section transitions**: `hr` becomes an authored "floor-break" —
   a 96px SVG of scattered light flecks, density keyed to cohort
   (3 densities, not per-chapter random).

## Motif grammar (authored SVG; per-cohort parameters, no modulo)

Base scene (cover + part dividers): hand-plotted trunk silhouettes
(5–9 trunks, quadratic-curve edges, no two cohorts share a skyline),
grain overlay (feTurbulence, opacity 0.06), one light-gap.
Parameters per cohort (set by cohort designer in
`design/<cohort>.json`, integrated by supervisor):

- `gapWidth` (4% → 100% across the book arc), `shaftAngle`,
  `trunkCount`, `trunkLean` (−4°…+4°), `floorDensity` (flecks),
  `ghostPlacement` (left-bleed / right-bleed / top-crop),
  `ember` (true only for death/night chapters p3c3–p3c9 and §40).

## Per-cohort art brief (7 cohorts over 83 sections)

1. **Threshold** (Intro p1c1–p1c8, §§1–8): the slit. gapWidth 4–10%,
   steep shaft 34°, ghost numerals top-cropped. p1c1 (§1): cover-adjacent
   opener — widest margin rail with the Sophist epigraph. p1c6
   (Destruktion): single leaning trunk (−4°) — tradition tilted. p1c7
   (method): shaft widest in cohort (method = letting light in).
2. **World** (Div One p2c1–p2c10, §§9–18): among the trunks.
   gapWidth 12–24%, shaft 28°, ghost left-bleed. Equipment chapters
   (p2c7–p2c10): floor flecks become *tool-shadows* — flat SVG
   pictograms (hammer, signpost, lattice) lying in the light, drawn
   from the prose (handling/Umgang, reference/signs, Bewandtnis).
3. **Space & Who** (p2c11–p2c20, §§19–28): Descartes critique →
   spatiality → the They. gapWidth 24–34%. p2c11–p2c13 (res extensa
   critique): shaft *interrupted* by a hard geometric grid overlay
   (the Cartesian grid, visually argued-against). p2c19 (the They):
   trunks multiply and regularize (12 even trunks — the They as
   leveling); shaft narrows.
4. **Attunement & Falling** (p2c21–p2c30, §§29–38): mood chapters.
   gapWidth 30–40%, shaft softens (blurred edge). p2c22 (fear), p2c27
   (idle talk), p2c28 (curiosity), p2c29 (ambiguity): fleck fields
   drift (idle talk = scattered small flecks; curiosity = flecks
   pulled toward the margin rail). p2c30 (falling): shaft tilts to
   38° and dims 30%.
5. **Care & Truth** (p2c31–p2c36, §§39–44): Div One climax.
   gapWidth 40–52%. p2c32 (anxiety, §40): ember=true — the only
   ember in Div One; shaft goes cold-white against ember floor.
   p2c33 (care): three shafts braid (existentiality/facticity/falling
   woven — §41's "primordial coherence"). p2c36 (truth, §44, longest
   Div One chapter): Parmenides epigraph in the rail; fullest light
   of the division.
6. **Death & Conscience** (Div Two p3c1–p3c20, §§45–64): night path.
   Palette shifts: ground deepens to `--bt-ink`, shaft narrows to a
   path-beam, ember joins shaft (dual-light). p3c3–p3c9 (death):
   ember floor-fields; p3c9 (authentic being-toward-death, §53):
   single vertical beam, no trunks — the nonrelational possibility.
   p3c10–p3c16 (conscience): call-and-response — shaft splits in two
   and rejoins (caller/called). p3c18 (resoluteness, §62): beams
   rejoin fully — brightest Div Two opener before temporality.
7. **Temporality & History** (p3c21–p3c39, §§65–83): the clearing.
   gapWidth 55% → 100%. p3c21 (§65): horizon lines enter (three
   horizontal light-lines: future / having-been / present — the
   ecstases). p3c24 (§68) and p3c39 (§83, longest chapters): long-
   chapter relief — wider measure (38rem), floor-breaks every ~1500
   words, rail carries a "you are here in the arc" mini-map.
   p3c28–p3c33 (history/historicity): flecks settle into strata
   (sediment lines). p3c39 (§83 finale): gapWidth 100% — no trunks,
   full clearing glow, title in shaft color; the question left open
   (no closing ornament — silence is the ending).

## Asset plan (all authored SVG; no stock, no hotlinks)

- `art/cover-clearing.svg` — full-bleed cover scene (trunks + gap +
  grain), ~9 trunks, gap 8% (book entrance = the slit).
- `art/shaft.svg` — parametric shaft symbol (angle/width via CSS vars).
- `art/trunks-div1.svg`, `art/trunks-div2.svg` — part-divider skylines.
- `art/floor-flecks.svg` — 3-density fleck fields (also `strata.svg`
  for history, `tool-shadows.svg` for equipment, `grid-cartesian.svg`
  for §§19–21 overlay).
- `art/horizons.svg` — three ecstasis lines for Temporality cohort.
- `art/beam-single.svg`, `art/beam-split.svg` — death/conscience beams.
- `design/<cohort>.json` × 7 — per-chapter parameters (id, part, order,
  title, gapWidth, shaftAngle, ghostPlacement, ember, rail note).
  IDs recorded with part + order + title for cheap remap (per
  supervisor/Curator convention).
- Prototype scope (§Change.4): cover composition + 3 chapter openers
  spanning moods — **p1c1** (§1, the slit + Sophist rail), **p2c32**
  (§40 anxiety, ember + cold shaft), **p3c9** (§53, single beam) —
  plus the **p3c39** (§83 finale, full clearing) as the fourth
  validation render. Supervisor integrates into ART-DIRECTION.md +
  theme.css; cohorts implement from this spec at Phase 2.

## Navigation treatment

- TOC drawer: `--bt-canopy` ground; part headers as small Fraunces
  italic lines with a shaft tick whose width = cohort gapWidth
  (the arc visible in miniature); rows in Source Serif 15px with
  § numerals set small (13px, lichen) — no badges; active row gets a
  2px shaft left edge; read rows dim to 55%.
- Progress: 2px shaft-colored beam, width = chapter progress; on the
  cover, the gap subtly widens with overall book progress (0–8%).
- Prev/Next: quiet text links with Fraunces § numerals; no cards.
- Settings/reader chrome: unchanged structure (ReaderLead-owned);
  book theme re-skins surfaces to humus/canopy.

## Why this identity belongs to THIS book

The arc — forgotten question → dismantling → anxiety → care →
death → conscience → temporality-as-clearing — is the book's own
movement, and "the clearing" is the book's own word for what the
analysis achieves. Replace the title with any other book and the
slit-to-clearing composition, the braided care-shafts, the split
conscience-beam, and the three ecstasis horizons become arbitrary
decoration. The design *argues the treatise*; that is the title-swap
guarantee.

## Open questions for supervisor / ReaderLead

- Fonts: Fraunces + Source Serif 4 via Google Fonts (same mechanism
  as current link). If offline build forbids new families, fallback
  is Georgia/serif — acceptable but the display voice weakens;
  request confirmation that the two families ship.
- Ghost numerals at 18–24vw + grain filters: GPU cost on low-end
  phones — cohort engineers should rasterize grain at build or gate
  feTurbulence behind `prefers-reduced-motion`/width queries.
- p3c39 back-matter: per supervisor note, style as served; this spec
  gives §83 the climactic opener + long-chapter relief regardless.

## Evidence

- Baseline screenshots viewed: cover (green rails + centered
  Cormorant block), §1 reader (SS-badge + justified body),
  TOC drawer + §15 reader (badge rows, ❧ ornament). All confirm the
  rejected pattern this direction replaces.
- Chapters read: p1c1, p1c6, p1c7, p2c7, p2c8, p2c19, p2c27, p2c32,
  p2c33, p2c36, p3c9, p3c14, p3c25, p3c39 (titles + opening
  paragraphs; full text not claimed).
- References: Tschichold/MoMA (constructivism context), Niemeyer
  1927 object facts, Todtnauberg hut architecture, Penguin lineage,
  prose-internal Lichtung imagery. No images hotlinked; no generated
  imagery claimed.

---

# Addendum — READER-CONTRACT v1.0 conformance (2026-10-15)

Contract `.omp/design/READER-CONTRACT.md` v1.0 is STABLE. This spec already
conforms on all load-bearing points; the following pins the integration
details so cohort teams design against the frozen seams:

1. **Hooks (§2).** Key part-level rules off `body[data-part-id]`
   (`part-1`/`part-2`/`part-3`) and chapter rules off `body[data-chapter]`
   — never off `body[data-part]`, whose roman values are display-derived.
   Scope every book rule under `body[data-book="being-and-time"]` as
   hygiene. Being-and-Time IDs are NOT provisional (only IJ shifts), but
   cohort JSON still records part + order + title per entry per this
   spec's asset plan.
2. **Art slots (§3).** Openers render into the injected `#chapter-art` /
   `#cover-art` `<figure>` slots — zero `index.html` edits needed for
   declarative art. The ghost-numeral gutter, shaft SVG, and rail in this
   spec are slot children (book-owned) plus `body[data-*]`-qualified
   rules. Slots stay `aria-hidden`; no figcaption content planned, so no
   ARIA flipping needed.
3. **Manifest (§4).** Cohort authors write `art/<cohort>.svg` +
   `design/<cohort>.json` (this spec's asset plan, unchanged); supervisor
   merges sequentially into `design/chapters.json`
   (`{version, cover, default, chapters}`). Per-chapter `motif` ids set
   `body[data-art]` — recommended motif vocabulary: `slit`, `stand`,
   `grid-argued`, `they-leveled`, `drift`, `fall`, `braid-care`,
   `cold-ember`, `single-beam`, `split-call`, `rejoined`, `horizons`,
   `strata`, `full-clearing`. `default: {class: "clearing-motif"}` covers
   unlisted chapters; no chapter keeps stale art.
4. **Cascade (§8).** Shared CSS now ships in `@layer shared`; book CSS is
   unlayered and always wins — cohort `design/*.css` needs no
   `!important` and no load-order tricks. `--bt-*` tokens are
   book-declared (legal); shared-token overrides (`--bg`, `--text`,
   `--accent`, …) MUST be scoped per theme — supervisor covers all 8
   themes when integrating (dark Ink first, then nocturne/verdant/
   oxblood/slate/candlelight/sepia/light).
5. **Fonts (§8).** Revise the open question: supervisor SHOULD self-host
   Fraunces + Source Serif 4 subsets via `@font-face` in
   `design/fonts/` (book-relative, ships via §11 build) rather than
   relying solely on the Google Fonts CDN link; Georgia/serif fallbacks
   remain REQUIRED. No new families beyond these two without supervisor
   approval.
6. **Classes (§7).** Never mint `reader-*` classes. Slot treatment
   classes (`clearing-opener`, `clearing-plate`, …) are book-defined via
   the manifest `class` field. The `reader:chapter` event is available
   for the cover-gap progress effect and the §68/§83 rail mini-map if
   supervisor sanctions book-owned JS; both degrade to static art
   without JS.
7. **Generator lock (§10).** Supervisor's `design/ART-DIRECTION.md`
   (not this file) locks the generator; nothing in this spec requires
   generator or build changes — `art/**` + `design/**` already ship
   per §11.
