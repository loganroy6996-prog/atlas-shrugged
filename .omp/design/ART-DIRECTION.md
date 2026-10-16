# Literary Library — Shared Art Direction

Owner: ArtDirector. Binding on all book teams and the home engineer; taste
rulings here can reject work (see §6). Read with `.omp/design/RELAUNCH.md`
and your book's file in `.omp/design/critiques/`.

Status: v2 published 2026-10-15 after inspecting the rendered baseline
(home + all 13 covers + 3 chapter readers + TOC drawer at 1440×1000,
evidence in `evidence/baseline.md`) and ruling on 11 direction
submissions. This is a living document: the font registry (§4) and review
log (§9) grow as directions land.

---

## 1. What the baseline actually is (observed, not assumed)

Every book ships the same DOM (`books/<slug>/index.html` is one template
with swapped strings) and the same composition:

- Cover: tracked-out eyebrow → two-line Cormorant title with italic accent
  second line → diamond rule → author dedication → tagline/quote →
  three buttons. Identical stacking, spacing logic, and reading order, 13×.
- Background: combinatorics on three hooks (`.cover-bg` / `.cover-grid` /
  `.cover-glow`) — `repeating-linear-gradient` rails, `radial-gradient`
  glows, `conic-gradient` fans, `color-mix` tints of two variables. Atlas
  has tower verticals, Fountainhead cantilever beams, IJ a court grid,
  Gay Science a sun-dot fan — different parameters, one medium.
- Type: Cormorant Garamond display + DM Sans UI on every surface, home
  included. No book has a typographic voice (verified computed styles).
- Chapter "art": content-blind CSS arithmetic — `nth-of-type(4n+N)` tint
  cycles on TOC numerals, drop-cap color rotations keyed to paragraph
  count, rotating end-glyphs (❦ ▲ ◆ ☀), per-chapter skew/opacity churn.
  Gay Science and Zarathustra are the heaviest modulo offenders.
- Reader: identical meta block (part / title / number badge / rule),
  identical measure, identical drop cap. Per-book voice stops at the cover.
- Home: 13 identical SaaS cards (tint variable + giant background
  initial + meta string) and a cramped pill theme rail.

## 2. Why it reads weak (the precise rejection reasons)

1. **Substitution failure.** Swap any two books' titles and accent
   variables and nothing feels wrong. The design carries no information
   about railroads, architecture, aphorisms, tennis, or war rooms.
2. **No authored image exists.** Zero SVG scenes, zero illustration, zero
   plate anywhere. Every visual is a CSS function's output. A function
   with different arguments is not a second idea.
3. **Decoration scales with nothing.** A 63-word epitaph (Churchill Way
   40), a 17-word seal (Gay Science p5c168), and a 37,525-word radio
   address (Atlas p3c7) all receive the same opener grammar.
4. **Chapter systems are arithmetic, not editorial.** Modulo tinting
   correlates with paragraph count, which correlates with nothing the
   author meant. It is noise shaped like design.
5. **Ambient motion, inert meaning.** Breathing glows and drifting grids
   animate nothing the reader did and explain nothing on screen.
6. **Craft signals absent.** No folios, colophons, part-title spreads,
   running heads with intent, or end marks that mean something. The
   library reads as generated because nothing on screen required a human
   decision about *this* book.

Repairing any one of these in isolation (a new accent, a nicer rule)
reproduces the rejection. The redesign must move all six.

## 3. Shared principles (the bar)

**P1 — Authored image per book.** Every book names an illustration medium
(hand-cut SVG plates, geometric compositions, engraved diagrams — never
"gradient + glyph") and shows it at a useful scale: cover art at least a
third of the viewport, opener art never below ~200px even on phones,
never `display:none` as a responsive strategy. Art is the identity; if it
can be hidden without loss, it was decoration.

**P2 — The title-swap test.** Replace the title with another book's. If
the page still feels plausible, the identity failed. Judged from rendered
screenshots, never from token names. Each direction doc must state,
honestly, which books its system would also suit — and why it fits this
one *best*.

**P3 — Three real directions.** Directions differ in medium, composition,
and type — not in hue, radius, or glow opacity. Each needs: a visible
sketch or prototype (screenshot, not adjectives), cited references
studied (not named), and a written rejection reason for the two losers
that could not be copy-pasted onto another book.

**P4 — Type is voice.** Every book chooses a display face and a body face
suited to its length and form, verifies the webfont actually loads (HTTP
+ computed-style check), and ships real fallbacks. Cormorant-by-default
is retired. See the registry (§4): crowded faces need justification.

**P5 — Chapter art is authored per content.** Every TOC id gets a manifest
entry: part, order, title, content kind, rationale, palette role,
motif/asset, opener composition, reading treatment. Part/cohort systems
carry the load at scale (81 Zarathustra speeches, 448 Gay Science
fragments); short forms get proportional marks, not giant heroes.
Modulo/hash/paragraph-count styling is banned *as art* — use it for
nothing the reader is asked to admire.

**P6 — The reading body stays calm.** Contrast ≥ 4.5:1 for body on the
composited background (measured, not token-promised), serif measure
≤ ~72 characters, no art behind prose, drop caps only where the content
warrants one, preferences persist, focus always visible. Display type may
shout; body text may not.

**P7 — Composition is designed per book.** Cover architecture, opener
grammar, TOC treatment, navigation, and endings are book decisions. No
shared center-stack shell with swapped paint. Neighboring chapters may
share a grammar; unrelated books may not share a layout.

**P8 — Dark-first, all themes working.** Identity must survive every
offered theme (or declare fixed jacket elements, like the home's cover
plates, that intentionally persist). Light/sepia themes get screenshot
verification, not assumptions. The previously rejected cramped theme
treatment stays dead.

**P9 — Motion answers action.** One orchestrated load moment per surface
at most; ambient loops are banned unless content-meaningful (a plotted
course completing, an idol cracking per chapter). `prefers-reduced-motion`
cuts everything instantly; content is always visible after one scroll pass.

**P10 — Evidence over claims.** Directions need rendered screenshots at
1440×1000 / 820×1180 / 390×844. Manifests need asset-exists and
activation checks per entry. Reports distinguish observed, computed,
sampled, and not-run — visibly reviewed means visibly reviewed.

**P11 — The homepage is the benchmark (USER-FEEDBACK.md).** The user
approved the new homepage's creative spirit and asked for that level of
beauty everywhere. Every rendered book prototype is judged side-by-side
with the homepage for comparable authorship, care, and specificity —
through EACH BOOK'S OWN identity, never by copying the homepage's look.
Entrances, openers, TOC, settings, navigation, notes, progress, and
endings must all feel designed; quiet reading earns beauty through
typography, spacing, marginal details, and coherent controls.

## 4. Font registry (living — check before choosing)

| Face | Taken by | Terms of coexistence |
| Newsreader (body) | Churchill, WtP, Infinite Jest (newsprint register) | CLOSED: no further grants. Zarathustra ruled to Spectral. |
| Spectral (body) | Zarathustra (lyric sermons/songs) | Open to one more text-face need by justification. |
| Source Serif 4 (body) | Sovereign, Fountainhead, Being&Time, BGE | Quiet text faces may repeat; book voice must come from elsewhere (instrument, plates, numerals). |
| IBM Plex Mono | WtP (small apparatus), IJ (display-scale document voice), BGE (ledger figures), Open Letter (folio data), Sovereign (microtext), Fountainhead (chainage) | CLOSED: no further grants. Holders separated by scale/role; IJ display-scale vs all others small-scale. |
| Cinzel (display) | Twilight (monumental bronze), Zarathustra (liturgical inscriptions) | Both hold by separation (monument vs liturgy); no third Cinzel. |
| Oswald (display) | Fountainhead (condensed industrial caps) | Seniority held; no other book may take condensed industrial caps. |
| Bodoni Moda (display) | Sovereign (engraved Didone) | Held. |
| Archivo Black (display) | Infinite Jest (bureaucratic shout) | Held. |
| Marcellus (display) | Gentle Introduction (inscriptional solemnity) | Held; large-only stone-cut caps. |
| EB Garamond (body) | Open Letter (reading prose) | Held. |
| Cormorant Garamond | Retired as the default; Twilight reclaims body by argued exception | Any further reclamation needs a written argument + prototype proof. |
| DM Sans | Shared UI/chrome voice | Books may keep it for chrome; display and body prose should be book-chosen. |

## 5. Direction submission contract (what earns a PASS)

Send the art director a file path containing: the three directions with
sketches/prototypes, references actually studied (links + lessons), the
chosen system's tokens (named hex), typefaces with load verification,
part-level variation logic, the chapter-manifest plan keyed by real TOC
id, a prototype plan naming cover + the 3–8 openers spanning parts and
hard content kinds, and a title-swap statement. I return PASS (possibly
with binding conditions), REVISE (concrete repairs, resubmit), or REJECT
(start over — reserved for same-shell repaints and modulo art).

## 6. Prototype review contract (judged from rendered pages only)

Build cover + representative openers before expanding to all chapters.
I inspect real screenshots at three viewports plus section views, and
return PASS / REVISE / REJECT with concrete repairs. Automatic REVISE or
REJECT: token-only changes; the old shell with new paint; any
modulo/hash chapter styling presented as art; body text below contrast or
measure; art hidden on phones; cross-book confusion with an approved
sibling; unlicensed hotlinked imagery. REVISE findings must be fixed and
re-inspected before cohort expansion.

## 7. Reading-quality floor (non-negotiable, shared with ReaderLead)

READER-CONTRACT v1.0 is STABLE (all four requested art hooks confirmed
landed: data attributes, `#chapter-art` + `#cover-art` slots, unlayered
book CSS winning over `@layer shared`). Book teams: design against the
contract text with CSS-only fallbacks until the shared implementation
lands; never work around text questions by editing prose — style chapters
as served and route text issues via your supervisor. IJ chapter IDs are
provisional until the text curator's freeze: record part + order + full
title in every manifest entry so IDs can remap cheaply.

## 8. Reference notes (study, don't copy)

- Standard Ebooks (standardebooks.org, screenshotted 2026-10-15):
  craft is signalled by production transparency (colophon, provenance,
  "carefully produced"), browsable human shelves, and superb long-form
  setting (League Spartan display + Crimson Pro text). Lesson for us:
  SEMANTIC craft details (real folios, honest meta, production notes)
  beat ornamental ones.
- Folio Society (foliosociety.com, screenshotted 2026-10-15): each title
  gets a commissioned illustrator's full voice, yet the shelf coheres
  through format discipline. Lesson for us: the home shelf should read as
  one gallery of thirteen different artists — coherence from hang and
  spacing, difference from the plates. This directly supports the Night
  Gallery direction and the per-book medium requirement.

## 9. Review log

- 2026-10-15 — Home "Night Gallery" (Direction 3): PASS WITH BINDING
  CONDITIONS (H1–H6). See `critiques/home.md`.
- 2026-10-15 — Churchill "Forty Facets": PASS WITH BINDING CONDITIONS
  (C1–C9 + typo/title corrections). See
  `critiques/forty-ways-to-look-at-churchill.md`.
- 2026-10-15 — Will to Power "Black Notebook": PROVISIONAL PASS
  (W1–W6 + 3 answers). See `critiques/will-to-power.md`.
- 2026-10-15 — Gay Science "NOON": DIRECTION APPROVED (G1–G6 + 3
  answers). See `critiques/gay-science.md`.
- 2026-10-15 — Twilight "Struck Bronze": PROVISIONAL PASS (T1–T6 + 2
  answers). See `critiques/twilight-of-the-idols.md`.
- 2026-10-15 — Sovereign "SPECIE": PASS WITH BINDING CONDITIONS
  (S1–S8). See `critiques/sovereign-individual.md`.
- 2026-10-15 — Being and Time "The Clearing": PROVISIONAL PASS
  (B1–B8 + 2 corrections). See `critiques/being-and-time.md`.
- 2026-10-15 — Fountainhead "THE FURNACE": DIRECTION APPROVED
  (F1–F10 + 3 answers + draft addendum). See
  `critiques/the-fountainhead.md`.
- 2026-10-15 — Zarathustra "THE SOLAR GOSPEL": DIRECTION APPROVED
  (Z1–Z7 + Newsreader→Spectral ruling). See
  `critiques/thus-spoke-zarathustra.md`.
- 2026-10-15 — Infinite Jest "Subsidized Time Ledger": DIRECTION
  APPROVED (J1–J8 + Newsreader/Plex Mono grants). See
  `critiques/infinite-jest.md`.
- 2026-10-15 — Beyond Good and Evil "The Numbered Ledger": DIRECTION
  APPROVED (E1–E7). See `critiques/beyond-good-and-evil.md`.
- 2026-10-15 — Open Letter "Black-Letter Broadsheet": DIRECTION
  APPROVED (O1–O6 + 3 answers). See `critiques/open-letter.md`.
- 2026-10-15 — Atlas Shrugged: baseline brief issued (A0–A3);
  directions awaited. See `critiques/atlas-shrugged.md`.
- 2026-10-15 — Gentle Introduction "THE CONTEMPLATIVE CATHEDRAL":
  DIRECTION APPROVED (GI1–GI7). See `critiques/gentle-introduction.md`.
- 2026-10-15 — Home prototype (Night Gallery rendered at :8123):
  REVISE (HR1–HR7). See `critiques/home.md`. Re-inspection pending.
