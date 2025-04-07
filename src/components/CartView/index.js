import React from 'react'
import "./index.css"
import CartContext from '../../context/CartContext'
import FreeGift from '../FreeGift'
const CartView = (props) => {
    const {cartDetails} = props
    const {name,price,id,quantity} = cartDetails
    
    
  return (
    <CartContext.Consumer>
      {value => {
        const {incrementQuantity,decrementQuantity} = value
        const total = price* quantity
        const onClickDecrement = () => {
          decrementQuantity(id)
        }
        const onClickIncrement = () => {
          incrementQuantity(id)
        }

       
        return (
          <div>
             {quantity !== 0 ? 
            <div className="item-container">
            <div>
            <h1 className="item-heading">{name}</h1>
          
            <p className="item-quantity"> ₹{price} x {quantity} =₹{total}</p>
            
            </div>
            <div className="container">
            <button className="button1" type="button" onClick={onClickDecrement}> - </button>
            <p className="quantity">{quantity}</p>
            <button className="button2" type="button" onClick={onClickIncrement}> + </button>
            </div>
          </div>     
          : "" }
          <div>
            <FreeGift  totals={total}/>
          </div>
          </div>
          

        )}
    }
    </CartContext.Consumer>
  )
}
export default CartView
