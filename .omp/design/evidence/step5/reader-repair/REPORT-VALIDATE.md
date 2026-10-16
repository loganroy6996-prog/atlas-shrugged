# REPORT-VALIDATE.md — Independent validation of the shared reader-preference controls
**Step 5 reader-repair closeout · verification-only pass · 2026-10-16**

Role: independent validator (writes evidence only; no implementation files touched).
Site under test: `http://localhost:8000` serving the rebuilt `_site` — the real built surfaces, live prefs, live storage.
Tooling: Playwright headless Chromium (`--no-sandbox`), `reducedMotion: 'reduce'` emulated on every context.
Scope: **all 13 books × all 3 viewports (1440×1000, 820×1180, 390×844) — no sampling.**

## Verdict summary

**PASS.** The repaired shared reader genuinely applies, composes, and persists every
reader preference (measure · size · leading · font) across the full 13 × 3 matrix on the
built site. 13/13 books PASS all controls at desktop; 13/13 PASS measure/size/leading/font/
persistence/overflow at tablet and phone. IJ's endnote round-trip works. No sibling console
errors beyond the known favicon 404. No horizontal overflow anywhere, including the 390 full
pref sweep (48 states per book).

## Verdict table (13 books × control) — every number OBSERVED this run, not copied

measure = rendered/computed max-width, narrow·standard·wide px @1440 (computed always within
±0.01px of the re-derived formula; tol ±2px). size = probe fontSize px. leading = probe
line-height px @ size=lg. ovf = overflow sweep ok at all viewports (390 = 48-state sweep).

| book | measure (n/s/w rendered=computed) | size sm·md·lg·xl | leading t·n·l | font serif→sans | persistence | overflow | keyboard@1440 | notes |
|---|---|---|---|---|---|---|---|---|
| atlas-shrugged | 640/640 · 764.34/764.346 · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Crimson Pro → **DM Sans** | PASS | PASS | PASS (13 tabs, ring visible, Esc→btn-settings, arrow+Enter commit, `s` opens) | n/a — no note_refs encoded; no annotation UI by design |
| being-and-time | 544/544 · **544/544 (equal = expected)** · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Source Serif 4 → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a — no note_refs |
| beyond-good-and-evil | 640/640 · 674.53/674.544 · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Source Serif 4 → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| forty-ways-to-look-at-churchill | 592/592 · **592/592 (equal = expected)** · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Newsreader (Fraunces on the authored opener) → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| gay-science | 592.08/592.085 · 592.08/592.085 · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Cormorant Garamond → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a — probe used the documented fallback (§Probe) |
| gentle-introduction | 640/640 · 672/672 · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Source Serif 4 → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| infinite-jest (p1c32 mandatory) | 608/608 · **608/608 (equal = expected)** · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Newsreader → **DM Sans** | PASS | PASS | PASS (13 tabs…) | **PASS — endnote round-trip worked** (see §Notes) |
| open-letter | 640/640 · 648.86/648.859 · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | EB Garamond → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| sovereign-individual †expected-authored | rendered 340 · 436 · 616.64; **computed maxWidth 640 · 715.097 · 1024 responds exactly per formula** | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Source Serif 4 → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| the-fountainhead | 640/640 · 674.53/674.544 · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Source Serif 4 → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| thus-spoke-zarathustra | 640/640 · **640/640 (equal = expected, A=40rem)** · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Spectral → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| twilight-of-the-idols | 640/640 · **644.8/644.804 (distinct, per contract note)** · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Cormorant Garamond → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a |
| will-to-power | 608/608 · **608/608 (equal = expected)** · 1024/1024 | 18.4·20.8·24·27.2 | 38.4·44.4·50.4 | Newsreader → **DM Sans** | PASS | PASS | PASS (13 tabs…) | n/a — probe used the documented fallback (§Probe) |

Tablet (820×1180) and phone (390×844) — **all 5 pref columns PASS for all 13 books** (no keyboard
and no notes exercise there, per brief <1072 rule uses computed maxWidth + rendered monotonicity):

| book | 820 computed max-width n·s·w | 820 rendered (mono ✓) | 390 computed n·s·w | 390 rendered (container-clamped, mono ✓) |
|---|---|---|---|---|
| atlas-shrugged | 640·764.346·1024 | 640·756·756 | 640·764.346·1024 | 353·353·353 |
| being-and-time | 544·544·1024 | 544·544·756 | 544·544·1024 | 353·353·353 |
| beyond-good-and-evil | 640·674.544·1024 | 640·674·756 | 640·674.544·1024 | 353·353·353 |
| forty-ways | 592·592·1024 | 592·592·772 | 592·592·1024 | 342·342·342 |
| gay-science | 592.085·592.085·1024 | 592·592·756 | 592.085·592.085·1024 | 353·353·353 |
| gentle-introduction | 640·672·1024 | 640·672·756 | 640·672·1024 | 353·353·353 |
| infinite-jest | 608·608·1024 | 608·608·756 | 608·608·1024 | 353·353·353 |
| open-letter | 640·648.859·1024 | 640·648·756 | 640·648.859·1024 | 353·353·353 |
| sovereign-individual † | 640·715.097·1024 | 640·715·756 | 640·715.097·1024 | 353·353·353 |
| the-fountainhead | 640·674.544·1024 | 640·674·756 | 640·674.544·1024 | 353·353·353 |
| thus-spoke-zarathustra | 640·640·1024 | 640·640·756 | 640·640·1024 | 353·353·353 |
| twilight-of-the-idols | 640·644.804·1024 | 640·644·756 | 640·644.804·1024 | 353·353·353 |
| will-to-power | 608·608·1024 | 608·608·756 | 608·608·1024 | 353·353·353 |

820 note: wide renders at 756–772px because the container (viewport 820 minus body
padding) clamps the 1024 computed wide measure; the computed value itself still tracks the
formula exactly. At 390 the three computed max-widths (≥ 592px) all exceed the ~353px
container, so rendered widths are equal and monotonicity holds trivially; no overflow.
Sovereign at 820 (<900px) releases the plate grid per its authored media query and n·s·w
renders 640·715·756 — monotonic ✓.

## sovereign-individual — †expected-authored condition verified (not a defect)

Probe chapter p1c5 (*The Life and Health of the Nation State*), manifest class `plate`, art
visible (`#chapter-art.plate`, not hidden), grid active. Observed DOM/CSS state verbatim:

- `#reader-body` → `display: grid; grid-template-columns: 407.359px 616.641px; containerWidth 1136` (authored `minmax(300px, 38%) 1fr` + 3rem gap, `.reader-body { max-width: 72rem }` book pin wins for the BOX per §8).
- Chapter-text column box = **616.64px** (the authored plate-rail layout the shared comment documents, ~62% of the 1005px inner container after the rail+gap).
- The probe paragraph's **computed `max-width` responds across prefs exactly per formula: narrow 640px → standard 715.097px → wide 1024px** (A = 736px = 46rem, 65ch = 715.11px measured in-probe), while rendered stays inside the grid column (340 · 436 · 616.64) — monotonic ✓.
- Persistence on sovereign also resolved the wide computed measure to 1024px on the probe after reload.
- Only flag-level condition: per the brief, a defect would be computed maxWidth NOT responding — it responded. Tagged `expected-authored`.

## Probe identity (recorded per verification.json)

Primary rule: `#chapter-text > p` with **no class attribute**, document-order index ≥ 10, length > 400 chars,
numeral-led (`NNN. ` → `.reader-fragnum`) and NB-led (`.reader-nb`) excluded, `:first-of-type` openers excluded
by the shared block itself. Fallback (documented, then used): longest classless paragraph ≥ index 5.

| book | chapter | para idx | len | fallback? |
|---|---|---|---|---|
| atlas-shrugged | p1c3 | 13 | 413 | no |
| being-and-time | p2c19 | 11 | 596 | no |
| beyond-good-and-evil | p1c2 | 10 | 1396 | no |
| forty-ways-to-look-at-churchill | p1c1 | 10 | 1013 | no |
| gay-science | p2c63 (33. Stellar Morals) | **5** | 758 | **yes — GS is aphorism-per-chapter; entire library scan (448 chapters) holds only 3 paragraphs >400 chars, only one at idx ≥ 5** |
| gentle-introduction | p1c1 | 11 | 713 | no |
| infinite-jest | **p1c32 (mandatory)** | 12 (408 chars; refs on paras 25/28/31/50 exercised in §Notes) | 408 | no |
| open-letter | p1c1 | 11 | 403 | no |
| sovereign-individual | p1c5 (plate) | 10 | 1212 | no |
| the-fountainhead | p1c1 | 10 | 581 | no |
| thus-spoke-zarathustra | p1c1 | 105 | 513 | no |
| twilight-of-the-idols | p1c10 | 10 | 1126 | no |
| will-to-power | p2c1 | **5** | 848 | **yes — every WtP opener/mid chapter paragraph ≥10 carries `.reader-nb`/numeral-led classes** |

## Persistence + storage (read from `shared/reader.js`, confirmed live)

- Real key observed after UI prefs: **`reader-<slug>`** (13/13, e.g. atlas:
  `{"theme":"dark","size":"xl","leading":"loose","font":"sans","measure":"wide","chapterId":"p1c3","scrollY":0,"read":[]}`).
- `literary-library-theme` (the second key in reader.js) is written only when an explicit theme is chosen — it appeared during the keyboard theme toggle; it is not a per-book pref key.
- After `page.reload()` → re-enter via the real **“Continue where you left off”** (`data-action="resume"`) on 13/13 books (no resume-fallback path needed): `documentElement.dataset` = wide/xl/loose/sans; probe computed fontSize 27.2px, line-height 57.12px (27.2 × 2.1), computed max-width = expected wide (max(A,1024)) within 2px, fontFamily “DM Sans…”.

## Notes/annotations — honest finding

- `shared/reader.js` defines **no user-annotation (create-note) control** by design: the notes surface is endnote
  round-trips only — `.reader-noteref` links (from notes-part text via NOTEREF_RE and from body chapters only
  where the curator supplied `note_refs`), the `#note-return-chip` (↩ Return to <chapter>), and `Esc`/chip return.
- **Infinite Jest** is the only book with `note_refs` (299 total; 5 on p1c32: notes 62/63/65/66/67).
  Exercised on the probe chapter: clicked the note-62 ref in paragraph 25 of p1c32 → jumped to the notes chapter
  `p2c3`, target `#note-62` visible (rect y=433), chip visible with exact text “↩ Return to Late October — Year of
  the Depend Adult Undergarment”; `Esc` returned to p1c32 with chip hidden and scroll restored. **PASS.**
  Screenshot (post-return state; the chip itself was captured in the recorded state above):
  `screenshots/infinite-jest-note-return-chip-1440.png`.
- The other 12 books encode zero `note_refs`, so no endnote entry point exists to exercise there — recorded as
  `n/a (no note_refs; reader never guesses per contract §6)`, **not** a defect.
- There is therefore no create/save/reload user-note flow anywhere in the library because the reader does not
  ship one. This is the honest record of surface #9.

## Keyboard + panel (1440 only, all 13 books — minimum listed by brief covered and exceeded)

Every book: Tab reached `#btn-settings` in **13 tabs**; computed focus indicator changed on `:focus-visible`
(2px accent outline + offset, visible in `atlas-shrugged-focus-visible-1440.png`); Enter opened the panel;
Escape closed it and **focus returned to `#btn-settings`**; openSettings auto-focus was the active seg button;
`ArrowRight` on the theme row moved focus AND committed (`dark → nocturne`, recorded + mirrored to
`literary-library-theme`); Tab reached other rows (visited prefs recorded, e.g. size row); Enter/arrow within the
size row committed values (xl→md; `aria-pressed`/actives updated); `s` toggled the panel; screenshot
`infinite-jest-settings-panel-open-1440.png` shows XL·Loose·Sans·Wide all ACTIVE on p1c32 after reload.

## Console / network findings

- 39 book×viewport runs: **no console errors, no pageerrors, no non-favicon 4xx, no requestfailed** entries.
- The only console error ever seen (first desktop pass, atlas) was the known `favicon.ico` 404; the response
  listener confirms no other 404/failed request sequence exists. Filtered as directed.
- Art-slot fetches that 404 would surface as reader console *warnings* (`[reader] art skipped …`); none of the
  13 sampled chapters emitted any (census chapters chosen are manifest-resolved).

## Methodology notes (validator corrections, not implementation defects)

1. **Expectations derived from live values, not sampling:** for every state I measured, in-page,
   `A = var(--chapter-max, var(--reader-max, 52rem))` via an injected width probe inheriting the paragraph's
   custom properties (rem→px at root 16), plus `65ch` as 65 “0” glyphs in a hidden `span` with `font: inherit`,
   `letter-spacing: 0`, `white-space: pre` **inside the same probe paragraph**, after `document.fonts.ready`.
   narrow = min(min(A,65ch),40rem), standard = min(A,65ch), wide = max(A,64rem) — the exact semantics the
   unlayered `--reader-measure` block resolves; observed computed maxWidth matched within ±0.01px everywhere.
2. **First check-run correction:** my first font pass measured `#chapter-text > p` (the opener). The shared
   spacing block deliberately excludes `:not(:first-of-type)` openers — so openers keep authored typography at
   BOTH serif and sans by design (Atlas/BGE/FortyWays/IJ/OpenLetter showed identical families). Re-measured on
   the probe paragraph (idx ≥ 10): DM Sans everywhere. In the earlier partial run BGE/Fountainhead/WtP first
   paragraphs ALSO showed authored sans-container rules from those books’ stylesheets
   (BGE re-points `--font-serif` on `#app` at `data-font="sans"`; FHN sets `.chapter-text { font-family: var(--font-sans) }`;
   WtP `#chapter-text` system sans) — authored, container-level, and correctly superseded ON PROSE PARAGRAPHS by
   the higher-specificity shared sans rule that resolves `--reader-sans` (DM Sans was observed on all probes).
3. Related rulings intact: BT B7 (`--chapter-max` chapters compose; p2c19 itself unaffected at 34rem →
   544/544/1024), IJ p1c32 wide ≥ 64rem, Twilight narrow/standard distinctness.

## Anchors — cross-check outcome (all OBSERVED, refuted none)

- atlas p1c3 prose 640/764.34/1024 ✓ (nav 640/832/1024 ✓ observed in `nav maxWidth/navRect`),
- twilight p1c10 640/644.8/1024 ✓ · IJ p1c32 608/608/1024 ✓ · BT p2c19 544/544/1024 ✓
- size steps 18.4→27.2 ✓ · leading @lg 38.4/44.4/50.4 ✓ · sans = DM Sans ✓ (13/13, `document.fonts.check` positive)

## Evidence index

- Machine-readable per book × viewport × pref: `verification.json` (merged), plus raw passes `verification-1440.json`, `verification-820.json`, `verification-390.json`.
- Probe selection + endnote census: `chapters.json` (from `preflight-probes.mjs`).
- Harness scripts: `validate-all.mjs` (per-viewport batch), `assemble.mjs` — rerun with `node validate-all.mjs 1440|820|390`.
- Screenshots (20 PNGs, all referenced above/in the JSON): `screenshots/atlas-shrugged-{focus-visible,settings-panel-open,wide-state}-{1440,390,820}…`, `infinite-jest-{note-return-chip,settings-panel-open,wide-state}-1440.png`, `infinite-jest-wide-state-390.png`, `being-and-time-wide-state-{1440,390,820}.png`, `sovereign-individual-{plate-grid-wide,narrow-state,wide-state}-1440.png`, `sovereign-individual-wide-state-{390,820}.png`, `twilight-of-the-idols-wide-state-{1440,390,820}.png` (+1 choice book = twilight).

## Not-run / limitations

- Keyboard/panel and notes round-trip exercised at desktop only (per brief “per book at 1440×1000 at minimum”); tablet/phone cover prefs, overflow and persistence.
- The `?fail=` error hook is outside this repair’s scope (covered by the separate contract F13 validation).
