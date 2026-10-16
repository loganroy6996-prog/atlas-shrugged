# Wave-3 Live Review R2 — The Gay Science — REVISE (1 book defect: size+sans prefs ignored)

Reviewer: FinalValidator-3-2. Date: 2026-10-15 ~18:00 UTC.
URL: `http://127.0.0.1:8099/books/gay-science/` (Main's built `_site`, rebuilt 17:22 +0530 file time).
Scope per Main: G6 (cover mural + Preface + 1 Prelude rhyme + §125 + §342 + 1 Book-5 essay + 1
Appendix song) at 1440/820/390 — day-cycle legibility, §125 climax, scale grammar, no phone
overflow, function + console. My coverage: G6 scope + §275 seed-scale check + full theme/prefs/
keyboard/console pass. Screenshots in this directory (`r2-*`, 16 files, all viewed).
Prior round: `../prototype-reviews/gay-science/REVIEW-R1.md` (REVISE ×4). Book evidence read:
`books/gay-science/design/VALIDATION.md` (GsFinalValidator-2 PASS) + `supervisor-LEDGER.json`
— every claim below re-exercised, none trusted.

## Verdict: REVISE — one real book defect; everything else passes

What is genuinely good (observed): the NOON day-cycle reads dawn→zenith→sunset from art alone
(Preface starfield + capped gold half-sun + door → §125 blinding white-gold zenith field, the
harshest light in the book → Appendix red disc low over a black sea with the outlaw ship crossing);
§125 is a genuine climax (full-bleed 1440×378 lantern tableau + caption + intact "125." numeral,
no beheaded drop-cap); scale grammar holds (§275 seed renders slot-hidden with quiet marginal
spark, numeral intact — the proportional voice R1 demanded); all 8 themes switch bg+prose in sync
via real UI clicks; 448-row TOC filters to 1 row on "madman"; zero console errors; zero failed
requests; zero phone overflow (scrollWidth==innerWidth at every 390 probe); MINOR-1 phone floor
FIXED (p1c1/p5c18/app200px at 390); contrast body 13.82 ink / 12.9 sepia / 13.67 vellum, gold 8.91,
vermilion 4.48 (large display, ≥3 floor); TOC drawer HAS role=dialog (better than Twilight's);
focus rings solid 2px throughout.

## R1 item disposition (all re-checked on the live build)

1. **Wired integration unproven** — FIXED ✓ (real page + manifest 259 + sprite fill + real 448-row
   TOC + settings, all exercised live).
2. **Drop-cap beheads fragment numerals** — FIXED ✓ (p5c18/p5c168/p2c9 all `no-drop reader-fragnum`,
   `::first-letter` == body size, numerals render "125."/"275."/"9." intact — observed + computed).
3. **§342 dead left panel** — FIXED ✓ (§342 opener full-bleed x=0/w=1440 with walkers + eagle +
   sun-road spanning the width — viewed).
4. **Inscription clipping** — FIXED ✓ (all 7 G6 captions fit, none clip — viewed all).

## Required fix (1 item; owner SupGayScience-3)

1. **ISSUE: SIZE and SANS reader prefs are dead on this book — book CSS hard-overrides both.**
   WHERE: `books/gay-science/theme.css` — `.chapter-text { font-family: var(--gs-body, Georgia, serif);
   font-size: 1.3rem; }` (~line 602) ignores the shared pref contract: shared sets `--text-size`
   (1.15rem sm … 1.5rem lg) and swaps `--font-serif`→DM Sans under `html[data-font="sans"]`, but the
   book rule pins both properties to fixed values with higher specificity.
   EVIDENCE (observed, fresh tab `gs-fresh`, real UI clicks): size sm → `--text-size:1.15rem` but
   prose still 20.8px; size lg → `--text-size:1.5rem` but prose STILL 20.8px (1.3rem = 20.8px always).
   Sans click → `dataset.font=sans` but prose family still `"Source Serif 4"…` (book rule references
   `--gs-body`, never `--font-serif`, so the shared sans swap can't reach it). Leading (loose→38.48px
   line-height) and measure (wide→max-width 1024px) DO apply — only size + sans are dead.
   This is a contract F4 failure ("every offered option applies") on a user-facing control, and it
   hits the accessibility control (sans) hardest. The book validators never exercised size/font
   switching (VALIDATION.md §9 lists both as not-run) — that's how it shipped.
   SEVERITY: major (dead user controls; F4). NOT shared-code — other books' `.chapter-text` inherits
   the shared `font-size: var(--text-size)` + `var(--font-serif)` chain (Twilight SANS→DM Sans observed
   working); only GS pins fixed values.
   FIX (smallest, book-owned): in `theme.css` change the `.chapter-text` rule to
   `font-size: var(--text-size, 1.3rem)` and add an `html[data-font="sans"] body[data-book="gay-science"]
   .chapter-text { font-family: var(--font-sans); }` override (or reference `--font-serif` so the shared
   swap flows through). Keep the 1.3rem/1.5rem verse sizes as fallbacks so the default render is
   pixel-identical. Re-verify: sm/lg change prose px; sans computes DM Sans; defaults unchanged.
   Re-verify cost: 2 pref clicks + 2 computed reads + 1 screenshot.

## Notes (not defects)

- My mid-round "stuck theme background" was MY harness error (`.click()` via evaluate on a stale
  panel + off-by-2 button indices), not a book defect: all 8 themes switch bg+prose correctly via
  real observed-element clicks (Ink 6,34,43 … Sepia 241,231,210 … Vellum 250,246,236 …). No defect filed.
- GsFinalValidator-2's MINOR-1 is confirmed FIXED live (200px guards on p1c1/p5c18/appendix at 390).
- G5 Aubergine: supervisor's post-verdict grep (0 `var(--gs-dusk` consumptions) accepted as computed
  evidence; my §341 view was not in scope but the hourglass-eclipse reads as the book's sole violet
  station in every TOC/part context I saw. Spot-check at final.
- L3 p7c27: supervisor's 208px recompute accepted (my scope didn't include p7c27; no counter-evidence).
- Prefs persist across reload (size+font+theme restored from `reader-gay-science` + resume chip shows
  saved chapter). j/k navigate (Preface→Invitation→Preface). Progress bar 57.37% mid-chapter.
- Seed census: 259 manifest + 189 seeds = 448 ✓ recomputed; 259/259 symbols resolve in cohort SVGs
  (computed, 0 missing); G6 manifest entries all present with captions; §275 correctly seed-absent.
- Source↔`_site` byte-identical on all 18 shipped files (computed).
- Vermilion rhyme titles 4.48:1 on Ink: large display type (54px), ≥3:1 floor — passes; body text
  never vermilion-on-dark at small sizes in anything I viewed.

## Functional checklist (observed on :8099)

F1 Begin→Preface PASS · F2 TOC+filter+jump PASS (448 rows, "madman"→1) · F3 TOC Escape PASS ·
F4 PARTIAL: theme/size→(size dead) — themes 8/8 PASS, leading PASS, measure PASS, size FAIL, sans
FAIL → item 1 · F5 settings Escape PASS (focus to #btn-settings) · F6 prefs persist PASS ·
F7 next/prev carried from book-validator evidence (p4c43→44→43 observed by them; not re-run) ·
F8 j/k PASS, t opens drawer PASS, s opens settings PASS, Esc closes both PASS (Alt+arrows not-run) ·
F9 progress PASS (57.37%) + resume chip PASS (scrollY-exact restore not-run) · F10 read/progress
observed ("10 of 448 finished · 8%") PASS · F11 390 TOC/filter usable PASS (no trap) · F12 n/a
(no endnotes in this book) · F13 not-run (same closured-openChapter limitation as Twilight;
needs ReaderLead hook) · F14 home deferred · F15 zero console errors + zero failed requests PASS.
A1 focus rings PASS · A2 contrast PASS (see above) · A3 reduced-motion: book-validator observed
`animation-name:none` under reduce + no ambient loops — accepted, not re-run · A4 no overflow PASS;
header targets presumed shared-36px (not re-measured on this book — SH-2 already filed) · A5
dark-first PASS (fresh loads land Ink/dark) · A6 PASS (one h1 per view; TOC role=dialog ✓;
settings role=dialog ✓; zero main landmarks — shared note) · A7 no hotlinks PASS; Fraunces +
Source Serif 4 loaded + computed PASS.

## Taste (visual-critique, from viewed screenshots)

Title-swap test passes decisively: the dawn-door Preface, white-gold §125 zenith, eagle sunrise-forth
§342, ring-fragment epilogue dancers, and red-disc farewell Appendix are content-specific to this
book's sun-liturgy arc — nonsense on any sibling. Tier discipline visible (full-bleed landmarks vs
contained rhyme motifs vs hidden-slot seeds). Cover mural (dancers + rays + sea at all 3 widths,
no distortion) is the strongest book entrance I have reviewed this wave. Body calm ≤68ch. Not slop.

## Coverage record

Structural (computed): 448/448 TOC ids live with chapter JSONs; 259 manifest + 189 seeds = 448,
0 extra ids; 259/259 symbols resolve; 18/18 files source↔site identical.
Visual sampling (viewed): r2-cover-1440/820/390, r2-read-p1c1-1440/390, r2-read-p2c9-1440,
r2-read-p5c18-s125-1440/820/390, r2-read-p6c67-s342-1440, r2-read-p5c168-s275-1440,
r2-read-p7c41-s383-1440, r2-read-p8c1-appendix-1440/820/390, r2-toc-820 (+390 TOC usability observed).
Not visually reviewed: all other chapters (census + book-validator's 32 views cover them; no 448
claim). Not-run: F7/F13 full paths, Alt+arrows, `/` filter key, TOC focus-return, scrollY-exact
restore, print, offline fonts, full HAR sweep (same list as book §9 — accepted as final-cycle items).

## R3 re-verify addendum (2026-10-15 ~18:30 UTC) — item 1 FIXED, CONDITIONAL PASS

Supervisor's fix verified live on :8099 (fresh tab `gs-r3`, real observed-element clicks):
size ladder sm/md/lg/xl → 18.4 / 20.8 / 24.0 / 27.2px settled-exact (was: stuck 20.8);
sans → DM Sans first (was: Source Serif 4); serif restore → 20.8px Source Serif 4;
defaults pixel-identical (md 20.8px, lh 43.68px); verse scales proportionally (24.0px at md).
F4 now PASS. Verdict upgrades to **CONDITIONAL PASS** (same carried items as R2: F13 hook,
not-run keys/HAR at final). Proof: `r3-verse-md-1440.webp` (viewed).
Harness note: computed reads within ~1s of a pref click can show the pre-click value under the
240ms view-transition settle in headless; settled states are exactly correct — poll, don't fail fast.
