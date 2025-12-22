# Thesis: Prior Auth Vendors Can't Scale Quality—Build In-House Wins

## Investment Take

Prior auth automation is a graveyard of VC-backed startups. The pattern: raise Series A/B, prioritize growth, let quality collapse, customers churn to in-house. Silna Health is the case study: 200 payers, 30 states, saves 50-100 hours/week—but 5% error rate (50/1000 auths wrong) is "unacceptable" ([[Co-Founder, President and CTO at Finni Health _ Silna Health _ Tegus]]).

The customer is building in-house replacement: "We can do it for less money than what we're paying Silna right now." Offshore staff + internal software = better quality control. The founder's verdict: "Founders raise a Series A or Series B and just care about growth, and they just let their product go to shit."

Cohere Health confirms the market dynamics: 9-36 month payer buying cycles, 2% bookings adoption, $10-50M board approval thresholds ([[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]]). Enterprise healthcare sales are brutal. Startups burn cash waiting.

**The investment take:** Don't invest in prior auth vendors. Invest in infrastructure that enables in-house builds (APIs, clearinghouse integrations, workflow tools). Or invest in the acquirers (payers, health systems) who will build internally.

**How this evolved:**
- *2025-12-21:* Emerged from Silna + Cohere sources. Pattern: vendor quality declines → customers build in-house → market stays fragmented.
- *2025-12-21:* Historical context strengthens thesis. UHC removed ALL prior auths in 1999—and it saved money via care management. Prior notification + care coordination beats prior auth automation. AI is "making prior auths worse" by automating bad processes ([[Prior authorizations, past and present with Archelle Georgiou, MD]]).
- *2025-12-22:* Payer + customer perspectives confirm. Elevance rates Anterior 8/10 but says prior auth is "table stakes, not game changer" ([[Senior Director - Product, GTM, and Growth Strategy at Elevance Health Inc. _ Anterior _ Tegus]]). Grow Therapy using Brellium for audit readiness but explicitly asks: "If you're starting to build in-house AI capabilities, why would you need Brellium?" ([[Senior Business Operations Manager, Clinical at Grow Therapy _ Brellium _ Tegus]]). Customers already questioning vendor value.
- *2025-12-22:* **Market segmentation: medical PA ≠ pharmacy PA.** LifePoint CMIO ($12B system): "It's easier in pharmacy than it is on AI for you to get a clearance... real-time pharmacy benefits are more equipped with technology to support pharmacy as an AI initiative." Pharmacy PA players (Latent, Plenful, Mandolin) compete in distinct market from medical PA vendors. 340B participants "absolutely need one of these vendors." This thesis is about MEDICAL prior auth—pharmacy may be a different opportunity ([[Chief Medical Informatics Officer (CMIO), VP & AI_RCM_CDI Physician Executive at LifePoint Health _ Plenful _ Tegus]]).

---

## Bull Case

- [ ] **Someone figures out quality at scale.** If a vendor maintains 99%+ accuracy while growing, moat is real.
  - *Evidence:* Needs validation — No evidence yet of quality + scale

- [ ] **Regulation forces standardization.** If CMS mandates electronic prior auth with standard APIs, complexity drops.
  - *Evidence:* [[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] — CMS 57 API regulation

- [ ] **Payer consolidation accelerates.** If top 15 payers (65% of covered lives) adopt standard platforms, fragmentation reduces.
  - *Evidence:* Needs monitoring — Track payer platform announcements

---

## Bear Case

- [x] **Quality degrades with growth.** Silna: "quality has gone down the drain" after scaling. Offshore ops can't maintain accuracy.
  - *Evidence:* [[Co-Founder, President and CTO at Finni Health _ Silna Health _ Tegus]] — 5% error rate, declining quality

- [x] **In-house is cheaper.** "We can do it for less money than Silna." Philippine staff + internal software beats vendor.
  - *Evidence:* [[Co-Founder, President and CTO at Finni Health _ Silna Health _ Tegus]] — Building replacement

- [ ] **Buying cycles kill startups.** 9-36 months, $10-50M board thresholds. Startups can't survive.
  - *Evidence:* [[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] — 2% adoption rate

- [ ] **Payers shift to prior notification model.** If payers adopt UHC's 1999 approach (notification + care management instead of authorization), prior auth automation market shrinks entirely.
  - *Evidence:* [[Prior authorizations, past and present with Archelle Georgiou, MD]] — UHC removed all prior auths, saved money

- [x] **Payers see this as commodity, not priority.** "Prior auth is table stakes, not the game changer. Best minds work on behavioral health, diabetes, maternity."
  - *Evidence:* [[Senior Director - Product, GTM, and Growth Strategy at Elevance Health Inc. _ Anterior _ Tegus]] — Elevance strategic leader deprioritizes PA innovation

- [ ] **Customers already questioning vendor value.** "If you're starting to build in-house AI, why would you need Brellium?"
  - *Evidence:* [[Senior Business Operations Manager, Clinical at Grow Therapy _ Brellium _ Tegus]] — Active customer already thinking about replacement

---

## Startup Opportunities

**1. Prior Auth Infrastructure (not platform)**
- APIs, clearinghouse integrations, workflow tools for in-house builds
- Why this follows: If everyone builds in-house, sell picks and shovels
- Wedge: Developer tools for health tech teams
- Risk: Low margin, commoditizes

**2. Payer-Side Prior Auth (not provider-side)**
- Help payers automate approval (not submission)
- Why this follows: Provider-side is graveyard. Payer-side has fewer vendors.
- Wedge: Payer relationship + regulatory expertise
- Risk: 9-36 month sales cycles still apply

**3. Credentialing (adjacent, more painful)**
- Silna customer: "Credentialing is definitely the largest pain point... no one does a good job"
- Why this follows: Same buyer, worse existing solutions
- Wedge: Network effects if you credential across payers
- Risk: Also hard to scale quality

---

## Open Questions

**Is there a quality + scale model that works?**
→ OPEN: If someone cracks this, thesis is wrong. Track vendor accuracy metrics over time.

**Does CMS 57 API change the game?**
→ OPEN: If standard APIs reduce payer fragmentation, market dynamics shift.

**Will credentialing be different?**
→ OPEN: Same quality-at-scale problem. "No one does a good job" suggests same pattern.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-21 | [[Co-Founder, President and CTO at Finni Health _ Silna Health _ Tegus]] | Operator | 5% error rate, 50-100 hrs/week saved, but building in-house. "Quality went to shit." |
| 2025-12-21 | [[Former Vice President of Product Management at Change Healthcare _ Cohere Health _ Tegus]] | Operator | 9-36 month buying cycles, 2% adoption, $10-50M board thresholds. |
| 2025-12-21 | [[Founder, Managing Partner at Si’Quent Engineering _ Cohere Health _ Tegus]] | Operator | Payer market dynamics, slow adoption. |
| 2025-12-21 | [[Prior authorizations, past and present with Archelle Georgiou, MD]] | Operator | UHC removed all prior auths in 1999, saved money via care management. "AI is making prior auths worse." |
| 2025-12-22 | [[Senior Director - Product, GTM, and Growth Strategy at Elevance Health Inc. _ Anterior _ Tegus]] | Operator | Anterior 8/10 but PA is "table stakes." Reduce manual 70-75%. Accuracy > denial rate. |
| 2025-12-22 | [[Senior Business Operations Manager, Clinical at Grow Therapy _ Brellium _ Tegus]] | Operator | Brellium C/C+ rating. 1000s claims in 1-2 days vs manual. But: "Why need Brellium if build in-house?" |
| 2025-12-22 | [[Chief Medical Informatics Officer (CMIO), VP & AI_RCM_CDI Physician Executive at LifePoint Health _ Plenful _ Tegus]] | Operator | $12B system chose Plenful over Latent. "Easier in pharmacy than medical" for AI clearance. 340B = must have vendor. |
