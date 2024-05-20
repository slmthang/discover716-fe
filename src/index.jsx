
// IMPORT
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// css
import "./index.css";

// views
import Layout from "./components/Layout/Layout.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import DisplayAll from "./pages/DisplayPage/DisplayAll.jsx";
import Display from "./pages/DisplayPage/Display.jsx";
import Submit from "./pages/Submit/Submit.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";


// routers
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
                path: "display/:dataType/",
                element: <DisplayAll />,
            },

            {
                path: "display/:dataType/:dataId",
                element: <Display />
            },

            {
                path: "submit",
                element: <Submit />
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
