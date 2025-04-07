import ProductItem from "../ProductsItem";


import "./index.css"

const products = [
    { id: 1, name: "Laptop", price: 500,quantity: 1},
    { id: 2, name: "Smartphone", price: 300,quantity: 1},
    { id: 3, name: "Headphones", price: 100,quantity: 1},
    { id: 4, name: "Smartwatch", price: 150,quantity: 1},
  ];
  
const Products = () => {
    return (
        <div className="product-container">
            <h1 className="product-name"> Products </h1>
            <div className="product-list">
                {products.map(eachItem => (
                    <ProductItem  key={eachItem.id} itemDetails={eachItem}/>
                ))}
            </div>
            
        </div>
    )
}

export default Products