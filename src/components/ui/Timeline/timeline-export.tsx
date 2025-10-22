import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline/timeline";

export function TimelinePortfolio() {
  const data = [
    {
      title: "Sept. 2025 - Présent",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>Développeur fullstack chez Verana</strong> - Conception et développement des briques clés du Verana Verifiable Trust Network. 
            Développement d&apos;applications web (Verana Visualizer), APIs, services backend et SDKs avec Next.js, React, TypeScript, Tailwind, Node.js.
            Déploiements via Docker, Kubernetes/Helm et CI/CD. Contribution à une infrastructure de confiance ouverte pour l&apos;Internet.
          </p>
          <div className="grid grid-cols-2 gap-4">
          <a href="https://verana.io/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/verana.png"
                alt="Klyx - Agence de création digitale"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            </div>
        </div>
      ),
    },
    {
      title: "Juillet 2025 - Présent",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>Membre fondateur - Parkour Bassin d&apos;Arcachon</strong> - Développement et responsable communication du plus grand club de parkour de Nouvelle-Aquitaine.
            Conception de l&apos;identité visuelle, développement du site web, gestion de la communication digitale et organisation d&apos;événements. 
            Contribution active à la structuration du club avec plus de 60 licenciés.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/handstand-pkba-antoine.png"
              alt="Parkour Bassin d'Arcachon"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Avril 2025 - Présent",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>PDG chez Klyx</strong> - Agence de création digitale spécialisée dans la conception de sites web élégants et performants. 
            Développement full-stack avec React, Next.js et technologies modernes. Conception UI/UX sur-mesure et optimisation des performances.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://klyx.fr/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/klyx_screenshot.png"
                alt="Klyx - Agence de création digitale"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://klyx.fr/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/klyx_post.jpg"
                alt="Développement React Next.js"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Avril - Mai 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Développeur web chez Reciproq</strong> - Plateforme de mise en relation entre professionnels de santé mentale et particuliers. 
            Elaboration des pages clés du site vitrine en Next.js et Tailwind, adaptation de la charte graphique Figma à l&apos;interface web, 
            et mise en place d&apos;un design mobile-first pour une expérience utilisateur optimale.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Développement Next.js + Tailwind CSS
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Design responsive et mobile-first
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Optimisation des performances et accessibilité
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Méthodologie Agile et collaboration produit
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Création de modules dynamiques pour témoignages et offres
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/reciproq.png"
              alt="Reciproq - Plateforme santé mentale"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/reciproq_banner.png"
              alt="Développement Next.js Tailwind"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nov. 2024 - Présent",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>Fondateur de VertiFlow</strong> - Marque innovante dédiée au parkour et au mouvement urbain. 
            Conception et pilotage de la stratégie globale de la marque, développement de l&apos;identité via des campagnes marketing ciblées, 
            et animation d&apos;une communauté engagée de passionnés. Mise en place de partenariats stratégiques et projets collaboratifs lors d&apos;événements sportifs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://vertiflow.fr/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/vertiflow.png"
                alt="VertiFlow - Marque parkour"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Oct. 2024 - Présent",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>Membre actif GDG Bordeaux</strong> - Participation aux meetups et codelabs du Google Developer Group Bordeaux, 
            avec plus de 15 sessions suivies en 2024-2025. Contributions via des retours d&apos;expérience, partage de best practices, 
            veille technologique sur Flutter, TensorFlow, Angular et PWA. Impulsion d&apos;un mini-atelier &ldquo;✨Découverte de Flutter✨&rdquo; et 
            networking avec 100+ contacts tech en Nouvelle-Aquitaine.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://gdgbordeaux.fr/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/gdg.jpg"
                alt="GDG Bordeaux - Communauté tech"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Juillet 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Agent de nettoyage - Mairie d&apos;Arcachon</strong> - Expérience d&apos;un mois à Arcachon, Nouvelle-Aquitaine
          </p>
        </div>
      ),
    },
    {
      title: "Juin 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Agent d&apos;accueil - Office de Tourisme du Teich</strong> - Expérience d&apos;un mois au Teich, Nouvelle-Aquitaine
          </p>
        </div>
      ),
    },
    {
      title: "Déc. 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Développeur web - Vermilion Energy</strong> - Expérience d&apos;un mois à Parentis-en-Born, Nouvelle-Aquitaine
          </p>
        </div>
      ),
    },
    {
      title: "Sept. 2024 - Juin 2029",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <strong>EPSI - L&apos;école d&apos;ingénierie informatique</strong> - Étudiant en ingénierie informatique à Bordeaux.
            Formation en développement web, programmation et technologies modernes. BTS services informatiques aux organisations (2024-2026).
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Formation en développement web et programmation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ BTS services informatiques aux organisations
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Apprentissage des technologies modernes
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Projets pratiques et collaboratifs
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://epsi.fr/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/epsi_logo.png"
                alt="EPSI - École d'ingénierie informatique"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            <a href="https://epsi.fr/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/epsi_mydil.jpg"
                alt="Formation développement web"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}