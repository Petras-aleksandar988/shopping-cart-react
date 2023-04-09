import React from "react";
import { useGlobalContext } from "../../context/useContext";

export default function Product({ data }) {
    const { cartItems,addToCart } = useGlobalContext()
  

    const { id, productName, price, productImage } = data;
    
    const cartItemAmount = cartItems[id]
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
      </button>
    </div>
  );
}
