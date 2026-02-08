## Overview

$947B in annual claims, 9.5B transactions, 80-character ACH limits. Healthcare payment infrastructure was built for paper checks and batch processing and every layer of the stack is now rebuilding simultaneously. We think about this as four layers, and we've seen opportunities across all of them.

```
┌─────────────────────────────────────────────────────────────┐
│  ACTION LAYER  — FP&A, analytics, decision support          │
│                                                │
├─────────────────────────────────────────────────────────────┤
│  CLINICAL DATA FLOW  — eligibility, prior auth, CDI, referrals   │
│                             │
├─────────────────────────────────────────────────────────────┤
│  CLAIMS FLOW  — provider RCM, payer claims editing/processing│
  │
├─────────────────────────────────────────────────────────────┤
│  PAYMENT RAILS  — money movement, reconciliation, payment accel.    │
│  (ACH/checks legacy; TriBridge, Thrivory, Valley Steer)     │
└─────────────────────────────────────────────────────────────┘
```

The unifying thesis across these layers is that there's an opportunity to drive payer rules to the point of care. Today, most of the intelligence in this stack runs post-hoc — claims get submitted, then edited, then denied, then appealed, then paid 57 days later on rails that separate the money (EFT) from the explanation (ERA), requiring manual reconciliation in "health system basements." The structural shift is that every layer is moving from batch/post-hoc to real-time/pre-service. 

In claims flow, both sides are automating simultaneously — on the payer side, pre-pay integrity grew from virtually nonexistent 10 years ago to 40% today, trending toward 60%+ by 2030, preventing the dollar from leaving rather than chasing it back. On the provider side, AI-native RCM is replacing manual coding and billing. But today these two sides are in a "relentless tit-for-tat" (Oak HC/FT) — payer PI denies more aggressively, provider RCM appeals more aggressively, and the friction grows. The most valuable companies will be the ones that break this adversarial cycle by moving payer rules pre-service, so the provider never submits a bad claim and the payer never has to deny one. That's a win-win, not a zero-sum arms race. In payment rails, FedNow/RTP hit 70% bank coverage and carry rich data (ISO 20022) WITH money for the first time. In claims acceleration, pre-adjudication models predict payer behavior and advance 80% of claim value at 96% accuracy (Thrivory) or reduce payment from 90 days to 3 days at 88% cost reduction (Valley Steer). And the insurer margin crisis makes this urgent: UNH's MCR climbed to 89.25%, industry margins are at their lowest point in two decades, and UNH is targeting $1B in AI-enabled cost reductions for 2026 with 95% of claims already auto-processed. Elevance's MLR hit 91.26%, up 175bps. Every basis point of MLR improvement is worth $10B+ to the industry — the buyers are desperate.

---

## What This Means Going Forward

The opportunity is in the seams between layers — between payer claims editing and provider billing systems, between payment and remittance data (RTP reconciliation), between legacy COBOL platforms and modern cloud-native infrastructure. The claims flow layer alone is massive: on the payer side, payment integrity is a $15B market where Cotiviti and Optum own 90%+ of claims editing with 1.2% annual churn, but the pre-pay shift creates the first real opening in decades — startups win by entering as second-pass vendors (proving 60%+ hit rate vs 25-30% status quo at 20:1 ROI), accumulating proprietary training data, then migrating to first-pass position, and Machinify validated this path at $27M ARR with 4 of top 10 payers as customers. On the provider side, RCM is a $23B+ market still dominated by manual labor and offshore teams — AI-native vendors are automating coding, charge capture, denial management, and appeals at 20x throughput (Alaffia: 40% savings). On payment rails, ERAs and EFTs still travel on separate rails, driving manual reconciliation — TriBridge targets the $5B+ TAM for accelerated payments on RTP/FedNow infrastructure that now exists but hasn't been adopted by healthcare. Nomi Health proved that real-time payments to providers eliminates $25/claim in RCM friction. The pattern is the same at every layer: real-time intelligence at the point of care replaces batch processing after the fact.

The risk is that the oligopoly consolidates before startups reach escape velocity. New Mountain Capital is rolling up AI-native vendors — Machinify acquired Performant for $670M, and also owns ClaimLogiq and Rawlings. Cotiviti acquired Edifecs for interoperability. ClaimsXten and Optum CES have never churned a customer, and their content moat (130+ knowledge packs vs 13 at HealthEdge) takes years to replicate. Payer sales cycles remain brutal: best case 9 months, commonly 36+, with one operator estimating the market won't fully penetrate until 2035. Two-sided payment networks are structurally difficult — RTP adoption requires both payers sending and providers receiving on new rails, and the Blues' fragmented structure makes national rollout hard. The counter is that the margin crisis is existential and accelerating. UNH's EPS was slashed 47% ($30 to $16), V28 creates an $11B headwind over 3 years, and CMS proposed flat 2027 MA rates despite $76B in MedPAC-identified MA overpayments. Insurers cannot cost-cut their way out of this without infrastructure modernization — and the infrastructure they need (pre-pay AI, automated claims flow on both sides, real-time rails, point-of-care payer rules) is what startups are building. The question is whether startups can reach escape velocity before PE rolls up the category.
