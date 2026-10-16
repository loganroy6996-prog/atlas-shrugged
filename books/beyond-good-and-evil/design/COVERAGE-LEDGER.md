# BGE coverage + review ledger (SupBGE-3-2, 2026-10-15)

Identity: The Numbered Ledger (ArtDirector APPROVED, E1–E7). Server:
http://127.0.0.1:8099/books/beyond-good-and-evil/ (source-identical staging;
Main rebuilds for final). Job ceiling 16 blocked cohort-lead fan-out
(USAGE-POLICY); supervisor authored plates + integration directly from the
accepted FRONT/BACK research, holding the independent validator separate.

## Manifest + art census (computed, source == _site)

- design/chapters.json: 11/11 entries, every src 200 + symbol inlines
  (p1c1 fleuron-veil, p1c2 seal-1-sphinx, p1c3 seal-2-gate, p1c4 seal-3-flame,
  p1c5 seal-4-sorts, p1c6 seal-5-herd, p1c7 seal-6-lens, p1c8 seal-7-twinsuns,
  p1c9 seal-8-staves, p1c10 seal-9-steps, p1c11 fleuron-bow).
- art/: 17 SVGs (9 seals + 2 fleurons + 6 A.0 end-seals ≤32px), all 200 live,
  zero gradient/filter elements. symbols wrapped contract-A.2.
- Oracle (regex ^(\d{1,3}[A-Z]?)\.(\s|--)): 298/298 EXACT
  (23/21/18/125/18/10/26/17/40); 65A/73A/237A + dash 278/281/282 verified.
- ledger.js: data-sec on every wrap, verse-frag (p1c8 ¶¶38–43+61–68),
  verse-finale (p1c9 ¶59), movement index, twin-split spans, rank-steps,
  kicker-range rebuild, TOC ranges. E4 skip p1c1/p1c11.

## Repairs from live screenshots (all re-verified)

1. p1c10 rank-steps CSS background url(#fragment) never renders → inlined via
   ledger.js .rank-steps span (verified live).
2. p1c11 bow end-seal inline-block ran onto the text line → background-art
   block under final verse, centered (verified live).
3. p1c5 hairlines + p1c9 movement rules full-faded → color-mix softened to
   55–60% (verified live).
4. Reduced-motion guard lost specificity to the :not([hidden]) settle rule →
   guard restyled to match; animation-name:none under emulation (verified).
5. Seal refinement pass: softened stipples/air (55%), added compass/ray/finial
   arrowheads (verified on re-capture).

## Independent validator: PASS (BgeFinalValidator-2, full text agent://)

- E1 PASS (33 wraps, zero errors, live sum 298), E2 PASS (flat computed),
  E3 PASS EXACT (50/146/278/287/296 only + dual-rule + §209 + bow),
  E4 PASS (0 § in p1c1/p1c11), E5 PASS (viewed), E7 PASS (six + spots),
  BGE-A1 PASS (sphinx at sorts standard).
- F1–F10 PASS; F11/F13 partial→closed by supervisor (phone TOC/filter/empty
  state + last-chapter Next-disabled verified live); F15 PASS (0 console,
  0 404s/108 reqs; benign ViewTransition AbortErrors under rapid nav only).
- A1 partial (returns verified; full Tab-through for FinalValidator),
  A2 PASS dark + light computed (15.83/5.31/6.84/5.45/7.32),
  A3 fixed+verified, A4 PASS, A6 PASS, A7 PASS (4 families load).
- Evidence: .omp/design/evidence/beyond-good-and-evil/ (32 PNGs).

## Handoff to Main / FinalValidator

- Needs: production rebuild (build_site.sh already ships art/** + design/**
  + book JS), twilight-R3-style final sweep (Tab-through, touch targets,
  mid-theme contrast spot, clean-cache re-verify).
- No shared-reader edits requested. No prose/data edits made.

## R3 resume verification (SupBGE-3-2, ~18:35 UTC — assignment premise was stale)

- Incoming ticket claimed 5/11 manifest + missing seals; computed census on
  arrival showed source ALREADY 11/11 + 17/17 plates, byte-identical to _site,
  with R2 CONDITIONAL PASS filed. No rebuild of settled work; ran an
  independent live re-verification instead (fresh tab, clean-cache reloads).
- Live 11-chapter sweep: counts 0/23/21/18/125/18/10/26/17/40/0 (sum 298),
  every slot filled with distinct seal/fleuron + caption, figures/gloss/end
  marks correct (end none on p1c1/p1c11), zero overflow, zero console/404.
- Oracle paragraph-index checks: p1c2 P1/P3/P36/P73, p1c5 P1/P4(65A)/P14(73A)/
  P90(146)/P129, p1c8 P3(215)/P69(237A)/P71, p1c10 P64(278)/P68(281)/P70(282)/
  P76(287)/P93(296) — all exact. verse-frag x14, verse-finale, 7 movements.
- E3 full-book red sweep: ONLY 50/146/278/287/296 (sec-red); E2 flat computed
  (shadows/filters none); E4 zero § in p1c1/p1c11; §209 brass-on-cold live.
- Mid-theme contrast computed: nocturne text 14.80 / brass 8.50; sepia text
  12.89 / brass 5.50.
- Viewed this round: cover + p1c1/p1c2/p1c5/p1c10/p1c11 at 390/820/1440,
  p1c5 mid-§146 + p1c10 §287 at 1440, six deferred seals, p1c10 meta closeup,
  TOC drawer. R2's 18 PNGs + book's 32 PNGs remain the archived evidence.
- ONE new defect found + fixed: p1c10 rank-steps mark painted as a solid bar
  (`.meta-rule span` brass background won the cascade over `.rank-steps` in
  the cached stylesheet; narrowed the bar rule to span:not(.rank-steps) and
  forced steps background transparent). Root cause was a stale-CSS read during
  the earlier session; verified post-fix as a true 1.25px ascending step-line
  (bg transparent, path 40x15). ledger.js path/weight refined in the same
  pass (M6,19 / 1.25px). Re-verified live after clean-cache reload.
- Full Tab-through + touch-target measurement + F13 hook remain FinalValidator
  final-cycle items (shared). No book action outstanding.
