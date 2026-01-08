---
granola_id: 6ab1ed5a-5e94-4718-a031-ba33625958f4
title: "Virtue <> ZoomLogi"
type: note
created: 2025-11-13T20:06:27.290Z
updated: 2025-11-13T20:58:51.679Z
attendees:
  - saad@zoomlogi.com
  - olivier@zoomlogi.com
  - sd@virtuevc.com
---
### ZoomLogi Product Overview & Data Models

- Current product built on two core models after 6 months development
	- ETA model: Corrects courier bias (FedEx says 6pm delivery, actually arrives 1pm)
		- Trained on hundreds of thousands FedEx/UPS shipments
		- Shows improved on-time delivery accuracy vs. courier predictions
	- Weather model: Predicts shipment delays from weather events
		- Ingests real-time weather data, creates routing predictions
		- Intersects weather patterns with likely shipment routes
		- Enables proactive rerouting decisions and customer communication
- Data cleanup and structuring required across all sources
	- FedEx/UPS use 50+ different codes for same delivery issues
	- IoT sensors trigger false alerts without data cleaning
	- Live feed cleanup essential for accurate predictions

### Current Go-to-Market Success & Customer Adoption

- Strong market response to control tower + AI automation combination
	- Cardinal Health: Rolling out inbound call automation (30-40 daily FedEx calls)
	- Beacon Bio, Katalen in product sandbox phase
	- Minares pilot starting at Philadelphia affiliate site
- Key selling points customers respond to:
	- Unified data aggregation replacing spreadsheets
	- White-label partner visibility with tracking links
	- AI-powered call and email automation (50-60% reduction)
- Network effect beginning: First external customer emails sent via Cardinal with ZoomLogi branding

### Product Roadmap & Automation Vision

- Two major customer-requested features for 2026:
	- Inventory management integration
	- Dynamic routing capabilities
- Autonomous support vision: Every exception handled automatically
	- Example: Address correction workflow using dual AI calls
		- Call recipient for correct address
		- Call FedEx to update delivery information
	- Goal: Cardinal ops team reduced to 1 person handling only complex cases
- Zapier-style workflow automation in development
	- Building configurable “when this, then that” logic
	- Leveraging existing data ingestion and alert infrastructure

### Competitive Positioning & Defensibility Discussion

- Current product “good enough” for market entry and customer acquisition
- Defensibility comes from:
	- Customer workflow automation creating switching costs
	- Unified dashboard aggregating all shipment data
	- Social proof from enterprise logos (Cardinal, etc.)
- Series A preparation considerations:
	- Need stronger technical differentiation for top-tier VCs
	- Question of whether rules-based vs. AI-native approach sufficient long-term
	- Error rate improvements and predictive accuracy metrics important

### Next Steps

- Emre: Keep Ilya (Minares CTO) connection as backup if pilot faces roadblocks
- Team travel: New Jersey Supply Chain Nexus conference, Boston customer meetings
- Q1 2026: Case studies and logo showcase for website planned

Chat with meeting transcript: https://notes.granola.ai/d/6ab1ed5a-5e94-4718-a031-ba33625958f4
