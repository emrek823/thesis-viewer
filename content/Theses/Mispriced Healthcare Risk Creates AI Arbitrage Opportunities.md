## Overview

We've seen the opportunity to arbitrage (and profit from that arbitrage) where there is mispricing between true actuarial risk and what incumbents can't or won't price accurately.

WriteWise in our portfolio is one example. WriteWise guarantees total pharmacy costs at a fixed PMPM for self-funded employers, backed by a captive insurance entity. PBMs already offer PMPM guarantees but they manipulate them through drug exclusions, brand/generic reclassification, and rebate gaming to hit targets on paper while actual plan spend rises. WriteWise's proprietary platform ([[Sources/Market-Research-PDFs/12-mavrx-platform-saas-pbm-pricing-150a0269|MavRx]]) ingests claims data, reprices across a panel of PBMs, and uses predictive GoPricing algorithms to forecast true forward-looking net cost (not historical cost) for each employer group. WriteWise captures that spread by offering the employer a lower, guaranteed PMPM that covers all drugs including specialty, and underwriting the risk itself. The employer gets budget certainty and 10-20% savings. WriteWise profits from the delta between its guaranteed price and predicted actual cost. Both win because the PBM was extracting margin through opacity, not accurate pricing.

We think this pattern of AI-native underwriting exploiting the gap between what incumbents charge and true risk repeats across other areas of healthcare:
- In ACO underwriting, providers are asked to accept financial risk for patient outcomes but lack the actuarial tools to price that risk. [[Sources/Browser-History/2026-01-27-sparx|Sparx]] built ML models on ACO claims data, now serves 20%+ of ACOs, and has unlocked $1B+ in risk-bearing capacity. In one contract, their predictions gave ACO leadership enough confidence to take downside risk and realize 62.1% savings. The incumbent actuarial consultants were overpricing the risk, and the ACOs were leaving money on the table. 
- In consumer health benefits, the same mispricing exists at the individual level. A healthy 30-year-old on an employer plan pays ~$9,325/year in premiums but uses $2,000-3,000 in actual services, overpaying $6,000-7,000/year to cross-subsidize risk the insurer can't or won't price accurately. Companies building consumer-directed health infrastructure are exploiting this same gap — right-sizing coverage by separating routine care (predictable, budgetable) from catastrophic risk (unpredictable, insurable), which the [[Sources/Research-Papers/RAND Health Insurance Experiment|RAND Health Insurance Experiment]] showed reduces spending 30% with no difference in health outcomes.
- In medical malpractice, legacy carriers price physician risk using specialty and geography as blunt proxies — an OB in Florida pays ~$120,000/year regardless of individual claim history. [[Sources/Browser-History/2026-01-31-indigo-raises-50-million-to-modernize-medical-malp|Indigo]] (Rubicon Founders, $50M Series B January 2026) built a proprietary AI risk model using billions of data points to prescore every physician in the US, then targets the most attractive practices with pricing aligned to their actual risk profile. With 5 underwriters processing 7,000+ submissions/year and 20% fully auto-underwritten with no human involvement, Indigo reaches practices that legacy carriers either overprice or won't serve. The same pattern: incumbents price at population level, AI-native underwriter prices at individual level, captures the spread.


---

## What This Means Going Forward

The opportunity compounds because healthcare risk is mispriced at every layer (plan-level, provider-level, individual-level) and the startups that win won't be point solutions optimizing one workflow for analytics but underwriting platforms that reprice the risk itself.

The risk is that incumbents close the gap through acquisition of AI capability or building in-house. If a major carrier acquires an AI underwriting startup or builds equivalent infrastructure, the pricing advantage narrows at that layer. However, the startups winning here aren't competing on the same axis but they're serving segments incumbents structurally can't or won't: small employer groups without claims history, ACOs without actuarial infrastructure, individual physicians overpriced by specialty-level pooling. The incumbents that could theoretically close the gap profit from the opacity that creates it.

The deeper bet is that this isn't a technology gap incumbents can close with engineers. It's a business model gap. Carriers profit from opacity and population-level pricing. An underwriting platform that prices at the group or individual level and passes savings through is structurally misaligned with how carriers make money. That misalignment is what makes the arbitrage durable even as incumbents add AI capability.

What other areas is there potential risk arbitrage? 

---

## Sources

- [[Sources/Portfolio/WriteWise/|WriteWise (Portfolio)]]
- [[Sources/Market-Research-PDFs/12-mavrx-platform-saas-pbm-pricing-150a0269|MavRx Platform Overview]]
- [[Sources/Market-Research-PDFs/writewise---external-investment-memo-fdf54dc7|WriteWise Investment Memo]]
- [[Sources/Browser-History/2026-01-27-sparx|Sparx — ACO Underwriting]]
- [[Sources/Granola/Jimmy Teng and Emre Karatas|Jimmy Teng / Emre Karatas Meeting (Sparx context)]]
- [[Sources/Research-Papers/RAND Health Insurance Experiment|RAND Health Insurance Experiment]]
- [[Sources/LLM-Chats/2025-12-21-AI-for-stop-loss-insurers|AI for Stop-Loss Insurers Analysis]]
- [[Sources/Market-Research-PDFs/claude-ai-opportunities-in-stop-loss-insurance-for-healthcar-e333d1b5|Stop-Loss Insurance AI Opportunities]]
- [[Sources/Browser-History/2026-01-27-optum-real|Optum Real]]
- [[Sources/Browser-History/2025-12-23-nationwide-to-acquire-allstate-employer-stop-loss|Nationwide/Allstate Stop-Loss Acquisition]]
- [[Sources/Browser-History/2026-01-13-thesis-viewer-virtue-vc|Thesis Viewer Context (UHC, regulatory)]]
- [[Sources/Browser-History/2026-01-31-indigo-raises-50-million-to-modernize-medical-malp|Indigo $50M Series B (January 2026)]]
- [[Sources/Browser-History/2026-01-31-indigo-medical-malpractice-insurance-for-physician|Indigo Platform Overview]]
- [[Sources/Browser-History/2025-12-23-episode-1-ai-and-the-health-services-pl-rubicon-f|Rubicon Founders — AI and the Health Services P&L (Indigo context)]]
- [[Sources/Granola/Docshield __ Virtue|DocShield Meeting (med mal market context)]]
