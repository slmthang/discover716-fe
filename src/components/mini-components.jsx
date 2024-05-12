
// IMPORTS
import logo716 from "../assets/logo-716.png";
import {icons} from "../data.js"

// MINI-COMPONENTS

// Logo()
export function Logo() {
    return (
        <div className="center logo">
            <a href=""><img src={logo716} alt="Discover716 Logo" /></a>
        </div>
    );
}

// Icons()
export function Icons({fontAwesome, href}) {
    return (
        <a href={href}>
            <i className={fontAwesome}></i>
        </a>
    );
}

// Resources()
export function Resources() {
    return (
        <ul className="resources center">
            <li>
                <a className="center" href="https://www.discover716.com/services">
                    <p>interns/volunteers</p>
                </a>
            </li>
            <li>
                <a className="center" href="https://www.discover716.com/partners">
                    <p>partners</p>
                </a>
            </li>
            <li>
                <a className="center" href="https://www.discover716.com/list-your-business">
                    <p>sponsors</p>
                </a>
            </li>
            <li>
                <a className="center" href="https://www.paypal.com/donate/?business=JVGA62CCJJANQ&no_recurring=0&item_name=Testing&currency_code=USD">
                    <p>donate</p>
                </a>
            </li>
            <li>
                <a className="center" href="/views/contact.html">
                    <p>contact</p>
                </a>
            </li>
            <li>
                <a className="center" href="https://www.discover716.com/">
                    <p>about us</p>
                </a>
            </li>    
        </ul>
    );
}

// Socials
export function Socials() {
    return (
        <ul className="socials center">
            <li>
                <Icons {...icons["facebook"]} />        
            </li>
            <li>
                <Icons {...icons["instagram"]} />
            </li>
            <li>
                <Icons {...icons["twitter"]} />
            </li>
            <li>
                <Icons {...icons["linkedin"]} />
            </li> 
        </ul>
    );
}

// CloseButton
export function CloseButton() {
    return (
        <div className="close">
            <i className="fa-solid fa-x"></i>   
        </div>
    );
}

    