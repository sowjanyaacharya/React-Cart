import React, { useState, createContext } from 'react'
import { PRODUCTS } from '../products';
//contexts are used to maintain the state use in both the jsx shop and cart we are like storing here
export const ShopContext = createContext(null);

//here we are setting all the cart items to zero
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    //Getting the Subtotal count of item * price
    const getTotalAmount = () => {
        let totalAmount = 0;
        //looping on object
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;

    }
    const addToCart = (ItemId) => {
        //here we used spread operator to update with the prev one
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }))
    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))
    }
    //Here we are updating the itemcount through entering the input text..
    const updateCartItemCount = (newItemCount, ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: newItemCount }))
    }
    //here we are passing the context value whichever we want to access in other 2 comp..
    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount }
    console.log(cartItems);
    return (

        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
