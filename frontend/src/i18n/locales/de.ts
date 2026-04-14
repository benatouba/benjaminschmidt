import type { SiteContent } from "@/types/site";

export const messages = {
  lang: { en: "English", de: "Deutsch", es: "Español" },
  nav: {
    overview: "Überblick",
    cv: "Lebenslauf",
    career: "Erfahrung",
    publications: "Forschung",
    spotlights: "Fallstudien",
    projects: "Projekte",
    profiles: "Profile",
    contact: "Kontakt",
    services: "Führungsprofil",
    garden: "Garten",
    ariaLabel: "Hauptnavigation",
  },
  hero: {
    eyebrow: "Senior Full-Stack Engineering · Datenplattformen · Infrastruktur",
    viewProjects: "Projekte ansehen",
    openCv: "Lebenslauf öffnen",
    contactMe: "Kontakt aufnehmen",
    researchFocus: "Aktueller Schwerpunkt",
    currentInterests: "Woran ich heute wirke",
    currentInterestsDetail:
      "Bei Alganize verantworte ich die wissenschaftliche und datenbezogene Seite des Unternehmens und arbeite gleichzeitig direkt an Produkt-Workflows, Reporting, Analytik und Umsetzung mit. Darüber hinaus baue ich datenintensive Produkte und Plattformen über Vue/Nuxt-Frontends, FastAPI/Django-Backends sowie Linux- und HPC-nahe Infrastruktur hinweg, gerade dort, wo technische Tiefe und klare Kommunikation gleichzeitig gebraucht werden.",
    coreStrengths: "Kern-Stack",
    availability: "Offen für Vollzeitrollen auf Senior- oder Staff-Level",
    orcidLabel: "ORCID",
  },
  impact: {
    kicker: "Nachweis",
    heading: "Ein Profil, das auf gelieferten Systemen basiert und nicht auf Schlagworten",
    copy:
      "Der stärkste Beleg für meine Eignung ist technische Bandbreite mit Substanz: belastbare Full-Stack-Umsetzung, anspruchsvolle Datenarbeit, Infrastrukturkompetenz und die Fähigkeit, komplexe Fachwelten in verlässliche Systeme zu übersetzen.",
  },
  clients: {
    kicker: "Ausgewählte Auftraggeber",
    heading: "Vertrauen in wissenschaftlichen, öffentlichen und angewandten Kontexten",
    copy:
      "Neben institutionellen Rollen habe ich mit Forschungs-, Klima- und Datenkunden gearbeitet, die verlässliche technische Umsetzung und klare Kommunikation unter realen Rahmenbedingungen brauchten.",
  },
  infrastructure: {
    kicker: "Systemtiefe",
    heading: "System-, Storage- und HPC-Erfahrung, die die meisten Full-Stack-Kandidaten nicht mitbringen",
    copy:
      "Meine Arbeit endet nicht auf der Anwendungsebene. Ich bringe auch praktische Erfahrung mit Linux-Administration, verteilter Speicherung, Automatisierung und HPC-nahen Umgebungen mit, einschließlich BeeGFS, InfiniBand, SaltStack und Proxmox.",
  },
  publicationHighlights: {
    kicker: "Validierte Analytik",
    heading: "Forschung als Beleg für technische Tiefe, Validierungsdisziplin und Systemdenken",
    copy:
      "Diese Publikationen sind hier nicht bloß akademischer Schmuck. Sie zeigen, dass ich analytische Systeme aufbauen, gegen reale Beobachtungen validieren, Unsicherheit sauber quantifizieren und Ergebnisse verständlich einordnen kann.",
    openDetail: "Detaillierte Analyse öffnen",
    viewAll: "Alle Publikationsanalysen ansehen",
  },
  publicationDetail: {
    openSource: "Originaltext öffnen",
    openDoi: "DOI öffnen",
    mainFindings: "Zentrale Ergebnisse",
    whyItMatters: "Warum das relevant ist",
    recruiterTakeaway: "Was das über mich zeigt",
    keyMetrics: "Wichtige Kennzahlen und Fakten",
    backToPublications: "Zur Übersicht der Publikationsanalysen",
  },
  cv: {
    kicker: "Karriereprofil",
    heading: "Lebenslauf",
    copy:
      "Eine kompakte, gut lesbare Zusammenfassung der Erfahrung, die für Senior- und Staff-Rollen in produkt-, plattform-, daten- und infrastrukturlastigen Umgebungen am relevantesten ist.",
    download: "CV als PDF herunterladen",
    profileTitle: "Aktuelle Positionierung",
    professionalAppointments: "Erfahrung",
    education: "Ausbildung",
    awardsAndHonors: "Akademische Auszeichnungen",
    certifications: "Zertifizierungen",
    selectedClients: "Ausgewählte Auftraggeber",
  },
  career: {
    kicker: "Erfahrung",
    heading: "Rollen, in denen ich Systeme geliefert, technische Arbeit geführt und komplexe Fachwelten in Software übersetzt habe",
    copy:
      "Der rote Faden meiner Laufbahn ist nicht enge Wissenschaft, sondern technische Verantwortung in datenintensiven und fachlich anspruchsvollen Umgebungen, in denen Engineering, Urteilskraft und Kommunikation gleichzeitig gefragt sind.",
  },
  publications: {
    kicker: "Forschung und technische Tiefe",
    heading: "Vertiefte Analysen meiner Publikationen",
    copy:
      "Ein genauerer Blick auf die Arbeit hinter der Publikationsliste: was die einzelnen Beiträge tatsächlich zeigen, warum sie relevant sind und was sie über meine technischen und analytischen Stärken aussagen.",
    read: "Detaillierte Analyse lesen",
    doi: "DOI",
    filterAll: "Alle",
    empty: "Keine Publikationsanalysen passen zum aktuellen Filter.",
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
    kicker: "Ausgewählte Projekte",
    heading: "Produkte, Plattformen und Systeme, die ich tatsächlich gebaut habe",
    copy:
      "Die stärkste Version meines Profils ist konkret: Geoplattformen, B2B-Produktsysteme, Datenportale, Klimadaten-Engineering und standardsgestützte Infrastruktur für komplexe Abläufe.",
    stack: "Technologien",
    outcomes: "Was ich geliefert habe",
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
    kicker: "Führungsprofil",
    heading: "Wie ich auf Senior- und Staff-Level wirke",
    copy:
      "Ich bin besonders stark in Rollen, die einen praxisnahen Senior Engineer mit breiter Spannweite brauchen: Produkturteil, Umsetzung über Backend und Frontend hinweg, Daten- und Analysekompetenz sowie genug Infrastrukturverständnis für belastbare Architekturentscheidungen.",
  },
  contact: {
    kicker: "Kontakt",
    heading: "Sie besetzen eine anspruchsvolle Senior- oder Staff-Engineering-Rolle?",
    copy:
      "Wenn die Rolle an der Schnittstelle von Produkt, Daten, Plattform und technischer Kommunikation liegt, ist ein Gespräch sinnvoll. Besonders relevant bin ich dort, wo Komplexität real ist und die Systeme trotzdem geliefert werden müssen.",
    primaryCta: "Mail zu einer Rolle senden",
    secondaryCta: "Lebenslauf ansehen",
    openProfile: "Profil öffnen",
    comingSoon: "Demnächst verfügbar",
  },
  footer: {
    copyright: "© {year} Dr. Benjamin Schmidt",
    location: "Berlin, Deutschland",
    builtWith: "Erstellt mit Vue 3, TypeScript und Vuetify.",
    tagline: "Senior Full-Stack Engineer | Datenplattformen, Infrastruktur und anspruchsvolle Systeme",
  },
  pages: {
    cv: {
      title: "Lebenslauf",
      kicker: "Senior-/Staff-Engineering-Profil",
      metaTitle: "Lebenslauf",
      copy:
        "Eine praktische Zusammenfassung der Software-, Daten-, Infrastruktur-, Kommunikations- und Führungserfahrung, die ich in Senior- und Staff-Rollen einbringe.",
    },
    career: {
      title: "Erfahrung",
      kicker: "Führung, Umsetzung, technische Bandbreite",
      metaTitle: "Erfahrung",
      copy:
        "Eine rollenbezogene Sicht darauf, wie ich technische Arbeit geführt, Systeme gebaut und in Umgebungen gearbeitet habe, in denen Software, Domänenwissen und Kommunikation zusammenkommen mussten.",
    },
    publications: {
      title: "Forschung",
      kicker: "Technische Tiefe mit belastbarer Evidenz",
      metaTitle: "Forschung",
      copy:
        "Eine gehaltvolle Darstellung meiner Forschung und technischen Texte, gelesen als Beleg für analytische Strenge, Modellvalidierung, räumliches Denken und datenproduktnahes Arbeiten.",
      notFoundTitle: "Publikationsanalyse nicht gefunden",
      notFoundCopy:
        "Die angeforderte Publikationsanalyse ist in dieser Sprache nicht vorhanden oder noch nicht hinterlegt. Über die Forschungsübersicht gelangen Sie zurück zu den verfügbaren Analysen.",
    },
    spotlights: {
      title: "Fallstudien",
      kicker: "Wie ich baue",
      metaTitle: "Fallstudien",
      copy:
        "Ein erzählerischer Blick darauf, wie ich Produktsysteme, datenintensive Abläufe und technisch anspruchsvolle Implementierungen angehe.",
    },
    projects: {
      title: "Projekte",
      kicker: "Plattformen, Produkte, Systeme",
      metaTitle: "Projekte",
      copy:
        "Repräsentative Arbeiten aus Full-Stack-Engineering, Klima- und Forschungsdatensystemen, B2B-Workflows und Geoplattformen.",
    },
    profiles: {
      title: "Externe Profile",
      kicker: "Öffentlich nachvollziehbarer Track Record",
      metaTitle: "Profile",
      copy:
        "Orte, an denen mein Code, meine Forschung, meine Publikationen und mein berufliches Profil öffentlich sichtbar und unabhängig überprüfbar sind.",
    },
    contact: {
      title: "Kontakt",
      kicker: "Senior- und Staff-Chancen",
      metaTitle: "Kontakt",
      copy:
        "Wenn Sie eine Engineering-Rolle besetzen, die technische Breite, Urteilskraft und End-to-End-Verantwortung verlangt, ist dies der richtige Einstieg.",
    },
    services: {
      title: "Führungsprofil",
      kicker: "Wie ich wirke",
      metaTitle: "Führungsprofil",
      copy:
        "Die Kombination aus technischer Bandbreite, Systemtiefe, analytischer Strenge und Kommunikationsstärke, die ich in das richtige Team einbringen kann.",
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
    headline: "Senior Full-Stack Engineer für datenintensive Produkte, Plattformen und Infrastruktur",
    location: "Berlin, Deutschland",
    address: "10589 Berlin-Charlottenburg",
    phone: "Bitte kontaktieren Sie mich per E-Mail",
    email: "benjamin.schmidt@tu-berlin.de",
    orcid: "0000-0002-9669-3360",
    summary:
      "Ich baue und leite Softwaresysteme in Umgebungen mit ungewöhnlich hohem technischem Kontext. Meine Kernstärke ist, komplexe Abläufe in funktionierende Produkte zu übersetzen, von Vue- und Nuxt-Frontends über FastAPI- und Django-Backends bis hin zu automatisierten Datenpipelines, Analyse- und Visualisierungsschichten, speicherlastigen Systemen, Linux-Administration und HPC-naher Infrastruktur. Hinzu kommt viel Erfahrung in der Kommunikation von Klima- und Forschungsdaten.",
    interests: [
      "Full-Stack-Produktentwicklung",
      "Datenintensive Anwendungen",
      "Workflow-Automatisierung",
      "System- und Storage-Infrastruktur",
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
      value: "8+ Jahre",
      label: "Engineering in anspruchsvollen Fachdomänen",
      detail: "Systeme in Forschung, Klima, Biotech, öffentlichen Datenkontexten und infrastrukturlastigen Umgebungen gebaut.",
    },
    {
      icon: "mdi-web",
      value: "Mehrere gelieferte Produkte",
      label: "Full-Stack-Umsetzung",
      detail: "Produktionsnahe Webplattformen, öffentliche Datenportale, interne Werkzeuge, APIs, Dashboards und Reports geliefert.",
    },
    {
      icon: "mdi-database-cog-outline",
      value: "Große Datenmengen",
      label: "Datenengineering und Analytik",
      detail: "Mit netCDF, xarray, Geodaten, Forschungsmetadaten, Proben-Workflows und automatisierten Analysepipelines gearbeitet.",
    },
    {
      icon: "mdi-server-network",
      value: "Infrastrukturtiefe",
      label: "Storage, Linux und HPC-Betrieb",
      detail: "Praktische Erfahrung mit verteilten Dateisystemen, Linux-Systemadministration, InfiniBand und Automatisierung in Forschungskomputing-Umgebungen.",
    },
  ],
  careerStages: [
    {
      period: "02/2024 - heute",
      title: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      description:
        "Leite die wissenschafts- und datenbezogene Seite von Alganize und arbeite gleichzeitig als technisch starker Senior-Beitragender an Reporting, Analytik, fachlicher Übersetzung, Produktlogik und anwendungsnahen Softwareprojekten.",
      focusAreas: [
        "Verantworte wissenschaftliche und datenbezogene Strategie über kundennahe und interne Projekte hinweg",
        "Übersetze komplexe Fachanforderungen in Scoring-, Reporting- und Produkt-Workflows",
        "Arbeite zwischen technischen Teams, wissenschaftlicher Interpretation und Geschäftskommunikation",
      ],
    },
    {
      period: "2019 - heute",
      title: "Selbstständiger Engineer und Berater",
      institution: "Ausgewählte wissenschaftliche und datenorientierte Auftraggeber",
      description:
        "Arbeitete mit Forschungs-, öffentlichen und klimaorientierten Auftraggebern, die belastbare technische Umsetzung, Datenkompetenz und klare Kommunikation in fachlich anspruchsvollen Umgebungen brauchten.",
      focusAreas: [
        "Unterstützte unter anderem farm-food-climate, Freie Universität Berlin und Technische Universität Berlin",
        "Lieferte technische Arbeit an der Schnittstelle von Datenanalyse, Software, Fachkommunikation und Infrastruktur",
        "Arbeitete wirksam in Rollen mit hoher Eigenverantwortung und wenig Kontextvorgabe",
      ],
    },
    {
      period: "08/2019 - 02/2026",
      title: "Wissenschaftlicher Mitarbeiter (Promotion)",
      institution: "Technische Universität Berlin, Klimatologie",
      description:
        "Baute und leitete datenintensive Software, Klimadaten-Engineering-Workflows und plattformartige Systeme in einem hoch technischen Forschungsumfeld, von Geoprodukten über Analysepipelines bis hin zu Infrastruktur und nutzerorientierten Werkzeugen.",
      focusAreas: [
        "Leitete MaRESS als Full-Stack-Geoplattform mit Karte, Graph, PDF/NLP-Workflows und PostGIS-Analysen",
        "Baute DARWIN-Werkzeuge für netCDF-Verarbeitung, Modellvalidierung, Trendanalyse und reproduzierbare Klimaanalytik",
        "Lieferte standardsgestützte Datensysteme für [UC]² und UCO Berlin über Validierung, APIs, Portale und öffentlichen Datenzugang hinweg",
      ],
    },
    {
      period: "10/2019 - 02/2026",
      title: "Dozent",
      institution: "Freie Universität Berlin und Technische Universität Berlin",
      description:
        "Konzipierte und lehrte quantitative und programmierintensive Lehrveranstaltungen und schärfte damit weiter meine Stärke in Kommunikation, Mentoring, Systemdenken und strukturierter technischer Erklärung.",
      focusAreas: [
        "Lehre in wissenschaftlichem Programmieren, Statistik, Klimatologie und Fernerkundung",
        "Vermittelte technische Inhalte an heterogene Zielgruppen",
        "Schuf Klarheit in interdisziplinären und technisch anspruchsvollen Kontexten",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      title: "Wissenschaftliche Hilfskraft",
      institution: "Potsdam-Institut für Klimafolgenforschung (PIK), ISIMIP",
      description:
        "Baute Workflow- und Algorithmusgrundlagen für kontrafaktische Klimadaten und stärkte damit meine Basis in großskaliger Datenverarbeitung und methodischer Softwareumsetzung.",
      focusAreas: [
        "Arbeitete an ATTRICI-Workflows für kontrafaktische Klimadaten",
        "Baute verlässliche Python-Verarbeitung für große Datenarchive",
        "Trug zu methodisch anspruchsvoller technischer Umsetzung bei",
      ],
    },
  ],
  publications: [
    {
      title: "Regionales dynamisches Downscaling und Analyse des Wasserhaushalts über verschiedene Regionen und Zeitskalen",
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
      title: "The Central Europe Refined analysis version 2 (CER v2): evaluating three decades of high-resolution precipitation data for the Berlin-Brandenburg metropolitan region",
      venue: "Meteorologische Zeitschrift",
      year: 2025,
      kind: "Journal",
      authors: "Bart, F., Schmidt, B., Wang, X., Holtmann, A., Meier, F., Otto, M., Scherer, D.",
      summary:
        "Evaluierung einer hochaufgelösten Niederschlagsanalyse und verbesserten Modellkonfiguration für die Region Berlin-Brandenburg.",
      tags: ["Niederschlag", "Regionalklima", "Validierung"],
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
        "Validierung und Analyse eines hochaufgelösten Downscaling-Produkts für den Galápagos-Archipel.",
      tags: ["Dynamisches Downscaling", "Reanalyse", "Galápagos"],
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
        "Regionalklimatische Modellstudie dazu, wie Zirkulation und Topographie den Wasserhaushalt eines Beckens unter Mid-Pliozän-Bedingungen verändern.",
      tags: ["Wasserhaushalt", "Regionale Klimamodellierung", "Pliozän"],
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
        "Satellitengestützte Analyse dazu, wie sich Wolkenhäufigkeit im Galápagos-Archipel mit Topographie, Jahreszeit und ENSO-Bedingungen verändert.",
      tags: ["MODIS", "Wolkenhäufigkeit", "Fernerkundung"],
      doi: "10.3390/atmos14081225",
      link: "https://doi.org/10.3390/atmos14081225",
    },
  ],
  publicationInsights: [
    {
      slug: "gar-trend-analysis",
      title: "Klimatische Trends in bodennahen und troposphärischen Feldern des Galápagos-Archipels auf Basis von GAR",
      outlet: "Dissertation / GAR-Analyse",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary:
        "Eine Trendanalyse auf Basis des hochaufgelösten GAR-Datensatzes, die kurzfristige Variabilität von längerfristigen atmosphärischen Veränderungen trennt.",
      tags: ["Klimatrends", "GAR", "Galápagos"],
      oneLiner:
        "Nutzte einen hochaufgelösten regionalen Klimadatensatz, um starke interannuelle Variabilität von subtileren langfristigen atmosphärischen Veränderungen zu trennen.",
      findings: [
        "Die starke jährliche Variabilität von Temperatur, Feuchte und Niederschlag wird vor allem durch ENSO-Anomalien geprägt.",
        "Für die betrachteten bodennahen Schlüsselvariablen wurden keine statistisch signifikanten langfristigen Trends gefunden.",
        "In der Troposphäre zeigten sich dennoch erwärmungsbedingte Strukturänderungen, darunter zunehmende Schichtdicken in Verbindung mit steigender potenzieller Temperatur.",
      ],
      whyItMatters:
        "Die Arbeit zeigt die Disziplin, Signal und Rauschen in einem klimatisch komplexen und datenarmen Umfeld sauber zu trennen. Genau dieselbe Haltung ist in starker Analytik und Datenplattformarbeit entscheidend.",
      recruiterTakeaway:
        "Zeigt analytische Strenge, sorgfältige Validierung und die Fähigkeit, in Systemen mit hoher Unsicherheit und starker zeitlicher Variabilität belastbare Schlüsse zu ziehen.",
      metrics: ["GAR-Auflösung von etwa 4 km²", "Keine signifikanten bodennahen Trends", "Troposphärisches Erwärmungssignal identifiziert"],
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
        "Ein validiertes hochaufgelöstes Downscaling-Produkt für die Galápagos-Inseln, entwickelt, um aus grober Reanalyse lokal brauchbare Klimainformationen zu erzeugen.",
      tags: ["WRF", "Downscaling", "Validierung"],
      doi: "10.1002/joc.8924",
      oneLiner:
        "Baute und validierte eine hochaufgelöste Klimaanalyse-Pipeline, die grobe globale Eingangsdaten in ortsspezifische regionale Einsichten übersetzt.",
      findings: [
        "Der GAR-Datensatz liefert ein mesoskaliges Klimaprodukt für eine Region mit räumlich dünner und ungleich verteilter Beobachtungsbasis.",
        "Die Validierung zeigte sehr starke Übereinstimmung für Lufttemperatur und spezifische Feuchte sowie mittlere bis starke Übereinstimmung für Tagesniederschlag.",
        "Die räumlichen Klimamuster über die Inseln hängen stark von der Höhe ab, mit orographischem Niederschlag in der Trockenzeit und thermisch getriebener Konvektion in der Regenzeit.",
      ],
      whyItMatters:
        "Das ist grundlegende Datenproduktarbeit: nicht nur ein Modell laufen zu lassen, sondern etwas so Verlässliches zu bauen, dass darauf weitere Wissenschaft, Planung und Interpretation aufsetzen können.",
      recruiterTakeaway:
        "Zeigt Systemaufbau, Validierung an realen Messungen und die Fähigkeit, rohe Rechenergebnisse in ein vertrauenswürdiges Analyseprodukt zu überführen.",
      metrics: ["2 km Auflösung", "2-Stunden-Zeitauflösung", "WRF v4.3.3", "Validierung mit Stationsdaten"],
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
        "Eine Modellbewertungs- und Verbesserungsstudie, die zeigt, wie geänderte Forcings und Modellphysik die Qualität einer langjährigen regionalen Niederschlagsanalyse deutlich verbessert haben.",
      tags: ["CER v2", "Niederschlag", "Validierung"],
      doi: "10.1127/metz/2024/1233",
      oneLiner:
        "Verbesserte eine mehrdekadische regionale Niederschlagsanalyse durch systematische Physik-Tuning-Schritte und sauberen Vergleich mit Beobachtungen.",
      findings: [
        "CER v2 verbesserte die Niederschlagsleistung deutlich gegenüber der früheren CER-Konfiguration.",
        "Die beste Konfiguration kombinierte Kain-Fritsch-Konvektion mit Thompson-Mikrophysik.",
        "CER v2 übertraf CER v1 und ERA5 in Winter, Frühling und Herbst, während der Sommer als konvektiv schwierigste Jahreszeit bestehen blieb.",
      ],
      whyItMatters:
        "Die Studie zeigt ehrliche, engineering-nahe Iteration: ein System verbessern, sauber benchmarken, dokumentieren, was besser wurde, und explizit benennen, was unter schwierigen Bedingungen weiterhin problematisch ist.",
      recruiterTakeaway:
        "Zeigt Benchmark-Disziplin, messbare Leistungsverbesserung unter Unsicherheit und die Fähigkeit, langlebige technische Systeme gezielt zu verbessern.",
      metrics: ["30 Jahre Validierung", "94 % geringerer jährlicher Median-Bias gegenüber ERA5", "55 % geringere jährliche RMSD gegenüber CER v1", "44 Jahre Datensatzspanne"],
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
        "Eine regional-klimatische Modellstudie dazu, warum sich der Wasserhaushalt eines Beckens unter einem wärmeren Klimazustand anders verhielt.",
      tags: ["Wasserhaushalt", "Pliozän", "Regionale Klimamodellierung"],
      doi: "10.1029/2020JD033965",
      oneLiner:
        "Nutzte hochaufgelöste regionale Klimamodellierung, um zu erklären, wie Zirkulation und Topographie den Wasserhaushalt eines Beckens in einem wärmeren Weltzustand verändern.",
      findings: [
        "Das Mid-Pliozän erhöhte den jährlichen Wasserhaushalt des Beckens gegenüber heutigen Bedingungen.",
        "Die Veränderung wurde durch stärkeren Feuchteeintrag an der Westgrenze und geringeren Feuchteabfluss an der Ostgrenze getragen.",
        "Der Mechanismus verknüpft großräumige Zirkulationsänderungen mit regionaler topographischer Steuerung.",
      ],
      whyItMatters:
        "Die Arbeit verbindet mehrere Erklärungsebenen, von großräumiger Zirkulation bis zu beckenbezogener Hydrologie. Genau diese Art von Systemdenken ist auch in fortgeschrittener Analytik und Produktarbeit wertvoll.",
      recruiterTakeaway:
        "Zeigt multiskaliges Denken, physikalisch fundierte Analyse und die Fähigkeit, komplexes Systemverhalten präzise zu erklären.",
      metrics: ["Publiziert in JGR Atmospheres", "Mid-Pliozän bei ~400 ppm CO2", "WRF-Downscaling auf Basis von ECHAM5"],
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
        "Eine satellitengestützte Studie darüber, wie sich Wolkenhäufigkeit in Abhängigkeit von Relief, Jahreszeit, Höhe und ENSO-Bedingungen über die Galápagos-Inseln verändert.",
      tags: ["MODIS", "Wolkenhäufigkeit", "Fernerkundung"],
      doi: "10.3390/atmos14081225",
      oneLiner:
        "Analysierte vielschichtige Wolkenmuster, um zu zeigen, wie Relief, Passatwinde und ENSO die Feuchteregime im Galápagos-Archipel formen.",
      findings: [
        "Die Wolkenhäufigkeit variiert stark mit Jahreszeit, Jahr, Gelände und Inselposition statt als einheitliches regionales Signal aufzutreten.",
        "Die höchsten Wolkenhäufigkeiten treten in mittleren Höhenlagen an südostexponierten, den Passatwinden zugewandten Hängen auf.",
        "ENSO-Bedingungen verändern sowohl die Gesamtbewölkung als auch die Stärke topographischer Kontraste deutlich.",
      ],
      whyItMatters:
        "Die Arbeit ist ein starkes Beispiel für terrain-sensitive Fernerkundungsanalyse, die beobachtete Muster sauber auf physikalische Treiber zurückführt.",
      recruiterTakeaway:
        "Zeigt Fernerkundungskompetenz, geospatiales Denken und die Fähigkeit, aus großen Beobachtungsdatensätzen tragfähige Struktur zu gewinnen.",
      metrics: ["MODIS Cloud Mask", "Eigenständiges Verhalten oberhalb von ~900 m", "Vergleich El Niño 2015 vs La Niña 2007"],
      link: "https://doi.org/10.3390/atmos14081225",
    },
  ],
  projects: [
    {
      name: "Alganize Status",
      role: "Chief Scientific Officer · technische und datenbezogene Führung",
      status: "Active",
      timeframe: "2024 - heute",
      summary:
        "Eine produktionsnahe B2B-Full-Stack-Plattform für Boden- und Zustandsanalytik, inklusive Kursverwaltung, Proben-Workflows, Reporting, Gesundheitsbewertung, Handlungsempfehlungen, Mehrsprachigkeit, CI/CD und realen Deployment-Pfaden.",
      stack: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
      outcomes: [
        "Lieferte einen rollenbasierten Produktworkflow von Onboarding bis Reporting und Dokumentenverwaltung",
        "Gestaltete Health-Score-, Proben- und Empfehlungssysteme entlang realer operativer Anforderungen",
        "Arbeitete als CSO über Domänenlogik, Produktstruktur, Analytik und technische Kommunikation hinweg",
      ],
      link: "https://status.alganize.de",
    },
    {
      name: "MaRESS",
      role: "Lead Engineer für Produktarchitektur und Umsetzung",
      status: "Active",
      timeframe: "2023 - 2026",
      summary:
        "Eine Full-Stack-Geoplattform, die Publikationen aus Zotero übernimmt, PDFs per NLP- und OCR-Workflows verarbeitet, Ergebnisse in PostGIS speichert und interaktive Karten-, Graph- und Export-Workflows bereitstellt.",
      stack: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "PostGIS", "Celery", "Redis"],
      outcomes: [
        "Verantwortete Architektur über Frontend, Backend, asynchrone Verarbeitung und geospatiale Datenflüsse hinweg",
        "Baute GIS-Funktionen wie Regions-Upload, Buffering, Clipping und distanzbasierte räumliche Analysen",
        "Machte aus einem komplexen Rechercheproblem eine nutzbare produktartige Plattform",
      ],
      link: "https://www.nfdi4earth.de/2participate/incubator-lab",
    },
    {
      name: "[UC]² Data Management System",
      role: "Full-Stack-Engineer für Validierung, Metadaten und Zugriffsworkflows",
      status: "Completed",
      timeframe: "2019 - 2025",
      summary:
        "Ein standardsgestütztes Datenmanagementsystem für UC2-Klimadatensätze mit Upload, Validierung, Metadatenextraktion, Rechtemanagement, Katalogsuche und kontrolliertem Download netCDF-basierter Datenprodukte.",
      stack: ["Vue 2", "Vuetify", "Django", "DRF", "Python", "NetCDF"],
      outcomes: [
        "Implementierte standardbasierte Ingestion und Konformitätsprüfung für UC2-netCDF-Dateien",
        "Baute rechtebasierte Metadaten- und Download-Workflows für kooperierende Institutionen",
        "Schuf eine verlässliche Validierungs- und Austauschschicht für urbane Klimadatenoperationen",
      ],
      link: "https://dms.klima.tu-berlin.de",
    },
    {
      name: "UCO Berlin",
      role: "Full-Stack-Engineer für öffentliches Portal, APIs und Live-Datenansichten",
      status: "Completed",
      timeframe: "2020 - 2025",
      summary:
        "Ein öffentliches urbanes Klima-Datenportal mit API-Stack, Suchfunktionen, geospatialer Exploration, Provider-Integrationen, Liveviews, Radarprodukten und SSR-basierter Auslieferung.",
      stack: ["Nuxt", "Vue 3", "Django", "DRF", "PostGIS", "OpenLayers", "Plotly"],
      outcomes: [
        "Lieferte öffentlich nutzbare Klimadaten-UX mit Karte, Tabelle, Metadaten und Download-Workflows",
        "Integrierte interne UC2-Daten und externe Provider in einen normalisierten Portal-Katalog",
        "Baute Live-Monitoring- und API-Funktionen für eine reale Observatoriumsplattform",
      ],
      link: "https://uco.berlin/",
    },
    {
      name: "DARWIN Klimadaten-Engineering",
      role: "Lead Engineer für Modell-Daten-Verarbeitung und analytische Werkzeuge",
      status: "Completed",
      timeframe: "2019 - 2026",
      summary:
        "Ein Python- und xarray-basiertes Klimadaten-Engineering-Toolkit für WRF/GAR-Verarbeitung, Stations-Remapping, Trendanalyse, Modellvalidierung, abgeleitete Variablen und publikationsreife Visualisierung.",
      stack: ["Python", "xarray", "netCDF", "CDO", "salem", "pandas", "NumPy", "SaltStack"],
      outcomes: [
        "Baute wiederverwendbare Workflows für große Klimamodellarchive und Stationsvergleiche",
        "Automatisierte Nachverarbeitung, Remapping und Trendanalyse rund um netCDF-Daten",
        "Unterstützte validierte Analyseprodukte und publikationsfähige Klimaergebnisse",
      ],
      link: "https://vhrz669.hrz.uni-marburg.de/darwin/home.do",
    },
  ],
  skillBadges: undefined,
  githubStats: undefined,
  cvAppointments: [
    {
      period: "02/2024 - heute",
      role: "Chief Scientific Officer",
      institution: "Alganize GmbH",
      location: "Berlin",
      summary:
        "Verantworte die wissenschaftliche und datenbezogene Seite von Alganize und arbeite direkt an Produktlogik, Reporting, Analytik und fachlich anspruchsvollen Softwarevorhaben mit.",
      highlights: [
        "Verantworte wissenschaftliche und datenbezogene Strategie über kundennahe und interne Projekte hinweg",
        "Übersetze Fachanforderungen in Scoring-, Reporting- und Produkt-Workflows",
        "Arbeite als starker technischer Gegenpart zwischen Analytik, Produkt und Kommunikation",
      ],
    },
    {
      period: "08/2019 - 02/2026",
      role: "Wissenschaftlicher Mitarbeiter (Promotion)",
      institution: "Technische Universität Berlin, Klimatologie",
      location: "Berlin",
      summary:
        "Baute und leitete Full-Stack-Plattformen, Klimadaten-Engineering-Workflows, öffentliche Datensysteme und technisch anspruchsvolle Analysewerkzeuge über mehrere Langzeitprojekte hinweg.",
      highlights: [
        "Leitete die technische Umsetzung über MaRESS, DARWIN, UC2 DMS und UCO Berlin hinweg",
        "Arbeitete über Frontend, Backend, Geodaten, Analytik und Infrastruktur hinweg",
        "Machte aus fachlich komplexen wissenschaftlichen Abläufen nutzbare Systeme, valide Produkte und reproduzierbare Pipelines",
        "Verband Umsetzung, Datenqualität, Publikationsarbeit und Stakeholder-Kommunikation",
      ],
    },
    {
      period: "2019 - heute",
      role: "Selbstständiger Engineer und Berater",
      institution: "Ausgewählte wissenschaftliche und datenorientierte Auftraggeber",
      location: "Berlin",
      summary:
        "Unterstützte Auftraggeber in Forschung, öffentlichem Bereich und Klimaumfeld mit technischer Umsetzung, Datenarbeit und klarer Kommunikation.",
      highlights: [
        "Arbeitete mit Auftraggebern wie farm-food-climate, Freie Universität Berlin und Technische Universität Berlin",
        "Unterstützte Software-, Analyse- und Kommunikationsarbeit in fachlich anspruchsvollen Umfeldern",
        "Lieferte wirksam in Rollen mit hoher Eigenständigkeit und wenig Einarbeitungsspielraum",
      ],
    },
    {
      period: "10/2019 - heute",
      role: "Dozent",
      institution: "FU Berlin und TU Berlin",
      location: "Berlin",
      summary:
        "Konzipierte und lehrte technische Kurse in Programmierung, Statistik, Klimatologie und Fernerkundung für heterogene Zielgruppen.",
      highlights: [
        "Baute starke Kommunikations- und Mentoring-Kompetenz durch technische Lehre auf",
        "Strukturierte komplexe Systeme und Methoden in lehrbare Abläufe",
        "Vertiefte die Fähigkeit, schwierige technische Inhalte klar und adressatengerecht zu erklären",
      ],
    },
    {
      period: "02/2019 - 07/2019",
      role: "Wissenschaftliche Hilfskraft",
      institution: "PIK, ISIMIP",
      location: "Potsdam",
      summary:
        "Implementierte algorithmische Werkzeuge und großskalige Datenworkflows für kontrafaktische Klimadaten.",
      highlights: [
        "Arbeitete an ATTRICI-Workflows für kontrafaktische Klimadaten",
        "Baute verlässliche Python-Verarbeitung für große Datenarchive",
        "Trug zu methodisch anspruchsvoller Modell- und Softwareumsetzung bei",
      ],
    },
  ],
  education: [
    {
      period: "04/2025",
      degree: "Promotion (Dr. rer. nat.)",
      institution: "Technische Universität Berlin",
      details:
        "Klimatologie, magna cum laude. Dissertation zu regionalem dynamischem Downscaling, atmosphärischen Trends und Wasserhaushaltsanalyse über mehrere Regionen und Zeitskalen hinweg.",
    },
    {
      period: "03/2019",
      degree: "MSc Global Change Geography",
      institution: "Humboldt-Universität zu Berlin",
      details:
        "Mit Auszeichnung abgeschlossen (1,2). Einschließlich internationaler Felderfahrung in arktischer seismischer Exploration am University Centre in Svalbard.",
    },
    {
      period: "09/2016",
      degree: "BSc Physik des Erdsystems",
      institution: "CAU Kiel und GEOMAR",
      details: "Schwerpunkte in Meteorologie, Ozeanographie und Geophysik.",
    },
  ],
  honors: [
    {
      year: "2025",
      title: "Promotion mit magna cum laude",
      issuer: "Technische Universität Berlin",
      description:
        "Akademische Auszeichnung für fortgeschrittene Arbeit in regionaler Klimamodellierung, Downscaling und hydrologischer Analyse.",
    },
    {
      year: "2019",
      title: "MSc mit Auszeichnung",
      issuer: "Humboldt-Universität zu Berlin",
      description: "Starke quantitative Leistung in einem interdisziplinären und datenintensiven Feld.",
    },
  ],
  certifications: [
    {
      title: "Certified BeeGFS System Engineer",
      issuer: "BeeGFS",
      description:
        "Formale Zertifizierung zu Architektur, Konfiguration und Administration von BeeGFS in leistungskritischen verteilten Storage-Umgebungen.",
    },
  ],
  articleHistory: [
    {
      title: "Regionales dynamisches Downscaling und Analyse des Wasserhaushalts über verschiedene Regionen und Zeitskalen",
      outlet: "Technische Universität Berlin",
      published: "2025-04-01",
      kind: "Thesis",
      authors: "Schmidt, B.",
      summary: "Dissertation zur Methodik mehrskaligen Downscalings und hydrologischer Analyse.",
      tags: ["Dissertation", "Klimatologie", "Hydrologie"],
      link: "https://depositonce.tu-berlin.de/items/0547b9c5-ea16-4003-af03-fa67e19018d6",
    },
  ],
  blogPosts: [
    {
      slug: "building-maress",
      title: "MaRESS bauen: Geosuche, Graph-Exploration und PDF-basierte Forschungsworkflows",
      date: "2025-02-12",
      readMinutes: 7,
      summary:
        "Ein Blick darauf, wie MaRESS Geo-UX, Metadaten-Anreicherung und graphorientierte Exploration in einem Full-Stack-System verbindet.",
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
      title: "Von WRF-Ausgaben zu validierter Klimaanalytik in DARWIN",
      date: "2024-09-20",
      readMinutes: 6,
      summary:
        "Wie xarray, netCDF-Workflows, Remapping und Trendanalyse zu einem reproduzierbaren analytischen System statt zu einem Haufen Skripte werden.",
      tags: ["DARWIN", "xarray", "netCDF", "Klimadaten"],
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
      description: "Code, Umsetzungshistorie, Produktprototypen und technische Werkzeuge.",
      category: "Code",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      description: "Persistente Publikations- und Forschungsidentität.",
      category: "Academic",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      description: "Berufsprofil für Recruiting, Auswahl und Führungsgespräche.",
      category: "Professional",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      description: "Publikationsverzeichnis und Zitationsprofil.",
      category: "Academic",
    },
  ],
  services: [
    {
      title: "Produktsysteme Ende zu Ende verantworten",
      icon: "mdi-monitor-dashboard",
      description:
        "Ich kann von Architektur- und Datenmodellentscheidungen über Backend, Frontend und Nutzerworkflows bis zu dem Punkt führen, an dem ein komplexes Produkt für seine Nutzer wirklich funktioniert.",
    },
    {
      title: "Technische Ausführung auf ein höheres Niveau bringen",
      icon: "mdi-file-document-edit-outline",
      description:
        "Ich bringe Strenge in Datenqualität, Validierung, Reproduzierbarkeit und operatives Denken, wodurch Teams robustere Systeme mit weniger blinden Flecken liefern können.",
    },
    {
      title: "Komplexität übersetzen, ohne sie zu verwässern",
      icon: "mdi-account-group-outline",
      description:
        "Ich bin besonders wirksam dort, wo Engineering eng mit Fachexperten, Stakeholdern und komplexen Problemräumen arbeiten muss, ohne Tempo, Präzision oder Glaubwürdigkeit zu verlieren.",
    },
  ],
  infrastructure: [
    {
      title: "Verteilter Storage und BeeGFS",
      icon: "mdi-harddisk",
      description:
        "Certified BeeGFS System Engineer mit praktischer Erfahrung in Storage-Clustern, Metadaten- und Storage-Targets, RAID-Entscheidungen und betrieblichen Abwägungen in Forschungskomputing-Umgebungen.",
    },
    {
      title: "Linux-Administration und Automatisierung",
      icon: "mdi-console-network-outline",
      description:
        "Erfahren mit Linux-Systemadministration, SaltStack- und Ansible-basierter Automatisierung, Proxmox-Umgebungen, NixOS und der Art operativen Problemlösens, die nahe an realer Infrastruktur statt an abstrakten Plattformfolien stattfindet.",
    },
    {
      title: "HPC-Netzwerke und Storage-Workflows",
      icon: "mdi-server-network",
      description:
        "Arbeitete mit InfiniBand, iSCSI-Konzepten, ZFS, XFS, ext4, IPMI-nahen Betriebsfragen und Storage-/Netzwerk-Abwägungen in kleineren HPC-ähnlichen Umgebungen, in denen Leistung und Verlässlichkeit gleichzeitig wichtig sind.",
    },
  ],
  selectedClients: [
    {
      name: "farm-food-climate",
      note: "Angewandte Klima- und Datenarbeit in einem Umfeld mit vielen Anspruchsgruppen und hohem Kommunikationsbedarf.",
    },
    {
      name: "Freie Universität Berlin",
      note: "Technische und analytische Arbeit in einem anspruchsvollen akademischen Umfeld mit gemischten wissenschaftlichen und operativen Anforderungen.",
    },
    {
      name: "Technische Universität Berlin",
      note: "Software-, Analyse- und infrastrukturnahe Arbeit über Forschung, Lehre und Plattformentwicklung hinweg.",
    },
    {
      name: "Weitere wissenschaftliche und datenorientierte Auftraggeber",
      note: "Arbeitete als verlässlicher technischer Beitragender in Rollen mit hoher Eigenständigkeit, großer Spannweite und komplexem Fachkontext.",
    },
  ],
  contactLinks: [
    {
      label: "E-Mail",
      href: "mailto:benjamin.schmidt@tu-berlin.de",
      icon: "mdi-email-outline",
      sublabel: "Gespräch über eine Rolle starten",
    },
    {
      label: "GitHub",
      href: "https://github.com/benatouba/",
      icon: "mdi-github",
      sublabel: "Code und gelieferte Systeme prüfen",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-benjamin-schmidt/",
      icon: "mdi-linkedin",
      sublabel: "Profil für Recruiting und Hiring ansehen",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-9669-3360",
      icon: "mdi-account-badge-outline",
      sublabel: "Publikationsverzeichnis ansehen",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.de/citations?hl=de&user=cRAeTxYAAAAJ",
      icon: "mdi-school-outline",
      sublabel: "Wissenschaftlichen Track Record sehen",
    },
  ],
};
