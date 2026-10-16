# Will to Power — Coverage & Review Ledger (supervisor-owned)

Live URL: http://127.0.0.1:8099/books/will-to-power/ · Contract: READER-CONTRACT v1.1
Identity: "The Black Notebook" (ART-DIRECTION.md + book-identity.json, ArtDirector PROVISIONAL PASS W1–W6 + Q2)

## 1. Merge record (design/chapters.json v1.1 symbol form)

Canonical `design/chapters.json` merged sequentially by the supervisor from the five
cohort JSONs on 2026-10-15. 52/52 TOC ids keyed, every `{src, symbol}` pair verified
against its sprite file (all symbols exist; all sprites XML-valid, zero gradients):

| Cohort | Chapters | Sprite | CSS | JS class hooks |
|---|---|---|---|---|
| early (Preface + Book I) | p1c1, p2c1–p2c8 (9) | art/early.svg (18 symbols) | design/early.css (landed) | .wtp-fleuron, .wtp-fragnum, .wtp-nbmark, data-inscription |
| critique (Book II) | p3c1–p3c15 (15) | art/critique.svg (21 symbols) | design/critique.css (supervisor-authored — engineer file never landed) | .wtp-fleuron, .cri-inscription, .cri-rule-fragment, .cri-relief, .cri-endseal, .cri-tablet-sub, .cri-movement, .wtp-toc-atom, .wtp-nav-signet |
| knowledge (Book III/1) | p4c1–p4c13 (13) | art/knowledge.svg (16 symbols) | design/knowledge.css (landed) | .know-fleuron, .know-sub, .know-band, .know-inscription |
| nature (Book III/2) | p4c14–p4c19 (6) | art/nature.svg (6 symbols, supervisor-authored — engineer file never landed) | design/nature.css (supervisor-authored — engineer file never landed) | .nat-fleuron, .know-sub (converged), .nat-band, .nat-inscription, .nat-nb-mid, .wtp-fragnum |
| crown (Book IV) | p5c1–p5c9 (9) | art/crown.svg (12 symbols) | design/crown.css (landed) | .crown-fleuron, .crown-relief, .crown-inscription, .crown-step-rule, .crown-exhibit-tag, .crown-seal, .crown-colophon |

Cover: art/cover.svg (supervisor-authored ring+hammer plate, manifest `cover.src`,
whole-file, no symbol) → #cover-art. Shell: theme.css (Black Notebook tokens,
cover composition, calm body, header/progress, TOC book-plates, nav/settings) +
design/book.js (single supervisor insertion script, reader:chapter-driven).

Fleuron census (authored indices ONLY, W3 — zero modulo/nth-child generation):
early 56 · critique 116 · knowledge 19 · nature 76 (corrected, §N1) ·
crown 59 = **326 markers book-wide**, each index range-validated against served
paragraph counts (validation script run 2026-10-15, zero out-of-range).

## 2. Nature cohort index repair (§N1 — binding supervisor ruling)

nature.json's `index_basis` claims 0-based indices, but EVERY anchored position in
the file is systematically +1 (the designer counted 1-based § numbers):

- Proof: all 76 fleuron `opening_words` anchors resolve at `index − 1` (verified by
  prefix search over served paragraphs; 76/76 unique hits, zero ambiguous).
- Sub-notes: all 35 `opening_words` anchors resolve at `index − 1` (35/35).
- Start-anchored NBs claimed at p4c15[59,134], p4c17[11,64], p4c18[53,56,74],
  p4c19[90] — true positions are [58,133], [10,63], [52,55,73], [89] (each verified
  startswith "NB."). The shared .reader-nb classifier fires from live text, so no
  book data needed repair — only the ledger records the correction.
- Mid-paragraph NBs: p4c15 "§28" → true [27] ("…the weaker. NB. Processes
  considered as 'beings'."); p4c18 "§68" → true [67] (tail sentence "…priests and
  philosophers) were subtle and psychologi… NB. …" — the designer's "verify exact
  wording at build" note acknowledged the uncertainty; book.js tags true [67]
  with .nat-nb-mid and styles bar+marker identically).
- Bands: p4c15 membrane band "§99" → after true [98] ("Will to Truth.
  Interpretation." verified); p4c19 spiral band "§149" → after true [148]
  ("What is tragic. I have repeatedly…" verified). Relief AFTER-indices in book.js
  are the corrected values; RELIEFS table documents the mapping.
- nature.json on disk is UNCHANGED (cohort artifact preserved); book.js carries the
  corrected tables with a pointer to this section. No other cohort needed repair:
  early (spot-checked), critique (116/116 anchors verified), knowledge (19/19),
  crown (indices in-range + rationale-consistent) are correct as authored.

## 3. Supervisor decisions (design authority)

- D1. p4c19 finale band APPROVED (nature.json "RECOMMENDED, supervisor to approve"):
  172 fragments earn one rest-point at the tragedy hinge [148]; rendered as the
  .nat-band spiral arc (plate-c19 reuse), art-only, margin-separated.
- D2. Knowledge end-seal `k-seal` NOT auto-appended: knowledge.css's
  `p:last-child::after { content: url("../art/knowledge.svg") }` inlines the whole
  16-symbol sprite file as an image (a no-op/fallback render, harmless); the Book III
  end-mark grammar is carried by nature's lens-dot seals + the p4c11 band. No action.
- D3. Critique p3c9 rule fragment uses the curly-apostrophe form "not for everyone’s
  ears" (verified verbatim at p3c9[0]); the straight-quote JSON form never appears
  in-text. All 13 rule fragments verified verbatim in-chapter before shipping.
- D4. Early p2c8 keeps its single permitted rule-crossing; p2c6 carries no sulphur
  in art (W2 rationing honored).
- D5. Cover figcaption is visually hidden (archival plate, not a labeled exhibit);
  chapter captions render per cohort CSS.

## 4. Review ledger

| Date (UTC) | Reviewer | Scope | Verdict | Evidence / notes |
|---|---|---|---|---|
| 2026-10-15 | SupWtP-3 (supervisor) | cover + p1c1/p2c2/p3c3/p3c4/p3c10/p4c15/p5c3/p5c9 @ 1440×1000, 820×1180, 390×844 (live :8099) | repairs applied | Screenshots viewed in-session; defects fixed: cover flex-direction (shared .view.active column override), p1c1 inscription exemption, early rule-span rotate reset, part-2 caption overlap lift, book.js header-comment + data-book guard + stale-node purges (meta nodes, data-inscription attr, nav signet), crown inscription doubling. Full 52-chapter live sweep: 52/52 art inline, 48/48 non-tablet inscriptions live, fleuron counts match authored tables. No horizontal overflow @390px. Console/network clean. |
| 2026-10-15 | FinalValidator-2 (independent R2) | assembled book @ 1440/820/390 + source census | REVISE (1 blocking + 2 minor) | Evidence: .omp/design/evidence/integration/wave3/will-to-power/REVIEW-R2.md. 52/52 manifest + activation verified; fleurons/reliefs/seals/TOC program check out live. (1) BLOCKING crown-inscription doubling — already fixed in served build before R2 was written (verified live: p5c9 textContent empty, ::before renders once; stale book.js in review). (2) minor p4c15 fleuron/band collision — FIXED via band-boundary suppression in addFleurons (verified live: p4c11 F1+band[60], p4c15 F11+band[98], p4c19 F18+band[148]; full audit: only these three exact-collide). (3) p2c2 title truncation routed to Main (source-data shape). Meta-purge pattern verified correct. R3 requested. |
| 2026-10-15 | WtpAssembledValidator (independent library-validator) | assembled book, all checks §Phase-D (30 evidence webp) | REVISE (2 major D1–D2 + 3 minor D3–D5 + 1 note D6) | Evidence: .omp/design/evidence/will-to-power/. D1 missing --wtp-display (cover mono, not Fraunces) — FIXED (one token line; cover/TOC-plates/drawer/settings/drop-cap now Fraunces, verified computed + screenshot). D2 themes visually dead (body-descendant token scope hid --bg from applyPrefs :root read) — FIXED (re-scoped to html[data-theme] + paper re-ink of --wtp-* AND cohort prose tokens + header color-mix; Vellum verified live: parchment wash, ink prose/titles, Sulphur-Deep chrome ≥4.5). D3 sans toggle dead — FIXED (system sans branch, verified computed). D4 390px overflow on p1c1/p2c2 — FIXED (stacked rule + balanced inscription; 6-chapter phone sweep 390=390). D5 ednums dead (leading-pattern never occurs; real numerals are glued tails, 242 matches incl. 6 ruled-true) — FIXED (glued-tail pass; p2c2/p3c4/p4c15 live counts verified, Ash no-Sulphur). D6 composition-prose mismatches (p3c3 stacked-not-overlap, p2c2 ring-above-not-behind) — recorded as shipped-truth, prose to be amended. Re-verification requested. |
| 2026-10-15 | FinalValidator-2 (independent R3) | assembled book @ 1440/820/390 + census | REVISE (1 minor; all R2 claims verified) | Evidence: .omp/design/evidence/integration/wave3/will-to-power/REVIEW-R3.md. Verified: p5c9 inscription once, collisions resolved, end-seal/colophon correct, cover/tablet/TOC/keyboard/progress/resume/console/F15 pass, zero overflow. Item 4 (small-chrome contrast) — FIXED: text-only `-chrome` lifted twins in theme + all 4 cohort layers (Pencil 4.70, Gloom 5.30, Blood 5.21, Verdigris 5.20, Heights 5.64; art inks canonical for plates/borders), meta-sub floor lifted to Ash 7.32. Live meter: p2c2/p3c3/p4c15/p5c3 small chrome all ≥4.70. R4 requested. |
| 2026-10-15 | FinalValidator-2 (independent R4) | contrast meter + Tab/A6 + F15 + R3 regression | CONDITIONAL PASS — book done | Evidence: .omp/design/evidence/integration/wave3/will-to-power/REVIEW-R4.md. Contrast confirmed to the digit on validator's own meter (all pass); R3 items hold; F15 zero 404s. Carried-to-integration items (not book defects): t-key pollution, 36px headers, settings backdrop-click, F13 hook. Validator standing down. |
| 2026-10-15 | WtpAssembledValidator (re-verification) | D1–D5 fixes on rebuilt live build | CONDITIONAL PASS (D1/D3/D4/D5 closed; D2 split) | 6 new evidence webp. D2 remainder split: D2c cover-ink on paper — FIXED (D2c cascade extended to shell + all chrome twins; Vellum cover meters title 14.93/eyebrow 7.07, p3c3 reader all ≥7.07, screenshot-verified). D2b one-click-stale wash — WITHDRAWN as defect: SupChurchill-3 corrected the shared-timing report (synchronous swap already landed in reader.js paintTheme); cache-disabled retest confirms light/sepia/dark clicks paint correct washes immediately (3/3). D2 FULLY CLOSED. Check 6-themes: PASS. |
| 2026-10-15 | WtpAssembledValidator (clean-cache retest) | D2b/D2c on fresh build, cache disabled | FULL PASS — book done | Evidence: .omp/design/evidence/will-to-power/wtp-re2-*.webp. D2b retracted as stale-reader.js artifact (Vellum/Sepia/Nocturne/Ink clicks each paint correct wash immediately, :root matching); D2c independently verified fixed (Vellum cover title rgb(36,28,16), Fraunces, screenshot-legible). Terminal yield amendment to Main follows from validator. All book items closed on both independent tracks. |
| — | ArtDirector (Phase B prototype review) | cover plate + 5 part plates + p1c1/p3c4/p3c10/p4c15/p5c3 + NB spread @ 3 viewports | REQUESTED on delivery | W6 scope is live at the URL above; supervisor screenshots supplement but do not replace director review. |

## 5. Chapter manifest (per-chapter treatment record)

Key: O=opener (S standard / Q quiet-long / T tablet), plate symbol, inscription
(LIVE counts), F=fleurons, R=relief, S=seal, NB=start-anchored NB count.

p1c1 T early-p1c1 "5 FRAGMENTS · 373 WORDS" F0 R– S(early data-seal) NB0
p2c1 S early-p2c1 live F1(4) NB0 · p2c2 S early-p2c2 live F7 NB0
p2c3 S early-p2c3 live F8 NB0 · p2c4 S early-p2c4 live F7 NB0
p2c5 S early-p2c5 live F2 NB0 (terminal-question air [13])
p2c6 S early-p2c6 live F11 NB3[13,38,45] · p2c7 S early-p2c7 live F10 NB1[53]
p2c8 S early-p2c8 live F10 NB1[0] (drop-cap yields to NB; rule-crossing)
p3c1 T cri-tablet-crack no-inscription (BOOK II · PART-TITLE TABLET sub-line)
p3c2 T cri-crack-light no-inscription (thesis-stone aphorism)
p3c3 S cri-split-self live F8 + rule fragment NB1[47]
p3c4 Q cri-altar-slabs live F17 + rule + relief[80] + seal NB3[44,45+spread,114]
p3c5 S cri-eroded-word live F12 + rule NB1[75]
p3c6 S cri-specimen-slab live F11 + rule NB0 · p3c7 S cri-herd-band live F5 + rule NB2[13,14+spread]
p3c8 S cri-snapped-chain live F6 + rule NB2[26,38]
p3c9 S cri-stage-flat live F6 + rule NB0
p3c10 Q cri-warp-slash live F21 + rule + relief[79] + seal NB3[10,18,134]
p3c11 S cri-seal-devoured live F5 + rule + seal NB0
p3c12 S cri-seven-wedges live F7 + rule NB1[7] · p3c13 S cri-stele-band live F10 + rule NB0
p3c14 S cri-arc-vine live F3 + rule NB0 · p3c15 S cri-hermit-lamp live F5 + rule + hermit seal NB1[7]
p4c1 T k-p4c1 no-inscription (title monument)
p4c2 S k-p4c2 live F1 · p4c3 S k-p4c3 live F1 · p4c4 S k-p4c4 live F1
p4c5 S k-p4c5 live F1 NB1[5] · p4c6 S k-p4c6 live F1 + subs[5,6]
p4c7 S k-p4c7 live F1 NB1[10] · p4c8 S k-p4c8 live F3 + subs[7]
p4c9 S k-p4c9 live F2 + subs[20] · p4c10 S k-p4c10 live F3 + subs[36,37,38] NB1[18]
p4c11 S k-p4c11 live F2[60,90] + subs(17) + band[60] · p4c12 S k-p4c12 live F0
p4c13 S k-p4c13 live F3 NB1[51]
p4c14 S plate-c14 live F5 · p4c15 S plate-c15 live F12 + subs[0,37,38,40] + band[98] NB2[58,133]+mid[27]
p4c16 S plate-c16 live F9 + subs[58,59,60,66,67] · p4c17 S plate-c17 live F10 NB2[10,63]
p4c18 S plate-c18 live F11 + subs(14) NB3[52,55,73]+mid[67]
p4c19 S-FINALE plate-c19 live F19 + subs(16) + band[148] NB1[89]
p5c1 T crown-p5c1 no-inscription (threshold door + EXHIBIT 44 OF 52 · THE BOOK'S FOURTH DOOR)
p5c2 S crown-p5c2 live F2 · p5c3 Q crown-p5c3 live F19 + relief[112] NB3[2,62,175]
p5c4 S crown-p5c4 live F8 · p5c5 S crown-p5c5 live F1 · p5c6 S crown-p5c6 live F2 NB1[1]
p5c7 S-APEX crown-p5c7 live F5 · p5c8 S crown-p5c8 live F17 + relief[68] NB1[92]
p5c9 S crown-p5c9 live F5 + starburst seal + colophon (EXHIBIT 52 OF 52)
