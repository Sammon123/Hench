import React, { useState } from 'react'
import { auth } from '../../firebase';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((e) => alert(e.message))
    }
    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((e) => {
                alert(e.message)
            })
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login-logo" />
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email} type="email" />
                    <h5>Password</h5>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password} type="password" />
                    <button
                        onClick={login}
                        type="submit" className="login-signInButton">Sign In</button>
                </form>

                <p>By signing in you agree to Amazons Conditions of Use & Sale. Please see out Privacy Notice, our Cookie Notice and out Interest-Based Ads Notice</p>
                <button
                    onClick={signUp} className="login-registerButton">Create your Amazon Account</button>
            </div>
        </div >

    )
}

export default Login
