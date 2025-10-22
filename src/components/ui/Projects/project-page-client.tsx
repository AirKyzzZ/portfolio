'use client';

import React, { useState, useEffect } from 'react';
import MyFooter from '@/components/ui/Footer/myfooter';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectPageClientProps {
  project: Project | null;
  otherProjects: Project[];
  projectId: string;
}

export default function ProjectPageClient({ project, otherProjects, projectId }: ProjectPageClientProps) {
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project) {
      // Update the document title
      document.title = `${project.title} - Maxime Mansiet`;
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [project]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
        <p className="mb-8">Le projet que vous recherchez n'existe pas.</p>
        <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg">
          Retour à l'accueil
        </Link>
      </div>
    );
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <main className="min-h-screen pt-20 pb-16 px-4 md:px-8 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#projects-cards" 
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour aux projets
          </Link>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              {/* Image gallery */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                <div className="relative aspect-video">
                  {project.images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`${project.title} - image ${index + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                  ))}
                  
                  {project.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {project.images.length > 1 && (
                  <div className="flex justify-center p-2 gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index 
                            ? 'bg-blue-500 w-4' 
                            : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Project description */}
              <motion.div 
                className="mt-8 bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold mb-4">Description du projet</h2>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              {/* Project details */}
              <motion.div 
                className="bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-bold mb-4">Détails</h2>
                
                <div className="space-y-4">
                  {/* Skills */}
                  <div>
                    <h3 className="text-sm uppercase text-gray-400 mb-2">Compétences</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`${skill.color} text-white text-xs px-2 py-1 rounded-full`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-sm uppercase text-gray-400 mb-2">Liens</h3>
                    <div className="space-y-2">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          Demo / Site web
                        </a>
                      )}
                      
                      {project.sourceCodeUrl && (
                        <a 
                          href={project.sourceCodeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Code source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* More projects */}
              <motion.div 
                className="mt-6 bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl font-bold mb-4">Autres projets</h2>
                <div className="space-y-4">
                  {otherProjects.slice(0, 3).map(otherProject => (
                    <Link 
                      key={otherProject.id} 
                      href={`/project/${otherProject.id}`}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <img 
                        src={otherProject.thumbnail} 
                        alt={otherProject.title} 
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{otherProject.title}</h3>
                        <div className="flex mt-1 space-x-1">
                          {otherProject.skills.slice(0, 2).map((skill, index) => (
                            <span 
                              key={index} 
                              className={`${skill.color} text-white text-[10px] px-1 rounded-full`}
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  <Link 
                    href="/#projects-cards"
                    className="inline-block w-full text-center bg-white/10 hover:bg-white/20 text-sm py-2 rounded-lg mt-2 transition-colors"
                  >
                    Voir tous les projets
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <MyFooter />
    </>
  );
}
