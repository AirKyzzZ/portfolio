'use client';

import { motion } from 'framer-motion';

export default function MouseScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {/* Mouse outline */}
      <motion.div
        className="w-8 h-12 border-2 border-white/60 rounded-full flex items-center justify-center relative"
        animate={{ 
          scale: [1, 1.05, 1],
          borderColor: ['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.6)']
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Scroll wheel */}
        <motion.div
          className="w-1 h-1 bg-white/80 rounded-full"
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Scroll text */}
      <motion.p
        className="text-white/70 text-sm mt-3 font-light tracking-wider"
        animate={{ 
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        SCROLL
      </motion.p>
      
      {/* Animated dots */}
      <div className="flex space-x-1 mt-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-1 h-1 bg-white/60 rounded-full"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
} 