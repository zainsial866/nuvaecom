import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible before triggering (0-1)
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.once - Whether to animate only once
 * @returns {Object} - { ref, isVisible }
 */
export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.3,
        rootMargin = '0px',
        once = true,
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Add will-change for performance
        element.style.willChange = 'transform, opacity';

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && (!once || !hasAnimated)) {
                    setIsVisible(true);
                    setHasAnimated(true);

                    // Remove will-change after animation
                    setTimeout(() => {
                        if (element) {
                            element.style.willChange = 'auto';
                        }
                    }, 1000);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                element.style.willChange = 'auto';
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, once, hasAnimated]);

    return { ref, isVisible };
};

/**
 * Hook for staggered animations of multiple children
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item in ms
 * @returns {Object} - { ref, getItemProps }
 */
export const useStaggerAnimation = (itemCount, staggerDelay = 100) => {
    const { ref, isVisible } = useScrollAnimation();

    const getItemProps = (index) => ({
        className: `animate-on-scroll ${isVisible ? 'animated' : ''}`,
        style: {
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
        },
    });

    return { ref, getItemProps, isVisible };
};

/**
 * Hook for counter animation
 * @param {number} end - End value
 * @param {number} duration - Duration in ms
 * @param {number} start - Start value
 * @returns {Object} - { ref, value }
 */
export const useCountUp = (end, duration = 2000, start = 0) => {
    const { ref, isVisible } = useScrollAnimation({ once: true });
    const [value, setValue] = useState(start);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateValue = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function (ease-out)
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setValue(Math.floor(start + (end - start) * easedProgress));

            if (now < endTime) {
                requestAnimationFrame(updateValue);
            } else {
                setValue(end);
            }
        };

        requestAnimationFrame(updateValue);
    }, [isVisible, start, end, duration]);

    return { ref, value };
};

export default useScrollAnimation;
