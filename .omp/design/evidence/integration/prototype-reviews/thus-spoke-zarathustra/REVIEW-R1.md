# Prototype Review R1 — Thus Spoke Zarathustra (Solar Gospel P1) — REVISE

Reviewer: FinalValidator. Date: 2026-10-15. Prototype: `books/thus-spoke-zarathustra/design/prototype-p1.html`
(grammar proof on live text: Prologue scene + Tree emblem + Bestowing Virtue finale).
Screenshots (viewed, this dir): sec0-prologue-1440/390, sec1-1440, sec2-1440.

## Verdict: REVISE — liturgical system is beautiful; line-art draftsmanship must rise to the benchmark

What works: the Solar Gospel grammar (lapis night `#0A0E21`, flat engraved gold `#E8A93D`, Cinzel
liturgical + Spectral body, epigraph-with-§ opener, gold drop-cap, sun-seal end mark) is coherent,
book-specific (title-swap: pass — prophetic solitary sun vs Gay Science's choral danced sun, and the
register division stated in GS's direction holds), and calm to read. Contrast (observed): title and
body both 17.11:1. Fonts verified loaded (Cinzel 600 + Spectral 400, observed). Phone stacks cleanly.

## Required fixes

1. **ISSUE: the Prologue triptych's flanking line drawings read as clip-art, not engraving.**
   WHERE: sec0 scene art (viewed 1440 + 390): the SMT→rope-dancer→jester triptych combines a decent
   sun/mountain opener with a center panel whose rope-walker is a stick figure and a right panel
   (jester/tower?) that is illegible at both widths. The Tree emblem (sec1) and the Bestowing Virtue
   sun-staff finale (sec2) are both markedly better drawn — the finale's serpent-coiled staff with
   sun disc is the quality bar. SEVERITY: major (the book's FIRST opener; benchmark comparison will
   punish it hardest). FIX: redraw the Prologue art to the sec2 standard — either three refined
   emblems (sun-seal + rope-bridge + staff) or one composed scene; the stick-figure walker must go.
   Re-show at 1440 + 390.
2. **ISSUE: static grammar proof, not the reader (same structural note as GS/Fountainhead R1).**
   WHERE: no reader.js/TOC/settings/manifest fill. SEVERITY: major (process). FIX: R2 wires P1
   end-to-end (real page + chapters.json + slot fill + real TOC incl. the 81-chapter drawer) and shows
   the Prologue + one emblem chapter + parts II–IV opener grammar (how does Solar Gospel vary across
   parts? If every part is lapis+gold+Cinzel with a different emblem, state that as the system and
   show 4 part openers proving non-repetition).
3. **ISSUE: epigraph §-citations need a truthfulness check.**
   WHERE: "§57" (Prologue), "§4" (Tree), "§51" (Bestowing Virtue) epigraph tags. EVIDENCE: I have not
   verified these numbers against the text (are they Kaufmann section numbers? word counts? invented?).
   SEVERITY: minor-but-blocking-if-wrong (a wrong citation is a truthfulness failure, not a taste note).
   FIX: supervisor states the citation scheme + verifies all three numbers against the chapter JSON;
   I spot-check at R2. If the numbers are decorative, remove them — never invent apparatus.

## Notes

- End-mark sun-seal (viewed, all sections): quiet, consistent, good.
- Drop-cap gold W/Z on Spectral body: confident, legible, keep.
- The GS/Zarathustra sun collision is handled correctly on this side too (solitary prophetic vs choral).
- No chapters.json / cover.svg / theme integration yet — tracked in manifest-tracking.md.

## R2 requirements

Wired P1 slice (real page + manifest + slot fill + real TOC) showing the redrawn Prologue, one emblem
chapter, and the part-variation system (P1–P4 openers or a stated emblem-only system with 4 proofs),
at all three widths; citation scheme stated + verified; TOC drawer + settings screenshots.
