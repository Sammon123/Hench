import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../reducer';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router';
import './Subtotal.css'

const Subtotal = () => {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items): <strong>
                                {value}
                            </strong>
                        </p>
                    </>
                )}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                decimal={2}
                prefix={'$'} />

            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
