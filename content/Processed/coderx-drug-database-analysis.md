# CodeRx Drug Database Analysis

**Source:** [YouTube Video](https://www.youtube.com/watch?v=05s179PgAI8) - "CodeRx Drug Database" by The Tuva Project (4.5 min)
**Date:** 2025-01-12
**Company:** [CodeRx](https://coderx.io/)

---

## What CodeRx Is

Open-source drug database built by pharmacist-developers. Transforms messy government drug data (RxNorm, FDA, DailyMed, NADAC) into clean, queryable data marts.

- Much cheaper than enterprise alternatives (FDB, Medi-Span ~$100K/year)
- Weekly updates to keep NDC mappings current
- Data delivered via AWS S3/GCS/BigQuery
- All code and methodology open source

## Key Data Marts

| Table | What It Does |
|-------|--------------|
| **Packages** | NDC11 → standardized drug ID, drug name, brand/generic flag |
| **Drugs** | Ingredient + dosage form lookups |
| **Classes** | ATC therapeutic classification (e.g., "HMG-CoA reductase inhibitors") |
| **Inactive Ingredients** | Maps excipients to products |

---

## How This Extends Tuva

### Tuva's Native Pharmacy Mart (Limited)

- `brand_generic_opportunity` - brand → generic switch savings
- `pharmacy_claim_expanded` - enriched claims
- `generic_available_list` - NDCs of available generics

**One use case only:** brand-to-generic cost savings

### What CodeRx Adds

| Capability | Tuva Native | With CodeRx |
|------------|-------------|-------------|
| NDC → standardized drug name | Limited | Full mapping |
| Therapeutic class (ATC) | No | Yes |
| Inactive ingredients | No | Yes |
| Multi-source NDC compilation | No | 5 sources merged |
| Drug → ingredient mapping | No | Yes |
| Weekly update cadence | No | Yes |

### Verdict: Significant Extension (~70% of pharmacy analytics value)

Tuva built the claims pipeline. CodeRx built the drug reference layer. They're complementary pieces of a full pharmacy analytics stack.

---

## Use Cases by Stakeholder

### Providers (Hospitals, Health Systems)

- **Formulary management** - track prescribed vs. formulary drugs
- **Drug allergy checking** - inactive ingredient mapping for allergies
- **340B compliance** - identify qualifying drugs by therapeutic class
- **Medication reconciliation** - standardize messy med lists
- **Cost optimization** - brand vs. generic substitution opportunities

### Payers (Health Plans, PBMs)

- **Drug utilization review** - aggregate by therapeutic class
- **Prior auth automation** - rules based on drug class, not individual NDCs
- **Generic substitution programs** - find patients on brands with generic equivalents
- **Risk adjustment** - identify HCC-relevant medications
- **Rebate optimization** - track utilization by manufacturer

### Life Sciences (Pharma, Biotech)

- **Market landscape analysis** - all drugs in a therapeutic class
- **Real-world evidence (RWE)** - link claims to standardized drug IDs
- **Clinical trial feasibility** - find populations on specific regimens
- **Pricing studies** - NADAC pricing trends
- **Pharmacovigilance** - track adverse events via FDA recall mapping

---

## Video Demo Summary

Three use cases demonstrated with Tuva's synthetic pharmacy claims:

1. **NDC → Drug Name Mapping**
   - Join to Packages table by NDC11
   - Get standardized drug ID, name, brand/generic flag

2. **Patient Population Queries**
   - Find patients on specific drug (e.g., Simvastatin 10mg)
   - Or any strength of a drug by searching ingredient + dosage form

3. **Therapeutic Class Grouping**
   - Look up drug's ATC class (e.g., "HMG-CoA reductase inhibitors")
   - Find all 84 drugs sharing that class
   - Query claims for any matching drug IDs

---

## Transcript

> Hi, I'm Joey from Coderex, and today I'm going to walk you through a high-level overview of the Coderex Drug Database. The Coderex Drug Database is a comprehensive drug ontology based on open-source industry standards, now available with real-time updates and advanced drug data marts that integrate with your pharmacy claims and medication data. We solve the unfair choice between hard-to-use raw open drug data and expensive proprietary drug databases. We transform complex government data sources like RxNorm, FDA, DailyMed, and NADAC into easy-to-use data marts purpose-built for pharmacy applications.
>
> First, we are much more affordable than enterprise alternatives. You can do some vendor research into enterprise drug databases, and I suspect you'll find that they cost in the ballpark of $100,000 per year, and that price will likely go up as you grow and expand. Depending on what you need from a drug database, you might be vastly overpaying. We offer an easy-to-use drug ontology and data marts built by pharmacists ready for analytics at a fraction of that price.
>
> Second, we are much faster and easier than starting from the raw data sources. If you've ever worked with raw open drug data for any period of time, you probably know about the variety of different data formats, inconsistent release schedules, and lack of standardization between and within government organizations. Over the past five years, we've done the dirty work of cleaning up this raw data. You could pay an FTE to take the same road we've already been down, or you could start with a database built by pharmacists designed for analytics and get started working with the finished product today.
>
> And lastly, the Codirex Drug Database is built by drug data experts. At Codirex, we are pharmacists who know drug data to the point of it being an obsession. We see the value in open drug data and want to reduce the barrier of entry and give people a third option, somewhere between unaffordable and unsustainable. Instead of paying tens of thousands per year for proprietary systems, or spending months learning how to work with the raw data, get started today with straightforward, queryable tables ready for pharmacy analytics.
>
> Now I'd like to quickly demo three basic use cases for the Codirex Drug Database with the Pharmacy Claims example. For this example, we are going to use the Synthetic Pharmacy Claims dataset that ships with the Tuva Project Starter Demo.
>
> First, I'd like to walk through mapping NDCs to standardized drug names. With the Codirex Drug Database, this is as easy as joining to the Packages table by NDC11. By doing this, we get a standardized drug identifier, drug name, and an indication of whether the NDC is considered a brand product or not. You can see from the results that the NDC description from the Tuva demo is patchy and inconsistently formatted, whereas the drug ID and drug name we pulled from our drug database has no nulls and follows a normalized naming convention. NDCs change frequently throughout the year, so keeping up to date with a weekly subscription is critical for analytics.
>
> Next, for population health, identifying patients on certain drugs is a basic need. Since NDCs are mapped to standardized drug IDs, like the drug ID for Symphostatin 10mg oral tablets from the previous query, we can easily do a search by that ID. As you can see, we have 264 patients on that drug. Pretty easy, right? But what if we wanted to know which patients are on any strength of Symphostatin? One way would be to search the Codirex Drug Database for any Symphostatin oral tablet. As you can see, there are 5 drugs matching our search. However, there is no need to list each Symphostatin drug when you could simply join to the drugs table and search for the ingredient and optionally the dosage form.
>
> And last, the Codirex Drug Database makes it easy to group drugs by therapeutic class. Since we know the drug ID of our Symphostatin drug, we can search the classes table to find its therapeutic class. This table contains ATC classes which are mapped to ArcStorm drugs by the National Library of Medicine and updated on a monthly basis. This drug has an associated class of HMG-CoA reductase inhibitors. Now let's see what other drugs share this class. It looks like there are 84 drugs, some brand, some generic, that have the same class. Finally, let's see who is on this drug class in our synthetic dataset. We can use the same query we wrote above to identify our drug class. And then we can search claims for any drug IDs that match the drug IDs in that class. The reveal would be more impressive if our synthetic dataset was more realistic and had patients on a variety of different HMG-CoA reductase inhibitors, but at least we got back to the two we already knew about.
