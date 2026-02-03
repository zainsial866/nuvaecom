import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
    const categories = [
        { name: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', count: '120+ Items' },
        { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&q=80&w=800', count: '85+ Items' },
        { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800', count: '60+ Items' },
    ];

    const trustBadges = [
        { icon: Truck, title: 'Free Delivery', desc: 'Over $500 orders' },
        { icon: RefreshCw, title: '100-Day Trial', desc: 'Risk-free return' },
        { icon: ShieldCheck, title: 'Lifetime Warranty', desc: 'Quality guaranteed' },
    ];

    return (
        <div className="page-home bg-mesh" style={{ backgroundColor: 'var(--color-bg)' }}>
            <SEO
                title="Modern Minimalist Furniture"
                description="Nüva offers premium Scandinavian-inspired furniture and decor. Transform your space with our curated collection of sofas, chairs, and tables."
            />

            <Hero />

            {/* Trust Badges */}
            <section className="section" style={{ borderBottom: '1px solid var(--color-border)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {trustBadges.map((badge, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem',
                                padding: '1.5rem',
                                background: 'var(--color-card)',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                            }}>
                                <div style={{
                                    padding: '0.9rem',
                                    backgroundColor: 'rgba(0, 171, 228, 0.1)',
                                    borderRadius: '12px',
                                    color: 'var(--color-primary)'
                                }}>
                                    <badge.icon size={26} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>{badge.title}</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{badge.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="section" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="flex items-center justify-between" style={{ marginBottom: '4rem' }}>
                        <div>
                            <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Shop Category</span>
                            <h2 className="text-glow" style={{ marginBottom: '0.5rem' }}>Living Curated For You</h2>
                            <p style={{ color: 'var(--color-text-muted)' }}>Curated collections for every room in your home.</p>
                        </div>
                        <Link to="/shop" className="btn btn-outline" style={{ gap: '0.5rem', borderRadius: '50px' }}>
                            View All <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {categories.map((cat, i) => (
                            <Link key={i} to={`/shop?category=${cat.name.toLowerCase()}`} className="category-card" style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                height: '450px',
                                display: 'block',
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 171, 228, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                }}
                            >
                                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '3rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    color: 'white'
                                }}>
                                    <h3 style={{ margin: '0 0 0.5rem', color: 'white', fontSize: '2rem' }}>{cat.name}</h3>
                                    <span style={{ fontSize: '1rem', opacity: 0.9 }}>{cat.count}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifestyle CTA */}
            <section className="section bg-mesh-dark" style={{ padding: '10rem 0', overflow: 'hidden', color: 'white' }}>
                <div className="container">
                    <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
                                zIndex: 0
                            }}></div>
                            <img
                                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000"
                                alt="Lifestyle Living Room"
                                style={{ borderRadius: '32px', boxShadow: '0 40px 80px rgba(0,0,0,0.4)', position: 'relative', zIndex: 1 }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: '-30px',
                                right: '-30px',
                                width: '180px',
                                height: '180px',
                                backgroundColor: 'var(--color-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                textAlign: 'center',
                                border: '12px solid var(--color-dark)',
                                zIndex: 2,
                                boxShadow: '0 0 30px var(--color-primary-glow)'
                            }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: '900' }}>20%</span>
                                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: '700' }}>Summer Sale</span>
                            </div>
                        </div>
                        <div>
                            <span style={{ color: 'var(--color-primary-light)', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Experience Nüva</span>
                            <h2 className="text-glow-white" style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', lineHeight: '1.1' }}>The Art of Better Living</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-400)', marginBottom: '3rem', lineHeight: '1.8' }}>
                                We believe that your home should be a sanctuary. Our pieces are crafted using sustainable materials and timeless Scandinavian design principles.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ display: 'flex', color: 'var(--color-primary)' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" />)}
                                </div>
                                <span style={{ fontWeight: '600', color: 'var(--color-white)' }}>4.9/5 TrustScore</span>
                            </div>
                            <div style={{ marginTop: '4rem' }}>
                                <Link to="/about" className="btn btn-primary text-glow" style={{ padding: '1rem 3.5rem', borderRadius: '50px' }}>Our Story</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section" style={{ padding: '8rem 0' }}>
                <div className="container text-center" style={{
                    backgroundColor: 'var(--color-bg-soft)',
                    padding: 'clamp(4rem, 10vw, 8rem) 2rem',
                    borderRadius: '40px',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                }}>
                    <h2 className="text-glow" style={{ marginBottom: '1.5rem' }}>Join the Nüva Community</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                        Subscribe for exclusive interior design tips, early access to new collections, and private member deals.
                    </p>
                    <form className="newsletter-form" style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '550px', margin: '0 auto', gap: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Email address"
                            style={{
                                flex: '1 1 300px',
                                padding: '1.2rem 2rem',
                                borderRadius: '50px',
                                border: '1px solid var(--color-border)',
                                outline: 'none',
                                fontSize: '1rem',
                                background: 'var(--color-bg)'
                            }}
                        />
                        <button className="btn btn-primary text-glow" type="submit" style={{ borderRadius: '50px', padding: '1.2rem 3rem' }}>Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
