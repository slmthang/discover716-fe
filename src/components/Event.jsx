

import "../scss/Event.scss";
import eventImg from "../assets/event-test.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import eventService from "../services/eventService";



export default function Event() {

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

    // eventId
    const {eventId} = useParams();

    useEffect(() => {

        eventService
            .fetch(eventId)
                .then(eventData => {
                    setEvent(eventData);
                })
    }, [])

    return (
        <div id="event-cont" className="center">
            <div id="event-details" className="center">
                <h1>{event.title}</h1>
                <div className="center">
                    <div>
                        <span>Date: {event.date}  &nbsp;&nbsp;|&nbsp;&nbsp;  </span>
                        <span>Time: {event.startTime} - {event.endTime}  &nbsp;&nbsp;|&nbsp;&nbsp;  </span>
                        <span>Address: {event.address}  &nbsp;&nbsp;|&nbsp;&nbsp;  </span>
                        <span>Website: <a href={event.website} className="link">Visit Here</a> </span>
                    </div>
                </div>
            </div>
            <div id="event-info" className="center">
                <img src="" alt="event thumbnail" />
                <p id="description">
                    {event.description}
                </p>
            </div>
            <div id="event-contacts" className="center">
                Contacts: {event.phone} &nbsp;&nbsp;|&nbsp;&nbsp; {event.email}
            </div>
        </div>
    );
}