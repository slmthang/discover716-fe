

import "./WelcomePopUp.scss";
import { useState } from "react";
import {Logo, CloseButton} from "../mini-components.jsx"
import utils from "../../utils/utils.js";

export default function WelcomePopUp() {

    let [popUp, setPopUp] = useState(true);

    function hidePopUp() {
        setPopUp(false);

        utils.setCookie("visited", "true", 360);
    }

    return popUp ? (
        <div id="welcome-pop-up" className="center">
            <div id="pop-up-msg" className="center">
                <div onClick={hidePopUp}>
                    <CloseButton />
                </div>
                <Logo />
                <div id="msg-text" className="center">
                    <h1>Welcome!</h1>
                    <h2>Help Us Support Local & Non-profits.</h2>
                    <p>Discover 716 is a nonprofit organization in the 716 area which helps support local businesses, encourages business education through scholarships and internships, and gives back to other local non-profits.</p>
                </div>
                <a className="donate-btn center" href="https://www.paypal.com/donate/?business=JVGA62CCJJANQ&no_recurring=0&item_name=Testing&currency_code=USD"> Donate <i className="fa-solid fa-heart"></i></a>
            </div>
        </div>
    ) : null;
}





        