# Wave-3 Live Review R2 — The Fountainhead — REVISE (2 contrast minors; F-run carried to R3)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~13:00 UTC.
URL: `http://127.0.0.1:8099/books/the-fountainhead/` (Main's `_site`, 59/59 live).
Viewports: 1440×1000, 820×1180, 390×844. Screenshots in this directory (all viewed).
NOTE: this round was sealed early when Main's Atlas priority arrived — visual + activation +
contrast + F15 evidence is complete; the interactive F-run (settings/prefs/resume/keyboard) is
carried to R3 alongside the contrast fixes. No verdict inflation: full F-run still required.

## Verdict: REVISE — 2 contrast minors; everything else viewed is superb

The FURNACE system (Oswald inscriptional + per-part banner slabs + chainage FIG captions with
prose-verified needles in the manifest notes + hollow heat-numerals + finale triptych) is
magnificent: cover (viewed, Ember CTA + tower + resume shelf), p1c1 Keating opener (viewed,
cliff banner + hollow I + drop-cap), p4c20 ASCENT finale triptych (viewed at 1440/820/390 —
ocean/sky/crowns + white-hot platform + lone figure + Ember numeral + orange drop-cap "O"),
TOC drawer (viewed: Oswald CONTENTS, chainage subtitle, Ember numerals, per-chapter words/mins,
active-row highlight). 59/59 manifest entries live; 59/59 observed activating with zero console
errors; F15 zero 404s over 149 requests; zero overflow at all widths; body 15.83:1, title
15.83:1, part/caption 7.79:1. Motif census: keating 15, toohey 15, wynand 9, roark 18+2 one-offs.

## Required fixes

1. **ISSUE (minor): `.meta-sub` contrast 3.61:1 on all sampled chapters (p1c1/p2c1/p3c1/p4c20).**
   WHERE: read-time line (`#7A6A58`-class on `rgb(23,16,11)`, 11.52px).
   EVIDENCE: computed composited, 4 chapters. FIX: book `--text-faint` override (all 8 themes)
   or Main-routed shared lift. Re-verify metered ≥4.5:1.
2. **ISSUE (minor): hollow heat-numeral stroke below 3:1 on part-2 chapters — p2c1 Ember-deep stroke at 2.46:1.**
   WHERE: `#meta-number` hollow numeral (`transparent` fill + 2px stroke): p1c1 Bronze 7.79:1 ✓,
   p3c1 Gilt 8.15:1 ✓, p4c20 Ember 5.11:1 ✓, p2c1 Ember-deep `rgb(140,58,32)` 2.46:1 ✗.
   EVIDENCE: computed stroke-color vs composited bg (the stroke is the visible voice, so it is
   metered, not the transparent fill). Large display text needs 3:1.
   FIX (SupFountain-3): lift the part-2 numeral stroke (only) to ≥3:1 (e.g. brighten Ember-deep
   for the numeral while keeping it Ember-deep elsewhere), and meter ALL FOUR part strokes +
   finale. Re-verify: every part's numeral stroke ≥3:1.

## Notes (not defects)

- FIG callouts carry prose-verified needles in manifest notes (p1c1 cliff 2×, p1c8 photograph
  4×, p4c20 tin-plate/crowns/ocean-sky quotes) — the R1 FIG-verification requirement is satisfied
  structurally; spot-verified p1c1's cliff substring against the rendered body ("edge of a cliff"
  visible in the 390 screenshot ✓).
- Resume shelf shows "CHAPTER XX · CHAPTER XX" duplication (number_label == title) — same
  data-dependent family as Twilight R2-3; carried to the shared resume-format fix, not re-filed.
- TOC filter shows the shared t-key pollution (filter contains "t" after my `t` press — visible
  in toc-1440.png); same shared item as Open Letter R2-2, not re-filed.
- Cover at 390: tower art sits below the fold (buttons + shelf first) — acceptable prioritization,
  no defect; cover at 820/390 otherwise holds with zero overflow.
- Fonts: Oswald display verified applied (computed); no hotlinks.

## R3 requirements

Items 1+2 fixed + rebuild, then: contrast meter (sub + all 4 part numeral strokes) at 1440,
full interactive F-run (F1–F11 incl. settings/prefs/resume/keyboard/390-TOC), Tab-through + A6,
finale + one opener per part re-viewed. R3 then closes the book barring surprises.
