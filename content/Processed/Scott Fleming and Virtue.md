---
granola_id: b1929cfa-95eb-4612-a124-2b8d94a987b4
title: "Scott Fleming and Virtue"
type: note
created: 2025-09-08T19:32:01.240Z
updated: 2025-09-15T14:01:59.907Z
attendees:
  - scott.fleming.phd@gmail.com
  - sd@virtuevc.com
---
### Scott’s Background & Current Role

- PhD graduate (co-advised by Nigel Shaw at Stanford Hospital and Emma Brunskill)
- First machine learning research hire at SmarterDx
- Based in Salt Lake City area (wife doing MBA at BYU)
- Recruited half of PhD cohort to SmarterDx: Gotham, Mahju, Connor Corbin
- Focused on improving clinical decision making with automation/efficiency emphasis
- Views pre-built product as wedge toward healthcare automation goal
	- Partnership with Access and Thoughtful makes this more achievable

### AI/ML Landscape Evolution & Future Considerations

- Major shift from 2 years ago with Karen Sigle moving Google→OpenAI, launching HealthBench
- GPT-4.1 to GPT-5 improvements significant for clinical tasks (90%→93% general, much higher for domain-specific)
- Gap closing between custom annotation/modeling and foundation models
	- Still get better performance on long-tail problems vs obvious GPT-5 prompts
	- But would be naive to ignore narrowing gap
- Post-train and give high quality outputs and still have 0 risk of PHI
	- Practice can reduce to near zero, but zero vs near-zero matters for PHI
	- Synthetic data could eliminate risk completely using GPT-5

### Operational & Technical Insights

- Annotation process transformation:
	- Previously required offshore/third-party vendor teams
	- Now: Scott can code annotation interface, sync with clinical SME same-day
	- Need ~3 annotators for few hundred annotations
	- Clear rubric for humans = clear rubric for LLMs
- Data engineering paradigm shift:
	- Used to need army of implementation/data engineering experts
	- Now: taking structured data and turning it unstructured (opposite direction)
	- Schema understanding automation potential with agentic workflows
	- Don’t need full mapping to LOINC/RxNorm codes - plain text sufficient
- Implementation timelines at SmarterDx:
	- Epic clients: retrospective assessment time ≈ going live time
	- Assessments run directly in app (no difference for clinical ops specialists)

### Market Opportunities & Trends

- Bespoke solutions now feasible due to:
	- Rapid annotation interface development
	- Automated data normalization capabilities
- Synthetic data market gap:
	- Current options: expensive hospital data vs low-fidelity synthetic
	- Opportunity for high-fidelity synthetic data for POCs
- Pharma space challenges:
	- Limited feedback loops with client data dumps
	- EMR data valuable but too messy to use effectively
	- Different RWD vendors with geographic density variations
- Peer contracting/management identified as AI solution gap (Sophia Guerrera/Bessemer insight)

Chat with meeting transcript: https://notes.granola.ai/d/b1929cfa-95eb-4612-a124-2b8d94a987b4
