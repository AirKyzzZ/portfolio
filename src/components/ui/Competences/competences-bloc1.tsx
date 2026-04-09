"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Database,
  AlertCircle,
  Globe,
  LayoutGrid,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/Glowing/glowing-effect";
import { competences, type Competence } from "@/data/competences";

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="h-4 w-4 text-black dark:text-neutral-400" />,
  AlertCircle: (
    <AlertCircle className="h-4 w-4 text-black dark:text-neutral-400" />
  ),
  Globe: <Globe className="h-4 w-4 text-black dark:text-neutral-400" />,
  LayoutGrid: (
    <LayoutGrid className="h-4 w-4 text-black dark:text-neutral-400" />
  ),
  Rocket: <Rocket className="h-4 w-4 text-black dark:text-neutral-400" />,
  TrendingUp: (
    <TrendingUp className="h-4 w-4 text-black dark:text-neutral-400" />
  ),
};

const gridAreas = [
  "md:[grid-area:1/1/2/5]",
  "md:[grid-area:1/5/2/9]",
  "md:[grid-area:1/9/2/13]",
  "md:[grid-area:2/1/3/5]",
  "md:[grid-area:2/5/3/9]",
  "md:[grid-area:2/9/3/13]",
];

interface GridItemProps {
  area: string;
  competence: Competence;
  index: number;
}

const GridItem = ({ area, competence, index }: GridItemProps) => {
  const allTools = competence.realisations
    .flatMap((r) => r.tools)
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 5);

  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {iconMap[competence.icon]}
              </div>
              <span
                className={`text-xs font-mono font-semibold px-2 py-1 rounded-full bg-gradient-to-r ${competence.color} text-white`}
              >
                {competence.code}
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-xl/[1.675rem] dark:text-white">
                {competence.title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-sm/[1.375rem] dark:text-neutral-400 line-clamp-3">
                {competence.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {allTools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export function CompetencesBloc1() {
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
          Épreuve E4 · BTS SIO SLAM
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Compétences{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Bloc 1
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
          Les 6 compétences officielles du Bloc 1 évaluées lors de l&apos;épreuve E4,
          couvertes par mes réalisations professionnelles et associatives.
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
        {competences.map((competence, index) => (
          <GridItem
            key={competence.id}
            area={gridAreas[index]}
            competence={competence}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}
