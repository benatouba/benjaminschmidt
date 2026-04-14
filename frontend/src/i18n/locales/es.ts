import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Inicio",
    cv: "CV",
    career: "Experiencia",
    publications: "Investigación",
    spotlights: "Casos",
    projects: "Proyectos",
    profiles: "Perfiles",
    contact: "Contacto",
    services: "Liderazgo técnico",
    garden: "Jardín",
    ariaLabel: "Navegación principal",
  },
  hero: {
    eyebrow: "Senior Full-Stack Engineering · Plataformas de datos · Infraestructura",
    viewProjects: "Ver proyectos",
    openCv: "Abrir CV",
    contactMe: "Contactarme",
    researchFocus: "En qué estoy ahora",
    currentInterests: "Qué estoy entregando hoy",
    currentInterestsDetail:
      "En Alganize lidero el frente científico y de datos del negocio y al mismo tiempo sigo trabajando directamente en flujos de producto, informes, analítica y ejecución. Más allá de eso, construyo productos y plataformas intensivos en datos sobre frontends Vue/Nuxt, backends FastAPI/Django e infraestructura Linux y cercana a HPC, especialmente en contextos donde hacen falta profundidad técnica y comunicación clara al mismo tiempo.",
    coreStrengths: "Stack principal",
    availability: "Abierto a roles senior o staff a tiempo completo",
    orcidLabel: "ORCID",
  },
  impact: {
    kicker: "Prueba",
    heading: "Un perfil basado en sistemas entregados, no en frases vacías",
    copy:
      "La señal más fuerte que puedo ofrecer a responsables de contratación y líderes técnicos es amplitud con evidencia: ejecución full-stack, trabajo profundo con datos, criterio de infraestructura y capacidad para convertir dominios complejos en sistemas confiables.",
  },
  clients: {
    kicker: "Clientes seleccionados",
    heading: "Confianza en entornos científicos, públicos y aplicados",
    copy:
      "Además de mis roles institucionales, he trabajado con clientes de investigación, clima y análisis aplicado que necesitaban ejecución técnica sólida y comunicación clara bajo restricciones reales.",
  },
  infrastructure: {
    kicker: "Profundidad técnica",
    heading: "Experiencia en sistemas, almacenamiento y HPC que la mayoría de perfiles full-stack no tienen",
    copy:
      "Mi trabajo no termina en la capa de aplicación. También tengo experiencia práctica en administración Linux, almacenamiento distribuido, automatización y entornos cercanos a HPC, incluyendo BeeGFS, InfiniBand, SaltStack y operaciones con Proxmox.",
  },
  publicationHighlights: {
    kicker: "Analítica validada",
    heading: "Investigación como evidencia de profundidad técnica, disciplina de validación y pensamiento sistémico",
    copy:
      "Estas publicaciones no están aquí como adorno académico. Sirven para mostrar que puedo construir sistemas analíticos, validarlos frente a observaciones reales, cuantificar incertidumbre con rigor y explicar qué significan realmente los resultados.",
    openDetail: "Abrir análisis detallado",
    viewAll: "Ver todos los análisis de publicaciones",
  },
  publicationDetail: {
    openSource: "Abrir publicación",
    openDoi: "Abrir DOI",
    mainFindings: "Hallazgos principales",
    whyItMatters: "Por qué importa",
    recruiterTakeaway: "Qué demuestra",
    keyMetrics: "Métricas y datos clave",
    backToPublications: "Volver a todos los análisis de publicaciones",
  },
  cv: {
    kicker: "Perfil profesional",
    heading: "CV",
    copy:
      "Un resumen compacto y útil para selección y contratación de la experiencia más relevante para roles senior y staff en entornos de producto, plataforma, datos e infraestructura.",
    download: "Descargar CV (PDF)",
    profileTitle: "Posicionamiento actual",
    professionalAppointments: "Experiencia",
    education: "Formación",
    awardsAndHonors: "Distinciones académicas",
    certifications: "Certificaciones",
    selectedClients: "Clientes seleccionados",
  },
  career: {
    kicker: "Experiencia",
    heading: "Roles en los que entregué sistemas, lideré trabajo técnico y traduje dominios complejos en software",
    copy:
      "El hilo conductor de mi trayectoria no es una academia estrecha, sino la responsabilidad técnica en entornos intensivos en datos y conocimiento especializado, donde ingeniería, criterio y comunicación importan al mismo tiempo.",
  },
  publications: {
    kicker: "Investigación y profundidad técnica",
    heading: "Análisis detallados de mis publicaciones",
    copy:
      "Una lectura más profunda del trabajo detrás de la lista de publicaciones: qué encontró cada estudio, por qué importa y qué muestra sobre mis fortalezas técnicas y analíticas.",
    read: "Leer análisis detallado",
    doi: "DOI",
    filterAll: "Todas",
    empty: "Ningún análisis de publicaciones coincide con el filtro actual.",
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
    heading: "Casos",
    relatedArticles: "Trabajo relacionado",
    viewProject: "Abrir caso",
  },
  projects: {
    kicker: "Proyectos seleccionados",
    heading: "Productos, plataformas y sistemas que realmente construí",
    copy:
      "La versión más sólida de mi perfil es concreta: plataformas geoespaciales, sistemas B2B, portales de datos, ingeniería de datos climáticos e infraestructura basada en estándares para flujos complejos.",
    stack: "Tecnologías",
    outcomes: "Qué entregué",
    viewProject: "Abrir proyecto",
    status: {
      Active: "Activo",
      Planning: "En planificación",
      Completed: "Completado",
    },
  },
  skills: {
    heading: "Kit técnico",
    copy: "Un resumen compacto de tecnologías que uso en software científico, plataformas de datos y flujos reproducibles.",
  },
  github: {
    heading: "Actividad en GitHub",
  },
  profiles: {
    heading: "Perfiles externos",
    visitProfile: "Abrir perfil",
    comingSoon: "Próximamente",
    categories: {
      Academic: "Académico",
      Code: "Código",
      Professional: "Profesional",
      Personal: "Personal",
    },
  },
  services: {
    kicker: "Liderazgo técnico",
    heading: "Cómo contribuyo a nivel senior y staff",
    copy:
      "Rindo mejor en roles que necesitan a un ingeniero senior muy práctico y con amplitud real: criterio de producto, ejecución en backend y frontend, profundidad en datos y analítica, y suficiente comprensión de infraestructura para tomar decisiones arquitectónicas sólidas.",
  },
  contact: {
    kicker: "Contacto",
    heading: "¿Están buscando un perfil senior o staff para un entorno complejo?",
    copy:
      "Si el rol se mueve entre producto, datos, plataforma y comunicación técnica, vale la pena hablar. Soy especialmente útil donde la complejidad es real y aun así los sistemas tienen que salir adelante.",
    primaryCta: "Escribirme por una vacante",
    secondaryCta: "Revisar mi CV",
    openProfile: "Abrir perfil",
    comingSoon: "Próximamente",
  },
  footer: {
    copyright: "© {year} Dr. Benjamin Schmidt",
    location: "Berlín, Alemania",
    builtWith: "Construido con Vue 3, TypeScript y Vuetify.",
    tagline: "Senior Full-Stack Engineer | Plataformas de datos, infraestructura y sistemas complejos",
  },
  pages: {
    cv: {
      title: "CV",
      kicker: "Perfil senior/staff de ingeniería",
      metaTitle: "CV",
      copy:
        "Un resumen práctico de la experiencia en software, datos, infraestructura, comunicación y liderazgo que puedo aportar en roles senior y staff.",
    },
    career: {
      title: "Experiencia",
      kicker: "Liderazgo, ejecución y amplitud técnica",
      metaTitle: "Experiencia",
      copy:
        "Una vista por rol de cómo lideré trabajo técnico, construí sistemas y operé en entornos donde software, conocimiento especializado y comunicación tenían que funcionar juntos.",
    },
    publications: {
      title: "Investigación",
      kicker: "Profundidad técnica con evidencia sólida",
      metaTitle: "Investigación",
      copy:
        "Una lectura sustancial de mi investigación y escritura técnica presentada como evidencia de rigor analítico, validación de modelos, razonamiento espacial y mentalidad de producto de datos.",
      notFoundTitle: "Análisis de publicación no encontrado",
      notFoundCopy:
        "El análisis de publicación solicitado no existe en este idioma o todavía no se ha añadido. Vuelve a la vista general de investigación para revisar los análisis disponibles.",
    },
    spotlights: {
      title: "Casos",
      kicker: "Cómo construyo",
      metaTitle: "Casos",
      copy:
        "Una mirada más narrativa a cómo abordo sistemas de producto, flujos intensivos en datos e implementaciones técnicamente exigentes.",
    },
    projects: {
      title: "Proyectos",
      kicker: "Plataformas, productos, sistemas",
      metaTitle: "Proyectos",
      copy:
        "Trabajo representativo en ingeniería full-stack, sistemas de datos climáticos y científicos, flujos B2B y plataformas geoespaciales.",
    },
    profiles: {
      title: "Perfiles externos",
      kicker: "Trayectoria pública verificable",
      metaTitle: "Perfiles",
      copy:
        "Lugares donde mi código, mi investigación, mis publicaciones y mi perfil profesional son visibles y verificables públicamente.",
    },
    contact: {
      title: "Contacto",
      kicker: "Oportunidades senior y staff",
      metaTitle: "Contacto",
      copy:
        "Si están contratando para un rol de ingeniería que requiere amplitud técnica, criterio y responsabilidad end-to-end, este es el punto correcto para empezar.",
    },
    services: {
      title: "Liderazgo técnico",
      kicker: "Cómo contribuyo",
      metaTitle: "Liderazgo técnico",
      copy:
        "La combinación de amplitud técnica, profundidad de sistemas, rigor analítico y capacidad de comunicación que aportaría al equipo adecuado.",
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
    headline: "Senior Full-Stack Engineer para productos, plataformas e infraestructura intensivos en datos",
    location: "Berlín, Alemania",
    address: "10589 Berlin-Charlottenburg",
    phone: "Por favor, contáctame por correo electrónico",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "Construyo y lidero sistemas de software en entornos con un nivel de complejidad técnica poco habitual. Mi principal fortaleza es convertir flujos complejos en productos funcionales, desde frontends con Vue y Nuxt hasta backends con FastAPI y Django, pasando por pipelines automatizados de datos, capas de analítica y visualización, sistemas intensivos en almacenamiento, administración Linux e infraestructura cercana a HPC. Además, tengo amplia experiencia comunicando datos climáticos y científicos.",
    interests: [
      "Ingeniería full-stack orientada a producto",
      "Aplicaciones intensivas en datos",
      "Automatización de flujos de trabajo",
      "Infraestructura de sistemas y almacenamiento",
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
      value: "8+ años",
      label: "Ingeniería en dominios complejos",
      detail: "Construyendo sistemas en investigación, clima, biotecnología, portales públicos de datos y entornos intensivos en infraestructura.",
    },
    {
      icon: "mdi-web",
      value: "Varios productos entregados",
      label: "Ejecución full-stack",
      detail: "Entregué plataformas web, portales públicos de datos, herramientas internas, APIs, dashboards y sistemas de reporting con orientación real a producción.",
    },
    {
      icon: "mdi-database-cog-outline",
      value: "Datos de gran escala",
      label: "Ingeniería y analítica de datos",
      detail: "Trabajé con netCDF, xarray, datos geoespaciales, metadatos de investigación, flujos de muestras y pipelines analíticos automatizados.",
    },
    {
      icon: "mdi-server-network",
      value: "Profundidad en infraestructura",
      label: "Almacenamiento, Linux y operación HPC",
      detail: "Experiencia práctica con sistemas de archivos distribuidos, administración Linux, InfiniBand y automatización en contextos de cómputo científico.",
    },
  ],
  careerStages: [
    {
      period: "02/2024 - actualidad",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Lidero la parte científica y orientada a datos de Alganize y al mismo tiempo actúo como colaborador técnico senior en informes, analítica, traducción de requisitos de dominio, lógica de producto y proyectos de software aplicados.",
      focusAreas: [
        "Responsabilidad sobre estrategia científica y de datos en proyectos internos y orientados a clientes",
        "Traducción de requisitos complejos de dominio en flujos de scoring, reporting y producto",
        "Trabajo entre equipos técnicos, interpretación científica y comunicación de negocio",
      ],
    },
    {
      period: "2019 - actualidad",
      title: "Ingeniero y consultor independiente",
      institution: "Clientes científicos y de datos seleccionados",
      description:
        "Trabajé con clientes de investigación, instituciones públicas y contextos climáticos que necesitaban ejecución técnica confiable, trabajo con datos y comunicación clara en entornos con alta complejidad de dominio.",
      focusAreas: [
        "Trabajé con clientes como farm-food-climate, Freie Universität Berlin y Technische Universität Berlin",
        "Entregué trabajo técnico en la intersección de software, analítica, comunicación científica e infraestructura",
        "Funcioné con autonomía en roles con poco contexto inicial y alta exigencia técnica",
      ],
    },
    {
      period: "08/2019 - 02/2026",
      title: "Investigador asociado (doctorado)",
      institution: "Technische Universität Berlin, Climatología",
      description:
        "Construí y lideré software intensivo en datos, flujos de ingeniería de datos climáticos y sistemas tipo plataforma en un entorno de investigación altamente técnico, desde productos geoespaciales hasta analítica, infraestructura y herramientas orientadas a usuarios.",
      focusAreas: [
        "Lideré MaRESS como plataforma geoespacial full-stack con mapas, grafos, procesamiento PDF/NLP y análisis sobre PostGIS",
        "Desarrollé herramientas DARWIN para procesamiento netCDF, validación de modelos, análisis de tendencias y analítica climática reproducible",
        "Entregué sistemas de datos basados en estándares para [UC]² y UCO Berlin en validación, APIs, portales y acceso público a datos",
      ],
    },
    {
      period: "10/2019 - 02/2026",
      title: "Docente",
      institution: "Freie Universität Berlin y Technische Universität Berlin",
      description:
        "Diseñé e impartí cursos cuantitativos y de programación intensiva, reforzando mi fortaleza en comunicación, mentoring, pensamiento sistémico y explicación técnica estructurada.",
      focusAreas: [
        "Docencia en programación científica, estadística, climatología y teledetección",
        "Formación de audiencias con perfiles mixtos",
        "Creación de claridad en contextos interdisciplinares y técnicamente exigentes",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Asistente de investigación",
      institution: "Instituto Potsdam para la Investigación del Impacto Climático (PIK), ISIMIP",
      description:
        "Construí bases algorítmicas y de workflows para datos climáticos contrafactuales, fortaleciendo mi base en procesamiento de grandes archivos y en convertir métodos en software útil.",
      focusAreas: [
        "Trabajé en flujos ATTRICI para datos climáticos contrafactuales",
        "Desarrollé procesamiento fiable en Python sobre archivos de gran escala",
        "Contribuí a implementaciones técnicas basadas en métodos rigurosos",
      ],
    },
  ],
  publications: [
    {
      title: "Downscaling dinámico regional y análisis del balance hídrico en diferentes regiones y escalas temporales",
      venue: "Technische Universität Berlin",
      year: 2025,
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Tesis doctoral sobre dinámica climática regional, análisis del balance hídrico y metodologías de downscaling multiescala.",
      tags: ["Modelado climático", "Balance hídrico", "Downscaling regional"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "The Central Europe Refined analysis version 2 (CER v2): evaluating three decades of high-resolution precipitation data for the Berlin-Brandenburg metropolitan region",
      venue: "Meteorologische Zeitschrift",
      year: 2025,
      kind: "Journal",
      authors: "Bart, F., Schmidt, B., Wang, X., Holtmann, A., Meier, F., Otto, M., Scherer, D.",
      summary:
        "Evaluación de una reanálisis regional de precipitación de alta resolución y de una configuración de modelo mejorada para Berlín-Brandeburgo.",
      tags: ["Precipitación", "Clima regional", "Validación"],
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
        "Validación y análisis de un producto de downscaling de alta resolución para el archipiélago de Galápagos.",
      tags: ["Downscaling dinámico", "Reanálisis", "Galápagos"],
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
        "Estudio de modelado climático regional sobre cómo la circulación y la topografía modifican el balance hídrico de una cuenca bajo un clima más cálido del pasado.",
      tags: ["Balance hídrico", "Modelado climático regional", "Plioceno"],
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
        "Análisis basado en satélite de cómo cambia la frecuencia de nubes según topografía, estación y condiciones ENSO en Galápagos.",
      tags: ["MODIS", "Frecuencia de nubes", "Teledetección"],
      doi: "10.3390/atmos14081225",
      link: "https://doi.org/10.3390/atmos14081225",
    },
  ],
  publicationInsights: [
    {
      slug: "gar-trend-analysis",
      title: "Tendencias climáticas superficiales y troposféricas en Galápagos a partir de GAR",
      outlet: "Tesis / análisis GAR",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Un análisis de tendencias basado en el conjunto GAR de alta resolución, orientado a separar la variabilidad interanual de los cambios atmosféricos de largo plazo.",
      tags: ["Tendencias climáticas", "GAR", "Galápagos"],
      oneLiner:
        "Usé un conjunto regional de alta resolución para separar la variabilidad fuerte de un año a otro de cambios atmosféricos más sutiles y persistentes.",
      findings: [
        "La variabilidad anual de temperatura, humedad y precipitación está fuertemente dominada por ENSO.",
        "No se detectaron tendencias significativas de largo plazo en las principales variables de superficie analizadas.",
        "Aun así, la troposfera mostró cambios estructurales asociados al calentamiento, incluida una mayor espesura de capas vinculada al aumento de la temperatura potencial.",
      ],
      whyItMatters:
        "Este trabajo importa porque muestra disciplina para separar señal y ruido en un entorno climático complejo y con escasez de datos. Esa misma mentalidad es clave en analítica robusta y en productos de datos serios.",
      recruiterTakeaway:
        "Demuestra rigor analítico, validación cuidadosa y capacidad para sacar conclusiones fiables en sistemas con alta incertidumbre y fuerte variabilidad temporal.",
      metrics: ["Resolución GAR de ~4 km²", "Sin tendencias significativas en superficie", "Señal de calentamiento troposférico identificada"],
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
        "Un producto de downscaling validado de alta resolución para Galápagos, diseñado para convertir reanálisis globales en información climática local útil.",
      tags: ["WRF", "Downscaling", "Validación"],
      doi: "10.1002/joc.8924",
      oneLiner:
        "Construí y validé una canalización de análisis climático de alta resolución que traduce entrada global gruesa en información regional específica y usable.",
      findings: [
        "El conjunto GAR proporciona un producto climático mesoscalar adaptado a una región con observaciones escasas y desiguales.",
        "La validación mostró concordancia muy fuerte para temperatura del aire y humedad específica, y de media a fuerte para precipitación diaria.",
        "Los patrones espaciales del clima dependen fuertemente de la altitud, con precipitación orográfica en la estación seca y convección térmica en la húmeda.",
      ],
      whyItMatters:
        "Es trabajo fundacional de producto de datos: no solo ejecutar un modelo, sino construir algo lo bastante fiable como para servir de base a análisis, planificación e interpretación.",
      recruiterTakeaway:
        "Demuestra capacidad de construir sistemas, validarlos frente a mediciones reales y convertir salida computacional en un producto analítico de confianza.",
      metrics: ["Resolución de 2 km", "Resolución temporal de 2 horas", "WRF v4.3.3", "Validado con observaciones de estaciones"],
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
        "Un estudio de evaluación y mejora de modelo que muestra cómo cambios en el forcing y en la física del modelo mejoraron una reanálisis regional de precipitación de largo plazo.",
      tags: ["CER v2", "Precipitación", "Validación"],
      doi: "10.1127/metz/2024/1233",
      oneLiner:
        "Mejoré una reanálisis regional de precipitación a varias décadas mediante ajustes sistemáticos de física y comparación rigurosa con observaciones.",
      findings: [
        "CER v2 mejoró de forma clara el rendimiento de precipitación frente a la configuración CER anterior.",
        "La mejor configuración combinó convección Kain-Fritsch con microfísica Thompson.",
        "CER v2 superó a CER v1 y ERA5 en invierno, primavera y otoño, mientras que el verano siguió siendo el régimen convectivo más difícil.",
      ],
      whyItMatters:
        "Muestra una iteración muy propia de ingeniería: mejorar un sistema, compararlo bien, documentar qué mejora de verdad y reconocer de forma explícita dónde siguen los límites.",
      recruiterTakeaway:
        "Demuestra disciplina de benchmarking, mejora medible bajo incertidumbre y capacidad para hacer evolucionar sistemas técnicos de larga vida.",
      metrics: ["30 años de validación", "94 % menos sesgo mediano anual frente a ERA5", "55 % menos RMSD anual que CER v1", "44 años de cobertura del conjunto"],
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
        "Un estudio de modelado climático regional sobre por qué el balance hídrico de una cuenca cambia bajo un estado climático más cálido.",
      tags: ["Balance hídrico", "Plioceno", "Modelado climático regional"],
      doi: "10.1029/2020JD033965",
      oneLiner:
        "Usé modelado climático regional de alta resolución para explicar cómo circulación y topografía modifican el balance hídrico de una cuenca bajo un clima más cálido.",
      findings: [
        "El clima del Mid-Pliocene aumentó el balance hídrico anual de la cuenca respecto al presente.",
        "El cambio estuvo impulsado por una mayor entrada de humedad por el oeste y una menor salida por el este.",
        "El mecanismo vincula cambios de circulación a gran escala con control topográfico regional.",
      ],
      whyItMatters:
        "Este trabajo conecta múltiples escalas de explicación, desde la circulación atmosférica amplia hasta la hidrología de cuenca. Ese tipo de razonamiento sistémico también es muy valioso en analítica avanzada y trabajo de producto.",
      recruiterTakeaway:
        "Demuestra pensamiento multiescala, análisis físicamente fundamentado y capacidad para explicar con precisión comportamientos complejos de sistemas.",
      metrics: ["Publicado en JGR Atmospheres", "Mid-Pliocene con ~400 ppm de CO2", "Downscaling WRF a partir de ECHAM5"],
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
        "Un estudio basado en satélite sobre cómo cambia la frecuencia de nubes según relieve, estación, altitud y ENSO en Galápagos.",
      tags: ["MODIS", "Frecuencia de nubes", "Teledetección"],
      doi: "10.3390/atmos14081225",
      oneLiner:
        "Analicé patrones de nubosidad a varias escalas para mostrar cómo el relieve, los alisios y ENSO configuran los regímenes de humedad en Galápagos.",
      findings: [
        "La frecuencia de nubes varía con fuerza según estación, año, relieve y posición insular, en lugar de comportarse como una señal regional uniforme.",
        "Las mayores frecuencias aparecen en cotas medias y laderas orientadas al sureste expuestas a los vientos alisios.",
        "Las condiciones ENSO alteran tanto la nubosidad total como la intensidad de los contrastes topográficos.",
      ],
      whyItMatters:
        "Es un buen ejemplo de análisis de teledetección sensible al relieve que conecta patrones observados con los mecanismos físicos que los explican.",
      recruiterTakeaway:
        "Demuestra dominio de teledetección, razonamiento geoespacial y capacidad para extraer estructura útil de grandes conjuntos observacionales.",
      metrics: ["MODIS Cloud Mask", "Comportamiento diferencial por encima de ~900 m", "Comparación El Niño 2015 vs La Niña 2007"],
      link: "https://doi.org/10.3390/atmos14081225",
    },
  ],
  projects: [
    {
      name: "Alganize Status",
      role: "Chief Scientific Officer · liderazgo técnico y de datos",
      status: "Active",
      timeframe: "2024 - actualidad",
      summary:
        "Una plataforma B2B full-stack con vocación real de producción para analítica de suelos y flujos operativos, incluyendo gestión de campos, ciclo de vida de muestras, reporting, puntuación de salud, recomendaciones, interfaz multilingüe, CI/CD y rutas reales de despliegue.",
      stack: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
      outcomes: [
        "Entregué un flujo de producto basado en roles desde el onboarding hasta el reporting y la gestión documental",
        "Diseñé flujos de health score, muestras y recomendaciones alineados con necesidades operativas reales",
        "Actué como CSO cruzando lógica de dominio, estructura de producto, analítica y comunicación técnica",
      ],
      link: "https://status.alganize.de",
    },
    {
      name: "MaRESS",
      role: "Lead engineer en arquitectura de producto e implementación",
      status: "Active",
      timeframe: "2023 - 2026",
      summary:
        "Una plataforma geoespacial full-stack que integra publicaciones desde Zotero, procesa PDFs mediante NLP y OCR, guarda resultados en PostGIS y ofrece exploración interactiva mediante mapas, grafos y flujos de exportación.",
      stack: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "PostGIS", "Celery", "Redis"],
      outcomes: [
        "Asumí la arquitectura de frontend, backend, procesamiento asíncrono y flujos geoespaciales",
        "Implementé funciones GIS como carga de regiones, buffers, clipping y análisis espacial por distancia",
        "Convertí un problema complejo de descubrimiento de investigación en una plataforma utilizable con lógica de producto",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "[UC]² Data Management System",
      role: "Full-stack engineer para validación, metadatos y acceso",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "Un sistema de gestión de datos basado en estándares para conjuntos climáticos UC2, con subida, validación, extracción de metadatos, permisos, búsqueda en catálogo y descarga controlada de productos netCDF.",
      stack: ["Vue 2", "Vuetify", "Django", "DRF", "Python", "NetCDF"],
      outcomes: [
        "Implementé ingestión basada en estándares y verificación de conformidad para archivos netCDF UC2",
        "Construí flujos de metadatos y descarga con control de permisos para instituciones colaboradoras",
        "Creé una capa fiable de validación e intercambio para operaciones compartidas de datos climáticos urbanos",
      ],
      link: "https://dms.klima.tu-berlin.de",
    },
    {
      name: "UCO Berlin",
      role: "Full-stack engineer para portal público, APIs y vistas en vivo",
      status: "Completed",
      timeframe: "2020 - 2025",
      summary:
        "Un portal público de datos climáticos urbanos con pila API, búsqueda, exploración geoespacial, integraciones con proveedores, vistas en vivo, productos de radar y entrega SSR.",
      stack: ["Nuxt", "Vue 3", "Django", "DRF", "PostGIS", "OpenLayers", "Plotly"],
      outcomes: [
        "Entregué una experiencia pública de datos climáticos con mapa, tabla, metadatos y descargas",
        "Integré datos internos UC2 y proveedores externos en un catálogo portal normalizado",
        "Construí funciones de monitoreo ambiental en vivo y capacidades API para una plataforma observatorio real",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "DARWIN Climate Data Engineering",
      role: "Lead engineer para procesamiento de datos de modelos y herramientas analíticas",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "Un toolkit de ingeniería de datos climáticos basado en Python y xarray para procesamiento WRF/GAR, remapeo a estaciones, análisis de tendencias, validación de modelos, variables derivadas y visualización de calidad publicable.",
      stack: ["Python", "xarray", "netCDF", "CDO", "salem", "pandas", "NumPy", "SaltStack"],
      outcomes: [
        "Construí flujos reutilizables para grandes archivos de modelos climáticos y comparaciones con estaciones",
        "Automaticé postprocesado, remapeo y análisis de tendencias sobre datos netCDF",
        "Sostuve productos analíticos validados y resultados climáticos listos para publicación",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
  ],
  skillBadges: undefined,
  githubStats: undefined,
  cvAppointments: [
    {
      period: "02/2024 - actualidad",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlín",
      summary:
        "Responsable del frente científico y de datos de Alganize y participante directo en lógica de producto, reporting, analítica e iniciativas de software técnicamente complejas.",
      highlights: [
        "Responsabilidad sobre estrategia científica y de datos en proyectos internos y orientados a clientes",
        "Traducción de requisitos de dominio en flujos de scoring, reporting y producto",
        "Trabajo como contraparte técnica fuerte entre analítica, producto y comunicación",
      ],
    },
    {
      period: "08/2019 - 02/2026",
      role: "Investigador asociado (doctorado)",
      institution: "Technische Universität Berlin, Climatología",
      location: "Berlín",
      summary:
        "Construí y lideré plataformas full-stack, flujos de ingeniería de datos climáticos, sistemas públicos de datos y herramientas analíticas técnicamente exigentes a lo largo de varios proyectos de largo recorrido.",
      highlights: [
        "Lideré la entrega técnica en MaRESS, DARWIN, UC2 DMS y UCO Berlin",
        "Trabajé en frontend, backend, datos geoespaciales, analítica e infraestructura",
        "Convertí flujos científicos de alta complejidad en sistemas utilizables, productos validados y pipelines reproducibles",
        "Conecté implementación, calidad de datos, trabajo publicable y comunicación con stakeholders",
      ],
    },
    {
      period: "2019 - actualidad",
      role: "Ingeniero y consultor independiente",
      institution: "Clientes científicos y de datos seleccionados",
      location: "Berlín",
      summary:
        "Apoyé a clientes en investigación, sector público y clima con ejecución técnica, trabajo con datos y comunicación clara.",
      highlights: [
        "Trabajé con clientes como farm-food-climate, Freie Universität Berlin y Technische Universität Berlin",
        "Apoyé software, analítica y comunicación en contextos especializados",
        "Rendí bien en roles con alta autonomía y poco margen para una curva de aprendizaje lenta",
      ],
    },
    {
      period: "10/2019 - actualidad",
      role: "Docente",
      institution: "FU Berlin y TU Berlin",
      location: "Berlín",
      summary:
        "Diseñé e impartí cursos técnicos en programación, estadística, climatología y teledetección para audiencias con perfiles diversos.",
      highlights: [
        "Reforcé una capacidad sólida de comunicación y mentoring a través de la docencia técnica",
        "Estructuré sistemas y métodos complejos en procesos enseñables",
        "Profundicé la habilidad de explicar contenido técnico difícil con claridad y ajuste al público",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Asistente de investigación",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Implementé herramientas algorítmicas y flujos de datos a gran escala para generación de datos climáticos contrafactuales.",
      highlights: [
        "Trabajé en flujos ATTRICI para datos climáticos contrafactuales",
        "Desarrollé procesamiento fiable en Python sobre archivos de gran escala",
        "Contribuí a implementaciones técnicas basadas en métodos rigurosos",
      ],
    },
  ],
  education: [
    {
      period: "04/2025",
      degree: "Doctorado (Dr. rer. nat.)",
      institution: "Technische Universität Berlin",
      details:
        "Climatología, magna cum laude. Tesis sobre downscaling dinámico regional, tendencias atmosféricas y análisis del balance hídrico en varias regiones y escalas temporales.",
    },
    {
      period: "03/2019",
      degree: "MSc en Geografía del Cambio Global",
      institution: "Humboldt-Universität zu Berlin",
      details:
        "Graduado con distinción (1,2). Incluye experiencia internacional de campo en exploración sísmica ártica en el University Centre in Svalbard.",
    },
    {
      period: "09/2016",
      degree: "BSc en Física del Sistema Terrestre",
      institution: "CAU Kiel y GEOMAR",
      details: "Enfoque en meteorología, oceanografía y geofísica.",
    },
  ],
  honors: [
    {
      year: "2025",
      title: "Doctorado con magna cum laude",
      issuer: "Technische Universität Berlin",
      description:
        "Distinción académica por trabajo avanzado en modelado climático regional, downscaling y análisis hidrológico.",
    },
    {
      year: "2019",
      title: "MSc con distinción",
      issuer: "Humboldt-Universität zu Berlin",
      description: "Rendimiento cuantitativo fuerte en un campo interdisciplinario e intensivo en datos.",
    },
  ],
  certifications: [
    {
      title: "Certified BeeGFS System Engineer",
      issuer: "BeeGFS",
      description:
        "Certificación formal en arquitectura, configuración y administración de BeeGFS en entornos distribuidos orientados al rendimiento.",
    },
  ],
  articleHistory: [
    {
      title: "Downscaling dinámico regional y análisis del balance hídrico en diferentes regiones y escalas temporales",
      outlet: "Technische Universität Berlin",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary: "Tesis doctoral sobre metodología de downscaling multiescala y análisis hidrológico.",
      tags: ["Tesis", "Climatología", "Hidrología"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
  ],
  blogPosts: [
    {
      slug: "building-maress",
      title: "Construir MaRESS: búsqueda geoespacial, exploración por grafos y flujos de investigación basados en PDF",
      date: "2025-02-12",
      readMinutes: 7,
      summary:
        "Una mirada a cómo MaRESS combina UX geoespacial, enriquecimiento de metadatos y exploración basada en grafos dentro de un sistema full-stack.",
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
      title: "De salidas WRF a analítica climática validada en DARWIN",
      date: "2024-09-20",
      readMinutes: 6,
      summary:
        "Cómo xarray, flujos netCDF, remapeo y análisis de tendencias se convierten en un sistema analítico reproducible y no en una colección de scripts.",
      tags: ["DARWIN", "xarray", "netCDF", "Datos climáticos"],
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
      description: "Código, historial de implementación, experimentos de producto y trabajo técnico.",
      category: "Code",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      description: "Registro persistente de publicaciones e identidad investigadora.",
      category: "Academic",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      description: "Perfil profesional para selección, contratación y conversaciones de liderazgo.",
      category: "Professional",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      description: "Historial de publicaciones e impacto de citación.",
      category: "Academic",
    },
  ],
  services: [
    {
      title: "Asumir productos de extremo a extremo",
      icon: "mdi-monitor-dashboard",
      description:
        "Puedo pasar de decisiones de arquitectura y modelo de datos a backend, frontend y diseño de flujos de usuario hasta el punto en que un producto complejo realmente funciona para quienes lo usan.",
    },
    {
      title: "Elevar la calidad de la ejecución técnica",
      icon: "mdi-file-document-edit-outline",
      description:
        "Aporto rigor en calidad de datos, validación, reproducibilidad y pensamiento operativo, ayudando a los equipos a entregar sistemas más sólidos y con menos puntos ciegos.",
    },
    {
      title: "Traducir complejidad sin simplificarla de más",
      icon: "mdi-account-group-outline",
      description:
        "Soy especialmente eficaz allí donde ingeniería debe trabajar con expertos de dominio, otras partes interesadas y problemas complejos sin perder velocidad, precisión ni credibilidad.",
    },
  ],
  infrastructure: [
    {
      title: "Almacenamiento distribuido y BeeGFS",
      icon: "mdi-harddisk",
      description:
        "Certified BeeGFS System Engineer con experiencia práctica en diseño de almacenamiento distribuido, objetivos de metadatos y almacenamiento, decisiones de RAID y compromisos operativos en entornos de cómputo científico.",
    },
    {
      title: "Administración Linux y automatización",
      icon: "mdi-console-network-outline",
      description:
        "Experiencia con administración Linux, automatización con SaltStack y Ansible, entornos Proxmox, NixOS y el tipo de resolución operativa de problemas que sucede cerca de infraestructura real y no solo en diagramas.",
    },
    {
      title: "Redes HPC y flujos de almacenamiento",
      icon: "mdi-server-network",
      description:
        "Trabajo con InfiniBand, conceptos de iSCSI, ZFS, XFS, ext4, operación cercana a IPMI y decisiones de almacenamiento y red en entornos pequeños de tipo HPC donde rendimiento y confiabilidad importan a la vez.",
    },
  ],
  selectedClients: [
    {
      name: "farm-food-climate",
      note: "Trabajo aplicado de clima y datos en un contexto con múltiples actores y altas exigencias de comunicación.",
    },
    {
      name: "Freie Universität Berlin",
      note: "Trabajo técnico y analítico en un entorno académico exigente con necesidades científicas y operativas mezcladas.",
    },
    {
      name: "Technische Universität Berlin",
      note: "Trabajo de software, analítica e infraestructura a través de investigación, docencia y desarrollo de plataformas.",
    },
    {
      name: "Otros clientes científicos y orientados a datos",
      note: "Trabajé como contribuidor técnico de confianza en roles con alta autonomía, amplitud y complejidad de dominio.",
    },
  ],
  contactLinks: [
    {
      label: "Correo",
      href: "mailto:benjamin.schmidt@tu-berlin.de",
      icon: "mdi-email-outline",
      sublabel: "Iniciar una conversación sobre una vacante",
    },
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "Revisar código y sistemas entregados",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "Ver perfil para selección y contratación",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "Revisar historial de publicaciones",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "Ver trayectoria científica",
    },
  ],
};
