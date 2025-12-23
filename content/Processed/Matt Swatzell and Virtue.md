---
granola_id: 7c7eb89c-50e0-4cf1-b7c8-754355bcd765
title: "Matt Swatzell and Virtue"
type: note
created: 2025-12-05T19:37:06.697Z
updated: 2025-12-12T19:56:49.259Z
attendees:
  - mswatzell@gmail.com
---
### Float Economics & Business Modeling

- Two-sided network requirements for healthcare payments
	- Need majority of payers and providers in one geography
	- Dealing with large payers and providers who have different cost structures
- Cost of capital analysis
	- Large payers: have balance sheet capacity, no cost of capital concerns
	- Large providers: money available before sending, negligible cost of capital
	- Provider cost of capital: basis points above risk-free rate essentially
- Float mechanics for payers vs providers
	- Payer perspective: lose float when paying faster, sits on their balance sheet in near term
	- Provider perspective: gain float benefit by receiving payments 45-60 days earlier
	- Float impact asymmetry: material loss for payers, modest gain for providers
- Business modeling reality check
	- Float not generating significant incremental revenue for providers
	- Primary value comes from waiver savings, not treasury float benefits
	- Float exists and provides some value, but business case doesn’t live or die on it
	- Critical insight: can’t build provider business case solely on float benefits
- Value justification framework
	- Must justify float loss to payers through offsetting admin savings
	- Admin savings need to more than compensate for float impact
	- Provider adoption driven by operational benefits, not float timing
- Claims automation and advance payment considerations
	- Some claims can be automated and paid in advance
	- Advance payment creates different float dynamics than standard timing

### Admin Savings Analysis - Primary Value Driver

- Tribridge financial transaction approach (first-order savings)
	- Focus on financial transactions without changing documentation workflows
	- Four key value levers identified through McKinsey work 4-5 years ago
- Provider call center savings
	- “Where’s my money?” calls cost $20 per call fully loaded
	- Not individually material but adds up across volume
- Medicare Advantage stars rating impact
	- Provider inquiry and dispute volumes directly affect stars ratings
	- Incremental star rating has significant financial impact for MA plans
	- Stars matter more than ever in current Medicare environment
	- Reducing inquiry volume helps achieve better ratings
- Prompt pay penalty reduction
	- Faster payments drive down prompt pay penalties
	- Particularly material for Blues plans
	- Direct financial benefit separate from operational efficiency
- Re-adjudication cost savings
	- Approximately 2 FTEs at Anthem/Elevance level for reprocessing
	- Not massive headcount but meaningful operational efficiency
	- Reduces manual batch job processing requirements
- Next-level clinical documentation opportunities (aspirational)
	- DRG validation and clinical documentation integrity
	- Point-of-care application of local and national coverage determinations
	- Pre-bill timing more feasible than pre-service (very aggressive)
	- Second/third pass reviews for secondary/tertiary coverage identification
	- Auto insurance and liability insurance coordination
	- Automatic identification of other primary liability sources
- Market access challenges for payment integrity startups
	- Payers increasingly protective of datasets over last 10 years
	- Hard industry to break into due to data requirements
	- Custom logic required for claims routing
	- Bar for incremental help gets higher over time
	- Specialty focus (behavioral health) lacks sufficient value density
- Organizational complexity in value capture
	- Different business units bear costs vs realize savings
	- Claims processing (COO/CTO domain) absorbs implementation costs
	- Call center savings (CEO domain) realizes operational benefits
	- Cross-departmental business case more challenging to build

### Claims Reconciliation & Bundling Mechanics

- ERA/EFT matching technical foundation
	- Claim ID or incident ID fields enable one-to-one reconciliation
	- Both files contain matching identifiers when done appropriately
	- Manual logic required for matching but data exists
- Bundle transaction complexity
	- Provider side: single claim submission
	- Payer side: parent record with multiple sub-bundle records
	- Sum discrepancies identify specific problem areas
	- Bundle complexity is where reconciliation value lies, not simpler transactions
- Tribridge proof of concept capabilities
	- Built system allowing claim creation and submission
	- Automated matching against 835 files showing discrepancies
	- Sample 835s available from payers and providers for testing
	- Live demo capability for reconciliation process
- Discrepancy identification precision
	- 4,000-row reconciliation narrowed to individual claim investigation
	- Example: 9 items at $25 billed vs 10 or 8 items at $25 paid
	- Can’t identify exact item but isolates problem to specific cost category
	- Massive operational efficiency improvement for providers
- Value proposition clarification and limitations
	- Reduces disputes from 10+ investigative calls to single targeted call
	- Identifies and isolates problems rather than automatically resolving them
	- Doesn’t eliminate all calls - disagreements still require resolution
	- Doesn’t change actual payment amounts flowing between parties
	- Triangulates exact problem location for faster resolution
- Additional reconciliation complexity areas
	- Post-payment adjustments in 835 file records
	- Adjustment records at end of payment batch
	- Challenge: linking adjustments to specific claims or line items
	- Manual review still required for identical-cost bundled items
	- System provides surgical precision on problem identification

### Payment Infrastructure & Broader Market Opportunities

- Current payment rails massive inefficiencies
	- All healthcare payments currently move over ACH
	- Wire transfer costs approximately $20 per transaction
	- RTP (Real-Time Payments) costs approximately $0.02 per transaction
	- Potential savings: $10-15 per transaction, especially for smaller providers
	- Many payments still processed via physical checks
- Instamed backend usage by major payers
	- Same banks often use Instamed infrastructure
	- Some cost reduction through shared infrastructure
	- Still moving over wire protocols with inherent inefficiencies
- Virtual card challenges and economics
	- Payers push virtual cards to capture interchange revenue sharing
	- Providers pay ~3% more to accept virtual card payments
	- Horrible solution for provider operations and cash flow
	- Economic misalignment: payer benefits, provider bears cost
- Real-Time Payments (RTP) advantages
	- Embed significantly more reconciliation data in payment itself
	- Helps provider reconciliation processes automatically
	- Reduces manual matching and investigation time
	- Better data flow enables more automated processing
- Business model complexity and organizational challenges
	- Multiple value levers create compelling but complex overall proposition
	- Direct admin savings in money transfer methods
	- Labor and operational cost reductions
	- Potential medical cost savings (longer-term)
	- Treasury-style float considerations
	- Organizational challenge: different departments bear costs vs realize savings
	- Claims processing teams absorb implementation and operational costs
	- Customer service and finance teams realize efficiency benefits
	- Cross-functional business case requires executive-level coordination
- Market sizing and opportunity scope
	- Massive untapped payment flow in healthcare
	- Fundamental inefficiencies at basic transaction level
	- Few people who understand both healthcare and payments complexity
	- Two very complicated, regulated industries with limited cross-expertise
	- Significant arbitrage opportunities for those who can navigate both domains

Chat with meeting transcript: https://notes.granola.ai/t/ec680150-da1c-4e25-84e4-5bb8e621eca1
