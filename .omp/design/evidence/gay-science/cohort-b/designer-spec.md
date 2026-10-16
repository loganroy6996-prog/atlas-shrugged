# Cohort B — Book One (part-3, p3c1–p3c56) · Designer Spec v1.0

Status: **FINAL — engineer implements verbatim.** Adopted from
`.omp/design/evidence/gay-science/cohort-b/design-package.json` (Direction C —
Emblem Cabinet, CHOSEN), prose-verified against all 56 chapter JSONs, conformed
to binding docs. Ownership: cohort-B design lane. Never edit theme.css,
index.html, or prose from this lane.

Binding: `books/gay-science/design/ART-DIRECTION.md` (NOON identity) ·
`.omp/design/READER-CONTRACT.md` v1.1 (manifest `{src,symbol,class,motif,caption}`,
self-contained symbols, `reader:chapter`, `@layer shared`) ·
`.omp/design/RELAUNCH.md` · contract palette (NOON tokens only, `#2A1540`
FORBIDDEN for cohort B, zero gradients in SVG art, zero text in SVG viewBoxes,
GR3 zero phone overflow, GR4 full-bleed landmark/Branch plates).

Skills read FIRST via URI (zero fallbacks, `/designer` OFF):
`skill://frontend-design` · `skill://frontend-workflow` · `skill://reference-study`.
Reference grounding (proportional: adopt-and-verify, not a new identity):
Alciato emblem-book triad (pictura + motto + epigram → mark + title + caption;
Met Museum Emblematum Libellus record) and Munch *The Sun* (symmetric
architectural rays, figures toward light; Munchmuseet + UiO Aula records, incl.
the museum's own Nietzsche/Zarathustra reading) — both package-cited refs
re-verified via search; synthesis: emblem triad maps to our mark/title/caption
slots; Munch grammar legitimates full-bleed symmetric landmark fans (CF-1).

Inventory (corrected): **81 symbols** in ONE file `art/cohort-b.svg` —
15 light/stage atoms + 52 content atoms + 14 panels (6 essay + 6 landmark +
2 duets). The package narrates "76" / "62 atoms"; the authored lists actually
contain 80 (15+51+14). Fixes net +1 (retire `gs-b-twodoors`, add `gs-b-flare`
+ `gs-b-halves`). All `gs-b-*` ids, plain ids, every symbol fully
self-contained (CF-2: zero `<use>`, not even same-file).

---

## 1. Direction record (adopted, not relitigated)

- **A — Continuous Climb (literal NOON): REJECTED.** Opener sun rising
  fractionally p3c1→p3c56; altitude-by-index is order-derived
  (modulo/hash-adjacent, violates RELAUNCH spirit); 56 imperceptible variants
  repeat the rejected weak-change failure; 56 variants are 56 illustrations,
  not a one-file symbol system.
- **B — Footlights (stagecraft house): REJECTED as lead, ADOPTED as family.**
  Full theatre rebuild (footlights, valances, sun-as-spotlight) would fight
  supervisor NOON + Panel III part motif and read as another book. Its atoms
  (curtain/bell/slip/pillow/laurel/masks/prompter/plumes) + `stage` tone serve
  the stage chapters (p3c22/p3c29/p3c30/p3c36 + p3c1/p3c54 frame) inside NOON.
- **C — Morning Field-Work: the Emblem Cabinet (within NOON): CHOSEN.**
  NOON tokens + mural hand + fixed climbing-morning light + emblem/light atoms
  recombined into 6 essay panels, 6 landmark panels, 2 duet marks.

**Designer verdict: CONFIRM C.** (1) Aphorism-scale fit: 44 marks + 6 essays +
6 landmarks match the 55–1239w spread without inflating shorts. (2) Prose
audit: 54/56 confirmed verbatim, 2 surgical fixes (§8) — the package's
assignments are genuinely text-derived. (3) Integration fit: 1 SVG sprite +
twin-selector CSS + 56 explicit JSON entries. (4) Light discipline is the
cohort's strongest narrative effect: 55 fixed mornings make p3c45's Epicurean
noon-flash legible with no legend. (5) Composed run: eye-rhyme triptych
(p3c11 raw eye → p3c45 still eye → p3c53 dull eye), herd bookends (p3c1 herd →
p3c50 ringfaces → p3c56 monster), theatre frame (p3c1 comedy/tragedy →
p3c54 "not a dead mask"). Fixes below strengthen C; none relitigate it.

---

## 2. Palette roles (contract tokens ONLY — CF-5 dusk purge applied)

| `--gs-*` var | hex | role |
|---|---|---|
| `--gs-sea-deep` | `#06222B` | ground, slot washes, band darks |
| `--gs-sun` | `#F5B301` | sun masses, rays (w5), focus of light |
| `--gs-ray` | `#F8C51C` | ray alternation light, horizonpath accents |
| `--gs-sun-core` | `#FFEDBE` | pale maxima: disc cores, whitesea bands, noon wash |
| `--gs-vermilion` | `#E4572E` | bodies, rays (w4), mouths, apples, stage masses |
| `--gs-sea` | `color-mix(#173A8F 55%, #06222B)` | mid sea band (flat fill) |
| `--gs-wave` | `#173A8F` | wave band + crest ticks — FLAT shapes only, never gradients |
| `--gs-foam` | `#F3EAD8` | linework, titles, text-side light |
| `--gs-night` | `#030B0F` | shadow/death/night duties (replaces ALL package dusk uses) |
| `--gs-horizon` | `color-mix(#F5B301 45%, #F3EAD8)` | horizon hairlines, plate rules |
| `--gs-display` / `--gs-body` | Fraunces / Source Serif 4 | type stacks (Georgia fallback required) |

`#2A1540` / `--gs-dusk`: **absent from cohort B.** Every package dusk use is
remapped: pillow seams → night; ancestor crescent → night; applefall "dusk
bands" → night-deepened bands; land-lastwords "dusk sun" → night-occluded low
sun; `autumn`/`shadow`/`dream` washes → night-based; L4/L6 rule gradients →
night-based; lever shadow-hand → night. `#FFB84D` (Lantern Amber) unused in
cohort B (reserved: madman's lantern Book 3, ship lamps Book 4).
Contrast/8-theme rule: svg fills via `--gs-*` only (supervisor maps per theme;
sepia/light deepen text-adjacent sun per book §2 while art keeps gold masses);
CSS slot washes alpha ≤ .16, page wash (L5) alpha = .10; validator MUST
spot-check body contrast on all 8 themes incl. sepia/light + noon wash.

SVG-art discipline: 100% flat fills, round-cap strokes (5–7px at emblem scale,
min feature 4px, legible at 72px), zero gradients, zero text in any viewBox.
CSS-only linear accents (meta-rule sun-road, progress ray) and scrim washes
(slot veils, title veil) follow book-sanctioned precedent (cover veil,
progress ray) and are NOT art. Inscriptions live in HTML `<figcaption>` via
manifest `caption` (GR5); marks carry no captions (decorative, aria-hidden).

---

## 3. Type

- Display: **Fraunces 600**, `SOFT 100 WONK 1` (never 900), `var(--gs-display)`;
  italic ONLY p3c22 + p3c54 landmark titles; gold title ONLY p3c45.
- Body: **Source Serif 4** 1.3rem/1.85, `var(--gs-body)`; measure ≤ 68ch;
  Georgia/'Times New Roman'/serif fallbacks required, offline-safe.
- Meta part line: letterspaced small-caps Source Serif in `--gs-sun`.
- Titles: `clamp(2rem,5vw,3.25rem)` (p3c1 grandest: `clamp(2.6rem,7vw,4.25rem)`),
  `text-wrap: balance`, Foam (gold ONLY p3c45).
- No sans in cohort scope. No added eyebrows/labels/arrows. Zero cohort
  animation (art.css owns meta motion; `prefers-reduced-motion` needs no rule).

---

## 4. Symbol inventory — `art/cohort-b.svg` (81 symbols)

Conventions: every entry is a `<symbol id viewBox preserveAspectRatio>`.
Marks/duets: `xMidYMid meet`. Essay/landmark panels: `xMidYMid slice` (CF-1
phone floor). CF-2: fully self-contained paths; NO `<use>` anywhere; panel
`uses` lists are vocabulary references for the artist, not refs. Tones modulate
via svg-internal classes `gs-b-ray gs-b-disc gs-b-ink gs-b-ground gs-b-ember`
(fill/stroke hooks, never layout). All geometry below is the draw brief the
engineer implements verbatim; coordinates are indicative within the given
viewBox.

### 4a. Light/stage atoms (15)

1. `gs-b-rayfan` — `0 0 240 150`, origin bottom-center. Upper-hemisphere
   morning fan: 9 round-cap rays alternating `--gs-sun` w5 / `--gs-vermilion`
   w4, −75°…+75°. Class `gs-b-ray`. (Munch-grammar architecture; symmetric.)
2. `gs-b-sunlow` — `0 0 120 120`. Climbing disc: `--gs-sun` fill +
   `--gs-sun-core` inner ring. Flat. Class `gs-b-disc`. Chapter-emblem use
   FORBIDDEN after PF-1 (light atoms ≠ content marks); panels only.
3. `gs-b-sunhigh` — `0 0 120 120`. Overhead noon disc: larger core + tight
   double halo. Brightest flats in file. **`gs-b-land-epicurus` ONLY.**
4. `gs-b-horizon` — `0 0 300 24`. Horizon rule `--gs-horizon` w2.5 + one foam
   wave tick (pd-wave grammar).
5. `gs-b-seabands` — `0 0 720 120`. 3 flat bands sea-deep/sea/wave(.8) +
   crest ticks. Class `gs-b-ground`. Spans full width (invisible under CF-1
   side-crop).
6. `gs-b-gull` — `0 0 60 24`. Double-arc gull, foam w3.5 round (gs-gull hand).
7. `gs-b-spark` — `0 0 40 40`. 4-point star, foam. Self-contained (cover
   `#gs-spark` undefined — never reference it). p3c51 solo.
8. `gs-b-leaper` — `0 0 120 120`. Vermilion leaper, gs-dancer hand simplified:
   head + 3 gesture paths + 2 dots.
9. `gs-b-mask-fall` — `0 0 120 120`. Comedy mask tilted 20°, 3 falling ticks,
   foam line + vermilion mouth.
10. `gs-b-masks-pair` — `0 0 200 120`. Comedy + tragedy small pair, foam strokes.
11. `gs-b-curtain` — `0 0 300 160`. Valance + 2 parted drapes, vermilion
    masses, gold tiebacks, foam edge.
12. `gs-b-bell` — `0 0 120 120`. Tower bell gold + 3 foam sound arcs. Class
    `gs-b-disc` on bell.
13. `gs-b-slip` — `0 0 120 90`. Torn programme slip, foam .9, 3 broken rules,
    torn edge.
14. `gs-b-pillow` — `0 0 140 90`. 2 stacked smothering pillows, foam +
    NIGHT seams (CF-5). Heavy mass.
15. `gs-b-laurel` — `0 0 120 120`. Laurel sprig: stem + 7 gold leaves. Rome marker.

### 4b. Content atoms (52)

16. `gs-b-herd` — `0 0 240 120`. 9 overlapping back-arcs alternating
    sea/foam(.5), one vermilion bellwether hump.
17. `gs-b-tide` — `0 0 200 100`. Ebb/flood double wave: opposed sine bands
    gold + foam.
18. `gs-b-scales` — `0 0 160 140`. Balance beam tilted 12°, one pan low
    (underweight), one high. Gold beam, foam pans.
19. `gs-b-wink` — `0 0 160 100`. Half-closed eye: gold lid + 3 lashes +
    corner spark.
20. `gs-b-eye` — `0 0 160 100`. Open calm eye: foam almond, gold iris
    (`gs-b-disc`), deep pupil. Eye-rhyme atom (p3c11/p3c45-panel/p3c53).
21. `gs-b-flame` — `0 0 120 140`. 3 flame tongues gold/vermilion/core over
    ember dots on ash line. Class `gs-b-ember` on tongues.
22. `gs-b-drum` — `0 0 140 120`. Herald drum: foam head + vermilion shell +
    crossed sticks + beat ticks.
23. `gs-b-headwheel` — `0 0 140 140`. Striding head profile, 3 gear teeth +
    spoke arcs inside skull; stride tick beneath.
24. `gs-b-field` — `0 0 240 140`. Furrows converging to horizon + rising sun
    tick. Gold on sea.
25. `gs-b-lens` — `0 0 140 120`. Gold lens ring over 3 reptile-scale arcs,
    one hatched.
26. `gs-b-seedling` — `0 0 120 140`. Stem + 2 vermilion leaves breaking soil
    line; root ticks.
27. `gs-b-ancestor` — `0 0 120 120`. Closed-eye ancestor oval, bone .85 on
    NIGHT crescent (CF-5) + ghost rim.
28. `gs-b-strand` — `0 0 180 100`. 2 sine paths crossing 3×, gold + vermilion.
29. `gs-b-hand-open` — `0 0 140 120`. Extended open palm: mitt + 4 fingers +
    gold cuff arc.
30. `gs-b-hand-grasp` — `0 0 140 120`. Hooked grasping fingers closing on a
    small dot it cannot hold.
31. `gs-b-mountain` — `0 0 200 140`. Mountain silhouette + vermilion climber
    dot at 2/3 + disenchantment tick (small foam dash where magic dies).
32. `gs-b-bridge` — `0 0 200 120`. Footbridge arc over torrent gap (3 zigzag
    ticks); one end broken.
33. `gs-b-stream` — `0 0 180 120`. 3 wavy stream lines cradled in a laurel arc.
34. `gs-b-column` — `0 0 140 140`. Greek column stub + 4-step rank staircase.
35. `gs-b-tree` — `0 0 160 160`. Bent windswept tree on cliff + 5 streaked
    branches + 3 storm slashes.
36. `gs-b-cap` — `0 0 140 100`. Jester cap (3 bells) over a snapped ledger line.
37. `gs-b-tablets` — `0 0 160 140`. 2 foam tablets: UP gold chevron (shalt) +
    DOWN gold chevron (shalt not), vermilion crack between.
38. `gs-b-applefall` — `0 0 160 160`. Autumn branch + 3 falling vermilion
    apples + fall ticks; one apple seeding below.
39. `gs-b-twocups` — `0 0 160 110`. Wine cup (vermilion) vs medicine cup
    (foam + cross).
40. `gs-b-turned` — `0 0 140 120`. Profile turned from receding spark;
    heel-turn arc beneath.
41. `gs-b-shed` — `0 0 160 120`. S-snake + discarded slough arc; eye dot on
    living curve only.
42. `gs-b-hood` — `0 0 140 140`. Hooded rising triangle + 3 falling ballast
    stones.
43. `gs-b-prompter` — `0 0 160 110`. Prompter half-dome + head + 3 whisper dots.
44. `gs-b-plumes` — `0 0 150 110`. 3 fanned plumes gold/foam/vermilion with quills.
45. `gs-b-bow` — `0 0 140 120`. Hunter bow arc + string + nocked arrow.
46. `gs-b-sunbeam` — `0 0 180 140`. Sunbeam wedge into vault arcs; 3
    secret-dots rising in beam.
47. `gs-b-pyre` — `0 0 120 150`. Stake + flame + snapped halo (sprung arc ends).
48. `gs-b-threecandles` — `0 0 180 130`. 3 candles tall/mid/short
    (Newton/Voltaire/Spinoza) before altar arc.
49. `gs-b-match` — `0 0 150 110`. Lit match diagonal over keg stave-arcs;
    spark about to land.
50. `gs-b-cup` — `0 0 130 110`. Tipped cup + taste-drop + spill arc +
    ridiculum slash.
51. `gs-b-swordfire` — `0 0 150 140`. Sword crossed over factory chimney +
    smoke ticks.
52. `gs-b-flask` — `0 0 120 140`. Flask triangle + bubbles + trial tick; gold liquor.
53. `gs-b-horizonpath` — `0 0 220 120`. Path to horizon + walker tick +
    bow-tip on skyline (hunting echo coherent with p3c31; keep).
54. `gs-b-lawtablet` — `0 0 150 140`. Law tablet cracked + dark NIGHT foreign
    wedge driven in.
55. `gs-b-lever` — `0 0 170 120`. Lever on fulcrum gripped by NIGHT
    shadow-hand (CF-5); effort arcs.
56. `gs-b-clamp` — `0 0 130 130`. Iron C-clamp + screw; one jaw sprung.
    (Iron = foam/gold desaturated by `iron` tone where applied; p3c46 uses
    morning tone — draw clamp in foam with gold screw.)
57. `gs-b-muzzle` — `0 0 150 110`. Muzzled court mouth: lip line + strap +
    Versailles bow.
58. `gs-b-manacle` — `0 0 140 120`. Iron manacle ring + chain link + strain ticks.
59. `gs-b-wheel` — `0 0 140 140`. Wheel hub + 6 spokes + 5 flung drops on tangents.
60. `gs-b-ringfaces` — `0 0 170 130`. 1 figure tick ringed by 8 cold-dot face
    circles.
61. `gs-b-echo` — `0 0 170 110`. 3 mouth arcs + 3 expanding echo waves.
62. `gs-b-whitesea` — `0 0 260 120`. 3 whitish sea bands (core .85/.6/.4) +
    2 rock wedges + 3 fish arcs.
63. `gs-b-sleepwalker` — `0 0 200 150`. Ridge + dreamer silhouette mid-step
    over NIGHT void; 3 dream arcs above.
64. `gs-b-altar` — `0 0 130 150`. Stone altar + lone tall flame + void tick
    (unknown god).
65. `gs-b-monster` — `0 0 220 130`. Horizon monster: hump + 2 horns + 3 eyes;
    crowd ticks below.
66. `gs-b-flare` — `0 0 140 140`. **(NEW, PF-1, p3c28 ONLY.)** Overexposed
    morning disc: swollen core disc (core .95) with short thick flare-rays
    (gold, 8, stubby round-cap) and a vermilion blind-spot wedge biting its
    lower edge; 3 tiny prone figure-ticks beneath (the destroyed weak). Reads
    as "too much of a good light", distinct from `gs-b-sunlow` (clean climbing
    disc, panels only) and `gs-b-sunhigh` (overhead noon, p3c45 only).
67. `gs-b-halves` — `0 0 160 90`. **(NEW, PF-2, p3c32 ONLY.)** Two verdict
    rings on a shared baseline: left OPEN gold ring (the disciple who "can't
    say 'no'" — never closes); right foam ring closed for exactly half its arc,
    open for the other half ("half and half"). Bold 6px strokes; gap positions
    at lower-right so the pair reads as failed closures.
68. ~~`gs-b-twodoors`~~ — **RETIRED (PF-2).** Do NOT author. Doors belong to
    Cohort A grammar; p3c32's two portraits are verdicts, not thresholds.

### 4c. Panels (14) — full-bleed compositions (CF-1)

Essay panels: `viewBox 0 0 720 320`. Landmarks: `0 0 960 420` (p3c1:
`0 0 1200 420`). Duets: `0 0 240 120`, meet. All panels `slice` (essay/landmark)
so CF-1 side-crop is graceful: keep semantic centers within the middle 60%;
seabands/horizon span edge-to-edge.

69. `gs-b-panel-wink` (p3c3). Seabands base + horizon; sunlow left + full fan;
    wink ×1.6 right-of-center; 2 gulls upper-right; 3 sparks trailing.
    Suspicion under morning.
70. `gs-b-panel-field` (p3c7). Field furrows lower half to horizon; sunlow +
    full fan upper-left ("the sun of one fundamental moral judgement");
    1 gull; gold furrows.
71. `gs-b-panel-hand` (p3c13). Hand-open large right over bands (dependents
    below as small ticks); sunlow left + fan; 2 equal-dot ticks facing the
    hand (knightly equals).
72. `gs-b-panel-grasp` (p3c14). Grasp upper-center over PALED bands (bands at
    .55 alpha — the tiring landscape); spark-triplet ideal-star above grasp
    (shared higher thirst = friendship).
73. `gs-b-panel-applefall` (p3c23). Branch upper-left; apples falling center
    over NIGHT-deepened bands (CF-5); one apple seeding below the band line.
74. `gs-b-panel-manacle` (p3c48). Manacle large center on darkened bands;
    rayfan opacity .35 (lowest in file — dimmed morning); no gulls;
    1 guttering spark. Age of fear.
75. `gs-b-land-herd` (p3c1, 1200×420, WIDEST). Bands + horizon + sunlow center
    r56 + full fan + herd band + tide strip + masks-pair small right
    (comedy/tragedy frame) + 4 gulls + 6 sparks. Near-symmetrical Munch
    grammar. Grandest opener.
76. `gs-b-land-tablets` (p3c21). Tablets monumental center on herd arc below
    (virtues praised for society's use); fan stern/narrow (5 rays); iron tone
    desaturation.
77. `gs-b-land-court` (p3c22). Curtain valance full-width top; bell large left
    + arcs (fifth hour); torn slip center-right (unknown programme); low sun +
    fan behind; vermilion-forward.
78. `gs-b-land-lastwords` (p3c36). Mask-fall large center-left; laurel right;
    pillows heavy bottom (smothered double death); low sun with NIGHT-occluded
    lower third (CF-5).
79. `gs-b-land-epicurus` (p3c45, BRIGHTEST). Sunhigh TOP-CENTER (the file's
    only overhead sun); whitesea + rocks + fish below; calm eye small center
    over the still surface; 5 sparks. No horizon darkness. THE noon-flash.
80. `gs-b-land-sleepwalker` (p3c54). Ridge + dreamer center over void; morning
    fan he must not wake to; 2 leapers in margins; masks-pair tiny ("not a
    dead mask"); 4 will-o'-wisp sparks (core .9, smaller, higher).
81. `gs-b-m-plumemask` (p3c30). 240×120 duet: plumes fanned left + mask-fall
    small right, shared baseline.
82. `gs-b-m-bowscale` (p3c31). 240×120 duet: bow crossed over scales, centered.
    **Beam drawn LEVEL** (fresh self-contained composition per CF-2 — never
    import p3c2's tilted underweight beam; trade weighs, it does not cheat).


---

## 5. Per-chapter map (56 entries — engineer implements verbatim)

Key: `o` = opener class (`mark` / `essay-opener` / `landmark-panel`); `t` =
tone; `rt` = reading treatment (slot scale + text intent). All part-3. Word
counts verified against TOC. Anchor = prose evidence (short quote).

### p3c1–p3c14

- **p3c1** · 1. The teachers of the purpose of existence. · 1239w ·
  o=landmark-panel t=essay rt=grand · symbol `gs-b-land-herd` · caption:
  "Ebb and flood — the comedy of existence." · Rationale: programmatic
  opener, longest in cohort (1239w): herd instinct as species-essence, ebb/
  flood law, heroes on stage, comedy/tragedy as preservation, closing
  "We, too, have our time!". Grandest panel + grandest title proportional to
  text. Anchors: "essence of our species and herd"; "these heroes on this
  stage"; "waves of uncountable laughter"; "new law of ebb and flood".
- **p3c2** · 2. Intellectual conscience. · 340w · o=mark t=morning
  rt=standard · `gs-b-scales` · Rationale: lonely conscience watches the
  majority "handling their scales"; their weights are underweight. Tilted
  balance is the one concrete image. Anchor: "goes on handling their scales,
  calling this good and that evil".
- **p3c3** · 3. Noble and common. · 644w · o=essay-opener t=essay rt=essay ·
  `gs-b-panel-wink` · caption: "They give a wink — suspicion of the noble." ·
  Rationale: common natures wink at nobility, suspect hidden advantage, laugh
  at the sparkle in the noble eye; closes on "the eternal injustice of the
  noble". Anchor: "they give a wink when they hear of such things".
- **p3c4** · 4. What preserves the species. · 278w · o=mark t=morning
  rt=standard · `gs-b-flame` · Rationale: strongest evil spirits "rekindled
  the dozing passions"; flame catching on cold embers. Anchor: "time and again
  they rekindled the dozing passions — every ordered society puts the passions
  to sleep".
- **p3c5** · 5. Unconditional duties. · 303w · o=mark t=morning rt=standard ·
  `gs-b-drum` · Rationale: pathos-merchants need the unconditional ought as
  drumbeat (revolutionaries, preachers, Mazzini); "the most eloquent gestures
  and postures" = herald performance. Anchor: "All persons who feel that they
  need the strongest words and sounds".
- **p3c6** · 6. Loss of dignity. · 165w · o=mark t=morning rt=standard ·
  `gs-b-headwheel` · Rationale: reflection lost ceremony; we think walking;
  "unstoppable machine" in the head. Striding head with works inside. Anchor:
  "as if we carried around in our heads an unstoppable machine".
- **p3c7** · 7. Something for the industrious. · 440w · o=essay-opener t=essay
  rt=essay · `gs-b-panel-field` · caption: "An immense field of work — the
  moral sun not yet risen." · Rationale: moral study as "immense field of
  work"; unwritten histories (love/avarice/envy); "why does the sun of one
  fundamental moral judgement shine here"; future cyclops-buildings. Anchor:
  "opens up for himself an immense field of work".
- **p3c8** · 8. Unconscious virtues. · 265w · o=mark t=morning rt=standard ·
  `gs-b-lens` · Rationale: real virtues hide like "subtle sculptures on the
  scales of reptiles", visible only under a microscope not yet invented; lens
  ring = "artificially sharpened eye". Anchor: "one sees them only with a
  microscope".
- **p3c9** · 9. Our eruptions. · 154w · o=mark t=morning rt=standard ·
  `gs-b-seedling` · Rationale: feeble traits "suddenly emerge into the light
  much later"; "hidden gardens and plantations"; sprout breaking soil carries
  the botanic register (volcano metaphor second). Anchor: "All of us harbour
  in ourselves hidden gardens and plantations".
- **p3c10** · 10. A kind of atavism. · 217w · o=mark t=morning rt=standard ·
  `gs-b-ancestor` · Rationale: rare humans as "late ghosts of past cultures"
  to nurse/defend/honor; closed-eye ancestor oval on night crescent (CF-5).
  Anchor: "suddenly appearing, late ghosts of past cultures and their powers".
- **p3c11** · 11. Consciousness (Bewußtsein). · 295w · o=mark t=ember
  rt=standard · `gs-b-eye` · Rationale: consciousness unfinished/unrobust;
  "perish with open eyes"; knowledge-becoming-instinct "only beginning to
  dawn on the human eye". Raw ember eye; first of eye-rhyme triptych
  (p3c11 → p3c45 → p3c53). Anchor: "it is only beginning to dawn on the human
  eye".
- **p3c12** · 12. On the aim of science. · 312w · o=mark t=morning
  rt=standard · `gs-b-strand` · Rationale: pleasure/displeasure intertwined —
  "jubilate up to the heavens" requires "grief unto death". Two crossing
  strands; Stoic slogan secondary. Anchor: "whoever wants to learn to
  'jubilate up to the heavens' must also be prepared for 'grief unto death'".
- **p3c13** · 13. On the doctrine of the feeling of power. · 558w ·
  o=essay-opener t=essay rt=essay · `gs-b-panel-hand` · caption: "Benefiting
  and hurting — power over dependents and equals." · Rationale: benefiting/
  hurting both power exercised; pain asks its cause, pleasure stops with
  itself; knightly courtesy toward equals. Extended hand over dependents and
  equals. Anchor: "Benefiting and hurting others are ways of exercising one's
  power over them".
- **p3c14** · 14. The things people call love. · 611w · o=essay-opener t=essay
  rt=essay · `gs-b-panel-grasp` · caption: "We stretch out our hands again —
  until friendship." · Rationale: greed/love one instinct named twice;
  outstretched hands; most beautiful landscape tires in three months;
  friendship as the shared higher thirst. Anchor: "we stretch out our hands
  again; even the most beautiful landscape is no longer sure of our love".

### p3c15–p3c28

- **p3c15** · 15. From a distance. · 155w · o=mark t=morning rt=standard ·
  `gs-b-mountain` · Rationale: mountain enchants only from below and
  distance; climb it and the magic dies. Silhouette + tiny climber +
  disenchantment tick. Anchor: "we climb it and are disappointed".
- **p3c16** · 16. Over the footbridge. · 201w · o=mark t=morning rt=standard ·
  `gs-b-bridge` · Rationale: "Do you want to cross the footbridge to me?" —
  refused; now mountains and torrents divide. The bridge is the story; one end
  broken. Anchor: "only a small footbridge separated us".
- **p3c17** · 17. Finding a motive for one's poverty. · 97w · o=mark t=morning
  rt=quiet · `gs-b-stream` · Rationale: wise gardener "places the poor little
  stream in his garden in the arms of a nymph". Trickle cradled in laurel;
  quiet for 97w. Anchor: "he places the poor little stream in his garden in
  the arms of a nymph".
- **p3c18** · 18. Ancient pride. · 210w · o=mark t=morning rt=standard ·
  `gs-b-column` · Rationale: ancient nobility's hue needed distance — the
  Greek "could barely see the slave clearly any more, not even Plato";
  column stub + rank staircase = the "immense intermediate stages". Anchor:
  "found such immense intermediate stages and such a distance between his own
  height and that ultimate baseness".
- **p3c19** · 19. Evil. · 93w · o=mark t=morning rt=quiet · `gs-b-tree` ·
  Rationale: no proud tree without storms; poison killing the weak strengthens
  the strong. Windswept tree, quiet for 93w. Anchor: "whether a tree which is
  supposed to grow to a proud height could do without bad weather and storms".
- **p3c20** · 20. The dignity of foolishness. · 108w · o=mark t=morning
  rt=quiet · `gs-b-cap` · Rationale: under coming tyranny of prudence "to be
  noble might then come to mean: to entertain follies". Cap outlasting the
  snapped ledger, quiet. Anchor: "To be noble might then come to mean: to
  entertain follies".
- **p3c21** · 21. To the teachers of selflessness. · 957w · o=landmark-panel
  t=iron rt=essay · `gs-b-land-tablets` · caption: "'Thou shalt' and 'Thou
  shalt not' — preached in the same breath." · Rationale: 'Teachers of...'
  pair with p3c1, 957w: virtues praised for society's use while dominating
  possessors; closing self-refutation — neighbour preaches "Thou shalt" and
  "Thou shalt not" in the same breath. Monumental iron, formally unique.
  Anchor: "thus one preaches, in the same breath, a 'Thou shalt' and a 'Thou
  shalt not'!".
- **p3c22** · 22. L'ordre du jour pour le roi. · 416w · o=landmark-panel
  t=stage rt=dramatic · `gs-b-land-court` · caption: "The fifth hour — a
  morning dream of ceremony." · Rationale: most formally eccentric: staged
  court-day monologue; bad weather unspoken; Montaigne's stone; unknown
  programme ("we don't know the programme! So we have to improvise"); fifth-
  hour tower bell ends the dream. Italic title. Anchor: "Wasn't that the bell?
  Damn! The day and the dance are beginning and we don't know the programme!".
- **p3c23** · 23. The signs of corruption. · 980w · o=essay-opener t=autumn
  rt=essay · `gs-b-panel-applefall` · caption: "Corruption — the autumn of a
  people." · Rationale: corruption as a people's autumn — colourful
  superstition vs pale faith; tyrants/Caesar; Napoleon's "That is me"; apples
  as seed-bearers of the future. Anchor: "the apples fall from the tree: I
  mean the individuals, the seed-bearers of the future".
- **p3c24** · 24. Different forms of dissatisfaction. · 301w · o=mark t=morning
  rt=standard · `gs-b-twocups` · Rationale: weak discontents take opiates;
  strong take physicians — "they resent those who esteem physicians above
  priests". Wine cup vs medicine cup. Anchor: "they resent those who esteem
  physicians above priests".
- **p3c25** · 25. Not predestined for knowledge. · 129w · o=mark t=morning
  rt=quiet · `gs-b-turned` · Rationale: stupid humility "turns on his heel"
  from the striking — "too many old truths". Averted profile, quiet. Anchor:
  "as soon as a person of this type perceives something striking, he turns on
  his heel".
- **p3c26** · 26. What is life? · 67w · o=mark t=morning rt=quiet ·
  `gs-b-shed` · Rationale: life = "continually shedding something that wants
  to die", against Moses' "thou shalt not kill". Slough, quiet for 67w.
  Anchor: "Life — that is: continually shedding something that wants to die".
- **p3c27** · 27. The renouncer. · 151w · o=mark t=morning rt=standard ·
  `gs-b-hood` · Rationale: renouncer casts ballast to soar higher, "shrouded
  in his hood" — secretly an affirmer, "cleverer than we thought". Anchor:
  "he throws away much that would encumber his flight".
- **p3c28** · 28. Harming with what is best in oneself. · 193w · o=mark
  t=glare rt=standard · `gs-b-flare` **(PF-1 FIX — was `gs-b-sunlow`)** ·
  Rationale: the great destroy the weak "precisely with what is best in
  them"; their best acts "like an overly potent drink"; the weak, intoxicated,
  "break their limbs". New `gs-b-flare` = overexposed morning disc with
  blind-spot wedge + prone ticks: too much of a good light; keeps reserved
  light atoms out of chapter-emblem duty. Anchor: "precisely with what is best
  in them, with what only they can do, they destroy many who are weak".

### p3c29–p3c42

- **p3c29** · 29. The add-on-liars. · 122w · o=mark t=stage rt=quiet ·
  `gs-b-prompter` · Rationale: French unities quarrel — conservatives invent
  reasons for old habits after the fact ("one lied to oneself, inventing
  reasons for these laws"). Prompter whispering excuses; stage tone, quiet.
  Anchor: "inventing reasons for these laws, simply to avoid admitting that
  one had become used to them".
- **p3c30** · 30. The comedy of the famous. · 230w · o=mark t=stage rt=duet ·
  `gs-b-m-plumemask` · Rationale: famous men borrow splendour/fear/feigned
  idleness from a rotating cast ("visionary… expert… thinker… pedant") whose
  surroundings die off; "push… onto the stage". Plumes + mask duet. Anchor:
  "Their friends and allies belong, as I said, to these stage properties".
- **p3c31** · 31. Trade and nobility. · 233w · o=mark t=morning rt=duet ·
  `gs-b-m-bowscale` · Rationale: trade common as reading, as hunting once
  was; nobles may one day trade as "luxury of sentiment" — "the noble might
  enjoy trade as much as they hitherto enjoyed war". Bow over level scales
  duet. Anchor: "everyone was a hunter… The same thing could happen to buying
  and selling one day".
- **p3c32** · 32. Undesired disciples. · 112w · o=mark t=morning rt=quiet ·
  `gs-b-halves` **(PF-2 FIX — was `gs-b-twodoors`, retired)** · Rationale:
  the corrupter rejects two disciples — one "can't say 'no'", the other says
  "half and half"; his doctrine needs "a warlike soul, a desire to hurt, a
  delight in saying no". New `gs-b-halves` = open ring + half-closed ring:
  two failed verdict-closures; no doors (A-grammar), no war-scene (text
  refuses the unwanted). Anchor: "This one can't say 'no' and the other one
  says 'half and half' about everything".
- **p3c33** · 33. Outside the lecture-room. · 77w · o=mark t=iron rt=quiet ·
  `gs-b-wink` · Rationale: man became distrustful, more evil, late — "Because
  he now has a science". Cold suspicion-wink in iron tone rhymes p3c3's essay
  (suspicion motif, inverted direction: science makes man suspicious). Anchor:
  "'Because he now has a science — needs a science.'".
- **p3c34** · 34. Historia abscondita. · 67w · o=mark t=morning rt=quiet ·
  `gs-b-sunbeam` · Rationale: great humans exert retroactive force — "a
  thousand secrets of the past crawl out of their hiding places — into his
  sunshine". Beam + rising secret-dots, quiet. Anchor: "a thousand secrets of
  the past crawl out of their hiding places — into his sunshine".
- **p3c35** · 35. Heresy and witchcraft. · 116w · o=mark t=shadow rt=quiet ·
  `gs-b-pyre` · Rationale: thinking otherwise = heresy, "the adjunct of
  witchcraft"; Reformation "redoubled the medieval spirit". Stake + snapped
  halo in shadow tone, quiet. Anchor: "Heresy is the adjunct of witchcraft".
- **p3c36** · 36. Last words. · 224w · o=landmark-panel t=stage rt=dramatic ·
  `gs-b-land-lastwords` · caption: "Plaudite, amici — the mask falls; Tiberius
  is smothered." · Rationale: Augustus lets the mask fall ("Plaudite amici,
  comoedia finita est!"); Nero "qualis artifex"; Tiberius silent, smothered
  with pillows into double death. Roman theatre landmark; landmark by
  semantics (densest theatre cluster), not length. Anchor: "he let his mask
  fall for the first time".
- **p3c37** · 37. Because of three errors. · 130w · o=mark t=morning rt=quiet ·
  `gs-b-threecandles` · Rationale: science promoted through three errors —
  God (Newton), utility (Voltaire), innocence (Spinoza). Three candles,
  quiet. Anchor: "the main motive in the soul of the great Englishmen (such as
  Newton)… of the French (such as Voltaire)… in the soul of Spinoza".
- **p3c38** · 38. The explosive ones. · 94w · o=mark t=ember rt=quiet ·
  `gs-b-match` · Rationale: young men are powder kegs thrilled by "the sight
  of the burning match — not the cause itself". Match over keg, ember tone,
  quiet. Anchor: "the sight of the burning match — not the cause itself".
- **p3c39** · 39. Changed taste. · 176w · o=mark t=morning rt=standard ·
  `gs-b-cup` · Rationale: taste changes before opinions when shameless ones
  enforce "hoc est ridiculum" — judgement of taste and disgust; physis
  (nutrition/digestion) as cause. Tipped cup + taste-drop. Anchor: "who
  announce and tyrannically enforce their hoc est ridiculum, hoc est absurdum".
- **p3c40** · 40. On the lack of noble style. · 323w · o=mark t=iron
  rt=standard · `gs-b-swordfire` · Rationale: military culture above
  industrial — soldiers/leaders outrank workers/employers; workers submit to
  "unknown and uninteresting persons"; bloodsucking employer "dog",
  manufacturer's vulgarity. Sword vs chimney, stern iron. Anchor: "all
  cultures with a military basis are still high above so-called industrial
  culture".
- **p3c41** · 41. Against remorse. · 69w · o=mark t=morning rt=quiet ·
  `gs-b-flask` · Rationale: thinker treats acts as experiments — success/
  failure are answers; remorse belongs to the ordered-about expecting "a
  beating". Flask + trial tick, quiet. Anchor: "The thinker sees his own
  actions as experiments and questions".
- **p3c42** · 42. Work and boredom. · 284w · o=mark t=morning rt=standard ·
  `gs-b-horizonpath` · Rationale: against work-for-wages — rare ones (artists,
  hunters, travellers, lovers) for whom "work is not itself the reward of
  rewards" refuse; boredom as the "lull" before "a happy voyage". Path +
  walker + bow-tip. Anchor: "they have no use for ample rewards if the work is
  not itself the reward of rewards".

### p3c43–p3c56

- **p3c43** · 43. What the laws betray. · 263w · o=mark t=morning rt=standard ·
  `gs-b-lawtablet` · Rationale: penal codes betray what a people finds
  foreign — Wahhabis' two mortal sins (other god + smoking); Romans' adultery
  + wine; Dionysian cult as "foreign monster". Tablet cracked by night wedge.
  Anchor: "the laws do not betray what a people is but rather what appears to
  it as foreign, strange, uncanny, outlandish".
- **p3c44** · 44. The supposed motives. · 87w · o=mark t=morning rt=quiet ·
  `gs-b-lever` · Rationale: believed-in motives matter more than real ones —
  "the real lever of its conduct"; happiness/misery follow belief. Lever
  gripped by night shadow-hand, quiet. Anchor: "what humanity has imagined and
  told itself to be the real lever of its conduct so far".
- **p3c45** · 45. Epicurus. · 123w · o=landmark-panel t=noon rt=luminous ·
  `gs-b-land-epicurus` · caption: "The afternoon of antiquity — the sea of
  existence grown still." · Rationale: "the happiness of the afternoon of
  antiquity"; calm eye over "wide whitish sea"; sun-bathed rocks; creatures
  secure "like the light and his eye itself"; "sea of existence has grown
  still". The single noon-flash: only overhead sun, only gold title, brightest
  panel. Landmark by luminosity, not length. Anchor: "I see his eye gaze at a
  wide whitish sea".
- **p3c46** · 46. Our amazement. · 213w · o=mark t=morning rt=standard ·
  `gs-b-clamp` · Rationale: inner life once "fastened to iron necessity with
  eternal clamps"; now shipwrecked men marvelling on firm earth. Sprung clamp
  (old faith sprung open by change). Anchor: "the entire inner life of
  humanity was fastened to iron necessity with eternal clamps".
- **p3c47** · 47. On the suppression of the passions. · 218w · o=mark t=morning
  rt=standard · `gs-b-muzzle` · Rationale: forbidding passion's expression
  (Louis XIV court) atrophies passion into "graceful, shallow, playful
  manner". Muzzled court mouth. Anchor: "the suppression of the passions
  themselves, at least their weakening and alteration — the most instructive
  example being furnished by the court of Louis XIV".
- **p3c48** · 48. Knowledge of distress. · 462w · o=essay-opener t=shadow
  rt=shadowed · `gs-b-panel-manacle` · caption: "The age of fear — the recipe
  against distress is distress." · Rationale: darkest essay — ages divided by
  knowledge of distress; "age of fear, the longest of all ages"; cruelty-to-
  self as training; closing recipe: "distress". Dimmed rays (.35, lowest),
  iron ring, no gulls. Dimmed morning (NOT night — light persists). Anchor:
  "compared with an age of fear, the longest of all ages".
- **p3c49** · 49. Magnanimity and related things. · 258w · o=mark t=morning
  rt=standard · `gs-b-wheel` · Rationale: magnanimity is centrifugal — "sudden
  satiety and sudden nausea"; feeling flung to opposites (cold/laughter/
  tears); revenge drunk to the last drop then nausea. Wheel + flung drops.
  Anchor: "a powerful inner centrifugal force, in people of sudden satiety and
  sudden nausea".
- **p3c50** · 50. The argument from growing solitary. · 96w · o=mark t=iron
  rt=quiet · `gs-b-ringfaces` · Rationale: fear of a cold look outweighs
  conscience — "What is he really afraid of? Growing solitary!"; "Thus the
  herd instinct speaks out in us" (herd bookend with p3c1). One figure ringed
  by 8 faces, iron tone, quiet. Anchor: "Even the strongest person still fears
  a cold look or a sneer".
- **p3c51** · 51. The sense of truth. · 55w · o=mark t=morning rt=quiet ·
  `gs-b-spark` · Rationale: shortest in cohort (55w): "Let's try it!" or
  silence — courage keeps its right only where experiment admits. Single
  spark, nothing more. Anchor: "I approve of any form of scepticism to which I
  can reply, 'Let's try it!'".
- **p3c52** · 52. What others know about us. · 64w · o=mark t=morning rt=quiet ·
  `gs-b-echo` · Rationale: what others know "assails us" from outside;
  "easier to deal with a bad conscience than a bad reputation". Mouths + echo
  waves, quiet. Anchor: "One day, what others know (or think they know) about
  us assails us".
- **p3c53** · 53. Where the good begins. · 111w · o=mark t=dim rt=quiet ·
  `gs-b-eye` · Rationale: "the duller the eye, the more extensive the good";
  cheerful common vs gloomy great thinkers. Dim eye (tone `dim`, .78/.65)
  closes the eye-rhyme triptych p3c11/p3c45/p3c53; reuse of `gs-b-eye` is the
  deliberate rhyme, not a clone. Anchor: "the duller the eye, the more
  extensive the good!".
- **p3c54** · 54. The consciousness of appearance. · 265w · o=landmark-panel
  t=dream rt=visionary · `gs-b-land-sleepwalker` · caption: "Go on dreaming
  lest you fall — the knower joins the dance." · Rationale: philosophical
  climax — ancient humanity fabulates within; "as the sleepwalker has to go on
  dreaming in order to avoid falling down"; appearance "not a dead mask";
  "will-o'-the-wisp and a dance of spirits"; knower as "master of ceremony".
  Italic title; leapers hand Book One onward. Anchor: "as the sleepwalker has
  to go on dreaming in order to avoid falling down".
- **p3c55** · 55. The ultimate noblemindedness. · 213w · o=mark t=morning
  rt=standard · `gs-b-altar` · Rationale: nobility = singularity — "heat in
  things that feel cold to everyone else"; scale not yet invented; "sacrifice
  on altars made for an unknown god"; courage without honours. Lone flame.
  Anchor: "a sacrifice on altars made for an unknown god".
- **p3c56** · 56. The desire for suffering. · 231w · o=mark t=closing
  rt=closing · `gs-b-monster` · Rationale: closer — bored young Europe invents
  emergencies; imagination turns unhappiness "into a monster ahead of time so
  that afterwards it can fight a monster"; ends "I have ventured to paint my
  happiness on the wall". Ember horizon hands to Book Two; NOT landmark (see
  §7). Anchor: "its imagination is already busy turning this unhappiness into
  a monster ahead of time".

### Opener/weight sanity (declared bands)

- Seeds ≤150w (17: p3c17/19/20/25/26/29/32/33/34/35/37/38/41/44/50/51/52/53):
  ALL rt=quiet marks. No plate, no rule touch. ✔
- 151–300w (21): rt=standard marks; p3c27 `gs-b-hood` is the band's sole
  prone-posture-adjacent silhouette (acceptable single exception; p3c54's
  dreamer is landmark-composed, distinct).
- 301–460w + p3c13/14/21/23/48: heavier essays/panels as mapped. p3c21-rt=essay
  (iron drop-cap discipline) and p3c48-rt=shadowed (dimmed drop-cap) are
  intentional landmark exceptions, documented.
- Landmarks 6: formal/semantic events (see §7), never length-ranked.

---

## 6. CSS class vocabulary (`gs-b-` ONLY) + part systems

Merge convention (engineer/supervisor): slot class triple
`gs-b-opener-{mark|essay-opener|landmark-panel}`
`gs-b-tone-{morning|essay|iron|stage|autumn|shadow|noon|dream|dim|ember|glare|closing}`
`gs-b-read-{quiet|standard|duet|closing|grand|essay|dramatic|luminous|shadowed|visionary}`.
Manifest `motif` + `symbol` = symbol id; `src` = `art/cohort-b.svg`;
NO `default` entry. Zero `reader-*` classes; no `!important`.
Part twin selector: `P = body[data-part-id='part-3'] X, body[data-part='III'] X`
(part-id preferred per contract; data-part=III live hook retained as backstop).
Landmarks: `body[data-chapter='p3cNN']`. All fills via `--gs-*`.

### 6a. Part systems (9 blocks)

- P1 mark slot: `#chapter-art.gs-b-opener-mark { display:flex;
  justify-content:center; margin:0 auto 2.25rem; max-width:100%; overflow:hidden }`
  read-quiet svg 72px · read-standard 104px · read-duet width 196px ·
  read-closing 128px. Centered emblem, no plate.
- P2 essay slot (CF-1 bleed): `#chapter-art.gs-b-opener-essay { margin:0 auto
  2.75rem; width:100vw; max-width:56rem; background:color-mix(in srgb,
  var(--gs-sea-deep) 46%, transparent); border-top:1px solid var(--gs-horizon);
  border-bottom:1px solid var(--gs-horizon); overflow:hidden; max-width:100% }`
  svg `{ display:block; width:100%; height:auto; aspect-ratio:720/320 }`.
  Nested `@media (min-width:56rem)` centers the 56rem plate with auto margins
  (block-level centering, NOT transforms — GR3).
- P3 landmark slot (CF-1 bleed, GR4 full-width): same as P2 with max-width
  72rem, margin-bottom 3rem, wash 40%; svg aspect 960/420 (p3c1: max-width
  76rem via L1, aspect 1200/420).
- P4 tones (CF-3 all applied to BOTH essay + landmark slots; morning = default,
  no declarations):
  `essay` — border-top gold-warm —
  `gs-b-opener-essay.gs-b-tone-essay, .gs-b-opener-landmark.gs-b-tone-essay {
  border-top:1px solid color-mix(in srgb, var(--gs-sun) 45%, var(--gs-horizon)) }`.
  `iron` — svg `{ filter:saturate(.8) contrast(1.06) }` (landmark + L2).
  `stage` — border-top 2px vermilion 65% + vermilion veil via background
  color-mix layering.
  `autumn` — night→vermilion veil; svg `{ filter:sepia(.18) }` (CF-5).
  `shadow` — night veil; svg `{ filter:brightness(.84) saturate(.82) }` (CF-5).
  `noon` — sun-core wash 16%; border-top sun 55%; svg
  `{ filter:brightness(1.06) }`.
  `dream` — night veil 60%; svg `{ filter:saturate(1.12) }` (CF-5).
  `dim` (mark modifier, p3c53) — svg `{ opacity:.78; filter:saturate(.65) }`.
  `ember` (mark modifier, p3c11/p3c38) — vermilion veil behind svg.
  `glare` (mark modifier, p3c28) — svg 128px;
  `{ filter:brightness(1.28) saturate(1.12) }`.
  `closing` (mark modifier, p3c56) — bottom sun wash; border-bottom sun 40%.
- P5 meta part: `.meta-part { font-family:var(--gs-body);
  font-variant-caps:all-small-caps; letter-spacing:.24em; color:var(--gs-sun);
  opacity:.9 }`.
- P6 meta title: `.meta-title { font-family:var(--gs-display); font-weight:600;
  font-size:clamp(2rem,5vw,3.25rem); line-height:1.08; letter-spacing:-.01em;
  color:var(--gs-foam); text-wrap:balance }`.
- P7 meta rule (horizon sun-road; keeps art.css glow):
  `.meta-rule span { width:7rem; height:2px; border-radius:0;
  background:linear-gradient(90deg, transparent, var(--gs-sun) 25%,
  var(--gs-vermilion) 75%, transparent); opacity:.9 }`.
- P8 body: `.chapter-text { font-family:var(--gs-body) }` — size/leading/
  measure inherit reader prefs; body text otherwise untouched.
- P9 drop-cap forward (family-prefix grouped — content-assigned, not
  per-chapter, not modulo):
  `body[data-art^='gs-b-panel-'] p:first-of-type::first-letter,
  body[data-art^='gs-b-land-'] p:first-of-type::first-letter {
  font-family:var(--gs-display); font-weight:600; color:var(--gs-sun) }`;
  art.css background/glow + reader size/float untouched. Numeral-led openers:
  shared `.reader-fragnum` classifier owns them (book GR6) — cohort MUST NOT
  work around.

### 6b. Landmark rules (6, CF-4 closed: essay tone wired for p3c1)

- L1 p3c1: `.meta-title { font-size:clamp(2.6rem,7vw,4.25rem) }`
  `.meta-rule span { width:11rem }` slot max-width 76rem + border-top sun 55%
  (the `essay`-tone rule from P4 MUST also apply at 76rem — CF-4).
- L2 p3c21: `.meta-title { letter-spacing:.01em }`
  `.meta-rule span { background:linear-gradient(90deg, transparent,
  var(--gs-vermilion) 30%, var(--gs-foam) 70%, transparent) }` slot 72rem.
- L3 p3c22: `.meta-title { font-style:italic }` slot 72rem +
  margin-bottom 3.25rem.
- L4 p3c36: `.meta-rule span { background:linear-gradient(90deg, transparent,
  var(--gs-night) 25%, var(--gs-vermilion) 75%, transparent) }` (CF-5) slot 72rem.
- L5 p3c45: `.reader-body { background:radial-gradient(90% 420px at 50% 0%,
  color-mix(in srgb, var(--gs-sun-core) 10%, transparent), transparent 70%) }`
  `.meta-title { color:var(--gs-sun) }` slot 72rem. THE noon-flash: alpha-.10
  wash + only gold title.
- L6 p3c54: `.meta-title { font-style:italic; letter-spacing:.005em }`
  `.meta-rule span { background:linear-gradient(90deg, transparent,
  var(--gs-night) 30%, var(--gs-sun) 70%, transparent) }` (CF-5) slot 72rem.

### 6c. Benchmark controls (NOON authorship on every control)

Per book benchmark + USER-FEEDBACK.md. All P-scoped except B6 (TOC drawer
persists; keyed on `body[data-chapter^='p3c']` = TRUE only while reading Book
One — content-assigned scope, not index-derived art). NOTE: `p3c` prefix scope
selects "Book One chapters" the way `data-part-id` selects the part; no
per-index styling derives from it.

- B1 progress = sun-road sweep: `.progress-fill { background:linear-gradient
  (90deg, var(--gs-sea) 0%, var(--gs-sun) 55%, var(--gs-vermilion) 100%);
  box-shadow:0 0 12px color-mix(in srgb, var(--gs-sun) 45%, transparent) }`.
- B2 nav = horizon tablets: `.nav-btn { border:1px solid var(--border-strong);
  border-radius:0; background:linear-gradient(180deg, transparent,
  color-mix(in srgb, var(--gs-sea-deep) 45%, transparent));
  border-top:2px solid color-mix(in srgb, var(--gs-sun) 40%, transparent) }`
  `.nav-btn:hover:not(:disabled) { border-top-color:var(--gs-sun);
  background:color-mix(in srgb, var(--gs-sea-deep) 60%, transparent);
  transform:none }`
  `.nav-label { font-family:var(--gs-body); letter-spacing:.22em;
  color:var(--gs-sun); opacity:.85 }`
  `.nav-title { font-family:var(--gs-display); font-style:italic }`
  `.nav-btn.prev { text-align:left; border-left:2px solid color-mix(in srgb,
  var(--gs-vermilion) 45%, transparent) }`
  `.nav-btn.next { border-right:2px solid color-mix(in srgb,
  var(--gs-vermilion) 45%, transparent) }`.
- B3 header wordmark: `.header-chapter { font-family:var(--gs-display);
  font-style:italic }`
  `.header-part { font-family:var(--gs-body);
  font-variant-caps:all-small-caps; letter-spacing:.2em; color:var(--gs-sun) }`
  `.reader-header.scrolled { box-shadow:0 8px 24px rgba(0,0,0,.35), 0 1px 0
  color-mix(in srgb, var(--gs-sun) 25%, transparent) }`.
- B4 settings = dipped controls: `.settings-card { border-top:2px solid
  var(--gs-sun); border-radius:0 }`
  `.settings-card h3, #settings-title { font-family:var(--gs-display);
  font-style:italic }`
  `.seg-btn.active { background:color-mix(in srgb, var(--gs-sun) 18%,
  transparent); box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--gs-sun) 45%,
  transparent) }`.
- B5 TOC Book-One chapters:
  `body[data-chapter^='p3c'] .toc-chapter[data-chapter-id^='p3c'] .toc-num {
  font-family:var(--gs-display); color:var(--gs-sun) }`
  `body[data-chapter^='p3c'] .toc-chapter[data-chapter-id^='p3c'].active {
  background:color-mix(in srgb, var(--gs-sun) 14%, transparent);
  border-left-color:var(--gs-sun) }`
  `body[data-chapter^='p3c'] .toc-chapter[data-chapter-id^='p3c'].read
  .toc-check { background:var(--gs-sun); border-color:var(--gs-sun);
  color:var(--gs-night) }` (CF-5: night, not dusk).
- B6 TOC Part-III header: `body[data-chapter^='p3c']
  .toc-part:nth-of-type(3) .toc-part-header { color:var(--gs-sun);
  letter-spacing:.24em; font-family:var(--gs-display); font-style:italic }`.
  Supervisor: retire old theme.css nth-of-type TOC glyph rules at conform (no
  double-claim). If ReaderLead rebuilds TOC markup (contract §12), re-key
  B5/B6 at conform.

### 6d. Guards

- ≤560px: essay/landmark slot side margins 2rem; marks quiet 60 / standard 88 /
  duet 160 / closing 104 / glare 104px. Nav single-column inherits. CF-1 phone
  floors: landmark/essay panels `slice` with ≥200px visible center at 390px
  (GR4/P1); svg `max-width:100%`; `overflow-x: clip` on html/body (GR3).
- Print: art backgrounds transparent, borders none; essay/landmark svg
  max-height 3.4in centered; marks 56px; nav/progress hidden by shared.
- `prefers-reduced-motion`: no rule needed (cohort authors zero motion).
- Slots stay `aria-hidden` (decorative); landmark captions are
  `<figcaption>` content via manifest `caption`.

---

## 7. Landmarks, essays, duets, light discipline

Landmarks (6, confirmed): p3c1 (programmatic opener + longest) · p3c21
('Teachers of...' pair + closing self-refutation) · p3c22 (most formally
eccentric — staged monologue) · p3c36 (densest theatre cluster, Roman masks) ·
p3c45 (most luminous image — the single noon-flash) · p3c54 (philosophical
climax resolving into dance grammar). Landmarks are formal/semantic events;
length-ranked candidacy (p3c23, 980w) explicitly refused.

- Nearest contender p3c56: NOT landmark — strong closer but single-emblem
  231w; `closing` tone + 128px mark + ember wash give closer-weight without a
  chapter rule.
- Essay panels (6): p3c3 wink · p3c7 field · p3c13 hand · p3c14 grasp ·
  p3c23 applefall · p3c48 manacle (dimmed).
- Duets (2): p3c30 plumes+mask (rotating cast + stage) · p3c31 bow+scales
  (hunting + trade; level beam).

Light discipline (narrative law of the cohort):
- FIXED climbing-morning everywhere: every panel sun sits low with an upward
  fan. Cohort never reaches zenith — zenith belongs to Book Three (§125).
- p3c45 = the ONE noon-flash: only overhead sun (`gs-b-sunhigh`), only gold
  title, brightest panel, no horizon darkness. Legible only against 55 mornings.
- p3c48 = dimmed morning: rayfan opacity .35 (file minimum), darkened bands,
  no gulls, 1 guttering spark. Light persists — NOT night.
- `sunhigh`/`sunlow` hygiene: `gs-b-sunlow` is now panels-only (PF-1);
  `gs-b-sunhigh` is `gs-b-land-epicurus`-only (grep-guaranteed: exactly 1
  `uses` entry).

## 8. Prose-verification log (56 rows)

Method: all 56 `books/gay-science/data/chapters/p3c*.json` read in full
(every paragraph; longest p3c1 1239w / p3c23 980w / p3c21 957w read
head-to-tail). Spot-checks p3c12/p3c40/p3c42/p3c46/p3c56 from lead brief
re-confirmed independently. Result: **54 CONFIRMED, 2 FIXED.**

| id | verdict | evidence (short quote / anchor) |
|---|---|---|
| p3c1 | CONFIRM | "essence of our species and herd"; "these heroes on this stage"; ebb/flood close |
| p3c2 | CONFIRM | "handling their scales… their weights are underweight" |
| p3c3 | CONFIRM | "they give a wink"; "laugh at the sparkle in his eye"; eternal injustice |
| p3c4 | CONFIRM | "rekindled the dozing passions"; "ploughshare of evil" (flame primary) |
| p3c5 | CONFIRM | "strongest words and sounds, the most eloquent gestures" — herald drumbeat |
| p3c6 | CONFIRM | "unstoppable machine" in the head; thinking while walking |
| p3c7 | CONFIRM | "immense field of work"; "sun of one fundamental moral judgement"; cyclops |
| p3c8 | CONFIRM | "subtle sculptures on the scales of reptiles"; "only with a microscope" |
| p3c9 | CONFIRM | "hidden gardens and plantations"; emerge into light (botanic primary) |
| p3c10 | CONFIRM | "late ghosts of past cultures"; nurse/defend/honor |
| p3c11 | CONFIRM | "perish with open eyes"; "dawning on the human eye" — eye-rhyme 1/3 |
| p3c12 | CONFIRM | "jubilate up to the heavens" / "grief unto death" intertwined |
| p3c13 | CONFIRM | "Benefiting and hurting others are ways of exercising one's power" |
| p3c14 | CONFIRM | "we stretch out our hands again"; landscape tires; friendship = higher thirst |
| p3c15 | CONFIRM | "we climb it and are disappointed"; greatness from below/distance |
| p3c16 | CONFIRM | "only a small footbridge separated us"; now mountains/torrents divide |
| p3c17 | CONFIRM | "places the poor little stream… in the arms of a nymph" |
| p3c18 | CONFIRM | "immense intermediate stages and such a distance"; not even Plato saw slave |
| p3c19 | CONFIRM | proud-height tree needs "bad weather and storms"; poison/strong |
| p3c20 | CONFIRM | "to entertain follies" under tyranny of prudence |
| p3c21 | CONFIRM | "Thou shalt" + "Thou shalt not" "in the same breath"; virtues dominate |
| p3c22 | CONFIRM | unknown programme; "Wasn't that the bell?"; fifth-hour tower bell; dream |
| p3c23 | CONFIRM | "apples fall… seed-bearers of the future"; "autumn of a people"; "That is me" |
| p3c24 | CONFIRM | "esteem physicians above priests"; opiates vs better/safer |
| p3c25 | CONFIRM | "he turns on his heel"; "too many old ones" (truths) |
| p3c26 | CONFIRM | "continually shedding something that wants to die"; vs Moses |
| p3c27 | CONFIRM | "throws away much that would encumber his flight"; "shrouded in his hood" |
| p3c28 | **FIX (PF-1)** | Package mark `gs-b-sunlow` honest-but-generic + misuses reserved light atom. Text's figure is the blinding best ("overly potent drink"; weak "break their limbs"). → NEW `gs-b-flare` (overexposed disc + blind-spot wedge + prone ticks). |
| p3c29 | CONFIRM | unities quarrel; "inventing reasons for these laws"; add-on-liars |
| p3c30 | CONFIRM | rotating cast; "stage properties"; comedy/theatrics frame |
| p3c31 | CONFIRM | hunting-once-common → trade-one-day-luxury; "luxury of sentiment" |
| p3c32 | **FIX (PF-2)** | Package `gs-b-twodoors` contradicts text (no thresholds; "warlike soul… delight in saying no" REFUSES the unwanted; doors = A-grammar). → NEW `gs-b-halves` (open ring + half-closed ring); RETIRE twodoors. |
| p3c33 | CONFIRM | "Because he now has a science"; suspicion-wink rhymes p3c3 (iron) |
| p3c34 | CONFIRM | "a thousand secrets… into his sunshine"; retroactive force |
| p3c35 | CONFIRM | "Heresy is the adjunct of witchcraft"; Reformation redoubling |
| p3c36 | CONFIRM | "he let his mask fall"; "qualis artifex"; smothered with pillows |
| p3c37 | CONFIRM | Newton (God) / Voltaire (utility) / Spinoza (innocence) — three errors |
| p3c38 | CONFIRM | "the sight of the burning match — not the cause itself"; powder kegs |
| p3c39 | CONFIRM | "hoc est ridiculum"; taste before opinions; physis (nutrition/digestion) |
| p3c40 | CONFIRM | military above industrial; "unknown and uninteresting persons"; vulgarity |
| p3c41 | CONFIRM | "actions as experiments and questions"; success/failure = answers |
| p3c42 | CONFIRM | "reward of rewards"; hunters/travellers/lovers; boredom = pre-voyage lull |
| p3c43 | CONFIRM | laws betray the foreign; Wahhabi two sins; Romans wine; foreign monster |
| p3c44 | CONFIRM | "the real lever of its conduct"; belief over actual motives |
| p3c45 | CONFIRM | "wide whitish sea"; "sea of existence has grown still"; afternoon of antiquity |
| p3c46 | CONFIRM | "fastened to iron necessity with eternal clamps"; shipwrecked men ashore |
| p3c47 | CONFIRM | Louis XIV court; suppression of expression → of passions; graceful shallow |
| p3c48 | CONFIRM | "age of fear, the longest of all ages"; recipe: "distress"; dimmed rays |
| p3c49 | CONFIRM | "powerful inner centrifugal force"; cold/laughter/tears; revenge→nausea |
| p3c50 | CONFIRM | "cold look or a sneer"; "Growing solitary!"; "herd instinct speaks" |
| p3c51 | CONFIRM | "Let's try it!" or silence; shortest (55w) = single spark |
| p3c52 | CONFIRM | "assails us"; "bad conscience than a bad reputation" |
| p3c53 | CONFIRM | "the duller the eye, the more extensive the good" — eye-rhyme 3/3 (dim) |
| p3c54 | CONFIRM | "sleepwalker has to go on dreaming"; "not a dead mask"; "masters of ceremony" |
| p3c55 | CONFIRM | "altars made for an unknown god"; scale not yet invented; heat in cold |
| p3c56 | CONFIRM | "turning this unhappiness into a monster ahead of time"; paint happiness |

Conformance fixes (engineering-correctness, not prose disputes): CF-1 panels
full-bleed via margin + `slice` + 200px phone floors · CF-2 zero `<use>`,
panels fully self-contained · CF-3 tones apply to both plate geometries ·
CF-4 p3c1 `essay` tone wired at 76rem · CF-5 dusk→night purge (13 sites) ·
CF-6 no `default` manifest entry · CF-7 81-symbol inventory (was narrated 76).

---

## 9. Build list + manifest rules (engineer handoff)

Author (new files, cohort-B lane):
1. `books/gay-science/art/cohort-b.svg` — 81 `<symbol>`s per §4 (15 + 52 +
   14), self-contained, NO `<use>`, flat fills only, zero text in viewBoxes.
2. `books/gay-science/design/cohort-b.json` — 56 entries keyed by chapter id,
   each: `{ id, part:"part-3", order, title (TOC-verbatim), word_count,
   opener:{treatment,symbol,composition}, palette_role, motif_asset, symbol,
   reading_treatment, rationale, caption? }`; annotate part/order/title per
   contract (cheap remap); motif+symbol = §5 symbol; class triple per §6;
   src `art/cohort-b.svg`; NO default. Captions ONLY the 12 plates (§5).
3. `books/gay-science/design/cohort-b.css` — §6 systems (P1–P9, L1–L6, B1–B6,
   guards), `gs-b-` vocabulary only, twin part selectors, no `reader-*`, no
   `!important`.

Supervisor merges (sequential, integration lane): cohort JSON →
`design/chapters.json` runtime form `{src, symbol, class, motif, caption}`;
cohort CSS → theme (book CSS unlayered, wins over `@layer shared`); retire
contradicted legacy rules at conform (package GN5 list: modulo end-marks,
meta sun glyph, TOC glyph rules, progress gradient, TOC letterspacing ladder;
p3c chapters resolve end-mark to art.css fleuron — cohort declines A.0
end-seal by design); add Fraunces 600+italic + Source Serif 4 book-relative
fonts if absent (fallbacks Cormorant/Georgia hold meanwhile). Verify in
`_site` (art + CSS + JSON ship per contract §11) at 1440×1000 / 820×1180 /
390×844 + all 8 themes.

Out of scope: theme.css/index.html/prose edits (never from this lane);
cover/TOC-shell/reader-shared changes (request via lead); other cohorts'
files.

---

## 10. Acceptance checklist

- [ ] 81 symbols authored, ids exact, self-contained, zero `<use>`, zero
      gradients/text in SVG; `gs-b-twodoors` absent; `gs-b-sunlow` in panels
      only; `gs-b-sunhigh` in `gs-b-land-epicurus` only; zero `#2A1540`.
- [ ] 56 manifest entries, TOC-verbatim titles + word counts, 12 plate
      captions, no default entry.
- [ ] Plates full-bleed (GR4), zero phone overflow (GR3), 200px+ opener at
      390px, full-width tableaux (never half-empty bands beside titles).
- [ ] All 56 chapters verified (§8); fixes PF-1/PF-2 text-quoted; light
      discipline holds (55 mornings, 1 noon-flash, 1 dimmed).
- [ ] Contrast spot-check all 8 themes incl. noon wash (L5); reduced-motion
      clean (zero cohort motion); keyboard/TOC/settings behavior unchanged.
