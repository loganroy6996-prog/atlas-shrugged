# Literary Library: art direction and delivery contract

This is the new brief for resumed session `01a13c82-a202-70ab-b62c-c79fb880f998`. It supersedes the previous run's aesthetic shortcuts and unsupported completion claims. Preserve useful existing work and the user's uncommitted files.

## The user's actual request

Make this an exceptionally beautiful, useful website for reading the books. The previous result looked substantially unchanged and was rejected. The user prefers **dark themes** and wants more art, richer color, distinct typography, book-specific identities, chapter-specific treatments, working reading features, and a real hierarchy of collaborating subagents. Infinite Jest's chapter boundaries and text were reported broken; validate the previous repair against the available PDF and fix remaining defects. The user explicitly authorized extensive autonomous design and implementation. Do the work without another approval round.

Beauty is a central acceptance criterion. A new accent color, thin rule, chapter numeral, repeated gradient, CSS pseudo-element, or a larger number of agents is insufficient. Agent roles below must be actual spawned agents with independent deliverables, not one worker pretending to be several roles in its final report.

## Runtime requirements

- Main and every worker: `opencode-go/muse-spark-1.3-contributor:max`. Every task spawn must use the named project agent and `effort: hi` (OMP maps this to the model's highest supported effort). The project ceiling is `max`.
- No prewalk, no automatic downgrade to smol, no substitution of a cheaper model. The model is pinned in every agent definition and model override.
- Asynchronous collaboration is enabled. Start independent books and shared work promptly. Use agent messaging and bounded ownership. A waiting supervisor must yield to the runtime, not run shell sleeps or busy-poll.
- All agents read this contract. Use `skill://frontend-design` and `skill://frontend-workflow` as the coherent design workflow; designers also use reference-study, and visual reviewers use visual-critique and review-skill. If a skill URI is unavailable, read the explicit local paths in `.omp/design/SKILL-MAP.md` and record the fallback. Do not claim an unread skill was loaded. `/designer` is off in this directory; do not enable a second, conflicting art-direction framework.
- Use OMP's native browser/Eval tools. Browser automation and screenshots must actually execute and be viewed. Do not install another browser MCP while the native browser works.

## Hierarchy and actual responsibility

The resumed main agent is the executive producer and integration owner. Keep a live roster in `.omp/design/ROSTER.md`, with actual agent IDs, supervisor, assigned files/chapters, phase, and evidence links. Keep `.omp/design/STATUS.md` current at phase boundaries. Mark queued, running, blocked, rejected, and accepted accurately.

Start these independent top-level tracks:

1. `library-art-director`: inspect the actual website, diagnose why its visual changes are weak, create the shared design principles, critique book directions and final rendered pages. This agent can reject a book on taste. Its deliverable is concrete art direction and actionable critique, never just a ban list.
2. `library-home-engineer`: redesign the library entrance and browsing experience using a considered art direction, real book content, authored cover artwork, and useful navigation. Own `index.html`, `css/library.css`, and `assets/library/**`; coordinate any catalog metadata change with the main agent. Read and apply frontend-design and frontend-workflow; obtain director review.
3. `library-reader-lead`: own shared reader behavior, accessibility, reader chrome, and the data-driven integration contract for book/chapter art. Own `shared/**`, `scripts/generate_book_pages.py`, `scripts/build_site.sh`, and `assets/shared/**`. Publish `.omp/design/READER-CONTRACT.md` early. Spawn a separate designer, engineer, and validator for shared work when useful. Only one shared-file writer at a time. Keep the static stack and existing URLs.
4. `library-text-curator`: independently audit Infinite Jest against the actual local PDF, TOC, chapter JSON, section starts/ends, paragraph order, page artifacts, endnotes, and note links. Own only `scripts/build_library.py`, `books/infinite-jest/data/**`, and Infinite Jest text metadata after coordination with its supervisor. Preserve author text. Record the exact source pages and sample boundaries inspected, distinguish a structural census from sampled textual verification, and repair supported defects. Do not call the entire text correct from a few spot checks.
5. `library-final-validator`: establish independent functional and visual acceptance checks; run the final integration review after changes land. Can reject work and request repairs. Start baseline capture while others design.
6. All thirteen `book-<slug>-supervisor` agents, one for each actual catalog book. Each is responsible for a finished book experience and every chapter in its TOC, and must really spawn chapter team leaders. Main owns final integration, not every book's CSS.

Book supervisor → `library-chapter-lead` for each chapter cohort → separate `library-designer`, `library-engineer`, and `library-validator`. Supervisor may also spawn these specialists for the book cover, typography system, and global book shell. Use a shared specialist definition for many named instances; give each its exact book, cohort, ownership, paths, and design brief. Do not create an agent for each trivial CSS declaration.

Use natural part boundaries and subject matter to form chapter cohorts. Small books may have one cohort; long books should have several parallel cohorts. The Gay Science's many short aphorisms require a complete authored chapter map and part/cohort art systems, not hundreds of redundant leaf workers. Every chapter must still have a deliberate, recorded treatment tied to its content. Do not assign fictional chapter counts: use `.omp/design/BOOK-INVENTORY.json` and re-read the current TOC.

### Ownership and parallel edits

- A book supervisor owns `books/<slug>/index.html`, `books/<slug>/theme.css`, `books/<slug>/art/**`, `books/<slug>/design/**`, and new book-specific design JSON. Cohort workers own disjoint new files such as `books/<slug>/art/<cohort-id>.svg`, `books/<slug>/design/<cohort-id>.json`, and `books/<slug>/design/<cohort-id>.css`. Supervisors integrate these into book-level files sequentially. Never have multiple workers append to the same theme.css concurrently.
- Chapter specialists cannot edit shared reader files, other books, extraction scripts, or chapter prose. Request shared changes from the reader lead. Book supervisors must not edit generated chapter text to make art easier.
- Main coordinates JSON schema, CSS layer order, chapter hooks, and generated pages. Freeze an initial reader contract promptly; let all teams inspect/design while it is being finalized. Rebuild only after a coherent integration checkpoint. The production build must copy every new art, font, manifest, and CSS asset needed by the deployed page.
- Avoid framework migration, new generic component kits, unrequested backend work, git resets, stashing away the user's work, or commits/push/deploy. Work locally and leave a working review server.

## Required design process and tangible outputs

### Phase A: inspect and design before changing the page

Capture the current home and each book's entrance plus an actual reading chapter. Reuse the same viewport, storage state, and chapter for before/after comparisons. Each book supervisor reads its metadata, complete TOC, existing theme, and representative chapter text from each part. Delegate deeper cohort reading. Acknowledge subject-matter uncertainty and do not invent narrative events.

Each book designer considers **three meaningfully different directions**, records a short comparison, and chooses one. Specify the type families and their actual availability, heading/body roles, type scale, line measure, a dark palette with named hex values, layout/composition, illustration medium, signature artistic idea, navigation treatment, and how chapters vary. Explain why the identity belongs to this particular book. Replacing title and color must make the page feel wrong for another book.

Write `books/<slug>/design/ART-DIRECTION.md` before implementation, then a chapter manifest keyed by real chapter ID. The manifest records title, cohort, content rationale, palette role, motif or asset, opener composition, and reading treatment. A shared quiet body-text system is welcome; chapter art must not obscure the prose or make it uncomfortable to read.

Study relevant references through the available web/browser tools. Learn from book jackets, illustrated editions, art movements, typography, printmaking, architecture, cartography, or other appropriate material; do not just copy another app's cards. Cite the references studied in the direction. Assets must be original authored SVG/CSS/canvas or generated through an actually available, usable image tool. Do not hotlink stock imagery or claim image generation occurred when it did not.

No generic ban on a particular hue: palette decisions come from each book. No mechanical modulo/hash-based tinting masquerading as chapter art. No repeated pseudo-element on the same old shell counted as a redesign. No label added to a gradient counted as a distinct illustration.

### Phase B: prototype and critique

For each book, implement the cover/entrance and representative chapter openers spanning its different parts or moods. Show the actual rendered prototype to an independent reviewer and the art director. Review composition, typography, illustration quality, color relationships, literary fit, and whether the result is visibly more ambitious than the baseline. Return written, specific repair requests; implement them before expanding the design to all cohorts.

The main agent must inspect representative prototypes itself and intervene if the same layout is propagating across unrelated books. Do not approve a visual system solely because the CSS parses or token names differ.

### Phase C: build every book and chapter cohort

Create authored artwork that is visible at a useful scale at book entrances and chapter openings. Use each book's identity throughout its cover, contents, chapter title, reading context, navigation, and ending. Long-form reading remains calm, legible, and efficient. Give display typography personality while protecting comfortable body text. Font changes must really load and affect computed styles; use suitable local/system fallbacks.

Chapter variation must be deliberate: content-specific illustration, typographic composition, marginal motif, palette relationship, or section transition, with a manifest entry explaining its rationale. Neighboring chapters can share a grammar without being random clones. For very short aphorisms, a subtle authored mark is proportional; not every chapter requires a giant hero or forced animation.

Integrate useful reading behavior: clear contents, chapter search/navigation, accurate progress and resume, readable settings, persistent font/size/line-height/measure preferences, unobtrusive focus mode if appropriate, working keyboard actions, footnote/endnote navigation, and easy return to the library. Prioritize the actual failures observed. A first-time visitor must receive a dark presentation; saved explicit preferences remain respected. Keep theme selection simple and spacious, remove the previously rejected cramped/truncated treatment, and make every offered option work.

### Phase D: independent review, fixes, and delivery

Validators must open actual pages and chapters, inspect screenshots, and exercise controls. Put evidence in `.omp/design/evidence/` and book design folders; distinguish observed, computed, sampled, and not-run checks.

For **each book**, inspect its entrance and representative chapter openers at desktop (1440×1000), tablet (820×1180), and phone (390×844). Review additional screenshots for each cohort and any exceptional layout (long title, notes, filmography, poetry, unusually long/short sections). Record the exact chapters and viewports viewed. A source census must verify every TOC ID resolves, every chapter has a manifest entry, every referenced asset exists and reaches the built site, and the intended chapter treatment actually activates. This census complements visual sampling; never claim every chapter was visually reviewed unless it was.

Check keyboard focus, TOC/settings dialogs and Escape behavior, small-screen overflow, navigation, progress/resume across reloads, preference persistence, reduced motion, error/empty states, text contrast against the computed composited background, and browser console/network failures. Use actual interaction checks, not string-presence tests. Exercise Infinite Jest's repaired boundaries and endnote round trips.

Independent reviewers return PASS / REVISE / BLOCKED with concrete evidence and taste findings. Fix every material REVISE and inspect the result again. Do not invent a required wall-clock delay or pad work to look busy: sustained work comes from research, authored designs, real implementation, and independent revision. Do not stop after a planning report or initial palette pass.

Main performs final integration: build using the project's script, inspect the built site rather than just source, verify all new assets are included, start or refresh a persistent local review server, and provide its actual URL. Preserve original reader URLs and data semantics.

## Completion report and evidence discipline

The executive producer's final response contains the actual running server URL, per-book changes with visual examples, a truthful hierarchy roster, functional checks performed, exact visual sampling coverage, remaining defects or unverified axes, and evidence paths. Summarize work visibly completed, not tasks merely assigned.

Do not recycle the previous session's reported contrast totals, agent count, file count, chapter count, or “all verified” statements. Recompute present evidence. A running server, a HTTP 200, a large diff, or a successful syntax check does not establish artistic quality or usable controls. Do not mark a book finished while its design, engineering, or independent review is pending. If a tool is unavailable, name the gap, attempt the available fallback, continue independent work, and report the remaining limitation precisely.

## First actions after resuming

1. Read this contract, `.omp/design/BOOK-INVENTORY.json`, and `.omp/design/SKILL-MAP.md`. Make a live todo list covering all tracks and all books.
2. Confirm the active model is Muse Spark 1.3 at max. If anything resolves differently, stop that spawn and repair its configuration before letting it work.
3. Launch the art director, reader lead, home engineer, text curator, final validator, and all book supervisors asynchronously with named project agent definitions and `effort: hi`. Pass this contract path and explicit ownership to every assignment. The project supports the required nesting depth. Do not simulate the hierarchy internally.
4. Record actual IDs in the roster, begin baseline inspection, publish the shared reader contract, and run the design/critique/build/review loops through to the delivered site. Send concise progress reports at meaningful checkpoints.
