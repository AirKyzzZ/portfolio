"use client";

import { motion } from "motion/react";
import { Bot, Twitter, Users } from "lucide-react";

const veilleCards = [
  {
    icon: <Bot className="h-6 w-6 text-orange-400" />,
    title: "OpenClaw — Mon outil de veille IA",
    subtitle: "Outil maison · Rapport quotidien",
    description:
      "J'ai construit mon propre agrégateur de veille technologique. Chaque matin, OpenClaw analyse les sources les plus fiables (GitHub trending, newsletters, feeds RSS curatoriés) et génère un rapport personnalisé adapté à mes centres d'intérêt du moment : IA agentique, SSI, Web3, fullstack.",
    tags: ["Node.js", "LLM API", "RSS", "X API", "TypeScript"],
    highlight: true,
    badge: "Compétence B1-C6",
  },
  {
    icon: <Twitter className="h-6 w-6 text-sky-400" />,
    title: "X / Twitter & Feeds tech",
    subtitle: "Veille quotidienne",
    description:
      "Feed X/Twitter soigneusement curié : suivi des leaders d'opinion en IA, SSI, WebDev et entrepreneuriat. Newsletters et blogs tech en complément (TLDR, Bytes, dev.to, Hacker News) pour rester à jour sur les évolutions du secteur.",
    tags: ["X / Twitter", "Hacker News", "dev.to", "TLDR Newsletter"],
    highlight: false,
    badge: "Compétence B1-C6",
  },
  {
    icon: <Users className="h-6 w-6 text-green-400" />,
    title: "GDG Bordeaux · Certifications",
    subtitle: "Communauté & Formation",
    description:
      "Membre actif du Google Developer Group Bordeaux : 15+ sessions, co-animation d'un atelier Flutter, réseau 100+ contacts tech. Certifications : Harvard CS50 (2025–2026) et EFSET C2 Proficient (87/100). Contributions open source sur OpenWallet Foundation, Credat.io et Face10ai.",
    tags: ["GDG Bordeaux", "Harvard CS50", "EFSET C2", "OpenWallet Foundation"],
    highlight: false,
    badge: "Compétence B1-C6",
  },
];

export function VeilleTech() {
  return (
    <section className="w-full px-4 py-16 md:px-8 md:py-24">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block mb-3 text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 border border-neutral-700 rounded-full px-3 py-1">
          B1-C6 · Développement professionnel
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Veille{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Technologique
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
          Comment je reste à jour dans un secteur qui évolue chaque semaine —
          et comment j&apos;ai automatisé ma propre veille.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {veilleCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative flex flex-col gap-4 rounded-2xl border p-6 ${
              card.highlight
                ? "border-orange-500/40 bg-orange-500/5"
                : "border-white/10 bg-white/5"
            } backdrop-blur-sm`}
          >
            {card.highlight && (
              <div className="absolute top-4 right-4">
                <span className="text-xs font-mono font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                  Outil maison
                </span>
              </div>
            )}

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-base leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {card.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed flex-1">
              {card.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5">
              <span className="text-xs font-mono text-neutral-600">
                {card.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
