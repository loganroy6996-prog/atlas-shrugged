# Art Pre-Review R0 — Will to Power cohort sprites (NOT a prototype verdict)

Reviewer: FinalValidator. Date: 2026-10-15. No wired prototype yet; no chapters.json; theme.css
still baseline. Viewed 12 symbols (4/cohort) mounted via `<use>` on Inkblack (`sprites-r0.png`):
critique (Book II, Bloodline), knowledge (Book III, Verdigris eye), crown (Book IV, Heights Blue).

## Position: the gouge grammar holds across cohorts; draftsmanship varies — 3 repairs

What works: torn-edge knockout masses read as woodcut, not vectors (critique slabs, eye wounds);
match-logic Sulphur is genuinely rationed (one chip/flame/mark per plate); part inks separate
cleanly (blood / verdigris / heights-blue); the eye grammar sustains 13 variations without repeating
(k-p4c5 wound-eye vs k-p4c9 caliper-eye vs k-p4c13 white-bar eye are distinct instruments).

Repairs (pre-prototype):
1. **WP-A1: crown ladder plates are flat pictograms next to the gouged cohorts.** crown-p5c1
   (tablet + bars + star), crown-p5c3 (ladder + star), crown-p5c9 (funnel + star) use clean
   geometric fills with no torn-edge knockouts, no hatch, no gouge texture — beside critique's
   shattered slabs they read as a different (clip-art) medium. The crown.svg header itself notes
   shared-defs dependency. FIX: run the ladder/tablet/funnel masses through the same torn-mask +
   hatch treatment as critique (W1 TORN is normative per the sprite's own comment); keep Heights
   Blue + star. Re-view beside a critique plate.
2. **WP-A2: `k-eye` master duplicates as `k-eye` TWICE (duplicate id) and knowledge.svg has no
   `<symbol>`-level viewBox on the first `k-eye`.** Computed: two `<symbol id="k-eye">` elements
   (one bare, one with viewBox). Duplicate ids = undefined `<use>`/getElementById behavior; the
   v1.1 reader clones by id. FIX: delete the bare duplicate; every symbol keeps its own viewBox.
3. **WP-A3: cri-snapped-chain's "CAUS. PRIMA" caption + ring pair reads muddy at 150px.**
   The two interlocking rings + mono caption + arc below compete with the slab fragments above;
   the caption is the chapter's thesis but renders as clutter. FIX: separate registers — slabs
   above, ONE ring pair large below, caption as opener inscription (mono, in the HTML opener per
   the chapter_opener_contract fragment-count inscription pattern) rather than inside the SVG.

## Structural notes for the supervisor

- No `design/chapters.json` exists: 52 chapters × (src+symbol+motif+caption+rationale) merge is
  the critical path. Cohort JSONs (early/nature/crown, 48–60KB each) presumably carry entries;
  the merge must also record fleuron paragraph indices + NB indices per the opener contract.
- Early cohort (Book I ring states) has a 48KB JSON but NO sprite SVG in `art/` yet — verify it
  lands (violet ring grammar) before the prototype round.
- The crown.svg header flags that cloned `<use>`/mask refs resolve against the live document and
  demands shared defs in the served page — this is a REAL integration risk for the v1 fill path
  (reader inlines ONE symbol's clone; cross-symbol `<use href="#shared-def">` inside the clone
  dangles unless defs ship in the page or the clone carries them). Supervisor + ReaderLead must
  prove one masked symbol renders in `#chapter-art` before expansion. This is exactly what the
  wired-prototype gate is for.
- `reader-nb` classifier + NB margin bars are shared-side (v1 shipped); WtP styling of `.reader-nb`
  in Bloodline/Verdigris is book CSS work — show it on a real NB paragraph at R1.

## R1 requirements (when requested)

Wired prototype: cover (ring+hammer plate) + one opener per part (p2c1 ring / p3c4 tablet /
p4c5 eye / p5c3 ladder) + one NB-heavy chapter + one tablet short chapter (p3c1/p4c1/p5c1) +
one long chapter with mid-reading relief band (p3c4/p4c15/p5c3), at all three widths, through
the real page + merged chapters.json + slot fill; TOC with part plates; WP-A1–A3 fixed.
