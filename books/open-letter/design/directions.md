# Open Letter — book identity: three directions + choice

Designer: `SupOpenLetter-2.OlIdentityDesigner`. Status: draft for ArtDirector critique.
Date: 2026-10-15. Book: *An Open Letter to Open-Minded Progressives* (Mencius Moldbug, 2008).

## The subject (what this book actually is)

- **Product:** a 14-chapter, ~121,600-word polemical serial (blog-origin, *Unqualified Reservations*),
  one continuous argument: plant doubt in progressive history (chs 1–4) → theory of government
  (chs 5–7) → the Cathedral mechanism and how to uninstall it (chs 8–10) → restoration program (chs 11–14).
- **Audience:** the library's owner, a dark-theme reader committing ~10 hours to dense long-form prose.
- **Job of the design:** make the cover and 14 chapter entrances visibly ambitious and unmistakably
  *this* book, while keeping the 10-hour reading body calm, legible, and quiet.
- **Texture notes from the text (all 14 sampled: openings + quartiles + endings):** every late chapter
  opens "Dear open-minded progressive," (epistolary frame); recurring concrete images — painted-canvas
  horizon that tears, Stuart/Jacobite restoration, the Cathedral as information machine, NRA eagle,
  Beltway-crater thought experiment, sovereign bankruptcy Receiver, pilots' directorate, space-lieutenant
  send-off. The voice is erudite-informal: footnotes, asides, droll cruelty. The design must feel
  *printed and subversive*, not SaaS.

## Baseline diagnosis (viewed in Eval browser, `olb2`, 1440×1000)

- Cover: centered Cormorant title + diamond rule + tagline; oxblood glow/grid. Competent, interchangeable.
- Ch 1 ("A Horizon Made of Canvas") and ch 9 ("How to Uninstall a Cathedral", the signature chapter):
  identical chrome — same meta block, same dashed rule, same drop cap. Nothing distinguishes the book's
  central metaphor from any other chapter. This is the exact weakness to fix: ch 9 must be the flagship opener.
- Computed body: Cormorant Garamond 20.8px/38.5px justified, calm — keep the calm, replace the chrome.

## References studied (with verification status)

1. Piranesi, *The Gothic Arch* (Carceri) and *Interior of St Peter's* (Vedute), via Met collection
   search snippets — https://www.metmuseum.org/art/collection/search/362798 and
   https://www.metmuseum.org/art/collection/search/406528. Lesson: engraved line-work builds
   monumental gloom from pure hatching; adopted as the cover medium. (Snippets read; NGA artwork page
   fetch timed out, NGA Piranesi exhibition index read via snippet.)
2. British Museum broadside on a comet (Schneider engraving over letterpress)
   — https://www.britishmuseum.org/collection/object/P_1873-0712-178 (snippet). Lesson: image-above-columns
   broadsheet stacking; adopted for opener composition.
3. NYPL frontispiece items + Brill *Gateways to the Books: Early Modern Frontispieces* (snippets):
   the architectural frontispiece (facade-as-title-page) tradition; adopted for the cover plate concept.
4. Penn *Printer's Ornaments* + Liverpool *O is for Ornament* (snippets): fleuron/tailpiece grammar;
   adopted for `motifs.svg` marginal devices.
5. Saul Bass title-sequence writing (NYT/Criterion/Arthouse snippets): one bold graphic idea per title,
   held with discipline; adopted as the "one signature per opener" rule.
6. `.omp/design/home/ART-DIRECTION.md` (read in full): the library's open-letter plate concept is
   "broadsheet column blocks with one redacted bar and a crimson initial" — my cover extends this
   vocabulary (columns + redaction) so shelf and book rhyme.
7. Google Fonts CSS (read in full, 2026-10-15): verified available — UnifrakturCook 700, EB Garamond
   400/500/600 + italic, IBM Plex Mono 400/500, Special Elite 400, Stardos Stencil 700, Saira Stencil One 400.
   Page currently loads Cormorant Garamond + DM Sans (index.html).

---

## Direction 1 — The Black-Letter Broadsheet (engraved night pamphlet) ✅ CHOSEN

**Idea.** The book as a forbidden 18th-century pamphlet series, printed at midnight: a blackletter
masthead, engraved plates, column rules, and one redaction bar per spread — the pamphlet the Cathedral
would pulp. The cover plate is a Gothic cathedral facade at night whose nave dissolves into broadsheet
columns; a white Jacobite cockade seals the portal.

**Palette (dark-first Ink):** Night Ink `#0D0B09` · Press Black `#141210` (elevated) ·
Newsprint `#EDE2CE` (text) · Dim Type `#A89A80` (muted) · Oxblood `#7E2A22` (large fields, seals) ·
Signal Red `#D64533` (small accents only) · Gilt `#C9A227` (rules, seal edges, numerals).
Light-theme mapping keeps plate fixed (jackets don't change with room lighting) and re-inks type.

**Type:** UnifrakturCook 700 (display: cover title, chapter titles — verified single weight, used large
only) + EB Garamond 400/500/600 + italic (body, quotes, captions) + IBM Plex Mono 400/500 (folio data:
chapter numerals, word counts, datelines — real data labels, never decorative eyebrows).
Scale: cover clamp(3–5rem) blackletter; chapter titles clamp(2–3rem); body 1.05rem/1.85; measure 62ch.

**Layout:** centered single column for calm; entrances break symmetry — the plate sits full-bleed above
the meta block, title set left against a wide engraved rule on desktop, centered on phone.

```
┌──────────────────────────────┐
│  ╔═ ENGRAVED PLATE ═══════╗  │  ← #chapter-art, full-bleed, ~420px
│  ║  (cohort scene + motif) ║  │
│  ╚═════════════════════════╝  │
│  CH.IX · 7,767 WORDS   (mono) │
│  How to Uninstall            │
│  a Cathedral                 │  ← blackletter, left on desktop
│  ════════❦════════           │  ← engraved rule + fleuron
│  I'm afraid, dear open-…     │  ← Garamond body, calm
└──────────────────────────────┘
```

**Medium:** hand-authored SVG engraving — layered silhouette shapes + copied hatch `<pattern>`s +
feTurbulence grain ≤0.08 opacity. No gradients-as-decoration; no stock; no text baked into art
(numerals/titles are HTML overlays so type stays selectable).

**Signature:** the dissolving facade — every cohort plate shows an institution (map, exchange, cathedral,
chancery) visibly *coming apart* into printed columns. One idea, fourteen variations.

**Chapter-variation system:** 4 cohort plates (Doubt: tearing canvas star-map; Sovereign: counting-house
exchange; Cathedral: the facade, most ambitious; Restore: chancery proclamation desk) + 12 shared motifs
from `motifs.svg` (cockade, wax seal, column rule, arch tracery, rose window, redaction bar, cartouche,
hatch set, corner ornament, end-mark, fleuron, stamp ring) assigned per chapter in `chapters-draft.json`.
Palette role rotates: Doubt = gilt-dominant, Sovereign = newsprint-dominant, Cathedral = oxblood-dominant,
Restore = signal-ember accents on ink.

**Why THIS book:** pamphlet wars are the book's native genre (ch 3's Jacobites, ch 9's dissolution of the
monasteries, ch 12's "what is to be done"); the Cathedral metaphor demands literal Gothic architecture;
the "Dear open-minded progressive" serial wants a masthead, not a dashboard. Swap in any other title and
the blackletter-plus-cockade plate reads wrong — the test passes.

## Direction 2 — The Correspondence File (annotated dossier) — THE RISK DIRECTION, not chosen as lead

**Idea.** The book as a leaked file on the reader's desk: manila-and-ink dossier, stamped seals
("RESET", "EXHIBIT IX"), marginal queries in pencil, red-string connections between chapters, each
chapter an exhibit tab. Maximum blog-to-book energy: conspiratorial, tactile, funny.

**Palette:** File Black `#101014` · Folder `#1B1A16` · Dossier Paper `#E8E0CC` · Stamp Red `#B33A2B` ·
Tape Amber `#D9A441` · Carbon Blue `#4A6FA5` (annotations) · Pencil `#8A8578`.
**Type:** Special Elite 400 (exhibit labels, stamps) + EB Garamond (body) + IBM Plex Mono (file refs).
All verified on Google Fonts.
**Layout:** asymmetric — exhibit tab rail on the left, stamped opener card, marginalia gutter on wide screens:

```
┌────┬─────────────────────────┐
│ EX │ ┌─ STAMP: RESET ──────┐ │
│ .I │ │ How to Uninstall…   │ │  ← stamped opener card
│ .IX│ └─────────────────────┘ │
│    │ body…          │ pencil │  ← marginalia gutter ≥1200px
└────┴─────────────────────────┘
```

**Medium:** mixed — SVG stamps/seals/string + CSS paper texture + (risk) a canvas red-string map on the cover.
**Signature:** the red-string board: the cover maps all 14 chapters as pinned exhibits joined by string.
**Variation:** each chapter gets a stamp + exhibit letter + string color; the board fills as you read (progress).
**Why it belongs:** the book IS correspondence — "Dear open-minded progressive" × 10, footnotes, exhibits
(Hayes quotes, Burke slap-fights). **Why not the lead:** gimmick fatigue over 121k words — stamps and string
delight on ch 1 and cloy by ch 9; the marginalia gutter starves the single-column reader of width; progress-as-
string needs book-owned JS state beyond the manifest. Its best ideas (wax/stamp seals, salutation treatment,
end-marks) are folded into Direction 1 as the marginal/seal subsystem instead.

## Direction 3 — The Midnight Chancery (sovereign-ledger gothic)

**Idea.** The book as the machine it proposes: a sovereign corporation's midnight registry — brass instruments,
ledger grids, land-registry maps, receiver's seals. Cold, precise, faintly menacing.

**Palette:** Registry Night `#0B0F14` · Slate `#141C26` · Vellum `#E6E1D3` · Brass `#B08D3E` ·
Seal Green `#1F5C4D` · Alarm Red `#C23B2E` (used twice in the whole book: ch 10's Receiver, ch 13's reboot).
**Type:** Stardos Stencil 700 (registry headings) + EB Garamond (body) + IBM Plex Mono (ledger figures).
All verified on Google Fonts.
**Layout:** strict grid — ledger header band with ruled columns, opener as a registry entry (No./Title/Entered):

```
┌──────────────────────────────┐
│ No. X │ TITLE │ ENTERED 2008 │  ← ledger band
│ ──────────────────────────── │
│ A Simple Sovereign           │
│ Bankruptcy Procedure         │  ← stencil
│ body…                        │
└──────────────────────────────┘
```

**Medium:** precise SVG line-work: grids, cartouches, brass instruments, contour maps; almost no texture.
**Signature:** the Receiver's ledger — ch 10's opener is an actual balanced balance-sheet of the Republic.
**Variation:** each chapter is a registry entry with its own instrument (compass, seal, sounding line, key).
**Why it belongs — and why it loses:** it fits chs 6/10/13 perfectly (clean-room government, bankruptcy
procedure, restoration tactics) but starves chs 1–4 (historical doubt wants maps and ghosts, not ledgers)
and trivializes ch 9 (the Cathedral is a church, not a spreadsheet). Genre-fit covers ~40% of the book.
Borrowed from it: the ledger-band idea becomes ch 10's specific opener treatment inside Direction 1.

---

## Choice rationale

Direction 1 wins on **coverage** (fits all four cohorts, not one), **stamina** (engraved calm sustains
10 hours; stamps and ledgers don't), **shelf-rhyme** (extends the home plate's broadsheet+redaction
vocabulary), and **buildability** (pure SVG+CSS against READER-CONTRACT v1.0 slots/manifest, no canvas
or JS state required). Direction 2 was the braver idea and supplied the seal/salutation subsystem; if the
ArtDirector prefers the dossier's risk, the identity can pivot — the cohort plates are the swappable layer.

## Self-critique vs the generic defaults (frontend-design)

- *Broadsheet-default risk:* the skill flags hairline-rules/newspaper-columns as a generic tell. This
  direction is not that: no newspaper grid, no ALL-CAPS eyebrows, no `01/02` numerals — the "broadsheet"
  is a subject-matter choice (pamphlet wars), carried by authored engraving plates and blackletter display,
  not by rules and columns.
- *Accent-word headline:* rejected — titles set whole in blackletter, no single-word color pop.
- *Gradient wash:* banned from this identity — depth comes from hatching and grain, not gradient fills.
- *Mono labels:* Plex Mono is used only for real data (numerals, counts, datelines), per the skill.
- *Motion:* one orchestrated entrance per opener (plate settles once, 1.2s, cut under reduced-motion);
  no scroll-jacking, no per-card hovers in the reading body.
