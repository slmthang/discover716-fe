

import {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {

    /* Checks If the Device is Mobile or Not */
    // set initial screen size
    let initScreen;

    if (window.screen.width < 1200 || window.innerWidth < 1200) {
        initScreen = true;
    } else {
        initScreen = false;
    }

    // open-close mobile-burger-menu
    let [isMobile, setIsMobile] = useState(initScreen);

    // screen resize handler
    const screenResizeHandler = function() {
        if (window.screen.width < 1200 || window.innerWidth < 1200) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    // listen for screen resize
    useEffect(() => {
        
        window.addEventListener("resize", screenResizeHandler);
    })

    return (
        <div id="main-layout">
            <NavBar isMobile={isMobile} />
            <Outlet isMobile={isMobile}/>
            <Footer isMobile={isMobile} />
        </div>
    );
}