---
source_pdf: "https://drive.google.com/file/d/1LeqylH8fdr7ZwQND8VePYgU3drusqd_rkBlP5NqTtDs/view"
drive_folder: "Portfolio/Evvy"
type: portfolio
company: Evvy
ingested: 2025-12-26
original_filename: "Copy of Evvy R&D Appendix [data room] "
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1LeqylH8fdr7ZwQND8VePYgU3drusqd_rkBlP5NqTtDs/view)

# Evvy R&D Appendix

## Slide 1: Evvy

Evvy
R&D Appendix
Last updated July 2023
Privileged & Confidential

## Slide 2: Evvy’s Proprietary Platform

**Why:** Deeper level of insights are **necessary** to identify the unique signatures that drive specific disease states to develop new biomarkers (e.g., LabCorp) and enhance care delivery (e.g., improve diagnosis).

**What:** Data and proprietary platform that drive continuous learnings and improvement
- **Data**
    - Vaginal microbiome sequencing data that we generate by sequencing patient samples with our CLIA-certified, metagenomics pipeline
    - Phenotypic metadata on patient symptoms, diagnoses, medications, etc.
- **Proprietary platform**
    - SAGE: XX..
    - MAG: XX..

**How:** Early signs of value for us and our partners
- Bacterial classifications: XX..
- Genome comparisons: XX..
- Biomarker detection: XX..

**[Diagram: Evvy’s Proprietary Platform]**
- **Evvy**
  - **Patient Phenotypic data +**
  - **Tertiary analysis:**
    - Interpret the Sequence
    - SAGE
  - **Secondary Analysis:**
    - Determine True Sequence
    - MAG
  - **Primary Analysis:**
    - Physical sample to bytes
    - Microgen Dx

## Slide 3: SAGE: Evvy’s Proprietary Reference Database

SAGE:
Evvy's Proprietary Reference Database

## Slide 4: Why we built SAGE

Current literature supports metagenomic analysis of the vaginal flora based on the extensive, growing list of potential pathogens (and pathogenic genes) associated with vaginitis. That said, a microbiome test is only as good as its reference database.

In order to understand the etiology of vaginal infections and develop effective treatments, we need to understand which microbes, combinations of microbes, genetic variants, pathogenicity genes, metabolite production, biofilm production, etc. cause disease. And in order to do that, we need a way to identify strains and compare genomes within our samples and their metadata. That is why our test uses metagenomics sequencing and why we are so interested in generating metagenome assembled genomes (MAGs) for our proprietary, selected annotated genomes (SAGE) database.

SAGE is now the world's most comprehensive and precise vaginal microbiome reference database — and it is proprietary to Evvy. It includes over 700 bacterial species represented by over 4000 high quality genomes pulled from both publicly available sources as well as genomes generated from Evvy's own samples. These genomes represent all known taxa found in the vagina and urogenital tract. They have been thoroughly analyzed for quality, completeness, and accurate taxonomy. Publicly available reference databases used by other microbiome companies represent ~ 260 bacterial species (less than half of SAGE).

Throughout the extensive database building process, Evvy has identified taxonomically distinct strains we call sub-species variants (SSV). This level of specificity will improve our ability to more accurately diagnose through precise classification and identification of pathogens.

This high level of resolution, particularly the inclusion of SSVs, also powers scientific discovery through our biomarker platform-allowing our research team to build clinically validated prediction models.

## Slide 5: SAGE Database

**SAGE Database**

**The most comprehensive and accurate vaginal genome database to date**
*   **4647 genomes** representing **746 species** (compared to ~260 species represented in publicly available databases e.g. Virgo)
    *   Includes **580 Evvy-generated genomes (MAGs)**
*   All genomes come from organisms isolated from the vagina or urogenital tract

**Uses:**
1.  **Precision bacterial classification:** Ability to classify which species are present in a sample with the highest precision. Better sensitivity/specificity, including sub-species variations.
2.  **Genome comparisons:** Ability to identify how specific genes or genomes are associated with specific disease states or symptoms.
3.  **Biomarker detection:** Ability to identify precise, microbial signatures for future diagnostics that are only possible to see with our high fidelity database.

## Slide 6: How we discover new genomes to add to SAGE: Metagenome Assembled Genomes (MAGs)

How we discover new genomes to add to SAGE:
Metagenome Assembled Genomes (MAGs)

## Slide 7: Metagenome assembled genome (MAG) pipeline

**Metagenome assembled genome (MAG) pipeline**

**What is a MAG?**
A nearly complete bacterial genome assembled from data gathered from doing short read shotgun metagenomic sequencing on samples.

**Why make MAGs?**
*   Generate genomes directly from user samples, enabling discovery of new genomes not previously known
*   Add new genomes to our reference database, further improving our ability to precisely classify
*   Power our biomarker discovery pipeline by discovering genomes associated directly with user metadata (symptoms, diagnoses)

**Status:**
Pipeline is built and we've assembled the genomes that are now being used for research! We are currently automating the pipeline so that we can consistently be adding new genomes from our samples.

## Slide 8: MAGs Diagram

**[Diagram: MAGs pipeline with puzzle pieces]**

- **Short sequence fragments from "all" DNA** (represented by multi-colored bars)
  - Connects to **MAGs** (represented by various colored interlocking 'C' shapes)
- **MAGs** then connects to **Initial MAGs generated from Evvy samples:**
  - **859 High quality MAGs from 611 individual samples**
  - **(95% complete and less than 5% contamination = near-low)**
  - **Discovered 279 new genomes for *Gardnerella*, the most common pathogen in the vagina!**

The large multi-colored pile of puzzle pieces represents "all" DNA. Arrows point from this pile to three separate partially assembled puzzles, each with white missing pieces, indicating the assembly process.

## Slide 9: Enabling Species & Strain associations to symptoms/disease

**Enabling Species & Strain associations to symptoms/disease**

**Example Research Questions**
1.  *L. crispatus* - Is a specific species or strain of *L. crispatus* associated with CV?
2.  *Gardnerella* - What species/strain is associated with BV? Symptoms?
3.  *L. iners* - What species/strain is associated with symptoms?

**[Diagram: Enabling Species & Strain associations to symptoms/disease]**

- **Strains/Sample**
    - Sample 1: Contains various colored blocks (representing strains).
    - Sample 2: Contains various colored blocks (representing strains).
- **Evvy Metadata**: Plus sign connects "Strains/Sample" to "Evvy Metadata" box.
- **MAG/Sam**
    - Sample 1: Bar chart with various colored segments.
    - Sample 2: Bar chart with various colored segments.
- **SAGE + MAG-D** (represented by colorful interlocking 'C' shapes, connected to MAG/Sam with a plus sign)
- Arrow from "MAG/Sam" and "SAGE + MAG-D" points to **Gene or SNP detection**
    - **[Image: Gene or SNP detection chart]**
        - Shows multiple gene segments (e.g., 9930, XTMC, Cuc37, Cuc80, Cuc64, Hx14) with various blue bars, triangles, and lines indicating gene features/SNPs. Scale 20 kb.
- Arrow from "Strains/Sample" and "Evvy Metadata" points to **Dimension Reduction Analysis**
    - **[Chart: Dimension Reduction Analysis - PCA Scatter Plot]**
        - **Title:** PC2 vs PC1
        - **Y-axis:** PC2 (-0.2 to 0.2)
        - **X-axis:** PC1 (-0.10 to 0.15)
        - **Data Points:** Colored dots representing different species.
            - Blue dots: setosa
            - Green dots: versicolor
            - Red dots: virginica

## Slide 10: Enabling Strain Level Community Associations

**Enabling Strain Level Community Associations**

**Example Research Questions**
1.  BV - What groups of strains are most commonly found together in users with BV symptoms?
2.  *L. iners* - What strains are normally found in patients that are *L. iners* dominant with symptoms?

**[Diagram: Strain Level Community Associations]**

- **Strains/Sample**
    - **BV 1, BV 2, BV 3** (Representing Bacterial Vaginosis samples)
    - **Control 1, Control 2, Control 3** (Representing Control samples)
- **Rows for Strains:**
    - Gard strain 1
    - Gard strain 2
    - Lacto strain 7
    - Prevotella strain 12
    - ... (ellipsis indicates more strains)
- **Data:** Each cell under a sample column for a specific strain shows a colored square if the strain is present. Red boxes highlight specific patterns of strain presence across BV samples and control samples.

- Arrow points from the "Strains/Sample" diagram to **Mechanistic prediction**
    - **SAGE, MAG-D, + MAG/Sam**
    - **[Image: Gene or SNP detection chart, similar to slide 9]**
        - Shows multiple gene segments (e.g., 9930, XTMC, Cuc37, Cuc80, Cuc64, Hx14) with various blue bars, triangles, and lines indicating gene features/SNPs. Scale 20 kb.

## Slide 11: Sialidase: Example of leveraging SAGE to discover a specific gene’s associations with specific symptoms & disease

Sialidase:
Example of leveraging SAGE to discover a specific gene's associations with specific symptoms & disease

## Slide 12: Vaginal Pain - G. vag subset

**Vaginal Pain - G. vag subset**

**[Bar Chart: Sialidase Present]**
- **Title:** Sialidase Present
- **Y-axis:** Percentage of Samples (0% to 60%)
- **X-axis:** NO, MI, MO, SE (Likely severity or type of pain, e.g., None, Mild, Moderate, Severe)
- **Data:**
    - NO: 63.01%
    - MI: 28.77%
    - MO: 2.74%
    - SE: 5.48%

**[Bar Chart: Sialidase Absent]**
- **Title:** Sialidase Absent
- **Y-axis:** Percentage of Samples (0% to 80%)
- **X-axis:** NO, MI, MO, SE
- **Data:**
    - NO: 83.63%
    - MI: 11.7%
    - MO: 2.92%
    - SE: 1.75%

**Conclusion:**
*   The presence of sialidase is significantly associated with vaginal pain
*   If you are *G. vaginalis* dominant and have sialidase, then you are more likely to experience vaginal pain.

## Slide 13: Vaginal Discharge - G. vag subset

**Vaginal Discharge - *G. vag* subset**

**[Bar Chart: Sialidase Present]**
- **Title:** Sialidase Present
- **Y-axis:** Types of Discharge
- **X-axis:** Percentage of Samples (0% to 40%)
- **Data:**
    - Brown: 1.49%
    - Frothy: 7.46%
    - Gray: 13.43%
    - Greenish: 7.46%
    - It seems excessive (a lot of discharge): 37.31%
    - It seems normal: 34.33%
    - Other: 4.48%
    - Watery: 32.84%
    - White and thick, like cottage-cheese: 22.39%
    - Yellowish: 29.85%

**[Bar Chart: Sialidase Absent]**
- **Title:** Sialidase Absent
- **Y-axis:** Types of Discharge
- **X-axis:** Percentage of Samples (0% to 40%)
- **Data:**
    - Brown: 3.11%
    - Frothy: 8.07%
    - Gray: 3.11%
    - Greenish: 1.86%
    - It seems excessive (a lot of discharge): 31.68%
    - It seems normal: 40.99%
    - Other: 8.07%
    - Watery: 31.68%
    - White and thick, like cottage-cheese: 19.25%
    - Yellowish: 15.53%

**Conclusion:**
*   There is a difference in the type of discharge when sialidase is present
*   If you are *G. vaginalis* dominant your discharge will be slightly different if sialidase is present.

## Slide 14: Diagnosis BV - G. vag subset

**Diagnosis BV - *G. vag* subset**

**[Bar Chart: Sialidase Present]**
- **Title:** Sialidase Present
- **Y-axis:** Diagnosis Type
- **X-axis:** Percentage of Samples (0% to 40%)
- **Data:**
    - Diagnosed in past 60 days: 44.78%
    - Never diagnosed, but I think I have this or have had it: 4.48%
    - Diagnosed once in lifetime: 8.96%
    - Diagnosed multiple times: 49.25%

**[Bar Chart: Sialidase Absent]**
- **Title:** Sialidase Absent
- **Y-axis:** Diagnosis Type
- **X-axis:** Percentage of Samples (0% to 30%)
- **Data:**
    - Diagnosed multiple times: 34.78%
    - Never diagnosed, but I think I have this or have had it: 8.07%
    - Diagnosed once in lifetime: 10.56%
    - Diagnosed in past 60 days: 29.81%

**Conclusion:**
*   There is a difference in the type of diagnosis for BV when sialidase is present
*   If you are *G. vaginalis* dominant, your experience with BV may be slightly different if sialidase is present.

## Slide 15: Publications

PUBLICATIONS

## Slide 16: IDSOG 2023 Evvy Abstract Presentation

IDSOG 2023
Evvy Abstract Presentation

## Slide 17: Infectious Diseases Society for Obstetrics and Gynecology

**Infectious Diseases Society for Obstetrics and Gynecology**

**Evvy Proprietary Research Discoveries: *Gardnerella* species variation**

**Background:**
*   *Gardnerella* is a common member of the vaginal microbiome and often used as a biomarker of bacterial vaginosis (BV).
*   *Gardnerella* has not been proven as the primary cause of BV.
*   One reason this might be is that until recently, it was thought that *Gardnerella* had only 1 species, *G. vaginalis*.
*   However, as of 2020, 12 species have been identified.
*   Yet we know very little about the differences and pathogenic potential across the *Gardnerella* genus.
*   Here we present the largest genome comparison of *Gardnerella* to date including 400 *Gardnerella* genomes representing all 12 distinct species.
    *   209 publicly available genomes (NCBI, EBI, etc)
    *   280 Evvy generated MAGs from proprietary samples

**[Image: Microscopic view of small, pink, rod-shaped bacteria]**

## Slide 18: Conclusions:

**Conclusions:**

**MAGs allow for better resolution between species and insights into bacterial function**

**Key findings:**
*   With the inclusion of Evvy MAGs, there are up to 5 species of *Gardnerella* that Evvy could be the first to name
*   We found that antibiotic resistance varies across species
*   Different species have different metabolic capabilities:
    *   Only *G. vaginalis* can degrade Galactose
    *   Pathogenicity genes:
        *   Vaginolysin - 75-100% of strains contain this gene. *G. piotii* (SSV-A & B) and *G. vaginalis* SSV-A have the least amount of genomes with vaginolysin
        *   GAPDH - Only *G. leopoldii* and *G. swidsinskii* have this ability. All other strains lack this pathway.

**[Image: Microscopic view of small, pink, rod-shaped bacteria]**

## Slide 19: Gardnerella Phylogenetic Tree and Heatmap

**Key takeaways:**
- *G. swidsinskii* has the greatest representation in this dataset
- We discovered up to 5 different *Gardnerellas* species from Evvy MAGs that we could name!

**[Image: Phylogenetic tree and heatmap showing Gardnerella species relationships]**

**Left Panel - Legend:**
*   Gardnerella vaginalis A
*   Gardnerella vaginalis B
*   Gardnerella leopoldii
*   Gardnerella piotii A
*   Gardnerella piotii B
*   Gardnerella swidsinskii
*   Gardnerella-1
*   Gardnerella-2
*   Gardnerella-3
*   Gardnerella-4
*   Gardnerella-5
*   Gardnerella-6
*   Gardnerella-7
*   Gardnerella-8
*   Alloscardovia omnicolens
*   Unknown Gardnerella

**Left Panel - Heatmap labels:**
*   G. swid
*   G. leo
*   G. vag A-B
*   G. pio A-B
*   G. piotii
*   G. swidsinski
*   G. leopoldi
*   G. vaginalis

**Right Panel - Legend (within zoomed section):**
*   Gardnerella-1
*   Gardnerella-2
*   Gardnerella-3
*   Gardnerella-4
*   Gardnerella-5
*   Gardnerella-6
*   Gardnerella-7

**Right Panel - Cluster labels (top of dendrogram):**
*   2 3 4 5

**Right Panel - Numerical scale (bottom right):**
*   AN percentage identity
*   0-35
*   0000

(Note: The image is a complex heatmap showing genetic similarity between different *Gardnerella* strains/species, with a phylogenetic tree on top. The red color indicates higher similarity.)

## Slide 20: Gardnerella species association - Gene content

**Gardnerella species association - Gene content**

**Antibiotic Resistance Genes**
Presence of genes associated with antibiotic resistance. Is not proof of antibiotic resistance (gene may not be expressed)
*   50-80% of all strains contained the genes for rifamycin resistance
*   25-50% of strains have genes for lincomycin (class that includes clindamycin).
*   5-30% of strains have genes for Tetracycline resistance
*   12-38% of strains have genes for Macrolide resistance (which includes erythromycin)
*   No metronidazole, ampicillin, or ciprofloxacin resistance genes were identified.

**[Image: Microscopic view of small, pink, rod-shaped bacteria]**

## Slide 21: Gardnerella species association - Gene content

**Gardnerella species association - Gene content**

**Metabolic Genes Pathways**
Do the different strains have the ability to break down or produce specific carbon sources?

*   **Glycogen degradation**
    *   Glycogen is an important carbon source in the vagina
    *   It is abundant in cervical, endometrial and vaginal epithelium
    *   Luminal vaginal glycogen is lower in women with dysbiosis
    *   All *Gardnerella* strains have at least 1 if often 2 sets of genes for glycogen degradation

*   **Galactose degradation**
    *   Also a potential carbon source, but also necessary to create an outer cell wall
    *   Battenbrock 1998 calls it ubiquitous in bacteria. Required to make the building blocks for lipopolysaccharides in Gram negative bacteria (like *Gardnerella*).
    *   Only *G. vaginalis* has this ability. All other strains lack this pathway.
        *   Implications for antibiotic resistance, potentially cell adherence or cell signalling.

**[Image 1: Histology slide showing glycogen]**
- **Label:** glycogen
- **Source:** Corbis images

**[Image 2: Diagram of Gram-negative bacterial cell wall]**
- **Components:**
    - LIPOPOLYSACCHARIDES
    - OUTER MEMBRANE
    - PORIN
    - LIPOPROTEINS
    - PEPTIDOGLYCAN
    - PERIPLASMIC SPACE
    - CYTOPLASMIC MEMBRANE
    - PROTEIN
- **Label:** Gram negative
- **Source:** © Byjus.com

## Slide 22: Gardnerella species association - Gene content

**Gardnerella species association - Gene content**

**Virulence Gene Pathways**
Do the different strains have the ability to attach or break into to human cells?

*   **Lysis - Vaginolysin**
    *   *Gardnerella* lysis gene - It is a protein that binds to other versions of itself to create a pore. Literally poking holes into the membranes of cells.
    *   75-100% of strains contain this gene. *G. piotii* (A & B) and *G. vaginalis* A contain this the least

*   **GAPDH**
    *   A gene whose usual function is in central metabolism.
    *   However, it can be exported outside of the bacterial cell and help the bacteria attach to epithelial cells
    *   Only *G. leopoldii* and *G. swidsinskii* have this ability. All other strains lack this pathway.

**[Image 1: Vaginolysin structure diagram]**
- **Labels:** A, B, D1, D2, D3, ß-tongue, CD59, D4, L3, UDP, L1(CRM), L2
- **Source:** Pleckaityte 2019

**[Image 2: Glycolysis pathway diagram showing GAPDH locations]**
- **Labels:** Glycolysis, GAPDH (multiple instances), 1,3-bisphosphoglycerate, Dihydroxyacetone phosphate, Cytosol, Membrane
- **Source:** Kopeckova 2020

## Slide 23: IDSOG 2023 Poster

IDSOG 2023
Poster

## Slide 24: Incidence and Symptom Profiling of Vaginitis Containing Aerobic and Anaerobic Pathogens

**Incidence and Symptom Profiling of Vaginitis Containing Aerobic and Anaerobic Pathogens**
Infectious Disease Society of Obstetrics and Gynecology 2023
¹ Evvy, Research and Development Group, New York, NY

**Abstract**
**Objective:** Vaginitis is a common condition that affects women of all ages. Complex cases may involve the simultaneous presence of multiple pathogens in the vagina. The presence of different pathogens and overlapping symptoms makes accurate diagnosis and treatment challenging. Here we report the incidence of aerobic and anaerobic organisms in symptomatic vaginitis cases.

**Study Design:** Patient health history and shotgun metagenomic vaginal samples were collected over a period of 2 years. Aerobic and anaerobic organisms present at >= 2% abundance were identified in a cohort of symptomatic and non-menopausal samples (N=2905) resulting in 5 sub groups: aerobic only (N=136, 4.7%), anaerobic only (N=2409, 82.9%), mixed - aerobic dominant (N=98, 3.4%), mixed - anaerobic dominant (N=105, 3.6%), and mixed non-dominant (N=157, 5.4%).

**Results:** The average relative abundance was lower when only aerobic pathogens were present (26.7% vs 54.4% anaerobe-only, p<0.001). The number (p<0.05) and severity of reported symptoms was greater whenever aerobes were present, with the most severe symptoms in the aerobic only, mixed aerobic, and mixed non-dominant groups. No single symptom was associated with the presence of aerobes.

**Conclusion:** While anaerobes are the most prevalent, mixed vaginitis with aerobes is also common. When aerobic pathogens are present, symptoms tend to be more severe. The presence of both aerobic and anaerobic organisms has significant clinical and therapeutic implications such as varying antibiotic susceptibility. Therefore, solely relying on symptoms may not accurately distinguish between the causes of vaginitis.

**Background**
**Vaginitis Cases are Common and Complex**
*   Bacterial Vaginosis (BV) affects approximately 1 in 3 women worldwide (CDC - Bacterial Vaginosis).
*   BV is characterized by a lack of *Lactobacillus* sp and an increase in anaerobic organisms.
*   However, the prevalence of aerobic organisms in women with symptomatic BV is not known.

**Objective**
(1) Characterize the prevalence of aerobic and anaerobic organisms in vaginas of women with symptomatic vaginitis.
(2) Correlate the presence of aerobic and anaerobic organisms to real-world symptom profiles

**Methods**
*   Using Evvy's dataset- patient health history and shotgun metagenomic vaginal samples were collected over a period of 2 years.
*   a cohort of symptomatic and non-menopausal samples (N=2905)
*   Samples with aerobic and anaerobic organisms present at >= 2% relative abundance were identified. Those organisms included species within the following genera:
    *   **Aerobic:**
        *   *Streptococcus, Enterococcus, Escherichia, Staphylococcus, Klebsiella*
    *   **Anaerobic:**
        *   *Gardnerella, Prevotella, Mobiluncus, Fannyhessae/Atopobium, Megasphaera, BVAB1, Sneathia*

**Samples were grouped into 5 sub groups:**
*   Aerobic organisms only (N=136, 4.7%)
*   Anaerobic only (N=2409, 82.9%)
*   Mixed - aerobic dominant (N=98, 3.4%)
*   Mixed - anaerobic dominant (N=105, 3.6%)
*   mixed non-dominant (N=157, 5.4%).

**Results**
**The Prevalence and Symptom Severity of Aerobes and Anaerobes in Vaginitis Samples.**

**Relative abundance of pathogens in each subgroup**
**[Bar Charts: Relative Abundance (%)]**
*   **Aerobic only (n=136)**: A set of stacked bar charts (8 bars per group)
    *   Represents relative abundance of different pathogens. Values range roughly from 0.0 to 0.2, with some reaching ~0.6 for certain specific pathogens in anaerobic only.
*   **Anaerobic only (n=2409)**: A set of stacked bar charts.
*   **Mixed - Aerobic dominant (n=98)**: A set of stacked bar charts.
*   **Mixed - Non dominant (n=157)**: A set of stacked bar charts.
*   **Mixed - Anaerobic dominant (n=105)**: A set of stacked bar charts.

**Severity of 10 measured vaginal symptoms by subgroup**
**[Bar Charts: Symptom Severity]**
*   **Aerobic only (n=136)**: Set of 10 bars for each symptom severity (Likely a 5-point scale, represented by various shades/colors).
*   **Anaerobic only (n=2409)**: Set of 10 bars for each symptom severity.
*   **Mixed - Aerobic dominant (n=98)**: Set of 10 bars for each symptom severity.
*   **Mixed - Non dominant (n=157)**: Set of 10 bars for each symptom severity.
*   **Mixed - Anaerobic dominant (n=105)**: Set of 10 bars for each symptom severity.

**Number of symptoms present in each subgroup *p<0.05**
**[Box Plot: Distribution of number of symptoms by subgroup]**
*   **Y-axis:** Number of Symptoms (0 to 10)
*   **X-axis:** Subgroups (only aerobic, mixed - aerobic dominant, mixed - non dominant, mixed - anaerobic dominant, only anaerobic)
*   **Data points:** (Approximated from chart image)
    *   Only aerobic: Median ~7, range ~5-9
    *   mixed - aerobic dominant: Median ~6, range ~4-8
    *   mixed - non dominant: Median ~6, range ~4-8
    *   mixed - anaerobic dominant: Median ~5, range ~3-7
    *   only anaerobic: Median ~3, range ~1-5
*   Asterisks (**) indicate statistical significance (p<0.05) compared to 'only anaerobic' group.

**Summary and Future Directions**
*   Measure levels of aerobic and anaerobic organisms in patients with recurrent BV
*   See how these levels change following treatment - does the incidence of aerobes go down after treatment.
*   Measure and analyze difference in inflammation between aerobic and anaerobic containing microbiomes.

## Slide 25: Published in American Society for Microbiology Journal

Published in American Society for Microbiology Journal
"Metabolic Network Models of the Gardnerella Pangenome Identify Key Interactions with the Vaginal Environment”
Dillard LR¹, Kolling GL², Thomas-White K³, Wever F³, Glass EM², Papin JA²*

## Slide 26: Overview (Link)

**Overview ([Link](https://journals.asm.org/doi/10.1128/msystems.00223-22))**

**Background:**
*Gardnerella* is the primary pathogenic bacterial genus present in the polymicrobial condition known as bacterial vaginosis (BV). Despite BV's high prevalence and associated chronic and acute women's health impacts, the *Gardnerella* pangenome is largely uncharacterized at both the genetic and functional metabolic levels.

**Results:**
1) Used genome-scale metabolic models to characterize in silico the *Gardnerella* pangenome metabolic content. We also assessed the metabolic functional capacity in a BV-positive cervicovaginal fluid context.

2) Identified 57 essential genes across the pangenome via in silico gene essentiality screens within two simulated vaginal metabolic environments. Four genes, *gpsA*, *fas*, *suhB*, and *psd*, were identified as core essential genes critical for the metabolic function of all analyzed bacterial species of the *Gardnerella* genus.

Further understanding these core essential metabolic functions could inform novel therapeutic strategies to treat BV. Machine learning applied to simulated metabolic network flux distributions showed limited clustering based on the sample isolation source, which further supports the presence of extensive core metabolic functionality across this genus.

These data represent the first metabolic modeling of the *Gardnerella* pangenome and illustrate strain-specific interactions with the vaginal metabolic environment across the pangenome.

## Slide 27: Submitted to Nature Microbiology:

Submitted to Nature Microbiology:
"Competition and mutualism in the dysbiotic vaginal microbiome"
Dillard LR¹, Kolling GL², Thomas-White K³, Wever F³, Glass EM², Papin JA²*

## Slide 28: Overview

**Overview**

**Background:**
We now know that there are different species of *Gardnerella* - more than just *G. vaginalis*. But we don't know much about what those species can do and how they are interacting with each other and other vaginal organisms.

**How:**
Use metabolic models generated from genomes to identify:
*   What the *Gardnerella* are eating and producing (metabolic flux)
*   What other health and disease associated organisms are eating and producing
*   Measure the likelihood of how those organisms interact with each other
    *   Are they competing or working together? I.e. competition or mutualistic relationships

Finally, take all that theoretical data and compare it to what was found when these bacteria were grown in a lab (in vitro)

## Slide 29: Conclusions:

**Conclusions:**

**Gardnerella:**
*   Figure - The stars show the 4 most competitive (black stars) strains and the 4 most mutualistic (grey stars) strains
*   Sometimes the same species had one of each
*   Therefore strains may be more important than taxa
*   More genetic diversity among mutualistic (grey) than competitive (black) strains

**Other bacteria**
*   Overall, *A. christensii* and *L. iners* appear to consistently benefit the most from inter-bacterial interactions in silico.
*   Many bacteria are mutualistic in some interactions and competitive in other interactions:
    *   *L. iners*, all *Prevotella* species, *H. timonensis*, *F. vaginae*, *A. christensii*, and some *Gardnerella* strains

**[Image: Phylogenetic tree with star annotations]**

**Legend:**
*   Gardnerella leopoldii
*   Gardnerella swidsinksii
*   Gardnerella 8
*   Gardnerella 6
*   Gardnerella 5
*   Gardnerella 2
*   Gardnerella 1
*   Gardnerella 4
*   Gardnerella 7
*   Gardnerella 3
*   Gardnerella 9
*   Unknown
*   Gardnerella piotti A
*   Gardnerella piotti B
*   Gardnerella vaginalis A
*   Gardnerella vaginalis B

**Annotations:**
*   Black stars are placed next to 4 branches, representing competitive strains.
*   Grey stars are placed next to 4 other branches, representing mutualistic strains.

(Note: The image displays a circular phylogenetic tree with branches colored according to *Gardnerella* species, with stars indicating competitive and mutualistic strains as per the legend.)