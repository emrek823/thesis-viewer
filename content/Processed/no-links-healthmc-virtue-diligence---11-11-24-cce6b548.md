---
source_pdf: "https://drive.google.com/file/d/15qN86qCnAXuT87BkD50Us70NyYdjb_86zcZ-dfFZWFo/view"
drive_folder: "Portfolio/HealthMC"
type: portfolio
company: HealthMC
ingested: 2025-12-23
original_filename: "NO LINKS HealthMC <> Virtue Diligence - 11 11 24.gdoc"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/15qN86qCnAXuT87BkD50Us70NyYdjb_86zcZ-dfFZWFo/view)

High-level Overview

Evolution through 3 Phases. Can you walk through in more detail the 3 concurrent phases you described (1. Retrospective coding / HEDIS abstraction 2. Additional land/expand use cases 3. New use cases enabled with real-time inference) to better understand how you think about the business evolution from your initial wedge?

Let me preface by acknowledging that we have a robust two phase plan, with a speculative third phase.  Achieving success on the two phase plan, (or even just on the first phase,) would yield venture scale outcomes. Phase 3 offers the possibility of a magnitude beyond that.

Phase 1: Retrospective Coding & HEDIS Abstraction – Our initial offering leverages AI with experts-in-the-loop, providing immediate ROI without disrupting existing workflows. By focusing on retrospective coding and HEDIS abstraction, we address significant operational costs with minimal barriers to entry, as these products align well across multiple customers. This phase secures our foothold, enabling us to deliver value quickly while building credibility and trust within the customer base.

Phase 2: Expanded Use Cases for Deeper Integration – After proving value in Phase 1, we aim to expand into tailored use cases that require more customized implementations; the immediate expansions could be prior authorization for one client and patient engagement for another. While these use cases come with higher upfront development costs and variations in rules and workflows, they also create significant switching costs, increasing customer retention.

We plan on beginning work on Phase 2 offerings 6-12 months after the launch of Phase 1 contracts, but remain open to accelerating this based on customer demand and readiness.

Phase 3: New Solutions via Real-Time Inference – This final phase is an extension of Phase 2, where we transition from improving existing workflows to co-designing entirely new solutions alongside strategic customers. Phase 3 requires a deeper partnership, leveraging insights gathered over time to create innovative, real-time solutions that address holistic customer needs. This phase is a long-term objective and positions us to unlock new0 revenue streams as we gain more in-depth understanding of our clients’ evolving challenges.

Long-term Success. What does success look like here in 5-10 years? What does it mean to, in your words, “fundamentally shift the relationship between providers and payers”?

Building off of the previous answer, it’s important to look at Phases 1 & 2 in distinction of Phase 3.

Long term success could be simply defined as becoming the leader in retrospective risk adjustment and HEDIS abstraction, while have meaningful footholds in adjacent areas.  This is achievable in 5-10 years and would represent enormous long-term success.

However, we feel that the platform we are building would have the potential to make an even more fundamental change to the ecosystem.  Beyond streamlining back-end processes, our tools can change the way that payors and providers interact with one another, yielding systematic changes for the better.

Today, provider-payer relationships are fragmented by numerous manual translation steps. Consider the journey from patient encounter to payment, involving multiple handoffs—from charting to coding to claims submissions, followed by layers of review, denial, appeals, and additional review. This is a slow, labor-intensive, and costly process, often exacerbated by distrust between providers and payers and by regulatory complexities. These steps are, in many ways, vestiges of outdated cost-control measures that could be streamlined with modern AI-driven systems.

Our vision is a system where raw encounter documentation can seamlessly propagate across the provider-payer interface. This would eliminate the need for redundant information requests and allow AI to analyze and structure data in near real-time, sparing providers the months of waiting and high operational costs currently spent on revenue cycle management. Achieving this requires renegotiating traditional business relationships to fairly allocate gains from these efficiencies—but the payoff is significant: reduced operating expenses for both providers and payers, along with meaningful quality improvements in care delivery.

In HealthMC’s best-case scenario, we become the platform that underpins provider-payer relationships, enabling near-instantaneous structuring, review, and processing of claims alongside clinical documentation. This would support real-time claims review, faster payments, and an unprecedented level of efficiency and collaboration between providers and payers.

We acknowledge the Phase 3 is speculative; but in the alternative case where it is not achievable, we are still a best-in-class coding, HEDIS abstraction, and clinical data structuring company with a $10B+ ARR market to attack.

Product

Current Product State. Help us understand the state of product built to-date and current capabilities. For example, how many total charts have been processed? How did you prove that your AI first pass operates at 90% recall and the 2nd pass caused the coder to change ~5% of her recommendations?

Our current platform handles the following steps in sequence:

Data ingestion

OCR and content extraction

Metadata capture

First pass medical coding

UI for internal coders to review and update codes and metadata

Generating summarized reports

In addition, we have non-integrated processes for second pass review (both AI and human), that we’ll be incorporating directly into the platform in upcoming weeks.

To date, we have coded more than 3000 charts using AI with Coders in the Loop.

The metrics quoted are based on our initial pilot representing ~2000 charts of which ~300 represented F2F 2023 visits.  For those visits - we first ran our standard process:

AI coded each chart, identifying disease states and suggesting one or more possible 5 digit ICD10 codes per disease

Ashley reviewed each chart, and identified the correct code, either selected from the AI suggestions or manually entering them

Then, we ran a second pass AI process reviewing all codes, whether generated by the AI first pass or by Ashley.  The second pass provides a confidence level in the code and rationale.  This information was provided to Ashley to review - upon which she went back and edited choices in the platform where she felt appropriate.

The final codes after second pass in the platform represent what we are deeming the correct codes.

90% of those codes were present in the AI first pass

86% of those codes were present in Ashley’s first pass (co-piloted by the AI)

5% of codes were changed between Ashley’s first and second passes

We are also working on automated metadata extraction, document splitting, and other operationally useful features but these have not been fully incorporated into the platform yet.

LLM Approach. How specifically are you leveraging LLMs today? You touched on some high-level pieces (OCR, document splitting, data ingestion) but it would be great to dive deeper. For example, is “sitting on top of payer rules” a sophisticated RAG pipeline? What differs in your process as you optimize for recall (1st pass) vs. precision (2nd pass)? How do you build RLHF capabilities to take advantage of the human in the loop?

LLMs are used in the following capacities currently:

Pre-processing of charts

Metadata extraction

Document splitting

First pass coding

Second pass review

Presently, we are not incorporating RAG; rather, accuracy gains are currently based on prompt engineering and prompt chaining.  Data insights are currently fed as examples into the prompts. We optimize for recall vs. precision or vice versa through prompt and prompt chain construction.

RHLF at this stage involves more internal review and adjusting of prompts (by Brian, Ian, and Judah.)  As we analyze differences between AI codes and final codes, we generate a list of differences using those both to modify prompts, and capture a list of exceptions we deem the “golden dataset”.  Eventually, that golden dataset will be used to create fine tuned models - and when we’ve worked out the kinks in that process, the reinforcement learning can be fully automated. For now these areas of exception are our mechanism for iterating on the prompts to improve performance.

We expect that RAG will be more necessary when we expand to products where rules vary by payor to payor.  In coding, the predominant rulesets and practices exist within the training datasets of the SOTA models; fine tuning helps to ensure this data is produced accurately.  In other processes that are more bespoke to the individual customer, the underlying rulesets will not be present in the training data, and RAG will be necessary to produce accurate results.

Ultimately, we know the problem space, and our experts in the loop tell us the correct answer.  The model techniques will be chosen based on the most efficient path of traversal based on the use case.

Integrations. What are the key data integrations you will use to expand from coding? What will it require practically to expand from “data workflows” to “heavy human workflows”?

We anticipate two primary types of integrations to support our expansion:

Upstream Data Integrations: These connect us to sources of unstructured data, primarily through EMRs or interoperability providers. We’ll prioritize these based on customer demand as we scale.

Human Workflow Integrations: Expanding into more complex human workflows will require a tailored approach. This could range from opening a file drop to exposing an API for integration into existing workflows to developing custom UI and workflow tools from scratch. The file drop and API routes are straightforward extensions of our current reporting capabilities, while the latter approach will require dedicated project timelines (multi-week to multi-month) to ensure alignment with each customer’s unique needs. Similar to our approach with coding, we can start with minimum viable solutions and scale up based on contractual commitments.

“Golden Dataset Creation”. What does “Golden Dataset Creation” as mentioned in the deck mean to you? What data do you need to collect (types, volume, etc) to drive durable, long-term advantages?

For us, “Golden Dataset Creation” involves systematically collecting examples where the native model produces suboptimal results, a process that’s crucial for refining LLM performance. Unlike traditional ML, where large, labeled datasets are key, here the focus is on identifying and cataloging nuanced failure cases.

The data we collect includes:

De-identified source data examples (or synthetic copies)

Prompts used

AI responses

Human responses and corrections

Model-generated reasoning that identifies and explains errors

This dataset is built automatically alongside our coding and other efforts. Initially, we leverage it for prompt refinement, and over time, it becomes the foundation for fine-tuning models to address recurring issues. This means that it is both immediately useful to drive product differentiation and becomes strategically valuable as it grows while we scale. With this targeted dataset, we can create a durable competitive advantage by ensuring our models perform reliably on complex, domain-specific tasks, ultimately increasing accuracy and efficiency in real-world applications.

Note that this is not our main durable long-term advantage.  We think that comes from bundled services and switching costs once we serve multiple use cases within a customer.

Future product roadmap. What does the product roadmap look like over the next 12-18 months? How do you prioritize product development as you explore the many potential paths to expand across the payer back-end (prospective/concurrent coding, UM, PA, payment integrity, etc)?

The product roadmap for the next 12-24 months prioritizes core execution of coding and abstraction. Please take a look at the following for more detail:

Commercial

ROI for Pilots. What does success look like for your initial pilots (OpEx reduction, additional HCCs, accuracy, etc)?

Success in our initial pilots centers on key external metrics for customers: RAF lift, cost savings, and turnaround time. During the pilot phase, customers will focus on average RAF lift, validated by their internal accuracy reviews.

For specific pilot requirements:

Payor Pilot: The goal is to deliver equivalent or greater RAF lift at a lower cost.

IPA Pilot: Success hinges on achieving a reliable positive ROI.

For both, OpEx reduction is inherently tied to our service pricing.  In other words, once we hit the pilot goal, we simply need to offer cheaper pricing than their current solution to win the business.

Internally, our focus extends to optimizing recall, precision, and inference costs. These metrics both translate into better performance from customers and drive internal cost efficiencies, increase our operating margins:

High Recall: Increases RAF lift by capturing relevant HCCs, benefiting customers.  It also increases our operating margins by reducing the number of charts that require human reviews.  One example of this is eliminating human reviews where neither chart nor claim has ICDs mapping to HCCs. (If none exist in the claim, there can be no associated HCC deletions; if we’re confident none exist in the chart, there will be associated HCC additions.)

Targeted Human Effort: High recall also enables human coders to focus solely on AI-identified results, reducing the need for exhaustive chart reviews.

High Precision: Reduces the volume of human overreads, laying the groundwork for external-facing software products and, ultimately, full automation.

Lower Inference Costs: Increases margin and / or creates space to test out additional use-case.

In summary, success in our pilots is measured both by our ability to deliver customer ROI through cost-effective RAF lift and by internal gains in efficiency that help scale and enhance our long-term offering.

Breaking Down Funnel/Pipeline. Can you provide any additional detail on the pipeline you are using to drive output on the “Quantized Funnel” slide? You touched on Credo, Vim, Clover, Eldercare NJHS, and Elevance in our call Friday.

Lessons Learned from Initial Pipeline Conversations. What do you think is driving early success in building the pipeline and interest in initial conversations? Where can you improve? What have you learned about who your ideal ICP is?

Key Drivers of Early Success:

Clear Articulation of Internal Problem Areas: We’ve successfully identified and communicated core pain points that resonate with prospects.

Targeted Solution Fit: Our service-oriented approach emphasizes opex reduction over traditional IT spend, positioning us as a cost-saving partner.

Data Ownership: Handling data ingestion on our end minimizes dependency on customer IT teams, simplifying adoption.

Founder Network and Credibility: Our team’s network and industry credibility continue to build trust and open doors.

Opportunities for Improvement:

Enhanced Customer-Facing Materials: We need more robust materials to support customer understanding and engagement.  We continually develop these, but have a lot more work to do here.

Demonstrated Results: Early pilot outcomes will be critical in attracting future customers by providing proof of our impact. Completing the first case study and getting the first referenceable customers will be a significant unlock.

Broader Access to Regional Plans: Establishing stronger connections with regional plans will help expand our market reach.  We’re engaging incentive based advisors and channel partnerships to tackle this.

Ideal Customer Profile (ICP):

Short-Term: Vendors, particularly those serving IPAs, offer accessible initial sales opportunities. Additionally, payors with MA plans that already have data access represent strong early targets.

Long-Term: Large MA plans will be key for scaling and establishing a durable market presence.

GTM Strategy. What are the unique GTM strategies or sales pitches that you can leverage to sign your next 5 clients? For example, you mentioned “we can batch the human review closer to risk adjustment deadlines saving on opex” as an example of nuance you bring from your experience in the payer space that can expedite commercial discussions.

Our GTM strategy for signing the next 5 clients is twofold: leveraging our existing pipeline and expanding through channel partnerships and advisor networks to accelerate short-term growth.

Key Sales Pitch Elements:

We Handle the Heavy Lifting: We integrate seamlessly, meeting your data where it is and managing all data transformation. We also deliver data back in any format you require, minimizing IT burden on your end.

Better Accuracy: Our AI-enhanced, expert-in-the-loop model provides more accurate results than either traditional human-only workflows or legacy NLP systems.

Faster Turnaround : By delivering immediate LLM output, we enable instant access to clinical data, eliminating the delays associated with batch coding.

Cost Savings: We offer a 20% reduction on current expenses, providing a clear path to opex savings.

Enhanced Compliance:

Reduced Risk: By enabling you to utilize clinical data for clinical use cases (IE beyond only risk adjustment), we make you less of a regulatory target.

Audit Resilience: Our AI-generated documentation, combined with certified human coder timestamps, provides a robust audit trail for CMS submissions.

We believe our next 5 customers are already in our pipeline, after which we will be focusing on channel partners and advisor relationships for warm entry into the next 10.

Land and Expand. What is required to execute on your expansion strategy with initial customers? How does the “land” look different as you work with larger customers (e.g., do you need to sell more than retrospective risk adjustment services to land United/Aetna/etc)?

Success in initial customers requires that we prioritize the customer experience above all else.  This means doing things in the near term that we wouldn’t necessarily want to scale.  Examples include:

Human touch

We are personally providing analytical support to help their teams understand and quantify results

Offering free strategic advice to their decision makers around risk adjustment, beyond our core offering

Ensuring results

We’ll review a higher percentage of AI results in areas where we may not need to in the future - eg. where the claim and chart had no mappable codes

Contingency

If the pilot (or early contract) fails - not charging any fees / full refunds

We’re still learning what it takes to land the larger clients.  While this is likely to vary significantly by customer, I don’t expect we need to offer additional services to large payors to land them.  (In fact, I expect that, due to federation of responsibilities and low risk tolerance in large payors, a single point solution will be an easier entry point than a complex system.)  Rather, it is likely that they are more set up to test-pilot a small region or county or bring us on as second / third pass.  Nevertheless, we’ll have exploratory discussions with these customers and can flex into new areas as needed.

Financing

Milestones. You laid out more tactical milestones in the deck but what are the 1-2 things you have to get right over the next 12-18 months?

The two key areas of focus are customer experience and AI performance.

Customer Experience - This is critical to building trust, driving renewals, and generating referrals, and we are committed to delivering an exceptional experience for our early customers.

AI Performance - This is what drives differentiation and positions us to be the service provider of the future.

Beyond that, we want to test out multiple GTM channels and approaches, creating a healthy balance within our sales pipeline.

Hiring. Who are the key hires you want to bring on in the next 12-18 months? How do you think about building out and hiring internal medical coding expertise (1099, US vs. ex-US, etc)?

Hiring is going to be very tactical - a function of capital and traction.  We intend to operate as leanly as possible.  The general categories of hiring are:

Technical resources - Eng and ML DS

We have the core capabilities in house - but will look for capital efficient ways to increase velocity

In discussions with senior AI researcher around cash light consulting arrangement to focus on prompt gen

Leveraging our network to bring on relatively inexpensive engineers with solid track records (eg. from inexpensive parts of the country)

Medical Coders

For the next 12-18 months, we’re going to focus on US coders only.

We’re leveraging a 1099 first strategy

Part time coders at $32 / hour

We’re granting initial coders minimum hours - if they are not fully utilized on customer data, we’re giving them synthetic data to help train our models

We brought our first 1099 coder on, and will shortly bring on a second

As volume grows, we’ll convert the best coders to FTEs

Growth

This will be founder led for the foreseeable future

I am augmenting with equity incentive based advisors