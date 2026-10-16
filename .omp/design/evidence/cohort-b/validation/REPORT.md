# Cohort B validation report — SupIJ-3.JestCohortBLead.JestCohortBValidator

**Verdict: REVISE** (3 findings: 1 major, 2 minor). Re-inspection required after engineer repair.

- **Date:** 2026-10-15. **Skills read:** `skill://review-skill`, `skill://visual-critique`, `skill://frontend-design` (no fallback; SKILL-MAP not needed). **Contracts:** READER-CONTRACT v1.1, ART-DIRECTION.md FINAL, critiques/infinite-jest.md (J1–J8), INTEGRATION.md, cohort-b.json (14 entries + top-level `design` incl. margin_tick_system, insert_specs, spot_registry, j_conformance — all read in full).
- **Files under review (read-only):** `books/infinite-jest/art/cohort-b.svg` (128,182 B), `books/infinite-jest/design/cohort-b.css` (103,179 B, 2,631 lines). No book file edited by this validator.
- **Render harness (own, honest):** repo root served on `http://127.0.0.1:44693` (validator-owned port, distinct from the engineer's stopped :48901); real book page `books/infinite-jest/index.html` from source; cohort CSS injected at runtime via a `<link href="design/cohort-b.css">` appended after theme.css — the same cascade position the §10 merge will produce. `theme.css`/`index.html` untouched (verified: `cohort-b` absent from theme.css; chapters.json already wires all 14 symbols). All navigation via real TOC clicks / buttons / keyboard, never URL hacks.
- **Evidence (53 PNGs, all mine — engineering/ not overwritten, not reused):** `.omp/design/evidence/cohort-b/validation/` — `v-<cid>-1440x1000-opener.png` ×14, `v-<cid>-plate.png` ×14, flow states ×15, responsive ×7, theme ×2, endnote ×1.

## Census (computed, distinct from visual sampling)

- cohort-b.svg parses as XML; **14/14** `<symbol>` ids match the frozen contract_manifest exactly; all viewBoxes `0 0 800 450`.
- **462 stroke + 709 fill attributes, 100% explicit hex**, zero `currentColor`, zero external refs (`<use>` count 0 — seals never redrawn, plates self-contained), zero violet strings.
- chapters.json wires all 14: `src=art/cohort-b.svg` + correct symbol/motif/class per entry.
- cohort-b.css: braces 239/239 balanced; **unlayered** (`@layer` only in a comment); **0 unscoped selectors** (every rule under `body[data-book="infinite-jest"][data-chapter="pNcM"]`); **zero minted `reader-*`** (only §2-qualified `:focus-visible` styling of shared `.reader-noteref`); no modulo/nth-child tinting; no `:not()` in code; **zero violet**; zero `display:none`; `.meta-rule span` recolor-only (`background: var(--ij-seal)`); 1 reduced-motion block; 15 phosphor focus rings.
- Per-chapter rule presence: p1c14×84, c15×20, c16×26, c17×66, c18×118, c19×26, c20×22, c21×31, c22×89, c23×40, c24×23, c25×27, c26×11, c27×54.
- Margin ticks: 59 content pills extracted; all in live-para range; spec labels/indices match except deliberate engineer extensions (c18 room-tab long labels, c24 +UNSUPPORTED LEAP, c25 double TOE TAG ::before/::after pair, c27 +4 profile nameplates). Clearance vs ledger note-tick paras holds everywhere **except F-3** (c27 P29, see below — visually benign, spec-text violation only).

## Live resolution (all 14, real reader)

Every chapter navigated via TOC click: `body[data-art]` correct, `#chapter-art` not hidden, `<svg>` present. Plate boxes: **566×318 @1440**, **573×322 @820**, **327×200 @390** — P1 floor holds exactly (200px), never `display:none`. Zero horizontal overflow at every sampled viewport.

## Visual review (from rendered pages, per chapter)

- **p1c14 chart-and-cone:** triptych reads instantly (Watteau vignette + chart/THEN WHAT + red horror rule + tricolor cone with three hatch densities + train/umbrella/GREE-CHAN base). Best-in-cohort composition. Flow: P83 red rule + WILLINGLY pill, P85 hinge (ornament above + 0145H pill right, no collision), P2 WATTEAU gutter pill — all activate. Coda P119 warm leaded measure confirmed.
- **p1c15 taxi-vent:** letterbox + feet-gap ladder + vent/dial#5 + two-beat rule; P4 heartbeat isolation confirmed in opener shot. Exquisite restraint.
- **p1c16 dusk-ember:** knife-sun + twin shadows + asterisk + sole red ember cell; envoy P65 confirmed by CSS + computed (screenshot sampled P1–P2 establishment instead — envoy verified via rule presence, not pixels; noted as partial).
- **p1c17 thesaurus-tired:** 16-stop procession + lockers + towel stripe + collapse curve + twin cut-in frames; P43 cut-in panel + CUT-IN·WIND pill and P55 litany ramp (1.12em peak on P57, centered P60 tail) verified in-flow.
- **p1c18 triangle-bell:** night quad (3 cells + hallway + unlit viewer + blackboard + spit-bubbles + gold bell) distinct from c17's day register. Room tabs + P114 chalk underline + blackboard wash verified. **F-1 striping applies.**
- **p1c19 thicket-tripod:** walkers at true scale contrast, cold-halo thicket, 1/8-plate Husky; P19 phosphor cold-reveal panel + HUSKY·TL pill verified — a genuinely moving beat.
- **p1c20 dancehall-globe:** 200-dot phosphor globe + seated shadows + nails/horn/dog glyphs; zero orange-red (ember reserved for c16). P5 whole-para cold center + ledger note pill coexisting cleanly. Rhyme with c16 legible without cloning.
- **p1c21 lotus-pull:** impassable red cuts; symmetric guru panel (TRANSCEND/CHIN-UP/LYLE) vs ragged street panel (Orange slash/YRSTRULY·C·TONY/400$); P6 hard-cut + ragged measure verified in-flow. Cuts are the content — delivered.
- **p1c22 guts-phone:** phosphor circuit phone + Phoenix/Enfield split + Ennet foundation course; warm/cold tick split legible at plate scale.
- **p1c23 pulley-barrel (LEAD):** routing slip + 6-story section + continuous rope + red barrel + balance ticket + brick-dust + red ENDTRANS rule — the cohort's densest and most successful document. Terminal P1–P2, manila P3–P12, claim ticks (#3/#11·75KG/3RD↑/3RD↓/ENDTRANS) all verified. **F-1 striping applies** (cosmetic only; memo still reads).
- **p1c24 hero-triptych (LEAD):** ACTION vs REACTION bays + dolly-track divider + circled B/B+ read well; **F-2: prophecy panel micro-text illegible at 1440px** (major). P9 oracle panel + PROPHECY/UNSUPPORTED LEAP pair verified.
- **p1c25 aigner-heart:** flat-white tabloid ground (sole in cohort) + MOMENT masthead + purse/shunts + chase ribbon + 4 red blocks + shrug + toe-tag/saw colophon — loudest document, correctly loud. P4–P5 pursuit band contiguous-ish wash + red rule + 4 BLOCKS pill verified.
- **p1c26 tally-ledger (LEAD):** portrait FILE-7 card + classification stamp + 5 chips + 7 dotted-leader rows + sole drop shadow — the artifact, not a page. P1 legend strip + P2 FALLBACK (hanging indent + gold rule + 2.1 leading, no JS) verified; rows break only at source em-dashes (PRIMARY JS assist remains a supervisor-side request, not this review's blocker).
- **p1c27 mask-vendor:** treatise (theses/homunculus/curve/tableau/masks) + canopy hinge + vendor tub/cries/nameplates — legible at both scales; P20–P25 Archivo shouts with loudness scale + P22 red underline verified; hinge rule + HINGE▸ pill verified.
- **Pair-wise distinctiveness:** all 14 plates mutually distinct in subject, composition, and spot-color role; rhyme contracts (c16/c20 horizon, c17/c18 lockers, envoy cadence) hold without cloning. J2 conforms everywhere (plates in opener slot only; dividers bounded, clearing measure; no art over prose). Five paper mediums mutually distinct (terminal/manila/school/tabloid/dossier). No AI-default tells: no gradient washes, no glass cards, no eyebrow-label grids, no single-accent repetition.

## Functional exercise (all actually driven, cohort chapters)

- TOC open/filter (`depend adult undergarment (6)` → 2 hits, p1c15 first)/navigate: PASS. Esc closes TOC and settings: PASS. Prev/next filing cards p1c16→p1c17→p1c16 with correct `data-art` swap: PASS. Progress fill 0%→100% with scroll: PASS. Resume: chapter + exact scrollY restore across cover round-trip (4000→4000): PASS (initial y=0 was a settle-timing artifact, retest clean).
- Settings: theme/size/leading/font/measure all repaint live (sepia narrative 27.2px/57.12px Newsreader verified) and persist across reload; reset to dark/md afterward: PASS. Plate legibility under Sepia light theme: PASS (manila line on paper-dark plate ground, contrast preserved — v-p1c23-sepia-plate.png).
- Keyboard: `s` settings, `t` contents, `j/k` next/prev (p1c20↔p1c21, art swaps), `Alt+←/→`, `/` focuses `#toc-search`, `←/→` travel settings rows (focus 0→1), `Esc` closes: ALL PASS.
- Contrast (computed, alpha-composited): body 14.3:1; memo wash 12.34; blackboard 13.28; pursuit 13.67; gold ticks 7.96; red 4.98; phosphor 13.07 — all ≥4.5: PASS.
- Focus: phosphor 2px `:focus-visible` on `.reader-noteref` (cohort-scoped rule activates); nav buttons show theme focus: PASS.
- Console/network sweep across all 14 chapters: zero pageerrors, zero console errors, zero failed/≥400 requests: PASS.
- Reduced-motion emulated: cohort `::before/::after` + `#chapter-art svg` compute `animation:none`, transition ~0: PASS.
- Violet scan: zero violet attributes in any live cohort plate; Part I header/progress gold: J5 PASS.
- Endnotes: p1c14 carries 9 live `.reader-noteref`s; click → arrival at `#note-28` in p2c3 with flash class + violet return chip; Esc-return and chip-click both restore p1c14 with art intact; deep-origin scroll restore verified (25717→2590… see note: reader restores saved debounce position, shared behavior, out of cohort scope): PASS.

## Findings (REVISE — visual-critique format)

```
ISSUE: Multi-paragraph contiguous-wash insets render as zebra stripes, not
  bounded panels — inter-para margins punch ground-colored gaps through the
  wash on every inset para after the first.
WHERE: c18 blackboard inset P81–P120 (worst: 40 striped paras), c23 manila
  memo P3–P12, c25 pursuit P4–P5 (2-para seam), any other contiguous-wash run.
EVIDENCE: v-p1c18-flow-P100-blackboard.png (alternating wash/gap bands down
  the whole viewport); v-p1c23-flow-P6-claimblocks.png (gaps between memo
  paras); computed: inset paras keep margin-bottom 23.92px with wash only on
  the para box (c23 P3–P8 sampled: bg manila-8% + mb 23.92px each).
SEVERITY: major — J4 "bounded and honest" fails visually; the blackboard
  (the chapter's centerpiece treatment) reads broken, and the lead memo's
  paper panel reads striped. Single-para inserts (c19 P19, c24 P9, c27
  shouts) are unaffected and show the intended craft.
FIX: smallest change inside cohort-b.css only: on each contiguous-wash run,
  zero the interior vertical margins (margin-top:0 on run paras except the
  first; margin-bottom:0 except the last) and move the air to padding on the
  run's first/last para (which already carry the border-top/bottom +
  padding rules — extend that pattern). Do not touch theme.css, prose, or
  the DOM. Re-verify c18 P81–P120 as one unbroken slate panel and c23 P3–P12
  as one paper sheet at 1440px.
```

```
ISSUE: c24 prophecy-panel micro-labels are set below legibility — at 1440px
  opener scale the bottom panel's small tags dissolve into grey texture and
  cannot be read even approximately (worse than any other plate's micro-type).
WHERE: hero-triptych plate, bottom prophecy panel (CATATONIC HERO /
  carried-by-burly-extras arrow ticks / RETROGRADE-AMINES micro-label zone).
EVIDENCE: v-p1c24-1440x1000-opener.png + v-p1c24-plate.png vs. the crisp
  micro-tags on v-p1c23-plate.png / v-p1c26-plate.png at identical scale.
  viewBox_policy requires micro-labels ≥12px user units — audit the panel's
  smallest text against it.
SEVERITY: minor — the plate's ACTION/REACTION dialectic (its thesis) reads
  perfectly; only the bottom-panel annotation layer fails. Does not touch J4
  (plate, not prose).
FIX: within art/cohort-b.svg #hero-triptych only: raise the prophecy
  panel's micro-labels to ≥12px user units (tracking 0.14em per engraving
  vocabulary), and if space is short, drop the least-essential tag rather
  than shrinking — density must never come from sub-floor type. Re-shoot the
  plate at 1440px to prove legibility.
```

```
ISSUE: c27 P29 carries BOTH a ledger note-tick (curator note_refs para 28 →
  note 53, verified live in chapter JSON) and the cohort's PEMULIS·ALLSTON
  profile nameplate — violating the design's own clearance_rule ("Cohort
  ticks NEVER share a paragraph with a ledger note-tick", which lists P29
  as a ledger para).
WHERE: p1c27 P29 ::before nameplate vs inline note-53 anchor.
EVIDENCE: computed census (only collision of 59 ticks); visually benign —
  the nameplate is a block label above the para while the note anchor is
  inline, so nothing overlaps (confirmed by the P29-adjacent flow shots).
SEVERITY: minor — spec-text violation with no rendered defect; the design's
  clearance_rule predates the profile-nameplate device (block labels are
  gutter-independent by the collapse spec).
FIX: cheapest honest repair is a design-text amendment, not a code change:
  designer amends margin_tick_system.clearance_rule to exempt block-label
  nameplates (which cannot collide with inline note anchors), OR engineer
  moves the P29 nameplate to ::after — either way, record the decision in
  cohort-b.json's design object via the lead. Validator will accept either
  with the amendment visible.
```

## Not findings (checked, passing)

- c27 P29 collision is the ONLY tick/ledger overlap; c14 P85 ornament+pill coexist cleanly (verified pixels).
- p1c16 P65 ember envoy + p1c22 monumental close verified by rule presence + computed styles, not dedicated pixels — partial coverage, disclosed, not a finding.
- c26 PRIMARY JS-wrap (supervisor-owned book-JS assist) still pending; FALLBACK shipped and verified — no cohort-side defect.
- Sepia/light-theme plates, phone 200px floors, gutter→inline collapse at 390px (0145H·2APR inline pill verified in-flow with zero overflow), Esc/return-chip round-trips: all pass.

## Verdict rationale

Two files of genuinely high craft — 14 distinct engraved artifacts, a working margin-tick system, five paper mediums, and full contract conformance on every computed axis — marred by one visible rendering defect (inset striping) that breaks J4 on the cohort's two longest inserts. REVISE is the honest verdict: F-1 must be repaired and re-inspected; F-2/F-3 are minor but concrete. No taste rejection: the art direction survives contact with the render.

## Re-inspection plan (after engineer repair)

Re-shoot c18 P81–P120 span + c23 P3–P12 span + c24 plate + c27 P29 at 1440px; confirm contiguous panels, legible micro-type, and the clearance amendment; then PASS.
