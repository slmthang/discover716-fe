import ReactDOM from "react-dom/client";

import "./css/default.css";
import "./scss/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes views & loaders
import Layout from "./components/Layout.jsx";
import Homepage from "./components/Homepage.jsx";

// views
import DisplayPage from "./components/DisplayPage.jsx";

import AddEvent from "./components/AddEvent";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        
        children: [
            {
                path: "",
                element: <Homepage />
            },

            // views
            {
                path: "display/:dataType/:dataId",
                element: <DisplayPage />
            },

            {
                path: "add-event",
                element: <AddEvent />
            },

            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "contact-us",
                element: <ContactUs />
            }

        ]
    }
])


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <RouterProvider router={router} />
);
