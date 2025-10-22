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
}

export const projects: Project[] = [
  {
    id: "pkba",
    title: "Parkour Bassin d'Arcachon",
    description: "Site web pour l'association de parkour du Bassin d'Arcachon.",
    thumbnail: "/handstand-pkba-antoine.png",
    images: ["/handstand-pkba-antoine.png"],
    demoUrl: "https://pkba.vertiflow.fr/",
    skills: [
      { name: "Web Design", color: "bg-indigo-500" },
      { name: "HTML/CSS", color: "bg-orange-500" },
      { name: "JavaScript", color: "bg-yellow-400" }
    ],
    featured: false
  },
  {
    id: "klyx",
    title: "Klyx",
    description: "Plateforme de gestion de contenu digital avec une interface intuitive et personnalisable.",
    thumbnail: "/klyx_screenshot.png",
    images: ["/klyx_screenshot.png", "/klyx_post.jpg"],
    sourceCodeUrl: "https://github.com/airkyzzz/klyx",
    demoUrl: "https://klyx.io",
    skills: [
      { name: "React", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Next.js", color: "bg-black" },
      { name: "Tailwind CSS", color: "bg-cyan-500" }
    ],
    featured: true
  },
  {
    id: "vertiflow",
    title: "VertiFlow",
    description: "Solution de workflow automatisé pour les entreprises, optimisant les processus métiers.",
    thumbnail: "/vertiflow.png",
    images: ["/vertiflow.png"],
    sourceCodeUrl: "https://github.com/airkyzzz/vertiflow",
    demoUrl: "https://vertiflow.com",
    skills: [
      { name: "Vue.js", color: "bg-green-500" },
      { name: "Node.js", color: "bg-green-700" },
      { name: "MongoDB", color: "bg-green-900" }
    ],
    featured: true
  },
  {
    id: "reciproq",
    title: "Reciproq",
    description: "Application d'échange de services entre particuliers, favorisant l'économie collaborative.",
    thumbnail: "/reciproq.png",
    images: ["/reciproq.png", "/reciproq_banner.png"],
    demoUrl: "https://reciproq.com",
    skills: [
      { name: "React Native", color: "bg-blue-500" },
      { name: "Firebase", color: "bg-yellow-500" },
      { name: "Redux", color: "bg-purple-500" }
    ],
    featured: false
  }
];
