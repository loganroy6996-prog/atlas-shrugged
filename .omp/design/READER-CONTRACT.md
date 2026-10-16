# READER-CONTRACT v1.1 — shared reader integration contract

Owner: ReaderLead. Status: **STABLE** (2026-10-15). Changes are append-only;
breaking changes bump the major version and are broadcast on `agent://all`.

This contract freezes the seams every book team builds against: DOM hooks,
CSS cascade order, the chapter-art manifest schema, data JSON schemas,
endnote round-trips, themes/prefs/storage, keyboard map, and the build +
generator decisions Main ordered. It is grounded in the actual files
(`shared/reader.js`, `shared/reader.css`, `shared/art.css`,
`scripts/generate_book_pages.py`, `scripts/build_site.sh`,
`.github/workflows/deploy.yml`, `catalog.json`, live TOC/chapter JSON) and
in rendered baseline screenshots from `http://127.0.0.1:8000/`.

Legend: ✅ frozen stable · 🆕 new in v1 (reader.js/CSS update landing with
this contract; book teams may design against it now).

---

## 1. Files and ownership

| Path | Owner | Notes |
|---|---|---|
| `shared/reader.js`, `shared/reader.css`, `shared/art.css` | ReaderLead | Book teams: never edit; request changes from ReaderLead |
| `scripts/generate_book_pages.py`, `scripts/build_site.sh` | ReaderLead | Preservation mode, §10 |
| `assets/shared/**` | ReaderLead | Shared icons/textures (new dir) |
| `books/<slug>/index.html`, `theme.css`, `art/**`, `design/**` | Book supervisor | Fully book-owned, §3–§4 |
| `books/<slug>/data/**` | Main / text curator | Schema §5; books never hand-edit prose |
| `index.html`, `css/library.css`, `assets/library/**` | HomeEngineer | Home surface |
| `catalog.json` | Main (single writer) | Additive fields only |
| `.github/workflows/deploy.yml` | Main | Parity patch proposed, §11 |

`art.css` stays additive-only: new utility classes or previously-unused
pseudo-elements, never edits to existing rules.

---

## 2. DOM chapter hooks (the stable surface)

Set by `reader.js`. Book CSS/JS keys off these; they never require shared edits.

| Hook | Values | Notes |
|---|---|---|
| ✅ `body[data-chapter]` | Real TOC chapter id (`p1c1`) | Reader view only; absent on cover |
| ✅ `body[data-part]` | Part **roman** (`I`, `II`) | Unchanged from observed behavior |
| 🆕 `body[data-part-id]` | Part id (`part-i`) | Stable across renames of display text |
| 🆕 `body[data-book]` | Book slug (`atlas-shrugged`) | Always present, both views |
| 🆕 `body[data-view]` | `cover` \| `reader` | Replaces view-sniffing via classes |
| 🆕 `body[data-art]` | Motif id from manifest, §4 | Absent when chapter has no art entry |
| 🆕 `#chapter-art` | `<figure>` opener slot | Above `#chapter-meta`; §3 |
| 🆕 `#cover-art` | `<figure>` cover slot | Above `.cover-content`; §3 |
| 🆕 `#chapter-text[data-paras]` | Paragraph count | For opener inscriptions (WtP fragment counts) |
| 🆕 `reader:chapter` event | `CustomEvent` on `document` | `detail: {book, chapterId, partId, partRoman, index, paragraphs, words}` |

Cover view contract: `data-book` + `data-view="cover"` are set; `data-chapter`,
`data-part`, `data-part-id` are absent (a cover is not a chapter).
Reader view: all set. `document.title` remains `<chapter> — <book>`.

Example book selectors (all legal, no shared edits needed):

```css
body[data-book="will-to-power"][data-part-id="part-3"] #chapter-meta { … }
body[data-chapter="p3c7"] #chapter-art { … }
body[data-art="galt-motor"] .meta-rule span { … }
```

Infinite Jest IDs (`p1c1–p1c77` / `p2c1–p2c12`) are PROVISIONAL until the text
curator's freeze notice. IJ manifests MUST also record `part` + sequential
order + full title per entry so a remap is cheap. No other book's IDs are
expected to shift.

---

## 3. Art slots and book-owned art

Two empty declarative slots, injected by `reader.js` if missing from a
book's `index.html` (so all 13 existing pages gain them with zero book edits;
the generator template also emits them for new books):

```html
<figure class="cover-art" id="cover-art" aria-hidden="true" hidden></figure>
<figure class="chapter-art" id="chapter-art" aria-hidden="true" hidden></figure>
```

Guarantees:

- Shared CSS touches slots ONLY via `#cover-art[hidden], #chapter-art[hidden]
  { display: none }` plus neutral max-sizing (`max-width: 100%`). It never
  sets slot backgrounds, padding, or child styles. An empty slot is `hidden`
  and shifts no body-text rhythm.
- Everything inside a slot is book-owned: reader.js inlines the manifest's
  SVG (§4), or book-owned JS fills it on `reader:chapter`. Books MAY ship
  their own script tag in their owned `index.html` (answers SupFountain-2:
  chapter art is NOT CSS-background-only; declarative manifest fill and
  book-owned JS are both sanctioned).
- Book-owned JS MUST NOT rewrite shared IDs/classes outside the two slots
  (except styling via the §2 hooks) and MUST listen for `reader:chapter`
  rather than polling or patching `reader.js` internals.
- Decorative art stays `aria-hidden="true"`. If a book gives a slot a
  `figcaption` with real content, that book's JS sets `aria-hidden="false"`
  and `role="figure"` + `aria-label` itself.

---

## 4. Chapter-art manifest schema (`books/<slug>/design/chapters.json`)

OPTIONAL per book. `reader.js` fetches it 404-tolerantly after TOC load; a
missing/invalid manifest means "no declarative art" — never an error state.

```jsonc
{
  "version": 1,
  "cover":   { "src": "art/cover.svg", "class": "plate", "caption": "…" },
  "default": { "class": "motif" },
  "chapters": {
    "p1c1": { "src": "art/p1-rail.svg", "class": "banner",
              "motif": "galt-line", "caption": "Figure 1 · …" },
    "p3c7": { "motif": "galt-speech" }
  }
}
```

Rules:

- `src` MUST be a book-relative path under `art/` (same-origin SVG inlined
  into the slot; cached per chapter). No remote URLs, no stock hotlinks.
- `class` is a book-defined treatment (`banner`, `plate`, `motif`, …) applied
  to the slot element; book CSS defines the treatments. `motif` sets
  `body[data-art]`. `caption` becomes a `<figcaption>`.
- `default` applies to chapters without an entry; chapters with neither entry
  nor `default.src` keep the slot hidden.
- Books may ALSO/INSTEAD drive slots from their own JS via `reader:chapter`.
  Cohort workers author `art/<cohort>.svg` + `design/<cohort>.json`; the
  supervisor merges cohort JSON into `design/chapters.json` sequentially.
- IJ teams: keep cohort JSON entries keyed by chapter id AND annotated with
  `part`, `order`, `title` for the provisional-ID remap.

---

## 5. Data JSON schemas (read-only for book teams)

`data/toc.json`:

```jsonc
{ "title": "…", "author": "…", "dedication": "…?",
  "notes_part": "part-2"?,                      // 🆕 optional; else auto-detect, §6
  "parts": [ { "id": "part-i", "roman": "I", "name": "…", "subtitle": "…?",
               "chapters": [ { "id": "p1c1", "number_label": "Chapter I",
                               "roman": "I", "title": "…", "word_count": 1234 } ] } ] }
```

`data/chapters/<id>.json`:

```jsonc
{ "id": "p1c1", "number_label": "…", "roman": "…", "title": "…",
  "part": "part-i", "part_roman": "I", "part_subtitle": "…?", "index": 1,
  "paragraphs": ["…", …],                        // strings; order significant
  "epigraph": { "text": "…", "source": "…"? }?,  // 🆕 optional; rendered above ch.1 graf
  "note_refs": [ { "para": 12, "match": "…", "note": 211 } ]? }  // 🆕 §6
```

`data/notes-index.json` (optional, curator-generated): `{ "211": "p2c7", … }`
mapping note number → notes-chapter id.
## 6. Endnotes and cross-references (IJ-driven, shared mechanism)

Ground truth (verified in data): IJ notes live in `part-2` chapters `p2c1…p2c12`
("Notes 1–23", …, "Notes 385–388"); note paragraphs lead with `NNN. ` (and
rare `a. ` sub-notes, e.g. `Q.v. Note 304 sub.`); notes cross-reference each
other (`Q.v. Note 211 sub.`, `See Note 304 supra.`, `(q.v. Note 78)`,
`Expanding where appropriate on Note 12`). Body chapters (`p1c*`) currently
contain ZERO machine-readable note markers — the extraction dropped the
print superscripts — so body→note links activate ONLY from curator-supplied
`note_refs` (§5); the reader never guesses.

Shared behavior (landing with this contract):

1. **Note anchors.** In the notes part (explicit `notes_part`, else the part
   whose chapter titles are majority `Note…`-prefixed), paragraphs matching
   `^(\d{1,3}[a-z]?)\.\s` get `id="note-<N>"`, `class="reader-note"`,
   `data-note="<N>"`. Sub-note `a.` paragraphs attach to the preceding note
   as `.reader-note-sub`.
2. **Note→note links.** Inside notes-part text, the idioms `Q.v. Note N`,
   `q.v. Note N`, `See Note N supra`, `Note N supra`, `(q.v. Note N)`,
   `on Note N` become `<a class="reader-noteref" href="#note-N" …>`. Clicking
   resolves in order: already-loaded chapter → `notes-index.json` →
   bounded fetch through cached notes-part chapters. Unresolvable refs stay
   plain text (never a dead link).
3. **Body→note links.** When a chapter carries `note_refs`, the `match`
   substring of paragraph `para` (0-based) becomes the same `.reader-noteref`
   anchor. Invalid entries (bad index / no match) are ignored, never fatal.
4. **Backlinks.** Following any note link pushes `{chapterId, scrollY}`;
   the reader shows a return chip (`data-action="note-return"`, "↩ Return to
   <chapter>") and restores exact scroll. `Esc` on a note target also offers
   return. Arrival flashes the target via `:target` styling + a
   `reader-note-flash` class (removed after animation; no-op under
   reduced-motion).
5. **Styling hooks (book-safe):** `.reader-note`, `.reader-note-sub`,
   `.reader-noteref`, `.note-return-chip`, `#chapter-text:has(.reader-note)`
   for notes-chapter treatments (e.g. hanging numerals).

---

## 7. Paragraph classifiers (shared convention, answers SupWtP-2)

Applied by `reader.js` at render, always-on, narrowly scoped; book CSS styles
them. `reader-` prefix is reserved for shared classes — books MUST NOT mint
`reader-*` classes of their own.

| Class | Rule |
|---|---|
| `.reader-nb` | Paragraph starts with `NB `, `NB.`, `NB:`, `N.B. ` |
| `.reader-note` / `.reader-note-sub` | §6, notes part only |
| `.reader-fragnum` | Paragraph starts with `NNN. ` numeral (GS GR6); also `no-drop` on openers |
| `.no-drop` | Unchanged: short/quote-led/numeral-led openers skip the drop cap |

`#chapter-text[data-paras]` + `reader:chapter.detail.paragraphs/words` cover
fragment-count inscriptions with no reader.js change per book.

---

## 8. CSS cascade and tokens (answers ArtDirector + SupFountain-2)

- Shared CSS (`reader.css`, `art.css`) ships inside **`@layer shared`** 🆕.
  Book CSS (`theme.css`, `design/*.css`) is UNLAYERED and therefore always
  wins over shared on any specificity — load order stays shared-first,
  book-second as a backstop. Shared CSS never uses `!important` except the
  print and `prefers-reduced-motion` guards.
- Shared never resets book-owned selectors: anything inside `#chapter-art` /
  `#cover-art`, any `body[data-*]`-qualified book rule, and any book-declared
  class is exclusively the book's. Disputes: ReaderLead amends shared CSS.
- Reserved shared token names (books MAY override, MUST scope under
  `html[data-theme="<t>"]` or `:root` for cross-theme defaults; SHOULD cover
  all 8 themes when overriding):
  `--bg --bg-elevated --bg-soft --surface --border --border-strong --text
  --text-muted --text-faint --accent --accent-soft --accent-hover --copper
  --on-accent --shadow --reader-max --font-serif --font-sans --text-size
  --leading --header-h --ease`
- 🆕 Book-authored measure tokens (A.3): `--chapter-max` (per-chapter relief)
  joins `--reader-max` (book default) in the §8 token list. A book sets
  `--chapter-max` on `body[data-chapter="…"]` (or a part/chapter group); the
  shared layered measure rules (end of `reader.css`) compose it with the
  reader's narrow/standard/wide pref: standard shows authored measures
  exactly, narrow caps wide books at 40rem, wide expands to at least 64rem.
  Unlayered book `max-width` rules still win outright per-node (opting that
  node out of pref composition); books SHOULD prefer the tokens so prefs
  compose. (2026-10-15 closeout: BT's delivered `--chapter-max: 38rem` on
  p2c36/p3c24/p3c25/p3c39 resolves identically under A.3; Main ruled no
  book-side change needed, F1 closed, BT needs nothing further.)
- Reserved shared selectors: `#cover #reader .reader-header #toc-drawer
  #settings-panel #loading #chapter-text .chapter-meta` + all current
  children, `.reader-*`, `.art-*`, `[data-action]`. Books style them only via
  §2 hooks or token overrides — never by unqualified redefinition of layout
  structure (a book that must restructure chrome requests a contract
  extension, not a `!important` war).
- Book font loading: books add their own `<link>`/ `@font-face` in owned
  files; `@font-face src` SHOULD be book-relative (`design/fonts/…`) so the
  build ships it (§11). System/local fallbacks are REQUIRED (offline + no-JS
  still read).

---

## 9. Themes, prefs, storage, keyboard (all ✅ stable, no renames)

- Themes: `dark Ink · nocturne · verdant · oxblood · candlelight · sepia ·
  light Vellum · slate`, plus `auto` (resolves light ONLY when the OS asks;
  dark-first otherwise). HomeEngineer: values frozen, no rename coming.
- First visit is dark (`dark` default; library key seeds only when the book
  key has no explicit theme; explicit per-book pick always wins and mirrors
  back to the library key).
- Storage: per-book `reader-<slug>` → `{theme,size,leading,font,measure,
  chapterId,scrollY,read[]}`; library `literary-library-theme`. Sizes
  `sm/md/lg/xl`, leading `tight/normal/loose`, font `serif/sans`, measure
  `narrow/standard/wide`. Every pref persists and repaints on load.
- `data-action` frozen: `begin open-toc close-toc retry resume library` 🆕
  plus `note-return`. Element IDs frozen (reader.js contract header stands).
- Keyboard: `Esc` close dialog / blur field · `s` settings · `t` contents ·
  `j/k` next/prev chapter · `Alt/⌘+←/→` prev/next · 🆕 `/` focuses TOC filter
  when drawer open · `←/→` travel inside settings rows · focus returns to the
  invoking button on close (TOC included 🆕). All ignored inside inputs
  except `Esc`.
- Progress/resume: chapter + debounced scrollY persist; 80% depth marks read;
  cover "Continue" shows the saved chapter label; TOC shows per-book progress.

---

## 10. Generator decision (Main blocker #1 — DECIDED)

`scripts/generate_book_pages.py` is now NON-DESTRUCTIVE:

- A book with `design/ART-DIRECTION.md` is NEVER regenerated (printed as
  skipped). Supervisor-authored `index.html` / `theme.css` are safe.
- Otherwise files are written ONLY when missing (new-book bootstrap), unless
  `--force` is passed explicitly by the operator.
- The emitted template for new books includes the §3 slots and a
  `BOOK_CONFIG.notesPart` passthrough (`meta.notes_part` or `null`).
- No build/deploy step runs the generator. Main: it is frozen as specified —
  book teams MUST NOT work around it; report gaps to ReaderLead.

---

## 11. Build decision (Main blocker #2 — DECIDED)

`scripts/build_site.sh` now ships (❗ required for every art asset to work):

- `assets/**` (covers `assets/library/**`, `assets/shared/**`) when present.
- Per book: existing `index.html theme.css meta.json data/**` PLUS
  `books/<slug>/art/**` and `books/<slug>/design/**` (SVG, CSS, JSON,
  manifests, fonts) when present.
- Deploy parity: Main applies the mirrored `deploy.yml` patch (proposal sent
  separately by ReaderLead — same two copy blocks). Local `_site` builds and
  GitHub Pages artifacts then match exactly.

Book asset placement (sanctioned): authored SVG/images → `art/`; chapter
manifest + cohort CSS/JSON + fonts → `design/` (`design/fonts/`). Reference
everything book-relatively (`art/x.svg`, NOT `/art/x.svg`, NOT remote).

---

## 12. Reader chrome rebuild (in flight, owned by ReaderLead)

Observed baseline defects being fixed in `shared/*` (book teams: no action):

1. `LIBRARY_HREF` referenced but never defined — Library buttons throw.
2. `.chapter-nav` has no base grid rule — prev/next cards mislay.
3. Cover resume detail span created but never filled.
4. TOC drawer lacks focus return, `/`-to-filter, arrow travel.
5. Note round-trips (§6), opener art slots (§3), `@layer shared` (§8).
6. Visual rebuild of contents / settings / header / opener / nav / notes UI:
   dark-first, calm, spacious, book-agnostic — books bring the identity.
7. F13 validator hook: `?fail=<chapter-id|*>` (or `readerFailChapter`
   query/session flag) forces one simulated chapter-load failure so final
   validation can exercise error → retry → recover end-to-end; single-shot
   per page load, production behavior otherwise unchanged.

Evidence: `.omp/design/reader/` (baselines, direction, prototype, checks).

---

## Appendix A — Minimal book integration checklist

### A.0 Ruling (2026-10-15, Zarathustra chapter-end seals)

Chapter-end authored seals are sanctioned via a `body[data-chapter]`- (or
`[data-part-id]`-) qualified override of `.chapter-text > p:last-child::after`
carrying authored SVG `url()` content. Rationale: unlayered book CSS always
wins over `@layer shared`, and the contract's reserved-selector rule (§8)
explicitly permits books to style shared nodes via §2 hooks — an SVG-content
override is authored art, not a glyph-label shortcut. Requirements: content
MUST be `url()` art (never a bare glyph/emoji), sized ≤ 32px so it reads as
a seal not a hero, and MUST NOT alter paragraph layout (no added margins that
shift body rhythm). No new end slot is added in v1; a declared end element
may arrive in a later minor version if three or more books need one.

### A.1 Ruling (2026-10-15, IJ fragment-addressed SVG — SUPERSEDED by A.2)

Historical: fragment `src` (`art/cohort-a.svg#motif`) was briefly sanctioned,
then superseded the same day by the explicit `symbol` key (A.2) per Main's
ruling. Reader.js honors fragments for backward compatibility, but all new
manifests MUST use `{ "src": "art/file.svg", "symbol": "id" }`.

### A.2 Ruling (2026-10-15, Main-ordered `symbol` key — v1.1 addendum)

CONFIRMED: manifest entries accept an optional explicit `symbol` key alongside
`src`. `src` points at the sprite SVG file; `symbol` names the `<symbol>` /
`<g id>` to inline. Reader.js fetches `src` once (cached per file), clones the
matching element into the slot wrapped in `<svg>` with the source `viewBox`
(or the symbol's own when present). This REPLACES the A.1 fragment-URL form as
the sanctioned convention — no `#frag` hackery in `src`: use `{ "src":
"art/cohort-c.svg", "symbol": "seal-p1c3" }`. A.1 fragments remain honored
for any manifest already authored (backward compatible), but all new manifests
MUST use `symbol`. Missing symbol id → slot stays hidden + console warning,
never an error state. Per-chapter cache key: `src + "\0" + (symbol || "")`.

### A.3 Ruling (2026-10-15, Being and Time B7 measure composition)

RULED (SupBeingTime-3 question): the shared measure preference NO LONGER
force-overrides authored chapter measures. The old unlayered
`html:root[data-measure] #chapter-text > p { max-width: … !important }` rule
is removed (it also contradicted the §8 "shared never uses `!important`
except print/reduced-motion" clause). In its place, layered composition
rules at the end of `shared/reader.css` read book-authored tokens:
`--reader-max` (book default, §8) and the NEW `--chapter-max` (per-chapter
relief, §8). Effective prose width = authored measure at standard (a 65ch
readability cap applies when the authored measure exceeds it); narrow caps
wide books at 40rem while books already narrower keep their authored
measure; wide expands everything to at least 64rem (verified matrix, 1440w:
34rem book → 544/544/1024; 38rem chapter → 608/608/1024). BT's B7 relief
stands as implementable book-side: replace the four-chapter
`max-width: min(38rem, 68ch)` rule with
`body[data-chapter="…"] { --chapter-max: 38rem }` selectors (same four IDs),
which then composes with all three prefs. Books that keep unlayered
`max-width` rules keep winning outright for those nodes (layer order, §8) —
that now means opting those nodes OUT of pref composition, so prefer the
tokens. No `!important` wars, no shared-file edits by book teams.

1. Read §2 hooks; style chapters via `body[data-chapter]` / `[data-part-id]`.
2. Author `art/*.svg`; describe chapters in `design/chapters.json` (§4).
3. Override tokens per-theme as needed (§8); load fonts book-relatively.
4. Optional owned JS: listen `reader:chapter`, fill `#chapter-art`, never
   touch shared internals.
5. Write `design/ART-DIRECTION.md` early — it also locks the generator (§10).
6. Verify in `_site` (not just source): art, fonts, manifest all ship (§11).
