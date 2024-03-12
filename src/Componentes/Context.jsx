import { createContext, useState, useEffect } from 'react';
import {data} from './data.js';

export const Context = createContext();


export function ContextProvider(props) {
    function getDefaultCart() {
        let cart = {};
        for (let i = 0; i <= data.length; i++) {
            cart[data[i].id] = 0
        }
        return cart;
    }
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
    });

    function getToatl(){
        let total = 0;
        for( const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = data.find((itm)=>itm.id === Number(item));
                total += cartItems[item]* itemInfo.price;
            }
        }
        return total;
    }
    function getQuantity(){
        let total = 0;
        for( const item in cartItems){
            if(cartItems[item]>0){
                total += cartItems[item]
            }
        }
        return total;
    }


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(itemId) {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1 // Increment item count or set to 1 if undefined
        }));
    }

    function removeFromCart(itemId) {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 0) {
                updatedCart[itemId] -= 1; // Decrement item count if greater than 0
            }
            return updatedCart;
        });
    }


   


    let value = { cartItems, addToCart, removeFromCart,data,getToatl,getQuantity};

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}
