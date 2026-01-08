---
source_pdf: "https://drive.google.com/file/d/1HWLL_Cwy7N49V3gpAZqT1Kc41z5XoQXfQtH1ZOOv64o/view"
drive_folder: "Portfolio/Tuva Health"
type: portfolio
company: Tuva Health
ingested: 2025-12-26
original_filename: "Tuva Health"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1HWLL_Cwy7N49V3gpAZqT1Kc41z5XoQXfQtH1ZOOv64o/view)

3.21.23

Product roadmap prioritization: Stuff CoCo and Aaron want and we talk to people validate.

2 levers we want to be pulling is product and community

7 listed here

1st 3 we’ve been working on for some time. Early MVP version and we haven’t even really announced that these exist

Terminology + Value Sets: All the terminology and value sets a healthcare analytics team needs, continuously updated and easy to load directly into their data warehouse.

Term: Maintained by different orgs all across

Value sets: lookup tables. Explore them / discover them - finding some way to do that on the website

Claims Data Profiling + Preprocessing: Data marts that transform and quality-test raw claims data so that it’s ready for analytics (250+ tests, service category grouper, encounter grouper).

1st released in Nov - did a big refactor. Now 3 things

Data quality testing

Service category grouper

Encounter grouper

Measures + Groupers: CMS Readmissions, CMS Chronic Conditions, CMS HCCs, CCSR Dx + Px, High Cost Imaging, Preventable Events, PMPM

We’ve had out for a while and we didn’t build the ones that people are about the most. HCC is biggest by a mile

Relased Chronic conditions

Launching HCCs and CCSR

Connectors.  Medicare LDS (largest) AND CCLF

FHIR - is your EHR elation? Are you working with any of the Commonwell on-ramps (particle, HG) - we basically build a connector

They typically get JSON in S3 bucket and we’ll convert it ot relational format in Tuva input layer and then automatically run that

Adoption problem

Mapping

Dbt

Contractors are building data marts for $10K and then we have this bench

Starting to experiment with Notebooks

Demonstrating the value of all the data tables we are producing

You can read through and see everything in markdown

Thinking about more synthetic data sets

Managed services

6 customers in production

Stuff is half-baked, how sticky is that usage

Enterprise / mature

Anthem

2 interesting niches

Academia

Consultants

2 barriers

They already have something

Procurement process

We can get them to adopt a piece of our stuff

Customers in production

Getting better at talking to these people

Flipping that and being very intentional about