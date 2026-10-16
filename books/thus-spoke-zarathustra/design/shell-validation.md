# Solar Gospel Shell — validation report (validator: ZaraShellValidator)

Status history: INCOMPLETE (first pass, pre-landing) → **REVISE** (second pass, shell landed) → **PASS** (third pass, SH-1 + P3-1 re-verified on built site :8099).

Date: 2026-10-15. Scope: book shell ONLY — `art/seals.svg`, `art/cover.svg`,
`theme.css`, `index.html` shell integration, `zara.js`. Supervisor-owned
`design/chapters.json` + `design/cohort-pN.css` are verification CONTEXT
(manifest census, render activation), not shell verdict targets — but live
defects in them that the shell renders are recorded precisely with owners.

Read for the second pass: all 5 shell files in full (seals.svg 247 lines,
cover.svg 97 lines, theme.css 682 lines, index.html 166 lines, zara.js 157
lines), `design/chapters.json` (computed census), `design/cohort-p2.css` /
`cohort-p3.css` fragment rules (grep), `shared/art.css` ornament rules
(lines 205–295), `shared/reader.js` slot/symbol path (lines 539–595).

Render evidence: review server `http://127.0.0.1:8219/` (repo root, this
validator's own service; NOTE: first server on :8211 served a stale cached
theme.css to the browser even though `curl` returned new bytes — every
evidence probe below was re-run on :8219 with `themeRules=85` and Solar
head confirmed). Tabs `zara-8219`, viewports 1440×1000 / 820×1180 /
390×844. Screenshots viewed in-session: cover (3 widths), p1c1 opener +
close, p1c3 seal slot, p2c9 song, p3c2 scene, p3c16 seven-seal arc
(close-up), p4c9/p4c10/p4c11 pivot flags, p4c19, p4c20, TOC drawer,
settings card, sepia cover + reader, p3c2 close-defect close-ups.
Page errors: `[]` on every inspected chapter (console-clean holds).

## 1. art/seals.svg + art/cover.svg: PASS (with one live-fragment caveat)

- Well-formed XML: both parse via `xml.etree` (seals: 12 symbols; cover: 2).
- Exact Contract ids + viewBoxes, ALL present:
  seals.svg: `seal-dawn`, `seal-night`, `seal-zenith`, `seal-sign` (all
  `0 0 96 96`), `roundel-sun-serpent` (`0 0 240 240`), `mini-dawn`,
  `mini-night`, `mini-zenith`, `mini-ember`, `mini-lion-doves` (all
  `0 0 32 32`), `sun-rule-wide` (`0 0 320 16`), `festival-rule`
  (`0 0 320 24`); cover.svg: `cover-roundel-field` (`0 0 480 480`),
  `cover-ray-frieze` (`0 0 1200 240`). Plus 7 `<view>` crops
  (`view-mini-*`, `view-sun-rule-wide`, `view-festival-rule`) with correct
  sheet viewBoxes (seals.svg:240–246).
- Self-contained: zero `href="#…"`, zero `url(#…)` in either file; only
  `drop-shadow`/`<use>` string hits are inside author comments
  (seals.svg:6,14,163; cover.svg:6 — verified by line read, not elements).
  Zero `radialGradient`/`linearGradient`/`filter`/`feGaussianBlur`/`<image>`.
  Only `<text>` in seals.svg: the 4 seal legends DAWN/NIGHT/ZENITH/SIGN
  (Cinzel stack); cover.svg has none (inscription is HTML type). Z1 holds.
- Z3 Roundel read (honest, from the 621px close-up + source lines 72–101):
  PASS, not clip-art. Double-ring seal frame, 20 engraved rays in two
  weights, flat gold disc with incised inner rings and night-core Boss;
  the serpent is a genuine coiled band (annulus path with outlined outer
  AND inner contours, 12 belly-scale ticks, a real head at 12 o'clock with
  two eyes + snout + jaw plates, and a tail rattle/finial at 3 o'clock).
  Anatomy is stylized-engraved rather than naturalistic, which matches the
  Blake/van-de-Velde lineage the identity claims. The cover variant
  (cover.svg:43–51) scales the same construction to 480 with a wider ray
  field. No glow, no gradients — incised, not luminous.
- Fragment-crop caveat (evidence, not a shell fail): this validator
  rendered `art/seals.svg#view-mini-dawn` and `art/cohort-p3.svg#close-p3c2`
  as `<img>` — both paint the full sheet at natural size (640×480 /
  640×1560) rather than the `<view>` crop in this Chromium. The `<view>`
  elements are correctly authored; the crop behavior is a browser image-
  context limitation the shell does not depend on (theme.css contains zero
  `url()` references — verified by grep; the shell never loads fragments).
  Recorded because the supervisor track relies on `#view` crops for P3
  closes (see §5).

## 2. theme.css: PASS on Z1/tokens/guards; REVISE on fleuron glow (1 rule)

- Z1 grep audit (`text-shadow|radial-gradient|conic-gradient|drop-shadow`):
  zero hits in rule bodies — the only matches are the audit-pattern comment
  (theme.css:12–17) and `box-shadow: none` resets (:270,:392,:533), all
  verified by line read. `blur|25B2|25B3|2766|25C6|4n+|!important`: zero rule-
  body hits. The alpine chevrons, ▲-glyphs, mod-4 cycling, and glow discs
  are fully gone. The shared `.cover-glow` element is `display:none`
  (computed `glowDisplay:none` on :8219).
- All 8 themes scoped with Solar mappings (:29–190): dark/nocturne/verdant/
  oxblood/candlelight/slate keep gold accent + ember copper; sepia/light
  correctly darken the accent to `#8B5A14` for paper contrast. Sepia cover
  renders bone-dark type on paper (screenshot) with the Roundel re-inking
  via `--seal-ink` — the currentColor architecture works cross-theme.
- Cinzel liturgical (Z2): arguable PASS. Cinzel carries the cover
  inscription stack, part lines, seal legends, TOC headers, nav labels,
  drop caps; Spectral carries all prose with italic song voice. Computed
  fonts on :8219: cover title `Cinzel…96px`, body `Spectral`, both with
  `document.fonts` status `loaded`. Inscriptional + seal/serpent/song
  apparatus throughout — not bronze-tablet minimalism.
- Responsive + print + reduced-motion: media rules verified live in the
  parsed sheet (`(max-width:560px)`, `print`, `prefers-reduced-motion` all
  present). 820px cover/tablet and 390px cover/phone shot with
  `scrollWidth==clientWidth` (no overflow) on cover, p1c1, p2c9. Reduced-
  motion emulation: `animationName:none` on the meta fleuron,
  `transitionDuration:1e-05s` on the progress fill. Print rules enumerated
  from the live sheet (6 rule groups incl. seal sizing + chrome hiding).
- Contrast (computed, dark): bone `#F2E7CF` on night `#0A0E21` = **15.58:1**
  (≥10:1 ✓). Gold `#E8A93D` is graphic-only in the shell except the
  ≥3rem cover title accent + Cinzel drop caps (large-text rule holds).
- REVISE item SH-1 (shell-owned, one rule): §8 "Neutralize shared ornament
  glow" (theme.css:589–604) recolors the shared fleurons but does NOT clear
  their glow — computed `.chapter-meta::after` `textShadow` is still
  `0px 0px 18px rgba(212,175,100,.35)` (shared/art.css:224 `text-shadow:
  var(--art-glow)` wins because the shell sets no `text-shadow` at all).
  The ❦ fleuron + diamond ticks also remain visible in every opener/cover
  (screenshots), which is shared-Chrome + contract §8 territory: the shell
  may not unilaterally `content:none` another owner's ornament without a
  ruling (cf. directions.md:309–311 on `::after` ownership). REQUIRED fix:
  add `text-shadow:none` (+ drop-cap `background:none` already present …
  extend to its `text-shadow` too, shared/art.css:276–280) to the §8 block.
  Whether the ❦/◆ glyphs themselves stay is a SUPERVISOR→ReaderLead ruling
  (Z7 bans glyph closes; these are chrome fleurons, not closes — but they
  photograph as glyphs in a "no-glyph" book). The shell verdict does not
  demand their removal, only the glow kill.

## 3. index.html + zara.js: PASS

- Shared IDs intact: cover/reader/toc-drawer/settings-panel/loading/
  chapter-text/meta/nav all present and functional; no shared markup
  rewritten. Fonts: Cinzel 400–700 + Spectral 400/500/italics via CSS2
  `display=swap` (index.html:10) + `Cinzel→Trajan Pro,Georgia` /
  `Spectral→Georgia` fallback stacks in theme.css (:27,:47). (Twilight
  still ships Cormorant, so plain-CSS2-link was the compliant path — taken.)
- One owned script (`zara.js`, index.html:164) + `BOOK_CONFIG` + shared
  reader.js. zara.js: single `reader:chapter` listener (:115) +
  `DOMContentLoaded` boot (:154); zero `setInterval`/`setTimeout`/`fetch`/
  `innerHTML`; zero caption/figcaption writes (manifest owns captions —
  verified: pull-line captions render from chapters.json, e.g. p3c16's
  "wedding ring of rings — ¶24" verbatim with citation). TOC/progress
  decoration via MutationObserver on reader-owned nodes (no polling, no
  shared patching). Aria: `.z-seal-dot`/`.z-phase-dots` created with
  `aria-hidden="true"`; no `reader-*` classes minted (`z-*` only).
- Live behavior verified: `data-z-form`/`data-z-phase` set per chapter
  (p1c1 vision/dawn, p2c9 song/night, p4c9 ember, p4c10 pivot, p4c11
  morning — Z6 pivot EXACT, phase flags correct on all three sampled);
  4 `.z-seal-dot` + 4 `.z-phase-dot` + 12 `.z-song` ticks present; chapter
  transitions via TOC + `j` key work; TOC `t`/`Esc` aria toggles verified
  (`false→true`); progress/resume persists (`read:["p2c9","p1c1","p3c2"]`).

## 4. Manifest census (supervisor-owned; shell-activation context)

Computed (not sampled): chapters.json `version:1`, 81/81 TOC ids present
with zero missing/extra; all 81 `src#symbol` targets resolve against parsed
sprite symbol ids; cover `art/cover.svg#cover-roundel-field` resolves;
zero entries without captions; classes
emblem:36/seal:20/song:11/scene:10/finale:2/plate:2. Shell-driven rendering
verified live: seal class (p1c3 Dawn-Ring, 72px slot + caption), song (p2c9,
p3c16), scene (p1c1 rope-fall, p3c2 gateway, p4c10), emblem (p4c9), plate
(p4c11), finale (p4c20 lion-and-doves). NOTE for the supervisor (not a
shell defect): only `seal-dawn` of the four part seals is referenced (17×,
all Part I); `seal-night`/`seal-zenith`/`seal-sign`/`roundel-sun-serpent`/
minis/rules have zero manifest refs — the other parts' seal-class chapters
use cohort art instead. The shell symbols are correct and available; usage
is the supervisor's manifest call.

## 5. Defects OUTSIDE shell scope (recorded with owners + evidence)

- P3-1 (owner: supervisor/cohort-P3 — BLOCKS Part III reading, not the
  shell verdict): every Part III chapter-end close renders as a GIANT gold
  disc (~1500px tall, last-p `height:1613px` on p3c2, screenshot) plus
  149px horizontal overflow at 820px (`scrollWidth:969 > clientWidth:820`;
  desktop 1440 unaffected in scrollWidth but the disc still paints hugely
  below the text). Mechanism: cohort-p3.css:20–35 sets `content:
  url(../art/cohort-p3.svg#close-p3cN)` while :36–42 sizes the box 24px —
  but the replaced-content intrinsic size comes from the full 640×1560
  sheet (Chromium does not apply the `#close-p3c2` `<view>` crop in this
  context; `<img>` test paints full-sheet at natural size). The 24px
  computed box does not constrain the painted replaced content, so the
  sheet's close-cell art (a 22px gold disc inside the 40px cell) scales to
  enormous size. P1/P2/P4 closes use `data:` URIs and render correct 24px
  tails (p1c1 + p2c9 verified live). Repair: re-author the 16 P3 close
  rules as `data:` URIs (P1/P2/P4 pattern) or another image-context-safe
  form — do NOT touch seals.svg. The shell never emits fragment `url()`s
  (theme.css grep: zero), so this cannot be fixed in shell files.
- P2-0 (engineer heads-up — RESOLVED, verified): cohort-p2.css now uses
  `data:` URIs for all closes/crowns (grep: all `url(` hits are
  `data:image/svg+xml`); p2c9 renders clean at 1440 with no ghost sheet
  and no overflow. No action.
- SHR-1 (owner: ReaderLead/shared — cosmetic, cross-book): `applyPrefs`
  (shared/reader.js:215–217) snapshots `--bg/--text` into inline
  `body.style` at click time but reads STALE values on live theme switch
  (sepia click left `bodyBg:rgb(10,14,33)` under sepia tokens; reload
  paints correctly, `bodyBg:rgb(244,236,216)`). Books MUST NOT patch
  shared; flagging for ReaderLead. Not a shell defect.
- Cohort files preserved: `art/cohort-p1..p4.svg` mtimes (07:22–07:35)
  predate the shell landing (15:41+); shell files reference but never
  modify them. `design/cohort-p2.css` + `cohort-p3.css` were edited by
  their owners at 15:48 (after the engineer's message) — not by the shell.

## 6. Coverage ledger (exact)

Inspected live on :8219 — cover (1440/820/390), p1c1 (1440/390, opener +
close), p1c3 (seal slot), p2c9 (opener + close + overflow), p3c2 (scene +
close defect), p3c16 (arc close-up, 7/7 distinct interiors counted),
p4c9/p4c10/p4c11 (Z6 flags), p4c19, p4c20, TOC drawer, settings + sepia +
reload-persist, keyboard (t/Esc/j), reduced-motion + print guards
(emulation + live rule enumeration), console errors (empty throughout).
Computed checks actually run: XML parse (6 sprites), id/viewBox census,
href/url/gradient/filter/use/image scans, Z1 greps (theme + zara +
fleuron), manifest↔TOC↔symbol resolution (81/81), contrast ratio (15.58),
overflow scrollWidth probes (cover/p1c1/p2c9 clean; p3c2 820px fails —
P3-1), `<img>` fragment-crop test, live `document.fonts` status.
NOT run: full 81-chapter visual sweep (sampling per §Coverage; census
covers resolution for all 81).

## Verdict: REVISE (one shell-owned rule fix + two supervisor-track repairs)

- SH-1 (shell engineer, REQUIRED for PASS): add `text-shadow:none` to the
  theme.css §8 neutralization block (`.chapter-meta::after`,
  `.meta-number::before/::after`, cover eyebrow/quote pseudos) and extend
  the drop-cap reset to kill shared/art.css:276–280's gradient-wash +
  `text-shadow` halo (`background:none` exists at theme.css:403; add
  `text-shadow:none`). Re-verify computed `textShadow:none` on
  `.chapter-meta::after` + first-letter. Glyph-removal itself is NOT
  required of the shell (needs a ReaderLead ruling; file it).
- P3-1 (supervisor/cohort-P3, REQUIRED before Part III can pass any
  validator): re-author the 16 P3 closes as `data:` URIs.
- SHR-1 (ReaderLead, advisory): fix the stale inline body paint on live
  theme switch.
- Re-review: this validator re-checks SH-1 computed styles + P3-1 render
  on request. The shell is otherwise PASS-grade: Contract symbols exact,
  Z1-clean CSS, liturgical Cinzel visibly distinct from the rejected
  baseline (before/after screenshots on :8211/:8219 prove the defeat —
  glow cover → engraved Roundel cover), Z6 exact, console-clean, aria-
  disciplined, 81/81 manifest resolution with all six slot classes
  activating live.

## 7. Re-verify pass (third, :8099 built site) — SH-1 FIXED, P3-1 FIXED

Evidence URL: `http://127.0.0.1:8099/books/thus-spoke-zarathustra/index.html`
(supervisor's built site; md5 of served theme.css AND cohort-p3.css both
match source — no build lag at verify time). Fresh tab `zara-8099`.
Supervisor notes addressed: (a) seal usage is INTENTIONAL per designer §15
flag 4 — seal-night/zenith are chrome instruments (TOC seal-dots +
progress phase-dots, both verified live), seal-sign serves p4c13/p4c15 via
cohort symbol `p4-sign-ring` (manifest census confirms class `seal` on both;
shell-owned `seal-sign` remains available but unreferenced — accepted as
the supervisor's manifest call, not a shell defect); (b) P3-1 root cause
confirmed as row-2 `<view>` crops outside the 1560px sheet canvas.

- SH-1 (shell, theme.css only — verified in source AND computed):
  `text-shadow:none` added to the §8 block (`.chapter-meta::after`,
  `.meta-number::before/::after`, cover eyebrow/quote pseudos) + the
  drop-cap reset (theme.css:406,598,604,611; file now 690 lines / md5
  4525af0d). Z1 grep re-run: only `text-shadow:none` resets + the audit
  comment match — zero glow-adding values. Computed on :8099 p1c1:
  `.chapter-meta::after` textShadow=`none`, `.meta-number::before`
  textShadow=`none`, `::first-letter` textShadow=`none` +
  backgroundImage=`none`, cover eyebrow `::before` textShadow=`none`.
  Cover + p1c1 opener re-screenshotted (Cinzel title, Roundel, rope-fall
  triptych, pull-line, sun-dot rule, gold drop cap, no halos). FIXED.
- P3-1 (supervisor, cohort-p3.css — verified live): all 16 closes are now
  `data:` URIs (grep). Computed on :8099: p3c2 `content=url("data:…")`,
  24×24px, last-p height 77px (was 1613px), scrollWidth==clientWidth at
  1440; p3c16 at 820px: 24px inline disc tailing "For I love you, O
  Eternity!" (screenshot), scrollWidth==clientWidth (was 969>820). FIXED.
- Console errors: `[]` on all re-verify chapters.

## Verdict: PASS (shell)

All shell acceptance criteria met: 14/14 Contract symbols exact and
self-contained; theme.css Z1-clean (resets only) with all 8 themes scoped,
liturgical Cinzel, responsive + print + reduced-motion guards live;
index.html + zara.js contract-clean with Z6-exact phase flags; 81/81
manifest resolution with all six slot classes activating; bone-on-lapis
15.58:1; console-clean; aria-disciplined. Remaining advisories only:
SHR-1 (ReaderLead live-switch paint) and the ❦/◆-glyph chrome ruling
(needs ReaderLead decision, glow already killed). P3-1 closed on the
supervisor track.

## 8. SHR-1 WITHDRAWN (fourth probe, fresh tab :8099) — stale-JS artifact

SupChurchill-3 withdrew the shared theme-race report (current
`shared/reader.js` swaps `root.dataset.theme` synchronously FIRST —
verified in source at shared/reader.js:185–187, landed 16:12) and asked
corroborators to re-verify with a clean cache. Done: fresh tab
`zara-cacheoff` on :8099, live sepia click → inline
`rgb(244,236,216)` + root `--bg:#F4ECD8` immediately correct; settled
computed `rgb(244,236,216)` with dark readable text (screenshot); dark
click restores `rgb(10,14,33)` everywhere. The mid-transition sample
(computed dark while inline sepia) is the ordinary 0.25s
`background-color` transition (shared/reader.css:201), not a frozen
paint. My earlier SHR-1 observation was the same stale-reader.js artifact
(earlier tabs predated the 16:12 shared fix). SHR-1 is CLOSED — no shared
defect, no book workaround, no verdict impact. Shell PASS stands
unchanged. (One transient console note: rapid double theme-clicks log an
`AbortError: Transition was skipped` pageerror from overlapping view
transitions — cosmetic, no paint impact, observed once.)
