# Wave-3 Live Review R4 — Open Letter — CONDITIONAL PASS (book done; 2 shared items carried)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~12:35 UTC.
URL: `http://127.0.0.1:8099/books/open-letter/` (fresh tab `?r4=1`, cleared storage).
Screenshots: `r4-p1c1-endseal-1440.png` (viewed) + R3 set.

## Verdict: CONDITIONAL PASS — the book's own work is complete and verified

### R4 verification (all observed on fresh bytes)

5. **End-seals — PASS.** Served `theme.css` now reads `url("art/seals/…")`; full 14-chapter sweep
   loaded every seal; computed `::after` on p1c1's last paragraph: 28×28 with resolved
   `…/books/open-letter/art/seals/end-torn-edge.svg`; chapter-end screenshot VIEWED (torn-edge
   seal renders at the close of "…a letter to the editor."). F15: ZERO 404s over 97 requests. ✓
6. **A1 focus — PASS.** Real focus walk: cover buttons solid 2px; TOC rows solid 2px when open;
   settings seg-buttons solid 2px. (The `outline:none` Close buttons in my first walk were
   `drawer-backdrop` elements, not focusable controls — misread, corrected. Hidden-drawer buttons
   are NOT tab-reachable despite `offsetParent` non-null: `visibility:hidden` removes them from
   tab order correctly — verified `.focus()` does not land.)
7. **A6 headings/landmarks — PASS with note.** Reader: one visible h1 (chapter title; cover h1
   hidden with its view — `display:none`, correct). Landmarks: header/nav/footer + dialog +
   groups present; `#chapter-error` has role=alert ✓; settings panel role=dialog ✓ (unnamed —
   minor, shared); TOC drawer has aria-label but no dialog role (minor, shared). No heading-skip:
   h1 → h2(Contents in drawer) is drawer-scoped, acceptable.

### Full-book acceptance summary (R2+R3+R4)

14/14 manifest entries resolve (file+symbol, computed); 14/14 treatments observed activating;
cover + 4 cohort openers + flagship + chapter-end viewed at 1440/820/390 (R2 set) + repaired
plates re-viewed at 1440+390 (R3 set). F1 Begin ✓, F2 TOC+filter+empty ✓, F3 Escape ✓,
F4 all settings rows apply ✓, F5 Escape ✓, F6/F9 persist+resume (≈exact) ✓, F7 next/prev ✓,
F8 j/k ✓ (+t/s open, see carried item), F10 read/progress ✓ (shared path as Twilight),
F11 390 TOC ✓, F13 carried (closured hook — integration-level), F15 0×404 ✓. Console clean
(ViewTransition rapid-nav noise excepted). Contrast: body 15.32, title 15.32, part 8.12,
captions 7.11, meta-sub 5.24 (post-fix) ✓. No overflow any width ✓. Dark-first ✓. No hotlinks ✓.

### Carried (NOT book defects — integration-level, owned by ReaderLead via Main)

- R2-2: `t`/`/` keypress pollutes the just-opened filter (missing preventDefault in shared
  openToc path). Reproduces on this book; fix is one shared line + keypress handling.
- R2-4: header icon buttons 36px (shared chrome) — needs 44px padding lift.
- A6 minors: settings dialog unnamed; TOC drawer lacks dialog role (shared markup).

These do not block the book: PASS is conditional on the integration pass resolving them
globally, and they are tracked in the wave-3 integration log, not against SupOpenLetter-3.

## Coverage record

Viewed: cover-1440(+reveal,+top)/820/390, read-p1c1/p1c5/p1c9/p1c11-1440, read-p1c9-820,
read-p1c1/p1c9-390, r3-p1c1/p1c11-1440+390, r4-p1c1-endseal-1440, toc-1440, settings-1440.
Activation observed all 14 (sweep). Composition not viewed: p1c2/p1c3/p1c4/p1c6/p1c7/p1c8/
p1c10/p1c12/p1c13/p1c14 openers (activation +/ self-contained defs verified; flagship + one
plate per cohort viewed as reps).
