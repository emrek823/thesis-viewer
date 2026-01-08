---
source_pdf: "https://drive.google.com/file/d/1R1BZrc0FnJvBYgWogrVDD-5rB0AhvJEM/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Adonis General Catalyst - Follow Up Questions - 02.19.2023.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1R1BZrc0FnJvBYgWogrVDD-5rB0AhvJEM/view)

# Technology / Product

*   **Question**: Can you please walk us through all of the modules you offer today as point solutions and their accompanying typical pricing structure (i.e. in persona 2, you note that pricing can be per provider per month, per patient visit, and/or % of revenue)?

**Response**: Please see below list of modules offered, please note that there are several 'standalone modules' as well as several that are 'Revenue Intelligence modules.' The Revenue Intelligence modules require the organization to adopt the platform whereas the standalone modules are completely flexible.
    *   **Patient Benefits Verification (standalone)**:
        *   **Overview**: This is a front-end module that helps healthcare organizations avoid the nearly 30% of denials that are attributed to patient ineligibility and/or invalid insurance data. Adonis integrates with the scheduling system of record within the practice management software and actively sends text messages and/or emails to patients with upcoming appointments. Patients are then prompted to share relevant insurance details prior to a visit. Adonis retrieves the patient's eligibility data from the respective insurance carrier via API, subsequently sharing insurance and deductible status with the patient (in real-time) and pushing said metadata into the practice management software. Billing teams can then use validated, high integrity, and clean patient insurance data to build claims.
        *   **Pricing**: $.15 - $.50 per patient, depending on volume/integrations with specific annual minimums
        *   **Example**: Baptist Health
    *   **Patient Credit Card on File (standalone)**:
        *   **Overview**: This is a front-end module that helps healthcare organizations improve collection rates from patients post visit. Most organizations rely on paper statements and/or email based statements to communicate balances to patients once reimbursement from insurance has been received. In this model, patients are more likely to underpay or avoid payment. To address this, many healthcare organizations require patients to store a Credit Card on File (CCOF) at the point of care and also provide consent to run future charges on the card. The challenge with this approach is that it relies on the adherence of front-desk staff to show effectiveness. Adonis integrates with scheduling software and sends pre visit text messages and/or emails to collect credit card data. Adonis subsequently stores this data within the practice's patient finance application. Post-reimbursement, the patient finance application charges the credit card.
        *   **Pricing**: % of patient collections and/or per patient fee, we're still testing this. We've found that many patient finance applications like Phreesia or Cedar charge a % of collections, we're evaluating what works best for Adonis
    *   **Example**: US Dermatology Partners (proposed), Clearway Pain (starting pilot in April)
    *   **Patient Statement Overview (standalone)**:
        *   **Overview**: This is a front-end module that helps patients understand their patient financial responsibility in an explainable, layman fashion. The challenge with current patient statements is that they often contain insurance jargon, complex code related terminology, and surprising ending balances. This leads to low patient payment adherence and less than optimal patient collection rates. Adonis translates the standard 'explanation of benefits' that comes directly from the payer with a user experience that has been tested to be far more effective in improving explainability. Additionally, the Adonis statements include an in-depth overview of the insurance coverage details. These statements are delivered via SMS and/or Email, oftentimes prompting patient's to make their payment in the patient financial management application. Customers are interested in this module because of the increases to patient repayment.
        *   **Pricing**: % of patient collections, we're currently charging Metropolis a 1% fee on all patient collections.
    *   **Good Faith Estimates (standalone)**:
        *   **Overview**: The consumer experience for patients is quite unlike any other purchasing experience. Patient's receive services from their providers without fully understanding what they might expect to pay. This leads to consumer frustration and adverse impacts on providers. To improve the patient's financial experience, Adonis sits on top of existing provider data and provides a good faith estimate to patients that uses historic payer, provider, procedure specific data. This is an innovative approach to providing good faith estimates, historically front-desk staff will run basic arithmetic on a patient's insurance coverage to provide an estimate that is typically not accurate. By leveraging historic trend data, Adonis is using an empirical approach to solving this consumer challenge.
        *   **Pricing**: Per Patient Estimate transaction fee (Baptist is interested in using our service here, it'll be a priority for them this summer)
    *   **Denials Avoidance (Revenue Intelligence)**
        *   **Overview**: Nearly 1 in 3 denials is completely avoidable. Ever changing payer adjudication rules, updates to coding guidelines, and increasing eligibility complexity, has made collecting every single reimbursable dollar more important than ever. Adonis' Revenue Intelligence sits on top of clinical, insurance, and billing data within a provider group, delivering detailed alerts and nudges that highlight mitigatable denials trends. An example of this would be: **HUMANA is denying code 99285 at higher that historic rates due to recent adjudication guideline updates.** In the incumbent model, revenue cycle teams learn about these trends months after they've begun occurring, resulting in lost revenue.
        *   **Pricing**: Per claim (we're charging ApolloMD $.15/claim)
    *   **Underpayments Detection (Revenue Intelligence)**
        *   **Overview**: Insurers underpay claims on average by about 15%. Providers enter into specific contracts with insurers that guarantee an allowable amount per code. Despite this, payers routinely underpay these claims, without significant detection capabilities, providers forgo this lost revenue. Adonis stores payer <> provider specific contract rates and listens for net new responses from payers. The system is tuned to throw an alert when claims are underpaid, billers then take these alerts and follow-up with the payers accordingly.
        *   **Pricing**: Per claim (we're charging ApolloMD $.15/claim)

*   **Question**: Of the point-solution modules you offer, have you found any module to be particularly useful as a “wedge”, or is this largely provider/scenario dependent?
    *   As you offer point solutions to persona 2 and analytics to persona 3, is there a natural "land and expand" opportunity to sell more of your modules? What is your strategy around cross-selling products and can you give us any real-life examples of what a progression may look like?

**Response**: Each RCM organization has challenges optimizing patient collections and payer reimbursements. Adonis' lookback analysis is designed to pinpoint which area of RCM an organization struggles with the most. From there, a given point solution / module is recommended for maximum ROI. That being said, the patient facing modules are all generally centered around improving patient collection rates, and therefore are naturally easiest to land and expand into. Similarly, if an organization struggles with denials, they're also likely struggling with underpayments as well – these two modules pair together nicely as well.

*   **Question**: What are your core integrations / what external technology tools do you use, if any?
    *   Can you provide a full list of all of the vendors you integrate into today? Do you have a view on what % of the ecosystem that covers as you think about moving up market? What is your roadmap for developing further integrations, and how long does it take to build a net new integration, say with an EHR or RCM vendor?

**Response**: See below list of integrations by system type, where system type is defined by (1) EHR – these are the clinical systems of record that are essentially CRMs for patients, (2) Billing Platforms – these are the systems of record for all of the claims data, can be coupled with the EHR, (3) Clearinghouse - these are the brokers between the provider and the payer that act as the digital trusted middleman to connect claims data with repayment advice.
    *   **EHR Integrations**
        *   AthenaHealth
        *   Drchrono
        *   Modernizing Medicine
        *   EClinical Works
        *   Kareo
        *   Healthie
        *   Canvas
        *   EZDerm
        *   We can spin up new integrations in a matter of 2 developer days, and can export data reports from a number of other EHRs that don't have APIs as a stopgap.
    *   **Billing System**
        *   Next Gen
        *   Athena Health
        *   Modernizing Medicine
    *   **Clearinghouse**
        *   Change Healthcare
        *   Trizetto
        *   Waystar
        *   Availty

The integration roadmap was developed to prioritize the most common systems across the buckets above based on coverage in the mid-cap of healthcare. The EHR integrations above have anecdotally given us 80% coverage across customer / prospect discussions. The clearinghouse integrations have given us 95% coverage, as there is far less fragmentation in the clearinghouse space. As we move more upmarket, systems like Cerner and Epic are likely going to become more consequential. That being said, with our current set of integrations, we have a ton of go to market flexibility given the coverage across the mid-market, and will likely choose to deepen these existing integrations before building more breadth.

*   **Question**: For patient eligibility specifically, given you are able to extract baseline data such as deductibles, are there any payors that do not provide easy access to this information?

**Response**: Every payer in the US is required to make eligibility data accessible digitally. 95% of payers have enabled API based access to eligibility data, with non-normalized schemas however. The challenge Adonis solves for is normalizing the responses of all of the payers into one, predictable and dependable schema, that engineering teams can build against. There is a subset of payers that only enable eligibility access via portal log-in. For these payers, Providers must use specific credentials to log-in to a portal to access this data.

*   **Question**: What is your typical implementation time (perhaps by persona, and for persona 2, by modules, if it varies across)? I know we went over some of this live, but any more granularity you can provide is helpful!

**Response**:
*   **E2E Billing**
    *   For customers with no prior claims submission history, implementation times are usually 4-6 weeks, this is because these customers need to be set up with the clearinghouse for the first time
    *   For customers with existing claims history and clearinghouse connections, onboarding takes 2-3 weeks as Adonis facilitates transition off of the prior billing arrangement
*   **Modules**
    *   Modules typically go live within 3-4 weeks, the implementation time is bucketed in the following categories (1) technical integration, (2) customer specific nuances / thresholds, (3) testing and deployment
*   **Revenue Intelligence**
    *   The standard platform can be deployed in 2-4 weeks, depending on size and scale of the customer. Some customers require more customization based on specific needs, in this case, deployment can take 4-6 weeks.

*   **Question**: What is on your product and UI/UX roadmap? What is a key priority functionality that you are missing today?

**Response**: We are continue to invest in the following roadmap areas:
*   **Internal Billing Automation/Workspace**
    *   Goal: Continue automate more and more of the claims submission process to minimize human involvement in the initial submission of claim.
        *   Enhance and expand data integrations
        *   Improve machine learning models to improve adjudication rules by payer, specialty, location, codes, and payment models.
        *   Improve denials queue
        *   Improve UI/UX for billers to fight appeals faster.
*   **Revenue Intelligence**
    *   Goal: Continue iterating with early partners to understand themes of intelligence and metrics revenue cycle teams want to have access to
        *   A/B tests intelligence and nudges
        *   A/B UI/UX to improve adoptions and minimze avoidable denials
        *   Automate ingestion of contract and fee schedule data to be able to power underpamynets module
*   **Point Solutions**
    *   Goal: For patient facing point solutions, continue to iterate of UI/UX to improve adoption. Better adoption means higher ROI for our customers.
    *   Goal: For developer facing point solutions, improve reliability and integration strength.
*   **Lookback Analysis**
    *   Goal: Continue to add more automation around how we conduct lookback analysis, so that we can do more lookbacks at a faster pace.

# Competition

*   **Question**: Who do you view as your largest competitors? What do you consider to be their relative strengths and weaknesses?

**Response**:
*   **Outsourced Ma/Pa RCM shops**
    *   **Strengths**
        *   Strong relationship-driven customer relationship
        *   Hands on and typically flexible around bespoke providers workflows
    *   **Weaknesses**
        *   Expensive (5-8% of revenue), they can't go lower in price given number of billers per account
        *   Can't scale (i.e. one of our customers, Metropolis Dermatology, switched to us because they didn't think their current ma/pa RCM company could scale as Metropolis doubled in size
        *   No support on front-end revenue cycle; this is historically where a plurality of preventable denials exist
        *   Providers that use ma/pa shops typically see low patient collection rates, given disparity in processes.
*   **EHR software that has billing services embedded (e.g. AthenaHealth, ModMed)**
    *   **Strengths**
        *   It's an easy decision to make as a practice manager, everything is integrated with one vendor.
    *   **Weaknesses**
        *   Basically same weaknesses as ma/pa shops
        *   From our lookbacks, we find that the big-box EHR billing teams have a lower collection rate than the ma/pa billing shops. If you are a small account, they give you very little customer service.
        *   Very poor reporting, no intelligence
        *   Very little support across front-end
        *   Poor denials management
*   **Upstart billing automation companies (apero, candid health, etc)**
    *   **Strengths**
        *   They are fairly automated, but only can service the digital health market given that they require product teams to build to their APIs.
        *   Pretty good prices (we've seen a few of them charge in the 3-3.5% range)
    *   **Weaknesses**
        *   No modularity of services offered
        *   Very poor reporting, no intelligence
        *   Many of the upstarts are constrained by the specialty the service (i.e. juniper only services mental health)

*   **Question**: What is your competitive advantage? What would it take for someone else to catch up/compete with your platform?

**Response**:
*   Adonis reduces the cost to collect, while increasing collection rates.
    *   The reason we are able to do this is because we've built a unified data model across multiple provider systems of record.
    *   With this unified data model at the base layer of our architecture, our automation can perform seamlessly and therefore needs a fraction of the human billing headcount as the incumbent.
    *   We have a network effect. With every nth + 1 patient encounter and claim that is submitted through our systems, we learn the rules of the payers better and better which gives us an edge to mitigate avoidable denials in ways others haven't.
*   Adonis is built comprehensively for providers that need end-to-end outsourced billing support, while also being modular and extensible to automate processes alongside existing revenue cycle teams.
    *   In other words, no matter where a partners of ours is in their RCM journey, we can help them take a step in right the direction
    *   Our customers don't build to us, we built to them. This makes our sales cycle a lot faster, as we don't ask for internal resources of our customers.

*   **Question**: Who have you gone head-to-head against in your RFP processes to date?

**Response**:
*   We've won two formal RFPs: Baptist Health of South Florida and ApolloMD
    *   Baptist Health was a bake off where they studied 10 different vendors for a strong patient benefits verification API experience. We didn't get much context on the others in the race, but we were told we won because we had the strongest payer coverage, the best developer experience, and we were the only vendor that offered other things they wanted down the road (cost-share estimates and patient-statement walkthrough). Their engineering team had done load tests in our sandbox during the RFP process.
    *   ApolloMD was a customer we did a lookback for and we shared a lot of learnings with them about how with better access to intelligence, their billers could be more productive and could mitigate repeated mistakes. When we demoed Revenue Intelligence, they were shocked and said they had been looking for something like this for years. After we sold them on Revenue Intelligence, they issued an RFP and studied 5 other vendors including AthenaHealth, Trizetto, NexGen, and they weren't impressed w/ anything they saw. Adonis was the only one that can tell a full RCM narrative across all of their customers' systems of records.

*   **Question**: Have you displaced any existing RCM vendors? If so, who? How does the end-org think about the cost/time to rip and replace an existing vendor, and how do you navigate the potential complexities/barriers this creates for your GTM with respect to persona 1?

**Response**:
*   For persona 1, we've successfully ripped out ma/pa billing firms, EHR billing providers, and an internal team.
*   With respect to complexilities and barriers to entry when ripping and replacing, the beauty behind how Adonis works is that we aren't asking the customer to displace any tech; they simply need to make a workflow/personnel change. It ends up being very little time on their internal team. E.g. if they are using another vendor, they can kill that contract and switch to us. If they are using an internal team, then they just need to wind down billing responsibilities from that team.

*   **Question**: Have you conducted any lookback analyses where the vendor in place was efficient enough to not warrant using/switching to Adonis? Are there any vendors you would point to that have similar pricing & efficiency to Adonis across both end-to-end or any individual modules?

**Response**:
*   We've done a few lookbacks where the provider was managing the revenue cycle spectacularly. The only times we've seen this is when there's an internal revenue cycle team and a passionate leader of that team. The one thing about all of these internal teams is that they end up being an expensive cost center (wage ends ups being 3.8-4.1%), but because they were performing so well - we didn't bother making a pitch.

# Financial

*   **Question**: In your pipeline, you have the following customers. For each one, can you help us understand 1) who they are, 2) what persona they fall under, 3) their revenue (or reimbursement) scale, 4) pricing structure, 5) any expansion/cross-selling opportunities you see in the near-term by customer, and 6) any updates to the below and any additional pipeline added/contracts signed etc. since you last updated your model?

**Response**:
*   **Customer 1 - SoCal Derm Group**
    *   Metropolis Dermatology
    *   They are persona 1 and 2
    *   **Persona 1**: They do >$10m in yearly reimbursable revenue and we take 3.5% -> $350k ARR or ~ $30k mrr. The $4k for the first few months of this year were just a ramp up we added to the contract as they were offboarding their current billing team.
    *   **Persona 2**: They are using Adonis' post-visit patient statement walkthrough to improve patient collection rates. Year 1 this is free, year 2 and beyond we take 1% of all patient collections.
    *   Ramp ups in 2024 are factored in to account for new dermatology locations that are under construction that they are opening up.
    *   Expansion opportunities in in next 12 months: patient benefit verification module (~$15k arr)
*   **Customer 2 - Digital Therapy Provider**
    *   TotalLife Therapy
    *   They are persona 1
    *   This contract is for 3.5% of all reimbursed revenue. They project roughly $3.5m in revenue, but we have a $10k monthly minimum baked into the contract.
    *   The anomaly month in February is us helping them with a massive backlog of AR from 2022, where their previous biller wasn't collecting properly.
*   **Customer 3 - Digital Therapy Provider**
    *   Rippl Care
    *   They are persona 1
    *   Rippl is paying 3.5% with a $5k monthly minimum. They are early, so a little uncertainty around their growth numbers, but we are super excited about where they are going!
*   **Customer 4 - Florida Hospital**
    *   Baptist Health of South Florida
    *   Persona 2
    *   Baptist is using our patient benefits verification module. They are on a 5 year term, and they pay 25 cents per verification, with a $250k yearly minimum across each of those 5 years.
    *   Expansion opportunities in the next 12 months: patient good faith estimates (same pricing model as patient benefits verification i.e. $250k minimum, 25 cents for each estimate), revenue intelligence ($500k ARR)
*   **Customer 5 - RCM/Clinical Services Org**
    *   ApolloMD
    *   They are persona 3
    *   They are paying $650k a year, for a 5 year deal. The way the pricing is structured is a base software fee of $200k + 15 cents for each claim processed. They are consistently doing ~3m claims a year.
    *   Expansion opportunities: they are considering a couple point solutions, to early to assign deal value
*   **Customer 6 - Bicycle Health**
    *   This just closed; persona 1
    *   We decided to make this one a fixed contract for the first term, we are charging them $22,500 a month.
*   **Placeholder 6 - Private Cardiology Practice ($15m in reimbursable revenue) - Persona 1**
*   **Placeholder 7 - Small Private Practice ($3.5m-4 in reimbursable revenue) - Persona 1**
*   **Placeholder 8 - Mental Health OON Billing - Persona 1**
*   **Placeholder 9 - Small MSO Rev Intel Deal - Persona 3**
*   **Placeholder 10 - Medium MSO Billing + Rev Intel Deal - Persona 1/3**
*   **Placeholder 11 - PE-backed Pain Clinic Patient Intake and Billing - Persona 1/2**
*   **Placeholder 12 - Digital Health Rev Intel Deal - Persona 3**
*   **Placeholder 13 - PE-backed PCP Clinic Medical Billing ($27m in reimbursable revenue) - Persona 1**
*   **Placeholder 14 - quota from 3 reps**
    *   Can you please describe the assumptions behind these quotas? Do you have any data on existing pipeline coverage?
*   **Question**: To that end, do you have a detailed pipeline you can share?

**Response**: We have a detailed pipeline that we track deals across 4 stages:
*   **QUALIFICATION & DISCOVERY**
    *   We currently have $900k in pipeline across 9 opportunities
*   **DEMO, CONTINUED DISCOVERY, AND/OR PITCH**
    *   We currently have $3.3m in pipeline across 33 opportunities
*   **PILOT (LOOK-BACK ANALYSIS)**
    *   We currently have $1.1m in pipeline across 4 opportunities
*   **PROPOSAL, CONTRACTING, PROCUREMENT, AND/OR NEGOTIATION**
    *   We currently have $1.85m in pipeline across 9 opportunities

We're happy to share a full customer pipeline list if/when we engage in a term sheet together.

*   **Question**: Can you help us understand how you expect persona mix as a % of revenue to evolve over time? Where do you think you'll be at steady state?
*   **Question**: Can you also help us understand what pricing structure you believe will derive the majority of your revenue over time (i.e. between % of revenue, per provider per month, per patient visit, SaaS for analytics etc) and how best to think about this?

**Response**: In the next 24 months, we think we'll be at roughly 50% revenue from persona 1 (% of reimbursed revenue), 25% from persona 2 (mix between per patient or per provider or % of patient payments), and 25% from persona 3 (SaaS).

*   **Question**: It looks like total OpEx flatlines starting in September 2023 and then declines slightly (S&M) in July 2024
    *   Can you describe your assumptions around scaling your engineering talent, as well as the drivers of needing new engineering talent with respect to account/revenue growth?
    *   Can you describe your assumptions around scaling your S&M team, as well as the drivers of needing additional S&M personnel with respect to account growth?
    *   Just overall, past 2023, what is the use of proceeds driven towards?

**Response**: Ah, I thought I had muted projection columns past April 2024. The reality is that we aren't really projecting out hires past 12 months right now. We like to revisit hiring plans frequently based on capacity, tests we want to run, accounts we close, changing product roadmap, and revenue we are closing. If we bring in accounts faster than expected (and we surely have been these last 6 months), then we'll likely hire a lot faster than the model suggests.

As our revenue and number of accounts continue to grow, we will continue to hire more engineers and product managers to maintain scalability and reliability, and to improve the quality of our product. As we we continue to find product market across our personas, we will begin investing in more modules (both within billing automation and modules within revenue intelligence), which is when we plan to ramp engineering and product faster.

On S&M, we have created a strong sales motion where we know how to close six-figure revenue deals quickly. We are also starting to have a strong inbound pipeline. We are now starting to test outbound marketing with SDRs.

My current thoughts on sales is that we can hire sales folks who have experience in our space and a strong rolodex, and give them a $700-1m quota that they can hit reliably on their first year. What we've learned in our past company is that, once rolodexes have dried up, this can start to break down when there isn't a good marketing and SDR motion to bring in enough pipeline to talk to enough prospects to hit goals. So we brought in a Head of Marketing in January, who is focused on running a series of tests in 1H 2023 to understand what strategies can bring in the most consistent pipeline e.g. outbound SDR calls/emails, conferences, association events, content strategy, referral program from others selling into provider groups, channel partners, etc. Each one of these tests are in flight right now and have been kicked off or will be kicked off in the next 30 days.

If we can continue to figure out pipeline development, but at faster speeds, then we will hire more sales reps to own those accounts.

On customer success, our plan is to hire 1 CSM for every 3-6 accounts - depending on complexity of deal/persona. The CSM we have for persona 1 is very different than persona 2 or 3. Persona 1 CSMs are very analytical and tactical (with great domain knowledge), while Persona 2 and 3 CSMs are more techincal and strategical (by way of an example, an ex-Palantir/McKinsey or solutions engineer from a infrastructure company like AWS/Twilio/Plaid etc would be a great fit for this role)

*   **Question**: Can you please share a cap table? Can you remind us what the post-money of your last round was?

**Response**: $5.6m on a SAFE at a $30m post-money. I'll ask Cooley for an updated cap table and share soon.

# Go-to-market

*   **Question**: Can you please detail your GTM strategy by persona? How do you think about the sales motion for each and the team(s)/capabilities you need to execute?
    *   Please also describe sales cycles by persona, as well as key POCs you look to connect with within respective orgs
*   **Question**: When enabling a large channel partner (e.g. R1), how do you think about moving downstream to their customers over time to capture a larger share of the economics?

**Response**: Let's save this for our call on Monday, if that's ok - it's a long answer!

# General Catch-All Questions

*   **Question**: What positions do you view as your key 2-3 near-term hires? Have you begun recruiting for these positions?

**Response**:
*   VP of Enginering (began retained search a few weeks ago)
*   3 Senior Software Engineers (have an active pipeline)
*   Head of Sales (have active pipeline)
*   Head of Recruiting (have active pipeline)

*   **Question**: What are you looking for in a partner?

**Response**:
*   We're looking for partners that know our space well. This might sound cliche, but it's really important to us that, in addition to talking about high-level strategy and execution, that we can call our investors up and actually discuss something that's a little hairy and in-the-weeds about our gtm and product positioning.
*   We're looking for partners that are going to challenge us and push us to be the best versinos of ourselves, but also have the confidence in us to ultimately make the best decisions for the company and continue growing at a faster pace.
*   Help with customer introductions and recruiting
*   Ideally, we want long term partners that aren't just invested in one round - but that can continue to help us grow faster when the time is right.

*   **Question**: What keeps you up at night / what do you view as your biggest near-term risks?

**Response**: Too much coffee! Jokes aside, the thing that truly keeps us up at night is moving with speed. We want to grow exponentially, which we have confidence we can with our GTM wedge and product differentiation. We're ready to start pouring more fuel on the fire, and we want to do it before others try to mimic what we are doing.

# Financial

*   **Question**: In your pipeline, you have the following customers. For each one, can you