import { useEffect, useState } from "react";
import Products from "./components/Products"
import './App.css';
import CartSummary from "./components/CartSummary";
import CartItems from "./components/CartItems";
import CartContext from "./context/CartContext";

 const App  = () =>{

  const [cartList, setCartList] = useState([])

  useEffect(() => {
    document.title = "shoping-cart"
  })

  const addCartItem = (items) => {
    
    setCartList((prevState) => {
    const isProduct = prevState.find(ele => ele.id === items.id)
    if(isProduct) {
      return  prevState.map(item => 
        item.id === items.id ? {...item,quantity: item.quantity + items.quantity}: item
      )
      
    }
    return [...prevState,items]
  }
  )

  }

  const decrementQuantity = (id) => {
    setCartList((prevState) => 
      prevState.map((each) => 
      each.id === id && each.quantity > 0 ? {...each,quantity: each.quantity - 1}: each
      )
    )
  }

  const incrementQuantity = (id) => {
    setCartList((prevState) => 
      prevState.map((each) => 
      each.id === id ? {...each,quantity: each.quantity + 1}: each
      )
    )
  }

  
  
  

  return ( 
    <CartContext.Provider value={{cartList,addCartItem,decrementQuantity,incrementQuantity}}>
          <div className="shop-cart-app">
      <h1 className="shop-cart-heading">Shoping Cart</h1>
      
     <Products/>
     <CartSummary />
     <CartItems />
    </div>
     

    </CartContext.Provider>)
    
 }


export default App;
