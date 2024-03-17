import {LOGO_URL} from '../utils/constants';
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="web-logo"/>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;