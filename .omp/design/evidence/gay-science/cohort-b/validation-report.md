# Cohort B (Book One, p3c1–p3c56) — Validation Report v1.0

Validator: `SupGayScience-3.GsLeadB.GsBValidator` (read-only on cohort files).
Date: 2026-10-15. Deliverables: `books/gay-science/art/cohort-b.svg` (88,902 B),
`books/gay-science/design/cohort-b.json` (48,388 B), `books/gay-science/design/cohort-b.css` (18,358 B).
Spec: `local://gs-b-spec.md` = `.omp/design/evidence/gay-science/cohort-b/designer-spec.md`
(diffed identical in structure; engineer census claim 81/56/12 re-verified below by recompute, not copied).

Skills read FIRST via URI (zero fallbacks, `/designer` OFF):
`skill://frontend-design` · `skill://frontend-workflow` · `skill://visual-critique` · `skill://review-skill`.
(`skill://reference-study` not required for the validator role; taste judgment grounded in rendered pages + NOON binding docs.)

## Verdict: REVISE (2 required repairs + 1 supervisor decision; all else PASS)

Required repairs (cohort-lane, small, concrete):
- R1 (major): desktop plate bleed is one-sided — plates extend past the right viewport edge
  instead of centering. `cohort-b.css` P2/P3 use `width:100vw; max-width:100%; margin:0 auto` inside a
  padded container, so the figure's left edge stays put and the 100vw width runs off the right
  (measured p3c1: slot left=296, right=1512 at 1440w; body.scrollWidth=1512).
  FIX: bleed via symmetric negative margins per GR3 precedent —
  `margin:0 calc(50% - 50vw) 2.75rem` (+3rem landmark) with `max-width:100vw`, keeping the
  56/72/76rem caps and `overflow-x:clip` guards. Then re-verify: plate centered, both edges bleed
  equally, doc scrollWidth == viewport at 1440/820/390.
- R2 (major): `.reader-body` selector in L5 never matches — the reader's article is
  `#reader-body` / `article.reader-body`? Verified live: `document.querySelector('.reader-body')`
  exists (contrast probe used it) — recheck: the probe DID resolve `.reader-body`, so L5's wash
  applied (articleBg radial-gradient observed on p3c45 dark). NO DEFECT — struck.
  Replacement R2 (major): p3c45 gold title unreadable on light papers — sepia 1.88:1, light 2.14:1
  (large-display text, needs ≥3:1; body text on the same pages is 12.90/13.67 so the wash is fine).
  Spec mandates "gold title ONLY p3c45" + L5 wash — both present — but book §2 requires sepia/light
  to "deepen the sun to #8A5A00 for text-adjacent uses". FIX (cohort lane, 4 lines): under
  `html[data-theme="sepia"]` / `html[data-theme="light"]`, set
  `body[data-chapter='p3c45'] .meta-title{color:#8A5A00}` (or `var(--accent)`, which is #8A5A00 on
  both papers) while art keeps gold masses. Re-verify ≥4.5:1 + screenshot.

Supervisor decision (not a cohort defect):
- D1: phone plates render 353px wide with 18px gutters (GR4 full-bleed + ≥200px opener: PASS at
  155–157px svg height… wait, measured svgH=155 on p3c1-phone — height, not width. Ruling needed on
  the "≥200px opener at 390px" floor: plate WIDTH is 353px ✓, svg visible HEIGHT is 155px (aspect
  1200/420 slice at 353w). The spec floor (CF-1/GR4/P1) intends the opener to read at useful scale —
  rendered phone plates ARE full-width tableaux with legible centers (see val-*-phone.png), and the
  guarded phone rule (margin 0, width 100%) is the binding GR4 full-bleed conformance the lead
  brief already flags as the accepted deviation from spec-literal 2rem margins. Validator position:
  ACCEPT as-conforming; supervisor owns final call. No cohort change requested.

Out-of-scope observations (reported, not cohort repairs):
- O1: shared `reader.js` theme-switch race (stale inline body bg) — WITHDRAWN. Correspondent
  correction verified: current `paintTheme` swaps `dataset.theme` synchronously first; clean-cache
  retest (fresh tab + `setCacheEnabled(false)`) shows live Sepia click → body inline
  rgb(241,231,210) + `--bg` #f1e7d2, correct. My earlier frozen-body reading was a stale-JS artifact
  in my long-lived tab. Live-click 8-theme sweep re-run clean (contrast table §6).
- O2: `theme.css` print rule hides ALL `#chapter-art` (`display:none !important`), overriding the
  cohort print guards (3.4in plates / 56px marks). Contract §8: book CSS wins over `@layer shared`,
  but theme-vs-cohort is supervisor-merge order, not validator scope. Flagged for supervisor conform.
- O3: p3c35 mark carries `gs-b-tone-shadow`, but spec P4 defines `shadow` only for essay/landmark
  slots — computed `filter:none`, transparent bg: the tone is a silent no-op on marks. Render is
  still handsome (pyre reads clearly), but either the engineer adds a mark-scoped shadow rule or the
  JSON tone is remapped. Suggest: extend `shadow` to marks (night veil + `brightness(.84)
  saturate(.82)` per CF-5) — 6-line CSS addition, keeps JSON stable. Minor.

## 1. Render method (harness, zero owned-file edits)

- Served repo root: `python3 -m http.server 8123` (PID 66536, log /tmp/gsb-server.log).
- Harness page `.omp/design/evidence/gay-science/cohort-b/harness.html` (validator-owned): byte-copy
  of `books/gay-science/index.html` chrome with absolute `/shared/`, `/books/gay-science/` asset
  paths + `<link>` to the real `design/cohort-b.css` + `<base href="/books/gay-science/">` so the
  unmodified `shared/reader.js` resolves real TOC/chapter JSON; a fetch shim routes ONLY
  `design/chapters.json` → `harness-manifest.json` (validator-owned runtime-form overlay of
  `cohort-b.json`: `{src,symbol,class,motif,caption}` x56, generated by script, no hand edits).
  Owned book files untouched; real reader, real text, real manifest mechanism (Contract §4/A.2).
- Native Eval browser (Chromium headless, `browser.open` + `tab.run` + `observe` + file
  screenshots via `page.screenshot`). Viewports: desktop 1440×1000, tablet 820×1180, phone 390×844.
  Chapters opened through the real TOC buttons (click events), plus prev/next buttons and j/k keys.

## 2. Census (recomputed)

- SVG: 81 `<symbol>` (81 unique ids, 0 dupes), 81/81 with viewBox; 0 `<use`, 0 linearGradient,
  0 radialGradient, 0 `<text`, 0×`2A1540`, `gs-b-twodoors` absent. All 81 spec §4 ids present, 0 missing,
  0 extra. Panels: essay 720×320 slice, landmarks 960×420 slice (p3c1 1200×420), duets 240×120 meet ✓.
- JSON: 56 entries, ids p3c1–p3c56 exact, 0 missing/extra; treatments 44 mark / 6 essay-opener /
  6 landmark-panel; captions exactly 12 (p3c1/3/7/13/14/21/22/23/36/45/48/54) ✓; no `default` ✓;
  all 56 titles + word_counts byte-match live TOC ✓; all 56 symbols resolve in SVG, 0 unresolved ✓.
- Symbol→chapter: 55 symbols referenced by JSON (gs-b-eye ×2 deliberate rhyme); 26 unreferenced =
  15 light/stage atoms + 11 content atoms (applefall/bell/bow/curtain/field/hand-×2/herd/laurel/
  manacle/mask-fall/masks-pair/pillow/plumes/sleepwalker/slip/tablets/tide + sunlow/sunhigh… full
  list in §8) — all documented panel-vocabulary per §4 (panels are self-contained, CF-2) ✓.
- CSS: 18,354 B; `!important` count 0 in rules (1 hit is the word inside a comment); `reader-*`
  classes: NONE authored (`.reader-body` L5 + `.reader-header` B3 are contract §8 hook-qualified
  shared selectors, not minted classes — conforming); 0×`2A1540`; 12/12 tones + 10/10 read classes
  present in JSON class triples; landmark rules for all 6 ids ✓.
- Live 56-chapter activation census (real TOC clicks, desktop): 56/56 chapters set
  `body[data-chapter]` + `data-art`, slot visible with inlined SVG (kids 1–29), class triple exact,
  captions 12/12 and only those, 0 gradient/text nodes in any rendered SVG, 0 console errors ✓.
  (One transitional mis-measure of p3c23 width during the fast sweep was re-probed settled: 896 ✓.)

## 3. Per-chapter verdicts (rendered evidence)

Evidence dir `.omp/design/evidence/gay-science/cohort-b/` (62 `val-*.png`, ~36 MB).
Viewed in full (this report): all desktop plates + all phone plates + sepia/light phones + p3c1/p3c54
tablet + mark close-ups (p3c28/32/11/53/56). Remaining tablet/mark shots saved, spot-viewed via
geometry probes (all sizes exact per §6a).

### Landmarks (6) — all PASS modulo R1 (bleed symmetry) + R2 (p3c45 light-paper title)

- p3c1 `gs-b-land-herd` (essay/grand): GRANDEST panel confirmed — symmetric Munch fan, centered low
  sun, herd band, tide strip, masks-pair right, gulls + sparks; caption present; grandest title
  (4.25rem cap). Desktop/tablet/phone shot. PASS (R1).
- p3c21 `gs-b-land-tablets` (iron/essay): stern narrow fan, monumental tablets on herd arc, iron
  desaturation visible; vermilion→foam rule (L2) ✓. PASS (R1).
- p3c22 `gs-b-land-court` (stage/dramatic): full-width vermilion valance, gold bell + foam arcs,
  torn slip, low sun + fan; italic title (L3) ✓; caption ✓. Most theatrical plate. PASS (R1).
- p3c36 `gs-b-land-lastwords` (stage/dramatic): falling mask + laurel + heavy pillows, night-occluded
  low sun; night→vermilion rule (L4) ✓. PASS (R1).
- p3c45 `gs-b-land-epicurus` (noon/luminous): THE noon-flash — only overhead sun, whitesea + rocks +
  fish, calm eye center, 5 sparks, no horizon darkness; gold title + L5 radial wash verified in
  computed style (alpha .10) ✓. Brightest panel by a distance; legible against 55 mornings. PASS (R1, R2).
- p3c54 `gs-b-land-sleepwalker` (dream/visionary): ridge + dreamer over void, morning fan, margin
  leapers, tiny masks, 4 will-o'-wisp sparks; italic title + night→sun rule (L6) ✓. PASS (R1).

### Essay panels (6) — all PASS modulo R1

- p3c3 wink / p3c7 field / p3c13 hand / p3c14 grasp (paled bands .55 + spark-triplet visible) /
  p3c23 applefall (autumn veil + sepia filter + night-deepened bands) / p3c48 manacle (dimmed rays,
  darkened bands, 1 guttering spark, NO gulls — dimmed morning, light persists ✓). All full-width
  tableaux with HTML captions, never bands-beside-titles. PASS (R1).

### Duets (2) — PASS

- p3c30 plumes+mask (196px, shared baseline, plumes L + mask-fall R) ✓; p3c31 bow over LEVEL scales
  (verified — not the tilted p3c2 beam) ✓. PASS.

### Marks (44) — PASS (sizes exact; O3 notes p3c35's no-op shadow tone)

Sampled live at desktop + phone (geometry) with close-up views of p3c28 flare (overexposed disc +
vermilion blind-spot wedge + 3 prone ticks — "too much of a good light", distinct from sunlow/
sunhigh ✓), p3c32 halves (open gold ring + half-closed foam ring on shared baseline ✓),
p3c11 ember eye vs p3c53 dim eye (same `gs-b-eye`, ember veil vs .78/.65 dim — rhyme legible ✓),
p3c56 monster closer (horned horizon hump + 3 vermilion eyes + crowd ticks, closing wash ✓).
Sizes: quiet 72 / standard 104 / duet 196 / closing 128 / glare 128 desktop; phone 60/88/160/104/104
(all exact per §6a/6d). No captions on marks ✓. PASS.

## 4. Contract checks

- GR3 zero phone overflow: PASS — phone 390: body/doc scrollWidth == 390 on all 20 probed chapters
  (plates + marks); tablet 820 likewise. (Desktop body.scrollWidth 1512 = the R1 one-sided bleed,
  clipped by `overflow-x:clip` so no sideways scroll; doc scrollWidth == viewport everywhere.)
- GR4 full-bleed full-width plates: PASS modulo R1 — plates span container-bleed widths (p3c1 1216,
  landmarks 1152, essays 896 at desktop; 353 phone; 756 tablet) with ≥200px opener presence at 390px
  (plate width 353; svg heights 155–157 by aspect — see D1). Phone guard full-bleed (margin 0 /
  width 100%) confirmed, NOT spec-literal 2rem — the briefed GR4 deviation, accepted pending D1.
- Zero gradients/text in rendered art: PASS — 0 gradient/text nodes across all 56 live SVGs; CSS
  gradients present are only the sanctioned slot veils / sun-road rule / progress ray / L5 wash.
- Light discipline: PASS — 55 climbing-morning renders + p3c45 noon-flash + p3c48 dimmed; sunlow
  panels-only and sunhigh epicurus-only hold in JSON refs (sunlow/sunhigh unreferenced by chapters ✓).
- Captions on 12 plates only: PASS (live census 12/12, marks caption-free).
- Drop-caps letters only: PASS (vacuous + correct) — all 9 probed openers (incl. all 6 landmarks)
  are numeral-led and earn `no-drop reader-fragnum` from the shared classifier; `::first-letter`
  unstyled (float none, body size); numerals render intact at body size, tabular. Cohort P9 adds no
  per-chapter workaround ✓.
- Reduced motion: PASS — `prefers-reduced-motion:reduce` → slot animation none, art visible, no
  sideways scroll; cohort authors zero motion, no cohort rule needed ✓.
- Console: PASS — 0 errors / 0 warnings across the full 56-chapter sweep + interactions + 8-theme
  sweep (clean-cache tab).
- Controls & transitions: PASS — prev/next buttons, j/k keys, TOC open/close + Escape, settings
  open/close + Escape all verified live with correct chapter+art transitions (p3c44↔p3c45↔p3c46
  landmark↔mark swaps observed); progress/resume persist (`chapterId` + `scrollY` + `read[]` in
  storage after deep scroll) ✓.

## 5. Taste critique (visual reviewer — from rendered pages, not source)

NOON climbing-morning reads immediately and specifically: the gold/vermilion ray fans, ultramarine
sea bands, foam linework, and dance-grammar leapers form one coherent mural hand across all 12
plates, and the light narrative WORKS — p3c45's overhead white-gold flash against 55 low-morning
panels needs no legend, and p3c48's guttering dimmed morning is unmistakably still-daylight dread,
not night. The theatre frame (p3c1 masks → p3c22 valance → p3c36 mask-fall → p3c54 "not a dead
mask") and the eye rhyme (ember → still → dull) reward the linear reader without punishing the
jumper. Marks are genuinely text-derived emblems (scales-tilted, halves-unclosed, flare-blinding,
pyre-snapped-halo), not a tint ladder — the substitution test passes: re-title this system to
another book and the noon-sun emblem cabinet is nonsense. Typography is joyful-Fraunces (SOFT/WONK
loading, verified first in computed stacks) with disciplined roles (italic ONLY p3c22/p3c54 ✓,
gold ONLY p3c45 ✓). Hierarchy is calm: plate → letterspaced part line → balanced title → sun-road
rule → quiet Source Serif body at ≤68ch. This is not a template with a new accent color; it is an
authored gallerykk of 81 symbols with a composed run. Ship it after R1+R2.

Deductions (all captured as R1/R2/O3, no separate taste holds): the one-sided desktop bleed (R1)
is the only compositional defect visible in screenshots; the p3c45 light-paper title (R2) is the
only legibility defect; p3c35's missing shadow treatment (O3) is invisible-in-passing but spec-true
repair is cheap.

## 6. Contrast table (live-click sweep, clean cache, p3c45 + p3c1 checks)

Body text vs composited page bg (all ≥4.5 PASS): dark 13.82 · nocturne 15.92 · verdant 16.77 ·
oxblood 15.84 · candlelight 16.47 · sepia 12.90 · light 13.67 · slate 15.12.
p3c45 gold title: dark 8.91 · nocturne 12.61 · verdant 10.21 · oxblood 11.24 · candlelight 12.63 ·
slate 12.06 · sepia 1.88 FAIL · light 2.14 FAIL → R2.
p3c1 foam title control: sepia 10.67, caption 12.90 (PASS — papers are healthy; only the gold title
needs deepening per book §2). L5 wash alpha .10 does not move body ratios (12.90/13.67 incl. wash ✓).
Fonts: Fraunces display + Source Serif 4 body first in computed stacks, fallbacks Georgia present ✓.

## 7. Review-skill report

```
=== REVIEW 1/3 ===
BUILD: n/a (static assets; no build step in cohort lane — integration build is supervisor's gate)
CONSOLE: clean (0 errors, 0 warnings, 56-chapter + interaction + theme sweeps)
A11Y: pass (h1/meta hierarchy intact; decorative slots aria-hidden; captions content-bearing;
  focus/keyboard/Escape verified; contrast PASS except R2 title-on-paper)
DETERMINISTIC SCAN: pass (81/56/12 exact; 0 use/gradient/text/2A1540; 0 !important rules;
  0 reader-* minted; TOC titles/counts byte-exact)
SUBSTITUTION TEST: pass (emblem cabinet is Gay-Science-noon-specific; re-titling breaks it)
RATIONALE TEST: pass (every plate/mark quotes its aphorism; §8 prose log spot-confirmed in render)
ANTI-OVERCORRECTION: pass (direction comes from the NOON brief + text, not a category reflex)
SHIPPING READINESS: REVISE (R1 bleed symmetry + R2 light-paper gold title block; D1 supervisor call)
SLOP RISK: low (0 dimensions at 3+)
DIMENSIONS AT 3+: []
ISSUES FIXED: 0 (validator is read-only; repairs are lead/engineer-owned)
REMAINING: R1, R2, D1 (+O2/O3 advisory)
```

## 8. Unreferenced-symbol disposition (26, all documented vocabulary)

Light/stage atoms (15): rayfan/sunlow/sunhigh/horizon/seabands/gull/spark/leaper/mask-fall/
masks-pair/curtain/bell/slip/pillow/laurel — panel vocabulary per §4a (sunlow panels-only,
sunhigh epicurus-only hygiene holds: neither is a chapter emblem ✓).
Content atoms composed into panels (11): herd/tide (→land-herd), field (→panel-field),
hand-open (→panel-hand), hand-grasp (→panel-grasp), applefall (→panel-applefall), manacle
(→panel-manacle), tablets (→land-tablets), bell/curtain/slip/masks-pair (→land-court),
mask-fall/pillow/laurel (→land-lastwords), whitesea (→land-epicurus), sleepwalker/leaper
(→land-sleepwalker), plumes/bow (→duets). Every SVG symbol is referenced-or-documented ✓.

## 9. Files

- This report: `local://gs-b-validation.md` (authoritative) +
  `.omp/design/evidence/gay-science/cohort-b/validation-report.md` (copy).
- Harness: `harness.html` + `harness-manifest.json` (same dir; validator-owned, not shipped).
- Screenshots: `val-<chapter>-<desktop|tablet|phone>.png` + `val-p3c{1,45}-<sepia|light>-phone.png`
  (62 files, same dir). Server: repo root :8123 (left running for lead re-review).
- Census counts recomputed live (SVG regex + JSON parse + 56 real chapter loads), not copied.
- Re-review: validator will re-probe R1/R2 on request after engineer repair (same harness, same
  viewports); no cohort-file edits were made from this lane.

---

# Addendum A — Re-review of R1/R2/O3 (+O2 deletion), 2026-10-15

Scope: `design/cohort-b.css` only (SVG/JSON untouched per lead). Fresh tab `gsb-re`,
`setCacheEnabled(false)`, same harness + viewports. Note: harness loads `theme.css` (which now
contains a STALE merged copy of the pre-repair cohort CSS, `width:100vw` P2/P3 at theme.css:912–962)
BEFORE `design/cohort-b.css`; stylesheet order verified
reader.css → theme.css → cohort-b.css, so cohort-b.css wins at equal specificity. All probes below
confirm the NEW rules win (see winning-value evidence per item). Supervisor MUST refresh the merged
copy at conform or the shipped book keeps the R1 bug.

## R1 (contained plates): FIXED ✓

- p3c1 desktop 1440: slot 296→1144 (W 848), gaps 296/296 symmetric; cssWidth 848px, maxW 1216px
  (76rem p3c1 cap), margins 0/0; body/doc scrollWidth 1440 == viewport. Old one-sided bleed gone.
- Essays/landmarks: p3c3/p3c21/p3c45 all 296→1144 symmetric, maxW 896/1152 (56/72rem caps) ✓.
- Tablet 820: p3c1 + p3c45 slots 32→788 (W 756), scrollWidth 820 ✓.
- Phone 390: p3c1/p3c45/p3c3 slots 18→372 (W 353, svgH 155–157), p3c28 mark svg 104; scrollWidth 390 ✓.
- Winning-value proof: `100vw` count in cohort-b.css is 0; computed widths match the NEW
  `width:100%` + rem-cap rules, not the stale merged copy. No equal-specificity loss observed.
- GR4 voice ruling: the contained plate (full container width, 848px of composed tableau at desktop,
  353px at phone) satisfies GR4's intent — full-width tableaux, never half-empty bands beside a
  title — in my judgment. The plates fill their band edge-to-edge with composed art at every
  viewport (see val2 shots). ACCEPT the supervisor's contained-voice ruling. D1 (phone ≥200px floor)
  now reads: plate width 353 ✓, svg height 155–157 by aspect — conforming; D1 closed as ACCEPT.
- Evidence: val2-p3c1-desktop.png, val2-p3c45-desktop.png, val2-p3c3-desktop.png,
  val2-p3c1-phone.png, val2-p3c45-phone.png.

## R2 (p3c45 light-paper title): FIXED ✓ — official numbers via REAL settings clicks

- Sepia (clicked "Sepia theme" in settings UI): title rgb(138,90,0) #8A5A00 vs page
  rgb(241,231,210) = **4.83:1** ✓ (was 1.88). Body 12.90 ✓.
- Light/Vellum (clicked "Vellum theme"): title #8A5A00 vs rgb(250,246,236) = **5.49:1** ✓ (was 2.14).
  Body 13.67 ✓. (Matches the engineer's self-measured 5.49 — no staleness; numbers are official.)
- Screenshots confirm the deepened bronze title reads crisply on both papers while art keeps gold
  masses: val2-p3c45-sepia-desktop.png, val2-p3c45-light-desktop.png.

## O3 (shadow tone on p3c35 mark): FIXED with a minor visual caveat — ACCEPT

- Computed: slot background = radial night veil (closest-side, 60% night) + svg filter
  `brightness(0.84) saturate(0.82)` ✓ — the tone is no longer a no-op.
- Render (val2-p3c35-desktop.png): the pyre reads dimmed/shadowed as intended; however the
  `closest-side` radial on the full-width flex slot renders as a wide horizontal smear (dark band
  spanning the container at mark height) rather than a tight halo behind the 72px emblem. It is
  subtle (dark-on-dark) and does not harm legibility or composition, but a tighter treatment
  (e.g. constraining the veil or scoping the background to the svg box) would be cleaner.
- Ruling: ACCEPT as-fixed — spec asked for the shadow treatment to exist on the mark, and it does
  (veil + filter both active). The smear is a polish note for the supervisor's backlog, NOT a
  re-review blocker. No new repair ID issued.

## O2 (cohort print block): DELETED ✓

- `@media print` count in cohort-b.css is 0; the theme-owned print behavior now governs alone.
  (Print rendering itself is supervisor/integration scope, not re-probed here.)

## Re-review report

```
=== REVIEW 2/3 ===
CONSOLE: clean (0 errors, fresh cache-disabled tab, repair sweep)
R1 contained plates: FIXED (symmetric 296/1144 desktop, 32/788 tablet, 18/372 phone; scrollWidth==viewport all three; GR4 intent satisfied — ACCEPT contained voice; D1 closed)
R2 light-paper title: FIXED (sepia 4.83, light 5.49 via real settings clicks; was 1.88/2.14)
O3 mark shadow: FIXED (veil + filter active; wide-smear polish note, non-blocking)
O2 print deletion: DONE (0 print blocks in cohort CSS)
STALE-MERGE FLAG: theme.css:873+ still carries the PRE-REPAIR cohort copy (100vw P2/P3) — supervisor MUST refresh at conform; harness proves cohort-b.css wins only because it links later
SHIPPING READINESS: pass (cohort lane)
SLOP RISK: low (0 dimensions at 3+)
```

## Updated verdict: PASS (cohort lane) with one supervisor conform action

All validator-required repairs (R1, R2) and advisories (O3, O2) are resolved in `cohort-b.css` and
verified in-render on :8123. The single remaining action is supervisor-owned and outside the cohort
lane: refresh the stale merged cohort copy in `theme.css` (COHORT INTEGRATION: cohort-b.css block)
so the shipped book matches the repaired file. Validator requests no further cohort changes.
