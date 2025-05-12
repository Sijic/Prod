import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-red-600 mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Страница не найдена</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Кажется, вы пытаетесь найти страницу, которая больше не существует или была перемещена.
          </p>
          
          <Link to="/" className="btn-primary">
            Вернуться на главную
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
