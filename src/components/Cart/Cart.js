import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    // let total = 0;
    // for (const product of cart) {
    //     total += product.price;
    // }
    const shipping = 20;
    const tax = total * .2;
    let grandTotal = 0;
    if (total) {
        grandTotal = total + shipping + tax;
    }
    return (
        <div className="cart">
            <div>
                <h3>Orders Summary</h3>
                <h3>Item Orderd: {cart.length}</h3>
            </div>
            <div>
                <h3>Total : {total.toFixed(2)}</h3>
                <h3>Shipping: {shipping}</h3>
                <h3>Tax: {tax.toFixed(2)}</h3>
                <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
            </div>

        </div>
    );
};

export default Cart;