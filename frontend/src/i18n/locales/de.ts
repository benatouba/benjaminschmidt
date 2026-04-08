import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Überblick",
    cv: "Lebenslauf",
    career: "Erfahrung",
    publications: "Schreiben",
    spotlights: "Fallstudien",
    projects: "Delivery",
    profiles: "Profile",
    contact: "Kontakt",
    services: "Mehrwert",
    garden: "Garten",
    ariaLabel: "Hauptnavigation",
  },
  hero: {
    eyebrow: "Senior/Staff Engineering · Datenplattformen · Produkt-Delivery",
    viewProjects: "Delivery ansehen",
    openCv: "Lebenslauf öffnen",
    contactMe: "Kontakt aufnehmen",
    researchFocus: "Wo ich Wert schaffe",
    currentInterests: "Was ich am besten baue",
    currentInterestsDetail:
      "Ich bin am stärksten dort, wo Produkt, Daten und Engineering zusammenkommen: bei Full-Stack-Anwendungen, Plattformarchitektur, Automatisierung und internen Tools, die komplexe Abläufe in verlässliche Software übersetzen.",
    coreStrengths: "Kern-Stack",
    availability: "Offen für Vollzeitrollen auf Senior-/Staff-Level",
    orcidLabel: "ORCID",
  },
  impact: {
    kicker: "Belege",
    heading: "Engineering-Umfang, den Recruiter in Sekunden erfassen können",
    copy:
      "Ein schneller Überblick über den Umfang, den ich bereits getragen habe: End-to-End-Delivery, technische Führung und datenintensive Systeme, die sowohl Produktsinn als auch Umsetzung brauchen.",
  },
  cv: {
    kicker: "Karriereprofil",
    heading: "Lebenslauf",
    copy:
      "Eine recruiter-freundliche Zusammenfassung der Erfahrungen, die für Senior- und Staff-Engineering-Rollen am relevantesten sind.",
    profileTitle: "Aktuelle Positionierung",
    professionalAppointments: "Erfahrung",
    education: "Ausbildung",
    awardsAndHonors: "Ausgewählte Qualifikationen",
  },
  career: {
    kicker: "Erfahrung",
    heading: "Führungs- und Delivery-Historie",
    copy:
      "Rollen, in denen ich Architektur verantwortet, Systeme geliefert und komplexe Anforderungen in nutzbare Software, Datenprodukte und technische Workflows übersetzt habe.",
  },
  publications: {
    heading: "Publikationen & Schreiben",
    read: "Lesen",
    doi: "DOI",
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
  spotlights: {
    heading: "Fallstudien",
    relatedArticles: "Verwandte Arbeiten",
    viewProject: "Fallstudie öffnen",
  },
  projects: {
    kicker: "Ausgewählte Delivery",
    heading: "Plattformen, Produkte und Systeme, die ich geliefert habe",
    copy:
      "Beispiele für End-to-End-Arbeit über Frontend, Backend, Data Engineering und funktionsübergreifende technische Delivery hinweg.",
    stack: "Technologie-Stack",
    outcomes: "Business- und Delivery-Ergebnisse",
    viewProject: "Projekt öffnen",
    status: {
      Active: "Aktiv",
      Planning: "In Planung",
      Completed: "Abgeschlossen",
    },
  },
  skills: {
    heading: "Technisches Toolkit",
    copy: "Ein kompakter Überblick über Technologien, die ich in Forschungssoftware, Datenplattformen und reproduzierbaren Workflows einsetze.",
  },
  github: {
    heading: "GitHub-Aktivität",
  },
  profiles: {
    heading: "Externe Profile",
    visitProfile: "Profil öffnen",
    comingSoon: "Demnächst verfügbar",
    categories: {
      Academic: "Akademisch",
      Code: "Code",
      Professional: "Beruflich",
      Personal: "Persönlich",
    },
  },
  services: {
    kicker: "Mein Beitrag",
    heading: "Wie ich auf Senior-/Staff-Level wirke",
    copy:
      "Ich suche Vollzeitrollen im Engineering, in denen ich kritische Systeme verantworten, Delivery verbessern und Teams helfen kann, technische Komplexität in funktionierende Produkte zu übersetzen.",
  },
  contact: {
    kicker: "Kontakt",
    heading: "Sie suchen Senior- oder Staff-Engineering?",
    copy:
      "Ich fokussiere mich auf Vollzeitrollen, in denen ich Architektur führen, verlässliche Systeme bauen und die technische Messlatte über Produkt-, Daten- und Plattformarbeit hinweg anheben kann.",
    primaryCta: "Mail zu einer Rolle senden",
    secondaryCta: "Meinen CV ansehen",
    openProfile: "Profil öffnen",
    comingSoon: "Demnächst verfügbar",
  },
  footer: {
    copyright: "© {year} Dr. Benjamin Schmidt",
    location: "Berlin, Deutschland",
    builtWith: "Erstellt mit Vue 3, TypeScript und Vuetify.",
    tagline: "Senior Full-Stack Engineer | Datenplattformen & Produkt-Delivery",
  },
  pages: {
    cv: {
      title: "Lebenslauf",
      kicker: "Senior-/Staff-Engineering-Profil",
      metaTitle: "Lebenslauf",
      copy:
        "Der schnellste Weg, meinen Fit zu verstehen: Architekturverantwortung, produktnahe Delivery und Erfahrung mit Full-Stack- sowie Datensystemen.",
    },
    career: {
      title: "Erfahrung",
      kicker: "Führung & Delivery",
      metaTitle: "Erfahrung",
      copy:
        "Eine rollenbasierte Sicht darauf, wie ich Systeme geführt, Plattformen geliefert und komplexe Anforderungen in funktionierende Software übersetzt habe.",
    },
    publications: {
      title: "Publikationen & Schreiben",
      kicker: "Technisches Schreiben & Forschung",
      metaTitle: "Publikationen",
      copy:
        "Ausgewählte Texte, technische Berichte und Publikationen, die Tiefe in komplexen Systemen, analytisches Denken und Kommunikationsstärke zeigen.",
    },
    spotlights: {
      title: "Fallstudien",
      kicker: "Wie ich arbeite",
      metaTitle: "Fallstudien",
      copy:
        "Ein erzählerischer Blick darauf, wie ich Plattformarchitektur, Datenworkflows und produktnahe Engineering-Probleme angehe.",
    },
    projects: {
      title: "Ausgewählte Delivery",
      kicker: "Plattformen, Produkte, Systeme",
      metaTitle: "Delivery",
      copy:
        "Repräsentative Arbeiten aus Full-Stack-Engineering, datenintensiven Anwendungen, Workflow-Automatisierung und technischer Führung.",
    },
    profiles: {
      title: "Externe Profile",
      kicker: "Öffentliche Präsenz",
      metaTitle: "Profile",
      copy:
        "Ein schneller Überblick über die Orte, an denen meine Engineering-Arbeit, mein Forschungshintergrund und mein professionelles Profil öffentlich sichtbar sind.",
    },
    contact: {
      title: "Kontakt",
      kicker: "Senior-/Staff-Opportunities",
      metaTitle: "Kontakt",
      copy:
        "Wenn Sie für eine Rolle suchen, die Produktsinn, technische Tiefe und End-to-End-Verantwortung braucht, ist das hier der beste Startpunkt.",
    },
    services: {
      title: "Mein Beitrag",
      kicker: "Wo ich Mehrwert schaffe",
      metaTitle: "Mehrwert",
      copy:
        "Diese Seite fasst die Art von Staff-Level-Engineering-Beitrag zusammen, den ich in einer starken Produkt- oder Plattformorganisation leisten möchte.",
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
    headline: "Senior Full-Stack Engineer für datenintensive Produkte und Plattformen",
    location: "Berlin, Deutschland",
    address: "10589 Berlin-Charlottenburg",
    phone: "Bitte kontaktieren Sie mich per E-Mail",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "Ich baue und führe Softwaresysteme, die komplexe Datenworkflows in verlässliche Produkte übersetzen. Meine Stärke ist End-to-End-Verantwortung über Frontend, Backend, Plattform und Analytics hinweg, besonders dort, wo Teams starke Umsetzung bei hohem technischem Kontext brauchen.",
    interests: [
      "Produktnahes Engineering",
      "Datenplattformen und interne Tools",
      "Workflow-Automatisierung",
      "Plattformstabilität und Developer Experience",
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
      "Systemarchitektur",
    ],
  },
  impactHighlights: [
    {
      icon: "mdi-layers-triple-outline",
      value: "8+ Jahre",
      label: "Komplexe technische Delivery",
      detail: "Leitung von Projekten über Anwendungstechnik, Datensysteme und die Übersetzung von Forschung in Produkte hinweg.",
    },
    {
      icon: "mdi-web",
      value: "Mehrere Plattformen",
      label: "End-to-End geliefert",
      detail: "Gebaut und geliefert: Webplattformen, Dashboards, APIs und Workflow-Tooling mit Produktionscharakter.",
    },
    {
      icon: "mdi-database-cog-outline",
      value: "Große Datensätze",
      label: "Datenintensives Engineering",
      detail: "Pipelines und Analysesysteme für hochvolumige wissenschaftliche und operative Daten entworfen.",
    },
    {
      icon: "mdi-account-group-outline",
      value: "Funktionsübergreifend",
      label: "Stakeholder-Übersetzung",
      detail: "Zwischen Wissenschaftlern, Domänenexperten, Partnerteams und technischen Mitwirkenden gearbeitet, um nutzbare Systeme zu liefern.",
    },
  ],
  careerStages: [
    {
      period: "08/2019 - 02/2026",
      title: "Wissenschaftlicher Mitarbeiter (Promotion)",
      institution: "Technische Universität Berlin, Klimatologie",
      description:
        "Leitete Klima- und Erdsystemforschungsprogramme und lieferte datenintensive Plattformen für Analyse, Visualisierung und Publikationsworkflows.",
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
        "Konzipierte und leitete Lehrveranstaltungen in Statistik, Klimatologie, wissenschaftlichem Programmieren und Fernerkundungsanalyse mit starkem Praxisbezug.",
      focusAreas: ["Statistik mit R", "Wissenschaftliches Programmieren", "Forschungskommunikation"],
    },
    {
      period: "02/2024 - heute",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Beriet Biotech-Teams zu wissenschaftlicher Kommunikation und Zeitreihenanalyse und überführte Daten in belastbare Entscheidungsgrundlagen und Reports.",
      focusAreas: ["BioTech-Beratung", "Zeitreihenanalyse", "Wissenschaftskommunikation"],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Wissenschaftliche Hilfskraft",
      institution: "Potsdam-Institut für Klimafolgenforschung (PIK), ISIMIP",
      description:
        "Konzipierte kontrafaktische Klimadaten-Workflows und statistische Werkzeuge für großskalige Modell- und Beobachtungsarchive.",
      focusAreas: ["ATTRICI-Algorithmus", "Kontrafaktische Klimadaten", "Python"],
    },
    {
      period: "02/2017 - 01/2019",
      title: "Studentische Hilfskraft",
      institution: "Humboldt-Universität zu Berlin, Klimageographie",
      description:
        "Untersuchte Hitzewellenprojektionen und urbane Muster thermischer Belastung in Berlin mit mesoskaliger Modellierung und reproduzierbaren Analysepipelines.",
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
      authors: "Schmidt, B.",
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
      authors: "Schmidt, B. et al.",
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
      authors: "Schmidt, B. et al.",
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
      authors: "Schmidt, B. et al.",
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
        "Leitung der Entwicklung einer datenreichen Webplattform zur Visualisierung und Exploration von Metadaten und Beziehungen in den Erdsystemwissenschaften.",
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
        "Leitete das Analyse-Engineering für hochvolumige atmosphärische Modelldaten, um Niederschlagsquellendynamiken zu untersuchen und reproduzierbare Klima-Evidenz zu liefern, einschließlich Galapagos-Fallstudien.",
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
        "Leitete Datenmanagement- und Visualisierungsinfrastruktur für urbane Klimaprogramme und lieferte Web-Werkzeuge sowie interoperable Datenstandards.",
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
        "Konzipierte und lieferte Modellierungs-Workflows für klimatologische Datensätze zur Untersuchung von Kipppunkt-Dynamiken in zentralasiatischen Seesystemen.",
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
        "Leitete datenintensive Klima-Workflows und lieferte wissenschaftliche Webanwendungen bei gleichzeitiger Koordination publikationsreifer Forschungsergebnisse.",
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
        "Berät Biotech-Teams zu wissenschaftlicher Kommunikation, Zeitreihenanalyse und entscheidungsorientiertem Reporting.",
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
        "Konzipiert und lehrt quantitative sowie programmierorientierte Kurse für umwelt- und datengetriebene Forschung.",
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
        "Konzipierte Algorithmen zur kontrafaktischen Klimadatengenerierung aus großskaligen Archiven.",
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
        "Untersuchte urbane Hitzewellendynamik und Klimaprojektionen mit mesoskaligen Modellen und reproduzierbaren Analyse-Workflows.",
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
      authors: "Schmidt, B.",
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
      authors: "Schmidt, B. et al.",
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
      authors: "Schmidt, B. et al.",
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
      authors: "Schmidt, B. et al.",
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
      authors: "Schneider, M. K., Turini, N., Ballari, D., Bayas López, S. D., Delgado Maldonado, B., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      doi: "10.1029/2025GL117553",
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
      authors: "Schmidt, B., Turini, N., Otto, M., Delgado Maldonado, B., Bayas López, S. D., Bart, F., Holtmann, A., Bendix, J., Scherer, D.",
      doi: "10.1002/joc.8924",
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
      authors: "Turini, N., Delgado Maldonado, B., Zander, S., Bayas López, S. D., Ballari, D., Célleri, R., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      doi: "10.1016/j.atmosres.2025.107918",
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
      authors: "Bart, F., Schmidt, B., Wang, X., Holtmann, A., Meier, F., Otto, M., Scherer, D.",
      doi: "10.1127/metz/2024/1233",
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
      authors: "Zander, S., Turini, N., Ballari, D., Bayas López, S. D., Célleri, R., Delgado Maldonado, B., Orellana-Alvear, J., Schmidt, B., Scherer, D., Bendix, J.",
      doi: "10.3390/atmos14081225",
      summary:
        "Analysiert räumlich-zeitliche Muster der Wolkenhäufigkeit im Galápagos-Archipel anhand von MODIS-Cloud-Mask-Daten.",
      tags: ["MODIS", "Wolkenhäufigkeit", "Galapagos"],
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
        "Untersucht, wie erhöhte meso-skalige Temperaturforcierung mikro-skalige atmosphärische Prozesse in einem Berliner Stadtquartier beeinflusst.",
      tags: ["Stadtklima", "Berlin", "Meso-skalige Forcierung"],
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
        "Untersucht die Sensitivität des Wasserhaushalts im Qaidam-Becken unter Klimabedingungen des Mittelpliozäns.",
      tags: ["Wasserhaushalt", "Qaidam-Becken", "Mittelpliozän"],
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
        "Preprint zur modellierten Sensitivität des Wasserhaushalts im Qaidam-Becken gegenüber mittelpliozäner Klimaforcierung.",
      tags: ["Preprint", "Wasserhaushalt", "Qaidam-Becken"],
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
      title: "Full-Stack-Entwicklung",
      icon: "mdi-monitor-dashboard",
      audience: "Startups, Forschungslabore und Ingenieurteams",
      description:
        "End-to-End-Entwicklung datenreicher Webanwendungen und APIs — vom Datenbankdesign und Backend-Services bis zu interaktiven Frontends mit Karten, Graphen und Dashboards.",
      ctaLabel: "Projekt starten",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Data Engineering & Pipelines",
      icon: "mdi-file-document-edit-outline",
      audience: "Teams mit großskaligen oder wissenschaftlichen Daten",
      description:
        "Design und Implementierung automatisierter Datenverarbeitungs-Workflows, ETL-Pipelines und Analyseinfrastruktur — für Reproduzierbarkeit und Skalierbarkeit.",
      ctaLabel: "Datenanforderungen besprechen",
      ctaHref: "mailto:benjamin.schmidt@tu-berlin.de",
    },
    {
      title: "Forschung & Wissenschaftsberatung",
      icon: "mdi-account-group-outline",
      audience: "Forschungsgruppen, BioTech und CleanTech",
      description:
        "Beratung zu wissenschaftlicher Kommunikation, statistischer Analyse, Klimadaten-Workflows und Publikationsstrategie — Brücke zwischen Domänenwissenschaft und Softwareentwicklung.",
      ctaLabel: "Beratung buchen",
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
