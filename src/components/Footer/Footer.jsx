
// IMPORTS
import "./Footer.scss";
import { discover716, icons } from "../../data.js";
import { Logo, Icons, NavElement } from "../mini-components.jsx";
import { useState, useEffect } from "react";

// services
import dataService from "../../services/dataService.js";
import { Link } from "react-router-dom";


// mini components
function DownloadApp({name, fontAwesome, href}) {
    return (
        <a className="center download" href={href}>
            <i className={fontAwesome}></i>
            <div>
                <p>Download on the</p>
                <h3>{name}</h3>
            </div>
        </a>
    );
}


// components

function FooterNav() {
    return (
        <nav>
            <div id="footer-navs" className="center">
                <div id="apps" className="center">
                    <DownloadApp {...icons["appStore"]} />
                    <DownloadApp {...icons["playStore"]} />
                </div>

                <div className="empty"></div>

                <div id="socials" className="center">
                    <Icons {...icons["facebook"]} />
                    <Icons {...icons["instagram"]} />
                    <Icons {...icons["twitter"]} />
                    <Icons {...icons["linkedin"]} />
                </div>
            </div>
        </nav>
    );
}

function FooterMenus({isMobile}) {

    const [events, setEvents] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [places, setPlaces] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        
        // fetch data for events, hotels, places and restaurants
        dataService.fetchAll("events")
            .then(eventsData => {
                setEvents(eventsData);
            });
        
        dataService.fetchAll("hotels")
            .then(hotelsData => {
                setHotels(hotelsData);
            })

        dataService.fetchAll("places")
            .then(placesData => {
                setPlaces(placesData);
            })
        
        dataService.fetchAll("restaurants")
            .then(restaurantData => {
                setRestaurants(restaurantData);
            })
    }, [])

    // return !isMobile ? (
    return (
        <div id="footer-menus">
            
            {/* Events */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Events</h3>
                </div>
                <ul className="options">
                    {events.length > 0 ?
                        events.map((event) => {
                            return <NavElement key={event._id} obj={event} type="events" />
                        }) 
                    : null}
                    <Link to='/display/events' className="link">
                        <div className="nav-element">
                            <p>More...</p>
                        </div>
                    </Link>
                </ul>
            </div>

            {/* Things To Dos */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Things To Dos</h3>
                </div>
                <ul className="options">
                    {places.length > 0 ?
                            places.map((place) => {
                                return <NavElement key={place._id} obj={place} type="places" />
                            }) 
                        : null}
                    <Link to='/display/places' className="link">
                        <div className="nav-element">
                            <p>More...</p>
                        </div>
                    </Link>
                </ul>
            </div>

            {/* Restaurants */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Restaurants</h3>
                </div>
                <ul className="options">
                    {restaurants.length > 0 ?
                            restaurants.map((restaurant) => {
                                return <NavElement key={restaurant._id} obj={restaurant} type="restaurants" />
                            }) 
                        : null}
                    <Link to='/display/restaurants' className="link">
                        <div className="nav-element">
                            <p>More...</p>
                        </div>
                    </Link>
                </ul>
            </div>

            {/* Hotels */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Hotels</h3>
                </div>
                <ul className="options">
                    {hotels.length > 0 ?
                            hotels.map((hotel) => {
                                return <NavElement key={hotel._id} obj={hotel} type="hotels" />
                            }) 
                        : null}
                    <Link to='/display/hotels' className="link">
                        <div className="nav-element">
                            <p>More...</p>
                        </div>
                    </Link>
                </ul>
            </div>

            {/* Specials */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Specials</h3>
                </div>
                <ul className="options">
                    <Link to='https://www.discover716.com/featurings' className="link">
                        <div className="nav-element">
                            <p>Tasting Tables</p>
                        </div>
                    </Link>
                    <Link to='https://www.discover716.com/projects-8' className="link">
                        <div className="nav-element">
                            <p>12 Businesses of Christmas</p>
                        </div>
                    </Link>
                    <Link to='' className="link">
                        <div className="nav-element">
                            <p>More...</p>
                        </div>
                    </Link>
                </ul>
            </div>
            
            {/* Resources */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Resources</h3>
                </div>
                <ul className="options">
                    <Link to='https://ltpm2399.blogspot.com/' className="link">
                        <div className="nav-element">
                            <p>blogs</p>
                        </div>
                    </Link>
                    <Link to='https://www.discover716.com/services' className="link">
                        <div className="nav-element">
                            <p>interns/volunteers</p>
                        </div>
                    </Link>
                    <Link to='https://www.discover716.com/partners' className="link">
                        <div className="nav-element">
                            <p>partners</p>
                        </div>
                    </Link>
                    <Link to='https://www.discover716.com/list-your-business' className="link">
                        <div className="nav-element">
                            <p>sponsors</p>
                        </div>
                    </Link>
                    <Link to='https://www.paypal.com/donate/?business=JVGA62CCJJANQ&no_recurring=0&item_name=Testing&currency_code=USD' className="link">
                        <div className="nav-element">
                            <p>donate</p>
                        </div>
                    </Link>
                    <Link to='/contact-us' className="link">
                        <div className="nav-element">
                            <p>contact us</p>
                        </div>
                    </Link>
                    <Link to='/about-us' className="link">
                        <div className="nav-element">
                            <p>about us</p>
                        </div>
                    </Link>
                </ul>
            </div>
        </div>
    );
    //  : null;
}

function FooterInfo() {
    return (
        <div id="footer-info" className="center">
            <Logo />
            <div id="details" className="center">
                <ul className="center">
                    <li id="address">{discover716.address}</li>
                    <li id="phone">{discover716.phone}</li>
                    <li id="email">{discover716.email}</li>
                </ul>
            </div>
        </div>
    );
}

// MAIN
export default function Footer({isMobile}) {

    return (

        <footer>
            <FooterNav />
            <FooterMenus isMobile={isMobile} />
            <FooterInfo />
        </footer>

    );
    
}

