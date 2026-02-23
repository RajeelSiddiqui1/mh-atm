import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

/**
 * Animated wrapper component for scroll-triggered animations
 */
export const AnimateOnScroll = ({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  duration = 700,
  threshold = 0.1,
  className = '',
  as: Component = 'div'
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, transform: 'translateY(40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeDown: {
      hidden: { opacity: 0, transform: 'translateY(-40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeLeft: {
      hidden: { opacity: 0, transform: 'translateX(-60px)' },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeRight: {
      hidden: { opacity: 0, transform: 'translateX(60px)' },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleUp: {
      hidden: { opacity: 0, transform: 'scale(0.85)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    scaleIn: {
      hidden: { opacity: 0, transform: 'scale(0.95)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    rotateIn: {
      hidden: { opacity: 0, transform: 'rotate(-5deg) scale(0.95)' },
      visible: { opacity: 1, transform: 'rotate(0) scale(1)' }
    },
    flipUp: {
      hidden: { opacity: 0, transform: 'perspective(600px) rotateX(15deg) translateY(30px)' },
      visible: { opacity: 1, transform: 'perspective(600px) rotateX(0) translateY(0)' }
    },
    blurIn: {
      hidden: { opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' },
      visible: { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }
    }
  };

  const anim = animations[animation] || animations.fadeUp;
  const currentStyle = isVisible ? anim.visible : anim.hidden;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...currentStyle,
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Stagger children animations
 */
export const StaggerChildren = ({ 
  children, 
  animation = 'fadeUp', 
  staggerDelay = 100,
  baseDelay = 0,
  duration = 700,
  threshold = 0.1,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, transform: 'translateY(40px)' },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeLeft: {
      hidden: { opacity: 0, transform: 'translateX(-40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeRight: {
      hidden: { opacity: 0, transform: 'translateX(40px)' },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    scaleUp: {
      hidden: { opacity: 0, transform: 'scale(0.85)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    flipUp: {
      hidden: { opacity: 0, transform: 'perspective(600px) rotateX(10deg) translateY(20px)' },
      visible: { opacity: 1, transform: 'perspective(600px) rotateX(0) translateY(0)' }
    }
  };

  const anim = animations[animation] || animations.fadeUp;

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? children.map((child, index) => (
        <div
          key={index}
          style={{
            ...(isVisible ? anim.visible : anim.hidden),
            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + (index * staggerDelay)}ms`,
            willChange: 'transform, opacity'
          }}
        >
          {child}
        </div>
      )) : (
        <div
          style={{
            ...(isVisible ? anim.visible : anim.hidden),
            transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay}ms`,
            willChange: 'transform, opacity'
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default useScrollAnimation;
