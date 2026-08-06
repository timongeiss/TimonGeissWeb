export type AcademicDegree = "Bachelor" | "Master";

export interface AcademicCourse {
  title: string;
  germanTitle: string;
  degree: AcademicDegree;
  status?: "In progress";
}

export interface AcademicFeature {
  text?: string;
  images?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export interface AcademicBlock {
  id: string;
  title: string;
  description: string;
  courses: AcademicCourse[];
  feature?: AcademicFeature;
}

/**
 * Course overview transcribed from Bildungscluster_Timon.xlsx.
 * Blocks are ordered statically by their number of courses.
 */
export const academicBlocks: AcademicBlock[] = [
  {
    id: "energy-economics-markets-finance-law",
    title: "Energy Economics, Markets, Finance & Law",
    description: "Energy economics, electricity and generation markets, financing, investment analysis and energy-related environmental law.",
    courses: [
      { title: "Energy Economics and Energy Efficiency", germanTitle: "Energiewirtschaft und Energieeffizienz", degree: "Bachelor" },
      { title: "Financing and Investment Analysis", germanTitle: "Finanzierung und Investitionsrechnung", degree: "Bachelor" },
      { title: "Electricity and Water Economics", germanTitle: "Elektrizitäts- und Wasserwirtschaft", degree: "Master" },
      { title: "Energy Economics", germanTitle: "Energieökonomie", degree: "Master" },
      { title: "Economics of Energy Networks", germanTitle: "Ökonomie der Energienetze", degree: "Master" },
      { title: "Economics of Renewable Energy Systems", germanTitle: "Ökonomie der erneuerbaren Energiesysteme", degree: "Master" },
      { title: "Project Management", germanTitle: "Projektmanagement", degree: "Bachelor" },
      { title: "Environmental Law", germanTitle: "Umweltrecht", degree: "Bachelor" },
      { title: "Energy Systems and Climate Change", germanTitle: "Energy Systems and Climate Change", degree: "Master" },
      { title: "Environmental Protection in Energy Economics", germanTitle: "Umweltschutz in der Energiewirtschaft", degree: "Master" },
      { title: "Selected Topics", germanTitle: "Selected Topics", degree: "Master" },
    ],
  },
  {
    id: "renewable-energy-systems",
    title: "Renewable Energy Systems",
    description: "Solar energy, hydropower, energy storage, bioenergy and applied renewable-energy practice.",
    courses: [
      { title: "Photovoltaics and Solar Thermal Energy / Solar Energy", germanTitle: "Photovoltaik und Solarthermie / Solarenergie", degree: "Bachelor" },
      { title: "Hydropower Plants", germanTitle: "Wasserkraftwerke", degree: "Bachelor" },
      { title: "Power Plants", germanTitle: "Kraftwerke", degree: "Master" },
      { title: "Energy Storage", germanTitle: "Energiespeicher", degree: "Bachelor" },
      { title: "Electrochemical Conversion and Storage", germanTitle: "Elektrochemische Wandlung und Speicherung", degree: "Master" },
      { title: "Generation of New Energy Carriers", germanTitle: "Erzeugung neuer Energieträger", degree: "Bachelor" },
      { title: "Energy Engineering Laboratory 1", germanTitle: "Praktikum Energietechnik 1", degree: "Bachelor" },
      { title: "Energy Engineering Laboratory 2", germanTitle: "Praktikum Energietechnik 2", degree: "Bachelor" },
      { title: "Renewable Energy Systems", germanTitle: "Regenerative Energiesysteme", degree: "Master" },
    ],
  },
  {
    id: "mechanics-materials-thermofluid-dynamics",
    title: "Mechanics, Materials & Thermofluid Dynamics",
    description: "Mechanical, material, thermal and fluid-dynamic foundations.",
    courses: [
      { title: "Fluid Machinery", germanTitle: "Strömungsmaschinen", degree: "Bachelor" },
      { title: "Fluid Mechanics", germanTitle: "Strömungsmechanik", degree: "Bachelor" },
      { title: "Engineering Mechanics", germanTitle: "Technische Mechanik", degree: "Bachelor" },
      { title: "Thermodynamics", germanTitle: "Thermodynamik", degree: "Bachelor" },
      { title: "Materials Engineering", germanTitle: "Werkstofftechnik", degree: "Bachelor" },
      { title: "Heat Transfer", germanTitle: "Wärmeübertragung", degree: "Bachelor" },
    ],
  },
  {
    id: "electrical-engineering-electronics-foundations",
    title: "Electrical Engineering & Electronics Foundations",
    description: "Electrical fields, circuits, electronic components, measurement technology and electrical safety.",
    courses: [
      { title: "Electronic Components and Electronics", germanTitle: "Bauelemente und Elektronik", degree: "Bachelor" },
      { title: "Fundamentals of Electrical Engineering 1", germanTitle: "Grundlagen der Elektrotechnik 1", degree: "Bachelor" },
      { title: "Fundamentals of Electrical Engineering 2", germanTitle: "Grundlagen der Elektrotechnik 2", degree: "Bachelor" },
      { title: "Electrodynamics", germanTitle: "Elektrodynamik", degree: "Master" },
      { title: "Electrical Installations and Electrical Safety", germanTitle: "Elektrische Anlagentechnik und Elektrosicherheit", degree: "Bachelor" },
      { title: "Electrical Measurement Technology", germanTitle: "Elektrische Messtechnik", degree: "Bachelor" },
    ],
  },
  {
    id: "machines-drives-power-electronics",
    title: "Electrical Machines, Drives & Power Electronics",
    description: "Electromechanical energy conversion, power converters and electrical drive systems.",
    courses: [
      { title: "Drive Engineering", germanTitle: "Antriebstechnik", degree: "Bachelor" },
      { title: "Fundamentals of Electrical Machines", germanTitle: "Grundlagen elektrischer Maschinen", degree: "Bachelor" },
      { title: "Power Electronics", germanTitle: "Leistungselektronik", degree: "Bachelor" },
      { title: "Drives and Power Electronics Laboratory", germanTitle: "Praktikum Antriebstechnik und Leistungselektronik", degree: "Bachelor" },
      { title: "Electrical Drives", germanTitle: "Elektrische Antriebe", degree: "Master" },
      { title: "Electrical Machines", germanTitle: "Elektrische Maschinen", degree: "Master", status: "In progress" },
    ],
  },
  {
    id: "mathematics-natural-sciences",
    title: "Mathematics & Natural Sciences",
    description: "Mathematical methods and physical-chemical foundations.",
    courses: [
      { title: "Mathematics 1", germanTitle: "Mathematik 1", degree: "Bachelor" },
      { title: "Mathematics 2", germanTitle: "Mathematik 2", degree: "Bachelor" },
      { title: "Physics and Chemistry", germanTitle: "Physik und Chemie", degree: "Bachelor" },
      { title: "Mathematics 3 - Lecture", germanTitle: "Mathematik 3 - Vorlesung", degree: "Master" },
      { title: "Mathematics 3 - Exercise", germanTitle: "Mathematik 3 - Übung", degree: "Master" },
    ],
  },
  {
    id: "power-systems-smart-grids",
    title: "Power Systems & Smart Grids",
    description: "Transmission, distribution, network planning, control and digital power systems.",
    courses: [
      { title: "Electrical Power Systems", germanTitle: "Elektrische Netztechnik", degree: "Bachelor" },
      { title: "Grid Planning and Control", germanTitle: "Netzplanung und Netzregelung", degree: "Bachelor" },
      { title: "Energy Transmission and Distribution", germanTitle: "Energieübertragung und -verteilung", degree: "Master" },
      { title: "Information Technology in Smart Grids", germanTitle: "Informationstechnik in Smart Grids", degree: "Master" },
      { title: "Smart Grids Laboratory", germanTitle: "Praktikum Smart Grids", degree: "Master" },
    ],
  },
  {
    id: "computer-science-simulation-energy-system-modelling",
    title: "Computer Science, Simulation & Energy System Modelling",
    description: "Programming, simulation, and the modelling and analysis of energy and environmental systems.",
    courses: [
      { title: "Computer Science 1", germanTitle: "Informatik 1", degree: "Bachelor" },
      { title: "Computer Science 2", germanTitle: "Informatik 2", degree: "Bachelor" },
      { title: "Energy Models and Analyses", germanTitle: "Energiemodelle und Analysen", degree: "Master" },
      { title: "Modelling of Dynamic Environmental Systems", germanTitle: "Modellierung dynamischer Umweltsysteme", degree: "Master" },
      { title: "Open Source Energy System Modeling", germanTitle: "Open Source Energy System Modeling", degree: "Master" },
    ],
  },
  {
    id: "control-optimisation-systems-theory",
    title: "Control, Optimisation & Systems Theory",
    description: "Control methods, optimisation and optimisation-based control.",
    courses: [
      { title: "Control Engineering", germanTitle: "Regelungstechnik", degree: "Bachelor" },
      { title: "Optimisation", germanTitle: "Optimierung", degree: "Master" },
      { title: "Optimisation-Based Control Methods", germanTitle: "Optimierungsbasierte Regelungsmethoden", degree: "Master" },
    ],
  },
  {
    id: "electric-mobility-transport-energy",
    title: "Electric Mobility & Transport Energy",
    description: "Electric road vehicles and energy-economic perspectives on the transport sector.",
    courses: [
      { title: "Energy Economics in the Transport Sector", germanTitle: "Energiewirtschaft im Verkehrssektor", degree: "Master" },
      { title: "Road Vehicles and E-Mobility", germanTitle: "Straßenfahrzeuge und E-Mobilität", degree: "Master" },
    ],
  },
  {
    id: "interdisciplinary-electives-specialisation",
    title: "Interdisciplinary Electives",
    description: "Interdisciplinary electives, transferable skills and courses with deliberately open subject matter.",
    courses: [
      { title: "General Academic Elective - Mentoring", germanTitle: "Allgemeinwissenschaftliches Wahlpflichtfach - Mentoring", degree: "Bachelor" },
      { title: "Transferable Skills: Scientific Writing", germanTitle: "Transferable Skills: Scientific Writing", degree: "Master" },
    ],
  },
];
