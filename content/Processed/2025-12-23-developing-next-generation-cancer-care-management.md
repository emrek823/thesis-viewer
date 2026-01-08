---
url: https://www.microsoft.com/en-us/industry/blog/healthcare/2025/05/19/developing-next-generation-cancer-care-management-with-multi-agent-orchestration/
title: "Developing next-generation cancer care management with multi-agent orchestration - Microsoft Industry Blogs"
clipped: 2025-12-23 13:00
source: slack
slack_channel: healthcare-aiml-deskresearch
---

# Developing next-generation cancer care management with multi-agent orchestration - Microsoft Industry Blogs

> Source: [https://www.microsoft.com/en-us/industry/blog/healthcare/2025/05/19/developing-next-generation-cancer-care-management-with-multi-agent-orchestration/](https://www.microsoft.com/en-us/industry/blog/healthcare/2025/05/19/developing-next-generation-cancer-care-management-with-multi-agent-orchestration/)

May 19, 2025 

* Tags
* [AI](https://www.microsoft.com/en-us/industry/blog/tag/ai/)
* [Azure](https://www.microsoft.com/en-us/industry/blog/tag/azure/)
* [Copilot](https://www.microsoft.com/en-us/industry/blog/tag/copilot/)
* [Microsoft Fabric](https://www.microsoft.com/en-us/industry/blog/tag/microsoft-fabric/)
* [Microsoft Teams](https://www.microsoft.com/en-us/industry/blog/tag/microsoft-teams/)

Every year, 20 million people globally are diagnosed with cancer.1 Every patient is unique, with hundreds of distinct tumor sub-types, each demanding treatment protocols involving new drugs, combinations, clinical trials, and device-based therapies. Top cancer centers rely heavily on multidisciplinary tumor boards—dedicated sessions where radiologists, pathologists, surgeons, oncologists, genetic counselors, and other specialists undertake sophisticated analysis of vast patient data and knowledge to align on personalized care plans.

Because of the immense preparation and specialization required, less than 1% of these patients have access to these personalized treatment plans, which have demonstrably improved patient outcomes.

A recent American Society of Clinical Oncology (ASCO) study highlighted that clinicians spend between 1.5 to 2.5 hours per patient, meticulously reviewing imaging, pathology slides, clinical notes, and genomic data.2 And cancer care is just one example of the complex data analysis healthcare requires. Agentic AI holds the potential to reduce administrative friction and further transform care delivery.

The healthcare agent orchestrator is **available** **now** in the [**Azure AI Foundry Agent Catalog**](https://aka.ms/healthcareorchestrator). Itfeaturespre-configured agents with multi-agent orchestration and open-source customization options that allow developers and researchers to build agents that coordinate multi-disciplinary multimodal healthcare data workflows, such as tumor boards, and streamline deployment into healthcare enterprise productivity tools (such as Microsoft Teams and Word). Modular, general reasoners as well as specialized, multimodal AI agents work together to address tasks that would take hours, with the goal to effectively augment clinician specialists with customized cutting-edge agentic AI.

[Microsoft Build 2025 session: Transform Cancer Care Management with Multimodal AI Agents](https://build.microsoft.com/en-US/sessions/OD815?source=sessions)

By integrating the latest capabilities from across Microsoft, the healthcare agent orchestrator can manage analysis and reasoning over diverse healthcare data types—ranging from imaging (DICOM files) and pathology (whole-slide images) to genomics data and clinical notes from electronic health records (EHRs). Each agent is equipped with advanced AI models from Azure AI Foundry, combining general-purpose reasoning capabilities with [healthcare-specific modality models](https://www.microsoft.com/en-us/industry/blog/healthcare/2024/10/10/unlocking-next-generation-ai-capabilities-with-healthcare-ai-models/) to drive actionable insights grounded in multimodal clinical data.

## Key capabilities of healthcare agent orchestrator

* Orchestrating agentic capabilities that can reason over complex EHR data and augment time-consuming tasks like building a chronological patient timeline, determining cancer stage, using specific reference guidelines, reviewing radiology and pathology images, synthesizing current medical literature, referencing treatment guidelines, surfacing relevant clinical trials, and generating customized reports.

* Providing tools that connect enterprise healthcare data through [Microsoft Fabric](https://www.microsoft.com/en-us/microsoft-fabric) and the fast healthcare interoperability resources (FHIR) data service.

* Allowing developers to create, customize, and fine-tune each agent with their own models, tools, instructions, and data sources; test performance in a guided playground experience; and extend agents by setting up [using Microsoft Copilot Studio to integrate a Model Context Protocol (MCP) server with sample implementation provided](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-model-context-protocol-mcp-in-copilot-studio-simplified-integration-with-ai-apps-and-agents/?msockid=17860b1fa20c664f32571e23a38867b8).

* Ensuring interoperability and integration into existing workflows, including distribution to familiar tools the majority of healthcare organizations already use—Teams, Word, PowerPoint, and Microsoft 365 Copilot—where users can interact with AI agents.

* Providing robust explainability capabilities in agentic AI-generated outputs, such as grounding responses to the source EHR data—critical for validation, trust, and adoption in high-stakes healthcare environments.

Researchers and developers at leading cancer care institutions—including Stanford University, Johns Hopkins, Providence Genomics, Mass General Brigham, and the University of Wisconsin School of Medicine and Public Health—are currently exploring the healthcare agent orchestrator to study how agentic AI could deliver value to complex clinical tasks such as cancer care.

> “*Stanford Medicine sees 4,000 tumor board patients a year, and our clinicians are already using foundation model generated summaries in tumor board meetings today (via a PHI safe instance of GPT on Azure). The new healthcare agent orchestrator has the power to streamline this existing workflow by reducing fragmentation (saving time by avoiding copy-pasting) and enables surfacing new insights from data elements that were challenging to search, such as trial eligibility criteria, treatment guidelines, and real-world evidence. Stanford Health Care is excited further research the potential of using the healthcare agent orchestrator to build the first generative AI agent solution used in a production setting for real-world care for our cancer patients*.”
>
> —Dr. Mike Pfeffer, Chief Information Officer, Stanford Health Care and Stanford School of Medicine

> *“The vision of the healthcare agent orchestrator is to rapidly surface, summarize, and take action on relevant multimodal medical information for each complex cancer case, so hours of review can become minutes. Collaborating with Microsoft allows us to explore the value of these models for tumor boards and beyond.”*
>
> —Dr. Joshua Warner, Radiologist at UW Health and Assistant Professor of Radiology, UW School of Medicine and Public Health

Early development collaborations featured the integration of this multi-agent workflow into Teams chats, where, for example, group chats enabled conversations between multiple human experts and specialized healthcare AI agents connected to specific healthcare data. It demonstrated the promise to significantly enhance efficiency and collaboration among clinical providers. This capability is already bringing clinicians and developers together to build the agentic healthcare applications of the future: the catalyst is the powerful combination of healthcare-specific agents using general reasoning models and multimodal healthcare foundation models alongside the ability to interact directly with custom agents using Teams.

![A screen recording demonstrating the integration of the multi-agent workflow with Microsoft Teams that enables multiple human experts to interact directly with specialized healthcare AI agents.](https://www.microsoft.com/en-us/industry/blog/wp-content/uploads/2025/05/TeamsTumorBoard-1.gif)

For example, Johns Hopkins oncologists Dr. Vasan Yegnasubramanian, Dr. Elsa Anagnostou, and Dr. Taxiarchis Botsis and their developer teams in the Johns Hopkins inHealth Precision Medicine program and Molecular Tumor Board are providing their expertise to refine and test the system to ensure it would have high utility if used in their clinical and precision medicine applications.

## Coordinating collaboration of specialized agents

The healthcare agent orchestrator builds upon recent research and releases from Microsoft Research and our collaborators. It coordinates collaboration of specialized agents designed explicitly for complex multidisciplinary clinical workflows like cancer care.

* The **orchestrator** leverages [Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/) and [Magentic-One](https://www.microsoft.com/en-us/research/articles/magentic-one-a-generalist-multi-agent-system-for-solving-complex-tasks/?msockid=38f595ea087963ce1b71803c09c36262) to coordinate agents, maintain shared memory, and interact with the human in the loop.

* The **patient history agent** leveragesUniversal Medical Abstraction to organize patient data chronologically.3 Manual work that can take experts over three hours happens in minutes.

* The **radiology agent** leverages customer fine-tuned models like CXRRepotGen/MAIRA-2 to analyze radiology images for a second read.4

* The **pathology agent** demonstrates how to connect to external agents like Paige.ai’s “Alba” pathology agent to address complex queries related to pathology images (available in preview).5

* The **cancer staging agent** refers to the American Joint Committee on Cancer (AJCC) clinical guidelines to support accurate cancer staging.

* The **clinical guidelines agent** refers to the National Comprehensive Cancer Network (NCCN) clinical guidelines to suggest recommended treatment plans.

* The **clinical trials agent** identifies eligible clinical trials by matching patient profiles against databases such as ClinicalTrials.gov. This can result in more than double the recall improvement compared to the publicly available Critera2Query baseline.6

* The **medical research agent** delivers actionable, evidence-based guidance grounded on graph-based knowledge from trusted medical journals.

* The **report creation agent** automates comprehensive, integrated, richly formatted reporting that serves as a trusted reference during multidisciplinary meetings.

> *“As we progress towards the routine use of multi-agent systems, the healthcare agent orchestrator demonstrates the power to simplify the integration of various models and agents with productivity tools that clinicians are already using. The flexible orchestration framework will make it easy for us at Paige to continue to focus on our pathology agents while enabling their integration into the larger cancer care workflow and leverage access to multi-modal data.”*
>
> —Razik Yousfi, Chief Executive Officer of Paige.ai

![An image showing the healthcare agent orchestrator architecture.](https://www.microsoft.com/en-us/industry/blog/wp-content/uploads/2025/05/Slide1-1-1024x464.jpg)

The orchestrator is intentionally open-ended: any approved agent—including third-party—that exposes an API, tool wrapper, or MCP endpoint can be pulled into a Teams conversational thread. Paige.ai is shipping their Alba agent in preview, the first example of an external agent that can be connected to healthcare agent orchestrator. Built on Paige’s foundation-scale vision models and coupled with a conversational large language model (LLM) front-end, Alba delivers real-time conversational digital pathology insights such as tumor grade, morphology, and biomarker status directly from whole-slide images.

> *“Providence clinical researchers have begun leveraging advanced AI capabilities provided by the healthcare agent orchestrator to quickly and efficiently parse through large sets of publications, clinical trials and electronic health records. We are excited about its potential to enhance our ability to interpret genomics and match clinical trials in the molecular tumor boards, ultimately benefiting patient care by providing more precise and timely treatment options. Its integration into our workflows also will help streamline communication and collaboration among clinical providers, ensuring that critical clinical information is shared promptly and accurately. As we continue to explore new ways to understand the biology of cancer, its capabilities will be instrumental in driving medical discoveries and advancing cancer treatment.”*
>
> *—*Carlo Bifulco, MD, Chief Medical Officer of Providence Genomics and research faculty at the Earle A. Chiles Research Institute

## Empowering developers to accelerate innovations for care teams

As clinical care complexity escalates, the healthcare agent orchestrator empowers developers to confidently navigate the accelerating era of agentic AI, collaborate with clinicians, and democratize precision medicine tools by surfacing these capabilities into existing workflows. The initial framework is designed to study the opportunity of assisting tumor boards. The ultimate vision is to empower healthcare and life science developers to research how agentic AI capabilities could impact clinicians and patients more widely by providing real-time support to multidisciplinary care teams across the healthcare ecosystem.

Healthcare developers and clinical organizations are invited to explore healthcare agent orchestrator, available through the [**Azure AI Foundry Agent Catalog**](https://aka.ms/healthcareorchestrator). Engage with the next generation of AI-powered healthcare agents today.

[Contact Microsoft Healthcare AI Team](mailto:hlsfrontierteam@microsoft.com)

1 [Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries, CA: A Cancer Journal for Clinicians, April 4, 2024.](https://acsjournals.onlinelibrary.wiley.com/doi/10.3322/caac.21834)

2 [Using an Adapted Tumor Board Evaluation Tool for Quality Assessment of a Thoracic Multidisciplinary Cancer Conference: A Pilot Study, JCO Clinical Cancer Informatics, October 5, 2023.](https://ascopubs.org/doi/pdf/10.1200/CCI.23.00017)

3 [Universal Abstraction: Harnessing Frontier Models to Structure Real-World Data at Scale, February 2, 2025](https://arxiv.org/abs/2502.00943)

4 [MAIRA-2: Grounded Radiology Report Generation, June 6, 2024](https://arxiv.org/abs/2406.04449)

5 [Nature Medicine, A foundation model for clinical-grade computational pathology and rare cancers detection, July 22, 2024](https://www.nature.com/articles/s41591-024-03141-0)

6 [Scaling Clinical Trial Matching Using Large Language Models: A Case Study in Oncology, August 4, 2023](https://arxiv.org/abs/2308.02180)

---

##### Disclaimer

*Healthcare agent orchestrator is intended for research and development use. It is not designed or intended to be deployed in clinical settings as-is nor is it intended for use in the diagnosis or treatment of any health or medical condition, and its performance for such purposes has not been established. You bear sole responsibility and liability for any use of healthcare agent orchestrator, including verification of outputs and incorporation into any product or service intended for a medical purpose or to inform clinical decision-making, compliance with applicable healthcare laws and regulations, and obtaining

[... truncated ...]