import ReactDOM from "react-dom/client";

import "./css/default.css";
import "./scss/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes views & loaders
import Layout from "./components/Layout.jsx";
import Homepage from "./components/Homepage.jsx";
import Event from "./components/Event";
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

            // Events
            {
                path: "event/:eventId",
                element: <Event />
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
