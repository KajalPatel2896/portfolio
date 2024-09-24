import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImage from '../assets/logo.png';

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={logoImage} alt="My Logo" />
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact Me</Link>
            </nav>
        </header>
    );
}

export default Navbar;
