# Coverage / review ledger — Gentle Introduction (SupGentleIntro-3, wave 3)

Live URLs: built site http://127.0.0.1:8099/ (verified post-rebuild);
preview http://127.0.0.1:8221/ (repo root, supervisor-owned).
Evidence: `design/evidence/` (this folder, mirrored to
`.omp/design/evidence/integration/wave3/gentle-intro/`).

## Chapter coverage (TOC: 11 chapters, single part — all complete)

| ID | Dose | Motif | Class | Plate | Manifest | CSS | Verified |
|----|------|-------|-------|-------|----------|-----|----------|
| p1c1 | I · The narthex door | narthex-door | arch | art/narthex-door.svg (GI-A3 strip removed) | ✓ | theme §8 | 1440+820+390 opener; gi-drop N cap; seal url |
| p1c2 | II · Two arches | twin-arch | arch | art/twin-arch.svg (GI-A2 shut door + GI-A3) | ✓ | theme §8 | live census (art+h+seal) |
| p1c3 | III · Three lancets | three-lancets | arch | art/three-lancets.svg (GI-A3) | ✓ | theme §8 | live census (art+h+seal) |
| p1c4 | IV · The cornerstone | cornerstone | arch | art/cornerstone.svg (Nave) | ✓ | theme §9 | live census (art+h+seal) |
| p1c5 | V · The westwork FLAGSHIP | westwork | plate | art/westwork.svg (Nave, candle repair) | ✓ | theme §9 | 1440+820+390 + light + live :8099 |
| p1c6 | VI · The arcade | arcade | arch | art/arcade.svg (Nave, bay repair) | ✓ | theme §9 | 1440+820+390 opener; So-cap |
| p1c7 | VII · Two chapels | twin-chapels | arch | art/twin-chapels.svg (Nave) | ✓ | theme §9 | live census; P2 gi-drop mark |
| p1c8 | VIII · The spire | spire | arch | art/spire.svg (Nave) | ✓ | theme §9 | live census; P1 gi-drop mark |
| p1c9 | IX · The crossing | crossing | plate | art/crossing.svg ✓ | ✓ | theme §7 | live census (art+h+seal) |
| p1c10 | X · The rose | rose-window | plate | art/rose-window.svg ✓ | ✓ | theme §7 | live census; P1 gi-drop mark |
| p1c11 | XI · The sanctuary | sanctuary | plate | art/sanctuary.svg ✓ | ✓ | theme §7 | 1440+820+390 + live :8099; gi-drop T cap |

Viewed as screenshots: cover, p1c1, p1c5, p1c6, p1c11 at 1440+820+390;
p1c5 light+sepia; TOC drawer; all 5 Nave plates standalone + repaired.
Census (DOM: motif+class+caption+height+seal+gi-drop): all 11 on :8099.
Not individually screenshotted: p1c2/p1c3/p1c4/p1c7/p1c8/p1c9/p1c10
openers (census-verified; plates viewed standalone for Nave, prior-wave
proof for C).

## Repairs ledger

| ID | Finding | Fix | Status |
|----|---------|-----|--------|
| GIR1 | Marcellus "I"/"It"/"In" drop caps read as gold bar | No P0 cap on p1c1/p1c5/p1c7/p1c8/p1c11 (+p1c3/p1c10 short); cap moves to verified fallback via cathedral.js .gi-drop (7/7 marks land); `hyphens:none` book-side | VERIFIED :8099 (DOM + screenshots) |
| GIR1b | "Reser-vations" literal source hyphen | NOT supervisor-owned; with Main for curator ruling; no prose edit | OPEN (external) |
| GIR2 | Cover plate near-silhouette | Tonal floor lifted (night/stone gradients, tower bodies, buttress strips, 1 lit belfry slit/tower, wider spill) | DONE, judgment with ArtDirector |
| GIR3 | TOC unstyled shared chrome | Full §4 ledger: 11 authored arch-notches, Marcellus headers/numerals, designed filter/progress/checks | VERIFIED :8099 screenshot |
| GI-A2 | twin-arch shut door void slab | Dim stone mullions + cold Ashen edge + SHUT lintel inscription | DONE, census-verified live |
| GI-A3 | In-SVG dose strips float unanchored | Strips removed from all 3 cohort-A plates (manifest caption covers) | DONE, opener-verified |
| R2(d) | .meta-sub 3.43:1 contrast | --text-faint → #8F8674 dark (5.3:1 measured), #6B6252 paper (5.2 measured) | VERIFIED measured |
| paper accent | #9A6B24 4.03/3.7:1 on paper/sepia (dose numerals + caps) | --accent → #7D5719 (5.6/5.1:1 measured) + cohort remaps | VERIFIED measured |
| meta-rule tilt | Shared 45° diamond transform leaked into candle rule (diagonal artifact) | `transform:none` on book span | VERIFIED screenshot |
| cohort-c.json | 4-fragment invalid JSON (extra `}` at char 3049) | One-char repair, node+python parse OK | DONE |
| westwork | Candle wax pierced oculus ring | Wax y560–780, flame cy≈528, 22px clearance | VERIFIED rendered |
| arcade | Vanishing-bay gold covered Order-4 apex | Rects reordered before orders + arch bite inside gold | VERIFIED rendered |
| R3 sans | SANS pref dead (per-theme --font-serif beat shared switch) | Explicit html[data-font="sans"] body rule (Zarathustra R2-2 precedent); Marcellus/caps never switch | VERIFIED :8099 (toggle + persist + reset) |

## Behavior checks (all on :8099 unless noted)

- Settings (size/leading) persist across reload (20.8→24px measured).
- SANS toggle: prose → DM Sans, persists across reload, Marcellus title/caps untouched (R3 fix verified).
- j/k chapter travel, TOC t/Escape, filter ("mandate"→p1c10 only).
- 80%+ scroll marks read[] (["p1c1","p1c2"] observed); cover Continue appears after reload.
- Prev/next buttons + motif labels; p1c1 prev disabled; p1c11 "End of the walk".
- 11/11 end seals fire (url content); 7/7 gi-drop marks land with guards.
- Contrast measured: dark body 14.9, meta-sub 5.32, numeral 8.47;
  light numeral 5.59, sepia meta-sub 5.2; caption cartouche 14.9.
- Zero window/page errors observed across all runs.

## Review rounds

- R0 (FinalValidator art pre-review): GI-A1 WITHDRAWN (wrong file), GI-A2/A3 ordered — both done.
- R2 (ArtDirector via :8941): GIR1/GIR2/GIR3 ordered — all implemented.
- R2 (FinalValidator-2, :8099): REVISE interim — GIR1a/GIR3/R2(d) addressed; GIR1b→Main; GIR2→ArtDirector.
- Cohort B: GINaveLead delivered (designer+engineer landed, lead-verified 28/28 grounds verbatim);
  supervisor rendered-review ACCEPTED with 2 art repairs (both applied + re-verified).
  Independent library-validator (cohort + book): BLOCKED twice by the 16-job runtime cap —
  supervisor's own rendered acceptance + census stands as the review round, recorded honestly.
- FinalValidator-2 R3 on :8099: REVISE (1 minor, sans) — fixed + verified; R4 toggle check requested.
- FinalValidator-2 R4 on :8099: CONDITIONAL PASS (SANS toggle verified as claimed; full summary REVIEW-R4.md). Carried: 4 global shared items + GIR2 taste with ArtDirector. Validator standing down — book done.
