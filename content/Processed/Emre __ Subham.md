---
granola_id: cf84c8c9-bfd3-4d27-a0d8-3ff1e511a963
title: "Emre <> Subham"
type: note
created: 2025-11-19T13:59:32.284Z
updated: 2025-11-21T14:59:31.436Z
attendees:
  - subhampramanik@gmail.com
  - sd@virtuevc.com
---
### Background & Experience

- Subham moved to US 1 year ago from India after 3 years at Google
	- Infrastructure software engineering for 1.5 years
	- Product engineering in cloud space and developer tools
	- Left Google when GPT 3.5 launched to ride the AI wave
- Initial startup attempt: code modification/search with agentic systems
	- Failed due to high customer acquisition costs and lack of market fit
- Joined Mandolin as first engineer/hire
	- Built initial platform for benefits verification and prior authorization
	- Now leads insurance side engineering team
	- Handles integrations, prioritizations, RCM with insurance-specific workflows

### Technical Philosophy & Differentiation

- Day 0 thesis: never train own models until much later
	- World evolving faster than application layer can keep up
	- Focus on building better pipelines to find alpha opportunities
- No technical moat exists - things improve too rapidly
- Actual moats are:
	- Product experience and workflow understanding
	- Distribution and sales execution
	- Strong brand name in enterprise market
- Core competencies: workflows, integrations, AI agents for document parsing and phone calls
	- Not world-class at any individual component
	- Better to rely on existing tools and build solid integrated product

### Healthcare Implementation Complexity

- 1000+ different edge cases require handling in minute, different ways
- Medical Advantage vs commercial payers example:
	- Both technically commercial plans but follow different rule sets
	- Medicare LCD checks, NCD checks, payer-specific guidelines
	- Requires process planning and workflow mapping on whiteboard
- Work is same across providers, but flows are completely different
	- Must customize based on operational nature of each client
- Leadership discovery challenge:
	- Enterprise sales motion targets CFOs for organizational change
	- Leadership often doesn’t know their own company SOPs and processes
	- Discovery process of understanding operations takes significant time
	- Deep operational entanglement creates switching costs
	- Clients reduce staff 70-80% for automated functions

### AI Accuracy & Risk Assessment Framework

- Accuracy improvement process:
	- Start with simplest implementation (single prompt API call)
	- Focus on product completeness over optimization initially
	- Move to experiment-driven development with eval datasets
	- 15+ different accuracy improvement approaches tested iteratively
- Risk-based accuracy requirements vary significantly:
	- Benefits verification (BV): 70% accuracy acceptable
		- Mistake costs $100-1000 difference, insurance can absorb
		- Multiple correction opportunities in workflow
	- Prior authorization (PA): 90%+ accuracy required
		- Only 2 submission attempts allowed
		- Failed submission loses $10-15k potential revenue
		- High-stakes, single-chance scenario
- Vertical vs horizontal approach:
	- Infusion voice more complex than mental health voice
	- Pharmacy/patient requirements add complexity layers
	- Horizontal solutions remain difficult - better to build vertical first
- Process evaluation framework for investors:
	- Evaluation methodology and rigor
	- Sample size and benchmark datasets
	- Systematic approach to accuracy improvement
	- Risk assessment and acceptable accuracy thresholds

Chat with meeting transcript: https://notes.granola.ai/d/cf84c8c9-bfd3-4d27-a0d8-3ff1e511a963
