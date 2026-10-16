/**
 * preflight-probes.mjs — Independent validation of shared reader prefs (Step 5 closeout).
 * Verified FINAL — no todo-comments in shipped code.
 * Selects the probe chapter + probe paragraph per book from the LIVE built site
 * (http://localhost:8000 serves _site). Verification only; edits nothing.
 *
 * Probe rule (primary): #chapter-text > p with NO class attribute, document-order
 * index >= 10, text length > 400 chars, not numeral-led (reader.js adds
 * .reader-fragnum to `NNN. ` paragraphs) and not NB-led (.reader-nb).
 * Fallback: the longest such paragraph with index >= 5 (recorded as fallback=true).
 * Overrides pinned by the validation brief: infinite-jest p1c32 (mandatory),
 * sovereign-individual p1c5 (authored plate-grid condition), atlas-shrugged p1c3,
 * being-and-time p2c19, twilight-of-the-idols p1c10 (cross-check anchors).
 *
 * Output: chapters.json in this directory + console summary.
 */
import { writeFileSync } from "node:fs";

const BASE = "http://localhost:8000/books";
const BOOKS = [
  "atlas-shrugged","being-and-time","beyond-good-and-evil","forty-ways-to-look-at-churchill",
  "gay-science","gentle-introduction","infinite-jest","open-letter","sovereign-individual",
  "the-fountainhead","thus-spoke-zarathustra","twilight-of-the-idols","will-to-power",
];
const OVERRIDES = {
  "infinite-jest": ["p1c32", "mandatory per brief"],
  "sovereign-individual": ["p1c5", "authored plate-grid chapter (manifest class=plate)"],
  "atlas-shrugged": ["p1c3", "anchor cross-check"],
  "being-and-time": ["p2c19", "anchor cross-check"],
  "twilight-of-the-idols": ["p1c10", "anchor cross-check"],
};

const NUMERAL_LED = /^\d{1,4}/;
const isProbeText = (t) => t.length > 400 && !NUMERAL_LED.test(t) && !/^\s*(NB|N\.B\.)/.test(t);

function firstQ(paras, minIdx, maxIdx = Infinity) {
  for (let i = minIdx; i < Math.min(paras.length, maxIdx === Infinity ? paras.length : maxIdx + 1); i++) {
    if (isProbeText(paras[i])) return i;
  }
  return -1;
}
function longestQ(paras, minIdx) {
  let best = -1, bestLen = -1;
  for (let i = minIdx; i < paras.length; i++) {
    if (isProbeText(paras[i]) && paras[i].length > bestLen) { best = i; bestLen = paras[i].length; }
  }
  return best;
}

const out = {};
for (const slug of BOOKS) {
  const rec = { slug, selection: null, noteRefsTotal: 0, chaptersWithRefs: 0, notesChapterIds: 0 };
  try {
    const toc = await (await fetch(`${BASE}/${slug}/data/toc.json`)).json();
    const flat = toc.parts.flatMap((p) => (p.chapters || []).map((c) => ({ ...c, partId: p.id })));
    rec.notesChapterIds = flat.filter((c) => (c.title || "").match(/^notes?\b/i)).length;
    const tried = [];
    const scan = async (ids) => {
      for (const c of ids) {
        try {
          const d = await (await fetch(`${BASE}/${slug}/data/chapters/${c.id}.json`)).json();
          const paras = Array.isArray(d.paragraphs) ? d.paragraphs : [];
          const parasCount = paras.length;
          if (parasCount < 6) { tried.push({ id: c.id, reason: "skip: < 6 paragraphs" }); continue; }
          let idx = firstQ(paras, 10);
          let fallback = false;
          if (idx < 0) { idx = longestQ(paras, 5); fallback = true; }
          if (idx >= 0) {
            const rest = ids.slice(ids.indexOf(c) + 1);
            census(rest);
            return { chapterId: c.id, paraIdx: idx, fallback, parasCount, title: c.title, len: paras[idx].length, excerpt: paras[idx].slice(0, 80) };
          }
          tried.push({ id: c.id, reason: "no qualifying paragraph" });
        } catch (e) {
          tried.push({ id: c.id, reason: "fetch failed: " + e.message });
        }
      }
      return null;
    };
    // Endnote census: runs over chapters not consumed by an early selection,
    // so note_refs totals cover the whole book.
    const skip = new Set();
    const census = async (ids) => {
      ids = ids.filter((c) => !skip.has(c.id));
      for (const c of ids) {
        try {
          const d = await (await fetch(`${BASE}/${slug}/data/chapters/${c.id}.json`)).json();
          if (d.note_refs?.length) {
            rec.noteRefsTotal += d.note_refs.length;
            rec.chaptersWithRefs += 1;
            if (!rec.firstRef) rec.firstRef = { chapterId: c.id, ...d.note_refs[0] };
          }
        } catch { /* census is best-effort */ }
      }
    };
    const ordered = flat.filter((c) => c.partId !== toc.notes_part);
    let sel = null;
    if (OVERRIDES[slug]) {
      const [ov, why] = OVERRIDES[slug];
      const oc = flat.find((c) => c.id === ov);
      if (oc) {
        // Validate the override the same way; fall back if it can't satisfy the rule.
        try {
          const d = await (await fetch(`${BASE}/${slug}/data/chapters/${ov}.json`)).json();
          const paras = d.paragraphs || [];
          if (d.note_refs?.length) {
            rec.noteRefsTotal += d.note_refs.length;
            rec.chaptersWithRefs += 1;
            rec.firstRef = { chapterId: ov, ...d.note_refs[0] };
          }
          let idx = firstQ(paras, 10); let fallback = false;
          if (idx < 0) { idx = longestQ(paras, 5); fallback = true; }
          if (idx >= 0) {
            sel = { chapterId: ov, paraIdx: idx, fallback, parasCount: paras.length, title: oc.title, len: paras[idx].length, excerpt: paras[idx].slice(0, 80), override: why };
          }
        } catch { /* fall through */ }
      }
      if (!sel) { tried.push({ id: ov, reason: `override failed probe rule (${why}); falling to scan` }); }
      else { await census(ordered.filter((c) => c.id !== ov)); }
    }
    if (!sel) sel = await scan(ordered);
    if (!sel) throw new Error(`no probe chapter found (tried ${tried.length} chapters)`);
    rec.selection = { ...sel, scanTried: tried };
  } catch (e) {
    rec.error = e.message;
  }
  out[slug] = rec;
  console.log(slug.padEnd(32), rec.selection ? `${rec.selection.chapterId} idx=${rec.selection.paraIdx} len=${rec.selection.len} fallback=${rec.selection.fallback}` : `ERROR ${rec.error}`, `noteRefs=${rec.noteRefsTotal}`);
}
writeFileSync(new URL("./chapters.json", import.meta.url).pathname, JSON.stringify(out, null, 2));
console.log("wrote chapters.json");
