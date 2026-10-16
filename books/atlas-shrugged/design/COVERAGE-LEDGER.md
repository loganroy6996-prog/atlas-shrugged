# Atlas Shrugged — coverage & review ledger (SupAtlas-3, 2026-10-15)

Merge: `design/part-i.json` + `part-ii.json` + `part-iii.json` → canonical
`design/chapters.json` (contract §4 + A.2 `symbol` form). Art refs verified
resolving: canon `art/signal-plates.svg` (30 symbols, merged sequentially from
`art/part-{i,ii,iii}-frag.svg`) + `art/cover.svg`. All art authored to THE
SIGNAL identity (flat night-lithograph, lamps = flat discs + 2px halo rings,
beams = flat wedges; no glow, no gradients, no gilt — AT3/AT4).

## Source census (recomputed this session, not recycled)

- TOC: 30 chapters, p1c1–p1c10 / p2c1–p2c10 / p3c1–p3c10, stable IDs.
- Manifest: 30/30 entries; every `symbol` resolves in the canon sprite.
- Motifs: signal-clear ×9, signal-caution ×10, signal-stop ×8,
  signal-stop-intruder ×1 (p1c10), signal-clear-intruder ×2 (p3c1, p3c10).
  Exactly two intruder kinds — AT2 holds.
- Live HTTP (127.0.0.1:8099): 30/30 chapter JSON 200, manifest == source,
  cover/plates/theme/signal.js/fonts.css/3 woff2 all 200.
- Contrast (computed): beam/night 15.4, rail/night 6.4, green/night 9.5,
  amber/night 8.7, red/night 4.6 (kickers/large-display only, AT1);
  paper: ink 13.5, green-deep 5.8, amber-deep 5.3 (deepened this session
  from 4.4/4.4 — identity values undershot 4.5), red-deep 5.6.

## Render verification (live URLs, supervisor's own eyes)

Base: http://127.0.0.1:8099/books/atlas-shrugged/ (built _site).

| View | 1440×1000 | 820×1180 | 390×844 | Notes |
|---|---|---|---|---|
| cover | ✅ | ✅ | ✅ | asymmetric grid, plate right, 3-aspect bar green/amber/red (order fixed this session), fonts live |
| p1c8 (I, std) | ✅ | ✅ | ✅ | shield + cut ribbon + green aspects; first body line visible, no scroll |
| p2c7 (II, grand) | ✅ | ✅ | ✅ | portal + amber lamp + smoke slab; portal outline brightened this session |
| p3c7 opener (III, speech) | ✅ | ✅ | ✅ | dead dial + empty screen; 10 beats + 10 spine links; caption `· THE ADDRESS` |
| p3c7 mid-address | ✅ | ✅ | ✅ | § MOVEMENT V numeral, calm prose, spine lit 5/10 (spine hidden ≤560px by design) |
| p3c10 (III, compact, intruder) | ✅ | ✅ | ✅ | beam + TT engine; green kicker inside red part; no end-mark after last sentence |
| TOC drawer | ✅ | — | — | signal codes I-01…III-10, aspect lamp dots + Barlow part names, all 30 rows |
| p1c1 / p1c4 / p1c6 / p1c7 / p1c10 | ✅ 1365×768 | — | — | dead-disc/tunnel split; dwarf signal; gantry end-lamp (re-composed into slice band); monumental truss + inscription; STOP intruder slab |
| p2c6 / p2c10 | ✅ 1365×768 | — | — | type-only Directive board (amber numerals, lowered into band); smoke-dollar part close |
| p3c1 / p3c2 / p3c4 / p3c5 / p3c6 / p3c8 / p3c9 | ✅ 1365×768 | — | — | ray-screen valley intruder; monumental valley + inscription; blood calendar + parapet (card lowered into band); Tower A + lantern + flap code; pour + sentinel; banquet + exposed gun + inscription; concrete cube one-eye |
| sepia p1c8 (real UI path) | ✅ | — | — | paper ground, darkened kickers, night plate inlay intact |

No horizontal overflow anywhere (scrollW == viewport on every sweep).
Fonts: Barlow Condensed / Crimson Pro / Space Mono all `document.fonts.check`
true + confirmed in computed styles.

## Behavior checks (exercised, not string-matched)

- TOC codes paint on cover + reader; filter/Escape/keyboard (t, s, j/k,
  Alt-arrows untouched) work; focus returns to invoking button.
- p3c7 spine links smooth-jump to movements; scroll lights segments.
- Inscriptions hang only on p1c7/p3c2/p3c8 and only when the plate rendered.
- End-marks: SVG diamond seals on sampled p1c8/p2c7; `content: none` on
  p3c4 + p3c10 (verified computed style).
- Progress + resume persist across reload (Chapter V detail shown on cover).
- Sepia via settings UI correct (earlier dark-ground observation was a test
  artifact of setting `dataset.theme` directly, bypassing reader.js body paint).
- Reduced motion: lamp fade is the sole animation and is gated.
- Console: no page errors observed.

## Delegation record (honest)

- Spawned library-validator AtlasValidator @hi → runtime refused: global
  100-job ceiling ("Background job limit reached (16)"). No cohort subagents
  spawned either (same ceiling; prior-wave children parked). Per doctrine I
  worked inline: all plates/theme/JS authored by the supervisor directly from
  the cohort Phase-1 scene drafts + freshly re-read chapter text (every cited
  para index above re-verified against chapter JSON this session).
- Independent review gap: no second pair of eyes yet — FinalValidator-2 pass
  pending (Main track). This ledger + screenshots are the handoff evidence.

## Files delivered (book ownership only; no shared-reader edits)

- books/atlas-shrugged/index.html (slots, font preloads, signal.js)
- books/atlas-shrugged/theme.css (SIGNAL shell, sole-writer rewrite; legacy
  rail-tie/numeral-badge/pseudo-ornament grammar DELETED, not restyled)
- books/atlas-shrugged/signal.js (TOC codes, inscriptions, p3c7 apparatus)
- books/atlas-shrugged/art/{cover,signal-plates,part-i-frag,part-ii-frag,part-iii-frag}.svg
- books/atlas-shrugged/design/{chapters.json,fonts.css,fonts/*.woff2 ×8}
- books/atlas-shrugged/design/COVERAGE-LEDGER.md (this file)

## Residual risks / non-verified axes

- 11 plate screenshots viewed at 1365×768 rather than exactly 1440×1000
  (required core IS at exact 1440/820/390 viewports).
- p1c2/p1c3/p1c5/p1c9/p2c1–p2c5/p2c8/p2c9/p3c3/p3c7-beats-0–IV,VI–IX visuals
  sampled by census + symbol resolution, not individually screenshotted.
- ArtDirector R2 + FinalValidator PASS still pending (other tracks).

## R3 repair (REVISE item 1 — plate-crop defect, fixed 2026-10-15)

Validator finding: fixed-height slot (9rem + slice) cropped every plate to
its bottom ~40% (p3c7 dial decapitated, p1c3 cellar gone, p3c5 track fan gone).

Fix (preferred option (a), book-owned only):
- theme.css `#chapter-art`: framed plate (`margin auto`, max-width by class,
  full border) + `svg { height: auto }`; grand/monumental/compact retuned to
  full-scene width proportions (80/84/56rem vs 72rem std); mobile fixed
  heights removed.
- signal.js: inlined plate `preserveAspectRatio` slice → meet.

Re-verified live (supervisor's own eyes): p1c3 + p3c7 + p3c5 at 1440
(cellar room + statue lamp, dial face w/ 7:51 hands + arcs, cube + lantern +
track fan + LN-193 all in frame) and at 390 (full scenes, no overflow);
p1c8/p2c7/p3c10/p1c7(+inscription) at 1440. Tab order: cover actions cycle
with visible 2px focus. A6: one visible h1 (cover h1 is inside [hidden]).

## R4 repair (R3 minor item 2 — .meta-sub 3.64:1 on paper, fixed 2026-10-15)

Validator meter: .meta-sub on light+sepia at 3.64:1 (needs 4.5:1).
Fix: --text-faint in the sepia/light block only, #707A85 → #57616B
(computed 5.27:1 on #F2EAD8). Dark themes untouched.

## R4 acceptance (CONDITIONAL PASS, 2026-10-15 ~15:25 UTC, FinalValidator-2)

- R3-2 meter CLOSED to the digit: .meta-sub on light + sepia both 5.27:1.
- Full-book acceptance: 30/30 manifest resolve, 30/30 activation sweep,
  AT9 + R3 full-scene set + inscr + Tab/A6 + vellum/sepia all PASS.
- Carried to integration (not book defects): shared inline-pin, t-key,
  36px headers, backdrop-click, F13.
- Evidence: .omp/design/evidence/integration/wave3/atlas/REVIEW-R4.md.
- Book DONE from the validator's side. Standing down unless Main requests.

## Addendum: shared inline-pin report WITHDRAWN (SupChurchill-3 correction)

Current served shared/reader.js already swaps root.dataset.theme
synchronously FIRST (paintTheme ~line 187); the frozen-body observations
were stale-JS cache artifacts. Re-verified Atlas live on :8099 with a
fresh query-string load: sepia click → body inline rgb(242,234,216) +
ink text immediately, no reload, screenshot-confirmed readable. The
"shared inline-pin" carried item in R4 is therefore moot — no defect on
either side. F4 theme switching confirmed working on Atlas.
