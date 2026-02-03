import React, { useState } from 'react';
import { Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const TestimonialCard = ({ name, location, text, rating = 5 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
        <div
            ref={ref}
            className="testimonial-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(233, 230, 255, 0.08) 0%, rgba(115, 104, 59, 0.08) 100%)',
                borderRadius: '8px',
                boxShadow: isHovered ? '0 8px 30px rgba(233, 230, 255, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(233, 230, 255, 0.2)',
                borderLeft: `3px solid ${isHovered ? '#B0A084' : '#E9E6FF'}`,
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
            }}
        >
            <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem', color: '#E9E6FF' }}>
                {[...Array(rating)].map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        fill={isVisible ? "#E9E6FF" : "transparent"}
                        style={{
                            transition: `fill 0.3s ease ${i * 0.1}s`,
                            opacity: isVisible ? 1 : 0
                        }}
                    />
                ))}
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-accent-secondary)' }}>"{text}"</p>
            <div style={{ borderTop: '1px solid rgba(233, 230, 255, 0.2)', paddingTop: '1rem' }}>
                <p style={{ fontWeight: '700', color: 'var(--color-accent)' }}>{name}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-accent-secondary)' }}>{location}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
