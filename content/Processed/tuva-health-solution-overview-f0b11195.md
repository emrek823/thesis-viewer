---
source_pdf: "https://drive.google.com/file/d/1FQbvhVg-G68uvry-wnZBgq9Xx_o-BGZC/view"
drive_folder: "Portfolio/Tuva Health/Tuva Health/Tuva-Data-Room/DRAFTS/OLD SPV: Tuva Data Room"
type: portfolio
company: Tuva Health
ingested: 2025-12-27
original_filename: "Tuva Health Solution Overview.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1FQbvhVg-G68uvry-wnZBgq9Xx_o-BGZC/view)

# Tuva Health Solutions + Pricing

Tuva is an open-source platform for transforming raw healthcare data into intelligence. The open-source components are freely available to use for any purpose and documented extensively at https://www.thetuvaproject.com.

**Diagram: Tuva Data Flow**
This diagram illustrates the flow from Raw Data sources, through the Universal Data Model, to Advanced Analytics, with supporting platform functionalities.

**Raw Data Sources:**
*   Claims
*   EHR (Electronic Health Records)
*   FHIR APIs (Fast Healthcare Interoperability Resources Application Programming Interfaces)
*   ADT (Admission, Discharge, Transfer)
*   Labs

**Core Transformation:**
*   Universal Data Model

**Advanced Analytics Outputs:**
*   Medical Economics
*   Clinical Quality
*   Risk

**Platform Functionalities (Underlying the flow):**
*   Normalization
*   Master Patient Index
*   Data Quality
*   Data Marts
*   Dashboards
*   ETL Orchestration
*   Risk-adjusted Benchmarking

We offer customers 4 solutions built around the open-source. Here we describe each of the solutions, the type of customer they are designed for, and how they work at a high-level.

Pricing Spreadsheet

## I. Tuva Platform

For healthcare organizations lacking the expertise or resources to manage an enterprise data platform at scale, Tuva offers a fully managed solution built around its open-source foundation. Tuva partners with customers to deploy, operate, and optimize the platform in their cloud, ensuring scalability, reliability, and operational excellence.

### Platform Technology

The platform includes the following core pieces of technology which have been hardened for security and integrated with the Tuva open-source software.

*   **Tuva Open-source**: https://thetuvaproject.com/
*   **ETL Orchestration**: Software that automates and monitors data refreshes across all your data sources.
*   **Data Quality Intelligence (DQI)**: Analytics application that provides a single view of data quality across all your data sources.
*   **Enterprise Master Patient Index (EMPI)**: Workflow software and analytics application that probabilistically matches patients to create a master patient ID across all your data sources.

### Data Transformation Services

Transforming raw data sources into the Tuva data model requires healthcare data engineering expertise. The operations are broken up into two categories of work.

**Data Source Implementation**: Each data source must be added to the platform. From a high-level this involves the following operations:

*   **Ingestion**: Loading raw data into the data warehouse
*   **Normalization**: Building a connector to transform the raw data Tuva's universal data model
*   **De-duplication**: Running EMPI to de-duplicate patients across data sources
*   **Enrichment**: Running Tuva data marts to enhance the data for analytics
*   **Data Quality**: Auditing and fixing data quality problems
*   **Merging**: Unioning data sources into a combined architecture to power analytics
*   **Automation**: Setting up the data landing zone, ETL flows, and testing for automating data refreshes

**Data Source Maintenance**: Each data source must be closely monitored to ensure high-quality data is always ready for analytics. From a high-level this involves the following operations:

*   Monitoring and managing data refreshes for data quality issues e.g.:
    *   Atomic-level issues e.g. file format changes, missing files or columns, invalid values, etc.
    *   Analytics-level issues e.g. changes that impact key metrics
*   Monitoring and managing EMPI as new patient matches occur.
*   Promoting refreshed data to production when it's ready
*   Quarterly data model upgrades

### Service Tier

We offer customers 3 distinct tiers of support depending on how much assistance they need managing the data platform.

*   **Tuva Supported**: Tuva is engaged in a limited way and as needed. Includes platform installs + upgrades, access to documentation, and training. For larger teams that are taking on management of Tuva Platform on their own.
*   **Tuva Co-Managed**: Partially managed, and fully supported Tuva Platform. Includes Supported tier plus Tuva takes on data transformation operations in partnership with Customer team. Customer team is an active participant and has shared responsibilities in the operation of the platform. Includes a focus on knowledge transfer. For medium-sized teams that would like to grow.
*   **Tuva Fully Managed**: Fully managed and supported Tuva Platform. Everything in the Co-Managed tier plus data partner management, data warehouse administration, and cloud infrastructure and security management. Customer team engages as able and needed. For teams that would like most of Tuva Platform to be managed by Tuva.

**Table: Tuva Service Tier Features**

| Feature                          | Supported | Co-Managed | Fully Managed |
| :------------------------------- | :-------- | :--------- | :------------ |
| Platform Installs + Upgrades     | Yes       | Yes        | Yes           |
| Documentation                    | Yes       | Yes        | Yes           |
| Training                         | Yes       | Yes        | Yes           |
| Deep Engagement                  |           | Yes        | Yes           |
| Data Partner Management          |           |            | Yes           |
| Data Warehouse Administration    |           |            | Yes           |
| Cloud Infrastructure + Security  |           |            | Yes           |

*   **Platform Installation + Upgrades**: Tuva installs Platform Technology in your cloud and performs technology upgrades over time.
*   **Documentation**: Access to Tuva Platform documentation and the Tuva Data Transformation Operations (DT Ops) documentation guide.
*   **Training**: Access to live and pre-recorded trainings on deploying and operating the Tuva Platform, Data Transformation Operations, and generating advanced analytics using the Tuva data model.
*   **Deep Engagement**: Tuva meets regularly with your data engineering team and analytics end-users.
    *   **Weekly Data Platform Meeting**: Weekly meeting with your data engineering team for project planning and status updates.
    *   **Bi-weekly User Group Meeting**: Bi-weekly meeting with your data analysts, data scientists, health economists, etc. — anyone using the data for analytics.
    *   **Ad Hoc User Meetings**: Additional meetings (up to 2 per month) to train users on building analytics with Tuva.
    *   **Quarterly Data Strategy Meeting**: Quarterly strategy session with Tuva Co-Founders to discuss your data platform.
*   **Data Partner Management**: Tuva works directly with your data partners as an extension of your organization — when data quality problems arise we contact them directly on your behalf.
*   **Data Warehouse Administration**: Tuva administers the entire warehouse, from security, to adding users, managing performance and costs.
*   **Cloud Infrastructure + Security**: Tuva deploys and manages all cloud infrastructure and security on your behalf, ensuring scalability, accessibility, and HIPAA compliance.

## II. Tuva Cloud

For customers that don't want to own and control their own data platform they can rent a portion of the Tuva Platform hosted in our cloud. Customers upload their data sources to Tuva Cloud and our team uses the platform to transform them into analytics-ready data. The data is delivered back to your data warehouse.

Customers can access the exact same products and services as Tuva Platform — the only difference is with Tuva Cloud the data is transformed in our cloud.

**Diagram: Tuva Cloud Data Processing Flow**

**Input:**
*   AWS S3 Bucket

**Processing Steps (within Tuva Cloud):**
1.  **SDIC**: Table and column level expectations
2.  **Data Processing 1 (Dev)**: Transform data into Tuva input layer
3.  **Atomic-level DQ Checks**: Basic checks for most important fields
4.  **Data Processing 2 (Dev)**: Build Tuva data model
5.  **Analytics-level DQ Checks**: Evaluate analytics point-in-time and comparison to last load
6.  **Data Processing 3 (Prod)**: Update production data

**Output (to Customer's Cloud):**
*   Cloud Storage
*   Data Warehouse

## III. Tuva Products

For Tuva open-source adopters and Tuva Cloud or Platform customers that need to solve specific problems around the open-source.

*   **Data Quality Intelligence**: Analytics application that provides a single view of data quality across all your data sources (included in Tuva Platform and Tuva Cloud).
*   **Enterprise Master Patient Index**: Workflow software and analytics application that probabilistically matches patients to create a master patient ID across all your data sources (included in Tuva Platform and Tuva Cloud).
*   **NCQA-certified HEDIS Measures**: Enhance your data with ~80 certified HEDIS measures for reporting and analytics.
*   **Risk-adjusted Benchmarking**: Enhance your data with risk-adjusted benchmarking for dozens of cost and utilization metrics constructed from Tuva's national all-payer claims database.

## IV. Tuva Consulting Services

For customers that need help setting up, building on top of, or customizing the open-source.

*   **Data Engineering**: Support for transforming raw data sources into the Tuva data model, pipeline automation, normalization, data quality testing, etc.
*   **Analytics Engineering**: Support for building custom advanced analytics e.g. data marts, dashboards, business intelligence, reporting, etc.
*   **Data Science**: Support for model training, deployment, validation, statistical analysis, etc.
*   **Health Economics**: Support for health economics and outcomes research analyses.