# Atlas Shrugged — ART-DIRECTION.md (BINDING build spec)

Owner: SupAtlas-2 (book supervisor). Status: **FINAL — Direction A (THE SIGNAL),
ArtDirector APPROVED 2026-10-15** (`.omp/design/critiques/atlas-shrugged.md`;
binding conditions AT1–AT9 incorporated below; FinalValidator R1 endorsement +
R2 conditions in `.omp/design/evidence/integration/prototype-reviews/atlas-shrugged/REVIEW-R1.md`,
incorporated as RV1–RV3).
Generator lock: this file's presence means `scripts/generate_book_pages.py`
must never regenerate this book (READER-CONTRACT v1.1 §10).

Book facts (re-read from `data/toc.json` 2026-10-15): **30 chapters**,
p1c1–p1c10 / p2c1–p2c10 / p3c1–p3c10, all IDs stable. Three parts:
I ONE · NON-CONTRADICTION, II TWO · EITHER-OR, III THREE · A IS A.
568,215 words — the longest book in the library. All chapter IDs, titles,
word counts, and para counts below verified against TOC + chapter JSON;
no invented IDs.
`design/identity.json` parses (AT8 satisfied — supervisor verified with
`python -m json.tool` 2026-10-15 after the designer's repair round).
## 1a. Binding amendments (supervisor rulings, text-verified 2026-10-15)

Part I scene corrections (cohort evidence in `design/part-i.json`
identity_flags; supervisor verified every cite against chapter JSON):
p1c3 plate is the concourse section + Nat Taggart statue — NO Comet
(0 text hits); p1c4 dwarf shows UPPER DARK + LOWER GREEN — NO lit red
(AT2: a third red use fails review); p1c5 plate is the Cleveland foundry
sign-board (:207) — NO mines (exhausted frauds :5), NO copper-orange;
p1c6 plate is the anniversary-party gantry + single end-lamp — NO rail
pour (no such scene; the 3 'pour' hits are metaphorical/incidental);
p1c8 plate is the ribbon-cut shield (:253–259) — NO rain (all 6 rain hits
are HQ-night scenes, none at the ceremony); p1c9 plate is the motor
remnant + manuscript (:484–488) — NO mills. Text beats the sketch.
p1c8 scale CONFIRMED standard 9rem (358 paras; p1c7 owns monumental).
Sprite mechanics: cohorts author fragment files
`art/part-{i,ii,iii}-frag.svg` (10 symbols each, disjoint ids); the
supervisor merges the three fragments SEQUENTIALLY into the canon
`art/signal-plates.svg` (sole writer — no concurrent-write collision).
Part III scene corrections (cohort evidence in `design/part-iii.json`;
supervisor verified every cite against chapter JSON): p3c6 plate is the
furnace pour glare + two-gun rooftop sentinel — NO waveforms (ZERO music
terms in the chapter; the lone 'note' hit is 'note of amusement'; Halley's
music stays verbal in the title only); p3c4 plate anchors to the calendar
in letters of blood (:479, verbatim) + the parapet over black water
(:495–498) — NOT the ballroom; p3c9 plate is the concrete cube + dead
lamp + the living/dead generator pair (Project F cellar :212–214, :263) —
NO tower (0 text hits; Project X is Stadler's first-half arc). p3c3
CONFIRMED: radio tower anchors the plate, glass cage (:427) as body-zone
transmitted-text device. Text beats the sketch.
Fragment mechanics (all cohorts): cohorts author
`art/part-{i,ii,iii}-frag.svg` (10 symbols each, disjoint ids
plate-pXcY); manifest fragments name the CANON `art/signal-plates.svg`
src so the supervisor's sequential merge is mechanical.
Prototype plates (cover + p1c8/p2c7/p3c7/p3c10) are supervisor-authored;
cohorts build ALL of their symbols fresh including prototype-overlapping
chapters — the prototype proves the grammar, cohorts deliver the canon.

## 1. Chosen direction — THE SIGNAL

*The novel as a night railroad run: every chapter is a signal aspect on the Line.*

Rails/track appear in 29/30 chapters by census; the three signal aspects map
the parts' dramatic logic at a glance — Part I CLEAR (the Line runs), Part II
CAUTION (orders contradict orders; the Line runs on fear), Part III STOP
(the world stopped; the strike IS the stop). Every chapter opener carries a
full-width **signal plate**: an authored flat-lithograph night scene composed
per chapter from the motif census, with the chapter's aspect lamp burning in
the composition. Within a part, plates differ by scene, never by tint.

Title-swap test: put another novel's title on a green-signal plate over
converging rails and it reads as a joke. No other shelf book is a railroad
novel with a three-part moral descent. (Fountainhead owns heat/stone,
Churchill owns facets, Twilight owns bronze sounding, IJ owns the ledger.)

Rejected: Direction B "THE CURRENCY" (money grammar starves Part I's railroad
sublime; 30 lathe borders risk ornament fatigue; Limelight fights the rosette
at cover scale — survives ONLY as Intaglio-Green dollar line-work detail
inside A's p2c10/p3c10 plates, AT4-compliant, one grammar); Direction C
"THE TERMINAL" (board conceit trivializes the valley + Galt address; symmetric
facade sits closest to rejected baseline DNA; modulo-board tedium risk —
survives ONLY as board-style caption codes `SIG I-08` + one flap-board
fragment inside p3c5's catastrophe plate, never beside the signal grammar).

Full record: `design/directions.md` (7 cited references, 3 full directions,
comparison table, anti-generic revision note, grep census appendix) +
`design/identity.json` (VALID — parses, verified 2026-10-15 by supervisor;
winner token grammar) + `design/prototype.html` (rendered sketches
#dir-a/#dir-b/#dir-c, viewed by designer AND supervisor at 1440px).

## 2. Tokens (dark-first; all 8 reader themes keep working)

```css
--as-night:   #0E1216;  /* Nightballast — page/cover ground (cold blue-iron, NOT umber) */
--as-tunnel:  #07090C;  /* Tunnelblack — slot wells, plate inlay */
--as-beam:    #F2E8D0;  /* Headlight — primary text, beam color (15.4:1 on Nightballast) */
--as-clear:   #3FD08C;  /* Clear Green — Part I aspect (9.5:1; graphics/large-display/kickers ONLY) */
--as-caution: #E8A33D;  /* Order Amber — Part II aspect (8.7:1; same law) */
--as-stop:    #E0483E;  /* Stop Red — Part III aspect (4.6:1; same law, tightest — meter it) */
--as-rail:    #8B98A5;  /* Railsteel — muted structure, secondary text (6.4:1) */
```

`--accent` maps to the active part aspect via `body[data-part-id]`; `--copper`
maps to Railsteel. Contrast law (AT1): aspects carry lamps/plates/rules and
kickers ≥0.72rem Space Mono 700 tracked +0.34em ONLY — never body or small
text. Validators meter every opener's title treatment. Per-theme mapping:
sepia/light grounds to `#F2EAD8`, text `#1D2126`, aspects darkened (Green
`#1E7A4E`, Amber `#9A5F14`, Red `#A8322A`, engineer verifies ≥4.5:1 for
kickers); nocturne/slate keep night grounds; oxblood deepens Tunnelblack
toward `#120B0B`; candlelight warms Headlight to `#F7E4C8`; verdant keeps
Clear Green, shifts Amber toward `#D8942E`.

**Gold refusal is total (AT4).** No gold/brass/gilt anywhere in art, type, or
chrome. C's Brass frieze stays dead. Dollar plates use Intaglio Green
line-work, never gilt. Midas/gold chapter content (p3c2 "Midas gold") is
rendered in flat amber-aspect mass, never metallic gold.

## 3. Type (voice: the timetable, not the furnace)

| role | family | weights | fallback |
|---|---|---|---|
| display (cover, chapter heads, part names) | **Barlow Condensed** | 500/600/700 | "Arial Narrow", "Helvetica Neue", Impact, sans-serif |
| body (chapter text) | **Crimson Pro** | 400/600 + italic | Georgia, "Palatino Linotype", serif |
| data (signal codes, TOC numerals, captions, kickers) | **Space Mono** | 400/700 | ui-monospace, Menlo, monospace |

All three verified HTTP 200 via Google Fonts CSS API 2026-10-15 (designer).
Engineer downloads woff2 → `design/fonts/` + writes @font-face; GF links are
dev fallback only. System fallbacks REQUIRED.

Scale: cover title clamp(3.4rem, 10vw, 7rem)/0.95, 700 uppercase +0.015em;
chapter head 1.7rem 600 uppercase +0.08em; part kicker 0.72rem Space Mono 700
+0.34em uppercase; body 1.28rem/1.78; measure ≤66ch; opener lede ≤38rem.
Chapter romans in Barlow Condensed 600 at head scale, letterspaced — never
stroked-giant (Fountainhead F3 territory), never a badge (no
borders/fills/cartouches).

AT7 confusion check (Barlow ≠ Oswald): Atlas Barlow reads TIMETABLE —
letterspaced kickers, signal codes (`SIG I-08`), board captions, modest head
scale — vs Fountainhead Oswald INDUSTRIAL (heat, chainage, 5.2–6.4rem
stroked-giant numerals). Prototype review compares the two books' openers
side by side; if a reader confuses them, Atlas differentiates further
(spacing/weight/case shifts, never a new face).

## 4. Opener grammar (every chapter; the hang is shared, the art varies)

1. `figure#chapter-art` signal-plate band: full-bleed authored night scene,
   height by authored scale weight (standard 9rem / grand 12rem + extended
   caption / monumental 13rem + two-line inscription / compact 7rem short
   triumphs — see §7). NEVER pushes text down: first body line visible
   without scroll at 1440×1000 for standard openers (F4 law).
2. Part kicker `PART I · NON-CONTRADICTION` in mono, aspect color, as a
   signal code — information, not chrome.
3. Chapter head (Barlow Condensed) + data line (`CHAPTER VIII · 18,521
   WORDS`, mono) + aspect rule, left-weighted.
4. Body begins: calm Crimson Pro; drop cap in Barlow Condensed 600 muted
   aspect (never stroked-giant); chapter-end mark via book CSS — aspect
   diamond, SVG or explicit-font glyph, never tofu.
5. No cards, no hairline boxes, no gradient washes, no eyebrow-above-
   everything, no `A · B · C` meta strings (captions keep ONE separator as
   board-code convention — the code is the content), no `→` links.
   Baseline pseudo-ornaments (rail-ties, split-bar, ember-bar, 3-cycle
   numeral tints, glyph end-marks) are DELETED, not restyled.
6. Motion: one orchestrated moment only — the aspect lamp fades in once
   per chapter load; disabled under prefers-reduced-motion. No scroll
   reveals, no hover choreography.

## 5. Illustration medium (AT3)

Flat night-lithograph SVG: solid ink slabs, 2–3 flat hues per plate + lamp
color, converging-line perspective (rails, beams, cuts), headlight beams as
flat wedges (NEVER glow filters), signal lamps as flat discs with a hard 2px
halo ring (NEVER radial glow — a single radial-glow lamp fails review).
Linework ≥2px at final size. All original authored SVG under `art/`.

## 6. Per-part systems (A0: the part system IS the book)

| part | aspect (`motif` → `body[data-art]`) | lamp | plate world |
|---|---|---|---|
| I ONE · NON-CONTRADICTION | `signal-clear` | Clear Green | the Line running — open track, bridges, terminals at speed |
| II TWO · EITHER-OR | `signal-caution` | Order Amber | signals against signals — orders contradict orders |
| III THREE · A IS A | `signal-stop` | Stop Red | the stopped world + the valley light |

**Intruder aspects (AT2 — documented exceptions, exactly two kinds, three
chapters; any third intruder fails review):** p1c10 `signal-stop-intruder`
(red lamp on a green part — the Line's first death, Wyatt's Torch); p3c1 +
p3c10 `signal-clear-intruder` (green valley light inside the stopped world;
p3c10's lamp burns green again — the road is cleared). Part II has NO
intruders (p2c7's catastrophe stays amber smoke, never red flame; p2c10's
dollar is flat amber line-work, never gold).

Cover: asymmetric grid — left column kicker/title/aspect-bar/author/tagline/
actions; right column `cover.svg` night signal plate (class `plate`, green
lamp over converging rails, NO text in art). No text-over-art anywhere.
TOC drawer: part headers carry aspect kicker + SVG lamp disc + Barlow
Condensed part name; rows show mono signal-code numerals (`I-08`, `II-07`)
in aspect-muted color — codes, not badges; active chapter gets aspect lamp
dot + Headlight title; read chapters dim to 55%. Progress fill:
aspect-colored bar. Settings/nav chrome re-skinned via §2 hooks in
Railsteel/Headlight + aspect accents — no generic shared look survives.

## 7. Chapter map (all 30; cohort ownership; scale weights AUTHORED per chapter, AT6)
+
Scale law (AT6): weights assigned below from paras + words + content — never
by threshold formula alone. p3c7 (396 paras / 37,525 words) proves formulas
lie: standard plate + speech apparatus, not a monumental hero.
+
| id | title | words/paras | weight | motif → `data-art` | plate scene (authored) | cohort |
|---|---|---|---|---|---|---|
| p1c1 | THE THEME | 10,733 / 405 | standard 9rem | signal-clear | rails into city dusk + September-2 calendar disc | Part I |
| p1c2 | THE CHAIN | 7,990 / 214 | compact 7rem | signal-clear | Rearden furnaces at night (furnace row, one tap-hole stream) | Part I |
| p1c3 | THE TOP AND THE BOTTOM | 9,292 / 249 | compact 7rem | signal-clear | Nat Taggart statue + the Comet's headlight below | Part I |
| p1c4 | THE IMMOVABLE MOVERS | 11,463 / 332 | standard 9rem | signal-clear | stalled boardroom as dwarf signal, red-over-green | Part I |
| p1c5 | THE CLIMAX OF THE D'ANCONIAS | 18,342 / 461 | grand 12rem | signal-clear | d'Anconia copper mines at night, headframe + lamp row | Part I |
| p1c6 | THE NON-COMMERCIAL | 16,270 / 502 | grand 12rem | signal-clear | wedding of steel — first Rearden Metal rail pour | Part I |
| p1c7 | THE EXPLOITERS AND THE EXPLOITED | 25,618 / 823 | monumental 13rem + inscription | signal-clear | the bridge — longest plate, truss + arch over the gorge | Part I |
| p1c8 | THE JOHN GALT LINE | 18,521 / 358 | standard 9rem | signal-clear | first run — headlight wedge through rain (PROTOTYPE) | Part I |
| p1c9 | THE SACRED AND THE PROFANE | 18,918 / 534 | grand 12rem | signal-clear | bracelets of sunlight + Rearden mills, telegraph wires | Part I |
| p1c10 | WYATT'S TORCH | 21,772 / 549 | grand 12rem | signal-stop-intruder | hill of flame as STOP plate (INTRUDER #1, AT2) | Part I |
| p2c1 | THE MAN WHO BELONGED ON EARTH | 19,954 / 450 | grand 12rem | signal-caution | institute slab on dead hills, one amber window, river line | Part II |
| p2c2 | THE ARISTOCRACY OF PULL | 21,772 / 460 | grand 12rem | signal-caution | September-2 calendar disc over rooftops + ballroom gantry | Part II |
| p2c3 | WHITE BLACKMAIL | 18,692 / 491 | grand 12rem | signal-caution | furnace blowout — flat white wedge, two figures | Part II |
| p2c4 | THE SANCTION OF THE VICTIM | 16,908 / 453 | grand 12rem | signal-caution | stripped bench-table under one lamp, standing figure | Part II |
| p2c5 | ACCOUNT OVERDRAWN | 17,707 / 406 | standard 9rem | signal-caution | night truss span + amber lamp, cracked joint plate | Part II |
| p2c6 | MIRACLE METAL | 17,002 / 382 | standard 9rem | signal-caution | order board w/ drawn '10-289' numerals, type-only plate | Part II |
| p2c7 | THE MORATORIUM ON BRAINS | 20,134 / 455 | grand 12rem | signal-caution | tunnel mouth + portal lamp + smoke slab (PROTOTYPE) | Part II |
| p2c8 | BY OUR LOVE | 12,510 / 245 | compact 7rem | signal-caution | cabin window + radio wire to stars + grade curve | Part II |
| p2c9 | THE FACE WITHOUT PAIN OR FEAR OR GUILT | 10,401 / 261 | compact 7rem | signal-caution | minimal plate — hanging lamp + smoke column + two cups | Part II |
| p2c10 | THE SIGN OF THE DOLLAR | 21,590 / 484 | grand 12rem | signal-caution | prairie night + headlight wedge + dollar in amber smoke-line | Part II |
| p3c1 | ATLANTIS | 25,360 / 626 | grand 12rem | signal-clear-intruder | valley approach — green grass where no field was (INTRUDER #2) | Part III |
| p3c2 | THE UTOPIA OF GREED | 32,088 / 694 | monumental 13rem + inscription | signal-stop | valley at work — smelter, fields, amber mass (never gilt) | Part III |
| p3c3 | ANTI-GREED | 22,928 / 537 | grand 12rem | signal-stop | the radio tower, red lamp, dead air | Part III |
| p3c4 | ANTI-LIFE | 22,234 / 499 | grand 12rem | signal-stop | the wedding that isn't — dark ballroom, one red lamp | Part III |
| p3c5 | THEIR BROTHERS' KEEPERS | 27,275 / 500 | grand 12rem | signal-stop | the copper wire breaks — catastrophe plate + flap fragment | Part III |
| p3c6 | THE CONCERTO OF DELIVERANCE | 18,211 / 467 | grand 12rem | signal-stop | Halley's Fifth as waveforms over the mills | Part III |
| p3c7 | "THIS IS JOHN GALT SPEAKING" | 37,525 / 396 | speech apparatus (§9) | signal-stop | standard plate + speech apparatus, NOT a bigger hero (PROTOTYPE) | Part III |
| p3c8 | THE EGOIST | 26,637 / 729 | monumental 13rem + inscription | signal-stop | Galt + Dagny + the dark city, red lamp horizon | Part III |
| p3c9 | THE GENERATOR | 10,122 / 264 | compact 7rem | signal-stop | Project X tower, dead lamp | Part III |
| p3c10 | IN THE NAME OF THE BEST WITHIN US | 10,246 / 327 | compact 7rem | signal-clear-intruder | dollar traced over earth + Torch still burning (PROTOTYPE) | Part III |
+
Neighboring chapters share grammar, never pixels (RV2): within a part, no
two adjacent plates share composition (gantry/portal/trestle/yard/beam
vocabulary rotates by authored assignment in cohort JSON — never by
index formula, F7/F8-clean).
+
## 8. Manifest schema (`design/chapters.json`, READER-CONTRACT v1.1 §4 + A.2)
+
```jsonc
{ "version": 1,
+  "cover":   { "src": "art/cover.svg", "class": "plate" },
+  "default": { "class": "signal" },
+  "chapters": {
+    "p1c8": { "src": "art/signal-plates.svg", "symbol": "plate-p1c8",
+              "class": "signal", "motif": "signal-clear",
+              "caption": "SIG I-08 · 18521 WORDS" },
+    "p3c7": { "src": "art/signal-plates.svg", "symbol": "plate-p3c7",
+              "class": "signal speech", "motif": "signal-stop",
+              "caption": "SIG III-07 · 37525 WORDS · THE ADDRESS" } } }
```
+
Rules: explicit `{src, symbol}` keys, never fragment URLs. Caption code:
`SIG {part-roman}-{chapter-2digit} · {words} WORDS` (+ earned suffix only:
p3c7 `· THE ADDRESS`). `motif` sets `body[data-art]` ∈ {signal-clear,
signal-caution, signal-stop, signal-stop-intruder, signal-clear-intruder}.
Cohort leads author `design/part-{i,ii,iii}.json` fragments (v1.1 keys);
supervisor merges SEQUENTIALLY into `design/chapters.json`.
+
## 9. p3c7 long-address treatment (AT5 + RV1)
+
Standard plate (NOT a bigger hero) + designed speech apparatus: section
numerals in Space Mono at the address's speech beats; a thin progress spine
in the margin keyed to the address's movements; generous relief spacing for
rhythm and progress legibility across 37,525 words. Prototype MUST show a
mid-address spread, not just the opener. Treatment class: `signal speech`.
+
## 10. Prototype scope → R2 (AT9 + RV3)
+
Wired prototype (real page + manifest + real chapters, served from source
or :8000 — stated in the review request): cover + p1c8 (grand Line chapter)
+ p2c7 (tunnel catastrophe) + p3c7 (opener + MID-ADDRESS spread) + p3c10
(closing plate) at 1440×1000, 820×1180, 390×844, plus the TOC drawer
showing the signal system across all 30 rows. Benchmark P11 applies:
side-by-side with the homepage. Cohorts build ONLY after prototype review
(ArtDirector order). Supervisor authors cover.svg + the 5 prototype plates
directly if the prototype engineer path is slower than the review clock.
+
## 11. Asset list (authored, status)
+
- `art/cover.svg` — night signal plate, green lamp over converging rails (PLANNED, prototype)
- `art/signal-plates.svg` — 30 symbols `plate-p1c1`…`plate-p3c10` + shared lamp/beam defs (PLANNED; prototype ships 5 symbols, cohorts complete)
- `design/chapters.json` — merged manifest (PLANNED; supervisor merges sequentially)
- `design/fonts/` — barlow-condensed / crimson-pro / space-mono woff2 + @font-face (PLANNED)
- `design/part-{i,ii,iii}.json` — cohort fragments (part-ii Phase 1 draft FINAL; part-i/iii in flight)
- `design/part-{i,ii,iii}.css` — cohort treatments (Phase 2, post-prototype-review)
- `theme.css` + `index.html` — supervisor integrates sequentially (sole writer)
+
## 12. Open questions for prototype (remaining after verdict)
+
1. Stop Red 4.63:1 on Nightballast — tightest aspect; prototype meters every red-kicker usage (AT1).
2. AT7 side-by-side vs Fountainhead Oswald at prototype review.
3. Sepia/light aspect darkening values — engineer verifies ≥4.5:1 on paper grounds.
4. RESOLVED by ArtDirector: A wins; B/C buried as details; exactly two intruder kinds; gold refusal total; formulas lie (AT6).