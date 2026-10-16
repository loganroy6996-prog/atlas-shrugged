# The Fountainhead — coverage & review ledger (THE FURNACE integration)

Supervisor: SupFountain-3. Live URL: http://127.0.0.1:8099/books/the-fountainhead/
Canonical manifest: `design/chapters.json` v1.1 (59/59 TOC ids, symbol form).
Cohort drafts merged: keating (15) + toohey (15) + wynand (9) + roark (20) = 59.

## Supervisor merge log (sequential, sole writer)
- M1 keating: adopted 15 entries incl. lead-accepted FIG overrides
  (MEDAL/STRINGCOURSE/LAMP/PHOTOGRAPH/CHECK/DOOR/ENVELOPE + STATION lead ruling).
- M2 toohey: adopted 15 entries; authored `symbol: t2-c<N>` per v1.1 A.2.
  FIG LAMP (VISITOR 0 hits — verified in prose).
- M3 wynand: adopted 9 entries; authored `symbol: w3-c<N>` per v1.1 A.2.
- M4 roark: adopted 20 entries (symbols r4-c1..r4-c18 + whole-file
  roark-cortlandt.svg / roark-ascent.svg plates). FIG TYPEWRITER + RING
  supervisor rulings Q5 accepted (FALLACY abstraction, SUMMER weak).
- Word counts: all 59 captions verified against data/toc.json (0 mismatches).

## Supervisor integration repairs (with rationale)
- R1 toohey-banner.svg / wynand-banner.svg: made chapter groups self-contained
  (copied referenced gradient defs + shared-well rects into each group).
  Cause: reader.js symbol-clones ONLY the referenced <g>; root-level <defs>
  and shared-well rects never reach the slot. Verified per-group after fix.
- R2 wynand-banner.svg: removed 9 duplicated in-SVG chainage <text> lines
  (they doubled the figcaption stamp). Kept glyphs: 9 heat numerals + 2 "I Do"
  inscriptions (prose-verified yacht name, FIG-grammar exception recorded).
- R3 theme.css: full FURNACE rewrite (758-line granite/blueprint voice deleted,
  zero trace). Absorbed cohort CSS registers (toohey/wynand/roark drafts) into
  one part-voiced shell; silenced ALL pre-FURNACE ornaments + shared fleuron/
  diamond ornaments via book hooks. End seals: Plex ◆ (F10 font-support rule;
  cohorts verified U+25C6 in Plex Mono) — part-voiced, Bronze COLD, Ember
  climaxes, p4c20 END rule state.
- R4 index.html: FURNACE font stack (Oswald/Source Serif 4/Plex Mono) + slug key.
- R5 cover: type-first ordering under 900px (was plate-first on phone).
- R6 keating-banner.svg: MISSING at handoff — library-engineer KeatingBannerArt
  authored it per cohort-keating.json (15 groups, zero <text>, self-contained,
  verified). p1c1/p1c15 fixes confirmed live after cache-bypass reload.
- R7 validator R2 contrast (FinalValidator-2 REVIEW-R2): .meta-sub lifted to
  #A89880 (6.70:1, was 3.61:1); part-2 numeral stroke ONLY lifted to #B4502E
  (3.70:1, was 2.46:1). Both metered live in-browser post-rebuild.
- R8 book-validator REVISE (FountainValidator, 7 items, all fixed + verified):
  R1 BLOCKING scoped meta-sub (#5d4a36 on Bone, 7.07:1); R2 F7 heat fills
  implemented (28 authored fill rules + 10 solid climaxes) + roman-only
  numeral via book-owned reader:chapter script; R3 Wynand 6.4rem restored;
  R4 daylight part tokens darkened (Bronze #6e5228, Gilt #7a521a, Ember
  caption→Ember-deep; all ≥5.14:1); R5 font=sans honored; R6 part-2 drop
  lifted to #b4502e; R7 TOC read-mark is now the spec Bronze ◆.
- R9 FinalValidator R3: item 3 (sepia part-line 4.20) fixed by R8/R4 tokens
  (sepia p2c1 kicker now 6.09:1, caption 5.90:1 — metered live); item 4
  (sans renders Plex Mono) RULED: token error, --font-sans now the system
  sans stack (Plex stays data-only). Sans swap verified computed system-ui.

## Coverage ledger — supervisor screenshots (all on :8099, observed by SupFountain-3)
| chapter | viewport | verdict |
|---|---|---|
| cover | 1440x1000 | PASS (asymmetric grid, tower plate, Oswald/Bronze/Ember) |
| cover | 390x844 | PASS after R5 (type-first stack) |
| p1c1 | 1440x1000 | PASS (twin-headland strata + dive arc, verified post-fix) |
| p1c7/p1c13 | 1440x1000 | PASS (distinct FIG studies) |
| p1c15 | 1440x1000 | PASS (model on hearth line, verified post-fix) |
| p2c1 | 1440x1000 | PASS (DRILL bars, arch mark, Bronze chainage) |
| p3c1 | 1440x1000 + 390x844 | PASS (HEARTH, solid Gilt, no phone overflow) |
| p3c9 end | 1440x1000 | PASS (Ember climax seal, FURNACE nav) |
| p4c1 | 1440x1000 + 820x1180 | PASS (STRATA, Ember chainage) |
| p4c19 | 1440x1000 | PASS (plate, 3 registers, XIX+NINE glyphs) |
| p4c20 | 1440x1000 | PASS (finale triptych, XX glyph, END state) |
| cover + p1c1/p2c1/p3c1/p4c1/p4c19/p4c20 | 820x1180 | PASS (zero overflow, type-first cover, all openers render) |
| cover + p1c1/p2c1/p3c1/p4c1/p4c19/p4c20 | 390x844 | PASS (zero overflow, full assignment set incl. finale triptych) |

## Cohort review record
- Cohort JSONs carried lead-accepted prose needles (verified substrings cited
  per chapter); supervisor spot-verified FIG grounding (typewriter/ring/lamp/
  leaves/masthead/glass/branch/cliff/gun all hit; VISITOR 0 hits confirmed).
- roark-cortlandt/roark-ascent plates: full-source read by supervisor; glyph
  exceptions (NINE/XIX/XX/ROARK) judged deliberate figure-labels, not badge
  numerals (F3 numeral rule governs the CSS .meta-number, which is compliant).
- Wynand numerals at 6.4rem: no overflow at 390px (art-director open Q3 closed).
- F10 diamond: Plex Mono U+25C6 path (cohort-verified); no tofu in screenshots.

## Independent validation
- Agent SupFountain-3.FountainValidator: verdict REVISE (7 items R1–R7);
  59/59 rendered census PASS, 24 states viewed, taste PASS ("one furnace
  book with four heat registers"). All 7 fixed by supervisor + verified live.
  Targeted re-verification: PASS — all 7 items independently confirmed
  fixed on build 38ccc57f (meters + screenshots in validator report).
- FinalValidator-2: R2 fixed + confirmed to the digit; R3 fixed + ruled;
  R4 CONDITIONAL PASS — sepia 6.09–6.44, system-ui sans, roman-only
  numerals verified; mixed-numeral wart forensically closed (shared
  reader.js:621 item tracked globally). Book done from final validation.
- ArtDirector track completed at Phase A verdicts per roster (no respawn);
  binding F1–F10 conformance self-checked per fix (R1–R9) + independently
  verified by both validators' taste/contrast sampling.
