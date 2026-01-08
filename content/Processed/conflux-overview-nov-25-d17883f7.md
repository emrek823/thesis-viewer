---
source_pdf: "https://drive.google.com/file/d/1RKRMgK2ZrcUrseF_5eqDr4zd9lPG0AMw/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Conflux Overview Nov 25.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1RKRMgK2ZrcUrseF_5eqDr4zd9lPG0AMw/view)

# Conflux Pitch Deck

## Slide 1: Conflux

Conflux
Intelligence Layer for Modern Diagnostic Medicine
November 2025

## Slide 2: Experienced Team Advancing the Future of Medicine

**Perry Palmedo, PhD**
Co-founder and CEO
Previously: insitro (founding team), Harvard/MIT, Bill Gates Investments, Morgan Stanley, Princeton

**Alden Timme, MS**
Co-founder and VP of Eng
Previously: Co-founder at DataFox (acq. Oracle), Stanford CS

**Ben Dulken, MD/PhD**
Founding Pathology Advisor
Assistant professor at UW; Stanford MD/PhD; Fellowship in Gastrointestinal Pathology at Stanford

**Chris Probert, PhD**
Co-founder and CTO
Previously: insitro (founding team), Stanford, VALIS, Illumina, UCSD

**Salik Syed, MS**
Founding Engineer
Previously: Co-founder at Parastructure (acq. Dropbox), VALIS, Stanford CS

## Slide 3: Pathology: The "Cost Center" Behind Modern Medicine

*   ~70% of complex diagnoses are informed by pathology
*   >$250B annual spend on interventions directly informed by pathology
*   10 of the top 10 cancer drugs rely on specific pathology biomarkers

Despite underpinning precision care...
Pathology is treated as a commodity cost center due to outdated reductionist thinking...

In reality, it is a highly-specialized, data-rich intelligence engine powering modern medicine.

## Slide 4: Value of Pathology Obscured by Reductionism

Information reduction: Gigapixel image to single code

**Lab Information System**
**Electronic Health Record**
**D05.1**
Ductal carcinoma in situ

The current paradigm was designed for a bygone era:
*   Data exists as scanned PDFs, unstructured text, glass slides, and images locked in vendor-proprietary formats and silos
*   Only short text summaries, diagnosis codes and scanned reports make their way outside the silos

The impact:
*   Reactive, inefficient, and repetitive workflows
*   Static and isolated system that doesn't leverage the opportunity to learn from patterns

## Slide 5: Building the Intelligence Layer for Modern Pathology

Efficient AI to structure, augment, and index pathology data, making it actionable and computable.

**SCALING DIAGNOSTIC EXCELLENCE**
*   Accelerating diagnostic workflows
*   Scaling expert-level insights

**POWERING INNOVATION**
*   Biomarker discovery & deployment at population scale
*   Accelerating precision medicine research

**REDEFINING VALUE**
*   New diagnostic and data services
*   From cost center to strategic asset

## Slide 6: Unlocking Pathology's Intelligence

**Today's Pathology Reality**
*   Slide generated → manually routed → sits in queue
*   No actions until pathologist reads
*   Pathologist opens with limited context, most of report involves duplicating context
*   Data locked in silo, slides never to be accessed again

**Vision: Growing Real-Time Context**
**When slide is scanned:**
*   Instant in-depth characterization, integrated with clinical history
*   Relevant AI deployed automatically
*   Intelligent prioritization / routing
*   Next steps queued, report pre-populated

**As data accumulates:**
*   Treatment patterns emerge
*   Novel biomarkers discovered
*   Precision medicine advances

From siloed and reactive → intelligent and predictive

## Slide 7: Diagnostic intelligence starts with consistent, reliable data

### STRUCTURE | INDEX | REASON

**EFFICIENT IMAGE EXTRACTORS**
*   Rust-native access runs anywhere across cloud/edge
*   Vendor-agnostic supporting all major scanner formats
*   Realtime inference using efficient, distilled models deployed adjacent to data

**Image Viewer Data Details:**
*   SLIDE METADATA:
    *   level
    *   aperio (8 levels)
        *   Level 7 (32.61 KB) 248 x 210 px
        *   Level 6 (130.45 KB) 496 x 420 px
        *   Level 5 (521.78 KB) 992 x 840 px
        *   Level 4 (2.09 MB) 1,984 x 1,680 px
        *   Level 3 (8.35 MB) 3,968 x 3,360 px
        *   Level 2 (33.39 MB) 7,936 x 6,720 px
        *   Level 1 (133.58 MB) 15,872 x 13,440 px
        *   Level 0 (534.30 MB) 31,744 x 26,880 px
    *   comment
    *   mpp-x
    *   mpp-y
    *   objective
    *   quickhash-1
    *   tiff
*   SLIDE STRUCTURE (Example showing different tissue types highlighted)

**STRUCTURED DATA EXTRACTION**
*   Extract, abstract, and verify clinical context
*   Guardrails ensure extractions are grounded, citations enable human-in-the-loop usage.
*   Rapidly re-run as abstractions change at minimal cost

**Example Pathology Report Extract:**
*   PATIENT NAME: Doc, John
*   SP-24-054923 1/1942 Surgical General
*   Authorizing Provider: Doctor, Joe, MI
*   Ordering Location
*   Diagnosis: Invasive adenocarcinoma, poorly differentiated (see comment)
*   Loss of expression of mismatch repair repair proteins MLH1 and PMS2 (s) immunohistochemistry
*   Positive PD-L1 expression on immunohistochemistry (CPS>1)
*   Negative for EBV hy in situ hybridization
*   Helicobacter on H&E: gastritis (mild)
*   Electronically signed by Pathologist, John, MD on 1/8/2005 at 1:29 PM
*   Diagnosis Comments: Histologic sections of the gastric ulcer biopsy (specimen B) show infiltrative ill-formed glands of malignant and positive for mixed cytokeratins (AE), AE, and immunohistochemistry, the tumor cells stain strongly positive for mixed cytokeratins (AE1,

**AI Insights**
*   Oncotree Code: STAD
*   ICD-O-3 Morphological Code: 8140/3
*   ICD-O-3 Topographical Code: C16.9
*   Grade: 3

## Slide 8: Enrich data value with spatial and clinical context

### STRUCTURE | INDEX | REASON

**SPATIAL PATTERNS**
*   Label limited number of examples with ML assistance
*   Train label-efficient models to measure slide content and infer slide-level attributes
*   Distill and Deploy models on any compute surface

**CLINICAL CONTEXT**
*   Link records from adjacent systems
*   Impute missing data like anatomic site or tumor stage
*   Derive outcomes from records to support biomarker evaluation

**Image showing tissue analysis:**
*   Original tissue sample image
*   Processed image with different regions highlighted in colors (e.g., green, orange, purple, brown)
*   Magnified tissue image
*   Predicted features JSON output:
    ```json
    predicted_features: {
        tissue: colorectal
        major_icd10: C18.9
        subtype: adenocarcinoma
        msi_status: high
    }
    ```

## Slide 9: Context-aware reasoning unlocks data's full potential

### STRUCTURE | INDEX | REASON

**COHORT SELECTION**
Reason about slide content and case-level features to support cohort selection, clinical studies, or model evaluation/training workflows.

**DISEASE BIOLOGY AND BIOMARKER DISCOVERY**
Discover spatial and clinical patterns underlying disease biology using real-world cohorts augmented with human-interpretable spatial features.

**CLINICAL WORKFLOWS AND CASE PRIORITIZATION**
*   Quality: Improve lab efficiency, data quality, and patient safety using data-driven insights.
*   Case routing: Intelligently route cases using prompts based on slide content and clinical context.

## Slide 10: Our Differentiated Approach

**Develop with Advanced AI + Deep Domain Expertise**
*   Rapidly and efficiently develop new models using latest AI techniques incl. semantic segmentation and foundation models
*   Deep domain expertise and collaboration with subject matter experts on label schemas and objective functions

*Image showing human feedback loop for AI model training (e.g., "Staining ok?" with Yes/No/Maybe options).*

**Web, Native, and Cloud**
Same model family, architecture distilled, optimized for use case

**Deploy with Strong Engineering + Focus on Real-world Use**
*   Foundation models too resource intensive for real-time use cases
*   Distill and optimize models to deliver near SOTA performance with 1-2 orders of magnitude less compute
*   Strong software foundations enable flexible deployment

## Slide 11: Example Tools Built on Platform Foundation

**CONFLUX QUALITY**
Fully-featured WSI QA/QC platform for labs to spot, remediate, and drive down errors across all workflows.
*Image showing a dashboard with graphs and a WSI viewer displaying tissue analysis, with a text overlay "Scanning Area with 100.0% of tissue".*

**CONFLUX EDGE**
Seamless insights using edge AI built for the real-world. No installation and no data leaves your device.
*Image showing a screenshot of a "SlideCheck" interface with tissue analysis and structured data output.*

**CONFLUX CONSULT**
Seamless glass and digital consult workflows facilitated with AI-enabled interfaces.
*Image showing a "Submit Consult" interface with fields for Pathology Report, Patient Information, Physician Information, and Consult Question, alongside a list of consult requests with status and sub-specialty information.*

## Slide 12: GTM Strategy: Design Partnerships with Top AMCs

### Strategic Design Partnerships
*   Collaborative development with leading AMCs surfaces highest ROI clinical and research applications
*   Diverse initial use cases enable each other and are supported by common technology platform
*   Real-world validation accelerates platform adoption

*Diagram showing "CLINICAL WORKFLOWS" connected to "DATA ENABLEMENT" and "ADVANCED DIAGNOSTICS". "DATA ENABLEMENT" is also connected to "CLINICAL WORKFLOWS" and "ADVANCED DIAGNOSTICS".*

### Partner Pipeline: Pull Across Use Cases

| Partner Profile       | Scope                                        | Status             | Initial Applications                               |
| :-------------------- | :------------------------------------------- | :----------------- | :------------------------------------------------- |
| Top-25 AMC            | Lab Quality Intelligence                     | Active Pilot       | CLINICAL WORKFLOW, DATA ENABLEMENT                 |
| Top-5 AMC             | WSI Data Enablement                          | Research Plan, SoW | DATA ENABLEMENT, ADVANCED DIAGNOSTICS              |
| Top-10 AMC            | Lab Quality Intelligence, AI-Enabled Consults | Active Discussions | CLINICAL WORKFLOW, DATA ENABLEMENT, ADVANCED DIAGNOSTICS |
| AI Diagnostic Co.     | Lab Quality Intelligence                     | Quote Provided     | DATA ENABLEMENT                                    |

## Slide 13: Positioning for the Shift

### Riding the Wave
*   Rising diagnostic workloads + digital pathology adoption
*   AI and Precision Medicine creating demand for structured, computable data
*   Market increasingly recognizing diagnostics as driver of precision medicine

### Strategically Raising to Support Design Partnerships
*   Bootstrapped by founding team to-date
*   Raising $3-4M via SAFE to enable scaling into initial partner deployments:
    *   +2-3 ML engineering hires, scaled to match delivery needs
    *   Anticipate participation from strategic partner
*   Capital supports execution and relieves engineering bottleneck to hit initial milestones