#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

npx --yes sharp-cli \
  -i "$ROOT_DIR/assets/icon.svg" \
  -o "$ROOT_DIR/assets/" \
  -f png \
  -c 9 \
  --effort 6 \
  --density 144 \
  resize 256 256
echo "Generated: $ROOT_DIR/assets/icon.png"
