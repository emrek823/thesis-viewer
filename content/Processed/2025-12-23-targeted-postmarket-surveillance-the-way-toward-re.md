---
url: https://paragoninstitute.org/private-health/targeted-postmarket-surveillance-the-way-toward-responsible-ai-innovation-in-health-care/
title: "Targeted Postmarket Surveillance: The Way Toward Responsible AI Innovation in Health Care"
clipped: 2025-12-23 13:02
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Targeted Postmarket Surveillance: The Way Toward Responsible AI Innovation in Health Care

> Source: [https://paragoninstitute.org/private-health/targeted-postmarket-surveillance-the-way-toward-responsible-ai-innovation-in-health-care/](https://paragoninstitute.org/private-health/targeted-postmarket-surveillance-the-way-toward-responsible-ai-innovation-in-health-care/)

![Paragon Health Institute Icon White](https://paragoninstitute.org/wp-content/uploads/2023/12/paragon-health-institute-icon-white.png)

## Private Health Reform Initiative

Reforming Government. Empowering Patients.

# Targeted Postmarket Surveillance

### The Way Toward Responsible [AI](https://paragoninstitute.org/glossary/ai/) Innovation in Health Care

Navigation

# Targeted Postmarket Surveillance

### The Way Toward Responsible [AI](https://paragoninstitute.org/glossary/ai/) Innovation in Health Care

![Paragon Health Institute](https://paragoninstitute.org/wp-content/uploads/2023/11/paragon-health-institute-logo-1024x266.webp)

![COVER Targeted Postmarket Surveillance Coleman RELEASE V1 01](https://paragoninstitute.org/wp-content/uploads/2025/09/COVER_Targeted-Postmarket-Surveillance_Coleman_RELEASE_V1-01-791x1024.webp)

[Download](https://paragoninstitute.org/wp-content/uploads/2025/09/Targeted-Postmarket-Surveillance_Coleman_RELEASE_V1.pdf)

### The Paper

This report argues that the [FDA](https://paragoninstitute.org/glossary/fda/)’s traditional premarket review system is insufficient for regulating artificial intelligence ([AI](https://paragoninstitute.org/glossary/ai/)) medical devices because many of these systems display output unpredictability that only emerges after deployment. While misregulation could delay lifesaving innovations or impose unnecessary costs, unchecked unpredictability poses real risks to patients. To address this, the authors propose a targeted, low-cost postmarket surveillance framework focused on AI devices where unpredictability intersects with meaningful risks of patient harm. Their model includes two complementary mechanisms: periodic revalidation using existing test data to ensure stability and ongoing performance monitoring through aggregated health system registries that can flag adverse trends without violating privacy or intellectual property. The paper emphasizes public-private collaboration, incentives for manufacturers and providers, and reliance on existing safety processes to minimize burdens while enhancing patient protection. By concentrating oversight where it matters most and leveraging distributed data networks, the framework aims to balance innovation with safety, avoid regulatory capture, and provide a practical, scalable pathway for responsible AI adoption in health care.

#### Executive Summary

**What This Paper Covers**

Artificial intelligence (AI) unpredictability has prompted calls for extensive AI regulation within health care. AI unpredictability, in this context, refers to the variability of outputs some health AI medical devices produce in response to *identical* inputs (e.g. a mammogram or EKG recording), whether those inputs occur in immediate succession or after prolonged intervals. Although not ubiquitous in AI, unpredictability is not confined to a single programming architecture or training process.

The risk unpredictable AI poses for patient safety is a major concern for both regulators and health care providers. However, unpredictability is a double-edged sword. It can produce genuine patient hazards, but, unfortunately, hazards can also arise from a suboptimal regulatory response. Suboptimal regulatory responses would include:

* delaying or restricting market access for new lifesaving medical devices;
* failing to prevent mass patient injuries because of rules that ignore the root causes of unpredictability;
* increasing compliance costs in instances where AI output variability neither endangers patients nor impairs clinical value;
* failing to identify which AI devices are susceptible to unpredictabilities that do not manifest during premarket reviews by the Food and Drug Administration ([FDA](https://paragoninstitute.org/glossary/fda/)); and
* failing to adequately address AI systems that, after deployment[1](#cmfSimpleFootnoteLink1 "	Deployment refers to the implementation of an AI device at a health system for real-world use with patients.") in the marketplace, continually update themselves based on observed outcomes and other new data to improve their own performance.

The [FDA](https://paragoninstitute.org/glossary/fda/)’s current review system was built for an earlier era—physical devices and software whose outputs are predictable and consistent. Its premarket[2](#cmfSimpleFootnoteLink2 "	Premarket refers to the period before a medical device passes FDA review and may be commercially distributed.") validation, while still necessary, is not sufficient for AI systems whose unpredictability may take time to manifest due to incremental data changes or irregular occurrence. The FDA has contemplated issues related to unpredictability in the form of adaptive algorithms that continuously learn,[3](#cmfSimpleFootnoteLink3 "	FDA, \"Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions,\" December 4, 2024, ") but its guidance has been critiqued for being incomplete.[4](#cmfSimpleFootnoteLink4 "	See King & Spaulding, \"FDA Publishes Final Predetermined Change Control Plan Guidance for AI-Enabled Device Software Functions,\" December 13, 2024, ") A more effective review process would augment a pre-deployment evaluation with an inspection method that scrutinizes post-deployment performance of those AI medical devices for which there are objective concerns regarding the device’s output consistency.

“Former FDA Commissioner Robert Califf has commented on the FDA’s need for private sector collaboration on the postmarket oversight of AI, saying it is not something the FDA can do on its own.”

The FDA does have an existing pathway for postmarket monitoring. Under the authority of Section 522 of the Federal Food, Drug, and Cosmetic Act, the FDA may oblige a manufacturer to collect and analyze data on a marketed medical device. However, the agency has pointed out that its authority to conduct such surveillance is limited. The FDA has acknowledged that it has inadequate resources to significantly expand such surveillance. Recognizing this labor constraint, former FDA Commissioner Robert Califf has commented on the FDA’s need for private sector collaboration on the postmarket oversight of AI, saying it is not something the FDA can do on its own.

For a public-private postmarket surveillance to succeed, private parties (device manufacturers, health care providers, etc.) must have sufficient incentives to voluntarily contribute to the FDA’s mission. Additionally, costs should be minimized, as AI device development and compliance is already an expensive process, and additional costs could negatively affect AI adoption. If postmarket surveillance is too costly or burdensome for staff, then postmarket surveillance will not be widely implemented.

The first step in successfully implementing postmarket surveillance is to properly scope the surveillance effort. Not all AI is unpredictable, and for those devices that are, some do not present a significant risk for patient harm depending on the tasks they perform. This paper proposes a framework that concentrates surveillance on those AI devices where output unpredictability intersects with prospects for meaningful patient harm. Thus, regulatory efficiency begins with reliance on existing, general safety processes for medical devices where additional AI-specific surveillance would produce little benefit. The remaining AI devices that do manifest unpredictability and have a medium to high risk for patient harm[5](#cmfSimpleFootnoteLink5 "	Regarding FDA risk classes, see FDA, \"How to Study and Market Your Device,\" October 12, 2023,") would be evaluated for either periodic device revalidations or performance monitoring.

*Periodic Device Revalidations*

For AI devices whose programming architectures[6](#cmfSimpleFootnoteLink6 "	A programming architecture is a comprehensive structure of a software application from its specific algorithms and operations to the relationships among them.") do not contribute to unpredictability but may adapt their outputs based on open-ended data analysis,[7](#cmfSimpleFootnoteLink7 "	These issues are discussed in detail within Section III of the paper.") we recommend periodic device revalidations. Manufacturer test data that was originally used for a device’s premarket review could be employed in periodic reiterations of its testing to confirm that the device’s latest outputs have remained within acceptable parameters (but still allowing for further testing using health-system-supplied data). The reuse of existing test data and its labels reduces surveillance costs for health systems and eliminates the need for advanced data science consulting (and the related consulting costs) in test data assembly. The time intervals at which these periodic device revalidations occur would progressively increase so that those devices whose outputs are highly unstable could be identified early while moving more stable devices toward a less-frequent maintenance testing schedule. To preserve the confidentiality of patient data as well as the manufacturer’s intellectual property and testing acceptance criteria, the periodic revalidation neither requires health systems to see the device programming code (and introduce intellectual property concerns) nor manufacturers to access patient data (and introduce privacy concerns).

*Performance Monitoring*

We recommend a second type of postmarket surveillance, performance monitoring, for AI devices with output unpredictability that is intrinsic to the devices’ programming (model, parameterization, routing, etc.). Performance monitoring, unlike periodic revalidation, uses clinical output information gathered post-deployment. Performance monitoring complements the FDA’s capture of serious adverse outcomes by leveraging health system infrastructure. As a part of such infrastructure, an EHR can monitor and collect malfunctions that, while not resulting in patient harm, provide early signals pertaining to a device’s output reliability and its impact on care delivery. Specifically, performance monitoring collects data on erroneous outputs, safety events, indications of model degradation, and undesirable outcomes.

Because variability in local population health and procedures for AI use can affect the performance of an AI medical device, the aggregated (not individual patient) performance data produced from both revalidations and monitoring should be compared across health systems. These comparisons can spot trends or outliers that may indicate when AI has a problem that is not necessarily technical. Accordingly, we recommend that these postmarket surveillance processes be performed within an “aggregated outcome data registry” shared among health systems that have deployed the same AI device. Such a network would—in a process compliant with privacy guidelines in the [Health Insurance Portability and Accountability Act](https://paragoninstitute.org/glossary/health-insurance-portability-and-accountability-act/) ([HIPAA](https://paragoninstitute.org/glossary/hipaa/))—facilitate analysis and identify negative events or trends with alerts transmitted, as appropriate, to the FDA as well as the manufacturer and health systems within the network.[8](#cmfSimpleFootnoteLink8 "	The model proposed in this paper can be utilized for AI devices not yet commercialized as well as those that have been approved by the FDA.")

An aggregated outcome data registry is similar to a federated health data network — a secure way for providers in different places to share data and resources without exposing private systems to the connected parties. Within an aggregated outcome data registry, manufacturers and health systems can collaboratively monitor the performance of AI medical devices at risk for unpredictability. Ideally, this monitoring could be facilitated by an EHR system [provider](https://paragoninstitute.org/glossary/provider/) or other data aggregation specialist with relevant data voluntarily provided by multiple health systems employing the same AI medical device.

The FDA could set high-level goals, while day-to-day operations are managed by coalitions of AI adopters (health systems), manufacturers (AI developers), and technology providers (EHR vendors, cloud platforms, data managers). This effort would build on and expand the FDA’s Sentinel Initiative. Within the aggregated outcome data registry, a software routine (such as an AI agent) accessing individual health records related to an AI medical device could identify relevant data and transform this information into anonymized summary data that can be shared among the providers, manufacturer, and FDA without patient privacy violations. Together with this structured data, the routine could further combine unstructured data such as notes pertaining to deployment challenges or errors.

AI manufacturers have strong motivation to join the kind of voluntary surveillance outlined in this paper. First, there is the desire to avoid device failures that can result in legal and financial liabilities as well as reputational damage. These liabilities are further magnified by the absence of the Learned Intermediary Rule for many complex AI medical devices. Under the Learned Intermediary Rule, a medical device manufacturer may be shielded from some legal accountability for a patient injury given that a health care [provider](https://paragoninstitute.org/glossary/provider/) made the decision that the AI device was appropriate for the patient’s needs in light of the manufacturer’s disclosure of risks and benefits. However, for complex AI systems with low explainability, this doctrine would not apply, as the [provider](https://paragoninstitute.org/glossary/provider/) may not be able to assess the complete scope of risk represented by the AI medical device.

Health care providers, alongside their interest in patient welfare, share manufacturers’ liability concerns. AI devices do not have an extended history of medical use, and without this history, some providers worry about their long-term safety. Although these devices pass FDA’s premarket review, the agency’s past lack of transparency—especially through the Alternative Summary Reporting program, which hid from the public many adverse events until 2019—has left providers uneasy. Postmarket surveillance provides a potential means by which negative device trends can be detected before they reach the point of patient injury. Additionally, the postmarket surveillance advocated here offers health care providers an alternative to market safety programs carrying high costs and high organizational disruption.

For the FDA, this postmarket surveillance proposal avoids several limitations of competing oversight schemes. First, it avoids duplicating the FDA’s premarket validation. Consequently, there is no need for a massive financial investment to create new and independent test regimes for all the types of AI medic

[... truncated ...]