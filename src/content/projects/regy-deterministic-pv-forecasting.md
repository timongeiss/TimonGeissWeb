---
title: "Development of a Deterministic PV Power Forecasting Workflow for Household Load Management"
slug: "regy-deterministic-pv-forecasting"
period: "May 2023 — June 2024"
sortDate: "2023-05-01"
organization: "Independent entrepreneurial project within a two-person founding team · REgy"
tags:
  - "Forecasting"
  - "DSM"
  - "Software Systems"
  - "Software Development"
  - "Analysis"
  - "Python"
  - "pvlib"
  - "NWP"
  - "Entrepreneurship"
  - "Lead"
images:
  - src: "/projects/regy-deterministic-pv-forecasting/REgy_Leistungsverlaeufe.png"
    alt: "Measured and forecast PV power profiles in the REgy workflow"
    caption: "Example PV power profiles used to evaluate the deterministic forecasting workflow."
links: []
---
## Idea and context

REgy was developed as an energy-coaching app concept intended to encourage household electricity consumption in line with renewable-energy availability.

To that end, a workflow for PV feed-in forecasting was first developed. The app remained at concept and prototype stage.

## Forecasting workflow

A multi-day photovoltaic power-forecasting model was implemented in Python using pvlib and German Weather Service numerical weather prediction data. The prototype was extended and evaluated in a supervised bachelor’s thesis at OTH Regensburg through comparison with measured PV output of three PV plants and the commercial forecasting service Solcast.

## Results

The supervised bachelor's thesis enabled a comprehensive analysis of the predictive model's performance. The table below provides a summary. The results show that the workflow was able to compete with commercial software.

### nMAE

| Location |   REgy | Solcast |
| -------- | -----: | ------: |
| A        | 5,28 % |  5,52 % |
| B        | 3,75 % |  3,63 % |
| C        | 2,49 % |         |

### nRMSE

| Location |   REgy | Solcast |
| -------- | -----: | ------: |
| A        | 9,43 % |  8,65 % |
| B        | 7,05 % |  7,26 % |
| C        | 5,19 % |         |
