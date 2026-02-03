import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <div className="container" style={{ padding: '8rem 0' }}>
            <h1>Product {id}</h1>
            <p>Product detail page coming soon...</p>
        </div>
    );
};

export default ProductDetail;
