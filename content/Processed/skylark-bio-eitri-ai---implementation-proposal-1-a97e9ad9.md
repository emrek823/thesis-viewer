---
source_pdf: "https://drive.google.com/file/d/1MzXc3QhP9y9F0RIvUc-89YdOnvsvpVeA/view?usp=drivesdk"
drive_folder: "Portfolio/Eitri"
type: portfolio
company: Eitri
ingested: 2025-12-24
original_filename: "Skylark Bio & Eitri AI - Implementation Proposal (1).pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1MzXc3QhP9y9F0RIvUc-89YdOnvsvpVeA/view?usp=drivesdk)

## Slide 1: EITRI AI
EITRI AI
Building the intelligence layer for biopharma manufacturing

## Slide 2: Background & Context
Skylark is scaling their first product to GMP manufacturing, working with CDMO Forge Biologics.

As part of Process Development, Skylark and Forge completed several small-scale runs (5L, 50L). The results of these runs **informed Skylark's choice of the initial manufacturing process and parameters for each step**. The results also **established the target productivity and quality outcomes** for the product and intermediates at each step.

Skylark and Forge are scaling from Process Development to Engineering Runs (500L). The engineering runs are intended to **confirm that productivity and quality outcomes meet expectations at larger scale**. The material may also be used to support method qualification.

After confirming that productivity and quality outcomes meet expectations in the Engineering Runs, Skylark will **conduct GMP runs at the same scale to produce FIH clinical material**.

CONFIDENTIAL 2

## Slide 3: Pain Point: Confirming batch results match the expected productivity and quality outcomes
As Skylark completes Engineering Runs with Forge, Technical Operations needs to confirm that the results from those batches **meet the expected productivity and quality ranges**.

Today, this comparison and confirmation is done manually.
* Forge sends Skylark a 70-100+ page scanned batch record containing process results.
* Forge sends Skylark a mix of curated excel and written reports with analytical results.
* Skylark team reads the batch record and curated reports to locate key data points.
* Skylark team transcribes key productivity and quality data points into Excel.
* Skylark team reviews Excel files documenting Process Development results to locate the expected outcomes, visually compare them, and note differences.

This happens **4-6 times over ~6 months**, (each time there's a run), and takes the Skylark team **18-20 hours to complete** for each run.

CONFIDENTIAL 3

## Slide 4: Eitri AI: Automating batch record review and outcome comparison
The Eitri AI platform enables automatic comparison of engineering and GMP batch records against expected quality and productivity outcomes.

**Diagram: Data Ontology Structure**
*   **Product**
    *   **Batch/Study**
        *   Parameters
        *   Outcomes
    *   **Batch/Study**
        *   Parameters
        *   Outcomes

Eitri intelligently **creates a data ontology for Skylark's batches, parameters, and outcomes** (e.g. productivity and quality).

When Skylark receives a scanned batch record from Forge, Eitri uses **optical character recognition (OCR) and large language models (LLMs)** to structure relevant outcomes data.

Eitri **compares the structured batch outcomes to the expected values** in the ontology, and allows Skylark to visualize deviations.

CONFIDENTIAL 4

## Slide 5: Example Workflow

**Diagram: Data Structure (Left Panel)**
*   **SKY-001**
    *   **FORGE-24-085C**
        *   **Cell Culture**
            *   Timestamp
            *   Titer
            *   Viability
        *   **Affinity**
            *   Recovery
            *   Radius
            *   %PD

**Workflow Steps (Middle Panel):**

**Step 1:**
Ran cell culture for 14 days
Day 1 titer and viability...
Day 7 titer and viability...

**Step 2:**
Affinity chromatography
Starting volume and titer
Final volume and titer

**Step 3:**
Affinity chromatography DLS
Particle radius...
Percent polydispersity

**Step 4:**
Affinity area under the curve
Percent empty capsids
Percent full capsids

**Chart: Titer over Time (Top Right)**
*This is a line chart showing Titer (y-axis) vs Day (x-axis) for multiple runs. While specific numerical data points are not provided for each line, the chart shows three lines, indicating an increasing trend for Titer over approximately 10 days, with values ranging from 1.0 to just under 3.0 on the y-axis.*

**Table: Comparison of Batch Outcomes (Bottom Right)**

| | 085C | ENG-001 | Deviation |
| :------------------ | :------- | :-------- | :-------- |
| Titer 6.8e10        | Titer 6.8e10 | Titer 7.0e10 | ✅        |
| Radius 16.2         | Radius 16.2  | Radius 25.0  | ❌        |
| % Full 25.9         | % Full 25.9  | % Full 27.2  | ✅        |

**Description of Steps:**

**Step 1:** Eitri structures PD data and provides a visualization dashboard.

**Step 2:** Eitri parses scanned batch records to extract key outcomes.

**Step 3:** Eitri visualizes batch outcomes against expected results.

CONFIDENTIAL 5

## Slide 6: Implementation - Overview

**Phase 1: Build and Feedback**
**Outcome:** Eitri structures Skylark PD data, creates a dashboard, and builds an OCR pipeline.
Eitri creates an ontology for Skylark PD data, and an MVP for parsing scanned batch records.
Skylark shares Process Development files, beta tests the UI, and provides feedback.

**Phase 2: Deployment**
**Outcome:** Skylark leverages Eitri platform for ongoing batch record review and comparison.
Eitri deploys the ontology and the extraction pipeline to a secure cloud server and activates a web platform for Skylark to interact with data.
As Skylark receives process and analytical batch results from Forge, they uploads them to Eitri.

**Timeline:**
4-6 weeks
Ongoing Access

CONFIDENTIAL 6

## Slide 7: Implementation - Timeline & Milestones

| Build Timeline        | Milestone                                                      | Ask for Skylark                                                |
| :-------------------- | :------------------------------------------------------------- | :------------------------------------------------------------- |
| **Week 1:** Ending May 9  | Complete v1 visualization for existing PD data.                | Share any additional PD data                                   |
| **Week 2:** Ending May 16 | Complete the v1 pipeline to parse scanned files.               | Provide feedback on the initial visualization.                 |
| **Week 3:** Ending May 23 | Build a self-serve application. Demo to the wider Skylark team. | Provide feedback on the app.                                   |
| **Week 4:** Ending May 30 | Finalize scanned and structured data ingestion & visualization |                                                                |
| **Week 5-6:** Ending June 13 | Complete process data comparison (from batch records)          | Share batch records as they become available from Forge.       |
| **Week 6-7:** Ending June 20 | Complete analytical & quality data comparison (from reports)   | Share analytical & data as they become available from Forge.   |

CONFIDENTIAL 7