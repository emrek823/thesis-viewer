---
granola_id: 8407eaf4-9aea-4bf9-a36b-4e3e8d35bb89
title: "Kaiser "
type: note
created: 2025-08-05T13:35:16.096Z
updated: 2025-09-15T14:01:59.912Z
attendees: []
---
### Kaiser Pilot & Enterprise Rollout

- Pilot now going full enterprise at Kaiser Northern California
	- Moving from single clinic to 8 clinics after first month
	- All contracts are cost plus on EBITDA (not gross margin)
	- Already EBITDA positive on estimated couple million in sales
	- $100k ARR per clinic annually to start
	- Coming out of gate with $1M+ revenue from first feature set alone
- New CEO started yesterday, currently getting her up to speed
- Working on next build with highly differentiated process
- Filing new patent currently under review

### Data Infrastructure & Competitive Analysis

- Current evaluation process for data partners includes:
	- Core capability assessment
	- Data types they support
	- Privacy technique architecture
	- Digital twin support
	- Deployment model options
	- Zero trust enclave architecture
	- Customer managed VPC option (critical requirement)
	- Compliance attestations
	- Platform differentiators
- Companies under review:
	- BeeKeeper
	- Medisyn https://medisyn.ai
	- MDClone (concern: no TEE enclave, lacks zero trust)
	- K2View https://k2view.com
	- Synthea (open source option)
	- Standard Model Bio https://standardmodel.bio
- Kevin from Standard Model Bio to provide additional materials for evaluation
- Jay (internal data specialist) joining Monday discussion - described as “Graham Walker equivalent” tech expert

### Data Strategy & Monetization Model

- Dataset overview:
	- 15+ million patients with in-depth files (Northern California, 28 years of data)
	- Multi-modal datasets: structured/unstructured imaging, pathology, claims, demographics, SDOH, individual pharmacy data, compliance, biobank data
	- “One of the most rich datasets I have ever seen”
	- Current problem: data “sits there just eroding in value”
- Planned structure as non-profit hub and spoke model:
	- Data Assurance Engine
		- Create validated models for customers to validate their datasets
		- Benchmarking model addressing lack of US standardization for algorithms/data models
		- Focus on SLM (small language models) vs LLM approach
		- Use individualized capabilities around clinical modalities
		- Target AUROC between 0.7-0.8 (not 80%+ overfitting that many companies pursue)
	- Data Science Institute
		- Sandbox for best-in-class researchers to develop models from scratch
		- Novel use case discovery beyond customer/pharma applications
		- Controlled setting for SLM/LLM experimentation
- Deployment requirements: On-premises only, data never leaves system
- Privacy approach: Vector-based numerical coding through synthesizer vs tokenized data (protects against patient re-identification)

### Commercialization & Partnership Model

- Kaiser retains all model weights from internal projects (like Wrapt)
- External partnerships: Equal licensing rights for Kaiser to build library of models
- Revenue model: Partners get full commercialization rights, Kaiser receives:
	- One-time development fee
	- Future royalties on commercialization
	- Authorship and reference capabilities
- Goal: Create “Alexandria library of scrolls for clinical research and model development”
- Example framework: MD Anderson cardiotoxicity model developed with partner like Thyme Care
	- Thyme Care gets exclusive commercialization rights
	- Kaiser gets royalty stream
	- Model becomes referenceable in library for future oncology companies
- Philosophy: “Moving clinical medicine forward” vs pure profit maximization
- Standard Model Bio alignment: Silent partner approach, focus on pharma contracts for revenue vs model ownership

### Next Steps

- Kevin (Standard Model Bio) to send additional materials to frame Monday conversation
- Monday meeting scheduled with Jay https://linkedin.com/in/jaewonjoh for technical deep dive
- Continue RFP evaluation process across identified vendors

Chat with meeting transcript: https://notes.granola.ai/d/8407eaf4-9aea-4bf9-a36b-4e3e8d35bb89
