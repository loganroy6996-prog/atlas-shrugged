# IJ supervisor — subagent tree NOT instantiated (environment constraint)

Date: 2026-10-15. Session: native `book-infinite-jest-supervisor` (opencode/step-5-preview-free, high).

Three separate attempts to spawn real named specialist sessions all failed with the
SAME hard runtime error, before any child work began:

- `Task(subagent_type: "library-chapter-lead")` → ERROR
- `Task(subagent_type: "library-designer")` → ERROR
- `Task(subagent_type: "library-validator")` → ERROR

```
Subagent depth limit reached (1). Increase "subagent_depth" to allow nested subagents.
```

Root cause: this session is itself a spawned subagent of the primary producer
(depth 1) and the client's `subagent_depth` is 1, so no nested Task spawn is
permitted from here. No `subagent_depth` key exists in
`~/.config/opencode/opencode.jsonc` or `.opencode/`, so it is a client default.

Consequence, reported honestly:
- The required `library-chapter-lead → library-designer → library-engineer →
  library-validator` tree for cohorts B and D could NOT be instantiated.
- The reviewer/engineer/designer passes below were therefore performed
  FIRST-PERSON by the supervisor, with the same evidentiary standard (real
  Playwright renders at 1440x1000 / 820x1180 / 390x844, computed-style reads,
  source census) but WITHOUT independent-agent separation.
- This is NOT an independent specialist verdict and must not be recorded as one.
  COVERAGE.md records these as supervisor-executed passes, not "validator PASS".
