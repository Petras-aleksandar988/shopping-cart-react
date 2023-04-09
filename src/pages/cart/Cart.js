import React from "react";
import { PRODUCTS } from "../../Products";
import { useGlobalContext } from "../../context/useContext";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
export function Cart() {
  const { cartItems, getTotalAmount } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
           if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {getTotalAmount() > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${getTotalAmount()}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="checkout empty">
          <h1>Your cart is empty</h1>
          <button onClick={() => navigate("/")}>Back to Shop</button>
        </div>
      )}
    </div>
  );
}
