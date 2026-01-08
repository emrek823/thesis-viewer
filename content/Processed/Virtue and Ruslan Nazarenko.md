---
granola_id: e46b856c-0ccd-42ee-a902-bc898fad9d6f
title: "Virtue and Ruslan Nazarenko"
type: note
created: 2025-10-27T21:29:28.660Z
updated: 2025-10-27T22:02:55.289Z
attendees:
  - ross.nazarenko@gmail.com
  - sd@virtuevc.com
---
### Ross Nazarenko Background & Lumos Overview

- Former Scale AI leader overseeing all data and experts
	- Started with general data, moved to specialists
	- Within 6 months went from high school teachers to Stanford chemistry postdocs exclusively
	- Scale wasn’t built to deliver quality data for specialized domains
	- Kids out of college as delivery people couldn’t evaluate postdoc chemistry feedback
- Tried to solve internally at Scale - pitched company restructuring
	- Idea dismissed because OpenAI pays for scale of data, not quality
	- Industry running out of data on pre-training side
	- Post-training side reaching for Nobel Prize winners but not enough available
- Left Scale to start Lumos focusing on health and life sciences
	- Text to text, text to bio, and bio to bio applications
	- Company thesis: every big lab and startup moving toward synthetic data

### Lumos Product & Evaluation Approach

- Core offering: evaluations across entire healthcare AI domain plus life sciences adjacent areas
	- Unlike big labs that only measure overall safety, Lumos goes deep with 150 metrics for conversational tasks
	- Patient triage, second opinion, AI doctors, copilots
	- Safety broken down: treatment plan safety, medication safety, allergy reactions, medication contradictions
- Deep diagnostic capability for model failures
	- If agent fails medication recommendation: is it knowledge gap on newly approved drugs or failure to build complete clinical picture?
- Methodology combines human experts and AI judges
	- Review outputs with internal clinician team or outside experts
	- Mark down every mistake and map to AI judges
	- Deploy AI judges for evaluations
	- Run human alignment checks for accuracy
- Result: 10x more data for same dollar investment, faster delivery, better quality than competitors

### Customer Segments & Use Cases

- Three major buckets with different approaches:

#### Foundational Labs

- Focus: pure data story (human or synthetic)
- They build own reward functions and training pipelines
- Every project is massive and provides significant revenue

#### Application Layer Players

- Stage companies “have no idea what they’re doing” - need full training as a service
- Seed stage: releasing tool next week that optimizes instructions in simplified RL environment
- Bigger clients (pharma): full RL training as a service, responsible for actual performance improvements
- Target: become “boring SaaS business” with account creation, API access, $50K conversations/month

#### Specific Use Cases by Company Type

- Early stage companies: buy synthetic EHR data directly
- Bigger companies: start with pilot → GTM style evaluation (find angles where model excels for go-to-market)
- Therapeutics company example: quick pilot for free-form feedback → full Lumos evaluation with AI patients → conversations screened by biomedical experts → RL pipeline

### Strategic Vision & Funding

- Ambition: FDA certification pathway could create monopoly position
	- FDA approached Lumos (before shutdown) after 6-7 meetings, ~10 hours total
	- Need scalable solution to certify models/agents as safe and accurate (human experts too slow)
	- 12-16 month certification timeline
	- Result: Google, Microsoft, Bridge, Anthropic would all need Lumos evaluation for hospital deployment
- Competitive moat strengthens over time
	- More use cases → more edge cases → more research → higher judge accuracy
	- Each deployment includes human alignment, improving model like training process
- Funding history: $1.75M total
	- Pre-seed in February: $1.65M led by A4, joined by Dorm Fund, European fund, plus angels
	- Additional $100K from OpenAI person at $30M valuation
- Current funding status: started race but shut down due to large foundational lab project
	- Project escalating: one benchmark → two benchmarks → RL environment
	- Next funding depends on contract size - may need millions for expert hours (5,000 hours × $200 = $1M+ just for cash gap)

Chat with meeting transcript: https://notes.granola.ai/d/e46b856c-0ccd-42ee-a902-bc898fad9d6f
