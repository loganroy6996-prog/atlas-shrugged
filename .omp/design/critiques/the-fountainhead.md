# The Fountainhead — critique (ArtDirector)

Spec: `books/the-fountainhead/design/DIRECTIONS.md` + `prototype.html`
(#dir-a/#dir-b/#dir-c, designer-viewed at :8137; my own rendered
inspection runs at prototype review).
Baseline: capture #5 (cantilever + blueprint lattice, centered shell).
Grounding verified real: p1c1/p2c1/p3c1/p4c1/p4c19/p4c20 + 10
openers/closers read; bare roman-numeral titles correctly identified as
the reason openers must carry identity.

## Verdict: DIRECTION A ("THE FURNACE") APPROVED, with binding conditions

Lead with A. The rationale is decisive: the novel's implacable images
are heat and stone (quarry drill, dynamite, orange hair, molten granite),
and A is the only direction that could not be mistaken for another book.
B's newspaper conceit is brilliant for Parts 2–3 but would decorate
Roark's triumph in his enemy's medium; C is handsome but closest to the
rejected lattice and cold against the novel's heat. Proceed to
ART-DIRECTION.md + rendered prototype; I inspect all three prototype
sections myself at prototype review.

## The three questions, answered

1. **Heat → horror-noir risk: real, and YES, cool the Hearth toward
   umber.** Hearth #100C0A + Furnace #E4572E at full saturation will read
   infernal rather than moral. Move Hearth toward a brown-umber
   (#17100B-ish) and reserve full-saturation Furnace for Roark-part
   climaxes; Keating lukewarm bronze is already the right instinct —
   extend the gradient: Keating bronze → Toohey dimmed ember → Wynand
   gilt-heat → Roark white-hot. The moral thermometer must be legible
   across parts, not just hot everywhere.
2. **A+C synthesis: ONE grammar, borrowed details.** The survey strings
   (`STA 12+450` chainage, part mark + numeral + word-count) are welcome
   INSIDE Furnace openers as a mono data line (Plex Mono already in the
   stack) — but dimension-line DRAWINGS (datum lines, hatching, title
   blocks) stay out. If a reader can point at an element and ask "is
   this the furnace book or the drawing book," the synthesis failed.
3. **Cinzel for Wynand-part display: NO — coherence violation.** Mixed
   display faces across parts reads as four books, not one novel with
   four men. Wynand's monumentality gets expressed through Furnace
   means: gilt-heat palette shift, larger numeral scale, setback-
   ziggurat part mark. (Also: Cinzel is now Twilight's display face and
   BGE-adjacent; Fountainhead borrowing it would blur the shelf.)

## Binding conditions

- **F1 — Heat contrast policing.** Furnace #E4572E (≈3.5:1 on Hearth) is
   graphics/large-display ONLY; Emberlight #FFD9A0 may carry medium
   display; body stays Bone. Validators meter every opener's title
   treatment.
- **F2 — Part marks must be architectural, not icon-y.** Pilasters /
   twin arches / setback ziggurat / single cantilever drawn as
   structural SVG elevations with real proportion — clip-art glyphs
   fail review.
- **F3 — Outlined roman numerals: stroke-only at giant scale, low
   opacity, occludable by art.** They must never read as badges (the
   rejected tell). No borders, no fills, no cartouches.
- **F4 — Opener art sits in the meta→text zone and NEVER pushes text
   into a long dark scroll gap.** The spec names this baseline defect;
   prototype review measures it (first body line visible without scroll
   at 1440×1000 for standard openers).
- **F5 — p4c20 (840 words, the triptych finale) is a designed ending.**
   Ocean/sky/Roark ascent: full Furnace climax, white-hot, explicit end
   state. Short triumph, not empty page.
- **F6 — Oswald is yours alone.** No other approved book uses condensed
   industrial caps — keep it that way; if a later book requests Oswald,
   Fountainhead has seniority and they differentiate or choose again.

## Addendum — ART-DIRECTION.md draft review (same verdict, new findings)

Draft spec read in full. It conforms to the approved direction. Answers:
Q4 (Wynand Cinzel) — already ruled NO in the main critique. Finale
typography (Q1): YES to the one-off triptych opener for p4c20 — earned
by the last page; keep it inside Furnace means (white-hot, cantilever
grammar) rather than inventing a fifth part-mark.

- **F7 — Half-fill numerals are content, not arithmetic.** §9(a)'s
  "gradient stop offset = chapter index/part length" is index-
  correlated styling — dangerously close to the banned modulo logic.
  Approved ONLY if the fill fraction tracks the part's HEAT ARC
  (Keating 0% → Roark 100% with per-chapter authored overrides for
  climaxes), documented per chapter in the manifest. Pure
  index/length fractions fail review.
- **F8 — Banner bar parity (odd-left/even-right) is banned.** §9(c)'s
  odd/even bar alternation is exactly modulo art. Replace with authored
  per-chapter bar compositions (record the rule per chapter: which
  bars, why — e.g. drill chapters vertical bars, quarry chapters
  horizontal strata). Climax full-width hearth lines stay.
- **F9 — Ember on small Plex kickers must meter.** §3 permits Ember
  Plex kickers ≥0.7rem tracked — each usage must clear 4.5:1 computed
  on its composited ground or take Emberlight/Bronze instead.
- **F10 — `◆` diamond end-marks.** Book-CSS override of the shared
  fleuron is fine (Ember diamond ≠ pseudo-glyph-as-art when the banner
  system carries the identity), but the diamond must be SVG or a
  text glyph with explicit font support — no tofu boxes on any platform.
