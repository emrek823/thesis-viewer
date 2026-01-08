---
source_pdf: "https://drive.google.com/file/d/1Mg0U0PZ227dM-5bUfsh06mbFjhyeGC6o/view"
drive_folder: "Portfolio/Solstice Health/Solstice Data Room/Solstice Q&A"
type: portfolio
company: Solstice Health
ingested: 2025-12-27
original_filename: "Virtue _ Solstice_ Q&A_9.25.23.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1Mg0U0PZ227dM-5bUfsh06mbFjhyeGC6o/view)

# VIRTUE - QUESTIONS & ANSWERS

## TEAM / ROLES

*   **Basic breakdown of the roles & responsibilities between Aris & Yiwen.**
    *   Aris: Product & technology
        *   Designing infrastructure and provider solution
        *   Developing platform to accommodate providers' current and future needs
        *   Identifying future product development and growth (deploying LLMs, HIE connections, and overall automation).
    *   Yiwen: Operations & sales
        *   Handling relationships with oncology practices
        *   Onboarding practices and throughout
        *   Retrieving user feedback with oncology practices (adjusting clinical content of the reports, adding new filters, workflow preferences)
        *   Sourcing and reaching out to new practices (discovery calls, sales, etc.)

*   **Near-term Hiring Status (e.g. Health Data Integration Engineer, Health Data Transformation Engineer, etc.) — confidence / visibility into near-term hiring pipeline (e.g. are any of these candidates already in conversations / being vetted and/or more simply have we identified needed roles & optimal candidate phenotypes?)**
    *   We're confident that we will be able to hire key roles within the next three months. The candidates that we've listed are all friends that we know and have kept in touch with since the start of Solstice. Specifically, we've worked with Caleb Kornfein (FS softeng @ Google), Jonathan Lee (FS softeng @ Google), and Eric Millman (FS softeng @ EviCore Health; they use HIE data to create automated prior authorization reports for providers). They've both shadowed us and play a current role as a sounding board to help rationalize our product decisions. We've had multiple informal conversations with the other candidates as well. We expect to make our first hire (data transformation engineer) by early November. We will make all of our hires through either this list of candidates or through 2nd degree connections of our friends in tech/entrepreneurship. The only major hesitation or consideration concerning any of the candidates above and the ones that we vet are their work ethic and their time commitment. Technical qualifications are a prerequisite, but it is mandatory that they are willing to put in the time on a daily basis with us.

## PRODUCT / TECH

*   **Can you walk through Solstice's internal data pipeline / architecture or share any diagrams? Given our experience with Tuva, Integral, and others, it would be great to go deep here to understand buy vs. build considerations initially and how this evolves over time.**

    *Diagram Description:*
    The diagram illustrates Solstice's internal data pipeline:
    1.  **Admin inputs patient request** (Initial step)
    2.  This triggers an **HG API CALL**.
    3.  **Patient Information (Stored in Health Gorilla)** is retrieved. This step also involves indicating **Providers (optional)**.
    4.  A **Postgres DB** stores some information.
    5.  From Patient Information, the system **Pulls specific resources, filter** to generate **Filtered Data**.
    6.  Filtered Data leads to **Structured Data (AWS s3)**.
    7.  There's also an input for **Fax from non-HIE provider** which gets **label**led and connects to the Structured Data (AWS S3) and the Postgres DB.

    1.  Clinic admin makes request for patient's prior medical records and provides relevant demographics
    2.  This triggers Health Gorilla API Call which simultaneously retrieves information matching that patient's demographics from CommonWell and eHealthExchange. Stored in Health Gorilla
    3.  We make calls for specific resources within that patient's chart from Health Gorilla (Document References, Diagnostic Reports)
    4.  We then apply filters to these resources using criteria such as time stamps, keywords, and abnormal results to identify what is relevant.
    5.  We then take the remaining unstructured data and make calls to our microservice that transforms the data into a comprehensible report using Azure's GPT-3.5 model.
    6.  The final report (zipped folder) is stored without AW S3 Bucket
    7.  For Non-HIE providers, we identify these providers using Patient Information we pull from the exchanges and what our providers indicate.
    8.  This gets fed to our Postgres Database where we then match the provider's information with their fax number. We auto-generate a fax template for the patient and use mFax API to send it out
    9.  Once fax is retrieved, we currently access through mFax API, label the Fax as what it is and then include in our report for that patient which is stored in our AWS S3 Bucket

*   **Can you walk us through the initial integration/implementation process once a practice signs a BAA and decides to work with Solstice?**
    1.  Practices signs a BAA and decides to begin working with Solstice.
    2.  We schedule onboarding with admin staff using the platform where we walk them through key functionality.
    3.  Give them two weeks to trial the platforma and touch base with them consistently and personalize the reports (adjusting filters, adjusting the content, adjusting the layout of the progress notes (i.e. patient identifiers listed), adjusting health systems to include)
    4.  After trial, we give them a pricing and services agreement. After they sign, we provide them with multiple user access codes (they are given an auto-populate feature afterwards).
    5.  Currently, we are beginning the process of speaking with their team about integrations with their iKnowMed EHR. We expect this to be a key component of our sales strategy and distribution channel after they sign a contract.

*   **Retrieval:**
    *   **What is the current breakdown by data source (EHR vs. fax vs. HIE) for record retrieval today? How do you envision this evolving over time?**
        *   EHR and HIEs make up around 85% of the information we retrieve but vary from state to state.
        *   For example, in Oregon HIE data makes up for over 90% of our data capture but in New Mexico it is around 70%. This is due to New Mexico needing information from health systems not connected with the exchanges such as IHS and smaller community orgs.
        *   Over time, more and more information will be available through exchanges, although we see it taking decades for smaller practices to connect and for these exchanges to have the enforcement mechanisms that ensure that all information participants hold is shared back into the exchanges.

*   **How do you think about automating the process of selecting which patients to pull records for and from which providers? The current loom shows admin input is required for both.**
    *   In the short-term, prior to integrations, the indicated specific providers after the auto-populate feature is a fail-safe and not required. We naturally draw information from the patients and have their referring provider in the excel that they upload.
    *   After we establish an EHR integration, this process will be seamless. With the click of a button or through the creation of a new patient through their EHR, Solstice's backend will draw their patient demographics information to create a report and push it into their patients' folder. In the EHR.

*   **Can you walk through both the specific process (e.g., what exactly does it entail for Solstice?) and rationale (weighing cost-savings vs. time/$ to pursue) to become an implementer for CommonWell and eHealth?**
    *   Rationale is that eHealth annual is $5000 and commonwell is $7500 annually = $12,500 for an unlimited amount of queries. As our volume goes up to 100,000k+ queries per month, this will be around $0.01 per query.
    *   Right now we are paying around $3000/month for 9,000 queries which is $4/query.
    *   Specific process of integration:
        *   Develop connections that adhere to Carequality standards and build in capabilities with the CW/eHx teams to connect to their networks through deployment and testing.
        *   Prove use case (treatment of care) which is very easy for us to do
        *   This process requires Solstice team to be working with internal teams from CW/eHx (both technical as well as compliance teams) over a period of several months. CW is shorter and eHx may take up to a year to develop.

*   **Filtering: Can you dive deeper on the logic/criteria for developing “modular filter" capabilities to balance customization with internal efficiency?**
    *   Time stamp filters are the same across the board: Last 2 years worth of information. Predefined set of keywords we identify based on specialty. For oncology, its pathology reports, MRI, CTs, CAT Scans. For infectious disease, we have cultures and CRP tests. Progress note structure looks the same. Outside of the filter keywords themselves, very little else needs to be changed to be able to customize across specialties. We can implement different microservices based on specialty to decide which filters to apply. The structuring is generally uniform as well so that does not need to be altered across specialties.

*   **Structuring: Can you walk through the early thinking of how you would go about developing the clinical summary feature and care recommendations (e.g., right balance of flagging information with clinical rationale vs. going fully to CDS?)**
    *   We have received some feedback from our current provider partners on this. We think a point-form document that provides summaries of relevant labs/tests the patient has had and their results, medications the patient is on and what the most recent provider has said about the patient (HPI) would encompass the majority of this summary. We would still retrieve and provide all relevant records per patient but the provider would review the clinical summary and look at additional documents only for reference.
    *   Initially we would purely focus on flagging information that stands out (i.e. tests not performed, results that need to be reviewed). We don't think LLMs have the capacity to provide full on CDS right now but hope to incorporate this in the future.

## CLINIC WORKFLOW

*   **How do buyers view the value of Solstice today (cost-savings vs. revenue driver)? How does that evolve over time?**
    *   Today, practices view Solstice as a cost-savings driver associated with saving their staff (both admin as well as clinicians) time to retrieve records and reducing the need for full-time staff members to handle this retrieval process. This is from us being to take less time to create summary reports and having overall more comprehensive data so that they do not need to re-retrieve their patients' information after the initial visits which is often the case. Solstice helps practices generate more revenue by reducing the amount of cancellations related to incomprehensive data but this is hard to quantify.
    *   Eventually, Solstice's summarization tool will save providers time treating patients, allowing them to see more patients throughout the day. By automating HCC coding, MIPS, and other QPP processes, Solstice drives additional revenue to practices by using prior records to more accurately label their risk profiles for payers. Finally, Solstice's ability to conduct clinical trial matching using prior records to evaluate IE criteria will add another revenue stream for practices.

*   **How often will admins pull records for a single patient (e.g., initial visit only or multiple follow-up visits)? How can Solstice drive increased utilization within a clinic (% of patients and/or % of providers)?**
    *   Currently they are pulling records primarily for the initial visits, as new patients are the most important to pull records for. We are building the follow-up pulls with Oregon Specialty Group right now and they will begin pulling for follow-up patients. We are working with them to determine what exactly we need to pull for their follow-up patient visits (which typically will be information since their last visit).
    *   Eventually, an EHR integration is the best way to drive utilization within a practice, allowing the process of retrieval to be seamless and controlled within the EHR environment.
    *   In terms of utilization measured as a % of provider users, the medical records staff handles all the retrieval for the entire practice and all clinicians.

*   **Are EHR integrations a must-have or nice-to-have? Why / why not?**
    *   EHR integrations are a must-have for large scale scalability because manual effort of using the platform can be inefficient for practices. Up to now, practices are fine using an additional dashboard, but establishing EHR integrations will 1) increase retention and daily utilization of the system and 2) offer a scalable distribution channel across many providers who use the same EHRs. For example, in oncology, the two largest EHR that a significant portion of practices use are Flatiron's OncoEMR and McKesson's iKnowMed.

*   **How do clinics measure success when working with Solstice? What KPIs do you want to show after 3/6/12 months?**
    *   Prior to working with them, data quality is the main KPI that practices use to measure success. We are measuring that we are able to get them all the records they need from relevant doctors more efficiently than their admin staff.
    *   After 3 and 6 months, we will measure the:
        *   Increase in retention;
        *   Increase utilization;
        *   Decrease in time for records retrieval;
        *   Decrease documents review (average prep time);
        *   Decrease in appointment cancellations;
        *   Decrease in # of relevant documents that need to be retrieved post initial appointments.
    *   After 12 months, we will measure the:
        *   Number of referrals to other practices;
        *   Decrease in cost-savings (total) of Solstice;
        *   Decrease in number of repeat tests;
        *   Increase in revenue (total) of practices.

## COMMERCIAL / GO-TO-MARKET

*   **Can you provide more detail on traction/utilization within 4 current users (# of records, % of patients Solstice is utilized for, % of providers/locations using, etc)? We see some data (3.74x increase in usage in deck, # of records in case study) but would like a more in-depth picture.**
    *   We get 300+ records per patient on average, relevant records are around 50 per patient.
    *   Admin staff conduct records retrieval for multiple providers (so 3-4 people at these locations are handling all the requests).
    *   Within our current users:
        *   Oregon: all patients (new + follow: 600/month) (100%)
        *   NMCC: new patients only (100/month) (20% of all patients, 100% of new patients)
        *   MOH + Alabama: new patients only (100/month) (50% of new patients)
            *   Alabama has increased significantly
            *   MOH has maintained since we started. The provider is onboard but its been harder to get continued adoption from the admin staff.

*   **Can you dive deeper on probability/confidence scores for organizations in current pipeline, particularly the 9 in "pilot, pending contract” or “previous pilot, will revisit conversation"?**
    *   On a confidence scale between 1-5 (1 very pessimistic to, 3 being lukewarm, 5 very optimistic):
        *   Oregon Specialty Group - 5
        *   NMCC - 5
        *   Alabama - 5
        *   Maryland - 5
        *   MOASD - 4
        *   Mary Bird Perkins - 4
        *   Nebraska - 3
        *   OHSNJ - 3

*   **Walk us through your GTM strategy. How do you evolve from cold outreach today to a more sophisticated and scalable GTM?**
    *   While we are starting with selling to practices on a one off basis there are a few ways we see ourselves eventually getting large amounts of distribution quickly without relying on cold outreach.
    *   Using community oncology networks and gaining distribution through them (AON, US Oncology, One Oncology, QCCA). Most community practices are a part of these larger networks and while each practice has decision making power themselves, the networks themselves handle purchasing decisions for some key software (EMRs etc.). We hope to eventually sell directly to their networks and get large amounts of distribution at once.
    *   EHR/Software Vendor Integrations. Almost all oncologists use either Flatiron's OncoEMR or Mckesson's iKnowMed. By building integrations with these EMRs we hope to get distribution through them to all of the practices that use their solution. Other specialties have similar consolidation patterns with EMRs that will help with our growth. Similarly, practice management software is something that all providers purchase. We want to create distribution agreements with these companies to help bundle our solution alongside theirs as they sell to practices across the US.
    *   Regional Focus. As we expand, we hope to hone in on specific regions to expand from. By doing so, we will begin our contact with providers we eventually want to partner with as we retrieve information from them on behalf of our clients. This helps establish credibility and will allow us to more easily sell into neighboring providers without having to rely on purely cold outreach.

*   **Who is your ideal customer profile? Why? How do you prioritize initial customers in oncology and other specialties (size, physician networks, geography, referral relationships, etc)?**
    *   Characteristics of ideal customer profile:
        1.  Multi-location practice with 1-2 decision makers for solution (tier 2 customers as we described)
        2.  Practice locations in regions with high HIE usage/data quality
        3.  Patients come from many different provider systems and sometimes out of state
        4.  Part of larger oncology networks

*   **Currently, Solstice is signing BAA's with every provider 1 by 1. We've seen other companies (e.g., Redox) fight this battle - how do you think about making this process more efficient over time?**
    *   Many of the physician partners/executive directors at the practices we've spoken to already belong or are on leadership teams of large oncology or physician group networks. Eventually by selling into one of them, we are able to sell to all the practices who belong to the network.

## FINANCIALS

*   **Revenue: Can you walk through the following assumptions to better understand rationale for different scenarios driving the MCV calculation?**
    *   **Can you elaborate on price discovery work to get to $10-$15 per new patient (vs. monthly subscription fee for Oregon)?**
        *   MCV is the product of total monthly patients (an average of the patient volume of our current partners) and weighted price per patient. The total monthly patients was determined as an average total number of new and follow-up patients per location (10,000 patients). The weighted price per patient was determined as a weighted average of the price per new patient ($10-15/patient) and price of follow-up patients ($2.5-3.75/patient), arriving at a range of $3.4-5.1/patient.
        *   We use the $10-$15 as a proxy to determine the monthly subscription fee given the average number of patients they typically would be retrieving information for on a monthly basis. In other words, we will not be charging a price per patient, and all pricing plans will be a monthly subscription fee.
    *   **What if Solstice is only used for new patients or only a certain % of follow-up visits? How does this impact pricing, growth, and overall strategy?**
        *   We charge a fixed fee. None of it is variable on patient volume.

*   **COGS: Can you provide more granularity on how COGS changes over time by line item (fax vs. LLM vs. HIE)? You mention costs of $0.75/patient as you develop proprietary connections to QHINs while moving away from enterprise LLMs vs. $4.50 today but COGS are currently hard coded in model vs. per patient.**
    *   There are three primary cost drivers:
        *   HIE:
            *   Right now: Using HG to establish connections with HIEs ($4/patient)
            *   Medium-term: Switching to Particle Health in the near future ($0.6/patient)
            *   Long-term: developing a connection to the HIEs ourselves (<$0.01/patient) through a fixed annual fee vs. variable fee
        *   LLM:
            *   Right now: using Microsoft Azure's GPT-3.5 model ($0.1/patient)
            *   Future: Evolution from using Azure (scaling based on volume of queries) to eventually deploying our own model (higher upfront cost, lower variable costs)
        *   Fax API:
            *   Right now: $0.2/patient
            *   Future: Different tiered based on volumes we imagine with mFax

## MARKET TAILWINDS & MODEL DURABILITY

*   **It would be great to dive deeper on the "why now". Specifically, as access to data improves and becomes increasingly commoditized, how does Solstice's value prop evolve over time?**
    *   HIE adoption has gone from 53% in 2019 to 92% currently.
    *   Long-tails of EMRs are never going to connect and there is no enforcement mechanism, this data is always going to be incomplete. It will take decades for people to develop complete connections with the networks.
    *   As HIE becomes more commoditized, that data becomes less valuable. But that increases the value of data from community practices because they will never onboard onto HIEs. The information we pull on patients thus paints a complete picture of the care they receive from the community complemented with the information pushed into HIEs from large health systems.
    *   Large language models make structuring this information increasingly possible where for the longest time, this problem was too complicated to automate at scale.

*   **What is your moat today? How does that change in 2-3 years?**
    *   Now: mainly our relationships with providers that we spent a year developing (even prior to having a product). Healthcare providers are very reluctant to switch technology and so we want to scale this solution as broadly as we can in a short period of time to gain market dominance.
    *   2-3 years: our moat becomes the vast network of community practices that we create, completely handling their retrieval and release of records, segmented by specialty allowing us a speed that competitors are unable to match. We de-identify it, and license it to pharma for RWE, and CT matching. Not only do we have the data but we also have the relationships.

## FUTURE EVOLUTION: NEW SPECIALTIES + PRODUCTS

*   **Can you talk through initial thinking for timing and prioritization of expansion into other specialties beyond oncology and products beyond record retrieval (MIPS, HCC, CT, RWE)? Other specialties: When and why does Solstice expand to other specialties?**
    *   WHEN: We will not focus on expanding into other specialties in the immediate term. We take on specialties if our partners work with them. It doesn't require too much additional effort on our end. We want to saturate the oncology market before expanding to other specialties formally.
    *   WHY: Expanding into new specialties is an efficient way of distributing our product. Through working with one specialty group, we naturally build relationships with other community practices. For example, working with an oncology practice allows us to build relationships with urology group practices since they typically work closely together to exchange records. This not only expedites customer acquisition, but given that community practices work together, we can create a better product by handling the dialogue between these practices that already work together.

*   **Other products: How do you prioritize different products balancing revenue potential and work required to execute (data assets required, engineering time/investment, additional hires to bring in-house)?**
    *   Right now:
        *   Automating records retrieval is the core part of the business that we will focus on.
    *   In the medium-term:
        *   We see automating HCC/MIPS coding as an immediate next step because they are high value adds to practices, as they tie directly into patient data retrieval. We don't need to build massive amounts of technology.
        *   We scale these two aspects: retrieval/release + hcc coding
    *   Eventual long-term revenue streams that we are not focusing on/investing in right now:
        *   CDS we see as more long-term because we think just the retrieval of information and associated coding is a scalable business and would like to focus on that.
        *   Eventually as we establish a data lake on similar groups of patients (esp. in rare/chronic diseases), then we are able to link that information together, de-identify it, and license it to pharma for RWE, and CT matching. Not only do we have the data but we also have the relationships.

## FUNDING / NEAR-TERM MILESTONES

*   **What are the 2-3 key milestones you have to hit to raise a subsequent round. Why?**
    *   Sell to 100 clinic locations (on average 10 organizations). ($1.1mm ARR) with great retention in the next 9 months.
    *   Establish scalable unit economics by developing tech in-house (HIE Connections, LLM Structuring)

*   **What ideal partners / personalities do you want around the table (VC, angels, advisors)?**
    *   Healthcare domain expertise (specifically regards to data and provider-based sales)
    *   Angels that work in the space, sell to similar customer demographics, understand how to monetize health data