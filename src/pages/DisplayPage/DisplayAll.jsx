
import "./DisplayAll.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// service
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

function DisplayElement({displayType, displayObj}) {

    return (
        <div id="display-element-cont" className="center glass">
            <div id="thumbnail" className="center">
                <img src={displayObj.thumbnail} alt="element thumbnail" />
            </div>
            <div id="details-cont" className="center">
                <div id="details">
                    <h1>
                        <Link to={`/display/${displayType}/${displayObj._id}`} className="link"  style={{color: "#323b8c"}}>
                            {displayObj.name}
                        </Link>    
                    </h1>
                    {displayObj.date ? <p id="date">Date: {displayObj.date}</p> : null }
                    {displayObj.startTime && displayObj.endTime ? <p id="time">Time: {formatTime(displayObj.startTime)} - {formatTime(displayObj.endTime)}</p> : null }
                    <p id="address">Address: {displayObj.address}</p>
                    <p id="website">Website: <Link to={displayObj.website} className="link" style={{color: "#323b8c"}}>Visit Here</Link></p>
                </div>
                <div id="description" className="center">
                    <p>{displayObj.about}</p>
                    
                    <Link to={`/display/${displayType}/${displayObj._id}`} className="link">
                        <span>more...</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function DisplayAll() {

    const [data, setData] = useState([]);

    const params = useParams();

    useEffect(() => {

        // fetch data for events, hotels, places and restaurants
        dataService.fetchAll(params.dataType)
            .then(data => {
                setData(data);
            });
    }, [[params.dataType, params.dataId]]);

    return (
        <div id="displayall-cont" className="center">
            <h1>{(params.dataType).toUpperCase()}</h1>
            {(data.length > 0) ? 
                (
                    data.map( e => {
                        return <DisplayElement key={e._id} displayType={params.dataType} displayObj={e}/>
                    })
                )

                : null
            }
        </div>

    )
}
