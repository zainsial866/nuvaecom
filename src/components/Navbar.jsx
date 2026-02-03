import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag, Trash, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const { cart, cartCount, cartTotal, removeFromCart } = useCart();
    const { wishlist } = useWishlist();

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Shop', path: '/shop' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <nav
            className={`navbar ${loaded ? 'animate-slide-down' : ''}`}
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                background: scrolled || isOpen ? 'var(--color-navbar)' : 'transparent',
                backdropFilter: scrolled || isOpen ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled || isOpen ? 'blur(20px)' : 'none',
                borderBottom: scrolled || isOpen ? '1px solid var(--color-border)' : 'none',
                boxShadow: scrolled || isOpen ? '0 4px 10px rgba(0, 0, 0, 0.05)' : 'none',
                height: scrolled ? '70px' : '90px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                paddingTop: 'var(--safe-area-top)',
                width: '100%',
                left: 0
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>

                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        fontSize: scrolled ? '1.4rem' : '1.6rem',
                        fontWeight: '900',
                        color: 'var(--color-primary)',
                        letterSpacing: '-0.02em',
                        transition: 'font-size 0.3s ease',
                        opacity: loaded ? 1 : 0,
                        textTransform: 'uppercase',
                        zIndex: 1100,
                        textDecoration: 'none'
                    }}
                >
                    Nüva
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {menuItems.map((item, index) => (
                        <li key={item.label} className={loaded ? `animate-fade-in stagger-${index + 1}` : ''} style={{ opacity: loaded ? 1 : 0 }}>
                            <Link
                                to={item.path}
                                style={{
                                    color: 'var(--color-text-main)',
                                    fontWeight: '500',
                                    fontSize: '0.95rem',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--color-text-main)'}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop and Mobile Icons */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', zIndex: 1100 }}>
                    {/* Wishlist Icon */}
                    <Link to="/wishlist" className="hidden-mobile" style={{ color: 'var(--color-text-main)', position: 'relative' }}>
                        <Heart size={22} fill={wishlist.length > 0 ? 'var(--color-primary)' : 'none'} style={{ transition: 'all 0.3s ease' }} />
                        {wishlist.length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: 'var(--color-primary)',
                                color: 'white',
                                fontSize: '10px',
                                fontWeight: '700',
                                minWidth: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>{wishlist.length}</span>
                        )}
                    </Link>

                    {/* Cart Icon & Dropdown Container */}
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsOpenCart(!isOpenCart)}
                            style={{ background: 'none', border: 'none', color: 'var(--color-text-main)', position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                        >
                            <ShoppingBag size={24} style={{ color: cartCount > 0 ? 'var(--color-primary)' : 'inherit' }} />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    minWidth: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 10px rgba(0, 171, 228, 0.3)'
                                }}>{cartCount}</span>
                            )}
                        </button>

                        {/* Mini-Cart Dropdown */}
                        {isOpenCart && (
                            <div style={{
                                position: 'absolute',
                                top: 'calc(100% + 20px)',
                                right: 0,
                                width: '350px',
                                background: 'var(--color-navbar)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '16px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                padding: '1.5rem',
                                zIndex: 1200,
                                animation: 'fadeUp 0.3s ease'
                            }}>
                                <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>Your Cart</h4>
                                {cart.length === 0 ? (
                                    <p style={{ textAlign: 'center', padding: '1rem', color: 'var(--color-text-muted)' }}>Cart is empty</p>
                                ) : (
                                    <>
                                        <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1.5rem' }}>
                                            {cart.map(item => (
                                                <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                                                    <div style={{ flex: 1 }}>
                                                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>{item.name}</h5>
                                                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.quantity} x ${item.price}</p>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#EF4444', opacity: 0.6, cursor: 'pointer' }}>
                                                        <Trash size={16} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: '700' }}>
                                                <span>Total</span>
                                                <span>${cartTotal.toFixed(2)}</span>
                                            </div>
                                            <Link to="/cart" onClick={() => setIsOpenCart(false)} className="btn btn-primary" style={{ width: '100%', borderRadius: '12px' }}>Checkout Now</Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    <button
                        className="visible-mobile"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', padding: '0.5rem' }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'var(--color-bg)',
                zIndex: 1050,
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: '120px 2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}>
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            color: 'var(--color-text-heading)',
                            textDecoration: 'none',
                            textTransform: 'uppercase'
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                    <Link
                        to="/shop"
                        onClick={() => setIsOpen(false)}
                        className="btn btn-shop-now"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '12px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: '700',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Shop Now
                    </Link>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .btn-shop-now:hover {
                    background-color: #009BD1 !important;
                    transform: scale(1.05);
                    box-shadow: 0 8px 20px rgba(0, 171, 228, 0.4) !important;
                }
                .btn-shop-now:active {
                    transform: scale(0.98);
                }
            ` }} />
        </nav>
    );
};

export default Navbar;
