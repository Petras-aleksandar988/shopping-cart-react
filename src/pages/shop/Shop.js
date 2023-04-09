import React from 'react'
import { PRODUCTS } from "../../Products"
import Product from './Product'
import "./shop.css"
export  function Shop() {
  return (
    <div className='shop'>
          <div className='shopTitle'>
              <h1>Shoping Cart</h1>
          </div>
          <div className="products">
              {PRODUCTS.map(product => (<Product key={product.id} data={product } />)) }
          </div>
    </div>
  )
}
