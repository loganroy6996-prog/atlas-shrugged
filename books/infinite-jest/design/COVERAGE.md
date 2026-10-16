# IJ coverage & review ledger (supervisor-owned; append-only)

## Manifest
- `design/chapters.json` v2 (2026-10-15, SupIJ-3): 89/89 entries merged from
  cohort-a..g.json `contract_manifest` blocks ({src,symbol,class,motif,caption}
  + remap keys part/part_roman/order/title + supervisor `year_seal` from the
  v1 placeholder mapping). Verified: key set == frozen TOC ids, every entry
  has src+symbol+part+title.
- Interim sprites `art/cohort-{a..g}.svg` built by `scripts/ij_interim_plates.py`
  (ruled ledger plates framing each chapter's year seal). All 89 manifest
  symbols resolve (script-verified post-build). Cohort engineers REPLACE these
  files with authored plates; manifest keys stay stable.
## Integration order (release C→A→E→F→G, then B/D)
| Cohort | Chapters | Lead | Designer | Engineer | Validator | Merged | Review |
|---|---|---|---|---|---|---|---|
| C (p1c28–40) | 13 | JestCohortCLead ✅ | ✅ | ✅ | PASS (47 ev, .omp/design/evidence/cohort-c/review/) | ✅ MERGED 2026-10-15 theme.css §11 | supervisor re-verified p1c35/p1c37/p1c38 dark live |
| A (p1c1–13) | 13 | JestCohortALead done | Designer→Engineer→Validator done | authored SVG+CSS | PASS, 40 ev | MERGED 2026-10-15 | supervisor re-verified p1c1/p1c9 dark live |
| E (p1c54–66) | 13 | JestCohortELead done | Designer→Engineer→Validator done | authored SVG+CSS | PASS, 89 ev | MERGED 2026-10-15 + STAFF-stamp supervisor fix | supervisor re-verified p1c60 dark live (fresh port :8212) |
| F (p1c67–77) | 11 | JestCohortFLead done | Designer→Engineer→Validator done | authored SVG+CSS | PASS, 82 ev | MERGED 2026-10-15 | supervisor re-verified p1c77/p1c76 dark live (fresh port :8213) |
| G (p2c1–12) | 12 | JestCohortGLead done | Designer→Engineer→Validator done | authored SVG+CSS | PASS after R1 repair, 53 ev | MERGED 2026-10-15 | supervisor re-verified p2c2 broadsheet dark live (fresh port :8214) + fixed R3 theme-wide |
| B (p1c14–27) | 14 | JestCohortBLead done | Designer→Engineer→Validator done | authored SVG+CSS | PASS after F-1 striping repair (fix1-* wave); art-director re-verified continuity (p1c18 interior gaps 0, one continuous wash, 2px rule) | MERGED 2026-10-16 theme.css §11, BUILT-SITE render no-injection | repair shots archived `.omp/design/evidence/step5/ij/b-repair/` (G3, +PROVENANCE.md) |
| D (p1c41–53) | 13 | JestCohortDLead done | Designer→Engineer→Validator done | authored SVG+CSS | HOLD (design/DESIGN-FINDINGS-D.md: 0 BLOCK, 0 REVISE; F2/F3/F5/R1/R4 fixed + code/receipt-verified) | MERGED 2026-10-16 theme.css §11 | 36 d-review frames + 10 receipts; live receipts for all five reworded captions |

## Render verification (supervisor; source preview http://127.0.0.1:8211)
- [x] ledger.js filing band + seal <use> renders (p1c1 YEAR OF GLAD / seal-9; p1c35 filing seal; p2c2 appendix band) — observed 1440px
- [x] interim seal plates render in #chapter-art (p1c1, p1c35, p1c77, p2c2) — 89/89 symbols resolve, no console errors
- [x] docket TOC: seal dots + THE NOVEL / ENDNOTES & ERRATA tags + Note 24 AUTEUR flag; appendix rows violet — observed 1440px
- [x] endnote round-trip p1c35 → note 79 (p2c4) → return chip → p1c35 — observed live; margin tick ◈ 79 + gold Part I register
- [x] Note 24 broadsheet stamps: 42 gauge + 27 UNRELEASED paras (Super-8 excluded) — observed 1440px two-column
- [x] J7 single-seal cover ≤560px (Y.D.A.U. cell-8 crop window) — observed 390px
- [x] p1c77 longest-title clamp — observed 1440px + 390px, no overflow
- [x] contrast computed vs Ledger Black #0D0F0C: Manila 14.15 · Stamp #E05238 4.98 · Gold 7.96 · Phosphor 13.07 · Violet #A89CF0 7.96 · Muted 8.14 (Faint 4.2 reserved for non-essential micro-labels only)
- [x] cover 1440/820/390 full + 820 tablet opener pass — done 2026-10-16: theme-review/ set (cover vellum+sepia 1440, p1c41 opener 820 dark, p1c77 390 dark; all viewed; no overflow)
- [x] cohort A merged (theme.css §11): p1c1 horseshoe + rails + E.R. tail, p1c9 tunnel section — observed dark live post-merge (validator: 13/13 openers + 390px all-plates + F1 refuted, 40 evidence)
- [x] cohort E merged (theme.css §11): p1c60 night desk + 8 bounded dividers — observed dark live post-merge on fresh port :8212 (validator: 13/13 openers + J3 390px + endnote round-trips, 89 evidence). Supervisor fix: STAFF stamp fiction (2329H/408) → NIGHT DESK · FILE 60, verified live
- [x] cohort F merged (theme.css §11): p1c77 arrival frieze + inverted tumbler, p1c76 speaker rails — observed dark live post-merge on fresh port :8213 (validator: 11/11 openers + J3 390px + full functional, 82 evidence)
- [x] cohort G merged (theme.css §11): p2c2 filmography broadsheet (2-col + gauge/UNRELEASED stamps + bands) — observed dark live post-merge on fresh port :8214 (validator: 12/12 openers + p2c2×3 viewports + round-trips both directions, 53 evidence)
- [x] R3 fixed theme-wide (supervisor): shared-diamond span stretch → seal/violet diamond + ledger underline on .meta-rule; shared ❦ suppressed on IJ; cohort p1c1/p1c28 span overrides repaired in theme + sources
- [ ] keyboard/settings/progress persistence full pass — **NOT_RUN this wave** (not silently waived): acceptance G5 observed settings live-switch (measure without reload), note round-trip, and seeded-theme persistence; a full keyboard-walk pass was not executed. Reader controls are independently accepted upstream.

## Reviewer verdicts
- Cohort C validator: PASS (repair_list empty; J2/J4/J5/P1 checks pass; taste bar met)
- Cohort A validator: PASS (F1 refuted by joint live re-probe; O1–O4 supervisor observations recorded)
- Cohort E validator: PASS (~50 screenshots inspected; OBS-1 data-side note-258 overlap noted for curator; OBS-2 closed)
- Cohort F validator: PASS (zero repair requests; 35/35 gates bounded; shared-engine observations routed to ReaderLead)
- Cohort G validator: PASS after R1 repair→re-verify (n304/n324 lockups now Newsreader; R2 accepted; R3 referred + fixed by supervisor)

## Step-5 recovery closeout (2026-10-16, supervisor)

Art-director acceptance gates + routed polish, all closed on the rebuilt site (`_site` in sync, no CSS injection):

- **G1 endmarks — CLOSED.** Root cause: 14 chapters' final paragraphs carry authored cohort gutter ticks on their own `::after`, winning the paragraph slot by specificity. Fix: paint moved to container close — `body[data-book="infinite-jest"] .chapter-text::after` (26px, `background: var(--ij-endmark, none) center/contain no-repeat`, opacity .9) + suppressor `... .chapter-text > p:last-child::after { content: none; }` (shared art.css line 284 paints that slot as a fleuron). Per-chapter `--ij-endmark` wired from `design/chapters.json` `year_seal` (89/89). Scan: **88/89 painted, all exactly 26×26px, zero unresolved backgrounds; only p1c77 bare — intended** (`--ij-endmark: none`, colophon). Seal usage: seal-8×58, seal-filing×20, seal-7×2, seal-9/undersea/tooth/mask/seal-2/3/4/6×1. Re-renders viewed: `evidence/step5/ij/endmarks/end-p1c1-1440.png` (E.R. pill + seal-9 coexist), `end-p2c2-1440.png`, `end-p2c5-1440.png`; full scan `receipts/endmarks-all.json` + 4 more end-shots.
- **G2 non-dark + tablet — CLOSED.** `evidence/step5/ij/theme-review/`: 11 captures + capture-log.json (0 page errors). Viewed: `open-p1c32-vellum-1440.png` (warm paper; midnight plate holds dark canvas via --ij-plate-bg override), `cover-sepia-1440.png` (3×3 seal wall registers on aged paper), `open-p1c41-820.png` (full exam-file plate grammar at tablet), `open-p1c77-390.png`. First non-dark renders of this book — P8 screenshot verification satisfied.
- **G3 provenance — CLOSED.** 17 fix1-/b- shots copied verbatim into `evidence/step5/ij/b-repair/` + PROVENANCE.md.
- **R1 caption jargon — CLOSED.** `ledger.js` captions reworded, mechanism notes removed; p1c53 now "FILE § 53 · SUN-BLAZED ROOM · THREE-PLATE BRAID" (line 79; _site in sync). All five live receipts in d-review/. Source prose untouched.
- **R2 Newsreader 600 — CLOSED.** Old 600 file (byte-clone flag; later an unverifiable 15.6KB subset) removed; @font-face dropped; weight-600 usages synthesize from the true 400 (font-synthesis auto); GF link still supplies a real 600 online. INTEGRATION.md updated.
- **R3 monster-title 390 clamps — CLOSED.** p1c5/p1c9 (theme.css §11) and p1c77 already at `clamp(1.5rem, 8.5vw, 2.1rem)`; viewed receipts p1c9@390 + p1c77@390: full-size shout, wraps in bounds, zero overflow.
- **R4 tick-pill clip — CLOSED.** Census of p1c41/44/46: all `.ij-tick` boxes 28px tall, max width 107px, no wrap at 1440; species stacking verified in receipts (p1c46 ¶29 std "◈ 152", ¶37 low "◈ 150" + FILM tag, p1c41 ¶26 stacked "◈ 113 · 114" + SCENE-CUT tag, p1c44 ¶20 "◈ 139") — pills guttered, no text collision.
- **Cohort D verdict — HOLD** (design/DESIGN-FINDINGS-D.md): 0 BLOCK, 0 REVISE. F-D1 closed (cohort-d.json reworded to shipped hanging-indent/roman-speaker state). F-D2 DECLINED by supervisor: ≤480px 200px art floor kept — J7 art-floor hold + blessed letterbox bands. F-D3 already shipped (ledger.js:76 matches requested wording). F-D4 BLESSED: cohort-relative plate numbering ("Plate 1…13" within p1c28–40) sanctioned scheme-wide — recorded here as the coordinator decision.
- **Final independent validator — REVISE on first pass, all findings resolved.** Verdict: `design/ACCEPTANCE-VERDICT.md` (mirrored in `evidence/step5/ij/acceptance/`): 8/10 gates PASS on viewed evidence (56 captured / 53 viewed), 0 blockers, no art/typography/palette failures. Findings F-A1 (docket treatments absent on cold cover open) and F-A2 (Part I year-ring colors lost to :948 specificity) FIXED — MutationObserver repaint + specificity raise, cold-open probe: 2 tags / 89 dots / AUTEUR, rings p1c1+p1c3 stamp-red, p1c2 gold, p2c2 violet (receipts `acceptance/fa-repairs/`, viewed). F-A3 caption escapes FIXED (16 sites `\2014 ` → `\2014\20 `, invalid `\201332A` → `\2013\20 32A`; computed content verified). F-A4 left as approved composition. Post-repair verdict: **ACCEPT (no open REVISE/BLOCK)**.
