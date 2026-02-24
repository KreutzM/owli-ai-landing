import type { SiteLang } from "../lib/i18n";

interface NavStrings {
  start: string;
  apps: string;
  gpts: string;
  research: string;
  team: string;
  support: string;
  privacy: string;
  imprint: string;
  accessibility: string;
}

interface CtaStrings {
  discoverApps: string;
  viewDetails: string;
  openInChatGpt: string;
  back: string;
  downloadPdf: string;
  viewAllGpts: string;
  viewAllPublications: string;
  viewAllProjects: string;
}

interface FilterStrings {
  all: string;
  android: string;
  windows: string;
}

interface NoticeStrings {
  requiresChatGptAccount: string;
  legalTranslationOnly: string;
  legalGermanSourceLink: string;
  machineTranslatedReviewPending: string;
  machineTranslatedReviewPendingSrOnly: string;
}

interface AriaStrings {
  skipToContent: string;
  homePage: string;
  mainNavigation: string;
  languageSelection: string;
  mobileNavigation: string;
  menu: string;
  language: string;
  footerNavigation: string;
  appFilterByPlatform: string;
}

interface HomePageStrings {
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBodyPrimary: string;
  heroBodySecondary: string;
  wayBuddyCta: string;
  suiteLabel: string;
  suiteCaption: string;
  overviewFallback: string;
  gptsTitle: string;
  gptsBody: string;
  appsOverviewTitle: string;
  appsOverviewLink: string;
}

interface AppsPageStrings {
  seoTitle: string;
  seoDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBody: string;
  suiteBody: string;
  suiteCount: string;
}

interface AppsPlatformPageStrings {
  pageTitle: string;
  pageDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBody: string;
  emptyState: string;
}

interface GptsPageStrings {
  seoTitle: string;
  seoDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBodyPrimary: string;
  headerBodySecondary: string;
  countLine: string;
}

interface ResearchPageStrings {
  seoTitle: string;
  seoDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBody: string;
  projectsHeading: string;
  projectsEmpty: string;
  publicationsHeading: string;
  publicationsCount: string;
}

interface ResearchProjectsListStrings {
  seoTitle: string;
  seoDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBody: string;
  countLine: string;
}

interface ResearchPublicationsListStrings {
  seoTitle: string;
  seoDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBody: string;
  countLine: string;
  relatedProjectLabel: string;
}

interface TeamPageStrings {
  seoTitle: string;
  seoDescription: string;
  headerEyebrow: string;
  headerTitle: string;
  headerBody: string;
  countLine: string;
}

interface SupportPageStrings {
  seoTitle: string;
  seoDescription: string;
  fallbackTitle: string;
  fallbackBody: string;
}

interface AccessibilityPageStrings {
  seoTitle: string;
  seoDescription: string;
  title: string;
  intro: string;
  statusTitle: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  bullet4: string;
  feedbackLabel: string;
}

interface PageStrings {
  home: HomePageStrings;
  apps: AppsPageStrings;
  appsPlatform: AppsPlatformPageStrings;
  gpts: GptsPageStrings;
  research: ResearchPageStrings;
  researchProjects: ResearchProjectsListStrings;
  researchPublications: ResearchPublicationsListStrings;
  team: TeamPageStrings;
  support: SupportPageStrings;
  accessibility: AccessibilityPageStrings;
}

interface AppHeroStrings {
  audienceLabel: string;
}

interface PrivacyCardStrings {
  heading: string;
  modePrefix: string;
  modeLocal: string;
  modeCloud: string;
  modeHybrid: string;
  summaryFallback: string;
  linkLabel: string;
}

interface CtaBarStrings {
  heading: string;
  description: string;
}

interface FeatureGridStrings {
  heading: string;
  fallbackTitle: string;
  fallbackDescription: string;
}

interface RequirementsStrings {
  heading: string;
  fallbackItem: string;
}

interface ComponentStrings {
  appHero: AppHeroStrings;
  privacyCard: PrivacyCardStrings;
  ctaBar: CtaBarStrings;
  featureGrid: FeatureGridStrings;
  requirements: RequirementsStrings;
}

export interface UiStrings {
  nav: NavStrings;
  cta: CtaStrings;
  filter: FilterStrings;
  notices: NoticeStrings;
  aria: AriaStrings;
  pages: PageStrings;
  components: ComponentStrings;
}

const STRINGS: Record<SiteLang, UiStrings> = {
  de: {
    nav: {
      start: "Start",
      apps: "Apps",
      gpts: "GPTs",
      research: "Forschung",
      team: "Team",
      support: "Support",
      privacy: "Datenschutz",
      imprint: "Impressum",
      accessibility: "Barrierefreiheit"
    },
    cta: {
      discoverApps: "Apps entdecken",
      viewDetails: "Details ansehen",
      openInChatGpt: "In ChatGPT oeffnen",
      back: "Zurueck",
      downloadPdf: "PDF herunterladen",
      viewAllGpts: "Alle GPTs ansehen",
      viewAllPublications: "Alle Publikationen",
      viewAllProjects: "Alle Projekte"
    },
    filter: {
      all: "Alle",
      android: "Android",
      windows: "Windows"
    },
    notices: {
      requiresChatGptAccount: "Benoetigt einen ChatGPT-Account.",
      legalTranslationOnly: "Hinweis: Diese Uebersetzung dient nur der Orientierung. Massgeblich ist die deutsche Version.",
      legalGermanSourceLink: "Zur deutschen Version",
      machineTranslatedReviewPending: "Maschinell uebersetzt (Review folgt)",
      machineTranslatedReviewPendingSrOnly: "Hinweis: Diese Seite ist maschinell uebersetzt und wird redaktionell geprueft."
    },
    aria: {
      skipToContent: "Zum Inhalt springen",
      homePage: "Owli-AI Startseite",
      mainNavigation: "Hauptnavigation",
      languageSelection: "Sprachauswahl",
      mobileNavigation: "Mobile Navigation",
      menu: "Menue",
      language: "Sprache",
      footerNavigation: "Footer Navigation",
      appFilterByPlatform: "App-Filter nach Plattform"
    },
    pages: {
      home: {
        seoTitle: "Assistenz-Apps fuer Seh- und Hoerbeeintraechtigung",
        seoDescription:
          "Owli-AI bietet Assistenz-Apps fuer Menschen mit Seh- und Hoerbeeintraechtigung: Orientierungshilfe, KI-Bildbeschreibung, Lupe mit OCR, Live-Transkription und Desktop-Vergroesserung.",
        heroEyebrow: "Owli-AI Suite",
        heroTitle: "Digitale Assistenz fuer mehr Selbststaendigkeit.",
        heroBodyPrimary:
          "Owli-AI entwickelt intelligente Assistenzsysteme fuer Menschen mit Seh- und Hoerbeeintraechtigungen - auf dem Smartphone und am Desktop.",
        heroBodySecondary:
          "Unsere Anwendungen unterstuetzen dich beim Lesen, Orientieren, Verstehen und Arbeiten. Jede App ist auf einen klaren Anwendungsbereich spezialisiert - gemeinsam bilden sie die Owli-AI Suite.",
        wayBuddyCta: "Way-Buddy entdecken",
        suiteLabel: "Suite",
        suiteCaption: "Fuenf Apps, ein System: Lesen, Orientierung und Sprachverstaendlichkeit.",
        overviewFallback: "Inhalte werden vorbereitet.",
        gptsTitle: "Auch als Custom GPTs verfuegbar",
        gptsBody: "Ergaenzend zur App-Suite stehen spezialisierte Custom GPTs in ChatGPT zur Verfuegung.",
        appsOverviewTitle: "Apps im Ueberblick",
        appsOverviewLink: "Zur vollstaendigen Uebersicht"
      },
      apps: {
        seoTitle: "Assistenz-Apps fuer Android und Windows",
        seoDescription:
          "Entdecke die Owli-AI Apps fuer Android und Windows: Orientierungshilfe, Bildbeschreibung, Lupe mit OCR, Live-Transkription und Desktop-Lupe fuer Menschen mit Seh- oder Hoerbeeintraechtigung.",
        headerEyebrow: "Owli-AI App-Suite",
        headerTitle: "Fuenf Assistenz-Apps fuer mehr Selbststaendigkeit",
        headerBody:
          "Waehle die passende App fuer deine Situation: Orientierung unterwegs, sehende Assistenz, Vergroesserung und Lesen, besseres Sprachverstaendnis sowie Desktop-Unterstuetzung. Nutze den Filter, um Android- oder Windows-Apps zu sehen.",
        suiteBody:
          "Die Suite umfasst Android- und Windows-Apps fuer Menschen mit Seh- oder Hoerbeeintraechtigung und kombiniert mobile sowie Desktop-Assistenz in einem klaren System.",
        suiteCount: "Aktuell umfasst die Suite {count} Apps. Empfohlene Reihenfolge: Way-Buddy - Assist - Magnify - Hear-Clean - Zoom."
      },
      appsPlatform: {
        pageTitle: "Apps - {platform}",
        pageDescription: "Owli-AI Apps fuer {platform}.",
        headerEyebrow: "Plattformfilter",
        headerTitle: "Apps fuer {platform}",
        headerBody: "Filteransicht ohne JavaScript. Jede Karte fuehrt direkt zur Detailseite.",
        emptyState: "Keine Apps fuer diese Plattform gefunden."
      },
      gpts: {
        seoTitle: "Owli-AI GPTs in ChatGPT",
        seoDescription:
          "Uebersicht der Owli-AI Custom GPTs in ChatGPT: Sozialberater Hessen, SeeForMe und TI-1 Tutor fuer Blinde.",
        headerEyebrow: "Owli-AI Custom GPTs",
        headerTitle: "Owli-AI GPTs",
        headerBodyPrimary:
          "Hier findest du ausgewaehlte Custom GPTs, die du direkt in ChatGPT nutzen kannst - mit klarem Fokus, schnellem Einstieg und transparenten Grenzen.",
        headerBodySecondary:
          "Du bekommst typische Fragen als Startpunkt und Hinweise zu Datenschutz und Einschraenkungen, damit du die Tools sicher einsetzen kannst.",
        countLine: "Aktuell verfuegbar: {count} GPTs. Weitere koennen jederzeit ergaenzt werden."
      },
      research: {
        seoTitle: "Forschung",
        seoDescription:
          "Forschungsbereich von Owli-AI mit Projekten und Publikationen zu assistiven Systemen fuer Menschen mit Seh- oder Hoerbeeintraechtigung.",
        headerEyebrow: "Owli-AI Forschung",
        headerTitle: "Forschung",
        headerBody: "Dieser Bereich zeigt laufende Forschungsaktivitaeten und veroefentlichte Arbeiten rund um assistive Systeme.",
        projectsHeading: "Projekte",
        projectsEmpty: "Noch keine Projekt-Eintraege vorhanden. Neue Projekte koennen spaeter im Content-Bereich ergaenzt werden.",
        publicationsHeading: "Publikationen",
        publicationsCount: "Veroeffentlicht: {count}."
      },
      researchProjects: {
        seoTitle: "Forschungsprojekte",
        seoDescription: "Uebersicht laufender und abgeschlossener Forschungsprojekte von Owli-AI.",
        headerEyebrow: "Owli-AI Forschung",
        headerTitle: "Projekte",
        headerBody: "Uebersicht der Forschungsprojekte mit Fokus auf anwendbare Assistenztechnologie.",
        countLine: "Gesamt: {count}."
      },
      researchPublications: {
        seoTitle: "Publikationen",
        seoDescription: "Publikationen aus dem Forschungsbereich von Owli-AI.",
        headerEyebrow: "Owli-AI Forschung",
        headerTitle: "Publikationen",
        headerBody: "Uebersicht aller veroeffentlichten Beitraege.",
        countLine: "Gesamt: {count}.",
        relatedProjectLabel: "Zugehoeriges Projekt"
      },
      team: {
        seoTitle: "Team",
        seoDescription: "Das Owli-AI Team im Umfeld der Technischen Hochschule Mittelhessen (THM).",
        headerEyebrow: "Owli-AI Team",
        headerTitle: "Team",
        headerBody:
          "Owli-AI entsteht im Umfeld der Technischen Hochschule Mittelhessen (THM). Hier stellen wir das Team hinter den Apps, Custom GPTs und Forschungsprojekten vor.",
        countLine: "Aktuell gelistet: {count} Teammitglied(er)."
      },
      support: {
        seoTitle: "Support",
        seoDescription: "Support-Informationen zur Owli-AI App-Suite.",
        fallbackTitle: "Support",
        fallbackBody: "Support-Inhalte werden vorbereitet."
      },
      accessibility: {
        seoTitle: "Barrierefreiheit",
        seoDescription: "Erklaerung zur Barrierefreiheit von owli-ai.com.",
        title: "Barrierefreiheit",
        intro: "Die Website wird im MVP mit klarer Tastaturbedienbarkeit, sichtbarem Fokus und semantischer Struktur umgesetzt.",
        statusTitle: "Aktueller Stand",
        bullet1: "Skip-to-content Link vorhanden.",
        bullet2: "Fokus-Stile fuer Tastatur-Navigation sichtbar.",
        bullet3: "Semantische Headings und Landmarken (`header`, `main`, `footer`) umgesetzt.",
        bullet4: "Responsive Navigation ohne verpflichtendes JavaScript.",
        feedbackLabel: "Feedback zur Barrierefreiheit"
      }
    },
    components: {
      appHero: {
        audienceLabel: "Zielgruppe"
      },
      privacyCard: {
        heading: "Datenschutz",
        modePrefix: "Betriebsmodus",
        modeLocal: "Lokal",
        modeCloud: "Cloud",
        modeHybrid: "Hybrid",
        summaryFallback: "Datenschutzdetails folgen.",
        linkLabel: "Zur Datenschutzseite"
      },
      ctaBar: {
        heading: "Naechster Schritt",
        description: "Testzugang, Fragen oder Partnerschaft: wir antworten strukturiert und zeitnah."
      },
      featureGrid: {
        heading: "Kernfunktionen",
        fallbackTitle: "Features folgen",
        fallbackDescription: "Die Featureliste wird aktuell ausgearbeitet."
      },
      requirements: {
        heading: "Systemanforderungen",
        fallbackItem: "Technische Anforderungen werden noch finalisiert."
      }
    }
  },
  en: {
    nav: {
      start: "Home",
      apps: "Apps",
      gpts: "GPTs",
      research: "Research",
      team: "Team",
      support: "Support",
      privacy: "Privacy",
      imprint: "Imprint",
      accessibility: "Accessibility"
    },
    cta: {
      discoverApps: "Explore apps",
      viewDetails: "View details",
      openInChatGpt: "Open in ChatGPT",
      back: "Back",
      downloadPdf: "Download PDF",
      viewAllGpts: "View all GPTs",
      viewAllPublications: "All publications",
      viewAllProjects: "All projects"
    },
    filter: {
      all: "All",
      android: "Android",
      windows: "Windows"
    },
    notices: {
      requiresChatGptAccount: "Requires a ChatGPT account.",
      legalTranslationOnly: "Hinweis: Diese Uebersetzung dient nur der Orientierung. Massgeblich ist die deutsche Version.",
      legalGermanSourceLink: "German original version",
      machineTranslatedReviewPending: "Maschinell uebersetzt (Review folgt)",
      machineTranslatedReviewPendingSrOnly: "Notice: this page was machine-translated and is pending editorial review."
    },
    aria: {
      skipToContent: "Skip to content",
      homePage: "Owli-AI home page",
      mainNavigation: "Main navigation",
      languageSelection: "Language selection",
      mobileNavigation: "Mobile navigation",
      menu: "Menu",
      language: "Language",
      footerNavigation: "Footer navigation",
      appFilterByPlatform: "App filter by platform"
    },
    pages: {
      home: {
        seoTitle: "Assistive apps for visual and hearing impairments",
        seoDescription:
          "Owli-AI offers assistive apps for people with visual and hearing impairments: orientation support, AI image description, magnifier with OCR, live transcription, and desktop magnification.",
        heroEyebrow: "Owli-AI Suite",
        heroTitle: "Digital assistance for greater independence.",
        heroBodyPrimary:
          "Owli-AI develops intelligent assistive systems for people with visual and hearing impairments - on smartphones and desktop systems.",
        heroBodySecondary:
          "Our apps support reading, orientation, comprehension, and everyday work. Each app focuses on a clear use case - together they form the Owli-AI Suite.",
        wayBuddyCta: "Explore Way-Buddy",
        suiteLabel: "Suite",
        suiteCaption: "Five apps, one system: reading, orientation, and speech clarity.",
        overviewFallback: "Content is being prepared.",
        gptsTitle: "Also available as custom GPTs",
        gptsBody: "In addition to the app suite, specialized custom GPTs are available in ChatGPT.",
        appsOverviewTitle: "App overview",
        appsOverviewLink: "Go to full overview"
      },
      apps: {
        seoTitle: "Assistive apps for Android and Windows",
        seoDescription:
          "Explore Owli-AI apps for Android and Windows: orientation support, scene description, magnifier with OCR, live transcription, and desktop magnification for people with visual or hearing impairments.",
        headerEyebrow: "Owli-AI App Suite",
        headerTitle: "Five assistive apps for greater independence",
        headerBody:
          "Choose the right app for your situation: orientation on the go, visual assistance, magnification and reading, clearer speech understanding, and desktop support. Use the filter to view Android or Windows apps.",
        suiteBody:
          "The suite includes Android and Windows apps for people with visual or hearing impairments and combines mobile and desktop assistance in one clear system.",
        suiteCount: "The suite currently includes {count} apps. Recommended order: Way-Buddy - Assist - Magnify - Hear-Clean - Zoom."
      },
      appsPlatform: {
        pageTitle: "Apps - {platform}",
        pageDescription: "Owli-AI apps for {platform}.",
        headerEyebrow: "Platform filter",
        headerTitle: "Apps for {platform}",
        headerBody: "Filter view without JavaScript. Each card links directly to the detail page.",
        emptyState: "No apps found for this platform."
      },
      gpts: {
        seoTitle: "Owli-AI GPTs in ChatGPT",
        seoDescription:
          "Overview of Owli-AI custom GPTs in ChatGPT: Sozialberater Hessen, SeeForMe, and TI-1 Tutor fuer Blinde.",
        headerEyebrow: "Owli-AI Custom GPTs",
        headerTitle: "Owli-AI GPTs",
        headerBodyPrimary:
          "Here you can find selected custom GPTs you can use directly in ChatGPT - with clear focus, quick onboarding, and transparent limitations.",
        headerBodySecondary:
          "You get typical starter questions and guidance on privacy and limitations so you can use the tools safely.",
        countLine: "Currently available: {count} GPTs. More can be added at any time."
      },
      research: {
        seoTitle: "Research",
        seoDescription:
          "Owli-AI research area with projects and publications on assistive systems for people with visual or hearing impairments.",
        headerEyebrow: "Owli-AI Research",
        headerTitle: "Research",
        headerBody: "This section presents ongoing research activities and published work on assistive systems.",
        projectsHeading: "Projects",
        projectsEmpty: "No project entries yet. New projects can be added in the content area later.",
        publicationsHeading: "Publications",
        publicationsCount: "Published: {count}."
      },
      researchProjects: {
        seoTitle: "Research projects",
        seoDescription: "Overview of ongoing and completed research projects by Owli-AI.",
        headerEyebrow: "Owli-AI Research",
        headerTitle: "Projects",
        headerBody: "Overview of research projects with a focus on practical assistive technology.",
        countLine: "Total: {count}."
      },
      researchPublications: {
        seoTitle: "Publications",
        seoDescription: "Publications from the Owli-AI research area.",
        headerEyebrow: "Owli-AI Research",
        headerTitle: "Publications",
        headerBody: "Overview of all published contributions.",
        countLine: "Total: {count}.",
        relatedProjectLabel: "Related project"
      },
      team: {
        seoTitle: "Team",
        seoDescription: "The Owli-AI team in the context of Technische Hochschule Mittelhessen (THM).",
        headerEyebrow: "Owli-AI Team",
        headerTitle: "Team",
        headerBody:
          "Owli-AI is developed in the THM environment. Here we present the team behind the apps, custom GPTs, and research projects.",
        countLine: "Currently listed: {count} team members."
      },
      support: {
        seoTitle: "Support",
        seoDescription: "Support information for the Owli-AI app suite.",
        fallbackTitle: "Support",
        fallbackBody: "Support content is being prepared."
      },
      accessibility: {
        seoTitle: "Accessibility",
        seoDescription: "Accessibility statement for owli-ai.com.",
        title: "Accessibility",
        intro: "In the MVP, the website is built with clear keyboard operation, visible focus, and semantic structure.",
        statusTitle: "Current status",
        bullet1: "Skip-to-content link is available.",
        bullet2: "Focus styles are visible for keyboard navigation.",
        bullet3: "Semantic headings and landmarks (`header`, `main`, `footer`) are implemented.",
        bullet4: "Responsive navigation works without mandatory JavaScript.",
        feedbackLabel: "Accessibility feedback"
      }
    },
    components: {
      appHero: {
        audienceLabel: "Audience"
      },
      privacyCard: {
        heading: "Privacy",
        modePrefix: "Operating mode",
        modeLocal: "Local",
        modeCloud: "Cloud",
        modeHybrid: "Hybrid",
        summaryFallback: "Privacy details will follow.",
        linkLabel: "Go to privacy page"
      },
      ctaBar: {
        heading: "Next step",
        description: "Trial access, questions, or partnership: we respond in a structured and timely way."
      },
      featureGrid: {
        heading: "Core features",
        fallbackTitle: "Features coming soon",
        fallbackDescription: "The feature list is currently being finalized."
      },
      requirements: {
        heading: "System requirements",
        fallbackItem: "Technical requirements are still being finalized."
      }
    }
  },
  es: {
    nav: {
      start: "Inicio",
      apps: "Apps",
      gpts: "GPTs",
      research: "Investigacion",
      team: "Equipo",
      support: "Soporte",
      privacy: "Privacidad",
      imprint: "Aviso legal",
      accessibility: "Accesibilidad"
    },
    cta: {
      discoverApps: "Explorar apps",
      viewDetails: "Ver detalles",
      openInChatGpt: "Abrir en ChatGPT",
      back: "Volver",
      downloadPdf: "Descargar PDF",
      viewAllGpts: "Ver todos los GPTs",
      viewAllPublications: "Todas las publicaciones",
      viewAllProjects: "Todos los proyectos"
    },
    filter: {
      all: "Todos",
      android: "Android",
      windows: "Windows"
    },
    notices: {
      requiresChatGptAccount: "Requiere una cuenta de ChatGPT.",
      legalTranslationOnly: "Hinweis: Diese Uebersetzung dient nur der Orientierung. Massgeblich ist die deutsche Version.",
      legalGermanSourceLink: "Version original en aleman",
      machineTranslatedReviewPending: "Maschinell uebersetzt (Review folgt)",
      machineTranslatedReviewPendingSrOnly: "Aviso: esta pagina fue traducida automaticamente y esta pendiente de revision editorial."
    },
    aria: {
      skipToContent: "Saltar al contenido",
      homePage: "Pagina de inicio de Owli-AI",
      mainNavigation: "Navegacion principal",
      languageSelection: "Seleccion de idioma",
      mobileNavigation: "Navegacion movil",
      menu: "Menu",
      language: "Idioma",
      footerNavigation: "Navegacion del pie de pagina",
      appFilterByPlatform: "Filtro de apps por plataforma"
    },
    pages: {
      home: {
        seoTitle: "Apps de asistencia para discapacidad visual y auditiva",
        seoDescription:
          "Owli-AI ofrece apps de asistencia para personas con discapacidad visual y auditiva: orientacion, descripcion de imagen con IA, lupa con OCR, transcripcion en vivo y ampliacion de escritorio.",
        heroEyebrow: "Owli-AI Suite",
        heroTitle: "Asistencia digital para mayor autonomia.",
        heroBodyPrimary:
          "Owli-AI desarrolla sistemas de asistencia inteligentes para personas con discapacidad visual y auditiva, en smartphone y escritorio.",
        heroBodySecondary:
          "Nuestras apps apoyan lectura, orientacion, comprension y trabajo diario. Cada app cubre un caso de uso claro; juntas forman la Owli-AI Suite.",
        wayBuddyCta: "Explorar Way-Buddy",
        suiteLabel: "Suite",
        suiteCaption: "Cinco apps, un sistema: lectura, orientacion y claridad del habla.",
        overviewFallback: "Contenido en preparacion.",
        gptsTitle: "Tambien disponible como GPTs personalizados",
        gptsBody: "Ademas de la suite de apps, hay GPTs personalizados especializados en ChatGPT.",
        appsOverviewTitle: "Resumen de apps",
        appsOverviewLink: "Ir al resumen completo"
      },
      apps: {
        seoTitle: "Apps de asistencia para Android y Windows",
        seoDescription:
          "Explora las apps de Owli-AI para Android y Windows: orientacion, descripcion de escenas, lupa con OCR, transcripcion en vivo y ampliacion de escritorio para personas con discapacidad visual o auditiva.",
        headerEyebrow: "Owli-AI App Suite",
        headerTitle: "Cinco apps de asistencia para mayor autonomia",
        headerBody:
          "Elige la app adecuada para tu situacion: orientacion en movimiento, asistencia visual, ampliacion y lectura, mejor comprension del habla y soporte de escritorio. Usa el filtro para ver apps de Android o Windows.",
        suiteBody:
          "La suite incluye apps de Android y Windows para personas con discapacidad visual o auditiva y combina asistencia movil y de escritorio en un sistema claro.",
        suiteCount: "La suite incluye actualmente {count} apps. Orden recomendado: Way-Buddy - Assist - Magnify - Hear-Clean - Zoom."
      },
      appsPlatform: {
        pageTitle: "Apps - {platform}",
        pageDescription: "Apps de Owli-AI para {platform}.",
        headerEyebrow: "Filtro de plataforma",
        headerTitle: "Apps para {platform}",
        headerBody: "Vista filtrada sin JavaScript. Cada tarjeta lleva directamente a la pagina de detalle.",
        emptyState: "No se encontraron apps para esta plataforma."
      },
      gpts: {
        seoTitle: "GPTs de Owli-AI en ChatGPT",
        seoDescription:
          "Resumen de GPTs personalizados de Owli-AI en ChatGPT: Sozialberater Hessen, SeeForMe y TI-1 Tutor fuer Blinde.",
        headerEyebrow: "Owli-AI GPTs personalizados",
        headerTitle: "Owli-AI GPTs",
        headerBodyPrimary:
          "Aqui encuentras GPTs personalizados seleccionados para usar directamente en ChatGPT, con enfoque claro, inicio rapido y limites transparentes.",
        headerBodySecondary:
          "Recibes preguntas tipicas para empezar y notas sobre privacidad y limitaciones para usar las herramientas de forma segura.",
        countLine: "Disponibles actualmente: {count} GPTs. Se pueden agregar mas en cualquier momento."
      },
      research: {
        seoTitle: "Investigacion",
        seoDescription:
          "Area de investigacion de Owli-AI con proyectos y publicaciones sobre sistemas de asistencia para personas con discapacidad visual o auditiva.",
        headerEyebrow: "Investigacion Owli-AI",
        headerTitle: "Investigacion",
        headerBody: "Esta seccion muestra actividades de investigacion en curso y trabajos publicados sobre sistemas de asistencia.",
        projectsHeading: "Proyectos",
        projectsEmpty: "Todavia no hay entradas de proyectos. Se pueden agregar nuevos proyectos en el area de contenido.",
        publicationsHeading: "Publicaciones",
        publicationsCount: "Publicadas: {count}."
      },
      researchProjects: {
        seoTitle: "Proyectos de investigacion",
        seoDescription: "Resumen de proyectos de investigacion en curso y finalizados de Owli-AI.",
        headerEyebrow: "Investigacion Owli-AI",
        headerTitle: "Proyectos",
        headerBody: "Resumen de proyectos de investigacion con foco en tecnologia de asistencia aplicable.",
        countLine: "Total: {count}."
      },
      researchPublications: {
        seoTitle: "Publicaciones",
        seoDescription: "Publicaciones del area de investigacion de Owli-AI.",
        headerEyebrow: "Investigacion Owli-AI",
        headerTitle: "Publicaciones",
        headerBody: "Resumen de todas las contribuciones publicadas.",
        countLine: "Total: {count}.",
        relatedProjectLabel: "Proyecto relacionado"
      },
      team: {
        seoTitle: "Equipo",
        seoDescription: "El equipo de Owli-AI en el contexto de Technische Hochschule Mittelhessen (THM).",
        headerEyebrow: "Equipo Owli-AI",
        headerTitle: "Equipo",
        headerBody:
          "Owli-AI se desarrolla en el entorno de THM. Aqui presentamos al equipo detras de las apps, GPTs personalizados y proyectos de investigacion.",
        countLine: "Listado actual: {count} miembros del equipo."
      },
      support: {
        seoTitle: "Soporte",
        seoDescription: "Informacion de soporte sobre la suite de apps Owli-AI.",
        fallbackTitle: "Soporte",
        fallbackBody: "El contenido de soporte se esta preparando."
      },
      accessibility: {
        seoTitle: "Accesibilidad",
        seoDescription: "Declaracion de accesibilidad de owli-ai.com.",
        title: "Accesibilidad",
        intro: "En el MVP, el sitio se implementa con navegacion clara por teclado, foco visible y estructura semantica.",
        statusTitle: "Estado actual",
        bullet1: "Hay un enlace para saltar al contenido.",
        bullet2: "Los estilos de foco son visibles para la navegacion por teclado.",
        bullet3: "Se implementan encabezados semanticos y landmarks (`header`, `main`, `footer`).",
        bullet4: "Navegacion responsiva sin JavaScript obligatorio.",
        feedbackLabel: "Comentarios sobre accesibilidad"
      }
    },
    components: {
      appHero: {
        audienceLabel: "Publico objetivo"
      },
      privacyCard: {
        heading: "Privacidad",
        modePrefix: "Modo de funcionamiento",
        modeLocal: "Local",
        modeCloud: "Cloud",
        modeHybrid: "Hibrido",
        summaryFallback: "Los detalles de privacidad se publicaran en breve.",
        linkLabel: "Ir a la pagina de privacidad"
      },
      ctaBar: {
        heading: "Siguiente paso",
        description: "Acceso de prueba, preguntas o colaboracion: respondemos de forma estructurada y rapida."
      },
      featureGrid: {
        heading: "Funciones clave",
        fallbackTitle: "Funciones proximamente",
        fallbackDescription: "La lista de funciones se esta finalizando."
      },
      requirements: {
        heading: "Requisitos del sistema",
        fallbackItem: "Los requisitos tecnicos todavia se estan finalizando."
      }
    }
  }
};

export function getUiStrings(lang: SiteLang): UiStrings {
  return STRINGS[lang] ?? STRINGS.de;
}

export function formatUiString(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce(
    (current, [key, value]) => current.replaceAll(`{${key}}`, String(value)),
    template
  );
}
