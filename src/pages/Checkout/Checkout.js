import React from "react";
import './Checkout.css'
import { useStateValue } from "../../components/StateProvider";
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
export default function CheckoutForm() {
    const [{ cart }] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout-left">
                <img className="checkout-ad" src="https://tse4.mm.bing.net/th?id=OIP.zXDvyoJC3aHo331PsesTDgHaCV&pid=Api&P=0&w=590&h=186" alt="" />
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your cart. To buy one or more items, click "Add to Basket" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout-title">Your Shopping Basket</h2>
                            {cart.map(item => (
                                <CheckoutProduct
                                    key={item.id}
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
                <div className="checkout-right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}