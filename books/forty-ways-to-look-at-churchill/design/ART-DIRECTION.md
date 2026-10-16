# Forty Ways to Look at Winston Churchill — ART-DIRECTION.md

Owner: SupChurchill-2 (book supervisor). Status: **v1.1 BINDING FOR PHASE 2**
(2026-10-15). ArtDirector verdict: **PASS WITH BINDING CONDITIONS C1–C9**
(`.omp/design/critiques/forty-ways-to-look-at-churchill.md`, incorporated
in §9A below). Generator lock: this file's existence means
`scripts/generate_book_pages.py` MUST never regenerate this book
(READER-CONTRACT §10).

Book facts (re-read from `data/toc.json` 2026-10-15): **41 chapters** —
Introduction (`p1c1`) + 40 numbered Ways. Five parts: I Introduction
(How I Came to Churchill, 1 ch), II Ways 1–10 (Hero, Statesman, Words),
III Ways 11–20 (Character & Family), IV Ways 21–30 (Context & Myth),
V Ways 31–40 (Empire, Nemesis & Epitaph). All chapter IDs below verified
against the TOC; no invented IDs.

What the book IS: not a narrative biography but a **mosaic biography** —
forty incompatible lenses (heroic ode, prosecution brief, quotation
collage, timeline, quiz, photo captions, epitaph) that refuse to sum up.
Rubin's closing thesis: "how impossible is the task of summing up."
Chapter lengths swing from 63 words (Way 40, pure epitaph) to 129
paragraphs (Way 35, a true/false quiz). The identity flexes from a
single chiseled sentence to a ledger of facts.

## 1. Chosen direction: "Forty Facets" (cubist dossier portrait)

Full record: `design/directions-book.md` (7 cited references, 3 full
directions, comparison table, title-swap analysis). One line: **every
Way is one shard of a portrait that can never be assembled — cubism as
interface**, after Stevens ("Thirteen Ways of Looking at a Blackbird",
the structural ancestor of Rubin's title) and Sutherland's destroyed
1954 portrait (literally the subject of Way 37).

Title-swap test: cubism is the art of many simultaneous viewpoints;
facets mean "ways of looking." Put another book's title on this system
and it lies. No other library book is a deliberate kaleidoscope.

Rejected: Direction 2 "Map Room" (fails title-swap — suits any WWII
history; romanticizes the myth Ways 2/29/30/35 puncture); Direction 3
"Hansard & Destiny" (starved for non-political Ways; broadsheet-rule
look is a frontend-design default tell).

Cohort provisional directions (A: chiaroscuro gallery, D: memorial
architecture, others in Phase-1 reports) are SUPERSEDED by this file.
Cohorts keep their content dossiers; all visual grammar below wins.

## 2. Tokens (dark-first; all 8 reader themes keep working)

```css
--fw-lampblack: #14110B;  /* page */
--fw-gallery:   #211B13;  /* elevated / plate bed */
--fw-bone:      #ECE1CB;  /* text */
--fw-faded:     #B7A98F;  /* muted text */
--fw-ochre:     #C8984A;  /* primary accent: painter's ochre (Way 17) */
--fw-vermilion: #C4502C;  /* confrontation: nemesis, belligerence, tragedy */
--fw-slate:     #5E6E93;  /* cool counterpoint: doubt, night, private life */
--fw-measure:   37rem;    /* body measure (narrow: mosaic reads better) */
--fw-display: "Fraunces", Georgia, "Times New Roman", serif;
--fw-body: "Newsreader", Georgia, serif;
```

`--accent` maps to ochre, `--copper` to vermilion. Bone on Lampblack ≈
13:1. Sepia/light themes reuse facet SVGs with tonal recolor (ochre
deepens, slate lightens); identity must survive every theme (§8).

## 3. Type (voice: early-20th-c. British book mannerism, not pastiche)

- Display + Way numerals + drop caps: **Fraunces** variable incl.
  SOFT/WONK axes (Google Fonts, verified live; supervisor adds the
  `<link>`; fallback Georgia/Times). Way numerals:
  `"SOFT" 100, "WONK" 1`, clamp(8rem, 22vw, 15rem), Bone 92%.
- Body + quotations: **Newsreader**, optical sizes, true italics
  (fallback Georgia). Body 1.125rem/1.75; quotes italic 1.2rem/1.7.
- Scale: major third (1.25). Opener title clamp(2.6rem, 6vw, 4.5rem),
  Fraunces 72pt optical, 560, −0.01em; part stamp 0.8rem/0.28em caps.
- Two families only. Micro-labels reuse Fraunces caps (no third face).

## 4. Opener grammar (every chapter; the hang is shared, the art varies)

1. `figure#chapter-art` facet plate: full-width SVG band, min-height
   340px desktop / 220px phone (NEVER hidden on phones — art is the
   identity). 3–40 hand-placed polygons per chapter.
2. Way numeral BEHIND front shards (occluded by ≥2 shards — the number
   is looked *through*, never badged). Introduction uses "§" (author's
   lens). Numerals stay readable: occlusion never covers first/last
   stroke (ArtDirector condition).
3. Title lockup LEFT on the shared hanging line (1.5rem gutter),
   overlapping the plate's lower edge by one shard depth. Part seal
   (SVG, rotated −4°) pinned left of the lockup. No centered openers.
4. Body starts narrow (`--fw-measure`) below; Fraunces 3.2em drop cap
   on first paragraphs of Ways ONLY (never on quiz/timeline/list
   chapters — see §6).
5. No cards, no hairline boxes, no gradient-wash decoration, no
   eyebrow-above-everything, no mono data labels, no appended "→"
   (chevrons drawn as shard chevrons). Baseline blockquote-cards,
   hairline boxes, crosshair/smoke/reticle pseudo-art are DELETED,
   not restyled.

## 5. Motif vocabulary + per-part logic

Shared defs `art/facets.svg`: `shard-long`, `shard-tri`, `shard-quad`,
`shard-mask` (quiz concealer), `frame-sepia` (photo plates),
`seal-part` (I–V seals), `chevron` (nav), `point` (epitaph shard),
`grain` (feTurbulence, opacity ≤ 0.16). Cohort SVGs `<use>` these; new
primitives need supervisor approval. Palette roles: `ochre`
(heroic/craft), `vermilion` (attack/tragedy/nemesis), `slate`
(doubt/night/private), `bone` (record/neutral), `mixed` (collage only).

- **Part I (Intro):** one uncut lens — single large clear shard
  (author's eye); slate + bone; sets the hanging line.
- **Part II (Ways 1–10, public monument):** large monolithic shards,
  ochre-dominant. Way 2 mirrors Way 1 inverted in vermilion
  (prosecution mirror). Ways 6–7: type-as-shards (giant quotation
  fragments clipped to polygons).
- **Part III (Ways 11–20, private interior):** small intimate shards,
  slate + ochre candlelight. Ways 15–16 share one split shard across
  the divider (father/son hinge).
- **Part IV (Ways 21–30, archive/record):** ledger-cut rectangular
  tiles, bone-dominant, single vermilion flags. Way 26 sepia frames.
- **Part V (Ways 31–40, fate/tragedy):** shards darken and converge
  toward page right (destiny vector). Way 36 full vermilion fracture.
  Way 40: single ochre point on lampblack (63 words, maximum air).

Cover: shards mid-scatter around a void where a face would be + title
left-lockup. TOC: gallery wall — each Way a shard thumbnail (CSS
clip-path polygon, unique rotation) + title; parts separated by
full-width facet bands. Progress: shard-fill, not a bar.

## 6. Reading treatments (body calm; evidence rich)

- Quotation Ways (7, 9, 19): Newsreader italic + ochre shard-tick
  (never left-border cards). Way 7: dated rail + strict setup/quote
  two-voice system; four wartime set-pieces as full-bleed plates.
- Timeline (14) / facts (22): tabular numerals, ledger rows, sticky
  mini-index on desktop.
- Quiz (35): masked answers (native details/summary or tapping mask;
  keyboard accessible). Epitaph (40): centered 1.4rem, letterspaced
  small-caps attribution. Captions (26): sepia plate frames + numbers.
- Way 3 name-list: salon-wall register; split entries (¶10/11, ¶23/24)
  styled as served, continuations glued. Way 5 debate: true diptych,
  verdict plaques opposing. All prose styled AS SERVED — never edited.

## 7. Chapter map (all 41; cohort ownership)

Cohort A = Part II (p2c1–p2c10). Cohort B = Part III (p3c1–p3c10).
Cohort C = Part IV (p4c1–p4c10). Cohort D = Part I + Part V
(p1c1, p5c1–p5c10). (This split is authoritative; the designer's §5.5
note suggesting A=I+II is corrected here to match actual assignments.)

| ID | Way | Palette | Motif | Rationale |
|---|---|---|---|---|
| p1c1 | Intro § | slate | single lens | Author's eye before the kaleidoscope |
| p2c1 | 1 | ochre | rising monoliths | Heroic myth ascendant; biggest shards |
| p2c2 | 2 | vermilion | p2c1 inverted | Prosecution mirror — same facts, overturned |
| p2c3 | 3 | bone | constellation pins | ~70 acquaintances as social star-chart |
| p2c4 | 4 | ochre/vermilion | converging wedge | May 28 1940: all shards point at one afternoon |
| p2c5 | 5 | bone | balanced scales pair | Suited to office? — equipoise diptych |
| p2c6 | 6 | ochre | type-as-shards | Letterforms become the facets |
| p2c7 | 7 | mixed | 77 small tiles | 77 quotation tiles; eloquence as mosaic |
| p2c8 | 8 | ochre | three swift strokes | Cigar / V-sign / uniform reduced to strokes |
| p2c9 | 9 | bone | one word-stone | "True" — single engraved block |
| p2c10 | 10 | vermilion | grasping talons | Fame-lust: shards reach upward, clutching |
| p3c1 | 11 | slate | black dog mass | Depression: one light-swallowing shard |
| p3c2 | 12 | slate | turned shoulder | Disdain: composition looks away, off-axis |
| p3c3 | 13 | vermilion | bared edge | Belligerence: sharpest angles in the book |
| p3c4 | 14 | bone | dated procession | Timeline: shards march 1874→1965 |
| p3c5 | 15 | ochre | split shard (i) | Son: half of the father/son hinge |
| p3c6 | 16 | ochre | split shard (ii) | Father: hinge completed |
| p3c7 | 17 | mixed (paint) | palette shards | Painter: wettest colour, max impasto grain |
| p3c8 | 18 | vermilion | leaking vessel | Spendthrift: shards spill off plate edge |
| p3c9 | 19 | mixed | 57 witness tiles | Conflicting views: every tile a hue |
| p3c10 | 20 | slate | held tear | Tears: one rounded shard, softest geometry |
| p4c1 | 21 | vermilion | brimming glass | Drinker: spirit-level line across tiles |
| p4c2 | 22 | bone | ledger grid | 109 fact-paras: calmest plate, tabular |
| p4c3 | 23 | slate | veiled shard | Sex: half-masked; prurience refused |
| p4c4 | 24 | ochre | two interlocked | Happy marriage: only joined-shard lock in IV |
| p4c5 | 25 | ochre | island outline | Island story: shards trace a coastline |
| p4c6 | 26 | sepia bone | photo frames | Photographs: frames aging left to right |
| p4c7 | 27 | mixed | novel pages | Hero of a novel: shards as fanned leaves |
| p4c8 | 28 | vermilion/ochre | destiny vector | Fate: shards accelerate page-right |
| p4c9 | 29 | vermilion | fracture lines | Imperialist: the cause shown cracking |
| p4c10 | 30 | slate | faded map wash | 88-word coda: nearly empty plate |
| p5c1 | 31 | ochre | transatlantic cable pair | Roosevelt: two lines across the ocean |
| p5c2 | 32 | slate/ochre | backward gaze | Imagination: shards drift left, into history |
| p5c3 | 33 | vermilion/slate | split diptych | Nemesis: halves that rhyme |
| p5c4 | 34 | bone | lifted layer | Exposed: one shard peeled back |
| p5c5 | 35 | mixed | masked tiles | True/False quiz: answers masked until tapped |
| p5c6 | 36 | vermilion | full fracture | Tragedy: shattered plate, Greek-mask angles |
| p5c7 | 37 | slate/ochre | hated portrait | Sutherland: geometry refusing flattery |
| p5c8 | 38 | slate | ebbing tide | Last days: shards sink below hanging line |
| p5c9 | 39 | bone | judgment seat | Reader's verdict; empty-chair shard |
| p5c10 | 40 | ochre point | single point | Epitaph: one point of light; end |

## 8. Build contract (READER-CONTRACT v1 conformance)

- Hooks: `body[data-book]` `[data-view]` `[data-part]`(roman)
  `[data-part-id]` `[data-chapter]` `[data-art]`; slots `#cover-art`,
  `#chapter-art`; event `reader:chapter`. Book CSS is UNLAYERED (wins
  over `@layer shared`); book selectors via §2 hooks only.
- Manifest: supervisor merges cohort JSON into
  `design/chapters.json` (contract §4 schema: `cover`/`default`/
  `chapters` with `src` under `art/`, `class`, `motif`→`data-art`,
  `caption`). Cohort JSON entries carry contract fields PLUS
  `part/order/way/title/content_kind/rationale/palette_role/reading`
  and sparse `paragraphs[]` role lists — reader.js ignores unknown
  fields; book JS uses them.
- Paragraph roles: contract v1 classifies only `.reader-nb`/notes,
  so the QUIZ / QUOTE-FLOOD / LIST chapters (p2c3, p2c7, p3c4, p3c9,
  p4c2, p5c5) are served by BOOK-OWNED JS (new `design/facets.js`,
  supervisor-owned): on `reader:chapter`, reads the merged manifest's
  sparse `paragraphs[]` roles, stamps `data-fw="<role>"` on those
  `<p>`s (additive attributes only — never rewrites shared IDs or
  classes, never mints `reader-*`). Cohort CSS styles
  `body[data-chapter="<id>"] p[data-fw="<role>"]`. Positional
  `nth-child` allowed ONLY where the role list is empty and the
  chapter has ≤13 paras, always with pinning comments.
- Defensive fill: `facets.js` also fills `#cover-art`/`#chapter-art`
  from the manifest (fetch SVG via `asset()`-relative URL, inline it)
  ONLY if reader.js hasn't already (slot still `hidden`/empty) —
  robust to shared-landing order. Slots stay `aria-hidden`; plates
  are decorative; numerals are real text.
- Fonts: supervisor adds Fraunces + Newsreader `<link>` to owned
  `index.html` (fallbacks REQUIRED; validator checks computed styles
  + HTTP 200). Build ships `art/**` + `design/**` (contract §11).
- Book JS listens for `reader:chapter`, never polls/patches
  reader.js internals. No prose edits, ever.

## 9. Prototype → review → expand (BINDING sequence)

Phase B FIRST (before any cohort expands): supervisor builds cover +
openers for p2c1, p2c2 (mirror pair), p3c1, p3c7, p4c2, p5c3, p5c6,
p5c10 — spanning all five parts + hardest kinds (collage, quiz,
epitaph). Independent validator + ArtDirector review RENDERED pages
(1440×1000 / 820×1180 / 390×844 + section views). Cross-book
confusion check vs WtP/Home Fraunces use is explicit (ArtDirector
condition). REVISE findings fixed + re-inspected BEFORE cohort
expansion. Then cohorts build in staggered sequence (global 100-job
ceiling: one cohort's heavy work at a time); supervisor integrates
each cohort's CSS/SVG/JSON SEQUENTIALLY into theme.css / art/ /
design/chapters.json — never concurrent appends.


## 9A. Binding conditions C1–C9 (ArtDirector; verbatim force)

C1 — Occluded numerals stay legible: numeral real text clamp(8–15rem),
occluded by ≥2 shards, but ONLY darker shards may cross numeral strokes —
no Bone-on-ochre stroke crossings below 4.5:1. Validator spot-checks the
mirror pair + one collage chapter.
C2 — "Unique" is testable: no two of the 40 plates share the same polygon
arrangement (supervisor spot-checks 6 pairs). The p2c1/p2c2 inversion must
be EXACT (same shard set, inverted, Vermilion relight) — near-mirrors
read as mistakes.
C3 — Fraunces differentiation: WONK occluded display numerals are
Churchill's alone; if WtP (black 900) or Home (masthead) prototypes read
confusably close, Churchill pushes FURTHER into SOFT/WONK extremes.
Side-by-side check at prototype review.
C4 — Accent discipline: Vermilion #C4502C and Slate #5E6E93 are ART colors
— large display and plates ONLY, never body text or small labels. Ochre
#C8984A may carry large numerals and rules; body stays Bone.
C5 — Quiz (p5c5) keyboard-honest: masked answers via details/summary (or
buttons), answers in the DOM, operable without pointer, no JS-only reveal.
C6 — Way 40 intentional, not broken: single ochre point + 63 centered
words needs colophon-like finish (plate floor, generous air, explicit end
state).
C7 — TOC gallery wall performs: 40 clip-path thumbnails + part bands;
cap paint cost; phones keep smaller thumbs (never drop all markers).
Progress-as-shard-fill must read AS progress.
C8 — Font proof: Fraunces SOFT/WONK + Newsreader opticals in computed
styles AND visually; fallbacks Georgia/serif real.
C9 — Prototype order: cover (mid-scatter void), mirror pair p2c1+p2c2,
p3c1, p3c7, p4c2, p5c3, p5c6, p5c10 — all five parts, hardest kinds — at
1440×1000 / 820×1180 / 390×844 BEFORE any cohort expands.
Corrections applied: p5c1 motif renamed "transatlantic cable pair"
(stray-accent typo removed); manifest titles MUST be copied verbatim from
data/toc.json, never retyped. Library-wide gold watch (Ochre #C8984A vs
Twilight Bronze / WtP Sulphur / GS Noon Gold): Churchill's separator is
FLAT SHARD MASS, never glow — NO text-shadow/box-shadow light effects in
ochre anywhere.
## 10. Cohort deliverables (disjoint files ONLY)

- `art/cohort-a.svg` … `art/cohort-d.svg` (+ shared `art/facets.svg`
  defs + `art/cover.svg`, supervisor-owned): authored plates, `<use>`
  shared defs, `<title>` per symbol, grain ≤0.16, no raster, no remote.
- `design/cohort-{a,b,c,d}.json`: manifest entries keyed by REAL
  chapter ID (§7 schema + §8 fields). Every ID covered.
- `design/cohort-{a,b,c,d}.css`: rules keyed to
  `body[data-chapter]` / `data-art` hooks; responsive (720/560),
  reduced-motion kill, print flatten. NEVER edit theme.css,
  shared/**, other books, data/**, or a sibling's files.
- Validator per cohort: real screenshots at 3 viewports + PASS/REVISE
  with evidence; every material REVISE fixed before cohort done.

## 11. Accessibility + evidence floor

Contrast ≥4.5:1 body on composited bg (measured per theme);
measure ≤72ch; no art behind prose; drop caps per §4.4 only; focus
visible; keyboard map intact; prefs persist; reduced-motion cuts all
plate motion; first visit dark. Evidence in
`.omp/design/evidence/` + `design/`; reports distinguish observed /
computed / sampled / not-run. Never claim all chapters visually
reviewed unless true; census (every ID resolves + manifest entry +
asset ships + treatment activates) complements sampling.
