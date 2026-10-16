# Twilight of the Idols — Cohort Audit (READ-ONLY)

Auditor: SupTwilight-3.TwilightCohortAudit · 2026-10-15
Scope: `books/twilight-of-the-idols/{art/*.svg, design/*.{css,json}, index.html, theme.css}` + served `data/chapters/*.json`.
Method: source census (regex counts + full-text reads of claimed paragraphs), manifest/symbol resolution against `shared/reader.js` behavior, evidence screenshots in `design/evidence/` (13 files, viewed 9). No browser run by this auditor (read-only ticket; render claims below are marked `[INFERENCE]` where they go beyond viewed evidence). Nothing edited except this file.

Contract docs read first: `.omp/design/READER-CONTRACT.md` (v1.1), `design/ART-DIRECTION.md`, `design/book-identity.json`, `design/book.css`, `.omp/design/critiques/twilight-of-the-idols.md`.

---

## 1. Ring-count table (T1 — counts are CONTENT)

Counting rule: elements whose `class` attribute contains the cohort ring token (`hf-ring` in hammerfall, `sring` in idolsmasher, `ring` in untimelydusk) inside the chapter's opener `<symbol>`. `ring` substring match also catches `ring diamond` (p1c12, intended). "Other circles" = `<circle>` elements in the symbol WITHOUT a ring class — assessed individually for T1 decorative-circle risk.

| Ch | Opener symbol (file) | Expected | Observed ring-class els | Other circles | T1 verdict |
|---|---|---|---|---|---|
| p1c1 | `sounding-fork` (hammerfall) | 1 | **1** (`path.hf-ring`) | 3: 2× black `?`-silhouette discs (r=24, fill #000) + 1× bone r=8 fork-bowl circle | PASS. The r=8 bowl circle is small/structural (fork cup), does not read as a sounding-ring. |
| p1c2 | `fanned-barbs` (hammerfall) | 2 | **2** (`path.hf-ring` ×2) | 0 | PASS |
| p1c3 | `hemisected-mask` (hammerfall) | 3 | **3** (`path.hf-ring` ×3, daylight-clipped) | 4: 2× r=10 + 2× r=3 ash foil-tip dots (foil-crossing nodes, stroke ash, inside `hf-ash` group) | PASS (borderline — see R1). The r=10 pair are the largest non-ring circles in the cohort; they read as foil pommels/nodes, not concentric rings, but a strict validator may flag them. |
| p1c4 | `mummy-case` (hammerfall) | 4 | **4** (`path.hf-ring` ×4) | 5: 1× forge ground disc (r=200, page-colored fill) + 4× r=5 ash wrap-rivets | PASS. Rivets are tiny; ground disc is background fill, not a ring. |
| p1c5 | `idol-fable-noon` (idolsmasher) | 5 | **5** (`circle.sring` ×5, concentric on noon centre 218,92) | 12: 5× `stage` discs (r=24→7, the collapse narrative) + 1× r=20 engraved noon centre + dots | PASS **with notation** (see R2). The 5 stage-discs + r=20 centre are *narrative* circles (the six errors collapsing), clearly distinct in position/size from the 5 concentric sounding-rings. T1's "never add decorative circles" is satisfied in spirit — but a naive circle-counter will count 17. Documented, not a fail. |
| p1c6 | `idol-shears-flame` (idolsmasher) | 6 | **6** (`circle.sring` ×6) | 7: shears finger-loops (r=9 ×2), pivot dots, flame dots (all ≤ r=9, structural) | PASS |
| p1c7 | `idol-four-errors` (idolsmasher) | 7 | **7** (`circle.sring` ×7, r=70→118) | 7: idol-disc double rim (r=64 + r=58, the idol body itself) + centre dot + 4× r=1.2 spark dots | PASS **with notation** (see R3). The r=64/58 double rim is concentric with the 7 srings and could be misread as 2 extra rings at thumbnail scale. It is the idol-disc body (bone, width 2/1, distinct style from bronze/ash srings) — defensible, but the riskiest T1-adjacent call in the cohort. |
| p1c8 | `idol-veil-tablets` (idolsmasher) | 8 | **8** (`circle.sring` ×8) | 6: dots only (r≤1.8) | PASS |
| p1c9 | `dancing-pen` (untimelydusk) | 9 | **9** (`circle.ring` ×9, concentric 100,100, r=92→44) | 0 | PASS |
| p1c10 | `skirmish-gallery` (untimelydusk) | 10 | **10** (`circle.ring` ×10, r=92→47) | 0 | PASS |
| p1c11 | `dionysian-mask` (untimelydusk) | 11 | **11** (`circle.ring` ×11, r=92→47) | 7: mask medallion double rim (r=38 bronze + r=34.5 bone) + 5× dots (r≤1.6) | PASS **with notation** (see R4). Medallion rim is small (r=38 vs rings r≥47), centred at 100,104, clearly the mask's medallion — but concentric-ish. Same defence as R3. |
| p1c12 | `diamond-over-coal` (untimelydusk) | 12→diamond | **12** (6× `circle.ring` r=92→62 + 6× `path.ring.diamond` nested diamonds) | 2: ember strike-core dot (r=2.6) + halo (r=5) | PASS. The 12→diamond collapse is literal and honest: rings become diamonds. |

**Ring verdict: 12/12 PASS.** No chapter carries a wrong ring count. R1–R4 are notations for the strict validator, not fails: in each case the extra circles are small, structural, or the idol/mask body itself — never concentric full rings at sounding-ring scale except R3/R4's body-rims, which are stylistically distinct (bone widths, medallion scale).

---

## 2. Manifest / symbol resolution table

`design/chapters.json` (version 1) + cohort JSONs vs files on disk + `reader.js` §4/A.2 behavior (verified in `shared/reader.js`: `{src, symbol}` form supported; symbol inlined by `getElementById` + child-splice; symbol `viewBox` preferred, root fallback; missing symbol → warn + hidden slot).

| Ch | Manifest `src` | File? | Manifest `symbol` | `id=` in file? | Symbol `viewBox`? | class | motif (`data-art`) | Status |
|---|---|---|---|---|---|---|---|---|
| cover | `art/cover.svg` | ✅ | — (whole file) | n/a | root 0 0 640 640 | plate | — | ✅ resolves |
| p1c1 | `art/hammerfall.svg` | ✅ | `sounding-fork` | ✅ `<symbol>` | ✅ 0 0 600 420 | motif | sounding-fork | ✅ |
| p1c2 | `art/hammerfall.svg` | ✅ | `fanned-barbs` | ✅ `<symbol>` | ✅ 0 0 600 420 | motif | fanned-barbs | ✅ |
| p1c3 | `art/hammerfall.svg` | ✅ | `hemisected-mask` | ✅ `<symbol>` | ✅ 0 0 600 420 | motif | hemisected-mask | ✅ |
| p1c4 | `art/hammerfall.svg` | ✅ | `mummy-case` | ✅ `<symbol>` | ✅ 0 0 600 420 | motif | mummy-case | ✅ |
| p1c5 | `art/idolsmasher.svg` | ✅ | `idol-fable-noon` | ✅ `<symbol>` | ✅ 0 0 300 200 | cadence | noon-collapse | ✅ resolves; ⚠️ motif-id DRIFT (see D1) |
| p1c6 | `art/idolsmasher.svg` | ✅ | `idol-shears-flame` | ✅ `<symbol>` | ✅ 0 0 240 240 | emblem | shears-flame | ✅ resolves; ⚠️ DRIFT (D1) |
| p1c7 | `art/idolsmasher.svg` | ✅ | `idol-four-errors` | ✅ `<symbol>` | ✅ 0 0 240 240 | plate | fourfold-knot | ✅ resolves; ⚠️ symbol DRIFT (D1) |
| p1c8 | `art/idolsmasher.svg` | ✅ | `idol-veil-tablets` | ✅ `<symbol>` | ✅ 0 0 260 280 | emblem | veil-tablets | ✅ resolves; ⚠️ DRIFT (D1) |
| p1c9 | `art/untimelydusk.svg` | ✅ | `dancing-pen` | ✅ `<symbol>` | ✅ 0 0 200 200 | motif | dancing-pen | ✅ |
| p1c10 | `art/untimelydusk.svg` | ✅ | `skirmish-gallery` | ✅ `<symbol>` | ✅ 0 0 200 200 | motif | skirmish-gallery | ✅ |
| p1c11 | `art/untimelydusk.svg` | ✅ | `dionysian-mask` | ✅ `<symbol>` | ✅ 0 0 200 200 | motif | dionysian-mask | ✅ |
| p1c12 | `art/untimelydusk.svg` | ✅ | `diamond-over-coal` | ✅ `<symbol>` | ✅ 0 0 200 200 | motif | diamond-over-coal | ✅ |

Cohort JSONs (`hammerfall.json`, `idolsmasher.json`, both `version: 1`) match `chapters.json` entry-for-entry (src/symbol/class/motif identical). ⚠️ **No `design/untimelydusk.json` and no `design/untimelydusk.css` exist** — the p9–p12 manifest entries in `chapters.json` have no cohort-JSON provenance and p9–p12 have no reading treatments; see §6/M1.

**D1 — motif-id drift (idolsmasher vs book-identity.json), severity: LOW, repair: supervisor records.** `book-identity.json` (the ArtDirector-reviewed source) names p5–p8 motifs `noon-disc / shears-bloom / fourfold-knot / veiled-tablets` with same-named symbols; the shipped cohort uses `noon-collapse / shears-flame / fourfold-knot / veil-tablets` motifs and `idol-*` symbols. The shipped set is internally consistent (manifest ↔ cohort JSON ↔ `data-art` CSS rules all agree: `noon-collapse`, `fourfold-knot`, `veil-tablets` are the styled values). Nothing is broken at runtime. But `book-identity.json` is now stale for 4 chapters and any validator diffing identity-vs-manifest will flag it. Repair: supervisor updates `book-identity.json` motifs/symbols to the shipped ids (identity follows implementation here — the cohort's `idol-*` naming is the honest collision-free choice) and notes the rename in ART-DIRECTION.md's motif table.

---

## 3. nth-of-type landing table (served `data/chapters/*.json`)

`nth-of-type` is 1-based over `<p>` children of `#chapter-text`; reader.js renders one `<p>` per array entry in order, so served index N+1 ⟺ `p:nth-of-type(N+1)`. All ledes below are verbatim from served JSON.

### hammerfall.css

| Selector | Served target (lede) | Lands correctly? |
|---|---|---|
| p1c3 `p:nth-of-type(7)` (+`::before` arc divider) | P7/12: "You choose dialectics only when you have no other means. You know that using it provokes mistrust…" | ✅ The pivot graf (dialectics-as-last-resort → "and Socrates was one, too?"). Divider-before-pivot is the claimed treatment. |
| p1c3 `p:nth-of-type(12)` (+`::before` arc divider) | P12/12 (last): "expression of décadence—they alter its expression, but they do not get rid of it. Socrates was a misunderstanding…" | ✅ Closing verdict graf (served P12 begins mid-sentence — a text-curator extraction seam, pre-existing, not cohort-caused). Divider-before-close as claimed. |
| p1c4 `p:nth-of-type(7)` (tablet 1) | P7/9: "First Proposition. The reasons which have been given for designating 'this' world as apparent…" | ✅ |
| p1c4 `p:nth-of-type(8)` (tablet 2) | P8/9: "Second Proposition. The characteristics which have been given to the 'true Being' of things…" | ✅ |
| p1c4 `p:nth-of-type(9)` (tablet 3+4, +"ONE BREATH, TWO BLOWS" tag) | P9/9: "Third Proposition. Concocting stories* about a world 'other' than this one… Fourth Proposition. Dividing the world into a 'real' one and an 'apparent' one…" (both propositions in one served para — verified full text) | ✅ The shared-para claim is TRUE; the `::after` tag is content-honest. |
| p1c2 stanza counter (`p::before` 01–30) + `:last-of-type` Formula | 30 served paras; P30: "Formula for my happiness: a yes, a no, a straight line, a goal*…" | ✅ Counter yields 01–30; Formula rule lands on the true last maxim. ⚠️ Notation N1: ART-DIRECTION/identity prose says "44 maxims" (print numbering); served JSON has 30 paras (several print maxims fused per para, e.g. P4 fuses two). The cohort caption "Thirty stanzas" and 30-dart emblem are content-true to the SERVED text — correct choice. Supervisor should fix the "44" prose in ART-DIRECTION.md + book-identity rationale to avoid validator confusion. |

### idolsmasher.css

| Selector | Served target (lede) | Lands correctly? |
|---|---|---|
| p1c5 `p:nth-of-type(1)` subtitle, no-drop-cap | P1/10: "History * of an Error" | ✅ True subtitle line. |
| p1c5 asides `p:nth-of-type(3), (5)` (italic + indent + bronze border) | P3: "(Most ancient form of the idea… 'I, Plato, am the truth.')"; P5: "(Progress of the idea: it becomes more cunning…)" | ✅ Pure parenthetical asides. |
| p1c5 asides `p:nth-of-type(7), (8), (9)` (same aside treatment) | P7: "(The old sun… Königsbergian.)* 4. The real world—unattainable?…" — aside + stage 4 FUSED in one served para. Same fusion in P8 (aside + stage 5) and P9 (aside + stage 6). | ⚠️ **PARTIAL — G2.** The italic-aside treatment necessarily styles the fused stage sentences too (pure-CSS cannot split a text node). The cohort CSS comment discloses this ("pure-CSS reachability — see gap G2") and the fusion is a text-extraction seam, not a cohort error. Visually: stages 4–6 will read italic/indented — a real but minor impurity, honestly disclosed. Repair option: supervisor-owned `reader:chapter` JS span-split (book-owned JS is sanctioned by contract §3); or accept. |
| p1c5 `p:nth-of-type(10)` (aside treatment on closing) | P10/10: "(Noon; moment of the shortest shadow; end of the longest error; pinnacle of humanity; INCIPIT ZARATHUSTRA.)*" | ✅ The noon seal-para. ⚠️ Notation: it ALSO matches `p:last-child::after` (noon-disc seal) — both fire; intended end-state stack, no conflict. |
| p1c5 `p:last-child::after` noon seal | P10 (above) | ✅ Intended. BLOCKED at paint by U1 (below) — selector is correct, art delivery is not. |
| p1c6 `p:nth-of-type(5)` catalogue litany | P5/9: "into the moral (or religious) domain. Or the onset of tiredness… Or a sign that the air is moist… Or unwitting gratitude…" (full text: the "peace of soul" anaphora catalogue, begins mid-sentence — extraction seam) | ✅ The catalogue block (G4 disclosed: per-"Or" hanging lines need supervisor spans; shipped hanging-indent is the honest pure-CSS form). |
| p1c6 `p:last-child::after` flame seal | P9: "Let us finally consider what naivety it is…" | ✅ Correct anchor; paint BLOCKED by U1. |
| p1c7 plates `p:nth-of-type(1), (3), (6), (8), (9)` + `::before` phase discs + `::first-line` small-caps | P1: "Error of Confusing Cause and Consequence.—…"; P3: "Error of a False Causality.—…"; P6: "Psychological Explanation for This.—…"; P8: "The Entire Realm of Morality and Religion Belongs Under This Concept of Imaginary Causes.—…"; P9: "Error of Free Will.—…" | ✅ All five are true head-paras (the four named errors + the psychological-explanation interlude). Phase-disc mapping (P1→phase-1, P3→phase-2, P6→phase-0, P8→phase-3, P9→phase-4) is a defensible narrative order (interlude = phase 0). Paint BLOCKED by U1. |
| p1c7 `p:last-child::after` quarters seal | P12: "belongs to the whole, one is in the whole—there is nothing which could judge…" | ✅ Correct anchor; paint BLOCKED by U1. |
| p1c8 `p:nth-of-type(2)` centred maxim | P2/8: "Morality is merely sign language, merely symptomatology: you must already know what is going on in order to profit by it." | ✅ The thesis maxim. (Notation: "there are no moral facts at all" itself is in P1; P2 is the correct centred pull-line — the maxim treatment does not claim otherwise.) |
| p1c8 margin seals `p:nth-of-type(3), (5), (7), (8)` | P3: "A first, quite provisional example… taming vs breeding…"; P5: "Let us take the other case… breeding… Law of Manu…"; P7: "The morality of breeding and the morality of taming… pia fraus…"; P8 (last): "…the pia fraus, the legacy of all the philosophers and priests… neither Manu nor Plato nor Confucius…" | ✅ All four land on genuine seam paras (taming/breeding split, Manu case, synthesis, verdict). Sigil mapping cage→P3 (taming), tiers→P5 (breeding), fraus→P7/P8 (verdict) is content-true. ⚠️ Notation: P8 carries BOTH `::before` margin sigil and `::after` fraus seal — intended stack, no conflict. Paint BLOCKED by U1. |
| p1c8 `p:last-child::after` fraus seal | P8 (above) | ✅ Correct anchor; paint BLOCKED by U1. |

**Landing verdict: every selector lands on the claimed paragraph. Zero mismatches.** Two disclosed impurities (G2 fused-paras styling, G4/G5 span-split needs) are honest pure-CSS-reachability limits, not errors.

---

## 4. url()-fragment risk list (Chromium bare-symbol behavior)

Ground truth (established by the untimelydusk cohort's screenshot matrix, quoted in `art/untimelydusk.svg` header comment): Chromium loads external SVG fragments addressed by bare `<symbol>` id at 300×150 and paints BLANK; only explicit `<view>` anchors (or whole-file loads) paint in `content:url()` / `img` / background sinks.

| # | CSS `content:url()` | Target id | `id=` exists? | Element | `<view>` anchor? | Severity | Effect if shipped |
|---|---|---|---|---|---|---|---|
| U1a | `idolsmasher.css` → `../art/idolsmasher.svg#idol-fable-seal` (p1c5 end seal) | ✅ | `<symbol viewBox="0 0 48 48">` | ❌ NO (`idolsmasher.svg` contains zero `<view>` elements) | **CRITICAL** | p1c5 T4 poster end-state paints blank (52px empty block under final para). Kills the "reads finished" requirement. |
| U1b | → `#idol-flame-seal` (p1c6 end seal) | ✅ | `<symbol>` | ❌ | **CRITICAL** | p1c6 end seal blank. |
| U1c | → `#idol-quarters-seal` (p1c7 end seal) | ✅ | `<symbol>` | ❌ | **CRITICAL** | p1c7 end seal blank. |
| U1d | → `#idol-fraus-seal` (p1c8 end seal) | ✅ | `<symbol>` | ❌ | **CRITICAL** | p1c8 end seal blank. |
| U1e–i | → `#idol-phase-0/1/2/3/4` (p1c7 plate-heads) | ✅ ×5 | `<symbol>` ×5 | ❌ | **MAJOR** | All five p1c7 phase-disc markers blank (15px empty inline blocks + 0.6em gaps — visible holes mid-line). |
| U1j–l | → `#idol-sigil-cage/tiers/fraus` (p1c8 margin seals) | ✅ ×3 | `<symbol>` ×3 | ❌ | **MAJOR** | All four p1c8 margin seals blank (16px floats collapse; the −2.4rem margin offsets remain as phantom indents on desktop). |
| — | `book.css` → `../art/seal-ring.svg` (×2, opener seal + end seal) | n/a whole-file | whole-file load, no fragment | n/a | ✅ SAFE | Whole-file `content:url()` paints correctly. No risk. |
| — | `hammerfall.css` data-URI arcs (×2, p1c3/p1c4 dividers) | n/a inline | inline data URI | n/a | ✅ SAFE | Inline SVG, no external fragment. (Minor: fixed `#D29A4A` in the data-URI won't follow sepia/light `--tw-bronze` remaps — cosmetic, LOW.) |
| — | untimelydusk `<view>` anchors | — | — | ✅ 10 real anchors (`dusk-*-view`) | ✅ SAFE (pattern proven) | No untimelydusk CSS exists yet to use them; when written it must address the `-view` ids (see repair R-U1). |
| X1 | untimelydusk.svg line ~2 `<view id="<symbol>-view">` | — | — | — | NONE (false positive) | This regex hit is the header COMMENT text "`<view id="<symbol>-view">`" describing the convention — not an element. Verified: actual `<view>` elements are the 10 well-formed `dusk-*-view` anchors. No malformed markup. |
| X2 | untimelydusk.svg "anonymous `<symbol>`" regex hits (×4) | — | — | — | NONE (false positive) | All four hits are the literal strings "`<symbol>`" inside the header COMMENT (prose about "14 `<symbol>` elements", "bare `<symbol>` ids"). Every real `<symbol>` element in the file carries an id. No anonymous symbols. |

**url() verdict: U1 FAILS — 12 of 12 idolsmasher fragment references paint blank in Chromium.** The ids all exist (resolution ✅) but none has a `<view>` anchor (paint ❌). This is the single largest defect in the cohort: it blanks 4 end-seals, 5 plate-heads, and 4 margin seals — i.e. most of idolsmasher's in-reading art. Repair R-U1 (supervisor, owns the art file): add 12 `<view id="<symbol>-view" viewBox="…">` anchors to `art/idolsmasher.svg` (copying each symbol's viewBox — all four seals 0 0 48 48; phases/sigils 0 0 24 24) and rewrite the 12 `content:url()` references to the `-view` ids. Proven pattern exists in the same book (`untimelydusk.svg`). Estimated: 30 lines SVG + 12 one-word CSS edits.

---

## 5. Contract checklist (READER-CONTRACT v1.1)

| # | Rule | Evidence | Verdict |
|---|---|---|---|
| C1 | Book CSS unlayered (beats `@layer shared`) | `book.css`, `hammerfall.css`, `idolsmasher.css`, `theme.css`: zero `@layer`/`@import` rules (the one "@layer shared" hit is a prose comment in idolsmasher.css header) | ✅ PASS |
| C2 | No `reader-*` classes minted by books | Zero `\.reader-[A-Za-z]` matches in all four book CSS files | ✅ PASS |
| C3 | No shared-file edits by book teams | `git status`: `shared/reader.js`, `shared/reader.css`, `shared/art.css`, `scripts/*` ARE modified — but the diff is ReaderLead's v1.1 contract work (manifest/symbol pipeline, slots, `reader:chapter` event), contains zero Twilight references, and predates/is independent of cohort delivery. No cohort file touches shared paths. | ✅ PASS (with note: the working-tree shared edits belong to ReaderLead's contract track, not to Twilight) |
| C4 | Manifest schema v1.1 (`{src, symbol}` A.2 form) | `chapters.json` v1 + all 12 entries use `{src, symbol, class, motif}`; `reader.js` A.2 code path verified present and correct (child-splice, symbol viewBox). `cover` uses whole-file form (legal). `default: {class}` legal. | ✅ PASS |
| C5 | JS hook `reader:chapter` only (no polling/patching) | `index.html` ships NO book-owned JS yet (only `BOOK_CONFIG` + `reader.js` script tags). The p1c10 raid-tagger JS lives in `design/prototype.html` (2 `reader:chapter` listeners, event-driven, no polling) awaiting supervisor integration into `index.html`. No shared internals patched anywhere. | ✅ PASS (integration pending = supervisor's known TR3 carry-over, not a cohort defect) |
| C6 | Book CSS keys off §2 hooks / §8 tokens | All cohort rules scoped under `body[data-chapter="…"]`, `body[data-art="…"]`, `#chapter-art`, `#cover-art`, `#toc-list`, or token overrides. One exception class: `theme.css` (PRE-EXISTING supervisor shell, not cohort work) restyles shared chrome unqualified (`.cover-bg`, `.meta-title`, …) — flagged for integration, see I1. | ✅ PASS for cohort files; ⚠️ I1 for theme.css (supervisor-owned) |
| C7 | Zero border-radius on identity furniture | One `border-radius: 50%` in `book.css:336` — the p1c10 raid-tick ring (a sounding-ring rendered in CSS; exempt by design — it IS a ring, and the contract's "zero radius" targets card/chrome furniture). One `border-radius: 0` in hammerfall.css (tablets — compliant). | ✅ PASS |
| C8 | No `!important` in book CSS | Zero in the three design files. `theme.css` has 2 (print guards — matches the contract's print-exception allowance). | ✅ PASS |
| C9 | Fonts via owned files + fallbacks; display via `var(--font-display)` | All display rules use `var(--font-display)` with Cinzel-first stacks; every cohort rule carries system fallbacks. ⚠️ Cinzel still absent from `index.html` fonts link (TR1 — supervisor integration item, verified still open). | ✅ PASS for cohort files; TR1 open (supervisor) |

### Integration conflicts the supervisor must resolve (not cohort defects)

| # | Conflict | Specificity math | Effect if merged naively | Repair |
|---|---|---|---|---|
| I1 | `theme.css` (old FALLING DUSK shell) vs `book.css` (new STRUCK BRONZE shell) both style `.chapter-meta::before`, `p:last-child::after`, drop-caps, TOC, cover | theme per-chapter `body[data-chapter="p1cN"] …` (0,2,1) BEATS book generic `body[data-chapter] …` (0,1,1) regardless of order | Old glyph ticks (▼❖○…) and glyph end-marks would override the new `display:none` reserve + seal-ring `url()` end-marks. The book would render a hybrid of two art directions. | Supervisor's planned shell replacement (book.css supersedes theme.css DUSK blocks) must DELETE the theme.css `.chapter-meta::before` glyph block (lines ~180–202), the three end-mark blocks (~227–251), and reconcile drop-cap/TOC/cover rules. Do not merge additively. |
| I2 | p1c2 title size: `book.css` TR5 whisper `clamp(1.15rem,2.6vw,1.6rem)` vs `hammerfall.css` `clamp(1.5rem,3.4vw,2rem)` | Same specificity; hammerfall loads after → hammerfall wins | The ArtDirector-approved TR5 whisper (visible in `read-p1c2-1440.webp` evidence) would be upsized ~30% at integration. | Supervisor decides: EITHER keep hammerfall's larger size (then TR5 evidence is stale and the critique's "whisper" sign-off needs re-review) OR (recommended) cut hammerfall's `font-size` line and keep book.css whisper + hammerfall's tracking/air. One-line fix; flag for R2 reviewer either way. |
| I3 | `#meta-number` (hammerfall p1c1, id selector) vs `.meta-number` (book.css all-chapter, class selector) | Both `display:none`; redundant, harmless | None. | No action (or delete hammerfall's line at merge for tidiness). |

---

## 6. Missing-work inventory (for the supervisor, not fails against delivered cohorts)

| # | Gap | Detail |
|---|---|---|
| M1 | **No `design/untimelydusk.css`, no `design/untimelydusk.json`** | p9–p12 opener symbols exist in `art/untimelydusk.svg` (rings 9–12 verified above) and manifest entries exist, but there are no reading treatments: no p1c9 dancing-baseline, no p1c10 raid-pip CSS (only book.css's generic raid-tick ring; the 5 authored `dusk-raid-*` pips + `dusk-seal` + 4 TOC pips have no CSS addressing them), no p1c11/p1c12 treatments beyond book.css's percent-rule title. The Dusk lead (TwilightDuskLead, running) presumably owns these. The p10 raid-marker JS in prototype.html covers only the generic ring ticks. |
| M2 | TR1 (Cinzel in build) still open | `index.html` fonts link has Cormorant + DM Sans only. Supervisor integration item. |
| M3 | Book-owned raid-tagger JS not in `index.html` | Lives in `design/prototype.html`; supervisor carries it into `index.html` at integration (contract-sanctioned `reader:chapter` listener). Until then, p1c10 markers render only in the prototype. |

---

## 7. Taste pass (frontend-design / visual-critique vs evidence + T1–T6/TR1–TR6)

Evidence viewed (9 of 13): `cover-1440`, `read-p1c1-1440`, `read-p1c2-1440`, `read-p1c5-1440`, `read-p1c10-1440`, `read-p1c10-raid03-1440`, `read-p1c12-1440`, `read-p1c12-end-1440`, `toc-1440`, `read-p1c1-390` (10 incl. phone). Not viewed: `cover-820/390`, `read-p1c1-820` (same compositions as viewed counterparts per critique R1 notes).

### What meets the homepage benchmark bar (observed in evidence)

- **Cover** (`cover-1440`): struck-disc emblem (idol face + fork + rings + BECOME HARD inscription) is genuinely beautiful; monumental Cinzel stack, bronze rule, whisper caption, single-diamond eyebrow all hold. No overflow at 1440; phone cover per R1 stacks with dignity.
- **TOC** (`toc-1440`): inscription-wall composition, Cinzel numerals, bronze read-rings, part plate. Matches the bar.
- **p1c1/p1c2/p1c12 openers**: Cinzel display + bronze drop-caps + ring seals read monumental-and-calm; p1c2 whisper treatment (TR5) is correct in evidence; p1c12 diamond end-state + inscription close with finality (T4 satisfied for p12 in the shell; emblem pending).
- **p1c10 raid grammar** (`read-p1c10-1440`, `raid03` close-up): RAID 01 label clears the drop-cap (micro-note fixed), ring-on-hairline dividers hold mid-chapter. T3 mechanism proven.
- **Phone p1c1** (`read-p1c1-390`): clean stack, no horizontal overflow, drop-cap + seal scale correctly, meta wraps with dignity.

### What still fails or is unverifiable (concrete, ordered by severity)

1. **F1 — Chapter openers render WITHOUT emblems in all evidence (TR4 open).** Every `read-*` screenshot shows an empty-by-design slot (hidden, zero gap). The critique's benchmark note stands: "the chapter openers (pre-emblem) do not yet [match the bar] — TR4 is where that gap closes." This audit verifies the 12 emblems EXIST with honest ring counts and resolvable symbols — but no rendered-with-emblem screenshot exists yet. The single highest-value next artifact is a re-rendered `read-p1c1/p1c5/p1c12-1440` WITH slots filled. (Supervisor integration + Dusk CSS, then re-screenshot.)
2. **F2 — idolsmasher's in-reading art will paint blank (U1).** Even after integration, p5–p8 chapters lose 4 end-seals + 5 plate-heads + 4 margin seals to the bare-symbol defect. A p1c7 evidence shot today would show five 15px holes mid-line and a missing end seal. Must fix (R-U1) BEFORE any R2 render claims for p5–p8.
3. **F3 — p9–p12 have no reading treatments (M1).** p1c9/p1c11 will render as plain shell chapters (title + body + generic seal) with only the opener emblem differentiating them; p1c10's authored raid pips/seal/TOC pips are dead art until CSS lands. Against the "every chapter has a deliberate, recorded treatment" bar, the book is 8/12 treated.
4. **F4 — Display type in the served build is Cormorant, not Cinzel (TR1, confirmed still open).** Evidence shots show Cinzel (prototype), but `index.html` has no Cinzel link — any screenshot taken from the served build today fails the typography row. Integration-gated, not a cohort defect.
5. **F5 — p1c5 two-voice impurity (G2).** Stages 4–6 will render italic/indented inside the aside-styled fused paras. Minor; disclosed; acceptable for R2 but should be listed as a known imperfection, not discovered by the validator.
6. **F6 — p1c3/p1c4 arc-divider data-URIs use fixed bronze.** On sepia/light themes the dividers stay `#D29A4A` while `--tw-bronze` darkens — a subtle inconsistency. LOW; fix by `currentColor`-ising the data-URI or accepting.
7. **Copy/typography nits (observed in evidence, all minor):** TOC drawer "Filter chapters…" + stats line are shared chrome (fine); p1c12 meta line "≈2 MIN · 153 WORDS" duplicates the header chapter title (TR2 cut the in-opener echo; the header/opener pairing is shared behavior — acceptable); raid03 close-up shows healthy rag and no orphans. No AI-slop markers (no em-dash abuse beyond Nietzsche's own "—", no buzzwords, no invented stats — word counts match TOC).

### T1–T6 / TR1–TR6 scoreboard

| Condition | Status after this audit |
|---|---|
| T1 honest ring counts | ✅ VERIFIED 1–12 in source (this audit §1) |
| T2 Cormorant reclamation | ✅ Argument present in ART-DIRECTION.md; body reads calm in evidence |
| T3 p1c10 raid markers | ✅ Mechanism proven in evidence; ⚠️ authored pips await Dusk CSS (M1) |
| T4 poster end-states p5/p12 | ⚠️ p12 ✅ in shell; p5 end seal BLOCKED by U1 |
| T5 engraved-noon separation | ✅ p1c5 noon centre is bronze line-work only (verified in symbol source: radial ticks + dot + rings, zero fills) |
| T6 supervisor REVISE first | ✅ Applied per R1 (boxed emblem/title-wrap/fleuron fixes visible in evidence) |
| TR1 Cinzel in build | ❌ OPEN (M2 — supervisor) |
| TR2/TR3/TR5/TR6 | ✅ PASS per R1 + re-verified in refreshed evidence |
| TR4 first emblems | ⚠️ ART EXISTS (this audit), RENDER pending (F1 — supervisor integration + re-screenshot) |

---

## 8. Verdict: **REVISE** (concrete repairs below)

The cohort artwork is genuinely strong — 12/12 honest ring counts, 12/12 resolvable symbols, every paragraph selector landing on its claimed target, full contract conformance — but the book cannot pass while its core in-reading art paints blank (U1), its p9–p12 treatments don't exist (M1), and no with-emblem render has been reviewed (F1). None of these are design failures; all are integration/completion gaps with known owners.

### Repair requests (ordered; owner in parens)

1. **R-U1 (Supervisor, CRITICAL):** Add 12 `<view>` anchors to `art/idolsmasher.svg` (4 seals @0 0 48 48, 5 phases + 3 sigils @0 0 24 24, copying each symbol's viewBox) and rewrite the 12 `content:url(…#idol-…)` references in `design/idolsmasher.css` to the `-view` ids. Re-verify: zero `url(#bare-symbol)` remains; grep `content:url` × file for all book CSS.
2. **R-M1 (Dusk lead, MAJOR):** Deliver `design/untimelydusk.css` + `design/untimelydusk.json`: p9/p11/p12 reading treatments, p10 raid-pip/seal/TOC-pip wiring via the existing `dusk-*-view` anchors (NOT bare ids), p12 verdict end-state. Must not duplicate or restyle cohort-owned symbols.
3. **R-I1 (Supervisor, MAJOR):** At theme integration, DELETE (not override) the old FALLING DUSK blocks in `theme.css` (glyph ticks, glyph end-marks) and reconcile drop-cap/TOC/cover rules — do not ship a two-direction hybrid.
4. **R-I2 (Supervisor, MINOR):** Resolve the p1c2 title-size conflict: keep book.css TR5 whisper (recommended) by cutting hammerfall's `font-size` line; tell the R2 reviewer which size shipped.
5. **R-D1 (Supervisor, MINOR):** Update `book-identity.json` + ART-DIRECTION.md motif table for p5–p8 to the shipped `idol-*` symbols / `noon-collapse / shears-flame / fourfold-knot / veil-tablets` motifs; fix "44 maxims" prose to served-true "30 stanzas" (N1).
6. **R-TR1+M3 (Supervisor, known):** Cinzel fonts link + raid-tagger JS into `index.html` at integration; re-probe computed styles.
7. **R-F1 (Supervisor + validator, gate for PASS):** After 1–6, re-render `read-p1c1 / read-p1c5 / read-p1c7 / read-p1c12 @1440` (+ p1c1 @390) WITH slots filled from the served build and attach as R2 evidence. PASS requires viewed with-emblem renders, not just resolvable symbols.

### Re-review commitment

Re-review corrections when asked. This auditor's re-review will require: (a) the R2 evidence renders, (b) a grep proving zero bare-symbol `url()` fragments, (c) the Dusk CSS/JSON delivery. No implementation files were touched; no coverage is claimed beyond what §1–§7 document.

---

*Evidence paths: source files under `books/twilight-of-the-idols/` as cited; screenshots in `books/twilight-of-the-idols/design/evidence/` (10 of 13 viewed, listed in §7). Ring counts by regex class-token census, cross-checked with element-level inspection. Paragraph ledes verbatim from served chapter JSON.*
