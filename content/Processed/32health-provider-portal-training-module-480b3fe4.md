---
source_pdf: "https://drive.google.com/file/d/188zfncF-B2BGzsPo_-SIAWEtrp7JcOVg/view"
drive_folder: "Portfolio/LightSpun/Series A Data Room/Product"
type: portfolio
company: LightSpun
ingested: 2025-12-27
original_filename: "32Health Provider Portal Training Module.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/188zfncF-B2BGzsPo_-SIAWEtrp7JcOVg/view)

# Provider Portal Overview

32Health's Provider Network module is a single solution for end-to-end provider credentialing and recredentialing. This module, in conjunction with the provider portal, allows for frictionless onboarding of providers, practices and DSOs, as well as powerful and intuitive data management and workflows.

In the 32Health platform application (`<clientname>.platform.32health.care`), this module's functions is found under the Provider Network item in the navigation sidebar (on the left of the interface).

This document covers the functionality under the corresponding provider portal module. This can be found in the provider portal (`<clientname>.provider.32health.care`)

## Contents

1.  Provider application
    1.1. Logging into the provider portal
        1.1.1. New providers – setting up two-factor authentication
    1.2. Application list
    1.3. Filling new provider application
        1.3.1. Inviting additional providers
        1.3.2. Inviting additional administrators
        1.3.3. Document uploads
        1.3.4. Signing off and submission

## 1. Provider Application

The 32Health application has a companion provider portal site (with URL `<clientname>.provider.32health.care`) to the main “platform” application.

This portal is mainly used for dental practices, and providers to access their credentialing/recredentialing applications, notifications and documents from carriers, as well as update information about offices and providers to stay current with the network.

This section will cover the new credentialing and recredentialing portions of the provider portal.

## 1.1. Logging into the Provider Portal

When an invite is sent to a new or existing provider, they will receive an email with a link to log in to their portal account, or, in the case of a new provider or office, sign up for a new account.

**Sign Up / Login Screenshot Details:**

**Sign Up Form:**
*   First Name \* (Enter First Name)
*   Last Name \* (Enter Last Name)
*   Email \* (abc@xyz.com)
*   Phone Number \* (95xxxxxxxX)
*   Password \* (Enter Password)
*   Confirm Password \* (Confirm Password)
*   Checkbox: I agree to the 32Health Terms and Conditions
*   Button: Sign Up

**Already Have Account? Section:**
*   Button: Log in

Setting up a new provider account requires the provider/user entering basic contact information like name, email, phone number, as well as agreeing to any requisite terms and conditions.

### 1.1.1. New Providers – Setting Up Multi-factor Authentication

Users are also required to set up multi-factor authentication (MFA) using a companion authenticator application on a mobile device.

To set up MFA, we recommend using either Google Authenticator or Microsoft Authenticator apps from the App Store or Play Store. Here's a step-by-step guide to help you set up multi-factor authentication using either Google Authenticator or Microsoft Authenticator:

1.  **Download the Authenticator App:** Go to your device's app store and search for "Google Authenticator" (App Store, Play Store) or "Microsoft Authenticator" (App Store, Play Store). Download and install the app on your device.

    **Screenshot details (App Store previews):**

    **Google Authenticator**
    *   Google LLC
    *   100M+ Downloads
    *   Everyone
    *   Buttons: Install, Share, Add to wishlist

    **Microsoft Authenticator**
    *   Microsoft Corporation
    *   #3 in Productivity
    *   Screenshots show:
        *   "More security, for all your accounts"
        *   "Sign in with your phone"
        *   "Connect to all of Microsoft"
        *   "Sign in without your password"

2.  **Open the Authenticator App:** Once installed, open the Authenticator app.
3.  **Add an Account:** In the Authenticator app, you'll find an option to "Add Account" or a plus (+) symbol. Tap on it to proceed.

**Google Authenticator App Screenshot details (examples):**

*   Google: hikingfan@gmail.com - 181 951
*   Google: surfingfan@gmail.com - 133 581
*   Google: elisa.g.beckett@gmail.co... - 040 493
*   Plus (+) symbol at the bottom

4.  **Choose Scan QR Code:** Select the "Scan QR Code" option from the available choices. The app will use your device's camera to scan QR codes.
5.  **Scan the QR Code:** Position your device's camera in front of the QR code displayed on the screen or provided by the service you want to enable multi-factor authentication for. The app will automatically capture the QR code.
6.  **Verify the Account:** After scanning the QR code, the app will generate a time-based one-time password (OTP) associated with your account. This code changes periodically.
7.  **Complete the Setup:** Enter the OTP into the appropriate field on the provider portal site. This code is time-sensitive, so make sure to enter it promptly. Once done, submit or save the changes.

**Verify Your Identity Screenshot Details:**

*   **Title:** FloridaDentalBenefits
*   **Prompt:** Verify Your Identity
*   Check your preferred one-time password application for a code.
*   **Input field:** Enter your one-time code
*   **Checkbox:** Remember this device for 30 days
*   **Button:** Continue

**Backup and Recovery:** It's crucial to set up backup and recovery options offered by the Authenticator app. Usually, this involves saving a backup key, linking your account to an email address, or generating recovery codes. Follow the app's prompts to ensure you have a backup method in case you lose access to the app or your device.

## 1.2. Application(s) List

Once logged into the provider portal, users will see the credentialing onboarding screen (covered earlier). Once completed, the user is redirected back to an application list view.

This application list shows users the applications that they can take action on. It is accessible by clicking on the Network Status submodule in the provider portal sidebar.

This list will look different for different users of the same practice, depending on their access level.

For example, a practice owner or administrator would be able to view ALL applications pertaining to the practice or location. An individual provider, on the other hand, will only be able to see their own application as well as their past applications.

**Network Status screen**

| Verification Type | Provider Name              | Submitted Date | Decision Due | Status                  | Credentialed | Credentialing Expiry | Application | Actions |
| :---------------- | :------------------------- | :------------- | :----------- | :---------------------- | :----------- | :------------------- | :---------- | :------ |
|                   | Prasoon Prefill            |                |              |                         |              |                      |             | =       |
|                   | Prasoon 1                  |                |              |                         |              |                      |             | =       |
|                   | Leticia Alonso             |                |              |                         |              |                      |             | =       |
| Credentialing     | vinit k                    |                |              |                         |              |                      |             |         |
|                   | Odysseus Patel             |                |              |                         |              |                      |             | =       |
| Credentialing     | taher rangwala             |                |              | Application Sent        |              |                      |             | =       |
| Credentialing     | Taher Rangwala             |                |              | Application in Progress |              |                      |             | =       |
| Credentialing     | LIUDMILA LABRADA           |                |              | Application in Progress |              |                      |             | =       |
| Re-Credentialing  | Aliana Ribot               |                |              | Application Sent        | 05/28/2021   | 05/28/2024           |             | =       |
| Credentialing     | Prasoon CredV2             |                |              | Application Sent        |              |                      | A           | =       |
| Re-Credentialing  | Aliana Ribot               |                |              | Application Sent        | 05/28/2021   | 05/28/2024           |             | =       |
| Credentialing     | Cathleen Acosta            |                |              | Application Sent        |              |                      |             | =       |
| Credentialing     | Michael Clair              | 05/20/2024     |              | Application Submitted   |              |                      |             | =       |
| Credentialing     | Michael Clair              |                |              | Application in Progress |              |                      |             | =       |
| Credentialing     | Prasoon 09/05              | 05/20/2024     |              | Application Submitted   |              |                      |             | =       |
| Credentialing     | New App_1                  |                |              | Application Sent        |              |                      |             |         |
| Credentialing     | Prasoon New Provider       |                |              | Application in Progress |              |                      |             | =       |
|                   | Prasoon 1 Kumar            |                |              | Application Sent        |              |                      |             | A       |
| Credentialing     | Mayra Fandino              |                |              | Application Sent        |              |                      |             | =       |
| Credentialing     | Susana Lizaso              |                |              | Application Sent        |              |                      |             | =       |
|                   | vinit k                    |                |              | Application Sent        |              |                      |             | =       |
| Re-Credentialing  | Aliana Ribot               |                |              | Application Sent        | 05/28/2021   | 05/28/2024           |             | =       |
| Re-Credentialing  | Aliana Ribot               |                |              | Application Sent        | 05/28/2021   | 05/28/2024           |             | =       |
| Re-Credentialing  | Aliana Ribot               |                |              | Application Sent        | 05/28/2021   | 05/28/2024           |             | =       |
| Re-Credentialing  | Aliana Ribot               |                |              | Application Sent        | 05/28/2021   | 05/28/2024           |             | =       |

## 1.3. Filling Provider Application

All provider verification applications include sections to collect information from practices and providers to run primary source verification.

These sections are:

1.  **Practice Owner** – information about business ownership details, tax information and address.
2.  **Locations** – information about individual offices, office hours, contacts, infection control, evaluation questions.
3.  **Providers** – information about provider background (education/work experience), license details, attestations etc.

In addition, each application includes tabs for documents that need to be reviewed or signed off:

4.  **Plan Fees** – provider fee schedules for the plans that providers agree to participate in.
5.  **Fee Agreement** – contracts that the practice owner signs off on for plans that the offices participate in.

6.  **Dentist Agreement** – master contract between practice and carrier that the practice owner signs off on.

Each application screen includes required fields which are necessary to complete the contract documents or to run primary source verification on the office or provider. These are indicated with red asterisks next to the field labels.

**Practice Owner Tab**

**Header:** Provider Network -> Credentialing -> Practice Owner
**Tabs:** Practice Owner, Location, Providers, Plan Fees, Fee Agreement, Dentist Agreement

**Practice / Corporate Owner Section:**
*   Notification text: "You will receive written notification of the disposition of your credentialing application after it has been presented to the Florida Dental Benefits (FDB) Credentialing Committee. This process will never exceed 180 days from the signature date on the credentialing application. Please note that while your application is being processed, you are not authorized to see or treat any FDB members and/or represent yourself as an FDB provider. Should you have any questions or require additional information concerning your credentialing application or the FDB credentialing process, you may contact the Provider Relations Department. Monday through Friday, 8:30 am to 5:30 pm, at 1-800-995-7614 or 786-581-2578 or by email: providerrelations@fdbenefits.com."
*   Owner/Corporate First Name *: Milton
*   Owner/Corporate Last Name*: Ruiz
*   Title *: (Radio buttons) DDS, OMD, Other
*   Business Type: (Radio buttons) Individual, Group, ODSO, CHC/FQHC
*   Owner/Corporate Dental License Number*: 458958490
*   State: Florida
*   Issuance Date *: 05/01/2022
*   Expiration Date *: 05/31/2024
*   Status of Dental License: (Radio buttons) Active, Inactive
*   Do you have an EIN/TIN?: (Radio buttons) EIN, TIN
*   Owner/Corporate EIN: 989898989

**Delegated Credentialing Section:**
*   Do you perform delegated credentialing?: (Radio buttons) Yes, No
*   Do you outsource PSV to a vendor?: (Radio buttons) Yes, No
*   Vendor Name: (empty)

**Practice / Corporate Owner (continued) Section:**
*   Name of Legal Entity*: ABC Dental Group Inc
*   Type of Business: (Radio buttons) Corporation, Limited Liability Company, Professional Association, Sole Proprietorship, Partnership

**Buttons:** Cancel, Save

**Provider Tab**

**Header:** Provider Network -> Credentialing -> Providers
**Tabs:** Practice Owner, Location, Providers, Plan Fees, Fee Agreement, Dentist Agreement

**Navigation Sub-tabs:**
*   General Detail
*   Education
*   Work Experience
*   License Details
*   Liability Insurance
*   Attestations
*   Upload Documents
*   Consent and Authorization

**General Details Section:**
*   Choose Primary Location for the Provider: ABC Dental Miami (Dropdown)
*   Choose ALL location(s) for the provider: (empty)
*   Title: (Radio buttons) DDS, ODMD
*   First Name: Mayra
*   Middle Name: (empty)
*   Last Name: Fandino
*   Gender: (Dropdown)
*   DOB: 08/07/1962
*   Social Security Number: 75312200
*   Medicare Provider Number: (empty)
*   Individual NPI: 1396775557
*   CAQH Number: (empty)
*   Phone Number *: (empty)
*   Email *: taher@32health.care
*   Place of Birth - Country: United States
*   Place of Birth - State: Florida
*   Place of Birth - City: (empty)
*   Languages Spoken by the Provider: English (Multi-select tag input)
*   Ethnicity (Optional): (empty)

**Navigation controls:** < > 1/8 Cancel Save

**NOTE:** For providers not born in the United States, the State field becomes inactive/disappears. Similarly, in the Education tab, for providers who received their dental degrees outside the United States, the state field will not be applicable.

Providers who have received their dental degree from the United States will have the option to select their school from a dropdown list of U.S. dental schools.

For those that have received their dental degree outside the U.S., they will have to provide the name of the school as well as the city.

**Location Tab**

**Header:** Provider Network -> Credentialing -> Location
**Tabs:** Practice Owner, Location, Providers, Plan Fees, Fee Agreement, Dentist Agreement

**Navigation Sub-tabs:**
*   General Detail
*   Office Information
*   Office Evaluation
*   Infection Control
*   Contacts

**Office Information Section:**
*   Office Name *: ABC Dental Jupiter
*   Emergency Phone Number*: (565) 656-4646
*   Office Website: (empty)
*   Type of Practice: (Radio buttons) General Practice, Specialty, Both
*   Specify Office Hours:
    *   Monday: 9:00 am to 6:00 pm
    *   Tuesday: 9:00 am to 6:00 pm
    *   Wednesday: 9:00 am to 6:00 pm
    *   Thursday: 9:00 am to 6:00 pm
    *   Friday: 9:00 am to 6:00 pm
    *   Saturday: (Dropdown) to (Dropdown)
    *   Sunday: (Dropdown) to (Dropdown)
*   Do you have an EIN/TIN?: (Radio buttons) EIN, TIN
*   EIN Used for Claims Payment *: 456564565
*   Upload W-9 Form: (Upload button) Download Blank W-9
*   Office NPI: 5654634356
*   Languages Spoken in Office *: English (Multi-select tag input)
*   Add Physical, Mailing and Billing Addresses for the Office:
    *   Address Type: (Checkboxes) Mailing, Physical, Credentialing, Re-credentialing, Billing/Payment
    *   Preferred Communication: (Radio buttons) Phone, Text, Fax, Email, Mail
    *   Address Line 1*: 18 Greene Ln
    *   Address Line 2: (empty)
    *   City *: Jupiter
    *   State *: Florida
    *   County *: Palm Beach
    *   ZIP *: 33410

**Navigation controls:** < > 1/5 Cancel Save

### 1.3.1. Inviting Additional Providers

TBD once functionality is rolled out.

**Provider List**

| Name          | NPI          | Status | Actions |
| :------------ | :----------- | :----- | :------ |
| Mayra Fandino | 1396775557   |        | =       |
| Susana Lizaso | 1174602429   |        | =       |
| Milton Ruiz   | 1033288063   |        | =       |
|               | 1-3 of 3 items |        |         |

### 1.3.2 Inviting Additional Administrators

TBD once functionality is rolled out.

**Locations List**

| Name             | Address                     | State   | Actions |
| :--------------- | :-------------------------- | :------ | :------ |
| ABC Dental Jupiter | 18 Greene Ln, Jupiter, 33410 | Florida | =       |
| ABC Dental Miami | 45 Flange St, Miami, 33456  | Florida | =       |
|                  | 1-2 of 2 items              |         |         |

### 1.3.3. Document Uploads

All provider applications have functionality to upload supporting/required documentation. These could be for mandatory requirements like CV, DEA/CDS certificate (if applicable), as well as for optional documents that need to be submitted for attestation explanations.

For providers, each upload section (shown in the screenshot below) can accommodate multiple documents, which can be viewed and deleted from within the application.

These documents form part of the provider's record and are retained for audit purposes.

**Document uploads in Provider tab**

**Header:** Provider Network -> Credentialing -> Providers
**Tabs:** Practice Owner, Location, Providers, Plan Fees, Fee Agreement, Dentist Agreement

**Navigation Sub-tabs:**
*   General Detail
*   Education
*   Work Experience
*   License Details
*   Liability Insurance
*   Attestations
*   Upload Documents (selected)
*   Consent and Authorization

**Upload Documents Section:**

1.  **Professional Dental License**
    *   File uploaded: `50 state demo v5.csv`
    *   Button: `+ Upload`

2.  **DEA Certificate (Required if DEA Waiver was Selected)**
    *   Button: `+ Upload`

3.  **CDS Certificate (If Applicable)**
    *   Button: `+ Upload`

4.  **Liability Insurance**
    *   Button: `+ Upload`

5.  **Resume or Curriculum Vitae (Required if work history is under 5 years or Medicare Provider)**
    *   Button: `+ Upload`

6.  **Specialty School Training Certificate (Applies for Specialists i.e. Residency, AGED etc.)**
    *   Button: `+ Upload`

**Navigation controls:** < > 7/8 Cancel Save

### 1.3.4. Signing Off and Submission

The provider application includes documents that are included as part of the invitation process. These can include documents that need to be reviewed and require no further action (such as plan fee documents), as well as documents that need to be reviewed and signed off on.

These documents can be downloaded or printed directly from this view using the controls in the upper right hand side of the interface.

**Plan Fee Tab**

**Header:** Provider Network -> Credentialing -> Plan Fees
**Tabs:** Practice Owner, Location, Providers, Plan Fees, Fee Agreement, Dentist Agreement

**Document Viewer (0a3bce92-40aa-4911-afd3-3a519f611230.pdf)**
*   Page: 1/26
*   Zoom: 100%
*   Document title: FloridaDentalBenefits - Plan Fees
*   Sub-title: Doctors HealthCare Plans-Option II, DrMax-2024 Medicare Dental Plan, All procedures are covered at No Charge

**Table: Plan Fees**
*(Note: "FOR INTERNAL USE ONLY. DO NOT DISTRIBUTE TO MEMBERS" separates the header from the main content, and also appears before the footer.)*

| ADA Code | Description                                                         | Member Copay | FDB Reimb | Total Reimb | Limitations                                                                                    |
| :------- | :------------------------------------------------------------------ | :----------- | :-------- | :---------- | :--------------------------------------------------------------------------------------------- |
| D9430    | Office visit for observation (during regularly scheduled hours) - no other services performed | $0.00        | $0.00     | $0.00       |                                                                                                |
| D0120    | Periodic oral evaluation                                            | $0.00        | $25.00    | $25.00      | 2 per year (D0120 and D0150 Combined)                                                          |
| D0150    | Comprehensive oral evaluation                                       | $0.00        | $40.00    | $40.00      |                                                                                                |
| D0210    | Intraoral complete series                                           | $0.00        | $40.00    | $40.00      | 1 per 3 years (D0210 and D0330 Combined)                                                       |
| D0220    | Periapical first film                                               | $0.00        | $8.00     | $8.00       | 2 per year (D0220, D0230, D0270, D0272, D0273 and D0274 Combined)                             |
| D0230    | Periapical each additional film                                     | $0.00        | $6.00     | $6.00       |                                                                                                |
| D0270    | Bitewings-single film                                               | $0.00        | $8.00     | $8.00       |                                                                                                |
| D0272    | Bitewings-two films                                                 | $0.00        | $10.00    | $10.00      |                                                                                                |
| D0273    | Bitewings-three films                                               | $0.00        | $10.00    | $10.00      |                                                                                                |
| D0274    | Bitewing-four films                                                 | $0.00        | $30.00    | $30.00      |                                                                                                |
| D0330    | Panoramic film                                                      | $0.00        | $40.00    | $40.00      | 1 per 3 years (D0210 and D0330 Combined)                                                       |
| D1110    | Routine adult prophylaxis                                           | $0.00        | $45.00    | $45.00      | 2 per year (D1110 and D4910 Combined)                                                          |
| D1206    | Topical application of fluoride varnish                             | $0.00        | $15.00    | $15.00      | 2 per year (D1206 and D1208 Combined)                                                          |
| D1208    | Topical application of fluoride                                     | $0.00        | $15.00    | $15.00      |                                                                                                |
| D2140    | Amalgam-1 surface, permanent                                        | $0.00        | $55.00    | $55.00      | 4 per year (D2140, D2150, D2160, D2330, D2331, D2332, D2335, D2391, D2392, D2393, and D2394 Combined) |
| D2150    | Amalgam-2 surfaces, permanent                                       | $0.00        | $65.00    | $65.00      |                                                                                                |
| D2160    | Amalgam-3 surfaces, permanent                                       | $0.00        | $75.00    | $75.00      |                                                                                                |
| D2330    | Resin-1 surface, anterior                                           | $0.00        | $70.00    | $70.00      |                                                                                                |
| D2331    | Resin-2 surfaces, anterior                                          | $0.00        | $80.00    | $80.00      |                                                                                                |
| D2332    | Resin-3 surfaces, anterior                                          | $0.00        | $90.00    | $90.00      |                                                                                                |
| D2335    | Resin-4 or more surfaces, anterior                                  | $0.00        | $110.00   | $110.00     |                                                                                                |
| D2391    | Resin-based composite - 1 surface-posterior                         | $0.00        | $70.00    | $70.00      |                                                                                                |
| D2392    | Resin-based composite - 2 surfaces - posterior                      | $0.00        | $80.00    | $80.00      |                                                                                                |
| D2393    | Resin-based composite - 3 surfaces-posterior                        | $0.00        | $90.00    | $90.00      |                                                                                                |
| D2394    | Resin-based composite - 4 or more surfaces posterior                | $0.00        | $110.00   | $110.00     |                                                                                                |
| D2740    | Crown-porcelain/ceramic                                             | $0.00        | $750.00   | $750.00     | 1 per year (D2740, D2750 and D6058-D6067 Combined)                                             |
| D2750    | Crown-porcelain fused to high noble metal                           | $0.00        | $750.00   | $750.00     |                                                                                                |
| D2950    | Core buildup, including any pins                                    | $0.00        | $115.00   | $115.00     | 1 per year (D2950, D2951, D2952 and D2954 Combined)                                           |
| D2951    | Pin retention, per tooth, in addition to restoration                | $0.00        | $30.00    | $30.00      |                                                                                                |
| D2952    | Post and core, in addition to crown, indirectly fabricated          | $0.00        | $150.00   | $150.00     |                                                                                                |
| D2954    | Prefabricated post and core in addition to crown                    | $0.00        | $115.00   | $115.00     |                                                                                                |

**Footer:**
*   Florida Dental Benefits, Inc. PO Box 347650 Coral Gables, FL 33234
*   Phone: (305) 674 - Toll Free: (877) 674-7901 (305) 674-7999
*   DrMax FDB DHCP 2024 Option 12/08/23
*   Page 1 of 17

**Section:**
*   FOR INTERNAL USE ONLY. DO NOT DISTRIBUTE TO MEMBERS
*   DrMax (Status indicator with a plus sign, likely for adding/editing)

For documents that require sign-off, these are generated with pre-populated information from the application so that there's little user input required.

To sign-off on these agreements, click on the E-sign button on the bottom right of the interface and enter the required information in the dialog box that pops up. Once complete, the application is ready for submission.

**NOTE:** The e-sign step is considered the final step. Once e-signed, there can be NO edits made to the application.

Once all required steps have been completed, the E-sign button on the Dentist Agreement page should turn into a “Submit Application” button. Click on the “Submit Application” button to send the application to the carrier platform portal.

**Fee Agreement Tab**

**Header:** Provider Network -> Credentialing -> Fee Agreement
**Tabs:** Practice Owner, Location, Providers, Plan Fees, Fee Agreement, Dentist Agreement

**Prompt:** "The practice owner must sign the Fee Agreement. For assistance, contact Provider Relations. Monday through Friday, 8:30 am to 5:30 pm, at 1-800-995-7614 or 786-581-2578 or by email: providerrelations@fdbenefits.com. Please ensure the application is completed before generating the fee agreement."

**Document Viewer (7f4e3e69-5981-427c-bf89-ff349b92767b.pdf)**
*   Page: 1/3
*   Zoom: 100%
*   Document title: FLORIDA DENTAL BENEFITS - DENTIST AGREEMENT
*   Sub-title: Dentist Compensation
*   Attachment D
*   Plan: Doctors HealthCare Plans - Clinic Based Dental Offices

**Contract Content (Key Sections and Fields):**

**I SCOPE OF SERVICES AND FEE SCHEULE.** In connection with the provision of Dental Services to Members of Doctors Healthcare Plans assigned to, Dental Provider shall provide those Dental Services listed on the attached schedule of fee (the "Schedule of Fees") for the compensation set forth.

**II COMPENSATION FOR DENTAL SERVICES.** All of the compensation provisions of the Dental Provider Agreement shall continue to apply to the provision of Dental Services to Members covered by this Attachment, except to the extent otherwise set forth in this Attachment and the Schedule of Fees. In the event that the Schedule of Fees provides for payment for Dental Services on a fee-forservice basis, Dental Provider must submit all claims to FDB for specified Dental Services no later than twelve (12) months from the date on which such Dental Services were provided to Member.

**III Effective Date:** The effective date of this Attachment is this \_\_\_\_\_\_\_\_\_ day of \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_.

**IN WITNESS WHEREOF,** the undersigned have executed this Attachment as of the day and year set forth above.

| DENTIST       | FLORIDA DENTAL BENEFITS, INC. |
| :------------ | :---------------------------- |
| Taher         |                               |
| Signature:    | Signature:                    |
| Taher Rangwala|                               |
| Print Name:   | Print Name:                   |
| DDS           |                               |
| Title:        | Title:                        |
| 45 Flange St, |                               |
| Address:      |                               |
| Miami, Florida, 33456 |                       |
| Date:         | Date:                         |