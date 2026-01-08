---
source_pdf: "https://drive.google.com/file/d/1QFrH7WNQJqt0Y6yfXVd7AxQjqfLWbC2QNgfb0JzQfy4/view"
drive_folder: "Portfolio/Hermes Health"
type: portfolio
company: Hermes Health
ingested: 2025-12-23
original_filename: "2025-12-21_Memo - Athena + Datavant.gdoc"
---

> **Original:** [View Original PDF](https://drive.google.com/file/d/1QFrH7WNQJqt0Y6yfXVd7AxQjqfLWbC2QNgfb0JzQfy4/view)

Here is my take on the recent partnership between Athenahealth and Datavant.

One thing I’ve noticed is that it’s hard to talk about Datavant because it is now effectively a conglomerate. I find it useful to break Datavant into components:

Legacy Datavant = Tokenization / privacy business

Ciox = Release of Information (ROI) business

Ontellus = End-to-end record retrieval business

Aetion = Analytics for life sciences & RWD

Apixio = Analytics for payors

DigitalOwl = Analytics for law firms / legal reviews

For this discussion, I will focus on the partnership between Athenahealth and Datavant’s Ciox (ROI) business.

Context: Traditional ROI Model

Hospitals and clinics receive hundreds of medical record requests per day. Managing and fulfilling these on time is painful and operationally heavy, so many outsource this to a Release of Information vendor (e.g., Ciox).

The ROI vendor:

Hires staff (increasingly offshore, e.g., Philippines).

Gets credentials into the hospital’s EHR.

For each record request, the worker logs into the patient chart, assembles the relevant record, and pushes it into their own portal to deliver to the requester.

The ROI vendor charges the requester a fee for this service. Traditionally, the ROI vendor keeps essentially 100% of this requester revenue. The hospital is not directly paying the ROI vendor; the “deal” is that the hospital hands them the headache of managing release, and in exchange the vendor keeps the requester fees.

There is obvious moral hazard in this model (the ROI vendor is incentivized to maximize billable pages at the expense of the hospitals patients), but that’s beside the core point.

In short, the facility offloads the operational mess of record release to the ROI vendor and in return gives up the economics of requester fees.

### The Market: ROI is a Thin Wrapper on the EHR

The workflow of an ROI vendor is straightforward and increasingly commoditized. Many of these jobs are now done remotely by teams in the Philippines remoting into the EHRs. The business is extremely competitive and it’s hard to differentiate.

In reality, the ROI vendor is a compliance and labor wrapper on top of the EHR.

EHRs have figured this out and are now starting to offer direct access for requesters. This is especially true for payors, who are signing direct deals with EHR vendors and bypassing ROI vendors entirely. Payors are by far the largest source of requests; they dwarf all other requester types.

As a result, the eternal question to ROI vendors is: “Aren’t you going to be disintermediated by the EHRs?”

The honest answer is yes.

### The Deal: Defensive and Economically Negative in the Long Run

Against that backdrop, Datavant has signed what I view as a structurally bad deal with Athenahealth, largely to mute this “EHR disintermediation” narrative ahead of an IPO.

In this partnership:

Athenahealth will market to its providers that Athena now offers Release of Information, powered by Datavant as its ROI vendor of choice.

If a provider opts in, Datavant becomes the ROI vendor for that Athena practice.

Crucially, Datavant now has to split that requester revenue with Athena, whereas historically Ciox kept essentially 100% of requester fees.

From Datavant’s perspective, this is a defensive distribution trade:

They gain embedded distribution inside Athena’s EHR.

But they permanently lower ROI margins by giving the EHR a cut of economics they previously owned.

On top of that, the deal is non-exclusive. Providers can still choose any other ROI vendor.

The press language makes that explicit:

“Participation in the offering will be voluntary — athenahealth customers will have the option to automate and digitize medical record requests across a broad range of scenarios and request types, including those from patients, public health agencies, life insurance companies, researchers, and other healthcare practices to support continuity of care.”

Payors are not mentioned in that list, even though they are the largest source of requests. That is not an accident. Athena is pursuing direct payor deals in parallel; what is omitted from the press release is more telling than what is included.

Also the fact that Kyle, is Athena’s former Chief Product Officer with deep history and relationships there is a big big reason this deal got done.

So net-net: Datavant is accepting lower ROI unit economics and channel conflict risk in exchange for an EHR-embedded with a small player that reassures investors they won’t be fully disintermediated by the EHRs.

This is 100% a defensive and economically negative deal for the ROI business. You won’t be seeing this deal with any of the big boys.

### Why This Matters: EHRs are Actively Disrupting the ROI market

This deal is more evidence that EHRs are moving to capture the economics of the ROI business:

Athenahealth is now front-ending an ROI service inside its EHR.

Other EHRs (Epic, Cerner/Oracle, NextGen, AdvancedMD, etc.) are all moving toward more direct release mechanisms and with tighter payor connectivity.

We are already seeing similar patterns elsewhere (e.g., Moxe + Greenway Health), where ROI / data vendors are forced to work through the EHR rather than sit on top of it.

As this trend accelerates:

EHRs will increasingly own the requester relationship, especially with payors.

ROI vendors will be squeezed into:

Rev-share with EHRs, or

Niche / legacy workflows that haven’t yet been digitized.

Fragmentation will actually increase, because each EHR will roll out its own flavor of direct release and connectivity, and niche EMRs will follow.

### Why This is Good for Hermes

For Hermes, this environment is good thing.

Fragmentation across EHRs and ROI arrangements increases the need for a neutral middleware layer to coordinate and organize access.

Market unrest and shifts in economic forces creates opportunities to reorganize the market and shape next marketer structure.

Data liquidity becomes a real problem as more channels open up, each with its own rules and interfaces.

Hermes is not an ROI vendor or an EHR. We are building the neutral connectivity rails that sit above the chaos.