---
source_pdf: "https://drive.google.com/file/d/1MaAai6J14JQl9Mr74SF-WA-ZsmzpDZTm/view"
drive_folder: "Portfolio/Solstice Health/Solstice Data Room/Solstice Roadmap"
type: portfolio
company: Solstice Health
ingested: 2025-12-27
original_filename: "Solstice-ProductRoadmap.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1MaAai6J14JQl9Mr74SF-WA-ZsmzpDZTm/view)

# SOLSTICE PRODUCT ROADMAP

## Q4 2023

1.  **Automate the labeling of inbound faxes.**
    *   We have automated the sending of faxes to providers that currently do not participate in nationwide health information exchanges (HIEs) based on information our partnering community practices indicate. Currently when faxes from these providers come back, we manually label them as what they are (progress note, CT scan, blood test, etc.) and then append to the reports we provide our practices.
    *   We will automate this process by building a pipeline that performs OCR on the pages and algorithmically labeling the information as the appropriate entity prior to including them in a patient's report.
2.  **Automate follow-ups to health systems that have not faxed back requests.**
    *   We have automated the initial fax to providers that currently do not participate in nationwide health information networks (HINs). 90% of the time, we receive information back from these faxes in a timely manner. Occasionally, we need to "bump" the practice to send over the information before a patient's appointment. We will build an algorithmic way to perform this bumping by setting a predefined time after which a follow-up fax is sent and information is requested.
3.  **Build capabilities to pull information for follow-up patients.**
    *   Our platform currently is used primarily for handling records retrieval for new patients (those not previously seen at a practice). However, follow-up patients often need their records retrieved as well, especially if they are seeing another provider for their cancer or significant time has lapsed since the previous visit. For these patients, we don't need to create reports for their entire prior medical history, only for relevant records in-between appointments. We will build a feature that identifies follow-up patients (those previously requested through the Solstice platform) in order to retrieve the relevant records on those patients.

## Q1 2024

1.  **Apply to be an implementer for the two main nationwide health information networks (CommonWell Health Alliance and eHealth Exchange).**
    We currently use a third-party API to be able to connect with nationwide HIEs. While this has allowed us to get to market quickly, the costs associated with using it are high and we are reliant on it to access any of this information. To resolve this, we will apply to be participants in the two major networks, CommonWell and eHealth Exchange. The process for each can take 6-12 months.
    a.  **Applying to be an implementer of CommonWell:**
        i.  Sign Member Services Agreement (MSA) and work with our service provider program managers to establish implementation KPIs, formulate and formulate deployment plans with the CommonWell team.
        ii. Begin the certification process and launch a beta program to test the product.
    b.  **Applying to be an implementer of eHealth Exchange:**
        i.  Complete eHealth Exchange application package
        ii. Begin testing path that will include transport testing and content testing.
2.  **Build HL7 integrations with Flatiron's OncoEMR and McKesson's iKnowMed.**
    *   We currently have a user dashboard that admin personnel will log into to make requests for new patients and view reports of patients for which they have requested information. We eventually want to remove all humans from the loop by directly integrating into our partner provider's EMRs so that information is seamlessly included within a patient's chart as soon as a new appointment is created. Most of our providers use OncoEMR or iKnowMed so we will begin with these integrations. HL7 is a set of standards that define how medical information is collected, processed, and exchanged. Through an HL7 connection, we will pull information from our client's EMR using the demographics of patients that have upcoming appointments. We will then use this to create our patient reports before pushing them into the EMR.
3.  **Deploy our own LLM to handle patient information structuring.**
    *   We are currently using Azure's GPT-3.5 model to take the filtered, unstructured text we pull from the exchanges and structuring this data into an easy-to-read report. We currently face occasional token and timeout issues depending on the size of our data and the traffic during the day. To ensure greater consistency in our model's performance, improve processing time, and reduce costs, we will deploy our LLM fine-tuned for our particular use case to ensure we structure our retrieved records most efficiently.

## Q2 2024

1.  **Develop and validate CommonWell connection (continued).**
2.  **Conduct required testing for eHealth Exchange (continued).**
3.  **Build modular filter capabilities to allow for easy customization of reports from practice to practice.**
    *   Currently, we create a standardized report for our practices based on common feedback regarding what information is relevant for that patient's care. However, across different clinics, and even across different physicians at one clinic, there are varying preferences with regards to the type of information and the magnitude of information that is relevant for care. While admin staff can currently request specific information on a per patient basis manually through our request option, we will eventually bake the preferences of individual providers and practices directly into their Solstice profile.
4.  **Integrate diagnosis-specific checklists into Solstice's reports.**
    *   For patients with different diagnoses, practices generally have checklists for the information they need for a particular diagnosis. Similar to the feature above, we want to integrate those preferences directly into the dashboard instead of requiring practices to manually customize each request.
5.  **Launch clinical summary feature.**
    *   Currently, we do not modify any of a patient's information when presenting it to a provider, we simply filter and structure the information to make it easier to read. We want to reduce the time it takes for a provider to review a patient's chart by creating a summary of their prior medical history (including relevant labs and tests) into a singular document the physician can peruse before they treat them.

## Q3 2024

1.  **Build and implement our own APIs that retrieve information from eHealth Exchange and CommonWell and deduplicate/clean information.**
    *   Once we have received approval from eHealth Exchange and CommonWell, we will need to access our connections to both of these exchanges through our own API. We will combine the information from both sources together, deduplicate any redundancies, and clean it up prior to ingesting it into our pipeline.
2.  **Automate MIPS reporting (https://qpp.cms.gov/mips/quality-requirements).**
    *   Healthcare is shifting from a fee-for-service to a value-based care model. MIPS (Merit-based Incentives Payment System) is a program through Medicare that rewards practices for meeting certain quality metrics. One of these metrics is the quality of prior records they obtain per patient. We will automate the completion of MIPS paperwork for this particular metric using statistics regarding the data we were able to pull for these practices. This will help these practices get higher reimbursement from CMS.
3.  **Integrate tool for HCC coding to calculate appropriate risk-adjusted factor (RAF) scores for providers under value-based care.**
    *   Under value based care agreements, providers are reimbursed for patients according to that patient's perceived risk. This risk is calculated based on comorbidities the patient has and certain demographics. To appropriately calculate this risk score, providers need to have a proper understanding of that patient's prior medical history. Given Solstice is already aggregating prior medical history, we will use this information to calculate appropriate RAF scores that providers will submit to payers to get appropriate reimbursements for their patients. This work is currently done manually by billing specialists during the new patient intake process when administrative staff members retrieve patient records.

## Q4 2024

1.  **Flag inclusion/exclusion criteria in patients' charts to match them to clinical trials.**
    *   Clinical trial participation in the community setting is something pharmaceutical companies have been hoping to promote for years. The difficulty lies in identifying appropriate patient's in the community setting for these trials. We will utilize all of a patient's prior medical records (genetic markers, clinical markers, demographics information, socioeconomic information, diagnoses) and net new information about them in the client's EMR to identify appropriate clinical trials for a patient and flag this information to the providers.
2.  **Embed care recommendations into the Solstice's clinical summary reports.**
    *   Based on a patient's prior medical records, we will eventually identify certain tests that the patient is missing, relevant care options that make the most sense given the patient's comorbidities and flagging particular components of a patient's prior medical history that the doctor should be aware of. Through this, we will enhance the care experience for physicians, reducing the amount of time they need to interpret assessments from prior physicians.