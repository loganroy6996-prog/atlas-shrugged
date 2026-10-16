# historicity-finale cohort design — DESIGN.md (Phase 2 record)

- Book: Being and Time (Martin Heidegger) — cohort `historicity-finale`, 12 chapters.
- Chapters: p3c28–p3c39 (§§72–83), part-3, Division Two ("Dasein and Temporality").
- Status: Phase 2 conformant to `books/being-and-time/design/ART-DIRECTION.md`
  (binding, incl. §9 reader-contract conformance + §10 v1.1/conformance
  ArtDirector verdict, conditions B1–B8) and `.omp/design/READER-CONTRACT.md`
  v1.1 STABLE. No Phase 1 draft existed for this cohort; this file is the
  original design record.
- Skills read via injected content (no fallback): `skill://frontend-design`,
  `skill://frontend-workflow`, `skill://reference-study`.
- Ownership: designer record only. Owns ONLY `design/historicity-finale.json`
  + this file. Engineer owns `art/historicity-finale.svg` +
  `design/historicity-finale.css` implementation. Supervisor merges the JSON
  into `design/chapters.json` and wires fonts/rails/TOC. No prose, shared/**,
  theme.css, or index.html edits were made or specified.
- All 12 chapters read from `books/being-and-time/data/chapters/<id>.json`;
  IDs/titles/counts verified against `books/being-and-time/data/toc.json`
  (AUTHORITY): p3c28 §72 2330w/20p · p3c29 §73 1777w/17p · p3c30 §74 1966w/15p ·
  p3c31 §75 1913w/12p · p3c32 §76 2088w/18p · p3c33 §77 2478w/22p · p3c34 §78
  895w/4p · p3c35 §79 2287w/16p · p3c36 §80 3802w/29p · p3c37 §81 3078w/16p ·
  p3c38 §82 2539w/13p · p3c39 §83 11324w/378p.
- Prototype: slot-plate grammar prototyped in-session (`/tmp/hf-proto.html`,
  four plates: hf-72/hf-74/hf-80/hf-83) and VIEWED in headless Chromium —
  strata/horizon/glow composition validated before authoring the manifest.
  p3c39 is a Phase B prototype chapter: the finale entry is specified to
  exemplary depth (§7).

## 1. Cohort argument (what the 12 chapters do — grounded in read prose)

- p3c28 §72: Death was only one "end" of Dasein; birth is the other, and the
  birth–death "connection" is ontologically obscure. The seemingly "more
  simple" life-connection of successive experiences is the vulgar now-series
  in disguise. The chapter re-opens the wholeness question under temporality.
- p3c29 §73: The vulgar concept of history anatomized — what is past, "already
  belongs to history", derivation [Herkunft] from the past, "epoch making",
  the "productive nexus" moving through past/present/future with no priority
  for the past. Ambiguity of Geschichte/geschichtlich/Historie.
- p3c30 §74: THE PEAK. Fate [Schicksal] (anticipatory handing-down),
  destiny [Geschick] (occurrence-with of a people), repetition [Wiederholung]
  (fetching heritage, "choose its hero", kampfende Nachfolge), the Moment
  (Augenblick, "be in the Moment for its time"), authentic historicity rooted
  in the future. Closes by naming authentic historicity and its enigma.
- p3c31 §75: World history — Dasein understands itself via what it takes care
  of; the ring "presented" and "worn" whose movement is not change of
  location; dispersion pulled together [Zusammenholen]; closes "caught up
  unexpectedly in shadows" — the bridge to historiography.
- p3c32 §76: Historiography derived from historicity — science constituted by
  thematization; the "silent power of the possible"; historiographical truth
  grounded in the authentic disclosedness of historical existence.
- p3c33 §77: The archive chapter — Dilthey's three investigation areas;
  Yorck's letters quoted at length (comparison vs type, Ranke the "great
  ocularist", "cabinet of antiquities", "all written history that is alive...
  is critique", "I am history as well as nature", "if you are quiet, you will
  perceive"); the generic difference of ontic vs historical; closes serving
  "the spirit of Count Yorck... in the service of Dilthey's work".
- p3c34 §78: The 4-paragraph hinge of Division Two — reckoning with time must
  be clarified; the vulgar concept comes from leveling down primordial time;
  the coming program named (subjective/objective vacillation, Hegel).
- p3c35 §79: Datability [Datierbarkeit] — every now a "now that...", every
  then a "then, when..."; public time made in being-with ("several people can
  say now together").
- p3c36 §80: The clock chapter — astronomical/calendrical reckoning,
  within-timeness defined, the natural clock, measuring the shadow, the public
  sundial ("When the shadow is so many footsteps long").
- p3c37 §81: The vulgar genesis — Aristotle's "time as what is counted",
  the succession of sheer nows, flight from death as the ground of leveling;
  the Moment can never be derived from the now.
- p3c38 §82: Against Hegel — spirit "falls into time" refused; punctuality,
  negation of negation; "Hegel is wholly moving in the direction of the vulgar
  understanding"; verdict: "Spirit does not fall into time".
- p3c39 §83: FINALE. Genuine closing p0–p3 (temporality reclaimed as ground;
  reification as standing danger; the conflict "not yet even kindled";
  disclosive understanding grounded in ecstatic temporality) + served
  lexicon/back-matter p4+ (styled as served, NEVER edited).

## 2. References studied (with citations)

1. Sidney Hall / William Smith strata plates — Wellcome Collection, "Geology:
   comparative heights of mountains, with a pyramid for scale. Coloured
   engraving by S. Hall, 1817" (https://wellcomecollection.org/works/xhfjjhgm,
   read in full); Sidney Hall (https://en.wikipedia.org/wiki/Sidney_Hall);
   William Smith's "Strata Identified by Organized Fossils"
   (https://ceps.unh.edu/earth-sciences/william-smiths-strata-identified-organized-fossils).
   Takeaway: hand-ruled stratigraphic bands with uneven settled edges →
   hf-72/hf-73 strata line-work and their deliberate uneven-vs-ruled contrast;
   comparative-plate discipline (one plate, one argument) → one symbol per
   chapter, no shared generic background.
2. Diderot's Encyclopédie horology plates — ARTFL plate search, HORLOGERIE
   PREMIERE SECTION, 51 plates (https://artfl-iiif.uchicago.edu/cgi-bin/encyc_plate_search/planches_db_query.py?group=HORLOGERIE.+%7C+PREMIERE+SECTION.&keyword=&sort_by=&start_hit=1,
   read in full: plate index A–AA verified); Diderot CTP "Horloge"
   (https://www.encyclopediaofdiderot.org/s/diderot/item/189197 — connection
   reset at read time, catalog entry verified via search).
   Takeaway: fine instrument engraving (double-ruled circles, graduated ticks,
   fixed pointers, parts laid flat for inspection) → hf-80 horology ring
   (double circle + twelve ticks + fixed pointer, no kitsch hands);
   instrument-not-picture discipline → hf-79 date-ticks and hf-81/82 now-dots
   as abstracted reckoning marks.
3. Archival finding-aids — Library of Congress, EAD Application Guidelines
   Ch.5 "Publishing EAD Documents" (https://www.loc.gov/ead/ag/agpub.html,
   read in full); AAA processing guidelines ch.4 (HTTP 403 at read time, LoC
   text read as substitute).
   Takeaway: finding-aid STRUCTURE over paper texture — enumerated joints,
   section turns, threshold markers pacing long reference text → §83 breather
   plan at content joints + archive-threshold rule; correspondence-as-structure
   → hf-77 binding-bands + letter-ticks.
4. Clearing/canopy light — Caspar David Friedrich "Forest Interior by
   Moonlight" chronicle (https://cdfriedrich.de/en/chronicle/waldinneres-bei-mondschein/
   — timed out at read time; search-verified via smb.museum /
   artsandculture.google.com); EPOD "Sunlight Through Foggy Canopy"
   (connection reset at read time).
   Takeaway: ATTEMPTED BUT UNREAD — both fetches failed, recorded honestly per
   evidence discipline. Clearing-light composition is therefore grounded in
   the prose-internal Lichtung imagery (§§28/40/69, per directions.md) and the
   validated in-session prototype render, not in claimed reference study. No
   pixels borrowed, no study claimed.

## 3. Three directions considered (comparison, within the binding grammar)

Book identity is binding (ART-DIRECTION.md); per the cohort-designer role the
three directions explore WITHIN the Clearing grammar.

### D1. "Sediment and Signal" — CHOSEN
Strata register (§§72–78: sediment lines evolving per chapter) + instrument
register (§§79–82: date-ticks, horology ring, now-dots) unified by the
horizontal-line grammar that peaks at §74 (Moment), hollows at §81 (leveled
nows), resolves at §83 (ecstasis horizons). Gap ramp 75→100% explicit per
chapter. Verticals fall 2/2/1/1/1/2-bands/1/1/1/0/0/0.

### D2. "Clockwork Forest" — REJECTED
Gears/pendulums/escapements across all 12. Rejected: over-claims the clock
motif (§80 alone earns an instrument) and collides with the temporality
cohort's tick register. Frontend-design self-critique: horology-everywhere is
the generic "time chapter = clock picture" default — REVISED to one instrument
chapter (hf-80) plus abstracted reckoning marks (§§79/81/82). Salvage: the
single horology ring at p3c36; tick discipline informs hf-77/hf-79.

### D3. "Archive Wall" — REJECTED
Openers as document facsimiles (ruled boxes, stamps, ledger lines). Rejected:
fits §77 and the §83 tail but fights §§72–76 (existential argument, not
documents) and §§79–82 (time, not paper). Self-critique: ruled-box openers
are the generic "history chapter = old paper" default — REVISED to finding-aid
STRUCTURE (enumerated joints, section turns) rather than paper texture.
Salvage: §83 breather plan at content joints; §77 binding-band plate.

Why D1: the cohort's own two movements (history sedimenting, time reckoned)
become two legible art registers; every plate argues its chapter; title-swap
test — Moment-lines bending strata, Dilthey–Yorck letter-ticks, a horology
ring mean nothing on any other book. Frontend-design self-critique recorded:
no single-accent-word headlines (no display copy added at all — prose is never
edited); no ALL-CAPS eyebrows (one kicker line per opener, 0.22em lichen);
no numbered sequence markers (chapters are an arc, not steps — the §83
mini-map is a you-are-here, not a step list); motion: none authored (static
art; reduced-motion gates on grain only).

## 4. Chosen grammar: "Sediment and Signal" (conformant spec)

- Palette (dark-first, --bt-* tokens ONLY): humus #0C0F0A ground; canopy
  #141B12 elevated; under #1D2619 threshold wells; ink #060805 slot grounds;
  mist #C9D4C3 body (validator computes ≥7:1); lichen #9DB89A secondary
  line-work/meta/rail; shaft #E9D488 THE accent (lines, rings, dots, horizons,
  glow, §83 title+ghost, focus, progress — NEVER paragraph text); bark
  #3E4A34 hairlines/strata/trunks/bands. NO ember anywhere (B5). Light/sepia
  per ART-DIRECTION §2; all SVG strokes currentColor/CSS vars → auto re-ink.
- Type: Fraunces display (titles 40–64px clamp, opsz 100, wght 400, 1.05,
  −0.01em, flush-left; threshold 21px/1.6; ghosts 300) + Source Serif 4 body
  (19px/1.75, left ragged, 34rem; 38rem p3c39 p0–p3). Scale
  12/15/19/24/32/48/72/112. ONE kicker line per opener. German landmark term
  per chapter (Fraunces italic 1.02em) in the rail gloss + one attested rail
  inscription (para-cited, max 3 lines, ≥1100px only).
- Layout (opener ledger, all 12): ghost gutter 22% + title 52% + margin rail
  26% (≥1100px); rail folds under title <1100px; single column + cropped ghost
  <640px. Slot plate (#chapter-art, treatment `plate`) ABOVE #chapter-meta,
  terminates above first paragraph, never behind body text. Ghost numerals:
  Fraunces 300, 18–24vw, mist 7–10%, TOP-CROP, explicit per-ID content rules
  (§74 + §83 largest 24vw; §78 smallest 18vw; §83 shaft at 10%, off-center
  left 38% — badge-centering avoided).
- Shaft/vertical grammar: horizontals throughout (bands → Moment-line →
  now/held lines → ecstasis chord); verticals 2/2/1/1/1/2-bands/1/1/1/0/0/0
  (true trunks §§72–76/78–80; §77 bands; §81 trunkless by content; §83 none).
- Signature idea: **the past settles, the line holds, the clearing floods** —
  strata bend to the Moment (§74), instruments reckon the gap (§§79–80), the
  forest is leveled into nows (§81) and refuted (§82), and the light the whole
  book walked toward arrives with the horizons returning as its chord (§83).
- Medium: authored inline SVG — one `<symbol>` per chapter (hf-72..hf-83) +
  shared defs in `art/historicity-finale.svg`; reader.js inlines via v1.1
  {src, symbol}; no book JS. Grain (feTurbulence ≤0.06) gated off <640px +
  reduced-motion; all art static otherwise.
- Reading: threshold wells; calm mist-on-humus body; explicit per-ID fleck
  dividers (p3c34 + §83-archive: NONE, content-driven); explicit breathers at
  enumerated content joints only (§6 table); §83 finale relief (§7).
- Benchmark response (.omp/design/USER-FEEDBACK.md): rail inscriptions (12
  attested quotes), nav codas (11 authored endings, p3c39 deliberately
  uncapped), enriched slot scenes (threads/shards/ticks/rings/dots/memory),
  TOC ticks = gap ramp. Deliberately quiet: p3c34 hinge, §83 archive region,
  and the reading body — ambition in openers/margins/endings, never text
  effects.

## 5. Per-chapter map (all 12; full entries in the JSON manifest)

| § | ID | Gap | Ghost (top-crop) | Plate (symbol) | Rail gloss + inscription (para) | Reading |
|---|---|-----|------------------|----------------|---------------------------------|---------|
| 72 | p3c28 | 75% | 22vw 8% L6% | hf-72 first strata, 2 trunks | Geburt und Tod · "connection of life" (p5) | threshold + strata divider |
| 73 | p3c29 | 77% | 20vw 7% L12% | hf-73 ruled strata, 2 trunks | Herkunft · "already belongs to history" (p3) | threshold + ruled divider |
| 74 | p3c30 | 79% | 24vw 9% R8% | hf-74 Moment-line + threads, 1 trunk | Schicksal·Geschick·Wiederholung · "be in the Moment" (p9) | threshold + breathers p7/p11 |
| 75 | p3c31 | 81% | 19vw 7% L18% | hf-75 shards ride, 1 trunk | Zusammenholen · "ring presented and worn" (p3) | threshold + breather p11 |
| 76 | p3c32 | 83% | 21vw 8% L4% | hf-76 lens-ring, 1 trunk | Thematisierung · "silent power of the possible" (p9) | threshold + breather p9 |
| 77 | p3c33 | 85% | 20vw 7% R14% | hf-77 binding-bands + ticks | das Ontische und das Historische · "I am history as well as nature" (p12) | threshold + breathers p6/p8/p10/p12/p18 |
| 78 | p3c34 | 87% | 18vw 7% L30% | hf-78 hinge rule, hairline trunk | Rechnen mit der Zeit · "leveling down of primordial time" (p2) | threshold only; NO dividers/breathers |
| 79 | p3c35 | 90% | 21vw 8% L9% | hf-79 now-line + 3 ticks, 1 trunk | Datierbarkeit · "say now together" (p15) | threshold + breather p3 |
| 80 | p3c36 | 92% | 22vw 8% R6% | hf-80 horology ring, 1 trunk | die naturliche Uhr · "shadow so many footsteps" (p17) | threshold + breathers p3/p14/p18 |
| 81 | p3c37 | 94% | 20vw 7% L15% | hf-81 now-dots, TRUNKLESS | das Gezahlte · "that which is counted" (p1) | threshold + breathers p1/p15 |
| 82 | p3c38 | 97% | 19vw 7% R18% | hf-82 scatter + held line | der Geist fallt nicht in die Zeit · "Spirit does not fall into time" (p12) | threshold + breather p12 |
| 83 | p3c39 | 100% | 24vw 10% shaft L38% | hf-83 full clearing + horizons | mini-map rail · "not yet even kindled" (p2) | FINALE RELIEF (§7); NO end seal |

Neighbor check: 72/73 settle-vs-ruled (inverted rhyme) · 73/74 leveling-vs-
repetition · 74/75 fetching-vs-encountering · 75/76 thing-vs-science · 76/77
instrument-vs-archive · 77/78 busiest-to-quietest · 78/79 hinge-vs-datability
· 79/80 line-vs-circle · 80/81 reckoning-vs-leveling (trunks fall) · 81/82
leveling-vs-refutation · 82/83 anticipation-vs-arrival.

## 6. Breather index table (0-based para; engineer: nth-of-type = index + 1)

All explicit per-ID rules; no modulo, no formula. Anchor texts verified in
served JSON (see prose-grounding notes in-session).

- p3c30: p7 "If Dasein, anticipating, lets death become powerful" (fate→
  destiny) · p11 "We characterize repetition as the mode of resolution"
  (repetition hinge). 1.8em margin-top each.
- p3c31: p11 "constantly gets caught up unexpectedly in shadows" (dark close).
- p3c32: p9 "the silent power of the possible" (mid hinge).
- p3c33: p6 "In particular, the procedure of comparison" · p8 "Ranke is a
  great ocularist" · p10 "cabinet of antiquities" · p12 '"virtuality" /
  "I am history as well as nature"' · p18 "generic difference between the
  ontic and the historical". Five enumerated letter-joint breathers.
- p3c35: p3 "We shall call this... datability" (coined term).
- p3c36: p3 "astronomical and calendrical" · p14 "The disclosedness of the
  natural clock" · p18 "The public sundial".
- p3c37: p1 "Aristotle gave of time" · p15 "no prospect of explaining"
  (Moment-vs-now verdict).
- p3c38: p12 "Spirit does not fall into time" (verdict).
- p3c39: archive-threshold on nth-of-type(5) = 0-based p4 ("On the
  Composition of the Lexicon"), 2.2em; archive-region voice from
  nth-of-type(n+5); breathers at 0-based p18 ("Latin Expressions" — glossary
  begins), p46 ("must above all thank E. Husserl" — front-matter ends), p127
  ("Cf. Aristotle, Rhetoric" — citation turn), p164 (Hartmann long note),
  p244 ("Namely, in view of its origin in being-a-self" — gloss beat),
  1.6em each. Even spacing is content coincidence, not a formula.

## 7. §83 FINALE specification (Phase B prototype — exemplary depth)

- Opener: gap 100%; ghost "83" top-crop 24vw SHAFT 10% at left 38%
  (off-center per badge rule); title in shaft color; kicker unchanged
  (Part 3 · § 83 · 11324 words · ≈57 min); plate hf-83 (radial clearing-glow
  50% core + three horizons future/middle/present 55/45/35% + two
  sediment-memory hairlines 12%); NO trunks; NO closing ornament anywhere.
- Rail: inscription p2 ("the conflict... has not yet even been kindled",
  shaft-lichen italic) ABOVE the mini-map: twelve cohort § numerals 72–83 as
  a vertical tick column with a static 6px shaft dot at §83 (the reader IS at
  the finale — no scroll animation). ≥1100px rail; horizontal strip <1100px;
  hidden <640px. Pure CSS, no JS.
- Reading: p0 threshold well (glow-tinted); p0–p3 at 38rem; archive-threshold
  2.2em on nth-of-type(5); archive region (n+5) at 0.94em mist-lichen tint
  34rem (validator: ≥7:1 or ship full mist); five breathers (§6); one
  sediment-memory divider after p3; breathers only inside the archive.
- Endings: NO nav coda, NO end seal (A.0 considered and DECLINED — B6
  "silence is the ending"). The chapter ends in quiet text links.
- Prototype views: 1440×1000 / 820×1180 / 390×844; ArtDirector side-by-side
  vs homepage benchmark before expansion.

## 8. ENGINEER handoff (exact symbols / files / selectors — no guessing)

1. Author `art/historicity-finale.svg`: 12 `<symbol id="hf-72"..hf-83">`
   (viewBox `0 0 1600 520` each) per JSON svgPlan.regions + shared defs
   (hf-glowGrad radial; hf-shaftGrad linear; hf-grain feTurbulence ≤0.06 with
   class `hf-grain`; hf-trunk-l/r; hf-stratum template — chapters place
   transformed instances with AUTHORED d-variants, never identical copies).
   Strokes currentColor/CSS vars only.
2. Author `design/historicity-finale.css`: ONLY
   `body[data-book="being-and-time"][data-chapter="<own-id>"]`-scoped rules
   (+ `body[data-part-id="part-3"]` cohort-shared selectors listing own IDs).
   Slot art arrives via reader.js inlining manifest {src, symbol} — no
   fragment URLs, no book JS. Ghost numerals: 12 explicit
   `#chapter-meta::before { content: "NN" }` top-crop rules per ghost specs
   (§83: shaft color, left 38%). Threshold wells per readingGrammar.
   Breathers: explicit `p:nth-of-type(N)` rules per §6 (N = index + 1). §83
   relief per §7 + JSON giantsRelief. Nav codas p3c28–p3c38: scoped
   `#chapter-nav::before` data-URI SVG micro-scenes per JSON entries.*.ending
   (static, print-hidden); NO nav rule for p3c39. Grain gate: hide .hf-grain
   <640px + under prefers-reduced-motion; print hides slot art.
3. Supervisor merges entries.*.manifest {src, symbol, class, motif} into
   `design/chapters.json` (motif sets body[data-art]); wires rail glosses +
   railInscription texts + mini-map rail element + TOC ticks (gapRamp) +
   fonts (Fraunces + Source Serif 4). All content specified in the JSON.
4. Prototype FIRST: p3c30 (peak), p3c34 (hinge), p3c39 (finale exemplar) at
   3 viewports; ArtDirector review before expanding to all 12.

## 9. Conformance checklist (ART-DIRECTION §4.7 + firewall + B1–B8 + v1.1)

- §4.7: paragraphs-only (no blockquote/hr/figure hooks) ✓ · hooks
  data-book/data-part-id/data-chapter/data-view/data-art + slots ✓ ·
  cohort CSS scoping ✓ · manifest keyed by real ID + part/order/title ✓ ·
  authored paths, gated grain ✓ · reduced-motion static ✓.
- Firewall: no vertical rail backgrounds · no cartouche badge · no
  ❧/◇/◆/✦/§ ornaments · no modulo/hash rhythms (all ramps/indices explicit)
  · no centered title block (flush-left; §83 ghost off-center) · no drop
  caps · no justified text ✓.
- B1 SVG shafts (inlined symbols, no CSS gradient bars) ✓ · B2 authored
  ghosts 18–24vw 7–10% top-crop ✓ · B3 light never behind body; ≥7:1
  validator-computed ✓ · B4 confident threshold wells (fallback specified)
  ✓ · B5 NO ember ✓ · B6 finale silence (no ornament/seal/coda; prose as
  served) ✓ · B7 §83 relief (38rem + threshold + region + breathers +
  mini-map) ✓ · B8 Fraunces registry held; Fraunces + Source Serif 4 only ✓.
- v1.1: explicit `symbol` key per entry, no fragment URLs ✓ · A.0 end seals
  considered and declined cohort-wide (B6 + quiet endings) ✓ · build ships
  art/** + design/** (no build change) ✓.

## 10. Evidence

- Observed: grammar prototype `/tmp/hf-proto.html` (4 plates) rendered and
  VIEWED in headless Chromium (screenshot in-session); baseline evidence in
  `design/evidence/` (sibling cohort).
- Computed: TOC/chapter inventory from toc.json (12/12 IDs verified);
  manifest validated (12 entries × 20 keys, v1.1 symbol form, no fragments).
- Sampled: full prose of all 12 chapters read (openings + cores + anchors);
  references 1–3 read in full, reference 4 attempted/failed (honestly
  recorded, no claim made).
- Not run: final render (engineer phase); no implementation files written by
  designer. No commit/push/deploy.
