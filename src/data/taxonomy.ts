export const TOPIC_TAGS = [
  "Energy Networks",
  "Energy Systems",
  "PtX",
  "Industrial Energy",
  "DSM",
  "Energy Economics",
  "Software Systems",
  "Neural Networks"
] as const;

export const METHOD_TAGS = [
  "Analysis",
  "Data Engineering",
  "Modelling",
  "Optimisation",
  "Forecasting",
  "Software Development",
  "Geospatial Analysis",
] as const;

export const RESOURCE_TAGS = [
  "Python",
  "C++",
  "MATLAB",
  "CAD",
  "Integral",
  "PSS SINCAL",
  "oemof",
  "PyPSA",
  "Snakemake",
  "QGIS",
  "Power BI",
  "pvlib",
  "NWP",
  "TYNDP",
  "PyTorch",
  "Docker",
] as const;

export const CONTEXT_OUTCOME_TAGS = [
  "Consulting",
  "Research",
  "Publications",
  "Upcoming Publications",
  "Entrepreneurship",
] as const;

export const ROLE_TAGS = ["Lead", "Project Driver", "Contributor"] as const;

export const TAGS = [
  ...TOPIC_TAGS,
  ...METHOD_TAGS,
  ...RESOURCE_TAGS,
  ...CONTEXT_OUTCOME_TAGS,
  ...ROLE_TAGS,
] as const;

export const tagGroups = [
  { title: "Roles", tags: ROLE_TAGS },
  { title: "Context & outcomes", tags: CONTEXT_OUTCOME_TAGS },
  { title: "Topics", tags: TOPIC_TAGS },
  { title: "Methods", tags: METHOD_TAGS },
  { title: "Tools & resources", tags: RESOURCE_TAGS },
] as const;

export type Tag = (typeof TAGS)[number];
