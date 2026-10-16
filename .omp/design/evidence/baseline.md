# Baseline evidence — ArtDirector inspection

Server: `http://127.0.0.1:8000/` (Main's baseline build of `_site`).
Tool: native Eval browser, viewport 1440×1000 unless noted.
Date: 2026-10-15. All screenshots below were actually viewed.

## Captures

| # | Page | URL path | Viewport | Observed |
|---|---|---|---|---|
| 1 | Home hero | `/` | 1440×1000 | Centered eyebrow/headline/rule stack, Cormorant + DM Sans, 9-pill theme rail, search/sort toolbar |
| 2 | Home shelf | `/` scrolled | 1440×1000 | 13 identical cards (tint + giant initial + meta), 13 `<li>` counted in DOM |
| 3 | Atlas cover | `/books/atlas-shrugged/` | 1440×1000 | Gold tower verticals + conic glow, centered shell |
| 4 | Atlas p1c1 reader | same → Begin | 1440×1000 | Meta block + drop cap + two-line meta; long measure |
| 5 | Fountainhead cover | `/books/the-fountainhead/` | 1440×1000 | Steel-blue cantilever + blueprint lattice |
| 6 | IJ cover | `/books/infinite-jest/` | 1440×1000 | Chartreuse court grid + ball glow + pips |
| 7 | Being&Time cover | `/books/being-and-time/` | 1440×1000 | Pine striations + clearing glows |
| 8 | Gay Science cover | `/books/gay-science/` | 1440×1000 | Sun-dot conic fan + dot grids |
| 9 | BGE cover | `/books/beyond-good-and-evil/` | 1440×1000 | Violet shear line + glow |
| 10 | Zarathustra cover | `/books/thus-spoke-zarathustra/` | 1440×1000 | Gold glow + diamond lattice |
| 11 | Twilight cover | `/books/twilight-of-the-idols/` | 1440×1000 | Bronze dusk band + ember |
| 12 | WtP cover | `/books/will-to-power/` | 1440×1000 | Crimson forge glow + skew rails |
| 13 | Churchill cover | `/books/forty-ways-to-look-at-churchill/` | 1440×1000 | Crosshair + smoke rings + map grid |
| 14 | Open Letter cover | `/books/open-letter/` | 1440×1000 | Ruled ledger + red glow |
| 15 | Gentle Intro cover | `/books/gentle-introduction/` | 1440×1000 | Waterlines + swell glow |
| 16 | Sovereign cover | `/books/sovereign-individual/` | 1440×1000 | Orbit rings + conic rays |
| 17 | IJ p1c1 reader | IJ → Begin | 1440×1000 | §1 badge + "≈34 MIN · 6,734 WORDS" meta, star glyph, drop cap |
| 18 | IJ TOC drawer | IJ reader → ☰ | 1440×1000 | Filter box, "89 chapters · 541,211 words · 45.1h total", numbered chapter rows |
| 19 | Gay Science p1c1 | GS → Begin | 1440×1000 | Same meta grammar as Atlas/IJ readers; only tint differs |
| 20 | Standard Ebooks ref | standardebooks.org | 1440×1000 | Reference study (see ART-DIRECTION §8) |
| 21 | Folio Society ref | foliosociety.com | 1440×1000 | Reference study (see ART-DIRECTION §8) |

## Computed-style checks (via page evaluate)

- Home `.library-title` font: `"Cormorant Garamond", Georgia, serif`;
  body: `"DM Sans", system-ui, sans-serif`. Typography monoculture confirmed.
- Book `index.html` files are one shared template (Spot-checked Atlas;
  Churchill designer confirmed hooks `body[data-part]`/`body[data-chapter]`
  in `shared/reader.js`).

## Source census (builds on captures, not a substitute)

- `books/*/theme.css` all share the `.cover-bg/.cover-grid/.cover-glow` +
  `color-mix` + gradient-function vocabulary; per-book differences are
  parameter choices (see ART-DIRECTION §1).
- `books/*/index.html` identical DOM with swapped strings (Atlas read in
  full; siblings share structure per generator + designer confirmations).
- Inventory: 13 books, chapter counts/parts/IDs from
  `.omp/design/BOOK-INVENTORY.json` (summarized 2026-10-15; IJ IDs
  provisional per SupIJ-2/TextCurator).

## Not run (explicit gaps)

- No tablet/phone viewports yet (baseline is being replaced; prototypes
  get full 3-viewport review).
- No contrast metering (baseline retiring; required for prototypes).
- No keyboard/a11y pass on baseline (owned by FinalValidator track).
