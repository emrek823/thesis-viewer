## Overview

XXX ASCII diagram 
- We've seen work across the action layer (FP&A w/ translucent)
- RCM - many 
- Clinical data flow 
- Payments infra

There's opportunity across this entire stack to drive, particularly to drive payer rules to the point of care. How does this work? 





**$947B in annual claims, 9.5B transactions, 80-character ACH limits.** Healthcare payment infrastructure was built for an era of paper checks and batch processing. ERAs (remittance data) and EFTs (money) travel on separate rails, driving manual reconciliation in "health system basements." The payment integrity market that catches errors is a $15B oligopoly—Cotiviti and Optum own 90%+ of claims editing with 1.2% annual churn—but a structural shift from post-pay to pre-pay is creating the first opening in decades. Pre-pay grew from "virtually nonexistent" 10 years ago to 40% of payment integrity today, trending toward 60%+ by 2030. Meanwhile, FedNow/RTP hit 70% bank coverage (up from 30% at TriBridge's founding), enabling real-time payment rails that carry data WITH money for the first time. The insurer margin crisis (UNH MCR at 89.25%, industry margins at lowest point in two decades) creates existential urgency for infrastructure modernization.

The opportunity is in the seams: between payer claims and provider billing systems (pre-pay payment integrity), between payment and remittance data (RTP reconciliation), between legacy COBOL platforms and modern cloud-native infrastructure. Payment integrity has four layers—primary claims editing ($0.5B, ClaimsXten/Optum duopoly), secondary editing ($1B), pre-pay PI ($10B, 40% EBITDA margins), and post-pay PI ($15B, shifting away due to provider abrasion). Startups win by entering as second-pass vendors (proving 60%+ hit rate vs 25-30% status quo at 20:1 ROI), accumulating proprietary training data, then migrating to first-pass position. The window is narrow: New Mountain Capital is consolidating AI-native vendors (Machinify acquired Performant for $670M; also owns ClaimLogiq, Rawlings), and Cotiviti acquired Edifecs for interoperability.

---

## Bull Case

**Pre-pay shift enables AI-native entrants to leapfrog incumbents.** Pre-pay grew from nothing to 40% of payment integrity market in a decade, trending to 60%+ by 2030. Post-pay recovers $0.40 per $1 after vendor fees with 3% success rate; pre-pay prevents the dollar from leaving. Machinify validates the model: $27M ARR, 70% growth, 60%+ audit hit rate vs 25-30% status quo, 4 of top 10 payers as customers (Centene, HCSC, Humana, Cigna), 52M+ active lives. Second-pass vendor stacking is the proven entry—payers pay higher fees (20-25% contingency vs 10-15% on primary pass) for incremental finds at 20:1 ROI.

> "You can look at the same data 30 days after Cotiviti does it...pay you a higher fee for incremental finds at 20:1 ROI. AI-native vendor could reach $200M revenue." — Former Optum VP, Tegus call

**Real-time payment rails hit critical mass.** FedNow/RTP reached 70% bank coverage (up from 30%). RTP carries rich data (ISO 20022) WITH money—eliminating the ERA/EFT reconciliation problem. Current rails are broken: ACH has 80-character limit, checks cost $5/transaction, virtual cards extract 3% from providers. TriBridge targets $5B+ TAM for accelerated payments; Thrivory advances 80% of claim value at 96% prediction accuracy with zero losses to date. Nomi Health proves real-time payments to providers eliminates $25/claim in RCM friction.

> "RTP embeds significantly more reconciliation data in payment itself. Helps provider reconciliation processes automatically." — TriBridge analysis

**Insurer margin crisis creates unprecedented investment urgency.** UNH's MCR climbed to 89.25% with 2025 trend at 7.5% vs 5% priced—EPS slashed 47% ($30 to $16). Elevance MLR hit 91.26% (up 175bps). Industry margins at "lowest point in two decades" (PwC). V28 risk adjustment creates $11B headwind for UNH over 3 years. CMS proposed flat 2027 MA rates despite $76B in MedPAC-identified MA overpayments. Every basis point of MLR improvement is worth $10B+ to the industry. UNH targeting $1B in AI-enabled cost reductions for 2026, 95% of claims already auto-processed.

> "We anticipate operating cost reductions of nearly $1 billion in 2026, many AI enabled... 95% of our claims already auto-process." — Tim Noel, UHC CEO, Q4 2025 earnings

---

## Bear Case

**Oligopoly moats are formidable and consolidating.** Cotiviti/Optum own 90%+ of claims editing with 1.2% churn—"ClaimsXten and Optum CES have never churned a customer." Content moat is massive: 130+ knowledge packs vs 13 at HealthEdge—"$100M+ annual savings gap takes years to close." "I don't get in trouble for hiring IBM"—payer risk aversion structurally favors incumbents. New Mountain Capital rolling up AI-native vendors: Machinify acquired Performant for $670M, also owns ClaimLogiq and Rawlings. Cotiviti acquired Edifecs for interoperability. The window for independent AI-native vendors is narrowing.

> "ClaimsXten and Optum CES own ~90% and have never churned a customer... Content moat is 130+ packs vs 13 at HealthEdge." — ETK Payment Integrity 2024

**Payer sales cycles remain brutal and may not compress.** "Best case 9 months. Very commonly 36+ months." Market won't fully penetrate until 2035—"15-ish years to hit 70% penetration." Top payers (120M+ lives) build in-house; UNH/Elevance "too proud to stop using homegrown systems." Payer buying cycles actually slowed 20% (9.4 to 11.3 months) while provider cycles improved. Integration with legacy COBOL systems creates technical barriers.

> "The reality is you're looking at 36 months best case for a new payer product to scale. Market won't close until 2035." — Former VP Product Management, Change Healthcare, Tegus call

**Two-sided payment networks are structurally difficult.** RTP/FedNow infrastructure exists but adoption requires both sides—payers must send AND providers must receive on new rails. Blues hold-out risk: Pacific Northwest may be achievable (70% coverage with 2-3 players per side), but national rollout requires BCBSA coordination. Float economics alone don't justify—"Float not generating significant incremental revenue for providers. Primary value comes from waiver savings, not treasury float benefits." Optum Real competing from payer side with pre-service claim validation.

**What would have to be true for you to be wrong?**

The margin crisis resolves through brute-force premium increases (9-11% for 2026) without infrastructure modernization. Insurers freeze vendor budgets and lean on existing Cotiviti/Optum contracts rather than experimenting with AI-native platforms. Cotiviti successfully acquires and integrates AI-native vendors before they scale (Machinify/Performant already absorbed by New Mountain). Payer sales cycles show no compression by 2028.

---

## Startup Opportunities

**1. AI-Native Pre-Pay Payment Integrity (Proven)**
*The edge:* Second-pass entry proves 60%+ hit rate vs 25-30% status quo, then migrate to first-pass. Machinify validated at $27M ARR with 4 of top 10 payers; Alaffia showing 20x throughput increase, 40% savings.
- Stage: Growth
- Wedge: Mid-market payers (<1M lives), regional Blues, Medicaid MCOs lacking AI resources; "GenAI clinical review is next thing everyone's waiting for; no vendor does it well yet"
- Buyers: VP Payment Integrity, CMO; 9-36 month sales cycles
- Risk: Cotiviti acquires and integrates; content moat (130+ packs) takes years to build; New Mountain consolidating category

**2. Payment Rails & Reconciliation Infrastructure (Early)**
*The edge:* ERAs and EFTs travel separately on different rails, driving manual reconciliation. FedNow/RTP at 70% bank coverage—infrastructure exists for real-time payment + data together. TriBridge targeting $5B+ TAM. Thrivory advancing 80% of claims at 96% prediction accuracy with zero losses.
- Stage: Seed/Series A
- Wedge: Build on RTP/FedNow; geographic beachhead (Pacific Northwest: 70% coverage with 2-3 players per side); target "1.5 FTE savings per site" ($40-75K)
- Buyers: CFO, VP Operations; clearinghouses and RCMs as channel partners
- Risk: Two-sided network problem (needs Blues buy-in); float alone doesn't justify; Optum Real competing with pre-service validation from payer side

**3. Provider Claims Acceleration (Emerging)**
*The edge:* Providers have only 1-2 weeks liquidity despite $3.5-10M revenues. Pre-adjudication enables payment before formal payer processing. Valley Steer reduced payment from 90 days to 3 days, cost from $8/visit to $0.96/visit (88% reduction).
- Stage: Early growth
- Wedge: Specialty verticals with predictable claims (behavioral health, physical therapy, home health); 4.5-day advances vs 57-day industry standard
- Buyers: Practice CFO, billing managers; 3-6 month sales cycles
- Risk: Capital-intensive (balance sheet lending); default risk in economic downturn; margin compression as market matures

---

## Open Questions

**Can AI-native vendors migrate from second-pass to first-pass before incumbents absorb them?** Machinify's $670M Performant acquisition and New Mountain's consolidation (also owns ClaimLogiq, Rawlings) suggests rollup is accelerating. Cotiviti acquired Edifecs for interoperability. If PE rolls up the AI-native category before startups reach escape velocity, the pre-pay shift creates incumbent reinforcement rather than startup opportunities.
→ Would validate/invalidate whether 2025-2027 is the last window for independent payment integrity startups

**Will insurer margin pressure increase or decrease technology investment?** The bull case assumes crisis drives modernization—UNH targeting $1B AI-enabled cost reductions. The bear case: cost-cutting freezes vendor budgets. Elevance already expects lower revenue, earnings, and membership in 2026. 2026 insurer earnings calls will signal which pattern holds.
→ Would validate/invalidate whether payment infrastructure startups have funding tailwind or headwind

**Does RTP/FedNow adoption reach critical mass for healthcare payments by 2027?** Current 70% bank coverage is necessary but not sufficient—payers and clearinghouses must adopt. If adoption stalls, the two-rail problem persists and ERA/EFT reconciliation remains a manual process.
→ Would validate/invalidate the payment rails/reconciliation opportunity timeline

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2026-01-27 | [[Sources/Earnings-Calls/UNH/UNH-2025-Q4]] | Earnings | UNH targeting $1B AI-enabled cost reductions 2026; 95% claims auto-processed; OptumReal integration for closed-loop real-time approval |
| 2026-01-29 | [[Sources/News/2026-01-29/health-insurers-brace-for-impact-in-2026]] | News | Margins at lowest point in two decades; 2026 is reset period; insurers rapidly testing AI |
| 2025-12 | [[Sources/LLM-Chats/UNH-Earnings-Analysis-Dec2025]] | Research | UNH EPS slashed 47% ($30 to $16); MCR 89.25%; MA cost trend 7.5% vs 5% priced; V28 $11B headwind |
| 2025-12 | [[Sources/Market-Research-PDFs/Financial Performance of U.S. Health Insurers (2010–2025) (2)]] | Research | Industry net margins 2-3%; medical cost trend 8.5% (highest since 2007); MA gross margin $1,982/enrollee |
| 2025-12 | [[Sources/Market-Research-PDFs/elv-3q25-earnings-follow-up_-conversation-without-clarity-on-4f2c7483]] | Research | Elevance MLR 91.26% (up 175bps); Carelon investing 'several hundred million' in AI |
| 2026-01 | [[Sources/LLM-Chats/2026-01-13-healthcare-payments-business-provider-payer-value]] | Research | Four business models framework; FedNow/RTP at 70% coverage; RTP carries data WITH money |
| 2025 | [[Sources/Market-Research-PDFs/etk-payment-integrity-2024-915ce9fb]] | Research | ClaimsXten/Optum CES 90% claims editing; 1.2% churn; pre-pay at 40% heading to 60%+ |
| 2025 | [[Sources/Market-Research-PDFs/machinify-investor-presentation---122-77957357]] | Company | Machinify $27M ARR, 70% growth, 60%+ hit rate, 4 of top 10 payers |
| 2025-03 | [[Sources/Tegus/Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] | Operator | 9-36 month sales cycles; market won't close until 2035; <2% PA TAM using AI |
| 2026-01-27 | [[Sources/Browser-History/2026-01-27-thrivory-raises-35-million-in-equity-and-unlocks-u]] | News | Thrivory: 96% claims prediction accuracy; advances 80% of claim value; zero losses to date |
| 2026-01-27 | [[Sources/Browser-History/2026-01-27-optum-real]] | News | Optum Real: real-time payer-provider API for pre-service claim validation |
| 2026-01-27 | [[Sources/Browser-History/2026-01-27-oak-hcft-five-trends-defining-healthcare-in-2026]] | Research | Oak HC/FT: "relentless tit-for-tat between payment integrity and revenue cycle programs" |
| 2026-01-29 | [[Sources/News/2026-01-29/cms-official-defends-flat-medicare-advantage-rate-proposal-for-2027]] | Policy | CMS proposing flat 2027 MA rates; MedPAC: $76B MA overpayments this year |
| 2026-01-29 | [[Sources/News/2026-01-29/elevance-expects-lower-revenue-earnings-membership-in-2026]] | Earnings | Elevance: -1.75% Medicaid margin 2026; MA membership down 18% (400K) |
| 2026-01 | [[Sources/Market-Research-PDFs/tribridge---vc-pitch-deck-main---jan-12-50c96a1b]] | Company | TriBridge: $4T+ healthcare spend, 9.5B claims/year; ERA/EFT travel separately causing costly reconciliation; targets 1.5 FTE savings per site |
| 2024 | [[Sources/Portfolio/Valley Steer/valleysteer-5m-raise-8b8f167c]] | Company | Valley Steer: 90 days to 3 days payment; $8/visit to $0.96/visit (88% cost reduction) |
| 2024 | [[Sources/Market-Research-PDFs/nomi-health-investor-deck-02122024-1-c3ebb860]] | Company | Nomi Health: $100B+ spend on platform; RTP rails; $677M revenue 2024 |
| 2025-05 | [[Sources/Tegus/may-19-2025-tegus_cotiviti-holdings-inc_133796_vice-presiden-3c38e5df.md]] | Operator | Content moat 130+ packs vs 13; GenAI clinical review "next thing everyone's waiting for"; no vendor does it well yet |
| 2025-05 | [[Sources/Tegus/may-19-2025-tegus_cotiviti-holdings-inc_133802_regional-vice-430bb602.md]] | Operator | Second-pass vendor stacking is standard entry; AI-native vendor could reach $200M revenue; 20:1 ROI |
| 2026-01 | [[Sources/News/2026-01-27-cotiviti-acquires-edifecs]] | News | Cotiviti acquires Edifecs for interoperability; payment integrity oligopoly consolidating |
| 2026-01 | [[Sources/Browser-History/2026-01-06-alaffia-ai-powered-claims-management-for-healthca]] | News | Alaffia AI: 20x throughput increase, 40% savings on claims management |
| 2025-10 | [[Sources/Browser-History/2025-12-21-machinify-completes-acquisition-of-performant-heal.md]] | News | Machinify acquires Performant for $670M; 170M+ lives; New Mountain Capital backed |
| 2026-02 | [[Sources/Earnings-Calls/ELV/ELV-2025-Q4]] | Earnings | Elevance EPS decline $30.29→$25.50+; high-teens MA membership decline; -1.75% Medicaid margin; confirms margin crisis driving infrastructure urgency |
| 2026-02 | [[former-vice-president-of-product-at-zelis-_-zelis-_-tegus-77f906b3]] | Operator | OON claims pricing mechanics, reference-based pricing; payment infrastructure between payers/providers/employers |
| 2026-02 | [[senior-technical-product-manager-at-optum-_-healthedge-_-teg-f30c7a7f]] | Operator | Facets/Cirus claims processing limitations; HealthEdge evaluation for CAPS migration at mid-market |
| 2026-02 | [[multi-state-division-pfs-support-manager-at-adventhealth-_-e-902c3807]] | Operator | Front-end RCM challenges with Medicaid enrollment verification and eligibility determination |

---

## Related Theses

- [[Back-end AI Automation in Healthcare is Scaling - What Creates Lock In]]
- [[Theses/Mispriced Healthcare Risk Creates AI Arbitrage Opportunities]]

---

*Confidence: HIGH — 35+ operator/research sources on payment integrity, payment rails, and insurer financials. Macro thesis validated: margin crisis creates urgency for infrastructure modernization. Key risk: oligopoly consolidation + sales cycles push timeline to 2035. Strongest signal: Machinify/Performant acquisition validates AI-native payment integrity category, but also shows PE rolling up before startups reach independence.*
*Last indexed: 2026-02-04*
*Last rebuilt: 2026-02-01*
