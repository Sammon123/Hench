import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import { auth } from '../../firebase';
import './Header.css';

const Header = () => {
    const [{ cart, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <span className="header-logo">Hench Printworks</span>
            </Link>
            <div className="header-nav">
                <Link to="/"
                    className="header-link">
                    Home
      </Link>
                <Link to="/orders"
                    className="header-link" >
                    My Orders
      </Link>
                <Link to="/contact"
                    className="header-link" >
                    Contact
      </Link>
                <Link to={!user && "/login"}
                    className="header-link"
                    onClick={login}>
                    {user ? ' Sign Out ' : ' Sign In'}
                    {!user ? '' : user.email}
                </Link>
                <div className="header-cart">
                    <Link to="/checkout"
                        className="header-link" >
                        <ShoppingBasketIcon />
                        <span>{cart?.length}</span>
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Header
