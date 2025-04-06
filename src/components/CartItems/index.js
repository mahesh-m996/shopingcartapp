import React from 'react'
import CartView from '../CartView'
import "./index.css"
import CartContext from '../../context/CartContext'

const CartItems = () => (

  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <div>
            <h1 className="cart-heading">Cart Items</h1>
          <div className="cart-container">
            {cartList.map(each => (
                <CartView key={each.id} cartDetails={each}/>
             ))}
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
  
  )

export default CartItems
