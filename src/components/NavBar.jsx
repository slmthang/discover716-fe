

// IMPORTS
import { Link } from "react-router-dom";
import { useState } from "react";
import "../scss/NavBar.scss";
import { Logo, Socials, Resources } from "./mini-components";

// components
function Nav() {
    return (
        <div id="nav-bar">
            <div id="nav-bar1" className="center">
                <div className="empty"></div>

                <div id="nav-bar1-menu">
                    <Resources />
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
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Event</p>
                        </div>
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Event</p>
                        </div>
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Things To Dos</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Things To Dos</p>
                        </div>
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Things To Dos</p>
                        </div>
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Restaurants</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Restaurants</p>
                        </div>
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Restaurants</p>
                        </div>
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Hotels</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Hotels</p>
                        </div>
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Hotels</p>
                        </div>
                    </div>
                </div>                   
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Specials</h3>
                    </div>
                    <div className="nav-bar2-drpdwn-menu-options">
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Specials</p>
                        </div>
                        <div className="nav-bar2-drpdwn-menu-option">
                            <p>Specials</p>
                        </div>
                    </div>
                </div>
                <div className="nav-bar2-drpdwn">
                    <div className="nav-bar2-drpdwn-menu center">
                        <h3>Blogs</h3>
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
            <Logo />
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
                <li className="menu">
                    <Link className="item" to="/event" onClick={toggleBurg}>Events</Link>
                </li>
                <li className="menu">Things To Do</li>
                <li className="menu">Restaurants</li>
                <li className="menu">Hotels</li>
                <li className="menu">Specials</li>
                <li className="menu">Blogs</li>
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