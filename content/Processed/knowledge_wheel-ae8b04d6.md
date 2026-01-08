---
source_pdf: "https://drive.google.com/file/d/1otuwk5eNg0cGlip9jqTHAfbvij9r1vdh/view"
drive_folder: "Portfolio/Ryght/Ryght - Data Room/2. Product & Tech"
type: portfolio
company: Ryght
ingested: 2025-12-27
original_filename: "knowledge_wheel.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1otuwk5eNg0cGlip9jqTHAfbvij9r1vdh/view)

## Slide 1: Gained Intelligence

RIGHT.

We are building intelligence through custom engineering use cases and information flowing through our platform.

How do define, categorize and incorporate them such that the whole is greater than the sum of the parts?

1+1+1 = 5

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 2: Gained Intelligence

RIGHT.

(Diagram: A quadrant with "Information Processing" in the top-left section)

**Information Processing**
Ryght is able to internalize specific data sources and understands how to extract and optimize content

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 3: Gained Intelligence

RIGHT.

(Diagram: A quadrant with "Information Processing" in the top-left and "Information Retrieval" in the top-right section)

**Information Retrieval**
Ryght matches the best LLMs, prompts and techniques to extract and return

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 4: Gained Intelligence

RIGHT.

(Diagram: A quadrant with "Information Processing" in the top-left, "Information Retrieval" in the top-right, and "Workflows" in the bottom-left section)

**Workflows**
Ryght can orchestrate and or automate high value tasks leveraging the processing and retrieval components

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 5: Gained Intelligence

RIGHT.

(Diagram: A quadrant with "Information Processing" in the top-left, "Information Retrieval" in the top-right, "Workflows" in the bottom-left, and "Aggregated Knowledge" in the bottom-right section)

**Aggregate Knowledge**
Ryght gains intelligence through actual partner data contributed to the platform and through customer activity and needs.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 6: Information Processing

RIGHT.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 7: Categories

RIGHT.

**Information Processing**
*   **Connect**
    *   Unstructured | Structured | Semi
*   **Extract**
    *   Pull relevant content
*   **Optimize**
    *   Ensure quality & reuse
*   **Enrich**
    *   Make fit-for-purpose
*   **Load**
    *   Prep for access

(Flowchart Diagram: A data intelligence pipeline)
**Inputs (Left to Right):**
*   API
*   Database
*   File

**Processing Steps (Blue boxes, Top Layer):**
*   Extract
*   Clean
*   Embed
*   Load

**Outputs (Right):**
*   Vector Database

**OpenAI API (Connected to Embed and Load steps)**

**Persisted Storage Layer (Red box, Bottom Layer):**
*   Raw
*   Cleaned
*   Staged

(Arrow from Persisted Storage Layer to "Data Intelligence" below the diagram)
**Data Intelligence**

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 8: Categories

RIGHT.

**Information Processing**
*   **Connect**
    *   Unstructured | Structured | Semi
    *   Public | Private
    *   Text | Images | Audio | Video

(Flowchart Diagram: Same as previous slide, with the "API", "Database", and "File" inputs highlighted in green)

(Logos of various data sources and platforms, implying connection capabilities)
*   snowflake
*   castor
*   aws (W, A, X, P, POR) - *Specific AWS logos for WorkDocs, Amazon S3, Amazon X-Ray, etc.*
*   mongoDB
*   CALYX
*   neo4j
*   NIH NATIONAL CANCER INSTITUTE GDC Data Portal
*   PubMed
*   ICD-10 www.cms.gov/ICD10
*   ClinVar
*   MeSH
*   OHDSI
*   cpt

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 9: Categories

RIGHT.

**Information Processing**
*   **Extract**
    *   Intelligently parse various data types
    *   Schema knowledge for querying databases
    *   Ability to scrape public web sources
    *   API calls for semi-structured, real time data

(Flowchart Diagram: Same as previous slide, with the "Extract" processing step highlighted in green)

(Icons representing different data types and standards, implying extraction capabilities)
*   OCR
*   Aa (Magnifying glass over text)
*   HL7 FHIR
*   (Brackets with three dots)
*   DICOM Digital Imaging and Communications in Medicine
*   ARUP LABORATORIES
*   labcorp
*   (Magnifying glass icon)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 10: Categories

RIGHT.

**Information Processing**
*   **Optimize**
    *   Clean data for purity
    *   Scrub for PHI
    *   Deduplicate
    *   Homogenization
    *   Add structure

(Flowchart Diagram: Same as previous slide, with the "Clean" and "Embed" processing steps and the "OpenAI API" connection highlighted in green)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 11: Categories

RIGHT.

**Information Processing**
*   **Enrich**
    *   Aggregate into metrics
    *   Merging data sources
    *   Summarization strategies
    *   Chunking strategies

*   **Fit-for-purpose**
    *   Raw → Staged
    *   Reuse optimized data multiple ways

(Flowchart Diagram: Same as previous slide, with arrows indicating flow from "Cleaned" and "Staged" back to "Extract" and to "Embed/Load" steps. The "OpenAI API" and "Load" boxes are also highlighted, with a circular arrow from "Staged" back towards "Embed" and "Load" implying a feedback/refinement loop.)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 12: Information Processing (summarization)

RIGHT.

**Input Article**
Marseille, France (CNN) The French prosecutor leading an investigation into the crash of Germanwings Flight 9525 insisted Wednesday that he was not aware of any video footage from on board the plane. Marseille prosecutor Brice Robin told CNN that " so far no videos were used in the crash investigation." He added, "A person who has such a video needs to immediately give it to the investigators." Robin\'s comments follow claims by two magazines, German daily Bild and French Paris Match, of a cell phone video showing the harrowing final seconds from on board Germanwings Flight 9525 as it crashed into the French Alps. All 150 on board were killed. Paris Match and Bild reported that the video was recovered from a phone at the wreckage site. ....

(Flowchart Diagram showing Text Summarization Models)

**Text Summarization Models**
*   **Abstractive summarization**
    *   **Generated summary**
        Prosecutor: " So far no videos were used in the crash investigation "
*   **Extractive summarization**
    *   **Extractive summary**
        marseille prosecutor brice robin told cnn that" so far no videos were used in the crash investigation." robin \'s comments follow claims by two magazines, german daily bild and french paris match, of a cell phone video showing the harrowing final seconds from on board germanwings flight 9525 as it crashed into the french alps. paris match and bild reported that the video was recovered from a phone at the wreckage site.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 13: Information Processing (summarization Techniques)

RIGHT.

(Top Right Text Block labeled 0d60c3cb-761a-4b59-9019-e0cea71f4601.txt)
The lab results indicate that the patient, a 1939-born female, underwent a needle core biopsy on the right breast. The histologic examination revealed invasive carcinoma of no special type (ductal) with a histologic grade of 1 out of 3. The largest invasive focus was at least 0.5 cm in dimension. Ductal carcinoma in situ (DCIS) was present, but lobular carcinoma in situ (LCIS) was not identified. There was no lymphovascular invasion or microcalcifications. Other findings included the presence of cytokeratin AE1/ AE3-positive epithelial cells and continuous membranous staining supporting ductal differentiation. Biomarker studies for estrogen receptor (ER), progesterone receptor (PR), and HER-2/neu were planned to be performed on block A2 of the core sample. The lab results also mention the performance of additional tests, including HER2 amplification testing, which yielded a negative result. Overall, the lab results suggest the presence of invasive mammary carcinoma with specific histologic characteristics and the need for further biomarker studies.

(Left Side Text Block, JSON-like structure labeled -292867962733291574-1981-Female.json)
```json
{
"BIRTH YEAR": "1981",
"GENDER": "Female",
"ORDERED ON": "2021-12-14",
"PANEL NAME": "HER-2/neu by FISH",
"results":
[
{
"measurement": "STAND ALONE FISH SPECIMENS",
"outcome": "RIGHT BREAST 11:00 4 CMFN",
"medical code": NaN,
"comments": NaN,
"criticality": NaN
},
{
"measurement": "READING DT-TM",
"outcome": "20211217151600-0600",
"medical code": NaN,
"comments": NaN,
"criticality": NaN
},
{
"measurement": "HER2 TISS QL FISH",
"outcome": NaN,
"medical code": 311506.0,
"comments": NaN,
"criticality": "Abnormal"
},
{
"measurement": "CPT DISCLAIMER",
"outcome": "The CPT codes provided are for information purposes only, and are based on AMA guidelines without regard to",
"medical code": NaN,
"comments": NaN,
"criticality": NaN
},
{
"measurement": "SIGNOUT DT-TM",
"outcome": "20211223105400-0600",
"medical code": NaN,
"comments": NaN,
"criticality": NaN
},
{
"measurement": "COPY TO LOCATIONS",
// ... (rest of the content is truncated/scrolled)
}
```
**Patient Summary** (Label pointing to the JSON-like block)
**Biomarker Summary** (Label pointing to the text block below)

(Bottom Text Block: "Based on the context information provided, the following biomarkers are mentioned in the text:")
1.  HER2 AG TISS QL IMSTN: The outcome is "1+" and the criticality is "Abnormal".
2.  PROGEST RECEP NFR TISS IMSTN: The outcome is "0%" and the criticality is "Abnormal".
3.  PROGNOSTIC_ER_MARKER TEST COMMENTS: The outcome is "NEGATIVE Internal Control: Benign breast parenchyma is not present." and the criticality is "Abnormal".
4.  PROGNOSTIC_PR_MARKER REFERENCE RANGES: The outcome is ">= 1% Positive / Favorable < 1% Negative / Unfavorable" and the criticality is "Abnormal".
5.  ERA TISS-IMP: The outcome is "Unfavorable" and the criticality is "Abnormal".
6.  PROGNOSTIC_HER_2_MARKER TEST COMMENTS: The outcome is "NEGATIVE Incomplete membrane staining that is faint/barely perceptible and in or equal to 10% of tumor cells. Normal breast elements are not present." and the criticality is "Abnormal".
7.  PROGNOSTIC_PR_MARKER TEST NAME-ASSAY TYPE: The outcome is "PR Progesterone Receptor" and the criticality is "Abnormal".
8.  PROGNOSTIC_HER_2_MARKER REFERENCE RANGES: The outcome is "0,1+ Negative / Favorable 2+ Equivocal 3+ Positive / Unfavorable" and the criticality is "Abnormal".
9.  PROGNOSTIC_ER_MARKER TEST NAME-ASSAY TYPE: The outcome is "ER Estrogen Receptor" and the criticality is "Abnormal".
10. PROGNOSTIC_ER_MARKER REFERENCE RANGES: The outcome is "0 Negative 1-10 Low Positive >10 Positive" and the criticality is "Abnormal".
11. PROGEST RECEP TISS-IMP: The outcome is "Unfavorable" and the criticality is "Abnormal".
12. PROGNOSTIC_PR_MARKER TEST COMMENTS: The outcome is "NEGATIVE Internal Control: Benign breast parenchyma is not present." and the criticality is "Abnormal".
13. ERA NFR TISS IMSTN: The outcome is "0%" and the criticality is "Abnormal".
14. PROGNOSTIC_HER_2_MARKER TEST NAME-ASSAY TYPE: The outcome is "HER-2" and the criticality is "Abnormal".

These biomarkers provide information about the presence, levels, and characteristics of certain receptors and markers related to breast cancer, such as HER2, progesterone receptor (PR), estrogen receptor (ER), and ERA.

Based on this text, some of the questions that can be answered include:
1.  What is the outcome of the HER2 AG TISS QL IMSTN measurement?
2.  What is the outcome of the PROGEST RECEP NFR TISS IMSTN measurement?
3.  What is the outcome of the PROGNOSTIC_ER_MARKER TEST COMMENTS measurement?
4.  What is the outcome of the PROGNOSTIC_PR_MARKER REFERENCE RANGES measurement?
5.  What is the outcome of the ERA TISS-IMP measurement?
6.  What is the outcome of the PROGNOSTIC_HER_2_MARKER TEST COMMENTS measurement?
7.  What is the outcome of the PROGNOSTIC_PR_MARKER TEST NAME-ASSAY TYPE measurement?
8.  What is the outcome of the PROGNOSTIC_HER_2_MARKER REFERENCE RANGES measurement?
9.  What is the outcome of the PROGNOSTIC_ER_MARKER TEST NAME-ASSAY TYPE measurement?
10. What is the outcome of the PROGNOSTIC_ER_MARKER REFERENCE RANGES measurement?
11. What is the outcome of the PROGEST RECEP TISS-IMP measurement?
12. What is the outcome of the PROGNOSTIC_PR_MARKER TEST COMMENTS measurement?
13. What is the outcome of the ERA NFR TISS IMSTN measurement?
14. What is the outcome of the PROGNOSTIC_HER_2_MARKER TEST NAME-ASSAY TYPE measurement?

These questions can help understand the results of various biomarker tests and provide insights into the prognosis and characteristics of breast cancer in the individual described in the context information.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 14: Information Processing (summarization)

RIGHT.

**CD24 CD24 molecule [Homo sapiens (human)]**
Gene ID: 100133941, updated on 7-Sep-2023

**Summary**
*   **Official Symbol** CD24 *pred by HGNC*
*   **Official Full Name** CD24 molecule *provt HGNC*
*   **Primary source** HGNC HGNC:1645
*   **See related** EnsemblENSG00000272398 OMIM:600374 Alliance Genome HGNC:1645
*   **Gene type** protein coding
*   **RefSeq status** REVIEWED
*   **Organism** Homo sapiens
*   **Lineage** Eukaryota; Metazoa; Chordata; Craniata; Vertebrata, Euteleostomi; Mammalia; Eutheria; Euarchontoglires; Primates; Haplorrhini; Catarrhini; Hominidae; Homo
*   **Also known as** CD24A
*   **Summary** This gene encodes a sialoglycoprotein that is expressed on mature granulocytes and B cells and modulates growth and differentiation signals to these cells. The precursor protein is cleaved to a short 32 amino acid mature peptide which is anchored via a glycosyl phosphatidylinositol (GPI) link to the cell surface. This gene was missing from previous genome assemblies, but is properly located on chromosome 6. Non-transcribed pseudogenes have been designated on chromosomes 1, 15, 20, and Y. Alternative splicing results in multiple transcript variants. [provided by RefSeq, Apr 2014]

**Download Datasets** (Button)

(Diagram showing text summaries feeding into GPT-3.5 embedding, then branching to classifications)
**Text summaries from NCBI Gene Database**
-> (GPT-3.5 embedding bubble)
-> (Colored vertical bar representing embeddings)
-> **Classifying gene functionality**
-> **Predicting roles in regulatory networks**

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 15: Information Processing (Context Strategies)

RIGHT.

(Diagram showing text chunks and their associated descriptions of information loss, leading to an "optimized" output)

**Chunk 1**
**3 Fine-tuning BART**
The representations produced by BART can be used in several ways for downstream applications.
**3.1 Sequence Classification Tasks**
For sequence classification tasks, the same input is fed into the encoder and decoder, and the final hidden state of the final decoder token is fed into new multi-class linear classifier. This approach is related to the CLS token in BERT; however we add the additional token

(Box next to Chunk 1)
This chunk loses information in the following paragraph about decoder states as it relates to the topic in header - sequence classification.

**Chunk 2**
to the end so that representation for the token in the decoder can attend to decoder states from the complete input (Figure 3a).
**3.2 Token Classification Tasks**
For token classification tasks, such as answer endpoint classification for SQUAD, we feed the complete doc-ument into the encoder and decoder, and use the top hidden state of the decoder as a representation for each word. This representation is used to classify the token.
**3.3 Sequence Generation Tasks**

(Box next to Chunk 2)
This chunk is not aware that the text here relates to fine-tuning of bart which is in the heading of the first chunk.

**Chunk 3**
**3 Fine-tuning BART**
The representations produced by BART can be used in several ways for downstream applications.
**3.3 Sequence Generation Tasks**
Because BART has an autoregressive decoder, it can be directly fine tuned for sequence generation tasks such as abstractive question answering and summarization. In both of these tasks, information is copied from the

(Box next to Chunk 3)
This chunk is detached from its immediate heading and is not aware of the top heading, losing semantics intended by the document structure.

**optimized**

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 16: Natural Killer Cell and Activated T-Cell Profile/IL-2r

RIGHT.

**Chunk 1**
**Natural Killer Cell and Activated T-Cell Profile/IL-2r**
TEST: 502500 CPT: 86356; 86357; 86359
*Print* *Share* (Icons)
☑ Include LOINC® in print

**Synonyms**
*   CD25
*   Interleukin-2 Receptor
*   TAC Antigen

**Test Includes**
Percentage CD3+; absolute CD3+; percentage CD3+CD25+ (IL-2 receptor); absolute CD3+CD25+; percentage CD3-CD56+ (NK); total CD3-CD56+ (NK); CBC with differential; total lymphocyte count

**Expected Turnaround Time**
1 - 3 days
Turnaround time is defined as the usual number of days from the date of pickup of a specimen for testing to when the result is released to the ordering provider. In some cases, additional time should be allowed for additional confirmatory or additional reflex tests. Testing schedules may vary.

**Related Documents**
*   Sample Report

**Specimen Requirements**
**Specimen** Whole blood
**Volume** Fill tube(s) to capacity.
**Container** Lavender-top (EDTA) tube and yellow-top (ACD-A) or (ACD-B) tube
**Collection** Invert tube 8 to 10 times immediately after collection. To preserve cellular viability, collect specimen so it will arrive in the laboratory within 48 hours of collection. Indicate date and time of venipuncture on the tube(s) and on the test request form.
**Storage Instructions** Maintain specimen at room temperature.

---

**Chunk 2**
(This chunk appears to be a repetition of the Specimen Requirements from Chunk 1, but with a label indicating detached information.)
**Detached from test names, synonyms, cpt**

**Specimen Requirements**
**Specimen** Whole blood
**Volume** Fill tube(s) to capacity.
**Container** Lavender-top (EDTA) tube and yellow-top (ACD-A) or (ACD-B) tube
**Collection** Invert tube 8 to 10 times immediately after collection. To preserve cellular viability, collect specimen so it will arrive in the laboratory within 48 hours of collection. Indicate date and time of venipuncture on the tube(s) and on the test request form.
**Storage Instructions** Maintain specimen at room temperature.

---

**Chunk 3**
(This chunk contains the LOINC Map, but with a label indicating detached information.)
**Detached from synonyms, cpt**

**LOINC® Map**

| Order Code | Order Code Name          | Order Loinc | Result Code | Result Code Name | UofM | Result LOINC |
| :--------- | :----------------------- | :---------- | :---------- | :--------------- | :--- | :----------- |
| 502500     | NK and Activated T Cells/IL2r | 502546      |             | Ab NK (CD56/16)  | /uL  | 42188-3      |
| 502500     | NK and Activated T Cells/IL2r | 502545      |             | % NK (CD56/16)   | %    | 42189-1      |
| 502500     | NK and Activated T Cells/IL2r | 505350      |             | Absolute CD 3    | /uL  | 8122-4       |
| 502500     | NK and Activated T Cells/IL2r | 505324      |             | % CD 3 Pos. Lymph. | %    | 8124-0       |
| 502500     | NK and Activated T Cells/IL2r | 505158      |             | Abs.CD3+CD25+    | /uL  | 26997-7      |

---

**Optimized** (Right side of the diagram)

**Natural Killer Cell and Activated T-Cell Profile/IL-2r**
TEST: 502500 CPT: 86356; 86357; 86359

**Synonyms**
*   CD25
*   Interleukin-2 Receptor
*   TAC Antigen

**Specimen Requirements**
**Specimen** Whole blood
**Volume** Fill tube(s) to capacity.
**Container** Lavender-top (EDTA) tube and yellow-top (ACD-A) or (ACD-B) tube
**Collection** Invert tube 8 to 10 times immediately after collection. To preserve cellular viability, collect specimen so it will arrive in the laboratory within 48 hours of collection. Indicate date and time of venipuncture on the tube(s) and on the test request form.
**Storage Instructions** Maintain specimen at room temperature.

**LOINC® Map**

| Order Code | Order Code Name          | Order Loinc | Result Code | Result Code Name   | UofM | Result LOINC |
| :--------- | :----------------------- | :---------- | :---------- | :----------------- | :--- | :----------- |
| 502500     | NK and Activated T Cells/IL2r | 502546      |             | Ab NK (CD56/16)    | /uL  | 42188-3      |
| 502500     | NK and Activated T Cells/IL2r | 502545      |             | % NK (CD56/16)     | %    | 42189-1      |
| 502500     | NK and Activated T Cells/IL2r | 505350      |             | Absolute CD 3      | /uL  | 8122-4       |
| 502500     | NK and Activated T Cells/IL2r | 505324      |             | % CD 3 Pos. Lymph. | %    | 8124-0       |

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 17: Enrichment (improve semantics)

RIGHT.

**CPT® 86356, Under Qualitative or Semiquantitative Immunoassays**
**CPT® 86357,**
**CPT® 86359,**

**LOINC® Map** (Original)

| Order Code | Order Code Name          | Order Loinc | Result Code | Result Code Name | UofM | Result LOINC |
| :--------- | :----------------------- | :---------- | :---------- | :--------------- | :--- | :----------- |
| 502500     | NK and Activated T Cells/IL2r | 502546      |             | Ab NK (CD56/16)  | /uL  | 42188-3      |
| 502500     | NK and Activated T Cells/IL2r | 502545      |             | % NK (CD56/16)   | %    | 42189-1      |
| 502500     | NK and Activated T Cells/IL2r | 505350      |             | Absolute CD 3    | /uL  | 8122-4       |
| 502500     | NK and Activated T Cells/IL2r | 505324      |             | % CD 3 Pos. Lymph. | %    | 8124-0       |

(Arrow pointing to another LOINC® Map with additional information)

**LOINC® Map** (Enriched)

| Order Code | Order Code Name          | Order Loinc | Result Code | Result Code Name   | UofM | Result LOINC |
| :--------- | :----------------------- | :---------- | :---------- | :----------------- | :--- | :----------- |
| 502500     | NK and Activated T Cells/IL2r | 502546      |             | Ab NK (CD56/16)    | /uL  | 42188-3      |
| 502500     | NK and Activated T Cells/IL2r | 502545      |             | % NK (CD56/16)     | %    | 42189-1      |
| 502500     | NK and Activated T Cells/IL2r | 505350      |             | Absolute CD 3      | /uL  | 8122-4       |
| 502500     | NK and Activated T Cells/IL2r | 505324      |             | % CD 3 Pos. Lymph. | %    | 8124-0       |

**LOINC Description**
CD3+CD16+CD56+ cells [#/volume] in Blood
CD3+CD16+CD56+ cells/100 cells in Blood
CD3 cells [#/volume] in Blood
CD3 cells/100 cells in Blood

(Arrow from LOINC Map to "Improve Hybrid Search Capabilities", then to "Embedding Vector")
**Improve Hybrid Search Capabilities**
(Colored bar representing an embedding vector)
**Embedding Vector**

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 18: Knowledge Graphs + Text

RIGHT.

(Diagram showing two knowledge graphs)

**Left Knowledge Graph (People and Articles):**
*   **Structured information represented as a graph**
    *   Nodes: OpenAI, Dario Amodei, Daniela Amodei, Shariq Hashme, Anthropic, Prosper Robotics
    *   Edges:
        *   Dario Amodei, Daniela Amodei, Shariq Hashme WORKED_AT OpenAI
        *   Anthropic FOUNDED Dario Amodei, Daniela Amodei
        *   Prosper Robotics FOUNDED Shariq Hashme
*   **Unstructured text stored as node properties**
    *   Nodes: Article (multiple instances)
    *   Edges:
        *   OpenAI MENTIONS Article
        *   Dario Amodei MENTIONS Article
        *   Daniela Amodei MENTIONS Article
        *   Shariq Hashme MENTIONS Article
        *   Anthropic MENTIONS Article
        *   Prosper Robotics MENTIONS Article

---

**Right Knowledge Graph (Clinical Trial Data KG):**
**Clinical Trial Data KG**
*   Central Node: Study
*   Connections from Study:
    *   Condition
    *   Drug Term
    *   Organ System
    *   Event Group (connected to Adverse Event)
    *   Drop Group (connected to Drop Record)
    *   Period
    *   Outcome Group (connected to Outcome Analysis, Outcome Measurement, Outcome)
    *   Method (connected to Outcome)
    *   Baseline Record (connected to Baseline Group, Standard Outcome, Cluster Outcome)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 19: Categories

RIGHT.

**Information Processing**
*   **Load**
    *   Create optimal embeddings
    *   Push to vector store (Q&A)

(Flowchart Diagram: Same as previous Information Processing diagrams, with the "Embed", "Load", and "Vector Database" steps, along with the "OpenAI API" connection, highlighted in green)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 20: Information Retrieval

RIGHT.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 21: Categories

RIGHT.

**Information Retrieval**
*   **LLM selection**
    *   open source
    *   proprietary
    *   custom | fine-tuned
*   **Basic Prompts**
    *   zero-shot
    *   few-shot
    *   instruct / cot prompting
*   Retrieval Augmented Generation
*   Text-to-SQL
*   Text-to-Cypher (knowledge graph)

(Flowchart Diagram: Retrieval Augmented Generation (RAG) process)
1.  **Question** (User icon with a question mark) -> **Ask**
2.  **Ask** -> **Smart search** (leads to "Question + relevant documents")
3.  **Smart search** -> (down arrow) **Smart lookup** (leads to "Specific (private) Knowledge Base")
4.  **Specific (private) Knowledge Base** -> (up arrow) **Relevant documents**
5.  **Relevant documents** -> (back to Smart search to enrich "Question + relevant documents")
6.  **Question + relevant documents** -> **LLM** (Parrot icon)
7.  **LLM** -> **Generate answer** (Lightbulb icon)
8.  **Generated answer based on provided documents** (Text below Lightbulb icon)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 22: LLM Selection

RIGHT.

(Diagram showing categories of LLMs and a model for instruction fine-tuning)

**LLM Selection Categories:**
*   **Proprietary Models**
    *   OpenAI
    *   Google AI
    *   ANTHROPIC
    *   AI21 labs
*   **Open Source Models**
    *   meta-llama/Llama-2-70b-chat-hf
    *   codellama/CodeLlama-34b-Instruct-hf
    *   meta-llama/Llama-2-13b-chat-hf
    *   Falcon 180B
*   **Custom LLMs** (Generic icon with gears)
*   **Fleets of Custom LLMs** (Generic icon with multiple gears and arrows)

(Horizontal bar showing various NLP tasks where LLMs can be applied)
*   Text Classification
*   Table Question Answering
*   Zero-Shot Classification
*   Summarization
*   Text Generation
*   Fill-Mask
*   Token Classification
*   Question Answering
*   Translation
*   Conversational
*   Text2Text Generation
*   Sentence Similarity

(Diagram showing the instruction fine-tuning process)
**Model**
**Pre-trained LLM**
-> (Instruction fine-tune on many tasks box)
    *   Summarize the following text:
    *   Rate this review:
    *   Translate into Python code:
    *   Identify the places:
    *   [EXAMPLE TEXT]
    *   [EXAMPLE COMPLETION]
-> **Model**
**Instruct LLM**
Many examples of each needed for training

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 23: Prompt Library

RIGHT.

(Comparison of two prompts tailored for different audiences)

**Left Side (General Audience):**
"Given the context information and not prior knowledge, answer the query for someone who does not have a college education."

(Screenshot of a UI with query fields)
*   `Please list any known biomarkers associated with diabetes`
*   `Diabetes` (Dropdown) `Sources: 3` (Dropdown) `Sequential Analysis` (Dropdown)

**Response:**
There are 9 putative biomarkers associated with prediabetes and type 2 diabetes mellitus, as indicated in the provided context. However, the specific names of these biomarkers are not mentioned.

---

**Right Side (Healthcare Professional Audience):**
"Given the context information and not prior knowledge, answer the query for for a healthcare professional."

(Screenshot of a UI with query fields)
*   `Please list any known biomarkers associated with diabetes`
*   `Diabetes` (Dropdown) `Sources: 3` (Dropdown) `Sequential Analysis` (Dropdown)

**Response:**
The study found that a one standard deviation change in the levels of certain biomarkers was associated with prediabetes and type 2 diabetes mellitus in Chinese patients. These biomarkers had effect sizes ranging from odds ratios of 1.235 to 8.306 for prediabetes and 1.189 to 11.479 for type 2 diabetes mellitus. The metabolites that showed significant differences among groups were visualized in a heatmap, with increased metabolites shown in red and decreased metabolites shown in blue.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 24: Prompt Techniques

RIGHT.

(Comparison of "Answer-Only" and "Chain-of-Thought" Prompting)

**Left Side: Model Input ("Answer-Only" Prompting)**
**Task Description** Task description: Answer questions about which times certain events could have occurred.
**Question** Q: Today, Tiffany went to the beach. Between what times could they have gone? We know that:
**Options** Tiffany woke up at 5am. [...] The beach was closed after 4pm. [...]
Options: (A) 9am to 12pm (B) 12pm to 2pm (C) 5am to 6am (D) 3pm to 4pm
**Answer** A: (D)

**Test-Time Question** Q: Today, Hannah went to the soccer field. Between what times could they have gone? We know that:
Hannah woke up at 5am. [...] The soccer field was closed after 6pm. [...]
Options: (A) 3pm to 5pm (B) 11am to 1pm (C) 5pm to 6pm (D) 1pm to 3pm
A:

**Model Output**
**Generated Answer** (B) X

---

**Right Side: Model Input (Chain-of-Thought Prompting)**
**Task Description** Task description: Answer questions about which times certain events could have occurred.
**Question** Q: Today, Tiffany went to the beach. Between what times could they have gone? We know that:
**Options** Tiffany woke up at 5am. [...] The beach was closed after 4pm. [...]
Options: (A) 9am to 12pm (B) 12pm to 2pm (C) 5am to 6am (D) 3pm to 4pm
**Chain-of-Thought** A: Let's think step by step.
Wake-up time: 5am. [...] The only time when Tiffany could have gone to the beach was 3pm to 4pm. So the answer is (D).

**Test-Time Question** Q: Today, Hannah went to the soccer field. Between what times could they have gone? We know that:
Hannah woke up at 5am. [...] The soccer field was closed after 6pm. [...]
Options: (A) 3pm to 5pm (B) 11am to 1pm (C) 5pm to 6pm (D) 1pm to 3pm
A: Let's think step by step.

**Model Output**
**Generated Chain-of-Thought**
Wake-up time: 5am.
5am-6am: buying clothes at the mall.
6am-11am: watching a movie at the theater.
11am-1pm: getting a coffee at the cafe.
1pm-3pm: working at the office.
3pm-5pm: waiting at the airport.
5pm-6pm: free. The soccer field closure time: 6pm.
The only time when Hannah could have gone to the soccer field was 5pm to 6pm. So the answer is (C).

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 25: Text-to-SQL or Cypher (common data models)

RIGHT.

(Flowchart Diagram: RAG process integrated with knowledge graphs and SQL)
1.  **Question** (User icon with question mark) -> **Ask**
2.  **Ask** -> **Smart search** (leads to "Question + relevant information")
3.  **Smart search** (connected to "Knowledge graph that contains both structured and unstructured data" via "er query or similarity arch" and "Relevant information" arrows)
4.  **Knowledge graph** (depicting a network of nodes)
5.  **SQL** (Cylinder icon representing a database)
6.  **Question + relevant information** -> **LLM** (Parrot icon)
7.  **LLM** -> **Generate answer** (Lightbulb icon)
8.  **Generated answer based on provided documents** (Text below Lightbulb icon)

(Diagram on left: "Colorectal Cancer Metastasis Signaling" pathway)
*   cetuximab, EGF -> EGFR
*   EGFR -> Sos, GRB2, PI3K (complex)
*   Sos -> RAS
*   RAS -> Proliferation of cells, Apoptosis
*   GRB2, PI3K (complex) -> Akt
*   Akt -> Proliferation of cells, Apoptosis
*   Metastatic colorectal cancer -> EGFR, Metastasis
*   Non-small cell lung carcinoma (related to EGFR)

(Logos of common data models/standards on the right)
*   XOHDSI OBSERVATIONAL HEALTH DATA SCIENCES AND INFORMATICS
*   cdisc
*   castor

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 26: Workflows

RIGHT.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 27: Categories

RIGHT.

**Workflows**
*   **Orchestration & Automation**
    *   Leverages information process & retrieval
    *   Composed of multiple sub-flows
*   **Execution**
    *   **Sequence**
        *   Works through predetermined set of tasks
    *   **Agents**
        *   Use LLM to reason out a sequence of steps
        *   Actions are restricted to set of assigned tools / skills

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 28: Workflows - Sequence

RIGHT.

(Screenshot of a web interface labeled "Select a CT Trial to Generate Output")
*   Input field: NCT05775069
*   Button: "Generate Report"
*   (Large play button icon, indicating a video or interactive demo)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 29: Workflows - Agent

RIGHT.

(Screenshot of a web interface labeled "HC1 Disease Research Assistant.")
*   Top bar: synthetica.bio
*   Tabs: Chat, Query, Similarity, APIs, Code
*   Input field: "Chat about a medical condition or clinical trial"
*   Buttons: Submit, Reset, Clear
*   Right Panel: **Available Agents**
    *   DISEASE RESEARCH
    *   HCI CUSTOMERS
*   (Large play button icon, indicating a video or interactive demo)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 30: Workflows - Sequence

RIGHT.

(Screenshot of a text-based interface showing GeneGPT prompt and output)

**GeneGPT prompt**
Hello. Your task is to use NCBI APIs to answer genomic questions. There are two types of Web APIs you can use: Eutils and BLAST.
**#Documentation 1**
You can call Eutils by:
"[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/{esearchlefetchlesummary).fcgi?db={genel snplomim}&retmax={}&{termlid}-{})". {API_DOC}
**#Documentation 2**
For DNA sequences, you can use BLAST by:
"[https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi?CMD={Put | Get}&PROGR AM=blastn&MEGABLAST=on&DATABASE=nt&FORMAT_TYPE={XML|Text}&QUERY=[seq uence}&HITLIST_SIZE={max_hit_size}]". {API_DOC}
**#Demonstration 1**
Question: What is the official gene symbol of LMP10?
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene& retmax=3&retmode=json&term=LMP10]->[{API_CALL}]
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=gene&r etmax=3&retmode=json&id={ids}]->[{API_CALL}]
Answer: PSMB10
**#Demonstration 2**
Question: Which gene is SNP rs1217074595 associated with?
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=snp& retmax=3&retmode=json&id=1217074595]->[[API_CALL]]
Answer: LINC01270
**#Demonstration 3**
Question: What are genes related to Meesmann corneal dystrophy?
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=omim& retmax=15&term=Meesmann+corneal+dystrophy]->[{API_CALL}]
[https://eutils.ncbi.nlm.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=omim &retmax=15&retmode=json&id={ids}]->[{API_CALL}]
Answer: KRT12, KRT3
**#Demonstration 4**
Question: Align the DNA sequence to the human genome: ATTCT[...]TCTCT
[https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi?CMD=Put&PROGRAM=blas tn&MEGABLAST=on&DATABASE=nt&FORMAT_TYPE=XML&QUERY=ATTCT[...]TCTCT&HI TLIST_SIZE=5]->[[API_CALL}]
[https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi?CMD=Get&FORMAT_TYPE= Text&RID=[RID}]->[[API_CALL]
Answer: chr15:91958885-91950932

---

**Gene Turing Question**
Which chromosome does SNP rs1430464868 locate on human genome?

**GeneGPT Output**
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fc gi?db=snp&retmax=3&retmode=json&id=1430464868]->[{"header" :{"type":"esummary", "version": "0.3"}, "result":{"uids":["14 30464868"],"1430464868": {"uid": "1430464868", "snp_id":14304 64868, "allele_origin":"","global_mafs":[{"study": "GnomAD" "freq":"C-0.000007/1"}, ["study": "ALFA", "freq":"C-0./0"]]," global population":"","global_samplesize":""," "suspected":" ","clinical_significance":"","genes": 0, "acc": "NC_000013.1 1", "chr":"13","handle": [*TRUNCATED*] merged_sort":"0"}}}]
Answer: chr13

**GeneHop Question**
What is the function of the gene associated with SNP rs1241371358? Let's decompose the question to sub-questions and solve then step by step.

**GeneGPT Output**
Sub-question 1: Which gene is SNP rs1241371358 associated with?
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fc gi?db=snp&retmax=10&retmode=json&id=1241371358]->[{"heade r":{"type":"esummary", "version": "0.3"}}, "result":{"uids":[ "1241371358"] [*TRUNCATED*] "merged_sort":"0"}]}]
Answer: LRRC23

Sub-question 2: What is the function of LRRC23?
[https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fc gi?db=gene&retmax=10&retmode=json&id=10233]->[["header": ["type":"esummary" [*TRUNCATED*] "merged_sort":"0"}}]
Answer: Predicted to be active in cytosol.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 31: Aggregate Knowledge

RIGHT.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 32: Categories

RIGHT.

**Aggregate / Embedded**
*   **Partner Data**
    *   Embedded into fine-tuned LLMs
    *   Insights translated into natural language reports
*   **Customer Data**
    *   Usage statistics
    *   Feedback
    *   Areas of interest

(Chart: "external knowledge required" vs. "model adaptation required")
*   **Y-axis:** external knowledge required (low to high)
*   **X-axis:** model adaptation required (e.g. behaviour/writing style/vocabulary) (low to high)
*   **Curves:**
    *   **RAG:** Starts high on external knowledge, decreases to medium, stays low on model adaptation.
    *   **Finetuning:** Starts low on external knowledge, increases to high, starts low on model adaptation, increases to high.
    *   **Hybrid (Finetuning + RAG):** Starts medium-high on external knowledge, decreases to low, starts low on model adaptation, increases to medium.

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 33: Aggregates

HT.

*   **Lab Order / Panel Composition**
    *   Patterns in panel makeup across regions
*   **Lab Order / Panel Companions**
    *   Which panels are ordered together
    *   Which analytes are in the same panel
*   **Analyte Result & Ranges**
    *   Stratified patterns in results, ranges
    *   Classification against averages, etc.
*   **Result Comments**
    *   Key element extraction / summarization
    *   Sentiment / Result classification
*   **Lab Panel NER**
    *   Identify lab panels / names in research

(Table: Database Schema Columns)

| Column Name              | Type           | Length      |
| :----------------------- | :------------- | :---------- |
| # PATIENT_ID             | NUMBER         | (30,0)      |
| A PERCENT_90_GROUP_ID    | VARCHAR        | (36)        |
| # PATIENT_AGE            | NUMBER         | (9,0)       |
| A PATIENT_GENDER         | VARCHAR        | (45)        |
| A PATIENT_ZIP3           | VARCHAR        | (255)       |
| # NPI                    | NUMBER         | (15,0)      |
| A PROVIDER_LAST_NAME     | VARCHAR        | (255)       |
| A PROVIDER_FIRST_NAME    | VARCHAR        | (255)       |
| A SPECIALTY              | VARCHAR        | (255)       |
| A SPECIALTY_SECONDARY    | VARCHAR        | (255)       |
| A PROVIDER_ADDRESS       | VARCHAR        | (255)       |
| A PROVIDER_CITY          | VARCHAR        | (255)       |
| A PROVIDER_STATE         | VARCHAR        | (255)       |
| A PROVIDER_ZIP           | VARCHAR        | (255)       |
| @ ORDER_DATE             | DATE           |             |
| # LAB_ORDER_ID           | NUMBER         | (30,0)      |
| A ORDERING_LOCATION      | VARCHAR        | (255)       |
| A PANEL_NAME             | VARCHAR        | (255)       |
| # ORDERED_PANEL_ID       | NUMBER         | (30,0)      |
| @ RESULT_DATE            | DATE           |             |
| A RESULT_NAME            | VARCHAR        | (255)       |
| # RESULT_ID              | NUMBER         | (30,0)      |
| A LOINC_NUMBER           | VARCHAR        | (255)       |
| A RESULT                 | VARCHAR        | (16777216)  |
| A RESULT_UNITS           | VARCHAR        | (255)       |
| A RESULT_REF_RANGE       | VARCHAR        | (255)       |
| A RESULT_CRITICALITY     | VARCHAR        | (100)       |
| A RESULT_STATUS          | VARCHAR        | (100)       |
| A RESULT_COMMENT         | VARCHAR        | (16777216)  |

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 34: Aggregates

HT.

*   **Biomarker covariance**
    *   Patterns in results for disease states
*   **Longitudinal disease state**
    *   Identify progression / regression
*   **HCP Characterization**
    *   Patterns for an HCP / Clinic / Specialty
*   **Patient**
    *   Aggregate Age / Gender
    *   Disease state stratification
    *   Lab Recommendations

(Table: Database Schema Columns - same as previous slide)

| Column Name              | Type           | Length      |
| :----------------------- | :------------- | :---------- |
| # PATIENT_ID             | NUMBER         | (30,0)      |
| A PERCENT_90_GROUP_ID    | VARCHAR        | (36)        |
| # PATIENT_AGE            | NUMBER         | (9,0)       |
| A PATIENT_GENDER         | VARCHAR        | (45)        |
| A PATIENT_ZIP3           | VARCHAR        | (255)       |
| # NPI                    | NUMBER         | (15,0)      |
| A PROVIDER_LAST_NAME     | VARCHAR        | (255)       |
| A PROVIDER_FIRST_NAME    | VARCHAR        | (255)       |
| A SPECIALTY              | VARCHAR        | (255)       |
| A SPECIALTY_SECONDARY    | VARCHAR        | (255)       |
| A PROVIDER_ADDRESS       | VARCHAR        | (255)       |
| A PROVIDER_CITY          | VARCHAR        | (255)       |
| A PROVIDER_STATE         | VARCHAR        | (255)       |
| A PROVIDER_ZIP           | VARCHAR        | (255)       |
| @ ORDER_DATE             | DATE           |             |
| # LAB_ORDER_ID           | NUMBER         | (30,0)      |
| A ORDERING_LOCATION      | VARCHAR        | (255)       |
| A PANEL_NAME             | VARCHAR        | (255)       |
| # ORDERED_PANEL_ID       | NUMBER         | (30,0)      |
| @ RESULT_DATE            | DATE           |             |
| A RESULT_NAME            | VARCHAR        | (255)       |
| # RESULT_ID              | NUMBER         | (30,0)      |
| A LOINC_NUMBER           | VARCHAR        | (255)       |
| A RESULT                 | VARCHAR        | (16777216)  |
| A RESULT_UNITS           | VARCHAR        | (255)       |
| A RESULT_REF_RANGE       | VARCHAR        | (255)       |
| A RESULT_CRITICALITY     | VARCHAR        | (100)       |
| A RESULT_STATUS          | VARCHAR        | (100)       |
| A RESULT_COMMENT         | VARCHAR        | (16777216)  |

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 35: Residual Categories

RIGHT.

(Quadrant Diagram with circular arrow)
*   Top-Left: Information Processing
*   Top-Right: Information Retrieval
*   Bottom-Left: Workflows
*   Bottom-Right: Aggregated Knowledge
*   (A large circular arrow in the center connects all four quadrants, implying an iterative or interdependent relationship.)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.

---

## Slide 36: Unstructured Data Intelligence

RIGHT.

According to Gartner, unstructured data represents an estimated 80 to 90 percent of all new enterprise data.

Furthermore, it's growing three times faster than structured data.

"Unstructured Data Intelligence"

(Pyramid Diagram: Enterprise Data)
*   **Top Layer:** Structured Data
    *   (Arrow pointing right) Most ETLs
*   **Middle Layer:** Unstructured Data that's easy to manipulate
    *   (Arrow pointing right) Some ETLs
*   **Bottom Layer (Largest):** Unstructured Data that's hard to manipulate
    *   (Arrow pointing right) Only (Ryght logo)

**Enterprise Data** (Label below the pyramid)

© 2023 Ryght, Inc. All Rights Reserved. CONFIDENTIAL. Do not distribute or reproduce.