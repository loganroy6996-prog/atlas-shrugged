# Beyond Good and Evil — critique (ArtDirector)

Spec: `books/beyond-good-and-evil/design/directions.md` (201 lines, incl.
full §1–296 paragraph index + engineering contract).
Baseline: capture #9 (violet shear line + glow, centered shell).

## Verdict: DIRECTION A ("THE NUMBERED LEDGER") APPROVED, with binding conditions

The pick is exactly right. This is the rare identity DERIVED from the
book's textual structure rather than applied to it: BGE is cited by
§-number ("the abyss gazes back" is §146 — the design makes readers see
what scholars cite), the two unnumbered lyric chapters switching the
system OFF is a genuinely moving structural idea, and the instrument
gives long-chapter relief instead of competing decoration. The 12-source
reference stack (Naumann octavo, Cambridge apparatus, Behrens/Eckmann,
Kirchner, Doré, La Rochefoucauld maxim-blocks, Sphinx lekythos) is
exemplary; both rejections are correctly argued (B's masks collapse on
125 maxims and risk caricature; C's 40vh plates brutalize reading and
Pirata One courts kitsch). The Klimt-negative lesson (killed a fourth
allegorical direction) shows real taste. Proceed to ART-DIRECTION.md +
prototype; hold Phase 2 build until prototype review passes.

## Binding conditions

- **E1 — Margin numerals are DOM-wrapped, never guessed.** The
   `reader:chapter` JS wrapper (§5.4, matching `^(\d{1,3}[A-Z]?)\.(\s|--)`)
   is the ONLY approved mechanism — the §5.1 paragraph index is its
   TEST ORACLE (all 299 starts verified), not a styling source. Static
   `nth-of-type` `content:` numerals are forbidden: any text shift
   silently mis-numbers philosophy, which is worse than no numerals.
   Validator spot-checks 20 wrappings incl. all three A-sections and
   the dash-form §§278/281/282.
- **E2 — Brass figures must be engraved, not glowing.** Fraunces range
   figures + Ochre Ink #D9A441: flat, letterspaced, archival — zero
   halos, zero gradient fills. The fifth gold in the library must read
   as LEDGER INK (precise, tabular, small-to-medium scale), distinct
   from Gay Science's architectural gold, WtP's match-flame, Churchill's
   flat shards, Twilight's bronze wash, Zara's incised liturgy.
- **E3 — Sanguine is rationed exactly as spec'd.** §50, §§278/287/296,
   §146, §215's dual-rule, Aftersong bow: the enumerated marks ONLY.
   Any additional red numeral anywhere fails review.
- **E4 — The silence must be total.** Preface/Aftersong: no figures, no
   seals, no margin numerals, verse measure, Sanguine fleuron only. One
   stray "§" glyph in either chapter fails review.
- **E5 — Ch. IV maxim-set at reading scale.** 125 maxim blocks with
   hanging numerals + hairlines every ~5: prototype MUST show a full
   screen of maxims mid-chapter (not just the opener) proving density
   without cramp. If it fatigues, increase air before reducing numerals.
- **E6 — Type collisions managed.** Fraunces display (ledger figures +
   titles) is now the sixth grant — BGE's Fraunces must read ENGRAVED
   (400/600, tabular intent, figure-forward) vs Churchill (occluded
   WONK), WtP (black 900), Gay Science (joyful), Being&Time (light
   ledger), home (masthead). Source Serif 4 body is shared with
   Sovereign/Fountainhead/Being&Time — acceptable (quiet text faces may
   repeat) but BGE's body voice comes from the MARGIN INSTRUMENT, not
   the face. Plex Mono ledger voice: tabular figures everywhere.
- **E7 — Prototype scope.** Cover ledger plate + p1c1 (silence) + p1c2
   (full ledger) + p1c5 (maxim-set density) + p1c10 (summit + triple
   red) + p1c11 (verse silence) at three viewports, before cohorts build.
