# Cohort C — Book Two (part-4, §57–107) · Design Spec

Owner: GsCohortCDesi. Status: SPEC (design only — no implementation).
Binding parents: `books/gay-science/design/ART-DIRECTION.md` (NOON Direction A),
READER-CONTRACT v1.1, `.omp/design/critiques/gay-science.md` (G1–G6 + GR1–GR7),
`REVIEW-R1.md` (R1-1…R1-4), `.omp/design/ART-DIRECTION.md` (P1–P10).
Supervisor relay absorbed: full-width tableaux (GR4/GR7), inscriptions never clip (GR5),
zero phone overflow (GR3), drop-cap numerals are ReaderLead's shared fix (GR6/R1-2 — no
per-chapter workarounds), wired slice is supervisor-owned (R1-1).

Companion: `books/gay-science/design/cohort-c.json` (provisional per-chapter design JSON,
§10a schema + `weight`/`kind`/`gist` fields; supervisor merges into `design/chapters.json`).

## 0. What Book Two actually is

51 aphorisms (§57–107), all 51 chapter JSONs read in full for this spec. It is the
art/women book, in four movements:

1. **Triptych** p4c1–3: Sais veils (realists), names-become-essence (creators),
   sleepwalkers-of-the-day, moon- and God-struck artists.
2. **Women & love** p4c4–p4c19: ship/surf `actio in distans` aria (p4c4),
   Macedonian-king friendship (p4c5), the 10-word "Love" (p4c6), woman-in-music winds
   (p4c7), old-women sceptics/veil (p4c8), devotion's gift (p4c9), fragile ornaments vs
   jungle law (p4c10), "Vivat comoedia!" (p4c11), will/willingness Bild (p4c12),
   dagger/Chinese revenge (p4c13), theatre alto/Romeo (p4c14), chastity paradox (p4c15),
   mothers-as-artists + male mothers (p4c16), holy cruelty dialogue (p4c17),
   talkative unsuccessful (p4c18), dancing-master/Aristotle third sex (p4c19).
3. **Stage, music, Greeks, poetry** p4c20–p4c36: madness beat-keepers/tortoise (p4c20),
   southern opera vulgarity + delight in the mask (p4c21), putting oneself on stage (p4c22),
   imperfect poet's wings (p4c23), Greek stage-speech vs singing passion + Wagner sting
   (p4c24), surveyor/Iphigenia (p4c25), French esprit leaps (p4c26), translations +
   "Twinkling-of-an-Eye" butterfly (p4c27), origin of poetry: rhythm-compulsion, magical
   snare, Terpander/Empedocles/Damon, Apollo binding fate, Homer's lying bards (p4c28,
   985w), artists glorify (p4c29), anti-intoxication theatre/hashish (p4c30), vain
   late-autumn Orpheus-musician (p4c31), artist seriousness (p4c32), festival road (p4c33),
   lights/shadows drafts (p4c34), Alfieri (p4c35), prose-vs-poetry war/goddess (p4c36).
4. **Writers, portraits, Germans, finale** p4c37–p4c51: why-write dialogue (p4c37),
   Fontenelle (p4c38), Chamfort (p4c39), two speakers (p4c40), garrulousness catalogue
   (p4c41), Shakespeare/Brutus (p4c42), Schopenhauer's followers: barbarians, Wagner,
   "Be a man and do not follow me – but yourself!" (p4c43, 1328w), homage comedy (p4c44),
   Voltaire (p4c45), philologists (p4c46), German music/Revolution masses (p4c47),
   chancery/officer German (p4c48), clumsy passion/beauty heights, bears that want to
   dance (p4c49), music-advocate sprout→tree (p4c50), finale: good will to appearance,
   carrying a goddess, fool's cap (p4c51).

## 1. References studied (links + lessons)

1. **Stefano Della Bella, cartouche etchings (1646)** —
   https://www.clevelandart.org/print/art/1932.374.1 (viewed: symmetrical scroll
   cartouche, child + big cats crest, ram-skull anchor, text panel inside the frame).
   Lesson ADOPTED-then-REJECTED: the crest-and-anchor vertical symmetry and the
   "inscription lives inside ornament" rule informed Direction C2; the scrollwork
   itself was rejected (see §2 — it would muddle NOON's flat-modernist grammar, the
   same reason ArtDirector barred vines from the Prelude).
2. **Greek chorus / masks / orchestra scholarship** —
   https://en.wikipedia.org/wiki/Greek_chorus (read: chorus = singing/dancing
   collective on the orchestra "dancing floor"; masks as emotion-changes; parodos/
   exodos as living curtain; Wagner's orchestra-as-chorus). Lesson ADOPTED: the
   orchestra semicircle as the cohort's floor-plan, masks as weather-marks, and the
   chorus-as-curtain idea behind the Branch overlay band (a processional strip that
   opens/closes each long chapter like a parodos).
3. **Toulouse-Lautrec, playbill for "Le Chariot de Terre Cuite" (Met 764174)** —
   https://www.metmuseum.org/art/collection/search/764174 (collection listing
   consulted; object page timed out — lesson taken from the listing + the playbill
   genre, not claimed as a close viewing). Lesson: the playbill's single-gesture
   figure + huge title lockup taught the Branch rule "one actor per slot, title
   inscribed across, never a half-empty band" (GR4).
4. **Book-level stack inherited**: Munch *Sun* (radiating architecture), Matisse
   *La Danse* (flat vermilion gesture-figures), Tarot *Le Soleil* (impassive
   sun-face — GR2's stern/flat ruling respected: no smiling faces anywhere in this
   cohort), red-figure vase grammar (single actors on a dark ground inside a
   circular field → the Shoot medallion).

## 2. Three cohort directions (medium/composition variation) + choice

All three stay inside NOON §7-C: high-morning altitude, theatre-mask weather-marks,
mask/lyre marginalia, p4c43 Branch+, flat discipline (G4), dark palette §2 tokens.

### C1 — "Theatre Frieze" (processional band)
Branch openers as a wide Doric-frieze band: alternating metopes (mask / lyre / ship /
sun-disc) divided by gold triglyph bars, running full-width above the title; Shoots get
a single metope; marginalia = triglyph ticks. Medium: flat bone-on-abyssal silhouette
frieze. Reference: Parthenon-frieze procession, chorus parodos.
REJECTED: it is a decorative border, not a composed scene — it repeats the rejected
baseline's "rule + glyph" grammar at a larger size and cannot satisfy GR4's tableau
demand (icons in a row ≠ art across the whole opener zone). It also strands the sun:
high-morning altitude would read nowhere (G1 risk).

### C2 — "Playbill Cartouche" (Baroque opera frame)
Openers as centered cartouche plates: Della Bella scrollwork frames in gold line,
mask-pair crest at top, ram-skull-style anchor below, title inscribed inside like a
playbill ("CE SOIR · §86"); marginalia = printer's fleuron sparks. Medium: engraved
line ornament. Reference: Della Bella cartouches, 19th-c. opera playbills.
REJECTED: the Baroque scrollwork fights NOON's flat-modernist mural discipline, and
ArtDirector already ruled exactly this grammar out for the Prelude ("no historiated
initials or vine borders — two grammars would muddle", G6-Q2). Importing it for Book
Two would muddle the book the same way. Verdict: most theatrical, least Nietzschean —
costume, not weather.

### C3 — "Sunlit Orchestra" (CHOSEN)
Branch/Branch+ openers as full-width stage tableaux on the Greek theatre plan: the
high-morning sun rides top-center with short steep noon rays; below it a semicircular
**orchestra** (the dancing floor) drawn as concentric arcs; a **skene line** (two posts)
frames the sides; two **actor slots** left/right hold kind-emblem + chapter-specific
figures (masks, lyre, bust, ship, tortoise…); the title is inscribed center-stage on a
legibility scrim (cover-veil precedent); a **parodos band** (processional strip with
weather-marks) closes the bottom. Shoots get **red-figure medallions** (single actor
in a ring, like a kylix tondo). Seeds get marginal mask/lyre/spark marks. Medium: flat
SVG mural shapes in the §2 token palette — the same medium as the cover and dividers.
CHOSEN because: (a) it is the only direction where G1 reads instantly — the sun sits
at high-morning altitude in every long opener, between Book One's climbing sun and
Book Three's zenith; (b) it composes full-width tableaux, satisfying GR4/GR7 by
construction (sun + orchestra + two actors + band — no half-empty field is possible);
(c) its theatre language comes from the chapters themselves (§80 the Greek stage,
§84 Delphi/Apollo, §77 delight in the mask, §86 the theatre) rather than imported
19th-century furniture; (d) it reuses the `gs-part-iv` grammar (high sun + masks) so
the cohort coheres with the sprite sheet instead of inventing a rival system.

Title-swap test: put "Book Three — the abyss at noon" on the orchestra tableaux and
the dancing floor, masks, and lyres are nonsense — that book needs zenith glare and a
lantern. The system belongs to the art book.

## 3. Cohort grammar (engineer brief)

### 3.1 Weights (§6, TOC word counts verified against toc.json lines 876–1232)
- **Seed (≤60w)** — p4c6 (10), p4c7 (40), p4c18 (40), p4c19 (46), p4c25 (38).
  NO opener art, NO manifest entry. Marginal mark 26px left of first line (CSS-only):
  lyre (p4c7 music), mask (p4c18/p4c19 women), spark tinted by kind (p4c6 vermilion,
  p4c25 gold). End-seal spark. No drop-cap (short-text rule stands).
- **Shoot (60–300w)** — 30 chapters. `motif`-class figure ≤24rem above meta:
  red-figure medallion per kind (§3.4). Foam letter drop-cap (letters only — shared
  ReaderLead fix; no per-chapter workaround). Kind end-seal.
- **Branch (300–800w)** — 14 chapters: p4c3, p4c4, p4c15, p4c20, p4c21, p4c24, p4c27,
  p4c30, p4c31, p4c39, p4c42, p4c47, p4c48, p4c51. Full-width `banner` tableau
  (viewport-bleed, max-height 46vh desktop / 34vh phone): `cc-orchestra` base + kind
  actor + chapter actor + parodos band (§4). Foam letter drop-cap. Kind end-seal.
- **Branch+ (>800w, one tier below true landmarks)** — p4c28 (985, origin of poetry),
  p4c43 (1328, Schopenhauer's followers). Reconciliation with §7-C: these are Book
  Two's two longest chapters, so they earn full-width AUTHORED tableau plates + gold
  letter drop-caps — but they are not book-climax moments like §125, so the sun stays
  at high-morning altitude (no zenith fan, no maximal rays) and the composition stays
  inside the orchestra grammar rather than inventing a new one. That is the visible
  tier gap: same grammar, larger canvas, authored actors, gold cap. Landmark inscription
  quotes live INSIDE the plates' lower bands (GR5), never floating.

### 3.2 Content kinds + gold/vermilion spark alternation (BY KIND, never modulo)
Apollo's line from p4c28 ("Apollo, god of rhythm") divides the cohort: the
**solar/Apollonian kinds take gold**, the **embodied/voiced kinds take vermilion**.

| kind | spark | chapters |
|---|---|---|
| music | gold | p4c7, p4c21, p4c31, p4c47, p4c50 |
| Greek/art | gold | p4c3, p4c25, p4c26, p4c29, p4c51 |
| knowledge/truth | gold | p4c1, p4c2, p4c5, p4c20, p4c32, p4c44 |
| women/love | vermilion | p4c4, p4c6, p4c8–p4c10, p4c12, p4c13, p4c15–p4c19 |
| theatre/stage | vermilion | p4c11, p4c14, p4c22, p4c24, p4c30, p4c33, p4c40, p4c49 |
| poetry/writing/language | vermilion | p4c23, p4c27, p4c28, p4c34, p4c36, p4c37, p4c41, p4c46, p4c48 |
| portraits | vermilion | p4c35, p4c38, p4c39, p4c42, p4c43, p4c45 |

Check: 5+5+6+11+8+9+6 = 50… plus p4c3 counted in Greek/art: recount women: p4c4, p4c6,
p4c8, p4c9, p4c10, p4c12, p4c13, p4c15, p4c16, p4c17, p4c18, p4c19 = 12. Total:
5+5+6+12+8+9+6 = 51. ✓

### 3.3 Motifs (`body[data-art]`, §10b vocabulary)
`high-morning` (default altitude), `masks` (women/love + theatre/stage chapters),
`ship` (p4c4 only — existing vocabulary), **`lyre` (NEW — supervisor: add to the §10b
motif vocabulary for music chapters)**. Portraits/poetry/knowledge stay on
`high-morning`; their identity is carried by the medallion/banner actor, not chrome.

### 3.4 Shoot medallions (all `art/cohort-c.svg`, `motif` class, viewBox 480×300)
- `cc-med-mask` — women/love + theatre/stage Shoots (single veil-mask or mask pair
  per §4 actor note).
- `cc-med-lyre` — music Shoots (p4c50; p4c7 is a Seed → marginal lyre, no medallion).
- `cc-med-spark-gold` — music-adjacent/knowledge/Greek Shoots (p4c1, p4c2, p4c5,
  p4c26, p4c29, p4c32, p4c44).
- `cc-med-spark-verm` — poetry/writing Shoots (p4c23, p4c34, p4c36, p4c37, p4c41, p4c46).
- `cc-med-bust` — portrait Shoots (p4c35 Alfieri, p4c38 Fontenelle, p4c45 Voltaire).

### 3.5 End-seals (Contract A.0 ruling: `body[data-chapter]`-qualified
`p:last-child::after`, `url()` SVG ≤32px, never bare glyphs, never layout-shifting)
- `cc-seal-mask` — women/love + theatre/stage chapters.
- `cc-seal-lyre` — music chapters.
- `cc-seal-spark-gold` / `cc-seal-spark-verm` — knowledge/Greek / poetry/portrait chapters.
- `cc-seal-wave` — p4c4 only (the surf aria earns the wave).
- `cc-seal-bust` — portrait Branch/Branch+ (p4c39, p4c42, p4c43).
Marginal Seed marks reuse the seal shapes at 26px (CSS-only, no manifest entries).

### 3.6 Typography / palette / reading body
Unchanged from binding spec: Fraunces (SOFT 100, WONK 1, 560–600, joyful register),
Source Serif 4 body 1.3rem/1.85, ≤68ch, §2 token hexes only (Abyssal Sea ground, Noon
Gold, Sun Core, Dance Vermilion, Wave Ultramarine flat shapes, Foam Bone text, Deep
Night bands). No art behind prose. One orchestrated opener rise (existing keyframes);
reduced-motion cuts instantly. Tableau inscriptions: Fraunces italic, Foam Bone on
Deep Night bands, ≥80px inset from viewBox edges (GR5).

## 4. `art/cohort-c.svg` draw-list (original authored SVG; engineer draws these)

Shared discipline: FLAT shapes only (G4 — no gradients, no glow discs); hand-drawn
irregularity on figures (GR1 lesson — no mirrored/clip-art symmetry: every paired
figure differs in gesture/tilt by ≥6°); impassive faces only (GR2 — straight-line
mouths, no smiles); all banners `preserveAspectRatio="xMidYMid slice"` inside
`overflow-x: clip` containers; medallions `xMidYMid meet` (GR3); titles stay HTML over
a scrim rect, SVG-embedded quotes inset ≥80px (GR5).

- **`cc-orchestra` (Branch base, viewBox 0 0 1600 520).** Flat Abyssal rect;
  sky band `#0A2E3B` y0–360, orchestra floor `#04161D` y360–520. Sun disc r=70 at
  (800,150) fill `#F8C51C` + hard ring r=150 stroke gold 3 opacity .35 + 16 steep
  noon rays (copy `pd-rays` geometry from `gs-part-iv` — DO NOT cross-file `<use>`;
  scale 1.2, alternating gold/vermilion). Orchestra: concentric semicircle arcs
  centered (800,560) radii 120/170/220, bone strokes opacity .30/.22/.15 width 3;
  floor horizon line y=400 bone opacity .45. Skene posts x=180 & x=1420, y250–400,
  bone width 5 opacity .5, with 24px capitals. Actor slots centered (400,330) and
  (1200,330), each ≤160px tall. Center scrim: ellipse (800,300) rx 330 ry 90 fill
  `#030B0F` opacity .55 (legibility scrim, cover-veil precedent — HTML title sits
  over it, min-padding 48px desktop / 20px phone, balanced wrap). Parodos band:
  y452–520 Deep Night opacity .9; centered row of 3 weather-marks (kind actor glyph
  at 40px center + kind-tint sparks at ±120px) flanked by 1px rules from x=80/1520
  to the marks. Per-kind Branch symbols = this base + actors below:
  `cc-branch-women` (left: veil-mask), `cc-branch-music` (left: lyre),
  `cc-branch-theatre` (left: mask pair), `cc-branch-greek` (left: solar spark+arc),
  `cc-branch-poetry` (left: quill), `cc-branch-portrait` (left: bust),
  `cc-branch-knowledge` (left: spark-in-ring); right slots per chapter map (§5).
- **`cc-mask-smile` / `cc-mask-frown`** (~120×140 each; redrawn larger than the
  sprite masks, NOT scaled copies). Bone stroke 5, irregular hand-cut outline (jaw
  wobbles ±4px, asymmetric eyes ≥5px apart in height), gold brow-band 8px, tragedy
  mouth = open dark ellipse 26×34, comedy mouth = wide curve (stroke, not smile-face
  — mask only, no cheeks). Frown brow slants down-in; smile brow arches up-out.
- **`cc-veil-mask`** — smile mask + veil drape: 3 flat bone-opacity (.85/.5/.3)
  trapezoids falling from the brow-band to y+150, left one lifted as if by wind.
- **`cc-lyre`** (~120×140). Bowl: rounded tortoise-shell (gold stroke 5, 3 inner
  hatch lines); two arms: bone stroke 7 S-curves rising to a crossbar (gold, 100px);
  5 strings gold 1.5px bar→bowl; tiny bone plectrum triangle resting on bar right.
- **`cc-bust`** (~120×140). Laurel roundel: 14 leaf ellipses (gold, alternating tilt
  ±30°) on an invisible ring r=55; inner profile: flat bone silhouette facing left
  (forehead/nose/lips/chin in one hand-cut path — generic, NOT a likeness) on a
  trapezoid plinth, vermilion sash line across plinth.
- **`cc-quill`** — diagonal quill (bone shaft, 5 barb strokes each side, vermilion
  nib tip) over a small night scroll rect (bone 1px border, 3 faint text lines).
- **`cc-spark-solar`** — gold 4-point spark (cover `#gs-spark` geometry family, NOT a
  copy: longer vertical axis 2:1) + broken arc chord below (gold, gap at right).
- **`cc-spark-ring`** — gold spark inside a 1.5px bone ring (knowledge emblem).
- One-off chapter actors (small flat shapes, left/right slots as mapped): `cc-actor-ship`
  (p4c4: black-sail ship grammar of part-dividers, bone rigging, on 2 vermilion surf
  arcs); `cc-actor-sleepwalker` (p4c3: small silhouette climbing a tower/roof diagonal,
  crescent moon above — the moon-struck artist); `cc-actor-tortoise` (p4c20: domed
  shell + head + 4 feet, gold outline — the beat-keeper); `cc-actor-butterfly` (p4c27:
  4-wing butterfly, vermilion/gold — "Twinkling-of-an-Eye"); `cc-actor-leaf` (p4c31:
  late-autumn leaf, vermilion with gold vein); `cc-actor-dagger` (p4c42: Brutus dagger,
  bone blade + gold hilt, diagonal); `cc-actor-crowd` (p4c47: 3 head-silhouette arcs,
  bone — the animated masses); `cc-actor-folios` (p4c48: 3 stacked chancery folio
  rects, bone borders + vermilion seal dot); `cc-actor-foolcap` (p4c51: fool's cap —
  3 flopping points with gold bells, vermilion); `cc-actor-goddess` (p4c51: bearer
  silhouette carrying a small radiant figure — gold spark-head — overhead).
- **`cc-tableau-poetry` (p4c28 plate, viewBox 0 0 1600 640).** The Delphi snare.
  Sky: high-morning sun r=90 top-center (800,140), 8 short rays (NOT a fan — Branch+
  altitude discipline). Left: tripod (gold stroke: bowl + 3 splayed legs) on 3 stone
  steps (flat bone-opacity blocks). Center: vermilion snare-loop (rope ellipse
  420×260, stroke 10, knot at top) cast around a small lyre. Right: 3 fate-spindles
  (vertical bone spindles with thread) with 3 gold binding threads arcing from the
  sun-disc to the spindles (Apollo binds fate). Bottom-left: 3 small lyres
  (Terpander/Empedocles/Damon). Bottom: hexameter tick-tock row (alternating long/
  short gold dashes — metrical notation). Lower band y540–640 Deep Night: inscription
  "rhythm is a compulsion" (Fraunces italic 44px, Foam, centered, ≥80px insets).
- **`cc-tableau-followers` (p4c43 plate, viewBox 0 0 1600 640).** Master vs
  barbarians. Left: large seated master silhouette (flat bone, ~300px tall, seated
  profile facing right, hand raised). Right: 5 small barbarian figures (flat
  vermilion, varied gesture ≥6°, reaching/grabbing toward the master; one holds a
  comedy mask — "dear artists are actors"). Center-foreground: Siegfried hero
  silhouette (gold outline, striding away from both groups toward the viewer —
  "innocence of the utmost selfishness"). Top-center: small high sun (r=50, 8 short
  rays — altitude discipline, no zenith fan). Lower band y540–640 Deep Night:
  inscription "Be a man and do not follow me — but yourself!" (Fraunces italic 40px,
  Foam, centered, ≥80px insets, balanced wrap).
- **Seals** (≤32px, simple filled shapes): `cc-seal-mask` (mask pair mini),
  `cc-seal-lyre`, `cc-seal-spark-gold`, `cc-seal-spark-verm`, `cc-seal-wave`
  (single wave arc, ultramarine+gold), `cc-seal-bust` (laurel dot-ring + head dot).
  Seals double as Seed marginal marks (26px, CSS-only).
- **Medallion frames** `cc-med-*` (viewBox 480×300): bone 2px ring r=100 center
  (240,140) + actor inside (~110px) + arc-chord below + 2 flanking kind-tint sparks
  at (90,140)/(390,140). Five symbols: mask (pair mini), lyre, spark-gold,
  spark-verm, bust.

## 5. Chapter map — see `cohort-c.json` (all 51 entries)

Per-entry fields: id, part, order, title, word_count, weight, kind, gist, rationale,
palette_role, motif_asset, opener{treatment, symbol, composition}, reading_treatment.

## 6. grammar_notes (for the merged manifest)

High-morning FULL-WIDTH tableau openers per weight: Branch banners compose sun +
orchestra + two actor slots + parodos band across the whole opener zone (GR4 — never
half-empty); Branch+ plates are authored scenes in the same grammar. Titles stay HTML
over a scrim with min-padding + balanced wrap; SVG-embedded quotes inset ≥80px, never
clip (GR5). All art uses contained viewBoxes (1600×520/640 slice, 480×300 meet) inside
`overflow-x: clip` slots: zero phone overflow is the shipping floor (GR3). Drop-caps
are LETTERS only via the shared ReaderLead numeral fix (GR6/R1-2) — no per-chapter
CSS workarounds. R1-1 wired slice is supervisor-owned; cohort files build to this
grammar. Spark alternation is BY CONTENT KIND (Apollonian gold: music/Greek/knowledge;
embodied vermilion: women/theatre/poetry/portraits), never modulo. `lyre` is a new
§10b motif proposal for music chapters. Branch+ (p4c28/p4c43) = authored tableau +
gold cap, sun held at high-morning altitude: one tier below true landmarks (§125 class).

## 7. Landmarks

`["p4c28", "p4c43"]` — Branch+ tier (see §3.1 reconciliation).

## 8. TOC / chrome notes for the supervisor (cohort does not implement chrome)

- TOC part-IV header: horizon rule with the sun-disc at high-morning altitude (~2/3
  above the line, between Book One's climbing disc and Book Three's zenith) — G1.
- Chapter rows stay quiet; p4c28/p4c43 keep standard rows (Branch+ is NOT book-landmark
  tier — no gold numerals, per §8's 7-rule economy).
- Read chapters earn filled kind-tint sparks; end-seals per §3.5 via the A.0 ruling.
- Progress ray, nav cards, settings: unchanged from §8 (no cohort chrome deltas).
- Request to ReaderLead (via supervisor): add `lyre` to the §10b motif vocabulary;
  confirm the shared drop-cap numeral classifier covers §57–107 numbered openers.
