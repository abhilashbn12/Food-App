import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import InstaMart from "./components/InstaMart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Cart from "./components/Cart";
const AboutUs = lazy(() => import('./components/AboutUs'));


const PageLayout = () => {
    const [user, setUser] = useState({
        name: "Abhilash B N",
        email: "bnabhilash2001@gmail.com"
    })
    return (
        <Provider store={Store}>
            <UserContext.Provider value={{ user, setUser }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense><AboutUs /></Suspense>,
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/instaMart",
                element: <Suspense fallback={<h1>Loading...</h1>}><InstaMart /></Suspense>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);