# Acceptance Baseline — pre-redesign site (observed 2026-10-15)

Server: `http://127.0.0.1:8000/` (Main's baseline `_site` build). Browser: native Eval headless Chromium.
Storage: cleared before each first-visit probe. Labels: `observed` / `computed` / `sampled` / `not-run`.

## Census (computed, source + built site agree)

- 13 books, 942 TOC chapters, 942 chapter JSON files; zero missing, zero orphans, zero duplicate IDs.
- Full table: `../census/baseline-toc-census.json`.
- IJ structure (observed via HTTP): part-1 = 77 chapters (p1c1–p1c77), part-2 = 12 note chapters (p2c1–p2c12, "Notes 1–23" … "Notes 385–388"). IDs PROVISIONAL per TextCurator.
- IJ endnotes (observed): chapter JSON carries NO link markup — paragraphs are plain strings, no `<a>` tags, no `[^n]`/`[n]` ref patterns in sampled chapters (p1c1/p1c5/p1c10/p1c24). Note chapters are plain numbered paragraphs ("1. Methamphetamine hydrochloride…"). So F12 round-trip navigation does not exist at baseline; any final note-linking is new ReaderLead/TextCurator behavior to verify, format TBD per SupIJ-2.

## Screenshots (all viewed, not just saved)

| File | View |
|---|---|
| `home-1440.png` / `home-820.png` / `home-390.png` | Library home, dark first-visit, 13 cards, theme switcher, search/sort |
| `atlas-cover-1440.png` | Atlas cover: gold-on-iron grid + glow, serif title, Begin/TOC/Library |
| `atlas-read-1440/820/390.png` | Atlas ch.1 opener (top-of-page; opener art is minimal rule/diamond) |
| `atlas-read-scrolled-1440.png` | Atlas ch.1 mid-reading: calm serif body, comfortable measure |
| `atlas-toc-1440.png` | TOC drawer open: parts, per-chapter words/mins, filter, progress line |
| `atlas-settings-1440.png` | Settings: 9 theme swatches, size/leading/typeface/measure rows |
| `ij-cover-1440.png` / `ij-read-1440.png` | IJ cover (green dotted) + ch.1 mid-reading |
| `home-390-overflow.png` | Home at 390 with theme-switcher overflow (see defect B2) |

Baseline aesthetic note (for before/after honesty): covers differ only by accent token + grid/dot background; all books share one layout, one serif/sans pair, one chapter opener grammar (part line / title / number / rule). This is exactly the "weak artistic change" the relaunch must beat — final judgment comes from rendered post-integration pages.

## Functional probes (observed, Atlas unless noted)

- F1 Begin reading: PASS — ch.1 loads, 405 paragraphs render.
- F2 TOC + filter: PASS — 30 chapters listed; filter "galt" narrows to 2; empty-state element exists.
- F3 TOC Escape: PASS — closes.
- F4 Settings options: PASS with note — theme/size/leading/font/measure all apply when clicked (earlier `size:md` reading was my click missing a hidden-behind-scroll row; direct `.click()` on xl applied: `--text-size: 1.7rem`). Size buttons measured 0x0 while settings closed — expected (hidden panel), not a defect.
- F5 Settings Escape: PASS — closes, focus returns to `#btn-settings`.
- F6 Pref persistence: PASS — theme sepia survived reload.
- F7 Next/Prev: PARTIAL — next advanced THE THEME → THE CHAIN, prev disabled on first chapter; BUT after Next, `scrollY` read 28315 instead of 0 (mid-page landing — possible scroll-restore race or measurement before scroll-to-top; flag for ReaderLead, re-verify at final).
- F8 Keyboard j/k/t/s: PASS — all fire (j next, k prev, t TOC, s settings).
- F9 Progress + resume: PASS — progress 51.6% at half scroll; scrollY persisted; cover offered resume; resume restored scrollY=11537 (nonzero; exact fidelity not asserted).
- F10 TOC read/progress: not-run at baseline (deferred to final; mechanism `markRead` at >80% scroll / Next observed in code only).
- F11 Small-screen TOC/keyboard: not-run at baseline beyond overflow numbers below.
- F12 Notes round trip: NOT PRESENT at baseline (no ref markup — see IJ notes above).
- F13 Error state: PARTIAL — missing chapter JSON returns HTTP 404 (observed); the in-reader error box + retry path is closured (`openChapter` not reachable externally) — final must exercise via UI or exposed hook; cannot be string-presence-tested.
- F14 Home search/sort/theme/shelf: PASS (shelf not-run) — "nietzsche" → 5 of 13; nonsense → empty state; sort Title A–Z reorders; theme light applies + persists `literary-library-theme=light`.
- F15 Console/network: PASS except B1 — no errors on home/cover/read/TOC/settings flows.

## A11y / robustness (observed + computed)

- A1 Focus: PARTIAL — `:focus-visible` rules exist for all control classes (computed in CSS); programmatic focus on a theme swatch showed no visible outline in that state (observed `outline: none`-equivalent) — needs real Tab-through at final, all dialogs.
- A2 Contrast (Atlas dark, computed from composited colors): body 15.64:1, meta/accent 9.53:1 — PASS.
- A3 Reduced motion: not-run at baseline (reader gates its entrance animation on `REDUCED_MOTION`; final must emulate + observe).
- A4 Overflow: home@390 = +14px horizontal overflow (FAIL, see B2); reader@390 = 0 (PASS). Touch targets not-run.
- A5 Dark-first: PASS — clean first visit paints `data-theme="dark"` on home and reader.
- A6 Landmarks/headings: not-run (deferred to final snapshot pass).
- A7 Hotlinks/fonts: PASS at baseline — no stock hotlinks (Google Fonts only); Cormorant Garamond actually applied to body text (observed computed `font-family`, serif rendered in screenshots).

## Baseline defects (forward to owners; re-verify at final)

- **B1 (blocking, ReaderLead)** — "← Library" / `#btn-library` throws `ReferenceError: LIBRARY_HREF is not defined` (observed pageerror at `shared/reader.js:783`, URL unchanged). The cover's `data-action="library"` path hits the same unbound name. Library return is broken everywhere at baseline.
- **B2 (HomeEngineer)** — home theme switcher overflows +14px at 390px (observed culprits: `.theme-control/.theme-switch` + 2 swatch buttons extend past viewport). The relaunch also demands a spacious, non-cramped theme control.
- **B3 (ReaderLead)** — post-Next scroll position suspect (observed scrollY=28315 right after Next; expected ~0). Could be probe timing; re-verify with settled measurement.
- **B4 (ReaderLead/Main)** — `scripts/build_site.sh` copies only index/theme/meta/toc/chapters; any new art/design/font/manifest assets will silently miss `_site` unless extended.
- **B5 (TextCurator→SupIJ-2→ReaderLead)** — IJ has no note-ref markup and no note-link behavior; final F12 needs the TBD ref-markup format + rendered round trips.
