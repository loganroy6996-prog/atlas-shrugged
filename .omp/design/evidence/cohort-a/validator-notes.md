# Cohort A validation notes (validator-owned)

Verdict: PASS (F1 REFUTED by validator re-probe 2026-10-15 — see F1 addendum).
Server: http://127.0.0.1:8471 (python http.server, repo root; stopped after run).
Method: cohort-a.css injected via page-context fetch + `<style data-validator>` append
(index.html has no cohort link by design); cache disabled via no-store fetch on a
fresh profile; init-script console hook across cover→p1c1→p1c2…p1c13 sweep.

## Source census (recomputed, not trusted)
- cohort-a.svg 144762 B: 13 symbols, ids byte-match contract_manifest symbols;
  13/13 viewBox `0 0 800 450`; 0 currentColor; 0 `<use>`; 0 external refs;
  0 violet; paints = 6 tokens + #E05238 + none only; no image/script/foreignObject/a.
- cohort-a.css 60093 B / 1034 lines: unlayered (1 `@layer` hit is a comment);
  0 real reader-* (1 comment + 2 `var(--reader-max)` token reads); 0 modulo nth;
  0 display:none; 0 unscoped selectors; `!important` only in reduced-motion guard;
  all 13 chapters covered; url() = data: glyph SVGs only.
- Manifest: 13/13 cohort entries match chapters.json src/symbol/caption; all symbols exist.

## Rendered coverage
- 1440×1000: all 13 openers + plates viewed; treatments viewed per chapter (see evidence).
- 820×1180: p1c1 opener (artH 396, no overflow).
- 390×844: all 13 plates exactly 200px, block, never hidden, zero overflow on all;
  p1c5/p1c9 clamps 27.3px viewed, no overflow; p1c7 tape collapse viewed.
- Para indices: 21 spot-checks vs data JSON, all OK (≥6 required).
- Contrast (computed, composited): body 14.15, title 13.29, c10 terminal 12.27,
  sepia body 12.14 — all ≥ 4.5.
- Console: zero messages/warnings across all 13 chapters; zero page errors;
  zero `[reader] art skipped`.
- Behavior: TOC t/filter/navigate/Escape ✓; prev/next p1c1→p1c2 art swap ✓;
  resume chapter+scrollY across reload ✓; theme persist ✓ (+sepia plate viewed);
  j/k ✓; phosphor a:focus-visible ring ✓ (2px #9FE870); reduced-motion static ✓;
## F1 ADDENDUM — REFUTED (validator re-probe, fresh document, :8471)
Lead's joint diagnosis challenged F1; re-probe CONFIRMS the lead:
- p1c4-P5: max-width 512px, rectW 512, marker ◜ present (style node in head,
  60012 chars, 79 top-level rules).
- p1c12-P3: max-width 608px, rectW 608.
- Rule-count mystery SOLVED: 79 = top-level rules, 100 = incl. 16 nested
  @media rules — same sheet, no truncation. Original inject was complete.
- theme.css sha1 3c4525ab matches lead's; --reader-max 38rem, root 16px.
The original 832px reading is NOT reproducible (two independent correct
observations: lead :8247 + validator :8471 fresh) and is recorded as a
validator-side document-state artifact of the long-lived first tab, cause
unknown. F1 is WITHDRAWN as a cohort defect. Proof screenshot:
p1c4-reprobe-f1-refuted-1440.webp. No engineer action required.

## Supervisor observations (not cohort findings)
- O1: Escape after `t` leaves focus on BODY (no invoking button on keyboard path).
- O2: note-return restored scrollY 0 in synthetic-click path (contract: exact scroll).
- O3: `s` key path not cleanly isolated (settings button path verified instead).
- O4: size/leading/font/measure setting effects not exercised (theme change only).

## Sibling pairs (all distinct, viewed)
c5-naive vs c10-greasepaint smiles · c1-glowing vs c3-wooden chairs ·
c2-lateral vs c8-dorsal insects · c7-cassette vs c12-paper tapes. No clones.
J5: no violet in source or rendered c8 (gold-ink depiction). P1: ≥200px everywhere.
