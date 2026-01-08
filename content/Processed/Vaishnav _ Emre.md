---
granola_id: 9eb47a51-fc99-4ec8-b606-7eb035ad457f
title: "Vaishnav / Emre"
type: note
created: 2025-09-09T14:00:26.919Z
updated: 2025-09-15T14:01:59.907Z
attendees:
  - vgarodia@stanford.edu
---
### Vaishnav’s Portfolio Monitoring Dashboard Demo

- Built comprehensive dashboard for tracking portfolio company performance
	- Auto-ingests quarterly reports from PDFs in any format
	- Extracts quantitative metrics (revenue, burn rate, runway)
	- Captures qualitative updates from all sources including Granola notes
	- Intelligence chat feature allows queries across entire portfolio
- Tested with other VCs who “loved it” and wanted immediate access
- Key differentiator: tracks performance over time vs. one-off Claude prompts
- Enables portfolio-level analysis (healthcare vs fintech performance comparison)

### Current VC Workflow Pain Points & Solutions

- Pre-call diligence currently takes 30 minutes per company (300 minutes for 10 calls)
- Existing tools too expensive/limited:
	- Affinity pricing targets mega funds
	- Omni just expensive Dropbox for financing docs
	- Docsend PDFs lose text processing capability
- RAG system challenges:
	- Claude native Google Drive search doesn’t work
	- Similarity scoring requires technical expertise
	- Need human-in-loop for quality validation
- Manual data ingestion from Tegus (20 PDFs daily), equity research reports

### Proposed Implementation Strategy

- Start with 3-5 portfolio companies for testing
- Required data sources:
	- Monthly investor updates
	- Granola call transcripts
	- Gmail correspondence
	- Google Drive documents
- Email-based agent system:
	- Multiple specialized inboxes (portfolio, diligence, sourcing)
	- Weekly summary emails for portfolio updates
	- Upload functionality via email
- Future enhancements:
	- Web activity monitoring (job postings, LinkedIn, news)
	- Market intelligence for portfolio company sectors
	- Tracking of passed opportunities for re-engagement

### Next Steps

- Emre: Send portfolio data by Wednesday (delayed due to conference)
- Emre: Check with Sean regarding NDA requirements
- Vaishnav: Create Loom demo of dashboard
- Vaishnav: Meet with Floodgate and other VCs for additional feedback
- Schedule weekly cadence for ongoing development
- Exchange phone numbers for quicker communication

Chat with meeting transcript: https://notes.granola.ai/d/9eb47a51-fc99-4ec8-b606-7eb035ad457f
