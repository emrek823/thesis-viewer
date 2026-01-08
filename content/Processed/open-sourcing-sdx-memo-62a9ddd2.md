---
source_pdf: "https://drive.google.com/file/d/1_ZI887RWfnm3f9skcF7qniiP-B4QtQ7s2fFt2CelNZU/view"
drive_folder: "Portfolio/SmarterDx"
type: portfolio
company: SmarterDx
ingested: 2025-12-23
original_filename: "Open-sourcing SDX Memo.gdoc"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1_ZI887RWfnm3f9skcF7qniiP-B4QtQ7s2fFt2CelNZU/view)

### Executive Summary

Healthcare has traditionally lagged other industries in its use of AI. Although there has been limited adoption in clinical settings, the desire for technology to improve efficiency, accuracy, and consistency for back-end administrative tasks in the $110B revenue-cycle management (RCM) market has grown rapidly in recent years. Clinical documentation integrity (CDI) is a vital step in the middle portion of the revenue cycle directly correlated with a hospital’s top-line revenue that requires clinical intelligence to tie together coding and clinical language. Most CDI organizations today utilize multiple technology tools to improve this process, but these solutions do not have the necessary functionality or performance to help CDI teams adapt to the rapidly changing world of RCM.

SmarterDx is developing algorithms and a software platform for retrospective review of clinical documentation to replace or augment current technology solutions for the pre-bill review process. The clinical and technical expertise of the co-founders - Michael, Josh, and Nathan - have uniquely informed platform and algorithm development over the past 2 years, leading to vastly improved sensitivity and specificity in identifying codes and revenue opportunities. SmarterDx has not only developed a great product, but already signed 2 contracts with seven-figure revenue potential for 2022. SmarterDx has the potential to build a $1B+ company with its current RCM and CDI-focused tool, but is also in a unique position to leverage its access to clinical and financial data to become the largest source of curated healthcare data.

Virtue will participate in a $5.7M priced round with a $600K investment at a $20.0M post-money.

### Founding Team

Michael Gao (CEO) - Prior to starting SmarterDx, Michael was an Assistant Professor of Medicine at NYP Weill Cornell and Medical Director for Transformation, where he oversaw emerging technologies including A.I. across the NewYork-Presbyterian Healthcare System. He was also a practicing hospitalist at the time at Weill Cornell. Michael completed his B.S. in Neuroscience / Molecular Genetics at UCLA, his M.D. at the University of Michigan, and his Internal Medicine internship and residency at NewYork-Presbyterian / Weill Cornell, where he was awarded the Silverman Fellowship for Healthcare Innovation.

Joshua Geleris - Josh and Michael first met when Josh was completing his residency at NYP from 2014 to 2017. Josh completed his MD at the Technion - Israel Institute of Technology Medical school and has published 10+ papers on topics ranging from fractional flow reserve in revascularization to the impact of discharge care programs on readmissions. Prior to medical school, Josh founded Edge Targeting, a political consulting company to develop and distribute advanced campaign software to political campaigns and advocacy organizations.

### Market: Revenue Cycle Management (RCM) and Clinical Documentation Integrity (CDI)

The >$4T in healthcare spend in the US is driven by healthcare services, with [hospital spending (31%) and physicians and clinics (20%)](https://www.healthsystemtracker.org/chart-collection/u-s-spending-healthcare-changed-time/#:~:text=Hospital spending represented close to,total health spending in 2020.) comprising the majority of spending. Revenue cycle management (RCM) encapsulates the entire process from insurance eligibility and verification to claims submission and reporting to help payers and providers manage this spend.

External RCM vendors and internal RCM spend from providers makes up about a $110B market today. ~30% of this spend is external, while the other ~70% is still managed by in-house RCM teams. This external spend is only expected to increase as the pressure to run the revenue cycle more efficiently grows over time. Declining reimbursement and inflationary labor pressures, increasing complexity of coding with the shift to ICD-10, and lack of modern technology infrastructure create massive opportunities for novel entrants.

Typically, solutions are broken down by the site of care (e.g., inpatient, ambulatory, post-acute care) and where they sit in the revenue-cycle (e.g., front-end, mid-cycle, back-end). RCM solutions are most advanced in the inpatient setting, followed by outpatient and post-acute care. The different phases of the revenue cycle are broken out below:

Front-end: Determine a patient’s insurance carrier, particular plan, and what is necessary for prior authorization

Mid-cycle: Once patient is receiving care, accurately document the clinical context and translate to coding language. SmarterDx is focused today on retrospective clinical documentation improvement for the pre-bill review process.

Back-end: Clean up claims, send bill to payers, and manage reporting, denials, and other communications.

SmarterDx today is focused specifically on retrospective clinical documentation improvement (CDI) in the inpatient setting, which is part of the mid-cycle portion of the RCM process. The goals of a CDI program are to review the medical record for incomplete, conflicting, missing, or ambiguous documentation. This process ensures the documentation reflects an accurate clinical picture that will enable coding to capture diagnoses and procedures appropriately. Today, health systems hire teams of specialized and certified medical coders that are most typically nurses. Smaller hospitals (e.g., White Plains in NY State) typically have 5-10 individuals on staff, but larger hospitals (e.g. Sutter Health, Stanford, etc) will have 25-30 individuals exclusively focused on CDI. Many consulting firms, both onshore and offshore, provide outsourced review of medical records. Typically, 1 CDI specialist will review anywhere from 6-16 new cases or re-reviews per day.

The CDI process can be broken down into a few key steps described below:

Admissions: Patient is admitted to the hospital with a clinical complaint for which the admitting provider identifies the associated medical condition through documentation. Any associated co-morbid conditions are also documented. The clinical picture and treatment may change multiple times throughout the inpatient encounter, requiring documentation of additional medical diagnoses.

CDI Review and Query: During CDI review and query, every case would ideally be reviewed daily by clinical documentation integrity specialists to identify potential documentation integrity concerns. Due to the high volume of cases and staffing shortages, however, CDI specialists attempt to prioritize a select number of cases to review and potentially query each day. Based on their clinical knowledge and expertise, they initiate queries where the clinical evidence and diagnostic documentation do not align.

Provider Response: Once a CDI specialist initiates a query, the provider who created the documentation must be alerted to review the information and compliantly enter appropriate documentation into the medical record. Documentation understandably takes a backseat to the actual care of patients for provider

Final Coding: Based upon review of the documentation by the provider, the coder identifies the most appropriate codes that reflect the conditions the providers documented as medical diagnoses and submits to payer.

As mentioned above, the overall RCM market is large and growing, but CDI is a specific portion of the mid-cycle RCM process. The overall annual spend for CDI within an example hospital is shown below. This model assumes 24 CDI specialists, $3M in spend on 3M’s 360 CDI platform (described in competition section), $200K on PWC’s SMART platform (quality and compliance review), and $3.2M on external CDI vendors that provide support to internal CDI specialists. From a bottoms-up perspective, this equates to market size of $4B-$5B, which is expected to grow faster than overall RCM market CAGR of 12% due to increased coding complexity (discussed in “Why now?” section).

Today, CDI specialists use a number of technologies that exist today to help increase coding efficiency and quality. >90% of inpatient hospitals have technology solutions for CDI today, while technology adoption is ~30% for outpatient clinics. In speaking with CDI specialists, they are typically working with 3 programs on 3 separate screens: an EMR, an Encoder, and some type of Computer Assisted Coding (CAC) platform.

EMR: CDI specialists analyze charts and also write query reviews directly in the EMR that become a part of the clinical note

Encoder (e.g., Optum): Softwares that assist in assigning ICD10 and CPT codes. They provides a list of code options upon input of procedure or diagnosis test

Computer Assisted Coding (CAC): Technology that typically leverages NLP to review the chart text and suggest diagnosis codes to the medical coder for review and management (see more in competition).

Despite these technology tools, CDI is still a massive problem for providers today. 84% of healthcare leaders believe the root cause of lost or decreased revenue is inaccurate clinical documentation and coding. The scope of revenue impact is significant, even with a smaller number of high-value codes. For example, White Plains Hospital in New York State, has a top-line revenue of $2.2B, 300 beds, and 17.5K discharges per year. In the example below depicting a patient admitted for a bowel surgery, the differences for in heart failure DRGs represents almost a $30K difference. An impact of this scale on 1% of total discharges for White Plains every year (~175) represents a potential revenue opportunity of >$5M for this single hospital.

### Why now?

RCM processes and translating clinical insights into coding language has always been a difficult undertaking in the US healthcare system in both a FFS and VBC world. Key trends over the last 2-3 years that will only become more acute over time are driving interest around a novel CDI solution.

Lack of supply of CDI specialists: The national supply of CDI specialists is ~5,000 but the admissions/CDI staffing benchmark is about 1,200-1,500 admissions per CDI. With ~35M admissions nationwide, this would equate to a demand of ~23,000 CDI specialists (1/3 of actual supply).

Physician burnout: Physicians continue to face administrative burn out and are often indifferent to coding and documentation value. CDI specialists are often wasting time on low priority chart reviews and fear physician backlash.

Pressure on operating margins: The annual operating margin for an average hospital in the US is around 0.5%. For an average 250-bed hospital system, the estimated annual mid-cycle revenue loss if $5M-$10M. If you consider a hospital with annual top-line revenue of $2B ($10M operating margin), incremental revenue gains in the $5M-$10M range have a significant impact. In 2019 alone (pre-COVID), Medicare and Medicaid underpayments reached $75.8B.

Technology advances: SmarterDx is bringing modern data science and NLP techniques to the healthcare industry, while other players are continuing to incur technical debt from platforms built 5-10 years ago. ****NLP started with very simple models like the Bag-of-Words model, which simply counts the occurrence of each word within a document, or other techniques (Word2Vec, Skip Gram) that leverage neural networks to consider the semantics of text. ****Recently advancements in NLP from a number of groups (e.g., OpenAI, Google, Microsoft) have demonstrated how language model performance scales as a power-law of model size, size of data set, as well as the amount of compute resources.

Increased coding complexity: Encompassing 20 body areas and gathered into around 500 groupings, diagnosis related groups (DRGs) are determined based on ICD-10-CM primary diagnosis codes. The 2013 official transition from ICD-9 (19,000 codes) to ICD-10 (69,000 codes) has only increased complexity for healthcare providers. In addition, documentation around severity level (SOI), quality metrics (ROM, Elixhauser), and risk adjustment (HCC) are increasingly top of mind for providers in a rapidly shifting coding environment.

### Product / technology

SmarterDx’s solution uniquely represents the clinical and technical background of the co-founders. Computer assisted coding (CAC) and NLP for many years used two more basic methods of identifying ICD codes: Dictionary Matching and Pattern Matching. These systems search for direct matches to keywords or clusters of keywords to identify ICD codes. The downside to this matching system is that it may generate many codes not relevant to the patient's care, which creates poor specificity.  Similarly, it may miss issues that did not use the specific keywords, leading to poor sensitivity.

On the other end of the spectrum are more advanced techniques for unsupervised learning, represented below with an illustration of GPT-3. The dataset of 300 billion tokens of text from the entire internet is used to generate training examples for the model. The model is presented with an example and only shown the features and ask it to predict the next word. The model calculates the error in its prediction and updates the model so next time it makes a better prediction. These predictions are learned by the algorithm without any input on why or how these features may be relevant to the ultimate output. This method of unsupervised learning is difficult in healthcare the overall volume of data is much smaller, typically unstructured, and the “rules of the game” are not well-defined compared to other tasks.

SmarterDx is leveraging modern data science techniques and supervised learning algorithms to improve performance compared to current approaches. The components that make SmarterDx’s platform and algorithms unique are the scope of data the company collects, the understanding of clinical context of time and sequence, and use of custom labels defined by M.E.A.T criteria.

To provide its CDI software to health systems, SmarterDx receives at least a daily data pull of massive amounts of data. In the White Plains agreement, for example, the company collects all data from the following categories:

Encounters (admission/discharge, DRG weight, SOI, ROM, insurance)

Patient demographics

Vital signs/flow sheets/nursing documentation

Lab/imaging results

Documents and clinical notes (full text)

Procedure/medicine orders

Diagnosis/procedure/CPT codes

ADT feeds (sending/receiving site),

Prior CDI queries and results (working vs. new DRG).

This data not only gives them access to valuable training data but, over time, gives them the ability to collect one of the largest datasets of curated clinical and financial data. This data is only significant in a certain temporal context. Retrieval of information in healthcare often relates to time (e.g., “what happened after that operation?”). As a fundamental entity, time is intrinsically connected with many medical reasoning tasks. As clinicians and data scientists, the SmarterDx founding team was able to speed up the process of manually creating features for their supervised learning algorithms. Data scientists would be unable to pick up on these unique clinical scenarios, while pure clinicians would have difficult translating these insights into a scalable data model.

Rather than training simply against past charts and associated codes, SmarterDx uses custom labels based on M.E.A.T. guidelines that go to the sub-diagnosis level. This approach improves both sensitivity and specificity of the model, allows the model to adapt to different coding and quality metrics, and provides evidence and explainability for the coder when performing queries or final coding decisions. Each diagnosis and subsequent code is documented in an assessment and care plan, and each diagnosis must show that the provider is Monitoring, Evaluating, Assessing/addressing or Treating the condition:

M: Monitor—signs, symptoms, disease progression, disease regression

E: Evaluate—test results, medication effectiveness, response to treatment

A: Assess/Address —ordering tests, discussion, review records, counseling

T: Treat—medications, therapies, other modalities

These four factors help providers establish the presence of a diagnosis during an encounter and ensure proper documentation. An acceptable problem list must show evaluation and treatment for each condition that relates to an ICD code. If M.E.A.T. is not documented to validate the diagnosis, the diagnosis will be rejected by CMS due to the lack of evidence by provider. NLP tools generally have a limited ability to evaluate the M.E.A.T. of a code. Even those that promise to assess M.E.A.T. are often looking for a limited number of medicines or procedures that are associated with a disease as opposed to definitively assessing if a condition can be coded. As a result, the number of false positive codes often exceeds the number of codeable ones, requiring human coders to review and correct the NLP results.

In addition to building a novel algorithm and data model, SmarterDx has made specific workflow considerations to drive adoption of its platform. Today, SmarterDx does not require any EMR integration. A daily EMR dump from the health systems data warehouse is all that is required to identify areas for improvement. This workflow provides an easy-way to perform pre/post-analyses during the selling process and reduces implementation timelines at health systems. The company may adapt over time and integrate with the EMR as the company evolves from its focus today on retrospective coding.

Many tools in the CDI space today attempt to prioritize the charts or cases that clinical coders should review. However, it still takes them 15-20 minutes to review every chart. SmarterDx not only prioritizes the high-value charts, but reduces the time each coder needs to spend in chart. This advantage is most apparent when considering the process for CDI queries from the coder to the physician. Typically, if a coder wants more clinical information from a physician to justify a particular code, he/she must reach out to the physician with a specific query that is specific, but not leading, and upload these queries to the EMR. As shown above, SmarterDx highlights the missing diagnosis, potential evidence, and provides a simple yes/no/query option. If a query is required, an automatic template with relevant evidence and questions generated by the SmarterDx platform is sent to the physician.

The company has spent the last ~2 years building its technology platform and algorithms and is ready today for operational scale with its CDI retrospective review module. As the company continues to collect more data and understand more edge cases, the performance of the algorithm will improve over time. Going forward, the company will continue to build on this technology advantage by developing EMR integrations for improved concurrent workflow review and expand to cover all quality-impacting diagnoses and primary diagnoses / patient status justification. Over the next 2-3 years, the company has the potential to integrate upstream with physician note composition and even downstream with insurance denials in the back-end RCM process.

### Commercial / GTM

Hospital sales cycles are notoriously long and cumbersome due to many competing incentives, complex IT integration cycles, and increased skepticism of startup value propositions after years of being sold on the promise of AI. The initial sales process has leveraged the founder’s clinical expertise and knowledge working at health systems to sign contracts with 2 clients from a very limited outreach process during COVID (~20 total connections). The company is leveraging its superior technology platform and a targeted initial GTM with a very specific use case within CDI to help expedite their sales process today.

For example, the company can utilize claims data to analyze potential customers with low patient complexity, which can often be identified through case-mix index (e.g., sum of all DRG relative weights divided by the number of cases/year). As shown below, hospitals across the NYC region have differing level of acuity levels across high volume service lines. The hospitals with lower relative acuity may be targets for SmarterDx’s solution. There are other public data sources from CMS and other public surveys (e.g., LeapFrog) that can help SmarterDx to identify ideal customers. After identifying these initial customers, SmarterDx is able to easily provide a low-cost retrospective review based on previous months/years of data to demonstrate the potential impact.

10+ years ago, a number of service-based and consulting firms provided outsourced CDI services for hospitals in a contingency-based model. Firms would establish a baseline for total revenue based on previous years, and then capture 10%-20% of the additional revenue attributable to CDI. While this model sounds enticing, it was difficult to implement. At the end of the year when CFO’s and companies got together to reconcile the pre/post changes from baseline, there was a lot left up to interpretation on how much the outsourced CDI firm contributed to the additional revenue bump. CFO’s were also not fond of a variable line item on their P&L in the face of other competing priorities. Subsequent contract years became difficult as the definition of the baseline changed year-to-year. As the HHS Office of the Inspector General (OIG) and other groups became increasingly skeptical of upcoding, some groups also worried that the incentives justified companies to upcode cases where it wasn’t clinically relevant.

At the moment, SmarterDx is experimenting with a similar contingency-based model. This strategy can be effective in the near/medium-term for its current use case in retrospective CDI review with initial customers. Since the company is not focused on concurrent review and intervenes before the bill is sent to the insurer, there is no debate of the impact of SmarterDx’s platform. The pre/post analysis provides some guidance as to what the overall annual pricing will look like to give CFO’s visibility. The clinical context and understanding that SmarterDx built into its platform provides explainability and justification in the case of an audit from OIG

Nonetheless, establishing an effective and repeatable GTM strategy is a priority for this round. To-date, the company has built relationships and signed contracts with a number of key strategic partners to scale distribution to key health system customers:

AMN Healthcare: One of the largest staffing and talent solutions companies in the US with 500+ managed service provider contracts and $4B in annual revenue. AMN will provide hospitals with a review of their outpatient CDI program, focusing on E/M and patient encounters that originate in the ED, and SmarterDx will augment AMN’s review. Today, SmarterDx receives a one-time fee of $10K for the retrospective review (e.g., Montefiore) but there is a potential for broader synergies and cross-selling.

Premier Health Solutions: Premier operates one of the nation’s largest performance improvement alliances of hospitals and other providers in the nation, providing GPO services and clinical, financial, and outcomes databases on 45% of US hospital discharges. SmarterDx will work with Premier as a vendor to provide CDI services for ED and Inpatient areas at Premier clients for a fee of $69,750 for every $1M of implemented run-rate impact

Olive: Olive is a $4B healthcare company utilizing RPA to automate workflow across a hospitals back-end infrastructure and RCM process. SmarterDx will participate in Olive’s Library Partner Program (”app store”), through which Olive may refer customers to SmarterDx. For any leads purchase through the Library program, there is a 20% revenue share with Olive.

Enjoin: Enjoin is a CDI services and consulting firm that provides physician-led education on CDI, denial defense, and operations support by staffing coders at clients. The current MSA and SOW allows Enjoin to bring in SmarterDx as a vendor when Enjoin is engaging its hospital clients.

For the H1 2022, SmarterDx has line of sight for >$1M ARR with successful implementations with 2 health systems. Although the company is projecting $3M ARR by the beginning of 2023 and up $10M in ARR by 2023-end, we made more conservative projections based on our feedback from health system executives and work to be done over the next 6-12 months around refining the GTM strategy prior to true scale. Nonetheless, even in a conservative scenario, we expect to see rapid ARR growth (see below). Additional opportunities exist to expand downstream to the back-end RCM space (claims management, AR, denials, etc) and to the outpatient setting as well (even more complex coding).

### Competitive Landscape

In the inpatient setting, almost >95% of CDI departments work with a technology or service vendor to optimize the CDI process. SmarterDx can sit on top of many of these solutions today and eventually replace current software as the company expands its functionality. Today, 3M’s Encompass 360 has 50% market share and Iodine has grown over the last 8 years to take ~15% market share.

3M’s health information systems (HIS) solutions are in >4,500 hospitals in the US and generated $1.2B in revenue in 2021. 3M’s solutions include their proprietary all-patient refined (APR) DRG system, speech recognition and transcription solutions for clinicians, BI and analytics for medical imaging, and population health and claims analytics for payers. 3M has leveraged this breadth to cross-sell solutions across its portfolio, including the 360 Encompass System launched in 2011. Built on 3M’s coding and grouper technologies, the system offers users multiple dashboards and workflows, integration between CDI and coder teams, numerous reporting capabilities and embedded quality indicators. 360 Encompass gives CDI specialists visibility into the auto-suggested codes, can locate evidence throughout the documentation that a CDI specialist may have overlooked, and identify missing information and then auto-suggests a physician query while a patient is still in the hospital.

In speaking with 3M users, CDI teams mention that the platform is “advanced and mature”, and these users like that it is part of a broader suite of solutions. On the downside, users were disappointed in the lack of future development and innovation plans for the product and had some issues with some of the automated functions on the platform. For example, in some cases, the automated queries the system generates and sends to physicians are not accurate. Other users have reported that the BI reports that are generated by the 3M system also require additional customization and cannot be trusted.

Iodine is the most recent startup entrant to the CDI space. Founded in 2010, the company originally developed a product focused on providing alerts to caregivers via mobile devices. In 2015, the company went to market with an AI/ML technology platform that enabled health systems to identify records with the highest likelihood of having errors and prioritize the workload for CDI specialists. Today, Iodine’s AwareCDI platform comprises the following components:

Concurrent: Helps CDI teams increase query volumes by prioritizing charts likely to contain inconsistencies between clinical evidence and documentation.

Retrospect: Going beyond DRG mismatches, Retrospect allows reconcilers to prioritize, review, and track post-discharge records through final reconciliation and billing to capture additional revenue and minimize denial risk

Intelligence: Used in conjunction with Concurrent and Retrospect, Intelligence leverages pre-populated, high-confidence queries identified via Cognitive Emulation to further support CDI efficiency and improve physician response

Forecast: Eliminates administrative burden and enables case managers and finance teams to plan ahead with accurate, real-time, and automatic forecasted final DRGs at the beginning of an inpatient stay — without relying on final coded data.

Interact: Seamless delivery of queries to physicians via an integrated EMR interface, with mobile integration forthcoming.

Introspect: Facilitate evidence-based management across all aspects of documentation reliability and provide internal opportunities for quality enhancement.

Iodine was bootstrapped until 2018 when the company raised a private equity round from Silversmith Capital Partners and Bain Capital Ventures. In 2019, about 3 years after its pivot, Iodine had >30 customers representing >250 hospitals using what is now known as the Concurrent application. Over the following 2 years, the company made multiple acquisitions (ChartWise Medical Systems and Artifact Health), tripled its ARR, and grew its customer base to 800 hospitals. Based on Iodine reported numbers on hospitals, additional appropriate reimbursement generated through the Iodine platform, and assumptions that Iodine will keep 10% of revenue generated, we estimate Iodine 2021 revenues were $250M - $300M.

### Strengths

Founding team: The clinical and technical DNA of the founding team has directly informed product development, GTM strategy, and positioning in the market. A purely technical team would be able to develop algorithms, but lack the clinical sophistication to accurately build labels that have appropriate clinical context. A clinically-focused team would be able to identify important clinical and coding context, but struggle to build scalable data product based on millions of data points.

Early traction: The team was heads-down building the product over the last 2 years, but was able to sign its first 2 contracts with limited effort. After speaking to only ~20 health systems and de-prioritizing sales during the beginning of COVID, the team was able to sign 2 contracts with a total of >$1M potential ARR. This early success is almost unheard of for a seed-stage company selling into health systems, and is reflective of the quality of the product/team and overall unmet need for customers.

Margin profile: SmarterDx is a high-margin (80+%) healthcare software business. This combination reflects the best of both the SaaS and healthcare worlds - a high-margin, high growth technology company with the stickiness and retention inherent in healthcare businesses. As the company scales with this round of financing, these margins and early revenue growth give them the ability to be strategic and flexible with their growth strategy.

Trojan horse into broader opportunity: SmarterDx is getting paid to acquire and curate massive amounts of clinical data from health systems. Today, the company is utilizing that data to improve the CDI process, but SmarterDx has the ability to utilize this data and algorithms developed from that data to expand across the revenue-cycle and beyond. Over the near/mid-term, the company can expand upstream with physician note composition and even downstream with insurance denials in the back-end RCM process. Over the long-term, SmarterDx is uniquely positioned to build the largest curated dataset of clinical and financial data, with opportunities across clinical, financial, and research applications.

### Risks/Areas of Focus

Scaling GTM / Defining Repeatable Sales Strategy: The current sales process and GTM strategy has been founder-led and crafted to enable easier implementation and align incentives with a contingency-based model. With this round of financing, one of the key hires for the company will be a VP of sales. The company will look to develop a repeatable sales strategy for direct sales and leverage its distribution partners to pressure test its current GTM. The contingency-based model has been successful to-date and will provide initial early traction, but in speaking with hospital executives and based on previous experience with startups selling to health systems, the model will have to evolve over time. With a superior product and simple integration process, SmarterDx can be creative in how to structure these contracts to reduce sales cycles and increase overall revenue potential. For example, the company can identify the potential annual value of a contract during its 1-2 month pre/post-analysis during implementation and charge a flat SaaS fee for the whole year. Some CFO’s would be amenable to this strategy that provides a consistent line item in their budget. We are working with a number of advisors, our talent partner Aequtias, and other operators/founders in our network to better define this strategy over the next 6-12 months as the company begins to formalize its sales process.

Platform vs. Best of Breed: In some cases, health systems would rather purchase a single platform with broad functionality rather than choosing best-of-breed solutions for each individual use-case. 3M is a typical representation of this dynamic. Finance and RCM functions utilize 3M for a broad range of functionality, and may be willing to sacrifice performance and quality with another product for the ease of utilizing a broader platform. SmarterDx’s head-to-head advantage demonstrating improved performance compared to competitors today, its ease of integration, and ability to sit on top of current platforms initially give us confidence that the company will be able to overcome these risks in the near-term.