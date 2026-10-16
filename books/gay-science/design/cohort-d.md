# Cohort D — Book Three (part-5, §108–275) · Design Spec

Owner: GsCohortDDesigner. Status: SPEC (design only — no implementation).
Binding parents: `books/gay-science/design/ART-DIRECTION.md` (NOON Direction A),
READER-CONTRACT v1.1 (manifest `{src,symbol,class,motif,caption}`, self-contained
`<symbol>` sprites — Twilight pattern, zero cross-file `<use>` refs),
`.omp/design/critiques/gay-science.md` (G1–G6 + GR1–GR7), `cohort-c.md` (sibling
spec structure mirrored here).
Supervisor relay absorbed: full-bleed full-width tableaux (GR4/GR7), inscriptions
are HTML figcaption only, never SVG text (GR5), zero phone overflow — banners bleed
via margin, never transforms, `overflow-x: clip` (GR3), drop-caps are LETTERS only
via ReaderLead's shared classifier (GR6 — no per-chapter workarounds).

Companion: `books/gay-science/design/cohort-d.json` (provisional per-chapter design
JSON, §10a schema + `weight`/`kind`/`gist` fields; supervisor merges into
`design/chapters.json`). See §5.

## 0. What Book Three actually is

168 fragments (§108–275), all 168 chapter JSONs read in full for this spec. It is
the abyss-at-noon book — the book's climax cohort — in five real movements:

1. **Opening salvo** p5c1–5 (§§108–112): God's shadow still shown in caves after
   his death (p5c1); "Let us beware" — de-deify nature, no laws, no purposes,
   chaos not organism (p5c2); origin of knowledge from life-preserving errors,
   "to what extent can truth be incorporated?" (p5c3); logic born of the
   illogical, identity-guessing beasts (p5c4); cause-and-effect as carved-up
   continuum, science as description (p5c5).
2. **Morality/herd/knowledge braid** p5c6–16 (§§113–123): poisons of scientific
   thought (p5c6); moral scope of all experience (p5c7); the four errors (p5c8);
   herd-instinct diptych — morality as herd function, ancient terror of being
   alone (p5c9–10); benevolence/altruism as strong/weak function-seeking
   (p5c11–12); your-virtue health of soul (p5c13); life-not-an-argument (p5c14);
   Christianity's moral scepticism, toreador ancients (p5c15); knowledge wanting
   to be more than a means, Pope Leo's politeness (p5c16).
3. **The climax run** p5c17–21 (§§124–128): the little ship on the infinite sea,
   no more land (p5c17); **THE MADMAN — God dies at bright morning**, lantern
   lit, sea drunk up, horizon wiped, earth unchained from the sun, blood on
   knives, smashed lantern, churches as tombs of God (p5c18, THE landmark);
   mystical-explanations sting (p5c19); will-as-magic aftereffect of the oldest
   religiosity, Schopenhauer enthroning mythology (p5c20); prayer-mills and
   rosaries for the poor in spirit (p5c21).
4. **The religion siege** p5c22–45 (§§129–152): Luther's wise/unwise (p5c22);
   the ugly-world decision (p5c23); suicide lever (p5c24); taste against
   Christianity (p5c25); the inescapable hypothesis (p5c26); pessimism as diet,
   rice and alcohol poisoning (p5c27); origin of sin — Jewish feeling, crimen
   laesae majestatis divinae, Prometheus and tragedy (p5c28); chosen people
   (p5c29); Jesus possible only under Jehovah thunderclouds (p5c30); Christ's
   error about sin-torment (p5c31); Paul's evil eye vs Greek gilded passions
   (p5c32); too Jewish, too oriental (p5c33–34); Buddha's incense clearing the
   church (p5c35); polytheism's plurality of norms, new eyes, overmen (p5c36 —
   the counter-ideal); religious wars (p5c37); vegetarian narcotics (p5c38);
   German un-Christian hopes (p5c39); liquor-and-Christianity narcotics (p5c40);
   reformations diptych — corruption, sects, the breaking eggshell, "where
   there is ruling, there are masses" (p5c41–42); brutal saints (p5c43); origin
   of religion as interpretation-error (p5c44); the greatest change — the
   lighting and colours of everything changed (p5c45).
5. **The maxim field** p5c46–168 (§§153–275): homo poeta hinge — "I have slain
   all gods; what becomes of the fifth act?" (p5c46) — then ~120 miniature
   portraits of types (proud, envious, joyless, good-natured, thorough),
   virtues and vices (generosity, forbearance, guilt, sacrifice, habit),
   herd-notes (crowd, fame, applause, parliamentarianism, mediators, imitators),
   knowledge-sparks (thoughts, cause/effect, mathematics, books, naming), and
   sea-flashes (house in the sea, flying-fish skinnedness), closing in the
   catechism §§268–275: heroic → revalued weights → "become who you are" →
   compassion-danger → hopes → shame → "the seal of having become free."

## 1. References studied (links + lessons)

1. **Edvard Munch, *The Sun* (1911), University Aula, Oslo** —
   https://www.uio.no/english/about/culture/collection/aula/the-sun.html
   (viewed: monumental 455×780 cm sunrise over the archipelago; rays radiate
   past the central canvas onto the flanking walls — the sun's architecture
   exceeds its frame). Lesson ADOPTED: the landmark fan must behave the same
   way — 24 rays drawn LONG (r=840) so the viewBox clips them edge-to-edge;
   the glare exceeds the frame (GR4's energy source). Lesson REJECTED: impasto
   painterliness — our medium stays flat SVG masses (G4), no texture.
2. **William Blake, *The Ancient of Days* (1794, frontispiece to *Europe a
   Prophecy*)** — https://en.wikipedia.org/wiki/The_Ancient_of_Days (read:
   Urizen crouching in a circular design, compass extended over the dark void;
   "when he set a compass upon the face of the earth"). Lesson ADOPTED: the
   divine instrument as geometry — the knowledge Branch banners carry dials,
   lenses, and streams as their actors (the compass redrawn as the knower's
   tools). Lesson REJECTED: theistic grandeur — our God is dead, so every
   instrument in this cohort is broken, cracked, or contingent (cracked dial,
   shattered tablet, smashed lantern).
3. **Tarot de Marseille, *Le Soleil* (XIX)** —
   https://tarot-heritage.com/from-trionfi-to-majorarcana/il-sole-le-soleil-the-sun
   (read: straight-and-wavy alternating rays, flat enamel colour fields, walled
   garden below the disc). Lesson ADOPTED: flat emblem geometry + strict ray
   alternation (gold straight / vermilion wavy → our gold 6px / vermilion 4px
   alternation) and the disc-over-ground staging our shadow band mirrors.
   Lesson REJECTED: any face on the sun — GR2's stern/flat ruling holds (no
   faces anywhere in this cohort; the disc is blank glare).
4. **Katsushika Hokusai, *Fine Wind, Clear Morning* (Red Fuji, c. 1830–31)** —
   https://en.wikipedia.org/wiki/Fine_Wind%2C_Clear_Morning (read: one flat
   vermilion mass carries the whole image; gradation only in sky bands, the
   subject is a single bold shape). Lesson ADOPTED: one flat mass per banner —
   each Branch tableau is carried by ONE dominant actor (serpent, egg,
   prayer-mill) silhouetted in the shadow band, everything else quiet.
   Lesson REJECTED: landscape depth — our tableaux are stagings (disc + fan +
   shadow stage), not receding landscapes; no horizon perspective, only the
   wiped horizon-gap in the landmark.

Book-level stack inherited: Matisse *La Danse* (flat vermilion gesture-figures
→ madman + crowd silhouettes, gestures varied ≥6°), cover `#gs-spark` geometry
family (→ marginal sparks, redrawn not copied), `gs-part-v` (disc + lantern →
cohort grammar at larger scale).

## 2. Three cohort directions (medium/composition variation) + choice

All three stay inside NOON §7-D: zenith altitude, harshest light, tightest
rhythm, Seeds as marginal sparks alternating gold/vermilion BY CONTENT KIND
(never modulo), p5c18 as THE landmark (maximal 24-ray fan + inverted lantern),
flat discipline (G4), dark palette §2 tokens, zero Aubergine (G5).

### D1 — "Zenith Dial" (instrumental noon)
Openers as noon-instruments: a horizontal noon-line rules each banner, the
chapter's actor hangs from it like a gnomon casting the SHORTEST shadow;
Shoots get dial-quadrants; Seeds get tick-marks. Medium: spare diagrammatic
line-work in gold on abyssal, shadows as measured bars. Reference: sundials,
Blake's compass literalized.
REJECTED: it is too cool and instrumental for the book's bloodiest cohort —
the madman's marketplace needs BODIES (laughers, a leaper, grave-diggers),
not instruments; a dial cannot bleed, and §125 must bleed. It would also read
as navigation furniture (Book Four owns ships/instruments) and strand the
religion siege — prayer-mills and serpents don't hang from gnomons. Verdict:
most precise, least Nietzschean — measurement, not murder.

### D2 — "Marketplace Frieze" (crowd relief)
Openers as marketplace crowd-bands: rows of head-silhouette reliefs run
full-width, the madman leaping among them; knowledge essays get thinker-head
rows; Seeds get single head-dots. Medium: bone-on-night silhouette relief.
Reference: Parthenon-frieze procession (same root as rejected C1).
REJECTED: crowd-everywhere flattens the knowledge essays — §§109–112 need
lenses, streams, and dials, not heads — and it repeats cohort C's rejected
frieze grammar (icons in a row ≠ tableau, GR4 risk). Worse, it would drown
the 120 Seeds in crowd furniture — ArtDirector's exact warning against voyage
furniture (critique §C) applies to crowd furniture here. Verdict: most
theatrical, least various — one relief stamp for 168 different thoughts.

### D3 — "Lantern at Noon" (CHOSEN)
Branch/landmark openers as full-width zenith tableaux on one staging plan:
the flat zenith disc rides top-center with a steep ray fan; below it a Deep
Night **shadow band** (the stage — caves, marketplace dust, church-tombs all
live here); kind-emblem + chapter-specific actor silhouetted left/right in
the band (dials, serpent, egg, prayer-mill, god-discs…); a **noon-line** with
a center gnomon-tick rules the band's top edge (the shortest-shadow mark —
the cohort's small signature); the HTML title sits center on a legibility
scrim (cover-veil precedent). The **lantern** is the through-line object: lit
beneath the disc in the landmark, miniaturized as the godshadow kind-emblem,
smashed into shards at the tableau's foot. Shoots get **zenith medallions**
(one actor in a ring + noon-tick + kind-tint flanking sparks). Seeds get
marginal sparks tinted by kind. Medium: flat SVG mural shapes in §2 tokens —
the same medium as cover and dividers.
CHOSEN because: (a) G1 reads instantly — the harshest light in the book, disc
at apex in every long opener, between high-morning (IV) and golden hour (VI);
(b) GR4/GR7 by construction — disc + fan + band + two actors + noon-line
fills the whole zone, no half-empty field is possible; (c) its staging
language comes from the chapters themselves (caves and shadows §108, the
marketplace §125, shortest shadow at noon, tombs of God) rather than imported
furniture; (d) it scales `gs-part-v` (disc + lantern) up instead of inventing
a rival system, so the cohort coheres with the sprite sheet.
Title-swap test: put "Book Two — the art book" on these tableaux and the
lantern, shadow band, serpent, and smashed shards are nonsense — that book
needs masks, lyres, and a dancing floor. The system belongs to the abyss
at noon.

## 3. Cohort grammar (engineer brief)

### 3.1 Weights (§6 bands; TOC word counts verified against toc.json part-5)
- **Seed (≤60w)** — 120 chapters: p5c1, p5c7, p5c19, p5c22, p5c23, p5c25,
  p5c26, p5c33, p5c35, p5c40, p5c48, p5c49, p5c50, p5c51, p5c52, p5c53, p5c55,
  p5c56, p5c57, p5c58, p5c59, p5c60, p5c62, p5c64, p5c65, p5c66, p5c68, p5c70,
  p5c71, p5c72, p5c73, p5c74, p5c75, p5c76, p5c77, p5c78, p5c79, p5c80, p5c81,
  p5c82, p5c83, p5c84, p5c86, p5c87, p5c88, p5c89, p5c90, p5c91, p5c92, p5c93,
  p5c94, p5c95, p5c96, p5c97, p5c98, p5c100, p5c101, p5c102, p5c103, p5c104,
  p5c105, p5c107, p5c108, p5c109, p5c110, p5c111, p5c112, p5c113, p5c114,
  p5c115, p5c116, p5c117, p5c118, p5c119, p5c120, p5c121, p5c122, p5c123,
  p5c124, p5c125, p5c126, p5c128, p5c129, p5c130, p5c131, p5c132, p5c133,
  p5c134, p5c135, p5c136, p5c137, p5c138, p5c139, p5c140, p5c141, p5c143,
  p5c145, p5c146, p5c147, p5c148, p5c149, p5c150, p5c151, p5c152, p5c153,
  p5c154, p5c155, p5c156, p5c157, p5c158, p5c159, p5c160, p5c161, p5c162,
  p5c163, p5c164, p5c165, p5c166, p5c167, p5c168.
  NO opener art, NO manifest entry. Marginal spark 26px left of first line
  (CSS-only): gold for light-kinds (knowledge/self/sea), vermilion for
  blood-kinds (godshadow/herd/virtue) — §3.2. Kind end-seal. No drop-cap.
- **Shoot (61–300w)** — 37 chapters: p5c6, p5c8, p5c9, p5c10, p5c11, p5c12,
  p5c13, p5c14, p5c15, p5c17, p5c24, p5c27, p5c29, p5c30, p5c31, p5c32, p5c34,
  p5c37, p5c38, p5c39, p5c41, p5c43, p5c44, p5c45, p5c46, p5c47, p5c54, p5c61,
  p5c63, p5c67, p5c69, p5c85, p5c99, p5c106, p5c127, p5c142, p5c144.
  `motif`-class figure ≤24rem above meta: zenith medallion per kind (§3.4).
  Foam letter drop-cap (letters only — shared ReaderLead fix; no per-chapter
  workaround). Kind end-seal.
- **Branch (301–800w)** — 10 chapters: p5c2 (529), p5c3 (781), p5c4 (323),
  p5c5 (323), p5c16 (388), p5c20 (480), p5c21 (322), p5c28 (408), p5c36 (409),
  p5c42 (363). Full-width `banner` tableau (viewport-bleed, max-height 46vh
  desktop / 34vh phone): zenith base + kind emblem + chapter actor + noon-line
  (§4). Foam letter drop-cap. Kind end-seal. HTML figcaption per §4 captions.
- **Landmark (named, §6)** — p5c18 (555, The madman). Full-bleed authored
  tableau `gs-zenith-lantern` + gold letter drop-cap + HTML figcaption. The
  book's climax: maximal 24-ray edge-to-edge fan + inverted lit lantern +
  madman/marketplace/church-tomb actors + smashed shards (G3).

### 3.2 Content kinds + gold/vermilion spark alternation (BY KIND, never modulo)
The madman's deed divides the cohort: the **light-kinds take gold** (the
zenith glare itself — what exposes), the **blood-kinds take vermilion** (what
the lantern exposes and what bleeds — God, herd, tables). Honest assignment
from the prose lands at exactly 84 gold / 84 vermilion (emergent check, not a
target).

| kind | spark | chapters |
|---|---|---|
| godshadow — dead God, churches, prayer, sin, Christianity, saints, reformations | vermilion | p5c1, p5c15, p5c18, p5c21, p5c22, p5c23, p5c24, p5c25, p5c28, p5c29, p5c30, p5c31, p5c32, p5c33, p5c34, p5c35, p5c36, p5c37, p5c39, p5c40, p5c41, p5c42, p5c43, p5c44, p5c45, p5c46, p5c73, p5c152 |
| knowledge — origin of knowledge/logic, cause/effect, truth, errors, science, perception | gold | p5c2, p5c3, p5c4, p5c5, p5c6, p5c8, p5c14, p5c16, p5c19, p5c20, p5c26, p5c50, p5c51, p5c71, p5c72, p5c82, p5c84, p5c86, p5c89, p5c98, p5c102, p5c109, p5c110, p5c115, p5c116, p5c117, p5c119, p5c120, p5c121, p5c124, p5c135, p5c137, p5c139, p5c141, p5c142, p5c153, p5c154, p5c158 |
| herd — herd instinct/conscience, crowd, fame, applause, parties, mediators, imitators | vermilion | p5c9, p5c10, p5c54, p5c61, p5c63, p5c64, p5c65, p5c66, p5c67, p5c68, p5c74, p5c80, p5c81, p5c83, p5c88, p5c94, p5c129, p5c148, p5c157 |
| virtue — tables of goods, virtue/vice, guilt, punishment, pity, shame, conscience | vermilion | p5c7, p5c11, p5c12, p5c13, p5c27, p5c38, p5c52, p5c53, p5c58, p5c69, p5c77, p5c78, p5c79, p5c85, p5c92, p5c93, p5c97, p5c99, p5c103, p5c106, p5c107, p5c112, p5c113, p5c114, p5c118, p5c122, p5c123, p5c126, p5c130, p5c136, p5c140, p5c143, p5c159, p5c160, p5c164, p5c166, p5c167 |
| self — egoism, solitude, portraits of types, free-spirit maxims, the catechism's "I" | gold | p5c47, p5c48, p5c49, p5c55, p5c56, p5c57, p5c59, p5c60, p5c62, p5c70, p5c75, p5c76, p5c87, p5c90, p5c91, p5c95, p5c96, p5c100, p5c101, p5c104, p5c105, p5c108, p5c111, p5c125, p5c127, p5c128, p5c131, p5c132, p5c134, p5c138, p5c144, p5c145, p5c146, p5c147, p5c150, p5c151, p5c155, p5c156, p5c161, p5c162, p5c163, p5c165, p5c168 |
| sea — horizon-ship, house in the sea, flying-fish surface (the infinite beside us) | gold | p5c17, p5c133, p5c149 |

Check: 28+38+19+37+43+3 = 168. ✓ Gold 38+43+3 = 84; vermilion 28+19+37 = 84. ✓
Judgement calls (recorded, not hidden): p5c20 → knowledge (will-as-cause is
epistemology, pairs §112); p5c27/p5c38 → virtue (diet→valuation physiology,
not doctrine); p5c42 → godshadow (reformations frame; herd arcs inside the
banner as the chapter's second actor); p5c62 → self (portrait of a type, not a
table); p5c73 → godshadow (free spirits under the Church's standing shadow);
p5c144 → self (Prometheus/Zeus are metaphors for the great soul's suffering);
p5c152 → godshadow (the snake speaks of God's prejudices); finale catechism
split honestly — §§268,269,270,272,275 self/gold; §§271,273,274 virtue/
vermilion — so the book's last word (§275, seal of freedom) is gold.

### 3.3 Motifs (`body[data-art]`, §10b vocabulary)
`zenith` (default altitude — knowledge/herd/self/sea slotted chapters),
`lantern` (godshadow slotted chapters: p5c15, p5c18, p5c21, p5c24, p5c28,
p5c29, p5c30, p5c31, p5c32, p5c34, p5c36, p5c37, p5c39, p5c41, p5c42, p5c43,
p5c44, p5c45, p5c46), `ship` (p5c17 only — the little ship; existing
vocabulary), **`tablet` (NEW — supervisor: add to the §10b motif vocabulary
for virtue-kind chapters: p5c11, p5c12, p5c13, p5c27, p5c38, p5c69, p5c85,
p5c99, p5c106 — the tables of goods)**. Herd/self stay on `zenith`; their
identity is carried by medallion/banner actors and spark tint, not chrome
(same economy as cohort C's portraits).

### 3.4 Shoot medallions (all `art/cohort-d.svg`, `motif` class, viewBox 480×300)
- `gs-shoot-zenith-lantern` — godshadow Shoots: p5c15, p5c24, p5c29, p5c30,
  p5c31, p5c32, p5c34, p5c37, p5c39, p5c41, p5c43, p5c44, p5c45 (13).
- `gs-shoot-zenith-lens` — knowledge Shoots: p5c6, p5c8, p5c14, p5c142 (4).
- `gs-shoot-zenith-herd` — herd Shoots: p5c9, p5c10, p5c54, p5c61, p5c63,
  p5c67 (6).
- `gs-shoot-zenith-tablet` — virtue Shoots: p5c11, p5c12, p5c13, p5c27, p5c38,
  p5c69, p5c85, p5c99, p5c106 (9).
- `gs-shoot-zenith-star` — self Shoots: p5c47, p5c127 (2).
- `gs-shoot-zenith-ship` — sea Shoot: p5c17 (1).
- One-off actors (kind medallion would mislead): p5c46 → `gs-actor-toppled`
  (homo poeta's slain gods — three fallen god-discs); p5c144 →
  `gs-actor-prometheus` (bowed great soul + cracked star of self-doubt).
Check: 13+4+6+9+2+1+2 = 37. ✓

### 3.5 End-seals (Contract A.0 ruling: `body[data-chapter]`-qualified
`p:last-child::after`, `url()` SVG ≤32px, never bare glyphs, never
layout-shifting)
- `gs-seal-lantern` — all 28 godshadow chapters (the madman's lantern; §8
  names it for the Book 3 religion cluster).
- `gs-seal-tablet` — all 37 virtue chapters (the tables of goods).
- `gs-seal-herd` — all 19 herd chapters (triple head-arcs).
- `gs-seal-spark-gold` — all 46 knowledge/self/sea chapters' end-seals AND the
  gold marginal Seed mark (CSS-only 26px).
- `gs-seal-spark-verm` — the vermilion marginal Seed mark (CSS-only 26px) and
  TOC read-mark for blood-kind chapters; generic vermilion end-seal fallback
  if the supervisor prefers fewer per-kind rules.
Marginal Seed marks reuse the two spark seal shapes at 26px (CSS-only, no
manifest entries) — §7-D's "marginal sparks … BY CONTENT KIND" exactly.
### 3.6 Typography / palette / reading body
Unchanged from binding spec: Fraunces display (SOFT 100, WONK 1, 560–600,
joyful register — never 900 solemn; dance-tilted kickers allowed), Source
Serif 4 body 1.3rem/1.85, ≤68ch, §2 token hexes only (Abyssal Sea ground, Noon
Gold #F5B301/#F8C51C, Sun Core, Dance Vermilion, Wave Ultramarine flat shapes
only, Foam Bone text, Deep Night bands, Lantern Amber). Dusk Aubergine is
FORBIDDEN in this cohort (G5 — it belongs to p6c66 alone). No art behind
prose. One orchestrated opener rise (existing keyframes); reduced-motion cuts
instantly. Tableau captions are HTML figcaption (Fraunces italic, Foam Bone),
never SVG text (GR5).

## 4. `art/cohort-d.svg` draw-list (original authored SVG; engineer draws these)

Shared discipline: FLAT fills + strokes only (G4 — zero gradients, zero glow
discs, zero radial anything); ZERO `<text>` elements in the file (GR5 —
captions are HTML); hand-drawn irregularity on figures (GR1 lesson — no
mirrored/clip-art symmetry: paired figures differ in gesture/tilt by ≥6°);
impassive faces only (GR2 — straight-line mouths, no smiles; the sun disc is
blank); all banners `preserveAspectRatio="xMidYMid slice"` inside
`overflow-x: clip` containers, bleed via margin never transforms (GR3);
medallions `xMidYMid meet`; titles stay HTML over a scrim rect with
min-padding 48px desktop / 20px phone + balanced wrap. Intra-file `<defs>`
(`cd-rays16`, `cd-disc`, kind emblems) with in-file `<use>` are allowed —
the part-dividers precedent; ZERO cross-file references (Twilight pattern).
File-internal id namespace is `cd-*` for defs, `gs-*` for manifest symbols.

- **Branch base recipe** (shared by all 10 Branch symbols, viewBox
  0 0 1600 420). Sky: flat `#06222B` full rect. Ground/shadow band: flat
  `#030B0F` rect y310–420. Zenith disc: center (800,120) r=60 flat `#F8C51C`
  + Sun Core rim (stroke `#FFEDBE` 3, opacity .8) + hard ring r=118 (stroke
  `#F5B301` 2, opacity .3). Steep 16-ray fan: inner r=76, outer r=170,
  alternating gold 5px / vermilion 3.5px, round caps (the tier gap vs the
  landmark's 24-ray edge-to-edge fan is visible and deliberate). Noon-line:
  gold 2px line y=310 from x=620 to x=980 + center gnomon tick (vertical gold
  3px, y296–310 at x=800) + vermilion end ticks (8px verticals at x=620/980).
  Actor slots: left center (380,362), right center (1220,362), each ≤150px
  tall, standing on y=410 (figures may rise into the sky — silhouettes read
  against the fan). Title scrim: ellipse (800,242) rx 320 ry 50 fill
  `#030B0F` opacity .55 — clear of the disc above (bottom 180) and the
  noon-line below (310); HTML title over it with min-padding 48px desktop /
  20px phone + balanced wrap.
- **`gs-branch-zenith-chaos`** (p5c2 §109, knowledge). Left: lens emblem —
  gold ring r=40 (stroke 6) + diagonal refracted ray (gold bar 90×8 at 30°)
  + small prism triangle (bone). Right: cracked celestial dial — bone ring
  r=55 (stroke 5) + vermilion crack zigzag (3-segment polyline across the
  ring) + 5 scattered gold star-dots (r=4–7) outside the ring + one broken
  spoke (short bone bar, detached, tilted 24°). Caption: "When will we have
  de-deified nature?"
- **`gs-branch-zenith-sage`** (p5c3 §110, knowledge). Left: lens emblem.
  Right: seated Eleatic sage — flat bone silhouette ~120px tall, seated
  profile facing left (head + folded legs in one hand-cut path, NOT
  geometric), + truth-ray: gold bar 110×7 entering the sage's head from
  upper-right (from the disc's direction) + 3 small vermilion ferment-dots
  below (the tangle of drives). Caption: "To what extent can truth stand to
  be incorporated?"
- **`gs-branch-zenith-identity`** (p5c4 §111, knowledge). Left: lens emblem.
  Right: twin identity-discs — two identical gold circles r=28 side by side
  (centers 60px apart — the guessed identity) + 3 flux wave-lines below
  (bone, opacity .5, sine paths 200px wide — "everything in a flux").
  Caption: "Logic arose out of the illogical."
- **`gs-branch-zenith-stream`** (p5c5 §112, knowledge). Left: lens emblem.
  Right: continuum stream — horizontal vermilion band 170×18 with rounded
  ends + 5 isolated bone dots (r=5) arcing above it (the inferred points) +
  one gold arrow-tick at the band's right end dissolving into 3 dots (no
  determinedness). Caption: "Cause and effect: never such a duality — a
  continuum."
- **`gs-branch-zenith-lamp`** (p5c16 §123, knowledge). Left: lens emblem.
  Right: raised lamp of knowledge — bone forearm + hand silhouette gripping
  a vertical lamp-pole 110px tall topped with an amber flame (teardrop
  `#FFB84D` + Sun Core core dot) + discarded papal tiara lying tilted 30°
  beside it (gold arc 60px with 3 knob dots — Leo's politeness set aside).
  Caption: "Knowledge wants to be more than a means."
- **`gs-branch-zenith-will`** (p5c20 §127, knowledge). Left: lens emblem.
  Right: striking fist — flat bone fist silhouette ~70px (hand-cut, knuckle
  bumps) + impact star-burst at its lower-right (8 alternating gold/
  vermilion ticks, r 12–30) + 3 concentric magic-force arcs (gold, opacity
  .5/.35/.25) around the impact. Caption: "The will is a force that works
  by magic."
- **`gs-branch-zenith-prayer`** (p5c21 §128, godshadow). Left: lantern
  emblem — lantern mini (cap bar + trapezoid 44×52 + amber flame dot, bone
  strokes 4). Right: prayer-mill — gold disc r=45 with 8 spoke ticks on a
  bone axle (vertical bar + side handles) + bead arc below (9 bone dots
  r=4 on a 140px arc — the Ram-Ram counting). Caption: "Prayer-rattling
  for the poor in spirit."
- **`gs-branch-zenith-serpent`** (p5c28 §135, godshadow). Left: lantern
  emblem. Right: sin serpent — vermilion S-curve (stroke 12, round cap,
  hand-cut wobble) with triangular head + bone eye dot, coiled around two
  shattered tablet shards (bone rects with 2 rule-lines each, split by a
  20px gap — the broken honour-table). Caption: "Sin is a Jewish feeling
  and a Jewish invention."
- **`gs-branch-zenith-gods`** (p5c36 §143, godshadow). Left: lantern emblem.
  Right: arc of 5 god-discs (flat gold circles r=16/20/26/20/16 on a 200px
  arc — plurality of norms, no two alike in size) + new eye below (bone
  almond 90×34 + gold pupil r=9 — "our own new eyes"). Caption: "One god
  was not the denial of another god."
- **`gs-branch-zenith-egg`** (p5c42 §149, godshadow). Left: lantern emblem.
  Right: breaking eggshell — bone ellipse 90×110 with vermilion zigzag crack
  (4 segments) + gold yolk-spark (small 4-point spark) peeking through the
  crack + 3 herd head-arcs beneath (bone scallops — the masses under the
  maturation). Caption: "Where there is ruling, there are masses."
- **`gs-zenith-lantern`** (p5c18 §125 LANDMARK, viewBox 0 0 1600 420 — redraw
  the §302–352 prototype at shipping quality, full-width GR4 tableau). Sky:
  flat `#06222B` full rect. Ground band: flat `#030B0F` y320–420 with a
  WIPED GAP in its top edge from x=650 to x=950 (the horizon wiped away —
  the band's top edge steps down 26px inside the gap, sponge-work). Zenith
  disc: center (800,168) r=86 flat `#F8C51C` + Sun Core double rim (outer
  stroke 4 opacity .85, inner r=70 stroke 2 opacity .4) + hard ring r=170
  (gold 2, opacity .3) — disc top at y=82 leaves a clear sky title band
  y≈8–74. MAXIMAL 24-ray fan: 24 rays at 15° intervals, inner
  r=100, outer r=840 (bleeds past every viewBox edge; slice-clipped —
  edge-to-edge guaranteed, Munch lesson), alternating gold 6px / vermilion
  4px, round caps (upward rays pass BEHIND the HTML title — fine at 6/4px on
  sky). Inverted lit lantern below disc: hangs from a short gold
  chain-line (x=800, y254–280) suspended beneath the disc; lantern cap bar
  (bone 56px) at y=286, trapezoid below it (top 52, bottom 38, height 72,
  fill `#FFCF6E`, bone stroke 4), base bar (bone 44px) at y=358, flame
  center (800,320) (amber teardrop + `#FFF3D0` core dot r=8); thin amber
  halo ring center (800,320) r=58 (stroke 2.5, opacity .6 — a RING, never a
  gradient disc); the lantern's lower half overlaps the band's wiped gap
  (y320–358) — the light hangs INTO the wiped horizon. Madman actor at
  (420,335): flat vermilion leaper (Matisse grammar — one leg kicked back,
  torso twisted, one arm thrust UP holding a small second lantern with amber
  dot, mouth a short straight line — GR2). Marketplace crowd x950–1500:
  7 bone head-and-shoulder silhouettes (opacity .85, heights 60–110 varied,
  tilts varied ≥6°: one laughing head tipped back, one pointing arm toward
  the madman, rest muttering). Church-tombs: two flat `#0A2E3B` church blocks
  (rect + triangle spire + bone cross) at x≈140 and x≈1470, sitting on y=410,
  half-sunk scale (~90px — tombs, not towers). Smashed shards bottom-center:
  5 amber/bone triangles scattered y385–410 + one dying amber flame-dot r=5
  (the thrown lantern). Title zone: NO scrim ellipse — the HTML title sits
  centered at x=800 in the clear sky band y≈8–74 ABOVE the disc (disc top at
  y=82 sets the lower bound; upward rays pass behind the title — fine at
  6/4px on sky; min-padding + balanced wrap). Figcaption (HTML): "I seek
  God! I seek God! — cried at bright morning, lantern lit."
- **Medallion frames** `gs-shoot-zenith-*` (viewBox 480×300): bone 2px ring
  r=100 center (240,140) + actor inside (~110px) + noon-tick below (gold bar
  60×4 + center tick at (240,262)) + 2 flanking kind-tint sparks at
  (90,140)/(390,140) (gold for lens/star/ship, vermilion for lantern/herd/
  tablet). Six symbols: lantern (mini per Branch emblem), lens (per Branch
  emblem), herd (3 bone head-arcs in a row + vermilion ground tick), tablet
  (bone rect 70×90 with 3 rule-lines + vermilion corner-break triangle),
  star (gold 4-point spark, vertical axis 2:1, redrawn not copied + short
  shadow tick below), ship (little black-sail ship per part-dividers grammar
  on 2 gold silk-wave arcs).
- One-off Shoot actors (same medallion frame): `gs-actor-toppled` (p5c46:
  three fallen god-discs — gold circles r=30/24/18 tipped at 70°/110°/95°
  + vermilion crack line under them); `gs-actor-prometheus` (p5c144: bowed
  bone figure — head dropped forward — + cracked gold star above it split by
  a vermilion gap — doubt about one's own greatness).
- **Seals** (≤32px simple filled shapes, `url()` content): `gs-seal-lantern`
  (cap bar + trapezoid + flame dot), `gs-seal-tablet` (rect + 2 lines),
  `gs-seal-herd` (3 arcs), `gs-seal-spark-gold` / `gs-seal-spark-verm`
  (4-point spark, cover-spark family redrawn, one path two fills). Both spark
  seals double as Seed marginal marks (26px, CSS-only).

Shoot caption rule (engineer/supervisor apply per chapter): ≤12 words quoted
or near-quoted from the chapter's sharpest line. Examples: p5c17 "No more
land!"; p5c46 "I have slain all gods — what of the fifth act?"; p5c142 "Oh,
this flame of my greed!"

## 5. Chapter map — see `cohort-d.json` (all 168 entries)

Per-entry fields (§10a + `weight`/`kind`/`gist`): id, part (`part-5`), order,
title, word_count, weight, kind, gist, rationale, palette_role, motif_asset
(`art/cohort-d.svg`), opener{treatment, symbol, composition}, caption (HTML
figcaption; landmark + Branch authored in §4, Shoots per the caption rule),
reading_treatment (drop-cap colour + end-seal per §3.5), motif (runtime
`body[data-art]` per §3.3 — supervisor sets at merge). Seeds carry NO opener
and NO manifest entry (CSS spark via kind tint — no per-chapter rules).

## 6. grammar_notes (for the merged manifest)

Zenith FULL-WIDTH tableau openers per weight: Branch banners compose disc +
steep 16-ray fan + shadow band + kind emblem + chapter actor + noon-line
across the whole opener zone (GR4 — never half-empty); the p5c18 landmark is
the book's climax plate (maximal 24-ray edge-to-edge fan, inverted lit
lantern, madman + marketplace + church-tombs + shards). Titles stay HTML over
a scrim with min-padding + balanced wrap; captions are HTML figcaption, never
SVG text (GR5). All art uses contained viewBoxes (1600×420 slice, 480×300
meet) inside `overflow-x: clip` slots; banners bleed via margin, never
transforms: zero phone overflow is the shipping floor (GR3). Drop-caps are
LETTERS only via the shared ReaderLead numeral fix (GR6) — no per-chapter CSS
workarounds. Spark alternation is BY CONTENT KIND (light-kinds gold:
knowledge/self/sea; blood-kinds vermilion: godshadow/herd/virtue — 84/84),
never modulo. `tablet` is a new §10b motif proposal for virtue chapters.
Branch tier holds the sun to the steep-16 fan: one tier below the §125
landmark class. Flat fills + strokes only (G4); zero Aubergine (G5).

## 7. Landmarks

`["p5c18"]` — THE book-climax landmark (G3; §6 named list).

## 8. TOC / chrome notes for the supervisor (cohort does not implement chrome)

- TOC part-V header: horizon rule with the sun-disc at ZENITH (centered fully
  above the line — the day's apex between high-morning IV and golden-hour VI;
  maximal altitude) — G1.
- p5c18 keeps the gold-numeral landmark row (one of the §8 7-rule economy);
  all other rows quiet.
- Read chapters earn filled kind-tint sparks (gold/vermilion per §3.2);
  end-seals per §3.5 via the A.0 ruling.
- Progress ray, nav cards, settings: unchanged from §8 (no cohort chrome
  deltas).
- Requests to ReaderLead (via supervisor): add `tablet` to the §10b motif
  vocabulary; confirm the shared drop-cap numeral classifier covers §108–275
  numbered openers.
