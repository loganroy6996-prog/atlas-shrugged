# Thus Spoke Zarathustra — ART-DIRECTION (supervisor draft v0.1)

Owner: SupZarathustra-3. Status: **DONE — FinalValidator R3 CONDITIONAL PASS (2026-10-15 ~16:15 UTC).**
Shell PASS (ZaraShellValidator re-verify on :8099); R2's 3 items fixed + R3-verified; only 4 global shared items carried (not book defects).
Spec APPROVED by ArtDirector 2026-10-15; shell PASS by ZaraShellValidator (re-verify on :8099); FinalValidator R2 REVISE (1 blocking + 2 minor) fixed + rebuilt, R3 requested.
(verdict: `.omp/design/critiques/thus-spoke-zarathustra.md`; full approval at prototype
review). Body type SWITCHED to Spectral per verdict (Newsreader registry closed).
Binding conditions Z1–Z7 relayed to all cohorts.
Also locks the generator per READER-CONTRACT §10 (this file exists → never regenerated).
Book: Friedrich Nietzsche, *Thus Spoke Zarathustra*, 81 chapters, 4 parts.
Source TOC: `books/thus-spoke-zarathustra/data/toc.json` (p1c1–p1c23, p2c1–p2c22, p3c1–p3c16, p4c1–p4c20).
Identity spec: `books/thus-spoke-zarathustra/design/directions.md` (ZarathustraIdentity, three directions + binding buildable spec for A).

## Decision

**Direction A — THE SOLAR GOSPEL (sun-serpent liturgy) is adopted, pending director ruling.**
The book as a discovered gospel of a sun-cult: Persian antiquity, inscriptional
stone, recurrence rings. Master device is the book's own staff-head — "a staff,
upon the golden haft of which a serpent was coiled about a sun" (p1c23 §2, verified
against chapter JSON). Four parts are four watches of one solar day (dawn / night /
noon / midnight-into-morning); the Ring of Recurrence becomes four navigable Part Seals.

Why A wins (book-specific, not copy-paste): only A is drawn from this book's own
self-describing emblem and its verified dawn-to-morning arc (p1c1 dawn address →
p2c9 night songs → p4c10 golden ring → p4c19 midnight bell → p4c20 lion-and-doves
morning Sign). It serves all four literary forms the prose actually contains —
sermon, song, vision, parade/festival — with distinct opener grammars, and it is a
complete break from the rejected alpine-chevrons theme (liturgy vs. mountaineering).

Why B lost: *Avalanche Psalm* (alpine woodcut, the Rope) would read as a
better-executed version of the rejected failure — same mountain territory — and
its single blood-red discipline starves the songs, the midnight bell, and the
Ass Festival of needed range. The tightrope expires after p1c1 and must be
artificially prolonged through 80 chapters that are not about ropes.
Why C lost: *Masque of Gravity* (baroque carnival bestiary) fits Part IV's parade
ten times better than the great sermons (Law-Tables, Bestowing Virtue) and the
sky-hymns (Before Sunrise) — prophecy forced into carnival costume, with the
heaviest art load (~20 emblems) and the least reuse.
Inheritance: B donates the tightrope as Part I's secondary motif (Prologue scene +
Part I divider); C donates the bestiary as A's parable/parade emblem layer, redrawn
in A's engraved-line hand. Nothing of the rejected chevron/▲-glyph/mod-4 system survives.

Title-swap test: put *Mrs Dalloway* in this shell — the staff-head roundel, the
Moment gateway, the recurrence seals, the lion-and-doves finale, and the
dawn-to-morning arc are nonsense for it. The identity is Zarathustra's gospel or
it is nothing. Honestly: the inscriptional-Cinzel + seal grammar could also suit a
Roman stoic text (Meditations) — but the sun-serpent Roundel, solar-day part system,
and creature emblems are Zarathustra's alone.

## Tokens (dark Ink; supervisor maps paper equivalents for sepia/light)

`--z-night:#0A0E21` (abyssal lapis-black ground) · `--z-lapis:#1B2350` (lapis surface)
`--z-solar:#E8A93D` (sun gold accent) · `--z-ember:#C8502E` (Part IV dusk ember)
`--z-serpent:#7A8B5A` (bronze serpent-green) · `--z-bone:#F2E7CF` (bone vellum text)
Derived tints only via `color-mix()` (star-silver, white-gold, deepened night,
umber-lapis) — no new hues. Mapped onto frozen shared tokens (`--bg`, `--accent`,
etc.) per READER-CONTRACT §8, scoped per theme; all 8 themes covered.

## Type (voice)

- Display: **Cinzel** (Google Fonts, inscriptional caps) — cover title, chapter
  titles (book title-case, never forced uppercase; clamp + `text-wrap:balance`,
  ≤3 lines), part names, seal legends, TOC part headers. Free in registry.
  LITURGICAL use only per Z2 (never Twilight's bronze-tablet minimalism).
- Body: **Spectral** (Google Fonts, 400/500 + strong italics; Spectral SC for
  speech labels) — all prose; italic for the 12+ songs. Per director verdict
  2026-10-15 (Newsreader registry closed: Churchill approved, WtP provisional,
  IJ third). Fallback `Georgia,serif`.
- Chrome: shared **DM Sans**, unchanged.
- Loading: book-relative `@font-face` (`design/fonts/…`, WOFF2, `display=swap`) so
  the build ships fonts per contract §11; REQUIRED fallbacks Cinzel→`'Trajan Pro',serif`,
  Spectral→`Georgia,serif`. Supervisor verifies HTTP + computed-style load before
  prototype review. Z1 firewall: zero glow, zero text-shadow halos on Cinzel.

## Per-part grammar (solar phases; full rules in directions.md §§binding)

| Part | Phase | Seal | Accent lead | Song treatment | Closing mini-seal |
|---|---|---|---|---|---|
| I Dawn (p1c1–23) | sun cresting, rays east-weighted | Dawn-Ring | solar gold | n/a (no songs) | cresting sun |
| II Night (p2c1–22) | eclipsed disc, star points | Night-Ring | serpent + star-silver | fountain-crown stanzas, centered 28rem | eclipsed ring |
| III Noon (p3c1–16) | full blaze | Zenith-Ring | white-gold blaze | azure-bell crowns; seven seal-rounds (p3c16) | blazing disc |
| IV Ember→Morning (p4c1–20) | ember disc rekindling to gold | Sign-Ring | ember→gold (pivot at p4c10) | bell-crown (p4c19); festival double-rule (p4c18) | ember ring; lion-and-doves at p4c20 only |

Opener: Part Seal SVG → Cinzel part line → Cinzel title → ONE verbatim pull-line
(real prose, §-cited, chosen by cohort leads) → sun-rule. Sermons left tablet;
songs centered lyric (26–30rem); visions full-bleed authored scene; parade chapters
emblem row. Reading body calm: Newsreader 400/1.85, 36–40rem, bone-on-lapis, no
mid-text decoration. Progress = horizon line + traveling sun-dot with four
phase-dots at part boundaries. Reduced motion: static seals; any shimmer ≤0.05Hz
under `no-preference` only. Contrast: bone-on-lapis ≥10:1; gold text large-only.

FORBIDDEN (binding on all cohorts): CSS gradients as illustration; Unicode/emoji
glyphs as art; mod-N/hash tint cycling; tracked-out ALL-CAPS meta labels; identical
adjacent openers; any prose/shared/other-cohort edits.

## Reader-contract mapping (READER-CONTRACT v1.0)

- Hooks: `body[data-book][data-part-id][data-part][data-chapter][data-view][data-art]`;
  cohort CSS qualifies under `body[data-part="I|II|III|IV"]` / `body[data-chapter]`.
- Slots: `#cover-art` (roundel + ray-field) and `#chapter-art` (seal/scene/emblem)
  driven by declarative manifest; book-owned JS only if needed, via `reader:chapter`.
- Manifest: cohorts author `design/cohort-pN.json` (entries keyed by real ID: title,
  cohort, content rationale, palette role, motif/asset, opener composition, reading
  treatment + `src`/`class`/`motif`/`caption` per §4); supervisor merges sequentially
  into `design/chapters.json`. `motif` values set `body[data-art]`.
- Art files: `art/` namespaced per cohort (`art/pN-<name>.svg`) + supervisor-owned
  masters (`seal-*.svg`, cover roundel, shared rules). All original engraved-line SVG;
  flat metallic fills; hatching via paths; no stock, no remotes.
- PENDING (relayed to ReaderLead 2026-10-15): (a) v1 `reader.js` (slots, `data-art`,
  manifest fetch) not yet landed in `shared/reader.js` — engineers design against the
  contract with CSS-only fallback meanwhile; (b) chapter-end ornament has no slot —
  requesting either a `#chapter-end` element or a ruling that a
  `body[data-chapter]`-qualified `p:last-child::after` override carrying SVG
  `url()` content (authored art, not a glyph) is acceptable given book CSS is unlayered.

## Chapter-manifest plan (all 81 IDs; cohorts own disjoint files)

- P1 (part-1/I, p1c1–p1c23): ZaraLeadP1 → `art/cohort-p1.svg` + `art/p1-*.svg`,
  `design/cohort-p1.{json,css}`. Centerpieces: p1c1 vision-epic (3-beat scene),
  p1c23 farewell + staff emblem (part finale).
- P2 (part-2/II, p2c1–p2c22): ZaraLeadP2 → cohort-p2 files. Centerpieces: p2c9 Night
  Song (part centerpiece), p2c10/p2c11 songs, p2c22 vision-threshold (finale).
- P3 (part-3/III, p3c1–p3c16): ZaraLeadP3 → cohort-p3 files. Centerpieces: p3c2
  gateway Moment (book centerpiece), p3c12 Tablet sermon (longest; relief dividers
  every ~30§), p3c16 seven seal-rounds (finale).
- P4 (part-4/IV, p4c1–p4c20): ZaraLeadP4 → cohort-p4 files. Centerpieces: p4c10
  still-vision (part pivot, quietest opener), p4c18 festival, p4c19 midnight song
  (climax), p4c20 lion-and-doves tableau (book seal).
- Form map (§81, directions.md): sermon / song / vision / parable-emblem / parade /
  dialogue / finale per chapter. Entries marked [title-inference] MUST be verified
  against prose by cohort leads before art is cut (P2's four Part II corrections
  received as the model). Every pull-line verbatim with §/paragraph citation.
- Coverage ledger: `design/COVERAGE.md` (supervisor-maintained; created at first
  integration): per-ID manifest entry ✓, asset-exists ✓, activation ✓, visual-sample
  chapters/viewports listed explicitly. Never claim full visual review unless done.

## Prototype plan (Phase B; no expansion before director + independent PASS)

Cover (roundel + ray-field + inscription stack) + 6 openers spanning parts and hard
kinds: p1c1 (vision-epic), p2c9 (song centerpiece), p3c2 (vision centerpiece),
p3c12 (longest tablet + relief), p4c19 (midnight climax), p4c20 (finale tableau).
Screenshot at 1440×1000 / 820×1180 / 390×844 + section views; ArtDirector prototype
review + cohort-validator review; fix REVISE; then expand to all 81.
Note: spawn freeze in force (Main order) — cover/seal specialists spawn when the
freeze lifts; supervisor authors the prototype cover honestly-recorded if needed.

## References studied (designer; collection records + scholarship summaries)

1. Van de Velde deluxe *Zarathustra*, Insel 1908 — authored line + monumental title.
2. Blake's illuminated prophetic books (*Jerusalem*) — emblems fused with text block.
3. Shir-o-Khorshid Lion-and-Sun emblem — historical root of the solar-lion grammar.
4. Friedrich's *Wanderer* / *Morning in the Riesengebirge* — cover Rückenfigur grammar.
Lesson applied: identity lives in authored line + type, never in tinting.

## Open uncertainties (honest)

- ~54 chapters known to identity designer by title/position only; cohort prose
  verification outstanding (leads reading all texts in full — P2 done, others in flight).
- Newsreader body collision (ruling requested above).
- Cinzel long-title behavior at 390px (prototype check).
- v1 reader.js landing date + chapter-end slot ruling (asked ReaderLead).
- No rendered sketches yet — prototype is the next artifact; direction ruling
  requested on spec + wires now so cohort design can proceed without rework risk.
