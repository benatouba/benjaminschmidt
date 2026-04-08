import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Overview",
    cv: "CV",
    career: "Experience",
    publications: "Writing",
    spotlights: "Case Studies",
    projects: "Delivery",
    profiles: "Profiles",
    contact: "Contact",
    services: "Value",
    garden: "Garden",
    ariaLabel: "Main navigation",
  },
  hero: {
    eyebrow: "Senior/Staff Engineering · Data Platforms · Product Delivery",
    viewProjects: "View Delivery",
    openCv: "Open CV",
    contactMe: "Contact Me",
    researchFocus: "Where I create value",
    currentInterests: "What I build best",
    currentInterestsDetail:
      "I work best where product, data, and engineering meet: full-stack applications, platform architecture, automation, and internal tooling that turn high-context workflows into reliable software.",
    coreStrengths: "Core stack",
    availability: "Open to full-time senior/staff roles",
    orcidLabel: "ORCID",
  },
  impact: {
    kicker: "Proof",
    heading: "Engineering scope recruiters can scan in seconds",
    copy:
      "A quick summary of the scope I already own: end-to-end delivery, technical leadership, and data-heavy systems that need both product sense and execution.",
  },
  cv: {
    kicker: "Career Snapshot",
    heading: "CV",
    copy:
      "A recruiter-friendly summary of the experience most relevant for senior and staff engineering roles.",
    profileTitle: "Current positioning",
    professionalAppointments: "Experience",
    education: "Education",
    awardsAndHonors: "Selected credentials",
  },
  career: {
    kicker: "Experience",
    heading: "Leadership and delivery history",
    copy:
      "Roles where I owned architecture, shipped systems, and translated expert requirements into usable software, data products, and technical workflows.",
  },
  publications: {
    heading: "Writing & Publications",
    read: "Read",
    doi: "DOI",
    filterAll: "All",
    kinds: {
      Journal: "Journal",
      Conference: "Conference",
      Preprint: "Preprint",
      "Book Chapter": "Book Chapter",
      Thesis: "Thesis",
      "Technical Report": "Technical Report",
    },
  },
  articles: {
    open: "Open",
    kinds: {
      Article: "Article",
      Interview: "Interview",
      Editorial: "Editorial",
      Review: "Review",
      Thesis: "Thesis",
      "Technical Report": "Technical Report",
    },
  },
  spotlights: {
    heading: "Case Studies",
    relatedArticles: "Related work",
    viewProject: "Open case study",
  },
  projects: {
    kicker: "Selected Delivery",
    heading: "Platforms, products, and systems I shipped",
    copy:
      "Examples of end-to-end work across frontend, backend, data engineering, and cross-functional technical delivery.",
    stack: "Stack",
    outcomes: "Business and delivery outcomes",
    viewProject: "Open project",
    status: {
      Active: "Active",
      Planning: "Planning",
      Completed: "Completed",
    },
  },
  skills: {
    heading: "Technical Toolkit",
    copy: "A compact overview of technologies I use across scientific software, data platforms, and reproducible workflows.",
  },
  github: {
    heading: "GitHub Activity",
  },
  profiles: {
    heading: "External Profiles",
    visitProfile: "Open profile",
    comingSoon: "Coming soon",
    categories: {
      Academic: "Academic",
      Code: "Code",
      Professional: "Professional",
      Personal: "Personal",
    },
  },
  services: {
    kicker: "What I Bring",
    heading: "How I contribute at senior/staff level",
    copy:
      "I am targeting full-time engineering roles where I can own critical systems, improve delivery, and help teams turn technical complexity into working products.",
  },
  contact: {
    kicker: "Contact",
    heading: "Hiring for senior or staff engineering?",
    copy:
      "I am focused on full-time roles where I can lead architecture, build reliable systems, and raise the technical bar across product, data, and platform work.",
    primaryCta: "Email me about a role",
    secondaryCta: "Review my CV",
    openProfile: "Open profile",
    comingSoon: "Coming soon",
  },
  footer: {
    copyright: "© {year} Dr. Benjamin Schmidt",
    location: "Berlin, Germany",
    builtWith: "Built with Vue 3, TypeScript, and Vuetify.",
    tagline: "Senior Full-Stack Engineer | Data Platforms & Product Delivery",
  },
  pages: {
    cv: {
      title: "CV",
      kicker: "Senior/Staff Engineering Profile",
      metaTitle: "CV",
      copy:
        "The shortest path to understanding my fit: architecture ownership, product-minded delivery, and full-stack/data systems experience.",
    },
    career: {
      title: "Experience",
      kicker: "Leadership & Delivery",
      metaTitle: "Experience",
      copy:
        "A role-by-role view of how I have led systems, delivered platforms, and translated complex requirements into working software.",
    },
    publications: {
      title: "Writing & Publications",
      kicker: "Technical Writing & Research",
      metaTitle: "Writing",
      copy:
        "Selected writing, technical reports, and publications that demonstrate depth in complex systems, analytical thinking, and communication.",
    },
    spotlights: {
      title: "Case Studies",
      kicker: "How I Build",
      metaTitle: "Case Studies",
      copy:
        "A more narrative look at how I approach platform architecture, data workflows, and product-facing engineering problems.",
    },
    projects: {
      title: "Selected Delivery",
      kicker: "Platforms, Products, Systems",
      metaTitle: "Delivery",
      copy:
        "Representative work across full-stack engineering, data-intensive applications, workflow automation, and technical leadership.",
    },
    profiles: {
      title: "External Profiles",
      kicker: "Public Presence",
      metaTitle: "Profiles",
      copy:
        "A quick directory of the places where my engineering work, research track record, and professional background are publicly visible.",
    },
    contact: {
      title: "Contact",
      kicker: "Senior/Staff Opportunities",
      metaTitle: "Contact",
      copy:
        "If you are hiring for a role that needs product sense, technical depth, and end-to-end ownership, this is the best place to start.",
    },
    services: {
      title: "What I Bring",
      kicker: "Where I Add Value",
      metaTitle: "Value",
      copy:
        "This page summarizes the type of staff-level engineering contribution I am looking to make inside a strong product or platform organization.",
    },
  },
};

export const content: SiteContent = {
  navItems: [
    { label: "nav.overview", to: "/" },
    { label: "nav.cv", to: "/cv" },
    { label: "nav.career", to: "/career" },
    { label: "nav.publications", to: "/publications" },
    { label: "nav.spotlights", to: "/spotlights" },
    { label: "nav.projects", to: "/projects" },
    { label: "nav.profiles", to: "/profiles" },
    { label: "nav.contact", to: "/contact" },
    { label: "nav.garden", to: "https://garden.benrlschmidt.de", external: true },
  ],
  profile: {
    name: "Dr. Benjamin Schmidt",
    headline: "Senior Full-Stack Engineer for Data-Heavy Products and Platforms",
    location: "Berlin, Germany",
    address: "10589 Berlin-Charlottenburg",
    phone: "Please contact via email",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "I build and lead software systems that turn complex data workflows into reliable products. My edge is end-to-end ownership across frontend, backend, platform, and analytics, especially where teams need strong execution with high technical context.",
    interests: [
      "Product-minded engineering",
      "Data platforms and internal tooling",
      "Workflow automation",
      "Platform reliability and developer experience",
    ],
    skills: [
      "Python",
      "TypeScript",
      "Vue 3",
      "Nuxt",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Docker",
      "Linux",
      "System architecture",
    ],
  },
  impactHighlights: [
    {
      icon: "mdi-layers-triple-outline",
      value: "8+ years",
      label: "Complex technical delivery",
      detail: "Leading projects across application engineering, data systems, and research-to-product translation.",
    },
    {
      icon: "mdi-web",
      value: "Multiple platforms",
      label: "Shipped end-to-end",
      detail: "Built and delivered production-style web platforms, dashboards, APIs, and workflow tooling.",
    },
    {
      icon: "mdi-database-cog-outline",
      value: "Large datasets",
      label: "Data-intensive engineering",
      detail: "Designed pipelines and analysis systems for high-volume scientific and operational data.",
    },
    {
      icon: "mdi-account-group-outline",
      value: "Cross-functional",
      label: "Stakeholder translation",
      detail: "Worked between scientists, domain experts, partner teams, and technical contributors to ship usable systems.",
    },
  ],
  careerStages: [
    {
      period: "08/2019 - 02/2026",
      title: "Research Associate (PhD)",
      institution: "Technische Universitat Berlin, Climatology",
      description:
        "Owned delivery across data-intensive applications, analytics workflows, and platform-like tooling for climate and Earth system teams, combining technical architecture with hands-on implementation.",
      focusAreas: [
        "Led delivery of MaRESS, a geospatial and graph-based research platform",
        "Built reproducible data pipelines and dashboards for DARWIN",
        "Defined standards and tooling for interoperable urban climate data workflows",
      ],
    },
    {
      period: "10/2019 - Present",
      title: "Lecturer",
      institution: "Freie Universitat Berlin and Technische Universitat Berlin",
      description:
        "Designed and delivered applied technical courses that sharpened my ability to explain complex systems, mentor mixed-seniority groups, and structure knowledge for execution.",
      focusAreas: ["Technical communication", "Scientific programming", "Applied statistics"],
    },
    {
      period: "02/2024 - Present",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Operate in a senior technical advisory role across analytics, reporting, and product-oriented scientific workflows, helping a biotech context turn domain complexity into clearer decisions.",
      focusAreas: ["Product-minded analytics", "Time-series workflows", "Executive-ready reporting"],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Research Assistant",
      institution: "Potsdam Institute for Climate Impact Research (PIK), ISIMIP",
      description:
        "Built statistical tooling and workflow automation for large-scale archives, strengthening my foundation in reliable data processing and method-to-software implementation.",
      focusAreas: ["Python tooling", "Workflow design", "Large-scale data processing"],
    },
    {
      period: "02/2017 - 01/2019",
      title: "Student Research Assistant",
      institution: "Humboldt-Universitat zu Berlin, Climate Geography",
      description:
        "Developed reproducible modeling and analysis workflows in a technically demanding research environment, building the execution discipline that later carried into production-style engineering work.",
      focusAreas: ["Reproducible workflows", "Model-based analysis", "Urban systems data"],
    },
  ],
  publications: [
    {
      title:
        "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
      venue: "Technische Universitat Berlin",
      year: 2025,
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Doctoral dissertation on regional climate dynamics, water balance analysis, and multi-scale downscaling methodologies.",
      tags: ["Climate modeling", "Water balance", "Regional downscaling"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "MaRESS: Mapping Research in Earth System Science",
      venue: "NFDI4Earth Incubator Lab",
      year: 2025,
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Web platform and graph-based tooling for exploration, analysis, and visualization of Earth system science research metadata.",
      tags: ["Vue", "FastAPI", "PostGIS", "NLP"],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      title: "Urban Climate Data Standard",
      venue: "[UC]2 Program",
      year: 2024,
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Specification and implementation guidance for standardized handling of NetCDF atmospheric datasets in urban climate projects.",
      tags: ["NetCDF", "Data standards", "Urban climate"],
      link: "https://uc2-program.org/sites/default/files/inline-files/uc2_datenstandard.pdf",
    },
    {
      title: "ATTRICI: Counterfactual Climate Data Construction",
      venue: "ISIMIP",
      year: 2023,
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Algorithmic framework for generating counterfactual climate datasets from historical archives.",
      tags: ["Climate data", "Counterfactual analysis", "Python"],
      link: "https://isi-mip.github.io/attrici/attrici.html",
    },
  ],
  projects: [
    {
      name: "MaRESS: Earth System Research Mapping Platform",
      status: "Active",
      timeframe: "2023 - 2026",
      summary:
        "Led development of a full-stack platform that combines geospatial search, graph exploration, and metadata workflows to make a complex research landscape explorable and actionable.",
      stack: ["Vue.js", "FastAPI", "OpenLayers", "Cytoscape.js", "PostgreSQL", "PostGIS"],
      outcomes: [
        "Owned architecture across frontend, API, and spatial data layers",
        "Delivered a product-style interface for complex discovery workflows",
        "Created reusable technical patterns for future platform work",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "DARWIN: Dynamics of Precipitation in Transition",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "Built the engineering backbone for large-scale model-data analysis, turning computationally heavy scientific workflows into reproducible pipelines, dashboards, and publication-ready outputs.",
      stack: ["pandas", "xarray", "NumPy", "Matplotlib", "Plotly", "Panel", "Proxmox", "SaltStack"],
      outcomes: [
        "Reduced manual analysis overhead through automated workflows",
        "Delivered decision-ready visualizations and dashboard-based exploration",
        "Supported high-quality downstream outputs including publications",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
    {
      name: "[UC]2 Urban Climate Under Change",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "Led data and tooling work that improved interoperability across distributed teams, combining standards work, platform thinking, and practical engineering delivery.",
      stack: ["Django", "Nuxt", "NetCDF", "Python"],
      outcomes: [
        "Shipped partner-facing visualization and access tooling",
        "Improved data exchange across teams and institutions",
        "Established standards that reduced ambiguity in technical collaboration",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "Q-TiP Climate Analysis",
      status: "Completed",
      timeframe: "2020 - 2024",
      summary:
        "Designed reliable modeling and analysis workflows for a complex scientific domain, strengthening expertise in systemized computation and high-context technical problem solving.",
      stack: ["WRF", "Python", "Scientific data analysis"],
      outcomes: [
        "Built reusable workflows for repeated technical analysis",
        "Supported publication-quality scientific outputs",
        "Demonstrated execution in specialist modeling environments",
      ],
    },
  ],
  cvAppointments: [
    {
      period: "08/2019 - 02/2026",
      role: "Research Associate (PhD)",
      institution: "Technische Universitat Berlin, Climatology",
      location: "Berlin",
      summary:
        "Led delivery of full-stack and data-intensive systems in a high-complexity environment, spanning platform architecture, workflow automation, and stakeholder-facing analytical tooling.",
      highlights: [
        "Owned technical delivery across MaRESS, DARWIN, and UC2 systems",
        "Worked across frontend, backend, data, infrastructure, and UX concerns",
        "Turned expert workflows into usable applications and reproducible pipelines",
        "Coordinated technically demanding outputs from prototype to publishable result",
      ],
    },
    {
      period: "02/2024 - Present",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlin",
      summary:
        "Serve as a senior technical partner on analytics, reporting, and product-oriented scientific workflows in a biotech setting.",
      highlights: [
        "Translated domain requirements into structured technical direction",
        "Improved reporting quality and decision support through analytics design",
        "Worked across expert and technical stakeholders in an applied environment",
      ],
    },
    {
      period: "10/2019 - Present",
      role: "Lecturer",
      institution: "FU Berlin and TU Berlin",
      location: "Berlin",
      summary:
        "Designed and taught technical content for mixed audiences, reinforcing communication, mentorship, and systems thinking.",
      highlights: [
        "Structured complex technical material into teachable systems",
        "Led applied programming and analytical coursework",
        "Built clarity across interdisciplinary and mixed-seniority audiences",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Research Assistant",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Built algorithmic and workflow foundations for robust large-scale data processing.",
      highlights: [
        "Implemented methods as usable technical workflows",
        "Processed large-scale archives in Python",
        "Contributed to technically rigorous project delivery",
      ],
    },
    {
      period: "02/2017 - 01/2019",
      role: "Student Research Assistant",
      institution: "Humboldt-Universitat zu Berlin",
      location: "Berlin",
      summary:
        "Developed reproducible technical workflows in a computational research setting with strong modeling requirements.",
      highlights: [
        "Worked with complex simulation environments",
        "Built repeatable analysis processes",
        "Strengthened rigor in technically demanding workflows",
      ],
    },
  ],
  education: [
    {
      period: "04/2025",
      degree: "PhD (Dr. rer. nat.)",
      institution: "Technische Universitat Berlin",
      details:
        "Climatology, grade magna cum laude. Dissertation on regional dynamical downscaling and water balance across regions and time scales.",
    },
    {
      period: "03/2019",
      degree: "MSc in Global Change Geography",
      institution: "Humboldt-Universitat zu Berlin",
      details:
        "Grade 1.2. Includes international field experience in Arctic seismic exploration at University Centre in Svalbard.",
    },
    {
      period: "09/2016",
      degree: "BSc in Physics of the Earth System",
      institution: "CAU Kiel and GEOMAR",
      details: "Focus on meteorology, oceanography, and geophysics. Grade 2.2.",
    },
    {
      period: "06/2008",
      degree: "Abitur",
      institution: "Freie Waldorfschule Flensburg",
      details: "Grade 1.8 with focus on mathematics and geography; semester abroad in Pretoria.",
    },
  ],
  honors: [
    {
      year: "2025",
      title: "PhD Completion with Magna cum Laude",
      issuer: "Technische Universitat Berlin",
      description:
        "Doctoral work completed with distinction, demonstrating deep analytical rigor and independent ownership of complex technical work.",
    },
    {
      year: "2019",
      title: "MSc with Distinction",
      issuer: "Humboldt-Universitat zu Berlin",
      description: "Master's degree completed with distinction in a quantitative and interdisciplinary field.",
    },
    {
      year: "2008",
      title: "Abitur with High Merit",
      issuer: "Freie Waldorfschule Flensburg",
      description:
        "Early academic distinction with international study exposure and strong analytical focus.",
    },
  ],
  articleHistory: [
    {
      title:
        "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
      outlet: "Technische Universitat Berlin",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Doctoral dissertation documenting multi-scale regional climate downscaling and hydrological analysis methodology.",
      tags: ["Dissertation", "Climatology", "Hydrology"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "MaRESS Earth System Science Mapping Platform",
      outlet: "NFDI4Earth Incubator Lab",
      published: "2025-01-01",
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Project summary of a production-ready web platform for map and graph based analysis of Earth system science research data.",
      tags: ["Technical report", "Web platform", "Earth system science"],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      title: "[UC]2 Data Standard for Atmospheric NetCDF Data",
      outlet: "[UC]2 Program",
      published: "2024-01-01",
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Defines standardized workflows for management, exchange, and analysis of urban climate atmospheric datasets.",
      tags: ["Data standard", "NetCDF", "Urban climate"],
      link: "https://uc2-program.org/sites/default/files/inline-files/uc2_datenstandard.pdf",
    },
    {
      title: "ATTRICI Counterfactual Climate Data Workflow",
      outlet: "ISIMIP",
      published: "2019-07-01",
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Technical documentation and method notes on generating counterfactual climate datasets from historical archives.",
      tags: ["Climate data", "Algorithm", "ISIMIP"],
      link: "https://isi-mip.github.io/attrici/attrici.html",
    },
    {
      title: "Local Sea Surface Temperatures Modulate the Occurrence of Heavy Rainfall Events in the Galápagos Archipelago",
      outlet: "Geophysical Research Letters",
      published: "2025-12-16",
      kind: "Article",
      authors: "Schneider, M. K., Turini, N., Ballari, D., Bayas López, S. D., Delgado Maldonado, B., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      doi: "10.1029/2025GL117553",
      summary:
        "Shows how local sea surface temperature variability modulates heavy rainfall occurrence in the Galápagos Archipelago.",
      tags: ["Galapagos", "Heavy rainfall", "Sea surface temperature"],
      link: "https://doi.org/10.1029/2025GL117553",
    },
    {
      title: "Analysis of the Meso-Scale Climate of the Galápagos Archipelago by Dynamical Downscaling of Reanalysis Data",
      outlet: "International Journal of Climatology",
      published: "2025-11-15",
      kind: "Article",
      authors: "Schmidt, B., Turini, N., Otto, M., Delgado Maldonado, B., Bayas López, S. D., Bart, F., Holtmann, A., Bendix, J., Scherer, D.",
      doi: "10.1002/joc.8924",
      summary:
        "Presents a meso-scale climate analysis of the Galápagos Archipelago using dynamical downscaling of reanalysis data.",
      tags: ["Dynamical downscaling", "Reanalysis", "Galapagos"],
      link: "https://doi.org/10.1002/joc.8924",
    },
    {
      title: "Operational satellite cloud products need local adjustment – The Galapagos case of ecoclimatic cloud zonation",
      outlet: "Atmospheric Research",
      published: "2025-04-01",
      kind: "Article",
      authors: "Turini, N., Delgado Maldonado, B., Zander, S., Bayas López, S. D., Ballari, D., Célleri, R., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      doi: "10.1016/j.atmosres.2025.107918",
      summary:
        "Evaluates satellite cloud products and demonstrates the need for local adjustment for ecoclimatic cloud zonation over the Galapagos.",
      tags: ["Satellite products", "Cloud zonation", "Galapagos"],
      link: "https://doi.org/10.1016/j.atmosres.2025.107918",
    },
    {
      title:
        "The Central Europe Refined analysis version 2 (CER v2): evaluating three decades of high-resolution precipitation data for the Berlin-Brandenburg metropolitan region",
      outlet: "Meteorologische Zeitschrift",
      published: "2025-02-10",
      kind: "Article",
      authors: "Bart, F., Schmidt, B., Wang, X., Holtmann, A., Meier, F., Otto, M., Scherer, D.",
      doi: "10.1127/metz/2024/1233",
      summary:
        "Assesses three decades of high-resolution precipitation data in the Berlin-Brandenburg metropolitan region using CER v2.",
      tags: ["Precipitation", "Berlin-Brandenburg", "Regional analysis"],
      link: "https://doi.org/10.1127/metz/2024/1233",
    },
    {
      title: "The Spatio-Temporal Cloud Frequency Distribution in the Galapagos Archipelago as Seen from MODIS Cloud Mask Data",
      outlet: "Atmosphere",
      published: "2023-07-29",
      kind: "Article",
      authors: "Zander, S., Turini, N., Ballari, D., Bayas López, S. D., Célleri, R., Delgado Maldonado, B., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      doi: "10.3390/atmos14081225",
      summary:
        "Analyzes spatio-temporal cloud frequency patterns in the Galapagos Archipelago using MODIS cloud mask observations.",
      tags: ["MODIS", "Cloud frequency", "Galapagos"],
      link: "https://doi.org/10.3390/atmos14081225",
    },
    {
      title:
        "Sensitivity of micro-scale atmospheric processes in a city quarter of Berlin, Germany on elevated meso-scale temperature forcing",
      outlet: "EGUsphere",
      published: "2023-05-15",
      kind: "Article",
      authors: "Scherer, D., Scherber, K., Fehrenbach, U., Meier, F., Otto, M., Schmidt, B., Steikert, R., Holtmann, A.",
      doi: "10.5194/egusphere-egu23-1326",
      summary:
        "Investigates how elevated meso-scale temperature forcing influences micro-scale atmospheric processes within a Berlin urban quarter.",
      tags: ["Urban climate", "Berlin", "Meso-scale forcing"],
      link: "https://doi.org/10.5194/egusphere-egu23-1326",
    },
    {
      title: "Sensitivity of Water Balance in the Qaidam Basin to the Mid-Pliocene Climate",
      outlet: "Journal of Geophysical Research: Atmospheres",
      published: "2021-08-27",
      kind: "Article",
      authors: "Wang, X., Schmidt, B., Otto, M., Ehlers, T. A., Mutz, S. G., Botsyun, S., Scherer, D.",
      doi: "10.1029/2020JD033965",
      summary:
        "Examines water-balance sensitivity in the Qaidam Basin under Mid-Pliocene climate conditions.",
      tags: ["Water balance", "Qaidam Basin", "Mid-Pliocene"],
      link: "https://doi.org/10.1029/2020JD033965",
    },
    {
      title: "Sensitivity of Water Balance in the Qaidam Basin to the Mid-Pliocene Climate",
      outlet: "ESS Open Archive (preprint)",
      published: "2020-10-09",
      kind: "Article",
      authors: "Schmidt, B., Wang, X., Otto, M., Ehlers, T. A., Mutz, S. G., Botsyun, S., Scherer, D.",
      doi: "10.1002/essoar.10504500.1",
      summary:
        "Preprint version detailing modeled sensitivity of Qaidam Basin water balance to Mid-Pliocene climate forcing.",
      tags: ["Preprint", "Water balance", "Qaidam Basin"],
      link: "https://doi.org/10.1002/essoar.10504500.1",
    },
    {
      title: "Changes in water balance of the Qaidam Basin from Pliocene to present day",
      outlet: "EGU General Assembly",
      published: "2020-03-23",
      kind: "Article",
      authors: "Schmidt, B., Wang, X., Mutz, S. G., Botsyun, S., Ehlers, T. A., Scherer, D.",
      doi: "10.5194/egusphere-egu2020-20666",
      summary:
        "Conference contribution on long-term changes in Qaidam Basin water balance from the Pliocene to the present.",
      tags: ["Conference", "Water balance", "Qaidam Basin"],
      link: "https://doi.org/10.5194/egusphere-egu2020-20666",
    },
  ],
  blogPosts: [
    {
      slug: "building-maress",
      title: "Building MaRESS: Bridging Spatial Data and Knowledge Graphs",
      date: "2025-02-12",
      readMinutes: 7,
      summary:
        "Reflections on designing a scientific web platform that combines geospatial data exploration with graph-based context.",
      tags: ["MaRESS", "Vue", "FastAPI", "PostGIS"],
      href: "https://github.com/benatouba/maress",
      relatedArticles: [
        {
          title: "MaRESS Earth System Science Mapping Platform",
          href: "https://www.nfdi4earth.de/2participate/incubator-lab",
        },
      ],
    },
    {
      slug: "climate-data-pipelines-darwin",
      title: "Designing Climate Data Pipelines for DARWIN",
      date: "2024-09-20",
      readMinutes: 6,
      summary:
        "How to turn large NetCDF simulation data into analysis-ready, reproducible products and dashboards.",
      tags: ["DARWIN", "NetCDF", "xarray", "Reproducibility"],
      href: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
      relatedArticles: [
        {
          title:
            "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
          href: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
        },
      ],
    },
    {
      slug: "teaching-data-literacy",
      title: "Teaching Data Literacy in Climate and Geography Courses",
      date: "2024-04-08",
      readMinutes: 5,
      summary:
        "Practical approaches for teaching reproducible statistics and programming to interdisciplinary student cohorts.",
      tags: ["Teaching", "R", "Scientific Programming"],
      relatedArticles: [
        {
          title: "Course portfolio: Statistics, Scientific Programming, and Urban Atmosphere",
        },
      ],
    },
  ],
  externalProfiles: [
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      description: "Code, product experiments, technical tooling, and implementation history.",
      category: "Code",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      description: "Persistent researcher identifier and publication metadata record.",
      category: "Academic",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      description: "Professional positioning for recruiters, hiring managers, and leadership conversations.",
      category: "Professional",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      description: "Citation profile and publication impact overview.",
      category: "Academic",
    },
  ],
  services: [
    {
      title: "End-to-end product engineering",
      icon: "mdi-monitor-dashboard",
      description:
        "I can own delivery from architecture to shipped interface: APIs, databases, backend services, and frontend workflows for products with real operational complexity.",
    },
    {
      title: "Data platforms and workflow automation",
      icon: "mdi-file-document-edit-outline",
      description:
        "I design systems that make messy, high-volume, or specialist data reliable enough for product teams, internal users, and downstream decision-making.",
    },
    {
      title: "Staff-level technical translation",
      icon: "mdi-account-group-outline",
      description:
        "I am especially strong in environments where engineering has to bridge product, domain experts, stakeholders, and implementation teams without losing speed or quality.",
    },
  ],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:benjamin.schmidt@tu-berlin.de",
      icon: "mdi-email-outline",
      sublabel: "Start a hiring conversation",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "Review publication record",
    },
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "Inspect code and shipped projects",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "View recruiter-facing profile",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "See research track record",
    },
  ],
};
