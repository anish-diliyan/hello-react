import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all"); // "all" or "top"

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setListOfProducts(data.products);
            setFilteredProducts(data.products);
        };
        fetchProducts();
    }, []);

    const handleTopRated = () => {
        const filteredList = listOfProducts.filter((res) => res.rating > 4);
        setFilteredProducts(filteredList);
        setSelectedFilter("top");
    };

    const handleShowAll = () => {
        setFilteredProducts(listOfProducts);
        setSelectedFilter("all");
    };

    return filteredProducts.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button
                    className={`filter-btn ${selectedFilter === "top" ? "active-btn" : ""}`}
                    onClick={handleTopRated}
                >
                    Top Rated Products
                </button>
                <button
                    className={`show-all-btn ${selectedFilter === "all" ? "active-btn" : ""}`}
                    onClick={handleShowAll}
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