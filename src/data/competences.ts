export interface Realisation {
  projectId: string;
  label: string;
  description: string;
  tools: string[];
  documentUrl?: string;
}

export interface Competence {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  realisations: Realisation[];
}

export const competences: Competence[] = [
  {
    id: "C1",
    code: "B1-C1",
    title: "Gérer le patrimoine informatique",
    description:
      "Recenser et identifier les ressources numériques, exploiter des référentiels et normes, mettre en place les niveaux d'habilitation, vérifier la continuité des services, gérer les sauvegardes.",
    icon: "Database",
    color: "from-blue-500 to-cyan-500",
    realisations: [
      {
        projectId: "verana-visualizer",
        label: "Infra Verana (Docker / K8s)",
        description:
          "Gestion complète de l'infrastructure : déploiements reproductibles Docker/Kubernetes/Helm, CI/CD GitHub Actions, pipelines d'indexation et de requêtage, stratégies de caching et gestion robuste des erreurs.",
        tools: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "CI/CD"],
      },
      {
        projectId: "pkba",
        label: "Patrimoine numérique PKBA",
        description:
          "Inventaire des ressources numériques du club (hébergement, noms de domaine, comptes réseaux sociaux), mise en place des droits d'accès par rôle, plan de sauvegarde du site.",
        tools: ["cPanel", "WordPress", "Git", "Cloudflare"],
      },
    ],
  },
  {
    id: "C2",
    code: "B1-C2",
    title: "Répondre aux incidents et aux demandes",
    description:
      "Collecter, suivre et orienter des demandes, traiter les incidents concernant les services réseau, système et applicatifs, assurer la maintenance corrective et évolutive.",
    icon: "AlertCircle",
    color: "from-orange-500 to-red-500",
    realisations: [
      {
        projectId: "hop-hop-immo",
        label: "Maintenance Hoppy (Hop Hop Immo)",
        description:
          "Suivi et résolution des incidents sur le service vocal Hoppy (ElevenLabs + LLM). Gestion des régressions lors des mises à jour, monitoring des erreurs API, débogage des flux de qualification prospects.",
        tools: ["GitHub Issues", "Vercel", "ElevenLabs API", "Linear"],
      },
      {
        projectId: "klyx",
        label: "Tickets clients Klyx",
        description:
          "Gestion des demandes d'assistance et d'évolution clients via GitHub Issues et Linear. Maintenance corrective (bugs), adaptative (mises à jour dépendances) et évolutive (nouvelles fonctionnalités).",
        tools: ["GitHub Issues", "Linear", "Vercel"],
      },
      {
        projectId: "reciproq",
        label: "Corrections Reciproq",
        description:
          "Identification et résolution rapide de bugs signalés pendant les tests utilisateurs, gestion des retours équipe produit, itérations hebdomadaires en mode agile.",
        tools: ["GitHub Issues", "Slack", "Figma"],
      },
    ],
  },
  {
    id: "C3",
    code: "B1-C3",
    title: "Développer la présence en ligne de l'organisation",
    description:
      "Valoriser l'image de l'organisation sur les médias numériques, référencer les services en ligne, mesurer leur visibilité, assurer la conformité RGPD.",
    icon: "Globe",
    color: "from-green-500 to-emerald-500",
    realisations: [
      {
        projectId: "hop-hop-immo",
        label: "SEO & Refonte Homepage (Hop Hop Immo)",
        description:
          "Refonte architecturale de la homepage en Next.js avec optimisation SEO approfondie : triplement du trafic organique en 3 mois, scores Lighthouse >95/100, balisage sémantique, Core Web Vitals.",
        tools: ["Next.js", "Google Search Console", "Lighthouse", "Vercel"],
      },
      {
        projectId: "klyx",
        label: "Présence en ligne clients Klyx",
        description:
          "Développement de sites clients performants avec stratégie SEO : +80% de trafic organique et +35% de leads. Intégration analytics, conformité RGPD (mentions légales, politique de confidentialité).",
        tools: ["Next.js", "Tailwind CSS", "Google Analytics", "Figma"],
      },
      {
        projectId: "pkba",
        label: "Site & communication PKBA",
        description:
          "Création du site web de l'association (inscriptions en ligne, boutique, dons), gestion des réseaux sociaux, newsletters, contenu visuel. Conception de l'identité visuelle et charte graphique.",
        tools: ["WordPress", "Canva", "Instagram", "Mailchimp"],
      },
    ],
  },
  {
    id: "C4",
    code: "B1-C4",
    title: "Travailler en mode projet",
    description:
      "Analyser les objectifs et modalités d'organisation d'un projet, planifier les activités, évaluer les indicateurs de suivi et analyser les écarts.",
    icon: "LayoutGrid",
    color: "from-purple-500 to-violet-500",
    realisations: [
      {
        projectId: "klyx",
        label: "Gestion agile clients Klyx",
        description:
          "Pilotage de 5+ projets clients en mode Agile : sprints définis, livrables contractuels, daily avec les clients, rétrospectives. Gestion du backlog, priorisation avec le product owner, suivi via Notion/Trello.",
        tools: ["Trello", "Notion", "Figma", "GitHub Projects"],
      },
      {
        projectId: "verana-visualizer",
        label: "Architecture Verana (équipe distante)",
        description:
          "Coordination avec l'équipe Verana/2060.io en full remote pour le Visualizer et Concieragent : specs techniques, code reviews, CI/CD, documentation développeur, itérations rapides.",
        tools: ["GitHub Projects", "Slack", "Linear", "Notion"],
      },
      {
        projectId: "hop-hop-immo",
        label: "Roadmap Hoppy (Hop Hop Immo)",
        description:
          "Collaboration avec l'équipe produit et marketing : ateliers de co-création, revues de maquettes, points hebdomadaires, jalons produit (Hoppy v1 puis agents IA marketing).",
        tools: ["Notion", "Figma", "Slack"],
      },
      {
        projectId: "reciproq",
        label: "Projet Reciproq (Agile)",
        description:
          "Travail en équipe pluridisciplinaire (dev + design + produit) : adaptation charte Figma, modules dynamiques, revues hebdomadaires, démo finale au Product Owner.",
        tools: ["Figma", "GitHub", "Slack"],
      },
    ],
  },
  {
    id: "C5",
    code: "B1-C5",
    title: "Mettre à disposition des utilisateurs un service informatique",
    description:
      "Réaliser les tests d'intégration et d'acceptation d'un service, déployer un service, accompagner les utilisateurs dans sa mise en place.",
    icon: "Rocket",
    color: "from-pink-500 to-rose-500",
    realisations: [
      {
        projectId: "hop-hop-immo",
        label: "Déploiement Hoppy (28 000+ annonces)",
        description:
          "Développement et déploiement de Hoppy, premier assistant immobilier vocal (ElevenLabs + LLM). Service disponible 24/7, qualifiant les prospects sur une base de 28 000+ annonces. Tests de charge, monitoring production.",
        tools: ["ElevenLabs", "Node.js", "Vercel", "PostgreSQL"],
      },
      {
        projectId: "verana-visualizer",
        label: "Verana Visualizer (prod multi-cloud)",
        description:
          "Déploiement du dashboard d'exploration DID/Credentials en production : Docker, Kubernetes/Helm, CI/CD automatisé, documentation développeur, stratégie de rollback.",
        tools: ["Docker", "Kubernetes", "Helm", "GitHub Actions"],
      },
      {
        projectId: "concieragent",
        label: "Concieragent (6 serveurs MCP)",
        description:
          "Mise en production de Concieragent : orchestration de 6 serveurs MCP (vols, hôtels, météo, devises...) via DIDComm chiffré, support multi-LLM (GPT-4, Claude, Ollama), documentation d'utilisation.",
        tools: ["MCP", "DIDComm", "Claude API", "GPT-4", "Ollama"],
      },
      {
        projectId: "openclaw",
        label: "OpenClaw (veille IA déployée)",
        description:
          "Développement et déploiement de mon outil de veille technologique IA personnel : agrégation de sources fiables, analyse approfondie, génération d'un rapport quotidien personnalisé.",
        tools: ["Node.js", "LLM API", "RSS", "X API"],
      },
    ],
  },
  {
    id: "C6",
    code: "B1-C6",
    title: "Organiser son développement professionnel",
    description:
      "Mettre en place son environnement d'apprentissage personnel, mettre en œuvre des outils et stratégies de veille informationnelle, gérer son identité professionnelle, développer son projet professionnel.",
    icon: "TrendingUp",
    color: "from-yellow-500 to-amber-500",
    realisations: [
      {
        projectId: "openclaw",
        label: "OpenClaw — mon outil de veille IA",
        description:
          "J'ai construit mon propre système de veille technologique : OpenClaw agrège chaque matin les sources les plus fiables, analyse en profondeur et génère un rapport personnalisé. Feed X/Twitter curé en complément.",
        tools: ["Node.js", "LLM", "X/Twitter", "RSS"],
      },
      {
        projectId: "pkba",
        label: "GDG Bordeaux (15+ sessions)",
        description:
          "Membre actif du Google Developer Group Bordeaux : 15+ meetups et codelabs suivis (Flutter, TensorFlow, Angular, PWA). Co-animation d'un mini-atelier Flutter. Réseau de 100+ contacts tech.",
        tools: ["GDG Bordeaux", "LinkedIn", "Flutter", "Firebase"],
      },
      {
        projectId: "side-projects",
        label: "Certifications & Open Source",
        description:
          "Harvard CS50 (2025-2026). EFSET C2 Proficient (87/100). Credat.io : SDK open source publié sur npm (@credat/sdk, Apache 2.0) — trust layer pour agents IA autonomes. PKVision : détection de tricks parkour par IA (Python, ViTPose). Claw4S : hackathon Stanford/Princeton 2026.",
        tools: [
          "Harvard CS50",
          "EFSET C2",
          "@credat/sdk",
          "Python / ViTPose",
          "TypeScript",
        ],
      },
    ],
  },
];
