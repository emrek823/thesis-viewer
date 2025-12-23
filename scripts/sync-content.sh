#!/bin/bash

# Sync theses and sources from Obsidian vault
# Run this before building or during development

VAULT_PATH="$HOME/Desktop/Obsidian Vault/LLM_Second_Brain"
CONTENT_PATH="$(dirname "$0")/../content"

echo "Syncing content from vault..."

# Sync Theses
rm -rf "$CONTENT_PATH/Theses"
mkdir -p "$CONTENT_PATH/Theses"
if [ -d "$VAULT_PATH/Theses" ]; then
  cp "$VAULT_PATH/Theses"/*.md "$CONTENT_PATH/Theses/" 2>/dev/null || true
  count=$(ls -1 "$CONTENT_PATH/Theses"/*.md 2>/dev/null | wc -l)
  echo "  Copied $count theses"
else
  echo "  Warning: Theses folder not found at $VAULT_PATH/Theses"
fi

# Sync Sources (was Processed, now Sources with subfolders)
rm -rf "$CONTENT_PATH/Processed"
mkdir -p "$CONTENT_PATH/Processed"

if [ -d "$VAULT_PATH/Sources" ]; then
  # Copy all markdown files from Sources and its subfolders into flat Processed folder
  find "$VAULT_PATH/Sources" -name "*.md" -type f | while read -r file; do
    cp "$file" "$CONTENT_PATH/Processed/" 2>/dev/null || true
  done
  count=$(find "$CONTENT_PATH/Processed" -name "*.md" 2>/dev/null | wc -l)
  echo "  Copied $count sources from Sources/"
else
  echo "  Warning: Sources folder not found at $VAULT_PATH/Sources"
fi

echo "Done!"
