# Part Four (IV) — Cohort Design: "The Carnival of Higher Men" (conformed to THE SOLAR GOSPEL)

**Book:** Thus Spoke Zarathustra · **Cohort:** P4 = Part Four (`part-4`, roman `IV`), chapters `p4c1`–`p4c20`
**Designer:** ZaraP4Designer (cohort design agent) · **Status:** Phase-1 cohort grammar, CONFORMED to binding BOOK IDENTITY (Direction A — THE SOLAR GOSPEL) + READER-CONTRACT v1.0
**Binding inputs read in full:** `.omp/design/RELAUNCH.md`; `books/thus-spoke-zarathustra/design/directions.md` (§binding, rules 1–16, §81 form map, asset list); `books/thus-spoke-zarathustra/design/ART-DIRECTION.md` (supervisor draft v0.1); `.omp/design/READER-CONTRACT.md` v1.0 STABLE; all 20 P4 chapter texts in full (26k words); book `theme.css` + `index.html` + `meta.json` (read-only); skills `frontend-design` + `frontend-workflow` + `reference-study` (URIs injected at session start, no fallback needed).
**Ownership:** this file only. No other edits made.

**Citation convention:** P4 chapters are unsectioned prose (no § numbers in data), so pull-line citations use **¶ = 0-based paragraph index** into `data/chapters/p4cN.json`. All pull-lines verified verbatim against the JSON.

---

## 0. Conformance statement + clash ledger (draft → identity)

My Phase-1 draft ("Liturgical Carnival": arch medallions, Fraunces, 13-hue day-arc, per-chapter meta-rules, colored drop caps) is hereby **conformed** to the adopted identity. Nothing below contradicts directions.md rules 1–16, ART-DIRECTION.md, or READER-CONTRACT v1.0. Deliberate changes from my draft:

| # | Draft element | Disposition | Identity ground |
|---|---|---|---|
| 1 | 13-hue cohort palette (honey/wine/rose/swamp/moon + 7 single-use hues) | **Collapsed** into the 6 `--z-*` tokens + `color-mix()` derivations (umber-lapis ground, white-gold highlight). Single-use hues (cliff red, twilight purple, date brown, vein red, green flash, noon gold, sage) are CUT. | ART-DIRECTION "no new hues"; rule 12 |
| 2 | Fraunces display + Cormorant body | **Replaced** by Cinzel display + Spectral body metrics (director verdict: Newsreader OUT, Spectral IN — final). | Rules 1–2; Newsreader collision note |
| 3 | Arch-topped medallion opener frame | **Replaced** by identity opener: `#chapter-art` slot (seal/scene/emblem/plate/song/finale) + Cinzel part line + Cinzel title + verbatim pull-line + sun-rule. Scene compositions from my draft survive as the *insides* of the identity's scene/emblem SVGs. | Rule 3; §81 P4 form map |
| 4 | Colored drop caps on most chapters | **Cut to rule 7:** Cinzel solar drop caps for sermons + visions ONLY (c2, c10, c13, c15). Songs (c14, c16, c19), festival (c18), emblems, assembly, feast, finale open without. | Rule 7 |
| 5 | Per-chapter meta-rule variants (broken rule, crown ticks, grass-line, ring, wine-cup) | **Cut.** Sun-rule standard everywhere; c18 festival double-rule is the sole sanctioned exception. | Opener grammar; P4 form map |
| 6 | Centered lyric styling for c3 quatrain, c8 maxim, c10 sleep-song, c12 menu | **Revised to left-measure blocks** (indented italic / leaders / leading). Centered lyric reserved for true songs (c14, c16, c19) + flagged c5 lament exception. | Rule 2 (never centered except songs) |
| 7 | Gold/ember refrain text at body size | **Revised:** gold text only where large-text rule passes (c19 roundelay at bold 1.5rem+); otherwise refrains bone italic with graphic crowns. | Rule 14 |
| 8 | End-mark glyph cycle (footprints, ears, bell dots, paw) | **Replaced** by 24px ember-ring mini-seal close for all P4 + lion-and-doves special close for c20, via the APPROVED Appendix A.0 override path (see §4.6). Bell dots folded into c19's stanza crowns (ornament-legal). | Rule 8 + ReaderLead ruling 2026-10-15 |

**Open flags needing supervisor ruling (marked in map):** (a) c5 lament-stanza lyric treatment (form map says parade-emblem, but 52/86 paragraphs are verse); (b) new motif `bestiary-ugliest` for c7 (rule 15 approval) else fallback `sign-ring`; (c) c14 opener reuses `bestiary-sorcerer` motif for the harp-song; (d) c17/c18 share `bestiary-ass` with different classes (emblem vs plate) — adjacent openers differ in composition per rule 12; (e) c19 scene+song hybrid class choice (`scene` chosen); (f) c18 class choice (`plate` chosen); (g) c13 desktop margin motif (prototype check); (h) final body font (RESOLVED by director verdict: Spectral 400/500 + italics final; rem units throughout).

**[title-inference] verification (identity spec asked cohorts to verify):** p4c8 "beggar among cows" VERIFIED (read in full — cows, rumination lesson, honey, corn-grinding all present). p4c15 "leech-man cross-examines" CORRECTED: actual content is the leech-man's fear/science speech (¶8–12), Zarathustra's courage rebuttal (¶13–16), and the sorcerer's reconciliation (¶17–22) — a dialogue-sermon, not a cross-examination. All other P4 form assignments verified compatible (I read all 20 chapters; identity designer read p4c10/p4c19/p4c20 fully and skimmed p4c4/p4c5/p4c6/p4c11/p4c15–p4c18).

---

## 1. Cohort read — what Part Four actually is

Part Four is structurally unique in the book: **one long day and one night**, not a sermon cycle. Morning (c1–c2): white-haired Zarathustra, honey offering as fisherman's ruse, the prophet brings the cry of distress — the Higher Man. Day of encounters (c3–c9): walking gallery of kings, leech-man, sorcerer-actor, retired last pope, ugliest man (murderer of God) in Serpent's Death valley, voluntary beggar preaching rumination to cows, the shadow who lost his goal. Noontide hinge (c10): sleep under vine; world becomes perfect, round, ripe; fall into the well of eternity. Evening feast (c11–c18): greeting, last supper (ass's load of wine), Higher-Man sermon dissolving into dance, harp Song of Melancholy ("Only a fool! Only a poet!"), leech-man's science, desert-daughters burlesque (Dudu, Suleika, one-legged palm dancer), awakening into the ass-festival litany ("Ye-a"). Midnight (c19): "Was that — life? … Once more!", the bell, the roundelay ("Joy – deeper than heart's agony … wants deep, deep, deep eternity!"). Morning (c20): doves, laughing lion, "My children are near"; Higher Men scatter; "rise up now, rise up, great noontide!"

**Design consequence (conformed):** the cohort rides the identity's P4 arc — **ember-led c1–c9, c10 pivot, gold returns c11–c20** — with the parade-emblem bestiary (inheritance from Direction C) for encounters, centered lyric for the three true songs, and the bell/finale scenes for the climax. The rejected approach (rail rules, numeral badges, gradient tints, pseudo-glyphs) stays rejected: art is authored engraved-line SVG + liturgical typography.

---

## 2. References studied (with citations)

Mine (this cohort): (1) Van de Velde 1908 Insel *Zarathustra* (NGA 163764; Yale 1997.56.3) — per-part ornament precedent, whiplash line; (2) Bruegel *Fight Between Carnival and Lent* (KHM Vienna) — carnival-mass procession composition for the encounter arc + ass festival; (3) Limbourg *Très Riches Heures* — luminous midnight roundels, ancestor of the roundelay treatment; (4) Redon symbolist lithographs (Cleveland *Homage to Goya* 1885; NGA survey) — black grounds, floating luminous forms for midnight visions; (5) Goya *Caprichos/Disparates* ass plates (Prado *Bobalicón*) — satirical-sacred ass tone for c17–c18. Identity's (directions.md, adopted): Van de Velde (authored line + monumental title), Blake's illuminated books (emblems fused with text block; songs as lyric stanzas), Shir-o-Khorshid Lion-and-Sun (historical root of the solar-lion grammar), Friedrich's *Wanderer*/*Morning in the Riesengebirge* (solitary figure before vast light — kept to cover/Part I grammar, not P4).

---

## 3. Three directions considered (cohort level)

**A — "Alpine Bestiary" (woodcut specimen plates).** Rejected: unachievable plate load, strands the song chapters, risks clip-art read at small sizes. (Converges with identity's rejection of Direction B.)
**B — "Liturgical Carnival / Festival Broadside" (CHOSEN at draft, now conformed into A).** Medallion scenes + liturgical verse typography + day-arc. Its substance (parade bestiary for encounters, hymn/litany/roundelay typography for songs, day-arc) survives inside the Solar Gospel as the P4 parade-emblem layer + song treatments + ember→gold migration.
**C — "Midnight Manuscript" (all-nocturnal star-charts).** Rejected: factually wrong for morning/noon chapters; flattens the arc toward midnight and back.

---

## 4. The conformed system

### 4.1 Signature idea
**The ember parade rekindling to gold.** P4 reads as a festival day under the Sign-Ring: visitors climb through ember dusk (c1–c9), the sun stands still at noon (c10), the feast runs gold (c11–c18), the bell strikes twelve (c19), the lion comes at dawn (c20). A reader glancing at openers feels the seal-phase change, not a tint shuffle.

### 4.2 Tokens (identity-fixed; cohort owns placement, not values)
`--z-night:#0A0E21` ground · `--z-lapis:#1B2350` surface · `--z-solar:#E8A93D` gold · `--z-ember:#C8502E` ember · `--z-serpent:#7A8B5A` serpent-green · `--z-bone:#F2E7CF` text. Derivations via `color-mix()` only: opener ground umber-lapis `#171126` → lapis by c20; white-gold highlight of solar for c19 roundelay ground accents; deepened night for c7. Bone-on-lapis ≥10:1; gold text large-only per rule 14. Supervisor scopes all 8 themes; NOT cohort work.

### 4.3 Typography (identity-fixed; cohort owns stanza/verse composition)
Display **Cinzel** (titles keep book title-case, clamp + `text-wrap:balance`, ≤3 lines). Body **Spectral** metrics: prose 1.3rem/1.85, 36–40rem, bone-on-lapis, left-aligned; songs Spectral italic 1.15rem/2.0, centered 26–30rem. All cohort measures in rem — **swappable to Spectral/Alegreya without rework** per the director verdict (Spectral final); engineer may proceed to final CSS. Chrome DM Sans unchanged.

### 4.4 Opener grammar (identity rule 3 + P4 form map; per-chapter compositions in §5)
`#chapter-art` slot (declarative manifest `src`/`class`/`motif`/`caption`, contract §4) → Cinzel part line → Cinzel title → ONE verbatim pull-line (manifest `caption`, §5 gives text + ¶ citation) → sun-rule (c18: festival double-rule `art/rule-festival.svg`). Slot classes used: `emblem` (c1, c3–c9, c12, c17), `scene` (c2, c10, c19), `plate` (c11, c18), `song` (c14, c16), `seal` (c13, c15), `finale` (c20). **CSS-only fallback until v1 reader.js lands:** same compositions degrade to `body[data-chapter]`-qualified `.chapter-meta::before`-carried SVG at emblem scale (≤120px); scenes degrade to Sign-Ring seal + sun-rule; pull-lines stay hidden until manifest/JS fill lands (acceptable degradation — titles + seals carry the opener). No prompt needed: engineer implements both paths from this spec.

### 4.5 Per-chapter variation system (never modulo tinting)
Variation is by **subject, composition, and liturgical form**, keyed to prose. Encounter emblems alternate vantage (prostrate c5, seated c6, valley-floor c7, hillside c8, chase c9, ground-level c4, processional c3, slab-and-sea c2, summit c1). No two adjacent openers share a composition: c17 (kneeling ring, ember) vs c18 (festival plate, ember-gold) vs c19 (bell-tower scene + gold roundelay) vs c20 (lion-doves finale tableau) are four distinct forms in a row. Refrain devices differ per liturgy: c5 anaphora size-steps, c14 ember... (revised: bone-italic anaphora with stanza crowns), c16 Selah/Amen closers, c17 Cinzel response lines, c19 gold roundelay. Songs share only the centered 26–30rem measure; crowns differ (harp-string c14, bell c19, desert-diamond c16).

### 4.6 Chapter close (binding ruling recorded)
Ruling (ReaderLead via supervisor, 2026-10-15, contract Appendix A.0): a `body[data-chapter]`-qualified override of `.chapter-text > p:last-child::after` carrying **authored SVG `url()` content** is sanctioned for the chapter-end ornament: ≤32px mini-seal, no layout shift, never a bare glyph. P4 close: **24px ember-ring mini-seal** (`art/close-ember-ring.svg`, supervisor-owned master; engineer references it) for p4c1–p4c19; **lion-and-doves special close** (`art/close-lion-doves.svg`) for p4c20 only. Pure-CSS path works immediately (unlayered book CSS wins over `@layer shared`); keep it when v1 reader.js lands unless ReaderLead ships a `#chapter-end` slot. Print: hide closes. Reduced motion: closes are static art, no guard needed.

---

## 5. Per-chapter map (all 20; ¶ = 0-based paragraph index, verified)

Shared opener skeleton (rule 3): `#chapter-art` slot → Cinzel part line → Cinzel title → verbatim pull-line → sun-rule (c18: festival double-rule). All art engraved-line SVG, flat gold/serpent/ember on lapis, hatching via paths. All chapters: calm bone-on-lapis body 1.3rem/1.85, 36–40rem. Manifest key: `src` book-relative, `class` per rule 15, `motif` → `body[data-art]`, `caption` = pull-line.

### p4c1 — The Honey Offering · offering-emblem · ember-led
- **Motif/manifest:** `honey-offering` · `class:"emblem"` · `src:"art/cohort-p4-honey.svg"` (≤5KB).
- **Pull-line (caption):** "Away, away my hook! In, down, bait for my happiness! Drop down your sweetest dew, honey of my heart!" (¶20).
- **Mood:** bright cunning morning; holy mischief.
- **Palette role:** ember-led opener; solar gold reserved for the rod-line itself (graphic, not text).
- **Asset:** white-haired fisher silhouette on summit crag, long rod arcing down-right, line falling into wave bands with small many-colored fish; three tiny suns along the arc (sunrise/noontide/sunset, ¶9). Triptych sun low-left (c1→c10→c20 horizon grammar).
- **Opener:** emblem ≤120px centered; standard sun-rule.
- **Reading:** rod-casting ¶7 solar left rule; closing eye-paragraph ¶21 set 1.15em as benediction. No drop cap (emblem form).
- **Close:** ember-ring mini-seal.

### p4c2 — The Cry of Distress · threshold-parable · ember-led · DROP CAP
- **Motif/manifest:** `sign-ring` · `class:"scene"` · `src:"art/cohort-p4-cry.svg"`.
- **Pull-line:** "It is the Higher Man that cries for you!" (¶4).
- **Mood:** alarm under bright day; dread breaking cheerfulness.
- **Palette role:** ember ground first invaded by deepened-night sea bands.
- **Asset:** stone slab in perspective with TWO cast shadows (one holding stick, tracing lines, ¶0); below the slab edge, black-blue wave bands with a single white cry-line zigzagging up. Sound made visible once — never again in this form.
- **Opener:** scene figure above title; contrast check on any overlaid text (overlay only if ≥7:1, else stacked).
- **Reading:** Cinzel solar drop cap (vision/threshold voice, rule 7); cry passages ¶3–5 with quoted cries in Spectral italic + ember left rule. Body never letterspaced (rule 2).
- **Close:** ember-ring mini-seal.

### p4c3 — Conversation with the Kings · parade-emblem · ember-led
- **Motif/manifest:** `bestiary-kings` · `class:"emblem"` · `src:"art/emblem-bestiary-kings.svg"`.
- **Pull-line:** "What do we kings matter!" (¶11, the kings' own words as reported by Zarathustra).
- **Mood:** shabby pomp, amused contempt, spring-blood war talk.
- **Palette role:** ember + faded purple-grey derivations (`color-mix` ember/lapis) for the yellowed pomp.
- **Asset:** procession in profile — two small crowned figures (one indignant, one shrugging) behind a laden ass on a descending path; crowns slightly too large ("disguised in the old, yellowed pomp"). First ass drawing; c17–c18 quote it.
- **Opener:** emblem ≤120px; standard sun-rule (draft crown-ticks CUT per rule 3).
- **Reading:** Sybil verse ¶18–20 as LEFT-measure indented italic block with thin sun-rule above (rule 2: centered reserved for songs); ass's first "Ye-a" (¶17) in Cinzel small display, bone.
- **Close:** ember-ring mini-seal.

### p4c4 — The Leech · parade-emblem · ember-led
- **Motif/manifest:** `bestiary-leech` · `class:"emblem"` · `src:"art/emblem-bestiary-leech.svg"`.
- **Pull-line:** "But what I am master of and expert on is the leech’s brain – that is my world!" (¶16).
- **Mood:** murky, clinical, oddly tender; microscope in a bog.
- **Palette role:** serpent-green leads here (swamp knowledge); ember frame.
- **Asset:** ground-level view — dark swamp water with reed cuts, forearm rising diagonally with ten small leech ovals, three blood threads trailing into water resolving into root-lines; a hand's-breadth of firm ground behind (¶13).
- **Opener:** emblem with heavier bottom ground-line, half-submerged feel.
- **Reading:** ¶16 serpent left rule. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c5 — The Sorcerer · parade-emblem (+52¶ lament; EXCEPTION REQUESTED) · ember-led
- **Motif/manifest:** `bestiary-sorcerer` · `class:"emblem"` · `src:"art/emblem-bestiary-sorcerer.svg"`.
- **Pull-line:** "Who still loves me? – offer me hot hands!" (¶44).
- **Mood:** theatrical torment collapsing into confession; storm-lit.
- **Palette role:** ember + night; lightning rendered bone-white (draft green-flash hue CUT).
- **Asset:** prostrate figure from above on a rock corner, arms flung wide, face hidden; mocking eye in a torn cloud above, one bone-white bolt striking down; fallen actor's mask half-buried at the frame edge (the reveal, ¶55–56).
- **Opener:** emblem; title in standard Cinzel roman (draft italic title CUT — rule 1 case/voice discipline).
- **Reading:** prose frame calm; lament ¶1–52 as LEFT-measure indented italic stanzas with hanging indent; refrain steps by size/leading ("Ha ha!" ¶15/38/41, "Away! Away!" ¶18/20, "Offer me…" ¶2–3/43–45), "You – Hangman-god!" (¶26) largest. **Flag for supervisor:** 52 of 86 paragraphs are verse — request either (a) accept left-measure lyric treatment, or (b) add c5 lament to the song list for centered 26–30rem. Engineer builds (a); CSS qualifier makes (b) a one-line switch.
- **Close:** ember-ring mini-seal.

### p4c6 — Retired from Service · parade-emblem · ember-led
- **Motif/manifest:** `bestiary-pope` · `class:"emblem"` · `src:"art/emblem-bestiary-pope.svg"`.
- **Pull-line:** "For this old god no longer lives: he is quite dead." (¶39).
- **Mood:** melancholy, courteous, autumnal; unemployment of the holy.
- **Palette role:** bone line on ember-night; palest ember chapter.
- **Asset:** close study — long blessing hand (¶13), bone line on night; tiny forest hut behind with two howling wolf silhouettes (¶9); closed-curve blind-eye motif in the keystone (¶20).
- **Opener:** emblem; standard sun-rule.
- **Reading:** god-history ¶22–24 with soft bone left rule. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c7 — The Ugliest Man · parade-emblem · DARKEST OPENER (near-black) · ember-led
- **Motif/manifest:** `bestiary-ugliest` (NEW — needs supervisor approval per rule 15; fallback `sign-ring`) · `class:"emblem"` · `src:"art/cohort-p4-ugliest.svg"`.
- **Pull-line:** "Man, however, is something that must be overcome." (¶43; full ¶: "I love the great despisers. Man, however, is something that must be overcome.").
- **Mood:** horror held at arm's length; the cohort's darkest encounter.
- **Palette role:** near-black ground (deepened night), ember cliff bands; NO solar gold anywhere — the only P4 opener without it.
- **Asset:** valley cross-section — black cliffs left, ember-red cliffs right converging to a path; seated shape deliberately half-turned away (honoring "do not look at me!", ¶9); serpent curve along the valley floor; slashed-eye keystone (the witness murdered, ¶30–32).
- **Opener:** emblem; veil fully dark; title letterspacing +0.01em (dread needs air — NOT a tracked-out label, rule 12 safe).
- **Reading:** riddle dialogue ¶3–6 with the ugliest man's lines indented +0.95em; murder confession ¶30–32 in bordered inset with ember edge. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c8 — The Voluntary Beggar · parade-emblem · ember-led ([title-inference] VERIFIED)
- **Motif/manifest:** `bestiary-beggar` · `class:"emblem"` · `src:"art/emblem-bestiary-beggar.svg"`.
- **Pull-line:** "If we do not alter and become as cows, we shall not enter into the kingdom of heaven." (¶8).
- **Mood:** warmest, funniest, most peaceful chapter; sun on the hillock.
- **Palette role:** serpent pasture-light + solar warmth inside ember frame; brightest ember emblem.
- **Asset:** hillock from below — three calm cow heads in a row looking down, ears out; small seated sermonizer with raised hand between them; breath-wisps curling into grass-seed spirals; sun high. (Cows, rumination, honey, corn-grinding verified in prose.)
- **Opener:** emblem; standard sun-rule (draft grass-line rule CUT per rule 3).
- **Reading:** rumination lesson ¶8–10 as left-measure indented block with leader spacing (rule 2); pasture air via +10% paragraph spacing. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c9 — The Shadow · parade-emblem · ember-led
- **Motif/manifest:** `bestiary-shadow` · `class:"emblem"` · `src:"art/emblem-bestiary-shadow.svg"`.
- **Pull-line:** "Where is – my home? I ask and seek and have sought for it, I have not found it." (¶24, first sentence).
- **Mood:** chilly, restless, pitiable; freedom curdling into homelessness.
- **Palette role:** ember-night with star-silver derivation (`color-mix` bone/lapis — identity's sanctioned silver, NOT a new hue).
- **Asset:** three leg-pairs in motion along a ridge path ("six foolish old legs," ¶5), diminishing sturdy → striding → thin/fading; third pair semi-transparent with broken-backbone hitch (¶22); cold mirror/window-pane rectangles behind ("fallen asleep upon mirrors and window-panes," ¶11).
- **Opener:** emblem; standard sun-rule.
- **Reading:** confession ¶9–24 ragged with increasing right indent toward "Vanity!" (¶24), answer ¶25–31 snapping back to full measure — typographic lost-and-found. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c10 — At Noontide · STILL-VISION · PART PIVOT · quietest opener in the book · DROP CAP
- **Motif/manifest:** `noontide-tree` · `class:"scene"` · `src:"art/scene-noontide-tree.svg"` (identity asset-listed).
- **Pull-line:** "Soft! Soft! Has the world not just become perfect?" (¶3, first sentence).
- **Mood:** still, golden, drowsy perfection; the cohort's hinge and still point.
- **Palette role:** pivot — white-gold blaze inside the ember part; ground begins return umber-lapis → lapis.
- **Asset:** FULL-BLEED scene — gnarled horizontal limb with vine spirals, hanging grape clusters as gold circles; below, a sleeper's profile with ONE open eye ("My eyes it does not close," ¶5); the golden round ring (¶15) encircling the composition. Triptych panel 2: sun at apex (c1→c10→c20).
- **Opener:** scene figure; NO overlay text (quietest opener — title always stacked below, rule 5 contrast discipline).
- **Reading:** Cinzel solar drop cap (vision, rule 7); sleep-song ¶3–14 as LEFT-measure breath-lines with 2.1 leading (rule 2); "Oh golden round ring" ¶15 in Spectral italic 1.2em; waking dialogue ¶17–21 alternating indent (soul vs self).
- **Close:** ember-ring mini-seal.

### p4c11 — The Greeting · assembly · gold returns
- **Motif/manifest:** `sign-ring` · `class:"plate"` · `src:"art/cohort-p4-assembly.svg"` (guest-gallery header per form map).
- **Pull-line:** "You are only bridges: may higher men than you step across upon you!" (¶28).
- **Mood:** crowded joy undercut by refusal; the party convenes, the host says *not you*.
- **Palette role:** gold returns; all encounter accents gather at low saturation — group-portrait palette inside lapis.
- **Asset:** cave-mouth cross-section — nine small distinct silhouettes in a semicircle (two crowns, sorcerer hat, papal tiara, beggar's bowl, thin shadow, bandaged leech-arm, prophet's staff, crowned ugly one, ¶1) with the ass's head center-front and the eagle perched above, feathers ruffled (jagged halo); pine-tree at the mouth ("To the pine-tree… do I compare him," ¶15). Widest art in P4 (max 420px).
- **Opener:** plate; standard sun-rule.
- **Reading:** role-call ¶1 with middot breathing room between guests; "bridges/steps" verdict ¶28–29 in Spectral italic 1.15em. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c12 — The Last Supper · feast-emblem · gold returns
- **Motif/manifest:** `feast-table` · `class:"emblem"` · `src:"art/cohort-p4-feast.svg"`.
- **Pull-line:** "But man does not live by bread alone, but also by the flesh of good lambs, of which I have two." (¶8).
- **Mood:** hearty, practical, comic; the feast gets organized.
- **Palette role:** ember-gold feast warmth on lapis.
- **Asset:** table still-life from above — round board, two lamb joints under sage sprigs, ring of bounty (roots, fruits, nuts "and other riddles that need cracking" ¶9 — one walnut as riddle-knot), wineskin with crowned cork (kings' ass-load, ¶7); two crossed carving knives echoing c3's swords.
- **Opener:** emblem ≤120px; standard sun-rule (draft wine-cup tick CUT).
- **Reading:** menu ¶8–9 as left-measure indented block with dish leaders; protest ¶11–13 vs law ¶14–16 as facing indented exchange. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c13 — Of the Higher Man · long sermon-tablet · gold returns · DROP CAP
- **Motif/manifest:** `sign-ring` · `class:"seal"` · `src:"art/seal-part-4.svg"` (Sign-Ring; supervisor master).
- **Pull-line:** "I have canonized laughter; you Higher Men, learn – to laugh!" (¶96, closing words of the sermon).
- **Mood:** commanding, then liberating; sermon-apex dissolving into dance.
- **Palette role:** gold leads; lightning bone-white; rose-wreath ring in ember-rose derivation.
- **Asset:** Sign-Ring seal (56–72px) + NON-ARTICULATED title halo: faint static rose-ring SVG behind the title (non-animated) — the laugher's crown (¶87). Longest chapter (97¶) gets relief: dance calls ¶86/89/96 as full-measure Spectral italic 1.2em breaks with rose rules; "greatest sin" ¶75–79 as bordered inset.
- **Opener:** seal; title largest in cohort (clamp(2.6rem,7vw,4rem)); standard sun-rule.
- **Reading:** Cinzel solar drop cap (sermon, rule 7). Desktop ≥1280px: assembly margin motif (small gold tick-row keyed to ¶86/89/96 dance calls — PROTOTYPE CHECK for measure intrusion; cut if it touches 36–40rem prose).
- **Close:** ember-ring mini-seal.

### p4c14 — The Song of Melancholy · harp-song · TRUE SONG (centered lyric)
- **Motif/manifest:** `bestiary-sorcerer` (REUSE for the harp-song — flag for supervisor; alternative `lyre-dance`) · `class:"song"` · `src:"art/cohort-p4-harp.svg"`.
- **Pull-line:** "No! Only a fool! Only a poet!" (¶14).
- **Mood:** seductive, poisonous, voluptuous; beauty as a trap.
- **Palette role:** ember-night ground; harp gold (graphic); NO purple hue (draft twilight purple CUT).
- **Asset:** harp in profile whose strings vibrate into curves morphing into a panther's back + eagle's wing (¶17–23); crescent moon in ember disc behind; small bird-net at base ("went like birds unawares into the net," c15 ¶0).
- **Opener:** song-class slot; standard sun-rule.
- **Reading:** prose frame ¶0–10 calm left; verses ¶11–26 CENTERED 26–30rem Spectral italic with harp-string stanza crowns; "Only a…" anaphora (¶12/14/16/25/26) in bone italic +0.15em with extra leading space (rule 14: gold graphic-only at this size); eagle/panther stanza ¶17–23 with feathered chevron left edge (content-grounded ticks). No drop cap (song, rule 7).
- **Close:** ember-ring mini-seal.

### p4c15 — Of Science · dialogue-sermon · gold returns · DROP CAP ([title-inference] CORRECTED)
- **Motif/manifest:** `sign-ring` · `class:"seal"` · `src:"art/seal-part-4.svg"`.
- **Pull-line:** "For fear – is the exception with us." (¶14, Zarathustra's rebuttal opening).
- **Mood:** window thrown open; argumentative fresh air; laughter breaking the spell.
- **Palette role:** airiest gold chapter; night ground at its thinnest in the evening band.
- **Asset:** Sign-Ring seal; the thrown-roses moment (¶13) styled as a finite seven-petal SVG fleuron row (authored, NOT a pattern fill) above the ¶13 rule.
- **Opener:** seal (smallest seal presentation in P4 — the snatch is quick); standard sun-rule.
- **Reading:** Cinzel solar drop cap (sermon, rule 7); fear-vs-courage exchange ¶8–14 as tight facing dialogue, alternating indents; choral "Zarathustra!" inside ¶17 centered display (the laugh-cloud lifting). NOTE: form-map "leech-man cross-examines" corrected — actual arc is fear speech → courage rebuttal → sorcerer reconciliation (¶17–22).
- **Close:** ember-ring mini-seal.

### p4c16 — Among the Daughters of the Desert · desert-song · TRUE SONG (centered lyric)
- **Motif/manifest:** `desert-dance` · `class:"song"` · `src:"art/cohort-p4-desert.svg"`.
- **Pull-line:** "Deserts grow: woe to him who harbours deserts!" (¶8; returns ¶56).
- **Mood:** lewd, hilarious, orientalist-pastiche; dessert-wine roaring.
- **Palette role:** arid tints = ember/solar derivations ONLY (draft date-brown + palm-green CUT per no-new-hues).
- **Asset:** oasis-mouth — parted lips forming an oasis pool ("Its sweetest mouth," ¶15); inside, a date-palm dancer on ONE leg with a small lion silhouette in the distance (the text's own joke, ¶38); two small veiled faces (Dudu, Suleika) peeking from reeds.
- **Opener:** song-class slot; standard sun-rule. Long title may wrap 2 lines (content; rule 1 allows ≤3).
- **Reading:** prose frame ¶0–7 calm; burlesque ¶8–56 CENTERED 26–30rem Spectral italic with desert-diamond stanza crowns; "Selah." closers right-aligned italic, "Amen!" (¶20/26/55) centered Cinzel small display, framing "Deserts grow" (¶8/56) as 1.35em display bookends; leg-search farce ¶28–38 progressive indent staircase; virtue-bellows climax ¶48–53 largest verse size in P4. No drop cap (song).
- **Close:** ember-ring mini-seal.

### p4c17 — The Awakening · threshold-parable (festival ignition) · gold returns
- **Motif/manifest:** `bestiary-ass` (SHARED with c18 — compositions differ: kneeling ring vs festival plate, rule 12) · `class:"emblem"` · `src:"art/emblem-bestiary-ass.svg"`.
- **Pull-line:** "They have all become pious again, they are praying, they are mad!" (¶19).
- **Mood:** noise → deathly stillness → incense → kneeling absurdity; ignition.
- **Palette role:** ember leads (purple-saddle dusk via ember/lapis `color-mix`, NOT a purple hue).
- **Asset:** kneeling ring — seven small kneeling silhouettes in a circle seen from above around a central ass head with incense smoke rising in pine-cone curls (¶17); evening rider on the horizon ("riding over the sea… in its purple saddle," ¶6). Quotes the c3 ass drawing: same head, now haloed.
- **Opener:** emblem; standard sun-rule.
- **Reading:** stillness passage ¶17–19 with +25% leading (held breath); litany ¶20–34 alternating left-measure roman versicles / Cinzel bone response lines ("The ass, however, brayed 'Ye-a'," ¶21/23/25/27/29/31/33); final thistle ¶34 as feast-anticipation rule. No drop cap.
- **Close:** ember-ring mini-seal.

### p4c18 — The Ass Festival · FESTIVAL (communal voice) · gold returns · NO DROP CAP
- **Motif/manifest:** `bestiary-ass` (SHARED with c17 — this is the festival plate, not the kneeling ring) · `class:"plate"` (CHOSEN per §81 "festival" staging; flag: confirm vs `emblem`) · `src:"art/cohort-p4-festival.svg"`.
- **Pull-line:** "Do not forget this night and this ass festival, you Higher Men!" (¶34).
- **Mood:** communal, roguish, sanctified nonsense; convalescents inventing a rite.
- **Palette role:** full ember-gold festival; most saturated opener in P4 after c19.
- **Asset:** festival plate — the ass enthroned center wearing a fool's rose-wreath, wine-cup in hoof's reach (ugliest man giving it wine, ¶19), dancing ring of Higher Men silhouettes around it (Bruegel pageant composition), bunting arcs of ember/gold above; one dancer mid-leap quoting c13's dancer. Largest crowd art in P4.
- **Opener:** festival double-rule `art/rule-festival.svg` INSTEAD of sun-rule (sole sanctioned exception); NO drop cap (rule 7: festival voice).
- **Reading:** interrogation round ¶0–26 as quick alternating indents (comic pace); "One kills, not by anger but by laughter" (¶26) centered Cinzel display — the festival's doctrine; closing benediction ¶32–35 in Spectral italic 1.15em with festival-rule above.
- **Close:** ember-ring mini-seal.

### p4c19 — The Intoxicated Song · MIDNIGHT SONG · CLIMAX · TRUE SONG + scene (hybrid)
- **Motif/manifest:** `bell-midnight` · `class:"scene"` (CHOSEN: bell-tower spread per form map; song lyric handled in reading treatment — flag: confirm vs `song`) · `src:"art/scene-bell-midnight.svg"` (identity asset-listed).
- **Pull-line:** "‘Joy – deeper than heart’s agony: ‘Woe says: Fade! Go!" (¶46, roundelay heart).
- **Mood:** intoxicated, oracular, erotic-eternal; the book's midnight apex.
- **Palette role:** climax gold on deepened night; white-gold derivations for bell-light wedges.
- **Asset:** bell-tower spread — great bell hanging in a tower arch, sound-wedges radiating as engraved lines; below, the round midnight disc (moon + ring + bell-mouth concentric); twelve small bell dots in an arc beneath (folded into the art, NOT an end-mark glyph cycle). Most luminous scene in P4 — flat metallic gold fills, hatching via paths, no gradients-as-art.
- **Opener:** scene figure; gold roundelay stanza crowns (bell motif) introduced here.
- **Reading:** prose frame ¶0–8 calm; "O Man! Attend!" (¶9/43) as Cinzel display calls; midnight song ¶10–42 CENTERED 26–30rem Spectral italic (BODY SWITCH: Spectral replaces Newsreader per director verdict — all song measures rebuilt, same rem values); roundelay ¶43–47 as the GOLD ROUNDELAY: Cinzel-liturgical refrain lines at bold 1.5rem+ (rule 14 large-text gold passes), bell-crown above each stanza, "Wants deep, deep, deep eternity!" (¶47) as the cohort's largest verse line. No drop cap (song).
- **Close:** ember-ring mini-seal.

### p4c20 — The Sign · FINALE · lion-and-doves tableau · BOOK SEAL
- **Motif/manifest:** `lion-doves` · `class:"finale"` · `src:"art/scene-sign-lion-doves.svg"` (identity asset-listed).
- **Pull-line:** "My children are near, my children" (¶14).
- **Mood:** tearful, transfigured, released; morning after the longest night.
- **Palette role:** morning gold FULLY restored; ember gone; rose-dawn blush via solar/bone `color-mix`.
- **Asset:** finale tableau — laughing lion pressing head to a seated knee (¶12), doves swarming above (one gliding across the lion's nose, ¶13), rising sun with ray-field behind; fleeing Higher-Men silhouettes small at the cave mouth (¶16). Triptych panel 3: sun rising (c1→c10→c20). Most detailed scene in P4 — the book seal.
- **Opener:** finale-class slot; Cinzel title; pull-line; sun-rule. No overlay text (tableau carries it).
- **Reading:** dawn dialogue ¶1–9 calm; sign passage ¶10–15 with +15% leading (timelessness — "there is no time on earth for such things," ¶15); closing charge ¶21–23 ("rise up now, rise up, great noontide!") in Spectral italic 1.2em as the book's final charge. No drop cap (finale form).
- **Close:** LION-AND-DOVES special close (supervisor master) — the ONLY non-ember-ring close in P4.

---

## 6. Implementation brief (for the P4 engineer, via ZaraLeadP4)

1. Author `art/cohort-p4-honey.svg`, `art/cohort-p4-cry.svg`, `art/cohort-p4-ugliest.svg`, `art/cohort-p4-assembly.svg`, `art/cohort-p4-feast.svg`, `art/cohort-p4-harp.svg`, `art/cohort-p4-desert.svg`, `art/cohort-p4-festival.svg` (cohort-owned) + reuse identity/supervisor masters (`art/seal-part-4.svg`, `art/scene-noontide-tree.svg`, `art/scene-bell-midnight.svg`, `art/scene-sign-lion-doves.svg`, `art/emblem-bestiary-{kings,leech,sorcerer,pope,beggar,shadow,ass}.svg`, `art/rule-festival.svg`, `art/close-ember-ring.svg`, `art/close-lion-doves.svg` — confirm availability with supervisor; cohort drafts any missing bestiary emblem EXCEPT c7's ugliest, which is cohort-owned by nature). All engraved-line hand matching the Roundel (Z3); flat fills; hatching via paths; emblems ≤5KB/≤120px.
2. Author `design/cohort-p4.json` (entries per §5: `src`/`class`/`motif`/`caption` + title/cohort/rationale/palette-role/opener/reading annotations; contract §4 schema) + `design/cohort-p4.css` (unlayered; qualifies under `body[data-book="thus-spoke-zarathustra"][data-part="IV"][data-chapter="p4cN"]`; NO shared/prose/other-cohort edits; responsive 1440/820/390 + `prefers-reduced-motion` + print guards).
3. CSS-only posture: implement the `.chapter-meta::before` SVG fallback + Appendix A.0 chapter-end override NOW; declarative `#chapter-art` fill activates when v1 reader.js lands (no rework — same asset paths).
4. GOLD FIREWALL (Z1): all gold FLAT engraved line-work via SVG paths; ZERO glow discs, ZERO `text-shadow` halos on Cinzel, ZERO gradient-illustration. Luminous = REVISE.
5. CINZEL LITURGICAL (Z2): inscriptions, seals, pull-lines (via caption styling), song crowns, response lines — never body, never UI.
6. Body metrics in rem, built on Spectral 400/1.85 prose / Spectral italic songs (director verdict; Newsreader OUT). Pull-lines verbatim + ¶-cited, every one (Z4). Ember pivot EXACT at c10 (Z6). Chapter-end via sanctioned override (Z7).
7. Prototype gates before expansion: c19 + c20 openers at 1440×1000 / 820×1180 / 390×844 (+ c10 quietest-opener check, c18 festival-rule check); verify `_site` ships art + fonts + manifest (contract §11); console clean; contrast bone-on-lapis ≥10:1, gold large-text only.
8. Open flags for supervisor (from §0): c5 song-list exception; `bestiary-ugliest` motif approval; c14 motif reuse; c17/c18 shared-motif split; c19 class `scene` vs `song`; c18 class `plate` vs `emblem`; c13 margin motif prototype check.