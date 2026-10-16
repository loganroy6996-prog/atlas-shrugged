# ReaderLead brief — library-engineer (disjoint assignment #1)

Session: recovery closeout, Step 5 (model fixed: opencode/step-5-preview-free, high).
Owner of this assignment: **library-reader-lead**. You (library-engineer) are the
single writer of `shared/reader.css` for this batch. Nobody else edits that file.

## Your files (ONLY these)

- `shared/reader.css` — append one section at the very END of the file. No other edits.
- You MAY run `bash scripts/build_site.sh` (writes `_site/`).

You MUST NOT edit: `books/**` (book themes are owned by other agents), `shared/reader.js`,
`shared/art.css`, `index.html`, `css/**`, `scripts/**`, `.omp/design/**` (except reading).

## Context (do not re-research)

Defect: `shared/reader.css` ends with the layered Contract A.3 block; an unlayered
book rule always beats layered shared rules, so the reading preferences are dead —
IJ p1c32 pinned at 592px in narrow/standard/wide, Atlas p1c3 pinned 656/764/764 with a
pinned 20.48px font size, Being and Time p2c19 pinned at 544px, and Serif/Sans cannot
change IJ or Open Letter prose. Full detail: `.omp/design/STEP5-RECOVERY.md`,
`.omp/design/evidence/step5/validator/phase1b-midprobe.json`.

## Task

Append the block in `.omp/design/evidence/step5/reader-repair/reader-preference-override.spec.css`
to the END of `shared/reader.css`, verbatim.

Read the spec first — its header documents why each selector is shaped the way it is.
It is unlayered (so it beats unlayered book pins), carries two ids so its specificity is
≈ (2,5,3), above the strongest book pin measured in `books/**` (max (1,4,3)), and uses NO
`!important`. Verify before you append:

1. `tail -30 shared/reader.css` — the file must still end with the layered A.3 block
   (`@layer shared { … html:root[data-measure="wide"] #chapter-nav … }`). Append AFTER it.
2. Do not delete or reorder anything. Keep the layered A.3 block untouched.
3. Copy the spec file's content byte-for-byte (comment header included) after line 1824.
4. `wc -l shared/reader.css` must go from 1824 → 1824 + (spec lines).

## Self-check (fast, before you report)

1. `bash scripts/build_site.sh` must succeed.
2. Serve the built site on port **8181** in the background:
   `python3 -m http.server 8181 --bind 127.0.0.1 --directory _site` (run_in_background).
3. Playwright (verified launch) smoke probe — exactly two books, desktop 1440x1000:
   - Infinite Jest `p1c32`: set measure wide (settings → Line length → Wide) and read a
     long plain mid-chapter paragraph (`#chapter-text > p` with no class, index ≥ 10,
     length > 400 chars). `getBoundingClientRect().width` MUST be ≥ 1024.
     Then set size sm → lg and report both computed `fontSize` values (must differ).
   - Atlas Shrugged `p1c3`: same paragraph choice; report widths at narrow/standard/wide
     and computed `fontSize` at sm/md/lg/xl.
   Launch: node with `import { chromium } from '/home/prateek/.npm/_npx/48b1ca104c3549f4/node_modules/playwright/index.mjs'`,
   `executablePath: '/etc/profiles/per-user/prateek/bin/chromium'`, `args: ['--no-sandbox']`, `headless: true`.
   Drive the real UI: `#btn-settings` to open the panel, then
   `.seg-btn[data-pref="measure"][data-value="wide"]`, `.seg-btn[data-pref="size"][data-value="sm"]`, …
4. Confirm `document.documentElement.scrollWidth <= clientWidth` in both probes.

Kill your background server when done (do not leave stray servers on 8000/8099/8181).

## Report back (concise, exact)

- exact diff summary: lines added, selector count per pref group, whether the layered A.3
  block is untouched (`git diff --stat shared/reader.css` + `tail -5` output is enough)
- the smoke numbers above (book, paragraph index/length, width per measure, fontSize per size)
- any place the spec had to be adapted and why (report immediately if you cannot append verbatim)
- any runtime/tool failure verbatim
