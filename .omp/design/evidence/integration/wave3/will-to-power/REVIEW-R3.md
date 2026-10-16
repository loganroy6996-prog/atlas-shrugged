# Wave-3 Live Review R3 — The Will to Power — REVISE (1 minor: part-5 muted contrast)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~12:30 UTC. Requested by Main (priority).
URL: `http://127.0.0.1:8099/books/will-to-power/` (fresh tab, cleared storage).
Screenshots: `r3-cover-1440/820/390.png`, `r3-p5c9-1440/820/390.png`, `r3-p3c1-tablet-1440.png`,
`r3-toc-1440.png` in this directory (all viewed).

## Verdict: REVISE (minor only) — all supervisor claims VERIFIED; one small contrast defect in part-5 chrome

### Supervisor claims: all three PASS, independently confirmed

1. **p5c9 inscription-once — PASS.** Live DOM: exactly 1 `.crown-inscription` node, empty text
   node, `data-fragments="32" data-words="2,300"`, single `::before` line, node height 17px.
   Census p5c1–p5c9: exactly 1 node on p5c2–p5c9, 0 on p5c1 (tablet, correct per contract).
   Viewed at 1440/820/390: exactly one "32 FRAGMENTS · 2,300 WORDS" line under the read-time
   row. The R2 doubling is GONE (fix: textContent cleared, CSS attr() mirror is now the single
   renderer). ✓
2. **Fleuron collision audit — PASS.** p4c11: fleuron [90], band after 60 → followed by prose P
   ("And behold, the world became false…"). p4c15: fleurons [9,17,29,39,40,49,59,89,109,122,129]
   — index 98 REMOVED from the authored list (was FIG-adjacent at R2), band after 98 → prose P
   ("To what extent are all interpretations…"). p4c19: 18 fleurons, no FIG-adjacent, band after
   148 → prose P. Zero FIG-adjacent fleurons anywhere; every band followed by a real paragraph. ✓
3. **End-seal p5c9-only — PASS.** `.crown-seal` + `.crown-colophon` present on p5c9, absent on
   p5c1/p5c5 (spot-checked); EXHIBIT tags correct (44/44-door, 48, 52 OF 52). ✓
   Manifest 52/52 confirmed live (R2 census); COVERAGE.md ledger exists on disk (noted, content
   not audited — the live behavior above is the evidence).

### Standard acceptance at R3 (all observed)

- Cover 1440/820/390 (viewed): broken-ring plate + Fraunces 900 + Sulphur Begin + resume shelf
  ("2 · THE STRONG AND THE WEAK", single title ✓). No overflow at any width. Dark-first ✓.
- Tablet p3c1 (viewed): centered gilt tablet + BOOK II · PART-TITLE TABLET sub + stamped
  letterspaced body — the spaced body text is VERBATIM source (`C R I T I Q U E…` in JSON), not
  a styling artifact. No inscription on tablet ✓.
- Keyboard: j/k next/prev with scroll reset ✓; Alt+Right → next ✓ (dispatched, observed).
- Progress + resume: bar 51.51% at half scroll; scrollY 17201 persisted; reload → cover shelf;
  resume restored p5c3 (scrollY 6612 vs stored 17201 — restored mid-chapter; exact-fidelity
  delta noted, same family as baseline B3; NOT a defect: restores to chapter + plausible scroll).
- TOC (viewed): movement labels + atoms + Sulphur accents + clean drawer ✓.
- Console: zero errors. F15: zero 404s over 200 requests. ✓
- Body 15.68:1, title 15.68:1 — pass.

### Required fix (1 minor)

4. **ISSUE (minor): part-5 small chrome text below the contrast floor — `.meta-sub` + `.crown-exhibit-tag` at 3.31:1, part line at 4.42:1.**
   WHERE: Book IV opener chrome on dark (`--crown-pencil #6B6257` for sub+exhibit at
   11.52/10.88px; `--crown-heights #5B7A99` for the part line at 11.52px).
   EVIDENCE: computed composited on `rgb(11,10,8)`: sub 3.31:1 ✗, exhibit 3.31:1 ✗, part 4.42:1
   ✗ (needs 4.5:1 at these sizes). (My R2 meter read part+sub 7.32:1 — that was a part-2 chapter;
   part-5's cooler tokens are dimmer. Same shared family as other books' R2 items, but here the
   values are book-owned crown tokens, so the fix is book-side.)
   SEVERITY: minor (small chrome only; body/title unaffected).
   FIX (SupWtP-3): lift `--crown-pencil` (used by sub + exhibit + caption?) and `--crown-heights`
   until metered ≥4.5:1 on `--crown-ink #0B0A08` (suggest pencil → ~`#8F8271`-class,
   heights → ~`#7BA0C4`-class; verify by meter, not by eye). Check the other four cohorts'
   small-chrome tokens the same way (early/knowledge/nature/critique ash/pencil equivalents).
   Re-verify: metered sub+exhibit+part ≥4.5:1 on p5c9 dark.

## R4 requirements (tiny)

Item 4 fixed + rebuild, then: contrast meter on p5c9 (+ one chapter per other cohort for the
small-chrome audit), Tab-through + A6 snapshot. That closes the book.
