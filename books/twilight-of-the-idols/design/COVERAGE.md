# Twilight of the Idols — coverage & review ledger (supervisor-owned)

Book: Twilight of the Idols (Friedrich Nietzsche, 1889). Slug `twilight-of-the-idols`.
Identity: STRUCK BRONZE / sounding-out (ART-DIRECTION.md). Supervisor: SupTwilight-3.
Last updated: 2026-10-15 (wave-3 integration).

## Chapter coverage (12/12 — every TOC id)

TOC: single part `part-1` ("How to Philosophize with a Hammer"), p1c1–p1c12.
Source of truth: `data/toc.json` (12 chapters, verified).

| Ch | Title | Cohort | Motif / symbol | Rings (T1) | Reading treatment | Status |
|---|---|---|---|---|---|---|
| p1c1 | Foreword | hammerfall | sounding-fork | 1 | Shadow-bar eyebrow, numeral I, signature close, book ring seal | ✅ live + viewed 1440/820/390 |
| p1c2 | Maxims And Barbs | hammerfall | fanned-barbs | 2 | Whisper title (TR5), 30 stanza numerals, Formula finale | ✅ live + viewed 1440 |
| p1c3 | The Problem Of Socrates | hammerfall | hemisected-mask | 3 (clips inlined, R2-7) | Pivot air + arc dividers at P7/P12 | ✅ live + viewed 1440 |
| p1c4 | 'Reason' In Philosophy | hammerfall | mummy-case | 4 | Proposition tablets P7/P8/P9 + merged-caption tag | ✅ live + viewed 1440 |
| p1c5 | How the Real World Finally Became a Fable | idolsmasher | noon-collapse / idol-fable-noon | 5 | Poster, two-voice split (JS spans), cadence strip, noon end seal | ✅ live + viewed 1440 |
| p1c6 | Morality As Anti-Nature | idolsmasher | shears-flame / idol-shears-flame | 6 | Catalogue litany P5, flame end seal | ✅ live + viewed 1440 |
| p1c7 | The Four Great Errors | idolsmasher | fourfold-knot / idol-four-errors | 7 | Ruled plates + docked phase discs + Cinzel heads (JS split), quarters seal | ✅ live + viewed 1440 |
| p1c8 | The 'Improvers' Of Humanity | idolsmasher | veil-tablets / idol-veil-tablets | 8 | Centred maxim P2, margin sigils P3/P5/P7/P8, fraus seal | ✅ live + viewed 1440 |
| p1c9 | What The Germans Lack | untimelydusk | dancing-pen | 9 | Yea-saying turn divider P8, centred finale P10, dusk seal | ✅ live + viewed 1440 |
| p1c10 | Reconnaissance Raids of an Untimely Man | untimelydusk | skirmish-gallery | 10 | 22 raid pips (4 families + 6 movement heads) via JS tags, signature close | ✅ live + viewed 1440 (opener + raid zones) |
| p1c11 | What I Owe The Ancients | untimelydusk | dionysian-mask | 11 | Verdict stone P3, Dionysian close air P7, dusk seal | ✅ live + viewed 1440 |
| p1c12 | The Hammer Speaks | untimelydusk | diamond-over-coal | 12→diamond | Poster end-state: centred verses, bronze inscription P7, verdict P8 | ✅ live + viewed 1440 (opener + end) |

Manifest: `design/chapters.json` v1 — cover + 12/12 entries with `{src, symbol, class, motif, caption}`.
All symbols resolve; all ring counts observed live 1..12 (p12 = 6 circles + 6 diamonds).
Art delivery: openers via reader.js `{src,symbol}` child-splice; seals/pips/dividers as
data-URI SVG (F1: zero file-fragment `url()` ships — grep-proven).

## Cohort deliveries

| Cohort | Chapters | Agents (real spawns) | Deliverables | Verdict |
|---|---|---|---|---|
| hammerfall | p1c1–p1c4 | prior-wave lead + designer/engineer/validator | art/hammerfall.svg, design/hammerfall.{json,css} | PASS (audit §1–§5) + supervisor R2-1/R2-7/I2 repairs |
| idolsmasher | p1c5–p1c8 | prior-wave lead + designer/engineer/validator | art/idolsmasher.svg, design/idolsmasher.{json,css} | PASS (audit §1–§5) + supervisor R-U1/F1 data-URI repair |
| untimelydusk | p1c9–p1c12 | SupTwilight-3.TwilightDuskLead → DuskDesigner/DuskEngineer/DuskValidator | art/untimelydusk.svg (prior), design/untimelydusk.{json,css} (wave-3) | PASS (cohort validator, screenshots @ :8472) + supervisor F1 review |
| assembly gate | all | 5× spawn attempts failed (job ceiling 16); supervisor ran gate inline | 20 viewed screenshots + live census (this ledger) | no independent verdict claimed — FinalValidator R3 requested |

## Review ledger

| Round | Reviewer | Scope | Verdict |
|---|---|---|---|
| Direction | ArtDirector | ART-DIRECTION + identity + cover | PROVISIONAL PASS (T1–T6 binding) |
| Prototype R1 | ArtDirector | 13 evidence shots (slots empty) | CONDITIONAL PASS (TR1–TR6; TR2/TR3/TR5/TR6 verified, TR1/TR4 gated) |
| Cohort audit | TwilightCohortAudit | source census, ring counts, selectors, url() risk, contract | REVISE (R-U1, R-M1, R-I1, R-I2, R-D1, R-TR1+M3, R-F1) — all closed by supervisor/Dusk |
| R2 wired | FinalValidator-2 | :8099 live, 12/12 activation, 3 viewports | REVISE items 1–7 (1 fork geometry, 2 shell, 3 resume echo, 4 title echo, 5 contrast, 6 header targets, 7 mask clips) |
| R3 wired | FinalValidator-3-2 | :8099 live, cover + 6 openers + TOC/settings at 3 widths | CONDITIONAL PASS — all 7 R2 items disposed (1/2/3/4/5/7 fixed verified live, 6 carried shared); 4 shared items carried (t-key pollution, 36px headers, TOC-drawer role, F13 hook) |

R2 disposition: items 1/2/4/5/7 fixed book-owned (verified live, this
ledger); item 3 fixed in shared reader.js by Main (showCover dedupe;
supervisor reverted the book-side span hiding and verified "The Four Great
Errors" paints once); item 6 header targets remain shared-owned.

## R3 evidence (viewed by supervisor, live :8099)

- Cover: Cinzel computed, plate + whisper caption, resume shelf deduped;
  cover-1440/820/390 screenshots (all genuine viewports, hash-verified).
- Openers: all 12 viewed at 1440 (numerals I–XII, captions, honest rings
  1..12 observed in live DOM); p1c1 also at 820/390 (no overflow, ring
  bbox inside frame, measured).
- In-reading art: p1c5 two-voice split (3/3 stages + INCIPIT) + noon seal;
  p1c7 5/5 plate heads + docked phase discs; p1c10 22/22 raid tags + pips
  paint (zones 01/03/06 viewed); p1c4 merged-caption seal re-anchored;
  p1c12 poster end + verdict seal (1440 + 390).
- Contrast (cache-disabled, UI-driven): meta-sub/body —
  dark 5.26/15.08, nocturne 6.68/14.30, verdant 7.33/16.77,
  oxblood 5.84/15.40, candlelight 5.82/16.11, sepia 6.84/13.01,
  light 6.84/15.06, slate 6.72/14.58. All ≥4.5:1.
- Functional: TOC filter (1-hit + no-match empty state) / jump / Escape,
  settings apply, prefs persist across reload, j/k, next/prev, resume
  restore, zero page/console errors, no overflow at 3 widths.
- Static proofs: theme.css braces 257/257; node --check JS; JSON parses;
  zero `url("*.svg#*")` (28 data-URIs incl. 5 docked duplicates + 3
  whole-file seal refs); SVGs XML-parse; no reader-* minted; no !important.
- Evidence set: 20 webp in design/evidence/ (cover + 12 openers + raid
  zones + ends at 1440; cover + p1c1 at 820/390; p1c12 end at 390),
  all viewed, all hash-unique; R1 prototype shots archived in
  design/evidence/r1-prototype/.
## Known limitations (honest)

- G4 (p1c6 per-"Or" hanging lines) stays in disclosed pure-CSS form (no JS split).
- Emblems on light/sepia grounds: bone line-work is low-contrast by design
  (dark-first identity); structure (bronze/ember) survives. Not a defect per T5.
- p1c2/p1c4/p1c6/p1c8/p1c9/p1c11 end-seals verified via computed content (data-URI),
  not all screenshotted individually; p1c5/p1c10/p1c12 seals viewed.
