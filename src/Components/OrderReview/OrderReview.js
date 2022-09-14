import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../utilities/fakedb';
import './OrderReview.css'

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(prod => prod.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='review-item-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    key={cart.id}
                >
                    <div className='btns'>
                        <button onClick={handleClearCart} className='clear-btn'>
                            <p>Clear Cart</p>
                            <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                        <Link style={{ textDecoration: 'none' }} to="/manageInventory">
                            <button className='proceed-btn'>
                                <p>Proceed Checkout</p>
                                <FontAwesomeIcon className='btn-icon' icon={faCreditCard}></FontAwesomeIcon>
                            </button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;