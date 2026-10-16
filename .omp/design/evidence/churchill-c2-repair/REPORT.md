# Churchill Cohort C2 — REPAIR Report (supervisor REVISE, round 2: p4c5 final)

Lead-executed (global task slots 16/16 saturated — 5 consecutive `library-*`
spawn failures; independent validator re-spawn still pending on a free slot).
Renders viewed on merged book http://127.0.0.1:8210/ at 1440×1000 + 390×844.

## Supervisor verdict round 1 (cache-disabled :8210)
- ACCEPTED: p4c1 (spirit-level beams crossing — now the Part IV house pattern),
  p4c4 (clasped sheets crossing), p4c9 (fracture wedges).
- REJECTED: p4c5 — "25 fully re-submerged … reads as redaction again, worse than
  pre-revise". Cause: my two rule-segments sat in one y-band (y192–246, 47px gap)
  and merged into a single bar.
- UNVIEWED: p4c3, p4c7 — confirmation + occluder inventory required (below).

## Final p4c5 repair (art/cohort-c.svg symbol p4c5 ONLY — within authorization)
Old (rejected): tiles t(268,215)s(0.32,0.7) + t(392,192)r(-12)s(0.3,0.7).
New (verified this round, desktop + phone):
- LEFT: `tile-ledger t(266,238) s(0.36,0.62)` → x266–352, y238–265: level ledger
  rule (left-side family) crossing the "2" lower-left edge. y≥238 keeps it below
  the digit's vertical middle — a rule-edge bite, not a bisection.
- RIGHT: `tile-ledger t(388,168) r(-14) s(0.28,0.62)` → x388–455, y168–195:
  bending shoreline rule (−14°) in the 2/5 gap, echoing the −8°…−32° fan.
- The two crossings are separated 43px vertically (y168–195 vs y238–265) so they
  can never merge into one bar; first strokes (top arcs y85–150) and terminals
  (y300+) fully clean. Render: "25" fully legible, shoreline fan intact, two
  small dark rule-ends at staggered heights.
- XML parses. No other bytes in cohort-c.svg touched.

## p4c3 confirmation (repaired to the same standard)
Occluders (art/cohort-c.svg symbol p4c3):
- `shard-tooth t(772,185) s(0.6,0.85)` — narrow veil-fold shadow clipping the
  "2" left edge (x767–811, y185–251).
- `shard-tooth t(872,180) r(8) s(0.6,0.9)` — veil fold with 8° drape-tilt in the
  2/3 gap (x867–911, y180–250).
Render (desktop + phone): "23" fully legible; two small dark folds at the left
edge and gap; veil mass + escaping hairline preserved. C1: 2 lampblack
crossings, mid-band, first/last strokes clear.

## p4c7 confirmation (repaired to the same standard)
Occluders (art/cohort-c2.svg symbol p4c7, owned):
- `shard-quad t(518,195) r(-24) s(0.55,0.6)` — dark fallen leaf echoing fan leaf
  #4's −24° rotation, crossing the "2" left edge (nudged x492→518 after first
  render so it bites the stroke rather than floating).
- `shard-tooth t(608,198) r(8) s(0.6,0.75)` — small leaf-tip in the 2/7 gap.
Render (desktop + phone): "27" fully legible; "7" top bar clear; dark leaf reads
as the fan's shadow; desk/ochre/vermilion/slate accents preserved. C1: 2
lampblack crossings, mid-band, first/last strokes clear.

## Scope audit (source)
- art/cohort-c.svg: ONLY the 8 occluder <use> lines in symbols p4c1/p4c3/p4c4/p4c5
  differ from the supervisor-fixed baseline (p4c5's pair now v3). p4c2/p4c6
  symbols, headers, filters, grain, floor lines: untouched.
- art/cohort-c2.svg: ONLY the 4 occluder <use> lines in p4c7/p4c9 differ from the
  validator-PASSed original (incl. the two recorded nudges). p4c8/p4c10:
  byte-identical (regression-viewed, unchanged).
- No JSON/CSS/prose changes. Repair is SVG-occluder-only.

## Evidence
- Lead-viewed Eval screenshots (this session): all 6 repaired plates at 1440px
  (p4c5 final v3 desktop + phone; p4c3/p4c7 desktop + phone confirmation).
- Prior independent PASS: .omp/design/evidence/churchill-c2/ (52 files, pre-repair
  baseline for roles/labels/treatments — unaffected by this SVG-only repair).
- Independent repair-validator spawn: BLOCKED on global job limit (16/16); will
  be launched when a slot frees, or the supervisor's own rendered review stands
  as final acceptance.

## Truthfulness ledger
- OBSERVED: all 6 repaired plates + p4c8/p4c10 regression on :8210 at 1440 + 390,
  viewed by the lead; supervisor's round-1 rendered verdict (accepted 3, rejected
  p4c5 v2); p4c5 v3 + p4c3/p4c7 confirmation renders this round.
- COMPUTED: getBBox numeral-ink bboxes; XML parse both SVGs; source scope audit.
- NOT-RUN: independent library-validator review of the repair (slot-blocked).

## Addendum: cache-disabled re-verification (round-2 closure)

Supervisor's round-2 rejection was WITHDRAWN (their stale-cache artifact).
Lead re-verified with `page.setCacheEnabled(false)` + reload on :8210, 1440px:
live-DOM occluder transforms audited per chapter — all match on-disk exactly:
- p4c5: ["translate(266,238) scale(0.36,0.62)", "translate(388,168) rotate(-14)
  scale(0.28,0.62)"] — two separated shoreline rule-ends, "25" legible. CORRECT.
- p4c3: ["translate(772,185) scale(0.6,0.85)", "translate(872,180) rotate(8)
  scale(0.6,0.9)"] — two veil-fold teeth, "23" legible. CORRECT.
- p4c7: ["translate(518,195) rotate(-24) scale(0.55,0.6)", "translate(608,198)
  rotate(8) scale(0.6,0.75)"] — dark leaf + gap tip, "27" legible. CORRECT.
Supervisor acceptance stands; C2-merge COMPLETE. Lesson: cache-disabled
verification mandatory for all art review from here on.
