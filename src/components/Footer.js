import GOOGLE_PLAY from "../../assets/google-play.png";
import PLAY_STORE from "../../assets/play-store.png";
import {Link} from "react-router-dom";
import {LOGO_URL} from '../utils/constants';
export default function Footer() {
    return (
        <div className="footer">
            <div className="upper-footer">
                <div className="upper-footer-punch-line">For better experience,download<br/>the Company Name app now</div>
                <div className="upper-footer-images">
                    <img src={GOOGLE_PLAY} alt="google-play-image"/>
                    <img src={PLAY_STORE} alt="app-store-image"/>
                </div>
            </div>

            <div className="lower-footer">
                <div className="lower-footer-content">
                    <div>
                        <img className="footer-img" src={LOGO_URL} alt="logo"/>
                        <span className="copyright">Copyright&nbsp;&copy;&nbsp;2024</span>
                    </div>
                    <div className="links1">
                        <div className="links-title">Helpful Links</div>
                        <div><Link to="/">About</Link></div>
                        <div><Link to="/">Orders</Link></div>
                        <div><Link to="/">Contact</Link></div>
                    </div>
                    <div className="links1">
                        <div className="links-title">Get in touch</div>
                        <div><Link to="/">companyname@food.in</Link></div>
                    </div>
                    <div className="links1">
                        <div className="links-title">Connect with us</div>
                        <div><Link to="/">facebook</Link></div>
                        <div><Link to="/">instagram</Link></div>
                        <div><Link to="/">twitter</Link></div>
                    </div>
                </div>
            </div>

        </div>
    );
}