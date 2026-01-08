---
type: research
topic: "RWD Claims Data to Drive CCTA Volume"
date: 2026-01-03
assessment: ANSWERED
confidence: HIGH
rounds: 1
vault_sources: 4
web_sources: 15
---

# RWD + Claims Data Can Solve the CCTA Patient Funnel Problem—But the Business Model Is HCP Targeting, Not Patient Outreach

**The Take:** Medicare reimbursement unlocked CCTA at >$1,000/scan. Now the bottleneck is *patient identification and referral*. Claims data companies like PurpleLab can identify high-risk patients by diagnosis codes, comorbidity patterns, and medication history—then surface these patients to the HCPs who treat them. The mechanism isn't "find patients and call them"—it's "find HCPs treating high-risk patients and get them to order CCTA."

**Confidence: HIGH** — Strong precedent from Komodo's HoFH patient-finding ML model (cardiovascular), pharma commercial playbooks, and explicit patient-finder use cases in Datavant roadmap.

---

## The Problem: CCTA Reimbursement Is Unlocked, Volume Is Not

From prior research ([[2026-01-03-cvd-solved-problem-statins-ccta-vs-glp1.md]]):
- Medicare now pays **>$1,000 per AI cardiac CT interpretation**
- 5 of 7 MACs approved coverage; 93.6M Medicare/MA beneficiaries have access
- **But:** Current risk calculators miss **45-61% of MI patients** who would have been recommended for testing 2 days before their event

The gap: Reimbursement exists. Technology exists (4 FDA-cleared AI vendors). What's missing is the *patient funnel*—getting the right patients to the imaging center.

---

## How Claims Data Solves This

### The Mechanism

Claims data (Dx codes, Rx patterns, procedure history) contains signals that predict high cardiac risk better than traditional risk scores:

**Example from Komodo HoFH Study** ([Nature, 2024](https://www.nature.com/articles/s41598-024-58719-y)):
- Used Komodo Healthcare Map (325M patients) to build ML model identifying undiagnosed homozygous familial hypercholesterolemia
- Clinical features from claims: "abnormally elevated LDL-C, use of multiple lipid-lowering therapies, clinical signs in early life, early-onset cardiovascular disease"
- Negative cohort: **181.8M patients with cardiovascular disease or at-risk for CVD**

**This proves:** Claims data can identify cardiovascular patients who should be screened but aren't.

### Specific Signals for CCTA Targeting

Based on SCCT guidelines and claims pattern analysis, candidate signals include:

| Signal Type | Claims Manifestation | Why Predictive |
|-------------|---------------------|----------------|
| **Chest pain, unspecified** | ICD-10 R07.x without follow-up imaging | Guidelines say low-intermediate risk chest pain = CCTA appropriate |
| **Multiple cardiac risk factors** | Diabetes (E11.x) + Hypertension (I10) + Hyperlipidemia (E78.x) | Comorbidity stacking predicts plaque burden |
| **Statin + ezetimibe + PCSK9i** | Rx claims for multiple lipid-lowering agents | Aggressive therapy = high-risk patient not fully controlled |
| **Prior negative stress test** | CPT 93015-93018 with negative result | CCTA finds non-obstructive disease missed by stress testing |
| **Family history codes** | ICD-10 Z82.49 (family history CVD) | Genetic loading underweighted by risk scores |
| **Metabolic syndrome cluster** | Obesity + prediabetes + HTN | GLP-1 era: these patients are *already in the system* |

---

## The Business Model: HCP Targeting, Not DTC

### Why Patient-Direct Doesn't Work

From [[purplelab-805274ed.md]] and pharma commercial experience:
- Claims data is **de-identified**—you can't call patients directly
- Re-identification requires *point of care* context (patient visits their doctor)
- Regulatory: HIPAA limits direct patient outreach from claims data

### The Proven Playbook: HCP Targeting + Referral Pattern Analysis

From [H1 blog](https://h1.co/blog/nine-ways-medical-affairs-professionals-can-utilize-claims-and-referral-data/):

> "Using patient data to analyze referral patterns is valuable for HCP segmentation and targeting. It can help identify key HCPs... who is diagnosing, treating, and referring the most."

**Applied to CCTA:**

1. **Identify PCPs/cardiologists with high-risk patient panels** — Aggregate claims to find practices with many patients having Dx codes suggestive of cardiac risk (chest pain, metabolic syndrome, multiple cardiac risk factors)

2. **Map referral patterns** — Who do these PCPs currently refer to for cardiac workup? Stress testing labs? Cath labs? Identify referral gaps.

3. **Target HCPs with education + workflow tools** — Cleerly/HeartFlow can use this data to:
   - Deploy MSLs to high-opportunity practices
   - Provide EHR-integrated alerts ("This patient meets CCTA criteria")
   - Offer "white glove" referral services

### Komodo's "Pulse" Product Does Exactly This

From [[komodo-demo-for-astellas-3f8ec07b.md]]:

> "Pulse, for real-time alerts on encounters between providers and potential screening eligible patients."

The workflow:
1. Define patient criteria (Dx codes, Rx patterns, demographics)
2. Pulse monitors claims in near-real-time
3. When a matching patient visits a target HCP, generate alert
4. HCP receives notification with patient context + recommended action

**Applied to CCTA:**
- Criteria: Chest pain + ≥2 cardiac risk factors + no prior CCTA
- Alert to: Treating cardiologist or PCP
- Action: "This patient meets SCCT criteria for CCTA referral"

---

## PurpleLab's Specific Advantage

From [[purplelab-805274ed.md]]:

**Data Assets:**
- 330M de-identified patients
- Claims (open Mx, open Rx, closed claims)
- CMS Qualified Entity certification (Medicare Parts A, B, D)
- SDOH enrichment, mortality data
- Datavant tokenization for cross-system linkage

**Use Case Fit:**

| PurpleLab Use Case (from deck) | Application to CCTA |
|--------------------------------|---------------------|
| **Pharma Commercial** — "surface hidden revenue opportunities and care gaps from claims data" | Identify high-risk patients not getting appropriate imaging |
| **Specialty Pharma Hub-like Services** — "target high prescribing physicians and provide them free prior auth" | Target cardiologists with high unimaged cardiac patient panels; offer streamlined CCTA referral |
| **Infusion Site of Care** — "identify catchment areas with high % of infusions in HOPD" | Identify geographic areas with high cardiac burden + low CCTA utilization |

**Partnership Structure (from deck):**
> "Incubating and launching software/AI businesses in healthcare and life sciences with goal to reach $20M-$50M in ARR on top of PurpleLab's data asset."

This is exactly the model: PurpleLab data + Cleerly AI imaging + workflow integration = vertically integrated preventive cardiology funnel.

---

## Precedents: This Works in Adjacent Markets

### 1. Rare Disease Patient Finding

From [[01---datavant-strategic-vision-product-roadmap-44b53bf4.md]]:

> "Undiagnosed rare disease patients — using de-identified data pools, analytics companies can determine patients who are likely undiagnosed for a particular rare disease... providers can re-identify lists of patients in the course of patient care"

**Pattern:** Claims → ML model → probability score → provider alert → diagnosis/referral

### 2. Clinical Trial Recruitment

From H1:
> "Claims data can help... determine how many relevant diagnoses and procedures are performed at a facility and how many patients might be eligible for trial participation."

**Pattern:** Claims → site identification → patient volume estimation → targeted recruitment

### 3. Lung Cancer Screening

From web research:
> "Imaging is a common mechanism for early identification of disease that can be automated or extended through AI. This is one reason the industry has seen development activity in the use of AI in mammography for breast cancer and chest CTs to identify lung cancer."

**Pattern:** Claims identify high-risk (smoking history) → screening recommendation → imaging referral

---

## Implementation Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  PURPLELAB / KOMODO CLAIMS DATA                            │
│  330M patients, open/closed claims, CMS QE data            │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  PATIENT RISK STRATIFICATION MODEL                          │
│  Input: Dx codes, Rx patterns, procedure history            │
│  Output: Probability of significant CAD + CCTA appropriate  │
│  Training: Outcomes data from Cleerly's 40K patient studies │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  HCP TARGETING ENGINE                                       │
│  Identify: PCPs/cardiologists with high-risk patient panels │
│  Prioritize: Referral gaps (high risk, low imaging volume)  │
│  Output: MSL targets, EHR alert configuration               │
└─────────────────────────────────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
┌─────────────────────────┐  ┌─────────────────────────┐
│  MSL/SALES ENGAGEMENT   │  │  EHR-INTEGRATED ALERTS  │
│  Educate HCPs on CCTA   │  │  "Patient meets CCTA    │
│  criteria + Cleerly     │  │  criteria"              │
└─────────────────────────┘  └─────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  REFERRAL + IMAGING                                         │
│  CCTA ordered → Cleerly analysis → Treatment pathway        │
└─────────────────────────────────────────────────────────────┘
```

---

## Contradictions & Open Questions

1. **Claims data lags reality** — Typically 30-90 day delay. May miss acute presentations where CCTA is most urgent.

2. **Imaging results ranked low in pharma RWD value** — From [[rwd-cf3e0145.md]]: imaging results ranked 8 of 8 in value to pharma. But *driving* imaging is different from *using* imaging data.

3. **Who pays for patient finding?** — Cleerly pays PurpleLab? Imaging center pays? Health system pays? Medicare pays via care management codes?

4. **Regulatory: Can you use claims to drive imaging orders?** — Need to verify no kickback/Stark implications if imaging company pays for patient identification.

---

## Recommendations

1. **Investigate PurpleLab partnership** — Their "specialty pharma hub-like services" use case is directly applicable. Structure: Cleerly pays for data access, gets patient targeting intelligence.

2. **Build cardiac-specific risk model** — Train on Cleerly's 40K patient outcomes dataset + claims features. Validate against SCCT appropriateness criteria.

3. **Pilot with integrated health system** — Find a system with PCP-to-cardiology referral capture. Measure: baseline CCTA volume → post-intervention CCTA volume → outcomes.

4. **Update cardiac imaging thesis** — Add "patient funnel via claims data" as enabler. The thesis assumed reimbursement unlocks volume; actually, reimbursement + patient identification unlocks volume.

**Bull case:** PurpleLab/Komodo + Cleerly partnership makes CCTA referral as automated as mammography recalls. Volume 5x+ by 2028.

**Bear case:** Claims-based targeting triggers CMS scrutiny for overutilization. Specialty societies push back on "AI-driven" referrals.

---

## Research Process

### Sub-Questions
1. What does PurpleLab do? — HIGH (vault files + web)
2. How are cardiac patients identified now? — HIGH (SCCT guidelines, risk score limitations)
3. What claims signals predict cardiac risk? — MEDIUM (HoFH paper, no vault evidence)
4. Business model for RWD → imaging? — HIGH (H1, Komodo demo, pharma playbook)
5. Precedents? — HIGH (HoFH, rare disease, clinical trials)

### Queries Used
**Vault:** PurpleLab|claims data|RWD|Komodo|Datavant|patient identification

**Web:**
- PurpleLab healthcare claims data platform product
- real world data claims identify patients diagnostic imaging screening
- cardiac CT angiography patient identification referral criteria guidelines
- Komodo Health claims data patient identification cardiovascular
- pharma medical device patient finding HCP targeting claims data imaging

---

## Sources

### Vault
- [[Sources/Market-Research-PDFs/purplelab-805274ed.md]] — PurpleLab partnership structure and use cases
- [[Sources/Market-Research-PDFs/komodo-demo-for-astellas-3f8ec07b.md]] — Komodo Pulse alerts and patient-level targeting
- [[Sources/Market-Research-PDFs/01---datavant-strategic-vision-product-roadmap-44b53bf4.md]] — Patient Finder use case
- [[Sources/Market-Research-PDFs/rwd-cf3e0145.md]] — RWD marketplace landscape

### Web
- [PurpleLab HealthNexus Platform](https://purplelab.com/platform/) — Product overview
- [Komodo HoFH Patient Identification](https://www.nature.com/articles/s41598-024-58719-y) — ML on claims for cardiovascular patient finding
- [H1: 9 Ways Claims Data for Medical Affairs](https://h1.co/blog/nine-ways-medical-affairs-professionals-can-utilize-claims-and-referral-data/) — HCP targeting playbook
- [SCCT 2021 Consensus Document](https://pmc.ncbi.nlm.nih.gov/articles/PMC8713482/) — CCTA appropriateness criteria
- [STAT News: Medicare AI Cardiac Coverage](https://www.statnews.com/2025/11/11/medicare-coverage-ai-heart-scans-heartflow-cleerly-elucid/) — Reimbursement context
