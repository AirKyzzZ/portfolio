'use client';

import { useState, useEffect } from 'react';
import { FloatingNavBar } from "@/components/ui/Navbar/floating-navbar-prop";
import Loader from '@/components/ui/Loader/loader';

export default function ClientLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <FloatingNavBar />
          <div 
            className={`
              transition-all 
              duration-[3000ms] 
              ease-in-out 
              animate-fadeIn
            `}
          >
            {children}
          </div>
        </>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 3000ms ease-in-out forwards;
        }
      `}</style>
    </>
  );
}