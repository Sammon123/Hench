import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, image, price }) => {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
