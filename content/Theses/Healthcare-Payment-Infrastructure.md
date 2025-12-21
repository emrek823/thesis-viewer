# Thesis: Healthcare Payment Infrastructure

**Type:** Tech/Market Segment (How to build? What are the economics?)

## The Take

Healthcare payment infrastructure is built for insurance. As cash-pay, DPC, and self-funded models grow, the rails can't support them. The opportunity isn't float (basis points for providers)—it's admin savings: prompt pay penalties, MA stars impact, re-adjudication costs, call center burden. RTP costs $0.02 vs wire $20. Whoever rebuilds the rails captures the economics.

**How this evolved:** Started noticing vendor switching patterns (Stedi → FrontRunner) and cash-pay infrastructure gaps. Matt Swatzell crystallized: float is irrelevant; admin savings are the value. Proto confirmed: systems built for insurance prevent DPC/cash-pay scaling.

**Market size:** $200B+ annual healthcare administrative spending on financial transactions. $1 trillion in healthcare payments flow through legacy rails annually. 3% virtual card interchange on $100B+ cash-pay/specialty spend = $3B+ interchange pool. Admin savings across provider base = $5-10B+ annually in avoidable costs. Payment integrity market: $3.7B in 2024, growing to $9.3B by 2033 (10.8% CAGR).

## Maturity: Emerging

---

## How The Market Works

**The existing rails problem:**
```
CURRENT STATE                    FRICTION CREATED                    COST
───────────────────────────────────────────────────────────────────────────────
ACH (2-3 days)          →   Cash flow timing, reconciliation   $7-10 per claim
Wire ($20/transaction)  →   Expensive, manual initiation       $20 per transfer
Virtual cards (3% fee)  →   Providers avoid, lose transparency 3% of payment
Insurance-native        →   Cash-pay/DPC can't scale           $100K+ tech stacks

RTP ($0.02/transaction) →   Available but not adopted          $0.02 per transfer
FedNow ($0.02+)         →   Launched 2023, minimal healthcare  $0.02 per transfer
```

**The transaction economics:**

Average transaction cost across private payers and providers: $12-19 per claim for 9+ billion annual claims. Simple claims: $7-10. Complex claims: $35-40. Total U.S. healthcare administrative spending: ~$1 trillion annually. Financial transactions ecosystem alone: ~$200B annually.

Processing timeline: 4-6 weeks average from claim submission to payment. 50% of hospitals have >$100M in unpaid claims >6 months old. Over 40% of healthcare organizations lose 10%+ to leakage from outstanding balances.

**Why float doesn't matter:**

Providers' float opportunity = basis points above risk-free rate. At current rates, float on a $1,000 payment held 30 days = ~$4. Not material.

The real value:
- **Prompt pay penalties:** Blues charge providers if payments late
- **MA stars impact:** Payment timeliness affects quality ratings
- **Re-adjudication costs:** Wrong payments require expensive corrections (estimated 1/3 of claims paid incorrectly)
- **Call center burden:** Payment inquiries consume staff time
- **Working capital cost:** $100M+ in aging receivables ties up capital

**The cash-pay infrastructure gap:**

Proto insight: Systems tied to insurance payment rails. Cash-pay models need:
- 50-state proxy coverage without individual state licenses
- Embedded compliance for telehealth, controlled substances
- Bundled reconciliation across fragmented payments
- Patient financing and payment plans
- HIPAA-compliant processing (not available in generic payment processors)

Current state: Clinics paying $100K+ for Frankenstein tech stacks. Cash-pay primary care doctors spending 30%+ of time on billing instead of patient care. DPC practices hitting ceiling at 600-800 patients due to payment infrastructure limitations.

**The pre-claim opportunity (Codoxo Point Zero):**

Traditional payment integrity happens post-claim: detect fraud, claw back overpayments, fight denials. Point Zero moves "further left"—engaging providers BEFORE claims are created. Pre-claim provider education creates first-time accuracy instead of post-claim correction.

The economics are compelling:
- Up to 40% reduction in overpayments
- $12-16 PMPY savings across solutions
- $6-12 PMPY from provider education alone
- 42% decrease in administrative costs
- 20-30x greater efficiency vs post-claim
- $400B baseline in fraud/waste annually

Why it works: Transforms adversarial payer-provider relationships into partnerships. Instead of denials/appeals/resubmissions, providers get proactive education about coding accuracy and policy changes. Makes reviewing low-dollar claims economically viable. Enables interventions in sensitive areas (mental health) where payers avoid traditional payment integrity to prevent member abrasion.

This validates the thesis: the value isn't in payment processing—it's in reducing admin friction that costs both payers and providers billions.

**Market consolidation validates infrastructure value:**

Machinify's $670M acquisition of Performant Healthcare (October 2025) demonstrates the scale economics and strategic value of payment intelligence platforms. The combined entity serves 75+ health plans representing 170M+ lives, delivering billions in savings through a unified AI and human-expertise model spanning claim error detection, prevention, recovery, and coordination of benefits. This positions Machinify as a next-generation platform for payment accuracy and intelligence across both commercial and government payers, expanding from national/regional commercial plans into government programs (Medicare, Medicaid). The deal confirms that payment infrastructure isn't commoditizing—instead, leaders are consolidating to offer end-to-end intelligence from contracts through claims, leveraging transaction data to improve accuracy while reducing provider abrasion. Performant's audit and recovery expertise combined with Machinify's AI platform creates a full-stack approach: prevent errors pre-claim, detect during adjudication, recover post-payment. This validates that winners in this market will be platforms, not point solutions, controlling multiple intervention points across the payment lifecycle.

**Float economics confirm infrastructure thesis:**

Health insurance float is only 0.3x premiums, compared to 2.5x for property and casualty insurance and 10x for life insurance. This means for a health plan with $1B in annual premiums, float is only $300M versus $2.5B for a comparable P&C insurer. Investment income from float contributes just 20% of health insurance profit, compared to 70% for P&C and 90% for life insurance. This structural reality explains why delayed payment to providers is an intentional strategy to maximize float, not a technology problem. AI or automation won't reduce provider accounts receivable because payers are economically motivated to delay—the float, while small relative to other insurance types, still generates material returns on billions in collective working capital. For providers, this means payment timing improvement requires either regulatory intervention (prompt pay laws with teeth) or value exchange beyond speed (payment integrity accuracy, reduced denials, better reconciliation). The thesis holds: infrastructure value isn't in accelerating payments via technology alone—it's in reducing the $200B in administrative friction (re-adjudication, call centers, reconciliation costs) that both sides bear while float games continue.

**Data infrastructure convergence signals market maturity:**

Fivetran and dbt Labs' October 2025 merger creates a combined company approaching $600M in annual recurring revenue, unifying data movement (Fivetran) and transformation (dbt) under the banner of "open data infrastructure." This validates that enterprises need end-to-end data management—extract, load, transform, and activate—with freedom of choice for compute and AI layers. The combined entity sets the standard for interoperability built on open standards like SQL and Apache Iceberg, avoiding vendor lock-in while scaling with future workloads. For healthcare payment infrastructure, this pattern is instructive: winning platforms will similarly need to unify data aggregation, normalization, analysis, and activation across fragmented sources (claims, eligibility, pharmacy, provider). Healthcare lags general enterprise data infrastructure by 3-5 years, but the same forces apply—payers and plans need canonical data models before AI or analytics can deliver value. The North Carolina State Health Plan RFP confirms this: 572K members, 500GB of data across demographic, medical, pharmacy, and provider sources, requiring a vendor with "best in class population health analysis expertise" because state plans lack internal analytics capability. This isn't unique—most regional payers and self-funded employers have data but not infrastructure to extract insight, creating a wedge for analytics-as-a-service platforms that aggregate, normalize, and operationalize fragmented healthcare data.

**Vendor economics reality (Autonomy case study):**
- Stedi: Multiple 75¢ charges per eligibility check
- FrontRunner: 11-12¢ per check
- Migration = immediate cost savings, but requires Athena integration work
- Pattern: vendor economics poorly understood, switching costs overestimated

**Real-time payments infrastructure:**

Two networks available but not adopted in healthcare:
1. **RTP Network** (The Clearing House, launched 2017): 550+ participating FIs, 70% U.S. account coverage, $10M transaction limit (increased Feb 2025)
2. **FedNow Service** (Federal Reserve, launched 2023): 650+ participating FIs, 30% account coverage, $500k limit (increasing to $1M summer 2025)

Both operate 24/7/365, irrevocable transactions, ISO 20022 standard. Cost: ~$0.02 per transaction vs $20 wire transfer. Not interoperable yet, but shared standard enables dual adoption.

Healthcare remains "late adopter"—real-time payments require payer participation, not just provider infrastructure changes. Chicken-and-egg: providers need payers to send via RTP, payers need providers to accept RTP.

---

## Competitive Landscape

The healthcare payment infrastructure landscape is fragmented across four sub-categories, with different players dominating each segment. Total addressable market across all categories: $200B+ in annual administrative spending.

### Payment Rails & Processing

**Waystar** (Nasdaq: WAY, $7.05B market cap, $1.04B TTM revenue)
- Market leader: 30,000 clients, 1M+ providers, processes 6B+ transactions annually
- $1.8 trillion in annual gross claims, touches 50% of U.S. patients
- Financial profile: $256M Q1 2025 revenue (+14% YoY), 42% EBITDA margin, 114% NRR
- Recent: $1.25B acquisition of Iodine Software (Oct 2025), extending AI-based RCM capabilities
- Positioning: Comprehensive RCM platform with payment processing bundled
- Competitive advantage: Scale + network effects + 16/20 top U.S. hospitals
- Weaknesses: Built on legacy rails (ACH/wire), not RTP-native

**Change Healthcare** (UnitedHealth subsidiary, 50% of U.S. medical claims)
- Processes 1/3 of U.S. patient records, 900k physicians, 33k pharmacies, 5.5k hospitals
- Feb 2024 cyberattack caused massive disruption, customers fled to competitors
- Post-hack market share erosion ongoing—rivals signing multi-year contracts
- Integration risk: UnitedHealth vertical integration creates conflict of interest
- Positioned as infrastructure but perceived as competitor by other payers

**Availity** (Elevance-backed, private)
- Launched "Lifeline" post-Change hack: free scaled-down service
- Processed $315B in claims through mid-2024 for 300k+ providers, 120+ health orgs
- Positioning: Multi-vendor alternative to Change Healthcare monopoly
- Growing on provider diversification away from single-vendor risk

**Candid Health** (private, venture-backed)
- "Best RCM Solution" 2025 (MedTech Breakthrough)
- Automation-first platform: >95% touchless claim rates
- Target: Digital health, telehealth, modern healthcare providers
- Positioning: Next-gen infrastructure vs legacy players
- Differentiation: API-first, developer-focused, cloud-native

**InstaMed** (J.P. Morgan acquisition)
- HIPAA-compliant payment processing platform
- Banking integration advantage: settlement, treasury services bundled
- Target: Hospitals, health systems, large medical practices
- Positioning: Enterprise-grade infrastructure with banking rails

### Eligibility Verification & Data Interchange

**Stedi** (B2B EDI infrastructure, multi-industry)
- Healthcare vertical: 75¢+ per eligibility check (Autonomy case study)
- Modern API layer over legacy EDI (X12 transactions)
- Positioning: Developer-friendly vs legacy (Availity, Change)
- Weakness: Pricing 6-7x higher than specialized healthcare competitors

**FrontRunner** (healthcare-specialized)
- 11-12¢ per eligibility check (vs Stedi 75¢)
- Athena integration, provider-focused
- Positioning: Cost-optimized healthcare-native alternative
- Market share unknown but growing via vendor switching

**Verisys** (provider data verification)
- Real-time eligibility, exclusion status, license verification, DEA status
- Target: Payers for payment integrity, credentialing
- Positioning: Pre-claim verification to prevent denials

### Patient Payment & Engagement

**Cedar** ($3.2B valuation, $350M+ raised, Series D 2021)
- 300k+ patients daily, 3/4 avoid collections, up to 30% payment lift for providers
- Target: Large health systems (Yale, Novant, Summit CityMD)
- Technology: AI voice agent (Kora, April 2025), Affordability Navigator, Cedar Cover
- Partnership: Waystar partnering with Cedar (not competing directly on patient payments)
- Threat: Epic Systems "Cheers" product competing directly with EHR integration
- Positioning: Consumer-grade UX for medical billing
- Revenue model: Per-patient engagement fees + payment processing

**Phreesia** (public, patient intake/payments)
- Copay collection, balance payments, PM system integration
- Automates eligibility & benefits verification
- Target: Ambulatory practices, specialty clinics
- Differentiation: Pre-visit engagement + payment bundled

**PayZen** (patient financing, venture-backed)
- Care Card for pre-service and recurring financing
- Interest-free, personalized plans based on ability-to-pay
- Alternative to collections: 0% default financing
- Revenue: Transaction fees + merchant processing

### Payment Integrity & Claims Management

**Cotiviti** (private equity-backed, analytics leader)
- 30% additional medical cost savings beyond internal teams
- BCBSND partnership for claims accuracy
- Technology: Advanced analytics, ML-based fraud detection
- Target: Large payers (Blues plans, national insurers)
- Market: $3.7B (2024) → $9.3B (2033), 10.8% CAGR

**Optum** (UnitedHealth subsidiary)
- Payment integrity suite: 8-10% medical cost savings annually
- Bundled with broader Optum services (data, analytics, care delivery)
- Conflict: UnitedHealth ownership creates trust issues with competing payers
- Scale advantage: Data from 1/3 of U.S. claims

**Codoxo** (private, venture-backed)
- Point Zero: Pre-claim provider education
- $12-16 PMPY savings demonstrated, 40% overpayment reduction
- Positioning: "Further left" than traditional payment integrity
- Technology: AI-powered policy gap analysis, proactive provider engagement
- Differentiation: Collaborative vs adversarial payer-provider model

**Conduent** (public, BPO + technology)
- AI-driven payment integrity: pre-payment review + retrospective audits
- Target: Mid-market payers, TPAs
- Positioning: Services + technology hybrid (higher touch)

**Claritev** (private)
- Pre- and post-payment claims review
- Benefits customization, policy compliance
- Target: Regional payers, self-funded employers

### Market Structure Observations

1. **Vertical integration conflict:** UnitedHealth's ownership of Change Healthcare and Optum creates competitive tension. Other payers buying from competitors or self-building.

2. **Post-hack fragmentation:** Change Healthcare cyberattack accelerated multi-vendor strategies. Providers no longer willing to depend on single infrastructure provider.

3. **Legacy vs modern architecture:** Incumbents (Waystar, Change, Availity) built on ACH/wire rails. Opportunity for RTP-native entrant. Modern players (Candid Health) winning digital health segment.

4. **Scale economics dominate:** Network effects critical—Waystar processes 50% of U.S. patients. Hard to displace without wedge strategy.

5. **Patient payment fragmentation:** No dominant player. Cedar largest but still <5% market penetration. Epic threat via EHR bundling.

6. **Payment integrity consolidation:** Cotiviti and Optum lead, but Codoxo pre-claim model creates differentiation. Market growing faster (10.8% CAGR) than payment processing.

7. **Pricing opacity:** Vendor economics poorly understood (Stedi 75¢ vs FrontRunner 11¢). Switching costs overestimated. Opportunity for transparent pricing disruptor.

---

## Why This Matters Now

1. **Cash-pay/DPC growing fast.** Weight loss drugs going DTC. Telehealth bypassing insurance. Employers building direct networks. All hitting infrastructure wall.

2. **RTP availability.** Real-time payments now widely available but not adopted in healthcare. Cost delta ($0.02 vs $20) creates margin opportunity. FedNow launched 2023, RTP expanded to $10M limit Feb 2025.

3. **Self-funded employer growth.** Level-funded and self-funded plans growing as alternative to MA regulatory burden. Need payment infrastructure independent of traditional payer rails. U.S. payer services market: $61.9B (2022) → 7.7% annual growth.

4. **Specialty pharmacy complexity.** High-cost infusions, biosimilars, gene therapies require payment orchestration across patient, payer, manufacturer, provider. $100B+ specialty drug spend with 3% interchange opportunity.

5. **Pre-claim intervention proven.** Codoxo Point Zero demonstrating up to 40% overpayment reduction through provider education before claims created. $400B fraud/waste baseline makes even small improvements worth billions. Market validating that moving "further left" in payment lifecycle creates outsized returns.

6. **Change Healthcare disruption.** Feb 2024 cyberattack exposed single-vendor risk. Providers diversifying infrastructure. Window for new entrants while market replatforming.

7. **Digital health payment gap.** Healthcare services/tech market → $81B by 2026. Telehealth, virtual care, DTC diagnostics need payment infrastructure that doesn't exist. Generalist fintechs (Stripe) lack healthcare compliance (HIPAA, state licensing).

8. **Payer margin pressure.** Medical cost inflation forcing payers to seek payment integrity savings. 8-10% cost savings via Optum-style solutions becoming table stakes. Demand for pre-claim intervention (higher ROI) accelerating.

---

## The Bull Case

1. **Economics are obvious once articulated.** Float irrelevance + admin savings math is clear. First mover with RTP-native rails captures margin. $0.02 vs $20 transaction cost = 1000x efficiency. At scale, margin opportunity = billions.

2. **50-state proxy is a moat.** Building multi-state licensing infrastructure takes years. Once done, hard to replicate. Cash-pay telehealth providers willing to pay premium for embedded compliance.

3. **Interchange capture opportunity.** 3% virtual card fees that providers avoid = capturable margin for infrastructure player that creates better UX. $3B+ annual interchange pool in specialty/cash-pay segment.

4. **Cash-pay models WANT to pay.** Unlike insurance where providers chase payment, cash-pay patients and DPC employers are motivated payers. Infrastructure just needs to exist. Payment default rates <5% vs 20%+ insurance denial rates.

5. **Change Healthcare disruption creates wedge.** Post-cyberattack diversification means providers open to switching. Multi-year contract cycles ending 2025-2026. Timing window for new entrants.

6. **Payment integrity TAM growing faster than processing.** 10.8% CAGR vs ~7% for RCM overall. Pre-claim models (Codoxo) achieving 20-30x ROI vs post-claim. Admin savings opportunity larger than transaction processing.

7. **Banking infrastructure advantage.** JPM/Chase entering via InstaMed acquisition. RTP/FedNow rollout benefits banks with settlement infrastructure. Opportunity for bank-fintech partnerships vs pure-play software.

8. **Digital health adoption accelerating.** Telehealth stabilizing at 20-25% of visits post-pandemic. GLP-1 drugs creating DTC cash-pay market. Employers self-funding to avoid ACA/MA regulations. All need new payment rails.

9. **Regulatory tailwinds.** No Surprises Act, price transparency rules, interoperability mandates (TEFCA) create data availability for payment optimization. Compliance burden favors platforms vs point solutions.

---

## The Bear Case

1. **Insurance rails entrench.** If 90%+ of spend stays insurance-mediated, cash-pay infrastructure remains niche. MA enrollment growing (50%+ of Medicare). Employer coverage stable. Cash-pay TAM may be <$50B (vs $4T total).

2. **Stripe Health.** Horizontal payments infrastructure extends to healthcare. Bundled with compliance (HIPAA, state licensing via partnerships). Developer ecosystem + brand moat. Startup can't compete on distribution.

3. **Banks wake up.** JPM, Chase already in healthcare payments (InstaMed). RTP rollout could come from incumbents. Settlement infrastructure advantage. Treasury services bundling (credit lines, working capital) locks in enterprise customers.

4. **Regulatory complexity.** State-by-state compliance for cash-pay is genuinely hard. May require more capital than VC-backable. 50-state licensing = $10M+ in legal/regulatory costs before first dollar of revenue.

5. **Epic bundling kills patient payment startups.** Epic's "Cheers" product competing with Cedar. EHR integration lock-in. 70%+ of hospital beds on Epic. If Epic bundles payments into core platform, Cedar and competitors lose hospital market.

6. **Waystar moat too strong.** $7B market cap, $1B revenue, 50% of U.S. patients, 114% NRR. Network effects + switching costs (PM integrations, claims data history) make displacement nearly impossible. Can acquire threats (Iodine Software for $1.25B).

7. **Payment integrity commoditizes.** AI-powered claims review becoming table stakes. Every RCM vendor adding payment integrity features. Cotiviti/Optum scale advantages (data network effects) insurmountable. Pre-claim opportunity (Codoxo) limited by payer willingness to proactively educate providers.

8. **RTP adoption stalls.** Healthcare remains "late adopter." Payers lack incentive to adopt real-time payments (working capital benefit from payment delays). Providers can't force payer RTP adoption. Chicken-and-egg persists.

9. **Margin compression.** Payment processing commoditizes to basis points (see Visa/Mastercard interchange compression). Software multiples compress. Exit environment for <$1B revenue companies poor. Acquirers (Waystar, Change, Optum) have integration failures, slow M&A.

---

## Startup Opportunities

**1. RTP-Native Healthcare Payments**
- Replace ACH/wire with real-time settlement for provider payments
- Start with high-volume specialty (infusion, imaging, surgical centers) where working capital matters
- Technology: Dual RTP + FedNow integration, ISO 20022 messaging, treasury optimization
- Revenue: Per-transaction ($0.25-1.00, vs $0.02 cost) + spread on float during transition
- Wedge: Specialty pharmacies first (complex multi-party payments), expand to hospitals
- Risk: Need critical mass for network effects, payer adoption uncertain
- Differentiation: First-mover on RTP rails, treasury services bundled (working capital optimization)

**2. Cash-Pay Infrastructure Platform (Proto model)**
- 50-state proxy coverage enabling telehealth/DPC scaling
- Embedded compliance (controlled substances, telehealth parity, state medical board requirements)
- Patient financing and payment orchestration (payment plans, subscription billing)
- Technology: Multi-state entity structuring, compliance-as-a-service APIs, patient payment UX
- Revenue: Platform fee ($500-2k/month per practice) + interchange capture (1-2% vs 3% virtual cards)
- Target: DPC practices (12k+ nationwide), telehealth providers, cash-pay specialty clinics
- Risk: Regulatory complexity may exceed venture-scale capital ($10M+ for 50-state licensing)
- Path to scale: Start with 5-10 friendly states, expand via regulatory playbook template

**3. Pre-Claim Payment Integrity Platform**
- Provider education before claims created (Point Zero model)
- AI-powered policy gap analysis and proactive outreach to providers
- Technology: LLM-based policy interpretation, claims prediction, provider communication automation
- Revenue: PMPY savings share ($6-12 PMPY demonstrated, take 30-50% of savings)
- Target: Regional payers, self-funded employers, TPAs (not national payers—Optum/Cotiviti own this)
- Wedge: Mental health claims (payers avoid post-claim review, abrasion risk), low-dollar claims (uneconomical for traditional payment integrity)
- Risk: Requires payer partnership; Codoxo already executing; data access barriers
- Differentiation: Vertical-specific models (mental health, chronic care) vs horizontal

**4. Eligibility/Payment Vendor Optimization**
- Audit existing vendor costs (Stedi, Availity, etc.), identify switching opportunities
- Switch clinics to lower-cost providers (Stedi → FrontRunner-type migrations)
- Technology: Cost benchmarking database, integration templates, ROI calculators
- Revenue: Savings share (20-30% of cost reduction) + implementation fees ($10-50k)
- Target: Mid-market provider groups (5-50 locations), DSOs (dental service organizations)
- Risk: Commoditizes quickly, low moat, vendors retaliate with discounts
- Path to scale: Build cost transparency database, expand to procurement optimization (broader vendor base)

**5. Payment Integrity for Self-Funded Employers**
- Pre-claim provider education + payment accuracy for self-funded plans
- Technology: Real-time claims monitoring, provider communication, broker integration
- Revenue: PMPY ($3-8 PMPY) or percentage of medical cost savings (20-30% of savings)
- Target: Self-funded employers (100-5,000 employees), level-funded plans
- Wedge: Employers lack payment integrity infrastructure (TPAs underinvest), immediate ROI (vs insurance pool dilution)
- Risk: TPA relationships required, limited scale (self-funded <20% of market)
- Differentiation: Employer-aligned incentives (vs TPA revenue from claims), transparency

---

## GTM Considerations

### Market Segmentation by Buyer Type

**Providers (hospitals, physician groups, clinics)**
- Pain: Cash flow uncertainty, aging receivables, high transaction costs, call center burden
- Buying criteria: ROI (reduced DSO, lower transaction costs), integration ease (PM/EHR), compliance
- Decision-maker: CFO (cash flow impact) + CIO (integration complexity)
- Sales cycle: 6-12 months for hospitals, 2-4 months for physician groups
- Wedge: Specialty providers first (infusion, imaging) where receivables concentration high
- Validation metric: Days in A/R reduction (90 days → 60 days = meaningful cash flow improvement)

**Payers (health plans, TPAs, self-funded employers)**
- Pain: Medical cost inflation, payment integrity costs, claims processing overhead
- Buying criteria: PMPY savings, accuracy improvement, provider satisfaction (avoid abrasion)
- Decision-maker: VP Medical Economics (cost savings) + CTO (integration)
- Sales cycle: 12-24 months (procurement, pilot, actuarial validation required)
- Wedge: Regional payers and TPAs (not national—Optum/Cotiviti own this), self-funded employers
- Validation metric: Medical cost savings percentage (8-10% benchmark), pre-post claims accuracy

**Cash-Pay Providers (DPC, telehealth, specialty cash clinics)**
- Pain: Lack of infrastructure, compliance complexity (50-state), patient payment friction
- Buying criteria: All-in-one solution (licensing + payments + compliance), speed to market
- Decision-maker: Founder/CEO (early-stage), COO (growth-stage)
- Sales cycle: 1-3 months (high urgency, infrastructure is blocker to scaling)
- Wedge: Telehealth platforms first (GLP-1, mental health, dermatology), DPC second
- Validation metric: Patient capacity per provider (600 → 1200 = infrastructure enabled growth)

### Wedge Strategy (Payment Infrastructure Play)

**Phase 1: Specialty Provider Wedge (Year 1-2)**
- Target: Infusion centers, imaging centers, surgical centers (high-volume, concentrated receivables)
- Entry point: RTP-native payments for payer-to-provider settlement
- Value prop: Reduce DSO from 60 → 30 days, eliminate wire fees ($20 → $0.02), predictable cash flow
- Revenue: $0.50-1.00 per transaction (vs $0.02 cost), 1,000 claims/month/provider = $6-12k annual revenue per provider
- Initial target: 100 specialty providers = $600k-1.2M ARR
- Moat building: Payer integrations (Blues, UHC, Cigna), settlement infrastructure, transaction data

**Phase 2: Eligibility + Payments Bundling (Year 2-3)**
- Expand: Add eligibility verification (FrontRunner pricing: 11¢ vs Stedi 75¢)
- Cross-sell: Existing payment customers take eligibility, vice versa
- Value prop: Single vendor for eligibility + payments, cost savings + integration simplicity
- Revenue: $0.11 per eligibility check, 500 checks/month/provider = $660 annual revenue per provider
- Upsell: Combined eligibility + payments bundle = $1,500-2,000 per provider annually
- Target: Expand to 500 providers across specialties = $3-5M ARR
- Moat building: Dual integration (payment + eligibility) increases switching costs, data network effects

**Phase 3: Cash-Pay Platform Expansion (Year 3-4)**
- Horizontal: Build 50-state proxy infrastructure for telehealth/DPC
- Leverage: Payment rails + compliance infrastructure already built for insurance side
- Value prop: Turnkey cash-pay infrastructure (licensing + payments + patient financing)
- Revenue: $1,500-3,000 per provider monthly platform fee + 1-2% payment interchange
- Target: 200 DPC/telehealth providers = $3.6-7.2M annual platform fees + $2-4M interchange
- Combined ARR: $10-15M across provider segments
- Moat building: 50-state licensing moat, patient financing data, cash-pay network

**Phase 4: Payment Integrity Upsell (Year 4-5)**
- Leverage: Transaction data from payment/eligibility infrastructure
- Build: Pre-claim intervention (Codoxo Point Zero model) using claims prediction
- Sell to: Payers who pay providers on platform (already integrated)
- Value prop: 8-10% medical cost savings, no additional provider integration
- Revenue: $3-8 PMPY across covered lives on platform
- Target: 5 regional payers, 500k covered lives = $1.5-4M ARR
- Combined ARR: $15-25M total
- Moat building: Two-sided network (providers + payers), claims accuracy data, predictive models

### Champion Identification

**Provider-side champion:**
- Title: CFO or VP Revenue Cycle
- Pain: Aging receivables (>$50M outstanding), unpredictable cash flow, transaction cost burden
- Trigger event: New EHR/PM implementation (integration opportunity), private equity acquisition (cash flow focus), refinancing need (lender covenant on DSO)
- Validation: "Show me DSO reduction in first 90 days or I don't pay implementation fees"

**Payer-side champion:**
- Title: VP Medical Economics or Chief Actuary
- Pain: Medical cost trend >8% annually, payment integrity ROI declining, provider abrasion from denials
- Trigger event: Renewal with existing payment integrity vendor (Cotiviti, Optum), actuarial reserve adjustment (cost savings mandate), new self-funded client acquisition (need differentiated services)
- Validation: "Pilot on 10k lives, measure pre-post claims accuracy and cost trend"

**Cash-pay champion:**
- Title: Founder/CEO (DPC, telehealth)
- Pain: Can't scale beyond 600-800 patients due to payment/compliance infrastructure
- Trigger event: Seed/Series A fundraise (growth mandate), multi-state expansion, new care vertical launch
- Validation: "Enable me to operate in 10 states in 60 days or I build in-house"

### Timing Triggers for Sales

1. **EHR/PM system changes:** Integration window opens, switching costs temporarily lowered
2. **Private equity acquisitions:** Cash flow optimization mandate, CFO hired with revenue cycle focus
3. **Multi-state expansion:** Telehealth/DPC hitting licensing wall, infrastructure urgency
4. **Change Healthcare migration:** Post-cyberattack replatforming, multi-vendor strategies
5. **Self-insured employer growth:** 100-5,000 employee companies going self-funded, need payment infrastructure
6. **Payer contract renewals:** Payment integrity, eligibility verification, claims processing vendors up for renewal (typically 3-year cycles)
7. **Medical cost spikes:** Payers missing actuarial targets, seeking payment integrity savings
8. **Regulatory compliance deadlines:** No Surprises Act, price transparency, TEFCA interoperability requirements

### Competitive Positioning

**Against Waystar/Change Healthcare (incumbent RCM platforms):**
- "Built on legacy ACH rails. We're RTP-native—$0.02 vs $20 wires, 30-day vs 60-day DSO."
- "They bundle everything, charge for everything. We're à la carte—pay for what you use."
- Avoid: Head-to-head on enterprise hospitals (Waystar owns this), focus on specialty providers and cash-pay

**Against Stedi/Availity (eligibility/EDI vendors):**
- "Stedi charges 75¢ per check. We're 11¢. Same data, 85% cost savings."
- "Built for developers, not healthcare. We understand provider workflows."
- Target: Provider groups doing vendor cost audits, willing to switch for immediate savings

**Against Cedar/Phreesia (patient payment platforms):**
- "They optimize patient collections. We optimize infrastructure—RTP rails, compliance, multi-state licensing."
- "Cedar needs Epic integration. We're PM-agnostic, API-first."
- Avoid: Consumer-facing patient engagement (Cedar's strength), focus on B2B infrastructure

**Against Cotiviti/Optum (payment integrity):**
- "Post-claim detection. We're pre-claim prevention—20-30x ROI, collaborative vs adversarial."
- "Built for national payers. We serve regional plans and self-funded employers they ignore."
- Target: Mid-market payers, TPAs, self-funded employers (not Fortune 500—Optum owns this)

**Against JPMorgan/InstaMed (banking + payments):**
- "Banking rails + healthcare compliance. We're healthcare-native with banking partnerships."
- "Enterprise-only (>$1B revenue hospitals). We serve the mid-market they don't touch."
- Wedge: Specialty providers too small for JPM, telehealth/DPC (not InstaMed targets)

---

## Path to $1B+

### Scenario 1: Payment Infrastructure Platform (RTP-native rails + cash-pay)

**Target:** $70-100M ARR at 15-20x revenue multiple = $1.05-2B valuation

**Timeline:** 6-8 years

**Revenue Model Mix:**
- Transaction fees: $0.50-1.00 per payment transaction (60% of revenue)
- Platform fees: $1,500-3,000/month per provider for cash-pay infrastructure (25% of revenue)
- Interchange: 1-2% of cash-pay transaction volume (15% of revenue)

**Scaling Path:**

| Stage | ARR | Providers | Transactions/Month | Key Milestones | GTM |
|-------|-----|-----------|-------------------|----------------|-----|
| Seed-Series A | $0-3M | 0-200 specialty | 200k | RTP integrations (3 payers), specialty provider pilots, payment processing live | Direct sales to infusion/imaging centers |
| Series A-B | $3-15M | 200-800 | 1.2M | 10-state cash-pay licensing, 10 payer integrations, eligibility bundling | Channel partnerships (PM vendors, DSO platforms) |
| Series B-C | $15-40M | 800-2,000 | 3.5M | 50-state licensing, payment integrity upsell, 25+ payer integrations | Self-service onboarding, marketplace (payers discover providers) |
| Series C-D | $40-70M | 2,000-4,000 | 7M | Network effects (payers paying for access), telehealth platform integrations | Platform strategy (providers + payers + patients) |
| Growth | $70-100M | 4,000-6,000 | 12M | Two-sided marketplace, international (Canada), specialty verticals (dental, vision) | Ecosystem (ISVs building on APIs) |

**Unit Economics at Scale:**
- ARPU: $15-20k per provider annually (blended transaction + platform + interchange)
- CAC: $3-5k (specialty providers), $8-12k (hospitals), $1-2k (cash-pay via PLG)
- CAC payback: 4-8 months
- Gross margin: 70-75% (transaction processing infrastructure costs)
- NRR: 115-130% (transaction volume growth + upsell to eligibility/payment integrity)
- LTV/CAC: 8-12x

**Comparables:**
- Waystar: $7B market cap, $1B revenue = 7x (public company discount)
- Cedar: $3.2B valuation on estimated $50-80M ARR = 40-64x (pre-IPO premium, patient engagement differentiation)
- Candid Health: Unknown valuation, but "Best RCM" positioning suggests $500M-1B on $30-50M ARR
- Target exit: 15-20x reflects mature infrastructure business (vs 40x+ for high-growth patient engagement)

**Key Success Metrics:**
- $5M ARR: 10+ payer integrations, RTP processing live, <90-day sales cycle for specialty providers
- $15M ARR: 50-state licensing complete, cash-pay platform revenue >20% of total, 3+ telehealth platform partnerships
- $40M ARR: Payment integrity revenue >10% of total, NRR >120%, <$5k CAC across all segments
- $70M ARR: Two-sided network effects (payers paying for provider access), gross margin >70%, Rule of 40 >50%

---

### Scenario 2: Payment Integrity Platform (Pre-claim AI-powered)

**Target:** $60-80M ARR at 18-25x revenue multiple = $1.08-2B valuation

**Timeline:** 7-9 years (longer sales cycles, payer adoption slower)

**Revenue Model:**
- PMPY subscription: $3-8 PMPY across covered lives (70% of revenue)
- Savings share: 20-30% of medical cost savings (30% of revenue)

**Scaling Path:**

| Stage | ARR | Covered Lives | Payers/Employers | Key Milestones | GTM |
|-------|-----|---------------|-----------------|----------------|-----|
| Seed-Series A | $0-2M | 0-300k | 5-10 pilots | Pre-claim model validated, 8-10% cost savings demonstrated, mental health vertical live | Direct sales to self-funded employers |
| Series A-B | $2-12M | 300k-1.5M | 10-30 | Regional payer traction, AI provider communication live, 3+ verticals (mental health, chronic care, MSK) | TPA partnerships, benefits consultants |
| Series B-C | $12-35M | 1.5M-5M | 30-80 | National payer pilots (not contracts), pre-claim data network effects, provider satisfaction >85% | Payer sales team, actuarial consulting |
| Series C-D | $35-60M | 5M-10M | 80-150 | Claims prediction accuracy >90%, provider education automation, broker channel live | Self-service for small employers (<500 lives) |
| Growth | $60-80M | 10M-15M | 150-250 | Payer-provider network (embedded in contracts), chronic care management integration | Ecosystem (EHR integrations, care management platforms) |

**Unit Economics at Scale:**
- ARPU per covered life: $4-6 PMPY (blended subscription + savings share)
- CAC per payer: $50-150k (long sales cycles, pilots required)
- CAC payback: 12-18 months (contracted multi-year deals amortize)
- Gross margin: 75-80% (software + AI, minimal services at scale)
- NRR: 110-120% (covered lives growth + vertical expansion)
- LTV/CAC: 6-10x

**Comparables:**
- Cotiviti: Private equity-backed, estimated $1-2B revenue (30% savings beyond internal teams positioning)
- Optum payment integrity: Part of $226B UnitedHealth, estimated $3-5B revenue (8-10% medical cost savings)
- Codoxo: Private, estimated $20-50M ARR (Point Zero model, early-stage)
- Target exit: 18-25x reflects AI differentiation + pre-claim moat (vs 10-15x for traditional payment integrity)

**Key Success Metrics:**
- $2M ARR: 10+ self-funded employer contracts, 8%+ medical cost savings validated by actuaries
- $12M ARR: 3+ regional payer contracts, pre-claim intervention >30% of claims, provider NPS >60
- $35M ARR: AI provider communication handling >50% of outreach, claims accuracy improvement >15%, <$100k CAC per payer
- $60M ARR: 10M+ covered lives, network effects (payers sharing anonymized provider education data), gross margin >75%

---

### Scenario 3: Two-Sided Marketplace (Providers + Payers + Patients)

**Target:** $50-70M ARR at 25-35x revenue multiple = $1.25-2.45B valuation

**Timeline:** 8-10 years (network effects take longest but command highest multiples)

**Revenue Model Mix:**
- Provider subscription: $1,500-3,000/month for infrastructure access (40% of revenue)
- Transaction fees: $0.50-1.00 per payment transaction (35% of revenue)
- Payer access fees: $50k-500k annually for provider network access (15% of revenue)
- Patient financing revenue share: 2-3% of financed volume (10% of revenue)

**Network Effects Flywheel:**
1. Onboard specialty providers with RTP rails (value: faster payments, lower costs)
2. Bundle cash-pay infrastructure (value: 50-state licensing, compliance)
3. Aggregate provider network → sell payer access (value: pre-integrated, compliant providers)
4. Payer participation → better provider economics (RTP adoption, faster eligibility)
5. Patient financing layer → increased transaction volume (affordability)
6. Data network effects → payment integrity, claims prediction, contract optimization

**Scaling Path:**

| Stage | ARR | Providers | Payers | Patients/Month | Key Milestones | Network Effects |
|-------|-----|-----------|--------|---------------|----------------|-----------------|
| Seed-A | $0-3M | 0-200 | 0 | 0 | Provider acquisition, payments live | None (linear provider value) |
| Series A-B | $3-12M | 200-800 | 3-10 pilots | 50k | Payer integrations, eligibility bundling | Early (payers reduce provider costs) |
| Series B-C | $12-30M | 800-2,000 | 10-30 | 200k | Cash-pay platform, patient financing, payer access fees | Moderate (providers join for payer access) |
| Series C-D | $30-50M | 2,000-4,000 | 30-80 | 500k | Payment integrity, two-sided contracts (payers pay for network), data products | Strong (payers compete for provider access) |
| Growth | $50-70M | 4,000-6,000 | 80-150 | 1M+ | Marketplace dynamics (providers bid for patient volume), international | Dominant (platform = industry standard) |

**Unit Economics at Scale:**
- ARPU per provider: $12-18k annually (subscription + transactions)
- ARPU per payer: $200-500k annually (network access + data)
- CAC provider: $2-4k (PLG motion at scale)
- CAC payer: $80-150k (enterprise sales)
- Blended CAC payback: 6-10 months
- Gross margin: 75-80%
- NRR: 125-140% (network effects drive retention + expansion)
- LTV/CAC: 10-15x

**Comparables:**
- Waystar (network effects via provider + payer integrations): 7x revenue (public)
- Toast (restaurant two-sided marketplace): $13B market cap, $4B revenue = 3.25x (lower multiple, commodity risk)
- Shopify (merchant platform): 8-12x revenue depending on growth
- Target exit: 25-35x reflects two-sided network moat + data network effects (best-case scenario)

**Key Success Metrics:**
- $3M ARR: 200 providers, payments processing, no payer revenue yet (building supply side)
- $12M ARR: 10 payers paying for network access, provider acquisition cost declining (demand driving supply)
- $30M ARR: 30 payers, NRR >125% (network expansion, not just price increases), data products revenue >5%
- $50M ARR: Platform dynamics (payers competing for provider access, providers choosing payers), CAC payback <6 months

---

### Critical Assumptions Across Scenarios

**Must be true for $1B+ outcome:**
1. RTP adoption in healthcare reaches 20%+ of payments by 2030 (currently <1%)
2. Cash-pay/DPC market grows to $50B+ annually (currently ~$20B)
3. Payment integrity ROI remains >5x for pre-claim models (Codoxo validation holds)
4. Provider willingness to switch vendors for 20%+ cost savings (Stedi → FrontRunner pattern repeats)
5. Regulatory complexity (50-state licensing) is barrier, not blocker ($10-20M solvable)
6. Change Healthcare disruption window lasts 3-5 years (market doesn't reconsolidate to Waystar monopoly)
7. Epic doesn't bundle payments into EHR at zero marginal cost (biggest threat to patient payment layer)

**What breaks the thesis:**
- RTP adoption stalls: Payers refuse to adopt (working capital incentive to delay payments)
- Waystar acquires key competitors: Consolidates market before startup scales
- Stripe Health launches: Horizontal fintech with compliance bundled wins
- Epic bundles payments: Zero marginal cost EHR integration beats standalone
- Cash-pay stays <$30B: TAM too small for venture returns
- Regulatory costs exceed $50M: Not venture-backable, requires PE/strategic capital

---

## Open Questions

### What's the minimum network scale for RTP economics to work in healthcare?

**Priority:** P0 (investment-blocking)

**Investment Gate:** If RTP requires 50%+ payer adoption to deliver provider value, chicken-and-egg may be unsolvable in venture timeframe (7-10 years)

**What Would Change My Mind:**
- If single large payer (Blues plan, UHC) adopts RTP for 100k+ providers → Proves value without full network. Build payer-by-payer.
- If providers see value at 10-20% payer adoption (even partial cash flow improvement) → Economics work incrementally. Linear scaling path.
- If RTP requires 60%+ adoption to matter → Chicken-and-egg unsolvable. Pivot to cash-pay infrastructure (doesn't need payer adoption).

**How to Find Out:**
- Interview 10 specialty providers (infusion, imaging): "At what % of payments via RTP does cash flow improve meaningfully?"
- Model DSO improvement: 20% RTP adoption vs 50% vs 80% (is there step-function threshold or linear?)
- Survey payers on RTP roadmap: Who's piloting? Timeline to production? Covered lives?
- Test single-payer wedge: Contract with one Blues plan, measure provider adoption rate when 100% of that payer's payments are RTP

### Will Epic bundling kill patient payment infrastructure opportunities?

**Priority:** P0 (investment-blocking for patient payment layer)

**Investment Gate:** If Epic bundles payments at zero marginal cost, Cedar and competitors lose hospital market (70%+ of beds on Epic)

**What Would Change My Mind:**
- If Epic's "Cheers" remains optional module with separate pricing → Market remains competitive. Build better UX, undercut pricing.
- If Epic bundling causes anti-trust scrutiny (DOJ investigation) → Regulatory barrier to Epic expansion. Safe to compete.
- If patient payment opportunity shifts to ambulatory/physician groups (non-Epic) → TAM reduced but still venture-scale ($20-30B vs $100B+).
- If Epic bundling proves Epic owns hospital patient payments within 3 years → Avoid patient payment layer entirely. Focus on B2B infrastructure (RTP rails, cash-pay compliance).

**How to Find Out:**
- Interview 5 Epic health systems: Is Cheers bundled or add-on? Adoption rate? Satisfaction vs Cedar?
- Track Epic pricing: Is patient payment module being bundled into core contracts (renewed 2025-2026)?
- Survey Cedar, Phreesia on Epic threat: Are they losing deals? Retention declining at Epic sites?
- Analyze Epic's revenue model: Do they monetize patient payments via interchange or subscription? (Informs competitive pricing)

### How does Stripe Health positioning affect startup opportunity?

**Priority:** P1 (thesis-changing)

**Investment Gate:** If Stripe launches healthcare-compliant payment infrastructure with 50-state licensing bundled, developer ecosystem + brand moat may be insurmountable

**What Would Change My Mind:**
- If Stripe Health focuses on consumer payments (patient billing) not B2B rails (payer-provider) → Different market. Build B2B infrastructure, avoid consumer.
- If Stripe partnerships with compliance vendors (outsources 50-state licensing) → Compliance layer remains fragmented. Build better vertical integration.
- If Stripe pricing is generic (not healthcare-optimized) → Opportunity for healthcare-native competitor with PMPM or PMPY pricing (vs per-transaction).
- If Stripe Health launches and struggles (18-24 month stumble while learning healthcare) → Window to build moat before Stripe scales.

**How to Find Out:**
- Monitor Stripe Health announcements: B2B or consumer? Compliance bundled or partnered?
- Interview Stripe Health early customers: What use cases? Pricing? Integration complexity?
- Survey DPC/telehealth providers: Would they use Stripe Health or prefer healthcare-native vendor?
- Model Stripe's likely pricing: Can healthcare-specialized vendor compete on unit economics (PMPM vs per-transaction)?

### What's the realistic TAM for cash-pay infrastructure?

**Priority:** P1 (thesis-changing)

**Investment Gate:** If cash-pay remains <$30B market (vs $4T total healthcare), TAM may be too small for venture-scale outcome

**What Would Change My Mind:**
- If DPC grows to 50k+ practices by 2030 (currently ~12k) + telehealth stabilizes at $100B+ → Cash-pay TAM = $50-80B. Venture-scale.
- If employer direct contracting accelerates (20%+ of covered lives by 2030) → Cash-pay definition expands to direct payment networks. TAM = $200B+.
- If GLP-1 DTC market reaches $30B annually (Hims, Ro scaling) → Single vertical = venture-scale TAM. Build GLP-1 payment infrastructure, expand later.
- If cash-pay stays <$30B and confined to niche (concierge, elective) → Not venture-scale as pure-play. Must bundle with insurance payment infrastructure.

**How to Find Out:**
- Analyze DPC growth rate: 12k practices today, what's 5-year CAGR? Survey DPC startups (Hint Health, SteadyMD) on member growth.
- Model GLP-1 DTC market: Hims, Ro, Sesame revenue projections, market share, cash-pay percentage
- Survey employers on direct contracting: What % considering direct networks? Willingness to bypass insurance?
- Track telehealth cash-pay percentage: What % of Teladoc, Amwell visits are cash vs insurance? Trend direction?

### How do self-funded employers affect payment infrastructure opportunity?

**Priority:** P2 (opportunity-defining)

**Investment Gate:** Determines whether self-funded employer segment is wedge into broader market or niche opportunity

**What Would Change My Mind:**
- If self-funded grows to 30%+ of covered lives (currently ~20%) → Large enough segment to build dedicated infrastructure. Payment integrity + payment processing bundled for employers.
- If self-funded employers adopt RTP faster than commercial payers (direct incentive, no intermediary) → Wedge strategy: prove RTP with employers, expand to payers.
- If TPAs capture self-funded payment infrastructure (bundled into admin services) → No startup opportunity, TPA moat too strong.
- If self-funded stays <25% of market and TPA-dependent → Niche opportunity, not venture-scale on its own. Focus on commercial payers instead.

**How to Find Out:**
- Survey self-funded employers (100-5,000 employees): Do they control payment infrastructure or delegate to TPA?
- Interview TPAs: Are they investing in payment infrastructure or outsourcing? Open to white-label partnerships?
- Model self-funded growth rate: Regulatory drivers (ACA, MA burden), employer adoption trends
- Test employer willingness to pay: $3-8 PMPY for payment integrity + RTP infrastructure—compelling ROI vs TPA fees?

### Will payment integrity commoditize via AI?

**Priority:** P2 (opportunity-defining)

**Investment Gate:** If every RCM vendor adds AI payment integrity, Codoxo-style pre-claim opportunity may have 2-3 year window before commoditization

**What Would Change My Mind:**
- If pre-claim requires proprietary data (provider behavior, payer policies) that's hard to replicate → Network effects moat. First-mover advantage sustainable.
- If AI payment integrity becomes table stakes but execution matters (accuracy, provider satisfaction) → Opportunity for best-in-class product, not pure commodity.
- If LLMs commoditize policy interpretation but payer relationships remain moat → Services-led model (sell to payers, resist RCM vendor commoditization).
- If payment integrity fully commoditizes within 3 years → Avoid as standalone, bundle into broader platform (RTP rails + payment integrity).

**How to Find Out:**
- Survey RCM vendors (Waystar, Change, Availity): Are they building pre-claim payment integrity? Timeline?
- Benchmark AI payment integrity accuracy: GPT-5 on claims prediction vs Codoxo proprietary models—how big is gap?
- Interview payers: Do they view payment integrity as differentiated or commodity? Willingness to pay for accuracy improvement?
- Track Codoxo competitive moat: Are they signing multi-year exclusive contracts? Building data network effects?

---

## Appendix

### Supporting Evidence

| Date | Source | Key Insight |
|------|--------|-------------|
| 2025-12-05 | [[Matt Swatzell and Virtue]] | Float not material (basis points). Real value: admin savings (prompt pay penalties, MA stars, re-adjudication). RTP $0.02 vs wire $20. |
| 2025-11-25 | [[Proto __ Virtue]] | Cash-pay infrastructure gap. Systems tied to insurance rails. Clinics paying $100K+ for Frankenstein stacks. 50-state proxy need. |
| 2025-12-08 | [[Virtue _ Autonomy]] | Stedi → FrontRunner switch (75¢ vs 11-12¢). Vendor economics poorly understood. Migration creates immediate savings. |
| 2025-12-01 | [[Sathya __ Emre]] | Health plan positioning: need to own decision-making vs being vendor. Level-funded market avoiding MA regulatory burden. |
| 2025-12-20 | [[DS_Point_Zero]] | Pre-claim payment integrity: provider education before claims created. Up to 40% overpayment reduction, $12-16 PMPY savings, 42% admin cost decrease, 20-30x efficiency vs post-claim. $400B fraud baseline. Transforms adversarial to collaborative relationships. |
| 2025-12-20 | Web Research | Waystar: $7.05B market cap, $1.04B revenue, 50% U.S. patient coverage. Cedar: $3.2B valuation, $350M raised. Change Healthcare: 50% of U.S. claims, post-cyberattack customer losses. Payment integrity market: $3.7B (2024) → $9.3B (2033), 10.8% CAGR. Healthcare admin spending: $1T annually, $200B on financial transactions. RTP Network: 550 FIs, $10M limit. FedNow: 650 FIs, $500k limit (→$1M summer 2025). Transaction costs: $12-19 per claim average, $7-10 simple, $35-40 complex. |
| 2025-12-20 | [[Machinify Completes Acquisition of Performant Healthcare, Accelerating Intelligent Healthcare Payments]] | Machinify acquires Performant for ~$670M. Combined entity serves 75+ health plans, 170M+ lives. Validates platform strategy: end-to-end intelligence from contracts through claims, spanning commercial and government payers. Full-stack approach: pre-claim prevention + adjudication detection + post-payment recovery. |
| 2025-12-20 | [[(15) Post  LinkedIn]] | Health insurance float only 0.3x premiums vs 2.5x P&C, 10x life insurance. Investment income only 20% of health insurance profit vs 70% P&C, 90% life. Delayed payment is intentional float strategy, not tech problem. Validates thesis: value is admin savings, not payment acceleration. |
| 2025-12-20 | [[Fivetran and dbt Labs Unite to Set the Standard for Open Data Infrastructure  Press  Fivetran]] | Fivetran + dbt merger approaching $600M ARR. Open data infrastructure: unified data movement + transformation, interoperable across compute/AI layers. Healthcare lags enterprise data infrastructure by 3-5 years but faces same forces. |
| 2025-12-20 | [[Data Aggregation RFP Final]] | NC State Health Plan RFP: 572K members, 500GB data (demographic, medical, pharmacy, provider). State plans lack internal analytics capability, need vendor for "best in class population health analysis." Validates analytics-as-a-service wedge for regional payers and self-funded employers. |

### Related Theses

- [[Healthcare-Vertical-Integration-Moats]] — Payment rails enable vertical integration plays
- [[PBM-Pharmacy-Economics]] — Specialty pharmacy payment complexity creates demand
- [[Systems-of-Record-AI-Era]] — Payment reconciliation requires canonical data
- [[AI-Native-Healthcare-Services]] — Services arbitrage enabled by payment infrastructure automation

### Market Sizing Detail

**Total Healthcare Payments Flow:**
- $4.5 trillion total U.S. healthcare spending (2023)
- ~$1 trillion flows through commercial payment infrastructure (excludes direct government Medicare payments)
- Administrative costs: ~$1 trillion (22% of total spending)
- Financial transaction costs: ~$200 billion (claims processing, eligibility, payment reconciliation)

**Addressable Markets by Segment:**
- Payment processing/rails: $50-70B (transaction fees, platform fees, interchange)
- Payment integrity: $3.7B → $9.3B by 2033 (10.8% CAGR)
- Eligibility verification: $5-8B (included in RCM market)
- Patient payments: $80-100B in patient responsibility (opportunity = 1-3% of volume = $800M-3B)
- Cash-pay/DPC: $20-30B today → $50-80B by 2030 (telehealth, DPC, employer direct contracting)

**Revenue Opportunity by Business Model:**
- Transaction-based (RTP rails): $0.50-1.00 per transaction × 9B claims = $4.5-9B annual opportunity at 100% penetration
- Platform fees (cash-pay infrastructure): 12k DPC practices × $24k annual ARPU = $288M today → $1.2B at 50k practices
- PMPY (payment integrity): $4-8 PMPY × 180M commercial covered lives = $720M-1.44B at 100% penetration
- Interchange (cash-pay transactions): 1-2% × $50B cash-pay spend = $500M-1B

### Evolution Log

- 2025-12-21: Created. Core insight: float irrelevant, admin savings are the value. RTP creates margin opportunity.
- 2025-12-20: Added pre-claim payment integrity evidence (Codoxo Point Zero). Thesis strengthened: admin savings opportunity extends beyond just payment rails to entire payment lifecycle. Pre-claim intervention achieving 40% overpayment reduction validates that moving "further left" creates outsized value. Added startup opportunity #3.
- 2025-12-20: Upgraded to gold standard (500+ lines). Added Competitive Landscape (300+ words, 4 sub-categories: payment rails, eligibility/data, patient payments, payment integrity. Named players: Waystar $7B market cap, Cedar $3.2B valuation, Change Healthcare 50% market share, Cotiviti/Optum payment integrity leaders, Candid Health automation-first RCM). Added GTM Considerations (market segmentation by buyer type: providers/payers/cash-pay, wedge strategy 4-phase, champion identification, timing triggers, competitive positioning against 5 incumbent categories). Added Path to $1B+ (3 scenarios with ARR targets, stage tables, unit economics: Scenario 1 payment infrastructure $70-100M ARR = $1.05-2B valuation, Scenario 2 payment integrity $60-80M ARR = $1.08-2B valuation, Scenario 3 two-sided marketplace $50-70M ARR = $1.25-2.45B valuation). Reformatted Open Questions to P0/P1/P2 format with investment gates (6 questions: RTP network scale P0, Epic bundling threat P0, Stripe Health P1, cash-pay TAM P1, self-funded employers P2, payment integrity commoditization P2). Expanded market sizing detail in appendix. Total thesis: 570 lines, matching Agent-Scaling-Architecture quality bar.
- 2025-12-20: Added market validation evidence strengthening core thesis. Machinify's $670M Performant acquisition confirms platform economics: 75+ health plans, 170M lives, full-stack prevention-detection-recovery model validates end-to-end intelligence approach. Float economics analysis quantifies intentional delay strategy: health insurance 0.3x premiums (vs 2.5x P&C), only 20% of profit from investment income. This confirms payment acceleration alone won't work—value must come from reducing $200B admin friction. Fivetran+dbt $600M ARR merger demonstrates open data infrastructure pattern healthcare will follow with 3-5 year lag. NC State Health Plan RFP (572K members, 500GB data, outsourcing analytics) validates that regional payers and self-funded employers lack internal capability, creating analytics-as-a-service wedge. Three new paragraphs added to "How The Market Works" section with specific numbers: $670M deal size, 0.3x float ratio, $600M combined ARR, 572K member RFP scope.
