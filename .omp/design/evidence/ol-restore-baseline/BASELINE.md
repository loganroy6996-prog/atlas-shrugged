# OL-RESTORE Phase 1 Baseline — p1c11..p1c14, books/open-letter

Validator: SupOpenLetter-2.OlCohortRestore.OlRestoreValidator (independent; no implementation files touched).
Server: http://127.0.0.1:8000/books/open-letter/ (HTTP 200, theme=dark first visit).
Date: 2026-10-15. Skills: visual-critique + review-skill injected; frontend-design + frontend-workflow read (local fallbacks per SKILL-MAP.md: /home/prateek/.agents/skills/frontend-*.md — no skill URI resolution available in this context, recorded as fallback).

## Coverage (every screenshot below was actually viewed)

Desktop 1440x1000 openers: p1c11, p1c12, p1c13 (longest title), p1c14 (longest text, 198 paras / 12,421 words / ~62 min).
Tablet 820x1180 openers: p1c11, p1c12, p1c13, p1c14.
Phone 390x844 openers: p1c11, p1c12, p1c13, p1c14 + p1c14 end-nav.
Extras: cover-1440, p1c11-mid-1440 (body rhythm), toc-drawer-1440, settings-1440.
Total: 19 PNGs in .omp/design/evidence/ol-restore-baseline/.

Chapter metadata observed: p1c11 "The Truth About Left and Right" XI, 110 paras, 7,046w; p1c12 "What Is to Be Done?" XII, 104 paras, 7,764w; p1c13 "Tactics and Structures of Any Prospective Restoration" XIII, 81 paras, 5,984w; p1c14 "Rules for Reactionaries" XIV, 198 paras, 12,421w. All four resolve and render; prev/next chain p1c11→p1c14 works.

## Visual critique (rendered pages, not source)

- Hierarchy: opener stacks part-line → title → numeral → time/words → dashed rule → fleuron → drop-cap body. Clean and calm, but all four chapters are visually identical except the title string and a 0.4rem rule-width step (8.5→9.7rem) that is imperceptible in screenshots. No per-chapter treatment exists yet — exactly what the cohort must add.
- Spacing: generous vertical rhythm; meta block breathes; body measure ~62ch justified. Phone p1c13's long title wraps to 3 lines gracefully.
- Composition: single-column reader, no opener art, no marginal motif, no section transitions across 110–198 unbroken paragraphs. Competent but plain; p1c14's 62-minute wall of text most needs long-chapter relief.
- Brand fit: oxblood/cream + Cormorant Garamond reads literary-broadsheet and suits Moldbug's epistolary essays; copper part-line, red drop-cap, red-ink meta details are coherent.
- Originality: currently a good generic reader, not yet a book-specific experience. Nothing on the page could only belong to An Open Letter.

## Measured checks (all observed, not inferred)

- Contrast (computed, dark theme bg #120d0c): body/title 15.8:1 PASS; copper part-line 8.38:1 PASS; meta-sub + meta-number (#7d5f57) 3.35:1 — below 4.5:1 for small text, ADVISORY (small caps metadata; redesign may keep or lift).
- Body type: Cormorant Garamond 20.8px at phone, justified with hyphenation; no clipping observed.
- Phone overflow: docW 412 vs viewport 390 (+22px). Source: #chapter-nav is `display:block` at phone while .nav-btn.prev has a wide min-content (long prev-chapter title "Tactics and Structures…"); prev button measured 393.7px wide inside a 353.2px nav. Off-canvas drawer children also report negative rects but are transform/clip-hidden, not the overflow cause. Reproduced in p1c14-endnav-390.png (prev card visibly wider than content column). Owner: reader-lead/shared CSS, NOT this cohort — filed here as observed baseline defect.
- Controls exercised: TOC drawer opens, active chapter highlights (p1c12 verified), Escape closes; settings dialog shows 9 theme buttons (8 + Auto), Escape closes; keyboard j/k moves p1c12→p1c13→p1c12; reload shows "Continue where you left off" with stored chapterId p1c12; progress/resume persistence works.
- Console: 0 JS errors, 0 console messages across the whole session.
- Accessibility spot: header icons have aria-labels; drawer/settings toggle aria-hidden correctly; theme seg uses aria-pressed; focus-visible styling not yet exercised (Phase 2).

## Baseline defects / advisories for the redesign

1. (Shared, pre-existing) Phone chapter-nav overflow +22px — needs reader-lead fix; cohort art must not widen it further.
2. (Shared, observed) .meta-number::after diamond (◆ via --art-diamond) sits tight against roman numerals ("CHAPTER XI ◆"); .chapter-meta::after fleuron renders as a small low-legibility mark under the rule at current size — cohort opener art should supersede or harmonize with these, not stack a third ornament on top.
3. (Advisory) meta-sub/meta-number contrast 3.35:1 — lift if the redesign keeps small metadata text.
4. (Scope confirmation) No blockquotes in p1c11 (0 found); long unbroken paragraphs throughout — chapter art must not obscure prose; relief elements welcome for p1c14.

## Verdict

BASELINE COMPLETE — no PASS/REVISE/BLOCKED on implementation (nothing built yet). Reader is functional and calm; artistically undifferentiated per chapter. Ready for Phase 2 inspection when the cohort lead signals implementation-ready with preview URL + integration notes.
