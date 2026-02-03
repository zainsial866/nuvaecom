import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Wrapper component for scroll-triggered animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.animation - Animation type (fade-in, slide-up, etc.)
 * @param {number} props.delay - Animation delay in ms
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedSection = ({
    children,
    animation = 'slide-up',
    delay = 0,
    className = '',
    threshold = 0.3,
    ...props
}) => {
    const { ref, isVisible } = useScrollAnimation({ threshold, once: true });

    const animationClass = `animate-${animation}`;
    const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

    return (
        <div
            ref={ref}
            className={`${isVisible ? animationClass : 'animate-on-scroll'} ${className}`}
            style={delayStyle}
            {...props}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
