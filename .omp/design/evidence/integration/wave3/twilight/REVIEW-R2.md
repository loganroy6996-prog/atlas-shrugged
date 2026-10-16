# Wave-3 Live Review R2 — Twilight of the Idols — REVISE

Reviewer: FinalValidator-2. Date: 2026-10-15 ~10:00 UTC.
URL: `http://127.0.0.1:8099/books/twilight-of-the-idols/` (Main's built `_site`, rebuilt pre-wave-3).
Viewports exercised: 1440×1000, 820×1180, 390×844. Storage cleared at start; prefs/resume/reload
exercised live. Screenshots in this directory (all viewed, not just saved).
Prior round: `../prototype-reviews/twilight-of-the-idols/REVIEW-R1.md` (static prototype, REVISE ×3).

## Verdict: REVISE — wired integration works; the book shell + emblem draftsmanship are not finished

What is genuinely good (observed): manifest→slot→motif→hooks pipeline fires on all 12 chapters;
`body[data-art]` + slot class (motif/emblem/plate/cadence) correct per chapter; chapter SVG renders
in `#chapter-art` at useful scale (784px wide desktop); cover plate + resume shelf render; TOC
filter/jump/Escape, settings all-controls-apply, prefs persist, j/k/t/s keyboard, next/prev with
scroll reset, progress bar + resume restore, Library return (B1 fixed), zero console errors, zero
failed requests across 71 requests; no horizontal overflow at any width; body contrast 15.36:1.
The Four Errors plate (p1c7) and the p1c5 cadence opener show real authorship.

But the page is NOT the approved struck-bronze/Cinzel identity: SupTwilight-3 confirms
`theme.css` is still the old shell and `index.html` lacks Cinzel — the unmerged `design/book.css`
+ cohort CSS are the actual design. And one cohort emblem ships visibly broken geometry. This
round is therefore an interim wired review, not a final PASS.

## R1 item disposition (re-checked on the live build)

1. **Empty emblem gap** — FIXED by architecture: art now flows through `#chapter-art`, `hidden`
   when empty. Observed no gap on any chapter. ✓
2. **Prototype hardcoded origin** — MOOT for the built site (real page serves book-relative
   assets); the `design/prototype.html` file still exists but is not shipped as the reading
   experience. Not re-audited. ○
3. **`design/data` symlink** — FIXED: no symlink in `books/twilight-of-the-idols/design/`. ✓

## Required fixes (smallest change each; owner SupTwilight-3 unless noted)

1. **ISSUE: `sounding-fork` emblem geometry is broken — ring arcs overshoot the viewBox and read as a stray blob + floating bar.**
   WHERE: `art/hammerfall.svg` `#sounding-fork` (p1c1) as inlined by `reader.js` `fillArtSlot`.
   EVIDENCE: observed `read-p1c1-1440.png` / `read-p1c1-820.png` (viewed): a large black `?`-like
   blob occupies the emblem's top half, a short bronze bar floats detached at left, and the
   sounding-ring arc visibly overshoots the emblem's right edge into the margin. Measured:
   `.hf-ring` bounding box starts at x=−103px relative to the inlined SVG (extends 103px past the
   left edge) in a 784×549 rendered box. The `?` blob is the emblem's own question-mark shadow
   group (`stroke-width: 46`, opacity .5/.92) drawn at a scale that dominates the 600×420 symbol
   once its children are spliced into a fresh `<svg viewBox="0 0 600 420">` (contract §4 mechanism —
   shared code is behaving as specified; the artwork's internal composition is wrong for the slot).
   SEVERITY: major (the book's first opener; every visitor's first chapter-art impression).
   FIX: recompose `#sounding-fork` so all painted geometry (shadow group, ring arcs, hairlines)
   sits inside its 600×420 viewBox with margin — shrink/soften the `?` shadow so it reads as
   atmosphere behind the fork rather than a foreground glyph, and pull the ring arcs inside the
   frame. Re-verify: p1c1 opener at 1440 + 390, measured ring bbox fully inside the SVG box.
2. **ISSUE: approved identity not integrated — live page is the old shell (Cormorant, no Cinzel, no book.css).**
   WHERE: `index.html` (fonts link = Cormorant + DM Sans only), `theme.css` (old FALLING DUSK
   shell; zero `chapter-art`/`data-art` rules), unmerged `design/book.css` + `hammerfall.css` +
   `idolsmasher.css` (+ dusk cohort CSS).
   EVIDENCE: observed computed H1 `font-family: "Cormorant Garamond"…` on cover and chapters;
   `document.fonts.check('700 20px Cinzel')` false on a clean load… (later true only because a
   prior cell loaded it — clean-load state is Cinzel absent); `--tw-*` tokens resolve solely via
   SVG `var()` fallbacks (no `--tw-` definition in live theme.css); SupTwilight-3's own status
   ("theme.css is still the old shell, index.html lacks Cinzel"). The rendered page therefore
   cannot yet be judged against the approved ART-DIRECTION. SEVERITY: major (integration, owned
   by the running SupTwilight-3 wave — expected timing, not a surprise defect).
   FIX: complete the shell integration (fonts + theme.css merge + cohort CSS, sequentially), then
   request re-inspection. Re-verify: computed title font Cinzel on cover + opener; opener
   composition rules present in live theme.css; screenshots unchanged-or-better.
3. **ISSUE: resume line repeats the chapter title twice ("RECONNAISSANCE RAIDS … · RECONNAISSANCE RAIDS …").**
   WHERE: cover resume shelf (`#cover` continue block).
   EVIDENCE: observed `cover-resume-1440.png` + cover innerText: "RECONNAISSANCE RAIDS OF AN
   UNTIMELY MAN · RECONNAISSANCE RAIDS OF AN UNTIMELY MAN"; same duplication at 390
   ("FOREWORD · FOREWORD"). Likely `number_label` + `title` concatenated where they are identical
   (Twilight's TOC sets both to the chapter name). SEVERITY: minor (cosmetic, all books with
   identical number_label/title may show it — flag to ReaderLead if shared code owns the format).
   FIX: in the resume label, omit the second element when it duplicates the first (case-insensitive
   compare), or prefer `title` alone. Owner: ReaderLead if shared `reader.js` formats it, else
   SupTwilight-3. Re-verify: cover resume line shows the title once.
4. **ISSUE: opener stacks three near-identical title lines (PART… / TITLE / Title) with no chapter numeral.**
   WHERE: `#chapter-meta` on chapters where `number_label` == `title` (p1c1–p1c12: "FOREWORD /
   Foreword", "MAXIMS AND BARBS / Maxims And Barbs"…).
   EVIDENCE: observed all openers (e.g. `read-p1c7-1440.png`): caps title, then the same words in
   italic serif, then the read-time line. The TOC data carries a distinct `roman` numeral per
   chapter ("1"–"12") that never appears in the opener. SEVERITY: minor (composition; the
   approved direction's inscriptional grammar wants numeral + title, not title ×2).
   FIX (book-owned, no shared change): with the merged theme, restyle `.meta-number` via
   `body[data-book]` hooks so the numeral/identity line carries distinct information (e.g. show
   the roman numeral as the inscriptional element), or suppress the redundant italic line when it
   duplicates the title. Re-verify on p1c1 + p1c7.
5. **ISSUE: small muted text below contrast floor — `.meta-sub` + `.toc-sub` at 3.14:1.**
   WHERE: read-time line under the title, TOC per-chapter words/mins line, dark theme.
   EVIDENCE: computed composited ratios on `rgb(18,16,14)`: body 15.36:1 ✓, part line 8.12:1 ✓,
   `.meta-sub` 3.14:1 ✗ (11.52px), `.toc-sub` 3.14:1 ✗ (11.2px). WCAG AA needs 4.5:1 at these sizes.
   SEVERITY: minor (shared `--text-faint: #706050` token value vs book override decision).
   FIX: SupTwilight-3 to override `--text-faint` (and check `--text-muted`) for all 8 themes per
   contract §8 scoping, or ReaderLead to lift the shared default. Re-verify: metered ≥4.5:1 on
   dark + vellum + sepia.
6. **ISSUE: header icon buttons are 36×36px — below the 44px touch floor.**
   WHERE: `.reader-header` icon buttons (Library/Cover/TOC/Settings) at 390px.
   EVIDENCE: measured 36×36 each at 390×844. TOC rows (366×66) are fine; cover buttons fine.
   SEVERITY: minor (shared chrome — ReaderLead owns; book must not unilaterally restructure per §8).
   FIX: ReaderLead to grow header targets to ≥44px (padding, not glyph size). Re-verify by measure.

## Addendum (2026-10-15 ~11:00 UTC — cross-book defs audit from the Open Letter round)

7. **ISSUE (major): `hemisected-mask` (p1c3) references root-level defs the slot fill never copies — likely degraded live.**
   WHERE: `art/hammerfall.svg` `#hemisected-mask` → `url(#hf-mask-clip)` + `url(#hf-ring-clip-daylight)`
   (both root-level `<defs>`; every other Twilight symbol is def-free and renders fully).
   EVIDENCE: computed (source audit); p1c3 composition NOT yet viewed — confirm visually at R3.
   FIX: inline the two clips into the symbol (unique ids), same pattern as Open Letter's new files.
   Re-verify: p1c3 opener at 1440 + 390 by screenshot. Added to R3 requirements below (p1c3 joins the set).

## Notes (not defects)

- Vellum/light theme applies (observed paint + `data-theme` flip); earlier confusion was probe
  timing (double-click reverted before the read). All 8 themes + auto remain to be metered at final.
- Settings panel uses `display:none` when closed (not visibility) — my first probe misread it;
  Escape-close + focus-to-`#btn-settings` verified working. TOC Escape likewise closes (visibility
  + focus return verified).
- TOC empty state: `#toc-empty` ("No chapters match that filter.") exists with `hidden` class
  handling — observed present in DOM; filter-to-zero hides all 12 rows correctly. ✓
- `read[]` accumulation + "N of 12 finished · %" line update observed working (11 of 12 · 99%).
- `prefers-reduced-motion: reduce` honored at the media level (no CSS animation on body; SVGs
  contain zero `<animate>`/SMIL — static emblems, nothing to gate). ✓
- No stock hotlinks; Google Fonts (Cormorant/DM Sans) only until Cinzel integration lands.
- Titles with "And/Of/In" mid-caps ("Maxims And Barbs") are VERBATIM from `data/toc.json`
  (`title` == `number_label` in source) — not a renderer defect. Any title-casing change is a
  Main/text decision, out of book-supervisor scope; I do not request it.
- p1c10 (11,939 words, longest) opener + resume-restore (scrollY 20204 → 19806, progress 50.26%)
  verified; long-chapter relief (mid-reading rhythm) to be judged after shell merge.
- Touch target + contrast + resume-format issues marked ReaderLead-owned are ALSO reported to Main
  for routing; they do not block SupTwilight-3's shell work.

## Functional checklist (observed on :8099 unless noted)

F1 Begin→p1c1 PASS · F2 TOC+filter+jump PASS (incl. no-match empty state) · F3 TOC Escape PASS ·
F4 all settings controls apply PASS (theme/size/leading/font/measure, computed) · F5 settings
Escape PASS (display:none + focus return) · F6 prefs persist PASS (localStorage + computed) ·
F7 next/prev PASS (scroll resets to 0; prev disabled on first) · F8 j/k/t/s PASS (arrows not
separately exercised — carried to final) · F9 progress + resume PASS (bar 50.26%, restore ≈ exact) ·
F10 read/progress PASS (11 of 12 · 99%) · F11 390 TOC/filter PASS (Escape closes; no trap) ·
F12 n/a (no notes in this book) · F13 not-run (openChapter closured — needs UI path or hook; final) ·
F14 home checks deferred to home-review final · F15 zero console errors + zero 404s PASS (71 reqs).
A1 header focus rings PASS (solid 2px); TOC-row/Close-button focus states need the merged shell +
a real Tab pass at final · A2 body/part PASS, muted SMALL text FAIL→item 5 · A3 PASS (static art) ·
A4 no overflow all widths PASS; header targets→item 6 · A5 dark-first PASS · A6 headings/landmarks
carried to final snapshot pass · A7 no hotlinks PASS; fonts partially (Cinzel pending→item 2).

## R3 requirements (re-inspection after SupTwilight-3 yields)

Shell integrated + items 1+7 recomposed, then: cover + p1c1 + p1c3 + p1c5 + p1c7 + p1c10 + p1c12 at
1440×1000 / 820×1180 / 390×844, TOC + settings each at one width, contrast meter on dark + light,
real Tab-through, F13 error path, arrow-key check. Same bar as R2; no expansion waiver needed
(all 12 chapters already wired — this book is close).

## Coverage record

Visual sampling (viewed): cover-820/390 + cover-resume-1440, read-p1c1/p1c5/p1c7/p1c10/p1c12-1440,
read-p1c1-820, read-p1c1/p1c5/p1c7/p1c10/p1c12-390, toc-820/390(+full), settings-1440,
vellum-opener-1440. Structural: 12/12 manifest entries resolve (file + symbol, computed) and
12/12 treatments observed activating in live DOM (sweep table in review evidence). Not visually
reviewed: p1c2/p1c4/p1c6/p1c8/p1c9/p1c11 openers (activation observed, composition not viewed); p1c3 joins the R3 set per addendum item 7.
