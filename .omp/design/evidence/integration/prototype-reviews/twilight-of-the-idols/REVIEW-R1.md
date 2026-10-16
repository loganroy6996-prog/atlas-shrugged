# Prototype Review R1 — Twilight of the Idols — REVISE (minor, specific)

Reviewer: FinalValidator. Date: 2026-10-15. Prototype: `books/twilight-of-the-idols/design/prototype.html`
rendered via workspace server `http://127.0.0.1:38903/` (prototype hardcodes `http://127.0.0.1:8000/` for
shared CSS/JS + book.css + cover.svg, so it reviewed the BASELINE shared reader, not ReaderLead's v1 landing —
slots/`reader:chapter`/manifest fill were not exercisable; that is expected timing, not a defect).
Screenshots (viewed): `cover-1440/820/390.png`, `read-p1c1-1440/820/390.png`, `toc-1440.png` in this directory.

## Verdict: REVISE — ship-blocking: none; fix before expansion: 3 items below

The direction is strong and book-specific: struck-bronze sounding-rings + Cinzel inscriptional caps + engraved
idol-disc cover art reads as Twilight and would read wrong on any other book (title-swap test: pass). Body text
stays calm and legible; art never touches prose. Contrast (observed, composited): body 15.08:1, bronze meta
7.81:1, Cinzel title 15.08:1 — all pass. Cinzel verified loaded (`document.fonts.check('700 20px Cinzel')` true,
computed title font-family Cinzel). TOC restyle (Cinzel numerals, inscription-plate part header, ring read-state,
sulphur active row) is coherent. Cover composition holds at 1440/820/390 with sane stacking.

## Required fixes (smallest change each)

1. **ISSUE: chapter-emblem slot renders an empty 148px-tall gap on p1c1 (and every chapter until cohort emblems land).**
   WHERE: `.chapter-meta::before` in `design/book.css` (fixed 148×148 block, `background: var(--tw-emblem, none)`).
   EVIDENCE: observed `backgroundImage: none` with the ::before box occupying vertical space above FOREWORD in
   `read-p1c1-1440.png` (the small diamond + gap). SEVERITY: major (every opener ships a hole until all 12
   emblems land; also breaks the "no art = no rhythm shift" contract rule). FIX: collapse the slot when empty —
   e.g. `body[data-chapter] .chapter-meta::before { display: none }` by default and have cohort CSS set
   `display:block` only alongside its `--tw-emblem` value; or drive the emblem through the contract's
   `#chapter-art` slot + `design/chapters.json` (preferred — slot is `hidden` when empty by construction).
   Re-verify: p1c1 opener with no emblem must show zero gap; with emblem, 148px art.
2. **ISSUE: prototype hardcodes the baseline origin for book-owned assets it is supposed to be testing.**
   WHERE: `prototype.html` links `http://127.0.0.1:8000/.../design/book.css` and `.../art/cover.svg`.
   EVIDENCE: prototype renders only because Main's baseline `_site`… actually NO — observed: those _site URLs 404
   in the resource log on first load yet the page still styled (browser fell back to workspace-relative? No:
   book.css bronze var WAS active `--tw-bronze:#d29a4a`, emblem naturalWidth 150). Root cause unclear from outside;
   regardless, the prototype must reference book-relative paths (`../art/cover.svg`, `book.css`) so it tests the
   real wiring instead of dependiendo on server coincidence. SEVERITY: major (prototype fidelity). FIX: switch to
   relative URLs; re-screenshot cover+reader to confirm identical rendering.
3. **ISSUE: `design/` contains a `data -> ../data` symlink the build will copy verbatim.**
   WHERE: `books/twilight-of-the-idols/design/data`. EVIDENCE: computed directory listing. SEVERITY: minor
   (works locally, but the §11 build copies `design/**` — a symlink inside the artifact may 404 or duplicate on
   Pages). FIX: remove the symlink; prototype should resolve data via the book page's own `data/` path. Confirm
   with ReaderLead/Main whether symlinks survive their deploy step; simplest is to delete it.

## Notes (not defects, for the record)

- Cover emblem `<img>` has meaningful `alt` ("Struck idol-disc") while the contract wants decorative slots
  `aria-hidden`; prototype predates the v1 landing — align to §3 when wiring `#cover-art` (aria-hidden + no alt,
  or figcaption path if the caption becomes real content).
- `book.css` TOC selectors (`#toc-list .toc-num` etc.) are unqualified by `body[data-book]`; harmless today
  (single-book page) but the contract's §8 scoping guidance suggests qualifying book rules that touch shared
  selectors. Optional.
- Chapters p1c10 (11,939 words, longest) and p1c5/p1c12 (short, poster-like) were NOT in this prototype round —
  required in R2 per the book's own opener plan (mid-chapter raid markers; airy openers).
- No cohort emblem SVGs exist yet (`art/` holds only cover.svg); the per-chapter strike-point system is
  undesigned-until-proven. R2 must include ≥1 cohort emblem rendered in a real opener at all three widths.

## R2 requirements

Fix items 1–3, wire emblems via `design/chapters.json` + `#chapter-art` once ReaderLead lands v1, then show:
p1c1 (Foreword), p1c5 (Fable, short), p1c10 (Raids, long), p1c12 (Hammer Speaks) at 1440×1000 / 820×1180 / 390×844.
