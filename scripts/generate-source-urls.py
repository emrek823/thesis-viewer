#!/usr/bin/env python3
"""
Generate source-urls.json by scanning vault source notes for url: frontmatter.

Walks the vault's Sources/ directory, reads each .md file's YAML frontmatter,
and builds a mapping from vault-relative paths to public URLs.

Output: content/source-urls.json
{
  "Sources/Research-Papers/NYUTron Health System-Scale...": "https://nature.com/...",
  "Sources/Research-Papers/EHRSHOT An EHR Benchmark...": "https://arxiv.org/...",
  ...
}

Also maps Theses/ paths to viewer /thesis/slug URLs for cross-thesis links.
"""

import json
import os
import re
import sys

VAULT_PATH = os.path.expanduser("~/Desktop/Obsidian Vault/LLM_Second_Brain")
CONTENT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "content")
OUTPUT_FILE = os.path.join(CONTENT_PATH, "source-urls.json")


def extract_frontmatter_url(filepath):
    """Extract url field from YAML frontmatter."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
    except (IOError, UnicodeDecodeError):
        return None

    # Check for YAML frontmatter
    if not content.startswith("---"):
        return None

    end = content.find("---", 3)
    if end == -1:
        return None

    frontmatter = content[3:end]

    # Extract url field (simple regex, avoids PyYAML dependency)
    # Matches: url: https://... or url: "https://..."
    match = re.search(r'^url:\s*["\']?(https?://[^\s"\']+)["\']?\s*$', frontmatter, re.MULTILINE)
    if match:
        return match.group(1)

    # Also check arxiv_url, pdf_url as fallbacks
    for field in ["arxiv_url", "pdf_url", "source"]:
        match = re.search(rf'^{field}:\s*["\']?(https?://[^\s"\']+)["\']?\s*$', frontmatter, re.MULTILINE)
        if match:
            url = match.group(1)
            # Convert arxiv PDF URLs to abstract URLs
            if "arxiv.org/pdf/" in url:
                url = url.replace("/pdf/", "/abs/").rstrip(".pdf")
                # Remove version suffix for cleaner URL
                url = re.sub(r'v\d+$', '', url)
            return url

    return None


def scan_sources(vault_path):
    """Walk Sources/ and extract URLs from all .md files."""
    url_map = {}
    sources_dir = os.path.join(vault_path, "Sources")

    if not os.path.isdir(sources_dir):
        print(f"Warning: Sources directory not found at {sources_dir}", file=sys.stderr)
        return url_map

    for root, _dirs, files in os.walk(sources_dir):
        for filename in files:
            if not filename.endswith(".md"):
                continue

            filepath = os.path.join(root, filename)
            rel_path = os.path.relpath(filepath, vault_path)
            # Remove .md extension for wiki link matching
            rel_key = rel_path[:-3]  # "Sources/Research-Papers/NYUTron..."

            url = extract_frontmatter_url(filepath)
            if url:
                url_map[rel_key] = url

    return url_map


def scan_theses(vault_path):
    """Map thesis names to viewer /thesis/slug URLs for cross-thesis links."""
    url_map = {}
    theses_dir = os.path.join(vault_path, "Theses")

    if not os.path.isdir(theses_dir):
        return url_map

    for filename in os.listdir(theses_dir):
        if not filename.endswith(".md") or filename.startswith("."):
            continue

        # Thesis slug is the filename without .md
        slug = filename[:-3]
        rel_key = f"Theses/{slug}"
        # Viewer URL uses the slug directly
        url_map[rel_key] = f"/thesis/{slug}"

    return url_map


def main():
    print(f"Scanning vault: {VAULT_PATH}")

    url_map = {}

    # Scan source notes
    source_urls = scan_sources(VAULT_PATH)
    url_map.update(source_urls)
    print(f"  Sources with URLs: {len(source_urls)}")

    # Scan theses for cross-thesis links
    thesis_urls = scan_theses(VAULT_PATH)
    url_map.update(thesis_urls)
    print(f"  Thesis slugs: {len(thesis_urls)}")

    # Ensure output directory exists
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(url_map, f, indent=2, ensure_ascii=False)

    print(f"  Written to: {OUTPUT_FILE}")
    print(f"  Total entries: {len(url_map)}")


if __name__ == "__main__":
    main()
