import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, Check, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';

const Checkout = () => {
    const [step, setStep] = useState(1);
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    // Summary calculations
    const shipping = cartTotal > 500 ? 0 : 50;
    const tax = cartTotal * 0.08;
    const grandTotal = cartTotal + shipping + tax;

    if (cart.length === 0 && step !== 4) {
        navigate('/cart');
        return null;
    }

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleCompleteOrder = () => {
        // Mock order processing
        setTimeout(() => {
            clearCart();
            navigate('/order-confirmation');
        }, 1500);
    };

    const steps = [
        { id: 1, title: 'Shipping', icon: <Truck size={18} /> },
        { id: 2, title: 'Payment', icon: <CreditCard size={18} /> },
        { id: 3, title: 'Review', icon: <Check size={18} /> }
    ];

    return (
        <div className="page-checkout bg-mesh" style={{ padding: '8rem 0', minHeight: '100vh' }}>
            <SEO title="Checkout | Nüva" />
            <div className="container">
                {/* Progress Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    marginBottom: '5rem',
                    flexWrap: 'wrap'
                }}>
                    {steps.map((s) => (
                        <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: step >= s.id ? 'var(--color-primary)' : 'var(--color-bg-soft)',
                                color: step >= s.id ? 'white' : 'var(--color-text-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: step >= s.id ? 'none' : '1px solid var(--color-border)',
                                fontWeight: '700',
                                boxShadow: step === s.id ? '0 0 20px var(--color-primary-glow)' : 'none',
                                transition: 'all 0.3s ease'
                            }}>
                                {step > s.id ? <Check size={20} /> : s.id}
                            </div>
                            <span style={{
                                fontWeight: step === s.id ? '700' : '500',
                                color: step >= s.id ? 'var(--color-text-heading)' : 'var(--color-text-muted)',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {s.title}
                            </span>
                            {s.id < 3 && <div style={{ width: '40px', height: '1px', background: 'var(--color-border)' }}></div>}
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="checkout-grid-desktop">
                    {/* Main Content Area */}
                    <div style={{
                        background: 'var(--color-card)',
                        padding: '3rem',
                        borderRadius: '32px',
                        border: '1px solid var(--color-border)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
                    }}>
                        {step === 1 && (
                            <div className="step-shipping">
                                <h2 style={{ marginBottom: '2rem' }}>Shipping Information</h2>
                                <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ gridColumn: 'span 1' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>First Name</label>
                                        <input type="text" placeholder="John" className="checkout-input" />
                                    </div>
                                    <div style={{ gridColumn: 'span 1' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Last Name</label>
                                        <input type="text" placeholder="Doe" className="checkout-input" />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Address</label>
                                        <input type="text" placeholder="123 Nordic Way" className="checkout-input" />
                                    </div>
                                    <div style={{ gridColumn: 'span 1' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>City</label>
                                        <input type="text" placeholder="Stockholm" className="checkout-input" />
                                    </div>
                                    <div style={{ gridColumn: 'span 1' }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Zip Code</label>
                                        <input type="text" placeholder="102 34" className="checkout-input" />
                                    </div>
                                </form>
                                <button onClick={handleNext} className="btn btn-primary" style={{ width: '100%', marginTop: '3rem', borderRadius: '50px', padding: '1rem' }}>
                                    Continue to Payment
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="step-payment">
                                <h2 style={{ marginBottom: '2rem' }}>Payment Method</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{
                                        padding: '1.5rem',
                                        border: '2px solid var(--color-primary)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        background: 'rgba(0, 171, 228, 0.05)'
                                    }}>
                                        <div style={{ color: 'var(--color-primary)' }}><CreditCard /></div>
                                        <div style={{ flex: 1 }}>
                                            <span style={{ fontWeight: '700' }}>Credit / Debit Card</span>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Secure payment via Stripe</p>
                                        </div>
                                        <Check size={20} color="var(--color-primary)" />
                                    </div>
                                    <div style={{
                                        padding: '1.5rem',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        opacity: 0.6
                                    }}>
                                        <div style={{ color: 'var(--color-text-muted)' }}><ShoppingBag /></div>
                                        <div style={{ flex: 1 }}>
                                            <span style={{ fontWeight: '500' }}>PayPal</span>
                                        </div>
                                    </div>
                                </div>

                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Card Details</label>
                                <input type="text" placeholder="0000 0000 0000 0000" className="checkout-input" style={{ marginBottom: '1rem' }} />

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <input type="text" placeholder="MM/YY" className="checkout-input" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <input type="text" placeholder="CVC" className="checkout-input" />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                                    <button onClick={handleBack} className="btn btn-outline" style={{ flex: 1, borderRadius: '50px' }}>Back</button>
                                    <button onClick={handleNext} className="btn btn-primary" style={{ flex: 2, borderRadius: '50px' }}>Review Order</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="step-review">
                                <h2 style={{ marginBottom: '2rem' }}>Review Your Order</h2>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Please double check your details before confirming your Scandinavian sanctuary is on its way.</p>

                                <div style={{ background: 'var(--color-bg-soft)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <span style={{ fontWeight: '600' }}>Shipping To:</span>
                                        <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '0.8rem', cursor: 'pointer' }}>Edit</button>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>John Doe</p>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>123 Nordic Way, Stockholm</p>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                                    <button onClick={handleBack} className="btn btn-outline" style={{ flex: 1, borderRadius: '50px' }}>Back</button>
                                    <button onClick={handleCompleteOrder} className="btn btn-primary text-glow" style={{ flex: 2, borderRadius: '50px' }}>
                                        Place Order - ${grandTotal.toFixed(2)}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Compact Summary Sidebar */}
                    <div style={{
                        background: 'var(--color-card)',
                        padding: '2.5rem',
                        borderRadius: '32px',
                        border: '1px solid var(--color-border)',
                        height: 'fit-content'
                    }}>
                        <h4 style={{ marginBottom: '1.5rem', fontWeight: '700' }}>Order Summary</h4>
                        <div style={{ maxHeight: '200px', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1.5rem' }}>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600' }}>{item.name}</p>
                                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.quantity} x ${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--color-text-muted)' }}>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--color-text-muted)' }}>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '800', marginTop: '0.5rem' }}>
                                <span>Total</span>
                                <span>${grandTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .checkout-input {
                    width: 100%;
                    padding: 1rem 1.5rem;
                    border: 1px solid var(--color-border);
                    border-radius: 12px;
                    background: var(--color-bg-soft);
                    color: var(--color-text-main);
                    outline: none;
                    transition: all 0.3s ease;
                }
                .checkout-input:focus {
                    border-color: var(--color-primary);
                    background: var(--color-bg);
                    box-shadow: 0 0 0 4px var(--color-primary-glow);
                }
                @media (min-width: 1025px) {
                    .checkout-grid-desktop {
                        grid-template-columns: 1fr 380px !important;
                    }
                }
            `}} />
        </div>
    );
};

export default Checkout;
