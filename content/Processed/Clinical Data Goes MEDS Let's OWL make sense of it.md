---
title: Clinical Data Goes MEDS? Let's OWL make sense of it
authors:
- Alberto Marfoglia
- Jong Ho Jhee
- Adrien Coulet
date: '2026-01-07'
categories:
- cs.LG
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.04164v1
paper_id: 2601.04164v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-AI
---

# Clinical Data Goes MEDS? Let's OWL make sense of it

**Authors:** Alberto Marfoglia, Jong Ho Jhee, Adrien Coulet

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.LG, cs.AI

[PDF](https://arxiv.org/pdf/2601.04164v1)

## Abstract

The application of machine learning on healthcare data is often hindered by the lack of standardized and semantically explicit representation, leading to limited interoperability and reproducibility across datasets and experiments. The Medical Event Data Standard (MEDS) addresses these issues by introducing a minimal, event-centric data model designed for reproducible machine-learning workflows from health data. However, MEDS is defined as a data-format specification and does not natively provide integration with the Semantic Web ecosystem. In this article, we introduce MEDS-OWL, a lightweight OWL ontology that provides formal concepts and relations to enable representing MEDS datasets as RDF graphs. Additionally, we implemented meds2rdf, a Python conversion library that transforms MEDS events into RDF graphs, ensuring conformance with the ontology. We demonstrate the approach on a synthetic clinical dataset that describes patient care pathways for ruptured intracranial aneurysms and validate the resulting graph using SHACL constraints. The first release of MEDS-OWL comprises 13 classes, 10 object properties, 20 data properties, and 24 OWL axioms. Combined with meds2rdf, it enables data transformation into FAIR-aligned datasets, provenance-aware publishing, and interoperability of event-based clinical data. By bridging MEDS with the Semantic Web, this work contributes a reusable semantic layer for event-based clinical data and establishes a robust foundation for subsequent graph-based analytics.

## Notes

