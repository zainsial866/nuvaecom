import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';
import SEO from '../components/SEO';
import confetti from 'canvas-confetti';

const OrderConfirmation = () => {
    const orderNumber = Math.floor(Math.random() * 900000) + 100000;

    useEffect(() => {
        // Celebration!
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="page-order-confirmation bg-mesh" style={{ padding: '8rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <SEO title="Order Confirmed | Nüva" />
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'var(--color-primary-glow)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 3rem',
                    boxShadow: '0 0 40px var(--color-primary-glow)'
                }}>
                    <CheckCircle size={60} />
                </div>

                <h1 className="text-glow" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Thank You!</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '3rem' }}>
                    Your Scandinavian sanctuary is now being prepared. We've sent a confirmation email to your inbox.
                </p>

                <div style={{
                    background: 'var(--color-card)',
                    padding: '2rem',
                    borderRadius: '24px',
                    border: '1px solid var(--color-border)',
                    marginBottom: '4rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Order Number</span>
                        <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>#NU-{orderNumber}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Status</span>
                        <p style={{ margin: 0, fontWeight: '700', color: '#10B981' }}>Processing</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/shop" className="btn btn-primary" style={{ borderRadius: '50px', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Review Order Details <ArrowRight size={18} />
                    </Link>
                    <Link to="/" className="btn btn-outline" style={{ borderRadius: '50px', padding: '1rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Home size={18} /> Back to Home
                    </Link>
                </div>

                <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.6 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <Package size={18} /> Track Shipment
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <CheckCircle size={18} /> Quality Guaranteed
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
