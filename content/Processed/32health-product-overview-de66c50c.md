---
source_pdf: "https://drive.google.com/file/d/1hH3nIDz0oPuP-HTdkYW5lDtbdJKRuFtT23-9PZDbeAE/view"
drive_folder: "Portfolio/LightSpun"
type: portfolio
company: LightSpun
ingested: 2025-12-27
original_filename: "32Health Product Overview"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1hH3nIDz0oPuP-HTdkYW5lDtbdJKRuFtT23-9PZDbeAE/view)

## Slide 1: 32Health Core Features

**32Health**
**Core Features**
**Core Administrative Platform Solution**

Confidential & Proprietary
1

## Slide 2: Overall Architecture

Confidential & Proprietary

**Overall Architecture**

**SaaS Modules**
1.  Eligibility Management
2.  Provider Management
3.  Provider Network
    a. Recruitment
    b. Credentialing
    c. Contracting
    d. Re-credentialing
4.  Benefit and Policy Management
5.  Groups Management
6.  Claim Adjudication
    a. AI Claims Automation
7.  EDI
8.  Financial
    a. Billing
    b. Payment
    c. Receivables
9.  Portals and Support
10. AI Assisted Contact Center
11. Enterprise Reporting
12. Broker Management
13. Sales Management
14. Compliance & Audit

*(Image description: A detailed architectural diagram showing various modules and their interactions. Key components include:)*
*   **Provider Network Portals, Developer Portals, Broker Portals, Employer Groups Portals.** These feed into an "External Portals/Apps" box.
*   **Provider** (EDI 837P/I, EDI 270/271, EDI 270/271/834, EDI 835) and **EDI Interface**.
*   **Paper/Fax Email/Web Claims** and **Multimodal AI** feed into the EDI Interface.
*   **AI Enabled Claim Administration Adjudication Engine** is central.
*   **AI Automated Data Process** receives input from the Adjudication Engine and other sources (X-rays, periodontal charts, intra-oral images, clinical dental images).
*   **Front Office Automated Workflow System** includes:
    *   AI Assisted Contact Center
    *   Benefit & Clinical Policy Management
    *   Reporting
    *   Sales Quoting & Plan Implementation
    *   AI Assisted Underwriting & Premium Generation
    *   Compliance & Audit
*   **Back Office Automated Workflow System** includes:
    *   Case Management
    *   Provider Management
    *   AI Assisted Provider Network Management
    *   Reporting & Analytics
    *   Billing & Payment
    *   Eligibility Management
    *   Broker Management
    *   Document Center
*   **Payment Integrity Engine, Claims Rules Engine, Administrative and Clinical Edits** are part of the AI Automated Data Process.

2

## Slide 3: Product Modules

Confidential & Proprietary

**Product Modules**

*(Image description: A radial diagram with "Claims" at the center, surrounded by other modules connected by arrows.)*

*   **Claims** is connected to:
    *   Group/Member
    *   Plan/Benefits
    *   Predictive Analytics
    *   Financial
    *   Case Management
    *   Contact Center
    *   Office/DSO/Provider
    *   Network/Credentialing

3

## Slide 4: Topic 1: Group & Individual Administration

Confidential & Proprietary

**Topic 1: Group & Individual Administration**

*(Image description: A flowchart showing relationships between Group Configuration and other modules.)*

*   **Group Configuration (E01-G01-S01-FDG-C)** is central.
    *   Connected to **Benefit Plans & Products** (bidirectional arrow).
    *   Connected to **Sales & Brokers** (bidirectional arrow).
    *   Connected to **Billing/Receivables** (bidirectional arrow).
    *   Connected to **Members** (bidirectional arrow).

4

## Slide 5: Topic 1: Group Administration

Confidential & Proprietary

**Topic 1: Group Administration**

*(Image description: A hierarchical diagram illustrating the 32Health Group Structure.)*

**32Health Group Structure**
**E01-G01-S01-FDG-C**

*   **Entity (E)**
    *   Examples:
        *   Ameritas Life Insurance
        *   Ameritas Life Insurance of NY
        *   Ameritas TPA
        *   Ameritas Business Partner
*   **Groups Classification (G)**
    *   Employer Groups
    *   Individual Groups
*   **Sub Groups (S)**
    *   Examples:
        *   Max Dental Plans
        *   Lasik Plans
        *   High Deductible plans
*   **Types (Atypes/Btypes/Ctypes)**
    *   Atypes - Administrative Types (F/S/T/B)
        *   Fully Insured (F), Self Insured(S), TPA (T), Business Partner (B)
    *   Btypes - Benefit Types (D/V/M/H)
        *   Dental (D), Vision (V), Medical (M), Hearing (H)
    *   Ctypes - Community Types (G/I)
        *   Group (G), Individual(I)
*   **Line of Business (C/G)**
    *   Commercial (C)
    *   Government (G)

5

## Slide 6: Topic 1: Group Administration

Confidential & Proprietary

**Topic 1: Group Administration**
Group Hierarchy, Group Setup & Admin, Group Changes, Renewals

**Group Setup and Admin**
*   Setup a fully insured group with two divisions (e.g., active employees, retirees, and COBRA) and dental, vision, Lasik, and hearing product options
*   Ability to set various parameters at the Group level (i.e., waiting periods, open enrollment, multiple locations, alternate addresses needed for billing or mailing/correspondence purposes etc.)
*   Set-up of an ASO or self-funded group as well as a group that has one product that is fully insured and another that is self-funded (discuss billing, reporting options)
*   System’s ability to offer workforce management for group admin-related tasks, including the ability to track setup time / turnaround time
*   System’s support for employer/group administrator self-service options (e.g., self-bill, make eligibility changes (including the ability to see bill updates in real-time after changes are made), and make invoice payments via portals in real-time)
*   Ability to integrate with APIs to transfer group data into / out of the system (e.g., membership changes, claims data, renewal letters and documents, billing information and rates, policy information and changes, commission information, etc.), with support for sending automatic notifications to members / groups when changes are made

**Group Changes**
*   Ability to make a mass-group update (e.g., open enrollment changes, change to add or remove a benefit/product)
*   Termination and reinstatement of a group

**Renewals**
*   Ability to mass-upload rates generated outside of CAPS system (e.g., from TPA or actuarial)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Group" section is expanded, showing options like "Add Group", "Add Subgroup", "Add New Member". Other collapsed sections include "Provider Network", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

6

## Slide 7: Topic 2: Individual Administration

Confidential & Proprietary

**Topic 2: Individual Administration**
Individual Data Model, Individual Setup & Admin

**Individual setup & Admin**
*   Demonstrate the ability to integrate with APIs to transfer individual member data into / out of the system (e.g., membership changes, claims data, renewal letters and documents, billing information and rates, policy information and changes, etc.), with support for sending automatic notifications to members / groups when changes are made

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Group" section is expanded, showing options like "Add Group", "Add Subgroup", "Add New Member". Other collapsed sections include "Provider Network", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

7

## Slide 8: Topic 3: Member Services Platform

Confidential & Proprietary

**Topic 3: Member Services Platform**

*(Image description: A complex architectural diagram illustrating the Member Services Platform.)*

*   **Third Party Integration File / EDI / API**
    *   Member Benefits and Eligibility Queries
    *   Eligibility File Exchanges
*   **Workflow Automation**
    *   Member Look Up, Member Add, term and update
    *   Queue Management - Eligibility Queue
*   **Employer Groups**
    *   Dental Benefit underwriting (ASO)
    *   Setup plan allowed fees
    *   Setup eligibility file exchange
    *   Manage member term and update process
*   **Member Relations Team** (central hub)
    *   Internal Platform to manage business process (https://platform.32health.care)
*   **Employer Groups / Broker Self-Serve Portal** (https://portal.Group.care)
    *   1. Member Term/Add
    *   2. View member benefits
    *   3. Benefit & Eligibility Queries
    *   4. Messaging and Notifications
*   **Member Claims Resolution**
    *   Member Not Found
    *   Member Eligibility Mismatch
    *   Plan Fee Mismatch
    *   Member Complaints & Grievances
    *   Member Customer Support
    *   Payment Resolution
*   **Document Store**
    *   NLP Query Layer
    *   Member Eligibility Documents
*   **Database**
    *   Member
    *   Member Benefits
    *   Member Maximum
    *   Member Deductible
    *   Member Carry Over
    *   Fee Schedules
    *   Accumulators
    *   Member History
*   **AI Automation**
    *   Automated Form Processing (Email, Fax, Paper)
    *   1. Eligibility Terms, Add and Update

8

## Slide 9: ETL/ELT Pipelines - File Intake

Confidential & Proprietary

**ETL/ELT Pipelines - File Intake**

*(Image description: A data pipeline diagram illustrating file intake and processing.)*

*   **New file format** (input) -> Easy to integrate new adaptor -> **New Data adaptor**
*   **EDI, JSON, PDF, CSV, DOC, image files** (Provider, Member, Group, Office, DSO, Plan, Claims, Broker File Intake / Bulk Upload) -> **File Intake**
*   **Salesforce, SQL Server, Arvo.hbase, Hive, Application data sources** (Export) -> **Native Integration connectors** -> **File Intake**
*   **File Intake** -> **Data adaptor (if needed)** -> **Cloud Data Fusion** (which also links to **Workflows**) -> **ETL/ELT pipeline tech**

9

## Slide 10: Topic 3: Eligibility & Enrollment Data Process

Confidential & Proprietary

**Topic 3: Eligibility & Enrollment Data Process**

*(Image description: A flowchart showing the Eligibility & Enrollment Data Process.)*

*   **Eligibility Files** (source)
    *   Feeds into various inputs for "Extract Transform & Load Eligibility Files":
        *   Trading Partners (EDI)
        *   Business Partners (EDI/CSV)
        *   National Benefits Admin Platforms (EDI/CSV)
        *   State Medicaid Systems (EDI/CSV)
*   **Extract Transform & Load Eligibility Files**
*   **Error Reconciliation and Notifications**
*   **Update 32Health’s Eligibility Database**
*   **View update Member Records in 32Health App**

10

## Slide 11: Topic 3: Eligibility & Enrollment

Confidential & Proprietary

**Topic 3: Eligibility & Enrollment**
Electronic Enrollment, Enrollment, Employer/Group Administrator, Member Communication, Member Maintenance

**Electronic Enrollment**
*   Ability to intake and process electronic eligibility files in real-time, show status of files, and send file received notifications
*   Ability for business users to view, load, debug, and correct file uploads in standard and non-standard formats

**Enrollment**
*   Ability to support offering of a "menu" of plan options to members/dependents at time of enrollment (i.e., employer offers dental, vision, hearing, and member/dependent chooses from those options)
*   System’s ability to support dual eligibility with a primary designation of coverage, and view member COB details, including renewal information, follow-up dates, and comments
*   Ability to use one enrollment file for multiple products (e.g., dental, vision, and life)
*   Assignment of a PCP for a DHMO plan, and discuss the system’s ability to mass-assign and mass-update PCP for a group

**Employer / Group Administrator**
*   Ability to support self-service tools that allows for automatic upload and processing of group enrollment files in real-time (including termination or changes), and provide a dashboard for status, statistics, and error reporting
*   Ability to support a secure method (e.g., portal) to deliver notice of enrollment file errors to customer and facilitate resolution of specified errors
*   Ability to alert group administrator and member in various membership-related situations (e.g., over-age dependent terminations)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Members" section is expanded, showing options like "All Members", "Eligibility Load", and "Manual Review". Other collapsed sections include "Provider Network", "Group", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

11

## Slide 12: Topic 3: Eligibility & Enrollment

Confidential & Proprietary

**Topic 3: Eligibility & Enrollment**
Electronic Enrollment, Enrollment, Employer/Group Administrator, Member Communication, Member Maintenance
10:45-11:30 (45 Mins)

**Member Communication**
*   Ability to support mobile access for customers to view plan information in plain language (e.g., benefits, waiting periods, dates) and make updates to communication information (e.g., address, e-mail address, phone number) across different product types (e.g., dental, vision)
*   Ability to store multiple addresses (e.g., a member’s home address and school address)
*   How the above requirements can be supported through a member portal

**Member Maintenance**
*   Application of mass updates to member records for terminations/reinstatements/transfers
*   Ability to automatically recalculate waiting periods upon member transfer from one group or plan to another

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Members" section is expanded, showing options like "All Members", "Eligibility Load", and "Manual Review". Other collapsed sections include "Provider Network", "Group", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

12

## Slide 13: Topic 4: Billing and Financial Management

Confidential & Proprietary

**Topic 4: Billing and Financial Management**
Billing Configurations, Billing Output, Billing Reconciliation

**Billing Configurations**
*   Configuration of bundled premiums for multiple products (e.g., group dental, vision, hearing, disability) and multi-line products (e.g., administered by client & partners) and generate one invoice
*   Ability to initiate member billing post-enrollment, based on member record created in system
*   System’s ability to bill based on effective dates and make adjustments with past and future effective dates, ensuring synchronization with changes in eligibility, claims processed, etc.
*   Ability to accept payment directly from members (e.g., for Group or Individual plans)
*   Ability to adhere to and configure different billing schedules and frequencies (e.g., weekly, monthly, quarterly, annually) including payroll deduct cycles for different groups and members
*   System’s ability to support both balance-forward as well as matched premiums to dates of service for missed / short payments

**Billing Output**
*   System’s ability to integrate with other billing and financial management systems (e.g., accounting systems, general ledger, etc.)
*   Ability to support mapping to different financial arrangements (fully insured, shared risk / retrospective experience rating, self-funding, etc.) within the same group and Subgroup, and process changes therein for financial reporting
*   Ability to itemize rates when invoicing groups (including breakout of rates from bundled products) and the ability to generate bills for specific individual members separately from the group
*   System’s ability to track claim savings / COB savings when client is a secondary payer, and apply these savings to additional member claims

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Financial" section is expanded, showing options like "Billing", "Receivables", "Claim Payments", "Broker Commissions", and "Settings". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

13

## Slide 14: Topic 4: Billing and Financial Management

Confidential & Proprietary

**Topic 4: Billing and Financial Management**
Billing Configurations, Billing Output, Billing Reconciliation

**Billing Reconciliation**
*   System’s ability to automatically reconcile between claims, enrollment, and billing modules for retroactive enrollment adjustments
*   Ability to ingest check/ACH status for payments/settlements and accommodate different payment types (e.g., check vs. ACH) for a single payee including the ability to administer refunds by the same way the payment was made (check, credit card, etc.)
*   System’s ability to set threshold amounts for premium payment (i.e., premium is considered paid in full after 80% paid)
*   Ability to determine which premium will be paid first in the event of an underpayment related to bundled premiums (e.g., pay the dental portion of the premium prior to paying vision portion)
*   System’s ability to report on a variety of billing and financial data, generate reports, and share data with additional entities, including an enterprise data warehouse

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Financial" section is expanded, showing options like "Billing", "Receivables", "Claim Payments", "Broker Commissions", and "Settings". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

14

## Slide 15: Topic 5: Benefits Administration

Confidential & Proprietary

**Topic 5: Benefits Administration**
Benefit Configuration, Benefit Changes

**Benefit Configuration**
*   Configuration of a benefit package (e.g., covered procedure codes, maximums, deductibles, etc.) and explain the overall product/benefit data model and how benefits are attached to members and/or groups
*   Ability to configure plans with secondary deductibles and maximums (e.g., after first maximum it reached, additional dollars will be covered at a smaller coinsurance %), prior authorizations requirements, COB options
*   Ability to configure rewards and incentive programs in the system
*   Setting custom EOB messages for specific procedure codes, variable by group or plan and ability to set EOB messages based on location (e.g., state disaster directive)
*   Ability to set student-only or child-only benefits that differ from adult subscriber benefits
*   Configuration of various family structures, including the ability to offer shared family maximums

**Benefit Changes**
*   Ability to change a benefit package independent of enrollment processing and automatically identify enrollment/claims impact based on retroactive benefit changes
*   Ability to process benefit changes with future effective dates
*   Ability to run reports to compare product/benefit packages and identify differences

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Plan Configuration" section is expanded, showing options like "All Plans", "Plan Bundles", "All Provider Fees", "All Plan Fees", "All Networks", "Fulfillment Templates", and "Plan Fulfillment". Other collapsed sections include "Provider Network", "Group", "Members", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

15

## Slide 16: Topic 6: Casepoint Capabilities

Confidential & Proprietary

**Topic 6: Casepoint Capabilities**
Multi-Carrier Products

**Casepoint**
*   Ability to administer ancillary benefits (e.g., life, disability) and accept related member data fields (e.g., age / age bands, income) for use in calculation of rates / premiums
*   Ability to attach multiple products, spanning carriers / partner entities, to groups and members (i.e., dental and vision benefits from one carrier, with life and disability from another carrier)
*   Ability to intake and process an eligibility file prior to sharing with an additional carrier for further processing and ability to send eligibility files to carrier(s)
*   Ability to bill combined premiums for products that span carriers, but split payment between carriers and send payment detail via file to the carrier(s)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Plan Configuration" section is expanded, showing options like "All Plans", "Plan Bundles", "All Provider Fees", "All Plan Fees", "All Networks", "Fulfillment Templates", and "Plan Fulfillment". Other collapsed sections include "Provider Network", "Group", "Members", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

16

## Slide 17: Topic 8: Claims Processing Architecture

Confidential & Proprietary

**Topic 8: Claims Processing Architecture**

**Link to the diagram**

*(Image description: A highly complex and detailed architectural diagram for claims processing. It includes numerous interconnected modules, queues, databases, and services. Due to the extreme density and small font size, detailed transcription of all labels is impractical for structured markdown. The diagram illustrates stages from claim intake (manual, EDI, portal) through eligibility, provider, plan, adjudication, rules engine, and financial processing, leveraging AI and various data stores.)*

17

## Slide 18: Claims Processing Architecture

Confidential & Proprietary

**Claims Processing**

**Link to the diagram**

*(Image description: This is an identical, zoomed-in version of the complex architectural diagram from Slide 17, making detailed transcription of all labels impractical for structured markdown due to extreme density and small font size.)*

18

## Slide 19: Claims Processing

Confidential & Proprietary

**Claims Processing**

*(Image description: An identical radial diagram as on Slide 3 with "Claims" at the center, surrounded by other modules connected by arrows.)*

*   **Claims** is connected to:
    *   Group/Member
    *   Plan/Benefits
    *   Predictive Analytics
    *   Financial
    *   Case Management
    *   Contact Center
    *   Office/DSO/Provider
    *   Network/Credentialing

19

## Slide 20: Integration - Paper Claims

Confidential & Proprietary

**Integration - Paper Claims**

*(Image description: A flowchart detailing the workflow for processing paper claims.)*

*   **(Left Column - Purple - Paper Claims Workflow)**
    *   **1:** Input pdf docs into outgoing SFTP folder
    *   **6:** Review and Correct claim forms on 32Health app
    *   **6:** 837D EDI process
    *   **6:** Clinical review per attachment (claim number)
*   **(Right Column - Green - Main Processing Flow)**
    *   **2:** Extract pdf pages
    *   (Decision: Is page claim form?)
        *   **Yes** -> **2:** Extract claim forms
        *   **No** -> (Decision: Is page back of claim form?)
            *   **Yes** -> **3:** Extract unique ID per claim form
            *   **No** -> (Decision: Are attachments present?)
                *   **Yes** -> **5:** Create attachment info (Include attachment info on 837D PWK segment)
                *   **No** -> (End)
    *   **2:** Store review/rejected claim forms
    *   **5:** Create a single 837D file
    *   **5:** Create viewpdf for EDI 837D attachments
*   **32Health** (at bottom right)

20

## Slide 21: Topic 7: Claims Processing

Confidential & Proprietary

**Topic 7: Claims Processing**
Claims Intake, Claims Validation & Triage, Claims Adjudication, Claims Workflow, Claim Payment

**Claim Intake Demo**
*   **Data Entry**
    *   View claims generated by our ML models
    *   Verify ML generated claims
*   **EDI 837D, Claim Adjudicated View, EOB, EOP**
*   **Correspondence Automation**
*   **Periodontal Chart Inference**
*   **Narratives**
*   **Vision Claim**

**Claim Intake**
*   Ability to process claims against a member immediately after enrollment
*   Ability to accept claims in real-time via EDI transactions (including transactions from clearinghouses)
*   Ability to accept claims directly from a provider portal (without a clearinghouse)
*   Ability to have a consistent process for claim intake across different channels (e.g., paper, electronic) leveraging the same claim rules and validation edits

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Claims" section is expanded, showing options like "Claims Dashboard", "All Claims", "Manual Claims (AI)", "Claim Data Entry", "Claims Queues", and "Utilization Review". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

21

## Slide 22: Topic 7: Claims Processing

Confidential & Proprietary

**Topic 7: Claims Processing**
Claims Intake, Claims Validation & Triage, Claims Adjudication, Claims Workflow, Claim Payment

**Claim Validation & Triage**
*   Ability for certain claims to be flagged for higher priority processing based on business-user-configured rules

**Claim Adjudication**
*   Ability to auto-adjudicate claims in real-time
*   Ability to auto-adjudicate Ortho and LASIK claims
*   Usage of a flexible claims rules engine that is configurable by business users

**Claim Workflow**
*   Ability to manually apply claim edits during or after initial adjudication
*   Ability to engage in workforce management for claims processing teams (including oversight of work queues, auditing claims processors, SLA metrics, etc.)

**Claim Payment**
*   Ability to store claim payment statistics (e.g., include data such as claims paid date, claims payment cycle/check run information, check number, EFT routing information, status, date, time, etc.)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Claims" section is expanded, showing options like "Claims Dashboard", "All Claims", "Manual Claims (AI)", "Claim Data Entry", "Claims Queues", and "Utilization Review". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

22

## Slide 23: Provider Services Platform

Confidential & Proprietary

**Provider Services Platform**

*(Image description: A detailed architectural diagram for the Provider Services Platform.)*

*   **Third Party RPA / API Integration**
    *   50 states Provider Licenses
    *   National Provider Data Bank (NPDB)
    *   DEA
    *   NPPES NPI
    *   Provider Directory Validation
*   **Workflow Automation**
    *   Lookup - License, NPI, DEA, NPDB, Disciplinary, Malpractice
    *   Queue management - Legal, Regulatory, Recruiting, Contracting, Support
*   **Provider Relations Team** (central hub)
    *   Internal Platform to manage business process (https://platform.32health.care)
*   **Provider Self-Serve Portal** (https://provider-portal.32health.care)
    *   1. Add or update information
    *   2. Upload documents
    *   3. Sign contracts
    *   4. Message and notifications (Email, Fax, SMS)
*   **Provider Claims Resolution**
    *   Provider Not Found
    *   Info Mismatch NPI, Address, TIN
    *   Fee Mismatch
    *   Provider Complaints & Grievances
    *   Owned and Leased Fee discrepancies
    *   Payment Resolution
*   **Provider Recruitment And Contracting**
    *   Application
    *   Credentialing
    *   Fee Negotiation
    *   Contract Management
    *   Re-Credentialing
    *   Auditing & Reporting
*   **Document Store**
    *   NLP Query Layer
    *   Contract Documents
    *   Credentialing Documents
*   **Database**
    *   Provider
    *   Leased Network
    *   Provider Credentials
    *   Business Entity
    *   Owned Network
    *   Fee Schedules
    *   Provider Locations
    *   DSO / Groups
*   **AI Automation**
    *   Automated Form Processing (Email, Fax, Paper)
    *   1. Recruitment
    *   2. Contracting
    *   3. Claim

23

## Slide 24: Provider Services Platform

Confidential & Proprietary

**Provider Services Platform**

*(Image description: A simplified workflow diagram for Provider Network Management.)*

*   **Provider Network Module** (top box)
    *   Flows down to:
        *   Recruiting
        *   Credentialing
        *   Contracting
        *   On-boarding
*   These four modules (Recruiting, Credentialing, Contracting, On-boarding) also feed into **DSO/Large Group Practices/ Individual Offices: Configuration for Claims Adjudication**.
*   **DSO/Large Group Practices/ Individual Offices: Configuration for Claims Adjudication** then flows down to:
    *   Add/Update/Terminate Practices
    *   Add/Update/Terminate Dentists
    *   Add/Update/Terminate Networks & fee Schedules

24

## Slide 25: Topic 8: Provider & Network Management

Confidential & Proprietary

**Topic 8: Provider & Network Management**
Provider Data Management, DHMO Provider Assignment, Provider Portal, Provider Reimbursement

**Provider Data Management**
*   Business user navigation and configuration within provider hierarchy / data model
*   Onboarding process of a new provider (from complete provider documents and contracts through set up)
*   System’s ability to support a configurable, role-based workflow engine to support Provider Data Management
*   Ability of the system to ingest leased network files and fully support configuration and maintenance of leased networks
*   Ability to match multiple networks easily to provider, location, and business affiliations
*   Setup of a Dental Service Office (DSO) and related activities (e.g., initial setup and configuration, ongoing maintenance, and reporting) and discuss the ability to consume contracting / credentialing data at an individual provider level

**Provider Reimbursement**
*   Ability to manage fee schedules (e.g., create, update, and retrieve) based on product, specialty, region, provider, and other factors
*   Ability to load and maintain fee schedules from multiple network leasing partners and have error checking capabilities prior to load
*   Ability to stack, wrap, and apply stacking rules for multiple networks (e.g., pay the lesser of, pay proprietary first and lowest rental second, etc.)
*   Ability to support various provider preferences in reimbursement methods (e.g., capitation, global, salary, pay for performance, etc.) and payment methods

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Providers" section is expanded, showing options like "Claims Dashboard", "All Claims", "Manual Claims (AI)", "Claim Data Entry", "Claims Queues", and "Utilization Review". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

25

## Slide 26: Real-Time Credentialing Process

Confidential & Proprietary

**Real-Time Credentialing Process**

*(Image description: A detailed flowchart illustrating the real-time credentialing process.)*

*   **Update Portal** (top right)
    *   Dental Provider Office
*   **Provider Recruiting** -> External Provider Portal -> Online Network Application
*   **50 States License Verification** -> Re-credentialing Scheduled Job
*   **DEA Verification** -> RPA and API
*   **NPI Verification** -> Credentialing Re-Credentialing -> AI Processing -> Mail Room - Paper, Fax, Email, Call Form Application -> Mail Room
*   **Malpractice Insurance Verification**
*   **NPDB Queries**
*   **Compliance**
*   **Provider Directory Validation** -> Save documents to document store

*   **Process Flow for Credentialing and Contracting**
    *   **Compliance** (Requires Legal/Dental Review? Yes/No) -> **Submit Legal/Dental Consultant Review Document** (Legal Approve? Yes/No) -> **Generate automatic Dental/Approval Letter**
    *   **Contracting** -> (Does Qualify for negotiation? Yes/No) -> **Fee Negotiation**
    *   **Signed Contract** -> **Onboard /Update Provider**

*   **Provider Recruiting, Credentialing, Contracting and Re-credentialing** (main process)

*   **Major Components** (listed at bottom left)
    1.  External Provider Portal
    2.  Internal Provider portal
    3.  Primary source verification
        a. License
        b. NPI
        c. DEA
    4.  Contracting and Fee Negotiation
    5.  Documentation workflows and notifications
        a. New Application
        b. Re-credentialing
        c. Leased Network
    6.  Reporting and Auditing
    7.  Provider Network Data Conversion
        a. Old leased network information
    8.  Provider Payment Rails (ACH, Check, etc)

26

## Slide 27: Topic 8: Provider & Network Management

Confidential & Proprietary

**Topic 8: Provider & Network Management**
Provider Data Management, DHMO Provider Assignment, Provider Portal, Provider Reimbursement

**Provider Portal**
*   Ability to support various tasks through a provider portal, including check member eligibility, view claim status, view claim payment, find contracting status, etc.
*   Ability to allow claims submission through provider portal (including pre-determinations)
*   System’s support for various DSO and individual provider activities through a portal (e.g., self-enroll, sign, and execute applications/agreements, manage rosters, perform change management, perform credentialing/recredentialing, pull current fee schedule(s), add new location, add new provider members etc.)
*   Notifying a provider of outdated or missing information (outdated credentialing, verifying network information, incomplete onboarding, change management requirements etc.)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Provider Network" section is expanded, showing options like "Join Network", "Application Status", "Update Information", "Report Disciplinary Actions", "Realtime Credentialing", "Contracting", and "Recredentialing". Other collapsed sections include "Dashboard", "Group", "Members", "Plan Configuration", "Office/DSO", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

27

## Slide 28: Topic 9: Contact Center AI

Confidential & Proprietary

**Topic 9: Contact Center AI**

*(Image description: An architectural diagram showing the Contact Center AI solution.)*

*   **Customer** (left) interacts via **Channels**:
    *   Voice
    *   SMS
    *   Mobile Web
    *   Chat
*   **Channels** connect to **Google Cloud Contact Center AI** (top central cloud icon).
    *   **Google Cloud Contact Center AI** consists of:
        *   Cloud Natural Language API
        *   Cloud Speech-to-Text API
        *   Cloud Translation API
*   These APIs feed into **32Health Bot**.
    *   **32Health Bot** connects to:
        *   Claims DB
        *   Member DB
        *   Provider DB
*   **32Health Bot** (via Agent) can interact with an **Agent** (bottom right).
*   Integrations mentioned: NICE, AVAYA OneCloud, Cisco, twilio.

28

## Slide 29: Without Ameritas / With Ameritas

Confidential & Proprietary

**Without Ameritas**

| | 2023         | 2024          | 2025          |
| :------------ | :------------- | :-------------- | :-------------- |
| **Gross Revenue** | $38,000      | $1,683,000    | $6,312,200    |
| **Cost of Sales** | $205,700     | $1,019,700    | $2,410,082    |
| **Gross Profit** | -$167,700    | $663,300      | $3,902,118    |
| **Operating Expenses** | $1,500,000   | $3,320,750    | $5,461,830    |
| **Operating Profit** | -$1,667,700  | -$2,657,450   | -$1,559,712   |

**With Ameritas**

| | 2023         | 2024          | 2025          |
| :------------ | :------------- | :-------------- | :-------------- |
| **Gross Revenue** | $38,000      | $4,683,000    | $20,612,200   |
| **Cost of Sales** | $205,700     | $1,619,700    | $7,398,082    |
| **Gross Profit** | -$167,700    | $3,063,300    | $13,214,118   |
| **Operating Expenses** | $1,500,000   | $4,070,750    | $7,606,830    |
| **Operating Profit** | -$1,667,700  | -$1,007,450   | $5,607,288    |

29

## Slide 30: Specific Implementation

Confidential & Proprietary

**Specific Implementation**
*   **Dialogflow for conversational interface**
*   **Initial implementation**
    *   Virtual agent for Member/Provider basic info
    *   Application pop-up
    *   CCAI Insights
    *   EN & ES support
*   **Stage 2 implementation**
    *   Chatbot
    *   Gen AI agent
    *   Agent Assist

*(Image description: A flowchart detailing a conversational AI implementation.)*

*   **Member** and **Provider** connect to a **chatbot** (Planned for later) and **Gen AI Agent** (Planned for later).
*   **Webex Contact Center IVR** -> gRPC -> Member/Provider info -> **32Health DB**
*   **Dialogflow Virtual agent** -> Customer question answered (Yes/No)
    *   **Yes** -> Terminate
    *   **No** -> **Hand-off** (to **Webex Contact Center**).
*   **Webex Contact Center** -> **32Health web application** -> popup info -> **Member/Provider Info, CCAI Insights - Sentiment,** (Planned for later: **Knowledge Base, Doc datastore**)
*   Data dip arrow from **32Health DB**.
*   **Agent Assist** (under 32Health web application, Planned for later).

30

## Slide 31: Topic 9: Customer Service

Confidential & Proprietary

**Topic 9: Customer Service**

**Inquiry Tracking**
*   Entire customer service interaction (call inquiry) from intake to resolution
*   Inquiry tracking/logging and documentation by multiple business units, and display such that a 360-degree view of the customer (member, provider, group, broker) is enabled, including resolutions

**Servicing an Inquiry**
*   How CSRs can access various pieces of information (claims-related tools, group data, general inquirer data)
*   Demonstrate the ability to access and view claims information through a centralized look-up based on dental procedure or medical information noted on claim
*   Demonstrate a CSR triggering claim adjustments directly within the Claims platform, including multiple claims (bulk transaction) at once (e.g., fee updates for a provider)

**Workflow & Reporting**
*   How inquiries are passed from business unit to business unit via workflow
*   Ability to provide “screen pop” capabilities to display relevant inquirer information to a CSR (system-defined alerts)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Contact Center" section is expanded, showing options like "Member" and "Provider", which are further expanded to show "Group" and other items. Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Broker Management", "Sales Management", and "Settings".)*

31

## Slide 32: Topic 10: Appeals and Grievances

Confidential & Proprietary

**Topic 10: Appeals and Grievances**

**Appeals & Grievances Management**
*   Entire case based on a submitted claim appeal
*   Ability to support a configurable workflow across teams (CSRs, claims examiners, Provider team, etc.), to support Appeals and Grievances with templated case types and standard routing of service forms without manual re-keying of information
*   Ability to track Appeals and Grievances back to their originating inquiry, and auto-populate a case for each appeal/grievance with validated business rules and required data inputs for specific groups and SLAs (turnaround times)
*   Ability to automatically capture or force CSRs to adhere to strict guidelines for capturing inquiry data and filling out resolutions based on certain customer attributes (e.g., specific grievance fields that a Group requires)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Claims" section is expanded, showing options like "Claims Dashboard", "All Claims", "Manual Claims (AI)", "Claim Data Entry", "Claims Queues", and "Utilization Review". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

32

## Slide 33: Topic 11: Broker Management

Confidential & Proprietary

**Topic 11: Broker Management**

**Broker Management**
*   How to add and modify a Broker, including payee information and Agent/Agency Hierarchy capabilities and ability to set up a variety of hierarchies
*   Integration of broker appointments with setup and commission payments, allowing for changes in broker structure, without causing the appointment process to start over
*   Ability to track steps in the process (e.g., putting commissions on hold or putting an entire policy on hold for payment)
*   Communication strategy for appointment confirmation letters, Agent of Record changes etc.

**Broker Commissions**
*   Ability to configure a commission schedule per broker/agency/designated product/designated state/Group/Division
*   How to set up Broker commission rates and calculation methodologies
*   Ability to run management reports to check for commissions on hold or policies that have been put on hold
*   Ability to generate special producer payment (bonus) programs

**Broker Portal**
*   Consolidation of records based on branch offices (same tax-ID) and then marketing arrangements between agencies that do not share the same tax ID

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Broker Management" section is expanded, showing options like "All Agencies" and "All Brokers". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Sales Management", and "Settings".)*

33

## Slide 34: Topic 12: Sales, Marketing, & Products

Confidential & Proprietary

**Topic 12: Sales, Marketing, & Products**

**Products**
*   Use of a product catalog showing benefits tied to each product, and the ability to quickly develop products or resell existing product configurations
*   How to setup a new product offering in the system

**Sales & Marketing**
*   Ability to view all product, plan, benefit, network etc. information in plain language (i.e., capable of being understood by the customers)

**Shopping**
*   Ability to have a consumer direct shopping experience for individuals that is easy to use, allows plan comparisons, and allows modifications to effective dates/dependents/coverages throughout the shopping experience without having to restart (i.e., online enrollment workflow)

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Plan Configuration" section is expanded, showing options like "All Plans", "Plan Bundles", "All Provider Fees", "All Plan Fees", "All Networks", "Fulfillment Templates", and "Plan Fulfillment". Other collapsed sections include "Provider Network", "Group", "Members", "Office/DSO", "Providers", "Claims", "Financial", "Reports", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

34

## Slide 35: Topic 13: Reporting & Configuration

Confidential & Proprietary

**Topic 13: Reporting & Configuration**

**Business Configuration**
*   How to setup role-based security by LOB, operations department area, geographic location, and/or business rules (e.g., dollar amount thresholds) that provides greater flexibility to who can change and view what data (data masking)

**Operational Reports**
*   Ability to provide self-service reporting on operational metrics and transactional data
*   Ability to schedule reports and subscriber to them as needed

**Dashboards & Visualizations**
*   System’s ability to visualize data via real-time dashboards and reports that provide insights into key performance metrics and trending by LOB, customers, and business process areas

*(Image description: A partial screenshot of a navigation menu from a "32Health" application. The "Reports" section is expanded, showing options like "Monthly Reports", "Annual Reports", "Membership Reports", "Claims Reports", "Utilization Reports", and "Metrics Reports". Other collapsed sections include "Provider Network", "Group", "Members", "Plan Configuration", "Office/DSO", "Providers", "Claims", "Financial", "Document Center", "Case Management", "Compliance & Audit", "Contact Center", "Broker Management", "Sales Management", and "Settings".)*

35

## Slide 36: Topic 14 - Base Architecture

Confidential & Proprietary

**Topic 14 - Base Architecture**

*   ❏ Overall Architecture
*   ❏ Claims Processing Architecture: *Demo*
*   ❏ Languages & Frameworks
*   ❏ Scalable Infrastructure
*   ❏ ETL/ELT Pipeline - File Intake: *Demo*
*   ❏ Reporting Architecture
*   ❏ Communications - External APIs
*   ❏ Communications - API Management
*   ❏ API Details - REST API
*   ❏ API Details - GraphQL
*   ❏ Document Management Solutions
*   ❏ Integration & Data Interoperability
*   ❏ EDI Integration
*   ❏ AI Contact Center
*   ❏ Integration - Paper Claims Example
*   ❏ Database Organization: *Demo*
*   ❏ Database Synchronization
*   ❏ PHI De-Id & Syncing Service
*   ❏ Information Lifecycle Management
*   ❏ Minimizing Data Loss
*   ❏ Database Replication: *Demo*
*   ❏ Portals & Peripheral Applications
*   ❏ Provider Portal: *Demo*

36

## Slide 37: Overall Architecture

Confidential & Proprietary

**Overall Architecture**

**SaaS Modules**
1.  Eligibility Management
2.  Provider Management
3.  Provider Network
    a. Recruitment
    b. Credentialing
    c. Contracting
    d. Re-credentialing
4.  Benefit and Policy Management
5.  Employer Groups
6.  Claim Adjudication
    a. AI Claims Automation
7.  EDI
8.  Financial
    a. Billing
    b. Payment
    c. Receivables
9.  Portals and Support
10. AI Assisted Contact Center
11. Enterprise Reporting
12. Broker Management
13. Sales Management
14. Compliance & Audit

*(Image description: A detailed architectural diagram, identical to Slide 2, showing various modules and their interactions. Key components include:)*
*   **Provider Network Portals, Developer Portals, Broker Portals, Employer Groups Portals.** These feed into an "External Portals/Apps" box.
*   **Provider** (EDI 837P/I, EDI 270/271, EDI 270/271/834, EDI 835) and **EDI Interface**.
*   **Paper/Fax Email/Web Claims** and **Multimodal AI** feed into the EDI Interface.
*   **AI Enabled Claim Administration Adjudication Engine** is central.
*   **AI Automated Data Process** receives input from the Adjudication Engine and other sources (X-rays, periodontal charts, intra-oral images, clinical dental images).
*   **Front Office Automated Workflow System** includes:
    *   AI Assisted Contact Center
    *   Benefit & Clinical Policy Management
    *   Reporting
    *   Sales Quoting & Plan Implementation
    *   AI Assisted Underwriting & Premium Generation
    *   Compliance & Audit
*   **Back Office Automated Workflow System** includes:
    *   Case Management
    *   Provider Management
    *   AI Assisted Provider Network Management
    *   Reporting & Analytics
    *   Billing & Payment
    *   Eligibility Management
    *   Broker Management
    *   Document Center
*   **Payment Integrity Engine, Claims Rules Engine, Administrative and Clinical Edits** are part of the AI Automated Data Process.

37

## Slide 38: Claims Processing Architecture: Demo

Confidential & Proprietary

**Claims Processing Architecture: Demo**
*   Demonstrate the system’s ability to support modular, component-based architectures (i.e., separate and independently deployable, modular components which are loosely coupled and provide logically grouped technical and functional capabilities)

**Link to the diagram**

*(Image description: A highly complex and detailed architectural diagram for claims processing, identical to Slide 17 and 18. It includes numerous interconnected modules, queues, databases, and services. Due to the extreme density and small font size, detailed transcription of all labels is impractical for structured markdown.)*
*(Left sidebar is a 32Health application navigation menu, with "Claims" expanded to show "Claims Dashboard", "All Claims", "Manual Claims (AI)", "Claim Data Entry", "Claims Queues", "Utilization Review".)*

38

## Slide 39: Languages & Frameworks

Confidential & Proprietary

**Languages & Frameworks**

*(Image description: A flowchart showing development stages and tools used.)*

*   **Planning, Analysis, and Design**
    *   **Tooling:** Lucidchart, SRS documents, FIGMA, Bubble.io
*   **Code Development**
    *   **Tooling:** Cloud Workstations, GitHub, GitHub Actions, Github Autopilot, VSCode, PyCharm Poetry, Docker, Artifact Registry, Storybook, Terraform, Google Cloud Build, Google Cloud CLI, kubectl, Kaniko, Minikube, Helm
*   **AI Development**
    *   **Tooling:** Vertex AI, Huggingface, PyTorch, various LLM models, Langchain
*   **Security**
    *   **Tooling:** Google Cloud IAM, GitHub Advanced Security, GitHub Secret Scanning, Google Cloud Container Scanning, BinaryAuth, WebScanner, Command and Security Center
*   **Testing and Integration**
    *   **Tooling:** PyUnit, Jest, Selenium, Storybook

*   **Development** -> **Testing** -> **Staging** -> **Production**

**Modern and secure development**
*   Environments are setup using IaaC/Terraform
*   Blend of GitHub & GitLab flow is used for repo strategy.
*   Protected branches are used.
*   Cloud Build, GitHub actions and Artifact Registry are tools used for CI/CD.
*   No PHI within Lower environments
*   Production access restricted to authorized US personnel

39

## Slide 40: Scalable Infrastructure

Confidential & Proprietary

**Scalable Infrastructure**

*(Image description: Two diagrams illustrating cloud database and compute services.)*

*   **DB that scales w data** (top diagram)
    *   Cloud SQL - scales vertically
    *   BigQuery - scales horizontally
    *   Cloud Spanner - scales horizontally
    *   Cloud Storage - scales 'infinitely'
    *   Cloud Pub/Sub
    *   Cloud Firestore/Datastore
*   **Compute that scales w Workload** (bottom diagram)
    *   Kubernetes Autopilot
    *   Cloud Run (serverless)
    *   Cloud Functions (serverless)
    *   VertexAI

**Services deployed on scalable infra**

40

## Slide 41: Infrastructure / Integration

Confidential & Proprietary

**Infrastructure**

*(Image description: Two diagrams illustrating cloud database and compute services, identical to Slide 40, are on the left.)*

*   **DB that scales w data** (top diagram)
    *   Cloud SQL - scales vertically
    *   BigQuery - scales horizontally
    *   Cloud Spanner - scales horizontally
    *   Cloud Storage - scales 'infinitely'
    *   Cloud Pub/Sub
    *   Cloud Firestore/Datastore
*   **Compute that scales w Workload** (bottom diagram)
    *   Kubernetes Autopilot
    *   Cloud Run (serverless)
    *   Cloud Functions (serverless)
    *   VertexAI

**Integration**

*(Image description: A diagram showing 32Health portals and API integration with Ameritas Portals.)*

*   **32Health Portals/Apps** (left box):
    *   Provider Network Portals
    *   Developer Portals
    *   Broker Portals
    *   Provider Portals
    *   Member Portals
    *   Employer Groups Portals
*   **32Health APIs & Webhooks** (middle box)
*   **Ameritas Portals** (right box):
    *   Provider
    *   Producer
    *   Member
    *   Developer

*   **Text on diagram:**
    1.  iFrames can be used to embed 32health portal elements in Ameritas Portals
    2.  Private labeling of 32health portals along with custom sub-domains
    3.  Allow listing of IPs through self service developer portals for easy integration with on-prem applications
    4.  Cloud data fusion enables integration with third party enterprise applications like salesforce, cisco etc.

**Services deployed on scalable infra**

41

## Slide 42: ETL/ELT Pipelines - File Intake: Demo

Confidential & Proprietary

**ETL/ELT Pipelines - File Intake: Demo**

*(Image description: A data pipeline diagram illustrating file intake and processing, identical to Slide 9.)*

*   **New file format** (input) -> Easy to integrate new adaptor -> **New Data adaptor**
*   **EDI, JSON, PDF, CSV, DOC, image files** (Provider, Member, Group, Office, DSO, Plan, Claims, Broker File Intake / Bulk Upload) -> **File Intake**
*   **Salesforce, SQL Server, Arvo.hbase, Hive, Application data sources** (Export) -> **Native Integration connectors** -> **File Intake**
*   **File Intake** -> **Data adaptor (if needed)** -> **Cloud Data Fusion** (which also links to **Workflows**) -> **ETL/ELT pipeline tech**

*   Multiple compatible format for file intake capabilities,
*   Adaptors help ingest new formats
*   Flexible ETL models

42

## Slide 43: Reporting Architecture

Confidential & Proprietary

**Reporting Architecture**

*(Image description: A diagram showing the reporting architecture.)*

*   **Postgres (Cloud SQL) - Operational db** (top left cylinder)
*   **Cloud Spanner - Operational db** (middle left cylinder)
*   **BigQuery - Reports db** (bottom left cylinder)
*   **Predictive Analytics** (bottom left icon)
*   These databases connect to **Embedded Looker** (middle icon).
*   **Embedded Looker** connects to **32Health web app** (right monitor icon).

*   **32Health web app** features:
    *   Custom and pre-configured reporting
    *   Native support for parameter driven real-time reporting and analytics
    *   High performant with caching
    *   **Minimal impact on production processes - read replica of operational db is used**
    *   SSO support
    *   Admin Panel
    *   HIPAA compliant

43

## Slide 44: Communications - External APIs

Confidential & Proprietary

**Communications - External APIs**

*(Image description: Screenshot of an "Apigee Developer Portal" showing various APIs offered by 32Health.)*

*   **32HEALTH** (top left logo)
*   **APIs** (page title)

*   **Filter by title & description** (search bar)

*   **Claim APIs**
    *   APIs for getting EOR, claim telemetry
*   **Credentialing APIs**
    *   APIs for real-time credentialing services.
*   **EDI Apis**
    *   APIs for EDI
*   **Insurance forms APIs**
    *   APIs for extracting information from Insurance forms
*   **Member APIs**
    *   APIs for Member CRUD
*   **Provider APIs**
    *   APIs for CRUD on Provider related data.
*   **Reporting APIs**
    *   APIS for accessing Looker endpoints for reporting.

**External APIs via Apigee Developer Portal**
**EDI API supports X12**
*(A "Webhook" icon is also shown on the right side of the slide.)*

44

## Slide 45: Communications - API Management

Confidential & Proprietary

**Communications - API Management**

*(Image description: An architectural diagram showing internal and external APIs and their management.)*

*   **Internal APIs** (top box, connected to 32Health Application via API Gateway)
    *   Provider Network
    *   Group
    *   Plan Configuration
    *   Office/DSO
    *   Financial
    *   Document Center
    *   Case Management
    *   Compliance & Audit
    *   Contact Center
    *   Broker Management
*   **32Health Application** <-> **API Gateway**
    *   **API Gateway** features:
        *   REST, GraphQL based, gRPC for fast performance
        *   Messaging formats
            *   JSON, File based payloads
            *   JSON responses
            *   JSON for Pub/Sub & eventarc messaging
        *   Both sync & async APIs
        *   Stack: React, Typescript, FastAPI (Python), Functions Framework (Python)
*   **External APIs** (bottom box, connected to API Gateway)
    *   Claim APIs
    *   Credentialing APIs
    *   EDI APIs
    *   Insurance forms APIs
    *   Member APIs
    *   Provider APIs
    *   Reporting APIs

45

## Slide 46: API Details - REST API

Confidential & Proprietary

**API Details - REST API**

*(Image description: A list of REST API endpoints with their HTTP method and description.)*

*   **POST** `/api/v1/bulk-upload/plan-module-async` Bulk Upload Plan Module Async
*   **POST** `/api/v1/bulk-upload/plan-module` Bulk Upload Plan Module
*   **POST** `/api/v1/bulk-upload/plans-async` Bulk Upload Plans Async
*   **POST** `/api/v1/bulk-upload/plans` Bulk Upload Plans
*   **POST** `/api/v1/bulk-upload/plan-fee-schedules-async` Bulk Upload Plan Fee Schedules Async
*   **POST** `/api/v1/bulk-upload/plan-fee-schedules` Bulk Upload Plan Fee Schedules
*   **POST** `/api/v1/bulk-upload/provider-fee-schedules-async` Provider Upload Provider Fee Schedules Async
*   **POST** `/api/v1/bulk-upload/provider-fee-schedules` Provider Upload Provider Fee Schedules

46

## Slide 47: API Details - GraphQL

Confidential & Proprietary

**API Details - GraphQL**

*(Image description: Two code snippets showing GraphQL queries and mutations.)*

**Explorer**
`query MyQuery`
*   `claim`
*   `claimAttachments`
*   `claimAttachmentsByClaimID`
*   `claimAttachmentsByClaimNumber`
*   `claimByLineNumber`
*   `claimDetails`
*   `claimDetailsByClaimNumber`
*   `claimEOB`
*   `claimEOP`
*   `claimErrorCode`
*   `claimErrorCodes`
*   `claimLog`
*   `claimLogs`
*   `claimServiceLine`
*   `claimServiceLines`
*   `claimServiceLinesByClaimNumber`
*   `claimStatus`
*   `claimStatuses`
*   `claims`

**Explorer**
`mutation MyMutation`
*   `addClaim`
*   `addClaimAttachment`
*   `addClaimErrorCode`
*   `addClaimLog`
*   `addClaimServiceLine`
*   `addClaimStatus`
*   `addFeeScheduleType`
*   `addManualClaimRejectionReason`
*   `addManualClaims`
*   `addMember`
*   `addNetwork`
*   `addNetworkStatusType`
*   `addNetworkType`
*   `addProviderNetwork`
*   `deleteManualClaim`
*   `deleteManualClaimRejectionReason`
*   `editProviderNetwork`
*   `extractClaimAttachments`
*   `processClaim`
*   `removeClaim`
*   `removeClaimServiceLine`
*   `restoreClaim`
*   `restoreClaimServiceLine`

47

## Slide 48: Document Management Solutions

Confidential & Proprietary

**Document Management Solutions**

*(Image description: Two diagrams illustrating document management solutions.)*

*   **(Left Diagram - 32Health Document Management System)**
    *   **Associated Preferred Document Management Vendors** (top left Salesforce icon) -> Document Trigger
    *   **32Health** (top label)
    *   **Document Management Public APIs** (hex icon) -> Other 32Health services
    *   **GCP Application Integration Connectors** (hex icon) -> Document store
    *   **Workflow actions** box:
        *   Data Mapping
        *   Sending Email
        *   Flow Control
        *   Approval/Timer

*   **(Right Diagram - 32Healths Internal Document Store for AI)**
    *   **Clearinghouse APIs from Vyne, Changehealth, DentalExchange, ...** (top box)
    *   **Attachments**
    *   **DUPLICATE** (banner icon)
        *   **AI/ML Duplicate Detection** (below banner)
    *   **Attachment Document Store** (cylinder icon)
    *   **AI/ML Visual QnA Extraction** (eye icon)
    *   **Narrative/Notes**
    *   **Features** (bottom left box) -> Flowchart lines
    *   **Features** (bottom right box) -> Flowchart lines
    *   **Metadata** (bottom box, linked to workflow)

**Using GCP’s application integration service, 32Health can connect to client enterprise applications**
**32Healths Internal Document Store for AI**

48

## Slide 49: Integration & Data Interoperability

Confidential & Proprietary

**Integration & Data Interoperability**

*   Preferred approach for integration is to publish REST APIs with openapi spec on the 32Health Dev portal and follow industry standards (actual/de facto) - JSON, EDI wherever applicable
*   File based approaches are preferred via SFTP and uploads/downloads through web portal
*   External APIs currently are REST, GRAPHQL
*   JSON, EDI, CSV/PSV are natively supported
    *   New file format can be supported via data adaptors
*   Strong consideration for customer recommended formats

49

## Slide 50: EDI Integration

Confidential & Proprietary

**EDI Integration**

*(Image description: A detailed architectural diagram for EDI integration.)*

*   **Database** (central top cylinder)
    *   **Core services** connected to Database:
        *   Eligibility Processing
        *   Claim Processing
        *   Eligibility/Benefit Status
        *   EOP/EOB
        *   Claim Status
*   **Webhooks** are used for:
    *   `{REST}` (276/277) <-> Claim Status
    *   `{REST}` (834) <-> Eligibility Processing
    *   `{REST}` (270/271) <-> Eligibility/Benefit Status
    *   `{REST}` (835) <-> EOP/EOB
*   **SFTP service** sends/rcvs notifications (central box)
    *   `Claim API call`
    *   `Eligibility/Benefit Inquiry/Response`
    *   `Remittance advice API call & callback`
*   **Benefit enrollment API call & callback** -> `{REST}` (834)
*   **999 Ack for all inbound EDI transaction** -> `Eligibility/Benefit Inquiry/Response`
*   **Claim Status Inquiry/Response** -> `{REST}` (276/277)
*   **Trading partners** (bottom box) connected to `Eligibility/Benefit Inquiry/Response` and `SFTP service`.
*   **32Health** (bottom right label)

50

## Slide 51: AI Contact Center

Confidential & Proprietary

**AI Contact Center**

*(Image description: An architectural diagram showing the AI Contact Center solution, identical to Slide 28.)*

*   **Customer** (left) interacts via **Channels**:
    *   Voice
    *   SMS
    *   Mobile Web
    *   Chat
*   **Channels** connect to **Google Cloud Contact Center AI** (top central cloud icon).
    *   **Google Cloud Contact Center AI** consists of:
        *   Cloud Natural Language API
        *   Cloud Speech-to-Text API
        *   Cloud Translation API
*   These APIs feed into **32Health Bot**.
    *   **32Health Bot** connects to:
        *   Claims DB
        *   Member DB
        *   Provider DB
*   **32Health Bot** (via Agent) can interact with an **Agent** (bottom right).
*   Integrations mentioned: NICE, AVAYA OneCloud, Cisco, twilio.

51

## Slide 52: Specific Implementation

Confidential & Proprietary

**Specific Implementation**

*(Image description: A flowchart detailing a conversational AI implementation, identical to Slide 30.)*

*   **Member** and **Provider** connect to a **chatbot** (Planned for later) and **Gen AI Agent** (Planned for later).
*   **Webex Contact Center IVR** -> gRPC -> Member/Provider info -> **Cloud SQL** (Database, likely 32Health DB mentioned elsewhere)
*   **Dialogflow Virtual agent** -> Customer question answered (Yes/No)
    *   **Yes** -> Terminate
    *   **No** -> **Hand-off** (to **Webex Contact Center**).
*   **Webex Contact Center** -> **32Health web application** -> popup info -> **Member/Provider Info, CCAI Insights - Sentiment,** (Planned for later: **Knowledge Base, Doc datastore**)

52

## Slide 53: Integration - Paper Claims Example

Confidential & Proprietary

**Integration - Paper Claims Example**

*(Image description: A flowchart detailing the workflow for processing paper claims, identical to Slide 20.)*

*   **(Left Column - Purple - Paper Claims Workflow)**
    *   **1:** Input pdf docs into outgoing SFTP folder
    *   **6:** Review and Correct claim forms on 32Health app
    *   **6:** 837D EDI process
    *   **6:** Clinical review per attachment (claim number)
*   **(Right Column - Green - Main Processing Flow)**
    *   **2:** Extract pdf pages
    *   (Decision: Is page claim form?)
        *   **Yes** -> **2:** Extract claim forms
        *   **No** -> (Decision: Is page back of claim form?)
            *   **Yes** -> **3:** Extract unique ID per claim form
            *   **No** -> (Decision: Are attachments present?)
                *   **Yes** -> **5:** Create attachment info (Include attachment info on 837D PWK segment)
                *   **No** -> (End)
    *   **2:** Store review/rejected claim forms
    *   **5:** Create a single 837D file
    *   **5:** Create viewpdf for EDI 837D attachments
*   **32Health** (at bottom right)

53

## Slide 54: Database Organization: Demo

Confidential & Proprietary

**Database Organization: Demo**

*(Image description: A diagram showing various databases and their organization.)*

*   **Cloud SQL** (top central cylinder) has child databases for:
    *   claims
    *   members
    *   office
    *   plan
    *   groups
    *   providers
    *   case management
    *   atlas
    *   brokers
    *   credentialing
    *   documents
    *   financials
    *   contact center
*   **Operational Databases - Deployed on Dev, Staging and Production** (caption below Cloud SQL section)

*   **Reporting**
    *   BigQuery
*   **Large Distributed Data**
    *   Cloud Spanner
*   **Misc Data**
    *   Firestore / Datastore
*   **Machine Learning Vector Database**
    *   VertexAI
*   **Document Retrieval**
    *   Elastic Database Pools

54

## Slide 55: Database Synchronization

Confidential & Proprietary

**Database Synchronization**

*   Databases are within the same VPC leading to lower latency in synchronization.
*   The Cloud SQL (postgres) instances each have automated read replicas
*   32Health also plans for continuous replication between Cloud SQL and Spanner using Striim
*   Between the operational db and BigQuery/Cloud Storage 32Health uses Cloud Datastream
    *   low-latency, serverless, low latency Change Data Capture service

55

## Slide 56: PHI De-Id & Syncing Service

Confidential & Proprietary

**PHI De-Id & Syncing Service**

*(Image description: A diagram showing how PHI data is de-identified and synced.)*

*   **Contains PHI Data** (PROD cylinder) -> **Data-Redaction sync svc using Cloud DLP** (hex icon with '51 15 10 05') -> **STG** (cylinder)
*   **Authorized users only** (label for PROD)
*   **Only De-identified Data** (label for STG) -> **Dev** (cylinder)

*   **List of PHI** (Protected Health Information) (bottom box, listing categories with icons):
    *   Names
    *   Vehicle identifiers
    *   Addresses, Zip Codes, Geocodes
    *   Device Identifiers
    *   Dates
    *   URLs
    *   Phone Numbers
    *   Medical Record numbers
    *   IP Addresses
    *   Fax numbers
    *   Health Insurance Beneficiary Numbers
    *   Biometric Identifiers
    *   Email addresses
    *   Account Numbers
    *   Facial Images
    *   Social Security numbers
    *   Certificate/license numbers
    *   Any other Unique Identifiers

56

## Slide 57: Information Lifecycle Management

Confidential & Proprietary

**Information Lifecycle Management**

*   The cloud storage resources (buckets) have defined retention and archival (nearline, cold) policies as mandated by HIPAA and customer requirements
*   32Health implements soft-delete within the dbs using well defined APIs
    *   We only update the is_deprecated flag in every record and mark them as deleted
    *   The same flag is reverted to restore the records
    *   This is part of the BaseModel which is used by all the models in our APIs
*   Used by all Models and APIs on 32Health Platform

*(Image description: Two screenshots related to retention policy and database table schema.)*

**Retention policy (for compliance)**
Prevents the deletion or modification of the bucket's objects for a specified minimum period of time after they're uploaded. The optional setting of setting retention mode to "locked" ensures that no one (including you) can shorten or remove the retention period.
*   **Retention period:** 10 years
*   **Effective date:** August 4, 2023 at 12:14:22 PM GMT-4
*   **Retention mode:** Unlocked
*   *Tip: You can save on storage costs by adding a complementary lifecycle rule to delete objects when they reach the end of their retention period.*

**taxonomy_code** (table schema screenshot)
| PK | taxonomy_code_id | integer           |
| :-- | :--------------- | :---------------- |
| | taxonomy_code    | character varying |
| | description      | character varying |
| | is_deprecated    | boolean           |
| | created_at       | timestamp without time zone |
| | modified_at      | timestamp without time zone |

57

## Slide 58: Minimizing Data Loss

Confidential & Proprietary

**Minimizing Data Loss**

*   32Health would use read-write replication to minimize data loss and improve API throughput
*   32Health Databases are truly isolated for every microservice
    *   Scaling issues would only be isolated to hot spots in 32Health’s application
*   For hotspots, 32Health will use Cloud Spanner to achieve horizontal scaling, preserve ACID compliance of data records and ensure transactional consistencies
    *   Cloud Spanner has a SLA of 99.999% availability
*   The PostgreSQL databases are replicated with High Availability plus a GCP SLA of 99.95%
    *   BigQuery which is a managed service has clustering and partitioning built-in and has an uptime SLA of 99.99%

58

## Slide 59: Database Replication: Demo

Confidential & Proprietary

**Database Replication: Demo**

32Health’s platform has support for database clustering, replication to minimize data loss

*(Image description: A screenshot of the Google Cloud SQL console showing database replication settings.)*

*   **Google Cloud** (top left logo)
*   **SQL** (service selected)
*   **Replicas** (tab selected)

*   **PRIMARY INSTANCE** (left menu)
    *   Overview
    *   System insights
    *   Query insights
    *   Connections
    *   Users
    *   Databases
    *   Backups
    *   **Replicas** (selected)

*   **All instances > dev-db-claims** (breadcrumb)
*   **dev-db-claims**
    *   PostgreSQL 15
*   *You can create read replicas from any primary instance to replicate your data.*
*   *You can create cascading replicas (replicas of replicas) to build replication hierarchies.*
*   **+ CREATE READ REPLICA**

| Name             | Type               | Version     | Location      |
| :--------------- | :----------------- | :---------- | :------------ |
| dev-db-claims-replica | postgresql read replica | PostgreSQL 15 | us-central1-a |

59

## Slide 60: Portals & Peripheral Applications

Confidential & Proprietary

**Portals & Peripheral Applications**

*(Image description: A diagram showing 32Health portals and API integration with Ameritas Portals, identical to Slide 41's integration section.)*

*   **32Health Portals/Apps** (left box):
    *   Provider Network Portals
    *   Developer Portals
    *   Broker Portals
    *   Provider Portals
    *   Member Portals
    *   Employer Groups Portals
*   **32Health APIs & Webhooks** (middle box)
*   **Ameritas Portals** (right box):
    *   Provider
    *   Producer
    *   Member
    *   Developer

*   **Text on diagram:**
    1.  iFrames can be used to embed 32health portal elements in Ameritas Portals
    2.  Private labeling of 32health portals along with custom sub-domains
    3.  Allow listing of IPs through self service developer portals for easy integration with on-prem applications
    4.  Cloud data fusion enables integration with third party enterprise applications like salesforce, cisco etc.

60

## Slide 61: Provider Portal: Demo

Confidential & Proprietary

**Provider Portal: Demo**

**32Health’s platform supports vendors’ and client’ portals with ability to receive and send data**

*(Image description: A detailed architectural diagram for the Provider Services Platform, identical to Slide 23.)*

*   **Provider Services Platform** (title)
*   **Third Party RPA / API Integration**
    *   50 states Provider Licenses
    *   National Provider Data Bank (NPDB)
    *   DEA
    *   NPPES NPI
    *   Provider Directory Validation
*   **Workflow Automation**
    *   Lookup - License, NPI, DEA, NPDB, Disciplinary, Malpractice
    *   Queue management - Legal, Regulatory, Recruiting, Contracting, Support
*   **Provider Relations Team** (central hub)
    *   Internal Platform to manage business process (https://platform.32health.care)
*   **Provider Self-Serve Portal** (https://provider-portal.32health.care)
    *   1. Add or update information
    *   2. Upload documents
    *   3. Sign contracts
    *   4. Message and notifications (Email, Fax, SMS)
*   **Provider Claims Resolution**
    *   Provider Not Found
    *   Info Mismatch NPI, Address, TIN
    *   Fee Mismatch
    *   Provider Complaints & Grievances
    *   Owned and Leased Fee discrepancies
    *   Payment Resolution
*   **Provider Recruitment And Contracting**
    *   Application
    *   Credentialing
    *   Fee Negotiation
    *   Contract Management
    *   Re-Credentialing
    *   Auditing & Reporting
*   **Document Store**
    *   NLP Query Layer
    *   Contract Documents
    *   Credentialing Documents
*   **Database**
    *   Provider
    *   Leased Network
    *   Provider Credentials
    *   Business Entity
    *   Owned Network
    *   Fee Schedules
    *   Provider Locations
    *   DSO / Groups
*   **AI Automation**
    *   Automated Form Processing (Email, Fax, Paper)
    *   1. Recruitment
    *   2. Contracting
    *   3. Claim

61

## Slide 62: Topic 15 - Security & Compliance

Confidential & Proprietary

**Topic 15 - Security & Compliance**
*   ❏ Security Overview
*   ❏ Security: Multi-Tenancy
*   ❏ Security: Access Control
*   ❏ System Security
*   ❏ Secure Development
*   ❏ Application Security
*   ❏ Security Incident Management Process
*   ❏ SSO Security & Integration: *Demo*
*   ❏ API Security: *Demo*
*   ❏ Encryption at Rest and in Transit
*   ❏ Audit, General Logging & Track Users
*   ❏ Third Party Vendor Risk Management
*   ❏ Compliance

62

## Slide 63: Security Overview

Confidential & Proprietary

**Security Overview**

*(Image description: A diagram showing various security components and processes.)*

*   **External PenTest services** (top left box)
*   **32Health PROD Infra** (top right cloud icon)
*   **32Health app** (screenshot of an application dashboard, central left)
*   **GitHub Advanced Security** (top central box)
    *   Code scanning for security vulnerability and secretes
*   **Binary Authorization**
    *   for an extra layer of container security
*   **Artifact Registry**
    *   for authorized containers with scanning for OS vulnerability
*   **IAM for RBAC**
    *   for making sure only authorized personnel have access
*   **Identity Aware Proxy**
    *   for restricting DEV/STG applications to internal users
*   **Security Command Center**
    *   for comprehensive scanning of resources within VPC
*   **Web Security Scanner - Vulnerability assessment**
*   **Workload Identity Federation**
    *   removing need for service account keys
*   **Secret Manager**
    *   for securely storing credentials, keys
*   **Cloud Audit Logs**
*   **Data Loss Prevention API**
    *   to scan and redact PHI during data egress

63

## Slide 64: Security: Tenancy

Confidential & Proprietary

**Security: Tenancy**

*   Each client's data is logically and physically separated from other clients
    *   A set of database per client
*   Access to the database is via separate IAM service accounts which enforce separation of data
*   Only the Application instance and related services -deployed for client - is authenticated to communicate with db

64

## Slide 65: Security: Access Control

Confidential & Proprietary

**Security: Access Control**

*   For external access to the app, we use Auth0 to implement support for multiple roles and groups
*   For internal access, we leverage GCP identity groups and roles created using Cloud Identity/GCP Workspace group & Cloud IAM using the principle of least privileged access and zero trust as much as possible.
    *   Example: prod-users group only has (limited) read access to Prod and the general dev-users has no access to Prod
    *   Example: Machine to Machine auth and general auth within pipeline is via strictly via service accounts
*   Admin access is via a dedicated admin identity group defined at the 32Health org level (GCP best practice) with access to limited authorized personnel. Membership into this group or its privileges cannot be tampered with by project level admins. This is not set via IaaC and is set directly on the console.

65

## Slide 66: Secure Development

Confidential & Proprietary

**Secure Development**

*   32Health has a well defined Secure Development Policy
*   MFA mandatory for GCP, Github
*   Predominant use of GCP Cloud Workstations for development
    *   Strict access control for repos - controlled environment for developers
    *   Faster and secure development - no downloading of credentials ever
    *   Use of shielded VMs - hardened images
*   Via GCP policy, several strict security measures enforced -Examples no public ip access for dbs, no public buckets, no credentials keys generated, no RDP, SSH, no public IP machines
*   Github secret scanning, code scanning, dependabot scanning, protected branches
*   A combined Github flow and Gitlab flow branching strategy eliminates inadvertent push to higher environments
*   Maximum use of GCP Assured Open Source Software to ‘shift-left’ security
*   GCP connectivity to Github via Workload Identity Federation - no use of credential keys
*   GCP automated Artifact analysis for OSS vulnerabilities
*   Binary authorization prior to deployment

66

## Slide 67: Application Security

Confidential & Proprietary

**Application Security**

*   Pervasive use of Secret Manager that eliminates storing credentials in code
*   Use of SQL Cloud connectors that leverage auth via service accounts and eliminate knowing ip addresses of databases
*   Only Identity Aware Proxy based access for internal users of applications in lower environments => prevents any accidental access to our applications.
*   SSO external users implemented via auth0
*   Continual vulnerability assessment from GCP Web Security Scanner
*   Pen test (planned once a year) for both application and infrastructure
*   Continuous scanning of infrastructure underlying application.
*   Application services only auth via service accounts - zero-trust leveraged as much as possible.
*   Use of Cloud Armor - DDOS and web attack defense on edge
    *   Protect against SQLI, XSS etc
    *   Allow/Block traffic based on IP, GEO
*   API security (discussed later)

67

## Slide 68: Security Incident Management Process

Confidential & Proprietary

**Security Incident Management Process**

*   Our incident response plan covers security incidents and functions and entities such as:
    *   Roles & Responsibilities, Response team
    *   Reporting
    *   Incident severity
    *   Escalation, War room creation
    *   Documentation
    *   Incident triage, Mitigation and Remediation
    *   External Comms and Breach reporting
    *   RCA
*   32Health uses centralized Cloud Logging from GCP's Operations Suite for alerting of security events => alerts on email, phone, slack
*   32Health has planned for implementation of GCP Chronicle's SIEM solution

68

## Slide 69: SSO Security & Integration: Demo

Confidential & Proprietary

**SSO Security & Integration: Demo**

**32Health uses auth0 for implementing SSO and handling federation, external IDM and delegated admin functions**

*(Image description: A diagram showing SSO integration with Google Kubernetes Engine and other GCP services.)*

*   **Identity Provider** (bottom left box) -> OpenID (authentication flow)
*   **32Health app** (screenshot of an application dashboard, central left)
*   **32Health PROD VPC** (top central box)
    *   **Cloud Load Balancing** -> **APIGEE API Proxy** (Regex protection policy, JSON Threat protection policy)
    *   **Google Kubernetes Engine** -> **Claim services** -> **Service account based authorization**
    *   **Cloud SQL** (below Claim services)
    *   **Cloud Armor** (below Cloud Load Balancing)

69

## Slide 70: API Security: Demo

Confidential & Proprietary

**API Security: Demo**

*(Image description: A diagram illustrating API security components.)*

*   **Oauth2.0** (left)
    *   **Identity Tracking - API Keys**
    *   **Authorization - Oauth2.0**
    *   **Grant type - Client Credentials**
*   **API Proxy** (middle box)
    *   Spike Arrest Policy - Rate limiting, IP whitelisting.
    *   Application-level DDOS protection
    *   Regex protection policy, JSON Threat protection policy
*   **EDI endpoints and other APIs** (right box)
    *   POST `/token`
    *   POST `/edi-837D`
    *   ...
    *   POST `/edi-835`
    *   ...
    *   POST `/claims-svc`
*   **32Health** (bottom right label)

70

## Slide 71: Encryption at Rest and in Transit

Confidential & Proprietary

**Encryption at Rest and in Transit**

*   Data encrypted at rest by default.
    *   Several layers of encryption across Application, Platform, Infra and Hardware are used to protect user data.
    *   We have the ability to rotate keys using GCP Cloud Key Management Service (KMS). We can also support CMEK using Cloud KMS
*   Data is encrypted in transit using TLS while communicating with clients up to GFE (Google Front End)
    *   Within 32Health's environment within GCP, ALTS (Application Layer Transport Security) is used.
*   Data is stored within our systems in a HIPAA compliant way using data security & privacy controls including retention policy and redaction
*   We are in the audit phase of SOC2 Type II certification

71

## Slide 72: Audit, General Logging & Track Users

Confidential & Proprietary

**Audit, General Logging & Track Users**

*   32Health uses Cloud logging from GCP's Operations Suite for our centralized logging solution
    *   Cloud logging from GCP's Operations Suite logs events across all components and services of our platforms
    *   Cloud logging has client libraries in Python and Node that make it easy create comprehensive structured logs when events are detected.
*   32Health uses native GCP Audit Logging supplemented by custom logging which audits admin activity, data access activity and system events from all resources used within 32Health including databases, applications, compute instances, buckets, IAM, APIs
*   32Health uses application logging, auth0 logging, database logging to track changes to groups, members, claims
    *   Using auth0, we can track when users logged on and how long they were logged on
    *   Using GCP audit logging we can track internal users
*   The database tables themselves log the changes to records
*   We use datastream for Change Data Capture to track CRUD operations from operational db (PostgreSQL) to BigQuery

72

## Slide 73: Third Party Vendor Risk Management

Confidential & Proprietary

**Third Party Vendor Risk Management**

*   TPRM under scope of our Third-Party Management Policy and Risk Management Policy

**A few highlights**
*   Vendors must complete risk assessment e.g. SIG, sign BAA if applicable
*   32Health performs threat assessment for 3P
*   32Health regularly monitors, reviews, and audits supplier service delivery
*   Third-parties maintain a technical access control program
*   Third parties must maintain regulatory or certification requirements

73

## Slide 74: Compliance

Confidential & Proprietary

**Compliance**

*   32Health systems are HIPPA complaint and can perform HIPAA compliant transactions
    *   32Health supports EDI transactions
*   PCI compliant transactions are not supported but can be supported if required by client
*   32Health’s platform has workforce management capabilities, including tracking of users, workflows, and related metrics
*   32Health platform has the ability to validate various information types upon input and flag users of missing/invalid data

74

## Slide 75: Compliance - Access control for users

Confidential & Proprietary

**Compliance - Access control for users**

| Name              | Description                                   |
| :---------------- | :-------------------------------------------- |
| ClaimAdmin        | Administrator with access to all of claims module |
| ClaimClinicalReviewer | User with access to UR screen page              |
| ClaimDataEntry    | User with access to Manual Claims and UR screen |
| ClaimProcessor    | User with access to Processed Claims, Manual Claims, and UR pages |
| SuperAdmin        | Has access to every module of the app         |

75

## Slide 76: Topic 16 - System Customization & Extension

Confidential & Proprietary

**Topic 16 - System Customization & Extension**
2:45-3:05 (20 minutes)

*   ❏ Configuration & Customization
*   ❏ Metadata Management & Language Support

76

## Slide 77: Configuration & Customization

Confidential & Proprietary

**Configuration & Customization**

Demonstrate the workflow for development of customization or extension to the system, including any associated IDEs, tools, etc.

Demonstrate the extent of system configuration (i.e., business rules and logic, data fields, etc.) that can be performed by business users, without relying on IT involvement (including run time execution for claims, eligibility, payments, benefits, and other business functions without needing additional program code)

77

## Slide 78: Metadata Management & Language Support

Confidential & Proprietary

**Metadata Management & Language Support**

*   32Health’s applications have multiple options for drop-down values, look-up via search, CDT codes etc.
*   The metadata is transmitted as JSON configs back to the backend and stored into directly into the databases
*   We support English and are working on delivering towards Spanish support for our current client starting with the Document Center templates.

*(Image description: Two screenshots from the 32Health application.)*

**32Health screenshot from plan configuration**
*   **D0120** PERIODIC ORAL EVALUATION ESTABLISHED PATIENT
*   **Service Frequency limitations & exclusions** Clinical policy coverage
*   Code Information
    *   **CDT Code Version:** `2023` (dropdown) **Benefit Class:** `Preventive` (dropdown)
    *   **Integral with CDT code:** `Select Code +` (dropdown)
    *   **D2150 - D2160 X** (text input)
    *   **Preventive** (checkbox)
    *   **Basic** (checkbox)
    *   **Major** (checkbox)
    *   **Ortho** (checkbox)
    *   `Count towards Dental Maximum` `Count to low`

**32Health screenshot of Pre-auth template in Spanish from Document Center**
*   **Aviso de Aprobación de una Solicitud Previa al Servicio**
    *   9/20/23
    *   Identificación del Miembro: G57863
    *   Número de Referencia: 50456
    *   Fecha de Servicio: 04/03/2023
    *   Proveedor de Servicios: 124 Dental Arts
    *   Procesador Solicitante: 124 Dental Arts

| Código alta y descripción | Diente | Superficie | Código de oral |
| :----------------------- | :----- | :--------- | :------------- |
| D2120                    | Dientes Completa - Múltiples |           | 81             |
| D2521                    | Prótesis Parcial Molar |           | 81             |

*La preautorización *P* #50456 es válida durante 180 días a partir de la fecha de emisión. El miembro debe ser efectivo con ACME.*
*Código de razón: A1: Aprobado.*

78

## Slide 79: Topic 17 - Hosting, Redundancy & Tech Ops

Confidential & Proprietary

**Topic 17 - Hosting, Redundancy & Tech Ops**
3:20-4:00 (40 minutes)

*   ❏ Backup, Recovery & Replication
*   ❏ System Processing, Scaling & Monitoring

79

## Slide 80: Backup, Recovery & Replication

Confidential & Proprietary

**Backup, Recovery & Replication**

*   32Health’s supported model is Cloud SaaS
*   Operational DB RPO < 5min
    *   EDA keeps data messages in queue indefinitely
*   BigQuery (99.99% availability), Spanner(99.999% availability) DBs are automatically multi-region with backup and recovery built in
*   For Cloud SQL, planned RTO is 1hr
    *   Data backup to multi-regions and read replicas are easily setup through a simple interface
    *   We are implementing GCP's Backup and DR service to further improve the resiliency
    *   For reads we automatically failover to the read replica. For write failure, we slow down write retries while we recover the db
*   For the application, the external load balancer automatically handles failover
    *   Note that we don't use managed instance groups (compute vms) for hosting the application
*   The system supports replication of the db and configuration info both via the UI and via IaaC
    *   Cloud Datastream is used for Change Data Capture logs. Other instance logs can be easily replicated using a combination of Cloud logging and BigQuery.

80

## Slide 81: System Processing, Scaling & Monitoring

Confidential & Proprietary

**System Processing, Scaling & Monitoring**

*   Hybrid processing architecture supports both Event Driven Architecture (EDA) - primary arch and Batch
*   Our system comprises of microservices and is fully distributed with horizontal scaling based on meeting queue, cpu/memory loads and priority thresholds.
*   Batch processing is implemented using one or more of Cloud Workflows (GCP's pipeline tech), Cloud Data fusion (ELT/ETL tech), Cloud dataflow (Apache Beam) tech.
    *   Common to combine sync and async sub-workflows in a pipeline
    *   GCP's Cloud Scheduler to schedule jobs and start/restart and stop jobs at arbitrary times
*   We leverage Kubernetes underneath and we are able to scale up servers in the 1000s to process millions of records per hour - paper claims, EDI 837D and Eligibility, CSV files for claims and eligibility
*   We use GCP’s built-in load balancing within region and zone and an external/internal load balancer for multi-region https
*   We detect duplicates to improve processing
    *   Cache intermediate step results in the pipeline
    *   Fast composite key hashes (e.g. combining provider, member, claim info, dates of service)
*   For real-time monitoring, we use GCP Operations Suite
    *   Real-time Dashboards
    *   Alerting to phones, slack, email, pager-duty
    *   All resources on GCP stream logs into Cloud Operations Suite
    *   GCP Chronicle in consideration for a native SIEM implementation

81

## Slide 82: 32Health Demonstration

Confidential & Proprietary

**32Health**
**Demonstration**
**Core Administrative Platform Solution**

82

## Slide 83: Topic 18 - Technology Roadmap

Confidential & Proprietary

**Topic 18 - Technology Roadmap**

*   ❏ Technology Roadmap
*   ❏ System Upgrades

83

## Slide 84: Technology Roadmap

*(Image description: A roadmap showing new features, integrations, infrastructure, and ML/AI enhancements across years 2024-2028.)*

**Technology Roadmap**

|            | 2024                                       | 2025                                | 2026                                         | 2027                                        | 2028                                     |
| :--------- | :----------------------------------------- | :---------------------------------- | :------------------------------------------- | :------------------------------------------ | :--------------------------------------- |
| **New Features** | Medicare Product Configuration             | Fintech payment system              | AI Underwriting for Pricing                  | AI assisted self-service portals            | AI suggested product recommendations     |
| **Integrations & TechOps** | Increase the portfolio of enterprise applications: e.g. Salesforce, Oracle, Cisco | Increase EDI and provider portal electronic transactions | Optimize finops and architecture           | Optimize MLOps automation               |                                          |
| **Infrastructure** | Incremental powerful scaling - introduce Kubernetes | Extensive use of Auto-pilot Kubernetes | Upgrade to distributed database              | Increase Infrastructure automation to optimize both internal and external developer experience: e.g. Create Sandboxes |                                          |
| **Machine Learning/AI Enhancements** | Continue expanding partnerships with renowned institutes to collect, research and analyze longitudinal data to build a smarter AI clinical detection system |                                     |                                              |                                             |                                          |
|            | Use Bots for AI assisted contact center    | Use Bots to rectify errors          | Use GenAI and SmartAI agents across all modules |                                             |                                          |
|            | AI in the loop technology to use incremental multi-modal data (e.g.: Claims forms, perio charts, membership, plan configuration, shopping experience) |                                     |                                              |                                             |                                          |
|            | AI automation of high touch point of manual workflows (e.g. reduce data entries) |                                     |                                              | AI Associate/Customer experience - incorporate real time knowledge |                                          |

*   **Increase Ameritas Revenue** (left sidebar label)
*   **Reduce Ameritas Operational Costs** (left sidebar label)
*   **Improve Experience of Providers, Employer Groups & Associates** (left sidebar label)
*   **Improve Compliance & Reduce Risk** (left sidebar label)
*   **NCQA Accreditation** -> CAQH CORE Certification -> Continual updates to system based on State and Federal regulations
*   **Member & Employer Group Portal** -> Broker Portal -> Risk based/value based provider contracting model

84

## Slide 85: System Upgrades

Confidential & Proprietary

**System Upgrades**

*   External parties integrate with us via file-exchange and API
    *   API versioning is a key ingredient of our API governance program
    *   The deprecated version is kept for 6 months
    *   Version upgrade for an API roughly occurs once a quarter
*   For 3P APIs, we associate the set of package and api versions to specific deployments of our application and can easily support multiple versions of our applications at a time.

85

## Slide 86: Topic 19 - Licensing and Infrastructure Costs

Confidential & Proprietary

**Topic 19 - Licensing and Infrastructure Costs**
4:30 - 5:00 (30 minutes)

*   ❏ Licensing
*   ❏ Cutting-Edge Toolset and Vendors: Empowering Innovation
*   ❏ Infrastructure
*   ❏ Support & SLAs - Uptime & Response Time
*   ❏ Support & SLAs - Data Backup & Recovery
*   ❏ Support & SLAs - Other arrangements
*   ❏ Support & SLAs - Financial Penalties/Performance

86

## Slide 87: Licensing

Confidential & Proprietary

**Licensing**

*(Image description: A circular diagram representing 32Health's SaaS Enterprise Platform and its licensing components.)*

**32Health’s Software as a Service (SaaS) Enterprise Platform** (central image)

*   **Database application and storage licenses including support, upgrades and maintenance** (top left, cylinder icon)
*   **Cloud Infrastructure licenses including support, upgrades and maintenance** (top right, cloud icon)
    *   Data storage, compute infrastructure scales irrespective of number of users
*   **Reporting & other 3P commercial licenses** (middle right, document icon)
*   **Continual AI features and enhancements to machine learning models** (bottom right, brain/network icon)
    *   New product features
    *   New integrations with client vendors & partners
*   **Support & Training** (bottom left, person icon)
*   **Application server software and licenses** (middle left, server rack icon)

**All-inclusive pricing**

87

## Slide 88: Cutting-Edge Toolset and Vendors: Empowering Innovation

Confidential & Proprietary

**Cutting-Edge Toolset and Vendors: Empowering Innovation**

| Function                        | Tools / Vendors                                |
| :------------------------------ | :--------------------------------------------- |
| BI Reporting                    | Looker                                         |
| HelpDesk & Training             | FreshDesk                                      |
| Identity and Access Management  | Auth0 (Single Sign-On)                         |
|                                 | Google Cloud (Cloud Identity)                  |
| Cloud Infrastructure            | Core Infra: Google Cloud (GCE,GKE,Cloud Run, Cloud Fun, Cloud Storage, PubSub, Cloud DR) |
|                                 | API: Google Cloud (Apigee, REST, GRAPHQL, Sendgrid) |
|                                 | Workflow: Google Cloud (Cloud Datastream, Workflow, Data fusion, Dataflow) |
|                                 | Logging & Event Mgmt: (GCP Operations Suite, GCP Chronicle) |
| Version Control and Collaboration | GitHub, Lucid, Google Workspace, Slack         |
| Database Application and Storage| CloudSQL, BigQuery, CloudSpanner               |
| Machine Learning and AI         | Vertex AI, Huggingface                         |

88

## Slide 89: Infrastructure

Confidential & Proprietary

**Infrastructure**

*   We use scalable compute (Kubernetes) and storage (CloudSQL, Spanner, Datastore,Firestore, vertex ai vector db, elastic search) that can be horizontally and vertically scaled with increased workloads. The servers scale with fixed cpu, memory and queue size thresholds. Memory and cpu increase often correlate to increase data sizes. Data storage is conservatively upper bounded at ~ 700GB per 100K members - Note that this estimate is subject to change

89

## Slide 90: Support & SLAs - Uptime & Response Time

Confidential & Proprietary

**Support & SLAs - Uptime & Response Time**

**Proposed SLAs - 32Health and client to work jointly to finalize the support level required by client**
*   Uptime Guarantee - 32Health commits to maintain a 99.9% uptime. This excludes any planned platform maintenance updates outside of business working hours
*   Response Time - 32Health commits to the response time based on severity level as described below

| Severity Level | Definition                                                                                                                                                                                                                                                                  | Response Times  |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------- |
| System down    | Cloud Infrastructure outages                                                                                                                                                                                                                                        | Immediate       |
| Critical       | Business outage or significant impact that threatens future productivity                                                                                                                                                                                            | Within 1 hour   |
| Urgent         | High-Impact problem where production is proceeding, in a significantly impaired fashion; there is time sensitive issue important to long term productivity that is not causing an immediate work stoppage; or there is significant customer concern                        | Within 2 hours  |
| Important      | Important issue that does not have significant current productivity impact                                                                                                                                                                                          | Within 4 hours  |
| Monitor        | Issue requiring no further action beyond monitoring for follow-up, if needed                                                                                                                                                                                        | Within 1 business day |
| Informational  | Request for information                                                                                                                                                                                                                                             | Within 2 business days |

90

## Slide 91: Support & SLAs - Data Backup & Recovery

Confidential & Proprietary

**Support & SLAs - Data Backup & Recovery**

*   32Health’s supported model is Cloud SaaS
*   The maximum and minimum data loss per service/component in the system are bounded
    *   These maximum estimates are rolled up to provide an RPO estimation
    *   EDA keeps data messages in queue indefinitely
*   BigQuery (99.9% availability), Spanner(99.9% availability) DBs are automatically multi-region with backup and recovery built in
*   For Cloud SQL, planned RTO is 1hr
    *   Data backup to multi-regions and read replicas are easily setup through a simple interface
    *   Point in time recovery is down to a fraction of a second, via write-ahead log archiving
    *   We are implementing GCP's Backup and DR service to further improve the resiliency
    *   For reads we automatically failover to the read replica. For write failure, we use a hot DR pattern to slow down write retries while we recover the db
*   For the application, the external load balancer automatically handles failover
    *   Note that we don't use managed instance groups (compute vms) for hosting the application
*   The system supports replication of the db and configuration info both via the UI and via IaaC
    *   Cloud Datastream is used for Change Data Capture logs. Other instance logs can be easily replicated using a combination of Cloud logging and BigQuery.
    *   We are implementing continuous replication between Cloud SQL and Spanner using Striim

91

## Slide 92: Support & SLAs - Other arrangements

Confidential & Proprietary

**Support & SLAs - Other arrangements**

*   Customer Support - The services will be provided between the hours of 8.00 am and 5.00pm EST Monday through Friday except holidays. The email contact for support is support@32health.care. Any critical issues outside of the hours, the Customer Success Manager will triage the severity of the issue and will respond appropriately in accordance with our SLA response times as indicated.
*   Data Security & Compliance - Soc2 Type II and HIPAA Compliant. Any changes to the regulations will be implemented on the platform for compliance and security reasons
*   System Release Information - Our SaaS will have a quarterly release schedule for major functions. For sub-functions, we will release monthly. For minor features, the updates will be weekly. Critical updates will be deployed promptly.
*   Communication Protocol - Slack, Email, Phone, Internal Ticketing System; Monthly Customer Success meetings; Frequency of meetings initially might be higher (e.g. weekly)
*   Performance Metrics and Reporting - 32Health will provide regular reports (e.g. monthly) on system performance, including uptime, response times, and other relevant metrics on compliance and security that client can view via a dashboard and/or will be shared by Customer Success Manager

92

## Slide 93: Support & SLAs - Financial Penalties/Performance

Confidential & Proprietary

**Support & SLAs - Financial Penalties/Performance**

*   32Health will work with client on other SLA agreements required
*   Online Helpdesk: client will have access to a web support portal where client can submit support tickets, ask questions, and request assistance
*   We are open to working with you on finer terms on financial penalties for missed deadlines or missed SLA agreements during the MSA/SOW discussions

| Uptime Guarantee | Financial Penalties on Monthly Revenue |
| :--------------- | :------------------------------------- |
| 99.9%            | No deduction                           |
| 95% - 99.8%      | 1% deduction on revenue                |
| 90% - 94.9%      | 4% deduction on revenue                |
| <90%             | 7% deduction on revenue                |

**Proposed SLAs - 32Health and client to work jointly to finalize the support level required by client**

93

## Slide 94: Topic 20 - Leadership Discussion

Confidential & Proprietary

**Topic 20 - Leadership Discussion**

*   ❏ Licensing Model
    *   ❏ CAPS
    *   ❏ Provider Network
    *   ❏ Human Capital Excellence: A Commitment to Top Talent
    *   ❏ Cutting-Edge Toolset and Vendors: Empowering Innovation
*   ❏ Future State - Product Roadmap
*   ❏ 32Health Support for client
*   ❏ 32Health Training Support - client
*   ❏ Implementation Strategy & Perspectives
    *   ❏ Module Mapping: client & 32Health Integration
    *   ❏ Implementation Plan
    *   ❏ Implementation Timeline
    *   ❏ Go Live - In Production Proposed Strategy
*   ❏ Strategic Alliance Partnerships & Reinsurance
*   ❏ Functional Differentiators
*   ❏ Partnership & Investment Opportunities
*   ❏ To conclude - Why 32Health?

94

## Slide 95: Licensing Model - CAPS

Confidential & Proprietary

**Licensing Model - CAPS**

**CAPS Licensing Model**
*   Two components: Fixed Fee - Implementation & SaaS PMPM Fee
*   Fixed Fee - Implementation

|       | 2023   | 2024   | 2025   | 2026   |
| :---- | :----- | :----- | :----- | :----- |
|       | $1.0M  | $3.0M  | $3.0M  | $500K  |

*   SaaS Fee $0.40 - $0.48\* (Discount based on the membership)

| Monthly Membership | PMPM  |
| :----------------- | :---- |
| Up to 5M members   | $0.48 |
| 5M - 6M members    | $0.46 |
| 6M - 7M members    | $0.44 |
| 7M - 8M members    | $0.42 |
| 8M+ members        | $0.40 |

**\* Includes the following SaaS Modules**
1.  Eligibility Management
2.  Provider Management
3.  Benefit and Policy Management
4.  Employer Groups
5.  Claim Adjudication
    a. AI Claims Automation
6.  EDI
7.  Financial
    a. Billing
    b. Payment
    c. Receivables
8.  Portals and Support
9.  AI Assisted Contact Center
10. Enterprise Reporting
11. Broker Management
12. Sales Management
13. Compliance & Audit

**\* Includes all upgrades, system maintenance, database, infrastructure costs and any future releases with new features.**

**100% of all requirements from client RFP will be deployed by 32Health**

95

## Slide 96: Licensing Model - Provider Network

Confidential & Proprietary

**Licensing Model - Provider Network**

**Provider Network Licensing Model**
*   Two components: Fixed Fee - Implementation & Per Provider Fee
*   Fixed Fee - Implementation: Two Options:

| Provider Network Module Fees | Fixed Fee - Implementation |
| :--------------------------- | :------------------------- |
| Without NCQA Certification   | $600K (per the Provider Network SOW) |
| With NCQA Certification      | $900K                      |

*   Per Provider Fee
    *   Tiered Price Per Provider - TBD based on the features client selects and the number of Providers managed by 32Health

**\* Includes the following SaaS Module**
1.  Provider Network
    a. Recruitment
    b. Credentialing
    c. Contracting
    d. Re-credentialing
**\* Includes all upgrades, system maintenance, database, infrastructure costs and any future releases with new features.**

**For both CAPS and Provider Network, 32Health will carry out the implementation and integration**

96

## Slide 97: Human Capital Excellence: A Commitment to Top Talent

Confidential & Proprietary

**Human Capital Excellence: A Commitment to Top Talent**

| Resource Name                  | Pre Implementation | Implementation | Post Implementation |
| :----------------------------- | :----------------- | :------------- | :------------------ |
| \# of months                   | tbd                | 18             | 60                  |
| Customer Success Manager       | 0                  | 0              | 1                   |
| Product/Project Manager        | 1                  | 4              | 1                   |
| Technical Architect            | 1                  | 2              | 1                   |
| SW Dev Engineer (FE/BE) Onshore | 0                  | 8              | 2                   |
| SW Dev Engineer (FE/BE) Offshore | 0                  | 16             | 1                   |
| Infrastructure/DevOps Engineer | 0                  | 1              | 1                   |
| SW Engineering Manager         | 0                  | 2              | 0                   |
| Test Engineer                  | 0                  | 5              | 2                   |
| AL/ML Data Scientist           | 0                  | 3              | 1                   |
| Customer Support Engineer      | 0                  | 0              | 2                   |
| **Total 32Health Headcount**   | **2**              | **41**         | **12**              |

97

## Slide 98: SaaS Model

Confidential & Proprietary

**SaaS Model**

*(Image description: A circular diagram representing 32Health's SaaS Enterprise Platform and its components, identical to Slide 87.)*

**32Health’s Software as a Service (SaaS) Enterprise Platform** (central image)

*   **Database application and storage licenses including support, upgrades and maintenance** (top left, cylinder icon)
*   **Cloud Infrastructure licenses including support, upgrades and maintenance** (top right, cloud icon)
    *   Data storage, compute infrastructure scales irrespective of number of users
*   **Reporting & other 3P commercial license** (middle right, document icon)
*   **Continual AI features and enhancements to machine learning models** (bottom right, brain/network icon)
    *   New product features
    *   New integrations with client vendors & partners
*   **Support & Training** (bottom left, person icon)
*   **Application server software and licenses** (middle left, server rack icon)

98

## Slide 99: Cutting-Edge Toolset and Vendors: Empowering Innovation

Confidential & Proprietary

**Cutting-Edge Toolset and Vendors: Empowering Innovation**

| Function                        | Tools / Infrastructure/Vendors                 |
| :------------------------------ | :--------------------------------------------- |
| BI Reporting                    | Looker                                         |
| HelpDesk & Training             | FreshDesk                                      |
| Identity and Access Management  | Auth0 (Single Sign-On)                         |
|                                 | Google Cloud (Cloud Identity)                  |
| Cloud Infrastructure            | Core Infra: Google Cloud (GCE,GKE,Cloud Run, Cloud Fun, Cloud Storage, PubSub, Cloud DR) |
|                                 | API: Google Cloud (Apigee, REST, GRAPHQL, Sendgrid) |
|                                 | Workflow: Google Cloud (Cloud Datastream, Workflow, Data fusion, Dataflow) |
|                                 | Logging & Event Mgmt: (GCP Operations Suite, GCP Chronicle) |
| Version Control and Collaboration | GitHub, Lucid, Google Workspace, Slack         |
| Database Application and Storage| CloudSQL, BigQuery, CloudSpanner               |
| Machine Learning and AI         | Vertex AI, Huggingface                         |

**32Health’s pricing model includes all of the above**

99

## Slide 100: Future State - Product Roadmap

Confidential & Proprietary

**Future State - Product Roadmap**

*(Image description: A roadmap showing new features, integrations, infrastructure, and ML/AI enhancements across years 2024-2028, identical to Slide 84.)*

|            | 2024                                       | 2025                                | 2026                                         | 2027                                        | 2028                                     |
| :--------- | :----------------------------------------- | :---------------------------------- | :------------------------------------------- | :------------------------------------------ | :--------------------------------------- |
| **New Features** | Medicare Product Configuration             | Fintech payment system              | AI Underwriting for Pricing                  | AI assisted self-service portals            | AI suggested product recommendations     |
| **Integrations & TechOps** | Increase the portfolio of enterprise applications: e.g. Salesforce, Oracle, Cisco | Increase EDI and provider portal electronic transactions | Optimize finops and architecture           | Optimize MLOps automation               |                                          |
| **Infrastructure** | Incremental powerful scaling - introduce Kubernetes | Extensive use of Auto-pilot Kubernetes | Upgrade to distributed database              | Increase Infrastructure automation to optimize both internal and external developer experience: e.g. Create Sandboxes |                                          |
| **Machine Learning/AI Enhancements** | Continue expanding partnerships with renowned institutes to collect, research and analyze longitudinal data to build a smarter AI clinical detection system |                                     |                                              |                                             |                                          |
|            | Use Bots for AI assisted contact center    | Use Bots to rectify errors          | Use GenAI and SmartAI agents across all modules |                                             |                                          |
|            | AI in the loop technology to use incremental multi-modal data (e.g.: Claims forms, perio charts, membership, plan configuration, shopping experience) |                                     |                                              |                                             |                                          |
|            | AI automation of high touch point of manual workflows (e.g. reduce data entries) |                                     |                                              | AI Associate/Customer experience - incorporate real time knowledge |                                          |

*   **Increase Ameritas Revenue** (left sidebar label)
*   **Reduce Ameritas Operational Costs** (left sidebar label)
*   **Improve Experience of Providers, Employer Groups & Associates** (left sidebar label)
*   **Improve Compliance & Reduce Risk** (left sidebar label)
*   **NCQA Accreditation** -> CAQH CORE Certification -> Continual updates to system based on State and Federal regulations
*   **Member & Employer Group Portal** -> Broker Portal -> Risk based/value based provider contracting model

100

## Slide 101: 32Health Support for Clients

Confidential & Proprietary

**32Health Support for Clients**

32Health will provide assistance to clients in resolving technical issues, answering questions, and ensuring smooth deployment and operation of 32Health Enterprise SaaS Platform.

32Health will provide a dedicated Customer Success Manager who will be the direct point of contact for client

In addition, the following levels of support will be included:
*   Online Helpdesk: client will have access to a web support portal where client can submit support tickets, ask questions, and request assistance
*   Email & Slack Support: Real-time communication channels to interact with support representatives for quick issue resolution
*   Phone Support: Direct access to Customer Support Engineer through phone calls based on severity of issues
*   Issue Tracking: client can monitor the progress of their support requests and receive updates on the status of their issues via the Online Helpdesk
*   Escalation Procedures: Client can escalate issues directly with the Customer Success Manager
*   Weekly/Monthly/Quarterly Business Meetings - Client team and 32Health’s Customer Success Manager, Product Manager and Customer Support Engineer will have pre-scheduled meetings to discuss feature requests, prioritization of tickets, communicate feature upgrades, business updates, feedback and issues. The frequency of these meetings can be determined

101

## Slide 102: 32Health Training

Confidential & Proprietary

**32Health Training**

32Health will provide training during each deployment of the module that gets integrated with client. FreshDesk platform is leveraged for training support and ticketing. The training will include many topics on how to use the 32Health platform effectively, navigate its features, and achieve their desired outcomes. The following training will be given:
*   Onboarding Workshops: Initial training sessions provided when client start using the 32Health platform. These sessions cover basic features, user interface navigation, and account setup
*   Webinars and Tutorials: Online seminars and video tutorials covering specific modules, advanced features, and best practices will be recorded and available on demand for all types of users
*   Documentation and Guides: 32Health will prepare and give access to comprehensive user guides, manuals, and documentation that client can refer to for self-guided learning
*   Knowledge Base: An online repository of articles, FAQs, and troubleshooting guides to help clients troubleshoot common issues.
*   Custom Training: Tailored training sessions based on client’s users for their specific needs e.g. Super Admin user will require custom training on how to set up the system and platform for other users
*   Regular Updates: 32Health will inform client about new features, enhancements, and updates through newsletters or announcements.
*   Domain Training: Periodically 32Health’s senior dental experts will run live webinar or in-person sessions on industry challenges, regulation changes, and other topics such as AI usage in workflows

102

## Slide 103: Implementation Strategy & Perspective

Confidential & Proprietary

**Implementation Strategy & Perspective**

**Iterative & Agile Phased Implementation Strategy**
*   Iterate on the following agile model
    *   Configure Module → Data Conversion → Core Adjudication Engine → Configure Module
    *   Configuration based with minimal code development
*   Reduce human resources and implementation costs by migrating to the 32Health system in an automated and agile process
    *   Bulk load prior claim history, provider and member data, network contracts, fees and hierarchy
    *   Load plans using Document AI to bring over the existing plan designs
*   Data Driven Implementation
    *   Small sample of data, create requirements, outline edge cases/exceptions, iteration with client team for validation
    *   Change Management & Training Incorporated
*   Designed to provide continual value thus mitigating risk
    *   Identify gaps and risks ahead and resolve them immediately
*   Strong Implementation Team
    *   Domain Expertise
    *   Prior Experience with large legacy conversion projects

**Joint Implementation Approach**
Within each module, iterate on the following:
*   Work with client SME to gather and validate high level requirements
*   32Health configures the module
*   32Health works with client to gather the data
*   32Health convert/loads data into 32Health platform
*   32Health completes system integration testing for those modules
*   client completes Business Acceptance Testing

This approach has worked well from our past experiences and our current client

103

## Slide 104: Module Mapping: client & 32Health Integration

Confidential & Proprietary

**Module Mapping: client & 32Health Integration**

| Implementation Group | client Modules                            | 32Health Modules                            |
| :------------------- | :---------------------------------------- | :------------------------------------------ |
| Group 1              | Provider & Network Management (PNM)       | Provider Network, Provider Management       |
| Group 2              | Sales, Marketing, Products (SMP)          | Sales Management                            |
| Group 2              | Group, Individual, & TPA Administration (GA) | Employer Groups                             |
| Group 2              | Billing & Financial Management (BFM)      | Financial (Billing, Payment, Receivables)   |
| Group 2              | Broker Management (BM)                    | Broker Management                           |
| Group 2              | Casepoint (CA)                            | Employer Groups, Benefit & Policy Management |
| Group 3              | Benefits Administration (BA)              | Benefit & Policy Management                 |
| Group 3              | Eligibility & Enrollment (EE)             | Eligibility Management                      |
| Group 4              | Claims Processing (CP)                    | Claim Adjudication                          |
| Group 4              | Appeals & Grievances (AG)                 | Claim Adjudication                          |
| Group 4              | Compliance (C)                            | Compliance & Audit                          |
| Group 5              | Customer Service (CS)                     | AI Assisted Contact Center                  |
| Group 5              | Reporting & Configuration (RC)            | Enterprise Reporting                        |
| Group 5              | Additional Capabilities (AC)              | Across all 32Health Modules                 |

**32Health SaaS Modules**
1.  Eligibility Management
2.  Provider Management
3.  Provider Network
    a. Recruitment
    b. Credentialing
    c. Contracting
    d. Re-credentialing
4.  Benefit and Policy Management
5.  Employer Groups
6.  Claim Adjudication
    a. AI Claims Automation
7.  EDI
8.  Financial
    a. Billing
    b. Payment
    c. Receivables
9.  Portals and Support
10. AI Assisted Contact Center
11. Enterprise Reporting
12. Broker Management
13. Sales Management
14. Compliance & Audit

**32Health Platform meets all client requirements**

104

## Slide 105: Sample Implementation Plan

*(Image description: A funnel diagram showing four concurrent teams and their implementation groups, alongside detailed lists of modules and data conversion steps.)*

**Sample Implementation Plan**

**Four Concurrent Teams** (top of funnel)

*   **Groups 1, 2, 3** (top section of funnel)
*   **Data Conversion** (middle section of funnel)
*   **Group 4** (lower section of funnel)
*   **Group 5** (bottom section of funnel)

**Configure Modules in Groups 1, 2, 3** (right box, corresponding to top of funnel)
*   Provider & Network Management (PNM)
*   Sales, Marketing, Products (SMP)
*   Group, Individual, & TPA Administration (GA)
*   Billing & Financial Management (BFM)
*   Broker Management (BM)
*   Casepoint (CA)
*   Benefits Administration (BA)
*   Eligibility & Enrollment (EE)

**Data Conversion** (right box, corresponding to middle of funnel)
*   Convert/Load benefit plans (all 75K + plans)
*   Convert/Load all members
*   Convert/Load all existing groups, entities
*   Convert/Load provider data
*   Convert/Load all claims

**Core Adjudication Engine (Group 4)** (right box, corresponding to lower section of funnel)
*   Claims Processing (CP)
*   Appeals & Grievances (AG)
*   Compliance (C)

**Configure Modules in Group 5** (right box, corresponding to bottom of funnel)
*   Reporting & Configuration (RC)
*   Additional Capabilities (AC)

105

## Slide 106: Sample Implementation Timeline - 1M lives

Confidential & Proprietary

**Sample Implementation Timeline - 1M lives**

*(Image description: A Gantt chart showing the implementation timeline for 32Health modules over Q4 2023 to Q1 2025, broken down by Implementation Groups.)*

| Groups | Ameritas Modules | 32Health Modules | Q4 2023 | Q1 2024 | Q2 2024 | Q3 2024 | Q4 2024 | Q1 2025 |
| :----- | :--------------- | :--------------- | :------ | :------ | :------ | :------ | :------ | :------ |
|        |                  |                  | OCT NOV DEC | JAN FEB MAR | APR MAY JUN | JUL AUG SEP | OCT NOV DEC | JAN FEB MAR |
| **1**  | Provider & Network Management (PNM) | Provider Network | [Timeline Bar] | [Timeline Bar] |         |         |         |         |
|        | Provider & Network Management (PNM) | Provider Management | [Timeline Bar] | [Timeline Bar] |         |         |         |         |
| **2**  | Broker Management (BM) | Broker Management |         | [Timeline Bar] | [Timeline Bar] |         |         |         |
|        | Group, Individual, & TPA Administration (GA) | Employer Groups |         | [Timeline Bar] | [Timeline Bar] |         |         |         |
|        | Billing & Financial Management (BFM) | Financial |         | [Timeline Bar] | [Timeline Bar] |         |         |         |
|        | Sales, Marketing, Products (SMP) | Sales Management |         | [Timeline Bar] | [Timeline Bar] |         |         |         |
|        | Casepoint (CA) | Benefit & Policy Management |         |         | [Timeline Bar] | [Timeline Bar] |         |         |
| **3**  | Benefits Administration (BA) | Benefit & Policy Management |         |         | [Timeline Bar] | [Timeline Bar] |         |         |
|        | Eligibility & Enrollment (EE) | Eligibility Management |         |         | [Timeline Bar] | [Timeline Bar] |         |         |
|        | Data Conversion |                  |         |         | [Timeline Bar] | [Timeline Bar] | [Timeline Bar] |         |
|        | System Testing & Integration |                  |         |         |         | [Timeline Bar] | [Timeline Bar] |         |
| **4**  | Claims Processing (CP) | Claim Adjudication |         |         |         | [Timeline Bar] | [Timeline Bar] |         |
|        | Appeals & Grievances (AG) | Claim Adjudication |         |         |         | [Timeline Bar] | [Timeline Bar] |         |
|        | Compliance (C) | Compliance & Audit |         |         |         | [Timeline Bar] | [Timeline Bar] |         |
|        | System Testing & Integration |                  |         |         |         |         | [Timeline Bar] | [Timeline Bar] |
| **5**  | Customer Service (CS) | AI Assisted Contact Center |         |         |         |         | [Timeline Bar] | [Timeline Bar] |
|        | Reporting & Configuration (RC) | Enterprise Reporting |         |         |         |         | [Timeline Bar] | [Timeline Bar] |
|        | Additional Capabilities (AC) | All 32Health Modules |         |         |         |         | [Timeline Bar] | [Timeline Bar] |
|        | System Testing & Integration |                  |         |         |         |         |         | [Timeline Bar] |
|        | Training |                  | [Timeline Bar] | [Timeline Bar] | [Timeline Bar] | [Timeline Bar] | [Timeline Bar] | [Timeline Bar] |

*(Green flags indicate milestones.)*

106

## Slide 107: Go Live - In Production Proposed Strategy

Confidential & Proprietary

**Go Live - In Production Proposed Strategy**

**Strategy A - Begin with one standalone module for one line of business**
*   Start with Provider Network Module (recruiting, credentialing, contracting, onboarding) and roll out for one line of business (e.g. Individual or one state or TPA or one business partner)
*   Roll out Provider Network Module for other lines of business
*   Continue rolling out other logical groups of modules
    *   Pros: Quick value realization for recruiting and contracting Providers to client Network

**Strategy B - All modules for one line of business**
*   Follow the configuration and implementation plan and roll out one line of business at a time
*   Roll out other lines of businesses in two more phases (least risky lines of businesses first, high risky businesses next)
    *   Pros: Lowest risk, ensuring all kinks/bugs are detected early and mitigated, business exceptions for lines of business are identified, segregated in the planned release, feedback can be incorporated into the next business line that goes live, ensuring client’ clients customer satisfaction and SLAs are not disrupted
    *   Cons: client will have to maintain two systems in parallel for a short period of time

**Strategy C - All modules live at once for all lines of business**
*   Least preferred approach
*   Very risky, as minor issues could impact client operations across all lines of business, potentially disrupt the business and have customer dissatisfaction

**32Health is open to client preferred approach and will work together on deploying client strategy**

107

## Slide 108: Strategic Alliance Partnerships & Reinsurance

Confidential & Proprietary

**Strategic Alliance Partnerships & Reinsurance**

*   Strategic Alliance Partners: 32Health Product Architecture supports client’s strategic alliance partners administrative process
    *   client can segregate data administration using entities - different groups and subgroups can be created
    *   Each subgroup can have different billing methods, payment collection methods, different administration type: eg. Fully insured, business partner, different benefit types such as Life insurance, Vision, Medical and Dental
    *   These products can be easily bundled based on Strategic Alliance Partner requirements
    *   SAs Data can be segregated for financial reporting, operational reporting and compliance reporting
    *   32Health system supports multiple contracting model such as rendered claim administration fees, % of claims, fees incorporated from % of claims processed
*   Connectivity: 32Health’s technical architecture is API based and can be easily integrated with 3rd party solutions using appropriate security
    *   32Health can easily integrate with Noyo’s API architecture
    *   32Health can integrate with API/EDI clearing houses
    *   32Health can integrate with National Benefit Administration Systems for eligibility, benefits inquiries, claim status etc
    *   32Health can exchange continuously premium/policy updates with 3rd party partners
*   Distribution: 32Health can integrate with Vendor Sales channels and Broker Portals via APIs
    *   32Health has a Broker Management module configured with client products for calculating and paying Broker commissions with different commission types (eg: Heap, Level etc)
    *   32Health’s Sales Management Module can generate prior underwritten products/benefits and its premiums sales quotes to integrate with client sales channels

108

## Slide 109: Functional Differentiators

Confidential & Proprietary

**Functional Differentiators**

32Health system is designed to scale and extend various levels of complexity in administering provider network transactions, eligibility file transactions, product design encompassing of variety of plans and real-time claim adjudication
*   Individual Records - Accomplished in rich user interface
*   Bulk Level Process - Using Bulk Utility functions interface for various business departments (e.g: provider fees, monthly eligibility files, plan fees)
*   Very large datasets Process: one time claim history (client new client implementations), provider network files

32Health system can support multiple provider networks and network tiering

109

## Slide 110: Partnership & Investment Opportunities

Confidential & Proprietary

**Partnership & Investment Opportunities**

*   32Health SaaS platform can be extended for clients’ Strategic Business Partners
*   32Health can provide AI assisted optimized underwriting models for client Underwriting & Rating services
*   Innovative product designs & launches - 32Health to help client in launching new products in market quicker - e.g. - Value based care
*   New contracting models for Provider Networks (Pay for Performance, Value Based, Outcome based etc. )
*   Work with 32Health jointly to grow medicare and medicaid business
*   Lease client dental network with 32Health’s strategic partners
*   Utilize client underwriting and rating services for 32Health’s strategic partners in ASO

**Opportunity to invest in 32Health and be part of the AI fuelled growth in dental insurance space that is ripe for disruptive innovation**

110

## Slide 111: 32Health can quickly resolve Client pain points

Confidential & Proprietary

**32Health can quickly resolve Client pain points**

| Challenges                                                                                   | Solution                                                                                                                                                                          |
| :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current system has constraints on maximum number of members for a subgroup                   | 32Health’s group and plan benefit structure scales easily to handle millions of members within a subgroup and plan                                                                |
| Rich claim edits and incorporating new CDT codes to plans needs software code development and takes lot of time to deploy them live | 32Health’s system is configurable with no code changes to apply the rich claim edits and incorporate new CDT codes                                                                 |
| Provider credentialing, contracting, fees negotiation and onboarding is all manual           | 32Health’s AI system can quickly deploy Provider Module to automate the current manual workflows related to provider credentialing, recruiting and onboarding                      |
| Member movement among subgroups creates duplicate records and makes member management on claims cumbersome | 32Health’s member and subgroup structure creates a unique record per member that makes it very easy to view claims history for members                                          |

111

## Slide 112: To conclude - Why 32Health?

Confidential & Proprietary

**To conclude - Why 32Health?**

*   32Health is a clinical focused company with strong dental domain expertise
    *   National thought leaders and influencers for clinical administration in ADA, educational institutions, dental boards
*   32Health has extensive experience in Medicare, Medicaid, Individual and Group business
*   Technology expertise
    *   Early adopters of AI for dental domain
    *   Proven experience in execution of major enterprise projects for clients
    *   Senior leadership’s hands-on involvement in the execution of the project to ensure success for client
*   Competitive pricing and value that will deliver high ROI to client
    *   Transparent process with all inclusive pricing
        *   Includes new product features and technology upgrades as presented in the 5-year technology and product roadmaps
        *   Includes AI enhancements, features and continual machine learning that will help client reduce operating costs
*   32Health is open to financial guarantees and penalties if we don’t make our commitment

**Consider us your collaborative partners, seamlessly conducting your R&D without any additional expense**

112