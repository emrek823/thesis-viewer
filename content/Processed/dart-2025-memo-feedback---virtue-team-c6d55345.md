---
source_pdf: "https://drive.google.com/file/d/1bzae26xk832JUwkcFzqwTTPdSsAkIIK-XilEbtobpeA/view"
drive_folder: "Portfolio/Dart"
type: portfolio
company: Dart
ingested: 2026-01-06
original_filename: "Dart 2025 Memo Feedback - Virtue Team"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1bzae26xk832JUwkcFzqwTTPdSsAkIIK-XilEbtobpeA/view)

Dart 2025 Memo Feedback

Virtue Internal Review

Review Date: Jan 5, 2026

Next Call: Jan 15, 2026

Source: 2025 EOY Memo + Vault + Meeting Notes (May-Dec 2025)

EXECUTIVE SUMMARY

Dart had a strong 2025: 5x ARR growth ($0.4M to $2M), ACV doubled ($35K to $80K), hit profitability, and secured CHAP distribution partnership. The discipline to cut low-value customers is rare at this stage.

The 2026 plan is ambitious: $10M ARR via post-acute expansion ($5M) plus new hospital vertical (15 customers at $300K = $4.5M). The infrastructure works. The question is whether Dart can execute a dual expansion while the product strategy is still evolving.

Key tension: Three product pivots in 5 months (multi-product platform to co-development to oncology co-pilot to AI Data Analyst) suggest they're still searching for the health system playbook.

SECTION 1: HISTORICAL CONTEXT

1.1 Company Timeline

Oct 2021: Founded as Puzzl INC

2022: Pivoted from gig worker platform to healthcare compliance

Q4 2024: First hospice customers ($35-65K ACV)

Q3 2025: First 6-figure contracts (HealthPRO Heritage $135K, AdvantageCare $100K)

Aug 2025: Raised $2M from Virtue at $20M post, $1.1M ARR

Sep 2025: $1.5M ARR, cleaned up small contracts

Oct 2025: Paused hospice sales to focus on oncology co-pilot strategy

Dec 2025: $2M ARR, CHAP partnership secured, 2 contracts in late-stage ($500K)

1.2 Revenue Trajectory

Period        ARR       Key Events

Aug 2025      $1.1M     First 6-figure contracts, Virtue investment

Sep 2025      $1.5M     Choice Health ($275K), cut small contracts

Oct 2025      $1.5M     Flat, paused hospice for co-pilot focus

Dec 2025      ~$2M      CHAP secured, 2 contracts in approval ($500K)

1.3 ACV Evolution

2024: $35K average

Aug 2025: $67K median

Q4 2025: $80K average

Q2 2026 target: $250K average

1.4 Team (as of Dec 2025)

10 FTEs total (5 USA, 5 Sao Paulo)

Veeraj Mehta: CEO, Co-founder

Aakruti Desai: COO, Co-founder

Shilpa Gummadi: Applied Product Engineer (rescinded med school)

Jackson: Applied Product Engineer (MD, declined residency)

Kelly: Sales (2 decades home health/hospice experience)

Marcelo: Engineering lead (Brazil, 10+ years)

Gustavo: Engineering (Brazil, built AI WhatsApp system: 1M daily messages, $100M recoveries)

3 Junior-Senior Engineers (Brazil)

SECTION 2: COMMERCIAL EVOLUTION

2.1 What Worked

Customer quality discipline: Cut <$65K contracts that drain resources. Veeraj quote (Aug 2025): "Patience + taste. Hard to say no with $70K in the bank, but fax/referrals was a symptom, not root cause."

Kelly hire: Activated $2M+ pipeline in 48 hours via relationship network. Has book of business with top 100 home health/hospice agencies.

CHAP partnership: 5,000+ agencies under CHAP accreditation. Dart embedded in compliance workflow. Agencies adopt Dart to stay "CHAP survey ready." This is channel distribution, not just a logo.

Brazil engineering: Cost arbitrage + proven talent. Gustavo built WhatsApp AI handling 1M daily messages, $100M in recoveries. Competitors chasing "OAI recruits" while Dart ships.

2.2 Pipeline Evolution

Aug 2025 targets: 3 health system customers by EOY (Advent, Albany, ECU)

Oct 2025 status: 2 deals at $350-400K each "trying to close this month"

Dec 2025 actual: Only 1 deal at "Late Stage," $500K in late-stage total

Takeaway: Pipeline projections have been optimistic. Historical conversion unclear.

2.3 Customer Base (Aug 2025 snapshot)

Current customers: 20 (mostly home health/hospice)

Pilots: 3 (Maxim $400K, Carpenter Health $250K, Duke $125K)

Pipeline: 19 opportunities ($4M+ value)

Largest contract: Remarkable Hospice $200K (originally projected at $75K)

SECTION 3: PRODUCT EVOLUTION

3.1 Three Pivots in Five Months

Month       Strategy                    Target Buyer                  Status

Aug 2025    50+ use cases, platform     Home health QA teams          Working, $1.1M ARR

Sep 2025    Co-development approach     Innovation teams              Response to AI fatigue

Oct 2025    Oncology co-pilot wedge     Oncologists ($500-1K/user)    John Muir flagship

Dec 2025    AI Data Analyst wedge       CNOs, CMOs, CFOs              New, oncology gone

3.2 The Unexplained Pivot

October 2025 (Virtue/Dart sync call):

"Major strategic pivot to oncology co-pilot... John Muir board meeting in 2 weeks... $500-1K per user per month pricing... conservative ROI 5-7x on $200/hour oncologist time"

December 2025 (EOY memo):

John Muir listed with "Discharge Planning, Malnutrition, Nursing Copilot" use cases

AI Data Analyst is the new hospital wedge

No mention of oncology anywhere

Question: What happened to the oncology co-pilot strategy? Did John Muir oncology engagement not work? Why the shift?

3.3 Current Product Matrix

Product              User               Interaction         Volume    Purpose

Workflows            Operations         Background, async   High      Production workloads

(Autopilots)

Assistants           Clinicians         Real-time           Lower     Decision support

(Co-pilots)

AI Data Analyst      Executives         Query-based         Ad-hoc    Wedge/demo capability

(CNO/CMO)

SECTION 4: TECHNICAL PLATFORM

4.1 Architecture (Unchanged Core)

Data Ingestion: RPA, OCR, FHIR/HL7, direct SQL, APIs

Patient Graph: Per-patient mini-network linking data by timestamp, provider, care plan

Filtering Pipeline: ML pre-classification, contextual chunking, LLM prep

Rules/Ontology: 200+ natural language rules per org, Yes/No/N/A constrained outputs

Model Orchestration: Gemini 2.5 or customer LLMs, $100/1K charts

Actions: SMS, EHR tasks, auto-docs, dashboards, webhooks

Feedback Loop: Judge model scoring, RLHF, 2-3 week fine-tuning cycle

4.2 Technical Metrics

Metric              Aug 2025           Dec 2025            Delta

Analyses            2M total           1M+/month           ~6x monthly volume

Cost/1K charts      $100               $100                Flat

Gross margin        75-85%             75%+                Stable

Fine-tune cycle     2-3 weeks          2-3 weeks           No change

4.3 Key Technical Insight

The infrastructure is stable and scaling. The product pivots are application-layer changes, not infrastructure churn. Each new product (Autopilots, Co-pilots, AI Data Analyst) uses the same underlying platform.

Technical risk is lower than commercial risk. The platform works. The question is which product is the right wedge for hospitals.

SECTION 5: KEY RISKS

5.1 Strategy Whiplash (HIGH)

Evidence: Three product pivots in 5 months without clear explanation for transitions.

Oct 2025: "Oncology co-pilot is the major strategic pivot"

Dec 2025: AI Data Analyst is the wedge, oncology not mentioned

Impact: Unclear if this is rapid learning or lack of PMF in health systems.

5.2 Pipeline Conversion (MEDIUM)

Evidence: Aug 2025 targeted 3 health system customers by EOY. Oct 2025 had 2 deals "trying to close this month." Dec 2025 shows only 1 late-stage deal.

Question: What's the historical pipeline-to-close conversion rate?

5.3 Hospital Expansion Without Playbook (HIGH)

Evidence: Zero hospital logos today, targeting 15 at $300K in 2026.

Oct 2025 call: "Cleveland Clinic preference for prestigious vendors (OpenAI, Palantir)"

Challenge: Different buyer (C-suite, IT committees), different cycles, different integrations (Epic).

5.4 Hiring Timeline (MEDIUM)

Evidence: Commercial hire discussed as "immediate need" in Aug 2025. Still "putting together dream team profiles" in Dec 2025 for Head of Commercial, Head of Eng, Head of Delivery.

Lost top AI/ML candidate in Oct 2025 to competitor ($350K + 4-5% equity offer).

These are 6-9 month searches.

5.5 $100M ARR in <24 Months (HIGH)

Context: Veeva took 5 years from $10M to $100M. Health Catalyst took 4 years.

10x growth in 24 months is top 1% trajectory.

Question: What's the scenario plan if $10M is achieved but growth slows?

SECTION 6: QUESTIONS FOR DART

6.1 Strategic Evolution

1. The oncology co-pilot was the focus in October. What triggered the shift to AI Data Analyst as the hospital wedge: customer feedback, competitive analysis, or build complexity?

2. John Muir was the oncology co-pilot flagship. The memo shows them with different use cases (Discharge, Malnutrition, Nursing). Did the oncology wedge not work there?

3. If you had to choose between (a) closing the $6.7M pipeline or (b) landing 2-3 hospital logos, which would you prioritize and why?

6.2 Pipeline & Conversion

4. What's the historical pipeline-to-close conversion rate? How confident are you in the EOY $2M+ projection?

5. The $3.5M "Others" pipeline from Kelly: how qualified is this? What stage are these conversations?

6. John Muir status specifically: contract signed? Pilot? Still in discussions?

6.3 Hiring & Execution

7. Head of Commercial, Head of Eng, Head of Delivery: when do these realistically start? What's the backup plan if searches take 6+ months?

8. Who is running hospital sales motion today? Is it Veeraj directly?

9. Are you engaging executive recruiters, or is this founder-led search?

6.4 Competitive Dynamics

10. Health Catalyst and Innovaccer both pitch "AI-powered clinical analytics." When selling AI Data Analyst to hospitals, what's the differentiation?

11. CHAP is a strategic win. Are there equivalent accreditation bodies for hospitals (Joint Commission, etc.) that could be similar channel partners?

6.5 Metrics & Proof Points

12. NRR and gross retention figures?

13. Customer concentration: what % of ARR is top 3 customers?

14. Current analysis count and patient records processed? (Was 2M analyses on 200K records in Aug 2025)

15. What % of new use cases leverage existing rules vs. require net-new rule creation?

6.6 Virtue Support Utilization

16. We offered GTM support (John Driscoll / Jay Desai networks, NYC sales talent intros, health system connections). What has Dart leveraged? What would be most valuable now?

17. We have direct health system connections (Multicare, TGH, UT Southwestern, Kaiser, Cedars). Which align with Dart's current hospital pipeline strategy?

SECTION 7: BULL / BEAR CASES

7.1 Bull Case

Dart becomes the "Palantir for healthcare operations." First in with AI Data Analyst wedge, converts queries to workflows, builds context moat that compounds with every deployment. CHAP distribution creates inbound flywheel. Kelly's relationships + proven infrastructure = rapid post-acute expansion while hospitals come online in parallel. $10M ARR achievable if 50% of pipeline converts + 5-10 hospital lands.

7.2 Bear Case

Hospital expansion stalls: different buyer, different sales motion, no logos to reference. Pipeline slips as healthcare procurement drags. CHAP deal takes longer than expected to drive inbound. Key hires (Head of Eng, Head of Commercial) take 6+ months, constraining execution. AI Data Analyst competes with Health Catalyst/Innovaccer without clear differentiation. $10M ARR becomes $4-5M.

SECTION 8: TEAM FEEDBACK

[Sean's notes]

[Emre's notes]

[Additional feedback]

SECTION 9: FINAL EMAIL DRAFT

[To be drafted after team alignment]