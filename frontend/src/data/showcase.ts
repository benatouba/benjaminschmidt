import type { GitHubStatCard, ResearchProject, SkillBadge } from "@/types/site";

export const projectCatalogEn: ResearchProject[] = [
  {
    name: "MaRESS: Earth System Research Mapping Platform",
    status: "Active",
    timeframe: "2023 - 2026",
    summary:
      "Maps Earth system publications on interactive map and graph interfaces to improve discovery and collaboration.",
    stack: ["Vue 3", "FastAPI", "PostgreSQL", "PostGIS", "OpenLayers", "Cytoscape.js"],
    outcomes: [
      "Interactive map and graph exploration",
      "Searchable research metadata workflows",
      "Reusable tooling for scientific web platforms",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/maress",
  },
  {
    name: "ATTRICI: Counterfactual Climate Data Toolkit",
    status: "Completed",
    timeframe: "2019 - 2024",
    summary:
      "Implements counterfactual climate workflows for impact attribution based on probabilistic modeling methods.",
    stack: ["Python", "PyMC", "NumPy", "pandas"],
    outcomes: [
      "Operational implementation of published methods",
      "Reproducible counterfactual data workflows",
      "Transparent climate impact attribution tooling",
    ],
    link: "https://github.com/benatouba/attrici",
  },
  {
    name: "DARWIN Climate Data Analytics",
    status: "Completed",
    timeframe: "2019 - 2026",
    summary:
      "Turns GAR and DARWIN model outputs into robust, analysis-ready climate data and dashboard workflows.",
    stack: ["Python", "xarray", "pandas", "salem", "Panel"],
    outcomes: [
      "Automated transformation of model output",
      "Analysis and dashboard-ready datasets",
      "Support for publication and reporting pipelines",
    ],
    link: "https://gitlab.klima.tu-berlin.de/schmidt/darwin",
  },
  {
    name: "UC2 Data Exchange and Standard Tooling",
    status: "Completed",
    timeframe: "2019 - 2025",
    summary:
      "Handles, validates, and exchanges NetCDF datasets in the UC2 standard, including DMS API workflows.",
    stack: ["Python", "NetCDF", "Data validation", "API workflows"],
    outcomes: [
      "Conformity checks for atmospheric datasets",
      "Upload and download automation for partner workflows",
      "Interoperable data exchange across project teams",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/uc2data",
  },
  {
    name: "UCO Berlin Partner Platform",
    status: "Completed",
    timeframe: "2020 - 2025",
    summary:
      "Provides partner-facing urban climate data access and visualization for communication and collaboration.",
    stack: ["Nuxt", "Django", "Geospatial web tooling", "NetCDF"],
    outcomes: [
      "Partner-oriented data access interface",
      "Visualization workflows for urban climate data",
      "Improved project communication across stakeholders",
    ],
    link: "https://uco.berlin/en",
  },
];

export const projectCatalogDe: ResearchProject[] = [
  {
    name: "MaRESS: Platform zur Kartierung der Erdsystemforschung",
    status: "Active",
    timeframe: "2023 - 2026",
    summary:
      "Kartiert Publikationen der Erdsystemforschung in interaktiven Karten- und Graphansichten, um Auffindbarkeit und Zusammenarbeit zu verbessern.",
    stack: ["Vue 3", "FastAPI", "PostgreSQL", "PostGIS", "OpenLayers", "Cytoscape.js"],
    outcomes: [
      "Interactive Karten- und Graphenexploration",
      "Durchsuchbare Workflows für Forschungsmetadaten",
      "Wiederverwendbare Bausteine für wissenschaftliche Webplattformen",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/maress",
  },
  {
    name: "ATTRICI: Toolkit für kontrafaktische Klimadaten",
    status: "Completed",
    timeframe: "2019 - 2024",
    summary:
      "Implementiert kontrafaktische Klima-Workflows für die Impact Attribution auf Basis probabilistischer Modellierung.",
    stack: ["Python", "PyMC", "NumPy", "pandas"],
    outcomes: [
      "Operative Umsetzung publizierter Methods",
      "Reproduzierbare Workflows für kontrafaktische Datensätze",
      "Transparente Werkzeuge für die Klima-Impact-Attribution",
    ],
    link: "https://github.com/benatouba/attrici",
  },
  {
    name: "DARWIN Klimadaten-Analyse",
    status: "Completed",
    timeframe: "2019 - 2026",
    summary:
      "Überführt GAR- und DARWIN-Modelldaten in robuste, analysefertige Klimadaten und Dashboard-Workflows.",
    stack: ["Python", "xarray", "pandas", "salem", "Panel"],
    outcomes: [
      "Automatisierte Transformation von Modelldaten",
      "Analyse- und dashboardfähige Datensätze",
      "Unterstützung für Publikations- und Reporting-Pipelines",
    ],
    link: "https://gitlab.klima.tu-berlin.de/schmidt/darwin",
  },
  {
    name: "UC2 Datenaustausch und Standard-Tooling",
    status: "Completed",
    timeframe: "2019 - 2025",
    summary:
      "Verarbeitet, validiert und tauscht NetCDF-Datensätze im UC2-Standard aus, inklusive DMS-API-Workflows.",
    stack: ["Python", "NetCDF", "Datenvalidierung", "API-Workflows"],
    outcomes: [
      "Konformitätsprüfungen für atmosphärische Datensätze",
      "Automatisierte Upload- und Download-Prozesse für Partnerteams",
      "Interoperabler Datenaustausch zwischen Projektteams",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/uc2data",
  },
  {
    name: "UCO Berlin Partnerplattform",
    status: "Completed",
    timeframe: "2020 - 2025",
    summary:
      "Bietet partnerorientierten Zugang zu urbanen Klimadaten und Visualisierungen für Kommunikation und Zusammenarbeit.",
    stack: ["Nuxt", "Django", "Geospatial Web Tooling", "NetCDF"],
    outcomes: [
      "Partnerorientierte Datenzugangsoberfläche",
      "Visualisierungs-Workflows für urbane Klimadaten",
      "Verbesserte Projektkommunikation mit Stakeholdern",
    ],
    link: "https://uco.berlin/en",
  },
];

export const projectCatalogEs: ResearchProject[] = [
  {
    name: "MaRESS: Plataforma de mapeo de investigación del sistema terrestre",
    status: "Active",
    timeframe: "2023 - 2026",
    summary:
      "Mapea publicaciones del sistema terrestre en interfaces interactivas de mapas y grafos para mejorar el descubrimiento y la colaboración.",
    stack: ["Vue 3", "FastAPI", "PostgreSQL", "PostGIS", "OpenLayers", "Cytoscape.js"],
    outcomes: [
      "Exploración interactiva de mapas y grafos",
      "Flujos de metadatos de investigación con búsqueda",
      "Herramientas reutilizables para plataformas web científicas",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/maress",
  },
  {
    name: "ATTRICI: Toolkit de datos climáticos contrafactuales",
    status: "Completed",
    timeframe: "2019 - 2024",
    summary:
      "Implementa flujos climáticos contrafactuales para la atribución de impacto, basados en modelado probabilístico.",
    stack: ["Python", "PyMC", "NumPy", "pandas"],
    outcomes: [
      "Implementación operativa de métodos publicados",
      "Flujos reproducibles de datos contrafactuales",
      "Herramientas transparentes para atribución de impacto climático",
    ],
    link: "https://github.com/benatouba/attrici",
  },
  {
    name: "Analítica de datos climáticos DARWIN",
    status: "Completed",
    timeframe: "2019 - 2026",
    summary:
      "Convierte salidas de modelos GAR y DARWIN en datos climáticos robustos, listos para análisis y dashboards.",
    stack: ["Python", "xarray", "pandas", "salem", "Panel"],
    outcomes: [
      "Transformación automatizada de salidas de modelo",
      "Conjuntos listos para análisis y dashboards",
      "Soporte para pipelines de publicación y reporting",
    ],
    link: "https://gitlab.klima.tu-berlin.de/schmidt/darwin",
  },
  {
    name: "Intercambio de datos UC2 y tooling de estándares",
    status: "Completed",
    timeframe: "2019 - 2025",
    summary:
      "Gestiona, valida e intercambia datasets NetCDF bajo el estándar UC2, incluyendo flujos de API de DMS.",
    stack: ["Python", "NetCDF", "Validacion de datos", "Flujos API"],
    outcomes: [
      "Controles de conformidad para datos atmosféricos",
      "Automatización de subida y descarga para equipos asociados",
      "Intercambio interoperable entre equipos del proyecto",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/uc2data",
  },
  {
    name: "Plataforma de socios UCO Berlin",
    status: "Completed",
    timeframe: "2020 - 2025",
    summary:
      "Ofrece acceso y visualización de datos climáticos urbanos orientados a socios para comunicación y colaboración.",
    stack: ["Nuxt", "Django", "Tooling web geoespacial", "NetCDF"],
    outcomes: [
      "Interfaz de acceso a datos orientada a socios",
      "Flujos de visualización para clima urbano",
      "Mejor comunicación del proyecto con stakeholders",
    ],
    link: "https://uco.berlin/en",
  },
];

export const skillBadgeCatalog: SkillBadge[] = [
  {
    label: "Python",
    image:
      "https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=white",
    href: "https://www.python.org/",
  },
  {
    label: "FastAPI",
    image:
      "https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white",
    href: "https://fastapi.tiangolo.com/",
  },
  {
    label: "Django",
    image:
      "https://img.shields.io/badge/Django-092e20?style=flat-square&logo=django&logoColor=white",
    href: "https://www.djangoproject.com/",
  },
  {
    label: "Vue 3",
    image:
      "https://img.shields.io/badge/Vue%203-42b883?style=flat-square&logo=vuedotjs&logoColor=white",
    href: "https://vuejs.org/",
  },
  {
    label: "Nuxt",
    image:
      "https://img.shields.io/badge/Nuxt-00dc82?style=flat-square&logo=nuxtdotjs&logoColor=white",
    href: "https://nuxt.com/",
  },
  {
    label: "TypeScript",
    image:
      "https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white",
    href: "https://www.typescriptlang.org/",
  },
  {
    label: "PostgreSQL",
    image:
      "https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
    href: "https://www.postgresql.org/",
  },
  {
    label: "PostGIS",
    image:
      "https://img.shields.io/badge/PostGIS-336791?style=flat-square&logo=postgresql&logoColor=white",
    href: "https://postgis.net/",
  },
  {
    label: "Docker",
    image:
      "https://img.shields.io/badge/Docker-2496ed?style=flat-square&logo=docker&logoColor=white",
    href: "https://www.docker.com/",
  },
  {
    label: "Nix",
    image: "https://img.shields.io/badge/Nix-5277c3?style=flat-square&logo=nixos&logoColor=white",
    href: "https://nixos.org/",
  },
  {
    label: "Linux",
    image: "https://img.shields.io/badge/Linux-fcc624?style=flat-square&logo=linux&logoColor=black",
    href: "https://kernel.org/",
  },
  {
    label: "R",
    image: "https://img.shields.io/badge/R-276dc3?style=flat-square&logo=r&logoColor=white",
    href: "https://www.r-project.org/",
  },
  {
    label: "xarray",
    image: "https://img.shields.io/badge/xarray-4d4d4d?style=flat-square",
    href: "https://docs.xarray.dev/",
  },
  {
    label: "pandas",
    image:
      "https://img.shields.io/badge/pandas-150458?style=flat-square&logo=pandas&logoColor=white",
    href: "https://pandas.pydata.org/",
  },
  {
    label: "NumPy",
    image: "https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white",
    href: "https://numpy.org/",
  },
  {
    label: "NetCDF",
    image: "https://img.shields.io/badge/NetCDF-005f99?style=flat-square",
    href: "https://www.unidata.ucar.edu/software/netcdf/",
  },
];

export const githubStatCards: GitHubStatCard[] = [
  {
    title: "GitHub stats",
    image:
      "https://github-readme-stats.vercel.app/api?username=benatouba&show_icons=true&hide_border=true&rank_icon=github&theme=transparent",
    href: "https://github.com/benatouba",
  },
  {
    title: "Top languages",
    image:
      "https://github-readme-stats.vercel.app/api/top-langs/?username=benatouba&layout=compact&hide_border=true&langs_count=8&theme=transparent",
    href: "https://github.com/benatouba",
  },
  {
    title: "GitHub streak",
    image: "https://streak-stats.demolab.com?user=benatouba&hide_border=true&theme=transparent",
    href: "https://github.com/benatouba",
  },
];
