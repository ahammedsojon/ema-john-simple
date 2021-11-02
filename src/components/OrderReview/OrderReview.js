import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();
    const handleRemove = key => {
        const stroedCart = cart.filter(product => product.key !== key);
        setCart(stroedCart);
        deleteFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {cart.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}></ReviewItem>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <NavLink
                        to="/shipping"><button className="btn-regular">Proceed to shipping</button></NavLink>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;