

// IMPORTS
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.scss";
import { Logo, Socials, NavElement } from "../mini-components";

// service
import dataService from "../../services/dataService";

// components
function Nav() {

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

    return (
        <div id="nav-bar">
            <div id="nav-bar1" className="center">
                <div className="empty"></div>

                <div id="nav-bar1-menu">
                    <ul className="resources center">
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
                    <Socials />
                </div>
            </div>
            <div id="nav-bar2">
            <Link to="/">
                <Logo />
            </Link>
            
            <div id="nav-bar2-drpdwns" className="center">
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Events</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        {events.length > 0 ?
                            events.map((event) => {
                                return <NavElement key={event._id} obj={event} type="events" />
                            }) 
                        : null}
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Places to Visit</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        {places.length > 0 ?
                            places.map((place) => {
                                return <NavElement key={place._id} obj={place} type="places" />
                            }) 
                        : null}
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Restaurants</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        {restaurants.length > 0 ?
                            restaurants.map((restaurant) => {
                                return <NavElement key={restaurant._id} obj={restaurant} type="restaurants" />
                            }) 
                        : null}
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Hotels</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        {hotels.length > 0 ?
                            hotels.map((hotel) => {
                                return <NavElement key={hotel._id} obj={hotel} type="hotels" />
                            }) 
                        : null}
                    </div>
                </div>                   
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Specials</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
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
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <Link to="https://ltpm2399.blogspot.com/" className="link">
                            <h3>Blogs</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

function NavMobile({toggleBurg, burg}) {
    return (
        <div id="nav-bar-mobile" className="center">
            <Link to="/">
                <Logo />
            </Link>
            <div className="open-close center">
            {burg ? (
                <div className="close">
                    <i className="fa-solid fa-x" onClick={toggleBurg}></i>   
                </div>
            ) : null}

            {!burg ? (
                <div className="open">
                    <i className="fa-solid fa-bars" onClick={toggleBurg}></i> 
                </div>
            ) : null}
            
             
        </div>
        </div>
    );
}

function BurgMenu({toggleBurg}) {
    return (
        <nav id="burg-menu" className="center">
            <ul className="center menus1">
                {/* <li className="menu">
                    <Link className="item" to="/event" onClick={toggleBurg}>Events</Link>
                </li>
                <li className="menu">Things To Do</li>
                <li className="menu">Restaurants</li>
                <li className="menu">Hotels</li>
                <li className="menu">
                    <Link to="https://ltpm2399.blogspot.com/" className="link">
                        Blogs
                    </Link>
                </li> */}

                
                <Link to='/events' className="link menu">
                    <div className="nav-element">
                        <p>Events</p>
                    </div>
                </Link>
                <Link to='/places' className="link menu">
                    <div className="nav-element">
                        <p>Things To Do</p>
                    </div>
                </Link>
                <Link to='/restaurants' className="link menu">
                    <div className="nav-element">
                        <p>Restaurants</p>
                    </div>
                </Link>
                <Link to='/hotels' className="link menu">
                    <div className="nav-element">
                        <p>Hotels</p>
                    </div>
                </Link>
                <Link to='https://ltpm2399.blogspot.com/' className="link menu">
                    <div className="nav-element">
                        <p>Blogs</p>
                    </div>
                </Link>
            </ul>
            <ul className="menus2">
                <div className="center apps">
                    <a className="center download" href="https://apps.apple.com/us/app/discover-716/id1198812837" >
                        <i className="fa-brands fa-app-store"></i>
                    </a>
                    <a className="center download" href="https://play.google.com/store/apps/details?id=com.emveedesign.discover716&pcampaignid=web_share&pli=1" >
                        <i className="fa-brands fa-google-play"></i>
                    </a>
                </div>
                <a className="donate-btn center" href="https://www.paypal.com/donate/?business=JVGA62CCJJANQ&no_recurring=0&item_name=Testing&currency_code=USD"> Donate <i className="fa-solid fa-heart"></i></a>
                <div className="center socials">
                    <a href="https://www.facebook.com/Discover716/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/discover716.balancedliving/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F716discover716">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/discover716/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </ul>
        </nav>
    );
}
    

// MAIN
export default function NavBar({isMobile}) {

    /* Checks If BurgMenu is Selected */
    // toggle burg menu
    let [burg, setBurg] = useState(false);

    function toggleBurg() {

        if (burg) {
            setBurg(false);
        } else {
            setBurg(true)
        }
    }

    return (
      <nav id="nav-bar-cont">
        {isMobile ? <NavMobile toggleBurg={toggleBurg} burg={burg}/> : <Nav />}
        {isMobile && burg ? <BurgMenu toggleBurg={toggleBurg} />: null}
      </nav>
    );
}