
// IMPORTS
import "../scss/Footer.scss";
import { discover716, icons } from "../data.js";
import { Logo, Icons } from "./mini-components";


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

    // return !isMobile ? (
    return (
        <div id="footer-menus">
            
            {/* Events */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Events</h3>
                </div>
                <ul className="options">
                    <li className="option">
                        <p>Event 1</p>
                    </li>
                    <li className="option">
                        <p>Event 2</p>
                    </li>
                </ul>
            </div>

            {/* Things To Dos */}
            <div className="menu">
                <div className="menu-name">
                    <h3>Things To Dos</h3>
                </div>
                <ul className="options">
                    <li className="option">
                        <p>Things To Do 1</p>
                    </li>
                    <li className="option">
                        <p>Things To Do 2</p>
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
                        <p>Restaurant 1</p>
                    </li>
                    <li className="option">
                        <p>Restaurant 2</p>
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
                        <p>Hotel 1</p>
                    </li>
                    <li className="option">
                        <p>Hotel 2</p>
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
                        <p>Special 1</p>
                    </li>
                    <li className="option">
                        <p>Special 2</p>
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
                        <p>Resource 1</p>
                    </li>
                    <li className="option">
                        <p>Resource 2</p>
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

