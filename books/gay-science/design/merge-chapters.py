#!/usr/bin/env python3
"""Merge cohort design JSON into books/gay-science/design/chapters.json.

Precedence per chapter id: design/cohort-<id>.json (lead-authored, content
kinds) > design/supervisor-fallback-<cohort>.json (altitude x weight).
Seeds (weight 'seed', opener.treatment 'spark') get NO manifest entry —
their spark is CSS-only. Emits Contract v1.1 runtime form {version, cover,
default, chapters{id: {src, symbol?, class, motif?, caption?}}}.

Refuses to emit unless: every TOC id is covered by exactly one source, every
referenced (src, symbol) resolves in the SVG on disk, and landmark ids carry
banner/song class. Exits nonzero with the defect list otherwise.
"""
import json, re, sys, xml.dom.minidom
from pathlib import Path

BOOK = Path("books/gay-science")
TOC = json.load(open(BOOK / "data/toc.json"))
LANDMARKS = {"p1c1", "p5c18", "p6c66", "p6c67", "p7c1", "p7c41", "p8c1"}

ALT_MOTIF = {"part-1": "dawn-glow", "part-2": "sunrise", "part-3": "morning",
             "part-4": "high-morning", "part-5": "zenith", "part-6": "golden",
             "part-7": "afternoon", "part-8": "sunset"}
COHORT_OF = {"part-1": "a", "part-2": "a", "part-3": "b", "part-4": "c",
             "part-5": "d", "part-6": "ef", "part-7": "ef", "part-8": "ef"}

# G1-fixed landmark altitudes: explicit motif wins over kind/ALT (A-validator MAJOR-1).
MOTIF_OVERRIDES = {"p1c1": "dawn-glow"}


CAPTIONS = {
    "p1c1": "Glow before the house — Preface to the Second Edition",
    "p5c18": "\u201cI\u2019m looking for God! I\u2019m looking for God!\u201d — at bright morning",
    "p6c66": "The heaviest weight — what if this life returned forever?",
    "p6c67": "\u201cYou great heavenly body!\u201d — Incipit tragoedia",
    "p7c1": "How to understand our cheerfulness — the first shadow over Europe",
    "p7c41": "Epilogue — the spirits of the book descend, laughing",
    "p8c1": "Songs of Prince Vogelfrei — the outlaw sings the sun down",
}


def load_sources():
    per_id, prov = {}, {}
    for co in ("a", "b", "c", "d", "ef"):
        for path, priority in ((BOOK / f"design/cohort-{co}.json", 1),
                               (BOOK / f"design/supervisor-fallback-{co}.json", 0)):
            if not path.exists():
                continue
            data = json.load(open(path))
            for ch in data.get("chapters", []):
                cid = ch["id"]
                if cid not in per_id or priority >= per_id[cid][0]:
                    per_id[cid] = (priority, path.name, ch)
    return per_id


def svg_symbols(src):
    doc = xml.dom.minidom.parse(str(BOOK / src))
    return {e.getAttribute("id") for e in doc.getElementsByTagName("*")
            if e.hasAttribute("id")}


TREAT_TO_CLASS = {"banner": "banner", "motif": "motif", "song": "song",
                  "landmark-panel": "banner", "essay-opener": "banner",
                  "mark": "motif"}


def main():
    per_id = load_sources()
    toc_ids = [c["id"] for p in TOC["parts"] for c in p["chapters"]]
    missing = [i for i in toc_ids if i not in per_id]
    if missing:
        print(f"REFUSED: {len(missing)} TOC ids without design entry: {missing[:8]}")
        return 1
    chapters, defects, symcache = {}, [], {}
    for cid in toc_ids:
        prio, fname, ch = per_id[cid]
        op = ch.get("opener", {})
        treat = op.get("treatment", "motif")
        if ch.get("weight") == "seed" or treat in ("spark", "none"):
            continue  # G2: CSS spark only, no manifest entry.
        src = ch.get("src") or ch.get("motif_asset") or "art/part-dividers.svg"
        if not src.startswith("art/"):
            continue  # Cohort-explicit "no art" marker (e.g. D seeds).
        symbol = ch.get("symbol") or op.get("symbol")
        if src not in symcache:
            try:
                symcache[src] = svg_symbols(src)
            except Exception as e:
                defects.append(f"{cid}: cannot parse {src}: {e}")
                continue
        if symbol and symbol not in symcache[src]:
            defects.append(f"{cid}: symbol #{symbol} missing in {src} (from {fname})")
            continue
        entry = {"src": src}
        if symbol:
            entry["symbol"] = symbol
        cls = ch.get("class") or TREAT_TO_CLASS.get(treat, "motif")
        if cid == "p8c1":
            cls = "song gs-ef-song" if (ch.get("src") or ch.get("motif_asset") or "").endswith("cohort-ef.svg") else "song"
        elif treat == "banner" and (ch.get("src") or ch.get("motif_asset") or "").endswith("cohort-ef.svg") and "gs-ef-banner" not in cls:
            cls += " gs-ef-banner"
        elif treat == "motif" and (ch.get("src") or ch.get("motif_asset") or "").endswith("cohort-ef.svg") and "gs-ef-medallion" not in cls:
            cls += " gs-ef-medallion"
        entry["class"] = cls
        if treat in ("landmark-panel", "essay-opener") and "banner" not in entry["class"].split():
            entry["class"] += " banner"
        motif = MOTIF_OVERRIDES.get(cid) or ch.get("motif") or ALT_MOTIF.get(ch.get("part", "")) or ch.get("kind") or ch.get("weather")
        if motif:
            entry["motif"] = motif
        caption = ch.get("caption") or CAPTIONS.get(cid)
        if caption:
            entry["caption"] = caption
        if cid in LANDMARKS and not ({"banner", "song"} & set(entry["class"].split())):
            defects.append(f"{cid}: landmark must be banner/song, got {entry['class']}")
        chapters[cid] = entry
    if defects:
        print(f"REFUSED: {len(defects)} defects:")
        for d in defects[:20]:
            print(" -", d)
        return 1
    out = {"version": 1,
           "cover": {"src": "art/cover.svg", "class": "plate",
                     "caption": "Noon sun over a dark sea, ringed by vermilion dancers"},
           "default": {"class": "motif"},
           "chapters": chapters}
    json.dump(out, open(BOOK / "design/chapters.json", "w"), indent=1, sort_keys=True)
    n_cohort = sum(1 for c in toc_ids if per_id[c][0] == 1)
    print(f"OK: {len(chapters)} manifest entries "
          f"({len(toc_ids) - len(chapters)} CSS-spark seeds), "
          f"{n_cohort}/{len(toc_ids)} cohort-authored.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
