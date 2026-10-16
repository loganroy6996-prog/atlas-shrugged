# Sovereign Individual — Chapter coverage & review ledger

Supervisor: SupSovereign-3 · Updated: 2026-10-15 (11/11 integration complete).
Live URL: `http://127.0.0.1:8099/books/sovereign-individual/` (built `_site`, 29M).

## Coverage (all 11 TOC IDs resolve; all 11 manifest entries live)

| ID | Title | Cohort | Motif | Plate | Manifest | Heads (caps/title, live) | Review |
|----|-------|--------|-------|-------|----------|--------------------------|--------|
| p1c1 | The Transition in the Year 2000 | A | asymptote | plate-p1c1.svg | ✓ | 6/20 | VIEWED 1440+820+390 (+sepia) |
| p1c2 | Megapolitical Transformations… | A | strata | plate-p1c2.svg | ✓ | 4/9 | VIEWED 1440 opener |
| p1c3 | East of Eden | A | furrow | plate-p1c3.svg | ✓ | 3/7 | wired (walk), opener in R1 set |
| p1c4 | The Last Days of Politics | A | fallen-capital | plate-p1c4.svg | ✓ | 7/29 | VIEWED 1440 opener |
| p1c5 | The Life and Health of the Nation-State | B | rubble-courses | plate-p1c5.svg | ✓ | 4/11 | VIEWED 1440+390; stamps+pull |
| p1c6 | The Megapolitics of the Information Age | B | severed-belt | plate-p1c6.svg | ✓ | 6/27 | VIEWED 1440+820; enum+cut+trailer |
| p1c7 | Transcending Locality | B | knot-mesh | plate-p1c7.svg | ✓ | 11/33 | VIEWED 1440 + slot zoom |
| p1c8 | The End of Egalitarian Economics | B | pareto-spire | plate-p1c8.svg | ✓ | 8/27 | VIEWED 1440; prize+verse |
| p1c9 | Nationalism, Reaction, and the New Luddites | C | broken-shuttle | plate-p1c9.svg | ✓ | 18/36 | VIEWED 1440+390; transitions 6/6/6 |
| p1c10 | The Twilight of Democracy | C | sundial | plate-p1c10.svg | ✓ | 5/14 | VIEWED 1440+390; assay 3, hours 5 |
| p1c11 | Morality and Crime… | C | double-seal | plate-p1c11.svg | ✓ | 5/14 | VIEWED 1440+390; archive 1/12/526 |

## Review rounds (supervisor, rendered pages only)

- R0 (2026-10-15): 8-plate integration wired. Cover + 8 openers at 1440; cover +
  p1c1 + TOC at 820; cover + p1c1 + p1c9 + p1c10 + p1c11 at 390. Zero horizontal
  overflow on all 11 chapters. Fonts computed (Bodoni/Source/Plex). Console clean
  after QUOTE_PAIRS repair. Contrast (dark): body 15.47, title 15.47, caps 8.76.
- Behaviors: TOC open/close/backdrop/Escape/filter (1 hit "luddite"), j/k travel,
  assay label (50%), diamond killed, sepia↔dark persistence, resume → p1c9. SR2
  (backdrop trap) NOT reproduced — #btn-toc clickable after close.
- Repairs applied: meta-rule channel, sv-attr-pair scoping, QUOTE_PAIRS restore,
  paper-theme re-ink, joined epigraph frame, tr-a ornament repaint. Each re-viewed.
- R1 (2026-10-15): cohort-B merged → 11/11 walk at 1440 (all activating, zero
  errors, zero overflow). B openers + all B specials viewed (stamps/cut-rule/
  prize/verse/enum/trailer/pulls). Tablet p1c6 + phone p1c5 banners hold (slice).
  Validator R2 items fixed: muted 3.42→5.49/7.26 (dark), sepia metered
  (body 13.94, caps 5.14, sub 6.43, caption 5.64), SANS defect fixed + verified,
  epigraph drop-cap suppressed. Validator R3: CONDITIONAL PASS (book done from
  their side; carried: 4 global shared items + paper-muted spot check at final).

## Evidence

- `design/evidence/` — cohort validator screenshots (B set on delivery) +
  supervisor R0/R1 live-verification record in this ledger.
- Independent: `.omp/design/evidence/integration/wave3/sovereign/REVIEW-R2.md`
  (REVISE 1 minor, fixed) + `REVIEW-R3.md` (CONDITIONAL PASS).
- Build: `scripts/build_site.sh` → `_site` (art + design + sovereign.js ship;
  all 200 on :8099).
