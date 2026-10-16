# Prototype Review R1 — The Fountainhead — REVISE (direction sketches + art assets)

Reviewer: FinalValidator. Date: 2026-10-15. Materials: `design/prototype.html` (3 direction sketches),
`design/ART-DIRECTION.md` (FINAL, Direction A THE FURNACE, ArtDirector-approved with F1–F6),
`art/cover.svg`, `art/motifs.svg`. Rendered via workspace server :38903; sketches viewed at 1440px
(`sketch-dir-a/b/c-1440.png` in this directory); both SVGs viewed as rendered images.

## Verdict: REVISE — direction choice sound; prototype-fidelity + asset gaps before expansion

Direction A (FURNACE) is the right pick and ArtDirector's approval is well-founded: heat-as-moral-thermometer
across the four men is book-specific (title-swap: pass — Keating pilasters / Toohey arches / Wynand ziggurat /
Roark cantilever belong to nobody else's novel), Oswald's "long straight lines broken into planes" literalizes
the book's own description of Roark, and the chainage data line gives bare-roman-numeral chapters real identity.
Direction B (DRILL/newspaper) is handsome but risks the broadsheet default the design skill warns against, and it
centers Wynand's press over Roark's architecture; Direction C (SURVEY/blueprint) is elegant but its dimension-line
grammar would fight calm body text at chapter scale — correct rejections. The cover tower (viewed) is a strong
gouache plate: furnace bars, heat gradient, hearth glow, disciplined palette.

## Required fixes

1. **ISSUE: sketches are mock compositions, not the reader — no opinion yet possible on the actual reading experience.**
   WHERE: `prototype.html` renders static `.dir-*` sections, not `index.html` + `reader.js` + `theme.css`.
   EVIDENCE: observed — no TOC drawer, settings, header, progress, or real chapter text in the prototype.
   SEVERITY: major (process, not taste). FIX: next round must be a wired prototype like Twilight's — real book
   page + book.css + `#chapter-art` manifest fill (or book-owned JS) + real chapter JSON — showing a Keating
   opener, a Roark opener, and the p4c20 finale composition at all three widths. Static sketches cannot validate
   F4 (first body line visible without scroll) or the F1 contrast law in situ.
2. **ISSUE: part-mark slices read as clip-art glyphs at 800×140, below the spec's own "structural elevations" bar.**
   WHERE: `art/motifs.svg` (viewed). EVIDENCE: pilasters are 5 plain verticals + 2 horizontals with no fluting,
   base, or capital; arches are 2 semicircles on a line with dot springing; ziggurat is 4 stacked bars; cantilever
   is an L with a red top edge. The ART-DIRECTION §8 itself demands "fluted shafts, arch springing, setback
   stepping, cantilever bearing — clip-art glyphs fail review." SEVERITY: major. FIX: redraw each mark as a small
   structural elevation (flute lines, arch voussoirs/springing detail, setback shadow steps, cantilever bearing +
   stress taper) while keeping the flat-gouache medium; re-view at opener size (~120–200px) AND at TOC size
   (~24px) to confirm both scales. The cover tower proves the illustrator can do this — the marks need the same care.
3. **ISSUE: 9.4px Plex Mono part-rationale captions in the sketch will not survive real text sizes.**
   WHERE: sketch dir-a `.part p` (0.78rem mono, observed tiny gray captions under part marks).
   EVIDENCE: viewed — captions are decorative micro-text at desktop, unreadable at phone widths. SEVERITY: minor
   (sketch-only; do not carry this pattern into the TOC). FIX: TOC part subtitles in Bronze at ≥0.85rem with the
   part mark as the small element, not the text. Note for the engineer; verify in the wired round.
4. **ISSUE: `design/chapters.json` + cohort banner SVGs + fonts do not exist yet; manifest merge path untested.**
   WHERE: `art/` holds only cover.svg + motifs.svg; no `design/chapters.json`. EVIDENCE: computed file listing.
   SEVERITY: major (coverage risk on a 59-chapter book). FIX: author at least the p1 + p4 banner slabs, the two
   finale plates, and a merged `design/chapters.json` covering all 59 IDs (motif per §8, chainage FIG callouts
   verified against prose per §6) before claiming the system scales. FIG callouts like "FIG CORTLANDT" must be
   verified against actual chapter text — record the verification (grep line or quote) per callout; invented
   callouts fail final review.

## Notes

- F1 contrast law (Ember 3.5:1 → large display only) is correctly stated; final review will meter every opener's
  title treatment against composited backgrounds per INTEGRATION-REVIEW A2.
- F4 acceptance (first body line visible without scroll at 1440×1000) is the right bar; it is untestable until
  the wired prototype exists — do not expand to all cohorts before proving it on p1c1 + p4c1.
- The finale triptych (F5) is approved in principle; it must be *viewed* before expansion, not described.
- No `data` symlink or hardcoded-origin issues found in Fountainhead materials (contrast Twilight R1 items 2–3).

## R2 requirements

Wired prototype (real reader + manifest fill) showing p1c1 (Keating), p2c1 (Toohey), p3c1 (Wynand),
p4c1 + p4c19 + p4c20 (Roark + finale) at 1440×1000 / 820×1180 / 390×844, with redrawn part marks,
merged chapters.json, and FIG-callout verification notes.
