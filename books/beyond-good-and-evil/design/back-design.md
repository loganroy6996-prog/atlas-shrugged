# BACK cohort — Phase 1 research + conformance package (Beyond Good and Evil, p1c6–p1c11)

Owner: `SupBGE-2.BgeLeadBack.BgeBackDesigner-10`. File owned: this file only.
Status: Phase 1 RESEARCH (no production CSS/SVG — engineer spawn follows).
Identity: **The Numbered Ledger (Direction A) — APPROVED, conformed.**
Locks: `design/ART-DIRECTION.md`, `design/directions.md` §5, `.omp/design/critiques/beyond-good-and-evil.md` (E1–E7),
READER-CONTRACT v1.1 (§2 hooks, §3 slots, §4+`symbol` manifests, A.0 end-seals), `.omp/design/USER-FEEDBACK.md` (homepage benchmark).

Skills: `skill://frontend-design`, `skill://frontend-workflow`, `skill://reference-study` — all three loaded via
`skill://` URIs in full (no local fallback needed). `/designer` left OFF.
TOC re-read 2026-10-15 (11 chapters, ONE part). All six cohort chapter JSON files read IN FULL, every paragraph:
p1c6 (54 ¶¶, 7064 w), p1c7 (44 ¶¶, 6332 w), p1c8 (80 ¶¶, 7818 w), p1c9 (59 ¶¶, 7684 w), p1c10 (94 ¶¶, 10352 w),
p1c11 (36 ¶¶, 552 w). Quotes below carry paragraph refs (`Pn` = `paragraphs[n-1]` of that chapter's JSON).
Baseline: rejected violet STORM FRACTURE theme read in `theme.css`; live cover page fetched from
`http://127.0.0.1:8000/books/beyond-good-and-evil/` (JS-rendered shell confirmed). No prototype built in Phase 1
/research-only per assignment; no CSS/SVG finalized here.

Contract DOM this package designs against (ReaderLead implementation verified present in working tree):
`body[data-book|data-view|data-chapter|data-part|data-part-id|data-art]`, `#chapter-art` figure above
`#chapter-meta` (reader.js inlines manifest `src`+`symbol` SVG), `reader:chapter` after render, supervisor-owned
`.sec-num` DOM wrapper (E1 — `nth-of-type` numeral `content:` FORBIDDEN), unlayered book CSS wins over
`@layer shared`, never mint `reader-*` classes. End-seals via A.0
(`body[data-chapter]`-qualified `.chapter-text > p:last-child::after`, SVG `url()` ≤32px, no layout shift).

---

## §1. Pre-brief exploration: three directions, references, and how the ledger absorbed them

Before the identity brief landed, I explored three genuinely different cohort directions grounded in the
chapters' actual imagery. On landing (Numbered Ledger approved + E1–E7 binding), I evaluated each against the
locks. None survived as an alternative system — correctly, since the ledger is derived from the book's §-structure
— but each left authored detail inside the ledger grammar. This section records the study honestly: what was
considered, what was absorbed, what was redirected, and why.

### References studied (4, all read via web tools; principles, not pixels)

1. **Haeckel, Kunstformen der Natur — via Cabinet Magazine, David Brody, "Ernst Haeckel and the Microbial
   Baroque"** — https://www.cabinetmagazine.org/issues/7/brody.php (read in full). Learned: Haeckel's plates are
   "studded with elaborately symmetrical groupings, usually floating over a black void"; a plate "minimize[s]
   empty space to an almost neurotic degree, laying out finicky, jewel-box arrangements of like-to-like";
   Tomaselli on the "mirror-image arrangements" proposing "their own meta-organism." Lesson: a catalogue plate
   earns beauty from *arrangement discipline* (like-to-like ranks, black void doing the work), not ornament.
   Fed Direction 1 and, after landing, p1c6's catalogue mode + the seal-as-intaglio-plate concept.
2. **Bode, Uranographia 1801 — via Sunflower Astronomy plate notes** —
   http://www.sunflower-astronomy.com/Books/Bode_Uranographia/Bode_Uranographia.html (read). Learned: the
   largest celestial atlas ever printed — near-meter copper plates, constellation figures drawn over ruled
   coordinate grids; Plate VIII carries Hercules — the exact constellation of §243 ("our sun is moving rapidly
   towards the constellation Hercules"). Lesson: figures-on-ruled-dark-ground is the historical look of
   "addressing the sky by number," which is what BGE does to philosophy. Fed Direction 2; after landing, the
   giant Fraunces range figures + p1c8's twin-sun seal + the three solar passages' distinct treatments.
3. **Wagner, autograph programme note for the Meistersinger overture (1863) — via Sotheby's lot essay** —
   https://www.sothebys.com/en/buy/auction/2019/important-manuscripts-continental-books-and-music-2/r-wagner-autograph-programme-note-for-the-overture
   (read in full). Learned: Wagner's own programme — procession with banners and *leges tabulaturae*, the
   scurrying apprentices' tumult, Sachs placing the young poet at the head, the climactic superimposition where
   "Pedanterie und Poësie sind versöhnt." Lesson: an overture is *movements in sequence under one surge* —
   exactly §240–§256's shape (Wagner → Germans → music → Jews → English → French → Europe → Rome verse).
   Supplemented by IMSLP's Meistersinger work page (WWV 96, Vorspiel + 3 acts, 1862–68) for the overture's
   concert-piece status: https://imslp.org/wiki/Die_Meistersinger_von_N%C3%BCrnberg%2C_WWV_96_(Wagner%2C_Richard).
   Fed Direction 3; after landing, p1c9's overture mode + movement numerals + staves seal.
4. **Caspar Wolf, alpine paintings — via Kunstmuseum Basel exhibition "Caspar Wolf and the aesthetic conquest
   of nature"** — https://kunstmuseumbasel.ch/en/exhibitions/2014/caspar-wolf-and-the-aesthetic-conquest-of-nature
   (read). Learned: "massive boulders, thundering mountain torrents, and bizarre glacier formations impede the
   viewer's path. The human being, standing in awe, is reduced to a tiny figure before expansive panoramas";
   Wolf learned drama from French marine storm-painting. Lesson: altitude is rendered by *scale contrast + air*,
   not by drawing every crag — the rule for p1c10's summit figures and p1c11's verse air. (Note: direct image
   viewing was attempted and failed — no image tool in this session, remote JPGs 400/404 — so this study is
   descriptive/compositional, documented honestly; all art remains original authored SVG regardless.)

### The three pre-brief directions and their fates

| # | Direction | Core idea | Verdict on landing |
|---|---|---|---|
| 1 | **Specimen Cabinet** (Haeckel) | Each chapter a natural-history plate: p1c6 ranked specimen rows, p1c7 instruments under glass, p1c8 firmament chart; numerals as specimen tickets ("No. 186") | **Absorbed.** The plate discipline became p1c6's catalogue mode + the intaglio-seal engraving standard (concentric rules + glyph + hatch/stipple, benchmark §4). Bare-specimen-ticket numerals were **redirected**: E1 requires uniform `.sec-num` wraps, so the catalogue voice now lives in faded numeral color + opener composition, not ticket chrome. |
| 2 | **Star Atlas** (Bode) | Dark-ground celestial charts; §196 dark bodies, §215 twin suns, §243 Hercules-voyage, §285 furthest stars as four distinct chart plates | **Absorbed in miniature.** Full plates would violate E7 scope and brutalize reading (same flaw that killed book-Direction C). The atlas grammar shrank to its essence: engraved range figures on dark ground + three *distinct* solar treatments (p1c6 §196 occlusion-faded, p1c8 §215 motley dual-rule, p1c9 §243 voyage-brass — see §3). The cohort never confuses its three suns. |
| 3 | **Overture Score** (Wagner autograph) | Score-staves, movement numerals, fermata furniture across p1c9; tempo language (presto/lento from front-cohort §27) as spacing | **Absorbed as p1c9's mode.** Score-staves became the seal-8 glyph; movement numerals survived via `data-sec` selectors (§240/250/252/254 centered movement numerals — §3 p1c9). A full score-skin over the chapter was **redirected**: body stays calm Source Serif; music lives in numerals + opener movement index + dividers. |

What the ledger added that none of my directions had: the *system-off silence* for p1c11 (E4) — the single most
moving structural idea, making the Aftersong legible as song by switching the instrument off. My pre-brief p1c11
sketches all decorated the poem; the ledger correctly forbids it.

---

## §2. Chosen conformance: the back cohort inside the Numbered Ledger

### Mood arc p1c6 → p1c11

**LOWLAND → LABORATORY → FIRMAMENT → OVERTURE → SUMMIT → NOON.** The cohort climbs: the herds and obedience of
p1c6 (earth-bound, many, disciplined), up through the scholar's cold instrument-cabinet (p1c7), into the twin-sun
sky of p1c8 (the cohort's first genuinely beautiful image), through the national orchestra of p1c9 (theatrical,
loud), to the aristocratic summit of longest chapter p1c10 (height, hardness, rank made visible), resolving in
the alpine midday poem (p1c11 — light, altitude, intimacy; song, not argument). Height and light increase across
the arc; the instrument that measures them gets hotter, then falls silent.

### Numeral temperature (the cohort's one continuous thread, §5.5)

faded → cold → dual → brass → sanguine-triple → silent:

| Chapter | Numeral voice |
|---|---|
| p1c6 catalogue | Faded Entry — specimen entries, quietest numbered voice in the book |
| p1c7 instrument | Faded Entry everywhere EXCEPT §209 in brass (the one warm instrument in the cold cabinet) |
| p1c8 twin-rule | Brass + the §215 motley dual-rule (Ochre + Sanguine hairlines — E3-enumerated, the book's only double-colored rule) |
| p1c9 overture | Full brass + four centered movement numerals (§§240/250/252/254) |
| p1c10 summit | Brass + sanguine triple §§278/287/296 ONLY (E3 — any other red numeral fails review) |
| p1c11 verse | SILENT — no numerals, no figures, no seals (E4 — one stray § fails review) |

### Tokens (LOCKED by ART-DIRECTION.md — no longer provisional)

`--bge-black #12100B`, `--bge-raised #1E1A12`, `--bge-ink #EDE4D3`, `--bge-brass #D9A441` (engraved ledger ink,
never glowing — E2), `--bge-blood #B3402A` (rationed — E3), `--bge-faded #8A7D63`. Light themes: brass `#8A5E14`,
blood `#93301D`; body contrast ≥7:1, accents ≥4.5:1 (engineer verifies computed). End-seal fixed colors, §4.5.
Type: Fraunces 400/600 engraved register (E6 — tabular intent, figure-forward, NOT glowing display), Source
Serif 4 body, Plex Mono ledger voice with tabular figures everywhere. Supervisor loads fonts (+ Georgia /
ui-monospace fallbacks REQUIRED).

### Benchmark answer (USER-FEEDBACK.md, via homepage bar)

BGE answers through its OWN identity, never the homepage's look: genuinely *engraved* seals (concentric rules +
glyph + hatch/stipple detail — §4.4 — never bare geometric badges), typographically composed openers (range
figures + kicker + title + double rule + gloss), authored TOC ledger entries (range column + dotted leader +
section counts + per-chapter accents), chapter-end `§ <last>` marks + A.0 end-seals, sanguine waymarks as
long-chapter relief, and designed nav/progress details. Quiet body stays calm; ambition lives in openers,
margins, and controls.

---

## §3. Per-chapter map (all six IDs)

Common opener anatomy (§5.3): `#chapter-art` (seal SVG + giant Fraunces range figures, composition per chapter
below) → `.meta-part` Plex Mono kicker → `.meta-title` Fraunces → `.meta-rule` double rule (2px brass over 1px
faded) → `.meta-gloss` Source Serif italic (static per-chapter map, supervisor-owned; glosses below are
PROPOSALS). No drop caps on p1c6–p1c10 (margin numeral is the entry). Common reading base: Source Serif 4
1.3rem/1.8, ≤65ch; section-start paragraphs get air via `p:has(> .sec-num)` (no markup, no prose edits);
`.sec-num` Plex Mono 500 0.8rem in 4.5rem left margin ≥900px, inline hanging prefix below (E1: DOM-wrapped only).
Oracle rows (§5.1 BACK) **verified EXACT by regex `^(\d{1,3}[A-Z]?)\.(\s|--)` over chapter JSON this session —
all five chapters MATCH, incl. p1c8 §237A and p1c10 dash-forms §§278/281/282; p1c11 has 0 numbered starts.**

### p1c6 — Chapter V · The Natural History of Morals · §§186–203 (18 sections, 54 ¶¶)

**Rationale (verbatim-grounded).** The chapter is a naturalist's cabinet of moralities that refuses to "GIVE A
BASIS to morality" and demands instead "the collection of material, the comprehensive survey and classification
of an immense domain of delicate sentiments of worth" (P1), whose "real problems of morals … only disclose
themselves by a comparison of MANY kinds of morality" (P3). Its spine is discipline: "every system of morals is
a sort of tyranny" whose essence is "a long constraint" (P7) — "there should be long OBEDIENCE in the same
direction" (P11) — down to nature's own imperative, "Thou must obey some one, and for a long time" (P13). Then
the herds arrive and never leave: "there have also been human herds (family alliances, communities, tribes,
peoples, states, churches)" (P38), "MORALITY IN EUROPE AT PRESENT IS HERDING-ANIMAL MORALITY" (P48), the lamb
and "still more 'the sheep,' wins respect" (P44), the herd's imperative "we wish that some time or other there
may be NOTHING MORE TO FEAR!" (P45) — that "progress" (P46). Distinct images to honor without caricature: §196's
"countless dark bodies near the sun — such as we shall never see" (P34, the cohort's FIRST solar image —
occlusion, not radiance); §197's "healthiest of all tropical monsters and growths" vs. the temperate mediocre,
filed under "Morals as Timidity" (P35, P37); the "anarchist dogs … roving through the highways of European
culture" (P50); and the §203 close — "NEW PHILOSOPHERS," "transvalue and invert 'eternal valuations'" (P53),
"these are the heavy distant thoughts and storms which sweep across the heaven of OUR life" (P54). Treatment:
taxonomic and loamy — many ranked specimens under gathering weight. (Note: the rejected violet-storm theme owned
"storms"; this chapter's storm-line is rendered as *ledger weight* — dense faded entries — never violet weather.)

**Palette role.** Lowland register — densest, most grounded voice; faded-dominant. Numerals Faded Entry (the
quietest numbered voice in the book); brass reserved for opener figures + rules + seal.

**Motif / art.** motif `morals-herd` → `body[data-art="morals-herd"]`. Manifest:
`{ "src": "art/back-seal-5-herd.svg", "symbol": "seal-5-herd", "class": "seal",
"caption": "Pl. V — Herd-lines" }`.
Seal-5 concept (1px brass intaglio, flat, no gradients): concentric double rules enclosing ranked horizontal
lines — eighteen short strokes in disciplined ranks (one per section), the many obeying in one direction (P11),
with fine stipple below the lowest rank (loam) and a single hairline gap where one stroke steps out of rank
(the P53 new philosopher, barely visible — finder-chart restraint).

**Opener composition (§5.3 "catalogue row").** `#chapter-art`: seal left + giant figures "186–203" right on one
row (stacked centered <900px). Kicker `CHAPTER V · §§186–203`. Title. Double rule. Gloss (proposal): "Many
moralities, catalogued like specimens."

**Reading treatment (plain `<p>`).** `.sec-num` Faded Entry; section starts get catalogue air
(`p:has(> .sec-num)` +0.6em top margin). §196's numeral keeps faded color but the paragraph's first line is the
chapter's lone star-image — no extra chrome (calm; the seal + opener carry the art). No sanguine anywhere in
this chapter. Long sections (§§188/199/201/202 span 4–8 ¶¶) hold together by numeral anchoring alone.

**End-seal (A.0).** `body[data-chapter="p1c6"] .chapter-text > p:last-child::after { content:
url("art/back-end-5-herd.svg"); }` — three ranked strokes, 24px intrinsic, fixed seal-bronze (§4.5). End mark
`§ 203` Plex Mono brass (identity TOC/end-mark system; end marks stay BRASS in all numbered back chapters —
never sanguine, see §4.2).

**TOC accent.** Range `§§186–203` in faded tone + section count `· 18` (static map): the catalogue entry.
Selector (supervisor to confirm row hooks): `.toc-chapter[data-chapter="p1c6"] .toc-range`.

**Light-theme behavior.** Figures/rules/seal follow brass `#8A5E14`; numerals use darkened faded (engineer: pick
≥4.5:1 on `#FAF7EF`, recommend `#6B5F45`, verify computed); end-seal fixed bronze passes as non-text (§4.5).

### p1c7 — Chapter VI · We Scholars · §§204–213 (10 sections, 44 ¶¶)

**Rationale.** A satire of the learned man as the philosopher's decadent shadow. The scholar is the "OBJECTIVE
spirit" (P11) — "a MIRROR — he is no 'purpose in himself'" (P11), "an instrument, something of a slave, though
certainly the sublimest sort of slave" (P14), "PRESQUE RIEN!" (P14), "a soft, inflated, delicate, movable
potter's-form, that must wait for some kind of content and frame" (P15), murmuring "JE NE MEPRISE PRESQUE
RIEN" (P14). Around him: skepticism as "the mild, pleasing, lulling poppy" (P17) and "pessimistic moles" (P17),
"the great bloodsucker, the spider skepticism" (P22), the "vivisector's knife" (P33) — and the chapter's one
flash of heat: Napoleon's astonishment at Goethe, "VOILA UN HOMME!" (P23). It closes ascending: "THE REAL
PHILOSOPHERS, HOWEVER, ARE COMMANDERS AND LAW-GIVERS" (P31), "a gradation of rank in psychical states" (P42),
the "holy of holies" coarse feet must never tread (P43) — philosophers must be "BRED for it" (P43), thinking
"closely related to dancing and exuberance" (P40). Treatment: a cold instrument cabinet — precise, diminishing,
faintly comic — with exactly one warm instrument.

**Palette role.** Laboratory register — coldest, most clinical voice. Numerals Faded Entry everywhere EXCEPT
§209 in brass (identity §5.4: the Ochre-against-cold exception, the only brass numeral in the chapter).

**Motif / art.** motif `scholars-lens`. Manifest: `{ "src": "art/back-seal-6-lens.svg",
"symbol": "seal-6-lens", "class": "seal", "caption": "Pl. VI — Lens" }`. Seal-6 concept: concentric rules +
a lens/mirror circle with fine measurement ticks and a single reflected dot off-center (the objective man
reflecting what passes); faint crosshair; cold precision, no warmth except the dot is drawn slightly heavier —
the §209 exception, prefigured.

**Opener composition (§5.3 "small cold figures").** Smallest giant figures in the cohort ("204–213" at 0.8× the
summit scale) + seal right, generous air — the cabinet with room around each instrument. Kicker
`CHAPTER VI · §§204–213`. Gloss (proposal): "The scholar is an instrument — not a philosopher."

**Reading treatment.** `.sec-num` faded; `.sec-num[data-sec="209"]` brass at 1.05× with normal letterspacing —
warmth you notice on the second pass, never a shout. (data-sec on wrapped spans per supervisor wrapper.) Mirror
passages (P11–P16) need no styling: calm body lets the insult land. No sanguine in this chapter.

**End-seal.** `art/back-end-6-lens.svg` — tiny lens-ring, 24px, seal-bronze. End mark `§ 213` brass.

**TOC accent.** Range `§§204–213` faded + `· 10`; the coldest row — range figures at 0.95× with widest
letterspacing (still tabular).

**Light-theme behavior.** As p1c6; the §209 brass exception uses light brass `#8A5E14` (≥4.5:1, engineer
verifies) so the exception survives the theme flip.

### p1c8 — Chapter VII · Our Virtues · §§214–239 (26 sections incl. §237A, 80 ¶¶)

**Rationale.** Opens "OUR Virtues? … We Europeans of the day after tomorrow" (P1) and gives the cohort its
single most paintable image: "two suns which determine the path of one planet … now with red light, now with
green … our actions are MOTLEY-COLOURED" (P3–P4). Around it: the grandfathers' "good conscience, that long,
respectable pigtail" (P2); "WE IMMORALISTS" dancing in "chains" and betwixt "swords" (P29–P32); honesty as a
"gilded, blue, mocking twilight" (P34); the English-utilitarian verse ("Hail, ye worthies, barrow-wheeling …
SANS GENIE ET SANS ESPRIT!", P38–P43); the cruelty thesis — "higher culture" based on "the spiritualising and
intensifying of CRUELTY" (P45); "HOMO NATURA" (P49–P50); and "at the bottom of our souls … a granite of
spiritual fate" with its unchangeable "I am this" (P51–P52). The §232–§239 close (SEVEN APOPHTHEGMS P61–P68,
237A's cooped birds P69, "tiger-claws beneath the glove" P79, "the dangerous and beautiful cat" P80, "Oh
Europe! Europe!" P80) is polemic: art stays on the twin suns + granite and MUST NOT illustrate or caricature
the polemic — restraint is specified, not squeamishness. Second solar image done right: twin radiant suns, vs.
p1c6's occluded dark bodies.

**Palette role.** Firmament register — first luminous chapter; dual-light motif. Brass numerals + the §215
motley dual-rule (Ochre + Sanguine hairlines — E3-enumerated, the ONLY double-colored rule in the book).

**Motif / art.** motif `virtues-twinsuns`. Manifest: `{ "src": "art/back-seal-7-twinsuns.svg",
"symbol": "seal-7-twinsuns", "class": "seal", "caption": "Pl. VII — Twin suns" }`. Seal-7 concept (all brass —
the dual color lives in the §215 rule, not the seal): concentric rules + two small sun discs (one solid-ring,
one rayed) with a single planet dot on a motley orbit line between them; fine ray-hatch; the most *beautiful*
seal in the cohort, composed, never clip-art.

**Opener composition (§5.3 "twin-figure split").** Giant figures split by the seal: "214" brass + seal + "239"
sanguine on one row (supervisor opener markup: `.range-figures .rf-first/.rf-last`; stacked <900px). Kicker
`CHAPTER VII · §§214–239`. Double rule standard brass. Gloss (proposal): "Two suns, one planet: our
motley-coloured actions."

**Reading treatment.** Brass numerals. §215 dual-rule: `body[data-chapter="p1c8"] p:has(> .sec-num[data-sec="215"])::before`
renders the Ochre-over-Sanguine double hairline above the paragraph (pure CSS, `:has` + wrapped span — no
markup, no prose edits). §231 granite passage: no chrome (the sentence "I am this" needs air, not decoration).
Embedded verses — §228 rhyme (P38–P43) and SEVEN APOPHTHEGMS + header (P61–P68): supervisor wrapper tags these
EXPLICIT paragraph indices (38–43, 61–68 — presentational, verifiable, never inferred by length) with
`verse-frag`; CSS centers them at 0.95rem with stanza air. All other short paragraphs stay left (prose
fragments, not verse — do NOT length-sniff).

**End-seal.** `art/back-end-7-twinsuns.svg` — twin dots, 24px, seal-bronze (brass, NOT sanguine — §4.2). End
mark `§ 239` brass.

**TOC accent.** Range `§§214–239` brass with sanguine en-dash (supervisor `.toc-range` inner spans; FALLBACK if
no inner markup: full-brass range + sanguine 2px left tick) + `· 26`.

**Light-theme behavior.** Sanguine half/rule/tick use `#93301D` (≥4.5:1); brass `#8A5E14`; verse-frags keep ink
(not faded) for contrast.

### p1c9 — Chapter VIII · Peoples and Countries · §§240–256 (17 sections, 59 ¶¶)

**Rationale.** Opens on Wagner's Mastersinger overture — "a piece of magnificent, gorgeous, heavy, latter-day
art" (P1) — and marches: "THEY HAVE AS YET NO TODAY" (P2); "good Europeans" (P3); the Tower of Babel statesman
(P5); "national sentiment" storm-and-stress inside the evolving European (P13); the THIRD solar image, distinct
again — a sun in voyage: "our sun is moving rapidly towards the constellation Hercules" (P14); the German soul
with "passages and galleries … caves, hiding-places, and dungeons" (P19–P20), "does not EXIST, he is BECOMING"
(P20), "TIUSCHE VOLK (deceptive people)" (P25–P26); Mozart's "ROCOCO" (P27–P28) vs. Beethoven's twilight (P28);
Mendelssohn "halcyon master … the beautiful EPISODE" and Schumann (P31); the THIRD ear and TEMPO/STACCATO/RUBATO
(P32–P33); prose as "flexible sword" (P33); Demosthenes/Cicero breath-periods and Luther's Bible (P34–P35); two
geniuses (P36); "Tartuffery" (P38); §250's "grand style in morality" in whose "aftersheen … the sky of our
European culture, its evening sky, now glows" (P39); §252's English — "not a philosophical race," "neither
rhythm nor dance" (P45–P47); §253's mediocre Darwin/Mill/Spencer (P48); "European NOBLESSE … is the work and
invention of FRANCE; the European ignobleness … is ENGLAND'S work" (P50); France "the high school of taste"
(P51) with its three claims (P53) and Bizet's "SOUTH IN MUSIC" (P54); super-German/super-European music, palm
trees, "big, beautiful, lonely beasts of prey" (P55); "EUROPE WISHES TO BE ONE" (P56); Siegfried "that VERY FREE
man" (P57); and the theatrical Rome-verse finale (P58–P59). Treatment: an overture — one surge, national
movements in sequence, theatrical close. (National portraits get movement numerals, never caricature glyphs —
the mask-caricature risk that helped kill book-Direction B stays dead.)

**Palette role.** Overture register — richest, most theatrical full-brass voice before the summit. No sanguine.

**Motif / art.** motif `peoples-staves`. Manifest: `{ "src": "art/back-seal-8-staves.svg",
"symbol": "seal-8-staves", "class": "seal", "caption": "Pl. VIII — Staves" }`. Seal-8 concept: concentric
rules + five stave lines that break mid-seal into a surging wave with a fermata-like arc above (the overture's
"inexplicable hesitation … like a gap," P1); fine bar-lines dissolve into hatch — scored sound, drawn.

**Opener composition (§5.3 "movement list").** Giant figures "240–256" + seal, then a Plex Mono movement index
(supervisor static map — the benchmark's authored detail): I. Wagner §240 · II. Germans §244 · III. Music §245 ·
IV. Jews §250 · V. English §252 · VI. French §254 · VII. Europe §256 — set small, letterspaced, brass leaders.
Kicker `CHAPTER VIII · §§240–256`. Gloss (proposal): "An overture on Germans, neighbours, and good Europeans."

**Reading treatment.** Brass numerals; movement numerals at `.sec-num[data-sec="240"], [data-sec="250"],
[data-sec="252"], [data-sec="254"]` restyle to centered block numerals (1rem, letterspaced, flanking hairlines
via ::before/::after fixed rules — decoration, never numeral content). §243's Hercules sun: brass numeral, no
extra chrome (distinction by position in the arc, not badges). Rome-verse finale (P59): supervisor tags index
59 `verse-finale` — italic, 56ch measure, hanging indent, top air. P58 ("what I mean COUNTER TO the 'last
Wagner'") stays prose.

**End-seal.** `art/back-end-8-staves.svg` — fermata arc, 24px, seal-bronze. End mark `§ 256` brass.

**TOC accent.** Range `§§240–256` brass + `· 17` + movement dots (seven small brass dots via static markup if
available; else count alone).

**Light-theme behavior.** Standard brass `#8A5E14`; movement-numeral hairlines use currentColor; verse-finale
ink.

### p1c10 — Chapter IX · What is Noble? · §§257–296 (40 sections incl. dash-forms §§278/281/282, 94 ¶¶) — PRIORITY, deepest spec

**Rationale.** The book's longest chapter (10,352 words) is a doctrine of rank opening at full height: "EVERY
elevation of the type 'man,' has hitherto been the work of an aristocratic society" (P1), "the PATHOS OF
DISTANCE" (P1), "self-surmounting of man" (P1) — with the Sipo Matador sun-seekers climbing "high above …
[the oak] … supported by it" (P4). Then master- vs. slave-morality (P9–P18, closing on the "gai saber" P19);
the tropical-tempo passage where the bow is bent "out of date" (P25); "INSTINCT FOR RANK" (P28);
"DIFFERENCE ENGENDRE HAINE" (P29); noble egoism — "It is justice itself" (P37); the stars, "every star is a
similar egoist … HE KNOWS THAT HE IS ON A HEIGHT" (P38–P39); "SIAO-SIN (MAKE THY HEART SMALL)" (P41);
"progressus in simile" (P43); "SUCCESS has always been the greatest liar" (P46); Will-o'-the-Wisps that
"PRETEND TO BE stars" (P47); "Profound suffering makes noble: it separates" (P50); "reverence 'for the mask'"
(P52); purity — "they 'cannot smell each other!'" (P53); "THE PROBLEM OF THOSE WHO WAIT" and the "Raphael
without hands" (P58–P60); the plummet-wanderer §278 — "wet and sad as a plummet which has returned to the light
insatiated out of every depth" — answering "Another mask! A second mask!" (P64–P65); "He goes back like every
one who is about to make a great spring" (P67); the Harpies (P70); "SEAT oneself on [the emotions] as upon
horses" (P72); "three hundred foregrounds" and mastery of the "four virtues, courage, insight, sympathy, and
solitude" (P72); the furthest stars whose light arrives late, "How many centuries does a mind require to be
understood?" (P73); Faust's height inverted — the man who "looks DOWNWARDS" (P74–P75); §287's title-sentence of
the chapter, "THE NOBLE SOUL HAS REVERENCE FOR ITSELF" (P77); the recluse as "cave-bear … treasure-guardian and
dragon," ideas of "twilight-colour" (P79), "an abyss behind every bottom" and "every word is also a MASK"
(P80); the philosopher as "a storm pregnant with new lightnings" (P84); the "GAI SABER" amulet (P86); "GOLDEN
laughter" (P87); the "genius of the heart" — Dionysus, "stronger, more evil, and more profound; also more
beautiful" (P88–P92); and §296's farewell to "my written and painted thoughts," the mandarins' "fifty yellows
and browns and greens and reds," closing "you, my old, beloved — EVIL thoughts!" (P93–P94). Treatment must
carry scale, height, hardness: rank made visible, then release. The three sanguine waymarks (§278 plummet,
§287 noble soul, §296 EVIL thoughts) are the chapter's altitude stations across 94 paragraphs.

**Palette role.** Summit register — brightest, densest chapter voice: full brass + the book's ONLY triple
sanguine (§§278/287/296, E3-enumerated). No other red in this chapter — not the end mark (§4.2), not the
end-seal.

**Motif / art.** motif `noble-steps`. Manifest: `{ "src": "art/back-seal-9-steps.svg",
"symbol": "seal-9-steps", "class": "seal", "caption": "Pl. IX — Stepped pyramid" }`. Seal-9 concept — the most
composed seal in the book (benchmark §4.4): concentric double rules + stepped pyramid in 1px brass, risers
hatched, treads clean; a tiny eight-point star above the apex (the height that knows itself, P39); stippled
talus at the base; flanking hairline plummets left and right (the §278 plummet, stilled). Flat, engraved,
unglowing (E2). SECOND symbol in the same file: `rank-steps` — three ascending steps, used by the supervisor in
opener markup below the title (contract-native multi-symbol sprite; no extra fetch).

**Opener composition (§5.3 "largest centered figures over stepped rule") — full anatomy.**
1. `#chapter-art`: seal-9 centered (~140px, largest seal in the book) above giant figures "257–296" Fraunces
   600 `clamp(4.5rem, 13vw, 8.5rem)` (largest figures in the book), letterspaced, flat brass.
2. Kicker `CHAPTER IX · §§257–296` (Plex Mono, brass).
3. Title Fraunces; then the stepped rank-rule: `rank-steps` symbol (three ascending brass steps) replacing the
   standard double rule's upper bar — the ONLY chapter whose rule ascends.
4. Gloss (proposal): "Rank, distance, and the noble soul."
5. <900px: seal → figures → kicker stack centered; steps rule full-width thin.

**Reading treatment (94 ¶¶ — relief without noise).** Brass numerals; sanguine at
`.sec-num[data-sec="278"], [data-sec="287"], [data-sec="296"]` — 1.05×, Plex Mono 500, flat blood (E2: no glow,
no halo — the red must read as rubrication, not alarm). Section-start air via `p:has(> .sec-num)` (+0.8em —
the roomiest in the book; the summit breathes). Dash-form starts (§§278/281/282, `NNN.--`) wrap identically per
oracle (verified this session). No other in-flow chrome: the three red waymarks + air carry 10,352 words. The
§287 paragraph (P77) needs nothing but its red numeral — the sentence does the work.

**End-seal.** `art/back-end-9-steps.svg` — stepped apex, 24px, seal-bronze (BRASS — see §4.2 for why the
chapter's final red is withheld). End mark `§ 296` brass Plex Mono.

**TOC accent.** Range `§§257–296` brass + `· 40` + ascending 3-step mark after the range (flat brass steps via
box-shadow stacking on a static span — no gradients; supervisor markup, fallback: count alone).

**Light-theme behavior.** Figures brass `#8A5E14`; triple `#93301D` (engineer verifies ≥4.5:1 on `#FAF7EF`);
rank-steps follow brass var (inlined SVG uses currentColor); end-seal fixed bronze.

### p1c11 — Aftersong · From the Heights · unnumbered verse (36 ¶¶, 552 words) — PRIORITY, deepest spec

**Rationale.** A 36-paragraph alpine poem, not prose — P1 byline "By F W Nietzsche," P2 translator credit, then
34 verse paragraphs: "MIDDAY of Life! Oh, season of delight!" (P3); the glacier "Rose-garlanded" (P5–P6) and
"farthest eagle's view" (P6); the table spread "on high" — "Who dwelleth so Star-near, so near the grisly pit
below?" (P7–P8, the cohort's final vertical image: height above abyss); "I am not I?" (P10–P11); the wrestler
"by himself too oft self-wrung" (P12–P13); the "lonesome ice-lorn fell" and the "ghost haunting the glaciers
bare" (P14–P15); chamois and huntsman (P17); "An evil huntsman was I? See how taut / My bow was bent!" (P18–P19);
the heart's portals opening to new friends (P20–P21); love's lines on "parchment … like crackling leaves, all
seared, all dry" (P22–P23); "Friends' phantom-flight / Knocking at my heart's window-pane at night" (P24–P25);
the quatrain "None but new kith are native of my land!" (P26–P29); the refrain-return "Midday of life! My
second youth's delight!" (P30–P31); "At midday 'twas, when one became as two" (P33); "Feast of Feasts" (P34);
and the finale — "The Guest of Guests, friend Zarathustra, came! The world now laughs, the grisly veil was
torn, And Light and Dark were one that wedding-morn" (P36). NOTE on form: `<p>` ≠ verse line here — several
paragraphs merge 2–3 printed lines with `--` joints (e.g. P4, P31); paragraphs MUST NOT be split (no prose
edits), so verse treatment styles the paragraph as the unit with hanging wrap. Treatment MUST be
verse-luminous: stanza rhythm, altitude, noon light — never a prose wall. And E4 is absolute: figures OFF,
seals OFF, numerals OFF, Sanguine bow-fleuron ONLY. One stray § fails review.

**Palette role.** Light register — the cohort's exhale; the only chapter whose accent is Sanguine-first (bow +
hairline) on any theme. Must glow on dark themes, stay legible on light ones.

**Motif / art.** motif `aftersong-bow`. Manifest: `{ "src": "art/back-fleuron-bow.svg",
"symbol": "fleuron-bow", "class": "fleuron", "caption": "Fleuron — Bow at noon" }`. Fleuron concept: a single
drawn bow-arc in Sanguine 1.5px with a nocked arrow aimed up-right past the frame (P18–P19), string-line
unbroken, three tiny brass stars above the arc's reach (noon height); centered, ~120px; flat, no glow. (The
Preface's bow belongs to the front cohort's veil grammar; this bow is *drawn and loosed upward* — release, not
tension.)

**Opener composition (system silence).** `#chapter-art`: fleuron-bow ONLY, centered. Kicker
`AFTERSONG · FROM THE HEIGHTS` (no figures — hide `.range-figures` per §5.3). Title Fraunces, normal case.
Below the title a SINGLE sanguine hairline (not the double brass rule — the system falling silent, drawn as
one red thread). Gloss: none (the poem's first line is the gloss; supervisor omits `.meta-gloss` here).

**Reading treatment (verse, plain `<p>` — index rules are PRESENTATIONAL, E1-safe).**
- P1–P2 (bylines): `nth-of-type(1),(2)` — centered Plex Mono 0.75rem faded letterspaced (stable: bylines are
  always first).
- P3 invocation ("MIDDAY of Life! …"): `nth-of-type(3)` — Fraunces 600 1.6rem centered, caps preserved as
  written; +1em bottom air.
- P4–P36: verse measure 34rem left-aligned, Source Serif 1.15rem/1.9, hanging indent on wrap (multi-line
  paragraphs read as stanzas), 0.9em between paragraphs; extra air before P30 (refrain return) and P34 (finale)
  via `nth-of-type(30),(34)` top margin — the only index rules, verifiable by validator.
- No drop cap, no numerals, no rules in-flow. CORRECTION to directions.md §5.3: the "centered 'Light and Dark
  were one' colophon" is UNIMPLEMENTABLE without prose edits (the line is mid-paragraph P36) — the chapter ends
  with P36 in verse measure + sanguine bow end-seal below (A.0). Do not extract colophons from prose, ever.

**End-seal.** `art/back-end-11-bow.svg` — bow-arc miniature, 24px, fixed blood `#B3402A` (§4.5 — the
E3-enumerated "Aftersong bow" echo). NO `§ <last>` end mark (E4 — no § glyphs in this chapter, including end
marks and TOC).

**TOC accent.** Range column shows `—` (em dash, faded, NEVER a § range) + miniature bow-tick (static supervisor
markup echoing the fleuron; fallback: dash alone). No section count (unnumbered — counting would re-number the
silence).

**Light-theme behavior.** Fleuron + hairline + end-seal in blood `#93301D` (inlined fleuron follows var;
end-seal fixed `#B3402A` passes both — §4.5); verse ink `#211C12` at ≥7:1; bylines darkened faded.

---

## §4. Implementation brief (for the back engineer, via BgeLeadBack)

### 4.1 Selectors & hooks (contract-native, no shared edits)

- Chapter scope: `body[data-book="beyond-good-and-evil"][data-chapter="p1cN"]`; motifs:
  `body[data-art="morals-herd|scholars-lens|virtues-twinsuns|peoples-staves|noble-steps|aftersong-bow"]`.
- Slot: `#chapter-art` (inlined manifest SVG; style `.chapter-art svg` sizing per §3; seals use
  `currentColor` + brass var so all 8 themes follow automatically).
- Numerals: `.sec-num` (supervisor wrapper) + `data-sec` selectors: p1c7 `209` brass; p1c8 `215` rule via
  `p:has(> .sec-num[data-sec="215"])::before`; p1c9 `240/250/252/254` movement blocks; p1c10 `278/287/296`
  sanguine. Section air: `p:has(> .sec-num)`. Fallback for no-`:has` (legacy): numerals still show inline —
  acceptable degradation, validator notes.
- Verse tags (supervisor wrapper, EXPLICIT indices only): p1c8 `verse-frag` on ¶¶38–43 + 61–68; p1c9
  `verse-finale` on ¶59. p1c11 bylines/invocation/refrain air in pure CSS nth-of-type (§3). NEVER length-sniff,
  NEVER split paragraphs, NEVER edit prose.
- Opener extras (supervisor-owned static markup): `.range-figures .rf-first/.rf-last` (p1c8 split),
  `.movement-index` (p1c9), `.rank-steps` symbol placement (p1c10), `.meta-gloss` map (proposals §3),
  `.toc-range` + counts + p1c8 dash spans + p1c10 steps + p1c11 bow-tick (fallbacks specified per chapter).
- Unlayered `design/back.css` (merged sequentially by supervisor into `theme.css`); never `!important` against
  shared; never `reader-*` classes.

### 4.2 Sanguine ration ledger (E3 — binding)

| Sanguine mark | Location | Status |
|---|---|---|
| §215 dual-rule (Ochre + Sanguine hairlines) | p1c8 in-flow | ENUMERATED ✓ |
| §§278/287/296 numerals | p1c10 in-flow | ENUMERATED ✓ |
| Bow fleuron + hairline + end-seal | p1c11 opener/flow/end | ENUMERATED ("Aftersong bow") ✓ |
| p1c8 opener figure-half "239" + TOC dash | p1c8 opener/TOC | Opener-split per §5.3; TOC dash has brass fallback |
| End marks `§ <last>` | ALL numbered back chapters | **BRASS ALWAYS** — a red `§ 296` would read as a fourth red numeral; withheld deliberately |
| End-seals p1c6–p1c10 | chapter ends | **SEAL-BRONZE ALWAYS** (brass family) — same reasoning |
| Everything else | — | NO RED. Any additional red numeral fails review |

### 4.3 The three suns stay distinct (cohort coherence check)

p1c6 §196 dark BODIES near the sun (occlusion — faded numeral, no chrome; the sun is what you *cannot* see).
p1c8 §215 twin SUNS, red and green, motley (radiance — dual-rule + split opener figures; the sun is doubled
light). p1c9 §243 the sun in VOYAGE toward Hercules (motion — plain brass numeral inside the overture's forward
surge; the sun is going somewhere). p1c10 §285 the FURTHEST stars whose light arrives late (distance — brass
numeral, no chrome; darkness before arrival). Four different ledger treatments for four different skies; no two
suns share a treatment. Validator check: list the four passages' treatments side by side — any duplication is a
coherence defect.

### 4.4 Engraved seal standard (benchmark conformance — supervisor: REVISE bare badges)

- Geometry: seals `viewBox="0 0 120 120"`, fleuron `viewBox="0 0 120 80"`; 1px strokes at authored scale; flat
  fills only; NO gradients, NO filters, NO glow, NO drop shadows (E2 binds art as well as type).
- Every seal carries THREE layers: (1) concentric rules (outer 1px + inner hairline), (2) the chapter glyph
  (§3 concepts), (3) at least one texture — hatch, stipple, measurement ticks, or dissolving line-work. A seal
  missing any layer reads as a badge and fails the benchmark.
- Per-seal texture assignments: seal-5 ranked strokes + stippled loam + one out-of-rank gap; seal-6 lens circle
  + measurement ticks + faint crosshair + heavier reflected dot; seal-7 twin discs + planet orbit line +
  ray-hatch; seal-8 stave lines + fermata arc + bar-lines dissolving into hatch; seal-9 pyramid + riser hatch +
  stippled talus + flanking plummet hairlines + apex star; fleuron-bow arc + unbroken string + three stars.
- Inlined opener SVGs use `currentColor`/brass var (all 8 themes follow automatically); end-seal SVGs use FIXED
  colors (§4.5) because `::after url()` art cannot inherit theme vars.
- All paths original and authored; no stock, no icon-font glyphs, no pseudo-element glyph tricks anywhere.

### 4.5 End-seal fixed colors (computed this session — WCAG non-text 3:1 bar, decorative ≤32px seals)

- p1c6–p1c10 end-seals: fixed `#9A7433` seal-bronze — computed 4.45:1 on Ledger Black `#12100B`, 3.99:1 on light
  vellum `#FAF7EF`. Passes on both extremes.
- p1c11 bow end-seal: fixed `#B3402A` blood — computed 3.33:1 dark, 5.33:1 light. Passes both (this is the
  E3-enumerated Aftersong-bow echo, not a new red).
- Mid themes (nocturne/verdant/oxblood/candlelight/sepia/slate): engineer spot-checks computed contrast; both
  colors sit mid-luminance and are expected to hold ≥3:1 everywhere — validator samples two mid themes.
- Sizing: intrinsic 24px, baseline-aligned, zero added margins (A.0: MUST NOT shift body rhythm).

### 4.6 BACK oracle rows (verified EXACT this session — regex `^(\d{1,3}[A-Z]?)\.(\s|--)`; 111 starts)

- p1c6 (54 ¶¶, 18): 1:186 6:187 7:188 15:189 16:190 19:191 23:192 27:193 29:194 32:195 34:196 35:197 36:198 38:199
  41:200 42:201 47:202 53:203
- p1c7 (44 ¶¶, 10): 1:204 5:205 9:206 11:207 17:208 21:209 24:210 30:211 33:212 40:213
- p1c8 (80 ¶¶, 26): 1:214 3:215 5:216 6:217 7:218 11:219 12:220 16:221 17:222 18:223 19:224 24:225 29:226 33:227
  36:228 44:229 48:230 51:231 53:232 56:233 57:234 58:235 59:236 69:237A 70:238 71:239
- p1c9 (59 ¶¶, 17): 1:240 3:241 10:242 14:243 15:244 27:245 32:246 34:247 36:248 38:249 39:250 40:251 45:252
  48:253 51:254 55:255 56:256
- p1c10 (94 ¶¶, 40): 1:257 4:258 5:259 9:260 20:261 23:262 28:263 31:264 37:265 40:266 41:267 42:268 44:269
  49:270 53:271 55:272 57:273 58:274 61:275 62:276 63:277 64:278 66:279 67:280 68:281 70:282 71:283 72:284 73:285
  74:286 76:287 78:288 79:289 81:290 83:291 84:292 85:293 87:294 88:295 93:296 (dash-forms 64:278, 68:281, 70:282)
- p1c11 (36 ¶¶): 0 numbered starts (E4 silence confirmed).

---

## §5. Supervisor asks (all supervisor-owned: index.html, merges, fonts)

1. **Fonts**: Google Fonts link — Fraunces 400/600 + italics, Source Serif 4 400/600 + italics, IBM Plex Mono
   400/500 — plus REQUIRED Georgia / ui-monospace fallbacks.
2. **`.sec-num` wrapper** (book-owned JS on `reader:chapter` — contract DOM confirmed present in working tree,
   no fallback needed): wrap each section-start paragraph's leading number per §4.6 oracle, add `data-sec`,
   add `verse-frag` (p1c8 ¶¶38–43 + 61–68) and `verse-finale` (p1c9 ¶59) tags, SKIP p1c1/p1c11 entirely, never
   mint `reader-*` classes.
3. **Opener static maps**: `.meta-gloss` per chapter (proposals §3; OMIT on p1c11); `.range-figures` markup with
   `.rf-first/.rf-last` split hooks (p1c8) and hide rule (p1c11); `.movement-index` (p1c9, §3 text);
   `rank-steps` symbol placement under the p1c10 title; giant-figure scale hooks per §3.
4. **TOC hooks**: `.toc-range` column (static id→range map + counts §3), p1c8 dash spans (fallback: brass +
   tick), p1c10 steps span (fallback: count), p1c11 `—` + bow-tick (fallback: dash), dotted brass leaders,
   flat brass progress fill, `§ <last>` end marks (brass, numbered chapters only).
5. **Sequential merges**: `design/back.css` → `theme.css`, `design/back.json` entries → `design/chapters.json`
   (manifest entries §3); art renames, if any, at merge time. Cover is supervisor-owned (back seals do not
   appear on the cover).

---

## §6. Validator checklist (prototype review: p1c10 + p1c11 at 1440×1000 / 820×1180 / 390×844)

- [ ] E1: spot-check ≥20 `.sec-num` wrappings incl. 65A/73A/237A + dash-forms 278/281/282; grep `back.css` for
  `nth-of-type` + `content:` numerals — MUST be absent (presentational nth rules for p1c11 air are allowed).
- [ ] E2: figures + seals flat — no `text-shadow`/glow/gradient on `.range-figures`, `.sec-num`,
  `#chapter-art svg` (computed-style check).
- [ ] E3: red inventory EXACT — §215 dual-rule, §§278/287/296 numerals, p1c11 bow set (+ p1c8 opener-half/TOC
  dash per §4.2); end marks + end-seals (p1c6–p1c10) brass/bronze; nothing else red anywhere in the cohort.
- [ ] E4: rendered-DOM text search for `§` in p1c1 + p1c11 — ZERO hits (end marks, TOC, numerals, figures).
- [ ] Verse tags: `verse-frag`/`verse-finale` present at §4.1 indices; p1c8/p1c9 short prose paragraphs NOT
  verse-styled; p1c11 bylines/invocation/refrain air correct.
- [ ] Manifest: all six `src`+`symbol` entries resolve and inline; negative test — broken symbol hides slot
  with console warning, no error state.
- [ ] End-seals: intrinsic ≤32px, zero layout shift vs. seal-less render, contrast per §4.5 on dark + light +
  two sampled mid themes.
- [ ] Contrast: body ≥7:1, brass/blood accents ≥4.5:1 on all light themes (computed, composited backgrounds).
- [ ] No-`:has` fallback: numerals still legible inline; no overlap, no horizontal scroll <900px.
- [ ] Benchmark: seals show all three engraving layers (§4.4); openers/TOC/end marks/nav feel authored beside
  the homepage — no generic shell, no palette swap, no repeated ornament.
- [ ] Ownership: no edits to shared/*, theme.css (supervisor merge only), prose/data, or front files.

---

*Handoff: research complete — engineer spawn follows via BgeLeadBack. Report channel: terminal yield to
`SupBGE-2.BgeLeadBack` (this package). No commit/push/deploy.*