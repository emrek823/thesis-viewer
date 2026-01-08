D# DART HEALTH — Portfolio Briefing

**Review Date:** January 6, 2026
**Next Call:** January 15, 2026
**Trigger:** 2025 EOY Memo from Veeraj

**Sources:** 2025 memo, investment memo (Aug 2025), 7 Granola syncs (May-Dec 2025), Anabel/43.io reference call, GTM/BD/Hiring doc, diligence materials, Affinity notes

---

## EXECUTIVE SUMMARY

Dart had a strong 2025: 5x revenue growth ($300K → $1.44M), ACV doubled ($35K → $80K), hit profitability, and secured CHAP distribution partnership (5,000+ agencies). The discipline to cut low-value customers (<$65K) is rare at this stage.

The 2026 plan is ambitious: $10M ARR via post-acute expansion ($5M) plus new hospital vertical (15 customers at $300K = $4.5M). The infrastructure works. The question is whether Dart can execute a dual expansion while the product strategy is still evolving.

**Key tension:** Three product pivots in 5 months (multi-product platform → co-development → oncology co-pilot → AI Data Analyst) suggest they're still searching for the health system playbook. The oncology pivot disappeared without explanation.

---

## TIMELINE ANALYSIS

### Metrics Evolution

| Date | ARR | ACV | Team | Cash | Burn | Source |
|------|-----|-----|------|------|------|--------|
| Q4 2024 | ~$300K | $35K | ~6 | $600K | Break-even | Investment memo |
| May 2025 | "7-figures" | "Mid-5 → mid-6" | 7 | — | — | Emre/Veeraj call |
| Aug 2025 | $1.1M | $67K median | 6 | $1.5M | +$15K/mo | Investment memo |
| Sep 2025 | $1.5M | — | — | — | — | Granola sync |
| Oct 2025 | $1.5M | — | — | — | — | Granola sync |
| Dec 2025 | ~$2M | $80K | 10 | $2M+ | +$5K/mo | 2025 memo |

**Notes:**
- $600K → $2M+ cash because Virtue invested $2M at $20M post in Aug 2025
- Affinity auto-summary flagged conflicting cash data ($118K vs $2M) — likely data entry error, memo shows $2.04M

### Pipeline Evolution

| Date | Key Targets | Status | Source |
|------|-------------|--------|--------|
| Aug 2025 | Advent, Albany, ECU (3 health systems EOY) | Pipeline | Granola sync |
| Aug 2025 | Maxim $400K, Carpenter $250K, Duke $125K | Pilots | Investment memo |
| Sep 2025 | John Muir advancing to board meeting mid-Oct | Pipeline | Granola sync |
| Oct 2025 | 2 deals at $350-400K "trying to close this month" | Late stage | Granola sync |
| Oct 2025 | Tennessee Oncology (100+ oncologists), MD Anderson | Pipeline | Granola sync |
| Dec 2025 | Care Hospice $400K, CHAP $375K | Late stage | 2025 memo |
| Dec 2025 | John Muir $500K (different use cases) | Mid stage → Q1 2026 | 2025 memo |
| Dec 2025 | $6.7M total pipeline incl. $3.5M "Others" from Kelly | Mixed stages | 2025 memo |

**What disappeared:** Advent, Albany, ECU (Aug targets) not in Dec pipeline. Oncology-specific deals (Tennessee Oncology, MD Anderson) gone. The two $350-400K deals "trying to close" in Oct unclear if they became something else.

### Strategy Shifts

| Date | Wedge/Positioning | Target Buyer | Source |
|------|-------------------|--------------|--------|
| Jul 2025 | "App Store for hospitals for AI" | Health systems | Veeraj/Virtue call |
| Aug 2025 | "50+ use cases, platform for any clinical workflow" | Post-acute + hospitals | Investment memo |
| Sep 2025 | "Co-development approach" (response to AI fatigue) | Innovation teams | Granola sync |
| Oct 2025 | **"Oncology co-pilot" as major pivot** | AMCs, oncologists ($500-1K/user) | Granola sync |
| Dec 2025 | "AI Data Analyst as wedge" | CNOs, CMOs, CFOs | Granola sync |
| Dec 2025 | Workflows + Assistants + AI Data Analyst | Enterprise healthcare | 2025 memo |

**The unexplained shift:** October was emphatic about oncology co-pilot. John Muir board meeting, Tennessee Oncology (100+ oncologists), MD Anderson conversations, $500-1K/user pricing, 5-7x ROI on $200/hour oncologist time. December: oncology not mentioned once. John Muir now listed with Discharge Planning, Malnutrition, Nursing Copilot.

### Hiring Evolution

| Date | Planned Hires | Status | Source |
|------|---------------|--------|--------|
| Aug 2025 | Commercial hire | "Immediate need" | Granola sync |
| Aug 2025 | 3 eng candidates (Cynthia, Andrew, Naran) | Final rounds | Granola sync |
| Sep 2025 | Tara from Goldman (engineering) | "Offer going out Monday/Tuesday" | Granola sync |
| Oct 2025 | Lost top AI/ML candidate | Competitor: $350K + 4-5% equity | Granola sync |
| Oct 2025 | Deployment strategist (USC comp neuro/MD) | "Ready to accept offer" | Granola sync |
| Dec 2025 | Kelly (sales) | Hired, part-time, $4-5M quota | Granola sync |
| Dec 2025 | Head of Commercial, Head of Eng, Head of Delivery | "Putting together dream team profiles" | 2025 memo |

**The slip:** "Immediate need" commercial hire in August. "Putting together profiles" in December. Lost a top candidate to a $350K offer. Kelly was hired (win), but senior leadership roles still unfilled after 4+ months of flagging urgency.

### Technical/Product Evolution

| Date | Infrastructure | Scale | Cost | Source |
|------|---------------|-------|------|--------|
| Aug 2025 | Patient graphs, fine-tuned embeddings, judge-model loops, DartX studio | 2M analyses on 200K patient records | $100/1K charts | Investment memo |
| Aug 2025 | "Embedding classifications are pretty big deal — where magic comes from" | 200+ natural language rules per org | 75-85% gross margin | Technical deep dive |
| Aug 2025 | Nothing open-ended — forces yes/no/not applicable outputs | 50+ use cases | 2-3 week fine-tune cycle | Technical deep dive |
| Dec 2025 | Same core: Workflows + Assistants + AI Data Analyst layer | 1M+ reviews/month, 90+ use cases | 75%+ gross margin | 2025 memo |
| Dec 2025 | "Evals, performance monitoring, human in loop, git, rules, ontology — built in house" | 12 accounts | Monthly expense ~$110K | 2025 memo |

**Architecture (unchanged since Aug):**
```
Data Ingestion (RPA, OCR, FHIR/HL7, SQL, APIs)
    ↓
Patient Graph (per-patient mini-network: timestamp, provider, care plan)
    ↓
Multi-tier Filtering (ML pre-classification → contextual chunking → LLM prep)
    ↓
Rules/Ontology (200+ natural language rules, Yes/No/N/A constrained)
    ↓
Model Orchestration (Gemini 2.5 or customer LLMs)
    ↓
Actions (SMS, EHR tasks, auto-docs, dashboards, webhooks)
    ↓
Judge Model Loop (RLHF, 2-3 week fine-tune cycle)
```

**What's new in Dec memo (application-layer, not infrastructure):**
- **Workflows** ("Autopilots"): Background, high-volume, <10% human time to maintain
- **Assistants** ("Co-pilots"): User-facing, real-time, decision support
- **AI Data Analyst**: Query-based wedge for CNO/CMO/CFO buyers
- **Roadmap items**: AI Deployment Strategist, Consensus-based Tasks, Long Running Tasks/Deep Research

**The "context moat" claim:**
> "Most of the clinical <> operation rules aren't written anywhere... When we help 1 customer, the second customer sees the benefits."

**Open technical questions:**
- August had 2M analyses on 200K records. What's current scale?
- Cost per chart still $100? Has inference cost dropped with model improvements?
- Time-to-deployment: first 5 customers vs. last 5?
- What % of new use cases leverage existing rules vs. require net-new rule creation?
- DartX (labeling/fine-tuning studio): how many customers actually using it?
- Embedding fine-tuning: quantified accuracy gains?

**The positive:** Infrastructure is stable. Each product pivot (Autopilots, Co-pilots, AI Data Analyst) is application-layer, not infrastructure churn. This is the right architecture for multi-product expansion.

**The concern:** The 2025 memo describes products but not technical evolution. No new infrastructure capabilities mentioned since August. Is the platform complete, or is development stalled while chasing commercial?

---

## WHAT'S WORKING

### 1. Customer Quality Discipline
Cut <$65K contracts that "weren't strong enough for scale." Veeraj quote (Aug 2025): "Hard to say no with $70K in the bank, but fax/referrals was a symptom, not root cause." This matches the Tenor/wheelchair story from diligence — they walked away from $1M ARR because it was the wrong problem.

### 2. CHAP Partnership (The Standout Win)
5,000+ home health/hospice agencies under CHAP accreditation. Dart embedded in compliance workflow. "Agencies adopt Dart to stay CHAP survey ready." This is **channel distribution**, not just a logo. If CHAP converts, inbound flips.

### 3. Kelly Hire
Activated $2M+ pipeline in 48 hours via relationship network. Has book of business with top 100 home health/hospice agencies. This validates: post-acute is relationship-driven, and the right hire unlocks velocity immediately.

### 4. Brazil Engineering Arbitrage
While competitors chase "OAI recruits," Dart ships with São Paulo team. Gustavo built WhatsApp AI handling 1M daily messages, $100M in recoveries. Cost arbitrage + proven talent = sustainable velocity advantage.

### 5. Infrastructure Stability
Core platform (patient graphs, fine-tuned embeddings, judge-model loops) unchanged since August. Each product pivot (Autopilots, Co-pilots, AI Data Analyst) is application-layer, not infrastructure churn. Technical risk is lower than commercial risk.

---

## KEY CONCERNS

### 1. The Oncology Pivot Disappeared Without Explanation (HIGH)

**October 9, 2025 (Granola sync):**
> "Major strategic pivot: using oncology co-pilot as entry point into health system workflows... John Muir Health progress: Large C-suite meeting scheduled in SF in ~2 weeks... will pitch co-pilot use case they suggested around oncology dosing and treatment protocols... Pricing model: $500-$1K per user per month... Target users: medical oncologists (80% of team), plus nurses and pharmacists... JMH example: 25-30 oncologists = ~$200K for single specialty... Conservative ROI: 5-7x savings on $200/hour oncologist time."

Also mentioned: Tennessee Oncology (100+ oncologists, 3x JMH contract size), MD Anderson conversations.

**December 2025 memo:**
- John Muir listed with "Discharge Planning, Malnutrition, Nursing Copilot" — no oncology
- AI Data Analyst is the new hospital wedge
- Oncology not mentioned anywhere in 6-page memo

**Question:** What happened? Did the John Muir oncology pitch fail? Did the unit economics not work? Why pivot away from a strategy called "major" 8 weeks ago?

### 2. Pipeline Conversion History Unknown (MEDIUM)

August pipeline: Advent, Albany, ECU for EOY. October: 2 deals at $350-400K "trying to close this month." December: only 1 deal at "Late Stage."

**Questions:**
- What's the historical pipeline-to-close conversion rate?
- Did the August targets (Advent, Albany, ECU) close, slip, or die?
- The $3.5M "Others" pipeline from Kelly — how qualified? What stage?

### 3. Hospital Expansion Without Playbook (HIGH)

Zero hospital logos today. Target: 15 hospitals at $300K = $4.5M in 2026.

October sync noted: "Cleveland Clinic feedback challenge: preference for 'prestigious' vendors (OpenAI, Palantir) despite cost."

**The muscle is different:**
- Different buyers (C-suite, IT committees vs. QA managers)
- Different sales cycles (committees, security reviews, Epic integration)
- Different references needed (no hospital logos to point to)

**Question:** What's the actual playbook? Who runs hospital sales today — Veeraj directly?

### 4. Hiring Timeline Slippage (MEDIUM)

August: Commercial hire "immediate need."
October: Lost top AI/ML candidate to $350K + 4-5% equity offer.
December: Still "putting together dream team profiles" for three senior roles.

These are 6-9 month executive searches. If they start in January, realistic start dates are Q3 2026.

**Questions:**
- When do Head of Commercial / Head of Eng / Head of Delivery realistically start?
- What's the backup plan if searches take 6+ months?
- Are you using executive recruiters or founder-led search?

### 5. AI Data Analyst Competitive Positioning (MEDIUM)

Health Catalyst, Innovaccer, Arcadia all pitch "AI-powered clinical analytics" to the same buyers (CNOs, CMOs).

The Dart differentiation is the workflow layer that follows — AI Data Analyst as wedge, then convert queries to automated workflows.

**Questions:**
- When you're head-to-head with Health Catalyst, what's the pitch?
- What % of AI Data Analyst customers add their first workflow within 90 days?
- Is there a demo/POC that shows the wedge → workflow conversion?

### 6. Technical Evolution Unclear (LOW-MEDIUM)

The 2025 memo describes products (Workflows, Assistants, AI Data Analyst) but no new infrastructure capabilities since August. The architecture diagram is unchanged.

**Two interpretations:**
1. **Positive:** Core infrastructure is complete and stable. Product pivots are application-layer, not infrastructure churn. Engineering can focus on deployment velocity.
2. **Concern:** No visible progress on the technical moat. Head of Eng "still putting together profiles" while Gemini 2.5 and competitors improve. Is the edge widening or narrowing?

The "context moat" claim — "most clinical <> operation rules aren't written anywhere" — needs quantification:
- How many rules in the system today?
- What's the reuse rate across deployments?
- How quickly could a well-funded competitor with good domain experts replicate?

---

## QUESTIONS FOR DART

### Strategic Evolution
1. The October sync called oncology co-pilot a "major strategic pivot." The December memo doesn't mention oncology. **What happened?** Customer feedback, competitive dynamics, or build complexity?

2. John Muir was the oncology co-pilot flagship. Now listed with Discharge Planning, Malnutrition, Nursing Copilot. **Did the oncology wedge not work there?**

3. If you had to choose between (a) closing the $6.7M pipeline or (b) landing 2-3 hospital logos with less revenue, **which would you prioritize and why?**

### Pipeline & Conversion
4. **What's the historical pipeline-to-close conversion rate?** How do you feel about the EOY $2M+ projection with 2 contracts "in approval"?

5. The $3.5M "Others" pipeline from Kelly — **how qualified?** Early conversations or mid-stage?

6. August targets were Advent, Albany, ECU. **What happened to those deals?** They're not in the December pipeline.

### Execution & Hiring
7. Head of Commercial, Head of Eng, Head of Delivery — **when do these realistically start?** What's the backup if searches take 6+ months?

8. **Who is running hospital sales today?** Is it Veeraj directly?

9. Are you engaging executive recruiters for senior hires, or founder-led search?

### Competitive & Proof Points
10. Health Catalyst and Innovaccer pitch "AI-powered clinical analytics." **What's the differentiation** when selling AI Data Analyst?

11. CHAP is a strategic win. **Are there equivalent accreditation bodies for hospitals** (Joint Commission, HFAP) that could be similar channel partners?

### Technical & Infrastructure
12. August investment memo cited 2M analyses on 200K patient records. **What's the current scale?** Analysis count, patient records, unique use cases deployed?

13. **How has time-to-deployment improved?** First 5 customers vs. last 5 — days/weeks from contract to live?

14. Cost was $100/1K charts in August. **Has inference cost dropped** with Gemini 2.5 / model improvements? What's current gross margin?

15. **What % of new use cases leverage existing rules** vs. require net-new rule creation? (Tests the "context moat" claim)

16. DartX (the labeling/fine-tuning studio): **How many customers are actually using it?** Is this a differentiator or shelfware?

17. You mentioned "embedding classifications are where the magic comes from." **Can you quantify accuracy gains** from fine-tuned embeddings vs. off-the-shelf?

18. The 2025 memo lists roadmap items (AI Deployment Strategist, Consensus-based Tasks, Long Running Tasks). **What's the priority order?** Which ships Q1?

### Virtue Support
19. We offered GTM support (John Driscoll / Jay Desai networks, NYC sales talent, health system connections). **What has Dart actually used?**

20. We have direct connections to Multicare, TGH, UT Southwestern, Kaiser, Cedars. **Which align with current hospital strategy?**

---

## WHAT VIRTUE CAN HELP WITH

Based on prior offers and current needs:

**Health System Intros:**
- Direct connections: Multicare, TGH, UT Southwestern, Kaiser, Cedars
- Need to align on which fit Dart's current hospital wedge strategy

**Post-Acute Channel:**
- John Driscoll (former CEO CareCentrix, 20M+ lives touched)
- Nashville ecosystem (CareBridge, NaviHealth)
- Larger players (Bayada) or MSOs (OneHome/Humana)

**Recruiting:**
- NYC sales talent (ex-Zocdoc, Quartet, Flatiron)
- Jay Desai network for PAC commercial hires
- Executive search firm intros for senior leadership

**Government (if relevant):**
- Palantir network for HHS contract context
- Policy folks (Jacob Meyer, HHS contacts)

---

## BULL / BEAR CASES

### Bull Case
Dart becomes "Palantir for healthcare operations." CHAP partnership creates inbound flywheel for post-acute. Kelly's relationships + proven infrastructure = rapid expansion to $5M in core business. AI Data Analyst wedge lands 5-10 hospital pilots, converts queries to workflows, builds context moat. Key hires land Q2, enabling parallel execution. $10M ARR achievable if 50% of pipeline converts + 5-10 hospital lands.

### Bear Case
Hospital expansion stalls — different buyer, different sales motion, no logos to reference. Pipeline slips as healthcare procurement drags. CHAP takes longer to drive inbound than expected. Key hires (Head of Eng, Head of Commercial) take 6+ months, founders stretched thin. AI Data Analyst competes with Health Catalyst / Innovaccer without clear differentiation. Strategy whiplash continues — another pivot by Q2. $10M ARR becomes $4-5M.

---

## BOTTOM LINE

- **What's working:** Post-acute core ($35K → $80K ACV), CHAP distribution win, Kelly hire, Brazil engineering, profitability
- **What needs sharpening:** Explain the oncology → AI Data Analyst shift, quantify pipeline conversion, realistic hiring timeline
- **Bull case:** Context moat compounds, CHAP drives inbound, hospitals land via AI Data Analyst wedge
- **Bear case:** Hospital playbook doesn't exist yet, senior hires delayed, strategy pivots again

---

## TEAM INPUT

### [Sean's notes]
*To be added*

### [Emre's notes]
*To be added*

---

## NEXT STEPS

1. Send feedback questions (see Section: Questions for Dart)
2. Jan 15 call: Walk through responses, align on 2026 priorities
3. Decide on health system intro timing based on their hospital strategy clarity

---

*Briefing generated: January 6, 2026*
*Sources: 2025 memo, investment memo (Aug 2025), 7 Granola syncs (May-Dec 2025), Anabel/43.io call, GTM/BD/Hiring doc, Affinity notes*
