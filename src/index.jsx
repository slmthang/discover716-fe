import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./css/default.css";
import "./scss/styles.scss";


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <App />
);
