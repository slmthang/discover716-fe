
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";


export default function Layout({isMobile}) {

    return (
        <div id="main-layout">
            <NavBar isMobile={isMobile} />
            <Outlet isMobile={isMobile}/>
            <Footer isMobile={isMobile} />
        </div>
    );
}