---
granola_id: 74ae587d-19ae-47aa-84b0-d9369025d322
title: "Virtue (Sean & Emre) and Maxwell Stigman"
type: note
created: 2025-06-24T19:42:13.210Z
updated: 2025-07-10T23:18:00.294Z
attendees:
  - max@kayn.ai
  - sd@virtuevc.com
---
### Company Background

- Kayn - operational and RCM automation platform built from ground-up to integrate with LLMs
- Founders started at Genesys (joined as intern at Georgia Tech - employee #1)
- Built flagship products at Genesys including Teleport; grew automation team to 16 engineers
- Company reached Series B at $250M valuation
- Left Genesys due to technical leadership challenges and ChatGPT emergence

### Product Overview

- Unified data platform agnostic to any RCM product/vendor
- Direct competitor to UiPath in healthcare automation
- Three main product categories:
	- Revenue Recovery
		- Example: Prompt pay interest collection (3,000+ claims between $1-50, totaling $200k)
		- Can execute in under one month
	- Revenue Protection
		- Ingest encounters and check patient eligibility
		- Verify CPT codes and prior auth determination
		- Flag problematic cases for staff review
	- Chrome Extension (Karma)
		- Sidebar in browser + homepage takeover
		- Enables users to run automations directly
		- Supports automatic portal login with encrypted credentials
		- Integrates with unified data layer

### Technical Architecture

Bot Development Kit components:

- Edge: Connects 2 pages (e.g., fill username, click login)
- Node: Represents page on internet with data to grab/submit
- Workflows: Path from homepage to specific functions (e.g., claim status)
- More sophisticated than traditional RPA:
	- Uses deterministic automations
	- Employs small, specific-task focused models
	- Vision: “Graph the internet” approach to solve RPA challenges

### Go-to-Market Strategy

Target customers:

- Large hospital systems ($1B+)
- Channel partners with RCM companies

Implementation approach:

- Deploy Karma to all staff with local credential storage
- Request encounter and claim data
- Enrich Karma with payer portal information
- Customize dashboards and functionality per user needs

### Business Metrics & Goals

Current status:

- Raised pre-seed in January 2023
- Discussing $1M SAFE note
- PE/advisor group partnership yielding 20 pipeline opportunities ($1B+ organizations)

Targets:

- $2-5M ARR by end of 2027
- Achieve cash flow positive with 20-25 employees
- Mix of large contracts ($7 figures) and smaller deals ($100-500k)

### Technical Leadership Position

- Product-oriented technologist approach in healthcare
- Focus on deterministic automation with LLM integration
- Built customizable solution addressing cross-office workflow challenges
- Emphasis on network building and commercial knowledge acquisition

Chat with meeting transcript: https://notes.granola.ai/d/74ae587d-19ae-47aa-84b0-d9369025d322
