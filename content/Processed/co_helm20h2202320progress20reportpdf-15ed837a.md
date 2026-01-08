---
source_pdf: "https://drive.google.com/file/d/1ijLPAXaQ4mdVwR_ssHObCrAm9D6QzQ04/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Co_helm%20H2%20'23%20Progress%20Report.pdf.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1ijLPAXaQ4mdVwR_ssHObCrAm9D6QzQ04/view)

## Page 1: H2 '23 | Co:Helm Progress Report [draft]

✅ We've built the first LLM-based “Co:Nurse" that can complete a complex clinical workflow the same way a skilled nurse does today.

➡️ This is a key milestone as we go after the $1-2tn administrative burden in US healthcare driven by expensive skilled labour.

## Contents

## Setting the stage

*   Healthcare spend is projected to be ~$7.2tn in 2031, of which ~$1.8tn (~25%) is the administrative burden, and of which payors bear ~$700bn (~40%).
*   This ~$700bn admin spend by payors is largely driven by expensive labour (including lots of nurses and clinicians for workflows that require some clinical expertise).
*   AI has not yet broken through as traditional ML techniques require data to be well-structured and labeled, but most healthcare data is still messy and unstructured (e.g., at least 70% of healthcare providers still exchange medical information via fax).
    *   For example, Medical Necessity Reviews in the Prior Authorization process still require a lot of manual labour. 95% of reviews are “auto-approved” by brittle rules-based engines (simple algorithms, “old-school” ML/AI), but the remaining 5% of reviews that still have to be done manually make up 90% of the costs (Pareto principle).
*   Co:Helm's first product is a digital “co:nurse” that assists nursing teams working for US healthcare payors do manual Medical Necessity Reviews (MNRs) more efficiently.
*   Current industry average is 10.5 MNRs per nurse per day. With a digital co:nurse, the average goes to 50 cases a day (and increasing).
*   And there is a huge opportunity here:
    *   An MNR Nurse in the US costs $120k-130k (all in) for an enterprise company
    *   Next decade: a ~3 million nurses shortage in the US (thus: ↑ in salaries)
    *   A single Prior Auth needing MNR costs $30-90 to process (that's why US Prior Auth is a ~$32B industry – expensive manual labor)

## Product Vision

What we've achieved in the last 6 months...

Phase 1: Prototype → Live Product ✅

## Page 2: We've turned our prototype into a live product

1.  We've turned our prototype into a live product ✅
    *   Prove that our LLM-based ‘Co:Nurse' can complete a complex medical necessity review end-to-end to the quality of a junior nurse (and ofc 1000x faster)
    *   This was a 2-man build prototype in May 2023 → it's now an MVP that is processing real medical cases for nurses in the US on behalf of a significant US payor customer (~3m million lives).
2.  Developing deep domain expertise across team ✅
    *   Payor Prior Auth workflows are hugely complex and typically involve outsourcing to 2-3 organizations, or internal 2-5 departments and 8-12 clinicians.
    *   Over 30 nurse shadowing sessions completed.
    *   Ask us for our 'Life of a Prior Auth' info sheet.
3.  Compliant infrastructure ✅
    *   Transition all our infrastructure to be fully HIPAA-compliant
    *   Weeks away from being SOC-II and HITRUST compliant
4.  Other work streams in the background ✅
    1.  Full AI support for 80% of industry's clinical criteria in prior auth ✅
        *   Up until 3 months ago we were processing only MCG-based clinical criteria (35% market share). An urgent product sprint over the last month (due to a PoC for a large potential customer) meant we added InterQual to our capabilities, which posed a more complex technical challenge (not least because InterQual criteria are usually supplied in PDF).
    2.  Industry Accreditations
        *   Scoping how to obtain URAC and NCQA accreditations, which are the best in the industry of Utilization Management (inc. Prior Auth).
    3.  No more FHIR - open sourcing a new Clinical Data Standard for an LLM-first world
        *   FHIR standards are not suitable for a world with LLMs. Currently in early conversations with other AI startups / Google about spearheading a new LLM-first standard for clinical data interoperability.
!
## Current Technology

Our co:nurse for MNRs is made up of 3 AI Engines (Platform) delivered via Deployment Modules.

## Page 3: Platform & Deployment Modules

Platform:
1.  Medical Records Engine
    *   An AI pipeline for ingesting large volumes of unstructured clinical data (in ANY format including the dreaded e-Fax as a PDF) and creating a programmatic representation of the clinical source of truth.
    *   A smart orchestration of multiple LLMs, vision models, and more 'basic' technologies like OCR, NLP (and even Regex) – can now handle diagrams/charts, schematics, tables, and even symbols and doctor's handwriting.
2.  Clinical Criteria Engine
    *   An AI pipeline for ingesting clinical rules (human-readable logic for getting to a clinical decision) and transforming them into a programmatic decision tree (or series of logical steps) that a clinical reasoning engine can then evaluate.
    *   Two variants: (a) checklist (e.g., MCG), and (b) graph (e.g. InterQual)
    *   Again, engine can handles any format: web page, API, PDF, etc.
3.  Clinical Reasoning Engine
    *   Parses the Clinical Criteria Engine's output and evaluates each logical step, stopping at every “criteria node” to construct a clinical query and generate a RAG-assisted response with citations from the medical records.

Deployment Modules:
1.  Drag & Drop Nurse Dashboard
    1.  For synchronous co:pilot mode, easy lift, minimal integration required – *ask us for a demo*
2.  API Product
    1.  Some clients prefer to integrate via API to send all necessary data and receive a complete response with approximately 1 minute latency – allows for true asynchronous integration, and nurses don't have to learn new software.
    2.  In the future, there is an opportunity to expose the individual engines/agents mentioned above as separate API services for self-service access.
3.  Experimental
    1.  Remote AI Nurse (powered by Vision-LLMs + AI RPA) – *ask us how*
    2.  AI Phone Agents
    3.  AI Fax Agents

## Current R&D Work

*   Across all existing AI Engines:
    *   Building robust evals for monitoring impact of improvements (MVP complete ☑️)
    *   Benchmarking new LLM improvements and hot-swapping based on API updates (MVP complete ✅)
*   Clinical Reasoning Engine
    *   Building portable datasets (Reinforcement Learning with ‘Nurse' Feedback) (Prototype)

## Page 4: Current R&D Work (cont.) & Phase 2

*   Fine-tuning open source models and optimizing pipeline (cost & time)
    *   In any given workflow, our engines can involve up to 10-30 LLM calls. These calls are hosted API services, with the most powerful ones being Claude-2 and GPT-4. We use these services to ensure the best performance.
    *   However, we're now kicking off work to fine-tune or build our own, smaller models that are hyper-specialized for particular tasks, can run locally or even on a browser to some extent, improving security, speed, and cost (our current cost: ~$0.40 per prior auth).
*   Open Source Project – building a new ‘FHIR' replacement that is LLM-first for the next generation of healthcare companies (Prototype)
*   Conversation AI Agents (for manning the phones/SMS and communicating directly with incoming Prior Auth Requests) (Prototype)
*   Vision LLM-assisted RPA for direct manipulation of old dashboards to avoid difficult change management
*   Major Effort: our AI advantage
    *   Training our smaller and hyper-specialized LLMs using our ‘portable datasets'
    *   Some of our customers today have access to the hardest and toughest cases providing us a very valuable dataset and learnings that can position us as the market leader in AI Clinical Decisioning for payors

We're now moving towards...

## Phase 2: Single \*\*\*\*Product → AI Platform

*   So far, we've built a 'brain' that can make clinical decisions.
*   The Medical Necessity Review, in some ways, is the 'atomic unit of work' for any clinical workflow, as it involves the following steps:
    1.  Understanding some unstructured clinical input.
        *   E.g., a faxed PDF of an EMR, or a teleconsult transcript)
    2.  Identifying a series of logical steps required to reach a decision.
        *   E.g., determining the steps needed to approve or deny a prior auth, or deciding on the next investigation for a suspected diabetes patient based on guidelines
    3.  Clinically reasoning at each decision point and documenting the thought process.
        *   E.g., evaluating whether the patient has genuinely failed conservative therapy for their back pain based on the available clinical data.
*   These 3 steps are the 3 AI modules we've built today.
*   Therefore, if you organize these modules as a platform that can be re-configured, you can expand into other clinical workflows within health plans using the same infrastructure.

## Page 5: Functions of Nurses in Health Plans

*   Here are some of the functions nurses (and other clinicians) are hired for at health plans (expand ↓)

| Function                    | Description                                                                                                                                                                |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prior Authorization         | Evaluate requests for medications, treatments, or procedures, checking necessity, cost-effectiveness, and policy compliance.                                                 |
| Utilization Management      | Assess the medical necessity of hospitalizations, aligning them with established medical guidelines.                                                                       |
| Case Management             | Coordinate care for patients with complex conditions, developing individualized care plans and monitoring progress.                                                            |
| Disease Management          | Work with patients with chronic conditions, providing education, support, and monitoring to reduce healthcare costs.                                                         |
| Underwriting & Risk Management | Review employer census data to model future claims and price premiums.                                                                                                     |
| Quality Improvement         | Review EMRs & claims ensuring providers stick to established standards, and recommend improvements                                                                           |
| Credentialing               | Evaluate qualifications/performance of Providers in an insurance network                                                                                                     |
| Fraud, Waste, & Abuse Audits | Review EMRs and provider billing to ensure accurate reimbursement and minimize fraud.                                                                                      |
| Benefits Administration     | The management of benefits, including the design and implementation of health insurance coverage options.                                                                    |
| Member Services             | The provision of support and assistance to health plan members, including customer service and member education.                                                             |
| Provider Network Management | The development and maintenance of contractual relationships with healthcare providers.                                                                                      |
| Claims Adjudication         | Analyze medical claims to verify the accuracy of billed services and determine the appropriate payment based on policy guidelines.                                           |
| Grievance Resolution        | Assist in disputes regarding coverage decisions, claim denials etc.                                                                                                          |

## Page 6: Health Analytics, Health Policy Compliance & Phase 3

| Function                  | Description                                                                                                     |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Health Analytics          | Analyse healthcare data to improve outcomes, and identify cost-saving opportunities.                            |
| Health Policy Compliance | Ensuring that health plans and services comply with applicable laws, regulations, and industry standards.       |

*   We're calling it the...

## ClinDaaS™ AI Platform

Clinical Decisions as a Service for Health Plans
!
*   As a result, the list of workflows that previously relied on manual human labour can be largely abstracted away by the same platform that was introduced to address the pain point of Prior Authorization and Medical Necessity Reviews.

## Phase 3: From a Reactive Clinical Admin Platform to Proactive AI-Led Care

Draft - still needs some work...

*   Health Plans are increasingly investing into Care Coordination, Navigation and Member Steerage, Case Management, etc. This pressure comes from wanting to improve plan quality (boost stars) and grow lives in an increasingly competitive market.
    *   The bottleneck is in finding expensive clinicians in increasingly short supply.
    *   Thus the ROI only makes sense in reactive situations for the most unwell member population.

However....

*   If we are already powering most of the clinical workflows internally and processing member clinical data to do so, we're able to plug in modalities to engage with members directly on behalf of health plans.
*   Instead of a $120k Case Management nurse managing 100 diabetes members, it's a $10k AI Nurse on the ClinDaaS platform that's identifying high risk members, reaching out to gather clinical data, generating a unique care plan, and following up regularly.

## Misc.

## Page 7: Why build for Payors & Go-to-market

*   Why did we build this for payors instead of providers? – tl;dr\*\*: To move fast without liability or regulation → finding a financial sandbox around clinical decision making.
    *   We have a strong opinion about this based on our personal experience building AI in highly-regulated clinical environments. The main issue, in a nutshell, is regulation and liability.
    *   Anything AI on the provider side that is involved in clinical decision making needs to be regulated as a medical device, and rightly so, due to the implications of deciding on care for a patient. However, this regulatory process slows things down, as AI products are typically only 90% capable at launch and require a large amount of real-world usage to improve further. It's a catch-22 situation. You can't deploy until you are good enough, and you can't get good enough until you deploy. This slowdown hampers product development and exponentially increases costs.
    *   On the payor side, particularly during the medical necessity review process of prior authorization, clinical reasoning is essentially to produce a medical second opinion to determine if the payor agree with the provider's decision.
        *   In terms of clinical reasoning, there is a one-to-one mapping between inputs (clinical data) and outputs (a clinical decision). However, the outcome is financial rather than clinical. As a result, there is limited liability and no FDA regulation or any other regulations from Congress regarding AI in care settings.
        *   Better yet, being 80% on quality is good enough to secure a paid contract, as long as it saves time or is ultimately cheaper than hiring an expensive clinician to do the work instead.
    *   It's also much less competitive and more financially lucrative to sell to plans instead of health systems (how many AI Clinical systems have you seen being marketed to providers? Or in 'death by a 1000 pilots' mode?).
    *   It's also a more interesting problem on the payor side. Prior auth on the provider side very quickly collapses into an Revenue Cycle Management or Interoperability problem, whereas we on the payer side, we can actually focus on clinical reasoning as a capability.

## Go-to-market

Over the last 6 months we dialed in exactly who our ICP is, and how to find them.

## Our GTM goals from Seed to A

*   Get a significant 1 enterprise customer live
*   Using that to build a pipeline of 2-3 other enterprises (we vastly exceeded that with 17 enterprises in pipeline in last 3 months)

## Page 8: Who is our ICP? & What we are not

## Who is our ICP?

<aside> Any US payor organization that hires nurses to manually process prior auth / medical necessity reviews.
</aside>

These can be...

*   Health plans – many still have Utilization Management (UM) programmes in-house
*   Delegated UM entities – health plans outsource UM (including prior auth) to these entities, so these entities typically serve multiple payors. Delegated UM entities come in different shapes and sizes, from 5m to over 150m lives.
*   Independent Review Organizations (IROs) – these are the “special forces” of UM. They get sent the appeals for independent third-party review (from health plans and delegated UM entities), which means they get all the “hard” cases. Some IROs will also offer standard "initial prior auth” services.

Other interesting customer types include....

*   Consulting firms. Some have 1000s of nurses on their payroll who they offer as a service to payer orgs and delegated UM entities that want UM services. E.g., Accenture (via Radiant Services) and Cognizant have 4k-7k nurses each. These firms can be channel partnerships or we sell to them directly to give their nurses superpowers.
*   CAPS (Core Administrative Processing Systems) like TriZetto (owned by Cognizant), Jiva (ZeOmega). These are platforms bought by health plans and delegated entities to host their workflows and systems (think of it like an operating system). Some (e.g., Jiva) will also offer "front door” prior auth AI i.e. basic rules-based and NLP-based software that process the simple prior auths or help prep notes for manual review. CAPS vendors are interested in our product because it can "complete" their value prop.

## What we are not (Prior Auth AI)

*   Prior Auth 'AI' companies are companies like Olive (RIP), Cohere Health, Availity, Edifacs, etc.
*   They are either on the Provider side of the problem (a different value prop – that's more of an RCM/interoperability problem)
*   Or they serve as a "front-door” portal between the payers and provider – typically rules-based systems for the simplest prior auths that don't require clinical input. These systems are brittle and take months to set up (and have to be “retrained” whenever rule sets like MCG are updated).
*   These deal with the 95% of prior auths that don't need humans. However, the harder 5% of cases that need humans are responsible for 80% of today's care costs (Pareto Principle). Those prior auths (e.g., for a complicated knee surgery) each require 10s of expensive human hours in medical necessity reviews.

## Page 9: Our current customer pipeline

*   And that's where we come in - we've built a clinical brain that reasons like a human nurse does, but faster and cheaper.
*   Graphic below shows how we have eclipsed anything else on the market.
!
## What does our current customer pipeline look like?

We currently have 17 enterprise customers in our pipeline ranging from 20-200m lives covered.

*   Active engagements
    1.  [CUSTOMER NAME REDACTED] – delegated UM entity that covers approx ~3m lives and processing ~110k prior auths a year. Very first customer with very strong relationship (many other customers came through CEO's warm introductions and recommendation). Currently running a live product with a small team of nurses using the product daily, and expecting to go 'commercially' live in Q1 2024. 1st year ACV in the range of $300k-$1m.
    2.  [CUSTOMER NAME REDACTED] – an IRO (remember: special forces of UM, most complex cases) that covers approx ~200m lives, serving ~700 payers in the US, and processing ~2.5m prior auths a year. During the PoC, we live-processed their hardest cases through our AI co:nurse and the results impressed their clinicians (CEO: “I've never seen my nurses get so excited about AI”). We are expecting paid contract in Q1 2024 (currently under negotiation). Expected ACV between $1-2m to begin, but upwards of $20m ARR within 2-3y.
    3.  [CUSTOMER NAME REDACTED] – delegated UM entity covering ~60m lives and processing ~8m prior auths a year. Excited to work with us after a successful PoC phase, and planning a paid pilot for Q1 2024. Estimated ACV of $1m to begin, and potentially upwards of $10-15m ARR within 2-3y.
    4.  [CUSTOMER NAME REDACTED] – they own [REDACTED] – (a CAPS system) and employ 1000s of UM nurses, serving all the major payers across the US. Currently planning a small pilot (~20 nurses) to be kickstarted in Q1 2024. Potential ACVs here in the 10s of millions.
    5.  [CUSTOMER NAME REDACTED] – consulting firm with 1000s of nurses on payroll. Currently speaking with global leadership team for all payors (4th conversation, and have met in person) to finalize the nature of a relationship (beyond just a channel partnership with UM arm). Potential ACVs here in the 10s of millions also.
*   Waitlisted engagements
    1.  [CUSTOMER NAME REDACTED] – delegated UM entity covering ~40m lives. Waitlisted to be re-engaged in Q1 2024.

## Page 10: Customer Pipeline (cont.) & GTM Channels

*   2. [CUSTOMER NAME REDACTED] – typically considered a competitor (they do prior auth AI), but their “hard cases” still require manual review, and they're interested in Co:Helm helping them plug this gap. Waitlisted to be re-engaged Q2 2024.
*   3. [CUSTOMER NAME REDACTED] – delegated UM entity covering ~1m lives. Waitlisted to be re-engaged in Q3 2024 as in the meanwhile we also need to figure out integration with their CAPS system ([CUSTOMER NAME REDACTED] we're already talking to them as an “active prospect”).
*   Active Prospects
    Qualified customers with whom we are in early sales cycles and who are showing promise – 2nd or 3rd convo, and/or NDA signed
    1.  [CUSTOMER NAME REDACTED] – successful demo, 3rd conversation with senior clinical team in Jan 2024.
    2.  [CUSTOMER NAME REDACTED] – demo to be scheduled for January 2024.
    3.  [CUSTOMER NAME REDACTED] – owns 4 Blue Cross Blue Shield plans. Demo to be scheduled for January 2024.
    4.  [CUSTOMER NAME REDACTED] – health plan. Successful demo, planning a PoC for Q1 2024.
    5.  [CUSTOMER NAME REDACTED] (BUCA UM house) – one of the largest delegated UM entities. Demo scheduled for January 2024.
    6.  [CUSTOMER NAME REDACTED] – successful demo, conversation with CTO and CMO scheduled for January 2024.
    7.  [CUSTOMER NAME REDACTED] – CAPs system. Successful demo with VP Product. 2nd conversation with CPO and Head of Clinical Services scheduled for January 2024.
    8.  [CUSTOMER NAME REDACTED] (BUCA UM house) – had 2-3 conversations and exploring next steps
    9.  [CUSTOMER NAME REDACTED] – 2 conversations provides UM Nurses + consulting support to a large group of health plans.
*   Three more in January yet to be announced

## What are our GTM channels?

Healthcare is ultimately a small-club, and our market is finite, so success has been mostly through warm introductions and in-person interactions.

*   Warm introductions – our most successful channel
    *   Mostly (a) introductions from existing customers (e.g., we landed [CUSTOMER NAME REDACTED] ultimately through recommendation of [CUSTOMER NAME REDACTED] CEO), (b) from mining networks of well-connected investors, and

## Page 11: GTM Channels (cont.) & Growth Hacks

*   (c) leveraging our existing networks (e.g., we landed [CUSTOMER NAME REDACTED] partly because their CSO/CPO is ex-McKinsey)
*   Conferences & Events - niche is best!
    *   Have avoided the flashy healthcare conferences (e.g., HLTH) and instead identified the niche tradeshows and events (e.g., Becker's Payer Issues Roundtable, HCAA, SIIA) that have a high density of our ICPs. Have had lots of success here (e.g. WebTPA, Telligen, some of the Blues).
    *   Abdel (CEO) has delivered two keynotes on how AI is transforming Health Administration. The first keynote was at HCAA, and the second one was later at SIIA. These keynotes have given us 10x exposure.
*   Hosted buyer Networks - promising
    Competitive in-person events/conferences to which vendors (like us) apply and where hosts put the selected vendors in front of a curated group of buyers who have already demonstrated commitment to contracts. We've successfully been granted spots at 2 highly-competitive hosted buyer conferences:
    *   Marcus Evans – 2 in-person events in March and September 2024 where C-suite execs committing to $10m in contracts will be attending (from payer orgs like Centene, Cigna, Blue Cross, etc.)
    *   HPIR – a hosted buyer conference in Q2 2024 with the following health plans in attendance: Advocate Aurora Health, Allina Health | aetna, Blue Cross Blue Shield AZ, Blue Cross Blue Shield FL, Blue Cross Blue Shield NC, Blue Cross Blue Shield MA, Blue Cross Blue Shield AZ, Blue Cross Blue Shield AR, Blue Cross Blue Shield SC, Point32Health, Premera BC, Priority Health, Sanford Health, Medica, Highmark, HealthPartners, HCSC, Select Health
*   Growth Hacks/Outbound Experiments- just kicking this off!
    Examples include:
    *   Health Payer Exec Podcast - we're interviewing execs from the payer space and build warm networks to be leveraged later (ask for money, you get advice, but ask for advice, you get money). 5 episodes already recorded with leading execs, launching soon.
    *   SEO type content e.g., blog posts, revamped website, etc. You'll see more if this in Q1 2024.
    *   Running AI Bootcamps – this one we shamelessly stole from Palantir. We put together an in-person free Gen AI Bootcamp for Execs on how to leverage GenAI. During it we get to dive deeper into
    *   Mining accreditation networks (in process of URAC and NCQA certification)
    *   Creating a shell Nurse Staffing Agency - ask us why
    *   Open Source - Creating a LLM Clinical data standard (open sourcing part of our code) that could become the new FHIR standard.

## Page 12: Sales & Integration Process, Team and Organization

*   and more...

## What does our sales and integration process look like?

We've whittled down our sales cycle to an efficient 3-step programme that can be executed within 3-4 months (and not 1.5-2y)

1.  Demo – we've learned that showing demos quick and early is best, so we show it at the start of our first call. 100% of customers who see the demo want a follow-up call to show the demo off to the wider team or the "right person” (CMO, VP Product, VP Clinical Ops, etc.)
2.  PoC - we challenge customers to send us their hardest cases and we have our AI Co:Nurse process them live on a call (with our clinicians and engineers talking through and answering Qs). Beyond proving product utility, it proves that the Co:Nurse really does work "out of the box" and requires no "training" (unlike other AI prior auth products out there). This is a key unlock that significantly speeds up sales cycle.
3.  Pilot – we co-design a pilot programme to learn their specific workflows, “nurse habits", and systems ahead of a full-scale integration and “go-live”.

## Team and organization

## The team today

9 FTEs - as of January 2024:

*   CEO, CTO + Engineers x4
*   COO, Growth Lead, Founder Associate
!
Missing two (Chris & Fatima) from this photo! and...yes we're making fixing the gender balance a priority for 2024.

## Culture & Backgrounds:

We've strived to craft a lean, high-performance, low-ego culture where every member is able to contribute valuably across product & GTM where needed.

*   Every single team member is technical/written code before (even if not role required)
*   4 are ex-medical doctors: (CEO, Founding Engineer, Founder Associate, Growth Lead)
*   5 are ex-founders (i.e. VC backed)
*   Experience at leading companies including Google, Meta, McKinsey, BCG

## Page 13: Team (cont.), Advisors, Org Building

*   From institutions such as Cambridge, Imperial, UCL, Entrepreneur First, and over 10 publications (1k + citations) in healthcare AI.

This leads to situations like:

*   Having world class engineers that are ex-medics who are able to troubleshoot clinical AI outputs independently without needing a ‘PM' or ‘Clinical Scientist' type roles.
*   Or our growth lead who does marketing also being an ex-ER doc meaning he is able to hold conversations with senior (by decades) payor execs during conferences.
*   Fun fact: 2 of the team (CEO and COO) became new fathers 3 months ago! A different kind of growth.
*   A sample of advisors that we lean on regularly:
    Some of these folk we're looking to hire v. soon post-A
    *   For AI & Product...
        *   Lead for all product at Google Deepmind
        *   Head of AI Evals at Deepmind
        *   Google Health AI Clinical Lead
        *   Founder of Google Cloud AI and others
    *   On GTM...
        *   Ex-CEO of 10,000 employee Healthcare Services Company selling to payors
        *   Ex-COO of a large health plan
        *   Ex-CMO of 2nd largest Health insurance company
        *   ...and other operators in healthcare

## The org we're building

We're shifting the centre of gravity from UK to US in Q1 2024 due to customer demands – leadership and GTM teams to move to the US, and core engineering base to remain in the UK. New hires henceforth to be primarily US-based.

*   Enterprise Deployment
    *   Forward Deployed model made up of:
        *   Forward Deployed Nurse – our own “super nurse” who can start to provide value immediately: embedded in client side's workflow (like a hired nurse) but is already trained in using our product and is an immediate value-add processing 5-10x cases from Day 1.
        *   Forward Deployed Engineer – technical SWE embedded within customer providing close technical and integration support using our existing platform. Learnings from customers is funnelled back to Platform teams.

## Page 14: Organization (cont.) & Plan Ahead

*   Deployment Strategist – account exec who is technically and clinically fluent, able to represent customer needs "back to base”.
*   Core Engineering
    *   Platform Engineering
        *   Comprising senior product engineers working on “primitives" (e.g., PDF extraction, clinical rules, clinical reasoning, vector embeddings, etc.).
    *   Applied AI
        *   Focusing on longer arc projects and keeping our technology cutting-edge (training in-house models, pipeline speed & time optimizations, etc.)
        *   UK-based (strong density of talent, less competition for them)
*   Others
    *   Clinical Operations (ClinOps)
        *   In-house clinical operations for product quality & input top 1%
    *   Conventional support teams: sales, BD, ops, compliance, HR, etc.

## The plan ahead

## Burn today

Latest monthly burn is ~$150k at (9 ppl incl. contractors)

*   $130k average monthly burn over last 3mo.
*   $60k average monthly burn since seed raise.
*   ~75% on engineering headcount, other spend is SG&A

## The next 18 months (high-level)

## Goals:

*   Based on current pipeline estimations, achieving >$25m of booked ARR within 18 months.
*   Signing new partnerships with 5 of the top 10 US Health Plans and with our platform touching over 200m US lives for our MNR/Prior Auth product line
*   Expanded product line beyond Medical Necessity Review and onto Case and Care Management workflows (i.e. proving the wedge from point solution to platform works well)
*   Producing leading AI Research in the application of LLMs for Clinical Reasoning.

## The plan to getting there:

*   H1 (Q1 & Q2) Goals
    *   Complete shifting centre of gravity to US (set up product and GTM teams on the ground in NYC)

## Page 15: Plan Ahead (cont.), Capital, The Opportunity

*   Product fully integrated and live commercially with 2+ customers (e.g., MedWatch, MRIoA, WNS)
*   Booked revenue from an additional 4-6 customers (incl. above)
*   $1-2m ARR booked by end of H1
*   H2 Goals
    *   Product fully integrated and live with 4-6 customers
    *   Booked revenue from 6-8 customers (including a Blues plan)
    *   AI Research team to begin custom model development
    *   $10m ARR booked by end of H2
*   Hiring: so what does Co:Helm look like at H1, H2 and at 18 months from now?
    [LINK]
!
Excludes operational expenses (add 20-30%). Happy to talk through these numbers.

## Capital considerations

Our current burn and estimated revenue for 2024 and 2025 mean that we do not necessarily need a capital raise, as team today can support 2 of our enterprise clients (estimated combined ARR of $8m in year 1 of going live).

However, this would mean keeping the others on a waitlist.

There is a huge opportunity staring us in the face to instead accelerate growth to capture the enterprise demand in our pipeline allowing us to cement our position as the AI platform partner for the Health Insurance Industry's workflows ($3.1 Trillion) within the next 18 months

## The opportunity is ours to lose

The opportunity in being the go-to GenAI partner to the largest health plans in the US is currently ours to lose. Why?

1.  The Best AI - our co:pilot approach allows for Reinforcement Learning with ‘Nurse' Feedback (RLNF)

## Page 16: The Opportunity (cont.)

*   We're closing the nation's leading IRO with 200m lives, virtually every health plan (700) sends them the hardest clinical cases to adjudicate.
*   The key ingredient is effortless clinical feedback baked into the product. We're getting the most experienced nurses in the US inputting feedback on our clinical decisions.
*   Mix in the sheer volume, [CUSTOMER NAME REDACTED] does 2 million MNR decisions a year alone, [CUSTOMER NAME REDACTED] does 7 million. This is an extremely valuable pre-labelled datasets that ensures the models we train and deploy for health plans are bar-none.
2.  The Best Distribution
    *   Pre-integrating into CAPS
        *   Partnerships with [CUSTOMER NAME REDACTED] (they own [CUSTOMER NAME REDACTED], the market leading CAP) -
        *   Pre-integrating with [CUSTOMER NAME REDACTED] allows us to alleviates integration friction for our customers and leverage the established relationships of [CUSTOMER NAME REDACTED] It also allows us to embed more deeply into workflows and expand beyond MNR to
    *   Sales Partnerships that ensure we can saturate the entire market v. fast post first few clients
        *   [CUSTOMER NAME REDACTED] – C-suite relationships with every major health plan, will ease our sales burden.
        *   Others firms in the works
3.  No serious competition in the payor space (yet....)
    *   There are a few established Prior Auth ‘AI' companies, but we're not in the market of Prior Auth, we're in the market of abstracting away clinical reasoning into an API for enterprises.
    *   The bet here is a product bet not a market one. Can LLM-based architecture clinically reason? We now believe they can.