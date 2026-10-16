# Art-Director Findings — Step 5 Recovery · Infinite Jest

- **Reviewer:** Art Director (owns `.omp/design/ART-DIRECTION.md`, `.omp/design/critiques/**`)
- **Workdir:** `/home/prateek/Documents/GitHub/atlas-shrugged` · **Date:** Fri 2026-10-16
- **Reviewed object:** built-site Infinite Jest book (localhost:8000, source-served; `_site/` matches source as of Oct 16 06:02)
- **Benchmark basis:** approved home (`.omp/design/evidence/home/final-1440x1000-top.webp`, H1/H2 in `.omp/design/critiques/home.md`), Infinite Jest direction (M1–M4, J1–J8 in `.omp/design/critiques/infinite-jest.md`; `books/infinite-jest/design/ART-DIRECTION.md`), `.omp/design/READER-CONTRACT.md` (A.3 measure matrix, P1–P8), `.omp/design/USER-FEEDBACK.md` (noted pR1–pR7).

## 0. Verdict

The **current build holds the approved benchmark on identity, composition, and long-form calm.**
The Subsidized Time Ledger identity is unmistakable (J1), the opener grammar is consistent yet
per-chapter authored (J2), meta-title discipline is intact (J3), the Part II register shift is
real (J5), Note 24 is the broadsheet from the critique's letter (J6), the phone floor holds (J7),
and the cohort B F-1 spacing repair verifiably renders on the built site. What is not yet
"specified design complete" is a small, concrete list: the designed chapter-ending marks do not
exist anywhere, no non-dark theme of this book has ever been rendered for review, tablet (820)
has zero evidence, and the cohort B repair shots live only in `/tmp`. Those three are the
**acceptance gates (G1–G3)**; everything else is polish (R/N below).

## 1. Evidence actually viewed (honesty ledger up front)

| Group | Where | Count | Notes |
|---|---|---|---|
| Day-1/2 art evidence (pre-Oct-16-merges) | `.omp/design/evidence/step5/art/`, `.omp/design/evidence/infinite-jest/` | 24+ | cover/toc/p1c1/9/14/27/32/35/41/53/60/77, p2c1/2/5 openers+mids, p1c32 settings/measure set, p1c1 & p1c35 ends. All viewed earlier this session. |
| Cohort D review set (post-merge, by IJ supervisor) | `.omp/design/evidence/step5/ij/d-review/` | 36 | open-1440-p1c41…53 ×13, open-390-p1c41…53 ×13, mid-1440-p1c46 d1–d5, plus phone mids. **I viewed 3 of 36**: `open-1440-p1c41.png`, `mid-1440-p1c46-d2-headlinemontage.png`, `mid-1440-p1c46-d4-reconfigmaps.png`. |
| Cohort B F-1 repair shots | `/tmp/opencode/ij-sup/shots/` | 21 | fix1-p1c17…p1c27, b-p1c18-*, scroll panes. **I viewed 2**: `fix1-p1c17-P127.png`, `fix1-p1c22-wash.png`. |
| My own probe captures this session | `/tmp/opencode/artdir/` | 5+ | `ij-p1c32-wide-1440.png`, `ij-settings-1440.png`, `ij-toc-1440.png`, `ij-cover-390.png`, `ij-p1c77-opener-390.png`. |
| Home benchmark | `.omp/design/evidence/home/final-1440x1000-top.webp` | 1 + H-variants | standing basis. |

**Computed probes (not screenshots):** measure matrix at 1440 (narrow 608 / standard 608 / wide 1024,
matching A.3 for `--reader-max: 38rem`); meta-title computed font `"Archivo Black","Arial Black",sans-serif`
(1440 **and** 390); phone cover seal re-frame (window 300×300, svg 894px, `overflowX=0`, title 54.6px);
phone p1c77 (`#chapter-art` svg height exactly 200px, `docOverflowX=0`, title clamp 27.3px); p1c53
pseudo-plate render (8 `::after` labels incl. §§83/110 treatments); p1c18 F-1 run geometry (interior
gaps all 0, continuous 4.3%-manila wash, consistent 2px left rule, clean 23.9/45.8px exit air); font
list confirms Newsreader/IBM Plex Mono/Archivo Black woff2 loaded from book-relative paths; a re-run
showed **zero failed/4xx requests** (the single 404 seen in an early probe did not reproduce — not
carried as a finding).

## 2. Acceptance gates — must be resolved before final acceptance

**G1 · No chapter-end year-seal marks exist, though they are designed, specified, and cheap.**
`books/infinite-jest/theme.css` declares `--ij-endmark: none` as a default and **no rule anywhere sets
it** (verified by grep across theme.css and all cohort css). NET result: all 89 chapters end bare
into the nav cards — see `ij-p1c1-end` and `ij-p1c35-end`. Yet `books/infinite-jest/design/ART-DIRECTION.md`
promises "year-seal end marks (Appendix A.0, ≤32px) close every file," INTEGRATION.md §2.4 says "each
entry names its year seal; supervisor wires `--ij-endmark: url(art/seals.svg#seal-N)` per chapter,"
and `design/chapters.json` already carries `year_seal` per entry (89/89). This is the "file closed"
signature of the ledger — its absence is visible at the exact emotional beat where readers should
feel the drawer stamp.
**Owner: IJ supervisor.** Fix: wire per-chapter `--ij-endmark` from `chapters.json` year_seal values
(e.g., one small block per part or cohort in theme.css §5) on a `#chapter-text` end slot, ≤32px,
manila-muted, with reserved space so paragraphs don't reflow; then re-render 3 chapter-ends (p1c1,
p2c2, p2c5) into `.omp/design/evidence/step5/ij/endmarks/`.

**G2 · No non-dark theme of the book has ever been rendered, and tablet (820) has zero evidence.**
Every Infinite Jest screenshot in the project — day-1/2 art evidence, the d-review set, my wide-measure
probe — is the dark "midnight" theme. The settings panel works (proved in `ij-settings-1440` and my new
`/tmp/opencode/artdir/ij-settings-1440.png`), and theme.css authors all 8 theme palettes including
`--ij-plate-bg`/ink overrides for plates — but P8 of the reader contract demands light/sepia
**screenshot verification, not assumptions**, and plates/part-branding are precisely where an
off-palette variable fails silently. Likewise the supervisor's own COVERAGE checklist line —
"cover 1440/820/390 full + 820 tablet opener pass" — has no 820 file for this book anywhere.
**Owner: IJ supervisor (captures); Final validator (gate).** Fix: on the built site capture cover +
one opener (p1c32 or p1c41) + p2c2 notes area in **Vellum** and **Sepia** at 1440, plus one 820 opener
passe; archive to `.omp/design/evidence/step5/ij/theme-review/`. Cheap: ~7 shots, no code expected.

**G3 · The cohort B merge's acceptance evidence lives only in `/tmp`.**
The merged Cohort B header in theme.css (lines ~12941–12959) states its acceptance criterion:
"BUILT-SITE render only (no CSS injection) — see `.omp/design/evidence/step5/ij/` and COVERAGE.md."
That path exists **but contains only `d-review/`** — the B repair shots (`fix1-p1c17-P127`,
`fix1-p1c18-P81`/`-P100`, `fix1-p1c22-flow/-wash`, `fix1-p1c23-memo(2)`, `fix1-p1c25-opener/-pursuit(2)`,
`fix1-p1c27-opener/-trans(2)`, `b-p1c18-*`) are sitting in `/tmp/opencode/ij-sup/shots/` only, which
evaporates on reboot. I have verified the repair **works** (see H3/R-verifications below), so this is
a provenance gap, not a quality gap — but the merge's own rule names an in-repo path, and the final
validator cannot be asked to judge on evidence that can vanish.
**Owner: IJ supervisor.** Fix: copy the 12 fix1-/b-p1c18 shots verbatim into
`.omp/design/evidence/step5/ij/b-repair/` (no re-capture needed) and add the standard one-line
provenance note; then the gate is closed.

## 3. Revise in this wave (not blocking acceptance)

**R1 · PLATE 53 caption leaks production language.** `design/chapters.json` p1c53 caption reads
"PLATE 53 · SUN-BLAZED BEDROOM; NA + DESERT PLATES AT §§83/110 **VIA CSS CONTENT**." The plates at
§§83/110 do render (probe2: 8 CSS-content plate labels live in the chapter, gold-registered), so the
caption is also factually stale — mechanism notes ("via CSS content") never belong in reader-facing
furniture. **Owner: IJ supervisor.** Fix: reword the caption field to something reader-legible, e.g.
"PLATE 53 · SUN-BLAZED BEDROOM — FURTHER PLATES AT §§ 83 AND 110." Caption-text only; no CSS/plate change.

**R2 · Newsreader 600 is a byte-clone of 400.** INTEGRATION.md already flags
`design/fonts/newsreader-600.woff2` as byte-equal to the 400 file; anything styled 600 renders
faux-weight (drop caps, filing bands). Either fetch a true 600 or drop 600 usage to the 400 face
(+ `font-synthesis` if a heavier opening artifact is wanted) and remove the misleading file.
**Owner: IJ supervisor.** Priority: low — the page reads fine; this is fidelity hygiene.

**R3 · Monster titles undershoot presence at 390.** p1c77/p1c5/p1c9 mobile clamps use 7vw
(≈27.3px at 390, measured on `ij-p1c77-opener-390.png` via probe) — complete and legible with **zero
horizontal overflow** (the ≥200px art floor also holds exactly at 200px), but seven short wrapped
lines of 27px undercut the Archivo "bureaucratic shout." Global h1 clamp is 8vw/2rem.
**Owner: IJ supervisor.** Fix: raise those three ≤560px rules to `clamp(1.5rem, 8.5vw, 2.1rem)`
(re-check longest title for 7-line wrap after).

**R4 · p1c46 margin capsule tick may clip its label at wide measure.** In
`d-review/mid-1440-p1c46-d2-headlinemontage.png` the gold right-margin capsule reads as a broken
two-line fragment (looks like "OF ILE") at the 1024px measure window. Could be capture compression —
but if the tick's `max-width`/padding lets labels wrap at wide measure, fix the pill so labels render
whole or collapse to an inline glyph. **Owner: IJ supervisor** (verify + one CSS line).

## 4. Nice / documentation

**N1 · Part I progress fill is phosphor green, not the J5-letter gold — record as intentional.**
Cartridge Phosphor is the document-machine accent of this identity and violet stays clean for Part
II; the deviation is visible and defensible (checked in art evidence + theme.css §7). Add one line to
`ART-DIRECTION.md` marking it a sanctioned deviation so a future wave doesn't "fix" it out.
**Owner: I write this note next visit; no code.**

**N2 · Residual attributions — do not flag as defects.** (a) p2c2's intro violet-tinted paragraph
block is inferred to be the `.ij-insert` Part II treatment (CSS-side attribution; not class-probed —
responsive check only). (b) p1c1's "E.R." circle marginalia stamp was confirmed as live marginalia,
not an artifact. Both look intentional; leave, note, revisit only in the post-acceptance sweep.

## 5. Holds — verified good, no action

- **J7 phone adaptability.** `ij-cover-390.png`: single Y.D.A.U. seal re-frame (300×300 window, svg
  894px, overflowX 0, title clamp 54.6px). `ij-p1c77-opener-390.png`: art floor met exactly at 200px,
  title wraps inside bounds, overflowX 0.
- **J3 meta-title discipline.** Archivo Black on titles computed at 1440 **and** 390 — resolves my own
  earlier "did it render serif?" doubt (probe says sans is applied; earlier reading was a misread).
- **J1 cover ambition.** 3×3 filing-seal wall with nine distinct year-seals; unmistakably this book —
  the seals themselves (piatto labels, denominated years Y.D.A.U./Y.P.M./Y.T.M.P.) pass the installed
  title-swap test.
- **J2 opener grammar.** 13/13 sampled openers (p1c1/9/14/27/32/35/41/53/60/77, p2c1/2/5) follow
  stamp-band → seal → plate → Archivo title → meta card, with plates above prose, and per-chapter
  plates are authored, not stock (exam-file sheet at p1c41, hospital-bed braids at p1c53, Note 24's
  broadsheet wall at p2c2).
- **Measure matrix on the current build.** narrow 608 / standard 608 / wide 1024 — the unlayered
  fix in `shared/reader.css` works; the earlier 22:14 "byte-equal" confusion is superseded (those
  shots predate the fix). **Reader lead: no changes needed — preserve the tail unlayered block.**
- **J4 marginalia.** Ledger block (1)–(9) with `// RAIN` content-true ticks on p1c35; ticks collapse
  ≤1100px; no tick sits behind prose at any sampled viewport.
- **J5 register.** Part II violet shift real and complete on p2c1/p2c2/p2c5 (openers + progress fill);
  merged cohort D CSS carries 0 violet hits (header-certified and spot-checked in d-review frames).
- **J6 Note 24.** Two-column filmography with per-film gauge stamps (35MM / UNRELEASED / LIMITED
  RELEASE) — matches the critique's letter.
- **Cohort B F-1 repair (verification).** p1c18 computed: interior gaps 0 across the P81–P120 run,
  one continuous 4.3%-manila wash, consistent 2px left rule, clean exit air; `fix1-p1c17-P127` renders
  the interrogation as one continuous tape with hairline interior rules; `fix1-p1c22-wash` renders a
  continuous bounded wash. The striping defect is gone.
- **Cohort D review wave (my 3 of 36 frames viewed + computed probe).** `open-1440-p1c41` (exam-file
  plate: answer grid, intercom hatch, phosphor ticker, bounded frame) is distinctive and content-true;
  `mid-1440-p1c46-d2` (gold "over 150 very fit" data-strip + phosphor ON SCREEN headline band + Archivo
  headline furniture) and `-d4` (hanging-indent TINE/GENTLE script) render cleanly; probe2 confirms
  pseudo-plate labels live. D holds on the built site.
- **Reader chrome + notes UX.** TOC docket, settings, note round-trip (hanging notes in p2c5,
  broadsheet 2-col in p2c2) quiet and restrained; no shared-CSS defect found — **Reader lead: nothing
  owed on this book**.
- **Typography book signatures.** Newsreader body + IBM Plex Mono apparatus + Archivo Black display,
  booked-local woff2 confirmed loading (probe); letter-pairings already distinct from the home's
  Fraunces/DM Sans pairing.

## 6. Ownership routing (one line each)

- **IJ supervisor** (`books/infinite-jest/**`): G1 endmark wiring + 3 re-renders; G2 theme/820 capture
  set; G3 copy fix1-/b- shots into `.omp/design/evidence/step5/ij/b-repair/`; R1 caption reword;
  R2 Newsreader 600 or usage drop; R3 390 title clamps; R4 tick-pill clip check.
- **Reader lead** (`shared/reader.css`): **no defects found; no action owed; preserve the tail
  unlayered measure overrides verbatim** (they are what pulled wide=1024 into compliance A.3).
- **Producer**: G1–G3 close-out requires one dated line each in COVERAGE.md / the step-5 ledger after
  the supervisor lands them; no global fixes needed.
- **Art direction (me)**: N1 doc note; post-acceptance sweep of N2 attributions.

## 7. Residual risk, honestly stated

(a) Of the 36 d-review frames I viewed 3 and of 21 F-1 shots I viewed 2; the rest are counted, named,
and path-listed but not art-reviewed — treat the holds in §5 as spot-verified, not exhaustive.
(b) The F-1 repaired panels named in the merge header for p1c23/p1c25/p1c27 have shots but I did not
view them; my computed continuity proof covers p1c18 only. (c) All non-dark-theme behavior of this
book is inferred from CSS until G2's captures exist. None of these three should delay the wave; all
three are inside G2/G3's capture set.
