# Cohorts E+F — Build Ledger (lead-executed, spec-authored design)

Owner: SupGayScience-3.GsLeadEF. Status: **v2 DELIVERED to supervisor for re-merge.**
Binding parents: `books/gay-science/design/ART-DIRECTION.md` (NOON Direction A,
§7 E/F, §10, GR1–GR7), READER-CONTRACT v1.1, supervisor book-wide rulings
(GR6 letter-led census; re-merge hold).

## 0. Atom provenance (trickle-spawn record)

- **Spec-authored** (GsCohortEFDesigner, real `library-designer` spawn,
  effort hi): `cohort-ef.md` — 3-direction comparison + EF2 choice, 16-kind
  system, 56-symbol draw-list (§4), all-109 chapter map (§5), grammar_notes,
  landmarks, Appendix §3.8. Full-prose read: all 109 chapter JSONs incl. all
  355 Appendix paragraphs (not sampled). Delivered `cohort-ef.md` +
  `prototype/ef-prototype.html` (v2 render studies).
- **Lead-executed** (GsLeadEF inline): `art/cohort-ef.svg` (all 56 symbol
  paths), `design/cohort-ef.json` (assembly from §5 + toc.json truth),
  `design/cohort-ef.css` (gs-ef- layer), harness screenshots, v2 repairs.
  Reason: engineer spawn failed **10×** on the 16-job cap (backoffs 2–10 min
  over ~50 min; siblings IJ/Sovereign/BeingTime/Churchill reported the same).
  Supervisor authorized inline execution with this provenance split; design→
  engineering sequence preserved (built FROM the spec, not around it).
- **Validator**: real `library-validator` spawn (GsEFValidator) after the cap
  cleared — verdict awaited/recorded in §6.

## 1. Files

| file | bytes | atoms |
|---|---|---|
| `books/gay-science/art/cohort-ef.svg` | ~143K | 56 self-contained `<symbol>` (own viewBox each, zero cross-symbol `<use>`) |
| `books/gay-science/design/cohort-ef.json` | — | 109/109 chapters + grammar_notes + landmarks + branch_plus + provenance |
| `books/gay-science/design/cohort-ef.css` | ~15K | EF.1–EF.7: banner/medallion/song treatments, L0→L3 stepping, Seed sparks, seal overrides, motion/containment/focus |
| `books/gay-science/design/cohort-ef.md` | 71K | designer spec (read-only for build) |
| `books/gay-science/design/prototype/ef-prototype.html` | 16K | designer v2 studies (read-only for build) |

## 2. Symbol census (spec §4 → sheet, 56/56)

5 landmarks (`gs-sunrise-forth`, `gs-hourglass-night`, `gs-cheer-shadow`,
`gs-epilogue-ring`, `gs-appendix-farewell`) + 11 `ef-branch-golden-*` + 2
golden plates + 18 `ef-branch-shadow-*` (incl. p7c1's landmark) + 7 shadow
plates + 13 `ef-med-*`. JSON↔sheet reconciliation: 56 referenced = 56
present, zero missing, zero unused (script-verified).

## 3. Chapter coverage

- part-6: 67 (7 Seed + 45 Shoot + 11 Branch + 2 Branch+ + 2 landmark-Shoots).
- part-7: 41 (15 Shoot + 17 Branch + 7 Branch+ + 2 landmark-Branches).
- part-8: 1 landmark (song class).
- Total 109/109 with toc-verbatim word counts (zero mismatches at assembly).
- Manifest entries: 102 (7 Seeds spark-only, no entry — G2).
- Weather: 67 golden / 41 shadow / 1 songbook. Motifs: all existing §10b
  vocabulary; zero new proposals. L0→L3 progression verified in chapter
  order incl. p7c14-at-L3 exception + p7c41 release.

## 4. Verification log

- XML well-formed (minidom parse); `gradient` hits 0; `<text` hits 0;
  `<use` hits 0; `#2A1540` in exactly ONE symbol (`gs-hourglass-night`, G5).
- JSON: 109/109, toc-exact counts, weights census matches spec §3.1.
- CSS: gs-ef- classes disjoint; EF.4 L-groups cover all 41 part-7 chapters
  (script-verified); seal overrides reconcile with JSON reading_treatments.
- Harness screenshots (reader.js splice emulation, /tmp — NOT in repo):
  desktop 1440×1000: p6c67, p6c66, p6c60, p6c16, p6c4, p7c1, p7c15, p7c6,
  p7c27, p7c41, p8c1 + full 56-symbol wall; phone 390×844: p6c67, p6c66,
  p7c41, p8c1. Zero horizontal overflow (scrollWidth == innerWidth) both
  viewports. Repaired-plate re-views: epilogue ×3, physics ×1, german ×1,
  medallion close-up ×1.
- Supervisor live verification (v1, :8099 1440×1000): §341/§342/Appendix
  PASS full-bleed with HTML captions; merge 448/448, 259 entries, 189 seeds.

## 5. Defects found + fixed (v2 change list)

1. §342 ray fan: ±18°/0° rays crossed the disc — reduced to 8 above-horizon
   rays (lead repair; the merged v1 landmark is unaffected in composition).
2. Epilogue dancers: stick-anatomy → rewritten as cover-grammar chunky
   figures (head + torso + 2 arms + 2 legs), ring widened rx 360→400,
   dancers replanted ON the ring; piper enlarged ×1.5 with a true gold halo
   pass behind the dark fill (the v2-study under-stroke was hidden).
3. Branch+ inscription bands: REMOVED from all 9 plates — binding GR5 keeps
   inscriptions in HTML figcaptions; the empty bands rendered as dead voids.
   Plate scenes re-grounded (physics: new floor + table + fox from a visibly
   broken cage; shadow plates: floor 470→560, bars +120, actors shifted).
4. `ef-plate-luther` invalid `r="26 18"` → `r="26"`.
5. Medallions: ring r 100→92 @cy 132 (was clipping the viewBox bottom);
   chord + sparks re-hugged; path actor recentered; lyre recentered + spark
   balance; column recentered +12x.
6. Scholar banner: desk group shifted +60x (was colliding with the L1 bar
   origin at the pinned caster x=670).

## 6. Validator record

- GsEFValidator (real `library-validator`, effort hi): **REVISE (R1) →
  PASS (R2 re-review on merged live :8099).** All 6 R1 fixes confirmed live:
  7/7 seed sparks with correct kind tints (no overflow desktop/390px);
  p6c19 verm seal; 11/11 seal overrides incl. ship seals; farewell
  ship-crossing + 2-per-side stars; §342 9-ray + eagle/2nd gull; sepia
  captions pinned Foam rgb(243,234,216). Sheet 56/56, console clean.
- R1 census (all PASS): 109/109 TOC ids toc-exact + weather/motif; 56/56
  symbols with own viewBox, 0 dupes, ids == refs exactly; zero
  gradients/text/use; Aubergine in exactly one symbol (hourglass field +
  frame); 60 motif / 41 banner / 7 spark / 1 song = 102 entries, 7 seeds
  correctly absent from merged manifest; motifs in §10b + sunrise-forth;
  viewBoxes per tier; CSS gs-ef- disjoint, 0 !important, 0 reader-* minted;
  L-bars measure exactly 220/440/700/890 on all 26 Book-5 plates; Book-5
  medallion slash op .28; meta-rule 64/112/160/208px + release; Appendix
  14/14 rubricated, para-5 aside Foam, verse centered, GR6 intact, console
  clean, prev/next art+motif swaps correct.
- R1 render sampling: 17 desktop chapters (all 5 landmarks + 2 golden
  Branch + 2 shadow Branch + 3 Branch+ + 4 medallions + dawn stations +
  G1 trio) + 8 phone chapters + p7c41 tablet; 28-chapter seal-hash sweep;
  shadow-rule sweep p7c3/c1/c6/c17/c14/c30/c41; sepia smoke p8c1.
- R1 findings repaired in v3 (this delivery):
  1. (major) EF.5 Seed sparks never matched (no `.gs-ef-seed` minted) →
     re-keyed to `data-chapter` × `p:first-of-type::before` for all 7 seeds.
  2. (minor) p6c19 seal gold → moved to vermilion group (kind discipline).
  3. (minor) 11 missing seal overrides added: p6c10/24/28/42/59/64 +
     p7c15/16/28 → gold; p6c67 + p7c1 → `--seal-ship`.
  4. (minor) Farewell ship now crosses BEFORE the disc (hull overlaps
     disc x-range); stars rebalanced two-per-side. Verified in-render.
  5. (minor) §342 fan restored to exact spec 9-ray (symmetric, clears disc);
     eagle gained a body + second distant gull tick. Verified in-render.
  6. (minor) EF.1/EF.3 figcaptions pinned to Foam #F3EAD8 (sepia-proof on
     fixed jacket plates).
- Observations accepted without action (validator-agreed): medallion frame
  r=92 geometry; conventional hex extensions; p6c35/p6c2 spec ambiguities
  resolved by kind discipline; walker placement reads well.

## 7. Book-wide rulings absorbed

- **GR6 letter-led census**: only p1c1/p8c1 are letter-led; all 446 others
  cap-less. EF reading_treatments amended at assembly: "Foam/GOLD cap" →
  "Foam/gold title (+ ray rule)". p8c1 keeps its no-drop-cap verse rule.
- **Designer catch (credited)**: the designer's full-prose read found 2
  missing Appendix rubrication indices (para 145 "Declaration of Love…",
  para 213 "Rimus remedium"); supervisor confirmed verbatim in data and
  fixed theme.css to all 14 indices (1/6/55/87/120/145/158/187/200/213/
  244/273/282/289). This ledger records the cause: the full read mattered.
- **Merge augmentation (supervisor)**: entries carry no `class`; supervisor
  augments banner→"banner gs-ef-banner", motif→"motif gs-ef-medallion",
  p8c1→"song gs-ef-song" (verified firing live).

## 8. Residual risks

1. Harness letterboxes plates (harness artifact); supervisor re-verifies the
   three repaired plates full-bleed live before final yield.
2. Book-5 meta-rule lengths depend on the shell rule + EF.4 vars — confirm
   live post-merge at L0/L3 extremes.
3. 143KB sprite sheet is the book's largest cohort file; servable, but watch
   first-paint on slow links (reader caches per chapter).
