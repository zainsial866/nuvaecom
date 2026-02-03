import React from 'react';
import { useCountUp } from '../hooks/useScrollAnimation';

/**
 * Animated counter component that counts up from 0 to target value
 * @param {Object} props
 * @param {number} props.end - Target number to count to
 * @param {number} props.duration - Animation duration in ms
 * @param {string} props.suffix - Text to append after number (e.g., "+", "%")
 * @param {string} props.prefix - Text to prepend before number (e.g., "$")
 * @param {number} props.decimals - Number of decimal places
 */
const CountUp = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = '',
    style = {}
}) => {
    const { ref, value } = useCountUp(end, duration);

    const formattedValue = decimals > 0
        ? value.toFixed(decimals)
        : value.toLocaleString();

    return (
        <span ref={ref} className={className} style={style}>
            {prefix}{formattedValue}{suffix}
        </span>
    );
};

export default CountUp;
