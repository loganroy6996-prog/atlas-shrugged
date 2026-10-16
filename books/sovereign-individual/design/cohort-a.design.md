# Cohort A (A-rupture) — Chapter Art Design Spec

**Book:** The Sovereign Individual (`sovereign-individual`) · **Chapters:** p1c1–p1c4
**Owner:** SovCohortADesigner · **Date:** 2026-10-15 · **Status:** draft for engineer + lead review
**Outputs:** this file + `design/cohort-a.json` (only files this designer writes)

## 0. Conformance (binding inputs — read first)

1. **Book identity Final:** SPECIE — The Private Banknote (`design/ART-DIRECTION-DRAFT.md`,
   `design/directions.md`, `design/manifest-draft.json`). Vault `#0B100E`, Bone `#ECE3CC`,
   Specie `#D2A72C`, Copper `#B26A3B`, Verdigris `#5DA88A`, Seal `#9E3B2E`;
   Bodoni Moda (display) + Source Serif 4 (body) + IBM Plex Mono (microtext/data).
2. **ArtDirector verdict: PASS WITH BINDING CONDITIONS S1–S8**
   (`.omp/design/critiques/sovereign-individual.md`). This spec is written to satisfy every
   condition; §8/§11 map each binding condition to concrete geometry.
3. **READER-CONTRACT v1.0 STABLE** (`.omp/design/READER-CONTRACT.md`): `#chapter-art`
   `<figure>` auto-injected above `#chapter-meta`; manifest `src` SVG inlined into it;
   `class` = book treatment (`plate`); `motif` sets `body[data-art]`; unlayered book CSS
   beats `@layer shared`; book-owned JS via `reader:chapter` only, slots-only.
4. **Supervisor conform notices:** plates named `art/plate-p1c1.svg` … `art/plate-p1c4.svg`
   (one file per chapter, disjoint from other cohorts); cohort JSON keyed p1c1–p1c4;
   CSS keys off `body[data-art]`; **p1c1 plate to prototype standard FIRST** — confirmed:
   §8.1 is the fully nailed p1c1 composition the engineer builds first; p1c2–p1c4 follow
   after prototype review.
5. **Motif ids** (conform identity manifest + `ART-DIRECTION-DRAFT §3` selector example):
   `asymptote` · `strata` · `furrow` · `fallen-capital`. The supervisor's longer aliases
   (`millennium-asymptote`, …) were considered and rejected for consistency with the
   already-specified `body[data-art="asymptote"]` selectors and `manifest-draft.json`.
6. **Benchmark:** homepage creative bar (`.omp/design/USER-FEEDBACK.md`) is met through
   SPECIE authorship — engraved plates, true microtext, ledger enumerations, broadside
   ballad, assay progress, plate turners, per-chapter end-marks — never by copying the
   homepage's look. Reading body stays calm; ambition lives in openers + marginal detail.

## 1. Cohort arc

**A-rupture: the old order breaks.** Millennial dread (p1c1) → stage theory (p1c2) →
the agrarian precedent (p1c3) → politics dying (p1c4).
**Ink arc:** gold → copper → verdigris → oxide — announcement decaying into ruin.
Denominations I–IV of the eleven-note set; shared plate frame (§4) makes them one
currency, rosette + vignette + microtext make them four notes (S4).

```
p1c1  THE TRANSITION IN THE YEAR 2000 ................ I   Specie lead   asymptote
p1c2  MEGAPOLITICAL TRANSFORMATIONS ................. II  Copper lead   strata
p1c3  EAST OF EDEN .................................. III Verdigris     furrow
p1c4  THE LAST DAYS OF POLITICS ..................... IV  Copper+Seal   fallen-capital
```

## 2. Tokens

Identity tokens (authoritative, from `ART-DIRECTION-DRAFT §1`):

| Name      | Hex     | Cohort role |
|-----------|---------|-------------|
| Vault     | #0B100E | plate ground, page ground |
| Ledger    | #121915 | elevated panels, drawer rows |
| Bone      | #ECE3CC | body text, microtext rings (13.9:1 on Vault) |
| Muted     | #A89C7C | captions, secondary (7.4:1) |
| Faint     | #6E654E | hairline labels only, never small text |
| Specie    | #D2A72C | display, denomination numerals, assay fill (7.1:1) |
| Copper    | #B26A3B | plate lines, vignette rules — GRAPHICS ONLY (4.0:1, S3) |
| Verdigris | #5DA88A | p1c3 plate line-work lead ONLY (S3); never body text |
| Seal      | #9E3B2E | p1c4 fracture echo + ledger stamps — GRAPHICS ONLY (3.4:1, S3) |

**S3 discipline (binding):** all lettering on all four plates is Specie (denominations,
lockups, graph labels), Bone (microtext), or Muted (plate caption). Copper/Seal/Verdigris
never render text of any size — including TOC numerals (see §9.5: numerals stay Specie,
chapter ink appears only in the rosette mini-mark graphic).

Per-chapter CSS lead (book CSS sets on `body[data-art]`):

```css
body[data-art="asymptote"]      { --ink-lead:#D2A72C; --ink-second:#B26A3B; }
body[data-art="strata"]         { --ink-lead:#B26A3B; --ink-second:#D2A72C; }
body[data-art="furrow"]         { --ink-lead:#5DA88A; --ink-second:#ECE3CC; }
body[data-art="fallen-capital"] { --ink-lead:#B26A3B; --ink-second:#9E3B2E; }
```

Author plate SVGs with `var()` so themes remap without re-authoring:
`--plate-bg` (default Vault), `--plate-lead`, `--plate-second`, `--plate-bone`,
`--plate-muted`. Dark-family themes (nocturne/verdant/oxblood/candlelight/slate):
`--plate-bg` follows that theme's `--bg`, line inks unchanged. Light/sepia:
`--plate-bg:#F2ECDA`, `--plate-lead:#7A5F10`, `--plate-second:#8A4A24`,
`--plate-bone:#241F12`, `--plate-muted:#6B5A40` (per identity §1 remap).

## 3. Typography

| Family (Google Fonts, supervisor adds link) | Role | Fallback |
|---|---|---|
| Bodoni Moda 500/700 (+italic) | chapter titles, denomination numerals, `2000` graph label, major heads | Didot, Georgia, serif |
| Source Serif 4 400/600 (+italic) | reading body, minor heads, quotes | Georgia, serif |
| IBM Plex Mono 400/500 | plate lockups, microtext rings, band labels, ledger numerals, word counts | ui-monospace, monospace |

Scale: chapter title `clamp(2rem,4.5vw,2.75rem)`; body `1.125rem/1.75`, ≤68ch;
microtext 13 units in a 600-unit viewBox (≈7.4px at 340px rail — legible; at 390px
banner it becomes honest line-work per S5). **S6:** Bodoni display-only; at 390px bump
title weight 500→600, never size.

## 4. Opener composition system

Declarative delivery per contract §4: `design/chapters.json` entries
(`src`/`class:"plate"`/`motif`/`caption`) inline each plate into `#chapter-art`
above `#chapter-meta`. Book CSS reframes the pair as the asymmetric plate grid:

**Desktop ≥900px — plate rail (38/62):**

```
┌─ .reader-body (grid: 340px 1fr, gap 3rem) ────────────────┐
│ ┌─ #chapter-art.plate ─┐  ┌─ .chapter-meta (left) ─────┐ │
│ │ viewBox 600×760      │  │ PART I · ELEVEN CHAPTERS   │ │
│ │ meet, width 100%     │  │ Title (Bodoni, 2.75rem)    │ │
│ │ ~340×431 rendered    │  │ CHAPTER 1 · meta-sub       │ │
│ │ [rosette + vignette  │  │ copper rule (left)         │ │
│ │  + cartouches I×4]   │  │ epigraph frame (p1c1/p1c2) │ │
│ └──────────────────────┘  └────────────────────────────┘ │
│ ┌─ #chapter-text (grid-column 1/-1, quiet column) ───────┐ │
└──────────────────────────────────────────────────────────┘
```

**<900px — banner:** single column; `#chapter-art.plate` full-width, fixed height
320px, SVG `preserveAspectRatio` switched to `xMidYMid slice` by sanctioned book JS
(slot-only, on `reader:chapter` + resize; default attribute `meet` so no-JS still shows
the whole plate). **Plates are never hidden on phones (S1).**

Grid CSS sketch (engineer owns exact declarations):

```css
@media (min-width:900px){
  body[data-book="sovereign-individual"][data-chapter] .reader-body{
    display:grid; grid-template-columns:minmax(300px,340px) 1fr; column-gap:3rem;}
  body[data-book="sovereign-individual"][data-chapter] #chapter-art.plate{grid-column:1;grid-row:1;align-self:start;}
  body[data-book="sovereign-individual"][data-chapter] .chapter-meta{grid-column:2;grid-row:1;align-self:center;text-align:left;}
  body[data-book="sovereign-individual"][data-chapter] .meta-rule{justify-content:flex-start;}
  body[data-book="sovereign-individual"][data-chapter] #chapter-text,
  body[data-book="sovereign-individual"][data-chapter] .chapter-nav,
  body[data-book="sovereign-individual"][data-chapter] .chapter-error{grid-column:1/-1;}
}
```

Shared-ornament overrides (unlayered book CSS wins; S2 firewall — no generic ornaments
on book chapters): `.chapter-meta::after{display:none}` (shared fleuron),
`.meta-number::after{content:none}` (shared diamond), `.meta-number::before{content:none}`
(baseline `○` badge — the rejected pattern). The plate carries all ornament.

## 5. Three cohort directions compared (within SPECIE)

Book-level SPECIE/RHUMB/CIPHER is decided (§0.1); per the cohort brief these three
explore *within* the SPECIE grammar:

- **A. Vignette-Plate (CHOSEN).** Rosette + central content vignette + circular
  microtext ring + four denomination cartouches + lockups. Unites the money thesis
  (denomination set coherence) with chapter content (vignette = the chapter's own
  image: asymptote graph, stage stack, furrows, fallen capital). S4 distinctness comes
  from rosette geometry AND vignette AND microtext — three independent axes.
  Prototype-validated (§8.1, viewed rail + banner).
- **B. Ledger-Broadsheet (REJECTED).** Full-width tabular data-plate: chapter as assay
  table (p1c2's summary points, p1c4's scandal roll as ledger rows). Grounded, but reads
  as document rather than currency; collapses at banner scale into fake-table texture
  (S5 risk); doesn't scale to p1c3 (agrarian, no figures); duplicates the TOC ledger's
  language instead of contrasting with it.
- **C. Seal-Medallion (REJECTED).** One large stamped glyph per chapter (arrow, bars,
  plow, broken column) on bare Vault. Iconic but thin: four seals read as an icon set,
  not denominations; fails the S1 density test and the S4 genuine-eleven test; one step
  from the rejected numeral-badge pattern with better drawing.

**Self-review vs. generic defaults:** rejected centered stack (asymmetric grid instead),
rejected glow/gradient (flat inks only, S2), rejected modulo tinting (content vignettes),
rejected ALL-CAPS eyebrows above every head (identity small-caps heads kept only where
the text supplies real heads, §9.1), rejected `→` buttons and `·`-chain meta sparks.
Boldness is spent in one place: the engraved plate. Everything around it is quiet.

## 6. References studied (cohort-level; identity R1–R6 inherited)

- **D1. Albrecht Dürer, Four Horsemen of the Apocalypse, from "The Apocalypse," ca.1497/98,**
  woodcut, Met 397057 (`https://www.metmuseum.org/art/collection/search/397057`,
  image binary fetched 2026-10-15). Dense black-line apocalyptic unveiling — informs
  p1c1's vignette framing (revelation as diagram, not glow) and p1c4's ruin hatching.
- **D2. Compass rose, Catalan Atlas (1375)** (`https://upload.wikimedia.org/wikipedia/commons/d/d2/Compass_rose_from_Catalan_Atlas_%281375%29.jpg`,
  binary fetched). Concentric radiating geometry + ring inscription — informs rosette +
  microtext-ring construction.
- **D3. Bank of Canada Museum, "The art of guilloche" (2020)**
  (`https://www.bankofcanadamuseum.ca/2020/07/the-art-of-guilloche`, read in full).
  Spirograph/hypotrochoid lathe rosettes as anti-counterfeit line-work — informs the §7
  generator and S1 stroke budgets.
- **D4. William Playfair, Commercial and Political Atlas, 1786** (copper-plate
  time-series charts; Wellcome `works/f3usntv8`, LoC Inside Adams 2026-04). The
  engraved statistical chart — informs p1c1's asymptote graph and p1c2's strata bands
  as period-correct data engraving. (The book itself cites Playfair's 1805 *Enquiry*,
  p1c1 "Another Megapolitical Pioneer" — the reference is text-grounded, not decor.)
- Baseline rendered and viewed: cover + p1c1 opener at 1440px (`:8000`,
  `body[data-chapter="p1c1"]` confirmed, no `#chapter-art` slot yet — pre-landing).

## 7. Rosette generator (S4: eleven genuinely distinct)

All rosettes are hypotrochoid paths (D3). Engineer regenerates exactly with:

```
x(t) = (R−r)·cos t + d·cos(((R−r)/r)·t) + cx
y(t) = (R−r)·sin t − d·sin(((R−r)/r)·t) + cy
t ∈ [0, 2π], n = 1080 segments, path "M…L…Z", stroke-linejoin round
center (cx,cy) = (300,340) unless stated
```

| Plate | Layer | R | r | d | Petals | Ink | Stroke | Dash | Transform |
|---|---|---|---|---|---|---|---|---|---|
| p1c1 | L1 | 132 | 11 | 52 | 12 | Specie | 2.25 | solid | — |
| p1c1 | L2 echo | 96 | 8 | 38 | 12 | Specie .75 | 2 | solid | — |
| p1c2 | A | 150 | 25 | 48 | 6 | Copper | 1.75 | solid | — |
| p1c2 | B | 126 | 18 | 40 | 7 | Copper | 1.5 | 6 3 | — |
| p1c2 | C | 110 | 22 | 36 | 5 | Copper | 1.5 | 2 4 | — |
| p1c2 | D | 88 | 11 | 30 | 8 | Copper | 2 | solid | — |
| p1c3 | L1 | 120 | 15 | 44 | 8 | Verdigris | 2.25 | solid | stretch §8.3 |
| p1c3 | L2 | 88 | 11 | 32 | 8 | Verdigris .8 | 1.75 | 8 3 | stretch §8.3 |
| p1c4 | L1 | 135 | 15 | 46 | 9 | Copper | 2.25 | solid | — |
| p1c4 | echo | 135 | 15 | 46 | 9 | Seal .9 | 1.75 | 4 3 | translate+rotate+wedge §8.4 |

S4 axes per plate: petal count (12 / 6·7·5·8 / 8 stretched / 9 fractured) × layer count
(2 / 4 / 2 / 2) × dash rhythm × lead ink (Specie / Copper / Verdigris / Copper+Seal).
No two plates share more than one axis value.

## 8. Per-chapter plate specifications

Common frame (all four; denomination coherence). viewBox `0 0 600 760`.
Background rect `0,0,600,760` fill `var(--plate-bg,#0B100E)`.
Outer border rect `10,10,580,740` stroke lead 2.5; inner rect `22,22,556,716` stroke
lead 1. (No scallop lathe border on chapter plates — density budget reserved for
rosette+vignette+microtext; lathe borders belong to cover + TOC per S1.)
Corner cartouches `54×54` at `(30,64) (516,64) (30,642) (516,642)`, stroke lead 1.5,
numeral Bodoni 700 30px Specie centered. Top lockup y=52: Plex Mono 12px ls 3 Specie
`PRIVATE ISSUE · SERIES 1997`. Bottom caption y=714: Plex Mono 11.5px ls 2 Muted
(per-chapter text below). Witness circle r=196 center (300,340) lead 1.5–2 dash `2 6`
(p1c3: ellipse, §8.3). Microtext ring: circular path r=222
`M78,340 A222,222 0 1,1 522,340 A222,222 0 1,1 78,340`, Plex Mono 13px ls 1 Bone,
`textLength="1390" lengthAdjust="spacingAndGlyphs"` (S5: every ring states a true thing
from its chapter; textLength keeps the ring closed whatever the repeat count).

### 8.1 p1c1 — asymptote — PLATE I · THE MILLENNIUM ASYMPTOTE ★ PROTOTYPE-FIRST

*Rationale.* Opens on the year-2000 asymptote itself: Hillis epigraph [0] ("graphs…
soar up to an asymptote just beyond the turn of the century"), Newton/Nostradamus/Jung
forecasts [1–2], "Apokalypsis means unveiling" [4], the four-stages passage [8], the
500-year cycle [~200–210]. The curve-to-vertical is the chapter's own central graph
(D4), drawn as Playfair would have engraved it.
*Palette role:* gold-dominant announcement ink; copper vignette rules; bone microtext.
*Caption (manifest):* `Plate I · The millennium asymptote`.

Rosette: §7 p1c1 L1+L2, Specie. Microtext: `APOKALYPSIS MEANS UNVEILING · ` ×6.
Vignette (vault knockout over rosette center):
- Ellipse `cx300 cy340 rx104 ry126` fill plate-bg, Copper 2; inner ellipse
  `rx96 ry118` Copper 1.
- Hatch: horizontal lines x196→404, y=216..468 step 7, Copper 1.5, clipped to inner
  ellipse (`clipPath` ellipse rx96 ry118).
- Axis: line `216,420 → 384,420` Copper 1.5.
- Asymptote curve: `M216,408 C280,404 330,382 348,306 S357,266 358,258` fill none,
  Specie 2.5.
- Vertical: line `363,258 → 363,428` Specie 2.5 (the year-2000 wall).
- `2000`: Bodoni 700 26px Specie at (363,250) middle-anchored.
- Ticks at x=232/268/304 (lines y414→426, Bone 1.5) with Plex Mono 10px Bone labels
  `500 / 1000 / 1500` at y=438 (the chapter's 500-year cycle marks).
- Cartouche numerals: `I`. Bottom caption: `PLATE I · THE MILLENNIUM ASYMPTOTE`.

*Prototype status:* rail (340px meet) + banner (700px × 320px slice) rendered and
viewed 2026-10-15 — rosette distinct, curve + `2000` wall legible, microtext closed
ring, borders/cartouches crisp, no glow anywhere (S1/S2). Engineer rebuilds to these
numbers as `art/plate-p1c1.svg`; this is the lead prototype deliverable.
*Reading treatment:* §9 + p1c1: epigraph [0] framed; caps heads
[6,26,49,71,96,157]; title heads [13,19,29,34,40,86,101,112,150]; pull [66]
("Soon, the cows will have wings.") framed; Cohen/Stewart quote [110–111] reunited
(§9.2 pairing rule); end-mark `Ⅰ — ASSAYED`.
*CSS key:* `body[data-art="asymptote"]`, fallback `body[data-chapter="p1c1"]`.

### 8.2 p1c2 — strata — PLATE II · FOUR STAGES OF SOCIETY

*Rationale.* "The waning of the Modern Age" historicized through megapolitical stages:
Huizinga epigraph [0–1], foraging→farming→industrial→information (stated p1c1[8],
historicized here), the four megapolitical variables (topography [89], climate
[96–97], microbes [~106–134], technology [~111–124]), summary points [71–79].
*Palette role:* copper-dominant earth/archive ink; gold reserved for the fourth band.
*Caption:* `Plate II · Four stages of society`.

Rosette: §7 p1c2 layers A–D, Copper. Microtext:
`TOPOGRAPHY · CLIMATE · MICROBES · TECHNOLOGY · ` ×3.
Vignette (strata column):
- Outer rect `x228 y226 w144 h228` fill plate-bg, Copper 2; inner rect inset 6 Copper 1.
- Four bands (x234 w132): y232 h51 / y289 h51 / y346 h51 / y403 h45; separators Copper 1.
- Labels Plex Mono 9px centered Bone: `FORAGING / FARMING / INDUSTRIAL / INFORMATION`
  at band midlines (y≈260/317/374/428); fourth label Specie + fourth band left rule
  line `234,403 → 234,448` Specie 2.5.
- No hatch (flat bands hold S1 against the 4-layer rosette behind).
- Cartouches `II`; caption `PLATE II · FOUR STAGES OF SOCIETY`.
*Reading treatment:* epigraph [0–1] paired frame; caps heads [2,55,87,125]
(`L1FE` [55] set as-served — extraction typo, never edited); title heads
[48,60,80,137]; **ledger list** [71–79] as engraved enumerated rows (CSS counters,
hairlines, Plex numerals — the nine summary points are literally ledger material);
enumerators [114,117,119,121] (`B.`–`E.`) as Plex Mono Specie run-in labels;
end-mark `Ⅱ — ASSAYED`.
*CSS key:* `body[data-art="strata"]`, fallback `body[data-chapter="p1c2"]`.

### 8.3 p1c3 — furrow — PLATE III · THE FIRST FURROW

*Rationale.* The Agricultural Revolution as slow-motion violence-logic shift: Genesis
field-inscription [0], "sharpened stakes and makeshift hoes" [1], PROPERTY [41], the
stirrup passage [91] ("the invention of the stirrup gave the armed knight…"),
PARADISE LOST [128], "In the sweat of thy face shalt thou eat bread" [134].
Furrows are the chapter's own paradigm image for how work reshapes power.
*Palette role:* verdigris-dominant — the first green chapter (S3: ch. 3 & 7 only).
*Caption:* `Plate III · The first furrow`.

Rosette: §7 p1c3 L1+L2, Verdigris, in
`<g transform="translate(300,340) scale(1,1.28) translate(-300,-340)">`
(8 petals stretched like furrow rounds). Witness: ellipse `rx196 ry240` Verdigris 1.5
dash `2 6`. Microtext: `IN THE SWEAT OF THY FACE SHALT THOU EAT BREAD · ` ×3.
Vignette (furrow field):
- Rect `x216 y238 w168 h204` fill plate-bg, Verdigris 2; inner inset 6 Verdigris 1.
- Vanishing point (300,262); 9 furrows from bottom edge x=224..376 step 19 at y=436
  to VP, Verdigris 1.75.
- Seed-lines: horizontals y=340/380/414, Verdigris 1 dash `1 5`.
- Seeds: filled Verdigris r2 dots on center furrow x=300, y=286+14k k=0..10.
- Cartouches `III`; caption `PLATE III · THE FIRST FURROW`.
*Reading treatment:* no epigraph frame ([0] is a long field-head para — drop cap
applies, plate caption carries the Genesis line); caps heads [41,67,128]; title heads
[23,51,77]; tech-card [91] (stirrup passage: verdigris left rule, flat
`accent-soft` ground — flat, never gradient); figures stay body serif with
`font-variant-numeric:tabular-nums` (explicit deviation from manifest-draft's "figures
in mono": whole-para mono would falsify prose rhythm); end-mark `Ⅲ — ASSAYED`.
*CSS key:* `body[data-art="furrow"]`, fallback `body[data-chapter="p1c3"]`.

### 8.4 p1c4 — fallen-capital — PLATE IV · THE FALLEN CAPITAL

*Rationale.* "Death of politics" paralleled with the senile Church: Clarke epigraph
[0], politics "dates to 1529" [2], the scandal roll call [6–7] (Whitewater → Foster →
Clinton → Major → Balladur/Juppé → Andreotti → González…), chivalry→citizenship
[31ff], the printing-press solvent [~100], the indulgences/ballad passages [147–163],
"A time much like now" [234]. A toppled capital: Rome 1497 and Washington in one fall.
*Palette role:* copper/oxide decay inks; gold only in the intact fragment (abacus rule).
*Caption:* `Plate IV · The fallen capital`.

Rosette: §7 p1c4 L1 Copper solid + echo in Seal:
`<g transform="translate(18,-12) rotate(20,300,340)" clip-path="url(#p1c4wedge)">`
with wedge polygon `300,340 400,167 488,272` (one petal displaced — fracture, and a
restrained rhyme of p1c11's misregistration grammar). Microtext:
`A TIME MUCH LIKE NOW · ` ×6.
Vignette (fallen capital):
- Rect `x224 y246 w152 h188` fill plate-bg, Copper 2; inner inset 6 Copper 1.
- Diagonal hatch clipped to rect: 8 lines `(230+k·20,430) → (270+k·20,250)` k=0..7,
  Copper 1.
- Capital group `transform="rotate(-18,300,340)"`: abacus rect `246,296,108,16`;
  bell path `M258,312 L342,312 L326,372 L274,372 Z`; base rect `266,372,68,12`;
  all Copper 2 fill none; abacus top rule Specie 2 (the intact fragment).
- Fracture polyline `M258,340 L285,332 L310,344 L335,330` (in rotated frame) Seal 2.5.
- Ledger ticks Plex Mono 9px Bone centered y=424: `1492 · 1497 · WHITEWATER`
  (Columbus opening / Juan fished from the Tiber / the modern roll call — all
  chapter-true).
- Cartouches `IV`; caption `PLATE IV · THE FALLEN CAPITAL`.
*Reading treatment:* no epigraph frame ([0] long parallel-head para — drop cap
applies); caps heads [13,23,31,96,116,172,191]; quote-head [120]
(`"Impoverished, Grasping, and Extravagant"` — Bodoni italic display); title heads
[26,42,49,54,58,99,124,129,132,147,150,164,187,222] (classifier allows stop-words:
[164] "Hatred of Church Leaders" included); attributions [67,95,163,170] as Plex Mono
Muted; **scandal ledger** [6–7] as broadsheet rows; **ballad broadside** [160–163]
(verse + attribution) in copper frame; etymology gloss [2] (1529 passage) as gloss
plate; end-mark `Ⅳ — ASSAYED`.
*CSS key:* `body[data-art="fallen-capital"]`, fallback `body[data-chapter="p1c4"]`.

## 9. Cohort reading system (quiet body, authored margins)

### 9.1 Section heads — book-JS classifier (sanctioned, slots-adjacent, prose untouched)

Reader.js supplies only `.no-drop`/`.reader-*`; the engineer adds book JS on
`reader:chapter` that tags (classes prefixed `sv-`, never `reader-`):
- `.sv-head-caps`: stripped para, all alpha uppercase, 4–120 chars, not leading
  `-`/digit, not in per-chapter attribution stoplist:
  p1c1:[111] · p1c2:[1,114,117,119,121] · p1c3:[] · p1c4:[67,95,163,170].
  Style: Bodoni 600 1.35rem Specie, left, copper rule above (major tier).
- `.sv-head-title`: stripped, ≤70 chars, ≤8 words, no terminal `.:;"?!`,
  Title-Case with stop-words {of,the,a,an,and,in,on,to,for,with,without,as,by,vs},
  first word capitalized. Style: Source Serif 600 small-caps 0.95rem Bone + copper
  tick (minor tier). Verified exemplars in §8; engineer censuses the classifier over
  actual JSON (heads missed by the rule, e.g. lowercase "Get ready to duck," are
  completed by explicit index map, never by prose edits).
- `.sv-head-quote` (p1c4[120]), `.sv-attr` (attributions), `.sv-enum` (p1c2 B–E).

### 9.2 Epigraphs, pulls, pairing

- Epigraph frames (copper rules, Plex Mono attribution preserved inline): p1c1[0],
  p1c2[0–1] only. p1c3[0]/p1c4[0] are long head-paras — drop cap applies, no frame.
  (Note: p1c1[0]/p1c2[0] are quote-led so reader.js `.no-drop` suppresses the drop
  cap — the frame is the opener treatment there, by design.)
- Pull/ledger/broadside treatments: exactly the indexed paras in §8 (one pull + one
  special per chapter maximum — calm preserved).
- Split attributions reunite visually (never by editing prose): p1c1[110–111]
  (Cohen/Stewart quote + wrapped `STEWART` line) styles as one blockquote with the
  attribution in Plex Mono Muted at margin-top 0; same pairing rule joins p1c2[0–1]
  and any `.sv-attr` para to its preceding quote para.

### 9.3 End-marks

- End-marks override the shared fleuron per motif:
  `body[data-art] .chapter-text > p:last-child::after` → Plex Mono Specie
  letterspaced `Ⅰ — ASSAYED` / `Ⅱ — ASSAYED` / `Ⅲ — ASSAYED` / `Ⅳ — ASSAYED`.

### 9.4 Ledger TOC rows (cohort A)

- TOC row: Bodoni denomination numeral in **Specie** + title + Plex Mono word count
  (p1c1 12,347 · p1c2 9,035 · p1c3 9,253 · p1c4 13,384), hairline separated; hover
  strikes the chapter's rosette mini-mark (12-dot ring / 4-bar strata / 8-line furrow /
  9-tick fracture — pure graphics in chapter ink, S3-safe).

### 9.5 Assay progress & plate turners

- Progress = assay bar: thin Specie fill in engraved Copper channel, Plex label
  `ASSAYED n%`. Prev/next = plate turners: engraved buttons with rosette ticks.
  Settings/measure/size/leading controls keep shared behavior; book tokens only.

## 10. Reduced motion + print

```css
@media (prefers-reduced-motion: reduce){
  body[data-book="sovereign-individual"] #chapter-art.plate *,
  body[data-book="sovereign-individual"] .assay-bar *,
  body[data-book="sovereign-individual"] .plate-turner{animation:none!important;transition:none!important;}
}
```

Plates are static line-work (no SMIL/CSS animation, ever); only assay fill and hover
sweeps move, all cut above. Reader.js already gates its own transitions.
Print: plates print at 60% width; strokes hold via `grayscale(1) contrast(1.2)`;
captions #555; body 12pt.

## 11. Responsive & S1 stroke budget

| Viewport | Layout | Plate scale | Min structural stroke → rendered |
|---|---|---|---|
| 1440 desktop | rail 340 meet | 0.567 | 2u → 1.13px ✓ |
| 820 tablet | banner slice 320h | ~1.23 | 2u → 2.5px ✓ |
| 390 phone | banner slice 320h | ~0.58 | 2u → 1.17px ✓, hatch 1.5u → 0.87px (texture, allowed) |

Rules: structural strokes ≥2u (rosette/vignette/rules/borders); 1.5u only for hatch
texture and inner echo lines; dash minima `1 5`; microtext 13u (legible ≥820px,
honest line-work at 390px, S5); plates never hidden at any width (S1); 390px title
bumps weight not size (S6).

## 12. Implementation brief (engineer, via lead)

1. Build `art/plate-p1c1.svg` FIRST to §8.1 numbers (prototype lead); then p1c2–p1c4
   to §8.2–§8.4 after prototype review. viewBox `0 0 600 760`, `var()` inks (§2),
   default `preserveAspectRatio="xMidYMid meet"`, `<title>`/desc per caption.
2. Author `design/cohort-a.css`: §4 grid + overrides, §9 heads/frames/ledger/end-marks,
   §9.4–9.5 TOC/assay/turners for cohort rows, §10 guards, §11 breakpoints, §2
   `body[data-art]` leads + theme remaps.
3. Book JS (owned `index.html` script, `reader:chapter` only): §9.1 classifier +
   `preserveAspectRatio` meet↔slice swap at 900px + assay `ASSAYED n%` label.
4. Supervisor merges `cohort-a.json` + this spec into `design/chapters.json` (§4
   schema: `src`=`asset`, `class`, `motif`, `caption`) and wires fonts/tokens.
5. Validation: cover+p1c1(+p1c7/p1c11 by others) at 1440/820/390; S1 zoom crispness;
   S2 no-glow; S3 ink audit; S4 three-pair rosette spot-check; S5 microtext truths;
   contrast pairs (§2); keyboard `j/k/t///s`; resume/reload; console clean.

## 13. Evidence, assumptions, open items

- Viewed: baseline cover + p1c1 (1440px, :8000); p1c1 prototype rail+banner (viewed,
  §8.1). Fetched: D1/D2 image binaries (not visually inspected — recorded honestly);
  D3 read in full; D4 via catalogue records. Chapter texts: p1c1–p1c4 JSON sampled
  across ~60 indexed paras; all cited indices verified in data (counts: 215/146/137/235).
- Assumes: contract v1.1 slot landing (JS-injected `#chapter-art`); supervisor font
  link + token + chapters.json merge; book-JS sanction holds.
- Open for lead/supervisor: explicit head-index census completion (§9.1); p1c3-figure
  mono deviation noted (§8.3); sepia/light plate var sign-off (§2).
- **p1c1 prototype priority confirmed** — §8.1 is built first.
