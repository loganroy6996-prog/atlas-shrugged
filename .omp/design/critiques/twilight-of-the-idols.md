# Twilight of the Idols — critique (ArtDirector)

Spec: `books/twilight-of-the-idols/design/ART-DIRECTION.md` +
`book-identity.json` + `book.css` + `art/cover.svg` (struck disc,
125-line SVG with radial engraving, bronze wash, ember core — read in
source; rendered prototype review pending).
Baseline: capture #11 (bronze dusk band + ember, centered shell).

## Verdict: PROVISIONAL PASS (binding conditions below)

"STRUCK BRONZE / sounding-out" is approved. The founding textual insight
is exactly right — the Foreword says idols are SOUNDED like tuning forks,
not smashed — and the design literalizes the book's stated procedure
rather than decorating with generic dusk. The 12-emblem motif table is
superb (tuning fork, fanned barbs, hemisected mask, mummy-case, six-step
noon collapse, shears-vs-branch, reversed arrows, veiled tablets, dancing
pen, struck shields, Dionysian mask, diamond-over-coal). Both rejections
are correctly argued (B's grief-woodcut vs the book's cheerful surgery;
C's fog literally ends at noon in p1c5). Provisional only until the
revised prototype renders — your supervisor's REVISE (boxed emblem,
title wrap, fleuron-seal interaction) must ALSO be satisfied before
cohort integration.

## The two questions, answered

1. **Distinctive vs the bronze-gradient baseline? Yes — by medium and
   procedure, and the cover.svg proves it.** The baseline was gradient
   washes; this is ivory line-engraving (incised strokes, radial arcs,
   crack polylines) + a sounding procedure (strike → crack → rings) that
   no other book performs. Keep every gradient in the SVG subservient to
   line-work (washes behind engraving, never the subject). Prototype
   review compares cover + two openers against capture #11 side by side.
2. **Is Cinzel too monumental for the aphorism chapters? It can be —
   apply the.percent rule.** Cinzel 600–700 tracked caps for cover,
   part plate, and the long discursive chapters (p1c3, p1c4, p1c7, p1c8,
   p1c10). For the aphorism/short chapters (p1c2's 44 maxims, p1c5's
   6-step fable, p1c12's verdict), drop to Cinzel 600 at the SMALL end
   of the clamp with wider tracking and MORE air — monumentality through
   spacing, not size. Never set aphorism body in Cinzel; Cormorant body
   stays.

## Binding conditions

- **T1 — Rings encode position: keep the count honest.** p1c1 shows 1
   ring … p1c12 the full set collapsing into diamond. Validator checks
   all 12 counts. Ring-count is CONTENT (progress through the sounding
   sequence), not decoration — this is the rare legitimate use of
   chapter-index-correlated art, because the index IS the procedure.
- **T2 — Cormorant body is a deliberate reclamation, not inheritance.**
   Twilight is the one book allowed to argue for keeping Cormorant prose
   (calm, already loaded, the emblems carry the identity). The argument
   must appear in the final ART-DIRECTION.md; if the prototype's body
   reads "default" next to its Cinzel display, switch body to Spectral
   or Newsreader.
- **T3 — Long p1c10 (11,939 words) gets mid-chapter raid markers.** As
   spec'd — ~30 titled raids need sounding ticks in the margin or the
   chapter reads endless.
- **T4 — Short p1c5/p1c12 are posters, not empty pages.** Airy openers
   need explicit end states (noon disc seal; diamond verdict + bronze
   inscription) so they read finished.
- **T5 — Noon-disc logic must rhyme WITHOUT copying Gay Science.**
   p1c5's noon disc is an engraved emblem (line-work, bronze); Gay
   Science's noon is architectural mural mass (flat gold). Different
   medium, different scale — hold that line in both prototypes.
- **T6 — Supervisor's REVISE first.** Boxed emblem, title wrap,
   fleuron-seal interaction — fix, re-render, THEN request prototype
   review. Prototype scope: cover + p1c1 + p1c2 + p1c5 + p1c10 +
   p1c12 at three viewports.

## Prototype review R1 (2026-10-15) — CONDITIONAL PASS (no expansion until TR repairs land)

Evidence viewed: all 12 files in `design/evidence/` (cover + TOC +
p1c1/p1c2/p1c5/p1c10/p1c12 + p1c12-end @1440; cover + p1c1 @820/390).
Live :8000 probed: `#cover-art` slot fills (2 kids, struck-disc SVG
renders), BUT cover/chapter titles compute to Cormorant — Cinzel is NOT
loading in the built page (evidence shots show Cinzel, so this is a
build/wiring gap, not a design gap). Chapter slots confirmed empty-
by-design (hidden, zero gap) — accepted for R1 ONLY.

### What works

- Struck-disc cover emblem is genuinely beautiful: idol face + fork +
  8 rings + BECOME HARD inscription, ivory engraving on forge-black.
- Cinzel display + bronze drop caps + ring end-marks read monumental
  and calm at once; body prose is comfortable.
- TOC as inscription wall with numeral disc + ring progress; p1c12
  diamond end-state + inscription close the book with real finality.
- Phone cover stacks with dignity; p1c1 phone reader is clean.

### Required repairs (TR1–TR6) — re-inspection, then expansion

- **TR1 — Cinzel must load in the built page.** Evidence shows Cinzel;
  :8000 computes Cormorant. Fix the font wiring (link/manifest/build
  copy) and re-probe computed styles. Nothing expands until display
  type is real in the build.
- **TR2 — Cut the triple title echo.** Every opener stacks
  header-chapter + Cinzel title + small-caps title + meta line (e.g.
  "The Hammer Speaks" ×3 + "THE HAMMER SPEAKS ◆"). Drop the redundant
  small-caps repeat line; keep header context, Cinzel title, meta.
- **TR3 — p1c10 raid markers are owed (T3).** The 11,939-word chapter
  currently ships zero mid-chapter sounding ticks. Author and wire the
  ~30 raid markers (margin ticks keyed to raid boundaries) before
  expansion — this was a binding condition, not a wish.
- **TR4 — First emblems must land (R2 gate).** Empty slots were
  accepted for R1; expansion requires at least p1c1 (tuning fork),
  p1c5 (noon collapse), p1c12 (diamond) emblems rendering in slots
  with honest ring counts (T1). Re-review happens WITH emblems.
- **TR5 — p1c2 opener needs the percent rule applied (T6/Q2).**
  "MAXIMS AND BARBS" at full monumental scale + tight tracking
  overpowers 44 small aphorisms. Drop to the small-clamp + wide
  tracking + air treatment ruled in the direction verdict.
- **TR6 — Cover caption + eyebrow clutter.** "The sounded idol —
  struck disc, tuning fork, and sounding rings" reads as alt-text made
  visible; demote to a true figcaption whisper or cut. The eyebrow's
  twin fork glyphs flank "A WORK BY" noisily — one mark, or none.

Benchmark note (P11): beside the homepage, the cover emblem and TOC
match the bar; the chapter openers (pre-emblem) do not yet — TR4 is
where that gap closes.

### R1 repairs verified (2026-10-15) — book-owned TR2/TR3/TR5/TR6 PASS

Refreshed evidence viewed (cover, p1c1, p1c2, p1c10, raid03 close-up).
TR2 echo cut (double title gone, meta line clean); TR5 p1c2 whisper
treatment correct (small Cinzel + air + bronze drop cap, maxims breathe);
TR6 caption demoted to whisper, eyebrow single diamond; TR3 raid system
works (RAID 01 margin label + ring-on-hairline dividers + G. Eliot
close-up show the grammar holding mid-chapter). Remaining: TR1
(integration: Cinzel in the fonts link at merge + re-probe) and TR4
(first emblems p1c1/p1c5/p1c12) — R2 review happens WITH emblems.
Two micro-notes for R2: the p1c10 drop-cap "M" collides with the RAID
01 label (offset the label above the cap line); cover footer meta runs
dim-small (raise to muted floor or cut the duplicated title echo at
the cover foot).
Both micro-notes verified fixed in fresh evidence (2026-10-15).
R1 book work complete; R2 gated on TR1 + TR4.
