# Cohort A (Doors & Rhymes) — Coverage & Review Ledger

Owner: `SupGayScience-3.GsLeadA`. Cohort: part-1 (p1c1 Preface, 2453w landmark) +
part-2 (p2c1–p2c63 Prelude rhymes, 57 Seeds + 6 Shoots).
Files owned: `books/gay-science/art/cohort-a.svg`,
`books/gay-science/design/cohort-a.json`, `books/gay-science/design/cohort-a.css`.

## 1. Attribution: who built what (supervisor reconciliation)

- **Designer: REAL spawned subagent** (`SupGayScience-3.GsLeadA.GsCohortADesigner`,
  library-designer, effort hi). Delivered `local://gs-cohort-a-design.md` (524 lines +
  §11 amendments): 3-direction comparison (A1 Chord & Chorus CHOSEN, A2/A3 rejected
  with book-specific reasons), complete 64-chapter map with content-kind rotations,
  full §5 draw-list, CSS inventory, captions, risks. All 64 chapter JSONs read;
  v2 prototype viewed in-browser by the designer AND independently by the lead.
- **Engineer: NO spawn — lead-executed-inline under supervisor-authorized fallback.**
  20 engineer-spawn attempts over ~50 min all failed with `Background job limit
  reached (16)` (attempts GsCohortAEngineer-1…-20, documented in lead transcript).
  Per SupGayScience-3 trickle-spawn doctrine ("if truly blocked, execute inline as
  lead with honest ledger attribution"), the lead authored all three files directly
  from the designer spec. Engineering deltas beyond verbatim spec (all recorded):
  (a) self-contained symbols with inlined leaper geometry (lead-verified reader.js
  splices only symbol children — designer confirmed §11 A2); (b) 5 kind-specific
  Shoot symbols instead of 1+CSS-rotate (designer confirmed §11 A3); (c) chunky
  1.12 horizontal leaper mass per lead in-browser review (designer §11 A4);
  (d) Shoot recenter translates computed in-render over 3 screenshot rounds
  (depth 345,178 / craft 295,182 / mask 350,155 / star 290,185);
  (e) CSS colophon-only per §11 A5 (reader.js emits classless figcaption already
  voiced by theme.css:489 — designer-withdrawn class).
- **Validator: spawn attempted, capped at first try** (same 16-job ceiling).
  Lead performed interim live verification (§4) but this is NOT independent review.
  Retrying validator spawn with backoff; supervisor fallback: fold A into the
  supervisor validator sweep if the cap never clears.

## 2. Designer amendments A1–A5 — landed verification (all ✓)

| # | Amendment | Landed proof |
|---|---|---|
| A1 | Per-chapter §7 bullets authoritative; tallies dance 9 / sting 10 / depth 8 / mask 8 / sun 8 / threshold 7 / craft 8 / star 5 = 63 | cohort-a.json: exact counts recomputed ✓ |
| A2 | Self-contained symbols, inline geometry, zero `<use>` | cohort-a.svg: 0 use / 0 text / 0 gradient elements (Python census) ✓ |
| A3 | 5 kind-specific Shoot symbols | gs-ring-shoot-dance/depth/craft/mask/star present ✓ |
| A4 | Chunky Matisse masses (1.12 horizontal), poses stand; mask mirror w/ pre-approved fallback | 22 leapers at scale(1.288…); sole mirror scale(-1.288…) = mask ✓ |
| A5 | CSS colophon-only; figcaption class withdrawn | cohort-a.css: 3 rules + 1 media query, no figcap class ✓ |

## 3. Supervisor rulings absorbed

- **Merge script** (`design/merge-chapters.py`): cohort-a.json trial-merged clean —
  `OK: 259 manifest entries (189 CSS-spark seeds), 339/448 cohort-authored`, zero
  defects. 7 cohort-A manifest entries (p1c1 banner + 6 Shoot motifs); 57 Seeds
  correctly emit NO entry. p2c63 motif `star` → stellar end-seal (verified live).
- **Book-wide letter-led census ruling**: exactly 2/448 letter-led (p1c1, p8c1);
  tier voice elsewhere is titles + ray rules + tableaux + seals, never caps.
  Cohort A CONFORMS as built: p1c1 gold cap + colophon; all Prelude verse cap-less
  by the shared GR6 classifier; reading_treatments claim caps NOWHERE except p1c1
  (spot-verified: Shoot treatments read "centered verse, no drop-cap, …").
- **Churchill cache lesson**: validator brief instructs cache-disabled loads
  (stale shared JS artifact caused the false theme-freeze alarm).

## 4. Lead live verification (interim, NOT independent — :8123 repo-root server)

Viewed in headless Chromium via native Eval browser (viewport screenshots seen):

- **p1c1 Preface** (desktop): `data-art="threshold"`, slot `chapter-art banner`,
  gs-preface-glow renders: capped gold sun, door centered, hard rings, horizon
  rule, thaw waves, sun-road, six stars; HTML caption "Glow before the house —
  Preface to the Second Edition". Foam drop-cap "T" (MAJOR-1: manifest motif
  "threshold" misses the gold-cap rule — supervisor one-token fix to "dawn-glow"
  pending). Colophon: "Ruta near Genoa Autumn, 1886" centered, letterspacing
  5.376px computed, Fraunces italic, gold rule above, sun end-seal below
  (screenshot seen).
- **p2c9 My Roses** (Shoot, dance 0°): motif renders, two vermilion leapers on
  gold chord + echo arc + foam sparks + horizon ticks, caption "ix · joy on the
  narrow ledges — the ring completes across the Prelude"; rubricated vermilion
  italic title; centered verse; numeral §9 intact at body size (GR6 ✓).
- **p2c63 Stellar Morals** (Shoot, star 315°): `data-art="star"`, rotated
  night-lit motif + "lxiii · be thine" caption; stellar seal (motif override ✓).
- **p2c25/p2c59/p2c61** (Shoots depth/craft/mask): motifs + captions verified
  (`data-art` depth/craft/mask); p2c61 duet reads as two distinct dancers.
- **p2c13 For Dancers** (Seed): slot `hidden`, no `data-art`; vermilion italic
  title, centered verse, arc-chord end-seal, prev/next cards (screenshot seen).
- **Phone 390×844, reduced-motion, console sweep: covered by the independent
  validator (§4b)** — lead viewed 7 chapters desktop only.

## 4b. Independent validation (REAL spawn, REVISE → repairs)

- Validator: `SupGayScience-3.GsLeadA.GsCohortAValidator-2` (library-validator,
  effort hi) after 1 capped attempt. Report `local://gs-cohort-a-validation.md`.
- Coverage: 12 chapters (p1c1, p2c9/25/33/59/61/63, p2c13, p2c1/24/29, p2c10)
  at desktop 1440×1000 + phone 390×844; census 64/64 + 14/14 + 7/7 manifest.
- PASS axes: GR3 (0px overflow everywhere), G1 (dawn→sunrise reads, no legend),
  mask-mirror fallback NOT triggered (keep mirror), 0 console/network errors,
  contrast ≥9:1, reduced-motion PASS, seals correct all weights.
- MAJOR-1 (supervisor-side, RESOLVED): p1c1 drop-cap Foam not gold — manifest motif
  "threshold" missed the gold-cap rule; spec §3.3 requires "dawn-glow".
  Supervisor fix (better than lead's option (a)): merge-chapters.py now carries
  MOTIF_OVERRIDES {p1c1: dawn-glow} + precedence explicit-motif > ALT > kind;
  gold cap + 7rem ray rule fire; blast radius verified nil (all explicit motifs
  preserved). Live on :8099.
- MAJOR-2 (cohort-side, FIXED): rotated Shoot main-arc clipping (mask −25u,
  star +5u) + shed decoration. Fix in cohort-a.svg only: recentered depth
  345,172 / craft 295,176 / mask 350,187 / star 290,175 + trimmed flanking
  discs, lower discs, horizon ticks from rotated variants. Post-fix audit
  (validator's getBoundingClientRect method): all MAIN-ARCs fully inside
  640×360 with ≥6u margin; leapers inside; SVG re-parses, 0 use/text/gradient.
  Supervisor accepted on lead audit numbers.
- MINOR-1 (RESOLVED as designed-but-unresolvable): colophon lacks middle dot
  because the served Cambridge text reads "Ruta near Genoa Autumn, 1886" —
  supervisor ACCEPTED AS-IS (book teams never edit prose for a punctuation
  nicety). Colophon styling verified correct.
- MINOR-2 (RESOLVED in shell): part-2 Seed verses earn a 26px arc-spark via
  ::before (ring grammar at seed scale); cohort-a.css correctly stays
  colophon-only; kind tinting honestly reserved for manifest-carrying Shoots.
- Re-review: COVERED by supervisor sweep (p1c1 gold cap + p2c61/p2c63
  containment spot-check) — no cohort action outstanding. Lead result ACCEPTED.

## 5. Coverage ledger — all 64 chapters

Kind tallies (recomputed from landed JSON): dance 9 · sting 10 · depth 8 · mask 8 ·
sun 8 · threshold 7 · craft 8 · star 5 = 63 ✓. Weights: 1 landmark + 6 shoots +
57 seeds ✓. TOC title/word-count cross-check: 64/64 verbatim ✓. Symbol
resolution: all 7 manifest-needing opener symbols present in cohort-a.svg ✓.

| Chapter | Weight | Kind/θ | Opener symbol | Caption / treatment |
|---|---|---|---|---|
| p1c1 Preface | landmark | threshold/dawn | gs-preface-glow (banner) | "Glow before the house — Preface…" + gold cap + colophon + sun seal |
| p2c9 My Roses | shoot | dance 0° | gs-ring-shoot-dance | ix · joy on the narrow ledges… |
| p2c25 Request | shoot | depth 90° | gs-ring-shoot-depth | xxv · the middle ground… |
| p2c33 The Solitary One | shoot | dance 0° | gs-ring-shoot-dance | xxxiii · losing myself, lured home… |
| p2c59 The Pen Scribbles | shoot | craft 270° | gs-ring-shoot-craft | lix · inky drivel, boldly dipped… |
| p2c61 The Sceptic Speaks | shoot | mask 135° | gs-ring-shoot-mask | lxi · halfway spent… |
| p2c63 Stellar Morals | shoot | star 315° | gs-ring-shoot-star | lxiii · be thine… + stellar seal |
| 57 Seeds (p2c1–8,10–24,26–32,34–58,60,62) | seed | per §7 map | NONE (CSS spark) | centered verse, no cap, arc seal |

Per-chapter kind/gist/rationale for all 63 rhymes: `design/cohort-a.json`
(quote-grounded, title-derived; full text in file, not duplicated here).

## 6. Review status

- Designer self-review: v2 prototype viewed in-browser (all 8 variants + tableau +
  shoot); honest risks §10 recorded; spec closed after A1–A5.
- Lead review: v2 prototype viewed (poses/rotations APPROVED, A4 mass note sent);
  shipped symbols rendered (14/14 inline splice, token fills resolve); 3 recenter
  rounds on rotated Shoots with screenshots; 7 chapters verified live on :8123.
- Independent validator: REAL SPENT — REVISE with 2 major + 2 minor (§4b);
  cohort-side MAJOR-2 fixed + audit-verified; supervisor resolved MAJOR-1
  (MOTIF_OVERRIDES + precedence fix), MINOR-1 (accepted as-is, prose-verbatim),
  MINOR-2 (shell arc-spark); re-review covered by supervisor sweep.
  LEAD RESULT ACCEPTED — no cohort action outstanding.
