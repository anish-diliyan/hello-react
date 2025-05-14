import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

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