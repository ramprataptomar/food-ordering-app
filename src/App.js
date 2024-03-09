import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
    return(
        <div className="app-container">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <Body/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);
