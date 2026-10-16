# falling-care (§§35–44) — designer → engineer handoff

- Cohort: `falling-care` — p2c27–p2c36 (§§35–44), Division One climax arc.
- Status: **CONFORMED** to `books/being-and-time/design/ART-DIRECTION.md` §§1–10,
  READER-CONTRACT v1.0 + v1.1, and ArtDirector conditions B1–B8. No PENDING items.
- Files delivered by the designer:
  - `books/being-and-time/art/falling-care.svg` — 10 chapter symbols (fc-35…fc-44),
    10 ghost-numeral symbols (fc-ghost-35…44), shared `fc-shaft`, `fc-shaft-cold`,
    `fc-flecks-row`. Parses as XML; all art viewed in-browser from renders.
  - `books/being-and-time/design/falling-care.json` — manifest keyed by real ID
    with part/order/title + v1.1 `src`/`symbol`/`class`/`motif`/`caption`.
  - This handoff (directions compared, references, per-chapter composition,
    ghost table, CSS hook spec, breather indices, prototype + review notes).
- Skills read via injected URI content (no fallback needed): `frontend-design`,
  `frontend-workflow`, `reference-study`. Baseline cover + §40 opener viewed at
  1440×1000 in the native Eval browser before designing.
- Fonts: Fraunces + Source Serif 4 load is supervisor-owned (Google Fonts link).
  This sandbox cannot reach Google Fonts (verified: fonts.googleapis.com times
  out), so preview renders used the Georgia fallback; the supervisor MUST confirm
  computed-style font effect on a networked review. No Cinzel/Newsreader anywhere
  (directions.md §C lines superseded per B8/corrections).

## 1. Three directions compared (cohort-level exploration inside the binding grammar)

ART-DIRECTION.md binds the book identity ("The Clearing"), so the three-way
exploration below compares *cohort treatments within that grammar* — the level
this designer owns. The rejected options are recorded honestly with their
failure modes.

### Direction 1 — "Weather of the Gap" (CHOSEN): the shaft argues the U-arc
Each chapter modulates the SAME shaft (angle, dimming, count, temperature) so
the cohort's U-shape — groundless chatter → plunge → abyss → braid → fable →
dissolution → unconcealment — reads as one weather system moving through the
gap: scattered flecks (§35) → margin-pulled (§36) → doubled (§37) → 38° dimmed
plunge (§38) → held threshold (§39) → cold pillar + ember floor (§40) → triple
braid (§41) → earth-register (§42) → igniting frames (§43) → fullest light (§44).
Gap widens 38→52% across the cohort. Climax is structural (plate/banner classes,
taller art zones, 22–24vw ghosts, paced breathers), never just scale.
*Why it wins:* it is the only option where the art *argues the treatise* —
every modulation is traceable to a paragraph (see §3) — while holding the
one-light system, the firewall, and B1–B8 without exception.

### Direction 2 — "Relics of the Argument" (rejected): per-chapter emblem objects
An alternative grammar: each opener centers a discrete SVG emblem-object — a
scattered speech-scroll (§35), a roving eye (§36), a double-mask (§37), a
plunging stone (§38), an unassembled arch (§39), an empty chair in ember light
(§40), a three-strand knot (§41), a clay figure (§42), a shattered frame (§43),
a rising sun (§44). Distinct per chapter and content-grounded.
*Why rejected:* (a) it breaks the book's shaft continuity — ten emblems would
read as ten little book covers, not one cohort walking among trunks; (b) the
eye/mask/chair motifs risk kitsch literalism against Heidegger's deliberately
non-pictorial prose; (c) emblem-objects scale badly to the ghost-gutter ledger
(they fight the ghost numeral for the left edge). Salvaged: the knot-image
informs the §41 braid; the clay informs §42's earth-register.

### Direction 3 — "Ten Rooms of Dusk" (rejected): palette-led moods per chapter
An alternative grammar: keep one quiet shaft composition and differentiate
chapters by ten authored palettes — grey-green chatter, restless teal, violet
ambiguity, iron plunge, ash threshold, ember dread, amber braid, ochre fable,
slate dissolution, gold truth.
*Why rejected:* (a) it collapses the one-light system (B5) — ten accents is no
accent; (b) palette-led variation is exactly the modulo/hash-tinting tell the
firewall forbids, even when hand-picked; (c) it spends the cohort's boldness on
decoration rather than on the argument's structure. The spectral logic survives
only where the text earns it: §40's cold/ember inversion (binding B5) and §44's
culminating brightness (binding B7).

## 2. References studied (with citations)

1. Anselm Kiefer, *Wege der Weltweisheit: die Hermannsschlacht* (*Ways of Worldly
   Wisdom: Arminius's Battle*), 1978 — woodcut, acrylic, shellac on paper,
   343.7 × 348.7 cm (SFMOMA, Fisher Collection; https://www.sfmoma.org/artwork/FC.594/).
   Studied for: straw/lead materiality — how Kiefer makes straw READ as inscribed
   matter (names burned into stalks) rather than decoration. Takeaway for this
   cohort: the shaft is never a clean gradient bar (B1's warning) but a material
   event — hence per-chapter fleck semantics (scattered/pulled/doubled/sunken)
   and the §42 clay rendered in shaft color at 0.55, worked rather than glowing.
2. Caspar David Friedrich, *Cross in the Mountains* (*Tetschen Altar*), 1808 —
   studied via description and analysis (Web Gallery of Art,
   https://www.wga.hu/html_m/f/friedric/1/103fried.html; Wikipedia,
   https://en.wikipedia.org/wiki/Cross_in_the_Mountains).
   Studied for: non-realistic light handled with total conviction — five stylized
   rays traveling upward from a low sun, a gleam on Christ suggesting metal, fir
   silhouettes modeled needle-by-needle yet composed two-dimensionally. Takeaway:
   permission for the §40 cold pillar (light that inverts rather than illustrates)
   and the §44 two-paths fork (doctrinal geometry drawn as landscape, exactly as
   Friedrich draws theology as mountain).
3. Friedrich, *The Chasseur in the Forest*, 1814 (Web Gallery of Art,
   https://www.wga.hu/html_m/f/friedric/2/206fried.html).
   Studied for: the solitary figure lost in evergreens — compassionate dread
   inside vigorous growth. Takeaway: §40's inward-crowding trunks (the forest
   closes on Dasein) and the ghost-numeral left-bleed (the numeral as the lone
   figure at the composition's edge).
4. The book's own prose as visual source (primary): §§35–44 sampled at 5+ points
   per chapter (see §3 for paragraph-level grounding). The two-paths fork, the
   38° plunge, the braid, the ember floor, and the Parmenides rail all come from
   sentences, not from mood.

## 3. Per-chapter opener composition (all 10 — content rationale + art spec)

Ledger (binding §4.1): ghost gutter 22% + title column 52% + margin rail 26%
(≥1100px; rail folds to a horizontal strip <1100px; single column <640px with
ghost as cropped backdrop). Title flush-left, Fraunces 40–64px. Meta line
`Part · §N · words · min`, 12px lichen. Shaft art enters top-right and
terminates ABOVE the first paragraph — never behind body text (B3).

- **p2c27 §35 Idle Talk** (9 paras, 1270w). *Text:* groundless saying; gossiping
  spreads until lack of grounds grows to Bodenlosigkeit (p4); closing-off (p6);
  Dasein never escapes its interpretedness (p7). *Art:* `fc-35` — straight dim
  shaft (gap 38%, opacity 0.5); 26 talk-flecks scattered across the WHOLE scene
  with nothing gathered at the floor. *Ghost:* fc-ghost-35, 20vw/0.07.
  *Rail:* `Gerede` + "saying without ground". *Reading:* threshold well on p1;
  no breathers.
- **p2c28 §36 Curiosity** (9 paras, 1183w). *Text:* just-seeing that never dwells
  (Unverweilen, p8); de-distancing flees the near for the distant margin (p6–p7).
  *Art:* `fc-36` — shaft leans right-of-center (gap 40%); 22 flecks pulled
  margin-ward (x = 700+sqrt·920). *Ghost:* fc-ghost-36, 20vw/0.07 — deliberately
  fights the right-leaning shaft. *Rail:* `Unverweilen` — "never dwelling
  anywhere" (p8). *Reading:* threshold well; no breathers.
- **p2c29 §37 Ambiguity** (10 paras, 935w). *Text:* everything looks genuinely
  understood while nothing is decided (p1); the genuine outdated on emergence
  (p4); semblance tossed between curiosity and talk (p6). *Art:* `fc-37` — every
  fleck DOUBLED (dim mist twin offset down-right) + ghosted second shaft at
  0.18 (gap 41%). *Ghost:* fc-ghost-37, 20vw/0.08. *Rail:* "everything looks as
  if genuinely understood" (p1). *Reading:* threshold well; no breathers.
- **p2c30 §38 Falling** (21 paras, 2009w). *Text:* temptation/tranquillization/
  alienation/entanglement; the plunge, Absturz (p14); turbulence/tossing (p15).
  *Art:* `fc-38` — shaft at binding 38°, opacity 0.35 (−30%); 18 flecks sunk to
  the lower gap (gap 42%). *Ghost:* fc-ghost-38, deeper crop (20vw/0.08).
  *Rail:* `Absturz` + the fourfold list (p14). *Reading:* threshold well + ONE
  breather after p14 (the plunge paragraph; turbulence turn p15 gets air).
- **p2c31 §39 Totality question** (11 paras, 1403w). *Text:* totality NOT by
  cobbling together elements (p4); anxiety will supply the basis (p6, p11).
  *Art:* `fc-39` — shaft HALTS mid-air (fades by y=560) against a bark stop-line
  (gap 43%); 8 sparse flecks. Quietest scene: a held breath. *Ghost:*
  fc-ghost-39, 19vw/0.07 (half-voice). *Rail:* "not by cobbling together
  elements" (p4) + forward pointer anxiety → care. *Reading:* threshold well;
  no breathers (one sustained question).
- **p2c32 §40 ANXIETY — CLIMAX** (24 paras, 2640w; **Phase-B prototype**).
  *Text:* nowhere yet breath-close (p11); world sunk into insignificance (p12);
  "it was really nothing" (p13); uncanniness/individualization (p15); fear as
  fallen anxiety (p19). *Art:* `fc-40`, class **plate** (taller zone, full
  ledger width) — trunks crowd INWARD; COLD-WHITE vertical pillar (no straw);
  ember floor gradient + 16 ember flecks — the ONLY Div One ember (B5; audited
  §6). *Ghost:* fc-ghost-40, **24vw/0.10**, deep crop. *Rail:* "it was really
  nothing" (p13) + Unheimlichkeit (p15); cold-tick accent. *Reading:* threshold
  well + TWO breathers after p12 and p15 (ember-tinted variant, sole exception).
- **p2c33 §41 CARE — CLIMAX** (19 paras, 2275w). *Text:* the care formula —
  being-ahead-of-oneself-already-in as being-together-with (p6); essentially
  unsplittable (p10). *Art:* `fc-41`, class **plate** — THREE BRAIDED ribbons:
  bright diagonal (ahead-of-itself, 0.62), steady vertical (already-in, 0.5),
  sweeping return (falling, 0.55) + faint 0.45 counter-weave; interleaved so all
  three read at once, never touching at crossings (gap 46%). Gestalt rule: from
  3m the braid reads as ONE luminous event (unsplittable, p10); closer, three
  strands resolve. *Ghost:* fc-ghost-41, 22vw/0.09. *Rail:* the formula in three
  stacked lines with per-line braid-weight ticks. *Reading:* threshold well +
  ONE breather after p6 (silence after the formula).
- **p2c34 §42 Cura fable** (13 paras, 1274w). *Text:* Hyginus fable — Care shapes
  clay at the river; Jupiter/Earth/Saturn; homo from humus (p4–p6); Cura prima
  finxit (p7); thrown project (p9). *Art:* `fc-42` — EARTH-REGISTER: river band +
  waterline, shaping hand (wrist enters top-left, fingers close over clay),
  worked clay lump with thumb-grooves, Saturn's three judgment ticks (gap 47%).
  *Ghost:* fc-ghost-42, 20vw/0.07 (quiet after climax). *Rail:* Latin tags —
  Cura prima finxit / quamdiu vixerit / ex humo (p4, p7). *Reading:* threshold
  well; no breathers; no special fable hook (bare-<p> constraint — opener + rail
  carry the archaic register).
- **p2c35 §43 Reality** (40 paras, 4713w). *Text:* Kant's "scandal" (p11);
  the problem declared impossible (p23); sum = I-am-in-a-world (p34).
  *Art:* `fc-43` — steady shaft (gap 49%) while FALSE FRAMES ignite at their
  corners edge-inward (lichen corners + shaft ember-creep). *Ghost:*
  fc-ghost-43, 20vw/0.08. *Rail:* "a scandal of philosophy" (p11) +
  "I-am-in-a-world" (p34). *Reading:* threshold well + TWO breathers after p23
  and p34 (dissolution paced in two falls).
- **p2c36 §44 TRUTH — CLIMAX** (63 paras, 7106w; longest in Division One).
  *Text:* robbery from concealment (p34); goddess's two paths (p35); "Dasein is
  in the truth" (p28); Newton — laws became true (p52); Es gibt (p61). *Art:*
  `fc-44`, class **banner** (widest + tallest zone in the cohort) — trunks step
  OUTWARD (6 trunks, 384/1216 — widest gap, 52%); luminous gap-field wash; torn
  concealment-edge glowing at the floor; TWO PATHS fork from the goddess-line
  (bright straw discovering-path descends left; dim lichen concealment-path
  curves right). *Ghost:* fc-ghost-44, **24vw/0.10**. *Rail (B7):* PARMENIDES
  RAIL — the two paths as a two-line Fraunces-italic epigraph with forking
  ticks + the Newton note (p52). *Reading:* LONG-CHAPTER RELIEF — 38rem measure,
  threshold well, THREE breathers after p20 (Fundament), p35 (two paths), p52
  (Newton): four movements across 63 paragraphs.

Neighbor-differentiation check (no two adjacent openers share a read):
35 scattered-all-over vs 36 pulled-right; 36 off-axis vs 37 doubled-in-place;
37 doubled vs 38 plunging-steep; 38 steep-dim vs 39 halted-midair; 39 withheld
vs 40 cold-pillar-on-ember (the inversion); 40 abyss vs 41 woven-gathering;
41 luminous braid vs 42 earthen hand; 42 material-quiet vs 43 burning-frames;
43 frames-burning vs 44 gap-blaze (widest light in Division One).

## 4. Ghost-numeral table (B2 — validator compares table vs renders)

All: Fraunces 300, fill mist, LEFT-BLEED (cropped by viewport left edge),
implemented as authored per-ID symbols fc-ghost-35…44 + body[data-chapter]
placement rules (NOT a badge component; no centering).

| Chapter | Symbol | Size | Opacity | Crop | Note |
|---|---|---|---|---|---|
| p2c27 §35 | fc-ghost-35 | 20vw | 0.07 | x −2%, y −6% | baseline left-bleed |
| p2c28 §36 | fc-ghost-36 | 20vw | 0.07 | x −2%, y −6% | fights the right-leaning shaft |
| p2c29 §37 | fc-ghost-37 | 20vw | 0.08 | x −2%, y −6% | semblance thickens |
| p2c30 §38 | fc-ghost-38 | 20vw | 0.08 | x −3%, y −4% | deeper crop — carried down |
| p2c31 §39 | fc-ghost-39 | 19vw | 0.07 | x −2%, y −6% | half-voice |
| p2c32 §40 | fc-ghost-40 | 24vw | 0.10 | x −4%, y −2% | largest; dread crowds the title |
| p2c33 §41 | fc-ghost-41 | 22vw | 0.09 | x −2.5%, y −5% | gathering presence |
| p2c34 §42 | fc-ghost-42 | 20vw | 0.07 | x −2%, y −6% | quiet after climax |
| p2c35 §43 | fc-ghost-43 | 20vw | 0.08 | x −2%, y −6% | steady |
| p2c36 §44 | fc-ghost-44 | 24vw | 0.10 | x −2.5%, y −5% | culminating; bright as §40 but warm |

<640px: ghost becomes a cropped backdrop (opacity −0.02, scale 1.2, top-anchored).

## 5. Engineer implementation spec (CSS hooks + breather indices + edge cases)

### 5.1 Slot fill (v1.1 declarative — no book JS)
Supervisor merges `design/falling-care.json` into `design/chapters.json`;
reader.js inlines `{src:"art/falling-care.svg", symbol:"fc-NN"}` into
`#chapter-art` and sets `body[data-art]` from `motif`. Class treatments on the
slot: `motif` (p2c27–p2c31, p2c34, p2c35 — standard art zone), `plate` (p2c32,
p2c33 — taller zone, full ledger width), `banner` (p2c36 — widest + tallest).
Ghost: inline `<svg class="fc-ghost"><use href="…#fc-ghost-NN"/></svg>` (or
equivalent inline `<text>`) positioned per Table §4; font-family MUST be
`Fraunces, Georgia, serif` (falls back to Georgia offline).

### 5.2 body[data-chapter] scoping (binding §4.7)
All cohort CSS is scoped to `body[data-chapter="p2c27"]` … `["p2c36"]` (plus
shared cohort selectors listing own IDs only). Available hooks:
`body[data-book="being-and-time"][data-part-id="part-2"][data-chapter="<id>"]`,
`#chapter-art`, `#chapter-meta` (+`.meta-part/.meta-title/.meta-number`),
`#chapter-text p` (+`:first-of-type`), `#chapter-nav`, `.toc-chapter/.toc-num`.
Pseudo-elements on these are allowed and are the primary CSS art vehicle.
NEVER touch theme.css, index.html, shared/**, prose, or sibling cohorts' files.
NEVER use `linear-gradient` bars as shafts (B1 auto-REVISE); the file's
*gradient defs* are interior fills of authored SVG polygons — that is compliant.

### 5.3 Breather indices (explicit per-paragraph rules — no modulo)
`#chapter-text` holds bare `<p>` only; breathers are `p:nth-of-type()` rules
adding top margin + the `fc-flecks-row` background, ONLY at these authored
indices (1-based paragraph numbers, verified against chapter JSON):
- p2c30: after p14 → rule on `p:nth-of-type(15)`.
- p2c32: after p12 and p15 → rules on `p:nth-of-type(13)` and `(16)`;
  ember-tinted row variant (sole exception).
- p2c33: after p6 → rule on `p:nth-of-type(7)`.
- p2c35: after p23 and p34 → rules on `p:nth-of-type(24)` and `(35)`.
- p2c36: after p20, p35, p52 → rules on `p:nth-of-type(21)`, `(36)`, `(53)`;
  + 38rem measure for the chapter.
- p2c27/28/29/31/34: NO breathers (short, single-movement chapters).
Fragility note: indices are 1-based over ALL `<p>` children; if the curator ever
re-segments prose, the supervisor re-verifies these five rules (cheap: the JSON
records the anchor sentences in §3).

### 5.4 Threshold first-paragraph well (B4)
`p:first-of-type` → Fraunces 21px/1.6 on `--bt-under` well, full measure, clear
inset + size step so it reads designed, not buggy. If prototype review fails it,
fallback: quiet Source Serif + shaft tick in the margin (ArtDirector-sanctioned).
Applies to all 10 chapters.

### 5.5 Grain, motion, themes, contrast (B3/§4.7)
- `fc-grain`/`fc-grain-cold` (feTurbulence): engineer MUST gate behind
  `@media (prefers-reduced-motion: no-preference) and (min-width: 640px)` —
  render shafts without the filter elsewhere (static art remains; B3/B4 hold).
- No animation in the SVG; all shaft/grain animation OFF under
  `prefers-reduced-motion: reduce`.
- Light/sepia: all chapter fills use `var(--bt-*)` so the book token remap
  re-inks them; fixed `#060805` trunk fills + `#F4F7F2` cold accents need
  per-theme overrides via `html[data-theme]`-scoped rules (light: trunks
  `#2A3325`, cold `#FFFFFF`; sepia: trunks `#3A3423`, cold `#FFFDF4`) —
  supervisor owns the override block; this was designed for it.
- Contrast: body is mist-on-humus only; shaft/ember/cold NEVER behind paragraph
  text (all art terminates in `#chapter-art` above `#chapter-meta`; breathers
  are inter-paragraph strips). Validator computes mist-on-humus ≥7:1 composited.

### 5.6 Prototype + review checklist for the engineer
1. Wire p2c32 FIRST (Phase-B prototype chapter) + p2c33 + p2c36; screenshot at
   1440×1000 / 820×1180 / 390×844; confirm: cold pillar (no straw in fc-40
   except comments), ember floor present, ghost 24vw/0.10 left-bleed, two
   breathers, threshold well confident.
2. Then p2c35, p2c30, p2c39-adjacent quiet chapters; confirm rail fold <1100px
   and single-column <640px.
3. Confirm Fraunces + Source Serif 4 computed-style (networked review).
4. Confirm `#chapter-art` empty/hidden behavior for chapters outside this
   cohort is untouched.
5. Never regenerate or hand-edit prose; never commit/push (leave working tree).

## 6. Evidence discipline (observed vs computed vs sampled vs not-run)

- OBSERVED (native Eval browser, screenshots viewed): baseline cover (green
  rails + centered Cormorant — the rejected pattern) and baseline §40 opener
  (SS-badge, centered title, justified body) at 1440×1000; all 10 authored SVG
  symbols + breather row rendered inline (= production condition) and critiqued
  across two rounds (braid rewritten from merged blob to interleaved ribbons;
  §42 hand redrawn from beak to wrist-and-fingers; braid opacity spread tuned).
- COMPUTED: SVG parses as XML (23 symbols); manifest validates (10/10 entries,
  part/order/title match chapter JSON + TOC word counts in meta lines, all
  symbols resolve); ember audit — every render token inside fc-40 (defs +
  comments only elsewhere); ghost table values match symbol internals.
- SAMPLED: all 10 chapters' prose at 5+ points each (first/middle/last + motif
  grep for Bodenlosigkeit, Unverweilen, Absturz, uncanniness, care formula, Cura
  Latin, scandal, robbery, two paths, Parmenides, Newton, Es gibt); subsection
  joints verified (p6/p21 §44(a)/(b); §43(a) p7; §43(c) p35).
- NOT RUN: networked font rendering (sandbox blocks Google Fonts — flagged for
  supervisor); final integrated book-page render (engineer phase); contrast
  meter + slot-fill verification (validator phase, RUN against :8000 or
  source-live preview).
