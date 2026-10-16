# Infinite Jest — Book Identity: Three Directions + Choice

Status: Phase 1 draft by JestIdentity (book identity designer). IDs provisional per
TextCurator audit (see SupIJ-2 relay); cohort ranges per the official SupIJ-2 map
(A p1c1–13, B p1c14–27, C p1c28–40, D p1c41–53, E p1c54–66, F p1c67–77,
G p2c1–12), remappable on the freeze notice. No manifests locked here.

## What the book is (design brief in one paragraph)

*Infinite Jest* (1996) is a 541,211-word maximalist novel set mostly in one November
week of the Year of the Depend Adult Undergarment: three braided worlds (Enfield Tennis
Academy, Ennet House recovery home, Québécois separatists + U.S. operatives) orbiting a
lethally entertaining film cartridge, told through 77 dated fragments plus 388 endnotes
and a full dead-auteur filmography. Its vernaculars: sponsored calendar time ("Year of
the Whopper … Year of Glad"), institutional documents (CVs, transcripts, memos,
chronologies, exam mastheads), broadcast media (cartridges, test patterns, midnight
radio), tennis logistics (draws, drills, meets), and recovery litanies. Any identity
that could be swapped onto another long novel fails the title-swap test — this one must
feel like *sponsored time, watched bodies, and documents that stare back*.

## Baseline diagnosis (viewed rendered, 1440×1000, dark default)

Viewed the live baseline cover and the p1c1 reading view in the Eval browser.
Concrete weaknesses:

1. **Cover is a dim gradient wash, not art.** A near-black green field with a faint
   dotted grid and a barely-visible conic glow; the title sits in default serif with
   no authored image, no tennis object, no broadcast object, no document object. At
   full viewport it reads as an empty loading screen, not a book cover.
2. **Chapter openers are cartouches, not compositions.** p1c1's opener is: part label
   with hairline rules, centered title, a small bordered "§ 1" badge, a word-count
   line, another rule, a fleuron. Every chapter gets the same stack with the numeral
   badge tinted lime-vs-yellow by cohort list — exactly the rejected "numeral badge +
   gradient tint + pseudo-element" pattern. Nothing in the opener reflects the
   chapter's content (an admissions interrogation could be any chapter).
3. **No book-specific typography.** Cormorant Garamond + DM Sans are the shared
   defaults; nothing about the type says Wallace, tennis, broadcast, or bureaucracy.
4. **No authored SVG anywhere.** All decoration is `color-mix` gradients, dot grids,
   and `::before/::after` glyphs (◆/❦). There is no drawable object a reader could
   recognize from the novel.
5. **Title-swap failure.** Replace "Infinite Jest / David Foster Wallace" with any
   other title and the page is unchanged in character — generic dark-literary theme.

---

## Direction 1 — "Subsidized Time Ledger" (CHOSEN)

**One-line:** the book as an archive of sponsored years — every chapter a dated
bureaucratic artifact with an engraved object-plate, set in ledger typography.

**Why this book:** Subsidized Time is the novel's most imitable, most iconic formal
invention — years named after products, chapters headed by dates like file stamps.
The novel *is* a pile of documents (CV of Helen Steeply, Steeply interview transcripts,
AA transcripts, the Note 24 filmography, exam mastheads, cartridge labels). Cohort
leads A and C independently converged on date-stamp + document-artifact openers in
their Phase 1 drafts; this direction makes that convergence the book grammar instead
of fighting it. Swap the title to another novel and dated product-year stamps plus
cartridge labels are nonsense — title-swap proof.

**Type (all verified live on Google Fonts this session):**
- Display/ledger headings: **Archivo Black** (single-weight grotesk poster face) for
  chapter titles + cover title. Heavy, bureaucratic-shout register; nothing like
  Cormorant. Fallback: `Arial Black, sans-serif`.
- Body: **Newsreader** (optical-size text serif, 400/400i/600) — calm, highly legible
  long-form face with a newsprint/documentary flavor that suits archive prose.
  Fallback: `Georgia, serif`.
- Document/data voice: **IBM Plex Mono** (400/600) for date-stamp bands, cartridge
  labels, transcript ticks, filmography entries, TOC numerals. Fallback: `monospace`.
- Scale: cover title clamp(3.5rem, 11vw, 7rem) Archivo; chapter title
  clamp(2rem, 5vw, 3.25rem); body 1.125–1.3rem at 1.75 leading; measure 34–38rem
  (narrower than the current 54rem, which is too wide for the dense prose).

**Palette (dark-first, named):**
- `Ledger Black` #0D0F0C — ground (warm-black archive box)
- `File Manila` #E8DCC0 — primary text/document paper accent (used as ink, not ground)
- `Stamp Red` #D6402B — date stamps, seals, "UNRELEASED" flags
- `Cartridge Phosphor` #9FE870 — broadcast/terminal green for cartridge labels,
  viewer readouts, TOC progress
- `Seal Gold` #C9A227 — institutional seals, filmography medallions, cover rule
- `Carbon Violet` #7C6BD6 — endnotes register (Part II shifts from gold to violet:
  the archive's appendix ink)

**Layout/composition:**
- Cover: full-viewport ledger plate — a 3×3 grid of the nine Subsidized-Year product
  seals (authored SVG medallions: burger, pad, dove bar, chicken, dishwasher,
  cartridge board, dairy barn, undergarment, glad bag) as the hero object, title
  stamped across in Archivo Black, tagline as a file-docket strip.
- Chapter opener: (1) mono date-stamp band ("YEAR OF THE DEPEND ADULT UNDERGARMENT /
  6 NOVEMBER"), (2) authored SVG object-plate specific to the chapter (tennis-court
  cross-section, cartridge label, counselor's door placard, phone-cord waveform…),
  (3) Archivo title, (4) thin ledger rule. Body below in Newsreader, calm.
- ASCII wireframe (chapter opener):
```
  ┌──────────────────────────────────────────┐
  │ YR.OF THE DEPEND ADULT UNDERGARMENT · 06 │  ← mono stamp band, Stamp Red
  │ NOV · ETA V PWTA — 108 MATCHES           │
  ├──────────────────────────────────────────┤
  │   ┌─ authored SVG plate ─────────────┐   │
  │   │  tri-dome courts cross-section   │   │
  │   └──────────────────────────────────┘   │
  │  6 NOVEMBER — Y.D.A.U. (2)               │  ← Archivo Black title
  │  ───── ledger rule ───── ✦              │
  │  Body text in Newsreader, 36rem…         │
  └──────────────────────────────────────────┘
  ```

**Illustration medium:** authored monochrome-ledger SVG plates (line-engraving style:
ruled lines, hatching, medallion seals, stencil lettering) with 1–2 spot colors from
the palette. One plate per chapter opener + a shared 9-seal Subsidized Time key.
No gradients-as-art; texture comes from hatch/dither patterns drawn in the SVG.

**How the 7 official cohorts + endnotes vary (within the ledger grammar):**
Official map per SupIJ-2 (IDs provisional): A 'First Weeks' p1c1–13; B 'Documents &
Interlace' p1c14–27; C 'Winter & Subsidized Time' p1c28–40; D 'Gaudeamus' p1c41–53;
E 'Ennet House' p1c54–66; F 'November Ascent' p1c67–77; G 'Endnotes & Errata' p2c1–12.
- A (First Weeks): intake forms, seating diagrams, sealed-room elevations, mailer
  tableaux, prospectus plates. Cold institutional register. (Matches Cohort A draft.)
- B (Documents & Interlace): heaviest found-paper treatment — memos, tallies,
  broadcast-system diagrams, academic parody plates; Interlace flow-chart motifs.
- C (Winter & Subsidized Time): the chronology core — nine-seal ledger plate at
  p1c35, cartridge-label card at p1c30, transit diagram at p1c29, tennis-meet program
  panorama at p1c38 (exceptional). (Matches Cohort C draft.)
- D (Gaudeamus): gala/program treatments — fundraiser programs, Gaudeamus feast
  menus, Boston-AA speaker-meeting handbills; seals begin to crowd the frame.
- E (Ennet House): session placards, recovery-chip medallions, litany ledgers;
  warmest paper register; p1c60 (exceptional, 32k words) gets multi-plate braid
  dividers for its resident-interface snippets.
- F (November Ascent): convergence — seals overlap and collide, dossier plates crowd
  (Poor Tony, Joelle, Gately hospital); p1c73/p1c76 exceptional (transcript/meeting
  broadsheets); p1c77 finale (exceptional) gets the closing-gala program plate and
  the ledger's last stamp.
- G (Endnotes & Errata): Carbon Violet register, footnote-rule ornaments, archival
  appendix styling; p2c2 Note 24 (exceptional) as a full filmography broadsheet with
  per-film gauge/medium stamps and an auteur-seal medallion.

---

## Direction 2 — "Sour-Apple Halogen" (tennis-spectacle broadcast)

**One-line:** the book as a night tennis mega-meet under floodlights — huge condensed
sports typography, court-diagram art, broadcast-chrome color.

**Why this book:** p1c38's 21,575-word ETA-vs-Port-Washington meet ("white halogen
off the green of the composite… the color of sour apples") is the novel's set-piece;
tennis logistics saturate the ETA chapters. Broadcast chrome covers the Entertainment
thread. But: tennis is only one of three worlds — Ennet House and the separatists get
nothing from this identity, and the document/formal inventiveness (the book's real
signature) is sidelined. Title-swap: works for any sports novel.

**Type:** display **Archivo Black** (same availability as above) or **Anton**;
body **Libre Franklin** (verified available: grotesk text face, 400/600/800);
scores/data **IBM Plex Mono**. Scale bigger and louder than Direction 1: cover title
to 8rem, chapter titles with overlaid scoreline numerals ("§ 38 — 108 MATCHES").

**Palette:** `Night Court` #0A120B, `Sour Apple` #B5F13D, `Composite Green` #14532D,
`Gallery Glass` #9FB6FF, `Towel White` #F2F5EA, `Clay Rust` #C2410C.

**Layout:** cover = full-bleed SVG court cross-section under light cones with the
title as a stadium scoreboard; openers = scoreboard cards (mono scoreline + condensed
title + court-diagram fragment); body calm in Libre Franklin.

**Illustration medium:** flat vector court diagrams, scoreboard panels, light-cone
geometry; spot-varnish feel via hard-edged shapes, no gradients.

**Signature idea:** the **108-match scoreboard** — a living tally strip that fills as
the reader progresses through tennis chapters. Fun but gimmicky; rewards one thread.

**TOC:** tournament-draw bracket styling; endnotes as the "press box" in glass blue.

**Cohort variance:** tennis chapters get full scoreboards; street chapters get
"away game" cards; documents get "instant replay" panels; endnotes get press-box
treatment. The metaphor strains outside ETA — the direction's core weakness.

---

## Direction 3 — "Midnight Cartridge" (broadcast-static gothic)

**One-line:** the book as lethal late-night television — test-pattern geometry, VHS
tracking artifacts, phosphor-on-black typography, static-grain illustration.

**Why this book:** the Entertainment cartridge is the plot's engine; Madame Psychosis's
midnight show, test patterns, viewer readouts, and the "Cage" parody-ad lineage all
live here. Strong for the Incandenza/film thread and Note 24 (a filmography wants
projection-booth styling). But: it renders tennis and recovery as "channels," which
is clever once and thin across 77 chapters; static/noise effects risk obscuring prose
and failing the calm-reading requirement; test-pattern bars are a recognizable design
cliché (the "acid accent on near-black" default the frontend-design skill warns about).

**Type:** display **Space Grotesk** 700 (verified available; techy broadcast voice);
body **Instrument Serif** (verified available; soft gothic contrast for prose);
readouts **IBM Plex Mono**. Cover title with tracking-static slice effects.

**Palette:** `Static Black` #08090C, `Test White` #EDF2FF, `Phosphor Green` #4ADE80,
`Tracking Magenta` #F0F, `Broadcast Amber` #FFB224, `Veil Violet` #7C6BD6.

**Layout:** cover = authored SVG test-pattern/test-card composition (original geometry,
not SMPTE bars) with the title as a station ident; openers = "NOW SHOWING" cards with
tracking-line dividers and per-chapter station-id glyphs; body in Instrument Serif.

**Illustration medium:** SVG line-art of broadcast ephemera (aerials, dials, cartridges,
tracking bands) + fine dither/grain patterns; one restrained static animation on the
cover only (disabled under prefers-reduced-motion).

**Signature idea:** the **station ident** — each chapter opens as a broadcast ident
card ("E.T.A. · 0600H · MORNING DRILLS") with its own test-card glyph. Evocative but
repetitive at 89 chapters; idents blur together where seals stay distinct.

**TOC:** program-guide grid (date/time/title rows); endnotes as the "teletext pages."

**Cohort variance:** film chapters get projection-booth plates; tennis gets
"sports desk" cards; AA chapters get "call-in show" panels; endnotes get teletext.
Coherent, but the single-channel metaphor flattens the book's three worlds into one.

---

## Comparison and choice

| Axis | 1. Ledger (chosen) | 2. Halogen | 3. Cartridge |
|---|---|---|---|
| Covers all 3 worlds | Yes — every world produces documents | No — tennis only | Partly — broadcast only |
| Title-swap proof | Strong — Subsidized Time is IJ-only | Weak — fits any sports novel | Medium — fits any media novel |
| Fits document chapters | Native (CV, chronology, transcripts, filmography) | Forced ("instant replay") | Forced ("teletext") |
| Cohort-lead convergence | Matches A + B + C + E drafts | Contradicts all four | Contradicts all four |
| Calm reading | Yes — plates live in openers only | Yes | Risky — static near prose |
| Cliché risk | Low — ledger engraving is not an AI default | Medium — sports-poster look | High — test bars + neon on black |

> Convergence note (checked after drafting): cohort B's manifest centers an
> 'archival object' grammar (provenance headers, per-document paper media, colophon
> closes); cohort E's manifest uses ledger/office opener frames with
> timestamp-forward titles and loaded dossier objects. A, B, C, and E therefore
> converge independently on the ledger/document/date-stamp language — four
> independent signals for Direction 1. (Cohort F's JSON has a syntax error its lead
> is fixing; D and G drafts not yet in design/ at check time.)

**Chosen: Direction 1, "Subsidized Time Ledger."** It is the only direction native to
all three narrative worlds and all document forms, it honors the Phase 1 convergence
of the cohort leads rather than discarding their research, and its signature (the
nine sponsored-year seals) cannot belong to any other book. Directions 2 and 3
contribute salvage elements: Halogen's court cross-sections become ledger plates for
tennis chapters; Cartridge's station-readout typography informs the viewer/mailer
motifs (p1c5, p1c7, p1c32).

## References studied (with citations)

1. Steve Snider, "On Creating the Cover For David Foster Wallace's Infinite Jest,"
   Literary Hub, Feb 2026 (https://lithub.com/on-creating-the-cover-for-david-foster-wallaces-infinite-jest)
   — first-edition cover process; Wallace's own suggestions (Fritz Lang/Metropolis
   photo, tennis-court watering-cans photo, Benetton antenna field, Nancy Rubins
   appliance sculpture); the "Big Book Look" rationale; blue-sky motif history.
   Takeaway: Wallace wanted *complexity and specificity*, not minimal skies — the
   ledger's object-plates answer that; the antenna-field idea (communication,
   repetition, proliferation) survives in the seal grid's repetition.
2. Christian Swinehart, Infinite Digest, an illustrated companion (https://samizdat.co/digest/,
   via FlowingData Apr 2026 https://flowingdata.com/2026/04/09/visual-guide-for-infinite-jest)
   — interactive plot-lines, footnote-distribution, and timeline visualizations;
   viewed rendered: dark ground, thin serif, diagram-led storytelling. Takeaway:
   diagram-as-reading-aid is proven for this book; our TOC docket + court/transit
   diagrams follow that lineage (original art, not copies).
3. SMPTE color bars / test-card history (Vice, "The History of TV Color Bars";
   Wikipedia SMPTE color bars) — studied as Direction-3 material; rejected as primary
   identity (cliché risk) but retained for cartridge/mailer motifs.
4. Concrete poetry / Noigandres / Gomringer (Poetry Foundation; Kvadrat Interwoven on
   Gomringer) — typography-as-image precedent for the seal grid and ledger plates;
   informed the "title set as docket/report cover" opener compositions.
5. McSweeney's Quarterly Concern design lineage (Harry Ransom Center finding aid;
   store listings) — each-issue-redesigned maximalism, vintage typography, found-paper
   artifacts. Precedent for per-chapter artifact variation inside one grammar.
6. Tennis court layout ephemera (TennisKit24 survey drawings; NLA standard-layout
   sheets) — court-diagram line vocabulary for tennis plates.
7. Infinite Atlas / IJ mapping projects (NBC News 2012; Austin Chronicle 2012;
   UT-Austin viz survey) — reader appetite for IJ cartography; supports transit-map
   (p1c29) and tunnel-section (p1c9) plates.

## Font verification (this session, live Google Fonts CSS)

- Archivo Black — 200, @font-face served (fonts.gstatic.com).
- Newsreader (opsz 6..72; 400/600/ital) — 200, faces served.
- IBM Plex Mono (400/600) — 200, faces served.
- Libre Franklin (400/600/800) — 200, faces served (Direction 2 / fallback).
- Space Grotesk (400/500/700), Special Elite, Instrument Serif (reg/ital) — 200,
  faces served (Direction 3 material / fallbacks).
- Baseline page confirmed loading Cormorant Garamond + DM Sans via Google Fonts —
  the same `<link>` mechanism will carry the new families; supervisor integrates.
