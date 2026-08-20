import React, { useEffect, useRef, useState } from 'react';

interface MotionRevealProps {
  children: React.ReactNode;
  variant?: 'fade' | 'fade_up' | 'fade_down' | 'fade_left' | 'fade_right' | 'scale';
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  variant = 'fade_up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const variantStyles = {
    fade: isVisible ? 'opacity-100' : 'opacity-0',
    fade_up: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    fade_down: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
    fade_left: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    fade_right: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    scale: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
