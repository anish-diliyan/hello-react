import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchProduct = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setListOfProducts(data.products);
        setFilteredProducts(data.products);
    };

    useEffect(() => { fetchProduct(); }, []);

    return filteredProducts.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfProducts.filter((res) => res.rating > 4);
                        setFilteredProducts(filteredList);
                    }}
                >
                    Top Rated Products
                </button>
                <button
                    className="show-all-btn"
                    onClick={() => setFilteredProducts(listOfProducts)}
                >
                    Show All
                </button>
            </div>
            <div className="product-container">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} productData={product} />
                ))}
            </div>
        </div>
    );
};

export default Body;