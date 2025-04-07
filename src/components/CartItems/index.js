import React from 'react'
import CartView from '../CartView'
import "./index.css"
import CartContext from '../../context/CartContext'

const CartItems = () => (

  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartEmpty = () => (
        <div className="empty-container">
            <h1 className="empty-heading">Your cart is empty</h1>
            <p className="empty-content">Add some products to see them here!</p>
          
        </div>
      )
      const cartListing = () => (
        <div>
            <h1 className="cart-heading">Cart Items</h1>
          <div className="cart-container">
            {cartList.map(each => (
                <CartView key={each.id} cartDetails={each}/>
             ))}
          </div>
        </div>
      )
        
      

      return (
          <div>

              {cartList.length === 0 ? cartEmpty(): cartListing()}              

          </div>
        
        
      )
    }}
  </CartContext.Consumer>
  
  )

export default CartItems
