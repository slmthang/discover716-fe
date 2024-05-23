

import "./Display.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dataService from "../../services/dataService";


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

export default function Display() {

    const params = useParams();

    const [displayObj, setDisplayObj] = useState({});

    // fetch an event
    useEffect(() => {

        dataService
        .fetchById(params.dataType, params.dataId)
            .then(data => {
                
                setDisplayObj(data);
            })
    }, [params.dataType, params.dataId])

    return (

        <div id="display-cont-parent" className="center">
            <div id="display-cont" className="center glass">
                <div id="display-intro" className="center">
                    <div id="display-thumbnail" className="center">
                        <img src={displayObj.thumbnail} alt="thumbnail" />
                    </div>
                    <div id="display-details-cont" className="center">
                        {displayObj.name ? <h1>{displayObj.name}</h1>:null }
                        <div id="display-details">
                            {displayObj.date ? <p id="date">Date: {displayObj.date}</p> : null }
                            {displayObj.startTime && displayObj.endTime ? <p id="time">Time: {formatTime(displayObj.startTime)} - {formatTime(displayObj.endTime)}</p> : null }
                            <p id="address">
                                {displayObj.address ? 
                                    <i className="fa-solid fa-location-dot"></i>:null
                                }
                                &nbsp;&nbsp;&nbsp;{displayObj.address}
                            </p>
                            <p id="website">
                                {displayObj.website ? 
                                    <>
                                        <i className="fa-solid fa-link"></i>&nbsp;&nbsp;&nbsp;
                                        <Link to={displayObj.website} className="link" style={{color: "#323b8c"}}>Visit Site</Link>
                                    </> : null
                            }
                            </p>
                        </div>
                        <div id="display-contacts">
                            <p id="phone">
                                {displayObj.phone ? 
                                    <i className="fa-solid fa-phone"></i>:null
                                }
                                &nbsp;&nbsp;&nbsp;{displayObj.phone}
                            </p>
                            <p id="email">
                                {displayObj.email ? 
                                    <i className="fa-solid fa-envelope"></i>:null
                                }
                                &nbsp;&nbsp;&nbsp;{displayObj.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="display-about-cont" className="center">
                    <h1>About: </h1>
                    <hr />
                    <p id="display-about">
                        {displayObj.about}
                    </p>
                </div>
            </div>
        </div>   
    );
}