import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="shipping-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input type="email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="address" defaultValue="" {...register("address")} />
                <input type="number" placeholder="phone" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;