---
source_pdf: "https://drive.google.com/file/d/1T8FQk_aqPxS81lddJXMq__zy-_MKlnAF5jzQ3PKK2QA/view"
drive_folder: "Portfolio/HealthMC"
type: portfolio
company: HealthMC
ingested: 2025-12-23
original_filename: "HealthMC Pitch Deck  11-7-24.gdoc"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1T8FQk_aqPxS81lddJXMq__zy-_MKlnAF5jzQ3PKK2QA/view)

HealthMC AI, Inc. Structuring Medical Data, Every Chart at Once

Executive Summary

Solution and Market Position

● We are an AI enhanced retrospective medical coding service for payors /  pay-viders supporting risk adjustment and HEDIS submissions. ● Customers spend more than $1B per year on these efforts.  ● We compete with traditional manual coding services (eg. Episource,  Cotiviti) and traditional NLP coding services (eg. Apixio, Talix)  ● We differentiate by being LLM based and having certified medical coders  in the loop. We are better, faster, cheaper and more compliant. And we’re  extensible to more use cases (discussed later).

Traction & Progress

● Four months from launch of GTM:

○ 29 Target Customer / Partner Discussions Completed

○ 12 Active Threads

○ 3 Active Pilots - all which represent both potential revenue and channel partnerships ○ 5 Additional Customers Late in the Funnel

● Progress

○ Beginning commercial exploration with first pilot customer

○ Preliminary evidence that our platform approach is more accurate than an expert medical  coder

Team

Team

Judah Rabinowitz

CEO

Career Highlights

● 20+ Years Healthcare  ● Credentialed Actuary ● Prior roles as Chief

Actuary and Chief Data  Officer

Brian Johnson

CTO

Career Highlights

● 15+ Years Engineer ● 10 years HealthCare ● Built 2 prior HIPAA

Compliant Platforms ● Prior roles as CTO

Ashley Sullivan

Head of Coding Operations

Career Highlights

● Certified Medical Coder  & Medical Compliance  Officer

● 10 Years of Medical  Coding Experience

Key Advisors

Ian Blumenfeld, Key Science Advisor

● 15 Years Experience ML Data Scientist in Healthcare ● Multiple Awards & Patents

● Developed core IP with Judah

Joseph Jasser, Commercial

● Deep Executive Experience on Payor and Provider side ● Deep connections to several national payors

Laini Talcott, Commercial

● Senior roles at data and nlp companies

● Experience in post sales and customer success in this space

Dave Meyer, Commercial

● 20+ years in risk adjustment and quality operations ● Subject matter expert on risk adjustment and coding submission

Background

Health plans spend $100MM’s on manual medical  coding with poor results

● Retrospective Medical coding is core to health plan revenue, driving $2.5B of ARR ● But is highly manual, expensive, slow and of poor quality.

● Coding has historically been difficult to automate

○ It requires interpreting unstructured text, context, and detailed requirements ○ Traditional ML handles context poorly, resulting in too many false positives ○ Traditional ML does not generalize, requiring constant updates as rules change

We leverage AI for better, faster, cheaper and more  compliant results.

● Our solutions are built by payor experts, and inject seamlessly into existing  workflows

● Our tech is built on language models, making it input format agnostic  ● Our platform is designed to rapidly adapt to new use cases; we can begin  with new processes with a human in the loop, and transition to automation  as the platform learns

● Our platform natively generates specific documentation, providing  significant audit resilience

Product Sequence

We plan to stage out product development and launch:

● Opening wedge is retrospective risk adjustment

● HEDIS abstraction is a quick adjacency

● Moving to support other risk adjustment activities (eg. suspecting,  concurrent review, etc.)

● Ultimately expanding into all payor use cases built on clinical data (prior  auth, UM, claims, clinical engagement, payments, cohorting, etc…)

Retro Risk  Adjustment

Adding

● 90 Million Charts ● $8 a Chart

● 227 Million Patients ● 1 Chart Per Patient

Bottom Up Estimate $0.7B

HEDIS

Adding Full Cycle  Risk Adjusment

● $8 a Chart

● 50% Discount Factor

● Assuming prospective  and concurrent are 2x

retrospective

● Note that, per literature,  total risk adjustment

drives roughly $100B ARR ● UM, Prior Auth, Claims,

Bottom Up Estimate Top Down Estimate

$1.6B $3.0B $14.0B

Full Scale Top Down Estimate Payments, Engagement,

Administrative  Automation

Cohorting, etc…

● Assuming 3% of 2024  Medicare Advantage

Revenue

Wedge Market Bottoms Up

Retrospective Chart Coding Annual Revenue

● TAM - 90M charts * $8 = $720M

● SAM - MA Charts excl United = 40M Charts * $8 = $320M

● Obtainable Market - 60% of SAM = $192M

HEDIS Abstraction

● TAM - 227M patients * 1 chart per patient * 50% discount factor * $8 = $900M ● SAM - MA Enrollees excl United = 22M * 8 * 50% = $88M

● Obtainable Market - 60% of SAM = $53M

Why Now?

● Customers are facing tremendous market pressures for new solutions ○ Increasing margin pressure from regulatory changes (eg. HCC v24 -> v28) ○ Increasing public exposure on bad actors / practices

○ Increasing and more targeted audit and justice actions

● New AI technologies allow for a new and novel approach ○ LLMs are highly flexible in their ability to handle and interpret data ○ LLMs require less up front investment to deliver positive margin MVP products ○ LLMs can surface reasoning alongside results, generating a strong audit trail

Service Offering

Overview

● Our initial wedge offering is a retrospective coding service ○ Plans and at-risk providers currently have high spend here ($720M ARR) ○ Regulatory pressure and emergence of LLMs enable new offerings ○ Pitching opex reduction rather than asking for new IT spend

○ Humans in the loop allow for immediate deployment

● Our platform generalizes, so we will rapidly expand to other payor use cases ○ We will sell to existing customers leveraging data integrations from coding  ○ New features will create revenue expansion

○ Multiple workflow integrations will create switching costs

Sales Pitch

Your current solution is slow, inaccurate, and  expensive

You have internal conflicts of interest -

Batch processing & bias to upside VS Continuous review & optimize for accuracy

We’ll give you best in class coding near real time at a better price.

We provide continuous data feeds of AI generated results for your clinical programs. We can batch the human review closer to risk adjustment deadlines saving on opex

You have high risk of audits and fines. You’ll use our data feeds to support clinical use cases, making you less of a target. Our detailed documentation and expert coder review will have you pass nail your audits.

Changing vendors is hard We’ll make it easy. We’ll take any data formats, handle the integrations and output in  your preferred format.

Process

Ingestion

Flexible on mechanism  (eg. API, SFTP)

Agnostic on format

(eg. PDF, image, text  blob)

Content is extracted,  cleaned, and prepped  for model input.

AI First Pass

Identifies all condition  categories (3 digit  ICD10 level)

Optimized for high  recall

Outputs provided to  customers to support  low risk clinical use  cases (eg. cohorting)

Human First

Pass

Certified medical coder  reviews suggestions,  selecting appropriate 5  digit ICD codes

Coder can also add any  missing codes

AI Final Pass

AI reviews the union of  all AI and human coder  recommendations,  providing evaluation  scores and rationale

Optimized for high  precision

Human Final

Pass

Certified medical coder  reviews AI final pass  and makes final

determinations

Finalized output

contains codes, textual  sources, AI generated  documentation, and  evidence of human  review.

Examples

Website

Video Demos

Competition

No one on the payor side leverage a core LLM solution in this space

● Traditional Vendors

○ Episource

○ Optum

○ Innovalon

○ Cotiviti

● Legacy NLP Technology

○ Apixio

○ Talix

○ Veradigm

○ Vatica

Product Sequence Rationale

● We selected our wedge products to establish a meaningful beachhead with  minimal friction

○ Service orientation

○ Gain customers through opex reduction rather than increased IT spend

○ Integrate with unstructured data

○ Build into data workflows, avoiding heavy human workflows

● Future products integrate with human workflows based on individual  customer needs

○ Prospective / Concurrent Risk Adjustment

○ Clinical Engagement / Cohorting / Targeting

○ Payment Integrity / Claims Processing / Prior Auth / UM

● In the long run, we’ll enable brand new processes that were impossible or cost  prohibitive without automated inference - eg. real time payments

Early Advantages

● Broad expertise in product

○ Each of our founders is well versed in both the domain and the technology ○ CEO is a former purchaser of these services, and deeply understands the problem  space and areas of value

● Technical skill

○ Experience working with legacy healthcare platforms allows us to own data  extraction and transformation

○ Rapid development of a viable platform alongside differentiated know-how on driving  AI model performance

● Go to Market Advantages

○ Deep network leads to faster penetration to decision makers

○ CEO is highly credible to customers, having owned both actuarial and data science  functions at payors

Durable Advantages

● Our approach unlocks rapid performance improvement and new features ○ Our experts-in-the-loop allow for immediate deployment for future use cases ■ The model initially performs based on broad rules; expert review ensures high  accuracy of output

○ While we are monetizing we are also creating a proprietary core data asset ■ The AI-expert combination rapidly generates an exception dataset, leveraged for  continued model improvements

○ Transfer learning leads to improved out-of-the-gate model performance on new use  cases

● Multi-service offering creates bundled services and switching costs ○ Bundled services will make it harder for single feature products to compete ○ Our services integrate into human workflows making them harder to replace

Progress

Customer Funnel

● Current Funnel

○ 29 Target Customer / Partner Conversations Completed

○ 12 Active Threads

○ 3 Active Pilots

○ 5 Additional Late Stage Discussions

● Active Pilots represent both immediate revenue and channel partnerships ● Notably, rejections are mostly timing based

○ Customer side - recent contracts, vendor freezes

○ Maturity - want more evidence from prior customers

Quantized Funnel

Medium ($250K)

Large ($1M)

XL

($10M)

N/A* Total ACV Total

Meeting  Complete

Active

Thread

Late

Stage

Active

Pilot

6 8 10 2 3 29 $1.114M $32.30M 3 5 2 1 1 13 $1.030M $13.40M 1 2 0 1 1 5 $2.110M $10.55M 0 2 1 0 0 3 $0.500M $1.50M

*Channel partnerships with no direct revenue

Key Product Learnings from Active Pilots

● Modeling creates unique advantages on data ingestion

○ Customers have poorly organized clinical charts -> developed metadata extraction processes to  allow for more focused coding efforts

○ Customer charts are often combined into enormous documents -> developed algorithmic  document splitting to allow for model ingestion

● AI Co-Piloted Humans outperform Expert Coders

○ When we introduced the second pass AI review with generated rationale, our expert coder  changed ~5% of her prior conclusions

○ Therefore, our product as it stands today is creating a new standard of excellence; and it will only  improve from here

● Although not yet tuned for 5 digit ICD10 codes, our AI first pass already operates  at 90% recall. Human alone was only 86%.

Finance

Initial Business Model

● Initially, we expect to charge $6 per chart audited ○ We expect initial inference costs to be < $0.60 per chart ○ We anticipate human review costs of

■ 30% of all charts reviewed

■ ~$3 per chart reviewed

■ ~$0.90 total human cost per chart

○ Total cost per chart $1.50

○ 75% Gross Margin at full coder utilization

● Fixed monthly costs of ~$100K

● ~$130K of MRR for breakeven

Pro Forma

● Pro forma used as the basis of the current round of financing with Rock Health ● We’re currently tracking ahead of this, and are reevaluating

● Models available upon request

Fundraise

Investment Core Beliefs

1. The market is shifting to automation

○ Medical coding will ultimately be automated

○ LLMs offer a pathway to that automation

2. HealthMC can win the market

○ Incumbents will be slow to adapt to new technologies that devalue their current platforms ○ HealthMC’s network and domain knowledge coupled with technical skillsets will provide comparative  advantage over other startups

○ Motion differences and channel conflict will limit crossover competition between plan operation solutions  and RCM providers

○ Like other nichy products in healthplan administration, this will be winner takes most

3. HealthMC can maintain durable advantages

○ Our platform will allow for rapidly expanding services enabling bundled services

○ Workflow integrations will create switching costs

Current Status

● Outstanding SAFEs

○ $750K raised from Rock Health at a 20% discount with a $10M cap up to $2.5M ● Cash Position - $725K

● Runway ~ 7 months

Use of funds

Our current SAFE is sized for up to $2.5M for:

● Derisking Viability

○ Achieve Product Market Fit

○ 5 Customer Contracts

● Derisking execution

○ 3 anchor recurring customers

○ $130K+ MRR

● Achieving Key Product Milestones

○ Support for Coding and HEDIS

○ 98% Precision / 98% Recall for All Conditions and Selected HEDIS Measures

○ Golden Dataset creation

We’re tracking well ahead of our goals, and are in the process of updating goals and evaluating new capital  needs