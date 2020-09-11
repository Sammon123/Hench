import React from 'react'
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MM Do YYYY, h:mm')}</p>
            <p className="order-id">
                <small>{order.id}</small>
            </p>
            {order.data.cart?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price} />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order-total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
