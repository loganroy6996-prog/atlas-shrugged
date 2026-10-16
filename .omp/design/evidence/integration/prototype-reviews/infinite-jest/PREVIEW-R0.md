# Art Pre-Review R0 — Infinite Jest seals + manifest scaffold (NOT a prototype verdict)

Reviewer: FinalValidator. Date: 2026-10-15. No wired/IJ prototype requested yet; J8 prototype scope
(cover grid + 8 openers) is pending. This note records art-asset findings early so the prototype
round starts clean.

## Viewed: cover.svg 3×3 seal grid — STRONG with 3 repairs

The nine medallions (Whopper/Tucks/Dove Bar/Wonderchicken/Dishmaster/Yushityu/Dairy/Depend-YDAU/Glad)
are distinct engraved objects sharing one line grammar (Stamp Red keylines, manila linework, stencil
"No. N" + name cartouches, gold reserved for the Y.D.A.U. Depend seal). J1 distinctness holds across
all pairs I compared. The Yushityu board reads as circuitry (green traces + "07" chip + gold pins),
not spaghetti — the direction's own risk note is answered.

Repairs (all small, pre-prototype):
1. **IJ-A1: No. 4 Wonderchicken seal is a black void.** The bird medallion renders as a near-solid
   black disc with faint hatch — every other seal has a legible central object (burger/pad/bar/
   dishwasher/board/barn/shield/bag). At chip scale (TOC filter, date bands) it will read as a hole.
   FIX: engrave the Perdue chicken (comb + beak + wing hatch) at the same line weight as the barn/bag.
2. **IJ-A2: No. 2 Tucks seal's shamrock reads as a clover, not a medicated pad.** The pad seal shows a
   green quatrefoil on a dotted disc — first read is "lucky clover". FIX: add pad cues (rounded-square
   pad outline, cross-hatch gauze, "MEDICATED" microtype or the Tucks wordmark geometry) so the object
   is a pad first.
3. **IJ-A3: No. 3 Dove Bar seal's floating black square is ambiguous.** A solid black square with a red
   corner-tag floats top-right of the bar grid — reads as a rendering artifact / missing glyph. FIX:
   either integrate it (trial-size wrapper flap with closure seal) or remove it; if it is the "trial-size"
   flag, give it the cartouche treatment so it reads intentional.

## Computed: manifest scaffold is 89/89 resolving but NOT final content

- `design/chapters.json`: 89/89 chapter IDs resolve (src exists + symbol id present in file) — computed.
- BUT: every entry points at `art/seals.svg` with `*-placeholder` motifs (`ij-a-p1c1-placeholder`,
  `ij-c-p1c35-placeholder`, …) and NO part/order/title annotations — the provisional-ID remap data
  (contract §2 + IJ direction §11) is missing. Cohort JSONs (a–g) presumably carry the real per-chapter
  plates + annotations; the supervisor merge hasn't happened yet. This scaffold must NOT be mistaken
  for manifest completion at final census: final requires authored per-chapter plates (not seal reuse),
  motif ids without "placeholder", and part+order+title on every entry.
- `art/seals.svg` uses proper `<symbol id="seal-N" viewBox>` sprites + shared hatch patterns — the v1.1
  `symbol` consumption path is well-formed (computed). Direct-file render shows only defs (expected for
  a sprite sheet; not a defect).
- Fonts: 6 woff2 in `design/fonts/` (Archivo Black, Plex Mono 400/600, Newsreader 400/400i/600) —
  present, wiring unverified (no book CSS consumes them yet; no theme.css integration).
- No `design/*.css`, no wired prototype, no TOC/header/nav treatments yet. Theme.css is still the
  24KB baseline.

## What the J8 prototype round needs (beyond the direction's own scope)

Cover seal grid + the 8 listed openers at 3 widths, with IJ-A1–A3 fixed; dialogue-derby p1c37 shown
working or honestly cut; p1c35 chronology overlay proven not to mangle rhythm; p1c77 longest-title
survival at 390px (J3); filmography p2c2 two-column at wide viewports; violet register shift shown at
the part boundary (J5); note-tick + return-chip styling over REAL v1 note anchors (Slot S1 fix first).
