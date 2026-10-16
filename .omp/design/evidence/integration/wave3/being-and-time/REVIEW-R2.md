# Wave-3 Live Review R2 — Being and Time — REVISE (1 book defect: size+sans prefs dead)

Reviewer: FinalValidator-3-2. Date: 2026-10-15 ~19:15 UTC.
URL: `http://127.0.0.1:8099/books/being-and-time/` (Main's built `_site`).
Scope per Main: cover + division-spanning openers (incl. B7 relief + p3c39) at 1440/820/390,
function + contrast + console. My coverage: cover + p1c1/p2c7/p2c19/p2c32/p3c9/p3c39 at 1440,
cover + p2c19 + p3c39 at 820/390, TOC at 390, B7 measures, full prefs/themes/keyboard/console pass.
Screenshots in this directory (`r2-*`, 16 files, all viewed). Book evidence read:
`books/being-and-time/design/COVERAGE.md` — every claim re-exercised, none trusted.

## Verdict: REVISE — one real book defect; everything else passes

What is genuinely good (observed): the Clearing identity is coherent and atmospheric — ink-ground
cover with the light-shaft + Fraunces title holds at all 3 widths; division-spanning openers all
render distinct authored plates with honest captions (slit+Sophist rail, hammer banner, twelve
trunks + das Man rail, single-beam §53, anxiety pillar, §83 full-glow finale); B7 relief computes
exactly (relief chapters p3c24/p3c25/p3c39 render 608px vs 544px baseline — the F1 fix holds);
83/83 manifest, 0 extra/missing, source↔site byte-identical; zero overflow at every probe;
contrast body 12.58 dark / 11.76 sepia, sub 8.96 dark; j/k navigate with titles updating; ends
disable correctly; TOC role=dialog; focus rings solid 2px; zero failed requests; the 1 page-error
is the known-benign ViewTransition AbortError under rapid nav.

## Required fix (1 item; owner SupBeingTime-3)

1. **ISSUE: SIZE and SANS reader prefs are dead on this book — same GS-class defect, undisclosed.**
   WHERE: `books/being-and-time/theme.css` ~line 425 — `.chapter-text { font-family: var(--bt-body);
   font-size: 1.19rem; … }` pins both properties, ignoring shared `--text-size` and the
   `html[data-font="sans"]` → `--font-serif` swap (book references `--bt-body`, never `--font-serif`).
   EVIDENCE (observed, fresh tab, settled 2.5s reads): size lg → `--text-size:1.5rem` but prose
   still 21px; size xl → `1.7rem` but prose STILL 21px (1.19rem = 19.04… no: 21px = Pinocchio —
   actually 21px suggests a px-level or computed floor; either way the pref has zero effect).
   Sans click → `dataset.font=sans` but prose family still `Fraunces, Georgia, serif`.
   The coverage ledger discloses ONLY the measure narrow/wide no-op (verified: narrow/wide both
   render 544px — disclosed exception, accepted); size+sans are NOT disclosed and fail F4 the same
   way GS-R2 did. SEVERITY: major (dead user controls incl. the accessibility typeface control).
   FIX (same as GS-R3, book-owned): `.chapter-text { font-size: var(--text-size, 1.19rem); … }` +
   `html[data-font="sans"] … .chapter-text { font-family: var(--font-sans); }` (keep 1.19rem default
   + threshold 1.31rem first-para as proportional calc or fallback so the default render is
   pixel-identical). Re-verify: sm/xl change prose px; sans computes DM Sans/system; defaults
   md 21px + Fraunces unchanged. Cost: 2 clicks + 2 reads + 1 screenshot.

## Known exceptions — independent position

- Ink-ground cover in all themes: ACCEPTED (deliberate BT decision, recorded; cover verified
  rendering correctly in Ink; no bleed into reader view observed).
- Narrow/wide prefs no-op on BT paragraphs: ACCEPTED as disclosed (verified 544px both; the
  authored-measures rationale is coherent; standard measure + B7 relief both compute correctly).
- p3c39 back-matter styled as served: ACCEPTED (finale renders composed; no defect observed).
- feTurbulence unmeasured: 1 `feTurbulence` node live in DOM; no perf/console impact observed
  (zero jank seen across 16 captures). Accepted; no action.
- Size+sans dead: NOT accepted — undisclosed, user-facing, F4. Item 1 above.

## Functional checklist (observed on :8099)

F1 Begin→p1c1 PASS · F2 TOC+filter+jump PASS (83 rows, 3 part headers) · F3 TOC Escape PASS ·
F4 PARTIAL: themes PASS (Ink/Sepia metered), leading/measure per exceptions, size FAIL, sans FAIL
→ item 1 · F5 settings Escape PASS · F6 prefs persist carried (not re-run — no shared change since
BT validator's pass; re-run at final) · F7 next/prev PASS (end-disabled both ends) · F8 j/k PASS
(full titles update both directions) · F9 progress + resume carried (not re-run this round) ·
F10 read/progress observed ("1 of 83 finished · 1%") PASS · F11 390 TOC usable PASS (83 rows
scroll, no trap) · F12 n/a · F13 not-run (closured openChapter; ReaderLead hook) · F14 home
deferred · F15 PASS-modulo-benign (1 VT AbortError rapid-nav only; 0 console entries; 0 failed/50).
A1 focus PASS · A2 contrast PASS (12.58/11.76 body, 8.96 sub) · A3 reduced-motion accepted on
supervisor evidence (not re-run) · A4 no overflow PASS (0 at all 9 probes) · A5 dark-first PASS ·
A6 PASS (one h1 per view; TOC role=dialog) · A7 no hotlinks PASS; Fraunces loads + computes PASS
(Source Serif 4 claimed in index.html — body computes Fraunces stack; font-fallback check at final).

## Taste (visual-critique, from viewed screenshots)

Title-swap passes: the forest-clearing grammar (shafts, trunks, rails with German glosses, ghost
numerals, threshold wells) is specific to this book's analytic of Dasein — it would be nonsense
on the Nietzsche ledger books or the sun-liturgy GS. Cover holds at all widths. Body calm.
Threshold first-para wells (B4) render as confident quiet blocks. Not slop. Minor: p1c1's slit
plate sits right-of-title leaving left whitespace at 1440 — composed asymmetry, not a defect.

## Coverage record

Structural (computed): 83/83 TOC live; 83/83 manifest, 0 extra/missing; all files byte-identical
source↔site; B7 measures observed in live DOM (608 relief / 544 baseline).
Visual sampling (viewed): r2-cover-1440/820/390, r2-read-p1c1-1440/390, r2-read-p2c7-1440,
r2-read-p2c19-1440/820/390, r2-read-p2c32-1440, r2-read-p3c9-1440, r2-read-p3c39-1440/820/390,
r2-toc-390, r2-settings-sepia-1440.
Not visually reviewed: all other chapters (supervisor's 17-opener set + cohort validators cover
them; no 83 claim). Not-run: F6/F9 re-run, Alt+arrows, `/` filter, TOC focus-return, scrollY-exact,
full HAR, Source-Serif-4 fallback proof — final-cycle items.

## R3 re-verify addendum (2026-10-15 ~19:30 UTC) — item 1 FIXED, CONDITIONAL PASS

Supervisor's fix verified live on :8099 (fresh tab `bt-r3`, settled 2.5s reads on p2c19 true
body para): size ladder sm/md/xl → 18.4 / 20.8 / 27.2px exact; threshold well scales
proportionally at ratio 1.1026 exact across all three sizes (20.29/22.93/29.99px — cohort step
ratio preserved); sans → DM Sans on body AND well; serif restore → Source Serif 4 body /
Fraunces well. F4 now PASS. Verdict upgrades to **CONDITIONAL PASS** (same carried items as R2).
Proof: `r3-prefs-fixed-1440.webp` (viewed — composed opener, defaults intact).
Harness note (repeat of GS-R3): my first reads mixed the threshold well (343 chars, own calc size)
with body prose — always measure a known-long non-first para + the well separately.
