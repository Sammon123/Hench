import React from 'react'
import './Login.css'

const Login = () => {
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
                <button className="form-btn btn-warning">Login</button>
            </form>
        </div >

    )
}

export default Login
