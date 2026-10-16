# Forty Ways to Look at Winston Churchill — Book Art Directions

Owner: ChurchillBookDesigner. Read-only inputs: `meta.json`, `data/toc.json`,
`theme.css` + `index.html` baseline, chapter JSON (`data/chapters/*.json`).
Deliverable for the book supervisor + four cohort teams. No code changed.

Book facts (verified from `data/toc.json`, re-read 2026-10-15): 41 chapters —
Introduction (`p1c1`) + 40 numbered Ways. Five parts: I Introduction
(How I Came to Churchill, 1 ch), II Ways 1–10 (Hero, Statesman, Words),
III Ways 11–20 (Character & Family), IV Ways 21–30 (Context & Myth),
V Ways 31–40 (Empire, Nemesis & Epitaph). Chapter hooks confirmed in
`shared/reader.js`: `body[data-part='I'…'V']`, `body[data-chapter='<id>']`.

What the book IS (from sampling every part: p1c1, p2c1, p2c2, p2c4, p2c6,
p2c7, p2c8, p3c1, p3c7, p4c2, p4c6, p4c8, p5c3, p5c6, p5c7, p5c10, plus
first-paragraph scans of the rest): not a narrative biography but a
**mosaic biography** — forty incompatible lenses (heroic ode, prosecution
brief, quotation collage, timeline, quiz, photo captions, epigraph) that
refuse to sum up. Rubin's closing thesis: "how impossible is the task of
summing up." Chapter lengths swing from 63 words (Way 40, pure epitaph)
to 129 paragraphs (Way 35, a true/false quiz). Any identity must flex from
a single chiseled sentence to a ledger of facts.

## References studied

1. Wallace Stevens, "Thirteen Ways of Looking at a Blackbird" (1917) —
   the structural ancestor Rubin's title plays on: numbered fragments,
   no synthesis. Conceptual license for per-Way formal variation.
2. Graham Sutherland's 1954 portrait of Churchill — NPG 5332 study
   (npg.org.uk), Guardian "Portrait of the week" analysis (2001), and
   "Reckoning with the Graham Sutherland Portrait" (winstonchurchill.org,
   Finest Hour 194): a portrait the sitter hated because it showed too
   much; destroyed by Clementine. Directly the subject of Way 37 (p5c7).
   Lesson: portraiture as argument, not decoration.
3. Ministry of Information posters / Keep Calm and Carry On — Imperial War
   Museum history article + National Archives INF poster records: flat
   colour, crown-and-type lockups, condensed grotesk authority.
4. Johnston Sans — BBC "The Tube typeface that changed everything" + V&A
   Johnston poster object O1035450: humanist geometric caps as the voice
   of British public information, 1916 onward.
5. Churchill War Rooms / Map Room — IWM "9 Secrets from Churchill War
   Rooms" + centenary factsheet: wall maps, plotting tables, coloured
   pins and string, wax pencil, low lamplight.
6. The Folio Society illustrated-edition practice (foliosociety.com):
   artist-commissioned illustration integrated with the text block, not
   spot decoration — the ambition bar for opener art.
7. Current baseline (`theme.css`): war-room crosshair + smoke-ring
   pseudo-elements + gradient grid. Diagnosis: exactly the rejected
   vocabulary (thin rules, numeral badges, gradient tints,
   pseudo-elements). All three directions below replace it root and
   branch; nothing is inherited except the CSS variable names the reader
   contract needs.

---

## Direction 1 — "Forty Facets" (cubist dossier portrait) ★ CHOSEN

**One-line:** Every Way is one shard of a portrait that can never be
assembled — cubism as interface, after Sutherland and Stevens.

**Why this book only:** The title-swap test is decisive. Cubism is the
art of many simultaneous viewpoints; Stevens is the poem of many numbered
lookings; Sutherland's destroyed portrait is literally Way 37; Way 26 is
"Churchill in Photographs: How He Changed Through Time"; Way 8 argues
Churchill reduced himself to "a few swift strokes." Put another book's
title on the facet system and it lies — the facets mean "ways of looking."
No other book in the library is a deliberate kaleidoscope.

- **Type.** Display + numerals + drop caps: **Fraunces** (Google Fonts,
  variable incl. SOFT/WONK axes — verified live on fonts.google.com;
  fallback `Georgia, 'Times New Roman', serif`). Fraunces's "wonky"
  old-style mannerisms echo early-20th-century British book typography
  without pastiche. Body + quotations: **Newsreader** (Google Fonts,
  optical sizes, true italics; fallback `Georgia, serif`). Two families
  only. Scale (major third, 1.25): opener title clamp(2.6rem, 6vw, 4.5rem)
  Fraunces 72pt optical, 560 weight, −0.01em; part stamp 0.8rem / 0.28em
  caps; body 1.125rem / 1.75; quotes Newsreader italic 1.2rem / 1.7.
  Measure: 34–38rem body (shorter than the 50rem baseline — mosaic
  chapters read better narrow), openers full-bleed art to 72rem.
- **Dark palette (6 named).** Lampblack `#14110B` (page), Gallery Wall
  `#211B13` (elevated), Bone `#ECE1CB` (text), Portrait Ochre `#C8984A`
  (primary accent — painter's ochre, Way 17's palette), Vermilion
  `#C4502C` (confrontation — nemesis, belligerence, tragedy),
  Blackdog Slate `#5E6E93` (cool counterpoint — depression, doubt,
  night sittings). Muted text derived: `#B7A98F`.
- **Layout/composition.** Reading body calm and narrow, ragged-right
  serif. Every chapter opens with a **facet plate**: a large authored SVG
  (visible scale: min 320px tall desktop, full-width band) of interlocking
  polygonal shards in that chapter's palette role, with the Way numeral
  set HUGE in Fraunces (10–16rem, clipped by shards, partially occluded —
  the number is looked *through*, not badged). Title locks up left,
  overlapping the plate's lower shards. No cards, no hairline boxes.
- **Illustration medium.** Authored geometric SVG shard compositions
  (hand-placed polygons, grain via `feTurbulence`, 2–3 tones + one hot
  accent per chapter). One shared `<defs>` library of shard paths;
  chapters compose, never re-draw from scratch.
- **Signature idea.** The **unfinishable portrait**: across the book, no
  two facet plates share a composition, and the cover shows the shards
  mid-scatter around a void where a face would be. Way 40 (63-word
  epitaph) resolves to a single shard — one point of ochre on black.
- **Navigation.** TOC as a "gallery wall": each Way a small shard
  thumbnail (CSS clip-path polygon, unique rotation per Way) + title;
  parts separated by full-width facet bands. Progress = a hairline that
  fills shards, not a bar.
- **How the 40 Ways vary.** By rhetoric, not modulo: heroic Way 1 =
  rising monolithic shards; prosecution Way 2 = same shards inverted and
  Vermilion-lit (a deliberate mirror pair); quotation collages (Ways 7,
  19) = many small even tiles; timeline (Way 14) = shards in a dated
  procession; quiz (Way 35) = masked/hidden shards (true/false masks);
  photo chapter (Way 26) = sepia frame-shards; epitaph (Way 40) = one
  shard. See chapter map §5.

## Direction 2 — "The Map Room" (war-room plotting table)

**One-line:** The reader is a duty officer at the Cabinet War Rooms table;
each chapter is a plotted operation on the wall map.

- **Type.** Condensed grotesk authority: **Barlow Condensed** (Google
  Fonts) semibold caps for openers/stamps + **Newsreader** body +
  **Barlow** regular for map labels. Three families, period-correct
  (HMSO/Ministry of Information voice, cf. references 3–4).
- **Dark palette.** Blackout `#0C100E`, Map Table `#16241C`, Chalk
  `#E4E7DA`, Wax Red `#B3402A` (grease-pencil), Signal Amber `#D9A441`,
  Sea Blue `#3E5C76`. Named: Blackout, Map Table, Chalk, Wax Red,
  Signal Amber, Convoy Blue.
- **Layout.** Openers as map-table plates: graticule grid, plotted course
  line with dated pins, string connecting related Ways, rubber-stamp part
  marks ("MOST SECRET" energy, but book-true: "WAY 22 — PLOTTED").
  Body text in a "signal log" column with wide timing margin.
- **Signature.** A continuous **plotted course** across all 40 Ways: each
  opener's pin position advances along one SVG path drawn across chapter
  dividers, so finishing the book completes the map.
- **Why rejected.** Beautiful and buildable — but it fails the title-swap
  test. The Map Room is *Churchill's war*, not *Rubin's method*. It would
  suit any WWII history (and flatters the heroic myth the book keeps
  puncturing: Ways 2, 29, 30, 35 exist to demythologize). It also
  romanticizes exactly the Empire-nostalgia Way 36 (Tragedy) condemns.
  Secondarily, graticule grids risk echoing the rejected baseline's grid.

## Direction 3 — "Hansard & Destiny" (parliamentary papers)

**One-line:** Each Way set as a House paper — order papers, division
lists, speech transcripts — with marginal glosses in the author's hand.

- **Type.** **Libre Caslon Text** (Google Fonts) display + **Spectral**
  (Google Fonts) body: Scotch/transitional gravity, parliamentary-record
  voice. Division numerals in Caslon oldstyle figures.
- **Dark palette (inverted archive).** Despatch Box `#101418` (page),
  Vellum `#EDE6D2` (text), Leather `#7A2E2E` (despatch-box red accent),
  Brass `#B08A3E`, Ink Blue `#2F4A6E`, Faded Pencil `#8A8574`.
- **Layout.** Openers as order-paper headers: session date-lines ("Die
  Martis, 28° Maii 1940" for Way 4), rule-and-measure formality, wide
  outer margin carrying Rubin's verdicts as printed marginalia. Way 4
  (May 28, 1940) and Way 22 (Facts at a Glance) would be magnificent.
- **Signature.** The **division bell**: Ways that judge (5, 16, 21, 35,
  39) open as division lists — Ayes/Noes typographic compositions.
- **Why rejected.** Strong for the political Ways, starved for the human
  ones: painter (17), tears (20), photographs (26), novel-hero (27),
  destiny (28), epitaph (40) have no parliamentary form, and forcing one
  would be costume. Title-swap: it fits any political biography. Also the
  broadsheet-hairline-rule look is an explicit frontend-design default
  tell (trait 3) — we'd be swimming upstream to make it feel authored.

## Comparison and choice

| Axis | 1 · Forty Facets | 2 · Map Room | 3 · Hansard |
|---|---|---|---|
| Title-swap test | Passes absolutely: facets = ways of looking | Fails: any WWII book | Fails: any political bio |
| Range (quiz → epitaph) | Native: shard count/composition flexes | Weak at intimate chapters | Weak at non-political chapters |
| Signature memorability | Unfinishable portrait; occluded giant numerals | Continuous plotted course | Division-bell lists |
| Rejected-vocabulary risk | None: solid plates, no hairlines/gradients | Medium: grids echo baseline | High: rules = trait 3 |
| Build cost (4 cohorts) | Shared defs + per-chapter composition | Path continuity hard across cohorts | Marginalia layout hard on phone |

**Choice: Direction 1, "Forty Facets."** Review against
frontend-design generic-default tells: (a) no tracked-out eyebrow above
every heading — part stamps are rotated wax-seal-like SVG seals, not
eyebrows; (b) no 01/02 badge sequence — numerals are 10rem+ occluded
display type, and the sequence is real content (Ways 1–40), not decoration;
(c) no cream + terracotta (dark Lampblack + ochre/vermilion is painterly,
not the #F4F1EA/#D97757 default); (d) no SaaS cards, no single global
gradient, no mono data labels, no "WORD — fragment" labels, no appended →
(carets drawn as shard chevrons instead). One revision from self-critique:
the first sketch centered every opener — changed to a strict left-lockup
so the 40 openers read as one gallery with a shared hanging line; the
*art* varies, the *hang* doesn't.

---

## 5. Chosen system spec (build contract for cohort teams)

### 5.1 Tokens (dark-first; reader contract keeps light/sepia working)

```css
--fw-lampblack: #14110B;  /* page */
--fw-gallery:   #211B13;  /* elevated / plate bed */
--fw-bone:      #ECE1CB;  /* text */
--fw-faded:     #B7A98F;  /* muted text */
--fw-ochre:     #C8984A;  /* primary accent */
--fw-vermilion: #C4502C;  /* confrontation accent */
--fw-slate:     #5E6E93;  /* cool counterpoint */
--fw-measure:   37rem;    /* body measure */
--fw-display: "Fraunces", Georgia, "Times New Roman", serif;
--fw-body: "Newsreader", Georgia, serif;
```

Existing `--accent` maps to `--fw-ochre`; `--copper` to `--fw-vermilion`
where confrontation applies. Sepia/light themes reuse the same facet SVGs
with a `data-facet-tone` recolor (ochre deepens, slate lightens).

### 5.2 Opener grammar (every chapter, no exceptions; READER-CONTRACT v1.0 conformant)

1. Facet plate renders inside the JS-injected `#chapter-art` slot
   (declarative manifest `src`, one SVG file per chapter under `art/` —
   see §5.7/§5.8), full-width band (min-height 340px desktop / 220px
   phone), composed of 3–40 hand-placed polygons from shared defs.
   Slot stays `aria-hidden="true"` (decorative).
2. Way numeral: REAL TEXT in `#chapter-meta` (restyled `.meta-number`,
   never inside the hidden slot), Fraunces,
   `font-variation-settings: "SOFT" 100, "WONK" 1`,
   size clamp(8rem, 22vw, 15rem), Bone at 92%, layered by book CSS so
   plate shards occlude it (numeral behind front shards via positioning,
   not DOM order). Introduction uses "§" (the author's lens).
3. Title lockup left-aligned on the shared hanging line (1.5rem gutter),
   overlapping the plate's bottom edge by one shard depth (negative
   margin; `#chapter-art` sits above `#chapter-meta` in the contract);
   part seal (SVG, rotated −4°) pinned to the lockup's left.
4. Body starts narrow (`--fw-measure`) below; drop cap Fraunces 3.2em on
   first paragraph of Ways only (never on quiz/timeline/list chapters —
   see reading treatments).

### 5.3 Motif vocabulary (shared `art/facets.svg` defs)

`shard-long`, `shard-tri`, `shard-quad`, `shard-mask` (quiz concealer),
`frame-sepia` (photo plates), `seal-part` (I–V seals), `chevron` (nav),
`point` (epitaph single shard), `grain` (feTurbulence filter, opacity
≤ 0.16). Cohort SVGs MUST `<use>` these; new primitives need supervisor
approval. Palette roles per chapter: `ochre` (heroic/craft),
`vermilion` (attack/tragedy/nemesis), `slate` (doubt/night/private),
`bone` (record/neutral), `mixed` (collage chapters only).

### 5.4 Per-part variation logic

- **Part I (Introduction):** one uncut lens — a single large clear shard
  (the author's eye); slate + bone; sets the hanging line.
- **Part II (Ways 1–10, public monument):** large monolithic shards,
  ochre-dominant; Way 2 mirrors Way 1 inverted in vermilion (prosecution
  mirror); words-Ways 6–7 use *type-as-shards* (giant quotation
  fragments clipped to polygons).
- **Part III (Ways 11–20, private interior):** small intimate shards,
  slate + ochre candlelight; family Ways (15–16) share one split shard
  across the part divider (father/son hinge).
- **Part IV (Ways 21–30, archive/record):** ledger-cut rectangular tiles,
  bone-dominant with single vermilion flags; Way 26 sepia frames.
- **Part V (Ways 31–40, fate/tragedy):** shards darken and converge
  toward page right (destiny vector); Way 36 full vermilion fracture;
  Way 40 a single ochre point on lampblack (63 words, maximum air).

### 5.5 Chapter map (all 41 — rationale each; cohort split)

Cohort A: Part I + Part II (p1c1, p2c1–p2c10). Cohort B: Part III
(p3c1–p3c10). Cohort C: Part IV (p4c1–p4c10). Cohort D: Part V (p5c1–p5c10).

| ID | Way | Palette | Motif | Rationale (one line) |
|---|---|---|---|---|
| p1c1 | Intro § | slate | single lens | Author's eye before the kaleidoscope; retrospective calm |
| p2c1 | 1 | ochre | rising monoliths | Heroic myth ascendant; biggest shards in the book |
| p2c2 | 2 | vermilion | p2c1 inverted | Prosecution mirror — same facts, overturned |
| p2c3 | 3 | bone | constellation pins | 37 acquaintances as a social star-chart |
| p2c4 | 4 | ochre/vermilion | converging wedge | May 28, 1940: all shards point at one afternoon |
| p2c5 | 5 | bone | balanced scales pair | Suited to office? — two shards in equipoise |
| p2c6 | 6 | ochre | type-as-shards | Genius with words: letterforms become the facets |
| p2c7 | 7 | mixed | 77 small tiles | 77 quotation tiles; eloquence as mosaic |
| p2c8 | 8 | ochre | three swift strokes | Cigar / V-sign / uniform reduced to strokes |
| p2c9 | 9 | bone | one word-stone | "True" — a single engraved block |
| p2c10 | 10 | vermilion | grasping talons | Fame-lust: shards reach upward, clutching |
| p3c1 | 11 | slate | black dog mass | Depression as one light-swallowing shard |
| p3c2 | 12 | slate | turned shoulder | Disdain: composition looks away, off-axis |
| p3c3 | 13 | vermilion | bared edge | Belligerence: sharpest angles in the book |
| p3c4 | 14 | bone | dated procession | Timeline: shards march 1874→1965 left to right |
| p3c5 | 15 | ochre | split shard (i) | Son: half of the father/son hinge with Way 16 |
| p3c6 | 16 | ochre | split shard (ii) | Father: hinge completed across the divider |
| p3c7 | 17 | mixed (paint) | palette shards | Painter: wettest colour; impasto grain at max |
| p3c8 | 18 | vermilion | leaking vessel | Spendthrift: shards spill off the plate edge |
| p3c9 | 19 | mixed | 57 witness tiles | Conflicting views: every tile a different hue |
| p3c10 | 20 | slate | held tear | Tears: one rounded shard, softest geometry |
| p4c1 | 21 | vermilion | brimming glass | Drinker: spirit-level line across tiles |
| p4c2 | 22 | bone | ledger grid | 109 fact-paras: calmest plate, tabular tiles |
| p4c3 | 23 | slate | veiled shard | Sex: half-masked; prurience refused, curiosity lit |
| p4c4 | 24 | ochre | two interlocked | Happy marriage: the only joined-shard lock in IV |
| p4c5 | 25 | ochre | island outline | Island story: shards trace a coastline |
| p4c6 | 26 | sepia bone | photo frames | Photographs: frame-shards aging left to right |
| p4c7 | 27 | mixed | novel pages | Hero of a novel: shards as fanned leaves |
| p4c8 | 28 | vermilion/ochre | destiny vector | Fate: all shards accelerate toward page right |
| p4c9 | 29 | vermilion | fracture lines | Imperialist: the cause shown cracking |
| p4c10 | 30 | slate | faded map wash | 88-word coda to empire: nearly empty plate |
| p5c1 | 31 | ochre | two telefón wires | Roosevelt: transatlantic double line |
| p5c2 | 32 | slate/ochre | backward gaze | Imagination: shards drift left, into history |
| p5c3 | 33 | vermilion/slate | split diptych | Nemesis: Hitler/Churchill halves that rhyme |
| p5c4 | 34 | bone | lifted layer | Exposed: one shard peeled back, facts beneath |
| p5c5 | 35 | mixed | masked tiles | True/False quiz: answers masked until tapped |
| p5c6 | 36 | vermilion | full fracture | Tragedy: plate shattered, Greek-mask angles |
| p5c7 | 37 | slate/ochre | hated portrait | Sutherland: portrait-geometry that refuses flattery |
| p5c8 | 38 | slate | ebbing tide | Last days: shards sink below the hanging line |
| p5c9 | 39 | bone | judgment seat | My Churchill: reader's verdict; empty chair shard |
| p5c10 | 40 | ochre point | single point | Epitaph: one point of light; 63 words; end |

### 5.6 Reading treatments (body calm; evidence rich)

Quotation-heavy Ways (7, 9, 19): Newsreader italic with ochre
shard-tick (not left-border cards). Timeline (14) / facts (22): tabular
numerals, ledger rows, sticky mini-index on desktop. Quiz (35): masked
answers (details/summary, keyboard accessible). Captions (26): sepia
plate frames with plate numbers. Epitaph (40): centered, 1.4rem,
letterspaced small caps attribution. Blockquote cards, hairline boxes,
and gradient washes from the baseline are REMOVED, not restyled.

### 5.7 Manifest schema (READER-CONTRACT v1.0 §4 conformant)

Supervisor merges cohort JSON into `design/chapters.json`
(`{version, cover, default, chapters}`); reader.js inlines each `src` SVG
into `#chapter-art`. Cohort files: `design/cohort-{a,b,c,d}.json` holding
only a `chapters` fragment + per-entry design notes; `art/cohort-{a,b,c,d}/`
dirs hold ONE inlinable SVG per chapter (contract requires `src` to be a
whole-file SVG path under `art/` — fragment `#id` references do not inline).
Shared shard primitives live in `art/facets.svg` as a `<defs>` library the
supervisor inlines once (cover or a hidden defs include), referenced by
`<use href="#shard-long">` etc. from chapter SVGs.

```json
{
  "cohort": "A",
  "chapters": {
    "p2c4": {
      "src": "art/cohort-a/p2c4.svg",
      "class": "plate",
      "motif": "converging-wedge",
      "part": "II", "order": 5, "way": "4",
      "title": "Churchill's Finest Hour—May 28, 1940: The Decisive Moment",
      "content_kind": "decisive-moment",
      "rationale": "All shards converge on one afternoon; …",
      "palette_role": "ochre/vermilion",
      "opener": { "numeral_occluded": true, "seal": "II", "plate_min_px": 340 },
      "reading": { "drop_cap": true, "quotes": "shard-tick" }
    }
  }
}
```

`src` + `class` + `motif` are the contract keys (`motif` sets
`body[data-art]`, enabling per-motif CSS like
`body[data-art="converging-wedge"] …`); the rest are design annotations the
supervisor keeps (stripped or kept at merge — reader.js ignores unknown
keys). `part` + `order` + `title` recorded per entry so ID shifts remap
cheaply. Cover entry: `cover: { "src": "art/cover.svg", "class": "plate" }`
fills `#cover-art`.

### 5.8 Chapter SVG authoring rules

- One self-contained SVG per chapter (`viewBox`, no external refs except
  `<use>` into the shared defs + `currentColor`-style CSS hooks); inline
  the grain filter per file OR reference the supervisor-inlined defs —
  supervisor decides one mechanism at integration.
- Treatments (`class`): `plate` (default full-width band), `plate-tall`
  (p2c1 monoliths, p5c6 fracture — 480px), `plate-quiet` (p4c2 ledger,
  p4c10 coda — 240px, calmer), `point` (p5c10 single shard).
- Never `reader-*` class names (reserved). Never shared-file edits.

## 6. Implementation brief to the engineer (via supervisor)

1. Fonts: add Fraunces (opsz, SOFT, WONK) + Newsreader (opsz, italics) —
   book-relative `@font-face` under `design/fonts/` preferred (build ships
   it; contract §8/§11) or Google Fonts link with Georgia fallback;
   confirm computed styles change (validator checks).
2. Book CSS is UNLAYERED and wins over `@layer shared` automatically;
   scope overrides under `html[data-theme]` for all 8 themes (§8).
   Cover uses `body[data-view="cover"]` (no data-chapter on cover).
3. Build `art/facets.svg` defs first; chapter SVGs `<use>` them; cover
   SVG into `#cover-art` via manifest `cover.src`.
4. Chapter plates in `#chapter-art` via `design/chapters.json` (§5.7);
   per-motif CSS via `body[data-art]`; TOC gallery wall + progress fill
   via existing TOC hooks (coordinate structure with supervisor — no
   shared-file edits).
5. Prototype order: cover, p2c1+p2c2 mirror pair, p3c1, p3c7, p4c2,
   p5c3, p5c6, p5c10 — spanning all five parts and the hardest content
   kinds (collage, quiz, epitaph) before expanding.
6. Accessibility floor: slot art `aria-hidden`, numeral real text in
   `#chapter-meta`, contrast of Bone on Lampblack ≈ 13:1, reduced-motion
   freezes scatter, phone keeps 220px plates (never hidden — art is the
   identity).
