# Forty Ways — coverage & review ledger (supervisor-owned)

Live URL: `http://127.0.0.1:8099/books/forty-ways-to-look-at-churchill/`
Manifest: `design/chapters.json` — **41/41** entries, titles byte-verbatim vs `data/toc.json`,
every `src`+`symbol` resolved to a shipped SVG symbol (computed census, re-run at each merge).
Theme: `theme.css` §§0–7 shell + sequential COHORT-INTEGRATION (A, B, C, C2, D) + R2 SANS fix.
Book JS: `design/facets.js` (closed 22-role vocabulary; stamps `data-fw`/`data-fw-label`,
wraps p5c5 answers in keyboard-honest `details.fw-mask`, injects p4c2 `nav.fw-index`).

## Cohort ledger (all four yielded; all leads ran real designer+engineer subagents, effort hi)

| Cohort | Chapters | Designer | Engineer | Cohort validator | Supervisor verdict |
|---|---|---|---|---|---|
| A (Part II) | p2c3–p2c10 (8) | ChurchillCohortADesigner ✓ | ChurchillCohortAEngineer ✓ (:8212 harness) | NOT-RUN (cap 16/16 ×7; no PASS claimed) | ACCEPTED — JSON audit clean; REVISE occlusion (censor bars → motif-rooted shards) repaired + render-verified ×8 on cache-disabled :8210 |
| B (Part III) | p3c2–p3c6, p3c8–p3c10 (8) | ChurchillCohortBDesigner ✓ | ChurchillCohortBEngineer ✓ (:8213 harness) | NOT-RUN (cap ×3; no PASS claimed) | ACCEPTED — JSON audit clean; REVISE (hinge illegibility + censor bars + billboard/procession/dumbbell) repaired + render-verified ×8 |
| C2 (Part IV) | p4c1,p4c3–p4c10 (9; p4c2 pre-merged) | ChurchillC2Designer ✓ | ChurchillC2Engineer ✓ (:8211) | PASS pre-repair baseline (52 files, :8217 harness); repair rounds lead-rendered (cap ×5) | ACCEPTED — JSON audit clean; REVISE occlusion (incl. authorized 4-symbol repair in adopted cohort-c.svg) repaired + render-verified; one false rejection withdrawn as supervisor stale-cache artifact |
| D (I+V) | p1c1,p5c1,p5c2,p5c4,p5c5,p5c7,p5c8,p5c9 (8) | ChurchillCohortDDesigner ✓ | ChurchillCohortDEngineer ✓ (:8211) | NOT-RUN (cap ×8; no PASS claimed) | ACCEPTED — JSON audit clean (p5c5 63 mask-q + mask-a[128] verified); REVISE occlusion ×8 repaired + render-verified; p5c4 accepted-with-note (heaviest occlusion) |

Prototype plates (supervisor-authored, C9): p2c1, p2c2 (exact C2 mirror), p3c1, p3c7, p4c2,
p5c3, p5c6, p5c10 + cover.svg + facets.svg defs. Adopted untouched by cohorts.

## Supervisor render verification (observed, cache-disabled tabs, :8099 unless noted)

- Cover: desktop + tablet + phone (dark + sepia). Viewed.
- Desktop 1440 openers viewed: ALL 41 (19 primary + 4 body sections + 22 spot). Viewed.
- Tablet 820: cover + p2c1 + p3c9 + p5c5 + caption-fix re-verification (p2c1/p3c9/p5c5). Viewed.
- Phone 390: cover + p1c1 + p2c1 + p2c3(light) + p2c7 + p3c9 + p5c5 + p5c10 + TOC drawer. Viewed.
- All-41 activation census (observed DOM): every chapter art non-hidden, motif set, numeral
  present (p5c10 intentionally numeral-less, C6), role stamps match manifest counts
  (p5c5: 80 stamped + details.fw-mask; p4c2: 101 stamped). Zero console errors, zero 404s.
- C1: every viewed numeral occluded by ≥2 dark shards, first/last strokes readable.
  C2: p2c1/p2c2 exact inversion (source-verified mirror + relight); 6 uniqueness pairs
  differ (p2c3/p2c7, p3c5/p3c6 hinge-halves, p4c1/p4c8, p5c1/p5c9, p2c9/p4c10, p3c3/p5c6).
- C5 quiz: 63 mask-q rows, Answers <details> toggles via keyboard Enter, answer visible,
  print rule forces open. C6: Way-40 colophon finish viewed (point + floor lines + air).
- C7: TOC shard thumbnails render at all widths (41 thumbs on phone, part-keyed fills);
  shard progress reads as progress (4px ochre + shard tip). C8: Fraunces + Newsreader in
  computed styles AND visually (display numerals, body 18px Newsreader).
- Functional: Begin/TOC/filter(no-match empty state)/jump, Escape closes + focus sane,
  settings every control incl. all 8 themes + auto + size/leading/font/measure,
  prefs persist across reload, prev/next incl. first-chapter disabled-prev… (see note),
  j/k/t/s/arrows, progress width + resume shelf + restore, TOC read checks,
  broken-chapter retry UI (not-run — no book chapters broken; shared mechanism untouched),
  zero console errors / zero 404s across the full pass.
- NOTE (29 Oct recheck): prev-disabled state on p1c1 read `false` in one probe — shared
  reader behavior (prev navigates to cover, not disabled); ends behave per shared contract.
- Contrast (settled, reduced-motion-off, 2.6s post-click): dark 14.53, nocturne 15.05,
  verdant 15.93, oxblood 15.33, candlelight 16.11, sepia 12.97, light 15.79, slate 14.98 —
  all ≥ 4.5:1. Plate numerals stay Bone-on-dark in sepia/light via slot-scoped pinning.
- No h-overflow at 1440/820/390. Dark-first fresh visit. One h1 per view. No hotlinks.

## Supervisor repairs (all re-verified rendered before merge-accept)

1. art/cohort-c.svg p4c5 missing `</symbol>` (XML-invalid, pre-existing) — closed; parses.
2. Cohort A REVISE: censor-bar occluders → motif-rooted shards (×8 incl. p2c4 numeral
   relocation into the wedge). Accepted.
3. Cohort B REVISE: father/son hinge literalized (shared shard + ghost seams), censor
   bars angled/separated (p3c9, p3c8, p3c2 + billboard broken, p3c4 numeral into
   procession, p3c10 dumbbell split). Accepted.
4. Cohort C2 REVISE: censor bars → motif-rooted shadows (p4c1 beams, p4c4 sheets,
   p4c5 shoreline v3, p4c9 wedges, p4c3 veil teeth, p4c7 leaves). Accepted.
5. Cohort D REVISE: bars/boxes → motif-rooted (lens-rim arcs, cable catenaries,
   trail shards, fold diagonal, tilted masks, slashes, undertide, chair-leg shadows).
   Accepted (p5c4 noted heaviest).
6. Theme shell: TOC gallery wall (shard chips, part-keyed fills, active outline),
   shard progress (4px + tip), shard chevrons on prev/next, cover lockup
   (eyebrow/title-split/Rubin epigraph), plate-caption inscription styling (was
   unstyled body block), sepia/light slot-scoped plate pinning, cover-ground
   `var(--bg)` fix, R2 SANS preference rule.

## Independent review

- C2 cohort validator: PASS (pre-repair baseline, 52 files, :8217 harness).
- FinalValidator-2 R2 (live :8099, 1440/820/390): REVISE, 1 minor (SANS dead — fixed,
  verified, R3 requested). All else exemplary: 41/41 activating, role census exact,
  quiz keyboard-honest, resume pixel-exact, contrast all-pass, F15 clean.
- Independent book-validator spawn: attempted ×4, all cap-blocked (16/16). Coverage
  is supervisor-observed + FinalValidator-observed (R2+R3); no unrun PASS is
  claimed anywhere.
- FinalValidator-2 R3 (live :8099): CONDITIONAL PASS — SANS toggle verified exactly
  (Newsreader → DM Sans → Newsreader), p2c3 spot-viewed clean, zero console
  errors. Carried: 4 global shared items only. Book done from the validator's
  side. (`.omp/design/evidence/integration/wave3/churchill/REVIEW-R3.md`)

## Per-chapter ledger

Part I (How I Came to Churchill)
- p1c1 Intro § | 33 paras, 9 roles | single-lens, slate | art/cohort-d.svg#p1c1
  Author's-eye lens; served heading as display; speech/coda treatments.
Part II (Hero, Statesman, Words)
- p2c1 W1 | 28 paras, prose | rising-monoliths, ochre | prototype-plates.svg#p2c1
- p2c2 W2 | 42 paras, prose | p2c1-inverted, vermilion | prototype-plates.svg#p2c2
- p2c3 W3 | 37 paras, 36 roles | constellation-pins, bone | art/cohort-a.svg#p2c3
  Salon-wall register; glue pairs [10/11]+[23/24].
- p2c4 W4 | 24 paras, 7 roles | converging-wedge, ochre/vermilion | art/cohort-a.svg#p2c4
  Speech/memo ticks; beaches peroration as speech; coda+thesis close.
- p2c5 W5 | 13 paras, 13 roles+labels | balanced-scales, bone | art/cohort-a.svg#p2c5
  True diptych; opposing verdict plaques.
- p2c6 W6 | 24 paras, 8 roles | type-as-shards, ochre | art/cohort-a.svg#p2c6
  Letter glue; broadcast tick; verdict rule.
- p2c7 W7 | 77 paras, 77 roles | 77-tiles, mixed | art/cohort-a.svg#p2c7
  Two-voice setup/quote + dated rail + wartime set-plates.
- p2c8 W8 | 11 paras, 6 roles | three-strokes, ochre | art/cohort-a.svg#p2c8
  Emblem tags over calm body.
- p2c9 W9 | 10 paras, 7 roles | word-stone, bone | art/cohort-a.svg#p2c9
  Engraved quote blocks + centered verse.
- p2c10 W10 | 9 paras, 2 roles | grasping-talons, vermilion | art/cohort-a.svg#p2c10
  Vermilion claw over fame thesis.
Part III (Character & Family)
- p3c1 W11 | 9 paras, prose | black-dog-mass, slate | prototype-plates.svg#p3c1
- p3c2 W12 | 15 paras, 4 roles | turned-shoulder, slate | art/cohort-b.svg#p3c2
  Memo cluster glued; mass turned away, numeral exiled.
- p3c3 W13 | 15 paras, deliberate zero-role | bared-edge, vermilion | art/cohort-b.svg#p3c3
  Inline-only quotations; plate carries treatment.
- p3c4 W14 | 42 paras, 41 roles | dated-procession, bone | art/cohort-b.svg#p3c4
  Timeline head+rows; ledger false (single head).
- p3c5 W15 | 17 paras, 3 roles | split-shard-i, ochre | art/cohort-b.svg#p3c5
  LEFT hinge half (son).
- p3c6 W16 | 11 paras, 2 roles | split-shard-ii, ochre | art/cohort-b.svg#p3c6
  RIGHT hinge half (father); verdict diptych ticks.
- p3c7 W17 | 14 paras, prose | palette-shards, mixed | prototype-plates.svg#p3c7
- p3c8 W18 | 13 paras, 1 role | leaking-vessel, vermilion | art/cohort-b.svg#p3c8
  Spill-off-edge vessel; letter stays prose.
- p3c9 W19 | 57 paras, 55 roles | 57-witness-tiles, mixed | art/cohort-b.svg#p3c9
  Setup/quote/caption triads; 36-tile synecdoche plate.
- p3c10 W20 | 10 paras, 2 roles | held-tear, slate | art/cohort-b.svg#p3c10
  Quote + coda; softest geometry.
Part IV (Context & Myth)
- p4c1 W21 | 11 paras, 2 roles | brimming-glass, vermilion | art/cohort-c.svg#p4c1
  WAS/WAS NOT verdict plaques; spirit-level beams.
- p4c2 W22 | 109 paras, 101 roles | ledger-grid, bone | prototype-plates.svg#p4c2
  Fact ledger + sticky 9-head mini-index; verse stanza; Clough close.
- p4c3 W23 | 13 paras, 1 role | veiled-shard, slate | art/cohort-c.svg#p4c3
  Blunt thesis under veil; prurience refused.
- p4c4 W24 | 14 paras, 6 roles | two-interlocked, ochre | art/cohort-c.svg#p4c4
  Marriage diptych; letters as correspondence; photo captions.
- p4c5 W25 | 21 paras, 12 roles | island-outline, ochre | art/cohort-c.svg#p4c5
  Verse stanza block; refusal coda.
- p4c6 W26 | 19 paras, 19 roles | photo-frames, sepia-bone | art/cohort-c.svg#p4c6
  Numbered gallery-hang captions; drop-cap killed.
- p4c7 W27 | 13 paras, 2 roles | novel-pages, mixed | art/cohort-c2.svg#p4c7
  Central exhibit quote + coda; shared bases only.
- p4c8 W28 | 28 paras, 14 roles | destiny-vector, vermilion/ochre | art/cohort-c2.svg#p4c8
  Survival catalogue; destiny's voice; coda.
- p4c9 W29 | 20 paras, 9 roles | fracture-lines, vermilion | art/cohort-c2.svg#p4c9
  Constituent voices; cracking cause.
- p4c10 W30 | 1 para, 1 role | faded-map-wash, slate | art/cohort-c2.svg#p4c10
  88-word coda; rhymes Way 40.
Part V (Empire, Nemesis & Epitaph)
- p5c1 W31 | 11 paras, 2 roles | transatlantic-cable-pair, ochre | art/cohort-d.svg#p5c1
  Warm/cold verdict halves; catenary shadows.
- p5c2 W32 | 33 paras, 19 roles | backward-gaze, slate/ochre | art/cohort-d.svg#p5c2
  Monumental inscription verse; memo; drifting shards.
- p5c3 W33 | 24 paras, prose | split-diptych, vermilion/slate | prototype-plates.svg#p5c3
- p5c4 W34 | 12 paras, 3 roles | lifted-layer, bone | art/cohort-d.svg#p5c4
  Suppressed-material dossier; single lifted voice.
- p5c5 W35 | 129 paras, 81 roles | masked-tiles, mixed | art/cohort-d.svg#p5c5
  63 mask-q + 16 quote + setup; keyboard-honest Answers; masked-tile plate.
- p5c6 W36 | 23 paras, prose | full-fracture, vermilion | prototype-plates.svg#p5c6
- p5c7 W37 | 10 paras, 2 roles | hated-portrait, slate/ochre | art/cohort-d.svg#p5c7
  Closing caption pair; slashed-canvas plate.
- p5c8 W38 | 12 paras, 2 roles | ebbing-tide, slate | art/cohort-d.svg#p5c8
  Last-words + tablet epitaph pair; undertide plate.
- p5c9 W39 | 13 paras, 4 roles | judgment-seat, bone | art/cohort-d.svg#p5c9
  Reader summons; quarterdeck vision; colophon coda; empty chair.
- p5c10 W40 | 2 paras, 2 roles | single-point, ochre point | prototype-plates.svg#p5c10
  63-word epitaph + attribution; colophon finish (C6).

## Evidence paths

- Supervisor: `.omp/design/evidence/churchill-final/` (61 screenshots + this ledger's
  source of truth; desktop 1440 ×46, tablet 820 ×3, phone 390 ×11, sans-fix ×1).
- C2 cohort: `.omp/design/evidence/churchill-c2/` (52 files, PASS baseline) +
  `.omp/design/evidence/churchill-c2-repair/REPORT.md`.
- FinalValidator R2: `.omp/design/evidence/integration/wave3/churchill/REVIEW-R2.md`.
