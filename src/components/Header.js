import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <header className="header" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 2rem",
            background: "linear-gradient(90deg, #4f8cff 0%, #3358e6 100%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            color: "#fff"
        }}>
            <div className="logo-container" style={{ display: "flex", alignItems: "center" }}>
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="App Logo"
                    style={{
                        height: "48px",
                        width: "48px",
                        borderRadius: "12px",
                        marginRight: "1rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
                    }}
                />
                <span style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    letterSpacing: "1px"
                }}>
                    Hello React
                </span>
            </div>
            <nav className="nav-items">
                <ul style={{
                    display: "flex",
                    gap: "2rem",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    fontSize: "1.1rem"
                }}>
                    <li style={{ cursor: "pointer", transition: "color 0.2s" }}>Home</li>
                    <li style={{ cursor: "pointer", transition: "color 0.2s" }}>About Us</li>
                    <li style={{ cursor: "pointer", transition: "color 0.2s" }}>Contact Us</li>
                    <li style={{
                        cursor: "pointer",
                        background: "#fff",
                        color: "#3358e6",
                        borderRadius: "20px",
                        padding: "0.3rem 1rem",
                        fontWeight: "bold",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
                    }}>Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;