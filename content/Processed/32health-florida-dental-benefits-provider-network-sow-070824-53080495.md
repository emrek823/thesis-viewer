---
source_pdf: "https://drive.google.com/file/d/18e7HAv8dA3CNgNLrrXuqpowoUDE8LlMW/view"
drive_folder: "Portfolio/LightSpun/Series A Data Room/Contracts/FDB"
type: portfolio
company: LightSpun
ingested: 2025-12-27
original_filename: "32Health Florida Dental Benefits Provider Network SOW 070824.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/18e7HAv8dA3CNgNLrrXuqpowoUDE8LlMW/view)

# Statement of Work - Provider Network Management

**June 14, 2024**

This agreement is a Statement of Work (SOW) to the Master Service Agreement (Agreement) between 32Health and FDB, signed 06/08/2023. Furthermore, this agreement details the specific requirements for the **Provider Network Management Module** in addition to the 32Health Platform services that 32Health already provides for FDB ("Client"). To the extent there is a conflict between this addendum and the Master Service Agreement, the terms and conditions of the Master Service Agreement shall control.

FDB chose 32Health's **Provider Network Management Module** to manage provider application, data, recruiting, contracting, credentialing, and re-credentialing processes for the enterprise. 32Health shall deliver the following services to FDB. Further details of these services are covered in section 1 of this document.

## SECTION 1: CREDENTIALING & RECREDENTIALING

A. 32Health shall provide a SaaS for Credentialing and Recredentialing services and shall perform the following credentialing and re-credentialing verification and validation services for each provider or applicant dentist on the FDB provider network as set forth below -

| Credentials Element Verified              | Primary Source                                                              | Frequency of Verification                                         |
| :---------------------------------------- | :-------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| Dental Licensure                          | State Licensing Board - FL and TX                                           | Initial Credentialing/Recredentialing and Every 36 months         |
| DEA Registration/CDS (if applicable)      | DEA/CDS                                                                     | Initial Credentialing/Recredentialing and Every 36 months         |
| NPI                                       | NPPES                                                                       | Initial Credentialing/Recredentialing and Every 36 months         |
| NPDB                                      | NPDB                                                                        | Initial Credentialing/Recredentialing and Every 36 months         |
| OIG                                       | OIG                                                                         | Initial Credentialing/Recredentialing and Monthly for MAO providers |
| SAM                                       | SAM                                                                         | Initial Credentialing/Recredentialing and Monthly for MAO providers |
| Medicare Opt Out                          | CMS                                                                         | Initial Credentialing/Recredentialing and Monthly for MAO providers |
| Preclusion List                           | CMS                                                                         | Initial Credentialing/Recredentialing and Monthly for MAO providers |
| AHCA                                      | Florida Agency for Health Care Administration Medicaid Sanctioned Providers/AHCA | Initial Credentialing/Recredentialing and Monthly for MAO providers |
| Education                                 | State Licensing Board (State Licensing Boards for FL and TX verifies themselves) | Initial Credentialing &/or if any new specialty degree obtained   |
| Board Certification (if applicable)       | Dental Specialty Boards (12)                                                | Initial Credentialing/Recredentialing and Every 36 months         |
| Certificate of Insurance (Professional Liability Insurance) | Self-reported by dentist that they have the following insurance coverage: $100,000 per claim amount and $300,000 Annual Aggregate Amount | Initial Credentialing/Recredentialing and Every 36 months         |
| Work History                              | Self-reported on application, CV or resume                                  | Initial Credentialing                                             |
| Provider Network Directory Verification   | FDB Provider Directory                                                      | Initial Credentialing/Recredentialing and Every 36 months         |

B. 32Health shall perform Credentialing activities through primary source verification or to industry standards as described in A. To the extent the primary source for verification of any item required herein changes, 32Health shall, upon the agreement of FDB, use the new primary source for verification purposes. If the new primary source verification requires external fees that are not covered within the agreement, FDB shall reimburse 32Health for those fees.
C. To the extent required for purposes of this Agreement and permissible under Applicable Law, Applicable Standards and other applicable FDB agreements, FDB shall appoint 32Health as its designee, to request from others information regarding the professional credentials and qualifications of Applicant Dentists and Participating Dentists. This may include written authorization to contact professional certification boards, state regulatory and licensing departments, professional liability insurance carriers, employers, hospitals where the Applicant Dentists and Participating Dentists have/had staff privileges, or any other organization or agency.
D. FDB acknowledges that 32Health will use certain forms, which shall be approved in advance by FDB, in connection with its performance of the Credentialing Services. If 32Health determines that such forms are not sufficient for this purpose, 32Health shall notify FDB of the same and correct such insufficiencies as soon as practicable. If FDB determines that any such form is insufficient, FDB shall notify 32Health of the same, and 32Health shall correct such insufficient form as soon as practicable. Notwithstanding the foregoing, all changes to forms require FDBs prior written approval.
E. FDB reserves the right, in its sole discretion, to include or exclude any dental provider in a FDB Network.
F. FDB is responsible for a Credentialing Committee that will review and approve the providers from the Provider Network module.
G. 32Health shall automate the majority of the credentialing process through APIs (Application Programming Interface) to complete primary source verifications in the states where FDB does business.
H. 32Health shall automate the re-credentialing process by applying the same APIs outlined above for the credentialing process.
I. The detailed flow for credentialing is shown below:

## Workflow Diagram: Real-time credentialing and AI rules-based validation of documents submitted

This diagram illustrates the flow for credentialing and re-credentialing.

**Components:**
*   **Provider/Dentist:** Initiates the process.
*   **Online Application:** Submitted by the provider.
*   **Self-Service Provider Portal:** Where the provider interacts.
*   **Provider Network Module:** Central module for managing the network.
*   **32Health Credential AI/RPA Interface:** Handles automated verification and validation.
    *   Connects to **FL & TX States License Verification**.
    *   Connects to **Specialty Boards**.
    *   Connects to **DEA Registration**.
    *   Connects to **OIG, SAMS**.
    *   Connects to **NPI, NPDB**.
    *   Connects to **Education, Work History**.
    *   Connects to **Certificate of Insurance**.
    *   Connects to **Medicare Opt Out Preclusion List Verify Comply AHCA**.
*   **Ongoing Monitoring & Save Documents:** Continuous monitoring and document storage.
*   **Generate Notifications & Documents:** System for generating communications.
*   **Database of Credentialing Records:** Stores all credentialing information.
*   **FDB Committee Review:** Final review and approval step.

**Flow:**
A provider/dentist submits an Online Application via the Self-Service Provider Portal. This information feeds into the Provider Network Module. The 32Health Credential AI/RPA Interface then performs real-time credentialing and AI rules-based validation by interacting with various primary sources (State License Verification, Specialty Boards, DEA, OIG, SAMS, NPI, NPDB, Education, Work History, Certificate of Insurance, Medicare Opt Out/Preclusion List/AHCA). Results are processed for ongoing monitoring, document saving, and generating notifications/documents. All credentialing records are stored in a database. Ultimately, the FDB Committee performs a review based on this validated information.

## SECTION 2: PROVIDER PORTAL

32Health shall create an external Self-Service Portal for Providers that includes the following capabilities:

A. The web portal shall allow providers to complete dental network applications to apply to be on the FDB network.
B. The web portal shall allow the dentist to know the real-time status of the network application, contracting, credentialing, and re-credentialing process.
C. The web portal shall allow uploading network-related documentation such as credentialing applications, re-credentialing application, attestations, resume, CV,, Board Certification Certificates, Malpractice Insurance certificate, legal documents, etc.
D. The web portal shall allow the dentists to update information pertaining to the provider office, billing address, and provider information.
E. The web portal shall allow dentists to self report disciplinary actions.
F. Through the provider portal, providers will be able to update their office and personal information. These changes will be captured and the report will be available to FDB.
G. Through the web portal, the provider will be able to access all contracts digitally on cloud and to be on-boarded with FDB.

## SECTION 3: PROVIDER NETWORK MANAGEMENT

32Health shall create a provider network management module that includes the following capabilities:

A. 32Health shall implement an internal Provider Portal for the Recruiting Process, which will identify out-of-network providers to recruit. From the portal, FDB can send an invitation to join the network, with the link to the Provider Self-Service Portal to complete the in-network application. The internal portal shall have a map view of the providers with geographical filters for 3-digit zip code, county, and state and dental specialties
    a. Configure the contract generation process for new and in-network provider contracts. This would comprise of designing, editing, templatizing, automating, integrating, storing, and tracking contracts for provider contracting.
    b. Set up internal stakeholders (eg., provider relations, legal team, dental consultants, actuarial teams) roles and permissions to review and validate fee schedules and contract terms.
    c. Configure fee negotiation process for the in-network dentists through internal portals and provide real-time status updates within the provider portals
B. FDB can track and check the latest status on application, contracting, credentialing and re-credentialing of all providers.
C. FDB can track and consolidate all email communication and disciplinary actions requiring legal and dental consultants review and determinations.
D. 32Health shall streamline the current document (forms and letters) notification and acknowledgment process with workflow automation for providers relating to the provider network.
E. Convert current FDB provider network data and leased data structure (if any) to 32health's data platform
F. FDB can generate correspondence documents such as contract letters, re-credentialing letters, approval/denial letters and re-credentialing termination letters, attach to the providers' record, and download any correspondence documents (if needed).
G. FDB can generate and download credential and re-credential primary source verifications of all credential elements verified in Section 1.
H. 32Health shall create a workflow for FDB associates to manage the new applications, contracts, initial credentialing, re-credentialing, documentation, tracking providers, handling providers with sanctions, committee review, and sending correspondence to providers. Documentation will include the credentialing verification form and the credentialing and re-credentialing checklist.
I. Provider Network Directory Verification will be sent quarterly via the provider portal to providers to update their office and provider information, capture the changes, and report the changes to FDB. This will allow FDB to update the provider directory and report the changes to their clients. Tracking of providers who have updated and haven't updated the directory will be done quarterly and a report will be available to FDB. Workflow will be established for FDB associates to manage the process and for associates to manually update and to take notes. In addition, monthly a report will be given capturing any changes a provider makes through the provider portal change management process.
J. Through the module, FDB can notify new dentists to recruit and manage the contracting and on-boarding of dentists into the FDB network.
K. The overall flow of the provider network management module is shown below:

## Workflow Diagram: Provider Recruiting, Credentialing, Contracting and Re-credentialing

This diagram outlines the complete flow for provider recruiting, credentialing, contracting, and re-credentialing, including major components.

**Major Components Listed:**
1.  External Provider Portal
2.  Internal Provider portal
3.  Primary source verification (a. License, b. NPI, c. DEA)
4.  Contracting and Fee Negotiation
5.  Documentation workflows and Notifications (a. New Application, b. Re-credentialing, c. Leased Network)
6.  Reporting and Auditing
7.  Provider Network Data Conversion and Leasing Data Synchronization
8.  Provider Payment Rails (ACH, Check, etc)

**Flow:**

**Initial Verification & Application:**
*   Various verifications are performed: 50 States License Verification, DEA Verification, NPI Verification, Malpractice Insurance Verification, NPDB Queries, Provider Directory Validation. These inputs feed into the "Credentialing Re-Credentialing" block.
*   Provider Recruiting leads to the External Provider Portal, where an Online Network Application is submitted.
*   Paper, Fax, Email, Call Form Applications are handled by a "Mail Room".
*   All applications eventually feed into "AI Processing."

**Processing and Decision Making:**
*   From "AI Processing" or "Credentialing Re-Credentialing," applications can go to "Compliance."
*   From "Compliance," a check is made: "Requires legal/Dental Review?"
    *   **Yes:** Document is submitted to a "Legal/Dental Consultant Review Document." If approved by "Legal Approve?", it proceeds.
    *   **No:** Leads directly to "Contracting."
*   If "Legal Approve?" is **No**, it leads to "Generate automatic Denial/Approval Letter."
*   "Mail Room" can also feed into "AI Processing" and directly to "Generate automatic Denial/Approval Letter."
*   Documents can be saved to a "document-store."

**Contracting and Onboarding:**
*   From "Contracting," a "Fee Negotiation" step occurs. A check is made: "Does Qualify for negotiation?"
    *   **Yes:** Proceed with negotiation.
    *   **No:** Proceed without negotiation.
*   Once contracting and fee negotiation are complete, a "Signed Contract" is reached.
*   The process then moves to "Onboard / Update Provider."
*   The entire process (Recruiting, Credentialing, Contracting, Re-credentialing) is supported by "Document Workflow Automation: Templates for Provider, Member notification" and interacts with an "Update Portal."

## SECTION 4: MILESTONES & TIMELINE

| Key Milestones                                | Date          |
| :-------------------------------------------- | :------------ |
| Signed SOW                                    | 6/28/24       |
| Implementation, Integration & System Testing Ready | 7/15/24       |
| User Training & User Acceptance Testing       | 7/15/24-7/24/24 |
| Go-Live Production                            | 7/29/24       |

## SECTION 5: PRICING & COMPENSATION

This Order is issued pursuant to the 32Health MSA- Subscription Agreement (the “Agreement”). Any term not otherwise defined herein will have the meaning specified in the Agreement.

A. The following fees shall be paid by FDB to 32Health:

| SAAS Services / Platform Access / Professional Services                                                                       | Start Date | End Date   | Subscription Term | Fee (USD)                                                                                                                                                                                                                                                                                             |
| :---------------------------------------------------------------------------------------------------------------------------- | :--------- | :--------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Professional Services: Integration, implementation, data conversion, and training for AI-copiloted provider credentialing, credentialing, contracting and document workflow automation. | 1/1/2024   | 7/29/2024  | N/A               | One time fee: Professional Services for Implementation and Integration of $15K is waived                                                                                                                                                                                                              |
| Platform module bundle: Provider Credentialing, re-credentialing, recruiting, contracting, onboarding and document workflow automation                                                    | 7/29/2024  | 7/28/2026  | 24 months         | Flat fee of $50K/year up to 2000 unique providers that will be managed by 32Health. Flat fee of $80K/year for up to 4000 unique providers that will be managed by 32Health. $10/year for each additional provider above 4000 unique providers managed by 32Health. |

B. FDB is responsible for any external/additional fees from verification performed with vendors - e.g. Specialty Board Certification, NPDB, DEA, Medicare Opt Out, Preclusion list, Verify Comply, AHCA & Directory Verification. 32Health will bill every month.
C. 32Health understands that FDB does not need any external education and work experience verification. FDB is responsible for any fees related to external verification (if required) for education and work experience. 32Health will bill every month.
D. The payments shall be made in twelve (12) monthly payments due and payable on or before the fifteenth (15th) day of the month following the month for which the payment is due.

IN WITNESS WHEREOF, the parties hereto have caused this SOW to be executed by their duly authorized representatives as of this day and year first written above.

| Florida Dental Benefits, Inc. | 32Health              |
| :---------------------------- | :-------------------- |
|                               | -DocuSigned by:       |
|                               | Shaju Puthussery      |
|                               | -FBighatfitBlock      |
|                               | **Shaju Puthussery**  |
|                               |                       |
|                               | CEO                   |
|                               | 7/8/2024              |

_32HEALTH_
6

_32HEALTH_
7