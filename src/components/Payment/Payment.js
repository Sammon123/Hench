import React, { useState, useEffect } from 'react'
import './Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { Link, useHistory, } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';
import axios from '../../axios';

const Payment = () => {
    const [{ user, cart }, dispatch] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements()

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        //     .then(res => {
        //     return res.json();
        // })
        getClientSecret();
    }, [cart]);
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            receipt_email: email,
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            history.replace('/orders');
        }
    };

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout {<Link to="/checkout">{cart?.length} items</Link>}
                </h1>
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
                    <div className="payment-title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment-items">
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price} />
                        ))}
                    </div>

                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form id="payment-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                            />
                            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                            <div className="payment-priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order Total: {value}
                                            </h3>
                                        </>
                                    )}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'} />
                            </div>
                            <button
                                disabled={processing || disabled || succeeded}
                                id="submit"
                            >
                                <span id="button-text">
                                    {processing ? (
                                        <div className="spinner" id="spinner"></div>
                                    ) : (
                                            "Pay"
                                        )}
                                </span>
                            </button>
                            {/* Show any error that happens when processing the payment */}
                            {error && (
                                <div className="card-error" role="alert">
                                    {error}
                                </div>
                            )}
                            {/* Show a success message upon completion */}
                            <p className={succeeded ? "result-message" : "result-message hidden"}>
                                Payment succeeded, see the result in your
        <a
                                    href={`https://dashboard.stripe.com/test/payments`}
                                >
                                    {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
