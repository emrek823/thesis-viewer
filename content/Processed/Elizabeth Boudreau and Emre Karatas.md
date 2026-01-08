---
granola_id: 7d4db2a5-78b9-47a3-842a-cc1021a5bdfe
title: "Elizabeth Boudreau and Emre Karatas"
type: note
created: 2025-08-22T15:35:40.419Z
updated: 2025-09-03T14:18:01.933Z
attendees:
  - marc@permanente.ch
  - elizabeth@wraptcare.com
---
### Elizabeth Boudreau Background & Transition

- Elizabeth’s background
	- Neuroimaging research to art degree, then healthcare implementations across MetaTech, rural healthcare, HCA, Boston Children’s, Harvard Med School
	- Built Innovation program at Boston Children’s (now run by John Brownstein), spun off first genetics laboratory as CIO
	- First AWS healthcare customer, first HIPAA in the cloud implementation
	- 8 years at AWS in various roles: health/human services sales, US Healthcare sales/BD, international providers, healthcare workforce
	- During COVID: head of product running all PCR testing across US and Europe for Amazon fulfillment centers
	- First clinical care was oncology pediatric patients at MSK
- Transition from Amazon AWS to startup world
	- Left Amazon in February to build consulting firm with partner
	- 6 months helping startups with scale and go-to-market planning
	- Partner handles technical/infrastructure side
	- This represents next step: “helped everybody else, but I also want to do it”

### Raft Health Product & Value Proposition

- Core problem: 15% of infusion appointments are missed
	- Life gets in the way (scheduled far in advance, kids’ events, patient illness)
	- Social determinants: travel distance, transportation access, clinic hours
	- Lab results not in safe range preventing treatment
- What happens with missed appointments
	- Drug waste: over $10,000 in unused chemotherapy per no-show
	- Open chair utilization with staffing costs
	- Downstream administrative workload to reschedule
	- Cost of poor patient outcomes
- Solution approach: proprietary algorithm developed by practicing oncologists at Kaiser Permanente
	- Dr. Dinesh Kotak (Chief Medical Officer) developed system
	- $15 million value back to clinic through repurposed appointments
	- 80% decrease in missed infusions
	- Real-time feeds from external datasets predicting no-show likelihood at patient and clinic level
- Technical differentiation: breadth and depth
	- 45-48 parameters total, 28 clinical parameters
	- Custom model per clinic using Epic and Clarity data
	- AI agents learn patient-level preferences (when they answer phone, confirmation patterns)
	- Not generic - tailored intelligence for each clinic
- Current state vs. baseline
	- Epic scheduling and block scheduling didn’t work
	- Intelligent scheduler used paper binder with posted notes
	- No waitlist queue - all heuristics and insider knowledge
	- Creates smart queues with protocol, drug regimen, risk scores in consolidated dashboard

### Business Model & Go-to-Market Strategy

- Currently EBITDA positive with signed Kaiser clinics
- Pricing model
	- One-time implementation fee: ~$75k per system (mostly integration costs)
	- Yearly SaaS fees tiered by seat capacity
	- Initial customers get profit-share model to show ROI fast
- Market expansion plan
	- Start Northern California, expand through TPMG space
	- Target high-volume cancer centers running Epic
	- Partnerships with healthcare IT vendors, AWS co-sell opportunities
	- International opportunities after US success
	- Fee-for-service models and PE-backed infusion centers
- Expansion beyond infusion
	- Radiology already expressing interest
	- Cardiology, cosmetic dermatology opportunities
	- Any expensive asset/resource with scheduling challenges
- $5 million seed raise target (plus $1.5M internal)
	- Goal: over 30 clinics nationwide, at least $5M ARR in first year
	- Focus on technical implementation, AWS hardened environment, sales

Chat with meeting transcript: https://notes.granola.ai/d/7d4db2a5-78b9-47a3-842a-cc1021a5bdfe
