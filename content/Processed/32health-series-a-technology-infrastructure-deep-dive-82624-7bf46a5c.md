---
source_pdf: "https://drive.google.com/file/d/1s-yvLAGp0Di5j5_IcsvpIbsMPiJOMGKk/view"
drive_folder: "Portfolio/LightSpun/Series A Data Room/Product"
type: portfolio
company: LightSpun
ingested: 2025-12-27
original_filename: "32Health Series A Technology Infrastructure Deep Dive 8.26.24.pptx"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1s-yvLAGp0Di5j5_IcsvpIbsMPiJOMGKk/view)

## Slide 2

Technical Architecture

2

Proprietary & Confidential

---

## Slide 3

Overall Architecture

3

SaaS Modules
Eligibility Management
Provider Management
Provider Network
Recruitment
Credentialing
Contracting
Re-credentialing
Benefit and Policy Management
Employer Groups
Claim Adjudication
AI Claims Automation
EDI
Financial
Billing
Payment
Receivables
Portals and Support
AI Assisted Contact Center
Enterprise Reporting
Broker Management
Sales Management
Compliance & Audit

Confidential & Proprietary

---

## Slide 4

ETL/ELT  Pipelines - File Intake

4

Multiple compatible format for file intake capabilities,
Adaptors help ingest new formats
Flexible ETL models

Confidential & Proprietary

---

## Slide 5

Reporting Architecture

5

Confidential & Proprietary

---

## Slide 6

Communications - External APIs

External APIs via Apigee Developer Portal

EDI API supports X12

6

Confidential & Proprietary

---

## Slide 7

Communications - API Management

7

Confidential & Proprietary

---

## Slide 8

API Details - REST API

8

Confidential & Proprietary

---

## Slide 9

API Details - GraphQL

9

Confidential & Proprietary

---

## Slide 10

Document Management Solutions

Using GCP’s application integration service, 32Health can connect to Customer/Client enterprise applications

32Healths Internal Document Store for AI

10

Confidential & Proprietary

Client Preferred Document Management Services

---

## Slide 11

Integration & Data Interoperability

Preferred approach for integration is to publish REST APIs with openapi spec on the 32Health Dev portal and follow industry standards (actual/de facto) - JSON, EDI wherever applicable
File based approaches are preferred via SFTP and uploads/downloads through web portal
External APIs currently are REST, GRAPHQL
JSON, EDI, CSV/PSV are natively supported
New file format can be supported via data adaptors
Strong consideration for customer recommended formats

11

Confidential & Proprietary

---

## Slide 12

Database Infrastructure

12

Proprietary & Confidential

---

## Slide 13

Database Organization:

13

Confidential & Proprietary

---

## Slide 14

Database Synchronization

14

Databases are within the same VPC leading to lower latency in synchronization.

The Cloud SQL (postgres) instances each have automated read replicas 

32Health also plans for continuous replication between Cloud SQL and Spanner using Striim

Between the operational db and BigQuery/Cloud Storage 32Health uses Cloud Datastream 
low-latency, serverless, low latency Change Data Capture service

Confidential & Proprietary

---

## Slide 15

PHI De-Id & Syncing Service

15

Confidential & Proprietary

---

## Slide 16

Information Lifecycle Management

16

The cloud storage resources (buckets) have defined retention and archival (nearline, cold) policies as mandated by HIPAA and customer requirements

32Health implements soft-delete within the dbs using well defined APIs
We only update the is_deprecated flag in every record and mark them as deleted
The same flag is reverted to restore the records
This is part of the BaseModel which is used by all the models in our APIs

Used by all Models and APIs on 32Health Platform

Confidential & Proprietary

---

## Slide 17

Minimizing Data Loss

17

32Health would use read-write replication to minimize data loss and improve API throughput

32Health Databases are truly isolated for every microservice 
Scaling issues would only be isolated to hot spots in 32Health’s application 

For hotspots, 32Health will use Cloud Spanner to achieve horizontal scaling, preserve ACID compliance of data records and ensure transactional consistencies
Cloud Spanner has a SLA of 99.999% availability

The PostgreSQL databases are replicated with High Availability plus a GCP SLA of 99.95%
BigQuery which is a managed service has clustering and partitioning built-in and has an uptime SLA of 99.99%

Confidential & Proprietary

---

## Slide 18

Database Replication:

18

32Health’s platform has support for database clustering, replication to minimize data loss

Confidential & Proprietary

---

## Slide 19

Portals & Peripheral Applications

19

Confidential & Proprietary

Customer/Client Branded

---

## Slide 20

Provider Portal:

20

32Health’s platform supports vendors’ and Customer/Client’ portals with ability to receive and send data

Confidential & Proprietary

---

## Slide 21

21

Hosting, Redundancy & Tech Ops

Backup, Recovery & Replication
System Processing, Scaling & Monitoring

Confidential & Proprietary

---

## Slide 22

Backup, Recovery & Replication

32Health’s supported model is Cloud SaaS
Operational DB RPO < 5min
EDA keeps data messages in queue indefinitely
BigQuery (99.99% availability), Spanner(99.999% availability) DBs are automatically multi-region with backup and recovery built in
For Cloud SQL, planned RTO is 1hr
Data backup to multi-regions and read replicas are easily setup through a simple interface
We are implementing GCP's Backup and DR service to further improve the resiliency
For reads we automatically failover to the read replica. For write failure, we slow down write retries while we recover the db
For the application, the external load balancer automatically handles failover
Note that we don't use managed instance groups (compute vms) for hosting the application
The system supports replication of the db and configuration info both via the UI and via IaaC
Cloud Datastream is used for Change Data Capture logs. Other instance logs can be easily replicated using a combination of Cloud logging and BigQuery.

22

Confidential & Proprietary

---

## Slide 23

System Processing, Scaling & Monitoring

Hybrid processing architecture supports both Event Driven Architecture (EDA) - primary arch and Batch
Our system comprises of microservices and is fully distributed with horizontal scaling based on meeting queue, cpu/memory loads and priority thresholds.
Batch processing is  implemented using one or more of Cloud Workflows (GCP's pipeline tech), Cloud Data fusion (ELT/ETL tech), Cloud dataflow (Apache Beam) tech.
Common to combine sync and async sub-workflows in a pipeline
GCP's Cloud Scheduler to schedule jobs and start/restart and stop jobs at arbitrary times
We leverage Kubernetes underneath and we are able to scale up servers in the 1000s to process millions of records per hour - paper claims, EDI 837D and Eligibility, CSV files for claims and eligibility
We use GCP’s built-in load balancing within region and zone and an external/internal load balancer for multi-region https
We detect duplicates to improve processing
Cache intermediate step results in the pipeline
Fast composite key hashes (e.g. combining provider, member, claim info, dates of service)
For real-time monitoring, we use GCP Operations Suite 
Real-time Dashboards
Alerting to phones, slack, email, pager-duty
All resources on GCP stream logs into Cloud Operations Suite
GCP Chronicle in consideration for a native SIEM implementation

23

Confidential & Proprietary

---

## Slide 24

24

32Health Infrastructure

Confidential & Proprietary

---

## Slide 25

25

32Health Infrastructure

Confidential & Proprietary

---

## Slide 26

26

32Health DB Infrastructure

Confidential & Proprietary

---

## Slide 27

Scalable Infrastructure

Services deployed on scalable infra

27

Confidential & Proprietary

---

## Slide 28

Deployment Strategy

28

Proprietary & Confidential

---

## Slide 29

29

32Health Deployment Environments

Confidential & Proprietary

---

## Slide 30

Proposed Connectivity with Customer/Client Network

30

Confidential & Proprietary

---

## Slide 31

Proposed Connectivity - Core

31

Confidential & Proprietary

---

## Slide 32

Proposed Connectivity

32

Authorized read-only views of BigQuery tables
Needs additional security review with the client
Python client library for backend API and React SDK for frontend components
CDC from 32Health’s DBs to external client database
Example: sync between BigQuery and Snowflake using Cloud Data Fusion or Striim

Confidential & Proprietary

---

## Slide 33

Proposed Connectivity - formats, standards

Supported formats: JSON, CSV/PSV, EDI
External APIs are REST, GraphQL
GraphQL gives generalized graph access and data retrieval across logical model with better degree of permissioning and control
gRPC - currently internal only for performance hotspots; ability to provide external access
API Secured via OAuth2
Auth code and password grant type options available
API keys is also an option
Developer portal access
Access to PROD and UAT

33

Confidential & Proprietary

---

## Slide 34

Proposed Connectivity - Ownership

34

Confidential & Proprietary

---

## Slide 35

Release Schedule of System Updates

35

Feature Updates

Critical patches are deployed right away with communication with key stakeholders
Example of a fix that needs a Critical update: Unresponsive frontend
Urgent updates are also off-cycle, scheduled within a few days
Example of an urgent update: Performance fix for API that has seen a few SLA misses

Critical/Urgent updates

Confidential & Proprietary

---

## Slide 36

System Updates - Release Process

36

Customer (Customer/Client) has access to UAT and PROD environments
Similarly, Developer API portals provides access to these environments
Changes are first deployed to UAT
After user sign-off, changes are deployed to PROD
We use Feature flags as well => Some changes can be tested in PROD
APIs are versioned and backward compatible for last 6 months
Updates are scheduled on agreed upon off-hours such as Sundays

Confidential & Proprietary

---

## Slide 37

System Updates - Release Communication, Ongoing Training, and Change Management

37

Customer/Client will have a dedicated Customer Success Manager
Customer Success Manager will
communicate the product roadmap and prioritize features for Customer/Client
lead, communicate and coordinate for upcoming release/updates
provide onboarding for major releases
communicate release notes
Communication channels: Email, Teams/Slack and FreshDesk, pre-scheduled meetings (e.g. weekly in beginning, monthly/quarterly/TBD as needed)
Partner with Customer/Client IT and Training departments on user onboarding and training
FreshDesk is refreshed with
Updated training videos and how-to text guides
Updated knowledge base
API documentation (openapi spec) is automatically updated on the Developer portal

Confidential & Proprietary

---

## Slide 38

SDLC & Testing Strategies

38

Proprietary & Confidential

---

## Slide 39

39

32Health - Tenant Lifecycle

Confidential & Proprietary

---

## Slide 40

40

32Health - Testing strategies

Unit Testing - Testing individual units and components (PyTest, Mocha)
Integration Testing - Testing interactions between components (Selenium)
End-to-End Testing - Testing of specific user actions and workflows (Selenium)
Performance Testing 
Load Testing - Testing system performance under expected load conditions
Stress Testing - Testing system behavior over a burst of traffic 
Security Testing - 
Pentest for application and infra once a year per policy
Web application scanner tests web application daily
Security and Command Center runs tests daily scanning for infra vulnerabilities
Vulnerability scanners from Artifact registry run for new image versions
Failover and Recovery Testing - Simulate failures and recovery processes, ensure system can recover from potential failures without extended downtime.

Test Driven Development

Confidential & Proprietary

---

## Slide 41

41

32Health - Load Testing

Test Objectives - Test concurrency, response times, identify bottlenecks, optimize hotspots and managing graceful degradation of service on reaching the breaking point
Example Test Scenario
100,000 claims received per day, backed up for 10 days, leaving a burst load of 1M claims to be processed by the system. 
Test Environment - Staging Environment
Automated Tests - Completely automated tests (Locust/grasshopper)
Test Suite/Data - Covers high risk areas and hotspots with realistic synthetic data
Custom Test Suite - Covers specific customer actions and workflows
Schedule - Performed after every major update affecting performance sensitive areas
Metrics - Response time, Throughput, Request rate, Error rate, Concurrency, Active connections, connection time, Transactions per second, Cpu/Memory/Disk utilization, Cost optimization with auto scaling
Visualize Test Results - Use Looker to visualize test results

Confidential & Proprietary

---

## Slide 42

42

32Health - Regression Testing

Test Objectives - Test existing features, ensure correctness and stable behavior of app
Example Test Scenario - Ensure that a tweak to the claims adjudication produces the same expected test results compared to the historic results
Test Environment - Dev, Staging and UAT environments
Automated Tests - Speedy and consistent tests after every change (Selenium)
Test Suite/Data - Covers major features to minor functionalities with sample historic data and continuously updated with new test scenarios
Custom Test suites - Covers specific customer actions, workflows and test scenarios
Schedule - Performed before every update
Metrics - Test duration, Test execution coverage, Requirements coverage, Defect severity
Visualize Test Results - Use Looker to visualize test results
Risk-based Testing - Prioritize tests for high-risk areas for critical patches and hotfixes

Confidential & Proprietary

---

## Slide 43

Custom Test Suite - Select and build your own test cases and scenarios (Part of implementation)
Example Scenarios
New product release - what if scenario is leveraged with a new plan configuration to determine the claim payout, claim loss ratio and profitability
Claims adjudication - Simulate a change is made in the adjudication logic, we would run the new algorithm against a sample set of curated test data (past 100k claims) and compare the new results with existing results
Eligibility - Simulate routing rules associated with member eligibility load, such as add, delete and retro operations to reduce eligibility errors for adjudication
Broker commissions - Simulating a change in the broker-compensation, commission rates, bonus for broker payout
Visualize the Test Results - Looker will be leveraged for visualizing testing results

43

32Health - What-if Testing (Simulation/Forecasting)

Confidential & Proprietary

---

## Slide 44

44

32Health - Failover and Recovery Testing

Test Objective - Test resiliency of automated healing of gcp components, kubernetes clusters, databases, messaging, etc and provisioning of cloud resources when a particular component fails 
Example Test Scenario 
Simulate the failure of kubernetes cluster in the primary region
Measure metrics when switching over to the failover region 
Measure metrics to spin up the clusters and horizontally scale them to bring them on par with the primary region 
Measure metrics to heal primary region, bring it back online and scale down the failover region
Test Environment - Staging environment is primarily used for this
Automated / Manual Tests - Combines both automated and manual tests scenarios
Schedule - Performed as per policy
Metrics - Time taken to recover, Data integrity during point in time recovery, Average error rates, degree of manual intervention required
RTO - 1 hr
RPO - 5 min
Hot Recovery
Reads->Switch to read replica automatically
Writes->Keep messages in queue till DB is recovered

Confidential & Proprietary

---

## Slide 45

Automated Updates - 
Base images updated by Google
No manual intervention for security patches
Versioning and Rollbacks - 
Easily switch to previous secure images if needed. 
Support for semantic versioning
Consistency and Reliability - 
Standardized base images across multiple environments
Ensures consistent performance and security
Faster Deployment Cycles - 
Eliminate time spent on base image vetting. 
Focus on feature development and customizations.
Reduced Risk Exposure - 
Automatic scans during build and deploy stages. 
Immediate feedback loop for developers
Regulatory Compliance - Meet industry security standards with ease and Facilitate audits with comprehensive logs
Cost Efficiency - Easily plug into existing CI/CD pipelines and reduced overhead on security maintenance

45

32Health - Google Assured OSS in CI/CD

Confidential & Proprietary

---

## Slide 46

SDLC - Tooling

46

Confidential & Proprietary

---

## Slide 47

SDLC - Example

47

Confidential & Proprietary

---

## Slide 48

SDLC - AI Example

48

Confidential & Proprietary

---

## Slide 49

49

Change Management - Enhancements/Features

Confidential & Proprietary

---

## Slide 50

50

Change Management - Self-Service Configuration

Confidential & Proprietary

---

## Slide 51

Security & Compliance

51

Proprietary & Confidential

---

## Slide 52

Security & Compliance

Security Overview
Security: Multi-Tenancy
Security: Access Control
System Security
Secure Development
Application Security
Security Incident Management Process
SSO Security & Integration: Demo
API Security: Demo
Encryption at Rest and in Transit
Audit, General Logging & Track Users
Third Party Vendor Risk Management
Compliance

52

Confidential & Proprietary

---

## Slide 53

Security Overview

53

Confidential & Proprietary

---

## Slide 54

Security: Tenancy

54

Each client's data is logically and physically separated from other clients
A set of database per client

Access to the database is via separate IAM service accounts which enforce separation of data

Only the Application instance and related services -deployed for client - is authenticated to communicate with db

Confidential & Proprietary

---

## Slide 55

Security: Access Control

55

For external access to the app, we use Auth0 to implement support for multiple roles and groups

For internal access, we leverage GCP identity groups and roles created using Cloud Identity/GCP Workspace group & Cloud IAM using the principle of least privileged access and zero trust as much as possible.
Example: prod-users group only has (limited) read access to Prod and the general dev-users has no access to Prod
Example: Machine to Machine auth and general auth within pipeline is via strictly via service accounts

Admin access is via a dedicated admin identity group defined at the 32Health org level (GCP best practice) with access to limited authorized personnel. Membership into this group or its privileges cannot be tampered with by project level admins. This is not set via IaaC and is set directly on the console.

Confidential & Proprietary

---

## Slide 56

Secure Development

56

32Health has a well defined Secure Development Policy
MFA mandatory for GCP, Github
Predominant use of GCP Cloud Workstations for development
Strict access control for repos - controlled environment for developers
Faster and secure development - no downloading of credentials ever
Use of shielded VMs - hardened images
Via GCP policy, several strict security measures enforced -Examples  no public ip access for dbs, no public buckets, no credentials keys generated, no RDP, SSH, no public IP machines
Github secret scanning, code scanning, dependabot scanning, protected branches
A combined Github flow and Gitlab flow branching strategy eliminates inadvertent push to higher environments
Maximum use of GCP Assured Open Source Software to ‘shift-left’ security
GCP connectivity to Github via Workload Identity Federation - no use of credential keys
GCP automated Artifact analysis for OSS vulnerabilities
Binary authorization prior to deployment

Confidential & Proprietary

Confidential & Proprietary

---

## Slide 57

Application Security

57

Pervasive use of Secret Manager that eliminates storing credentials in code
Use of SQL Cloud connectors that leverage auth via service accounts and eliminate knowing ip addresses of databases
Only Identity Aware Proxy based access for internal users of applications in lower environments => prevents any accidental access to our applications.
SSO external users implemented via auth0
Continual vulnerability assessment from GCP Web Security Scanner
Pen test (planned once a year) for both application and infrastructure
Continuous scanning of infrastructure underlying application.
Application services only auth via service accounts - zero-trust leveraged as much as possible.
Use of Cloud Armor - DDOS and web attack defense on edge
Protect against SQLI, XSS etc
Allow/Block traffic based on IP, GEO
API security (discussed later)

Confidential & Proprietary

---

## Slide 58

Security Incident Management Process

58

Our incident response plan covers security incidents and functions and entities such as:
Roles & Responsibilities, Response team
Reporting
Incident severity
Escalation, War room creation
Documentation
Incident triage, Mitigation and Remediation
External Comms and Breach reporting
RCA
32Health uses centralized Cloud Logging from GCP's Operations Suite for alerting of security events => alerts on email, phone, slack

32Health has planned for implementation of GCP Chronicle's SIEM solution

Confidential & Proprietary

---

## Slide 59

SSO Security & Integration

59

32Health uses auth0 for implementing SSO and handling federation, external IDM and delegated admin functions

Confidential & Proprietary

---

## Slide 60

API Security

60

Confidential & Proprietary

---

## Slide 61

Encryption at Rest and in Transit

61

Data encrypted at rest by default. 
Several layers of encryption across Application, Platform, Infra and Hardware are used to protect user data. 
We have the ability to rotate keys using GCP Cloud Key Management Service (KMS). We can also support CMEK using Cloud KMS

Data is encrypted in transit using TLS while communicating with clients up to GFE (Google Front End)
Within 32Health's environment within GCP, ALTS (Application Layer Transport Security) is used.
Data is stored within our systems in a HIPAA compliant way using  data security & privacy controls including retention policy and redaction
We are in the audit phase of SOC2 Type II certification

Confidential & Proprietary

---

## Slide 62

Audit, General Logging & Track Users

62

32Health uses Cloud logging from GCP's Operations Suite for our centralized logging solution
Cloud logging from GCP's Operations Suite logs events across all components and services of our platforms 
Cloud logging has client libraries in Python and Node that make it easy create comprehensive structured logs when events are detected.
32Health uses native GCP Audit Logging supplemented by custom logging which audits admin activity, data access activity and system events from all resources used within 32Health including databases, applications, compute instances, buckets, IAM, APIs
32Health uses application logging, auth0 logging, database logging to track changes to groups, members, claims
Using auth0, we can track when users logged on and how long they were logged on
Using GCP audit logging we can track internal users
The database tables themselves log the changes to records
We use datastream for Change Data Capture to track CRUD operations from operational db (PostgreSQL) to BigQuery

Confidential & Proprietary

---

## Slide 63

Third Party Vendor Risk Management

63

TPRM under scope of our Third-Party Management Policy and Risk Management PolicyA few highlights
Vendors must complete risk assessment e.g. SIG, sign BAA if applicable
32Health performs threat assessment for 3P
32Health regularly monitors, reviews, and audits supplier service delivery
Third-parties maintain a technical access control program
Third parties must maintain regulatory or certification requirements

Confidential & Proprietary

---

## Slide 64

Compliance

64

32Health systems are HIPPA complaint and can perform HIPAA compliant transactions
32Health supports EDI transactions

PCI compliant transactions are not supported but can be supported if required by Ameritas

32Health’s platform has workforce management capabilities, including tracking of users, workflows, and related metrics 

32Health platform has the ability to validate various information types upon input and flag users of missing/invalid data

Confidential & Proprietary

---

## Slide 65

65

Compliance - Access control for users

Confidential & Proprietary

---

## Slide 66

Enterprise Tools

66

Proprietary & Confidential

---

## Slide 67

Languages & Frameworks

Modern and secure development

67

Confidential & Proprietary

---

## Slide 68

Enterprise Tools & Components

Confidential & Proprietary