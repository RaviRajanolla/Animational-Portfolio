import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnScrollStop?: boolean;
  scrollStopDelay?: number;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const [inView, setInView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const { triggerOnScrollStop = false, scrollStopDelay = 150 } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnScrollStop) {
          // Only trigger animation when scrolling stops and element is in view
          if (entry.isIntersecting && !isScrolling) {
            setInView(true);
          } else if (!entry.isIntersecting) {
            setInView(false);
          }
        } else {
          // Original behavior - trigger immediately when in view
          setInView(entry.isIntersecting);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Handle scroll events if triggerOnScrollStop is enabled
    if (triggerOnScrollStop) {
      const handleScroll = () => {
        setIsScrolling(true);
        
        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        // Set new timeout to detect when scrolling stops
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
          
          // Check if element is still in view after scrolling stops
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const threshold = options.threshold || 0.1;
            
            const elementVisible = rect.top < windowHeight * (1 - threshold) && 
                                 rect.bottom > windowHeight * threshold;
            
            if (elementVisible) {
              setInView(true);
            }
          }
        }, scrollStopDelay);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnScrollStop, options.scrollStopDelay, isScrolling]);

  return [ref, inView] as const;
};