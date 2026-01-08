---
source_pdf: "https://drive.google.com/file/d/1ri2HXpAAAlSnmvv1Q0lR_vQ67atJQxZdH98R8g5viD4/view"
drive_folder: "Portfolio/Tuva Health/Tuva Health/Tuva-Data-Room/DRAFTS"
type: portfolio
company: Tuva Health
ingested: 2025-12-27
original_filename: "Copy of Tuva Community Meetup #1"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1ri2HXpAAAlSnmvv1Q0lR_vQ67atJQxZdH98R8g5viD4/view)

## Slide 1: Tuva Community Meet Up
Tuva Community
Meet Up

Encounter groupers and service categories

## Slide 2: Agenda
TUVAHEALTH

Agenda
* Intro / Product roadmap updates
* Our backgrounds / intro
* Claims groupers for analytics
* Example of how service category and encounters are grouped
* Power BI cost drivers dashboard
* Tuva service categories and encounters logic in GitHub
* Additional use cases via SQL
* Question & Answer time

2

## Slide 3: Tuva is working to solve 2 problems
TUVAHEALTH

Tuva is working to solve 2 problems

As an industry we...

1. Waste time re-building the same tools
2. Aren't discussing the best ways to build these tools

3

## Slide 4: Tuva Product Roadmap Summary
TUVAHEALTH

Tuva Product Roadmap Summary

Open-source:
* Medical Economics
* Risk Adjustment
* Connectors
* Data Quality Audit

Closed-source:
* Master Patient Index
* NCQA-certified HEDIS Measures
* Benchmarking

4

## Slide 5: Brad and Tom's backgrounds
Brad and Tom's backgrounds
TUVAHEALTH

5

## Slide 6: Claims groupers
TUVAHEALTH

Claims groupers

Groupers are an integral component of claims data analytics platforms:
* Data Collection & Integration - **Aggregates** claims from multiple sources, ensuring comprehensive datasets.
* Data Cleaning & Validation - Ensures accuracy by removing duplicates, correcting errors and **standardizing across disparate sources.**
* Data Analysis & Reporting - Provides insights through dashboards, reports, and visualizations.
* Medical Economics - Understand **cost and utilization** drivers in a way that reflects operations.

Healthcare giants like Milliman, Optum and 3M command **multimillion-dollar fees** for their **proprietary black box** claims grouping tools.

6

## Slide 7: Claims groupers in the Tuva Project
TUVAHEALTH

Claims groupers in the Tuva Project

Current:
* Claim Type
* Service Category
* Encounters

Future:
* Episodes / Bundles
* What condition did the patient have? What was done? By who? Where?

7

## Slide 8: This is the story of a claim(s)
TUVAHEALTH

This is the story of a claim(s)

John Doe enters Academic
Medical Center ED with fever,
tachycardia, and shallow
breathing

10/31

* At this point we have one professional claim with place of service code 23, and lines with HCPCS 99285 and 93010
* This will be assigned an **outpatient emergency department** service category and encounter type

8

## Slide 9: This is the story of a claim(s)
TUVAHEALTH

This is the story of a claim(s)

John Doe enters Academic
Medical Center ED with fever,
tachycardia, and shallow
breathing

10/31

10/31
Admit to inpatient with sepsis

* Institutional claim with **bill type code '11X'** and **MS DRG 871** assigns acute inpatient as service category
* Becomes **anchor event** to create acute inpatient encounter type and start and end date windows

9

## Slide 10: This is the story of a claim(s)
TUVAHEALTH

This is the story of a claim(s)

John Doe enters Academic
Medical Center ED with fever,
tachycardia, and shallow
breathing

Multiple days of inpatient
professional claims leading to
discharge

10/31

10/31 - 11/11

10/31
Admit to inpatient with sepsis

* Professional claims include **POS 21** and **HCPCS 99232** indicating these services occurred during the acute inpatient stay

10

## Slide 11: This is the story of a claim(s)
TUVAHEALTH

This is the story of a claim(s)

John Doe enters Academic
Medical Center ED with fever,
tachycardia, and shallow
breathing

Multiple days of inpatient
professional claims leading to
discharge

10/31

10/31 - 11/11

10/31

11/11
Admit to inpatient with sepsis

Discharged to home care

* **Discharged** to home care on 10/20
* No subsequent **overlapping inpatient** stay at same facility

11

## Slide 12: Cost drivers analysis example
TUVAHEALTH

Cost drivers analysis example

The Tuva Project analytics gallery dashboard:
https://thetuvaproject.com/analytics/analytics-gallery

12

## Slide 13: The Tuva Project Docs
TUVAHEALTH

The Tuva Project Docs

https://thetuvaproject.com/data-marts/service-categories
* Provide anchor events
* Start and end windows
* Hierarchy for final encounter assignment

13

## Slide 14: Additional use cases
TUVAHEALTH

Additional use cases

https://thetuvaproject.com/data-marts/encounter-types#example-sql

14

## Slide 15: Q&A
Q&A
TUVAHEALTH

15