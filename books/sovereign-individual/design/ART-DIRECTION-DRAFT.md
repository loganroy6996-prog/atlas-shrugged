# The Sovereign Individual — Art Direction (DRAFT for director critique)

Identity: **SPECIE — The Private Banknote.** The book argues money will escape the
state (denationalized cybermoney); the design reissues the engraved banknote with
no state on it. Cover = specimen note · chapters = denominations I–XI · reader =
assay ledger. Replacing title + color must make the page feel wrong for any other book.

## 1. Palette (dark-first, flat inks)

| Name      | Hex     | Role |
|-----------|---------|------|
| Vault     | #0B100E | ground (near-black green-ink) |
| Ledger    | #121915 | elevated panels, drawer, settings card |
| Bone      | #ECE3CC | primary text |
| Muted     | #A89C7C | secondary text |
| Faint     | #6E654E | captions, microtext |
| Specie    | #D2A72C | gold — display, denomination numerals, assay fill |
| Copper    | #B26A3B | plate lines, rules, epigraph frames |
| Verdigris | #5DA88A | patina green — ch. 3 & 7 lead ink, microtext rings |
| Seal      | #9E3B2E | oxblood seal red — stamps, ch. 11 lead ink, danger |

Contrast (computed pairs): Bone on Vault ≈ 13.9:1 · Muted on Vault ≈ 7.4:1 ·
Specie on Vault ≈ 7.1:1 · Copper on Vault ≈ 4.0:1 (large graphics/text-large only)
· Seal on Vault ≈ 3.4:1 (graphics/stamps only, never body text). Light/sepia user
prefs keep the shared reader remap: Bone→#241F12 ink on #F2ECDA paper, Specie→#7A5F10.

## 2. Typography (all Google Fonts, live `<link>` in index.html)

- **Bodoni Moda** (400/500/700 + italic) — display: cover title, chapter titles,
  denomination numerals, TOC book wordmark. Engraved-modern Didone voice; high
  contrast thicks/thins read as plate lettering.
- **Source Serif 4** (400/600 + italic) — reading body and UI text. Calm, highly
  legible, generous x-height; keeps long chapters (p1c9 ≈ 29k words) comfortable.
- **IBM Plex Mono** (400/500) — microtext lockups ("PRIVATE ISSUE · SERIES 1997"),
  ledger figures, word counts, settings labels, cipher-ish data.

Type scale: cover display clamp(3rem, 8vw, 5.5rem), tight leading 0.95, −0.01em;
chapter title clamp(2rem, 4.5vw, 2.75rem); epigraph 1rem italic; body 1.125rem/1.75;
small caps section heads 0.8125rem, 0.18em tracking (real `font-variant-caps`, not
fake caps). Measure: body ≤ 68ch, centered single column; epigraphs ≤ 56ch.
Never: single-word accent coloring, ALL-CAPS eyebrows above every head, `→` on buttons.

## 3. Composition (per READER-CONTRACT v1.0: slots, hooks, manifest)

Art delivery is declarative: `design/chapters.json` (contract §4 schema:
`version`/`cover`/`default`/`chapters` with `src`/`class`/`motif`/`caption`)
drives the `#cover-art` and `#chapter-art` slots, which `reader.js` injects and
fills (SVG inlined, same-origin under `art/`). This draft's
`manifest-draft.json` carries the content rationale per chapter PLUS the proposed
`src`/`class`/`motif`/`caption` values; the supervisor merges cohort JSON into
`chapters.json` sequentially. Selectors key off `body[data-book]`,
`body[data-view]`, `body[data-chapter]`, and `body[data-art="<motif>"]` (motif
sets `data-art` automatically). Book CSS is unlayered and wins over
`@layer shared`; book-owned JS (via the `reader:chapter` event only) is
sanctioned for the ledger's assay ticks and progress behavior.

- **Cover (specimen note):** `#cover-art` holds `art/cover.svg` (class `plate`)
as the visual field; title/author lockup set left-of-center over the plate's
quiet lower-left quadrant; denomination cartouche "SPECIMEN · No. 1997"
top-right; BEGIN READING as an assay-bar button (gold fill sweeps on
hover/focus). Footer: "PRIVATE ISSUE — CYBERSPACE MINT" microtext. No centered
stack, no glow orbs.
- **Chapter opener:** asymmetric plate grid — left rail (~38%, min 300px) holds
the chapter's `#chapter-art` engraved plate SVG (rosette + motif + denomination
cartouche, class `plate`); right holds part line, Bodoni title, epigraph in
copper rule frame, then body. Below 900px the plate becomes a full-width banner
(max-height 320px) above the title. Per-chapter motif rules key off
`body[data-art="<motif>"]` (e.g. `body[data-art="asymptote"]`).
- **Reading body:** quiet single column on Vault; drop cap (Bodoni, Specie) on
first paragraph only; blockquotes/epigraphs in copper-ruled frames with Plex
Mono attribution; section heads small-caps with a short copper rule; footnotes
as margin notes ≥1100px, else inline collapsible.
- **TOC drawer:** ledger — each row: denomination numeral (Bodoni, chapter ink) +
title + word count in Plex Mono, separated by engraved hairlines; hover strikes
the row's rosette mini-mark.
- **Ending/nav:** prev/next as "plate turners" (engraved buttons with rosette
ticks); progress = assay bar (thin gold fill in an engraved channel, labelled
"ASSAYED n%"); colophon end-mark = chapter seal glyph. Keyboard follows the
frozen contract map (`j`/`k` chapters, `t` contents, `/` TOC filter, `s`
settings) — no custom bindings.

## 4. Motifs & medium (original authored SVG, flat strokes, no gradient decoration)

Core vocabulary: hypotrochoid/petal guilloche rosettes (11 distinct geometries —
petal count = f(chapter), dash rhythm, layer count), lathe-work borders (repeating
arc scallops), cross-hatch shading fields, circular microtext rings, denomination
cartouches, wax-seal glyphs. Reduced motion: plates are static line-work; only the
assay bar and hover states animate, all disabled under
`prefers-reduced-motion`.

Per-chapter motif (geometry + content anchor): see `manifest-draft.json`. In brief:
p1c1 asymptote · p1c2 strata · p1c3 furrow · p1c4 fallen capital · p1c5 rubble
courses · p1c6 severed belt · p1c7 knot-mesh · p1c8 Pareto spire · p1c9 broken
shuttle · p1c10 sundial · p1c11 double (misregistered) seal.
## 5. Signature idea

**Denominations.** Eleven chapters = eleven denominations of a private currency;
eleven rosette plates struck from one cover specimen. The reader visibly collects
the set (ledger TOC fills assay ticks as chapters complete).

## 6. Navigation treatment

Ledger TOC (§3); sticky reader header keeps book wordmark + assay bar; chapter
turners engraved; keyboard per the frozen map (`j`/`k`, `t`, `/`, `s` — `?` is
NOT a contract key; help text lives in settings). Resume restores chapter +
scroll offset (shared behavior).

## 7. Chapter-variation scheme

Shared grammar (plate-left opener, denomination cartouche, assay progress, quiet
body) + per-chapter ink lead, rosette geometry, motif, and epigraph frame —
specified per ID in `manifest-draft.json`. Cohorts: A-rupture (p1c1–p1c4) ·
B-dissolution (p1c5–p1c8) · C-reckoning (p1c9–p1c11), each with an ink arc.

## 8. Why this belongs to THIS book

Only this book is *about money itself* — its denationalization, its encryption,
its escape from the mint of the state. Engraved money-art with the state removed
is its thesis drawn. A portolan or dossier system could dress many books; a
private banknote cannot.

## 9. Implementation brief (for the engineer, via supervisor)

1. Add Google Fonts link: Bodoni Moda 400;500;700 ital + Source Serif 4 400;600
   ital + IBM Plex Mono 400;500. Fallbacks: Didot/Georgia/serif, Georgia/serif,
   ui-monospace.
2. Theme tokens per §1; `body[data-book="sovereign-individual"][data-chapter]`
   and `body[data-art="<motif>"]` selectors switch `--ink-lead` and treatments
   per manifest; never fight `@layer shared` — unlayered book CSS wins.
3. Build openers: `#chapter-art.plate` + `.plate-grid` (plate + title),
   `.denom-cartouche`, `.epigraph-frame`, `.assay-bar`, `.ledger-toc` styles in
   theme.css. Emit `design/chapters.json` per contract §4 from manifest-draft +
   cohort JSON (supervisor merges sequentially).
4. `art/cover.svg` fills `#cover-art` via the manifest (class `plate`);
   chapter plates (`art/plate-p1cN.svg`) fill `#chapter-art` the same way, with
   `caption` figcaptions and alt text where content-bearing.
5. Verify: fonts load (computed-style check), plates render ≥300px crisp, contrast
   pairs hold, reduced-motion honored, 390/820/1440px layouts.

## 10. ArtDirector verdict (recorded 2026-10-15)

**PASS WITH BINDING CONDITIONS (S1–S8)** — full text in
`.omp/design/critiques/sovereign-individual.md`. SPECIE approved; prototype
(cover + p1c1 + p1c7 + p1c11 at 1440/820/390) before cohort expansion. Binding:
S1 intaglio density survives render (crisp strokes, no moiré, plates never
hidden on phones) · S2 gold-echo firewall (engraved note, never gold glow) ·
S3 ink discipline (Copper/Seal graphics-only, never text; Verdigris leads ch. 3
& 7 plates only) · S4 eleven genuinely distinct rosettes · S5 microtext real
or honest ornament · S6 Bodoni display-only (bump weight not size at 390px) ·
S7 p1c11 misregistered seal reads intentional via colophon finish · S8
prototype scope = cover + p1c1 + p1c7 + p1c11 at three viewports.
