---
type: portfolio
company: Standard Model Bio
generated: 2026-01-08
context: 6-month post-investment evolution analysis
sources: Investment memo, 7 Granola syncs (Sept-Dec '25), manifesto, follow-on diligence, public web research
---

# Standard Model Bio: 6-Month Evolution Debrief

**Investment:** August 2025 | $1.8M SAFE @ $22.5M post | Virtue 8%
**Review Date:** January 8, 2026
**Context:** Series A prep at JPM; follow-on investment under consideration

---

## Executive Summary

SMB has executed well on technical milestones and exceeded expectations on AMC partnerships, but commercial traction is concentrated in Sanofi with tighter-than-expected runway. The JEPA architecture bet paid off (+5.8% AUROC vs LLMs on dynamic tasks), and Tempus seeking SMB as a partner is the strongest competitive validation possible. Primary risks are Sanofi concentration (10.9 months runway), Epic Curiosity emergence (100B events, same world-model concept), and Series A timing pressure.

**Net assessment:** Technical execution exceeded expectations. Commercial slightly behind (Sanofi delayed but larger, BMS gone). Data partnerships on track. Proceed with follow-on, watch Epic researcher results (Feb 2026) and Sanofi contract close (Mar/Apr 2026).

---

## Investment Thesis Recap

SMB builds multi-modal foundation models for biopharma. The core insight:

1. **Pharma can't build internally** — data siloed across departments, IT bureaucracy (W&B took 1 year at BMS vs 5 days at Adobe), talent leaves frustrated
2. **Data is the moat** — "Once we get plurality, not working with us fundamentally limits their AI performance, which is unacceptable"
3. **Performance matters in bio** — minor differences = billions in revenue (Opdivo vs Keytruda example)

Original milestones for Series A (from investment memo):
- Close 2 pharma deals (BMS + Sanofi)
- 2 more in pipeline (J&J, Novartis)
- 5+ tier-1 data partners
- Hire VP AI and Product Strategy

---

## Technical Evolution

### Architecture Shift: LLM+ → JEPA World Model

The most important technical decision since investment was adopting JEPA (Joint-Embedding Predictive Architecture) instead of pure LLM fine-tuning.

| Approach | What It Predicts | Problem |
|----------|------------------|---------|
| LLM | Next token | "Language is lossy proxy for biological complexity" |
| JEPA | Next patient state | S(t) + Intervention → S(t+1) |

**Why this matters:** LLMs achieve only 30.3% completeness on real oncology treatment decisions. When a physician asks "If I give Drug A, where will this patient be in 6 months?", an LLM has no mechanism to answer — it can only generate plausible-sounding text.

### Model Development Timeline

| Date | Model/Capability | Validation |
|------|------------------|------------|
| Pre-Aug '25 | BMS oncology model | $1M contract |
| Sept '25 | 3 preprints (2 ICLR submissions) | External visibility |
| Oct '25 | Pan-cancer genomics expansion | UCSD collaboration |
| Nov '25 | SMB-EHR-4B (public data only) | 0.708 AUROC |
| Dec '25 | SMB-v1-1.7B (sft+jepa) | **0.727 AUROC** |
| Dec '25 | 1M oncology CTs from Gradient | $150K acquisition |
| Dec '25 | MSK iHub validation complete | Primary benchmark |
| Dec '25 | 3 ICLR 2026 acceptances | GenVarFormer, KRONOS, EHR FM |

### Benchmark Performance (MSK Validation)

| Model | AUROC | Type |
|-------|-------|------|
| Gradient Boosting | 0.643 | Classical ML |
| Qwen3-VL 4B | 0.664 | LLM |
| SMB-EHR-4B (public data) | 0.708 | SMB |
| SMB-v1-1.7B (sft only) | 0.715 | SMB |
| **SMB-v1-1.7B (sft+jepa)** | **0.727** | SMB + JEPA |

**Hierarchy proven:** Classical ML < LLM < SMB < SMB+JEPA

### Task-Specific Performance

| Task | SMB JEPA | Best LLM | Delta |
|------|----------|----------|-------|
| Overall prognosis | 0.727 | 0.687 | +5.8% |
| Treatment change prediction | 0.78 | 0.70 | +11.4% |
| Sarcoma (heterogeneous) | 0.77 | 0.71 | +8.5% |

**Key insight:** JEPA lift is largest on dynamic tasks (treatment response, progression) where LLMs fail. On static classification, LLMs are competitive.

### Models Published (Hugging Face)

| Model | Size | Date |
|-------|------|------|
| SMB-v1-1.7B-Structure | 1.7B | Dec '25 |
| smb-ehr-4b | 4B | Nov '25 |
| smb-vision-v0-risk | 0.6B | Oct '25 |
| + 7 additional vision models | — | — |

---

## Commercial Evolution

### Pharma Pipeline: Deal-by-Deal

| Prospect | Aug '25 | Dec '25 | $ Amount | Status |
|----------|---------|---------|----------|--------|
| **BMS** | $1M signed | **Gone** | $1M | Disappeared from conversation |
| **Sanofi** | "Expected Sept/Oct" | POC signed | $360K → $4.8M | 98% confidence Mar/Apr |
| **AstraZeneca** | "Complicated" | Converting to paid | TBD | Weekly meetings |
| **IQVIA** | Not mentioned | Proposal submitted | **$44M** | No response yet |
| **Tempus** | Not mentioned | Seeking SMB as partner | $4M sliding scale | Validates thesis |
| **GSK** | Not mentioned | Meeting scheduled | TBD | Kim Branson target |

### What Happened to BMS?

BMS was the original anchor customer ($1M for line of therapy transfer on nivolumab). They disappeared from conversation by Nov '25. Likely reasons:
- Cash constraints (recent Bane spinout)
- Rejected Tempus at $10M price point — suggests budget issues, not SMB-specific
- Internal politics / need for "right-level entry point"
- Quant Health may have won smaller pilot ($250K)

**Implication:** Original commercial proof point is gone. Sanofi is now everything.

### Sanofi Pilot: Deep Dive

**The Use Case:** Enrollment prediction via I/E criteria matching

> "Given a patient's current state and trial I/E criteria, WHEN will this patient become eligible?"

**Workflow:**
1. SMB model ingests Sanofi's RWD (EHR, labs, treatment history)
2. Produces universal patient representations
3. Predicts which patients match criteria and when
4. Output: Enrollment forecasts by site, timeline, cohort

**Deal Structure:**
- POC: $360K (signed Dec '25)
- Full contract: $4.8M (6 TAs × $800K)
- Timeline: Mar/Apr 2026 (98% confidence per Kevin)

**The Champion: Galen**
- Executive sponsor at Sanofi, previously at BMS
- Philosophy: "I want you to train on other people's data because it makes it more valuable to us"
- Wife is Novartis Chief Commercial Data Officer — potential second deal
- Wants press release at JPM

**Expanded Scope (Beyond POC):**
- I/E criteria simulation ("What if we change biomarker threshold?")
- Full program optimization (not just single trials)
- PTRS prediction (probability of technical/regulatory success)

**Why Enrollment Matters:**
- Trials delayed 9-18 months due to enrollment
- Each month delay costs ~$11M average
- 9 in 10 eligible patients never learn they're candidates

### IQVIA Opportunity

$44M proposal submitted (via Nvidia intro). Includes compute. First milestone $1M. No response yet. This would be transformative if it closes but timeline is unclear.

### Tempus Validation

Tempus — supposed to be the leader in clinical genomics — is seeking SMB as a foundation model partner. This is the strongest competitive validation possible.

> "Unusual request: Tempus seeking genomics foundation model partners despite this being their strongest area."

Pricing: $4M if no IP retained, 50% discount if SMB gets model weights.

---

## AMC Partnership Evolution

| Institution | Status | Data/Validation |
|-------------|--------|-----------------|
| **MSK** | Validation complete | Benchmarks published, iHub Challenge |
| **MD Anderson** | 3 active projects | Logo permission pending |
| **Yale** | Multiple collaborations | Active |
| **UCSD** | 2 projects | 700K EHRs + images |
| **Mount Sinai** | Expanding | Ben Glicksberg lead |
| **Mayo Clinic** | In-person visit requested | Dec '25 |
| **MGH/Harvard/Dana-Farber** | MM FM collab | In pipeline |
| **Nash Bio/Vanderbilt** | Discussion | Multimodal data access |

**Velocity:** Sept '25 was 1 partnership. Dec '25 is 6+.

**Strategy:** Give models free/at-cost → get data + validation → use validation to close pharma → pharma revenue funds more data → flywheel.

**Open question:** Are these exclusive? Can MSK also work with Tempus/Bioptimus/Google? Who owns trained model weights?

---

## Team Evolution

### Key Hire: Erik Reinertsen (VP, AI Product & Strategy)

- Built data science at Prometheus Biosciences through IPO → $10.8B Merck acquisition
- MIT/Harvard postdoc, physician-data scientist
- This was explicitly called out in investment memo as critical hire

### Other Changes

- **Arda Pekis** promoted to CTO (was medical imaging lead)
- **Irsyad Adam** joined — PhD thesis + ICLR paper in first month
- **Danielle Orozco Cosio, PhD** joined (MIT, San Diego)
- Team: 6 → 8 people

### Velocity Indicators

- Zekai: ACL paper in 1 week
- Irsyad: ICLR + PhD thesis defense in first month
- 3 ICLR 2026 acceptances
- Ex-Stripe leader noted "insanely high" talent density

---

## Competitive Landscape

### Epic Curiosity (Primary Threat)

Not mentioned in Aug '25 memo. Now the primary bear case.

| Metric | Epic Curiosity | SMB |
|--------|----------------|-----|
| Patient events | 100B | ~millions |
| Patients | 300M | AMC partnerships |
| Architecture | World model ("plausible future timelines") | JEPA world model |
| Market focus | Hospital operations | Pharma R&D |
| Launch | Sept '25, researcher access Feb '26 | Sept '25 stealth exit |

**SMB's Response:**
1. Different buyers — Epic targets hospital ops (LOS, readmission), SMB targets pharma (trial design, drug development)
2. Data governance — pharma can't use Epic's hospital data for proprietary drug development
3. Architecture edge — JEPA shows +5.8% lift on dynamic tasks
4. First-mover in pharma — 18+ months of relationship building

**Key watch:** Epic researcher results in Feb 2026. If Epic matches JEPA performance, differentiation erodes.

### Other Competitors

| Competitor | Aug '25 View | Dec '25 View |
|------------|--------------|--------------|
| **Tempus** | $10M+ quotes to pharma | Seeking SMB as partner |
| **Bioptimus** | Biology-level FM | M-Optimus launched |
| **OpenAI/Anthropic** | Lack data access | Still lack access (needed Formation Bio for Sanofi deal) |
| **Pathos** | — | CSO wants SMB to power biomarkers |
| **RWD companies** | — | "Concerned SMB eating their lunch" |

---

## Financial Position

| Date | Runway | Key Dependency |
|------|--------|----------------|
| Oct '25 | 38 months | If Sanofi closes |
| Nov '25 | 12 months | Current burn |
| Dec '25 | **10.9 months** | Sanofi $4.8M Mar/Apr |

**Series A Status:**
- Target: $30M
- JPM meetings scheduled: Lux, GV, North Pond, Pioneer, Obvious, Prudent
- Virtue intros made: Bessemer (Marla Jalbut), 8VC (Susan Liu)

**Concern:** Gap between Oct ("38 months if Sanofi") and Dec ("10.9 months") suggests burn increased and/or Sanofi timing slipped.

---

## Scorecard vs Investment Memo

| Milestone | Target | Status |
|-----------|--------|--------|
| 2 pharma deals signed | BMS + 1 | BMS gone; Sanofi POC signed |
| 2 more in pipeline | J&J, Novartis | AstraZeneca, IQVIA, GSK, Tempus |
| 5+ tier-1 data partners | Goal | 6+ confirmed |
| Hire VP AI/Product | 1 | **Erik Reinertsen hired** |
| $10-20M raise at JPM | Jan '26 | Targeting $30M, in progress |

---

## Bull vs Bear Case

### Bull Case ($1B+ outcome)

- JEPA validated at MSK, advantage holds vs Epic
- Sanofi closes ($4.8M), IQVIA follows ($44M)
- Tempus seeking SMB as partner = build vs buy validated
- AMC data plurality creates winner-take-all
- Team velocity sustains through scale
- Series A closes at $30M, accelerates data flywheel
- SMB becomes "quiet backbone" of biomedical AI

### Bear Case ($50-100M exit)

- Epic Curiosity matches JEPA on dynamic tasks
- OpenAI partners with Tempus or Epic, gets instant data scale
- Sanofi slips past Mar/Apr, runway runs out
- AMC partnerships non-exclusive, competitors replicate
- Series A stalls, forced to raise bridge
- Pharma AI budgets contract in macro downturn

---

## Open Questions for Kevin

### On Sanofi (Critical Path)

1. What are the specific gating factors for $4.8M Mar/Apr close?
2. Is Galen's commitment still solid? Any internal politics risk?
3. What's the contingency if it slips to Q2?
4. Is press release at JPM still planned?

### On BMS

5. What happened? Worth re-engaging?
6. Did Quant Health win the business?

### On IQVIA

7. Who's the internal champion?
8. What's the decision timeline?
9. Is this real or exploration?

### On Epic Competition

10. Have pharma prospects mentioned Epic?
11. What's the response when investors ask "why won't Epic do this"?
12. Is there any scenario where Epic serves pharma R&D directly?

### On AMC Strategy

13. Are any partnerships exclusive?
14. Who owns trained model weights on AMC data?
15. If Epic/OpenAI approaches MSK, what's the defense?

### On Series A

16. What's the target valuation?
17. Who's leading? Any term sheets?
18. 10.9 months runway — backup plan if Series A slips?

---

## What Virtue Can Help With

**Health System Intros:**
- Mayo (Vera Mucaj intro made Dec '25)
- Kaiser — potentially massive data partnership

**Investor Intros:**
- Bessemer (Marla Jalbut intro made)
- 8VC (Susan Liu intro made)

**Competitive Intelligence:**
- We track Epic closely via thesis work
- Ongoing updates on Curiosity researcher results (Feb '26)

---

## Bottom Line

**What's working:**
- Technical validation (JEPA +5.8% at MSK)
- Commercial traction (Sanofi closing)
- AMC data flywheel (6+ partnerships)
- Team velocity (3 ICLR papers, Erik hired)
- Competitive validation (Tempus seeking SMB)

**What needs watching:**
- Sanofi concentration risk
- Epic Curiosity emergence
- AMC exclusivity unclear
- Runway pressure (10.9 months)
- BMS relationship gone

**Recommendation:** Proceed with follow-on. Monitor:
- Sanofi $4.8M close (Mar/Apr)
- Epic researcher results (Feb)
- Series A progress (JPM)

---

*Generated from Claude Code session 2026-01-08*
*Sources: Investment memo, 7 Granola syncs, manifesto, follow-on diligence doc, public web research*
