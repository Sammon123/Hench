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
    return (
        <div>
            <h1>Checkout Page</h1>
        </div>
    )
}

export default Checkout
