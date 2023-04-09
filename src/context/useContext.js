import React, { useContext, useState } from "react";
import { PRODUCTS } from "../Products";

const AppContext = React.createContext();

 // creating object with list of products length and seting it same as  products.id value
function getDefaultCard() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCard);

  function getTotalAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const cartInfo = PRODUCTS.find(
          (product) => product.id === parseInt(item)
        );
        totalAmount += cartItems[item] * cartInfo.price;
      }
    }
    return totalAmount;
  }

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }
  function updateCartItem(newAmount, itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }
  const contectValue = {
    removeFromCart,
    addToCart,
    cartItems,
    updateCartItem,
    getTotalAmount,
  };
  return (
    <AppContext.Provider value={contectValue}>{children}</AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
