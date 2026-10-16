/**
 * validate-all.mjs — INDEPENDENT VALIDATION of the shared reader preference controls
 * (Step 5 reader-repair closeout). Verification only: never edits implementation files;
 * writes only evidence artifacts under .omp/design/evidence/step5/reader-repair/.
 *
 * Usage: node validate-all.mjs <1440|820|390>   (batched per viewport)
 *
 * Checks per book (see brief): MEASURE contract formula re-derived live from
 * var(--reader-max)/var(--chapter-max) + measured 65ch; SIZE sm→xl; LEADING at size=lg;
 * FONT serif/sans (DM Sans); PERSISTENCE via real UI + reload + documentElement.dataset;
 * OVERFLOW scrollWidth<=clientWidth at every applied pref state; sovereign plate-grid
 * authored condition; KEYBOARD + settings panel (1440 only); NOTES = reader.js endnote
 * round-trip (no user-annotation UI exists by design — recorded honestly);
 * reducedMotion:'reduce' emulation on every context; console error capture
 * (only favicon.ico 404 is filtered as known noise).
 */
import { chromium } from "/home/prateek/.npm/_npx/48b1ca104c3549f4/node_modules/playwright/index.mjs";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SHOTS = path.join(HERE, "screenshots");
mkdirSync(SHOTS, { recursive: true });

const BASE = "http://localhost:8000/books";
const TAGS = { "1440": [1440, 1000], "820": [820, 1180], "390": [390, 844] };
const VW = process.argv[2] || "1440";
if (!TAGS[VW]) { console.error("pass a viewport tag: 1440 | 820 | 390"); process.exit(1); }
const [W, H] = TAGS[VW];
const KB = VW === "1440"; // keyboard/panel + notes exercise at desktop per brief

const BOOKS = JSON.parse(readFileSync(path.join(HERE, "chapters.json"), "utf8"));
const SLUGS = Object.keys(BOOKS);

/* ── page-side measurement (single evaluate, no cross-context state) ───────── */

const PAGE_MEASURE = () => {
  const ps = [...document.querySelectorAll("#chapter-text > p")];
  const classless = [];
  ps.forEach((p, i) => { if (!p.hasAttribute("class") && !p.id) classless.push({ p, i }); });
  let probe = classless.find((o) => o.i >= 10 && o.p.textContent.length > 400) || null;
  let fallback = false;
  if (!probe) {
    let best = null;
    for (const o of classless) if (o.i >= 5 && o.p.textContent.length > (best ? best.p.textContent.length : -1)) best = o;
    probe = best;
    fallback = !!probe;
  }
  const de = document.documentElement;
  const base = {
    measure: de.dataset.measure || null,
    size: de.dataset.size || null,
    leading: de.dataset.leading || null,
    font: de.dataset.font || null,
    theme: de.dataset.theme || null,
    psTotal: ps.length,
    classlessCount: classless.length,
    scrollWidth: de.scrollWidth,
    clientWidth: de.clientWidth,
    horizontalScrollbarOverflow: window.innerWidth < de.scrollWidth,
  };
  if (!probe) return { ...base, probeFound: false, classlessIdxLens: classless.map((o) => [o.i, o.p.textContent.length]) };
  const p = probe.p;
  const r = p.getBoundingClientRect();
  const cs = getComputedStyle(p);
  // authored measure A = var(--chapter-max, var(--reader-max, 52rem)) resolved on the node
  const authDiv = document.createElement("div");
  authDiv.style.cssText = "position:absolute;visibility:hidden;display:block;width:0";
  authDiv.style.width = "var(--chapter-max, var(--reader-max, 52rem))";
  p.appendChild(authDiv);
  const A = authDiv.getBoundingClientRect().width;
  authDiv.remove();
  // 65ch measured independently inside the SAME paragraph: 65 '0' glyphs, font:inherit
  const chSpan = document.createElement("span");
  chSpan.textContent = "0".repeat(65);
  chSpan.style.cssText = "position:absolute;visibility:hidden;white-space:pre;letter-spacing:0;font:inherit";
  p.appendChild(chSpan);
  const ch65 = chSpan.getBoundingClientRect().width;
  chSpan.remove();
  const nav = document.querySelector("#chapter-nav");
  const navR = nav ? nav.getBoundingClientRect() : null;
  const navCS = nav ? getComputedStyle(nav) : null;
  return {
    ...base,
    probeFound: true,
    probeFallback: fallback,
    probeIdx: probe.i,
    probeLen: p.textContent.length,
    probeHead: p.textContent.slice(0, 70),
    renderedWidth: Math.round(r.width * 100) / 100,
    computedMaxWidth: cs.maxWidth,
    readerMeasureRaw: cs.getPropertyValue("--reader-measure").trim(),
    chapterMaxRaw: cs.getPropertyValue("--chapter-max").trim(),
    readerMaxRaw: cs.getPropertyValue("--reader-max").trim(),
    authPx: Math.round(A * 100) / 100,
    ch65Px: Math.round(ch65 * 100) / 100,
    fontSizePx: cs.fontSize,
    lineHeightPx: cs.lineHeight,
    fontFamily: cs.fontFamily,
    nav: nav ? { navIdx: navCS.maxWidth, navRect: Math.round(navR.width * 100) / 100 } : null,
    outOfRange: A <= 0 || ch65 <= 0,
  };
};

const expected = (m) => {
  const A = m.authPx, ch65 = m.ch65Px, cap40 = 40 * 16, floor64 = 64 * 16;
  const standard = Math.min(A, ch65);
  return { narrow: Math.min(standard, cap40), standard, wide: Math.max(A, floor64) };
};
const near = (a, b, tol = 2) => Math.abs(a - b) <= tol;
const px = (s) => parseFloat(String(s));

/* ── one book, one viewport ────────────────────────────────────────────────── */

async function checkBook(browser, slug, slugCfg) {
  const rec = { slug, viewport: `${W}x${H}`, checks: {}, consoleErrors: [], nonFavicon4xx: [], warnings: [] };
  const cfg = slugCfg.selection;
  const context = await browser.newContext({ viewport: { width: W, height: H }, reducedMotion: "reduce" });
  const page = await context.newPage();
  const t0 = Date.now();
  try {
    page.on("console", (msg) => {
      const type = msg.type();
      const url = (msg.location?.()?.url) || "";
      if (type === "error") {
        // known noise: favicon.ico 404 — cross-checked against the response listener
        if (/404 \(File not found\)/.test(msg.text()) && /favicon\.ico/.test(url)) return;
        rec.consoleErrors.push((/404/.test(msg.text()) ? msg.text() + " @ " + url.slice(0, 160) : msg.text()).slice(0, 300));
      } else if (type === "warning") rec.warnings.push(msg.text().slice(0, 200));
    });
    page.on("pageerror", (err) => rec.consoleErrors.push("pageerror: " + String(err).slice(0, 300)));
    page.on("response", (res) => {
      if (res.status() >= 400 && !res.url().includes("favicon.ico")) rec.nonFavicon4xx.push(`${res.status()} ${res.url()}`);
    });
    page.on("requestfailed", (req) => {
      if (!req.url().includes("favicon.ico")) rec.nonFavicon4xx.push(`requestfailed ${req.failure()?.errorText} ${req.url()}`);
    });

    const shot = async (tag) => {
      const file = `${slug}-${tag}-${W}.png`;
      await page.screenshot({ path: path.join(SHOTS, file), fullPage: false });
      return `screenshots/${file}`;
    };
    const evalPrefs = () => page.evaluate(() => {
      const de = document.documentElement;
      return { measure: de.dataset.measure, size: de.dataset.size, leading: de.dataset.leading, font: de.dataset.font, theme: de.dataset.theme };
    });

    const gotoBook = async () => {
      await page.goto(`${BASE}/${slug}/index.html`, { waitUntil: "load" });
      await page.waitForSelector('[data-action="begin"]', { timeout: 20000 });
      await page.evaluate(() => document.fonts.ready.then(() => true));
    };

    // fresh, unbiased storage for this book
    await gotoBook();
    await page.evaluate(() => localStorage.clear());
    await gotoBook();
    rec.coverOk = await page.evaluate(() => !!document.querySelector("#cover .cover-content"));

    // enter reading view: Begin, then the real TOC
    await page.click('[data-action="begin"]');
    await page.waitForFunction(() => document.body.dataset.view === "reader", null, { timeout: 15000 });
    await page.click("#btn-toc");
    await page.waitForFunction(() => document.querySelector("#toc-drawer")?.classList.contains("open"), null, { timeout: 10000 });
    await page.click(`.toc-chapter[data-chapter-id="${cfg.chapterId}"]`);
    await page.waitForFunction(
      (id) => document.body.dataset.chapter === id &&
        document.querySelector("#chapter-text")?.dataset.paras !== "0" &&
        document.querySelector("#loading")?.classList.contains("hidden"),
      cfg.chapterId, { timeout: 20000 });
    await page.evaluate(() => document.fonts.ready.then(() => true));
    await page.waitForFunction(() => document.fonts.status === "loaded");

    rec.chapter = cfg;
    const m0 = await page.evaluate(PAGE_MEASURE);
    if (!m0.probeFound) throw new Error("no probe paragraph found even via fallback");
    rec.probe = { idx: m0.probeIdx, len: m0.probeLen, fallback: m0.probeFallback, head: m0.probeHead, classlessCount: m0.classlessCount, psTotal: m0.psTotal };

    // ── ensure defaults before the measure trio (fresh context ⇒ expected) ──
    rec.defaultsAtEntry = { measure: m0.measure, size: m0.size, leading: m0.leading, font: m0.font };

    const openPanel = async () => {
      const open = await page.evaluate(() => document.querySelector("#settings-panel")?.classList.contains("open"));
      if (!open) { await page.click("#btn-settings"); await page.waitForFunction(() => document.querySelector("#settings-panel")?.classList.contains("open") || document.querySelector(".settings-panel.open"), null, { timeout: 5000 }).catch(() => {}); }
      return page.evaluate(() => ({ settingsOpen: !!document.querySelector("#settings-panel.open, .settings-panel.open"), btnVisible: !!document.querySelector("#btn-settings") }));
    };
    const clickPref = async (pref, value) => {
      await openPanel();
      const sel = `.seg-btn[data-pref="${pref}"][data-value="${value}"]`;
      const cnt = await page.locator(sel).count();
      if (cnt === 0) throw new Error(`seg button missing: ${pref}=${value}`);
      await page.locator(sel).first().click();
      await page.waitForTimeout(320); // font-size/line-height transitions are 150ms
      return page.evaluate(() => {
        const de = document.documentElement;
        const active = [...document.querySelectorAll(".seg-btn")].filter((x) => x.classList.contains("active")).map((x) => x.dataset.pref + ":" + x.dataset.value);
        return { measure: de.dataset.measure, size: de.dataset.size, leading: de.dataset.leading, font: de.dataset.font, actives: active };
      });
    };

    // verify defaults by clicking md/serif/normal/standard only if needed (idempotent)
    const segExists = await page.evaluate(() => ({
      size: !!document.querySelector('.seg-btn[data-pref="size"]'),
      leading: !!document.querySelector('.seg-btn[data-pref="leading"]'),
      font: !!document.querySelector('.seg-btn[data-pref="font"]'),
      measure: !!document.querySelector('.seg-btn[data-pref="measure"]'),
      theme: !!document.querySelector('.seg-btn[data-pref="theme"]'),
    }));
    rec.segButtonsPresent = segExists;

    // ── CHECK 1: MEASURE trio at defaults (md/serif/normal/standard) ─────────
    if (m0.size !== "md" || m0.font !== "serif" || m0.leading !== "normal" || m0.measure !== "standard") {
      rec.defaultsAdjusted = await Promise.resolve();
      if (m0.font !== "serif") rec.defaultsAdjusted = await clickPref("font", "serif");
      if (m0.size !== "md") rec.defaultsAdjusted = await clickPref("size", "md");
      if (m0.leading !== "normal") rec.defaultsAdjusted = await clickPref("leading", "normal");
      if (m0.measure !== "standard") rec.defaultsAdjusted = await clickPref("measure", "standard");
    }
    const mono = [];
    const measureStates = {};
    for (const mv of ["narrow", "standard", "wide"]) {
      const cs = await clickPref("measure", mv);
      const m = await page.evaluate(PAGE_MEASURE);
      const exp = expected(m);
      const obs = px(m.computedMaxWidth);
      const expObs = exp[mv];
      const pass = m.outOfRange ? false : near(obs, expObs);
      measureStates[mv] = {
        renderedWidth: m.renderedWidth, computedMaxWidth: m.computedMaxWidth,
        expected: Math.round(expObs * 100) / 100, pass: m.outOfRange ? false : pass,
        authPx: m.authPx, ch65Px: m.ch65Px, readerMeasureRaw: m.readerMeasureRaw,
        chapterMaxRaw: m.chapterMaxRaw, readerMaxRaw: m.readerMaxRaw,
        nav: m.nav,
        scrollWidth: m.scrollWidth, clientWidth: m.clientWidth, overflowOk: m.scrollWidth <= m.clientWidth,
        actives: cs.actives,
      };
      mono.push(m.renderedWidth);
    }
    const narrowViewport = W < 1072;
    const monoOk = mono[0] <= mono[1] + 0.6 && mono[1] <= mono[2] + 0.6; // rendered monotonicity
    rec.checks.measure = {
      states: measureStates,
      mono: { rendered: mono, ok: monoOk || !narrowViewport && monoOk } ,
      renderedMonoOk: monoOk,
      formula: "narrow=min(min(A,65ch),40rem); standard=min(A,65ch); wide=max(A,64rem); A=var(--chapter-max, var(--reader-max,52rem)) ON probe; 65ch measured in-probe; tol ±2px on computedMaxWidth",
      narrowViewport,
      equalityExpectedSame40rem: ["being-and-time", "forty-ways-to-look-at-churchill", "infinite-jest", "will-to-power", "thus-spoke-zarathustra"].includes(slug),
      pass: Object.values(measureStates).every((s) => s.pass) && (narrowViewport ? monoOk : true),
    };

    // ── CHECK 2: SIZE sm→md→lg→xl ────────────────────────────────────────────
    const sizeObs = [];
    for (const sv of ["sm", "md", "lg", "xl"]) {
      await clickPref("size", sv);
      const m = await page.evaluate(PAGE_MEASURE);
      sizeObs.push({ value: sv, fontSizePx: m.fontSizePx, overflowOk: m.scrollWidth <= m.clientWidth });
    }
    const expSize = { sm: 18.4, md: 20.8, lg: 24, xl: 27.2 };
    const sizePass = sizeObs.every((o, i) => near(px(o.fontSizePx), expSize[o.value], 0.6)) &&
      sizeObs.every((o, i) => i === 0 || px(o.fontSizePx) !== px(sizeObs[i - 1].fontSizePx));
    rec.checks.size = { observed: sizeObs, expected: expSize, pass: sizePass };

    // ── CHECK 3: LEADING at size=lg ──────────────────────────────────────────
    await clickPref("size", "lg");
    const leadObs = [];
    for (const lv of ["tight", "normal", "loose"]) {
      await clickPref("leading", lv);
      const m = await page.evaluate(PAGE_MEASURE);
      leadObs.push({ value: lv, fontSizePx: m.fontSizePx, lineHeightPx: m.lineHeightPx, overflowOk: m.scrollWidth <= m.clientWidth });
    }
    const expLead = (fsPx) => ({ tight: fsPx * 1.6, normal: fsPx * 1.85, loose: fsPx * 2.1 });
    const leadPass = leadObs.every((o) => {
      const fs = px(o.fontSizePx);
      return near(px(o.lineHeightPx), expLead(fs)[o.value], 1.0);
    }) && near(px(leadObs[0].lineHeightPx), expLead(px(leadObs[0].fontSizePx)).tight, 1.0);
    rec.checks.leading = { observed: leadObs, expectedAt: "1.6/1.85/2.1 × fontSize, tol ±1px", pass: leadPass };
    await clickPref("leading", "normal");

    // ── CHECK 4: FONT serif vs sans (measured ON the probe paragraph — the
    // shared block deliberately excludes :first-of-type openers) ─────────────
    const fontObs = {};
    const probeIdx = rec.probe.idx;
    for (const fv of ["serif", "sans"]) {
      await clickPref("font", fv);
      const m = await page.evaluate((idx) => {
        const ps = [...document.querySelectorAll("#chapter-text > p")];
        const p = ps[idx] || ps[0];
        const cs = getComputedStyle(p);
        return { fontFamily: cs.fontFamily, dmSansLoaded: document.fonts.check('20px "DM Sans"') };
      }, probeIdx);
      fontObs[fv] = { fontFamily: m.fontFamily, dmSansLoaded: m.dmSansLoaded, overflowOk: (await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)) };
    }
    const fontPass = fontObs.serif.fontFamily !== fontObs.sans.fontFamily &&
      /DM Sans/.test(fontObs.sans.fontFamily) && fontObs.sans.dmSansLoaded;
    rec.checks.font = { observed: fontObs, expectedSans: '"DM Sans" via --reader-sans on probe (not the :first-of-type opener)', pass: fontPass };
    await clickPref("font", "serif");

    // ── CHECK 5+6: PERSISTENCE (UI set wide/xl/loose/sans → reload → verify) ──
    for (const [pf, v] of [["measure", "wide"], ["size", "xl"], ["leading", "loose"], ["font", "sans"]]) {
      await clickPref(pf, v);
    }
    rec.datasetBeforeReload = await evalPrefs();
    rec.localStorageKeys = await page.evaluate((s) => ({ allKeys: Object.keys(localStorage), bookKeyRaw: localStorage.getItem(`reader-${s}`) }), slug);
    await page.reload({ waitUntil: "load" });
    await page.waitForSelector('[data-action="begin"]', { timeout: 20000 });
    // re-enter reader through the real resume control (visible once TOC + saved chapter resolve)
    const resVisible = await page.waitForSelector('[data-action="resume"]:visible', { timeout: 5000 }).then(() => true).catch(() => false);
    if (resVisible) await page.click('[data-action="resume"]');
    else { await page.click('[data-action="begin"]'); await page.click("#btn-toc"); await page.click(`.toc-chapter[data-chapter-id="${cfg.chapterId}"]`); rec.resumeFallback = true; }
    await page.waitForFunction((id) => document.body.dataset.chapter === id && document.querySelector("#chapter-text")?.dataset.paras !== "0", cfg.chapterId, { timeout: 20000 });
    await page.evaluate(() => document.fonts.ready.then(() => true));
    await page.waitForFunction(() => document.fonts.status === "loaded");
    await page.waitForTimeout(350);
    const mp = await page.evaluate(PAGE_MEASURE);
    const expAfter = expected(mp);
    const dsAfter = await evalPrefs();
    rec.localStorageKeysAfterReload = await page.evaluate((s) => ({ allKeys: Object.keys(localStorage), bookKeyRaw: localStorage.getItem(`reader-${s}`) }), slug);
    rec.checks.persistence = {
      datasetAfter: dsAfter,
      computed: { fontSizePx: mp.fontSizePx, lineHeightPx: mp.lineHeightPx, computedMaxWidth: mp.computedMaxWidth, expectedWide: Math.round(expAfter.wide * 100) / 100, fontFamily: mp.fontFamily },
      datasetOk: dsAfter.measure === "wide" && dsAfter.size === "xl" && dsAfter.leading === "loose" && dsAfter.font === "sans",
      computedOk: near(px(mp.fontSizePx), 27.2, 0.6) && near(px(mp.lineHeightPx), 27.2 * 2.1, 1.0) && near(px(mp.computedMaxWidth), expAfter.wide, 2) && /DM Sans/.test(mp.fontFamily),
      overflowOk: mp.scrollWidth <= mp.clientWidth,
      pass: false,
    };
    rec.checks.persistence.pass = rec.checks.persistence.datasetOk && rec.checks.persistence.computedOk;
    if (["atlas-shrugged", "infinite-jest", "being-and-time", "sovereign-individual", "twilight-of-the-idols"].includes(slug)) rec.shots = rec.shots || [];

    // ── CHECK 7: sovereign-authored plate-grid condition ────────────────────
    if (slug === "sovereign-individual") {
      // record grid + rendered box ratio on the CURRENT (wide) state
      const gridInfo = await page.evaluate(() => {
        const rb = document.querySelector("#reader-body");
        const art = document.querySelector("#chapter-art");
        const p = document.querySelector("#chapter-text > p");
        const st = getComputedStyle(rb);
        return {
          display: st.display, gridTemplateColumns: st.gridTemplateColumns,
          artHidden: art ? art.hidden : null, artClass: art ? art.className : null,
          containerWidth: rb.getBoundingClientRect().width,
          proseWidth: p.getBoundingClientRect().width,
          maxWidth: getComputedStyle(p).maxWidth,
        };
      });
      rec.checks.sovereignPlate = { ...gridInfo, tagged: gridInfo.display === "grid" && gridInfo.maxWidth === "1024px" ? "expected-authored" : null };
      // drift through measures on the SAME plate chapter, capture rendered + maxWidth + grid sides
      const plateStates = {};
      for (const mv of ["narrow", "standard", "wide"]) {
        await clickPref("measure", mv);
        plateStates[mv] = await page.evaluate(() => {
          const rb = document.querySelector("#reader-body");
          const ct = document.querySelector("#chapter-text");
          const p = document.querySelector("#chapter-text > p");
          return {
            renderedWidth: p.getBoundingClientRect().width,
            computedMaxWidth: getComputedStyle(p).maxWidth,
            gridDisplay: getComputedStyle(rb).display,
            containerWidth: rb.getBoundingClientRect().width,
            chapterTextWidth: ct ? ct.getBoundingClientRect().width : null,
          };
        });
      }
      rec.checks.sovereignPlateMeasureResponse = plateStates;
    }
    // state screenshots AFTER persistence verification (wide+xl+loose+sans)
    rec.shots = rec.shots || [];
    if (["atlas-shrugged", "infinite-jest", "being-and-time", "sovereign-individual", "twilight-of-the-idols"].includes(slug)) {
      rec.shots.push(await shot("wide-state"));
    }
    if (slug === "sovereign-individual" && KB) {
      rec.shots.push(await shot("plate-grid-wide"));
      await clickPref("measure", "narrow");
      rec.shots.push(await shot("narrow-state"));
      await clickPref("measure", "wide");
    }

    // ── CHECK 6b: full pref sweep at this viewport (overflow audit) ──────────
    if (W === 390 || true) {
      const sweep = [];
      for (const mv of ["narrow", "standard", "wide"]) {
        await clickPref("measure", mv);
        const sizes = ["sm", "md", "lg", "xl"];
        for (const sv of sizes) {
          await clickPref("size", sv);
          const o = await page.evaluate(() => {
            const de = document.documentElement;
            return { measure: de.dataset.measure, size: de.dataset.size, leading: de.dataset.leading, font: de.dataset.font, scrollWidth: de.scrollWidth, clientWidth: de.clientWidth };
          });
          sweep.push({ ...o, overflowOk: o.scrollWidth <= o.clientWidth });
        }
      }
      rec.checks.overflowSweep = { states: sweep.length, allOk: sweep.every((s) => s.overflowOk), bad: sweep.filter((s) => !s.overflowOk) };
    }

    // ── CHECK 8: KEYBOARD + PANEL (desktop pass) ─────────────────────────────
    if (KB) {
      const kb = {};
      const btn = page.locator("#btn-settings");
      kb.beforeFocus = await page.evaluate(() => {
        const cs = getComputedStyle(document.querySelector("#btn-settings"));
        return { outlineStyle: cs.outlineStyle, outlineWidth: cs.outlineWidth, outlineColor: cs.outlineColor, boxShadow: cs.boxShadow };
      });
      // Tab from the reader body until #btn-settings is focused
      let tabs = 0, reached = false;
      for (let i = 0; i < 40; i++) {
        if (await page.evaluate(() => document.activeElement?.id === "btn-settings")) { reached = true; break; }
        await page.keyboard.press("Tab");
        tabs++;
      }
      kb.tabStepsToSettings = tabs;
      kb.reachedSettings = reached;
      kb.focusState = await page.evaluate(() => {
        const cs = getComputedStyle(document.activeElement === document.querySelector("#btn-settings") ? document.activeElement : document.querySelector("#btn-settings"));
        return { activeId: document.activeElement?.id, focusedOnSettings: document.activeElement?.id === "btn-settings", outlineStyle: cs.outlineStyle, outlineWidth: cs.outlineWidth, outlineColor: cs.outlineColor, boxShadow: cs.boxShadow, focusVisible: document.activeElement?.matches(":focus-visible") ?? null };
      });
      kb.focusIndicatorChanged = kb.focusState.focusedOnSettings &&
        (kb.focusState.outlineStyle !== kb.beforeFocus.outlineStyle || kb.focusState.outlineWidth !== kb.beforeFocus.outlineWidth || kb.focusState.boxShadow !== kb.beforeFocus.boxShadow);
      if (kb.reachedSettings && slug === "atlas-shrugged") kb.shot = [await shot("focus-visible")];
      await page.keyboard.press("Enter");
      await page.waitForFunction(() => (document.querySelector("#settings-panel") || {}).classList?.contains?.("open"), null, { timeout: 5000 }).catch(() => {});
      kb.enterOpens = await page.evaluate(() => document.querySelector("#settings-panel")?.classList.contains("open"));
      if (slug === "infinite-jest") kb.shot = [...(kb.shot || []), await shot("settings-panel-open")];
      await page.keyboard.press("Escape");
      await page.waitForTimeout(250);
      kb.escapeCloses = await page.evaluate(() => !document.querySelector("#settings-panel")?.classList.contains("open"));
      kb.escapeFocusReturnsTo = await page.evaluate(() => document.activeElement?.id || "none");
      // reopen via Enter, inspect in-panel travel
      await page.keyboard.press("Enter");
      await page.waitForFunction(() => document.querySelector("#settings-panel")?.classList.contains("open"), null, { timeout: 5000 }).catch(() => {});
      kb.panelAutoFocus = await page.evaluate(() => ({ id: document.activeElement?.id, pref: document.activeElement?.dataset?.pref, value: document.activeElement?.dataset?.value, ariaPressed: document.activeElement?.getAttribute("aria-pressed") }));
      const themeBefore = await page.evaluate(() => document.documentElement.dataset.theme);
      await page.keyboard.press("ArrowRight");
      await page.waitForTimeout(200);
      kb.arrowRightOnThemeRow = { from: themeBefore, to: await page.evaluate(() => document.documentElement.dataset.theme) };
      // Tab until a non-theme pref row is reached
      const visited = [];
      let target = null;
      for (let i = 0; i < 16; i++) {
        const ae = await page.evaluate(() => ({ pref: document.activeElement?.dataset?.pref || null, value: document.activeElement?.dataset?.value || null, tag: document.activeElement?.tagName || null, id: document.activeElement?.id || null }));
        if (!ae.pref) break;
        visited.push(ae.pref);
        if (ae.pref === "size") { target = ae; break; }
        await page.keyboard.press("Tab");
      }
      kb.tabVisitedPrefs = visited;
      if (target?.pref === "size") {
        const before = await page.evaluate(() => document.documentElement.dataset.size);
        await page.keyboard.press("ArrowRight"); // arrow travel WITHIN row also commits a value
        await page.waitForTimeout(200);
        const mid = { focused: await page.evaluate(() => document.activeElement?.dataset?.value), dataset: await page.evaluate(() => document.documentElement.dataset.size) };
        await page.keyboard.press("Enter");
        await page.waitForTimeout(200);
        kb.rowArrowAndEnter = { before, arrowRight: mid, afterEnter: await page.evaluate(() => document.documentElement.dataset.size) };
        kb.valueToggled = kb.rowArrowAndEnter.before !== undefined && kb.rowArrowAndEnter.afterEnter !== before;
      } else kb.rowArrowAndEnter = { error: "size row not reached via Tab; visited=" + visited.join(",") };
      if (slug === "atlas-shrugged") kb.shot = [...(kb.shot || []), await shot("settings-panel-open")];
      await page.keyboard.press("Escape");
      await page.waitForTimeout(250);
      // 's' shortcut
      await page.keyboard.press("s");
      await page.waitForTimeout(200);
      kb.sShortcutOpens = await page.evaluate(() => document.querySelector("#settings-panel")?.classList.contains("open"));
      await page.keyboard.press("Escape");
      kb.pass = kb.reachedSettings && kb.focusIndicatorChanged && kb.enterOpens && kb.escapeCloses &&
        kb.escapeFocusReturnsTo === "btn-settings" && (kb.valueToggled ?? false) && kb.sShortcutOpens;
      rec.checks.keyboard = kb;
    } else rec.checks.keyboard = { skipped: true, reason: "desktop-only per brief" };

    // ── CHECK 9: NOTES (reader.js surface, no user-annotation UI by design) ──
    if (KB) {
      const census = { noteRefsInBook: slugCfg.noteRefsTotal, chaptersWithRefs: slugCfg.chaptersWithRefs, noAnnotationControlsByDesign: true };
      let exercised = null;
      if (slugCfg.chaptersWithRefs > 0) {
        // IJ p1c32 has refs on the probe chapter itself — exercise right here.
        const hasRef = await page.locator("#chapter-text a.reader-noteref").first().count();
        if (!hasRef) {
          // navigate to the first ref-carrying chapter via TOC (same book)
          const target = slugCfg.firstRef?.chapterId;
          if (target) {
            await page.click("#btn-toc");
            await page.click(`.toc-chapter[data-chapter-id="${target}"]`);
            await page.waitForFunction((id) => document.body.dataset.chapter === id, target, { timeout: 15000 });
          }
        }
        const refLoc = page.locator("#chapter-text a.reader-noteref").first();
        if (await refLoc.count()) {
          const originChapter = await page.evaluate(() => document.body.dataset.chapter);
          const refMeta = await page.evaluate(() => {
            const a = document.querySelector("#chapter-text a.reader-noteref");
            const p = a?.closest("p");
            const idx = p ? [...document.querySelectorAll("#chapter-text > p")].indexOf(p) : -1;
            return { note: a?.dataset.note, href: a?.getAttribute("href"), paraIdx: idx, text: a?.textContent };
          });
          await refLoc.click();
          await page.waitForFunction(() => /#note-/.test(location.hash) || !!document.querySelector("#note-return-chip:not(.hidden)"), null, { timeout: 10000 }).catch(() => {});
          await page.waitForTimeout(450);
          const after = await page.evaluate(() => ({
            hash: location.hash,
            chapter: document.body.dataset.chapter,
            chipVisible: !!document.querySelector("#note-return-chip:not([hidden])") && getComputedStyle(document.querySelector("#note-return-chip")).display !== "none",
            chipText: (document.querySelector("#note-return-chip") || {}).textContent || null,
            scrollY: window.scrollY,
          }));
          const noteId = refMeta.note;
          const targetEl = await page.evaluate((n) => { const el = document.getElementById("note-" + n); if (!el) return null; const r = el.getBoundingClientRect(); return { id: el.id, rect: { y: r.y, h: r.height }, visible: r.height > 0 }; }, noteId);
          // Exercise the Escape return (hash is #note-N)
          await page.keyboard.press("Escape");
          await page.waitForTimeout(600);
          const backAt = await page.evaluate(() => ({
            chapter: document.body.dataset.chapter,
            chipHidden: !(document.querySelector("#note-return-chip:not([hidden])")),
            scrollY: window.scrollY,
          }));
          exercised = {
            roundTripWorked: after.hash.startsWith("#note-") && backAt.chapter === originChapter && backAt.chipHidden,
            ref: refMeta, clickedOriginChapter: originChapter,
            jumpedTo: after.chapter, chip: { visible: after.chipVisible, text: after.chipText },
            targetElement: targetEl, returnState: backAt,
          };
          if (slug === "infinite-jest") exercised.shot = [await shot("note-return-chip")];
        } else {
          exercised = { error: "no .reader-noteref reachable in this book" };
        }
      }
      rec.checks.notes = { ...census, exercised, verdict: exercised ? (exercised.roundTripWorked ? "PASS (endnote round-trip via note chip + Esc)" : "FAIL (round-trip broken)") : "no note_refs encoded in this book; reader.js defines NO user-annotation (create-note) control by design — verified from source: controls are .reader-noteref links, #note-return-chip, Esc return only" };
    } else rec.checks.notes = { skipped: true, reason: "desktop-only exercise; census verified in preflight" };

    // overflow after everything
    rec.overflowFinal = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, ok: document.documentElement.scrollWidth <= document.documentElement.clientWidth }));
  } catch (err) {
    rec.error = String(err).slice(0, 500);
    try { rec.shots?.push(await page.screenshot({ path: path.join(SHOTS, `${slug}-error-${W}.png`) }).then(() => `screenshots/${slug}-error-${W}.png`)); } catch {}
  } finally {
    rec.msElapsed = Date.now() - t0;
    await context.close();
  }
  return rec;
}

/* ── pass runner ──────────────────────────────────────────────────────────── */

const browser = await chromium.launch({ headless: true, executablePath: "/etc/profiles/per-user/prateek/bin/chromium", args: ["--no-sandbox"] });
const results = {}, retryList = [];
for (const slug of SLUGS) {
  const cfg = BOOKS[slug];
  if (!cfg.selection) { results[slug] = { error: "preflight missing selection" }; continue; }
  let r = await checkBook(browser, slug, cfg);
  if (r.error) {
    console.warn(`[retry once] ${slug}: ${r.error}`);
    r = await checkBook(browser, slug, cfg);
    if (r.error) retryList.push(slug);
  }
  results[slug] = r;
  const c = r.checks || {};
  const flags = ["measure", "size", "leading", "font", "persistence"].map((k) => `${k}=${c[k]?.pass ? "P" : "F"}`);
  if (c.keyboard && !c.keyboard.skipped) flags.push(`kb=${c.keyboard.pass ? "P" : "F"}`);
  if (c.notes && !c.notes.skipped) flags.push(`notes=${c.notes.exercised?.roundTripWorked ? "P" : c.notes.exercised ? "F" : "n/a"}`);
  flags.push(`ovf=${c.overflowSweep?.allOk ? "P" : "F"}`);
  console.log(r.error ? `✗ ${slug} ERROR: ${r.error}` : `· ${slug.padEnd(31)} ${flags.join(" ")}`);
}
await browser.close();

const outPath = path.join(HERE, `verification-${W}.json`);
writeFileSync(outPath, JSON.stringify({
  meta: { site: "http://localhost:8000 (serves _site)", viewport: `${W}x${H}`, reducedMotionEmulated: true, date: new Date().toISOString(), tool: "playwright chromium headless --no-sandbox", browser: "chromium (/etc/profiles/per-user/prateek/bin/chromium)", scope: "ALL 13 books; reader prefs on real built site; verification only, no implementation edits" },
  books: results,
  retries: retryList,
}, null, 2));
console.log(`wrote ${outPath}${retryList.length ? `  (RETRY FAILED: ${retryList.join(", ")})` : ""}`);
