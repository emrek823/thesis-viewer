---
title: "USCDI, Bulk Data Exports & EHI Exports: Solid Concepts Requiring Standardization and Maturity"
source: "https://ehrablog.org/2025/09/30/uscdi-bulk-data-exports-ehi-exports-solid-concepts-requiring-standardization-and-maturity/"
published: 2025-09-30
created: 2025-12-20
description: "By Hans Buitendijk, Chair, EHR Association Privacy & Consent Task Force The EHR Association has previously written about our belief that smart deregulation, a core policy priority of the current administration, can eliminate outdated or redundant regulatory requirements that are of limited value to patients, providers, and developers. By focusing on policies that drive improvements…"
tags:
  - "clippings"
---
*By Hans Buitendijk, Chair, EHR Association Privacy & Consent Task Force*

The EHR Association has [previously written](https://ehrablog.org/2025/03/13/finding-the-right-balance-smart-deregulation-in-health-it/) about our belief that smart deregulation, a core policy priority of the current administration, can eliminate outdated or redundant regulatory requirements that are of limited value to patients, providers, and developers. By focusing on policies that drive improvements in standardized interoperability and health data exchange, regulatory agencies will better support the industry’s ability to deliver safe, effective, and innovative technology solutions without slowing forward momentum or devaluing existing investments.

With comment periods having closed in recent months on requests for information (RFIs) from HHS regarding the [Health Technology Ecosystem](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Response%20to%20Health%20Technology%20Ecosystem%20Request%20for%20Information.pdf) and the FDA on [HL7 FHIR for Use in Study Data Created from Real-World Data Sources](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Response%20to%20FDA%20FHIR%20Request%20for%20Comments.pdf), and finalization of [2026 IPPS](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20CMS%20on%20the%20FY2026%20Proposed%20Rule%20-%20CMS-1833-P.pdf), [2025 SVAP](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ASTP-ONC%20on%202025%20Standards%20Version%20Advancement%20Process.pdf), and [HTI-4](http://www.healthit.gov/sites/default/files/page/2025-07/HTI-4%20Final%20Rule%20Overview%20Fact%20Sheet_508%20%281%29.pdf), the industry’s focus has shifted. While thoughtful deregulation remains a priority, it is also essential for the conversation to expand to encompass practical, adoptable, and mature solutions to comply with remaining and future regulations.

> Thus, it is an ideal time for another installment in our occasional blog series exploring ways to achieve regulatory balance and offering constructive recommendations for creating a regulatory environment that benefits patients, providers, and health IT developers.

Thus, it is an ideal time for another installment in our occasional blog series exploring ways to achieve regulatory balance and offering constructive recommendations for creating a regulatory environment that benefits patients, providers, and health IT developers. This installment contextualizes our perspective on USCDI, Bulk Data, and Electronic Health Information (EHI) Exports—three concepts certified technologies have supported since 2019, dating back to the then-proposed [21 <sup>st</sup> Century Cures Act](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Response%20to%20ONC%20Proposed%20Rule%20on%20Interoperability%20Information%20Blocking%20and%20Certification%20Program_0.pdf) (albeit with caveats regarding the mechanisms of compliance).

**USCDI**

Fundamentally, USCDI has been a positive and successful approach to raising the bar of data exchange at a practical, predictable pace. It is a solid strategy for scoping annual progress, a point we initially noted in our 2019 Cures Act commentary and reiterated as recently as June 2025 in our [feedback to HHS on the health IT ecosystem](https://npccreative-my.sharepoint.com/personal/liz_npccs_com/Documents/NPC%20Clients/EHRA/Blogs/Bulk%20Data%20Misrepresentation/audio1508764179.m4a). By defining broad, consensus-driven data classes and elements, USCDI is a significant step forward in advancing the interoperability capabilities and standardization that has, in turn, improved the consistency and usability of health information by establishing “a common foundation for the exchange of clinically meaningful data via recognized standards such as HL7 FHIR and HL7 CDA (C-CDA).”

> We remain firm in our stance that USCDI must encompass “all EHI” with clearly defined data classes and elements to advance interoperability effectively. This requires a modular, progressive approach to support the complex ecosystems of health IT participants.

We remain firm in our stance that USCDI must encompass “all EHI” with clearly defined data classes and elements to advance interoperability effectively. This requires a modular, progressive approach to support the complex ecosystems of health IT participants. We continue to recommend merging USCDI and USCDI+ while enabling modular certification based on data managed by health IT, as well as adding data to USCDI when standards are sufficiently mature.

For example, in our 2024 response to CMS’s [FY2025 IPPS Proposed Rule](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20CMS%20on%20the%20FY2025%20IPPS%20Proposed%20Rule%20-%20CMS-1808-P.pdf), we suggested that a more efficient reporting process would use USCDI/USCDI+ to set expectations for data relevant to public health while advancing the use of computable reporting knowledge definitions to specify data requirements for the applicable reporting triggers. Doing so “will help ensure that the data needs of all areas, including rural ones, are met effectively.”

Our rationale is also to support specialty EHRs in their certification efforts while preventing unnecessary over-development, as well as to expand certification benefits to include certain non-EHR health IT, such as laboratory and radiology information systems, payer solutions, and public health systems.

**Bulk Data Export**

We recognize the opportunity for FHIR Bulk Data Export to have value in sharing large datasets across organizations, especially when paired with USCDI as a scoping mechanism and FHIR-based RESTful queries that have clearly demonstrated value. However, it has not yet been shown to be adoptable in the absence of use case-specific implementation guidance. For example, use cases such as UDS+ or Immunization History for FHIR Bulk Data Export have demonstrated positive use based on focused implementation guidance for these specific use cases. In contrast, the adoption of the one-size-fits-everything approach has not met adoption expectations and is failing to meet needs. Additionally, the EHR is not necessarily the best-suited source for a bulk data export without adversely impacting the end-user experience of that EHR, thus requiring flexibility in enabling bulk data sharing by a provider.

> Our position, therefore, remains the same as it was six years ago: while there are valuable use cases where it is relevant that health IT supports FHIR Bulk Data Export/Import, challenges remain wherein data cannot be sourced directly from an EHR, with better-suited tools a suggested alternative.

Our position, therefore, remains the same as it was six years ago: while there are valuable use cases where it is relevant that health IT supports FHIR Bulk Data Export/Import, challenges remain wherein data cannot be sourced directly from an EHR, with better-suited tools a suggested alternative. Additionally, we recommend flexibility in how large data sets are retrieved, which would support health IT in offering solutions that do not jeopardize end-user, front-end EHR workflows with large, performance-intensive extracts. Non-bulk data sharing techniques can be used to share data with such health IT, which in turn supports FHIR Bulk Data Export where relevant.

For example, managing large data sets in support of dQMs may be best achieved by utilizing a dedicated health IT tool that continuously aggregates data from EHRs and then sends it in bulk to the requesting party, as further described in our [feedback to CMS on its FY2023 IPPS/LTCH proposed rule](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20CMS%20on%20the%20FY2023%20IPPS%20Proposed%20Rule%2006-17-22.pdf).

In our 2024 [comment letter on HTI-2](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ASTP%20on%20HTI-2%20Proposed%20Rule.pdf), we recommended against including Bulk API in public health data exchange requirements because the appropriate group and scope of data still needed to be defined manually. “As such, it is not yet ready to meet the complex needs of public health reporting. Instead, the focus should be on improving Bulk API ***before mandating its use*** for these scenarios.” (Emphasis added.)

**EHI Export**

In terms of EHI Export, we have long recommended shifting to a standards-based approach, specifically HL7 FHIR-based, which would cover both structured and unstructured data. In particular, we suggest HL7 FHIR Bulk Data Export.

Through both our Cures Act and HTI comments, we have consistently suggested that a practical approach would be to begin building the EHI Export based on USCDI and utilize the bulk data capabilities included in HL7 FHIR R4 to enable the asynchronous export of multiple patients. This, we wrote, “will start to harmonize the data formats and vocabularies used for both export and import.”

> Through both our Cures Act and HTI comments, we have consistently suggested that a practical approach would be to begin building the EHI Export based on USCDI and utilize the bulk data capabilities included in HL7 FHIR R4 to enable the asynchronous export of multiple patients.

In our 2022 [USCDI v3 Draft](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20Draft%20USCDI%20v3%2004-28-22.pdf) comments, we expressed concern that the long-term goal of USCDI is not to address all EHI. Yet, there is industry-wide consensus on the need for a minimum set of data elements that constitute EHI, which is essential for building technical standards to exchange all EHI. Targeting long-term alignment of USCDI with EHI would also enable developers to create EHI Export capabilities that are standards-based, rather than proprietary.

More recently, in our health IT ecosystem feedback, we recommended revising the EHI Export capability to include standardized API requirements. We note that the lack of promulgated standards means the regulation has not met its intended goals of simplifying patient access to their complete EHI and streamlining provider transitions between health IT systems. We also recommended repositioning it as an FHIR Bulk Data use case with a defined implementation guide, rather than an open-ended export of all possible EHI with widely varying formats.

**Consistent Support, Consistent Concerns**

As the trade association representing EHR developers, we seize every opportunity to share recommendations that strike a balance between regulatory necessity and the safety, usability, and innovation of health IT. In addition to the letters linked above, you’ll find our stance on these concepts in:

- [Additional feedback on 21st Century Cures Act](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Letter%20to%20ONC%20RE%20Additional%20Feedback%20on%20Intellectual%20Property%20Provisions%20within%20Interoperability%20and%20Information%20Blocking%20Proposed%20Rule_0.pdf)
- [USCDI v2 draft](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20the%20Draft%20USCDI%20Version%202.pdf)
- [Draft](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20the%20Draft%20USCDI%20Version%202.pdf) [Data Exchange](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Letter%20to%20CalHHS%20on%20its%20Data%20Exchange%20Framework%2012-21-22.pdf) [California Framework, Single Data Sharing Agreement, and Related Policies and Procedures](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Letter%20to%20CalHHS%20on%20its%20Data%20Exchange%20Framework%2012-21-22.pdf)
- [Advancing Interoperability & Improving Prior Authorization NPRM](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20on%20Advancing%20Interoperability%20and%20Improving%20Prior%20Authorization%20NPRM%2003-13-23.pdf)
- [USCDI v3 Draft](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20Draft%20USCDI%20v3%2004-28-22.pdf)
- [USCDI v4 Draft](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20Draft%20USCDI%20v4.pdf)
- [HTI-1 Proposed Rule](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20the%20HTI-1%20Proposed%20Rule.pdf)
- [Feedback to CMS on the Draft dQM Plan](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Feedback%20to%20CMS%20on%20the%20Draft%20dQM%20Plan%2008-29-23.pdf)
- [USCDI Modeling](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Letter%20Regarding%20USCDI%20Modeling.pdf)
- [USCDI v5 Draft](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20to%20ONC%20on%20Draft%20USCDI%20v5.pdf)
- [Medicare and Medicaid Programs CY 2025 PFS](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Feedback%20to%20CMS%20on%20the%20CY25%20PFS%20NPRM%20CMS-1807-P.pdf)
- [Draft Federal FHIR <sup>®</sup> Action Plan](https://www.ehra.org/sites/ehra.org/files/EHR%20Association%20Comments%20on%20the%20ASTP%20Draft%20Federal%20FHIR%20Action%20Plan.pdf)

We look forward to ongoing collaboration with regulatory agencies and other impacted stakeholders to achieve our shared goals around interoperability, usability, and safety.

*Posted by EHR Association on September 30, 2025*

https://ehrablog.org/2025/09/30/uscdi-bulk-data-exports-ehi-exports-solid-concepts-requiring-standardization-and-maturity/

*Previous Post*  
[EHRA Statement on 2025 World Patient Safety Day](https://ehrablog.org/2025/09/17/ehra-statement-on-2025-world-patient-safety-day/)

*Next Post*  
[EHRA Statement on 2025 Cybersecurity Awareness Month](https://ehrablog.org/2025/10/01/ehra-statement-on-2025-cybersecurity-awareness-month/)

- ## Contact Us
	Kasey Nicholoff  
	staff @ ehra.org  
	  
	Amanda Patanow  
	Communications and Media  
	ehracomms @ npccs.com

![](https://pixel.wp.com/g.gif?blog=76847078&v=wpcom&tz=-6&user_id=0&post=1668&subd=ehrablogdotorg1&host=ehrablog.org&ref=&rand=0.9939055369315624)