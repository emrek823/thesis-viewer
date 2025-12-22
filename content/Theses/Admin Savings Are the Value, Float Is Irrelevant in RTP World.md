# Thesis: Admin Savings Are the Value, Float Is Irrelevant in RTP World

## Investment Take

Healthcare payment infrastructure is built for insurance. As cash-pay, DPC, and self-funded models grow, the rails can't support them. The opportunity isn't float (basis points for providers)—it's admin savings: prompt pay penalties, MA stars impact, re-adjudication costs, call center burden ([[Matt Swatzell and Virtue]]).

Float doesn't matter: health insurance float is only 0.3x premiums vs 2.5x P&C, 10x life insurance. Investment income contributes just 20% of health insurance profit vs 70% P&C ([[Post LinkedIn]]). Delayed payment is intentional float strategy, not technology problem. AI won't reduce provider AR because payers are economically motivated to delay. The value is in reducing $200B in admin friction.

RTP costs $0.02 vs wire $20—1000x efficiency. RTP Network (550+ FIs, 70% U.S. coverage) and FedNow (650+ FIs) both available but healthcare remains "late adopter." Chicken-and-egg: providers need payers to send via RTP, payers need providers to accept.

Pre-claim intervention validated: Codoxo Point Zero achieves up to 40% reduction in overpayments, $12-16 PMPY savings, 42% admin cost decrease, 20-30x efficiency vs post-claim ([[DS_Point_Zero]]). Moving "further left" in payment lifecycle—provider education before claims created—transforms adversarial to collaborative relationships.

Machinify's $670M Performant acquisition confirms platform strategy: 75+ health plans, 170M lives, full-stack prevention-detection-recovery ([[2025-12-21-machinify-completes-acquisition-of-performant-heal]]). Winners control multiple intervention points across payment lifecycle.

**How this evolved:**
- *2025-12-05:* Matt Swatzell crystallized: float is irrelevant, admin savings are the value.
- *2025-12-20:* Added pre-claim payment integrity evidence (Codoxo). Value extends beyond rails to entire payment lifecycle. Machinify/Performant deal validates platform approach.
- *2025-12-21:* Added Performant market sizing: $300B+ payment integrity space, 1 in 5 claims wrong.

---

## Bull Case

- [x] **Economics are obvious once articulated.** Float irrelevance + admin savings math is clear. First mover with RTP-native rails captures margin.
  - *Evidence:* [[Matt Swatzell and Virtue]] — Float = basis points, admin savings = material. RTP $0.02 vs wire $20.

- [ ] **Pre-claim intervention proven.** 40% overpayment reduction, 20-30x efficiency vs post-claim. $400B fraud/waste baseline.
  - *Evidence:* [[DS_Point_Zero]] — $12-16 PMPY savings, 42% admin cost decrease

- [ ] **Change Healthcare disruption creates wedge.** Post-cyberattack diversification means providers open to switching. Multi-year contracts ending 2025-2026.
  - *Evidence:* Needs validation — Track contract renewal timing at large health systems

---

## Bear Case

- [ ] **Insurance rails entrench.** If 90%+ of spend stays insurance-mediated, cash-pay infrastructure remains niche (<$50B vs $4T total).
  - *Evidence:* Needs monitoring — Track DPC growth rate, GLP-1 DTC market size

- [ ] **Stripe Health.** Horizontal payments infrastructure extends to healthcare with 50-state compliance bundled. Developer ecosystem + brand moat insurmountable.
  - *Evidence:* Needs monitoring — Stripe Health announcements, B2B vs consumer focus

- [ ] **Epic bundling kills patient payment opportunities.** Epic "Cheers" competes with Cedar. 70%+ of beds on Epic. If Epic bundles at zero marginal cost, Cedar and competitors lose hospital market.
  - *Evidence:* Needs validation — Interview Epic health systems on Cheers bundling vs add-on pricing

---

## Startup Opportunities

**1. RTP-Native Healthcare Payments**
- Replace ACH/wire with real-time settlement for provider payments
- Why this follows: $0.02 vs $20 cost creates massive margin opportunity
- Start with high-volume specialty (infusion, imaging) where working capital matters
- Risk: Need payer adoption for network effects; chicken-and-egg

**2. Cash-Pay Infrastructure Platform (Proto model)**
- 50-state proxy coverage enabling telehealth/DPC scaling
- Why this follows: Systems tied to insurance rails prevent cash-pay scaling ([[Proto __ Virtue]])
- Revenue: Platform fee ($500-2K/mo) + interchange capture (1-2% vs 3% virtual cards)
- Risk: 50-state licensing = $10M+ regulatory costs before revenue

**3. Pre-Claim Payment Integrity Platform**
- Provider education before claims created (Codoxo Point Zero model)
- Why this follows: 20-30x efficiency vs post-claim. Transforms adversarial to collaborative.
- Revenue: PMPY savings share ($6-12 PMPY, take 30-50%)
- Risk: Codoxo already executing; data access barriers

---

## Open Questions

**What's the minimum network scale for RTP economics to work in healthcare?**
→ OPEN: If RTP requires 50%+ payer adoption, chicken-and-egg unsolvable in venture timeframe. Interview specialty providers on threshold for cash flow improvement.

**Will Epic bundling kill patient payment opportunities?**
→ OPEN: Track Epic Cheers adoption at hospital systems. If bundled at zero marginal cost, avoid patient payment layer.

**How does Stripe Health positioning affect startup opportunity?**
→ OPEN: Monitor Stripe Health: B2B or consumer? Compliance bundled or partnered? Window to build moat before Stripe scales.

**What's the realistic TAM for cash-pay infrastructure?**
→ OPEN: If DPC stays <30K practices and GLP-1 DTC <$30B, may not be venture-scale as pure-play.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-05 | [[Matt Swatzell and Virtue]] | Operator | Float not material. Real value: admin savings (prompt pay, MA stars, re-adjudication). RTP $0.02 vs wire $20. |
| 2025-11-25 | [[Proto __ Virtue]] | Operator | Cash-pay infrastructure gap. Systems tied to insurance rails. Clinics paying $100K+ for Frankenstein stacks. |
| 2025-12-20 | [[DS_Point_Zero]] | Research | Pre-claim payment integrity: 40% overpayment reduction, $12-16 PMPY, 42% admin cost decrease, 20-30x efficiency. |
| 2025-12-20 | [[2025-12-21-machinify-completes-acquisition-of-performant-heal]] | Company | $670M deal. 75+ health plans, 170M lives. Full-stack: prevention + detection + recovery. |
| 2025-12-20 | [[Post LinkedIn]] | Research | Health insurance float 0.3x premiums vs 2.5x P&C. Investment income only 20% of profit. Delay is intentional. |
| 2025-12-21 | [[Performant Investor Overview]] | Company | $300B+ payment integrity space. 1 in 5 claims wrong. $4-5B serviceable: Federal $500M-1B, State $300-500M, Commercial $3.2-3.5B. |
| 2025-12-08 | [[Virtue _ Autonomy]] | Operator | Stedi→FrontRunner switch: 75¢ vs 11-12¢. Vendor economics poorly understood, switching costs overestimated. |
