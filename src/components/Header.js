import {LOGO_URL} from '../utils/constants';
function Header() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="web-logo"/>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Orders</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;