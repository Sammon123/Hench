import React from 'react'
import './CheckoutProduct.css'


const CheckoutProduct = ({ id, title, image, price }) => {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} alt="" />
            <div className="checkoutProduct-info">
                <p>{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
