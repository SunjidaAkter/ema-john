import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);


    const handleToAddCart = (selectedCart) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedCart.id);
        if (!exists) {
            selectedCart.quantity = 1;
            newCart = [...cart, selectedCart];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedCart.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedCart.id);
    }
    const handleClearCart = () => {
        setCart([]);
    }
    return (
        <div className='shop-container'>

            <div className='products-container container'>

                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        handleToAddCart={handleToAddCart}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                >
                    <div className='btns'>
                        <button onClick={handleClearCart} className='clear-btn'>
                            <p>Clear Cart</p>
                            <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                        <Link style={{ textDecoration: 'none' }} to="/orderReview">
                            <button className='review-btn'>
                                <p>Review Ordder</p>
                                <FontAwesomeIcon className='btn-icon' icon={faArrowRight}></FontAwesomeIcon>
                            </button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>

    );
};

export default Shop;