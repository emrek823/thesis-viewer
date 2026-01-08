---
source_pdf: "https://drive.google.com/file/d/14QlFujmrCdMZ5y06V9AVS5YySb8JYrU10irDRbcHf-Q/view"
drive_folder: "Portfolio/Dart"
type: portfolio
company: Dart
ingested: 2025-12-24
original_filename: "Dart.gslides"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/14QlFujmrCdMZ5y06V9AVS5YySb8JYrU10irDRbcHf-Q/view)

## Process Flow Diagram

### Legend
*   **internal**: Orange
*   **external**: Dark Blue

### Top Row Process Flow

#### Integration (internal)
*   Connect to FHIR, HL7, RPA, BYOC, etc.

#### Document parsing (external)
*   Extend AI extracts fields from charts -> JSON

#### Labeling (external)
*   Label Studio allows SMEs (Dart brings SMEs) to label charts

#### Normalization (external)
*   Tuva dbt packages map data tables to a common schema

#### Transformation (internal)
*   Converts normalized tables into business/clinical metrics

### Bottom Row Supporting Processes

#### Dashboard Analytics (internal)
*   Analytics dashboard showing all autopilots (page 1 of general deck)

#### Deployment + Security (internal)
*   Can install inside the customer firewall + guardrails like audit logs, evidence tracebacks and SOC-2 controls.

#### Review UI + Feedback (internal)
*   SME can accept / reject output

#### Analysis Engine (internal)
*   SME-written prompts hit an LLM API or fine-tuned embeddings on Dart GPUs shortlist charts, then an LLM reasons over them

---

**Callout related to Analysis Engine:**
*   DartX gives ability to replace with custom model if higher accuracy needed