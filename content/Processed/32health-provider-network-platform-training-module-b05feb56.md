---
source_pdf: "https://drive.google.com/file/d/1DY0hLIb2fQVADi50dmVBPhiEhA3VGZBo/view?usp=drivesdk"
drive_folder: "Portfolio/LightSpun/Series A Data Room/Product"
type: portfolio
company: LightSpun
ingested: 2025-12-26
original_filename: "32Health Provider Network Platform Training Module.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1DY0hLIb2fQVADi50dmVBPhiEhA3VGZBo/view?usp=drivesdk)

# Provider Network Overview

32Health's Provider Network module is a single solution for end-to-end provider credentialing and recredentialing. This module, in conjunction with the provider portal, allows for frictionless onboarding of providers, practices and DSOs, as well as powerful and intuitive data management and workflows.

In the 32Health platform application (<clientname>.platform.32health.care), this module's functions is found under the Provider Network item in the navigation sidebar (on the left of the interface).

# Contents

1.  Initial Provider Credentialing
    1.  Provider invitation
        1.  User roles and access
    2.  Prefilling applications
    3.  Invitation queue
    4.  Application Review queue
        1.  Primary Source Verification
            1.  Verifying specialty information
        2.  Adding review comments
        3.  Credentialing verification form
        4.  Handling missing/incorrect provider information
    5.  Clinical Review
    6.  Committee Review
    7.  Countersigning approved contracts
    8.  Archived Applications
2.  Recredentialing
    1.  Recredentialing provider(s)
    2.  Prefilling applications
    3.  Invitation queue
    4.  Application Review queue
        1.  Primary Source Verification
            1.  Verifying specialty information
        2.  Adding review comments
        3.  Credentialing verification form
        4.  Handling missing/incorrect provider information
    5.  Clinical Review
    6.  Committee Review

# 1. Initial Provider Credentialing

The process to onboard a new provider or office begins in the Credentialing submodule of the Provider Network module.

## 1.1. Provider Invitation

The Invite Provider tab is the starting point for inviting a provider to the network. The First Name, Last Name as well as Email for each user that needs to be invited are required. Additionally, the role of the invited user can be specified – if they're an owner, an administrator, or a provider (or a combination of any of them).

**Invite Provider Screen**

Documents that need to be sent to the provider as part of the onboarding packet are also listed here. These include any fee schedules, fee agreements or addendums and agreement contracts.

Users can add multiple documents for fee schedules and fee agreements but only one agreement.

**NOTE**: These documents are linked to the uploaded documents in the application's Document Center Module.

Once the relevant details have been entered, “invite” the provider directly via an email link or “prefill” the application on their behalf before sending it to the providers to complete any remaining sections. Please see the prefill section for additional steps.

On inviting users, an email is sent out with custom messaging, including a link to sign up for an account.

Once the provider goes through with the account creation process, they are shown an onboarding view.

Clicking on the Join Network button takes them to the provider application. The remainder of the provider application is documented in the Provider Application section.

**Provider application onboarding**

### 1.1.1. User Roles and Access

TBD once functionality is rolled out. Access requirements given below:

| Roles            | Access (portal)    | Access (application)                                                                    | Permissions                                                                                                                                                                                                             |
| :--------------- | :----------------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Provider         | Own applications   | Cred: Provider tab -Own row, Plan Fees Recred: Provider tab, Consent and Authorization | Only viewing application, filling out own application (including signing off consent), viewing plan fees, fee agreement, dentist agreement (but not sign-off)                                                            |
| Provider Admin   | All                | Practice Owner, Locations, Provider (signing Provider Consent and Authorization Form)   | Combination of Provider and Admin permissions                                                                                                                                                                           |
| Admin            | All                | Practice Owner, Locations, Provider (General Details)                                   | Adding providers, adding locations                                                                                                                                                                                      |
| Location Admin   | All (for locations assigned) | Practice Owner, Locations, Provider (General Details) for locations assigned            | Adding location (only to one invited), adding providers (only to location invited)                                                                                                                                      |
| Owner            | All                | All (except signing Provider Consent and Authorization Form)                            | Adding providers, adding locations, adding location admins, signing agreements                                                                                                                                          |
| Owner Provider   | All                | All (including Consent and Authorization form for self)                                 | All (except other providers)                                                                                                                                                                                            |

## 1.2. Prefilling Applications

**Prefill Queue Screen**

| Provider Name      | Office Name    | Email                          | Plans                                                                                                                                                                                          | Application | Application Age | Created On        | Created By | Modified On       | Modified By | Actions |
| :----------------- | :------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :-------------- | :---------------- | :--------- | :---------------- | :---------- | :------ |
| Susana Lizaso      | ABC Dental Miami | vaishnavi@32health.care        |                                                                                                                                                                                                |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Mayra Fandino      | ABC Dental Miami | vaishnavi@32health.care        |                                                                                                                                                                                                |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Milton Ruiz        | ABC Dental Miami | vaishnavi@32health.care        |                                                                                                                                                                                                |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Michael Aaro       | Shining Tooth  | vaishnavi@32health.care        | Basic Option Dental Plan, Basic Option with Specialty Care                                                                                                                                     |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Niharika Kadvekar  | Test Office    | niharika@32health.care         | HealthSun, HealthSun 5000, HS2000-2, HS5000-2                                                                                                                                                 | Θ           | 3 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Niharika Kadvekar  | Test Office    | niharika@32health.care         | HS5000-2, HS2000-2, HealthSun, HealthSun 5000                                                                                                                                                 | Θ           | 3 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Niharika Kadvekar  | Test Office    | niharika@32health.care         | HealthSun, HS2000-2, HS5000-2                                                                                                                                                                 | Θ           | 3 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| **1-37 of 37 items** |                |                                |                                                                                                                                                                                                |             |                 |                   |            |                   |             |         |
| **< 1 >**          |                | **50/page**                    |                                                                                                                                                                                                |             |                 |                   |            |                   |             |         |

Once a provider application has been generated to be prefilled, they appear at the top of the Prefill Queue. The applications can be viewed and filled in by clicking on the document icon in the Application column.

The Created On and Created By columns show the user that generated the application (based on their application login credentials) and the date and time that they generated the application on. Similarly, once a user enters data or otherwise modifies the provider application, the Modified By and Modified On columns reflect the latest information of user name and date time.

The Plans column shows the plans that the provider has been invited to participate in. This cannot be modified once the application is generated.

If an application has been generated in error, it can be archived by selecting the “Archive Application” from the Actions menu (the right-most column in the above screenshot).

Finally, the platform also allows for tracking the age of a given provider invite. This is indicated in days under the Application Age column.

Applications can be sent to the providers by selecting the “Send to Provider” option in the Actions menu, or by navigating into an application via the document icon and selecting the button of the same name on the top right of the interface.

## 1.3. Invitation Queue

Once an application for new provider credentialing or recredentialing has been sent, the same can be tracked in the Invitation Queue. This queue is similar in function to the Prefill Queue with few differences.

The Application Status lets users know if the application has been viewed by the provider, or been filled in and finally submitted.

The Progress column indicates the approximate percentage of the total application that the provider has completed. This is a handy way to know if a provider intends to complete and submit the application.

The Application Age column can be used to find provider applications that are getting stale. These can be then Archived by using the “Archive Application” action in the Actions menu (right most column).

**Invitation Queue**

| Provider Name    | Office Name    | Email                     | Plans                                                                                                                                                                          | Application Age | Created On        | Created By | Modified On       | Modified By | Application Status | Progress | Actions |
| :--------------- | :------------- | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :---------------- | :--------- | :---------------- | :---------- | :----------------- | :------- | :------ |
| Michael Aaro     | Shining Tooth  | vaishnavi@32health.care   | HS2000-2, HealthSun 5000, HealthSun, HS5000-2                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 0%       | =       |
| Susana Lizaso    | ABC Dental Miami | vaishnavi@32health.care   | HS2000-2, HS5000-2, HealthSun 5000, HealthSun                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 40%      | =       |
| Mayra Fandino    | ABC Dental Miami | vaishnavi@32health.care   | HS2000-2, HS5000-2, HealthSun 5000, HealthSun                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 40%      | =       |
| Milton Ruiz      | ABC Dental Miami | vaishnavi@32health.care   | HS2000-2, HS5000-2, HealthSun 5000, HealthSun                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 40%      | =       |
| **1-50 of 155 items** |                |                           |                                                                                                                                                                                |                 |                   |            |                   |             |                    |          |         |
| **< 1 2 3 4 >** |                | **50/page**               |                                                                                                                                                                                |                 |                   |            |                   |             |                    |          |         |

## 1.4. Application Review Queue

Once an application is submitted from the portal, these show up in the platform application under the Application Review tab under the Credentialing and Recredentialing submodules.

The primary focus of this section of the application is to be able to run fully automated primary source verification on the submitted application.

**NOTE**: In this screen, each row represents each individual provider. So, for example, if an application is received with 3 providers, this single application would be 3 rows (each for each provider) in this screen.

**Application Review Screen**

| Provider Name | Office Name    | Email                      | Plans                                                                                                                                                                                                                         | Application Age | Submitted On        | PSV Status   | PSV Outcome | Verification Date | PSV Report | CVF | Contracts | Review Result | Actions |
| :------------ | :------------- | :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :------------------ | :----------- | :---------- | :---------------- | :--------- | :-- | :-------- | :------------ | :------ |
| Michael Aaro  | Office\_1      | cbbzwse@example.com        |                                                                                                                                                                                                                               | 3 days          | 07/31/2024 at 10:15 PM | Failed       |             |                   |            |     |           |               | =       |
| Etha Kozey    | Office\_1      | vaishnavi@32health.care    |                                                                                                                                                                                                                               | 3 days          | 07/31/2024 at 7:39 PM   |              |             |                   |            |     |           |               | =       |
| Milton Ruiz   | ABC Dental Miami | taher@32health.care        | Dr Max-B-H4140009, Dr ExtraCare - H4140004, Dr Value - H4140005, Sun Dental Plan Preferred, Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value-B - H4140011, Dr Max - H4140001 | 9 days          | 07/23/2024 at 7:06 PM   | Completed    | No Issues   | 08/05/2024 at 11:50 AM | 园          | 园  | A         |               | =       |
| **1-3 of 3 items** |                |                            |                                                                                                                                                                                                                               |                 |                     |              |             |                   |            |     |           |               |         |
| **< 1 >**     |                | **50/page**                |                                                                                                                                                                                                                               |                 |                     |              |             |                   |            |     |           |               |         |

Similar to the Prefill and Invitation queues, there are columns for Plans and Application Age to better identify each application and track their age.

To begin the automated verification, select the “Run Verification” option from the Actions menu on the right-most column. This will change the status of the application to Verification in Progress. This is shown in the PSV Status column.

Once the verification runs, this status will change to Completed or Failed if the verification is successful or not. If Failed, users can re-run the automated verification after manually checking the provider's application for any issues.

Once automated primary source verification (PSV) runs successfully, additional columns, namely PSV Outcome, PSV report and CVF are populated.

Depending on the verification, PSV outcome can be: No issues (for clean reports), or Issues Found (for providers whose reports were not clean).

### 1.4.1. Primary Source Verification

The PSV report generated for each provider contains the details gathered from various sources. These are organized across the tabs shown for each relevant section. The PSV report includes information and documentation provided in the provider application – specifically in the Education, Work History, Attestation and Liability Insurance tabs.

**Primary Source Verification Report**

| Field                 | Value                                  |
| :-------------------- | :------------------------------------- |
| Provider Name         | Susana Lizaso                          |
| State License         | Sanctions, NPDB, NPI, Medicaid/Medicare, Specialty, DEA/CDS, Education, Work History, Attestations, Liability Insurance |
| License Number        | DN14242                                |
| License Status        | CLEAR/Active                           |
| Licensing State       | Florida                                |
| License Type          | Dentist                                |
| Issue Date            | 03/13/1996                             |
| Expiration Date       | 02/28/2026                             |
| Permits               |                                        |
| Provider Designation  |                                        |
| Address               | 4999 WEST 8TH AVENUE, STE. 28, HIALEAH, FL 33012,, |
| Snapshot Link         | Snapshot Link                          |
| Verification Date     | 07/05/2024 at 9:25 PM                  |
| Certificate PDF Link  |                                        |
| Source                | State Board                            |

Where applicable, snapshot links are provided that represent the original source for the details collected. These are screenshots of the primary source sites, or documents generated and collected from primary sources.

Primary Source Verification reports can be downloaded for offline review/storage using the "Download Report” or “Download Report with PSV” actions at the top of the interface.

*   **Download Report** – PSV report without the primary source snapshots
*   **Download Report with PSV** – PSV report with the snapshots (screenshots of the primary sources)

### 1.4.2. Adding Review Comments

Once a provider's application and PSV report has been verified, the same can be noted on the application's row by adding a comment to the application. This can be done using the "Add Comment” option in the Actions menu and selecting a flag value from the pop-up. These values can be:

1.  **Clean** – for a provider application with no issues.
2.  **Missing information** – for applications with missing or incorrect data.
3.  **Issue Found** – for applications with provider sanctions or other issues that require review.

**Review Comments**

| Field          | Value                          |
| :------------- | :----------------------------- |
| Provider Name  | Michael Aaro                   |
| Office Name    | Office\_1                      |
| Email          | cbbzwse@example.com            |
| Plans          |                                |
| PSV Status     | Failed                         |
| PSV Outcome    |                                |
| Verification Date |                                |
| PSV Report     |                                |
| CVF            |                                |
| Contracts      |                                |
| Review Result  |                                |
| Actions        | =                              |
| Provider Name  | Etha Kozey                     |
| Office Name    | Office\_1                      |
| Email          | vaishnavi@32health.care        |
| Plans          |                                |
| PSV Status     |                                |
| PSV Outcome    |                                |
| Verification Date |                                |
| PSV Report     |                                |
| CVF            |                                |
| Contracts      |                                |
| Review Result  |                                |
| Actions        | =                              |
| Provider Name  | Milton Ruiz                    |
| Office Name    | ABC Dental Miami               |
| Email          | taher@32health.care            |
| Plans          | Dr Max-B-H4140009, Dr ExtraCare - H4140004, Dr Value - H4140005, Sun Dental Plan Preferred, Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value-B - H4140011, Dr Max - H4140001 |
| PSV Status     | Completed                      |
| PSV Outcome    | No Issues                      |
| Verification Date | 08/05/2024 at 11:50 AM         |
| PSV Report     | 凤                             |
| CVF            | 园                             |
| Contracts      | A                              |
| Review Result  |                                |
| Actions        | =                              |

| Add Comment (Pop-up) |
| :------------------- |
| Flag                 |
| Clean                |
| Missing Information  |
| Issue Found          |

Once set these flag values populate the Review Result column in the Application Review screen for the given application. These comments and flag values are also displayed in the Activity tab of the provider's application (as shown in the screenshot below).

**Provider Application Activity**

| User | Role | Modified At      | Flag        | Comment                                      |
| :--- | :--- | :--------------- | :---------- | :------------------------------------------- |
|      |      | 08/05/2024 at 1:16 PM | Issue Found | This provider has sanctions that need to be reviewed in Committee. |

#### 1.4.1.1 Verifying Specialty Information

For providers that indicate that they're a specialist, the specialty certificates can be manually verified using the application.

*   To do this, click on Add Specialty under the Specialty tab of the PSV report.
*   Select the Board Certified Specialty from the list that pops up and upload the relevant specialty certificate PDF file received from the provider or from the board site.

The application will extract the requisite details into the PSV report such as the certificate number, original certification date, current certificate date and certificate expiration date.

**Specialty verification process**

| Field                  | Value                    |
| :--------------------- | :----------------------- |
| Provider Name          | Susana Lizaso            |
| Board Certified Specialty | Oral and Maxillofacial Surgery |
| Upload Certificate     | Upload                   |

### 1.4.3. Credentialing Verification Form (CVF)

Once Primary Source Verification (PSV) is run for a provider application, a Credentialing Verification Form (CVF) needs to be generated in addition to the PSV report.

To generate this, click on the document icon in the CVF column and click “Generate sign-off report”.

The CVF contains information from the PSV process automatically extracted and applied to the CVF template that is loaded in the Document Center.

Once the generated form has been verified, click “Sign off” to bring up the pop up sign off screen. Once signed-off, the user name and date is applied along with optional review comments to the CVF.

**CVF document**

| CREDENTIALING VERIFICATION FORM                        |
| :----------------------------------------------------- |
| Provider Name: Anita Pandey                            |
| Specialty: DDS/DMD/Other - DMD                         |
| Application Receive Date: 07/26/2024                   |
| Signed Attestation Date: 07/26/2024                    |
| Previous Credentialing Committee Date: N/A             |
| Education General (Institution Name and Graduation Date): Marquette University School of Dentistry |
| Education Specialty (Institution Name and Graduation Date): 06/26/2019 |
| CV/Resume Provided: Yes                                |
| **License Verification**                               |
| License #: DN14642                                     |
| Issue Date: 07/16/1997                                 |
| Expiration Date: 02/28/2026                            |
| Status: CLEAR/Active                                   |
| Disciplinary Actions: No                               |
| Verification Date: Verified By                         |
| **Specialty Board Certification Verification**           |
| Certificate #:                                         |
| Issue Date:                                            |
| Expiration Date:                                       |
| Status: Verified By                                    |
| Disciplinary Actions: No                               |
| Verification Date: Verified By                         |
| **NPI Verification**                                   |
| NPI #: 1841370558                                      |
| Status: Active                                         |
| Verification Date: Verified By                         |
| **DEA Verification**                                   |
| Certificate #: BP5527227                               |
| Expiration Date: 03/31/2027                            |
| Verification Date: Verified By                         |
| **CDS Verification**                                   |
| Certificate #: NA                                      |
| Expiration Date: NA                                    |
| Verification Date: Verified By                         |
| **Professional Liability Information**                   |
| Insurance Company Name: ACME                           |
| Policy #: AB1234                                       |
| Per Incident Limit: 100000                             |
| Aggregate Limit: 300000                                |
| Expiration Date: 07/30/2027                            |

**CVF sign-off screen**

| Confirmation                                                    |
| :-------------------------------------------------------------- |
| I agree and understand that by signing the Electronic Signature Acknowledgment and Consent Form, that all electronic signatures are the legal equivalent of my manual/handwritten signature and I consent to be legally bound to this agreement. I further agree my signature on this document is as valid as if I signed the document in writing. This is to be used in conjunction with the use of electronic signatures on all forms regarding any and all future documentation with a signature requirement, should I elect to have signed electronically. Under penalty of perjury, I herewith affirm that my electronic signature, and all future electronic signatures, were signed by myself with full knowledge and consent and am legally bound to these terms and conditions. |
| ✔ I agree                                                       |
| Name (used for signature) \*: Test User                         |
| Comment: Provider application is clean                          |
| \[Cancel] \[Sign]                                               |

**CVF Comments Applied**

| CREDENTIALING VERIFICATION FORM                        |
| :----------------------------------------------------- |
| **National Practitioners Data Bank**                     |
| Verification Date: 08/12/2024                          |
| Queried By: NA                                         |
| Issues: NA                                             |
| **Reports**                                            |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **OIG**                                                |
| OIG: Pass                                              |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **SAM**                                                |
| SAM: Pass                                              |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **Medicare Opt Out**                                   |
| Medicare Opt Out: Pass                                 |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **CMS Preclusion List**                                |
| CMS Preclusion List: NA                                |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **AHCA**                                               |
| AHCA: Pass                                             |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **Reviewer Comments**                                  |
| Provider application is clean                          |
| Verified By Test User                                  |
| Date: 08/12/2024                                       |

**NOTE**: Once Primary Source Verification is re-run for a provider, then the CVF is also re-generated. This is to ensure the latest information from the report is represented in the document, requiring a new sign-off.

### 1.4.4. Handling Missing/Incorrect Provider Information

For providers whose primary source verification fails due to incorrect or missing information, the same can be noted on the review comments screen.

For applications that have missing information, indicate the same in the Review Comments. Set the Flag to Missing Information.

This will send a notification to the provider portal, and unlock the application for the provider to be able to make changes and “submit” again.

**Save Comments**

| Field                     | Value                     |
| :------------------------ | :------------------------ |
| Owner/Corporate First Name | Milton                    |
| Owner                     | Ruiz                      |
| Title                     | DDS                       |
| O DMD                     |                           |
| Business Type             | Individual                |
| Group                     | DSO                       |
| CHC/FQHC                  |                           |
| Owner/Corporate Dental License Number | 458958490                 |
| State                     | Florida                   |
| Issuance Date             | 05/01/2022                |
| Expiration Date           | 05/31/2024                |
| Status of Dental License  | Active                    |
| Inactive                  |                           |
| Do you have an EIN/TIN?   | EIN                       |
| TIN                       |                           |
| Owner/Corporate EIN       | 989898989                 |
| Is vendor credentialing?  | Yes                       |
| No                        |                           |
| Is vendor?                | Yes                       |
| No                        |                           |
| Vendor Name               | Addl Services Inc         |
| **Add Comment before saving** |                           |
| Add Comment \*            |                           |
| Cancel                    | Save                      |

Once the application is received on the platform side, missing information can be entered into the application by the Provider Network team.

On each save, users will be required to add a comment for the details of information entered or altered, and the same is also noted in the Activity tab of the provider application for audit history.

## 1.5. Clinical Review

If an application requires review by a Clinician, the same can be sent to a separate queue called Clinical Review. This can be done by selecting the option “Send to Clinical Review" from the Application Review screen.

Once an application is sent to Clinical Review, personally identifiable information is automatically redacted so the clinician's review is not subject to any bias.

This redaction applies to the main interface screens, PSV reports, as well as the PDF snapshot links within the PSV report.

**Clinical Review Queue**

| Provider Name | Office Name | Email                     | Plans                                                                                                                                              | Application Age | PSV Report | CVF | Review Result | Actions |
| :------------ | :---------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :--------- | :-- | :------------ | :------ |
|               |             | vaishnavi@32health.care   | Dr Value - H4140005, Dr ExtraCare - H4140004, Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value-B - H4140011, Dr Max - H4140001, Dr Max-B-H4140009 | 9 days          | 同         | 园  |               | =       |
| **1-1 of 1 items** |             |                           |                                                                                                                                                    |                 |            |     |               |         |
| **< 1 >**     |             | **50/page**               |                                                                                                                                                    |                 |            |     |               |         |

**Clinical Review - redacted PSV report**

| Field                 | Value                                  |
| :-------------------- | :------------------------------------- |
| Provider Name         | \[Redacted]                            |
| State License         | Sanctions, NPDB, NPI, Medicaid/Medicare, Specialty, DEA/CDS, Education, Work History, Attestations, Liability Insurance |
| License Number        | \[Redacted]                            |
| License Status        | CLEAR/Active                           |
| Licensing State       | \[Redacted]                            |
| License Type          | Dentist                                |
| Issue Date            | 01/22/1993                             |
| Expiration Date       | 02/28/2026                             |
| Permits               |                                        |
| Provider Designation  | \[Redacted]                            |
| Address               | \[Redacted]                            |
| Snapshot Link         | Snapshot Link                          |
| Verification Date     | 07/23/2024 at 6:33 PM                  |
| Certificate PDF Link  |                                        |
| Source                | State Board                            |

**Redacted snapshot**

| Field                      | Value              |
| :------------------------- | :----------------- |
| **Department of Health**   |                    |
| FLHealthSource.gov         | Public Data Portal |
| New Licensed Health Care Practitioners | Q Search Home      |
| Site Help                  |                    |
| License Verification       |                    |
| Printer Friendly Version   |                    |
| DMD                        |                    |
| License Number             | \[Redacted]        |
| Data As Of 7/23/2024       |                    |
| License Information        | Secondary Locations |
| Discipline/Admin Action    |                    |
| Profession                 | Dentist            |
| License Status             | CLEAR/Active       |
| License Expiration Date    | 2/28/2026          |
| License Original Issue Date | 01/22/1993         |
| Address of Record          | \[Redacted]        |
| Controlled Substance Prescriber (for the Treatment of Chronic Non-malignant Pain) | No                 |
| Discipline on File         | No                 |
| Public Complaint           | No                 |
| Back                       |                    |
| For instructions on how to request a license certification of your Florida license to be sent to another state from the Florida Department of Health, please visit the License Certifications web page. |                    |
| Primary Source Verified    |                    |
| July 23, 2024 01:02 PM (UTC) |                    |

## 1.6. Committee Review

For applications that are ready to be reviewed by a committee, these can be sent from the Application Review screen by selecting the “Send to Committee Review" option from the Actions menu. All provider applications that are sent here are queued up in the Active Review tab of the Committee Review submodule.

From this screen, a new committee can be scheduled using the Create Committee Meeting button. If an Active committee is in progress, this option is disabled, and the Active Committee button is enabled for the selected committee date.

Provider applications can be sent to an active committee from the Active Review tab using the "Send to Active Committee” option in the Actions menu.

**Committee Review Queue**

| Provider Name | Office Name | Email                     | Plans                                                      | Application | Application Age | Submitted On        | PSV Report | CVF | Contracts | Review Result | Actions |
| :------------ | :---------- | :------------------------ | :--------------------------------------------------------- | :---------- | :-------------- | :------------------ | :--------- | :-- | :-------- | :------------ | :------ |
| Michael App\_1 |             | vaishnavi@32health.care   | Bright Health Adult Plan, Dr ExtraCare - H4140004, Basic Option Dental Plan |             | 3 days          | 07/04/2024 at 4:59 PM | 同         | 园  | A         |               | =       |
| **1-1 of 1 items** |             |                           |                                                            |             |                 |                     |            |     |           |               |         |
| **< 1 >**     |             | **50/page**               |                                                            |             |                 |                     |            |     |           |               |         |

Within an Active Committee Meeting, provider applications can be decision-ed on based on their PSV reports, and submitted applications. Providers can be designated as Approved, Approved Conditional, Not Approved, or Conditionally Not Approved.

Additionally, the effective date of these decisions can be set for each provider. By default, this is set to the first of the subsequent month that the committee meets. If the provider is deemed to be approved conditionally, an optional approval period can be set – 12, 18, or 24 months instead of the default 36 month credentialing period.

**Active Committee Meeting**

| Committee Meeting Date: 07/05/2024 |                         |                         |
| :--------------------------------- | :---------------------- | :---------------------- |
| Sign-in Sheet                      | Committee Meeting Agenda | Committee Review Templates |

| NPI          | Decision              | Effective Date | Approval Period | First Name | Last Name | Specialty | Medicare/Medi Network | Actions |
| :----------- | :-------------------- | :------------- | :-------------- | :--------- | :-------- | :-------- | :-------------------- | :------ |
| 1740899095   | Approve Conditional   | 08/01/2024     | 18 Months       | Katrina    | Fins      |           | Yes                   | =       |
| 1689057432   | Approve               | 08/01/2024     |                 | Connie     | Feng      |           |                       | =       |
|              | Approve Conditional   |                |                 |            |           |           |                       |         |
|              | Not Approved          |                |                 |            |           |           |                       |         |
|              | Conditionally Not Approved |                |                 |            |           |           |                       |         |
| **1-2 of 2 items** |                       |                |                 |            |           |           |                       |         |
| **< 1 >**    | **50/page**           |                |                 |            |           |           |                       |         |

Finally, the application allows for uploading documents used in the committee meeting such as the sign-in sheet and agenda. The templates for these are available through the Document Center module as well as by selecting the Committee Review Templates button in the top right of the interface.

Once a committee meeting is submitted, a snapshot of the decisions, dates and committee documents are recorded for future under the Archived Review tab. Each row in the Committee Archive table represents a separate committee meeting.

**Committee Archived Review**

| Committee Meeting Date | Committee Report | Providers Reviewed | Providers Approved | Providers Conditionally Approved | Providers Not Approved | Providers Conditionally Not Approved |
| :--------------------- | :--------------- | :----------------- | :----------------- | :------------------------------- | :--------------------- | :----------------------------------- |
| 08/02/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/26/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/30/2024 at 11:18 AM |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/30/2024 at 2:10 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/26/2024 at 6:19 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/24/2024 at 9:13 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/19/2024 at 9:00 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/17/2024 at 6:05 PM  |                  | 2                  | 1                  | 0                                | 1                      | 0                                    |
| 07/16/2024 at 4:20 PM  |                  | 2                  | 1                  | 0                                | 1                      | 0                                    |
| 07/16/2024 at 12:15 PM |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/12/2024 at 7:21 PM  |                  | 4                  | 2                  | 0                                | 1                      | 1                                    |
| 07/11/2024 at 7:49 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/21/2024 at 5:30 AM  |                  | 2                  | 1                  | 0                                | 1                      | 0                                    |
| 07/26/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 06/12/2024 at 11:39 PM |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 06/07/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 05/20/2024 at 9:53 PM  |                  | 4                  | 1                  | 0                                | 0                      | 3                                    |
| **1-18 of 18 items**   |                  |                    |                    |                                  |                        |                                      |
| **< 1 >**              | **50/page**      |                    |                    |                                  |                        |                                      |

On the provider's side, once a committee has been submitted, the decisions are updated in the provider portal and any approval or denial notices are sent via email as well as through the provider portal.

## 1.7. Countersigning approved contracts

New credentialing provider applications that have been approved or approved conditionally in the Committee review process, will show up under the Contracting submodule for countersignature.

The Contracts column for each application displays only the documents that need to be countersigned by the carrier. In the agreement tabs of the Contracts, select the Countersign button on the bottom right of the interface to bring up the countersignature popup. Once the name and title are provided, the countersignature is applied to the PDF document.

After both documents have been countersigned, these can be sent to the provider automatically via email as well as through the provider portal.

**Contracting Queue**

| Provider Name      | Office Name    | Email                     | Plans                                                                                                                                                                                                                         | Application | Submitted On        | PSV Report | Contracts | Review Result     | Actions |
| :----------------- | :------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :------------------ | :--------- | :-------- | :---------------- | :------ |
| LIUDMILA LABRADA   | ToothCare      | vaishnavi@32health.care   | HS2000-2, HealthSun, HS5000-2, HealthSun 5000                                                                                                                                                                                 |             | 07/03/2024 at 4:11 PM | 同         | A         | Approved          | =       |
| Susana Lizaso      | ABC Dental Miami | vaishnavi@32health.care   | Sun Dental Plan Preferred                                                                                                                                                                                                     |             | 07/02/2024 at 6:50 PM | 艮         | A         | Approved Conditional | =       |
| LIUDMILA LABRADA   | ABC Dental Miami | vaishnavi@32health.care   | Sun Dental Plan Preferred                                                                                                                                                                                                     |             | 07/02/2024 at 6:50 PM | 艮         | A         | Approved          | =       |
| DAVID GIRARDI      | Shining Tooth  | ndc.corp@yahoo.com        | Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value - H4140005, Dr Max - H4140001, Dr Value-B - H4140011, Dr Max-B - H4140009, Dr ExtraCare - H4140004 |             | 07/01/2024 at 1:21 PM | 凤         | A         | Approved          | =       |
| Michael Aaro       | Office\_1      | rhuzedn@example.com       |                                                                                                                                                                                                                               |             | 06/27/2024 at 12:45 PM | 艮         | A         | Approved          | =       |
| Susana Lizaso      | ABC Dental Miami | vaishnavi@32health.care   |                                                                                                                                                                                                                               |             | 06/26/2024 at 8:44 PM | 艮         | A         | Approved          | =       |
| Milton Ruiz        | ABC Dental Miami | kristen@32health.care     |                                                                                                                                                                                                                               |             | 06/17/2024 at 10:23 PM | 艮         | A         | Approved          | =       |
| Michael Aaro       |                | vv@dd.cc                  |                                                                                                                                                                                                                               |             | 06/17/2024 at 6:31 DM | 艮         | A         | Approved          | =       |
| **1-18 of 18 items** |                |                           |                                                                                                                                                                                                                               |             |                     |            |           |                   |         |
| **< 1 >**          |                | **50/page**               |                                                                                                                                                                                                                               |             |                     |            |           |                   |         |

**Countersignature Popup**

| Confirmation                                                    |
| :-------------------------------------------------------------- |
| I agree and understand that by signing the Electronic Signature Acknowledgment and Consent Form, that all electronic signatures are the legal equivalent of my manual/handwritten signature and I consent to be legally bound to this agreement. I further agree my signature on this document is as valid as if I signed the document in writing. This is to be used in conjunction with the use of electronic signatures on all forms regarding any and all future documentation with a signature requirement, should I elect to have signed electronically. Under penalty of perjury, I herewith affirm that my electronic signature, and all future electronic signatures, were signed by myself with full knowledge and consent and am legally bound to these terms and conditions. |
| ✔ I agree                                                       |
| Title                                                           |
| Type the name which will be used as your signature \*           |
| \[Cancel] \[Sign]                                               |

## 1.8. Archived Applications

Once applications have been approved and countersigned, or not approved, as part of the Committee meeting, they are available to view in the Archived Applications view. This is available under both the Credentialing and Recredentialing submodules within the application.

This view also includes the discarded applications from the Prefill and Invitation queues for both the submodules.

**Archived Applications queue**

| Provider Name    | Office Name    | Email                     | Plans                                                      | Application | Application Age | Submitted On        | PSV Report | CVF | Contracts | Review Result | Actions |
| :--------------- | :------------- | :------------------------ | :--------------------------------------------------------- | :---------- | :-------------- | :------------------ | :--------- | :-- | :-------- | :------------ | :------ |
| Michael Aaro     | Office\_1      | jwgafis@example.com       |                                                            |             | 0 days          | 07/09/2024 at 2:18 PM | 艮         | A         |             |             |         |
| Michael Aaro     | ToothCare      | vais@yu.cc                | HS2000-2, HealthSun, HS5000-2, HealthSun 5000              |             | 4 days          | 07/03/2024 at 4:11 PM | 艮         | 同  | A         | Not Approved  |         |
| Michael Aaro     | ABC Dental Miami | vaishnavi@32health.care   | Sun Dental Plan Preferred                                  |             | 5 days          | 07/02/2024 at 6:50 PM | 艮         | A         | Not Approved  |         |
| Michael Aaro     | Office\_1      | gwuurkv@example.com       |                                                            | Θ           | 5 days          | 07/02/2024 at 1:03 PM | 艮         | A         |             |             |         |
| Michael Aaro     | Office\_1      | vvhkxjx@example.com       |                                                            |             | 5 days          | 07/02/2024 at 12:39 PM | 艮         | A         |             |             |         |
| Michael Aaro     | ABC Dental Jupiter | vaishnavi@32health.care   |                                                            |             | 6 days          | 07/01/2024 at 7:39 PM | 艮         | A         |             |             |         |
| LIUDMILA LABRADA | ABC Dental Jupiter | vaishnavi@32health.care   |                                                            |             | 6 days          | 07/01/2024 at 7:39 PM | 艮         | A         |             |             |         |
| Michael Aaro     | a              | vaishnavi@32health.care   | Basic Option with Specialty Care, Enhanced Dental Plan with |             | 8 days          | 06/27/2024 at 3:20 PM | 艮         | A         |             |             |         |
| **1-22 of 22 items** |                |                           |                                                            |             |                 |                     |            |     |           |               |         |
| **< 1 >**        |                | **50/page**               |                                                            |             |                 |                     |            |     |           |               |         |

# 2. Recredentialing

## 2.1. Recredentialing Provider(s)

Providers that are already loaded in the 32Health application can be recredentialed from within the Recredentialing submodule. The Upcoming screen lists all the providers in the database whose recredentialing dates are coming up. By default, these are bucketed as providers whose recredentialing date occurs in the next 0 - 30 days, 31 - 60 days, 61 - 90 days, and 91 - 120 days.

**Recredentialing Upcoming Providers Screen**

| Provider Name             | NPI        | Email Address             | Last Credentialing Date | Next Credentialing Date | Status | Actions |
| :------------------------ | :--------- | :------------------------ | :---------------------- | :---------------------- | :----- | :------ |
| David Rappaport           | 1639280381 | vaishnavi@32health.care   | 07/30/2021              | 07/30/2024              | Invited | =       |
| Ilvain Hechavarria Sanchez | 1871154203 | prasoon@32health.care     | 07/30/2021              | 07/30/2024              |         | =       |
| Wendy Batista Rodriguez   | 1093351207 | taher@32health.care       | 07/30/2021              | 07/30/2024              |         | =       |
| Jacqueline Mendoza        | 1598171506 | kristen@32health.care     | 07/02/2020              | 07/31/2024              | Invited | =       |
| Jose Abrahantes           | 1528553781 | vaishnavi@32health.care   | 06/25/2021              | 07/31/2024              | Invited | =       |
| Liuvis Martinez           | 1306413034 |                           | 07/01/2021              | 07/31/2024              |         | =       |
| Michael Newman            | 1407078124 |                           | 07/08/2021              | 07/31/2024              |         | =       |
| Nikola Skakavac           | 1528676541 |                           | 07/08/2021              | 07/31/2024              |         | =       |
| Patricia Bobadilla        | 1124039672 |                           | 06/25/2021              | 07/31/2024              |         | =       |
| Ross Hauer                | 1063871804 |                           | 07/01/2021              | 07/31/2024              |         | =       |
| Sakina Khambaty           | 1023245909 | sakinadr@gmail.com        | 07/02/2020              | 07/31/2024              |         | =       |
| Shehnaz Shirazi           | 1356529085 |                           | 07/08/2021              | 07/31/2024              |         | =       |
| **1-12 of 12 items**      |            |                           |                         |                         |         |         |
| **< 1 >**                 |            | **50/page**               |                         |                         |         |         |

Recredentialing applications can be generated for these providers manually as well as automatically. Once a provider has been “invited” to recredentialing, their Status is updated to "Invited” as shown in the screenshot above.

**NOTE**: In order to invite providers for recredentialing, it's mandatory that their emails be updated as this is used to push the application to the provider.

## 2.2. Prefilling Applications

**Prefill Queue Screen**

| Provider Name      | Office Name    | Email                          | Plans                                                                                                                                                                                          | Application | Application Age | Created On        | Created By | Modified On       | Modified By | Actions |
| :----------------- | :------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :-------------- | :---------------- | :--------- | :---------------- | :---------- | :------ |
| Susana Lizaso      | ABC Dental Miami | vaishnavi@32health.care        |                                                                                                                                                                                                |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Mayra Fandino      | ABC Dental Miami | vaishnavi@32health.care        |                                                                                                                                                                                                |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Milton Ruiz        | ABC Dental Miami | vaishnavi@32health.care        |                                                                                                                                                                                                |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Michael Aaro       | Shining Tooth  | vaishnavi@32health.care        | Basic Option Dental Plan, Basic Option with Specialty Care                                                                                                                                     |             | 0 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Niharika Kadvekar  | Test Office    | niharika@32health.care         | HealthSun, HealthSun 5000, HS2000-2, HS5000-2                                                                                                                                                 | Θ           | 3 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Niharika Kadvekar  | Test Office    | niharika@32health.care         | HS5000-2, HS2000-2, HealthSun, HealthSun 5000                                                                                                                                                 | Θ           | 3 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| Niharika Kadvekar  | Test Office    | niharika@32health.care         | HealthSun, HS2000-2, HS5000-2                                                                                                                                                                 | Θ           | 3 days          | 07/09/2024 at 3:29 PM |            | 07/09/2024 at 3:29 PM |             | =       |
| **1-37 of 37 items** |                |                                |                                                                                                                                                                                                |             |                 |                   |            |                   |             |         |
| **< 1 >**          |                | **50/page**                    |                                                                                                                                                                                                |             |                 |                   |            |                   |             |         |

Once a provider application has been generated to be prefilled, they appear at the top of the Prefill Queue. The applications can be viewed and filled in by clicking on the document icon in the Application column.

The Created On and Created By columns show the user that generated the application (based on their application login credentials) and the date and time that they generated the application on. Similarly, once a user enters data or otherwise modifies the provider application, the Modified By and Modified On columns reflect the latest information of user name and date time.

The Plans column shows the plans that the provider has been invited to participate in. This cannot be modified once the application is generated.

If an application has been generated in error, it can be archived by selecting the “Archive Application” from the Actions menu (the right-most column in the above screenshot).

Finally, the platform also allows for tracking the age of a given provider invite. This is indicated in days under the Application Age column.

Applications can be sent to the providers by selecting the “Send to Provider” option in the Actions menu, or by navigating into an application via the document icon and selecting the button of the same name on the top right of the interface.

## 2.3. Invitation Queue

Once an application for new provider credentialing or recredentialing has been sent, the same can be tracked in the Invitation Queue. This queue is similar in function to the Prefill Queue with few differences.

The Application Status lets users know if the application has been viewed by the provider, or been filled in and finally submitted.

The Progress column indicates the approximate percentage of the total application that the provider has completed. This is a handy way to know if a provider intends to complete and submit the application.

The Application Age column can be used to find provider applications that are getting stale. These can be then Archived by using the “Archive Application” action in the Actions menu (right most column).

**Invitation Queue**

| Provider Name    | Office Name    | Email                     | Plans                                                                                                                                                                          | Application Age | Created On        | Created By | Modified On       | Modified By | Application Status | Progress | Actions |
| :--------------- | :------------- | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :---------------- | :--------- | :---------------- | :---------- | :----------------- | :------- | :------ |
| Michael Aaro     | Shining Tooth  | vaishnavi@32health.care   | HS2000-2, HealthSun 5000, HealthSun, HS5000-2                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 0%       | =       |
| Susana Lizaso    | ABC Dental Miami | vaishnavi@32health.care   | HS2000-2, HS5000-2, HealthSun 5000, HealthSun                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 40%      | =       |
| Mayra Fandino    | ABC Dental Miami | vaishnavi@32health.care   | HS2000-2, HS5000-2, HealthSun 5000, HealthSun                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 40%      | =       |
| Milton Ruiz      | ABC Dental Miami | vaishnavi@32health.care   | HS2000-2, HS5000-2, HealthSun 5000, HealthSun                                                                                                                                  | 0 days          | 07/09/2024 at 3:27 PM |            | 07/09/2024 at 3:27 PM |             | Application Sent   | 40%      | =       |
| **1-50 of 155 items** |                |                           |                                                                                                                                                                                |                 |                   |            |                   |             |                    |          |         |
| **< 1 2 3 4 >** |                | **50/page**               |                                                                                                                                                                                |                 |                   |            |                   |             |                    |          |         |

## 2.4. Application Review Queue

Once an application is submitted from the portal, these show up in the platform application under the Application Review tab under the Credentialing and Recredentialing submodules.

The primary focus of this section of the application is to be able to run fully automated primary source verification on the submitted application.

**NOTE**: In this screen, each row represents each individual provider. So, for example, if an application is received with 3 providers, this single application would be 3 rows (each for each provider) in this screen.

**Application Review Screen**

| Provider Name | Office Name    | Email                      | Plans                                                                                                                                                                                                                         | Application Age | Submitted On        | PSV Status   | PSV Outcome | Verification Date | PSV Report | CVF | Contracts | Review Result | Actions |
| :------------ | :------------- | :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :------------------ | :----------- | :---------- | :---------------- | :--------- | :-- | :-------- | :------------ | :------ |
| Michael Aaro  | Office\_1      | cbbzwse@example.com        |                                                                                                                                                                                                                               | 3 days          | 07/31/2024 at 10:15 PM | Failed       |             |                   |            |     |           |               | =       |
| Etha Kozey    | Office\_1      | vaishnavi@32health.care    |                                                                                                                                                                                                                               | 3 days          | 07/31/2024 at 7:39 PM   |              |             |                   |            |     |           |               | =       |
| Milton Ruiz   | ABC Dental Miami | taher@32health.care        | Dr Max-B-H4140009, Dr ExtraCare - H4140004, Dr Value - H4140005, Sun Dental Plan Preferred, Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value-B - H4140011, Dr Max - H4140001 | 9 days          | 07/23/2024 at 7:06 PM   | Completed    | No Issues   | 08/05/2024 at 11:50 AM | 园          | 园  | A         |               | =       |
| **1-3 of 3 items** |                |                            |                                                                                                                                                                                                                               |                 |                     |              |             |                   |            |     |           |               |         |
| **< 1 >**     |                | **50/page**                |                                                                                                                                                                                                                               |                 |                     |              |             |                   |            |     |           |               |         |

Similar to the Prefill and Invitation queues, there are columns for Plans and Application Age to better identify each application and track their age.

To begin the automated verification, select the “Run Verification” option from the Actions menu on the right-most column. This will change the status of the application to Verification in Progress. This is shown in the PSV Status column.

Once the verification runs, this status will change to Completed or Failed if the verification is successful or not. If Failed, users can re-run the automated verification after manually checking the provider's application for any issues.

Once automated primary source verification (PSV) runs successfully, additional columns, namely PSV Outcome, PSV report and CVF are populated.

Depending on the verification, PSV outcome can be: No issues (for clean reports), or Issues Found (for providers whose reports were not clean).

### 2.4.1. Primary Source Verification

The PSV report generated for each provider contains the details gathered from various sources. These are organized across the tabs shown for each relevant section. The PSV report includes information and documentation provided in the provider application – specifically in the Education, Work History, Attestation and Liability Insurance tabs.

**Primary Source Verification Report**

| Field                 | Value                                  |
| :-------------------- | :------------------------------------- |
| Provider Name         | Susana Lizaso                          |
| State License         | Sanctions, NPDB, NPI, Medicaid/Medicare, Specialty, DEA/CDS, Education, Work History, Attestations, Liability Insurance |
| License Number        | DN14242                                |
| License Status        | CLEAR/Active                           |
| Licensing State       | Florida                                |
| License Type          | Dentist                                |
| Issue Date            | 03/13/1996                             |
| Expiration Date       | 02/28/2026                             |
| Permits               |                                        |
| Provider Designation  |                                        |
| Address               | 4999 WEST 8TH AVENUE, STE. 28, HIALEAH, FL 33012,, |
| Snapshot Link         | Snapshot Link                          |
| Verification Date     | 07/05/2024 at 9:25 PM                  |
| Certificate PDF Link  |                                        |
| Source                | State Board                            |

Where applicable, snapshot links are provided that represent the original source for the details collected. These are screenshots of the primary source sites, or documents generated and collected from primary sources.

Primary Source Verification reports can be downloaded for offline review/storage using the "Download Report” or “Download Report with PSV” actions at the top of the interface.

*   **Download Report** – PSV report without the primary source snapshots
*   **Download Report with PSV** – PSV report with the snapshots (screenshots of the primary sources)

### 2.4.2. Adding Review Comments

Once a provider's application and PSV report has been verified, the same can be noted on the application's row by adding a comment to the application. This can be done using the "Add Comment” option in the Actions menu and selecting a flag value from the pop-up. These values can be:

4.  **Clean** – for a provider application with no issues.
5.  **Missing information** – for applications with missing or incorrect data.
6.  **Issue Found** – for applications with provider sanctions or other issues that require review.

**Review Comments**

| Field          | Value                          |
| :------------- | :----------------------------- |
| Provider Name  | Michael Aaro                   |
| Office Name    | Office\_1                      |
| Email          | cbbzwse@example.com            |
| Plans          |                                |
| PSV Status     | Failed                         |
| PSV Outcome    |                                |
| Verification Date |                                |
| PSV Report     |                                |
| CVF            |                                |
| Contracts      |                                |
| Review Result  |                                |
| Actions        | =                              |
| Provider Name  | Etha Kozey                     |
| Office Name    | Office\_1                      |
| Email          | vaishnavi@32health.care        |
| Plans          |                                |
| PSV Status     |                                |
| PSV Outcome    |                                |
| Verification Date |                                |
| PSV Report     |                                |
| CVF            |                                |
| Contracts      |                                |
| Review Result  |                                |
| Actions        | =                              |
| Provider Name  | Milton Ruiz                    |
| Office Name    | ABC Dental Miami               |
| Email          | taher@32health.care            |
| Plans          | Dr Max-B-H4140009, Dr ExtraCare - H4140004, Dr Value - H4140005, Sun Dental Plan Preferred, Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value-B - H4140011, Dr Max - H4140001 |
| PSV Status     | Completed                      |
| PSV Outcome    | No Issues                      |
| Verification Date | 08/05/2024 at 11:50 AM         |
| PSV Report     | 凤                             |
| CVF            | 园                             |
| Contracts      | A                              |
| Review Result  |                                |
| Actions        | =                              |

| Add Comment (Pop-up) |
| :------------------- |
| Flag                 |
| Clean                |
| Missing Information  |
| Issue Found          |

Once set these flag values populate the Review Result column in the Application Review screen for the given application. These comments and flag values are also displayed in the Activity tab of the provider's application (as shown in the screenshot below).

**Provider Application Activity**

| User | Role | Modified At      | Flag        | Comment                                      |
| :--- | :--- | :--------------- | :---------- | :------------------------------------------- |
|      |      | 08/05/2024 at 1:16 PM | Issue Found | This provider has sanctions that need to be reviewed in Committee. |

#### 2.4.1.1 Verifying Specialty Information

For providers that indicate that they're a specialist, the specialty certificates can be manually verified using the application.

*   To do this, click on Add Specialty under the Specialty tab of the PSV report.
*   Select the Board Certified Specialty from the list that pops up and upload the relevant specialty certificate PDF file received from the provider or from the board site.

The application will extract the requisite details into the PSV report such as the certificate number, original certification date, current certificate date and certificate expiration date.

**Specialty verification process**

| Field                  | Value                    |
| :--------------------- | :----------------------- |
| Provider Name          | Susana Lizaso            |
| Board Certified Specialty | Oral and Maxillofacial Surgery |
| Upload Certificate     | Upload                   |

### 2.4.3. Credentialing Verification Form (CVF)

Once Primary Source Verification (PSV) is run for a provider application, a Credentialing Verification Form (CVF) needs to be generated in addition to the PSV report.

To generate this, click on the document icon in the CVF column and click “Generate sign-off report”.

The CVF contains information from the PSV process automatically extracted and applied to the CVF template that is loaded in the Document Center.

Once the generated form has been verified, click “Sign off” to bring up the pop up sign off screen. Once signed-off, the user name and date is applied along with optional review comments to the CVF.

**CVF document**

| CREDENTIALING VERIFICATION FORM                        |
| :----------------------------------------------------- |
| Provider Name: Anita Pandey                            |
| Specialty: DDS/DMD/Other - DMD                         |
| Application Receive Date: 07/26/2024                   |
| Signed Attestation Date: 07/26/2024                    |
| Previous Credentialing Committee Date: N/A             |
| Education General (Institution Name and Graduation Date): Marquette University School of Dentistry |
| Education Specialty (Institution Name and Graduation Date): 06/26/2019 |
| CV/Resume Provided: Yes                                |
| **License Verification**                               |
| License #: DN14642                                     |
| Issue Date: 07/16/1997                                 |
| Expiration Date: 02/28/2026                            |
| Status: CLEAR/Active                                   |
| Disciplinary Actions: No                               |
| Verification Date: Verified By                         |
| **Specialty Board Certification Verification**           |
| Certificate #:                                         |
| Issue Date:                                            |
| Expiration Date:                                       |
| Status: Verified By                                    |
| Disciplinary Actions: No                               |
| Verification Date: Verified By                         |
| **NPI Verification**                                   |
| NPI #: 1841370558                                      |
| Status: Active                                         |
| Verification Date: Verified By                         |
| **DEA Verification**                                   |
| Certificate #: BP5527227                               |
| Expiration Date: 03/31/2027                            |
| Verification Date: Verified By                         |
| **CDS Verification**                                   |
| Certificate #: NA                                      |
| Expiration Date: NA                                    |
| Verification Date: Verified By                         |
| **Professional Liability Information**                   |
| Insurance Company Name: ACME                           |
| Policy #: AB1234                                       |
| Per Incident Limit: 100000                             |
| Aggregate Limit: 300000                                |
| Expiration Date: 07/30/2027                            |

**CVF sign-off screen**

| Confirmation                                                    |
| :-------------------------------------------------------------- |
| I agree and understand that by signing the Electronic Signature Acknowledgment and Consent Form, that all electronic signatures are the legal equivalent of my manual/handwritten signature and I consent to be legally bound to this agreement. I further agree my signature on this document is as valid as if I signed the document in writing. This is to be used in conjunction with the use of electronic signatures on all forms regarding any and all future documentation with a signature requirement, should I elect to have signed electronically. Under penalty of perjury, I herewith affirm that my electronic signature, and all future electronic signatures, were signed by myself with full knowledge and consent and am legally bound to these terms and conditions. |
| ✔ I agree                                                       |
| Name (used for signature) \*: Test User                         |
| Comment: Provider application is clean                          |
| \[Cancel] \[Sign]                                               |

**CVF Comments Applied**

| CREDENTIALING VERIFICATION FORM                        |
| :----------------------------------------------------- |
| **National Practitioners Data Bank**                     |
| Verification Date: 08/12/2024                          |
| Queried By: NA                                         |
| Issues: NA                                             |
| **Reports**                                            |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **OIG**                                                |
| OIG: Pass                                              |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **SAM**                                                |
| SAM: Pass                                              |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **Medicare Opt Out**                                   |
| Medicare Opt Out: Pass                                 |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **CMS Preclusion List**                                |
| CMS Preclusion List: NA                                |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **AHCA**                                               |
| AHCA: Pass                                             |
| Verification Date: 08/12/2024                          |
| Verified By: Test User                                 |
| **Reviewer Comments**                                  |
| Provider application is clean                          |
| Verified By Test User                                  |
| Date: 08/12/2024                                       |

**NOTE**: Once Primary Source Verification is re-run for a provider, then the CVF is also re-generated. This is to ensure the latest information from the report is represented in the document, requiring a new sign-off.

### 2.4.4. Handling Missing/Incorrect Provider Information

For providers whose primary source verification fails due to incorrect or missing information, the same can be noted on the review comments screen.

For applications that have missing information, indicate the same in the Review Comments. Set the Flag to Missing Information.

This will send a notification to the provider portal, and unlock the application for the provider to be able to make changes and “submit” again.

**Save Comments**

| Field                     | Value                     |
| :------------------------ | :------------------------ |
| Owner/Corporate First Name | Milton                    |
| Owner                     | Ruiz                      |
| Title                     | DDS                       |
| O DMD                     |                           |
| Business Type             | Individual                |
| Group                     | DSO                       |
| CHC/FQHC                  |                           |
| Owner/Corporate Dental License Number | 458958490                 |
| State                     | Florida                   |
| Issuance Date             | 05/01/2022                |
| Expiration Date           | 05/31/2024                |
| Status of Dental License  | Active                    |
| Inactive                  |                           |
| Do you have an EIN/TIN?   | EIN                       |
| TIN                       |                           |
| Owner/Corporate EIN       | 989898989                 |
| Is vendor credentialing?  | Yes                       |
| No                        |                           |
| Is vendor?                | Yes                       |
| No                        |                           |
| Vendor Name               | Addl Services Inc         |
| **Add Comment before saving** |                           |
| Add Comment \*            |                           |
| Cancel                    | Save                      |

Once the application is received on the platform side, missing information can be entered into the application by the Provider Network team.

On each save, users will be required to add a comment for the details of information entered or altered, and the same is also noted in the Activity tab of the provider application for audit history.

## 2.5. Clinical Review

If an application requires review by a Clinician, the same can be sent to a separate queue called Clinical Review. This can be done by selecting the option “Send to Clinical Review" from the Application Review screen.

Once an application is sent to Clinical Review, personally identifiable information is automatically redacted so the clinician's review is not subject to any bias.

This redaction applies to the main interface screens, PSV reports, as well as the PDF snapshot links within the PSV report.

**Clinical Review Queue**

| Provider Name | Office Name | Email                     | Plans                                                                                                                                              | Application Age | PSV Report | CVF | Review Result | Actions |
| :------------ | :---------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :--------- | :-- | :------------ | :------ |
|               |             | vaishnavi@32health.care   | Dr Value - H4140005, Dr ExtraCare - H4140004, Dr Plus - H4140002, Dr Plus-B - H4140010, Dr Value-B - H4140011, Dr Max - H4140001, Dr Max-B-H4140009 | 9 days          | 同         | 园  |               | =       |
| **1-1 of 1 items** |             |                           |                                                                                                                                                    |                 |            |     |               |         |
| **< 1 >**     |             | **50/page**               |                                                                                                                                                    |                 |            |     |               |         |

**Clinical Review - redacted PSV report**

| Field                 | Value                                  |
| :-------------------- | :------------------------------------- |
| Provider Name         | \[Redacted]                            |
| State License         | Sanctions, NPDB, NPI, Medicaid/Medicare, Specialty, DEA/CDS, Education, Work History, Attestations, Liability Insurance |
| License Number        | \[Redacted]                            |
| License Status        | CLEAR/Active                           |
| Licensing State       | \[Redacted]                            |
| License Type          | Dentist                                |
| Issue Date            | 01/22/1993                             |
| Expiration Date       | 02/28/2026                             |
| Permits               |                                        |
| Provider Designation  | \[Redacted]                            |
| Address               | \[Redacted]                            |
| Snapshot Link         | Snapshot Link                          |
| Verification Date     | 07/23/2024 at 6:33 PM                  |
| Certificate PDF Link  |                                        |
| Source                | State Board                            |

**Redacted snapshot**

| Field                      | Value              |
| :------------------------- | :----------------- |
| **Department of Health**   |                    |
| FLHealthSource.gov         | Public Data Portal |
| New Licensed Health Care Practitioners | Q Search Home      |
| Site Help                  |                    |
| License Verification       |                    |
| Printer Friendly Version   |                    |
| DMD                        |                    |
| License Number             | \[Redacted]        |
| Data As Of 7/23/2024       |                    |
| License Information        | Secondary Locations |
| Discipline/Admin Action    |                    |
| Profession                 | Dentist            |
| License Status             | CLEAR/Active       |
| License Expiration Date    | 2/28/2026          |
| License Original Issue Date | 01/22/1993         |
| Address of Record          | \[Redacted]        |
| Controlled Substance Prescriber (for the Treatment of Chronic Non-malignant Pain) | No                 |
| Discipline on File         | No                 |
| Public Complaint           | No                 |
| Back                       |                    |
| For instructions on how to request a license certification of your Florida license to be sent to another state from the Florida Department of Health, please visit the License Certifications web page. |                    |
| Primary Source Verified    |                    |
| July 23, 2024 01:02 PM (UTC) |                    |

## 2.6. Committee Review

For applications that are ready to be reviewed by a committee, these can be sent from the Application Review screen by selecting the “Send to Committee Review" option from the Actions menu. All provider applications that are sent here are queued up in the Active Review tab of the Committee Review submodule.

From this screen, a new committee can be scheduled using the Create Committee Meeting button. If an Active committee is in progress, this option is disabled, and the Active Committee button is enabled for the selected committee date.

Provider applications can be sent to an active committee from the Active Review tab using the "Send to Active Committee” option in the Actions menu.

**Committee Review Queue**

| Provider Name | Office Name | Email                     | Plans                                                      | Application | Application Age | Submitted On        | PSV Report | CVF | Contracts | Review Result | Actions |
| :------------ | :---------- | :------------------------ | :--------------------------------------------------------- | :---------- | :-------------- | :------------------ | :--------- | :-- | :-------- | :------------ | :------ |
| Michael App\_1 |             | vaishnavi@32health.care   | Bright Health Adult Plan, Dr ExtraCare - H4140004, Basic Option Dental Plan |             | 3 days          | 07/04/2024 at 4:59 PM | 同         | 园  | A         |               | =       |
| **1-1 of 1 items** |             |                           |                                                            |             |                 |                     |            |     |           |               |         |
| **< 1 >**     |             | **50/page**               |                                                            |             |                 |                     |            |     |           |               |         |

Within an Active Committee Meeting, provider applications can be decision-ed on based on their PSV reports, and submitted applications. Providers can be designated as Approved, Approved Conditional, Not Approved, or Conditionally Not Approved.

Additionally, the effective date of these decisions can be set for each provider. By default, this is set to the first of the subsequent month that the committee meets. If the provider is deemed to be approved conditionally, an optional approval period can be set – 12, 18, or 24 months instead of the default 36 month credentialing period.

**Active Committee Meeting**

| Committee Meeting Date: 07/05/2024 |                         |                         |
| :--------------------------------- | :---------------------- | :---------------------- |
| Sign-in Sheet                      | Committee Meeting Agenda | Committee Review Templates |

| NPI          | Decision              | Effective Date | Approval Period | First Name | Last Name | Specialty | Medicare/Medi Network | Actions |
| :----------- | :-------------------- | :------------- | :-------------- | :--------- | :-------- | :-------- | :-------------------- | :------ |
| 1740899095   | Approve Conditional   | 08/01/2024     | 18 Months       | Katrina    | Fins      |           | Yes                   | =       |
| 1689057432   | Approve               | 08/01/2024     |                 | Connie     | Feng      |           |                       | =       |
|              | Approve Conditional   |                |                 |            |           |           |                       |         |
|              | Not Approved          |                |                 |            |           |           |                       |         |
|              | Conditionally Not Approved |                |                 |            |           |           |                       |         |
| **1-2 of 2 items** |                       |                |                 |            |           |           |                       |         |
| **< 1 >**    | **50/page**           |                |                 |            |           |           |                       |         |

Finally, the application allows for uploading documents used in the committee meeting such as the sign-in sheet and agenda. The templates for these are available through the Document Center module as well as by selecting the Committee Review Templates button in the top right of the interface.

Once a committee meeting is submitted, a snapshot of the decisions, dates and committee documents are recorded for future under the Archived Review tab. Each row in the Committee Archive table represents a separate committee meeting.

**Committee Archived Review**

| Committee Meeting Date | Committee Report | Providers Reviewed | Providers Approved | Providers Conditionally Approved | Providers Not Approved | Providers Conditionally Not Approved |
| :--------------------- | :--------------- | :----------------- | :----------------- | :------------------------------- | :--------------------- | :----------------------------------- |
| 08/02/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/26/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/30/2024 at 11:18 AM |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/30/2024 at 2:10 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/26/2024 at 6:19 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/24/2024 at 9:13 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/19/2024 at 9:00 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/17/2024 at 6:05 PM  |                  | 2                  | 1                  | 0                                | 1                      | 0                                    |
| 07/16/2024 at 4:20 PM  |                  | 2                  | 1                  | 0                                | 1                      | 0                                    |
| 07/16/2024 at 12:15 PM |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/12/2024 at 7:21 PM  |                  | 4                  | 2                  | 0                                | 1                      | 1                                    |
| 07/11/2024 at 7:49 PM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 07/21/2024 at 5:30 AM  |                  | 2                  | 1                  | 0                                | 1                      | 0                                    |
| 07/26/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 06/12/2024 at 11:39 PM |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 06/07/2024 at 5:30 AM  |                  | 1                  | 1                  | 0                                | 0                      | 0                                    |
| 05/20/2024 at 9:53 PM  |                  | 4                  | 1                  | 0                                | 0                      | 3                                    |
| **1-18 of 18 items**   |                  |                    |                    |                                  |                        |                                      |
| **< 1 >**              | **50/page**      |                    |                    |                                  |                        |                                      |

On the provider's side, once a committee has been submitted, the decisions are updated in the provider portal and any approval or denial notices are sent via email as well as through the provider portal.