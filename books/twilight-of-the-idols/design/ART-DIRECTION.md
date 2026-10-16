# ART DIRECTION — Twilight of the Idols

Book identity spec for `twilight-of-the-idols` (Götzen-Dämmerung, 1888/89).
Single part: "How to Philosophize with a Hammer". 12 chapters, p1c1–p1c12.
Machine-readable tokens: `design/book-identity.json`. Book shell styles:
`design/book.css` (supervisor integrates into `theme.css`). Cover art: `art/cover.svg`.

## The book, read closely

The hammer is not a demolition tool here — the Foreword says it outright:
idols are **sounded out**, struck the way a tuning fork is struck, and the
famous closing line "become hard!" is spoken by the hammer, not to the reader's
skull but to the reader's softness. The book's procedure is: touch the idol,
listen, hear the hollow ring, move on. That is the whole design: a sequence of
**sounding-points**, twelve strikes, each leaving a crack and a ring.

Textual anchors actually in the chapters (no invented events):

- p1c1 Foreword: "this question mark so black, so immense, that it casts a
  shadow"; war as the ruse of spirits grown too inward; cheerfulness as method.
- p1c2 Maxims and Barbs: 44 numbered aphorisms in print, served as 30
  reading stanzas (several fused per served para) — "Formula for my
  happiness: a yes, a no, a straight line, a goal"; "whatever does not
  kill me makes me stronger". Barbs = thrown, pointed things.
- p1c3 The Problem of Socrates: dialectics as the revenge of the rabble;
  Socrates' dying "I owe Asclepius a cock"; décadence physiology.
- p1c4 'Reason' in Philosophy: philosophers make "conceptual mummies";
  "Egypticism";Being is an empty fiction; four closing Propositions.
- p1c5 How the Real World Finally Became a Fable: "History of an Error" in 6
  numbered steps from Plato to "Noon; moment of the shortest shadow;
  INCIPIT ZARATHUSTRA". A collapse toward noon light.
- p1c6 Morality as Anti-Nature: "il faut tuer les passions"; castration vs
  spiritualization of passion; "ecce homo" painted on the wall.
- p1c7 The Four Great Errors: four numbered errors (cause/consequence, false
  causality, imaginary causes, free will); Cornaro's diet; the innocence of
  becoming; "we deny God... this alone is how we redeem the world".
- p1c8 The 'Improvers' of Humanity: "no moral facts at all"; the pia fraus —
  Manu, Plato, Confucius, Jewish and Christian doctors "improving" by lying;
  means so far "fundamentally immoral".
- p1c9 What the Germans Lack: "you must learn to write"; dancing "with the
  feet, with concepts, with words"; the goad vs the brake shoe; Bildung as
  machine-making ("he must learn to be bored" lands in p1c10's school-viva).
- p1c10 Reconnaissance Raids: ~30 titled raids (Seneca to Zola, Kant as "cant",
  Hugo as "pharos by the sea of nonsense") plus long anti-modernist sorties;
  closes "I shall shortly give it the most independent one". A gallery of
  struck targets — the longest chapter by far (11,939 words).
- p1c11 What I Owe the Ancients: Sallust and Horace loved, Plato "boring";
  Dionysus vs the Crucified; "the torment of the woman in labour" sanctifying
  pain; "the eternal joy of creation".
- p1c12 The Hammer Speaks: coal vs diamond ("why so hard / why so soft");
  "bliss to write upon the will of millennia as upon bronze"; "become hard!"

## Three directions considered

### A. STRUCK BRONZE / sounding-out (CHOSEN)

- Palette: Forge `#100D0A` (near-black, warm), Anvil `#1B1510`, Ash `#A89A80`,
  Bone `#EDE2CC`, Bronze `#D29A4A`, Ember `#B23A2A`. Six named values.
- Type: **Cinzel** (Google Fonts, verified 200) for display — inscriptional
  Roman caps, the lettering of monuments and of bronze tablets ("write upon
  the will of millennia as upon bronze"); **Cormorant Garamond** for body
  (already loaded, calm serif); **DM Sans** for chrome/labels. Scale:
  cover title clamp(3rem, 11vw, 7rem); chapter titles clamp(1.9rem, 5vw, 3rem)
  in Cinzel with wide tracking; body 1.3rem/1.8 Cormorant; TOC names Cormorant
  italic on hover.
- Layout: centered monumental openers; cover is a dark bronze sounding-plate
  with one struck idol-disc; chapter openers carry a per-chapter
  **strike-point emblem** (cohort SVGs); body column narrow and quiet.
- Medium: ivory **line-engraving** on forge-black — fine incised strokes,
  radial resonance arcs, crack polylines. Original hand-authored SVG.
- Signature: the strike-point — every chapter is one hammer-touch: an
  idol-form, a crack from the impact point, and concentric **sound-rings**.
  The rings also become the progress bar, the TOC read-state, and the nav
  ornament. Nothing else in the library uses concentric sounding-rings.
- Nav: TOC rows gain a small ring/dot strike-marker on read; chapter nav
  buttons carry hairline bronze rules; progress fill is bronze→ember.
- Chapter variation: emblems morph per chapter (see motif table); hairline
  cracks in p1c1–p1c2 widen to full shatters by p1c7–p1c8, then resolve toward
  the noon disc (p1c5's logic echoed) and the diamond verdict of p1c12.
- Why THIS book: it literalizes Nietzsche's stated procedure (sounding out
  hollow idols) instead of decorating with generic dusk. Swap in another
  title and the rings + cracks + "become hard" bronze inscription read wrong.

### B. WOODCUT TWILIGHT (rejected)

- Palette: lamp-black `#0D0C0A`, paper `#F2EAD8`, blood-orange `#E4572E`,
  ochre `#D9A441`, ash `#8A8071`, deep violet `#2A1F3D`.
- Type: Fraunces (display, high-contrast "wonky" serif) + Spectral body.
- Layout: full-bleed black plates, oversized numerals, torn-paper section cuts.
- Medium: simulated **expressionist woodcut** — jagged white gouge-marks on
  black (after Käthe Kollwitz, "Seven Woodcuts on the War", LACMA; Cleveland
  Museum's Kollwitz holdings). Studied via web search; see references.
- Signature: each chapter a gouged plank with a white-on-black icon.
- Why rejected: the violence is right but the craft is wrong — woodcut rage
  suits protest and grief, not Nietzsche's cheerful, surgical, almost playful
  sounding-out ("what could be more necessary than cheerfulness?"). It would
  also fight the calm-body requirement: gouge textures at opener scale bleed
  into reading. Kept one lesson: commit to a print craft (engraving, not
  woodcut).

### C. MIDNIGHT DIALECTIC / Königsberg fog (rejected)

- Palette: Prussian `#0A0E1A`, fog `#C9D2DE`, signal `#7FB3D5`, rust `#A35B2A`,
  parchment `#EDE4D0`, ink `#14161C`.
- Type: Alegreya (display + body, single family) + DM Sans chrome.
- Layout: two-column "dialectic" openers — thesis left, antithesis right,
  synthesis rule below; Socratic dialogue styling throughout.
- Medium: pale **fog bands and marginalia** — mist gradients, sidenote-style
  glosses, Königsberg-harbour etchings.
- Signature: the fog-line — chapters emerge from mist as you scroll.
- Why rejected: it fits exactly one chapter (p1c3 Socrates, p1c4's "Kant, a
  crafty Christian") and misframes the other eleven. The book is Mediterranean
  noon and forge-fire, not Baltic fog; p1c5 literally ends fog ("mist and
  scepticism") at noon. Also the two-column opener grammar would need awkward
  exceptions for the aphorism chapters. Kept one lesson: p1c3 keeps a
  hemisected-mask motif inside the chosen grammar.

## References studied (web)

1. Käthe Kollwitz woodcuts — stark black/white gouge craft; taught us to pick
   a print craft deliberately, then reject woodcut for engraving. Cleveland
   Museum of Art collection pages; LACMA "Seven Woodcuts on the War";
   MoMA German Expressionism collection (clevelandart.org, collections.lacma.org,
   moma.org/s/ge/collection_ge).
2. Jan Tschichold / Penguin composition rules — asymmetric title blocks,
   rule-and-diamond furniture, classical restraint (tschicholdarchive.com,
   Design Museum "Penguin Books", Guardian "Jan Tschichold: a titan of
   typography"). Direct ancestor of the cover's centered monumental stack.
3. Trajan inscriptional capitals — the monumental Roman letterform behind the
   Cinzel choice; "write upon bronze" made typographic (UChicago
   Penelope/Trajan pages via web search).
4. Project Gutenberg e-text of Twilight of the Idols (Ludovici translation)
   for structural cross-check of the 6-step Fable and the Four Errors.

## The chosen system

### Tokens (dark-first; see JSON for full scales)

Forge `#100D0A`, Anvil `#1B1510`, Ash `#A89A80`, Bone `#EDE2CC`,
Bronze `#D29A4A`, Ember `#B23A2A`. Light/sepia themes keep the same
bronze/ember accents on paper grounds — identity survives theme switches.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display (cover, chapter titles, TOC part) | Cinzel 600–700 | Google Fonts; inscriptional caps; letterspaced |
| Body | Cormorant Garamond 400–500 | already loaded; 1.3rem/1.8; max 65ch |
| Chrome/labels/meta | DM Sans 400–600 | already loaded; small caps labels |

Supervisor: add `family=Cinzel:wght@600;700` to the fonts link in index.html.

### Signature: the strike-point

Concentric sounding-rings + impact crack. Rendered as inline SVG emblems per
chapter (cohort files), as the cover's struck disc (art/cover.svg), as the
progress fill (bronze→ember hairline), and as TOC read markers. Ring count
encodes position in the book: p1c1 shows 1 ring … p1c12 shows the full set
collapsing into the diamond verdict. Reduced motion: rings are static SVG;
no animation required.

### Composition

- Cover: monumental centered stack — eyebrow ("Friedrich Nietzsche · 1889"),
  huge Cinzel title, struck-disc art behind/below, bronze rule, tagline in
  Cormorant italic, actions. The cover.svg disc sits as a large emblem above
  the title (supervisor wires `<img>` or inline).
- Contents: single part header as bronze inscription plate; 12 rows, Cinzel
  numerals, Cormorant names; read rows gain the ring-marker.
- Chapter opener: part eyebrow → strike emblem (cohort SVG) → Cinzel title →
  number label → bronze meta-rule → quiet body. Long p1c10 gets mid-chapter
  raid markers; short p1c5/p1c12 get airy, almost poster-like openers.
- Reading body: unchanged calm Cormorant; drop-cap in bronze; end-mark is a
  small ring (◎-like SVG/character), not the shared fleuron.

### Chapter-variation scheme (cohorts own the emblems)

| Chapter | Cohort file | Motif | Rationale |
|---|---|---|---|
| p1c1 Foreword | hammerfall | Tuning fork over a black question-mark shadow | The instrument is introduced before any idol; shadow ∵ the immense "?" |
| p1c2 Maxims And Barbs | hammerfall | Scattered barbs — small daggers/arrowheads fanned | 30 served stanzas (44 maxims in print); "a yes, a no, a straight line, a goal" |
| p1c3 The Problem Of Socrates | hammerfall | Hemisected mask, one half cracked | Dialectic as double-face; décadence diagnosis; Asclepius cock |
| p1c4 'Reason' In Philosophy | hammerfall | Mummy-case / banded sarcophagus with Egyptian eye | "Conceptual mummies", Egypticism, mummified Being |
| p1c5 Fable | idolsmasher | Six-step collapse into a noon disc (shortest shadow) | "History of an Error" 1→6 ending at noon; INCIPIT ZARATHUSTRA |
| p1c6 Morality As Anti-Nature | idolsmasher | Shears vs flowering branch (castration vs spiritualized passion) | "il faut tuer les passions" vs passion "marrying the spirit" |
| p1c7 The Four Great Errors | idolsmasher | Fourfold knot / four arrows reversed (consequence→cause) | Four numbered errors; cause/consequence confusion |
| p1c8 The 'Improvers' Of Humanity | idolsmasher | Veil/mask over three tablets (Manu, Plato, Confucius) | The pia fraus — improvement by lying |
| p1c9 What The Germans Lack | untimelydusk | Dancing pen / goad-and-brake-shoe | "learn to write", dance with concepts, goad vs brake |
| p1c10 Reconnaissance Raids | untimelydusk | Skirmish gallery — row of small struck shields/nameplates | ~30 titled raids; each target sounded once |
| p1c11 What I Owe The Ancients | untimelydusk | Dionysian mask wreathed (ivy/vine) vs plain cross | Dionysus vs the Crucified; labour-pain sanctified |
| p1c12 The Hammer Speaks | untimelydusk | Diamond over coal — faceted hard gem, crack become emblem | Coal/diamond kinship; "become hard!"; bronze inscription |

### Handoff to engineers (READER-CONTRACT v1.0)

1. Supervisor adds Cinzel to the fonts link; integrates `design/book.css` into
   `theme.css` sequentially (no concurrent appends).
2. Art delivery is declarative per contract §3–§4: supervisor merges cohort
   JSON into `design/chapters.json` (`cover` → `art/cover.svg` class `plate`;
   each chapter → its cohort SVG `src` + class `motif` + `motif` id from the
   table below). reader.js inlines the SVGs into `#cover-art` / `#chapter-art`;
   no index.html or reader-template edits needed. The old
   `.chapter-meta::before` emblem-slot idea is DROPPED (that pseudo is free
   per the hook audit but intentionally left unstyled as fallback reserve).
   `.chapter-meta::after` fleuron seal is adopted as a bronze ring-dot;
   the chapter end-mark is overridden to the same ring (◉ U+25CE).
3. Cohort designers author emblems into their owned files using the palette
   above; hairline strokes (`#EDE2CC` at 0.5–0.9 opacity), bronze `#D29A4A`
   for rings, ember `#B23A2A` sparingly at impact points. Motif ids double as
   `body[data-art]` values for motif-scoped CSS.
4. Build ships `books/<slug>/{art,design}/**` per contract §11 (confirmed).

### Motif ids (for chapters.json + data-art) — T1 ring counts binding

Ring count encodes position in the sounding sequence (T1): p1c1 shows 1 ring,
growing honestly to p1c12 where the full set collapses into the diamond
verdict. Ring-count is CONTENT, not decoration.

| Chapter | motif id | art src | rings |
|---|---|---|---|
| p1c1 | sounding-fork | art/hammerfall.svg | 1 |
| p1c2 | fanned-barbs | art/hammerfall.svg | 2 |
| p1c3 | hemisected-mask | art/hammerfall.svg | 3 |
| p1c4 | mummy-case | art/hammerfall.svg | 4 |
| p1c5 | noon-collapse | art/idolsmasher.svg | 5 |
| p1c6 | shears-flame | art/idolsmasher.svg | 6 |
| p1c7 | fourfold-knot | art/idolsmasher.svg | 7 |
| p1c8 | veil-tablets | art/idolsmasher.svg | 8 |
| p1c9 | dancing-pen | art/untimelydusk.svg | 9 |
| p1c10 | skirmish-gallery | art/untimelydusk.svg | 10 |
| p1c11 | dionysian-mask | art/untimelydusk.svg | 11 |
| p1c12 | diamond-over-coal | art/untimelydusk.svg | 12→diamond |

Note: one SVG per cohort file with per-chapter `<symbol>` addressed by the
contract v1.1 A.2 `{src, symbol}` form — no fragment URLs. The idolsmasher
cohort ships `idol-*` symbol ids (idol-fable-noon, idol-shears-flame,
idol-four-errors, idol-veil-tablets) against the motif ids above; the
manifest, cohort JSON, and `data-art` CSS rules all agree on the shipped
set (R-D1: this table updated 2026-10-15 from noon-disc/shears-bloom/
veiled-tablets to match). Cohort JSON entries map 1:1 onto
`design/chapters.json` chapter entries.
p1c5's noon disc is ENGRAVED line-work in bronze (T5) — never flat gold
mural mass, which belongs to Gay Science. p1c5/p1c12 ship explicit poster
end-states (noon disc seal; diamond verdict + bronze inscription) per T4.
p1c10 gets mid-chapter raid markers per T3 (Dusk lead owns).

### Cinzel percent rule (ArtDirector binding)

Cinzel 600–700 tracked caps for cover, part plate, and long discursive
chapters (p1c3, p1c4, p1c7, p1c8, p1c10). Aphorism/short chapters (p1c2,
p1c5, p1c12) get Cinzel 600 at the SMALL end of the clamp with wider
tracking and more air — monumentality through spacing, not size. Never set
aphorism body in Cinzel. Implemented in book.css via per-chapter rules.

### Evidence

Rendered prototype screenshots (native Eval browser, viewed by designer):
`design/evidence/cover-1440.webp`, `cover-820.webp`, `cover-390.webp`,
`read-p1c1-1440.webp`, `read-p1c1-820.webp`, `read-p1c1-390.webp`,
`read-p1c2-1440.webp`, `read-p1c5-1440.webp`, `read-p1c10-1440.webp`,
`read-p1c10-raid03-1440.webp`, `read-p1c12-1440.webp`,
`read-p1c12-end-1440.webp`, `toc-1440.webp`.
Scope: cover + p1c1/p1c2/p1c5/p1c10/p1c12 at 1440; cover + p1c1 at 820/390.
Chapter slots render empty-by-design (hidden, zero gap) until cohort SVGs land.

### Prototype R1 repairs (TR1–TR6, ArtDirector CONDITIONAL PASS)

- TR1 Cinzel-in-build: supervisor-owned (index.html fonts link has no Cinzel;
  verified live). Fix: add `family=Cinzel:wght@600;700` at integration, re-probe
  computed styles. All book.css display rules already key off --font-display.
- TR2 title echo cut: `.meta-number` hidden (number_label == title in all 12
  chapters); opener keeps header context + Cinzel title + .meta-sub only.
- TR3/T3 raid markers shipped: 22 titled raids mapped (para indices
  0,1,2,5,6,8,15,17,22,26,30,31,34,36,37,39,40,42,45,47,50,54) + book-owned
  `reader:chapter` tagging script in prototype.html (final integration carries
  it into index.html); bronze-ring-on-hairline + "raid NN" labels; first graf
  keeps drop-cap dignity (label only, no rule). 22/22 tags verified live.
- TR4 first emblems: cohort-owned (p1c1/p1c5/p1c12 with honest T1 ring counts);
  re-review happens WITH emblems. Slots + manifest + treatments are ready.
- TR5 p1c2 percent rule: whisper title (clamp 1.15–1.6rem, 600, 0.22em
  tracking) + airy meta + narrower/lower measure for the 30 served stanzas.
- TR6 cover: manifest caption cut to "the sounded idol" + whisper figcaption
  style; eyebrow collapsed to a single leading diamond.
### ArtDirector verdict: PROVISIONAL PASS (T1–T6 binding)

Full text: `.omp/design/critiques/twilight-of-the-idols.md`. "STRUCK BRONZE /
sounding-out" approved: the sounding-out insight literalizes the book's stated
procedure; motif table "superb"; both rejections correctly argued. Q1:
distinctive by medium + procedure (line-engraving, not gradient wash — keep
every gradient subservient to line-work). Q2: Cinzel percent rule (above).
T1 ring counts encoded in the motif table; T3 relayed to Dusk lead
(supervisor); T4 poster end-states specified; T5 engraved-noon separation
held; T6 = supervisor REVISE + validator R1 fixes, all applied.

### T2 — Cormorant body is a deliberate reclamation

Twilight keeps Cormorant Garamond for reading prose by argument, not by
inheritance. The case: (a) the book is short, swift, and aphoristic — the
reader skims maxims and raids, and Cormorant's light, open texture at
1.3rem/1.8 keeps that skimming effortless; a heavier text face would slow
the polemic down. (b) The identity is already carried hard by Cinzel
display + twelve engraved emblems + bronze/ember accents — the body must
recede, and Cormorant recedes gracefully where a more distinctive text
face (Spectral's slab stress, Newsreader's newsprint voice) would compete
with the emblems. (c) It is already loaded and already calm: switching
bodies would spend the reader's adaptation budget for zero procedural
gain. The prototype's body reads "quiet page, loud openers" — exactly the
brief. If a future review finds the body reading "default" beside its
Cinzel display, the sanctioned fallback is Spectral (open to one more by
justification); Newsreader is closed per the font registry.
