// hooks/useScrollProgress.ts
'use client';

import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Set initial value
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return isMounted ? progress : 0;
};