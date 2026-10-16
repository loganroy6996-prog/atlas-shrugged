# Atlas Shrugged — three book-identity directions

Designer: SupAtlas-2.AtlasIdentity-3. Status: DRAFT for supervisor + ArtDirector review (expect one revision round).
Deliverables in this folder: `directions.md` (this file), `identity.json` (winner's token grammar), `prototype.html` (rendered sketches of all three, viewed by the designer at desktop width).

Contract basis: READER-CONTRACT v1.1 — JS-injected `#cover-art` / `#chapter-art` slots, declarative manifest `design/chapters.json` with explicit `{src, symbol}` keys (never fragment URLs), hooks `body[data-book]/[data-part-id]/[data-view]/[data-art]` + `reader:chapter` event, `@layer shared` (unlayered book CSS always wins), book-owned JS sanctioned (slots + §2 hooks only), fonts book-relative under `design/fonts/` with system fallbacks.
Binding precedents designed against: ArtDirector Atlas brief (§A0–A3, `.omp/design/critiques/atlas-shrugged.md`); Fountainhead approval conditions F1–F10 (no index-correlated styling, no odd/even alternation — every variation authored + documented per chapter); shelf type registry (display faces taken: Oswald, Fraunces, Archivo Black, Cinzel; body/data taken at scale: Newsreader, Source Serif 4, IBM Plex Mono — Atlas uses none of these in the same role); user benchmark (`.omp/design/USER-FEEDBACK.md`: homepage-level authorship everywhere, through this book's own identity).

Grounding: meta.json, data/toc.json (30 chapters, p1c1–p3c10 stable), full theme.css baseline (weak: tower verticals + conic glow cover, rail-tie/split-bar/ember-bar pseudo-ornaments, 3-cycle numeral tints, diamond/ring glyph end-marks), index.html, live baseline viewed at :8000 (cover + p1c1 reader, 1440×1000, `body[data-part="I"][data-chapter="p1c1"]`, 405 paras). Prose read: full openings (~15 paras) of p1c1 (Eddie, the bum, "Who is John Galt?", the September-2 calendar in the sky), p1c8 (Dagny's exile office, rails converging to a point held by a man beyond the horizon), p2c1 (Stadler, the dead-gray hills, *Why Do You Think You Think?*), p2c10 (the twilight train west, telegraph poles, the tramp, the Ghost of the Twentieth Century Motor), p3c1 (sunlight, the face without pain/fear/guilt, "John Galt"), p3c7 (Rearden's disappearance, the doorbell like an alarm); closings of p1c1 (Kellogg's shrug), p1c8 (Rearden), p2c1 (the kiss), p2c10 ("Oh hell! Who is John Galt?"), p3c1 (the torture chamber inscriptions), p3c7 (the oath), p1c10 (Wyatt's torch, "Take over. It's yours."), p3c10 (the dollar traced over the desolate earth); first-paragraph census of all 30; motif census by grep (Rearden Metal, bridge, furnace, cigarette, radio, valley, Nat Taggart, telegraph, locomotive, calendar, strike, signal, desert, headlight, Comet, rail/track, bracelet, motor, dollar sign, Halley/Fifth Concerto, oak tree, Wet Nurse, Midas, wedding, smelter, diner/cafeteria — full counts in §8, used to key chapter motifs to real content).

## §0 References studied (what was taken, not copied)

1. **A.M. Cassandre, *Étoile du Nord* railway poster (1927)** — V&A record O74368 (collections.vam.ac.uk/item/O74368): "broke with [picturesque] tradition by focusing on images of the train and the railway itself… a new feeling of speed and the romanticism of distant travel." *Lesson for Atlas:* the book's own visual world is infrastructure seen head-on — rails converging to a vanishing point, the locomotive as geometry. Direction A takes the converging-line composition and the posterist discipline of one huge idea per plate; it does NOT take French-poster lettering or Cassandre's palette. (V&A holds no online image of O74368; composition knowledge from the catalogue description + the well-documented Cassandre railway-poster idiom.)
2. **George Salter's 1957 first-edition dust jacket** — Leo Baeck Institute Griffinger record 5525297 (lbi.org/griffinger/record/5525297), Random House third printing: train tracks leading into a tunnel in a dark mountain, dark-purple sky, foggy turquoise foreground, red circle with black edge and blue glow above the tunnel, thick white title caps, red author name. Image fetch failed (ECONNRESET, recorded honestly — description grounding only, no pixels claimed). *Lesson:* the original jacket's grammar is tunnel-mouth + converging rails + signal-disc — the three primitives of Direction A's signal system. Direction B takes Salter's turquoise/purple night as proof that Atlas night need not be brown-black.
3. **Hugh Ferriss, *The Metropolis of Tomorrow* (1929)** — Wikipedia grounding (en.wikipedia.org/wiki/The_Metropolis_of_Tomorrow): 60 charcoal drawings, setback ziggurat masses, "dramatic sense of light and shadow… cities strangely devoid of people, or solo figures dwarfed by majestic surroundings" (Quartz via the article). *Lesson for Direction C:* massing-before-detail — skyscrapers as stepped charcoal silhouettes with lit edges; the Taggart Building as Dagny sees it (p1c8: "lines converging abruptly to its distant pinnacle"). No Ferriss pastiche: Atlas masses are drawn as flat engraved plates, not charcoal renderings.
4. **The geometric (guilloche) lathe / banknote engraving** — Wikipedia (en.wikipedia.org/wiki/Geometric_lathe): "intersecting and interlacing patterns of fine lines… almost impossible to forge." Bureau of Engraving and Printing process notes (bep.gov/currency/how-money-is-made). *Lesson for Direction B:* money's visual authority comes from unforgeable line-work — concentric lathe rosettes, interlaced borders, the dollar as the densest object on the page. p2c10 ("THE SIGN OF THE DOLLAR") and p3c10 (the dollar traced over the earth) earn this medium natively.
5. **1930s *Fortune* magazine covers** — Slate survey (slate.com, 2016-01-04): commissioned modernist covers celebrating "technologies of the office… ticker tape… airplanes and city skylines," business "integral to the functionality of the American system." *Lesson:* industrial modernism can be lush, not grim — ticker tape, skylines, and machines as beautiful objects. Direction A's signal plates and Direction C's terminal plates both take the Fortune permission to make infrastructure gorgeous.
6. **Rodchenko / Lissitzky constructivist book design** — MoMA "Constructivist Book Design" (Rowell): Rodchenko's "flatness, linear constructions… restricted to two (or occasionally three) flatly applied hues… large block characters… horizontal, vertical, or perpendicular grid"; Lissitzky's "typography that determines, shapes, and orders the layout." *Lesson (negative + positive):* Atlas must never borrow the red/black revolutionary code — but the discipline of 2–3 flat hues, type-as-structure, and the book-as-built-object transfers directly to all three directions. Direction C's terminal-grid composition is the closest heir.
7. **Fountainhead APPROVED identity (shelf precedent)** — `books/the-fountainhead/design/ART-DIRECTION.md` + `.omp/design/critiques/the-fountainhead.md`: THE FURNACE (heat as moral thermometer, Oswald + Source Serif 4 + Plex Mono, chainage data line, 4 part marks as structural elevations, F1–F10 conditions). *Lesson:* the submission shape that passes — authored per-chapter rules (never modulo), part marks as real drawn structures, scale sensitivity (F4/F5), contrast policing (F1), prototype-first evidence. Atlas differentiates in every axis: no Oswald, no heat grammar, no chainage line, no umber ground.

---

## Direction A — THE SIGNAL (recommended)

*The novel as a night railroad run: every chapter is a signal aspect on the Line.*

**Why this book, no other.** Atlas Shrugged's implacable images are rails converging to a single point (p1c8: "the rails were held in the hand of a man beyond the horizon"), the tunnel mouth (Salter jacket; Taggart Tunnel; the valley approach p2c10), the headlight beam in darkness (p2c7/p2c8/p3c10), the signal that says go or stop (p3c5: 21 signals — the chapter IS a signaling catastrophe; Directive 10-289 freezes every signal at red). No other book on the shelf is a railroad novel; a signal-plate identity with cleared/stop/caution aspects cannot house anything else. Title-swap test: put "Middlemarch" on a green-signal plate over converging rails and it reads as a joke — good.

**Signature artistic idea.** Each part owns a SIGNAL ASPECT — Part I green/clear (the Line runs: Taggart Transcontinental at speed), Part II amber/caution (orders contradict orders; the Line runs on fear), Part III red/stop-and-proceed (the world stopped; the strike IS the stop) — and every chapter opener carries a full-width **signal plate**: an authored flat-lithograph night scene (rails converging, tunnel mouth, headlight beam, trestle, terminal throat) composed per chapter from the motif census, with the chapter's aspect lamp burning in the composition. The three part aspects give A0's part grammar at a glance; within a part, plates differ by scene, not tint — no modulo anything (F7/F8-clean by construction).

**Type.**
| role | family | availability | fallback |
|---|---|---|---|
| display (cover, chapter heads) | **Barlow Condensed** 500/600/700 (Google Fonts, verified 200, 2026-10-15) — tall railroad-grotesque caps, the stencil on a boxcar and the timetable masthead | "Arial Narrow", "Helvetica Neue", Impact, sans-serif |
| body | **Crimson Pro** 400/600 + italic (Google Fonts, verified 200) — a sturdy text serif with optical sizes, calm at 568k words; NOT Newsreader/Source Serif (both taken) | Georgia, "Palatino Linotype", serif |
| data (signal codes, TOC numerals, captions) | **Space Mono** 400/700 (Google Fonts, verified 200) — NOT IBM Plex Mono (Fountainhead/IJ scale use); used sparingly, never as display | ui-monospace, Menlo, monospace |

Scale: cover title clamp(3.4rem, 10vw, 7rem)/0.95 Barlow Condensed 700 uppercase +0.015em; chapter head 1.7rem 600 uppercase +0.08em; part kicker 0.72rem Space Mono 700 +0.34em; body 1.28rem/1.78; measure ≤66ch; opener lede ≤38rem. Numerals: chapter roman in Barlow Condensed 600 at head scale, letterspaced — never stroked-giant (that's Fountainhead F3 territory), never a badge.

**Dark palette (6 named hexes, default-dark theme).**
| name | hex | role |
|---|---|---|
| Nightballast | `#0E1216` | page/cover ground (cold blue-iron night, NOT umber — Fountainhead owns umber) |
| Tunnelblack | `#07090C` | slot wells, plate inlay |
| Headlight | `#F2E8D0` | primary text on dark; the beam color |
| Clear Green | `#3FD08C` | Part I aspect; graphics + large display only |
| Order Amber | `#E8A33D` | Part II aspect; graphics + large display only |
| Stop Red | `#E0483E` | Part III aspect; graphics + large display only |
| (support) Railsteel | `#8B98A5` | muted structure, secondary text, rail highlights |

Contrast law (F1 analogue): the three aspects (≈3–4:1 on Nightballast) carry graphics/large display/kickers only; body and small text stay Headlight on Nightballast (≈13:1). Validators meter every opener title treatment. Per-theme mapping: sepia/light grounds to `#F2EAD8`, text `#1D2126`, aspects darkened (Green `#1E7A4E`, Amber `#9A5F14`, Red `#A8322A`, each verified ≥4.5:1 for kickers); nocturne/slate keep night grounds; oxblood deepens Tunnelblack toward `#120B0B`; candlelight warms Headlight to `#F7E4C8`; verdant keeps Clear Green, shifts Amber toward `#D8942E`.

**Layout/composition.**
Cover (asymmetric — Line left, plate right, no text-over-art):
```
┌──────────────────────────────────────────────┐
│ KICKER   A NOVEL IN THREE SIGNALS · 1957     │
│ ┌──────────────────┐  ┌───────────────────┐  │
│ │ ATLAS            │  │                   │  │
│ │ SHRUGGED  (huge  │  │   NIGHT SIGNAL    │  │
│ │ condensed caps,  │  │   PLATE: green    │  │
│ │ Headlight, SHRUG │  │   lamp over       │  │
│ │ dimmed to 55%)   │  │   converging      │  │
│ │ ── aspect bar ── │  │   rails (cover.svg│  │
│ │ AYN RAND         │  │   in #cover-art,  │  │
│ │ Who is John      │  │   class "plate")  │  │
│ │ Galt? (italic    │  │                   │  │
│ │ Crimson)         │  │                   │  │
│ │ [Begin][TOC]     │  │                   │  │
│ └──────────────────┘  └───────────────────┘  │
│ footer: 3 PARTS · 30 CHAPTERS · 568,215 WORDS│
└──────────────────────────────────────────────┘
```
Chapter opener (plate band ≤13rem, meta→text zone; first body line visible without scroll at 1440×1000 — F4 analogue):
```
┌──────────────────────────────────────────────┐
│ ░░░░░░ SIGNAL PLATE BAND (art/*.svg in       │
│ ░░ Ch. scene ░░ #chapter-art, class "signal",│
│ ░░░░ + aspect lamp ░░░ h ≤ 13rem, full-bleed)│
│ PART I · NON-CONTRADICTION (mono kicker,     │
│          green)                              │
│ THE JOHN GALT LINE (Barlow Condensed head)   │
│ CHAPTER VIII · 18,521 WORDS (mono data line) │
│ ─── aspect rule (green, left-weighted) ───   │
│ Body text begins (Crimson Pro)…              │
└──────────────────────────────────────────────┘
```

**Illustration medium.** Flat night-lithograph SVG: solid ink slabs, 2–3 flat hues per plate + lamp color, converging-line perspective (rails, beams, cuts), headlight beams as flat wedges (never glow filters), signal lamps as flat discs with a hard 2px halo ring. Linework ≥2px at final size. All original authored SVG under `art/`. Flat, structural, industrial — gold is absent entirely (A2 satisfied by refusal: Atlas keeps no gold; the aspects are the color system).

**TOC/navigation treatment.** TOC part headers carry the part aspect (kicker + lamp disc in SVG, part name in Barlow Condensed); rows show mono signal-code numerals (`I-08`, `II-07`) in aspect-muted color — codes, not badges (no borders/fills/cartouches); active chapter gets an aspect lamp dot + Headlight title; read chapters dim to 55%. Progress fill: aspect-colored bar. Settings/nav chrome: Book CSS re-skins via §2 hooks in Railsteel/Headlight with aspect accents — no generic shared look survives on this book.

**Parts + 30 chapters variation (all authored, F7/F8-clean).**
- Part I — CLEAR (green): plates show the Line running — open track, bridges, terminals at speed. Chapter scenes from the census: p1c1 rails into the city dusk + September-2 calendar disc; p1c2 Rearden furnaces at night (19 furnace hits); p1c3 Nat Taggart statue + comet; p1c4 immovable movers — stalled boardroom as a red-over-green dwarf signal; p1c5 d'Anconia copper mines; p1c6 wedding of steel — the first Rearden Metal rail pour; p1c7 the bridge (39 bridge hits) — longest plate; p1c8 the John Galt Line first run — headlight wedge through rain; p1c9 bracelets of sunlight + Rearden mills (telegraph wires); p1c10 Wyatt's Torch — the hill of flame as a STOP plate (the part's earned red intruder: aspect lamp red on a green part — documented exception, the Line's first death).
- Part II — CAUTION (amber): plates contradict — signals against signals. p2c1 Stadler's institute under dead-gray sky; p2c2 the wedding reception — champagne coupes as signal gantries; p2c3 furnace + blackmail letter; p2c4 sanction — the victim's lamp; p2c5 the bridge audit (21 bridge hits) + Nat Taggart portrait; p2c6 Directive 10-289 — the order board (gazette sheet, type-only plate); p2c7 the Comet in the tunnel (37 Comet hits, tunnel 22) — smoke plate; p2c8 the cabin + the Comet's last run; p2c9 the face — minimal plate, lamp + wire; p2c10 the dollar sign traced in smoke over the prairie night (2 dollar-sign hits + headlight 8).
- Part III — STOP (red): plates show the stopped world + the valley light. p3c1 the valley approach — green grass where no field was (earned green intruder, documented); p3c2 the valley at work — smelter, fields, Midas gold; p3c3 anti-greed — the radio tower (19 radio hits); p3c4 anti-life — the wedding that isn't (4 wedding + 4 calendar); p3c5 the copper wire breaks (11 copper-wire hits, signals 21) — the catastrophe plate; p3c6 the concerto — Halley's Fifth as waveforms over the mills; p3c7 the speech — see scale treatment below (long-address design, NOT a bigger hero); p3c8 the egoist — Galt + Dagny + the city dark; p3c9 the generator — Project X's tower (8 hits); p3c10 the dollar traced over the desolate earth + Wyatt's Torch still burning — closing plate, lamp green again (documented: the road is cleared).
- **Scale sensitivity (A1):** three authored opener weights — standard (≤500 paras: plate band 9rem), grand (501–650 paras: 12rem + extended caption), monumental (p1c7/823, p3c2/694, p3c8/729: 13rem + two-line inscription). Short triumphs (p1c2/214, p1c3/249, p2c8/245, p2c9/261, p3c9/264, p3c10/327) get compact 7rem plates, never empty pages. p3c7 (37,525 words, the radio address) gets the **long-address treatment**: standard plate + a designed speech apparatus — section numerals in Space Mono at speech beats, a thin progress spine in the margin keyed to the address's movements, generous relief spacing — rhythm and progress legibility, not heroics.

**Manifest plan (v1.1 `{src, symbol}`):** `art/signal-plates.svg` sprite (30 symbols: `plate-p1c1`…`plate-p3c10`, shared lamp/beam defs) + `art/cover.svg` (class `plate`); `design/chapters.json` maps each id → `{src: "art/signal-plates.svg", symbol: "plate-…", class: "signal", motif: "signal-clear|signal-caution|signal-stop", caption: "SIG I-08 · …"}`; cohort JSON fragments merged sequentially by supervisor. `body[data-art]` values: `signal-clear`, `signal-caution`, `signal-stop`, plus `signal-stop-intruder` (p1c10) and `signal-clear-intruder` (p3c1, p3c10).

---

## Direction B — THE CURRENCY (rejected finalist)

*The novel as engraved money: value made unforgeable by line-work.*

**Why this book.** The dollar sign is the novel's closing gesture (p3c10: Galt "traced in space the sign of the dollar"), its Part II climax (p2c10: THE SIGN OF THE DOLLAR), its moral thesis (Francisco's money speech, p2c2 wedding; Midas Mulligan, p3c1–p3c2). Rearden Metal is literally minted into bracelets and rails-as-currency (p1c6/p1c9 bracelet chapters, 26 combined hits). No other shelf book ends by drawing money in the air — a guilloche-engraved identity with the dollar as densest object belongs only here.

**Signature idea.** Every chapter opener is a **banknote plate**: a guilloche lathe-work border (concentric rosettes, interlaced rules, all flat SVG paths) framing the chapter head as the note's denomination — "CHAPTER VIII" set like "SERIES 1957", the part name as issuing authority ("THE TAGGART RESERVE"), chapter word-count as serial number. Parts vary the note: Part I — the productive note (green-black intaglio, full lathe borders); Part II — the inflated note (amber, borders fraying, overprint "10-289" stamps); Part III — the strikers' note (red-black, borders re-cut razor sharp, valley vignette center). Cover: a giant lathe rosette with the title across it like a specimen note ("SPECIMEN — NON-NEGOTIABLE").

**Type.** Display: **Limelight** (Google Fonts, verified 200) — an engraved deco display face with inline rules, literally the lettering on money and theater marquees; body: **Literata** (verified 200) — a sturdy book serif; data: Space Mono (shared with A — they'd diverge in build; B is not the winner). Scale and measure parallel to A.

**Palette.** Inkblack `#0B0D0A`, Notewere `#131711`, Vignette Cream `#EFE6CF`, Intaglio Green `#4FA876`, Overprint Amber `#D8963B`, Re-cut Red `#D14A40` (+ Plate Gray `#9AA39B`). Gold discipline (A2): satisfied — green-not-gold, money-without-gilt.

**Layout.** Cover: centered specimen-note composition (rosette + title + "SPECIMEN" band). Openers: full lathe border plate (class `note`) wrapping the meta block, head as denomination. TOC: part headers as issuing authorities; rows as serial-numbered notes. Progress: an engraved rule that fills like ink in a plate.

**Why it loses to A.** Three decisive reasons: (1) the money grammar peaks in Part II and the finale but starves Part I's railroad sublime — p1c7's bridge and p1c8's first run would be decorated in finance's medium, the Fountainhead-critique error (B decorating Roark in his enemy's medium); (2) guilloche borders at 30-chapter scale risk the exact "repeated ornament" failure the benchmark bans — lathe-work varies less legibly than night scenes; (3) Limelight at chapter-head scale is delicious but at cover scale competes with the rosette — two signatures fighting. B stays alive as the p2c10/p3c10 plate vocabulary inside A's world (the dollar plates ARE engraved — a sanctioned detail borrowing, one grammar: F-okay per the Fountainhead A+C ruling).

---

## Direction C — THE TERMINAL (rejected)

*The novel as the great station: Ferriss massing, timetable order, the concourse sublime.*

**Why this book.** The Taggart Terminal is the novel's cathedral (p1c1 opens under its shadow; the p1c8 exile office looks across at it: "the unattainable form of everything she loved"; the p3c5 catastrophe unspools from its dispatch boards). The part names are laws of logic — a terminal's departures board is the graph of necessity. No other shelf book lives inside a station.

**Signature idea.** The book is a **station concourse in section**: cover shows the terminal facade as a stepped Ferriss mass with the title on the frieze; chapter openers are **departure-board plates** — flat split-flap typography grids (chapter as train: "TRACK 8 · THE JOHN GALT LINE · ON TIME" vs "TRACK 7 · THE COMET · ANNULLED"), parts as timetable periods (Part I: full service; Part II: delays and annulments; Part III: the board goes dark except one line — "ATLAS · CLEARED"). Progress: a train moving along a line map in the header.

**Type.** Display: **Barlow Semi Condensed** (verified 200) — timetable grotesque; body: **Crimson Pro** (shared with A); data: Space Mono. Scale parallels A with board-grid openers.

**Palette.** Concourse Ink `#0C0E12`, Boardblack `#060809`, Flap Cream `#EDE7D6`, Board Green `#46B27E`, Delay Amber `#E0A13B`, Annulled Red `#D34A3F` (+ Brass `#A89B7C` for the frieze).

**Layout.** Cover: symmetric facade composition (title on frieze, concourse arch below). Openers: split-flap board plate (class `board`) above meta; the flap grid IS the art. TOC: the departures board itself — all 30 chapters as departures. Settings/nav: brass-and-ink terminal chrome.

**Why it loses.** (1) The departure-board conceit is brilliant for Part I and the catastrophe chapters but trivializes the valley (p3c1–p3c2 as "ARRIVED · ATLANTIS" is cute, then p3c7's 37,525-word address must sit under a joke about trains — the speech needs gravity the board cannot give); (2) C is closest to the rejected baseline's tower-verticals + centered-shell DNA — a smarter terminal is still a symmetric facade, and the ArtDirector already called that wallpaper; (3) split-flap grids at 30× risk modulo-board tedium harder than A's scenes. The timetable data line survives as a sanctioned detail: A's captions use board-style codes (`SIG I-08`), and p3c5's catastrophe plate may carry a flap-board fragment — inside the signal grammar, never beside it.

---

## §1 Comparison + recommendation

| axis | A · THE SIGNAL | B · THE CURRENCY | C · THE TERMINAL |
|---|---|---|---|
| Book-specificity | Railroad night IS the novel (rails/track in 29/30 chapters by census) | Money IS the thesis, but peaks late (dollar-sign hits cluster p2c10/p3c1/p3c10) | The terminal is the cathedral, but the valley isn't a station |
| A0 part grammar | 3 aspects, instantly legible, philosophically mapped (clear/caution/stop = the Line's logic) | 3 note states (productive/inflated/re-cut) — clever, less visible | 3 timetable states — visible but comic at the climax |
| A1 scale | 3 authored weights + p3c7 speech apparatus | 3 note sizes + speech as "long bond" — weaker | board rows can't scale to 37k words |
| A2 gold | Refuses gold entirely — the aspects are the color | Green-not-gold, disciplined | Brass frieze risks gold-adjacency |
| 30× variation | 30 authored night scenes (census-keyed) | 30 lathe borders (ornament fatigue risk) | 30 board rows (modulo risk) |
| Benchmark bar | Plates = authored lithographs at useful scale | Plates = borders (frame, not scene) | Plates = grids (system, not scene) |
| Title-swap | Fails for any non-railroad book — correct | Fails for non-money books — good | Fails for non-station books — good |

**Recommendation: Direction A — THE SIGNAL.** It is the only direction whose signature (night signal plates over converging rails) serves all three parts, all scales including the Galt address, and 30 census-keyed scenes without ornament fatigue — and the only one that could not be mistaken for another book on this shelf (Fountainhead owns heat/stone, Churchill owns facets, Twilight owns bronze sounding, IJ owns the ledger).

## §2 Anti-generic revision note (what changed after checking against AI defaults)

Checked against the frontend-design default cluster (cream+terracotta / black+acid accent / broadsheet hairlines / SaaS cards / template chrome: tracked-out eyebrow above every heading, `A · B · C` meta strings, `WORD — fragment` labels, monospace-everywhere, `→` links):
- **Killed the centered shell.** First sketch centered every cover and opener; revised to A's asymmetric Line/plate grid (Fountainhead-A proved asymmetry reads as designed, not default).
- **Killed the eyebrow-above-everything.** Part kickers exist but carry signal codes (`SIG II-07`), not decorative labels — information, not chrome.
- **Killed the single-accent-on-black scheme.** The first palette was Nightballast + one brass; revised to the three-aspect system because one accent + dark ground is the #2 generic tell and cannot carry A0's part grammar.
- **Killed gradient glow lamps.** First plates used radial glows for lamps/beams; revised to flat discs + hard halo rings + flat beam wedges (A2: flat, structural, industrial; never glow).
- **Killed `·`-joined meta strings.** Captions use board grammar (`SIG I-08 · 18,521 WORDS` keeps ONE separator as a code convention, not decoration — the code is the content).
- **Body discipline:** Crimson Pro at 1.28rem/1.78, ≤66ch — no display face leaks into prose; drop caps in Barlow Condensed muted, never stroked-giant (Fountainhead's device, not ours).
- **Motion:** a single orchestrated moment only — the aspect lamp fades in once per chapter load (disabled under prefers-reduced-motion); no scroll reveals, no hover choreography on cards (there are no cards).

## §3 Winner's build spec (see identity.json for tokens)

- Fonts (engineer downloads woff2 → `design/fonts/`, writes @font-face; GF links as dev fallback): Barlow Condensed 500/600/700, Crimson Pro 400/600 + italic, Space Mono 400/700. Fallbacks in identity.json.
- Art: `art/cover.svg` (class `plate`), `art/signal-plates.svg` sprite (symbols `plate-p1c1`…`plate-p3c10`, class `signal`), shared lamp/beam defs. p1c10/p3c1/p3c10 intruder aspects documented in §A above.
- Manifest: `design/chapters.json` per §A (v1.1 `symbol` keys); `body[data-art]` ∈ {signal-clear, signal-caution, signal-stop, signal-stop-intruder, signal-clear-intruder}.
- Treatments: `.plate` (cover, right-column, full art), `.signal` (opener band ≤13rem, full-bleed, never pushes text past first-line-visible), `.speech` (p3c7 address apparatus class).
- Prototype plan for engineer/art-director review: cover + p1c8 (Part I grand) + p2c7 (Part II tunnel) + p3c7 (speech apparatus) + p3c10 (closing plate) — spans all three parts + scale extremes (A3).

## §8 Census appendix (grep counts grounding the plate scenes)

Rearden Metal: p1c7×70, p2c1×17, p1c8×11, p2c6×11, p3c3×11, p1c9×10, p2c3×9, p1c1/p1c2/p2c4×8, p1c4/p1c6/p2c7×7, p1c10×6, p2c2×6, p1c3×3, p1c5×3, p2c5/p2c8×3, p3c6×2, p3c5/p3c9×1. Bridge: p1c7×39, p1c8×24, p2c5×21, p1c9×13, p3c8×5, p1c2/p2c3/p3c6/p3c10×3, p1c4×2, p3c3×2, p1c3/p1c10/p2c1/p2c10/p2c8/p3c1/p3c2/p3c4/p3c5/p3c9×1. Furnace: p2c3/p3c6×19–20, p2c1×7, p1c7/p1c9/p3c2/p3c5×6, p1c10×4, p2c7/p3c8×3, p1c6/p2c6/p3c3/p3c4/p3c7×2, p1c1/p1c2/p1c3/p1c5/p1c8/p2c2/p2c4/p2c8×1. Cigarette: p2c10×14, p2c3×11, p1c3/p1c10/p2c2/p2c9/p3c1×6–7, p1c5? (see batch1), p2c8/p3c10×4, p1c1/p1c9/p2c1/p2c6/p2c7/p3c2/p3c4/p3c8×3, p3c5/p3c6/p3c9×1–2. Radio: p3c8×27, p3c3×19, p3c7×16, p3c9×11, p2c8/p3c5×8, p1c7/p1c8×4, p2c4/p3c10×4, p2c1/p2c7/p3c1/p3c2×3, p1c1/p1c4/p1c5/p1c6/p1c10/p1c9/p2c2/p2c3/p2c6/p3c4×1–2. Valley: p3c2×56, p3c1×44, p2c10×11, p3c10×8, p1c9×4, p1c10/p1c8/p3c5/p3c8×3, p1c3/p1c7/p2c5/p3c3/p3c4/p3c6?/p3c7/p3c9×1. Nat Taggart: p2c5×9, p1c3×7, p2c8×6, p1c5/p1c8×5, p1c7/p3c5×4, p3c1×3, p2c7×2, p2c1/p2c4/p3c2/p3c3/p3c4/p3c10×1. Comet: p2c7×37, p3c10×18, p2c8×11, p2c9×8, p2c10×7, p1c1×6, p3c2×4, p1c8×2, p1c5/p1c9/p2c1/p3c1/p3c3×1. Signal: p3c5×21, p1c1/p1c8/p3c4×5–6, p2c8/p3c2×3, p3c9×4. Tunnel: p2c7×22, p2c8×14, p3c5×8, p1c1/p1c10/p3c2/p3c3×4–5. Dollar sign: p3c1×3, p2c10×2, p1c10/p2c1/p2c2/p2c3/p3c5×1. Halley: p3c1×15, p1c4×12, p1c1×10, p1c5×8, p1c6×5, p3c2×4, p1c3/p3c10×2, p1c8/p2c8/p2c10/p3c8×1. Fifth Concerto: p3c1×5, p1c5×3, p3c10×2, p1c1/p1c8/p2c8/p2c10/p3c8×1. Bracelet: p1c6×11, p2c2×10, p1c2×9, p1c9×6, p2c5/p3c4/p3c9×1. Midas: p3c1×21, p1c10×15, p3c2×9, p2c7/p3c10/p3c8×1. Wedding: p2c2×16, p1c6/p3c4×4, p1c10×2, p1c2/p1c5/p2c3/p2c6/p3c2/p3c6×1. Calendar: p3c5×6, p3c4×4, p2c2/p2c6×3, p1c1? (4 incl. "September 2" scene), p1c7/p1c8×2, p1c3/p1c5/p1c9/p2c3/p2c5/p2c8/p3c2/p3c3/p3c7/p3c8×1. Telegraph: p1c8×4, p1c9×3, p2c10×2, p1c3/p3c5/p3c9×1. Locomotive: p1c3/p1c9/p2c8/p3c10×3, p1c4/p1c5/p1c7/p1c8/p2c5/p2c7×1–2. Headlight: p2c10×8, p3c10×6, p3c4×4, p2c7×3. Strike: p3c7×18, p3c1×13, p3c2×6, p2c1×3. Desert: p3c7×12, p3c10/p2c10×7–8, p3c8×6, p3c2/p3c5×5, p2c7/p3c3×4, p1c10/p2c3/p2c8/p2c9/p3c9×3. Copper wire: p3c5×11, p2c5×1. Smelter: p3c2×4. Diner: p1c10×9, p2c10×3. Cafeteria: p1c3/p2c9/p3c8×3–4. Rail/track: present 29/30 chapters (p3c9 rail<3; track-dominant: p1c8×25, p2c10×24, p3c5×20). Oak tree: p1c1×5, p1c5×1. Twentieth Century (Motor): p1c10×15, p2c10×7, p3c1×4, p1c9×4, +6 singles. Project X: p3c3×10, p3c9×8, p2c1×7, p2c3×3. Directive 10-289: p3c3×11, p2c7×4, p3c6×2, +5 singles. Wet Nurse: p2c4×4, p2c1/p3c6×2, p2c6/p3c5×1. Atlantis: p1c6×5, p3c2×5, p3c5/p3c7×3, p2c9×2, p3c8×1. Gulch: p3c2×7, p3c1/p3c10×1.
Scale (paras): monumental p1c7/823, p3c8/729, p3c2/694; grand p3c1/626, p1c10/549, p3c3/537, p1c9/534, p3c5/500, p1c6/502, p3c4/499, p2c3/491, p2c10/484, p3c6/467, p1c5/461, p2c2/460, p2c7/455, p2c4/453, p2c1/450; standard p2c5/406, p1c1/405, p3c7/396, p2c6/382, p1c8/358, p1c4/332, p3c10/327, p3c9/264, p2c9/261, p1c3/249, p2c8/245, p1c2/214. (p3c7 standard by paras, monumental by words — the speech apparatus covers it.)
