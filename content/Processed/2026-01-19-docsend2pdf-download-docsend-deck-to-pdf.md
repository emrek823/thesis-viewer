---
url: https://docsend2pdf.com/mcp-docs
title: "Docsend2pdf – Download Docsend deck to PDF"
clipped: 2026-01-19 09:55
source: browser-history
---

# Docsend2pdf – Download Docsend deck to PDF

> Source: [https://docsend2pdf.com/mcp-docs](https://docsend2pdf.com/mcp-docs)

# MCP Server Integration

Convert DocSend documents directly from any MCP-compatible application using our MCP server.

## Usage

Simply ask your AI assistant:

* `"Convert this DocSend to PDF: https://docsend.com/view/abc123"`
* `"Convert https://docsend.com/view/xyz789 (password: mypass)"`
* `"Save https://docsend.com/view/doc789 as report.pdf"`

## Setup

1. Install the [docsend2pdf-mcp](https://pypi.org/project/docsend2pdf-mcp/) package:

```
pip install docsend2pdf-mcp
```

2. Add to your MCP client's configuration:

**Claude Desktop (macOS):** `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Claude Desktop (Windows):** `%APPDATA%\Claude\claude_desktop_config.json`  
For other MCP clients, consult their documentation for config file location.

```
{
    "mcpServers": {
        "docsend2pdf": {
            "command": "python",
            "args": ["-m", "docsend2pdf_mcp"]
        }
    }
}
```

3. Restart your MCP client for changes to take effect.

[Back to Home](/)