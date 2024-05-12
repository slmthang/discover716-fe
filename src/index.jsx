import ReactDOM from "react-dom/client";

// views
import Home from "./views/Home.jsx";
import Events from "./views/Events.jsx";
import AddEvent from "./views/AddEvent.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./css/default.css";
import "./scss/styles.scss";


// router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/event",
        element: <Events />
    },
    {
        path: "/addEvent",
        element: <AddEvent />
    }
]);

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <App />
);
