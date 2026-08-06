---
title: "Development of a Backend Architecture for a PV Forecasting Platform"
slug: "eneraytion-pv-forecasting-backend"
period: "October 2024 — August 2025"
sortDate: "2024-10-01"
organization: "Independent entrepreneurial project within a four-person founding team · Eneraytion"
tags:
  - "Forecasting"
  - "Software Systems"
  - "Software Development"
  - "Data Engineering"
  - "NWP"
  - "Docker"
  - "Entrepreneurship"
  - "Lead"
images:
  - src: "/projects/eneraytion-pv-forecasting-backend/eneraytion_overview.png"
    alt: "Censored overview of the Backend Documentation."
    caption: "Censored overview of the Backend Documentation."
links: []
---
## Idea and context

Eneraytion grew out of the earlier [REgy project](/projects/regy-deterministic-pv-forecasting/), but was intended to be a web app dedicated solely to forecasting photovoltaic power generation. At the time of this idea, there were only a few commercial providers for PV forecasting, none of which specialized in residential households. To that end, I put together an interdisciplinary team and brought on board two software engineers and another electrical engineer.

## Forecasting workflow

The work established a functional backend with database and processing workflow for photovoltaic-system data, numerical weather prediction from the german weather service and application interfaces supporting real-time power forecasts up to 180 hours. This backend became operational and generated forecasts on test systems.

## Project closure

The platform was not publicly launched after a substantially more advanced Python-based energy forecasting platform with a similar concept came to our attention (Rebase Energy). In addition, publishing and operating the platform would have required significant hosting resources due to the high computational and storage requirements associated with processing numerical weather prediction data. Without dedicated funding, maintaining the service was not economically viable as a non-commercial side project.
