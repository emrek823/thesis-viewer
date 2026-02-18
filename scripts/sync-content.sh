#!/bin/bash

# Sync theses from Obsidian vault directly
# Only syncs FINISHED theses — flat .md files in Theses/ root.
# Anything in Theses/In Progress/ is excluded.
#
# Theses/ is the single source of truth. The viewer's sanitizeForExternal()
# handles all public-facing transformation at build time:
#   - Resolves [[wiki links]] to public URLs via source-urls.json
#   - Scrubs non-public source attributions
#   - Strips internal sections (Evidence, Confidence, Related Theses)

VAULT_PATH="$HOME/Desktop/LLM_Second_Brain"
CONTENT_PATH="$(dirname "$0")/../content"
THESES_SRC="$VAULT_PATH/Theses"

echo "Syncing content from vault..."

# Clear and recreate
rm -rf "$CONTENT_PATH/Theses"
mkdir -p "$CONTENT_PATH/Theses"

# Copy only flat .md files in Theses/ root (not subdirectories like In Progress/)
count=0
for src in "$THESES_SRC"/*.md; do
  [ -f "$src" ] || continue
  filename="$(basename "$src")"
  # Skip hidden files
  [[ "$filename" == .* ]] && continue
  cp "$src" "$CONTENT_PATH/Theses/"
  count=$((count + 1))
done

echo "  Copied $count finished theses (skipped In Progress/)"

# Copy images referenced by theses (![[image.png]] embeds)
IMAGES_DEST="$(dirname "$0")/../public/images"
mkdir -p "$IMAGES_DEST"
img_count=0
for thesis in "$CONTENT_PATH/Theses"/*.md; do
  # Find ![[filename.png]] patterns and copy from vault
  grep -oP '!\[\[\K[^\]]+\.(?:png|jpg|jpeg|gif|svg|webp)' "$thesis" 2>/dev/null | while read -r img; do
    # Search common vault image locations
    for search_dir in "$VAULT_PATH/COLLAB" "$VAULT_PATH/Attachments" "$VAULT_PATH"; do
      if [ -f "$search_dir/$img" ]; then
        cp "$search_dir/$img" "$IMAGES_DEST/$img"
        img_count=$((img_count + 1))
        break
      fi
    done
  done
done
echo "  Copied thesis images to public/images/"

# Generate source URL mapping from vault source notes
echo "Generating source URL map..."
python3 "$(dirname "$0")/generate-source-urls.py"

echo "Done!"
