# Finish the Literary Library with Step 5 Preview Free

The user explicitly selected **Step 5 Preview Free** for the main agent and all subagents after exhausting the Muse Spark weekly quota. Use native OpenCode `opencode/step-5-preview-free`, variant **high** (the highest variant in this client's Step 5 model entry). Never switch to Muse, Luna, another provider or a paid model. The successful native connectivity test recorded cost 0. The free promotion is time limited; if the selected free model stops being free or available, stop inference and report the actual error instead of silently falling back.

## This is a closeout, not a new design engagement

Continue the existing implementation. The user loves the new homepage and wants its artistic ambition everywhere, with distinct book identities and calm long-form prose. Read `.omp/design/USER-FEEDBACK.md`, `.omp/design/READER-CONTRACT.md`, the latest portions of `.omp/design/STATUS.md`, and the relevant latest review files. The old OMP transcript remains on disk, but do not reread its entire multi-hour history. Existing files and current browser behavior are authoritative.

The original scope is thirteen books, their chapter-specific artwork, functional shared reader controls, Infinite Jest extraction/endnotes, and final built-site review. Most book tracks have reached conditional acceptance. Avoid redoing their research, art directions or accepted artwork. Finish unresolved work and verify carried conditions.

Current source inspection at this handoff:

- All thirteen books have canonical art directions and chapter-art manifests. Twelve manifests explicitly cover their full TOCs. Gay Science intentionally combines 259 manifest entries with authored CSS seed treatments for the remaining short entries; inspect those treatments before calling them missing.
- Infinite Jest has 89/89 manifest keys. Its prior supervisor was finishing cohort and shell integration when the previous runtime ended. Read `books/infinite-jest/design/INTEGRATION.md`, `COVERAGE.md`, all cohort phase-2 briefs, its current `theme.css`, `ledger.js`, art and manifests. Complete its actual missing implementations and final independent review.
- Latest per-book acceptance reports are in `.omp/design/evidence/integration/wave3/`. These are conditional passes, not evidence that every shared condition is closed. Read the most recent round per book and the main supplements. Resolve remaining real shared defects and confirm prior fixes hold.
- Shared reader v1/v1.1 exists, including art slots/manifests, symbol extraction, events, endnotes and keyboard behavior. The previous main fixed TOC shortcut pollution, touch-target sizing, dialog/main roles, theme swapping and repeated resume labels. Verify current behavior instead of trusting those claims.
- The user reported Wide reading width broken in Infinite Jest p1c32. Codex fixed `shared/reader.css` after the original run. Preserve the **unlayered reading-preference section at the end**, including `--reader-measure`, the reader-body alias and explicit prose cap override. Desktop width settings were exercised on a chapter in each of thirteen books; IJ p1c32 was also checked at desktop/tablet/phone and after reload. Evidence: `.omp/design/evidence/reading-width-fix/verification.json`. Do not restore a theme/chapter character cap over the user's selected width.

## Real hierarchy with focused assignments

The primary `library-producer` owns final integration and required shared fixes. Launch real native `task` subagents with the configured named agents. These are new native OpenCode sessions; old `agent://` OMP IDs are not live addresses here.

Start three useful tracks:

1. **book-infinite-jest-supervisor** — finish IJ using existing cohort work, art, source text and accepted art direction. Own `books/infinite-jest/index.html`, `theme.css`, `ledger.js`, `art/**` and `design/**`; do not change repaired chapter prose or the shared reader. Spawn a **library-chapter-lead** for concrete unfinished cohorts, one at a time. Leads must use actual **library-designer → library-engineer → library-validator** sessions where there is unfinished work, with the designer reviewing existing work and the engineer acting on specific findings. Do not spawn empty roles or restart completed cohorts. Obtain an independent assembled-book review.
2. **library-art-director** — independently inspect the actual rendered IJ experience and selected previously accepted book pages against the user's homepage benchmark. Produce concrete taste/typography/composition findings with viewed screenshots. Read the existing approved direction; do not invent a new collection aesthetic. Reports only.
3. **library-final-validator** — inspect all latest conditional passes, exercise shared controls against the built site, census real chapter IDs/assets/manifest references and alternative authored treatments, and write exact remaining fixes. Reports only. Ask the primary producer for shared changes; ask the IJ supervisor for book changes. Re-review repaired findings.

Keep at most two books actively changing and approximately six worker calls in progress, including descendants. The three initial tracks are enough to start. A supervisor runs one chapter team at a time; a chapter lead sequences its specialists. Use Task's returned continuation IDs to revisit the same worker instead of recreating it. Native Task child results and concise files replace OMP `agent://`, `proc://`, `local://`, `history://`, Eval and `yield` protocols; do not attempt those unsupported URIs.

Each assignment names exact files/chapters and an expected artifact. Only one writer owns shared files, and one supervisor integrates IJ theme/index/manifest changes. Cohort engineers own disjoint new cohort files. Reviewers never edit implementation. No large agent census broadcasts, repeated progress polling, redundant reading of complete skill bundles, or new speculative redesign waves.

## Skills and browser tools

Use the coherent frontend-design + frontend-workflow system. Local skill sources are listed in `.omp/design/SKILL-MAP.md`; the native `skill` tool may discover them too. Designers read frontend-design; engineers use frontend-workflow; reviewers use visual-critique and review-skill. `/designer` mode was not enabled and must stay off. Read only relevant skill content once per worker.

OpenCode has no OMP Eval browser. Use the existing Playwright installation from native Bash/Node, and inspect resulting PNG/WebP files with the native Read tool (Step 5 supports images). No additional browser MCP installation is needed.

Verified local browser setup:

```js
import { chromium } from '/home/prateek/.npm/_npx/48b1ca104c3549f4/node_modules/playwright/index.mjs';
const browser = await chromium.launch({
  headless: true,
  executablePath: '/etc/profiles/per-user/prateek/bin/chromium',
  args: ['--no-sandbox']
});
```

Use available local browser paths if these change. The earlier browser MCP failed only because it expected `/opt/google/chrome/chrome`; the above Chromium launch was verified working. Do not spend turns diagnosing that obsolete MCP path.

Current review server should be checked, not assumed. Preferred URL is `http://localhost:8000/` serving `_site`; `:8099` was another review server. Build with `bash scripts/build_site.sh`, which copies book JS, art, manifests, fonts and notes metadata. Start a persistent localhost server if needed. Review the built site and original reader URLs, not just isolated HTML mockups. Never claim an art treatment works from the JSON or CSS alone.

## Acceptance and artistic care

Keep the homepage's approved creative spirit, original authored illustrations and book-specific identities. Inspect entrances, representative chapter openers, prose, TOC/settings, navigation, notes and endings at 1440×1000, 820×1180, 390×844. For IJ include p1c32 (the user's actual reading chapter), filmography/endnotes, chapter transitions and the finale. Test theme, size, font, leading and width controls; persistence after reload; resume; focus; Escape/backdrop; keyboard shortcuts; notes forward/back; overflow; reduced motion; console/network failures.

Use source/asset census for exhaustive structural claims and record exact visual samples. Gay Science seed treatments count only when their source and actual activation are demonstrated. Distinguish observed, computed, sampled, prior evidence and not-run. Reuse successful evidence for unchanged parts but do not turn stale conditional reports into fresh PASS claims.

Resolve material REVISE findings and re-inspect. Do not approve merely because a build or HTTP 200 passes. Preserve original text and the PDF-backed IJ audit. Do not alter prose to accommodate art. Do not replace the accepted homepage or book systems with generic cards or repeating gradients.

## Delivery and state

Keep `.omp/design/STEP5-STATUS.md` current at meaningful milestones, with real native session/task IDs and unresolved conditions. Write an independent review under `.omp/design/evidence/step5/`, then have the producer write `.omp/design/STEP5-FINAL.md` with the running server URL, changes actually completed, per-book verdicts, exact tests and visual coverage, and remaining limitations.

Also write `.omp/design/STEP5-STATE.json` with `status` (`working`, `complete`, or `blocked`), `remaining` (array), `session_ids` (object), and `evidence` (array). Only use `complete` when all required remaining work and review gates are closed. If a free-tier/provider problem blocks inference, preserve progress and report the exact error. Do not call a queued job done.

Work locally. Do not commit, push, publish, share sessions, send external messages, delete user work, or use another model/provider. Continue through implementation, independent review, repairs, final build and live verification. Do not end after a plan or delegation report.
