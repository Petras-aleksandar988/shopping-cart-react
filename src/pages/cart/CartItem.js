import React from "react";
import { useGlobalContext } from "../../context/useContext";

export default function CartItem({ data }) {
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useGlobalContext();

  const { id, productName, price, productImage } = data;
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input type="number"  value={cartItems[id]} onChange={(e)=>updateCartItem(Number(e.target.value),id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
