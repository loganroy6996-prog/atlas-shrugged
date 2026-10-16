/**
 * assemble.mjs — merges verification-<1440|820|390>.json passes into the single
 * verification.json artifact and prints the verdict matrix used by REPORT-VALIDATE.md.
 * Verification tooling only.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const HERE = path.dirname(new URL(import.meta.url).pathname);
const VIEWPORTS = ["1440", "820", "390"];
const passes = Object.fromEntries(VIEWPORTS.map((v) => [v, JSON.parse(readFileSync(path.join(HERE, `verification-${v}.json`), "utf8"))]));

const slugs = Object.keys(passes["1440"].books);
const out = {
  meta: {
    role: "independent validator — verification only, no implementation edits",
    site: passes["1440"].meta.site,
    viewports: { "1440x1000": "desktop+kb+notes", "820x1180": "tablet", "390x844": "phone" },
    reducedMotionEmulated: true,
    browser: passes["1440"].meta.browser,
    date: passes["1440"].meta.date,
    runs: VIEWPORTS.map((v) => passes[v].meta),
    formula: "narrow=min(min(A,65ch),40rem); standard=min(A,65ch); wide=max(A,64rem); A=var(--chapter-max, var(--reader-max,52rem)) computed ON the probe paragraph (rem→px timing via injected width probe); 65ch measured in-probe (65 '0' glyphs, font:inherit); tol ±2px on computed maxWidth; <1072px: computed maxWidth + rendered monotonicity",
    expectationSources: "recomputed live per measurement (document.fonts.ready awaited) — not copied from the implementer's verification",
    retryPolicy: "books erroring once were rerun immediately; check-level values are direct observations",
  },
};

const books = {};
const flags = (b) => {
  const c = b.checks || {};
  const firstMs = c.measure?.states || {};
  const M = (t) => { const s = firstMs[t]; return s ? `${s.renderedWidth}/${String(s.computedMaxWidth).replace("px", "")}` : "n/a"; };
  return {
    measure: { pass: !!c.measure?.pass, rendered:"narrow/standard/wide = " + [M("narrow"), M("standard"), M("wide")].join(" · ") + " (rendered/computedMax px)" },
    size: { pass: !!c.size?.pass, observed: (c.size?.observed || []).map(o => `${o.value}:${o.fontSizePx}`).join(" ") },
    leading: { pass: !!c.leading?.pass, observed: (c.leading?.observed || []).map(o => `${o.value}:${o.lineHeightPx}`).join(" ") },
    font: { pass: !!c.font?.pass, observed: `${(c.font?.observed?.serif?.fontFamily || "").slice(0, 40)} → ${(c.font?.observed?.sans?.fontFamily || "").slice(0, 40)}` },
    persistence: { pass: !!c.persistence?.pass, after: JSON.stringify(c.persistence?.datasetAfter || {}), computed: JSON.stringify(c.persistence?.computed || {}) },
    overflow: { pass: !!(c.overflowSweep?.allOk ?? c.overflowFinal?.ok), sweeps: c.overflowSweep?.states || 0, overflowFinal: c.overflowFinal },
    keyboard: c.keyboard || null,
    notes: c.notes || null,
  };
};

for (const slug of slugs) {
  books[slug] = {
    probe: passes["1440"].books[slug].probe || presetsProbe(slug),
    storageKeys: { book: `reader-${slug}`, bookKeyRaw: passes["1440"].books[slug].localStorageKeys?.bookKeyRaw, allKeysAtPersistence: passes["1440"].books[slug].localStorageKeys?.allKeys, libraryThemeKeySeen: (passes["1440"].books[slug].localStorageKeys?.allKeys || []).includes("literary-library-theme") },
    viewports: {},
  };
  function presetsProbe(s) { return passes[VIEWPORTS.find((v) => passes[v].books[s]?.probe)]?.books?.[s]?.probe ?? null; }
  for (const v of VIEWPORTS) {
    const b = passes[v].books[slug];
    books[slug].viewports[`${v}x${{"1440":1000,"820":1180,"390":844}[v]}`] = { error: b.error ?? null, ...flags(b) };
  }
}
out.books = books;
out.summary = { runs: VIEWPORTS.map((v) => ({ viewport: `${v}`, books: Object.keys(passes[v].books).length, retries: passes[v].retries })) };
writeFileSync(path.join(HERE, "verification.json"), JSON.stringify(out, null, 2));
console.log("wrote verification.json");

/* compact matrix for the report */
for (const v of VIEWPORTS) {
  console.log(`\n== ${v} ==`);
  for (const slug of slugs) {
    const b = passes[v].books[slug]; const c = b.checks || {};
    const row = [
      c.measure?.pass ? "OK" : "F", c.size?.pass ? "OK" : "F", c.leading?.pass ? "OK" : "F", c.font?.pass ? "OK" : "F",
      c.persistence?.pass ? "OK" : "F", c.overflowSweep?.allOk ? "OK" : "F",
      c.keyboard?.skipped ? "-" : (c.keyboard?.pass ? "OK" : "F"),
      c.notes?.skipped ? "-" : (c.notes?.exercised ? (c.notes?.verdict?.startsWith("PASS") ? "OK(rt)" : "F") : "n/a(design)"),
    ];
    console.log(slug.padEnd(31), row.join("  "), b.error ? " ERROR:" + b.error.slice(0, 60) : "");
  }
}
