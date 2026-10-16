# Churchill Cohort C2 — Independent Validation Report

Validator: `SupChurchill-3.ChurchillCohortC2.ChurchillC2Validator` (independent; authored none of the artifacts).
Date: 2026-10-15. Verdict: **PASS**.

Artifacts under test (read-only, engineer-authored):
- `books/forty-ways-to-look-at-churchill/art/cohort-c2.svg` (4 symbols p4c7–p4c10)
- `books/forty-ways-to-look-at-churchill/design/cohort-c2.json` (9 entries)
- `books/forty-ways-to-look-at-churchill/design/cohort-c2.css` (differential)

Binding docs read first: ART-DIRECTION.md v1.1+C1–C9, READER-CONTRACT v1.1,
`local://churchill-c2-design.md` (§3 = checklist), `design/facets.js`,
`theme.css` §§0–7, `art/cohort-c.svg` (adopted neighbors), all 9 chapter
prose files, `shared/reader.js` render path. Skills `visual-critique` and
`review-skill` read via `skill://` (no fallback needed).

## Harness (pre-merge — NOT the merged book)

The supervisor merges cohort JSON/CSS sequentially after cohort yield, so the
merged book does not yet carry C2 entries. All screenshots below come from a
scratch harness at **`http://127.0.0.1:8217/index.html?ch=<id>`**
(scratch dir `/tmp/c2valid/index.html`, symlinks to the book's
`art/ design/ data/ theme.css` + `shared/`, served by `python3 -m http.server
8217`), which faithfully replicates the reader contract per chapter:

- `body[data-book][data-chapter][data-part][data-part-id][data-view=reader][data-art]`
- `figure#chapter-art` filled by cloning the manifest symbol EXACTLY as
  `facets.js fillSlotFromSVG` does (symbol children spliced into
  `svg.fw-plate`, `preserveAspectRatio="xMidYMid slice"`); the ONLY
  harness deviation is absolutizing `art/facets.svg#…` cross-file `use`
  hrefs to the symlinked dir (shipped relative form untouched).
- Title lockup (`Part IV · Context & Myth` / title / number label) as
  `reader.js paintChapterMeta` emits; `#chapter-text` with the REAL
  paragraphs from `data/chapters/<id>.json` (incl. the `no-drop` rule);
- Roles + `data-fw-label` stamped EXACTLY as `facets.js stampRoles`
  (closed 22-role vocabulary, `prose` skipped);
- Styles = `shared/reader.css` + current `theme.css` + `design/cohort-c2.css`;
  fonts = the same Fraunces/Newsreader/DM-Sans Google-Fonts link the book
  `index.html` uses (both verified loaded via `document.fonts.check`).

Harness verified: `svg.fw-plate` present, 16 `<use>` in p4c7, `text.fw-num`
27/28/29/30, para counts 11/13/14/21/19/13/28/20/1, hooks
`forty-ways-to-look-at-churchill|<id>|reader|<motif>`, console+errors empty.

## Coverage (all viewed by the validator)

Openers, all 9 chapters × 3 viewports (1440×1000, 820×1180, 390×844),
reveal-trigger scroll pass before each shot:

| chapter | d1440 | t820 | p390 |
|---|---|---|---|
| p4c1 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c3 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c4 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c5 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c6 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c7 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c8 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c9 | ✅ viewed | ✅ viewed | ✅ viewed |
| p4c10 | ✅ viewed | ✅ viewed | ✅ viewed |

Sections (desktop, all viewed): p4c6 rail head/mid/tail (labels 1–18 all
visible across the three), p4c5 verse [9–19], p4c8 catalogue [5–14] +
quotes + coda, p4c4 letters + captions, p4c9 speeches/thesis + codas,
p4c10 coda, p4c7 quote, p4c1 verdicts, p4c3 thesis.
Zoomed plate crops: p4c7/p4c8/p4c9/p4c10. C2 pair plates:
p4c2/p2c1/p5c6/p5c10 (prototype sources, for arrangement comparison only).
Print: `print_p4c1.pdf` (real print pipeline).

Evidence dir: `.omp/design/evidence/churchill-c2/` (52 files; names
`<chapter>_<viewport>.png` + `plate_*_zoom` + `pair_*` + `print_p4c1.pdf`).

## §3 claims — verdicts

**(a) C1 spot-check (p4c7 + p4c9, desktop + phone). PASS.**
Both digits identifiable at both viewports (viewed: `p4c7_d1440`,
`p4c7_p390`, `p4c9_d1440`, `p4c9_p390`, zoom crops). Paint order confirmed:
numeral `<text class="fw-num">` precedes exactly 2 lampblack occluders, all
4 new plates (C2 is stricter than the corollary: lampblack only). Zoom
evidence: occluders cross mid-strokes only (p4c7: bar across "2" waist +
"7" stem, tooth across "7" right; p4c9: bar across "2" waist, tooth across
"9" bowl); top arcs and bottom terminals clear. No accent-on-Bone numeral
crossings: p4c7 accents end x≤470 (numeral ink x≈506–736); p4c9 vermilion
crack tips descend INTO the numeral bbox but land on the lampblack
occluders' dark ground, never on Bone ink (viewed in `plate_p4c9_zoom` —
tips visibly stop at the black bars). getBBox intersection math was run but
is unreliable for transformed `<use>` (local-coords artifacts); the verdict
rests on the zoomed renders, which are unambiguous.
Minor note (not a defect): p4c9 crack tips overlap the numeral's bbox
region — this is the SPECIFIED construction (§2c keeps exact numbers; the
occluder-cover argument verified visually).

**(b) C2 pairs. PASS — all six pairs distinct arrangements (viewed).**
- (p4c7,p4c5): radial 7-leaf fan vs horizontal bending ledger rows. No collision.
- (p4c8,p2c1-proto): horizontal 4-blade launch + 2×3 stack vs vertical
  monolith cluster. No collision.
- (p4c9,p5c6-proto): full 4×3 ledger wall + 3 thin teeth vs shattered
  vermilion wedges on dark. Different primitive, scale, bed. No collision.
- (p4c10,p5c10-proto): DELIBERATE rhyme (spec §2d, art direction orders it):
  lampblack bed + twin hairlines + point, but slate vs ochre, dim "30"
  numeral + wash block + hairline rule have no counterpart in Way 40's
  numeral-less void. Rhyme reads intentional, not duplicated.
- (p4c9,p4c2): 4×3 wall + cracks + fallen tile vs 5×8 grid + ochre ticks +
  HOPE NOT flag. Different count, rhythm, accent system. No collision.
- (p4c7,p4c8): fan vs launch. No collision.
Element-count fingerprints match the spec table (4 desk/7 fan; 6 stack/4
blades; 12 wall+1/3 teeth; wash+rule/point, no grain in p4c10).

**(c) p4c6 labels 1–18 + rail. PASS.** `data-fw-label` 1–18 stamped (read
back from DOM); `::before content` renders "1"…"18" (all 18 computed);
prose untouched (caption text has no digit prefix). Rail numbers tabular
Fraunces Bone; 6px faded tick; head/mid/tail screenshots show all 18.

**(d) Treatments. PASS with ONE minor note.**
- p4c6 drop-cap killed: `::first-letter` 18px inherit-sized, faded, no float. ✅
- p4c10 coda centered w/ air: 1.35rem/1.9 centered + 48px colophon top margin. ✅
- p4c5 stanza glued: 11 verse paras 2.7px gaps, 26rem centered column,
  left-ragged (the specified sibling variation vs p4c2 centering). ✅
- verdict/letter/speech/quote/coda roles visibly active (section screenshots
  + computed styles: verdict/thesis Fraunces 1.35rem Bone; letter italic
  24px inset; speech 1.2rem accent-soft block; quote italic + 3px ochre
  shard-tick; coda italic faded). ✅
- MINOR NOTE (spec-vs-shipped delta, no visual defect): the C2 CSS rule
  `p4c5 p[data-fw="verse"]:last-of-type { margin-bottom: 2rem }` does NOT
  match (last verse para is not `:last-of-type` — the coda [20] follows),
  so the 2rem air below the stanza comes from the coda's own `margin-top:
  2rem` instead. Net rendering = air present, identical to spec intent.
  No repair requested (fixing would double the gap); recorded for the
  supervisor's merge notes.

**(e) Fonts. PASS (computed + loaded).** Display/numerals Fraunces
(`fontVariationSettings "SOFT" 100, "WONK" 1, "opsz" 144` on `text.fw-num`;
`document.fonts.check('600 100px Fraunces')` true); body Newsreader
(`document.fonts.check('16px Newsreader')` true); fallbacks
Georgia/"Times New Roman"/serif present in every stack.

**(f) Contrast. PASS.** Bone #ECE1CB on lampblack #14110B = 14.5:1;
Faded #B7A98F (setups/codas/captions) = 8.2:1; ochre drop-cap 7.2:1 —
all ≥ 4.5:1. Numerals are large display text (≥3:1 path): gallery-bed
numerals 13.2:1; p4c10 hushed "30" ≈3.3:1 at large display size — passes
large-text AA, matches the specified Way-40-rhyme dimness.

**(g) C4. PASS.** All 136 chapter paragraphs computed Bone or Faded only;
zero vermilion/slate/ochre body text; zero `text-shadow`; zero
`box-shadow`/blur/drop-shadow in C2 CSS; zero hardcoded hex in C2 SVG/CSS
(all `var(--fw-*)`); grain ≤0.16, p4c10 grain-free.

**(h) Responsive + print + reduced-motion. PASS.**
- ≤720px: zero horizontal overflow on all 9 at 390px (`scrollWidth ==
  clientWidth`); plates never hidden (340px min-height preserved — spec
  `plate_min_px: 340`; theme's 220px phone rule does not apply in this
  geometry because `#chapter-art` carries no width constraint that shrinks
  it — visually confirmed full-bleed plates on every phone shot);
  p4c6 rail narrows (68→56px pad, 1.05→1rem numerals) per the 720px rule. ✅
- Print: real print pipeline (`print_p4c1.pdf`) + theme print rule confirmed
  (`#chapter-art { display: none }`); C2 verdict `break-after: avoid` rules
  present; p4c6 caption print flatten (no rules, tight padding) present. ✅
  (Earlier `emulate(media)` returning `display:block` is a harness/emulation
  artifact — `matchMedia('print')` was false — not a stylesheet defect.)
- Reduced-motion: C2 ships no motion (grep: zero transition/animation/
  keyframes in C2 CSS/SVG); live `prefers-reduced-motion: reduce` emulation
  collapses the SHARED `fadeUp` entrance to 0.01ms. The 2 running
  animations observed are shared `reader.css` entrances on
  `.chapter-meta`/`.chapter-text`, not C2's. ✅

**(i) Console/network. PASS.** Zero console entries, zero page errors, zero
failed requests across all 9 chapters + pair pages + transitions.

**(j) Taste (judged from rendered pages). PASS.**
- Ledger-cut grammar rhymes with cohort-c neighbors: bone rectangular
  tiles + floor line + occluded numeral read as one Part IV family, while
  each plate has a distinct compositional idea (desk+fan / stack+launch /
  wall+cracks / near-empty wash).
- The 4 new plates are visibly distinct from each other at thumbnail and
  full-bleed scale; none could be mistaken for another.
- Way-40 rhyme (p4c10↔p5c10) reads intentional: same colophon grammar,
  slate-vs-ochre + numeral-vs-void tells the archive/tomb story.
- Literary fit: the fan (fiction imposed on fact), the accelerating
  destiny vector, the cracking imperial wall, the faded map — each plate
  stages its chapter's thesis rather than decorating it.
- Typography: Fraunces WONK numerals are characterful without harming
  legibility; Newsreader body calm; verdict plaques land as display
  moments; the p4c6 rail is the cohort's signature and earns its complexity.
- Phone compositions hold: slice-crop keeps numerals + key masses in
  frame on all 9 (p4c3's right-set "23" crops tightest but stays
  identifiable — adopted plate, not C2's).

**(k) Keyboard. N/A-BY-CONSTRUCTION.** C2 ships no interactive controls (no
buttons/links/inputs/summary/details; the p4c6 rail is CSS `::before`
content, not focusable). Harness audit with harness chrome hidden: 0
focusable elements, nothing hidden/broken. Reason: all C2 treatments are
pure presentation over reader-owned prose; keyboard behavior (chapter nav,
TOC, settings) remains shared `reader.js` responsibility, unchanged by
this cohort. Shared `:focus-visible` styles untouched.

## Static conformance (computed)

- 9/9 manifest entries; titles verbatim vs `toc.json`; all role indices
  in range; p4c7–p4c10 → `art/cohort-c2.svg`, p4c1/p4c3–p4c6 →
  `art/cohort-c.svg`; 4/4 symbols resolve; XML parses; JSON parses.
- Every `<use>` carries both `href` and `xlink:href` (legacy check passed).
- Every symbol's `<title>` is the first child. Floor lines present
  (ochre/vermilion/vermilion/slate). No raster, no remote refs.
- Zero `nth-child` content rules in C2 CSS. No repo writes outside
  `.omp/design/evidence/churchill-c2/` (harness lives in `/tmp/c2valid`).

## Truthfulness ledger

- OBSERVED (rendered + viewed): all 9 openers × 3 viewports (27 shots);
  15 section views; 4 plate zooms; 4 pair plates; print PDF existence
  (content not page-inspected — print rule verified via matched CSS).
- COMPUTED: para counts, title verbatimness, role-index ranges, contrast
  ratios, paint order, label stamping, caption/verse/list/coda/drop-cap
  geometry, overflow widths, focusable count, animation inventory.
- SAMPLED: C1 geometry (p4c7+p4c9 per assignment); long-para tails read
  for grounding (p4c7 [4,12], p4c8 [15,27], p4c9 [5,10,17–19]).
- NOT RUN: production build, linters, merged-manifest load in the real
  book page (pre-merge by design), full 41-chapter census (C2 scope is 9),
  cross-theme recolor sweep beyond dark (token-var construction reviewed
  statically — all fills themed vars, so recolor is structural), screen
  reader pass, print-PDF page-by-page inspection.

## Verdict: PASS

Cohort C2's 4 plates + 9 manifest entries + differential CSS meet the
spec's §3 testable claims as rendered: numerals legible at both
viewports, arrangements unique across all six pairs, rail labels complete
with prose untouched, every named treatment active, fonts loaded with
fallbacks, contrast ≥4.5:1, accent discipline clean, responsive/print/
reduced-motion conformant, zero console/network errors, and the plates
judge as distinct, literate, Part-IV-native art. One cosmetic
spec-vs-shipped note (p4c5 `:last-of-type` selector) has no visual effect
and requests no repair. No REVISE items. No blockers.
