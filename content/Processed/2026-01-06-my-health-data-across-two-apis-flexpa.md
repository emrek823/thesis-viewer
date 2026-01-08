---
url: https://www.flexpa.com/blog/my-health-data-across-two-apis
title: "My health data across two APIs | Flexpa"
clipped: 2026-01-06 17:24
source: browser-history
---

# My health data across two APIs | Flexpa

> Source: [https://www.flexpa.com/blog/my-health-data-across-two-apis](https://www.flexpa.com/blog/my-health-data-across-two-apis)

[🚨💻 Register now for our webinar with CARIN Alliance on the State of the CMS Patient Access APIs →](https://hma.connect.space/state-of-the-cms-patient-access-api/details)

[Blog](/blog)/Platform Updates

# My health data across two APIs

A personal look at retrieving my own health data via two different API-driven paths, comparing the experience and the data received.

January 2, 2026•Angela Liu

![My health data across two APIs](/_next/image?url=%2Fimages%2Fblog%2Fmy-health-data-across-two-apis.png&w=1080&q=75)

*[Join us on 1/20/26 at 12pm ET](https://hma.connect.space/state-of-the-cms-patient-access-api/details) for a joint webinar with the CARIN Alliance where we will review results and findings from our latest [State of the Payer Patient Access API Report](/blog/nov-2025-state-of-the-payer-patient-access-api-report).*

At the end of 2025, Flexpa retrieved our first document off TEFCA since becoming an IAS provider! This was a significant milestone for us, and we're excited to share our learnings with the community.

We're kicking off a series where we'll share transparent details on the user experience, real world match rates, data quality, and more. For this first post, I'll kick us off by sharing my personal experience using two different API-driven paths to get my own medical records:

1. **TEFCA IAS**
2. **ONC g(10) APIs**

Flexpa also supports CMS 9115F Payer APIs (for claims data), but for this comparison, we're focusing on ONC g(10) and TEFCA IAS because they both source clinical data directly from providers, making it an apples-to-apples comparison.

Here is what the two processes looked like, what I got back, and how they compare.

## Path 1: TEFCA IAS

The Trusted Exchange Framework and Common Agreement (TEFCA) has been a long-awaited development in healthcare interoperability, emerging from the 21st Century Cures Act. One of its key exchange purposes is [Individual Access Services (IAS)](https://rce.sequoiaproject.org/tefca-exchange-purposes/), which allows patients to query for their own records. This is particularly significant because, until now, there has been no federally sanctioned, nationwide network path for *patients* to initiate these queries themselves.

Here's the flow I went through to retrieve my records via TEFCA:

**1. Identity Verification**: I logged in through the identity provider (IdP) CLEAR. I already have an account, so the process was simple. It involved 2FA for my phone number, a transition to my phone for a selfie, and then I was automatically kicked back to the web. The downside with CLEAR is if you want to update your address, you have to request support from their team. This matters because address matching is critical for TEFCA's patient discovery. If your address doesn't match what the QHINs have on file, they might not find your records. CLEAR has let us know they will support historical addresses soon, though.

![Identity Verification Step](/images/blog/tefca-step-1-identity.png)

**2. Request Submission**: That is actually *all* it takes in terms of required user interaction at the verification and request level. The rest of the process is handled by Flexpa.

![Request Submission Step](/images/blog/tefca-step-2-request.png)

**3. Consumer-Mediated Exchange**: In the background, Flexpa sent the token to the QHIN (in this case Kno2), who then queried all other QHINs on the network to retrieve records. There are a lot of moments where this can fail:

* Identity not verified
* QHIN connection errors
* No match on demographics
* Record fetch errors

Flexpa splits these into separate steps in the UI to either bring the user into the loop or retry in the background to maximize rates of success.

![Consumer-Mediated Exchange Step](/images/blog/tefca-step-3-exchange.png)

### What I Got Back: A CCD

The result of this query was a **Continuity of Care Document (CCD)**.

For those less familiar with the acronyms, a CCD is a specific type of [Consolidated Clinical Document Architecture (C-CDA)](https://www.hl7.org/ccdasearch/) document. It's a document-centric standard. Think of it like a PDF that has some structured data embedded within it. It acts as a "summary of care" document, telling the story of a patient's encounters, problems, and allergies in a single, coherent narrative. It is not necessarily a full export of all the data within the EHR. It is meant to describe the full picture of a particular course of care.

**Viewing and Using the Data**
Although it's an XML file, it can be rendered into a human-readable format. There are a few free and [easy to use tools](https://backbeachsoftware.com.au/challenge/index.htm) to render the data directly in the browser.

However, for developers building modern applications, parsing this XML is heavy. This is where conversion to FHIR becomes critical. Tools like [Medplum's C-CDA to FHIR API](https://www.medplum.com/docs/integration/c-cda) allow us to transform these document-based summaries into discrete FHIR resources. At Flexpa, we are actively experimenting with these conversions to help bridge the gap.

## Path 2: ONCg10 APIs

The second path I took was using the [ONC (g)(10) standardized APIs](https://www.healthit.gov/test-method/standardized-api-patient-and-population-services). Mandated by the Cures Act Final Rule, these APIs require certified EHR technology to support patient access via standard FHIR APIs. This requirement, effective as of late 2022, kickstarted the modern "App Economy" in healthcare.

This flow feels much more like the modern "Login with Google" experience that many will recognize, and leverages standard OAuth2 flows:

**1. Provider Selection**: I selected my provider from the searchable directory. There are many complexities to the organizational hierarchy of healthcare providers that can make this step more complex, but we won't get into that here.

![Provider Selection Step](/images/blog/onc-step-1-provider.png)

**2. Authorization**: I was redirected to the provider's OAuth2 authorization page in a new tab and logged in with my patient portal credentials. Luckily patients are typically required to create a patient portal account by their providers.

![Authorization Step](/images/blog/onc-step-2-login.png)

**3. Consent**: I authorized the application to access specific scopes of my data. And that's the last step involving the patient. The rest is handled by Flexpa.

![Consent Step](/images/blog/onc-step-3-consent.png)

### What I Got Back: FHIR Resources

Unlike the document-centric return from TEFCA, the ONCg10 APIs returned FHIR resources.

This is a much more granular approach. Instead of one giant document, I received individual resources as separate JSON objects for my Patient demographics, Observations (labs/vitals), Conditions, and Immunizations, and more. This makes it incredibly easy for developers to display exactly the data the user needs without having to parse a massive XML file.

## Comparing the Technical Standards

The core difference here lies in the underlying standards: **CCD vs. FHIR**.

* **TEFCA IAS (CCD)**: This is like receiving a "story" of your care. It's a robust, established way to move a care summary around. In my specific case, the TEFCA document was a Continuity of Care Document (CCD) that contained 192 resources when converted to FHIR. It was excellent at capturing the "Care Team" context—practitioners and organizations involved in my care—which the ONC path missed entirely. However, it only listed **one** condition: a "pain in throat" from a specific encounter.
* **ONC (g)(10) APIs (FHIR)**: This is like receiving a box of Lego bricks. It's a systematic export of granular data elements defined by the [US Core FHIR IG](https://www.hl7.org/fhir/us/core/) and [USCDI](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi). The ONC path returned 166 resources, but they were different. It returned **11 conditions** (including "rhinitis" which was missing from TEFCA) and 10 diagnostic reports. It also missed a known allergy (cat dander) that I know exists in my record.

## Summary

Both paths successfully got me my data, but the "shape" of that data was very different.

* **TEFCA IAS**: Gave me a comprehensive document (CDA). Good for a full history review, but requires parsing to extract discrete data.
* **ONCg10 APIs**: Gave me discrete data resources (FHIR). efficient, granular, and easier for modern apps to consume directly.

In a future post, we’ll do a deeper comparison work—looking at line-item differences, coded content, terminology variations, and the nitty-gritty of C-CDA to FHIR conversion.

Stay tuned!

## In this blog

[Path 1: TEFCA IAS](#path-1:-tefca-ias)

[What I Got Back: A CCD](#what-i-got-back:-a-ccd)

[Path 2: ONCg10 APIs](#path-2:-oncg10-apis)

[What I Got Back: FHIR Resources](#what-i-got-back:-fhir-resources)

[Comparing the Technical Standards](#comparing-the-technical-standards)

[Summary](#summary)

## More platform updates

[View All](/blog)

[![Open Sourcing Payer Consumer Data](/_next/image?url=%2Fimages%2Fblog%2Fopen-sourcing-payer-consumer-data.png&w=1080&q=75)

### Open Sourcing Payer Consumer Data

HealthLX and Flexpa discuss their recent open source releases enabling vendor neutral standards-aligned translation of healthcare data into FHIR in the payer consumer data space.

September 29, 2025•Joshua Kelly](/blog/open-sourcing-payer-consumer-data)[![How We Used SQL on FHIR to Shrink LLM Context by 92%](/_next/image?url=%2Fimages%2Fblog%2Fsql-on-fhir-for-llm-context-reduction.png&w=1080&q=75)

### How We Used SQL on FHIR to Shrink LLM Context by 92%

How we leveraged SQL on FHIR to dramatically reduce token usage in Flexpal, our smart health agent, while maintaining rich clinical context and simplifying our tooling architecture.

November 3, 2025•Larry Ditton](/blog/sql-on-fhir-for-llm-context-reduction)[![Nov 2025 State of The Payer Patient Access API Report](/_next/image?url=%2Fimages%2Fblog%2Fnov-2025-state-of-the-payer-patient-access-api-report.png&w=1080&q=75)

### Nov 2025 State of The Payer Patient Access API Report

The State of the Payer Patient Access API Report is a scorecard for payers, vendors, and developers to understand the CMS-9115-F landscape.

November 24, 2025•Hannah Trub & Angela Liu](/blog/nov-2025-state-of-the-payer-patient-access-api-report)

## Get fresh insights on patient access

Email address

Subscribe

Unsubscribe anytime

![Newsletter illustration](/images/newsletter/illustration.svg)

## Get fresh insights on patient access

Unsubscribe anytime

![Newsletter illustration](/images/newsletter/illustration.svg)