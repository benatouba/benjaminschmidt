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
    name: "MaRESS: Plattform fur die Kartierung der Erdsystemforschung",
    status: "Active",
    timeframe: "2023 - heute",
    summary:
      "Bringt Publikationen der Erdsystemforschung in einer kombinierten Karten- und Graphansicht zusammen, damit Teams schneller relevante Forschung finden und vernetzen.",
    stack: ["Vue 3", "FastAPI", "PostgreSQL", "PostGIS", "OpenLayers", "Cytoscape.js"],
    outcomes: [
      "Interaktive Exploration von Orten, Themen und Beziehungen",
      "Schneller Zugriff auf verknupfte Forschungsmetadaten",
      "Wiederverwendbare Bausteine fur wissenschaftliche Webplattformen",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/maress",
  },
  {
    name: "ATTRICI: Toolkit fur kontrafaktische Klimadaten",
    status: "Completed",
    timeframe: "2019 - 2024",
    summary:
      "Ubersetzt publizierte Methoden fur kontrafaktische Klimadaten in reproduzierbare, praxistaugliche Software.",
    stack: ["Python", "PyMC", "NumPy", "pandas"],
    outcomes: [
      "Operative Umsetzung wissenschaftlicher Methoden",
      "Reproduzierbare Workflows fur kontrafaktische Datensatze",
      "Transparente Ergebnisse fur die Impact Attribution",
    ],
    link: "https://github.com/benatouba/attrici",
  },
  {
    name: "DARWIN Klimadaten-Analyse",
    status: "Completed",
    timeframe: "2019 - 2026",
    summary:
      "Verwandelt GAR- und DARWIN-Modellausgaben in robuste, analysefahige Klimadatensatze und Dashboard-Workflows.",
    stack: ["Python", "xarray", "pandas", "salem", "Panel"],
    outcomes: [
      "Automatisierte Verarbeitung grosser Modelldaten",
      "Analyse- und dashboardfahige Datensatze",
      "Verlassliche Grundlage fur Publikationen und Berichte",
    ],
    link: "https://gitlab.klima.tu-berlin.de/schmidt/darwin",
  },
  {
    name: "UC2 Datenaustausch und Standard-Tooling",
    status: "Completed",
    timeframe: "2019 - 2025",
    summary:
      "Standardisiert Validierung, Austausch und Verteilung von NetCDF-Daten im UC2-Format, inklusive DMS-API-Workflows.",
    stack: ["Python", "NetCDF", "Datenvalidierung", "API-Workflows"],
    outcomes: [
      "Konformitatsprufungen fur atmospharische Datensatze",
      "Automatisierte Upload- und Download-Prozesse fur Partnerteams",
      "Interoperabler Datenaustausch uber Institutionsgrenzen hinweg",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/uc2data",
  },
  {
    name: "UCO Berlin Partnerplattform",
    status: "Completed",
    timeframe: "2020 - 2025",
    summary:
      "Bietet partnerorientierten Zugang zu urbanen Klimadaten mit klaren Visualisierungen fur Kommunikation und Zusammenarbeit.",
    stack: ["Nuxt", "Django", "Geospatiales Web-Tooling", "NetCDF"],
    outcomes: [
      "Partnerfreundliche Datenzugangsoberflache",
      "Klar strukturierte Visualisierungs-Workflows",
      "Bessere Kommunikation zwischen Fachteam und Stakeholdern",
    ],
    link: "https://uco.berlin/en",
  },
  {
    name: "Alganize Frontend",
    status: "Active",
    timeframe: "2024 - heute",
    summary:
      "Entwickelt ein produktnahes Frontend fur biotechnologische und umweltbezogene Daten-Workflows mit Fokus auf Nutzbarkeit und Reporting.",
    stack: ["Nuxt", "Vue", "TypeScript"],
    outcomes: [
      "Strukturierte User Journeys fur datengetriebene Ablaufe",
      "Transparente Analyse- und Reporting-Ansichten",
      "Wartbare Frontend-Architektur",
    ],
    link: "https://github.com/benatouba/alganize",
  },
  {
    name: "Alganize Backend",
    status: "Active",
    timeframe: "2024 - heute",
    summary:
      "Baut robuste Backend-Services fur Datenmanagement, Nutzer-Workflows und produktionsnahes Reporting in wissenschaftlichen Anwendungen.",
    stack: ["Django", "PostgreSQL", "Docker", "Python"],
    outcomes: [
      "Skalierbare API- und Datendienste",
      "Fundament fur Authentifizierung und Nutzerverwaltung",
      "Zuverlassige Reporting-Schnittstellen",
    ],
    link: "https://github.com/benatouba/alganize_back",
  },
  {
    name: "Alganize Soilmonitor Plattform",
    status: "Active",
    timeframe: "2025 - heute",
    summary:
      "Vereint Monitoring und Analyse von Stations- und Bodendaten in einer Full-Stack-Plattform fur den operativen Einsatz.",
    stack: ["FastAPI", "Vue 3", "PostgreSQL", "Docker"],
    outcomes: [
      "Operative Monitoring-Dashboards",
      "Analyse-Workflows fur Stations- und Bodendaten",
      "Einheitliches Frontend-Backend-Deployment",
    ],
    link: "https://github.com/benatouba/alganize-soilmonitor",
  },
  {
    name: "benjaminschmidt.de Website",
    status: "Active",
    timeframe: "2025 - heute",
    summary:
      "Prasentiert Projekte, Publikationen, CV und Kontakt in einer klaren, mehrsprachigen Profil-Website fur wissenschaftliche Sichtbarkeit.",
    stack: ["Vue 3", "TypeScript", "Vuetify", "Vite", "vue-i18n"],
    outcomes: [
      "Kompakte Darstellung von Projekten und Ergebnissen",
      "Integrierte Profile und Kontaktwege",
      "Wartbare mehrsprachige Inhaltsstruktur",
    ],
    link: "https://github.com/benatouba/benjaminschmidt",
  },
];

export const projectCatalogEs: ResearchProject[] = [
  {
    name: "MaRESS: Plataforma para mapear la investigacion del sistema terrestre",
    status: "Active",
    timeframe: "2023 - actualidad",
    summary:
      "Integra publicaciones del sistema terrestre en una experiencia combinada de mapa y grafo para acelerar el descubrimiento cientifico y la colaboracion.",
    stack: ["Vue 3", "FastAPI", "PostgreSQL", "PostGIS", "OpenLayers", "Cytoscape.js"],
    outcomes: [
      "Exploracion interactiva de ubicaciones, temas y relaciones",
      "Acceso agil a metadatos de investigacion conectados",
      "Componentes reutilizables para plataformas web cientificas",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/maress",
  },
  {
    name: "ATTRICI: Toolkit de datos climaticos contrafactuales",
    status: "Completed",
    timeframe: "2019 - 2024",
    summary:
      "Convierte metodos publicados de datos climaticos contrafactuales en software reproducible y listo para uso aplicado.",
    stack: ["Python", "PyMC", "NumPy", "pandas"],
    outcomes: [
      "Implementacion operativa de metodos publicados",
      "Flujos reproducibles de datos contrafactuales",
      "Resultados transparentes para atribucion de impacto",
    ],
    link: "https://github.com/benatouba/attrici",
  },
  {
    name: "Analitica de datos climaticos DARWIN",
    status: "Completed",
    timeframe: "2019 - 2026",
    summary:
      "Transforma salidas de modelos GAR y DARWIN en datasets climaticos robustos y listos para analisis y paneles.",
    stack: ["Python", "xarray", "pandas", "salem", "Panel"],
    outcomes: [
      "Procesamiento automatizado de grandes volumenes de datos",
      "Conjuntos listos para analisis y paneles",
      "Base confiable para publicaciones e informes",
    ],
    link: "https://gitlab.klima.tu-berlin.de/schmidt/darwin",
  },
  {
    name: "Intercambio de datos UC2 y herramientas de estandarizacion",
    status: "Completed",
    timeframe: "2019 - 2025",
    summary:
      "Estandariza validacion, intercambio y distribucion de archivos NetCDF bajo UC2, incluidos flujos de API del DMS.",
    stack: ["Python", "NetCDF", "Validacion de datos", "Flujos de API"],
    outcomes: [
      "Controles de conformidad para datos atmosfericos",
      "Automatizacion de cargas y descargas para equipos asociados",
      "Intercambio interoperable entre instituciones",
    ],
    link: "https://gitlab.klima.tu-berlin.de/klima/uc2data",
  },
  {
    name: "Plataforma de socios UCO Berlin",
    status: "Completed",
    timeframe: "2020 - 2025",
    summary:
      "Ofrece acceso orientado a socios y visualizaciones claras de datos climaticos urbanos para comunicar resultados y colaborar mejor.",
    stack: ["Nuxt", "Django", "Tooling web geoespacial", "NetCDF"],
    outcomes: [
      "Interfaz de acceso pensada para socios",
      "Visualizaciones claras para clima urbano",
      "Comunicacion de proyecto mas efectiva con stakeholders",
    ],
    link: "https://uco.berlin/en",
  },
  {
    name: "Frontend de Alganize",
    status: "Active",
    timeframe: "2024 - actualidad",
    summary:
      "Desarrolla una interfaz de producto para flujos de datos biotecnologicos y ambientales, priorizando usabilidad y reporting.",
    stack: ["Nuxt", "Vue", "TypeScript"],
    outcomes: [
      "Recorridos de usuario estructurados",
      "Vistas transparentes de analisis e informes",
      "Arquitectura frontend mantenible",
    ],
    link: "https://github.com/benatouba/alganize",
  },
  {
    name: "Backend de Alganize",
    status: "Active",
    timeframe: "2024 - actualidad",
    summary:
      "Construye servicios backend solidos para gestion de datos, flujos de usuario y reporting en productos cientificos aplicados.",
    stack: ["Django", "PostgreSQL", "Docker", "Python"],
    outcomes: [
      "Servicios API y de datos escalables",
      "Base para autenticacion y gestion de usuarios",
      "Capas de reporting confiables",
    ],
    link: "https://github.com/benatouba/alganize_back",
  },
  {
    name: "Plataforma Alganize Soilmonitor",
    status: "Active",
    timeframe: "2025 - actualidad",
    summary:
      "Unifica monitoreo y analisis de datos de estaciones y suelo en una plataforma full-stack para operacion diaria.",
    stack: ["FastAPI", "Vue 3", "PostgreSQL", "Docker"],
    outcomes: [
      "Paneles de monitoreo operativo",
      "Flujos de analisis para estaciones y suelo",
      "Despliegue unificado de frontend y backend",
    ],
    link: "https://github.com/benatouba/alganize-soilmonitor",
  },
  {
    name: "Sitio web benjaminschmidt.de",
    status: "Active",
    timeframe: "2025 - actualidad",
    summary:
      "Presenta proyectos, publicaciones, CV y contacto en un sitio multilingue disenado para visibilidad profesional.",
    stack: ["Vue 3", "TypeScript", "Vuetify", "Vite", "vue-i18n"],
    outcomes: [
      "Presentacion clara de proyectos y resultados",
      "Perfiles y vias de contacto integrados",
      "Estructura de contenido multilingue mantenible",
    ],
    link: "https://github.com/benatouba/benjaminschmidt",
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
