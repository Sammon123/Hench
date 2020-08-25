import React, { useState, useEffect } from 'react'
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

const Checkout = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
            .fetch("/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ items: [{ id: "xl-tshirt" }] })
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClientSecret(data.clientSecret);
            });
    }, []);
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
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
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: ev.target.name.value
            }
        }
    });
    return (
        <div>
            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        </div>
    )
}

export default Checkout
