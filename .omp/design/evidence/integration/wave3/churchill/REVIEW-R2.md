# Wave-3 Live Review R2 — Forty Ways to Look at Churchill — REVISE (1 minor: SANS dead)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~17:00 UTC.
URL: `http://127.0.0.1:8099/books/forty-ways-to-look-at-churchill/` (fresh tab, cleared storage).
Viewports: 1440×1000 / 820×1180 / 390×844. 7 rep openers + cover + TOC + settings + mask ends viewed.
Screenshots in this directory (all viewed).

## Verdict: REVISE — 1 minor (dead SANS); the FACETS system is exemplary

The FACETS identity (Fraunces display + Newsreader body, per-way mosaic plates with way-numerals
in-SVG, lozenge part tags, mask-q quiz grammar, ledger mini-index, epitaph/coda roles) is superb:
cover (viewed — shard fan + roundel + BEGIN), p1c1 intro (00 shard field), p4c2 merged ledger
(viewed 1440+390 — 9 heads + sticky mini-index with 9 anchor links, all jumping), p5c5 mask quiz
(viewed 1440/820/390 — 63-statement mosaic + T/F treatments + keyboard-honest Answers <details>,
Enter-toggles, solid-2px focus on summary), p5c10 finale, TOC (viewed 1440+390 — Fraunces numerals,
way titles, read ✓, progress "2 of 41 · 5%"). 41/41 manifest live, files+symbols resolve
(computed); 41/41 observed activating; role stamping census exact (p5c5: 63 mask-q + 16 quote +
setup; p4c2: 9 ledger-head + 46 ledger-row + 38 list-item + 8 verse). Body/title 14.53, part 7.22,
sub 4.66, num 8.15, captions 14.53 — ALL PASS (no muted defect). Filter (hitler→p5c3 exact after
clean dispatch), settings rows, j/k, progress 56.73%, resume shelf + EXACT restore (4216→4216 —
pixel-perfect). Zero overflow, zero console, F15 zero 404s/165. Dark-first. Tab solid 2px, one h1.

## Required fixes

1. **ISSUE (minor): the SANS reading preference is dead — body stays Newsreader (FOURTH instance of the family).**
   WHERE: `.chapter-text { font-family: var(--fw-body) }` (theme.css:468) with `--fw-body:
   "Newsreader"…` fixed — the shared `html[data-font="sans"]` switch rewrites `--font-serif`,
   which this book never consults for body text.
   EVIDENCE (observed, click→read): SANS → computed stays `Newsreader, Georgia, serif`;
   SERIF identical. SEVERITY: minor (one dead control; F4).
   FIX (book-owned): add `html[data-font="sans"] body[data-book="forty-ways-to-look-at-churchill"]
   .chapter-text { font-family: var(--font-sans); }` (or a facets-chosen sans stack).
   Re-verify: SANS → sans computed; SERIF → Newsreader back.
   NOTE to Main/ReaderLead: FOURTH instance (Zarathustra, GentleIntro, Sovereign + this).
   The contract addendum + build-time grep for books that bypass `--font-serif` for body text
   is now overdue — recommend a shared `:where()`-level rule or a documented per-book pattern.

## Notes (not defects)

- p5c5 renders 128 `<p>` + 1 `<details>` for 129 source paras — the answers para is INTENTIONALLY
  wrapped in a keyboard-honest `<details>` (facets.js C5, summary "Answers", Enter-toggles,
  focus-visible). Exemplary, not a para loss. ✓
- Mask-q at even indices / statements odd / answers at [128]: source shape confirmed (0 intro,
  1 instruction, 2..126 quiz pairs, 127 last statement, 128 answers) — supervisor's ledger
  (even 2..126, answers [128]) matches the data. ✓
- p4c2's 109 paras + ledger heads + mini-index verified live; p2c3 split continuations not
  individually inspected (cohort claim accepted; final spot-check).
- Filter pollution (filter contains "t" in toc-390.png) is the known shared t-key item, not re-filed.
- Way-35 plate caption ("sixty-three statements, five of them false") matches the 63-count data ✓.
- Cover at 390: shard fan crops to a sliver above the title — acceptable (title + CTAs first);
  no overflow.

## R3 requirements

Item 1 fixed + rebuild, then: SANS/SERIF toggle check, p2c3 spot view, done. That closes the book.
