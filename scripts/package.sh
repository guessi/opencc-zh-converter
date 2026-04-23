#!/usr/bin/env bash
set -euo pipefail

DIST_DIR="dist"
mkdir -p "$DIST_DIR"

echo "==> Cleaning node_modules ..."
rm -rf node_modules

echo "==> Installing dependencies ..."
npm install

echo "==> Packaging ..."
npx @vscode/vsce package --out "$DIST_DIR/"

echo "==> Done."
find "$DIST_DIR" -name '*.vsix' -exec ls -lh {} +
