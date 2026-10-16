# Prototype Review R1 — The Gay Science (NOON) — REVISE (grammar strong; fidelity gaps)

Reviewer: FinalValidator. Date: 2026-10-15. Prototype: `books/gay-science/design/prototype/gs-prototype.html`
(static grammar proof: cover + Preface + rhyme §13 + §125 + §342 + §343 + Appendix + §275 seal; real
chapter text, truncated with […] for long chapters). ART-DIRECTION.md APPROVED (ArtDirector G1–G6).
Rendered via :38903. Screenshots (viewed, this dir): cover-1440/820/390, ch0–ch6-1440, madman-820/390.

## Verdict: REVISE — no taste rejection; 4 fixes before cohort expansion

The NOON system is the most ambitious grammar yet reviewed: one long day from glow-before-dawn to red
sunset, altitude×weather×weight treatments, scale-sensitive aphorism marks (the 17-word §275 earns a
26px sun-spark, not an opener — exactly proportional). Title-swap: pass (dancing noon-sun mural is
nonsense on BGE; the Zarathustra collision is honestly disclosed and divided by register). Contrast
(observed, dark): body 13.82:1, title 13.82:1, kicker 8.91:1 — pass. Fonts verified loaded
(Fraunces WONK/SOFT + Source Serif 4, observed `document.fonts.check` true + computed variation settings).
Cover holds at all three widths; day-cycle reads dawn→zenith→sunset across the sections (G1 holds).

## Required fixes

1. **ISSUE: static grammar proof, not the reader — the shipped integration is unproven on the hardest book.**
   WHERE: prototype has no `reader.js`, no TOC drawer, no settings, no `#chapter-art` manifest fill, no
   448-entry TOC behavior. EVIDENCE: observed — single scrolling page with `.chapter` sections. SEVERITY:
   major (process; same structural note as Fountainhead R1-1). FIX: R2 must wire ONE real part end-to-end
   (suggest Book Three: §125 landmark + neighbors at all three widths) through the real book page +
   `design/chapters.json` + sprite `symbol` fill + real TOC, proving: opener art left-half composition
   (supervisor's own repair #1), sprite `<g>` inlining renders shared defs correctly in the slot,
   the 448-row TOC is usable (filter + scroll), and settings/prefs don't break the mural. No expansion
   to all cohorts before this.
2. **ISSUE: drop-cap renders on the fragment NUMBER ("1" of "125."), producing "1 25. The madman."**
   WHERE: `.chapter-text>p:first-of-type::first-letter` on §125 (viewed madman-1440/820/390).
   EVIDENCE: giant gold "1" followed by "25. The madman. – Haven't you heard…" — the numeral is
   beheaded. (Supervisor already flagged "drop-cap numerals" as repair #3 to their designer — this
   confirms it from the independent side.) SEVERITY: major (every numbered fragment in the book —
   hundreds — would misrender). FIX: suppress `::first-letter` drop-caps on paragraphs beginning with
   a fragment number (reader already ships `.no-drop` logic for short/quote-led openers — extend the
   rule or add a fragment-number classifier; coordinate with ReaderLead rather than per-chapter CSS).
   Re-verify on §125 + a rhyme + a short aphorism.
3. **ISSUE: §342 opener art leaves the left half empty (dead panel beside the title column).**
   WHERE: ch3-1440.png (viewed): the Incipit tragoedia banner shows art only right-of-title with a
   flat empty left field. (Supervisor's repair #1 — confirmed.) SEVERITY: major. FIX: per supervisor's
   own direction — design cohort openers full-width so the repair carries through; re-show §342.
4. **ISSUE: inscription clipping on at least one opener (supervisor repair #2 — needs my confirmation).**
   WHERE: ch-sections at 1440 (I did not isolate which inscription clips; the supervisor's note stands).
   SEVERITY: minor. FIX: designer fixes + names the chapter; I confirm in R2 screenshots.

## Notes (not defects)

- Rhyme treatment (§13 For Dancers, viewed): vermilion italic centered title + wave-band opener + centered
  verse — distinct from prose fragments without kitsch. Good.
- Appendix sunset (viewed ch5): red disc + black sea + outlaw ship reads sunset against the dawn Preface —
  G1 arc holds across the page.
- Seal/spark marginalia (§275, viewed): proportional and quiet. The altitude×weather×weight grammar is the
  right answer for 448 fragments; do not let cohorts inflate small weights into openers.
- Fraunces registry: GS holds the wonkiest-most-joyful register (SOFT 100/WONK 1 observed) — no confusion
  with Churchill/WtP/BeingTime/Home voices in anything I viewed.
- `art/part-dividers.svg` 8/8 sprite ids verified present by the book team (computed claim — I will
  re-verify at final census when chapters.json lands; GS has no chapters.json yet).

## R2 requirements

Wired Book-Three slice (real page + manifest + sprite fill + real TOC) at all three widths showing §125
(drop-cap fix), §342 (full-width opener fix), one rhyme, one short aphorism; TOC drawer screenshot with
448 entries; settings open over a chapter; inscription-clip fix named + shown.
