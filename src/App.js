import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"



const AppLayOut = () => {
    return (
        <div className="app-root">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayOut></AppLayOut>)