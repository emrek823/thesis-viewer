# Thesis: RL + Proprietary Workflows = Enterprise AI Moat

## Investment Take

Foundation models can't solve enterprise-specific workflows. The last-mile gap persists because enterprise processes are proprietary, domain-specific, and shaped by messy data. Better base models help, but they can't close the gap alone ([[RL in Real Life Durable Moats]]).

RL + proprietary data + domain expertise = moat. The evidence is clear: SmarterDx achieves 30-40% improvement on ICD-10 PCS coding through fine-tuning vs. frontier models. "Transforms rejection rate: from rejecting 2 out of 3 to accepting 2 out of 3 recommendations" ([[Virtue (Sean _ Emre) __ Scott Fleming]]). Cursor and Cognition use online RL for real-time code suggestion tuning based on tab acceptance.

The moat formula requires three ingredients:
1. **Verifiable environments** — Clear success criteria (code compiles, claim accepted, test passes)
2. **Fast feedback loops** — User signals that reinforce behavior (tab acceptance, claim approval)
3. **Domain expertise** — Understanding of workflow nuances that foundation models lack

**The investment angle:** Invest in companies with all three ingredients. Avoid pure-play RL infrastructure—talent scarcity and data governance make it hard to scale. Best opportunities: coding, claims processing, clinical documentation where verification is built-in.

**How this evolved:**
- *2025-12-22:* Greylock RL analysis + SmarterDx fine-tuning data + Cursor/Cognition examples converged on the pattern.

---

## Bull Case

- [x] **Fine-tuning beats frontier models on domain tasks.** SmarterDx: 30-40% improvement on ICD-10 PCS vs. GPT-5.
  - *Evidence:* [[Virtue (Sean _ Emre) __ Scott Fleming]] — "Transforms rejection rate: 2/3 rejected → 2/3 accepted"

- [ ] **RL creates self-improving products.** Companies with online RL can continuously improve from user feedback.
  - *Evidence:* [[RL in Real Life Durable Moats]] — Cursor/Cognition use online RL for tab acceptance optimization

- [ ] **Enterprise workflows remain proprietary.** Insurance claims, credit underwriting, clinical documentation vary widely across organizations.
  - *Evidence:* [[RL in Real Life Durable Moats]] — "These problems depend on deep understanding of unique business context"

- [ ] **Labs not optimizing for enterprise.** OpenAI focused on AGI, not ICD-10 coding.
  - *Evidence:* [[Virtue (Sean _ Emre) __ Scott Fleming]] — OpenAI: "not interested in improving models for operational healthcare"

---

## Bear Case

- [ ] **Talent scarcity.** Few people have applied RL to real products. Very expensive to hire.
  - *Evidence:* [[RL in Real Life Durable Moats]] — "Very few pockets of talent have applied RL methods on real-world products"

- [ ] **Data governance blocks training.** Enterprises can't share customer data with vendors. Synthetic data may not work.
  - *Evidence:* [[RL in Real Life Durable Moats]] — "Most companies unable to share true customer data with vendors"

- [ ] **Sparse reward signals.** Many workflows lack clear success criteria. Partial rewards and reward shaping add complexity.
  - *Evidence:* [[RL in Real Life Durable Moats]] — "Data can be ambiguous, or even too sparse to interpret"

- [ ] **Foundation models catch up.** If GPT-6 solves domain tasks, fine-tuning moat erodes.
  - *Evidence:* Needs monitoring — Track frontier model performance on domain benchmarks

---

## Startup Opportunities

**1. Verifiable Domain Agents**
- Claims coding, clinical documentation, legal contracts—where success is measurable
- Why this follows: RL needs clear rewards. Verifiable domains enable self-improvement.
- Risk: Crowded (SmarterDx, Codametrix already at scale)

**2. RL Infrastructure for Healthcare**
- Post-training platform specialized for healthcare workflows
- Why this follows: Enterprises want to experiment but lack in-house expertise
- Risk: Talent scarcity, data governance friction

**3. Federated RL**
- Enable RL training without moving customer data
- Why this follows: Solves data governance blocker
- Risk: Technical complexity, may reduce model quality

---

## Open Questions

**How durable is the fine-tuning moat?**
→ OPEN: If GPT-6 closes the gap, domain fine-tuning becomes less valuable. Track frontier model progress on healthcare benchmarks.

**Which workflows have the best RL properties?**
→ OPEN: Need to map workflows by (1) verifiability, (2) feedback speed, (3) data availability. Claims and coding seem best.

**Will RL infrastructure commoditize?**
→ OPEN: Tinker, OpenAI RFT emerging. If infrastructure commoditizes, moat shifts to data + domain expertise.

---

## Evidence

| Date | Source | Type | Key Signal |
|------|--------|------|------------|
| 2025-12-22 | [[RL in Real Life Durable Moats]] | Research | Greylock: "Better foundation models alone cannot solve bespoke personalization and automation challenges." |
| 2025-12-22 | [[RL in Real Life Durable Moats]] | Research | Cursor/Cognition use online RL. Talent scarcity and data governance are blockers. |
| 2025-12-22 | [[Virtue (Sean _ Emre) __ Scott Fleming]] | Operator | SmarterDx: 30-40% fine-tuning improvement vs frontier. OpenAI "not interested in operational healthcare." |
