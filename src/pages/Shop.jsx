import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Filter, ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import NotificationToast from '../components/NotificationToast';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [toast, setToast] = useState(null);
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const products = [
        { id: 1, name: 'Sleek White Sofa', price: 1299, category: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', rating: 4.8, badge: 'New' },
        { id: 2, name: 'Oak Dining Table', price: 899, category: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&q=80&w=800', rating: 4.9, badge: 'Popular' },
        { id: 3, name: 'Velvet Armchair', price: 450, category: 'Living Room', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800', rating: 4.7, badge: 'Sale' },
        { id: 4, name: 'Minimalist Bed Frame', price: 750, category: 'Bedroom', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800', rating: 4.8 },
        { id: 5, name: 'Modern Coffee Table', price: 299, category: 'Living Room', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', rating: 4.6 },
        { id: 6, name: 'Ceramic Vase Set', price: 120, category: 'Decor', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800', rating: 4.9 },
    ];

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        setToast({ message: `${product.name} added to cart!`, type: 'success' });
    };

    const handleWishlist = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
        const isAdded = !isInWishlist(product.id);
        setToast({
            message: isAdded ? `${product.name} saved to wishlist!` : `${product.name} removed from wishlist`,
            type: isAdded ? 'success' : 'info'
        });
    };

    const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Decor'];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="page-shop">
            <SEO title="Shop Collections" description="Browse our curated collection of modern minimalist furniture." />

            {toast && (
                <NotificationToast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <section className="shop-header" style={{
                padding: '8rem 0 4rem',
                backgroundColor: 'var(--color-bg-soft)',
                textAlign: 'center',
                borderBottom: '1px solid var(--color-border)'
            }}>
                <div className="container">
                    <h1 className="text-glow" style={{ fontSize: 'var(--font-size-h1)', marginBottom: '1rem' }}>Our Collection</h1>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Functional beauty for every room. Each piece is selected for its craftsmanship and timeless design.
                    </p>
                </div>
            </section>

            <section className="shop-main" style={{ padding: '6rem 0' }}>
                <div className="container">
                    {/* Filters */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '4rem',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                                style={{ padding: '0.6rem 1.8rem', borderRadius: '50px' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '3rem'
                    }}>
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card" style={{
                                backgroundColor: 'var(--color-card)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: '1px solid var(--color-border)',
                                position: 'relative'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px)';
                                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.12)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ height: '380px', overflow: 'hidden', position: 'relative' }}>
                                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                                        {/* Badges */}
                                        {product.badge && (
                                            <span style={{
                                                position: 'absolute',
                                                top: '1.5rem',
                                                left: '1.5rem',
                                                padding: '0.4rem 1rem',
                                                background: product.badge === 'Sale' ? '#EF4444' : 'var(--color-primary)',
                                                color: 'white',
                                                borderRadius: '50px',
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                textTransform: 'uppercase'
                                            }}>{product.badge}</span>
                                        )}

                                        {/* Quick View Button Hover overlay */}
                                        <div className="product-overlay" style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'rgba(0,0,0,0.2)',
                                            backdropFilter: 'blur(4px)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease'
                                        }}
                                            onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                                            onMouseOut={(e) => e.currentTarget.style.opacity = 0}
                                        >
                                            <button className="btn btn-primary" style={{ borderRadius: '50px', gap: '0.5rem' }}>
                                                <Eye size={18} /> Quick View
                                            </button>
                                        </div>

                                        {/* Wishlist Button */}
                                        <button
                                            onClick={(e) => handleWishlist(e, product)}
                                            style={{
                                                position: 'absolute',
                                                top: '1.5rem',
                                                right: '1.5rem',
                                                width: '44px',
                                                height: '44px',
                                                backgroundColor: 'var(--color-card)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                                cursor: 'pointer',
                                                border: 'none',
                                                zIndex: 10
                                            }}
                                        >
                                            <Heart
                                                size={20}
                                                fill={isInWishlist(product.id) ? '#EF4444' : 'none'}
                                                color={isInWishlist(product.id) ? '#EF4444' : 'var(--color-primary)'}
                                                style={{ transition: 'all 0.3s ease' }}
                                            />
                                        </button>
                                    </div>

                                    <div style={{ padding: '2rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                                            <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase' }}>{product.category}</span>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: '600' }}>
                                                <Star size={16} fill="#fbbf24" color="#fbbf24" /> {product.rating}
                                            </div>
                                        </div>
                                        <h3 style={{ margin: '0 0 1.5rem', fontSize: '1.4rem', color: 'var(--color-text-heading)' }}>{product.name}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-text-heading)' }}>${product.price}</span>
                                            <button
                                                onClick={(e) => handleAddToCart(e, product)}
                                                className="btn btn-primary text-glow"
                                                style={{ padding: '0.8rem 1.8rem', borderRadius: '12px' }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;
