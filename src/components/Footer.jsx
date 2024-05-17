
// IMPORTS
import "../scss/Footer.scss";
import { discover716, icons } from "../data.js";
import { Logo, Icons } from "./mini-components";
import { useState, useEffect } from "react";
import eventService from "../services/eventService";
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

function EventElement ({eventObj}) {
    return (
        <Link to={`/event/${eventObj._id}`} className="link">
            <li className="option">
                <p>{eventObj.title}</p>
            </li>
        </Link>
        
    )
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

    // menus
    const [events, setEvents] = useState([]);


    // useEffect()
    useEffect(() => {
        eventService.fetchAll()
            .then(eventsData => {
                setEvents(eventsData);
            });
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
                            return <EventElement key={event._id} eventObj={event} />
                        }) 
                    : null}
                </ul>
            </div>

            {/* Things To Dos */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Things To Dos</h3>
                </div>
                <ul className="options">
                <li className="option">
                        <p>Niagara Falls</p>
                    </li>
                    <li className="option">
                        <p>Buffalo Zoo</p>
                    </li>
                    <li className="option">
                        <p>Buffalo RiverWorks</p>
                    </li>
                    <li className="option">
                        <p>Ales & Axes</p>
                    </li>
                    <li className="option">
                        <p>Nightmare Hayride</p>
                    </li>
                    <li className="option">
                        <p>More...</p>
                    </li>
                </ul>
            </div>

            {/* Restaurants */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Restaurants</h3>
                </div>
                <ul className="options">
                    <li className="option">
                        <p>Vice Restaurant</p>
                    </li>
                    <li className="option">
                        <p>Toutant</p>
                    </li>
                    <li className="option">
                        <p>Mothers Restaurant</p>
                    </li>
                    <li className="option">
                        <p>Osteria 166</p>
                    </li>
                    <li className="option">
                        <p>Tappo Restaurant</p>
                    </li>
                    <li className="option">
                        <p>Sophia's Restaurant</p>
                    </li>
                    <li className="option">
                        <p>More...</p>
                    </li>
                </ul>
            </div>

            {/* Hotels */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Hotels</h3>
                </div>
                <ul className="options">
                    <li className="option">
                        <p>Garden Place Hotel</p>
                    </li>
                    <li className="option">
                        <p>Holiday Inn</p>
                    </li>
                    <li className="option">
                        <p>Embassy Suites</p>
                    </li>
                    <li className="option">
                        <p>The Delavan Hotel</p>
                    </li>
                    <li className="option">
                        <p>Lenox Hotel</p>
                    </li>
                    <li className="option">
                        <p>More...</p>
                    </li>
                </ul>
            </div>

            {/* Specials */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Specials</h3>
                </div>
                <ul className="options">
                    <li className="option">
                        <p>Tasting Tables</p>
                    </li>
                    <li className="option">
                        <p>12 Businesses of Christmas</p>
                    </li>
                </ul>
            </div>
            
            {/* Resources */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Resources</h3>
                </div>
                <ul className="options">
                <li className="option">
                        <Link to="https://ltpm2399.blogspot.com/" className="link">
                            <p>blogs</p>
                        </Link>
                    </li>
                    <li className="option">
                        <p>interns/volunteers</p>
                    </li>
                    <li className="option">
                        <p>partners</p>
                    </li>
                    <li className="option">
                        <p>sponsors</p>
                    </li>
                    <li className="option">
                        <p>donate</p>
                    </li>
                    <li className="option">
                        <p>contact</p>
                    </li>
                    <li className="option">
                        <p>about us</p>
                    </li>
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

