import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://agile-wildwood-87849.herokuapp.com/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login');
                }
            })
            .then(result => {
                console.log(result);
                setOrders(result);
            })
    }, [])
    return (
        <div>
            <h2>Orders Available: {orders.length}</h2>
            <ul>
                {
                    orders.map(order => <li key={order._id}>{order.name}::{order.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Orders;