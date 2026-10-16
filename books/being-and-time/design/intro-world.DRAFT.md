# intro-world cohort design — DRAFT (Phase 1 record + Phase 2 conformance)

- Book: Being and Time (Martin Heidegger) — cohort `intro-world`, 14 chapters.
- Status: Phase 1 draft grammar SUPERSEDED in tokens/type/composition by
  `books/being-and-time/design/ART-DIRECTION.md` (binding, read in full at Phase 2).
  Phase 1 content rationales, 14 motif concepts, and neighbor-check are PRESERVED
  (lead-accepted foundation); everything flagged [P2-RECHECK] below is now resolved
  in the Phase 2 conformance section. `.omp/design/READER-CONTRACT.md` still absent;
  rendering constraints taken from ART-DIRECTION §4.7 (paragraphs-only reader).
- Skills read via URI (no fallback): `skill://frontend-design`,
  `skill://frontend-workflow`, `skill://reference-study` (notes: `local://intro-world-reference-study.md`).
- Ownership: designer draft only. Engineer owns final `.json/.css/.svg` implementation.
  No prose, shared/**, theme.css, or index.html edits were made.
- All 14 chapters read in full from `books/being-and-time/data/chapters/<id>.json`;
  titles/counts verified against `books/being-and-time/data/toc.json` (AUTHORITY).
- Baseline inspected in Chromium at 1440×1000 (cover, p1c7, p2c4 openers viewed).

## Baseline diagnosis (observed, 2026-10-15)

- Cover: forest-trunk repeating-linear-gradient + glow orbs + centered Cormorant title.
  Evocative but generic "dark academia"; nothing says *Heidegger* (no question, no
  clearing geometry, no stone/§ register).
- Chapter openers: identical for §7 and §12 (different parts, different arguments) —
  centered title, full-bleed "SS § N" bar (renders awkwardly wide), word-count line,
  tiny fleuron, then body. The p1c7 drop cap renders accent-green; p2c4's renders
  near-white — inconsistent, and neither is content-driven.
- Division One ❧ / Division Two ◇ ornaments exist but the Introduction has no mark of
  its own and p2c1–p2c6 share one drop-cap rhythm with no per-chapter voice.

## Cohort argument (what the 14 chapters do — grounded in read prose)

- p1c1 §1: The question of Being is forgotten; three prejudices (most universal,
  indefinable, self-evident) block it. Motifs: giants' battle (Sophist), trivialization,
  average comprehensibility that hides an enigma.
- p1c2 §2: Formal structure of questioning — Gefragtes / Befragtes / Erfragtes;
  Dasein named; "relatedness backward or forward", no vicious circle.
  Motifs: the loop that is not a circle, prior guidance, interrogation.
- p1c3 §3: Ontological priority — sciences rest on unexamined fundamental concepts;
  crises in mathematics/physics/biology/history; ontology must precede the ontic sciences.
  Motifs: foundations, crisis/crack, productive logic leaping ahead.
- p1c4 §4: Ontic priority — Dasein defined; existence (Existenz), existentiell vs
  existential, threefold priority; fundamental ontology = existential analytic of Dasein.
  Motifs: mineness-to-come, the analytic as root system, Aristotle/soul.
- p1c5 §5: Dasein ontically nearest, ontologically farthest; exposure of the horizon;
  temporality (Zeitlichkeit) named as the meaning of Dasein's being; "time" as naive
  criterion vs horizon. Motifs: horizon line, nearness/distance inversion, time.
- p1c6 §6: Destruction of the history of ontology — tradition covers the wellsprings;
  Kant / Descartes / Aristotle as three decisive stages; positive (not negative) intent.
  Motifs: excavation, strata, wellsprings (Quellen), loosening the sclerotic.
- p1c7 §7: Phenomenology — phenomenon (what shows itself) + logos (letting be seen);
  appearing vs semblance; covering-up (concealment, submersion, dissimulation);
  "To the things themselves!". Motifs: light/daylight (phos), veil, clearing.
- p1c8 §8: Treatise outline — two parts × three divisions; Dasein as entry, time as
  horizon; preparatory analytic previewed. Motifs: the map, two-pronged path.
- p2c1 §9: Theme of the analytic — essence lies in existence; always-mineness
  (Jemeinigkeit); authenticity/inauthenticity; existentials vs categories; average
  everydayness; Augustine ("land of trouble"). Motifs: mineness, the ownmost, mine vs case.
- p2c2 §10: Demarcation from anthropology/psychology/biology — Descartes' undiscussed
  sum; animal rationale; life accessible only via Dasein (privative); Scheler/Husserl
  person. Motifs: boundary line, refused categories, the undiscussed sum.
- p2c3 §11: Primitive Dasein — everydayness ≠ primitiveness; ethnology presupposes the
  analytic; "natural concept of world" as unfulfilled need. Motifs: the far/near
  inversion again, uncluttered phenomena, field notes refused.
- p2c4 §12: Being-in-the-world sketched — unified phenomenon, three perspectives;
  In-Sein vs categorical insideness (water/glass); dwelling (wohnen, "ich bin");
  taking care (Besorgen); knowing as one founded exemplar. Motifs: dwelling, the
  hyphenated unity, inside-that-is-not-containment.
- p2c5 §13: Knowing as founded mode — subject/object relation refused; deficiency of
  concern; "cabinet of consciousness" refused; Dasein always already outside.
  Motifs: the refused cabinet, stepping-out, observation as privation.
- p2c6 §14: Worldliness (Weltlichkeit) in general — four senses of "world";
  de-worlding of nature; surrounding world (Umwelt) as point of departure.
  Motifs: horizon-ring, the "around" (Um-), surrounding world.

## Three directions considered (comparison)

### A. "Excavated Palimpsest" (strata / destruction register)
Openers as archaeological sections: layered strata bands, incised fragment glyphs,
one stratum peeled or lit per chapter. Superb for §6 (destruction) and §11
(primitive), natural for the Introduction's backward glance; weak for §§12–14, where
the argument turns outward to world and dwelling — digging down fights the text's
forward motion. Risks reading funereal across 14 chapters.

### B. "Interrogative Field" (margin / question register)
Openers as a field of inquiry: a large § numeral, radiating interrogation lines,
marginal gloss column, Gefragtes→Befragtes→Erfragtes triple markers. Superb for
§§1–2 and §10 (demarcation as drawn boundary); but it systematizes what the later
chapters deliberately dissolve (§12's hyphenated unity resists being diagrammed
into boxes) and would feel scholastic-diagrammatic rather than phenomenological.

### C. "The Clearing" (Lichtung — forest light / horizon register) — CHOSEN
Openers as a single carved emblem on stone-dark ground: horizon lines, rings, veils
parting, a point of light. The cohort's own argumentative arc IS this image —
forgetting (darkness) → question-form (first line) → foundations (stone) → horizon
(§5 names it) → excavation (§6 digs) → light (φῶς, §7's phainomenon etymology) →
map (§8) → mineness (§9, the center) → dwelling (§12) → surrounding world (§14,
the ring). Every chapter earns a distinct composition from the same grammar, and
the grammar already rhymes with the book's forest-manuscript theme and the
cover's clearing light. Light is spent sparingly (brightest at §7), so the
phenomenology chapter lands as the arc's noon.

Why C over A/B: A fits only the backward-looking chapters; B fits only the
analytic ones; C fits the cohort's actual movement from darkness to world, uses
Heidegger's own master images (horizon, light, clearing, dwelling, round),
and is the least like a generic template (no cards, no gradient rail, no numbered
step markers — these chapters are an arc, not a sequence).

## Chosen grammar: "Carved Clearing" (PROVISIONAL — [P2-RECHECK] all tokens)

- Palette (dark-first, 6 named; light/sepia via theme variables):
  - `Clearing-black #0A0F0B` — opener ground (matches theme --bg family) [P2-RECHECK]
  - `Wellspring #4ADE80` — accent: light, the question's gleam [P2-RECHECK]
  - `Moss-copper #A3E635` — secondary: stone inscription, seals [P2-RECHECK]
  - `Strata-grey #8AAB96` — muted incised line work [P2-RECHECK]
  - `Veil #16241C` — panel/emblem field separation [P2-RECHECK]
  - `Parchment-signal #E4F0E8` — display text on dark [P2-RECHECK]
  - Light/sepia: emblems re-ink via `var(--text)`, `var(--accent)`, `var(--copper)`,
    `var(--text-muted)`; SVG uses `currentColor` + CSS variables only, no fixed fills
    except translucent whites that invert via a `[data-theme]`-scoped variable.
- Type (must load via existing stack — Google Fonts link already in index.html):
  - Display: Cormorant Garamond (loaded) — opener titles, § numerals, German terms.
  - Body/UI: DM Sans (loaded) — meta lines, TOC, settings. No new families [P2-RECHECK
    if ART-DIRECTION.md introduces display type; grammar survives a serif swap].
  - Scale: opener title clamp(2.2rem, 5vw, 3.4rem); § numeral 0.8rem tracked seal
    (keep existing cartouche, fix full-bleed bar defect); body unchanged.
- Layout/composition (opener, desktop):
  ```
  ┌────────────────────────────────────────────┐
  │  meta-part (small, tracked, left)           │
  │  ┌────────┐  Title (serif, left, 2 lines)   │
  │  │ EMBLEM │  § seal + word count (quiet)    │
  │  │ 160px  │  one-line gloss (German term)   │
  │  └────────┘                                 │
  │  ── incised rule (chapter-specific glyph) ──│
  │  body (manuscript column, calm)             │
  └────────────────────────────────────────────┘
  ```
  Mobile: emblem stacks above title at 120px; rule full width. Left-aligned
  throughout (Fleckhaus/Bibliothek Suhrkamp register); centered only the existing
  cover, which the supervisor owns.
- Signature idea: **fourteen carved emblems, one grammar** — each chapter opens with
  an authored SVG emblem (incised hairline + one light event) drawn from its own
  argument; below, an incised rule whose center glyph differs per chapter (§, ?, ◇,
  ❧, =, ○…); body text untouched and calm.
- Medium: authored inline SVG (shared file `art/intro-world.svg`, per-chapter
  `<symbol>` regions) + CSS. No gradients-as-decoration, no stock, no canvas needed.
- Variation without tinting: chapters differ by emblem composition, rule glyph,
  gloss term, and light placement — never by hue rotation or modulo.

## Per-chapter map (all 14; IDs + titles verified against toc.json)

| # | ID | Part/order/title | Rationale (2–4 sentences) | Palette role | Motif / SVG region | Opener composition | Reading treatment |
|---|----|------------------|---------------------------|--------------|--------------------|--------------------|-------------------|
| 1 | p1c1 | 1 · §1 · The Necessity of an Explicit Repetition of the Question of Being (1011w) | Being is forgotten; three prejudices (universal, indefinable, self-evident) declare the question superfluous. Average comprehensibility hides an enigma; the giants' battle must be rekindled. The chapter ends demanding a formulation. | Darkest ground; single ember accent | `iw-forgotten`: three horizontal bars (the prejudices) over a buried "?" whose dot alone glows | Emblem left; gloss "γigantomachia — the giants' battle"; rule glyph `?` half-buried | Drop cap kept off (short chapter, dense); German-term italic serif pass |
| 2 | p1c2 | 1 · §2 · The Formal Structure of the Question of Being (1597w) | Every questioning is a seeking with prior guidance: Gefragtes / Befragtes / Erfragtes. Dasein is named as the being to interrogate; the "circle" is really a backward-or-forward relatedness. Transparency, not viciousness. | Accent line-work on dark | `iw-loop`: an open loop (almost-circle, gap at top) with three nodes on its path and an arrow that returns offset, not closed | Gloss "Gefragtes · Befragtes · Erfragtes"; rule glyph `↺` (open, not closed) | First body paragraph gets letterspaced small-caps first line naming the triad; marginal gloss markers in TOC sub |
| 3 | p1c3 | 1 · §3 · The Ontological Priority of the Question of Being (1202w) | Sciences stand on unexamined fundamental concepts; real movement is crisis in basic concepts (mathematics, relativity, biology, history). Ontology — the genealogy of ways of being — must precede and found the ontic sciences. | Stone grey dominant, accent as crack | `iw-foundation`: stacked foundation stones, the top course cracked; a plumb line drops through the crack | Gloss "crisis in basic concepts"; rule glyph `≋` (strata) | Blockquote treatment: stone-left-border for the four science examples |
| 4 | p1c4 | 1 · §4 · The Ontic Priority of the Question of Being (1361w) | Dasein defined: the being concerned about its being; existence (Existenz) vs existentia; existentiell vs existential. Threefold priority (ontic, ontological, ontic-ontological); fundamental ontology = existential analytic of Dasein. | Accent + copper balanced (two priorities) | `iw-root`: a trunk splitting into three roots labeled by line weight (solid / double / solid+ring) | Gloss "Existenz — to be its being"; rule glyph `∴` | Key-term pull: first occurrences of Existenz/existentiell/existential set in italic serif with hairline underline |
| 5 | p1c5 | 1 · §5 · The Ontological Analysis of Dasein as Exposing the Horizon for an Interpretation of the Meaning of Being in General (1796w) | Dasein is ontically nearest, ontologically farthest. The analytic must expose the horizon; temporality (Zeitlichkeit) is named as the meaning of Dasein's being. Time must be grasped as horizon, not as beings "in time". | Horizon band: faintest light line on dark | `iw-horizon`: a single unbroken horizon line; below it dense hatch (nearness), above it open space; one small sun-disc of accent touching the line | Gloss "Zeitlichkeit — the horizon"; rule glyph `─` (the line itself, extended) | Drop cap ON (first long chapter); section-rule before the temporality reveal gets the sun-disc glyph |
| 6 | p1c6 | 1 · §6 · The Task of a Destruction of the History of Ontology (3013w) | Tradition covers the wellsprings; destruction loosens the sclerotic and returns positively to Kant, Descartes, Aristotle along the guideline of temporality. Negative function tacit; positive intent: stake out possibilities and limits. | Deepest strata palette; copper for the three names | `iw-strata`: three labeled strata bands (KANT / DESCARTES / ARISTOTLE, oldest at bottom) with a vertical excavation shaft of light cutting through all three | Gloss "Destruktion — positive return"; rule glyph `▼` (the shaft) | Long-chapter relief: generous blockquote margins; the three stage headings get stratum ticks in the margin |
| 7 | p1c7 | 1 · §7 · The Phenomenological Method of the Investigation (4819w) | Phenomenon (what shows itself, φῶς-light) + logos (letting be seen) = "To the things themselves!". Appearing vs semblance; covering-up (concealment, submersion, dissimulation); being is the transcendens. The cohort's noon — longest chapter. | Brightest light event in the cohort | `iw-clearing`: a dense ring of vertical trunk-lines parted at center by a shaft of accent light falling on a single point (the thing itself) | Gloss "τὰ φαινόμενα — to the things themselves!"; rule glyph `☀` (incised, not emoji — thin-ray sun) | Drop cap ON, largest; A/B/C sub-section breaks (Phänomen/Logos/Begriff) get veil-parting rules; pull-quote styling for the maxim |
| 8 | p1c8 | 1 · §8 · The Outline of the Treatise (490w) | Two parts × three divisions; Dasein as entry, time as horizon; the preparatory analytic previewed chapter by chapter. A map, not an argument — shortest chapter, must feel like arrival and departure at once. | Quiet, balanced, map-like | `iw-map`: a small two-column tablet — two roman numerals (I/II) each branching into three ticks; a dotted path enters at Dasein, exits at Zeit | Gloss "two parts, three divisions"; rule glyph `⋮⋮` (the plan) | No drop cap (map chapter); the division list gets the tablet treatment (indented, hairline left rule) |
| 9 | p2c1 | 2 · §9 · The Theme of the Analytic of Dasein (1588w) | Essence lies in existence; always-mineness (Jemeinigkeit); authenticity/inauthenticity; existentials vs categories; average everydayness; Augustine's "land of trouble". The analytic's charter. | Warmest accent (the ownmost) | `iw-mine`: a ring (the self) with its center point pulled slightly off-center toward the viewer — mineness as eccentric center | Gloss "Jemeinigkeit — always mine"; rule glyph `⊙` | Drop cap ON; existentials-vs-categories passage gets a two-column gloss (term pairs, no card) |
| 10 | p2c2 | 2 · §10 · How the Analytic of Dasein is to be Distinguished from Anthropology, Psychology, and Biology (1891w) | Descartes' sum left undiscussed; animal rationale and imago Dei refused as foundations; Scheler/Husserl person; life accessible only privatively via Dasein. A boundary drawn around the analytic. | Cool, refusal-register: grey + thin accent | `iw-boundary`: a clean vertical boundary line; three faded glyphs (α/ψ/β for the three disciplines) on the far side, one solid point on the near side | Gloss "the undiscussed sum"; rule glyph `|` (the boundary) | The three refused definitions get struck-measure treatment (hairline through the numeral, not the text) |
| 11 | p2c3 | 2 · §11 · The Existential Analytic and the Interpretation of Primitive Dasein (598w) | Everydayness ≠ primitiveness; primitive phenomena less hidden by self-interpretation; ethnology presupposes the analytic; the "natural concept of world" still unfulfilled. Shortest Division chapter — modest, fragmentary. | Faintest emblem (fragment) | `iw-sherd`: a single pottery-sherd curve (incised arc with hatch) on empty ground — less hidden, less adorned | Gloss "ursprünglich — primordial"; rule glyph `◜` (fragment corner) | No drop cap; single epigraph-style pull of the "natural concept of world" line |
| 12 | p2c4 | 2 · §12 · The Preliminary Sketch of Being-in-the-World (2973w) | The hyphenated unity: three perspectives, one phenomenon; In-Sein vs categorical insideness (water/glass); dwelling — "ich bin" as "I dwell"; taking care (Besorgen). The cohort's second anchor. | Full light-minus-noon; dwelling warmth via copper | `iw-dwelling`: a simple hut/dwelling outline (gable + door of light) enclosed WITHOUT containing lines by a broken hyphen-ring: `– ○ –` | Gloss "ich bin — I dwell"; rule glyph `⌂` (incised hut) | Drop cap ON; the Besorgen example-list passage gets hanging-indent care-list styling |
| 13 | p2c5 | 2 · §13 · The Exemplification of Being-in in a Founded Mode: Knowing the World (1343w) | Subject/object "relation" refused; knowing as deficiency of concern; no exit from an inner sphere, no return with booty to the cabinet of consciousness; Dasein always already outside. A refusal chapter. | Dimmed accent (privation register) | `iw-outside`: an open cabinet/box drawn in dashed (refused) lines, empty; a solid arrow already outside it pointing outward — no return path | Gloss "always already outside"; rule glyph `↗` (out, no back) | The "cabinet of consciousness" sentence gets veil-quote styling (block, hairline, no fill) |
| 14 | p2c6 | 2 · §14 · The Idea of the Worldliness of the World (1498w) | Four senses of "world" disentangled; nature as de-worlding limit case; worldliness as existential; the surrounding world (Umwelt) as the path forward. The cohort's open ending — the ring, not the close. | Ring-completing accent; forward tilt | `iw-ring`: a near-complete ring (the "around", Um-) with a small gap at the walking direction; four small ticks on the ring for the four senses | Gloss "Weltlichkeit — the around"; rule glyph `○` (the ring) | The four senses list gets ring-tick numerals (①–④ as incised circles, text-safe); forward-link styling into the next cohort |

## Neighbor-differentiation check

- p1c1/p1c2: buried-bar vs open-loop — dark stasis vs first line of inquiry.
- p1c3/p1c4: horizontal strata vs vertical root — foundation vs growth.
- p1c5/p1c6: single horizon line vs triple strata + shaft — surface vs depth.
- p1c6/p1c7: shaft of excavation vs shaft of light — digging vs dawning (deliberate
  rhyme, inverted: §6 light goes down, §7 light falls from above).
- p1c7/p1c8: brightest emblem vs quietest map — noon vs tablet.
- p2c1/p2c2: eccentric center vs boundary line — inside vs edge.
- p2c2/p2c3: hard boundary vs faint sherd — refusal vs fragment.
- p2c4/p2c5: dwelling (enclosure-without-containment) vs cabinet (containment refused)
  — the deliberate antithesis pair of the cohort.
- p2c5/p2c6: outward arrow vs surrounding ring — exit vs around.

## Implementation brief for the engineer (via lead)

1. New shared asset `books/being-and-time/art/intro-world.svg` with 14 `<symbol>`
   regions (`iw-forgotten`, `iw-loop`, `iw-foundation`, `iw-root`, `iw-horizon`,
   `iw-strata`, `iw-clearing`, `iw-map`, `iw-mine`, `iw-boundary`, `iw-sherd`,
   `iw-dwelling`, `iw-outside`, `iw-ring`), all strokes `currentColor`/CSS vars.
2. New cohort CSS `books/being-and-time/design/intro-world.css` (supervisor integrates):
   opener grid (emblem + left-set title) keyed on `body[data-chapter="<id>"]`,
   per-chapter rule glyphs, drop-cap policy per map, term-pull styles.
3. New manifest `books/being-and-time/design/intro-world.json` encoding this map
   (title, cohort, rationale, palette role, motif, opener, reading treatment).
4. Defect fix request (supervisor scope): the full-bleed `.meta-number` bar and the
   inconsistent drop-cap ink (p1c7 green vs p2c4 white) observed in baseline.
5. Prototype 3 openers minimum (p1c7 noon, p2c4 dwelling, p1c1 buried) and view at
   desktop + phone before expanding to all 14.

## Evidence

- Observed: baseline cover + p1c7 + p2c4 openers at 1440×1000 in Chromium
  (screenshots viewed in-session; baseline server http://127.0.0.1:8000/).
- Computed: TOC/chapter inventory from toc.json (14/14 IDs verified).
- Sampled: full prose of all 14 chapters read; references studied (Klostermann,
  Suhrkamp/Fleckhaus, Chartres labyrinth) with notes in local reference-study file.
- Not run: prototype render (engineer phase); no final files written by designer.

---

# Phase 2 conformance (binding ART-DIRECTION.md — Direction A "The Clearing")

Conformance revision per lead order. Phase 1 direction-C choice, 14 content
rationales, 14 SVG symbol concepts, and neighbor-check: PRESERVED. Phase 1
tokens (Wellspring/copper dark palette), type roles (Cormorant/DM Sans),
emblem-left + rule-glyph composition, and all blockquote/hr/figure-dependent
reading treatments: SUPERSEDED as specified below.

## (a) Conformance statement

- TOKENS: draft palette dropped entirely. All line-work re-inked to `--bt-bark`
  (hairlines) / `--bt-lichen` (secondary line-work); all light events to
  `--bt-shaft` (display/numeral/shaft/focus ONLY, never paragraph text); text
  `--bt-mist`; first-para wells `--bt-under`. NO ember anywhere in cohort 1
  (binding §5: ember is §40 + death cohort only). Light theme: ground `#F5F1E4`,
  text `#1C231A`, accent `#7A6414`, muted `#5A6B54`, hairline `#C9BFA4`. Sepia:
  ground `#EFE6D0`, text `#232B1F`, accent `#6E5A10`, muted `#5F6B53`, hairline
  `#C4B78F`. SVG strokes use currentColor/CSS vars only, so all three themes
  re-ink automatically; translucent shaft fills bind to the accent variable.
- TYPE: Fraunces display + Source Serif 4 body (supervisor wires fonts).
  Chapter titles 40–64px clamp, opsz 100, wght 400, leading 1.05, −0.01em,
  flush-left, NEVER centered. German landmark terms Fraunces italic 1.02em
  (rail glosses + threshold-pull terms only; prose never edited). ONE kicker
  line per opener (`Part · § N · words · min`, Source Serif 4 12px 0.22em
  lichen). Ghost numerals Fraunces 300, 18–24vw, mist 7–10%: explicit per-ID
  `#chapter-meta::before { content: "NN" }` rules — TOP-CROP p1c1–p1c8,
  LEFT-BLEED p2c1–p2c6.
- COMPOSITION: opener ledger everywhere — ghost gutter 22% + title column 52%
  + margin rail 26% (≥1100px); rail folds under title as horizontal strip
  <1100px; single column + cropped ghost backdrop <640px. Shaft art enters
  top-right, terminates ABOVE the first paragraph, never behind body text.
  First paragraph = threshold: Fraunces 21px/1.6 on `--bt-under` well.
  FIREWALL (all Phase 1 violations removed): NO drop caps (p1c5/p1c7/p2c1/p2c4
  drop-cap treatments replaced by threshold wells); NO glyph ornaments (the
  entire ☀⊙○◜⌂↺∴≋▼⋮⋮ rule-glyph row deleted — each chapter's mark re-expressed
  as shaft variant / ghost-numeral treatment / margin-rail motif / fleck
  field, see map); NO centered title block; NO justified body (left-aligned,
  ragged right, 34rem).
- HOOKS (READER-CONTRACT v1.0 STABLE folded in): reader renders `<p>` ONLY.
  All blockquote/hr/figure-dependent treatments killed (stone-border
  blockquotes, two-column gloss, tablet list, care-list indents, ring-tick
  numerals, veil-quote blocks). Opener art goes in the `#chapter-art` slot
  (reader.js inlines the manifest `src` SVG above `#chapter-meta`; empty slot
  stays hidden, shifts nothing). Reading treatments use ONLY:
  `body[data-book="being-and-time"]` + `body[data-part-id]` (part-1|part-2,
  preferred over legacy data-part roman) + `body[data-chapter]` scoping,
  `body[data-art]` motif id, `#chapter-art` + `#chapter-meta` + pseudos,
  `#chapter-text p` / `:first-of-type`, per-chapter `#chapter-text` background
  fleck dividers + breather spacing (explicit per-ID rules, no modulo).
  Cohort CSS stays unlayered (beats shared `@layer shared`); NEVER mints
  `reader-*` classes. No book JS needed for this cohort's design; if the
  engineer needs JS it is sanctioned via the `reader:chapter` event touching
  only the slots. Manifest entries carry part + order + full title (cheap
  remap); SUPERVISOR merges `design/intro-world.json` into
  `design/chapters.json` with class treatments (banner|plate|motif) and motif
  ids. Build already ships art/** + design/** — no build change needed.
- COHORT BEAT (§5 row 1): slit → among trunks; authored gap ramp 4% (p1c1) →
  20% (p2c6) with explicit per-chapter values (table below, not a formula);
  steep 34° shaft throughout; p1c1 widest margin rail with Sophist epigraph;
  p1c6 single leaning trunk −4° fused with strata motif; p1c7 WIDEST shaft in
  cohort 1 (noon concept survives as shaft width, not hue).
- SVG: `art/intro-world.svg`, 14 kept symbols re-inked + re-sited (map below);
  strokes currentColor/CSS vars only; feTurbulence grain gated (off under
  prefers-reduced-motion / narrow widths); ALL animation off under
  reduced-motion, static art remains. Per-slot treatment: `#chapter-art`
  scenes (p1c5/p1c6/p1c7/p2c4 full shaft-region compositions) = class `banner`;
  rail-emblem chapters = class `motif` with motif id `iw-*` mirrored to
  `body[data-art]` for CSS keying; p1c1/p1c8 legibility emblems = `plate`.
## (b) Conformed 14-entry map

Ledger key — G = ghost gutter (numeral + placement), T = title column
(kicker/title/meta), R = margin rail (gloss term + motif micro-caption ONLY),
S = shaft region (top-right art, terminates above first para), F = fleck field
(#chapter-text background dividers + breather spacing).

### 1. p1c1 — Part 1, order §1 — The Necessity of an Explicit Repetition of the Question of Being (1011w)
- Rationale: PRESERVED — Being forgotten; three prejudices (universal,
  indefinable, self-evident) declare the question superfluous; average
  comprehensibility hides an enigma; the giants' battle must be rekindled.
- Palette role: darkest cohort ground (`--bt-humus`); hairline `--bt-bark`;
  shaft at its narrowest (4% slit) in `--bt-shaft`; text `--bt-mist`. No ember.
- Motif + SVG + placement: KEEP `iw-forgotten` (three prejudice-bars over a
  buried query whose dot alone catches light), re-inked bark/lichen with the
  single dot in shaft color. Sits in R as a small rail emblem (~120px wide);
  the buried-query curve is echoed at large scale as the 4% slit shaft in S.
  Scale: rail emblem small; shaft hairline-narrow.
- Opener: ledger; G top-crop "1"; T flush-left title + one kicker
  (`Part 1 · § 1 · 1011 words · ≈5 min`); R WIDEST in cohort (binding note)
  carrying Sophist epigraph ("a battle of giants concerning Being" — Plato,
  Sophist 245e) above the gloss term + micro-caption.
- Reading: threshold well on p:first-of-type; F = sparsest flecks in cohort
  (forgetting register: near-empty field, wide breather after the prejudice
  enumeration region).

### 2. p1c2 — Part 1, order §2 — The Formal Structure of the Question of Being (1597w)
- Rationale: PRESERVED — questioning as seeking with prior guidance:
  Gefragtes/Befragtes/Erfragtes; Dasein named; the "circle" is a
  backward-or-forward relatedness.
- Palette role: bark line-work; shaft 5.5% — the slit taking a first step
  wider; lichen secondary strokes.
- Motif + SVG + placement: KEEP `iw-loop` (open loop, three nodes, arrow
  returns offset, never closed), re-inked bark with nodes in lichen and the
  offset return-tip in shaft color. Sits in R as rail emblem (~110px); the
  loop's open gap aligns with the shaft's entry angle in S (34°), so rail
  and shaft rhyme.
- Opener: ledger; G top-crop "2"; T flush-left + kicker; R gloss
  "Gefragtes · Befragtes · Erfragtes" (Fraunces italic) + micro-caption
  "the loop that is not a circle".
- Reading: threshold well; F = three sparse fleck clusters spaced down the
  chapter (one per structural moment — explicit positions, no modulo).

### 3. p1c3 — Part 1, order §3 — The Ontological Priority of the Question of Being (1202w)
- Rationale: PRESERVED — sciences on unexamined fundamental concepts; crisis
  in basic concepts (mathematics, relativity, biology, history); ontology
  must precede and found the ontic sciences.
- Palette role: bark/lichen stone register; shaft 7% with a visibly cracked
  edge (crisis) — shaft color only along the crack lip and beam core.
- Motif + SVG + placement: KEEP `iw-foundation` (stacked foundation stones,
  top course cracked, plumb line through the crack), re-inked bark/lichen.
  Sits in R as rail emblem (~110px); the plumb line continues upward into S
  as the shaft's leading edge — one continuous vertical from rail to shaft.
- Opener: ledger; G top-crop "3"; T flush-left + kicker; R gloss "crisis in
  basic concepts" + micro-caption "the plumb line through the crack".
- Reading: threshold well; F = four short fleck bands (one per science in
  crisis — math/physics/biology/history) at explicit paragraph-region
  positions with breather spacing between.

### 4. p1c4 — Part 1, order §4 — The Ontic Priority of the Question of Being (1361w)
- Rationale: PRESERVED — Dasein defined (concerned about its being);
  Existenz vs existentia; existentiell vs existential; threefold priority;
  fundamental ontology = existential analytic of Dasein.
- Palette role: bark structure + lichen secondary; shaft 8.5% — first shaft
  with a visible double edge (the two priorities: ontic + ontological).
- Motif + SVG + placement: KEEP `iw-root` (trunk splitting into three roots
  by line weight: solid/double/solid+ring), re-inked bark with the ringed
  (ontic-ontological) root tipped in shaft color. Sits in R (~120px); the
  trunk-top runs up into S and becomes the shaft's double edge.
- Opener: ledger; G top-crop "4"; T flush-left + kicker; R gloss "Existenz —
  to be its being" + micro-caption "three roots, one trunk".
- Reading: threshold well; F = root-hair flecks denser toward the chapter's
  lower third (priority argument landing), explicit density stops.

### 5. p1c5 — Part 1, order §5 — The Ontological Analysis of Dasein as Exposing the Horizon for an Interpretation of the Meaning of Being in General (1796w)
- Rationale: PRESERVED — Dasein ontically nearest, ontologically farthest;
  the analytic must expose the horizon; temporality (Zeitlichkeit) named as
  the meaning of Dasein's being; time as horizon, not beings "in time".
- Palette role: horizon register — lichen horizon hairline; shaft 10% lying
  ALONG the horizon (lowest shaft placement in the cohort: light touching
  the line, not falling from above).
- Motif + SVG + placement: KEEP `iw-horizon` (unbroken horizon line; dense
  hatch below = nearness, open space above; small shaft-color disc touching
  the line), re-inked bark/lichen + shaft disc. Sits in S ITSELF at opener
  scale (the shaft region IS the horizon scene, full ledger width above the
  title); R carries only gloss + micro-caption, no emblem (light, not object).
- Opener: ledger; G top-crop "5"; T flush-left + kicker (long title wraps to
  3 lines max at 40px floor); R gloss "Zeitlichkeit — the horizon" +
  micro-caption "nearest below, farthest above". DROP CAP REMOVED → threshold
  well carries the opening weight.
- Reading: threshold well (first long chapter — well gets full measure +
  extra bottom breather); F = hatch-density gradient: dense flecks early
  (nearness) thinning toward the end (distance), explicit stops.

### 6. p1c6 — Part 1, order §6 — The Task of a Destruction of the History of Ontology (3013w)
- Rationale: PRESERVED — tradition covers the wellsprings; destruction
  loosens the sclerotic, returns positively to Kant/Descartes/Aristotle along
  the guideline of temporality; negative function tacit, positive intent.
- Palette role: deepest strata register (bark bands); shaft 12% cutting
  vertically through the bands; ONE leaning trunk in lichen tilted −4°
  (binding: tradition tilted).
- Motif + SVG + placement: FUSE `iw-strata` (three bands KANT / DESCARTES /
  ARISTOTLE, oldest at bottom, shaft cutting through) with the leaning trunk:
  the −4° trunk stands IN the shaft region, pierced by the shaft, strata
  bands stacked behind it. S = strata + leaning trunk + piercing shaft
  (largest S composition so far); R carries gloss + micro-caption only.
- Opener: ledger; G top-crop "6"; T flush-left + kicker; R gloss
  "Destruktion — positive return" + micro-caption "tradition tilted −4°".
- Reading: threshold well; long-chapter breather spacing throughout; F =
  three sediment fleck bands at the Kant/Descartes/Aristotle discussion
  regions (explicit positions), thinning between (dug-through passages).

### 7. p1c7 — Part 1, order §7 — The Phenomenological Method of the Investigation (4819w)
- Rationale: PRESERVED — phenomenon (what shows itself, phos-light) + logos
  (letting be seen) = "To the things themselves!"; appearing vs semblance;
  covering-up (concealment, submersion, dissimulation); being as
  transcendens. Cohort noon, longest chapter.
- Palette role: WIDEST shaft in cohort 1 (binding): 14% — method lets light
  in. Trunk-lines densest here (most to part); shaft core brightest
  `--bt-shaft` in the cohort.
- Motif + SVG + placement: KEEP `iw-clearing` (dense ring of trunk-lines
  parted at center by the shaft falling on a single point — the thing
  itself), re-inked bark trunks + shaft beam + shaft point. S = full
  clearing scene at opener scale (widest S in cohort); R carries gloss +
  micro-caption only. Noon concept survives as SHAFT WIDTH, not hue.
- Opener: ledger; G top-crop "7"; T flush-left + kicker; R gloss
  "τὰ φαινόμενα — to the things themselves!" + micro-caption "the point
  where light lands". DROP CAP REMOVED → threshold well + widest shaft.
- Reading: threshold well; F = veil-parting fleck rhythm at the A/B/C
  sub-section regions (phenomenon/logos/concept): dense → parted → dense →
  parted, explicit positions; generous breathers (longest chapter).

### 8. p1c8 — Part 1, order §8 — The Outline of the Treatise (490w)
- Rationale: PRESERVED — two parts × three divisions; Dasein as entry, time
  as horizon; preparatory analytic previewed. A map, not an argument;
  shortest chapter; arrival + departure at once.
- Palette role: quietest shaft in the latter Introduction (13% — a deliberate
  step back from the §7 noon: the map is drawn by lamplight, not daylight).
- Motif + SVG + placement: KEEP `iw-map` (two-column tablet I/II, three ticks
  each; dotted path enters at Dasein, exits at Zeit), re-inked bark/lichen
  with the dotted path in shaft color. Sits in R as rail emblem (~130px —
  largest rail emblem: the map deserves legibility); S shaft narrows to a
  measuring-beam framing the title's right edge.
- Opener: ledger; G top-crop "8"; T flush-left + kicker; R gloss "two parts,
  three divisions" + micro-caption "enter at Dasein, exit at Zeit".
- Reading: threshold well (short chapter — well is compact); F = minimal:
  two fleck ticks only (the two parts), then silence.

### 9. p2c1 — Part 2, order §9 — The Theme of the Analytic of Dasein (1588w)
- Rationale: PRESERVED — essence in existence; always-mineness
  (Jemeinigkeit); authenticity/inauthenticity; existentials vs categories;
  average everydayness; Augustine's "land of trouble". The analytic's charter.
- Palette role: among-trunks register begins (LEFT-BLEED ghosts from here);
  shaft 15%, first shaft with bark trunk-silhouettes visibly ON it (walking
  among trunks starts).
- Motif + SVG + placement: KEEP `iw-mine` (ring with eccentric center point
  pulled toward viewer — mineness), re-inked bark ring + shaft center point.
  Sits in R (~110px); the eccentric point is positioned to catch the S shaft
  beam visually (rail emblem aligned under the beam's landing zone).
- Opener: ledger; G LEFT-BLEED "9" (first left-bleed: gutter now reads as
  forest edge); T flush-left + kicker; R gloss "Jemeinigkeit — always mine"
  + micro-caption "the eccentric center". DROP CAP REMOVED → threshold well.
- Reading: threshold well; F = everydayness register: even, unemphatic,
  medium-density flecks throughout (the average made visible), no clusters.

### 10. p2c2 — Part 2, order §10 — How the Analytic of Dasein is to be Distinguished from Anthropology, Psychology, and Biology (1891w)
- Rationale: PRESERVED — Descartes' undiscussed sum; animal rationale and
  imago Dei refused; Scheler/Husserl person; life accessible only
  privatively via Dasein. A boundary drawn around the analytic.
- Palette role: cool refusal register — lichen greys dominate; shaft 16%
  but HARD-EDGED (single crisp edge: the boundary), minimal glow.
- Motif + SVG + placement: KEEP `iw-boundary` (clean vertical boundary line;
  three faded glyphs far side, one solid point near side), re-inked bark
  boundary + faded lichen glyphs + solid mist point. Sits in R (~110px);
  the boundary line continues up into S as the shaft's crisp edge.
- Opener: ledger; G LEFT-BLEED "10"; T flush-left + kicker; R gloss "the
  undiscussed sum" + micro-caption "three refusals, one point".
- Reading: threshold well; F = flecks ONLY on the near side of an implied
  vertical (left 60% of measure flecked, right 40% bare — the refused
  disciplines leave no trace), explicit via background positioning.

### 11. p2c3 — Part 2, order §11 — The Existential Analytic and the Interpretation of Primitive Dasein: The Difficulties in Securing a "Natural Concept of World" (598w)
- Rationale: PRESERVED — everydayness ≠ primitiveness; primitive phenomena
  less hidden by self-interpretation; ethnology presupposes the analytic;
  "natural concept of world" unfulfilled. Shortest Division chapter.
- Palette role: faintest emblem in cohort (fragment); shaft 17%, soft-edged
  (uncluttered phenomena = uncluttered light).
- Motif + SVG + placement: KEEP `iw-sherd` (single incised sherd-arc with
  hatch on empty ground), re-inked bark on bare ground. Sits in R (~90px —
  smallest rail emblem in the cohort: modesty is the point).
- Opener: ledger; G LEFT-BLEED "11"; T flush-left + kicker; R gloss
  "ursprünglich — primordial" + micro-caption "less hidden, less adorned".
- Reading: threshold well (compact); F = near-empty field with ONE fleck
  cluster (the single uncluttered phenomenon), explicit position mid-chapter.

### 12. p2c4 — Part 2, order §12 — The Preliminary Sketch of Being-in-the-World [In-der-Welt-sein] in Terms of the Orientation toward Being-in [In-Sein] as Such (2973w)
- Rationale: PRESERVED — the hyphenated unity (three perspectives, one
  phenomenon); In-Sein vs categorical insideness (water/glass); dwelling —
  "ich bin" as "I dwell"; taking care (Besorgen). Cohort's second anchor.
- Palette role: dwelling warmth — shaft 18%, warmest shaft CORE in the
  cohort (still `--bt-shaft`, widened core, not a new hue); trunk-silhouettes
  curve around the beam without touching it (enclosure-without-containment).
- Motif + SVG + placement: KEEP `iw-dwelling` (hut outline: gable + door of
  light, held by a broken ring, never contained), re-inked bark hut + shaft
  door. S = shaft beam landing ON the hut door (the dwelling sits at the
  beam's landing zone, opener scale); R carries gloss + micro-caption only.
- Opener: ledger; G LEFT-BLEED "12"; T flush-left + kicker (long title wraps
  to 3 lines max at 40px floor); R gloss "ich bin — I dwell" +
  micro-caption "held, never contained". DROP CAP REMOVED → threshold well.
- Reading: threshold well + extra bottom breather (anchor chapter); F =
  care-rhythm flecks: small regular ticks like dwelling tasks (explicit even
  spacing in the Besorgen passage region, calmer elsewhere).

### 13. p2c5 — Part 2, order §13 — The Exemplification of Being-in in a Founded Mode: Knowing the World (1343w)
- Rationale: PRESERVED — subject/object "relation" refused; knowing as
  deficiency of concern; no exit from an inner sphere, no return with booty
  to the cabinet; Dasein always already outside. A refusal chapter.
- Palette role: privation register — dimmest shaft core since p1c1 (19% wide
  but washed: deficiency of concern = deficiency of light); dashed bark
  line-work (the refused).
- Motif + SVG + placement: KEEP `iw-outside` (cabinet in dashed refused
  lines, empty; solid arrow already outside, no return path), re-inked
  dashed bark + solid lichen arrow with shaft tip. Sits in R (~110px); S
  shaft passes OVER the rail emblem's arrow-tip (the beam is already outside
  too — it does not enter the cabinet).
- Opener: ledger; G LEFT-BLEED "13"; T flush-left + kicker; R gloss "always
  already outside" + micro-caption "no return path".
- Reading: threshold well; F = outward-drifting flecks: density shifts toward
  the right margin down the chapter (explicit positional gradient — the
  outside-lean), never clustered.

### 14. p2c6 — Part 2, order §14 — The Idea of the Worldliness of the World [Weltlichkeit der Welt] in General (1498w)
- Rationale: PRESERVED — four senses of "world" disentangled; nature as
  de-worlding limit case; worldliness as existential; surrounding world
  (Umwelt) as the path forward. The cohort's open ending — the ring.
- Palette role: ring-completing light — shaft 20% (cohort-max width, binding
  ramp endpoint), full core; the "around" (Um-) rendered as the shaft's
  widest landing pool at the opener's base (still ABOVE the first paragraph).
- Motif + SVG + placement: KEEP `iw-ring` (near-complete ring with gap at
  walking direction; four ticks for the four senses), re-inked bark ring +
  lichen ticks, gap facing the S shaft (the beam enters through the gap).
  Sits in R (~120px), gap oriented up-right toward the beam.
- Opener: ledger; G LEFT-BLEED "14"; T flush-left + kicker; R gloss
  "Weltlichkeit — the around" + micro-caption "four ticks, one gap".
- Reading: threshold well; F = four fleck arcs at the four-senses discussion
  region (explicit positions), then an open un-flecked run to the chapter end
  (the path forward into the next cohort).

## (c) Cohort tables

### Gap ramp (authored values, NOT a formula)

| ID | § | gapWidth |
|----|---|----------|
| p1c1 | 1 | 4% |
| p1c2 | 2 | 5.5% |
| p1c3 | 3 | 7% |
| p1c4 | 4 | 8.5% |
| p1c5 | 5 | 10% |
| p1c6 | 6 | 12% |
| p1c7 | 7 | 14% (WIDEST in cohort 1 — binding) |
| p1c8 | 8 | 13% (deliberate step back: the map by lamplight) |
| p2c1 | 9 | 15% |
| p2c2 | 10 | 16% |
| p2c3 | 11 | 17% |
| p2c4 | 12 | 18% |
| p2c5 | 13 | 19% (wide but washed: privation register) |
| p2c6 | 14 | 20% (ramp endpoint — binding) |

### Ghost placement (explicit per-ID rules)

| ID | Ghost content | Placement | Size/ink |
|----|---------------|-----------|----------|
| p1c1–p1c8 | "1"…"8" | TOP-CROP (`#chapter-meta::before`, cropped by viewport top) | Fraunces 300, 18–24vw, mist 7–10% |
| p2c1–p2c6 | "9"…"14" | LEFT-BLEED (`#chapter-meta::before`, cropped by viewport left) | Fraunces 300, 18–24vw, mist 7–10% |

Engineer: one explicit `#chapter-meta::before { content: "NN" }` rule per ID
(14 rules), each scoped under its `body[data-chapter="<id>"]`.

### Shaft angle/width

| ID | Angle | Width (gap) | Variant note |
|----|-------|-------------|--------------|
| p1c1–p2c6 (all 14) | 34° steep (binding, no exceptions) | per gap ramp above | p1c1 slit-hairline; p1c2 gap-aligned loop rhyme; p1c3 cracked edge; p1c4 double edge; p1c5 horizon-lying; p1c6 strata-piercing + −4° trunk; p1c7 widest/core-brightest; p1c8 measuring-beam; p2c1 first trunks-on-beam; p2c2 hard single edge; p2c3 soft edge; p2c4 hut-landing, widest core; p2c5 washed/dimmed; p2c6 widest landing pool |

## (d) Engineer-ready file plan (3 owned files)

1. `books/being-and-time/art/intro-world.svg` — 14 `<symbol>`s, kept Phase 1
   concepts re-inked to bt tokens (strokes currentColor/CSS vars only):
   `iw-forgotten` (rail emblem p1c1), `iw-loop` (rail p1c2), `iw-foundation`
   (rail p1c3, plumb continues into shaft), `iw-root` (rail p1c4),
   `iw-horizon` (FULL shaft-region scene p1c5), `iw-strata` (shaft-region
   strata + `iw-lean` −4° trunk p1c6 — one extra trunk symbol), `iw-clearing`
   (full shaft-region scene, widest, p1c7), `iw-map` (large rail emblem p1c8),
   `iw-mine` (rail p1c9-equivalent p2c1), `iw-boundary` (rail p2c2),
   `iw-sherd` (small rail p2c3), `iw-dwelling` (shaft landing-zone scene p2c4),
   `iw-outside` (rail p2c5), `iw-ring` (rail p2c6, gap up-right). Shaft beams
   per §4.2 (skewed polygon + gated feTurbulence grain; grain off under
   prefers-reduced-motion / narrow; all animation off under reduced-motion).
2. `books/being-and-time/design/intro-world.json` — manifest keyed by REAL
   chapter ID; each entry: part + sequential order + full title (remap-safe
   annotations per contract §4), content rationale (from §(b) above), art
   params (`src: "art/intro-world.svg"` + explicit `symbol: "iw-*"` per
   contract v1.1 A.2 — NEVER the `#frag` form; class treatment
   banner|plate|motif, motif id `iw-*`, caption/micro-caption), palette role
   (bt tokens), motif + ledger placement + scale, opener composition (ledger
   slots G/T/R/S), reading treatment (threshold + fleck-field spec, allowed
   hooks only). SUPERVISOR merges into `design/chapters.json`; reader.js
   fetches `src` once (cached per file), clones the named symbol into
   `#chapter-art`, and mirrors motif id to `body[data-art]`. Missing symbol
   id → slot stays hidden + console warning, never an error state.
3. `books/being-and-time/design/intro-world.css` — ONLY
   `body[data-book="being-and-time"][data-chapter="<own-id>"]`-scoped rules
   (+ `body[data-part-id]` cohort-grouped shared rules where useful): 14
   ghost-numeral `#chapter-meta::before` rules; ledger grid (22/52/26
   ≥1100px, rail-strip <1100px, single-column <640px); `#chapter-art`
   treatment classes (banner/plate/motif) + shaft-region layers; threshold
   `p:first-of-type` wells; per-chapter `#chapter-text` fleck backgrounds +
   breather spacing (explicit, no modulo); kicker line style; reduced-motion
   + narrow-width gates. Unlayered (beats shared `@layer shared`); never
   mints `reader-*` classes. NEVER touches theme.css, index.html, shared/**,
   prose, or other cohorts' files.

Prototype order (engineer): p1c1 (slit + Sophist rail — also the Phase B
prototype opener), p1c7 (widest shaft), p2c4 (dwelling landing) — view at
1440×1000 / 820×1180 / 390×844 before expanding to all 14.

## Phase 2 evidence

- Observed: ART-DIRECTION.md read in full (binding §§1–8);
  READER-CONTRACT.md v1.0 STABLE read in full + lead addendum folded in
  (hooks §(a), art params + file plan §(d)); v1.1 addendum (explicit
  `symbol` key, A.2) applied to file plan — manifests use
  `{src, symbol}`, never `#frag`. Phase 1 baseline screenshots stand
  (cover/p1c7/p2c4 at 1440×1000).
- Computed: gap ramp + ghost + shaft tables authored explicitly (no formulas).
- Sampled: Phase 1 full-prose readings reused (lead-accepted); no re-read needed.
- Not run: conformed prototype render (engineer phase — slots arrive with
  ReaderLead landing; no ReaderLead contact made); designer wrote ONLY
  this draft file.

---

# Benchmark response (USER-FEEDBACK.md — homepage is the creative bar)

The conformed map above already meets the benchmark's demand through this
book's OWN identity (slit-to-clearing arc, trunk/shaft/fleck grammar, bt
tokens, Fraunces/Source Serif voices — nothing copied from any homepage
look). One surface the map left implicit: **chapter endings**. Specified
here as authored fleck-field cadences (same allowed hooks as §(b) reading
treatments: per-chapter `#chapter-text` background + breather spacing;
shaft never re-enters below the opener; NO glyph finials per firewall).

| ID | Ending cadence (close of chapter) |
|----|-----------------------------------|
| p1c1 | Flecks thin to zero over the final third ("the question falls silent — formulation still owed"); extra breather before `#chapter-nav`. |
| p1c2 | Final fleck cluster forms an OPEN arc (loop left unclosed — transparency, not conclusion); normal nav spacing. |
| p1c3 | Last band lands as a single foundation course (the grounding the sciences lack); firm close, standard breather. |
| p1c4 | Root-hair flecks converge toward one point (the analytic as root system found); brief pause, then nav. |
| p1c5 | Hatch gradient resolves to bare ground (distance reached — horizon exposed); longest end-breather in the Introduction. |
| p1c6 | Sediment bands settle flat and level (excavation backfilled — positive return complete); calm close. |
| p1c7 | Veil rhythm resolves OPEN (last region parted, light lands — method established); the only Introduction ending with light still on the ground. |
| p1c8 | Two fleck ticks, then full silence (the map folded); shortest close — arrival + departure. |
| p2c1 | Even flecks simply STOP mid-measure (everydayness has no finale — it continues); no emphasis. |
| p2c2 | Near-side flecks end at the implied boundary (the refused side stays bare to the last line); clean edge close. |
| p2c3 | The single cluster stands alone with empty ground after it (fragment, not summary); modest close. |
| p2c4 | Care-ticks slow (spacing widens over the final paragraphs — dwelling settles); warm unhurried close. |
| p2c5 | Outward drift carries flecks fully to the right margin and off (thought exits; nothing returns); asymmetric close. |
| p2c6 | Open un-flecked run to the end (binding open ending — the path forward into equipment-space); NO closing weight whatsoever. The cohort exhales. |

TOC/settings/nav/progress/cover remain supervisor/shared scope (ART-DIRECTION
§4.6 + READER-CONTRACT); this cohort's ambition lives in the opener ledger,
threshold wells, fleck fields, and these ending cadences. Quiet body text
stays calm throughout — the benchmark's "beauty everywhere" is carried by
composition and marginal detail, never by decorating the prose.
