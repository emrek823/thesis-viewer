XXX - question / answer / framing for the whole thesis 
## Overview


Healthcare payment infrastructure in the US today is moving [[Sources/Market-Research-PDFs/tribridge---vc-pitch-deck-main---jan-12-50c96a1b|~$4T in annual claims between payers and providers across 9B+ transactions]] but was built for paper checks and batch processing. 


We think about this as four basic layers (with some overlap of course; for cleanliness), and we've seen opportunities across all of them as each layer of the stack is evolving simultaneously. We anchor with payment rails at the bottom because nuance of provider's cash flows and how payers think about float on claims they are playing out impacts market movements across this stack. 
![[Pasted image 20260208140251.png]]
The unifying thesis across these layers is that there's an opportunity to drive payer rules to the point of care. Today, most of the intelligence in this stack runs after the fact. Claims get submitted, edited, denied, appealed, then paid 60 days later on rails that separate the money (EFT) from the explanation (ERA), requiring manual reconciliation. The structural shift is that every layer is moving from batch/post-hoc to real-time/pre-service. 

**Payment Rails.** ERAs (remittance data) and EFTs (money) travel on separate rails with 80-character ACH limits, forcing manual reconciliation. [[Sources/LLM-Chats/2026-01-13-healthcare-payments-business-provider-payer-value|FedNow/RTP hit 70% bank coverage]] and carry rich data (ISO 20022) WITH money for the first time, but healthcare hasn't adopted widely yet.  

**Claims Flow.** Both sides are automating simultaneously causing a much discussed "AI arms race". Payers deny more aggressively, provider RCM appeals more aggressively, and friction compounds. On the payer side, [[Sources/Market-Research-PDFs/etk-payment-integrity-2024-915ce9fb|pre-pay payment integrity grew from virtually nonexistent a decade ago to 40%+ today, trending toward 60%+]] over the next 2-3 years. On the provider side, the wedge is narrower automation of specific RCM workflows (coding, charge capture, denial management, appeals) or broader RCM workflows that focus on a certain specialty or site of care (ambulatory infusion centers). 

**Clinical Data Flow.** Physicians document for care, not reimbursement, and payers adjudicate against dense policy text neither side has time to read. Pre-bill CDI ([SmarterDx](https://www.smarterdx.com/smarterprebill)) catches documentation gaps before claim submission. Pre-service authorization and eligibility verification push payer rules to the point of care so errors are caught before they enter the claims flow layer at all.

**Action Layer.** At the top of the stack, AI-native FP&A tools (Translucent) surface margin leakage, underpayment against contractual terms, and service line profitability in seconds, which replaces the week of manual Excel crosswalking that CFO teams do today. [[Sources/Granola/Tenix _ Virtue-2026-02-02_16-06-04|Up to 5% of net revenue is missed]] through underpayment that providers can't currently detect at scale. This layer turns the data flowing through the rest of the stack into decisions.

---

## What This Means Going Forward

The opportunity is in the seams between layers. The question for founders is which wedge, not whether the tools are good enough. Each layer has a proven entry point: second-pass claims editing on the payer side (prove ROI on dollars Cotiviti missed, then migrate to first-pass), workflow-specific or specialty-specific RCM automation on the provider side (own one vertical like infusion or spine before going horizontal), reconciliation automation on payment rails (additive layer, no rip-and-replace), pre-bill CDI in the clinical data layer (catch revenue the provider earned but didn't document), etc. In each case, the wedge works because it's additive — you don't need to displace an incumbent to start generating value.

The insurer margin crisis creates buyer urgency that didn't exist two years ago. [[Sources/Earnings-Calls/UNH/UNH-2025-Q4|UNH's MCR climbed to 89.25%]], [[Sources/Earnings-Calls/ELV/ELV-2025-Q4|Elevance's MLR hit 91.26%]] (up 175bps), and industry margins are at their [[Sources/News/2026-01-29/health-insurers-brace-for-impact-in-2026|lowest point in two decades]]. Every basis point of MLR improvement is worth $10B+ to the industry. UNH is targeting [[Sources/Earnings-Calls/UNH/UNH-2025-Q4|$1B in AI-enabled cost reductions for 2026]] — but 95% of claims already auto-process, meaning the easy gains are taken. The next wave of savings requires infrastructure modernization across the stack, not incremental optimization of existing tools.

The risk is that consolidation outpaces startup velocity. Payer sales cycles run [[Sources/Tegus/Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus|9 months best case, commonly 36+]], and ClaimsXten/Optum CES have never churned a customer — their [[Sources/Tegus/may-19-2025-tegus_cotiviti-holdings-inc_133796_vice-presiden-3c38e5df|content moat (130+ knowledge packs)]] takes years to replicate. New Mountain Capital is rolling up AI-native vendors: [[Sources/Browser-History/2025-12-21-machinify-completes-acquisition-of-performant-heal|Machinify acquired Performant for $670M]], [[Sources/Browser-History/2025-12-23-cotiviti-announces-agreement-to-acquire-edifecs|Cotiviti acquired Edifecs]] for interoperability. Two-sided payment networks add difficulty — RTP needs both payers sending and providers receiving on new rails. The counter: [[Sources/LLM-Chats/UNH-Earnings-Analysis-Dec2025|UNH's EPS was slashed 47%, V28 creates an $11B headwind]], and [[Sources/News/2026-01-29/cms-official-defends-flat-medicare-advantage-rate-proposal-for-2027|CMS proposed flat 2027 MA rates despite $76B in MedPAC-identified MA overpayments]]. Insurers cannot cost-cut their way out without modernizing. The founders who win will have deep enough domain expertise to survive the 9-36 month sales cycle and narrow enough wedges to reach escape velocity before PE consolidates the category.

---

## Sources

- [[Sources/Earnings-Calls/UNH/UNH-2025-Q4|UNH Q4 2025 Earnings ($1B AI cost reductions, 95% auto-processing, OptumReal)]]
- [[Sources/Earnings-Calls/ELV/ELV-2025-Q4|Elevance Q4 2025 Earnings (EPS decline, high-teens MA membership drop, -1.75% Medicaid margin)]]
- [[Sources/News/2026-01-29/health-insurers-brace-for-impact-in-2026|Health Insurers Brace for Impact in 2026 (margins at lowest in two decades)]]
- [[Sources/News/2026-01-29/elevance-expects-lower-revenue-earnings-membership-in-2026|Elevance Lower Revenue/Membership 2026]]
- [[Sources/News/2026-01-29/cms-official-defends-flat-medicare-advantage-rate-proposal-for-2027|CMS Flat 2027 MA Rate Proposal ($76B MedPAC overpayments)]]
- [[Sources/LLM-Chats/UNH-Earnings-Analysis-Dec2025|UNH Earnings Analysis (EPS slashed 47%, MCR 89.25%, V28 $11B headwind)]]
- [[Sources/Market-Research-PDFs/Financial Performance of U.S. Health Insurers (2010–2025) (2)|Financial Performance of U.S. Health Insurers 2010-2025 (net margins 2-3%, 8.5% cost trend)]]
- [[Sources/Market-Research-PDFs/elv-3q25-earnings-follow-up_-conversation-without-clarity-on-4f2c7483|Elevance Q3 2025 Follow-Up (MLR 91.26%, Carelon AI investment)]]
- [[Sources/Market-Research-PDFs/etk-payment-integrity-2024-915ce9fb|ETK Payment Integrity 2024 (ClaimsXten/Optum 90%, 1.2% churn, pre-pay 40%→60%+)]]
- [[Sources/Market-Research-PDFs/machinify-investor-presentation---122-77957357|Machinify Investor Presentation ($27M ARR, 70% growth, 60%+ hit rate)]]
- [[Sources/Market-Research-PDFs/tribridge---vc-pitch-deck-main---jan-12-50c96a1b|TriBridge Pitch Deck ($4T+ spend, 9.5B claims, ERA/EFT reconciliation)]]
- [[Sources/Market-Research-PDFs/nomi-health-investor-deck-02122024-1-c3ebb860|Nomi Health Investor Deck ($677M revenue, RTP rails)]]
- [[Sources/Tegus/may-19-2025-tegus_cotiviti-holdings-inc_133796_vice-presiden-3c38e5df|Cotiviti VP — Content Moat (130+ packs vs 13, GenAI clinical review gap)]]
- [[Sources/Tegus/may-19-2025-tegus_cotiviti-holdings-inc_133802_regional-vice-430bb602|Cotiviti Regional VP — Second-Pass Stacking ($200M revenue potential, 20:1 ROI)]]
- [[Sources/Tegus/Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus|Former Change Healthcare VP (9-36 month sales cycles, market won't close until 2035)]]
- [[Sources/Market-Research-PDFs/former-vice-president-of-product-at-zelis-_-zelis-_-tegus-77f906b3|Former Zelis VP — OON Claims Pricing & Reference-Based Pricing]]
- [[Sources/Market-Research-PDFs/senior-technical-product-manager-at-optum-_-healthedge-_-teg-f30c7a7f|Optum Senior PM — Facets/Cirus Claims Processing Limitations]]
- [[Sources/Market-Research-PDFs/multi-state-division-pfs-support-manager-at-adventhealth-_-e-902c3807|AdventHealth PFS Manager — Front-End RCM & Medicaid Eligibility]]
- [[Sources/LLM-Chats/2026-01-13-healthcare-payments-business-provider-payer-value|Healthcare Payments Business Models (4 models, FedNow/RTP 70%, provider abrasion)]]
- [[Sources/Browser-History/2025-12-23-cotiviti-announces-agreement-to-acquire-edifecs|Cotiviti Acquires Edifecs (interoperability consolidation)]]
- [[Sources/Browser-History/2026-01-27-thrivory-raises-35-million-in-equity-and-unlocks-u|Thrivory $3.5M Equity + $25M Credit (96% prediction accuracy, zero losses)]]
- [[Sources/Browser-History/2026-01-27-optum-real|Optum Real (real-time pre-service claim validation)]]
- [[Sources/Browser-History/2026-01-27-oak-hcft-five-trends-defining-healthcare-in-2026|Oak HC/FT 2026 Trends (payer-provider tit-for-tat)]]
- [[Sources/Browser-History/2026-01-06-alaffia-ai-powered-claims-management-for-healthca|Alaffia AI (20x throughput, 40% savings)]]
- [[Sources/Browser-History/2025-12-21-machinify-completes-acquisition-of-performant-heal|Machinify Acquires Performant ($670M, 170M+ lives, New Mountain Capital)]]
- [[Sources/Portfolio/Valley Steer/valleysteer-5m-raise-8b8f167c|Valley Steer $5M Raise (90→3 day payment, 88% cost reduction)]]
- [[Sources/Portfolio/SmarterDx/smarterdx---external-investment-memo-952365dc3f9349a8919ccb4-9fc753d7|SmarterDx Investment Memo (pre-bill CDI market)]]
- [[Sources/Granola/Manan Shah __ Emre Karatas (Virtue)|Manan Shah / Backbone (translation gap: physicians document for care not reimbursement)]]
- [[Sources/Granola/Tenix _ Virtue-2026-02-02_16-06-04|Tenix / Virtue Meeting (revenue integrity, 5% underpayment, action layer)]]
- [[Sources/Granola/Will Detwiler (NewCo) __ Sean_Emre|Will Detwiler / Tenix Background (Midstream+Translucent+Clarium)]]

**Related:** For the consumer-directed healthcare spending stack (HSAs, FSAs, ICHRAs, cash-pay) — a different mechanism, different buyers, different competitive dynamics — see [[Theses/In Progress/Consumer-Directed Healthcare Spending Doubles — Infrastructure Gap Creates Five Investment Wedges]]. SubCo operates primarily in that thesis's Layer 3, not in the provider-payer claims infrastructure covered here.

*Last rebuilt: 2026-02-08*
