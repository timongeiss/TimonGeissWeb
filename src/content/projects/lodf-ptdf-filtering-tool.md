---
title: "Development of an LODF and PTDF Matrix Filtering Tool in MATLAB and Python"
slug: "lodf-ptdf-filtering-tool"
period: "September 2021 — December 2021"
sortDate: "2021-09-01"
organization: "umlaut energy GmbH · Part of Accenture · Intern Project"
tags:
  - "Energy Networks"
  - "Analysis"
  - "Software Development"
  - "Python"
  - "MATLAB"
  - "Integral"
  - "Consulting"
  - "Lead"
images: []
links: []
---
## Objective

Transmission-network studies in Integral can export Line Outage Distribution Factor (LODF) matrices for subsequent processing in MATLAB. For the European transmission-network cases considered, matrices of up to approximately 55,000 × 55,000 entries were available. Their size made direct inspection and use in engineering analyses impractical.

## Sensitivity measures

An LODF quantifies how the outage of one transmission line affects the power flows on other lines. The value represents the share of the pre-outage flow that is redistributed to a specific other transmission line. LODFs range from −1, indicating a 100% reduction in flow, to +1, indicating a 100% increase in flow.

Power Transfer Distribution Factors (PTDFs) were processed using the same filtering concept. A PTDF describes the change in power flow on a transmission line caused by injecting or withdrawing power at a network node.

## MATLAB filtering tool

MATLAB applications were developed to label, filter and reduce the sensitivity matrices to searchable engineering information. Two central analysis cases were supported:

- **Impact of a line outage:** Selecting line X lists all transmission lines whose power flow changes following the outage of X.
- **Relationship between two lines:** Selecting lines X and Y applies a symmetric filter and returns only the LODF relationship between these two lines.

Documentation and user instructions accompanied the tool. The core filtering functionality was subsequently transferred to Python for further use.
