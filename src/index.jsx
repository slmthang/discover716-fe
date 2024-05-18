import ReactDOM from "react-dom/client";

import "./css/default.css";
import "./scss/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes views & loaders
import Layout from "./components/Layout.jsx";
import Homepage from "./components/Homepage.jsx";

// views
import Event from "./components/Event";
import Hotel from "./components/Hotel.jsx";
import Restaurant from "./components/Restaurant.jsx";
import Place from "./components/Place.jsx";

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
                path: "events/:eventId",
                element: <Event />
            },
            {
                path: "hotels/:hotelId",
                element: <Hotel />
            },
            {
                path: "places/:placeId",
                element: <Place />
            },
            {
                path: "restaurants/:restaurantId",
                element: <Restaurant />
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
