import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Überblick",
    cv: "Lebenslauf",
    career: "Karriere",
    publications: "Schreiben",
    blog: "Blog",
    projects: "Projekte",
    profiles: "Profile",
    contact: "Kontakt",
    services: "Leistungen",
  },
  hero: {
    eyebrow: "Wissenschaftliches Karriereprofil",
    viewPublications: "Schreiben ansehen",
    openCv: "Lebenslauf öffnen",
    readBlog: "Blog lesen",
    researchFocus: "Forschungsschwerpunkt",
    currentInterests: "Aktuelle Interessengebiete",
    coreStrengths: "Kernkompetenzen",
  },
  cv: {
    kicker: "Lebenslauf",
    heading: "Stellen, Ausbildung und Auszeichnungen",
    professionalAppointments: "Berufliche Stationen",
    education: "Ausbildung",
    awardsAndHonors: "Auszeichnungen und Ehrungen",
  },
  career: {
    kicker: "Wissenschaftliche Karriere",
    heading: "Werdegang und Positionen",
  },
  publications: {
    kicker: "Professionelles Schreiben",
    heading: "Gesamter Schreiboutput",
    read: "Lesen",
    filterAll: "Alle",
    kinds: {
      Journal: "Zeitschrift",
      Conference: "Konferenz",
      Preprint: "Preprint",
      "Book Chapter": "Buchkapitel",
      Thesis: "Dissertation",
      "Technical Report": "Technischer Bericht",
    },
  },
  articles: {
    open: "Öffnen",
    kinds: {
      Article: "Artikel",
      Interview: "Interview",
      Editorial: "Editorial",
      Review: "Rezension",
      Thesis: "Dissertation",
      "Technical Report": "Technischer Bericht",
    },
  },
  blog: {
    kicker: "Blog",
    heading: "Notizen aus Projekten, Methoden und Publikationsarbeit",
    minRead: "Min. Lesezeit",
    relatedArticles: "Verwandte Artikel",
    readPost: "Beitrag lesen",
  },
  projects: {
    kicker: "Wissenschaftliche Projekte",
    heading: "Forschungssoftware und Initiativen",
    stack: "Technologie-Stack",
    outcomes: "Ergebnisse",
    status: {
      Active: "Aktiv",
      Planning: "In Planung",
      Completed: "Abgeschlossen",
    },
  },
  skills: {
    kicker: "Technisches Toolkit",
    heading: "Skill-Badges und Technologien",
    copy: "Ein kompakter Überblick über Technologien, die ich in Forschungssoftware, Datenplattformen und reproduzierbaren Workflows einsetze.",
  },
  github: {
    kicker: "GitHub-Aktivität",
    heading: "Aktuelle Statistiken und Sprachverteilung",
  },
  profiles: {
    kicker: "Verknüpfte Konten",
    heading: "Akademische, berufliche und öffentliche Profile",
    visitProfile: "Profil besuchen",
    comingSoon: "Demnächst verfügbar",
    categories: {
      Academic: "Akademisch",
      Code: "Code",
      Professional: "Beruflich",
      Personal: "Persönlich",
    },
  },
  services: {
    kicker: "Leistungen",
    heading: "Professionelle Angebote und Zusammenarbeit",
  },
  contact: {
    kicker: "Kontakt und Zusammenarbeit",
    heading: "Lassen Sie uns bei Forschungsprojekten und Publikationen zusammenarbeiten.",
    copy: "Ich bin offen für interdisziplinäre Kooperationen, eingeladene Vorträge und gemeinsame Schreibprojekte in der computergestützten und datengetriebenen Wissenschaft.",
    openProfile: "Profil öffnen",
    comingSoon: "Demnächst verfügbar",
  },
  footer: {
    builtWith: "Erstellt mit Vue 3, TypeScript, Vuetify, oxlint, eslint und oxfmt.",
    includes:
      "Enthält Lebenslauf, Artikelhistorie, verknüpfte Konten, Projektportfolio und Blog-Bereiche für eine vollständige professionelle Forscher-Website.",
  },
  pages: {
    cv: { title: "Lebenslauf", kicker: "Berufliche Laufbahn" },
    career: { title: "Wissenschaftliche Karriere", kicker: "Akademischer Werdegang" },
    publications: { title: "Professionelles Schreiben", kicker: "Ausgewählte Arbeiten" },
    blog: { title: "Blog", kicker: "Forschungsnotizen" },
    projects: { title: "Wissenschaftliche Projekte", kicker: "Software und Initiativen" },
    profiles: { title: "Verknüpfte Profile", kicker: "Konten und Identität" },
    contact: { title: "Kontakt", kicker: "Zusammenarbeit" },
    services: { title: "Leistungen", kicker: "Professionelle Angebote" },
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
    headline: "Wissenschaftler und datenintensiver Software-Ingenieur",
    location: "Berlin, Deutschland",
    address: "10589 Berlin-Charlottenburg",
    phone: "+49 (0) 171 8036920",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "Ich entwerfe und betreue datenintensive wissenschaftliche Software – von robusten Backend-Diensten bis hin zu nutzerorientierten Webplattformen – mit starkem Fokus auf Reproduzierbarkeit, Kommunikation und langfristige Wartbarkeit.",
    interests: [
      "Klima- und Umweltdatenwissenschaft",
      "Reproduzierbare Rechenworkflows",
      "Wissenschaftliche Webanwendungen",
      "Offene und transparente Forschungspraktiken",
    ],
    skills: [
      "Python",
      "R",
      "TypeScript",
      "Vue 3",
      "FastAPI",
      "Linux",
      "Big-Data-Analytik",
      "Systemadministration",
      "Wissenschaftliches Schreiben",
    ],
  },
  careerStages: [
    {
      period: "08/2019 - 02/2026",
      title: "Wissenschaftlicher Mitarbeiter (Promotion)",
      institution: "Technische Universität Berlin, Klimatologie",
      description:
        "Leitung von Klima- und Erdsystemforschungsprojekten sowie Entwicklung datenintensiver Softwareplattformen für Analyse, Visualisierung und Publikationsworkflows.",
      focusAreas: [
        "MaRESS-Webplattform (Vue, FastAPI, PostGIS)",
        "DARWIN-Klimadatenpipelines und Dashboards",
        "UC2-Standards und Werkzeuge für urbane Klimadaten",
      ],
    },
    {
      period: "10/2019 - heute",
      title: "Dozent",
      institution: "Freie Universität Berlin und Technische Universität Berlin",
      description:
        "Konzeption und Durchführung von Lehrveranstaltungen in Statistik, Klimatologie, wissenschaftlichem Programmieren und Fernerkundungsdatenanalyse.",
      focusAreas: ["Statistik mit R", "Wissenschaftliches Programmieren", "Forschungskommunikation"],
    },
    {
      period: "02/2024 - heute",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Beratung zu wissenschaftlicher Kommunikation und Datenanalyse in Biotech-Workflows mit Fokus auf Zeitreihen-Stationsdaten und robustem Reporting.",
      focusAreas: ["BioTech-Beratung", "Zeitreihenanalyse", "Wissenschaftskommunikation"],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Wissenschaftliche Hilfskraft",
      institution: "Potsdam-Institut für Klimafolgenforschung (PIK), ISIMIP",
      description:
        "Entwicklung kontrafaktischer Klimadaten-Workflows und statistischer Werkzeuge für großskalige Klimadatensätze.",
      focusAreas: ["ATTRICI-Algorithmus", "Kontrafaktische Klimadaten", "Python"],
    },
    {
      period: "02/2017 - 01/2019",
      title: "Studentische Hilfskraft",
      institution: "Humboldt-Universität zu Berlin, Klimageographie",
      description:
        "Untersuchung von Hitzewellenprojektionen und räumlichen Mustern thermischer Belastung in Berlin mittels mesoskaliger Modellierung.",
      focusAreas: ["COSMO-CLM", "Urbane Klimaprojektionen", "Datenverarbeitung und -analyse"],
    },
  ],
  publications: [
    {
      title:
        "Regionales dynamisches Downscaling und Analyse des Wasserhaushalts über verschiedene Regionen und Zeitskalen",
      venue: "Technische Universität Berlin",
      year: 2025,
      kind: "Thesis",
      summary:
        "Dissertation über regionale Klimadynamik, Wasserhaushaltsanalyse und mehrskalige Downscaling-Methoden.",
      tags: ["Klimamodellierung", "Wasserhaushalt", "Regionales Downscaling"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "MaRESS: Kartierung der Forschung in den Erdsystemwissenschaften",
      venue: "NFDI4Earth Incubator Lab",
      year: 2025,
      kind: "Technical Report",
      summary:
        "Webplattform und graphbasierte Werkzeuge zur Exploration, Analyse und Visualisierung von Forschungsmetadaten der Erdsystemwissenschaften.",
      tags: ["Vue", "FastAPI", "PostGIS", "NLP"],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      title: "Urbaner Klimadatenstandard",
      venue: "[UC]2-Programm",
      year: 2024,
      kind: "Technical Report",
      summary:
        "Spezifikation und Implementierungsleitfaden für die standardisierte Handhabung von atmosphärischen NetCDF-Datensätzen in urbanen Klimaprojekten.",
      tags: ["NetCDF", "Datenstandards", "Urbanes Klima"],
      link: "https://uc2-program.org/sites/default/files/inline-files/uc2_datenstandard.pdf",
    },
    {
      title: "ATTRICI: Konstruktion kontrafaktischer Klimadaten",
      venue: "ISIMIP",
      year: 2023,
      kind: "Technical Report",
      summary:
        "Algorithmisches Framework zur Erzeugung kontrafaktischer Klimadatensätze aus historischen Archiven.",
      tags: ["Klimadaten", "Kontrafaktische Analyse", "Python"],
      link: "https://isi-mip.github.io/attrici/attrici.html",
    },
  ],
  projects: [
    {
      name: "MaRESS: Plattform zur Kartierung der Erdsystemforschung",
      status: "Active",
      timeframe: "2023 - 2026",
      summary:
        "Entwicklung einer datenreichen Webplattform zur Visualisierung und Exploration von Metadaten und Beziehungen in den Erdsystemwissenschaften.",
      stack: ["Vue.js", "FastAPI", "OpenLayers", "Cytoscape.js", "PostgreSQL", "PostGIS"],
      outcomes: [
        "Interaktive Karten- und Graphoberfläche",
        "Durchsuchbare Metadaten-Workflows",
        "Wiederverwendbare wissenschaftliche Web-Werkzeuge",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "DARWIN: Dynamik des Niederschlags im Wandel",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "Verwaltung und Analyse großvolumiger atmosphärischer Modelldaten zur Untersuchung der Niederschlagsquellendynamik unter Klimawandelbedingungen auf den Galapagos-Inseln.",
      stack: ["pandas", "xarray", "NumPy", "Matplotlib", "Plotly", "Panel", "Proxmox", "SaltStack"],
      outcomes: [
        "Automatisierte Klimadatenpipelines",
        "Dashboard-basierte Analyse",
        "Peer-reviewte Publikationen",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
    {
      name: "[UC]2 Urbanes Klima im Wandel",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "Aufbau von Datenmanagement- und Visualisierungsinfrastruktur für urbane Klimastudien, einschließlich Web-Werkzeugen und Datenstandards.",
      stack: ["Django", "Nuxt", "NetCDF", "Python"],
      outcomes: [
        "UCO Berlin Visualisierungsplattform",
        "Gemeinsame Datenaustausch-Workflows",
        "Projektweite Datenstandards",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "Q-TiP Klimaanalyse",
      status: "Completed",
      timeframe: "2020 - 2024",
      summary:
        "Modellierung und Analyse klimatologischer Datensätze für Kipppunkt-Dynamiken in zentralasiatischen Seesystemen.",
      stack: ["WRF", "Python", "Wissenschaftliche Datenanalyse"],
      outcomes: [
        "Modellbasierte Klimabewertungen",
        "Publikationsbeiträge",
        "Wiederverwendbare Analyse-Workflows",
      ],
    },
  ],
  cvAppointments: [
    {
      period: "08/2019 - 02/2026",
      role: "Wissenschaftlicher Mitarbeiter (Promotion)",
      institution: "Technische Universität Berlin, Klimatologie",
      location: "Berlin",
      summary:
        "Entwicklung datenintensiver Klima-Workflows und wissenschaftlicher Webanwendungen bei gleichzeitiger Koordination publikationsreifer Forschungsergebnisse.",
      highlights: [
        "MaRESS-Plattform zur Erdsystemkartierung",
        "DARWIN-Klimadatenanalyse und Dashboards",
        "UC2-Datenstandards und UCO Berlin Werkzeuge",
        "HPC-Klimamodellierung und Publikationsschreiben",
      ],
    },
    {
      period: "02/2024 - heute",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlin",
      summary:
        "Beratung von Biotech-Teams zu wissenschaftlicher Kommunikation und Klima-Zeitreihenanalyse.",
      highlights: [
        "Wissenschaftliche Beratung für angewandte Studien",
        "Zeitreihenanalyse von Klimastationsdaten",
        "Interdisziplinäre Zusammenarbeit mit technischen Teams",
      ],
    },
    {
      period: "10/2019 - heute",
      role: "Dozent",
      institution: "FU Berlin und TU Berlin",
      location: "Berlin",
      summary:
        "Lehre quantitativer und programmierorientierter Kurse für umwelt- und datengetriebene Forschung.",
      highlights: [
        "Statistik 101 und Statistik mit R",
        "Klimatologie und Urbane Atmosphäre",
        "Wissenschaftliches Programmieren und Fernerkundungsanalyse",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Wissenschaftliche Hilfskraft",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Entwicklung von Algorithmen zur kontrafaktischen Klimadatengenerierung aus großen Datensätzen.",
      highlights: [
        "ATTRICI-Algorithmusentwicklung und -anwendung",
        "Großskalige Klimadatenverarbeitung in Python",
        "Unterstützung der ISI-CFACT-Projektergebnisse",
      ],
    },
    {
      period: "02/2017 - 01/2019",
      role: "Studentische Hilfskraft",
      institution: "Humboldt-Universität zu Berlin",
      location: "Berlin",
      summary:
        "Analyse urbaner Hitzewellendynamik und Klimaprojektionen mit mesoskaligen Modellierungsansätzen.",
      highlights: [
        "COSMO-CLM Modell-Workflows",
        "Urbane Klimaprojektionsstudien",
        "Räumliche und zeitliche Hitzestressanalyse",
      ],
    },
  ],
  education: [
    {
      period: "04/2025",
      degree: "Promotion (Dr. rer. nat.)",
      institution: "Technische Universität Berlin",
      details:
        "Klimatologie, Note magna cum laude. Dissertation über regionales dynamisches Downscaling und Wasserhaushalt über Regionen und Zeitskalen.",
    },
    {
      period: "03/2019",
      degree: "MSc Global Change Geography",
      institution: "Humboldt-Universität zu Berlin",
      details:
        "Note 1,2. Einschließlich internationaler Felderfahrung in arktischer seismischer Exploration am University Centre in Svalbard.",
    },
    {
      period: "09/2016",
      degree: "BSc Physik des Erdsystems",
      institution: "CAU Kiel und GEOMAR",
      details: "Schwerpunkt Meteorologie, Ozeanographie und Geophysik. Note 2,2.",
    },
    {
      period: "06/2008",
      degree: "Abitur",
      institution: "Freie Waldorfschule Flensburg",
      details:
        "Note 1,8 mit Schwerpunkt Mathematik und Geographie; Auslandssemester in Pretoria.",
    },
  ],
  honors: [
    {
      year: "2025",
      title: "Promotion mit Magna cum Laude",
      issuer: "Technische Universität Berlin",
      description:
        "Doktortitel verliehen für Arbeit im Bereich regionales Klima-Downscaling und hydrologische Analyse.",
    },
    {
      year: "2019",
      title: "MSc mit Auszeichnung",
      issuer: "Humboldt-Universität zu Berlin",
      description: "Global Change Geography Abschluss mit Note 1,2.",
    },
    {
      year: "2008",
      title: "Abitur mit sehr gutem Ergebnis",
      issuer: "Freie Waldorfschule Flensburg",
      description:
        "Abschluss der Sekundarschulbildung mit Note 1,8 und internationaler Studienerfahrung.",
    },
  ],
  articleHistory: [
    {
      title:
        "Regionales dynamisches Downscaling und Analyse des Wasserhaushalts über verschiedene Regionen und Zeitskalen",
      outlet: "Technische Universität Berlin",
      published: "2025-04-01",
      kind: "Thesis",
      summary:
        "Dissertation zur Dokumentation mehrskaliger regionaler Klima-Downscaling- und hydrologischer Analysemethodik.",
      tags: ["Dissertation", "Klimatologie", "Hydrologie"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
    {
      title: "MaRESS-Plattform zur Kartierung der Erdsystemwissenschaften",
      outlet: "NFDI4Earth Incubator Lab",
      published: "2025-01-01",
      kind: "Technical Report",
      summary:
        "Projektzusammenfassung einer produktionsreifen Webplattform zur karten- und graphbasierten Analyse von Forschungsdaten der Erdsystemwissenschaften.",
      tags: ["Technischer Bericht", "Webplattform", "Erdsystemwissenschaft"],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      title: "[UC]2-Datenstandard für atmosphärische NetCDF-Daten",
      outlet: "[UC]2-Programm",
      published: "2024-01-01",
      kind: "Technical Report",
      summary:
        "Definition standardisierter Workflows für Verwaltung, Austausch und Analyse urbaner atmosphärischer Klimadatensätze.",
      tags: ["Datenstandard", "NetCDF", "Urbanes Klima"],
      link: "https://uc2-program.org/sites/default/files/inline-files/uc2_datenstandard.pdf",
    },
    {
      title: "ATTRICI: Workflow für kontrafaktische Klimadaten",
      outlet: "ISIMIP",
      published: "2019-07-01",
      kind: "Technical Report",
      summary:
        "Technische Dokumentation und Methodennotizen zur Erzeugung kontrafaktischer Klimadatensätze aus historischen Archiven.",
      tags: ["Klimadaten", "Algorithmus", "ISIMIP"],
      link: "https://isi-mip.github.io/attrici/attrici.html",
    },
    {
      title: "Local Sea Surface Temperatures Modulate the Occurrence of Heavy Rainfall Events in the Galápagos Archipelago",
      outlet: "Geophysical Research Letters",
      published: "2025-12-16",
      kind: "Article",
      summary:
        "Zeigt, wie lokale Schwankungen der Meeresoberflächentemperatur das Auftreten von Starkniederschlägen im Galápagos-Archipel beeinflussen.",
      tags: ["Galapagos", "Starkniederschlag", "Meeresoberflächentemperatur"],
      link: "https://doi.org/10.1029/2025GL117553",
    },
    {
      title: "Analysis of the Meso-Scale Climate of the Galápagos Archipelago by Dynamical Downscaling of Reanalysis Data",
      outlet: "International Journal of Climatology",
      published: "2025-11-15",
      kind: "Article",
      summary:
        "Präsentiert eine meso-skalige Klimaanalyse des Galápagos-Archipels mittels dynamischem Downscaling von Reanalysedaten.",
      tags: ["Dynamisches Downscaling", "Reanalyse", "Galapagos"],
      link: "https://doi.org/10.1002/joc.8924",
    },
    {
      title: "Operational satellite cloud products need local adjustment – The Galapagos case of ecoclimatic cloud zonation",
      outlet: "Atmospheric Research",
      published: "2025-04-01",
      kind: "Article",
      summary:
        "Bewertet Satelliten-Wolkenprodukte und zeigt den Bedarf lokaler Anpassungen für die ökoklimatische Wolkenzonierung auf Galápagos.",
      tags: ["Satellitenprodukte", "Wolkenzonierung", "Galapagos"],
      link: "https://doi.org/10.1016/j.atmosres.2025.107918",
    },
    {
      title:
        "The Central Europe Refined analysis version 2 (CER v2): evaluating three decades of high-resolution precipitation data for the Berlin-Brandenburg metropolitan region",
      outlet: "Meteorologische Zeitschrift",
      published: "2025-02-10",
      kind: "Article",
      summary:
        "Bewertet mit CER v2 drei Jahrzehnte hochaufgelöster Niederschlagsdaten für die Metropolregion Berlin-Brandenburg.",
      tags: ["Niederschlag", "Berlin-Brandenburg", "Regionale Analyse"],
      link: "https://doi.org/10.1127/metz/2024/1233",
    },
    {
      title: "The Spatio-Temporal Cloud Frequency Distribution in the Galapagos Archipelago as Seen from MODIS Cloud Mask Data",
      outlet: "Atmosphere",
      published: "2023-07-29",
      kind: "Article",
      summary:
        "Analysiert räumlich-zeitliche Muster der Wolkenhäufigkeit im Galápagos-Archipel anhand von MODIS-Cloud-Mask-Daten.",
      tags: ["MODIS", "Wolkenhäufigkeit", "Galapagos"],
      link: "https://doi.org/10.3390/atmos14081225",
    },
    {
      title:
        "Sensitivity of micro-scale atmospheric processes in a city quarter of Berlin, Germany on elevated meso-scale temperature forcing",
      outlet: "EGUsphere (preprint)",
      published: "2023-05-15",
      kind: "Article",
      summary:
        "Untersucht, wie erhöhte meso-skalige Temperaturforcierung mikro-skalige atmosphärische Prozesse in einem Berliner Stadtquartier beeinflusst.",
      tags: ["Stadtklima", "Berlin", "Meso-skalige Forcierung"],
      link: "https://doi.org/10.5194/egusphere-egu23-1326",
    },
    {
      title: "Sensitivity of Water Balance in the Qaidam Basin to the Mid-Pliocene Climate",
      outlet: "Journal of Geophysical Research: Atmospheres",
      published: "2021-08-27",
      kind: "Article",
      summary:
        "Untersucht die Sensitivität des Wasserhaushalts im Qaidam-Becken unter Klimabedingungen des Mittelpliozäns.",
      tags: ["Wasserhaushalt", "Qaidam-Becken", "Mittelpliozän"],
      link: "https://doi.org/10.1029/2020JD033965",
    },
    {
      title: "Sensitivity of Water Balance in the Qaidam Basin to the Mid-Pliocene Climate",
      outlet: "ESS Open Archive (preprint)",
      published: "2020-10-09",
      kind: "Article",
      summary:
        "Preprint zur modellierten Sensitivität des Wasserhaushalts im Qaidam-Becken gegenüber mittelpliozäner Klimaforcierung.",
      tags: ["Preprint", "Wasserhaushalt", "Qaidam-Becken"],
      link: "https://doi.org/10.1002/essoar.10504500.1",
    },
    {
      title: "Changes in water balance of the Qaidam Basin from Pliocene to present day",
      outlet: "EGU General Assembly",
      published: "2020-03-23",
      kind: "Article",
      summary:
        "Konferenzbeitrag zu langfristigen Veränderungen des Wasserhaushalts im Qaidam-Becken vom Pliozän bis heute.",
      tags: ["Konferenz", "Wasserhaushalt", "Qaidam-Becken"],
      link: "https://doi.org/10.5194/egusphere-egu2020-20666",
    },
  ],
  blogPosts: [
    {
      slug: "building-maress",
      title: "MaRESS entwickeln: Räumliche Daten und Wissensgraphen verbinden",
      date: "2025-02-12",
      readMinutes: 7,
      summary:
        "Reflexionen über die Gestaltung einer wissenschaftlichen Webplattform, die Geodaten-Exploration mit graphbasiertem Kontext verbindet.",
      tags: ["MaRESS", "Vue", "FastAPI", "PostGIS"],
      href: "https://github.com/benatouba/maress",
      relatedArticles: [
        {
          title: "MaRESS-Plattform zur Kartierung der Erdsystemwissenschaften",
          href: "https://www.nfdi4earth.de/2participate/incubator-lab",
        },
      ],
    },
    {
      slug: "climate-data-pipelines-darwin",
      title: "Klimadaten-Pipelines für DARWIN entwerfen",
      date: "2024-09-20",
      readMinutes: 6,
      summary:
        "Wie man große NetCDF-Simulationsdaten in analysebereit, reproduzierbare Produkte und Dashboards verwandelt.",
      tags: ["DARWIN", "NetCDF", "xarray", "Reproduzierbarkeit"],
      href: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
      relatedArticles: [
        {
          title:
            "Regionales dynamisches Downscaling und Analyse des Wasserhaushalts über verschiedene Regionen und Zeitskalen",
          href: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
        },
      ],
    },
    {
      slug: "teaching-data-literacy",
      title: "Datenkompetenz in Klima- und Geographiekursen lehren",
      date: "2024-04-08",
      readMinutes: 5,
      summary:
        "Praktische Ansätze zur Vermittlung reproduzierbarer Statistik und Programmierung an interdisziplinäre Studierendengruppen.",
      tags: ["Lehre", "R", "Wissenschaftliches Programmieren"],
      relatedArticles: [
        {
          title: "Kursportfolio: Statistik, Wissenschaftliches Programmieren und Urbane Atmosphäre",
        },
      ],
    },
  ],
  externalProfiles: [
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      description: "Open-Source-Repositories, Forschungswerkzeuge und reproduzierbare Demos.",
      category: "Code",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      description: "Persistenter Forscher-Identifikator und Publikationsmetadaten-Eintrag.",
      category: "Academic",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      description: "Berufliches Profil, Kooperationen und Vortragsaktivitäten.",
      category: "Professional",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      description: "Zitationsprofil und Übersicht zur Publikationswirkung.",
      category: "Academic",
    },
  ],
  services: [
    {
      title: "Forschungskooperation",
      icon: "mdi-account-group-outline",
      audience: "Forschungsgruppen und Labore",
      description:
        "Ich gestalte gemeinsam Klima- und Umweltforschungs-Workflows von der Modellausgabeverarbeitung bis zur publikationsfertigen Analyse.",
      ctaLabel: "Kooperation besprechen",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Datenintensive Web- und API-Entwicklung",
      icon: "mdi-file-document-edit-outline",
      audience: "Forschungsprojekte und Teams",
      description:
        "Entwicklung wissenschaftlicher Webanwendungen und APIs für strukturierten Datenzugang, Visualisierung und Team-Workflows.",
      ctaLabel: "Technische Umsetzung planen",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Wissenschaftskommunikation und Lehre",
      icon: "mdi-monitor-dashboard",
      audience: "Institute und Weiterbildungsprogramme",
      description:
        "Beratung und Unterricht zu Statistik, wissenschaftlichem Programmieren und Kommunikation quantitativer Forschungsergebnisse.",
      ctaLabel: "Lehre oder Beratung anfragen",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
  ],
  contactLinks: [
    {
      label: "E-Mail",
      href: "mailto:benjamin.schmidt@tu-berlin.de",
      icon: "mdi-email-outline",
      sublabel: "Email senden"
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "Veröffentlichungen ansehen"
    },
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "Softwareprojekte ansehen"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "Profil ansehen"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "Profil ansehen"
    },
  ],
};
