
import React from 'react'
import "./index.css"
import CartContext from '../../context/CartContext'
const CartSummary = () => {
  
 return ( 
 <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const moreCash = totalPrice < 1000 ? 1000 - totalPrice : 0;
      const progress = totalPrice < 1000 ? totalPrice/10: null
      console.log(progress)
      return (
        <div>
        <div>
        <h1 className="summary-heading">Cart Summary</h1>
              <div className="sub-total-container">
          
            <div className="sub-container">
              <h5 className="total-heading">SubTotal:</h5>
              <p className="total">₹{totalPrice}</p>
              </div>
              <hr/>
              {totalPrice >=1000 ? <p class="free">you got a free Wireless Mouse</p>:
              <div className="bar-container">
                  <h1 className="add-more">Add ₹{moreCash} more to get a free WirLess Mouse!</h1>
                  <div style={{
          background: "#ddd",
          borderRadius: "7px",
          overflow: "hidden",
          height: "25px",
          width: "98%",
          marginTop: "10px",
          marginLeft: "10px",
          position: "relative"
        }}>
          <div
            
            style={{
              width: `${progress}%`,
              background: "blue",
              height: "100%",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </div>
              </div>}
          </div>
      </div>
       
       </div>
      )
    }}

  </CartContext.Consumer>) 
}
export default CartSummary
