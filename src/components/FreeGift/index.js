import React from 'react'
import "./index.css"
const FreeGift = (props) => {
  const {totals} = props

  return (
    <div>
       {totals  >= 1000 ? 
       <div className="free-container">
            <div>
              <h1 className="free-heading">Wireless Mouse</h1>
              <p className="free-price">₹0 x 1 =₹0</p>
              </div>
              <div className="contain">
              <p className="free-gift">FREE GIFT</p>
              </div>
            </div>: null}
            
    </div>
  )
}

export default FreeGift
