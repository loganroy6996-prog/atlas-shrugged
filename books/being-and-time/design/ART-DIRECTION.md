# Being and Time — ART-DIRECTION.md (supervisor record)

Book: *Being and Time*, Martin Heidegger (1927). Slug `being-and-time`.
Authority: `books/being-and-time/data/toc.json` — **83 sections §§1–83**:
Introduction p1c1–p1c8 (§§1–8) · Division One p2c1–p2c36 (§§9–44) · Division Two p3c1–p3c39 (§§45–83).
Designer comparison: `books/being-and-time/design/directions.md` (3 directions, references, chosen spec).
Status: CHOSEN identity = **Direction A — "The Clearing" (Lichtung)**. This file is the binding build spec.
Phase-2 gate: cohorts conform to THIS file (not to directions.md draft details where they differ).
Reader contract: `.omp/design/READER-CONTRACT.md` v1.0 (STABLE). Conformance
addendum (§9 below): the Clearing identity uses the new `#chapter-art` /
#cover-art slots + `design/chapters.json` declarative manifest (inlined SVG,
no book JS needed), `body[data-part-id]`/`body[data-book]`/`body[data-art]`
hooks, and `@layer` cascade (book CSS unlayered wins). Cohort §5 beats and
§4.7 hook constraints stand; slot/caption capabilities are additive.


## 1. Identity

A dark wood of hand-plotted trunk silhouettes parts around a shaft of warm
straw light that widens, cohort by cohort, from a 4% slit (§1) to a full
100% clearing (§83). The book's own master image (*Lichtung*, §§28/40/69:
ecstatic temporality clears the "there") becomes the reading arc:
forgotten question → dismantling → anxiety → care → death → conscience →
temporality-as-clearing. Division One walks *among the trunks*; Division Two
walks a *night path* (ground deepens, ember joins the shaft) and emerges
*into the clearing*.

Title-swap test: the slit-to-clearing arc, braided care-shafts (§41),
split conscience-beam (§§56–60), three ecstasis horizons (§65+), and
Cartesian grid argued-against (§§19–21) mean nothing transplanted onto any
other book. The design argues the treatise.

Rejected-baseline firewall (binding): NO repeating vertical rail
backgrounds, NO `SS § N` cartouche badge, NO ❧/◇/◆/✦/§ glyph ornaments, NO
modulo/hash tint rhythms, NO centered Cormorant title block, NO drop caps,
NO justified body text. Ghost numerals are per-cohort authored compositions
from the explicit table below, never a badge component.

## 2. Tokens

Dark-first. `--bt-shaft` is display/numeral/shaft/focus only — NEVER paragraph text.

```
--bt-humus:   #0C0F0A   page ground (near-black, green undertone)
--bt-canopy:  #141B12   elevated surfaces (TOC panel, header)
--bt-under:   #1D2619   soft wells (first-para threshold ground)
--bt-ink:     #060805   deepest black (cover vignette, Div Two night ground)
--bt-mist:    #C9D4C3   body text (≥7:1 on humus — validator must compute)
--bt-lichen:  #9DB89A   muted text / secondary
--bt-shaft:   #E9D488   THE accent: clearing light (warm straw)
--bt-ember:   #C96F3B   sparse second accent: §40 + death cohort only
--bt-bark:    #3E4A34   hairlines / borders
```

Light theme: ground `#F5F1E4`, text `#1C231A`, accent `#7A6414`,
muted `#5A6B54`, ember `#A34E22`, hairline `#C9BFA4`.
Sepia theme: ground `#EFE6D0`, text `#232B1F`, accent `#6E5A10`,
muted `#5F6B53`, ember `#A34E22`, hairline `#C4B78F`.
(All other shared theme slots keep working; validators check dark + light + sepia.)

## 3. Typography

- Display: **Fraunces** (Google Fonts variable: opsz + SOFT + WONK; same
  `<link>` mechanism as the current Cormorant link — supervisor adds to
  `index.html`). Fallback `Georgia, "Times New Roman", serif`.
  - Cover title: 96–160px clamp, opsz 144, wght 340, WONK 1, flush-left.
  - Chapter titles: 40–64px clamp, opsz 100, wght 400, leading 1.05,
    tracking −0.01em, flush-left (NEVER centered).
  - German landmark terms: Fraunces italic 1.02em (applied only where the
    supervisor can safely style; prose itself is never edited).
- Body: **Source Serif 4** (Google Fonts; fallback Georgia). 19px / 1.75,
  measure `34rem` (long chapters §§68/69/83: `38rem`), LEFT-aligned,
  ragged right, hyphenation on for long compounds.
- Kicker/meta: Source Serif 4, 12px, 0.22em tracking, lichen. ONE kicker
  line per opener (`Part · § N · words · min`), then silence. No ALL-CAPS
  eyebrows anywhere else.
- Scale: 12 / 15 / 19 / 24 / 32 / 48 / 72 / 112.
- Ghost numerals: Fraunces 300, 18–24vw, mist at 7–10% opacity, cropped by
  viewport edge per cohort placement. Implemented as explicit per-ID
  `#chapter-meta::before { content: "NN" }` rules (authored table, §4.7).

## 4. Composition rules

### 4.1 Opener ledger (all 83 chapters)
Grid: [ghost numeral gutter 22%] + [title column 52%] + [margin rail 26%
at ≥1100px only]. <1100px: rail folds under title as horizontal strip.
<640px: single column; ghost numeral becomes cropped backdrop. Title
flush-left. Meta line under title. Shaft art enters top-right, terminates
ABOVE the first paragraph — never behind body text.

### 4.2 The shaft
One authored SVG light-shaft per opener (skewed polygon + grain), angle
12°–38° per cohort table. Cohorts deliver shaft variants inside their
owned `art/<cohort>.svg` as `<symbol>`s; supervisor wires them as
`#chapter-meta` background layers.

### 4.3 First paragraph ("threshold")
NO drop cap. First paragraph set as threshold: Fraunces 22px for its first
~3 lines is approximated by styling `p:first-of-type` in Fraunces 21px /
1.6 on a soft `--bt-under` well, full measure. (Pure-CSS: reader renders
`<p>` elements only — verified in shared/reader.js renderChapter.)

### 4.4 Meta line
`Part · § N · words · min` in one 12px lichen line. The § numeral lives
LARGE in the ghost gutter, SMALL in the meta line, NOWHERE else.

### 4.5 Reading body
Calm: mist on humus, 34rem, paragraph spacing 1.1em. No blockquote/hr
hooks exist in the reader (paragraphs only) — so quotation wells and
floor-breaks are implemented as: threshold well (first para), and
"breather" spacing + fleck dividers delivered via CSS on
`#chapter-text` backgrounds keyed per chapter (explicit rules, no modulo).

### 4.6 Navigation
- TOC drawer: canopy ground; part headers Fraunces italic with a shaft
  tick whose width = cohort gapWidth (arc in miniature); rows Source
  Serif 15px, § numerals 13px lichen, NO badges; active row 2px shaft
  left edge; read rows dim 55%.
- Progress: 2px shaft beam. Cover gap widens 0–8% with overall progress.
- Prev/Next: quiet text links with Fraunces § numerals; no cards.
- Shared chrome structure untouched (ReaderLead-owned); theme re-skins.

### 4.7 Hard rendering constraints (binding on all cohorts)
1. `#chapter-text` contains ONLY `<p>` elements (+ `#chapter-error` when
   failed). Cohort CSS MUST NOT rely on blockquote/hr/figure/img hooks.
2. Available hooks: `body[data-part="1|2|3"]`, `body[data-chapter="<id>"]`,
   `#chapter-meta` (+`.meta-part/.meta-title/.meta-number`), `#chapter-text
   p` (+`:first-of-type`), `#chapter-nav`, `.toc-chapter/.toc-num`,
   `#cover` subtree, header/progress IDs. Pseudo-elements on these are
   allowed and are the primary art vehicle (with authored SVG backgrounds).
3. Cohort CSS: ONLY `body[data-chapter="<own-id>"]`-scoped rules (+ shared
   cohort selectors listing own IDs). NEVER touch theme.css, index.html,
   shared/**, prose, or another cohort's files.
4. Cohort JSON manifest: keyed by REAL chapter ID; each entry records
   part + sequential order + full title (cheap remap), content rationale,
   palette role, motif/asset, opener composition, reading treatment.
5. SVG art: authored paths only; feTurbulence grain gated — rasterize or
   disable under `prefers-reduced-motion` / narrow widths (GPU note).
6. Reduced motion: all shaft/grain animation OFF under
   `prefers-reduced-motion: reduce`; static art remains.

## 5. Cohort map (authoritative boundaries — already assigned & working)

Designer brief chapters are mapped onto these 7 working cohorts (file
names fixed; leads already own them):

| # | Cohort (files) | Chapters | Arc beat | gapWidth | Shaft | Ghost | Ember |
|---|---|---|---|---|---|---|---|
| 1 | intro-world | p1c1–p1c8 (§§1–8) + p2c1–p2c6 (§§9–14) | the slit → among trunks | 4→20% | 34° steep | top-crop (Intro), left-bleed (Div One) | no |
| 2 | equipment-space | p2c7–p2c16 (§§15–24) | tools → grid argued-against → space | 20→30% | 28° | left-bleed | no |
| 3 | they-self | p2c17–p2c26 (§§25–34) | leveling They → attunement | 30→38% | 26°, softening | left-bleed | no |
| 4 | falling-care | p2c27–p2c36 (§§35–44) | idle talk → ANXIETY → CARE → TRUTH | 38→52% | 38° dimmed→braided (3 shafts §41) | left-bleed | §40 ONLY |
| 5 | death-conscience | p3c1–p3c16 (§§45–60) | NIGHT PATH: death → conscience | path-beam (narrow) | single beam §53; split/rejoin §§56–60 | right-bleed | p3c3–p3c9 floor |
| 6 | temporality | p3c17–p3c27 (§§61–71) | resoluteness → TEMPORALITY horizons | 55→75% | rejoin §62; horizon lines §65+ | right-bleed | no |
| 7 | historicity-finale | p3c28–p3c39 (§§72–83) | strata → CLEARING → finale | 75→100% | horizons; §83 full glow, no trunks | top-crop | no |

Chapter-level authored notes (cohort-agnostic, binding):
- p1c1 (§1): cover-adjacent opener; widest margin rail w/ Sophist epigraph.
- p1c6 (Destruktion): single leaning trunk (−4°) — tradition tilted.
- p1c7 (method): widest shaft in cohort 1 — method lets light in.
- p2c7–p2c10 (equipment): floor flecks become TOOL-SHADOWS — flat SVG
  pictograms (hammer, signpost, lattice) lying in the light.
- p2c11–p2c13 (res extensa critique): shaft INTERRUPTED by hard
  Cartesian grid overlay (the grid visually argued-against).
- p2c19 (the They): 12 even regularized trunks — leveling; shaft narrows.
- p2c27/28/29 (idle talk/curiosity/ambiguity): scattered / margin-pulled /
  doubled fleck fields. p2c30 (falling): shaft 38°, dimmed 30%.
- p2c32 (§40 anxiety): ember floor + cold-white shaft (only Div One ember).
- p2c33 (§41 care): THREE BRAIDED shafts (existentiality/facticity/falling).
- p2c36 (§44 truth, 7106w): Parmenides epigraph rail; fullest Div One light.
- p3c9 (§53 authentic being-toward-death): SINGLE vertical beam, NO trunks.
- p3c10–p3c16 (conscience): shaft SPLITS in two and rejoins (caller/called).
- p3c18 (§62 resoluteness): beams fully rejoined — brightest pre-temporality.
- p3c21 (§65): THREE HORIZONTAL ecstasis lines enter (future/having-been/present).
- p3c24 (§68, 5994w) + p3c25 (§69, 6697w) + p3c39 (§83, 11324w): long-chapter
  relief — 38rem measure, breather spacing, rail mini-map "you are here".
- p3c28–p3c33 (history): flecks settle into STRATA (sediment lines).
- p3c39 (§83 finale): gapWidth 100% — no trunks, full clearing glow, title
  in shaft color, NO closing ornament (silence is the ending). Style prose
  as served (back-matter paras 4+ are a text/contract question for
  Main/ReaderLead; no workaround edits).

## 6. Asset plan (all authored SVG; supervisor integrates)

Supervisor-owned shared assets (in `art/`):
- `cover-clearing.svg` — full-bleed cover scene (~9 trunks, 8% gap, grain).
- `shaft.svg` — parametric shaft symbol (angle/width via CSS vars).
- `trunks-div1.svg`, `trunks-div2.svg` — part-divider skylines (distinct).
- `floor-flecks.svg` (3 densities), `strata.svg`, `tool-shadows.svg`,
  `grid-cartesian.svg`, `horizons.svg`, `beam-single.svg`, `beam-split.svg`.

Cohort-owned: `art/<cohort>.svg` (cohort symbols), `design/<cohort>.json`
(manifest), `design/<cohort>.css` (scoped rules) — 7 cohorts as in §5.
Build wiring (art/ + design/ into _site) is supervisor→Main/ReaderLead
business; cohorts deliver standalone files.

Fonts: Fraunces + Source Serif 4 via Google Fonts `<link>` in index.html
(same mechanism as today); Georgia/serif fallback. Supervisor confirms
computed-style effect in screenshots.

## 7. Prototype scope (Phase B) + review
Cover + 4 openers: p1c1 (§1 slit + Sophist rail), p2c32 (§40 ember +
cold shaft), p3c9 (§53 single beam), p3c39 (§83 full clearing).
Reviewed by ArtDirector + independent library-validator (screenshots at
1440×1000 / 820×1180 / 390×844); REVISE findings fixed before expansion.

## 8. Coverage ledger (supervisor-maintained)
- 83/83 IDs assigned across 7 cohorts (14+10+10+10+16+11+12 = 83 ✓).
- Per-cohort status + review verdicts recorded in `design/COVERAGE.md`.
- Census at assembly: every TOC ID resolves, every chapter has a manifest
  entry, every referenced asset exists in the built site, every treatment
  activates (computed-style/observed, never selector-count claims).

## 9. Reader-contract v1.0 conformance addendum

Frozen contract: `.omp/design/READER-CONTRACT.md` v1.0 (STABLE, ReaderLead).
How the Clearing identity uses it (additive; nothing in §§1–8 is weakened):

1. **Art slots.** Opener art goes in `#chapter-art` (declarative: reader.js
   inlines the manifest `src` SVG above `#chapter-meta`; empty slot stays
   `hidden` and shifts no text rhythm). Cover scene goes in `#cover-art`.
   Ghost-numeral + shaft-composition rules (§§3–4) are implemented as slot
   SVG + `body[data-chapter]`-scoped CSS — NOT CSS-background-only, but no
   book JS is required either. No book-owned JS is planned; if a cohort
   needs JS it must listen for `reader:chapter` and touch only the slots.
2. **Manifest.** Cohorts keep authoring `design/<cohort>.json` (content
   rationale + art params per chapter). Supervisor merges them sequentially
   into `design/chapters.json` per §4 schema (`cover`/`default`/`chapters`
   with `src` under `art/`, `class` treatments `banner|plate|motif`,
   `motif` ids setting `body[data-art]`, `caption` figcaptions). All
   entries keyed by real TOC ID + annotated part/order/title.
3. **Hooks.** Prefer `body[data-part-id]` (`part-1|part-2|part-3`) and
   `body[data-book="being-and-time"]` over the legacy `data-part` roman;
   keep `body[data-chapter]` scoping. `body[data-art]` carries the motif
   id for motif-keyed CSS. `body[data-view]` distinguishes cover/reader.
4. **Cascade.** Shared CSS ships in `@layer shared`; book CSS
   (`theme.css`, `design/*.css`) is UNLAYERED and wins on specificity.
   Cohort CSS stays `body[data-chapter]`-scoped; book classes inside the
   slots are exclusively ours. Reserved `reader-*` class prefix is never
   minted by book files. Token overrides scoped per-theme (§8 list).
5. **Reader facts reused, not re-specified:** 8 themes + auto (dark-first),
   per-book `reader-being-and-time` storage, frozen `data-action` set,
   keyboard map, 80%-depth read marking, paragraph classifiers
   (`.reader-nb`, `.no-drop`). Endnote machinery (§6) is IJ-scoped; Being
   and Time has no notes part and uses none of it.
6. **Build.** `scripts/build_site.sh` ALREADY ships `books/<slug>/art/**`
   and `books/<slug>/design/**` (verified in source) — the cohort
   integration flag is answered: no build change needed for art/manifest/
   fonts; supervisor verifies presence in `_site`, not just source.
7. **Paragraphs-only confirmed.** Contract §5: chapter JSON carries string
   paragraphs; reader renders `<p>` (+ classifiers). §4.7 constraints and
   the §4.7 note about threshold wells / breather spacing / fleck dividers
   via per-chapter explicit rules stand unchanged.


## 10. v1.1 addendum conformance + ArtDirector verdict (binding)

ArtDirector verdict: **PROVISIONAL PASS** ("The Clearing" approved; full
text: `.omp/design/critiques/being-and-time.md`). Binding conditions B1–B8
are incorporated here; cohorts treat them as spec:

- **B1 — Shafts are SVG art, never CSS stripes.** Authored skewed
  polygons + grain inlined into `#chapter-art`; a `linear-gradient` bar
  in `#chapter-meta` is automatic REVISE.
- **B2 — Ghost numerals authored + verified.** Fraunces 300, 18–24vw,
  7–10% opacity, cropped per cohort placement (top-crop Intro,
  left-bleed Div One, right-bleed Div Two night, top-crop finale).
  No badge-like centering. Validator checks table vs renders.
- **B3 — Light NEVER behind body text.** Shafts terminate above the
  first paragraph; flecks only in opener zones + explicit breather
  rules. Mist-on-Humus must meter ≥7:1 composited (validator computes).
- **B4 — Threshold must read designed.** First-para Fraunces 21px well
  must be confident (clear inset, clear size step) or it reads as a bug.
  Fallback if prototype review fails it: quiet Source Serif + shaft
  tick in margin. Prototype judges this explicitly.
- **B5 — Ember discipline.** Ember ONLY in p2c32 (§40) + p3c3–p3c9
  floor. Anywhere else collapses the one-light system.
- **B6 — Finale silence.** p3c39: 100% clearing, no trunks,
  shaft-color title, NO closing ornament. Prose styled as served.
- **B7 — Long-chapter relief mandatory.** p3c24/p3c25/p3c39: 38rem +
  breathers + rail mini-map; p2c36: Parmenides rail.
- **B8 — Fraunces registry.** Light 300–400 + opsz 100–144 + WONK 1 +
  flush-left ledger + straw light is the separator vs other books —
  hold all five, never drift toward black/poster/masthead voices.
- **Type correction.** Binding type is Fraunces + Source Serif 4 (this
  file). directions.md §C lines (Cinzel/Newsreader/Noto) are superseded
  everywhere — no cohort works from them.
- **File-name correction.** Census checks exact names:
  `art/<cohort>.svg` + `design/<cohort>.json` + `design/<cohort>.css`
  for cohorts intro-world, equipment-space, they-self, falling-care,
  death-conscience, temporality, historicity-finale.

Contract v1.1 (STABLE): manifest entries use the explicit **`symbol`**
key — `{ "src": "art/<cohort>.svg", "symbol": "<id>" }`. Fragment-URL
`src` form is superseded (still honored, but all new manifests MUST use
`symbol`). Cohort SVGs therefore author one `<symbol id="…">` per
chapter treatment (+ shared shaft/ghost symbols); cohort JSON records
the `symbol` id per chapter entry for the supervisor's sequential merge
into `design/chapters.json`. Cover scene: supervisor-owned
`art/cover-clearing.svg` (+ `symbol` if sprited).
