---
title: "Transfer Learning for PV Forecasting under Data Scarcity: Error-Based and Economic Evaluation of NWP-Driven Hybrid Models"
slug: "transfer-learning-pv-forecasting"
period: "October 2025 — May 2026"
sortDate: "2026-05-01"
organization: "Institut für Energiesysteme und Elektrische Antriebe (ESEA) · Energy Economics Group (EEG) · Diploma Thesis TU Wien"
tags:
  - "Forecasting"
  - "Energy Economics"
  - "Analysis"
  - "Optimisation"
  - "Data Engineering"
  - "Python"
  - "PyTorch"
  - "Neural Networks"
  - "Docker"
  - "NWP"
  - "Research"
  - "Upcoming Publications"
  - "Lead"
images:
  - src: "/projects/transfer-learning-pv-forecasting/datasets.png"
    alt: "Geographic distribution and temporal coverage of the source and target PV datasets"
    caption: "Source and target datasets used for the transfer-learning evaluation."
  - src: "/projects/transfer-learning-pv-forecasting/models.png"
    alt: "Overview of physical, statistical and hybrid PV forecasting model types"
    caption: "PV forecasting model types considered in the literature review."
  - src: "/projects/transfer-learning-pv-forecasting/python_overview1.png"
    alt: "Architecture overview of the data processing and optimisation workflow"
    caption: "Python workflow: data processing and optimisation architecture."
  - src: "/projects/transfer-learning-pv-forecasting/python_overview2.png"
    alt: "Architecture overview of the model evaluation and reporting workflow"
    caption: "Python workflow: model evaluation and reporting architecture."
  - src: "/projects/transfer-learning-pv-forecasting/20250810_transfer_dispatch.png"
    alt: "PV forecast, battery dispatch, grid exchange and revenue time series for a representative day"
    caption: "Representative day-ahead dispatch with PV, battery, grid exchange and revenue components."
links:
  - label: "Python Project on GitHub"
    href: "https://github.com/timongeiss/masterthesis_timongeiss"
    type: "external"
  - label: "Miro Code Documentation"
    href: "https://miro.com/app/board/uXjVGadA7lw=/?share_link_id=880829381265"
    type: "external"
---
## Publication

The Python workflows are already available in full on GitHub. Documentation can be found on Miro.

Once the thesis defense is complete, the diploma thesis will also be published in full via the TU library.

Following that, I plan to work with the EEG to publish a paper on the subject.

## Research objective

Accurate photovoltaic (PV) power forecasting is essential for the economic integration
of PV systems into electricity markets. For day-ahead market participation, operators
must submit reliable schedules before delivery. Data-driven and hybrid models often
achieve high accuracy, but require extensive historical power and weather data from
the target system. For newly installed or newly integrated PV plants, these data are
initially unavailable, resulting in a cold-start problem.
This thesis investigates transfer learning for PV forecasting under data scarcity and
cold-start conditions. A hybrid transfer-learning model fed with numerical weather
prediction (NWP) features is developed and compared with three realistic strategies: a
physical model, a generic source model trained on source plants, and a target model
trained only on incoming target-system data. In contrast to previous approaches, a larger
geographical distance between source and target systems is introduced to the transferlearning setup. All models are evaluated using nMAE and nRMSE and economically through a day-ahead dispatch optimization with a battery storage system.
The generic source model provides the weakest forecasts with an nRMSE of 12.8%, due
to its direct application without target adaptation. The physical model improves the
nRMSE to 11.7%, but does not improve economic performance. Compared with total
electricity procurement costs of 422 euro without PV over the 90-day evaluation period,
both models reduce total costs to 34 euro without receiving a fixed feed-in tariff.
Target data collected during the cold-start phase are used to train a target model
and adapt the source model through transfer learning. During the first 60 days, both
data-driven approaches achieve similar accuracy, with an nRMSE of 9.9% for the target
model and 9.5% for the transfer-learning model. After relearning stops, the target
model fails to generalize and deteriorates over the final 30 days, resulting in an overall
nRMSE of 10.3% and procurement cost of 33 euro, similar to the other reference models.
The transfer-learning model shows no deterioration after the learning stop and achieves
the best overall accuracy and economic performance, with an nRMSE of 9.0% and
procurement cost of 27 euro. It is therefore the most effective strategy for the investigated
cold-start setting and for data-scarcity situations with up to 60 days of system-specific
data. Day-ahead market participation remains beneficial compared with a feed-in tariff
of 5 ct/kWh, but is no longer advantageous from 6 ct/kWh onward.
The economic evaluation further shows that overforecasting is more harmful than underforecasting, with an average imbalance-related cash flow of -0.14 euro/kWh compared with +0.06 euro/kWh for underforecasts. Deviations leading to unplanned imports are
the most costly, while unexpected exports cause little economic damage. PV forecasting
models for day-ahead dispatch should therefore penalize overforecasts more strongly.
