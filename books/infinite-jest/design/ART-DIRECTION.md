# Infinite Jest — Art Direction (FINAL)

Status: FINALized by SupIJ-2 from JestIdentity's draft + ArtDirector verdict
(`.omp/design/critiques/infinite-jest.md`: Direction 1 APPROVED with binding
conditions J1–J8). READER-CONTRACT v1.1 STABLE applies (slots §3, manifest §4
with `symbol` key per A.2, endnotes §6, cascade §8). Chapter IDs p1c1–p1c77 /
p2c1–p2c12 are PROVISIONAL until the TextCurator freeze — every cohort manifest
entry carries part + order + full title for cheap remap.

Per contract §10, this file's existence also locks
`scripts/generate_book_pages.py` off this book (never regenerate).

## 1. Identity statement

The reading experience is an **archive of sponsored time**. Every chapter is a
dated artifact pulled from the file: stamped, sealed, and plated with one
engraved object drawn from its pages. The cover is the archive box lid — nine
product-year seals in a ledger grid. The body text is calm newsprint; all the
maximalism lives in the openers, the seals, and the docket-TOC. First visit is
dark: warm-black ground, manila ink, stamp red, phosphor green, seal gold; the
endnotes shift to appendix violet.

Title-swap test: put another novel's title on this shell and the
Subsidized-Year stamps, cartridge labels, and filmography broadsheets are
absurd — the identity cannot travel.

## 2. Typography (verified available — live Google Fonts CSS checked by designer)

| Role | Family | Weights | Fallback |
|---|---|---|---|
| Display (cover title, chapter titles, seal lettering) | Archivo Black | 400 | Arial Black, sans-serif |
| Body (all chapter prose) | Newsreader (opsz 6..72) | 400, 400 italic, 600 | Georgia, serif |
| Document/data (date bands, labels, TOC numerals, filmography, ticks) | IBM Plex Mono | 400, 600 | ui-monospace, monospace |

Registry terms (ArtDirector): Newsreader stays at text optical sizes with
newsprint Manila color (never Bone-white preciousness); Plex Mono is IJ's
document voice at DISPLAY scale (date bands, cartridge labels, filmography) —
WtP's Plex stays small-scale apparatus. Registry now closed for both faces.

Scale: cover title `clamp(3.5rem, 11vw, 7rem)`, tight leading 0.95; chapter
title `clamp(2rem, 5vw, 3.25rem)` — must survive p1c77's longest title without
overflow at 390px (J3, prototype proves). Body 1.125–1.3rem at 1.75; mono
micro-labels 0.72–0.8rem with 0.14em tracking. Measure: 34–38rem narrative;
document inserts to 44rem; filmography broadsheet two-column at wide viewports.

Rules: display face never sets body; mono never sets prose paragraphs; italics
in Newsreader only. Drop caps: Newsreader 600, seal-gold, opener-adjacent
only, content-warranted only.

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
supervisor approval. Light/sepia themes remap Ledger Black→paper and
Manila→ink, keeping stamp/seal/phosphor/violet roles constant.

Contrast obligations: Manila on Ledger Black (~13:1) for body; all
stamp/seal text on dark ground must clear 4.5:1 (Stamp Red #D6402B on #0D0F0C
is ~4.9:1 — verify computed, bump to #E05238 if it fails); Phosphor reserved
for large type, glyphs, and UI chrome, never small body text.

Violet register shift (J5) is EXACT: Part I gold → Part II Carbon Violet at
the part boundary, everywhere at once (TOC divider, header seal, progress,
note ticks). No violet leaks into Part I, no gold lingers in Part II.

## 4. Signature art: the Subsidized Time seal grid (J1)

Nine engraved SVG medallions, one per sponsored year, in fixed order:
1. Year of the Whopper (burger seal) · 2. Tucks Medicated Pad (pad seal) ·
3. Trial-Size Dove Bar (bar seal) · 4. Perdue Wonderchicken (bird seal) ·
5. Whisper-Quiet Maytag Dishmaster (dishwasher seal) ·
6. Yushityu 2007 Mimetic-Resolution-Cartridge-View-Motherboard (board seal —
   must read as circuitry, not spaghetti) ·
7. Dairy Products from the American Heartland (barn seal) ·
8. Depend Adult Undergarment (undergarment seal — gold, the novel's present) ·
9. Year of Glad (bag seal).

All nine must be DISTINCT engraved objects (validator checks all pairs). Cover:
full 3×3 grid at hero scale (desktop), Stamp Red keylines, Seal Gold on the
Y.D.A.U. seal. Under 560px: single Y.D.A.U. seal + stamped title (J7).
Chapter openers: the chapter's year-seal small in the date-stamp band;
undated chapters use the archive's "AS OF Y.D.A.U." filing seal. TOC:
year-filter strip reuses the nine seals at chip scale. Style: monochrome line
engraving (ruled borders, hatch shading, stencil lettering) + one spot color;
shared `<symbol>` defs in `art/seals.svg` so cohorts reference, never redraw.

## 5. Chapter-opener composition (all 77 + 12; J2)

Fixed scaffold, variable plate (ASCII):

```
┌────────────────────────────────────────────┐
│ [seal] YR.OF THE DEPEND ADULT UNDERGARMENT │  mono stamp band, Stamp Red
│        06 NOV · ETA V PWTA · 108 MATCHES   │  filing sub-line, muted
├────────────────────────────────────────────┤
│  ┌── authored SVG plate (per chapter) ──┐  │  engraved object(s),
│  │  e.g. tri-dome courts cross-section  │  │  via #chapter-art slot
│  └──────────────────────────────────────┘  │
│  6 November — Y.D.A.U. (2)                 │  Archivo Black
│  ─────────── ledger rule ───── ✦           │
└────────────────────────────────────────────┘
  Body in Newsreader, 36rem, calm…
```

The plate is the chapter's authored art: engraved SVG, chapter-specific,
served through the §3 `#chapter-art` slot via `design/chapters.json`
(`{src, symbol, class, motif, caption}`). Plates NEVER overlap prose; art
lives above the title or in the opener zone only. Exceptional multi-plate
chapters (p1c35/p1c38/p1c60/p1c77/p2c2) use braid dividers INSIDE the reading
flow only as bounded blocks that clear the measure — never full-bleed
interruptions mid-paragraph. Marginalia (session ticks, cue numbers, court
numbers, glyph markers) live in the margin/gutter only, in Plex Mono +
Phosphor, clearing the prose column at all viewports (collapse below the
paragraph on narrow screens, never overlay).

## 6. Reading body (calm core; J4)

Newsreader 1.125–1.3rem/1.75, Manila on Ledger Black, 34–38rem measure,
generous paragraph spacing. Document inserts (CV, chronology, transcripts,
exam masthead, filmography) switch to clearly BOUNDED found-paper blocks:
slightly lifted surface, Plex Mono or small-caps treatments, ledger rules —
visually distinct from narrative without touching the prose. Dialogue-derby
chapters (p1c37) may use positional speaker set — prototype must show it
working, or cut it honestly (J8). Rare one-line paragraphs kept as authored
scare-cuts, never re-joined. p1c35's inline (1)–(9) chronology overlay is
CSS-only (no DOM restructure) — prototype must show it doesn't mangle text
rhythm.

## 7. Navigation: the docket-TOC + reader chrome

- TOC drawer becomes a file docket: ruled rows, mono date + title, year-seal
  chips, Part I/II divider ("THE NOVEL" / "ENDNOTES & ERRATA"), Note 24
  flagged with the auteur-seal; subsidized-year filter strip at top.
- Reader header: book seal (Y.D.A.U. medallion, small) + chapter filing line;
  progress as a phosphor ledger-line fill.
- Chapter nav (prev/next): filing-card buttons ("PREV FILE § 37 / NEXT FILE
  § 39"). A.0 chapter-end seals sanctioned (SVG url() ≤32px, no layout shift).
- Endnote round-trip (§6): margin note-ticks + violet return-chip style;
  `.reader-note` hanging numerals, `.reader-noteref` violet links,
  `.note-return-chip` styled per appendix register. Body→note links depend on
  curator `note_refs` (requested, pending).

## 8. Cover (entrance; J7)

Full-viewport ledger plate: 3×3 seal grid engraved at hero scale on Ledger
Black (desktop); "INFINITE" / "JEST" in Archivo Black stamped across the
grid's middle band with a Stamp Red docket strip ("A FILE IN 77 PARTS + 388
NOTES"); author line, dedication, and tagline as filing metadata;
Begin/TOC/Library actions as docket buttons (phosphor primary). Under 560px:
single Y.D.A.U. seal + stamped title. No gradient washes, no dot grids, no
floating orbs — the seals and the type ARE the cover.

## 9. Cohort grammars (official map; IDs provisional)

- **A · First Weeks (p1c1–13):** cold institutional register — intake forms,
  seating diagrams, mailer tableaux, prospectus plates.
- **B · Documents & Interlace (p1c14–27):** heaviest found-paper — memos,
  tallies, broadcast-system diagrams, academic parody plates, Interlace
  flow-charts.
- **C · Winter & Subsidized Time (p1c28–40):** chronology core — nine-seal
  plate (p1c35), cartridge-label card (p1c30), transit diagram (p1c29), meet
  panorama (p1c38).
- **D · Gaudeamus (p1c41–53):** gala programs, feast menus, speaker-meeting
  handbills; seals crowd the frame as November deepens.
- **E · Ennet House (p1c54–66):** session placards, recovery-chip medallions,
  litany ledgers; warmest paper register; multi-plate dividers for p1c60.
- **F · November Ascent (p1c67–77):** convergence — colliding seals, dossier
  plates, transcript broadsheets (p1c73/p1c76), closing-gala program (p1c77).
- **G · Endnotes & Errata (p2c1–12):** Carbon Violet appendix register,
  footnote-rule ornaments; Note 24 filmography broadsheet with gauge/medium
  stamps and auteur seal (J6: two-column at wide viewports, designed at 72
  paragraphs).

Shared across cohorts: stamp band + plate + Archivo title scaffold; engraving
line style; the six-color palette; margin-tick system. Difference between
cohorts comes from artifact type and plate subject, never from random hue
rotation.

## 10. Prototype scope (J8 — BEFORE any cohort expands)

Cover seal grid + 8 openers at 1440×1000 / 820×1180 / 390×844, director
re-inspected: p1c1 (intake/interrogation), p1c30 (cartridge label), p1c35
(chronology ledger), p1c37 (dialogue derby — positional set or honest cut),
p1c38 (meet panorama), p1c60 (braid dividers), p1c77 (finale program + final
stamp), p2c2 (filmography broadsheet). REVISE findings fixed + re-inspected
before cohort expansion.

## 11. Implementation contract for engineers (via supervisor integration)

1. Fonts: Archivo Black + Newsreader (400/400i/600) + IBM Plex Mono (400/600)
   via Google Fonts link + REQUIRED book-relative @font-face fallbacks under
   design/fonts/; verify document.fonts + computed styles in the built page.
2. Supervisor rebuilds theme.css around the six tokens (all 8 theme mappings);
   cohort CSS is unlayered, scoped to body[data-*], ij-*-prefixed classes,
   never minting reader-*.
3. Seals SVG (art/seals.svg, shared symbols) built FIRST — unblocks every
   opener, cover, TOC strip. Cohorts reference, never redraw.
4. Opener scaffold driven by design/chapters.json ({src, symbol, class, motif,
   caption}); supervisor merges cohort JSON sequentially.
5. Body prose rendering untouched (plain paragraphs); variation via opener
   plates, margin ticks, bounded insert blocks.
6. Guardrails: no art over prose; reduced-motion disables seal shimmer/cover
   motion; keyboard focus visible (phosphor rings); small-screen plates scale,
   margins collapse below paragraphs; art ≥~200px even on phones, never
   display:none (director P1).
7. Endnotes: style §6 hooks; violet return chip; hanging numerals; round-trip
   exercised in review.

## 12. Open questions (resolved → struck)

- ~~Seal density at phones~~ → J7: single seal under 560px.
- ~~p1c35 CSS-only overlay~~ → approved in principle; prototype proves rhythm.
- ~~Endnote ref-markup~~ → contract §6; body→note needs curator note_refs.
- ~~Font registry collision~~ → GRANTED with differentiation terms (§2).
- ~~Fragment vs symbol~~ → v1.1 A.2: explicit `symbol` key, fragments honored.

## 13. Homepage-benchmark conformance (Main order 2026-10-15; drafted by JestIdentity, adopted)

Benchmark studied rendered at :8123 (hero, continue panel, full card grid). The
homepage bar = authored full-bleed plates with real content texture, dimensional
engraved objects, composed metadata bands, and controls that feel designed. This
identity meets it through the book's OWN medium (ledger engraving), never by
copying the homepage look:

- Cover: the 3×3 seal grid is a full-viewport engraved plate at homepage-plate
  density — nine distinct product medallions with hatch shading, stencil
  lettering, and spot-color keylines, not a tinted shell. Title stamped across
  the middle band like a docket label; metadata composed as a filing band.
- Chapter openers: every one of the 89 carries an authored plate (engraved
  object from its pages) + stamp band + Archivo title — comparable authorship
  per surface to one homepage card, with the exceptional chapters (p1c35/p1c38/
  p1c60/p1c73/p1c76/p1c77/p2c2) at panorama/broadsheet ambition.
- TOC docket: ruled rows, mono filing dates, year-seal chips, subsidized-year
  filter strip, auteur-seal flag on Note 24 — the drawer's equivalent of the
  homepage's search/sort/filter craft.
- Controls: docket buttons (Begin/TOC/Library), filing-card prev/next,
  phosphor ledger-line progress, violet note-return chip — each specified in
  identity terms (§7), not default chrome.
- Endnotes: Carbon Violet appendix register with hanging numerals, footnote
  rules, and the Note 24 broadsheet (gauge/medium stamps per film) — a
  designed appendix, not a text dump.
- Chapter endings: year-seal end marks (Appendix A.0, ≤32px) close every file.
- Calm core preserved: body prose stays Newsreader/Manila at 34–38rem;
  ambition lives in openers, plates, margins, and controls — exactly the
  benchmark's "quiet reading, designed everything else" split.
