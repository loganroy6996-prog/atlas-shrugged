# Library entrance — art direction (HomeEngineer)

Product: a private literary library — 13 long volumes (Rand, Nietzsche ×5,
Heidegger, Wallace, Rubin, Moldbug ×2, Davidson/Rees-Mogg), read in the
browser. Audience: the owner, a serious dark-theme reader. Job of this screen:
choose what to read next, resume what is open, and feel the collection's
weight. It is an entrance, not a dashboard.

Baseline diagnosis (evidence: `evidence/before-*.webp`, 13 cards, Ink theme):
the page is competent but interchangeable — identical SaaS cards differentiated
only by a tint variable and a giant background initial; the theme rail is a
cramped single-row pill strip that truncates names to dots on phones; the
header stacks three generic devices (tracked-out eyebrow, accent-word italic
headline, diamond rule). Nothing about it belongs to *these books*. The
redesign keeps what works (dark-first, catalog-driven grid, search, sort,
continue shelf, persisted theme key) and replaces the visual system.

## Direction 1 — The Collector's Cabinet (shelf skeuomorphism)

Books as clothbound spines on a wooden shelf wall; hover pulls a volume off
the shelf. Type: engraved small caps + Caslon. Palette: walnut `#3a2a1c`,
brass `#c9963c`, felt green `#1e3a2a`, paper `#efe3cb`. Layout: horizontal
shelf rows grouped by affinity, spine-out. Signature: 3D-ish spine shading and
foil-stamp motifs.

```
┌──────────────────────────────────────────────┐
│ masthead                                     │
│ ┌──┬──┬──┬──┬──┐  THE NIETZSCHE SHELF        │
│ │  │  │  │  │  │ /wooden ledge/              │
│ ┌──┬──┐  NOVELS                               │
│ │  │  │ /ledge/                              │
└──────────────────────────────────────────────┘
```

Verdict: evocative, but spine-out browsing hides titles, fights search/sort,
and turns 13 very different books into one furniture metaphor. The user asked
for *book-specific identities*, not one room. Rejected as the lead.

## Direction 2 — Gallery of First Lines (typography-only editorial)

No pictures: each book is a full-width typographic spread — title set huge in
a per-book treatment, its epigraph or first line as the hook, alternating
left/right composition down a long editorial scroll. Type: one expressive
serif at many sizes. Signature: pure typography, drop caps, marginal folios.

Verdict: beautiful in principle, but 13 full spreads make a fatiguing scroll,
progress/search chrome has nowhere natural to live, and the brief explicitly
demands *more art*. Type alone was already tried (giant initials). Rejected.

## Direction 3 — The Night Gallery (CHOSEN, recommended)

A dark gallery wall hung with thirteen authored cover plates. The chrome
recedes to warm-neutral near-black; every drop of color comes from original,
book-specific SVG artwork at a useful scale. Each book reads as a *volume*:
cover plate, title, author, tagline, blurb, real catalog facts, progress. One
featured volume opens the page as a large editorial spread. Shelves group the
rest by affinity; search and sort cut across.

Why this belongs to this collection: the thirteen plates span rail yards,
blueprints, lightning, alpine dusk, sea waves, hammer strikes, magma strata,
pine forests, tennis diagrams, searchlights, broadsheets, cathedral arches,
and meridian globes — imagery drawn from each book's own world. Swap any two
titles and the page feels wrong. That is the test, and only this direction
passes it while remaining browsable, searchable, and responsive.

```
┌──────────────────────────────────────────────────┐
│ brand                    [ Reading light: Ink ▾ ] │  ← spacious menu
│                                                  │
│  A private library                               │
│  Thirteen long volumes, set for the long read.   │  ← left-aligned masthead
│  13 volumes · 2.48M words · 942 chapters         │
│  ┌────────────────────┬────────────────────────┐ │
│  │                    │  FEATURED VOLUME       │ │  ← one editorial spread
│  │   cover plate      │  Title / author        │ │
│  │   (authored SVG)   │  tagline · blurb · Open│ │
│  └────────────────────┴────────────────────────┘ │
│  Continue reading  [thumb] [thumb]               │  ← dynamic shelf
│  [search........] [shelf ▾] [sort ▾]             │  ← toolbar
│  THE NIETZSCHE SHELF                             │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │
│  │ plate  │ │ plate  │ │ plate  │ │ plate  │ …   │  ← volume grid
│  │ title… │ │        │ │        │ │        │     │
│  └────────┘ └────────┘ └────────┘ └────────┘     │
│  NOVELS / PORTRAITS & POLEMICS …                 │
│  colophon footer                                 │
└──────────────────────────────────────────────────┘
```

Left-aligned throughout; the old centered eyebrow/headline/rule stack is gone.

## Chosen system

Type: **Fraunces** (display: masthead, volume titles, featured title, numerals
as display) + **DM Sans** (UI, body, metadata — already loaded, stays quiet).
Fraunces' old-style-to-expressive range suits 1883–2009 literature; its WONK/
softness is used sparingly (featured title only). One scale: masthead
clamp(2.6–4.2rem), featured clamp(2–3.2rem), volume 1.45rem, body 0.95rem,
micro 0.72rem tracked +0.14em for real data labels only (years, counts —
never decorative eyebrows). Line length under 60ch for blurbs. Loaded from
Google Fonts with Georgia/system fallbacks; no layout shift without it.

Chrome palette (Ink default; other 7 theme token blocks are preserved
verbatim so every option keeps working — only components are restyled):
`--bg` #0B0A08 paper-black · panel #14110D · line rgba(236,229,216,.11) ·
`--text` #ECE5D8 · muted #A79B85 · faint #6E6455 · accent gold #D8B36A ·
on-accent #1B1408. Cover plates carry their own fixed jacket palettes (real
book jackets don't change with room lighting, so plates stay constant across
themes — this also keeps light Vellum elegant: dark plates float on paper).

Signature: the thirteen authored SVG cover plates (800×1000 viewBox,
portrait 4:5, shown ~340–380px wide) plus the featured spread. One
orchestrated load: plates fade/rise in a short stagger, once. Hover: plate
scales 1.02 with a spine-light sweep; focus-visible gets a 2px plate-colored
ring. Reduced motion: everything cuts instantly.

Final shelves (H5): *Novels of ideas* (Atlas Shrugged, The Fountainhead,
Infinite Jest) · *Philosophy* (Beyond Good and Evil, Thus Spoke Zarathustra,
The Gay Science, Twilight of the Idols, The Will to Power, Being and Time) ·
*Portraits & polemics* (Forty Ways to Look at Churchill, An Open Letter, A
Gentle Introduction, The Sovereign Individual). Derived in JS from
slug — no catalog change required. Shelf jump chips above the grid; text
search + author/mood match + sort (featured, title, author, newest, oldest,
longest, shortest) filter across shelves; sort and shelf persist in
localStorage; `/` focuses search; empty state offers reset.

Theme selection ("Reading light"): the cramped pill rail is replaced by one
menu button showing the current theme's swatch + full name, opening a
spacious panel listing all 9 options as large rows (swatch disc, full name,
one-line mood). Full keyboard support (arrows, Home/End, Enter, Escape),
aria-expanded, persists `literary-library-theme`, honors stored `auto`
(OS-tracked), dark-first default. Every option must visibly re-theme the
page; verified by screenshot per theme.

## Cover plate concepts (all original hand-authored SVG, no text in art)

1. atlas-shrugged — brass turbine rotor + converging night rail lines to a
   vanishing point, riveted iron frame. Brass on iron-black.
2. the-fountainhead — one unbroken blueprint line rising into a cantilevered
   tower over granite; cool steel-blue on charcoal.
3. beyond-good-and-evil — violet lightning splitting a marble column, sparks.
   Indigo night, violet bolt, fractured stone.
4. thus-spoke-zarathustra — layered alpine silhouettes, huge amber sun disc, a
   circling eagle path. Amber on umber.
5. gay-science — rhythmic dancing wave arcs, sun-over-sea, gull marks. Azure,
   cobalt, foam. Joyful.
6. twilight-of-the-idols — bronze hammer mid-strike, cracking idol silhouette,
   flying shards. Ash-grey, struck bronze, ember cracks.
7. will-to-power — crimson geological strata split by a white-hot fissure.
   Basalt, crimson bands, magma seam.
8. being-and-time — Black Forest pine strokes dissolving into clock rings and
   topo contours; a winding path. Green-black, bone, moss.
9. infinite-jest — diagrammatic tennis court in chalk on green, a looping ball
   trajectory, radiating entertainment lines. Chartreuse, court green, chalk.
10. forty-ways-to-look-at-churchill — two searchlight beams forming a V over a
    blacked-out rooftop line, barrage-balloon dots. Brass, khaki, ink.
11. open-letter — broadsheet column blocks with one redacted bar and a crimson
    initial block. Ink-black, newsprint, oxblood.
12. gentle-introduction — nested receding gothic arches (the Cathedral) with a
    single candle flame. Teal stone, candle gold.
13. sovereign-individual — gold meridian globe dissolving into escaping network
    nodes past the terminator. Abyssal blue-black, gold.

Each plate: layered vector shapes, limited texture (feTurbulence grain at low
opacity where it suits print/woodcut/engraving mediums), fixed dark jacket
palette, `role="img"` + `<title>` for accessible names. Files:
`assets/library/covers/<slug>.svg`, referenced by path convention
(`assets/library/covers/{slug}.svg`) so catalog.json needs no change.

## Coordination

* No catalog.json change required (convention paths + JS shelf map).
* Build/deploy must ship `assets/library/**` — requested of Main/ReaderLead.
* Theme key `literary-library-theme`, values, dark-first behavior unchanged.
* Book links stay `books/<slug>/`; progress keys `reader-<slug>` untouched.
* shared/art.css import kept; local overrides only where hooks collide.

## Acceptance

Working links, search, shelf filter, sort (+persisted), progress badges,
continue shelf, keyboard, Escape, reduced motion, contrast on composited
backgrounds, no small-screen overflow, all 9 theme options visibly working,
before/after screenshots at 1440×1000 / 820×1180 / 390×844, art-director
review + final-validator review with findings fixed.

## Plate conformance record (H2 + Main verdict H2)

| Plate | Book identity | Status |
|---|---|---|
| atlas-shrugged | THE SIGNAL (AT1–AT9) | CONFORMED: night gantry + 3 signal heads (CLEAR green burns) + converging rails + aspect ticks; total gold refusal, flat lamps |
| the-fountainhead | THE FURNACE (F1–F10) | CONFORMED: quarry strata + 4 part slabs (pilasters/arches/ziggurat/cantilever) + thermometer, Hearth/Ember/Bronze/Gilt |
| beyond-good-and-evil | The Numbered Ledger (E1–E7) | CONFORMED: drawn range figure + ruled ledger table + tally rows + margin ticks + sanguine ration mark; zero text in art |
| thus-spoke-zarathustra | THE SOLAR GOSPEL (Z1–Z7) | CONFORMED: sun-serpent staff-head roundel + 4 watch bands + golden haft, flat engraved gold |
| gay-science | NOON (G1–G6) | CONFORMED: flat-gold sun mural + Tarot-soleil face + ultramarine bands + dance ring + ship; face sterned per director |
| twilight-of-the-idols | STRUCK BRONZE (T1–T6) | CONFORMED: struck idol-disc + 8 sounding rings + fork tines + ember point + 12 tally ticks; book-confirmed |
| will-to-power | The Black Notebook (W1–W6) | CONFORMED: broken recurrence ring + forged hammer + match-flame + part-ink tally ticks; zero text in art; book-confirmed |
| being-and-time | The Clearing (B1–B8) | CONFORMED: slit-to-clearing shaft + trunks + braided ghosts + tool shadows + ecstasis lines; drawn ghost numeral |
| infinite-jest | SUBSIDIZED TIME LEDGER (J1–J8) | CONFORMED: 9 distinct seal medallions in 3×3 grid + stamp band + phosphor assay + violet tab; zero text in art |
| forty-ways-to-look-at-churchill | Forty Facets (C1–C9) | CONFORMED: 40 flat shards + face-void + destiny vector; triple book-confirmed |
| open-letter | BLACK-LETTER BROADSHEET (O1–O6) | CONFORMED: dissolving oxblood facade + white cockade + redaction bar + fallen drums |
| gentle-introduction | THE CONTEMPLATIVE CATHEDRAL (GI1–GI7) | CONFORMED: still west front + ajar portal + candle + rose window + 11 dose notches ember→gold; nothing dissolves |
| sovereign-individual | SPECIE (S1–S8) | CONFORMED: guilloche rosette + denomination cartouche (drawn strokes) + seal; zero text in art |

Medium notes (H1): engraving (Twilight, Sovereign, BGE, IJ seals), woodcut
gouge (WtP), mural (GS, Fountainhead, Zarathustra), architectural plate
(Gentle Intro, Open Letter, Being and Time), mosaic (Churchill), flat
night-lithograph (Atlas). No two plates share a composition; verified
side-by-side on the contact sheet. All plates: 800×1000, no `<text>`,
fixed jacket palettes across themes. Server note: :8123 was squatted by a
sibling's /tmp snapshot server mid-session (stale Turbine renders); final
verification ran on :8153 serving the true repo root.
