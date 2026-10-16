# ART-DIRECTION — An Open Letter to Open-Minded Progressives

Status: ADOPTED by SupOpenLetter-2, 2026-10-15. Identity: OlIdentityDesigner (Direction 1
Black-Letter Broadsheet APPROVED by ArtDirector with binding conditions O1–O6 —
`.omp/design/critiques/open-letter.md`). Per READER-CONTRACT v1.1 §10, this file's
presence freezes the book against regeneration.

Supervisor amendments at adoption: (1) canon locks §7 for symbol/motif/end-seal ids,
captions, salutation flags (resolves Sovereign/Doubt/Cathedral/Restore divergences —
draft ids WIN except p1c7 primary + p1c8 rationale fix noted below); (2) p1c7 primary
LOCKED as crater-cyanotype (Sovereign keeps camouflage-mask detail as secondary device
inside the plate, crater inset→primary swap); (3) p1c8 rationale CORRECTED: diptych
labels use c8's nouns (reset≠revolution / single-step / 36%), never c13's
apoptosis/necrosis vocabulary; (4) prototype-first order per O1/O6 + R2: cover + chs
1/3/5/9/10/14, ch 9 reviewed FIRST, cohorts expand only after prototype PASS.

## 1. The idea in one paragraph

*The Black-Letter Broadsheet.* The book is set as a forbidden late-night pamphlet series: a blackletter
masthead, engraved Gothic plates, printer's ornaments, wax-and-stamp seals, and one redaction bar per
spread — the serial the Cathedral would pulp. Every cohort plate shows an institution visibly *coming
apart into printed columns*; the reading body itself stays calm Garamond on night ink for the full
~10-hour read.

## 2. Type system (all verified on Google Fonts 2026-10-15)

| Role | Family (fallback) | Weights/styles | Use |
|---|---|---|---|
| Display | UnifrakturCook (fallback: `Cloister Black, Old English Text MT, serif`) | 700 only | Cover title, chapter titles, TOC book title. Large only (≥2rem); never body, never UI. |
| Body | EB Garamond (fallback: `Cormorant Garamond, Palatino Linotype, Georgia, serif`) | 400, 500, 600 + 400 italic | All prose, quotes, captions, cover tagline. Replaces Cormorant as the reading face (warmer, sturdier at 20px+). |
| Data | IBM Plex Mono (fallback: `ui-monospace, SFMono-Regular, Menlo, monospace`) | 400, 500 | Real data ONLY: chapter numerals, word counts, datelines, `No.` ledger line, stamp text. Never decorative eyebrows. |

Scale: cover title `clamp(3rem, 9vw, 5rem)` blackletter, line-height ≥1.06 (ArtDirector guard — never
1.02); chapter titles `clamp(2rem, 5.5vw, 3rem)`, line-height ≥1.06, sentence-case, max 22ch balanced
wrap; salutation line Garamond 500 1.15em with left cockade (O3 chapter list only); body `1.05rem/1.85`;
folio line 0.72rem mono, letter-spacing +0.14em. Measure: body 62ch, titles 22ch. Load via Google Fonts
`<link>` in owned `index.html`; system fallbacks above are mandatory and the offline fallback stack
must be verified to still read (ArtDirector answer a); the designed per-title fallback is EB Garamond
600 small-caps at the same scale.

## 3. Palette (dark-first; plates fixed across themes)

Ink (default dark) tokens:

| Name | Hex | Role |
|---|---|---|
| Night Ink | `#0D0B09` | `--bg` |
| Press Black | `#141210` | `--bg-elevated`, slot grounds |
| Impression | `#1E1A15` | `--bg-soft`, opener card wash |
| Newsprint | `#EDE2CE` | `--text` |
| Dim Type | `#A89A80` | `--text-muted` |
| Ash | `#6E6252` | `--text-faint` |
| Oxblood | `#7E2A22` | `--accent` fields, seals, large shapes |
| Signal Red | `#D64533` | small accents only (rules, end-mark, 1 motif/chapter) — never large fills |
| Gilt | `#C9A227` | `--copper`: rules, numerals, seal edges, hatch lines |
| On-Acct | `#170C08` | `--on-accent` |

Cohort palette roles: OL-DOUBT gilt-dominant (star-map lines, map furniture); OL-SOVEREIGN
newsprint-dominant (ledger paper, exchange marble); OL-CATHEDRAL oxblood-dominant (the facade at night,
most saturated plates in the book); OL-RESTORE ember-on-ink (signal accents + gilt on near-black).
Non-dark themes: plates stay FIXED (real jackets don't change with room lighting); type/background
tokens re-ink per theme; Signal Red darkens to `#B33A2B` on light grounds for contrast.
Contrast floor: Newsprint on Night Ink ≈ 13.5:1; Dim Type ≈ 5.4:1 (large/secondary only); Gilt on Press
Black ≈ 5.9:1 (rules/numerals ≥3:1 required, met); Signal Red `#D64533` MUST meter ≥4.5:1 wherever it
touches text (ArtDirector answer c — enforced, no exceptions); Oxblood `#7E2A22` large fields must not go
muddy on Press Black — prototype proves (ArtDirector answer c; validator MUST re-check BOTH composited
per RELAUNCH §D).

## 3a. Per-cohort medium lock (Main ruling via SupOpenLetter-2, 2026-10-15 — BINDING)

At most ONE cohort keeps pure line-engraving. Locked crafts (cohorts conform at Phase 2):

| Cohort | Chapters | Locked medium | Notes |
|---|---|---|---|
| OL-DOUBT | p1c1–p1c4 | Painted scenery + tear | Unchanged, non-engraving: star-map/canvas painting that physically tears |
| OL-SOVEREIGN | p1c5–p1c7 | Blueprint / schematic (white-line technical drawing on deep Chart-sea ground) | Suits clean-room mechanism design (p1c6 keys/circuits); p1c5 chart = surveyor's blueprint, p1c7 camouflage = specimen cyanotype |
| OL-CATHEDRAL | p1c8–p1c10 | Tudor-inventory line-engraving (warrants, seals, ledgers, guilloche) — the ONE engraving cohort | Textual claim strongest: p1c9 names the dissolution-of-the-monasteries precedent |
| OL-RESTORE | p1c11–p1c14 | Red-ink + blackletter proclamation craft (chancery broadsheet) | Proclamation desk, rule tablets as posted bills, seals in Signal Red on Press Black — suits programmatic content, distinct from Cathedral's inventory engraving |

The book cover (`art/cover.svg`) remains the shared engraved facade — the reader meets pure engraving
exactly twice: the cover and the Cathedral cohort. `art/motifs.svg` stays the cross-cohort device sheet
(seals, rules, cockade, end-marks) in the shared gilt/oxblood/ink vocabulary.

## 4. Composition grammar (opener system)

Anatomy of every chapter opener (desktop ≥1024px; phone stacks centered):

1. `#chapter-art` slot: cohort plate in the cohort's LOCKED craft (§3a), full-bleed to `--reader-max` +
   8rem, height 380–460px (ch 9: 520px FLAGSHIP per O1 — prototype review opens ch 9 first; it must
   dwarf its siblings in ambition), plate scene + HTML caption (`Figure IX · …`). Plates FIXED across
   all 8 themes incl. Vellum (O2 — dark plates on paper must stay elegant; captions re-ink, art doesn't).
2. Folio line (mono): `CH.IX · 7,767 WORDS` — left-aligned desktop, centered phone. (Plex folio-data
   grant O5: numerals/counts/datelines only, small-scale; registry now closed.)
3. Title: UnifrakturCook 700, sentence-cased book title, line-height ≥1.06, max 22ch balanced wrap,
   left desktop / centered phone, no accent-word coloring, never forced uppercase. Fallback: if any of
   the 14 titles scans as texture at 390px, that title takes the designed fallback — EB Garamond 600
   small-caps at the same scale — kept designed, not improvised (ArtDirector answer a).
4. Engraved rule: gilt double-rule + fleuron center (from `motifs.svg#rule-engraved`), 12rem wide.
5. Salutation treatment (O3 — EXACT, supervisor-audited against chapter JSON 2026-10-15, CORRECTED):
   applies ONLY to opener salutations in p1c4 (mid-sentence P0), p1c7, p1c8, p1c9, p1c10, p1c11, p1c12,
   p1c13, p1c14. Designer's earlier list wrongly included p1c1 (question, not salutation), p1c3 ('Okay,
   open-minded progressives' — plural address, not the salutation), and p1c5/p1c6 (p1c5 none; p1c6 salutes
   once at P3, mid-argument, not the opener). NEVER p1c1/p1c2/p1c3/p1c5/p1c6. Treatment: p1c10–p1c14
   (leading 'Dear open-minded progressive,') get Garamond 500 1.15em + 1.1em white-cockade margin glyph;
   p1c4/p1c7/p1c8/p1c9 (mid-sentence 'dear open-minded progressive') get the margin cockade WITHOUT the
   Garamond-500 line treatment. Never decorate a non-saluting opener.
6. Redaction bars (O4): at most ONE per spread; each MUST redact real chapter content (a name, date, or
   number from the argument — e.g. ch 1's 'Somaliland', ch 9's '1924', ch 10's Receiver) — decorative
   black bars fail review.
7. Body: calm justified Garamond (keep current justification + hyphenation), drop cap retained but
   re-inked: initial in Oxblood with gilt keyline (no gradient wash).
8. End-mark: per-chapter `end_seal` from `chapters-draft.json` (A.0 `url()` seal ≤32px, layout-neutral);
   replaces the generic fleuron.

Cover: full-viewport plate (`art/cover.svg`, 1600×1000) behind/above the masthead: the facade dissolving
into columns, cockade seal on the portal, blackletter title over the lower third, mono folio line
(`FOURTEEN CHAPTERS · 121,604 WORDS · MMVIII`), gilt rules. TOC drawer: mono roman numerals in gilt,
chapter titles in Garamond; active row gets oxblood left seal-bar.

## 5. Illustration medium and signature

Hand-authored SVG in FOUR locked crafts (§3a), one per cohort — the book's shared grammar is the
*dissolving institution* (each plate's architecture sheds printed matter), but the craft differs:
painted+tear (Doubt), blueprint (Sovereign), Tudor-engraving (Cathedral = the ONE engraving cohort),
red-ink proclamation (Restore). Cover remains the shared engraved facade. Explicit bans:
gradient-filled shapes as the primary modeling device, stock/hotlinks, text baked into art (all
lettering is HTML), generic card grids.
Signature device: *the dissolving institution* — each plate's architecture sheds printed columns.
Second signature: *the white cockade* (Jacobite badge) as the book's seal — cover portal, ch 3 opener,
ch 13 close, TOC active marker.
ACTION LINE vs Gentle Intro (ArtDirector condition): Gentle Intro's Cathedral is contemplative
architecture (nested arches, candle); Open Letter's is architecture MID-DISSOLUTION. Static Gothic vs
Gothic coming apart — every Open Letter plate must show the coming-apart action, never a serene facade.

## 6. Motion (one orchestrated moment per opener)

Plate fades + rises 12px over 1.1s `ease-out` on `reader:chapter` fill, then holds (no loop, no parallax,
no scroll-linked effects). Cover: cockade seal stamps in once (scale 1.06→1, 0.5s) after plate settles —
COVER ONLY, ONCE PER VISIT: the stamp MUST NOT replay on chapter navigation (ArtDirector answer c).
Focus-visible rings: 2px gilt. `prefers-reduced-motion`: everything cuts instantly. No per-paragraph
reveals, no hover choreography inside the reading body.

## 7. Chapter manifest (CANON — also merged into `design/chapters.json`; full rationale in `design/chapters-draft.json`)

Medium per chapter follows the §3a lock (DOUBT painted+tear / SOVEREIGN blueprint / CATHEDRAL
Tudor-engraving / RESTORE red-ink proclamation).

| Ch | Title | Cohort | Opener symbol | End seal | Opener note |
|---|---|---|---|---|---|
| 1 | A Horizon Made of Canvas | DOUBT | `oldoubt/p1c1-tearing-canvas` | `end-torn-edge` | Painted star-map whose horizon tears into columns |
| 2 | More Historical Anomalies | DOUBT | `oldoubt/p1c2-anomaly-table` | `end-specimen-pin` | Painted cabinet of curiosities: tilted specimen frames |
| 3 | The Jacobite History of the World | DOUBT | `oldoubt/p1c3-cockade` | `end-white-rose` | White cockade large; Stuart rose seal |
| 4 | Dr. Johnson's Hypothesis | DOUBT | `oldoubt/p1c4-putney-sheet` | `end-devil-tail` | Torn painted Putney-debates broadsheet, first-Whig fleuron |
| 5 | The Shortest Way to World Peace | SOVEREIGN | `olsovereign/p1c5-survey-chart` | `end-meridian-tick` | Surveyor's blueprint chart + treaty columns |
| 6 | The Lost Theory of Government | SOVEREIGN | `olsovereign/p1c6-clean-schematic` | `end-key-tooth` | Clean-room schematic: keys, circuits, grid |
| 7 | The Ugly Truth About Government | SOVEREIGN | `olsovereign/p1c7-crater-cyanotype` | `end-crater-ring` | Beltway crater as specimen cyanotype |
| 8 | A Reset Is Not a Revolution | CATHEDRAL | `olcathedral/p1c8-eagle-warrant` | `end-eagle-feather` | Engraved eagle warrant; reset-vs-revolution diptych |
| 9 | How to Uninstall a Cathedral ★ | CATHEDRAL | `olcathedral/p1c9-dissolution` | `end-fallen-keystone` | FLAGSHIP Tudor-engraved dissolution inventory, 520px plate |
| 10 | A Simple Sovereign Bankruptcy Procedure | CATHEDRAL | `olcathedral/p1c10-receivers-ledger` | `end-ledger-seal` | Engraved balanced balance-sheet of the Republic |
| 11 | The Truth About Left and Right | RESTORE | `olrestore/p1c11-posted-diptych` | `end-janus-dot` | Red-ink posted-bill diptych, Q-virus seal |
| 12 | What Is to Be Done? | RESTORE | `olrestore/p1c12-dam-broadside` | `end-sluice-mark` | Proclamation broadside: dam wall vs. torrent |
| 13 | Tactics and Structures of Any Prospective Restoration | RESTORE | `olrestore/p1c13-pilots-patent` | `end-trust-knot` | Pilots' patent + trust seal in red ink |
| 14 | Rules for Reactionaries | RESTORE | `olrestore/p1c14-commission` | `end-closing-cockade` | Red-ink commission scroll; closing cockade |

Cohort file map: `art/oldoubt.svg`, `art/olsovereign.svg`, `art/olcathedral.svg`, `art/olrestore.svg`
(each exposing one `<symbol>`/`<g id>` per chapter per the symbol keys above) + `art/cover.svg` +
`art/motifs.svg` (this designer's deliverables; end-seal symbols live in `motifs.svg`) +
`design/<cohort>.{json,css}` per cohort + merged `design/chapters.json`.

## 8. Implementation brief for the engineer (via supervisor)

1. Slots: rely on READER-CONTRACT v1.1 `#cover-art`/`#chapter-art` injection + `design/chapters.json`
   manifest (`src` under `art/`, `symbol` naming the `<symbol>`/`<g id>` per A.2 — NO fragment URLs,
   `class` treatments, `motif`→`body[data-art]`, `caption` figcaptions). Cohort art files expose one
   addressable `<symbol>`/`<g id>` per chapter (see `chapters-draft.json` symbol keys); supervisor merges
   cohort JSON sequentially.
1b. Chapter-end seals (sanctioned A.0): per-chapter `body[data-chapter]`-qualified override of
   `.chapter-text > p:last-child::after` carrying authored SVG `url()` content ≤32px, layout-neutral.
   End-seal assignments live in `chapters-draft.json` (`end_seal` per chapter → `motifs.svg` symbol).
2. Treatments (CSS classes on slots): `.plate-flagship` (ch 9, 520px), `.plate` (standard 380–460px),
   `.plate-compact` (phone, 240px), `.seal-row` (salutation cockade + folio seal).
3. Fonts: add the Google Fonts link (UnifrakturCook 700, EB Garamond 400/500/600+italic, IBM Plex Mono
   400/500) to owned `index.html`; set `--font-serif/--font-sans` tokens; keep fallbacks.
4. Tokens: set the §3 hexes for the dark theme block; map the other 7 theme blocks (plates fixed).
5. Per-chapter CSS keys off `body[data-chapter="p1cN"]` + `body[data-art="…"]` — never generic `:nth-child`.
6. Accessibility: slots stay `aria-hidden`; captions are real `<figcaption>` text; contrast re-verified
   composited; reduced-motion cuts; keyboard/focus unchanged from shared reader.
7. Validator views (O6): cover + chs 1, 3, 5, 9, 10, 14 at 1440×1000 / 820×1180 / 390×844 BEFORE cohorts
   expand; ch 9 reviewed FIRST (O1); census that all 14 IDs resolve to manifest entries + existing `art/` files.

## 9. What was rejected and why (so nobody re-litigates)

- Direction 2 (Correspondence File, the risk direction): folded in as the seal/salutation/end-mark
  subsystem; rejected as lead for gimmick fatigue over 121k words. Its red-string cover map is explicitly
  NOT built (JS state beyond the manifest).
- Direction 3 (Midnight Chancery): folded in as ch 10's ledger-band treatment; rejected as lead for
  covering only ~40% of the book's genre range.
- Prior run's repeating rail rules, numeral badges, gradient tints, pseudo-element-only ornaments:
  rejected per RELAUNCH — this identity carries zero of them.

## 10. ArtDirector critique record (2026-10-15 — APPROVED with O1–O6)

Full text: `.omp/design/critiques/open-letter.md`. Verdict: DIRECTION 1 APPROVED. Single revision pass
applied in this draft: blackletter guards (§2/§4); Gentle-Intro action line (§5); Signal ≥4.5:1 +
Oxblood muddiness checks (§3); stamp cover-only once-per-visit (§6); O1 flagship-first ch 9 (§4/§8);
O2 fixed-plates incl. Vellum (§4); O3 exact salutation list — CORRECTED per supervisor audit: openers
p1c4 (mid-sentence form → margin cockade only) + p1c7–p1c14, NEVER p1c1/p1c2/p1c3/p1c5/p1c6 (§4);
O4 one content-bearing redaction max (§4); O5 Plex folio-data grant noted (§4); O6 prototype scope
cover+1/3/5/9/10/14 (§8).
