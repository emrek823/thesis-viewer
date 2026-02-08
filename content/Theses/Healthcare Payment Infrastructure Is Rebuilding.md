## Overview

Healthcare payment infrastructure in the US today is moving $XXX in claims but was built for paper checks and batch processing and every layer of the stack is now rebuilding simultaneously. We've seen a huge wave of RCM companies on the provider side - what's next?  

We think about this as four basic layers (with some overlap of course; for cleanliness), and we've seen opportunities across all of them. We start with payment rails at the bottom because nuance of provider's cash flows and how payers think about float on claims they are paying out impacts market movements across this stack. 

![[Pasted image 20260208135503.png]]
The unifying thesis across these layers is that there's an opportunity to drive payer rules to the point of care. Today, most of the intelligence in this stack runs after the fact. Claims get submitted, edited, denied, appealed, then paid 60 days later on rails that separate the money (EFT) from the explanation (ERA), requiring manual reconciliation in "health system basements." The structural shift is that every layer is moving from batch/post-hoc to real-time/pre-service. 

**Action Layer**. XXX (1-2 sentences - mention translucent )
**Clinical Data Layer**. XXX _ _
**Claims Flow**
**Payment rails**

The best wedge we've seen on the payer side is second-pass claims editing: enter alongside Cotiviti/Optum (who own 90%+ of the $15B payment integrity market with 1.2% annual churn), prove a 60%+ hit rate vs. 25-30% status quo at 20:1 ROI, accumulate proprietary training data, then migrate to first-pass position. Machinify validated this path at $27M ARR with 4 of top 10 payers. The pre-pay shift is the structural opening — it didn't exist a decade ago. On the provider side, the wedge is narrower automation of specific RCM workflows (coding, charge capture, denial management, appeals) rather than trying to replace the full $23B+ RCM stack at once. Alaffia demonstrated 40% savings and 20x throughput on targeted workflows. On payment rails, the wedge is reconciliation: ERAs and EFTs still travel on separate rails, forcing manual matching. TriBridge targets the $5B+ TAM using RTP/FedNow infrastructure that now exists but hasn't been adopted by healthcare. Nomi Health proved real-time payments to providers eliminates $25/claim in RCM friction. In each case, the wedge works because it's additive (second-pass, workflow-specific, reconciliation layer) — you don't need to rip and replace.



---

## What This Means Going Forward

The opportunity is in the seams between layers - payer claims editing and provider billing systems, payment and remittance data (RTP reconciliation), legacy COBOL platforms and modern cloud-native infrastructure. The question is more around GTM and domain expertise on what the right wedge is vs. are these current tools good enough?

And the insurer margin crisis makes this urgent: UNH's MCR climbed to 89.25%, industry margins are at their lowest point in two decades, and UNH is targeting $1B in AI-enabled cost reductions for 2026 with 95% of claims already auto-processed. Elevance's MLR hit 91.26%, up 175bps. Every basis point of MLR improvement is worth $10B+ to the industry. The buyers are desperate.

In claims flow, both sides are automating simultaneously. On the payer side, pre-pay integrity grew from virtually nonexistent 10 years ago to 40+% today, trending toward 60%+ by 2030, preventing the dollar from leaving rather than chasing it back. On the provider side, AI-native RCM is replacing manual coding and billing. But today these two sides are in a "relentless tit-for-tat" (s/o Duncan Greenberg!). Payer PI denies more aggressively, provider RCM appeals more aggressively, and the friction grows. The most valuable companies will be the ones that break this adversarial cycle by moving payer rules pre-service, so the provider never submits a bad claim and the payer never has to deny one. That's a win-win, not a zero-sum arms race. In payment rails, FedNow/RTP hit 70% bank coverage and carry rich data (ISO 20022) WITH money for the first time. In claims acceleration, pre-adjudication models predict payer behavior and advance 80% of claim value at 96% accuracy (Thrivory) or reduce payment from 90 days to 3 days at 88% cost reduction (Valley Steer). 

The GTM risk is that domain expertise requirements are brutal, and consolidation is accelerating. Payer sales cycles run 9 months best case, commonly 36+, with one operator estimating full market penetration won't happen until 2035. ClaimsXten and Optum CES have never churned a customer, and their content moat (130+ knowledge packs vs. 13 at HealthEdge) takes years to replicate. New Mountain Capital is actively rolling up AI-native vendors — Machinify acquired Performant for $670M, and also owns ClaimLogiq and Rawlings. Cotiviti acquired Edifecs for interoperability. Two-sided payment networks add another layer of difficulty: RTP adoption requires both payers sending and providers receiving on new rails, and the Blues' fragmented structure makes national rollout hard. The counter is that the margin crisis forces buyer urgency despite long sales cycles. UNH's EPS was slashed 47% ($30 to $16), V28 creates an $11B headwind over 3 years, and CMS proposed flat 2027 MA rates despite $76B in MedPAC-identified MA overpayments. Insurers cannot cost-cut their way out without infrastructure modernization. The founders who win will be the ones with deep enough domain expertise to navigate the 9-36 month sales cycle and narrow enough wedges to reach escape velocity before PE consolidates the category.
