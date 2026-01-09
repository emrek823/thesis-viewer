---
title: Personalized Medication Planning via Direct Domain Modeling and LLM-Generated
  Heuristics
authors:
- Yonatan Vernik
- Alexander Tuisov
- David Izhaki
- Hana Weitman
- Gal A. Kaminka
- Alexander Shleyfman
date: '2026-01-07'
categories:
- cs.AI
pdf_url: https://arxiv.org/pdf/2601.03687v1
paper_id: 2601.03687v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-AI
---

# Personalized Medication Planning via Direct Domain Modeling and LLM-Generated Heuristics

**Authors:** Yonatan Vernik, Alexander Tuisov, David Izhaki, Hana Weitman, Gal A. Kaminka...

**Date:** 2026-01-07 | **Source:** arxiv | **Categories:** cs.AI

[PDF](https://arxiv.org/pdf/2601.03687v1)

## Abstract

Personalized medication planning involves selecting medications and determining a dosing schedule to achieve medical goals specific to each individual patient. Previous work successfully demonstrated that automated planners, using general domain-independent heuristics, are able to generate personalized treatments, when the domain and problems are modeled using a general domain description language (\pddlp). Unfortunately, this process was limited in practice to consider no more than seven medications. In clinical terms, this is a non-starter. In this paper, we explore the use of automatically-generated domain- and problem-specific heuristics to be used with general search, as a method of scaling up medication planning to levels allowing closer work with clinicians. Specifically, we specify the domain programmatically (specifying an initial state and a successor generation procedure), and use an LLM to generate a problem specific heuristic that can be used by a fixed search algorithm (GBFS). The results indicate dramatic improvements in coverage and planning time, scaling up the number of medications to at least 28, and bringing medication planning one step closer to practical applications.

## Notes

