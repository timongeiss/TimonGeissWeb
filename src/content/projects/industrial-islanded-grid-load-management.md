---
title: "Development and Validation of a Load Management Concept as Part of the Tertiary Control for Industrial Islanded Grid Operation"
slug: "industrial-islanded-grid-load-management"
period: "October 2022 — February 2023"
sortDate: "2023-01-01"
organization: "Forschungsstelle für Energienetze und Energiespeicher (FENES) · Bachelor’s thesis OTH Regensburg · Part of INZELL Research Project"
tags:
  - "Energy Networks"
  - "Industrial Energy"
  - "DSM"
  - "Modelling"
  - "Forecasting"
  - "Python"
  - "Research"
  - "Lead"
images:
  - src: "/projects/industrial-islanded-grid-load-management/loadmanagement.png"
    alt: "Load Management with Advance Control Across Multiple Intervals."
    caption: "Load Management with Advance Control Across Multiple Intervals."
links:
  - label: "INZELL research project"
    href: "https://fenes.oth-regensburg.de/forschung/projekte/inzell"
    type: "external"
---

## Research objective

As part of my bachelor’s thesis at FENES and OTH Regensburg, I developed a load management concept for the tertiary control of an industrial power grid during islanded operation. The work was embedded in the federally funded INZELL research project, which investigated how an industrial site could operate independently from the transmission grid and contribute to system stability.

I designed the control logic for reducing and reconnecting industrial loads while considering operational constraints, consumer priorities, remote-control availability and production requirements. The concept combined automated remote load control with forecast-based manual pre-control to prevent critical grid states when the available controllable load was insufficient. I then implemented a Python-based simulation environment with representative load and generation time series to test the concept under different operating scenarios. The results were used to assess the control behaviour and define the technical data and communication interfaces required for a later implementation on a programmable logic controller.

The concept remained a forward-looking design rather than being implemented, as the required remote switching technology was not yet installed in the industrial grid and the production processes could not be fully digitalised within the project timeframe. Nevertheless, the study provided a relevant perspective on future islanded operation, particularly because the comparatively small industrial grid would depend strongly on forecast-based tertiary control to anticipate generation and load imbalances.
