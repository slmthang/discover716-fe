

import "../scss/Event.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../services/eventService";


function formatTime(time) {

    let meridiem = "";
    time = time.split(':');

    if (Number(time[0]) > 12) {
        time[0] = Number(time[0]) - 12;
        meridiem = "P.M";
    } else if (Number(time[0]) == 0) {
        time[0] = 12;
        meridiem = "A.M";
    } else {
        meridiem = "A.M";
    }

    return time[0] + ":" + time[1] + " " + meridiem;
}

export default function Event() {
    
    const params = useParams();

    // event state
    const [event, setEvent] = useState({
        "title": "Christmas",
        "date": "2024-05-22",
        "startTime": "02:06",
        "endTime": "14:03",
        "address": "1413 E Washington St, 14207",
        "website": "https://www.dffgdsfgdfsgdsfon.com/",
        "thumbnail": "thum.jpg",
        "description": "fasdgsafg",
        "email": "slmlg355@gmail.com",
        "phone": "71638584673",
        "goingCount": 0,
    });

    // fetch an event
    useEffect(() => {
        eventService
        .fetch(params.eventId)
            .then(eventData => {
                setEvent(eventData);
            })
    }, [params.eventId])

    return (

        <div id="Event">
            <div id="display-cont" className="center glass">
                <div id="display-intro" className="center">
                    <div id="display-thumbnail" className="center">
                        <img src={event.thumbnail} alt="thumbnail" />
                    </div>
                    <div id="display-details-cont" className="center">
                        <h1>{event.title}</h1>
                        <div id="display-details">
                            <p id="date">Date: {event.date}</p>
                            <p id="time">Time: {formatTime(event.startTime)} - {formatTime(event.endTime)}</p>
                            <p id="address">Address: {event.address}</p>
                            <p id="website">Website: <Link to={event.website} className="link">Visit Here</Link></p>
                        </div>
                        <div id="display-contacts">
                            <p id="phone">Phone: {event.phone}</p>
                            <p id="email">Email: {event.email}</p>
                        </div>
                    </div>
                </div>
                <div id="display-about-cont" className="center">
                    <h1>Description: </h1>
                    <p id="display-about">
                        {event.description}
                    </p>
                </div>
            </div>
        </div>   
    );
}