# The Gay Science — ART-DIRECTION.md (NOON · Direction A, APPROVED)

Owner: SupGayScience-2.GsIdentityDesigner. Status: **APPROVED, binding on
all gay-science cohorts.** ArtDirector verdict: DIRECTION A APPROVED with
binding conditions G1–G6 (`.omp/design/critiques/gay-science.md`, received
2026-10-15 verbatim by IRC + file). Shared principles P1–P10
(`.omp/design/ART-DIRECTION.md`) apply. READER-CONTRACT v1.0 + v1.1 addendum
apply (slots, manifest+symbol, `reader:chapter`, `@layer shared`,
book-relative assets, never edit prose).
Generator note: this file's existence exempts the book from regeneration.

## 1. The idea

*The Gay Science* is Nietzsche's sun-worship liturgy: 448 fragments that
open with dance rhymes at sunrise, kill God at bright morning (§125), step
before the rising sun with Zarathustra (§342), and close with outlaw songs
at sunset. **NOON renders the book as one long day.** The sun's altitude is
the book's progress: glow-before-dawn (Preface) → sunrise (Prelude) →
climbing morning (Books 1–2) → zenith glare with the madman's lantern lit
*at noon* (Book 3) → golden hour with ships putting out (Book 4,
St Januarius) → long fearless afternoon shadows (Book 5) → red sunset disc
over a black sea (Appendix, Prince Vogelfrei). A reader jumping
Preface → §125 → Appendix must FEEL dawn → zenith → sunset from the art
alone (G1) — no legend, no labels.

Title-swap test (P2): put "Beyond Good and Evil" on this system and the
dancing noon-sun mural is nonsensical — that book is midnight oil, not noon
glare. The system would also suit *Zarathustra* (solar gospel) — the honest
collision — and is divided from it by register: Zarathustra's sun is
prophetic and solitary; Gay Science's sun is choral, danced around, sung to.

## 2. Tokens (merge source: design/tokens.css)

Named hex (dark default; all 8 reader themes fully specified in
`design/tokens.css` — copy those blocks into `theme.css` verbatim):

| name | hex (dark) | role |
|---|---|---|
| Abyssal Sea | `#06222B` | ground `--bg` |
| Noon Gold | `#F5B301` | sun masses, `--accent` — owned at the LARGEST architectural scale (ArtDirector Q3a: every other library gold stays small/hot/sparse/flat) |
| Sun Core | `#FFEDBE` | disc rims, lantern flames |
| Dance Vermilion | `#E4572E` | dancers, `--copper`, zenith ray alternation, rhyme rubrication, sunset disc |
| Wave Ultramarine | `#173A8F` | sea bands — FLAT SVG shapes only, never gradients (G4) |
| Foam Bone | `#F3EAD8` | body text `--text` |
| Deep Night | `#030B0F` | cover/appendix abyss `--gs-night` |
| Dusk Aubergine | `#2A1540` | night chapters ONLY (G5), never a roaming accent |
| Lantern Amber | `#FFB84D` | the madman's lantern, ship lamps |

Contrast (measured on the prototype, dark theme): body Foam on Abyssal
≈ 12.4:1; muted `#CDBFA4` on Abyssal ≈ 8.6:1; faint `#8F8471` on Abyssal
≈ 4.6:1 — all ≥ 4.5:1 (P6). Sepia/light themes deepen the sun to `#8A5A00`
for text-adjacent uses while art keeps gold masses.

## 3. Type (P4 — verified loading)

- **Display: Fraunces** (Google Fonts variable: `ital,opsz,SOFT,WONK,wght`;
  full axis URL verified HTTP 200, 6 woff2 faces; computed-style check on
  the prototype shows `Fraunces` first in the stack and loaded in
  `document.fonts`). Registry-crowded (home, Churchill, WtP, Being&Time) —
  Gay Science's register is the **wonkiest, most joyful**: `SOFT 100`,
  `WONK 1`, weight ~560–600 (never 900-black solemnity), loose leading
  (1.12 on titles), dance-tilted kickers allowed. Any confusion with a
  sibling moves Gay Science toward joy, never toward solemnity.
- **Body: Source Serif 4** (Google Fonts; same verification; optical size).
- **Fallbacks (REQUIRED, offline-safe):** Georgia, 'Times New Roman', serif
  for both stacks; prototype renders correctly with webfonts blocked.
- **Link (supervisor adds to index.html):**
  `family=Fraunces:ital,opsz,SOFT,WONK,wght@0,9..144,0..100,0..1,100..900;1,9..144,0..100,0..1,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700`
- **Scale:** cover title `clamp(3.6rem,12vw,7.5rem)` / phone
  `clamp(2.9rem,19vw,4.2rem)`; chapter titles
  `clamp(2.1rem,6vw,3.4rem)`; body `1.3rem/1.85`, measure ≤ 68ch (P6);
  part kickers letterspaced `.28em` in Noon Gold.

## 4. Cover system (merge source: design/cover.css + art/cover.svg)

- `art/cover.svg` (1600×850): the authored mural — flat Noon-Gold disc with
  hard rings, 24-ray alternating gold/vermilion fan + 12 flat wedges, seven
  vermilion silhouette leapers on the arc (Matisse grammar), four-point
  stars (the `#gs-spark` symbol — defined in defs, 8 uses), gulls, flat
  ultramarine sea bands, gold sun-road column, black-sailed outlaw ship
  with a hard-ring amber lamp. **Zero gradients in the render** (G4);
  residual defs were deleted; the `#7dd3fc` old-accent echo is gone.
- `design/cover.css` touches ONLY existing cover hooks. Merge notes for the
  supervisor: (a) the `url("../art/cover.svg")` path is written relative to
  `design/cover.css` — when merging into `theme.css`, rewrite as
  `url("art/cover.svg")`; (b) preferred integration under Contract v1 is
  EITHER the `.cover-bg` background (current file) OR the `#cover-art` slot
  via manifest `cover: {src:"art/cover.svg", class:"plate"}` — the slot is
  cleaner and survives future chrome rebuilds; (c) required index.html
  additions: two `<link>` font lines only (no new hooks — slots are
  JS-injected); (d) the tight title veil
  (`radial-gradient(ellipse 46% 42% …)`) is a legibility scrim, not art.
- Benchmark bar (USER-FEEDBACK.md): the cover is the book's gallery plate —
  full-bleed mural at every viewport, never `display:none` on phones (P1).


## 5. The 8-part day-cycle art system (G1 · merge source: art/part-dividers.svg)
sprite sheet. Panels (fixed altitudes, manifest-pinned):

| part | altitude | panel motif | sprite id |
|---|---|---|---|
| I Preface | below horizon | glow + cap, stars | `gs-part-i` |
| II Prelude | sunrise | sparkle + first dancers | `gs-part-ii` |
| III Book One | climbing | morning sun + gulls | `gs-part-iii` |
| IV Book Two | high morning | sun + theatre masks | `gs-part-iv` |
| V Book Three | **zenith** | full rays + **lantern lit at noon** | `gs-part-v` |
| VI St Januarius | golden hour | applause rays + wave + ship | `gs-part-vi` |
| VII Fearless Ones | long afternoon | westering sun + raking vermilion shadows | `gs-part-vii` |
| VIII Vogelfrei | sunset | red disc + black sea + outlaw ship | `gs-part-viii` |

Consumption (Contract v1.1): manifest entries use
`{ "src": "art/part-dividers.svg", "symbol": "gs-part-v", … }` — the reader
inlines the referenced `<g>` into a fresh `<svg>`; shared defs (`pd-rays`
etc.) live in the same file so refs survive. Sprite ids verified present
8/8 in the live file; sheet renders clean (no XML errors).

## 6. Chapter treatment grammar (G2 · altitude × weather × weight)

Every chapter's treatment = its part's **altitude** × its cohort's
**weather** × its **weight** (word count). Scale sensitivity is the whole
game (P5/G2):

- **Seed (≤ 60 words; the bulk of Books 3–5 aphorisms):** NO opener art.
  A marginal sun-spark (26px, part-altitude tint) floats left of the first
  line; the meta rule shortens to a spark. Prototype proof: §275 (17 words).
- **Shoot (60–300 words):** part sprite as a `motif`-class figure
  (≤ 24rem, above the meta block) + spark drop-cap in Foam.
- **Branch (300–800 words):** part-sprite `banner` (viewport-bleed,
  `max-height: 46vh` desktop / `34vh` phone) + Foam drop-cap; Prelude
  rhymes in this band instead get dance-ring fragments (see §7).
- **Landmark (> 800 words OR named below):** full-bleed authored opener
  unique to the chapter + gold drop-cap + optional inscription line.
  Named landmarks (opener art is cohort-authored to the brief here):
  p1c1 Preface (horizon-glow banner), p5c18 §125 (ZENITH: maximal ray fan
  + inverted lantern — the book's climax and the prototype centerpiece,
  G3), p6c66 §341 (midnight-blue hourglass spiral — the ONE sanctioned
  Dusk-Aubergine chapter), p6c67 §342 (sunrise stepping-forth + walker
  silhouette), p7c1 §343 (long-shadow afternoon), p7c41 §383 Epilogue
  (bright mid-morning + dance ring), p8c1 Appendix (sunset + ship).
- **Reading body:** calm always (P6) — no art behind prose, measure ≤ 68ch,
  drop-caps only at Shoot weight and above, preferences persist, focus
  visible.

## 7. Cohort grammars (Phase 2 conformance contract)

Cohort split (supervisor-fixed): A = I+II (p1c1, p2c1–63) · B = III
(p3c1–56) · C = IV (p4c1–51) · D = V (p5c1–168) · E = VI (p6c1–67) ·
F = VII+VIII (p7c1–41, p8c1).

- **A (Doors & Rhymes):** Preface = landmark horizon-glow + generous
  letterspaced colophon ending ("Ruta near Genoa · Autumn, 1886" set as a
  real colophon). The 63 rhymes share ONE ring: each rhyme gets a
  dance-ring FRAGMENT (2 leapers + arc chord, `motif` class) whose rotation
  advances `360/63` per poem — the ring completes across the part
  (ArtDirector Q2). Rhyme titles rubricated in Dance Vermilion italic
  (the single borrowing from Direction B — no initials, no vines, one
  grammar). Verse centered, no drop-caps.
- **B (Book One):** climbing-morning weather; gull marginalia for Seeds;
  sea-sparkle Shoots; essay-chapters (p3c1, p3c21, p3c23) Branch banners.
- **C (Book Two, the art book):** high-morning weather; theatre-mask
  weather-marks; music/women/art chapters carry mask/lyre marginalia;
  p4c43 (Schopenhauer, 1328w) is a Branch+.
- **D (Book Three, the abyss at noon):** ZENITH weather — harshest light,
  tightest rhythm; 168 fragments mostly Seeds (marginal sparks, alternating
  gold/vermilion by *content kind*, never by modulo — e.g. religion-cluster
  vermilion, knowledge-cluster gold); p5c18 §125 is THE landmark zenith
  opener (prototype centerpiece, G3).
- **E (St Januarius):** golden-hour weather; ship/wave marginalia; dawn
  chapters (§276, §337–342) graduate toward sunrise; §341 Aubergine
  exception; §342 landmark.
- **F (Fearless + Songs):** long-shadow weather for Book 5 (raking shadow
  rules under each meta block, lengthening toward §383); Appendix =
  songbook gathering: sunset banner + centered verse + ship colophon; each
  song title rubricated vermilion.

## 8. TOC, navigation, progress, chrome (benchmark: USER-FEEDBACK.md)

- **TOC drawer:** parts as horizon-lines — each `.toc-part-header` sits on
  a 1px horizon rule carrying a small sun-disc positioned at that part's
  altitude (below-line glow for I, zenith for V, half-sunk red disc for
  VIII). Chapter rows stay quiet; `.toc-num` in Noon Gold only for
  landmarks (works at 448 rows: 7 landmark rules, zero modulo). Read
  chapters earn a filled spark; the active chapter a vermilion underline.
- **Chapter endings:** authored end-seals via the Contract A.0 ruling —
  `body[data-chapter]`-qualified `p:last-child::after` with `url()` SVG
  content ≤ 32px: spark (Seeds), arc-chord (Prelude), lantern (Book 3
  religion cluster), wave (Book 4 sea chapters), red disc (Appendix).
  Never bare glyphs; never layout-shifting.
- **Progress:** the header fill is a ray — `linear-gradient(90deg, gold,
  vermilion)` — with a sun-disc leading edge (8px); reader-owned geometry,
  book-owned voice.
- **Nav buttons:** prev/next cards get horizon rules; labels
  ("Previous"/"Next") in letterspaced Fraunces kickers; hover warms the
  rule to gold. No layout restructure (Contract §8).
- **Settings:** theme swatches keep reader geometry; the active swatch ring
  is Noon Gold; section labels in Fraunces italic. Spacious, never cramped.
- **Header:** part line in gold kicker caps; chapter title in Fraunces 560.

## 9. Motion, accessibility, themes (P6/P8/P9)

- One orchestrated load moment per surface: openers rise once
  (`rise .7s cubic-bezier(.22,1,.36,1)`); cover mural is still (no ambient
  loops — the old `sundance-breathe` is BANNED). `prefers-reduced-motion`
  cuts everything instantly; content visible after one scroll pass.
- Contrast §2; focus always visible (gold outline); decorative art
  `aria-hidden`; opener SVGs carry `role="img"` + `<title>`/aria-labels;
  keyboard map unchanged from Contract §9.
- All 8 themes specified in tokens.css; the mural/dividers are fixed jacket
  art (they persist across themes like gallery plates — sanctioned by P8).
  Sepia/light verified by token construction; screenshot verification is
  the supervisor/validator's integration gate.

## 10. Chapter-manifest schema (binding)

Two layers (supervisor merges sequentially into runtime form):

**(a) Provisional per-chapter design JSON (cohort authors, supervisor
merges)** — supervisor's schema, adopted verbatim, one extension
(`opener_ref` may point at a sprite symbol):

```jsonc
{ "cohort": "D",
  "parts": ["part-5"],
  "chapters": [
    { "id": "p5c18", "part": "part-5", "order": 18,
      "title": "125. The madman.", "word_count": 555,
      "rationale": "Book climax: God dies at bright morning; zenith glare + inverted lantern",
      "palette_role": "zenith — harshest gold, lantern amber",
      "motif_asset": "art/part-dividers.svg",
      "opener": { "treatment": "banner", "symbol": "gs-part-v",
                  "composition": "maximal 24-ray fan, lantern below disc, inscription line" },
      "reading_treatment": "landmark: gold drop-cap, lantern end-seal" }
  ],
  "grammar_notes": "…", "landmarks": ["p5c18"] }
```

**(b) Runtime `design/chapters.json` (supervisor-owned merge target,
Contract §4/v1.1)** — motif-id namespace + slot treatment classes:

- `class` vocabulary: `plate` (cover slot only), `banner` (viewport-bleed
  landmark/Branch opener), `motif` (contained ≤24rem figure), `spark`
  (marginal mark — NO slot fill; CSS-only, no manifest entry needed),
  `song` (Appendix verse gathering).
- `motif` vocabulary (sets `body[data-art]`; book CSS keys weather-marks
  off it): `dawn-glow, sunrise, morning, high-morning, zenith, golden,
  afternoon, sunset` (the 8 altitudes) + content marks `lantern, masks,
  wave, ship, ring-fragment, gull, star, hourglass`.
- Example: `"p5c18": { "src": "art/part-dividers.svg", "symbol": "gs-part-v",
  "class": "banner", "motif": "zenith", "caption": "…" }`.
  Seeds carry NO manifest entry (CSS spark via `body[data-part]` — no
  per-chapter rules, P5-safe). `default: { "class": "motif" }` stays empty
  of `src` so unlisted chapters keep the slot hidden.

## 11. Prototype evidence (G6 — all viewed in-browser)

`books/gay-science/design/prototype/gs-prototype.html` (serve repo root,
e.g. `:8123`; real chapter text, truncations marked): cover mural + Preface
banner + rhyme §13 ring-fragment + §125 ZENITH (centerpiece) + §342 sunrise
+ §343 long shadows + Appendix sunset + §275 17-word seal proof.
Viewed: desktop 1440×1000 (all 8 surfaces), tablet 820×1180 (cover),
phone 390×844 (cover + §125 + Appendix, opener ≥200px, P1). Fonts verified
loading (Fraunces + Source Serif 4 first in computed stacks,
`document.fonts` loaded). Flat-render discipline: zero glow discs (G4),
flat sea bands, sprite ids 8/8 live. Sent to ArtDirector for prototype
review (G6 gate before cohort expansion).

## 12. Choice rationale + rejections (P3)

NOON was chosen and APPROVED because it is the only direction whose single
signature spans rhymes, abyss, and sunrise without splitting. CHANSONNIER
(B) rejected: static manuscript craft for a book that dances; gold-on-dark
pastiche risk; vine/initial grammar would fight the day-cycle. VOGELFREI
(C) rejected: voyage furniture would drown the 168 tiny Book-3 aphorisms;
storm-woodcut heaviness contradicts the Prelude's lightness. Both losers'
reasons are book-specific (dance + aphorism scale), not portable.

## 13. G6 REVISE resolutions (GR1–GR7 + R1, 2026-10-15)

ArtDirector G6 REVISE (`.omp/design/critiques/gay-science.md` §Prototype
review) + supervisor repair list + FinalValidator R1 — all owned items
resolved in source, verified in-render on :35211 (repo-root server; :8123
was claimed mid-session by a peer's build):

- **GR1 dance ring (cover.svg + prototype embed, byte-synced 166/166):**
  the single cloned mascot is gone — three distinct gesture figures
  (`gs-leap/gs-reach/gs-spin`, chunky Matisse-grammar silhouettes with
  10.5-unit heads) radiate outward on a BROKEN six-figure ring with
  hand-hold arc connectors; sparks thinned to five. Eyebrow moved off the
  sun (0.95rem, 0.22em tracking, tight margin). Title veil strengthened
  (52%/46% ellipse, 0.78 core) so the inscription reads over the disc.
- **GR2 sun-face: closed in our favor.** No face exists in book art; the
  smiled face was a stale prototype render. Home plate already carries the
  impassive Tarot face (bar eyes, straight mouth, brow ticks) — no further
  work. Prototype embed is now byte-identical to the faceless book cover.
- **GR3 phone overflow:** containment rule — `overflow-x: clip` on
  html/body, `overflow: hidden` + `max-width: 100%` on opener figures,
  banners bleed via margin (`calc(50% - 50vw)`), never transforms.
  Verified: no sideways scroll at 390×844; cohorts MUST follow the same
  containment (zero phone overflow is the shipping floor).
- **GR4 full-width openers (supervisor #1, R1-3):** root cause was the
  `rise` animation's `to{transform:none}` overriding the banner's
  centering transform — banners now bleed via margin (transform-free)
  with an opacity-only `fade`; band viewBoxes re-cropped so art spans
  the full width (§125 rays edge-to-edge, §342 re-composed as a tableau
  with tenant + fellow walker). Cohort rule: openers are full-bleed
  tableaux, never half-empty bands beside a title.
- **GR5 inscriptions (supervisor #2, R1-4):** NO text inside opener SVG
  viewBoxes — all inscriptions are HTML `<figcaption>` (Contract caption
  mechanism): wraps, insets, min-padding, never clips. Applies to §125,
  §342, rhyme ring-notes, and the Appendix tableau caption.
- **GR6 drop-cap numerals (supervisor #3, R1-2):** FIXED in shared reader
  (ReaderLead classifier, verified on :8123): numeral-led openers earn
  `no-drop reader-fragnum`; "125." renders intact at body size. Book rule:
  drop-caps are LETTERS only — books style `.reader-fragnum` for fragment
  voice (quiet tabular base in shared CSS) and MUST NOT work around it
  with per-chapter CSS. Prototype demonstrates the result via `num-open`.
- **GR7 Appendix tableau:** recomposed as one farewell image — red disc
  low-left over the sea band, ship crossing before it, red sun-road,
  balanced stars; captioned in HTML. The book's farewell is now its most
  composed opener.

Re-inspection scope (ArtDirector): cover ring + one full-width opener +
Appendix + phone overflow probe — then PASS + expansion. Cohorts absorb
these patterns now (full-width openers, fitted HTML inscriptions, composed
tableaux, containment); R2 wired Book-Three slice is supervisor-owned.
