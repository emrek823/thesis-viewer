---
source_pdf: "https://drive.google.com/file/d/17Vw5k44hjEbpV4U4F9V8UVgx4-LFWk7J/view"
drive_folder: "Portfolio/Tuva Health"
type: portfolio
company: Tuva Health
ingested: 2025-12-27
original_filename: "Tuva Health - External Investment Memo c697c49446914490baddb13d128a6791.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/17Vw5k44hjEbpV4U4F9V8UVgx4-LFWk7J/view)

# Tuva Health - External Investment Memo

## Company Essentials
*   **Name:** Tuva Health
*   **Overview:** Tuva is developing open source software that cleans and transforms healthcare data (claims, EMR, labs, etc) so internal healthcare data teams can focus on solving more complex problems.
*   **HQ:** Salt Lake City, UT
*   **Website:** https://tuvahealth.com/
*   **Virtue Public Announcement:** N/A
*   **Founding Year:** 2021
*   **Management Ownership:** 50/50

## Deal Terms
*   **Round Size:** $2.05M
*   **Post-Money:** $20M
*   **Virtue Investment Amount & Ownership (% on fully diluted basis):** 4%
*   **Financing Instrument (equity, SAFE, convertible note, etc.):** SAFE
*   **Syndicate:** YC Continuity, Box Group

## Diligence Overview
*   **Mgmt calls / interaction:** 20+

---

*   **Mgmt References (on & off sheet):** 5+
*   **Potential Series A Partner Validation:** Confirmed; multiple Series A firms have already expressed an interest.
*   **Customers / KOLs / Experts:** 5+

## Executive summary
Healthcare data teams are building the same measures, scraping and organizing terminology datasets, and pre-processing raw data over and over from scratch to prepare data for clinical and financial impact. Tuva is solving these problems by building healthcare specific intelligence on top of dbt, a data tool to transform and organize data in a data warehouse that is quickly becoming the standard across every industry. The Tuva Project - Tuva's open-source project available on GitHub - is a collection of data marts containing concepts useful for a wide range of healthcare analytics and research questions. This open-source approach can drive bottoms-up sales with data teams who engage with the free software, prioritize the product roadmap as these data teams ask for new features, and provide data teams more transparency into data transformation process.

The overall healthcare data ecosystem is large and growing ($20B+) as healthcare organizations look to aggregate data outside of the application layer and in the platform/integration layer with increasing cloud adoption. Data teams in healthcare are growing and becoming increasingly more sophisticated, and they want to understand how their data is transformed rather than working with "black-box" vendors in market today (e.g., Innovaccer). Tuva has already capitalized on this trend and shown evidence of product-led growth targeting a new data engineering/data science persona with some of the most innovative virtual care and health tech companies in market. This early momentum with its open-source model lays the foundation for future business model evolution (managed service, Tuva Cloud, Tuva Network) and a broader customer universe (providers, payers, pharma, etc).

This direct evidence of market pull and unique GTM approach from one of the most technical teams we've seen in the healthcare data space addressed the questions we originally had ~6 months ago at the company's previous round of financing. With this round of financing, Tuva can bolster its team and lay the

---

foundation for a high-growth, high margin SaaS business at a seminal time for the healthcare data industry.

Virtue is investing $800K in a $2.05M seed extension financing (SAFE) for 4% ownership.

## Team

**Aaron Neiderhiser**
CEO + Co-founder
Health Catalyst

**Jorge Zuloaga**
CTO + Co-founder
Strive Health

**Aaron Neiderhiser** - Aaron has spent his entire career focused on healthcare analytics and data strategy, most recently serving as Senior Vice President of Technology for Health Catalyst. At Health Catalyst he was responsible for Touchstone - a data warehouse with granular health data on over 150M patients. Aaron led the overall vision and strategy for Touchstone and oversaw data engineering and data science teams to produce novel data products, including Health Catalyst's suite of patient-level benchmarking and risk adjustment products, as well as the COVID-19 patient registry and resulting real-world evidence studies. Prior to Health Catalyst, Aaron worked for Colorado Medicaid where he led advanced analytics and helped develop the vision for the Business Intelligence and Data Management (BIDM) platform, a massive data warehouse with comprehensive claims, clinical, and social determinants data on every Medicaid enrollee in the state.

**Jorge (CoCo) Zuloaga** - Coco has spent his career focused on healthcare data science, most recently serving as Head of Data Science for Strive Health where he

---

oversaw all machine learning for the company. He has developed deep healthcare domain knowledge by working with a wide range of healthcare data sources and formats to power use cases from informing patient care delivery to population health. Prior to Strive Health, Coco served as Head of Data Science for Big Squid, an early-stage VC-backed machine learning company. Earlier he served in lead data scientist roles at both Health Catalyst and Alliance Health. Coco received his masters in mathematics from the University of Waterloo in Canada and his PhD in computational physics from Rice University in Houston, TX.

## dbt overview
What is dbt? dbt is an open-source tool that allows data teams to transform and organize data in their data warehouse by writing SQL queries to get raw data ready for business impact. dbt Labs, the company that maintains the open-source dbt software, recently raised a $222M Series D at a $4.2B valuation led by Altimeter with participation from Databricks and Snowflake.

### Chart: 5500 companies use dbt
*Caption:* Open-source grow of dbt (fka Fishtown Analytics)
*Title:* The number of companies using dbt 3x'd yoy for the past 5 years

| Year | Approximate Number of Companies | Event |
| :--- | :------------------------------ | :---- |
| 2017 | ~200 | Q2 2016: testing functionality (at approx. 50 companies) |
| 2018 | ~800 | Q2 2018: CI/CD functionality (at approx. 800 companies) |
|      |                                 | Q3 2018: dbt Docs (at approx. 1,200 companies) |
| 2019 | ~1,200 | Q1 2019: hosted the first dbt Learn (at approx. 1,000 companies) |
| 2020 | ~2,500 | Q1 2020: IDE comes to dbt Cloud (at approx. 2,000 companies) |
|      |                                 | Q4 2020: hosted the first user conference, Coalesce (at approx. 2,500 companies) |
| 2021 | ~5,000 | |
| 2022 | ~5,500 | |

The process of gathering data from original sources, cleaning it, and getting it into a warehouse is a tedious process and most of where early data teams spend their

---

time. Traditionally, data teams would extract the data from source, transform in flight for analysis, then load into data warehouse (ETL). It wasn't financially or technically feasible to load all the messy data into your data warehouse. Today, data warehouses are easier and cheaper to use so teams are just funneling source data directly into the data warehouse (E,L), then working with data in the warehouse directly (E → L → T). This makes data transformation as simple as writing SQL in your data warehouse, which is a a major reason dbt has grown so rapidly over the last 5 years.

### Diagram: The Modern Data Stack in the AI Era

*Source:* https://blog.devgenius.io/what-is-the-modern-data-stack-e27b729ef615

This diagram illustrates the flow of data through a modern data stack:
*   **Data Source:** Google Analytics, LinkedIn, Shopify, Stripe
*   **Extract/Load:** Airbyte, Fivetran, Segment, Stitch
*   **Transform:** dbt, Matillion, data iku
*   **Data Warehouse:** Snowflake
*   **Data Science:** data iku
*   **BI Tools:** Looker, Tableau, Power BI, Chartio
*   **Reverse ETL:** Hightouch, Census, Grouparoo
*   **Destination:** Gainsight, HubSpot, Intercom, Zendesk

Ultimately, dbt is a open-source toolset for building data models using SQL. Data teams have hundreds of transformations that comprise these data models. Data models map business domain expertise to the data (e.g., how do we define ARR or a user), have SQL queries to clean data, and provide documentation on how items are defined. The major output of a dbt project is a command that runs your SQL and builds or updates tables in your data warehouse. dbt helps data teams run SQL more efficiently, build models using macros to templatize repetitive SQL, reference other SQL models easily, add documentation to each table, run tests to ensure quality, and many other useful utilities. At the end of the day, even if you could run SQL elsewhere and store views directly in your warehouse, dbt has all of your data model code together in one place versioned via git.

---

### Screenshot of dbt interface

This screenshot shows the dbt Docs interface, specifically detailing a model named "mrr".

**Overview Panel (left):**
*   **Projects:** acme
*   **Data:** models
    *   customer_churn_month
    *   customer_revenue_by_month
    *   mrr
*   **Utils**

**Main Panel (right):**
*   **Model:** mrr (view)
*   **Tabs:** Details, Description, Columns, SQL

**Details Tab:**
*   **Details Table:**
    *   **TAGS:** untagged
    *   **OWNER:** TRANSFORMER
    *   **TYPE:** view
    *   **PACKAGE:** acme
    *   **RELATION:** analytics.dbt_claire_playbook.mrr
*   **Description:**
    *   "This model represents one record per month, per account (months have been filled in to include any perio"
    *   "This model classifies each month as one of: new, reactivation, upgrade, downgrade, or churn."
*   **Columns Table:**
    *   **COLUMN:** id, date_month, customer_id
    *   **TYPE:** TEXT, TIMESTAMP_NTZ, NUMBER
    *   **DESCRIPTION:** (empty for all)

**Lineage Graph (top right):**
*   Shows dependencies:
    *   customer_revenue_by_month (pointing to) mrr
    *   customer_churn_month (pointing to) mrr

*Source:* https://www.getdbt.com/mrr-playbook/#!/model/model.acme.mrr#description

## Tuva: Building Healthcare Intelligence on Top of dbt
Tuva is adding healthcare specific intelligence on top of the "plumbing" dbt provides.

**Current state of healthcare data teams:** In healthcare organizations today, many people with different roles and skillsets (data analysts, data engineers, data scientists) work with data and use their own tools of choice (Databricks, Looker, PySpark, etc). Everyone is pre-processing data, fixing data-quality problems, and defining high-level concepts for their projects. There is no single place where the data lives and no single source for all healthcare knowledge. Data quality checks (is this patient missing dialysis sessions?), exclusion logic (which inpatient encounters do not count as readmissions?), and definitions of high level concepts (readmissions measures) are non-existent or unscalable.

**Tuva Project:** Today, Tuva has built an open-source project called The Tuva Project. The goal of the Tuva Project is to commoditize this core healthcare data infrastructure so that healthcare data engineers can focus on solving higher-value problems and get closer to generating actual insights from healthcare data.

---

### Diagram: Tuva Project (Phase I)

This diagram outlines the architecture of the Tuva Project.

*   **Data Sources (left):**
    *   EHR
    *   Claims
    *   HIE
    *   Lab
    *   Wearables
*   **Tuva Project (middle):**
    *   **Common Data Model** (top)
    *   **Common Terminology** (middle left)
    *   **Data Marts** (middle right)
        *   Readmissions
        *   HCCs
        *   Spend + Utilization
        *   Quality Measures
        *   Patient Attribution
        *   Network + Referrals
        *   Care Gaps
        *   Under-Dx Patients
    *   **Documentation** (bottom)
*   **Data Science (right):**
    *   Notebooks
    *   Dashboards
    *   ML Models

The Tuva Project has four main components:

**Common Data Model (CDM):** A common data model creates a single data layer that all downstream data marts, analytics and ML can be built on top of. Tuva is experimenting today with building its own standard (e.g., the Tuva Common Data Model) but is flexible in leveraging other common data models (FHIR, OMOP, Sentinel, i2b2) based on clients' needs. Tuva's success is not dependent on widespread adoption of the Tuva CDM.

**Common Terminology:** Terminologies (classifications) and ontologies (hierarchical relations of terminologies) are vital for nearly all healthcare analytics. Unfortunately, healthcare terminology datasets are scattered all over the web, maintained by a variety of different organizations, updated on different time intervals, and not always formatted for a data warehouse. The Tuva Project organizes dozens of publicly available terminology datasets so data teams don't have to.

**Documentation:** Most healthcare data companies are a black box and data teams are unable to customize workflows or understand logic to fix issues. Tuva is documenting every aspect of the project in an open-source fashion so that data teams can easily understand exactly how their source data is being transformed.

**Data marts:** Data marts are dbt projects (a directory of .sql and .yml files that the dbt platform uses to transform your data). They contain logic that transforms raw

---

healthcare data into new types of data needed to answer common healthcare analytics questions. A data mart can be queried directly, wired up to a dashboard, or fed into a machine learning model for training/deployment. Examples of data marts include readmissions, HCCs, ACO quality measures, episodes of care, medical economics, risk stratification, network analytics, or disease-specific digital phenotypes (e.g., CKD, cardio-metabolic, MSK). Data teams can easily build on top of and combine data marts to answer more nuanced questions but most data teams won't need to do a ton of additional transformation prior to analysis.

With readmissions, for example, every readmission measure is built on top of two underlying concepts (index admission and the readmission) and most focus on 7 CMS readmission measures (AMI, COPD, HF, Pneumonia, TKA/THA, CABG). Tuva provides terminology datasets that are used as lookup tables to create the index admission and readmission. It has developed sub-algorithms to determine if a patient qualifies as an index admission (cohort inclusion/exclusion, discharged alive, not a transfer, etc) and a readmission (not planned, not multiple, etc). When the data team runs the Tuva readmission mart, tables and views are created that easily help data teams calculate readmissions (e.g., count rows for unplanned readmission and divide by number of rows with index admissions).

## Why now and why open-source?
**Why now:** With the growth in adoption of cloud software, increase in volume of accessible data, and rise of more sophisticated data teams demanding tools to solve more complex problems. Although healthcare as an industry has lagged many others in terms of technology adoption and sophistication, key market dynamics create significant tailwinds for Tuva.

*   **Application layer → platform/integration layer:** The rise of more sophisticated interoperability solutions across different data types and policy/regulatory changes have increased the accessibility of data. This shift has jumpstarted the trend of healthcare organizations separating the application layer (e.g., EMR) and the platform/integration layer to improve data ownership and sophistication. Large cloud providers are leading the change in providing this foundation. As organizations increasingly aggregate data outside of the application layer, they will need tools to go beyond interoperability and accessibility and make use of disparate data sources. Tuva capitalizes directly

---

on this trend by creating the common language and definitions to help organizations transition from data collection to insights.

*   **Pull from digital health and virtual care players:** The most innovative health tech and virtual care companies are champions for Tuva and want to work with the team to inform the future product roadmap. References across the industry, from established product teams at larger startups (e.g., Cityblock) to innovative early-stage companies (Firsthand, Icon) to large cloud providers (Google), have validated the need and timing for a solution like Tuva. These players are not only attracted to Tuva today as a lower-cost alternative to Innovaccer, but as a differentiated solution over the long-term as the industry and Tuva both grow with these innovative first-movers.

*   **Sophistication of data teams and new data science persona for incumbents:** Incumbents across the industry (e.g., providers, payers, pharma) have begun to build out their internal data teams over the last 3-5 years as well. Today, these teams typically rely on a "black-box" vendor (e.g., Innovaccer) where they provide source data and receive an output with little understanding of the transformation process or algorithms used. More and more of these data teams today are asking for tools to help them be 10x more effective without having to outsource everything. Tuva is in this "goldilocks zone" in between DIY and full outsourcing, and will expand beyond virtual care and health tech startups as the product continues to evolve.

**Why open-source?**
*   **Unique GTM with product-led growth:** The open-source model enables a product-led growth strategy selling directly into a data persona within healthcare organizations that did not exist 3-5 years ago. This end user-focused growth model that relies on the product itself as the primary driver of customer acquisition, conversion, and expansion that directly suits Aaron, CoCo, and the rest of the technical early team. They can leverage their deep understanding and experience to empower end users to find, evaluate, and adopt the product on their own. We believe the evolution that we've seen across the broader software space that has led to large, fast growing companies (e.g, DataDog, Slack, Zendesk, etc) is finally coming to healthcare.

*   **Product roadmap prioritization:** Developers and companies who use the Tuva Project today can inform the product roadmap going forward. We are already

---

seeing that from companies such as Syntegra, Icon, and Firsthand that work closely with the Tuva team to recommend and prioritize new features. The nature of the open-source project creates a symbiotic relationship where the process is mutually beneficial for Tuva and its users.

*   **Transparency:** Other vendors in market give data teams minimal transparency. Any changes to the data model or algorithms require weeks or months of back-and-forth because outsourced vendors own all the process and definitions. Customers don't understand how exactly the data was cleaned and normalized, or how people are defining an unplanned readmission. With Tuva, users can see from Day 1 what is under the hood of the Tuva model. This transparency is not simply a "nice-to-have" but directly driving adoption and interest given customers frustration with other vendors.

## Product development
Tuva will continue to develop new product features to evolve its open-source tools while laying the foundation for its evolution to Tuva Cloud and Tuva Network.

**Product Roadmap:** The team's previous experience and direct customer feedback is informing the current list of product features under development. As an example, Tuva originally started developing its readmissions data mart, but found that customers were more interested initially in pre-processing raw claims data. Tuva was able to internalize this feedback, change focus, and build a new pre-processing product in 1-2 months. Some other examples, which are listed in the documentation of the open-source project, include:

*   **Claims pre-processing:** Currently in development, but continuing to build out the pre-processing layer that transforms medical claims data
*   **Connectors:** Data marts to transform different data formats (Medicare CCLF, FHIR, OMOP, Sentinel, i2b2) to the Tuva Common Data Model to increase full adoption by customers rather than individual use case adoption
*   **Terminology:** Normalizing lab, medication, vital signs, and chronic condition data across different sources to common terminology (SNOMED-CT, RxNorm, LOINC, etc)
*   **Data Quality:** Data integrity and reasonableness analytics that automatically highlights common data integrity issues (table, column names) and more

---

complex issues (is this a reasonable number of dialysis visits for this patient?)

*   **Government Measures and Definitions:** Algorithms and logic for users to implement common measures and definitions within their workflow, including readmissions, HCCs, chronic conditions, ACO quality measures, and episodes of care
*   **VBC analytics:** Data marts and analytics to enable risk stratification, medical economics, network analytics, patient attribution, and other common questions that companies will ask when dealing with risk-based arrangements
*   **Digital phenotypes:** Deeper patient level insights for precise patient cohorts (cardio-metabolic, neurology, MSK, CKD, etc) defined by demographics, diagnostics, and family history designed to model human health within this disease family

**Managed Services:** As Tuva evolves, the company will continue to layer on managed services as an up-sell to its open-source platform to drive additional revenue. The company has opportunities today to generate >$1M in revenue from managed service engagements, but has strategically decided to invest in the open-source platform to lay a foundation for future growth. These services could range from $100K - $500K based on comps to equivalent in-house FTEs required to do the same work. Given current product prioritization and the roadmap for the rest of the year, Tuva will plan on rolling out managed services towards H2 2023.

Veeva provides a great example of how software and services can play off each other to drive long-term value. At founding, Veeva got about about 50% of its revenue from services (20-25% gross margin) and the other half from subscription software (75-80% gross margin). Today, Veeva gets ~80% of its revenue from software via up-selling into new products across divisions within life science companies from R&D through commercial. Their subscription revenue retention has been 100-120%+ basically every year with an average revenue per customer that is one of the largest in the entire SaaS industry. Veeva had the ability to do that because it established trust with its end customers with a hands-on on-boarding, rollout, and customization process of the software and professional services to share learnings from their work with other customers. Tuva should be able to employ a similar approach with a superior product, especially compared to Veeva's platform cobbled together on Salesforce in 2009.

---

## Tuva Cloud and Tuva Network
Going beyond the open-source platform, Tuva has the ability to build a "Tuva Cloud" offering where customers outsource their data and transformation to the company. In this model (pictured below), Tuva would build proprietary software (e.g., normalization engine, data quality surveillance, etc) as an up-sell to its open-source platform.

### Diagram: Tuva Cloud: Proprietary Software in Purple Added

This diagram shows the Tuva Cloud architecture, which builds upon the Tuva Project by adding proprietary software components.

*   **Data Sources (left):**
    *   EHR
    *   Claims
    *   HIE
    *   Lab
    *   Wearables
*   **Proprietary Software (middle left - in purple):**
    *   **Normalization Engine**
        *   Auto-mapped Recommendations
        *   Human-in-the-Loop Workflow
    *   **Data Quality Surveillance**
        *   Detect
        *   Prioritize
        *   Monitor
*   **Tuva Project (middle right):**
    *   **Core**
        *   Common Data Model
        *   Common Terminology
    *   **Enrichment (Data Marts):**
        *   Readmissions
        *   HCCs
        *   Spend + Utilization
        *   Quality Measures
        *   Patient Attribution
        *   Network + Referrals
        *   Care Gaps
        *   Under-Dx Patients
    *   **Data Quality Testing**
    *   **Documentation**
*   **Data Science (right):**
    *   Notebooks
    *   Dashboards
    *   ML Models

The Tuva Network is representative of the exciting future Tuva can create as more customers join the platform. At scale, every customer's data in the exact same quality tested format can enable reusable community-created content and multi-customer datasets for benchmarking, research and ML. The Tuva network has the potential to set a new standard for healthcare data practitioners interact and view data - a privileged opportunity that opens up Tuva to a broad customer universe.

## Go-to-market / Business Model
Today, Tuva is selling to innovative health tech (Syntegra) and virtual care players (Icon, Firsthand) who are more likely to adopt innovative data tools.

**Virtual Care Companies:** Virtual care companies can't afford Innovaccer but are still looking for tools to improve the performance of their burgeoning data teams. Icon Health, for example, has a senior product leader and a lower level data analyst that knows SQL, but utilizes Tuva instead of hiring another 1-2 members on

---

the data team. Firsthand is a more sophisticated data and product organization (3-5 members) that has raised ~$15M in funding and is offloading a majority of their claims pre-processing work to Tuva so their internal team can focus on tasks more specific to its SMI patient population. Tuva provides value today and will only become increasingly more valuable as these customers collect more data at scale.

**Health Tech:** Early work with Syntegra shows potential to address a health-tech large customer universe - essentially anyone utilizing healthcare data. Below is our analysis of the healthcare tech market landscape and the different questions they could answer with Tuva.

### Diagram: Health Tech Market Map

This diagram categorizes various healthcare tech companies and their functionalities, organized by different "systems" and addressing different user questions.

*   **Vertical Questions (left):**
    *   Can we add domain expertise to data science process?
    *   Can we deliver precise and actionable insights?
    *   Are we targeting the right patients?
    *   How do we standardize across data sources?
    *   Is this data high-quality?

*   **Systems Categories (left vertical):**
    *   END-USER SYSTEMS OF INTELLIGENCE
    *   MIDDLEWARE
    *   SYSTEMS OF ADMIN
    *   SYSTEMS OF RECORD

*   **Main Segments (top horizontal):**
    *   PROVIDER/PAYER/VIRTUAL CARE
    *   LIFE SCIENCES/MEDTECH

*   **Key Areas and Example Companies:**
    *   **PROVIDER/PAYER/VIRTUAL CARE:**
        *   **Referral Optimization:** Qventus, Lumeon, Amino
        *   **Network Analytics:** Definitive, CareJourney, OPTUM, stellarhealth
        *   **Rate Intelligence:** signifyhealth, icario
        *   **RWE:** AETION, ConcertAI, evidation
        *   **Commercial Analytics:** komodo, OM1
        *   **Trial Recruitment:** IOVIA, trialbee
        *   **VBC Administration and Care Gaps:** OPTUM, HealthCatalyst, ARCADIA, CEDAR GATE
        *   **Payments & GRC:** R1, Symplr
        *   **Care Mgmt. Engine:** ZeOmega, medecision
        *   **Member Engagement:** Accolade, HEALTHSPARQ
        *   **Trial Admin:** Veeva, Medable, Science 37
    *   **LIFE SCIENCES/MEDTECH:**
        *   **Trial Networks:** TriNetx, nference
        *   **Trial Management:** Veeva, medidata
    *   **Tokenization, Synthetic Data, Chart Retrieval, EDI, HIES, CDIS:** SYNTEGRA, WiA, REDOX, Inovalon
    *   **EMR, Practice Management, Labs, Prescriptions:** surescripts, Cerner, athenahealth, LIMS
    *   **Claims:** elixir, Cognizant, PLEXIS

**Providers, payers, pharma:** As Tuva develops its own proprietary software on top of the open-source software and continues product feature development, it can continue to move upstream and sell to larger healthcare incumbents (providers, payers, and pharma). The sophistication of data teams over the last 3-5 years has increased massively. Leading players, such as Novartis, Optum, and Mayo Clinic, have already invested heavily in internal data capabilities and teams and the rest of the industry is beginning to follow suit. Historically, these players have worked with outsourced / managed service vendors (e.g., Accenture, Innovaccer, Health Catalyst, etc). We have heard from these players that they are looking to bring more of the process and tooling in-house as internal capabilities become more sophisticated.

---

## Business models
As Tuva evolves from its open-source project, there are multiple avenues for monetization as shown by its open-source peers in other industries:

| | Open-Core | Proserv | Hosting | Marketplace |
| :---------- | :-------- | :------ | :-------- | :---------- |
| **Margins** | >80% | 20% - 40% | 40% - 70% | >60% |
| **Defensibility** | High | Low | Low | High |
| **Scalability** | High | Medium | Medium | High |
| **Examples** | Confluent, Elastic | Hortonworks | MongoDB, WP Engine | Android, Moz://a |

*   **Open-core:** Companies build commercial products to extend their open-source software. These can be UX or collaboration tools to improve ease of use, scalability and security to scale across and enterprise, or use-case specific functionality.
*   **Professional services (or managed services):** Companies utilizing the open-source model while paying for additional support and consulting.
*   **Hosting:** Open-source companies offer managed cloud-hosting solutions to enable end-users to utilize infrastructure components without the operational overhead
*   **Marketplace:** Although less common, Android, which generates revenue from the Play store, and Mozilla, which generated a bulk of their $500M in revenue by providing lead generation to search engines, are example of marketplace models.

---

## Market
Data infrastructure has exploded across the broader software space as startups across the stack look to capture massive market opportunities. Some of the most valuable and fastest growing software companies in the world - Snowflake ($54B enterprise value), Databricks ($28B valuation), MongoDB ($25.8B), Dbt labs ($4.2B valuation), Segment ($3.2B acquisition by Twilio), Looker ($2.6B acquisition by Google) - are tackling these market opportunities.

### Diagram: Data infrastructure has exploded across the broader software space

This diagram illustrates a comprehensive view of the modern data stack, from data collection to output.

*   **Data Collection, Ingestion & Storage:**
    *   **Data Sources:** MySQL, LinkedIn, Stripe, Segment, Snowflake, Rudderstack, Google Analytics
    *   **Data Storage & Compute:** Amazon S3, Azure, Databricks (DELTA LAKE, ICEBERG), Hudi, Salesforce, Cloudera, Snowflake, Firebolt, Amazon Redshift, Google Big Query
    *   **Data Loaders (Ingest):** Fivetran, Matillion, Meroxa, Estuary, Decodable, Flatfile, Airbyte, Vectorized

*   **Data Transformation, Querying & Processing:**
    *   **Transformation:** dbt, Matillion, data iku, transform
    *   **Coordination & Metrics:** Supergrain
    *   **Querying & Processing (Batch/Ad hoc):** Starburst, Ahana, Dremio, DataDistillr
    *   **Streaming/Real-time:** ksqlDB, Confluent, Rockset, Altinity, Materialize

*   **Data Modeling & Analysis:**
    *   **IDEs & Workspaces:** Noteable, Observable, Deepnote, Jupyter, Opaque, HEX, Devron
    *   **Data Science Platform:** Databricks, DataRobot, data iku, DOMINO, TopCoat, Superset
    *   **AI/ML:**
        *   **Labeling:** Labelbox, Scale
        *   **Training:** W&B, GRID-AI
        *   **Deploying:** Cortex, BENTOML
        *   **Monitoring:** Arthur, fiddler
    *   **ML Ops:** ALGORITHΜΙΑ, Snorkel, Verta, OctoML, Tecton, DVC

*   **Data Output:**
    *   **Data Analytics Platform:** SISENSE, anodot, ThoughtSpot, Continual
    *   **BI/Viz:** Looker, Tableau, Power BI, Chartio, Metabase, Streamlit, plotly
    *   **Reverse ETL:** Census, Hightouch, Polytomic, Grouparoo
    *   **Workflow Orchestrators:** Prefect, Astronomer, Airflow, Dagster, Flyte, Metaflow
    *   **Data Management & Governance:** Collibra, Metaphor, Acryl Data, Alation, MANTA, atlan, BigID, OKERA, Stemma, SELECT STAR, MMUTA, PRIVAGERA
    *   **Data Monitoring & Quality:** acceldata, Anomalo, MONTE CARLO, Bigeye, Databand, lightup, SODA, great expectations

---

According to Snowflake, the total cloud data platform TAM is estimated to reach ~$250B by 2026, with ~70% coming data warehouse/lake or unistore and the other ~30% coming from collaboration, data engineering, data science and ML applications. Data management software, offered by MongoDB and other cloud competitors, is also expected to reach a massive TAM of ~$140B by 2026. Recent CIO surveys from Morgan Stanley support this continued growth beyond COVID as CIOs expect to increase the percentage of application workloads in the cloud from 23% to 44% over the next 3 years.

No matter the definition or view you take of the overall opportunity for data infrastructure, the market is huge and growing rapidly with room for multiple winners. To analyze the market with a healthcare specific lens, we took a bottom-ups and tops down approach. Multiple estimates and methodologies, from McKinsey or cloud software provider like Nutanix, show the state of healthcare cloud adoption is lagging other industries but no more than 5 years behind. In conversations with experts in the cloud and general data space, 10-20% of spend can be attributed to healthcare.

This top-downs approach aligns with use-case specific bottoms-up approach from other healthcare specific players. Although exact numbers vary, we have high confidence that these large market across payers, providers, and life sciences ($25B+) have the potential to support multiple winners.

### Chart: Healthcare Data and Analytics Vendor TAM Triangulation

*Title:* Healthcare Data and Analytics Vendor TAM Triangulation
*Y-axis:* TAM ($B)
*X-axis:* Source

| Source | Segment | Value ($B) | Total ($B) |
| :------------------------------ | :-------------- | :--------- | :--------- |
| Health Catalyst (Provider Only) | Provider | $8 | $8 |
| Clarify | Provider | $10 | $25 |
| | Life Sciences | $5 | |
| | Payer | $10 | |
| McKinsey | Provider | $35 | $64 |
| | Life Sciences | $15 | |
| | Payer | $14 | |

---

## Competition
There are multiple players across the healthcare data landscape that could help data teams make use of messy healthcare data or answer similar questions compared to Tuva from a "jobs-to-be-done" perspective. Tuva will differentiate itself with its transparency, pricing, open-source, and product features.

**Health Data Platforms:** Health data platforms, such as Innovaccer and Ursa, are the closest competitors to Tuva today.

**Innovaccer ($3.2B valuation, $380M raised):** Innovaccer competes on the higher end of the market (ACV of $1M+) for larger customers who want to outsource everything to its 1,000+ person outsourced engineering team. InData, which is similar to the core components of Tuva today and plans for the near future, is an ETL-based visual management interface to the source, map, transform/standardize and ingest data on the Innovaccer platform. InAPI and the "act" portion of the workflow go beyond Tuva's capabilities. InAPI is part of its CMS compliance solution which provides the security, authentication, and authorization for building and exposing FHIR APIs. The "act" portion of the workflow (population health, care management, clinician assistant, and patient engagement app/portal) creates applications for point of care physician engagement (InNote) or patient applications that allow patients to initiative virtual visits (InConnect).

For all of these use cases, Innovaccer owns everything and takes ~12 months for any impactful implementation. Innovaccer users describe the process of waiting for customer success teams to be staffed, funneling data into a black box and getting dashboards/outputs back without context, waiting weeks/months to answer questions, and requiring additional work to transform Innovaccer's data model back to their own after the output of the project.

---

### Diagram: Innovaccer Data Activation Platform (DAP) and Workflow Components

This diagram outlines the Innovaccer Data Activation Platform (DAP) and its workflow components.

*   **Sources:**
    *   Claims Data
    *   Clinical Data Sources (EMRs, HIEs, Labs, Pharmacies, Registries, Delta Dental, Docs/Images)
    *   Other Data Sources (Consumer Behavioral, Preferences, Interactions, Etc.)
*   **Ingest:**
    *   **indata (Data Activation Platform):** Pre-built EMR Connectors, Data Cataloging, Healthcare file parsers, Validate
    *   **AWS S3**
    *   **Kubernetes**
    *   **mongoDB (Application Data Storage):** Configurations, EMR Templates
*   **Transform/Enrich:**
    *   **SQL (indata Queries)**
    *   **indata (Data Activation Platform):** Cleanse/Transform, Match/Merge/Dedupe, Enrich with SDOH, NLP, Consumer/Behavioral data, Ontologies, Crosswalks, Data Quality, Semantic Unification, EMPI, Publish Unified Patient Records (UPR)
    *   **Kubernetes**
*   **Analyze:**
    *   **Aurora Postgres (UPR Data Model, Analytical Results)**
    *   **AWS Redshift**
    *   **AWS Sage Maker**
    *   **Data Migration Service**
    *   **Serve:**
        *   **inapi (Data & API Services):** FHIR, HL7, UPR APIs
        *   **Elasticsearch**
        *   **Kubernetes**
        *   **mongoDB (Application Data Store)**
        *   **API Gateway**
*   **Act:**
    *   **ingraph (Pre-Built Analytics):** Population Health BI, Self Service BI, Visualize data and learnings
    *   **incare (Care Management)**
    *   **innote (Clinician Assistant)**
    *   **inconnect (Patient Engagement):** Web Portal & Mobile App
    *   **Third Party Apps**
    *   **Developer Portal**

**Ursa Health ($2M convertible note in 2022):** Ursa is a Nashville-based startup that has been bootstrapped for the last 7 years before receiving a small, strategic investment from Valtruis (WCAS growth-equity arm) earlier this year. Similar to Tuva, Ursa provides connectors that clean and integrate source data, a core data model covering 100s of reusable tables/concepts, and out-of-the-box content modules that solve common healthcare challenges. We have heard from experts that Ursa is too reliant on managed services and has failed to invest in major pieces of its technology-stack with limited funding. Ursa has been able to secure clients such as Oak Street Health and BCBS North Carolina with this outdated technology platform, highlighting the opportunity for a novel entrant like Tuva.

---

### Diagram: Ursa Analytics Architecture (2022 Slide Deck)

This diagram shows the architecture of Ursa Analytics.

*   **ANY SOURCE-SYSTEM DATA (left):**
    *   Provider practices
    *   Health plans and PBMs
    *   Virtual health
    *   Third-party delegates
    *   Health information exchanges
    *   Health systems and ACOs
    *   Government health orgs
    *   S3
    *   Azure storage containers
    *   Flat files
*   **ANY RELATIONAL DATABASE (middle):** (e.g., MSSQL, Snowflake, PostgreSQL, Azure Synapse, Redshift)
    *   **URSA STUDIO:**
        *   **NO-CODE TECHNOLOGY (to accelerate customization):**
            *   No-code data modeling
            *   Master data management
            *   Native ELT
            *   Advanced analytics
            *   No-code measure authoring
            *   Cross-team collaboration
        *   **PRE-BUILT CONTENT (to accelerate build time):**
            *   Core Data Model
            *   Healthcare reference library
            *   Population Health Foundations module
            *   Issue-specific analytic modules
*   **DIRECT ACCESS (right - to enriched assets for any purpose):**
    *   Ursa Studio's Analytics Portal
    *   Other visualization tool
    *   SQL client
    *   Export / Embed (CSV, PNG, REST API, iframe)

**Enrichment platforms:** Milliman, a global consulting and actuarial firm, and John Hopkins provide data enrichment services but are typically limited to claims only. They have internal tools and services to help clients make decisions based on data. Both groups, for example, have developed their own risk scores - the Milliman Advanced Risk Adjusters (MARA) and the Johns Hopkins Advanced Clinical Grouping (JHU ACG) - that provide an additional layer of analysis to enrich raw claims data. The services these groups provide are typically a black-box and too expensive for many companies ($500K+ for small projects).

**Normalization (unstructured data):** NLP platforms, such as John Snow Labs, mendel.ai, and science.io, help to normalize unstructured or semi-structured data sources and typically sit upstream of data transformation processes. While these companies theoretically could compete with Tuva over time, it is unlikely given the core competencies they have developed in mining text today. Innovaccer has actually partnered with an NLP company SyTrue, demonstrating the potential for partnership rather than competition.

**Large cloud providers (AWS, GCP, Azure):** AWS, GCP, and Azure are spending billions of dollars to compete and better position themselves in the massive cloud market (e.g., AWS at >$70B run-rate today). These cloud providers are ultimately providing customers with performance, scalability, and availability, and will partner or build their own solutions to improve that offering. All of the large cloud players have built healthcare specific solutions - AWS (AWS HealthLake), GCP (Google

---

Cloud Healthcare Data Engine), Azure (Azure Health Data Services) - demonstrating an interest and focus in the healthcare space. However, similar to how dbt Cloud Enterprise is on the AWS Marketplace today, these companies are more likely to partner with innovative companies today rather than build internally. Conversations with individuals at these proved an interest and willingness to partner with Tuva, rather than compete.

**Other:** Other companies across the data infrastructure stack, such as Capitol.ai and Great Expectations, are more complementary than competitive for Tuva today but do have some minor overlap.

**Great Expectations (upstream of Tuva):** Great Expectations focuses on multiple industries (not just healthcare) and is a python-based open source data validation and documentation framework to ensure data quality. With Great Expectations, data teams can express in declarative language what they expect from the data they load and transform, and catch data issues quickly (e.g., Ejection fraction for patient with HFrEF should be <40%). This data validation and testing is only one piece of what Tuva does (in addition to building a common data model and providing healthcare data marts).

Data teams today use Great Expectations and dbt in tandem (if they want to create more complex tests with python vs. SQL in dbt) or may only use dbt tests (e.g., easier to write, co-located with your models, easier to run with dbt command line interface). Ultimately, Tuva's healthcare specific focus, broader offering, complementary nature today, and the overall opportunity for multiple winners in the healthcare data space reduce nature of competitive threats.

**Capitol.ai (downstream of Tuva):** Capitol.ai is a no-code analytics tool for BI and data visualization focused exclusively on healthcare today. The company's goal is humanize data analytics through automated insight generation and data storytelling for a non-technical audience. As an example, Icon Health uses both Tuva and Capitol.ai today. While Icon team members noted that Capitol could theoretically move upstream and do some of the same tasks as Tuva, they have very separate core competencies today. Tuva's vision is to focus on the more complex data transformation piece originally and expand over time based on market pull.

## Financing / Milestones

---

If Tuva wanted to provide managed services and be one of a dozen black-box, outsourced data shops, the company could confidently generate $1M+ in revenue this year given current interest for managed services. Tuva has explicitly chosen to prioritize technical and product excellence with this round of financing to lay the foundation for future success. Building a transformational healthcare data company capitalizing on changing market dynamics over the next 3-5 years requires a different approach. Over the next 12-18 months, Tuva wants to:

*   **Hire the best healthcare data engineers:** The opportunity to speed up hiring was the main impetus for raising additional funding. Aaron and CoCo have already identified a roster of healthcare data engineers with 5-10 years of experience in the space that they would like to bring on throughout the rest of 2022. Throughout the rest of 2023, the company will continue to focus on engineering and data science hires given focus on platform / tool development and early, founder-led sales.
*   **Build out and prioritize open-source product features:** Tuva has listed dozens of product features on its product roadmap that are already in development or are planned for the rest of 2022. Customers and experts we have spoken to note this timeline and amount of work is ambitious, but feasible given the incredible work they have seen from the team to-date
*   **12 companies on the platform:** The team has a goal of having 12 companies on the platform in the next 12 months. Initial interest and market pull gives us confidence this is a strong probability and it is more important to selectively choose companies that will be strong thought partners, strong users for near-term features on the roadmap, and evangelists in market. Beyond Syntegra, Icon, and Firsthand, other interested companies include Vanna (SMI care delivery), Kara (virtual palliative care), Laguna (post-discharge), Pine Park (PCPs for assisted-living), Javara (clinical trials), and Atopos (RWD), among others.
*   **Explore managed services:** As mentioned, the team is not exclusively focused on driving revenue from managed service contracts that may distract from the priorities over the next 6-12 months. The team's plan is to start pursuing managed service relationships next year when they have the bandwidth to prioritize, but they will be open to opportunities that fit their strict prioritization and focus.

---

## Exit / Waterfall
Tuva, a data infrastructure business building its foundation with open-source software, has unique valuation inflection points compared to other companies in our portfolio (care delivery, RCM, D2C, pharma tech).

*   **Open-source foundation / creating a new standard:** Tuva's success is not reliant on creating a new healthcare data standard (e.g., the Tuva Common Data Model) but there is a potential to fundamentally redefine how the healthcare industry works and thinks about data. These early investments may not pay dividends for the company right away but in the long-term this early investment in the technical foundation and healthcare data community can make Tuva a leader in a $20B+ market.
*   **Network effects:** The path to accomplish the long-term vision for the "Tuva network", a multi-customer data network and data science benchmarks for research and ML, is not linear or even similar to the 2-3x YoY growth we'd expect from some of the top decile companies in other spaces. It takes time, investment, and strong developer support to build this network which can provide exponential returns over time.

To reflect this, we modeled a wider dispersion of potential exit outcomes and dilution scenarios, while also recognizing the potential scalability of the data platform and inherent high gross margins.

### Table: Scenario Description

| Scenario Description | Exit Range |
| :----------------------------------------------------------------------------------------------------------- | :--------- |
| Acquihire of one of the most experience and talented data teams in healthcare | $100M |
| Tuva remains a managed service company for virtual care without evolution to Tuva Cloud offering | $100M - $200M |
| Launches Tuva Cloud offering but fails to scale to incumbents as their internal data science sophistication/hiring slows | $200M - $300M |
| Tuva begins to displace Innovaccer and other larger competitors in key accounts | $500M - $1B |
| Tuva Network (multi-customer data network and data science benchmarks for research and ML) is a success | $1B+ |

---

### Table: Exit Potential ($M)

| Ownership @ Exit | | $100 | $200 | $300 | $500 | $750 | $1,000 | $2,000 |
| :---------------- | :------------------------ | :--- | :--- | :--- | :--- | :--- | :----- | :----- |
| 1.60% | Absolute Returns ($M) | $1.60 | $3.20 | $4.80 | $8.00 | $12.00 | $16.00 | $32.00 |
| | CoC | 0.93x | 1.86x | 2.78x | 4.64x | 6.96x | 9.28x | 18.55x |
| 2.00% | Absolute Returns ($M) | $2.00 | $4.00 | $6.00 | $10.00 | $15.00 | $20.00 | $40.00 |
| | CoC | 1.16x | 2.32x | 3.48x | 5.80x | 8.70x | 11.59x | 23.19x |
| 2.50% | Absolute Returns ($M) | $2.50 | $5.00 | $7.50 | $12.50 | $18.75 | $25.00 | $50.00 |
| | CoC | 1.45x | 2.90x | 4.35x | 7.25x | 10.87x | 14.49x | 28.99x |
| 3.00% | Absolute Returns ($M) | $3.00 | $6.00 | $9.00 | $15.00 | $22.50 | $30.00 | $60.00 |
| | CoC | 1.74x | 3.48x | 5.22x | 8.70x | 13.04x | 17.39x | 34.78x |
| 3.50% | Absolute Returns ($M) | $3.50 | $7.00 | $10.50 | $17.50 | $26.25 | $35.00 | $70.00 |
| | CoC | 2.03x | 4.06x | 6.09x | 10.14x | 15.22x | 20.29x | 40.58x |
| 4.00% | Absolute Returns ($M) | $4.00 | $8.00 | $12.00 | $20.00 | $30.00 | $40.00 | $80.00 |
| | CoC | 2.32x | 4.64x | 6.96x | 11.59x | 17.39x | 23.19x | 46.38x |

The base outcomes (showed unweighted based on probability) demonstrate the expected absolute returns and CoC multiple based on a $1.725M total investment over 2 rounds. After a hypothetical $15M Series A at a $50M pre-money valuation, Virtue would have 4.5% ownership with a follow-on investment of $925K. The ownership at exit going forward is determined by modeling out future financing rounds, valuations, and exit timelines (2025 and beyond) based on the scenarios described above.

For example, if the early investment in open-source fails to inform and prioritize a product roadmap and build interest in developer community to garner ACVs greater than $100K - $200K, Tuva may have to invest more heavily in managed services. This strategy would cap overall growth but likely reduce long-term capital needs. In this scenario, the company will likely only raise 1-2 more rounds of financing at sub-optimal valuations, diluting our ownership (~3% at exit) without reaching exit velocity ($100M - $300M exit). If the company is able to develop its Tuva Cloud offering, reach incumbents, and start to execute on its vision for the Tuva network, it will require more significant funding ($100M+) but raise at more favorable valuations to limit our dilution

As with all investments, the "return the fund" analysis shows gives us confidence that Tuva alone could return the entire $31.25M Fund I. While these scenarios will likely require more funding and have a higher probability of incurring more dilution to our Seed and Series A position over time, it is representative of the potential and confidence we have in the company.

---

## Opportunities/risks

### Opportunities
*   **Timing in large market:** Healthcare data and ownership is moving from the application to the platform/integration layer, internal healthcare data teams are getting more sophisticated, healthcare organizations continue to move towards the cloud, and the overall volume of data in healthcare continues to grow exponentially. Tuva has the opportunity to position itself as a leader for innovators in the market today and grow with the industry over time to capture a massive opportunity in a $20B+ market.
*   **High gross margin software business:** A transformative SaaS businesses in healthcare like Tuva provides the best of both worlds - the high gross-margins (70-80%+) and recurring revenue from the SaaS world and stickiness of healthcare customers (e.g., less likely to rip and replace). While in the early days, Tuva will incorporated managed services (20%-30% gross margins) to help grow its platform and serve customers, its long-term business model have very attractive margin profiles.
*   **Data flywheel:** There is an opportunity to simply build a next-gen Innovaccer that is more transparent, build on modern data infrastructure, and less service heavy. While this represents a very attractive opportunity in and of itself, the way Tuva is building today sets them up for a potential future where the "Tuva Network" is the de-facto standard for healthcare data for all stakeholders (health systems, payers, pharma, etc).

### Risks
*   **Turns into managed service:** Tuva could fall prey to what dozens of healthcare data vendors have suffered before - becoming an outsourced data consulting shop. Early contract values for managed services can be attractive because organizations peg these contracts to the cost of equivalent data science FTEs ($200K+ per FTE). Over time, these one-off contracts and consulting engagements don't scale and these companies fail to reach exit velocity. As mentioned (and discussed above with the Veeva analogy), there are strategies to effectively used managed services to help inform and grow a scalable software platform. Tuva is not explicitly targeting managed service engagements today (although will not turn down those that match its roadmap)

---

to maintain its laser-focus on building the open-source platform. It takes an extremely sophisticated, technical team with a bold vision to succeed with this approach.

*   **Data teams want to outsource instead of bringing in-house:** Aaron and CoCo have seen through their experiences and we've heard from our diligence that data teams are growing inside healthcare organizations and will increasingly look to bring innovative tools in-house rather than outsource everything to vendors. If this trend stalls or remains within only an early-adopter/early majority customer group, the overall opportunity for Tuva is drastically smaller.
*   **Future competition:** The healthcare data space is large and growing with many potential competitors in healthcare, broader data infrastructure companies, and large cloud providers. Tuva is differentiated today in its approach, but we fully expect other players to launch in the coming years with similar approaches. Healthcare data, particularly in data transformation where Tuva focuses today, is large, attractive, and well-known problem space.