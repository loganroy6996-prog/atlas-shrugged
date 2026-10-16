# Sovereign Individual — Supervisor integration ledger

Book: `sovereign-individual` · Identity: SPECIE — The Private Banknote · Supervisor: SupSovereign-3.
Cohorts: A-rupture (p1c1–p1c4) · B-dissolution (p1c5–p1c8) · C-reckoning (p1c9–p1c11).

## Merged sources (sequential, supervisor-owned)

| # | Source | Into | Date | Notes |
|---|--------|------|------|-------|
| 1 | `design/cohort-a.json` (A-rupture) | `design/chapters.json` p1c1–p1c4 | 2026-10-15 | src/class/motif/caption per contract §4 |
| 2 | `design/cohort-c.json` (C-reckoning) | `design/chapters.json` p1c9–p1c11 | 2026-10-15 | + p1c7 knot-mesh (pre-existing plate) |
| 3 | `design/prototype-shell.css` | `theme.css` §§1–3,5,11–12 | 2026-10-15 | SPECIE shell: tokens, cover, opener grid, TOC, assay |
| 4 | `design/cohort-a.css` | `theme.css` §§4,6–8,10–12 | 2026-10-15 | ink leads, heads, epigraphs, A-specials, end-marks, TOC strikes, turners |
| 5 | `design/cohort-a.classifier.js` | `sovereign.js` | 2026-10-15 | extended: B/C attribution stoplists, C epigraphs/appendix/tail, p1c9 transitions |
| 6 | `design/cohort-c.json` reading specs | `theme.css` §9, `sovereign.js` | 2026-10-15 | transitions, trade card, assay table, hour ticks, seal findings, archive tail |
| 7 | `design/cohort-b.json` + `cohort-b.css` + `cohort-b.classifier.js` | `chapters.json` p1c5/p1c6/p1c8 + `theme.css` §8b + `sovereign.js` | 2026-10-15 | 11/11 manifest; B ink leads/end-marks/strikes; stamp/cut-rule/prize/verse/enum/trailer/runin/quote-lede tags |

## Supervisor repairs during integration (all render-verified)

- SR1 (director): shared progress-tip diamond suppressed (`.progress-fill::after`).
- SR3 (director): TOC active row = engraved rule + seal-bar; hover mini-mark strikes for all 11.
- Meta-rule: shared diamond + side hairlines replaced by the 4rem copper assay channel.
- `sv-attr` reunion scoped to verified pairs (`sv-attr-pair`); standalone
  attributions keep own margins via `sovereign.js` stoplists.
- `QUOTE_PAIRS` regression (dropped map → classifier threw, zero heads tagged):
  caught by live console check, restored, re-verified (caps counts match census).
- Paper themes: SPECIE tokens scoped to the dark family; sepia/light re-ink the
  palette (§1 remap) + plate vars; btn/search/plate-bg hard-codes fixed.
- Adjacent epigraphs (p1c9 [0–1]) frame as one block (seam rule removed).
- p1c9 transition ornament (a): clip-path shuttle failed to paint (invisible);
  replaced by flat copper/seal bar pair. All three ornaments viewed rendered.
- Validator R2 muted 3.42:1 → faint lifted (#94865e dark, #6b5a40 paper);
  meta-sub/toc-sub re-pinned to muted. Metered dark: sub 7.26, caption 5.49.
  Metered sepia: body/title 13.94, caps 5.14, sub 6.43, caption 5.64.
- Validator R2 sans probe gap → REAL defect found + fixed: SANS changed storage
  but not computed style. Now `html[data-font="sans"]` swaps the reading stack
  to Archivo/DM Sans; display stays Bodoni; 7 treatment families key off
  var(--font-serif). Verified click→read→reset.
- Drop cap inside epigraph frames (p1c5/p1c8) suppressed.
- Cohort B merge deviations from cohort-b.css (recorded): p1c5 quote-lede pairing
  uses supervisor sv-attr-pair (not cohort margin-top:0 override); p1c6 sv-enum
  override pins body 1.125rem/serif-token against the p1c2 run-in rule; p1c6
  CAMPEN [265] keeps own margins (two-line tail) while [264] pairs.

## Index-verification record (0-based, against served data JSON)

- Cohort C 1-based nth-of-type maps converted (−1) and spot-verified: p1c9 all 18
  major heads; p1c10 majors + attribution [118]; p1c11 majors + appendix + tail
  headers [289/317/345/391/461/488/543/568/608/739/781/824]; p1c11 tail start 288.
- Full caps census run for p1c5–p1c8; stoplists verified in context.
- Cohort B maps verified: epigraphs p1c5[0]/p1c6[1]/p1c8[0]; enums 14/14 numeral-led;
  stamps 4 + stamp-head; cut-rule [221]; prizes [6,7,8,9]; verses [193–195];
  runins [20,22,24,27]; trailers [285,286]; quote-ledes [97/263/41/84]; title-head
  p1c6[0]. Three "MISS" probes resolved as fragment-text (not index errors).
- Live tag counts: p1c1 6/20 · p1c2 4/9 · p1c3 3/7 · p1c4 7/29 · p1c5 4/11 ·
  p1c6 6/27 · p1c7 11/33 · p1c8 8/27 · p1c9 18/36 · p1c10 5/14 · p1c11 5/14.
  p1c9 +1 title is the cohort-B stopword extension matching "Defection from
  Citizenship" (verified head, cohort-c.json #44).
- Live B-specials census: p1c5 epi1/pull1/lede1/pair2/stamp4/stamp-head1/rubric1;
  p1c6 epi1/flint1/lede1/pair1/cut1/enum14/trailer2/quote-head1;
  p1c8 epi1/lede2/pair2/prize1/wrap1/rows2/verse3/runin4/quote-head3.

## Open items (not supervisor-deferrable)

- Cohort-B validator verdict: lead still running its independent validator spawn
  (job slots full); supervisor completed lead-level verification instead (plate
  audits S2/S3/S5 + index verification + full render pass). Verdict appended if
  it lands before Main's integration.
- p1c4/p1c7 rosette mid-tones (authored pale strokes) → held: cohort-owned, S1
  zoom-passed at prototype.
- TOC numerals show arabic (data `roman` fields are "1".."11"); SPECIE wants
  I–XI. Data is Main-owned; request romanization or accept arabic.

## Closeout (2026-10-15, post-R3)

- p1c9 epigraph join CONFIRMED on cache-fresh bytes: gap 0px, e1 margin-top
  −24px, border-top 0. Validator's R3 hairline was stale CSS (accepted as
  non-defect either way).
- Paper-theme audit from the fresh sepia tab: sv-trade + nav-btn dark
  hard-coded backgrounds re-pinned to var(--bg-soft)/var(--bg-elevated).
  Trade card metered dark 6.12:1 after fix.
- Cohort-B lead YIELDED (1h45m): designer (23m45s) + engineer (18m1s + p1c6
  knockout repair) delivered all 7 owned files; classifier simulation exact;
  82/82 labels byte-verified; S1–S8 lead-verdict all PASS (S7 N/A).
  Independent library-validator spawn BLOCKED 14× on global job-limit 16 —
  lead-level verification stands per supervisor order, accepted at
  FinalValidator R3. Verdict recorded honestly as lead-substituted, pending
  independent re-shoot if a slot frees.
- Main ruling (TOC numerals): data roman fields stay arabic (Main-owned
  provenance); I–XI renders book-side via sovereign.js romanizeToc (text
  transform, idempotent, cover + chapter hooks). Verified live: TOC reads
  I–XI. Polish, not a gate; CONDITIONAL PASS stands.
