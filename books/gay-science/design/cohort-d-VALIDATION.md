# Cohort D Validation Report — Book Three, the abyss at NOON (part-5, p5c1–p5c168)

Validator: GsCohortDValidator-18 · Date: 2026-10-15 (re-review same day) · Skill read: `skill://visual-critique` (managed-skills path; fallback not needed)
Files under test: `books/gay-science/art/cohort-d.svg`, `books/gay-science/design/cohort-d.json`, `books/gay-science/design/cohort-d.css` against `books/gay-science/design/cohort-d.md`, ART-DIRECTION.md NOON, READER-CONTRACT v1.1.

## Verdict: PASS (both REVISE issues repaired and re-verified in-render)

### Re-review (2026-10-15, same day)
Lead GsLeadD repaired both issues; validator re-verified each independently in a
rebuilt production-fidelity harness (/tmp/gsd-harness3.html — current CSS + SVG,
reader-splice path, shell bleed/cap/box-sizing/geometry replicated, cohort CSS
card-rescoped so per-chapter data-chapter rules apply per seedbox):
- ISSUE 1 (Seed tint) — RESOLVED. CSS D.2 rewritten: 70/70 light-kind Seed ids
  in the gold per-chapter list, verified exact vs JSON kinds (zero missing, zero
  extra, zero non-Seeds, zero blood-kind, zero leftover data-art seed rules).
  Computed-style probe: p5c48/p5c19/p5c168/p5c133 → GOLD var, p5c1/p5c7/p5c64/
  p5c22 → VERM var (8/8 correct). Screenshot seeds-rereview.png viewed: 4 gold
  + 4 vermilion sparks, each matching its expected kind tint to the eye.
- ISSUE 2 (Sage ray) — RESOLVED. Truth-ray is now a 7px line from head center
  (1175,333) to (1293,241). Screenshot branch-sage-rereview.png viewed: the ray
  visibly enters the sage's head from the upper right, per spec. No other art
  drift (JSON census re-run: still 168 entries).
- No new issues found. Original verdict below is superseded; the full initial
  report is retained for the record.
New evidence: /tmp/gsd-evidence/seeds-rereview.png, /tmp/gsd-evidence/branch-sage-rereview.png.

---

## Original verdict (superseded): REVISE (1 major, 1 minor — both concrete, both small)
The cohort is mechanically excellent (census, weights, kinds, symbols, seals, contract greps all pass) and the rendered tableaux are strong — the §125 landmark genuinely reads as the book's climax. But the Seed marginal-spark rule mistints 70 of 120 Seeds in production, which breaks the binding §3.2 kind-tint contract. One minor art-composition note on the sage banner. Everything else passes.

## Issue list

```
ISSUE: Seed marginal sparks render VERMILION for all light-kind Seeds (70 chapters wrong)
WHERE: design/cohort-d.css D.2 (.gs-d-seed::before) + production reader state for Seeds
EVIDENCE: (a) Computed-style probe on the production-fidelity harness: all six sampled
  Seeds resolve ::before content to --gs-d-seal-spark-verm, including self p5c48,
  knowledge p5c19, sea p5c133 (all expect gold). (b) Screenshots seeds-desktop.png /
  seeds-phone.png: all six sparks render vermilion to the eye. (c) Root cause chain,
  verified in code: Seeds carry NO manifest entry (spec §3.1/§5: "NO manifest entry")
  → reader.js fillArtSlot returns null → paintBodyHooks deletes body[data-art]
  (shared/reader.js:477-478) → CSS default rule (vermilion) wins for every Seed;
  the gold override requires data-art="zenith|ship|star", which NO Seed chapter ever
  has (JSON confirms: 120/120 Seeds have no motif field). Affected: 40 self + 28
  knowledge + 2 sea Seeds = 70 chapters render the wrong tint; the emergent 84/84
  check reads 14/154 in production. Herd/virtue/godshadow Seeds are correct by
  accident of the default.
SEVERITY: major (binding §3.2 contract violation on 70/168 chapters; visible on every Seed page)
FIX (smallest): key the gold override off data-chapter, not data-art — the same
  per-chapter qualification the file already uses for all 168 end-seal rules (D.5).
  Add one selector list of the 70 light-kind Seed ids
  (p5c19,p5c26,p5c48,p5c49,p5c50,p5c51,p5c55,p5c56,p5c57,p5c59,p5c60,p5c62,p5c70,
  p5c71,p5c72,p5c75,p5c76,p5c82,p5c84,p5c86,p5c87,p5c89,p5c90,p5c91,p5c95,p5c96,
  p5c98,p5c100,p5c101,p5c102,p5c104,p5c105,p5c108,p5c109,p5c110,p5c111,p5c115,
  p5c116,p5c117,p5c119,p5c120,p5c121,p5c124,p5c125,p5c128,p5c131,p5c132,p5c133,
  p5c134,p5c135,p5c137,p5c138,p5c139,p5c141,p5c145,p5c146,p5c147,p5c149,p5c150,
  p5c151,p5c153,p5c154,p5c155,p5c156,p5c158,p5c161,p5c162,p5c163,p5c165,p5c168)
  setting content: var(--gs-d-seal-spark-gold). Keep the data-art gold rules as a
  harmless forward for slotted chapters; keep vermilion default. No JSON/SVG change.
  (Alternative — supervisor sets class-only manifest entries {class:"gs-d-seed",
  motif} for all 120 Seeds — is larger, touches the merge, and still leaves tint
  dependent on merge behavior; the CSS list is self-contained like D.5.)
```

```
ISSUE: Sage truth-ray floats detached from the sage's head (spec: "entering the sage's head")
WHERE: art/cohort-d.svg gs-branch-zenith-sage, truth-ray rect (line ~176)
EVIDENCE: branches-extra5.png (sage panel): the gold bar hangs in the sky
  up-right of the seated figure, visibly not touching it. Measured: rotated bar
  runs (1195,204)→(1283,284); head top at y=320, head center x=1175 — a ~36px
  vertical gap and ~108px horizontal offset from head center.
SEVERITY: minor (one Branch panel; compositional intent slightly missed, still legible)
FIX: extend/rotate the truth-ray bar so its lower end touches the head circle
  (target lower end ≈ (1178,322)); e.g. lengthen to ~150px and rotate about the
  head point. Verify with one re-render screenshot.
```

## What passed (with evidence)

**Source census (computed):**
- 168/168 TOC part-5 ids present, zero missing/extra/dup; every entry has kind/weight/palette_role/rationale.
- Weights 120 seed / 37 shoot / 10 branch / 1 landmark — exact match to spec lists AND independently re-derived from toc.json word counts (word_count fields match toc.json on all 168; all fall inside their §6 bands; max 781, none over 800).
- Kinds 28/38/19/37/43/3 = 168, exact per-chapter match to spec §3.2 table; gold 84 / vermilion 84 emergent check holds in the data.
- All 19 distinct opener symbols exist in the SVG; all 19 non-seal symbols are used (zero orphans); Shoot→medallion map matches §3.4 on all 37; Branch→banner map matches §4 on all 10; landmark p5c18 → gs-zenith-lantern.
- Symbol inventory = 24 = 1 landmark + 10 Branch + 6 medallions + 2 actors + 5 seals. ✓
- Motifs: 120 Seeds carry none (correct — no manifest entry); 48 slotted chapters all carry one; values limited to zenith/lantern/tablet/ship; `star`/`tablet` usage per supervisor rulings (not filed).
- reading_treatment: all 168 cap-less numeral-led, zero gold/foam cap claims (book-wide GR6 ruling honored).
- Captions: 10/10 Branch + landmark match §4 verbatim; all 37 Shoot captions ≤12 words.
- Landmark fan 24 rays, Branch fans 16/16 ×10, all with correct gold/vermilion width alternation; landmark outer endpoints (±840 box: x −40…1640, y −672…1008) bleed past every viewBox edge.
- Grep-zero in SVG: no `<text`, no gradient/radial, no #2A1540, no cross-file href (all `<use>` are `#cd-*` with per-symbol local `<defs>` — splice-safe, verified: cd-fan16/cd-lens|cd-lantern/cd-noonline defined inside each Branch symbol; cd-spark/cd-lodestar inside each medallion/actor). SVG palette is NOON tokens only (#06222B/#030B0F/#0A2E3B/#02090D grounds, #F5B301/#F8C51C/#FFB84D/#FFCF6E/#FFEDBE/#FFF3D0 golds, #E4572E vermilion, #F3EAD8 bone); #02090D confined to ship-sail/hull fills (near-black silhouette, consistent with part-divider grammar — not filed).
- CSS: zero transform declarations, zero nth-child/modulo/index tinting (kind-derived via data-art + default — mechanism kind-based, but see Issue 1 for the Seed wiring gap); banner bleed via margin (100vw + calc(50%−50vw)), overflow hidden on slots + shell overflow-x clip; classes used are gs-d-banner/gs-d-medallion/gs-d-seed + contracted hooks (#chapter-art, .chapter-text, figcaption) — disjoint; no gs-d-* collisions possible.
- End-seals: all 168 chapters covered exactly once, zero dups/missing; seal→kind mapping exact (28 lantern/godshadow via shell --seal-lantern var — verified present in theme.css 24×26px — 37 tablet/virtue, 19 herd/herd, 84 gold-spark/light-kinds); intrinsic data-URI sizes 23×26 / 26×16 / 26×26 / 26×26 — all ≤32px (A.0 ✓); seal rules are body[data-chapter]-qualified p:last-child::after (Contract A.0 ✓); rendered end-seals observed in every card screenshot (lantern/tablet/herd/spark visibly correct per chapter).

**Rendered inspection (observed in the native Eval browser, reader-splice path — symbol children into fresh svg, viewBox copied, cohort CSS applied, shell bleed/cap rules + --seal-lantern + box-sizing + production .reader-body geometry replicated):**
- Viewed at desktop 1440×900: landmark p5c18 + Branch p5c2/p5c21/p5c28/p5c36/p5c42 + medallions p5c15/p5c9/p5c11/p5c6/p5c17/p5c47 + actors p5c46/p5c144 + seals row + seed row (21 screenshots, all viewed).
- Viewed at phone 390×844: p5c18 landmark, p5c28 Branch, p5c11 medallion, seed row; scrollWidth == innerWidth (390/390) — zero phone overflow (GR3 ✓); banners full-bleed edge-to-edge (figure L:R 0:390), medallions contained (18:372), uncropped at both widths.
- §125 landmark (OBSERVED): 24-ray fan bleeds edge-to-edge; zenith disc + blinding gold field; inverted lit lantern hangs from the disc into the wiped gap (band steps down visibly around it); vermilion madman leaping with raised lantern at left; 7-bone-figure crowd band at right; two church-tomb blocks with crosses at both flanks; amber/bone shards + dying flame-dot at foot center; clear sky title band above the disc. Full cast present, composed, nothing clipped.
- Branch tier (OBSERVED all 10: 5 in full cards + 5 in branches-extra5.png): disc + steep-16 fan + shadow band + kind emblem + chapter actor + noon-line + scrim ellipse all render; full-width composed, no half-empty bands. Actors read content-specific: cracked dial + star-dots (chaos), sage + ray (sage — see minor issue), twin discs + flux (identity), continuum band + inferred dots (stream), lamp + tiara (lamp), fist + burst + arcs (will), prayer-mill + beads (prayer), serpent + shattered tablets (serpent), god-disc arc + eye (gods), eggshell + yolk-spark + herd arcs (egg). Tier gap vs landmark is visible and deliberate (16-ray contained fan vs 24-ray edge-to-edge glare).
- Medallions (OBSERVED all 6 + 2 actors): ring + actor + noon-tick + kind-tint flanking sparks all render whole (meet, never cropped); flanking tint correct per kind (gold lens/star/ship, vermilion lantern/herd/tablet, vermilion toppled-godshadow, gold prometheus-self).
- Seals (OBSERVED): all 5 splice and render recognizably (lantern/tablet/herd/2 sparks); production size comes from data-URI intrinsics (≤32px ✓ — the large harness splice boxes were a harness sizing artifact, confirmed via box widths, and are NOT production behavior).
- Cascade check (computed): cohort banner cap (46vh×3.81) vs shell cap (46vh×3.5) is a specificity tie broken by source order in cohort's favor under the documented merge (append/link-after); both ratios fit the 1600×420 art without clipping, so either winner renders correctly. No action.

**Taste review (judged from rendered screenshots):**
- §125 reads as the book's climax: it is unambiguously the harshest light on the page — the only panel where rays escape the frame, the only inverted hanging lantern, the only multi-figure scene with blood-vermilion protagonist. G1 zenith statement is instant.
- Branch tier sits visibly below landmark tier (contained 16-fan vs bleeding 24-fan) while staying above the medallion tier (full-width staging vs contained ring). Tier discipline is the strongest in any cohort reviewed.
- Actors are content-specific, not decoration: serpent/tablets = §135 sin, prayer-mill/beads = §128, egg/herd-arcs = §149 masses, god-discs/eye = §143 polytheism, dial/stars = §109 de-deified cosmos. The title-swap test passes — these tableaux would be nonsense on any other book.
- No faces on suns, no smiles (GR2 ✓); paired-figure asymmetry not directly measurable but crowd figures vary visibly in height/tilt; flat masses only, no glow discs (G4 ✓ — halo is a ring).

**Harness deviations found and corrected mid-review (recorded honestly):** (1) first harness lacked production .reader-body geometry (centering artifact — rebuilt as v2); (2) v2 initially set preserveAspectRatio=slice on banners (NOT production behavior — reader.js never sets PAR; cohort D symbols declare none; production height:auto+width:100% never crops) — removed, phone re-verified clean; (3) v2 initially lacked shell box-sizing reset (false 427px overflow — patched, re-verified 390/390).

## Chapters/viewports viewed (exact)

Desktop 1440×900: p5c18, p5c2, p5c21, p5c28, p5c36, p5c42 (full cards); p5c15, p5c9, p5c11, p5c6, p5c17, p5c47, p5c46, p5c144 (full cards); p5c3 (sage), p5c16 (lamp), p5c20 (will), p5c5 (stream), p5c4 (identity) via direct-SVG panels (splice path already proven on 14 symbols; geometry identical). Phone 390×844: p5c18, p5c28, p5c11, seed row. Total: all 10 Branch symbols, all 6 medallions, both actors, landmark, all 5 seals rendered and viewed.

## Evidence paths

Screenshots (21, all viewed): /tmp/gsd-evidence/{landmark-desktop-card, branch-chaos-desktop, branch-prayer-desktop, branch-serpent-desktop, branch-gods-desktop, branch-egg-desktop, med-lantern-p5c15, med-herd-p5c9, med-tablet-p5c11, med-lens-p5c6, med-ship-p5c17, med-star-p5c47, actor-toppled-p5c46, actor-prometheus-p5c144, seals-row, seeds-desktop, landmark-phone, branch-serpent-phone, med-tablet-phone, seeds-phone, branches-extra5}.png
Harness: /tmp/gsd-harness2.html (production-fidelity), /tmp/gsd-extra.html (remaining 5 Branch).

## Check ledger (observed vs computed vs not-run)

- OBSERVED (screenshots viewed): landmark full cast, Branch composition ×10, medallion/actor rendering ×8, seal shapes, seed tint failure (eye + computed-style), phone overflow zero, phone bleed/containment, end-seal presence per card.
- COMPUTED (script-verified): census 168/168, weights vs toc.json, kinds vs §3.2, symbol existence/orphans, medallion/Branch maps, motif vocabulary, cap language, captions, ray counts/alternation/bleed box, SVG grep-zero, use-ref locality, palette inventory, CSS transform/nth-zero, class disjointness, seal coverage/mapping/intrinsics, cascade tie analysis, sage-ray measurement.
- NOT-RUN: builds/tests/formatters (skipped per assignment); live-server chapter navigation (no server; harness replicates the splice+CSS path exactly); reduced-motion animation check (no orchestrated animation in cohort CSS beyond `animation:none` guard — nothing to observe); tablet 768px (assignment required desktop+phone; desktop and phone both pass with margin, no breakpoint between them alters the art rules except the ≤560px phone cap which was verified).
