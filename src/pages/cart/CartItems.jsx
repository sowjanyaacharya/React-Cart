import React, { useContext } from 'react'
import "./cart.css"
import { ShopContext } from '../../context/shop-context';
export const CartItems = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, removeFromCart, addToCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItems'>
            <img src={productImage} />
            <div className='desc'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    <b>${price}</b>
                </p>
                <div className='countHandler'>
                    { /**here we are having the + and - quantity  */}
                    <button onClick={() => addToCart(id)}>+</button>
                    {/**here also same we are usng the cartItems which contains the updated value from useContext and also on typing we are updating */}
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => removeFromCart(id)}>-</button>

                </div>

            </div>

        </div>
    )
}

