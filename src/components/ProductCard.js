const ProductCard = (props) => {
    const {productData} = props
    return (
        <div className="product-card">
            <img
              className="product-logo"
              alt="product-logo"
              src= {productData.thumbnail}
            />
          <h4>{productData.title}</h4>
          <h5>{"Category: "+ productData.category}</h5>
          <h5>{"Price: " + productData.price}</h5>
          <h5>{"Rating: " + productData.rating + " star"}</h5>
        </div>
    )
}

export default ProductCard;