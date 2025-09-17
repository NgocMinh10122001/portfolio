// components/BackToTopEnhanced.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useScrollProgress } from '@/hooks/useScrollProgress';

// Register plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

const BackToTopEnhanced = () => {
  const progress = useScrollProgress();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  
  const isVisible = progress > 10;

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: 0,
      ease: 'power2.inOut'
    });
  };

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        strokeDashoffset: 100 - progress,
        duration: 0.3,
        ease: 'power1.out'
      });
    }
  }, [progress]);

  useEffect(() => {
    if (buttonRef.current) {
      if (isVisible) {
        gsap.to(buttonRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power1.out'
        });
      } else {
        gsap.to(buttonRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: 'power1.in'
        });
      }
    }
  }, [isVisible]);

  if (progress === 0) {
    return null; // Không render trên server
  }

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer border-none outline-none opacity-0 scale-80  transition-colors duration-200 z-50 shadow-lg"
      aria-label="Back to top"
      style={{ opacity: 0, scale: 0.8 }} // Thêm style mặc định
    >
      <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
        />
        <circle
          ref={progressRef}
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </svg>

      <svg
        className="w-6 h-6 text-white relative"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTopEnhanced;