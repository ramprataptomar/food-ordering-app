import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";


const AppLayout = () => {
    return(
        <div className="app-container">
            <div className="header">
                <Header/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            }
        ],
        errorElement: <Error/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);
