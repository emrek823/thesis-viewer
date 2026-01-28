#!/bin/bash

# Sync theses from Obsidian vault
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

echo "Done!"
