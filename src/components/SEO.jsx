import { useEffect } from 'react';

const SEO = ({ title, description, image, url, type = 'website' }) => {
    const siteTitle = 'Nüva';
    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Premium Scandinavian Furniture`;
    const defaultDescription = 'Experience minimalist Scandinavian-inspired furniture and decor. Nüva crafts premium spaces for home and living.';
    const metaDescription = description || defaultDescription;
    const defaultImage = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200';
    const ogImage = image || defaultImage;
    const siteUrl = url || window.location.href;

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        const updateMetaTag = (attr, value, content) => {
            let element = document.querySelector(`meta[${attr}="${value}"]`);
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attr, value);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        // Standard Meta Tags
        updateMetaTag('name', 'description', metaDescription);

        // OpenGraph Meta Tags
        updateMetaTag('property', 'og:title', fullTitle);
        updateMetaTag('property', 'og:description', metaDescription);
        updateMetaTag('property', 'og:image', ogImage);
        updateMetaTag('property', 'og:url', siteUrl);
        updateMetaTag('property', 'og:type', type);
        updateMetaTag('property', 'og:site_name', siteTitle);

        // Twitter Meta Tags
        updateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateMetaTag('name', 'twitter:title', fullTitle);
        updateMetaTag('name', 'twitter:description', metaDescription);
        updateMetaTag('name', 'twitter:image', ogImage);

    }, [fullTitle, metaDescription, ogImage, siteUrl, type]);

    return null;
};

export default SEO;
