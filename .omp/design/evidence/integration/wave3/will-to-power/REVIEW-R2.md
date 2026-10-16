# Wave-3 Live Review R2 — The Will to Power — REVISE (1 blocking + 2 minor)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~11:40 UTC.
URL: `http://127.0.0.1:8099/books/will-to-power/` (Main's `_site`, rebuilt ~15:34).
Viewports: 1440×1000, 820×1180, 390×844. Screenshots in this directory (all viewed).
Manifest: 52/52 live (computed). Activation sweep: 52/52 observed with SVG in slot.

## Verdict: REVISE — one blocking inscription defect on every part-5 opener; the book is otherwise superb

The Black Notebook system (Fraunces display + Newsreader body + per-part mono/register discipline,
five cohort grammars, 343 authored fleurons, relief bands, end-seals, crown colophon, memoir TOC
program) is the deepest integration on the shelf. Verified live: fleuron AFTER-indices exact on
p2c2 (7/7), p3c4 (17/17), p4c15 (12/12), p5c3 (19/19); relief band p3c4 + p4c15 render in-flow
(624×150 band viewed); end-seal p3c4 + crown colophon p5c9 viewed; TOC part-ids + 3 movement
labels + 15 atoms; NB-mid + sub-note classes; settings apply; zero overflow all widths; body
15.68:1 / title 15.68:1 / part+sub 7.32:1 (all pass — no muted-text defect on this book).
Plate self-containment: all WtP symbols def-free (computed audit — no Open-Letter-family defect).

## Required fixes (owner SupWtP-3 unless noted)

1. **ISSUE (BLOCKING): part-5 opener inscription renders twice — text node AND ::before attr() mirror stack.**
   WHERE: `.crown-inscription` on every part-5 chapter (p5c1–p5c9), all widths.
   EVIDENCE (observed): `read-p5c9-1440.png` (viewed): "32 FRAGMENTS · 2,300 WORDS32 FRAGMENTS ·
   2,300 WORDS" runs together under the step-rule; `read-p5c3-390.png` (viewed): "198 FRAGMENTS ·
   11,975 WORDS" doubled across two wrapped lines. Root cause (source):
   - `design/book.js` `addInscription` sets BOTH `node.textContent = text` AND
     `node.dataset.fragments/words` ("visible text; CSS attr() mirrors as backstop").
   - `design/crown.css` `.crown-inscription::before { content: attr(data-fragments)" FRAGMENTS · "… }`
     unconditionally prepends the SAME string before the text node.
   - The header comment's "CSS attr() mirrors as backstop" describes a fallback that never
     switches off — both always render. (Contrast: knowledge.css correctly gates its fallback
     with `:empty::before`.)
   SEVERITY: blocking (every Book IV opener shows corrupted data text; p5c9 is the book finale).
   FIX (smallest): EITHER clear the text node in book.js (`node.textContent = ""`, keep dataset +
   aria-label — CSS renders the line), OR gate the CSS rule with `:empty::before` like knowledge.
   Prefer the book.js one-liner (keeps aria-label + dataset as the single source). Re-verify:
   p5c3 + p5c9 at 1440 + 390, exactly one inscription line each (measured node height ~17px).
2. **ISSUE (minor): fleuron index 98 on p4c15 lands AFTER the relief band instead of after paragraph 98.**
   WHERE: `design/book.js` FLEURONS.p4c15 index 98 vs RELIEFS.p4c15 `after: 98, mode: after`.
   EVIDENCE (observed): 12 marks land at paras [9,17,29,39,40,49,59,89,109,122,129] + one whose
   `previousElementSibling` is `FIG.nat-band` (the relief inserted after para 98 first — insertion
   order: fleurons run BEFORE reliefs in the main sequence? No: addFleurons runs before addReliefs,
   so the fleuron after para 98 exists, then the relief inserts between para 98 and the fleuron).
   Rendered order para98 → band → fleuron-dot. Visually harmless (band + dot are adjacent), but the
   authored index no longer means "directly after para 98".
   SEVERITY: minor. FIX: in book.js, either drop 98 from FLEURONS.p4c15 (the band IS the boundary
   marker there — cleanest), or insert reliefs before fleurons. Same audit for p4c19 (fleuron 148
   vs relief after 148) + p3c4/p3c10/p4c11/p5c3/p5c8 (check each relief index against its chapter's
   fleuron list). Re-verify: p4c15 mark census shows no FIG-adjacent fleuron.
3. **ISSUE (minor): p2c2's title is truncated mid-word by the source TOC ("…of the" + body "the Value of Existence").**
   WHERE: `data/toc.json` p2c2 title "Nihilism — Nihilism as a Consequence of the Previous
   Interpretation of" + chapter JSON carries the rest ("the Value of Existence" renders as body
   para 0). EVIDENCE: observed opener + TOC row both truncate ("…Previous Interpretation of").
   This is SOURCE DATA shape (Book teams must not hand-edit prose/TOC). Owner: Main/text decision
   (curator ruling: accept truncation as the book's real fragment-catalogue aesthetic, or adjust
   extraction). I do NOT ask SupWtP-3 to change it; record the decision. If accepted, no rendering
   change needed — the opener handles it gracefully.

## Notes (not defects — verified good)

- Meta-persistence trap: `reader.js` persists `#chapter-meta` across chapters (textContent-only
  repaints) while rebuilding `#chapter-text`. SupWtP-3's book.js ALREADY purges supervisor nodes
  explicitly (verified in source + live: single inscription after 3 navs). My mid-round "stacked
  inscriptions" screenshot was a STALE `book.js` (pre-purge) cached in my tab — after Main's
  rebuild + fresh load, accumulation is GONE. No defect; the purge is the correct pattern and
  other book-owned scripts should copy it. (Contract addendum suggestion for ReaderLead: document
  the purge requirement for all `reader:chapter` authors.)
- One transient `console.error [object Object]` at reader.js:853 + one 404 for p5c3.json appeared
  mid-sweep during Main's live rebuild (file now 200, error unreproducible across 6 subsequent
  navs). Build-race artifact, not a book defect. F15 re-verified clean after.
- One `pageerror` "ViewTransition skipped" — benign browser noise under rapid scripted navs.
- The p5c9 finale composition (viewed): EXHIBIT 52 OF 52 + step-rule + floated crown plate +
  caption + inscription + drop-cap + colophon + prev/next with NEXT correctly empty/disabled. ✓
- Part-title tablets (p3c1/p3c2/p4c1/p5c1, all "1"-numbered per source) carry no inscription per
  contract — verified p5c1 path in code; tablet openers to be viewed at R3.
- Crown seal `<use href="art/crown.svg#crown-seal">` symbol EXISTS in crown.svg (line 417) — the
  0×0 `<use>` boxes I measured earlier were un-triggered `getBoundingClientRect` on SVGUseElement
  in a hidden subtree, not missing art. The rendered starburst IS visible in the finale screenshot. ✓
- Fonts: Fraunces applied to display (computed), Newsreader body — both loaded. No hotlinks.

## Functional checklist (observed)

F1 Begin→p1c1 PASS · F2 TOC+filter+jump PASS · F3/F5 Escape PASS (shared paths as Twilight) ·
F4 settings apply PASS (size xl→1.7rem observed; full row sweep carried to final) · F6/F9/F10
resume+progress: cover shelf + state save observed working (full reload-restore carried to final
with the inscription fix) · F7 next/prev PASS (p5c9 NEXT empty/disabled correct) · F8 j/k/t/s
PASS (t-pollution item is shared, Open Letter R2-2) · F11 390 TOC/filter usable PASS ·
F12 n/a · F13 carried · F15 clean post-rebuild PASS (1 transient 404 during rebuild noted).
A1 focus rings (shared) PASS · A2 all PASS · A3 static art PASS · A4 no overflow PASS · A5
dark-first PASS · A6 carried · A7 PASS.

## R3 requirements

Item 1 fixed (+ item 2 audited) + rebuild, then: p5c3 + p5c9 + one tablet (p3c1) at 1440 + 390,
inscription single-line measure, p4c15 fleuron census, full F6/F9 reload-restore, Tab-through.
