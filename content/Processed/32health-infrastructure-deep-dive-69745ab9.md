---
source_pdf: "https://drive.google.com/file/d/1QBEcAiFXAubcgVCYLH8T9llu1kS9MvAd/view?usp=drivesdk"
drive_folder: "Portfolio/LightSpun/Series A Data Room/Product"
type: portfolio
company: LightSpun
ingested: 2025-12-26
original_filename: "32Health Infrastructure Deep Dive .pdf"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1QBEcAiFXAubcgVCYLH8T9llu1kS9MvAd/view?usp=drivesdk)

## Slide 1: 32HEALTH

32HEALTH
AI-Native Healthcare Administration Platform
Technology Infrastructure Deep Dive
2024

---

## Slide 2: Technical Architecture

# Technical Architecture

32HEALTH
PROPRIETARY & CONFIDENTIAL
2

---

## Slide 3: Overall Architecture

Confidential & Proprietary

# Overall Architecture

**SaaS Modules**
1.  Eligibility Management
2.  Provider Management
3.  Provider Network
    a.  Recruitment
    b.  Credentialing
    c.  Contracting
    d.  Re-credentialing
4.  Benefit and Policy Management
5.  Employer Groups
6.  Claim Adjudication
    a.  AI Claims Automation
7.  EDI
8.  Financial
    a.  Billing
    b.  Payment
    c.  Receivables
9.  Portals and Support
10. AI Assisted Contact Center
11. Enterprise Reporting
12. Broker Management
13. Sales Management
14. Compliance & Audit

**Architectural Diagram Components:**

**Portals & External Apps:**
*   Provider Network Portals
*   Developer Portals
*   Broker Portals
*   Provider Portals
*   Member Portals
*   Employer Groups Portals
*   External Portals/Apps

**Provider System (EDI/Claims Intake):**
*   **Provider** (initiates claims)
    *   Submits a claim EDI 837(P/I/D)
    *   Claim Status EDI 276/277
    *   Prior Authorization EDI 278
    *   Benefit/Eligibility Coordination EDI 270/271/834
    *   Remittance Advice EDI 835
*   **EDI Interface**
*   **Paper/Fax/Email/Web Claims** (input to Multimodal AI)
*   **Multimodal AI** (processes paper/fax/email/web claims)
*   **AI Enabled Claim Administration Adjudication Engine**
*   **AI Automated Data Process**
    *   **Payment Integrity Engine**
    *   **Claims Rules Engine**
    *   **Administrative and Clinical Edits**
    *   Processes: x-rays, periodontal charts, intra-oral images, clinical notes, narratives

**Back Office Automated Workflow System:**
*   Case Management
*   Billing & Payment
*   Provider Management
*   Eligibility Management
*   AI Assisted Provider Network Management
*   Broker Management
*   Reporting & Analytics
*   Document Center

**Front Office Automated Workflow System:**
*   AI Assisted Contact Center
*   Sales Quoting & Plan Implementation
*   Benefit & Clinical Policy Management
*   AI Assisted Underwriting & Premium Generation
*   Reporting
*   Compliance & Audit

32HEALTH.
3

---

## Slide 4: ETL/ELT Pipelines - File Intake

Confidential & Proprietary

# ETL/ELT Pipelines - File Intake

**File Intake Process:**
*   **New file format** (can be integrated via new adaptor)
*   **Easy to integrate new adaptor**
*   **Input Formats:**
    *   EDI
    *   JSON
    *   PDF
    *   CSV
    *   DOC
    *   Image files
*   **File Intake / Bulk Upload Sources:** Provider, Member, Group, Office, DOS, Plan, Claims, Broker
*   **File Intake** component
*   **New Data adaptor** (if needed)
*   **Data adaptor** (if needed)
*   **ETL/ELT pipeline tech:**
    *   Workflows
    *   Cloud Data Fusion

**Application data sources (Exports & Native Integrations):**
*   Salesforce
*   Microsoft SQL Server™
*   Email
*   Arvo.hbase
*   Hive
*   Native integration connectors

**Key Features:**
*   Multiple compatible format for file intake capabilities
*   Adaptors help ingest new formats
*   Flexible ETL models

32HEALTH.
4

---

## Slide 5: Reporting Architecture

Confidential & Proprietary

# Reporting Architecture

**Database Infrastructure:**
*   **Postgres (Cloud SQL)** - Operational db
*   **Cloud Spanner** - Operational db
*   **BigQuery** - Reports db
*   **Predictive Analytics** (feeds into BigQuery)

**Reporting Flow:**
*   Operational dbs (Postgres, Cloud Spanner) feed into **Embedded Looker**.
*   Embedded Looker connects to the **32Health web app**.
*   BigQuery (Reports db) also connects to Embedded Looker and the 32Health web app.

**32Health web app features:**
*   Custom and pre-configured reporting
*   Native support for parameter driven real-time reporting and analytics
*   High performant with caching
*   Minimal impact on production processes - read replica of operational db is used
*   SSO support
*   Admin Panel
*   HIPAA compliant

32HEALTH.
5

---

## Slide 6: Communications - External APIs

Confidential & Proprietary

# Communications - External APIs

**APIs (Apigee Developer Portal Screenshot):**

| API Category         | Description                                     |
| :------------------- | :---------------------------------------------- |
| Claim APIs           | APIs for getting EOP, EOR, claim telemetry      |
| Credentialing APIs   | APIs for real-time credentialing services.      |
| EDI Apis             | APIs for EDI                                    |
| Insurance forms APIs | APIs for extracting information from Insurance forms |
| Member APIs          | APIs for Member CRUD                            |
| Provider APIs        | APIs for CRUD on Provider related data.         |
| Reporting APIs       | APIS for accessing Looker endpoints for reporting. |

**Key Information:**
*   External APIs via Apigee Developer Portal
*   EDI API supports X12
*   Webhook (logo present)

32HEALTH.
6

---

## Slide 7: Communications - API Management

Confidential & Proprietary

# Communications - API Management

**API Architecture:**

*   **32Health Application** connects to **API Gateway**.

**Internal APIs (Modules):**
*   Provider Network
*   Group
*   Plan Configuration
*   Office/DSO
*   Financial
*   Document Center
*   Case Management
*   Compliance & Audit
*   Contact Center
*   Broker Management

**External APIs:**
*   Claim APIs
*   Credentialing APIs
*   EDI APIs
*   Insurance forms APIs
*   Member APIs
*   Provider APIs
*   Reporting APIs

**API Gateway Features:**
*   REST, GraphQL based, gRPC for fast performance
*   **Messaging formats:**
    *   JSON, File based payloads
    *   JSON responses
    *   JSON for Pub/sub & eventarc messaging
*   Both sync & async APIs
*   **Stack:** React, Typescript, FastAPI (Python), Functions Framework (Python)

32HEALTH.
7

---

## Slide 8: API Details - REST API

Confidential & Proprietary

# API Details - REST API

| Method | Endpoint                                    | Description                          |
| :----- | :------------------------------------------ | :----------------------------------- |
| POST   | /api/v1/bulk-upload/plan-module-async     | Bulk Upload Plan Module Async        |
| POST   | /api/v1/bulk-upload/plan-module           | Bulk Upload Plan Module              |
| POST   | /api/v1/bulk-upload/plans-async           | Bulk Upload Plans Async              |
| POST   | /api/v1/bulk-upload/plans                 | Bulk Upload Plans                    |
| POST   | /api/v1/bulk-upload/plan-fee-schedules-async | Bulk Upload Plan Fee Schedules Async |
| POST   | /api/v1/bulk-upload/plan-fee-schedules    | Bulk Upload Plan Fee Schedules       |
| POST   | /api/v1/bulk-upload/provider-fee-schedules-async | Brovider Upload Provider Fee Schedules Async |
| POST   | /api/v1/bulk-upload/provider-fee-schedules | Brovider Upload Provider Fee Schedules |

32HEALTH.
8

---

## Slide 9: API Details - GraphQL

Confidential & Proprietary

# API Details - GraphQL

**Explorer - Query MyQuery:**
*   claim
*   claimAttachments
*   claimAttachmentsByClaimId
*   claimAttachmentsByClaimNumber
*   claimByLineNumber
*   claimDetails
*   claimDetailsByClaimNumber
*   claimEOB
*   claimEOP
*   claimErrorCode
*   claimErrorCodes
*   claimLog
*   claimLogs
*   claimServiceLine
*   claimServiceLines
*   claimServiceLinesByClaimNumber
*   claimStatus
*   claimStatuses
*   claims

**Explorer - Mutation MyMutation:**
*   addClaim
*   addClaimAttachment
*   addClaimErrorCode
*   addClaimLog
*   addClaimServiceLine
*   addClaimStatus
*   addFeeScheduleType
*   addManualClaimRejectionReason
*   addManualClaims
*   addMember
*   addNetwork
*   addNetworkStatusType
*   addNetworkType
*   addProviderNetwork
*   deleteManualClaim
*   deleteManualClaimRejectionReason
*   editProviderNetwork
*   extractClaimAttachments
*   processClaim
*   removeClaim
*   removeClaimServiceLine
*   restoreClaim
*   restoreClaimServiceLine

32HEALTH.
9

---

## Slide 10: Document Management Solutions

Confidential & Proprietary

# Document Management Solutions

**32Health Document Management System (Left Diagram):**

*   **Client Preferred Document Management Services** (e.g., Salesforce)
    *   Document Trigger
*   **32Health Components:**
    *   Document Management Public APIs
    *   GCP Application Integration Connectors
        *   Workflow actions:
            *   Data Mapping
            *   Sending Email
            *   Flow Control
            *   Approval/Timer
    *   Document store
    *   Other 32Health services

**Internal Document Store for AI (Right Diagram):**

*   **Clearinghouse APIs** from Vyne, Changehealth, DentalExchange, ... (input Attachments)
*   **DUPLICATE AI/ML Duplicate Detection** (outputs Features)
*   **Attachment Document Store** (stores Narrative/Notes)
*   **AI/ML Visual QnA, Extraction** (outputs Features)
*   All connect to **Metadata**

**Key Notes:**
*   Using GCP's application integration service, 32Health can connect to Customer/Client enterprise applications
*   32Healths Internal Document Store for AI

32HEALTH.
10

---

## Slide 11: Integration & Data Interoperability

Confidential & Proprietary

# Integration & Data Interoperability

*   Preferred approach for integration is to publish REST APIs with openapi spec on the 32Health Dev portal and follow industry standards (actual/de facto) - JSON, EDI wherever applicable
*   File based approaches are preferred via SFTP and uploads/downloads through web portal
*   External APIs currently are REST, GRAPHQL
*   JSON, EDI, CSV/PSV are natively supported
    *   New file format can be supported via data adaptors
*   Strong consideration for customer recommended formats

32HEALTH.
11

---

## Slide 12: Database Infrastructure

# Database Infrastructure

32HEALTH
PROPRIETARY & CONFIDENTIAL
12

---

## Slide 13: Database Organization:

Confidential & Proprietary

# Database Organization:

**Operational Databases - Deployed on Dev, Staging and Production (Cloud SQL):**
*   Claims
*   Members
*   Office
*   Plan
*   Groups
*   Providers
*   Atlas
*   Brokers
*   Credentialing
*   Documents
*   Financials
*   Contact Center
*   Case Management

**Other Database Types:**
*   **Reporting:** BigQuery
*   **Large Distributed Data:** Cloud Spanner
*   **Misc Data:** Firestore / Datastore
*   **Machine Learning Vector Database:** Vertexai
*   **Document Retrieval:** Elastic Database Pools

32HEALTH.
13

---

## Slide 14: Database Synchronization

Confidential & Proprietary

# Database Synchronization

*   Databases are within the same VPC leading to lower latency in synchronization.
*   The Cloud SQL (postgres) instances each have automated read replicas
*   32Health also plans for continuous replication between Cloud SQL and Spanner using Striim
*   Between the operational db and BigQuery/Cloud Storage 32Health uses Cloud Datastream
    *   low-latency, serverless, low latency Change Data Capture service

32HEALTH.
14

---

## Slide 15: PHI De-Id & Syncing Service

Confidential & Proprietary

# PHI De-Id & Syncing Service

**PHI De-identification Flow:**
*   **PROD** (Contains PHI Data)
    *   Authorized users only
*   **Data-Redaction sync svc using Cloud DLP** (labeled with 51, 10, 15, 05 numbers)
*   Outputs to:
    *   **STG** (Only De-identified Data)
    *   **Dev**

**List of PHI (Protected Health Information):**
*   Names
*   Addresses, Zip Codes, Geocodes
*   Dates
*   Phone Numbers
*   Fax numbers
*   Email addresses
*   Social Security numbers
*   Medical Record numbers
*   Health Insurance Beneficiary Numbers
*   Account Numbers
*   Certificate/license numbers
*   Vehicle Identifiers
*   Device Identifiers
*   URLs
*   IP Addresses
*   Biometric Identifiers
*   Facial Images
*   Any other Unique Identifiers

32HEALTH.
15

---

## Slide 16: Information Lifecycle Management

Confidential & Proprietary

# Information Lifecycle Management

*   The cloud storage resources (buckets) have defined retention and archival (nearline, cold) policies as mandated by HIPAA and customer requirements
*   32Health implements soft-delete within the dbs using well defined APIs
    *   We only update the is_deprecated flag in every record and mark them as deleted
    *   The same flag is reverted to restore the records
    *   This is part of the BaseModel which is used by all the models in our APIs
*   Used by all Models and APIs on 32Health Platform

**Retention policy (for compliance) details (from screenshot):**
Prevents the deletion or modification of the bucket's objects for a specified minimum period of time after they're uploaded. The optional step of setting retention mode to "locked" ensures that no one (including you) can shorten or remove the retention period.
*   **Retention period:** 10 years
*   **Effective date:** August 4, 2023 at 12:14:22 PM GMT-4
*   **Retention mode:** Unlocked
*   *Tip: You can save on storage costs by adding a complementary lifecycle rule to delete objects when they reach the end of their retention period.*

**`taxonomy_code` table structure:**

| PK Field              | Type                      |
| :-------------------- | :------------------------ |
| `taxonomy_code_id`    | integer                   |
| `taxonomy_code`       | character varying         |
| `description`         | character varying         |
| `is_deprecated`       | boolean                   |
| `created_at`          | timestamp without time zone |
| `modified_at`         | timestamp without time zone |

32HEALTH.
16

---

## Slide 17: Minimizing Data Loss

Confidential & Proprietary

# Minimizing Data Loss

*   32Health would use read-write replication to minimize data loss and improve API throughput
*   32Health Databases are truly isolated for every microservice
    *   Scaling issues would only be isolated to hot spots in 32Health's application
*   For hotspots, 32Health will use Cloud Spanner to achieve horizontal scaling, preserve ACID compliance of data records and ensure transactional consistencies
    *   Cloud Spanner has a SLA of 99.999% availability
*   The PostgreSQL databases are replicated with High Availability plus a GCP SLA of 99.95%
    *   BigQuery which is a managed service has clustering and partitioning built-in and has an uptime SLA of 99.99%

32HEALTH.
17

---

## Slide 18: Database Replication:

Confidential & Proprietary

# Database Replication:

32Health's platform has support for database clustering, replication to minimize data loss

**Google Cloud SQL Replicas Screenshot Details:**
*   **PRIMARY INSTANCE:** `dev-db-claims` (PostgreSQL 15)
    *   Allows creating read replicas from any primary instance.
    *   Allows creating cascading replicas.
*   **REPLICA:** `dev-db-claims-replica`
    *   **Type:** PostgreSQL read replica
    *   **Version:** PostgreSQL 15
    *   **Location:** us-central1-a

32HEALTH.
18

---

## Slide 19: Portals & Peripheral Applications

Confidential & Proprietary

# Portals & Peripheral Applications

**32Health Portals/Apps:**
*   Provider Network Portals
*   Developer Portals
*   Broker Portals
*   Provider Portals
*   Member Portals
*   Employer Groups Portals

These connect to **32Health APIs & Webhooks**.

**Customer/Client Branded Portals (examples):**
*   Provider
*   Producer
*   Member
*   ...
*   Developer

**Key Features:**
1.  iFrames can be used to embed 32health portal elements in Ameritas Portals
2.  Private labeling of 32health portals along with custom sub-domains
3.  Allow listing of IPs through self service developer portals for easy integration with on-prem applications
4.  Cloud data fusion enables integration with third party enterprise applications like salesforce, cisco etc.

32HEALTH.
19

---

## Slide 20: Provider Portal:

Confidential & Proprietary

# Provider Portal:

**Provider Services Platform Architecture:**

*   **Third Party RPA / API Integration:**
    *   50 states Provider Licenses
    *   National Provider Data Bank (NPDB)
    *   DEA
    *   NPPES NPI
    *   Provider Directory Validation
    *   API
*   **Workflow Automation:**
    *   Lookup - License, NPI, DEA, NPDB, Disciplinary, Malpractice
    *   Queue management - Legal, Regulatory, Recruiting, Contracting, Support
*   **Provider Recruitment And Contracting:**
    *   Application
    *   Credentialing
    *   Fee Negotiation
    *   Contract Management
    *   Re-Credentialing
    *   Auditing & Reporting
*   **Document Store (with NLP Query Layer):**
    *   Contract Documents
    *   Credentialing Documents
*   **Provider Relations Team** (Internal Platform to manage business process: `https://platform.32health.care`)
*   **Database:**
    *   Provider
    *   Leased Network
    *   Provider Credentials
    *   Business Entity
    *   Owned Network
    *   Fee Schedules
    *   Provider Locations
    *   DSO / Groups
*   **Provider Self-Serve Portal:** (`https://provider-portal.32health.care`)
    1.  Add or update information
    2.  Upload documents
    3.  Sign contracts
    4.  Message and notifications (Email, Fax, SMS)
*   **Provider Claims Resolution:**
    *   Provider Not Found
    *   Info Mismatch NPI, Address, TIN
    *   Fee Mismatch
    *   Provider Complaints & Grievances
    *   Owned and Leased Fee discrepancies
    *   Payment Resolution
*   **AI Automation:**
    *   Automated Form Processing (Email, Fax, Paper)
    1.  Recruitment
    2.  Contracting
    3.  Claim

**Key Note:**
*   32Health's platform supports vendors' and Customer/Client' portals with ability to receive and send data

32HEALTH.
20

---

## Slide 21: Hosting, Redundancy & Tech Ops

Confidential & Proprietary

# Hosting, Redundancy & Tech Ops

*   Backup, Recovery & Replication
*   System Processing, Scaling & Monitoring

32HEALTH.
21

---

## Slide 22: Backup, Recovery & Replication

Confidential & Proprietary

# Backup, Recovery & Replication

*   32Health's supported model is Cloud SaaS
*   Operational DB RPO < 5min
    *   EDA keeps data messages in queue indefinitely
*   BigQuery (99.99% availability), Spanner (99.999% availability) DBs are automatically multi-region with backup and recovery built in
*   For Cloud SQL, planned RTO is 1hr
    *   Data backup to multi-regions and read replicas are easily setup through a simple interface
    *   We are implementing GCP's Backup and DR service to further improve the resiliency
    *   For reads we automatically failover to the read replica. For write failure, we slow down write retries while we recover the db
*   For the application, the external load balancer automatically handles failover
    *   Note that we don't use managed instance groups (compute vms) for hosting the application
*   The system supports replication of the db and configuration info both via the UI and via IaaC
    *   Cloud Datastream is used for Change Data Capture logs. Other instance logs can be easily replicated using a combination of Cloud logging and BigQuery.

32HEALTH.
22

---

## Slide 23: System Processing, Scaling & Monitoring

Confidential & Proprietary

# System Processing, Scaling & Monitoring

*   Hybrid processing architecture supports both Event Driven Architecture (EDA) - primary arch and Batch
*   Our system comprises of microservices and is fully distributed with horizontal scaling based on meeting queue, cpu/memory loads and priority thresholds.
*   Batch processing is implemented using one or more of Cloud Workflows (GCP's pipeline tech), Cloud Data fusion (ELT/ETL tech), Cloud dataflow (Apache Beam) tech.
    *   Common to combine sync and async sub-workflows in a pipeline
    *   GCP's Cloud Scheduler to schedule jobs and start/restart and stop jobs at arbitrary times
*   We leverage Kubernetes underneath and we are able to scale up servers in the 1000s to process millions of records per hour - paper claims, EDI 837D and Eligibility, CSV files for claims and eligibility
*   We use GCP's built-in load balancing within region and zone and an external/internal load balancer for multi-region https
*   We detect duplicates to improve processing
    *   Cache intermediate step results in the pipeline
    *   Fast composite key hashes (e.g. combining provider, member, claim info, dates of service)
*   For real-time monitoring, we use GCP Operations Suite
    *   Real-time Dashboards
    *   Alerting to phones, slack, email, pager-duty
    *   All resources on GCP stream logs into Cloud Operations Suite
    *   GCP Chronicle in consideration for a native SIEM implementation

32HEALTH.
23

---

## Slide 24: 32Health Infrastructure

Confidential & Proprietary

# 32Health Infrastructure

| Function                       | Components                                                |
| :----------------------------- | :-------------------------------------------------------- |
| Compute                        | Google Kubernetes Engine, CloudRun, Cloud Functions, HPA  |
| Networks                       | Cloud Load Balancer, Cloud Routes, Cloud NAT, VPC, Apigee |
| Data Storage                   | CloudSQL, Cloud Spanner, Cloud Firestore, Bigtable, Cloud Storage, Vertex Matching Engine (Vector DB) |
| Messaging & Workflows          | Cloud Pub/Sub, Eventarc, Cloud Workflows, Cloud Composer, Cloud Datastream, Cloud Dataflow, VertexAI |
| Logging                        | Cloud Logging, GCP Operations Suite, GCP Chronicle, Sentry |
| CI/CD                          | Cloud Build, Cloud Deploy, Artifactory Registry and Scanner, Terraform, Github |
| BI Reporting                   | Looker, BigQuery                                          |
| Identity and Access Management | Auth0 (Single Sign-On), Cloud Identity                    |
| Machine Learning and AI        | Vertex AI, Huggingface                                    |
| Development                    | Cloud Workstations, Corporate Laptops                     |

32HEALTH.
24

---

## Slide 25: 32Health Infrastructure

Confidential & Proprietary

# 32Health Infrastructure

**Detailed GCP Architecture Diagram:**

**Overall Structure:**
*   Leverages Google Cloud Platform.
*   Multiple VPCs and regions: Single tenant VPC (us-central1), Multi tenant VPC (us-central1), Region (us-east1).
*   Authentication handled by External SaaS (Auth0) and External Infrastructure 3rd Party (Azure Active Directory).

**Core Infrastructure (across VPCs/Regions):**
*   **CDN:** Cloud CDN
*   **Storage:** Cloud Storage
*   **Security:** Cloud Armor, Cloud Firewall Rules
*   **Networking:** Cloud DNS, Cloud Load Balancing, Cloud Routes, Cloud NAT
*   **API Platform:** Apigee API Platform

**Application & Compute:**
*   **Kubernetes Cluster (GKE)** in various zones (us-central1-a, us-central1-b, us-east1-a)
*   **Event Driven Service Integration:** Cloud Pub/Sub, Workflows

**Data & Databases:**
*   **Data Separation:** Secret Manager, Atlas API
*   **Data Storage:** Cloud SQL, Cloud Spanner, Cloud Storage, Firestore (used in different clusters/regions)
*   **Data Processing:** Cloud Data Fusion, Cloud Dataflow

**AI/ML Services:**
*   Cloud Text-to-Speech
*   Cloud Speech-to-Text
*   Cloud NLP
*   Dialogflow
*   Cloud Translation
*   VertexAI

**Reporting:**
*   Looker
*   BigQuery

32HEALTH.
25

---

## Slide 26: 32Health DB Infrastructure

Confidential & Proprietary

# 32Health DB Infrastructure

**Cloud SQL Deployment For Every DB (VPC1):**

*   **Region: us-central1**
    *   **Zone: us-central1-a**
        *   GKE (Kubernetes Engine)
        *   PRIMARY Cloud SQL
    *   **Zone: us-central1-b**
        *   STANDBY Read Replica (connected to PRIMARY Cloud SQL)
*   **Shared Components in us-central1:**
    *   Cloud NAT
    *   Cloud Storage (Import/Export)

*   **Asynchronous Replication** connects the PRIMARY Cloud SQL (us-central1-a) to a cross-region read replica.

*   **Region: us-west2**
    *   **Zone: us-west2-c**
        *   Cross-region read REPLICA (Cloud SQL)

32HEALTH.
26

---

## Slide 27: Scalable Infrastructure

Confidential & Proprietary

# Scalable Infrastructure

**DB that scales with data:**
*   **Cloud SQL:** scales vertically
*   **BigQuery:** scales horizontally
*   **Cloud Spanner:** scales horizontally
*   **Cloud Storage:** scales 'infinitely'
*   **Cloud Pub/Sub**
*   **Cloud Firestore/Datastore**

**Compute that scales with Workload:**
*   **Kubernetes Autopilot**
*   **Cloud Run:** (serverless)
*   **Cloud Functions:** (serverless)
*   **Vertexai**

**Note:** Services deployed on scalable infra

32HEALTH.
27

---

## Slide 28: Deployment Strategy

# Deployment Strategy

32HEALTH
PROPRIETARY & CONFIDENTIAL
28

---

## Slide 29: 32Health Deployment Environments

Confidential & Proprietary

# 32Health Deployment Environments

**Deployment Environments Overview:**

*   **Artifact Management:**
    *   Vulnerability Scan (Artifact Analysis)
    *   Image Storage (Artifact Registry)
    *   DevOps (role)
    *   Image Push
*   **Source Code Repository:**
    *   Commit PR
    *   Git Source Repository
    *   Developer (role)

**Continuous Integration (CI):**
*   Cloud Build
*   Trigger CI
*   DevOps (role)

**Continuous Delivery (CD) Pipeline:**

1.  **Dev Environment:**
    *   Test Kubernetes Engine
    *   Receives **Hydrated Manifest** from Release Creation
2.  **Stage Environment:**
    *   Stage Kubernetes Engine
    *   Receives **Hydrated Manifest** from Release Creation
3.  **UAT Environment:**
    *   UAT Kubernetes Engine
    *   Receives **Hydrated Manifest** from Release Creation
4.  **Prod Environment:**
    *   Production Kubernetes Engine
    *   Receives **Hydrated Manifest** from Approval (Ops role)

**Continuous Delivery Steps:**
*   **Trigger Release Creation** (from CI)
    *   Release Creation (Cloud Deploy)
*   **Dev Rollout** (Cloud Deploy)
*   **Promote** (Cloud Deploy)
*   **Stage Rollout** (Cloud Deploy)
*   **UAT Rollout** (Cloud Deploy)
*   **Approval** (by Ops)
*   **Prod Rollout** (Cloud Deploy)

32HEALTH.
29

---

## Slide 30: Proposed Connectivity with Customer/Client Network

Confidential & Proprietary

# Proposed Connectivity with Customer/Client Network

| Connectivity Type     | Description                                               |
| :-------------------- | :-------------------------------------------------------- |
| Public Internet       | Simplest way to connect, Traffic is encrypted using standard methods like HTTPS/TLS |
| Dedicated Interconnect | Direct physical connectivity with Google edge servers / data centers. Suitable for high throughput workloads (10Gbps to 100Gbps) |
| Partner Interconnect  | If a customer cannot connect to Google edge servers / data centers, they can connect through service providers, allows for more flexible capacity options |

32HEALTH.
30

---

## Slide 31: Proposed Connectivity - Core

Confidential & Proprietary

# Proposed Connectivity - Core

| Connectivity Type           | Module/Process                                   | Example Scope                                            |
| :-------------------------- | :----------------------------------------------- | :------------------------------------------------------- |
| API - Direct inc. Bulk Data APIs | Module level connectivity->Point-to-Point; Each module has set of APIs | All 14 modules (including Audit/Compliance) + Monitoring |
| Bulk uploads on web app     | CSV/EDI, Document upload/download                | Eligibility, Providers, Correspondence templates, pdf reports |
| Partner APIs/SFTP           | Claims, Provider network inc. provider list, fees, cred info | Clearinghouse partners, Leased network partners          |
| Enterprise APIs             | CRM, Financial                                   | Salesforce, SalesXpress?, Financial (e.g. Oracle)      |
| External SFTP               | Batch processing for Eligibility, Claims         | 834, 835, 837, 270/271, 276/277, Eligibility CSV         |
| Webhook                     | Event notifications                              | All pipelines status updates                             |

32HEALTH.
31

---

## Slide 32: Proposed Connectivity

Confidential & Proprietary

# Proposed Connectivity

*   Authorized read-only views of BigQuery tables
    *   Needs additional security review with the client
*   Python client library for backend API and React SDK for frontend components
*   CDC from 32Health's DBs to external client database
    *   Example: sync between BigQuery and Snowflake using Cloud Data Fusion or Striim

**Snowflake Plugins for Snowflake:**

| Plugin Name                  | Description                                                  |
| :--------------------------- | :----------------------------------------------------------- |
| Cloud Storage to Snowflake   | Loads data from external or internal staged files on Cloud Storage to an existing Snowflake table. |
| Snowflake (Writes)           | Writes data to a Snowflake table in batch pipelines.         |
| Snowflake (Reads)            | Reads data from Snowflake tables in batch pipelines.          |

32HEALTH.
32

---

## Slide 33: Proposed Connectivity - formats, standards

Confidential & Proprietary

# Proposed Connectivity - formats, standards

*   Supported formats: JSON, CSV/PSV, EDI
*   External APIs are REST, GraphQL
    *   GraphQL gives generalized graph access and data retrieval across logical model with better degree of permissioning and control
    *   gRPC - currently internal only for performance hotspots; ability to provide external access
    *   API Secured via OAuth2
        *   Auth code and password grant type options available
        *   API keys is also an option
*   Developer portal access
    *   Access to PROD and UAT

32HEALTH.
33

---

## Slide 34: Proposed Connectivity - Ownership

Confidential & Proprietary

# Proposed Connectivity - Ownership

| Task/Process                                          | Owner                                               |
| :---------------------------------------------------- | :-------------------------------------------------- |
| Integrating with Customer/Client' enterprise apis     | Jointly by 32Health Implementation team & Customer/Client |
| Integrating with Partner APIs relevant for CAPS       | 32Health Implementation team                      |
| Integrating with SFTP systems of Customer/Client      | 32Health Implementation team                      |
| Consuming 32Health outbound APIs                      | Jointly by 32Health Implementation team & Customer/Client |
| Webhooks                                              | Webhook destinations owned by Customer/Client     |
| Ongoing support to meet SLAs                          | 32Health email, phone, teams/slack 24x7 Support   |
| Feature requests                                      | 32Health Customer Success and Engineering         |

32HEALTH.
34

---

## Slide 35: Release Schedule of System Updates

Confidential & Proprietary

# Release Schedule of System Updates

**Feature Updates Table:**

| Update Frequency | Example Scope                                               |
| :--------------- | :---------------------------------------------------------- |
| Quarterly - Major | Typically Module level e.g. Contact Center AI availability |
| Monthly - Feature | Feature within Module e.g. New reports available, better performing AI models |
| Weekly - Minor   | Typically a UI change e.g. UI component within Module      |

**Critical/Urgent updates:**
*   Critical patches are deployed right away with communication with key stakeholders
    *   Example of a fix that needs a Critical update: Unresponsive frontend
*   Urgent updates are also off-cycle, scheduled within a few days
    *   Example of an urgent update: Performance fix for API that has seen a few SLA misses

32HEALTH.
35

---

## Slide 36: System Updates - Release Process

Confidential & Proprietary

# System Updates - Release Process

**Release Process Overview:**

*   Customer (Customer/Client) has access to UAT and PROD environments
    *   Similarly, Developer API portals provides access to these environments
*   Changes are first deployed to UAT
*   After user sign-off, changes are deployed to PROD
    *   We use Feature flags as well => Some changes can be tested in PROD
*   APIs are versioned and backward compatible for last 6 months
*   Updates are scheduled on agreed upon off-hours such as Sundays

**Release Flow Diagram:**
1.  **DEV** environment.
2.  Code is deployed to **UAT** environment.
    *   User can access `https://platform-uat.32health.care`
    *   Once "APPROVED" in UAT.
3.  Changes are deployed to **PROD** environment.
    *   User can access `https://platform.32health.care`
    *   Once "APPROVED" in PROD.
4.  **Training** and **Release Notes** are generated.
5.  **Feature flags** are managed for PROD, allowing testing of some changes.

32HEALTH.
36

---

## Slide 37: System Updates - Release Communication, Ongoing Training, and Change Management

Confidential & Proprietary

# System Updates - Release Communication, Ongoing Training, and Change Management

*   Customer/Client will have a dedicated Customer Success Manager
*   Customer Success Manager will
    *   communicate the product roadmap and prioritize features for Customer/Client
    *   lead, communicate and coordinate for upcoming release/updates
    *   provide onboarding for major releases
    *   communicate release notes
*   Communication channels: Email, Teams/Slack and FreshDesk, pre-scheduled meetings (e.g. weekly in beginning, monthly/quarterly/TBD as needed)
    *   Partner with Customer/Client IT and Training departments on user onboarding and training
*   FreshDesk is refreshed with
    *   Updated training videos and how-to text guides
    *   Updated knowledge base
*   API documentation (openapi spec) is automatically updated on the Developer portal

32HEALTH.
37

---

## Slide 38: SDLC & Testing Strategies

# SDLC & Testing Strategies

32HEALTH
PROPRIETARY & CONFIDENTIAL
38

---

## Slide 39: 32Health - Tenant Lifecycle

Confidential & Proprietary

# 32Health - Tenant Lifecycle

This slide contains content identical to "Slide 29: 32Health Deployment Environments". Please refer to the content on that slide for details on Artifact Management, Continuous Integration, Continuous Delivery, and Deployment Environments (Dev, Stage, UAT, Prod).

32HEALTH.
39

---

## Slide 40: 32Health - Testing strategies

Confidential & Proprietary

# 32Health - Testing strategies

*   **Unit Testing** - Testing individual units and components (PyTest, Mocha)
*   **Integration Testing** - Testing interactions between components (Selenium)
*   **End-to-End Testing** - Testing of specific user actions and workflows (Selenium)
*   **Performance Testing**
    *   **Load Testing** - Testing system performance under expected load conditions
    *   **Stress Testing** - Testing system behavior over a burst of traffic
*   **Security Testing** -
    *   Pentest for application and infra once a year per policy
    *   Web application scanner tests web application daily
    *   Security and Command Center runs tests daily scanning for infra vulnerabilities
    *   Vulnerability scanners from Artifact registry run for new image versions
*   **Failover and Recovery Testing** - Simulate failures and recovery processes, ensure system can recover from potential failures without extended downtime.
*   **Test Driven Development** (highlighted)

32HEALTH.
40

---

## Slide 41: 32Health - Load Testing

Confidential & Proprietary

# 32Health - Load Testing

*   **Test Objectives** - Test concurrency, response times, identify bottlenecks, optimize hotspots and managing graceful degradation of service on reaching the breaking point
*   **Example Test Scenario**
    *   100,000 claims received per day, backed up for 10 days, leaving a burst load of 1M claims to be processed by the system.
*   **Test Environment** - Staging Environment
*   **Automated Tests** - Completely automated tests (Locust/grasshopper)
*   **Test Suite/Data** - Covers high risk areas and hotspots with realistic synthetic data
*   **Custom Test Suite** - Covers specific customer actions and workflows
*   **Schedule** - Performed after every major update affecting performance sensitive areas
*   **Metrics** - Response time, Throughput, Request rate, Error rate, Concurrency, Active connections, connection time, Transactions per second, Cpu/Memory/Disk utilization, Cost optimization with auto scaling
*   **Visualize Test Results** - Use Looker to visualize test results

32HEALTH.
41

---

## Slide 42: 32Health - Regression Testing

Confidential & Proprietary

# 32Health - Regression Testing

*   **Test Objectives** - Test existing features, ensure correctness and stable behavior of app
*   **Example Test Scenario** - Ensure that a tweak to the claims adjudication produces the same expected test results compared to the historic results
*   **Test Environment** - Dev, Staging and UAT environments
*   **Automated Tests** - Speedy and consistent tests after every change (Selenium)
*   **Test Suite/Data** - Covers major features to minor functionalities with sample historic data and continuously updated with new test scenarios
*   **Custom Test suites** - Covers specific customer actions, workflows and test scenarios
*   **Schedule** - Performed before every update
*   **Metrics** - Test duration, Test execution coverage, Requirements coverage, Defect severity
*   **Visualize Test Results** - Use Looker to visualize test results
*   **Risk-based Testing** - Prioritize tests for high-risk areas for critical patches and hotfixes

32HEALTH.
42

---

## Slide 43: 32Health - What-if Testing (Simulation/Forecasting)

Confidential & Proprietary

# 32Health - What-if Testing (Simulation/Forecasting)

*   **Custom Test Suite** - Select and build your own test cases and scenarios (Part of implementation)
*   **Example Scenarios**
    *   **New product release** - what if scenario is leveraged with a new plan configuration to determine the claim payout, claim loss ratio and profitability
    *   **Claims adjudication** - Simulate a change is made in the adjudication logic, we would run the new algorithm against a sample set of curated test data (past 100k claims) and compare the new results with existing results
    *   **Eligibility** - Simulate routing rules associated with member eligibility load, such as add, delete and retro operations to reduce eligibility errors for adjudication
    *   **Broker commissions** - Simulating a change in the broker-compensation, commission rates, bonus for broker payout
*   **Visualize the Test Results** - Looker will be leveraged for visualizing testing results

32HEALTH.
43

---

## Slide 44: 32Health - Failover and Recovery Testing

Confidential & Proprietary

# 32Health - Failover and Recovery Testing

*   **Test Objective** - Test resiliency of automated healing of gcp components, kubernetes clusters, databases, messaging, etc and provisioning of cloud resources when a particular component fails
*   **Example Test Scenario**
    *   Simulate the failure of kubernetes cluster in the primary region
        *   Measure metrics when switching over to the failover region
        *   Measure metrics to spin up the clusters and horizontally scale them to bring them on par with the primary region
        *   Measure metrics to heal primary region, bring it back online and scale down the failover region
*   **Test Environment** - Staging environment is primarily used for this
*   **Automated / Manual Tests** - Combines both automated and manual tests scenarios
*   **Schedule** - Performed as per policy
*   **Metrics** - Time taken to recover, Data integrity during point in time recovery, Average error rates, degree of manual intervention required
*   **RTO** - 1 hr
*   **RPO** - 5 min
*   **Hot Recovery**
    *   Reads->Switch to read replica automatically
    *   Writes->Keep messages in queue till DB is recovered

32HEALTH.
44

---

## Slide 45: 32Health - Google Assured OSS in CI/CD

Confidential & Proprietary

# 32Health - Google Assured OSS in CI/CD

*   **Automated Updates** -
    *   Base images updated by Google
    *   No manual intervention for security patches
*   **Versioning and Rollbacks** -
    *   Easily switch to previous secure images if needed.
    *   Support for semantic versioning
*   **Consistency and Reliability** -
    *   Standardized base images across multiple environments
    *   Ensures consistent performance and security
*   **Faster Deployment Cycles** -
    *   Eliminate time spent on base image vetting.
    *   Focus on feature development and customizations.
*   **Reduced Risk Exposure** -
    *   Automatic scans during build and deploy stages.
    *   Immediate feedback loop for developers
*   **Regulatory Compliance** - Meet industry security standards with ease and Facilitate audits with comprehensive logs
*   **Cost Efficiency** - Easily plug into existing CI/CD pipelines and reduced overhead on security maintenance

32HEALTH.
45

---

## Slide 46: SDLC - Tooling

Confidential & Proprietary

# SDLC - Tooling

| Stage                             | Tooling                                                                |
| :-------------------------------- | :--------------------------------------------------------------------- |
| Planning, Analysis, and Design    | Lucidchart, SRS documents, JIRA, FIGMA, Bubble.io, Google Doc, Slack Canvas |
| Code Development                  | Cloud Workstations, GitHub, GitHub Actions, Github Autopilot, VSCode, PyCharm Poetry, Docker, Artifact Registry, Storybook, Terraform, Google Cloud Build, Google Cloud CLI, Spacelift, Kubernetes Resource Deployment |
| AI Development                    | Vertex AI, Huggingface, PyTorch, various LLM models, Langchain           |
| Security                          | Google Cloud IAM, GitHub Advanced Security, GitHub Secret Scanning, Google Cloud Container Scanning, BinaryAuth, WebScanner, Command and Security Center |
| Testing and Integration           | PyUnit, Mocha, Selenium, Storybook, Locust-Grasshopper                   |

32HEALTH.
46

---

## Slide 47: SDLC - Example

Confidential & Proprietary

# SDLC - Example

| Stage                             | Feature->New Benefit Plan config option                                                                  |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------- |
| Planning, Analysis, and Design    | 1. Write SRS doc<br>2. Create JIRA tickets<br>2. Create Lucid diagram describing new Business rule<br>3. Update FIGMA for UI design<br>4. Define test cases and create test data |
| Code Development                  | 1. Write rule for rules engine<br>2. Write code for frontend<br>3. Write unit & functional tests           |
| AI Development                    | N/A                                                                                                      |
| Security                          | 1. Run Secret Scan<br>2. Check for Code vulnerabilities scan<br>3. Perform Container Scan               |
| Testing and Integration           | 1. Get BinaryAuth to deploy to staging<br>2. Perform Integration tests<br>3. Get business approval<br>4. Perform web application scan<br>5. Deploy to UAT<br>6. Deploy to Prod pending User Approval |

32HEALTH.
47

---

## Slide 48: SDLC - AI Example

Confidential & Proprietary

# SDLC - AI Example

| Stage                             | Feature->Model for extracting vision form                                                                |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------- |
| Planning, Analysis, and Design    | 1. Write SRS doc<br>2. Create JIRA tickets<br>2. Create Lucid diagram describing Model IO<br>3. Create Model ontology and performance targets<br>4. Define test cases |
| Code Development                  | 1. Create Vertex online & batch Inference<br>2. Incorporate inference into pipelines                      |
| AI Development                    | 1. Prepare data - test/training/valid<br>2. Annotate data<br>3. Develop model using PyTorch - explore, develop, learn loop<br>4. Create model monitoring, bias metrics reports<br>5. Setup Active learning pipeline<br>6. Push Model to Model Registry |
| Security                          | 1. Run Secret Scan<br>2. Check for Code vulnerabilities scan<br>3. Perform Container Scan               |
| Testing and Integration           | 1. Get BinaryAuth to deploy to staging<br>2. Perform Integration tests<br>3. Get business approval<br>4. Deploy to UAT<br>5. Deploy to Prod pending User Approval |

32HEALTH.
48

---

## Slide 49: Change Management - Enhancements/Features

Confidential & Proprietary

# Change Management - Enhancements/Features

**Change Management System (Flowchart Description):**

*   **Initiation:**
    *   User creates an RFC (Request for Change) through Help Desk.
    *   The RFC is Recorded and then Reviewed.
*   **Assessment:**
    *   "No change request required" path: Can be handled through Configuration.
    *   "Change request needed" path: Assess and evaluate change.
*   **Authorization & Implementation:**
    *   If change is needed, it's Authorized, leading to a Change Proposal.
    *   Timelines are Communicated.
    *   Requirement Documents are prepared.
    *   The change is Implemented.
*   **Deployment Pipeline:**
    *   Promote build to UAT.
    *   Regression Testing is performed.
    *   Binary Authorization & Versioning.
    *   Approval Process.
    *   In Production.
*   **Post-Deployment:**
    *   Review and close change record.
    *   Continuous Learning Evaluation report/feedback.
*   **Knowledge & Training:**
    *   Release Notes, Training Sessions, Documentation & Guides, Video Tutorials, Knowledge base are updated.
*   **Strategic Planning:**
    *   QBRs (Quarterly Business Reviews) determine major features and scheduled meetings.
*   **System Label:** 32Health Change Management System

32HEALTH.
49

---

## Slide 50: Change Management - Self-Service Configuration

Confidential & Proprietary

# Change Management - Self-Service Configuration

**Self-Service Configuration Change Management (Flowchart Description):**

*   **Initiation:**
    *   Change request for configuration is raised.
*   **Assessment:**
    *   Assess and evaluate change.
    *   If "Code Change required" (path not taken in self-service flow, but exists as an alternative in overall system).
*   **Application & Logging:**
    *   Apply the change request.
    *   Change Log is updated.
    *   Configuration Change log is also maintained.
*   **Testing & Approval:**
    *   UAT (User Acceptance Testing) is performed.
    *   Testing Process occurs.
    *   Approval Process is executed.
*   **Deployment:**
    *   In Production.
*   **Review & Closure:**
    *   Review change request.
    *   Process is Closed.
*   **Knowledge & Strategic Planning:**
    *   Training Sessions, Documentation & Guides, Video Tutorials, Knowledge base are available.
    *   Continuous Learning - Evaluation report/feedback informs future changes.
    *   QBRs/Prescheduled meetings for strategic alignment.
*   **System Label:** 32Health Change Management System

32HEALTH.
50

---

## Slide 51: Security & Compliance

# Security & Compliance

32HEALTH
PROPRIETARY & CONFIDENTIAL
51

---

## Slide 52: Security & Compliance

Confidential & Proprietary

# Security & Compliance

*   Security Overview
*   Security: Multi-Tenancy
*   Security: Access Control
*   System Security
*   Secure Development
*   Application Security
*   Security Incident Management Process
*   SSO Security & Integration: Demo
*   API Security: Demo
*   Encryption at Rest and in Transit
*   Audit, General Logging & Track Users
*   Third Party Vendor Risk Management
*   Compliance

32HEALTH.
52

---

## Slide 53: Security Overview

Confidential & Proprietary

# Security Overview

**32Health PROD Infra Security Components:**

*   **External PenTest services**
*   **GitHub Advanced Security:**
    *   Code scanning for security vulnerability and secretes
*   **Binary Authorization:**
    *   For an extra layer of container security
*   **Artifact Registry:**
    *   For authorized containers with container scanning for OS vulnerability
*   **IAM for RBAC:**
    *   For making sure only authorized personnel have access
*   **Identity Aware Proxy:**
    *   For restricting DEV/STG applications to internal users
*   **Web Security Scanner:**
    *   Vulnerability assessment
*   **Workload Identity Federation:**
    *   For removing need for service account keys
*   **Secret Manager:**
    *   For securely storing credentials, keys
*   **Cloud Audit Logs**
*   **Data Loss Prevention API:**
    *   To scan and redact PHI during data egress (labeled with 51, 10, 15, 05 numbers)
*   **Security Command Center:**
    *   For comprehensive scanning of resources within VPC

32HEALTH.
53

---

## Slide 54: Security: Tenancy

Confidential & Proprietary

# Security: Tenancy

*   Each client's data is logically and physically separated from other clients
    *   A set of database per client
*   Access to the database is via separate IAM service accounts which enforce separation of data
*   Only the Application instance and related services -deployed for client - is authenticated to communicate with db

32HEALTH.
54

---

## Slide 55: Security: Access Control

Confidential & Proprietary

# Security: Access Control

*   For external access to the app, we use Auth0 to implement support for multiple roles and groups
*   For internal access, we leverage GCP identity groups and roles created using Cloud Identity/GCP Workspace group & Cloud IAM using the principle of least privileged access and zero trust as much as possible.
    *   Example: prod-users group only has (limited) read access to Prod and the general dev-users has no access to Prod
    *   Example: Machine to Machine auth and general auth within pipeline is via strictly via service accounts
*   Admin access is via a dedicated admin identity group defined at the 32Health org level (GCP best practice) with access to limited authorized personnel. Membership into this group or its privileges cannot be tampered with by project level admins. This is not set via IaaC and is set directly on the console.

32HEALTH.
55

---

## Slide 56: Secure Development

Confidential & Proprietary

# Secure Development

*   32Health has a well defined Secure Development Policy
*   MFA mandatory for GCP, Github
*   Predominant use of GCP Cloud Workstations for development
    *   Strict access control for repos - controlled environment for developers
    *   Faster and secure development - no downloading of credentials ever
    *   Use of shielded VMs - hardened images
*   Via GCP policy, several strict security measures enforced -Examples no public ip access for dbs, no public buckets, no credentials keys generated, no RDP, SSH, no public IP machines
*   Github secret scanning, code scanning, dependabot scanning, protected branches
*   A combined Github flow and Gitlab flow branching strategy eliminates inadvertent push to higher environments
*   Maximum use of GCP Assured Open Source Software to 'shift-left' security
*   GCP connectivity to Github via Workload Identity Federation - no use of credential keys
*   GCP automated Artifact analysis for OSS vulnerabilities
*   Binary authorization prior to deployment

32HEALTH.
56

---

## Slide 57: Application Security

Confidential & Proprietary

# Application Security

*   Pervasive use of Secret Manager that eliminates storing credentials in code
*   Use of SQL Cloud connectors that leverage auth via service accounts and eliminate knowing ip addresses of databases
*   Only Identity Aware Proxy based access for internal users of applications in lower environments => prevents any accidental access to our applications.
*   SSO external users implemented via auth0
*   Continual vulnerability assessment from GCP Web Security Scanner
*   Pen test (planned once a year) for both application and infrastructure
*   Continuous scanning of infrastructure underlying application.
*   Application services only auth via service accounts - zero-trust leveraged as much as possible.
*   Use of Cloud Armor - DDOS and web attack defense on edge
    *   Protect against SQLI, XSS etc
    *   Allow/Block traffic based on IP, GEO
*   API security (discussed later)

32HEALTH.
57

---

## Slide 58: Security Incident Management Process

Confidential & Proprietary

# Security Incident Management Process

*   Our incident response plan covers security incidents and functions and entities such as:
    *   Roles & Responsibilities, Response team
    *   Reporting
    *   Incident severity
    *   Escalation, War room creation
    *   Documentation
    *   Incident triage, Mitigation and Remediation
    *   External Comms and Breach reporting
    *   RCA
*   32Health uses centralized Cloud Logging from GCP's Operations Suite for alerting of security events => alerts on email, phone, slack
*   32Health has planned for implementation of GCP Chronicle's SIEM solution

32HEALTH.
58

---

## Slide 59: SSO Security & Integration

Confidential & Proprietary

# SSO Security & Integration

**SSO Security & Integration Architecture (within 32Health PROD VPC):**

*   **Identity Provider** (e.g., OpenID) connects to the **32Health app**.
*   The **32Health app** forwards requests to **Cloud Load Balancing**.
*   **Cloud Load Balancing** directs traffic to **APIGEE API Proxy**.
    *   APIGEE API Proxy implements Regex protection policy and JSON Threat protection policy.
*   **APIGEE API Proxy** directs traffic to **Google Kubernetes Engine** (running Claim services).
*   **Google Kubernetes Engine** (Claim services) interacts with:
    *   **Service account based authorization**
    *   **Cloud SQL**

**Key Note:**
*   32Health uses auth0 for implementing SSO and handling federation, external IDM and delegated admin functions

32HEALTH.
59

---

## Slide 60: API Security

Confidential & Proprietary

# API Security

**API Security Architecture:**

*   **Oauth2.0** provides core authentication and authorization.
*   **Identity Tracking** components:
    *   API Keys
    *   Authorization - Oauth2.0
    *   Grant type - Client Credentials
*   **API Proxy** (likely Apigee) implements various security policies:
    *   Spike Arrest Policy - Rate limiting, IP whitelisting.
    *   Application-level DDOS protection.
    *   Regex protection policy.
    *   JSON Threat protection policy.
*   These measures protect **EDI endpoints and other APIs**, including:
    *   POST /token
    *   POST /edi-837D
    *   POST /edi-835
    *   POST /claims-svc

32Health
60

---

## Slide 61: Encryption at Rest and in Transit

Confidential & Proprietary

# Encryption at Rest and in Transit

*   Data encrypted at rest by default.
    *   Several layers of encryption across Application, Platform, Infra and Hardware are used to protect user data.
    *   We have the ability to rotate keys using GCP Cloud Key Management Service (KMS).
    *   We can also support CMEK using Cloud KMS
*   Data is encrypted in transit using TLS while communicating with clients up to GFE (Google Front End)
    *   Within 32Health's environment within GCP, ALTS (Application Layer Transport Security) is used.
*   Data is stored within our systems in a HIPAA compliant way using data security & privacy controls including retention policy and redaction
*   We are in the audit phase of SOC2 Type II certification

32HEALTH.
61

---

## Slide 62: Audit, General Logging & Track Users

Confidential & Proprietary

# Audit, General Logging & Track Users

*   32Health uses Cloud logging from GCP's Operations Suite for our centralized logging solution
    *   Cloud logging from GCP's Operations Suite logs events across all components and services of our platforms
    *   Cloud logging has client libraries in Python and Node that make it easy create comprehensive structured logs when events are detected.
*   32Health uses native GCP Audit Logging supplemented by custom logging which audits admin activity, data access activity and system events from all resources used within 32Health including databases, applications, compute instances, buckets, IAM, APIs
*   32Health uses application logging, auth0 logging, database logging to track changes to groups, members, claims
    *   Using auth0, we can track when users logged on and how long they were logged on
    *   Using GCP audit logging we can track internal users
*   The database tables themselves log the changes to records
*   We use datastream for Change Data Capture to track CRUD operations from operational db (PostgreSQL) to BigQuery

32HEALTH.
62

---

## Slide 63: Third Party Vendor Risk Management

Confidential & Proprietary

# Third Party Vendor Risk Management

*   TPRM under scope of our Third-Party Management Policy and Risk Management Policy
*   A few highlights
    *   Vendors must complete risk assessment e.g. SIG, sign BAA if applicable
    *   32Health performs threat assessment for 3P
    *   32Health regularly monitors, reviews, and audits supplier service delivery
    *   Third-parties maintain a technical access control program
    *   Third parties must maintain regulatory or certification requirements

32HEALTH.
63

---

## Slide 64: Compliance

Confidential & Proprietary

# Compliance

*   32Health systems are HIPAA compliant and can perform HIPAA compliant transactions
    *   32Health supports EDI transactions
*   PCI compliant transactions are not supported but can be supported if required by Ameritas
*   32Health's platform has workforce management capabilities, including tracking of users, workflows, and related metrics
*   32Health platform has the ability to validate various information types upon input and flag users of missing/invalid data

32HEALTH.
64

---

## Slide 65: Compliance - Access control for users

Confidential & Proprietary

# Compliance - Access control for users

| Name                | Description                                         |
| :------------------ | :-------------------------------------------------- |
| ClaimAdmin          | Administrator with access to all of claims module   |
| ClaimClinicalReviewer | User with access to UR screen page                |
| ClaimDataEntry      | User with access to Manual Claims and UR screen   |
| ClaimProcessor     | User with access to Processed Claims, Manual Claims, and UR pages |
| SuperAdmin          | Has access to every module of the app             |

32HEALTH.
65

---

## Slide 66: Enterprise Tools

# Enterprise Tools

32HEALTH
PROPRIETARY & CONFIDENTIAL
66

---

## Slide 67: Languages & Frameworks

Confidential & Proprietary

# Languages & Frameworks

The SDLC tooling listed here is identical to "Slide 46: SDLC - Tooling".

**Modern and secure development:**
*   Environments are setup using IaaC/Terraform
*   Blend of GitHub & Gitlab flow is used for repo strategy.
*   Protected branches are used.
*   Cloud Build, Github actions and Artifact Registry are tools used for CI/CD.
*   No PHI within Lower environments
*   Production access restricted to authorized US personnel

32HEALTH.
67

---

## Slide 68: Enterprise Tools & Components

Confidential & Proprietary

# Enterprise Tools & Components

| Function                       | Tools / Vendors                                                                                                                                                                                                            |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BI Reporting                   | Looker                                                                                                                                                                                                                     |
| HelpDesk & Training            | FreshDesk                                                                                                                                                                                                                  |
| Identity and Access Management | Auth0 (Single Sign-On), Google Cloud (Cloud Identity)                                                                                                                                                                      |
| Cloud Infrastructure           | **Core Infra:** Google Cloud (GCE,GKE,Cloud Run, Cloud Fun, Cloud Storage, PubSub, Cloud DR), Cloud Load balancer<br>**API:** Google Cloud (Apigee, REST, GRAPHQL, Sendgrid)<br>**Workflow:** Google Cloud (Cloud Datastream, Workflow, Data fusion, Dataflow)<br>**Logging & Event Mgmt:** (GCP Operations Suite, GCP Chronicle) |
| Version Control and Collaboration | GitHub, GH Autopilot, Lucid, Google Workspace, Slack                                                                                                                                                                       |
| Database Application and Storage | CloudSQL, BigQuery, CloudSpanner if needed                                                                                                                                                                                 |
| Backup & Disaster Recovery     | Cloud SQL backup & replica, GCP Backup & DR service                                                                                                                                                                        |
| Security                       | GCP Chronicle, Cloud DLP, Cloud KMS, Secret Manager, Cloud IDS, Cloud Armor, Web Scanner, Security and Command Center, Cloud IAP                                                                                             |
| Contact Center                 | GCP Contact Center AI Platform                                                                                                                                                                                             |
| Dedicated Tenant for Deployment |                                                                                                                                                                                                                            |
| Machine Learning and AI        | Vertex AI, Huggingface, PyTorch, DVC, Streamlit                                                                                                                                                                            |
| Secure Development             | GH AdvSec & Secret Scanning, GCP Artifact Registry, BinaryAuth, GCP Assured Open source, Cloud Workstation                                                                                                                 |

32HEALTH.
68

---

## Slide 69: Thank you

# Thank you

32HEALTH