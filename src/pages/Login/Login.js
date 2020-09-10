import React, { useState } from 'react'
import { auth } from '../../firebase';
import './Login.css'
import { useHistory } from 'react-router';

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
        <div className="container" id="container">
            <form className="signup">
                <h1>Login <i className="fas fa-book-open"></i></h1>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email} type="email" name="email" />
                    <label htmlFor="">Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password} type="password" name="password" />
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
