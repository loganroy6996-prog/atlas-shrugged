"""IJ interim seal-plate sprite builder (supervisor tool, run once per edit).

Builds books/infinite-jest/art/cohort-{a..g}.svg interim sprites: one <symbol>
per chapter, each a ruled ledger plate framing that chapter's year seal
(referenced artwork copied inline from art/seals.svg, with its hatch-pattern
deps) plus an engraved chapter numeral. Cohort engineers REPLACE these files
wholesale with authored plates; the manifest {src,symbol} keys are unchanged.

Style grammar (matches the Ledger identity, deliberately quiet so cohort art
is an upgrade, never a clash):
  - 800x450 landscape plates, Ledger ground #11140F
  - double ruled border: outer seal-gold hairline, inner stamp-red keyline
  - centered seal glyph (patterns + paths copied from seals.svg symbols)
  - Plex-Mono filing caption top, Archivo-style numeral bottom (system faces
    inside SVG: monospace / sans-serif — SVG text inherits page fonts anyway)
  - corner registration ticks + sparse ruled hatching, never noise fills
"""
from __future__ import annotations
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BOOK = ROOT / "books" / "infinite-jest"
NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", NS)

MANILA = "#E8DCC0"
GOLD = "#C9A227"
STAMP = "#D6402B"
VIOLET = "#7C6BD6"
PLATE_BG = "#11140F"


def load_seals() -> tuple[dict[str, str], dict[str, str]]:
    """Return (symbol_id -> inner SVG markup, pattern_id -> pattern markup)."""
    tree = ET.parse(BOOK / "art" / "seals.svg")
    root = tree.getroot()
    syms: dict[str, str] = {}
    for sym in root.findall(f"{{{NS}}}symbol"):
        sid = sym.get("id")
        inner = "".join(
            ET.tostring(c, encoding="unicode").replace("ns0:", "").replace(":ns0", "")
            for c in list(sym)
        )
        # Strip redundant xmlns decls children may carry.
        inner = re.sub(r'\s+xmlns="[^"]*"', "", inner)
        syms[sid] = inner
    pats: dict[str, str] = {}
    defs = root.find(f"{{{NS}}}defs")
    if defs is not None:
        for pat in list(defs):
            pid = pat.get("id")
            markup = ET.tostring(pat, encoding="unicode").replace("ns0:", "").replace(":ns0", "")
            markup = re.sub(r'\s+xmlns="[^"]*"', "", markup)
            pats[pid] = markup
    return syms, pats


def plate_symbol(chapter_id: str, numeral: str, seal_id: str, seal_inner: str,
                 violet: bool) -> str:
    accent = VIOLET if violet else GOLD
    keyline = STAMP
    # Seal glyph: the 200x200 seal art scaled into a 190px medallion, centered.
    return f"""<symbol id="{{SYM}}" viewBox="0 0 800 450">
<rect x="1" y="1" width="798" height="448" fill="{PLATE_BG}" stroke="{accent}" stroke-width="2" opacity="0.9"/>
<rect x="10" y="10" width="780" height="430" fill="none" stroke="{keyline}" stroke-width="1" opacity="0.65"/>
<g stroke="{accent}" stroke-width="2" opacity="0.8">
<line x1="10" y1="26" x2="34" y2="26"/><line x1="22" y1="10" x2="22" y2="34"/>
<line x1="766" y1="26" x2="790" y2="26"/><line x1="778" y1="10" x2="778" y2="34"/>
<line x1="10" y1="424" x2="34" y2="424"/><line x1="22" y1="416" x2="22" y2="440"/>
<line x1="766" y1="424" x2="790" y2="424"/><line x1="778" y1="416" x2="778" y2="440"/>
</g>
<g stroke="{MANILA}" stroke-width="1" opacity="0.22">
<line x1="60" y1="60" x2="200" y2="60"/><line x1="60" y1="70" x2="170" y2="70"/>
<line x1="600" y1="380" x2="740" y2="380"/><line x1="630" y1="390" x2="740" y2="390"/>
</g>
<g transform="translate(250,-20) scale(1.5)">{seal_inner}</g>
<text x="400" y="300" text-anchor="middle" font-family="monospace" font-size="21" letter-spacing="6" fill="{MANILA}" opacity="0.92">{numeral}</text>
<text x="400" y="330" text-anchor="middle" font-family="monospace" font-size="13" letter-spacing="4" fill="{accent}" opacity="0.85">FILED · {chapter_id.upper()}</text>
<line x1="330" y1="356" x2="470" y2="356" stroke="{accent}" stroke-width="1" opacity="0.7"/>
<rect x="392" y="350" width="16" height="12" fill="{PLATE_BG}"/>
<rect x="396" y="352" width="8" height="8" fill="none" stroke="{keyline}" stroke-width="1.5" transform="rotate(45 400 356)"/>
<text x="400" y="408" text-anchor="middle" font-family="monospace" font-size="12" letter-spacing="3" fill="{MANILA}" opacity="0.55">SUBSIDIZED TIME LEDGER</text>
</symbol>"""


def main() -> None:
    manifest = json.loads((BOOK / "design" / "chapters.json").read_text())
    syms, pats = load_seals()
    by_cohort: dict[str, list[tuple[str, dict]]] = {}
    for cid, e in manifest["chapters"].items():
        by_cohort.setdefault(e["cohort"], []).append((cid, e))
    toc = json.loads((BOOK / "data" / "toc.json").read_text())
    numerals = {ch["id"]: ch["number_label"] for p in toc["parts"] for ch in p["chapters"]}
    for cohort, entries in sorted(by_cohort.items()):
        # Collect hatch patterns actually referenced by this cohort's seals.
        needed: set[str] = set()
        for _, e in entries:
            inner = syms[e["year_seal"]]
            needed.update(re.findall(r"url\(#([^)]+)\)", inner))
        defs = "".join(pats[p] for p in sorted(needed) if p in pats)
        symbols = []
        for cid, e in sorted(entries, key=lambda t: t[1]["order"]):
            sym_id = e["symbol"]
            violet = e["part"] == "part-2"
            s = plate_symbol(cid, numerals[cid], e["year_seal"], syms[e["year_seal"]], violet)
            s = s.replace("{SYM}", sym_id)
            symbols.append(s)
        doc = (
            f'<svg xmlns="{NS}" viewBox="0 0 800 450" role="img" '
            f'aria-label="Infinite Jest cohort {cohort} interim seal plates">\n'
            f"<defs>{defs}</defs>\n" + "\n".join(symbols) + "\n</svg>\n"
        )
        # Validate well-formedness before writing.
        ET.fromstring(doc)
        out = BOOK / "art" / f"cohort-{cohort}.svg"
        out.write_text(doc, encoding="utf-8")
        print(f"  ✓ art/cohort-{cohort}.svg ({len(symbols)} plates, {len(doc)//1024} KB)")


if __name__ == "__main__":
    main()
