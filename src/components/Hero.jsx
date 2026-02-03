import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-sofa.png';

const Hero = () => {
    return (
        <section className="hero-section bg-mesh" style={{
            position: 'relative',
            minHeight: '80svh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            padding: 'var(--header-height) 0'
        }}>
            {/* Glowing Decorative Orbs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '150px',
                height: '150px',
                background: 'var(--color-primary-glow)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 1,
                opacity: 0.6
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '10%',
                width: '200px',
                height: '200px',
                background: 'rgba(0, 171, 228, 0.2)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: 1,
                opacity: 0.5
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                alignItems: 'center',
                zIndex: 2,
                textAlign: 'center'
            }}>
                {/* Text Content */}
                <div className="hero-content" style={{ order: 2 }}>
                    <span className="text-glow" style={{
                        color: 'var(--color-primary)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontSize: '0.8rem',
                        marginBottom: '0.5rem',
                        display: 'block'
                    }}>
                        New Collection 2026
                    </span>
                    <h1 style={{
                        fontSize: 'var(--font-size-h1)',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        color: 'var(--color-text-heading)'
                    }}>
                        Transform Your <span className="text-gradient text-glow">Space</span>
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-gray-500)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px',
                        marginInline: 'auto'
                    }}>
                        Discover modern furniture designed for contemporary living. Quality craftsmanship meets Scandinavian minimalism.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/shop" className="btn btn-primary text-glow" style={{
                            padding: '0.8rem 2.5rem',
                            flex: '1 1 auto',
                            minWidth: '160px',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
                        }}>
                            Shop Now
                        </Link>
                        <Link to="/shop" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem', flex: '1 1 auto', minWidth: '160px' }}>
                            View Collection
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hero-image-container" style={{ position: 'relative', order: 1 }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
                        zIndex: -2,
                        opacity: 0.8
                    }}></div>
                    <img
                        src={heroImage}
                        alt="Modern White Sofa"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            margin: '0 auto',
                            zIndex: 2,
                            filter: 'drop-shadow(0 20px 40px rgba(0, 171, 228, 0.15))'
                        }}
                    />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 769px) {
                    .container { 
                        grid-template-columns: 1fr 1fr !important; 
                        text-align: left !important;
                        gap: 4rem !important;
                    }
                    .hero-content { order: 1 !important; }
                    .hero-content p { margin-inline: 0 !important; }
                    .hero-image-container { order: 2 !important; }
                    .hero-image-container img { transform: translateX(20px) !important; }
                    .hero-section { min-height: 100vh !important; }
                }
            ` }} />
        </section>
    );
};

export default Hero;
