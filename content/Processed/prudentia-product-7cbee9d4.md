---
source_pdf: "https://drive.google.com/file/d/1B9eiAuV289XKHiQYCceeiFQNGuRleQIw/view"
drive_folder: "Portfolio/Prudentia"
type: portfolio
company: Prudentia
ingested: 2025-12-27
original_filename: "Prudentia Product.pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1B9eiAuV289XKHiQYCceeiFQNGuRleQIw/view)

# Prudentia Sciences VC Research Knowledge Base

## Slide 1: PRUDENTIA SCIENCES

**PRUDENTIA SCIENCES**

Product Roadmap & Architecture

Sadiqa Mahmood
CEO and Founder
sm@prudentiasciences.com

Prepared for Virtue
Updated: July 23rd 2024

Confidential - Do not distribute

## Slide 2: Product Roadmap is Geared Towards Engagement across the Drug Life Cycle with Multiple Stakeholders

**Product Roadmap is Geared Towards Engagement across the Drug Life Cycle with Multiple Stakeholders**

| Category/Goal                          | Activity/Module                       | 2024 Q1 | 2024 Q2 | 2024 Q3 | 2024 Q4 | 2025 Q1 | 2025 Q2 | 2025 Q3 | 2025 Q4 |
| :------------------------------------- | :------------------------------------ | :------ | :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| Clinical Program Design                | Clinical Development                  | X       | X       | X       | X       | X       | X       | X       | X       |
| Optimize clinical decision making      | Enabling Platform to generate IPP     | X       | X       |         |         |         |         |         |         |
| Optimize clinical decision making      | Add Quantitative Components           |         |         | X       | X       |         |         |         |         |
| M&A and Partnerships                   | Business Development & Licensing      |         | X       | X       | X       | X       | X       | X       | X       |
| Optimize Asset Value                   | Quantitative Components               |         |         | X       | X       |         |         |         |         |
| Portfolio Strategy Planning & Management | Portfolio Strategy                  |         |         |         |         | X       | X       | X       | X       |
| R&D Planning                           | Portfolio IPPS                        |         |         |         |         | X       | X       |         |         |
| R&D Planning                           | Valuations & Decision Support         |         |         |         |         |         |         | X       | X       |

Confidential - Do not distribute

## Slide 3: Architectural Design

**Architectural Design**

**AWS Cloud Architecture Overview**

*   **Users** initiate **Category/Query**.

*   **APP Layer**
    *   React JS
    *   Node JS

*   **Data Layer**
    *   Amazon Aurora
    *   Amazon Simple Storage Service (S3)
    *   Amazon Redshift

*   **AI/ML Layer**
    *   **SageMaker Pipelines**
    *   **Data Layer (within AI/ML)**
        *   Search
        *   LLM post processing modules
        *   pgvector
        *   AWS Bedrock/LLM Deployments
        *   Search post processing modules
    *   **RAG/RAFTI**

**Flow:**
1.  Users interact with the APP Layer (React JS, Node JS) via Category/Query.
2.  The APP Layer interacts with the AI/ML Layer.
3.  The AI/ML Layer uses SageMaker Pipelines which connect to the main Data Layer (Amazon Aurora, S3, Redshift).
4.  Within the AI/ML Layer's data components, Search and LLM post-processing modules interact with pgvector and AWS Bedrock/LLM Deployments.
5.  RAG/RAFTI is also part of the AI/ML Layer.

Confidential - Do not distribute

## Slide 4: Prudentia's AI Approach

**Prudentia's AI Approach**

*   **Neural Networks** identify temporal patterns and structures in drug development data
*   **Large Language Models** leverage existing knowledge of drugs (approved and in development) and combine advanced search technology
*   **Chain of Thought Prompting** enables generation of drug profiles with evidence justification

Confidential - Do not distribute
4

## Slide 5: Vision – End to End Portfolio Strategy and Management

**Vision – End to End Portfolio Strategy and Management**

**Process Flow:**
Discovery (molecular structure icon) → Commercialization (pill bottle, dollar sign, stethoscope, person icons)

**Key Pillars:**
*   Engagement Throughout Product Life Cycle
*   Asset to Portfolio Strategy Design & Management
*   Clinical Development Plan

**Total Addressable Market (TAM):**
$30B- $50B TAM

Confidential - Do not distribute
5