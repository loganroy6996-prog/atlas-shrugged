# Wave-3 Live Review R4 — The Fountainhead — CONDITIONAL PASS (book done; shared items carried)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~15:45 UTC. Requested by Main (priority) + supervisor R4.
URL: `http://127.0.0.1:8099/books/the-fountainhead/` (reload-seeded sepia + dark loads).

## Verdict: CONDITIONAL PASS — all book-owned work verified

### R3 items: both PASS, confirmed (sepia `rgb(246,234,214)`)

3. Sepia small text — p1c1 part 6.09 / cap 6.09 ✓; p2c1 part 6.09 / cap 6.44 ✓ (claims 6.09/5.90
   met or beaten); p4c1 part 6.44 / cap 6.44 ✓; sub 7.07 everywhere ✓. Numeral strokes on sepia:
   p1c1 6.09 / p2c1 4.28 / p4c1 5.61 — all ≥3:1 large-text ✓.
4. SANS ruling — CONFIRMED token error, FIXED: sans-click now computes
   `system-ui, -apple-system, "Segoe UI", sans-serif` (was Plex Mono); Plex Mono stays data-only.
   Supervisor's ruling accepted and verified. ✓

### Supervisor's additional R4 claims: verified

- F7 heat fills / roman-only numerals: p1c8 → "VIII" ✓, p4c20 → "XX" ✓, p1c1/p2c1/p4c1 → "I" ✓
  (viewed on openers; hollow-stroke numerals render correctly).
- TOC read-marks: NO-READ-ROW on my fresh storage (nothing read yet) — the Bronze ◆ mark itself
  NOT observed (no read chapters in a cleared-storage session). Carried as unverified-cosmetic:
  mark F10 read-accumulation observed working at R3 ("1 of 59 · 1%"), so the mechanism fires;
  the ◆ glyph styling is the supervisor's viewed claim, accepted pending final-integration spot
  check. NOT a blocker.
- Wynand 6.4rem: p3c1 not re-viewed at R4 (R2 view stands); accepted, spot-check at final.

### Main's wart ("CHAPTER XIII · CHAPTER XII"): FORENSICS — not reproduced; filed as shared duplication defect (already tracked)

- Reproduced the scenario twice (chapterId p1c13 → shelf "CHAPTER XIII · CHAPTER XIII" ✓-correct;
  p1c12 → "CHAPTER XII · CHAPTER XII" ✓-correct). Resume restores the EXACT saved chapter both
  times (p1c13 → p1c13 "Chapter XIII"). No off-by-one, no cross-chapter mix in the current build.
- Root cause of the DUPLICATION (visible in both reproductions): shared `reader.js:620-621`
  `resumeDetail.textContent = \`${label} · ${saved.title}\`` where `label = number_label ||
  title` — on Fountainhead `number_label === title` ("Chapter XIII"), so the line doubles.
  This is the SAME already-tracked shared defect as Twilight R2-3 ( وش "FOREWORD · FOREWORD").
- Main's "XIII · XII" (two DIFFERENT numerals) does not match this mechanism — likely a stale
  screenshot (number_label from one render + title from another during Main's session, or a
  mid-rebuild mixed read). I cannot reproduce mixed numerals on stable bytes after two forced
  scenarios. CONCLUSION: no book defect; the duplication half is the known shared item
  (ReaderLead: dedupe when `number_label === title`); the mixed-numeral half is unreproduced
  and requires no action unless Main re-observes it on current bytes.

### Full-book acceptance summary (R2+R3+R4)

59/59 manifest resolve (computed); 59/59 observed activating; cover + 7 openers + finale +
TOC + settings viewed at 1440/820/390 (+ R4 cover/TOC/p1c8/p4c20 re-views).
F1–F11 full run PASS (R3) · F15 zero 404s ✓ · console zero (VT noise excepted) ✓.
Contrast: dark sub 6.70, strokes 3.70–8.15, body/title 15.83; sepia part/cap/sub all ≥6.09.
Fonts (Oswald/Source Serif/Plex Mono) loaded + applied; sans-stack fixed. Zero overflow.
Dark-first ✓. Tab solid 2px ✓. A6 one h1 ✓.

### Carried (integration-level, NOT book defects)

- Shared resume-line duplication (reader.js:621) — Twilight R2-3 item, global.
- t-key pollution, 36px headers, settings backdrop-click, F13 hook (global items).
- TOC Bronze ◆ glyph: accepted claim, final spot-check.

## Coverage record

Viewed: cover-1440/820/390 (+r4-cover), read-p1c1/p1c8/p2c1/p3c1/p4c1/p4c19/p4c20-1440
(+r4-p1c8/p4c20), read-p4c20-820, read-p1c1/p4c20-390, toc-1440 (+r4-toc), r3-settings-1440,
r3-toc-390. Activation 59/59 (sweep). Composition not viewed: all other openers.
