---
type: research
topic: "Healthcare Payments Business Models"
date: 2026-01-13
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 14
web_sources: 8
---

# Healthcare Payments: Four Business Models, Two Sides of Value

The healthcare payments opportunity is **not one business**—it's four distinct plays with fundamentally different value propositions to providers vs. payers. Understanding which side of the transaction you serve determines everything: pricing model, sales motion, competitive dynamics, and ultimate ceiling.

---

## The Four Business Models

| Model | Example | Provider Value | Payer Value | Pricing |
|-------|---------|----------------|-------------|---------|
| **Payment Infrastructure** | TriBridge | Faster cash, less reconciliation | Lower admin cost, reduced provider abrasion | SaaS + payment processing fees |
| **Provider Financial Services** | Nitra | Working capital, procurement savings | N/A (provider-only) | Interchange (1-2.8%) + marketplace margin (25%) |
| **Provider-Side Payment Integrity** | Manan/Backbone | First-pass accuracy, denial prevention | Gold card eligibility, fewer disputes | Value-based (% of denial reduction) |
| **Payer-Side Payment Integrity** | Cotiviti, Codoxo | Fewer denials/rework | Cost avoidance, fraud prevention | Contingency (10-25% of savings) |

---

## Provider Benefits: The Concrete Value Props

### 1. Cash Flow Acceleration (TriBridge Model)

**The Problem:** ERAs (835 files) and EFTs (ACH payments) travel on separate rails and don't reconcile. Manual matching still happens in "health system basements." [[Matt Swatzell and Virtue]]:44

**Specific Benefits:**
- **14+ days → <24 hours** payment receipt through predictive claims acceleration
- **Eliminates 1-1.5 FTE per site** doing manual payment posting ($40-75K saved) [[Virtue and Tim Schuermer]]:55-127
- **Reduces "Where's my money?" calls** — each costs $20 fully loaded; practices make multiple per claim discrepancy

**Why It Matters:** Most practices have only 1-2 weeks liquidity despite $3.5-10M revenues. Cash visibility is existential.

### 2. First-Pass Accuracy (Manan/Backbone Model)

**The Problem:** RCM is "reactive by design"—claims start from clinical notes written for care, not reimbursement. Payers adjudicate against dense, shifting policy text. [[backbone-manan]]:51-57

**Specific Benefits:**
- **First-pass claim yield improves to 95%+** (vs. 15%+ denial rates in many practices)
- **Eliminates 50%+ of all denials** through pre-service/pre-bill adjudication
- **Never makes the same mistake twice** — ERA interpretation creates learning loop
- **Enables cash advances** — with pre-adjudication, providers can receive payment before formal payer processing

**Beachhead Markets:** IVIG/biologic infusion ($1B), spine/ortho ASCs ($12B), radiation oncology ($12B) — ~$25B SAM [[backbone-manan]]:131-133

### 3. Procurement & Working Capital (Nitra Model)

**The Problem:** Independent practices have fragmented financial operations—multiple vendors, manual expense tracking, no leverage with suppliers.

**Specific Benefits:**
- **2.2% cash back** on medical supplies, 5% on NitraMart [[Sacra/Nitra]](https://sacra.com/c/nitra/)
- **Access to 500K+ SKUs** from McKesson, Medline through single platform
- **Smart spend analytics** — benchmark against market rates, identify cost-saving opportunities
- **Consolidated vendor payments** — integrated ACH and check from one place

**Business Model:** Interchange (~1% net) + marketplace rebates scaling to 25% margin [[nitra-marketplace-deck]]:24

### 4. Reduced Administrative Burden (Payment Infrastructure)

**Specific Benefits:**
- **Automated reconciliation** — matching payments to claims without manual trace number investigation
- **Fewer claim status inquiries** — 4,000-row reconciliation reduced to targeted calls
- **Better AR forecasting** — predictable cash flow enables better operations planning

---

## Payer Benefits: The Concrete Value Props

### 1. Pre-Pay Cost Avoidance (Payment Integrity)

**The Shift:** Pre-pay grew from "virtually nonexistent" 5-10 years ago to **40% of payment integrity market today**, trending toward 60%+ by 2030. [[Payer Infrastructure Modernizes]]:34-80

**Specific Benefits:**
- **$12-16 PMPY in savings** through pre-claim provider education [[Codoxo]](https://www.codoxo.com/redefining-the-future-of-payment-integrity-healthcare-costs-five-imperatives-for-payers-providers/)
- **40% reduction in overpayments** via upstream intervention
- **10% pre-pay contingency vs. 20-25% post-pay** — cheaper to avoid than recover [[Payment Integrity AI Wins]]:115
- **90% sustainability rates** on prepay DRG review (vs. 30% post-pay success) [[ZS](https://www.zs.com/insights/ai-tackles-payment-integrity-for-health-plans)]

**The Math:** Post-pay recovers ~$0.40 per $1 in savings after vendor fees. Pre-pay prevents the dollar from leaving.

### 2. Reduced Provider Abrasion

**The Problem:** "Pay and chase" model creates adversarial relationships. Provider call centers are "one of the fastest growing opex drivers" at major payers. [[tribridge-deck]]:201

**Specific Benefits:**
- **62% improvement in provider satisfaction** when shifting from adversarial oversight to collaborative support [[Codoxo]]
- **Reduced prompt pay penalties** — particularly material for Blues plans
- **Better MA Star ratings** — provider inquiry/dispute volumes directly affect ratings

**Quote:** "Every payer strategy project I've done for 4 years includes something around provider satisfaction." — Tony Juryk, Partner, Deloitte [[tribridge-deck]]:207

### 3. Administrative Efficiency

**Specific Benefits:**
- **Reduced call center volume** — 25% of inbound calls are payment inquiries; half just trying to understand what was paid [[tribridge-deck]]:199
- **Lower claims processing cost** — ~2 FTEs at Anthem/Elevance level for claim reprocessing alone
- **Faster library updates** — AI-native vendors update in days vs. "2 months for legacy solutions to make library changes" [[3one4Capital]](https://www.3one4capital.com/blogs/the-opportunity-for-payment-integrity-in-the-us-healthcare-market)

### 4. Float & Treasury (Limited Value)

**Reality Check:** Float alone is **not sufficient business case** for payers.

**Quote:** "Float not generating significant incremental revenue for providers. Primary value comes from waiver savings, not treasury float benefits." [[Matt Swatzell and Virtue]]:36-74

**Why:** Large payers have balance sheet capacity with negligible cost of capital. Float loss sits on their balance sheet; admin savings accrue to claims processing teams (different cost centers, harder to capture).

---

## Business Model Economics

### Payment Integrity (Payer-Side)

| Tier | Vendor | Fee Model | Savings Share |
|------|--------|-----------|---------------|
| Primary Claims Editor | Optum CES, ClaimsXten | PMPM/SaaS | 1-5% |
| Secondary Claims Editor | HealthEdge, Others | Contingency | 10-25% |
| Pre-Pay PI | AI-native vendors | Contingency/SaaS | 10% |
| Post-Pay PI | Cotiviti, legacy | Contingency | 20-25% |

**Market Structure:** ClaimsXten (~50%) + Optum CES (~40%) own primary editing with ~100% gross retention. AI-native vendors enter via "second-pass" — proving ROI on dollars incumbents missed, then migrating to first-pass. [[Payment Integrity AI Wins]]:19-27

**Entry Strategy:** "You can look at the same data 30 days after Cotiviti does it...pay you a higher fee." Payers explicitly offer higher contingency for incremental finds. [[tegus_cotiviti-holdings-inc_133802]]

### Payment Infrastructure (TriBridge Model)

| Revenue Stream | Mechanism |
|---------------|-----------|
| Payment processing | Similar rates to existing bank providers |
| SaaS (Reconciliation Manager) | Per-provider subscription |
| Spread revenue (Accelerate) | % of claim dollars accelerated |
| Net settlement margin | Aggregation reduces per-transaction cost |

**TAM:** $400M payments + $500M SaaS + $2.5-5B spread revenue [[tribridge-deck]]:405-432

### Provider Financial Services (Nitra Model)

| Revenue Stream | Take Rate |
|---------------|-----------|
| Card interchange | ~1% net after rewards/fraud |
| Marketplace rebates | Scaling to 25% |
| Payment processing | 2.9% (in-house processing) |

**Metrics:** $34M ARR (2025), $1B+ annualized purchase volume, 11x YoY growth [[Sacra/Nitra]]

---

## Competitive Moats

### Content > AI

**Critical finding:** Clinical content depth (knowledge packs, specialty coding standards) matters more than AI quality.

**Quote:** "Editors are more based on the content than they are the system performance." [[HealthEdge VP, Tegus]]

**Evidence:**
- Optum/Lyric: 130+ knowledge packs built over decades
- HealthEdge/Burgess: Only 13 knowledge packs
- **Gap:** "$100M+ annual savings gap" that "takes years to close" [[tegus_cotiviti-holdings-inc_133796]]

**Implication:** Pure AI plays without clinical content libraries face structural disadvantage. The moat is in specialty coding investment (cardiology, oncology, rare disease).

### Data Flywheel (Second-Pass → First-Pass)

1. Accept second-pass positioning → get access to claims data
2. Prove ROI by finding dollars incumbents missed
3. Accumulate proprietary training data
4. Negotiate first-pass position after demonstrating accuracy

**Quote:** "20 to 1 ROI is common for a Lyric or an Optum CES primary editor...north of $100 million a year in savings gap." [[tegus_cotiviti-holdings-inc_133796]]

### Provider Lock-In (Nitra)

- Procurement convenience keeps spend on card
- Rewards points create switching costs
- Workflow automation increases stickiness
- Data advantage: "1,000+ customer supply lists" for pricing insights [[nitra-marketplace-deck]]:105

---

## RTP: The Infrastructure Shift

### Current Payment Rails Are Broken

From [[Matt Swatzell and Virtue]]:112-131:

| Rail | Cost | Data Capacity | Speed | Coverage |
|------|------|---------------|-------|----------|
| **Check** | ~$5 | None | 5-10 days | 100% |
| **ACH** | ~$0.25 | 80 chars | 2-3 days | 100% |
| **Wire** | ~$20 | Limited | Same day | 100% |
| **RTP/FedNow** | ~$0.02 | Rich (ISO 20022) | Seconds | 70% |
| **Virtual Card** | 3% of payment | Good | 1-2 days | Varies |

**The problem:** ACH has an 80-character limit. ERAs (data) and EFTs (money) must travel separately. Providers manually match them in "health system basements."

### Why RTP Changes Everything

> "RTP embeds significantly more reconciliation data in payment itself. Helps provider reconciliation processes automatically." [[Matt Swatzell and Virtue]]:128-131

**RTP carries data WITH money.** One transmission instead of two. The reconciliation problem disappears.

### FedNow Hit Critical Mass

From [[Emre (Virtue) __ Matt]]:36-39:

> "FedNow/RTP network gained material scale since TriBridge. **70% coverage for bank accounts** (up from 30%)."

When TriBridge started, RTP was 30% coverage. Now 70%. Infrastructure exists.

### Virtual Cards Are the Enemy

> "Payers push virtual cards to capture interchange revenue sharing. Providers pay ~3% more to accept virtual card payments. Horrible solution for provider operations." [[Matt Swatzell and Virtue]]:122-126

Payers make money on virtual cards. Providers hate them. RTP is provider-friendly.

### Implications for New Entrants

1. **Build on RTP/FedNow** — 70% coverage threshold is past
2. **Lead with reconciliation** — cost savings ($10-15/tx) are secondary to ERA/EFT matching
3. **Avoid virtual cards** — they enrich payers at provider expense
4. **Geographic wedge** — Pacific Northwest optimal: "70% coverage achievable with 2-3 players each side" [[Emre (Virtue) __ Matt]]:31-34

---

## Competitor Comparison: Nitra vs TriBridge vs Optum Real

| | **Nitra** | **TriBridge** | **Optum Real** |
|---|---|---|---|
| **Customer** | Providers only | Payers + Providers | Payers first |
| **What it does** | Expense card + procurement | Payment rails + reconciliation | Real-time claims adjudication |
| **Value prop** | Cash back, spend management | Faster payments, reconciliation | Pre-submission coverage clarity |
| **Revenue model** | Interchange + marketplace | Processing + SaaS + spread | Captive (UHC) or B2B licensing |
| **Where in workflow** | Post-payment (spend) | Post-adjudication (payment delivery) | Pre-submission |
| **Capital intensity** | High ($45M debt) | High (claims acceleration) | Low (software) |
| **Who pays** | Provider | Both | Payer |

### Workflow Position

```
PRE-SERVICE → SUBMISSION → ADJUDICATION → PAYMENT → SPEND
     │              │            │            │         │
  Optum         Optum        Optum      TriBridge   Nitra
  Real          Real         Real
```

**Optum Real** = Payer infrastructure for real-time adjudication. Captive to UHC initially.

**TriBridge** = Payment infrastructure between payer and provider. Two-sided network problem.

**Nitra** = Provider financial services. One-sided, post-payment.

### Why Nitra is Simpler

- One customer type (providers only)
- Post-payment (no payer integration needed)
- Proven fintech model (Ramp/Brex verticalized)

### Why TriBridge is Harder

- Two-sided network (needs Blues buy-in: Horizon, Michigan, Florida Blue)
- Float economics don't justify alone
- Integration complexity (835s from payers + provider RCM systems)

### Why Optum Real is Different

- Incumbent play (owns UHC distribution)
- Pre-adjudication (prevents denials vs. speeding payment)
- Defensive moat (other payers won't adopt competitor platform)

---

## Nitra Revenue Model Deep Dive

**"Nitra is an interchange business wrapped in a workflow product."** — [Sacra](https://sacra.com/c/nitra/)

### Revenue Stack

| Stream | Take Rate | Current Scale |
|--------|-----------|---------------|
| Card interchange | ~1% net | $1B+ volume |
| Marketplace margin | 2.8% → 25% | $135K/mo GMV |
| Payment processing | 2.9% | In-house |
| Float (debt facility) | Spread | $45M from CoVenture |

### Per $100 Marketplace Spend

| Source | Amount |
|--------|--------|
| Marketplace margin | $10-25 |
| Payment processing | $2.90 |
| Card interchange | $1.00 |
| **Total potential** | **$14-29** |

### Why Software Fees Are Waived

> "Nitra frequently waives [software fees] indefinitely for customers who commit to using the card as primary payment method."

100% of spend at 1% > $200/month SaaS with lost card volume.

---

## Market Sizing

| Segment | Size | Growth |
|---------|------|--------|
| Total US RCM | $170B | 12% CAGR |
| Claims & Denial Management | $16.3B | 12% |
| Payment Integrity (Pre-Pay) | $1B | Moving to SaaS |
| Payment Integrity (Post-Pay) | $10-15B | Contingency-based |
| Healthcare Payment Processing | $800M | Per-transaction |

**Improper Payments:** $100B+ annually in Medicare/Medicaid alone (43% of government-wide improper payments). $935B in annual health plan losses from payment inaccuracy. [[ZS]]

---

## Recommendations

1. **Pick a side.** Provider-side and payer-side payment integrity have different sales motions, pricing models, and competitive dynamics. Manan/Backbone chose provider-side; most incumbents are payer-side. Both can work, but straddling is hard.

2. **Content before AI.** If building payer-side, invest in clinical content libraries (specialty coding standards, LCD/NCD coverage determinations). AI without content loses to Cotiviti.

3. **Float is not enough.** Don't build a business case on treasury benefits alone. Admin savings (provider call center, reconciliation labor, prompt pay penalties) are more tangible and easier to capture.

4. **Second-pass is a wedge, not a ceiling.** AI-native vendors should accept inferior positioning to get claims data access, prove incremental ROI, then migrate upmarket.

---

## Sources

### Vault
- [[Payment Integrity AI Wins via Second-Pass Strategy]] — Tegus expert synthesis
- [[Payer Infrastructure Modernizes]] — Pre-pay shift thesis
- [[backbone-manan]] — Manan Shah deck
- [[nitra-marketplace-deck]] — Nitra marketplace strategy
- [[tribridge-deck]] — TriBridge pitch deck
- [[Matt Swatzell and Virtue]] — TriBridge payments economics, RTP analysis
- [[Emre (Virtue) __ Matt]] — TriBridge status, FedNow coverage, Blues dynamics
- [[Manan Shah __ Emre Karatas (Virtue)]] — RCM market assessment
- [[tegus_cotiviti-holdings-inc_133796]] — Content moat evidence
- [[tegus_cotiviti-holdings-inc_133802]] — Second-pass strategy

### Web
- [Sacra: Nitra Revenue Analysis](https://sacra.com/c/nitra/)
- [Codoxo: Payment Integrity Imperatives](https://www.codoxo.com/redefining-the-future-of-payment-integrity-healthcare-costs-five-imperatives-for-payers-providers/)
- [3one4 Capital: Payment Integrity Opportunity](https://www.3one4capital.com/blogs/the-opportunity-for-payment-integrity-in-the-us-healthcare-market)
- [ZS: AI Payment Integrity](https://www.zs.com/insights/ai-tackles-payment-integrity-for-health-plans)
- [HealthEdge: 2025 Payment Integrity Trends](https://healthedge.com/resources/blog/src-top-5-payment-integrity-trends-health-plans-should-respond-to-for-2025)
- [Healthcare Dive: Optum Real](https://www.healthcaredive.com/news/optum-real-ai-speed-claims-review-united-health/803448/)
- [Axios: Nitra $62M Raise (CoVenture debt)](https://www.axios.com/pro/health-tech-deals/2022/08/23/nitra-raises-62-million-seed-doctor-payment-platform)
