# The Fountainhead — art direction (buildable spec)

Status: Final — Direction A (THE FURNACE), ArtDirector APPROVED 2026-10-15
(`.omp/design/critiques/the-fountainhead.md` main verdict + ART-DIRECTION
draft-review addendum; binding conditions F1–F10 all incorporated below;
critique log in `DIRECTIONS.md`). Generator lock: this file's presence means
`scripts/generate_book_pages.py` must never regenerate this book
(READER-CONTRACT v1.0 §10; v1.1 `symbol` addendum noted — Fountainhead
uses `motif` + `caption` keys only). No edits to `theme.css`/`index.html`/
`shared/`/prose were made by the designer; new files only (`design/*`, `art/*`).

SUPERVISOR AMENDMENTS A1–A2 (integrated, not appended — the spec below already
conforms): A1 = ArtDirector addendum F7–F10 (heat-arc numerals, authored bar
compositions, Ember metering, SVG/font-safe diamond); A2 = COLD-open set
(p2c4, p2c7, p2c14, p3c2, p3c6, p4c6, p4c14) + trial mapping (p4c18 trial /
p4c19 aftermath-farewell / p4c20 ascent coda). Where any cohort draft
conflicts, this integrated spec wins.

## 1. Chosen direction — THE FURNACE
The novel as quarry fire and worked stone. Heat is the moral thermometer:
Keating bronze → Toohey dimmed ember → Wynand gilt-heat → Roark white-hot
(ArtDirector: legible gradient across parts, full-saturation Furnace reserved
for Roark-part climaxes, never hot everywhere). Display type is Roark's
body — "long straight lines and angles, each curve broken into planes."
Chapter openers carry identity because chapter titles are bare roman
numerals ("Chapter I"…): every opener gets a giant stroke-only numeral, a
part mark, and a surveyor's chainage data line (see §6). Reading body stays
calm dark Source Serif; all ambition lives in entrances, openers, margins.

Prototype: `design/prototype.html` §#dir-a, viewed at desktop 1440×1000 on
http://127.0.0.1:8137/books/the-fountainhead/design/prototype.html.

## 2. Typography (all verified loadable, Google Fonts CSS API, 2026-10-15)
Served book-relatively from `design/fonts/` per READER-CONTRACT §8 (engineer
downloads woff2 + writes @font-face); Google Fonts links are the verified
fallback during development. Oswald is exclusive to Fountainhead on this
shelf (F6 — seniority recorded; later books differentiate).

| role | family | weights | fallback |
|---|---|---|---|
| display (cover, chapter heads, numerals) | Oswald | 500, 600, 700 | "Arial Narrow", Impact, sans-serif |
| body (chapter text) | Source Serif 4 (opsz 8–60) | 400, 500, 600 + italics | Georgia, "Palatino Linotype", serif |
| data (chainage, labels, TOC numerals) | IBM Plex Mono | 400, 500 | ui-monospace, Menlo, monospace |

Scale: cover title clamp(3rem, 8vw, 6rem)/0.94, uppercase, +0.01em; chapter
head 1.6rem Oswald 600 uppercase +0.06em; part kicker 0.72rem Plex Mono
+0.3em; body 1.3rem/1.8 (reader default, user-adjustable); opener numeral
5.2rem Oswald 700 (Wynand part: 6.4rem — monumentality through scale per
ArtDirector, never a second display face).
Numerals (F3): `color: transparent; -webkit-text-stroke: 2px <part-accent>;
opacity: .8`, giant scale, occludable by art; never badges — no borders,
fills, cartouches. Fallback where text-stroke is unsupported: solid
part-accent at 45% opacity.
Measure: body ≤ 65ch; opener lede ≤ 38rem; cover grid ≤ 66rem.

## 3. Palette (dark-first, named hexes; umber-cooled per ArtDirector)
| name | hex | role |
|---|---|---|
| Hearth | `#17100B` | page/cover ground (umber) |
| Hearth-deep | `#100B08` | slot wells, bar inlay |
| Tower-mass | `#241610` | tower slab base (cover) |
| Heat-mid | `#33200F` | heat-gradient upper stop (cover) |
| Bone | `#F6EAD6` | primary text on dark, Roark steel-white |
| Ember | `#E4572E` | accent: rules, numerals, drop-caps, hearth line |
| Ember-deep | `#8C3A20` | heat-gradient mid, Toohey accent |
| Emberlight | `#FFD9A0` | hearth glow core; may carry MEDIUM display (F1) |
| Bronze | `#C8A06A` | secondary: author line, datum, Keating metal |
| Gilt-heat | `#D8A05A` | Wynand-part accent (gilt shift, never Cinzel) |
| Ash | `#7A6A58` | part-mark structure, muted rules |
| Cinder | `#3A2C22` | hairline borders on dark |

Contrast law (F1 + F9): Ember ≈3.5:1 on Hearth → graphics + large display
(≥1.6rem Oswald 600+) ONLY; Ember small Plex kickers are permitted ONLY
where they meter 4.5:1 computed on the composited ground, else they take
Emberlight/Bronze. Body stays Bone. Validators meter every opener.
Theme variants (engineer maps to the 8 shared themes; Hearth family is
default-dark): sepia/light = Bone ground `#F6EAD6`, text `#2A1E14`, Ember
darkened to `#B23E1F` (verify 4.5:1 on Bone for Plex kickers); nocturne/slate
keep Hearth ground, Bone→`#E9E4D8`; oxblood/candlelight/verdant keep Ember,
shift Bronze toward theme accent.

## 4. Layout / composition per surface
- Cover: asymmetric grid — left column kicker/title/rule/author/tagline +
  actions; right column `cover.svg` furnace tower (`#cover-art` slot, class
  `plate`); footer meta unchanged. No text-over-art anywhere.
- Chapter opener (F4 — in the meta→text zone; must NOT push text down):
  `#chapter-art` (class `banner`, ≤12rem tall) holds part-mark + numeral +
  chainage strip; then standard meta, then text. Acceptance: first body line
  visible without scroll at 1440×1000 for standard openers.
- Reading body: untouched rhythm; only drop-cap (Oswald 700, part accent) and
  chapter-end mark (F10: `◆` diamond rendered as inline SVG or a glyph with
  explicit font support — Oswald/Plex both carry U+25C6; engineer verifies
  zero tofu on target platforms — never an unsupported text glyph).
- TOC drawer: part headers get part marks (inline SVG slice) + Bronze
  subtitle; active chapter border-ember.
- Header/progress: progress fill Ember→Bronze gradient.

## 5. Illustration medium
Flat gouache-poster SVG: solid slabs, heat gradients (linear only),
furnace-bar horizontals, radial hearth glow, bone/ember arrises. No strokes
<2px at final size, no photo, no lattice fills, no glow filters except the
single hearth radial. No dimension-line drawings, datum lines, hatching, or
title blocks anywhere (ArtDirector: one grammar — survey details enter ONLY
as the §6 mono data line). All art original authored SVG under `art/`.

## 6. Signature idea
Heat as moral thermometer + the surveyor's chainage data line: every chapter
opener is stamped `STA <part-letter>-<roman> · <words> words · FIG <callout>`
(e.g. `STA R-XIX · 2,761 words · FIG CORTLANDT`). Plex Mono, part accent,
tracked +0.24em. Chainage content (FIG callouts) per `CHAPTERS.md`; cohort
leads verify against their chapter's prose before building.

## 7. Nav treatment
Prev/next cards get part-accent top-rule on hover; labels Plex Mono kickers;
titles Oswald 600. TOC rows: roman numeral in Plex Mono accent-muted; read
chapters get a Bronze `◆`. `/`-to-filter and keyboard map per contract §9.

## 8. Per-part systems (keyed to the four men; F2: structural elevations)
| part | mark (`motifs.svg` slice) | heat | numeral stroke | rationale |
|---|---|---|---|---|
| 1 Keating | pilasters ×4 (`#mark-keating`) | lukewarm: Ash/Bronze, Ember @40% | Bronze `#C8A06A` | borrowed orders, evenly spaced, going nowhere |
| 2 Toohey | twin arches (`#mark-toohey`) | banked: Ash + Ember-deep | Ember-deep `#8C3A20` | the arcade that gathers every column into one curve |
| 3 Wynand | setback ziggurat (`#mark-wynand`) | gilt-heat: Ash + Gilt-heat base-light, 6.4rem numeral | Gilt-heat `#D8A05A` | press tower in stacked masses, lit from below |
| 4 Roark | single cantilever (`#mark-roark`) | white-hot: Bone beam, Ember edge; p4c19–20 brightest | Ember `#E4572E` | one beam past its support |

Part marks are drawn as structural SVG elevations with real proportion
(fluted shafts, arch springing, setback stepping, cantilever bearing) —
clip-art glyphs fail review.

## 9. Chapter-variation grammar (cohort teams build within this; F7–F8)
No index arithmetic, no odd/even parity anywhere — every chapter's values
are authored in `CHAPTERS.md` and recorded per entry in cohort JSON
(`numeral_fill`, `bars`, plus `notes` rationale). Validators check authored
values, never formulas.
(a) Numeral treatment — stroke-only / heat-filled (fill % tracks the part
HEAT ARC: Keating 0–20 → Toohey 15–45 → Wynand 45–100 → Roark 70–100, with
authored per-chapter overrides) / solid part-accent for climaxes (p1c15,
p2c10, p2c12, p3c1, p3c5, p3c9, p4c15, p4c18, p4c19, p4c20).
(b) Chainage FIG callout per `CHAPTERS.md`.
(c) Banner slab composition — authored per-chapter bar vocabulary:
STRATA / HIGHBARS / DRILL / SINGLE-HI / SINGLE-LO / SPLIT / HEARTH
(climaxes only) / ASCENT (p4c20 one-off); see `CHAPTERS.md` "why" column.
(d) Drop-cap heat — dialogue-cold opens stay Bronze; COLD set (A2):
p2c4, p2c7, p2c14, p3c2, p3c6, p4c6, p4c14. Neighboring chapters share
grammar, never pixels.
Finale (F5): p4c20 (840 words) is a designed ending — ocean/sky/Roark
triptych opener composition (one-off, earned, in Furnace means), full
white-hot Furnace climax, explicit end state. Short triumph, never an
empty page. Trial mapping (A2): p4c18 = Cortlandt trial ("Not guilty");
p4c19 = aftermath-farewell rebuild ("Build it as a monument…"); p4c20 =
Wynand Building ascent coda.

## 10. Asset list (authored, status)
- `art/cover.svg` — furnace-bar tower plate (FINAL, viewed ✓)
- `art/motifs.svg` — 4 part-mark slices (FINAL, viewed ✓)
- Cohort banners (engineer phase): `art/p1-keating.svg`, `art/p2-toohey.svg`,
  `art/p3-wynand.svg`, `art/p4-roark.svg` — per-part banner slabs reusing §8
  marks + bar compositions (PLANNED)
- Finale plates: `art/p4c19-courtroom.svg`, `art/p4c20-ascent.svg` (PLANNED)
- Fonts: `design/fonts/oswald-*.woff2`, `source-serif-4-*.woff2`,
  `plex-mono-*.woff2` (engineer downloads; PLANNED)

## 11. Manifest schema (`design/chapters.json`, READER-CONTRACT §4)
```jsonc
{ "version": 1,
  "cover":   { "src": "art/cover.svg", "class": "plate" },
  "default": { "class": "banner" },
  "chapters": {
    "p1c1": { "src": "art/p1-keating.svg", "class": "banner",
              "motif": "keating-pilasters",
              "caption": "STA K-I · 5,736 words · FIG CLIFF",
              "numeral_fill": 0, "bars": "STRATA" },
    "p4c19": { "src": "art/p4c19-courtroom.svg", "class": "plate",
               "motif": "roark-cantilever",
               "caption": "STA R-XIX · 2,761 words · FIG CORTLANDT",
               "numeral_fill": 100, "bars": "HEARTH" } } }
```
Motif ids: `keating-pilasters`, `toohey-arches`, `wynand-ziggurat`,
`roark-cantilever`, plus `roark-courtroom`, `roark-ascent` for the finale.
Each chapter entry additionally records authored `numeral_fill` (%) and
`bars` (vocabulary token) plus a `notes` rationale.
Cohort leads author `design/<cohort>.json` fragments; supervisor merges
sequentially into `design/chapters.json`.

## 12. Open questions for cohort teams / engineer (remaining after verdict)
1. Sepia/light Ember `#B23E1F` — verify 4.5:1 on Bone for Plex kickers (F9).
2. Word-count chainage: static from toc.json at manifest-author time (no JS).
3. Wynand numerals at 6.4rem: confirm no overflow at 390px phone width
   ("Chapter XVIII" + numeral side-by-side → engineer stacks).
4. F10 diamond: engineer confirms Oswald or Plex Mono U+25C6 renders on all
   targets, else inline SVG diamond.
5. RESOLVED by ArtDirector: Hearth→umber (F1–F6); one grammar, no Cinzel;
   F7 heat-arc numerals + F8 authored bars (rewritten §9 + CHAPTERS.md);
   p4c20 one-off triptych approved in Furnace means (F5).
