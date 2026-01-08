---
source_pdf: "https://drive.google.com/file/d/1uoD86sgcfsUiuHA-tGRfFuUUZqVJFjM-/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Continuity Bio.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1uoD86sgcfsUiuHA-tGRfFuUUZqVJFjM-/view)

## Slide 1
# continuity
The data engine for autonomous healthcare

## Slide 2: Team
# We are entrepreneurs, engineers, and clinicians with multi-billion-dollar impact on healthcare

### Team Members:
*   **Zeno Fox**
    *   CEO & Co-Founder
    *   Fmr. Co-MD at Nucleate
    *   Built 4 orgs with teams up to 100 people
    *   Logos: MIT, Nucleate, TUM

*   **Swathi Manda, PhD**
    *   CTO & Co-Founder
    *   PhD in DNA Nanotech
    *   Led R&D teams at Medtronic
    *   Logos: MIT, Medtronic, IIT Jodhpur

*   **Emir Yasun, PhD**
    *   Senior Principal Scientist
    *   Fmr. Director at Axiome Bio
    *   11+ years at Seer, Quantapore, Plaxco Lab & more
    *   Logos: UCSB, Seer, Quantapore

*   **Kaidong Song, PhD**
    *   Senior Hardware Engineer
    *   Fmr. Postdoc in MechE
    *   31 papers & 4 patents on sensors and fabrication
    *   Logos: UF, Tsinghua University (logo looks like this), Chinese Academy of Sciences (logo looks like this)

*   **Buddha Chaudhury, PhD**
    *   Microsystems Expert (PT)
    *   Co-Founder Keylika (YC)
    *   Fmr. Microsystems lead at Biolinq and imec
    *   Logos: Biolinq, Y Combinator, imec

### Scientific & Medical Advisors:
*   **Prof. Ashwin Gopinath**
    *   Scientific Advisor
    *   Pioneer in DNA sensing, co-founded Biostate and Palamedrix (acq.)
    *   Logo: GT (Georgia Tech)

*   **Prof. Mark Prausnitz**
    *   Scientific Advisor
    *   Microneedle pioneer, co-founded startups with $500M+ funding and 1 IPO
    *   Logo: Georgia Tech (stylized "GT")

*   **Jim Januzzi, MD**
    *   Medical Advisor
    *   Top researcher on heart failure and natriuretic peptides
    *   Logo: MGH 1811 (Massachusetts General Hospital)

*   **Ijah Crump, MD**
    *   Clinical Advisor
    *   MD who worked on 50+ clinical trials and medical devices
    *   Logo: SIMBEC-ORION

### Supported by:
*   Blueprint (by The Engine)
*   MIT delta v
*   MIT sandbox Innovation Fund Program
*   DARPA
*   NSF Innovation Corps (I-CORPS logo)
*   Nucleate
*   SBXI

## Slide 3: Thesis
# Medical Superintelligence is possible But it needs the right interface

### AI Doctors
*   Clinical reasoning
    *   OpenAI
    *   ANTHROPIC
    *   Microsoft
    *   Google
    *   OpenEvidence®
    *   Meta

### +

### Body-Computer Interface
*   Connecting to your body
    *   continuity

## Slide 4: Why now
# Medical AI now outperforms human doctors across diagnostic decisions and treatment planning

### Performance Comparison - Diagnostic Decisions & Treatment Planning

| AI Model   | Date           | AI Performance | Human Performance | AI Outperformance |
| :--------- | :------------- | :------------- | :---------------- | :---------------- |
| Microsoft  | July 9th, 2025 | 85%            | 20%               | 4.2x              |
| Google     | June 30th, 2025| 59%            | 33%               | 1.8x              |
| OpenAI     | August 13th, 2025| 72%            | 45%               | 1.6x              |

## Slide 5: Problem
# Lab tests are the bottleneck for healthcare and AI since they are slow, manual, and high friction

*   **14 Billion lab tests**
    *   Ordered per year in the US
*   **70% of medical decisions**
    *   Driven by lab tests
*   **100% of clinical trials**
    *   Driven by lab tests

## Slide 6: Problem
# Lab tests miss 99% of your health data since blood tests capture just one point in time

### Graph Description:
*   **Blood test result:** Only captures one static snapshot (point on the baseline of the curve).
*   **What really happened:** Dynamic biomarker changes (represented by a rising and falling curve).
*   **Hospitalization:** From missed, critical health changes (peak of the curve, leading to an ambulance icon).

## Slide 7: Case Study
# CGMs unlocked continuous monitoring for glucose but don't generalize to 1000s of critical lab tests

### CGM Impact:
*   **11M** Users globally
    *   → **90%** Adjust behavior
*   **$18B** Annual revenue
    *   → **$138B** Equity value

### CGM Companies Equity Value:
*   **Dexcom:** $30B
*   **Abbott:** $231B
*   **Medtronic:** $121B

## Slide 8: Solution
# Our generalized interface continuously captures most lab data in real-time, replacing blood tests

*   Continuous
*   Effortless
*   Non-invasive

## Slide 9: Technology
# Our patented platform generalizes to 1000s of lab tests unlike CGM sensors that are limited to glucose

### Glucose sensors
*   Glucose-specific enzyme
*   Glucose triggers a chemical reaction that produces an electrical signal
*   *Diagram shows Glucose + O₂ → Glucose oxidase → H₂O₂ + C₆H₁₀O₆*
*   Doesn't generalize

### Continuity
*   Generalized nanopore
*   Temporary binding with biomarkers changes the measured ion current
*   *Diagram shows Unbound nanopore in membrane, then Target Bound nanopore with biomarker attached*
*   Generalizes to 1000s of biomarkers

### Article
*   **nature communications**
*   https://doi.org/10.1038/s41467-023-40870-1
*   DNA nanopores as artificial membrane channels for bioprotonics

## Slide 10: Technology
# Exponential scaling of sensing capabilities inspired by human sensing and powered by AI

### Traditional biosensors
*   1-to-1 sensing
*   *Diagram: Specific sensor → Specific biomarker*
*   **Sensor MUST be perfectly specific**
    *   Must only interact with the specific biomarker, otherwise noise

### Continuity
*   n-to-m sensing, where n < m
*   *Diagram shows multiple non-specific sensors connecting to multiple specific biomarkers*
    *   Non-specific sensor 1 → Specific biomarker 1, Specific biomarker ..., Specific biomarker ...
    *   Non-specific sensor ... → Specific biomarker ..., Specific biomarker ...
    *   Non-specific sensor n → Specific biomarker ..., Specific biomarker m
*   **Sensors DON'T have to be specific**
    *   Combinations of interactions determine specific biomarker

## Slide 11: Market Opportunity
# $300B+ in revenue potential unlocked across health through a universal molecular interface

### Universal data layer for health
*   Like CGMs, but for many molecules
    *   Cardiovascular
    *   Renal
    *   Metabolic
    *   Reproductive
    *   Immunologic
    *   Hepatic
    *   Neurologic
    *   Oncologic
    *   Therapeutic
    *   (Blank/placeholder)

### Scaling across disease areas
*   Biomarkers for any population

| Disease/Category          | Biomarkers                       | Potential ARR in US |
| :------------------------ | :------------------------------- | :------------------ |
| Heart failure             | BNP, K+, Creatinine & more       | $21 B               |
| Coronary artery disease   | Troponin, CRP, K+ & more         | $54 B               |
| Kidney disease            | Creatinine, K+, BUN & more       | $111 B              |
| Fertility & Hormones      | Cortisol, estrogen, FSH, & more  | $22 B               |
| Consumer health           | GLP-1, lactate, ketones, & more  | $70 B               |

### Powers various care models
*   Across care settings
    *   Chronic
    *   Preventive
    *   Ambulatory
    *   In-patient
    *   Remote
    *   AI-driven
    *   (Blank/placeholder)

## Slide 12: Initial Application
# Heart failure events are deadly and affect 23M people we prevent >50% of events and save $66B in cost

### Heart Failure Event Trajectory (Status Quo vs. Continuity)

**Status Quo:**
*   **Patient-reported signals:** 91% of acute events missed (indicated by a dotted line with a small peak).
*   **Hospitalization:** $50k per patient per stay (indicated by a large peak with an ambulance icon).
*   **High Mortality:** 45% within 1 year (indicated by a drop off after hospitalization).

**Continuity Intervention:**
*   **Molecular monitoring:** Natriuretic peptide and other biomarkers (baseline measurement).
*   **Predict and prevent:** 2-3 weeks before an acute event occurs (indicated by a rising curve detected earlier than patient-reported signals).
*   **Preventive intervention:** Stabilizes patient with good prognosis and no hospitalization (indicated by a flattened curve at a lower, stable level, avoiding the large peak of hospitalization).

## Slide 13: Business Model
# Revenue opportunities from integrated product lines with flywheel effects from usage and data

More patients served lead to more data collected, which adds clinical insights and value.
**Each reinforces the other.**

### Revenue Streams:

*   **Wearable**
    *   Remote monitoring
    *   Monitor patient and bill insurance or providers
    *   **$250 per patient / month**

*   **Data Services**
    *   Licensing
    *   Provide de-identified records to pharma and other parties
    *   **$ per license / year**

*   **Applications**
    *   Care Pathways
    *   Algorithms to automate care and bill insurance or providers
    *   **$ per patient / month**

## Slide 14
# continuity
The data engine for autonomous healthcare
zeno@continuity.bio