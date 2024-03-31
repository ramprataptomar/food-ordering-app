import {LOGO_URL} from '../utils/constants';
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="web-logo"/>
            </div>
            <div className="nav-items-container">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/orders">Orders</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
            </div>
        </div>
    );
}

export default Header;