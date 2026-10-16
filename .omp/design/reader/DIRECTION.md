# Reader chrome rebuild — direction (ReaderLead, 2026-10-15)

## Product / audience / job
The shared reading instrument for 13 books: a dark-first, calm, book-agnostic
chrome (header, contents, settings, opener frame, prev/next, notes UI, progress)
that feels as authored as the homepage benchmark while letting each book's own
identity dominate. Audience: long-form readers. Job: disappear during reading,
delight at every control touch.

## Benchmark read (homepage, :8123 screenshots)
- Gallery craft: deep near-black ground, plate frames with corner ticks,
  tracked-out small caps labels, hairline rules, generous whitespace.
- Authorship signals: per-item palette chips, tally ticks, numerals, quiet
  serif display + utilitarian sans meta, controls that feel typeset.
- Lesson for shared chrome: precision typesetting, hairlines, ticks, numerals,
  and spacious controls — executed in the ACTIVE BOOK/THEME tokens, never a
  house style that fights book identities.

## Three directions considered
A. "Instrument panel" — technical ticks, mono numerals, hairline grid.
   Rejected: mono/data-chrome reads generic-SaaS; fights literary serif voices.
B. "Manuscript margin" — fleurons, rules, marginalia everywhere.
   Rejected: ornament system already covers this; more would clutter quiet books.
C. "Gallery frame" (CHOSEN) — the chrome as a museum frame: hairline structure,
   corner ticks, typeset labels, numerals with tabular figures, generous air.
   It rhymes with the homepage's plate language and stays out of every book's way.

## Chosen system: Gallery frame
- Type: keep Cormorant Garamond (serif display/opener) + DM Sans (chrome/meta);
  tighten tracked labels (0.18–0.24em), tabular numerals for progress/counts.
- Palette: zero new hues — all chrome from active theme tokens
  (--bg/--surface/--border/--accent/--text-*). On theme switch the whole
  instrument re-skins; books override tokens per theme as today.
- Signature element: the hairline + corner-tick frame vocabulary —
  drawer/panels/cards get 1px borders with 10px corner ticks (via layered
  gradients, no extra DOM), progress as a fine rule with a diamond bead,
  chapter numerals set large in serif with a hairline beneath.
- Layout: header gains a two-line typeset lockup (part over chapter) with
  hairline underline on scroll; TOC rows get numeral column + title + meta
  with hairline separators; settings rows get hairline separators + airy
  groups; prev/next become framed plates with corner ticks.

## Uniqueness check (per frontend-design)
Risk: hairlines + ticks could read as the broadsheet default. Differentiator:
the frame vocabulary is drawn from THIS library's homepage plates (corner-tick
cards, tally ticks, diamond beads) — it is continuity with the approved
benchmark, not a generic newspaper treatment. No numbered 01/02/03 markers
(chapters aren't a stepped process), no single-word accent coloring, no
ALL-CAPS eyebrow above every heading (labels stay small and functional).

## Scope (shared/* only, book-safe)
CSS-only rebuild inside @layer shared + tiny JS (progress bead position,
settings group labels already present). No DOM restructuring that books depend
on; no touch to slot interiors; every change verified on Twilight (strong book
identity) + Atlas (weak identity) + IJ notes at 1440/820/390.
