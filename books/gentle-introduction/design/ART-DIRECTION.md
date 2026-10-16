# ART DIRECTION — A Gentle Introduction to Unqualified Reservations

Owner: GIDesigner-10. Status: APPROVED (ArtDirector verdict 2026-10-15,
Direction 1 "The Contemplative Cathedral", binding conditions GI1–GI7 —
§8). Built: SupGentleIntro-3 wave 3 — 11/11 doses, GIR1–GIR3 + GI-A2/A3
repaired, GI6-verified at 3 viewports on :8099 (see COVERAGE.md).
Companion docs: `design/directions.md` (comparison, refs, sketches),
`design/book-identity.json` (tokens for the engineer), `art/cover.svg`
(authored cover plate). Skills read via URI, no fallback.
## 1. The idea (one paragraph)

Eleven stations in a still cathedral. The Cathedral is Moldbug's own
coinage for the thing he came to anatomize, so the book's identity is
the building itself — contemplated, never collapsing (Open Letter owns
dissolution; we own stillness). The reader walks the argument in space:
outer door ajar in near-black (c1) → receding nave arcades (c4–c8) →
crossing lamp (c9) → rose light (c10) → full sanctuary (c11). One
sanctuary candle burns through every plate with a single flame grammar.
The whole book is one idea: *stone, stillness, and a light that grows.*

## 2. Typography (verified availability, registry-checked)

- **Display — Marcellus** (Google Fonts, HTTP 200 verified 2026-10-15;
  sole registry holder per GI4). Inscriptional Roman caps: solemn and
  stone-cut without Cinzel's pagan monumentality. Roles: cover title,
  chapter titles, dose numerals, TOC numerals, section labels.
  Large-only (≥1.5rem), never body, never forced all-caps.
  Stack: `"Marcellus", "Palatino Linotype", Palatino, "Book Antiqua",
  Georgia, serif`.
- **Body — Source Serif 4** 400/600 + italic (Google Fonts, HTTP 200
  verified; permitted quiet text face — voice comes from plates +
  numerals, GI4). Roles: reading prose, TOC titles, captions.
  Stack: `"Source Serif 4", Georgia, "Times New Roman", serif`.
- **Chrome — DM Sans** (shared UI voice, retained for buttons/settings/
  header meta).

Scale (major third, 1.25): cover title clamp(2.6rem, 6vw, 4rem);
chapter title clamp(2rem, 4.5vw, 2.9rem); dose numeral 1rem tracked
0.28em; body 1.3rem/1.8 (shared `--text-size`/`--leading` honored);
captions 0.95rem; seals ≤32px. Measure: prose ≤ 68ch (≤72ch absolute
ceiling, P6); centered meta block max 40ch. Engineer owes a
computed-style load check for both webfonts at prototype review.

## 3. Dark palette (six named hues; GI5 candle discipline)

| Name | Hex | Duty |
|---|---|---|
| Narthex | `#100F0D` | Page ground, plate night fields |
| Ashlar | `#1E1B16` | Elevated surfaces, plate stone mid-tone |
| Vellum | `#ECE2CE` | Primary text, candle wax, star points |
| Candle | `#DFA050` | THE light: flame, spill wedges, numeral gold end, active states, drop caps |
| Sanctuary Red | `#A83A2C` | Ember accents, dose-notch red end, p1c10 rose. Graphics-only — never body text |
| Ashen | `#9C917E` | Muted meta, secondary rules, stone highlights |

Derived tones via opacity steps of these six only — no new hues. Light
is DRAWN (stepped flat wedges, tonal mass), never blurred halos; one
flame path grammar across all 11 plates (copy the cover candle);
flame-body gradient ember→gold `#A83A2C → #DFA050 → #F4D9A0` for flame
bodies only. Sanctuary Red fails text contrast on dark and stays
graphic. Plates are FIXED across themes (O2 precedent): dark jackets on
paper are intentional; Vellum-on-light captions get a dark cartouche.

## 4. Light / sepia notes

Dark-first; light + sepia verified at prototype (GI6). Plates never
re-tint: the night front stays night on every theme. Token remap for
light/sepia: ground → warm paper `#F4EEE1` / sepia `#EFE4D0`; text →
ink `#241F16`; Candle deepens to `#9A6B24` for contrast on paper;
Sanctuary Red text-safe at `#8E2F24` on paper (large-only). TOC
dose-notches and rules keep the ember→gold arc on all themes.

## 5. Layout / composition (per book, not the shared shell — P7)

- **Cover.** Full-bleed `art/cover.svg` in `#cover-art`, ≥1/3 viewport.
  Architecture rides right-of-center; the inscriptional title block
  (Marcellus, left) overlays the calm left-third night field; author,
  rule, tagline stack beneath; actions bottom-left. The eleven
  dose-notches along the plate base MAY light with real `read[]`
  progress (book-owned JS on `reader:chapter`, cleared with supervisor).
  Phones: plate never cropped below portal + notches (GI3/P1).
- **Chapter opener.** `#chapter-art` plate (~320px desktop, ≥200px
  phones, never `display:none`) → meta block: `DOSE V · PART I` numeral
  line (Marcellus, tracked, Candle) → Marcellus title (balanced wrap,
  ≤22ch lines) → candle rule (thin Ashen line, center flame pip) →
  calm Source Serif body. No art behind prose, ever.
- **TOC.** Dispensary-of-stations ledger: dose-notch per row (that
  chapter's arc tint), Marcellus numerals, Source Serif titles, part
  subtitle as ledger head. Active row: Candle notch + Vellum title.
- **Navigation / endings.** Prev/next cards carry the neighbor's motif
  name ("Next · Dose VI — The arcade"). Chapter-end seal per contract
  A.0: `body[data-chapter]`-qualified `p:last-child::after` with
  authored `url()` art ≤32px — eleven small arch/flame seals, one per
  dose, tints from the arc (never modulo).

## 6. Chapter-variation grammar for cohorts (binding on cohort teams)

Medium (GI3, Piranesi second-state): bitten line + tonal mass, no
mid-tone murk; every plate must read as authored image at ~200px.
Action (GI1/N1, absolute): NOTHING dissolves, sheds, cracks, or comes
apart — p1c7's chapels separate; they do not ruin. Flame (GI5): the
cover candle's grammar, Candle `#DFA050`, drawn spill wedges only.
Arc (GI2): light value + architectural depth authored per chapter —
prototype review views p1c1/p1c5/p1c11 side by side and the progression
must be unmistakable.

- **Cohort A (p1c1–p1c3) — Narthex.** Outer arches, near-black fields,
  ember accents. p1c1 *narthex-door* (darkest plate: the reader at the
  threshold); p1c2 *twin-arch* (Loyalist/rebel histories side by side,
  intact); p1c3 *three-lancets* (AGW/KFM/HNU = three tall windows).
  Class: `arch`. Candle small and distant.
- **Cohort B (p1c4–p1c8) — Nave.** Receding arcades, candlelight
  spreading bay by bay. p1c4 *cornerstone* (first stone laid); **p1c5
  *westwork* — cohort flagship, the Cathedral's portrait, most
  ambitious interior plate (GI6)**; p1c6 *arcade*; p1c7 *twin-chapels*
  (separation, not ruin); p1c8 *spire*. Classes: `arch`, `plate` (c5).
- **Cohort C (p1c9–p1c11) — Crossing → Sanctuary.** Candle-dominant;
  most luminous plates. p1c9 *crossing* (reboot at the center, lamp
  lit); p1c10 *rose-window* (mandate of heaven as rose light —
  Sanctuary Red + Candle, the red's second sanctioned use); p1c11
  *sanctuary* (full light, climax; may carry Vellum fields). Classes:
  `plate`, `arch`.

Cohort outputs: `art/<motif>.svg` plates + `design/cohort-<a|b|c>.json`
entries carrying `motif` + `class` + `caption` per READER-CONTRACT §4
(supervisor merges into `design/chapters.json` sequentially). Captions
are chapter inscriptions ("Dose V · The westwork"), set in Marcellus
over a dark cartouche. Manifest plan with all 11 rationales lives in
`directions.md` §"Manifest plan".

## 7. Reduced-motion, contrast, reading rules (P6/P9)

Body contrast ≥ 4.5:1 on the composited background, measured at
prototype (Vellum `#ECE2CE` on Narthex `#100F0D` ≈ 13:1; Candle text
use ≥ 18pt or large-only). No art behind prose; drop caps Marcellus
Candle, content-warranted only. Motion: ONE orchestrated moment per
surface at most (cover: the door-light settle, ≤1.2s, once per visit;
chapters: none ambient). `prefers-reduced-motion` cuts everything
instantly; content visible after one scroll pass. Focus always visible
(Candle outline). Honors reader prefs (theme/size/leading/font/measure)
and READER-CONTRACT hooks: `body[data-book="gentle-introduction"]`,
`body[data-chapter]`, `body[data-art]`; NO `reader-*` classes; no
modulo/hash/paragraph-count styling as art, anywhere.

## 8. Binding conditions GI1–GI7 (folded, not just cited)

GI1: §6 action line + p1c7 brief. GI2: §6 arc + side-by-side test.
GI3: §6 medium rule + 200px floor. GI4: §2 Marcellus/Source Serif roles.
GI5: §3 flame grammar + drawn-light rule (cover.svg already complies:
stepped wedges, exact-eleven notches verified in DOM). GI6: prototype =
cover + p1c1 + p1c5-flagship + p1c6 + p1c11 at 1440×1000 / 820×1180 /
390×844, dark + light + sepia. GI7/benchmark (USER-FEEDBACK.md): judged
beside the homepage through this book's stone-still identity — quiet
doses earn beauty via numerals, rules, captions, seals, and controls.

## 9. Title-swap test (P2 — must FAIL for other books)

Swap in *Infinite Jest* and the building lies (needs the bureaucratic
shout); *Zarathustra* (needs solar liturgy, not stone stillness);
*Twilight* (needs struck bronze); *Open Letter* (needs the facade
mid-dissolution + blackletter pamphlet war — ours is contemplative by
binding law). The system also suits a monastic history — none in the
catalog. It fits THIS book best because the Cathedral is Moldbug's
central coinage and the narthex→sanctuary walk is the book's
poison→restoration argument built in stone.

## Cover checks (evidence, 2026-10-15)

`art/cover.svg` viewed rendered standalone at 800px + 390px widths via
local proof server (127.0.0.1:8895, proof harness outside the repo —
no stray files in the book dir). Two proof rounds: fixed towers too
dark (→ `#211C15` + brighter ashlar strokes), spill wedges buried under
steps (reordered: steps → portal → wedges over), dose-notches hidden
behind ground rect (moved after ground; DOM count verified = exactly
11 fills `#A83A2C…#DFA050` ember→gold). Plates hold at small scale
(GI3); left third calm for the title block.
