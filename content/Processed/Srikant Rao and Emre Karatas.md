---
granola_id: 77cb014e-bd58-4a4c-a9ed-1db6836a00be
title: "Srikant Rao and Emre Karatas"
type: note
created: 2025-11-20T19:04:08.006Z
updated: 2025-11-21T14:56:20.037Z
attendees:
  - rao.shrikant@gmail.com
  - sd@virtuevc.com
---
### Srikant’s Background & New Role

- Recently joined new AI company as of last week
- Previously worked at Limon building AI solutions for healthcare
	- Explored one-off implementations to solve specific problems
	- Transitioned from custom builds to platform approach that could be used across multiple products
	- Left Limon for “more interesting opportunity”

### Chart Review & Audit Solutions at Limon

- Built chart reviews and audits for specialty cases as first product - described as “fairly easy” build
	- Got in early enough to leverage LLMs for tasks previously done manually
	- Low-stakes environment: if you get it wrong, consequences aren’t severe
	- High-volume problem focused on reducing false positives
- Core value proposition centered on data aggregation:
	- Reviewer typically collected data from 10+ different sources
	- Brought all data together in consolidated view
	- Human then made final call based on aggregated information
	- The data collection and consolidation was the primary value add
- Technical implementation approach:
	- Similar to Plaid’s early strategy of building interface to access bank accounts through crawling
	- Could offer simple endpoint: “call this API and get prior auth decision”
	- Actual prompt submission technically straightforward
	- Real complexity: 30-minute deep dive into each client’s data to determine exact information requirements
- Deterministic vs non-deterministic workflow design:
	- Built workflows knowing when processes would be deterministic vs high error rate
	- Designed systems accounting for where human intervention would be needed

### Prior Auth vs. Medical Coding Complexity Analysis

- Medical Coding characteristics:
	- Focus on RVU (Relative Value Unit) optimization - increasing revenue per patient
	- Requires differential diagnosis approach
	- Involves counter modeling to select correct DRG codes
	- Must provide supporting reasoning for DRG selection
	- Higher complexity due to diagnostic reasoning requirements
- Prior Auth characteristics:
	- Typically causes week-long patient care delays
	- More straightforward logic: have payer policies + patient chart → accept/deny decision
	- Still requires supporting reasoning for exceptions or denials
	- Theoretically easier than coding in isolated scenarios where data and rules are available
- Risk-adjusted performance considerations:
	- LLMs might achieve 90% accuracy on prior auth vs 50% on coding out of the box
	- Bar for acceptable performance varies based on downstream impact of errors
	- Human intervention requirements differ based on risk profile of each task

### Platform vs. Custom Implementation Strategy

- Universal reality: Every single customer required some custom component
- Custom implementation elements:
	- EHR integrations inherently custom - must “meet customers where they are”
	- Each integration requires individual development work
	- Workflow customization and deployment for specific client needs
	- Initial implementations often require writing and deploying custom code
- Platform standardization approach:
	- Once data starts flowing, enforce conformity to standardized data models
	- Audit processes vary by customer but become configuration-driven rather than custom-built
	- Everything becomes configuration within platform framework
	- Automated evaluation systems and testing workflows
	- Data warehouse capabilities with FDE (Feature Development Environment)
	- Ability to write necessary prompts and workflows for specific custom checklists
	- Automated testing capabilities for new implementations
- Feedback loop implementation:
	- Added feedback reception capability early in development
	- Critical for complex, first-time implementations
	- Essential when success metrics unclear (“we don’t know what good looks like”)
	- Enabled iterative improvement for challenging use cases

### Customer & Market Insights

- Customer technical sophistication:
	- Healthcare customers described as “quite tech backwards”
	- End users primarily doctors with limited technical expertise
	- Creates unique implementation and user experience challenges
- Implementation scaling challenges:
	- Common pitch: “do one-off integration to access clinical record, then build all workflows from there”
	- Theory sounds logical but breaks down if every additional workflow requires custom work
	- Success depends on ability to move workflows from custom to platform-configurable
	- Question remains whether this platformization is achievable at scale

Chat with meeting transcript: https://notes.granola.ai/t/a84f7921-7ea3-4a2f-870c-ca7b0e3a5904
