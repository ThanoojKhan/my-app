import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/timer" className="navbar-link">Timer</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/useffect" className="navbar-link">UseEffect</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/counter" className="navbar-link">Counter</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
