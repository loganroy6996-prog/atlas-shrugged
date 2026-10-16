# Wave-3 Live Review R4 — The Will to Power — CONDITIONAL PASS (book done; shared items carried)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~13:10 UTC. Requested by Main (priority, supersedes R3).
URL: `http://127.0.0.1:8099/books/will-to-power/?r4=1` (fresh tab, cleared storage).

## Verdict: CONDITIONAL PASS — all book-owned work verified; 2 shared items carried to integration

### Contrast re-meter (my own computed numbers, dark `rgb(11,10,8)` — ALL PASS)

| Chapter | body | title | part | sub | num | inscr/exhibit/rfrag |
|---|---|---|---|---|---|---|
| p2c2 | 15.68 | 15.68 | 7.32 | 7.32 | 7.32 | — |
| p3c3 | 15.68 | 15.68 | **5.21** | 7.32 | **5.21** | inscr 7.32, rfrag 7.32 |
| p4c15 | 15.68 | 15.68 | 7.32 | 7.32 | **5.20** | inscr 7.32 |
| p5c3 | 15.68 | 15.68 | **5.64** | 7.32 | 7.32 | inscr 7.32, exhibit **4.70** |
| p5c9 | 15.68 | 15.68 | **5.64** | 7.32 | 7.32 | inscr 7.32, exhibit **4.70** |

Supervisor's claims CONFIRMED to the digit: Pencil-twin 4.70 ✓, Blood 5.21 ✓, Verdigris 5.20 ✓,
Heights-twin 5.64 ✓, Ash floor 7.32 ✓. (Gloom 5.30 not separately probed — no gloom-rendered
small text found on the sampled chapters; the metered set covers every small-chrome role on
all five chapters.) R3 item 4 CLOSED. ✓

### R3 items re-verified (all still PASS)

- p5c9 inscription-once: 1 node, 17px, single ::before line ✓ (unchanged since R3).
- Collisions: p4c11 1 fleuron + band→prose; p4c15 11 fleurons + band→prose; p4c19 18 fleurons +
  band→prose; ZERO FIG-adjacent anywhere ✓.
- End-seal scope: p5c9 seal+colophon present; p5c1 absent ✓.

### Tab/A6 pass (observed)

- A1: header buttons solid 2px ✓; settings seg-buttons solid 2px ✓; TOC rows show
  `outline:none` under programmatic `.focus()` BUT the book ships `:focus-visible` rules
  (theme.css + 3 cohort files: 2px Sulphur + 3px offset) and rows show a Sulphur-tint bg shift
  on focus (`rgba(227,168,43,.1)`). Programmatic focus does not match `:focus-visible`
  (correct browser behavior — keyboard modality required); a trusted-key Tab pass would exercise
  the real path. Given explicit `:focus-visible` rules exist and match the shared pattern every
  other book uses, A1 is PASS with the same modality caveat as Open Letter R4. A real-keyboard
  Tab pass at final integration (all books, one session) remains the correct closer.
- A6: one h1 per view ✓; header/nav/footer landmarks ✓; settings Escape-closes (display:none) ✓.
  Settings panel-click does NOT close (stays flex) — backdrop-close is not implemented on this
  shared panel (same on all books; contract F5 says "Escape + backdrop click" — the Escape half
  passes everywhere; backdrop half is a shared gap carried to integration, not a book defect).
- F15: zero 404s over 144 requests ✓. Console: zero errors ✓.

### Full-book acceptance summary (R2+R3+R4)

52/52 manifest resolve (file+symbol, computed); 52/52 observed activating; cover + preface +
5 cohort openers + tablet + finale + TOC + mid-reading + colophon viewed at 1440/820/390.
F1 Begin ✓ · F2 TOC+filter+empty ✓ · F3 Escape ✓ · F4 settings rows ✓ · F5 Escape ✓ (backdrop
carried, shared) · F6/F9 persist+resume ✓ · F7 next/prev ✓ · F8 j/k/t/s + Alt+arrows ✓
(t-pollution carried, shared) · F10 read/progress ✓ · F11 390 TOC ✓ · F13 carried (closured
hook, integration-level) · F15 clean ✓. Contrast all-pass (table above). No overflow any width.
Dark-first ✓. No hotlinks ✓. Fonts (Fraunces/Newsreader/Plex Mono) loaded + applied ✓.

### Carried (integration-level, ReaderLead via Main — NOT book defects)

- t-key filter pollution (Open Letter R2-2, reproduces here).
- 36px header targets (Twilight R2-6, same shared chrome).
- Settings backdrop-click does not close (shared panel behavior; Escape works).
- F13 error-path needs a UI-reachable hook (all books).

## Coverage record

Viewed across R2–R4: cover-1440/820/390, read-p1c1/p2c2/p3c3/p4c15/p5c3/p5c9-1440,
read-p2c2-820, read-p5c3/p5c9-390, r3-p3c1-tablet/r3-toc/r3-cover-820+390/r3-p5c9-820+390,
mid-p3c4-relief, end-p3c4-seal, end-p5c9-colophon. Activation observed 52/52 (sweep).
Composition not viewed: all other openers (activation + fleuron/band census verified).
