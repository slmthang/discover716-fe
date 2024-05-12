

import "../scss/Event.scss";
import eventImg from "../assets/event-test.jpg";

export default function Event() {

    return (
        <div id="event-cont">
            <div id="event-summary">
                <h1 id="title" className="center">
                    Open Art Nights
                </h1>
                <div id="datetime-cont" className="center">
                    <p className="label">Date: </p> 
                    <p id="datetime"><span id="date">05/14/2024</span> @ <span id="from-time">04:00 P.M</span>  -  <span id="to-time">08:00 P.M</span></p>
                    
                </div>
                <div id="location-cont" className="center">
                    <p className="label">Address: </p>
                    <p id="location">2655 South Park Ave, Buffalo, NY 14218</p>
                </div>
                <div id="website-cont" className="center">
                    <p className="label">Website: </p>
                    <p id="website">https://www.buffalogardens.com/products/open-art-nights</p>
                </div>
            </div>
            <div id="event-more">
                <div id="thumb" className="center">
                    <img src={eventImg} alt="Event Image"/>
                </div>
                <div id="event-description" className="center">
                    <p id="description">
                        The Buffalo Botanical Gardens is full of natural beauty and so much inspiration and what better space to come and create?! We're inviting artists of all media and abilities, near and far, to grab their sketchbooks, canvases, pencils or paints, and find inspiration under the lush conservatory for an intimate art experience that you won't find anywhere else in Buffalo. You will have the entire 30,000+ square foot conservatory full of exotic plants from around the world at your fingertips to create in plein-air for four hours. *Limited registration
                        <br/><br/>
                        This experience is best suited for artists ages 16 and up. All participants are encouraged to bring their own easels, small tables, water cups, and water-based or dry media to work with. Only chairs and water for painting will be provided. Please keep in mind the nature of the greenhouse is very warm and humid. Water bottles are welcome and encouraged. Please review our full Artist Expectations below before reserving your space.     
                    </p>
                </div>
            </div>
            <div id="contacts" className="center">
                Contacts: <span id="phone">716-827-1584</span> <span id="email">info@buffalogardens.com</span>
            </div>
        </div>
    );
}