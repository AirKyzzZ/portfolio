"use client";

import { motion } from "motion/react";
import { Check, FileText } from "lucide-react";
import { competences } from "@/data/competences";
import { projects } from "@/data/projects";

const ATTESTATION_URL = "#"; // Remplacer par l'URL du PDF Hop Hop Immo

export function TableauSynthese() {
  const displayProjects = projects.filter((p) => p.id !== "side-projects");
  const sideProjects = projects.find((p) => p.id === "side-projects");
  const allRows = sideProjects
    ? [...displayProjects, sideProjects]
    : displayProjects;

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
          Document obligatoire · Épreuve E4
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tableau de{" "}
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Synthèse
          </span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
          Correspondance entre mes réalisations et les 6 compétences du Bloc 1
          évaluées lors de l&apos;épreuve E4.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-sm font-semibold text-neutral-300 bg-white/5 w-[200px]">
                  Réalisation
                </th>
                {competences.map((comp) => (
                  <th
                    key={comp.id}
                    className="p-3 text-center bg-white/5"
                    title={comp.title}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${comp.color} text-white`}
                      >
                        {comp.id}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allRows.map((project, rowIndex) => (
                <motion.tr
                  key={project.id}
                  className="border-b border-white/5 hover:bg-white/3 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: rowIndex * 0.06 }}
                >
                  <td className="p-4">
                    <div>
                      <p className="text-sm font-medium text-white leading-tight">
                        {project.title}
                      </p>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
                        >
                          ↗ voir le site
                        </a>
                      )}
                    </div>
                  </td>
                  {competences.map((comp) => {
                    const covered = project.competencyIds.includes(comp.id);
                    return (
                      <td key={comp.id} className="p-3 text-center">
                        {covered ? (
                          <motion.div
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${comp.color} mx-auto`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              delay: rowIndex * 0.06 + 0.1,
                            }}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        ) : (
                          <span className="text-neutral-700 text-lg">—</span>
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}

              {/* Ligne attestation de stage */}
              <motion.tr
                className="border-t-2 border-yellow-500/30 bg-yellow-500/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: allRows.length * 0.06 }}
              >
                <td className="p-4" colSpan={7}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-yellow-300">
                        Attestation de stage — Hop Hop Immo
                      </p>
                      <p className="text-xs text-neutral-500">
                        Stage ingénieur logiciel · Jan. 2026 – Sept. 2026 (→
                        alternance)
                      </p>
                    </div>
                    {ATTESTATION_URL !== "#" ? (
                      <a
                        href={ATTESTATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-xs px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/30 transition-colors flex-shrink-0"
                      >
                        Voir le PDF
                      </a>
                    ) : (
                      <span className="ml-auto text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-600 flex-shrink-0">
                        PDF à joindre
                      </span>
                    )}
                  </div>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>

        {/* Légende */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {competences.map((comp) => (
            <div
              key={comp.id}
              className="flex items-start gap-2 p-3 rounded-xl bg-white/3 border border-white/5"
            >
              <span
                className={`flex-shrink-0 text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-gradient-to-r ${comp.color} text-white mt-0.5`}
              >
                {comp.id}
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {comp.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
