# Cohort G validation notes — SupIJ-3.JestCohortGLead.JestCohortGValidator

Verdict: **PASS** (re-review 2026-10-15: R1 repair verified from rendered pixels, both gaps closed, no regressions).
Prior verdict was REVISE (R1 readability); R2 polish + R3 theme referral stand as recorded below.
Method: `skill://review-skill` + `skill://visual-critique` loaded via skill URIs (no fallback).
Runtime: repo root at http://127.0.0.1:8225, dark default, cohort-g.css injected at runtime
(`#cohort-g-runtime` link, never edited book files). Viewports: 1440×1000, 820×1180, 390×844.

## Static conformance — PASS
- `art/cohort-g.svg` parses as XML; 12 `<symbol>` ids match the 12 `contract_manifest.symbol`
  values exactly; every symbol carries its own `viewBox 0 0 800 450`; 0 `currentColor`;
  0 external refs; 0 gold (`C9A227`) in either cohort file.
- `design/cohort-g.css` (2382 lines): unlayered (`@layer` hit is a comment only);
  0 selector parts outside `body[data-book=…]`; classes `ij-*` + shared-hook styling only
  (`.reader-note/.reader-note-sub/.reader-noteref/.note-return-chip/.no-drop` qualified by §2
  hooks — no minted `reader-*`); no modulo / range tinting (explicit `nth-of-type(N)` only);
  0 `p1c` selectors; 0 `!important`; 0 `display:none`; `prefers-reduced-motion` guard present;
  uses `--ij-violet/--ij-mono` + shared tokens, violet rgba tints only.
- `design/chapters.json`: 12/12 entries carry `src art/cohort-g.svg` + matching `symbol`/`motif`.

## Rendered coverage (all viewed from pixels, not selectors)
- All 12 openers at 1440×1000: distinct engraved violet-register plates above prose,
  correct `Plate G1–G12` captions, J2/J5 clean, descent arc legible (threshold-light G1 →
  deep-water G5 → floodlit G10 → ember G12). Files `opener-p2c{N}-1440.png`.
- p2c2 at 3 viewports: masthead + colophon + CELLULOID/MAGNETIC VIDEO/CARTRIDGE bands +
  gauge + UNRELEASED/VAULT stamps (49 `.ij-film`, 69 stamps) + FOUND-DRAMAS inset +
  IJ-I…V? sigils (computed `::after` `◈J·I`…`◈J·V?—THE ENTERTAINMENT` on nth 8/17/29/44/62)
  + a–f tail. 2 columns at 1440 (`column-count: 2`), single column at 820, art ≥200px at
  390 (`svgH` 200, `artH` 258–275, no x-overflow on any chapter at 390).
- Mid-body spot-checks (1440): n110 head + Avril letter inset + Orin/Hal two-voice call;
  n269 letterhead + §1/3c/3e/5/7 thesis bands; n304 quote blocks (3px left-rule
  separation verified on quote-led paras vs blear narration); n321 duet header + DMZ-dream
  block; n332 dateline lockup; ®-ledger chant; n216 spotlight isolator (centered + air);
  p2c12 five tail lockups distinct (ACMÉ / cartridge slip / bibliography / §6 variant /
  closing ACMÉ) + endmark rule + chapter-end seal.
- Phone floor sweep: all 12 chapters at 390 — slot visible, svgH 200, no overflow.

## Behavior (click-driven, live)
- n21→211 (p2c1→p2c7), n45→304 (p2c3→p2c9), n87→24 (p2c4→p2c2): arrival on correct note
  with `#note-N` hash, `reader-note-flash` class observed, violet return chip
  (`↩ Return to …`) restores origin chapter + scroll (origin note/ref in viewport).
- Body→note p1c35→79 lands on p2c4 `#note-79`; return chip restores p1c35 with ref
  in viewport (612–636px of 1250px viewport).
- Non-links stay plain: p2c5 `sicker than 4.` (no `#note-4`, para unclassed); p2c8 p53
  zip+addr (no head); p2c10 no `#note-15`/`#note-9`; scene-setting Q.v. (n110/n304/n321),
  `(cf. Note 115)` n194, literary `q.v.` n38 all plain; p2c2 page ranges produce 0 refs.
- Noted: `Q.v. note a to Note 12.` (n354) and `(cf. …)` handling — n354 IS live-linked
  to note 12 (extension request in cohort JSON now covered by reader); click-drive of
  that single link did not execute (navigator landed on p2c2 instead of p2c11 before
  the click) — re-drive at re-review.
- Chrome: TOC/prev-next filing cards work (p2c12 PREV → p2c11); `s`/Escape opens/closes
  settings; progress persists (`reader-infinite-jest`: chapterId/scrollY/read[] live);
  console 0 errors; body 20.8px Newsreader `#E8DCC0` on `#0D0F0C` (~13:1).

## Repair list
- **R1 (REQUIRED — readability): p2c9 nth-of-type(78) + p2c10 nth-of-type(75) dateline
  lockups style 260-word (n304) and 353-word (n324) narrative paragraphs as centered
  Plex-Mono band blocks** (`p2c9-n304-1440.png`, `p2c10-n324-1440.png`). The lockup
  fiction only fits dateline-length heads (n332 at 4 words is perfect). Smallest fix:
  on those two heads, drop the full-paragraph mono-centering (keep the `::before`
  section label + flanking rules) so the scene prose reads in Newsreader measure.
- **R2 (OPTIONAL polish): IJ sigils render as small block captions inside 2-col rows**
  (`p2c2-ij2sigil-1440.png`) — present and correct, but visually buried. Consider
  +0.05rem size or letterspacing; acceptable as-is.
- **R3 (OUT OF SCOPE — refer to supervisor/theme owner, not cohort G): `#chapter-meta::after`
  `❦` + `.meta-rule span` mis-renders as a ~103px square with a diagonal artifact**
  (`meta-p2c1-crop.png`; span box 103×103px). Theme-owned; affects all chapters.

## Evidence files (`.omp/design/evidence/cohort-g/`)
opener-p2c1..p2c12-1440.png (12) · opener-p2c2-820.png · opener-p2c2-390.png ·
p2c2-body-0..5-1440.png · p2c2-tail-1440.png · p2c2-body-820.png · p2c2-body-390.png ·
p2c2-ij-sigil/ij2/ij2sigil-1440.png · p2c5-n110/letter/call-1440.png ·
p2c9-n269/n304/n304quotes-1440.png · p2c10-n321/n321b/n324/n332-1440.png ·
p2c11-chant-1440.png · p2c7-n216-1440.png · roundtrip-n21-211-arrival-1440.png ·
roundtrip-return-p2c1-1440.png · roundtrip-n45-304-arrival-1440.png ·
roundtrip-n87-24-arrival-1440.png · roundtrip-p1c35-before/79-arrival-1440.png ·
chrome-prevnext-1440.png · meta-p2c1-crop.png · NOTES.md (this file).
Gap (honest): p2c12 tail/end mid+bottom views were inspected live via viewport
screenshots but the two file writes timed out — re-capture `p2c12-tail/end-1440.png`
at re-review.

## Re-review (2026-10-15) — R1 VERIFIED, gaps closed
- n304 (`p2c9-n304-rereview-1440.png`): head para now Newsreader (computed
  `Newsreader, Georgia…`, start-aligned, hanging indent) with compact violet
  `::before` label `N304 ·STRUCK TERM-PAPER ·2030H 11 NOV` + flanking rules —
  scene prose readable, ornament retained. n324 (`p2c10-n324-rereview-1440.png`):
  same — Newsreader body + `N324 ·LOCKER ROOM ·17 NOVEMBER Y.D.A.U.` label.
  n332 unchanged (centered Plex Mono lockup, 1px rules; `p2c10-n332-rereview-1440.png`).
- Gap (a) closed: n354→12 click-driven live — arrival p2c1 `#note-12`
  (`12. Meperedine hydrochloride…`) with `↩ Return to Notes 345–384`; return
  restores p2c11 with n354 in viewport (473–512px of 1000px).
  File `roundtrip-n354-12-arrival-1440.png`.
- Gap (b) closed: `p2c12-tail-1440.png` (T1 ACMÉ colophon / T2 cartridge slip /
  T3 bibliography italic) + `p2c12-end-1440.png` (T3 tail / T4 §6 variant /
  T5 closing ACMÉ / endmark rule / filing-card prev-next) both on disk and viewed.
- Regression sweep: all 12 chapters re-rendered — correct `data-art`, slot
  visible, SVG present, captions intact; console 0 errors; static re-grep clean
  (0 gold, 0 unscoped parts, 0 `!important`, 0 `display:none`).
- Acceptance: 12 openers @1440 + p2c2 @3 viewports + round-trips both directions
  + console clean + contrast + no J2/J4/J5/P1 violations — ALL MET.
