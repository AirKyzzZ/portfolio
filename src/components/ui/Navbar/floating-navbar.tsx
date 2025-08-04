"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY;
      
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
        
        // Collapse when scrolling down
        if (direction && currentScrollY > 100) {
          setIsCollapsed(true);
          setIsMenuOpen(false);
        }
        // Expand when scrolling up
        else if (!direction && currentScrollY < lastScrollY && currentScrollY > 50) {
          setIsCollapsed(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    }
  });

  const handleNavClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "navbar-container fixed top-10 inset-x-0 mx-auto z-[5000]",
          className
        )}
      >
                 {/* Main Navbar Container */}
         <motion.div
           animate={{
             width: isCollapsed ? "3rem" : "auto",
             borderRadius: isCollapsed ? "50%" : "9999px",
             padding: isCollapsed ? "0.75rem" : "0.5rem 2rem",
             maxWidth: isCollapsed ? "3rem" : "fit-content",
           }}
           transition={{
             duration: 0.3,
             ease: "easeInOut",
           }}
           className={cn(
             "flex items-center justify-center border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm h-12 mx-auto"
           )}
         >
                     {/* Hamburger Icon */}
           <motion.button
             animate={{ 
               opacity: isCollapsed ? 1 : 0,
               scale: isCollapsed ? 1 : 0,
               pointerEvents: isCollapsed ? "auto" : "none"
             }}
             transition={{ 
               duration: 0.3,
               ease: "easeInOut"
             }}
             onClick={toggleMenu}
             className="absolute inset-0 z-50 flex items-center justify-center w-full h-full rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
           >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              ) : (
                <Menu className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              )}
            </motion.div>
          </motion.button>

                     {/* Full Navbar Items */}
           <motion.div
             animate={{ 
               opacity: !isCollapsed ? 1 : 0,
               pointerEvents: !isCollapsed ? "auto" : "none"
             }}
             transition={{ 
               duration: 0.3,
               ease: "easeInOut"
             }}
             className="flex items-center space-x-4"
           >
            {navItems.map((navItem: any, idx: number) => (
              <motion.button
                key={`link=${idx}`}
                onClick={() => handleNavClick(navItem.link)}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer transition-all duration-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </motion.button>
            ))}
            <motion.a 
              href="https://github.com/airkyzzz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>GitHub</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Expanded Menu */}
        <AnimatePresence>
          {isCollapsed && isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9,
                y: -10
              }}
              transition={{ 
                duration: 0.3, 
                type: "spring", 
                stiffness: 200,
                damping: 25
              }}
              className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] rounded-2xl shadow-xl p-4 min-w-[200px] backdrop-blur-sm"
            >
              <div className="space-y-2">
                {navItems.map((navItem: any, idx: number) => (
                  <motion.button
                    key={`menu-link=${idx}`}
                    onClick={() => handleNavClick(navItem.link)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-left"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-neutral-500 dark:text-white">
                      {navItem.icon}
                    </span>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {navItem.name}
                    </span>
                  </motion.button>
                ))}
                <div className="border-t border-neutral-200 dark:border-white/[0.2] pt-2 mt-2">
                  <motion.a 
                    href="https://github.com/airkyzzz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
