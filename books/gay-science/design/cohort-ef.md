# Cohorts E+F — Book Four St Januarius (part-6, §276–342) · Book Five We Fearless Ones (part-7, §343–383) · Appendix Songs of Prince Vogelfrei (part-8) · Design Spec

Owner: SupGayScience-3.GsLeadEF.GsCohortEFDesigner. Status: SPEC (design only — no implementation).
Binding parents: `books/gay-science/design/ART-DIRECTION.md` (NOON Direction A),
READER-CONTRACT v1.1 (manifest `{src,symbol,class,motif,caption}`, self-contained
`<symbol>` sprites — Twilight pattern, zero cross-symbol `<use>` refs),
`.omp/design/critiques/gay-science.md` (G1–G6 + GR1–GR7), cohort-c.md + cohort-d.md
(sibling spec structure mirrored here).
Supervisor relay absorbed: full-width tableaux (GR4/GR7), inscriptions never clip (GR5),
zero phone overflow (GR3), drop-cap numerals are ReaderLead's shared fix (GR6/R1-2 — no
per-chapter workarounds), wired slice is supervisor-owned (R1-1).

Companion (engineer-authored from this spec): `books/gay-science/art/cohort-ef.svg`
(all `<symbol>` ids in §4). Prototype (viewed in-browser, desktop 1440×1000):
`books/gay-science/design/prototype/ef-prototype.html` (v2 studies of §342, §341-shadow
grammar, medallions, §383).

## 0. What Books Four, Five, and the Appendix actually are

109 chapters, ALL 109 chapter JSONs read in full (every paragraph) for this spec.
Verification honesty: full prose read, not sampled (p6c1–67, p7c1–41, p8c1's 355
paragraphs including every song stanza). Word counts verified against toc.json
(weights census in §3.1; part-6 = 67 chapters, part-7 = 41, part-8 = 1).

1. **Book Four, St Januarius (p6c1–67, §276–342): the golden-hour sea book.** Opens
   with Amor fati at New Year (§276, Genoa's January saint as the book's patron),
   and immediately puts out to sea: emigrant ships and death-shadows (§278, §340
   returns to death), star-friendship as two ships parting (§279), "live
   dangerously — send your ships into uncharted seas" (§283), "get on the ships,
   you philosophers" (§289), Genoa's sea-conqueror builders (§291), "we rivals of
   the light beam" (§293), will as wave (§310), wisdom-in-pain as sail-trimming
   (§318), the long physics essay (§335, Branch+), the evening-sun happiness
   (§337), compassion refused for shared joy (§338, Branch+), life as a veiled
   woman (§339), Socrates' dying pessimism (§340), the demon of eternal
   recurrence at night (§341), and Zarathustra stepping before the rising sun
   (§342). Movements: New Year vows → ships out → Genoa/air/light → habits and
   self-fashioning → art and knowledge → pain and the sea → physics and
   suffering → the night-demon and the sunrise.
2. **Book Five, We Fearless Ones (p7c1–41, §343–383): the long-shadow
   afternoon book.** Opens with God's death casting its first shadow over Europe
   — and the "open sea" of cheerfulness (§343). Then the great immoralist
   essays: science's hidden piety (§344), morality as personal problem (§345),
   the nihilist question mark (§346), believers' need to believe (§347),
   scholars' plebeian origins (§348–349), priests and homines religiosi
   (§350–351), morality as herd disguise (§352), religion-founders as
   life-interpreters (§353), consciousness as herd-net (§354), knowledge as the
   familiar (§355), role-playing actors (§356), German philosophy
   self-portrait (§357), Luther's peasant rebellion (§358), revenge against the
   spirit (§359), causes vs goals (§360), the actor problem (§361), Europe's
   masculinization (§362), love's sexes (§363), the hermit's masks (§364–365),
   the hunched scholar (§366), monologue art (§367), the cynic vs Wagner (§368),
   taste vs power (§369), romanticism's hunger vs superabundance (§370), growing
   like trees (§371), anti-idealism (§372), science as prejudice (§373), the new
   infinite (§374), Epicurean caution (§375), autumnal slow periods (§376),
   homelessness (§377), bright wells (§378), the fool (§379), the wanderer
   beyond good and evil (§380), brevity and dance (§381), the great health and
   argonauts (§382), and the Epilogue's bagpipe dance (§383).
3. **Appendix (p8c1, 2198w): the sunset songbook.** Fourteen songs of Prince
   Vogelfrei (the outlaw, "free as a bird"): To Goethe, Poet's Calling, In the
   South, Pious Beppa, The Mysterious Bark, Declaration of Love (the poet falls
   in a ditch), Song of a Theocritical Goatherd, 'These Vacillating People',
   Fool in Despair, Rimus remedium, 'My Happiness!', Toward New Seas
   ("Open lies the sea… swallows my Genoese ship"), Sils-Maria (Zarathustra
   strides into view), To the Mistral (a dance song — "our science shall be
   gay!"). The book ends dancing in a storm wind at sunset.

## 1. References studied (links + adopted lessons)

1. **Caspar David Friedrich, *The Stages of Life* (1835)** —
   https://en.wikipedia.org/wiki/The_Stages_of_Life (read: five ships at five
   distances from shore as allegory of life-stages; dusk harbour; semicircle of
   figures echoed by ships). Lesson ADOPTED: ships-at-distances as a *narrative*
   device — §279's two parting ships sit at different depths in the medallion,
   §342's sun-road runs to a horizon ship, and the Appendix ship crosses *before*
   the disc (distance = meaning). Also adopted: Friedrich's dusk-harbour banding
   (dark shore / luminous water / glowing sky) as the compositional stack for
   the golden Branch banners.
2. **Giorgio de Chirico, *Gare Montparnasse (The Melancholy of Departure)* (1914)** —
   https://www.moma.org/collection/works/80538 (viewed: raking metaphysical
   shadows across a piazza, tilted ground, colonnade geometry). Lesson ADOPTED:
   the Book-5 banner grammar — a westering sun at frame-left throwing long
   vermilion shadow-bars rightward across a floor line, with still
   architectural objects (lectern, desk, folios) as the shadow-casters. De
   Chirico's lesson is that *empty floor + long shadows* is itself the subject;
   our L0→L3 rule lengthens the bars chapter by chapter so the afternoon
   visibly ages toward §383.
3. **Philippe de Champaigne, *Vanitas Still Life with a Tulip, Skull and Hour-Glass*** —
   https://www.philippedechampaigne.org/Vanitas-Still-Life-With-A-Tulip-Skull-And-Hour-Glass.html
   (viewed listing + image: the hourglass as the still center of a moral
   tableau, flanked by life and death). Lesson ADOPTED-then-TRANSFORMED: §341's
   hourglass is the still center of its tableau, but Champaigne's *moral*
   framing is rejected — Nietzsche's demon is not a memento mori but a weight
   test, so the tableau's drama is the *turning* (sand mid-fall, spiral orbit),
   not decay. The flanking vocabulary (star-spider / moonlight-trees) replaces
   skull-and-tulip.
4. **Rubrication practice (medieval manuscripts)** —
   https://en.wikipedia.org/wiki/Rubrication (read: red ink articulates text —
   headings, song incipits, liturgical directions; "red's original function was
   to articulate the text"). Lesson ADOPTED: the Appendix songbook rule — the 14
   song titles are rubricated in Dance Vermilion (theme.css already carries 12
   of the 14 known indices; §3.8 corrects two and adds the missing pair), verse
   centered, no drop-caps. Red *articulates* the gathering; it never decorates
   the farewell tableau.
5. **Hokusai, *Under the Wave off Kanagawa* (c. 1831)** —
   https://www.metmuseum.org/essays/hokusai-great-wave (listing consulted; essay
   fetch returned HTTP 429 — lesson taken from the print's known composition,
   not claimed as a close viewing). Lesson ADOPTED: clawed foam geometry — §310
   Will-and-wave's medallion uses hooked foam cap-shapes (not sine curves),
   and foam white is reserved for wave violence across the cohort (medallions,
   Branch surf arcs), never for calm water.
6. **Book-level stack inherited**: Matisse *La Danse* (flat vermilion
   gesture-figures — the §383 ring dancers + §342 walkers, GR1's ≥6° gesture
   rule), Munch *Sun* (radiating architecture — all ray fans), Tarot *Le Soleil*
   (GR2: impassive faces only — no smiling suns, no faces at all in E+F art).

## 2. Three cohort directions (medium/composition variation) + choice

All three stay inside NOON §7-E/F: golden-hour weather for Book 4 (ship/wave
marginalia, dawn chapters graduate toward sunrise, §341 Aubergine exception, §342
landmark), long-shadow weather for Book 5 (raking shadow rules lengthening toward
§383), Appendix = songbook gathering (sunset banner + centered verse + ship
colophon, rubricated vermilion titles), flat discipline (G4), dark palette §2 tokens.

### EF1 — "Ship's Log" (nautical-chart seascape)
Every opener as a logbook plate: graticule rules, sounding-mark wave glyphs, a
position line ("§ 279 · Star Friendship · Open Sea"), ships plotted at distances;
Book 5 keeps the chart but the sun westers and shadow-bars replace soundings.
Medium: engraved-chart line work in bone on abyssal, one signal color per weather.
REJECTED: it is furniture, not weather — the chart apparatus would sit identically
on §276 (a New Year vow) and §344 (a logic proof), so G1 would read nowhere; the
fiddly line work also collapses at `motif` scale (480×300) and on phones (GR3).
Book-specifically: St Januarius is a *swimming* book, not a navigation manual —
Nietzsche is in the water ("will and wave are one kind"), not above it with a
sextant.

### EF2 — "Applause-Ray Architecture" (CHOSEN — "Golden Surf / Long Shadows")
Branch/Branch+ openers as full-width seascape tableaux: Book 4 = the golden sun
rides at golden-hour altitude with an alternating gold/vermilion applause-ray fan,
a gold-trimmed wave band, and a chapter-ship or actor in the surf; Book 5 = the
sun drops to frame-left and throws raking vermilion shadow-bars rightward from
still objects (lectern, desk, broken column, hourglass-stand), lengthening L0→L3
toward §383. Shoots get sun-disc medallions with kind actors in a ring. Medium:
flat SVG mural shapes in the §2 token palette — the same medium as the cover,
dividers, and the v2 prototype studies. CHOSEN because: (a) G1 reads instantly —
golden fan → raking shadows → red sunset disc is the day's last third, legible in
the art alone; (b) it composes full-width tableaux by construction (sun + surf +
actor + horizon; sun + objects + shadows + floor — no half-empty field is
possible, GR4/GR7); (c) its sea language comes from the chapters themselves
(§278 emigrant ship, §279 two ships, §283 uncharted seas, §289 ships, §291 Genoa,
§310 waves, §318 sails, §343 open sea, §377 emigrants, Toward New Seas'
Genoese ship) rather than imported furniture; (d) it reuses the `gs-part-vi` /
`gs-part-vii` / `gs-part-viii` grammar so the cohorts cohere with the sprite
sheet instead of inventing a rival system; (e) it survives at medallion scale
(prototype v2 viewed: sun + ring + actor reads at 24rem).

### EF3 — "Hourglass / Sundial Geometry" (abstract time-instruments)
Openers as instrument diagrams: hourglass frames, sundial gnomons, shadow-angles
computed per chapter; Book 5's lengthening shadows become literal gnomon geometry.
Medium: geometric line-and-disc construction, near-monochrome gold.
REJECTED: it mistakes Book 5's *mood* (fearless afternoon) for its *subject*
(morality, scholars, actors, love, music). A sundial cannot distinguish §363
(sexes in love) from §348 (scholars' origins) — every chapter would be a triangle
and a disc. Book-specifically: the hourglass belongs to ONE chapter (§341, the
G5 exception); promoting it to a cohort grammar would dilute the book's single
most dramatic night and violate the exception's point.

Title-swap test: put "Book Three — the abyss at noon" on the golden-surf / long-
shadow tableaux and the low ships, surf foam, and raking afternoon shadows are
nonsense — that book needs zenith glare and a lantern lit at noon. The system
belongs to the evening voyage.

## 3. Cohort grammar (engineer brief)

### 3.1 Weights (§6, TOC word counts verified against toc.json)
- **Seed (≤60w)** — part-6: p6c12 (50), p6c37 (57), p6c38 (54), p6c39 (54),
  p6c47 (46), p6c48 (33), p6c57 (47). Part-7: none. Part-8: none.
  NO opener art, NO manifest entry. Marginal spark 26px left of first line
  (CSS-only, part-keyed): Book-4 seeds get kind-tinted sparks (gold/vermilion
  per §3.2). End-seal per §3.5. No drop-cap (short-text rule stands).
- **Shoot (61–300w)** — part-6: 47 chapters (p6c1, p6c3–p6c7, p6c9–p6c14,
  p6c17, p6c19, p6c21–p6c25, p6c27–p6c50, p6c52, p6c53, p6c55, p6c56, p6c59,
  p6c61, p6c64–p6c67 — includes the two §341/§342 landmark Shoots, which get
  landmark tableaux instead of medallions). Part-7: 15 chapters (p7c7, p7c8,
  p7c10, p7c18, p7c20, p7c22, p7c23, p7c25, p7c27, p7c29, p7c32–p7c34, p7c36,
  p7c37). `motif`-class figure ≤24rem above meta: kind medallion per §3.4.
  Foam letter drop-cap (letters only — shared ReaderLead fix; no per-chapter
  workaround). Kind end-seal.
- **Branch (301–800w)** — part-6 (11): p6c2, p6c8, p6c15, p6c16, p6c18, p6c20,
  p6c26, p6c51, p6c54, p6c58, p6c62. Part-7 (19): p7c1, p7c3–p7c6, p7c9, p7c11,
  p7c13, p7c17, p7c19, p7c21, p7c24, p7c26, p7c30, p7c31, p7c38–p7c41 (p7c1 and
  p7c41 are landmark Branches — authored tableaux, not base-grammar banners).
  Full-width `banner` tableau (viewport-bleed, max-height 46vh desktop / 34vh
  phone): Book-4 = `ef-branch-golden-*` (applause-ray sun + surf band +
  chapter actor); Book-5 = `ef-branch-shadow-*` (westering sun + casting
  objects + L0–L3 raking shadow-bars). Foam letter drop-cap. Kind end-seal.
- **Branch+ (>800w, one tier below true landmarks)** — p6c60 (1164, Long live
  physics!), p6c63 (916, The will to suffer), p7c2 (863, still pious), p7c12
  (1084, genius of the species), p7c14 (811, ever more artistic), p7c15 (1570,
  What is German?), p7c16 (993, peasant rebellion), p7c28 (925, romanticism),
  p7c35 (911, homeless). Authored full-width tableau plates + gold letter
  drop-caps — but the sun stays at the cohort's weather altitude (golden fan
  for Book 4, westering + shadows for Book 5; no zenith fan, no maximal rays)
  and the composition stays inside the EF2 grammar rather than inventing a new
  one. That is the visible tier gap: same grammar, larger canvas (640 tall vs
  520), authored actors, gold cap. p8c1 (2198, Appendix) is a landmark, not a
  Branch+ (songbook farewell tableau, GR7).
- **Landmarks (named, authored tableaux + gold caps + HTML captions)** —
  gs-hourglass-night (p6c66 §341), gs-sunrise-forth (p6c67 §342), p7c1 §343
  long-shadow afternoon opener (Branch weight, landmark treatment),
  gs-epilogue-ring (p7c41 §383), gs-appendix-farewell (p8c1).

### 3.2 Content kinds + gold/vermilion assignment BY KIND (never modulo)
The sea divides the cohort: **what affirms the voyage takes gold; what resists,
mourns, or unmasks it takes vermilion.**

Part-6 (Book Four) kinds:
| kind | spark | chapters |
|---|---|---|
| dawn-vow (New Year, fate, beginnings) | gold | p6c1, p6c11, p6c12, p6c45, p6c49 |
| sea-voyage (ships, waves, Genoa, sailors) | gold | p6c3, p6c4, p6c8, p6c14, p6c16, p6c18, p6c27, p6c35, p6c40, p6c43, p6c48, p6c66*, p6c67* |
| self-fashioning (style, habits, character, body) | gold | p6c6, p6c9, p6c13, p6c15, p6c20, p6c21, p6c29, p6c30, p6c32, p6c33, p6c37, p6c50, p6c52 |
| knowledge-sun (science, knowing, physics, criticism) | gold | p6c22, p6c25, p6c26, p6c31, p6c36, p6c44, p6c53, p6c58, p6c60 |
| art-music (artists, music, love-learned, theatre) | gold | p6c10, p6c24, p6c28, p6c42, p6c59, p6c64 |
| moral-shadow (preachers, pity, pain-doctors, Socrates) | vermilion | p6c17, p6c46, p6c51, p6c54, p6c63, p6c65 |
| solitude-walk (gait, wanderer, hermit-hours, dogs/lions) | vermilion | p6c5, p6c7, p6c23, p6c34, p6c38, p6c39, p6c41, p6c47, p6c57 |
| evening-fate (death, fortune, greatness, stinginess, humanity) | vermilion | p6c2, p6c19, p6c55, p6c56, p6c61, p6c62 |
(* p6c66/p6c67 are landmarks; their kind spark governs seals/sparks only.)

Check: 5+13+13+9+6+6+9+6 = 67. ✓

Part-7 (Book Five) kinds:
| kind | spark | chapters |
|---|---|---|
| sea-open (open sea, cheerfulness, voyage, homeless) | gold | p7c1, p7c35, p7c40 |
| knowledge-essay (truth, science, consciousness, infinite) | gold | p7c2, p7c12, p7c13, p7c18, p7c24, p7c31, p7c32, p7c33, p7c36 |
| German-portrait (German question, Luther, Wagner-cynic, actor) | gold | p7c15, p7c16, p7c19, p7c26 |
| art-music (monologue art, romanticism, slowness, dance-voice) | gold | p7c25, p7c28, p7c30, p7c34, p7c38, p7c39, p7c41 |
| moral-shadow (morality, believers, priests, religion) | vermilion | p7c3, p7c4, p7c5, p7c8, p7c9, p7c10, p7c11 |
| scholar-shadow (scholars' origins, causes, question mark) | vermilion | p7c6, p7c7, p7c17 |
| love-sexes (sexes, hermit company, trees, fool) | vermilion | p7c20, p7c21, p7c22, p7c23, p7c27, p7c29, p7c37 |
| evening-caption (role-playing dusk thesis) | vermilion | p7c14 |

Check: 3+9+4+7+7+3+7+1 = 41. ✓
Note: p7c14 (ever more artistic / actors) sits in evening-caption alone: its
treatise on role-playing is the book's dusk thesis ("we are all no longer
material for a society"), staged at L3 shadow with mask-and-curtain actors.

### 3.3 Motifs (`body[data-art]`, §10b vocabulary)
- Altitudes: `golden` (Book-4 default), `afternoon` (Book-5 default), `sunset`
  (Appendix). Dawn-gradient chapters (§276, §337–342) ride `morning`/`sunrise`
  per the map (see §3.7).
- Content marks (all existing §10b vocabulary — NO new proposals): `ship`
  (voyage chapters), `wave` (surf chapters), `star` (star-friendship, stellar
  chapters), `hourglass` (§341 landmark + part-7 default seal stays
  `--seal-hourglass`), `ring-fragment` (§383 epilogue's dance ring).
- Motif → end-seal wiring already in theme.css covers `wave/ship/star`; the
  engineer wires `ring-fragment` → `--seal-arc` via the supervisor (one-line
  theme rule, supervisor-owned file — flagged, not authored here).

### 3.4 Shoot medallions (all `art/cohort-ef.svg`, `motif` class, viewBox 480×300)
Shared frame (prototype v2 verified): bone-thin gold ring r=100 center (240,140)
+ actor inside (~110px) + hugged arc-chord below (140,238 A118,118) + 2 flanking
kind-tint sparks at (80,140)/(400,140). Book-5 medallions add a vermilion shadow
slash (diagonal bar, opacity .28) behind the actor — the afternoon reads even at
Shoot scale.
- `ef-med-dawn` — dawn-vow Shoots (p6c1, p6c11, p6c45, p6c49): half-sunk gold
  disc + one vermilion cloud-slat + raised gull.
- `ef-med-voyage` — sea-voyage Shoots (p6c3, p6c4, p6c14, p6c27, p6c35, p6c40,
  p6c43): ship + two surf arcs (p6c4's variant `ef-med-voyage-two` carries two
  ships parting at different depths — the Friedrich lesson).
- `ef-med-sun` — knowledge-sun + self-fashioning Shoots: rayed gold disc
  (p6c22, p6c25, p6c31, p6c36, p6c44, p6c53 + p6c6, p6c9, p6c13, p6c21, p6c29,
  p6c30, p6c32, p6c33, p6c50, p6c52).
- `ef-med-lyre` — art-music Shoots (p6c10, p6c24, p6c28, p6c42, p6c59;
  p6c64 takes `ef-med-veil`): lyre actor (redrawn in EF grammar, NOT a
  cross-file use of cohort-c's lyre).
- `ef-med-column` — moral-shadow Shoots (p6c17, p6c46; p6c65 takes
  `ef-med-rooster`): broken column stump + vermilion chord.
- `ef-med-path` — solitude-walk Shoots (p6c5, p6c7, p6c23, p6c34, p6c41):
  winding path + lone walker dot + cypress tick.
- `ef-med-coin` — evening-fate Shoots (p6c19, p6c55, p6c56, p6c61): disc-coin
  half in shadow + vermilion chord.
- `ef-med-letter` — Book-5 knowledge-essay Shoots (p7c18, p7c32, p7c33, p7c36):
  open folio + quill + shadow slash.
- `ef-med-mask` — Book-5 love-sexes + scholar Shoots (p7c7, p7c20, p7c22, p7c23,
  p7c27, p7c29, p7c37): single mask + shadow slash.
- `ef-med-flame` — Book-5 moral-shadow Shoots (p7c8, p7c10): altar flame +
  shadow slash.
- `ef-med-pipe` — Book-5 art-music Shoots (p7c25, p7c34): pan-pipe reeds
  + shadow slash.

### 3.5 End-seals (Contract A.0: existing `--seal-*` URIs ≤32px in theme.css;
  NO new seals needed — all four required E+F seals exist)
- `wave` (`--seal-wave`, part-6 default): sea-voyage + solitude-walk chapters.
- `ship` (`--seal-ship`, via `data-art="ship"`): p6c3, p6c4, p6c8, p6c14,
  p6c16, p6c18, p6c35, p6c43, p7c1, p7c35, p7c40.
- `red-disc` (`--seal-disc-red`): p8c1 only (already wired in theme.css).
- `shadow-tick` (reuses `--seal-spark-verm`): Book-5 chapters on the default
  `afternoon` motif — a vermilion spark reading as a shadow-tick. Part-7's
  theme default is `--seal-hourglass`; the supervisor switches the part-7
  default to `--seal-spark-verm` (one-line change, supervisor-owned) so the
  hourglass seal stays special to time-chapters (p7c2, p7c12 via
  `data-art="hourglass"` override).
- `star` (`--seal-star`, via `data-art="star"`): p6c4, p6c47, p7c32.
- Marginal Seed sparks reuse the seal spark shapes at 26px (CSS-only).

### 3.6 Typography / palette / reading body
Unchanged from binding spec: Fraunces (SOFT 100, WONK 1, 560–600, joyful
register), Source Serif 4 body 1.3rem/1.85, ≤68ch, §2 token hexes only. No art
behind prose. One orchestrated opener rise (existing keyframes); reduced-motion
cuts instantly. Landmark captions: Fraunces italic, Foam Bone, HTML figcaption
(GR5). Long-shadow meta rules: under each Book-5 meta block, a vermilion rule
whose length steps L0 (4rem) → L1 (7rem) → L2 (10rem) → L3 (13rem) toward §383
(supervisor-owned CSS keyed off `data-chapter` ranges — specified in §5 map via
`shadow` field; no per-chapter artwork).

### 3.7 Dawn gradient (§276, §337–342 — graduate toward sunrise)
- p6c1 §276: `morning` motif, `ef-med-dawn` medallion (first dawn note).
- p6c62 §337: `morning` motif, `ef-branch-golden-humanity` banner — the evening
  sun "continually draws on its inexhaustible riches"; banner sun sits lower
  and warmer than standard golden (Sun Core rim, longer surf gold).
- p6c63 §338: Branch+ `morning` — night-garden tableau (midnight snacks of
  suffering behind; the prose turns on "paths to one's own heaven through
  one's own hell" — tableau stages a dark gate opening onto gold water).
- p6c64 §339: `sunrise` motif, `ef-med-veil` (life-as-woman's gold-thread veil
  half-lifted from a peak — medallion variant).
- p6c65 §340: `sunrise` motif, `ef-med-rooster` (Asclepius' rooster — Socrates'
  last word; dawn bird, vermilion comb).
- p6c66 §341: `hourglass` landmark — NIGHT (the gradient's deliberate eclipse;
  the only Aubergine; midnight-blue hourglass spiral).
- p6c67 §342: `sunrise-forth` landmark — full sunrise arrival (gs-sunrise-forth
  v2: rayed rising disc + two rim-lit walkers + eagle + serpent + sun-road).

### 3.8 Appendix songbook rules
- `song`-class gathering (theme.css wired): centered verse, no drop-cap, ship
  colophon handled by the farewell tableau's crossing ship + the red-disc seal.
- Rubrication: the 14 song titles in Dance Vermilion italic. CORRECTION to
  theme.css (supervisor-owned, flagged for merge): the current 12 indices are
  paragraphs 1, 6, 55, 87, 120, 158, 187, 200, 244, 273, 282, 289 — verified
  against the 355-paragraph JSON, the true title indices are 1 ('To Goethe'),
  6 ('Poet's Calling'), 55 ('In the South'), 87 ('Pious Beppa'), 120 ('The
  Mysterious Bark'), 145 ('Declaration of Love'), 158 ('Song of a Theocritical
  Goatherd'), 187 (''These Vacillating People''), 200 ('Fool in Despair'), 213
  ('Rimus remedium'), 244 (''My Happiness!''), 273 ('Toward New Seas'), 282
  ('Sils-Maria'), 289 ('To the Mistral'). The sitting indices 187/200/244/273/
  282/289 are correct; index 158 is correct; but 87 ('Pious Beppa') — verify:
  prose order is Beppa(87) → Bark(120) → Declaration(145) → Goatherd(158) →
  Vacillating(187) → Fool(200) → Rimus(213) → Happiness(244) → New Seas(273) →
  Sils-Maria(282) → Mistral(289). So the sitting list MISSES 145 and 213, and
  wrongly — check 158: sitting list HAS 158 ✓. Missing: 145, 213. Sitting list
  has 12; correct list has 14. Supervisor: add `p:nth-of-type(145)` and
  `p:nth-of-type(213)` to the rubrication selector.
- The prose gloss paragraph (para 5, the Vogelfrei etymology note) stays in
  body voice, NOT rubricated, NOT centered-verse — it is an editorial aside.

## 4. `art/cohort-ef.svg` draw-list (original authored SVG; engineer draws these)

Shared discipline: EVERY `<symbol>` self-contained — duplicate ALL shapes inline;
NO `<use>` to defs outside the symbol (reader.js splices only the symbol's
children; cross-symbol refs render nothing). FLAT fills + strokes only (G4 — no
gradients, no glow discs; legibility scrims are flat low-opacity ellipses, cover-
veil precedent). NO text in any viewBox (GR5). Hand-drawn irregularity on figures
(GR1 — paired figures differ in gesture/tilt by ≥6°); impassive silhouettes only
(GR2 — no faces). Banners `xMidYMid slice` inside `overflow-x: clip` containers;
medallions `xMidYMid meet` (GR3).

### 4.1 Landmark tableaux
- **`gs-sunrise-forth` (p6c67 §342, viewBox 0 0 1600 560).** Prototype v2 VERIFIED.
  Sky `#0A2E3B` y0–360 over abyssal; low gold haze (two flat `#F5B301` ellipses,
  opacity .10, left field); BROKEN vermilion cloud-slats (four rects with a clear
  channel above the disc — never full-width bars); 9-ray alternating
  gold/vermilion fan; rising disc r=112 `#F8C51C` + Sun Core rim + hard outer
  ring; gold-lit headland wedge from the left with a gold ridge-line; sea band
  with gold sun-road bars (staggered widths); two rim-lit walker silhouettes
  (gold under-stroke pass + near-black fill pass — the v2 legibility fix),
  straddling the horizon at different scales; eagle + distant gull upper right;
  gold serpent coil lower left. Caption (HTML): ""You great heavenly body!" —
  Incipit tragoedia".
- **`gs-hourglass-night` (p6c66 §341, viewBox 0 0 1600 560).** Deep Night ground;
  ONE Aubergine field (left wedge, opacity .5 — the SOLE Aubergine use, G5);
  four bone star-sparks; moon + moonlight shaft between two black tree
  silhouettes (right third); center: the eternal hourglass — Aubergine frame
  (stroke 10) with gold cap-bars, gold sand mid-fall (bulb pour + falling
  droplets), faint gold orbit ellipse; spider on a thread (upper-left of
  center). Caption: "The eternal hourglass of existence is turned over again
  and again".
- **`gs-cheer-shadow` (p7c1 §343 landmark Branch, viewBox 0 0 1600 520).**
  Long-shadow afternoon opener: westering sun frame-left (r=72) with 8 short
  rays; THREE long vermilion shadow-bars raking right at L1 length from a
  broken church-spire silhouette (God's death) + an open-sea wave band below
  with a small ship sailing OUT of the shadows into gold water (cheerfulness);
  autumnal leaf-fall ticks (three small vermilion leaves — "more autumnal").
  Caption: "Finally the horizon seems clear again — the sea, our sea, lies open
  again".
- **`gs-epilogue-ring` (p7c41 §383, viewBox 0 0 1600 520).** Prototype v2 VERIFIED.
  Bright mid-morning release: lighter sea-sky `#0B3542`; small bright sun
  top-center with 5 short rays + hard ring; gold horizon rule; vermilion dance
  ring (ellipse) with FOUR Matisse-grammar dancers standing ON the ring (two
  gesture families, mirrored pairs, ≥6° variance) + hand-hold arc connectors;
  center: rim-lit bagpiper (gold under-stroke + dark fill; vermilion bag,
  bone pipes, gold finial); cricket ticks + two cricket figures in the
  foreground. Caption: "The kingdom of the dance — bright mid-morning".
- **`gs-appendix-farewell` (p8c1, viewBox 0 0 1600 620).** ONE composed farewell
  tableau (GR7 — must meet/beat the prototype): Deep Night ground; red disc
  r=88 low-left (`#E4572E` + thin gold rim) with 9 short vermilion rays ABOVE
  the horizon only; horizon rule vermilion; black sea band with a RED sun-road
  (staggered bars, vermilion, opacity .5→.2); outlaw ship crossing BEFORE the
  disc (bone-rigged black sails, amber masthead lamp + hard ring); four balanced
  bone star-sparks (two per side, varied scales); vermilion + bone wave-crest
  lines. Caption: "Songs of Prince Vogelfrei — the outlaw sings the sun down".

### 4.2 Book-4 Branch banners (`ef-branch-golden-*`, viewBox 0 0 1600 520)
Shared base: golden-hour sky, applause-ray fan (12–16 alternating rays) from a
gold disc (r≈80) at golden altitude, gold-trimmed ultramarine surf band, horizon
rule, chapter actor in the surf or sky. Per-chapter actors:
- `ef-branch-golden-providence` (p6c2): dice + playing hand (chance "plays with
  us") over the surf; one die mid-toss.
- `ef-branch-golden-vesuvius` (p6c8): volcano cone (vermilion crater smoke) +
  small ship in uncharted water; "live dangerously" staging.
- `ef-branch-golden-style` (p6c15): sculptor's compass + laurel ring ("give
  style to one's character").
- `ef-branch-golden-genoa` (p6c16): palazzo façade + tower + cypress on a cliff;
  prow of a ship below.
- `ef-branch-golden-air` (p6c18): three light-beam diagonals + winged seed-shapes
  ("rivals of the light beam").
- `ef-branch-golden-habits` (p6c20): three small doorways, middle one open with
  gold light ("the new waits at the door").
- `ef-branch-golden-poet` (p6c26): theatre stage + poet's scroll ("the poet…
  author of life").
- `ef-branch-golden-pain` (p6c51): anaesthetic poppy + fever-line ("trickle
  sweets onto our bitternesses").
- `ef-branch-golden-otium` (p6c54): sundial + open book at rest ("vita
  contemplativa"); NO clock-face text.
- `ef-branch-golden-drives` (p6c58): three arrows (laugh/lament/curse) braiding
  into one beam (Spinoza's intelligere).
- `ef-branch-golden-humanity` (p6c62): evening sun low + fisherman rowing with
  a GOLDEN OAR (the chapter's closing image, staged literally).

### 4.3 Book-4 Branch+ plates (viewBox 0 0 1600 640)
- `ef-plate-physics` (p6c60): laboratory of self-knowledge — table with prism
  (splitting a gold beam into three), mirror, and a fox slipping from a broken
  cage (Kant's fox); golden fan above, surf below. Inscription band (Deep
  Night, y540–640): "long live physics!" (Fraunces italic, Foam, ≥80px insets).
- `ef-plate-compassion` (p6c63): night-garden gate opening onto gold water —
  dark gate + wall (left two-thirds) with a gold-sea glimpse through the arch;
  war-torch + suicide-detour signpost symbols set aside (broken, fallen); two
  friends sharing bread in the gold light (right third). Inscription band: "to
  share not pain, but joy".

### 4.4 Book-5 Branch banners (`ef-branch-shadow-*`, viewBox 0 0 1600 520)
Shared base (prototype v2 VERIFIED): westering sun frame-left (r=72) with 8 short
rays + hard ring; floor line + faint second line; 2–3 casting objects (lectern,
desk+books+quill, folio stack, column, altar, masks, curtain, tree, well, ship);
THREE vermilion shadow-bars raking right at the chapter's L-length (L0 220px →
L1 440px → L2 700px → L3 890px, measured from the caster). NO scrims (v2 rule).
- `ef-branch-shadow-cheer` = `gs-cheer-shadow` (p7c1 landmark; see §4.1).
- `ef-branch-shadow-morality` (p7c3): "Thou Shalt" tablet (blank stone, NO text)
  + frog + doughty-female silhouette; L0.
- `ef-branch-shadow-question` (p7c4): giant question-mark silhouette (drawn
  shape, not a font glyph) + laughing mask; L0.
- `ef-branch-shadow-believers` (p7c5): altar + chains + dancer on a tightrope
  ("dancing even beside abysses"); L0.
- `ef-branch-shadow-scholar` (p7c6): lectern + desk + folios (v2 study); L1.
- `ef-branch-shadow-priest` (p7c9): confessional screen + "holy ear" shell +
  cow in a meadow strip (cowlike serenity); L1.
- `ef-branch-shadow-religion` (p7c11): two founders' paths — small-house door +
  monastery bowl; L1.
- `ef-branch-shadow-knowledge` (p7c13): street-lamp + multiplication-table grid
  (blank cells, NO numerals) + inner-world mirror; L1.
- `ef-branch-shadow-revenge` (p7c17): poison bottle + boom-boom drum + Stoic
  cloak on a hook; L2.
- `ef-branch-shadow-actor` (p7c19): coat turning in the wind + mask rack (three
  masks); L2.
- `ef-branch-shadow-sexes` (p7c21): two opposed silhouettes (taker/giver) with
  a vessel passing between; L2.
- `ef-branch-shadow-hunch` (p7c24): hunched reader silhouette + mountain path +
  dancing feet ticks ("Can they walk? Can they dance?"); L2.
- `ef-branch-shadow-cynic` (p7c26): stomping foot + march-drum + theatre masks
  crossed out (vermilion slash — anti-theatrical); L2.
- `ef-branch-shadow-ideal` (p7c30): bleeding ideas (vermilion droplets from a
  thought-scroll) + siren on a rock + wax ear-plugs; L3.
- `ef-branch-shadow-science` (p7c31): counting-machine gears + sheet music
  dissolving into numbers-staff (blank note-heads, NO notation text); L3.
- `ef-branch-shadow-wanderer` (p7c38): town towers below + light climbing figure
  above ("specific gravity"); L3.
- `ef-branch-shadow-dance` (p7c39): cold bath + egg in a nest (brooding) + dancer
  silhouette (good dancer = philosopher's ideal); L3.
- `ef-branch-shadow-argonaut` (p7c40): argonaut ship + undiscovered-land
  coastline + clock hand moving forward; L3.

### 4.5 Book-5 Branch+ plates (viewBox 0 0 1600 640)
Same shadow grammar, larger canvas, authored scenes, L-lengths per position:
- `ef-plate-pious` (p7c2): altar of truth with burning convictions (scrolls in
  a brazier) + police-lantern (mistrust) + longest-lie serpent; L0. Band: "God
  himself — our longest lie?"
- `ef-plate-herdnet` (p7c12): mirror-net (knotted cord net) catching small
  thought-fish; solitary predator silhouette OUTSIDE the net; L1. Band: "consciousness
  is a net connecting one person with another".
- `ef-plate-actors` (p7c14): stage curtain + role-masks + "wooden iron" beam
  (wood grain + iron bands, visibly impossible joint); L3. Band: "we are all no
  longer material for a society".
- `ef-plate-german` (p7c15): three portrait niches (Leibniz monad-sphere, Kant
  question-mark stele, Hegel spiral-shell) + Schopenhauer's de-deified night
  window; L1. Band: "the ungodliness of existence".
- `ef-plate-luther` (p7c16): ruined Roman arch + German bible-press + spider
  re-weaving (old spider's web); L2. Band: "the peasant rebellion of the spirit".
- `ef-plate-romantic` (p7c28): two springs — overflowing fountain (Dionysian)
  vs stagnant pool with saviour-icon (romantic); hunger/superabundance diptych;
  L3. Band: "hunger or superabundance?"
- `ef-plate-homeless` (p7c35): thin ice sheet cracking + emigrant ship + mountain
  refuge (peaks above a quarantined plain); L3. Band: "we children of the future".

### 4.6 Medallion + variant symbols (viewBox 480×300 each; frame per §3.4)
`ef-med-dawn`, `ef-med-voyage`, `ef-med-voyage-two` (p6c4: two ships parting),
`ef-med-sun`, `ef-med-lyre`, `ef-med-column`, `ef-med-path`, `ef-med-coin`,
`ef-med-veil` (p6c64: gold-thread veil over a peak), `ef-med-rooster` (p6c65:
dawn rooster, vermilion comb), `ef-med-letter`, `ef-med-mask`, `ef-med-flame`,
`ef-med-pipe`. (13 symbols; all share the §3.4 frame geometry with kind actors.)

Symbol census: 5 landmarks + 11 golden Branch + 2 golden Branch+ + 18 shadow
Branch (incl. p7c1's landmark) + 7 shadow Branch+ + 13 medallions = 56 symbols,
all in `art/cohort-ef.svg`, all self-contained.

## 5. Chapter map — ALL 109 chapters

Per-entry fields: id, part, order, title, word_count, weight, weather, kind,
gist, rationale, palette_role, motif_asset (`art/cohort-ef.svg`; Seeds: none),
opener {treatment, symbol, composition}, reading_treatment, caption (landmarks),
shadow (Book-5 meta-rule length L0–L3), motif (runtime `body[data-art]` —
supervisor sets at merge).

### PART-6 · Book Four: St Januarius (golden weather)

- p6c1 · §276 For the new year · 166w · Shoot · dawn-vow. Gist: Amor fati vow —
  learn to see the necessary as beautiful; become a Yes-sayer. Rationale: the
  book's dawn vow opens the gradient; half-sunk disc = the year not yet risen.
  Palette: golden dawn. Opener: motif ef-med-dawn (half-sunk disc + cloud-slat
  + gull). Reading: Foam cap, gold-spark seal. Motif: morning.
- p6c2 · §277 Personal providence · 378w · Branch · evening-fate. Gist: the high
  point where chance seems providential; the gods of Epicurus vs the petty
  deity; chance plays music with our foolish hand. Rationale: evening-fortune —
  dice and a playing hand over golden surf. Palette: golden + vermilion chance.
  Opener: banner ef-branch-golden-providence. Reading: Foam cap, wave seal.
  Motif: golden.
- p6c3 · §278 The thought of death · 248w · Shoot · sea-voyage. Gist: Genoa's
  noisy lanes; everyone's shadow as dark fellow traveller; the emigrant ship's
  last moment. Rationale: the emigrant ship + a shadow-fellow tick on the mast.
  Palette: golden with shadow. Opener: motif ef-med-voyage. Seal: ship. Motif: ship.
- p6c4 · §279 Star friendship · 245w · Shoot · sea-voyage. Gist: two ships with
  different seas and suns parting; star friendship above earth enmity. Rationale:
  the Friedrich study — two ships at different depths under one stellar orbit
  arc. Opener: motif ef-med-voyage-two. Seal: star. Motif: star.
- p6c5 · §280 Architecture for knowledge · 207w · Shoot · solitude-walk. Gist:
  quiet arcades for contemplation; translate us into stone and plants. Rationale:
  arcade arches on a solitary path (the walker seeks the building). Opener:
  motif ef-med-path. Seal: wave. Motif: golden.
- p6c6 · §281 Knowing how to end · 92w · Shoot · self-fashioning. Gist: masters
  find the perfect end; mountains fall into the sea at Portofino. Rationale: sun
  low over a bay-melody wave-line. Opener: motif ef-med-sun. Seal: gold spark.
  Motif: golden.
- p6c7 · §282 Gait · 115w · Shoot · solitude-walk. Gist: great minds betrayed by
  their walk; Napoleon couldn't walk; authors hide their feet in long sentences.
  Rationale: footstep ticks on a winding path. Opener: motif ef-med-path. Seal:
  wave. Motif: golden.
- p6c8 · §283 Preparatory human beings · 330w · Branch · sea-voyage. Gist: live
  dangerously — Vesuvius cities, uncharted seas, robbers and conquerors of
  knowledge. Rationale: volcano + ship banner. Opener: banner
  ef-branch-golden-vesuvius. Seal: ship. Motif: ship.
- p6c9 · §284 Faith in oneself · 84w · Shoot · self-fashioning. Gist: faith as
  useful blindness; arguing against the inner sceptic. Rationale: half-eclipsed
  sun (blindness that lets faith grow). Opener: motif ef-med-sun. Seal: gold
  spark. Motif: golden.
- p6c10 · §285 Excelsior · 211w · Shoot · art-music. Gist: renunciation's lake
  rising higher; man rising when he no longer flows off into a god. Rationale:
  lake-dam + rising waterline in a lyre frame (elevation music). Opener: motif
  ef-med-lyre. Seal: gold spark. Motif: golden.
- p6c11 · §286 Interruption · 70w · Shoot · dawn-vow. Gist: splendour and rosy
  dawn in one's own soul; look for your Orpheus. Rationale: dawn pipes (Orpheus)
  at sunrise. Opener: motif ef-med-dawn. Seal: gold spark. Motif: morning.
- p6c12 · §287 Delight in blindness · 50w · Seed · dawn-vow. Gist: the wanderer
  to his shadow — love ignorance of the future. Rationale: CSS spark only; gold
  (the loved unknown is warm, not dark). Seal: gold spark. NO manifest entry.
- p6c13 · §288 High spirits · 167w · Shoot · self-fashioning. Gist: perpetual
  movement between high and low; ascending stairs while resting on clouds.
  Rationale: stair + cloud sun. Opener: motif ef-med-sun. Seal: gold spark.
  Motif: golden.
- p6c14 · §289 Get on the ships! · 214w · Shoot · sea-voyage. Gist: new suns,
  new philosophers; the moral earth is round — another world to discover.
  Rationale: ship + second small sun on the horizon (the "new suns" plural).
  Opener: motif ef-med-voyage. Seal: ship. Motif: ship.
- p6c15 · §290 One thing is needful · 415w · Branch · self-fashioning. Gist:
  give style to one's character — one taste ruling great and small. Rationale:
  compass + laurel banner. Opener: banner ef-branch-golden-style. Seal: gold
  spark. Motif: golden.
- p6c16 · §291 Genoa · 418w · Branch · sea-voyage. Gist: sea-conqueror builders;
  palaces as frozen possession-lust; the sunny-afternoon sated soul. Rationale:
  palazzo banner. Opener: banner ef-branch-golden-genoa. Seal: ship. Motif: ship.
- p6c17 · §292 To the preachers of morals · 246w · Shoot · moral-shadow. Gist:
  alchemy in reverse — preachers devalue the best things; "rid me of God".
  Rationale: broken pulpit-column. Opener: motif ef-med-column. Seal: vermilion
  spark. Motif: golden.
- p6c18 · §293 Our air · 380w · Branch · sea-voyage. Gist: science's severe
  electric air; rivals of the light beam; bring light to the earth. Rationale:
  light-beam banner. Opener: banner ef-branch-golden-air. Seal: ship. Motif: ship.
- p6c19 · §294 Against the slanderers of nature · 137w · Shoot · evening-fate.
  Gist: free-born birds; freedom and sunlight wherever we arrive. Rationale:
  bird-coin — a disc breaking from shadow with wing ticks. Opener: motif
  ef-med-coin. Seal: vermilion spark. Motif: golden.
- p6c20 · §295 Brief habits · 354w · Branch · self-fashioning. Gist: love of
  brief habits; the new waits at the door; escape from enduring habits.
  Rationale: doorways banner. Opener: banner ef-branch-golden-habits. Seal: gold
  spark. Motif: golden.
- p6c21 · §296 A firm reputation · 296w · Shoot · self-fashioning. Gist: herd
  society rewards immutability; the seeker must mistrust everything firm.
  Rationale: petrified sun (half stone) vs fluid rays. Opener: motif ef-med-sun.
  Seal: gold spark. Motif: golden.
- p6c22 · §297 Being able to contradict · 102w · Shoot · knowledge-sun. Gist:
  contradiction as the liberated spirit's step of steps. Rationale: two opposed
  ray-fans from one disc. Opener: motif ef-med-sun. Seal: gold spark. Motif: golden.
- p6c23 · §298 Sigh · 65w · Shoot · solitude-walk. Gist: the caught insight dies
  in shoddy words; the bird flaps in barren language. Rationale: bird + broken
  snare on the path. Opener: motif ef-med-path. Seal: wave. Motif: golden.
- p6c24 · §299 What one should learn from artists · 219w · Shoot · art-music.
  Gist: see things around a corner, through coloured glass, in sunset light;
  become poets of our lives. Rationale: sunset glass + lyre. Opener: motif
  ef-med-lyre. Seal: gold spark. Motif: golden.
- p6c25 · §300 Preludes to science · 251w · Shoot · knowledge-sun. Gist:
  magicians and alchemists as science's preludes; Prometheus stealing/creating
  light. Rationale: torch + alembic sun. Opener: motif ef-med-sun. Seal: gold
  spark. Motif: golden.
- p6c26 · §301 Delusion of the contemplative ones · 372w · Branch ·
  knowledge-sun. Gist: we are the poets/authors of life, not its spectators;
  valuations are our poem. Rationale: stage + scroll banner. Opener: banner
  ef-branch-golden-poet. Seal: gold spark. Motif: golden.
- p6c27 · §302 The danger of the happiest · 266w · Shoot · sea-voyage. Gist:
  Homeric happiness bought with refined suffering; the fishermen's riddle.
  Rationale: shell + fishing-boat in the surf (the precious shell washed
  ashore). Opener: motif ef-med-voyage. Seal: ship. Motif: ship.
- p6c28 · §303 Two happy ones · 291w · Shoot · art-music. Gist: the improviser
  vs the failure-embracer; life from the verge of losing it. Rationale: two
  improvising hands + lyre. Opener: motif ef-med-lyre. Seal: gold spark.
  Motif: golden.
- p6c29 · §304 By doing we forgo · 187w · Shoot · self-fashioning. Gist: in
  doing we forgo — yellow leaves fall unnoticed; no negative virtues. Rationale:
  falling-leaf sun. Opener: motif ef-med-sun. Seal: gold spark. Motif: golden.
- p6c30 · §305 Self-control · 164w · Shoot · self-fashioning. Gist: the fortress-
  self vs losing oneself to learn; the eternal guardian's itch. Rationale:
  fortress + open gate sun. Opener: motif ef-med-sun. Seal: gold spark.
  Motif: golden.
- p6c31 · §306 Stoics and Epicureans · 207w · Shoot · knowledge-sun. Gist: the
  Stoic's stones-and-worms stomach vs the Epicurean garden. Rationale: garden
  wall + sun (the chapter sides with the garden). Opener: motif ef-med-sun.
  Seal: gold spark. Motif: golden.
- p6c32 · §307 In favour of criticism · 173w · Shoot · self-fashioning. Gist:
  criticism as shedding skin; living forces affirming. Rationale: shed skin +
  new sun. Opener: motif ef-med-sun. Seal: gold spark. Motif: golden.
- p6c33 · §308 The history of every day · 95w · Shoot · self-fashioning. Gist:
  habits of cowardice or courage; examining the inside of things. Rationale:
  daily tally + sun. Opener: motif ef-med-sun. Seal: gold spark. Motif: golden.
- p6c34 · §309 From the seventh solitude · 133w · Shoot · solitude-walk. Gist:
  the wanderer weeps; Armida's gardens seduce; the tired wounded foot walks on.
  Rationale: shut door + garden glimpse on the path. Opener: motif ef-med-path.
  Seal: wave. Motif: golden.
- p6c35 · §310 Will and wave · 290w · Shoot · sea-voyage. Gist: the greedy wave
  hunting treasure; green dusk and thunderbolts; "you and I are of one kind".
  Rationale: the Hokusai study — clawed foam hooks + green wall (ultramarine
  flat) blotting the sun. Opener: motif ef-med-voyage. Seal: ship. Motif: wave.
- p6c36 · §311 Refracted light · 299w · Shoot · knowledge-sun. Gist: bravery vs
  tired lament; offering one's faults up for laughter. Rationale: prism sun
  (refraction staged literally). Opener: motif ef-med-sun. Seal: gold spark.
  Motif: golden.
- p6c37 · §312 My dog · 57w · Seed · self-fashioning. Gist: pain named "dog" —
  faithful, scoldable. Rationale: CSS spark only; gold (domesticated pain is
  warm). Seal: gold spark. NO manifest entry.
- p6c38 · §313 No image of torment · 54w · Seed · solitude-walk. Gist: after
  Raphael — never paint torment; refuse the sublime torturer. Rationale: CSS
  spark only; vermilion (a refusal, a resistance). Seal: vermilion spark. NO
  manifest entry.
- p6c39 · §314 New domestic animals · 54w · Seed · solitude-walk. Gist: lion and
  eagle as strength-gauges. Rationale: CSS spark only; vermilion (the beasts'
  wildness). Seal: vermilion spark. NO manifest entry.
- p6c40 · §315 On the last hour · 62w · Shoot · sea-voyage. Gist: storms as
  danger — Cromwell's storm, the burned-out light, self-extinguishing. Rationale:
  storm-ship + guttering lamp. Opener: motif ef-med-voyage. Seal: ship.
  Motif: ship.
- p6c41 · §316 Prophetic human beings · 176w · Shoot · solitude-walk. Gist:
  prophets suffer like weather-sensitive monkeys; pains as prophets. Rationale:
  storm-cloud + sheltering figure on the path. Opener: motif ef-med-path. Seal:
  wave. Motif: golden.
- p6c42 · §317 Retrospection · 143w · Shoot · art-music. Gist: music recalls a
  winter solitude; pathos mistaken for ethos. Rationale: music notes + winter
  house in the lyre frame. Opener: motif ef-med-lyre. Seal: gold spark.
  Motif: golden.
- p6c43 · §318 Wisdom in pain · 230w · Shoot · sea-voyage. Gist: pain as the
  captain's "pull in the sails"; heroic pain-bringers. Rationale: reefed sails
  + storm pennant. Opener: motif ef-med-voyage. Seal: ship. Motif: ship.
- p6c44 · §319 As interpreters of our experiences · 159w · Shoot · knowledge-sun.
  Gist: face experience like a scientific experiment; be one's own guinea-pig.
  Rationale: alembic + stern sun. Opener: motif ef-med-sun. Seal: gold spark.
  Motif: golden.
- p6c45 · §320 On meeting again · 100w · Shoot · dawn-vow. Gist: "I want to
  create for myself a sun of my own." Rationale: a hand-held small sun (the
  chapter's closing line staged literally). Opener: motif ef-med-dawn. Seal:
  gold spark. Motif: morning.
- p6c46 · §321 New caution · 122w · Shoot · moral-shadow. Gist: don't punish —
  raise yourself higher; darken others through your light. Rationale: rising
  stair + outshining sun, vermilion chord (a moral chapter). Opener: motif
  ef-med-column. Seal: vermilion spark. Motif: golden.
- p6c47 · §322 Parable · 46w · Seed · solitude-walk. Gist: irregular galaxies
  within; the chaos and labyrinth of existence. Rationale: CSS spark only;
  vermilion — kind-discipline governs (solitude-walk), never local cleverness.
  Seal: vermilion spark. NO manifest entry.
- p6c48 · §323 Luck in fate · 33w · Seed · sea-voyage. Gist: fighting on the
  opponents' side as predestination for victory. Rationale: CSS spark only; gold
  (voyage luck). Seal: gold spark. NO manifest entry.
- p6c49 · §324 In media vita · 150w · Shoot · dawn-vow. Gist: life as experiment;
  knowledge as a world of dangers, victories, dance-grounds. Rationale: dawn
  over a dancing-ground. Opener: motif ef-med-dawn. Seal: gold spark. Motif:
  morning.
- p6c50 · §325 What belongs to greatness · 70w · Shoot · self-fashioning. Gist:
  greatness = inflicting great suffering without perishing of it. Rationale:
  stern unwavering sun. Opener: motif ef-med-sun. Seal: gold spark. Motif: golden.
- p6c51 · §326 Soul-doctors and pain · 421w · Branch · moral-shadow. Gist:
  against the preachers' radical cures; life's anaesthetics; happiness of the
  passionate. Rationale: poppy + fever banner. Opener: banner
  ef-branch-golden-pain. Seal: vermilion spark. Motif: golden.
- p6c52 · §327 Taking seriously · 98w · Shoot · self-fashioning. Gist: the
  intellect as creaking machine; prove the serious beast's prejudice wrong —
  laugh! Rationale: laughing sun (rays askew, joyful — NOT a face). Opener:
  motif ef-med-sun. Seal: gold spark. Motif: golden.
- p6c53 · §328 To harm stupidity · 204w · Shoot · knowledge-sun. Gist: ancient
  philosophy harmed stupidity's good conscience (vs Christianity harming
  egoism's). Rationale: Socratic gadfly + sun. Opener: motif ef-med-sun. Seal:
  gold spark. Motif: golden.
- p6c54 · §329 Leisure and idleness · 518w · Branch · moral-shadow. Gist: American
  haste vs otium; "nobility and honour are attached solely to otium and bellum".
  Rationale: sundial-at-rest banner. Opener: banner ef-branch-golden-otium.
  Seal: vermilion spark. Motif: golden.
- p6c55 · §330 Applause · 74w · Shoot · evening-fate. Gist: the thinker needs his
  OWN clapping of hands; Tacitus on glory's last shirt. Rationale: two hands +
  dusk coin. Opener: motif ef-med-coin. Seal: vermilion spark. Motif: golden.
- p6c56 · §331 Better deaf than deafened · 114w · Shoot · evening-fate. Gist:
  the shouting market; find quietude between two noises. Rationale: stopped
  ears + quiet coin. Opener: motif ef-med-coin. Seal: vermilion spark. Motif:
  golden.
- p6c57 · §332 The evil hour · 47w · Seed · solitude-walk. Gist: the malicious
  little bird — "What do you matter?" Rationale: CSS spark only; vermilion (the
  bird's malice). Seal: vermilion spark. NO manifest entry.
- p6c58 · §333 What knowing means · 325w · Branch · knowledge-sun. Gist:
  Spinoza's intelligere as the battlefield truce of laugh/lament/curse drives.
  Rationale: three-arrows banner. Opener: banner ef-branch-golden-drives. Seal:
  gold spark. Motif: golden.
- p6c59 · §334 One must learn to love · 213w · Shoot · art-music. Gist: learning
  a melody = learning to love; hospitality toward the strange. Rationale: melody
  staff (blank note-heads) + lyre. Opener: motif ef-med-lyre. Seal: gold spark.
  Motif: golden.
- p6c60 · §335 Long live physics! · 1164w · Branch+ · knowledge-sun. Gist: the
  conscience behind conscience; Kant's fox; become who you are — physicists to
  be creators. Rationale: laboratory plate (prism/mirror/fox). Opener: banner
  ef-plate-physics. Reading: GOLD cap, gold spark seal. Motif: golden.
- p6c61 · §336 Nature's stinginess · 64w · Shoot · evening-fate. Gist: why may
  great humans not shine visibly, rising and setting like the sun? Rationale:
  a dimmed coin (the withheld shining). Opener: motif ef-med-coin. Seal:
  vermilion spark. Motif: golden.
- p6c62 · §337 The 'humanity' of the future · 475w · Branch · evening-fate.
  Gist: the historical sense; bearing millennia; happiness like the evening sun
  pouring into the sea; the poorest fisherman's golden oar. Rationale: evening-
  sun + fisherman banner (dawn-gradient station: warmer, lower sun). Opener:
  banner ef-branch-golden-humanity. Seal: vermilion spark. Motif: morning.
- p6c63 · §338 The will to suffer · 916w · Branch+ · moral-shadow. Gist: against
  the religion of compassion; share joy, not pain; live in seclusion for
  yourself. Rationale: night-garden gate plate. Opener: banner
  ef-plate-compassion. Reading: GOLD cap, vermilion seal. Motif: morning.
- p6c64 · §339 Vita femina · 251w · Shoot · art-music. Gist: the veil over the
  peaks; life covered by a veil of gold-thread possibilities; life is a woman.
  Rationale: veil medallion (dawn-gradient station). Opener: motif ef-med-veil.
  Seal: gold spark. Motif: sunrise.
- p6c65 · §340 The dying Socrates · 217w · Shoot · moral-shadow. Gist: "O Crito,
  I owe Asclepius a rooster" — life is a disease; overcome even the Greeks.
  Rationale: rooster medallion (dawn-gradient station; the dawn bird as
  death-word). Opener: motif ef-med-rooster. Seal: vermilion spark. Motif: sunrise.
- p6c66 · §341 The heaviest weight · 233w · LANDMARK (Shoot weight) ·
  sea-voyage. Gist: the demon's eternal recurrence; the spider and moonlight;
  the heaviest weight or the divine seal. Rationale: midnight hourglass tableau
  — the gradient's eclipse, the ONLY Aubergine (G5). Palette: Deep Night +
  Aubergine + gold sand. Opener: banner gs-hourglass-night. Reading: GOLD cap,
  hourglass seal. Caption: "The eternal hourglass of existence is turned over
  again and again". Motif: hourglass.
- p6c67 · §342 Incipit tragoedia · 282w · LANDMARK (Shoot weight) · sea-voyage.
  Gist: Zarathustra leaves the mountain, steps before the sun, blesses the cup;
  going under. Rationale: sunrise arrival tableau (v2 verified). Opener: banner
  gs-sunrise-forth. Reading: GOLD cap, ship seal. Caption: ""You great heavenly
  body!" — Incipit tragoedia". Motif: sunrise-forth.

### PART-7 · Book Five: We Fearless Ones (long-shadow weather)

Shadow key: L0 chapters p7c1–p7c5 (incl. landmark p7c1 at L1), L1 p7c6–p7c13,
L2 p7c14–p7c26, L3 p7c27–p7c41. Meta-rule lengths step with L (supervisor CSS).

- p7c1 · §343 How to understand our cheerfulness · 450w · LANDMARK (Branch
  weight) · sea-open. Gist: God's death casts its first shadow; autumnal Europe;
  new dawn for free spirits; the open sea. Rationale: spire + shadows + ship
  sailing into gold (L1: the FIRST shadow). Palette: afternoon gold + vermilion
  bars. Opener: banner gs-cheer-shadow. Reading: GOLD cap, ship seal. Caption:
  "Finally the horizon seems clear again — the sea, our sea, lies open again".
  Shadow: L1. Motif: afternoon.
- p7c2 · §344 In what way we are still pious · 863w · Branch+ · knowledge-essay.
  Gist: science's faith in truth; will to truth as hidden will to death; God as
  our longest lie. Rationale: altar-of-truth plate. Opener: banner ef-plate-pious.
  Reading: GOLD cap, hourglass seal. Shadow: L0. Motif: hourglass.
- p7c3 · §345 Morality as a problem · 692w · Branch · moral-shadow. Gist:
  morality needs personal love, not cold antennae; critique the value of "Thou
  Shalt". Rationale: tablet + frog banner. Opener: banner
  ef-branch-shadow-morality. Seal: vermilion tick. Shadow: L0. Motif: afternoon.
- p7c4 · §346 Our question mark · 545w · Branch · moral-shadow. Gist: man
  against world; laughing at "and"; abolish venerations or yourselves — nihilism
  either way. Rationale: question-mark banner. Opener: banner
  ef-branch-shadow-question. Seal: vermilion tick. Shadow: L0. Motif: afternoon.
- p7c5 · §347 Believers and their need to believe · 636w · Branch · moral-shadow.
  Gist: faith as weakness's foothold; fanaticism as the weak's will; dancing
  beside abysses. Rationale: altar + tightrope-dancer banner. Opener: banner
  ef-branch-shadow-believers. Seal: vermilion tick. Shadow: L0. Motif: afternoon.
- p7c6 · §348 On the origin of scholars · 507w · Branch · scholar-shadow. Gist:
  scholars grow from clerks, lawyers, pastors; Jews teach logic; democratic
  schematizers. Rationale: desk + folios banner (v2 study). Opener: banner
  ef-branch-shadow-scholar. Seal: vermilion tick. Shadow: L1. Motif: afternoon.
- p7c7 · §349 Once again, the scholars · 239w · Shoot · scholar-shadow. Gist:
  self-preservation as distress; abundance vs Darwin's struggle; will to power.
  Rationale: mask + squandering-cornucopia. Opener: motif ef-med-mask. Seal:
  vermilion tick. Shadow: L1. Motif: afternoon.
- p7c8 · §350 In honour of the homines religiosi · 192w · Shoot · moral-shadow.
  Gist: the South's deep distrust vs Northern shallowness; Rome vs the
  Revolution's sheep. Rationale: altar flame (Southern depth). Opener: motif
  ef-med-flame. Seal: vermilion tick. Shadow: L1. Motif: afternoon.
- p7c9 · §351 In honour of the priestly type · 458w · Branch · moral-shadow.
  Gist: cowlike serenity; the priest as holy ear and human sacrifice; "philosopher"
  as modesty. Rationale: confessional + cow banner. Opener: banner
  ef-branch-shadow-priest. Seal: vermilion tick. Shadow: L1. Motif: afternoon.
- p7c10 · §352 Morality hardly dispensable · 279w · Shoot · moral-shadow. Gist:
  the naked European needs morality's clothing; tame animals in disguise.
  Rationale: veil + flame (disguise that dresses). Opener: motif ef-med-flame.
  Seal: vermilion tick. Shadow: L1. Motif: afternoon.
- p7c11 · §353 On the origin of religions · 359w · Branch · moral-shadow. Gist:
  founders invent the interpretation, not the life; Jesus/Paul, Buddha; festival
  of recognition. Rationale: two-paths banner. Opener: banner
  ef-branch-shadow-religion. Seal: vermilion tick. Shadow: L1. Motif: afternoon.
- p7c12 · §354 On 'the genius of the species' · 1084w · Branch+ ·
  knowledge-essay. Gist: consciousness as herd-net; language as bridge; the
  solitary predator needs none of it. Rationale: mirror-net plate. Opener:
  banner ef-plate-herdnet. Reading: GOLD cap, hourglass seal. Shadow: L1.
  Motif: hourglass.
- p7c13 · §355 Origin of 'knowledge' · 434w · Branch · knowledge-essay. Gist:
  knowledge as tracing the strange back to the familiar; fear's instinct.
  Rationale: street-lamp + grid banner. Opener: banner
  ef-branch-shadow-knowledge. Seal: gold spark. Shadow: L1. Motif: afternoon.
- p7c14 · §356 Ever more 'artistic' · 811w · Branch+ · evening-caption. Gist:
  roles become character; Athenian/American actor-faith; wooden iron; no more
  society-material. Rationale: curtain + wooden-iron plate (the dusk thesis at
  full L3 length — the chapter's "never again" earns the longest shadow early).
  Opener: banner ef-plate-actors. Reading: GOLD cap, vermilion seal. Shadow:
  L3. Motif: afternoon.
- p7c15 · §357 What is German? · 1570w · Branch+ · German-portrait. Gist:
  Leibniz/Kant/Hegel as German self-knowledge; Schopenhauer's atheism as
  European event; Christian morality's self-overcoming. Rationale: three-niches
  plate. Opener: banner ef-plate-german. Reading: GOLD cap, gold seal. Shadow:
  L1. Motif: afternoon.
- p7c16 · §358 Peasant rebellion of the spirit · 993w · Branch+ · German-portrait.
  Gist: Luther destroyed the Church he meant to save; the North's flattening;
  church nobler than state. Rationale: ruined-arch plate. Opener: banner
  ef-plate-luther. Reading: GOLD cap, gold seal. Shadow: L2. Motif: afternoon.
- p7c17 · §359 Revenge against the spirit · 510w · Branch · scholar-shadow. Gist:
  the poisoned failure's morality-boom; Stoicism of gesture; wisdom as hiding
  place. Rationale: poison + drum banner. Opener: banner
  ef-branch-shadow-revenge. Seal: vermilion tick. Shadow: L2. Motif: afternoon.
- p7c18 · §360 Two kinds of causes · 264w · Shoot · knowledge-essay. Gist: the
  powder keg vs the match; goals as beautifying pretexts; the ship follows the
  current. Rationale: keg + match folio. Opener: motif ef-med-letter. Seal: gold
  spark. Shadow: L2. Motif: afternoon.
- p7c19 · §361 On the problem of the actor · 516w · Branch · German-portrait.
  Gist: falseness with good conscience; coats turning with every wind; woman as
  artistic. Rationale: turning-coat + masks banner. Opener: banner
  ef-branch-shadow-actor. Seal: gold spark. Shadow: L2. Motif: afternoon.
- p7c20 · §362 Masculinization of Europe · 268w · Shoot · love-sexes. Gist:
  Napoleon as antiquity's continuator; war's classical age; one Europe.
  Rationale: granite block + eagle mask. Opener: motif ef-med-mask. Seal:
  vermilion tick. Shadow: L2. Motif: afternoon.
- p7c21 · §363 Sexes on love · 564w · Branch · love-sexes. Gist: woman's total
  devotion vs man's possession-thirst; love as immoral nature. Rationale:
  taker/giver banner. Opener: banner ef-branch-shadow-sexes. Seal: vermilion
  tick. Shadow: L2. Motif: afternoon.
- p7c22 · §364 The hermit speaks · 223w · Shoot · love-sexes. Gist: digesting
  fellow men; courage, improvement, self-hypnosis/patience. Rationale: glass-
  button mask (the chapter's hypnosis image). Opener: motif ef-med-mask. Seal:
  vermilion tick. Shadow: L2. Motif: afternoon.
- p7c23 · §365 The hermit speaks again · 222w · Shoot · love-sexes. Gist: cloaks,
  ghosts, closed doors; posthumous people alive only after death. Rationale:
  ghost-mask + closed door. Opener: motif ef-med-mask. Seal: vermilion tick.
  Shadow: L2. Motif: afternoon.
- p7c24 · §366 Faced with a scholarly book · 687w · Branch · knowledge-essay.
  Gist: think outdoors; "can they walk? can they dance?"; the specialist's hump;
  bless the hunched backs. Rationale: hunched-reader + mountain banner. Opener:
  banner ef-branch-shadow-hunch. Seal: gold spark. Shadow: L2. Motif: afternoon.
- p7c25 · §367 Monologue vs witnesses · 121w · Shoot · art-music. Gist:
  monologue art vs art before witnesses; the pious have no solitude; music of
  forgetting. Rationale: lone pipe-reeds. Opener: motif ef-med-pipe. Seal: gold
  spark. Shadow: L2. Motif: afternoon.
- p7c26 · §368 The cynic speaks · 493w · Branch · German-portrait. Gist: the body
  vs Wagner — foot, stomach, breath; anti-theatrical; the neighbour reigns at
  the theatre. Rationale: stomping-foot banner. Opener: banner
  ef-branch-shadow-cynic. Seal: gold spark. Shadow: L2. Motif: afternoon.
- p7c27 · §369 Our coexistence · 297w · Shoot · love-sexes. Gist: taste vs
  creative power; the mother-type outproducing judgment; Greece never knew what
  it did. Rationale: the fertile mother-type wears a mask she never chose —
  mask + shadow slash. Opener: motif ef-med-mask. Seal: vermilion tick.
  Shadow: L3. Motif: afternoon.
- p7c28 · §370 What is romanticism? · 925w · Branch+ · art-music. Gist:
  hunger vs superabundance; Dionysian vs romantic pessimism; Rubens/Hafis/Goethe
  vs Schopenhauer/Wagner. Rationale: two-springs plate. Opener: banner
  ef-plate-romantic. Reading: GOLD cap, gold seal. Shadow: L3. Motif: afternoon.
- p7c29 · §371 We incomprehensible ones · 239w · Shoot · love-sexes. Gist:
  growing like trees in all directions; the dark fate of height; lightning.
  Rationale: tree + lightning mask. Opener: motif ef-med-mask. Seal: vermilion
  tick. Shadow: L3. Motif: afternoon.
- p7c30 · §372 Why we are not idealists · 346w · Branch · art-music. Gist:
  ideas as blood-suckers; vampirism of the senses; wax in the ear reversed.
  Rationale: bleeding-scroll + siren banner. Opener: banner
  ef-branch-shadow-ideal. Seal: gold spark. Shadow: L3. Motif: afternoon.
- p7c31 · §373 'Science' as prejudice · 544w · Branch · knowledge-essay. Gist:
  against Spencer and the mechanists; music cannot be counted; reverence for the
  horizon. Rationale: gears + dissolving-music banner. Opener: banner
  ef-branch-shadow-science. Seal: gold spark. Shadow: L3. Motif: afternoon.
- p7c32 · §374 Our new 'infinite' · 272w · Shoot · knowledge-essay. Gist:
  perspectivism; infinite interpretations; the monster of the unknown world.
  Rationale: corner + star-field folio ("we cannot look around our corner").
  Opener: motif ef-med-letter. Seal: star. Shadow: L3. Motif: star.
- p7c33 · §375 Why we seem Epicureans · 210w · Shoot · knowledge-essay. Gist:
  caution of the once-bitten; curiosity for the boundless; riding fiery animals.
  Rationale: rider + boundless-horizon folio. Opener: motif ef-med-letter. Seal:
  gold spark. Shadow: L3. Motif: afternoon.
- p7c34 · §376 Our slow periods · 118w · Shoot · art-music. Gist: autumnal
  sunniness after ripe work; life flowing like honey; the long fermata. Rationale:
  honey-fermata pipes. Opener: motif ef-med-pipe. Seal: gold spark. Shadow: L3.
  Motif: afternoon.
- p7c35 · §377 We who are homeless · 911w · Branch+ · sea-open. Gist: thin ice;
  emigrants; good Europeans; the hidden Yes; compelled by a faith to sail.
  Rationale: cracking-ice + emigrant-ship plate. Opener: banner
  ef-plate-homeless. Reading: GOLD cap, ship seal. Shadow: L3. Motif: ship.
- p7c36 · §378 'And become bright again' · 136w · Shoot · knowledge-essay. Gist:
  open wells clouded by the age; take it into the depths; become bright again.
  Rationale: well + brightening water folio. Opener: motif ef-med-letter. Seal:
  gold spark. Shadow: L3. Motif: afternoon.
- p7c37 · §379 The fool's interlude · 268w · Shoot · love-sexes. Gist: contempt
  over hatred; artists of contempt; the age loves the spirit. Rationale: fool's
  cap + mask. Opener: motif ef-med-mask. Seal: vermilion tick. Shadow: L3.
  Motif: afternoon.
- p7c38 · §380 'The wanderer' speaks · 316w · Branch · art-music. Gist: leave the
  town to measure its towers; specific gravity; lightness to rise beyond good
  and evil. Rationale: towers + climbing-figure banner. Opener: banner
  ef-branch-shadow-wanderer. Seal: gold spark. Shadow: L3. Motif: afternoon.
- p7c39 · §381 Being understandable · 644w · Branch · art-music. Gist: wishing
  not to be understood; cold baths and eggs; brevity; the philosopher as good
  dancer; dance as piety. Rationale: bath + egg + dancer banner. Opener: banner
  ef-branch-shadow-dance. Seal: gold spark. Shadow: L3. Motif: afternoon.
- p7c40 · §382 The great health · 524w · Branch · sea-open. Gist: argonauts of
  the ideal; the undiscovered land; the playfully terrible spirit; the tragedy
  begins. Rationale: argonaut-ship banner. Opener: banner
  ef-branch-shadow-argonaut. Seal: ship. Shadow: L3. Motif: ship.
- p7c41 · §383 Epilogue · 305w · LANDMARK (Branch weight) · art-music. Gist: the
  raven-black question mark interrupted; hobgoblin laughter; bright mid-morning;
  bagpipes; the singer's curse; dance. Rationale: dance-ring release tableau
  (v2 verified) — the shadows END here; morning returns as dance. Palette:
  bright mid-morning. Opener: banner gs-epilogue-ring. Reading: GOLD cap, arc
  seal (via ring-fragment). Caption: "The kingdom of the dance — bright
  mid-morning". Shadow: none (release). Motif: ring-fragment.

### PART-8 · Appendix: Songs of Prince Vogelfrei (sunset weather)

- p8c1 · Appendix · 2198w · LANDMARK · songbook. Gist: fourteen outlaw songs —
  Goethe-parody, poet's calling, southern flight, Beppa, night-bark, albatross,
  goatherd, vacillators, fool, sick poets, happiness, new seas, Sils-Maria,
  Mistral dance. Rationale: ONE farewell tableau (GR7) + rubricated songbook
  gathering. Palette: sunset — red disc, black sea, gold rim. Opener: song
  gs-appendix-farewell. Reading: centered verse, rubricated titles (14 indices
  per §3.8), no drop-cap, red-disc seal + ship colophon. Caption: "Songs of
  Prince Vogelfrei — the outlaw sings the sun down". Motif: sunset.

Map census: 67 + 41 + 1 = 109. ✓ Seeds (7, no manifest): p6c12, p6c37, p6c38,
p6c39, p6c47, p6c48, p6c57. Manifest entries: 102.

## 6. grammar_notes (for the merged manifest)

Golden-hour FULL-WIDTH seascape tableaux for Book 4 (applause-ray sun + surf +
chapter actor; dawn chapters §276/§337–342 graduate morning→sunrise→NIGHT→
sunrise-forth) and long-shadow FULL-WIDTH tableaux for Book 5 (westering sun +
casting objects + L0→L3 vermilion shadow-bars lengthening toward §383; §383
releases into bright mid-morning dance). Titles stay HTML; captions are HTML
figcaptions (GR5). All art uses contained viewBoxes (1600×520/560/620/640 slice,
480×300 meet) inside `overflow-x: clip` slots (GR3). Drop-caps are LETTERS only
via the shared fix (GR6) — no per-chapter workarounds. Spark alternation is BY
CONTENT KIND (voyage/knowledge/art/dawn gold; moral/solitude/evening vermilion),
never modulo. §341 is the SOLE Aubergine use (G5). Branch+ = same grammar, larger
canvas, authored actors, gold cap: one tier below landmarks. No new §10b motifs
proposed. Appendix = one farewell tableau + rubricated songbook gathering (14
titles).

## 7. Landmarks

- p6c66 §341 gs-hourglass-night (midnight hourglass; sole Aubergine; gold cap).
- p6c67 §342 gs-sunrise-forth (rising sun + walkers + eagle + serpent; gold cap).
- p7c1 §343 gs-cheer-shadow (first shadow + open sea; gold cap).
- p7c41 §383 gs-epilogue-ring (dance ring + bagpiper; gold cap; shadow release).
- p8c1 gs-appendix-farewell (red disc + crossing ship + sun-road; song class).

## 8. Verdicts + open risks (honest)

- Sampled vs read: ALL 109 chapter JSONs read in full (every paragraph,
  including all 355 Appendix paragraphs). Prototype v2 viewed at desktop
  1440px (4 studies + caption checks); phone/tablet viewing is the ENGINEER's
  gate (GR3 containment is specified, not yet rendered at 390px by this agent).
- What I did NOT do: no theme.css/index.html edits (not owned); no SVG file
  authored (engineer's file — full draw-list in §4); no seal URIs minted (all
  needed seals exist; part-7 default switch + ring-fragment wiring are
  supervisor one-liners).
- Open risks for the engineer: (1) 56 symbols is the largest cohort sheet —
  keep each symbol's path count modest so `art/cohort-ef.svg` stays servable;
  (2) the L0→L3 shadow lengths must be measured from consistent caster
  x-positions or the lengthening won't read — pin caster x per banner template;
  (3) §341's Aubergine must not leak into any other symbol — grep the sheet for
  `#2A1540` before merge (exactly one symbol may contain it); (4) rubrication
  indices 145/213 must be added to theme.css or two song titles ship black;
  (5) the `?`-mark in `ef-branch-shadow-question` must be a DRAWN shape, never
  a `<text>` glyph (GR5).
- Requests to supervisor/ReaderLead (via lead): (a) add theme rule mapping
  `data-art="ring-fragment"` → `--seal-arc`; (b) switch part-7 default seal to
  `--seal-spark-verm` (shadow-tick); (c) add rubrication indices 145 + 213;
  (d) add long-shadow meta-rule lengths L0–L3 per the §5 `shadow` field.
