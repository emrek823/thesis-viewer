---
granola_id: e22d5928-dbaf-452e-9b0f-a607b5b8adfa
title: "Emre / Sean / Manan"
type: note
created: 2025-11-04T19:04:19.560Z
updated: 2025-11-04T19:32:34.844Z
attendees:
  - manan.shah.777@gmail.com
  - sd@virtuevc.com
---
### Manan’s Background & Company Journey

- Kumo experience: first employee, led infrastructure for 4 years building graph ML models and data warehouses for enterprises
	- Clients included DoorDash, Coinbase, Reddit
	- Left 6-7 months ago to figure out life’s work
- Various different ideas and iterations explored:
	- Post training models for enterprises
	- AI for intelligent process automation
	- One closest to current idea: AI for Intelligent Process Automation
- RPA frustration: felt like “faster horse solution” rather than tackling problem from first principles
	- Too diffused across verticals with horizontal solution approach
- Healthcare insight through girlfriend’s family (ophthalmologist at UCSF, dad runs private practice, sister is plastic surgeon)
	- Spent month at girlfriend’s dad’s practice sitting with billing team
	- Gained understanding of revenue cycle process automation, submitting prior auths, calling payers
	- 3-4 weeks into journey realized manual labor automation was wrong approach

### Revenue Cycle Problem Analysis & Solution Thesis

- Basic early learnings on industry dynamics:
	- Physicians blame process issues upstream and aggressive payers
	- Payers cite non-compliant providers and fraud/waste/abuse
	- Reality: neither side fundamentally at fault
- Prevailing thesis: translation gap is fundamental issue between payers and providers
	- Causes downstream rework and back-and-forth
	- Physicians get “crazy denials” but reasons always reference payer policy somewhere
	- No one has time to read these policies
- Core insight: industry grew up in reactive context rather than proactive
	- Claims created based on clinical notes documented for care, not payers
	- Payers adjudicate with payment integrity stack with limited justification
- Better approach: bring intelligent system upstream to eliminate downstream work
	- Redefine payment integrity by moving from payer side to provider side
	- Build claim risk model before claims go out

### Market Dynamics & Technical Approach

- CDI (Clinical Documentation Integrity) landscape:
	- Outpatient setting seeing surge in complexity: ASC (ortho/spine), medical necessity
	- Target markets: Spine (most fraudulent but important for medical necessity), IVIG infusion, Radiation Oncology
	- Shift from inpatient to outpatient care driven by reimbursement
	- Historical barrier: claims too low value to staff RN, volume too high (RN can review 25-40 cases/day)
- Tightening enforcement environment:
	- OIG compliance restrictions tightening
	- Retroactive audits increasing (1-5 years out from claims being paid)
	- Payment integrity advancement on payer side enabling revenue clawbacks
- Technical differentiation:
	- Move computation from training time to inference time
	- Instead of predicting claim risk against moving target, “now cast” the claim
	- Real-time reasoning over full chart and payer policies vs. historical data training

### Implementation & Go-to-Market Strategy

- Product approach:
	- Start with chart review CDI outpatient platform pre-bill (lowest lift integration)
	- Expand to own pre-service and full claim lifecycle
	- No one has outpatient CDI software currently - layering opportunity
- Integration requirements:
	- Read access to EMR
	- Historical claim data
	- Payer policy dataset (can construct internally)
- Workflow considerations:
	- Pre-bill: billing admin/back office (most receptive to new software)
	- Pre-service: closer to physician workflow (more valuable but complex)
	- Success metric: first pass yield improvement
- GTM strategy:
	- Prove value in 1-2 clinics across three verticals
	- Target private equity buyers and sell into rollups
	- MSO sales channel opportunity
	- Early payer conversations critical (spoke with BCBS Digital Transformation, nonprofit health plan very interested)
- Monetization path:
	- Platform fee: $2-5K/month, up to $10K for complex cases
	- Progression: platform fee → portion of claims → revenue from spread on cash advances
	- ASCs highest revenue, infusion second, radiation oncology third

### Team, Funding & Next Steps

- Current team: solo founder with advisors
	- Dr. Leskovich (Kumo co-founder, 10-year advisor)
	- Hospital system and private practice leaders
	- RCM BPO operator
- Hiring plan: 5-10 people over next year
	- Priority: intensity, rapid learning, customer conversation ability
	- Forward deployment into practices for workflow visibility
- $3M raise to:
	- Build tech and prove across 15 design partnership sites
	- Expand significantly if PE engagement secured
	- Deliver significant revenue lift
- Immediate priorities:
	- Has term sheet, accelerating round timing
	- Finding right partner to start compounding momentum
	- Will send deck and continue conversations over next 24-36 hours

Chat with meeting transcript: https://notes.granola.ai/d/e22d5928-dbaf-452e-9b0f-a607b5b8adfa
