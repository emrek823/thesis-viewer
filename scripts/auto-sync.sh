#!/bin/bash

# Auto-sync theses from Obsidian vault to GitHub → Vercel
# Runs daily via launchd
#
# Pipeline: Theses/ → content/Theses/ + source-urls.json → git push → Vercel auto-deploys
# sanitizeForExternal() handles all public-facing transformation at build time.

set -e

LOG_FILE="/tmp/thesis-sync.log"
REPO_DIR="$HOME/Projects/thesis-viewer"

echo "$(date): Starting thesis sync..." >> "$LOG_FILE"

cd "$REPO_DIR"

# Sync theses + generate URL map
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
