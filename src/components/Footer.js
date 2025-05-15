const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <span>© {new Date().getFullYear()} Hello React. All rights reserved.</span>
            <nav>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    </footer>
);

export default Footer;