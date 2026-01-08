---
source_pdf: "https://drive.google.com/file/d/1TrWjpP8_j3ynDNprmbLOVoqvsAWSQccI/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Hippocratic AI Board Meeting Deck Jan 19 vFinal_from_deals.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1TrWjpP8_j3ynDNprmbLOVoqvsAWSQccI/view)

## Slide 1: Hippocratic AI | Do No Harm
Hippocratic AI
Do No Harm
Board Meeting Jan 19, 2024

## Slide 2: Goals for the meeting
### Info:
* Give a sense of the first full version of our nurse and the technical breakthroughs that led to it working
* Provide a sense of how nurses and patients perceive our nurse in early tests and surveys
* Review our GTM strategy including roles, health systems, pricing model, unit costs, and risks

### Decisions:
* Sell or open source our support models to help make them bulletproof / build trust / revenue opp
* Expand teams to focus on new healthcare industries (Pharma, D2C, Employer, etc)
* Approve pricing model
* Raise additional capital at $500MM - GC $25MM offer

Hippocratic AI
Proprietary & Confidential

## Slide 3: Agenda for meeting
* Highlights & Grading
* Demo & Review of new technical architecture and breakthrough
* Comparative review of our model vs. others and key insights
* Nurse and Patient survey results
* GTM Roadmap and milestones and pricing model other segments to go after
* Finances and budgeting
* Closed Session

Hippocratic AI
Proprietary & Confidential

## Slide 4: Highlights and Low lights
### Highlights
* **A** Breakthrough in how to create a well spoken product with the right: "Nursy-ness"
* **A** Making a clinical safe product by leveraging support model arch
* **A** Discovering a recipe we can apply to any new open-source model at low cost
* **A** Reducing burn from $3MM/M to $2MM/M + bringing on head of finance
* **A** Product validation using 500-1000 real nurses at low cost in our GIG app
* **A** Culture and team engagement. New support model teams & demo created transparency and ownership

### Low lights
* **B+** Hiring CISO, more top eng, & researchers
* **A** Understood nurse calls are the best source of medical reasoning, not just conversations = infinite supply of reasoning
* **D** Getting payer, pharma, other segments up and running to test fertility of opportunity
* **C** Behind in building GTM team due to deliberately waiting for a model breakthrough but now we are late
* **C** Understanding what acceptance really means for an autopilot LLM is not something we have derisked yet
* **C** Lots to figure out on how to integrate with health systems (ex-Epic new hire joins 2/1)

Hippocratic AI
Proprietary & Confidential

## Slide 5: Product Review
Product Review

Hippocratic AI
Proprietary & Confidential

## Slide 6: Demo & support model Interactions
Demo & support model
Interactions

Hippocratic AI
Proprietary & Confidential

## Slide 7: Our solution is a 1.4T parameter constellation "system"
### Primary model (70B)
* Patient Prompt
* LLM Response
* Next Patient Prompt

### 19 Support Models (1.3T)
* Escalation "Kickout" Engine
* Dosage Engine
* Drug Facts
* Medical Drill Down Engine
* Condition-Specific Restaurant Engine
* Nutrition Engine
* DME Device Engine¹
* Escalate to Live Nurse
* Drug Identifier
* Medical Labs Engine
* Social Tangent Engine
* Payor Policy Coverage RAG¹
* Hospital Policy RAG
* Financial Assistance RAG¹

¹ To be developed

Hippocratic AI
Proprietary & Confidential

## Slide 8: Support engines vertically specialize & reduce hallucinations
### Kickouts
* Triages 130+ symptoms and escalates based on severity
* Handles multiple symptoms simultaneously
* Customizable symptoms and escalation pathway
* Process summarized in Physician Summary
* Synchronizes with lab and dosage engines

### Lab Engine
* Compares labs and vital signs against reference range
* Adjust for condition and medication. Analyzes trends
* Coaches and Educates on labs
* Clarifies erroneous labs, e.g. Patient confusing Hb vs HbA1c
* Understands implausible values.

### Drug Dosage
* Compares dose vs prescription
* Evaluates for under- and overdose
* Abstracts dose from complex statements ("I cut the pill in half")
* Edge cases: Toxic doses detected and kicked to medical professional

### Drug Identifier
* Corrects mispronunciation/misnamed drugs
* Uses questions and metadata (condition, phonetics, etc) to work out Rx
* Edge Cases: Aware of all US Rx

### Drug Facts
* Knows Drugs, OTC, Vitamins and Supplements
* Checks condition-specific contra-indications at an ingredient level
* Ensures accuracy of any drug information supplied by model
* Condition-specific OTC and Vitamin recommendations
* Recognizes significant drug interactions (in-development)

### Medical Tangent
* Trained for active listening and empathy based on patient symptoms/medical history
* Provides education, advice, remedies and support

### DME¹
* Provides DME advice on performance, usage, problems, etc
* Assesses DME Coverage (with Payor Engine)
* Overtime will do actual technical support for these devices

¹ To be developed

Hippocratic AI
Proprietary & Confidential

## Slide 9: Other support engines are designed for patient value
### Checklist
* Ensures checklist following - difficult for foundation models
* Aware of current checklist item and tailors conversation
* Dynamically updates context window to ensure model attention

### Nutrition
* Evaluates food/ingredients against condition-specific recommendations
* Advises appropriate dietary changes and choices

### Restaurant
* Suggest dishes or restaurants
* 528K US menus
* Gives location and condition-specific recommendations
* Accommodate dietary preferences

### Tangent
* Builds rapport and stickiness
* Engages in conversations of patient's choosing
* Steers conversation back to medical objectives after a few turns
* Indirectly collects medical data and metadata

### Hospital Policy
* Complete local health system policies and information
* Answers patient's frequent questions e.g.:
    * Parking
    * Visitor access
    * Masking policies

### Financial Assistance¹
* Full knowledge of Financial Aid options and discounts from:
    * Health System
    * Pharma companies and Pharmacies
    * Charities, etc
* Incentivizes engagement

### Payor Policy¹
* Includes all MA plans and Private Plans are being sourced
* Advises on coverage and costs - one of the most frequent patient questions

¹ To be developed

Hippocratic AI
Proprietary & Confidential

## Slide 10: Getting voice right is hard and requires many special features
* **False Interrupt Recovery**
    * People often speak and then stop. The model pauses in case they want to speak but resumes if they do not
* **Speaker Identification**
    * Vocal fingerprinting of primary speaker to prevent other voices interfering
* **Custom TTS Voices**
    * Eleven Lab's default voices do not sound empathetic (more like commercials/podcasts). We used professional voice talent to get the right style for a nurse
* **Noise Filtering**
    * Remove low-power background noise to prevent false speech detection
* **Voice Activity Detection**
    * Separate low latency (<50s) ML-based model that identifies someone is speaking and interrupts the AI
* **Automatic Speech Recognition**
    * Optimized for phone calls
* **Domain Adaptation**
    * Dynamic keyword insertion into the ASR based on drugs, medication, patient name, etc. Optimizes ASR prompting so LLM can understand patient better

Hippocratic AI
Proprietary & Confidential

## Slide 11: Key Risk Factors
| | Risk | Mitigation |
|---|---|---|
| **GPU Inference** | • AWS Hyperpods have poor inference support and are not on-demand <br> • 2-3x cost, assuming 8-12hrs usage/day <br> • HIPAA prevents use of training cluster | • Sagemaker <br> • OCI <br> • Inferentia <br> • Lambda |
| **ASR** | • Significant error rate. ASR misfires can significantly affect conversation <br> • Cloud Medical ASRs are 10x cost of Deepgram | • Currently have Deepgram (on-prem), Google, AWS <br> • Investigating fine-tuned OSS and Deepgram <br> • New vendors on the horizon, e.g. Gladia |
| **TTS** | • Patients are very sensitive to TTS quality <br> • Only one vendor - Eleven Labs <br> • Their server stability is mediocre, given sensitivity to latency | • PlayHT. Quality is lower <br> • Open AI. No custom voices (yet) and slow |

Hippocratic AI
Proprietary & Confidential

## Slide 12: Decision: Should we sell the support models separately or at least let people test them to find bugs?
Decision: Should we sell the support models
separately or at least let people test them to find bugs?

Hippocratic AI
Proprietary & Confidential

## Slide 13: Comparative Review
Comparative Review

Hippocratic AI
Proprietary & Confidential

## Slide 14: Insight: Nurse calls are not just helpful for style but actually are a scaleable data source to outperforming on Med LLM benchmarks
* Missing ingredient was reasoning and not knowledge
* Annotating chain of thought reasoning chain was the key
* Discovered that Nurse/Patient Calls is a good source of medical reasoning
* Medical reasoning might be a superior source of reasoning data than math and code since it is expressed in natural language

### CPT Results
| Benchmark | Baseline Llama 70B | CPT - Medical Exam Reasoning | CPT - Medical Exam and Nurse Call Reasoning |
|---|---|---|---|
| MedMCQA | ~70% | ~85% | ~88% |
| MMLU Medical ‡ | ~75% | ~88% | ~91% |
| Med Procedure † | ~80% | ~90% | ~94% |
| Med Knowledge † | ~85% | ~90% | ~94% |
| General Reasoning * | ~60% | ~70% | ~72% |

Range: 40% - 100%

‡ MMLU medical consists of the following MMLU tasks: Clinical knowledge, college biology, college medicine, medical genetics, professional medicine and anatomy
† Internal Benchmarks
* General Reasoning is an average of the following benchmarks run zero shot. ARC(easy), ARC(Hard), PIQA, WinoGrande and Hellaswag

Hippocratic AI
Proprietary & Confidential

## Slide 15: CPT Recipe is low cost way to leverage any new open source models
### Mixtral (MoE 7B x 8)
| Benchmark | Baseline | CPT - Medical Reasoning |
|---|---|---|
| MedMCQA | ~70% | ~85% |
| MMLU Medical ‡ | ~75% | ~88% |
| Med Procedure † | ~80% | ~90% |
| Med Knowledge † | ~85% | ~90% |
| General Reasoning * | ~60% | ~70% |
Range: 40% - 100%

### Falcon 180B
| Benchmark | Baseline | CPT - Medical Reasoning |
|---|---|---|
| MedMCQA | ~70% | ~85% |
| MMLU Medical ‡ | ~75% | ~88% |
| Med Procedure † | ~80% | ~90% |
| Med Knowledge † | ~85% | ~90% |
| General Reasoning * | ~60% | ~70% |
Range: 40% - 100%

### Qwen 72B
| Benchmark | Baseline | CPT - Medical Reasoning |
|---|---|---|
| MedMCQA | ~70% | ~85% |
| MMLU Medical ‡ | ~75% | ~88% |
| Med Procedure † | ~80% | ~90% |
| Med Knowledge † | ~85% | ~90% |
| General Reasoning * | ~60% | ~70% |
Range: 40% - 100%

### Yi 34B
| Benchmark | Baseline | CPT - Medical Reasoning |
|---|---|---|
| MedMCQA | ~70% | ~85% |
| MMLU Medical ‡ | ~75% | ~88% |
| Med Procedure † | ~80% | ~90% |
| Med Knowledge † | ~85% | ~90% |
| General Reasoning * | ~60% | ~70% |
Range: 40% - 100%

† MMLU medical consists of the following MMLU sections: Clinical knowledge, college biology, college medicine, medical genetics, professional medicine and anatomy
† Internal Benchmarks
* General Reasoning is an average of the following benchmarks run zero shot. ARC(easy), ARC(Hard), PIQA, WinoGrande and Hellaswag

Hippocratic AI
Proprietary & Confidential

## Slide 16: And allows us to leverage them at 5 – 40x lower cost
### 100G Tokens
| Category | Cost ($000's) |
|---|---|
| CPT | 70 |
| From Scratch | 2,900 |
Ratio: 40x

### 1T Tokens
| Category | Cost ($000's) |
|---|---|
| CPT | 700 |
| From Scratch | 3,500 |
Ratio: 5x

All training cost estimates based on a dense 70B model
* From Scratch Model base is 4T tokens

Hippocratic AI
Proprietary & Confidential

## Slide 17: Voice quality impacts everything (nurses acting like patients)
| | Rachel with Low quality | Rachel with High quality | Robert with High quality | Roger with High quality |
|---|---|---|---|---|
| Number of Nurse scores | 279 | 274 | 269 | 272 |
| Did you like the Nurse's voice? | 61.7% | 84.3% | **89.2%** | 88.2% |
| Was the Nurse's speaking speed correct? | 82.5% <br> *Note: Low quality was 2x faster but yet got worse scores on speed* | **85.8%** | 84.1% | 84.1% |
| Did the Nurse never or rarely interrupt you? | **90.4%** | 89.1% | 89.6% | 89.4% |
| Did you feel that you could interrupt the Nurse when you needed to? | 82.5% | 83.3% | **86.7%** | 85.4% |
| Did you like the Nurse's accent? | 70.7% | 88.0% | **93.0%** | 90.5% |
| Do you feel that the Nurse's level of medical language was just right? | 94.6% | **96.0%** | 93.3% | 89.7% |
| Is the Nurse ready to interact with patients? | 54.3% | 68.7% | 67.4% | **71.1%** |
| Would you pick up another call from the Nurse? | 68.7% | 81.9% | **87.8%** | 86.5% |
| Do you believe that a patient would be better off getting this call from the Nurse than no call at all? | 91.5% | 92.0% | 90.8% | **93.8%** |

Hippocratic AI
Proprietary & Confidential

## Slide 18: About 70% of nurses thought Rachel ready to talk to patients
| | CHF Script | CKD Script | HRA Script (Worst) | HRT Script |
|---|---|---|---|---|
| Number of RNs | 211 | 207 | 207 | 206 |
| Did Rachel say anything that may cause serious harm? <br> *(Note: Lower is good and this was only base model - no support engines)* | 6.6% | 7.2% | 2.4% | **1.0%** |
| Did Rachel listen to you? | 90.1% | **91.8%** | **91.8%** | **91.8%** |
| Did you feel Rachel cared about you? | 85.3% | 86.5% | 82.1% | **90.3%** |
| Do you feel that Rachel had a good bedside manner? | **95.7%** | 94.7% | 91.3% | 94.7% |
| Do you feel comfortable confiding in Rachel? | 83.9% | 81.6% | 74.4% | **88.8%** |
| Did you connect socially with Rachel? | 62.6% | **66.7%** | 44.9% | 64.6% |
| Do you feel more able to manage your own condition after speaking to Rachel? | 83.4% | 86.0% | 64.3% | **90.3%** |
| Is Rachel ready to interact with patients? | **75.4%** | 68.1% | 67.3% | 78.2% |
| Would you pick up another call from Rachel? | 88.6% | 84.5% | 81.2% | **89.8%** |
| Do you believe that a patient would be better off getting a call from Rachel than no call? | 91.9% | 92.3% | 88.4% | **93.7%** |

Hippocratic AI
Proprietary & Confidential

## Slide 19: Same survey but from Patient actors (used in med schools)
| | CHF Script | CKD Script | HRA Script | HRT Script |
|---|---|---|---|---|
| Number of Patient Actors | 28 | 28 | 29 | 25 |
| Did Rachel say anything that may cause serious harm? (Lower better) | 7.1% | 3.6% | **0.0%** | **0.0%** |
| Did Rachel listen to you? | 96.4% | **100.0%** | 93.1% | 96.0% |
| Did you feel Rachel Cared about you? | 92.9% | **96.4%** | 65.5% | 96.0% |
| Do you feel that Rachel had a good bedside manner? | **100.0%** | **100.0%** | 89.7% | **100.0%** |
| Do you feel comfortable confiding in Rachel? | 96.4% | **100.0%** | 79.3% | 92.0% |
| Did you connect socially with Rachel? | 64.3% | **78.6%** | 48.3% | 64.0% |
| Do you feel more able to manage your own condition after speaking to Rachel? | **89.3%** | **89.3%** | 4.8% | 88.0% |
| Is Rachel ready to interact with patients? | 78.6% | **85.7%** | 58.6% | 84.0% |
| Would you pick up another call from Rachel? | **96.4%** | **96.4%** | 86.2% | 96.0% |
| Do you believe that a patient would be better off getting a call from Rachel than no call? | 96.4% | **100.0%** | 86.2% | **100.0%** |

Hippocratic AI
Proprietary & Confidential

## Slide 20: Same survey but from actual patients who have the condition – actual patients more positive than nurses or patient actors
| | CHF Script | CKD Script | HRA Script |
|---|---|---|---|
| Number of Actual Patients | 20 | 27 | 39 |
| Did Rachel say anything that may cause serious harm? (Lower better) | 5.0% | 7.4% | 5.1% |
| Did Rachel listen to you? | 95.0% | **96.3%** | 89.7% |
| Did you feel Rachel Cared about you? | **90.0%** | 88.9% | 76.9% |
| Do you feel that Rachel had a good bedside manner? | **95.0%** | 92.6% | 89.7% |
| Do you feel comfortable confiding in Rachel? | **90.0%** | 85.2% | 79.5% |
| Did you connect socially with Rachel? | **70.0%** | 55.6% | 38.5% |
| Do you feel more able to manage your own condition after speaking to Rachel? | **95.0%** | 81.5% | 61.5% |
| Is Rachel ready to interact with patients? | **95.0%** | 88.9% | 71.8% |
| Would you pick up another call from Rachel? | **90.0%** | 85.2% | 76.9% |
| Do you believe that a patient would be better off getting a call from Rachel than no call? | **95.0%** | 88.9% | 89.7% |

Hippocratic AI
Proprietary & Confidential

## Slide 21: Response speed comparison
### Time to Response (seconds)
Patient Speaks > ASR > LLM > TTS > Nurse Speaks

| Component | HAI | GPT4 |
|---|---|---|
| ASR | ~0.5s | ~0.5s |
| LLM | ~0.5s | ~2.0s |
| TTS | ~1.0s | ~1.0s |
**Total HAI: ~2.0s**
**Total GPT4: ~3.5s**

### Optimizations Remaining
* Eleven Labs Dedicated Servers
* Minimize Support Model Token Output for Synchronous Calls
* Optimized Inference Software (via Lepton and Fireworks)
* Pre-Caching Common Responses

Hippocratic AI
Proprietary & Confidential

## Slide 22: TTS risk is more from variance than absolute time
### ElevenLabs variance
(Chart shows average latency in seconds over time. The latency fluctuates significantly, mostly between 0.5s and 1.5s, with occasional spikes up to ~2.0s. It indicates high variance rather than consistently high latency.)

Hippocratic AI
Proprietary & Confidential

## Slide 23: Cost to run main model vs. Open AI
(remember price to customer needs to be 10x this COGS to create software margins)

### Total cost / hour / nurse
| Component | Cost per hour |
|---|---|
| Base Model | ~$0.08 |
| Support Engines | ~$0.30 |
| ASR | ~$0.08 |
| TTS | ~$0.40 |
**Total: ~$0.86 / hour / nurse**

### Open AI vs. HAI cost / hour / nurse
| Model | Cost per hour |
|---|---|
| HAI | $0.38 |
| GPT 4 Turbo | $37.80 |
| GPT 4 | $111.60 |

Hippocratic AI
Proprietary & Confidential

## Slide 24: Goto Market Strategy
Goto Market Strategy

Hippocratic AI
Proprietary & Confidential

## Slide 25: Roadmap
### Feb 5: Early Pilot
* Assess early patient experience with 2 providers
* Full clinical supervision on calls
* Regular reviews and fixes

### Feb 12: Public Announcement
* Multiple media channels, e.g. NBC and Podcasts
* Commonwealth Club
* CNO announcement
* Scientific & Clinical Papers
* Open-source and bug bounty
* Provisional Patents

### Apr 1: Patient Testing
* Pilot trials with Partner Health Systems
* No charge
* Optional - Sell Support Models

### Jul 1: Paid Release
* Pilot partners moved to commercial model
* General release to all partners

* Continued development for HS deployment

Hippocratic AI
Proprietary & Confidential

## Slide 26: Health system testing platform demo
Health system testing
platform demo

Hippocratic AI
Proprietary & Confidential

## Slide 27: Status of current partners - Pre-testing with low risk partners first
### Promising discussions moving straight to commercial agreement
* Optum
* Infusion Services
* amwell
* cigna healthcare
* Conduit Health Partners
* Davita.
* PARKVIEW HEALTH
* fraserhealth Better health. Best in health care.
* HENRY FORD HEALTH
* sharecare
* MetroHealth
* VANDERBILT HEALTH
* Grady

### Committed & kickoff planned
* HEALTH FAIRVIEW
* ROPER ST. FRANCIS
* Northwestern Medicine
* tango.
* Nicklaus Children's Hospital
* Cleveland Clinic
* guidehealth

### Signed & kicked off
* Banner Health
* OhioHealth
* MEDICAL MUTUAL
* Sondermind® Therapy Works.
* ELNA Medical
* MUNSON HEALTHCARE
* MILLENNIUM PHYSICIAN GROUP Your Connection to a Healthier Life
* University of Vermont HEALTH NETWORK
* vital

### First HS Tier
* BaylorScott & White HEALTH
* UHS
* HONORHEALTH
* Cincinnati Children's
* MultiCare A
* harmonycares.
* WELLSPAN HEALTH

### Pre-Test Group
* EVERNOW
* SHEBA GLOBAL Tel HaShomer Patient Services
* Illinois PAIN & SPINE INSTITUTE
* SIDE HEALTH

Hippocratic AI
Proprietary & Confidential

## Slide 28: Quick revenue calc of just existing engaged health systems
* **27** Health systems
    * Of 1500 - 2000 in the US
* They have **31K** Beds + **90K** Nurses
* With **10K** to **20K** Open Reqs for Nurses and Social Workers
* Filling **1,000** Nurses
    * **$26MM** ARR
* Filling **10,000** Nurses
    * **$262MM** ARR
    * at 8 hours a day for $9/hr

Hippocratic AI
Proprietary & Confidential

## Slide 29: Our current partners by Industry & type
### By Industry
* DTC (0)
* Disaster (0)
* RPM (1)
* Providers (28)
* Digital Health (4)
* Payors (3)
* Employers (0)
* Assisted living (Implicit, not explicitly numbered)
* Pharmacy (1)
* Pharma (0)

### Providers¹ By Delivery
* For-Profit (2)
* Public Health (2)
* Children's (2)
* VBC¹ (3)
* Non-Profit (5)
* Community-Based (7)
* AMC (8)
* Primary Care (2)

¹ 3 VBC Providers included in addition to 28 Providers

Hippocratic AI
Proprietary & Confidential

## Slide 30: Partners by Geography
(Map of the United States with states highlighted in green and blue, indicating partner presence. Logos are placed near relevant states.)

* HEALTH FAIRVIEW
* Optum
* PARKVIEW HEALTH
* MultiCare A
* HENRY FORD HEALTH
* harmonycares.
* MUNSON HEALTHCARE
* BON SECOURS MERCY HEALTH
* MetroHealth
* Cincinnati Children's
* OhioHealth
* MEDICAL MUTUAL
* Conduit Health Partners
* University of Vermont HEALTH NETWORK
* Infusion SERVICES
* cigna healthcare
* amwell
* UHS
* WELLSPAN HEALTH
* Northwestern Medicine
* guidehealth
* ROPER ST. FRANCIS
* sharecare
* Grady
* vital
* Illinois PAIN & SPINE INSTITUTE
* ELNA Medical
* fraserhealth Better health. Best in health care.
* SHEBA Tel HaShomer Patient Services
* EVERNOW
* SIDE HEALTH
* Banner Health
* HONORHEALTH
* tango.
* Davita.
* sondermind® Therapy Works.
* VANDERBILT HEALTH
* BaylorScott & White HEALTH
* AKUMIN
* MILLENNIUM PHYSICIAN GROUP Your Connection to a Healthier Life
* Nicklaus Children's Hospital

Hippocratic AI
Proprietary & Confidential

## Slide 31: Use Case Complexity
Always Complex = 1
Complexity Varies = 0.5

| Use Case | Non-Standard Reads | Structured Writes | Non-Standard Writes | Data in Multiple Depts | Data at 3P | Patient Identification | Existing Workflow | Score |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| HRA | | ✓ | | | | | | 1 |
| Medication Calls | | ✓ | ✓ | | | | | 1 |
| RPM Support | ✓ | | | | ✓ | | | 2 |
| Super Discharge | | ✓ | | | | ✓ | ✓ | 2.5 |
| Chronic Care Mgmt | ✓ | ✓ | ✓ | | | ✓ | | 3 |
| Super Wellness/SDOH | ✓ | ✓ | ✓ | ✓ | | | | 3 |
| EOB | ✓ | | | ✓ | ✓ | | ✓ | 3.5 |
| Pre Op | ✓ | ✓ | ✓ | ✓ | | | ✓ | 3.5 |
| Unfilled Orders | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 4 |
| Intake | ✓ | ✓ | ✓ | ✓ | | | | 4 |
| Scheduling | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |

Hippocratic AI
Proprietary & Confidential

## Slide 32: Partner Integration Complexity
| Partner | Multiple EHRs | Non-Epic | Independent Providers | Custom Requirements | IT Interest | Small Team | Multiple Departments | No Direct Workflow Support | Score |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| HONORHEALTH | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ | ✓ | 7 |
| UHS | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ | ✓ | 7 |
| SHEBA GLOBAL Tel HaShomer Patient Services | | ✓ | | ✓ | | | ✓ | ✓ | 4 |
| Cincinnati Children's | | | | ✓ | | ✓ | | | 2 |
| WELLSPAN HEALTH | | | | ✓ | | ✓ | | | 2 |
| EVERNOW | | | | ✓ | | | | | 1 |
| Illinois PAIN & SPINE INSTITUTE | | | | ✓ | | | | | 1 |
| SIDE HEALTH | | | | ✓ | | | | | 1 |

Hippocratic AI
Proprietary & Confidential

## Slide 33: Product Roadmap
Condition
Rollout Phase
# Pt's

| | Colonoscopy | Knee Joint | Cosmetic | Cataract | C-Section | PCI | Hernia | Gallbladder | Hysterectomy | Spine: Fusion | Hip Joint |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Pre-Op** | 1 (16,100,000) | 1 (790,000) | 2,500,000 | 2,361,653 | 1,174,545 | 625,000 | 606,000 | 503,000 | 502,600 | 500,000 | 450,000 |
| **Super Discharge** | Arthritis (1,128,100) | Sepsis (2,218,800) | Heart Failure (1,135,900) | Pneumonia (740,700) | Diabetes (678,600) | AMI (658,600) | Cardiac Arrh. (620,000) | COPD (569,600) | CKD (565,800) | Stroke (533,400) | Cellulitis (529,600) |
| **Chronic Care** | CKD (1) (35,500,000) | Heart Failure (1) (6,200,000) | Obesity (137,610,000) | Hypertension (119,900,000) | Arthritis (53,000,000) | Diabetes (29,700,000) | Asthma (27,473,000) | Oral Diseases (20,898,000) | Cancer (18,250,000) | COPD (16,350,200) | Alzheimer's (6,700,000) |
| **Super Wellness** | HRA (1) (18,900,000) | Womens HLTH (1) (17,476,800) | AWV (1) (9,500,000) | PHQ9 (65,748,297) | PT (52,905,200) | Senior Health (51,591,776) | Med Recon. (50,600,850) | Sleep (49,530,000) | Substance Abuse (21,400,000) | SDOH (20,800,000) | Pain (3,560,400) |
| **Condition Follow Up** | Womens HLTH (1) (17,476,800) | Arthritis (53,000,000) | CKD (35,500,000) | COPD/ Asthma (33,800,000) | Diabetes (29,700,000) | Oral Diseases (20,898,000) | Spine (20,664,000) | Cancer (18,800,000) | Pain (17,100,000) | Heart Disease (16,300,000) | Cosmetic (2,500,000) |

Hippocratic AI
Proprietary & Confidential

## Slide 34: Partner Rollout Schedule
| | Phase 1 | Phase 2 | Phase 3 |
|---|---|---|---|
| Pre Op | | Cincinnati Children's HONORHEALTH UHS WELLSPAN HEALTH | Northwestern Medicine OhioHealth |
| Super Discharge | | MultiCare A HONORHEALTH | Grady Cleveland Clinic Banner Health OhioHealth |
| HRA | | Cincinnati Children's MUNSON HEALTHCARE | Banner Health |
| RPM Support | SIDE HEALTH | | |
| Chronic Care Mgmt | | BaylorScott & White HEALTH MUNSON HEALTHCARE HONORHEALTH | sharecare Banner Health OhioHealth |
| Wellness/SDOH | | | MEDICAL MUTUAL University of Vermont HEALTH NETWORK OhioHealth |
| Medication Checks | EVERNOW Illinois PAIN & SPINE INSTITUTE SHEBA GLOBAL Tel HaShomer Patient Services | | |

Hippocratic AI
Proprietary & Confidential

## Slide 35: Pricing Model
| Commitment ($) | Price - No KPI Sharing | Price - KPI Sharing | Prepaid Discount |
|---|---|---|---|
| None | $30/hr | $25/hr | 10% |
| <$250K | $25/hr | $20/hr | 10% |
| $251K - $500K | $20/hr | $15/hr | 10% |
| $500K - $1MM | $17/hr | $12/hr | 10% |
| $1MM - $2MM | $15/hr | $10/hr | 10% |
| $2MM+ | $13/hr | $8/hr | 10% |

### Integrations
> $250K Commitment = $0
Else based on scope
EMR and Telephony integration

### Platform
$50-100K
General management and personalization
(protocols, care plans, etc)

Hippocratic AI
Proprietary & Confidential

## Slide 36: Decision: Pricing model approval?
Decision: Pricing model approval?

Hippocratic AI
Proprietary & Confidential

## Slide 37: Financials
Financials

Hippocratic AI
Proprietary & Confidential

## Slide 38: We spent $16.2 million net of interest in 2023 and have $51.4 million in cash. Our biggest spend was on AWS followed by headcount and contractors
### Actuals
| In $ | Mar-23 | Apr-23 | May-23 | Jun-23 | Jul-23 | Aug-23 | Sep-23 | Oct-23 | Nov-23 | Dec-23 | 2023 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **R&D expense** | **137** | **131,671** | **224,788** | **286,262** | **1,883,782** | **3,221,481** | **2,947,188** | **2,579,219** | **1,722,347** | **1,841,550** | **14,838,425** |
| Headcount | | 118,993 | 171,382 | 247,526 | 518,318 | 637,869 | 651,468 | 699,781 | 671,696 | 655,142 | 4,372,175 |
| Contractors - Clinical | | | 9,919 | 8,018 | 13,086 | 129,334 | 48,147 | 42,552 | 91,762 | 112,962 | 455,777 |
| Contractors Data | 137 | 3,166 | 592 | 11,933 | 25,145 | 71,691 | 52,455 | 48,186 | 43,034 | 55,836 | 312,171 |
| Contractors - Other | | 6,750 | 30,300 | | 2,260 | | 43,170 | 30,246 | 32,000 | 55,977 | 200,704 |
| AWS - GPU | | | | | 476,275 | 1,468,850 | 1,736,294 | 1,320,483 | 625,789 | 714,984 | 6,342,675 |
| AWS - Other | | | | | 291,361 | 375,939 | 404,131 | 417,186 | 200,451 | 126,690 | 1,815,757 |
| Datasets | | 1,186 | | 1,951 | 545,508 | 517,199 | 234 | 8,230 | 1,298 | 60,050 | 1,135,657 |
| Other Software | | 1,576 | 12,595 | 16,835 | 11,830 | 20,599 | 11,289 | 12,556 | 56,318 | 59,909 | 203,508 |
| **S&M expense** | | **20** | **55,815** | **37,871** | **145,411** | **128,408** | **100,647** | **120,882** | **152,760** | **131,332** | **873,146** |
| Headcount | | | 5,049 | 68,248 | 36,115 | 36,194 | 36,118 | 65,647 | 63,074 | 310,445 |
| Contractors - Other | | | | | 4,011 | | | | | 4,011 |
| Public Relations & Conferences | | 21,722 | 20,600 | 25,550 | 26,690 | 33,895 | 66,025 | 52,190 | 57,810 | 304,482 |
| Travel & Entertainment | | 9,383 | 10,778 | 46,561 | 39,578 | 30,354 | 18,684 | 34,890 | 8,840 | 199,067 |
| Paid Marketing | | 1,166 | 1,410 | | 22,981 | 172 | 23 | | | 25,752 |
| Software | 20 | 23,544 | 33 | 5,053 | (967) | 33 | 33 | 33 | 1,608 | 29,389 |
| **G&A expense** | **23,085** | **109,693** | **154,404** | **624,388** | **399,933** | **211,030** | **305,037** | **281,866** | **232,227** | **202,874** | **2,544,537** |
| Headcount | | 45,190 | 48,202 | 56,362 | 147,973 | 27,335 | 138,166 | 123,727 | 85,934 | 76,611 | 749,500 |
| Contractors - Other | | 3,550 | 27,926 | 102,802 | 46,755 | 52,109 | 33,116 | 11,510 | 8,921 | 3,603 | 290,292 |
| Legal | 23,085 | 4,241 | 43,472 | 99,220 | 52,424 | 14,227 | 27,793 | 45,086 | 31,143 | | 340,692 |
| Accounting | | 223 | 3,945 | 5,639 | 5,014 | 7,072 | 12,313 | 11,619 | 10,518 | 15,896 | 72,240 |
| G&A expense - All departments | | 56,489 | 30,858 | 360,364 | 147,768 | 110,286 | 93,649 | 89,923 | 95,712 | 106,764 | 1,091,813 |
| Rent | | 9,150 | 10,000 | 35,000 | 35,000 | 35,000 | 35,000 | 35,015 | 35,462 | 35,107 | 264,733 |
| Office & Meals | | | 5,453 | 8,646 | 24,896 | 21,890 | 16,171 | 16,657 | 17,046 | 25,367 | 136,126 |
| Software | | 324 | 3,486 | 6,022 | 10,766 | 9,787 | 8,422 | 9,519 | 9,220 | 9,432 | 66,978 |
| Recruiting | | 45,766 | 3,178 | 222,790 | 20,235 | 11,005 | 8,416 | 7,585 | 10,379 | 9,450 | 338,804 |
| Utilities (Phone & Maintenance) | | 550 | 900 | 5,839 | 6,962 | 9,484 | 6,590 | 7,799 | 7,032 | 7,257 | 52,413 |
| Insurance & Permits | | | 538 | 269 | 4,417 | 4,417 | 4,969 | 4,417 | 4,714 | 23,741 |
| Depreciation | | 168 | 2,034 | 3,437 | 5,350 | 5,350 | 5,350 | 5,545 | 5,642 | 5,642 | 38,518 |
| Other G&A | | 531 | 5,807 | 78,092 | 44,290 | 13,353 | 9,282 | 2,836 | 6,514 | 9,796 | 170,501 |
| **Total operating expenses** | **23,221** | **241,384** | **435,006** | **948,522** | **2,429,126** | **3,560,918** | **3,352,872** | **2,981,967** | **2,107,334** | **2,175,757** | **18,256,107** |
| **Interest income** | **7** | **97,717** | **208,100** | **200,876** | **254,231** | **270,400** | **244,381** | **256,238** | **233,733** | **240,676** | **2,006,359** |
| **Net income** | **(23,214)** | **(143,667)** | **(226,906)** | **(747,646)** | **(2,174,895)** | **(3,290,518)** | **(3,108,490)** | **(2,725,729)** | **(1,873,601)** | **(1,935,081)** | **(16,249,748)** |
| **Ending cash** | **3,505,202** | **49,728,038** | **49,513,696** | **49,712,521** | **61,551,059** | **59,966,158** | **58,406,531** | **53,424,809** | **53,350,115** | **51,378,004** | **51,378,004** |

Note: Clinical contractors include registered nurses, med student, and physician advisors who help us with reinforced learning from human feedback; Data contractors help us with data scrapping; Other Software under R&D includes costs for OpenAI, ElevenLabs, Twilio, etc.; Other G&A includes costs for bank fees, payroll fees, and equipment expenses
Hippocratic AI
Proprietary & Confidential

## Slide 39: Q1 2024 spend net of interest expected to be $5.7 million with an average monthly expense of $1.9 million marginally increasing from Jan 24 to Mar'24 due to hiring
### Plan
| In $ | Jan-24 | Feb-24 | Mar-24 | Q1' 24 |
|---|---|---|---|---|
| **R&D expense** | **1,750,863** | **1,759,150** | **1,880,653** | **5,390,665** |
| Headcount | 679,870 | 776,828 | 860,671 | 2,317,369 |
| Contractors - Clinical | 130,435 | 108,800 | 108,800 | 348,035 |
| Contractors Data | 57,836 | 52,836 | 46,836 | 157,507 |
| Contractors - Other | 38,377 | 38,377 | 38,377 | 115,132 |
| AWS - GPU | 699,360 | 631,680 | 699,360 | 2,030,400 |
| AWS - Other | 80,205 | 100,205 | 75,205 | 255,615 |
| Datasets | 3,000 | 3,000 | 3,000 | 9,000 |
| Other Software | 61,780 | 47,424 | 48,404 | 157,608 |
| **S&M expense** | **160,799** | **160,799** | **174,523** | **496,121** |
| Headcount | 67,616 | 67,616 | 101,340 | 236,571 |
| Contractors - Other | | | | |
| Public Relations & Conferences | 57,810 | 57,810 | 37,810 | 153,430 |
| Travel & Entertainment | 34,890 | 34,890 | 34,890 | 104,670 |
| Paid Marketing | | | | |
| Software | 483 | 483 | 483 | 1,449 |
| **G&A expense** | **216,500** | **233,916** | **223,010** | **673,426** |
| Headcount | 103,517 | 103,517 | 103,517 | 310,550 |
| Contractors - Other | 3,603 | 3,603 | 3,603 | 10,808 |
| Legal | 6,000 | 20,500 | 13,010 | 39,510 |
| Accounting | 12,678 | 13,031 | 5,000 | 30,709 |
| G&A expense - All departments | 90,703 | 93,266 | 97,881 | 281,850 |
| Rent | 35,107 | 35,107 | 35,107 | 105,320 |
| Office & Meals | 17,039 | 18,684 | 21,563 | 57,286 |
| Software | 9,432 | 9,989 | 10,964 | 30,385 |
| Recruiting | 7,500 | 7,500 | 7,500 | 22,500 |
| Utilities (Phone & Maintenance) | 7,614 | 7,753 | 8,452 | 23,819 |
| Insurance & Permits | 4,700 | 4,610 | 4,675 | 13,985 |
| Depreciation | 5,642 | 5,642 | 5,642 | 16,926 |
| Other G&A | 3,669 | 3,980 | 3,978 | 11,628 |
| **Total operating expenses** | **2,128,162** | **2,153,864** | **2,278,186** | **6,560,212** |
| **Interest income** | **236,144** | **256,172** | **333,626** | **825,941** |
| **Net income** | **(1,892,018)** | **(1,897,692)** | **(1,944,560)** | **(5,734,271)** |
| **Ending cash** | **49,485,551** | **72,587,252** | **70,641,252** | **70,641,252** |

* Increase driven by hiring in engineering team
* AWS average monthly cost at $762K with some decrease in GPU cost in February due to reduced number of days in month
* Increase driven by hiring in customer success team
* G&A expense marginally increasing with ramp in headcount
* Increase in interest income driven by $25 million in new financing in February 2024 increasing the ending cash to $70.6 million

Note: Clinical contractors include registered nurses, med student, and physician advisors who help us with reinforced learning from human feedback; Data contractors help us with data scrapping; Other Software under R&D includes costs for OpenAI, ElevenLabs, Twilio, etc.; Other G&A includes costs for bank fees, payroll fees, and equipment expenses

Hippocratic AI
Proprietary & Confidential

## Slide 40: At $8.2 million AWS was our biggest expense in 2023 followed by full-time headcount at $5.4 million, and contractors at $1.3 million
### 2023 Cash Expense (in $ '000s)
* **Start:** 16,572 (2023 Cash Expense)
* **Add:** 2,006 (Interest Income)
* **Subtract:**
    * 5,452 (Total Headcount)
    * 969 (Contractors)
    * 8,158 (AWS)
    * 1,136 (Data)
    * 204 (Other Software)
    * 330 (PR & Marketing)
    * 199 (Travel & Entertainment)
    * 33 (Software & Contractors)
    * 290 (Contractors)
    * 467 (Legal, Accounting & Insurance)
    * 265 (Rent)
    * 136 (Office & Meals)
    * 80 (Software)
    * 376 (Recruiting)
    * 52 (Utilities (Phone & Maintenance))
    * 252 (Capex)
    * 179 (Other G&A)

(This is a waterfall chart showing total cash expense starting at $16,572K, adding interest income $2,006K, then subtracting various expenses to arrive at the ending cash balance, which is implied by the difference between total expenses and cash from previous financial slides.)

Note: 2023 Cash Expense is calculated as 2023 Net Income + (2023 Capex - 2023 Depreciation) + Unrecognized Prepaid Expenses as of 12/31/2023. The ending cash balance of $51.4 million as of 12/31/2023 does not include $684K in 2023 expenses which were paid out in Jan 2024

Hippocratic AI
Proprietary & Confidential

## Slide 41: Org Chart
### CEO: Munjal Shah

### Clinical
* **Menees Bhimani (CMO)**
    * Paul G (Dir, Clinical AI)
    * Michelle V (Dir Care Management)
    * Sophia B (Dir Nursing)

### Product
* **Vishal Parikh (CPO)**
    * **Integration**
        * Meyhaa B (PM)
        * Rae L (Sen Dir, Conversation)
    * **Eng.**
        * Xiaosong Y (Principal Software Eng)
        * Sanchay H (Principal Software Eng)
        * Howard W (Principal Software Eng)
        * Amir Y (Principal Software Eng)
        * Swapnil S (Applied NLP Eng)
        * Darya F (Staff Software Eng)
        * Gerry M (Staff Software Eng)
        * Nihar T (Staff Software Eng)

### Operations/Eval
* **Alex Miller (COO)**
    * **Admin**
        * Harpreet M (COS)
        * Maulik S (GC)
        * Abhinav S (Head Finance)
        * Scott P (Sen Recruiter)
        * Fel G (Office Manager)
    * **GTM**
        * Erinne D (CRO)
        * Nick A (VP, Customer Success)
    * Seb BL (Sen Software Eng)
    * Kevin C (Sen Software Eng)

### LLM Pre-Training
* **Saad Godil (CTO)**
    * Markel A (Sen Research Sci)
    * Zhengliang L (Research Sci)
    * Neha M (ML Eng)

### LLM Alignment
* **Subho Mukherjee (CSO)**
    * Debo D (Research Sci)
    * Neel K (Sen Research Sci)
    * Kriti A (Staff Applied Sci)
    * Jiayuan D (Staff Research Sci)

### Data
* **Kim Parikh (SVP Data)**
    * Cezanne B (HC Data Specialist)

Hippocratic AI
Proprietary & Confidential

## Slide 42: Legal Updates
Legal Updates

Hippocratic AI
Proprietary & Confidential

## Slide 43: Closed Session
Closed Session

Hippocratic AI
Proprietary & Confidential

## Slide 44: Financing - Potential use of proceeds (expenses not in forecast)
* **$3M**: Build 5 vertical exploration teams at $600K/vertical = 1 very senior person + 1 sales prompt engineer
* **$4M**: New base model architecture. Subho and Saad have an idea for a 70B x 8 MoE as the base model and training it ourselves (CPT) – Probably $3-5MM
* **$4M**: If a vertical takes off we will need $2MM to scale it. Assuming 3 take off = $3-6MM (there will be revenue, but assuming zero to be conservative)
* **$10M**: ElevenLabs drives 1/2 of COGS. We should build this in-house, and Subho has explored building a unique voice-to-voice model. Acqui-hire team from Alex Momeni.
* **$1M**: H100 Inference is figured out but if AMD is really 10x cheaper we need to invest in building on this stack. AMD's stack is immature, and require a porting team. But it lowers long-term LLM COGS from .38 to .03
* **$12M**: What if health system take 6 months longer to deploy than planned and our other verticals don't work? What if the FDA says we have to get their approval even though today they only regulate diagnosis? What if we get copyright lawsuit or if we need to license content due to the standard set by OpenAI. We will need some buffer for these risks.

Hippocratic AI
Proprietary & Confidential

## Slide 45: Approvals - Stock Option Grants
| OPTIONEE | RELATIONSHIP | SHARES | % of FD | VESTING SCHEDULE | VESTING COMMENCEMENT | ISO/NSO |
|---|---|---|---|---|---|---|
| Kevin Cha | New Hire | 75,000 | 0.08 | 4 year; 1 year cliff | 12/4/23 | ISO |
| Abhinav Swarup | New Hire | 386,000 | 0.39 | 4 year; 1 year cliff | 1/2/24 | ISO |
| Sebastian Bierman Lytle | New Hire | 200,000 | 0.20 | 4 year; 1 year cliff | 12/13/24 | ISO |
| Molly McCarthy | Nurse Advisor | 10,000 | 0.01 | 2 year; no cliff | 12/6/23 | NSO |
| Cassandra Choi | Nurse Advisor | 10,000 | 0.01 | 2 year; no cliff | 1/3/24 | NSO |
| Neha Manjunath | Existing Employee | 50,000 | 0.05 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Michelle Voisard | Existing Employee | 35,000 | 0.04 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Sophia Busaca | Existing Employee | 50,000 | 0.05 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Cezanne Bianco | Existing Employee | 15,000 | 0.02 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Meyhaa Buvanesh | Existing Employee | 20,000 | 0.02 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Swapnil Sharma | Existing Employee | 25,000 | 0.03 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Gerry Meixong | Existing Employee | 40,000 | 0.04 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Nihar Turumella | Existing Employee | 25,000 | 0.03 | 4 year; 1 year cliff | 1/1/24 | ISO |
| Kevin Cha | Existing Employee | 25,000 | 0.03 | 4 year; 1 year cliff | 1/1/24 | ISO |
| James Peake | Physician Advisor | 25,000 | 0.03 | 2 year; no cliff | 2/1/24 | NSO |
| David Shulkin | Physician Advisor | 25,000 | 0.03 | 2 year; no cliff | 2/1/24 | NSO |
| **TOTAL** | | **1,016,000** | **1.03** | | | |

### Equity Pool Summary:
* **1,906,600** Available hires
* **1,016,000** Approved today
* **175,000** Promised to New Hires (not yet started)
* **715,600** Available for future

Hippocratic AI
Proprietary & Confidential

## Slide 46: Approvals / Waivers / Ratifications
* **Sep. 19, 2023 Meeting Minutes**
    * Approve
* **Hippocratic Health, Inc. - Establishment of Wholly Owned Subsidiary**
    * Preserve Name

Hippocratic AI
Proprietary & Confidential

## Slide 47: Extras
Extras

Hippocratic AI
Proprietary & Confidential

## Slide 48: Backup
Backup

## Slide 49: Today's version has a dramatically different recipe than last BOD
| Type of Data | CPT | Instruction-tuning | RLHF/DPO | RAG | Support Model + Engine Mentoring via IT |
|---|:---:|:---:|:---:|:---:|:---:|
| **Medical Knowledge** | | | | | |
| Medical certification exams | X | | | | X |
| Clinical notes and guidelines | | XX | | | |
| CCN (Raw) | | X | | | |
| SignalLamp (Raw) | | X | | | |
| Infinitely more data from partners | | | | | X |
| Drug and Dosage Facts | | | | | X |
| Medical tests and Labs | | | | | X |
| **General Reasoning** | | | | | |
| Open source data (Orca, FLAN, NIV2, TO) | | X | | | |
| Math problems | | X | | | |
| Coding (python, java, etc) | | X | | | |
| Medical Reasoning | X | | | | |
| COT on Medical certification exams | X | | | | |
| COT on SignalLamp | X | | | | |
| COT on more data from partners | X | | | | |
| **Conversation smoothness** | | | | | |
| CCN (cleaned) | | X | | | |
| SignalLamp (cleaned) | | X | | | |
| Nurse feedback for RLHF | | | XX | | X |
| RN/SP (we generated) with custom scripts and engines | | X | | | |
| **Bedside Manner** | | | | | |
| CCN (filtered) | | X | | | |
| SignalLamp (filtered) | | X | | | |
| Open source datasets (high quality conversations) | | X | | | |
| RN/SP (we generated) with custom scripts | | X | | | |
| Nurse feedback for RLHF | | | XX | | X |
| **Symptom Drill Down** | | | | | |
| CNN (filtered on symptoms) | | X | | | |
| SignalLamp (filtered on symptoms) | | X | | | |
| Infinitely more data from partners | | X | | | |
| RN/SP (we generated) with custom scripts | | X | | | |
| **Medical Safety & Compliance** | | | | | |
| Care cheat sheets | | | | | X |
| Escalation | | | | | X |
| Drug and dosage for patient condition | | | | | X |
| Medical tests and lab for patient condition | | | | | X |
| **Wellness Content & Patient facing content** | | | | | |
| Restaurant menus | | | | X | |
| Hospital policies | | | | X | |
| Nutrition | | | | X | |
| Supplement DB | | | | | X |
| OTC DB | | | | | X |
| Vitamin DB | | | | | X |

**X** Last BOD Meeting
**X** This BOD Meeting

Hippocratic AI
Proprietary & Confidential