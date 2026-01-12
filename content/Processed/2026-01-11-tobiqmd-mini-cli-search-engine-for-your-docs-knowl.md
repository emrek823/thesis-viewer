---
url: https://t.co/hZ0xXfdrjn
title: "tobi/qmd: mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local"
clipped: 2026-01-11 20:40
source: browser-history
---

# tobi/qmd: mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local

> Source: [https://t.co/hZ0xXfdrjn](https://t.co/hZ0xXfdrjn)

[tobi](/tobi) 
/
**[qmd](/tobi/qmd)**
Public

* [Notifications](/login?return_to=%2Ftobi%2Fqmd) You must be signed in to change notification settings
* [Fork
  50](/login?return_to=%2Ftobi%2Fqmd)
* [Star
   1.3k](/login?return_to=%2Ftobi%2Fqmd)

mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local

[1.3k
stars](/tobi/qmd/stargazers) [50
forks](/tobi/qmd/forks) [Branches](/tobi/qmd/branches) [Tags](/tobi/qmd/tags) [Activity](/tobi/qmd/activity)

[Star](/login?return_to=%2Ftobi%2Fqmd)

[Notifications](/login?return_to=%2Ftobi%2Fqmd) You must be signed in to change notification settings

# tobi/qmd

main

[Branches](/tobi/qmd/branches)[Tags](/tobi/qmd/tags)

Go to file

Code

Open more actions menu

## Folders and files

| Name | | Name | Last commit message | Last commit date |
| --- | --- | --- | --- | --- |
| Latest commit   History[107 Commits](/tobi/qmd/commits/main/) | | |
| [.beads](/tobi/qmd/tree/main/.beads ".beads") | | [.beads](/tobi/qmd/tree/main/.beads ".beads") |  |  |
| [src](/tobi/qmd/tree/main/src "src") | | [src](/tobi/qmd/tree/main/src "src") |  |  |
| [test](/tobi/qmd/tree/main/test "test") | | [test](/tobi/qmd/tree/main/test "test") |  |  |
| [.gitattributes](/tobi/qmd/blob/main/.gitattributes ".gitattributes") | | [.gitattributes](/tobi/qmd/blob/main/.gitattributes ".gitattributes") |  |  |
| [.gitignore](/tobi/qmd/blob/main/.gitignore ".gitignore") | | [.gitignore](/tobi/qmd/blob/main/.gitignore ".gitignore") |  |  |
| [CLAUDE.md](/tobi/qmd/blob/main/CLAUDE.md "CLAUDE.md") | | [CLAUDE.md](/tobi/qmd/blob/main/CLAUDE.md "CLAUDE.md") |  |  |
| [README.md](/tobi/qmd/blob/main/README.md "README.md") | | [README.md](/tobi/qmd/blob/main/README.md "README.md") |  |  |
| [bun.lock](/tobi/qmd/blob/main/bun.lock "bun.lock") | | [bun.lock](/tobi/qmd/blob/main/bun.lock "bun.lock") |  |  |
| [example-index.yml](/tobi/qmd/blob/main/example-index.yml "example-index.yml") | | [example-index.yml](/tobi/qmd/blob/main/example-index.yml "example-index.yml") |  |  |
| [flake.nix](/tobi/qmd/blob/main/flake.nix "flake.nix") | | [flake.nix](/tobi/qmd/blob/main/flake.nix "flake.nix") |  |  |
| [migrate-schema.ts](/tobi/qmd/blob/main/migrate-schema.ts "migrate-schema.ts") | | [migrate-schema.ts](/tobi/qmd/blob/main/migrate-schema.ts "migrate-schema.ts") |  |  |
| [package.json](/tobi/qmd/blob/main/package.json "package.json") | | [package.json](/tobi/qmd/blob/main/package.json "package.json") |  |  |
| [qmd](/tobi/qmd/blob/main/qmd "qmd") | | [qmd](/tobi/qmd/blob/main/qmd "qmd") |  |  |
| [tsconfig.json](/tobi/qmd/blob/main/tsconfig.json "tsconfig.json") | | [tsconfig.json](/tobi/qmd/blob/main/tsconfig.json "tsconfig.json") |  |  |
| View all files | | |

## Repository files navigation

# QMD - Quick Markdown Search

An on-device search engine for everything you need to remember. Index your markdown notes, meeting transcripts, documentation, and knowledge bases. Search with keywords or natural language. Ideal for your agentic flows.

QMD combines BM25 full-text search, vector semantic search, and LLM re-ranking—all running locally via node-llama-cpp with GGUF models.

## Quick Start

```
# Install globally
bun install -g https://github.com/tobi/qmd

# Create collections for your notes, docs, and meeting transcripts
qmd collection add ~/notes --name notes
qmd collection add ~/Documents/meetings --name meetings
qmd collection add ~/work/docs --name docs

# Add context to help with search results
qmd context add qmd://notes "Personal notes and ideas"
qmd context add qmd://meetings "Meeting transcripts and notes"
qmd context add qmd://docs "Work documentation"

# Generate embeddings for semantic search
qmd embed

# Search across everything
qmd search "project timeline"           # Fast keyword search
qmd vsearch "how to deploy"             # Semantic search
qmd query "quarterly planning process"  # Hybrid + reranking (best quality)

# Get a specific document
qmd get "meetings/2024-01-15.md"

# Get a document by docid (shown in search results)
qmd get "#abc123"

# Get multiple documents by glob pattern
qmd multi-get "journals/2025-05*.md"

# Search within a specific collection
qmd search "API" -c notes

# Export all matches for an agent
qmd search "API" --all --files --min-score 0.3
```

### Using with AI Agents

QMD's `--json` and `--files` output formats are designed for agentic workflows:

```
# Get structured results for an LLM
qmd search "authentication" --json -n 10

# List all relevant files above a threshold
qmd query "error handling" --all --files --min-score 0.4

# Retrieve full document content
qmd get "docs/api-reference.md" --full
```

### MCP Server

Although the tool works perfectly fine when you just tell your agent to use it on the command line, it also exposes an MCP (Model Context Protocol) server for tighter integration.

**Tools exposed:**

* `qmd_search` - Fast BM25 keyword search (supports collection filter)
* `qmd_vsearch` - Semantic vector search (supports collection filter)
* `qmd_query` - Hybrid search with reranking (supports collection filter)
* `qmd_get` - Retrieve document by path or docid (with fuzzy matching suggestions)
* `qmd_multi_get` - Retrieve multiple documents by glob pattern, list, or docids
* `qmd_status` - Index health and collection info

**Claude Desktop configuration** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```
{
  "mcpServers": {
    "qmd": {
      "command": "qmd",
      "args": ["mcp"]
    }
  }
}
```

**Claude Code configuration** (`~/.claude/settings.json`):

```
{
  "mcpServers": {
    "qmd": {
      "command": "qmd",
      "args": ["mcp"]
    }
  }
}
```

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         QMD Hybrid Search Pipeline                          │
└─────────────────────────────────────────────────────────────────────────────┘

                              ┌─────────────────┐
                              │   User Query    │
                              └────────┬────────┘
                                       │
                        ┌──────────────┴──────────────┐
                        ▼                             ▼
               ┌────────────────┐            ┌────────────────┐
               │ Query Expansion│            │  Original Query│
               │   (Qwen3-0.6B) │            │   (×2 weight)  │
               └───────┬────────┘            └───────┬────────┘
                       │                             │
                       │ 2 alternative queries       │
                       └──────────────┬──────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              ▼                       ▼                       ▼
     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
     │ Original Query  │     │ Expanded Query 1│     │ Expanded Query 2│
     └────────┬────────┘     └────────┬────────┘     └────────┬────────┘
              │                       │                       │
      ┌───────┴───────┐       ┌───────┴───────┐       ┌───────┴───────┐
      ▼               ▼       ▼               ▼       ▼               ▼
  ┌───────┐       ┌───────┐ ┌───────┐     ┌───────┐ ┌───────┐     ┌───────┐
  │ BM25  │       │Vector │ │ BM25  │     │Vector │ │ BM25  │     │Vector │
  │(FTS5) │       │Search │ │(FTS5) │     │Search │ │(FTS5) │     │Search │
  └───┬───┘       └───┬───┘ └───┬───┘     └───┬───┘ └───┬───┘     └───┬───┘
      │               │         │             │         │             │
      └───────┬───────┘         └──────┬──────┘         └──────┬──────┘
              │                        │                       │
              └────────────────────────┼───────────────────────┘
                                       │
                                       ▼
                          ┌───────────────────────┐
                          │   RRF Fusion + Bonus  │
                          │  Original query: ×2   │
                          │  Top-rank bonus: +0.05│
                          │     Top 30 Kept       │
                          └───────────┬───────────┘
                                      │
                                      ▼
                          ┌───────────────────────┐
                          │    LLM Re-ranking     │
                          │  (qwen3-reranker)     │
                          │  Yes/No + logprobs    │
                          └───────────┬───────────┘
                                      │
                                      ▼
                          ┌───────────────────────┐
                          │  Position-Aware Blend │
                          │  Top 1-3:  75% RRF    │
                          │  Top 4-10: 60% RRF    │
                          │  Top 11+:  40% RRF    │
                          └───────────────────────┘
```

## Score Normalization & Fusion

### Search Backends

| Backend | Raw Score | Conversion | Range |
| --- | --- | --- | --- |
| **FTS (BM25)** | SQLite FTS5 BM25 | `Math.abs(score)` | 0 to ~25+ |
| **Vector** | Cosine distance | `1 / (1 + distance)` | 0.0 to 1.0 |
| **Reranker** | LLM 0-10 rating | `score / 10` | 0.0 to 1.0 |

### Fusion Strategy

The `query` command uses **Reciprocal Rank Fusion (RRF)** with position-aware blending:

1. **Query Expansion**: Original query (×2 for weighting) + 1 LLM variation
2. **Parallel Retrieval**: Each query searches both FTS and vector indexes
3. **RRF Fusion**: Combine all result lists using `score = Σ(1/(k+rank+1))` where k=60
4. **Top-Rank Bonus**: Documents ranking #1 in any list get +0.05, #2-3 get +0.02
5. **Top-K Selection**: Take top 30 candidates for reranking
6. **Re-ranking**: LLM scores each document (yes/no with logprobs confidence)
7. **Position-Aware Blending**:
   * RRF rank 1-3: 75% retrieval, 25% reranker (preserves exact matches)
   * RRF rank 4-10: 60% retrieval, 40% reranker
   * RRF rank 11+: 40% retrieval, 60% reranker (trust reranker more)

**Why this approach**: Pure RRF can dilute exact matches when expanded queries don't match. The top-rank bonus preserves documents that score #1 for the original query. Position-aware blending prevents the reranker from destroying high-confidence retrieval results.

### Score Interpretation

| Score | Meaning |
| --- | --- |
| 0.8 - 1.0 | Highly relevant |
| 0.5 - 0.8 | Moderately relevant |
| 0.2 - 0.5 | Somewhat relevant |
| 0.0 - 0.2 | Low relevance |

## Requirements

### System Requirements

* **Bun** >= 1.0.0
* **macOS**: Homebrew SQLite (for extension support)

  ```
  brew install sqlite
  ```

### GGUF Models (via node-llama-cpp)

QMD uses three local GGUF models (auto-downloaded on first use):

| Model | Purpose | Size |
| --- | --- | --- |
| `embeddinggemma-300M-Q8_0` | Vector embeddings | ~300MB |
| `qwen3-reranker-0.6b-q8_0` | Re-ranking | ~640MB |
| `Qwen3-0.6B-Q8_0` | Query expansion | ~640MB |

Models are downloaded from HuggingFace and cached in `~/.cache/qmd/models/`.

## Installation

```
bun install
```

## Usage

### Collection Management

```
# Create a collection from current directory
qmd collection add . --name myproject

# Create a collection with explicit path and custom glob mask
qmd collection add ~/Documents/notes --name notes --mask "**/*.md"

# List all collections
qmd collection list

# Remove a collection
qmd collection remove myproject

# Rename a collection
qmd collection rename myproject my-project

# List files in a collection
qmd ls notes
qmd ls notes/subfolder
```

### Generate Vector Embeddings

```
# Embed all indexed documents (800 tokens/chunk, 15% overlap)
qmd embed

# Force re-embed everything
qmd embed -f
```

### Context Management

Context adds descriptive metadata to collections and paths, helping search understand your content.

```
# Add context to a collection (using qmd:// virtual paths)
qmd context add qmd://notes "Personal notes and ideas"
qmd context add qmd://docs/api "API documentation"

# Add context from within a collection directory
cd ~/notes && qmd context add "Personal notes and ideas"
cd ~/notes/work && qmd context add "Work-related notes"

# Add global context (applies to all collections)
qmd context add / "Knowledge base for my projects"

# List all contexts
qmd context list

# Remove context
qmd context rm qmd://notes/old
```

### Search Commands

```
┌──────────────────────────────────────────────────────────────────┐
│                        Search Modes                              │
├──────────┬───────────────────────────────────────────────────────┤
│ search   │ BM25 full-text search only                           │
│ vsearch  │ Vector semantic search only                          │
│ query    │ Hybrid: FTS + Vector + Query Expansion + Re-ranking  │
└──────────┴───────────────────────────────────────────────────────┘
```

```
# Full-text search (fast, keyword-based)
qmd search "authentication flow"

# Vector search (semantic similarity)
qmd vsearch "how to login"

# Hybrid search with re-ranking (best quality)
qmd query "user authentication"
```

### Options

```
# Search options
-n <num>           # Number of results (default: 5, or 20 for --files/--json)
-c, --collection   # Restrict search to a specific collection
--all              # Return all matches (use with --min-score to filter)
--min-score <num>  # Minimum score threshold (default: 0)
--full             # Show full document content
--line-numbers     # Add line numbers to output
--index <name>     # Use named index

# Output formats (for search and multi-get)
--files            # Output: docid,score,filepath,context
--json             # JSON output with snippets
--csv              # CSV output
--md               # Markdown output
--xml              # XML output

# Get options
qmd get <file>[:line]  # Get document, optionally starting at line
-l <num>               # Maximum lines to return
--from <num>           # Start from line number

# Multi-get options
-l <num>           # Maximum lines per file
--max-bytes <num>  # Skip files larger than N bytes (default: 10KB)
```

### Output Format

Default output is colorized CLI format (respects `NO_COLOR` env):

```
docs/guide.md:42 #a1b2c3
Title: Software Craftsmanship
Context: Work documentation
Score: 93%

This section covers the **craftsmanship** of building
quality software with attention to detail.
See also: engineering principles

notes/meeting.md:15 #d4e5f6
Title: Q4 Planning
Context: Personal notes and ideas
Score: 67%

Discussion about code quality and craftsmanship
in the development process.
```

* **Path**: Collection-relative path (e.g., `docs/guide.md`)
* **Docid**: Short hash identifier (e.g., `#a1b2c3`) - use with `qmd get #a1b2c3`
* **Title**: Extracted from document (first heading or filename)
* **Context**: Path context if configured via `qmd context add`
* **Score**: Color-coded (green 

[... truncated ...]