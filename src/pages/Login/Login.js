import React, { useState } from 'react'
import { auth } from '../../../firebase';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
    }
    const signUp = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container" id="container">
            <form className="signup">
                <h1>Login <i className="fas fa-book-open"></i></h1>
                <div className="form-control">
                    <label for="email">Email</label>
                    <input type="email" name="email" />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>
                <button
                    onClick={login}
                    type="submit" className="form-btn btn-warning">Login</button>
                <button
                    onClick={signUp}
                    type="submit" className="form-btn btn-warning">SignUp</button>
            </form>
        </div >

    )
}

export default Login
