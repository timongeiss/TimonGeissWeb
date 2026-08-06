---
title: "Probabilistic PV Dataset Generator for Stochastic Energy System Optimisation"
slug: "probabilistic-pv-dataset-generator"
period: "June 2025 — September 2025"
sortDate: "2025-09-01"
organization: "Institute of Computer Technology (ICT) · Technical University Vienna Project · Presented at Smart Grids Austria"
tags:
  - "Forecasting"
  - "Energy Systems"
  - "Data Engineering"
  - "Modelling"
  - "Software Development"
  - "Python"
  - "Docker"
  - "pvlib"
  - "NWP"
  - "Research"
  - "Lead"
images:
  - src: "/projects/probabilistic-pv-dataset-generator/20250924_TP_SGA_Poster.png"
    alt: "Scientific Poster for the Smart Grids Austria industry and stakeholder event."
    caption: "Scientific Poster for the Smart Grids Austria industry and stakeholder event."
links: []
---
## Research objective

Energy management systems currently focus primarily on optimizing a best guess scenario based on a feed-in forecast. Renewable energy feed-in forecasts are subject to uncertainty, resulting in deviations from the best guess, flawed operating plans and higher opportunity costs. Some uncertainties can be modeled using probabilistic forecasts.

Main Goals:
Develop a reproducible workflow for generating probabilistic PV Data
Automatically create realistic test datasets that include probabilistic PV feed-in forecasts for use in downstream optimization and analysis

I developed a complete, containerised data-generation pipeline that provides realistic probabilistic PV power scenarios as input for an existing stochastic optimisation framework. The optimisation model itself was outside the scope of my work. My focus was the full upstream processing chain: downloading and regridding ICON-D2-EPS ensemble weather forecasts from the German Weather Service, extracting location-specific meteorological time series, converting irradiance forecasts into PV power using pvlib, and reducing the ensemble members to representative scenarios with associated probabilities.

I programmed and validated the complete workflow, including configuration, data processing, scenario clustering, visualisation and integration interfaces for the downstream optimisation tool. I also prepared the technical documentation, created the scientific poster and presented the project at a Smart Grids Austria industry and stakeholder event.
