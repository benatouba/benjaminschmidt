import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Overview",
    cv: "CV",
    career: "Career",
    publications: "Writing",
    blog: "Blog",
    projects: "Projects",
    profiles: "Profiles",
    contact: "Contact",
    services: "Services",
  },
  hero: {
    eyebrow: "Scientific Career Profile",
    viewPublications: "View Writing",
    openCv: "Open CV",
    readBlog: "Read Blog",
    researchFocus: "Research Focus",
    currentInterests: "Current areas of interest",
    coreStrengths: "Core strengths",
  },
  cv: {
    kicker: "Curriculum Vitae",
    heading: "Appointments, education, and honors",
    professionalAppointments: "Professional Appointments",
    education: "Education",
    awardsAndHonors: "Awards and Honors",
  },
  career: {
    kicker: "Scientific Career",
    heading: "Trajectory and positions",
  },
  publications: {
    kicker: "Professional Writing",
    heading: "Writing",
    read: "Read",
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
  blog: {
    kicker: "Blog",
    heading: "Notes from projects, methods, and publication work",
    minRead: "min read",
    relatedArticles: "Related articles",
    readPost: "Read post",
  },
  projects: {
    kicker: "Scientific Projects",
    heading: "Research software and initiatives",
    stack: "Stack",
    outcomes: "Outcomes",
    status: {
      Active: "Active",
      Planning: "Planning",
      Completed: "Completed",
    },
  },
  skills: {
    kicker: "Technical Toolkit",
    heading: "Skill badges and technologies",
    copy: "A compact overview of technologies I use across scientific software, data platforms, and reproducible workflows.",
  },
  github: {
    kicker: "GitHub Activity",
    heading: "Current stats and language distribution",
  },
  profiles: {
    kicker: "Linked Accounts",
    heading: "Academic, professional, and public profiles",
    visitProfile: "Visit profile",
    comingSoon: "Coming soon",
    categories: {
      Academic: "Academic",
      Code: "Code",
      Professional: "Professional",
      Personal: "Personal",
    },
  },
  services: {
    kicker: "Services",
    heading: "Professional offerings and collaboration",
  },
  contact: {
    kicker: "Contact and Collaboration",
    heading: "Let's collaborate on research projects and publications.",
    copy: "I am open to interdisciplinary collaborations, invited talks, and joint writing efforts in computational and data-driven science.",
    openProfile: "Open profile",
    comingSoon: "Coming soon",
  },
  footer: {
    builtWith: "Built with Vue 3, TypeScript, Vuetify, oxlint, eslint, and oxfmt.",
    includes:
      "Includes CV, article history, linked accounts, project portfolio, and blog sections for a complete professional researcher website.",
  },
  pages: {
    cv: { title: "Curriculum Vitae", kicker: "Professional Record" },
    career: { title: "Scientific Career", kicker: "Academic Timeline" },
    publications: { title: "Professional Writing", kicker: "Selected Work" },
    blog: { title: "Blog", kicker: "Research Notes" },
    projects: { title: "Scientific Projects", kicker: "Software and Initiatives" },
    profiles: { title: "Linked Profiles", kicker: "Accounts and Identity" },
    contact: { title: "Contact", kicker: "Collaboration" },
    services: { title: "Services", kicker: "Professional Website Features" },
  },
};

export const content: SiteContent = {
  navItems: [
    { label: "nav.overview", to: "/" },
    { label: "nav.cv", to: "/cv" },
    { label: "nav.career", to: "/career" },
    { label: "nav.publications", to: "/publications" },
    { label: "nav.blog", to: "/blog" },
    { label: "nav.projects", to: "/projects" },
    { label: "nav.profiles", to: "/profiles" },
    { label: "nav.contact", to: "/contact" },
  ],
  profile: {
    name: "Dr. Benjamin Schmidt",
    headline: "Research Scientist and Data-Intensive Software Engineer",
    location: "Berlin, Germany",
    address: "10589 Berlin-Charlottenburg",
    phone: "+49 (0) 171 8036920",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "I design and maintain data-intensive scientific software, from robust backend services to user-facing web platforms, with a strong focus on reproducibility, communication, and long-term maintainability.",
    interests: [
      "Climate and environmental data science",
      "Reproducible computational workflows",
      "Scientific web applications",
      "Open and transparent research practices",
    ],
    skills: [
      "Python",
      "TypeScript",
      "R",
      "Scientific writing and peer-review publishing",
      "Data visualization",
      "Linux server administration",
      "High-performance computing",
      "Research software engineering",
    ],
  },
  careerStages: [
    {
      period: "08/2019 - 02/2026",
      title: "Research Associate (PhD)",
      institution: "Technische Universitat Berlin, Climatology",
      description:
        "Led climate and Earth system research projects and built data-intensive software platforms for analysis, visualization, and publication workflows.",
      focusAreas: [
        "MaRESS web platform (Vue, FastAPI, PostGIS)",
        "DARWIN climate data pipelines and dashboards",
        "UC2 urban climate data standards and tooling",
      ],
    },
    {
      period: "10/2019 - Present",
      title: "Lecturer",
      institution: "Freie Universitat Berlin and Technische Universitat Berlin",
      description:
        "Designed and delivered teaching in statistics, climatology, scientific programming, and remote sensing data analysis.",
      focusAreas: ["Statistics with R", "Scientific programming", "Research communication"],
    },
    {
      period: "02/2024 - Present",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Consulting on scientific communication and data analysis in biotech workflows, with focus on time-series station data and robust reporting.",
      focusAreas: ["BioTech consulting", "Time-series analysis", "Scientific communication"],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Research Assistant",
      institution: "Potsdam Institute for Climate Impact Research (PIK), ISIMIP",
      description:
        "Developed counterfactual climate data workflows and statistical tooling for large-scale climate datasets.",
      focusAreas: ["ATTRICI algorithm", "Counterfactual climate data", "Python"],
    },
    {
      period: "02/2017 - 01/2019",
      title: "Student Research Assistant",
      institution: "Humboldt-Universitat zu Berlin, Climate Geography",
      description:
        "Investigated heat-wave projections and spatial patterns of thermal stress in Berlin using mesoscale modeling.",
      focusAreas: ["COSMO-CLM", "Urban climate projections", "Data processing and analysis"],
    },
  ],
  publications: [
    {
      title:
        "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
      venue: "Technische Universitat Berlin",
      year: 2025,
      kind: "Thesis",
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
        "Developed a data-rich web platform for visualization and exploration of Earth system science metadata and relationships.",
      stack: ["Vue.js", "FastAPI", "OpenLayers", "Cytoscape.js", "PostgreSQL", "PostGIS"],
      outcomes: [
        "Interactive map and graph interface",
        "Searchable metadata workflows",
        "Reusable scientific web tooling",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "DARWIN: Dynamics of Precipitation in Transition",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "Managed and analyzed high-volume atmospheric model data to study precipitation source dynamics under climate change in the Galapagos.",
      stack: ["pandas", "xarray", "NumPy", "Matplotlib", "Plotly", "Panel", "Proxmox", "SaltStack"],
      outcomes: [
        "Automated climate data pipelines",
        "Dashboard-based analysis",
        "Peer-reviewed publications",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
    {
      name: "[UC]2 Urban Climate Under Change",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "Built data management and visualization infrastructure for urban climate studies, including web tooling and data standards.",
      stack: ["Django", "Nuxt", "NetCDF", "Python"],
      outcomes: [
        "UCO Berlin visualization platform",
        "Shared data exchange workflows",
        "Project-wide data standards",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "Q-TiP Climate Analysis",
      status: "Completed",
      timeframe: "2020 - 2024",
      summary:
        "Modeled and analyzed climatological datasets for tipping-point dynamics in Central Asian lake systems.",
      stack: ["WRF", "Python", "Scientific data analysis"],
      outcomes: [
        "Model-based climate assessments",
        "Publication contributions",
        "Reusable analysis workflows",
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
        "Built data-intensive climate workflows and scientific web applications while coordinating publication-ready research outputs.",
      highlights: [
        "MaRESS Earth system mapping platform",
        "DARWIN climate data analysis and dashboards",
        "UC2 data standards and UCO Berlin tooling",
        "HPC climate modeling and publication writing",
      ],
    },
    {
      period: "02/2024 - Present",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlin",
      summary: "Advise biotech teams on scientific communication and climate time-series analysis.",
      highlights: [
        "Scientific consulting for applied studies",
        "Time-series analysis of climate station data",
        "Cross-functional collaboration with technical teams",
      ],
    },
    {
      period: "10/2019 - Present",
      role: "Lecturer",
      institution: "FU Berlin and TU Berlin",
      location: "Berlin",
      summary:
        "Teach quantitative and programming-focused courses for environmental and data-driven research.",
      highlights: [
        "Statistics 101 and Statistics with R",
        "Climatology and Urban Atmosphere",
        "Scientific Programming and Remote Sensing Analysis",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Research Assistant",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Developed algorithms for counterfactual climate data generation from large datasets.",
      highlights: [
        "ATTRICI algorithm design and application",
        "Large-scale climate data processing in Python",
        "Support for ISI-CFACT project deliverables",
      ],
    },
    {
      period: "02/2017 - 01/2019",
      role: "Student Research Assistant",
      institution: "Humboldt-Universitat zu Berlin",
      location: "Berlin",
      summary:
        "Analyzed urban heat-wave dynamics and climate projections with mesoscale modeling approaches.",
      highlights: [
        "COSMO-CLM model workflows",
        "Urban climate projection studies",
        "Spatial and temporal heat-stress analysis",
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
        "Doctoral degree awarded for work in regional climate downscaling and hydrological analysis.",
    },
    {
      year: "2019",
      title: "MSc with Distinction",
      issuer: "Humboldt-Universitat zu Berlin",
      description: "Global Change Geography degree completed with grade 1.2.",
    },
    {
      year: "2008",
      title: "Abitur with High Merit",
      issuer: "Freie Waldorfschule Flensburg",
      description:
        "Completed secondary education with grade 1.8 and international study experience.",
    },
  ],
  articleHistory: [
    {
      title:
        "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
      outlet: "Technische Universitat Berlin",
      published: "2025-04-01",
      kind: "Thesis",
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
      summary:
        "Analyzes spatio-temporal cloud frequency patterns in the Galapagos Archipelago using MODIS cloud mask observations.",
      tags: ["MODIS", "Cloud frequency", "Galapagos"],
      link: "https://doi.org/10.3390/atmos14081225",
    },
    {
      title:
        "Sensitivity of micro-scale atmospheric processes in a city quarter of Berlin, Germany on elevated meso-scale temperature forcing",
      outlet: "EGUsphere (preprint)",
      published: "2023-05-15",
      kind: "Article",
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
      description: "Open-source repositories, research tooling, and reproducible demos.",
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
      description: "Professional profile, collaborations, and speaking activities.",
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
      title: "Research Collaboration",
      icon: "mdi-account-group-outline",
      audience: "Research groups and labs",
      description:
        "I co-design climate and environmental research workflows from model output processing to publication-ready analysis.",
      ctaLabel: "Discuss a collaboration",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Data-Intensive Web and API Development",
      icon: "mdi-file-document-edit-outline",
      audience: "Research projects and teams",
      description:
        "Development of scientific web applications and APIs for structured data access, visualization, and team workflows.",
      ctaLabel: "Plan a technical implementation",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Scientific Communication and Teaching",
      icon: "mdi-monitor-dashboard",
      audience: "Institutes and training programs",
      description:
        "Consulting and instruction on statistics, scientific programming, and communication of quantitative research outputs.",
      ctaLabel: "Request teaching or consulting",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
  ],
  contactLinks: [
    {
      label: "Email",
      href: "mailto:benjamin.schmidt@tu-berlin.de",
      icon: "mdi-email-outline",
      sublabel: "Send Email",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "View publications",
    },
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "View software projects",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "Open profile",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "Open profile",
    },
  ],
};
