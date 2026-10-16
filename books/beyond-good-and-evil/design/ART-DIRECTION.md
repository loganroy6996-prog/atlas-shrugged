# ART-DIRECTION.md — Beyond Good and Evil (Friedrich Nietzsche, 1886)

Identity: **The Numbered Ledger** (Direction A) — APPROVED by ArtDirector with
binding conditions E1–E7 (`.omp/design/critiques/beyond-good-and-evil.md`).
Full three-direction comparison + implementation spec:
`books/beyond-good-and-evil/design/directions.md` (this file locks the
generator per READER-CONTRACT §10 and states the integration contract for
cohort teams).

## The idea in one paragraph

BGE is addressed by numbers: readers cite §146 (the abyss gazes back), §153
("What is done out of love…"), §287 ("THE NOBLE SOUL HAS REVERENCE FOR
ITSELF"). No other library book is so thoroughly a *numbered instrument* —
**298 section starts** (§§1–296 with interleaved §65A, §73A, §237A and no
§237; verified by regex `^(\d{1,3}[A-Z]?)\.(\s|--)` over chapter JSON)
across nine numbered chapters, bracketed by two unnumbered lyric pieces.
Every chapter opens on its section-range as large archival figures; every
aphorism in the reading flow carries a margin numeral; the Preface and
Aftersong switch the system OFF (total silence, E4). Title-swap test passes
by construction: the §1–296 instrument is nonsense on any other book.

## Tokens (dark default)

| Token | Value | Reader-var mapping |
|---|---|---|
| `--bge-black` Ledger Black | `#12100B` | `--bg` |
| `--bge-raised` Parchment Dark | `#1E1A12` | `--bg-elevated`, `--surface` base |
| `--bge-ink` Vellum Smoke | `#EDE4D3` | `--text` |
| `--bge-brass` Ochre Ink | `#D9A441` | `--accent` (engraved ledger ink, never glowing — E2) |
| `--bge-blood` Sanguine | `#B3402A` | `--copper` (rationed per E3: §50, §§278/287/296, §146, §215 dual-rule, Aftersong bow) |
| `--bge-faded` Faded Entry | `#8A7D63` | `--text-muted`, ruled lines |

Light themes: brass → `#8A5E14`, blood → `#93301D` (contrast ≥4.5:1 accents,
≥7:1 body — engineers verify computed). Fonts: Fraunces 400/600 + italic
(display/figures, engraved register — E6), Source Serif 4 400/600 + italic
(body), IBM Plex Mono 400/500 (margin numerals, kickers, TOC figures, tabular
everywhere). Supervisor loads all three in `index.html`; fallbacks Georgia /
ui-monospace REQUIRED.

## The signature (E1)

Margin aphorism numerals via DOM wrap ONLY: book-owned JS in
supervisor-owned `index.html` listens for `reader:chapter` and wraps each
section-start paragraph's leading number in `<span class="sec-num">`.
Static `nth-of-type` `content:` numerals are FORBIDDEN. The §5.1 paragraph
index in directions.md is the TEST ORACLE (verified EXACT on p1c1–p1c5 by the
FRONT lead and p1c2/p1c10 by the supervisor; BACK rows verified at prototype
review). Validator spot-checks ≥20 wrappings incl. 65A/73A/237A and
dash-form 278/281/282. JS ignores p1c1/p1c11; never mints `reader-*` classes.
Until ReaderLead's `reader:chapter` lands, the same wrapper runs from a
`MutationObserver`-free fallback: on `DOMContentLoaded` + TOC/chapter-button
clicks (same regex, same oracle); engineers style `.sec-num` identically
either way. Ch. IV maxim-set: discrete blocks, hanging numerals, hairline
every ~5 maxims; prototype must show a full mid-chapter screen proving
density without cramp (E5).

## Opener grammar

`#chapter-art` (contract slot) → seal SVG + giant Fraunces range figures →
Plex Mono kicker (`CHAPTER I · §§1–23`) → Fraunces title → double rule (2px
brass over 1px faded) → Source Serif italic gloss (static per-chapter map,
supervisor-owned). No drop caps on numbered chapters (the margin numeral is
the entry); p1c1 keeps a single drop cap; p1c11 verse gets none. Seals (1px
brass intaglio, concentric rules + glyph, flat, no gradients): `seal-1`
Sphinx-gap (I), `seal-2` open gate (II), `seal-3` flame-in-arch (III),
`seal-4` scattered sorts (IV), `seal-5` herd-lines (V), `seal-6` lens (VI),
`seal-7` twin suns (VII), `seal-8` staves (VIII), `seal-9` stepped pyramid
(IX); fleurons: `fleuron-veil` (Preface), `fleuron-bow` (Aftersong, Sanguine).
TOC rows become ledger entries (Plex Mono range column + brass dotted
leader); progress fill flat brass; chapter-end mark `§ <last>` in Plex Mono.

## Cover

Full-viewport ledger plate: ghosted giant `§ 1–296` + faint ruled table of
all nine numbered-chapter ranges in Plex Mono at low opacity; two-line
Fraunces title; Plex Mono eyebrow `FRIEDRICH NIETZSCHE · LEIPZIG · 1886`;
double brass rule; Source Serif italic tagline; Plex Mono footer
`298 SECTIONS · 11 CHAPTERS · ~5.2 H`. Flat warm black; depth from rules and
figures, never gradient washes.

## Cohort map and file ownership

- FRONT (p1c1–p1c5): ledger full-voice; seals 1–4 + veil fleuron; Ch. IV
  maxim-set is the cohort centerpiece. Files: `design/front.json`,
  `design/front.css`, `art/front-seal-1-sphinx.svg`,
  `art/front-seal-2-gate.svg`, `art/front-seal-3-flame.svg`,
  `art/front-seal-4-sorts.svg`, `art/front-fleuron-veil.svg`.
- BACK (p1c6–p1c11): catalogue (V) → instrument (VI) → twin-rule (VII) →
  overture (VIII) → summit (IX) → verse-silence (XI); numeral temperature
  faded→brass→dual→brass→sanguine-triple→silent. Files: `design/back.json`,
  `design/back.css`, `art/back-seal-5-herd.svg`, `art/back-seal-6-lens.svg`,
  `art/back-seal-7-twinsuns.svg`, `art/back-seal-8-staves.svg`,
  `art/back-seal-9-steps.svg`, `art/back-fleuron-bow.svg`. CORRECTION
  (BACK-designer, accepted): p1c11 ends with P36 in verse measure + the bow
  end-seal (contract A.0 SVG `url()` ≤32px); the §5.3 "centered colophon
  extract" is unimplementable without prose edits (P36 is one paragraph)
  and is STRUCK.
- Supervisor merges cohort CSS into `theme.css` and cohort JSON into
  `design/chapters.json` SEQUENTIALLY (never concurrent). Art renames, if
  any, happen at merge time.

## Prototype scope (E7) — build this before expanding

Cover ledger plate + p1c1 (silence) + p1c2 (full ledger) + p1c5 (maxim-set
density incl. a mid-chapter screen) + p1c10 (summit + triple red) + p1c11
(verse silence) at 1440×1000 / 820×1180 / 390×844. Expansion to all cohorts
only after prototype review PASSES (ArtDirector + independent validator).
