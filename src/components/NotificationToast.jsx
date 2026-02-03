import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const NotificationToast = ({ message, type = 'success', duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // Wait for fade out animation
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const icons = {
        success: <CheckCircle size={20} />,
        error: <XCircle size={20} />,
        info: <Info size={20} />
    };

    const colors = {
        success: '#10B981',
        error: '#EF4444',
        info: '#00ABE4'
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: `translateX(-50%) ${isVisible ? 'translateY(0)' : 'translateY(20px)'}`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 10000,
            background: 'var(--color-card)',
            border: `1px solid var(--color-border)`,
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            minWidth: '300px'
        }}>
            <div style={{ color: colors[type] }}>
                {icons[type]}
            </div>
            <p style={{
                margin: 0,
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--color-text-main)'
            }}>
                {message}
            </p>
            <button
                onClick={() => setIsVisible(false)}
                style={{
                    marginLeft: 'auto',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-muted)',
                    cursor: 'pointer',
                    display: 'flex'
                }}
            >
                <X size={18} />
            </button>
        </div>
    );
};

export default NotificationToast;
