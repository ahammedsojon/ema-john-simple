import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        // if (!product.quantity) {
        //     product.quantity = 1;
        // }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <div>
                <h3>Orders Summary</h3>
                <h3>Item Orderd: {cart.length}</h3>
            </div>
            <div>
                <h4>Total : ${total.toFixed(2)}</h4>
                <h4>Shipping: ${shipping}</h4>
                <h4>Tax: ${tax.toFixed(2)}</h4>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                {props.children}
            </div>

        </div>
    );
};

export default Cart;