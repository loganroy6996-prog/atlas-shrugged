# Beyond Good and Evil — Book identity: three directions + chosen spec

Owner: BGE book designer (`SupBGE-2.BgeBookDesigner`). File owned: this file only.
Status: identity decision. Cohort teams conform at Phase 2; do not implement against rejected directions.
Baseline seen: cover + Preface chapter at 1440×1000 on `http://127.0.0.1:8000/books/beyond-good-and-evil/` (rejected thin violet-storm look: rain-line gradients, pseudo-element glyph badges ❖◆▲, sheared tick rules — none of that grammar may return).

Book facts (re-read 2026-10-15, never re-guessed): slug `beyond-good-and-evil`; ONE part (I, "Prelude to a Philosophy of the Future"); 11 chapters, 62,658 words. The spine of the book is 296 numbered sections §1–§296 plus three interleaved A-sections (§65A, §73A, §237A) = 299 section-start paragraphs across nine chapters (§§278/281/282 use dash-form starts `278.--…` — engineers: match `^\d{1,3}[A-Z]?\.(\s|--)`), framed by an unnumbered Preface ("SUPPOSING that Truth is a woman") and an unnumbered 36-line alpine verse Aftersong ("MIDDAY of Life!", the bow-and-arrow huntsman, "friend Zarathustra, came!"). Full paragraph→section index verified from chapter JSON; see §5.1.

Design non-negotiables for all three directions: dark-first; 8 reader themes stay legible (dark default + nocturne/verdant/oxblood/candlelight/sepia/light/slate); body text calm and accessible; entrances/openers memorable; art = original authored SVG/CSS only; chapter hooks are `body[data-chapter="<id>"]` + `body[data-part]` (roman, observed) / `body[data-part-id]` (stable id, new in contract) + `body[data-book="beyond-good-and-evil"]` / `body[data-view]` / `body[data-art]`; opener art goes in the contract's `#chapter-art` `<figure>` slot (ABOVE `#chapter-meta`, JS-injected, zero book edits needed) fed by `design/chapters.json` manifest or book-owned JS on the `reader:chapter` event; cover art in `#cover-art`; art URLs book-relative (`art/<file>.svg`); cohort CSS is unlayered so it always beats `@layer shared`; fonts via book-owned `<link>`/`@font-face` (supervisor edits owned `index.html`; book-relative `design/fonts/` preferred so the build ships them, system fallbacks REQUIRED); cohort CSS written for verbatim merge into supervisor-owned `theme.css`. Contract: `.omp/design/READER-CONTRACT.md` v1.0 STABLE.

---

## 1. References studied (what each taught — principles, not pixels)

1. First publication facts — C. G. Naumann, Leipzig, 1886, at the author's own expense; German title *Jenseits von Gut und Böse: Vorspiel einer Philosophie der Zukunft*. Sources: https://en.wikipedia.org/wiki/Beyond_Good_and_Evil and https://book.io/book/beyond-good-and-evil. **Learned:** the book's first material form was a plain self-published Leipzig octavo with a long double title — the *words themselves* were the cover. Lesson for Direction A: a typographic-ledger identity is historically honest to this book in a way picture covers are not.
2. Cambridge UP scholarly text (Horstmann/Norman sample PDF) — https://catdir.loc.gov/catdir/samples/cam031/2001035672.pdf. **Learned:** the critical-apparatus look (letterspaced caps front matter, numbered sections as addressable units, dense notes) is the visual language philosophy readers already associate with "the real Nietzsche." Direction A borrows its numbering-and-rule furniture, not its page shape.
3. Princeton Graphic Arts on Peter Behrens' book design — http://www.princeton.edu/~graphicarts/2010/09/peter_behrens_book_design.html. **Learned:** Behrens built book identity from *one constructed ornament system* (initials, headpieces, title frames in the same geometric vocabulary) repeated with variation — the model for how one SVG motif family can carry 11 chapter openers without cloning.
4. Otto Eckmann: Jugend ornamental borders, vignettes, bookplates; Eckmannschrift c. 1900 — https://www.wga.hu/bio/e/eckmann/biograph.html and https://www.wga.hu/html_m/e/eckmann/litho2.html. **Learned:** Jugendstil chapter furniture is *architectural* (frames you read through, initials you land on), not decorative badges — the standard Direction B's mask-cartouche openers must meet, and the reason Direction C uses full-bleed plates rather than ornaments.
5. Kirchner illustrated books (*Das Stiftsfräulein und der Tod* 1912/13; *Umbra vitae* 1924) — https://production-gcp.moma.org/s/ge/collection_ge/objbytag/objbytag_tag-vo69798_sov_sort-5_page-5.html and https://www.moma.org/s/ge/collection_ge/objbyclass/objbyclass_classid-5_sov_page-539.html. **Learned:** the Expressionist book plate is cut in black with the white paper doing the shouting — high-contrast relief, faces and bodies as angular slabs. Direction C takes its figure-drawing method (slab-cut profiles, gouge hatching) directly from these plates.
6. NGA Kirchner ornament + *Arnolds Graphische Bücher* (black figures on mustard) — https://www.nga.gov/artworks/227714-ornament-kirchner-zeichnungen-kirchner-drawings/associated-artworks and https://www.nga.gov/artists/53421-arnolds-graphische-bucher/artworks?page=0. **Learned:** a single acid ground color (mustard/ochre) turns black-line figures into a *series* — the precedent for Direction C's per-chapter ground-color rotation.
7. Doré alpine/mountain engraving practice — https://www.metmuseum.org/art/collection/search/344322, https://www.britannica.com/biography/Gustave-Dore, http://www.musee-orsay.fr/en/program/whats-on/exhibitions/presentation/gustave-dore-1832-1883-master-imagination. **Learned:** Doré builds altitude from line density alone (white glacier = absence of line; abyss = saturated cross-hatch) — the engraving rule Directions B (glacier plate) and C (Aftersong plate) follow.
8. La Rochefoucauld maxims print tradition (numbered maxims as the unit of the page; editions 1665→) — https://archive.org/details/bim_eighteenth-century_moral-maxims-by-the-duk_la-rochefoucauld-frano_1775 and https://www.gutenberg.org/files/9105/9105-h/9105-h.htm. **Learned:** three centuries of maxim books set each numbered unit as a *block with air around it*, number first, never run-on — the direct precedent for treating Ch. IV's 125 maxims as discrete set-pieces rather than flowing paragraphs (all directions, strongest in A).
9. Marxists.org full text of Ch. I + Wikisource — https://www.marxists.org/reference/archive/nietzsche/1886/beyond-good-good-evil/ch01.htm and https://en.wikisource.org/wiki/Beyond_Good_and_Evil/Chapter_I. (Content verification: Sphinx/Oedipus rendezvous §1, Pallas Athene mask §5, Dionysiokolakes actors §7, Kant's Table of Categories §11 — all confirmed verbatim and used as motif sources.)
10. Munch's Nietzsche portrait (1906, Weimar — the sitter on a terrace above a moonlit fjord/landscape) — https://www.thehistoryofart.org/edvard-munch/frederich-nietzsche/ and https://commons.wikimedia.org/wiki/File:Edvard_Munch_-_Friedrich_Nietzsche.jpg. **Learned:** Munch poses philosophy as *one small figure against a vast nocturnal ground* — the compositional rule for Direction C's cover (small huntsman/philosopher figure, huge altitude).
11. Klimt *Philosophy* (1900–1907, Secession/University paintings) — https://www.gustav-klimt.com/Philosophy.jsp. **Learned (negative):** Klimt's allegorical crowd-frieze is exactly the misty-symbolist mode to avoid — beautiful but interchangeable between books. Killed a fourth "allegorical frieze" direction in sketch; none of the three below use drifting allegory.
12. Oedipus-and-Sphinx black-figure vase iconography (seated Sphinx confronting a standing questioner) — https://utpictura18.univ-amu.fr/en/notice/6568-oedipus-and-the-sphinx-black-figure-lekythos-pholos-group and https://camws.org/sites/default/files/meeting2015/Abstracts2015/240.imaginingsofother.pdf. **Learned:** the archaic encounter is drawn as two profiles facing across a *gap* — the composition Direction B's Ch. I cartouche and Direction C's Ch. I plate both reuse (riddle-gap, never illustration of the answer).

---

## 2. Direction A — "The Numbered Ledger" (chosen ★)

**Concept, tied to this book.** BGE is addressed by numbers: readers cite "§146" (the abyss gazes back), "§153" ("What is done out of love…"), "§287" ("THE NOBLE SOUL HAS REVERENCE FOR ITSELF"). No other book in the library is so thoroughly a *numbered instrument* — 296 numbered sections §1–§296 plus three A-sections (299 section starts) across nine chapters, bracketed by two unnumbered lyric pieces. Direction A makes the reader hold that instrument: every chapter opens on its section-range rendered as large archival figures; every aphorism in the reading flow carries a margin numeral; the book's one continuous thread (§1→§296) becomes visible as a ruled progress ledger. The Preface and Aftersong, having no numbers, switch the system off — their openers are pure verse typography, which makes their lyric register unmistakable.

**Type.** Google Fonts, verified live 2026-10-15 (all return 200 with file URLs):
- Display/ledger figures: **Fraunces** 400/600 + italic (opsz 9–144) — for chapter titles, giant section numerals, cover. Old-style grotesque-serif with real optical sizing; figures feel engraved, not typed.
- Body: **Source Serif 4** 400/600 + italic — for the reading column. Quiet, highly legible at 1.3rem/1.8, large x-height for dark backgrounds.
- Margin numerals/labels/TOC figures: **IBM Plex Mono** 400/500 — the ledger voice; tabular figures everywhere.
- Scale: cover title clamp(3.2rem, 9vw, 5.2rem); chapter title clamp(2rem, 4.6vw, 2.9rem); giant opener numerals clamp(4rem, 12vw, 8rem) Fraunces 600; body 1.3rem/1.8; margin numerals 0.8rem Plex Mono. Measure: body max 65ch; numerals sit in a 4.5rem left margin on desktop, inline-block prefix on <900px (no overlap, no horizontal scroll).

**Dark palette (named):**
- `Ledger Black` `#12100B` (bg) — warm archival black, not violet.
- `Vellum Smoke` `#EDE4D3` (text) — aged-paper white.
- `Ochre Ink` `#D9A441` (accent/figures) — ledger ink, brass.
- `Sanguine` `#B3402A` (second accent — the "EVIL" red; used sparingly: Aftersong bow, Ch. IX rank-rule, abyss §146 marker) — keeps the book's title inside the palette.
- `Faded Entry` `#8A7D63` (muted text, ruled lines).
- `Parchment Dark` `#1E1A12` (elevated surfaces).
Light themes: bg `#FAF7EF`, text `#211C12`, Ochre deepens to `#8A5E14`, Sanguine to `#93301D` (contrast ≥7:1 body, ≥4.5:1 accents — engineer to verify computed).

**Cover/entrance.** Full-viewport ledger plate: giant Fraunces figures "§ 1–296" ghosted at 6% behind a centered two-line title ("Beyond Good / and Evil"), Plex Mono eyebrow "FRIEDRICH NIETZSCHE · LEIPZIG · 1886", a double-ruled rule (thin over thick, brass), the tagline in Source Serif italic, and a Plex Mono footer "295 SECTIONS · 11 CHAPTERS · ~5.2 H". The signature: the cover's background is a faint ruled table of all nine numbered-chapter ranges (I §1–23 … IX §257–296) set in Plex Mono at low opacity — the whole book's skeleton visible before you enter. No gradients-as-decoration: warm black is flat; depth comes from rules and figures.

**Chapter-opener grammar (above the first paragraph).** `.chapter-art` plate (inline SVG, ~200px tall) → Plex Mono kicker "CHAPTER I · §§1–23" → Fraunces title → double rule → one-line gloss (supervisor-supplied static per chapter, e.g. Ch. I: "The Will to Truth puts itself on trial"). Numbered chapters show their range as the dominant element (giant "1–23" flanking or over the title, per-chapter composition in §5.3). Preface/Aftersong openers drop all figures: centered verse measure, italic, Sanguine fleuron — the system falling silent on purpose.

**TOC/navigation.** TOC rows become ledger entries: Plex Mono range ("§§1–23" / "—" for unnumbered) right-aligned in a fixed column, dotted brass leader to the title, roman-numeral chapter number small before the title. Progress fill: Ochre Ink flat. Chapter-end mark: "§ <last>" in Plex Mono (e.g. "§ 23"), replacing the generic fleuron.

**Illustration medium.** Original inline SVG + CSS only: (1) ruled rules, double-rules, dotted leaders; (2) one engraved-figure SVG set (Fraunces numerals as text, outlined/knockout treatments); (3) nine small (~120px) chapter-seal SVGs — geometric intaglio seals (concentric rules + chapter glyph: Sphinx-gap for I, open gate for II, flame-in-arch for III, scattered sorts for IV, herd-lines for V, lens for VI, twin suns for VII, staves for VIII, stepped pyramid for IX) drawn in 1px brass strokes on transparent ground. Preface/Aftersong: no seals; a single Sanguine rule-fleuron each (veil-line / bow-arc).

**ONE signature element.** The margin aphorism numerals: every numbered section in the reading flow gets a Plex Mono brass numeral in the left margin (desktop) — the page becomes a scannable instrument, and readers can cite what they see. Nothing else in the library does this; it cannot be mistaken for another book.

**How all 11 chapters vary within the system.**
- p1c1 Preface: figures OFF; veil-line opener; verse-wide measure; no drop cap; ends with "Sils Maria, June 1886" colophon styling (right-aligned italic).
- p1c2 Ch. I (§§1–23): full ledger; Sphinx-gap seal; long-essay relief via extra air above each section start.
- p1c3 Ch. II (§§24–44): gate seal; slightly wider measure (free-breathing); section numerals in Ochre.
- p1c4 Ch. III (§§45–62): flame seal; numerals in Sanguine at §50 ("saint"/ascetic passages) only — the single red intrusion before Ch. IX.
- p1c5 Ch. IV (§§63–185): maxim-set mode — each maxim a discrete block with hanging numeral, hairline between every ~5 maxims, denser but never cramped; scattered-sorts seal.
- p1c6 Ch. V (§§186–203): catalogue mode — numerals as specimen entries ("No. 186") in Plex Mono; herd-lines seal.
- p1c7 Ch. VI (§§204–213): instrument mode — coldest numerals (Faded Entry instead of brass), lens seal; one Ochre numeral at §209 ("VOILA UN HOMME!").
- p1c8 Ch. VII (§§214–239): twin-sun seal; §215 opener gets a motley dual-rule (Ochre + Sanguine hairlines) — the only double-colored rule in the book.
- p1c9 Ch. VIII (§§240–256): overture mode — nation sections (§240 Wagner, §250, §252, §254) get movement-style centered numerals; staves seal; closing Rome verse centered.
- p1c10 Ch. IX (§§257–296): summit mode — largest opener figures, stepped-pyramid seal, rank-rule under title (three ascending steps); §278 plummet, §287 "NOBLE SOUL", §296 "EVIL thoughts" get Sanguine numerals — the only chapter with three red marks.
- p1c11 Aftersong: figures OFF; bow-arc opener; line-verse styling (each `<p>` a verse line, hanging indent on overflow); "MIDDAY" letterspaced caps preserved; ends with centered "Light and Dark were one" colophon.

---

## 3. Direction B — "Masks and Midday" (rejected)

**Concept.** The book's two poles as theatre: the Preface's veiled woman-Truth ("SUPPOSING that Truth is a woman"), the §5 Pallas Athene mask, §7's Dionysiokolakes actors, §278's "Another mask! A second mask!", §289's "every word is also a MASK" — against the Aftersong's pitiless alpine noon ("At midday 'twas, when one became as two"). Each chapter opens with a theatrical cartouche: a black Jugendstil mask/veil/face device on a sun-disc that waxes from crescent (Preface) to full noon (Aftersong) across the book — a literal light-arc.

**Type.** Display: **Cinzel** 600/700 (inscriptional Roman caps — masks, monuments); body: **Newsreader** 400/500 + italic (soft optical serif, theatrical programs); labels: Cinzel 400 letterspaced. Scale similar to A but display is caps-only, smaller x-height contrast.

**Palette:** `Stage Black` `#0E0D0C`; `Mask Ivory` `#F2EAD8`; `Sun Gold` `#E3B341`; `Veil Violet-Grey` `#7E7A94` (veil passages); `Bloodline` `#A63A2E` (mask-mouth accent); `Foots Dark` `#1B1815`.

**Cover.** Centered Cinzel title over a large half-disc sun; a veiled-profile SVG (original line drawing, half face / half drapery) bisects the disc; eyebrow "EINE VORSPIEL-PHILOSOPHIE · 1886".

**Opener grammar.** Mask-cartouche SVG (~240px) → Cinzel title → sun-phase marker (crescent→gibbous→full per chapter index) → first paragraph with illuminated cap in a cartouche box.

**TOC.** Rows with sun-phase dots waxing down the list; active chapter's mask glyph in the drawer header.

**Medium.** Original SVG line-drawn masks/veils/suns (Jugendstil architectural frames per Behrens/Eckmann refs); no stock.

**Signature.** The waxing sun-disc arc across the 11 openers — one continuous celestial instrument.

**Variation.** Each chapter gets its mask: Preface veil, I Sphinx-face, II open gate-mask, III ecstatic saint-mask, IV 125 tiny domino masks in a scattered field (too many — a real weakness), V herd-mask frieze, VI scholar's spectacles-mask (risk of caricature), VII twin-faced Janus, VIII national masks in sequence (caricature risk again), IX stepped crown-mask, Aftersong full sun, no mask.

**Why rejected.** Three honest defects: (1) the mask conceit collapses on Ch. IV (125 maxims cannot each carry a mask; a scattered mask-field is fussy at reading scale) and risks caricature on VI–VIII (national/scholar masks invite exactly the cartooning the prose forbids); (2) Cinzel caps-only display is handsome but fatiguing across 10,352-word Ch. IX headers/TOC and reads "Roman monument," not "Leipzig 1886"; (3) the sun-phase arc is pretty but arbitrary — it illustrates chapter *order*, not chapter *content*, which is the modulo-tinting sin in celestial dress. Strongest salvage: the veil-line and bow-arc SVG devices, adopted into A's Preface/Aftersong openers.

---

## 4. Direction C — "Black-Plate Expressionism" (rejected)

**Concept.** Cut the book like a Kirchner plate: each chapter opens with a full-bleed black-ground woodcut-style SVG plate (slab-cut figures, gouge hatching, one acid ground color per chapter rotating through ochre/rust/bone/ash), cover shows one small philosopher-figure against a vast nocturnal mountain ground (after Munch's Nietzsche composition). The reading column sits below the plate on near-black; aphorism numbers are punched white out of black bars.

**Type.** Display: **Pirata One** (blackletter display — Leipzig gothic echo) for cover + chapter titles; body: **Spectral** 400/500 (sturdy, print-like); numerals: **Archivo** 600. Blackletter display is the gamble: unmistakable, period-true to German print culture, dangerous for legibility.

**Palette:** `Plate Black` `#0A0908`; `Bone` `#EFE6D0`; `Acid Ochre` `#E0A81C`; `Rust` `#9E3B26`; `Ash` `#6E6A5E`; `Pine` `#2E4034` (mountain darks).

**Cover.** Full-bleed plate: huntsman-with-bow silhouette on a ridge under a huge ringed sun; Pirata One title knocked out of the black; ground color Acid Ochre.

**Opener grammar.** Full-bleed plate (40vh) → black bar with white punched "CHAPTER IX · §§257–296" → Pirata One title → gouge-hatch rule → body.

**TOC.** Black drawer, white punched numerals, per-row ground-color edge stripes.

**Medium.** Original SVG woodcut plates (paths + hatch patterns + grain filters), eleven of them — the heaviest art lift of the three.

**Signature.** The eleven full-bleed black plates — no other library book opens chapters with pictures at that scale.

**Variation.** Plates per chapter content: Preface veiled woman on stairs; I Sphinx-vs-questioner across a gap; II open mountain gate; III praying figure in arch; IV scattered type-sorts falling like hail; V herd lines under a low sky; VI scholar at a desk under a lens-moon; VII two suns over one planet; VIII orchestra/national banners; IX stepped pyramid with tiny climbers; Aftersong glacier + eagle + bow-arc in Bone on Pine.

**Why rejected.** Two decisive defects despite being the most visually ambitious: (1) eleven full-bleed plates at 40vh each brutalize the reading contract — Ch. IV's maxims and the 10k-word Ch. IX need *relief*, not a billboard before every sitting, and plates push first paragraphs below the fold on laptops; beauty that harms reading fails this brief. (2) Pirata One blackletter, while period-evocative, is genuinely hard to read at chapter-title sizes for an English-speaking philosophy audience and risks Nazi-kitsch misreading divorced from its 1886 context. Salvage: the punched-numeral section markers and the Ch. VII twin-sun / Ch. IX stepped-pyramid compositions, recomposed as A's small intaglio seals.


## Comparison and recommendation

| Axis | A: Numbered Ledger | B: Masks and Midday | C: Black-Plate Expressionism |
|---|---|---|---|
| Book-fit | Exact: the book IS its §-numbers; Preface/Aftersong unnumbered by design | Good on masks, forced on maxims/nations | Good on altitude/drama, fights the reading flow |
| Distinctiveness | No sibling uses a numeral-instrument system | Mask + sun-arc is memorable but generic-symbolist-adjacent | Most dramatic, but "dark + plates" risks Twilight/Zarathustra collision |
| Reading calm | Best: numerals aid scanning; body untouched | Cartouches + caps add noise | Plates harm entry; blackletter harms scanning |
| Feasibility | Medium: margin numerals + seals + rules | Medium-high: 11 mask drawings, caricature risk | Highest: 11 full plates; heaviest SVG lift |
| Rejected-look distance | Total: warm archival black, brass figures, rules — no violet, no glyph badges, no shear | Total | Total |

**Recommend exactly one: Direction A, "The Numbered Ledger."** It is the only direction whose signature element (margin aphorism numerals + ledger openers) is *derived from this book's actual textual structure* rather than applied to it: replace the title with another book and the §1–296 instrument is nonsense — the acceptance test passes by construction. It is also the only direction that makes the two unnumbered lyric chapters structurally legible (the system falling silent), and it gives long-chapter relief (numerals as scanning anchors) instead of decoration that competes with prose.

---

## 5. Chosen-identity implementation spec (Direction A)

### 5.1 Aphorism index (verified from chapter JSON — engineers implement from this, not by guessing)

`paragraph → §` (1-based `nth-of-type` within `#chapter-text`; only listed paragraphs start sections; all other paragraphs are continuations):

- p1c1 Preface: unnumbered (6 paras). p1c11 Aftersong: unnumbered (36 paras, verse lines).
- p1c2 (Prejudices, 75 paras): 1:1 3:2 5:3 8:4 10:5 13:6 16:7 20:8 23:9 25:10 28:11 36:12 39:13 41:14 42:15 44:16 50:17 54:18 56:19 61:20 63:21 69:22 73:23
- p1c3 (Free Spirit, 59 paras): 1:24 2:25 5:26 8:27 11:28 17:29 18:30 21:31 23:32 26:33 27:34 34:35 35:36 44:37 45:38 46:39 49:40 51:41 52:42 53:43 55:44
- p1c4 (Religious, 46 paras): 1:45 4:46 6:47 9:48 13:49 14:50 15:51 17:52 19:53 20:54 25:55 28:56 29:57 31:58 37:59 40:60 42:61 44:62
- p1c5 (Maxims, 129 paras → 125 sections): 1:63 2:64 3:65 4:65A 5:66 6:67 7:68 9:69 10:70 11:71 12:72 13:73 14:73A 15:74 16:75 17:76 18:77 19:78 20:79 21:80 22:81 23:82 24:83 25:84 26:85 27:86 28:87 29:88 30:89 31:90 32:91 33:92 34:93 35:94 36:95 37:96 38:97 39:98 40:99 41:100 42:101 43:102 44:103 45:104 46:105 48:106 49:107 51:108 52:109 53:110 54:111 55:112 56:113 57:114 58:115 59:116 60:117 61:118 62:119 63:120 64:121 65:122 66:123 67:124 68:125 69:126 70:127 71:128 72:129 73:130 74:131 76:132 77:133 78:134 79:135 80:136 81:137 82:138 83:139 84:140 85:141 86:142 87:143 88:144 89:145 90:146 91:147 92:148 93:149 94:150 95:151 96:152 97:153 98:154 99:155 100:156 101:157 102:158 103:159 104:160 105:161 106:162 107:163 108:164 109:165 110:166 111:167 112:168 113:169 114:170 115:171 116:172 117:173 118:174 119:175 120:176 121:177 122:178 123:179 124:180 125:181 126:182 127:183 128:184 129:185
- p1c6 (Morals, 54 paras): 1:186 6:187 7:188 15:189 16:190 19:191 23:192 27:193 29:194 32:195 34:196 35:197 36:198 38:199 41:200 42:201 47:202 53:203
- p1c7 (Scholars, 44 paras): 1:204 5:205 9:206 11:207 17:208 21:209 24:210 30:211 33:212 40:213
- p1c8 (Virtues, 80 paras): 1:214 3:215 5:216 6:217 7:218 11:219 12:220 16:221 17:222 18:223 19:224 24:225 29:226 33:227 36:228 44:229 48:230 51:231 53:232 56:233 57:234 58:235 59:236 69:237A 70:238 71:239
- p1c9 (Peoples, 59 paras): 1:240 3:241 10:242 14:243 15:244 27:245 32:246 34:247 36:248 38:249 39:250 40:251 45:252 48:253 51:254 55:255 56:256
- p1c10 (Noble, 94 paras): 1:257 4:258 5:259 9:260 20:261 23:262 28:263 31:264 37:265 40:266 41:267 42:268 44:269 49:270 53:271 55:272 57:273 58:274 61:275 62:276 63:277 64:278 66:279 67:280 68:281 70:282 71:283 72:284 73:285 74:286 76:287 78:288 79:289 81:290 83:291 84:292 85:293 87:294 88:295 93:296 (dash-form: 64:278, 68:281, 70:282)
- NOTE: §§278/281/282 begin with dash-form `NNN.--` (no space) rather than `NNN. ` — the numeral wrapper/detector MUST match both forms. Numeral = the paragraph's opening § only; never split paragraphs, never edit prose.

### 5.2 Tokens (dark default; supervisor to derive the 7 other themes)

```
--bge-black:   #12100B;  --bge-ink:     #EDE4D3;  --bge-brass:   #D9A441;
--bge-blood:   #B3402A;  --bge-faded:   #8A7D63;  --bge-raised:  #1E1A12;
```
Map onto reader vars (`--bg`, `--text`, `--accent: brass`, `--copper: blood`, …). Fonts: `--font-display: "Fraunces", Georgia, serif;` `--font-serif: "Source Serif 4", Georgia, serif;` `--font-ledger: "IBM Plex Mono", ui-monospace, monospace;` Google Fonts link (supervisor adds): Fraunces 400;600 + italics, Source Serif 4 400;600 + italics, IBM Plex Mono 400;500.

### 5.3 Opener anatomy (selectors; supervisor owns index.html additions)

Art slots (contract §3–§4): `#chapter-art` is a `<figure>` ABOVE `#chapter-meta` (shared CSS only hides it when empty; everything inside is book-owned). Seals load declaratively via `design/chapters.json` (`{chapters: {p1c2: {src: "art/seal-1-sphinx.svg", class: "ledger-seal", motif: "sphinx-gap"}, …}}`, `default: {class: "ledger-seal"}`) — cohort workers author `art/<seal>.svg` + `design/<cohort>.json`, supervisor merges into `design/chapters.json` sequentially. Giant range figures + gloss ride in the same slot via book-owned JS on `reader:chapter` (or as part of the seal SVGs if the supervisor prefers zero-JS openers). Cover addition: `#cover-art` holds the ghost ledger table / "§ 1–296" figure.

Opener anatomy (numbered chapter):
1. `#chapter-art` (the contract figure slot) — chapter seal SVG (brass 1px intaglio, ~120px) + giant Fraunces range figures ("1–23") — composition per chapter: I left-figures/right-seal; II centered stacked; III seal-above-figures; IV scattered small figures field; V catalogue row; VI small cold figures; VII twin-figure split (Ochre/Sanguine); VIII movement list; IX largest centered figures over stepped rule.
2. `#chapter-meta` — `.meta-part` (Plex Mono kicker "CHAPTER I · §§1–23"), `.meta-title` (Fraunces), `.meta-number` (keep, Plex Mono), `.meta-rule` (double rule: 2px brass over 1px faded), `.meta-gloss` (Source Serif italic one-liner; supervisor-added `<p>` after `.meta-rule` + static gloss map — book owns the element, shared contract reserves only pre-existing children).
3. First section paragraph: NO drop cap on numbered chapters (the margin numeral is the entry); keep drop cap only for p1c1 (first letter "S") — p1c11 verse gets no cap.
Unnumbered (p1c1/p1c11): `#chapter-art` shows veil-line / bow-arc fleuron only; kicker shows "PREFACE · SILS MARIA, JUNE 1886" / "AFTERSONG · FROM THE HEIGHTS"; figures hidden via `body[data-chapter="p1c1"] .range-figures, body[data-chapter="p1c11"] .range-figures { display:none }`.

### 5.4 Margin numerals (the signature — engineering contract)

- Mechanism (sanctioned by contract §3–§4): book-owned JS in the supervisor's `index.html` listens for `reader:chapter` and wraps each section-start paragraph's leading `NNN.`/`NNN.--` text node in `<span class="sec-num">NNN</span>` at render time (DOM-only, prose untouched; matches `^(\d{1,3}[A-Z]?)\.(\s|--)`). The wrapper MUST ignore p1c1/p1c11 (unnumbered) and MUST NOT mint `reader-*` classes (reserved prefix). Fallback if the supervisor declines book JS: per-chapter `nth-of-type` rules with hardcoded `content` per §5.1 (verbose but static-safe; cohort CSS files carry their own chapters' rules).
- Styling: `.sec-num` Plex Mono 500, 0.8rem, brass, positioned in left margin at ≥900px (`position:absolute; right: calc(100% + 1.25rem)` on a relatively-positioned section paragraph — book-owned class on `#chapter-text > p`, NOT a shared-selector restructure), inline brass prefix with hanging indent below 900px. Sanguine variants: `body[data-chapter="p1c4"] …§50`, `body[data-chapter="p1c10"] …§§278,287,296`, `body[data-chapter="p1c5"] …§146` (abyss), `body[data-chapter="p1c7"] …§209` (Ochre-against-cold exception — the only brass numeral in that chapter).
- Ch. IV maxim-set: each section paragraph gets `margin-bottom: 1.6em; padding-left` hanging numeral; hairline separators via `nth-of-type` every 5th maxim.

### 5.5 Per-cohort variation rules (for cohort designers — stay inside this grammar)

- Front cohort (p1c1–p1c5): ledger full-voice; seals 1–4 + veil fleuron; Ch. IV maxim-set mode is the cohort's centerpiece; Ch. I gets the Sphinx-gap seal + long-essay air.
- Back cohort (p1c6–p1c11): catalogue (V) → instrument (VI) → twin-rule (VII) → overture (VIII) → summit (IX) → verse-silence (XI); seals 5–9 + bow-arc fleuron. Cohort's arc is numeral *temperature*: faded→brass→dual→brass→sanguine-triple→silent.
- Shared: one seal style (1px brass intaglio, concentric rules + glyph), one double-rule, one Plex Mono voice. Vary composition, figure scale, numeral color, and air — never introduce new fonts, new hues, or glyph badges.
- Light-theme guard: brass→`#8A5E14`, blood→`#93301D`, figures never below 4.5:1 against bg; seals use `currentColor`-ish var so they follow automatically.

### 5.6 Art files to author (original SVG, book-root-relative `art/`)

`seal-1-sphinx.svg`, `seal-2-gate.svg`, `seal-3-flame.svg`, `seal-4-sorts.svg`, `seal-5-herd.svg`, `seal-6-lens.svg`, `seal-7-twinsuns.svg`, `seal-8-staves.svg`, `seal-9-steps.svg`, `fleuron-veil.svg` (Preface), `fleuron-bow.svg` (Aftersong), `cover-ledger.svg` (optional: ghosted range table if CSS text can't hit the tone). All flat 1px-stroke brass on transparent; no gradients except flat opacity layering ≤12%.

### 5.7 index.html additions needed from the supervisor

1. Fonts: Fraunces (400;600 + ital), Source Serif 4 (400;600 + ital), IBM Plex Mono (400;500) — book-relative `design/fonts/` `@font-face` preferred (build ships it per contract §11) with Google Fonts `<link>` fallback; system fallbacks REQUIRED in every stack.
2. `design/chapters.json` manifest (contract §4) mapping each chapter id → seal `src` + `class: "ledger-seal"` + `motif` (sphinx-gap, gate, flame, sorts, herd, lens, twin-suns, staves, steps, veil, bow) + `cover.src: "art/cover-ledger.svg"`; supervisor merges cohort `design/<cohort>.json` sequentially.
3. Book-owned JS on `reader:chapter` (contract §3): fill `#chapter-art` with giant range figures + gloss, `#cover-art` with the ghost ledger table / "§ 1–296" figure; wrap section numerals per §5.4. (Zero-JS fallback: bake figures into seal SVGs + static `nth-of-type` numeral content per §5.1.)
4. TOC row range column (`.toc-range` spans fed from a static id→range map: p1c1 "—", p1c2 "§§1–23", p1c3 "§§24–44", p1c4 "§§45–62", p1c5 "§§63–185", p1c6 "§§186–203", p1c7 "§§204–213", p1c8 "§§214–239", p1c9 "§§240–256", p1c10 "§§257–296", p1c11 "—") + `design/ART-DIRECTION.md` (this directions file's successor) to lock the generator per contract §10.
5. Verify in `_site` (not just source): seals, cover art, fonts, manifest all ship (contract §11); confirm no book rule fights `@layer shared` guards.

### 5.8 Acceptance self-check

- Three directions a reader cannot mistake for one another: ledger-instrument (A) vs theatre-masks+suncycle (B) vs blackletter+full-bleed plates (C). ✓
- No violet storms, glyph badges, or sheared rules anywhere. ✓
- Title+color swap test: A's §-instrument is meaningless on any other book. ✓
- Engineers implement without guessing: full § index (§5.1), tokens (§5.2), anatomy+selectors (§5.3), numeral contract (§5.4), cohort rules (§5.5), art list (§5.6), supervisor asks (§5.7). ✓
