'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        className="relative flex flex-col rounded-xl overflow-hidden bg-black/5 backdrop-blur-sm border border-white/10 h-full cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60" />
          
          {project.featured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold text-white px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <div className="flex flex-col p-4 flex-grow">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-300 mt-2 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index} 
                className={`${skill.color} text-white text-xs px-2 py-1 rounded-full`}
              >
                {skill.name}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
                +{project.skills.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </Link>
  );
};
