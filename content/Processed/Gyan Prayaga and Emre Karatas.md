---
granola_id: 06bd63c7-f862-440d-b929-a56d716d14bb
title: "Gyan Prayaga and Emre Karatas"
type: note
created: 2025-10-09T15:00:54.611Z
updated: 2025-10-09T19:04:41.924Z
attendees:
  - reachgyan@gmail.com
---
### Gyan’s Background & Journey

- Previously at Datavent (first job out of college)
	- Data engineering team focused on scaling pipelines from gigabyte to terabyte
	- Learned legacy technical architecture issues from Liveramp-influenced systems
- Nearly 2 years at Integral as early employee
	- Joined when just co-founders in office
	- Built data systems using Databricks, handling similar scale to Datavent with smaller team
	- Left after promotion to senior role - wanted to maintain founding-edge qualities vs getting comfortable
- Physics degree from liberal arts college (not CS)
- Side project during COVID: spatial chat application with cocktail party effect using sound distance algorithm

### Current Pharmacovigilance Exploration

- Taking exploratory approach with friend after preliminary research on data enrichment ideas
- Completed pharmacovigilance course and interviewed case processing managers, literature reviewers
- Built system map of PV workflows focusing on lowest-level, least skilled processes
- Key workflow pain points identified:
	- Case management/processing - checking 4 criteria for validity
	- Narrative writing in Veeva Vault Safety - major bottleneck
		- Each pharma has different style requirements
		- Case processors memorize or use sticky notes for different formats
		- Not creative work, just repetitive formatting
	- Need for auditable chain showing AI vs human interventions

### Technical Approach & Demos

- On-prem air-gapped LLM reads datasets, generates data dictionary
- Upload data dictionary (PHI-free) to cloud service for synthetic data generation
- Built narrative writing demo:
	- Takes E2B XML from Argus
	- Parses and generates first narrative version
	- Tracks diffs between AI and human edits
	- Self-learning system to align with reviewer preferences
- Signal management downstream process - validated signals major C-suite concern

### Strategic Questions & Market Dynamics

- Questioning if PV improvements beyond “call center” optimization
- 95% of adverse events go unreported - disincentives exist for full reporting
- PV as cost center with engineered inefficiency for audit compliance
- Potential regulatory shift toward real-world evidence in signal management workflows
- Fork emerging between auditable AI reasoning mechanisms vs broader transformation

Chat with meeting transcript: https://notes.granola.ai/d/06bd63c7-f862-440d-b929-a56d716d14bb
