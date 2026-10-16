# Shared reader v1 — independent checks R1 (FinalValidator, 2026-10-15)

Build: fresh `_site` on :8000 (1121 files). `shared/reader.js` 51KB/1379 lines — v1 implementation present.

## Observed PASS

- Slots injected: `#chapter-art` + `#cover-art` exist on IJ cover; `body[data-book="infinite-jest"]`,
  `body[data-view="cover"]` set (observed).
- Manifest fetch is 404-tolerant: no `design/chapters.json` yet (404 observed), cover still renders, no error.
- Note anchors: p2c1 "Notes 1–23" renders 23 `.reader-note` anchors (`note-1..note-23`, observed).
- Note→note linkify: "Q.v. Note 211" became `a.reader-noteref[href="#note-211"]` (observed).
- `LIBRARY_HREF` fixed: `#btn-library` navigates to `/index.html`, no pageerror (observed) — baseline B1 CLOSED.
- `notes-index.json` absent (404) → falls to bounded scan path (no crash; scan path itself untested due to S1).

## S1 — BLOCKING shared defect: note-follow self-matches the clicked link, never leaves the chapter

- WHERE: `resolveNoteChapter()` live-DOM step, `shared/reader.js:913`:
  `chapterText?.querySelector('[data-note="211"]')` matches the clicked `a.reader-noteref` itself
  (it carries `data-note="211"`), so the resolver returns `{chapterId: currentId, cached: true}`.
- EVIDENCE (observed, IJ p2c1 → "Q.v. Note 211", which lives in p2c7):
  click shows the return chip ("↩ Return to Notes 1–23", observed in screenshot `ij-note211-target.png`
  — which actually still shows p2c1), but chapter stays "Notes 1–23", `location.hash` stays empty,
  zero chapter fetches fire (observed request log), no console error. Synthetic `.click()` reproduces.
  DOM proof: `#chapter-text [data-note="211"]` matches exactly one node: `A.reader-noteref#(noid)`.
  Manual simulation of the bounded scan finds p2c7 correctly — only the live step is wrong.
- SEVERITY: blocking for F12 (every body→note and note→note follow where the target isn't already
  rendered self-matches; note→note within the SAME chapter accidentally "works" by scrolling nowhere).
- FIX (smallest): scope the live query to note targets, not refs — e.g.
  `chapterText?.querySelector('.reader-note[data-note="..."], .reader-note-sub[data-note="..."]')`
  (or `#note-${CSS.escape(num)}` by id). One selector, no architecture change.
- RE-VERIFY: click "Q.v. Note 211" in p2c1 → must land on p2c7 "Notes 185–224" with `#note-211`,
  flash class, chip showing origin; chip click returns to p2c1 with scroll restored.

## Deferred to R2 (after S1 fix)

- Full F12 round trip incl. cross-chapter fetch + `notes-index.json` path (needs curator file or more notes).
- Body→note curated refs (`note_refs` — needs curator data; IJ provisional).
- `Esc`-on-note-target return path.
- Manifest `symbol` fill (needs a real `design/chapters.json` — Twilight R2).
- `reader:chapter` event payload (needs a book-owned listener or synthetic check).
- `/`-to-filter + TOC focus return (quick, fold into book rounds).
