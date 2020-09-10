import React from 'react'
import './Payment.css';
import { useStateValue } from '../StateProvider';

const Payment = () => {
    const [{ user, basket }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment-container">
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Dover, NH</p>
                    </div>
                </div>
                <div className="payment-section">

                </div>
                <div className="payment-section">

                </div>
            </div>
        </div>
    )
}

export default Payment
