# Wave-3 Live Review R2 — The Sovereign Individual — REVISE (1 minor: muted 3.42)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~15:00 UTC.
URL: `http://127.0.0.1:8099/books/sovereign-individual/` (fresh tabs throughout).
Viewports: 1440×1000 / 820×1180 / 390×844. Screenshots in this directory (all viewed).
Manifest: 11/11 live (computed). Activation: 11/11 observed with SVG in slot, zero console errors.
NOTE: sealed promptly when Main's GentleIntro R3 priority arrived — R2 evidence complete
(contrast sweep + battery + responsive + F15); Tab/A6 carried to R3 with the contrast fix.

## Verdict: REVISE — 1 minor (muted text 3.42:1); everything else viewed passes

The SPECIE system (Bodoni display verified loaded + applied, specimen-banknote plates with
denomination cartouches + knot-mesh rosettes + mint imprints, copper-ruled epigraphs, assay
captions, verdigris/copper/seal-red denomination arc) is superb: cover (viewed, full note with
XI plate rail + promise + seal), p1c1 asymptote plate, p1c7 knot-mesh (viewed 1440/820/390 —
verdigris rosette + microtext ring + "EVERYWHERE AND NOWHERE AT ONCE"), p1c11 double-seal finale
(viewed 1440+390 — misregistered second strike + XI cartouche, exactly the promised wit),
p1c9 broken-shuttle + Pfaff epigraph. TOC (viewed): Bodoni numerals, assay subtitles, progress.
Body/title 15.47, part/num 7.26. Filter (democracy→p1c10), settings rows, j/k, progress 40.39%
all pass. Zero overflow all widths. Dark-first. Bodoni + Source Serif verified.

## Required fixes

1. **ISSUE (minor): `.meta-sub` + plate captions at 3.42:1 on dark (11.52px, needs 4.5:1).**
   WHERE: read-time line + `#chapter-art figcaption` (`rgb(110,101,78)` on `rgb(11,10,9)`),
   metered on p1c1/p1c7/p1c9/p1c11 (dark).
   EVIDENCE: computed composited. FIX: lift the book's muted token (all 8 themes per §8) until
   metered ≥4.5:1; confirm captions rise with it (same token or separate caption token).
   Re-verify by meter on dark + one paper ground.

## Notes (not defects — read carefully, two are subtle)

- p1c9 epigraph "two separated framed boxes" (supervisor's own flag): measured — para 0
  (`.sv-epigraph`, y=383 h=173) + para 1 (`.sv-epigraph`, y=557 h=209) + attr (y=765). The two
  boxes are TWO SOURCE PARAGRAPHS (Pfaff quote split across paras 0–1 in data), each correctly
  framed. Whether they should JOIN into one frame is a design ruling, not a defect: the current
  rendering is honest to the data. My recommendation: join visually (shared frame, internal
  paragraph break) since the attr line serves both — but I do NOT require it. Supervisor to rule.
- p1c9 404 in my F15 + resume restoring p1c8-not-p1c9 + stored chapterId p1c8: ALL ONE
  build-race artifact (Main's rebuild copied the 190k p1c9.json at 16:06 mid-session; my tab's
  fetch hit the mid-copy window). File now 200, fresh-load p1c9 renders 461 paras with no error
  box. Resume/progress mechanism itself verified working (bar 40.39%, shelf + restore observed
  on the retry — the retry's chapterId mismatch is the same stale-state race, not logic).
  R3 re-verifies F6/F9 cleanly on stable bytes; no book defect filed.
- "sans" applies Source Serif — wait, measured `applied.font` stayed `"Source Serif 4"…` after
  clicking SANS. Flagging as UNRESOLVED-AT-SEAL: my probe read the family AFTER resetting to
  serif (probe-order error, same as Zarathustra's first sans probe). The font toggle was NOT
  actually verified on this book. R3 must click SANS and read BEFORE resetting (cf. Zarathustra
  R2-2, where the same pattern hid a real dead control). No defect filed until measured.
- Cover at 390 (viewed): plate dense but legible, buttons stack full-width, no overflow. The
  resume shelf ("CHAPTER 11 · …") renders single-title ✓.

## R3 requirements

Item 1 fixed + rebuild, then: muted/caption meter (dark + paper), SANS toggle computed check
(click → read → reset), F6/F9 clean re-verify, Tab-through + A6 snapshot. That closes the book.
