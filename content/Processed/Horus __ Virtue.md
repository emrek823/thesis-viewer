---
granola_id: e8c30eee-2f8a-4f41-a65f-a1f4ff4c6ba1
title: "Horus <> Virtue"
type: note
created: 2025-12-08T15:31:48.711Z
updated: 2025-12-09T21:45:29.961Z
attendees:
  - ishan@horushealth.ai
  - akhil@horushealth.ai
  - sd@virtuevc.com
---
### Company Background and Technology Evolution

- Horus Health founded by co-founders with research backgrounds in large language models for chart review automation
	- Ishan’s research at Vanderbilt focused on using LLMs for extracting specific text pieces to improve efficiency
	- Co-founder published paper identifying $3 million in missed revenue from just two CPT codes (99466 and 99467)
	- Found 98% of billable encounters weren’t being billed for
- Akhil’s LinkedIn profile: https://linkedin.com/in/akhil-peddikuppa
- Major technology improvements since 2021-2022:
	- Larger context windows enable retrospective medical history analysis with huge amounts of patient data
	- Agent workflows and orchestration capabilities now available
		- Orchestrator agent with separate specialized agents for code review
		- Consensus-based reasoning mechanisms running agents in parallel
		- Specialized helpers for specific compliance use cases
	- Can now reference federal regulations, state regulations, and payer policies through separate search agents

### Product Strategy and Lessons Learned

- Initial focus on audit space and compliance verification shifted upstream
	- Pre-bill and post-bill analysis - furthest upstream provides best value
	- Less downstream work required when errors caught early
	- Providers want end-to-end RCM process with fewer data silos
- Performance metrics and testing:
	- 94-95% accuracy in identifying missed codes using Mimic 3 dataset
	- Specific conditions missed by existing systems (3M, Iodine) due to rule-based limitations
	- 200+ progress notes and 230+ notes analyzed - many can’t be processed by LLMs alone
	- Focus on reducing false positives while maintaining high accuracy
	- AUROC curve methodology for measuring performance
- Product positioning as computational simulation of CDI team workflow
	- Human-in-the-loop for code acceptance/rejection
	- Consensus reasoning framework like expert group chat for code validation

### Current Deployments and Integration

- University of Florida Health pilot (started 2-3 weeks ago):
	- Deployed copilot tool - “Perplexity for healthcare regulations and payer policies”
	- Four users: Director of compliance, billing compliance team, chief compliance officer
	- Replaced 2-3 hour manual searches through thousand-page PDFs
	- Significant improvements in search times per query
	- UF loses $25 million annually on improper CDI processes
	- Successfully completed IT security review process
- Integration requirements:
	- Current UF pilot: web-based access, no integration needed
	- Full CDI implementation: Standard FHIR API or SFTP integration
	- Works with Epic, Meditech, Oracle Health EHRs
- 18-hospital Midwest health system in demo phase
	- Moving toward Meditech, likely FHIR API implementation
	- Revenue improvement analysis planned

### Expansion Strategy and Funding

- Go-to-market through distribution partnerships to avoid long sales cycles:
	- E4 Health: works with 400+ hospitals, partnership established
	- Imagine Healthcare Solutions: BPO outsourcing CDI functions
	- PYA consulting firm partnership
	- Active discussions with Metaverse Solutions (former SmartDx partner)
- Team structure:
	- Four-person team currently distributed
	- Plans to relocate to New York City post-funding
	- Mix of healthcare/LLM expertise and tech/finance backgrounds
- Fundraising: $750K pre-seed round, targeting Q1 completion, seeking ~10% dilution

Chat with meeting transcript: https://notes.granola.ai/t/6f43105d-bb44-4e38-976e-b6479a5c5c8e
