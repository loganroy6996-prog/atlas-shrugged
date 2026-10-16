# Gentle Introduction — Three Directions + Chosen Identity

Owner: GIDesigner-10 (SupGentleIntro-2 branch). Status: submitted to ArtDirector.
Skills read via URI (no fallback): `skill://frontend-design`,
`skill://frontend-workflow`, `skill://reference-study`.

Book: *A Gentle Introduction to Unqualified Reservations* (Mencius Moldbug,
2009). 11 chapters p1c1–p1c11, single part ("Gentle Introduction / Eleven
doses of the red pill"), 100,114 words. Full TOC read; representative prose
read from ALL 11 chapters; deep reads p1c1 (the red-pill pitch, sodium core),
p1c5 (the Cathedral portrait, Goya's Black Paintings, the horn-crowned hog),
p1c9 (Reaction/Reboot, Chuck Norris sovereign, steel rule). Baseline viewed
rendered at http://127.0.0.1:8000/books/gentle-introduction/ (cover + p1c1 +
p1c9, 1440px): dim teal waterlines + swell glow, content-free; dose arc
invisible. Baseline brief `.omp/design/critiques/gentle-introduction.md`
(N1–N3) and shared `.omp/design/ART-DIRECTION.md` v2 are binding on this doc.

## References actually studied (title + URL + what was taken)

1. **"Black Paintings" — Wikipedia** (https://en.wikipedia.org/wiki/Black_Paintings).
   Read in full, incl. the 14-plate catalogue and Quinta del Sordo hang.
   Taken: Direction 3's tenebrist premise (murals painted for one house, never
   meant to leave it — a private ugliness, like UR's "uglier reality") and its
   rejection logic (Goya is one simile in c5, not the book's world).
2. **"Carceri d'invenzione" — Wikipedia** (https://en.wikipedia.org/wiki/Carceri_d%27invenzione).
   Read in full, incl. 2nd-state tonal reworking ("strongly bitten lines and
   broad areas of tonal contrast"). Taken: Direction 1's plate medium —
   engraved architectural fantasy with receding vaults holds up as *authored
   image* at chapter scale where washes fail; the second-state lesson (commit
   to bitten line + tonal mass, no mid-tone murk) is a binding plate rule.
3. **Saul Bass, *Anatomy of a Murder* poster, 1959 — SFMOMA**
   (https://www.sfmoma.org/artwork/2000.514/). Collection page read; single
   dismembered-paper-symbol composition studied. Taken: one-idea-per-title
   discipline — Direction 1 spends its boldness on exactly one signature (the
   arch + the candle) and keeps everything else quiet; Directions 2–3 were
   cut partly for needing two ideas each to survive.
4. **James R. Mercein, "The Aesthetics of Labels," *American Journal of
   Pharmacy* XLIII, 1871** (https://www.henriettes-herb.com/eclectic/journals/ajp/ajp1871/06-labels.html).
   Read in full. Taken: Direction 2's label grammar ("a rivulet of text
   flowing through a meadow of margin"; oblong beats shield; terse matter)
   and, honestly, its epitaph — Mercein warns that over-crowded labels read
   as advertisements, and eleven prescription labels would sell the book
   short exactly that way.
5. **Google Fonts stylesheets (load verification, not design refs)** —
   Marcellus, Source Serif 4, Crimson Pro, DM Serif Display, Alegreya, Abril
   Fatface, Lora, IM Fell English: all returned HTTP 200 `@font-face` CSS
   with gstatic TTF sources on 2026-10-15. Registry check: Fraunces /
   Newsreader / Plex Mono / Cinzel NOT used (closed/crowded per §4).

## Direction 1 — THE CONTEMPLATIVE CATHEDRAL (chosen)

One-sentence: eleven stations in a still cathedral — nested pointed-arch
plates, one sanctuary candle burning through every dose, light authored from
narthex dark (c1) to sanctuary gold (c11).

- Medium: hand-cut SVG architectural plates (bitten line + tonal mass,
  Piranesi 2nd-state rule). Stone arches, lancet tracery, one flame.
- Composition: the title stands *inside* the architecture. Cover: west
  front at night, great portal right-of-center with the door ajar and
  candlelight spilling down the steps; title block inscriptional, left,
  in the calm field. Chapters: arch plate above the meta block, plate
  width and light authored per dose. Eleven dose-notches (small arch
  marks) run the cover base, ember → gold.
- Type: **Marcellus** display (inscriptional Roman caps; solemn, stone-cut,
  unheld in registry) + **Source Serif 4** body (registry: quiet text face
  may repeat; voice carried by plates + numerals) + DM Sans chrome.
- Palette: Narthex `#100F0D` · Ashlar `#1E1B16` · Vellum `#ECE2CE` ·
  Candle `#DFA050` · Sanctuary Red `#A83A2C` · Ashen `#9C917E`.
- Dose arc (N2): light value + architectural depth authored per chapter —
  c1 outer door ajar in near-black; c2–c3 outer arches; c4–c8 receding
  nave arcades, candlelight growing; c5 the great westwork plate
  (flagship); c9 crossing; c10 rose window; c11 sanctuary in full light
  (climax). Never modulo: each plate is drawn for its chapter (see
  manifest plan below).

```
cover (1440):  ┌────────────────────────────────────────┐
               │  A GENTLE INTRODUCTION      ╱╲         │
               │  to Unqualified Reserv.    ╱portal╲    │
               │  ── ◆ ──                  │ajar+glow│   │
               │  Mencius Moldbug           ╲_____╱    │
               │  Eleven doses…        ▾▾▾▾▾▾▾▾▾▾▾ dose │
               │  [Begin] [Contents]        notches     │
               └────────────────────────────────────────┘
chapter:       ┌───────────────┐
               │   ╱ arch ╲    │  plate (~320px, authored)
               │  │ plate  │   │
               │ PART I · DOSE V            ← dose numeral
               │ The Modern Structure       ← Marcellus
               │ ── candle rule ──
               │ calm Source Serif body…
               └───────────────┘
```

Sketch (cover portal composition — massing study, not final art):

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="300" height="180" role="img" aria-label="Direction 1 sketch: cathedral portal with door ajar">
<rect width="200" height="120" fill="#100F0D"/>
<rect x="118" y="18" width="52" height="90" fill="#1E1B16"/>
<path d="M118 108 V52 Q118 30 144 18 Q170 30 170 52 V108 Z" fill="#0A0908" stroke="#9C917E" stroke-width="1.5"/>
<path d="M132 108 V60 Q132 44 144 36 V108 Z" fill="#DFA050" opacity="0.85"/>
<path d="M144 36 Q156 44 156 60 V108 H144 Z" fill="#100F0D" stroke="#9C917E" stroke-width="1"/>
<rect x="14" y="34" width="76" height="6" fill="#ECE2CE"/>
<rect x="14" y="44" width="60" height="6" fill="#ECE2CE" opacity="0.7"/>
<rect x="14" y="56" width="30" height="3" fill="#A83A2C"/>
<g fill="#DFA050"><circle cx="118" cy="112" r="1.2"/><circle cx="124" cy="112" r="1.2"/><circle cx="130" cy="112" r="1.2"/><circle cx="136" cy="112" r="1.2"/><circle cx="142" cy="112" r="1.2" opacity="0.85"/><circle cx="148" cy="112" r="1.2" opacity="0.7"/><circle cx="154" cy="112" r="1.2" opacity="0.55"/><circle cx="160" cy="112" r="1.2" opacity="0.4"/><circle cx="166" cy="112" r="1.2" opacity="0.3"/><circle cx="172" cy="112" r="1.2" opacity="0.2"/><circle cx="178" cy="112" r="1.2" opacity="0.15"/></g>
</svg>

## Direction 2 — ELEVEN DOSES (apothecary labels) — rejected

One-sentence: the book as a course of patent medicine — each chapter an
engraved dose label (numbered vial woodcut, ornamental border, terse
matter), TOC as dispensary ledger.

- Medium: engraved ornament SVG (cartouches, vial woodcuts, rule frames).
- Composition: centered label-cartouche openers; cover = the great
  prescription label ("TAKE ELEVEN DOSES").
- Type: IM Fell English display (period print voice) + Crimson Pro body.
- Palette: Bottle Black `#0D1310` · Brass `#B08D3E` · Label Cream
  `#EFE3CB` · Tincture Oxblood `#7E2A22` · Faded Ink `#8D8471`.
- Dose arc: tincture deepens c1→c11; dose numerals I–XI on every label.

Sketch (dose-label opener massing):

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="300" height="180" role="img" aria-label="Direction 2 sketch: apothecary dose label">
<rect width="200" height="120" fill="#0D1310"/>
<rect x="45" y="10" width="110" height="100" fill="none" stroke="#B08D3E" stroke-width="2"/>
<rect x="51" y="16" width="98" height="88" fill="none" stroke="#B08D3E" stroke-width="0.75"/>
<rect x="88" y="24" width="24" height="26" fill="#7E2A22"/>
<rect x="94" y="18" width="12" height="8" fill="#B08D3E"/>
<rect x="70" y="60" width="60" height="6" fill="#EFE3CB"/>
<rect x="80" y="70" width="40" height="5" fill="#EFE3CB" opacity="0.7"/>
<rect x="88" y="82" width="24" height="9" fill="none" stroke="#EFE3CB" stroke-width="1"/>
</svg>

- Rejection (book-specific, not portable): the dose pun is the book's
  *subtitle joke*, not its argument — eleven prescription labels reduce
  100k words of rebellion history and sovereign procedure to packaging,
  and Mercein's own warning convicts it (labels that advertise instead
  of vouching). Worse, a label-per-chapter grammar is exactly the banned
  "label on a panel counted as illustration" at 11× repetition, and the
  register is wrong: Goya, secession, mandates of heaven need
  monumentality, not ephemera. Fell/Crimson is handsome but costumed;
  the book's archaism is a weapon, not a theme park.

## Direction 3 — BLACK MURALS (Goya tenebrism) — rejected

One-sentence: tenebrist mural plates — heavy black grounds, ochre/umber
figure compositions per chapter (the Hog, the Castle, the Reboot),
title reversed out of the dark field.

- Medium: layered SVG "paintings" (chiaroscuro masses + grain filter).
- Composition: full-bleed mural openers, title overlaid on dark mass;
- Type: DM Serif Display + Lora body.
- Palette: Quinta Black `#0C0B09` · Umber `#6B4A2A` · Ochre `#C98F2D` ·
  Bone `#E5D9C3` · Bloodline `#8E2F24` · Ash `#8F8A7E`.
- Dose arc: lit area of each mural grows c1→c11.

Sketch (mural opener massing):

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="300" height="180" role="img" aria-label="Direction 3 sketch: tenebrist mural with lit mass">
<rect width="200" height="120" fill="#0C0B09"/>
<ellipse cx="140" cy="70" rx="52" ry="44" fill="#6B4A2A"/>
<ellipse cx="140" cy="62" rx="30" ry="26" fill="#C98F2D" opacity="0.8"/>
<ellipse cx="133" cy="58" rx="10" ry="12" fill="#0C0B09"/>
<rect x="14" y="40" width="80" height="8" fill="#E5D9C3"/>
<rect x="14" y="52" width="56" height="8" fill="#E5D9C3" opacity="0.75"/>
<rect x="14" y="68" width="40" height="3" fill="#8E2F24"/>
</svg>

- Rejection (book-specific, not portable): the book *mentions* Goya once
  (c5, as an insult aimed at USG) — building the identity on a simile
  inverts the text. Figurative murals for abstract chapters (AGW/KFM/HNU
  case law, Plan Moldbug's corporate governance) would force invented
  narrative events the contract forbids. And SVG chiaroscuro at chapter
  scale collapses into murky texture below ~200px on phones — the exact
  wash P1 exists to kill. It also defies binding N1 outright.

## Comparison

| Axis | 1 Cathedral (pick) | 2 Apothecary | 3 Murals |
|---|---|---|---|
| Native to text? | **Yes — the Cathedral is the book's coinage** | Subtitle joke only | One simile in c5 |
| Dose arc | Narthex→sanctuary light+depth | Tincture shade (thin) | Lit-area % (thin) |
| Plate ambition | Architecture holds at 200px+ | Labels shrink to stickers | Murals muddy small |
| Register | Monumental, still (N1) | Ephemeral, jokey | Figurative, forced |
| Sibling clash | None (OL dissolves; we contemplate) | None, but weak | Risks OL oxblood rhyme |

## Dose-arc logic (N2, authored — never modulo)

Light value, architectural depth, and candle presence are set per chapter
by hand. Cohort A (p1c1–p1c3) *Narthex*: outer arches, near-black fields,
Sanctuary Red ember accents. Cohort B (p1c4–p1c8) *Nave*: receding
arcades, candlelight spreading, c5 westwork flagship. Cohort C (p1c9–p1c11)
*Crossing → Sanctuary*: full Candle gold, c10 rose window, c11 sanctuary
climax. Cover shows the whole arc at once: night front + lit door + eleven
dose-notches ember→gold along the base.

## Manifest plan (chapters.json per READER-CONTRACT §4; IDs p1c1–p1c11 stable)

| Chapter | Motif | Class | Caption | Rationale |
|---|---|---|---|---|
| cover | west-front-night | plate | — | Night front, door ajar, dose-notches |
| p1c1 The Red Pill | narthex-door | arch | Dose I · The outer door | Reader at the threshold; ember only |
| p1c2 The American Rebellion | twin-arch | arch | Dose II · Two arches | Loyalist vs rebel histories, side by side, intact |
| p1c3 AGW, KFM, and HNU | three-lancets | lancets | Dose III · Three lancets | Three case studies = three tall windows |
| p1c4 Plan Moldbug | cornerstone | arch | Dose IV · The cornerstone | First stone of the argument laid |
| p1c5 The Modern Structure | westwork | plate | Dose V · The westwork | The Cathedral's portrait; cohort flagship |
| p1c6 Brother Jonathan | arcade | arch | Dose VI · The arcade | Winners' history receding in bays |
| p1c7 The War of Secession | twin-chapels | arch | Dose VII · Two chapels | Secession as separation, not ruin (N1: nothing dissolves) |
| p1c8 Olde Towne Easte | spire | arch | Dose VIII · The spire | Town seen from below; the century's tower |
| p1c9 The Procedure and the Reaction | crossing | plate | Dose IX · The crossing | Reboot at the center; lamp lit |
| p1c10 The Mandate of Heaven | rose-window | plate | Dose X · The rose | Heaven's mandate as rose light |
| p1c11 The New Structure | sanctuary | plate | Dose XI · The sanctuary | Full light; climax plate, most luminous |

Cohort files: `design/cohort-a.json` (p1c1–p1c3), `design/cohort-b.json`
(p1c4–p1c8), `design/cohort-c.json` (p1c9–p1c11) → supervisor merges into
`design/chapters.json`. Art: `art/cover.svg` (this submission) +
cohort-authored `art/<motif>.svg` plates per the grammar in
ART-DIRECTION.md §6. No `reader-*` classes; hooks
`body[data-book="gentle-introduction"]`, `body[data-chapter]`,
`body[data-art]`; `#cover-art` / `#chapter-art` slots.

## Prototype plan (for supervisor/engineer; N3 minimum: cover + p1c1/p1c6/p1c11)

Cover (this submission's `art/cover.svg` in `#cover-art`, ≥1/3 viewport)
+ chapter openers p1c1 (darkest plate), p1c6 (mid-arc arcade), p1c11
(full-light sanctuary), each at 1440×1000 / 820×1180 / 390×844, light +
sepia themes verified (plates fixed per O2 precedent; tokens remap).
This designer viewed `art/cover.svg` rendered standalone at all three
widths on 2026-10-15 (local review harness, notes in §"Cover checks"
of ART-DIRECTION.md).

## Title-swap statement (P2, honest)

This system would also suit a monastic history or a book of hours — no
such book is in the catalog. It would fail *Infinite Jest* (needs the
bureaucratic shout), *Zarathustra* (needs solar liturgy, not stone
stillness), *Twilight* (needs struck bronze, pagan register), and *Open
Letter* (needs architecture mid-dissolution + blackletter pamphlet war;
ours is contemplative by binding N1). It fits *Gentle Introduction* best
because the Cathedral is this book's central coinage, the narthex→
sanctuary walk is its poison→restoration argument in space, and no other
catalog book earns nested arches by name.
## ArtDirector verdict (2026-10-15): DIRECTION 1 APPROVED with GI1–GI7

Full text: `.omp/design/critiques/gentle-introduction.md` (supersedes the
N1–N3 brief). Binding conditions folded into ART-DIRECTION.md,
book-identity.json, and art/cover.svg before handoff:
GI1 N1 absolute (nothing dissolves); GI2 dose arc felt side-by-side
(p1c1/p1c5/p1c11); GI3 Piranesi second-state rule (plates hold at ~200px);
GI4 Marcellus large-only + quiet Source Serif body; GI5 one flame grammar,
light drawn not blurred; GI6 prototype = cover + p1c1/p1c5/p1c6/p1c11 at
three viewports; GI7 homepage-benchmark parity through this book's
stone-still identity. Benchmark note (USER-FEEDBACK.md): quiet doses earn
beauty through composition, numerals, rules, and controls — not louder
plates.
