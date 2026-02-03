import React, { useState } from 'react';
import { Phone, Mail, Map, Clock, CheckCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '',
        subject: '',
        message: '', contactMethod: 'Email'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = (e) => {
        e.preventDefault();
        setStep(prev => prev + 1);
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            subject: formData.subject,
            message: formData.message,
            preferred_contact: formData.contactMethod
        };

        try {
            await emailjs.send(
                'service_nuva',
                'template_nuva',
                templateParams,
                'user_nuva'
            );
            setIsSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '1.5rem' }}>Step 1: Contact Information</h3>
                        <div className="grid gap-4" style={{ gap: '1rem' }}>
                            <input required name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={inputStyle} />
                            <input required name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} />
                            <input required name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} style={inputStyle} />
                            <input required name="address" placeholder="Property Address" value={formData.address} onChange={handleChange} style={inputStyle} />
                        </div>
                        <button onClick={nextStep} className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>Next Step</button>
                    </div>
                );
            case 2:
                // ... (Same logic as before)
                return (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '1.5rem' }}>Step 2: Roof Details</h3>
                        <div className="grid gap-4" style={{ gap: '1rem' }}>
                            <select name="roofType" value={formData.roofType} onChange={handleChange} style={inputStyle}>
                                <option value="">Select Roof Material</option>
                                <option value="asphalt">Asphalt Shingles</option>
                                <option value="metal">Metal</option>
                                <option value="tile">Tile/Slate</option>
                                <option value="flat">Flat/TPO</option>
                                <option value="unknown">I Don't Know</option>
                            </select>
                            <select name="age" value={formData.age} onChange={handleChange} style={inputStyle}>
                                <option value="">Age of Roof</option>
                                <option value="0-5">0-5 Years</option>
                                <option value="5-10">5-10 Years</option>
                                <option value="10-15">10-15 Years</option>
                                <option value="15+">15+ Years</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                            <button onClick={nextStep} className="btn btn-primary" style={{ flex: 1 }}>Next Step</button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '1.5rem' }}>Step 3: Service Needed</h3>
                        <div className="grid gap-4" style={{ gap: '1rem' }}>
                            {['Repair', 'Full Replacement', 'New Construction', 'Inspection', 'Emergency'].map(type => (
                                <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="serviceType"
                                        value={type}
                                        checked={formData.serviceType === type}
                                        onChange={handleChange}
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                            <button onClick={nextStep} className="btn btn-primary" style={{ flex: 1 }}>Next Step</button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="fade-in">
                        <h3 style={{ marginBottom: '1.5rem' }}>Step 4: Final Details</h3>
                        <textarea
                            name="description"
                            placeholder="Please describe your issue or project details..."
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            style={{ ...inputStyle, resize: 'vertical' }}
                        />
                        <select name="contactTime" value={formData.contactTime} onChange={handleChange} style={{ ...inputStyle, marginTop: '1rem' }}>
                            <option value="">Preferred Contact Time</option>
                            <option value="morning">Morning (8am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 5pm)</option>
                            <option value="evening">Evening (5pm - 8pm)</option>
                        </select>
                        {error && (
                            <div style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                {error}
                            </div>
                        )}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <button onClick={prevStep} type="button" className="btn btn-outline" style={{ flex: 1 }} disabled={isSubmitting}>Back</button>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="btn btn-primary"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : 'Submit Request'}
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid var(--color-border)',
        fontSize: '1rem',
        fontFamily: 'inherit',
        background: 'var(--color-bg)',
        color: 'var(--color-text-main)'
    };

    return (
        <div className="page-contact bg-mesh" style={{ backgroundColor: 'var(--color-bg)' }}>
            <SEO
                title="Contact Us"
                description="Get in touch with Nüva. We're here to help you design your perfect sanctuary."
            />

            <div className="section text-center bg-mesh-dark" style={{ color: 'white', padding: '8rem 0' }}>
                <div className="container">
                    <h1 className="text-glow-white">Get in Touch</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--color-gray-400)' }}>
                        Have questions about our collection or need design advice? Our team is here for you.
                    </p>
                </div>
            </div>

            <div className="container section" style={{ backgroundColor: 'var(--color-bg)' }}>
                <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info Side */}
                    <div>
                        <h2 className="text-glow" style={{ marginBottom: '2.5rem' }}>Contact Details</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.25rem' }}>
                                <div style={{ color: 'var(--color-primary)' }}><Phone size={26} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', fontWeight: '700', color: 'var(--color-text-heading)' }}>Support</h3>
                                    <p style={{ color: 'var(--color-text-main)', fontWeight: '500' }}>+1 (800) NUVA-DESIGN</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.25rem' }}>
                                <div style={{ color: 'var(--color-primary)' }}><Mail size={26} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', fontWeight: '700' }}>General Inquiries</h3>
                                    <p style={{ color: 'var(--color-gray-800)', fontWeight: '500' }}>hello@nuvadesign.com</p>
                                    <p style={{ color: 'var(--color-gray-800)', fontWeight: '500' }}>press@nuvadesign.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.25rem' }}>
                                <div style={{ color: 'var(--color-primary)' }}><Map size={26} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', fontWeight: '700' }}>Showroom</h3>
                                    <p style={{ color: 'var(--color-gray-800)', fontWeight: '500' }}>452 Design District</p>
                                    <p style={{ color: 'var(--color-gray-800)', fontWeight: '500' }}>New York, NY 10013</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder */}
                        <div style={{ marginTop: '3rem', height: '250px', backgroundColor: '#f1f5f9', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', border: '1px solid var(--color-gray-100)' }}>
                            Showroom: 452 Design District, Soho, NY
                        </div>
                    </div>

                    {/* Form Side */}
                    <div>
                        <div style={{ background: 'var(--color-card)', borderRadius: '32px', padding: '3rem', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', border: '1px solid var(--color-border)' }}>
                            {isSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <CheckCircle size={64} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem', filter: 'drop-shadow(0 0 10px var(--color-primary-glow))' }} />
                                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-text-heading)' }}>Message Sent</h2>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                                        Thank you, {formData.name}. We've received your message and will get back to you within 24 hours.
                                    </p>
                                    <button onClick={() => setIsSubmitted(false)} className="btn btn-primary text-glow" style={{ marginTop: '2rem', borderRadius: '50px' }}>Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 style={{ marginBottom: '2rem', fontWeight: '800', color: 'var(--color-text-heading)' }}>Drop us a line</h3>
                                    <div className="grid gap-4" style={{ display: 'grid', gap: '1.5rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                            <input required name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={inputStyle} />
                                            <input required name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
                                        </div>
                                        <input required name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
                                        <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} style={inputStyle} />
                                        <textarea
                                            name="message"
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            style={{ ...inputStyle, borderRadius: '20px', resize: 'none' }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-glow"
                                        style={{ marginTop: '2.5rem', width: '100%', borderRadius: '50px', padding: '1.2rem' }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
