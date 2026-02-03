import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 9999,
                boxShadow: '0 8px 30px var(--color-primary-glow)',
                border: '4px solid var(--color-bg)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px var(--color-primary-glow)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px var(--color-primary-glow)';
            }}
        >
            <div style={{ position: 'relative', width: '24px', height: '24px' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'all 0.5s ease',
                    opacity: theme === 'light' ? 0 : 1,
                    transform: theme === 'light' ? 'rotate(-90deg) scale(0)' : 'rotate(0) scale(1)'
                }}>
                    <Sun size={24} fill="currentColor" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transition: 'all 0.5s ease',
                    opacity: theme === 'light' ? 1 : 0,
                    transform: theme === 'light' ? 'rotate(0) scale(1)' : 'rotate(90deg) scale(0)'
                }}>
                    <Moon size={24} fill="currentColor" />
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
