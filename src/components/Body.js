import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfProducts, setListOfProducts] = useState([]);

    const fetchProduct = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const data = await response.json();
        setListOfProducts(data.products);
    };

    useEffect(() => { fetchProduct(); }, []);

    return listOfProducts.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfProducts.filter((res) => res.rating > 4);
                    setListOfProducts(filteredList);
                }}>Top Rated Products</button>
            </div>

            <div className="product-container">
                {
                    listOfProducts.map((product) => (
                        <ProductCard key={product.id} productData={product}/>
                    ))
                }
            </div>
        </div>
    )
    
}

export default Body;