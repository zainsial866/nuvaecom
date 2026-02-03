import React from 'react';
import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
    const { ref, getItemProps } = useStaggerAnimation(3, 150);

    return (
        <footer
            ref={ref}
            style={{
                backgroundColor: 'var(--color-bg-soft)',
                color: 'var(--color-text-main)',
                padding: '5rem 0 3rem',
                borderTop: '1px solid var(--color-border)',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>

                <div {...getItemProps(0)}>
                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Nüva
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                        Modern minimalist furniture for contemporary living. Quality craftsmanship meets Scandinavian design.
                    </p>
                </div>

                <div {...getItemProps(1)}>
                    <h4 style={{ color: 'var(--color-text-heading)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '700' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/shop" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Shop All</Link></li>
                        <li><Link to="/about" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Our Story</Link></li>
                        <li><Link to="/contact" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Contact Us</Link></li>
                        <li><Link to="/shop?category=sale" style={{ color: '#ef4444', textDecoration: 'none', fontWeight: '600' }}>Summer Sale</Link></li>
                    </ul>
                </div>

                <div {...getItemProps(2)}>
                    <h4 style={{ color: 'var(--color-text-heading)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '700' }}>Contact</h4>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>123 Design District, Stockholm</p>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>hello@nuvadesign.com</p>
                    <p style={{ color: 'var(--color-text-muted)' }}>+46 08 123 456</p>
                </div>

            </div>
            <div className="text-center" style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                &copy; {new Date().getFullYear()} Nüva Modern Living. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
