# Wave-3 Live Review R3 — Gentle Introduction — REVISE (1 minor: SANS dead; all GIR items verified)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~15:20 UTC. Requested by Main (priority).
URL: `http://127.0.0.1:8099/books/gentle-introduction/` (fresh + seeded loads).
Screenshots: `r3-cover-1440/820/390.png`, `r3-p1c1/p1c3/p1c5/p1c7/p1c8/p1c9/p1c10/p1c11-1440.png`,
`r3-p1c9-820.png`, `r3-p1c1/p1c9/p1c11-390.png`, `r3-toc-1440/390.png`, `r3-p1c1-light-1440.png`
(all viewed).

## Verdict: REVISE (1 minor) — GIR1a/GIR1b/GIR3 + manifest + contrast all verified; SANS pref dead

### Supervisor claims: verified one by one (all PASS unless noted)

- **11/11 manifest** — PASS (computed: all entries resolve to shipping files; observed 11/11
  activating with distinct plates: narthex/twin/lancets/cornerstone/westwork/arcade/chapels/
  spire/crossing/rose/sanctuary; boxes 560–686px wide, class arch/plate varies). ✓
- **GIR1a drop-caps** — PASS, better than claimed. First-letter census (measured, all 11):
  caps on p1c2(W)/p1c4(T)/p1c6(S)/p1c9(T) render gold floated (viewed: p1c9 "T" magnificent at
  1440+390); NO cap on exactly p1c1/p1c5/p1c7/p1c8/p1c11 (I-led, 20.8px inline — the bar-ghost
  is GONE, "I thought" reads clean at 1440+390) + p1c3/p1c10 (no-drop short). The per-chapter
  rule list in theme.css matches the live behavior exactly. ✓
- **GIR1b hyphen** — PASS (Main's data fix, served): source + rendered read "Unqualified
  Reservations—for" (viewed at 1440+390). ✓
- **GIR3 TOC ledger** — PASS (viewed 1440+390): 11 dose-notches + candle-rule part header +
  filter + clear-× + progress furniture + ember→gold read-state (ch.1 lit gold after reading ✓).
  Filter (mandate→p1c10) + empty state + Escape verified. ✓
- **Contrast** — PASS with margin: dark sub 5.32 ✓ (claim 5.32 CONFIRMED), num 6.17, part 8.47,
  body/title 14.90, captions 14.90; light sub 5.20 ✓ (claim), num 6.54; sepia sub 4.77 ✓, num
  6.01. (Paper caption 1.11 is my probe error — caption chip carries its own dark ground
  `rgb(16,15,13)`, composited ratio ≈14.9, verified by chip-bg read.)
- **Behavior** — PASS: settings rows (xl/loose/wide), j/k scroll-reset, progress 51.53%,
  resume shelf ("CHAPTER 9 · THE PROCEDURE AND THE REACTION" single ✓) + restore, dark-first
  on cleared storage (`data-theme=dark`, verified — Main's light paint was the persisted pref,
  correctly respected), zero console errors, F15 zero 404s/200, zero overflow all widths.
- **GIR2 tonal floor** — cover re-viewed (1440/820/390): twin-tower + rose + lit-door plate over
  the title block, dose rail, honest dark presence. My functional read: it holds (no void, no
  overflow, resume shelf renders). Taste judgment stays with ArtDirector per assignment; I file
  no defect.

### Required fix (1 minor)

1. **ISSUE (minor): the SANS reading preference is dead — clicking it changes nothing (body stays Source Serif).**
   WHERE: same mechanism as Zarathustra R2-2: book declares `--font-serif: "Source Serif 4"…`
   in per-theme blocks (theme.css:42+), which (unlayered) always beats shared
   `html[data-font="sans"] { --font-serif: "DM Sans"… }` (@layer shared).
   EVIDENCE (observed, measured correctly this time — click → read → reset): SANS click →
   computed `#chapter-text` family stays `"Source Serif 4", Georgia…`; SERIF identical.
   SEVERITY: minor (one dead control; F4). FIX (book-owned): add
   `html[data-font="sans"] body[data-book="gentle-introduction"] .chapter-text { font-family:
   var(--font-sans); }` (+ confirm `--font-sans` is declared per theme or inherits DM Sans).
   Re-verify: SANS → DM Sans computed; SERIF → Source Serif back.
   NOTE to Main/ReaderLead: this is now the SECOND book with the identical dead-SANS mechanism
   (Zarathustra R2-2). The contract should document the explicit-switch pattern for all books
   that re-declare `--font-serif` per theme — suggest a shared addendum + a build-time grep.

## R4 requirements (tiny)

Item 1 fixed + rebuild, then: SANS/SERIF toggle computed check, done. That closes the book
(GIR2 taste with ArtDirector; shared t-key/36px/backdrop/F13 carried at integration).
