import React, { useState, useEffect } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import './Checkout.css'
import { useStateValue } from "../../components/StateProvider";
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal';
export default function CheckoutForm() {
    const [{ cart }] = useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    ;
    // return (
    //     <>
    //         <div className="checkout">
    //             {cart?.length === 0 ? (
    //                 <div>
    //                     <h2>Your Shopping Cart is Empty</h2>
    //                     <p>You have no items in your cart. To buy one or more items, click "Add to Cart" next to the item</p>
    //                 </div>
    //             ) : (<div>
    //                 <h2 className="checkout-title">Your Shopping Cart</h2>
    //                 {cart.map((item) => (
    //                     <CheckoutProduct key={item.id}
    //                         id={item.id}
    //                         title={item.title}
    //                         image={item.image}
    //                         price={item.price} />
    //                 ))}
    //             </div>
    //                 )}
    //         </div>
    //         
    //     </>
    // );
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg" alt="" />
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your cart. To buy one or more items, click "Add to Basket" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {cart.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />

                            ))}
                        </div>
                    )}
            </div>
            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}