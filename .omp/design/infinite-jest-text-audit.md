# Infinite Jest text audit — source-PDF verification + repairs (2026-10-15)

Owner: TextCurator (library-text-curator). Scope: `scripts/build_library.py` (IJ parser only),
`books/infinite-jest/data/**`, IJ text metadata. No theme/art files touched.

Source: `_OceanofPDF.com_Infinite_Jest_-_David_Foster_Wallace.pdf` (1,234 PDF pages,
calibre 3.48.0). Raw extract `raw_extract/_oceanofpdf_com_infinite_jest___david_fo.txt` is
**byte-identical** to a fresh `pdftotext -layout` run (verified this audit).
Page references below are PDF page numbers (1-based), calibrated: `YEAR OF GLAD` = p.11,
novel body pp.11–1067, `NOTES AND ERRATA` head p.1074, notes pp.1074–1229, back matter from p.1230.

Key distinction: **structural census** (exhaustive, every ID/number checked by script) vs
**sampled textual verification** (bounded PDF reads). Sampled checks NEVER imply whole-text
correctness; the report states exact coverage for each claim.

## 1. Structural census (exhaustive, post-repair)

- TOC ↔ files: 89/89 chapter IDs resolve (`p1c1–p1c77`, `p2c1–p2c12`); zero missing, zero
  orphan files; every file's `id`/`title`/`part` matches its TOC entry; every `word_count`
  recomputes exactly. `meta.json`: 89 chapters, 540,844 words, 2 parts.
- Committed data == fresh parser output (rebuilt twice during the audit; deterministic).
- Body coverage: novel span (raw abs lines 225–42531) is 100% partitioned across the 77
  section spans — zero uncovered lines, zero overlaps.
- Header census: an independent blank-preceded-caps-run scan finds 132 runs; all 55 not
  taken as section breaks were classified: headline montages (pp.434–437, 442–443, 450–452,
  485–486), videophony-essay caps body (p.169), memo/address decks, `ITEM 1` (p.344),
  letter sign-offs (`V.D.`, p.728), sign text (`LIFE IS LIKE TENNIS`, p.1036). None is a
  missed section break.
- Endnotes: all 388 note heads present, in order, no dupes, each at its own paragraph start
  (post-repair). Grouping: (1–23), (24), then 40s to (385–388); zero misgrouped.
- `note_refs`: 299 entries across 52 body chapters; every entry validated at build
  (`match` occurs exactly once in its paragraph; build asserts, fails loudly on drift).
- `notes-index.json`: 388/388 notes mapped to their `p2c*` chapter (generated at build).
- Artifacts: zero `OceanofPDF`/Hachette/copyright/ISBN/ebook-promo leaks; zero `\x0c` /
  soft-hyphen / double-space residue; hyphen-space hits are all authorial suspended
  compounds (`tri- and quad-modems`); short-paragraph scan is dialogue/letters/transcripts.

## 2. Previous-repair verdict (what held, what didn't)

HELD (verified against the PDF, no change needed):
- All 77 section boundaries: heads/tails sampled at §§1–3, 8, 14, 19, 23–28, 30–31, 35–36,
  41, 43–47, 50–51, 53, 56, 60, 64, 71–73, 75–77 against PDF pp.11–27, 37–38, 162–169,
  182, 195–197, 202, 253, 257, 344, 360, 382–384, 416–422, 463–464, 500, 520, 543, 585,
  619, 688, 715, 747, 791, 824, 858, 921, 928, 954–955, 1049, 1066–1067. Emission matches
  print order at every sampled join, including the §43/§44 Eschaton→AA break (p.382)
  and the §44/§45/§46 joins (pp.416, 421–422).
- The p1c45[3] White Flag passage (pp.417–420) is Wallace's own mid-section scene cut —
  no dateline, normal paragraph gap. Serve as is (ruled to SupIJ-2; Cohort D styles an
  in-section break, not a boundary fix).
- The p2c12 tail (`*`, `4`, `5`, `6`, pp.1225–1229) is real author text (unnumbered
  apparatus with blue hyperlink markers, matching in-note `Q.`/`qq.` callouts) — not
  curation artifacts (ruled to SupIJ-2; quarantine framing can drop after the merge fix).
- Note segmentation 1–388, note-24 filmography head fix, para-count fidelity (indent-start
  census agrees with emission within tolerance on 71/77 sections; the 6 deltas are
  display decks/dialogue, verified correct).

REPAIRED (all in `scripts/build_library.py`, repeatable via rebuild):
1. **15 merged endnote heads** (notes 64, 251, 254, 257–259, 272, 283, 306, 326–327,
   329–331, 337): root cause was `SENT_END` missing `)`-final lines, so the note-head
   split never fired after parenthetical one-liners. Fix: note-head lines (`^N. `) and
   lettered-sub-note heads (`^[a-uw-z]. `, excluding legal `v.`) now split
   unconditionally — proven safe (zero such line-starts in the novel body; zero
   non-head matches in the notes region). All 388 heads now start paragraphs.
2. **Sub-section header tails leaking into body** (§§23, 24, 25, 26, 30, 31, 60, 76):
   only 1–2 idioms were consumed as titles while tail lines (mastheads, film credits,
   exam heads) emitted as all-caps paragraphs. Fix: sub-headers consume the whole
   contiguous caps deck (cap 16, single-blank bridge, `ITEM n` excluded, WHY-essay
   excepted since its caps run is body text). 9 leaked paras removed; titles unchanged.
3. **Reflow mis-splits/joins**: `intra-O.N.A.N. / interdependence.` split across two
   paras (p.447) + a twin `C.U.S.P. / platform` case — fix: indented lowercase lines
   always join (only 2 occurrences novel-wide, both wraps). `Dear Sir:` + letter OK.
4. **Tail apparatus merge**: p2c12[5] glued the `*` ACMÉ colophon to note `4` — fix:
   blank injected before tail entries (`*`, `4`, `5`, `6`) after note 388. 9→10 paras.
5. **New deliverables**: `_IJ_NOTE_REFS` (299 curated body→note callouts, build-validated)
   + `note_refs` writer passthrough + build-generated `data/notes-index.json` (388/388).

## 3. Sampled textual checks (bounded; pages + boundaries recorded)

- Boundary emission: 34/77 sections' first+last paragraphs read against the PDF (list in
  §2 HELD). All match print order and wording at the joins.
- Paragraph order: full-para reads of §§23, 24, 30, 31, 45, 60-head, 76-head/tail, p2c12,
  note 269 (p.1173), note 39 subs (p.1093) — order correct; the §23 memo merge and
  montage joins (§46) match the PDF's own lineation (montage splits verified on p.435).
- `note_refs` precision: 25 random + 12 ambiguous-case refs verified on their PDF pages
  (37/37 digits present in print); 12/12 content cross-checks (note text glosses the ref
  passage, e.g. MAOI→28, Cantorian→35, Mauna Loa→240, F&C→310). 5 false positives
  caught and dropped during authoring (24/46/90 measures, 6/8 script-content, 99 date).
- NOT verified: full verbatim text (no complete re-read); the 86 unlinked notes' callout
  positions (no confident digit found — likely low-number ambiguity, not absence).

## 4. Known limits

- `note_refs` covers 299/388 notes. Missing 86 are mostly low-numbered notes whose
  callout digit collides with prose numbers (scores, courts, measures); the reader must
  treat absent refs as "no link", never guess.
- `ITEM 1` is body text (exam head), kept in p1c41[0]; `KEEP YOUR ANSWERS…` + exam
  masthead stay the section title/deck.
- The `notes_part` contract field: TOC has no `notes_part` key; auto-detection (chapter
  titles majority `Note…`-prefixed) applies. Part II name `Endnotes & Errata` is kept
  although the word "errata" never appears in the text (matches the print head
  `NOTES AND ERRATA`, p.1074).
- Catalog `chapters`/`words` for IJ updated by the rebuild (89 / 540,844); no other
  book's data was touched (other parsers' sources absent → kept existing).

## 5. Commands run

- `pdftotext -layout IN.pdf /tmp/ij_regen.txt && cmp` → IDENTICAL (provenance).
- `pdftotext -layout -f N -l M` reads for all pages cited; `pdftoppm` renders viewed for
  pp.77, 435, 1096, 1224–1229.
- `python3 scripts/build_library.py` (full rebuild; IJ + others without sources kept).
- Census scripts: TOC↔file check, coverage partition, caps-run scan, note census,
  digit census (`/tmp/ij_digits_full.json`), ref resolution + mapping, final verification
  (all inline; key artifacts in /tmp: `ij_prov.json`, `ij_cands.json`, `ij_abspage.json`).
