import { Link } from "react-router-dom";
import '../assets/style.css';

export function Navigation() {
    return (
        <header>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Dashboard</Link></li>
                    <li className="dropdown">
                        <span className="nav-link">Customer ▼</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/add" className="nav-link">Add Customer</Link></li>
                            <li><Link to="/delete" className="nav-link">Delete Customer</Link></li>
                            <li><Link to="/update" className="nav-link">Update Customer</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <span className="nav-link">Items ▼</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/addItem" className="nav-link">Add Item</Link></li>
                            <li><Link to="/deleteItem" className="nav-link">Delete Item</Link></li>
                            <li><Link to="/updateItem" className="nav-link">Update Item</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
