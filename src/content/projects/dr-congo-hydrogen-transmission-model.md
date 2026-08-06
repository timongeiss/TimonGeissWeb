---
title: "A Constrained PyPSA Earth Based Energy System Model for the Democratic Republic of the Congo - Implications for Hydrogen Export from Hydropower under Real-World Conditions"
slug: "dr-congo-hydrogen-transmission-model"
period: "January 2026— Present"
sortDate: "2026-03-01"
organization: "Forschungsstelle für Energienetze und Energiespeicher (FENES) · Part of H2Global Meets Africa Research Project"
tags:
  - "Energy Networks"
  - "Energy Systems"
  - "PtX"
  - "Modelling"
  - "Optimisation"
  - "Geospatial Analysis"
  - "PyPSA"
  - "Snakemake"
  - "Research"
  - "Upcoming Publications"
  - "Lead"
images:
  - src: "/projects/dr-congo-hydrogen-transmission-model/hydropower_sites_potential_map.png"
    alt: "Numbered hydroelectric power plants, showing expansion potential in the DRC by model year and location."
    caption: "Numbered hydroelectric power plants, showing expansion potential in the DRC by model year and location."
  - src: "/projects/dr-congo-hydrogen-transmission-model/result_network_ac_dc_bus_topology_offgrid_2050_0.png"
    alt: "The resulting PyPsa network for the year 2050, with line colors representing annual energy transmission, ranging from green for minimum values to red for maximum values. The minimum and maximum annual transmission limits are labeled."
    caption: "The resulting PyPsa network for the year 2050, with line colors representing annual energy transmission, ranging from green for minimum values to red for maximum values. The minimum and maximum annual transmission limits are labeled."
links:
  - label: "H2Global Meets Africa research project"
    href: "https://fenes.oth-regensburg.de/projekte/h2globalmeetsafrica"
    type: "external"
---
## Publication
This publication is currently finialized und submitted soon. The models will then be published in GitHub.

## Research objective
The Democratic Republic of the Congo has enormous hydropower potential, while its current electricity system is characterized by low supply rates, limited plant availability, unconnected subnetworks, and load shedding. This study examines what additional infrastructure is required to first meet the projected domestic electricity demand and subsequently produce green hydrogen for export. To this end, three spatially resolved, cost-optimizing PyPSA-Earth models are developed for 2025, 2035, and 2050. Unlike pure potential analyses conducted using PyPSA-Earth Snakemake processes, the models take into account literature-based power plant projects, technical expansion limits, the existing and planned grid topology, reduced hydropower availability, and a regional breakdown of demand into grid-connected and decentralized supply.
The reference model for 2025 replicates the scale of the reported electricity supply with approximately 11.3 TWh of hydropower generation. It also includes about 1.8 TWh of unmet grid-connected demand as well as additional oil-based backup power, thereby reflecting the real challenges facing the energy sector. In the 2035 model, total domestic demand of approximately 60 TWh can be met without load shedding. This requires the rehabilitation of existing facilities, additional regional hydropower and photovoltaic capacity, grid expansion, and decentralized off-grid systems. Full development of the large hydropower projects on the lower Congo River is not necessary for this. For 2050, in addition to domestic demand of around 150 TWh, hydrogen exports ranging from 0.7 to 4.0 Mt per year are examined. Optimal production is concentrated primarily on large pumped-storage hydropower projects on the lower Congo River and on electrolysis capacities in the Kinshasa–Boma region. The annualized system costs rise from approximately 5.3 billion EUR without exports to 6.7 to 13.7 billion EUR per year.
More results to follow.
