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
          className="fixed z-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 ease-in-out group
            p-2 sm:p-3 md:p-4
            bottom-[max(theme(spacing.4),env(safe-area-inset-bottom))]
            right-[max(theme(spacing.4),env(safe-area-inset-right))]
            hover:bg-white/20 hover:scale-110
          "
          aria-label="Retour en haut"
          data-cursor="none"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[2px] md:blur-sm group-hover:blur-md transition-all duration-300" />
          
          {/* Main button content */}
          <div className="relative">
            <svg
              className="text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
          <div className="absolute inset-0 rounded-full border border-white/30 md:border-2 animate-ping" />
        </button>
      )}
    </>
  );
} 