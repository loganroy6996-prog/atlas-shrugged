# Cohort D review brief (supervisor-issued, 2026-10-16)

You are reviewing **cohort D (p1c41–p1c53)** of the Infinite Jest reader as it is
**already merged into the built site**. Cohort B (p1c14–p1c27) was merged in the
same pass; you may look at its openers for cross-cohort defects but D is your scope.

## Read first (do not re-research the book)

- `books/infinite-jest/design/ART-DIRECTION.md` (FINAL identity — §5 opener
  scaffold, §6 calm core, §9 cohort-D grammar "gala programs, feast menus,
  speaker-meeting handbills; seals crowd the frame as November deepens")
- `.omp/design/critiques/infinite-jest.md` — binding J1–J8
- `books/infinite-jest/design/INTEGRATION.md` — merge protocol + §5 guardrails
- `books/infinite-jest/design/cohort-d.json` (designer locked record rev5) and
  `books/infinite-jest/design/cohort-d.css` (what actually shipped)
- `books/infinite-jest/design/COVERAGE.md` (what the other cohorts already closed)

## What is live

- Built site: **http://127.0.0.1:8000/** (serves `_site`, rebuilt 2026-10-16 with
  cohort B + D merged into `theme.css` §11).
- **NO CSS INJECTION.** If you want to test a hypothesis, do it by rendering the
  real built page; a Playwright `addStyleTag` experiment is allowed only as a
  clearly-labelled exploratory probe, never as evidence of a defect or a fix.
- 89/89 plates resolve; `#chapter-art` renders the authored SVG; the ledger filing
  band, docket TOC and note ticks are JS-painted.

## Verified render harness (use exactly this)

```js
import { chromium } from '/home/prateek/.npm/_npx/48b1ca104c3549f4/node_modules/playwright/index.mjs';
const browser = await chromium.launch({
  headless: true, executablePath: '/etc/profiles/per-user/prateek/bin/chromium', args: ['--no-sandbox'],
});
const page = await (await browser.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
await page.goto('http://127.0.0.1:8000/books/infinite-jest/index.html', { waitUntil: 'networkidle' });
await page.evaluate(() => document.getElementById('cover-continue')?.classList.remove('hidden'));
await page.click('[data-action="begin"]');            // first chapter
await page.click('#btn-toc'); await page.waitForTimeout(350);
await page.evaluate((cid) => document.querySelector(
  `#toc-list .toc-chapter[data-chapter-id="${cid}"]`)?.click(), 'p1c41');
await page.waitForTimeout(1200);
// scroll: window.scrollTo(0, y) or el.scrollIntoView(); wait 500ms before screenshot
await page.screenshot({ path: 'out.png' });
```

Note: the only console error you will see is `/favicon.ico` 404 — that is a
site-level missing icon shared by every book, NOT an IJ defect. Do not report it.

## Required coverage

Cohort D openers p1c41, p1c42, p1c43, p1c44, p1c45, p1c46, p1c47, p1c48, p1c49,
p1c50, p1c51, p1c52, p1c53 — 1440×1000 **and** 390×844 (13+13 shots).
Then at 820×1180: p1c43, p1c46, p1c49, p1c53.
Then mid-chapter scroll positions for the within-flow apparatus:
p1c46 (concavity divider sits BEFORE paragraph 102 of 162), p1c51, p1c53,
p1c47 (longest), and any chapter whose CSS assigns `.ij-insert` or braid blocks.
Minimum ~40 screenshots. Inspect every one yourself with the image reader.

## Known / do-not-report (supervisor-owned, already tracked)

- **A.0 chapter-end seal is not yet wired** (`--ij-endmark` renders `none`).
  Supervisor is wiring it from `chapters.json year_seal`. Do not report; you may
  comment on WHICH seal/glyph each chapter should carry if you disagree with the
  `year_seal` values or cohort-d.json `endmarks_a0` (p1c48 undersea rings,
  p1c49 cracked tooth, p1c52 dissolving mask).
- **Newsreader 600 byte-equals 400** (font-fetch quirk). Anything relying on a
  distinct 600 cut (drop caps, bold serif) is not a defect yet.
- `favicon.ico` 404 (see above).
- p1c45's mid-section scene cut is Wallace's own (TextCurator PDF pp.416-421)
  and must be served as-is with a ledger-rule frame + scene-cut tick. Only report
  if the frame/tick itself is broken or if it mangles text rhythm (J4).

## What to judge (be concrete and visual)

1. **Does D read as its own grammar?** ART-DIRECTION §9: gala programs, feast
   menus, speaker-meeting handbills, seals crowding the frame as November
   deepens. Compare against the already-accepted cohorts (C/E/F/G rendered on the
   same built site: p1c35, p1c38, p1c60, p1c77, p2c2). Is D's plate/insert
   language distinct, or is it a generic repeat of another cohort's?
2. **J2** — plates above prose, dividers bounded and clearing the measure, never
   mid-paragraph full-bleed. Check p1c46/p1c51/p1c53 braids and every insert.
3. **J3** — Archivo Black title clamp survives the longest D titles at 390px
   (p1c43 and p1c44's "Interdependence Day" titles, p1c51/52's Tucson outcropping
   titles) with no overflow, no clipping, no `overflow: hidden` truncation.
4. **J4** — found-paper inserts bounded and honest; prose untouched (compare
   paragraph text against `data/chapters/p1c4x.json` — text must be identical).
5. **J5** — zero violet in Part I. Also check no gold lingers anywhere it
   shouldn't; check the D tick/insert colors read gold, not gray.
6. **P1 / phone** — plate art ≥200px on 390px, never `display:none`; marginalia
   collapse below the paragraph, never overlay prose; no horizontal overflow
   (`scrollWidth <= clientWidth`).
7. **Contrast ≥4.5:1** for any small text you see in D's apparatus (compute it,
   don't eyeball it — the theme's Faint token is non-essential micro-labels only).
8. **Craft**: is anything misaligned, orphaned, double-ruled, clipped, or
   accidentally generic (repeating rail rules, numeral badges, gradient tints,
   pseudo-element confetti)? Say exactly where, with a screenshot.

## Deliverable

Write `books/infinite-jest/design/DESIGN-FINDINGS-D.md`:

- A findings table: `ID | chapter(s) | viewport(s) | severity (BLOCKER/REVISE/NIT)
  | what is wrong (visual) | exact CSS selector/file+line to change | proposed fix`
- A short "what works" section (so the engineer does not break it).
- Every BLOCKER/REVISE must cite a screenshot filename.
- Screenshots go to `.omp/design/evidence/step5/ij/d-review/<name>.png`.
- Summarize your findings in your final message to me.

**You may NOT edit** `theme.css`, `index.html`, `ledger.js`, any cohort CSS/JSON,
`design/chapters.json`, any prose file, or anything under `shared/`. Reports only.
