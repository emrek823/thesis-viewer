---
source_pdf: "https://drive.google.com/file/d/15niFwh3E462SnSVU0Z2nevd13mV7N9CF/view?usp=drivesdk"
drive_folder: "Virtue / ZoomLogi (shared drive)"
type: portfolio
company: ZoomLogi
ingested: 2026-01-06
original_filename: "Maverick Q&A - 12_1_2024_shared with Virtue.pdf"
---

> **Original:** [View in Google Drive](https://drive.google.com/file/d/15niFwh3E462SnSVU0Z2nevd13mV7N9CF/view?usp=drivesdk)

# Maverick Q&A
12/1/24

With the Pfizer call, it seems positive that 100% of their product is cold chain and it seems like a corporate goal to move towards more real-time automation. With Pfizer, it seems like they've built a system in-house for transportation monitoring. Is that something you've seen from some of the larger players? To the extent you've seen it, where do you think their internal systems lack? Also, with hardware providers like Controlant – would ZoomLogi live alongside them or rip them out?

We've observed that larger players in the Pharma space typically rely on either in-house or third-party software solutions to manage their logistics needs. For instance, BMS uses an in-house system called “GPS,” while Bayer relies on SAP. However, these systems—whether internal or external—often share common challenges: they tend to be outdated, difficult to maintain, and feature non-intuitive user interfaces. Moreover, they are often highly entrenched, as they've been in use for years and are deeply integrated with other internal systems (e.g., ERPs) and processes.

ZoomLogi's solution is designed to "co-exist" with these systems, not replace them. It works by pulling relevant shipment information from them (e.g. shipment characteristics, LSP selection and updates, etc...), and enhancing it with additional data streams (e.g. IoT / LSP APIs, ELDs, telematics, weather, traffic, check calls, driver app, etc...). This enables ZoomLogi's Tech to identify risk patterns and prevent supply chain failures before they happen.

ZoomLogi is hardware-agnostic and neutral, allowing customers to choose sensors that best fit their specific needs, whether it's from established players like Sensitech or Controlant or emerging providers with better cost or capabilities.

There has been an explosion in the number of IoT devices to track cold chain shipments (e.g. CargoLux approved list of sensors), and their cost have decreased over time. As such, user pain points today at large Pharma, are around being able to track numerous sensors used by various sites (and make sense of data) vs. sticking with a single provider. ZoomLogi's horizontal play could also help procurement teams assess the reliability of various IoT providers (by, for example, sharing aggregated IoT reliability data from other customers), which would help speed up internal sensor qualification / procurement processes.

With the Project44 call – curious if you all have reactions to it. Project44 seems like a good business and seems like a strong opportunity to build something more pharma-specific. On slide 14 of the deck, you all talk about their shortcomings – mind expanding on where they fall short on the pharma vertical? And what do you make of the comments that it is expensive to build a network – how do you think about the cost of covering enough of the supply chain to provide adequate visibility?

Couple of thoughts on P44, and the generalist vs. specialist question

1.  **P44 is a great business (worth $2B+), but isn't strong in the Pharma space.** Olivier knows them well from his time at Uber Freight (Uber Freight is using them to track some shipments, and many Uber Freight alums have rotated at P44 over the years). As the call mentions, their core focus is on being a global player, and having a breadth of transportation modes, to satisfy "most" customers' needs. However, they aren't strong in the Pharma space which focuses on parcel-size urgent transportation (i.e. sprinter van/sedan, and air shipments), and rely on sensors inserted in the shipment (vs. trucking telematics). Also P44, focuses pretty much exclusively on location tracking, while Pharma has requirements for temperature / shock / light / humidity tracking as well. The vast majority of SMB/MM Pharma and BioTech companies we talked to weren't users of P44 or Fourkites (most using pen & paper, Excel to track updates they were getting through IoT/LSP web portals or check calls ).
    *(Note: A former SVP Product at P44 is an angel investor and advisor to ZoomLogi)*

2.  **P44 has done a couple of acquisitions to expand into new visibility areas, and ZoomLogi could be an M&A target down the road.**
    P44 has done 4 known acquisitions to date
    a.  **Ocean Insights & Clear Metal (March 2021):** Visibility into ocean freight, enabling better tracking of cargo at sea.
    b.  **Convey (September 2021):** Visibility for customer last-mile delivery and customer experience management.
    c.  **Synfioo (April 2022):** Visibility for European rail freight and inland waterway segments.
    All these were clear add-on capability plays (all asset-light visibility aggregators & algo), a ZoomLogi acquisition would follow that pattern.
    Of note, another Uber Freight alumn is building a logistics software visibility play focused on US rail called telegraph. The company is VC-backed and doing well, highlighting that there are still whitespaces to build attractive specialist visibility plays in logistics.

3.  **Generalist vs. Specialist.** It is expensive to build a network when you're building for every industry and every potential customer (i.e., “Generalist" category). You have to integrate with different modes of transportation (road / air / rail / ocean) globally that have thousands of providers. Building a “Specialist” Pharma visibility play here, reduces the universe of modes (mostly ground / air) and LSP/IoT providers to work with. ZoomLogi's Tech will also focus on Pharma's specific chain of custody, and regulatory needs.

### Additional thoughts
Novel data vs. Stitching together data that already exists questions

While many customers have access to a couple of data streams (e.g. own IoT sensor, LSP status updates), ZoomLogi would tie together all these sources to help determine risk patterns (mosaic), enabling proactive action and recommendation for LSP / Locations.
1.  At first, our focus will be on generating value for customers by digitizing manual ops processes (i.e. “Live Feed updates”). This involves dynamically updating the chain of custody and shipment status - replacing the mostly pen & paper / excel / check call processes that most MM/SMB Pharma still have today. To achieve this, we will primarily integrate with existing data sources, including IoT sensors, LSP systems, airlines, etc... (i.e. stitching together existing data to deliver immediate operational efficiency and visibility).
2.  Just consolidating and contextualizing disparate data streams can provide significant value, even for Big Pharma-type customers. For example, while a customer might have access to real-time temperature and location monitoring for one of their shipments, they might not be able to detect that the shipment is likely to miss its flight due to traffic/weather events, and that a new airline should be booked ASAP. A Mosaic view of stitched data can help identify risk, and mitigate pro-actively.

Then, to address data gaps, especially with “no-tech” mid-size pharma LSPs/couriers, we will use novel methods to unlock missing information, such as (1) AI check calls to get more frequent status updates, or (2) a “ZoomLogi driver app” that our customers can push onto their own LSPs (as a requirement to keep doing business with them for example) – unlocking real-time location, and direct communication with the driver.

### Data requirement for MVP, what is needed to generate value for the customer
#### 1st MVP product would be the Control Tower UI, with the following capabilities
1.  User can manually create “shipments” in the platform, or have us create shipments on their behalf (manually at first), through one-off manual emails, or through automated-emails that would pull data from their system (we would help set up) - common workflows observed at Uber Freight for no-integration “managed" customers..
2.  User can see on a map some of his shipments, with location updating at least once every 15 mins (SLA).
3.  User can click on a shipment and see a card with the following information
    a.  General information for that shipment (ID #, Origin, Destination, Weight, Dimensions, Courier name, temperature range) at the top
    b.  Feed (i.e. chain of custody) at bottom, providing status updates and chain of custody information. Initially, data here would be manually updated and pulled through one of the following methods
        i.    Manual updates looking at the LSP's/IoT's website, or through check calls
        ii.   Web scraping,
        iii.  Being CC'd on email updates from their LSPs
        iv.   Direct integrations with LSPs/IoTs
4.  Recommendation (optional, not critical for MVP): Someone on ZoomLogi's end would continuously monitor the dashboard and send an “alert” email to the customer if we detect an abnormal pattern based on best practice / experience (e.g. temperature breaching range, stuck in traffic, ...). If approved by the customer, the Ops person on our end, could be empowered to make calls to LSP and manually update data gaps (if needed), status updates, and temperature readings.

MVP would effectively replace some of the manual Ops work currently being done by the customer (check calls to track status, manually build a "feed" in Gsheet, etc...), and as such be immediately valuable without requiring all of a customer's shipments to flow through the platform. No external database integration is required for MVP (even though we will have common traffic, weather, airlines info rapidly pipped in our system and overlaid on customer data). No need to have all LSPs, or IoTs integrated.