import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoSection = ({ thumbnailImage, videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {!isPlaying ? (
        <>
          <motion.div 
            className="relative aspect-video w-full overflow-hidden rounded-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={thumbnailImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            <motion.button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative flex items-center justify-center w-20 h-20 bg-red-600 rounded-full group-hover:bg-red-700 transition-colors">
                <FaPlay className="text-white ml-1" size={20} />
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
              </div>
            </motion.button>
            
            {title && (
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
              </div>
            )}
          </motion.div>
        </>
      ) : (
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
