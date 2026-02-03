import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <Breadcrumbs />
            <main>{children}</main>
            <Footer />
            <ThemeToggle />
        </div>
    );
};

export default Layout;
