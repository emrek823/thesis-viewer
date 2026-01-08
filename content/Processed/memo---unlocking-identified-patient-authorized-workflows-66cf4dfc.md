---
source_pdf: "https://drive.google.com/file/d/1f4cdDkWF-Ib5uWlwpvowycKHIXczqLfG/view"
drive_folder: "Research"
type: research

ingested: 2025-12-27
original_filename: "Memo - Unlocking Identified Patient Authorized Workflows.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1f4cdDkWF-Ib5uWlwpvowycKHIXczqLfG/view)

# Unlock New Revenue Stream: Identified Patient Authorized Workflows

## Executive Summary

This memo explains how Truveta can enable identified patient authorized workflows with Hermes Health, without amending the existing Truveta Health-System BAA. The only additions required are:

1.  A short Service Order (SOW) between the Health System and Truveta
2.  A Service Order (SOW) between Truveta and Hermes Health

Once in place, Truveta can unlock identified patient authorized workflows, opening a new, compliant revenue stream to complement its de-identified business.

(Dataflow on last page)

## Purpose

Enable the flow of identified PHI that Truveta holds on behalf of the Health System to Hermes Health, strictly in support of patient-authorized workflows.

## Why HIPAA Authorizes Identified Workflows

| Legal lever          | Key citation  | Practical takeaway                                                                                                                              |
| :------------------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| Patient Authorization| 45 C.F.R. § 164.508 | A valid Authorization signed by each patient overrides the default ban on non-TPO disclosures and allows PHI to flow to a named recipient (Hermes Health). |

## How the Current Truveta BAA Already Covers Identified Workflows

The current BAA between Truveta and its Health Systems has all the necessary legal frameworks and safeguards to power identified patient authorized workflows.

However to unlock the use case it will need a Service Order between itself and the Health System as dictated by the BAA.

# Unlock New Revenue Stream: Identified Patient Authorized Workflows

## BAA clause

| BAA clause                                    | What it says                                                                                                                                                                                                                                                         | Why that's enough                                                                                                                                                                                                                                                                                                                       |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| § 1.1 "Services"                              | Truveta may "Use or Disclose PHI as necessary to perform the Services set forth in the Agreement and any Service Order, so long as such Use or Disclosure would not violate the Privacy Rule if done by Health System."                                                 | If the Health System issues a short Service Order instructing Truveta to disclose PHI to Hermes and every record is backed by a valid § 164.508 Authorization, the disclosure would be permissible for the Health System—therefore Truveta can do it.                                                                                   |
| § 1.8(c) (Proper management and administration) | Clarifies that Truveta may not use PHI for unrelated commercial purposes, but may disclose PHI as part of its legal duties when proper assurances are in place.                                                                                                        | The Hermes disclosure is not for Truveta's own commercial gain; it's fulfilling a Health-System instruction, so § 1.8 isn't a blocking provision.                                                                                                                                                                                   |
| § 2.7 (Accounting of Disclosures)             | Truveta will log and make available disclosure data to satisfy § 164.528.                                                                                                                                                                                            | This covers the accounting obligation for each record sent to Hermes.                                                                                                                                                                                                                                                                   |

## Contracts: Truveta ↔ Hospital System

As shown above to enable identified patient authorized workflows Truveta and the Hospital System will need to sign a Service Order between each other.

*   **Service Form (One Page Addendum)**: In line with the BAA Truveta may disclose PHI only to perform services that the Hospital System has formally requested. As a result Truveta must sign a short Service Order to allow Truveta to act on the Hospital System's behalf to power identified workflows. The Service Order should:
    *   Reference the master services agreement/BAA,
    *   Cite § 164.508 Authorizations as the legal basis;
    *   lists PHI categories (demographics, encounters, clinical notes, labs, imaging, medications;
    *   Name Hermes Health as the recipient;
    *   Include a Commercial Term to motivate the health system to participate. Such as Truveta will pay the Health System $ \_\_\_\_\_ per patient record transmitted.

# Unlock New Revenue Stream: Identified Patient Authorized Workflows

*   (Optional) BAA tweaks Truveta May choose to make
    *   Clearly state in § 1.1: "For avoidance of doubt, 'Services' explicitly include disclosures of PHI to third-party recipients designated in writing by Health System and supported by valid HIPAA Authorizations."
    *   Allocate breach liability in the sub-BAA to cap Truveta's exposure only to breaches directly caused by Truveta, shifting liability for Hermes-originated breaches to Hermes.
    *   Confirm Audit & Compliance Committee approval by adding a short rider:
        *   "The Audit & Compliance Committee has formally approved identified patient-authorized workflows and data transfers to Hermes Health."

## Contracts: Truveta ↔ Hermes Health

To enable the workflow Truveta and Hermes Health will need to sign an order form between each other.

*   **Service Order (SOW)**: Provides the day-to-day operational playbook and economic model governing each transfer between Truveta and Hermes.
    *   Scope of PHI (e.g., demographics, encounters, clinical notes)
    *   Transfer cadence and format (secure SFTP, JSON/PDF, etc.)
    *   Service-level commitments for delivery, quality control, and revocation handling
    *   Commercial term (example): "Hermes Health will pay Truveta $ \_\_\_\_\_ per patient record successfully fulfilled."

## Bottom Line

With a SOW between the Hospital and Truveta, and SOW between Truveta and Hermes Health, Truveta can unlock identified patient authorized workflows—securely, compliantly, and at scale.

This enables Truveta to unlock a new workflows to complement its de-identified business.

# Unlock New Revenue Stream: Identified Patient Authorized Workflows

## Example Data Flow

The data flow demonstrates the process for identified patient authorized workflows:

1.  **Requestor** initiates the process by providing:
    *   Signed Patient Authorization
    *   PHI Patient Data (presumably, data related to the request)
2.  This information flows to the **Hermes Platform**.
3.  The **Hermes Platform** then generates and sends:
    *   Patient Medical Record Request
    *   PHI Patient Data
4.  This information flows to **Truveta**.
5.  **Truveta** interacts with the **Hospital System Patient Data** to fulfill the request.