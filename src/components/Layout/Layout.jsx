

import {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import ScrollToTop from "../ScrollToTop.jsx";

// services
import dataService from "../../services/dataService.js";
import utils from '../../utils/utils.js'
import Theme from '../../components/Theme.jsx';

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

    const [events, setEvents] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [places, setPlaces] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        async function fetchData() {
                // fetch data for events, hotels, places and restaurants
            await dataService.fetchByInfo("events", 5)
                .then(eventsData => {
                    setEvents(eventsData);
                });
            
            await dataService.fetchByInfo("hotels", 5)
                .then(hotelsData => {
                    setHotels(hotelsData);
                })

            await dataService.fetchByInfo("places", 5)
                .then(placesData => {
                    setPlaces(placesData);
                })
            
            await dataService.fetchByInfo("restaurants", 5)
                .then(restaurantData => {
                    setRestaurants(restaurantData);
                })
        }

        fetchData();

    }, [])


    // open-close mobile-burger-menu
    let [darkMode, setDarkMode] = useState(false);


    const mainData = {
        events,
        hotels,
        restaurants,
        places
    }

    return (
        <div id="main-layout" app-theme={darkMode ? "dark" : ""}>
            <Theme darkMode={darkMode} setDarkMode={setDarkMode}/>
            <ScrollToTop />
            <NavBar isMobile={isMobile} mainData={mainData}/>
            <Outlet isMobile={isMobile}/>
            <Footer isMobile={isMobile} mainData={mainData}/>
        </div>
    );
}


