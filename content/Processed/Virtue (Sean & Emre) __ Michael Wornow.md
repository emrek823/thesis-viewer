---
granola_id: 3dba9228-70c5-4177-ac8e-c1a9dee06f98
title: "Virtue (Sean & Emre) <> Michael Wornow"
type: note
created: 2025-07-25T15:04:55.394Z
updated: 2025-08-06T19:03:31.328Z
attendees:
  - mwornow98@gmail.com
  - sd@virtuevc.com
---
### Michael Wornow’s Research Background & Interests

- Recently graduated in June with PhD in computer science from Stanford
	- Co-advised by Nigam Shah (chief data scientist at Stanford Hospital) and Chris Ray (machine learning)
	- Research focused on operational deployment of AI models into clinical workflows
- Two main research buckets focused on improving care outcomes more efficiently:
	- Clinical decision making improvements using foundation models on EHR data
		- Predicting patient outcomes like 30-day readmissions and disease diagnoses
	- Workflow optimization using vision language models
		- Automating digital tasks like Epic order placement
		- Processing finding and documentation of existing workflows
- Personal motivation stems from grandmother’s cancer journey
	- Inspired research on clinical trial patient matching
	- Particularly interested in oncology applications
	- Goal: “Building for people like her”
- Additional experience with Stanford Hospital’s applied data science team
	- Helped integrate AI into Stanford’s clinical workflows
	- Vendor screening, use case scoping, project ideation

### Data Strategy & Technical Approach

- Focused on acquiring cancer center data partnerships
	- Currently in negotiations with cancer centers for raw EHR data
	- Exploring partnerships with data aggregators like Atropos (has millions of patients)
	- Leaning on advisor Nigam Shah who has experience in this area
- Core technical approach: predicting patient medical futures
	- “Pass to future medical history” as the fundamental model capability
	- One general purpose model that can handle multiple downstream tasks
	- Aims to create foundation model that improves upon existing approaches
- Model training considerations:
	- EHR models relatively economical to train
		- EHRShot CLimbR model trained in about a week on A100s
		- Only 140M parameters - “very efficient”
	- Attempted scaling was data-bottlenecked
		- “Data is so sparse” and lacks sufficient tokens for larger models
	- Clinical text models require more resources

### Commercial Applications & Go-to-Market Strategy

- Numerous potential applications across healthcare value chain:
	- Preclinical and drug discovery applications
		- Target discovery beyond genome-wide association studies
		- Multimodal data integration (epigenomics, imaging, biobank data)
	- Clinical trial optimization
		- Indication expansion opportunities
		- Patient enrollment (finding fast progressors)
		- Trial stratification and adaptive designs
	- Provider-focused clinical decision support
		- Broader applications like cardiotoxicity monitoring for all cancer patients
- Early monetization strategy considerations:
	- Pharma companies as initial revenue source
		- Willing to provide data, compute resources, and 7-figure contracts
		- Can drive distribution through relationships with cancer centers
	- Alternative “give-to-get” model
		- Provide value to health systems for data access
		- Monetize data/insights with pharma partners

### Next Steps

- Michael focusing on data negotiations and partnerships in next couple weeks
	- Seeking clarity on data agreements before “full send” commitment
	- Looking for innovative players in the space, especially in oncology
- Emre and Sean to:
	- Make introductions to relevant contacts
	- Continue discussions via text (with Sean included)
	- Explore potential investment opportunities once data partnerships clarify
	- Meet in person when Sean is next at West

Chat with meeting transcript: https://notes.granola.ai/d/3dba9228-70c5-4177-ac8e-c1a9dee06f98
