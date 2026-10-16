# Wave-3 Live Review R2 — Beyond Good and Evil — CONDITIONAL PASS

Reviewer: FinalValidator-3-2. Date: 2026-10-15 ~18:15 UTC.
URL: `http://127.0.0.1:8099/books/beyond-good-and-evil/` (Main's built `_site`).
Scope per Main: E7 (cover + p1c1/p1c2/p1c5/p1c10/p1c11) at 1440/820/390, function + contrast +
console. My coverage: E7 scope + p1c5 mid-chapter oracle render + full prefs/themes/keyboard/
console pass. Screenshots in this directory (`r2-*`, 18 files, all viewed).
Book evidence read: `books/beyond-good-and-evil/design/COVERAGE-LEDGER.md` + BgeFinalValidator-2
verdict (via ledger) + 32 book PNGs (headers listed, key claims re-exercised — not trusted).

## Verdict: CONDITIONAL PASS — numbered-ledger identity verified live; shared items only

What is genuinely good (observed): the ledger grammar is exact and alive — E1 oracle wraps counted
live (p1c2: 23, p1c5: 125 with 65A in sequence, p1c1/p1c11: 0 per E4 skip); section numerals render
as marginal gold indices with hairline separators mid-chapter (viewed p1c5 §§103–109); all 11
manifest entries resolve with distinct seal/fleuron plates + captions; size pref applies
(20.8→23.53px on lg), SANS applies (Archivo computed) — the GS-class defect is NOT present here;
all E7 openers + cover render at all 3 widths with zero overflow everywhere (measured 0 on all
probes); TOC filter narrows (noble→1), empty-state shows ("No chapters match that filter."), Escape
closes; prefs persist + resume chip ("CHAPTER IV · APOPHTHEGMS AND INTERLUDES") across reload;
contrast body 15.06 dark / 15.83 vellum, sub 4.70 dark (10.88px — passes 4.5) / 5.45 vellum;
TOC drawer role=dialog + aria-label ✓; focus rings solid 2px; j/k navigate; prev/next end-disabled
correct (prev disabled on p1c1, next disabled on p1c11).

## E1–E7 disposition (re-checked on the live build)

- E1 oracle wraps: VERIFIED live (counts above; 65A dash-sections present; first-five sequences sane).
- E2 flat computed: accepted (no gradient relief observed on seals in 18 views; numerals flat gold).
- E3 special sections: accepted on book-validator evidence (50/146/278/287/296 + dual-rule + §209 +
  bow — my p1c5 mid-view shows the separator grammar rendering; full E3 spot-check at final).
- E4 skip p1c1/p1c11: VERIFIED (0 wraps both).
- E5/E7 plates + spots: VERIFIED for E7 scope (veil-line Preface, sphinx-gap PL.I, sorts PL.IV,
  steps PL.IX, bow finale — all viewed with captions at 1440; p1c2+p1c10 at 820; all five at 390).
- BGE-A1 sphinx standard: accepted (sphinx-gap renders composed, no clip, at 1440/820/390).

## Carried shared items (filed to Main; not book defects)

- SH-2 36px headers: presumed (not re-measured on this book; identical shared chrome).
- F15: 2 `AbortError: Transition was skipped. New ViewTransition started` page-errors under my rapid
  chapter-hopping — matches the book-validator's "benign ViewTransition AbortErrors under rapid nav"
  note exactly. Zero console entries, zero failed requests across 29 requests. The errors fire only
  when a new view-transition interrupts an in-flight one (harness-speed navigation, not human reading);
  no user-visible breakage. Accepted as benign; ReaderLead may silence with a `.catch()` if desired.
- SH-5: NOT an issue here — TOC drawer carries role=dialog + aria-label (better than Twilight's
  role-less drawer; Twilight's SH-5 stands for its own book or as a consistency note).
- F13: not-run (same closured-openChapter limitation; needs ReaderLead hook).

## Functional checklist (observed on :8099)

F1 Begin→Preface PASS · F2 TOC+filter+jump PASS (incl. empty state) · F3 TOC Escape PASS ·
F4 PASS (size applies, sans applies, themes apply — Ink→Vellum metered; leading/measure not
separately exercised — carried) · F5 settings Escape PASS · F6 prefs persist PASS · F7 next/prev
PASS (end-disabled both ends) · F8 j PASS + k implied (j verified p1c1→p1c2; full k/t/s on this
book not-run — carried) · F9 progress + resume PASS (chip observed; scrollY-exact not-run) ·
F10 read/progress observed ("7 of 11 finished · 56%") PASS · F11 390 TOC/filter PASS (no trap) ·
F12 n/a · F13 not-run · F14 home deferred · F15 PASS-modulo-benign-AbortErrors (above).
A1 focus PASS · A2 contrast PASS · A3 reduced-motion accepted on book evidence (guard re-verified
by supervisor under emulation) · A4 no overflow PASS · A5 dark-first PASS · A6 PASS (one h1 per
view; dialogs labelled) · A7 no hotlinks PASS; Source Serif 4 + Archivo load + compute PASS.

## Taste (visual-critique, from viewed screenshots)

Title-swap passes: the numbered-ledger grammar (marginal § indices, seal plates, kicker ranges
§§63–185, hairline separators) belongs to this book's aphoristic machinery — it would be nonsense
on a narrative sibling. Cover (sphinx-gate diptych + stairs motif, Fraunces inscriptional) holds at
all 3 widths. Body calm at 20.8px. Not slop. Minor: p1c1 veil-line plate is quiet next to the seal
chapters — proportional for a preface, not a defect.

## Coverage record

Structural (computed): 11/11 TOC ids live; 11/11 manifest, 0 extra/missing; all source files
byte-identical in `_site` (zero diffs); E1 counts observed live in DOM.
Visual sampling (viewed): r2-cover-1440/820/390, r2-read-p1c1-1440/390, r2-read-p1c2-1440/820/390,
r2-read-p1c5-1440/390 + mid-1440, r2-read-p1c10-1440/820/390, r2-read-p1c11-1440/390,
r2-toc-390, r2-settings-vellum-1440.
Not visually reviewed: p1c3/p1c4/p1c6/p1c7/p1c8/p1c9 openers (book-validator viewed all + E3 spots;
my E7 scope per Main + their 32 PNGs cover the gap — no full-11 claim by me).
Not-run: leading/measure pref switches, k/t/s keys, scrollY-exact restore, full F13, E3 re-spots,
8-theme full meter (Ink + Vellum metered; book A2 claims dark+light computed) — final-cycle items.

## R3 re-verify addendum (2026-10-15 ~19:00 UTC) — rank-steps FIXED, PASS stands

Supervisor's R3 resume fix verified live on :8099 (fresh tab `bge-r3`, clean-cache load):
p1c10 meta-rule now shows a true ascending step-line (inline SVG path M6,19 h10 v-5…,
stroke-width 1.25, transparent ground — no solid bar). Viewed closeup:
`r3-rank-steps-closeup.webp`. Full E1 sweep re-observed in live DOM:
0/23/21/18/125/18/10/26/17/40/0 = 298 EXACT. Source↔site parity confirmed on theme.css +
ledger.js. CONDITIONAL PASS stands; no further BGE action.
