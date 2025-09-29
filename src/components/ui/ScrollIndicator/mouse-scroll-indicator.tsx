'use client';

import { motion } from 'framer-motion';

export default function MouseScrollIndicator() {
  return (
    <motion.div
      className="absolute z-20 flex flex-col items-center left-1/2 transform -translate-x-1/2
        bottom-[max(theme(spacing.10),env(safe-area-inset-bottom))]
        pointer-events-none select-none
        hidden xs:flex sm:flex md:flex
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {/* Mouse outline */}
      <motion.div
        className="rounded-full flex items-center justify-center relative border-2 border-white/60 w-5 h-8 sm:w-6 sm:h-10 md:w-8 md:h-12"
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
          className="bg-white/80 rounded-full w-0.5 h-0.5 sm:w-1 sm:h-1"
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
        className="text-white/70 mt-2 sm:mt-3 font-light tracking-wider text-[10px] sm:text-xs md:text-sm"
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
            className="bg-white/60 rounded-full w-0.5 h-0.5 sm:w-1 sm:h-1"
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