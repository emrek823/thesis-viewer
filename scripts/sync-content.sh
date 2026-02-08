#!/bin/bash

# Sync theses from Obsidian vault directly
# Run this before building or during development
#
# Theses/ is the single source of truth. The viewer's sanitizeForExternal()
# handles all public-facing transformation at build time:
#   - Resolves [[wiki links]] to public URLs via source-urls.json
#   - Scrubs non-public source attributions
#   - Strips internal sections (Evidence, Confidence, Related Theses)

VAULT_PATH="$HOME/Desktop/Obsidian Vault/LLM_Second_Brain"
CONTENT_PATH="$(dirname "$0")/../content"

echo "Syncing content from vault..."

# Copy theses directly from Theses/ (no intermediate Theses-Public/ needed)
rm -rf "$CONTENT_PATH/Theses"
mkdir -p "$CONTENT_PATH/Theses"
if [ -d "$VAULT_PATH/Theses" ]; then
  for f in "$VAULT_PATH/Theses"/*.md; do
    [ -f "$f" ] && [[ "$(basename "$f")" != _* ]] && [[ "$(basename "$f")" != .* ]] && cp "$f" "$CONTENT_PATH/Theses/"
  done
  count=$(ls -1 "$CONTENT_PATH/Theses"/*.md 2>/dev/null | wc -l)
  echo "  Copied $count theses from Theses/"
else
  echo "  Warning: Theses folder not found at $VAULT_PATH/Theses"
fi

# Generate source URL mapping from vault source notes
echo "Generating source URL map..."
python3 "$(dirname "$0")/generate-source-urls.py"

echo "Done!"
