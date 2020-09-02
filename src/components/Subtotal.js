import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from '../reducer';

const Subtotal = () => {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div>
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
                    prefix={'$'} />
            </div>
        </div>
    )
}

export default Subtotal
