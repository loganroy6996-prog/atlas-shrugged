# Wave-3 Live Review R2 — Open Letter — REVISE (art integration defect + shared key defect)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~11:00 UTC.
URL: `http://127.0.0.1:8099/books/open-letter/` — NOTE: Main rebuilt `_site` mid-round
(15:22–15:24 file time): SupOpenLetter-3's `olcathedral.svg` + `olsovereign.svg` are now
LIVE (HTTP 200), so this round covers all 14 chapters. My earlier census (2 files missing)
is superseded; the tracking table is updated accordingly.
Viewports: 1440×1000, 820×1180, 390×844. Screenshots in this directory (all viewed).

## Verdict: REVISE — the book is close; two art files break the shared slot contract, one shared key defect

The Open Letter identity (UnifrakturCook blackletter + EB Garamond + Plex Mono data voice,
broadsheet-plate grammar, cockade/ledger motifs, salutation + redaction JS) is superbly
book-specific — title-swap pass, benchmark-level wit in the p1c9 flagship dissolution plate
(viewed, genuinely stunning at 1440/820/390). All 14 chapters activate (`data-art` + `plate`
class + SVG in slot + caption); cover renders (508×357 plate + caption, opacity settles to 1);
j/k nav, TOC filter/empty-state, settings, prefs, zero console errors, zero overflow everywhere.
Body 15.32:1, title 15.32:1, part 8.12:1, captions 7.11:1 — pass.

## Required fixes

1. **ISSUE (major): `oldoubt.svg` + `olrestore.svg` reference root-level `<defs>` that the shared slot fill never copies — 8 of 14 plates render degraded (missing textures, stars, grain).**
   WHERE: `books/open-letter/art/oldoubt.svg` (p1c1–p1c4) + `olrestore.svg` (p1c11–p1c14).
   EVIDENCE (observed + computed): the contract mechanism (`reader.js fillArtSlot`, shared/reader.js:559–576)
   splices only the symbol's CHILDREN into a fresh `<svg>` — root `<defs>` stay behind.
   SupOpenLetter-3's own status names this finding ("each symbol must be fully self-contained").
   The two NEW files obey it (all 7 symbols carry inside-`<defs>` with unique ids — verified).
   The two OLD files do not:
   - p1c1 (viewed `read-p1c1-1440.png`): plate renders flat umber bands only — no weave texture,
     no gilt stars (live DOM: 7+ `<use href="#od-star">` at 0×0, `document.getElementById('od-weave')`
     null, inlined svg has no `<defs>`). Missing: `od-weave`, `od-star`, `od-grain`.
   - p1c2/p1c3/p1c4: same family (`od-chartgrid`/`od-sprig`/`od-weave`/`od-grain` root-only).
   - p1c11 (viewed `read-p1c11-1440.png`): diptych renders near-void dark (only caption +
     border read) — `r-grain` root-only; p1c12/p1c13/p1c14 same file, same defect (activation
     observed, composition not viewed — presumed degraded, same root cause).
   - Contrast: p1c9 flagship (self-contained `oc9-*` defs) renders FULLY — viewed rich. The
     mechanism is proven; the old files are the defect.
   SEVERITY: major (8/14 openers ship visibly unfinished; p1c1 is the book's first impression).
   FIX: SupOpenLetter-3 to inline the needed defs into each symbol in `oldoubt.svg` +
   `olrestore.svg` (same pattern as the new files: unique per-symbol ids), rebuild, re-verify
   p1c1 + p1c11 at 1440 + 390 by screenshot. No shared change (shared code behaves per contract).
2. **ISSUE (major, shared — ReaderLead via Main): pressing `t` (or `/`) types the key into the TOC filter it just opened.**
   WHERE: shared `reader.js`: keydown `t` handler (line ~1333) calls `openToc()` WITHOUT
   `preventDefault()`, and `openToc()` (line ~757) synchronously focuses `#toc-search` — the same
   keypress's `keypress` then lands in the input. (`/` path same: line ~1318 focuses without
   preventing the `/` character; `s`/`j`/`k` all `preventDefault` correctly.)
   EVIDENCE (observed, Open Letter): after `t` with drawer closed → drawer opens AND filter
   contains `"t"` AND focus is in the filter (measured). After `/` with drawer open → filter
   contains `"/"`. Empty-state verified working after manual clear. (Twilight did NOT reproduce:
   its drawer focus landed on body — possibly a timing/focus race between books; the missing
   `preventDefault` is unambiguous in source and Open Letter demonstrates it live.)
   SEVERITY: major (every `t` press corrupts the filter; users must clear before searching).
   FIX (one line, ReaderLead): `e.preventDefault()` in the `t` branch before `openToc()`, and in
   the `/` branch (already prevents? re-check: line 1320 HAS preventDefault — yet `/` still typed.
   So the `/` keypress must be reaching the input via focus-then-char-insertion AFTER keydown
   preventDefault only stops scrolling/defaults — for a focused-then-typed char, the fix is to
   preventDefault on `keypress` too, or defer focus with `requestAnimationFrame`, or stop
   immediate propagation. ReaderLead to fix both keys robustly + regression-test.)
   Re-verify on Open Letter + one more book: `t` opens with EMPTY filter, `/` focuses with EMPTY filter.
3. **ISSUE (minor): `.meta-sub` contrast 3.30:1** (11.52px read-time line on dark).
   WHERE: same shared-token family as Twilight R2-5 / GI R2-3.
   EVIDENCE: computed composited on `rgb(13,11,9)`. FIX: book `--text-faint` override (all 8
   themes) or Main-routed shared lift. Re-verify metered ≥4.5:1.
4. **ISSUE (minor): header icon buttons presumed 36px** (shared chrome, same as Twilight R2-6 —
   routed to ReaderLead via Main; measured at final).

## Notes (not defects)

- Resume shelf shows single title ("CHAPTER 14 · RULES FOR REACTIONARIES") — no duplication
  defect on this book (its `number_label` differs from `title`). Twilight R2-3 is data-dependent.
- p1c5 sovereign plate (viewed): survey-chart linework rich and correct — self-contained defs work.
- p1c9 flagship at 390 (viewed): dissolution LABELS legible ("DISSOLUTION", "RECEIVERS —", "EAGLE
  → WARRANTS"), cockade + seal crisp — exceptional small-screen craft.
- TOC drawer (viewed): blackletter-adjacent serif names, gold numerals (2–XII), words/mins,
  progress line, close × — coherent; filter + no-match empty state verified.
- `book.js` (salutation cockades + content redactions) is contract-clean: `reader:chapter`
  listener only, touches `#chapter-text` markers + own classes. Redaction markers (`aria-label`
  "redacted: …", select-to-reveal title) are honest interaction, not hidden text. ✓
- No console errors; no overflow at 820/390 (cover + reader + openers).
- Full F-run: F1/F2 (filter+empty)/F4/F5/F6/F9/F10/F13/F14-15 network carried to R3 alongside the
  art repair (same shared paths Twilight exercised; no double-charge). F7/F8(j/k) observed PASS
  here; F3/F8(t/s//) PASS except item 2's pollution.
- Cross-book audit finding (computed, reported to Main for routing, NOT this book's defect):
  `twilight hemisected-mask` references root `hf-mask-clip`/`hf-ring-clip-daylight` (same
  degraded-render family — SupTwilight-3 item); `infinite-jest seals.svg`/`cohort-a.svg` have
  root-def refs on seal-1/7/9 + glad-horseshoe/clown-mask (SupIJ-3 item). Twilight R2 file
  updated with an addendum.

## R3 requirements

Items 1+3 fixed + rebuild (+ item 2 whenever ReaderLead lands — R3 may proceed on art alone with
item 2 carried): p1c1 + p1c5 + p1c9 + p1c11 + p1c14 at 1440 + 390, cover top at 1440, full F-run,
contrast meter, Tab-through, network census.
