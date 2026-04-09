export interface Skill {
  name: string;
  color: string; // Tailwind color class like "bg-blue-500"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  sourceCodeUrl?: string;
  demoUrl?: string;
  skills: Skill[];
  featured: boolean;
  competencyIds: string[];
}

export const projects: Project[] = [
  {
    id: "hop-hop-immo",
    title: "Hop Hop Immo",
    description:
      "Assistant immobilier vocal IA (Hoppy) + agents d'automatisation marketing. Triplement du trafic organique en 3 mois.",
    thumbnail: "/banner.png",
    images: ["/banner.png"],
    demoUrl: "https://hophopimmo.com",
    skills: [
      { name: "Next.js", color: "bg-black" },
      { name: "ElevenLabs", color: "bg-purple-600" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "LLM / IA", color: "bg-blue-600" },
    ],
    featured: true,
    competencyIds: ["C2", "C3", "C4", "C5"],
  },
  {
    id: "verana-visualizer",
    title: "Verana Visualizer",
    description:
      "Dashboard d'exploration blockchain pour les trust registries, DIDs et Verifiable Credentials. Déploiement multi-cloud Docker/Kubernetes.",
    thumbnail: "/verana.png",
    images: ["/verana.png"],
    demoUrl: "https://verana.io",
    skills: [
      { name: "Next.js", color: "bg-black" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Docker", color: "bg-blue-500" },
      { name: "Kubernetes", color: "bg-indigo-500" },
    ],
    featured: true,
    competencyIds: ["C1", "C4", "C5"],
  },
  {
    id: "concieragent",
    title: "Concieragent",
    description:
      "Agent IA orchestrant 6 serveurs MCP (vols, hôtels, météo, devises...) via DIDComm chiffré. Support multi-LLM (GPT-4, Claude, Ollama).",
    thumbnail: "/banner.png",
    images: ["/banner.png"],
    skills: [
      { name: "MCP", color: "bg-violet-600" },
      { name: "DIDComm", color: "bg-indigo-600" },
      { name: "Claude API", color: "bg-orange-500" },
      { name: "TypeScript", color: "bg-blue-700" },
    ],
    featured: false,
    competencyIds: ["C4", "C5"],
  },
  {
    id: "klyx",
    title: "Klyx",
    description:
      "Agence de création digitale : 5+ clients, scores Lighthouse >95/100, +80% trafic organique pour les clients.",
    thumbnail: "/klyx_screenshot.png",
    images: ["/klyx_screenshot.png", "/klyx_post.jpg"],
    sourceCodeUrl: "https://github.com/airkyzzz/klyx",
    demoUrl: "https://klyx.fr",
    skills: [
      { name: "Next.js", color: "bg-black" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "WordPress", color: "bg-blue-400" },
    ],
    featured: true,
    competencyIds: ["C2", "C3", "C4", "C5", "C6"],
  },
  {
    id: "pkba",
    title: "Parkour Bassin d'Arcachon",
    description:
      "Co-fondateur & trésorier. Site web (inscriptions, boutique Stripe, dons), identité visuelle et communication du plus grand club parkour de Nouvelle-Aquitaine (60+ licenciés).",
    thumbnail: "/handstand-pkba-antoine.png",
    images: ["/handstand-pkba-antoine.png"],
    sourceCodeUrl: "https://github.com/airkyzzz/PKBA",
    demoUrl: "https://pkba.vertiflow.fr/",
    skills: [
      { name: "Next.js", color: "bg-black" },
      { name: "Stripe", color: "bg-indigo-500" },
      { name: "Airtable", color: "bg-yellow-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
    ],
    featured: false,
    competencyIds: ["C3", "C4", "C5", "C6"],
  },
  {
    id: "openclaw",
    title: "OpenClaw",
    description:
      "Mon outil de veille technologique IA : agrège les meilleures sources, analyse en profondeur et génère chaque matin un rapport personnalisé.",
    thumbnail: "/banner.png",
    images: ["/banner.png"],
    skills: [
      { name: "Node.js", color: "bg-green-600" },
      { name: "LLM API", color: "bg-orange-500" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "RSS / X API", color: "bg-sky-500" },
    ],
    featured: false,
    competencyIds: ["C5", "C6"],
  },
  {
    id: "reciproq",
    title: "Reciproq",
    description:
      "Plateforme de mise en relation entre professionnels de santé mentale et particuliers. Développement frontend en méthodologie Agile.",
    thumbnail: "/reciproq.png",
    images: ["/reciproq.png", "/reciproq_banner.png"],
    demoUrl: "https://reciproq.com",
    skills: [
      { name: "Next.js", color: "bg-black" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "Figma", color: "bg-pink-500" },
      { name: "Agile", color: "bg-green-500" },
    ],
    featured: false,
    competencyIds: ["C2", "C4", "C5"],
  },
  {
    id: "side-projects",
    title: "Side Projects & Open Source",
    description:
      "15+ projets : Credat.io (package npm @credat/sdk — OAuth pour agents IA), PKVision (détection tricks parkour IA), NullPost, ClawFans, Claw4S Hackathon 2026...",
    thumbnail: "/openpk.jpg",
    images: ["/openpk.jpg"],
    sourceCodeUrl: "https://github.com/airkyzzz",
    skills: [
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Python", color: "bg-yellow-500" },
      { name: "SD-JWT / DIDs", color: "bg-green-600" },
      { name: "LangGraph", color: "bg-purple-600" },
    ],
    featured: false,
    competencyIds: ["C4", "C5", "C6"],
  },
];
