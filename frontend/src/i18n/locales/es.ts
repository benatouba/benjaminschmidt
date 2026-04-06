import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Inicio",
    cv: "CV",
    career: "Carrera",
    publications: "Escritura",
    spotlights: "Spotlights",
    projects: "Proyectos",
    profiles: "Perfiles",
    contact: "Contacto",
    services: "Servicios",
    ariaLabel: "Navegación principal",
  },
  hero: {
    eyebrow: "Científico · Ingeniero · Desarrollador",
    viewPublications: "Ver escritura",
    openCv: "Abrir CV",
    readBlog: "Spotlights",
    researchFocus: "Enfoque investigador",
    currentInterests: "Áreas de interés actuales",
    currentInterestsDetail:
      "Modelado climático regional para Galápagos con foco en la dinámica de precipitación y balance hídrico, ingeniería integral de grandes conjuntos de datos climáticos (procesamiento, control de calidad, análisis y visualización) y desarrollo de software de investigación full-stack que hace los datos ambientales complejos reproducibles, explorables y útiles para la toma de decisiones.",
    coreStrengths: "Competencias clave",
    orcidLabel: "ORCID",
  },
  cv: {
    heading: "Currículum Vitae",
    professionalAppointments: "Cargos profesionales",
    education: "Formación",
    awardsAndHonors: "Premios y distinciones",
  },
  career: {
    heading: "Carrera científica",
  },
  publications: {
    heading: "Publicaciones y escritura",
    read: "Leer",
    doi: "DOI",
    filterAll: "Todas",
    kinds: {
      Journal: "Revista",
      Conference: "Conferencia",
      Preprint: "Preprint",
      "Book Chapter": "Capítulo de libro",
      Thesis: "Tesis",
      "Technical Report": "Informe técnico",
    },
  },
  articles: {
    open: "Abrir",
    kinds: {
      Article: "Artículo",
      Interview: "Entrevista",
      Editorial: "Editorial",
      Review: "Reseña",
      Thesis: "Tesis",
      "Technical Report": "Informe técnico",
    },
  },
  spotlights: {
    heading: "Proyecto Spotlights",
    relatedArticles: "Artículos relacionados",
    viewProject: "Ver proyecto",
  },
  projects: {
    heading: "Proyectos de investigación",
    stack: "Tecnologías",
    outcomes: "Resultados",
    viewProject: "Ver proyecto",
    status: {
      Active: "Activo",
      Planning: "En planificación",
      Completed: "Completado",
    },
  },
  skills: {
    heading: "Kit técnico",
    copy: "Un resumen compacto de tecnologías que uso en software científico, plataformas de datos y flujos de trabajo reproducibles.",
  },
  github: {
    heading: "Actividad en GitHub",
  },
  profiles: {
    heading: "Perfiles vinculados",
    visitProfile: "Visitar perfil",
    comingSoon: "Próximamente",
    categories: {
      Academic: "Académico",
      Code: "Código",
      Professional: "Profesional",
      Personal: "Personal",
    },
  },
  services: {
    kicker: "Servicios",
    heading: "Lo que puedo hacer por ti",
  },
  contact: {
    kicker: "Contacto",
    heading: "Construyamos algo juntos.",
    copy: "Abierto a colaboraciones de investigación, roles de ingeniería, consultoría y charlas invitadas en ciencia intensiva en datos y software.",
    openProfile: "Abrir perfil",
    comingSoon: "Próximamente",
  },
  footer: {
    copyright: "© {year} Dr. Benjamin Schmidt",
    location: "Berlín, Alemania",
    builtWith: "Construido con Vue 3, TypeScript y Vuetify.",
    tagline: "Científico investigador e ingeniero full-stack",
  },
  pages: {
    cv: { title: "Currículum Vitae", kicker: "Trayectoria profesional", metaTitle: "CV" },
    career: { title: "Carrera científica", kicker: "Cronología académica", metaTitle: "Carrera" },
    publications: { title: "Publicaciones y escritura", kicker: "Trabajos seleccionados", metaTitle: "Publicaciones" },
    spotlights: { title: "Proyecto Spotlights", kicker: "Detrás de los proyectos", metaTitle: "Spotlights" },
    projects: { title: "Proyectos de investigación", kicker: "Software e iniciativas", metaTitle: "Proyectos" },
    profiles: { title: "Perfiles vinculados", kicker: "Cuentas e identidad", metaTitle: "Perfiles" },
    contact: { title: "Contacto", kicker: "Colaboración", metaTitle: "Contacto" },
    services: { title: "Servicios", kicker: "Ofertas profesionales", metaTitle: "Servicios" },
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
  ],
  profile: {
    name: "Dr. Benjamin Schmidt",
    headline: "Científico investigador e ingeniero full-stack",
    location: "Berlín, Alemania",
    address: "10589 Berlin-Charlottenburg",
    phone: "+49 (0) 171 8036920",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "Transformo conjuntos de datos climáticos y ambientales complejos en plataformas de investigación listas para producción — desarrollando aplicaciones web full-stack, pipelines de datos automatizados y ciencia revisada por pares.",
    interests: [
      "Ciencia de datos climáticos y ambientales",
      "Flujos de trabajo computacionales reproducibles",
      "Aplicaciones web científicas",
      "Prácticas de investigación abiertas y transparentes",
    ],
    skills: [
      "Python",
      "R",
      "TypeScript",
      "Vue 3",
      "FastAPI",
      "Linux",
      "Analítica de big data",
      "Administración de sistemas",
      "Escritura científica",
    ],
  },
  careerStages: [
    {
      period: "08/2019 - 02/2026",
      title: "Investigador asociado (doctorado)",
      institution: "Technische Universitat Berlin, Climatología",
      description:
        "Dirigió proyectos de investigación climática y del sistema terrestre y desarrolló plataformas de software intensivas en datos para análisis, visualización y flujos de publicación.",
      focusAreas: [
        "Plataforma web MaRESS (Vue, FastAPI, PostGIS)",
        "Pipelines y dashboards de datos climáticos DARWIN",
        "Estándares y herramientas UC2 para datos climáticos urbanos",
      ],
    },
    {
      period: "10/2019 - actualidad",
      title: "Docente",
      institution: "Freie Universitat Berlin y Technische Universitat Berlin",
      description:
        "Diseñó e impartió cursos de estadística, climatología, programación científica y análisis de datos de teledetección.",
      focusAreas: ["Estadística con R", "Programación científica", "Comunicación investigadora"],
    },
    {
      period: "02/2024 - actualidad",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Consultoría en comunicación científica y análisis de datos en flujos de trabajo biotecnológicos, con enfoque en datos de estaciones de series temporales e informes robustos.",
      focusAreas: [
        "Consultoría BioTech",
        "Análisis de series temporales",
        "Comunicación científica",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Asistente de investigación",
      institution: "Instituto Potsdam para la Investigación del Impacto Climático (PIK), ISIMIP",
      description:
        "Desarrolló flujos de trabajo de datos climáticos contrafactuales y herramientas estadísticas para conjuntos de datos climáticos a gran escala.",
      focusAreas: ["Algoritmo ATTRICI", "Datos climáticos contrafactuales", "Python"],
    },
    {
      period: "02/2017 - 01/2019",
      title: "Asistente de investigación estudiantil",
      institution: "Humboldt-Universitat zu Berlin, Geografía Climática",
      description:
        "Investigó proyecciones de olas de calor y patrones espaciales de estrés térmico en Berlín mediante modelado de mesoescala.",
      focusAreas: [
        "COSMO-CLM",
        "Proyecciones climáticas urbanas",
        "Procesamiento y análisis de datos",
      ],
    },
  ],
  publications: [
    {
      title:
        "Downscaling dinámico regional y análisis del balance hídrico en diferentes regiones y escalas temporales",
      venue: "Technische Universitat Berlin",
      year: 2025,
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Tesis doctoral sobre dinámica climática regional, análisis del balance hídrico y metodologías de downscaling multiescala.",
      tags: ["Modelado climático", "Balance hídrico", "Downscaling regional"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "MaRESS: Mapeo de la investigación en ciencias del sistema terrestre",
      venue: "NFDI4Earth Incubator Lab",
      year: 2025,
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Plataforma web y herramientas basadas en grafos para la exploración, análisis y visualización de metadatos de investigación en ciencias del sistema terrestre.",
      tags: ["Vue", "FastAPI", "PostGIS", "NLP"],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      title: "Estándar de datos climáticos urbanos",
      venue: "Programa [UC]2",
      year: 2024,
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Especificación y guía de implementación para el manejo estandarizado de conjuntos de datos atmosféricos NetCDF en proyectos de clima urbano.",
      tags: ["NetCDF", "Estándares de datos", "Clima urbano"],
      link: "https://uc2-program.org/sites/default/files/inline-files/uc2_datenstandard.pdf",
    },
    {
      title: "ATTRICI: Construcción de datos climáticos contrafactuales",
      venue: "ISIMIP",
      year: 2023,
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Marco algorítmico para la generación de conjuntos de datos climáticos contrafactuales a partir de archivos históricos.",
      tags: ["Datos climáticos", "Análisis contrafactual", "Python"],
      link: "https://isi-mip.github.io/attrici/attrici.html",
    },
  ],
  projects: [
    {
      name: "MaRESS: Plataforma de mapeo de investigación del sistema terrestre",
      status: "Active",
      timeframe: "2023 - 2026",
      summary:
        "Desarrollo de una plataforma web rica en datos para la visualización y exploración de metadatos y relaciones en ciencias del sistema terrestre.",
      stack: ["Vue.js", "FastAPI", "OpenLayers", "Cytoscape.js", "PostgreSQL", "PostGIS"],
      outcomes: [
        "Interfaz interactiva de mapas y grafos",
        "Flujos de trabajo de metadatos buscables",
        "Herramientas web científicas reutilizables",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "DARWIN: Dinámica de la precipitación en transición",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "Gestión y análisis de datos de modelos atmosféricos de alto volumen para estudiar la dinámica de fuentes de precipitación bajo cambio climático en las Galápagos.",
      stack: ["pandas", "xarray", "NumPy", "Matplotlib", "Plotly", "Panel", "Proxmox", "SaltStack"],
      outcomes: [
        "Pipelines automatizados de datos climáticos",
        "Análisis basado en dashboards",
        "Publicaciones revisadas por pairs",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
    {
      name: "[UC]2 Clima urbano bajo cambio",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "Construcción de infraestructura de gestión de datos y visualización para estudios de clima urbano, incluyendo herramientas web y estándares de datos.",
      stack: ["Django", "Nuxt", "NetCDF", "Python"],
      outcomes: [
        "Plataforma de visualización UCO Berlin",
        "Flujos de intercambio de datos compartidos",
        "Estándares de datos a nivel de proyecto",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "Q-TiP Análisis climático",
      status: "Completed",
      timeframe: "2020 - 2024",
      summary:
        "Modelado y análisis de conjuntos de datos climatológicos para dinámicas de puntos de inflexión en sistemas lacustres de Asia Central.",
      stack: ["WRF", "Python", "Análisis científico de datos"],
      outcomes: [
        "Evaluaciones climáticas basadas en modelos",
        "Contribuciones a publicaciones",
        "Flujos de análisis reutilizables",
      ],
    },
  ],
  cvAppointments: [
    {
      period: "08/2019 - 02/2026",
      role: "Investigador asociado (doctorado)",
      institution: "Technische Universitat Berlin, Climatología",
      location: "Berlín",
      summary:
        "Desarrollo de flujos de trabajo climáticos intensivos en datos y aplicaciones web científicas, coordinando resultados de investigación listos para publicación.",
      highlights: [
        "Plataforma MaRESS de mapeo del sistema terrestre",
        "Análisis de datos climáticos DARWIN y dashboards",
        "Estándares de datos UC2 y herramientas UCO Berlin",
        "Modelado climático HPC y escritura de publicaciones",
      ],
    },
    {
      period: "02/2024 - actualidad",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlín",
      summary:
        "Asesoramiento a equipos biotecnológicos en comunicación científica y análisis de series temporales climáticas.",
      highlights: [
        "Consultoría científica para estudios aplicados",
        "Análisis de series temporales de datos de estaciones climáticas",
        "Colaboración interdisciplinaria con equipos técnicos",
      ],
    },
    {
      period: "10/2019 - actualidad",
      role: "Docente",
      institution: "FU Berlin y TU Berlin",
      location: "Berlín",
      summary:
        "Enseñanza de cursos cuantitativos y orientados a la programación para investigación ambiental y basada en datos.",
      highlights: [
        "Estadística 101 y Estadística con R",
        "Climatología y Atmósfera Urbana",
        "Programación Científica y Análisis de Teledetección",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Asistente de investigación",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Desarrollo de algoritmos para la generación de datos climáticos contrafactuales a partir de grandes conjuntos de datos.",
      highlights: [
        "Diseño y aplicación del algoritmo ATTRICI",
        "Procesamiento de datos climáticos a gran escala en Python",
        "Apoyo a los entregables del proyecto ISI-CFACT",
      ],
    },
    {
      period: "02/2017 - 01/2019",
      role: "Asistente de investigación estudiantil",
      institution: "Humboldt-Universitat zu Berlin",
      location: "Berlín",
      summary:
        "Análisis de la dinámica de olas de calor urbanas y proyecciones climáticas con enfoques de modelado de mesoescala.",
      highlights: [
        "Flujos de trabajo del modelo COSMO-CLM",
        "Estudios de proyección climática urbana",
        "Análisis espacial y temporal del estrés térmico",
      ],
    },
  ],
  education: [
    {
      period: "04/2025",
      degree: "Doctorado (Dr. rer. nat.)",
      institution: "Technische Universitat Berlin",
      details:
        "Climatología, calificación magna cum laude. Tesis sobre downscaling dinámico regional y balance hídrico en diferentes regiones y escalas temporales.",
    },
    {
      period: "03/2019",
      degree: "MSc en Geografía del Cambio Global",
      institution: "Humboldt-Universitat zu Berlin",
      details:
        "Calificación 1,2. Incluye experiencia de campo internacional en exploración sísmica ártica en el University Centre in Svalbard.",
    },
    {
      period: "09/2016",
      degree: "BSc en Física del Sistema Terrestre",
      institution: "CAU Kiel y GEOMAR",
      details: "Enfoque en meteorología, oceanografía y geofísica. Calificación 2,2.",
    },
    {
      period: "06/2008",
      degree: "Abitur",
      institution: "Freie Waldorfschule Flensburg",
      details:
        "Calificación 1,8 con enfoque en matemáticas y geografía; semestre en el extranjero en Pretoria.",
    },
  ],
  honors: [
    {
      year: "2025",
      title: "Doctorado con Magna cum Laude",
      issuer: "Technische Universitat Berlin",
      description:
        "Título doctoral otorgado por trabajo en downscaling climático regional y análisis hidrológico.",
    },
    {
      year: "2019",
      title: "MSc con distinción",
      issuer: "Humboldt-Universitat zu Berlin",
      description: "Título en Geografía del Cambio Global completado con calificación 1,2.",
    },
    {
      year: "2008",
      title: "Abitur con mérito alto",
      issuer: "Freie Waldorfschule Flensburg",
      description:
        "Educación secundaria completada con calificación 1,8 y experiencia de estudio internacional.",
    },
  ],
  articleHistory: [
    {
      title:
        "Downscaling dinámico regional y análisis del balance hídrico en diferentes regiones y escalas temporales",
      outlet: "Technische Universitat Berlin",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Tesis doctoral que documenta la metodología de downscaling climático regional multiescala y análisis hidrológico.",
      tags: ["Tesis", "Climatología", "Hidrología"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "Plataforma MaRESS de mapeo de ciencias del sistema terrestre",
      outlet: "NFDI4Earth Incubator Lab",
      published: "2025-01-01",
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Resumen de proyecto de una plataforma web lista para producción para análisis basado en mapas y grafos de datos de investigación del sistema terrestre.",
      tags: ["Informe técnico", "Plataforma web", "Ciencias del sistema terrestre"],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      title: "Estándar de datos [UC]2 para datos atmosféricos NetCDF",
      outlet: "Programa [UC]2",
      published: "2024-01-01",
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Define flujos de trabajo estandarizados para la gestión, intercambio y análisis de conjuntos de datos atmosféricos de clima urbano.",
      tags: ["Estándar de datos", "NetCDF", "Clima urbano"],
      link: "https://uc2-program.org/sites/default/files/inline-files/uc2_datenstandard.pdf",
    },
    {
      title: "Flujo de trabajo ATTRICI de datos climáticos contrafactuales",
      outlet: "ISIMIP",
      published: "2019-07-01",
      kind: "Technical Report",
      authors: "Schmidt, B. et al.",
      summary:
        "Documentación técnica y notas metodológicas sobre la generación de conjuntos de datos climáticos contrafactuales a partir de archivos históricos.",
      tags: ["Datos climáticos", "Algoritmo", "ISIMIP"],
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
        "Muestra cómo la variabilidad local de la temperatura superficial del mar modula la ocurrencia de lluvias intensas en el archipiélago de Galápagos.",
      tags: ["Galápagos", "Lluvia intensa", "Temperatura superficial del mar"],
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
        "Presenta un análisis climático de mesoescala del archipiélago de Galápagos mediante downscaling dinámico de datos de reanálisis.",
      tags: ["Downscaling dinámico", "Reanálisis", "Galápagos"],
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
        "Evalúa productos satelitales de nubes y demuestra la necesidad de ajustes locales para la zonación nubosa ecoclimática en Galápagos.",
      tags: ["Productos satelitales", "Zonación nubosa", "Galápagos"],
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
        "Evalúa tres décadas de datos de precipitación de alta resolución para la región metropolitana de Berlín-Brandeburgo con CER v2.",
      tags: ["Precipitación", "Berlín-Brandeburgo", "Análisis regional"],
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
        "Analiza patrones espacio-temporales de frecuencia de nubosidad en el archipiélago de Galápagos usando datos de máscara de nubes MODIS.",
      tags: ["MODIS", "Frecuencia de nubes", "Galápagos"],
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
        "Investiga cómo un forzamiento térmico de mesoescala elevado influye en procesos atmosféricos de microescala en un barrio de Berlín.",
      tags: ["Clima urbano", "Berlín", "Forzamiento de mesoescala"],
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
        "Examina la sensibilidad del balance hídrico en la cuenca de Qaidam bajo condiciones climáticas del Plioceno medio.",
      tags: ["Balance hídrico", "Cuenca de Qaidam", "Plioceno medio"],
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
        "Versión preprint que detalla la sensibilidad modelada del balance hídrico de la cuenca de Qaidam al forzamiento climático del Plioceno medio.",
      tags: ["Preprint", "Balance hídrico", "Cuenca de Qaidam"],
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
        "Contribución de congreso sobre cambios de largo plazo en el balance hídrico de la cuenca de Qaidam desde el Plioceno hasta hoy.",
      tags: ["Conferencia", "Balance hídrico", "Cuenca de Qaidam"],
      link: "https://doi.org/10.5194/egusphere-egu2020-20666",
    },
  ],
  blogPosts: [
    {
      slug: "building-maress",
      title: "Construyendo MaRESS: Conectando datos espaciales y grafos de conocimiento",
      date: "2025-02-12",
      readMinutes: 7,
      summary:
        "Reflexiones sobre el diseño de una plataforma web científica que combina exploración de datos geoespaciales con contexto basado en grafos.",
      tags: ["MaRESS", "Vue", "FastAPI", "PostGIS"],
      href: "https://github.com/benatouba/maress",
      relatedArticles: [
        {
          title: "Plataforma MaRESS de mapeo de ciencias del sistema terrestre",
          href: "https://www.nfdi4earth.de/2participate/incubator-lab",
        },
      ],
    },
    {
      slug: "climate-data-pipelines-darwin",
      title: "Diseñando pipelines de datos climáticos para DARWIN",
      date: "2024-09-20",
      readMinutes: 6,
      summary:
        "Cómo transformar grandes datos de simulación NetCDF en productos reproducibles listos para el análisis y dashboards.",
      tags: ["DARWIN", "NetCDF", "xarray", "Reproducibilidad"],
      href: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
      relatedArticles: [
        {
          title:
            "Downscaling dinámico regional y análisis del balance hídrico en diferentes regiones y escalas temporales",
          href: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
        },
      ],
    },
    {
      slug: "teaching-data-literacy",
      title: "Enseñando alfabetización de datos en cursos de clima y geografía",
      date: "2024-04-08",
      readMinutes: 5,
      summary:
        "Enfoques prácticos para enseñar estadística reproducible y programación a cohortes estudiantiles interdisciplinarias.",
      tags: ["Enseñanza", "R", "Programación científica"],
      relatedArticles: [
        {
          title: "Portafolio de cursos: Estadística, Programación Científica y Atmósfera Urbana",
        },
      ],
    },
  ],
  externalProfiles: [
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      description:
        "Repositorios de código abierto, herramientas de investigación y demos reproducibles.",
      category: "Code",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      description:
        "Identificador persistente de investigador y registro de metadatos de publicaciones.",
      category: "Academic",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      description: "Perfil professional, colaboraciones y actividades de ponencias.",
      category: "Professional",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      description: "Perfil de citaciones y resumen del impacto de publicaciones.",
      category: "Academic",
    },
  ],
  services: [
    {
      title: "Desarrollo full-stack",
      icon: "mdi-monitor-dashboard",
      audience: "Startups, laboratorios de investigación y equipos de ingeniería",
      description:
        "Desarrollo integral de aplicaciones web ricas en datos y APIs — desde diseño de bases de datos y servicios backend hasta frontends interactivos con mapas, grafos y dashboards.",
      ctaLabel: "Iniciar un proyecto",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Ingeniería de datos y pipelines",
      icon: "mdi-file-document-edit-outline",
      audience: "Equipos que manejan datos a gran escala o científicos",
      description:
        "Diseño e implementación de flujos de procesamiento de datos automatizados, pipelines ETL e infraestructura de análisis — construidos para reproducibilidad y escala.",
      ctaLabel: "Discutir necesidades de datos",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Investigación y consultoría científica",
      icon: "mdi-account-group-outline",
      audience: "Grupos de investigación, BioTech y CleanTech",
      description:
        "Consultoría en comunicación científica, análisis estadístico, flujos de trabajo de datos climáticos y estrategia de publicación — uniendo ciencia de dominio e ingeniería de software.",
      ctaLabel: "Reservar una consulta",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
  ],
  contactLinks: [
    {
      label: "Correo",
      href: "mailto:benjamin.schmidt@tu-berlin.de",
      icon: "mdi-email-outline",
      sublabel: "Envia correo",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "Ver publicaciones",
    },
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "Abrir perfil",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "Abrir perfil",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "Abrir perfil",
    },
  ],
};
