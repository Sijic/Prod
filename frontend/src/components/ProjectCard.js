import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="aspect-video md:aspect-[4/3] w-full bg-gray-900 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="mb-1 text-xs text-red-500 font-medium">
            {project.category}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {project.description}
          </p>
          <Link 
            to={`/projects/${project.id}`} 
            className="inline-block py-2 px-4 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition-colors"
          >
            Подробнее
          </Link>
        </div>
      </div>
      
      {/* Category tag */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm py-1 px-3 rounded text-xs font-medium text-white">
        {project.category}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
