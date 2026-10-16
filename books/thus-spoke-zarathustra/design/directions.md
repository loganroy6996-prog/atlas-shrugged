# Thus Spoke Zarathustra — Book Identity: Three Directions

Owner: `SupZarathustra-2.ZarathustraIdentity` (book identity designer).
Status: Phase A identity spec, conformant to READER-CONTRACT v1.0 (STABLE 2026-10-15). This file is the ONLY file this agent creates.
Supervisor integrates; cohorts follow the recommended grammar. No theme/index/shared edits here.

## Grounding: what this book actually is

Read in full (11 assigned): p1c1 Prologue, p1c23, p2c9 Night Song, p2c10 Dance Song,
p3c2 Vision and Riddle, p3c4 Before Sunrise, p3c12 Law-Tables, p3c13 Convalescent
(read additionally, adjacent key chapter), p3c16 Seven Seals, p4c10 Noontide, p4c19
Intoxicated Song, p4c20 The Sign. Skimmed (16): p1c2, p1c8, p1c12, p2c2, p2c18, p2c22,
p3c1, p3c6, p4c4, p4c5, p4c6, p4c11, p4c15, p4c16, p4c17, p4c18.
The remaining ~54 chapters are known to this agent by title/position only; every
claim drawn from an unread chapter below is marked [title-inference], and cohort
leads MUST correct the manifest where the prose disagrees. No narrative events invented.

Verified textual anchors (all quotations checked against chapter JSON):

- The book is a prophetic downward journey: "I must descend into the depths" (p1c1),
  taught in sermons ("Of …" chapters), songs (Night, Dance, Funeral, Second Dance,
  Melancholy, Intoxicated, Seven Seals), visions (Prologue, Vision and Riddle,
  Convalescent, Noontide) and a Part IV parade of "Higher Men" ending in festival.
- Eagle and serpent: "the proudest animal under the sun and the wisest animal under
  the sun" (p1c1 §143–146). They recur as Zarathustra's companions throughout.
- The staff: disciples give "a staff, upon the golden haft of which a serpent was
  coiled about a sun" (p1c23 §2). A sun ringed by a serpent is therefore the book's
  own self-drawn emblem — not an invented logo.
- The Ring: "the wedding ring of rings – the Ring of Recurrence" (p3c16, sevenfold
  refrain); "the ring of existence is true to itself for ever" (p3c13); "golden
  round ring" (p4c10); the Gateway "Moment" with two eternal lanes (p3c2).
- The day-cycle: dawn address to the sun (p1c1), night songs (p2c9), noon doctrine of
  the "great noontide" (p1c23 §50, p3c12), midnight bell and roundelay (p4c19),
  morning Sign (p4c20). The book is structured as a full solar day.
- The Sign itself: a laughing lion pressing its head to Zarathustra's knee amid a
  cloud of doves (p4c20 §11–15), prophesied in p3c12 §3 as "the laughing lion with
  the flock of doves."
- Creatures with speaking roles: camel/lion/child (p1c2), adder (p1c20), tarantulas
  (p2c7), leech (p4c4), sorcerer, pope, ugliest man, beggar, shadow, ass (Part IV).
- The tightrope walker over the market square (p1c1); old shattered law-tables and
  new half-written ones (p3c12 §1); "Become hard!" (p3c12 §176).

Design consequence: the identity must serve FOUR literary forms (sermon, song,
vision, parade/festival), carry one solar day from dawn to morning, and honor the
book's own emblem (sun + serpent) and finale (lion + doves). Any direction that only
decorates "mountains" or "philosophy" fails the swap test below.

## External references studied (4, all via web/collection records)

Studied through collection records, catalogue entries and scholarship summaries in
this session's browser/web tools. No opaque image-generation tool was available, so
no pixels were inspected at full resolution; lessons below are drawn from documented
visual facts, honestly flagged where descriptive rather than inspected.

1. Henry van de Velde, deluxe *Also sprach Zarathustra*, Insel Verlag 1908 (Yale
   University Art Gallery 1997.56.3; National Gallery of Art 163764; Fonts In Use
   entry from the Getty/Archive.org scan). The canonical designed Zarathustra: a
   Jugendstil Gesamtkunstwerk where whiplash line-ornament, title page and binding
   form one artwork. TOOK: the identity must live in authored line + type, never in
   tinting; the cover title is a monument, not a label; ornament should be linear
   and architectural rather than atmospheric.
2. William Blake, illuminated prophetic books, esp. *Jerusalem* (V&A O901355; Yale
   Center for British Art; Tate; "infernal method" illuminated-printing scholarship).
   Blake invented relief etching to print word and image together in prophetic
   books mixing verse, prose and vision. TOOK: emblems fused with the text block
   (not floating hero art); songs set as lyric stanzas with honor paid to refrains;
   prophetic utterance wants inscriptional weight, not card UI.
3. The Shir-o-Khorshid (Lion and Sun) emblem of Persia (Wikipedia "Lion and Sun";
   BMITP paper on the emblem's continuity; WorldHistory.org Zoroaster entry).
   The lion-and-sun pairing is the authentic visual root of the historical
   Zarathustra's culture, and the book independently ends on a lion under the
   morning sun. TOOK: Direction A's solar-lion grammar is historically grounded,
   not decorative orientalism; the final chapter earns the book's oldest emblem.
4. Caspar David Friedrich, *Wanderer above the Sea of Fog* (Met audio guide 378;
   cdfriedrich.de) and *Morning in the Riesengebirge* (WGA entry; Nationalgalerie).
   The Rückenfigur before dawn ridges; man small, light vast. TOOK: cover
   composition grammar (solitary figure before the sun, never a landscape
   wallpaper); Part I staging as "first light over an abyss," kept strictly to
   Part I so it cannot become the book-wide cliché the rejected theme already was.

---

## Direction A — THE SOLAR GOSPEL (sun-serpent liturgy) ★ RECOMMENDED

Concept: the book as a discovered gospel of a sun-cult — Persian antiquity,
inscriptional stone, recurrence rings. Every chapter is a tablet sealed with the
Ring; the four parts are the four watches of one solar day (dawn / night / noon /
midnight-into-morning). The master device is the book's own staff-head: a radiant
sun ringed by a coiled serpent.

- Type: Display **Cinzel** (Google Fonts, inscriptional Roman caps; chapter titles
  set as carved inscriptions, balanced wrap, clamp-sized for the long titles).
  Body **Newsreader** (Google Fonts, Production Type; opsz auto, 400/500 +
  true italics for songs). Chrome keeps shared **DM Sans**.
  Loading (contract §8): supervisor self-hosts subsets as `design/fonts/*.woff2`
  with `@font-face` in book CSS (book-relative so build §11 ships them), keeping
  the Google Fonts CSS2 link as progressive enhancement only
  (`Cinzel:wght@400..700` + `Newsreader:ital,opsz,wght@0,6..72,400..500;1,6..72,400..500`,
  `display=swap`); REQUIRED fallbacks Cinzel→`'Trajan Pro',Georgia,serif`,
  Newsreader→`Georgia,serif` (offline + no-JS still read).
  Roles: Cinzel = cover title, chapter titles, part names, seal legends, TOC part
  headers. Newsreader = all prose; Newsreader italic = songs/lyrics. DM Sans =
  buttons, settings, meta labels (unchanged shared chrome).
- Scale (major-third-ish, calm): cover title clamp(3rem,9vw,6rem); chapter title
  clamp(2rem,5vw,3.25rem); part line 0.85rem tracked 0.3em; body 1.3rem/1.85
  (reader default preserved); songs 1.15rem/2.0 centered. Measure: prose 36–40rem;
  songs 26–30rem centered; titles free.
- Palette (dark-first; 6 named):
  - `--z-night` `#0A0E21` — abyssal lapis-black ground (reader bg in dark Ink)
  - `--z-lapis` `#1B2350` — lapis surface (cover field, TOC panel, tablet cards)
  - `--z-solar` `#E8A93D` — sun gold (accents, seals, display rules, active states)
  - `--z-ember` `#C8502E` — ember red (Part IV dusk, warnings, the Ass Festival)
  - `--z-serpent` `#7A8B5A` — bronze serpent-green (secondary motif, Night Song
    fountain lines, serpent device)
  - `--z-bone` `#F2E7CF` — bone vellum text
- Layout/composition:
  - Cover: full-bleed lapis field with an engraved SVG ray-field; center, the
    Sun-Serpent Roundel ≥40vmin (hand-authored SVG: rayed disc, serpent ring,
    no gradients-as-art); beneath it the inscription stack "THUS SPOKE /
    ZARATHUSTRA" in Cinzel, then "A Book for Everyone and No One" in Newsreader
    italic. Asymmetric on desktop: roundel left-of-center, title right (see wire).
  - Contents: four part-groups headed by their Part Seal medallion (small SVG) +
    Cinzel part name; chapters in calm rows, song-chapters marked with a tiny
    engraved lyre/fountain tick; current chapter row carries the solar underline.
  - Chapter opener: Part Seal medallion (56–72px SVG) → Cinzel part line →
    Cinzel title → one verbatim pull-line from the chapter's own prose in
    Newsreader italic gold (chosen by cohort leads from real text) → hairline
    sun-rule. Sermons left-aligned tablet; songs centered lyric; visions get a
    full-bleed authored scene above the title; parade chapters get an emblem row.
  - Reading flow: quiet bone-on-lapis prose, generous margins; ornament ONLY at
    opener, stanza crowns (songs), and a 24px part-specific mini-seal SVG closing
    each chapter. No mid-text decoration.
- Illustration medium: engraved-line SVG (Blake/van de Velde lineage): roundels,
  seals, ray-fields, emblems. Flat metallic fills (gold/ember/serpent on lapis);
  hatching via SVG paths, never CSS gradients, never emoji/Unicode glyphs as art.
- Signature idea: **the Sun-Serpent Roundel + four Part Seals of the solar day** —
  one master emblem (the staff-head from p1c23) whose solar phase changes per part
  (crest / eclipse / blaze / ember-into-dawn). The Ring of Recurrence made navigable.
- Navigation: TOC part seals double as progress state (seal "fills" as its part is
  read); progress bar restyled as a horizon line with a traveling sun-dot;
  prev/next buttons gain Cinzel labels ("The Night Song" etc. stay in full).
- 81-chapter variation: FORM grammar × SOLAR-PHASE grammar. Each chapter is cast as
  sermon / song / vision / parable-emblem / parade / dialogue / finale (see §81 map);
  each part shifts the seal, accent migration (I gold, II serpent-silver, III
  white-gold blaze, IV ember→gold), pull-line voice, and closing mini-seal.
  Neighboring sermons share the tablet; no two songs share a stanza crown.

```
COVER (desktop)                    CHAPTER OPENER (sermon)
+--------------------------------+  +--------------------------------+
|  · · lapis ray-field · · ·     |  |         (  seal svg  )         |
|   ╭──────╮                      |  |      PART THE FIRST · I        |
|  ( SUN ·SERPENT )  THUS SPOKE  |  |  OF THE VISION AND THE RIDDLE  |
|   ╰──────╯   ZARATHUSTRA       |  |  "…verbatim pull-line…"        |
|  A Book for Everyone and No One|  |  ─────── ☉ ───────             |
|  [ Begin ] [ Contents ]        |  |  prose… 36–40rem…              |
+--------------------------------+  +--------------------------------+
```

Swap test: put *Mrs Dalloway* in this shell — the staff-head roundel, Moment
gateway, recurrence seals, lion-and-doves finale and dawn-to-morning arc are
nonsense for it. The identity is Zarathustra's gospel or it is nothing.

## Direction B — AVALANCHE PSALM (alpine expressionist woodcut)

Concept: the book as a hand-printed mountain pamphlet — harsh black ink, bone
paper, one blood-red accent. Authored woodcut-style SVG scenes (ridge, rope,
gateway, dwarf) with gouge hatching. The tightrope from the Prologue becomes the
book's through-line: a single taut diagonal vector drawn across every opener,
sagging, fraying or snapping with the chapter's mood, and doubling as the reading
progress line.

- Type: Display **Fraunces** (Google Fonts, opsz + SOFT/WONK axes; set tight, black
  weights, expressive). Body **Spectral** (Google Fonts; 400/500 + italics; has a
  Spectral SC companion for speech labels). Loading: one CSS2 link
  (`Fraunces:opsz,soft,wonk,wght` + `Spectral:ital,wght`), display=swap; fallbacks
  Georgia/serif.
- Scale: cover title clamp(3.2rem,10vw,6.5rem) Fraunces Black tight; chapter titles
  clamp(1.9rem,4.5vw,3rem); body 1.25rem/1.8; measure 34–38rem left-aligned, ragged.
- Palette (6 named):
  - `--z-ink` `#0D0C0A` — woodblock ink ground
  - `--z-ash` `#1A1917` — ash surface
  - `--z-bone` `#EFE6D0` — paper text
  - `--z-blood` `#B3231B` — blood red, the ONLY chromatic accent (ropes, wounds,
    dawn slashes, active states)
  - `--z-storm` `#6E7681` — storm grey (secondary lines, muted text)
  - `--z-pine` `#2E4038` — deep pine (forest scenes, Night/Dance song grounds)
- Layout: cover = full-bleed woodcut ridge with the rope diagonal and a tiny
  walker silhouette; title overprinted like a poster. TOC = broadsheet index with
  part woodcut vignettes. Openers: vignette block (16:9 SVG scene) → Fraunces
  title → rope-rule whose angle/tension varies. Reading flow calm bone-on-ink.
- Medium: woodcut SVG — heavy blacks, white gouge-lines, exactly one red.
- Signature: **the Rope** — one hand-drawn vector crossing all 81 chapters;
  taut in sermons, coiled in songs, cut in the Prologue's fall, re-knotted at
  the Sign.
- Navigation: progress = the rope pulled taut across the header; TOC rows divided
  by rope-rules; part headers carry altitude marks (hut / ridge / summit / descent).
- Variation: four altitude bands with distinct vignette palettes (dawn grey, pine
  night, storm white, blood dusk); songs get white-on-pine inverted lyric blocks;
  visions get full-bleed scenes; Part IV's parade gets red-mask emblems.

Swap test: passes formally (rope + walker + dwarf are Zarathustra's), but the
tightrope expires after p1c1 and must be artificially prolonged; the mountain
pamphlet could equally house Hesse or Mann. Weaker ownership than A.

Why not chosen: woodcut wants paper — fighting the dark-first reader instead of
inhabiting it; the single-red discipline starves 81 chapters of needed range
(songs, festival, midnight bell all go hungry); and "alpine geometry" is exactly
the rejected theme's territory — this direction would read as a better-executed
version of the failure, not a new identity.

## Direction C — MASQUE OF GRAVITY (candlelit baroque carnival)

Concept: the book as a midnight masque — Part IV's kings, pope, sorcerer, leech,
shadow and braying ass promoted to the governing metaphor. Printer's ornaments,
bestiary emblems, playbill typography, candlelight against cellar dark. Every
chapter gets its creature: where the text names a beast it is drawn; sermons take
the animal of their central image.

- Type: Display **Alegreya SC** (Google Fonts, small-caps family; playbill titles
  at 700–900). Body **Alegreya** (same family, 400/500 + italics; bookish,
  calligraphic). Loading: one CSS2 link (`Alegreya:ital,wght` +
  `Alegreya+SC:wght@700;900`), display=swap; fallback Georgia/serif.
  NOTE (deliberate rejection inside this direction): German blackletter was
  considered for "Nietzsche" flavor and REJECTED — Fraktur carries Third Reich
  appropriation baggage, and this of all books must not wear it.
- Scale: cover title clamp(2.8rem,8vw,5.5rem) SC; chapter titles
  clamp(1.8rem,4vw,2.6rem); body 1.3rem/1.9; measure 36–40rem.
- Palette (6 named):
  - `--z-cellar` `#100B12` — violet cellar-black ground
  - `--z-umber` `#241610` — umber surface (cave, stage boards)
  - `--z-tallow` `#E6C87A` — tallow candlelight (primary accent, gilt frames)
  - `--z-oxblood` `#7E2233` — oxblood (curtains, ass-festival sashes, popes)
  - `--z-verdigris` `#4E8D7C` — verdigris (serpent, leech, copper ornaments)
  - `--z-bone` `#F1E4CE` — bone text
- Layout: cover = proscenium arch with gilt tallow frame, title as playbill,
  ass-mask + bell + crown emblems along the foot. TOC = dramatis personae: each
  chapter row led by its creature emblem. Openers: emblem cartouche → SC title →
  ornament rule → (songs get centered verse; sermons get drop-cap "masks").
- Medium: copper-engraving SVG emblems + printer's fleurons (authored, not font
  glyphs); gilt frames; candle-glow used ONLY as flat tallow shapes, never blur
  gradients.
- Signature: **the Bestiary** — ~20 authored creature emblems (eagle, serpent,
  camel, lion, child-sun, adder, tarantula, leech, kings' crowns, sorcerer's hand,
  pope's keys-crossed-out [careful: satire, keep abstract], beggar's bowl, shadow
  profile, ass head, bell, dove flock, lion+doves finale) marching through TOC
  and openers.
- Navigation: TOC as menagerie with emblem leaders; progress bar as a burning
  candle-strip (tallow fill, ember tip); chapter nav as "Exeunt / Enter" playbill
  cards — NO, keep shared labels; playbill styling only, same semantics.
- Variation: Parts I–III mostly gilt-on-cellar with verdigris serpent thread;
  Part IV erupts into full masque (oxblood + tallow, emblem per guest chapter);
  songs invert to bone-on-umber lyric cards; the Intoxicated Song gets the bell
  tower spread; the Sign closes with the lion-and-doves tableau.

Swap test: the bestiary is genuinely Zarathustran (no other book has this exact
menagerie), but the masque frame fits Part IV 10× better than Parts I–III — the
great sermons (Law-Tables, Bestowing Virtue) and sky-hymns (Before Sunrise) are
forced into carnival costume. Ownership is real but uneven.

Why not chosen: uneven across the arc (carnival peaks early as metaphor, then must
sustain 60 chapters that are not carnivalesque); risks comedy over prophecy;
~20 emblems is the heaviest art load with the least reuse. Its best idea — the
creature emblems — is absorbed into Direction A as the Part IV / parable-emblem
layer (see inheritance below).

## Comparison and recommendation

| Axis | A Solar Gospel ★ | B Avalanche Psalm | C Masque of Gravity |
|---|---|---|---|
| Owns THIS book | Total: staff-head, Ring, solar day, lion+doves | Partial: rope expires at p1c1 | Uneven: Part IV's metaphor |
| Serves all 4 forms | Yes: tablet/lyric/vision/emblem | Yes but monochrome-starved | Songs+parade yes; sermons costumed |
| Dark-first reader | Native: lapis + gold | Fights it: woodcut wants paper | Native: cellar + candle |
| 81-chapter range | Ring phases × forms, high reuse | One red, vignette treadmill | 20 emblems, heavy load |
| Distinct from rejected theme | Complete break (liturgy vs alpine chevrons) | Better version of the same mountain | Complete break |
| Risk | Inscriptional caps at long titles (mitigated: clamp + balanced wrap) | Reads as "nicer failure" | Comedy over prophecy |

RECOMMENDED: **Direction A — The Solar Gospel.**
Inheritance: B contributes the tightrope as Part I's secondary motif (Prologue
scene art + Part I divider); C contributes the bestiary as A's parable/parade
emblem layer (adder, tarantula, leech, kings, ass, etc. drawn in A's engraved-line
hand, gold/serpent/ember on lapis). Nothing of the rejected chevron/▲-glyph /
mod-4-gradient system survives.

---

## Buildable spec for Direction A (cohort teams: this section is binding)

### Tokens (dark Ink values; supervisor MUST scope overrides per-theme and cover all 8 themes, contract §8)

```css
--z-night:#0A0E21; --z-lapis:#1B2350; --z-solar:#E8A93D; --z-ember:#C8502E;
--z-serpent:#7A8B5A; --z-bone:#F2E7CF;
/* roles: ground/surface/accent/dusk-ember/secondary-creature/text */
/* Book tokens are additive (--z-*). Shared tokens (--bg,--text,--accent,…) are
   overridden only under html[data-theme="<t>"]. Dark Ink mapping intent:
   --bg:var(--z-night); elevated/soft/surface: lapis derivations;
   --text:var(--z-bone); --accent/--accent-hover:var(--z-solar);
   --copper:var(--z-ember); --font-serif:Newsreader stack; --font-sans:keep DM Sans.
   Unlayered book CSS always wins over @layer shared — never !important. */
```

Reader hooks (READER-CONTRACT v1.0 STABLE): `body[data-book="thus-spoke-zarathustra"]`,
`body[data-part="I|II|III|IV"]`, `body[data-part-id="part-1|part-2|part-3|part-4"]`
(actual TOC part ids), `body[data-chapter="<id>"]`, `body[data-view="cover|reader"]`,
`body[data-art="<motif>"]` (set from manifest `motif`); art slots `#cover-art`
(cover) and `#chapter-art` (above `#chapter-meta`, injected by reader.js with zero
book edits needed); `#chapter-text[data-paras]`; `reader:chapter` CustomEvent for
book-owned JS. `.chapter-meta::before` free for book use; `.chapter-meta::after`
OWNED BY shared/art.css — never override. Cascade: shared CSS ships in
`@layer shared`; book CSS is UNLAYERED and always wins — never `!important`,
never restructure shared chrome (§8). Book-owned JS in the owned index.html,
listening `reader:chapter` only, is sanctioned for pull-lines, closing seals,
and seal-fill progress (§3).

### Per-part variation grammar

| Part | Solar phase | Seal | Accent lead | Opener ground | Song treatment | Closing mini-seal |
|---|---|---|---|---|---|---|
| I Dawn | sun cresting, rays east-weighted | Dawn-Ring | solar gold | lapis + ray-field | n/a (no songs in I) | cresting sun |
| II Night | eclipsed disc, star points | Night-Ring | serpent-green + silver star `#C9D4E8` (support tint, not 7th token — text-muted derived) | deepened night `#070B1C` | fountain-crown stanza marks, centered 28rem | eclipsed ring |
| III Noon | full blaze | Zenith-Ring | white-gold `#F5C96B` (derived highlight of solar) | lapis + blaze medallion | azure-bell crown for p3c4; seven seal-rounds for p3c16 | blazing disc |
| IV Ember→Morning | ember disc rekindling to gold | Sign-Ring | ember → gold across the part (p4c1–c9 ember-led, c10 pivot, c11–c20 gold returns) | umber-lapis `#171126` → lapis by c20 | bell-crown for c19; festival double-rule for c18 | lion-and-doves at c20 only; ember ring elsewhere |

Derived tints (star-silver, white-gold, deepened night, umber-lapis) are
`color-mix()` derivations of the six tokens — no new hues.

### Grammar rules cohorts MUST follow

1. Display type is Cinzel, sentence-chosen case (titles keep book title-case, NOT
   forced uppercase); chapter titles ≤3 lines via clamp + `text-wrap:balance`.
2. Body prose is Newsreader 400/1.85, 36–40rem, bone-on-lapis; never centered
   except songs; never letterspaced; no mid-paragraph color.
3. Every chapter opener: `#chapter-art` slot filled DECLARATIVELY from
   `design/chapters.json` (contract §4) — Part Seal SVG (`class:"seal"`) by
   default per part — then Cinzel part line + Cinzel title + verbatim pull-line
   (real text, §-cited, via manifest `caption` or book-owned JS on
   `reader:chapter`) + sun-rule.
4. Songs (p2c9, p2c10, p2c11, p3c4, p3c6, p3c9, p3c14, p3c15, p3c16, p4c14, p4c16,
   p4c19 + hymn passages [title-inference for unreads]): centered, 26–30rem,
   Newsreader italic, stanza crowns (fountain / bell / azure / seal-round motifs),
   refrains in solar gold only where large-text rule 14 passes.
5. Visions (p1c1, p2c1, p2c22, p3c1, p3c2, p3c13, p4c10 + p4c2 threshold):
   `class:"scene"` full-bleed authored SVG in the `#chapter-art` slot above the
   title (a real `<figure>`, never a CSS background); title overlaid only where
   contrast ≥7:1 on the composited art.
6. Parable/parade emblems (adder, tarantula, leech, kings, sorcerer, pope, beggar,
   shadow, ass, camel/lion/child, tree, mirror, dwarf, gateway, bell, tablets):
   engraved-line SVG in gold/serpent/ember, ≤120px in opener (`class:"emblem"`),
   each declaring a `motif` id (see rule 15) so `body[data-art]` can key CSS.
   Draw ONLY what the chapter's text names; unreads need cohort verification.
7. Drop caps: Cinzel solar, sermons + visions only; songs and festival chapters
   open without (lyric/festival voice).
8. Chapter close: 24px part-specific mini-seal SVG appended as a real element by
   book-owned JS on `reader:chapter` (NOT a `::after` glyph — pseudo-element
   glyphs are the rejected baseline).
9. TOC: part seals + Cinzel headers (seal art via book CSS on part headers keyed
   by §2 hooks; confirm emitted attributes in prototype); song rows get the
   fountain tick; active row gets the solar underline; read chapters dim the
   seal to 40%.
10. Cover: `#cover-art` slot carries the roundel ≥40vmin authored SVG via manifest
    `cover.src` (`class:"plate"`); ray-field is SVG paths; `.cover-glow`
    may carry ONE flat radial gold wash (atmosphere, not art); title stack per
    wireframe; no floating cards, no gradient mesh, no stock.
11. Progress: horizon line + traveling sun-dot; part-phase dots (crest / eclipse /
    blaze / ember) at the four part boundaries.
12. FORBIDDEN: CSS gradients as illustration; Unicode/emoji glyphs (▲❦◆○) as art;
    mod-N/hash tint cycling; tracked-out ALL-CAPS meta labels; identical opener
    compositions for adjacent chapters; minting `reader-*` classes (§7 reserved);
    any edit to prose, shared/*, reader.js internals, or another cohort's files.
13. Reduced motion: seals and rays are STATIC art; any rotation shimmer requires
    `prefers-reduced-motion:no-preference` AND stays ≤0.05Hz; no parallax on prose.
14. Contrast: bone-on-lapis ≥10:1; gold text only ≥3rem or bold ≥1.5rem (large-text
    use) else gold is graphic-only; verify against composited backgrounds.
15. Manifest discipline (contract §4): cohorts author `design/<cohort>.json` +
    `art/<cohort>-*.svg` (book-relative `art/…`, no leading slash, no remote);
    supervisor merges SEQUENTIALLY into `design/chapters.json` (`version:1`,
    `cover`, `default:{class}`, `chapters:{id:{src,class,motif,caption}}`).
    Slot classes: `seal|scene|emblem|plate|song|finale`. Motif vocabulary
    (→`body[data-art]`): `dawn-ring, night-ring, zenith-ring, sign-ring,
    sun-serpent, gateway-moment, bell-midnight, lion-doves, tablets, fountain,
    lyre-dance, rope-fall, noontide-tree, camel-lion-child, mirror-child,
    dwarf-gravity, harvest-figs, volcano-isle, honey-offering, feast-table,
    desert-dance, bestiary-adder, bestiary-tarantula, bestiary-leech,
    bestiary-kings, bestiary-sorcerer, bestiary-pope, bestiary-beggar,
    bestiary-shadow, bestiary-ass`. New motifs need supervisor approval.
16. Owned-JS rules (contract §3): at most one `<script>` in the owned index.html,
    listening `reader:chapter` only (no polling, no shared patching); fills
    pull-lines + closing seals; decorative nodes stay `aria-hidden="true"`;
    verify in `_site` (contract §11) — art, fonts, manifest must all ship.

### Asset list (all original authored SVG; paths book-relative; art teams own, supervisor integrates)

Master + seals: `art/seal-sun-serpent-roundel.svg` (cover master, manifest
`cover.src`), `art/seal-part-1.svg` (Dawn-Ring), `art/seal-part-2.svg`
(Night-Ring), `art/seal-part-3.svg` (Zenith-Ring), `art/seal-part-4.svg`
(Sign-Ring). Scenes (`class:"scene"`): `art/scene-prologue-rope.svg`
(marketplace + rope + fall; Part I divider reuses the rope detail),
`art/scene-gateway-moment.svg` (p3c2), `art/scene-noontide-tree.svg` (p4c10),
`art/scene-bell-midnight.svg` (p4c19), `art/scene-sign-lion-doves.svg` (p4c20
finale tableau). Emblems (`class:"emblem"`): `art/emblem-eagle.svg`,
`art/emblem-serpent.svg`, `art/emblem-tablets.svg` (shattered + new, p3c12),
`art/emblem-fountain.svg` (p2c9 stanza crown), `art/emblem-lyre-dance.svg`
(dance songs), `art/emblem-bestiary-<adder|tarantula|leech|kings|sorcerer|pope|beggar|shadow|ass>.svg`
(one file each, ≤5KB). Fields: `art/field-rays-lapis.svg` (cover ray-field),
`art/field-stars-night.svg` (Part II ground). Dividers: `art/rule-sun.svg`,
`art/rule-festival.svg` (p4c18), `art/rule-seal-round.svg` (p3c16 ×7 instances).
Manifests + fonts: `design/chapters.json` (supervisor-merged, §4 schema),
`design/<cohort>.json` (cohort sources), `design/fonts/*.woff2` (self-hosted
Cinzel + Newsreader subsets). Build + deploy ship `art/**` and `design/**` (§11).

### §81 form map (rationale per chapter; [title-inference] = title/position only)

Part I (sermons of the descent; seal: Dawn-Ring; accent: solar gold):
p1c1 vision-epic (dawn address, marketplace, rope, corpse — needs 3-beat scene
art: sun-address / rope-fall / burial); p1c2 triptych-emblem (camel/lion/child);
p1c3–p1c6 sermon-tablet; p1c7 parable (pale criminal before judges
[title-inference]); p1c8 aphoristic sermon, blood-ink drop cap ("written with
blood"); p1c9 parable-emblem (mountain tree); p1c10–p1c11 sermon-tablet; p1c12
sermon + smashed-idol emblem; p1c13–p1c17 sermon-tablet; p1c18 sermon-tablet,
threshold voice (loneliness of the creator [title-inference]); p1c19 dialogue
(old woman; dance-voice [title-inference]); p1c20 parable-emblem (adder);
p1c21 sermon-tablet; p1c22 sermon-tablet, dusk voice; p1c23 farewell-sermon +
staff sun-serpent emblem (part finale; noontide doctrine stated).

Part II (night doctrine; seal: Night-Ring; accent: serpent + star-silver):
p2c1 vision-emblem (child with mirror); p2c2 harvest-sermon (figs/autumn,
gold intrudes); p2c3–p2c6 sermon-tablet; p2c7 sermon + tarantula emblem;
p2c8 sermon-tablet; p2c9 SONG (fountain crowns, night-eclipse opener — part
centerpiece); p2c10 SONG (dance round, lyre crown); p2c11 SONG (elegy, muted
silver [title-inference]); p2c12 sermon-tablet, flame voice (self-overcoming);
p2c13–p2c17 sermon-tablet (p2c15 moon-voice, p2c17 lyre-voice
[title-inference]); p2c18 parable (fire-volcano island + flying fire-dog);
p2c19 parable (prophet of the great weariness); p2c20 dialogue-sermon
(redemption; hunchback scene [title-inference]); p2c21 sermon-tablet, dandy
prudence-voice [title-inference]; p2c22 vision-threshold (the stillest hour
commands return — part finale).

Part III (noon doctrine; seal: Zenith-Ring; accent: white-gold blaze):
p3c1 travel-vision (midnight ridge crossing); p3c2 VISION (gateway Moment +
shepherd biting the snake — book centerpiece, full scene); p3c3 parable-vision
(ship/bliss aftermath [title-inference]); p3c4 HYMN-SONG (azure-bell crowns,
sky-opener); p3c5 sermon-tablet; p3c6 winter-song (snow-voice, olive-mount
emblem); p3c7 parable (the ape in the great city [title-inference]); p3c8
sermon (apostate disciples [title-inference]); p3c9 return-song (solitude
speaks [title-inference]); p3c10 triptych-sermon (three evils
[title-inference]); p3c11 sermon + dwarf-of-gravity emblem; p3c12 TABLET (the
great sermon; shattered + half-written tablets art; longest chapter 183§ —
needs mid-chapter relief dividers every ~30§); p3c13 vision-dialogue (animals
preach recurrence; abyss-voice); p3c14 longing-song [title-inference]; p3c15
dance-song (Life as dance-partner [title-inference]); p3c16 SEAL-SONG (seven
stanzas × seven seal-rounds + ring refrain in gold — part finale).

Part IV (ember parade into morning; seal: Sign-Ring; accent ember→gold):
p4c1 offering-emblem (honey sacrifice, ember); p4c2 threshold-parable (the cry);
p4c3 parade-emblem (two kings); p4c4 parade-emblem (leech + conscientious man);
p4c5 parade-emblem (sorcerer's lament); p4c6 parade-emblem (retired pope);
p4c7 parade-emblem (ugliest man, murderer of God — darkest opener, near-black);
p4c8 parade-emblem (voluntary beggar among cows [title-inference]); p4c9
parade-emblem (the shadow); p4c10 STILL-VISION (noontide sleep, golden ring —
part pivot, quietest opener in the book); p4c11 assembly (guest gallery header:
all faces in a row); p4c12 feast-emblem (parody supper table); p4c13 long
sermon-tablet (Higher Man address; assembly margin motif); p4c14 harp-song
(melancholy, minor-voice); p4c15 dialogue-sermon (leech-man cross-examines
[title-inference]); p4c16 desert-song (dance-measure, arid tints); p4c17
threshold-parable (incense + braying, festival ignition); p4c18 FESTIVAL (ass
litany, double-rule, ember-gold, no drop cap — communal voice); p4c19
MIDNIGHT SONG (bell-tower spread, roundelay stanzas chanted in gold — climax);
p4c20 FINALE (lion-and-doves tableau, morning gold restored — book seal).

### Open uncertainties (for cohorts + supervisor)

- ~54 unread chapters: form assignments marked [title-inference] need prose
  verification before art is cut; song list especially (lyric treatment must
  match actual stanzaic text, not titles).
- Pull-lines must be chosen from real paragraphs with § citations; no invented
  epigraphs anywhere.
- Part II "star-silver" and Part III "white-gold" are support tints via
  color-mix, pending supervisor approval that derivations don't read as new hues.
- Cinzel long-title behavior ("The Seven Seals (or: The Song of Yes and Amen)")
  plus `#chapter-art`/`#cover-art` slot styling and `body[data-art]` keying need
  a prototype view at desktop + 390px before lock-in.
- TOC part-header seal art depends on the attributes reader.js emits per part
  group — verify in prototype; fallback is Cinzel headers + solar rules only.
- Supervisor (not this agent) writes `design/ART-DIRECTION.md` from this spec —
  it also locks the generator (§10). Book-owned JS (pull-lines, closing seals)
  is supervisor/engineer owned; this spec defines placement + content rules only.
- Reference study was record/scholarship-based (no full-resolution inspection
  available); art teams should re-verify emblem details (shir-o-khorshid
  composition, Blake plate layouts) before drawing.
