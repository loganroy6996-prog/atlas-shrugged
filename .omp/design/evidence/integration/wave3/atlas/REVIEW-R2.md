# Wave-3 Live Review — Atlas Shrugged (AT9 acceptance) — REVISE (1 blocking plate-crop defect)

Reviewer: FinalValidator-2. Date: 2026-10-15 ~13:30 UTC. Requested by Main (priority).
URL: `http://127.0.0.1:8099/books/atlas-shrugged/` (fresh loads throughout).
AT9 scope covered: cover + p1c8 + p2c7 + p3c7 opener/mid + p3c10 + TOC at 1440×1000 / 820×1180 /
390×844, PLUS 3 census-only samples (p1c3, p2c4, p3c5 — one per part, all viewed at 1440).
Screenshots in this directory (all viewed).

## Verdict: REVISE — one blocking defect: the fixed-height plate slot crops every signal plate

### What is superb (observed, and it is a lot)

- THE SIGNAL identity (Barlow Condensed + Crimson Pro + Space Mono, ALL shipped as local woff2
  and verified loaded + applied via computed styles) is unmistakable: three-aspect part system
  (CLEAR green / CAUTION amber / STOP red + 2 intruder chapters), SIG captions ("SIG III-07 ·
  37525 WORDS · THE ADDRESS"), gantry cover plate, timetable meta, timetable TOC with per-part
  aspect dots + words/mins, Galt-spine progress rail on p3c7 mid-reading. Title-swap: pass.
- 30/30 manifest entries live, all files + symbols resolve (computed); 30/30 observed activating
  with zero console errors; F15 zero 404s over 200 requests; zero overflow at all widths.
- Treatments vary by class (computed census): 13 grand / 6 std / 5 compact / 3 monumental+inscr /
  2 valley / 1 speech — the R1 "repeated ornament" risk is structurally answered.
- TOC filter (galt→p1c8+p3c7), empty state, Escape; settings all-rows-apply (size/leading/font/
  measure); j/k with scroll reset; progress bar 30.3%; resume shelf ("CHAPTER VII · …" single ✓);
  reduced-motion honored; header focus solid 2px; one h1; dark-first; fonts local (no hotlinks).
- Contrast (my meter, dark): body/title 15.43, part 9.50 (clear) / 4.63 (stop — see notes),
  sub 6.39, num 10.42, SIG captions 9.50/8.72/4.63. All body/small text passes; see item 2 note.

### Required fixes

1. **ISSUE (BLOCKING): the plate slot's fixed height + `slice` cropping decapitates the plates — every chapter shows only the BOTTOM HALF of its artwork.**
   WHERE: `theme.css` `#chapter-art svg { height: 9rem }` (12/13/7rem variants) + the inlined
   `<svg preserveAspectRatio="xMidYMid slice">` (reader.js splices children but the plates were
   authored as full 1200×300 scenes).
   EVIDENCE (observed + source pairs):
   - p3c7 Galt address (viewed 1440/820/390): plate shows ONLY the dial's bottom rim + an empty
     screen box; source contains a full radio-dial scene (ticks, 7:51 hands, mono text lines) +
     screen. The dial face — the plate's subject — is cropped away.
   - p1c8 (viewed 1440/390): shield + ribbon + aspects render but cramped; the 1200×300 scene is
     squeezed into a 144px strip.
   - p1c3 (viewed 1440): plate reads as abstract gray blocks + one green lamp; source is a full
     cellar/temple SECTION (barroom arch, booths, columns, lamps) — the top 60% (the room) is gone.
   - p3c5 (viewed 1440): glass cube + lantern + rings float in void; source's track-fan base +
     flap fragment are cropped; "LN-193 HELD" tag (visible!) proves text elements survive only
     when placed low in the scene.
   - Measured: svg boxes 1440×144/112/192/208 — a 1200×300 scene (4:1) rendered at 1440 wide
     SHOULD be 360px tall to show fully; at 144px only ~40% shows, and `slice` centers the crop
     so both top AND bottom authored content is lost (worst on plates with high subjects).
   SEVERITY: blocking (30/30 openers show cropped art; the Galt address — the book's climax
   chapter — shows a decapitated dial).
   FIX (SupAtlas-3, book-owned): EITHER (a) let plates show fully — remove the fixed svg height
   (or set `height:auto`) with `preserveAspectRatio="xMidYMid meet"` so the full 1200×300 scene
   renders (accept taller plates; the grand/monumental/compact CLASS system already varies
   heights and can be retuned to full-scene proportions); OR (b) re-author all 30 plates as
   TRUE 1440×144-class banner strips (subjects composed inside the visible band). (a) is
   strongly preferred: the authored scenes are good (the p3c7 dial, p1c3 section, p3c5 cube are
   real compositions) — they deserve to be SEEN. Do not "fix" by shrinking subjects into the
   strip; show the scenes. Re-verify: p1c3 + p3c7 + p3c5 at 1440 + 390, full scenes visible
   (dial face, cellar room, track fan all in frame).
2. **NOTE (not a defect — recorded): stop-red small text at 4.63:1.** The part line + SIG caption
   on stop chapters meter 4.63:1 (11.52/10.88px, needs 4.5:1) — PASS, but with only 0.13 margin.
   No action now; Final will re-meter. (The valley/intruder chapters correctly light the intruder
   lamp — p3c10 part line meters green 9.50 ✓.)

### Interaction notes (all pass, details for the record)

- Settings theme switching: "light" sets `data-theme` + tokens correctly, BUT shared `reader.js`
  `applyPrefs` writes the OLD computed `--bg`/`--text` as body INLINE styles (lines 215–217) at
  click time — the inline style then pins the old ground until reload. This is a SHARED defect
  (ReaderLead via Main — file as integration item: inline-pin races the token swap), NOT an Atlas
  defect: Atlas ships correct per-theme tokens for all 8 themes (verified in source). Dark-mode
  acceptance (the relaunch's required default) is unaffected.
- Resume fidelity: stored scrollY 29996 → restored 877 on p3c7. Same plausible-scroll family as
  WtP (restores chapter + in-chapter position, not exact px). Not a defect.
- p2c7's part line meters GREEN while its `--accent` is amber — the part line uses a fixed green
  (design choice: part "kicker" stays CLEAR-green while SIG caption + rule carry the part aspect).
  Coherent in screenshots; not a defect. The rail-legend line ("Track — clear at the points")
  confirms the grammar is intentional.
- `as-inscription` nodes: none observed on sampled chapters (class exists for inscr treatments —
  R3 to confirm p1c7/p3c2/p3c8 inscriptions render).
- The 390 p3c10 opener (viewed): TT-engine beam + headlight + mono caption + green drop-cap "D" —
  excellent small-screen composition WITHIN the cropped band (which makes item 1 more poignant:
  even cropped, the system sings; uncropped it will be superb).

## R3 requirements

Item 1 fixed + rebuild, then: p1c3 + p1c8 + p2c7 + p3c5 + p3c7 + p3c10 at 1440 + 390
(full-scene verification), one inscr chapter (p1c7/p3c2/p3c8), Tab-through + A6 snapshot,
vellum/sepia meter (post shared inline-pin fix, or reload-based). That closes the book.
