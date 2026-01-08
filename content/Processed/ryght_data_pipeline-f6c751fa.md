---
source_pdf: "https://drive.google.com/file/d/1IBooWq2SceZsirn3Hs-cndTUh9IL7myT/view"
drive_folder: "Portfolio/Ryght/Ryght - Data Room/2. Product & Tech"
type: portfolio
company: Ryght
ingested: 2025-12-27
original_filename: "ryght_data_pipeline.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1IBooWq2SceZsirn3Hs-cndTUh9IL7myT/view)

## Slide 1: Data Pipeline

R GHT.

Data Pipeline
April, 2024

© 2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 2: 80% of data in healthcare are unstructured RIGHT.

80% of data in healthcare are unstructured RIGHT.
Healthcare and life science account for 30% of data volume globally

Unlock high value data from PDFs, Scans, Faxes
Legacy methods required time intensive training, heavy amounts of data science, retooling for new report formats
With Ryght, value is extracted rapidly, efficiently, and becomes actionable.

**Quest Diagnostics Patient Information**
| Patient Information | | |
| :------------------ | :------------------- | :--------------------------------- |
| DOB:                | Gender:              | AGE: 52                            |
| Lab. No.:           | Patient ID: NG       | Health ID: 857300948088959         |
| Our Ref.            | Referred             | Date of Re: COMMENTS: FASTING: YES |

**Specimen Information**
| Specimen Information |
| :------------------- |
| **MARGINS**          |

**Client Information**
| Client #: 73912105 | MAIL992 |

**Test Name**
| Test Name               |
| :---------------------- |
| KCNJ11,                 |
| Test meth               |
| Analysis                |
| (NM_0001                |
| sequencin               |
| R                       |
| Highest Variant         |
| Allele Fraction         |
| 5.8%                    |
| Mutat                   |

**Data from Guardant360 Tumor Response Map**
| Alteration | % cfDNA or Amp |
| :--------- | :------------- |
| NTRK1 P311R | 5.8%           |
| KRAS Q61H  | 3.7%           |
| CCNE1 L139F | 1.0%           |
| EGFR S306S | 0.2%           |

**Data from Breast Cancer Prognostic Marker Report**
| Test                    | Interpretation | Intensity | % Tumor Staining | Comment |
| :---------------------- | :------------- | :-------- | :--------------- | :------ |
| Estrogen Receptor       | Positive       | 2-3+      | 90               | Favorable |
| Progesterone Receptor   | Positive       | 2-3+      | 100              | Favorable |
| HER-2/Neu HercepTest    | Negative       | 1+        | 40               | Favorable |

**Data from Roche cobas® EGFR Mutation Test v2 on A12-3456-7B**
| RESULTS            | Exon 19 deletion detected |
| :----------------- | :------------------------ |
| **INTERPRETATION** |                           |
|                    |                           |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 3: Ryght Data Pipeline

Ryght Data Pipeline

Secure private data sources such as:
* snowflake
* databricks
* aws
* PDF
* W
* X

Secure and Private Data Pipeline

RIGHT.
Customer Data Lake

**Visualization - genes_sequenced**
A bar chart showing visualization of genes sequenced, with various gene names on the x-axis and count on the y-axis.
The chart indicates some genes are frequently sequenced (tall bars) while others are less so (short bars).
The genes sequenced are categorized by a numerical scale.

CSV File
CSV

Q&A Copilot

**Q&A Copilot Interface:**
A chat interface showing a question "What are the warning signs for metabolic syndrome?" and a detailed answer with numbered points about abdominal obesity, insulin resistance, dyslipidemia, and hypertension.
On the right, there are "Copilot" sections for "Health Economics Data", "Research Summarization", and "Drug Development".
It also lists documents such as "Metabolic Syndrome.pdf", "Global Epidemic Research", and "Metabolic Syndrome Explained".
At the bottom, there is a "Next question..." prompt.

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 4: Using OCR + ML to extract data: Text-based

Using OCR + ML to extract data: Text-based

High level Tumor Mutation Burden was detected in this
patient X2019 s sample and microsatellite instability was NOT
detected in this patient X2019 s sample.
Presence of T gt;10 mutations / megabase has been reported to be
therapeutically predictive of favorable clinical outcomes and
responsiveness to immune checkpoint inhibitors, according to some
studies (29658845). TMB is an evolving biomarker, and consensus
standardization for this biomarker remains an ongoing imperative
(30664300). To date, the median TMB for all tumor types tested by
Onco Advanced in general, is approximately 3.9 mutations /
megabase. According to some large scale cohorts published in the
primary literature, a median TMB value of 3.6 mutations / megabase
has been reported for all general tumor types, in aggregate
(28420421).
The present sample analysis is also negative for high level
microsatellite instability.
A mutation in CDKN2A p.(Ala20Pro) was detected in this
patient X2019 s sample.

RIGHT.

**Extracted Table**
| Entity Type | Content             |
| :---------- | :------------------ |
| Name        | X2019               |
| Health term | CDKN2A              |
| Diagnosis   | Tumor Mutation Burden |

No ability to infer automatically:
* what data is important
* what its related to
* requires custom logic to identify and sort the appropriate data

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 5: Using Ryght to extract data

Using Ryght to extract data

* Ryght's LLM pipelines work well with textual information and **context**
* This can be exploited to pull target data from a block of text, regardless of where it's placed or what it is
* Feed Ryght a report as context, and instruct it to structure the data into tables
* Able to infer relationships even when data is spread far apart in the text

RIGHT.

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 6: Using OCR + Ryght to extract data: Text-based

Using OCR + Ryght to extract data: Text-based

High level Tumor Mutation Burden v as detected in this
patient X2019 s sample and microsatellite instability was NOT
detected in this patient X2019 s sampie.
Presence of T gt;10 mutations / megabase has been reported to be
therapeutically predictive of favorable clinical outcomes and
responsiveness to immune checkpoint inhibitors, according to some
studies (29658845). TMB is an evolving biomarker, and consensus
standardization for this biomarker remains an ongoing imperative
(30664300). To date, the median TMB for all tumor types tested by
Onco Advanced in general, is approximately 3.9 mutations /
megabase. According to some large scale cohorts published in the
primary literature, a median TMB value of 3.6 mutations / megabase
has been reported for all general tumor types, in aggregate
(28420421).
The present sample analysis is also negative for high level
microsatellite instability.
A mutation in CDKN2A p.(Ala20Pro) was detected in this
patient X2019 s sample.

RIGHT.

**Extracted Data Table**
| Gene    | Mutation          | Classification |
| :------ | :---------------- | :------------- |
| TMB     | High level        | Detected       |
| MSI     | Not detected      | Negative       |
| CDKN2A  | p.(Ala20Pro)      | Detected       |
| EGFR    | Amplification     | Detected       |
| TP53    | p.(Ser127Phe)     | Detected       |
| BRCA2   | p.(Lys11339Asn)   | Unclear        |
| EGFR    | p.(Gly485Ser)     | Unclear        |
| NOTCH1  | p.(Asp809His)     | Unclear        |
| PMS2    | p.(Gly779Val)     | Unclear        |

Prompt Ryght to read the context and extract information
* Only need to specify what columns you want to structure to

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 7: Comparison of Approaches

Comparison of Approaches

RIGHT.

**Comparison of Approaches Table**
|                  | Traditional OCR                                                                                              | OCR + ML/NLP                                                                                                                                                                                                                                                                               | Ryght                                                                                                                                                                                                    |
| :--------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                  | Takes months to develop for a format                                                                         | 2+ weeks to develop format per report type                                                                                                                                                                                                                                                 | Robust pipelines that can work with any report format. **Rapid Iteration**                                                                                                                               |
|                  | Identifies text from reports, needs a lot of refinement and identification to reach relevant information       | Identifies entities, needs some traversal to identify relevant information, relationships – requires some domain knowledge, iteration                                                                                                                                                            | Identifies and structures data with minimal intervention – requires pre-processing, intelligent prompts, correct models at the onset (mission)                                                               |
|                  | All steps break if report format changes                                                                     | Traversal of entities break if report format changes                                                                                                                                                                                                                                       | Does not break if format changes - understands the context                                                                                                                                               |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 8: Examples

Examples

RIGHT.

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 9: Biomarker Cancer Report (complex image)

Biomarker Cancer Report (complex image)

RIGHT.

**Cancer Type Relevant Biomarkers - Table 1**
| Biomarker             | Method    | Analyte   | Result              |
| :-------------------- | :-------- | :-------- | :------------------ |
| MSI                   | Seq       | DNA-Tumor | Stable              |
| Mismatch Repair Status | IHC       | Protein   | Proficient          |
| NTRK1/2/3             | Seq       | RNA-Tumor | Fusion Not Detected |
| Tumor Mutational Burden | Seq       | DNA-Tumor | Low, 6 mut/Mb       |
| BRAF                  | Seq       | DNA-Tumor | Mutation Not Detected |
| ERBB2 (Her2/Neu)      | CNA-Seq   | DNA-Tumor | Amplification Not Detected |
| NRAS                  | Seq       | DNA-Tumor | Mutation Not Detected |
| PIK3CA                | Seq       | DNA-Tumor | Mutation Not Detected |
| PTEN                  | IHC       | Protein   | Positive | 1+, 100%    |

**OTHER FINDINGS (cont) (see below for additional results) - Table 2**
| Biomarker | Method    | Analyte   | Result                            |
| :-------- | :-------- | :-------- | :-------------------------------- |
| AMER1     | Seq       | DNA-Tumor | Pathogenic Variant Exon 2 p.Q460* |
| APC       | Seq       | DNA-Tumor | Pathogenic Variant Exon 16 | p.R1450* |
| ARID1A    | Seq       | DNA-Tumor | Pathogenic Variant Exon 7 p.Q74160 |
| ASXL1     | Seq       | DNA-Tumor | Pathogenic Exon 13 p.D           |
| SMAD2     | Seq       | DNA-Tumor | Pathogenic V Exon 11 | p.S      |

**OTHER FINDINGS (see below for additional results) - Table 3**
| Biomarker       | Method | Analyte | Result        |
| :-------------- | :----- | :------ | :------------ |
| PD-L1 (SP142)   | IHC    | Protein | Negative | 0% |

**Extracted Table**
| Biomarker              | Method    | Analyte   | Result                               |
| :--------------------- | :-------- | :-------- | :----------------------------------- |
| MSI                    | Seq       | DNA-Tumor | Stable                               |
| Mismatch Repair Status | IHC       | Protein   | Proficient                           |
| AMER1                  | Seq       | DNA-Tumor | Pathogenic Variant Exon 2 / p.Q460*  |
| NTRK1/2/3              | Seq       | RNA-Tumor | Fusion Not Detected                  |
| APC                    | Seq       | DNA-Tumor | Pathogenic Variant Exon 16 / p.R1450* |
| Tumor Mutational Burden | Seq       | DNA-Tumor | Low, 6 mut/Mb                        |
| ARID1A                 | Seq       | DNA-Tumor | Pathogenic Variant Exon 7 / p.Q761fs |
| BRAF                   | Seq CNA-Seq | DNA-Tumor | Mutation Not Detected                |
| ERBB2 (Her2/Neu)       | Seq CNA-Seq | DNA-Tumor | Amplification Not Detected           |
| ASXL1                  | Seq       | DNA-Tumor | Pathogenic Variant Exon 13 / p.D855fs |
| NRAS                   | Seq       | DNA-Tumor | Mutation Not Detected                |
| SMAD2                  | Seq       | DNA-Tumor | Pathogenic Variant Exon 11 / p.S464* |
| PIK3CA                 | Seq       | DNA-Tumor | Mutation Not Detected                |
| PTEN                   | IHC       | Protein   | Positive / 1+, 100%                  |
| PD-L1 (SP142)          | IHC       | Protein   | Negative / 0%                        |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 10: IHC Report Example (complex image, eval metrics)

IHC Report Example (complex image, eval metrics)

IMMUNOHISTOCHEMISTRY:
Sections were stained with a panel of antibodies utilizing appropriate
positive and negative controls.

**IHC Results Table**
| Antibody             | Result                                   |
| :------------------- | :--------------------------------------- |
| CK 18                | #2 positive                              |
| E-cadherin           | #2 positive                              |
| Smooth muscle myosin | #1 negative                              |
| Smooth muscle myosin | #2 positive around DCIS                  |
| ER                   | #2 positive                              |
| PR                   | #2 positive                              |
| Ki-67 nuclei         | #2 positive in about 12-15% of invasive tumor |
| HER-2                | #2 negative                              |

Note: As part of this evaluation, analyte specific reagents (ASRs) may
have been utilized. This test was developed and its performance

RIGHT.

**Extracted Table**
| Antibody             | Result                                   |
| :------------------- | :--------------------------------------- |
| CK 18                | #2 positive                              |
| E-cadherin           | #2 positive                              |
| Smooth muscle myosin | #1 negative                              |
| Smooth muscle myosin | #2 positive around DCIS                  |
| ER                   | #2 positive                              |
| PR                   | #2 positive                              |
| Ki-67                | #2 positive in about 12-15% of invasive tumor nuclei |
| HER-2                | #2 negative                              |

**Eval Metrics Table**
| Filename                 | Test Type                  | Current Score | Total Possible Score | Score Percentage | Reasonings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------------------- | :------------------------- | :------------ | :------------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Non_standard table format | Faithfulness (Athina)      | 1             | 1                    | 100              | The response accurately reflects the information provided in the context. Each antibody result listed in the response matches the corresponding result given in the context, including the specific details such as 'around DCIS' for Smooth muscle myosin and the percentage of invasive tumor nuclei for Ki-67.                                                                                                                                                                                                                                                                                                                                                                      |
| Non_standard table format | Context Contains Enough Information (Athina) | 1             | 1                    | 100              | The context provides all the necessary information to answer the user's query. It lists each antibody and the corresponding result, which can be formatted into a markdown table as requested. There is no need for previous knowledge to complete the task, as the user's instructions are clear and the context contains all the required data to be included in the table.                                                                                                                                                                                                                                                                                                         |
| Non_standard table format | Context Recall (Athina)    | 1             | 1                    | 100              | Context Recall metric is calculated by dividing the number of sentences in the ground truth that can be attributed to retrieved context by the total number of sentences in the grouund truth |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 11: Exeter Genetics Example (complex image, metrics with correction)

Exeter Genetics Example (complex image, metrics with correction)

UNIVERSITY OF MEDICAL EXETER SCHOOL
MOLECULAR GENETICS LABORATORY REPORT
Royal Devon & Exeter NHS Foundation Trust, Barrack Road, Exeter, EX2 5DW
Tel 01392 408229 Fax 01392 408388
www.diabetesgenes.org

**Patient Information Table**
| Patient Name:     |                     |
| :---------------- | :------------------ |
| Date of Birth:    | 03/09/2015          |
| Gender:           | Female              |
| Lab. No.:         | EX1515441 (External ID: 3) |
| Sample Received:  | 17/11/2015          |
| Sample Type:      | Whole Blood         |
| Our Ref. No.:     | MY12653LS           |
| Referred by:      | Dr P Sreeramaneni, Sreeramaneni Sumanth Krishna Endocrinology hospital & Gayathri Children's hospital, Vijayawada, India |
| Date of Report:   | 24/11/2015          |
| Reason for Request | GENETIC TESTING FOR NEONATAL DIABETES |

was diagnosed with diabetes at the age of 5 weeks. Sequence analysis of the
KCNJ11, ABCC8, INS and EIF2AK3 genes has been undertaken.

**Test methodology:**
Analysis of coding and flanking intronic regions of the KCNJ11 (NM_000525.3), INS
(NM_000207.2), ABCC8 (NM_001287174.1) and EIF2AK3 (AF110146.1) genes by Sanger
sequencing.

**Result Table**
| Result:            | Homozygous mutation identified |
| :----------------- | :----------------------------- |
| Mutation details:  | Gene: EIF2AK3                  |
|                    | Location: Exon 10              |
|                    | DNA Description: c.1760G>A     |
|                    | Protein Description: p.Arg587Gln (p.R587Q) |
|                    | Consequence: Missense          |

**Interpretation:**
is homozygous for the previously reported EIF2AK3 missense mutation, p.R587Q
(Delepine et al 2000 Nat Genet 25: 406). This mutation is predicted to be pathogenic and the result
confirms a genetic diagnosis of Wolcott Rallison syndrome.

This report depends upon, (I) - correct identification of all the samples, (II) - all biological relationships being correctly presented,
(III) - accurate diagnosis of the affected individual(s). Please note that this testing was undertaken as part of a research study.

Matthew Johnson
PhD Student

Alisa De Kano
Elisa De Franco
Post-Doctoral Research Associate

RIGHT.

Tuned Ryght Model: Extracted table

**Tuned Ryght Model: Extracted Table**
| Gene      | Mutation | Classification | Interpretation                                    |
| :-------- | :------- | :------------- | :------------------------------------------------ |
| CIT2AK3   | Exon 10  | c.1760G>A      | p.Arg587Gln (p.R587Q)                             |
|           |          |                | Homozygous mutation identified                    |
|           |          |                | Missense                                        |
|           |          |                | Confirms a genetic diagnosis of Wolcott Rallison syndrome |

Eval Metrics: Identified error and suggested correct biomarker EIF2AK3

**Eval Metrics Table**
| Test Type                   | Current Score | Total Possible Score | Score Percentage | Reasonings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :-------------------------- | :------------ | :------------------- | :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Faithfulness                | 0             | 1                    | 0                | The response contains several placeholders where specific information should be, but it is left blank (e.g., 'For Specimen:, Gene:, Mutation:, Classification:, Interpretation:.'). This indicates that the response is incomplete and does not accurately reflect the detailed information provided in the context. The context provides a complete set of information regarding the gene (EIF2AK3, incorrectly written as CIT2AK3 in the response), mutation details, and interpretation, which are not fully captured in the response. Additionally, the response incorrectly lists 'Exon 10' as the Mutation, when it should be the location of the mutation, and 'c.1760G>A' as the Classification, when it should be the DNA Description. The interpretation 'Confirms a genetic diagnosis of Wolcott Rallison syndrome.' is correct but is only one part of the information that should have been included in the response. |
| Context Contains Enough Information | 1             | 1                    | 100              | The context provides all the necessary information to fulfill the user's query. It includes the gene name (CIT2AK3, which seems to be a typographical error for EIF2AK3), the mutation (c.1760G>A), the protein description (p.Arg587Gln or p.R587Q), and the classification and interpretation of the mutation (homozygous, pathogenic, confirms a genetic diagnosis of Wolcott Rallison syndrome). The AI can use this information to create a markdown table with the specified columns: Specimen, Gene, Mutation, Classification, Interpretation. The context does not include a 'Specimen' column, but since the user did not provide specific details for this column, the AI can assume it refers to the patient or sample information provided in the context. Therefore, the AI has sufficient information to generate a response that includes the markdown table with the findings from the report, preceded by 'MDFORMATTEDTABLE' and followed by 'ENDMDFORMATTEDTABLE'.                                                                                                                                       |
| Context Recall              | 0.125         | 1                    | 12.5             | Context Recall metric is calculated by dividing the number of sentences in the ground truth that can be attributed to retrieved context by the total number of sentences in the grouund truth                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 12: Guardant360 Report (separate demographics from biomarkers)

Guardant360 Report (separate demographics from biomarkers)

Jones, Linda (A0123456)
Patient MRN: - | DOB: FEB-01-1956 | Gender: Female
Diagnosis: Colorectal adenocarcinoma | Test Number 1

GUARDANT360CDX
Therapy Finder Page

**REPORTING Table**
| REPORTING       | PHYSICIAN        |
| :-------------- | :--------------- |
| Report Date:    | JUL-27-2020      | John Miller      |
| Receipt Date:   | JUL-18-2020      | Account: Pleasantville Oncology |
| Collection Date: | JUL-17-2020      | Address: 1234 Main Street Redwood City, CA 94063, United States |
| Specimen:       | Blood            | Ph: (123) 456-7890 | Fax: (123) 456-7899 |
| Status:         | FINAL            | Additional Recipient: N/A |

Complete Tumor Response Map on page 2

This content is provided as a professional service and has not been reviewed or approved by the FDA

Summary of Somatic Alterations & Associated Treatment Options
KEY: Approved in indication Approved in other indication Lack of response

**Summary of Somatic Alterations & Associated Treatment Options Table**
| Detected Alteration(s) / Biomarker(s) | Associated FDA-approved therapies          | Clinical trial availability (see page 4) | % cfDNA or Amplification |
| :---------------------------------- | :--------------------------------------- | :--------------------------------------- | :----------------------- |
| MSI-High                            | Pembrolizumab, Nivolumab                 | Yes                                      |                          |
| BRAF V600E                          | Cetuximab, Encorafenib, Panitumumab Binimetinib, Cobimetinib, Trametinib, Vemurafenib | Yes                                      | 19.8%                    |
| PIK3CA E545A                        | Alpelisib, Copanlisib                    | Yes                                      | 4.2%                     |
| CDKN2A R58*                         | Abemaciclib, Palbociclib, Ribociclib     | Yes                                      | 4.0%                     |

Variants of Uncertain Significance
KIT C443fs (Exon 8 insertion) (7.2%), APC H768R (6.7%), CDK12 L1033P (6.5%), NOTCH1 V2319A (5.3%)

RIGHT.

Extracted demographics

**Extracted Demographics Table**
| Patient Name | Patient ID (MRN) | Gender | Physician Address | Physician Name | Specimen Collection Date |
| :----------- | :--------------- | :----- | :---------------- | :------------- | :----------------------- |
| Linda Jones  | A0123456         | Female | 1234 Main Street  | John Miller    | JUL-17-2020              |

Extracted table

**Extracted Table**
| Alteration    | Approved Treatments                                                      | Clinical Trial Availability | Percentage cfDNA |
| :------------ | :----------------------------------------------------------------------- | :-------------------------- | :--------------- |
| MSI-High      | Pembrolizumab, Nivolumab                                                 | Yes                         |                  |
| BRAF V600E    | Cetuximab, Encorafenib, Panitumumab Binimetinib, Trametinib, Cobimetinib, Vemurafenib | Yes                         | 19.8%            |
| PIK3CA E545A  | Alpelisib, Copanlisib                                                    | Yes                         | 4.2%             |
| CDKN2A R58*   | Abemaciclib, Palbociclib, Ribociclib                                     | Yes                         | 4.0%             |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 13: Cardio IQ (complex table)

Cardio IQ (complex table)

Quest Diagnostics

**Patient Information**
| Patient Information |            |                 |
| :------------------ | :--------- | :-------------- |
| DOB:                | AGE: 52    |                 |
| Gender:             | NG         |                 |
| Phone:              | NG         |                 |
| Patient ID:         | NG         |                 |
| Health ID:          | 8573009480889519 |                 |
| COMMENTS:           | FASTING: YES |                 |

**Specimen Information**
| Specimen Information |
| :------------------- |
| Specimen:            |
| Requisition:         |
| Collected:           | 11/30/2016                   |
| Received:            | 12/01/2016/ 01:54 CST        |
| Reported:            | 12/03/2016 / 12:54 CST       |

**Client Information**
| Client Information |
| :----------------- |
| Client #: 73912105 | MAIL992 |
| INOUT LABS         | 6449 DEMPSTER ST MORTON GROVE, IL 60053-2604 |

RIGHT.

Report Status: Final

Cardio IQ®

**Result from Test Name, Units, Result and Risk Category Table**
| Test Name               | Units  | Result | Risk Category Ranges Optimal | Moderate | High |
| :---------------------- | :----- | :----- | :--------------------------- | :------- | :--- |
| **Lipid Panel**         |        |        | Lab: EZ                      |          |      |
| CHOLESTEROL, TOTAL      | mg/dL  | 173    | <200                         | 200-239  | >=240 |
| HDL CHOLESTEROL         | mg/dL  | 49     | >=40                         | N/A      | <40  |
| TRIGLYCERIDES           | mg/dL  | 54     | <150                         | 150-199  | >=200 |
| LDL-CHOLESTEROL         | mg/dL  | 113    | <100                         | 100-129  | >129 |
| CHOL/HDLC RATIO         | calc   | 3.5    | <=3.5                        | 3.6-5.0  | >5.0 |
| NON-HDL CHOLESTEROL     | mg/dL  | 124    | <130                         | 130-159  | >159 |
| **Lipoprotein Subfractions** |        |        | Lab: EZ                      |          |      |
| LDL PARTICLE NUMBER     | nmol/L | 1817   | <1260                        | 1260-1538 | >1538 |
| LDL SMALL               | nmol/L | 230    | <162                         | 162-217  | >217 |
| LDL MEDIUM              | nmol/L | 351    | <201                         | 201-271  | >271 |
| HDL LARGE               | nmol/L | 6014   | >9386                        | 6996-9386 | <6996 |
| **Apolipoproteins**     |        |        | Lab: EZ                      |          |      |
| APOLIPOPROTEIN B        | mg/dL  | 108    | <80                          | 80-119   | >=120 |
| LIPOPROTEIN (a)         | nmol/L | <10    | <75                          | 75-125   | >125 |

For details on reference ranges please refer to the reference range/comment section of the report.

**4myheart Diet & Exercise Coaching Program:** Need help achieving and maintaining an optimal weight? Managing stress? Trying to improve
physical fitness levels? The 4myheart program provides support and personalized lifestyle guidance to help improve heart health. Please talk to
your provider, visit 4myheart.com or call 1-800-432-7889 opt 2 to learn more.

**Medical Information For Healthcare Providers:** If you have any questions about any of the tests in our Cardio IQ offering, please call
1-800-432-7889 opt 3 to speak to a clinical liaison. For frequently asked questions, you can also visit us at
http://education.questdiagnostics.com/faq/FAQ134

Extracted demographics

**Extracted Demographics Table**
| Patient Name | Patient ID (MRN) | Gender | Physician Address | Physician Name | Specimen Collection Date |
| :----------- | :--------------- | :----- | :---------------- | :------------- | :----------------------- |
| NG           | 8573009480889519 |        | 6449 DEMPSTER ST  | INOUT LABS     | 11/30/2016               |

Extracted table

**Extracted Table**
| Test                    | Units  | Result | Risk Category Ranges - Optimal | Risk Category Ranges - Moderate | Risk Category Ranges - High |
| :---------------------- | :----- | :----- | :----------------------------- | :------------------------------ | :-------------------------- |
| CHOLESTEROL, TOTAL      | mg/dl  | 173    | <200                           | 200-239                         | >=240                       |
| HDL CHOLESTEROL         | mg/dL  | 49     | >=40                           | N/A                             | <40                         |
| TRIGLYCERIDES           | mg/dl  | 54     | <150                           | 150-199                         | >=200                       |
| LDL-CHOLESTEROL         | mg/dl  | 113    | <100                           | 100-129                         | >129                        |
| CHOL/HDLC RATIO         | calc   | 3.5    | <= 3.5                         | 3.6-5.0                         | >5.0                        |
| NON-HDL CHOLESTEROL     | mg/dL  | 124    | <130                           | 130-159                         | >159                        |
| LDL PARTICLE NUMBER     | nmol/L | 1817   | <1260                          | 1260-1538                       | >1538                       |
| LDL SMALL               | nmol/L | 230    | <162                           | 162-217                         | >217                        |
| LDL MEDIUM              | nmol/L | 351    | <201                           | 201-271                         | >271                        |
| HDL LARGE               | nmol/L | 6014   | >9386                          | 6996-9386                       | <6996                       |
| APOLIPOPROTEIN B        | mg/dl  | 108    | <80                            | 80-119                          | >=120                       |
| LIPOPROTEIN (a)         | nmol/L | <10    | <75                            | 75-125                          | >125                        |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 14: Demo

Demo

RIGHT.

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 15: Monitor missions

Monitor missions

S Missions
Sources
Destinations
! Alerts

**Missions Table**
| NAME                           | DESCRIPTION                                                                                              | STATE      | SCHEDULE | UPDATED                | ENABLED |
| :----------------------------- | :------------------------------------------------------------------------------------------------------- | :--------- | :------- | :--------------------- | :------ |
| receipt-extraction-demo        | Pipeline job to demo receipt data extraction                                                             | completed  | monthly  | 2024-03-09T00:31:12.873417 | (toggle) |
| fhir_biomarker_extraction      | pull out biomarkers in fhir json                                                                         | completed  | weekly   | 2024-03-11T17:59:44.068780 | (toggle) |
| ont_all_biomarker_extraction   | pull out any general biomarkers from genetic findings to listed analytes mentioned across a broad set of images and pdf files. | completed  | weekly   | 2024-03-04T06:15:35.691542 | (toggle) |
| ont_general_biomarker_extraction | pull out any general biomarkers from genetic findings to listed analytes mentioned across a broad set of images and pdf files. | completed  | weekly   | 2024-03-04T04:45:36.433139 | (toggle) |
| genomic_lab_reports            | collection of genomic lab results nested in comments sections                                            | completed  | weekly   | 2024-03-04T04:45:36.433139 | (toggle) |
| ont_general_report_extraction  | operationalize a set of unstructured images and pdfs for Q & A                                           | completed  | weekly   | 2024-03-04T04:16:13.423189 | (toggle) |

RIGHT.

Create New Mission

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 16: Establish connectors

Establish connectors

S Missions
Sources
Destinations
! Alerts

**Sources Table**
| NAME                        | DESCRIPTION | TYPE         | LOCATION |
| :-------------------------- | :---------- | :----------- | :------- |
| all                         |             | google drive |          |
| biomarker_table             |             | google drive |          |
| derm reports                |             | google drive |          |
| faxed_reports               |             | google drive |          |
| breast reports              |             | google drive | View     |
| urology reports             |             | google drive |          |
| scanned_notes               |             | aws s3       |          |
| ont_reports                 |             | google drive | View     |
| genetic_reports             |             | snowflake    |          |
| fhir                        |             | google drive |          |
| small-receipt-image-dataset-SRD |             | google drive | View     |

RIGHT.

**Create New Connection - Form Fields**
| Field         | Type Selection (Dropdown)       |
| :------------ | :------------------------------ |
| Name          |                                 |
| Type          | Select: Google Drive, Ryght Vectorstore, AWS S3, Snowflake, Databricks, Postgres |
| Is Destination | (Checkbox)                      |
| Location      |                                 |
| Host          |                                 |
| Port          |                                 |
| Username      |                                 |
| Password      |                                 |
| Account       |                                 |
| Warehouse     |                                 |
| Role          |                                 |
| Schema        |                                 |
| SQL Query     |                                 |

Create New Connector
Save Connection

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 17: Create a mission to execute

Create a mission to execute

* Select cadence
  * How often to execute job
* Set extraction strategy
  * Determine what data elements to extract
  * Give context for extraction
* Select cost strategy
  * QC / Enhancement knobs
* Choose source & destination

RIGHT.

**Mission Configuration Interface**

| Field        | Input           |
| :----------- | :-------------- |
| Name         | (text input)    |
| Schedule     | Daily (dropdown) |
| Description  | (text area)     |

**Objectives**

Content Strategy
* Lift & Shift (radio button)
* Summarization (radio button)
* Entities & Relationships (radio button)

Cost Strategy
Low [slider] Medium [slider] High

**Extract**
* Text (checkbox)
* Tables (checkbox)
* Charts & Graphs (checkbox)
* Image Summary (checkbox)

**Sources:**

**Sources Table**
| NAME            | TYPE         | LINK |
| :-------------- | :----------- | :--- |
| all             | google drive |      |
| biomarker_table | google drive |      |
| derm reports    | google drive |      |
| faxed_reports   | google drive |      |

**Destinations:**

**Destinations Table**
| NAME                           | TYPE            |
| :----------------------------- | :-------------- |
| general_biomarker_warehouse    | databricks      |
| all                            | ryght vector_store |
| fax_report_collection          | ryght vector_store |
| ont_report_qa_collection       | ryght vector_store |
| variant_warehouse              | databricks      |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 18: Content Strategies

Content Strategies

RIGHT.

**Content Strategy 1**
| Extract |
| :------ |
| Lift & Shift (radio button, selected) | Summarization (radio button) | Entities & Relationships (radio button) |
| Text (checkbox) | Tables (checkbox) | Charts & Graphs (checkbox) | Image Summary (checkbox) |

**Content Strategy 2**
|                                  |
| :------------------------------- |
| Lift & Shift (radio button)      | Summarization (radio button, selected) | Entities & Relationships (radio button) |
| **Common Summaries**             |
| ✓ Summarize using patient language |
| Characterize any mentioned diagnosis |
| Highlight and summarize any treatment plans |
| Custom                           |

**Content Strategy 3**
|                                  |
| :------------------------------- |
| Lift & Shift (radio button)      | Summarization (radio button) | Entities & Relationships (radio button, selected) |
| General Biomarkers & Result      |
| Medical Coding (ICD, LOINC, SNOMED, etc.) |
| Demographics                     |
| Genetic Biomarkers, Variants & Results |
| ✓ Custom                         |
| **Prompt Hints**                 |
| Make note if a variant has been detected for each gene listed. Please include any genes regardless of whether a variant was detected. |
| **Columns**                      |
| [gene, variant_detected, comments] |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 19: Cost Strategies

Cost Strategies
Options to tune OCR models,
QC metrics Entity Enrichment

RIGHT.

**Cost Strategy 1 (Slider)**
Low [slider] Medium [slider] High

**Cost Strategy 2 (Slider & Toggles)**
Low [slider] Medium [slider] High

| OCR Type |      | QC Metrics |          |
| :------- | :--- | :--------- | :------- |
| Basic    | (toggle) Enhanced | Faithfulness | (toggle) |

**Cost Strategy 3 (Slider & Toggles)**
Low [slider] Medium [slider] High

| OCR Type |      | QC Metrics |             |
| :------- | :--- | :--------- | :---------- |
| Basic    | (toggle) Enhanced | Faithfulness | (toggle)    |
| T-RAG    |      | Likeness   | (toggle)    |
| Off      | (toggle) On | Threshold  | >= 75% (dropdown) |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 20: Execution Detail

Execution Detail

completed
Mission Detail 8

**Mission Details**
| Field         | Value                                                         |
| :------------ | :------------------------------------------------------------ |
| Name:         | ont_general_biomarker_extraction                              |
| Description:  | pull out any general biomarkers from genetic findings to listed analytes mentioned across a broad set of images and pdf files. |
| Schedule:     | weekly                                                        |
| Last Updated: | 2024-03-04T04:45:36.433139                                    |

**Details**

**Sources Table**
| NAME        | TYPE         | LINK |
| :---------- | :----------- | :--- |
| ont_reports | google drive | View |

**Destinations Table**
| NAME                       | TYPE       | LINK |
| :------------------------- | :--------- | :--- |
| general_biomarker_warehouse | databricks | View |

**Content Strategy**
* Lift & Shift (radio button)
* Summarization (radio button)
* Entities & Relationships (radio button, selected)

**Cost Strategy**
Low [slider] Medium [slider] High

**Ryght Validated**
* General Biomarkers & Result (checkbox)

**OCR Type**
* Basic (radio button)
* Enhanced (radio button)

**QC Metrics**
* Faithfulness (checkbox)

**QC Metrics**
* Faithfulness 0.91
* Context Recall 13
* Context Contains Enough Info 12

RIGHT.

**Logs**

**Log Entry 1 (3:14:31.841 PM convert_pdf_to_text INFO)**
Name: Test Patient DOB: 01/02/1234 Gender: Male MRN: TEST123456 Disease Type: Colorectal Cancer Diagnosis: Metastatic adenocarcinoma Type: Lymph node, 1
08/22/2016 Block ID: Test-1234 Institution: Test Account Refercing Phucici
Test Case Final Reviewer: Kristen Champion, PhD, FACMG Genomic Analyst
Response to Drug Based on Biomarkers (Source) Related Bid
pathology report Cardio-IQ-Test-Result.jpg: Tables in the document include:
11/30/2016
Received: 12/01/2016 / 01:54 CST
Reported: 12/03/2016 / 12:54 CST

**Log Entry 2 (3:14:42.855 PM convert_pdf_to_text INFO)**
Test Name Units Result and Risk Category Result from Risk Category Ranges
Optimal Moderate High Optimal Moderate High
Lipid Panel
Lab: EZ
CHOLESTEROL, TOTAL mg/dl
173
<200 200-239 >=240
HDL CHOLESTEROL mg/dL 49
>=40 N/A <40
TRIGLYCERIDES mg/dl 54
<150 150-199 >=200

**Log Entry 3 (3:14:48.246 PM convert_pdf_to_text INFO)**
pathology report F1CDx_Technical_Specifications.pdf: Tables in the document include:
Table 1: Companion diagnostic indications
BIOMARKERS FDA-APPROVED THERAPY
Non-Small Cell Lung Cancer (NSCLC) EGFR exon 19 deletions and EGFR exon 21 L858R alterations EGFR Tyrosine Kinase Inhibitors (TKI) approved by FDA*
EGFR exon 20 T790M alterations Tagrisso (osimertinib)
ALK rearrangements Alecensae (alectinib), Alunbrige (brigatinib), Xalkori® (crizotinib), or Zykadia® (ceritinib)
BRAF V600E Tafinlare (dabrafenib) in combination with Mekiniste (trametinib)
MET single nucleotide variants (SNVs) and indels that lead to MET exon 14 skipping Tabrectae (capmatinib)
Melanoma BRAF V600E BRAF Inhibitors approved by FDA*
BRAF V600E or V600K Mekiniste (trametinib) or BRAF/MEK Inhibito
approved by FDA*
/L, H1047R, and H1047Y alterations Piqraye (alpelisib)
Breast Cancer ERBB2 (HER2) amplification Herceptine (tr View full message trastuzumab-emtansine), or Perjetas (pertuzumab)
PIK3CA C420R, E542K, E545A, E5450 [1635G>T only], E545G, E
pathology report Molecular-genetics-laboratory-report.png: Tables in the document include:
Date of Birth: 03/09/2015
Gender. Female
Lab. No: EX1515441 (External ID: 3)
Sample Received: 17/11/2015
Sample Type: Whole Blood

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 21: Output

Output

**Conversations**
Search bar with placeholder "what is this patients hormone status?".
Checkbox list of recent queries:
* what is the tmb in this report
* rewrite this sentance: One ap...
* what is this patients hormon...
* what is the tmb in this report
* ✓ what is this patients hormon...
* what is the tmb in this report

RIGHT.

**Question:** what is this patients hormone status?

**Answer:**
Based on the provided information, this patient's hormone status can be determined as follows:

Estrogen Receptor (ER): The interpretation for the ER test is positive, with an intensity of 2-3+. The percentage of tumor staining for ER is 90%, and the notes indicate a favorable result.

Progesterone Receptor (PR): The interpretation for the PR test is positive, with an intensity of 2-3+. The percentage of tumor staining for PR is 100%, and the notes indicate a favorable result.

HER-2/Neu HercepTest: The interpretation for the HER-2/Neu HercepTest is negative, with an intensity of 1+. The percentage of tumor staining for HER-2/Neu is 40%, and the notes indicate a favorable result.

Based on these results, the patient's hormone status can be classified as ER-positive, PR-positive, and HER-2/Neu-negative. This information is crucial for determining appropriate treatment options and guiding further management decisions.

**Source:** My collection, or_Breast-IHC-report-sample.pdf

**Databricks Interface:**
Side panel with Compute, SQL, SQL Editor, Queries, Dashboards, Alerts, Query History, SQL Warehouses, Data Engineering, Job Runs, Data Ingestion, Delta Live Tables, Machine Learning, Playground, Experiments, Features, Models, Serving.

**Main display area:**
Visualization - genes_sequenced (bar chart)
X-axis: Gene Name (BCORL1, ATRX, BRCA2, CBL, ERBB4, EP300, DDR2, CHEK1, CD79B, CD19, EZH2, MYC, MRE11A, MAP2K1, KMT2A, IDH1, FOXA1, FBXW7, NF1, SMC3, SETBP1, ROS1, RAD54L, RAD51, PTEN, PMS2, PDGFRB, NRAS, STAT5B, XPO1, TNFRSF14, TERT).
Y-axis: Result Count.
The bar chart shows varying result counts for different gene names, with some having higher counts than others.

**Panels (Pie Charts)**
* **Panel 1: panel_name**
  * Heme Gene Panel by NGS: 63.24%
  * OnkoSight Advanced Breast Cancer NGS Pane: 10.95%
  * OnkoSight Advanced Lung Cancer NGS Panel: 25.82%
* **Panel 2: patient_gender**
  * Female: 58.50%
  * Male: 41.50%

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 22: Architecture

Architecture

RIGHT.

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 23: Data Pipeline

Data Pipeline

Pipeline Control Interface
* Ryght Logo
* User Icon
* API Icon

**Mission Control Pipeline**
Content Extraction (Text, Tables, Images) -> Quality Handling (Quality Check, Classify, PHI) -> Plan Execution (Mission 1, Mission 2, Mission 3) -> Output Routing (Converted Docs, CSV, Knowledge Graph)

**Feedback Loop:** From Quality Handling (Evaluation: Metric A, Metric B, Metric C) back to Content Extraction.

**External Connections:**
* From Pipeline Control Interface (Printer Icon, PDF Icon, Image Icon, Database Icon) to Content Extraction (Connectors).
* From Output Routing (Converted Docs, CSV, Knowledge Graph) to External Datawarehouse (Connectors).
* Ryght vector store also connects to External Datawarehouse.

**Ryght Domain / Platform APIs** (bottom bar)

**Copilot**
* Ryght Logo
* User Icon
* API Icon

**SDK / API**
* SDK Icon
* API Icon

**Q & A Icon**
miro
API

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 24: Platform architecture

Platform architecture
API-driven

* Pre-built and custom copilots leverage our APIs to provide solutions for end-users.
* Enterprise data sources are securely connected via APIs.
* Orchestrate across best-in-class LLMs and AI models.
* Ryght maintains and curates the platform.

Azure
Google Cloud
aws

RIGHT.

**Platform Architecture Diagram**

**End User Interface** -> **Domain API Hub** -> **Platform API Hub** -> **Orchestrator**
**Developer Interface** -> **Domain API Hub** -> **Platform API Hub** -> **Orchestrator**

**AuthN** (Authentication) connects to **Platform API Hub**.

**Conversation Manager** connects to **Orchestrator**.

**Orchestrator** connects to:
* **Collection Services**
* **Reasoning Services**
* **AI Models**
* **Agents**
* **Prompt Engine**
* **Vectorization Service**
* **Inference Service**

**Collection Services** connects to:
* **Biomedical Collections** (PubMed, Clinicaltrials.gov)
* **User Collections** (My Research, Documentation, Datasets)

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 25: RESTful API structure

RESTful API structure

RIGHT.

**Document management APIs**
/v3/api-docs
1.0 OAS 3.0
This API exposes endpoints to manage documents.

**Servers**
`https://registry-api-dev.syntheticabio.net` - Generated server url
Authorize

**Tag** Tag APIs
* Conversations (Conversation API)
* Document collection (Document collection APIs)
* Chunk (Chunk APIs)
  * Chunk specification (Chunk specification APIs)
    * `GET /v1/chunk-specifications` Find all chunk specification.
    * `PUT /v1/chunk-specifications` Update chunk specification by id.
    * `POST /v1/chunk-specifications` Create chunk specification.
    * `GET /v1/chunk-specifications/{id}` Find chunk specification by id.
    * `DELETE /v1/chunk-specifications/{id}` Delete chunk specification by id.
  * Document (Document APIs)
    * `GET /v1/chunk-specifications/strategies` Find all chunk specification strategies.
* Prompt Templates (Prompt)
  * Model specification (Model specification APIs)
    * `GET /v1/models` Find all models.
    * `GET /v1/models/{id}` Find model by id.
    * `GET /v1/models/operation` Find models by operation type.
* Completions (Completion APIs)

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 26: Appendix

Appendix

R GHT.

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 27: Without Ryght Data Pipeline Orchestration

Without Ryght Data Pipeline Orchestration RIGHT.

UNIVERSITY OF MEDICAL EXETER SCHOOL
MOLECULAR GENETICS LABORATORY REPORT
Royal Devon & Exeter NHS Foundation Trust, Barrack Road, Exeter, EX2 5DW
Tel 01392 408229 Fax 01392 408388
www.diabetesgenes.org

**Patient Information Table**
| Patient Name:     |                     |
| :---------------- | :------------------ |
| Date of Birth:    | 03/09/2015          |
| Gender:           | Female              |
| Lab. No.:         | EX1515441 (External ID: 3) |
| Sample Received:  | 17/11/2015          |
| Sample Type:      | Whole Blood         |
| Our Ref. No.:     | MY12653LS           |
| Referred by:      | Dr P Sreeramaneni, Sreeramaneni Sumanth Krishna Endocrinology hospital & Gayathri Children's hospital, Vijayawada, India |
| Date of Report:   | 24/11/2015          |
| Reason for Request | GENETIC TESTING FOR NEONATAL DIABETES |

was diagnosed with diabetes at the age of 5 weeks. Sequence analysis of the
KCNJ11, ABCC8, INS and EIF2AK3 genes has been undertaken.

**Test methodology:**
Analysis of coding and flanking intronic regions of the KCNJ11 (NM_000525.3), INS
(NM_000207.2), ABCC8 (NM_001287174.1) and EIF2AK3 (AF110146.1) genes by Sanger
sequencing.

**Result Table**
| Result:            | Homozygous mutation identified |
| :----------------- | :----------------------------- |
| Mutation details:  | Gene: EIF2AK3                  |
|                    | Location: Exon 10              |
|                    | DNA Description: c.1760G>A     |
|                    | Protein Description: p.Arg587Gln (p.R587Q) |
|                    | Consequence: Missense          |

**Interpretation:**
is homozygous for the previously reported EIF2AK3 missense mutation, p.R587Q
(Delepine et al 2000 Nat Genet 25: 406). This mutation is predicted to be pathogenic and the result
confirms a genetic diagnosis of Wolcott Rallison syndrome.

This report depends upon, (I) - correct identification of all the samples, (II) - all biological relationships being correctly presented,
(III) - accurate diagnosis of the affected individual(s). Please note that this testing was undertaken as part of a research study.

Matthew Johnson
PhD Student

Alise De Kano
Elisa De Franco
Post-Doctoral Research Associate

Without Ryght Orchestration
A acsornies ai y i —
Maithew Johnson PHD Student

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 28: Guardant360 Tumor Response Map

Guardant360 Tumor Response Map

RIGHT.

Guardant360 Tumor Response Map
The Guardant360 Tumor Response Map illustrates the variant allele fraction (% cfDNA) of observed somatic variants at each sample submission time point.
Amplifications are not plotted, and only the first and last five test dates are plotted. Please see the Physician Portal (portal.guardanthealth.com) for the Tumor
Response Map with all test dates.

**Highest Variant Allele Fraction**
A bar chart showing allele fraction for JUL-20-2020. Highest Variant Allele Fraction is 5.8%.

**Alteration Table**
| Alteration  | % cfDNA or Amp |
| :---------- | :------------- |
| NTRK1 P311R | 5.8%           |
| KRAS Q61H   | 3.7%           |
| CCNE1 L139F | 1.0%           |
| EGFR S306S  | 0.2%           |

Extracted table

**Extracted Table**
| Alteration  | Percentage cfDNA | Notes                             |
| :---------- | :--------------- | :-------------------------------- |
| NTRK1 P311R | 5.8%             | Variant of Uncertain Significance |
| KRAS Q61H   | 3.7%             | -                                 |
| CCNE1 L139F | 1.0%             | Variant of Uncertain Significance |
| EGFR S306S  | 0.2%             | Synonymous Alteration             |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 29: Breast Cancer Prognostic Marker Report

Breast Cancer Prognostic Marker Report

DIAGNOSTIC PATHOLOGY MEDICAL GROUP, INC.
BREAST CANCER PROGNOSTIC MARKER REPORT
IHC Laboratory Director: Cynthia Gasper, M.D.
3301 C Street Ste 200E Sacramento, CA 95816
(916) 446-0424 Fax: (916) 446-9330
www.dpmginc.com

**Patient Information**
| Patient:     | TEST, PATIENT | Pathology #: IHC-16-01234 |
| :----------- | :------------ | :------------------------ |
| Age:         | 68 (01/01/47) |                           |
| Sex:         | FEMALE        |                           |
| Acct#:       |               |                           |
| Doctor:      | Test Doctor   | Date Obtained: 03/23/2016 |
|              | 1234 Test st  | Date Received: 03/23/2016 |
| CC:          |               | 3161L                     |
| SPECIMEN:    | BREAST TUMOR PROFILE (ER, PR & HER-2NEU) - DPS-16-05694 |
|              | Immunohistochemistry Evaluation |           |

**Immunohistochemistry Evaluation Table**
| Test                    | Interpretation | Intensity | % Tumor Staining | Comment   |
| :---------------------- | :------------- | :-------- | :--------------- | :-------- |
| Estrogen Receptor       | Positive       | 2-3+      | 90               | Favorable |
| Progesterone Receptor   | Positive       | 2-3+      | 100              | Favorable |
| HER-2/Neu HercepTest    | Negative       | 1+        | 40               | Favorable |

**Grading Notes:**
*Grading: Immunohistochemical reactivity/intensity for ER/PR is graded 0-3+. 0 is no staining. 1+ is weak staining intensity. 2+ is moderate staining
intensity. 3+ is strong staining intensity. Nuclear staining in less than 1% of tumor cells is scored as negative.
Immunohistochemical reactivity for Her-2/Neu is graded positive for Her-2/Neu (overexpression) is 3+ staining defined as uniform intense
uninterrupted membrane staining of > 10% of invasive tumor cells.
Equivocal or indeterminate for Her-2/Neu is 2+ staining defined as weak to moderate uninterrupted membrane staining in at least 10% of invasive
tumor cells or 3+ staining in < 10% of invasive tumor cells. All equivocal staining cases are reflexed for FISH analysis.
Negative for Her-2/Neu is 0 or 1+ staining defined as either no staining or weak incomplete membrane staining in any proportion of invasive tumor
cells.

RIGHT.

Extracted table

**Extracted Table**
| Test                    | Interpretation | Intensity | Percentage Tumor Staining | Notes     |
| :---------------------- | :------------- | :-------- | :------------------------ | :-------- |
| Estrogen Receptor       | Positive       | 2-3+      | 90                        | Favorable |
| Progesterone Receptor   | Positive       | 2-3+      | 100                       | Favorable |
| HER-2/Neu HercepTest    | Negative       | 1+        | 40                        | Favorable |

Metrics

**Metrics Table**
| Test Type                     | Current Score | Total Possible Score | Score Percentage | Reasonings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------------- | :------------ | :------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Faithfulness (Athina)         | 1             | 1                    | 100              | The response can be inferred using ONLY the information provided in the context. The context provides the results of the immunohistochemistry evaluation for a patient, including the tests for HER-2/Neu, Estrogen Receptor, and Progesterone Receptor. The response accurately reflects the information given in the context: HER-2/Neu HercepTest is Negative with 1+ intensity and 40% tumor staining, Estrogen Receptor is Positive with 2-3+ intensity and 90% tumor staining, and Progesterone Receptor is Positive with 2-3+ intensity and 100% tumor staining. All comments are noted as 'Favorable'. Therefore, the response is a correct interpretation of the provided context. |
| Context Contains Enough Information (Athina) | 1             | 1                    | 100              | The context provides the necessary information to answer the user's query. It contains a detailed report with the required columns: Test, Interpretation, Intensity, Percentage Tumor Staining, and Notes (Comment in the context). The AI can extract the relevant data from the provided tables and text to format it into a markdown table as instructed, including the specified pre- and post-table text.                                                                                                                                                                                                                                                                                                                                                           |
| Context Recall (Athina)       | 1             | 1                    | 100              | Context Recall metric is calculated by dividing the number of sentences in the ground truth that can be attributed to retrieved context by the total number of sentences in the grouund truth                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 30: EGFR 19 Deletion Report

EGFR 19 Deletion Report

**SPECIMEN(S) RECEIVED**
| SPECIMEN(S) RECEIVED                             | TEST PERFORMED                                      |
| :----------------------------------------------- | :-------------------------------------------------- |
| Formalin-fixed paraffin-embedded tissue, right lung, EGFR mutation | Roche cobas® EGFR Mutation Test v2 on A12-3456-7B |

**FINAL DIAGNOSIS**
| RESULTS            | Exon 19 deletion detected |
| :----------------- | :------------------------ |
| INTERPRETATION     | Deletions in EGFR exon 19 are associated with increased responsiveness to tyrosine kinase inhibitors. (Lynch TJ et al. N Engl J Med. 2004;350(21):2129-2139.) |
| COMMENT            | Formalin fixed paraffin embedded tissue was received and tumor regions were identified and selectively dissected. Following tumor enrichment, DNA was isolated using standard laboratory procedures. Multiplex real-time PCR was utilized to amplify regions of exon 18-21 within the EGFR gene. Following amplification, a set of 32 specific primers and probes was used to specifically detect normal and mutant sequences at 42 targets within this area of the EGFR gene. As with any laboratory testing, there is the possibility of false negative or false positive results. However, extensive quality control and quality assurance programs are in place in this laboratory in an effort to ensure proper diagnoses. Please contact us if we can provide additional information regarding the molecular analysis. (CPT G0452) |

RIGHT.

Extracted summary

This report provides the results of a molecular pathology test performed on a patient named John Doe. The test was conducted on a formalin-fixed paraffin-embedded tissue sample from the right lung to detect EGFR mutations. The specific mutation identified in this case is an exon 19 deletion, which is associated with increased responsiveness to tyrosine kinase inhibitors. The report includes the patient's personal information, such as medical record number, date of birth, and gender. It also provides details about the test, including the date it was performed, the location, and the physician who ordered it. The report mentions that the DNA was isolated using standard laboratory procedures and that a multiplex real-time PCR was used to amplify regions of the EGFR gene. The report concludes with a comment stating that there is a possibility of false negative or false positive results, but the laboratory has quality control and quality assurance programs in place to ensure accurate diagnoses. The researcher is advised to contact the laboratory for additional information about the molecular analysis.

Extracted demographics

**Extracted Demographics Table**
| Patient Name | Patient ID (MRN) | Gender | Physician Address | Physician Name | Specimen Collection Date |
| :----------- | :--------------- | :----- | :---------------- | :------------- | :----------------------- |
| John Doe     | 1234567          | M      |                   | JANE SMITH     | 11/9/2016                |

Extracted table

**Extracted Table**
| Specimen                                                                     | Gene  | Mutation     | Classification | Interpretation                                                                                                    |
| :--------------------------------------------------------------------------- | :---- | :----------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| Formalin-fixed paraffin-embedded tissue, Roche cobas® EGFR Mutation Test v2 right lung, EGFR mutation on A12-3456-7B | EGFR  | Exon 19 deletion | Detected       | Deletions in EGFR exon 19 are associated with increased responsiveness to tyrosine kinase inhibitors. (Lynch TJ et al. N Engl J Med. 2004;350(21):2129-2139.) |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 31: KRAS Mutation Report

KRAS Mutation Report

RIGHT.

**Molecular Pathology Report**
Accession Number: MO11-1234

**KRAS MUTATION ANALYSIS**

**SPECIMEN:**
Paraffin sections labeled AB11-12345 A1 are received from Pathology Laboratory, with an
original collection date of 11/2/2011 and a reported diagnosis of colorectal adenocarcinoma.

**RESULT:**
Positive for c.34 G>T [p.Gly12Cys] mutation in codon 12 of the KRAS gene
Gene nomenclature: KRAS NM_4985.3: c. 34G>T [p.Gly12Cys])

**INTERPRETATION:**
Presence of an activating KRAS mutation in this patient's tumor diminishes the likelihood of
response to anti-EGFR chemotherapy. (www.nccn.org; Reference: PMID: 19386128)

**METHOD:**
Following tumor cell enrichment by macrodissection, pyrosequencing was performed on
codons 12, 13, and 61 of KRAS DNA.

This test was developed and its performance characteristics determined by The Genetics
Laboratory. It has not been approved by the US Food and Drug Administration. However,
such approval is not required for clinical implementation, and test results have been shown to
be clinically useful. This laboratory is CAP accredited and CLIA certified to perform high
complexity testing.

Extracted table

**Extracted Table**
| Specimen    | Gene  | Mutation          | Classification | Interpretation                                                         |
| :---------- | :---- | :---------------- | :------------- | :--------------------------------------------------------------------- |
| AB11-12345 A1 | KRAS  | c.34 G>T [p.Gly12Cys] | Positive       | Presence of an activating KRAS mutation in this patient's tumor diminishes the likelihood of to |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 32: Cancer History Summary

Cancer History Summary

RIGHT.

**PERSONAL / FAMILY CANCER HISTORY SUMMARY**

**FAMILY MEMBER**
| FAMILY MEMBER | CANCER / CLINICAL DIAGNOSIS | AGE AT DIAGNOSIS |
| :------------ | :-------------------------- | :--------------- |
| Patient       | None                        |                  |
| Sister        | Breast, Invasive            | 32               |

**PATIENT CLINICAL HISTORY SUMMARY**
| PATIENT CLINICAL HISTORY SUMMARY   |                               |
| :--------------------------------- | :---------------------------- |
| Woman's age                        | 25                            |
| Hormone Replacement Therapy (HRT)  | No                            |
| Ancestry                           | Hispanic/Latino               |
| - HRT: Treatment type              | N/A                           |
| Height                             | 5 ft 6 in                     |
| - HRT: Current user                | N/A                           |
| Weight                             | 125 lbs                       |
| - Number of years ago started      | N/A                           |
| Age of menarche                    | 14                            |
| - Additional years of intended use | N/A                           |
| Patient's menopausal status        | Pre-menopausal                |
| - HRT: Past user                   | N/A                           |
| - Age of onset                     | N/A                           |
| - Number of years ago ended        | N/A                           |
| Age of first live birth            | N/A                           |
| Breast biopsy                      | Not Specified                 |

**NUMBER OF PATIENT'S FEMALE RELATIVES**
| Daughters | Sisters | Maternal Aunts | Paternal Aunts |
| :-------- | :------ | :------------- | :------------- |
| 0         | 1       | 0              | 0              |

* Insights can be derived with additional inputs.
* No prior columns defined in this example.

Extracted table

**Extracted Table**
| Field                    | Value             |
| :----------------------- | :---------------- |
| Patient                  | None              |
| Sister                   | Breast, Invasive  |
| Woman's Age              | 25                |
| Hormone Replacement Therapy (HRT) | No                |
| Ancestry                 | Hispanic/Latino   |
| Height                   | 5 ft 6 in         |
| Weight                   | 125 lbs           |
| Age of Menarche          | 14                |
| Patient's Menopausal Status | Pre-menopausal    |
| Age of First Live Birth  | N/A               |
| Breast Biopsy            | Not Specified     |
| **Number of Patient's Female Relatives** |                   |
| Daughters                | 0                 |
| Sisters                  | 1                 |
| Maternal Aunts           | 0                 |
| Paternal Aunts           | 0                 |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 33: ColonSeq

ColonSeq

RIGHT.

**GENETIC ALTERATIONS**

**Detected Alterations of Known or Potential Pathogenicity Table**
| Gene | Gene Alteration | Significance | Therapeutic Implications*                         | Additional Information             | Methodology     |
| :--- | :-------------- | :----------- | :------------------------------------------------ | :--------------------------------- | :-------------- |
| KRAS | G12V c.35G>T    | Pathogenic   | Associated with drug response; Potentially relevant clinical trials | COSMIC: COSM520 Allele Frequency: 0.0% dbSNP: rs121913529 | Mutational Analysis |

**Detected Alterations of Uncertain Significance Table**
| Gene | Gene Alteration | Significance | Therapeutic Implications* | Additional Information | Methodology |
| :--- | :-------------- | :----------- | :------------------------ | :--------------------- | :---------- |
| None |                 |              |                           |                        |             |

**Detected Alterations Known to be Benign or Likely to be Benign Table**
| Gene | Gene Alteration | Significance | Therapeutic Implications* | Additional Information | Methodology |
| :--- | :-------------- | :----------- | :------------------------ | :--------------------- | :---------- |
| None |                 |              |                           |                        |             |

**Footnotes:**
*Therapeutic Implications: Associated with drug response = related to drug sensitivity or resistance as described in Drug Response section of this
report; Potentially relevant clinical trials = gene is related to a trial in the Clinical Trials section of this report
COSMIC: Mutation ID in the Catalogue Of Somatic Mutations in Cancer (http://cancer.sanger.ac.uk/)
Allele Frequency: Allele frequency of the alteration in the 1000 Genomes Project (http://www.1000genomes.org/)
dbSNP: RS number of alteration in dbSNP database (http://www.ncbi.nlm.nih.gov/SNP)

**CLINICAL TRIALS**

**Overview of Clinical Trials That May Be Relevant Based On Results Of The Tumor Profile Table**
| Trial Phase | Number of Open, Enrolling Trials |
| :---------- | :------------------------------- |
| Phase 2     | 3                                |

Extracted demographics

**Extracted Demographics Table**
| Patient Name | Patient ID (MRN) | Gender | Physician Address | Physician Name | Specimen Collection Date |
| :----------- | :--------------- | :----- | :---------------- | :------------- | :----------------------- |
| TEST PATIENT | TEST123456       | Male   | Test Account      | Dr. Test       | 08/19/2016               |

Extracted table

**Extracted Table**
| Gene | Alteration | Significance | Therapeutic Implications                       | Additional Info                               | Methodology     |
| :--- | :--------- | :----------- | :--------------------------------------------- | :-------------------------------------------- | :-------------- |
| KRAS | G12v       | Pathogenic   | Associated with drug response; Potentially relevant clinical trials | COSMIC: COSM520, Allele Frequency: 0.0% | Mutational Analysis |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 34: Tumor Biomarkers

Tumor Biomarkers

**MARGINS**

**Invasive carcinoma margins**
|       |         |
| :---- | :------ |
| Superior: | >=2.0 mm |
| Inferior: | >=2.0 mm |
| Anterior: | >=2.0 mm |
| Posterior: | >=2.0 mm |
| Medial:   | >=2.0 mm |
| Lateral:  | >=2.0 mm |

**Ductal carcinoma in situ (DCIS) margins**
|       |         |
| :---- | :------ |
| Superior: | >=2.0 mm |
| Inferior: | >=2.0 mm |
| Anterior: | >=2.0 mm |
| Posterior: | >=2.0 mm |
| Medial:   | >=2.0 mm |
| Lateral:  | >=2.0 mm |

**REGIONAL LYMPH NODES**
No lymph nodes submitted or found

**TREATMENT EFFECT**
In the Breast: No definite response to presurgical therapy in the invasive carcinoma

**LYMPHOVASCULAR INVASION**
Lymphovascular Invasion: Not identified

**PATHOLOGIC STAGE CLASSIFICATION (pTNM, AJCC 8th Edition)**
| TNM Descriptors:      | m   |
| :-------------------- | :-- |
| Primary Tumor (Invasive Carcinoma) (pT): | pT1b |
| Regional Lymph Nodes (pN)  |      |
| Category (pN):        | pNX  |

**ANCILLARY STUDIES**
| ER/Pgr/HER2: | Already performed on prior specimen |
| :----------- | :---------------------------------- |
| ER:          | Positive                            |
|              | Percent cells positive: 100         |
|              | Average staining intensity: Strong  |
| PgR:         | Positive                            |

RIGHT.

Extracted summary

This report provides information on the margins, regional lymph nodes, treatment effect, lymphovascular invasion, and pathologic stage classification of a breast carcinoma. The margins of the invasive carcinoma and ductal carcinoma in situ (DCIS) are all greater than or equal to 2.0 mm in the superior, inferior, anterior, posterior, medial, and lateral directions. No lymph nodes were submitted or found. There is no definite response to presurgical therapy in the invasive carcinoma. Lymphovascular invasion is not identified. The pathologic stage classification is pT1b for the primary tumor (invasive carcinoma) and pNX for the regional lymph nodes. Ancillary studies have already been performed on a prior specimen, showing that the ER is positive with 100% of cells positive and strong staining intensity. The PgR is also positive.

Extracted table

**Extracted Table**
| TNM Descriptors | Primary Tumor | Regional Lymph Nodes Category | ER Result | PgR Result |
| :-------------- | :------------ | :---------------------------- | :-------- | :--------- |
| m               | pT1b          | pNX                           | Positive  | Positive   |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 35: Tech Specs Document

Tech Specs Document
Identified 'No Patient Info'

Tarceva® is the registered trademark of OSI Pharmaceuticals, LLC. Zelboraf, Herceptin®, Perjeta, Kadcyla, and Cotellic® are registered trademarks of Genentech, Inc. Gilotrif®
is a registered trademark of Boehringer Ingelheim International GmbH. Iressa, Lynparza, and Tagrisso are registered trademarks of the AstraZeneca group of companies.
Xalkori® is a registered trademark of Pfizer Inc. Zykadia, Tafinlar, Piqray®, Mekinist, and Tabrecta are registered trademarks of Novartis AG Corporation Switzerland. Erbitux®
is a registered trademark of ImClone LLC, a wholly owned subsidiary of Eli Lilly and Company. Alecensa® is a registered trademark of Chugai Seiyaku Kabushiki Kaisha. Vectibix®
is a registered trademark of Immunex Corporation. Rubraca® is a registered trademark of Clovis Oncology, Inc., Pemazyre™ is a registered trademark of Incyte Corporation,
Keytruda® is a registered trademark of Merck Sharp & Dohme Corp. Vitrakvi® is a registered trademark of Bayer. Truseltiq™™ is a registered trademark of QED Therapeutics, Inc.
Alunbrig® is a registered trademark of Takeda Pharmaceutical Company Limited.

The test is also used for detection of genomic loss of heterozygosity (LOH) from formalin-fixed, paraffin-embedded (FFPE) ovarian tumor tissue.
Positive homologous recombination deficiency (HRD) status (defined as tBRCA-positive and/or LOH high) in ovarian cancer patients is associated
with improved progression-free survival (PFS) from Rubraca (rucaparib) maintenance therapy in accordance with the Rubraca product label.

**Summary of Clinical Studies**
Follow-on CDx claims were based on a non-inferiority statistical testing approach using the enrichment design presented in the
paper by Li (2016).¹ All studies passed the acceptance criteria specific in each study protocol.

**SUMMARY OF CLINICAL STUDIES Table**
| BIOMARKER                  | POSITIVE PERCENT AGREEMENT (PPA)‡ | NEGATIVE PERCENT AGREEMENT (NPA) | COMPARATOR METHOD+                                                      |
| :------------------------- | :-------------------------------- | :------------------------------- | :---------------------------------------------------------------------- |
| EGFR Exon 19 Deletions and L858R | 98.1% (106/108)                  | 99.4% (153/154)                  | cobas® EGFR Mutation Test v2                                            |
| EGFR T790M                 | 98.9% (87/88)                    | 86.1% (93/108)                   | cobas® EGFR Mutation Test v1 cobas® EGFR Mutation Test v2               |
| ALK Rearrangements         | 92.9% (78/84)                    | 100% (75/75)                     | Ventana ALK (D5F3) CDx Assay Vysis ALK Break-Apart FISH Probe Kit |
| KRAS                       | 100% (173/173)                   | 100% (154/154)                   | therascreen® KRAS RGQ PCR Kit                                           |
| ERBB2 (HER2) Amplifications | 89.4% (101/113)                  | 98.4% (180/183)                  | Dako HER2 FISH PharmDx® Kit                                             |
| BRAF V600                  | 99.4% (166/167)                  | 89.6% (121/135)5                 | cobas® BRAF V600 Mutation Test                                          |
| BRAF V600E                 | 99.3% (149/150)                  | 99.2% (121/122)                  |                                                                         |
| BRAF V600 dinucleotides    | 96.3% (26/27)                    | 100% (24/24)                     | THXID® BRAF kit                                                         |

**Footnotes:**
* For the most current information about the therapeutic products in this group, go to: https://www.fda.gov/medical-devic
companion-diagnostic-devices-in-vitro-and-imaging-tools.
+ Cobas® is a trademark of Roche Diagnostics Operations, Inc. Therascreen® is a trademark of Qiagen. PharmDx® is a regist
a registered trademark of bioMérieux.
The reference standard used to calculate PPA and NPA is defined as the consensus calls between the two comparator method
comparator method(s) identified mutations in mutated patients and NPA being when FoundationOne CDx and the compa
non-mutated patients.
* Sensitivity of dinucleotide detection of BRAF V600K and V600E was found to be significantly reduced in cobas® test, in
CDx detected the dinucleotides to be of lower than 40% mutant allele frequency (MAF), leading to low NPA values.
'A study using the THxID® BRAF kit (bioMérieux) was conducted with samples with BRAF V600 dinucleotide mutation de
samples to provide a better evaluation of V600 dinucleotide concordance.

RIGHT.

**Report Information Table**
| Report Type                  | Has Patient Info |
| :--------------------------- | :--------------- |
| Companion diagnostic indications | No               |
| Positive Percent Agreement (PPA)¹ | No               |
| Summary of Clinical Studies  | No               |
| Current Gene List²           | No               |
| Select Rearrangements²,³     | No               |

**Extracted Table**
| Biomarker                  | Positive Percent Agreement | Negative Percent Agreement | Comparator Method                                                      |
| :------------------------- | :------------------------- | :------------------------- | :--------------------------------------------------------------------- |
| EGFR Exon 19 Deletions and L858R | 98.1% (106/108)            | 99.4% (153/154)            | cobas® EGFR Mutation Test v2                                           |
| EGFR T790M                 | 98.9% (87/88)              | 86.1% (93/108)             | cobas® EGFR Mutation Test v1 cobas® EGFR Mutation Test v2              |
| ALK Rearrangements         | 92.9% (78/84)              | 100% (75/75)               | Ventana ALK (D5F3) CDx Assay Vysis ALK Break-Apart FISH Probe Kit |
| KRAS                       | 100% (173/173)             | 100% (154/154)             | therascreen® KRAS RGQ PCR Kit                                          |
| ERBB2 (HER2) Amplifications | 89.4% (101/113)            | 98.4% (180/183)            | Dako HER2 FISH PharmDx® Kit                                            |
| BRAF V600                  | 99.4% (166/167)            | 89.6% (121/135)5           | cobas® BRAF V600 Mutation Test                                         |
| BRAF V600E                 | 99.3% (149/150)            | 99.2% (121/122)            |                                                                        |
| BRAF V600 dinucleotide5    | 96.3% (26/27)              | 100% (24/24)               | THXID® BRAF kit                                                        |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 36: Security and authentication

Security and authentication
Keycloak and OpenFGA

KEYCLOAK
* User authentication and org management via Keycloak
  * Single sign-on
  * Identity brokering
* Access to all user assets controlled via OpenFGA
  * Conversations
  * Generated outputs
  * Data / Documents
  * Models

SOC 2 TYPE II
Powered by Vanta
* Actively engaged in SOC2 Type II certification

RIGHT.

**Authorization Graph**
A node graph illustrating access control and relationships between various entities.
* **Central Node:** `sbp-registry-auth` (User)
* **Relations:**
  * `user` has `owner` relation to `document`, `conversation`, `note`, `collection_class`.
  * `user` has `member` relation to `parent`, `team`, `collection_pack`.
  * `user` can `can_add_to`, `can_manage`, `can_view`, `can_vectorize_documents`, `can_create_collections`.
  * `document` is `associated` with `collection_pack`.
  * `collection_pack` is `associated` with `collection`.
  * `collection` is `associated` with `team`.
* **Nodes:** `owner`, `document`, `conversation`, `note`, `collection_class`, `collection_pack`, `collection`, `team`, `parent`, and various `can_` permissions (e.g., `can_add_to`, `can_manage`, `can_view`, `can_vectorize_documents`, `can_create_collections`, `can_manage_documents`, `can_view_documents`).
* **Legend:**
  * STORE (Blue Nodes)
  * TYPE (Green Nodes)
  * RELATIONS (Purple Edges)

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

## Slide 37: Build in house or use Ryght?

Build in house or use Ryght?

RIGHT.

**Build in house or use Ryght? Comparison Table**
| With your current tools                         | VS | RIGHT.                                                      |
| :---------------------------------------------- | :--- | :---------------------------------------------------------- |
| Expensive infrastructure Extensive Human Resources | $    | Affordable annual SaaS subscription                         |
| Slow time-to-market Months in development       |      | Utilize the latest AI technology immediately                |
| Challenging to scale to an entire team          |      | Future-proof with additional integrations and co-pilots     |
| Distracts from your core business               |      | Leverage extensive life science expertise                   |
| Constant in-house maintenance                   | <>   | Managed for you                                             |

©2024 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.