#!/usr/bin/env bash
# Assemble the static site the same way GitHub Actions does.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-"$ROOT/_site"}"

rm -rf "$OUT"
mkdir -p "$OUT"

cp "$ROOT/index.html" "$ROOT/catalog.json" "$OUT/"
cp -r "$ROOT/css" "$ROOT/shared" "$OUT/"
touch "$OUT/.nojekyll"

mkdir -p "$OUT/books"
for book in "$ROOT"/books/*/; do
  slug=$(basename "$book")
  mkdir -p "$OUT/books/$slug/data/chapters"
  cp "$book/index.html" "$book/theme.css" "$book/meta.json" "$OUT/books/$slug/" 2>/dev/null || true
  if [ -f "$book/data/toc.json" ]; then
    cp "$book/data/toc.json" "$OUT/books/$slug/data/"
  fi
  if [ -d "$book/data/chapters" ]; then
    cp "$book/data/chapters/"*.json "$OUT/books/$slug/data/chapters/" 2>/dev/null || true
  fi
done

echo "Built site → $OUT"
find "$OUT" -type f | wc -l | xargs -I{} echo "{} files"
du -sh "$OUT"
