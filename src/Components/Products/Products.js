import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css'

const Products = ({ product, handleToAddCart }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='products'>
            <div className='product-text'>
                <img src={img} alt="" />

                <h5>{name}</h5>
                <h6>Price : ${price}</h6>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button onClick={() => handleToAddCart(product)} className='btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;