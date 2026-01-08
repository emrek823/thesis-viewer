---
granola_id: 055ef695-9602-4c03-9e27-17a278bccfb2
title: "Ruslan Nazarenko and Emre Karatas"
type: note
created: 2025-08-25T22:07:26.408Z
updated: 2025-09-03T14:18:01.933Z
attendees:
  - ross.nazarenko@gmail.com
---
### X Scale AI Background & Industry Data Problem

- Ross joined Scale AI as head of growth, overseeing supply function
- Company transitioned rapidly from generalist data (journalism) to specialized domains
	- Easy to judge: “Ask average Joe to write a story - tons of grammar mistakes”
	- Impossible to judge: Chemistry submissions without chemistry expertise
- Scaling challenge: Went from high school chemistry teacher in Egypt to Stanford postdoc in molecular biology within 6 months
	- No way to verify quality of specialized work
	- Quality dropped significantly
	- Led to Ross leaving Scale AI before acquisition discussions
- Core thesis: Industry is out of data
	- GPT-5 improvements minimal - no more generalization across domains
	- Previously math project improvements would boost physics, philosophy, law performance
	- Scale lost Google projects because Google shifted to synthetic data

### X Scale AI Product & Business Model

- Natural sciences focus, specifically health/medical data
- Two-pronged approach to synthetic data quality:
	- Pre-training: Programmatic workflows + human expert verification
	- Post-training: Combination of autograders + human experts for evaluation
- Human sourcing advantage: Knowledge graph of 7 million US doctors + PhDs
	- Don’t cast ad campaigns - target specific expertise upfront
- Revenue traction since January start:
	- Raised $1.65M pre-seed mid-February (pre-name, pre-revenue)
	- Approaching $5M in contracted revenue
	- Pilots with major therapeutic companies
	- Procurement processes with OpenAI, Google, xAI
	- Hospital partnerships (pro bono to build relationships)
	- FDA collaboration discussions underway

### HealthBench Criticism & Evaluation Framework

- Major concern: OpenAI using HealthBench to sell directly to hospitals
	- Breaks “gentleman’s agreement” - foundation labs shouldn’t bypass application layer
	- Led to Illinois governor involvement and FDA regulatory concerns
- HealthBench quality issues:
	- Claims 5,000 multi-turn conversations, but half are single-turn
	- Remaining conversations average only 2 turns
	- Synthetically generated rubrics with poor quality examples
- Multi-turn conversation failure demonstrated:
	- Single condition (female, 29, pregnant): 60% accuracy on medication safety
	- Two conditions (pregnant + kidney stones): 30% accuracy
	- Multi-turn collection of same info: 10% accuracy
- X Scale’s evaluation approach:
	- Built on Synthea open-source ontology
	- Generated patients with visual world memories and emotional profiles (27 emotions)
	- 18-turn conversations across 5 tasks and 10 medical conditions
	- Human-designed rubrics by Harvard Medical postdocs
	- Granular evaluation: 50-180 different parameters per subtask

### Next Steps

- Tampa General Hospital introduction for procurement evaluation services
- Potential design partnership for governance platform development
- San Francisco meetings after Labor Day

Chat with meeting transcript: https://notes.granola.ai/d/055ef695-9602-4c03-9e27-17a278bccfb2
