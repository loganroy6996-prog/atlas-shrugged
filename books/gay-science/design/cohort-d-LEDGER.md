# Cohort D Ledger — Book Three, the abyss at NOON (part-5, p5c1–p5c168, §108–275)

Owner: SupGayScience-3.GsLeadD. Status: **SHIPPED — validator PASS (re-review)**.

## Team (all real spawned agents, effort hi)
- Designer: `SupGayScience-3.GsLeadD.GsCohortDDesigner` (library-designer) — delivered
  `design/cohort-d.md` + `design/cohort-d.json` (168 entries). Read all 168 chapter
  JSONs + §125 prototype. Chose D3 "Lantern at Noon" over D1 "Zenith Dial"
  (instruments can't bleed) and D2 "Marketplace Frieze" (frieze ≠ tableau; drowns
  Seeds). Verdict recorded: design complete, no rework needed.
- Engineer: `SupGayScience-3.GsLeadD.GsCohortDEngineer` (library-engineer) — delivered
  `art/cohort-d.svg` (24 symbols, 51KB) + `design/cohort-d.css` (22KB), JSON untouched
  (0 fixes needed). Self-verified via screenshots, repaired 3 geometry defects
  pre-delivery. Verdict recorded: implementation complete.
- Validator: `SupGayScience-3.GsLeadD.GsCohortDValidator-18` (library-validator) —
  initial verdict **REVISE** (1 major + 1 minor), re-review verdict **PASS**.
  Skill read: `skill://visual-critique`. Report: `design/cohort-d-VALIDATION.md`.

## Deliverables (cohort-owned files only)
- `books/gay-science/art/cohort-d.svg` — 24 self-contained `<symbol>`s: 1 landmark
  (gs-zenith-lantern), 10 Branch (gs-branch-zenith-chaos/sage/identity/stream/lamp/
  will/prayer/serpent/gods/egg), 6 medallions (gs-shoot-zenith-lantern/lens/herd/
  tablet/star/ship), 2 actors (gs-actor-toppled/prometheus), 5 seals
  (gs-seal-lantern/tablet/herd/spark-gold/spark-verm).
- `books/gay-science/design/cohort-d.json` — 168/168 chapters, §10a + weight/kind/
  gist/caption/motif; weights 120/37/10/1; kinds self 43 / knowledge 38 / virtue 37 /
  godshadow 28 / herd 19 / sea 3 (84 gold / 84 vermilion emergent).
- `books/gay-science/design/cohort-d.css` — disjoint gs-d- classes; per-chapter Seed
  tint list (70) + per-chapter end-seals (168); margin bleed; containment; reduced-motion.
- `books/gay-science/design/cohort-d.md` (spec), `books/gay-science/design/cohort-d-VALIDATION.md`
  (validation report). This ledger. Never touched: theme.css, index.html, prose/data.

## Chapter coverage (all 168, kind-grounded)
- Branch (banner tableaux): p5c2 §109 chaos/lens+dial, p5c3 §110 sage+truth-ray,
  p5c4 §111 identity-discs, p5c5 §112 continuum-stream, p5c16 §123 knowledge-lamp,
  p5c20 §127 striking-fist, p5c21 §128 prayer-mill, p5c28 §135 sin-serpent,
  p5c36 §143 god-discs+eye, p5c42 §149 breaking-egg.
- Landmark: p5c18 §125 — maximal 24-ray edge-to-edge fan (r=840 slice-clipped),
  flat disc, INVERTED lit lantern hanging into the wiped horizon-gap, vermilion
  madman leaper, 7-figure crowd, 2 church-tombs, smashed shards. Full-bleed.
- Shoots (37 medallions + 2 one-off actors p5c46 toppled-gods, p5c144 Prometheus).
- Seeds (120): CSS marginal sparks, gold/vermilion BY CONTENT KIND (never modulo).

## Validation evidence (honest record)
- Lead-rendered: all 24 symbols in gallery (18 screenshots viewed); phone 390px +
  desktop 1440px harness (overflow 0 both); repair probes (sage ray touches head;
  8/8 tints correct + gold spark visible).
- Validator: 21 + 2 re-review screenshots viewed (landmark full cast, all 10 Branch,
  all 6 medallions, 2 actors, 5 seals, seed tints, phone overflow 390/390).
- REVISE→repair→PASS: (1) major — Seed tint keyed off data-art (always absent on
  Seeds) → rebuilt as per-chapter 70-id gold list; (2) minor — sage truth-ray
  detached → re-anchored to head center. Both re-verified in-render by validator.
- Contract: zero `<text>`/gradients/Aubergine/cross-file refs in SVG; GR3/GR4/GR5
  verified; GR6 honored (all 168 numeral-led, cap-less — see ruling below).

## Supervisor rulings applied
- `star` shell-supported, `tablet` accepted as §10b motif addition (no re-key).
- BOOK-WIDE RULING (numerals): amended 48 reading_treatments (37 shoot + 10 branch +
  1 landmark) — "numeral opener intact, no cap (GR6)"; landmark keeps "gold title +
  full tableau" tier voice. 120 seed strings already conform.
- Validator spawn starvation: 17 consecutive "Background job limit reached (16)"
  rejections over ~2h before GsCohortDValidator-18 landed (attempts 1–17 logged);
  supervisor acknowledged and held a fallback sweep in reserve (not needed).

## For supervisor merge
- Manifest motif ids (zenith/lantern/tablet/ship) flow kind → motif verbatim.
- Requests carried forward: ReaderLead `gs-d-seed` anchor class on Seed first
  paragraphs (or equivalent hook); `gs-d-banner`/`gs-d-medallion` classes alongside
  slot class (or supervisor maps manifest class → treatments).
- Checks main/supervisor should run: build (`scripts/build_site.sh`) ships new
  art/design files; live-server spot check of p5c18 + one Branch + one Seed per
  kind-tint at 1440/390; theme switching on a cohort-D chapter.

## Post-acceptance integration bridge (supervisor-owned, 2026-10-15)

Supervisor found one gap my harness masked: cohort D.2 keys the Seed marginal
spark off a `.gs-d-seed` class that nothing in production adds (my harness
cards were rescoped so the rules applied per seedbox — the validator's harness
shared the same blind spot; both recorded honestly). Supervisor fixed at the
shell layer (supervisor-owned bridge, NOT a cohort file): on slot-hidden
part-5 chapters (`:not([data-art])`), the opener paragraph takes the spark
directly, and the 70-id gold list is twinned onto that anchor. Verified live
on :8099 by supervisor: p5c168 renders GOLD spark + gold end-seal, p5c1
VERMILION spark + lantern seal — the §3.2 kind-tint contract now holds in
production. Covered by the supervisor's VALIDATION sweep. Lesson for future
cohorts: harness anchors must replicate production DOM classes exactly, and a
CSS rule keyed off a class no producer adds must fail review.

## Final-validator MINOR-1 sync (2026-10-15)

P1 200px phone opener floor: added `min-height: 200px` to the D.7 ≤560px
`.gs-d-banner svg` rule in owned `design/cohort-d.css` (mirrors supervisor's
merged theme.css edit) so the next refresh doesn't regress it. No rebuild from
cohort; supervisor rebuilt + re-shoots p1c1/p5c18 at 390px.
