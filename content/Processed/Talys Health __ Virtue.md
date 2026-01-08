---
granola_id: b3ee8b17-07fa-41f9-9acf-4a807ae7a941
title: "Talys Health <> Virtue"
type: note
created: 2025-10-07T13:01:38.588Z
updated: 2025-10-07T14:01:36.966Z
attendees:
  - nick@talyshealth.com
  - bobby@talyshealth.com
  - sd@virtuevc.com
---
### Future Vision and Strategic Paths

- Future vision 5 years out - Two main paths identified
	- Path 1: Deeper supply chain automation using clinical engagement as enabler
		- Sourcing, negotiation, formulary management, RFP process using AI agents
		- Sophisticated “Zip-like” tool for healthcare supply chain
		- Full end-to-end workflow: ID opportunity → feasibility scoring → micro-engagements → implementation → monitoring
	- Path 2: Expand into quality, efficiency, policy compliance
		- Prescribing patterns, diagnosis targets
		- Different customer base (service line leads, department heads)
		- Would learn through supply chain champions first
- Additional opportunity: Engage med device suppliers to improve hospital sales intel
	- Clinical supply usage dataset currently untapped
	- Current alternatives are superficial GPO surveys and ECRI product testing
	- Strong interest from health systems to share data for insights

### Implementation and Technical Integration

- ServiceNow integration for implementation
	- Switch from one item to another: integrate with ServiceNow, provide work queue, update preference cards
	- Trial period management for new supplies
		- Temporarily add to preference cards
		- Monitor procedure usage
		- Follow up on clinician feedback
	- Monitor for recidivism - key differentiator
		- Track going off formulary after implementation
		- Notify supply chain team or automatically re-engage
- Integration approach - minimal complexity
	- Following Clarium model: SFTP flat file, map to schema
	- Data already being provided to other vendors - “add us to that SFTP”
	- Dramatically cuts implementation curve, avoids “integration hell hole”
	- Light integrations overall
	- PII and HIPAA data access requires SOC2 Type 2 certification

### Market Data and Addressable Spend

- AtlantiCare example ($150M total spend)
	- Starting with no PHI: supply utilization export without patient ID, cases, item master flat file, contracts from GPOs
	- Highly opinionated tiering and cohorting with team of 25-year industry experts
	- $10M value analysis goal this year
	- $3M conservative savings target identified in categories they haven’t worked yet
- Addressable spend calculation
	- Non-pharmacy supply spend (excludes purchased services and pharmacy)
	- Focus areas:
		- Clinically substitutable PPIs - hips, knees, spine, cardiac
		- Procedure-linked med surg - sutures, staplers, energy drapes, packs on preference cards
	- Exclusions: Capital/robotics (Mako), sole-source non-equivalent items
	- 40-55% of non-pharmacy supply spend is addressable
	- Substitutability criteria: multi-vendor options, clinical equivalents, contract term/tier/rebate effects

### Competitive Positioning and Fundraising Updates

- Market positioning vs incumbents
	- Kermit: 10 years in industry, scans bills, takes 38%, provides dashboard + consulting
	- Legacy players set in ways, product suites not built for orchestration capability
	- Clarium: sophisticated decision support with substitution, focused on resiliency
	- Risk share rates: 30-40% industry standard (Kermit 37%, up to 40% seen)
		- Even Trinity Health (multi-billion spend) negotiates down to ~30%
	- Competitive advantage: time to value acceleration (9-10 months typically → 1-2 months)
- Fundraising progress
	- FSV presentation Friday (formality with Flare)
	- Presenting to IC Tuesday next week
	- 5 investor calls last week
	- Talks with strategics - open to expanding round
		- Strategics typically write $1M+ checks for Series A
		- Interest in larger checks given short timeline to next round
		- Strategic partnership could accelerate timeline and provide more pilot data
- Clinician engagement wedge - core validation challenge
	- Initial indications positive: clinicians willing to change to save money if patient care not compromised
	- Missing pieces: comparative quality data, cost transparency
	- Tool provides organizational visibility into clinician engagement levels
	- Cultural variations: UCLA Health (“enough is enough”) vs Mayo Clinic (research-revenue focused, department-head driven)

Chat with meeting transcript: https://notes.granola.ai/d/b3ee8b17-07fa-41f9-9acf-4a807ae7a941
