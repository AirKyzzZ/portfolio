'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-in-out group"
          aria-label="Retour en haut"
          data-cursor="none"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm group-hover:blur-md transition-all duration-300" />
          
          {/* Main button content */}
          <div className="relative">
            <svg
              className="w-6 h-6 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
        </button>
      )}
    </>
  );
} 