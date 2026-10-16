# Home entrance — critique (ArtDirector)

Doc: `.omp/design/home/ART-DIRECTION.md` (HomeEngineer).
Baseline: captures #1–2 (13 identical cards, cramped pill rail, centered
eyebrow/headline/rule stack). Counts in the doc verified real against
`catalog.json` (2.48M words, 942 chapters — recomputed, match).

## Verdict: PASS WITH BINDING CONDITIONS

Direction 3, "The Night Gallery," is the right choice, well argued: the
rejections of 1 (spine-out hides titles, one furniture metaphor for 13
different books) and 2 (type-only dodges the "more art" ask) are honest
and specific. The title-swap test is correctly applied. Proceed to the
rendered prototype; final approval is judged from screenshots.

## What works (protect these)

- Chrome recedes / plates carry color; fixed jacket palettes across
  themes (Vellum with dark plates will be elegant if contrast holds).
- One featured volume as an editorial spread; affinity shelves;
  left-aligned masthead replacing the centered triple-device stack.
- Spacious "Reading light" menu replacing the rejected rail, with real
  keyboard behavior specified.
- Real catalog facts, progress keys and theme keys untouched.

## Binding conditions

- **H1 — Plates must read as 13 gallery works, not 13 icons.** Each plate
  needs its own composition and a named medium note (engraving, woodcut,
  diagram, mural…); portrait 4:5 at ~340–380px; no text in art; grain
  only where the medium earns it. Prototype review compares all 13 side
  by side: any two that read as palette-swaps fail.
- **H2 — Plates conform to approved book identities.** The plate concepts
  were written before book systems landed. Where a book identity is
  approved, the home plate MUST rhyme with it, never invent a competing
  one: Churchill's plate becomes a facet-plate (not searchlights); WtP a
  gouge ring/hammer; Gay Science the sun mural; Twilight the struck disc.
  For books without approved identities yet, plates are provisional and
  get revisited once their systems land. Coordinate motifs with each
  supervisor; record conformance per plate.
- **H3 — Featured spread.** Rotation = most recently opened else Atlas;
  never stale, never empty-state awkwardness; responsive stacking keeps
  plate ≥200px on phones.
- **H4 — Theme menu.** All 9 options screenshot-verified to visibly
  re-theme the page; plates constant; text contrast re-verified on
  Vellum (dark plates on paper + Bone-ink text blocks must not wash out).
- **H5 — Masthead copy.** Keep counts computed from the catalog; the doc's
  shelf paragraph still contains a struck-through self-question ("pairs
  into Philosophy? No — …") — delete it and record the final shelves:
  Novels of ideas (3), Philosophy (Nietzsche 5 + Being and Time),
  Portraits & polemics (4).
- **H6 — Prototype review.** Screenshots at 1440×1000 / 820×1180 /
  390×844 plus section views (masthead, featured, one shelf, footer);
  shelf chips keyboard-operable; search/sort/persist/`/`/empty-state all
  exercised; reduced motion cuts the stagger instantly.

## Cross-book note

Home takes Fraunces for chrome display. That makes Fraunces the library's
voice — book teams using Fraunces must differentiate via axes, weight,
scale, and composition (see shared registry §4). Prototype review checks
home↔book confusion explicitly.

## Prototype review (2026-10-15) — REVISE

Rendered page inspected at :8123: desktop Ink (masthead + featured +
Novels/Philosophy/Portraits shelves + footer + Reading-light menu open),
phone 390×844 (masthead + featured, no overflow), all 13 plates viewed
individually at 600×800. Fonts confirmed computed (Fraunces display,
DM Sans body). Verdict: REVISE — the gallery hangs together beautifully
as a page, but three plates fail H2 conformance or draftsmanship, one
plate carries baked-in text against the spec, and the theme menu has a
state bug. All repairs are bounded; no rethink required.

### What clears the bar

- Page composition: left-aligned masthead, featured spread, shelf bands
  with count chips, toolbar, colophon footer — coherent, calm, browsable.
  Genuinely gallery-like; nothing reads SaaS-generic anymore.
- Strong plates: Gay Science (joyful mural), Twilight (hammer strike),
  WtP (fissure), Atlas (turbine + rails), IJ (court diagram), Sovereign
  (globe + nodes), Gentle Intro (arches + candle). These seven could
  ship today.
- Phone: stacks cleanly, plates ≥200px, zero horizontal overflow,
  toolbar wraps, menu button survives.
- Theme menu: spacious rows with moods, proper menu behavior; Vellum
  re-theme verified visually (dark plates float on paper as designed).

### Required repairs (re-inspection after fix)

- **HR1 — Churchill plate violates H2: redraw as facet-plate.**
  Searchlights-over-rooftops invents a competing identity after
  "Forty Facets" was approved. Replace with interlocking ochre/
  vermilion/slate shards around a void (mid-scatter, portrait 4:5),
  redrawn in the home-plate hand. Coordinate shard vocabulary with
  SupChurchill-2; record conformance.
- **HR2 — Zarathustra plate is the weakest drawing: redraw.** Current
  render reads as sunset clip-art (flat disc + triangle pines +
  floating birds). Redraw with engraved-line ambition worthy of the
  book: rayed disc + serpent-ring Roundel presence, layered ridge
  hatching, real draftsmanship. It hangs beside six strong siblings;
  it must match them.
- **HR3 — Fountainhead plate under-drawn: strengthen.** One diagonal
  line + small tower + grid is thin next to the mural-density of its
  neighbors. Give it the cantilever elevation treatment (structural
  beams, granite mass, an unbroken rising line WITH the tower, not
  beside it) in steel-blue on charcoal.
- **HR4 — IJ plate: remove baked-in text.** "E.T.A. vs. THE
  ENTERTAINMENT — DEUCE" is typeset text inside the artwork, against
  the spec's "no text in art" rule (and it duplicates the HTML title
  below). Replace the scoreboard band with a purely graphic device
  (net-cord strip, ball-seam curve, or phosphor tally ticks).
- **HR5 — Reading-light menu state bug.** With Vellum selected the
  button label reads "READING LIGHT Vellum Vellum" (name doubled);
  menu rows show full names correctly. Fix the button label (one name),
  and verify all 9 options each visibly re-theme (engineer evidence
  claims all painted — spot-check Verdant + Oxblood text contrast on
  the featured spread, where gold-on-green risks wash).
- **HR6 — BGE plate: earn the marble.** The column reads clearly;
  the lightning bolt's uniform width + hard kinks feels vector-default.
  Taper the bolt, add one branch fork, and let the fracture lines in
  the column echo the bolt's angle — small draftsmanship pass.
- **HR7 — Featured-spread staleness rule.** Rotation (most-recently-
  opened else Atlas) must be verified with an empty-state and a mid-
  book state; record both screenshots. Never show a stale or empty
  featured block.

Re-inspection scope: HR1–HR4 plates re-viewed individually + in situ;
HR5 menu behavior + two theme contrast spot-checks; HR6 bolt detail.
Then final PASS.

### H2 conformance redraws (2026-10-15) — 2 PASS, 1 PASS-with-repair, 1 REVISE

- Churchill facet-plate: PASS (HR1 closed).
- Twilight struck disc: PASS.
- Gay Science sun mural: PASS with repair — sun-face smile too
  mascot-cute; redraw sterner/flatter (Tarot impassive).
- Will to Power ring+hammer: REVISE — baked-in text (§/NB.
  numerals violate the no-text-in-art rule; use graphic ticks);
  hammer reads as a log (needs forged head + haft separation).
  Match-flame conforms.
- Still open: HR5 (menu label + theme contrast), HR6 (BGE bolt),
  HR7 (featured states), Zara redraw (HR2), Fountainhead strengthen
  (HR3), IJ text removal (HR4).

### Final re-inspection (2026-10-15) — CONDITIONAL PASS

Re-viewed all 9 repaired/conformed plates individually (Zara
staff-head, Fountainhead furnace, IJ seal grid, BGE ledger, WtP
ring+hammer, Sovereign SPECIE, B&T slit-to-clearing, Open Letter
dissolving facade, Gentle Intro west front) + live page + HR7
states. Zero `<text>` in plates verified by grep. HR7 states both
correct (Atlas fallback / GS mid-read with progress). The shelf now
rhymes with 12 approved book identities; Atlas stays provisional.

CONDITIONAL PASS — two minor items, no re-review needed (engineer
confirms in yield):
- **HF1 — Menu accessible name still doubles.** Live probe reads
  "READING LIGHT Ink Ink" (visual label shows one name). The visual
  fix is accepted, but the accessible name must expose ONE name —
  fix the aria labelling (hidden duplicate), don't re-verify visually.
- **HF2 — Contact sheet missing.** Cited as a re-inspection view but
  `assets/library/covers/contact-sheet.html` does not exist. Either
  ship it or stop citing it.

Micro-notes (optional, no gate): IJ seal grid is the densest plate on
the shelf — at card scale the 9 medallions read busy; acceptable, but
watch card-size legibility if the grid gets reused smaller. GS featured
state shows the dance ring BELOW the sea bands (feet in water) — the
plate reads better full-size; acceptable in situ.

Home entrance work is DONE on the art-director side. Atlas plate gets
revisited when THE SIGNAL lands (told: provisional).
