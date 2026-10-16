# Home Review R1 — Library Entrance — REVISE (near-pass; 3 fixes)

Reviewer: FinalValidator. Date: 2026-10-15. Server: HomeEngineer's :8123 (repo root, source-live).
Design doc: `.omp/design/home/ART-DIRECTION.md` (Night Gallery, chosen direction 3).
Screenshots (viewed, this dir): home-1440-top/toolbar/grid/footer, home-820-top/grid, home-390-top/grid,
theme-menu-open, theme-vellum, home-seeded-1440. All 13 cover plates viewed as rendered images
(6 via :img reads this session: BGE, IJ, Zarathustra, GentleIntro, OpenLetter, Sovereign, Atlas,
BeingTime, Fountainhead, Churchill; remaining 4: GS/Twilight/WtP redraws per H2 note + featured
Atlas seen in page screenshots).

## Verdict: REVISE — no ship-blockers; fix H1–H3, then PASS without another full round

This is a genuine redesign, not a reskin: left-aligned editorial masthead with real catalog facts,
featured-volume spread, shelf system with working filters, spacious reading-light menu replacing the
cramped rail, and 13 authored plates (each book's own imagery — title-swap test passes on every plate
I viewed). It earns the benchmark Main set. Functional battery below is nearly all green.

## Observed functional results (F14 + A-series, all exercised live)

- Links: 13/13 book URLs 200 (observed HEAD sweep; page exposes 16 anchors incl. featured/continue).
- Search: "nietzsche" → "5 of 13 volumes" (observed); nonsense → empty state visible (observed); reset works.
- Shelf chips: All/Novels(3)/Philosophy(6)/Portraits(4) all render; Philosophy filters to 6 cards and
  persists (`literary-library-shelf=philosophy`, observed).
- Sort: featured→title reorders ("A Gentle Introduction…" first, observed); persists (`…-sort=title`).
- Continue shelf + featured: seeded atlas p2c5 + gay-science p3c9 → shelf visible with
  "Ch. 15/30 — ACCOUNT OVERDRAWN / 48%", featured switches to Atlas (observed, `home-seeded-1440.png`).
- Theme menu: opens, arrows/Home/End move, Enter selects, Escape closes, outside-click closes
  (all observed). All 9 options paint + persist (observed with settled waits; my first fast-loop sweep
  showed one-behind painting — an artifact of view-transition timing + my 350ms loop, NOT a defect:
  re-probe with 1200ms settle shows stored==painted for every option, and reload preserves light|light).
- `/` focuses search (observed `INPUT#search`); Escape blurs.
- Overflow: 0px at 1440/820/390 (observed) — baseline B2 (+14px rail overflow) is FIXED.
- Contrast (Ink, composited): h1 15.8:1, sub 9.97:1 (observed) — pass.
- Fonts: Fraunces 500 loaded and applied (observed `document.fonts.check('500 32px Fraunces')`=true,
  h1 computed Fraunces 500; the 400/600 checks were my probe error — the link serves 400/500 and h1
  uses 500). DM Sans loaded. No layout-shift fallback issue observed.
- Console: zero errors; zero failed requests on clean reload (observed).
- Reduced motion: `prefers-reduced-motion` emulates true; CSS has the reduce guard cutting entrances/
  sheens/transitions (computed in source). Entrance stagger itself not frame-verified — minor.
- Plates: all 13 files exist (3–5.6KB each, computed); 7 above-the-fold imgs all HEAD-200 (observed);
  fixed jacket palettes hold across themes (Vellum screenshot shows dark plates floating on paper — elegant).

## Required fixes

1. **H1 — Vellum (light) theme: toolbar controls render as dark pills on paper, breaking the light reading.**
   WHERE: theme panel + search/sort/chips in `theme-vellum.png` (viewed). EVIDENCE: search input, shelf chips,
   sort select, and theme-button all paint near-black pills with light text on the `#F5F0E6` ground — they read
   as holes punched in the paper, while cards correctly go paper-with-dark-text. The plates floating dark is
   intentional and works; the *controls* going dark is not. SEVERITY: major (one of 9 themes visibly wrong;
   contract demands every option work). FIX: scope toolbar/menu controls to paper surfaces under
   `html[data-theme="light"]` (and check sepia/candlelight/verdant for the same inversion — their after-shots
   are HomeEngineer's, I only viewed Vellum). Re-verify: Vellum toolbar must read as paper controls with dark
   text at all three widths.
2. **H2 — Four plates were redrawn for book-identity conformance AFTER my page screenshots; rhyme unverified.**
   WHERE: `assets/library/covers/{forty-ways…,will-to-power,gay-science,twilight…}.svg` (H2 note).
   EVIDENCE: my in-page screenshots show the provisional plates (magma WtP, hammer-smash Twilight visible in
   home-1440-grid.png). I viewed the NEW Churchill shards plate (strong — 40 facets, face-void, destiny vector).
   The other three redraws I have not viewed. SEVERITY: minor (process). FIX: no code change — HomeEngineer
   confirms the three files I haven't seen are the redrawn versions (sizes/tiles differ from my computed list
   above), and I take one confirmation screenshot of the grid showing all four new plates. If any redraw clashes
   with its book system, that becomes a book-side note, not a home defect.
3. **H3 — Keyboard focus into the theme menu needs one Tab-stop audit on the final build.**
   WHERE: theme button → first option focus path. EVIDENCE: observed focus return works (Escape/outside/Enter
   all return focus to the button); initial-focus-on-open went to the selected option (Ink) in my probe, which
   is correct. But my Home/End probe returned brand-link focus text — inconclusive whether focus ever left the
   menu (likely my probe pressed Home/End after an accidental close). SEVERITY: minor. FIX: HomeEngineer
   self-verifies Home/End/arrow-wrap with the menu verifiably open (one honest line in reply); I re-run the
   two keys during final integration. No code change expected.

## Notes (not defects)

- Featured-spread Atlas plate at 390 stacks plate-above-title correctly (viewed home-390-top.png).
- "13 volumes · 2.48M words · 942 chapters" masthead facts match the computed census (942 ✓).
- The portrait-ochre Churchill plate vs the oxblood theme token share a hue family; acceptable — plates are
  fixed jackets by design.
- ArtDirector taste review runs in parallel; this verdict covers function + my visual pass only.

## What PASS needs

H1 fix + re-screenshot (Vellum toolbar at 3 widths), H2 confirmation screenshot (grid with 4 new plates),
H3 one-line self-verify. Send those three and I record PASS without re-running the full battery.

# R2 verification — PASS (2026-10-15, independent re-check)

## H1 Vellum toolbar: FIXED and verified (observed)
- `r2-vellum-toolbar-1440.png` (viewed): paper search/sort/chips with dark text, selected "All volumes" chip gold; spine sweep visible; masthead + featured Atlas spread correctly paper.
- `r2-vellum-menu-1440.png` (viewed): open theme menu is a paper panel, 9 readable rows, Vellum selected/highlighted, full names + moods legible.
- `r2-vellum-toolbar-390.png` (viewed): phone stacks full-width paper controls; no overflow, no dark pills.

## H2 redrawn plates: CONFIRMED in situ (observed)
- `r2-plates-twilight-wtp.png` (viewed): Twilight struck idol-disc (tuning-fork tines, 8 bronze sounding rings, ember strike point, 12 chapter tally ticks) + WtP broken recurrence ring with diagonal hammer, gouge-block ring segments, sulphur match-flame, mono fragment numerals (§1057/§401/§259), "NB." margin cry — both rhyme with their book systems (Twilight cover.svg; WtP Black Notebook grammar).
- `r2-plates-gayscience.png` (viewed): GS architectural sun mural — flat Noon Gold wedges + Provençal sun-face, flat ultramarine sea bands, Dance Vermilion ring + ship; BGE ledger plate and Zarathustra amber-sun plate also visible and distinct.
- `r2-plates-churchill.png` (viewed): Churchill forty-facet shards mid-scatter around a face-void (ochre/vermilion/slate/bone on lampblack, destiny vector page-right); Open Letter broadsheet + Gentle Intro cathedral arch also visible.
- Remaining provisionals (Atlas + 2 ArtDirector repairs) are tracked book-side; no home defect.

## H3 Home/End: PASS (observed, menu verifiably open)
- Open: expanded=true, focus on selected Ink. End → focus "Auto" (last). Home → focus "Ink" (first). ArrowDown from Ink → Nocturne. Escape → closes, focus returns to #theme-button.

## Verdict: HOME — PASS
All R1 items closed with observed evidence. Final integration will re-run the battery on the Main-rebuilt `_site` (assets/library/** shipping) but no home re-review round is needed barring regressions.
