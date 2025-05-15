import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuth = () => {
        setIsLoggedIn((prev) => !prev);
    };

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
                    <li>
                        <button className="header-btn cart-btn">Cart</button>
                    </li>
                    <li>
                        <button className="header-btn auth-btn" onClick={handleAuth}>
                            {isLoggedIn ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;