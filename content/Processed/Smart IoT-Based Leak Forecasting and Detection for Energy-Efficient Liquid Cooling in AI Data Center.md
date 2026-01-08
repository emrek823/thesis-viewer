---
title: Smart IoT-Based Leak Forecasting and Detection for Energy-Efficient Liquid
  Cooling in AI Data Centers
authors:
- Krishna Chaitanya Sunkara
- Rambabu Konakanchi
date: '2025-12-25'
categories:
- cs.LG
- cs.DC
- cs.NI
- eess.SY
pdf_url: https://arxiv.org/pdf/2512.21801v1
paper_id: 2512.21801v1
source: arxiv
tags:
- paper
- source/arxiv
- topic/cs-LG
- topic/cs-DC
- topic/cs-NI
---

# Smart IoT-Based Leak Forecasting and Detection for Energy-Efficient Liquid Cooling in AI Data Centers

**Authors:** Krishna Chaitanya Sunkara, Rambabu Konakanchi

**Date:** 2025-12-25 | **Source:** arxiv | **Categories:** cs.LG, cs.DC, cs.NI, eess.SY

[PDF](https://arxiv.org/pdf/2512.21801v1)

## Abstract

AI data centers which are GPU centric, have adopted liquid cooling to handle extreme heat loads, but coolant leaks result in substantial energy loss through unplanned shutdowns and extended repair periods. We present a proof-of-concept smart IoT monitoring system combining LSTM neural networks for probabilistic leak forecasting with Random Forest classifiers for instant detection. Testing on synthetic data aligned with ASHRAE 2021 standards, our approach achieves 96.5% detection accuracy and 87% forecasting accuracy at 90% probability within plus or minus 30-minute windows. Analysis demonstrates that humidity, pressure, and flow rate deliver strong predictive signals, while temperature exhibits minimal immediate response due to thermal inertia in server hardware. The system employs MQTT streaming, InfluxDB storage, and Streamlit dashboards, forecasting leaks 2-4 hours ahead while identifying sudden events within 1 minute. For a typical 47-rack facility, this approach could prevent roughly 1,500 kWh annual energy waste through proactive maintenance rather than reactive emergency procedures. While validation remains synthetic-only, results establish feasibility for future operational deployment in sustainable data center operations.

## Notes

