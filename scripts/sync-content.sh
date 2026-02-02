#!/bin/bash

# Sync theses from Obsidian vault
# Run this before building or during development

VAULT_PATH="$HOME/Desktop/Obsidian Vault/LLM_Second_Brain"
CONTENT_PATH="$(dirname "$0")/../content"

echo "Syncing content from vault..."

# Sync Theses (from sanitized Theses-Public folder)
rm -rf "$CONTENT_PATH/Theses"
mkdir -p "$CONTENT_PATH/Theses"
if [ -d "$VAULT_PATH/Theses-Public" ]; then
  # Copy sanitized theses, exclude rules file
  for f in "$VAULT_PATH/Theses-Public"/*.md; do
    [ -f "$f" ] && [[ "$(basename "$f")" != _* ]] && cp "$f" "$CONTENT_PATH/Theses/"
  done
  count=$(ls -1 "$CONTENT_PATH/Theses"/*.md 2>/dev/null | wc -l)
  echo "  Copied $count sanitized theses from Theses-Public"
else
  echo "  Warning: Theses-Public folder not found at $VAULT_PATH/Theses-Public"
fi

echo "Done!"
