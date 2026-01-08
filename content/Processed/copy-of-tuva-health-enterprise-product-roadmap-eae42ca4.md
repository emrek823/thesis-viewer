---
source_pdf: "https://drive.google.com/file/d/1d9DNtqpPMxUfxw8nLmX6KIov_6Y5xn5ygZudZp-ODms/view"
drive_folder: "Portfolio/Tuva/Tuva Health/Tuva-Data-Room"
type: portfolio
company: Tuva
ingested: 2025-12-23
original_filename: "Copy of Tuva Health Enterprise Product Roadmap.gdoc"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1d9DNtqpPMxUfxw8nLmX6KIov_6Y5xn5ygZudZp-ODms/view)

Tuva Health Enterprise Product Roadmap

# Product Strategy

When an organization adopts the open-source Tuva data model, they start using it to generate insights that improve decision-making.  As they see value from these insights, they load more data into the model.  Over time, the Tuva data model becomes the central hub for all their data—and the obvious place to generate intelligence.  As it becomes core infrastructure, organizations naturally invest more in:

Improving the quality of data going into the model.

Enhancing their ability to generate insights from it.

We’re building a library of enterprise (paid) products designed to deliver clear, compelling value as organizations deepen their use of the Tuva data model.  Most of these products aren’t new ideas—but because they integrate seamlessly with the Tuva data model, they create more value and are more cost-effective than competing alternatives.

Our enterprise products fall into five categories:

### Cost Reduction & Ease of Use: Tools that lower the cost of running Tuva and make it easier to do so at scale.

### Tuva Enterprise

### Data Quality: Tools that improve the quality of data flowing into the model.

### Real-time Clinical Data

### Data Normalization Engine

### Master Data Management

### Data Enrichment: Tools that enhance and augment data already in the model.

### NCQA HEDIS Measure Engine

### Clinical Episode Grouper

### Patient Stratification Models

### Risk-adjusted Benchmarking

### Insight Generation + Delivery: Tools that streamline the generation and delivery of insights to clinical and business users.

### Generative Clinical Insights

Care Gaps and HCCs

Data Monetization: Tools that help organizations unlock the monetary value of the data in Tuva.

### De-identified Research Dataset

# I. Cost Reduction & Ease of Use

## A. Tuva Enterprise

Launch Date: Q3 2025

Product Description:

Using any of the Tuva open-source tools individually is relatively straightforward and simple for an engineer to get up and running quickly.  However, the majority of organizations that use Tuva as their healthcare analytics platform will need the following five open-source products:

Core Platform: Core Data Model, Data Marts, Terminology + Value Sets

Enterprise Master Patient Index: Algorithm and application for generating a master patient ID across all your data sources.

Data Quality: Testing and analytics for monitoring data quality across all your data sources.

Risk-adjusted Benchmarking (Medicare-only): Models that create patient-level benchmarks for every cost, utilization, and outcome measure in the Tuva data model.

Patient Stratification Models (Medicare-only): Models that create patient-level predictions for future high-cost and acuity events.

Considerable software and data engineering work is required to fully integrate these products and manage them over time – we conservatively estimate 1 FTE on an ongoing basis.

To solve this problem we’re building Tuva Enterprise, a completely turnkey version of Tuva that contains the aforementioned products.  Rather than spend time and resources engineering the open-source, organizations can get up and running with Tuva Enterprise in a single day.

Tuva Enterprise also comes with the following benefits over the open-source:

Enterprise support and SLAs for break-fix and issues

Substantial cost savings on data warehouse compute and software licenses

One of the concerns we hear from customers that adopt Tuva open-source is how much their cloud data warehouse bill is going to increase as they add more data sources.  While modern cloud data warehouses like Snowflake and Databricks are incredibly powerful and convenient, they become quite expensive as the volume of data being processed by them scales (this is why both companies are worth north of $50 billion dollars!).  Small Tuva customers (e.g. 5 data sources) can spend $50,000 per year while the largest customers (e.g. 100 data sources) can exceed $1 million per year in their data warehouse bill.

Tuva Enterprise runs on commodity cloud computing (e.g. AWS EC2), which enables us to reduce the total compute cost compared to cloud data warehouses by 90% or more.

Tuva Enterprise still runs inside the customer’s cloud, giving the customer full control of their data and the data model, just like Tuva open-source. Raw data sources are transformed into the Tuva data model and then the full data model is loaded into the customer’s cloud data warehouse. The customer then performs downstream transformation for analysis and customization inside their cloud data warehouse.

Competitors:

Platforms: Innovaccer, Arcadia, Abacus, Health Catalyst, Milliman MedInsight, Ursa, Wellstack, etc.

Point Solutions: N/A

Tuva Differentiation:

We are the only vendor (that we know of) that gives the customer complete control over the data and code that transforms it inside their cloud (i.e. no vendor lock-in).

Pricing:

Tuva: $125,000 per year

Competition: $500k – $1m+

# II. Data Quality

## A. Real-time Clinical Data

Launch Date: TBD

Product Description:

Customers that adopt Tuva commonly have access to claims data and EHR data sources.  We often hear that customers are also interested in real-time clinical data from outside their EHR. This includes data from HIEs, ADT messages, lab results, prior authorization, and prescription fill data.

Many Tuva customers have directly contracted with FHIR API companies to access this data (e.g. Health Gorilla, Particle, Zus, Metriport).  However, these companies merely provide customers access to the raw clinical data in JSON format. What customers really want is this data fully integrated into the Tuva data model, so that it’s normalized, validated and enriched, and ultimately combined with their other data sources.

We are partnering with Metriport to directly access raw clinical data on behalf of customers and are building an integration to combine this data with the rest of their data sources in the Tuva Data Model, as well as a suite of analytic tools that use this data to accurately forecast claims expenditures well in advance of completed claims data.  This drives predictive analytics that yield real-time, actionable insights that can drive interventions to improve quality and lower the cost of care.

Competitors:

Platforms: N/A

Point Solutions: Zus, Particle, Health Gorilla, Metriport, Kno2, xCures

Tuva Differentiation:

We deliver real-time data directly into the Tuva data model, as opposed to raw data formatted as FHIR/JSON.

Predictive analytics are based on the customer’s entire set of data sources (i.e. claims, EHR, and real-time clinical data).

Pricing:

TBD

## B. Data Normalization Engine

Launch Date: TBD

Product Description:

Customers often have unstructured data sources (e.g. PDFs, free text) as well as structured and unstructured data sources that are missing clinical vocabulary. In order to take advantage of these sources for analytics they must be structured and normalized into the Tuva data model.

This product is an LLM-enabled tool with human-in-the-loop user interface that automatically normalizes data into the Tuva data model while providing the ability to audit and review the entire normalization process. The mapped data automatically appears as another data source in the Tuva data model.

Competitors:

Platforms:

Point Solutions: IMO, John Snow Labs, Layer Health, Emtelligent, ScienceIO (acq. by Veradigm)

Tuva Differentiation:

Curated data is automatically harmonized into the Tuva data model where it’s combined with your other data sources and prepared for analytics, eliminating slow and expensive manual integration.

Pricing:

Tuva: $75,000 per year

Competition: $150,000+ per year

## C. Master Data Management

Launch Date: Q4 2025

Description:

We released the open-source version of Enterprise Master Patient Index (EMPI) this past April. Later this year we are releasing an enterprise version that includes additional features that allow matching to scale for large datasets, from 1m to 100m+ patients, as well as enterprise security features.  Further in the future we will add a reference dataset to the enterprise version of EMPI (by purchasing data from one of the credit bureaus), which will enhance matching performance substantially over the open-source version.

However, EMPI is just a subset of our larger vision for Master Data Management.  There are many entities in healthcare data besides patients that require mastering, including providers, locations, patient eligibility, and more.  Mastering involves creating a “golden record” which becomes the source of truth representation for the entity that is used across the organization.

Competitors:

Platforms: Innovaccer, Arcadia, Health Catalyst

Point Solutions: Verato, Rhapsody, MultiVue, Profisee

Tuva Differentiation:

The golden record for patients, providers, locations, etc., is automatically mapped into the Tuva data model, enabling accurate analytics across all your data sources, eliminating manual data integration costs and delays.

Pricing:

Tuva: $75,000 per year

Competition: $150,000+ per year

# III. Data Enrichment

## A. NCQA HEDIS Measures Engine

Launch Date: Q3 2025

Description:

When it comes to measuring clinical quality, NCQA HEDIS measures are the industry standard. Medicare Advantage plans are required to calculate and report these measures, which feed into STAR ratings.  Medicare Advantage as well as ACO Reach, MSSP and other CMMI program payments are calculated in part via the measures.  Further, VBC organizations are increasingly looking to contract for risk using the measures.

The NCQA HEDIS Measures Engine automatically computes all ~80 NCQA-certified HEDIS measures on top of the Tuva data model. In addition to calculating the measures, we produce aggregate performance statistics, identify high and low performing providers, and identify patients with care gaps that need to be addressed based on the measures.

This allows customers to measure their impact on the full suite of clinical quality measures that health plans care about and enables risk taking on those measures, allowing providers to diversify risk via quality.

Competitors:

Platforms: Innovaccer, Arcadia, Health Catalyst

Point Solutions: Inovalon, Cotiviti

Tuva Differentiation:

Because the heavy lifting of mapping data to the Tuva model is already done, we can run the entire measure set faster and cheaper than the competition.

Running the measures across all available data sources in the Tuva model improves measure accuracy, compared to running on disparate raw data sources.

Measure results are integrated directly into the Tuva data model, reducing manual data integration costs.

Pricing:

Tuva: $75,000 per year

Competitors: $250,000+ per year

## B. Clinical Episode Grouper

Launch Date: TBD

Product Description:

The Clinical Episode Grouper uses clinically-validated logic to group medical claims, clinical encounters and pharmacy claims into severity adjusted episodes of care based on clinical indications.

There is significant discussion as to whether this grouper should be part of the open-source or not. The argument for making this grouper closed-source is that it will take very significant and expensive resources to develop (i.e. clinical and data science resources). Very likely we’ll try to find a happy medium, for example by open-sourcing a subset of commonly used episodes.

This grouper is comparable to Optum ETG and Solventum (3M) CRG, both of which are commonly licensed for $500k per year and even upwards of $1m+ per year.

Competitors:

Platforms: N/A

Point Solutions: Optum ETG, Solventum (3M) CRG, Johns Hopkins ACG System, Merative MEG

Tuva Differentiation:

Runs automatically on top of the Tuva data model, eliminating costly and time consuming manual data integration.

Pricing:

Tuva: $125,000 per year

Competition: $500,000+ per year

## C. Risk-adjusted Benchmarking

Launch Date: Q4 2025

Product Description:

Risk-adjusted benchmarks are essential in healthcare analytics.  Without them, it’s impossible to know if an organization’s performance on cost, utilization, and outcome metrics is good, bad, or average.

We are open-sourcing a complete library of risk-adjusted benchmarks for more than 50 metrics for the Medicare FFS population. This open-source library of risk-adjusted benchmarks will be the first of its kind and is likely to generate a lot of additional interest and excitement in Tuva.

We will also be releasing a library of enterprise risk-adjusted benchmarks for the commercial and Medicaid populations.  These benchmarks will be computed on 3rd party data sources that we acquire access to.  Customers will be given the opportunity to contribute their data sources to the benchmarking dataset.  In exchange they will be given reduced pricing for benchmarking.  Over time we will utilize customer data increasingly for benchmarking, lowering the cost of benchmarking.

Competitors:

Platforms: N/A

Point Solutions: Milliman, Optum, Verisk, Solventum (f.k.a. 3M)

Tuva Differentiation:

Apples-to-apples: Our risk models are trained against the Tuva data model, ensuring input features and target variables are computed identically to your data.

Data Integration: Our models run seamlessly on the Tuva data model, eliminating costly and time consuming mapping that is required to use other risk model suites.

Pricing:

Tuva: $125,000 per year

Competition: $250,000+ per year

## D. Patient Stratification Models

Launch Date: TBD

Product Description:

Patient stratification models are predictive models that create patient-level predictions for events such as high-cost acute events.  We are building a complete library of such models from Medicare FFS claims.  This release will be a first of its kind and is likely to generate substantial interest in Tuva.

In addition we will build closed-source models on 3rd party and (increasingly over time) customer data.  These models will enable more accurate predictions on commercial and medicaid populations and also more real-time predictions, as they will be trained on clinical data sources.

Competitors:

Platforms: Arcadia

Point Solutions: Milliman, Merative, Clarify, Trilliant

Tuva Differentiation:

Apples-to-apples: Benchmarks are calculated against the Tuva data model meaning they are exactly comparable to the customer’s data.

Pricing:

Tuva: $75,000 or $150,000 per year depending on whether the customer is willing to contribute their data to the Tuva Research Dataset.

Competition: $300,000+ per year

# IV. Insight Generation + Delivery

## A. Generative Insights

## B. Care Gaps + HCC RAF Optimization

# V. Data Monetization

## A. Tuva Research Dataset

Launch Date: TBD

Product Description:

For years, providers and payers have had their data held hostage by 3rd party vendors who gain access to their data, de-identify it, and license it to life sciences organizations for research purposes, making premium profits along the way, while cutting out the true owners of the data. The Tuva Research Dataset aims to change this.

The Tuva Research Dataset is essentially open-source Truveta – an open-source collaborative of payers and providers coming together to create the largest, highest-quality linked claims-clinical dataset in the world.  Healthcare organizations contribute their data to an aggregated Tuva dataset which we de-identify, market, and license to life sciences organizations for research. Just like Truveta, we offer a meaningful revenue share for participating organizations.

The Tuva Research Dataset allows us to make our name in life sciences (our principal footprint is on the payer and provider side of the market today). This will in turn drive demand for Tuva open-source and our other enterprise products and services by life sciences organizations, unlocking substantial cross-selling opportunities for our company.

Competitors:

Platforms: Truveta, Datavant, Komodo

Point Solutions: N/A

Tuva Differentiation:

Built on the Tuva open-source data model which is quickly becoming the most trusted data model in healthcare.

Pricing:

Tuva: $500,000+ per year (with meaningful revenue share for data providers)

Competition: $500,000+ per year