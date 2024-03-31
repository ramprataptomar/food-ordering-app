import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Orders from "./components/Orders";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"))
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
                element: <Suspense fallback={<h1>Loading...</h1>}>
                            <About/>
                         </Suspense>,
            },
            {
                path: "/orders",
                element: <Orders/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);
