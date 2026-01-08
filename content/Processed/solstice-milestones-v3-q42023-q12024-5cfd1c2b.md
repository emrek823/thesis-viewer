---
source_pdf: "https://drive.google.com/file/d/1r_IHilOrpea0a8u2XH8KTxklPAIul3oQ/view"
drive_folder: "Portfolio/Solstice Health"
type: portfolio
company: Solstice Health
ingested: 2025-12-27
original_filename: "Solstice Milestones V3 (Q42023-Q12024).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1r_IHilOrpea0a8u2XH8KTxklPAIul3oQ/view)

# SOLSTICE MILESTONES
Meeting: 10/24/23 with Virtue

## TABLE OF CONTENTS:
1. SERIES A OBJECTIVES
2. Q4 2023 ROADMAP
3. Q1 2023 ROADMAP
4. GTM QUESTIONS TO ANSWER PRE SERIES A
5. LONG-TERM CONSIDERATIONS

***

# SERIES A OBJECTIVES

**Overarching goal: $1.5mm ARR while proving a scalable distribution strategy across community practices.**

**A. SALES**
a. Customer acquisition: acquire 75 total community practice locations as customers.
    i. Explanation:
        1. Assuming $10 average price per patient and 2k annual new patients = $20k per location, it would be $1.5mm ARR.
    ii. Specific tactics:
        1. Convert Oregon Oncology, New Mexico Cancer Center, Alabama Oncology, and two other organizations in the pipeline.
            a. Discussions with their leadership teams we already have relationships with.
            b. Experiment with pricing models by increasing the upper bound of pricing to optimize the amount that practices are willing to pay.
        2. Convert 3-5 surrounding organizations (other specialties) across each of the organizations listed above.
            a. Referral programs from the current practices and working with our practices to ask to be introduced to the other practices in their region.
            b. Establishing integrations with practice management softwares.
b. Distribution/go-to-market: prove out a scalable GTM strategy to easily sell across specialties and into new organizations.
    i. Specific tactics:
        1. Utilize initial oncology practice customers as nodes to expand to 3-5 surround community practices that they receive referrals from.
        2. Utilize established integrations with EHRs and practice management softwares to scalably distribute into new practices seamlessly (OncoEMR, Unlimited Financials).

**B. PRODUCT**
a. Retrieval: become a Carequality implementer and develop connections to eHex and CommonWell.
    i. Specific tactics:
        1. Follow steps to begin the application process and work with eHx/CW technical specialists to develop these connections.
b. Filtering: continue to build more sophisticated diagnosis/specialty-focused filters
    i. Specific tactics:
        1. Work with practices and providers from different specialities to determine these filters.
c. Structuring: continue to build out easily readable reports
    i. Specific tactics:
        1. Build our own model to more seamlessly take unstructured pieces of information and convert them into standardize templates for progress notes, labs, imaging.
d. User experience: build out integrations with practice management systems and EHRs to create seamless user experience where information is pulled and pushed directly into their systems without requiring any manual input.
    i. Specific tactics:
        1. Work with practices who use OncoEMR to establish an integration with them.
        2. Determine the most common middleware software systems that providers use (i.e. patient intake softwares or practice management softwares) and work with them to establish integrations.
a. Team: hire 2 engineers that can handle integration & product
    i. Specific tactics:
        1. Use our network to reach out/get referred to highly motivated people who have experience and expressed interest building in healthcare.

***

# Q4 2023 ROADMAP

**CUSTOMER**

1. Successfully onboard Oregon's second practice on October 30th, 2023.

Oregon's second practice has 3x the volume of their initial practice and they have been requesting like crazy during the trial. We want to make sure we can handle this capacity and are able to output high quality reports in a time efficient manner. This will allow us to reach $20k in ARR.

We presented a long-term agreement with Oregon yesterday and they clearly like the platform. We told them we are turning it off until the 30th. While we are waiting for Traci to sign a contract and over the next two weeks, we are building up the platform's capacity to serve their entire practice.This is our most immediate priority.

2. Sign contract with New Mexico by November 7th and expand to all of their locations by the end of the year.

We are scheduling a call with New Mexico's leadership to go over pricing and discuss next steps. Here we'll present them pricing and discuss implementation. They are very likely going to need EMR integration so we will present this as an option to them. Once we sign a contract (hopefully beginning of November) we need to then perform the integration which should take roughly a month given that this will be the first one we do.

3. Begin expanding around Oregon Oncology Specialists to nearby practices (i.e. Willamette Urology, Praxis Health, Willamette Pulmonary Associates).

We reach out to the top referring practices of OOS. The goal is to have 1-2 practices trial the system and convert one to a paying contract. OOS has an incentive to refer us to their neighboring practices since by onboarding a neighboring practice, we will be able to manage the release of their information and ultimately increase the efficiency of receiving referrals to OOS.

4. Sign another practice to a contract amongst our previous pilots: Alabama Oncology, Maryland Oncology Hematology, Marybird Perkins, Medical Oncology Associates of San Diego, Comprehensive Cancer and Hematology Specialists.

We will re-engage leadership at these practices and showcase our improved product. Once we do this, we'll give each of them some additional time to try the platform after which we will propose our contract. By the end of the year, we hope to convert one of these to paying customers. Through this, we can begin to create a parallel regional network in a different geography and replicate the model in Oregon. Our distribution strategy will be regional focused on branching out within a region and replicating it across different regions.

**Action Items:**
1. Work with Traci to sign Oregon's second practice.
2. Get the platform ready for launch with Oregon Oncology.
    a. Resolve document processing issues
    b. Adjust architecture to ensure there aren't hiccups when we get a lot of requests at once
3. Schedule call with New Mexico for next week and present pricing.
    a. Beforehand, get different pricing models ready so they can decide which one works best for them
    b. Have game plan for integration ready as they will likely need it
4. Reach out to other specialty groups who work with Oregon Oncology to discuss paid contracts (November 15th).

**PRODUCT**

1. Build integration with practice management software of Oregon Oncology.

We learnt through our conversation with Jonathan Hirsch that developing an integration with iKnowMed is nearly impossible due to the politics associated with McKesson. They purposefully make it difficult for any company to integrate with them to safeguard their information. A better way to automate the workflow for Oregon Oncology (and other practices who use iKnowMed) would be to develop an integration with their practice management systems. In Oregon's case, this is Unlimited Financials (UF). The workflow would be simple. As patient charts are created and their appointments are scheduled, this would trigger Solstice to retrieve information and populate the Solstice dashboard. We can either push the reports directly into UF or keep it in our own dashboard for them to view.

2. Build integration with Flatiron's OncoEMR for New Mexico Cancer Center.

We currently have a user dashboard that admin personnel will log into to make requests for new patients and view reports of patients for which they have requested information. We eventually want to remove all humans from the loop by directly integrating into our partner provider's EMRs so that information is seamlessly included within a patient's chart as soon as a new appointment is created.

Most of our providers use OncoEMR so we will begin with these integrations. HL7 is a set of standards that define how medical information is collected, processed, and exchanged. Through an HL7 connection, we will pull information from our client's EMR using the demographics of patients that have upcoming appointments. We will then use this to create our patient reports before pushing them into the EMR.

3. Automate follow-ups to health systems that have not faxed back requests.

We have automated the initial fax to providers that currently do not participate in nationwide health information networks (HINs). 90% of the time, we receive information back from these faxes in a timely manner. Occasionally, we need to "bump" the practice to send over the information before a patient's appointment. We will build an algorithmic way to perform this bumping by setting a predefined time after which a follow-up fax is sent and information is requested.

4. Automate the labeling of inbound faxes (optional)

We have automated the sending of faxes to providers that currently do not participate in nationwide health information exchanges (HIEs) based on information our partnering community practices indicate. Currently when faxes from these providers come back, we manually label them as what they are (progress note, CT scan, blood test, etc.) and then append to the reports we provide our practices.

We will automate this process by building a pipeline that performs OCR on the pages and algorithmically labeling the information as the appropriate entity prior to including them in a patient's report.

5. Build capabilities to pull information for follow-up patients.

Our platform currently is used primarily for handling records retrieval for new patients (those not previously seen at a practice). However, follow-up patients often need their records retrieved as well, especially if they are seeing another provider for their cancer or significant time has lapsed since the previous visit. For these patients, we don't need to create reports for their entire prior medical history, only for relevant records in-between appointments. We will build a feature that identifies follow-up patients (those previously requested through the Solstice platform) in order to retrieve the relevant records on those patients.

**HIRING**

We want to keep things lean. Our needs are on the engineering front, we'd like to bring on two more individuals on the team.

1. Hire Health Data Transformation Engineer/Founding Engineer (end of November)
    a. Description: We are looking for an engineer with experience working with large unstructured datasets in the healthcare context. We would like them to have ML/AI experience in their current role. They will be responsible for building systems to appropriately machine-read and label incoming faxes, deploying LLM solutions to handle patient information structuring and spearheading our efforts to create succinct patient summaries so providers have a comprehensive yet concise view of the patient's prior medical history.
    b. Cash Range: $150-$180k
    c. Equity Range: 0.5-1%, 2% is game-changing

2. Hire Health Data Integration Engineer (end of January)
    a. Description: We are looking for an engineer with experience working directly with FHIR (Fast Healthcare Interoperability Resources) and accessing information from Health Information Exchanges (HIEs). Ideally has worked at a company like Redox, Health Gorilla, an EMR vendor, or another company in the interoperability space. They will be responsible for managing our retrieval pipeline for pulling and filtering information from the exchanges. They will spearhead our efforts to serve as implementers of the two nationwide health networks, CommonWell and eHealthExchange. They will also lead our integration efforts with OncoEMR to ensure our solution fits perfectly into our providers' workflow.
    b. Cash Range: $150-$180k
    c. Equity Range: 0.5-1%

**Action Items:**
1. We will be starting to leverage our network to source potential fits this week. Specifically, we will be looking for individuals who have worked at growth stage health data companies and using mutual connections to get in touch with them. We have written the job description and designed the hiring process already. The two criteria that we're looking for are 1) commitment level and 2) experience.

***

# Q1 2024 ROADMAP

**CUSTOMER**

1. Create a network of 10 organizations around Oregon to manage their flow of information.

We want to create a regional network across multiple specialties engaging with Oregon Oncology to handle the flow of their patient information. By expanding across Oregon's network, we will completely handle the retrieval and release of their information, and drive patient volumes through an optimized intake process.

2. Create a network of 10 organizations around New Mexico Cancer Center to manage their flow of information.

This will prove that we will be able to replicate the regional network expansion across specialties. Our goal is to repeat this process across all geographic regions efficiently.

**PRODUCT**

1. Begin application process to become an implementer for the two main nationwide health information networks (CommonWell Health Alliance and eHealth Exchange).

We currently use a third-party API to be able to connect with nationwide HIEs. While this has allowed us to get to market quickly, the costs associated with using it are high and we are reliant on it to access any of this information. To resolve this, we will apply to be participants in the two major networks, CommonWell and eHealth Exchange. The process for each can take 6-12 months.

    a. Applying to be an implementer of CommonWell:
        i. Sign Member Services Agreement (MSA) and work with our service provider program managers to establish implementation KPIs, formulate and formulate deployment plans with the CommonWell team.
        ii. Begin the certification process and launch a beta program to test the Product.
    b. Applying to be an implementer of eHealth Exchange:
        i. Complete eHealth Exchange application package
        ii. Begin testing path that will include transport testing and content testing.
2. Automate the labeling of inbound faxes (optional)

We have automated the sending of faxes to providers that currently do not participate in nationwide health information exchanges (HIEs) based on information our partnering community practices indicate. Currently when faxes from these providers come back, we manually label them as what they are (progress note, CT scan, blood test, etc.) and then append to the reports we provide our practices.

We will automate this process by building a pipeline that performs OCR on the pages and algorithmically labeling the information as the appropriate entity prior to including them in a patient's report.

***

# GTM QUESTIONS TO ANSWER PRE SERIES A:

1. How do we achieve scaled distribution across regions/specialties?

Jonathan mentioned that an effective distribution strategy would be to scale across specialties within a certain region and create regional networks and replicate these networks rather than focusing on one specialty and expanding by that specialty. To prove this distribution strategy, we will aim to target larger organizations (i.e. Florida Cancer Specialists or even regional health systems) by geography and eventually branch out to onboard their referring organizations.

We would need to determine how we can achieve a natural and effective way to replicate these networks on their own.

2. How valuable is the data we are aggregating (RWD vs referral pattern data)?

Based on our conversation with Jonathan Hirsch, we learned that RWD is difficult to commercialize in the community oncology setting because these organizations have been scarred by their experience with Flatiron. There is definitely a way to commercialize this information but the way of doing so would require the buy-in from practices. The information is unquestionably unique, as we are able to paint a longitudinal picture of the patients pre/post diagnosis.

Another unique aspect of the network we are creating is that we are mapping referral patterns between community practices, determining from which organizations referrals are coming from, relative to different patient populations. Biopharma would be extremely interested in this data, as no one has access to this information. Understanding these patterns could help them determine which organizations upstream of oncology practices or other specialty groups supply them with patients. This is important to help pharmaceutical companies determine ideal sites who have large referral volumes and determine which organizations to target for drug detailing (i.e. if specialty A practice tends to refer their patients to specialty B practice, a pharma companies may want to target their drug marketing efforts on specialty A practice to send representatives to have them encourage physicians to prescribe certain drugs to the same patients).

We will need to determine the exact economic value of referral pattern data.

***

# LONG-TERM CONSIDERATIONS:

1. How can we eventually sell into health systems?

There is a value for large health systems as well since they receive many referrals from community organizations. By automating data retrieval, we are directly tying the value proposition to the primary factor driving revenue (patient intake volume). Health systems like Montefiore Health System directly engage with smaller community organizations and would find value in optimizing the intake process for their patients. This process is very inefficient and creates billions of dollars of losses due to inefficient patient scheduling each year.

The strategy to eventually sell to these regional health systems would be to use relationships with the community practices they receive referrals from to sign a contract with a larger community-focused hospital organization (i.e. Salem Hospital).

We would need to determine an appropriate strategy to effectively sell into these systems.

2. What are some additional applications on top of Solstice platform.

By establishing a network of practices, we are easily able to include additional value-add products into our core platform to offer a suite of tools to help practices make decisions and improve operational efficiencies. An initial idea would be to build out VBC tools that help providers measure and calculate risk-based adjustments for their patients through MIPS and APMs. There are many others such as building support tools to help them match their patients to clinical trials, etc. Some specific tactics include:
    a. Work with initial practices (1-2 organizations) to determine different value adds we could easily build on top of the existing platform.
    b. Assemble an MVP version of the product and launch it across the platform to see usage and whether practices would like to adopt it.
    c. Determine a willingness to pay for these additional features.

3. What is a strategy for commercializing our data to biopharma companies?

We need to build a commercialization strategy and accumulate interest to license information to biopharma (referral pattern data & RWE). Some specific tactics include:
    a. Add in clauses in BAA agreements to explore the licensing of this information.
    b. Develop a way to store, de-identify, extract, and analyze large amounts of this information.
    c. Provide sample data to biopharma companies to obtain quotes on how much they are willing to pay for this information.