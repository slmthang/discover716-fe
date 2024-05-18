

import "../scss/displayPage.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import restaurantService from "../services/restaurantService";


export default function Restaurant() {
    
    const params = useParams();

    const [displayObj, setDisplayObj] = useState({
        name: "The Delavan Hotel",
        thumbnail: "https://res.cloudinary.com/dxjfmwr5n/image/upload/v1715972917/hotels/delavan-hotel_nj1fx3.jpg",
        address: "6461 Transit Road, Buffalo, NY 14043",
        website: "https://thedelavanbuffalo.com/",
        phone: "716-635-9000",
        email: "frontdesk@salvatores.net",
        about: "about The Delavan Hotel",
        amenities: [
            {
                type: "general",
                data: ["gym", "restaurant"]
            }
        ]
    });

    // fetch an event
    useEffect(() => {
        restaurantService
        .fetch(params.restaurantId)
            .then(restaurantData => {
                setDisplayObj(restaurantData);
            })
    }, [params.restaurantId])

    return (

        <div id="display-cont-parent">
            <div id="display-cont" className="center glass">
                <div id="display-intro" className="center">
                    <div id="display-thumbnail" className="center">
                        <img src={displayObj.thumbnail} alt="thumbnail" />
                    </div>
                    <div id="display-details-cont" className="center">
                        <h1>{displayObj.name}</h1>
                        <div id="display-details">
                            <p id="address">Address: {displayObj.address}</p>
                            <p id="website">Website: <Link to={displayObj.website} className="link">Visit Here</Link></p>
                        </div>
                        <div id="display-contacts">
                            <p id="phone">Phone: {displayObj.phone}</p>
                            <p id="email">Email: {displayObj.email}</p>
                        </div>
                    </div>
                </div>
                <div id="display-about-cont" className="center">
                    <h1>Description: </h1>
                    <p id="display-about">
                        {displayObj.about}
                    </p>
                </div>
            </div>
        </div>   
    );
}