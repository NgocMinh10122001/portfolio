'use client'; // Bắt buộc vì sử dụng useEffect và DOM

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Khởi tạo Lenis
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function mặc định
      orientation: 'vertical', // 'vertical' hoặc 'horizontal'
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Hàm animation frame
    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dọn dẹp khi component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}