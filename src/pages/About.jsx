import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Award, Users, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="page-about" style={{ backgroundColor: 'var(--color-bg)' }}>
            <SEO
                title="About Us"
                description="Learn about Nüva, the pioneers of Scandinavian-inspired minimalist furniture. Crafting sanctuary spaces since 1995."
            />

            {/* Hero */}
            <div className="section bg-mesh" style={{ padding: '8rem 0' }}>
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h1 className="text-glow" style={{ marginBottom: '1.5rem' }}>More Than Just a Furniture Store</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', marginBottom: '2.5rem' }}>
                            Founded in 1995, Nüva started with a single workbench and a commitment to honest design. Today, we are the benchmark for Scandinavian minimalism in the home.
                        </p>
                        <div style={{ paddingLeft: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>"Our mission is to help you create a home that feels like a sanctuary—minimalist, functional, and deeply personal."</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office space" style={{ borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} />
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="section" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <h2 className="text-center text-glow" style={{ marginBottom: '4rem' }}>Why Choose Nüva?</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {[
                            { icon: Award, title: "Premium Sourcing", text: "We use only sustainably harvested hardwoods and premium Belgian linens." },
                            { icon: Users, title: "Artisan Crafted", text: "Each piece is hand-finished by our master craftsmen to ensure a lifetime of quality." },
                            { icon: Check, title: "100-Day Trial", text: "We believe you should live with your furniture. Experience it at home risk-free." },
                            { icon: Heart, title: "Eco-Conscious", text: "For every piece of furniture sold, we plant 10 trees in partnership with global reforestation projects." }
                        ].map((item, i) => (
                            <div key={i} className="card-hover" style={{
                                padding: '2.5rem',
                                background: 'var(--color-card)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '24px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}><item.icon size={36} /></div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="section bg-mesh" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <h2 className="text-center text-glow" style={{ marginBottom: '4rem' }}>The Visionaries Behind Nüva</h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        {[
                            { name: "John Smith", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            { name: "Sarah Johnson", role: "Operations Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            { name: "Mike Williams", role: "Lead Project Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                        ].map((member, i) => (
                            <div key={i} style={{
                                background: 'var(--color-card)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-border)',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <img src={member.img} alt={member.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontWeight: '700' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Partners */}
            <div className="section" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="glass" style={{ borderRadius: '32px', padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                        <h3 className="text-glow" style={{ marginBottom: '2.5rem' }}>Our Craft Partners</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', opacity: 0.5 }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '0.1em' }}>SCANDI-CRAFT</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '0.1em' }}>FOREST TRUST</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '0.1em' }}>MASTER WEAVE</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '0.1em' }}>PURE LINEN</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
