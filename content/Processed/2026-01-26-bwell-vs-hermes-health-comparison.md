---
type: research
topic: b.well vs Hermes Health comparison
date: 2026-01-26
assessment: ANSWERED
confidence: HIGH
rounds: 2
vault_sources: 4
web_sources: 15
---

# b.well Is Consumer Aggregation; Hermes Owns the Professional Gap

**b.well is definitively an IAS (Integration/Aggregation System)** — FHIR-native platform aggregating data from 2.2M+ providers into longitudinal records via consumer-mediated access. It powers ChatGPT Health and Google Health. But aggregation solves consumer AI, not professional workflows.

**Hermes Health targets the gap TEFCA/FHIR explicitly excludes:** non-treatment use cases (legal, insurance, life sciences) requiring identified patient data with proper authorization chains. After ChartSwap (Ontellus 2019) and Clareto (MIB 2025) got acquired, no neutral player exists for this $10B TAM.

---

## Why b.well's Approach Is Insufficient

### 1. Consumer-Mediated Only Works for Consumers

b.well operates through patient authentication — user logs into portals, b.well pulls their data. Works for ChatGPT Health where the patient is the requester.

**Doesn't work when:**
- Law firm needs records for litigation
- Insurance company needs records for claims
- Life sciences company needs records for research
- Clinical AI needs records for treatment decisions (patient isn't initiating)

### 2. TEFCA Explicitly Excludes Non-Treatment Use Cases

From thesis evidence: "TEFCA excludes non-treatment use cases" — the federal interoperability framework serves clinical care only. Legal discovery, insurance, life sciences all outside scope.

b.well operates within TEFCA-adjacent flows. Hermes operates in the gap.

### 3. De-Identified vs. Identified Data

| Use Case | Data Type | Who Requests | b.well | Hermes |
|----------|-----------|--------------|--------|--------|
| ChatGPT Health | Consumer-controlled | Patient | ✓ | ✗ |
| Claude for Healthcare | Consumer-controlled | Patient | - | ✗ |
| Physician-in-the-loop (K Health) | Identified | Platform | Partial | ✓ |
| Legal discovery | Identified | Law firm | ✗ | ✓ |
| Insurance claims | Identified | Insurer | ✗ | ✓ |
| Life sciences research | Identified | Researcher | ✗ | ✓ |

### 4. Network Neutrality Lost

- ChartSwap acquired by Ontellus (2019) — lost neutrality (Sedgwick-owned)
- Clareto acquired by MIB (2025) — lost neutrality
- Datavant owns Ciox — not neutral
- b.well is OpenAI/Google partner — not neutral

**Hermes is positioning as the only neutral middleware** for identified health data in non-treatment use cases.

---

## How Anthropic Accesses Records

Claude for Healthcare uses **HealthEx** with **Model Context Protocol (MCP)**:

1. User enables HealthEx connector in Claude
2. Verifies identity via biometrics + government ID
3. Connects patient portal logins
4. HealthEx unifies records across 50,000+ providers
5. Claude uses MCP to retrieve only relevant portions per query

**Key architectural difference from b.well:** Selective retrieval (only categories needed for each question) vs. full record ingestion. Better privacy controls.

**Still consumer-mediated.** Doesn't solve professional workflow problem.

---

## The Hermes Opportunity

### What Hermes Does Differently

1. **Non-treatment use cases:** Legal, insurance, life sciences — $10B TAM
2. **Identified data with authorization:** Professional requesters with proper consent flows
3. **Site Sonar wedge:** 90% hit rate on patient-to-facility matching, 66% margin
4. **Network effects emerging:** Customers waiting for vendors to join Hermes network

### Thesis Connection

From [[Consumer AI Health Platforms—ChatGPT Is Front Door, Physician-in-the-Loop Captures Value by 2028]]:

> "ChatGPT uses b.well for de-identified connectivity; Counsel/K Health need Hermes-style infrastructure for identified data in treatment workflows."

The consumer AI front door (ChatGPT/Claude) is solved by aggregation. The professional layer — where money is made — needs Hermes-style infrastructure.

### Why Now

1. AI creates demand for identified patient data (not just de-identified aggregates)
2. Neutral networks got acquired (ChartSwap, Clareto)
3. TEFCA excludes non-treatment use cases
4. AI automates labor that previously made this a services business

---

## Summary Comparison

| Dimension | b.well | HealthEx (Claude) | Hermes |
|-----------|--------|-------------------|--------|
| Model | Aggregation (IAS) | Consumer-mediated + MCP | Neutral middleware |
| User | Consumer | Consumer | Professional |
| Data type | De-identified/consumer-controlled | De-identified/consumer-controlled | Identified with authorization |
| Use cases | Consumer health AI | Consumer health AI | Legal, insurance, life sciences, physician-in-the-loop |
| TEFCA coverage | Within scope | Within scope | Outside scope (the gap) |
| Neutrality | OpenAI/Google partner | Anthropic partner | Independent |
| TAM | Consumer health AI | Consumer health AI | $10B non-treatment workflows |

---

## Sources

### Vault
- [[Consumer AI Health Platforms—ChatGPT Is Front Door, Physician-in-the-Loop Captures Value by 2028]] — Thesis with b.well/Hermes analysis
- [[Sources/Portfolio/Hermes Health/hermes-strategic-review-2026-01-05]] — Strategic review with metrics
- [[Healthcare AI Stack Wins Through Infrastructure, Not Models—Input Structuring, Integration Depth, and Output Validation by 2028]] — Infrastructure thesis

### Web
- [OpenAI ChatGPT Health launch](https://openai.com/index/introducing-chatgpt-health/) — b.well partnership details
- [b.well Connected Health](https://www.icanbwell.com/) — FHIR platform architecture
- [HealthEx + Anthropic partnership](https://fortune.com/2026/01/11/anthropic-unveils-claude-for-healthcare-and-expands-life-science-features-partners-with-healthex-to-let-users-connect-medical-records/) — MCP integration details
- [Anthropic Claude for Healthcare](https://www.anthropic.com/news/healthcare-life-sciences) — Healthcare launch announcement
- [HLTH - HealthEx partnership](https://hlth.com/insights/news/healthex-and-anthropic-partner-to-bring-personal-health-records-directly-to-claude-2026-01-12) — MCP architecture explanation

---

## Investment Implications

### For Hermes

**Bull signals from this research:**
- OpenAI chose b.well, Anthropic chose HealthEx — neither serves professional workflows. Market gap validated.
- b.well's $40M Series C and ChatGPT partnership proves aggregation value — but also shows aggregation is solved. Next layer is the opportunity.
- HealthEx's MCP architecture shows frontier labs want modular health data access, not monolithic aggregation. Hermes's API-first approach aligns.

**Questions to pressure-test:**
- Can Hermes expand into physician-in-the-loop use cases (Counsel Health, K Health) or is that a different buyer?
- Will b.well/HealthEx expand into identified workflows, commoditizing Hermes's position?
- Does Hermes need to partner with OpenAI/Anthropic or compete with their data partners?

### For Consumer AI Health Thesis

This research reinforces the three-layer model:
1. **Front door (ChatGPT/Claude)** — solved by OpenAI/Anthropic
2. **Aggregation layer (b.well/HealthEx)** — solved by FHIR platforms
3. **Professional data layer (Hermes)** — unsolved, high-margin opportunity

---

## Talking Points

### "Isn't b.well already doing this?"

**Response:** b.well is consumer-mediated aggregation — patient authenticates, b.well pulls their data. Works for ChatGPT Health. But 145M medical record requests/year come from professional workflows — law firms, insurers, researchers — where the patient isn't the requester. TEFCA explicitly excludes these use cases. That's Hermes's $10B TAM.

### "Why can't b.well just expand into identified data?"

**Response:** Three structural barriers:
1. **Authorization model is different.** Consumer-mediated means patient controls access. Professional workflows require third-party authorization with consent chains — different legal/compliance framework.
2. **Customer base is different.** b.well sells to OpenAI/Google/health systems. Hermes sells to law firms, insurers, life sciences. Different GTM, different relationships.
3. **Neutrality matters.** b.well is an OpenAI/Google partner. Hermes is neutral middleware — both sides of a transaction can use it without competitive concerns.

### "What about HealthEx's MCP approach?"

**Response:** MCP is better privacy architecture (selective retrieval vs. full ingestion) but still consumer-mediated. User must authenticate. Doesn't solve professional workflow problem. Claude can answer "what did my last blood test show?" but can't retrieve records for a law firm's litigation.

### "Why did ChartSwap and Clareto get acquired?"

**Response:** The neutral middleware position is valuable — that's why acquirers wanted them. But acquiring into non-neutral parents (Ontellus/Sedgwick, MIB) eliminates neutrality. Now there's no neutral player for non-treatment use cases. First-mover advantage for Hermes.

---

## Competitive Landscape

| Player | Position | Threat to Hermes | Notes |
|--------|----------|------------------|-------|
| b.well | Consumer aggregation | LOW | Different market (consumer vs. professional) |
| HealthEx | Consumer MCP | LOW | Same as b.well, better privacy |
| Datavant | ROI + de-identified | MEDIUM | Owns Ciox, not neutral; Alejandro left for this reason |
| MRO | ROI vendor | LOW | Partner, not competitor; API access granted |
| Verisma | ROI vendor | LOW | Partner, not competitor |
| Ontellus | Acquired ChartSwap | MEDIUM | Lost neutrality, Sedgwick-owned |
| MIB | Acquired Clareto | MEDIUM | Lost neutrality |

**Key insight:** The competitors either serve different markets (b.well, HealthEx) or lost neutrality through acquisition (Ontellus, MIB). Hermes is the only neutral player in non-treatment workflows.

---

## What Would Change This Analysis

### If b.well expands into identified workflows
- Watch for: b.well announcing law firm, insurance, or life sciences customers
- Impact: Would compress Hermes's TAM, need to monitor closely
- Likelihood: LOW — would require fundamentally different authorization model

### If HealthEx adds professional use cases
- Watch for: HealthEx announcing non-consumer customers
- Impact: MCP architecture could be adapted for professional workflows
- Likelihood: LOW-MEDIUM — Anthropic focused on consumer, but MCP is modular

### If Datavant launches neutral middleware
- Watch for: Datavant spinning out neutral subsidiary or acquiring Hermes competitor
- Impact: HIGH — Datavant has relationships and scale
- Likelihood: LOW — strategic conflict with Ciox ownership

### If Epic/Oracle build native non-treatment data access
- Watch for: Epic/Oracle announcements about legal/insurance integrations
- Impact: Would commoditize Hermes's wedge
- Likelihood: MEDIUM — EHRs expanding, but non-treatment is low priority

---

## Open Questions for Follow-Up

1. **Hermes + physician-in-the-loop:** Can Hermes serve Counsel Health, K Health, or does that market need a different architecture?

2. **AI company partnerships:** Should Hermes pursue OpenAI/Anthropic partnerships for professional AI workflows, or stay neutral?

3. **International expansion:** TEFCA is US-specific. What's the equivalent gap internationally?

4. **Regulatory risk:** If TEFCA expands to include non-treatment use cases, does that help or hurt Hermes?

---

## Related Theses

- [[Consumer AI Health Platforms—ChatGPT Is Front Door, Physician-in-the-Loop Captures Value by 2028]]
- [[Healthcare AI Stack Wins Through Infrastructure, Not Models—Input Structuring, Integration Depth, and Output Validation by 2028]]
- [[Distribution Beats AI Quality in Healthcare—Channel Partners and M&A Win]]

---

*Generated: 2026-01-26 via /research*
