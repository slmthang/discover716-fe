
// IMPORTS
import { Link } from "react-router-dom";
import logo716 from "../assets/logo-716.png";
import {icons} from "../data.js";

// MINI-COMPONENTS

// Logo()
export function Logo() {
    return (
        <div className="center logo">
            <img src={logo716} alt="Discover716 Logo" />
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

export function NavElement({obj, type}) {
    return (
        <Link to={`/display/${type}/${obj._id}`} className="link">
            <div className="nav-element">
                    <p>{obj.name}</p>
            </div>
        </Link>
    )
}
