import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri);
            })
    }
    console.log('came from', location.state?.from);
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div>-----------or------------</div>
                <button
                    onClick={handleGoogleLogIn}
                    className="btn-regular"
                >Google Sign In</button>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;