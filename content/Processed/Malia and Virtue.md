---
granola_id: 6778c8f5-1a0d-4e9e-bd61-762070c4128a
title: "Malia and Virtue"
type: note
created: 2025-08-19T16:32:42.654Z
updated: 2025-08-21T15:08:49.445Z
attendees:
  - sd@virtuevc.com
  - mbsaad@mdanderson.org
---
### Current Collaboration with Standard Model Bio

- Standard Model Bio (SMB) reached out to MD Anderson mid-last year through Mbsaad’s supervisor
- First collaboration: tested CT foundation modeling on published paper
	- Used Lancet Digital Health paper: https://thelancet.com/journals/landig/article/PIIS2589-7500(23)00082-1/fulltext
	- SMB improved the signal from already published results
- Three active projects now in progress:
	- Cardiotoxicity prediction - MD Anderson cohort with 2,000 patients
		- Predicting early cardiotoxicity from radiation therapy using routinely available EKG data
		- Current standard requires expensive cardiac imaging to predict MACE (Major Adverse Cardiovascular Events)
		- SMB provided first model but data curation issues on MD Anderson side need correction
	- Extended Lancet Digital Health study - patient selection for immunotherapy
		- Building on previous work that showed 5% improvement with Kevin’s model
		- Adding genomic mutation profiles (PD-L1, EGFR, KRAS)
		- Determining which patients get immunotherapy only vs. chemotherapy plus immunotherapy
		- Waiting for MGH data before starting modeling
	- Next events prediction - using SMB’s ACL conference submission
		- Testing their model on clinical cohorts for latest publication: https://scholar.google.com/citations?citation_for_view=vH4eOvwAAAAJ:R3hNpaxXUhUC&hl=en&sortby=pubdate&user=vH4eOvwAAAAJ&view_op=view_citation
		- Predicting outcomes like brain metastasis or adverse events for stage IV patients
		- Different endpoint than SMB’s original model design

### Technical Implementation and Challenges

- Model deployment approach: Zero-shot learning initially, fine-tuning planned
	- SMB provides checkpoints and training parameters
	- MD Anderson extracts embeddings for feature extraction
	- Downstream analysis includes: progression-free survival, overall survival, MACE prediction
	- Correlation analysis between imaging and genomics data
- Data curation bottlenecks: Major challenge on MD Anderson side
	- Clinical team annotations sometimes contain errors (negative date values)
	- 400 samples from 2,000 patients showed counterintuitive results initially
	- High-risk patients appeared to have better outcomes due to cardioprotective procedures
- Performance expectations: 5% improvement seen as basic model performance
	- Kevin indicated this was their most basic model version
	- Fine-tuning expected to achieve potentially 10% improvement over zero-shot approach

### Strategic Context and Partnership Dynamics

- MD Anderson’s foundation model motivation:
	- Academic publishing advantage - foundation model papers can reach Nature-level journals
	- 50% of physicians see potential despite “black box” concerns
	- Demonstrating AI can reach physician-level performance without replacement
- Why Standard Model Bio stands out among collaboration options:
	- Very proactive and responsive communication
	- Other academic labs (USC team and unnamed university) less open to sharing models
	- Kevin’s team provides regular updates without prompting
	- Data sharing restrictions: MD Anderson cannot share patient data but receives everything from SMB
- Clinical integration pathway: Moving from NCCN guideline flashing toward algorithmic clinical decision support over 3-5 years

Chat with meeting transcript: https://notes.granola.ai/d/6778c8f5-1a0d-4e9e-bd61-762070c4128a
