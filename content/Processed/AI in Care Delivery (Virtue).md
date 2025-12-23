---
granola_id: c141dd4e-77e9-4863-8b7a-7c0f444d5fc1
title: "AI in Care Delivery (Virtue)"
type: note
created: 2025-12-16T16:15:13.727Z
updated: 2025-12-17T13:30:47.834Z
attendees:
  - Sean Doolan <sd@virtuevc.com>
  - Nimish Parikh
---
### AI in Care Delivery - Key Layers and Technologies

- Four-layer AI stack emerging in healthcare delivery:
	- Continuous telemetry data collection from patients
	- AI outreach layer (companies debating SMS vs voice modality)
	- Care pathways with visual logic builders - Memora offers this capability
	- Virtual consult layer with AI triage (Doctronic operates at this level)
- EMR integration complexity: Major debate on how much AI-patient interaction data to dump into EMR systems
	- Requires sophisticated AI guardrails at pathway layer
	- Population health companies actively shopping for these three layers beyond their existing human consultations
- Care pathway ontologies becoming critical:
	- Interior’s main value-add: building ontology that converts payer policy PDFs into deterministic finite automaton
	- State-based workflows: prior auth pending → prior auth completed → denial (yes/no)
	- LLMs reasoning within predetermined state transitions rather than open-ended responses
	- Different accuracy requirements per use case: autonomous DRG coding vs Smart DX auditor positioning

### Agentic Products vs Workers Business Model Distinction

- Agentic Products (customer-facing UX):
	- Tennr’s Kanban chart interface: patients appear left, float right as AI agents process them
	- Staff must be trained on the AI-powered interface
	- Customer directly interacts with and sees the AI workflow
	- Visual management of patient progression through care stages
- Agentic Workers (behind-the-scenes automation):
	- Trovo model: customer never sees their UX, pure BPO approach
	- Human-AI hybrid combo for prior auth processing
	- Trovo gaining traction with Heart and Vascular (cardiology company)
	- Valerie fits this worker model vs Tennr’s product approach
- Risk of hidden human involvement: Early Suki had “AI” that was actually humans in India doing the work
- Care manager automation particularly attractive for VBC businesses with thin margins

### EMR Transition “Switch Ladder” User Experience

- Clear satisfaction hierarchy when switching EMRs:
- Switch direction determines user reaction:
	- Moving up ladder: users thrilled with improvement
	- Moving down ladder: users complain about increased clicks, worse UX
- Real deployment examples:
	- Two companies deploying ECW
	- Epic/Athena users: “ECW is so click-heavy, terrible”
	- NextGen/Greenway users: “ECW is amazing improvement”
- Economics vs UX trade-off: Companies choose ECW over Athena despite knowing Athena is better product due to massive pricing differences

### Claims Data and Analytics Platform Landscape

- Tuva: Data engineer favorite
	- Data engineers consistently prefer Tuva over alternatives
	- Appeals to technical teams who want control and customization
	- Data engineers often claim “I could build this myself” about competitors
- Ursa: Startup-friendly data engineering as a service
	- Better fit for companies without dedicated data engineering resources
	- More turnkey approach vs Tuva’s flexibility
- Accorded: Actuary-centric platform
	- Built specifically to be actuary-friendly
	- Key insight: allows actuaries to bypass IT department queues
	- Eliminates traditional bottleneck of waiting for IT to spin up analytics
- Orbital: Expanding surface area
	- Getting multiple plays with portfolio companies
	- Broadened product range significantly
	- Acquired actuarial firms to strengthen capabilities
- Zeus: Unstructured EMR data focus
	- Specializes in organizing documents pre-visit
	- Popular with companies for document management
	- Getting frequent pitches in this space
- Predoc: Curated data layer for oncology
	- Record review for oncologists receiving complex data streams
	- Someone must curate and explain data to oncologists
	- AI should handle this curation layer logically
- Century Health: Price point winner
	- Companies liking the pricing despite potential investment concerns
	- Registry space may have challenges but operational appeal remains

### Data Monetization Strategy Shift

- Traditional data broker era ending:
	- Veracyte-style data brokerage model disappearing
	- Need new approaches to data access and monetization
- Focus on value to data originators: Must provide clear value proposition to data owners/originators for right to access and monetize their data
- Bundling/unbundling wave: Current market cycle creating new opportunities for data platform positioning
- Real-world evidence (RWE) flow challenges: Pharma tech vertical seeing significant changes in how data moves through ecosystem

Chat with meeting transcript: https://notes.granola.ai/t/6717978e-a2b5-40b7-9f73-c50923025fa5
