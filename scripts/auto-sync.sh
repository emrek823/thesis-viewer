#!/bin/bash

# Auto-sync theses from Obsidian vault to GitHub → Vercel
# Runs daily via launchd
#
# Pipeline: Theses/ → Theses-Public/ → content/Theses/ → git push → Vercel auto-deploys

set -e

LOG_FILE="/tmp/thesis-sync.log"
REPO_DIR="$HOME/Projects/thesis-viewer"
VAULT="$HOME/Desktop/Obsidian Vault/LLM_Second_Brain"

echo "$(date): Starting thesis sync..." >> "$LOG_FILE"

# Step 1: Copy new/updated files from Theses/ → Theses-Public/
# Uses rsync --update so manual edits in Theses-Public/ are preserved
# until the Theses/ source is modified again
mkdir -p "$VAULT/Theses-Public"
rsync -a --update --include='*.md' --exclude='_*' --exclude='.*' \
  "$VAULT/Theses/" "$VAULT/Theses-Public/" >> "$LOG_FILE" 2>&1
echo "$(date): Synced Theses/ → Theses-Public/" >> "$LOG_FILE"

cd "$REPO_DIR"

# Step 2: Copy Theses-Public/ → content/Theses/
./scripts/sync-content.sh >> "$LOG_FILE" 2>&1

# Check if there are changes
if git diff --quiet content/; then
    echo "$(date): No changes to sync" >> "$LOG_FILE"
    exit 0
fi

# Commit and push
git add content/
git commit -m "Auto-sync theses $(date +%Y-%m-%d)" >> "$LOG_FILE" 2>&1
git push >> "$LOG_FILE" 2>&1

echo "$(date): Sync complete" >> "$LOG_FILE"
