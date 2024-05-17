
// IMPORTS
import {useState, useEffect} from "react";
import "../scss/Homepage.scss";
import sportImg from "../assets/sport.jpg";
import cityImg from "../assets/city.jpg";
import buildingImg from "../assets/building.jpg";
import {moments} from "../data.js";
import WelcomePopUp from "./WelcomePopUp.jsx";



// array of images
const images = [sportImg, cityImg, buildingImg];

// components
function Intro() {

    /* change Intro Image */
    let [isIntro, setIsIntro] = useState(0);

    // checks introimg and change 
    function changeIntroImage() {

        if (isIntro + 1 > 2) {
            setIsIntro(0);
        } else {
            setIsIntro(isIntro + 1);
        }
        
    }

    // change intro image every 3.5sec
    setTimeout(() => {
        changeIntroImage();
    }, 3500);

    return (
        <section id="intro">
            <div id="intro-msg">
                <h2>WE LIVE & BREATHE BUFFALO, NY</h2>
                <img src={images[isIntro]} alt="intro image" />
            </div>
        </section>
    );
}

function Moment({id, className, src, alt, children = null}) {
    return (
        <div id={id} className={className}>
            <img src={src} alt={alt} />
            {children}
        </div>
    );
}

function AboutUs({isMobile}) {

    /* Change Moments Images */
    let [isMoment, setIsMoment] = useState(Math.floor(Math.random() * 10));

    function nextPic() {
        setIsMoment(isMoment + 1);
    }

    function prevPic() {
        setIsMoment(isMoment - 1);
    }

    function checkMomentsBound(n) {
        return Math.abs(n) % 10;
    }

    return (
        <section id="about-us">
            <div id="about-us-cont">
                <div id="about-us-intro" className="center">
                        <div className="center description">
                            <div className="center description-cont glass">
                                <h1 >About Us</h1>
                                <h3 className="textlight">We are Local Supporting Local!</h3>
                                <p>Discover716 is <span className="textlight">non-profit organization</span> with a two-pronged mission. First, we want to help small businesses and the non-profit community thrive by helping them market themselves and building their brand recognition, knowing that many are resource-constrained, especially due to the pandemic. Second, we are creating internships for college students in a collaborative work environment to help these small businesses and non-profits.</p>
                                <p>College students across a multitude of disciplines – <span className="textlight">marketing, technology, graphic arts, journalism </span>, and so on – gain invaluable experience with Discover716 helping meet the needs of our “clients.” Mentors help guide the students, but the students have tremendous latitude to tap their creativity and build their portfolio as they worked to build the brand of those who needed our assistance.</p>
                                <p>Your contribution is essential to helping us fulfill our mission!</p>
                            </div>
                        </div>
                </div>
                <div id="about-us-more" className="center">
                    <div className="glass">
                        <h3 >We are here for the people and the community.</h3>

                        <div id="moments-cont">
                            <div id="moments" className="center">
                                <Moment id="momentDisplay0" className="center moment" src={moments[checkMomentsBound(isMoment - 2)]["src"]} alt="alt"/>
                                <Moment id="momentDisplay1" className="center moment" src={moments[checkMomentsBound(isMoment - 1)]["src"]} alt="alt"/>
                                <Moment id="momentDisplay2" className="center moment" src={moments[checkMomentsBound(isMoment)]["src"]} alt="alt">
                                    <div id="prevBtn" className="center" onClick={prevPic}>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                    <div id="nextBtn" className="center" onClick={nextPic}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div> 
                                </ Moment>
                                <Moment id="momentDisplay3" className="center moment" src={moments[checkMomentsBound(isMoment + 1)]["src"]} alt="alt"/>
                                <Moment id="momentDisplay4" className="center moment" src={moments[checkMomentsBound(isMoment + 2)]["src"]} alt="alt"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function HomepageLoader() {
    return "May Thu Aung";
}

// MAIN
export default function Homepage({isMobile}) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <section id="homepage">
            <WelcomePopUp />
            <Intro />  
            <AboutUs isMobile={isMobile} />
        </section>
    );
}



            

            
        



