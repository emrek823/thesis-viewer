---
source_pdf: "https://drive.google.com/file/d/1sZedWXSmVZFMw_FLQZCeUhPhtPg-Ehej/view"
drive_folder: "Research"
type: research

ingested: 2025-12-28
original_filename: "Market anaysls for bio mfg.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1sZedWXSmVZFMw_FLQZCeUhPhtPg-Ehej/view)

# Market analysis of AI-based drug development of biopharmaceuticals

**25-X10**

Amanda Frånberg, Loris Borsali, Johanna Holmbom, Ida Wennborg Blomberg, Izabelle Norlander

Beställare: Testa Center
Beställarrepresentant: Barbra Bourgade
Handledare: Lena Henriksson

1MB332, Självständigt arbete i molekylär bioteknik, 15 hp, vt 2025
Civilingenjörsprogrammet i molekylär bioteknik
Institutionen för biologisk grundutbildning, Uppsala universitet

---

# Market analysis of AI-based drug development of biopharmaceuticals

**Johanna Holmbom, Ida Wennborg Blomberg, Amanda Frånberg, Loris Borsali & Izabelle Norlander**
**In collaboration with Testa Center**

## Abstract
Artificial intelligence (AI) is emerging as a transformative tool in biopharmaceutical Research and Development (R&D), including for optimizing complex bioprocess parameters such as pH, temperature, dissolved oxygen (DO), and media composition. Traditional process development relies on extensive Design of Experiments (DoE) and iterative trial-and-error experimentation, which is time consuming and resource intensive. This report maps the current landscape of AI solutions available on the market, exploring how AI-driven approaches can accelerate and enhance optimization by leveraging protein sequence and structural data to predict optimal conditions early in development. Our focus areas include sequence-based solubility and expression yield prediction models. It also includes hybrid modeling that combines mechanistic bioprocess knowledge with machine learning, and digital twin simulations of cell culture processes, as well as AI-assisted protein engineering for property improvement. Our findings indicate that AI models can identify critical process parameters and their interactions, enabling more efficient DoE and reducing the experimental workload. For example, virtual bioprocess platforms now allow thousands of condition combinations to be tested *in silico* within minutes, theoretically pinpointing optimal conditions and cutting required wet-lab experiments dramatically. Similarly, hybrid AI models incorporating fundamental biochemical kinetics can overcome limited early-stage data, providing interpretable insights into the input-output relationships of the system. The findings demonstrate that integrating AI tools in early bioprocess development can shorten development timelines, increase yields and product quality, and inform better process design decisions. Notably, while these approaches show great promise, the report also discusses current challenges, such as data availability and model interpretability, and outlines how ongoing advances are addressing them, positioning AI as a valuable component in the R&D toolkit for bioprocess optimization.

**Faculty of Science and Technology**
**Uppsala universitet, Place of issue Uppsala**
**Supervisor: Lena Henriksson**

---

# Table of Contents

1 Introduction
2 Background
2.1 The drug development process
2.2 An overview of the production of biopharmaceuticals
2.3 Parameters
2.4 Machine learning
2.5 Responsible AI
3 Results
3.1 Research method
3.2 Models
3.3 Commercial companies
3.4 Attitudes towards AI in biopharmaceutical development
3.5 Tables of models
4 Discussion
4.1 Issues with data scarcity may be alleviated by data platform integration
4.2 Solubility prediction proves to be well explored
4.3 Prediction of production parameters remains a relatively untapped market
4.4 Protein engineering seems to be the leader in the market
4.5 The future of AI in biopharmaceuticals
5 Conclusions
References
1
2
2
2
3
4
5
6
6
6
9
13
14
15
15
15
16
16
16
18
20

---

# Abbreviation compendium

| Abbreviation | Definition                                                 |
| :----------- | :--------------------------------------------------------- |
| ADMET        | Absorption, Distribution, Metabolism, Excretion, and Toxicity properties |
| API          | Application Programming Interface                          |
| CHO          | Chinese Hamster Ovary cells                                |
| CSV          | Comma-Separated Values                                     |
| CQA          | Critical Quality Attribute                                 |
| DCO2         | Dissolved carbon dioxide                                   |
| DO           | Dissolved Oxygen                                           |
| DoE          | Design of Experiments                                      |
| E. coli      | *Escherichia coli*                                         |
| EMA          | European Medicines Agency                                  |
| FDA          | Food and Drug Administration                               |
| FASTA        | Fast-All                                                   |
| GFP          | Green Fluorescent Protein                                  |
| GDPR         | General Data Protection Regulation                         |
| GNN          | Graph Neural Network                                       |
| GxP          | Good Practice                                              |
| HEK          | Human Embryonic Kidney cells                               |
| LLMs         | Large Language Models                                      |
| LOGO-CV      | Leave-One-Group-Out Cross-Validation                       |
| mAbs         | Monoclonal Antibodies                                      |
| NESG         | Northeast Structural Genomics                              |
| NGF          | Nerve Growth Factor                                        |
| NMR          | Nuclear Magnetic Resonance                                 |
| OECD         | Organisation for Economic Co-operation and Development     |
| OD           | Optical Density                                            |
| PDB          | Protein Data Bank                                          |
| PEG          | Polyethylene Glycol                                        |
| PRISM        | Protein Interactions by Structural Matching                |
| R&D          | Research and Development                                   |
| REST API     | Representational State Transfer Application Programming Interface |
| RFR          | Random Forest Regression                                   |
| RTPs         | Recombinant Therapeutic Proteins                           |
| TPP          | Target Product Profile                                     |
| VH           | Variable Heavy                                             |
| VL           | Variable Light                                             |
| XGB          | Extreme Gradient Boosting                                  |

---

# Machine learning glossary

**Accuracy** - A measure that shows the proportion of correct predictions for a classification model (Saito and Rehmsmeier 2015). It is calculated by dividing the sum of "true positive" and "true negative" results with the total amount of data points. Accuracy is commonly used but can be misleading when working with unbalanced datasets, where support from other measurements can be necessary.

**Artificial intelligence (AI)** - A field within computer science where algorithms are developed to make tasks such as decision making, pattern recognition and predictions automatic (Narayanan, Stosch, et al. 2023).

**Artificial Neural Network (ANN)** - A machine learning model that consists of an input layer, one or more hidden layers and an output layer (Rathore et al. 2023). Each layer is composed of neurons that are fully linked to the neurons in the following layer through weighted connections. To introduce non-linearity and improve learning capacity, activation functions are applied (Kufel et al. 2023). There are also bias terms that act as intercepts. Together these components enable the network to learn complex patterns from input data.

**Area Under the Curve (AUC)** - A single-value metric that summarizes the performance of a classification model and represents the area under the ROC curve. A value close to one indicates a strong class separability (Blog DC 2024).

**Black box** - A problem that arises within machine learning when the internal decision-making process for a model is hard or impossible to interpret for humans (Byer 2022). This results in particularly major consequences within drug development where transparency is vital.

**Classification** - A supervised learning task where the model assigns the input to one out of two or several predefined classes, e.g. soluble/insoluble (Alnuaimi and Albaldawi 2024).

**Cross Validation (CV)** - A technique used to evaluate how well a ML model generalizes to new, unseen data. The data is split into several parts, or "folds", where the model is trained on some of them and validated on the remaining parts (Browne 2000). This helps reduce overfitting and provides a more reliable performance estimate.

**Deep learning** - A subfield of machine learning where neural networks are used in multiple layers, and with specific activation functions (Noorbakhsh et al. 2019).

**Descriptors** - Numerical representations of molecular properties, used as input in ML models (Chemintelligence 2021).

**Digital twin** - A virtual representation of a physical system, e.g. a bioprocess or bioreactor (Shahab et al. 2025). It enables real-time simulations, and can be used to study how protein candidates behave under different conditions in silico.

**Explainable AI (XAI)** - Aims to make more transparent and understandable AI systems by providing explanations for the decisions and predictions that the model makes (Barredo Arrieta et al. 2020).

**F1-score** - This score includes precision and recall and provides a balanced metric for model performance (Blog DC 2024). It is particularly helpful when dealing with imbalanced data sets.

**Feature** - A measurable property or variable within a dataset that can be used as input data for a machine learning model (Chen et al. 2022). The amino acid sequence of a protein could be viewed as a feature.

**Hyper parameters** - Set values that define how a machine learning model is trained (Bischl et al. 2021). These parameters are adjusted to improve the performance of the model, and to avoid overfitting.

**Hybrid learning** - An approach of modelling that combines mechanistic models (physic-based) with machine learning models (Narayanan, Stosch, et al. 2023). By compiling process equations and empirical data, it improves accuracy, generalizability and interpretability, and is especially useful in bioprocessing where complex systems occur.

**Machine learning (ML)** - A branch within AI where computers, based on data, make predictions or decisions without being explicitly programmed for each task (Noorbakhsh et al. 2019).

**Overfitting** - When a model is too well-fitted to the training data, and captures noise rather than general patterns (Ghojogh and Crowley 2023). This leads to poor generalization for unseen data. It is more common with complex models or small data sets.

**Pearson correlation** - Measures the strength of a linear relationship between predicted and true values (Riffenburgh 2006). The coefficient varies between -1 (perfect negative correlation) to +1 (perfect positive correlation),

---

with 0 indicating that there is no linear relationship.
**Precision** - The proportion of true positive predictions among all instances predicted as positive (Blog DC 2024). This is an important measure if false positives carry a high cost, such as unnecessary follow-up experiments.

**Protein Language Models (PLMs)** - Machine learning models that are trained on large amounts of protein data (Tang 2024). The models pick up on patterns within the amino acid sequences that can be used to predict structures, functions and to design new proteins.

**Random Forest** - A combination of multiple, simple decision trees (Breiman 2001). A decision tree is a model that clusters the data by parting it into different sub-categories step by step. Random forest trains each of the decision trees with different, random parts of the training data in order for the combined model to perform better than what a single tree would have done.

**Recall** - The proportion of true positives identified among all actual positive cases (Blog DC 2024). This is an important measure if it is critical to identify all relevant instances, even at the risk of false positives.

**Receiver Operating Characteristic (ROC) curve** - A plot that illustrates the trade-off between true positive rate and false positive rate across different classification thresholds (Blog DC 2024).

**Regression** - A supervised learning task where the model predicts a numerical value, e.g. protein yield or expression level (Lucie-Smith 2020).

**Reinforcement learning** - The model interacts with the environment and receives feedback (reward or penalty) based on the predictions. This learning paradigm is potentially useful for optimizing sequential processes like drug design (Rathore et al. 2023).

**Spearman correlation** - A non-parametric correlation that assesses the monotonic relationship between predicted and true values (Riffenburgh 2006). It is especially useful when the data is non-linear or contains outliers.

**Supervised learning** - The method is trained on labelled data (known input-output pairs) to predict the label of new, unseen data (Rathore et al. 2023).

**Support Vector Machines (SVMs)** - A supervised learning algorithm used for both classification and regression. The method is efficient in high dimensional spaces and is commonly used in bioinformatics to predict protein properties (Cai et al. 2001).

**Transfer learning** - A technique within machine learning where a model, trained on one task, is re-tuned for a similar task (Zhuang et al. 2020). This approach allows the creation of a new model, fitted for the second task, but where less training data is required.

**Underfitting** - When the model is too simple, it can not capture the patterns and underlying structure of the data (Ghojogh and Crowley 2023).

**Unsupervised learning** - The model identifies underlying patterns or clusters within the data, without using predefined labels (Rathore et al. 2023).

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

# 1 Introduction

Biopharmaceuticals and small molecule drugs are examples of two classes of drugs, which differ from each other in their production processes and the sizes of their constituent molecules. Small molecule drugs are made up of chemically synthesized molecules with low molecular weights of 1 kDa or less (Buntz 2023). This is in stark contrast to biopharmaceuticals, which are developed from considerably larger molecules, extracted from cells which have been grown in media (Kesik-Brodacka 2018). This difference in production renders small molecule drugs much easier, and therefore cheaper, to produce (Makurvet 2021). Additionally, as of writing this report, it is estimated that less than 10% of biopharmaceutical drugs that have been in clinical trials ever make it to the market (Bettanti et al. 2024). The financial risks of biopharmaceutical production are only exacerbated by the costs associated with doing trial-and-error experimentation.

Using the exhaustive one-factor-at-a-time method for trial-and-error screenings of bioprocesses, all process parameters but one are held constant in order to be able to track which alterations are correlated to preferred outcomes (Narayanan, Stosch, et al. 2023). This results in thousands of experiments, increasing exponentially with the number of factors needing to be tested.

This raises the question "why should one produce biopharmaceutical drugs?". Put simply, it is a matter of a difference in utility between biopharmaceutical and small molecule drugs. The size and complexity of biopharmaceuticals allow for a more targeted and precise
mechanism of action, which more broadly acting small molecule drugs are unable to replicate (Salib 2023). A key advantage of biopharmaceuticals is their ability to tackle more complex afflictions previously thought untreatable, such as autoimmune diseases like rheumatoid arthritis and certain types of cancer (KesikBro-dacka 2018). As such, finding more efficient means of determining the optimal bioprocessing conditions for a given drug poses as a particularly interesting field of inquiry, with multiple entry points. One such entry point, which we would like to expand upon in this report, is the use of artificial intelligence (AI) for the purpose of predicting the optimal bioprocessing conditions of a biopharmaceutical candidate based on its protein sequence. By extension, such information could grant lab personnel the agency to weed out biopharmaceutical candidates with particularly demanding bioprocessing conditions or low yield expectancy – saving time and resources.

The aim of this project is to compile and analyse the current landscape of AI-based solutions for the optimization of bioprocess parameters at the research and development (R&D) stage of the biopharmaceutical pipeline, at the behest of Testa Center. The following set of questions was used to guide us in our writing process. (i) What data and parameters can be predicted using existing models? Can existing models predict optimal values for bioprocess parameters such as pH, temperature, dissolved oxygen (DO) or medium composition, at the design phase? (ii) Which companies on the global market are currently offering *in silico* drug design services for biopharmaceuticals? (iii) What type of data are these AI models trained on, and what type of data is used as input?

1

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

# 2 Background

## 2.1 The drug development process

Biopharmaceuticals are defined as large molecules, mostly proteins, expressed by living cell expression systems like bacteria, yeast, plant cell cultures or mammalian cell lines (Pande et al. 2025). Biopharmaceuticals are used for pharmaceutical and diagnostic purposes and can be categorized into the following seven categories: antibodies, hormones, enzymes, vaccines, nucleic acids, engineered cells and miscellaneous.

Following the Food and Drug Administration (FDA) regulations, the drug discovery development process comprises the following steps (Commissioner 2020); target identification and validation, hit compound discovery process, lead compound optimization, pre-clinical trials, clinical trials, and finally approval from regulatory authorities. This report examines whether there are any AI models that can be implemented after convincing drug candidates have been developed, but before the drugs undergo pre-clinical trials.

During the Discovery and Development phase, researchers identify potential drug candidates through target identification and validation, where target refers to the human biological compound which the drug is intended to interact with (Hughes et al. 2011). The found targets are then thoroughly investigated to enable a drug discovery process against this compound. The compounds with the desired level of activity towards the target are identified through various screening methods during the hit compound discovery process. Following the hit process, lead compound optimization is performed. Hit identification and lead optimization are important components of the drug design process, which aims to improve compounds to have optimal affinity and ADMET properties. Lead compounds refers to chemical compounds that, obtained from previous steps, show promising activity against the targets. The lead compounds can be viewed as the most favourable hit compounds. The purpose of lead compound optimization is to improve target binding affinity by modifying the structural weaknesses of the compound. Once potential drug candidates are developed, experiments are performed to obtain information about things like the compounds absorbance and distribution, mechanism of action, best dosage, etc.

It is after the lead optimization stage that Testa Center is interested in investigating the current market landscape for AI models that can predict the bioprocessing parameters of the drug candidates. If certain drug candidates are predicted to have poor optimal bioprocessing parameter values, the goal is to screen them out early. This would ensure a more efficient resource allocation since time and resources would be put into developing drug candidates that are optimal for man-ufacturing.

Before any testing in humans can be done, the drug undergoes Preclinical Research so that information about dosage and toxicity levels are obtained (Commissioner 2020). Researchers then decide if it is safe and profitable to proceed with the drug candidate. Testing is then performed using human participants during the Clinical Research. The clinical research consists of four phases where each phase includes a larger testing group and a longer research time period. The results from the previous steps are submitted to the relevant regulatory body, which determines if the drug can be introduced to the market. After approval, the drug continues to be monitored for any unexpected side effects.

The process to discover and introduce new drugs to the market is long, costly and uncertain (Bettanti et al. 2024). Less than 10% of drugs that reach phase I clinical trials will get a final approval by regulatory authorities like the American FDA or the European Medicines Agency (EMA). For a pharmaceutical that gets approved by the authorities, the estimated time for the entire process will have taken 10 - 15 years with a cost of over two billion USD.

## 2.2 An overview of the production of biopharmaceuticals

The production process of biopharmaceuticals is divided into both upstream and downstream processes (Sekhon 2010). The upstream process encompasses cultivating a viable and productive cell culture that will express a desired recombinant protein – the biopharmaceutical product. Bioreactors are mostly used when the biopharmaceutical production is large-scale (Zingaro et al. 2013; Jozala et al. 2016). The choice of expression system depends on the desired recombinant protein and its complexity, where a protein with post-translational modifications would need an eukaryotic expression system like yeast cells or mammalian cell lines. Furthermore, there are some different approaches to growing the cell culture in the bioreactors. The process can follow a standard batch, which is the simplest production process where all necessary components are added before the start of a bioreactor cycle; fed-batch, where medium is added throughout the process; or continuous, where new medium is added at the same rate as old solution is removed. Additionally, critical production parameters like pH, DO and medium, are set during the upstream process. Here, the wish is for an AI model to have the ability to predict the optimal parameter values that maximize expression yield and/or solubility.

The downstream process encompasses the purifying and filtering of the medium through various steps until a final biopharmaceutical product is isolated (Jozala et al. 2016). This process is generally divided into the three steps: initial recovery, purification and polishing. In the initial recovery phase, the protein of

2

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

interest is separated from the supernatant existing in the culture broth. Common separating techniques involved in this stage include lysis, centrifugation and filtration through methods like sedimentation, floatation and chromatography. The following stage is purification, where contaminations from the cell culture and other sources are removed. This step is vital for achieving a high yield, making it a critical step in the overall manufacturing process. Chromatography is often used during the purification due to it being highly successful in the isolation of proteins. The last step is polishing and the purpose is to remove unwanted structures of the protein, which may have been created because of the previous steps. Finally, the remaining substance should be a biopharmaceutical that meets the yield and purity requirements set by the industry and regulations. AI could potentially predict which protein sequences are the easiest to purify through, for example, chromatography, thereby enabling early screening out of drug candidates where higher yield is more difficult to achieve.

## 2.3 Parameters

The outcome of wet-lab experiments in bioreactors depend on many different process parameters (Hamilton 2024). Hamilton Process Analytics mentions pH, temperature, dissolved oxygen and carbon dioxide (DO and DCO2), as well as medium nutrient and metabolite composition as some of the most common process parameters to monitor and manipulate. Such production related parameters greatly impact performance parameters such as solubility and, by extension, expression yield. The design of experiments (DoE) is further complicated by the interaction of production parameters, who influence each other in a non-linear fashion throughout the bioprocess. As such, slight variations in their values can have disastrous consequences for an experiment. It is important to differentiate between production parameters and performance parameters, with variations in the former directly affecting the output of the latter.

### 2.3.1 Production parameters

**Expression system**
Depending on what the goal of the biopharmaceutical is, one can choose different expression systems i.e cell types (Kavoni et al. 2025). Two very common cell types used for producing biopharmaceuticals are Chinese Hamster Ovary cells (CHO) and *Escherichia coli*, (*E. coli*). Both have their advantages and disadvantages. CHO is the most commonly used mammalian cell and currently 80% of all monoclonal antibodies (mAbs) and recombinant therapeutic proteins (RTPs) are produced using CHO. There are many reasons for this, one and the most pivotal being that CHO cells are eukaryotic and have a lot of systems in common with human cells, e.g. post translational processes. Another commonly used eukaryotic cell type is Hu-man Embryonic Kidney cells (HEK), or more specific HEK293 (Evitria 2022). Compared to CHO cells, HEK cells can more accurately mimic human glycosylation patterns, whereas CHO cells can only produce glycosylation that is compatible. HEK cells are also easier to edit. However, HEK can be more complicated to scale up for larger manufacturing. Even though they have advantages, both CHO and HEK are more complex to engineer, more difficult to produce and have a slower growth rate than *E. coli* (Xu et al. 2014). However, *E. coli* also has disadvantages (İncir and Kaplan 2024). Being prokaryotic, they do not possess the necessary post-translational processes that exist in human cells. This results in incorrect modifications and functions.

It is worth remembering that different cell types require different optimal environmental conditions.

**Medium nutrient and metabolite composition**
For the cells to reach the best quality and quantity it is important to have the perfect medial nutrient (Rigaku 2024). Perfect medium means the environment which results in the most effective cell growth, best quality and highest yield. It is important to understand that each component in the medium affects the cells differently and can be quite complex. Components are usually a mixture with amino acids, salts, sugars and vitamins. Without the optimal medium, the probability of obtaining definite and reproducible results is reduced (Khuat et al. 2023). Mathematical models are often used today when calculating the components in the medium, however the existing equations might be too simple if a lot of components in the medium need to be adjusted. This is where machine learning can be utilized.

**pH**
pH is one of many crucial parameters in the medium, affecting both the upstream and the downstream process (Pharma 2025). Solubility, stability, efficacy, yield and growth rate are just a few characteristics that are heavily affected by pH. If optimal pH is not maintained, there is an increased risk of degradation. It can be extra difficult to control the pH since organisms often affect it during different stages in their metabolism (Grosch 2023). It has been shown that pH affects multiple attributes for the proteins produced and is very important for a good end product (Walsh et al. 2022). For mammalian cells, such as CHO cells, the pH for optimal growth is around 7.0 – 7.7 (Wells 2023).

**Temperature**
The optimal temperature differs based on the type of expression system and whether it is growing or expressing proteins (Reuveny et al. 1986). For the expression of mAbs expressed in eukaryotic mouse hybridoma cells, lowering the temperature from the optimal 37 °C to just 34 °C was shown to prolong cell viability, yet reduce the expression yield. Biopharmaceuticals are ex-

3

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

tremely easily influenced by temperature, which might lead to denaturation or aggregation, affecting the final drug’s efficiency and safety (Spotsee 2024). When using *E. coli* as expression system, the growth and expression phase may have different optimal temperatures.

**Dissolved oxygen and carbon dioxide (DO and DCO2)**
Dissolved oxygen (DO) refers to the ionized oxygen freely dissolved in the solution (sbi 2025). Most cells in biopharmaceutical processes need oxygen to work and perform cellular activities. However, how much oxygen needed is different for different cell types. The biopharmaceutical process can easily get slowed down if the DO-level falls under a certain threshold, as the cell's metabolism worsens. It is therefore crucial to know the optimal DO-level and keep it steady.

Similarly, it is important to keep track of the dissolved carbon dioxide (DCO2) levels (Luftman 2022). Too high CO2 levels can have a negative impact on metabolic processes and affect pH levels, both intra- and extracellular. For smaller production volumes, the DCO2 is fairly easy to measure. However, as the production volume and surface to volume ratio increases, so does the difficulty to accurately measure the DCO2 levels. This is something to keep in mind when working with large volume bioprocesses.

### 2.3.2 Performance parameters

**Solubility** is a critical parameter impacting the developability of a biopharmaceutical (Sormanni, Amery, et al. 2017). This affects the developability through formulation feasibility, production yield and overall manufacturing cost. Insufficient protein solubility can lead to aggregation which can hinder a drug candidate’s ability to be further developed and manufactured. It is listed as a main reason behind the high development costs of antibody drugs (Perchiacca and Tessier 2012). For an antibody drug to be effective, it usually needs to be formulated at high concentrations for delivery. If a biological drug is not sufficiently soluble, it may precipitate or become too viscous at the concentrations needed for an effective dose, making formulation and delivery challenging. Furthermore, solubility correlates with expression yield, as proteins that aggregate or are insoluble tend to produce less viable product (Inc 2023). During production, proteins with poor solubility can form insoluble aggregates, causing product loss and demanding larger-scale processes to meet the demanded yield. Therefore, predicting and optimizing solubility early helps ensure that only candidates with adequate developability advance into development, thus improving success rates and lowering costs (Zhang et al. 2023).

## 2.4 Machine learning

Choosing the right machine learning approach for a specific task is a decision that should be based on several factors (Rathore et al. 2023). One of the main factors, especially within drug design, is data availability. Supervised machine learning is the preferred choice of learning paradigm if there is a lot of labeled data available. The reason being that supervised learning requires a large amount of training- and validation data, both labeled. Further, supervised learning is a good approach when the goal is to predict a specific outcome, for example expression level or solubility. Even though the supply of public, labeled protein data can be lacking for different, specific tasks, supervised learning is the most common approach for the early stages of drug design.

There are multiple subcategories within supervised learning that serve different purposes (Barredo Arrieta et al. 2020). Again, it is important to consider several factors when settling for a certain branch. Interpretability and transparency is vital within drug design, meaning that a simpler model, or using Explainable AI (XAI), is preferred. A simpler model also helps avoid overfitting, and requires less computational power. However, a more complex model better captures the intricacies in the data which can be useful when optimizing multiple parameters that affect each other.

In drug design and bioproduction, two commonly used methods are Protein Language Models (PLMs) and Support Vector Machines (SVMs) (Cai et al. 2001; Tang 2024). For complex simulations, neural networks and deep learning can be applied (Rathore et al. 2023). Another concept that is widely used is hybrid learning, which incorporates the mechanical dimension of the proteins for a better chance of predicting the true outcome (Narayanan, Stosch, et al. 2023).

4

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

## 2.5 Responsible AI

Responsible AI is a framework applied for guaranteeing that AI systems are used in an ethical and reliable way (Valliani 2024). It includes principles such as fairness, reliability, privacy, security, accountability and transparency (Narayanan, Stosch, et al. 2023). When considering which models and systems to incorporate into a workflow, it is important to avoid fixating solely on technical performance. A model that lacks ethical tenability may cause more harm than good.

**Fairness and reliability**
Fairness in the context of AI means that models do not favour a certain scenario, input or outcome (Ray 2024). This might seem trivial when working with biopharmaceuticals, as the AI is not directly applied in a social context. However, it is important to keep in mind that the final consumers of the drugs are humans with different backgrounds. This goes hand in hand with reliability, which in this context implies that the systems should function well in all conditions, including the ones that it was not originally intended for. Fairness and reliability are equally as important to be considered when training the models. The data used to train the model has to be representative for all possible scenarios, as not to create a bias.

**Privacy and security**
When offering an AI model to customers, it should be clear how their data is handled by the model (Russinovich 2024). As an owner of an AI model, it is crucial that customers feel confident their data will not be leaked to third parties. Any breach of trust could lead to loss of reputation and credibility. To minimize such risks, it is essential to have a clear understanding of where the data used by the AI is stored and who has access to it. Many countries also have to follow General Data Protection Regulations (GDPR), which are primarily intended to protect personal data (GDPR 2025). Even if the focus is not on personal data, sensitive customer information may still be involved and must be handled accordingly.

**Accountability**
Accountability in the context of AI can have varied meaning. Who is accountable if the model puts out something inaccurate or biased? Who is accountable if the results are used in a harmful way? A clear framework for addressing these types of questions is necessary to prevent potential disputes and distrust in the future. According to the Organisation for Economic Co-operation and Development (OECD), a platform for informing about trustworthy and human-centered AI, those offering AI services should evaluate the risks with their models in every phase (OECD 2025). This will in the end lead to a better connection to the customer, overall higher quality and better solutions. When companies offer their AI to customers, a clear regulatory framework of who is responsible for what is needed.

**Interpretability**
It should always be possible to understand how an AI model works and what the decisions it makes are based on (Buhmann and Fieseler 2021). This includes factors such as the data that is fed into the model and the "hidden layers" and functions that are made to reflect the patterns within data sets. Interpretability is especially important in drug development, where decisions can have major consequences. To ensure such understanding, deep learning models are best avoided and instead explainable AI should be applied (Rai 2020). Furthermore, interpretability is a key principle seen from a regulatory perspective, where authorities require decisions regarding pharmaceuticals to be traced and motivated (Research 2025).

**Accessibility and sustainability of AI in bioproduction**
The transition into using AI in biopharmaceutical production requires the models to be accessible to people without a background in data science and AI model construction. When evaluating companies advertising AI services, oen should keep an eye out for companies offering extensive and continuous technical support throughout the entire duration of a project as well as a user-friendly interface with minimal or no coding requirements on the user end. Applying efficient AI technologies to optimize bioprocesses would naturally lead to the reduction of both time spent performing experiments and associated waste. Waste reduction has positive implications for the sustainability of a bioprocess. The OECD estimates the environmental impact of training and using AI using indicators such as energy consumption, greenhouse gas emissions and water consumption (OECD 2022). According to their review, energy demands and greenhouse gas emissions related to AI use have stagnated at around 1% and 1.4%, respectively, of the global total. While concrete numbers for water consumption remain elusive, its impact may vary depending on the water availability of the computer's geographic location.

5

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

# 3 Results

The following results include 15 AI models that were deemed to have some relevance to this project. Five of these models were open while ten were commercial. For a brief overview of all the collected models, see Table 1 and Table 2 in 3.5 Tables of models. Out of the ten commercial companies, six were already partnering with prominent pharmaceutical manufacturing companies. Finding AI models that could predict bioprocessing parameters at an early stage of the drug discovery process proved to be quite difficult. The developers of PERISCOPE-Opt, as well as companies AnalysisMode and Katalyze AI, however, reported being able to predict optimal bioprocessing conditions using varying inputs (Packiam et al. 2022, www.katalyzeai.com).

Solubility prediction is one of the most well charted areas of AI-based developability of drugs and the market is well saturated with different academic and commercial tools. There are sequence-only models like CamSol Intrinsic which have been in use for over ten years while newer approaches like solPredict can screen lots of antibody sequences in short amounts of time (Sormanni, Aprile, et al. 2015; Feng et al. 2022). For candidates with a 3D model, there are structure aware add-ons. Both CamSol Structurally Corrected and AggScore can highlight patches in the surfaces of proteins that promote aggregation. The models that predict solubility are also included in the results since solubility is an important performance parameter that directly correlates with formulation feasibility, production yield, etc., and low solubility can lead to inefficient manufacturing. Solubility is thus an excellent parameter to compare when choosing which drug candidates to continue further developing.

Several models (Aizon AI, DataHow, Invert, and Katalyze AI) were found to be able to optimize bioprocessing parameters during the manufacturing stage (www.aizon.ai, www.datahow.ch, www.invertbio.com, www.katalyzeai.com). These models were included in the results because they provide an insight into the bioprocessing parameters and help identify optimal bioprocess parameter values. This information can serve as a basis for making decisions about which candidates are worth pursuing further, where candidates with cumbersome optimal bioprocessing parameter values can be filtered out.

Many of the commercial companies (Ardigen, Cradle, Generate:Biomedicines, and Neoncorte Bio) feature AI-enhanced protein engineering (www.ardigen.com, www.cradle.bio, www.generatebiomedicines.com, www.bio.neoncorte.com). While the purpose of this project was to find models that predict bioprocessing parameters for efficient production, an alternative to effectivize the production could be to engineer the protein. By modifying the protein through *de novo* sequencing or inserting mutations, it is possible to
generate a protein with desirable production parameters, and thus prevent resources such as labour and lab materials from being used on drug candidates with inefficient production.

## 3.1 Research method

In order to find suitable AI models for the stage of drug discovery targeted in this study, we used published article databases and the search engine Google. We used keyword-based searches like “parameter optimization”, "bioprocessing optimization", in combination with "AI models" to find articles as well as commercial AI models. If the websites or published papers of the AI models claimed that the models could be used to increase yield, predict protein properties, and model production parameters to optimize protein production, the model was selected for further investigation, earning it a spot in our results section. A common problem that was encountered was the lack of detailed information on the AI models website, which did not contain enough information about how the AI models worked. Information that was missing includes what AI models were utilized, what inputs and outputs the models took, and concrete evaluation metrics of the AI models. The problem with insufficient information was only present with the commercial companies targeting pharmaceutical companies, whereas AI models developed by academic groups had thorough publications about their models. To address this problem, we reached out to the companies through email. The companies that responded scheduled a shorter meeting with us, where they broadly confirmed that their models were able to optimize the bioprocessing parameters and what types of data their models could be trained with.

## 3.2 Models

### 3.2.1 PERISCOPE-Opt

PERISCOPE-Opt was implemented as a free-of-charge web based tool for the prediction of optimal bioprocessing conditions and corresponding expression yield of periplasmic proteins using *E. coli* as an expression system, at shake flask scale (Packiam et al. 2022). It should be noted that the website hosting this tool currently seems to be down, and results obtained at shake flask scale cannot be applied directly to predictions made at bioreactor scale. However, the elaborate description of its design and training is still deemed a valuable source of information about the framework behind this type of machine learning based tool. The accuracy of PERISCOPE-Opts predictions suggests that the expression yield of periplasmic recombinant proteins in *E. coli* heavily depends on structural features of the protein, such as its amino acid composition and length, as stated by the authors. The authors also attribute the accuracy of this ML framework to the diversity of the training data, as well as the thorough feature engineering performed in order to train the

6

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

model. The issue of a lack of relevant and retrievable data is brought up as a considerable limitation of the model.

The proteins are guided to the periplasmic space of the *E. coli* by the addition of various signal peptides to the N-terminal. The reasoning behind the decision to bring the proteins to the periplasmic space was that this was deemed easier to access for retrieval than the cytoplasm, as well as the periplasm showing preferable folding conditions for proteins containing di-sulphide bonds.

**Inputs and outputs**
PERISCOPE-Opt takes the protein sequence of the protein being expressed, coupled with the sequence of the signal peptide, as input. It outputs predictions for the optimal yield of the protein, as well as the production parameter values used to achieve it.

**Model architecture**
The process of predicting a proteins expression yield is composed of two stages. An initial binary Extreme Gradient Boosting (XGB) classifier (XGB1) classifies the protein as either medium, between 0.5 mg/L and 50 mg/L, or non-medium expression level. If the expression is predicted to fall outside this interval, a second XGB classifier (XGB2) will categorize the expression level as either high, >50 mg/L, or low, <0.5 mg/L. These predictions funnel the protein into the final machine learning model, corresponding to its predicted expression level. Proteins that were predicted as having medium or high expression levels were fed into one of two random forest regression models (RFR-high or RFR-medium), whereas low expression level proteins were fed into a support vector machine regression model (SVR-low).

**Model features**
In total, 11 985 features were divided into four subgroups. Group 1 is made up of 149 features that relate to the structural, physical and chemical properties of each protein and signal peptide combination, as well as the amino acid sequence. Group 2 contains the occurrences of dipeptides, totaling 800 features. Group 3 is made up of 11 026 features which cover the interactions between features in group 1. Lastly, group 4 contains 10 features describing fermentation parameters and their interactions.

The features chosen to serve as the basis of the predictions for both the classification and regression tasks were chosen due to them proving highly influential to the predictions. Comparatively unimportant features were discarded, leaving features primarily from group 1 and group 4, and select features from group 3. Notably, all features from group 2 were discarded due to low importance. The predictions were highly influenced by the occurrence, occurrence frequencies, and the maximum occurrence/occurrence frequencies
of certain amino acids. Other structural features which were shown to be important for the prediction tasks were the occurrence frequencies of aromatic, aliphatic and hydrophilic groups, respectively. As for which of the features in group 4 had the largest impact, the classification task was most affected by the temperature, as well as the interaction of OD and time (OD×Time); while the regression task needed almost all group 4 features to accurately predict the expression yield.

**Model evaluation**
After training, validating and ultimately testing the constituent models, XGB1 and XGB2 were found to perform with 82.14% and 85.71% accuracy, as well as 75% for every other performance metric (F1-score, precision, recall and Area Under the Curve (AUC)). The accuracy of PERISCOPE-Opts predictions were deemed to be 75%.

### 3.2.2 solPredict

solPredict is a deep learning model developed specifically to predict the apparent solubility of monoclonal antibodies. (Feng et al. 2022) It takes the amino acid sequence, in Fast-All (FASTA) format, as input and estimates the Polyethylene Glycol (PEG) concentration at which each antibody begins to precipitate when formulated in a histidine buffer at pH 6,0, which is a standard buffer in early formulation. The model works by first feeding each heavy and light chain sequence into a transformer language model called ESM-1b, which is pre-trained on around 250 million proteins. The paired dimensional embeddings are then concatenated and turned into a single solubility value, the PEG concentration at which the antibody begins to precipitate in is 0.4 M L-histidine buffer at pH 6.0.

**Inputs and outputs**
The model takes light- and heavy-chain FASTA sequences of an antibody as inputs. The output is a single numerical value, the PEG concentration at which the antibody begins to precipitate in is 0.4 M L-histidine buffer at pH 6.0.

**Model evaluation**
The original study used 220 IgG antibodies for training and evaluated on an independent 40-antibody blind test, the model achieved a Pearson correlation = 0.84, Spearman correlation = 0.86, R2 = 0.69 and RMSE = 4.4 PEG%. It performed equally well on lgG4 and lgG1 subclasses.

**Commercial use**
While solPredict is not marketed as a finished product, the full code has been released on GitHub so organisations can retrain or fine-tune the model with their own labelled antibodies.

7

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

### 3.2.3 CamSol

CamSol is a method split in five algorithms that can all be used on their own or combined to enhance protein variants through rational design (Lab 2025).

**Model architecture**
Firstly, a sequence based predictor called CamSol Intrinsic assigns every amino acid residue a numerical score that represents contribution to solubility and then produces a single overall score. The residue profile pinpoints regions that have poor solubility and the global score lets the users rank different protein variants. The algorithm lets users screen against large protein libraries for solubility. When a 3D model is available, a second algorithm called CamSol Structurally Corrected can adjust the profile by weighting residues according to solvent exposure and spatial proximity. Mapping this onto the molecular surface of the protein highlights low solubility patches that can cluster and cause aggregation. Finally, a design module called CamSol Combination Automated Design scans the surface map, created by the second algorithm, to propose substitutions or insertions of certain amino acids. Mutations at these sites will have maximum predicted effect. Together, they provide a path from high-throughput library screening to structure-guided optimisation of problematic regions. CamSol also provides two more models related to solubility. CamSol-PTM predicts solubility of peptides and proteins containing post translationally modified and/or non-natural amino acids based on sequence. CamSol Intrinsic pH-dependent is a model which predicts protein solubility and generic aggregation propensity as a function of pH.

CamSols sequence derived solubility score lets the user sort through extensive sets of closely related protein variants by their predicted solubility. In practical terms, after *in vitro* antibody discovery techniques, it yields dozens of antibody clones with similarly strong antigen binding. The score shows which of these near identical sequences are most likely to remain soluble. By showing a solubility hierarchy, CamSol can show the user the variants with the best developability profile, which cuts down the number of experimental assays needed for final candidate selection.

**Model evaluation**
There are two independent experimental studies that measure the quantitative accuracy of CamSols solubility score. In the first, Sormanni et al. engineered 17 single domain antibody variants that differed one to three point mutations and measured how much monomeric protein remained after high-concentration incubation and size-exclusion chromatography. The sequence-based CamSol intrinsic scores for the variants showed a Spearman correlation of 0.86 (Sormanni, Amery, et al. 2017).

In a second study, the same group tested nine closely
related full-length IgG candidates obtained from an Nerve Growth Factor (NGF) phage-display study. Using only Variable Heavy (VH) and Variable Light (VL) sequences, CamSol intrinsic scores correlated Pearson R = 0.92 and Spearman ρ = 0.93, with the midpoint of PEG-induced precipitation (PEG) (Sormanni, Amery, et al. 2017).

**Commercial use**
CamSol is licensed by Cambridge Enterprises and is in PipeBios developability toolkit. Binaries and API available. For academic use you have to register.

### 3.2.4 Aggscore

AggScore is a structure-based developability metric introduced by Sankar et al. (2018). The method examines a proteins solvent-accessible surface and returns a single numeric score: lower AggScore values indicate fewer large hydrophobic or charge-imbalanced surface patches and a lower tendency to aggregate or precipitate (Sankar et al. 2018).

**Inputs and outputs**
This model takes any 3D model of the protein, like crystal, cryo-EM, Nuclear Magnetic Resonance (NMR) or Protein Data Bank (PDB) file. The primary output is a single numeric AggScore, this can be used to rank candidate molecules. The secondary output is a colour coded surface map that reveals aggregation "hot patches" (Sankar et al. 2018).

**Model features**
The algorithm turns the molecular surface into patches and, for each patch, quantifies hydrophobic area, electrostatic complementarity and patch size. These patch descriptors are combined in a regression model that was parameterized on an experimental training set (Sankar et al. 2018).

**Commercial use**
AggScore is distributed by Schrödinger Inc as part of BioLuminate protein engineering platform. Because the underlying code is proprietary, the algorithm is accessed through BioLuminate rather than as open-source software.

### 3.2.5 SoluProt

SoluProt is a sequence-based model that estimates how likely a recombinant protein will be produced in soluble form in *E. coli*. It was designed to help researchers triage large sets of construct designs before cloning and fermentation, thereby saving time and resources during hit-to-lead optimisation (Hon et al. 2021).

**Inputs and outputs**
As input, SoluProt takes a FASTA sequence of 20

8

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

amino acids. For its primary output, there is a probability score from 0 to 1. Higher values indicate a greater chance of recovering the protein in the soluble fraction after expression and lysis. As a secondary output, the user receives a Comma-Separated Values (CSV) file listing all input sequences with their predicted probabilities, enabling rapid ranking of many structures (SoluProt 2025).

**Model architecture**
SoluProt uses a XGBoost gradient-boosting machine trained on approximately 69 000 expression trials extracted from the TargetTrack database, encoded with 96 sequence-derived features such as amino-acid composition, predicted secondary structure, disorder content, hydrophobicity indices and charge descriptors. Feature selection and model hyper-parameters were optimised by five-fold cross-validation to maximise balanced accuracy. The standalone Python implementation can be retrained on user-specific data, and a Representational State Transfer Application Programming Interface (REST API) is offered for pipeline integration (Hon et al. 2021).

**Model evaluation**
On a balanced independent test set of 4 000 proteins curated from the Northeast Structural Genomics (NESG) database where none of which overlapped with the training data, SoluProt achieved 58.5% overall accuracy and an area-under-the Receiver Operating Characteristic (ROC) curve of 0.62.

**Commercial use**
The web server is free for academic use. For commercial usage, one can obtain a licence from Enantis.

## 3.3 Commercial companies

### 3.3.1 Aizon AI

This company focuses on pharmaceutical manufacturing and promises results such as yield improvement, deviation reduction and product quality through their AI powered software, designed with Good Practice (GxP) compliance integrated from the start of the process (www.aizon.ai). The three AI-powered solutions that Aizon offers are Aizon Execute, Aizon Unify, and Aizon Predict. Aizon Execute is an electronic batch recording that streamlines and optimizes manufacturing processes by reducing manual input. Aizon Unify offers digital batch reviews, real-time process monitoring, and batch comparison analytics. It identifies the correlations between critical process parameters and critical quality attributes, supporting continuous process improvement. Aizon Predict predicts production parameter values to achieve yield optimization, Critical Quality Attribute (CQA) optimization and deviation reduction.

**Inputs and outputs**
It is not clear exactly what Aizon Als models take as inputs. We reached out to them but did not receive an answer. The output of their models indicate the production parameter values which optimize yield, yield optimization, CQA optimization and deviation reduction.

**Aizon case**
In one case, a leading pharma company with a declining yield and high variability used Aizon Unify to digitally map relevant cause - effect relationships, which gathered over 3 billion data points (Aizon 2025). Using all the data, a root cause in yield variation could be identified. Aizon Predict was then applied to optimize parameters during the downstream process, which increased the average yield over a time span of three months.

### 3.3.2 Ardigen

Ardigens platforms aid in key stages such as hit screening, lead optimization and *in silico* filtering methods (www.ardigen.com). Developability properties of the protein, such as chemical stability, hydrophobicity, solubility and thermostability, are taken into consideration when performing hit screening for biopharmaceutical discovery. Early evaluation of these properties increases the likelihood of proceeding with a manufacturable protein. Ardigens lead optimization offers the ability to improve properties like affinity and activity by applying Large Language Models (LMMs) trained on large protein datasets. Additionally, custom AI models can be created with client-provided data ardigen_antobody_2024. If, for example, one would like an AI model that can predict bioprocessing parameters, one would have to provide Ardigen with sufficient manufacturing and bioprocessing data before a model can be created for future manufacturing.

**Inputs and outputs**
It is not clear what inputs and outputs Ardigen takes and produces. However, for the case above it suggests that the AI model based its optimization based on amino acid sequence, making it a possible input.

**Model evaluation**
In one case, the team at Ardigen were to improve an internal AI tool that predicts the yield of an antibody-like molecule based on the amino acid sequence (Ardigen 2025). Domain knowledge was applied to encode the amino acid sequences and Protein Interactions by Structural Matching (PRISM), an Ardigen exclusive technology based on LLMs, was used. After three months, the model achieved 20% more accurate yield predicting performance compared to the clients previous model, and a Spearman's correlation score of ρ = 0.72-0.73.

9

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

### 3.3.3 Cradle

Cradle focuses on helping customers working in R&D to optimize proteins faster and cheaper (Cradle 2024). Cradles generative machine learning models use the experimental data provided by the team to better adapt the model for protein design. If it is possible to provide data about the correlation of protein sequence and later bioprocessing parameters, then one can use Cradles generative AI model to, at an early stage, evaluate important bioprocessing parameters of drug candidates. The type of data is important, and for the model to perform well, the provided data needs to be widely distributed. If, for example, one wants to engineer a protein to have a high thermostability, performance parameters that cover a wide range of the proteins fitness landscape would still need to be provided. The data will then be used to train the model to recognize the sequences that are correlated to better protein performance.

Once data is imported to Cradle, sequences can be generated and the user can decide the amount of mutations and where mutations can occur in the sequence (Cradle 2024). The sequences are then expressed and tested in the lab and the results are uploaded in Cradle to improve the machine learning model. Iterations of this process are then performedaccording to the goals of the customer.

**Inputs and outputs**
The model takes all kinds of experimental data points as input. According to Cradles documentation, they ask the user to provide as much data as possible, including negative data, raw data and data replicas by the user(Cradle 2024). Cradle will then generate protein sequences as outputs. These protein sequences are then intended for validation through wet-lab testing (Cradle 2024).

### 3.3.4 Chroma by Generate:Biomedicines

Generate:Biomedicines offers a platform that designs and engineers protein sequences based on specific properties and functions (www.generatebiomedicines.com/platform). This company uses a generative AI model called Chroma to generate novel protein sequences. While Chroma does not currently have the ability to rank drug candidates at an early stage based on favorable bioprocessing parameters, it is capable of biasing the design towards compounds more likely to behave well in manufacturing environments. After the protein sequences are generated and the proteins are simulated *in silico*, the traits of the proteins are measured and the collected data is then used by Chroma to refine the protein and improve its qualities.

**Inputs and outputs**
It is not clear from the website what Chroma takes
as input, but the website mentions that the generated protein sequence can be modified upon users request (www.generatebiomedicines.com). It is therefore assumed that the model accepts user design instructions as inputs. Chromas output is a generated protein sequence along with its 3D structure.

**Model architecture**
Chroma combines a novel diffusion process, GNNs and a smart sampling method to generate accurate three-dimensional protein structures (Ingraham et al. 2023). This combination of models allows for programmable generation of proteins based on biophysical properties like symmetry, shape, protein class and textual inputs.

Unlike standard diffusion models, where noise is added randomly, Chroma uses a correlated noise process. This choice is motivated by the fact that proteins and their residues are not random. Instead, the "correlated noise" of this diffusion process of Chroma takes statistical properties of polymer ensembles into consideration. This diffusion process then reverses this structured noise, resulting in more correct outputs. Chroma also scales well for large proteins because of the use of Graph Neural Networks (GNNs). It can efficiently model large protein complexes with over 3000 residues. Additionally, Chroma offers control of the sampling randomness to allow for more precise, but less diverse structures, or less precise but more diverse structures, based on what the user wants.

**Model evaluation**
An experimental validation of Chroma was conducted by Ingraham et al. to assess its ability to generate stable protein designs. The evaluation involved three steps: generating protein backbone structures with high precision and high quality structure, designing corresponding amino acid sequences using Chroma design network, and a laboratory evaluation of a subset of sequences.

A total of 310 proteins were generated. 172 of the subset of unconditional proteins, of length 100 - 450 amino acids, showed higher solubility than a negative control in a split-Green Fluorescent Protein (GFP) screen. This was also true when generating 96 unconditional protein sequences that were between 100 - 950 amino acids. Protein purification was then performed on the top 10% of the best performing proteins in regards to solubility, and most of the proteins showed a stable folding structure which matched with the *in silico* generated structures.

An additional 42 proteins were generated using structural conditioning and 40 of the proteins performed better than the negative control. One protein from each secondary-structure category was purified and confirmed to match with Chromas design intent. The proteins were also found to be thermally stable with melting points ranging from 64-78. Based on these

10

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

results, Ingraham et al. concluded that Chroma is capable of generating stable proteins with favorable biophysical properties.

### 3.3.5 DataHowLab by DataHow

DataHow offers multiple AI-based services related to bioprocessing, with one of them being bioprocess development and optimization for the purpose of reducing trial-and-error experiments (DataHow 2024). Models within the DataHowLab platform are trained using hybrid learning, in order to make the most of the available data, and bioprocesses are improved by optimizing different subsets of parameters in succession. This is achieved by incorporating both human insight and decision making, known as active learning, and knowledge gained from previous projects, known as transfer learning. Through their AI-assisted DoE methodology, they claim to increase bioprocess insight and reduce the number of trial-and-error experiments by up to 80%. The models are described as "empty shells", molding to the data provided in order to make high fidelity predictions based on proprietary input data from previous runs. It is unclear what machine learning architecture makes up the empty shells.

One of DataHows services includes creating a digital twin of the customers bioprocess. By partnering with Genedata, a comprehensive data and workflow platform, the process of collecting and converting bioprocess data for the training of various AI modeling tools can be considered streamlined (Genedata 2022).

**Inputs and outputs**
DataHowdoes not clearly state what kind of inputs and outputs their AI models receive and generate. However, the output is intended to be able to serve as a suggestion for bioprocess optimization.

### 3.3.6 ExPreSo by Leukocare

ExPreSo can suggest inactive ingredients based on characteristics for the protein and desired qualities for the final product (Vidal-Henriquez et al. 2025). Inactive ingredients are compounds added to aid with properties like stability and compound bindning, and do not affect the drug's curative effect (Drugs 2025). This leads to fewer tests being done by hand and therefore a lot of time, economic costs and risks associated with experiments can be reduced. The company that offers ExPreSo is Leukocare and experts in sterile drug product development services.

ExPreSo consists of many machine learning algorithms, where each algorithm can predict the presence or absence of an inactive ingredient in a stable biopharmaceutical formulation. It is also supported by AlphaFold2 and Protein Language Models (PLMs).

11
**Inputs and outputs**
The model takes inputs such as the drugs protein sequence and information about the Target Product Profile (TPP), for example formulation type (liquid, etc.), pH, and the desired concentration of the drug substance. As output the model gives percentages which represent the likelihood for an inactive ingredient to be part of the final stable drug formulation. Today, ExPreSo can predict up to nine inactive ingredients.

**Model features**
ExPreSo can be done either "fast" or "interpretable”. If the model is run to be fast, then features from 3D-modeling are excluded. This is because it has to incorporate mechanisms for molecular modeling, which makes the model slower. Instead, it uses features from sequence embeddings and di-peptide frequencies, which is extremely fast. This output, however, is very hard to interpret for the user when studying characteristics importance. If interpretability is desired instead, sequence embeddings and dipeptide frequencies are excluded and features are derived from 3D protein modeling.

**Model evaluation**
ExPreSos ability to predict is validated with Leave-One-Group-Out Cross Validation (LOGO-CV) and a blind test validation. For both tests the AUC was measured for both ROC and Precision-Recall (PR). For ten experimental runs, all with different random seed values, it showed a high predicted power (ROC-AUC > 0.7) for 5/9 inactive ingredients in the LOGO-CV.

### 3.3.7 Invert

Invert offers a platform for collecting and managing bioprocess data, as well as pre-built AI models of unknown architecture, which can be trained on the customers own data for the purpose of bioprocess optimization (www.invertbio.com/data-management). Their system easily integrates with their customers' hardware and software, regardless of manufacturer, in order to gather clean and well formatted bioprocess data in real time for their AI models to be trained on. For those that are comfortable with coding, gathered data can be analyzed and explored using their Notebooks, but it is entirely possible for users to move end-to-end without doing any coding (www.invertbio.com/modeling). Invert provides AI models that are able to characterize bioprocesses, design experiments and perform time series prediction, among other things.

The models are trained using historical data, as well as data generated throughout the R&D process including data that has been generated offsite (Invert 2025). By utilizing Inverts AI models for process development, key process parameters can be identified,

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

enabling more insightful and informed future design of experiments.

**Inputs and outputs**
As inputs for the bioprocess optimization, Invert utilizes bioprocessing data like real-time bioreactor data. The specific outputs of the model are not clearly stated on the company's website. Despite attempts to contact the company via email, we were unable to obtain further clarification about the model's inputs and outputs.

### 3.3.8 Katalyze AI

Katalyze AI is a company offering services related to bioprocess optimization (www.katalyzeai.com). When reached for further information, they expanded more on the nature of their services. The following information was learned via direct correspondence with team members at Katalyze AI. Their services are applicable in the R&D stage as well as the commercial manufacturing stage, for several different modalities of biopharmaceuticals and several different expression systems.

Notably, the team at Katalyze AI have worked to make sure their AI solution is interpretable, such that biologists with no background in data science can easily follow the reasoning behind each of the models decisions. Katalyze AIs models can take a large variety of inputs, both related to structure and -omics and pertaining to the raw materials used in the bioprocess. Using the Katalyze AI platform, they claim it is possible to make predictions pertaining to expression yield using only the protein sequence.

**Inputs and outputs**
Input data can range from structural and -omics data pertaining to the protein itself, to raw materials data from the supplier, to bioreactor derived information, based on availability. The format of the output data is unclear, but it is intended to be able to serve as a suggestion for bioprocess optimization.

All the above information about Katalyze AI was obtained through email correspondence and an interview.

### 3.3.9 Neoncorte Bio

Neoncorte Bio is a company focusing primarily on AI-based protein engineering to achieve various functional goals (www.bio.neoncorte.com). Using their repertoire of AI-models, one can generate *de novo* protein designs, improve upon existing protein structures as well as predict potential protein-protein interactions. We reached out to the Neoncorte Bio for further technical details about their AI model framework, and have summarized the process. Sequence data can be used as input for an initial PLM that will pick up on structural and physicochemical cues relating to expression and
solubility. The PLM recognizes these cues because it has been pre-trained on historical data covering structural information, experimental results and recorded protein-protein interactions. A regression model then quantifies the impact of these sequence derived cues to make more actionable predictions for expression yield and solubility. Millions of mutants are generated and scored *in silico*, yielding a few promising top candidates which are suggested for wet-lab validation.

Using recorded expression and solubility from 8-12 such candidates, accompanied by process parameter values such as pH, temperature, expression system and media; the AI model is trained further to make better predictions for expression and solubility. By following this protocol the model is improved iteratively, and is empowered to make better design suggestions and corresponding expression/solubility predictions with increasing accuracy.

**Inputs and outputs**
Neoncorte Bio uses the protein sequence as input. As for output, Neoncorte Bio generates new protein sequences, which are then intended for wet-lab validation.

### 3.3.10 SimCell by AnalysisMode

SimCell, dubbed as a “virtual cell culture lab", is an AI-based bioprocess simulation platform designed to reduce the experimental load by predicting how process parameters like pH, temperature, DO and media composition will impact performance parameters like expression yield and solubility (www.analysismode.com). It currently supports eukaryotic expression systems, particularly CHO cell lines, with plans to eventually expand into bacterial systems. Input data primarily concerns process related information such as bioreactor logs, offline measurements and sampling points.

Using SimCell, it is possible to test thousands of different combinations of process parameter values in order to theoretically optimize the bioprocessing conditions. Once this has been achieved, these same process parameter values can be translated into the physical realm for a wet-lab validation. A single virtual process simulation generally takes minutes, and the timeline estimate for a completed bioprocess optimization scheme is between 8-12 weeks. By performing AI-driven DoE, users of SimCell may cut down on planning time by up to 60%, perform 80% fewer wet-lab experiments before reaching optimal processing conditions, and potentially save up to three million dollars annually. Analysis-Mode offer services on several levels of complexity, depending on the customers needs. For those wanting to scale up their process, they also offer digital twin services.

**Inputs and outputs**
SimCell uses process related information such as bioreactor logs, offline measurements and sampling points.

12

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

While the format of the output is unknown, it is meant to make suggestions regarding the optimization of expression yield and solubility.

## 3.4 Attitudes towards AI in biopharmaceutical development

As of march 2025, no biopharmaceutical drugs designed using AI have hit the market (Dandekar 2025). Seeing the potential of current discovery phase candidates, however, Diogo Rau of industry giant Eli Lilly views the incorporation of AI in drug discovery as a mandatory transition for any biopharmaceutical company hoping to still stay relevant in 2050 (Dandekar 2025). As for AIs role in process optimization, a 2023 survey asking leaders within the biopharmaceutical industry about their thoughts on applying AI to advance their field concluded that there were definitive advantages to doing so (Pazhayattil and Konyu-Fogel). As many as 68% of respondents believed that AI will be used to “make decisions on process efficiency" within 10 years. Additionally, the primary benefits of such implementation was the reduction of waste and time spent cultivating a single batch, as well as increased yields per batch (Pazhayattil and Konyu-Fogel).

During a 2024 interview, four professors at various universities in the US and India put some of their primary concerns regarding the efficiency of AI for bioprocess optimization to words (May 2024). These included uncertainties about the interpretability of AI models used for predicting bioprocessing conditions; the impracticality of having to retrain the models when changing equipment and experimental scale; as well as a lack of high-dimensional and qualitative training data (May 2024). One interviewee pointed out that, due to the complex nature of bioprocessing, the data generated from R&D bioprocesses is unlikely to suffice for most generic AI models to make accurate and reliable predictions. Incorporating more advanced inline sensor equipment into the bioreactor, as well as establishing bioprocess databases were suggested as possibilities for improvement in this area (May 2024). Another inter-viewee comments that a completely data driven model will require retraining in order to maintain its predictive ability every time there is a change in equipment or scale. The reason being that purely data driven AI models lack any baseline "understanding" of the bioprocess. As such, the later manufacturing stage of the biopharmaceutical pipeline could be better suited for process simulation than the R&D stage, given the vastly more quantitative data that is produced during manufacturing (May 2024).

Hybrid models are a way to effectively bridge knowledge gaps between established mathematical models describing many of the various processes taking place during a bioprocess and statistics based on recorded data of a particular bioprocess (Riezzo et al. 2025). Using hybrid models that are able to incorporate such otherwise missing “mechanistic understanding" of the process into its predictions was brought up as a way to both make the models’ reasoning more comprehensible for scientists, as well as broaden its applicability (May 2024). Particularly for early process development, whiledata from the production of a certain biopharmaceutical still is very scarce, a purely data driven model is unlikely to deliver reliable results. Similarly, purely mechanistic models not taking relevant process data into account are also unlikely to make accurate predictions, given the complexity of bioprocessing (Mu'azzam et al. 2024).

One interviewee described AI:s main application within bioprocessing as a tool for uncovering the functional input-output relationships of a bioprocess, "while providing interpretable insights for optimizing processes" (May 2024). A clarifying example brought up in an article (Bayer et al. 2020) discussing the application of hybrid modeling to perform intensified DoE mentioned using a black-box ANN algorithm to predict the values of specific expression rates for a protein, based on recorded data. Such algorithmically determined values can then be applied to the mathematical models traditionally used to simulate and predict the outcomes of various bioprocesses (Bayer et al. 2020).

13

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

## 3.5 Tables of models

The following tables give an overview of the models in section 3.2. Table 1 includes open-access models, while Table 2 summarizes commercial models.

**Table 1: Open-access models for bioprocess and solubility prediction**

| Open Models    | Focus Area                                                     |
| :------------- | :--------------------------------------------------------------- |
| PERISCOPE-Opt  | Predicting the optimal bioprocessing conditions.                 |
| solPredict     | Predicting the apparent solubility of monoclonal antibodies.     |
| CamSol         | Combination of five different models. Uses protein engineering to predict solubility. |
| Aggscore       | Structure-based developability to predict an aggregation score. Can use data platforms. |
| SoluProt       | Sequence-based model that estimates how likely a recombinant protein will be produced in a soluble form. |

**Table 2: Commercial AI models for protein and bioprocess development**

| Commercial Models | Focus Area                                                 |
| :---------------- | :--------------------------------------------------------- |
| Aizon AI          | Predicts production parameter values, to achieve yield optimization. |
| Ardigen           | Aid in key stages such as hit screening, lead optimization and *in silico* filtering methods. |
| Cradle            | Generates protein sequences from user data to evaluate important bioprocessing parameters; intended for wet-lab validation. |
| Chroma            | Generates novel protein sequences along with their 3D structures. |
| DataHowLab        | Improves bioprocesses by optimizing different parameter subsets in succession. |
| ExPreSo           | Takes a protein sequence and target product profile as input; outputs likelihood percentages for inactive ingredients. |
| Invert            | Provides a platform for managing bioprocess data and pre-built AI, aiding experimental design. |
| Katalyze AI       | Offers bioprocess optimization services; accessible for non-experts in data science. |
| Neoncorte Bio     | AI-based protein engineering for various goals; generates new protein sequences. |
| SimCell           | Enables *in in silico* testing of thousands of parameter combinations to optimize bioprocessing conditions. |

14

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

# 4 Discussion

As we have learned more on the subject of AI and process parameter optimization over the course of this project, we have gradually had to shift the framing of our market analysis. The purpose of this report was originally to investigate the current landscape of AI tools used to predict optimal bioprocessing conditions based on protein sequence data. Preferably, such tools should be implemented as early as possible in the biopharmaceutical development pipeline, giving researchers another metric by which to rank drug candidates all fulfilling the same ADMET demands. While researching, however, it proved surprisingly difficult to find companies and non-commercial models which provided a service meeting these criteria. As such, we decided to broaden the scope of the market analysis to also include companies and models offering bioprocess optimization services, regardless of input, as well as protein engineering services for the purpose of yield or solubility optimization. In doing so, we have identified what could be interpreted as a gap in the market with respect to AI models taking protein sequence data as input and for bioprocess optimization.

## 4.1 Issues with data scarcity may be alleviated by data platform integration

A major obstacle preventing more widespread adoption of AI to optimize early R&D stage bioprocesses is a lack of training data (May 2024). Although there will be bioprocess data generated from every biopharmaceutical drug candidate that makes it to the process optimization stage of the development pipeline, it will not be enough to train a reliable model (Hughes et al. 2011). As was mentioned in the article detailing the development of PERISCOPE-Opt, a proteins sequence informs much of its solubility and folding rate, both properties tied to expression yield (Packiam et al. 2022). Using only data on recombinant protein sequences adhering to the developers' criteria, and bioprocess data corresponding to their expression, they were able to create 11 985 input features. This seems to indicate that even smaller data sets than those comprising hundreds of thousands of data points can be engineered to provide an AI model with a lot of valuable information. The developers of PERISCOPE-Opt point to the diversity of their training data as a contributing factor to their models accuracy achievements (Packiam et al. 2022). Cradle shares this sentiment, citing the importance of widely distributed data points in order to reliably optimize a protein sequence for a certain property (Cradle 2024).

Perhaps as a solution to the scarcity of usable data, Invert and DataHow (partnered with Genedata) who specialize in bioprocess optimization also offer services related to data gathering, cleaning and visualization (Invert 2025b). By integrating bioreactor and sensory
equipment with a data platform that can collect and standardize recorded data in one place, it stands to reason that more process data can be consolidated from each run. With time, such a data platform could start to serve as a sort of proprietary bioprocess database akin to what was suggested as a remedy to the issue of data scarcity (May 2024). For a company developing and producing large amounts of diverse biopharmaceutical products, and thus generating plenty of in house data, we believe this type of service has the potential to greatly increase process efficiency. By leveraging accessible and well-formatted in house data stored on data platforms, a company could theoretically train any number of AI models. Since optimal bioprocessing conditions will vary greatly between products produced by mammalian cell lines and prokaryotic cells, this may warrant training separate AI models for each expression system that the company carries. Instead of incorporating the expression system as one of the parameters needing optimization. An example of how AI models are trained could be how DataHow advertises their use of transfer learning to train their AI models (DataHow 2024). By adopting and storing data from a project on Genedatas data platform, it can be used to train one of DataHows models tasked with optimizing the bioprocess of another biopharmaceutical.

## 4.2 Solubility prediction proves to be well explored

When analyzing the market of AI models for biopharmaceutical drug development, it is clear that models that predict solubility are dominating. This trend can be seen both across academic publications and commercial platforms. Compared to other production-related parameters, solubility models are not only more numerous, but also more established, developed and accessible.

One of the main reasons behind the disproportionate large share could be the great availability of well-structured, annotated solubility data in public databases (Velecký et al. 2022). Data availability is crucial for training models, which explains why solubility models are both more common and robust than others. Additionally, solubility is a property that can be predicted based solely on the amino acid sequence. This allows for relatively simple algorithms or protein language models, without the need for complex process data. Another reason for why the development of solubility prediction models has progressed so quickly is because it is a single molecule throughput with PEG-precipitation assays, so sizable training sets already exist. From a manufacturing standpoint, these models are useful in the early stages of development as variants predicted to precipitate at low PEG percentages are also the ones that tend to have poor expression. These variants can therefore be deprioritized, saving expensive lab work.

15

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

In contrast, production parameters such as pH, temperature and DO are more difficult to model. One major factor is the effect of interaction between these parameters. Due to this, they cannot be derived directly from the sequence data, but instead require experimental or process data from specific expression systems and bioreactor conditions. Such data is rarely public, nor generalizable across projects. Furthermore, these parameters often require approaches such as hybrid models, which are more complex to develop and validate.

## 4.3 Prediction of production parameters remains a relatively untapped market

Based on our research, there seem to be quite a few companies currently in the business of optimizing bioprocesses. These include, but are not limited to, DataHow, Neoncorte Bio, Invert, Katalyze AI and AnalysisMode. A large component of bioprocess simulation is teaching a model to optimize performance in terms of product solubility and yield, which is achieved by determining optimal process parameter values. Likely owing to the complex nature of bioprocessing, however, most of these companies and models do not base their predictions on protein sequence (with the exception of solubility models, PERISCOPE-Opt and Ardigen). Rather, input data for models like that of DataHow, Invert, Katalyze AI, Neoncorte Bio and AnalysisMode primarily consists of bioprocessing data from previous runs. Due to an established lack of public bioprocessing databases, this seems to render bioprocessing simulation at the R&D stage of biopharmaceutical development very challenging. A considerably greater challenge than generating sequence suggestions to achieve improvements with respect to various properties. Although there are companies like Neoncorte Bio and Katalyze AI who offer bioprocess optimization also at the R&D stage, these services seem to be more popular at the later manufacturing stage. At that point, processes produce enough data to be simulated in real time as a Digital Twin, as is advertised by DataHow.

## 4.4 Protein engineering seems to be the leader in the market

The majority of companies, such as Neoncorte Bio; Cradle; Ardigen and Generate:Biomedicines, currently advertising machine learning models within the field of biological drug development focus on protein engineering. These models are mainly used for generating *de novo* designs (Neoncorte Bio) or predicting properties such as structure, affinity, specificity or developability (Chroma, Ardigen and Cradle) with the main goal of improving and designing the protein sequence. Although some of the models include tools that may be useful for predicting production related parameters, a recurring trend is that they are primarily based on
structural and sequence data rather than process specific data. As with solubility, the greater availability of annotated sequence and structural data, which can be accessed through many large, open databases.

Another reason is the difference in model complexity between protein engineering and bioprocess development. Bioprocessing models are typically system-oriented, meaning they require several interacting variables, often across time. This makes them more difficult to build and train, sometimes requiring hybrid approaches with digital twins or the integration of physical simulations (Sokolov et al. 2021; Riezzo et al. 2025)(Sokolov et al. 2021, Riezzo et al. 2025b). Protein engineering, on the other hand, can typically operate directly on amino acid sequences, using approaches such as PLMs or different types of neural networks (Gelman et al. 2025). This allows them to be more computationally efficient and adaptable.

There could also be an uneven distribution in commercial value and interest (Markets 2025). Protein engineering focuses on identifying and developing new candidates which is crucial in an even earlier stage of development than filtering among pre-selected candidates (Ebrahimi and Samanta 2023). Protein engineering has an advantage when it comes to direct decision making, which further justifies the higher research investment. Protein models can be used to suggest modifications solely based on sequence input, whereas production models require integration of experimental data, process simulations or even physical equipment. This makes the latter field more resource demanding and dependent, and less adaptable across projects.

## 4.5 The future of AI in biopharmaceuticals

The biopharmaceutical industry is currently in a state of constant development, with AI integration being the most significant (Solutions C 2025). As of today, ANNs seems to be the most widely used type of ML. However, in recent years there has been an increased interest to look further into hybrid modeling for production of biopharmaceuticals (Narayanan, Stosch, et al. 2023).

Hybrid modeling has become increasingly popular, since relying on only ML or AI often demands high quality and abundant data. Without this, the models tend to perform poorly and have higher error rates. In the biopharmaceutical industry, the amount of useful data is very limited. Most data is derived from complex and resource-demanding experiments, making the generation of new data both time consuming and costly. Although the biopharmaceutical industry is well-established and already has a lot of historical data, most data was not produced with the intent of being used for AI. As a result, most historical data is suboptimal for AI models to use. Hybrid modeling utilises both information obtained from

16

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

purely data-driven models such as AI, and knowledge gained from knowledge-based models such as mathematical equations. Hybrid modeling has been proven to lower data requirements, improve accuracy, optimize processes and has also been a key factor in the development of digital twins (Narayanan, Dingfelder, et al. 2021).

Using real-time simulations, algorithms and analytics, digital twins can automate a lot of monitoring of the
production process. However, digital twins face challenges with interpreting data, system interpretation and unwanted deviations. Therefore, it continues to be an area of ongoing development. As of today, it is argued that digital twins work best if its being utilized in cooperation with human expertise (Shahab et al. 2025). However, since this is a rapidly advancing field, we might see digital twins working more independently in the future.

17

---

Uppsala University
2025-06-05
Market analysis of AI-based drug development of biopharmaceuticals
Institutionen för Biologisk Grundutbildning

# 5 Conclusions

This report demonstrates the significant potential of AI to enhance early-stage bioprocess development by enabling the prediction and optimization of key parameters such as pH, temperature, DO, and media composition. Although few models currently predict bioprocess conditions directly from the protein sequence, tools for solubility prediction and protein engineering are well-established and offer indirect but valuable contributions to process efficiency. Hybrid models, which combine machine learning with mechanistic understanding, stand out as particularly promising for making robust predictions despite limited early-stage data. Platforms offering digital twins and AI-driven DoE further reduce experimental workload and resource use.

For facilities like Testa Center, integrating AI into development workflows could lead to faster candidate screening, improved yield predictions, and more efficient resource allocation. Although without the capacity to build expansive bioprocess databases, due to customer data remaining proprietary, the issue of data scarcity remains. Continued investment in data infrastructure and explainable AI will be crucial to unlock the full value of these tools and establish trust in their output. As technology matures, AI is set to become an integral part of bioprocess optimization.

18

---

# Author Contributions

All group members participated equally in the writing of the abstract and the conclusion.

**Johanna Holmbom** contributed to half of the ethics appendix; most of the "Parameters" (sans "Performance parameters") section as well as part of the "Responsible AI" section of the Background. Johanna provided all of the text for the "The future of AI in biopharmaceuticals" in the Discussion section as well as one of the models in Results. Johanna also took part in the presentation of our results during the final presentation.

**Ida Wennborg Blomberg** provided the text for the "Performance parameters" section of the Background and all of the models predicting solubility in the Results. Ida also contributed to the "Solubility prediction proves to be well explored" section of the Results and shouldered the primary technical responsibility of the final formatting of the report. Ida also took part in the presentation of our project plan at the start of the course.

**Amanda Frånberg** provided the text for the Introduction; many of the commercial models (+ PERISCOPE-Opt) and the “Attitudes towards AI in biopharmaceutical development" section of the Results; the “Issues with data scarcity may be alleviated by data platform integration" and "Prediction of production parameters remains a relatively untapped market" sections as well as the introductory segment of the Discussion. Amanda also took part in the presentation of our results during the final presentation.

**Loris Borsali** provided all of the text for "The drug development process" as well as the "An overview of the production of biopharmaceuticals" sections of the Background. Loris provided all of the text for the "Research method" section and the introductory segment of the Results, and provided many of the commercial models in the Results. Loris also took part designing the project poster, and the presentation of our project plan at the start of the course.

**Izabelle Norlander** contributed to half of the ethics appendix; part of the "Solubility prediction proves to be well explored" section as well as the "Protein engineering seems to be the leader in the market" sections of the Discussion. Izabelle provided all of the text for the "Machine learning" and much of the "Responsable AI" sections of the Background, including the "Machine learning glossary". Izabelle took part in designing the project poster and shouldered the responsibility of the graphical profile of both presentations. Izabelle also took part in the presentation of our results during the final presentation.

---

# References

Aizon. 2024a. Introducing Aizon Execute: The Fastest Path from Paper to Predictions. WWW document 18 September 2024: https://www.aizon.ai/blog/introducing-aizon-execute-the-fastest-path-from-paper-to-predictions. Accessed 22 May 2025.

Aizon. 2024b. The Aizon Difference for Life Science Manufacturers. WWW document 26 June 2024: https://www.aizon.ai/blog/the-aizon-difference. Accessed 22 May 2025.

Aizon. 2025. How a Leading Pharma Company Is Achieving Major Operational Savings with Multivariate RCA. WWW document 2025: https://www.aizon.ai/success-stories/yield-optimization-in-downstream-plasma-fractionation. Accessed 22 May 2025.

Alnuaimi AFAH, Albaldawi THK. 2024. An overview of machine learning classification techniques. BIO Web of Conferences 97: 00133. AnalysisMode. 2024. AI bioprocessing suite by AnalysisMode. WWW document 1 January 2024: https://analysismode.com/. Accessed 22 May 2025.

Ardigen. 2025. Artificial Intelligence & Bioinformatics for Precision Medicine.

Ardigen A. 2024. Antibody Hit Screening: Developing Successful Therapies with the Help of In Silico Tools - Ardigen. 2024: https://ardigen.com/antibody-hit-screening-developing-successful-therapies-with-the-help-of-in-silico-tools/, https://ardigen.com/. Accessed 21 May 2025.

Arlot S, Celisse A. 2010. A survey of cross-validation procedures for model selection. Statistics Surveys 4: 40-79.

Barredo Arrieta A, Díaz-Rodríguez N, Del Ser J, Bennetot A, Tabik S, Barbado A, Garcia S, Gil-Lopez S, Molina D, Benjamins R, Chatila R, Herrera F. 2020. Explainable Artificial Intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI. Information Fusion 58: 82–115.

Bayer B, Striedner G, Duerkop M. 2020. Hybrid Modeling and Intensified DoE: An Approach to Accelerate Upstream Process Characterization. Biotechnol J 200121.

Bettanti A, Beccari AR, Biccarino M. 2024. Exploring the future of biopharmaceutical drug discovery: can advanced AI platforms overcome current challenges? Discover Artificial Intelligence 4: 1–16.

Bischl B, Binder M, Lang M, Pielok T, Richter J, Coors S, Thomas J, Ullmann T, Becker M, Boulesteix A-L, Deng D, Lindauer M. 2021. Hyperparameter Optimization: Foundations, Algorithms, Best Practices and Open Challenges. doi 10.48550/arXiv.2107.05847.

Blog DC. 2024. Understanding F1 Score, Accuracy, ROC-AUC & PR-AUC Metrics. WWW document 13 June 2024: https://www.deepchecks.com/f1-score-accuracy-roc-auc-and-pr-auc-metrics-for-models/. Accessed 25 May 2025.

Breiman L. 2001. Random Forests. Machine Learning 45: 5–32.

Browne MW. 2000. Cross-Validation Methods. Journal of Mathematical Psychology 44: 108–132.

Buhmann A, Fieseler C. 2021. Towards a deliberative framework for responsible innovation in artificial intelligence. Technology in Society 64: 101475.

Buntz B. 2023. Common drugs: biologics, small molecules and cell and gene. WWW document 24 January 2023: https://www.drugdiscoverytrends.com/an-overview-of-common-drug-types-biologics-small-molecules-and-cell-gene-therapy/. Accessed 26 May 2025.

Byer T. 2022. The Black Box Effect - How Can AI and ML Provide Transparent Insights for Drug Discovery? WWW document 30: https://oxfordglobal.com/nextgen-biomed/resources/the-black-box-effect. Accessed 19 May 2025.

Cai YD, Liu XJ, Xu X, Zhou GP. 2001. Support vector machines for predicting protein structural class. BMC bioinformatics 2: 3.

Chemintelligence. 2021. Machine learning descriptors for molecules. WWW document 5 January 2021: https://chemintelligence.com/blog/machine-learning-descriptors-molecules. Accessed 25 May 2025.

Chen H, Zhang Z, Yin W, Zhao C, Wang F, Li Y. 2022. A study on depth classification of defects by machine learning based on hyper-parameter search. Measurement 189: 110660.

---

Commissioner O of the. 2020. The Drug Development Process. WWW document 20 February 2020: https://www.fda.gov/patients/learn-about-drug-and-device-approvals/drug-development-process. Accessed 6 May 2025.

Cradle. 2024a. Cradle - How to Get Started Using AI for Protein Design: A Guide to Data Collection. WWW document 7 February 2024: https://www.cradle.bio/blog/data-collection-guide. Accessed 22 May 2025.

Cradle. 2024b. Getting started with Cradle | Cradle Docs. WWW document 27 November 2024: https://docs.cradle.bio/platform/readme. Accessed 22 May 2025. Cradle. 2024c. Data guidelines | Cradle Docs. WWW document 2024: https://docs.cradle.bio/data-guidelines. Accessed 26 May 2025.

Cradle. 2024d. Cradle - How to Get Started Using AI for Protein Design: A Guide to Data Collection. WWW document 7 February 2024: https://www.cradle.bio/blog/data-collection-guide. Accessed 21 May 2025.

Dandekar V. 2025. Non-AI organisations wont make it to 2050, says Diogo Rau. The Economic Times

DataHow. 2024a. DataHowLab. WWW document 2024: https://datahow.ch/products/datahowlab/. Accessed 26 May 2025.

DataHow. 2024b. Harness the power of AI with DataHows bioprocess development solution. WWW document 1 January 2024: https://datahow.ch/. Accessed 22 May 2025.

Drugs. 2025. Inactive Drug Ingredients (Excipients). WWW document 1 January 2025: https://www.drugs.com/inactive/. Accessed 19 May 2025.

Ebrahimi SB, Samanta D. 2023. Engineering protein-based therapeutics through structural and chemical design. Nature Communications 14: 2411.

Evitria. 2022. HEK293 cells vs. CHO cells. WWW document 13 January 2022: https://www.evitria.com/cho-cells/hek293-cells-vs-cho-cells/. Accessed 25 May 2025.

Feng J, Jiang M, Shih J, Chai Q. 2022. Antibody apparent solubility prediction from sequence by transfer learning. iScience 25: 105173.

Gelman S, Johnson B, Freschlin C, Sharma A, DCosta S, Peters J, Gitter A, Romero PA. 2025. Biophysics-based protein language models for protein engineering. bioRxiv 2024.03.15.585128.

Genedata. 2022. DataHow and Genedata Partner on Digitalization of Biopharma Process Development and Manufacturing. WWW document 13 September 2022: https://www.genedata.com/company/news/details/press-release/datahow-partners-on-process-development-manufacturing. Accessed 21 May 2025.

Generate. 2025. The Generate Platform. WWW document 1 January 2025: https://generatebiomedicines.com/platform. Accessed 22 May 2025.

Ghojogh B, Crowley M. 2023. The Theory Behind Overfitting, Cross Validation, Regularization, Bagging, and Boosting: Tutorial. doi 10.48550/arXiv.1905.12787.

Grosch H. 2023. 5 considerations for successful CGT fill-finish scale up. WWW document 28 December 2023: https://www.pharmamanufacturing.com/production/aseptic-processing/article/33016817/5-considerations-for-successful-cgt-fill-finish-scale-up. Accessed 5 May 2025.

Hamilton. 2024. Download the Biopharma PAT White Paper | Process Analytics | Hamilton Company. WWW document 5 May 2024: https://www.hamiltoncompany.com/process-analytics/how-does-pat-apply-to-the-bioreactor/download-pat-white-paper?submissionGuid=76b64dd9-6cd3-4dcb-a7f0-7676c990fafd. Accessed 23 May 2025.

Hon J, Marusiak M, Martinek T, Kunka A, Zendulka J, Bednar D, Damborsky J. 2021a. SoluProt: prediction of soluble protein expression in Escherichia coli. Bioinformatics 37: 23–28.

Hon J, Marusiak M, Martinek T, Kunka A, Zendulka J, Bednar D, Damborsky J. 2021b. SoluProt: prediction of soluble protein expression in Escherichia coli. Bioinformatics 37: 23–28.

Hughes J, Rees S, Kalindjian S, Philpott K. 2011. Principles of early drug discovery. British Journal of Pharmacology 162: 1239–1249.

İncir İ, Kaplan Ö. 2024. Escherichia coli as a versatile cell factory: Advances and challenges in recombinant protein production. Protein Expression and Purification 219: 106463.

Ingraham JB, Baranov M, Costello Z, Barber KW, Wang W, Ismail A, Frappier V, Lord DM, Ng-Thow-Hing C, Van Vlack ER, Tie S, Xue V, Cowles SC, Leung A, Rodrigues JV, Morales-Perez CL, Ayoub AM, Green

---

R, Puentes K, Oplinger F, Panwar NV, Obermeyer F, Root AR, Beam AL, Poelwijk FJ, Grigoryan G. 2023. Illuminating protein space with a programmable generative model. Nature 623: 1070–1078.

Invert. 2025a. Invert | Manage and analyze your antibody and protein data. WWW document 2025: https://invertbio.com/solutions/antibody-and-protein. Accessed 26 May 2025.

Invert. 2025b. Invert | Manage and analyze your antibody and protein data. WWW document 2025: https://invertbio.com/solutions/antibody-and-protein. Accessed 26 May 2025.

Jozala AF, Geraldes DC, Tundisi LL, Feitosa V de A, Breyer CA, Cardoso SL, Mazzola PG, Oliveira-Nascimento L de, Rangel-Yagui C de O, Magalhães P de O, Oliveira MA de, Pessoa Jr A. 2016. Biopharmaceuticals from microorganisms: from production to purification. Brazilian Journal of Microbiology 47: 51–63.

Kasemiire A, Avohou HT, De Bleye C, Sacre P-Y, Dumont E, Hubert P, Ziemons E. 2021. Design of experiments and design space approaches in the pharmaceutical bioprocess optimization. European Journal of Pharmaceutics and Biopharmaceutics 166: 144–154.

Kavoni H, Savizi ISP, Lewis NE, Shojaosadati SA. 2025. Recent advances in culture medium design for enhanced production of monoclonal antibodies in CHO cells: A comparative study of machine learning and systems biology approaches. Biotechnology Advances 78: 108480.

KesikBrodacka M. 2018. Progress in biopharmaceutical development. Biotechnology and Applied Biochemistry 65: 306–322.

Khuat TT, Bassett R, Otte E, Grevis-James A, Gabrys B. 2023. Applications of Machine Learning in Biopharmaceutical Process Development and Manufacturing: Current Trends, Challenges, and Opportunities. doi 10.48550/arXiv.2310.09991.

Kufel J, Bargie-czek K, Kocot S, Kolik M, Bartnikowska W, Janik M, Czogalik , Dudek P, Magiera M, Lis A, Paszkiewicz I, Nawrat Z, Cebula M, Gruszczyska K. 2023. What Is Machine Learning, Artificial Neural Networks and Deep Learning? Examples of Practical Applications in Medicine. Diagnostics 13: 2582.

Lucie-Smith L. 2020. Insights into cosmological structure formation with machine learning. FERMILAB-THESIS-2020-26, 1771179, oai:inspirehep.net:1850909.

Luftman M. 2022. Dissolved CO2 Measurement in Bioprocess from R&D to Production. WWW document 21 March 2022: https://pro-analytics.net/dissolved-co2-measurement-in-bioprocess/. Accessed 19 May 2025.

Makurvet FD. 2021. Biologics vs. small molecules: Drug costs and patient access. Medicine in Drug Discovery 9: 100075.

Markets R and. 2025. Protein Engineering Market Outlook Report 2025–2030: Applications in Healthcare and Agriculture for Sustainable Practices and Biofortification Present Lucrative Opportunities. WWW document 21 May 2025: https://www.globenewswire.com/news-release/2025/05/21/3085568/28124/en/Protein-Engineering-Market-Outlook-Report-2025-2030-Applications-in-Healthcare-and-Agriculture-for-Sustainable-Practices-and-Biofortification-Present-Lucrative-Opportunities.html. Accessed 22 May 2025.

May M. 2024. Tackling AI Bottlenecks in Bioprocessing. WWW document 9 October 2024: https://www.genengnews.com/topics/bioprocessing/tackling-ai-bottlenecks-in-bioprocessing/. Accessed 19 May 2025.

Muazzam K, Vitor Santos da Silva F, Murtagh J, Jose Sousa Gallagher M. 2024. A roadmap for model-based bioprocess development. Biotechnology Advances 2024: 108378.

Narayanan H, Dingfelder F, Condado Morales I, Patel B, Heding KE, Bjelke JR, Egebjerg T, Butté A, Sokolov M, Lorenzen N, Arosio P. 2021. Design of Biopharmaceutical Formulations Accelerated by Machine Learning. Molecular Pharmaceutics 18: 3843–3853.

Narayanan H, von Stosch M, Feidl F, Sokolov M, Morbidelli M, Butté A. 2023a. Hybrid modeling for biopharmaceutical processes: advantages, opportunities, and implementation. Frontiers in Chemical Engineering, doi 10.3389/fceng.2023.1157889.

Narayanan H, von Stosch M, Feidl F, Sokolov M, Morbidelli M, Butté A. 2023b. Hybrid modeling for biopharmaceutical processes: advantages, opportunities, and implementation. Frontiers in Chemical Engineering, doi 10.3389/fceng.2023.1157889.

---

Neoncorte. 2024. Services: Protein Engineering. WWW document 2024: https://bio.neoncorte.com/services/protein_engineering. Accessed 26 May 2025.

Noorbakhsh J, Chandok H, Karuturi RKM, George J. 2019. Machine Learning in Biology and Medicine. Advances in Molecular Pathology 2: 143–152.

OECD. 2025. Accountability (OECD AI Principle). WWW document 1 January 2025: https://oecd.ai/en/dashboards/ai-principles/P9. Accessed 20 May 2025.

OECD. 2022. Measuring the environmental impacts of artificial intelligence compute and applications. WWW document 15 November 2022: https://www.oecd.org/en/publications/measuring-the-environmental-impacts-of-artificial-intelligence-compute-and-applications_7babf571-en.html. Accessed 4 June 2025.

Packiam KAR, Ooi CW, Li F, Mei S, Tey BT, Ong HF, Song J, Ramanan RN. 2022. PERISCOPE-Opt: Machine learning-based prediction of optimal fermentation conditions and yields of recombinant periplasmic protein expressed in Escherichia coli. Computational and Structural Biotechnology Journal 20: 2909–2920.

Pande AH, Prasad YR, Anakha J. 2025. What are biopharmaceuticals? Exploration of Drug Science 100880.

Pazhayattil AB, Konyu-Fogel G. ML and AI Implementation Insights for Bio/Pharma Manufacturing.

Perchiacca JM, Tessier PM. 2012. Engineering Aggregation-Resistant Antibodies. Annual Review of Chemical and Biomolecular Engineering 3: 263–286.

Pharma C. 2025. pH Analysis - Ensuring Biopharmaceutical Stability. WWW document 1 January 2025: https://www.coriolis-pharma.com/our-services/ph-analysis/. Accessed 11 May 2025.

Proteos Inc. 2023. Protein Solubility and Aggregation. WWW document 22 February 2023: https://www.proteos.com/protein-solubility-and-aggregation.

Rai A. 2020. Explainable AI: from black box to glass box. Journal of the Academy of Marketing Science 48: 137–141.

Rathore AS, Nikita S, Thakur G, Mishra S. 2023. Artificial intelligence and machine learning applications in biopharmaceutical manufacturing. Trends in Biotechnology 41: 497–510.

Ray S. 2024. Measurement is the key to helping keep AI on track. WWW document 9 September 2024: https://news.microsoft.com/source/features/ai/measurement-is-the-key-to-helping-keep-ai-on-track/. Accessed 12 May 2025.

Research C for DE and. 2025. Artificial Intelligence for Drug Development. WWW document 20 February 2025: https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/artificial-intelligence-drug-development. Accessed 21 May 2025.

Reuveny S, Velez D, Macmillan JD, Miller L. 1986. Factors affecting cell growth and monoclonal antibody production in stirred reactors. Journal of Immunological Methods 86: 53–59.

Riezzo L, Kay H, Feng Y, Jing K, Zhang D. 2025a. Accelerating bioprocess digital twin development by integrating hybrid modelling with transfer learning. Chemical Engineering Journal 511: 162018.

Riezzo L, Kay H, Feng Y, Jing K, Zhang D. 2025b. Accelerating bioprocess digital twin development by integrating hybrid modelling with transfer learning. Chemical Engineering Journal 511: 162018.

Riffenburgh RH. 2006. Chapter 26 - Methods You Might Meet, But Not Every Day. In: Riffenburgh RH (ed.). Statistics in Medicine (Second Edition), pp. 521–529. Academic Press, Burlington.

Rigaku. 2024. RAD001 - Cell culture media identification in biopharmaceuticals. WWW document 1 January 2024: https://rigaku.com/products/handheld-raman/application-notes/rad001-cell-culture-media-identification-biopharmaceuticals. Accessed 24 May 2025.

Saito T, Rehmsmeier M. 2015. The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets. PLOS ONE 10: e0118432.

Salib V. 2023. Comparing Small Molecule and Biologics Drug Development Challenges | TechTarget. WWW document 9 May 2023: https://www.techtarget.com/pharmalifesciences/feature/Comparing-Small-Molecule-and-Biologics-Drug-Development-Challenges. Accessed 26 May 2025.

---

Sankar K, Krystek SR, Carl SM, Day T, Maier JKX. 2018. AggScore: Prediction of aggregationprone regions in proteins based on the distribution of surface patches. Proteins: Structure, Function, and Bioinformatics 86: 1147–1156.

sbi. 2025. Dissolved Oxygen (DO) Monitoring in Microbial Bioprocessing - sbi. WWW document 1 January 2025: https://www.scientificbio.com/dissolved-oxygen-monitoring-in-microbial-bioprocessing. Accessed 19 May 2025.

Sekhon BS. 2010. Biopharmaceuticals: an overview. Thai J. Pharm. Sci.

Shahab MA, Destro F, Braatz RD. 2025a. Digital Twins in Biopharmaceutical Manufacturing: Review and Perspective on Human-Machine Collaborative Intelligence. doi 10.48550/arXiv.2504.00286.

Shahab MA, Destro F, Braatz RD. 2025b. Digital Twins in Biopharmaceutical Manufacturing: Review and Perspective on Human-Machine Collaborative Intelligence. doi 10.48550/arXiv.2504.00286.

Sokolov M, von Stosch M, Narayanan H, Feidl F, Butté A. 2021. Hybrid modeling a key enabler towards realizing digital twins in biopharma? Current Opinion in Chemical Engineering 34: 100715.

SoluProt. 2025. Prediction of soluble protein expression in Escherichia coli.

Solutions C. 2025. AI in Pharma and Biotech: Market Trends 2025 and Beyond. WWW document 15 April 2025: https://www.coherentsolutions.com/insights/artificial-intelligence-in-pharmaceuticals-and-biotechnology-current-trends-and-innovations. Accessed 20 May 2025.

Sormanni P, Amery L, Ekizoglou S, Vendruscolo M, Popovic B. 2017. Rapid and accurate in silico solubility screening of a monoclonal antibody library. Scientific Reports 7: 8200.

Sormanni P, Aprile FA, Vendruscolo M. 2015. The CamSol Method of Rational Design of Protein Mutants with Enhanced Solubility. Journal of Molecular Biology 427: 478–490.

Spotsee. 2024. Effects of Temperature Change on Biologic Drugs. WWW document 7 February 2024: https://spotsee.io/blog/effects-of-temperature-change-on-biologic-drugs/. Accessed 25 May 2025.

Tang L. 2024. Protein language models using convolutions. Nature Methods 21: 550–550.

Valliani J. 2024. Responsible AI: Key Principles and Best Practices | Atlassian. WWW document 29 October 2024: https://www.atlassian.com/blog/artificial-intelligence/responsible-ai. Accessed 21 May 2025.

Velecký J, Hamsikova M, Stourac J, Musil M, Damborsky J, Bednar D, Mazurenko S. 2022. SoluProtMutDB: A manually curated database of protein solubility changes upon mutations. Computational and Structural Biotechnology Journal 20: 6339–6347.

Vendruscolo Lab. 2025. The CamSol Method. WWW document 1 January 2025: https://www-vendruscolo.ch.cam.ac.uk/camsolmethod.html. Accessed 21 May 2025.

Vidal-Henriquez E, Holder T, Franciss Lee N, Pompe C, George Teese M. 2025. Machine learning driven acceleration of biopharmaceutical formulation development using Excipient Prediction Software (ExPreSo) | bioRxiv. WWW document 16 February 2025: https://www.biorxiv.org/content/10.1101/2025.02.12.637685v1. Accessed 11 May 2025.

Walsh I, Myint M, Nguyen-Khuong T, Ho YS, Ng SK, Lakshmanan M. 2022. Harnessing the potential of machine learning for advancing Quality by Design in biomanufacturing. mAbs 14: 2013593.

Wells D. 2023. The importance of the right pH in cell culture applications. WWW document 4 January 2023: https://www.selectscience.net/article/the-importance-of-the-right-ph-in-cell-culture-applications. Accessed 6 May 2025.

Xu J, Yan F, Li Z, Wang D, Sheng H, Liu Y. 2014. Serum-Free Medium Optimization Based on Trial Design and Support Vector Regression. BioMed Research International 2014: 269305.

Zhang W, Wang H, Feng N, Li Y, Gu J, Wang Z. 2023. Developability assessment at early-stage discovery to enable development of antibody-derived therapeutics. Antibody Therapeutics 6: 13–29.

Zhuang F, Qi Z, Duan K, Xi D, Zhu Y, Zhu H, Xiong H, He Q. 2020. A Comprehensive Survey on Transfer Learning. doi 10.48550/arXiv.1911.02685.

Zingaro KA, Nicolaou SA, Papoutsakis ET. 2013. Dissecting the assays to assess microbial tolerance to toxic chemicals in bioprocessing. Trends in Biotechnology 31: 643–653.