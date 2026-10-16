# Art Pre-Review R0 — Churchill Forty-Facets plates (NOT a prototype verdict)

Reviewer: FinalValidator. Date: 2026-10-15. Identity: Forty Facets (ArtDirector PASS WITH
C1–C9). No wired prototype yet; chapters.json covers 8/41 (prototype C9 set). Viewed all 8
prototype plates mounted with tokens (`plates-r0.png`): p2c1/p2c2/p3c1/p3c7/p4c2/p5c10/p5c3/p5c6.

## Position: the facet system is superb — 2 repairs, both about numeral occlusion

The cubist-dossier grammar is the most immediately legible system yet reviewed: Way 1/2
prosecution mirror (ochre↔vermilion inversion) is exact and witty; Way 22 ledger tiles with
vermilion flags + ochre rules nail the archive register; Way 40's single ochre point on
lampblack is maximum-air silence, perfect for 63 words; Way 36 full-vermilion fracture and
Way 33's balanced vermilion/slate monoliths with the gold plumb-line carry the fate register.
Palette roles hold (ochre heroic / vermilion attack / slate doubt / bone record). Title-swap: pass.

Repairs (pre-prototype):
1. **CH-A1: Way 1 numeral "1" is nearly fully occluded — violates the C-condition.**
   The ArtDirector condition (occlusion never covers first/last stroke) fails on p2c1: the "1"
   is ~90% hidden behind the gold monolith, only slivers visible (viewed). Way 2's "2" is
   correctly handled (occluded but both strokes readable). FIX: shift the Way-1 monolith left
   or the numeral right so the "1"'s full vertical reads through the gap; keep ≥2 shards
   overlapping the numeral field (the "looked through" effect) without swallowing it.
2. **CH-A2: Way 17 numeral "17" is illegible — shard-on-numeral contrast collapse.**
   The "17" sits behind bone/ochre/slate shards with its strokes broken into unreadable
   fragments (viewed) — worse than Way 1 because even the visible pieces don't resolve. FIX:
   clear a numeral well (dark gap) behind "17" as Way 22 does for "22" (white on dark, fully
   legible beside the tiles), or pull two shards aside. The rule: every Way numeral must be
   READABLE AT A GLANCE at plate scale; occlusion is atmosphere, never camouflage.

## Structural notes

- Plates use `var(--fw-*)` tokens + `.fw-num` class resolved against the LIVE document — same
  integration risk as WtP's shared defs: the v1 fill path inlines ONE symbol's clone into
  `#chapter-art`. Tokens resolve fine IF theme.css defines --fw-* on :root/body (likely yes);
  `.fw-num` needs its font rule in book CSS. The wired round must prove one plate renders with
  correct colors + numeral font in the slot (my mount assumed both).
- p5c10 entry in the manifest should confirm the epitaph's 63-word body gets maximum air in the
  OPENER composition too (plate + title + almost no chrome), not just in the plate.
- 33/41 chapters have no manifest entries and no plates — the cohort expansion (A/B/C/D) is the
  critical path. Ways 6–7 type-as-shards, Ways 15–16 split shard, Way 26 sepia frames, Way 35
  quiz are the exceptional layouts that must be VIEWED before final, not just listed.

## R1 requirements (when requested)

Wired C9 slice: cover + p1c1 (uncut lens) + p2c1/p2c2 (mirror pair) + p3c7 (Way 17) + p4c2
(ledger) + p5c6 (fracture) + p5c10 (epitaph) at all three widths through the real page +
manifest + slot fill; CH-A1/A2 fixed; phone min-height rule (≥220px, never hidden) proven;
TOC with part seals + read markers; settings.
