'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';
import { projects as allProjects } from '@/data/projects';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.featured);

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Mes Projets
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents. Cliquez sur une carte pour voir plus de détails.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Tous
            </button>
            <button 
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === 'featured' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">Aucun projet à afficher avec ce filtre.</p>
          </div>
        )}
      </div>
    </section>
  );
};
