import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Overview",
    cv: "CV",
    career: "Experience",
    publications: "Research",
    spotlights: "Case Studies",
    projects: "Projects",
    profiles: "Profiles",
    contact: "Contact",
    services: "Leadership",
    garden: "Garden",
    ariaLabel: "Main navigation",
  },
  hero: {
    eyebrow: "Senior Full-Stack Engineering · Data Platforms · Infrastructure",
    viewProjects: "View Projects",
    openCv: "Open CV",
    contactMe: "Contact Me",
    researchFocus: "Current scope",
    currentInterests: "What I deliver now",
    currentInterestsDetail:
      "At Alganize I lead the scientific and data-facing side of the business while staying hands-on across product workflows, reporting, analytics, and delivery. More broadly, I build data-intensive products and platforms across Vue/Nuxt frontends, FastAPI/Django backends, Linux and HPC infrastructure, and specialist domains that need both technical depth and clear communication.",
    coreStrengths: "Core stack",
    availability: "Open to full-time senior/staff engineering roles",
    orcidLabel: "ORCID",
  },
  impact: {
    kicker: "Proof",
    heading: "A profile built around shipped systems",
    copy:
      "The strongest signal I can offer recruiters is range with evidence: full-stack product delivery, big-data high-context data engineering, infrastructure depth, and a track record of turning challenges into reliable systems in a variety of domains.",
  },
  clients: {
    kicker: "Selected Clients",
    heading: "Trusted in scientific, public, and applied environments",
    copy:
      "Alongside institutional roles, I have worked with research, climate, and applied-data clients that needed reliable technical execution and clear communication under different, real constraints.",
  },
  infrastructure: {
    kicker: "Systems Depth",
    heading: "Systems, storage, big-data, and HPC experience that most full-stack candidates do not have",
    copy:
      "I am not only comfortable at the application layer. I also bring hands-on experience with Linux administration, distributed storage, automation, and HPC environments, including BeeGFS, InfiniBand, SaltStack, and Proxmox-based operations. My experience ranges from harware-adjacent problem solving to building production-style platforms that run on top of complex infrastructure.",
  },
  publicationHighlights: {
    kicker: "Validated Analytics",
    heading: "Research that demonstrates technical depth, validation discipline, and systems thinking",
    copy:
      "These papers matter here not as academic decoration, but as proof that I can build analytical systems, validate them against real observations, quantify uncertainty, and communicate what the results actually mean.",
    openDetail: "Open detailed analysis",
    viewAll: "View all publication analyses",
  },
  publicationDetail: {
    openSource: "Open publication",
    openDoi: "Open DOI",
    mainFindings: "Main findings",
    whyItMatters: "Why it matters",
    recruiterTakeaway: "What this demonstrates",
    keyMetrics: "Key metrics and facts",
    backToPublications: "Back to all publication analyses",
  },
  cv: {
    kicker: "Career Snapshot",
    heading: "CV",
    copy:
      "A concise summary of the experience most relevant to senior and staff engineering roles in product, platform, data, and infrastructure-heavy environments.",
    profileTitle: "Current positioning",
    professionalAppointments: "Experience",
    education: "Education",
    awardsAndHonors: "Academic distinctions",
    certifications: "Certifications",
    selectedClients: "Selected clients",
  },
  career: {
    kicker: "Experience",
    heading: "Roles where I shipped systems, led technical work, and translated complex domains into software",
    copy:
      "The common pattern across my experience is not narrow academia. It is technical ownership in data-heavy, specialist environments where strong engineering, strong judgment, and strong communication all matter at the same time.",
  },
  publications: {
    kicker: "Research and Technical Depth",
    heading: "Detailed publication analyses",
    copy:
      "A closer look at the work behind the publication list: what each paper actually found, why it mattered, and what it demonstrates about my technical and analytical strengths.",
    read: "Read detailed analysis",
    doi: "DOI",
    filterAll: "All",
    empty: "No publication analyses match the current filter.",
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
    kicker: "Selected Projects",
    heading: "Products, platforms, and systems I actually built",
    copy:
      "The strongest version of my profile is concrete: geospatial platforms, B2B product systems, data portals, climate-data engineering, and standards-backed infrastructure for complex workflows.",
    stack: "Stack",
    outcomes: "What I delivered",
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
    kicker: "Leadership Fit",
    heading: "How I contribute at senior and staff level",
    copy:
      "I am strongest in roles that need a hands-on senior engineer with broad range: product judgment, backend and frontend delivery, data and analytics depth, and enough infrastructure literacy to make sound architectural decisions.",
  },
  contact: {
    kicker: "Contact",
    heading: "Hiring for a high-context senior or staff engineering role?",
    copy:
      "If the role sits at the intersection of product, data, platform, and technical communication, I would be interested in discussing it. I am especially relevant where complexity is real and the systems still need to ship.",
    primaryCta: "Email me about a role",
    secondaryCta: "Review my CV",
    openProfile: "Open profile",
    comingSoon: "Coming soon",
  },
  footer: {
    copyright: "© {year} Dr. Benjamin Schmidt",
    location: "Berlin, Germany",
    builtWith: "Built with Vue 3, TypeScript, and Vuetify.",
    tagline: "Senior Full-Stack Engineer | Data Platforms, Infrastructure, and High-Context Systems",
  },
  pages: {
    cv: {
      title: "CV",
      kicker: "Senior/Staff Engineering Profile",
      metaTitle: "CV",
      copy:
        "A practical summary of the software, data, infrastructure, communication, and leadership experience I bring to senior and staff engineering roles.",
    },
    career: {
      title: "Experience",
      kicker: "Leadership, Delivery, Technical Range",
      metaTitle: "Experience",
      copy:
        "A role-by-role view of how I led technical work, built systems, and operated in environments where software, domain expertise, and communication all had to work together.",
    },
    publications: {
      title: "Research",
      kicker: "Technical Depth Backed by Evidence",
      metaTitle: "Research",
      copy:
        "A substantial view of my research and technical writing, presented as evidence of analytical rigor, model validation, spatial reasoning, and data-product thinking.",
      notFoundTitle: "Publication analysis not found",
      notFoundCopy:
        "The requested publication analysis does not exist in this locale or has not been added yet. Return to the research overview to browse the available analyses.",
    },
    spotlights: {
      title: "Case Studies",
      kicker: "How I Build",
      metaTitle: "Case Studies",
      copy:
        "A more narrative look at how I approach product systems, data-heavy workflows, and technically demanding implementation work.",
    },
    projects: {
      title: "Projects",
      kicker: "Platforms, Products, Systems",
      metaTitle: "Projects",
      copy:
        "Representative work across full-stack engineering, climate and scientific data systems, B2B workflows, and geospatial platforms.",
    },
    profiles: {
      title: "External Profiles",
      kicker: "Public Track Record",
      metaTitle: "Profiles",
      copy:
        "Places where my code, research, publications, and professional profile are publicly visible and independently verifiable.",
    },
    contact: {
      title: "Contact",
      kicker: "Senior and Staff Opportunities",
      metaTitle: "Contact",
      copy:
        "If you are hiring for an engineering role that needs technical range, sound judgment, and the ability to operate in high-context environments, this is the right place to start.",
    },
    services: {
      title: "Leadership Fit",
      kicker: "How I Contribute",
      metaTitle: "Leadership Fit",
      copy:
        "The combination of engineering range, systems depth, analytical rigor, and communication strength that I would bring into the right team.",
    },
  },
};

export const content: SiteContent = {
  navItems: [
    { label: "nav.overview", to: "/" },
    { label: "nav.cv", to: "/cv" },
    { label: "nav.career", to: "/career" },
    { label: "nav.projects", to: "/projects" },
    { label: "nav.publications", to: "/publications" },
    { label: "nav.profiles", to: "/profiles" },
    { label: "nav.contact", to: "/contact" },
    { label: "nav.garden", to: "https://garden.benrlschmidt.de", external: true },
  ],
  profile: {
    name: "Dr. Benjamin Schmidt",
    headline: "Senior Full-Stack Engineer for Data-Intensive Products, Platforms, and Infrastructure",
    location: "Berlin, Germany",
    address: "10589 Berlin-Charlottenburg",
    phone: "Please contact via email",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "I build and lead software systems in environments where the technical context is unusually high. My core strength is turning complex workflows into working products, from Vue and Nuxt frontends through FastAPI, Django and Nuxt backends to automated data pipelines, analytics and visualization layers, storage-heavy systems, Linux administration, and HPC-adjacent hard- and sofware infrastructure. I am also an experienced climate-data and scientific communicator.",
    interests: [
      "Full-stack product engineering",
      "Data-intensive applications",
      "Workflow automation",
      "Infrastructure and storage systems",
    ],
    skills: [
      "Vue 3",
      "Nuxt",
      "TypeScript",
      "FastAPI",
      "Django",
      "Python",
      "PostgreSQL",
      "Docker",
      "Linux",
      "BeeGFS",
      "SaltStack",
      "Ansible",
      "Proxmox",
    ],
  },
  impactHighlights: [
    {
      icon: "mdi-layers-triple-outline",
      value: "8+ years",
      label: "Engineering in high-context domains",
      detail: "Built systems across research, climate, biotech, public-sector, and infrastructure-heavy environments.",
    },
    {
      icon: "mdi-web",
      value: "Multiple shipped products",
      label: "Full-stack delivery",
      detail: "Delivered production-style web platforms, public data portals, internal tools, APIs, dashboards, and reporting systems.",
    },
    {
      icon: "mdi-database-cog-outline",
      value: "Large-scale data",
      label: "Data engineering and analytics",
      detail: "Worked across netCDF, xarray, geospatial data, research metadata, sample workflows, and automated analytical pipelines.",
    },
    {
      icon: "mdi-server-network",
      value: "Infrastructure depth",
      label: "Storage, Linux, and HPC operations",
      detail: "Hands-on experience with distributed file systems, Linux systems administration, InfiniBand, and automation in research-compute contexts.",
    },
  ],
  careerStages: [
    {
      period: "02/2024 - Present",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Lead the scientific and data-facing side of Alganize while operating as a hands-on senior technical contributor across reporting, analytics, domain translation, product workflows, and applied software projects.",
      focusAreas: [
        "Own scientific and data strategy across customer-facing and internal product work",
        "Translate complex domain requirements into reporting, scoring, and software workflows",
        "Work across technical teams, scientific interpretation, and business communication",
      ],
    },
    {
      period: "2019 - Present",
      title: "Independent Engineer and Consultant",
      institution: "Selected scientific and applied-data clients",
      description:
        "Worked with research, public, and climate-related clients that needed technically strong implementation, data communication, and delivery in high-context environments.",
      focusAreas: [
        "Supported clients including farm-food-climate, Free University of Berlin, and Technical University of Berlin",
        "Delivered technical work spanning data analysis, software systems, research communication, and infrastructure-adjacent problem solving",
        "Operated effectively as a trusted contributor in specialist domains with limited hand-holding",
      ],
    },
    {
      period: "08/2019 - 02/2026",
      title: "Research Associate (PhD)",
      institution: "Technical University of Berlin, Climatology",
      description:
        "Built and led data-intensive software, climate-data engineering workflows, and platform-like systems in a highly technical research environment, spanning geospatial products, analysis pipelines, infrastructure, and stakeholder-facing tools.",
      focusAreas: [
        "Led MaRESS, a full-stack geospatial platform with map, graph, PDF/NLP, and PostGIS analysis workflows",
        "Built DARWIN climate-data tooling for netCDF processing, model validation, trend analysis, and reproducible analytics",
        "Delivered standards-backed data systems for [UC]² and UCO Berlin across validation, APIs, portals, and public data access",
      ],
    },
    {
      period: "10/2019 - 02/2026",
      title: "Lecturer",
      institution: "Free University of Berlin and Technical University of Berlin",
      description:
        "Designed and taught quantitative and programming-heavy courses, reinforcing strengths in communication, mentoring, systems thinking, and structured technical explanation.",
      focusAreas: [
        "Scientific programming, statistics, climatology, and remote sensing courses",
        "Taught mixed-background audiences how to reason about data and implementation",
        "Built clarity across technical, scientific, and interdisciplinary contexts",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Research Assistant",
      institution: "Potsdam Institute for Climate Impact Research (PIK), ISIMIP",
      description:
        "Built workflow and algorithmic foundations for counterfactual climate-data generation, strengthening my base in large-scale data processing and method-to-software implementation.",
      focusAreas: [
        "Implemented statistical tooling for large model and observation archives",
        "Worked on ATTRICI counterfactual climate-data workflows",
        "Contributed to technically rigorous, method-driven delivery",
      ],
    },
    {
      period: "02/2017 - 01/2019",
      title: "Student Research Assistant",
      institution: "Humboldt University of Berlin, Climate Geography",
      description:
        "Developed reproducible modeling and analysis workflows in a computational research setting, building execution discipline that later translated directly into software and data-platform work.",
      focusAreas: [
        "Worked with mesoscale modeling environments including COSMO-CLM",
        "Analyzed urban heat-wave projections and thermal-stress patterns",
        "Built reproducible workflows for technically demanding climate analysis",
      ],
    },
  ],
  publications: [
    {
      title: "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
      venue: "Technical University of Berlin",
      year: 2025,
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Doctoral dissertation on regional climate dynamics, water balance analysis, and multi-scale downscaling methodologies.",
      tags: ["Climate modeling", "Water balance", "Regional downscaling"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "The Central Europe Refined analysis version 2 (CER v2): evaluating three decades of high-resolution precipitation data for the Berlin-Brandenburg metropolitan region",
      venue: "Meteorologische Zeitschrift",
      year: 2025,
      kind: "Journal",
      authors: "Bart, F., Schmidt, B., Wang, X., Holtmann, A., Meier, F., Otto, M., Scherer, D.",
      summary:
        "Evaluation of a long-term high-resolution precipitation analysis and improved model configuration for the Berlin-Brandenburg region.",
      tags: ["Precipitation", "Regional climate", "Validation"],
      doi: "10.1127/metz/2024/1233",
      link: "https://doi.org/10.1127/metz/2024/1233",
    },
    {
      title: "Analysis of the Meso-Scale Climate of the Galápagos Archipelago by Dynamical Downscaling of Reanalysis Data",
      venue: "International Journal of Climatology",
      year: 2025,
      kind: "Journal",
      authors: "Schmidt, B., Turini, N., Otto, M., Delgado Maldonado, B., Bayas López, S. D., Bart, F., Holtmann, A., Bendix, J., Scherer, D.",
      summary:
        "Validation and analysis of a high-resolution dynamical downscaling product for the Galápagos Archipelago.",
      tags: ["Dynamical downscaling", "Reanalysis", "Galapagos"],
      doi: "10.1002/joc.8924",
      link: "https://doi.org/10.1002/joc.8924",
    },
    {
      title: "Sensitivity of Water Balance in the Qaidam Basin to the Mid-Pliocene Climate",
      venue: "Journal of Geophysical Research: Atmospheres",
      year: 2021,
      kind: "Journal",
      authors: "Wang, X., Schmidt, B., Otto, M., Ehlers, T. A., Mutz, S. G., Botsyun, S., Scherer, D.",
      summary:
        "Regional climate-modeling study of how circulation and topography alter basin-scale water balance under Mid-Pliocene climate conditions.",
      tags: ["Water balance", "Regional climate modeling", "Pliocene"],
      doi: "10.1029/2020JD033965",
      link: "https://doi.org/10.1029/2020JD033965",
    },
    {
      title: "The Spatio-Temporal Cloud Frequency Distribution in the Galapagos Archipelago as Seen from MODIS Cloud Mask Data",
      venue: "Atmosphere",
      year: 2023,
      kind: "Journal",
      authors: "Zander, S., Turini, N., Ballari, D., Bayas López, S. D., Célleri, R., Delgado Maldonado, B., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      summary:
        "Satellite-based analysis of how cloud frequency varies with topography, seasonality, and ENSO conditions across the Galápagos.",
      tags: ["MODIS", "Cloud frequency", "Remote sensing"],
      doi: "10.3390/atmos14081225",
      link: "https://doi.org/10.3390/atmos14081225",
    },
  ],
  publicationInsights: [
    {
      slug: "gar-trend-analysis",
      title: "Surface and Tropospheric Climatic Trends in the Galápagos Archipelago based on GAR",
      outlet: "PhD dissertation / GAR analysis",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "A trend analysis built on the high-resolution GAR dataset, separating short-term variability from longer-term atmospheric change in the Galápagos.",
      tags: ["Climate trends", "GAR", "Galapagos"],
      oneLiner:
        "Used a high-resolution regional climate dataset to separate strong year-to-year variability from more subtle long-term atmospheric changes.",
      findings: [
        "Strong year-to-year variability in temperature, humidity, and precipitation is dominated by ENSO-related anomalies.",
        "No statistically significant long-term trends were found in the key near-surface variables examined.",
        "Tropospheric layers still showed warming-related structural changes, including increasing layer thickness linked to rising potential temperature.",
      ],
      whyItMatters:
        "This work matters because it shows discipline in separating signal from noise in a climatically complex, data-sparse environment. That is exactly the same mindset needed in strong analytics and data-platform work.",
      recruiterTakeaway:
        "Demonstrates analytical rigor, careful validation, and the ability to draw reliable conclusions in systems with high uncertainty and strong temporal variability.",
      metrics: ["~4 km² GAR grid scale", "No significant near-surface trends", "Tropospheric warming signal identified"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      slug: "galapagos-downscaling",
      title: "Analysis of the Meso-Scale Climate of the Galápagos Archipelago by Dynamical Downscaling of Reanalysis Data",
      outlet: "International Journal of Climatology",
      published: "2025-11-15",
      kind: "Journal",
      authors: "Schmidt, B., Turini, N., Otto, M., Delgado Maldonado, B., Bayas López, S. D., Bart, F., Holtmann, A., Bendix, J., Scherer, D.",
      summary:
        "A validated high-resolution downscaling product for the Galápagos, built to create locally usable climate information from coarse reanalysis input.",
      tags: ["WRF", "Downscaling", "Validation"],
      doi: "10.1002/joc.8924",
      oneLiner:
        "Built and validated a high-resolution climate analysis pipeline that converts coarse global input into location-specific regional insight.",
      findings: [
        "The GAR dataset provides a mesoscale climate product tailored to a region with sparse and uneven observations.",
        "Validation showed very strong agreement for air temperature and specific humidity, and medium-to-strong agreement for daily precipitation.",
        "Observed spatial climate patterns across the islands depend strongly on altitude, with dry-season orographic precipitation and wet-season thermally driven convection.",
      ],
      whyItMatters:
        "This is foundational data-product work: not just running a model, but producing something reliable enough to support downstream science, planning, and interpretation in a difficult physical environment.",
      recruiterTakeaway:
        "Demonstrates system building, validation against real-world measurements, and the ability to turn raw computational output into a trustworthy analytical product.",
      metrics: ["2 km resolution", "2-hour temporal resolution", "WRF v4.3.3", "Validated against station observations"],
      link: "https://doi.org/10.1002/joc.8924",
    },
    {
      slug: "cer-v2-precipitation",
      title: "The Central Europe Refined analysis version 2 (CER v2): evaluating three decades of high-resolution precipitation data for the Berlin-Brandenburg metropolitan region",
      outlet: "Meteorologische Zeitschrift",
      published: "2025-02-10",
      kind: "Journal",
      authors: "Bart, F., Schmidt, B., Wang, X., Holtmann, A., Meier, F., Otto, M., Scherer, D.",
      summary:
        "A model-evaluation and improvement study showing how changes in forcing and model physics substantially improved long-term regional precipitation performance.",
      tags: ["CER v2", "Precipitation", "Validation"],
      doi: "10.1127/metz/2024/1233",
      oneLiner:
        "Improved a multi-decade regional precipitation analysis by systematically tuning model physics and benchmarking the result against observations.",
      findings: [
        "CER v2 substantially improved precipitation performance over the earlier CER configuration.",
        "The best-performing setup used Kain-Fritsch cumulus with Thompson microphysics.",
        "CER v2 outperformed both CER v1 and ERA5 in winter, spring, and autumn, while summer remained the hardest convective regime.",
      ],
      whyItMatters:
        "It shows honest, engineering-style iteration: tuning a system, benchmarking it properly, documenting what improved, and being explicit about what still fails under hard conditions.",
      recruiterTakeaway:
        "Demonstrates benchmark discipline, performance improvement under uncertainty, and the ability to improve long-lived technical systems with measured results.",
      metrics: ["30 years of validation", "94% lower annual median bias vs ERA5", "55% lower annual RMSD vs CER v1", "44-year dataset span"],
      link: "https://doi.org/10.1127/metz/2024/1233",
    },
    {
      slug: "qaidam-water-balance",
      title: "Sensitivity of Water Balance in the Qaidam Basin to the Mid-Pliocene Climate",
      outlet: "Journal of Geophysical Research: Atmospheres",
      published: "2021-08-27",
      kind: "Journal",
      authors: "Wang, X., Schmidt, B., Otto, M., Ehlers, T. A., Mutz, S. G., Botsyun, S., Scherer, D.",
      summary:
        "A regional climate-modeling study of why a basin-scale hydrological system behaved differently under a warmer climate analog.",
      tags: ["Water balance", "Pliocene", "Regional climate modeling"],
      doi: "10.1029/2020JD033965",
      oneLiner:
        "Used high-resolution regional climate modeling to explain how circulation and topography alter basin-scale water balance under warmer-world conditions.",
      findings: [
        "Mid-Pliocene climate forcing increased the basin's annual water balance relative to present-day conditions.",
        "The shift was driven by stronger moisture inflow across the western boundary and weaker moisture outflow across the eastern boundary.",
        "The mechanism links large-scale circulation changes with regional topographic control.",
      ],
      whyItMatters:
        "This work matters because it connects multiple scales of explanation, from broad circulation shifts to basin-level hydrology, which is exactly the kind of systems reasoning that transfers into advanced analytics and technical product work.",
      recruiterTakeaway:
        "Demonstrates multiscale reasoning, physically grounded analysis, and the ability to explain complex system behavior with technical precision.",
      metrics: ["Published in JGR Atmospheres", "Mid-Pliocene ~400 ppm CO2 context", "WRF downscaling of ECHAM5 forcing"],
      link: "https://doi.org/10.1029/2020JD033965",
    },
    {
      slug: "galapagos-cloud-frequency",
      title: "The Spatio-Temporal Cloud Frequency Distribution in the Galapagos Archipelago as Seen from MODIS Cloud Mask Data",
      outlet: "Atmosphere",
      published: "2023-07-29",
      kind: "Journal",
      authors: "Zander, S., Turini, N., Ballari, D., Bayas López, S. D., Célleri, R., Delgado Maldonado, B., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      summary:
        "A satellite-based study of how cloud frequency changes across terrain, season, altitude, and ENSO conditions in the Galápagos.",
      tags: ["MODIS", "Cloud frequency", "Remote sensing"],
      doi: "10.3390/atmos14081225",
      oneLiner:
        "Analyzed multi-scale cloud patterns to show how terrain, trade winds, and ENSO shape moisture regimes across the Galápagos.",
      findings: [
        "Cloud frequency varies strongly with season, year, terrain, and island position rather than behaving like a uniform regional signal.",
        "The highest cloud frequencies occur at mid-elevations on southeast-facing slopes exposed to the trade winds.",
        "ENSO conditions materially alter both overall cloudiness and the strength of topographic contrasts.",
      ],
      whyItMatters:
        "This is a strong example of terrain-aware remote-sensing analysis that connects observed spatial patterns back to physical climate drivers.",
      recruiterTakeaway:
        "Demonstrates remote-sensing fluency, geospatial reasoning, and the ability to derive meaningful structure from large observational datasets.",
      metrics: ["MODIS cloud mask data", "Distinct behavior above ~900 m", "El Niño 2015 vs La Niña 2007 comparisons"],
      link: "https://doi.org/10.3390/atmos14081225",
    },
  ],
  projects: [
    {
      name: "Alganize Status",
      role: "Chief Scientific Officer · technical and data leadership",
      status: "Active",
      timeframe: "2024 - Present",
      summary:
        "A production-minded B2B full-stack platform for soil-health and operational workflows, covering course management, sample lifecycles, reporting, health scoring, care recommendations, multilingual UX, CI/CD, and real deployment paths.",
      stack: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
      outcomes: [
        "Shipped a role-based product workflow from onboarding through reporting and document handling",
        "Designed health-score, sample, and recommendation flows around real operational use cases",
        "Worked across domain logic, product structure, analytics, and technical communication as CSO",
      ],
      link: "https://status.alganize.de",
    },
    {
      name: "MaRESS",
      role: "Lead engineer for product architecture and implementation",
      status: "Active",
      timeframe: "2023 - 2026",
      summary:
        "A full-stack geospatial research platform that ingests papers from Zotero, processes PDFs through NLP and OCR workflows, stores results in PostGIS, and supports interactive map and graph exploration plus export workflows.",
      stack: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "PostGIS", "Celery", "Redis"],
      outcomes: [
        "Owned architecture across frontend, backend, asynchronous processing, and spatial data workflows",
        "Built GIS features including region upload, buffering, clipping, and proximity-based spatial analysis",
        "Turned a complex research-discovery problem into a usable product-style platform",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "[UC]² Data Management System",
      role: "Full-stack engineer for validation, metadata, and access workflows",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "A standards-backed data management system for UC2 climate datasets, supporting upload, validation, metadata extraction, permissions, catalog search, and controlled download of netCDF-based data products.",
      stack: ["Vue 2", "Vuetify", "Django", "DRF", "Python", "NetCDF"],
      outcomes: [
        "Implemented standards-based ingestion and conformity checking for UC2 netCDF files",
        "Built permissioned metadata and download workflows for collaborating institutions",
        "Created a reliable validation and exchange layer for shared urban-climate data operations",
      ],
      link: "https://dms.klima.tu-berlin.de",
    },
    {
      name: "UCO Berlin",
      role: "Full-stack engineer for public portal, APIs, and live data views",
      status: "Completed",
      timeframe: "2020 - 2025",
      summary:
        "A public urban-climate data portal and API stack with searchable datasets, geospatial exploration, provider integrations, live views, radar products, and production-style SSR frontend delivery.",
      stack: ["Nuxt", "Vue 3", "Django", "DRF", "PostGIS", "OpenLayers", "Plotly"],
      outcomes: [
        "Shipped public-facing climate-data UX with map, table, metadata, and download workflows",
        "Integrated internal UC2 data and external providers into a normalized portal catalog",
        "Built live environmental monitoring and public API capabilities for a real observatory platform",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "DARWIN Climate Data Engineering",
      role: "Lead engineer for model-data processing and analytical tooling",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "A Python and xarray-based climate-data engineering toolkit for WRF/GAR processing, station remapping, trend analysis, model-validation workflows, derived variables, and publication-grade visual outputs.",
      stack: ["Python", "xarray", "netCDF", "CDO", "salem", "pandas", "NumPy", "SaltStack"],
      outcomes: [
        "Built reusable workflows for large climate-model archives and station-comparison tasks",
        "Automated post-processing, remapping, and trend-analysis workflows around netCDF data",
        "Supported validated analytical outputs and publication-ready climate products",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
  ],
  skillBadges: undefined,
  githubStats: undefined,
  cvAppointments: [
    {
      period: "02/2024 - Present",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlin",
      summary:
        "Lead Alganize's scientific and data-facing work while contributing directly to product logic, reporting, analytics, and technically complex software initiatives.",
      highlights: [
        "Own scientific and data strategy across customer-facing and internal projects",
        "Translate domain-heavy requirements into scoring, reporting, and product workflows",
        "Operate as a senior technical counterpart across analytics, product, and communication",
      ],
    },
    {
      period: "08/2019 - 02/2026",
      role: "Research Associate (PhD)",
      institution: "Technical University of Berlin, Climatology",
      location: "Berlin",
      summary:
        "Built and led full-stack platforms, climate-data engineering workflows, public data systems, and technically demanding analysis tooling across multiple long-running projects.",
      highlights: [
        "Led technical delivery across MaRESS, DARWIN, UC2 DMS, and UCO Berlin",
        "Worked across frontend, backend, geospatial data, analytics, and infrastructure concerns",
        "Turned specialist scientific workflows into usable systems, validated products, and reproducible pipelines",
        "Bridged implementation, data quality, publication work, and stakeholder communication",
      ],
    },
    {
      period: "2019 - Present",
      role: "Independent Engineer and Consultant",
      institution: "Selected scientific and applied-data clients",
      location: "Berlin",
      summary:
        "Provided technical delivery, data work, and communication support to clients operating in climate, science, and applied analytical contexts.",
      highlights: [
          "Worked with clients including farm-food-climate, Free University of Berlin, and Technical University of Berlin",
        "Supported software, analytics, and communication work in specialist environments",
        "Delivered effectively in roles that required autonomy, context absorption, and trusted execution",
      ],
    },
    {
      period: "10/2019 - Present",
      role: "Lecturer",
      institution: "FU Berlin and TU Berlin",
      location: "Berlin",
      summary:
        "Designed and taught technical courses in programming, statistics, climatology, and remote sensing for mixed-background audiences.",
      highlights: [
        "Built strong communication and mentoring capability through technical teaching",
        "Structured complex systems and methods into teachable workflows",
        "Reinforced the ability to explain difficult technical material clearly under different audience assumptions",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Research Assistant",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Implemented algorithmic tooling and large-scale data workflows for counterfactual climate-data generation.",
      highlights: [
        "Worked on ATTRICI workflows for counterfactual climate data",
        "Built reliable Python processing around large data archives",
        "Contributed to technically rigorous model and method implementation",
      ],
    },
  ],
  education: [
    {
      period: "04/2025",
      degree: "PhD (Dr. rer. nat.)",
      institution: "Technical University of Berlin",
      details:
        "Climatology, magna cum laude. Dissertation on regional dynamical downscaling, atmospheric trends, and water-balance analysis across multiple regions and timescales.",
    },
    {
      period: "03/2019",
      degree: "MSc in Global Change Geography",
      institution: "Humboldt University of Berlin",
      details:
        "Graduated with distinction (1.2). Included international field experience in Arctic seismic exploration at the University Centre in Svalbard.",
    },
    {
      period: "09/2016",
      degree: "BSc in Physics of the Earth System",
      institution: "CAU Kiel and GEOMAR",
      details: "Focus on meteorology, oceanography, and geophysics.",
    },
  ],
  honors: [
    {
      year: "2025",
      title: "PhD with magna cum laude",
      issuer: "Technical University of Berlin",
      description:
        "Doctoral distinction awarded for advanced work in regional climate modeling, downscaling, and hydrological analysis.",
    },
    {
      year: "2019",
      title: "MSc with distinction",
      issuer: "Humboldt University of Berlin",
      description: "Strong quantitative academic performance in an interdisciplinary and data-heavy field.",
    },
  ],
  certifications: [
    {
      title: "Certified BeeGFS System Engineer",
      issuer: "BeeGFS",
      description:
        "Formal certification covering BeeGFS architecture, configuration, and administration in performance-critical distributed storage environments.",
    },
  ],
  articleHistory: [
    {
      title: "Regional Dynamical Downscaling and Analysis of Water Balance Across Different Regions and Time Scales",
      outlet: "Technical University of Berlin",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary: "Doctoral dissertation documenting multi-scale downscaling and hydrological analysis methodology.",
      tags: ["Dissertation", "Climatology", "Hydrology"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
  ],
  blogPosts: [
    {
      slug: "building-maress",
      title: "Building MaRESS: geospatial search, graph exploration, and PDF-driven research workflows",
      date: "2025-02-12",
      readMinutes: 7,
      summary:
        "A look at how MaRESS combines geospatial UX, metadata enrichment, and graph-oriented exploration in one full-stack system.",
      tags: ["MaRESS", "Vue", "FastAPI", "PostGIS"],
      href: "https://www.nfdi4earth.de/2participate/incubator-lab",
      relatedArticles: [
        {
          title: "MaRESS: Mapping Research in Earth System Science",
          href: "https://www.nfdi4earth.de/2participate/incubator-lab",
        },
      ],
    },
    {
      slug: "darwin-pipelines",
      title: "From WRF output to validated climate analytics in DARWIN",
      date: "2024-09-20",
      readMinutes: 6,
      summary:
        "How xarray, netCDF workflows, remapping, and trend analysis become a reproducible analytical system rather than a pile of scripts.",
      tags: ["DARWIN", "xarray", "NetCDF", "Climate data"],
      href: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
      relatedArticles: [
        {
          title: "Analysis of the Meso-Scale Climate of the Galápagos Archipelago by Dynamical Downscaling of Reanalysis Data",
          href: "https://doi.org/10.1002/joc.8924",
        },
      ],
    },
  ],
  externalProfiles: [
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      description: "Code, implementation history, product experiments, and technical work.",
      category: "Code",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      description: "Persistent publication and research identity record.",
      category: "Academic",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      description: "Professional profile for recruiters, hiring managers, and leadership conversations.",
      category: "Professional",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      description: "Publication record and citation footprint.",
      category: "Academic",
    },
  ],
  services: [
    {
      title: "Own product systems end to end",
      icon: "mdi-monitor-dashboard",
      description:
        "I can move from architecture and data model decisions through backend, frontend, and user workflow design to the point where a complex product actually works for its users.",
    },
    {
      title: "Raise the level of technical execution",
      icon: "mdi-file-document-edit-outline",
      description:
        "I bring rigor around data quality, validation, reproducibility, operational thinking, and clear reasoning under complexity, which helps teams ship stronger systems with fewer blind spots.",
    },
    {
      title: "Translate complexity without diluting it",
      icon: "mdi-account-group-outline",
      description:
        "I am especially effective where engineering must work closely with domain experts, stakeholders, and high-context problem spaces without losing speed, precision, or credibility.",
    },
  ],
  infrastructure: [
    {
      title: "Distributed storage and BeeGFS",
      icon: "mdi-harddisk",
      description:
        "Certified BeeGFS System Engineer with hands-on familiarity around clustered storage design, metadata and storage targets, RAID choices, and operational trade-offs in research-compute environments.",
    },
    {
      title: "Linux systems administration and automation",
      icon: "mdi-console-network-outline",
      description:
        "Experienced with Linux administration, SaltStack- and Ansible-based automation, Proxmox environments, NixOS, and the kind of operational problem solving that sits close to real infrastructure rather than abstract platform diagrams.",
    },
    {
      title: "HPC networking and storage workflows",
      icon: "mdi-server-network",
      description:
        "Worked with InfiniBand, iSCSI concepts, ZFS, XFS, ext4, IPMI-adjacent operations, and storage/network reasoning in smaller HPC-like environments where performance and reliability both matter.",
    },
  ],
  selectedClients: [
    {
      name: "farm-food-climate",
      note: "Applied climate and data work in a stakeholder-driven context with strong communication requirements.",
    },
    {
      name: "Free University of Berlin",
      note: "Technical and analytical work in a demanding academic environment with mixed scientific and operational needs.",
    },
    {
      name: "Technical University of Berlin",
      note: "Software, analytics, and infrastructure-adjacent work spanning research, teaching, and platform development.",
    },
    {
      name: "Additional scientific and applied-data clients",
      note: "Worked as a trusted technical contributor in roles that required autonomy, technical range, and clear explanation under domain complexity.",
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
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "Inspect code and shipped systems",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "View recruiter-facing profile",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "Review publication record",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "See research track record",
    },
  ],
};
