'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

type CursorType = 'default' | 'link' | 'image' | 'button' | 'text' | 'hover';

interface CustomCursorProps {
  children: React.ReactNode;
}

export default function CustomCursor({ children }: CustomCursorProps) {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners for cursor type detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('link');
        setIsHovering(true);
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setCursorType('image');
        setIsHovering(true);
      } else if (target.tagName === 'BUTTON' || target.closest('button') || target.closest('.gradient-button')) {
        setCursorType('button');
        setIsHovering(true);
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.closest('input') || target.closest('textarea')) {
        setCursorType('text');
        setIsHovering(true);
      } else {
        setCursorType('default');
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  const getCursorContent = () => {
    switch (cursorType) {
      case 'link':
        return (
          <div className="flex items-center justify-center w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'image':
        return (
          <div className="flex items-center justify-center w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
              <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        );
      case 'button':
        return (
          <div className="flex items-center justify-center w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      case 'text':
        return (
          <div className="flex items-center justify-center w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <line x1="17" y1="10" x2="3" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="21" y1="6" x2="3" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="21" y1="14" x2="3" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="17" y1="18" x2="3" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getCursorSize = () => {
    if (isClicking) {
      return 'w-6 h-6';
    }
    
    switch (cursorType) {
      case 'link':
      case 'image':
      case 'button':
      case 'text':
        return isHovering ? 'w-16 h-16' : 'w-12 h-12';
      default:
        return isHovering ? 'w-12 h-12' : 'w-8 h-8';
    }
  };

  const getCursorBackground = () => {
    if (isClicking) {
      return 'bg-white/80 backdrop-blur-md';
    }
    
    switch (cursorType) {
      case 'link':
        return 'bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm';
      case 'image':
        return 'bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-sm';
      case 'button':
        return 'bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm';
      case 'text':
        return 'bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm';
      default:
        return 'bg-white/10 backdrop-blur-md border border-white/20';
    }
  };

  const getCursorBorder = () => {
    if (isClicking) {
      return 'border-2 border-white/80';
    }
    
    if (cursorType === 'default') {
      return 'border border-white/30';
    }
    return 'border-2 border-white/50';
  };

  return (
    <>
      {children}
      
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        /* Show default cursor for touch devices */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] ${getCursorSize()} ${getCursorBackground()} ${getCursorBorder()} rounded-full flex items-center justify-center transition-all duration-500 ease-out`}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: isClicking ? 0.8 : 1,
              rotate: isHovering && !isClicking ? 360 : 0
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 700,
              rotate: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <AnimatePresence mode="wait">
              {getCursorContent() && !isClicking && (
                <motion.div
                  key={cursorType}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {getCursorContent()}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Click indicator */}
            {isClicking && (
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.1 }}
              />
            )}
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${
              cursorType === 'default' ? 'bg-white/20' : 'bg-current'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor trail effect */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] w-3 h-3 bg-white/40 rounded-full backdrop-blur-sm"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 50, stiffness: 400 }}
          />
        )}
      </AnimatePresence>

      {/* Additional trail dots */}
      <AnimatePresence>
        {isVisible && isHovering && !isClicking && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997] w-1 h-1 bg-white/60 rounded-full"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              delay: 0.1
            }}
          />
        )}
      </AnimatePresence>

      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9996] w-20 h-20 border-2 border-white/30 rounded-full"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </>
  );
} 