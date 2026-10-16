# Wave-3 Live Review R2 — Gentle Introduction — REVISE (interim; supervisor mid-repair)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~10:20 UTC.
URL: `http://127.0.0.1:8099/books/gentle-introduction/` (Main's built `_site`).
Viewports: 1440×1000, 820×1180, 390×844. Screenshots in this directory (all viewed).
Context: SupGentleIntro-3 is actively repairing GIR1–GIR3 + 5 missing plates + manifest 3→11.
This round documents the live baseline the repairs must beat — it is not a final verdict.

## Verdict: REVISE — 3/11 chapters wired; GIR1 live-broken; art direction itself is gorgeous

The Cathedral identity (Marcellus inscriptional + Source Serif body + amber dose system + authored
narthex plates) is one of the strongest on the shelf — title-swap pass, benchmark-adjacent craft.
But only p1c1–p1c3 activate art; p1c4–p1c11 render with the slot `hidden` (correct empty behavior,
no gap — good); and the p1c1 drop-cap is visibly broken live.

## Activation sweep (observed, all 11 via TOC clicks)

| Ch | data-art | Slot | SVG box (1440) | Title |
|---|---|---|---|---|
| p1c1 | narthex-door | shown, arch + caption | 688×387 | The Red Pill |
| p1c2 | twin-arch | shown, arch + caption | 688×387 | The American Rebellion |
| p1c3 | three-lancets | shown, arch + caption | 688×387 | AGW, KFM, and HNU |
| p1c4–p1c11 | none | hidden, 0 kids (clean) | — | Plan Moldbug … The New Structure |

Manifest (computed): 3/11 entries; all resolve (file, no symbols). Zero console errors on the sweep.

## GIR dispositions (ArtDirector repairs, re-checked live)

- **GIR1 (drop-cap letter loss + hyphenation) — CONFIRMED BROKEN LIVE, two separable defects:**
  1. The p1c1 "I" drop-cap (Marcellus `::first-letter`, 72.8px, gold) renders as a plain gold
     RECTANGLE — viewed at 1440/820/390 ("Ithought it'd be fun…": the I is a bar, then "thought"
     joins with no space). The `::first-letter` style applies (measured float:left, gold) but the
     glyph fails — consistent with the Marcellus webfont lacking the capital-I glyph contour the
     renderer picks at that weight, OR a first-letter/font-feature interaction. Marcellus IS loaded
     (`document.fonts.check` true) and used for headings — only the drop-cap I fails. Smallest fix:
     book CSS to render the drop-cap in a face with a proven I (or restyle the p1c1 opener's first
     letter as an explicit element), verified by screenshot, not by font-check alone.
  2. "Reser-vations" is LITERAL SOURCE TEXT — `books/gentle-introduction/data/chapters/p1c1.json`
     paragraph 0 contains `Reser-vations` (plain ASCII hyphen, verified bytes). Not CSS
     hyphenation. Book teams MUST NOT hand-edit prose (contract §1/§5). Owner: Main/text decision —
     needs a curator ruling (source preserves an original line-break hyphen? or extraction damage?).
     I do NOT ask SupGentleIntro-3 to touch it. Flagged to Main.
- **GIR2 (cover tonal floor) — COVER VIEWED, judgment for ArtDirector:** the cover plate at
  1440/820/390 reads adeep-nave-at-night composition — near-black field, twin towers + rose window
  + lit door + dose rail visible but dim; the bottom half of the 1440 viewport is near-void dark
  (plate occupies ~top 45%, then title block). Whether that floor is "rich dark" or "empty" is a
  taste call I leave to the ArtDirector's re-inspection; my functional notes: no overflow at any
  width, cover art 1 child renders, resume shelf works ("CHAPTER 4 · PLAN MOLDBUG", single title —
  no duplication defect here). Metered page bg `rgb(16,15,13)`.
- **GIR3 (unstyled TOC) — ALREADY STYLED IN THE LIVE BUILD:** live `theme.css` carries
  `body[data-book="gentle-introduction"] .toc-*` rules (part header, num, name, active states —
  observed in stylesheet scan + `toc-1440.png` shows amber numerals, dose subtitles, Marcellus
  names). Either repaired before this build or GIR3 predates the merge. SupGentleIntro-3 to confirm
  nothing further is owed; I consider GIR3 closed pending ArtDirector sign-off.

## Required fixes (SupGentleIntro-3 wave, all already in flight per supervisor status)

1. **GIR1a drop-cap I** (major, cosmetic-critical — first paragraph of the book): fix + screenshot
   p1c1 at 1440 + 390 showing a real "I".
2. **Manifest 3→11 + 5 missing plates** (major, coverage): every ID wired; slot stays hidden-clean
   where intentionally artless — but the dose system implies 11 plates, so land them or record the
   deliberate grammar for plateless chapters.
3. **`.meta-sub` contrast 3.43:1** (minor, 11.52px muted on dark; same shared-token family as
   Twilight R2-5): book `--text-faint` override for all 8 themes, or Main routes to ReaderLead.
4. Header icon buttons presumed 36px (shared chrome — same as Twilight R2-6, routed to ReaderLead
   via Main; measure at final).

## Notes

- Body 14.90:1, title 14.90:1, part-line 8.47:1 — pass. Source Serif body + Marcellus display both
  verified loaded and applied (computed).
- p1c4 (no-art chapter) opener viewed: clean title + rule + body, zero gap — the contract's
  empty-slot behavior holds. ✓
- "≈47 MIN · 9,429 WORDS" read-time + dose captions ("Dose I · The narthex door") + progress rail
  all render; roman-numeral dose system (I OF XI) is book-specific and lovely.
- No console errors; no overflow at 820/390 (cover + reader).
- Full functional battery (F1–F15) deferred to R3 after the manifest completes — re-running it on
  3 wired chapters now would double-charge the same shared paths Twilight already exercised.

## R3 requirements

GIR1a fixed + manifest complete + plates landed + rebuild, then: cover + p1c1 + one mid dose +
p1c11 at all three widths, TOC + settings, contrast meter incl. `.meta-sub`, full F-run.
