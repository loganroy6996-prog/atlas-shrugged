# Wave-3 Live Review R3 — Atlas Shrugged — REVISE (1 minor: paper sub 3.64; scenes VERIFIED)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~14:30 UTC.
URL: `http://127.0.0.1:8099/books/atlas-shrugged/` (fresh tabs, cleared + seeded storage).
Screenshots: `r3-p1c3/p3c7/p3c5/p1c8/p2c7/p3c10/p1c7-1440.png`, `r3-p1c3/p3c7/p3c5-390.png`
(all viewed).

## Verdict: REVISE (1 minor) — full scenes VERIFIED at both widths; one paper-ground contrast fix

### Item 1 (blocking): FIXED and VERIFIED — full scenes in frame at 1440 + 390

- Mechanism confirmed: inlined svg now `preserveAspectRatio="xMidYMid meet"`, `height:auto`
  (measured p1c7: 846×212 framed plate, down from 1440-wide bleed).
- p1c3 (viewed 1440+390): full cellar/temple section — barroom arch, booths, columns, green lamp,
  statue niche ALL in frame. ✓
- p3c7 (viewed 1440+390): dial FACE with 7:51 hands + ticks + mono lines + arcs screen, all in
  frame. The Galt address finally shows its instrument. ✓
- p3c5 (viewed 1440+390): cube + lantern + track fan + LN-193 tag, all in frame. ✓
- p1c8/p2c7/p3c10/p1c7 (viewed 1440): shield/ribbon/aspects, caution gantry, TT beam, bridge arc —
  all complete compositions. p1c7 inscription "CARRY FOUR TRAINS AT ONCE / STAND THREE HUNDRED
  YEARS" renders. ✓
- Zero overflow at 390 (slot 351×88); class system (std/grand/monumental/compact/valley/speech)
  visibly varies plate widths. The preferred fix (a) is exactly what shipped. ✓

### Tab/A6: PASS

- Cover Tab order: 4/4 controls solid 2px focus (Begin/TOC/Library/Continue). ✓
- A6: one visible h1 (cover h1 in grid view; reader h1 inside `display:none` section). ✓

### Paper-ground meter (reload-seeded prefs, bypassing the shared inline-pin defect): 1 minor

| Ground | body | title | part (clear/stop) | SIG caption | sub |
|---|---|---|---|---|---|
| light p1c1 | 13.51 | 13.51 | 5.81 | 5.81 | **3.64** |
| sepia p1c1 | 13.51 | 13.51 | 5.81 | 5.81 | **3.64** |
| sepia p3c7 | — | — | 5.56 | 5.56 | **3.64** |

Deepened aspects (clear-deep/caution-deep/stop-deep) all pass on paper — the theme author did
that work correctly. Only `.meta-sub` (`--text-faint #707A85` on paper) fails at 3.64:1.

2. **ISSUE (minor): `.meta-sub` 3.64:1 on light + sepia (11.2px, needs 4.5:1).**
   FIX (SupAtlas-3): deepen `--text-faint` in the `html[data-theme="sepia"], html[data-theme="light"]`
   block (only) until metered ≥4.5:1 on `#F2EAD8` (suggest ~`#5B646E`-class; verify by meter).
   Re-verify: sub meter on light + sepia. (Dark sub 6.39 ✓ unchanged.)

### Notes

- F15: zero 404s/169. Console: zero errors. Stop-red small text on dark still 4.63 (margin
  noted at R2, still passing — no change).
- The shared inline-pin theme defect (reader.js:215–217) still stands — routed to ReaderLead;
  my paper meters used reload-seeded prefs to bypass it, which also proves Atlas's per-theme
  tokens are correct (the book did its part).

## R4 requirements (tiny)

Item 2 fixed + rebuild, then: sub meter on light + sepia, done. That closes the book.
