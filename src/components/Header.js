import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="App Logo"
                />
                <span className="app-title">
                    Hello React
                </span>
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-btn">Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;