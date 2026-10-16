# Wave-3 Live Review R3 — Open Letter — REVISE (1 new blocking: seals 404; R2 items verified fixed)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~12:10 UTC.
URL: `http://127.0.0.1:8099/books/open-letter/` (post-rebuild).
Screenshots: `r3-p1c1-1440/390.png`, `r3-p1c11-1440/390.png` in this directory (all viewed).

## Verdict: REVISE — R2 items 1+3 VERIFIED FIXED, but a new blocking seals-path defect fails F15

### R2 items: both PASS, independently confirmed

1. **Root-defs repair — PASS.** All 8 repaired symbols carry inlined `<defs>`; `<use>` census:
   p1c1 17/17 nonzero, p1c3 12/12 nonzero, all others 0 zero-box uses (8/8 `defs=true zero=0`).
   Viewed: p1c1 plate now full (gilt constellations + compass + weave + torn canvas + 3-column
   broadsheet tearing); p1c11 diptych full (waxed grid + seal + posted sheet). 390: both plates
   rich and legible. Supervisor's "17/17 stars" claim CONFIRMED live. ✓
2. **`.meta-sub` contrast — PASS.** Metered 5.24:1 on dark (was 3.30:1; claim CONFIRMED). ✓
3. Zero console errors on the repair sweep (the 3 `ViewTransition skipped` pageerrors later in the
   session are benign rapid-nav noise, same family as WtP's — not counted).
5. **ISSUE (BLOCKING): all 14 chapter end-seals 404 on the reviewed build — stale `theme.css` with `../art/seals/…` was served; source already fixed to `art/seals/…`. VERIFY ON REBUILD, do not re-fix.**
   WHERE: `books/open-letter/theme.css` lines ~133 + ~277–316 (15 rules: cockade marker + 14
   `p:last-child::after` end-seals).
   EVIDENCE (observed): F15 network census over the R3 session: 29 requests at 404, ALL of the
   form `http://127.0.0.1:8099/books/art/seals/end-*.svg`. Live CSSOM confirmed the served
   stylesheet's rule text read `url("../art/seals/end-torn-edge.svg")` — resolved against
   `…/books/open-letter/theme.css`, `..` climbs to `…/books/`, producing the observed 404s.
   POST-REVIEW CORRECTION (same session, before R4): source `theme.css` (mtime 15:41:45) and
   `_site` copy (15:41:50, md5-identical) ALREADY read `url("art/seals/…")` — the supervisor
   fixed the path (likely in the R3 wave) but the rebuild serving my R3 tab (tab loaded ~15:36)
   still carried the stale stylesheet. My tab's CSS was simply older than the fix.
   SEVERITY: blocking-UNTIL-VERIFIED (F15 = zero failed requests; 14 end-seals silently missing
   on the reviewed bytes). No source change needed — R4 re-census on a fresh load decides.
   Re-verify: F15 census 0×404 on fresh load + one chapter-end screenshot showing the seal
   (e.g. p1c1 torn-edge at 1440).

### Also verified at R3 (carried F-run)

- F4 settings rows: size/leading/font/measure all apply (xl 1.7rem, loose 2.1, sans swap,
  wide 46rem observed) ✓ (my probe printed only the last row's dict — all four clicks applied).
- F6/F9 resume: scrollY 11972 persisted; reload → cover shelf "CHAPTER 9 · HOW TO UNINSTALL A
  CATHE…"; resume restored p1c9 at scrollY 11547 (≈ exact) ✓
- F15 on reviewed bytes: FAIL → item 5 (29×404 seals on the stale stylesheet; source fixed since — R4 re-census on fresh bytes). Console: clean (ViewTransition noise excepted).
- Items R2-2 (t-key pollution) + R2-4 (36px headers) remain routed to ReaderLead via Main.

## R4 requirements

Fresh-load re-verify (no source change needed): F15 census 0×404, one chapter-end seal screenshot (p1c1, 1440), Tab-through + A6 snapshot pass. That closes the book from my side (shared items carried at integration level, not per-book).
