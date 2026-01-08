---
source_pdf: "https://drive.google.com/file/d/1issYzOyUILvYsJsMzqYZH0Ylvl6VsJFo/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "cohelm-1 (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1issYzOyUILvYsJsMzqYZH0Ylvl6VsJFo/view)

## Slide 1: Seed Deck

**Seed Deck**
**Apr 2023**

## co:helm
the AI co:pilot for Health Insurance administration

## Slide 2: Problem

**Problem**
US Healthcare
administration costs are
spiralling out of control

$950 Bn
annual spend - that's 30% of all US Healthcare spend & 3x Cancer & Cardiovascular care

estimated $285 Bn - $570 Bn are inefficiencies that don't contribute to health outcomes [1][2]

(1) McKinsey Report - note: figure is from 2019, that's before covid!
(2) Healthcare Dive Report
(3) Health Affairs Report - 2022

## Slide 3: Why?

**Why?**
For Health Insurers, highly manual operations
are a key driver of cost

internal workflows rely heavily on HUGE amounts of unstructured & unlabeled clinical data/docs
ask questions e.g. is this procedure medically justified? what is impacting premiums? why is X doctor's billing Z?

expensive clinicians increasingly hired to parse jargon and aide decision making
Nurses & MDs etc. paid @ $150-1500+ hourly
1.5 million US Nurses work in non-clinical admin roles

## Slide 4: The Opportunity

**The Opportunity**
Ultimately, insurance firms don't want a large & expensive clinical workforce
that shrink their margins

They just want the right outcomes...
Medically necessary? Impact on premiums? Escalation required?

...that are cheaper, faster and better

## Slide 5: The Opportunity - List of Insurance services that depend on clinical staff is long...

**The Opportunity**
List of Insurance services that depend on clinical staff is long...

*   **Prior Authorization**
    Evaluate requests for medications, treatments, or procedures, checking necessity, cost-effectiveness, and policy compliance.
*   **Utilization Management**
    Assess the medical necessity of hospitalizations, aligning them with established medical guidelines.
*   **Case Management**
    Coordinate care for patients with complex conditions, developing individualized care plans and monitoring progress.
*   **Disease Management**
    Work with patients w/ chronic conditions, providing education, support, and monitoring to reduce healthcare costs.
*   **Underwriting & Risk management**
    Review employer census data to model future claims and price premiums.
*   **Quality improvement**
    Review EMRs & claims ensuring providers stick to established standards, and recommend improvements
*   **Credentialing**
    Evaluate qualifications/performance of Providers in an insurance network
*   **Fraud, Waste, & Abuse Audits**
    Review EMRs and provider billing to ensure accurate reimbursement and minimize fraud.
*   **Benefits Administration**
    The management of benefits, including the design and implementation of health insurance coverage options.
*   **Member Services**
    The provision of support and assistance to health plan members, including customer service and member education.
*   **Provider Network Management**
    The development and maintenance of contractual relationships with healthcare providers.
*   **Claims Adjudication**
    Analyze medical claims to verify the accuracy of billed services and determine the appropriate payment based on policy guidelines.
*   **Grievance resolution**
    Assist in disputes regarding coverage decisions, claim denials etc.
*   **Health Analytics**
    Analyse healthcare data to improve outcomes, and identify cost-saving opportunities.
*   **Health Policy Compliance**
    Ensuring that health plans and services comply with applicable laws, regulations, and industry standards.

...we're starting with Prior Auth.

## Slide 6: Team

**Team**
We set out to fix this, blending our Healthcare & Insurance experience with technical depth

**Abdel, MD - CEO**
*   ex-Product Manager @Google (head-hunted to PM a Healthcare Search vertical)
*   Medical Degree & MSc in CS
*   Prev: healthcare AI projects @Meta, research @UCL, & commercial work @BCG.

**Zahid - CTO**
*   ex-Tech Lead from Insurance w/~10yrs enterprise experience
*   2x founder + software exit
*   MSc in Engineering Management

**Current investors (accelerator):** Neo + co-founder

**Advisors**

**Technical**
*   Technical Advisor to CEO @Google w/ 25yrs exp.
*   ex-SVP of Siemens Health (AI)
*   ex-Product VP at a prominent Health tech unicorn

**Commercial**
*   C-suite Executive at largest Self-funded Industry Association
*   a DC Healthcare Lobbyist
*   + others here

**Partnerships**
We've secured early access, credits and engineering support from
Google AI
OpenAI
Microsoft For Startups

## Slide 7: MVP - Prior Auth is a $31Bn problem that's getting worse

**MVP**
Prior Auth is a $31Bn problem that's getting worse

at $140/h
Per case, a Nurse workflow can take 5hrs for a simple Yes/No decision

**Workflow:**
Triage inbound PA requests
→ Find & Review Member Insurance Plan
→ Request Clinical Docs (Fax)
→ Review 70+ pages of faxed EHR records
→ Review against Medical Necessity Guidelines
  *   Additional info requests & follow-up (loop back to Request Clinical Docs)
  *   Coordinate P2P Review (loop back to Request Clinical Docs)
→ Authorize
→ Deny/Escalate
→ Communicate with Facility, Doctor, Patient etc.
Concurrent Review

**What is Prior Authorisation?**
a PA is when a Provider (e.g. Doctor) obtains an approval from the patient's Payer before commencing a procedure, investigation or prescription. The Payer has teams of clinicians that review the medical necessity and send back a decision (Approve/Deny/Request more info). This can take anywhere from 3 days to a month to process, often delaying care.

## Slide 8: We shadowed the US's leading Prior Auth service provider

We shadowed the US's leading Prior Auth service provider
and 93% of Nurse workflows
don't require clinical decision making.

*   Retrieving and Reviewing the member plan documents for each case
*   Searching through 100+ pages long EMR printouts from providers
*   Comparing medical necessity guidelines with patient records
*   Copy and pasting medical notes from one place to another
*   Countless hours writing out emails and faxes
*   Countless hours on phone calls asking for clinical documents

**Workflow breakdown:**
retrieving → searching → organizing → Clinical decision → communicating

## Slide 9: Solution

**Solution**
We build LLM-powered co:pilots to automate this

**co:helm AI co:pilot**
retrieving → searching → organizing → Clinical decision → communicating

so nurses can focus on this

## Slide 10: Question

**Question**
How long would it take a nurse to
a) read a 100 page, faxed clinical record,
b) compare it to medical necessity guides?

**Answer**
It doesn't matter, an LLM does it in seconds.

## Slide 11: Demo

**Demo**
With our co:pilot nurses 10x their case output

**Does the heavy lifting in the background**
*   Reviews patient's insurance policy
*   Reviews attached clinical evidence
*   Retrieves Medical Necessity criteria
*   For each criteria cites evidence or suggests missing evidence requests
*   Recommends decision and why.

**UI Table:**
| Date received | Patient number | Request                | Status                 |
| :------------ | :------------- | :--------------------- | :--------------------- |
| Just now      | 38752          | Inpatient stay 3 days  | Preparing evidence     |
| 5 mins ago    | 68742          | Shoulder MRI           | Ready for Review       |
| Today         | 35823          | Sleep Study            | ↑ Requesting evidence  |
| Today         | 30581          | Knee Arthroscopy       | Nurse approved         |
| Today         | 12374          | Spinal Fusion Surgery  | Auto-approved          |
| Today         | 94235          | PET Scan               | Auto-approved          |
| Today         | 32562          | Cardiac Stress Test    | ↑ Requesting evidence  |
| Last Week     | 42586          | CT Scan Abdomen        | Nurse approved         |
| Last Week     | 35314          | Colonoscopy            | Nurse approved         |
| Last Week     | 19683          | Mammogram              | Nurse approved         |

## Slide 12: Demo

**Demo**
With our co:pilot nurses 10x their case output

< Back to Case List
co:helm
Request: Shoulder MRI
PAN: 2342

**Patient details**
Name: John Doe DOB: 03/11/1964 PMH: T2DM, HTN, CKD stage 2 Date PA received: 26/03/2023

**Attached Clinical Records | PDF**
Redwood Cherry Hospital Network - EMR PRINTOUT - CONFIDENTIAL
Patient Name: John Doe | Date of Birth: 05/11/1964 Gender Male Age 59
Past Medical History (PMH):
1.  Type 2 Diabetes Mellitus (T2DM)
    *   Diagnosis Date: 2005
    *   Management: Metformin 1000 mg twice daily. Sitagliptin 100 mg once daily
    *   Most Recent HbA1c 7.2% (3 months ago)
2.  Hypertension (HTN)
    *   Diagnosis Date: 2007
    *   Management: Lisinopril 20 mg once daily, Amlodipine 5 mg once daily
    *   Most Recent Blood Pressure: 132/84 mmHg (1 month ago)
3.  Chronic Kidney Disease (CKD)
    *   Diagnosis Date: 2015
    *   Stage: Stage 3 CKD (eGFR 45 ml/min/1.73m^2)
    *   Management: Monitoring renal function, blood pressure control, low-sodium diet
    *   Most Recent eGFR: 45 ml/min/1.73 m^2 (6 months ago)
4.  Shoulder Instability and Recurrent Dislocations
    *   Diagnosis Date: 2018
    *   History: Patient has a history of recurrent left shoulder dislocations and subluxations, with episodes of instability. The condition has been managed conservatively with physical therapy and use of a shoulder brace during physical activities.
    *   Most Recent Episode: Subluxation of the left shoulder 4 months ago, self-reduced with no need for medical intervention.
Social History:
Smoking: Non-smoker Alcohol: Occasional social drinker (1-2 drinks per week). Occupation: Office worker

**MCG Guidelines**
Clinical indications for Shoulder MRI:
*   Suspected Rotator Cuff Tear: The patient presents with clinical signs and symptoms suggestive of a rotator cuff tear (e.g., weakness in external rotation, positive impingement signs). **Passed**
*   Evaluation of Labral Pathology: Patient has a history of shoulder instability, recurrent dislocations, or subluxations. **Passed**
*   Persistent shoulder pain that has not responded to conservative management (e.g., rest, physical therapy, nonsteroidal anti-inflammatory drugs).

**John's member plan summary**
*   Eligible employees are full-time employees of ABC Corporation who work at least 30 hours per week.
*   Medical Coverage: The Plan covers preventive care, hospitalization, outpatient services, emergency care, prescription drugs, and more. Participants can choose between a Preferred Provider Organization (PPO) or a Health Maintenance Organization (HMO) option.
*   Claims and Appeals: If you have a claim for benefits that is denied or partially denied, you have the right to file an appeal. The SPD outlines the procedures for filing claims and appeals, as well as your rights under the Employee Retirement Income Security Act of 1974 (ERISA).
*   Coordination of Benefits: If you or your dependents have coverage under another health plan, the coordination of benefits provision ensures that the total benefits paid by both plans do not exceed 100% of allowable.

SUBMIT

## Slide 13: Traction

**Traction**
We've signed our first enterprise pilot

with a leading US payer organization covering
2.4 Million lives

and 5 other payers in the pipeline

**Some numbers**
*   Their current Prior Auth staffing overhead is $45 million pa. with ~200 Nurses
*   Previously, a PA nurse does ~10 cases a day
*   With co:helm in Phase 1, a nurse can do up-to 40 cases a day
*   Our target is streamlining from 200 to 50 nurses, a 75% reduction or $33m saving

## Slide 14: Beyond Prior Auth

**Beyond Prior Auth**
Remember these services?

*   **Prior Authorization**
    Evaluate requests for medications, treatments, or procedures, checking necessity, cost-effectiveness, and policy compliance.
*   **Utilization Management**
    Assess the medical necessity of hospitalizations, aligning them with established medical guidelines.
*   **Case Management**
    Coordinate care for patients with complex conditions, developing individualized care plans and monitoring progress.
*   **Disease Management**
    Work with patients w/ chronic conditions, providing education, support, and monitoring to reduce healthcare costs.
*   **Underwriting & Risk management**
    Review employer census data to model future claims and price premiums.
*   **Quality improvement**
    Review EMRs & claims ensuring providers stick to established standards, and recommend improvements
*   **Credentialing**
    Evaluate qualifications/performance of Providers in an insurance network
*   **Fraud, Waste, & Abuse Audits**
    Review EMRs and provider billing to ensure accurate reimbursement and minimize fraud.
*   **Benefits Administration**
    The management of benefits, including the design and implementation of health insurance coverage options.
*   **Member Services**
    The provision of support and assistance to health plan members, including customer service and member education.
*   **Provider Network Management**
    The development and maintenance of contractual relationships with healthcare providers.
*   **Claims Adjudication**
    Analyze medical claims to verify the accuracy of billed services and determine the appropriate payment based on policy guidelines.
*   **Grievance resolution**
    Assist in disputes regarding coverage decisions, claim denials etc.
*   **Health Analytics**
    Analyse healthcare data to improve outcomes, and identify cost-saving opportunities.
*   **Health Policy Compliance**
    Ensuring that health plans and services comply with applicable laws, regulations, and industry standards.

The outputs may slightly differ
But the underlying problem is the same: parsing unstructured clinical data

That's where we specialize. Our co:pilots generalize to anywhere clinicians review lengthy & unstructured clinical data.

## Slide 15: Progress

**Progress**
our journey is just beginning

We're raising $3 million to hit the gas pedal
*   Engineering (Full-stack, DevOps and ML)
*   Building out Sales and GTM motion
*   Regulatory/Legal/Compliance support

Targeting $2m+ ARR in year one.
*   10+ enterprise contracts for Prior Auth co:pilot
*   Charged at $0.05/Per Employee Per Month (PEPM)
*   That's 3.3 million lives covered

## Slide 16: Progress

**Progress**

*   **Jan '22**
    *   Built MVP of backend infrastructure
    *   Real world test deployment
*   **Mar '23**
    *   Signed first enterprise pilot for Prior Auth Co-pilot
    *   Further 5 enterprise LOIs
*   **Today**
    *   Pilot Phase 1 implementation
*   **Jun '23**
    *   Phase 1 results (on track for 40% cost reduction)
*   **Jul '23**
    *   First paid contract for Prior Auth
    *   Presenting Pilot results at a keynote to 1k potential customers at industry summit
*   **Aug '23**
    *   Closed Prior Auth beta w/ 10 customers (+ waitlist)

## Slide 17: appendix

**appendix**

## Slide 18: Go To Market

**Go To Market**
We're targeting self-funded insurance market, first

Self-funded market is larger (60% of employee insurance) & growing faster
It's the long tail → more fragmented with small/mid-market players
This is helpful for 3 reasons:
*   Service businesses w/razor-thin margins & competition → our pitch to cut overheads resonates
*   Particularly as we target CFOs/CEOs/COOs, who are easier to reach in smaller firms
*   and ofcourse, faster product deployment and reduced integration overhead

Large commercial insurers, second
Moving upmarket to Anthem, BCBS, UnitedHealth, Humana etc

Providers, third.

## Slide 19: Market Size

**Market Size**
but it's huge - however you slice it.

**US Healthcare Administration spend by sector**
*   PAYER & PROVIDER: $940B
*   PAYER: $450B
*   SELF-FUNDED: $220B
*   PRIOR AUTH: $31B

## Slide 20: Trends

**Trends**
Two trends exacerbate the cost burden

a workforce crisis; we'll be short 1 million nurses by 2030
*   current 30% vacancy rate → skyrocketing salary overheads
*   Providers pass costs on through billing, Payers can't
*   Payers need nurses for non-billable Operating Expenses → margins shrink

and a data tsunami; avg. medical record now longer than Shakespeare's Hamlet
*   Healthcare's digitization → explosion in data

## Slide 21: Let's discuss the LLMephant in the room.

Let's discuss the LLMephant in the room.

In healthcare, it has always boiled down to Trust
Is this 'AI' accurate? up to date with medical guidelines?
Where did it get that answer from?
Is it HIPAA compliant?
Where is it hosted? is it secure?
Can I run it on premise?
Who owns the data or the algorithms?

and LLMs in their current form are not ready for enterprise

co:helm is.

## Slide 22: Our approach

**Our approach**
infrastructure, not API wrapper

We fix the major flaws of using LLM's today
*   No hallucinations aka. 'confident BSing'
*   Kept up to date without fine tuning
*   Explainable with sources & citation
*   HIPAA compliant & secure
*   Your cloud, our cloud, or on Premise

We're LLM-vendor agnostic w/ open source

**Diagram: On Premise, Compliant & Secure**
*   **co:helm AI platform**
    *   co:helm KB graph for grounding
    *   co:helm Co:pilot Front-End
    *   Open Source multi-LLMs (hot-swappable)
    *   Federated ML for model improvements

We real-world tested our infrastructure with an LLM CDS for UK clinicians, see here