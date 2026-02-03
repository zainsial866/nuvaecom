import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';

const Cart = () => {
    const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

    // Mock calculations
    const shipping = cartTotal > 500 ? 0 : 50;
    const tax = cartTotal * 0.08;
    const grandTotal = cartTotal + shipping + tax;

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
                <SEO title="Your Cart | Nüva" />
                <div style={{ marginBottom: '2rem', opacity: 0.5 }}>
                    <ShoppingBag size={80} strokeWidth={1} style={{ margin: '0 auto' }} />
                </div>
                <h1 style={{ marginBottom: '1.5rem' }}>Your cart is empty</h1>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                    Looks like you haven't added any Scandinavian pieces yet.
                </p>
                <Link to="/shop" className="btn btn-primary" style={{ borderRadius: '50px', padding: '1rem 3rem' }}>
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="page-cart bg-mesh" style={{ padding: '8rem 0', minHeight: '100vh' }}>
            <SEO title="Your Cart | Nüva" />
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>
                        <ArrowLeft size={18} /> Continue Shopping
                    </Link>
                    <h1 className="text-glow" style={{ fontSize: 'var(--font-size-h1)', marginTop: '1.5rem' }}>Shopping Bag</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="cart-grid-desktop">
                    {/* Item List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {cart.map((item) => (
                            <div key={item.id} style={{
                                display: 'flex',
                                gap: '2rem',
                                padding: '2rem',
                                background: 'var(--color-card)',
                                borderRadius: '24px',
                                border: '1px solid var(--color-border)',
                                alignItems: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <img src={item.image} alt={item.name} style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover' }} />

                                <div style={{ flex: 1, minWidth: '200px' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase' }}>{item.category}</span>
                                    <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.25rem' }}>{item.name}</h3>
                                    <p style={{ margin: '0.5rem 0 0', fontWeight: '700', fontSize: '1.1rem' }}>${item.price}</p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--color-bg-soft)', padding: '0.5rem 1rem', borderRadius: '12px' }}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', color: 'var(--color-text-main)' }}
                                    >
                                        <Minus size={18} />
                                    </button>
                                    <span style={{ fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', color: 'var(--color-text-main)' }}
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>

                                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                                    <p style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: '800' }}>${(item.price * item.quantity).toFixed(2)}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '0.5rem', opacity: 0.6 }}
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div style={{
                        background: 'var(--color-card)',
                        padding: '3rem',
                        borderRadius: '32px',
                        border: '1px solid var(--color-border)',
                        height: 'fit-content',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
                    }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Order Summary</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                                <span>Estimated Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                                <span>Estimated Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '1.5rem' }}>
                                    <span>Total</span>
                                    <span className="text-glow">${grandTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <Link to="/checkout" className="btn btn-primary text-glow" style={{ width: '100%', borderRadius: '50px', padding: '1.2rem', fontSize: '1.1rem' }}>
                            Proceed to Checkout
                        </Link>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                shipping & taxes calculated at checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1025px) {
                    .cart-grid-desktop {
                        grid-template-columns: 1fr 400px !important;
                    }
                }
            `}} />
        </div>
    );
};

export default Cart;
