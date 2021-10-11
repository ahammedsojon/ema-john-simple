import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div>-----------or-----------</div>
                <button className="btn-regular">Google Sign In</button>
                <p>Alreay have an account? <Link to="/login">Log-in</Link></p>
            </div>
        </div>
    );
};

export default Register;