
import CartContext from "../../context/CartContext"
import "./index.css"

const ProductItem = (props) => {
    const {itemDetails}= props
    const {name,price} = itemDetails

    return (
        <CartContext.Consumer>
            {value => {
            const {addCartItem} = value
                    
            const onClickCartItem =() => {
                addCartItem({...itemDetails})
            }

            return (
            <div className="items-container">
            <h1 className="item-heading">{name}</h1>
            <p className="item-price">{price}</p>
            <button className="button" type="button" onClick={onClickCartItem}>Add to Cart</button>
        </div>
            )
        }}

    </CartContext.Consumer>
    )
}

export default ProductItem