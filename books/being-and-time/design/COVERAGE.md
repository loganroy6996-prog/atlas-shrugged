# Being and Time — coverage / review ledger (supervisor-maintained)

Authority: `books/being-and-time/data/toc.json` — 83 sections §§1–83
(Introduction p1c1–p1c8 · Division One p2c1–p2c36 · Division Two p3c1–p3c39).
Identity: "The Clearing" (`design/ART-DIRECTION.md` + ArtDirector PROVISIONAL
PASS, conditions B1–B8). Contract: READER-CONTRACT v1.1 STABLE (`symbol` key).

## Cohort files (exact names — census checks these)

| # | Cohort | Chapters | art/*.svg | design/*.json | design/*.css | Status |
|---|---|---|---|---|---|---|
| 1 | intro-world | p1c1–p1c8 + p2c1–p2c6 (14) | ✅ 15 symbols | ✅ 14 entries | ✅ | integrated + render-verified |
| 2 | equipment-space | p2c7–p2c16 (10) | ✅ 10 symbols | ✅ 10 entries | ✅ | DELIVERED + merged + render-verified (lead: SupBeingTime-3.BeingTimeEquipmentSpace, validator PASS) |
| 3 | they-self | p2c17–p2c26 (10) | ✅ 12 symbols | ✅ 10 entries | ✅ (+supervisor ghost/span fixes) | integrated + render-verified |
| 4 | falling-care | p2c27–p2c36 (10) | ✅ 23 symbols | ✅ 10 entries | ✅ SUPERVISOR-AUTHORED (engineer file never landed; from HANDOFF §§3–5) | integrated + render-verified |
| 5 | death-conscience | p3c1–p3c16 (16) | ✅ 16 symbols | ✅ 16 entries | ✅ (+supervisor span fix) | integrated + render-verified |
| 6 | temporality | p3c17–p3c27 (11) | ✅ 11 symbols | ✅ 11 entries | ✅ (+supervisor span fix) | integrated + render-verified |
| 7 | historicity-finale | p3c28–p3c39 (12) | ✅ 12 symbols | ✅ 12 entries | ✅ | integrated + render-verified |
Supervisor-owned: `index.html` (Fraunces + Source Serif 4 links, slot
figures, 7 cohort stylesheets) · `theme.css` (Clearing shell: tokens,
cover, ledger, body, TOC arc, progress, nav, kill-switches) ·
`art/cover-clearing.svg` (`cover-clearing` symbol) ·
`design/chapters.json` (canonical v1.1 merge — **83/83 rows**, merged
sequentially incl. final equipment-space delivery) · this ledger.

## Integration repairs (supervisor, with evidence)

1. **SVG self-containment (3 files).** falling-care (31 defs), historicity-
   finale (27), intro-world (14) referenced root-level `<defs>` that
   reader.js never inlines (it splices the symbol subtree only) → shafts,
   grain, grounds would silently vanish. Fix: mechanical injection of the
   referenced def elements into each symbol. Verified: all 6 files XML-valid,
   89/89 symbols self-contained, every manifest symbol resolves.
2. **falling-care.css authored** from HANDOFF §§3–5: B2 ghost table, ledger
   grid, rail glosses, breathers at §5.3 indices, grain gating, light/sepia.
3. **fc-44 wash softened** (0.50 → 0.30) — the §44 banner read as a flat
   beige panel at production width. Screenshot-compared before/after.
4. **Ghost z-index** — they-self ghosts (`z-index: -1`) sank under the page
   ground and vanished; theme default likewise. → `z-index: 0`. Live-verified
   on p2c19 ("27" visible left-bleed).
5. **Rotated rail text** — `.meta-rule span` inherits a 45° diamond rotation
   from shared CSS; they-self/death-conscience/temporality restyle the span
   as a text/bar carrier without resetting it ("das Man" rendered diagonal).
   → `transform: none` in all three. Live-verified.
6. **Captions** — temporality + historicity backfilled from their motif
   fields as `§NN · Title-case motif` (figcaptions are reader-visible).
7. **Light/sepia trunk + ink remaps** — they-self `.ts-trunks` (incl. 2 newly
   class-hooked rotated groups) → #2A3325/#2E352A; falling-care trunk groups
   + templates hooked + remapped; death-conscience 44 bare mist/lichen
   elements hooked as `.dc-ink` + 6 shaft/ember ticks, remapped to paper
   tones. Dark rendering untouched. Live-verified (p2c19/p2c32/p3c9).
8. **ArtDirector R2 (BT1–BT6, REVISE → fixed).** BT1 BLOCKING: scene-p3c9
   redrawn — deleted the stick-figure/wind-lines/boxes/thermometer-bar,
   now ONE vertical shaft (gradient beam + core + pool + 6 flecks) on
   night ground, self-contained. BT2: finale ghost 10%→5%, left 38%→52%,
   22vw — title clears it. BT3: `overflow-x: clip` on reader-body +
   chapter-meta at ≤640px (scrollWidth 390=client, verified). BT4:
   `hyphens: none` on ALL thresholds (chapter-scoped per-cohort addenda —
   cohort body rules beat the theme rule). BT5: fc-40 ember floor
   full-width + horizontal feather mask (no card edge). BT6: TOC ticks
   rescaled %→px (8px slit → 56px clearing) so the arc reads.
9. **FinalValidator R2 (SIZE+SANS prefs dead → fixed, GS-R3 mirrored).**
   Book pinned `font-size:1.19rem` + `var(--bt-body)` on `.chapter-text`
   (theme §4) and five cohorts pinned their own body/threshold sizes, so
   shared `--text-size`/`--leading`/sans-swap never reached prose. Fix:
   theme body → `var(--text-size,1.19rem)` + `var(--leading,1.75)`,
   theme + cohort thresholds → `calc(var(--text-size,1.19rem)*1.10xx)`
   (step ratios preserved: theme 1.1008, cohorts 1.1026), new
   `html[data-font=sans]` override swapping chapter-text to the shared
   sans stack, theme `--font-sans` corrected to DM Sans stack (was a
   serif dup). Defaults pixel-identical (md 20.8px/22.93px). Live-verified:
   sm 18.4 / lg 24 / xl 27.2 body px, tight 43.52 / loose 57.12 lh,
   sans→DM Sans on p2c19 + p2c7, serif restores. FinalValidator R3
   re-verify: FIXED live (size ladder exact, well ratio 1.1026 exact,
   sans on body+well, serif restore exact) → verdict CONDITIONAL PASS.

## Theme-race thread (2026-10-15, resolved — no action)

SupChurchill-3 reported a shared applyPrefs/view-transition race freezing
body in stale theme colors; I reproduced it, then the report was WITHDRAWN
(stale cached reader.js — the swap is synchronous in the current shared
file). Re-verified with cache disabled: dark/sepia/light/nocturne all swap
body inline + computed ground correctly in READER view. Deliberate BT
decision: the COVER keeps its ink ground + night scene in all themes (theme
rule beats the shared inline destination color on `data-view=cover` only).
No shared fix needed; no book workaround exists.

## Census (recomputed at assembly — 2026-10-15, live :8099)

- TOC IDs resolving in the reader: 83/83.
- Manifest rows: **83/83** (equipment-space merged sequentially).
- Chapters rendering slot art + ghost + rail/caption: 83/83 asserted
  (supervisor sweep 83/83 pre-BT-fixes with 0 warnings/errors;
  equipment-space 5-opener spot verified post-merge; final validator
  recomputes independently).
- Assets in `_site`: 8 art SVGs + chapters.json + 7/7 cohort CSS served
  (HTTP 200).
- Contrast (computed, composited): body mist-on-humus **12.58:1** (B3 bar
  ≥7:1); threshold well rgb(29,38,25) + 21px Fraunces step; cohort
  validator: mist-on-under 10.19:1, light 14.24:1, sepia 11.76:1.
- Firewall: no rails / SS badge / glyph ornaments / modulo / centered titles
  / drop caps / justification — shared ornaments killed in theme §1.

## Visual sampling (live :8099, native browser, screenshots viewed)

- Cover (8% gap scene, Fraunces title in the light) — desktop.
- Openers: p1c1 (slit + Sophist rail), p1c6 (Destruktion strata + rail),
  p2c7 (hammer banner), p2c11 (res extensa monolith), p2c13 (§21 crack
  banner + seal), p2c14 (region motif), p2c16 (making-room handoff),
  p2c19 (They: 12 trunks + ghost fix + rail fix), p2c32 (§40 cold pillar +
  ember floor + breathers, BT5 feather), p2c33 (§41 braid + formula rail),
  p2c36 (§44 banner, wash fix), p3c9 (§53 single beam, BT1 redraw),
  p3c12 (call), p3c21 (§65 horizons banner), p3c28 (strata), p3c39 (§83
  finale glow, shaft title, no seal — B6, BT2 legibility fix).
- Phone 390: p1c1 overflow probe (BT3: 390=390 ✓), threshold BT4 fix.
- TOC drawer dark (BT6 ticks) + light/sepia + themes.
- 14-scene symbol spot gallery + fc-44 crop/repair comparisons (preview
  :8215, since retired).
- Full 3-viewport pass + behavior battery: final validator running.

## Phase-B prototype review + R2 + final validation

ArtDirector R2: REVISE (BT1 blocking + BT2–BT6) — all fixed live,
re-inspected: PASS. B4 threshold PASSED. Final validator: initial REVISE
(single finding F1: B7 38rem not computing — shared measure !important,
then A.3 token composition) → fixed per Main's A.3 ruling
(`--chapter-max: 38rem` + theme p rule composes) → validator re-probe:
F1 CLOSED, verdict PASS (544px baseline / 608px relief confirmed live).
Note: user narrow/wide measure prefs intentionally no-op on BT paragraphs
(book unlayered rule wins; authored measures stable) — recorded per
validator, for Main's awareness.
