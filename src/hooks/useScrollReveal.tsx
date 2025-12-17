import { useEffect, useRef, useState, forwardRef, HTMLAttributes } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isRevealed };
};

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade' | 'left' | 'right' | 'scale';
  delay?: number;
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, className = '', animation = 'fade', delay = 0, ...props }, _ref) => {
    const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

    const animationClass = {
      fade: 'scroll-reveal',
      left: 'scroll-reveal-left',
      right: 'scroll-reveal-right',
      scale: 'scroll-reveal-scale',
    }[animation];

    return (
      <div
        ref={ref}
        className={`${animationClass} ${isRevealed ? 'revealed' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';
