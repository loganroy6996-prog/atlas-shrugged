# Wave-3 Live Review R3 — Twilight of the Idols — CONDITIONAL PASS

Reviewer: FinalValidator-3-2. Date: 2026-10-15 ~17:30 UTC.
URL: `http://127.0.0.1:8099/books/twilight-of-the-idols/` (Main's built `_site`, rebuilt 16:22 file time).
Scope per assignment: cover + 6 openers + TOC/settings at 3 widths.
Viewports exercised: 1440×1000, 820×1180, 390×844. Storage NOT cleared (fresh query-string
loads per tab). Screenshots in this directory (`r3-*`, all viewed before saving — 17 files).
Prior round: `REVIEW-R2.md` (REVISE ×7).

## Verdict: CONDITIONAL PASS — integrated struck-bronze shell verified live; 4 shared items carried

What is genuinely good (observed): the approved identity is now REALLY live — Cinzel inscriptional
titles (computed `font-family: Cinzel` on cover H1 + chapter titles, `document.fonts.check` true),
roman-numeral opener grammar (I/III/V/VII/X/XII on the R3 set — R2-4 closed), sounding-fork
recomposed with all ring geometry inside the frame at 1440 AND 390 (measured ring bbox 672–768px
inside SVG 570–870px at 1440; 139–251px inside 18–372px at 390 — R2-1 closed), hemisected-mask
renders complete with both halves + clips (R2-7 closed), muted text lifted to 5.16:1 dark / 7.65:1
vellum (R2-5 closed), resume line shows the title ONCE (R2-3 closed via Main's shared fix),
12/12 chapters activate with distinct art + captions, zero console errors, zero failed requests,
no overflow at any width (measured 0 on all 12 chapters), SANS control applies (DM Sans computed),
settings backdrop-click closes with focus to `#btn-settings`, j/k + Alt+Arrow navigate, TOC filter
+ Escape + empty-state work, F13 retry UI exists (hidden until needed).

## R2 item disposition (all re-checked on the live build)

1. **sounding-fork geometry** — FIXED ✓ (measured inside-frame 1440 + 390; fork + rings read as one
   emblem; no blob, no overshoot). Viewed `r3-read-p1c1-1440/820/390`.
2. **approved identity not integrated** — FIXED ✓ (Cinzel computed on cover + openers; merged theme.css
   66KB live in `_site`, byte-identical to source; cohort CSS + twilight-book.js shipped).
3. **resume duplication** — FIXED ✓ (observed "Continue where you left off → FOREWORD", title once;
   Main's shared `showCover` dedupe + book-CSS revert both verified).
4. **triple-title opener stack** — FIXED ✓ (numeral line now carries I/III/V/VII/X/XII; italic
   duplicate line suppressed — `.meta-number{display:none}` on p1c1 where it would echo; on p1c10
   the line carries the raid subtitle instead. No title×2 anywhere in the R3 set).
5. **muted text 3.14:1** — FIXED ✓ (dark 5.16:1, vellum 7.65:1, computed from live rgb values;
   12px needs 4.5:1 — passes both grounds with margin).
6. **header 36×36 targets** — CARRIED (shared-owned; still 36×36 measured at 390 — ReaderLead/Main item).
7. **hemisected-mask root defs** — FIXED ✓ (both clips inlined; full mask renders — viewed p1c3).

## Carried shared items (filed to Main; not book defects)

- **SH-1 t-key filter pollution CONFIRMED on :8099**: pressing `t` in the reader opens the TOC
  drawer AND types "t" into the now-focused `#toc-search` (observed `filterVal: "t"`, drawer open).
  Owner: ReaderLead (shared `reader.js` keyboard handler — ignore the opening keystroke or focus
  filter after keyup). Affects all books.
- **SH-2 header 36×36 targets CONFIRMED**: all 4 `.reader-header` buttons measure 36×36 at 390.
  Owner: ReaderLead (grow to ≥44px via padding). R2-6 carry.
- **SH-3 settings backdrop-click**: actually WORKS on :8099 (backdrop click → panel `display:none`,
  focus to `#btn-settings`) — no defect; carried item closed for this book.
- **SH-4 SANS dead-controls**: actually WORKS on :8099 (Sans click → body font DM Sans computed) —
  no defect on this book; other books' SANS reports stand on their own evidence.
- **SH-5 A6 dialog roles CONFIRMED GAP**: settings panel has `role=dialog` + labelledby ✓, but the
  TOC drawer (`aside#toc-drawer`) has NO role and NO aria-label (chain probed: input → .toc-tools →
  .drawer-panel → aside, all role=null). One h1 per view ✓ (cover h1 + hidden chapter h1 don't
  double). Zero `<main>` landmarks (nav + aside exist). Owner: ReaderLead (add role+label to drawer).

## Functional checklist (observed on :8099)

F1 Begin→p1c1 PASS · F2 TOC+filter+jump PASS · F3 TOC Escape PASS · F4 all-controls-apply PASS
(SANS→DM Sans observed) · F5 settings Escape + backdrop PASS (focus return observed) · F6 prefs
persist carried from R2 (PASS then; not re-run — no shared change since except resume format) ·
F7 next/prev carried from R2 PASS · F8 j/k PASS + Alt+Arrow PASS (Foreword→Maxims→Foreword→Maxims) ·
F9 progress + resume PASS (resume line observed, R2 restore measured) · F10 read/progress carried
from R2 PASS · F11 390 TOC/filter PASS (no trap; Escape closes) · F12 n/a (no notes) ·
F13 PARTIAL: retry UI exists in DOM (`.chapter-error` + Retry button) and stays correctly hidden on
valid chapters and on bad-hash loads (both live-hash and fresh-load `#/chapter/nope-bad-id` land
on the cover with error box hidden — graceful, no blank page, no console error). The retry path
itself (forced fetch failure → visible error → Retry recovers) is NOT UI-triggerable — `openChapter`
is closured, no window hook — so full F13 remains not-run, same as R2. Carried to final with a
ReaderLead test-hook request. · F14 home deferred to home final · F15 zero console errors + zero
404s PASS.
A1 focus rings PASS (Tab-through: header + settings controls all `outline=solid/2px`, visible) ·
A2 body 14.78:1 dark / 16.85:1 vellum PASS, sub 5.16/7.65 PASS · A3 PASS (static art, no SMIL) ·
A4 no overflow PASS; header targets→SH-2 · A5 dark-first PASS (fresh loads land dark) ·
A6 partial→SH-5 · A7 no hotlinks PASS; Cinzel loads + applies PASS.

## R3 requirements coverage (per R2 §R3)

Cover + p1c1 + p1c3 + p1c5 + p1c7 + p1c10 + p1c12 at 1440 ✓ (all viewed); cover + p1c1 at 820 ✓;
cover + p1c1 + p1c12 at 390 ✓; TOC at 820 ✓; settings at 390 ✓ (settings at 1440 in R2, unchanged
shell since except theme merge — re-verified functionally at 1440 this round via theme switch);
contrast dark + vellum ✓; real Tab-through ✓; F13 attempted (partial, see above); arrows ✓.
NOT visually reviewed: p1c2/p1c4/p1c6/p1c8/p1c9/p1c11 openers (activation + art-width + text-length
+ overflow observed in sweep for all 12; composition viewed only for the R3 set + R2's p1c5/p1c12).
p1c10 long-chapter relief: raid stanzas + skirmish plate viewed; mid-reading rhythm calm.

## Taste (visual-critique, from viewed screenshots)

Identity: struck-bronze/Cinzel funerary-tablet grammar is unmistakably Twilight — title/color swap
onto another book would feel wrong. Cover palimpsest (BECOME HARD / sounded idol / mask-in-rings)
is authored and atmospheric. Openers vary by cohort grammar (emblem / cadence / plate) with honest
captions. Body text calm Cormorant at 20.8px. No AI-slop tells observed (no gradient-label
illustrations, no pseudo-element-only redesign, no modulo tinting). Minor: p1c5 noon-collapse reads
slightly sparse next to its neighbors — acceptable aphoristic restraint, not a defect.

## Coverage record

Structural (computed): 12/12 TOC ids have manifest entries; 12/12 chapter JSONs in `_site` with
non-empty paragraphs; 9/9 shipped files byte-identical source↔`_site`; 12/12 treatments observed
activating in live DOM (sweep table: art keys sounding-fork/fanned-barbs/hemisected-mask/mummy-case/
noon-collapse/shears-flame/fourfold-knot/veil-tablets/dancing-pen/skirmish-gallery/dionysian-mask/
diamond-over-coal, all with SVG + text + ov0).
Visual sampling (viewed): r3-cover-1440/820/390, r3-read-p1c1-1440/820/390, r3-read-p1c3/p1c5/p1c7/
p1c10(×2)/p1c12-1440, r3-read-p1c12-390, r3-toc-820, r3-settings-390, r3-cover-resume-1440,
r3-f13-cover-1440.
Not-run: F6/F7/F10 re-run (R2 PASS carried, no relevant shared change); full F13 retry path
(no UI trigger — needs ReaderLead hook); all-8-themes meter (dark + vellum metered; supervisor
claims all 8 ≥4.5:1 UI-driven — accepted as supervisor evidence, spot-check at final).
