import { useCallback } from 'react';

interface ScrollOptions {
  behavior?: 'auto' | 'smooth';
  offset?: number;
  duration?: number;
}

export const useScrollToElement = () => {
  const scrollToElement = useCallback((
    elementId: string, 
    options: ScrollOptions = { behavior: 'smooth', offset: 0 }
  ) => {
    const element = document.getElementById(elementId);
    if (element) {
        
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (options.offset || 0);

      window.scrollTo({
        top: offsetPosition,
        behavior: options.behavior || 'smooth',
      });
    }
  }, []);

  return scrollToElement;
};