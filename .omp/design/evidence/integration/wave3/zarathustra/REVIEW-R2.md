# Wave-3 Live Review R2 — Thus Spoke Zarathustra — REVISE (1 blocking: song-seal scale; 1 minor: font pref dead; 1 minor: sub 4.49)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~14:10 UTC.
URL: `http://127.0.0.1:8099/books/thus-spoke-zarathustra/` (fresh tab, cleared storage).
Viewports: 1440×1000 / 820×1180 / 390×844. 8 rep openers + cover + TOC + settings viewed.
Screenshots in this directory (all viewed).

## Verdict: REVISE — the Solar Gospel is gorgeous, but seal-song finales render as specks

The identity (lapis night + flat engraved gold, Cinzel liturgical + Spectral body — both verified
loaded and applied via computed styles, pull-line captions with ¶ citations, sun-rule, part-tinted
drop-caps, chapter-end closes, lit TOC with gold numerals) is coherent and book-specific —
title-swap pass. 81/81 manifest entries live, files+symbols all resolve (computed), all def-free
(no Open-Letter-family defect); 81/81 observed activating, zero console errors, F15 zero 404s/200,
zero overflow all widths. Scene/finale plates are magnificent (p1c1 rope-fall triptych, p4c20 dawn
finale — both fill the measure). Filter (song→7), settings rows, j/k, progress 72.4%, resume shelf
all pass. Body/title 15.58, part 8.50–12.81, captions 15.58.

## Required fixes (owner SupZarathustra-3)

1. **ISSUE (BLOCKING): the `song` treatment clamps wide multi-seal compositions to 88px — the Seven Seals finale renders as an illegible dotted speck.**
   WHERE: `theme.css` `#chapter-art.song svg { width: clamp(4rem, 12vw, 5.5rem) }` + p3c16's
   `seal-round-arc` symbol (600×170: SEVEN distinct round seals I–VII in an arc, per the manifest
   rationale "seven DISTINCT round seals, read sevenfold").
   EVIDENCE (observed): `read-p3c16-1440.png` (viewed): opener shows an 88×25px dotted arc above
   the pull-line — the seven seals are individually ~12px, numerals/motifs unreadable; at 390 the
   arc is a faint dotted smudge. The in-body roundel (data-URI `::before`, renders crisply) only
   sharpens the contrast: the SLOT art is there but starved of pixels. The `song` width rule was
   clearly authored for single-motif songs (harp, lyre — which render correctly at 88px), not for
   a seven-seal ARC whose rationale demands "read sevenfold".
   SEVERITY: blocking (p3c16 is the Part III FINALE — "The Song of Yes and Amen" — and its seal
   system is the cohort's signature device; all other `song` chapters TBD — see fix).
   FIX: give wide multi-seal songs a wide treatment: EITHER (a) add a `song-wide`/`seal-arc` class
   for multi-seal compositions (width min(30rem,92%) like finale, or the scene measure) and move
   `seal-round-arc` (+ any other multi-seal song symbol — audit all 11 `song` entries for composed
   width > 300 viewBox units) to it; OR (b) change p3c16's class to `finale`. (a) is preferred
   (keeps the song grammar extensible). Re-verify: p3c16 at 1440 + 390 — seven seals individually
   legible (numerals I–VII readable), arc presence at opener scale; + one more `song` chapter to
   confirm single-motif songs still render at seal scale (no regression).
2. **ISSUE (minor): the SANS reading preference is dead — clicking it changes nothing (body stays Spectral).**
   WHERE: shared mechanism `html[data-font="sans"] { --font-serif: "DM Sans"… }` (reader.css:177)
   vs book `:root, html[data-theme="<t>"] { --font-serif: "Spectral"… }` in all 8 theme blocks.
   EVIDENCE (observed): clicked SANS on p4c20 → computed body family stayed `Spectral, Georgia,
   serif`. Root cause: specificity — `html[data-theme="dark"]` (0,1,1) beats `html[data-font="sans"]`
   (0,1,1)? Equal specificity — so the winner is SOURCE ORDER: unlayered book theme.css beats
   `@layer shared` regardless (contract §8: "UNLAYERED and therefore always wins"). The book's
   per-theme `--font-serif` always wins over the shared font-switch. Every other book inherits the
   switch because they don't re-declare `--font-serif` per theme (or declare it compatibly).
   SEVERITY: minor (one dead control; F4 requires every offered option to work).
   FIX (book-owned, no shared change): in theme.css, add
   `html[data-font="sans"] body[data-book="thus-spoke-zarathustra"] .chapter-text { font-family:
   var(--font-sans); }` (book already declares `--font-sans: DM Sans` per theme ✓) — i.e. honor
   the switch explicitly. (The live CSSOM already shows a book rule targeting
   `html[data-font="sans"] … .chapter-tex…` — it exists but sets nothing effective; repair it to
   set the family.) Re-verify: SANS click → DM Sans computed; SERIF click → Spectral back.
3. **ISSUE (minor): `.meta-sub` at 4.49:1 — 0.01 under the floor on all sampled chapters.**
   WHERE: read-time line (`--text-faint #7E759F` on lapis, 11.52px). Metered 4.49 on
   p1c1/p2c12/p3c16/p4c20 (dark). SEVERITY: minor (rounding-adjacent, but the bar is 4.5).
   FIX: nudge `--text-faint` (dark + any other theme metering <4.5) until metered ≥4.5:1.
   Re-verify by meter.

## Notes (not defects)

- The p3c16 pull-line caption (18.4px italic, 15.58:1) + ¶24 citation + in-body roundel + seal
  data-URI closes (p3c16 has 7 seal `::before` markers per cohort-p3.css — the roundel viewed in
  body is one) show the cohort's depth; item 1 is purely the SLOT width rule.
- Emblem seals (120px, e.g. p2c12 vessel) ARE legible at their size — single-motif compositions
  work in the small treatments; only the wide ARC is starved. Do not widen everything — target
  the multi-seal case (item 1 says exactly this).
- Resume shelf "OF SELF…" truncation in my probe is a probe slice (200 chars), not UI truncation.
- `read: ['p3c2','p3c16']` + progress line update observed ✓ (F10).
- Fonts: Cinzel + Spectral computed-applied; no hotlinks (Google Fonts link only).
- p2c12's part line meters 12.81 (per-part tint) vs 8.50 elsewhere — intentional migration (Z6),
  verified coherent in screenshots.

## R3 requirements

Items 1–3 fixed + rebuild, then: p3c16 at 1440 + 390 (sevenfold legibility), one single-motif
song (no-regression), SANS/SERIF toggle computed check, sub meter, Tab-through + A6 snapshot.
That closes the book.
