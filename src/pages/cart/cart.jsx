import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItems } from './CartItems'
import { useNavigate } from 'react-router-dom'
import "./cart.css"
export const Cart = () => {
    const { cartItems, getTotalAmount } = useContext(ShopContext);
    const totalAmounts = getTotalAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1>Your cart Items</h1>
            </div>
            <div className='cartItem'>
                {/**Here we are mapping the product using the context cartItems to display based on their id is not zero */}
                {PRODUCTS.map((product) => {
                    {/**It vanishes vhen the cartItemscount gets zero */ }
                    if (cartItems[product.id] !== 0) {
                        return <CartItems data={product} />;
                    }
                })}
            </div>
            {totalAmounts > 0 ? (
                <div className='checkout'>
                    <p>SubTotal: ${totalAmounts}</p>
                    <button onClick={() => navigate('/')} >Continue Shopping</button>
                    <button>CheckOut</button>
                </div>) :
                (<h1>Your Cart is Empty</h1>)}
        </div>
    )
}

