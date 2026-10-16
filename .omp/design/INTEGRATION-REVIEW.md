# Integration Review — Final Validator Acceptance Contract

Owner: `FinalValidator` (library-final-validator). Evidence root: `.omp/design/evidence/integration/`.
Skills loaded and applied: `frontend-workflow`, `visual-critique`, `review-skill` (content verified by direct read of local fallbacks per SKILL-MAP.md); design judgment additionally informed by `frontend-design` (read, not claimed as assigned skill).

Baseline server (wave 3): `http://127.0.0.1:8099/` serving current `_site` build (rebuilt 2026-10-15; supersedes the pre-wave-3 `:8000` baseline, whose findings remain in `evidence/integration/baseline/` for before/after honesty). This contract is published BEFORE final integration; it is the fixed bar the built site will be judged against. It will not be softened to fit what lands.

## 1. Verdicts

- **PASS** — all blocking checks observed passing on the built site; remaining minor issues listed explicitly.
- **REVISE** — specific, evidenced defects with owner + smallest fix; re-inspection required.
- **BLOCKED** — prerequisite missing (e.g. no rebuild, server down, manifest absent); states exactly what was tried and what is needed.

## 2. Evidence discipline

Every check result is labeled exactly one of:

- `observed` — I exercised it in the native Eval browser and viewed the result (screenshot/DOM/console).
- `computed` — deterministic census over source or built site (script output saved under `evidence/integration/census/`).
- `sampled` — N of M items checked; the sample list is recorded, never extrapolated to "all".
- `not-run` — named explicitly with the reason; never silently omitted.

Colors in source, a successful build, or HTTP 200 is never cited as proof of design quality or working behavior.

## 3. Baseline (pre-integration)

Captured while design tracks work, using the frozen baseline build at the URL above:

- `evidence/integration/baseline/ACCEPTANCE-BASELINE.md` — what the pre-redesign site does today, with screenshots.
- `evidence/integration/baseline/*.png` — home + one book cover + one reading chapter at desktop/tablet/phone (viewed, not just saved).
- `evidence/integration/census/baseline-*.json` — TOC/ID/asset census method + counts, reproducible after integration.

## 4. Structural census (computed, 100% coverage — every book, every TOC chapter)

Run against the FINAL BUILT `_site`, not just source:

1. **TOC resolve** — every chapter ID in every `books/<slug>/data/toc.json` has a readable `data/chapters/<id>.json` in `_site` returning 200 with non-empty paragraphs.
2. **Manifest entries** — every real chapter ID has an entry in the book's chapter manifest keyed by real ID (includes part + order + full title so IJ provisional IDs can remap; IJ IDs are PROVISIONAL per TextCurator until the PDF-audit freeze — no final manifest lock for IJ before that notice).
3. **Assets reach the build** — every asset referenced by theme/design/manifest (art SVG, fonts, CSS, JSON) exists in `_site` and returns 200; build script copies all new `art/`, `design/`, font, manifest assets (current `build_site.sh` copies only index/theme/meta/toc/chapters — a REVISE if unchanged and assets exist).
4. **Treatment activation** — for each chapter, the intended treatment actually activates: `body[data-chapter]`-driven selectors match the live DOM, opener/motif element present, computed styles differ from the quiet body baseline where the manifest claims a treatment. String-presence in CSS does not count.
5. **Chapter counts match the real TOC** — observed counts re-read from TOC files, never recycled from old reports (baseline inventory: 13 books / 942 chapters per config-preflight; recompute at final).

## 5. Functional checks (observed by real interaction, per book unless noted)

| # | Check | Method | Pass |
|---|-------|--------|------|
| F1 | Begin reading → first chapter loads, text renders | click Begin, observe | chapter title + paragraphs visible, no error box |
| F2 | TOC opens, filter narrows, chapter jump works | click TOC, type filter, click chapter | drawer lists real titles; filter hides non-matches + empty-state on no match; jump loads chapter |
| F3 | TOC Escape closes; focus returns sanely | press Escape with drawer open | drawer closes, no console error |
| F4 | Settings opens, every offered option applies | click each theme/size/leading/font/measure control | computed styles change; no dead control |
| F5 | Settings Escape/backdrop closes | Escape + backdrop click | panel closes, focus to settings button |
| F6 | Preferences persist across reload | set non-default prefs, reload | prefs intact (localStorage key + computed styles) |
| F7 | Next/Previous chapter navigate; ends disable correctly | click prev/next at first/mid/last chapter | titles update, scroll resets, disabled states correct |
| F8 | Keyboard: j/k next/prev, t TOC, s settings, cmd/alt-arrows | press each in reader | actions fire; ignored inside inputs |
| F9 | Progress bar + resume across reload | scroll mid-chapter, reload, check cover resume | progress width > 0; resume restores chapter + scroll |
| F10 | TOC read/progress updates | finish chapter (scroll >80% or Next) | TOC shows read check + progress line updates |
| F11 | Chapter search/nav on small screens | 390px: open TOC, use filter | usable, no overlap, keyboard does not trap |
| F12 | Notes/endnotes (IJ + any book with notes) | click note ref → note; click return → ref | round trip lands at correct anchors; focus visible |
| F13 | Error state: broken chapter id shows retry UI, not blank | request nonexistent chapter via console/openChapter | error box + retry button; retry recovers |
| F14 | Library home: search/sort/theme/continue shelf | type, sort, switch theme, revisit with progress | grid filters, order changes, theme applies, shelf lists resume |
| F15 | No console errors; no failed network requests | console + requests during full pass | zero errors; zero 404s on required assets |

## 6. Visual checks (observed from viewed screenshots, built site only)

Viewports: desktop **1440×1000**, tablet **820×1180**, phone **390×844** (per RELAUNCH Phase D). Protocol per visual-critique: scroll top→bottom→top once (reveal trigger) before full-page capture; plus section captures (cover hero, chapter opener, mid-reading, TOC drawer, settings, footer/nav).

Per book minimum:
- Entrance (cover) at all three widths.
- Representative chapter openers spanning the book's parts/moods at all three widths (chapters named in evidence).
- One additional capture per chapter cohort + every exceptional layout (long title, notes/filmography/poetry, very long/short sections).
- Exact chapters + viewports recorded per screenshot. Visual sampling ≠ structural coverage; never claim all chapters visually reviewed.

Judged against `frontend-design`: distinct book identity (title/color swap must feel wrong on another book), typography with personality + calm body text, deliberate chapter variation (no modulo/hash tinting, no lone pseudo-element "redesign", no label-on-gradient illustration), authored SVG/CSS/canvas art at useful scale, art never obscuring prose.

## 7. Accessibility / robustness checks (observed + computed)

- **A1** Visible focus on every interactive element (Tab through cover, reader, TOC, settings).
- **A2** Contrast of body/heading/muted text against the COMPUTED composited background (sampled per theme, esp. default dark-first paint) — 4.5:1 body, 3:1 large.
- **A3** `prefers-reduced-motion` honored: no autoplay ornament, transitions simplified.
- **A4** No horizontal overflow at any required width; no clipped text; touch targets ≥44px on phone.
- **A5** First-visit default is dark; saved explicit preferences respected; every offered theme works and is spacious (rejected cramped treatment stays gone).
- **A6** Landmarks/headings: one h1 per view, logical order, dialogs labelled.
- **A7** No stock-photo hotlinks (Unsplash/Pexels/Pixabay/CDN) unless user-supplied; fonts declared actually load and affect computed styles.

## 8. Known baseline defects (pre-existing, tracked for final)

1. `shared/reader.js` references bare `LIBRARY_HREF` (lines ~777/783) but defines no such binding — only `cfg.libraryHref` + `BASE_URL` exist. "← Library" buttons likely throw `ReferenceError` at click time. **ReaderLead**: confirm intended resolution + add regression check. My final F-run will click these buttons.
2. `scripts/build_site.sh` copies only index/theme/meta/toc/chapters — new `art/`, `design/`, font, manifest assets will NOT reach `_site` unless the script is extended. **ReaderLead/Main**: fix before final build or every book's art census fails.
3. IJ chapter IDs provisional until TextCurator freeze (SupIJ-2 notice). Final IJ manifest check runs only after the freeze relay; cohort JSONs must carry part+order+title for remap.
4. `books/gay-science/{art,design}/` directories exist but are empty at baseline — placeholder-free final expected (no empty-dir cop-out counted as art).

## 9. Review rounds

- Prototype reviews: REVISE requests sent per book as prototypes arrive (via `agent://` + evidence file), repairs re-inspected.
- Final integration review: full census + functional + visual pass over the rebuilt site; verdict per book + shared tracks.
- Max 3 review cycles per item; remaining defects after that are reported, not waived.

## 10. What PASS requires

Observed behavior + viewed screenshots for everything above at the listed coverage. No extrapolation from samples, no source-color claims, no build-status-as-quality. The final yield names the server URL used, per-book verdicts, exact visual sampling coverage, remaining defects/unverified axes, and evidence paths.
