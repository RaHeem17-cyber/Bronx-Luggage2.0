import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";
export const  ShopContext = createContext(null);
  const getDefaultCart  =()=> {
        let cart = {};
        for (let index = 0; index < all_product.length+1 ; index++) {
            cart[index] = 0; // Initialize each product's quantity to 0
        }
        return cart;
    }

// This file creates a context for the shop, providing access to the product data throughout the application.
// The ShopContext will be used to share the product data across components without prop drilling.
const ShopContextProvider = (props) =>{
        const [cartItems,setCartItems] = useState(getDefaultCart());
   
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1, // Increment the quantity of the item in the cart
        }));
    };
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1, // Increment the quantity of the item in the cart
        }));
        console.log(cartItems);
        
    };

    const getTotalCartItems =() =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    
     const contextValue ={getTotalCartItems,all_product,cartItems,addToCart,removeFromCart};
    // The contextValue object contains the all_product array and cartItems state,
    // which holds the product data and the cart items respectively.

  
    // The contextValue object contains the all_product array, which holds the product data.
    // This allows any component that consumes this context to access the product data.
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
// This file creates a context for the shop, providing access to the product data throughout the application.