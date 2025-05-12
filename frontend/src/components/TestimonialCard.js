import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <FaQuoteLeft className="text-red-500 text-3xl mb-4" />
      <p className="text-gray-300 mb-6">{testimonial.quote}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-white">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
