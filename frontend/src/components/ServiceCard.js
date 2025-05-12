import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, image, index }) => {
  return (
    <motion.div 
      className="group relative bg-zinc-900 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center mb-4">
          <div className="text-red-500 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <motion.button 
          className="flex items-center text-sm font-medium text-red-500 group-hover:text-white transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          Подробнее <FaArrowRight className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
