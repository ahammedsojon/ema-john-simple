import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const uniq = cart.reduce((previous, product) => {
        if (previous.indexOf(product) === -1) {
            product.quantity = product.quantity || 1;
            previous.push(product)
        } else {
            product.quantity += 1;
        }
        return previous;
    }, []);
    const totalReducer = (previous, product) => previous + product.price * product.quantity;
    const total = uniq.reduce(totalReducer, 0);
    // let total = 0;
    // for (const product of cart) {
    //     total += product.price;
    // }
    const shipping = total ? 20 : 0;
    const tax = total * .2;
    let grandTotal = 0;
    if (total) {
        grandTotal = total + shipping + tax;
    }
    return (
        <div className="cart">
            <div>
                <h3>Orders Summary</h3>
                <h3>Item Orderd: {uniq.length}</h3>
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