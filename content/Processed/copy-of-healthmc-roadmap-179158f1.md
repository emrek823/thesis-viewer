---
source_pdf: "https://drive.google.com/file/d/10w99cAimMKPHNojy7Njs2cmMYmkmDUW9RSgLOiZqCtk/view"
drive_folder: "Portfolio/HealthMC"
type: portfolio
company: HealthMC
ingested: 2025-12-27
original_filename: "Copy of HealthMC Roadmap"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/10w99cAimMKPHNojy7Njs2cmMYmkmDUW9RSgLOiZqCtk/view)

# Introduction

This doc will serve as the forward looking product and architecture roadmap for Health MC. It will outline our vision for the product and dive into our current and end state architecture.

# Roadmap Overview

Current state:

Existing features:

File based data ingestion

Includes PDF, CCDA, csv, etc.

Manually triggered pipeline for model calls to:

Detect medical conditions and categories

Suggest optimal and possible codes

Provide source and rationale for  results

Web-based platform for manual review and validation of AI results

Initial Use Cases:

Our initial build is focused on retrospective coding.

Capabilities:

HIPAA compliant

Can handle pilots of small to moderate size

Product Vision

HealthMC’s platform will be:

Fully automated with turn-key (web or on-prem) deployments

Fully generalized to multiple use cases

Cost optimized with evidence at every stage of the platform

Security and compliance

At a bare minimum, all platforms, services and vendors will be HIPAA compliant and covered by BAAs. We won’t address security and compliance within individual roadmap sections because it should be considered table stakes.

# Short-Term Roadmap (0-12 Months)

Goal

Fully robust model for coding

Early version of chart abstraction for HEDIS (~10 measures)

Key Features

Automated pipelines for:

Data ingest (Sensor/Trigger based)

Metadata extraction

Interpretation

Custom customer export

R&D platform in place to handle:

Synthetic data generation

Prompt engineering

Human-in-the-loop

Architecture Improvements

Multi-model chaining

Automated quality scoring

Model Development

Development Goal:

Replicates near-expert level performance on coding exam and real world tasks for diagnoses, including evidence generation and MEAT identification

Research:

Edge case mapping

LLM/SLM benchmarking

“Golden Set” creation

Metrics Target:

>98% precision, >98% recall on condition identification and selected HEDIS measures

>80% precision, >98% recall on 5 digit ICD codes

Key Metrics

Demo > Pilot Conversion %

Pilots > Contract Conversion %

Quality (precision/recall/format)

Cost per chart

# Longer term Roadmap (6-24+ Months)

(Note: Has overlap with short term for flexibility in activities that will be built but aren’t immediate.)

Goal

Support for all common HEDIS measures

Support for all common risk models

Key Features

Integrations

Direct integration with multiple EMRs and customer platforms

Expand deployment options

Introduce on-prem deployment

Validate other use cases

Move beyond retrospective coding

Small models

Insert fine-tuned smaller models into the pipeline to realize cost savings and/or quality improvements

Architecture Scaling

Iterate infrastructure to support scale and cost optimization

Model Development

Development Goal:

Replicates near-expert level performance for Quality measures such as HEDIS

Research:

SLM fine tuning

“Golden Set” Expansion

Adjacent use case testing

Key Metrics

Time to integrate new client

Quality (precision/recall/format)

# of active use cases

Cost per chart

Time per chart

Customer Retention %

# Proposed Architecture

High Level Overview of Core Components

Production

Global Ingestion

This layer is shared across all use cases

Use case specific pipelines

Built with shared abstract components

Contain configuration based business logic

All AI transforms are wrapped in a custom execution manager that providers cost, efficiency and performance metrics

Exports

Customer specific transformation and delivery layer

R&D

Golden Set (evolving set of exemplars and rules for each structuring exercise)

This is built up over time from synthetics, production, manual work, etc.

This allows us to rapidly test, re-test and optimize both prompt generation and model components

This will become one of our most valuable assets

Prompt Development

Tuning, building examples, chaining

Prompt Testing

This layer allows us to quickly test multiple models and compare results against any defined optimization metric

We can also run traditional parameter optimization on both the models and the examples

Human-in-the-loop

We can feed R&D prompt research results through our human-in-the-loop platform for validation, comparison and to solicit improvement suggestions

Exhibits