# Solar Gospel Shell Direction — seal/cover studies + chosen book-shell spec

Owner: `SupZarathustra-3.ZaraShellDesigner` (shell design agent). Status: Phase-B shell direction.
Scope: book-level shell ONLY — `art/seals.svg` + `art/cover.svg` composition spec,
opener rhythm, song/nocturne chassis, TOC markers, progress, A.0 closes, per-part
migration, responsive notes. Cohort sprites (`art/cohort-p1..p4.svg`) and cohort
CSS/JSON are FROZEN and owned by others — studied, never touched.
This file is this agent's ONLY write. No prose invented: every quotation below was
read in chapter JSON or in the supervisor's canonical `design/chapters.json`.

Read in full before writing: `design/directions.md` (all 490 lines),
`design/ART-DIRECTION.md`, `.omp/design/critiques/thus-spoke-zarathustra.md`
(Z1–Z7), `.omp/design/READER-CONTRACT.md` v1.1 (§1–§12 + A.0/A.2),
`index.html`, `theme.css` (rejected alpine — nothing survives),
`meta.json`, `data/toc.json` (all 606 lines: 4 parts, 23+22+16+20 = 81 chapters),
`shared/reader.js` contract surface (slots, manifest fill, `reader:chapter`),
`shared/reader.css` + `shared/art.css` ornament layer, canonical
`design/chapters.json` (81/81 entries), `design/COVERAGE.md`, P4 design doc,
and the chapter texts p1c1, p1c23, p2c9, p2c10, p3c2, p3c4, p3c16, p4c10, p4c19,
p4c20 in full plus song openers p2c11/p3c6/p3c9/p3c14/p3c15/p4c14/p4c16.
External references: Achaemenid winged-symbol scholarship (achaemenica.org),
Met collection records for Egyptian uraei / winged sun discs, Trajan inscription
scholarship (all descriptive, honestly flagged — no full-resolution inspection).

Canonical manifest facts this spec is built on (read, not assumed):
- Cover entry: `{src: art/cover.svg, symbol: cover-roundel-field, class: plate}`.
- `art/seals.svg` is referenced by exactly 17 P1 sermon-tablet entries, ALL as
  `{symbol: seal-dawn, class: seal, motif: dawn-ring}` (p1c3–c8, c10–c11,
  c13–c19, c21–c22). `seal-night` / `seal-zenith` serve NO chapter entry —
  they are TOC/progress/phase instruments (see §7–§8). This asymmetry is
  deliberate: Part II opens on per-chapter eclipse phases (`phase-p2cN`) and
  Part III on crowns/emblems/tablets, so the Night- and Zenith-Rings govern
  navigation chrome, not openers.
- Slot classes in play: `seal` 20 (17× shell seal-dawn + tablets-monumental +
  2× p4-sign-ring), `scene` 10, `emblem` 36, `song` 11, `plate` 2, `finale` 2.
- Reader mechanics verified in `shared/reader.js`: `#chapter-art` sits ABOVE
  `#chapter-meta`; manifest `caption` renders as `<figcaption>` AFTER the
  inlined `<svg>` inside the slot; `motif` → `body[data-art]`; `class` lands
  on the slot. `reader:chapter` fires per chapter with
  `{book, chapterId, partId, partRoman, …}`.

---

## 1. Three seal/cover studies — comparison + choice (rendered, not imagined)

Three genuinely different Roundel + four-seal + cover compositions were
prototyped as real SVG (240-space roundels, 96-space seals, cover blocks) and
viewed rendered in Chromium at 1280px (`/tmp/zara-shell-study.html`, sections
#s1/#s2/#s3; screenshots inspected in-session before writing this doc).

- **S1 · Incised Tablet-Seal.** Thick gold signet ring with an engraved tick
  band (dasharray ticks, not rays); the sun is a plain incised disc with 24
  straight baton rays (12 long r66→88 + 12 short r66→80, coordinates in §3);
  the serpent crosses the disc as ONE free vertical S-curve — the staff-head
  read literally ("a serpent was coiled about a sun", p1c23 §2). Seals vary the
  DISC STATE per solar phase (crest / eclipse / blaze / ember-into-dawn).
  Cover: centered monument — roundel, inscription stack, tagline.
- **S2 · Ouroboros Recurrence.** The serpent IS the outer ring: body encircling
  the sun, tail meeting the open mouth at the crown. Wedge (triangle) rays fill
  the annulus; the sun shrinks to a small triple-ringed heart. All four seals
  share the identical serpent-ring; only the center changes phase. Cover:
  asymmetric — roundel left-of-center, title right, tick band above.
- **S3 · Winged Disc + Uraeus Canopy.** Shir-o-Khorshid lineage: a winged
  Persian sun-disc; the serpent arches OVER it as a protective canopy with a
  raised uraeus head at the crown, tail coiling into a small recurrence ring
  below the disc. Rays only in the upper semicircle. Cover: full-width winged
  frieze band above a centered inscription.

Rendered verdict (judged from pixels):

| Axis | S1 Tablet-Seal | S2 Ouroboros | S3 Winged Disc |
|---|---|---|---|
| Z3 Roundel presence at 320px | Magnificent: tick band reads as struck metal; baton rays crisp; serpent S has credible head/tongue/scale ticks | Strong ring, but the sun-heart is small and the wedge annulus buzzes at 320px; serpent reads as border, not beast | Weakest: wings tangle with rays; uraeus head tiny; canopy arc fights the disc; reads diagrammatic, not liturgical |
| Z1 firewall | Safest: every gold element is a stroked path or flat fill; zero radial energy | Wedge annulus risks a glow read at small sizes (dense gold triangles) | Wing hatching + rays crowd; temptation to blur will be strong — reject |
| Seal differentiation at 72px | Four seals instantly distinct (crest / black eclipse / starburst / ember ring) | Seals blur together — identical serpent rings, centers too small to tell apart in peripheral vision | Disc-state seals okay, but wing lines muddy at 72px |
| Staff-head fidelity (p1c23 §2) | Literal: serpent coiled ABOUT a sun | Interpretive: serpent as ring, sun caged inside (recurrence over staff) | Decorative: serpent guards the sun rather than coiling about it |
| Cohort fit | Matches frozen grammar: flat strokes, currentColor rings, fixed-token gold/serpent/ember, tick bands echo P2 phase rings + P4 sign-ring | Ouroboros ring has no precedent in cohort art; would sit beside P4's `p4-sign-ring` as a rival system | Wings appear nowhere in 108 frozen symbols; would orphan the shell |
| Cover | Centered monument suits the inscription stack and the injected `#cover-art`-above-content DOM | Asymmetric cover needs grid restructuring of `#cover` (contract-fragile) | Frieze band is genuinely good — inherited into S1 as `cover-ray-frieze` |

**CHOSEN: S1 · Incised Tablet-Seal**, with S3's frieze-band idea absorbed as
the horizontal `cover-ray-frieze` and S2's tail-meets-mouth motif absorbed as
the `mini-lion-doves`→recurrence detail (no — honestly: S2 contributes nothing;
its lesson is negative: the serpent must stay a BEAST, never a border).
Choice rationale: S1 is the only study that (a) renders the book's own
self-drawn emblem literally, (b) keeps the serpent anatomically credible at
cover scale (head, eye, forked tongue, scale ticks, tapering tail — Z3),
(c) differentiates the four solar phases at 72px seal scale, (d) extends the
frozen cohort engraving hand instead of rivaling it, and (e) survives the Z1
firewall with zero glow-adjacent shapes. It also composes inside the real
contract DOM (`#cover-art` above `.cover-content`, `#chapter-art` above
`#chapter-meta`) with no chrome restructuring.

---

## 2. Shell token + type system

Tokens (dark Ink; art tokens constant, shared tokens remapped per theme §12):

```css
--z-night:#0A0E21; --z-lapis:#1B2350; --z-solar:#E8A93D; --z-ember:#C8502E;
--z-serpent:#7A8B5A; --z-bone:#F2E7CF;
/* derivations via color-mix() only: --z-deep #070B1C (Part II ground),
   --z-umber #171126 (Part IV ember ground), --z-star #C9D4E8 (Night silver),
   --z-blaze #F5C96B (white-gold highlight). No new hues. */
```

Contrast ADCs computed for this spec (WCAG relative luminance):
bone-on-lapis 12.19:1 · bone-on-night 15.58:1 · bone-on-umber 14.95:1 ·
silver-on-deepnight 13.10:1 · whitegold-on-night 12.25:1 · gold-on-night 9.27:1
(graphic + large-text only) · ember-on-night 4.23:1 (graphic only, never text).
Paper themes: bronze #78350f on sepia 7.71:1 (large/bold text + line-work),
body ink #2c2416 on sepia 13.01:1.

Type (Z2 liturgical argument — see risk register §14):
- **Cinzel** (CSS2 link, `Cinzel:wght@400..700`, `display=swap`; fallback
  `'Trajan Pro',Georgia,serif`): cover monument, chapter titles (book
  title-case, NEVER forced uppercase, `text-wrap:balance`, ≤3 lines),
  part lines, TOC part headers, seal-adjacent inscriptions, festival responses.
  Liturgical = words performing ritual (long balanced inscriptions, refrains,
  blessings) — never Twilight's short verdicts/strike emblems/bronze tablets.
- **Spectral** (CSS2 link, ital+wght 400/500, `display=swap`; fallback
  `Georgia,serif`): ALL prose; Spectral italic for pull-lines, songs, blessings.
  Pull-lines stay Spectral italic bone (cohort-P2-shipped convention) — the
  Cinzel liturgy frames them (part line above, title below), it does not set them.
- **DM Sans** (shared chrome): buttons, settings, TOC meta, progress text — unchanged.
- Scale: cover monument `clamp(3rem,9vw,6rem)`; chapter title
  `clamp(2rem,5vw,3.25rem)`; part line `0.85rem/0.3em` Cinzel; pull-line
  `1.05–1.15rem/1.6` Spectral italic; body `1.3rem/1.85`; songs `1.15rem/2.0`.
  Measures: prose 36–40rem; songs 26–30rem centered; titles free.

Font loading: plain CSS2 `<link>` (progressive enhancement) + REQUIRED system
fallbacks. Twilight still ships the Cormorant template, so there is NO newer
merged-book font pattern to follow — plain link is the compliant path
(validator-confirmed). Self-hosted `design/fonts/*.woff2` + `@font-face`
remains the §11-durable upgrade; engineer attempts it iff WOFF2 is obtainable
in-session, else the CSS2 link + fallbacks ship.

---

## 3. `art/seals.svg` — the 12 symbols (exact composition spec)

File: one sprite root `<svg xmlns …>` containing 12 `<symbol>` children, no
`<defs>`, no external references, no `linearGradient`/`radialGradient`/
`filter`/`fe*` elements anywhere. Every symbol carries `<title>` (short name).
Rings that must re-tint per context use `currentColor`; solar/serpent/ember
accents use fixed `var(--z-*,#fallback)` tokens so paper-theme remaps (§12)
propagate into inlined slot art. All coordinates below are literal engineer
input (ray endpoints precomputed; serpent paths drawn, not generated).

Shared seal chassis (96-space, all four part seals): outer ring
`circle r44 sw2.4` + inner hairline `r39 sw0.9 op0.65`, both `currentColor`
(bone in opener/TOC context). This matches the frozen P1 `dawn-ring` and P4
`p4-sign-ring` chassis so shell and cohort seals sit as one family.

1. **`seal-dawn`** `viewBox 0 0 96 96` — Dawn-Ring crest. Horizon hairline
   `M14 62h68` (currentColor, sw1.6); cresting sun `M28 62a20 20 0 0 1 40 0`
   FILLED flat gold; five baton rays above
   (`M48 38V28 M34 42l-6-8 M62 42l6-8 M26 50l-9-3 M70 50l9-3`, gold, sw2.2,
   round caps); bone pupil dot `r2.4` at (48,62). Serves 17 P1 openers +
   TOC Part I marker + progress phase-dot 1.
2. **`seal-night`** `viewBox 0 0 96 96` — Night-Ring eclipse. Black disc `r27`
   filled `#010204`, stroked star-silver sw2.2; outer silver ring r36 sw1.4;
   tick band r32 `sw5 dasharray 1.6 6.76 op0.8` (dash pitch = 2π·32/24);
   one 4-point silver sparkle upper-right
   (`M66 26l1.8 3.6 3.6 1.8-3.6 1.8-1.8 3.6-1.8-3.6-3.6-1.8 3.6-1.8z` filled).
   TOC Part II marker + progress phase-dot 2. Serves NO chapter opener
   (Part II opens on frozen `phase-p2cN` art) — by design, not omission.
3. **`seal-zenith`** `viewBox 0 0 96 96` — Zenith-Ring blaze. Blaze band r30
   `sw9 dasharray 2.2 5.7` gold (≈24 bars); inner ring r19 sw2.4 gold;
   white-gold heart `r6` filled `#F5C96B`. TOC Part III marker + phase-dot 3.
   Serves NO chapter opener (Part III opens on crowns/emblems/tablets).
4. **`seal-sign`** `viewBox 0 0 96 96` — Sign-Ring ember-into-dawn. OUTER chassis
   rings in EMBER (the only seal whose chassis is not currentColor/bone);
   gold inner ring r26 sw2 + hairline r21; gold heart r4.5; cardinal gold ticks
   (`M48 14v6 M48 76v6 M14 48h6 M76 48h6`, sw1.8); serpent foot-arc
   `M30 60c5 7 11 9 18 9s13-2 18-9` serpent-green sw2.4 + bone eye-dot r1.4
   at (66.5,58.5). TOC Part IV marker + phase-dot 4. (Harmonizes with frozen
   P4 `p4-sign-ring`, which keeps serving the p4c13/p4c15 openers.)
5. **`roundel-sun-serpent`** `viewBox 0 0 240 240` — THE ROUNDEL (Z3: most
   important SVG in the book). Lapis field disc r112 stroked gold sw3 +
   hairline r104; engraved tick band r94 `sw12 dasharray 2.5 9.8 op0.55`
   (≈48 ticks; dash period 12.3 against 2π·94 ≈ 590.6 circumference);
   24 baton rays from r66 — 12 long (→r88, sw2.2) at 0°..330° step 30°, endpoints:
   `M186 120L208 120 M177.2 153L196.2 164 M153 177.2L164 196.2 M120 186L120 208
   M87 177.2L76 196.2 M62.8 153L43.8 164 M54 120L32 120 M62.8 87L43.8 76
   M87 62.8L76 43.8 M120 54L120 32 M153 62.8L164 43.8 M177.2 87L196.2 76`;
   12 short (→r80, sw1.4, op0.8) at 15°..345° step 30°:
   `M183.8 137.1L197.3 140.7 M166.7 166.7L176.6 176.6 M137.1 183.8L140.7 197.3
   M102.9 183.8L99.3 197.3 M73.3 166.7L63.4 176.6 M56.2 137.1L42.7 140.7
   M56.2 102.9L42.7 99.3 M73.3 73.3L63.4 63.4 M102.9 56.2L99.3 42.7
   M137.1 56.2L140.7 42.7 M166.7 73.3L176.6 63.4 M183.8 102.9L197.3 99.3`;
   incised sun rings r62 (sw2.4) + r54 (hairline) + gold heart r7.
   THE SERPENT (credible anatomy, engineered): body path
   `M78 196 C104 184 88 162 108 146 C128 130 118 108 138 94
   C152 84 158 70 154 52`, drawn as night keyline sw11 then serpent body
   sw6.5, round cap; dorsal scale ticks (night, sw2.6, 8-long, angled) at
   (86,188) (95,176) (99,163) (107,150) (117,137) (123,123) (129,109)
   (137,97) (147,87) (153,73) (154,59); head = rotated ellipse at (166,42)
   (rx9.5 ry6, rotate −28°, serpent fill, night stroke sw2); bone eye r1.8 at
   (168.5,39.5); forked ember tongue `M174 35L186 29 M174 35L187 36` (sw1.6);
   tail whisper-curve `M60 208c10-4 20-4 30 0 10 4 20 4 30 0` (serpent, sw1.4,
   op0.8). Used at cover scale only (via `cover-roundel-field`, §4).
6. **`mini-dawn`** `viewBox 0 0 32 32` — 24px A.0 close for Part I (+ gold-led
   P4 closes p4c11–c19, §10): ring r14.5 (currentColor, sw1.4); horizon
   `M5 20a11 11 0 0 0 22 0` (currentColor hairline); crest filled gold
   `M8.5 20a7.5 7.5 0 0 1 15 0`; five gold rays
   (`M16 9V6.4 M21 10.5l1.8-2.2 M11 10.5l-1.8-2.2 M24.5 15l2.6-.7
   M7.5 15l-2.6-.7`, sw1.3). (Supersedes P1's draft `cresting-sun-mini`
   as the canonical mini; identical geometry, shell-owned.)
7. **`mini-night`** `viewBox 0 0 32 32` — P2 reserve close: silver ring r13.5
   sw1.6; black disc r9 filled `#010204` stroked silver sw1.4; one silver
   4-point sparkle at (22,9) (`M22 6.5v5 M19.5 9h5`, sw1.3 + center dot r1).
8. **`mini-zenith`** `viewBox 0 0 32 32` — P3 reserve close: gold ring r13.5
   sw1.6; 8-ray starburst (r4.5→r12, sw1.5):
   `M16 11.5L16 4 M19.2 12.8L24.5 7.5 M20.5 16L28 16 M19.2 19.2L24.5 24.5
   M16 20.5L16 28 M12.8 19.2L7.5 24.5 M11.5 16L4 16 M12.8 12.8L7.5 7.5`;
   white-gold heart r2.6 filled.
9. **`mini-ember`** `viewBox 0 0 32 32` — P4 ember close (p4c1–c10, §10):
   ember ring r13.5 sw2; gold inner ring r9 sw1.2; gold heart r3 filled;
   cardinal ember ticks `M16 1.5v3 M16 27.5v3 M1.5 16h3 M27.5 16h3` (sw1.4).
10. **`mini-lion-doves`** `viewBox 0 0 32 32` — p4c20 book-seal close ONLY:
    gold ring r14 sw1.8; mane-roundel (gold stroke sw1.4, scalloped path —
    engineer draws 8-lobe roundel centered (16,19) r6 with center dot r1.6);
    two bone dove-chevron pairs upper field
    (`M9 8.5c1.6-1.6 3.6-1.8 5-.6 1.4-1.2 3.4-1 5 .6…`, sw1.1 — the two-bird
    mark quoting frozen `p4-lion-doves` doves at 32-space).
11. **`sun-rule-wide`** `viewBox 0 0 320 16` — opener sun-rule, the book's
    default rule (80 of 81 openers; p4c18 the sole exception, §5):
    hairlines `M8 8h118 M194 8h118` (currentColor, sw1.4); center double ring
    r5.5 (sw1.6) + gold heart r2 filled; four gold cardinal ticks
    (`M160 1v1.6 M160 13.4V15 M153 8h-1.6 M168.6 8H167`, sw1.2); engraved
    end-dots r1.5 filled currentColor at x=10/310.
12. **`festival-rule`** `viewBox 0 0 320 24` — SOLE sanctioned sun-rule
    exception, p4c18 Ass Festival ONLY: twin hairlines
    `M8 8h112 M200 8h112 M8 16h112 M200 16h112` (currentColor, sw1.2);
    center fool's rose-wreath = 8 ember dots r2.2 (sw-unfilled circles) on an
    r5.5 ring around (160,12):
    (165.5,12) (163.9,15.9) (160,17.5) (156.1,15.9) (154.5,12) (156.1,8.1)
    (160,6.5) (163.9,8.1); gold heart r1.8 at (160,11.5); gold end-dots r1.4
    at (8,12)/(312,12).

---

## 4. `art/cover.svg` — the 2 symbols

13. **`cover-roundel-field`** `viewBox 0 0 480 480` — the cover master
    (manifest `cover.src`, class `plate`). Composition: the §3 roundel
    geometry re-centered at (240,240) at 2× scale (field disc r224, tick band
    r188, rays r132→176/160, sun rings r124/r108, serpent S scaled 1:1 from
    §3 path × 2 about center, head/tongue/ticks scaled); PLUS the outer
    ray-field ring filling the 480 square: 48 short baton ticks (r196→r216,
    alternating gold sw2 / bone sw1.2 op0.5, step 7.5°) in the corners'
    embrace, and four 4-point bone sparkles at the cardinal mid-edges
    ((240,18) (462,240) (240,462) (18,240), r6). No gradients, no blur, no
    background rect (the lapis ground comes from theme CSS so all 8 themes
    re-ground the art). Rendered ≥40vmin, centered (§12 responsive).
14. **`cover-ray-frieze`** `viewBox 0 0 1200 240` — full-bleed processional
    band, cover top (inherited from study S3). Composition: top tick-border —
    50 bar-ticks from y=18 down (x=12..1188 step 24; every 4th long h16 sw2
    gold, else h10 sw1.4 bone op0.7); center medallion at (600,150) r86
    (gold ring sw2.5 + hairline r78) with 12 baton rays r92→108 sw2.2
    (`M692 150L708 150 M679.7 196L693.5 204 M646 229.7L654 243.5 M600 242L600 258
    M554 229.7L546 243.5 M520.3 196L506.5 204 M508 150L492 150 M520.3 104L506.5 96
    M554 70.3L546 56.5 M600 58L600 42 M646 70.3L654 56.5 M679.7 104L693.5 96`)
    and gold heart r8; medallion center holds a miniature dawn-crest
    (`M572 150a28 28 0 0 1 56 0` filled gold + horizon `M560 150h80` bone);
    two side medallions at (200,170)/(1000,170) r44 (gold ring sw2): west
    holds the eclipse (black disc r26, silver ring), east holds the ember disc
    (ember fill r26, gold ring) — the solar day in procession, dawn between
    night and ember; side rays r50→60 step 45° (8 each, coordinates: west
    `M250 170L260 170 M235.4 205.4L242.4 212.4 M200 220L200 230
    M164.6 205.4L157.6 212.4 M150 170L140 170 M164.6 134.6L157.6 127.6
    M200 120L200 110 M235.4 134.6L242.4 127.6`, east mirrored about x=1000);
    bottom hairline `M0 226h1200` gold sw1 op0.5 + end-dots r2 at x=8/1192.
    Inlined by zara.js into the cover frieze band on load (cover view fires
    no `reader:chapter`; see §11).

---

## 5. Opener vertical rhythm (all six slot classes)

DOM reality (verified in reader.js): `#chapter-art` (svg + figcaption) sits
ABOVE `#chapter-meta` (part line, title, number, `.meta-rule`). Book JS may
not move nodes outside the slots and must not duplicate captions — so the
binding rhythm keeps art + its caption as ONE figure ABOVE the inscription
stack (Blake lineage: emblem fused with text). This deviates from
directions.md rule 3's listed order (seal→part→title→pull→rule) in exactly one
honest way: **the pull-line captions the art, directly beneath it**, and the
inscription stack (part line → title → number → sun-rule) follows. Content
identical; order art-led, which is what the DOM enforces.

```
seal/scene/emblem/song/plate/finale art (slot, class-sized per table)
pull-line — manifest figcaption, Spectral italic, bone, balanced  ↓ 1.0rem
part line — Cinzel 0.85rem, 0.3em, bone-silver                    ↓ 0.9rem
title — Cinzel clamp(2rem,5vw,3.25rem), balance, ≤3 lines          ↓ 0.8rem
number label — Spectral italic 1rem, muted                        ↓ 1.4rem
sun-rule — restyled .meta-rule (twin hairlines + center sun-dot)  ↓ 2.5rem
chapter-text (calm body; cohorts own per-chapter treatments)
```

Slot sizing chassis (from the manifest's actual aspect census; svg height auto
unless noted): `seal` → height `clamp(56px,8vw,76px)`, width auto (fits BOTH
96-space shell seals AND frozen `tablets-monumental` 220×190 + `p4-sign-ring`
96² without distortion); `emblem` → width `min(180px,62vw)` default, cohorts
keep per-chapter overrides (P2 ships its own); `scene` → width
`min(100%,56rem)`, `max-height:48vh`; `song` → width `min(30rem,100%)`;
`plate` → width `min(44rem,100%)`; `finale` → `max-height:40vh`, width auto,
max-width 100% (fits tall `staff-sun-serpent` 120×160 AND wide `p4-lion-doves`
480×240). Figcaption default (shell-owned; P2's identical part-scoped rule
keeps winning Part II): Spectral italic 1.05rem/1.6, bone, centered, balanced,
max-width 34rem, margin `1rem auto 0`.

Sun-rule mechanism: NO new DOM. The shared `.meta-rule` (twin hairlines +
center span) is restyled via `body[data-book]`-qualified hooks into the
sun-rule: hairlines lengthened to the §3 geometry proportions, center span
reset from rotated diamond to a ringed sun-dot (border circle + gold heart via
background — flat, never gradient). p4c18 ONLY gets the festival double-rule
treatment (`.meta-rule` twin borders + rose center) keyed by
`body[data-chapter="p4c18"]`. `.chapter-meta::before` (free hook) stays EMPTY
(`content:none` backstop) — the manifest path is live, and any fallback seal
there would double-render against the slot. `.chapter-meta::after` is
shared-owned: theme sets `content:none` under book scope (the shared ❦ would
otherwise print a glyph under all 81 openers against binding rule 12;
rationale recorded, art-director to confirm at prototype review).

Song openers center the whole inscription stack (`body[data-form="song"]`
flag, §11): part line + title + number centered, sun-rule centered, lyric
measure 26–30rem. Sermon/vision openers keep the shared calm centered meta —
wait, honestly: shared `.chapter-meta` is ALREADY centered; the "sermons left
tablet" grammar lives in the PROSE (left-aligned 36–40rem), not the meta.
Spec records this: meta always centered (shared structure kept); form
variation rides the art class + prose measure + drop caps, never meta alignment.

---

## 6. Song + nocturne reading treatments (shell chassis; cohorts own stanzas)

Song census (verified in manifest + prose): 11 `song`-class chapters —
p2c9 Night Song, p2c10 Dance Song, p2c11 Funeral Song, p3c4 Before Sunrise,
p3c6 Mount of Olives, p3c9 Home-Coming, p3c14 Great Longing, p3c15 Second
Dance Song, p3c16 Seven Seals, p4c14 Melancholy, p4c16 Desert — PLUS p4c19
Intoxicated Song (`scene` + roundelay) and the p4c5 lament exception
(supervisor-ruled left-measure). Shell provides the shared chassis; cohort CSS
already ships per-song stanzas (P2 tri-voice/whisper, P3 lyric + Z5 rounds,
P4 roundelay/verse) and the shell MUST NOT re-declare them.

Shell song chassis (keyed by zara.js `body[data-form="song"]`, §11):
centered Spectral italic 1.15rem/2.0, 26–30rem, NO drop cap (rule 7), song
closers ("Thus spoke/sang Zarathustra.") settle to 0.95rem roman silver,
refrains bone-italic largesse (1.3rem/500) with gold GRAPHIC-only. Crown
differentiation (frozen art, no two songs alike): p2c9 fountain-crown,
p2c10 lyre-crown, p2c11 wreath-crown, p3c4/p3c14 azure-bell (shared bell,
different stanzas — p3c4 sky-hymn vs p3c14 soul-anaphora "O my soul"),
p3c6 winter-flame, p3c9 vine-arcade, p3c15 dance-measure, p3c16 seven
seal-rounds (Z5 — seven DISTINCT engravings, validators count), p4c14 harp,
p4c16 desert-diamond, p4c19 bell-twelve + gold roundelay (the book's single
large-text gold-text moment: bold ≥1.5rem white-gold on night, 12.25:1).

Nocturne treatment (Part II + midnight chapters): `body[data-part="II"]`
re-grounds to deepened night `#070B1C` (flat `--bg` override, qualified);
`#chapter-art` night plate (P2 ships its own part-scoped plate — shell does
not duplicate); silver `#C9D4E8` takes the secondary voice (moon-dawn blades,
whisper register, dusk codas); serpent-green leads swamp/knowledge passages.
Midnight bell chapters (p4c19 + p3c2's moonlit gateway): bell-crown ornaments
stay graphic; roundelay stanzas chant centered. Reduced motion: all static;
any shimmer ≤0.05Hz under `no-preference` only (there is none specified —
static art throughout).

---

## 7. TOC part-seal markers

Reader renders `.toc-part-header` as text-only ("Part I · subtitle · N
chapters") with NOattributes for CSS art hooks — so zara.js inserts the seal
markers (§11): one decorative `<span class="zara-part-seal" aria-hidden="true">`
per part header, filled with the inlined 96-space seal SVG
(seal-dawn/night/zenith/sign), 28px desktop / 24px ≤820px, preceding the
header text. Headers set in Cinzel (part-scoped hooks +
`nth-of-type` fallback — reader emits parts in TOC order, verified).
Read-state grammar: zara.js reads the book's own storage key
(`reader-thus-spoke-zarathustra`.read[]) on `reader:chapter` + TOC open and
sets `data-seal-state="unread|reading|read"` per `.toc-part` from that part's
read fraction: unread = seal at 40% opacity (line-work only, gold passes
through as graphic); reading = full line-work; read = full + gold heart lit
(CSS `color` shift on the marker — currentColor rings follow). Song rows
(11 IDs, §6) get a 14px fountain-tick prepended marker; active row keeps the
shared left-border AND gains the solar underline (`.toc-name` border-bottom
1px gold). Filter (`#toc-search`) and focus/Escape behavior untouched.

---

## 8. Progress horizon + sun-dot

The shared `.progress-track` (absolute bottom of header) + `.progress-fill`
(width-driven by reader.js scroll %) become the horizon: track = flat 2px
hairline in border tone (full-bleed, no radius); fill = FLAT gold (the
rejected theme's copper→gold gradient is removed — flat `#E8A93D`, never a
gradient); the shared diamond bead (`.progress-fill::after`) is restyled via
book hooks into the traveling sun-dot: 10px gold disc with a 2px bone ring,
riding the fill tip. Part-boundary phase-dots: zara.js inserts three 6px
markers into `.progress-track` at the TRUE word-fraction boundaries computed
from `data/toc.json` (total 91,465 words): Part II at 23.08%, Part III at
45.43%, Part IV at 71.39% — styled crest/eclipse/blaze/ember per the phase
behind them (dots sit above the fill via z-index; fill passes beneath).
Reduced motion: dots static; fill width still updates (state, not animation).

---

## 9. Chapter-end mini-seals (A.0 path) + the fragment finding

Binding mechanism (contract A.0 + Z7): `body[data-chapter]`-qualified
`.chapter-text > p:last-child::after` carrying authored SVG `url()` content,
≤32px, inline-block tail, `margin-left:0.75em`, NO paragraph layout shift,
hidden in print. Cohort census: P1 (data-URI, live ✓), P4 (data-URI incl.
p4c20 lion-doves special, live ✓), P2/P3 (`url(../art/cohort-pN.svg#id)`
fragment URLs).

**Fragment finding (proven in-session, Chromium, must-read for supervisor):**
in CSS image context (`content:url()` / `background` / `<img>`), an SVG
fragment URL `file.svg#symbol-id` does NOT select the symbol — the whole SVG
document canvas renders (proved with red-symbol/blue-symbol + lime-canvas
probes: both pseudo-elements painted the full canvas, fragment ignored).
Consequence: P2's `close-eclipse-ring/dawn` + crown/relief fragment URLs and
P3's `close-p3cN`/`p3-relief`/`seal-round-N` fragment URLs cannot render their
intended cells until repaired to data-URI form. Repair is owned by the
cohort/supervisor track (P3's CSS already comments the data-URI fallback);
the shell's duty is to NOT repeat the pattern: **all FIVE shell minis ship as
data-URIs** (geometry §3.6–3.10, hand-encodable simple paths), and zara.js
exposes the CLOSE_MINI table (§11) so any future JS-rendered close uses the
same canonical art. zara.js MUST NOT append close nodes (all 81 chapters
already carry cohort A.0 closes; appending would double-render).

Close assignment (shell recommendation; P2/P3/P4-final mapping needs
supervisor ruling where it touches cohort files):
Part I → `mini-dawn` · Part II → `mini-night` (reserve; P2's eclipse closes
hold until supervisor repair) · Part III → `mini-zenith` (reserve; same) ·
p4c1–p4c10 → `mini-ember` (pivot HOLDS ember — stillness, not triumph) ·
p4c11–p4c19 → `mini-dawn` rekindled (morning gold returns; Z6) ·
p4c20 → `mini-lion-doves` ONLY. Note: cohort-p4.css currently closes ALL of
Part IV with the ember ring — the p4c11+ gold migration in closes is a
supervisor edit, flagged in §15.

---

## 10. Per-part accent migration (Z6 exact)

| Part | Phase / ground | Seal | Accent lead | Song treatment | Close |
|---|---|---|---|---|---|
| I Dawn (p1c1–23) | cresting sun, rays east-weighted; lapis ground | Dawn-Ring | solar gold | — (no songs in I) | mini-dawn |
| II Night (p2c1–22) | eclipsed disc, star points; deepened-night `#070B1C` ground | Night-Ring (chrome only) | serpent + star-silver | fountain/lyre/wreath crowns, centered 28rem, tri-voice p2c10, whisper p2c22 | mini-night (reserve) |
| III Noon (p3c1–16) | full blaze; lapis + blaze medallion | Zenith-Ring (chrome only) | white-gold blaze `#F5C96B` | azure-bell / winter-flame / vine / dance crowns; seven seal-rounds p3c16 | mini-zenith (reserve) |
| IV Ember (p4c1–c9) | ember disc; umber-lapis `#171126` ground | Sign-Ring (ember chassis) | ember leads, gold ONLY graphic (rod-lines, ring hearts) | lament left-measure (p4c5 exception) | mini-ember |
| IV Pivot (p4c10) | THE STILL POINT: sun stands over-head; "golden round ring" present but un-gilded | scene (noontide) | quietest opener in the book — hold the temptation to gild it | sleep-song left, unadorned | mini-ember (held) |
| IV Morning (p4c11–20) | ember rekindling to gold; ground migrates umber→lapis by c20 | Sign-Ring (gold reads forward) | gold returns: feast, harp, desert, festival double-rule, bell, lion-and-doves | harp / desert / bell-crown + gold roundelay (p4c19) | mini-dawn → mini-lion-doves (c20) |

zara.js sets `body[data-phase]` for Part IV (`ember|pivot|gold`) and
`body[data-form]` for all 81 (sermon/song/vision/parable/parade/dialogue/
assembly/feast/festival/threshold/finale — compact map in §11) so theme.css
keys grounds/accents WITHOUT chapter-id selector sprawl. p4c10's quiet is
structural: smallest scene cap of any Part IV scene, no drop-cap shout (P4
ships a restrained cap), standard sun-rule, ember held — the pivot is felt as
stillness between parade noise and festival blaze.

---

## 11. zara.js logic spec (single owned script, `reader:chapter` only)

One `<script src="zara.js">` in book-owned `index.html` (deferred by
placement after reader.js). No polling, no `setInterval`, no reader.js
patching, no `reader-*` class minting, NO caption work (reader owns
figcaption). Duties:

1. **Opener flags** (on `reader:chapter`): set `body[data-form]` from the
   §81 FORM table (songs: 11 IDs §6 → `song`; scenes: p1c1,p2c1,p2c19,p2c22,
   p3c1,p3c2,p3c13,p4c2,p4c10,p4c19 → `vision`; finales: p1c23,p4c20 →
   `finale`; p4c18 → `festival`; p4c11 → `assembly`; p4c12 → `feast`;
   p1c19,p2c20,p3c13,p4c15 → `dialogue`; P4 encounters p4c3–c9 →
   `parade`; parables p1c2,p1c9,p1c20,p2c2,p2c18,p3c3,p3c7,p4c1 →
   `parable`; all else → `sermon`) and `body[data-phase]` for Part IV
   (`ember` p4c1–c9, `pivot` p4c10, `gold` p4c11–c20); remove both on cover.
2. **TOC seal markers** (on DOMContentLoaded + TOC open): fetch
   `art/seals.svg` ONCE (cache), clone each part seal's children into
   prepended `.zara-part-seal` spans in the four `.toc-part-header`s;
   prepend 14px fountain-ticks to the 11 song rows; set `data-seal-state`
   per part from the book storage key's `read[]` (recomputed on
   `reader:chapter`). All markers `aria-hidden="true"`.
3. **Progress phase-dots** (once): insert three 6px spans at
   left:23.08%/45.43%/71.39% into `.progress-track` (crest/eclipse/blaze
   styling); the traveling sun-dot itself is pure CSS (§8).
4. **Chapter-end**: INTENTIONALLY no-render — exposes the CLOSE_MINI table
   (chapter→mini id per §9) + sets `body[data-close]` hook only. Rationale
   recorded: all 81 closes already render via cohort A.0 CSS; appending
   nodes would double-render. If the supervisor directs JS closes instead
   of CSS repair, the table makes it a one-line change (flagged §15).
5. **Cover frieze** (once, cover view): fetch `art/cover.svg`, inline
   `cover-ray-frieze` children into the engineer-provided `#cover-frieze`
   band (cover fires no `reader:chapter`, so this runs on load when
   `body[data-view="cover"]`).
6. **Aria**: for any slot carrying a manifest figcaption (real pull-line
   content), set `role="figure"` + `aria-label` on the slot (contract §3:
   reader sets `aria-hidden="false"`; the book adds role/label itself).
   Decorative inlined SVGs stay `aria-hidden="true"`.

---

## 12. theme.css + index.html integration notes (engineer brief)

- **index.html** (book-owned, engineer rewrites): Cinzel + Spectral CSS2 link
  (§2) replacing Cormorant; `<link>`s for `theme.css` THEN
  `design/cohort-p1..p4.css` in that order (cohorts win ties; cohort rules are
  also more specific); declare `#cover-art` + `#chapter-art` figures
  explicitly (contract permits; reader adopts them); add `#cover-frieze`
  band inside `.cover-bg`; restructure cover content order to
  frieze → roundel → author eyebrow → monument title → rule → quote →
  actions (book-owned markup — no shared IDs harmed); single `zara.js`
  script tag; keep ALL shared IDs/classes (`#cover #reader .reader-header
  #toc-drawer #settings-panel #loading #chapter-text .chapter-meta` +
  children, `[data-action]`) intact.
- **theme.css** (full Solar Gospel rewrite; zero lines of alpine survive):
  `--z-*` art tokens + 8-theme shared-token mapping (dark-first lapis
  grounds for dark/nocturne/verdant/oxblood/candlelight/slate; paper grounds
  sepia/light with bronze `#78350f` accent + ink `#2c2416` text — verified
  §2); paper themes ALSO remap `--z-solar/--z-ember` to bronze/deep-ember
  so `var()`-authored inlined art follows (fixed-hex cohort strokes stay
  gold-on-paper as graphic lines — acceptable, prototype-verified);
  `currentColor` seal rings follow text color automatically.
- **Shared-ornament neutralization** (REQUIRED under `body[data-book]` scope
  — every one of these would otherwise violate Z1/rule 12 on our pages):
  `.chapter-meta::after` → `content:none` (shared ❦ + glow animation);
  `.meta-number::before/::after` → `content:none` (◆ diamonds);
  `.cover-eyebrow::before/::after`, `.cover-quote::after` → `content:none`;
  `.meta-rule span` → kill `box-shadow` glow, rebuild as sun-dot (§5);
  `.chapter-text > p:first-of-type::first-letter` → kill art.css gradient
  background + halo, set Cinzel solar default (cohorts override per part);
  `.chapter-text > p:last-child::after` → `content:none` BACKSTOP (cohort
  A.0 rules win by specificity wherever they exist); `.cover-glow` /
  `.cover-grid` → `background:none` all 8 themes (shared radial/conic
  cover washes); `body::before/::after` → `content:none` (shared grain
  film + vignette — deterministic contrast; art-director may restore grain
  at prototype review); `.progress-fill` → flat gold, bead → sun-dot (§8).
- **Responsive**: 1440 — cover two-column (frieze full-bleed top; roundel
  ~40vmin left-of-center + inscription right), seals 72px, scenes to 56rem;
  820 — cover stacks centered (roundel 52vmin), seals 64px, TOC markers 24px,
  song measure holds 26–30rem; 390 — roundel 72vmin (min 240px), title
  clamp floor 2rem balanced ≤3 lines (p3c16's "The Seven Seals (or: The Song
  of Yes and Amen)" is the prototype stress case), seals 56px, song measure
  100% − 1rem padding, phase-dots 5px, emblems `min(180px,62vw)`, no
  horizontal overflow (phase-dot %s + frieze scale down with `preserveAspect
  Ratio="xMidYMid slice"` on the frieze band). Print: all seals/rules/closes/
  markers hidden, prose ink-on-paper. Reduced motion: everything static;
  declare the no-op guards (cohort precedent).
- **Z1 grep gate** (validator re-runs): `text-shadow|radial-gradient|
  conic-gradient|drop-shadow|blur\(|linearGradient|radialGradient|<filter`
  returns ZERO hits in theme.css rule bodies, zara.js, seals.svg, cover.svg
  (comments that NAME the tokens for audit purposes are the only exception,
  following the cohort-P2 audit-line precedent).

---

## 13. Mrs Dalloway swap test

Put *Mrs Dalloway* in this shell and the shell perjures itself on every
surface: the cover Roundel staff-head (a serpent coiled about a sun) narrates
a gift of disciples at a crossroads that never happens in Bloomsbury; the
four Part Seals march a dawn→night→noon→ember-into-morning solar day while
Clarissa's single day needs no liturgy of phases; the TOC seals mark
sermons, night songs, law-tables and an ass festival — London party
preparations cannot use them; the progress horizon's phase-dots at
23/45/71% commemorate a prophet's descent, not an errand for flowers; the
p4c20 lion-and-doves book-seal closes a gospel, not a party. The honest
residue: inscriptional Cinzel + seal grammar COULD suit a Roman stoic text
(Meditations) — but the sun-serpent Roundel, the solar-day seal system, the
eclipse-phase Part II, the seven seal-rounds and the lion-and-doves finale
are Zarathustra's alone. The identity is this book's gospel or it is nothing.

---

## 14. Z1/Z2 risk register (honest self-flagging)

- **Z1-R1 — Gold-on-lapis luminance.** Even flat `#E8A93D` at 9.27:1 on night
  carries luminous energy at cover scale. Mitigation: the Roundel's gold is
  <35% of the disc area (baton rays + rings on lapis field, serpent body
  serpent-green dominant); seals use bone currentColor chassis with gold
  accents; gold text large-only (rule 14). Residual risk: the cover at
  40vmin+ in a dark room may still read radiant rather than incised —
  prototype review judges this; fallback is thinning rays to sw1.8.
- **Z1-R2 — Shared-ornament leakage.** art.css ships glow (`--art-glow`),
  gradient drop-cap wash, ❦/◆ glyphs and radial cover washes INSIDE
  `@layer shared`; our unlayered neutralizations (§12) must be exhaustive
  or a halo survives somewhere (highest-risk: `.meta-rule span` box-shadow
  and per-theme `.cover-glow` backgrounds). Mitigation: neutralization
  checklist in §12 + validator Z1 re-grep on the RENDERED page (computed
  styles), not just our files.
- **Z1-R3 — Cohort fixed-hex gold.** Frozen symbols with hardcoded `#E8A93D`
  strokes cannot follow paper-theme remaps; on sepia they render as pale
  gold graphic lines (~2:1). Acceptable as non-text ornament; flagged so the
  prototype review checks sepia/light deliberately.
- **Z2-R1 — Cinzel collision with Twilight.** Both books hold inscriptional
  caps. Our separator is APPARATUS, not type: seal legends, serpent ring,
  pull-line frames, eleven distinct song crowns, eclipse phases, festival
  responses — liturgical words performing ritual across 81 chapters vs
  Twilight's short verdicts + strike emblems + bronze tablets. Residual
  risk: at thumbnail scale (TOC headers, titles) the two books rhyme. If
  prototypes read confusably close, Zarathustra leans FURTHER into
  seal/serpent/song apparatus (more crowns, never less) — never into
  bronze-tablet minimalism, which is Twilight's.
- **Z2-R2 — Pull-line voice tension.** Z2's parenthetical lists pull-lines
  among Cinzel liturgical uses; directions.md + shipped cohort CSS set
  pull-lines in Spectral italic. This spec KEEPS Spectral italic pull-lines
  (cohort consistency beats a parenthetical) with Cinzel performing the
  ritual FRAMING (part line, title, rule). Flagged for the art-director:
  if the verdict intended Cinzel pull-lines literally, that is a
  supervisor-level restyle of all 81 captions — say so at prototype review.

---

## 15. Open flags for supervisor + art-director (not in this designer's power)

1. P2/P3 fragment-URL closes + crowns + reliefs MUST be render-verified; per
   the §9 proof they need data-URI repair (cohort/supervisor track).
2. P4 close migration p4c11+ ember→gold (§9–§10) needs a supervisor edit to
   cohort-p4.css (currently ember for all of Part IV).
3. `.chapter-meta::after` neutralization vs "never override" — rationale in
   §5; needs art-director confirm at prototype review.
4. `seal-night`/`seal-zenith` serve no chapter opener (manifest-verified) —
   confirm the chrome-only role, or assign them Part II/III fallback entries.
5. zara.js chapter-end no-render decision (§11.4) vs the Contract's "adds
   chapter-end seals" phrasing — supervisor ruling requested.
6. Cinzel pull-lines? (Z2-R2 above) — art-director ruling at prototype review.
7. Self-hosted WOFF2 (§2) — engineer attempts iff obtainable; else CSS2 link.
8. `mini-night`/`mini-zenith` are reserves until flag 1 resolves; `mini-dawn`
   doubles as the rekindled-gold P4 close (no sixth mini minted — hue
   discipline over novelty).

## 16. References studied (this shell)

1. Henry van de Velde, deluxe *Zarathustra*, Insel 1908 (NGA 163764; Yale
   1997.56.3; Fonts In Use) — authored line + monumental title; ornament
   linear-architectural, never atmospheric. (Adopted from identity; confirmed.)
2. William Blake, illuminated prophetic books (V&A; YCBA; Tate) — emblems
   fused with the text block; songs as lyric stanzas honoring refrains.
3. Shir-o-Khorshid Lion-and-Sun emblem (BMITP; WorldHistory.org) — historic
   root of the solar-lion grammar; the finale's oldest emblem.
4. Achaemenid winged symbol, Behistun/Persepolis (achaemenica.org scholarship)
   — ring/disc + outspread wings above the king; informed study S3 (rejected)
   and the frieze-band inheritance.
5. Egyptian uraeus + sun-disc iconography (Met 546039/546127/552850 records;
   ouroboros scholarship) — serpent-and-disc anatomy; informed study S2
   (rejected: serpent-as-border) and the S1 serpent's credible head/tongue.
6. Trajan Column inscriptional capitals (CIL VI.960 scholarship; St Andrews
   project) — Roman monumental inscription grammar behind the Cinzel
   liturgical stack; rubricator-red accents behind ember's ritual role.
7. C. D. Friedrich, *Wanderer* / *Morning in the Riesengebirge* (Met; WGA) —
   solitary figure before vast light; cover Rückenfigur grammar (kept to the
   Roundel-as-sun, never landscape wallpaper).
8. Frozen cohort art, all 108 symbols + 4 cohort CSS files (read as grammar
   ground, never edited) — the shell extends this hand: currentColor rings,
   flat token fills, tick bands, data-URI closes, qualified selectors.
