#!/usr/bin/env bash
# Assemble the static site the same way GitHub Actions does.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-"$ROOT/_site"}"

rm -rf "$OUT"
mkdir -p "$OUT"

cp "$ROOT/index.html" "$ROOT/catalog.json" "$OUT/"
cp -r "$ROOT/css" "$ROOT/shared" "$OUT/"
if [ -d "$ROOT/assets" ]; then
  cp -r "$ROOT/assets" "$OUT/"
fi
touch "$OUT/.nojekyll"

mkdir -p "$OUT/books"
for book in "$ROOT"/books/*/; do
  slug=$(basename "$book")
  mkdir -p "$OUT/books/$slug/data/chapters"
  cp "$book/index.html" "$book/theme.css" "$book/meta.json" "$OUT/books/$slug/" 2>/dev/null || true
  for js in "$book"/*.js; do [ -f "$js" ] && cp "$js" "$OUT/books/$slug/" || true; done
  for df in "$book"/data/*.json; do [ -f "$df" ] && cp "$df" "$OUT/books/$slug/data/" || true; done
  if [ -d "$book/data/chapters" ]; then
    cp "$book/data/chapters/"*.json "$OUT/books/$slug/data/chapters/" 2>/dev/null || true
  fi
  if [ -d "$book/art" ]; then
    mkdir -p "$OUT/books/$slug/art"
    cp -r "$book/art/." "$OUT/books/$slug/art/"
  fi
  if [ -d "$book/design" ]; then
    mkdir -p "$OUT/books/$slug/design"
    cp -r "$book/design/." "$OUT/books/$slug/design/"
  fi
done

echo "Built site → $OUT"
find "$OUT" -type f | wc -l | xargs -I{} echo "{} files"
du -sh "$OUT"
