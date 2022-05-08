import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <h5>Price: ${price}</h5>
                <div className='rating-seller'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Ratings: {ratings} starts</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;