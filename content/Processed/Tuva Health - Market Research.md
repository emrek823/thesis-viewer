# Tuva Health - Market Research

**Date:** 2026-01-09
**Company:** Tuva Health (The Tuva Project)
**Category:** Healthcare Data Infrastructure / Open Source Analytics Platform

---

## Company Overview

Tuva Health is an open-source healthcare data transformation platform that cleans and transforms messy healthcare data into analytics-ready formats. Founded in 2021 by Aaron Neiderhiser (CEO) and Coco Zuloaga (CTO), the company launched from stealth in December 2024 with $5M seed funding.

**Mission:** Democratize access to high-quality healthcare analytics by open-sourcing the tools and knowledge needed to transform raw healthcare data into analytics-ready data.

**HQ:** Salt Lake City, UT
**Founded:** 2021
**Y Combinator Batch:** W22

---

## Founders

### Aaron Neiderhiser (CEO)
- Former Senior VP of Technology at Health Catalyst
- Led development of Touchstone - data warehouse with medical records and claims data for 150+ million patients
- Career began at Colorado Medicaid doing actuarial and population health analysis
- Economics background transitioning to healthcare policy

### Coco Zuloaga (CTO)
- Former VP of Data Science at Strive Health
- Senior Director of Data Science at Big Squid Inc
- Background in theoretical physics and quantum mechanics
- Shifted to healthcare data science, recognizing that while ML seemed "cool and sexy," healthcare data proved exceptionally messy

**How They Met:** Playing squash in Salt Lake City around 2015. Casual athletic friendship evolved into professional collaboration as they discussed shared frustrations with healthcare data management.

---

## The Problem They Solve

### Healthcare Data Challenges

**Only 20% of healthcare organizations fully trust their data.**

Three core obstacles prevent effective healthcare data analysis:

#### 1. Normalization
- Healthcare data lacks consistent structure
- Hundreds or thousands of distinct healthcare data models exist across payers, medical record systems, and organizations
- Patient demographic fields contain inconsistent values (e.g., race recorded as "African American," "Black," "AA," etc.)
- FHIR standards haven't solved normalization despite improving interoperability

#### 2. Data Quality
**Missingness (most prevalent):**
- Patient visits at outside facilities aren't captured
- Claims data inherently lacks clinical information
- Documentation gaps create missing diagnoses
- Prescription adherence remains unknown

**Duplication:**
- Single patients have multiple birth/death dates
- Claims appear multiple times due to adjustments/denials
- Cross-dataset patient matching becomes necessary

**Implausibility:**
- Demographic contradictions (male patients with female-only diagnoses)
- Age-inappropriate treatments

#### 3. High-Level Concepts
- Analysts must create derived fields from raw data
- Identifying disease presence, medication appropriateness, admission types requires deep expertise combining healthcare knowledge, clinical understanding, and data proficiency

**Root Cause:** "A lot of our energy is spent trying to get paid or deny payment for healthcare services, and our data collection systems (e.g. EHRs) have been optimized to do just that."

**The Real Cost:** Organizations typically spend $500K-$1M+ internally to normalize fragmented data from different EMRs and payers.

---

## Product & Technology

### The Tuva Project (Open Source)

An open-source knowledge base, code base, and community for healthcare data people.

**Components:**
- 14 pre-built connectors for various data sources
- 1,014 data quality tests
- 896 data transformation models
- 111 terminology datasets

**Technology Stack:**
- Built on dbt (data build tool)
- Runs entirely in SQL
- Works within cloud data warehouses (Snowflake, Databricks, BigQuery)
- 100% control and transparency into data transformation

**Four Core Functions:**
1. **Data validity tests** - identify issues like duplicate claims and invalid codes
2. **Common data model** - standardizes raw data from different sources
3. **Terminology datasets** - shared reference materials
4. **Concepts and data marts** - encode standard methodologies and processing rules

### Hybrid Data Platform

Three primary functions:

1. **Harmonize** - Normalizes diverse data sources (medical records, lab results, claims) into comprehensive longitudinal model compatible with FHIR and ADT standards

2. **Enrich** - Incorporates clinical concepts, measures, groupers, and risk models for business-critical insights

3. **Validate** - Proactively identifies data quality issues and traces their analytical impact

### Data Factory (Paid Service)

Managed service delivering analytics-ready data within ~2 weeks.
- **Starting price:** $10K/month
- Ingests data from multiple sources
- Normalizes and deduplicates patient records
- Tests data quality continuously
- Maps terminology to standard codes
- Enriches data with third-party sources

---

## Why dbt for Healthcare

From Tuva's blog: "A data team without dbt is like a software engineering team without an IDE or git."

**Four Core Benefits:**

1. **Common Framework** - Standardized project structure with consistent files/folders

2. **Data Warehouse Integration** - Analysts can directly program and schedule warehouse code without engineering handoff

3. **Git Integration** - Version control, branching, pull requests, peer review, automated testing

4. **Unified Code, Documentation, and Testing** - Auto-generated documentation with data dictionaries and DAGs

**Adoption Reality:**
- Venture-backed healthcare startups: 80-90% dbt adoption
- Traditional health systems, payers, pharma: 10-20%

---

## Business Model

### Pricing
- **Tuva Basic:** Free - access to 15 data sets and 5 data set uploads
- **Data Factory:** Starting ~$10K/month for managed service
- **Enterprise:** Custom rates

### Value Proposition
- Decreases data platform expenses by up to 10x
- Organizations transition from zero to advanced infrastructure in ~2 weeks
- Users maintain complete control over data infrastructure and compliance

**Differentiation:** Free, open-source approach vs. industry "costly 'black box' solutions that hinder transparency, accessibility, and control."

---

## Traction & Customers

### Key Metrics
- 50+ healthcare organizations helped in 2+ years
- 1,500+ healthcare analytics practitioners in community
- 900+ member Slack community collaborating on metric definitions

### Notable Customers
- Oscar Health - achieved "90% reduction in data processing effort"
- MultiCare Connected Care (accountable care arm of MultiCare Health)
- CareAbout Health
- Herself Health - 90% cost reduction
- Adaptive
- Aligned
- Empassion Health
- Patina
- Icon Health
- Tuesday Health
- TrueClaim
- Oncology Care Partners

---

## Funding & Investors

### Seed Round (December 2024)
- **Amount:** $5M
- **Lead:** Virtue
- **Participants:** Box Group, Y Combinator, notable health tech angels

### Additional Investment (February 2025)
- MultiCare Capital Partners invested (total funding now $6M)

---

## Market Insights

### The Standardization Problem

Different metric definitions create dramatic variations. Slightly different PMPM (per member per month) calculations can vary by "30-40%." This undermines decision-making reliability across organizations.

### Why Open Source

From founders: "We didn't want to be just yet another healthcare analytics company."

This democratizes healthcare analytics, allowing anyone to become a data professional without proprietary gatekeeping. The approach advocates transparency over vendor lock-in.

### Building a Claims Data Platform

Eight critical considerations per Aaron Neiderhiser:

1. **Data Acquisition** - Negotiate with payers for necessary fields
2. **Adjustments, Denials, Reversals** - Distinguish final-action claims from intermediary
3. **Data Quality** - Assess atomic-level and use-case-level impacts
4. **Common Data Model** - Harmonize multiple data sources
5. **Groupers** - Consolidate high-cardinality data into meaningful categories
6. **Measures & Risk Models** - Standardize spend/utilization, quality, risk adjustment

**Key Insight:** "The most common failure-mode I see is a ton of time and effort spent setting up technology...that doesn't result in the generation of important insights."

Work backwards from specific use cases rather than building infrastructure disconnected from analytical needs.

---

## Competitive Landscape

### vs. OHDSI/OMOP
- OHDSI launched in 2014 using Java and R
- Better suited for traditional ETL frameworks
- Tuva uses dbt (SQL-based), aligning with modern cloud ELT architectures
- SQL accessibility makes tools usable for non-specialists

### vs. Traditional Vendors
- Most vendors offer costly "black box" solutions
- Lack transparency, accessibility, and control
- Tuva's open-source model provides full visibility

---

## Sources

### Podcast Appearances
1. **Digital Thoughts Podcast** (April 29, 2024) - "Open sourcing healthcare data transformation" with both founders
2. **Pear Healthcare Playbook** (December 2023) - "Lessons from Aaron Neiderhiser and Coco Zuloaga on democratizing healthcare analytics"
3. **Disruptors for GOOD Podcast** (Episode 226, February 2025) - "Transforming Healthcare Data"

### Written Coverage
- [Pulse 2.0 Interview](https://pulse2.com/tuva-health-profile-aaron-neiderhiser-interview/) (May 2025)
- [Out-Of-Pocket Health Deep Dive](https://www.outofpocket.health/p/transforming-healthcare-data-with-tuva-health)
- [Causeartist Profile](https://www.causeartist.com/tuva-health-transforming-healthcare-data/)
- [Point of Care Substack](https://pointofcare.substack.com/p/tuva-health-and-the-future-of-claims)
- [Y Combinator Profile](https://www.ycombinator.com/companies/tuva-health)

### Blog Posts (thetuvaproject.com)
- "Building a Claims Data Platform" (April 17, 2024)
- "Intro to dbt for Healthcare" (January 31, 2024)
- "The Problem with Healthcare Data" (January 11, 2024)

### News Coverage
- Fierce Healthcare: Seed funding announcement (December 2024)
- Fierce Healthcare: MultiCare partnership (February 2025)
- Healthcare IT Today: Platform launch (January 2025)

---

## Key Quotes

> "Only 20% of healthcare organizations fully trust their data."

> "A lot of our energy is spent trying to get paid or deny payment for healthcare services, and our data collection systems have been optimized to do just that."

> "We didn't want to be just yet another healthcare analytics company."

> "The most common failure-mode I see is a ton of time and effort spent setting up technology that doesn't result in the generation of important insights."

> "A data team without dbt is like a software engineering team without an IDE or git."

---

## Investment Thesis Relevance

**Strengths:**
- First mover in open-source healthcare data transformation
- Strong founder-market fit (deep Health Catalyst/Strive experience)
- Land-and-expand model (free open source -> paid Data Factory)
- Growing community effect (1,500+ practitioners)
- Clear differentiation vs. black-box vendors
- Aligned with modern data stack (dbt, cloud warehouses)

**Considerations:**
- Small team (3 people as of YC batch)
- Relatively early revenue ($10K/month at first customer in Jan 2022)
- Open source business model challenges
- Competition from established healthcare analytics vendors
- Long sales cycles in healthcare
