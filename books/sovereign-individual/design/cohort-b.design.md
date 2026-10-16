# Cohort B (B-dissolution) — Chapter Art Design Spec

**Book:** The Sovereign Individual (`sovereign-individual`) · **Chapters:** p1c5, p1c6, p1c8
**Owner:** SovCohortBDesigner · **Date:** 2026-10-15 · **Status:** draft for engineer + lead review
**Outputs:** this file + `design/cohort-b.json` (only files this designer writes)
**Identity:** SPECIE — The Private Banknote (APPROVED; ArtDirector PASS WITH BINDING CONDITIONS S1–S8 + R1 SR1–SR6)

## 0. Conformance (binding inputs — all read first)

1. **Reader contract** `.omp/design/READER-CONTRACT.md` v1.1 STABLE: `#chapter-art`
   `<figure>` slot above `#chapter-meta`; manifest `src` SVG inlined; `class` =
   book treatment (`plate`); `motif` sets `body[data-art]`; unlayered book CSS
   beats `@layer shared`; book JS via `reader:chapter` only, slots-only; `sv-`
   class prefix (never `reader-*`); manifest schema §4 (`version`/`cover`/
   `default`/`chapters` with `src`/`class`/`motif`/`caption`).
2. **Book identity** `design/ART-DIRECTION.md` + `design/manifest-draft.json`
   (cohort-B motifs: rubble-courses · severed-belt · pareto-spire; ink arc
   bone → copper → verdigris → gold): Vault `#0B100E`, Bone `#ECE3CC`,
   Specie `#D2A72C`, Copper `#B26A3B`, Verdigris `#5DA88A`, Seal `#9E3B2E`;
   Bodoni Moda (display) + Source Serif 4 (body) + IBM Plex Mono (microtext/data).
3. **Critique** `.omp/design/critiques/sovereign-individual.md`: S1–S8 + R1
   SR1–SR6. Every condition is satisfied by construction; §12 maps each to
   concrete geometry. SR-applicability: SR1/SR2 (shared artifacts, supervisor)
   noted; SR3 (TOC craft) §9.4; SR4 (no glyph-salad rings) §8; SR5 (explicit
   motif cue) each vignette carries one; SR6 (p1c1 owed) not this cohort.
4. **Cohort-A grammar** `design/cohort-a.design.md` §4/§8 common frame
   (600×760 viewBox, double border, lockups, four cartouches, witness circle,
   microtext ring, bottom caption) + §7 hypotrochoid generator: RHYMED WITH,
   not copied. Cohort B plates share the frame so the eleven read as one
   currency; rosette + vignette + microtext make them three new notes.
5. **Cohort-C practice** `design/cohort-c-direction.md` + `design/cohort-c.json`:
   contract §4 keys (`src`/`class`/`motif`/`caption`) + `symbol` +
   `part`/`order`/`title` annotations; `heading_index_map` with
   1-based nth-of-type indices, sic-preserved labels, explicit not-heads.
6. **Plates (READ-ONLY):** `art/plate-p1c1.svg` (prototype standard: frame,
   cartouches, ring construction) and `art/plate-p1c7.svg` (cohort sibling —
   16-petal interlaced knot, verdigris/gold; rhymed, never edited, never
   imitated in petal count).
7. **Prose (READ-ONLY):** `data/chapters/p1c5.json` (164 paras),
   `p1c6.json` (287), `p1c8.json` (236). Every cited index verified
   programmatically against served JSON (see §14 census).
8. **Skills:** frontend-design + frontend-workflow + reference-study injected
   at assignment (three skill system-prompts present in context); no
   local-fallback reads needed (SKILL-MAP fallback paths recorded in §14).

**Index convention (stated once, used everywhere):** prose discussion in this
file uses **0-based** JSON paragraph indices (`[n]`); the JSON
`heading_index_map` in `cohort-b.json` uses **1-based nth-of-type** into
`#chapter-text > p` per cohort-c.json practice (= JSON index + 1). Both forms
are given at every handoff point.

## 1. Cohort arc + tokens

**B-dissolution: the nation-state is assayed and found wanting.** Its health
(p1c5: two demolitions) → its megapolitics (p1c6: the factory-age belt snaps)
→ its economics (p1c8: earnings go winner-take-most). (p1c7 knot-mesh, the
cohort's verdigris third, ships from the sibling plate; this spec covers
p1c5/p1c6/p1c8.)

**Ink arc:** bone → copper/gold split → gold. Rubble giving way to the
cybereconomy gleam: the demolition chapter is drawn in the color of broken
concrete; the megapolitics chapter splits copper (industrial half) against
gold (information half) with verdigris accents strictly on the information
side; the earnings chapter arrives at full specie.

```
p1c5  THE LIFE AND HEALTH OF THE NATION-STATE ... V    Bone lead      rubble-courses
p1c6  THE MEGAPOLITICS OF THE INFORMATION AGE . VI   Copper/Gold    severed-belt
p1c8  THE END OF EGALITARIAN ECONOMICS ......... VIII Gold lead      pareto-spire
```

Identity tokens (authoritative, from ART-DIRECTION.md §1):

| Name      | Hex     | Cohort role |
|-----------|---------|-------------|
| Vault     | #0B100E | plate ground, page ground |
| Ledger    | #121915 | elevated panels, drawer rows |
| Bone      | #ECE3CC | p1c5 plate lead; body text, microtext rings (13.9:1) |
| Muted     | #A89C7C | captions, secondary (7.4:1) |
| Faint     | #6E654E | hairline labels only, never small text |
| Specie    | #D2A72C | display, denomination numerals, assay fill (7.1:1); p1c8 lead |
| Copper    | #B26A3B | p1c6 industrial-half lead; vignette rules — GRAPHICS ONLY (4.0:1, S3) |
| Verdigris | #5DA88A | p1c6 information-side ACCENTS only (S3); never body text |
| Seal      | #9E3B2E | p1c5 stamp frames + p1c6 sever ticks — GRAPHICS ONLY (3.4:1, S3) |

**S3 discipline (binding):** all lettering on all three plates is Specie
(denominations, lockups, graph labels), Bone (microtext), or Muted (captions,
small figure labels). Copper/Seal/Verdigris never render text of any size —
including the p1c5 date stamps (Bone numerals inside Seal frames; the lead's
"S3-exception" reading is NOT taken — stamps stay graphics + Bone text) and
TOC numerals (§9.4: numerals stay Specie; chapter ink appears only in the
rosette mini-mark graphic).

Per-chapter CSS lead (book CSS sets on `body[data-art]`):

```css
body[data-art="rubble-courses"] { --ink-lead:#ECE3CC; --ink-second:#B26A3B; }
body[data-art="severed-belt"]   { --ink-lead:#B26A3B; --ink-second:#D2A72C; }
body[data-art="pareto-spire"]   { --ink-lead:#D2A72C; --ink-second:#B26A3B; }
```

Author plate SVGs with `var()` so themes remap without re-authoring:
`--plate-bg` (default Vault), `--plate-lead`, `--plate-second`,
`--plate-bone`, `--plate-muted`, `--plate-specie`. Dark-family themes:
`--plate-bg` follows that theme's `--bg`, line inks unchanged. Light/sepia:
`--plate-bg:#F2ECDA`, `--plate-lead:#7A5F10`, `--plate-second:#8A4A24`,
`--plate-bone:#241F12`, `--plate-muted:#6B5A40` (per identity §1 remap).

## 2. Typography

| Family (Google Fonts, supervisor adds link) | Role | Fallback |
|---|---|---|
| Bodoni Moda 500/700 (+italic) | chapter titles, denomination numerals (V/VI/VIII), `1495`/`1989`/`153`/`1890` figure labels, major heads, quote-minor heads (italic) | Didot, Georgia, serif |
| Source Serif 4 400/600 (+italic) | reading body, minor heads, quotes, prize figures (tabular) | Georgia, serif |
| IBM Plex Mono 400/500 | plate lockups, microtext rings, stamp numerals, cut-rule tags, ledger numerals, word counts | ui-monospace, monospace |

Scale: chapter title `clamp(2rem,4.5vw,2.75rem)`; body `1.125rem/1.75`,
≤68ch; microtext 13 units in a 600-unit viewBox (≈7.4px at 340px rail —
legible; at 390px banner honest line-work per S5). **S6:** Bodoni
display-only; at 390px bump title weight 500→600, never size. `VIII`
cartouches use 20px (four-glyph fit rule — measured against the 54-unit
cartouche, consistent with cohort-A `III`/`IV` practice).

## 3. Opener composition (inherited plate grammar)

Declarative delivery per contract §4: `design/chapters.json` entries
(`src`/`class:"plate"`/`motif`/`caption`) inline each plate into
`#chapter-art` above `#chapter-meta`. Book CSS reframes the pair as the
asymmetric plate grid (cohort-A §4, unchanged):

- **Desktop ≥900px — plate rail (38/62):** `#chapter-art.plate` 600×760
  viewBox `meet` at ~340px wide in the left rail; right holds part line,
  Bodoni title, copper-rule epigraph frame, then body.
- **<900px — banner:** single column; plate full-width, fixed height 320px,
  SVG `preserveAspectRatio` switched to `xMidYMid slice` by sanctioned book
  JS (slot-only, on `reader:chapter` + resize; default attribute `meet` so
  no-JS still shows the whole plate). **Plates are never hidden on phones (S1).**

Shared-ornament overrides (unlayered book CSS wins; S2 firewall):
`.chapter-meta::after{display:none}`, `.meta-number::after{content:none}`,
`.meta-number::before{content:none}`. The plate carries all ornament.

## 4. Three cohort directions compared (within SPECIE)

Book-level SPECIE/RHUMB/CIPHER is decided (§0.2); these three explore
*within* the SPECIE grammar, and the comparison was genuinely worked —
alternative B in particular was attractive for this cohort's data-rich
chapters before being rejected on scale and identity grounds:

- **A. Vignette-Plate (CHOSEN).** Rosette + central content vignette +
  circular microtext ring + four denomination cartouches + lockups. Unites
  the money thesis (denomination-set coherence — the frame rhymes cohort A
  exactly so V/VI/VIII read as the same currency as I–IV) with chapter
  content (each vignette is the chapter's own image: the two demolitions,
  the snapped belt, the earnings spire). S4 distinctness comes from rosette
  geometry AND vignette AND microtext — three independent axes. The p1c5
  rubble vignette is the cohort's riskiest drawing (masonry at banner
  scale); §8.5 de-risks it with oversized coursing (28-unit beds) and a
  capped block count.
- **B. Assay-Ledger Broadside (REJECTED, seriously considered).** Full-width
  tabular data-plate per chapter: p1c5 as a two-column demolition ledger
  (1495 vs 1989 rows), p1c6 as the 8-vs-6 enumeration table, p1c8 as the
  prize-figure table. Grounded in real chapter data and tempting for exactly
  this cohort — but it reads as document rather than currency (the
  denomination grammar collapses: no rosette, no cartouche rhythm, no
  collectible set); it fails at banner scale into fake-table texture (S5
  risk — tabular microtext below legibility is precisely the SR4 failure
  mode); and it duplicates the TOC ledger's language instead of contrasting
  with it. The chapters' tables survive where they belong: in the reading
  treatments (§9.3), not the plates.
- **C. Stamp-Seal Triptych (REJECTED).** One large stamped glyph per chapter
  (fallen wall, snapped belt, rising arrow) overstruck on bare Vault with
  seal-red cancellation marks. Iconic but thin: three stamps read as an icon
  set, not denominations; fails the S1 density test (bare field around one
  mark) and the S4 genuine-eleven test (no rosette axis at all); the heavy
  seal-red weight pre-empts p1c11, the one chapter where red leads — and the
  plate would rhyme the *counterfeit* rather than the currency.

**Self-review vs. generic defaults:** rejected centered stack (asymmetric
grid instead); rejected glow/gradient (flat inks only, S2 — the p1c8 gold
plate is the cohort's highest S2 risk and is defended in §8.8); rejected
modulo tinting (content vignettes); rejected ALL-CAPS eyebrows above every
head (heads styled only where the text supplies real heads, §9.1); rejected
`→` buttons and `·`-chain meta sparks. Boldness is spent in one place: the
engraved plate. Everything around it is quiet.

## 5. References studied (with honest view records)

- **R1. Bank of Canada Museum, "The art of guilloche" (2020)**
  (`https://www.bankofcanadamuseum.ca/2020/07/the-art-of-guilloche` — page
  text read in full via reader; Spirograph feature image
  `.../Spirograph_Feature.jpg` viewed in-browser, screenshot inspected
  2026-10-15). Geometric-lathe rosettes as anti-counterfeit line-work —
  informs the §6 generator, the S1 stroke budgets, and the p1c6 split-ink
  construction (two half-lathes, one plate). The activity page's note that
  guilloche is *security* line-work (hard to reproduce = hard to fake)
  grounds the cohort's thesis-link: these plates are assay documents.
- **R2. R. W. Seale, armillary sphere + systems of the world, engraving**
  (Wellcome Collection 46157i, `https://wellcomecollection.org/works/f23nkmw4`
  — catalogue page read; IIIF image `V0024704/full/800` viewed in-browser,
  screenshot inspected 2026-10-15). Concentric system-diagrams with annular
  inscription bands and a central instrument vignette — the direct ancestor
  of the cohort's rosette + microtext-ring + central-vignette composition;
  informs the p1c8 spire-as-instrument treatment (a measured curve, not a
  clip-art arrow) and the p1c5 foundation-band inscription.
- **R3. Giovanni Battista Piranesi, Campo Vaccino / Forum views, etching**
  (Cleveland Museum of Art open access `1921.907`,
  `https://openaccess-cdn.clevelandart.org/1921.907/1921.907_web.jpg` —
  viewed in-browser, screenshot inspected 2026-10-15; NGA catalogue page
  `https://www.nga.gov/artworks/66294-veduta-di-campo-vaccino` read for
  medium/dimension data but its artwork image is JS-gated and was NOT
  claimed as viewed). Piranesi's ruin etching — deep cross-hatched shadow
  beds under sunlit courses, rubble foregrounded as the subject rather than
  the background — informs the p1c5 rubble field directly: coursed masonry
  drawn bed-by-bed, shadow hatching only on one side, fallen blocks large
  enough to read as blocks. (Met Museum Durand lathe-work panels 393956/
  393976 were attempted; the Met returned HTTP 429 — recorded, not claimed.)
- Identity-level R-sources (directions.md: BoC guilloche essay, Met Durand
  panels, Beinecke portolans) and cohort-A D1–D4 are inherited, not re-cited.

## 6. Rosette generator (S4: eleven genuinely distinct)

All rosettes are hypotrochoid paths (R1). Engineer regenerates exactly with:

```
x(t) = (R−r)·cos t + d·cos(((R−r)/r)·t) + cx
y(t) = (R−r)·sin t − d·sin(((R−r)/r)·t) + cy
t ∈ [0, 2π], n = 1080 segments, path "M…L…Z", stroke-linejoin round
center (cx,cy) = (300,340) unless stated
petal count = R/gcd(R,r)  (exact by construction; verified analytically §14)
```

| Plate | Layer | R | r | d | Petals | Ink | Stroke | Dash | Transform |
|---|---|---|---|---|---|---|---|---|---|
| p1c5 | L1 | 150 | 30 | 58 | 5 | Bone | 2.25 | solid | — |
| p1c5 | L2 echo | 120 | 24 | 64 | 5 | Bone .7 | 2 | `10 4 2 4` | rotate(36,300,340) |
| p1c6 | L1-west | 147 | 21 | 58 | 7 | Copper | 2.25 | solid | clip west half §8.6 |
| p1c6 | L1-east | 147 | 21 | 58 | 7 | Specie | 2.25 | solid | clip east half §8.6 |
| p1c6 | L2 echo | 105 | 15 | 64 | 7 | Verdigris | 2 | `3 5` | clip east half §8.6 |
| p1c8 | L1 | 143 | 11 | 62 | 13 | Specie | 2.25 | solid | — |
| p1c8 | L2 echo | 104 | 8 | 66 | 13 | Specie .7 | 2 | `14 5` | rotate(14,300,340) |

S4 distinctness (petal count / layers / dash / ink), cohort B vs. all known plates:

| Plate | Petals | Layers | Dash | Lead ink |
|---|---|---|---|---|
| p1c1 (A) | 12 | 2 | solid | Specie |
| p1c2 (A) | 6·7·5·8 | 4 | solid/`6 3`/`2 4` | Copper |
| p1c3 (A) | 8 stretched | 2 | solid/`8 3` | Verdigris |
| p1c4 (A) | 9 fractured | 2 | solid/`4 3` | Copper+Seal |
| p1c7 (sibling) | 16 interlaced | 2+ | `12 34`/`22 10` | Verdigris/Gold |
| p1c9 (C) | rectilinear 9 minis | 2 | dual-phase | Copper |
| p1c10 (C) | halo 10 | 3-phase weave | — | Copper |
| p1c11 (C) | twin 11 + 11-spike | 2 strikes | `8 4 2.5 4` satellite | Gold vs Seal |
| **p1c5 (B)** | **5 twin** | **2** | **solid/`10 4 2 4`** | **Bone** |
| **p1c6 (B)** | **7 split-ink** | **2+1** | **solid/`3 5`** | **Copper/Gold + Verdigris accent** |
| **p1c8 (B)** | **13 twin** | **2** | **solid/`14 5`** | **Specie** |

No cohort-B plate shares a petal count, dash rhythm, or ink role with any
other plate: 5-twin (the only 5; the only Bone rosette), 7-split (the only
split-ink rosette — p1c2's 7 is one layer of a 4-layer copper stack, a
different object), 13-twin (the only 13). Bands stay inside the r=196
witness: p1c5 L1 r∈[62,178]; p1c6 L1 r∈[68,184]; p1c8 L1 r∈[70,194],
L2 r∈[30,162].

## 7. Common frame (denomination coherence — rhymes cohort-A §8 exactly)

viewBox `0 0 600 760`. Background rect `0,0,600,760` fill
`var(--plate-bg,#0B100E)`. Outer border rect `10,10,580,740` stroke lead
2.5; inner rect `22,22,556,716` stroke lead 1. (No scallop lathe border on
chapter plates — density budget reserved for rosette+vignette+microtext;
lathe borders belong to cover + TOC per S1.) Corner cartouches `54×54` at
`(30,64) (516,64) (30,642) (516,642)`, stroke lead 1.5, inner inset rect
0.75 at 0.7 opacity (per the p1c1 prototype file), numeral Bodoni 700
Specie centered (V/VI at 30px; VIII at 20px per the §2 fit rule). Top
lockup y=52: Plex Mono 12px ls 3 Specie `PRIVATE ISSUE · SERIES 1997`.
Bottom caption y=714: Plex Mono 11.5px ls 2 Muted (per-chapter text below).
Witness circle r=196 center (300,340) lead 2 dash `2 6` — raised from
cohort-A's 1.5 to meet the S1 structural minimum (§11). Microtext ring:
circular path r=222 `M78,340 A222,222 0 1,1 522,340 A222,222 0 1,1 78,340`,
Plex Mono 13px ls 1 Bone, `textLength="1390" lengthAdjust="spacingAndGlyphs"`
(S5: every ring states a true thing from its chapter; textLength keeps the
ring closed whatever the repeat count).`<title>`/`<desc>` per caption;
`role="img"` + `aria-label`.

## 8. Per-chapter plate specifications

### 8.5 p1c5 — rubble-courses — PLATE V · TWO DEMOLITIONS: 1495 / 1989

*Rationale.* The chapter pivots on two demolitions as megapolitical
watersheds: San Giovanni blasted "almost five centuries earlier in February
1495" [2] and the Berlin Wall dismantled November 9–10, 1989 [2] — "the most
important pile of historical rubble" since. [3] states the thesis the plate
stages: when San Giovanni fell it proved the returns to violence had RISEN;
the fall of the Berlin Wall proves they are now FALLING. The de Balsac 1502
maxim [0] ("success in war depends on having enough money") is the
foundation stone because the chapter's economics of violence rests on it;
the exit-tax "Berlin Wall for Capital" [7] and the 1989→[163] closing recap
make the stamps load-bearing, not decorative. Coursed rubble (R3) draws both
demolitions at once: ashlar courses for 1495, prefab panel joints for 1989.
*Palette role:* bone-dominant (concrete/rubble ink); copper vignette rules;
seal-red stamp frames (graphics only); specie lockups/numerals/assay.
*Caption (manifest):* `Plate V · Two demolitions: 1495 / 1989`.

Rosette: §6 p1c5 L1+L2, Bone. Microtext:
`SUCCESS IN WAR DEPENDS ON HAVING ENOUGH MONEY · DE BALSAC 1502 · ` ×2
(chapter-true: the [0] maxim + attribution, verbatim).
Vignette (coursed rubble, two walls + field + foundation band):
- Frame rect `x212 y232 w176 h216` fill plate-bg, Copper 2; inner inset 6 Copper 1.
- Breach division: vertical gap x=292..308 from y=238 to y=400 (plate-bg
  knockout, no stroke) splitting the 1495 ashlar left from the 1989 prefab
  right; two Seal 2.5 sever ticks flanking the gap at
  `(288,258)→(296,266)` and `(312,384)→(304,392)` (graphics only).
- Left (San Giovanni): 5 ashlar courses, bed joints horizontal y=266/294/
  322/350/378 from x=218 to x=292, Copper 1.5; perpends staggered
  (x=240/262 on even courses, x=229/251/273 on odd), Copper 1; one
  displaced block: rect `x236 y300 w26 h20` rotate(-8, 249, 310), Copper 2
  fill plate-bg (the blast lift).
- Right (Berlin): 3 prefab panels x=308..382, panel joints vertical
  x=333/358 from y=238 to y=400, Copper 1.5; horizontal lift-holes: 6
  circles r2.5 Copper fill at (320/345/370, 270/360); one toppled panel:
  rect `x314 y246 w56 h24` rotate(11, 342, 258), Copper 2 fill plate-bg.
- Rubble field: 7 fallen blocks along y=404..442 (below the walls, inside
  the frame): rects `w30–44 h16–22`, Copper 1.5–2, rotations −14..12°,
  staggered x=222..360; single-side shadow hatch (R3): 5 diagonal lines
  under the three largest blocks, Copper 1.
- Foundation band: rect `x218 y404 w164 h10` fill none, Copper 1; Plex Mono
  8px Bone centered at (300, 412): `MONEY · WAR · 1502`. (The band sits
  behind the rubble blocks — blocks overdraw it; the maxim underwrites the ruin.)
- Date stamps: two Seal 2 frames (graphics): left rect `x96 y470 w120 h44`
  rotate(-4, 156, 492), right rect `x384 y470 w120 h44` rotate(3, 444, 492),
  each with inner rect inset 5 Seal 1; numerals Plex Mono 500 22px Bone
  centered: `1495` / `1989` (S3-safe: Seal frames, Bone text). Stamps
  overprint the rosette field OUTSIDE the vignette frame (assayer's marks).
- Cartouche numerals: `V`. Bottom caption:
  `PLATE V · TWO DEMOLITIONS: 1495 / 1989`.
- SR5-explicit cue: the displaced ashlar block + toppled prefab panel are
  the two "caught mid-fall" marks — demolition reads at a glance, not just
  masonry.

*Reading treatment:* epigraph [0] framed; caps heads (1-based)
[2,18,39,56]; title heads [24,27,31,44,88,90,104,128,147,155,158];
attribution not-heads [99,140]; **date-stamp ledger rows** [141,144,148,157]
(the one special, §9.3); Fujimori pull [139–140]; colon lede [119]; end-mark
`V — ASSAYED`.
*CSS key:* `body[data-art="rubble-courses"]`, fallback `body[data-chapter="p1c5"]`.

### 8.6 p1c6 — severed-belt — PLATE VI · THE SEVERED BELT

*Rationale.* Opens at Flint — the sit-down seizure of GM's Chevrolet plant,
Dec 30 1936 [2–4] ("produced only 153 automobiles" [4]) — to declare
industrial coercion anachronistic; the payoff sentence "There will be no
Chevrolets and no UAW to strike on the Information Superhighway" [5] is the
plate's microtext ring verbatim. The snapped belt stages the chapter's
load-bearing data structure: the 8-condition industrial enumeration
(Consider: [82] → conditions 1–8 at [83,84,86,89,92,94,96,97]) vs the
6-condition information counter-list ([107,108,110,111,112,114]) — the
power-transmission belt of the factory age, cut. Munro's cyberspace
epigraph [1] ("500 TV channels" + NEIL MUNRO) is the far side of the cut.
The hinge minor head "The Information Age" [221] announces "a fifth stage
in the evolution of competition… not anticipated by Lane" [222] —
"competition in cyberspace" [223]. *Palette role:* copper/gold split across
the cut — copper leads the industrial half, gold the information half,
verdigris ONLY as information-side accents (dashed rosette echo, node
diamond, signal ticks; graphics only, never text). The one cohort-B plate
where verdigris is sanctioned, and only as accent, never lead (S3).
*Caption:* `Plate VI · The severed belt`.

Rosette: §6 p1c6 split-ink 7: L1-west Copper clipped to x<300, L1-east
Specie clipped to x>300 (`clipPath` rects `0,0,300,760` / `300,0,300,760`);
L2 Verdigris dashed echo clipped to x>308 (information side only — the
8-unit offset keeps green off the cut centerline). Microtext:
`THERE WILL BE NO CHEVROLETS AND NO UAW TO STRIKE · ` ×2 (verbatim [5]
minus the Superhighway tail, which would overrun the ring; the tail lives
in the vignette's lane-marker tag — the sentence is complete across the plate).
Vignette (severed belt: stopped pulley + frayed runs + lane marker):
- Frame rect `x212 y246 w176 h188` fill plate-bg, Copper 2 west half /
  Specie 2 east half: draw as two paths — west `M212,246 H300 V434 H212 Z`
  Copper 2, east `M300,246 H388 V434 H212... ` no: east `M300,246 H388 V434
  H300` (open at the cut) Specie 2; inner inset 6 likewise split. The frame
  itself is cut at x=300.
- Drive pulley (industrial, left): circle center (258,340) r=44 Copper 2.5;
  hub circle r=10 Copper 2; 6 spokes (lines hub→rim at 0/60/…/300°) Copper
  1.5; rotation-arrest tick: line `(258,296)→(258,284)` Seal 2.5 + crossbar
  `(250,288)→(266,288)` Seal 2.5 (the stopped machine — graphics only).
- Belt runs (left): two horizontal runs from pulley tangent to the cut:
  `M258,296 H296` and `M258,384 H296` Copper 2.5; frayed ends at x=296:
  4 fray lines each run (`(296,294)→(306,288)`, `(296,296)→(307,296)`,
  `(296,298)→(306,304)`, `(296,382)→(306,376)` etc.) Copper 1.5; two Seal
  2.5 sever ticks crossing the gap at `(296,290)→(308,302)` and
  `(296,378)→(308,390)`.
- Lane marker (information, right): dashed centerline `M308,340 H380`
  Specie 2 dash `8 5` (the Superhighway lane); node diamond at (352,340):
  path `M352,328 L364,340 L352,352 L340,340 Z` Verdigris 2 fill plate-bg
  (S3: graphics accent); 3 signal ticks radiating `(366,332)→(374,326)`,
  `(366,340)→(376,340)`, `(366,348)→(374,354)` Verdigris 1.5; lane tag Plex
  Mono 8px Muted at (344,368): `INFORMATION SUPERHIGHWAY` (completes the
  ring sentence).
- Flint figure (left): Bodoni 700 24px Specie at (258,262): `153`; Plex
  Mono 8px Muted below at (258,274): `AUTOMOBILES · FLINT` (chapter-true [4]).
- Munro figure (right): Bodoni 700 16px Specie at (344,312): `500`; Plex
  Mono 8px Muted below at (344,324): `TV CHANNELS · MUNRO` ([1]).
- Cartouches `VI`; caption `PLATE VI · THE SEVERED BELT`.
- SR5-explicit cue: the rotation-arrest tick on the pulley + frayed belt
  ends — "stopped and snapped" reads at a glance, not just machinery.

*Reading treatment:* title head [1] + Munro epigraph [2] framed; caps heads
[38,49,58,185,227,267]; title heads [10,18,22,25,43,53,62,76,138,141,144,
152,156,165,171,174,193,200,204,209,218,222,232,254,259,281]; quote-minor
[135]; attribution not-heads [9,17,184,265,266]; trailer not-heads
[286,287]; Flint pull [5]; enumerations [84–98]/[108–115]; **cut-rule**
at hinge head [222] (the one special, §9.3); end-mark `VI — ASSAYED`.
*CSS key:* `body[data-art="severed-belt"]`, fallback `body[data-chapter="p1c6"]`.

### 8.8 p1c8 — pareto-spire — PLATE VIII · THE EARNINGS SPIRE

*Rationale.* Winner-take-most earnings: the distribution of earnings
capacity "will take much the shape it does now in the performance
professions like athletics and opera" [4] — the spire curve is the
chapter's single quantitative image, reinforced by Ammon's "like the spire
of a cathedral, rise the men of high talent and of genius above the broad
mass of mediocrity" [30]. Pareto's Law (80/20 + the 1%-pays-28.7% skew [6])
with the 1828/1845/1890 prize figures [6–9] supplies the vignette's three
figure labels; the turnip of income distribution ([17] AMMON'S TURNIP,
[37] The Shape of the Turnip, [50] "will look more as it did in 1750 than
in 1950") is the base the spire rises from. The sow/reap refrain
(Galatians [0]) rings the plate because the chapter's moral is desert:
egalitarian redistribution gives way to reaping what one sows.
*Palette role:* gold-dominant (the returns-to-talent chapter is drawn in
specie — the cohort's gleam arrives here); copper carries the falling
median + turnip base (graphics); bone microtext; muted figure labels; no
verdigris, no seal in this plate.
*Caption:* `Plate VIII · The earnings spire`.

Rosette: §6 p1c8 L1+L2, Specie. Microtext:
`WHATSOEVER A MAN SOWETH THAT SHALL HE ALSO REAP · GALATIANS 6:7 · ` ×2
(chapter-true: the [0] refrain + citation, verbatim).
Vignette (earnings spire: measured curve + falling median + turnip base):
- Frame rect `x224 y238 w152 h204` fill plate-bg, Specie 2; inner inset 6 Specie 1.
- Turnip base band: rect `x230 y396 w140 h40` fill none, Copper 1.5; 3
  turnip contour lines (bulb curves `M230,410 Q300,398 370,410` /
  `M230,420 Q300,408 370,420` / `M230,430 Q300,418 370,430`) Copper 1;
  Plex Mono 8px Muted centered at (300,408): `1750 · NOT 1950` ([50]).
- Falling median: line `M232,340 L368,392` Copper 2 (the median's slope);
  Plex Mono 8px Muted at (300,372) above-line: `THE FALLING MEDIAN`.
- Spire curve: `M232,396 C280,392 316,372 330,318 S344,262 346,252`
  fill none, Specie 2.5 (winner-take-most, staged against the median —
  the two lines diverge: the argument drawn); apex tick:
  line `(346,244)→(346,256)` Specie 2.5 + Plex Mono 8px Specie at (346,238):
  `1%` ([6]: 1% pays 28.7%).
- Axis + figure labels: baseline `M232,396 H368` Copper 1.5; Plex Mono
  9px Bone: `80/20` at (252,388) ([6] Pareto ratio), `1890` at (300,388)
  ([9] the prize year); Bodoni italic 12px Muted at (300,462) below-frame:
  `athletics · opera` ([4] — the analogy, set as the vignette's legend;
  Bodoni italic display, S6-safe at 12 units ≈ 6.8px rail).
- Cartouches `VIII` (20px fit rule, §2); caption
  `PLATE VIII · THE EARNINGS SPIRE`.
- SR5-explicit cue: the diverging spire-vs-median pair — "the few rise as
  the median falls" reads at a glance, not just a rising curve.
- S2 firewall note (binding): this gold-dominant plate carries no glow,
  no gradient, no blur anywhere — flat Specie strokes on Vault, exactly
  like the cohort-A p1c1 gold plate. Difference from the rejected baseline
  is spent on MEDIUM (13-petal guilloche + measured-curve vignette) and
  COMPOSITION (asymmetric plate grid), per the S2 verdict.

*Reading treatment:* Galatians epigraph [1] framed; caps heads
[6,18,44,56,62,79,129,167]; title heads [13,32,38,69,76,82,92,95,100,102,
107,113,116,133,156,160,164,169,171,173,176,179,182,187,202,206,215];
quote-minors [132,190,197]; attribution not-heads [43,86]; **prize-table**
[7–10] + Dray triptych [194–196] (the one special, §9.3); end-mark
`VIII — ASSAYED`.
*CSS key:* `body[data-art="pareto-spire"]`, fallback `body[data-chapter="p1c8"]`.

## 9. Cohort reading system (quiet body, authored margins)

### 9.1 Section heads — book-JS classifier + explicit maps (prose untouched)

Reader.js supplies only `.no-drop`/`.reader-*`; the engineer extends the
sanctioned book JS (cohort-A §9.1 pattern) that tags (classes prefixed
`sv-`, never `reader-`). Cohort-B heads are served by the classifier PLUS
the explicit `heading_index_map` in `cohort-b.json` (1-based; the map wins
on any conflict):

- `.sv-head-caps`: stripped para, all alpha uppercase, 4–120 chars, not
  leading `-`/digit, not in per-chapter attribution stoplist:
  p1c5:[99,140] (1-based; TILLY + FUJIMORI) · p1c6:[9,17,184,265,266]
  (HOBBES, ISAIAH, BLIAS, CAMPEN pair) · p1c8:[43,86] (SHERMAN, DAVIDSON).
  Style: Bodoni 600 1.35rem Specie, left, short copper rule above (major tier).
- `.sv-head-title`: stripped, ≤70 chars, ≤9 words, no terminal `.:;"?!`,
  Title-Case with stop-words {of,the,a,an,and,in,on,to,for,with,without,as,
  by,vs,or,at,from,into} (+ `not` for p1c8[197]`"That's Not My Job"`),
  first word capitalized, quoted-head allowance (leading `"`/`"`, ≤4 words
  inside quotes for [135]/[132]/[190]/[197]). Verified exemplars in §8;
  heads the rule misses are completed by the explicit index map, never by
  prose edits:
  - p1c5 minors incl. [24] "Magnitude over Efficiency" (follows a wrap
    para — classifier is order-blind, map confirms), [44] "Proprietors"
    (single-word head, map confirms).
  - p1c6 minors incl. [222] "The Information Age" (the hinge — map
    confirms + cut-rule, §9.3), [135] `"Tools with a Voice"` (quoted
    minor → `.sv-head-quote`, Bodoni italic display).
  - p1c8 minors incl. [133] "Non citizens of the Pale" [sic — explicit
    map entry, render as served], [169] "Why Firms?" (terminal `?` —
    explicit map override of the no-terminal-punct rule),
    [132]/[190]/[197] quoted minors (→ `.sv-head-quote`).
- `.sv-attr` (attributions, Plex Mono Muted, margin-top 0, paired to the
  preceding quote para per the reunion rule): p1c5 [99,140] · p1c6
  [9,17,184,265,266] (the CAMPEN pair [265,266] reunites as one two-line
  attribution) · p1c8 [43,86].
- `.sv-enum` (p1c6 run-in numerals): industrial [84,85,87,90,93,95,97,98]
  + information [108,109,111,112,113,115] (Plex Mono Specie numerals;
  body serif untouched).

### 9.2 Epigraphs, pulls, pairing

- Epigraph frames (copper rules, Plex Mono attribution preserved inline):
  p1c5 [1] (0-based [0]: de Balsac maxim + `ROBERT DE BALSAC, 1502`) ·
  p1c6 [2] (0-based [1]: Munro + `NEIL MUNRO`, standing under the title
  head [1]) · p1c8 [1] (0-based [0]: Galatians + `GALATIANS 6:7`).
  All three are quote-led so reader.js `.no-drop` suppresses the drop
  cap — the frame is the opener treatment there, by design.
- Pull treatments: p1c5 [139–140] (Fujimori, framed pull + attribution) ·
  p1c6 [5] (Flint payoff "produced only 153 automobiles", copper-rule
  pull — the opening detonation, never a head).
- Split attributions reunite visually (never by editing prose): p1c5
  [97–99] (Tilly quote + wrapped `CHARLES`/`TILLY` lines) styles as one
  blockquote; p1c6 [264–266] (quote + CAMPEN pair); p1c8 [42–43] and
  [85–86] (quote + SHERMAN/DAVIDSON tails); same pairing rule joins any
  `.sv-attr` para to its preceding quote para.

### 9.3 One calm special per chapter (maximum — calm preserved)

- **p1c5 — date-stamp ledger rows** ([141,144,148,157] 1-based; Peru
  sequence [141–157]). Each row: seal-red stamp frame (graphics) +
  Plex Mono Bone date numeral (`1993`/`1993`/`1993`/`1994`) in the right
  margin ≥1100px, run-in small-caps prefix below; minor head [147]
  ("Peru in Ruins") carries a `· 1993` stamp suffix via `::after` (its
  successor para supplies the date). Dates verified: [141] padlocked
  congress 1993 · [144] sovereignty-collapsed-by-1993 · [148]
  no-longer-a-nationstate 1993 · [157] 12.9% growth 1994. The
  hidden-reasons colon lede [119] sets as a rubric over body paras [120–123] (no list
  restyle — prose untouched).
- **p1c6 — cut-rule Information-Age turn** (hinge head [222]
  1-based, 0-based [221]). The standard short copper rule above the minor
  head is replaced, for this head only, by a severed-belt rule: copper
  left half + gold right half + center gap with verdigris ticks (plate
  geometry §8.6 at reading scale; graphics only). It marks the chapter's
  hinge: [222]→[223] "a fifth stage… not anticipated by Lane" → [224]
  "competition in cyberspace". No other head takes the cut-rule.
- **p1c8 — mono prize table** ([7–10] 1-based, 0-based [6–9]). The three
  prize figures set with tabular numerals + hairline rules (body serif
  untouched): row (a) pair [7,8] — 1828, top 4% owned 81% (NYC);
  row (b) [9] — 1845, top 4% owned 81% (NYC corporate wealth);
  row (c) [10] — 1890, Pareto's 80-20 + immigration adjustment.
  ([8] is a wrap fragment: the prize rule styles it, the wrap rule never
  head-styles it.) The Dray triptych [194,195,196] ("Whether you
  produce/work hard/care or not…", + CHRIS DRAY) sets as one indented
  verse block inside the [190]→[197] slack sequence — part of the same
  special's verse allowance, not a second special.

### 9.4 End-marks, TOC rows, assay, turners

- End-marks override the shared fleuron per motif:
  `body[data-art] .chapter-text > p:last-child::after` → Plex Mono Specie
  letterspaced `V — ASSAYED` / `VI — ASSAYED` / `VIII — ASSAYED`.
- TOC rows (SR3): Bodoni denomination numeral in **Specie** + title + Plex
  Mono word count (p1c5 10,541 · p1c6 16,687 · p1c8 13,048), hairline
  separated; hover strikes the chapter's rosette mini-mark (5-dot ring /
  7-tick split ring / 13-dot ring — pure graphics in chapter ink, S3-safe);
  current-chapter seal-bar per SR3.
- Progress = assay bar: thin Specie fill in engraved Copper channel, Plex
  label `ASSAYED n%`. Prev/next = plate turners: engraved buttons with
  rosette ticks. Settings/measure/size/leading keep shared behavior.

## 10. Reduced motion + print

```css
@media (prefers-reduced-motion: reduce){
  body[data-book="sovereign-individual"] #chapter-art.plate *,
  body[data-book="sovereign-individual"] .assay-bar *,
  body[data-book="sovereign-individual"] .plate-turner{animation:none!important;transition:none!important;}
}
```

Plates are static line-work (no SMIL/CSS animation, ever); only assay fill
and hover sweeps move, all cut above. Reader.js already gates its own
transitions. Print: plates print at 60% width; strokes hold via
`grayscale(1) contrast(1.2)`; captions #555; body 12pt.

## 11. Responsive & S1 stroke budget

| Viewport | Layout | Plate scale | Min structural stroke → rendered |
|---|---|---|---|
| 1440 desktop | rail 340 meet | 0.567 | 2u → 1.13px ✓ |
| 820 tablet | banner slice 320h | ~1.23 | 2u → 2.5px ✓ |
| 390 phone | banner slice 320h | ~0.58 | 2u → 1.17px ✓, hatch 1.5u → 0.87px (texture, allowed) |

Rules: structural strokes ≥2u (rosette/vignette/rules/borders/witness —
the witness circle is raised to 2u from cohort-A's 1.5u to meet this
minimum); 1.5u only for hatch texture and inner echo lines; 1u only for
perpends/contours/inner insets; dash minima `1 5` (all §6 dashes exceed
it); microtext 13u (legible ≥820px, honest line-work at 390px, S5); plates
never hidden at any width (S1); 390px title bumps weight not size (S6).

## 12. S1–S8 conformance map (binding conditions → concrete geometry)

| # | Condition | Cohort-B satisfaction |
|---|---|---|
| S1 | Intaglio survives render | Structural ≥2u (§11 table); witness raised to 2u; rubble coursing oversized (28u beds, 7 blocks max); rosettes distinct at banner (5/7/13 counts differ at a glance); plates never hidden |
| S2 | Gold-echo firewall | Flat inks only, zero glow/gradient/blur on all three plates; p1c8 gold-dominant defended in §8.8 (medium + composition, not glow) |
| S3 | Ink discipline | Copper/Seal graphics-only everywhere incl. stamps (Bone numerals), sever ticks, arrest tick; Verdigris ONLY p1c6 information-side accents (dashed echo clipped x>308, node diamond, signal ticks), never lead, never text; TOC numerals Specie |
| S4 | Eleven genuinely distinct | 5-twin Bone / 7-split Copper-Gold+Verdigris / 13-twin Specie — petal counts, layer structures, dash rhythms (`10 4 2 4` / `3 5` / `14 5`), and ink roles each unique vs. each other AND vs. A (12/6·7·5·8/8/9), C (rect-9/halo-10/twin-11), p1c7 (16). Table §6 |
| S5 | Microtext real or honest ornament | All three rings verbatim chapter-true ([0]-maxim / [5]-no-Chevrolets / [0]-sow-reap) + true attributions; textLength-closed; 13u legible ≥820px, line-work at 390px; no lorem, no salad (SR4) |
| S6 | Bodoni display-only | Titles, numerals, figure labels, quote-minor italics only; body Source Serif; 390px weight bump; VIII 20px fit rule |
| S7 | p1c11 intentionality | Not this cohort — but cohort B avoids pre-empting it: no stacked seals, no misregistration grammar, seal-red never leads |
| S8 | Prototype scope | p1c5/p1c6/p1c8 plates follow the p1c1 prototype standard (frame §7, cartouches, ring construction); engineer builds p1c6 first (split-ink is the cohort's hardest geometry) |

R1 repairs: SR3 (TOC hover strike + seal-bar) §9.4; SR4 (ring truth) §8;
SR5 (explicit motif cue per plate) §8.5/§8.6/§8.8; SR1/SR2 supervisor-owned,
noted.

## 13. Implementation brief (engineer, via lead)

1. Build `art/plate-p1c6.svg` FIRST to §8.6 numbers (split-ink rosette +
   cut frame = the cohort's hardest geometry); then p1c5 (§8.5), p1c8
   (§8.8). viewBox `0 0 600 760`, `var()` inks (§1), default
   `preserveAspectRatio="xMidYMid meet"`, `<title>`/`<desc>` per caption,
   `role="img"` + `aria-label`. Generate rosettes with the §6 formula
   (n=1080, round joins); verify petal counts analytically (R/gcd), not by
   trace-peak sampling.
2. Author cohort CSS (§3 grid + overrides, §9 heads/frames/specials/
   end-marks, §9.4 TOC/assay/turners for cohort rows, §10 guards, §11
   breakpoints, §1 `body[data-art]` leads + theme remaps). Supervisor
   integrates sequentially into theme.css — never concurrent appends.
3. Book JS (owned `index.html` script, `reader:chapter` only): §9.1
   classifier + explicit-map completion (map wins conflicts) + attribution
   reunion + `preserveAspectRatio` meet↔slice swap at 900px + assay
   `ASSAYED n%` label + p1c5 stamp margin rule (≥1100px margin, run-in below).
4. Supervisor merges `cohort-b.json` + this spec into `design/chapters.json`
   (§4 schema: `src`=`asset`, `class`, `motif`, `caption`, +`symbol`) and
   wires fonts/tokens.
5. Validation: p1c5/p1c6/p1c8 openers at 1440/820/390; S1 zoom crispness;
   S2 no-glow audit (esp. p1c8); S3 ink audit (no Copper/Seal/Verdigris
   text nodes); S4 three-pair rosette spot-check vs. A/C/p1c7; S5 ring
   truths read aloud against prose; contrast pairs (§1); keyboard
   `j/k/t///s`; resume/reload; console clean.

## 14. Evidence, assumptions, open items

- **Prose census (programmatic, all verified):** p1c5 164 paras / 10,541
  words · p1c6 287 / 16,687 · p1c8 236 / 13,048. ALL-CAPS census: p1c5
  [1,17,38,55,98] (0-based; [98]=TILLY attribution) · p1c6
  [37,48,57,183,184,226,264,266] ([183]=BLIAS, [264]=CAMPEN attribution;
  [265]=`U.S.A.F (Ret.)` fails caps-rule on lowercase, explicit not-head) ·
  p1c8 [5,17,42,43,55,61,78,85,128,166] ([42]=SHERMAN, [85]=DAVIDSON
  attributions). Title-case census + neighbor-context adjudication for all
  60+ minor candidates; wraps ([48]=`resources are freed…`,
  [59]=`actually have.`, [161–162] page-break join), run-ins (p1c5 [6]
  Love-It-or-Leave-It lede; Ammon trait heads), enum furniture (p1c8
  `2 .`/`3 .`/`4 .` + Booth `5 …`), and quote-minors ([134]/[131]/[189]/
  [196] 0-based) all classified with predecessor/successor lengths on
  record. Date tokens censused (`1495` confirmed at p1c5[2] "February
  1495"; `1502` at [0]; Peru `1993`×3 + `1994` at [140,143,147,156]).
  Petal counts verified analytically (R/gcd exact; trace-peak sampling
  shown to undercount and discarded).
- **Viewed:** R1 guilloche image + R2 Seale IIIF image + R3 Piranesi
  Cleveland open-access image (all in-browser screenshots inspected);
  R1 essay + R2 catalogue + NGA catalogue records read as text. NOT
  claimed: NGA artwork image (JS-gated), Met Durand panels (HTTP 429).
  No plate prototype was rendered for this cohort (design-only
  deliverable; engineer builds per §13) — recorded honestly.
- **Skills:** frontend-design + frontend-workflow + reference-study
  injected at assignment; SKILL-MAP fallbacks
  (`/home/prateek/.agents/skills/frontend-design/SKILL.md`,
  `/home/prateek/.agents/skills/frontend-workflow/SKILL.md`,
  `/home/prateek/.omp/agent/managed-skills/reference-study/SKILL.md`)
  recorded, not needed.
- **Assumes:** contract v1.1 slot landing (JS-injected `#chapter-art`);
  supervisor font link + token + chapters.json merge; book-JS sanction
  holds; p1c7 sibling plate ships from its owner (cohort arc references
  it; no file dependency).
- **Open for lead/supervisor:** explicit head-index census completion for
  any classifier misses at build time (§9.1 — map-wins rule covers it);
  sepia/light plate var sign-off (§1); p1c5 stamp-margin behavior at
  900–1100px (run-in specified; margin alternative if the rail allows).
- **File ownership respected:** only `design/cohort-b.design.md` +
  `design/cohort-b.json` written. No edits to theme.css, index.html,
  chapters.json, shared/**, prose, art files, or other cohorts' files.
