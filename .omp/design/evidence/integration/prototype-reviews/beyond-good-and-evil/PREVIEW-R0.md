# Art Pre-Review R0 — Beyond Good and Evil seals + front CSS (NOT a prototype verdict)

Reviewer: FinalValidator. Date: 2026-10-15. Identity: The Numbered Ledger (ArtDirector APPROVED,
E1–E7). No prototype page yet. Viewed: 3 FRONT SVGs mounted with brass currentColor on ledger
black (`seals-r0.png`); read `design/front.css` head (660 lines, E7 scope p1c1+p1c2+p1c5).

## Position: the ledger instrument is exactly right; the sphinx seal must be redrawn

The system (298 section starts as archival range figures, margin numerals on every aphorism, Preface
and Aftersong in total silence) passes title-swap by construction and answers the benchmark's
"designed everything else" through apparatus, not ornament. The sorts seal (scattered type-sort
blocks with §/?/& sorts in a ticked seal ring) is excellent — precise, thematic, engraved. The
veil-line fleuron (single sanguine line + ring) is the right single mark for the silent Preface.
The front.css shows careful contract conformance (body[data-*] scoping, hidden-slot degradation,
light-theme deepening guards, per-chapter seal sizing).

Repairs (pre-prototype):
1. **BGE-A1: the sphinx-gap seal's figures are stick clip-art.** The seated sphinx and standing
   questioner are 5-line pictograms (viewed) — below the sorts seal's standard and below the
   benchmark bar for a chapter-I opener. The seal ring + tick marks + question-mark gap are good;
   only the two figures fail. FIX: redraw sphinx (paws + nemes + tail curve, still line-only) and
   questioner (cloak + staff, no face) at the sorts seal's line weight; keep the gap of "?" between
   them. Re-view at seal size (12rem) AND chip size.
2. **BGE-A2: seal SVGs rely on inherited `currentColor` with transparent ground — verify the fill
   path sets color.** The `:img` direct renders showed near-blank (expected: currentColor defaults
   to black on transparent). front.css sets `color: var(--bge-brass)` on the filled slot (computed,
   §1) — correct. FIX: none in art; but the wired prototype MUST prove the manifest `ledger-seal`
   class actually lands on the slot (my mounted render assumed it). If any chapter shows a black
   seal, that's a fill-path bug, not an art bug.

## Structural notes

- chapters.json covers 5/11 (p1c1,p1c2,p1c5,p1c10,p1c11); missing p1c3,p1c4,p1c6–p1c9. BACK cohort
  (back.json exists) must complete the merge. The E7 prototype scope (p1c1 silence + p1c2 full
  ledger + p1c5 maxim-set) is the right R1 slice — all three chapters have entries.
- `ledger.js` (book-owned JS: range figures, margin numerals, gloss) is referenced by front.css
  comments — its existence/status is unknown. Margin numerals on ~298 aphorisms via JS text-match
  is the highest-risk mechanism in this book: the R1 prototype must prove numerals attach to the
  right paragraphs (spot-check §146/§153/§287), degrade cleanly with JS off, and survive
  reader.js re-renders (openChapter replaces `#chapter-text` content — ledger.js must re-run on
  `reader:chapter`, never patch internals).
- Silence chapters (Preface p1c1, Aftersong p1c11) must be SHOWN at R1 (total system-off), not
  described — E4 is a visual claim.

## R1 requirements (when requested)

Wired E7 slice: p1c1 (silence) + p1c2 (full ledger: range figures, seal, margin numerals, gloss) +
p1c5 (maxim-set) at all three widths through the real page + manifest + slot fill + ledger.js;
BGE-A1 redraw shown; margin-numeral accuracy spot-check (§146/§153/§287); TOC + settings; JS-off
degradation screenshot.
