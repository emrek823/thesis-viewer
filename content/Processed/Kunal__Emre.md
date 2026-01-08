---
granola_id: 138b920b-31c8-4cb3-8db4-2f2d3084ecf3
title: "Kunal<>Emre"
type: note
created: 2025-10-24T15:59:51.686Z
updated: 2025-10-24T16:39:00.132Z
attendees:
  - kunal.bhat@affinity.co
  - sd@virtuevc.com
---
### Affinity Semantic Search & LinkedIn Integration Demo

- Early POC for semantic network search capability
	- Search across user’s connections and team connections using natural language
	- Query example: “growth stage company in healthcare”
	- Plans to expand to 100M+ publicly available profiles beyond network
	- All fields searchable, not limited to specific data points
- LinkedIn integration workflow challenges
	- Manual CSV upload process (no API access from LinkedIn)
	- Creates new contacts or adds connection nodes to existing ones
	- Requires periodic manual updates (suggested quarterly)
	- Emre willing to do manually, team adoption uncertain
- Current LinkedIn → Affinity workflow pain points
	- Emre focuses on messaged connections as qualification filter
	- Only 5 of 100+ recent connections actually matter for pipeline
	- Values connection status tracking: sent → responded → email → scheduled
	- Content summaries less critical than engagement status

### Data Pipeline & File Processing Priorities

- Email body and file extraction limitations blocking automation
	- Cannot extract email content or attachments from Affinity
	- Current workaround: Zapier integration with inconsistent results
	- Primary file types: PDFs, Excel, PowerPoint, Google Drive, DocSend links
- Portfolio intelligence automation goals
	- Weekly portfolio summary from call notes, emails, attachments
	- “What happened to portfolio/new deals last week” queries
	- Affinity as single source of truth for all relationship data
	- Using Granola for call notes with planned integration by year-end
- Quick win: Automated file summaries
	- Kunal committed to building file summary extraction within one month
	- Extract summary of every uploaded document automatically

### Technical Roadmap & Integration Plans

- MCP server development by year-end
	- Highest customer conference request
	- Will enable ChatGPT integration with Affinity data
	- Emre’s target: ChatGPT + Affinity as core intelligence stack
- Competitive advantage in implementation speed
	- Virtue moves faster than larger firms (no AI committees/red tape)
	- Emre spending ~$200/month on AI tools experimentation
	- Currently using CoFounder for workflow automation gaps
- Three main workflow priorities for Emre
	- Portfolio review (backward and forward looking)
	- Deal pipeline analysis
	- Pitch deck intelligence

### Next Steps

- Emre to provide detailed feedback on four main workflow requirements
- Kunal to build file summary extraction feature
- Affinity to continue MCP server development for year-end release
- Follow-up via email before next scheduled call

Chat with meeting transcript: https://notes.granola.ai/d/138b920b-31c8-4cb3-8db4-2f2d3084ecf3
