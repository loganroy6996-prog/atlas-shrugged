# The Fountainhead — three identity directions (comparison for critique)

Prototype (viewed in Eval browser, desktop 1440×1000, live-source server):
`books/the-fountainhead/design/prototype.html` → http://127.0.0.1:8137/books/the-fountainhead/design/prototype.html
Sections #dir-a / #dir-b / #dir-c. All display/body fonts verified loadable via
Google Fonts CSS API on 2026-10-15 (Oswald, Source Serif 4, Cinzel, Spectral,
Jost, Libre Franklin, IBM Plex Mono, Bebas Neue, Zilla Slab, Archivo variable).

Book facts grounding all three: 59 chapters, 4 parts named for men
(Keating/Toohey/Wynand/Roark), bare roman-numeral chapter titles ("Chapter I"…),
so chapter openers must carry identity. Key images from the prose I read
(p1c1, p2c1, p3c1, p4c1, p4c19, p4c20 + 10 openers/closers): the granite cliff
and orange-rind hair (p1c1), the drill in the quarry (p2c1), the gun and the
glass-cage penthouse (p3c1), the spring forest and the Wynand commission call
(p4c1), Cortlandt dynamited and rebuilt (p4c19), the Wynand Building skeleton
and the ocean/sky/Roark triptych (p4c20). Baseline defect to fix: opener art
must sit in the meta→text zone, never push text down (long dark scroll gap).

## Direction A — THE FURNACE (quarry fire × orange rind)
Medium: flat gouache-poster SVG — heat-gradient slabs, furnace-bar horizontals,
radial hearth-glow; part marks are structural glyphs (pilasters / twin arches /
setback ziggurat / single cantilever) drawn in cooling bronze → white-hot steel.
Display: Oswald 700 condensed caps (choice: Roark's "long straight lines and
angles, each curve broken into planes"); body Source Serif 4; data IBM Plex Mono.
Palette (dark-first): Hearth `#100C0A`, Bone `#F6EAD6`, Furnace `#E4572E`,
Bronze `#C8A06A`, Ash `#7A6A58`, Emberlight `#FFD9A0`.
Openers: giant outlined roman numeral (stroke-only) beside Oswald chapter head,
ember drop-cap. Signature: heat as moral thermometer — Roark chapters run
hottest, Keating lukewarm bronze.
Risk: orange-on-near-black needs contrast policing at small sizes; heat metaphor
could feel horror-adjacent if oversaturated.

## Direction B — THE DRILL (the Wynand papers, night edition)
Medium: editorial-broadsheet SVG — the book as four newspaper sections
(Society / Opinion "One Small Voice" / Front Page banner / the one Blueprint
that will not be redrawn); masthead cover, column rules, pull-quote asides.
Display: Cinzel 900 roman-inscription caps (choice: Wynand's empire carved in
stone; the Banner as monument); body Spectral; data IBM Plex Mono.
Palette: Pressroom `#0D1116`, Newspulp `#F2ECDD`, Gilt `#D8B36A`,
Editorial `#8FA0B3`, Rule `#2B3542`, Redpencil `#8A3B2E` (Toohey's column only).
Openers: section flag ("Front page § III") + Cinzel head + marginal pull-quote
from the chapter's own stakes. Signature: every part is a section of the same
paper Roark refuses to be printed in.
Risk: Cinzel is wide — long "Chapter XVIII" heads need scale clamp; the conceit
leans on Wynand/Toohey (press) more than Roark (stone).

## Direction C — SURVEY (drawing set FH-1943)
Medium: surveyor's-drawing SVG — datum lines, dimension strings with arrows,
hatching, title block ("Drawn A. Rand · Checked F. O'Connor · Issued for
reading"); cover is an elevation: CLIFF → QUARRY → TOWER with blast point.
Display: Jost 600 geometric sans (choice: drafting-room grotesque, Futura's
open cousin); body Libre Franklin; data IBM Plex Mono.
Palette: Vellum-night `#101418`, Ink `#E8E4DA`, Survey-green `#7FB08A`,
Lead `#9AA4AE`, Grid `#3A444E`, Blast `#E4572E` (single red pin per sheet).
Openers: FIG. tag + detail callout ("Detail R — the cantilever: 76'-0" clear").
Signature: the novel as a set of issued construction drawings; each chapter a
detail that must hold.
Risk: closest in spirit to the rejected blueprint-lattice baseline (mitigation:
no lattice fills — only dimension lines, hatching, and title blocks; green not
blue); precision could read cold against the novel's heat.

## Comparison
| axis | A Furnace | B Drill | C Survey |
|---|---|---|---|
| emotional register | heat, will, violence | power, publicity, irony | precision, integrity, craft |
| literary anchor | quarry/cliff/Roark's hair | Banner/Toohey's column/trial | drawings/Cortlandt/Wynand Bldg |
| display voice | condensed industrial caps | roman inscriptional | geometric drafting sans |
| body voice | Source Serif 4 | Spectral | Libre Franklin (sans) |
| part system | structural glyphs | newspaper sections | detail callouts |
| cover image | furnace-bar tower | masthead | cliff→quarry→tower elevation |
| break from baseline | total (heat vs steel-blue) | total (editorial vs lattice) | partial (drafting, but green/line, no lattice) |
| a11y outlook | good if ember sized up | best (high-contrast pulp) | good (thin lines decorative only) |

## Designer recommendation
**A (Furnace) as lead, with C's dimension-line grammar borrowed for chapter
variation** (each chapter opener gets a "survey string" — part mark + roman
numeral + word-count chainage like `STA 12+450`). Rationale: the novel's
implacable images are heat and stone (quarry drill, dynamite, orange hair,
molten granite), not paper; A is the only direction that could not be mistaken
for another book; B's newspaper conceit is brilliant for Parts 2–3 but
decorates Roark's triumph in his enemy's medium. C is the safe second choice.

Questions for ArtDirector: (1) Does A's heat metaphor risk horror-noir
misread at full saturation — should the final palette cool the Hearth toward
umber? (2) Is borrowing C's survey strings into A a strong synthesis or a
muddle — one grammar or two? (3) B's Cinzel: keep for Wynand-part display even
if A wins globally (part-level display swap), or is mixed display type across
parts a coherence violation?


## ArtDirector critique log (2026-10-15, `.omp/design/critiques/the-fountainhead.md`)
Verdict: **DIRECTION A ("THE FURNACE") APPROVED with binding conditions.**
1. Heat/horror risk: YES, cool Hearth toward umber (~`#17100B`); reserve
   full-saturation Furnace for Roark climaxes; legible moral thermometer
   Keating bronze → Toohey dimmed ember → Wynand gilt-heat → Roark white-hot.
2. A+C synthesis: ONE grammar — survey chainage welcome as a mono data line
   inside Furnace openers; dimension-line drawings stay out.
3. Cinzel for Wynand display: NO (coherence violation; Cinzel is Twilight's).
   Wynand monumentality via gilt-heat shift + larger numerals + ziggurat mark.
Binding: F1 heat-contrast policing (Ember graphics/large-display only) ·
F2 architectural part marks, not icons · F3 stroke-only giant numerals,
occludable, never badges · F4 opener art in meta→text zone, no scroll gap ·
F5 p4c20 designed white-hot ending · F6 Oswald exclusive to Fountainhead.
All conditions incorporated into ART-DIRECTION.md final (§1 status, §3, §8–§9).
## ArtDirector addendum log (2026-10-15, same critique file)
F7 heat-arc numerals (index fractions banned) · F8 authored bar compositions
(odd/even parity banned) · F9 Ember small-kicker metering · F10 diamond
font support + p4c20 triptych approved in Furnace means. Folded into
ART-DIRECTION.md final (§3, §4, §9, §11–§12) and CHAPTERS.md (authored
heat-arc fills + bar vocabulary + why-column + p2c7 COLD per A2); supervisor
amendments A1–A2 integrated into the spec body rather than appended.