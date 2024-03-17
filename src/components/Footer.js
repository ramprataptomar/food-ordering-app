import GOOGLE_PLAY from "../../assets/google-play.png";
import PLAY_STORE from "../../assets/play-store.png";
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
                    this is lower footer
            </div>

        </div>
    );
}