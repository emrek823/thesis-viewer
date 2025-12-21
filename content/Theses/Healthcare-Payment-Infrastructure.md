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

**Performant** (Nasdaq: PHLT, ~$220M market cap)
- Saved clients $2B+ over three years via payment integrity
- $300B+ addressable payment integrity space (1 in 5 claims processed incorrectly)
- $4-5B serviceable revenue opportunity: Federal ($500M-1B), State ($300-500M), Commercial ($3.2-3.5B)
- Commercial growth: 45% 3-year CAGR, 103 implementations in 36 months, 4 new logos in 2024
- 5 of top 7 national payers as clients, ~20% of mid-market already captured
- Targeting 20% Adj. EBITDA margins via AI/NLP workflow gains

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
| 2025-12-21 | [[Performant Investor Overview]] | $300B+ payment integrity space (1 in 5 claims wrong). $4-5B serviceable opportunity split: Federal $500M-1B, State $300-500M, Commercial $3.2-3.5B. Performant at 45% 3-yr commercial CAGR, 103 implementations. Targeting 20% EBITDA via AI/NLP. |

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
- 2025-12-21: Added Performant market sizing from investor deck. $300B+ payment integrity space (1 in 5 claims wrong). Serviceable opportunity $4-5B split: Federal ($500M-1B), State ($300-500M), Commercial ($3.2-3.5B). Growth validation: 45% 3-yr commercial CAGR, 103 implementations, targeting 20% EBITDA via AI/NLP. Added to Competitive Landscape.
