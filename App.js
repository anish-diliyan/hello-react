import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurentCard = (props) => {
    return (
        <div className="res-card">
            <img
              className="res-logo"
              alt="res-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG"
            />
          <h4>{props.resName}</h4>
          <h5>{props.cuisine}</h5>
          <h5>{props.rating}</h5>
          <h5>{props.deliverIn}</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard resName="Meghna Foods" cuisine="Biryani, North Indian" rating="4.1 stars" deliverIn="55 minutes"/>
                <RestaurentCard resName="Chinease Foods" cuisine="Non-Veg, Cinease" rating="4.2 stars" deliverIn="56 minutes"/>
                <RestaurentCard resName="Korian Foods" cuisine="Non-Veg, Korean" rating="4.3 stars" deliverIn="57 minutes"/>
                <RestaurentCard resName="American Foods" cuisine="Non-Veg, American" rating="4.4 stars" deliverIn="58 minutes"/>
                <RestaurentCard resName="Europian Foods" cuisine="Non-Veg, Europian" rating="4.5 stars" deliverIn="59 minutes"/>
                </div>
        </div>
    )
}
const AppLayOut = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayOut></AppLayOut>)