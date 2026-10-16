# Shared reader verification (ReaderLead, 2026-10-15)

Source server: track-local `python3 -m http.server` on source tree (port varied:
8124 → 8131 → 8132 as siblings claimed ports). Native Eval browser, screenshots
viewed. No fixtures remain in book-owned source dirs.

## Contract implementation (all verified live)
- Hooks: `body[data-book][data-view]` on cover; + `[data-chapter][data-part]
  [data-part-id]` + `[data-art]` when manifest motif present. `#cover-art` /
  `#chapter-art` injected hidden-when-empty; `#chapter-text[data-paras]`.
- `reader:chapter` CustomEvent: `{book, chapterId, partId, partRoman, index,
  paragraphs, words}` observed on chapter open.
- Manifest: `design/chapters.json` 404-tolerant; `src` whole-file + `symbol`
  key (A.2) + legacy `#frag` (A.1) all inlined correctly. Symbol branch
  splices children (Churchill 0×0 defect fixed; p2c1 renders 1104×331).
- Notes: anchors `#note-N` + `.reader-note(-sub)`; note→note idioms linkified;
  `note_refs` curated body→note (IJ p1c14: 9 refs); notes-index + bounded
  fetch resolution; return chip + Esc return + exact scroll restore. S1
  (self-match) fixed: p2c1 "Q.v. Note 211" → p2c7 `#note-211`. Unresolvable
  refs inert (no chip/jump). Live IJ freeze data: p1c14 → p2c3 `#note-28`,
  return to p1c14 @ scrollY 3251.
- Classifiers: `.reader-nb` (start-anchored), `.reader-fragnum` + no-drop for
  numeral-led openers (GS p5c18 "125." intact at body size), epigraph render.
- Cascade: `@layer shared` (reader.css + art.css import); A.3 measure
  composition — 6/6 matrix PASS (34rem book 544/544/1024; 38rem chapter
  608/608/1024); phone no-overflow; real-BT emulation matches.
- Chrome defects fixed: `LIBRARY_HREF` defined; `.chapter-nav` base grid;
  resume detail filled; TOC focus return + `/` filter + ↑↓ travel;
  `?` shortcut reference (9 rows); empty-filter styled state.
- Build: `build_site.sh` ships `assets/**` + per-book `art/**` + `design/**`
  (test build: atlas art+design dirs present). Generator non-destructive
  (ART-DIRECTION.md skip + write-only-missing; entry guard restored).
- F13: `?fail=p1c1` forces one simulated load failure → error card shown
  ("This chapter didn't load.", paras=0, screenshot viewed) → Retry recovers
  full chapter (405 paras, error hidden). Single-shot per page load.
Zero console errors on every pass.

## Deferred to Main (integration owner)
- `:8000` rebuild + refresh when tree is ready; deploy.yml parity (Main-owned).
- Spawn freeze: shared designer/engineer/validator were NOT spawned (global
  100-job ceiling + soft freeze); all shared work done inline as sole writer.
