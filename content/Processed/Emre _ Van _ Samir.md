---
granola_id: 960d39c7-48bd-4872-8f9d-a137a2355d3e
title: "Emre / Van / Samir"
type: note
created: 2025-05-31T13:59:14.344Z
updated: 2025-10-13T17:57:16.669Z
attendees:
  - van.crocker@agonisthealth.com
  - samir.unni@fleethealth.com
---
### Key Initial Reactions

- Project described as “ambitious to the point of naivete”
- Reference to distributed models existed in the RFP
- Significant concerns about data centralization from payers
- Platform appears buildable but success depends on partner cooperation
- Past hour: payer contacts expressed skepticism about centralized repository

### Data Partner Dynamics & Concerns

- Tier 1 data partners:
	- Originate and hold rights but lack full control over their data
	- Express concerns about data movement, linking, and AI running without control
	- Limited amount of data available due to covered entity constraints
	- Extending data access would be “a bear but a useful bear” - more motivational than technical challenge
- Covered Entity Considerations:
	- Cigna example for fully insured lives (medical + pharmacy)
	- Data inheritable and linkable to pulled charts
	- Contractual ambiguity creates hesitation
	- Separation of pharmacy + medical creates complications when 1 payer doesn’t have complete data
	- Payers save money and time by reusing charts

### Proposed Architectural Approaches

- Physically Centralized & Logically Federated:
	- Multiple logical tenants within hub
	- Data partners get veto rights to approve studies
	- Can monitor actual usage
	- All steps audit tracked
	- Requires significant governance overhead
- Physical Federation (like Sentinel 2.0):
	- Control remains with data partners
	- Primary concerns:
		- Data residence location
		- Flow of analytical decisions
		- Unknown FDA staff/contractor access
		- Feels more like a marketplace

### Technical Considerations

- Re-identification process:
	- Could deploy tokens at sites
	- Tier 2 approach focusing on providers
	- Datavant data reliability crucial for payer-side totality
- Data quality concerns:
	- Komodo data quality and usefulness pre-chart pull
	- Granularity of PHI and de-identified data
	- Geographic and temporal considerations
- Signal criteria:
	- Potential to loosen initial criteria
	- Validate through chart pulls
	- FDA legal authority boundaries
	- Budget considerations more manageable

### Data Model Foundations

- Non-payer derived data assumptions:
	- DataVant model based on claims
	- Switches handle unadjudicated information
	- Provider-complete but not patient-complete
- Payer licensing variations:
	- Some license data as closed claims
	- Others don’t
	- Switches vary in open claims licensing
	- Creates known unknowns in data completeness

### Next Steps

- Evaluate FDA’s willingness to push legal authority
- Consider budget reallocation possibilities
- Address governance process design
- Explore provider-side deployment options
- Assess data partner engagement strategies

Chat with meeting transcript: https://notes.granola.ai/d/960d39c7-48bd-4872-8f9d-a137a2355d3e
