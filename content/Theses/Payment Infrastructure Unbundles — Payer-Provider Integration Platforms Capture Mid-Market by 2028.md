## The Take

**Consensus:** Payment infrastructure is mature and locked down. Cotiviti/Optum/Lyric own 90%+ of claims editing with 1.2% churn. Payer sales cycles run 12-36 months. Large nationals build in-house. AI startups cannot break the distribution moat — "I don't get in trouble for hiring IBM."

**Today:** The consensus is right about the oligopoly but wrong about the wedge. The $9B payment integrity market, $150B RCM market, and $20B coding market are converging into a single payment infrastructure problem — and the convergence point is payer-provider integration, not either side alone. Healthcare AI spend tripled to $1.4B with 89% directed at back-office revenue maximization, creating an escalating arms race between provider coding AI and payer denial AI. But this arms race is a symptom, not the opportunity. The opportunity is building the integration layer between both sides: documentation flows into coding, coding flows into claims submission, claims submission meets payment integrity rules, and denials flow back into documentation. Today these are separate vendor stacks with separate data. The startup that stitches them together — starting mid-market where switching costs are lowest and pain is highest — captures a platform position neither side's incumbents can replicate.

Three structural shifts create the opening:

1. **Pre-pay eclipses post-pay.** Payment integrity is inverting from 70/30 post-pay to 30/70 pre-pay by 2030. Post-pay recovers only $0.40 per $1 after vendor fees with a 3% success rate. 72% of payers are investing upstream. Pre-pay grew from "virtually nonexistent" to 40% in a decade. But pre-pay requires "deep integration with core claims infrastructure" — the exact capability that legacy vendors lack and that creates a beachhead for platforms built on integration.

2. **Mid-market is the entry point.** HealthEdge processes 350M+ claims annually and is winning mid-market CAPS migration while top-3 payers (UNH, Elevance) stay on homegrown systems — 120M+ lives off the table for vended platforms. But 30-35% of the CAPS market is "up for grabs." Mid-market plans are expanding into managed care products (D-SNP, MLTSS, LTSS) that require modern infrastructure. Cloud migration is all-or-nothing — partial migration "doesn't fix anything." 80% of payers expect to increase cloud investments.

3. **The coding-to-claims pipeline breaks open.** Ambient scribes commoditized (67% would switch vendors, Epic bundling at $80/month vs. startup $600/month), but the real value migrated downstream: coding, CDI, and claims compliance. Ambience beats physicians by 27% on ICD-10 coding. CodaMetrix serves 220 hospitals through Epic Toolbox. Mid-cycle denials are the #1 RCM problem — 70% of denials originate at charge capture through claim submission. Whoever owns the documentation-to-payment pipeline owns the revenue cycle.

The arms race between provider AI (upcoding accuracy) and payer AI (denial sophistication) is real but self-limiting. UnitedHealthcare is already tightening documentation requirements for radiology reimbursement. Payer-side denial AI creates a financial incentive: "the payer can be ever slightly more efficient at avoiding paying claims than a provider can be at resolving claims." But this dynamic expands TAM for integration platforms that sit between both sides — pre-submit accuracy on the provider side reduces denials before they happen, while pre-pay AI on the payer side catches errors upstream. The winner is the platform that reduces friction for both sides, not the one that wins the arms race for either.

**In 3-5 years:** Mid-market payers run on cloud-native CAPS with integrated pre-pay AI. Provider documentation-to-claims pipelines are 80%+ automated for routine encounters. The integration layer between payer and provider systems — not either system alone — becomes the defensible platform. Cotiviti/Optum retain enterprise through switching costs but lose mid-market to integrated platforms. Epic captures 42% of the provider-side market with native tooling (Penny launching Nov 2026), but the 58% non-Epic market remains open. 2-3 platforms dominate the payer-provider integration layer.

**How this evolved:**
- *2026-01-27:* **REBUILD** — Consolidated from 8 component theses (Payer Infrastructure Modernizes, HealthEdge Platform, PA AI Sales Cycles, Payment Integrity Second-Pass, Payment Integrity Consolidates, Clinical Documentation AI, Ambient Scribes to RCM, RCM AI Arms Race). Reframed from payer-vs-provider to integration-first. Contrarian threats: PI oligopoly may be impenetrable organically (HIGH), Epic bundling (HIGH), arms race could compress TAM (MEDIUM).

---

## Bull Case

### Payment Infrastructure Convergence
- [ ] **Pre-pay shift creates integration wedge** — 72% of payers moving upstream; pre-pay requires "deep integration with core claims infrastructure" that legacy vendors lack ([[sr-technical-product-manager-at-optum-_-cotiviti-holdings-in-cebd2ee5]])
- [ ] **Post-pay economics broken** — 3% success rate, $0.40 per $1 after vendor fees, 70% false positive rate wasting 210,000 analyst hours at UHG alone ([[sr-technical-product-manager-at-optum-_-cotiviti-holdings-in-cebd2ee5]])
- [x] **Pre-pay at 40% and growing** — From "virtually nonexistent" 10 years ago; heading to 60%+ by 2030 ([[etk-payment-integrity-2024-915ce9fb]])
- [x] **Machinify proves AI-native PI works** — $27M ARR, 70% growth, 60%+ audit hit rate vs. 25-30% status quo, 4 of top 10 payers ([[machinify-investor-presentation---122-77957357]])
- [x] **KLAS confirms incumbent gaps** — "Cotiviti & Optum value diminished by gaps in support & service quality" ([KLAS Payment Integrity 2025](https://klasresearch.com/report/payment-accuracy-and-integrity-2025-shifting-focus-from-payment-recovery-to-error-prevention/3736))
- [x] **Second-pass vendor stacking is proven entry wedge** — "We're not going to put you in a first-pass position, but you can look at the same data 30 days after Cotiviti does it...pay you a higher fee" at 20:1 ROI ([[tegus_cotiviti-holdings-inc_133802]])

### Mid-Market Platform Opportunity
- [x] **HealthEdge winning CAPS migration** — "Best growth trajectory" per Lyric VP; SS&C competitor concedes HealthEdge "best positioned"; 350M+ claims processed ([[mar-11-2025-tegus_healthedge_123729_vice-president-of-emergi-6a8aa53b]])
- [x] **30-35% of CAPS market "up for grabs"** — Jump balls as mid-market plans migrate from legacy systems ([[mar-04-2025-tegus_healthedge_122824_former-sr-director-produ-e63cc578]])
- [x] **VBC drives migration urgency** — "I can get the value-based care quicker today with HealthEdge versus more the cumbersome way that's TriZetto" — HealthEdge stood up in 6-7 months vs. TriZetto ~9 months, $5-10M cheaper ([[mar-12-2025-tegus_healthedge_123885_healthcare-innovation-an-2f3d9330]])
- [x] **Extreme stickiness once adopted** — Switching away requires "somebody would have had to have been killed" ([[tegus_healthedge_120488_senior-director-product-development--ae7bcb9c]])
- [x] **80% of payers increasing cloud investment** — ~30% spend increase expected; cloud eliminates surge capacity costs ([[tegus_healthedge_124120_vice-president-of-emerging-products--af4fb519]])

### Provider-Side Revenue Cycle Automation
- [x] **Healthcare AI spend $1.4B, 89% back-office** — Sector adopted AI 2.2x faster than broader economy; spend tripled in one year ([[2026-01-26-whats-driving-the-healthcare-cost-crisis]])
- [x] **Ambience beats physicians 27% on ICD-10 coding** — Peer-reviewed OpenAI reinforcement fine-tuning study ([[ambience-announces-openai-powered-medical-coding-model]])
- [x] **Mid-cycle denials = #1 RCM problem** — "70% of Medicare and United deny for medical necessity, coding issues" — and 70% of tech investment targets mid-cycle ([[Senior Director of Revenue Cycle Management at WellSky _ Waystar Holding Corp. _ Tegus]])
- [x] **UCSF validates revenue uplift** — AI scribe adopters generate +1.81 weekly RVUs, +$3,044 annual Medicare revenue per physician, no rise in billing denials ([[Sources/Browser-History/2026-01-20-ai-scribes-may-boost-rvus-but-also-raise-health-co]])
- [x] **RCM "first to agentify"** — "The claim is either right or wrong — it's objective. It's verifiable." — Eric Larsen, TowerBrook ([[2026-01-06-eric-larsen-on-the-emergence-and-potential-of-ai-i]])
- [x] **CodaMetrix at scale in Epic** — 220 hospitals, 50M annual outpatient visits via Epic Toolbox ([[Sources/Browser-History/2026-01-26-codametrix-epic-toolbox]])
- [x] **Alaffia proves payer-side AI claims management** — 20x throughput, 40% savings on claims review ([[2026-01-06-alaffia-ai-powered-claims-management-for-healthca]])
- [x] **$25M annual loss from improper CDI at single system** — UF Health; $3M missed from just two CPT codes; 98% of encounters underbilled ([[Sources/Granola/Horus __ Virtue-2025-12-08_09-30-15]])

### Distribution & GTM
- [x] **Ambient-to-RCM expansion proven** — "A year ago the message was 'Let's give providers back quality of life.' That message is completely gone now. Now, we're looking at how can these code, how can these be CDI tools" — CMIO, LifePoint ([[Chief Medical Informatics Officer (CMIO), VP & AI_RCM_CDI Physician Executive at LifePoint Health _ Abridge _ Tegus]])
- [x] **WellSky $4M year-1 revenue pickup from ambient-to-coding** — One-time reimbursement capture from coding accuracy improvement ([[Senior Director of Revenue Cycle Management at Wellsky _ Abridge _ Tegus]])
- [x] **E&M level uplift validated** — "Level of service codes changed from level threes to level fours" justifying AI cost ([[Clinical Director of Informatics & Analytics at John Muir Health _ Ambience Healthcare, Inc. _ Tegus]])

---

## Bear Case

### 1. PI Oligopoly May Be Impenetrable Organically (HIGH RISK)
- [x] **Cotiviti/Optum/Lyric own 90%+ with 1.2% revenue churn** — "ClaimsXten and Optum CES own ~90% of the market, and have never churned a customer historically" ([[etk-payment-integrity-2024-915ce9fb]])
- [x] **Content moat is massive** — Optum/Lyric: 130+ knowledge packs vs. 13 at HealthEdge/Burgess. "$100M+ annual savings gap" takes years to close. "Editors are more based on the content than they are the system performance" ([[tegus_healthedge_124120_vice-president-of-emerging-products--af4fb519]])
- [x] **"I don't get in trouble for hiring IBM"** — Payer risk aversion structurally favors incumbents ([[tegus_cotiviti-holdings-inc_133796_vice-president-of-analyti-b20a1937]])
- [x] **Acquisition IS the path** — "I would be looking at the scrap heap of companies that are financially tapped out and trying to find who has a contract with Kaiser... I'm buying the contract and the integration" ([[mar-03-2025-tegus_optum_122667_former-vp-of-partnerships-mer-395071d8]])
- [x] **Cotiviti is Everest Group Leader 2025** — Highest-designated Leader in Payment Integrity PEAK Matrix; not a sleeping incumbent ([Everest Group 2025](https://www.cotiviti.com/insights/cotiviti-named-leader-payment-integrity))

### 2. Epic Bundling Threat (HIGH RISK)
- [ ] **Epic Penny launches autonomous coding Nov 2026** — Starting with ED and radiology; 42% market share ([[Sources/Browser-History/2026-01-26-epic-penny]])
- [x] **Epic Art bundles ambient scribe at ~$80/month** — vs. startup $600/month; 67% of providers would switch vendors ([[abridge-_-interviews-_-tegus-company-profile-5ebf5e4a]])
- [ ] **If Epic bundles coding as they did ambient** — Startup opportunity in Epic shops shrinks dramatically
- **Counter:** 58% of hospitals are NOT on Epic. Non-Epic market is the real startup opportunity.

### 3. Payer Sales Cycles Block Startups (HIGH RISK)
- [x] **9-36 month buying cycles** — "Best case 9 months. Medium case 18-24 months. Very commonly 36+ months" ([[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]])
- [x] **Market won't close until 2035** — "15-ish years to hit 70% penetration... this market won't be closed or done until 2035" ([[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]])
- [x] **Large payers default to in-house** — "We definitely try to build it in-house" — UHC Senior Director; even internal efforts stall on politics ([[tegus_anterior_144141_senior-director-digital-product-at-uni-1689cd9b]])
- [x] **PA viewed as table stakes** — "Prior auth is just an operation improvement. It's not the game changer" — Elevance Sr. Director ([[Senior Director - Product, GTM, and Growth Strategy at Elevance Health Inc. _ Anterior _ Tegus]])

### 4. Arms Race Could Compress TAM (MEDIUM RISK)
- [x] **Payers counter-escalate** — "These providers are getting really good at their first-time pass. How do we reverse engineer now to ensure our authorization systems are better?" ([[Senior Vice President of Innovation at PAM Health _ Charta Health _ Tegus]])
- [x] **UHC tightening in real-time** — New radiology documentation requirements starting April 2026 ([[unitedhealthcare-raises-bar-for-doctors-to-get-paid-for-radiology-services]])
- [x] **Structural incentive for payer friction** — "There's a financial incentive for payers to avoid paying claims... that arbitrage results in financial benefit for commercial payers" ([[Former Vice President Of Enterprise Analytics at R1 RCM _ Waystar Holding Corp. _ Tegus]])
- **Measured view:** Arms race expands TAM for integration platforms that reduce friction for both sides, but compresses TAM for single-side point solutions. Net effect: TAM shifts, not shrinks.

### 5. Top Payers Stay In-House (HIGH RISK -- CONFIRMED)
- [x] **120M+ lives off the table** — "United and Elevance Carelon are too proud to stop using homegrown systems" ([[tegus_healthedge_124120_vice-president-of-emerging-products--af4fb519]])
- [x] **Elevance investing heavily** — MLR 91.26% (up 175bps YoY); Carelon investing "several hundred million" in AI ([[Sources/Market-Research-PDFs/elv-3q25-earnings-follow-up_-conversation-without-clarity-on-4f2c7483]])
- **Counter:** Mid-market is the entry, not the ceiling. HealthEdge proves mid-market wins compound.

### 6. Payer AI Resistance & Legacy Platform Leapfrog (MEDIUM RISK)
- [ ] **Payers "least enthusiastic about AI"** — Menlo survey confirms payer resistance to AI adoption; if payers don't adopt, payment infrastructure modernization timeline extends ([[AI in Care Delivery (Virtue)-2025-10-27]])
- [ ] **AI could let legacy CAPS leapfrog without migration** — "Practically all rules-based opportunities exhausted" but AI fills gap for COBOL-based platforms (TriZetto, SS&C), potentially slowing cloud-native migration to HealthEdge ([[mar-04-2025-tegus_healthedge_122824_former-sr-director-produ-e63cc578]])

**What would have to be true for you to be wrong?** The PI oligopoly would need to maintain 90%+ share through 2028 while simultaneously closing their AI gap — meaning Cotiviti successfully acquires and integrates 2+ AI-native startups within 24 months, AND Epic's Penny captures >30% autonomous coding market within 12 months of launch, AND mid-market payers extend incumbent contracts despite AI alternatives. This combination is possible but requires incumbents to execute on M&A integration (historically rare), Epic to move beyond ED/radiology fast (against their modular launch pattern), and mid-market plans to ignore 60%+ hit rate improvements from AI-native platforms. The most likely failure mode is not that these dynamics don't exist, but that they play out slower than venture timelines allow — the 2035 penetration timeline from the Change Healthcare expert is the strongest bear signal.

---

## Timeline

**Now - 2026:**
- Pre-pay/post-pay reaches ~50/50 split; Rawlings-Machinify and Cotiviti-Edifecs integrations play out
- AI-native vendors establish second-pass positions at mid-market payers; first $50M+ ARR announcement
- Epic Penny launches Nov 2026 for ED/radiology coding — watch initial accuracy metrics
- Ambient-to-RCM expansion accelerates: Ambience, Abridge, Commure ship coding/CDI modules
- Mid-tier payers begin cloud CAPS migration; HealthEdge targets Medicaid beachhead wins
- Entry point: Series A/B startups at the payer-provider integration layer with mid-market traction

**2027 - 2028:**
- First AI-native vendor migrates from second-pass to first-pass at a regional Blue plan
- Pre-pay becomes standard infrastructure for top-20 payers; post-pay market compresses measurably
- Epic decides: expand Penny to all specialties or partner. Non-Epic market consolidates around 2-3 platforms
- First major commercial CAPS migration completes (3M+ lives on cloud)
- Market consolidation: PI startups that haven't reached scale get acquired by incumbents (New Mountain / Cotiviti pattern)
- RCM platform wars resolve: 2-3 end-to-end documentation-to-billing platforms dominate

**2029+:**
- 30/70 post-pay/pre-pay market structure established
- Cloud becomes default for mid-market payers; HealthEdge or successor dominates mid-market CAPS
- Payer-provider integration layer is recognized as distinct category with $5B+ TAM
- Content moat erodes as AI reverse-engineers from prior results; value shifts to integration depth
- Autonomous coding handles 80%+ of routine encounters; humans for complex cases only
- Market structure: UNH/Elevance in-house, 2-3 integrated platforms for mid-market, Epic-native for 42% of providers

---

## Startup Opportunities

**1. Payer-Provider Integration Platform (Mid-Market)**
- Why this follows: Pre-pay requires claims infrastructure integration; providers need pre-submit accuracy; the gap between these workflows is the platform opportunity
- Wedge: Mid-market payers (<1M lives) and mid-size health systems (non-Epic) where switching costs are lowest and incumbent coverage is weakest. Start with pre-submit claims accuracy on provider side, expand to pre-pay on payer side
- Risk: Requires selling to both payer and provider — extremely hard GTM. Epic could expand Penny to cover the provider side. Cotiviti acquisition closes the payer-side gap

**2. AI-Native Payment Integrity (Second-Pass Entry)**
- Why this follows: Second-pass vendor stacking is proven path; $100M+ annual savings gap exists; mid-market payers underserved by Cotiviti
- Wedge: Mid-market payers (<1M lives) frustrated with incumbent miss rates; 20% contingency for incremental finds creates sustainable economics
- Risk: Acquisition IS the path — organic growth to first-pass unproven. Content libraries take decades to build. "I don't get in trouble for hiring IBM"

**3. Specialty Coding AI (Non-Epic)**
- Why this follows: 58% of hospitals are NOT on Epic; GPT-4 still only 34% ICD-10-CM accuracy; specialized fine-tuning beats general models
- Wedge: Complex specialties (oncology, cardiology) where Epic Penny won't launch first; channel through RCM consulting partners (E4 Health, Huron)
- Risk: Ambience already outperforms physicians 27%; Epic could expand faster than expected; window closing

**4. Prior Authorization Automation (Specialty Pharmacy)**
- Why this follows: Specialty pharmacy is "the only growth engine" for health systems; PA is the bottleneck; market is greenfield with <12 vendors deployed
- Wedge: Health system specialty pharmacies with high PA volume; Latent/Plenful at ~$400K/yr per IDN
- Risk: Epic building PA natively in Willow; CPOs resist FTE reduction narratives; 12+ month implementation timelines

**5. Claims Editing Content Platform (Picks-and-Shovels)**
- Why this follows: "$100M+ annual savings gap" between leaders and laggards; content is the moat, not AI compute
- Wedge: Specialty-specific knowledge packs that AI-native PI vendors and HealthEdge integrate
- Risk: Optum/Lyric's 130+ pack moat; expensive to build; requires deep clinical expertise

---

## Watch For

**If RIGHT:**
- AI-native PI vendor announces first-pass contract at top-20 payer (proves upmarket migration)
- Cotiviti/Optum reports slowing growth or market share loss in earnings
- HealthEdge announces 3+ Medicaid wins in different states
- A startup raises $100M+ Series C specifically for payer-provider integration layer
- Provider pre-submit accuracy tools demonstrate 50%+ denial rate reduction at scale
- Epic Penny accuracy < 85% at launch, creating startup opportunity in remaining market

**If WRONG:**
- Cotiviti acquires 2+ AI-native vendors and successfully integrates within 24 months
- Epic Penny captures >30% autonomous coding market within 12 months of launch
- Second-pass PI vendors fail to migrate upmarket after 3+ years in market
- Mid-market payers extend incumbent contracts despite AI alternatives being available
- Payer sales cycles show no compression — still 18-36 months in 2028
- Provider-side coding AI triggers regulatory backlash (CMS crackdown on AI-driven upcoding)

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2026-01 | [[sr-technical-product-manager-at-optum-_-cotiviti-holdings-in-cebd2ee5]] | Operator | "$9B market, 70/30 -> 30/70 shift by 2030, post-pay 3% success rate" |
| 2026-01 | [[tegus_healthedge_124120_vice-president-of-emerging-products--af4fb519]] | Operator | "Half the market still to go; content moat $100M+ savings gap; 130+ vs 13 knowledge packs" |
| 2026-01 | [[mar-11-2025-tegus_healthedge_123729_vice-president-of-emergi-6a8aa53b]] | Operator | "HealthEdge best growth trajectory; no new TriZetto wins observed" |
| 2026-01 | [[mar-04-2025-tegus_healthedge_122824_former-sr-director-produ-e63cc578]] | Operator | "30-35% of CAPS market up for grabs; HealthEdge best positioned" |
| 2026-01 | [[mar-12-2025-tegus_healthedge_123885_healthcare-innovation-an-2f3d9330]] | Operator | "VBC quicker with HealthEdge; 6-7 months vs 9 months TriZetto; $5-10M cheaper" |
| 2026-01 | [[tegus_healthedge_120488_senior-director-product-development--ae7bcb9c]] | Operator | "Press of a button for new contract setup; switching = 'somebody killed'" |
| 2026-01 | [[mar-13-2025-tegus_healthedge_124064_former-director-alignmen-1c57627e]] | Operator | "Mid-sized plans migrating for D-SNP, MLTSS products; large plans too sticky" |
| 2026-01 | [[apr-16-2025-tegus_optum_129158_technology-executive-strategy-3746fdf2]] | Operator | "Healthfirst (2.8M lives) chose HealthEdge for core admin + care management; eight figures annually" |
| 2026-01 | [[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] | Operator | "Payer buying cycle 9-36 months; <2% PA TAM using AI; market won't close until 2035" |
| 2026-01 | [[Founder, Managing Partner at Si'Quent Engineering _ Cohere Health _ Tegus]] | Operator | "12-36 months even for cloud-native; Coheres/Anteriors for smaller payers, Change for large" |
| 2026-01 | [[tegus_anterior_144141_senior-director-digital-product-at-uni-1689cd9b]] | Operator | "UHC tries to build in-house; 12+ months accelerator to pilot sign-off at UHC" |
| 2026-01 | [[Senior Director - Product, GTM, and Growth Strategy at Elevance Health Inc. _ Anterior _ Tegus]] | Operator | "Large payers view PA as table stakes operations, not strategic" |
| 2025 | [[tegus_cotiviti-holdings-inc_133802]] | Operator | "Second-pass 30 days after Cotiviti...pay higher fee for incremental finds" |
| 2025 | [[tegus_cotiviti-holdings-inc_133796]] | Operator | "20:1 ROI; $100M+/year savings gap; content moat since Burgess sale" |
| 2025 | [[tegus_cotiviti-holdings-inc_133796_vice-president-of-analyti-b20a1937]] | Operator | "I don't get in trouble for hiring IBM"; New Mountain rolling up Machinify/ClaimLogiq/Rawlings |
| 2025 | [[tegus_cotiviti-holdings-inc_133802_regional-vice-president-p-82d88ab7]] | Operator | "Organic growth tough; acquisitions + partnerships for distribution; 5% medical spend opportunity" |
| 2025 | [[tegus_machinify_92675_evp-of-operations-at-cotiviti-holdings-49eeb94f]] | Operator | "Cotiviti $600M/yr prospective PI; Lyric at 70-80% of top 25; Machinify reverse-engineering content" |
| 2025 | [[mar-03-2025-tegus_optum_122667_former-vp-of-partnerships-mer-395071d8]] | Operator | "Optum/Lyric/HealthEdge = 90%+ of market; buy the contract not the tech" |
| 2025 | [[mar-03-2025-tegus_optum_122667]] | Operator | "Primary edit based 100% on care guidelines — fairly static" |
| 2025 | [[mar-03-2025-tegus_optum_122675]] | Operator | "Payers <1M lives writing their own edits — underserved segment" |
| 2025 | [[tegus_optum_137438_vice-president-of-product-management-at-c-fde59493]] | Operator | "Post-pay 20% contingency vs 10% pre-pay; 400 data elements = 3-4 month onboarding" |
| 2025 | [[june-13-2025-tegus_3m-health-care_137939_advisor-director-of-31bc0d82]] | Operator | "Milliman repricing $200-250K per market; relativity metrics drive network contracting" |
| 2025 | [[etk-payment-integrity-2024-915ce9fb]] | Research | "ClaimsXten/Optum CES 90% claims editing; Cotiviti/Change 80% post-pay PI; 1.2% churn; pre-pay at 40%" |
| 2025 | [[cotiviti-preferred-equity-04132023-copy-412e95ac]] | Research | "1.2% revenue churn; 9-12 month implementation; high ROI, long-term contracts" |
| 2025 | [[machinify-investor-presentation---122-77957357]] | Company | "$27M ARR, 70% growth, 60%+ audit hit rate, 4 of top 10 payers" |
| 2025-12 | [[unh-2q25-follow-up_-a-resetting-of-process-financials-and-t-9c3c18d4]] | Research | "VBC margin 1% in 2025 down from 5% in 2023; V28 $11B headwind" |
| 2026-01 | [KLAS Payment Integrity 2025](https://klasresearch.com/report/payment-accuracy-and-integrity-2025-shifting-focus-from-payment-recovery-to-error-prevention/3736) | Research | "Cotiviti & Optum value diminished by gaps in support & service quality" |
| 2026-01 | [72% Payers Moving Upstream](https://www.coverself.com/blog/the-future-of-payment-integrity-key-trends-shaping-in-2025) | Research | "72% of payers investing in tech that catches errors before payment cycle" |
| 2026-01 | [Optum Strategy Shift](https://www.beckersphysicianleadership.com/news/how-optum-shifted-its-2025-strategy/) | News | "Strategy strayed from intent — oversized network; expects contraction 2026" |
| 2026-01 | [Pre-Pay Provider Complaints](https://clearhealthcosts.com/blog/2025/03/insurers-wide-payment-reviews-drive-therapy-practices-to-despair/) | News | "Cotiviti pre-pay: 'practically went bankrupt'; Optum PPR for 'almost every claim'" |
| 2026-01 | [[Sources/Market-Research-PDFs/elv-3q25-earnings-follow-up_-conversation-without-clarity-on-4f2c7483]] | Research | "Elevance MLR 91.26% (up 175bps); Carelon 'several hundred million' in AI" |
| 2026-01 | [[Global Vice President, Channels, Innovation & In Direct Ecosystems at Bmc Software Inc _ Cotiviti Holdings, Inc. _ Tegus]] | Operator | "Cotiviti top two in PI; renewals 78%+; huge chunk of national carriers" |
| 2026-01 | [[Former VP of Technology Strategy and Innovation at The Cigna Group _ Cotiviti Holdings, Inc. _ Tegus]] | Operator | "ClaimsXten tightly integrated into Facets and QNXT — easy to sell into" |
| 2026-01 | [[Sr Technical Product Manager at Optum _ Cotiviti Holdings, Inc. _ Tegus]] | Operator | "Upstarts get gobbled up before UHG contract; pilot 6-12 months with Cotiviti/Apixio partner" |
| 2026-01 | [[2026-01-26-whats-driving-the-healthcare-cost-crisis]] | Research | "Healthcare AI spend $1.4B, 89% back-office; 2.2x faster adoption than broader economy" |
| 2026-01 | [[Former Vice President Of Enterprise Analytics at R1 RCM _ Waystar Holding Corp. _ Tegus]] | Operator | "Payer incentive to maintain admin burden; arbitrage on claims avoidance; Epic 50% share, 70% wins" |
| 2026-01 | [[Senior Director of Revenue Cycle Management at WellSky _ Waystar Holding Corp. _ Tegus]] | Operator | "#1 RCM denial is mid-cycle; 70% of denials from medical necessity/coding; mid-cycle is greenfield" |
| 2026-01 | [[Senior Vice President of Innovation at PAM Health _ Charta Health _ Tegus]] | Operator | "Payers reverse-engineering provider AI improvements to tighten authorization" |
| 2026-01 | [[unitedhealthcare-raises-bar-for-doctors-to-get-paid-for-radiology-services]] | News | "UHC requiring full radiology interpretation for reimbursement starting April 2026" |
| 2026-01 | [[backbone-manan-1a3b2b93]] | Research | "RCM reactive by design: misaligned incentives, opaque policies, multi-billion dollar rework industry" |
| 2026-01 | [[healthcare-rcm-ai-market-map-33d6dcce]] | Research | "$150B RCM market; 17% denied; 60 days AR; ~180K coders at $50K = $10B coding spend" |
| 2026-01 | [[ambience-announces-openai-powered-medical-coding-model]] | News | "Ambience AI outperformed physicians by 27% on ICD-10 coding using OpenAI fine-tuning" |
| 2026-01 | [[Sources/Browser-History/2026-01-20-ai-scribes-may-boost-rvus-but-also-raise-health-co]] | Research | "UCSF: +1.81 weekly RVUs, +$3,044 Medicare revenue/physician, no billing denial increase" |
| 2026-01 | [[Sources/News/2026-01-02/top-20-healthcare-funding-rounds-of-2025]] | News | "Abridge $550M total 2025; Ambience $243M Series C" |
| 2026-01 | [[Sources/Browser-History/2026-01-07-commure-agents-ai-powered-colleagues-built-for-he]] | News | "Commure autonomous coding: 83% time reduction, 85%+ AI-coded charges at OBHG" |
| 2026-01 | [[Sources/Granola/Pranav Garg and Virtue-2026-01-19_09-30-44]] | Operator | "SNF MDS coding: 10-20% revenue optimization per MDS patient = $20B profit pool" |
| 2026-01 | [[2026-01-08-horus-health]] | News | "Horus multi-agent consensus; only system with EHR + payor policies + compliance" |
| 2026-01 | [[2026-01-06-eric-larsen-on-the-emergence-and-potential-of-ai-i]] | News | "RCM first to agentify — objective, verifiable decisions" |
| 2026-01 | [[2026-01-06-alaffia-ai-powered-claims-management-for-healthca]] | News | "Alaffia: 20x throughput, 40% savings on claims review" |
| 2026-01 | [[Sources/News/2026-01-11/ai-models-fall-short-in-medical-coding-accuracy]] | Research | "GPT-4: 33.9% ICD-10-CM, 45.9% ICD-9-CM, 49.8% CPT accuracy" |
| 2025-12 | [[Sources/Granola/Horus __ Virtue-2025-12-08_09-30-15]] | Operator | "$3M missed from 2 CPT codes; 98% underbilled; UF loses $25M/year on improper CDI" |
| 2025 | [[informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d]] | Operator | "MaineHealth 500+ licenses; 2% appointment increase = $10M+ revenue; shift to RCM value" |
| 2025 | [[director-at-mayo-clinic-_-ambience-healthcare-inc-_-tegus-293130cd]] | Operator | "Academic centers multi-vendor; Ambience has billing/coding/orders, Abridge has better EMR integration" |
| 2025 | [[Sources/Tegus/Director at MaineHealth _ Abridge _ Tegus.md]] | Operator | "Ambience 'more advanced in coding/CDI'; Cleveland Clinic chose Ambience" |
| 2025 | [[Sources/Tegus/Senior Director of Revenue Cycle Management at Wellsky _ Abridge _ Tegus.md]] | Operator | "WellSky chose Ambience over Abridge; $4M year 1 revenue pickup" |
| 2025 | [[Sources/Market-Research-PDFs/smarterdx-50m-series-b-1-6953b622]] | Research | "SmarterDx $50M Series B at $250M+; Trinity, HCA, Sutter customers" |
| 2025 | [[abridge-_-interviews-_-tegus-company-profile-5ebf5e4a]] | Operator | "Market saturated with AI scribes; need more than documentation; Abridge may lose to Epic" |
| 2025 | [[Chief Medical Informatics Officer (CMIO), VP & AI_RCM_CDI Physician Executive at LifePoint Health _ Abridge _ Tegus]] | Operator | "Message shifted from provider wellbeing to coding/CDI/RCM impact" |
| 2025 | [[Director of Strategy and Innovation Group for Memorial Sloan Kettering Cancer Center _ Abridge _ Tegus]] | Operator | "Could get to eight figures if we build out the suite of products" |
| 2025 | [[Senior Director of Revenue Cycle Management at Wellsky _ Abridge _ Tegus]] | Operator | "$4M year-1 reimbursement pickup from ambient-to-coding" |
| 2025 | [[Associate Medical Director of Informatics of Emergency Services at a Clinic _ Ambience Healthcare, Inc. _ Tegus]] | Operator | "In 5-10 years, asinine to hire humans to extract codes; consolidate multiple subscriptions" |
| 2025 | [[Senior Director of Revenue Cycle - Revenue Integrity at Mayo Clinic _ Ambience Healthcare, Inc. _ Tegus]] | Operator | "Clear advantage to be upfront in rev cycle; natural to go from documentation to coding" |
| 2025 | [[Clinical Director of Informatics & Analytics at John Muir Health _ Ambience Healthcare, Inc. _ Tegus]] | Operator | "E&M level codes shifted from level 3 to level 4; justified AI cost through uplift" |
| 2025 | [[director-at-mainehealth-_-abridge-_-tegus-86d57eab]] | Operator | "Shift now driven by RCM side; coding accuracy reduces RCM team rework" |
| 2026-01 | [[abridge-fathom-ab7cd03e]] | Operator | "Abridge about to get run over; haven't proven ability to get into other workflows" |
| 2026-01 | [[AI in Care Delivery (Virtue)-2026-01-20_10-02-00]] | Operator | "Athena launching free ambient scribe to compete" |
| 2026-01 | [[tegus-client-portal-1f984cfa]] | Operator | "Specialty pharmacy = only growth engine; PA market barely captured; 2-3x infusion revenue" |
| 2026-01 | [[latent---northwestern-55b5fe6b]] | Operator | "Specialty pharmacy gets all attention at Northwestern; that's where the money is" |
| 2026-01 | [[Director, 340B Program at Mount Sinai Health System _ Plenful _ Tegus]] | Operator | "Mount Sinai contracted Latent for specialty pharmacy PA; Epic EMR AI leverage" |
| 2026-01 | [[Chief Medical Informatics Officer (CMIO), VP & AI_RCM_CDI Physician Executive at LifePoint Health _ Plenful _ Tegus]] | Operator | "PA bottleneck throttles patient compliance and revenue capture" |
| 2026-01 | [[AI in Care Delivery (Virtue)-2026-01-20_11-02-06]] | Operator | "Specialty pharmacy traction across portfolio; Right Way, Mandolin, Tandem" |
| 2026-01 | [[Sources/Granola/Horus __ Virtue-2025-12-08_09-30-15]] | Operator | "Horus: larger context windows, agent orchestration, consensus reasoning, real-time payer policy" |
| 2026-01 | Web: McKinsey Payment Integrity | Research | "11% medical cost savings + 12% revenue uplift possible with current AI" |
| 2026-01 | Web: Precedence Research | Research | "US Payment Integrity market $14.12B by 2034" |
| 2026-01 | Web: PwC Future of Payers | Research | "Health plan margins at 2-decade lows; 8.5% medical cost trend 2026" |
| 2026-01 | Web: Cotiviti Everest Group 2025 | Research | "Cotiviti highest-designated Leader in Payment Integrity PEAK Matrix" |
| 2025-07 | [[abridge-fathom-ab7cd03e]] | Operator | Fathom: 90% autonomous coding automation (rad + primary care) vs 60-70% competitors; 25-30% savings vs offshore, 50-60% vs in-house coders; 10-month sales cycle; 1/3 of large health systems adopted but only ~10% of total spend touched. |
| 2025-08-29 | [[Former VP of Technology Strategy, The Cigna Group – Payment Integrity Expert Call]] | Operator | Post-pay recovers $0.40/$1 after vendor fees (25-35% on $0.70-$1.00 recovery); Cotiviti acquired Edifecs for upstream EDI; health plans only 60-70% EMR connectivity; "all other plans moved off Change Healthcare when Optum bought them." |
| 2025-06 | [[Intro_ Goodbill _ Virtue VC]] | Operator | Goodbill integrates pre-adjudication claims with TPAs (29 under contract, 70% close rate), finding 501r savings at nonprofit hospitals (60% facilities, 80% beds); transitioning from 25% of savings to $3-5 PEPM model. |
| 2025-01 | [[2025-12-23-trumps-initial-orders-reverse-biden-on-health-care]] | News | Trump revoked Medicare/Medicaid cost reduction models and froze HHS hiring — increases payment model uncertainty, potentially accelerating private-sector payment infrastructure modernization. |
| 2023-04 | [[baml-apollo-med-initiation-41223-09e90405]] | Research | Apollo Medical (AMEH): 25+ year track record, 1M+ members, works across ALL payers; MSO earns 25-30% EBITDA on 8-12% take rate; contracts 3-30 years non-terminable; VBC growing 20%+ rev CAGR; $774M (2021) to projected $2.77B (2025). |
| 2025-12 | [[nikhita-4abd6989]] | Research | HealthEdge edit libraries generate 20-30x ROI vs ~10x for secondary systems; 60-65% of payer lives now vended to HealthEdge or TriZetto; homegrown <5%. |
| 2025-12 | [[nikhita-4abd6989]] | Research | Enterprises consolidating from 3-5 specialized vendors to single-vendor suites; partial migrations don't work — eligibility, credentialing, network, and editing must move with claims. |
| 2025-12 | [[nikhita-4abd6989]] | Research | Rialtic: self-service SaaS for payer pre-pay edits; Machinify: services-based AI reverse-engineering denial patterns; Codoxo: fraud detection — three distinct new entrants attacking Cotiviti. |
| 2025-12 | [[nikhita-4abd6989]] | Research | UHC Anterior pilot: >=50% automation of manual PA tasks, 60% review time reduction, <20% error rate; expanding to dual-eligible and commercial plans in 2026. |
| 2025-12 | [[nikhita-4abd6989]] | Research | Top payers (Aetna, Elevance) insourcing COB, data mining, claim-editing; smaller TPAs/regional payers lack volume — shrinking commercial TAM for PI vendors. (CHALLENGE) |
| 2025-12 | [[rl-for-odd-80819af5]] | Research | DRG-SAPPHIRE: 54.8% SOTA on DRG coding from clinical notes (N=26,244), outperforming GPT-4o at 33% — domain-specific models beat generalist LLMs on healthcare coding. |
| 2025-07 | [[informatics-director-at-mainehealth-_-abridge-_-tegus-44ab924d]] | Operator | MaineHealth: "I'd put revenue cycles on top" for AI investment. Cleveland Clinic "driven by the coding side." Abridge could translate to 33,185 additional visits from 2% increase across 1.6M visits. |
| 2022-01 | [[rcm-thesis-market-167a6e28]] | Research | US healthcare RCM ~$81B (2022) growing ~4% p.a.; E2E outsourcing ~$6B at 8-10% growth; ~$14B new outsourced NPSR "up for grabs" annually; claims/denial management largest at 26% ($16.3B by 2024, 12% CAGR). |
| 2025-06 | [[James Lee and Emre Karatas]] | Operator | Sumr Labs: 19 key CCs and MCCs generated $22M in one year at UCLA; targeting CDI for hospital medicine with "low to no CDI coverage"; narrow ICD-10 code set drives massive DRG uplift. |
| 2024-01 | [[machinify-investor-presentation---122-77957357]] | Research | Machinify: $27M ARR, 70% growth, 52M active lives, 4 of top 10 payers; $418B spent on healthcare admin with $265B leakage; 60%+ audit hit rate vs 25-30% status quo; $80B+ direct TAM. |
| 2025-03 | [[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] | Operator | Payer AI-PA buying cycle: best case 9 months, commonly 36+; CMS 57 PA API mandate Jan 2026 but "nobody's ready"; top 10-15 plans: 100% piloting, zero enterprise rollouts; TAM penetration ~2%; "market won't close until 2035." |
| 2025-06 | [[medical-director-and-cardiologist-at-beth-israel-lahey-healt-bdd76adc]] | Operator | Beth Israel cardiologist: Abridge delivers 15-20% ICD-10 coding improvement, "multiple seven figures" revenue uplift. "Death by a thousand clicks" on diagnosis qualifiers — documentation-to-coding pipeline friction. |
| 2025-05 | [[Senior Director of Revenue Cycle - Revenue Integrity at Mayo Clinic _ Ambience Healthcare, Inc. _ Tegus]] | Operator | Mayo: 5,000+ Abridge licenses, <2,500 Ambience; 15-20% coding improvement, "multiple seven figures" revenue uplift; but replacing existing coding workflows (Optum, 3M, SmarterDX) is "one out of 10" chance. |
| 2025-08 | [[Abridge _ Interviews _ Tegus Company Profile]] | Operator | RCM is #1 ROI for AI scribes: "If I can get rid of coding staff/vendor, bill within 24 hours not 72" — documentation-to-billing pipeline compression. |
| 2025-12 | [[Claude-Startup opportunities from report analysis]] | Analysis | Nephron: MA industry at -2.0% pre-tax margins first time in 25+ years; V28 risk model transition = -3.01% annual headwind; every 100bps MLR improvement = 11.8% EPS; $430B+ MA revenue base at stake. |
| 2024-02 | [[PRVA-2023-Q4]] | Operator | Privia Health managing $9B medical spend across VBC; renegotiating MA capitation, moving 19,900 lives from capitation to upside/downside risk due to "regulatory and utilization headwinds" — V28 forcing re-contracting. |
| 2025-03 | [[mar-04-2025-tegus_healthedge_122824_former-sr-director-produ-e63cc578]] | Operator | 30-35% CAPS market "up for grabs"; TriZetto ~30-35%, HealthEdge ~20%; 20-30% homegrown; HealthEdge implementation 2X-4X higher than SS&C; "eating TriZetto's lunch"; Blues NC moved entirely to HealthEdge. |
| 2025-02 | [[2025-12-23-cotiviti-announces-agreement-to-acquire-edifecs]] | News | Cotiviti acquires Edifecs (healthcare data interop, serving ~300M people) — PI incumbents consolidating into payer-provider integration layer; backed by Veritas Capital + KKR recap. |
| 2025-04 | [[Director of IT Cloud Infrastructure Architect at Molina Healthcare Inc _ Anterior _ Tegus]] | Operator | Molina (major Medicaid payer): 50 IT staff, ~200 claims examiners for PI; using Autonomize AI for document search; fax-scanning AI via Azure; solutions rated "generic" — no deep workflow differentiation yet. |
| 2025-07 | [[Informatics Director at MaineHealth _ Abridge _ Tegus]] | Operator | MaineHealth pivoting to Epic-native AI for RCM; using Experian ClaimSource for denial mgmt; finance/RCM is #1 AI priority because "revenue is going down" from Medicare cuts. |
| 2026-01 | [[2026-01-20-ai-scribes-may-boost-rvus-but-also-raise-health-co]] | Research | UCSF (1.2M visits, 1,565 physicians): AI scribes = 1.81 extra weekly RVUs, 0.8 more visits/week, $3,044 more annual Medicare revenue/physician. JAMA warns scribes marketed for "higher-intensity billing" — coding arms race confirmed. |
| 2025-08 | [[Director at MaineHealth _ Abridge _ Tegus]] | Operator | MaineHealth: ambient AI shift from clinical to RCM driver — "now driven by RCM side because if tool recommends codes, reduces provider time and enhances coding accuracy." Cleveland Clinic signed Ambience for coding accuracy. |
| 2025-03 | [[032525-onos-overview-1-ef44cd12]] | Research | Onos targets $80B annual behavioral health waste (30-40 cents/dollar); Top 5 national plan contract at $120K (75% discount); pipeline: UHC Community Plan, HCSC, Medica; 6-7 month sales cycle; ML for fraud/care/claims. |
| 2025-12 | [[2025-12-08]] | Operator | HealthMC: 98% recall, 90% precision on AI coding; inference costs dropped 98-99% ($3/chart to $0.02/chart). Payer research: 40 outreach -> 20 calls; interest in DRG detection; Blue Cross NC interested; sales cycles 18-24 months confirmed. |
| 2025-10-27 | [[AI in Care Delivery (Virtue)-2025-10-27]] | Operator | Payers "least enthusiastic about AI" per Menlo survey — if payers resist AI adoption, payment infrastructure modernization timeline extends and mid-market capture slows. (CHALLENGE) |
| 2025-03 | [[mar-04-2025-tegus_healthedge_122824_former-sr-director-produ-e63cc578]] | Operator | AI could let legacy platforms (TriZetto, SS&C) leapfrog without rebuilding: "practically all rules-based opportunities exhausted" — AI fills gap for COBOL platforms, potentially slowing cloud-native migration. (CHALLENGE) |

---

*Confidence: MEDIUM-HIGH -- Mechanism is strong: pre-pay shift, mid-market migration, and documentation-to-payment convergence are each validated by 7+ operator sources. The PI oligopoly and payer sales cycles are real constraints, but mid-market entry wedge and second-pass stacking provide proven paths. Biggest risk is timeline: payer procurement may push the 2028 window to 2030+. Arms race is real but net TAM-expanding for integration platforms.*
*Last rebuilt: 2026-01-27*
