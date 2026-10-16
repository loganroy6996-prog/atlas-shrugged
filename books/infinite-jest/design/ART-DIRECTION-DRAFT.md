# Infinite Jest — Art Direction (DRAFT for supervisor finalization)

Status: draft by JestIdentity. Supervisor (SupIJ-2) finalizes as ART-DIRECTION.md
after ArtDirector critique. Implements Direction 1 "Subsidized Time Ledger" from
`directions.md`. Chapter IDs provisional per TextCurator audit — cohort JSON entries
carry part + order + full title for remap; nothing here locks final manifests.

Conformance: reviewed against READER-CONTRACT v1.0 + v1.1 addendum (STABLE,
.omp/design/READER-CONTRACT.md). Plates fill the `#chapter-art` / `#cover-art`
slots via `design/chapters.json` (contract §3–§4) using the v1.1 explicit `symbol`
key (`{ "src": "art/cohort-c.svg", "symbol": "seal-id" }` — never fragment URLs in
new manifests); chapter-end seals use the sanctioned Appendix A.0
`p:last-child::after` SVG-`url()` override (≤32px, layout-neutral); endnote styling
uses the frozen `.reader-note` / `.reader-noteref` / `.note-return-chip` hooks
(contract §6); book CSS is unlayered and wins over `@layer shared` (contract §8).

## 1. Identity statement

The reading experience is an **archive of sponsored time**. Every chapter is a dated
artifact pulled from the file: stamped, sealed, and plated with one engraved object
drawn from its pages. The cover is the archive box lid — nine product-year seals in a
ledger grid. The body text is calm newsprint; all the maximalism lives in the
openers, the seals, and the docket-TOC. First visit is dark: warm-black ground,
manila ink, stamp red, phosphor green, seal gold; the endnotes shift to appendix
violet.

Title-swap test: put another novel's title on this shell and the Subsidized-Year
stamps, cartridge labels, and filmography broadsheets are absurd — the identity
cannot travel.

## 2. Typography (verified available — live Google Fonts CSS checked this session)

| Role | Family | Weights | Fallback |
|---|---|---|---|
| Display (cover title, chapter titles, seal lettering) | Archivo Black | 400 | Arial Black, sans-serif |
| Body (all chapter prose) | Newsreader (opsz 6..72) | 400, 400 italic, 600 | Georgia, serif |
| Document/data (date bands, labels, TOC numerals, filmography, ticks) | IBM Plex Mono | 400, 600 | ui-monospace, monospace |

Scale: cover title `clamp(3.5rem, 11vw, 7rem)`, tight leading 0.95; chapter title
`clamp(2rem, 5vw, 3.25rem)`; body 1.125–1.3rem at 1.75; mono micro-labels 0.72–0.8rem
with 0.14em tracking. Measure: 34–38rem for narrative (the current 54rem is too wide
for Wallace's density); document inserts may run to 44rem; filmography broadsheet
two-column at wide viewports.

Rules: display face never sets body; mono never sets prose paragraphs; italics in
Newsreader only. Drop caps: Newsreader 600, seal-gold, opener-adjacent only.

## 3. Palette (dark-first; named hex)

| Name | Hex | Use |
|---|---|---|
| Ledger Black | #0D0F0C | ground, archive box |
| File Manila | #E8DCC0 | primary text ink, document accents |
| Stamp Red | #D6402B | date stamps, seals, UNRELEASED flags, seal grid keylines |
| Cartridge Phosphor | #9FE870 | cartridge labels, viewer readouts, TOC progress, focus rings |
| Seal Gold | #C9A227 | institutional seals, cover rule, filmography medallions |
| Carbon Violet | #7C6BD6 | Part II endnotes register, appendix rules |

Supporting tints derive from these six via opacity only — no new hues without
supervisor approval. Light/sepia themes remap Ledger Black→paper and Manila→ink,
keeping stamp/seal/phosphor/violet roles constant.

Contrast obligations for the engineer: Manila on Ledger Black (~13:1) for body;
all stamp/seal text on dark ground must clear 4.5:1 (Stamp Red #D6402B on #0D0F0C is
~4.9:1 — verify computed, bump to #E05238 if it fails); Phosphor reserved for large
type, glyphs, and UI chrome, never small body text.

## 4. Signature art: the Subsidized Time seal grid

Nine engraved SVG medallions, one per sponsored year, in fixed order:
1. Year of the Whopper (burger seal) · 2. Tucks Medicated Pad (pad seal) ·
3. Trial-Size Dove Bar (bar seal) · 4. Perdue Wonderchicken (bird seal) ·
5. Whisper-Quiet Maytag Dishmaster (dishwasher seal) ·
6. Yushityu 2007 Mimetic-Resolution-Cartridge-View-Motherboard (board seal) ·
7. Dairy Products from the American Heartland (barn seal) ·
8. Depend Adult Undergarment (undergarment seal) · 9. Year of Glad (bag seal).

- Cover: full 3×3 grid at hero scale, engraved line style, Stamp Red keylines,
  Seal Gold on the Y.D.A.U. seal (the novel's present).
- Chapter openers: the chapter's year-seal appears small in the date-stamp band;
  undated chapters use the archive's "AS OF Y.D.A.U." filing seal.
- TOC: year-filter strip reuses the nine seals at chip scale.
- Style: monochrome line engraving (ruled borders, hatch shading, stencil
  lettering) + one spot color; shared `<symbol>` defs in a seals SVG so cohorts
  reference, never redraw.

## 5. Chapter-opener composition (all 77 + 12)

Fixed scaffold, variable plate (ASCII):

```
┌────────────────────────────────────────────┐
│ [seal] YR.OF THE DEPEND ADULT UNDERGARMENT │  mono stamp band, Stamp Red
│        06 NOV · ETA V PWTA · 108 MATCHES   │  filing sub-line, muted
├────────────────────────────────────────────┤
│  ┌── authored SVG plate (per chapter) ──┐  │  engraved object(s)
│  │  e.g. tri-dome courts cross-section  │  │
│  └──────────────────────────────────────┘  │
│  6 November — Y.D.A.U. (2)                 │  Archivo Black
│  ─────────── ledger rule ───── ✦           │
│  Body in Newsreader, 36rem, calm…          │
└────────────────────────────────────────────┘
```

- The plate is the chapter's authored art: engraved SVG, chapter-specific (see
  cohort manifests for the per-chapter plate briefs already drafted for A, B, C, E;
  D/F/G briefs follow the same schema). Plates ship as `art/<cohort>.svg` sprite
  files carrying per-chapter `<symbol>`/`<g id>` elements and load declaratively
  through `design/chapters.json` into the contract §3 `#chapter-art` slot via the
  v1.1 `symbol` key (`{ "src": "art/cohort-c.svg", "symbol": "plate-p1c38" }`);
  `motif` sets `body[data-art]` for per-chapter CSS. The nine seals ship once as
  shared `<symbol>` defs that cohort SVGs reference (`<use>`), never redraw.
- Plates never overlap prose; art lives above the title or in the opener zone only.
- Chapter-end seals (optional, per Appendix A.0 ruling): a `body[data-chapter]`-
  qualified `.chapter-text > p:last-child::after` override carrying authored SVG
  `url()` content (the chapter's year-seal at ≤32px), layout-neutral.
- Exceptional chapters (supervisor-designated): p1c35 (nine-seal ledger plate +
  rain-street vignette), p1c38 (double-height tri-dome panorama + braid dividers),
  p1c60 (multi-plate braid dividers), p1c73/p1c76 (transcript broadsheets),
  p1c77 (closing-gala program + final stamp), p2c2 (filmography broadsheet).
- Marginalia: session ticks, cue numbers, court numbers, and glyph markers live in
  the margin/gutter only, in Plex Mono + Phosphor, and must clear the prose column
  at all viewports (collapse below the paragraph on narrow screens, never overlay).

## 6. Reading body (calm core)

Newsreader 1.125–1.3rem/1.75, Manila on Ledger Black, 34–38rem measure, generous
paragraph spacing. Document inserts (CV, chronology, transcripts, exam masthead,
filmography) switch to clearly bounded found-paper blocks: slightly lifted surface,
Plex Mono or small-caps treatments, ledger rules — visually distinct from narrative
without touching the prose. Dialogue-derby chapters (p1c37) may use positional
speaker set. Rare one-line paragraphs kept as authored scare-cuts, never re-joined.

## 7. Navigation: the docket-TOC + reader chrome

- TOC drawer becomes a file docket: ruled rows, mono date + Archivo-ish title,
  year-seal chips, Part I/II divider ("THE NOVEL" / "ENDNOTES & ERRATA"), Note 24
  flagged with the auteur-seal; subsidized-year filter strip at top.
- Reader header: book seal (Y.D.A.U. medallion, small) + chapter filing line;
  progress as a phosphor ledger-line fill.
- Chapter nav (prev/next): filing-card buttons ("PREV FILE § 37 / NEXT FILE § 39").
- Endnote round-trip: per contract §6, notes-part paragraphs get `.reader-note`
  anchors, `.reader-noteref` links, and a `.note-return-chip` backlink — style all
  three in Carbon Violet (ticks, hanging numerals, return chip). Body→note links
  activate only from curator-supplied `note_refs`; reader never guesses.

## 8. Cover (entrance)

Full-viewport ledger plate: 3×3 seal grid engraved at hero scale on Ledger Black;
"INFINITE" / "JEST" in Archivo Black stamped across the grid's middle band with a
Stamp Red docket strip ("A FILE IN 77 PARTS + 388 NOTES"); author line, dedication,
and tagline as filing metadata; Begin/TOC/Library actions as docket buttons
(phosphor primary). No gradient washes, no dot grids, no floating orbs — the seals
and the type ARE the cover.

## 9. Cohort grammars (official map; IDs provisional)

- **A · First Weeks (p1c1–13):** cold institutional register — intake forms, seating
  diagrams, mailer tableaux, prospectus plates. (Draft manifest: cohort-a.json.)
- **B · Documents & Interlace (p1c14–27):** heaviest found-paper — memos, tallies,
  broadcast-system diagrams, academic parody plates, Interlace flow-charts.
- **C · Winter & Subsidized Time (p1c28–40):** chronology core — nine-seal plate
  (p1c35), cartridge-label card (p1c30), transit diagram (p1c29), meet panorama
  (p1c38). (Draft manifest: cohort-c.json.)
- **D · Gaudeamus (p1c41–53):** gala programs, feast menus, speaker-meeting
  handbills; seals crowd the frame as November deepens.
- **E · Ennet House (p1c54–66):** session placards, recovery-chip medallions,
  litany ledgers; warmest paper register; multi-plate dividers for p1c60.
- **F · November Ascent (p1c67–77):** convergence — colliding seals, dossier
  plates, transcript broadsheets (p1c73/p1c76), closing-gala program (p1c77).
- **G · Endnotes & Errata (p2c1–12):** Carbon Violet appendix register,
  footnote-rule ornaments; Note 24 filmography broadsheet with gauge/medium
  stamps and auteur seal. Note raw note-ref text patterns for the pending
  ref-markup format (per supervisor relay).

Shared across cohorts: stamp band + plate + Archivo title scaffold; engraving line
style; the six-color palette; margin-tick system. Difference between cohorts comes
from artifact type and plate subject, never from random hue rotation.

## 10. Implementation brief for the engineer (via supervisor)

1. Load Archivo Black + Newsreader (400/400i/600) + IBM Plex Mono (400/600).
  Contract §8 says `@font-face src` SHOULD be book-relative (`design/fonts/…`)
  so the build ships it (§11); the existing Google Fonts `<link>` mechanism
  (same pattern as today's Cormorant/DM Sans link) is the fallback if vendoring
  is unavailable. Either way set `--font-*` overrides in theme.css with REQUIRED
  system/local fallbacks, and verify computed styles in the built page
  (document.fonts + getComputedStyle).
2. Rebuild theme.css around the six named tokens; keep all 8 theme mappings working
   (dark default first; light/sepia remap ground/ink, keep stamp/seal/phosphor roles).
3. Build the seals SVG first — it unblocks every opener and the TOC strip. Ship
  seals once (own `art/` file with `<symbol>` defs); cohort plates reference them.
4. Implement the opener scaffold (stamp band / plate slot / title / rule) with
  plates loaded via `design/chapters.json` (§4 of the contract; supervisor merges
  cohort JSON sequentially); cohort CSS files own their plate treatments keyed off
  `body[data-art]` / `body[data-chapter]`.
5. Keep body prose rendering untouched (plain paragraphs); all variation via opener
   plates, margin ticks, and bounded insert blocks.
6. Endnote + TOC hooks are frozen (contract §6/§2): style `.reader-noteref`,
  `.note-return-chip`, and `#chapter-text:has(.reader-note)`; TOC docket rows key
  off existing drawer structure — any structural change is a contract-extension
  request to ReaderLead via supervisor, not a local override.
7. Guardrails: no art over prose; reduced-motion disables seal shimmer/cover motion;
  keyboard focus visible (phosphor rings); small-screen plates scale, margins
  collapse below paragraphs.

## 11. Homepage-benchmark conformance (added per Main benchmark order 2026-10-15)

Benchmark studied rendered at :8123 (hero, Atlas continue panel, full card grid incl.
the IJ tennis-panel plate). The homepage bar = authored full-bleed plates with real
content texture, dimensional engraved/illustrated objects, composed metadata bands,
and controls that feel designed. This identity meets it through the book's OWN medium
(ledger engraving), never by copying the homepage look:

- Cover: the 3×3 seal grid is a full-viewport engraved plate at homepage-plate
  density — nine distinct product medallions with hatch shading, stencil lettering,
  and spot-color keylines, not a tinted shell. Title stamped across the middle band
  like a docket label; metadata (author/dedication/tagline/counts) composed as a
  filing band, matching the homepage's metadata-band care.
- Chapter openers: every one of the 89 carries an authored plate (engraved object
  from its pages) + stamp band + Archivo title — comparable authorship per surface
  to one homepage card, with the six exceptional chapters (p1c35/p1c38/p1c60/
  p1c73/p1c76/p1c77/p2c2) at double-height/panorama/broadsheet ambition.
- TOC docket: ruled rows, mono filing dates, year-seal chips, subsidized-year filter
  strip, auteur-seal flag on Note 24 — the drawer's equivalent of the homepage's
  search/sort/filter craft.
- Controls: docket buttons (Begin/TOC/Library), filing-card prev/next, phosphor
  ledger-line progress, violet note-return chip — each specified in identity terms
  (§7), not default chrome.
- Endnotes: Carbon Violet appendix register with hanging numerals, footnote rules,
  and the Note 24 filmography broadsheet (gauge/medium stamps per film) — the notes
  read as a designed appendix, not a text dump.
- Chapter endings: year-seal end marks (Appendix A.0, ≤32px) close every file.
- Calm core preserved: body prose stays Newsreader/Manila at 34–38rem; ambition
  lives in openers, plates, margins, and controls — exactly the benchmark's
  "quiet reading, designed everything else" split.

## 12. Open questions for ArtDirector / supervisor

- Seal engraving density at phone widths: full 3×3 grid vs. single Y.D.A.U. seal on
  the cover under 560px?
- Plex Mono for the p1c35 inline (1)–(9) chronology overlay: CSS-only treatment
  approved (no DOM restructure) — confirm visual approach.
- Body→note `note_refs` data pending (TextCurator) — violet tick styling specified
  here, activation automatic once the curator ships the data.
