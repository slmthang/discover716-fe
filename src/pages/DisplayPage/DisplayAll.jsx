
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
        <div id="display-element-cont" className="center box-shadow">
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

                    {displayObj.date ? <a id="date">
                        <i className="fa-solid fa-calendar-days"></i>
                        {displayObj.date}
                    </a> : null }

                    {displayObj.startTime && displayObj.endTime ? <a id="time">
                        <i className="fa-regular fa-clock"></i>
                        {formatTime(displayObj.startTime)} - {formatTime(displayObj.endTime)}
                    </a> : null }

                    <a id="address">
                        <i className="fa-solid fa-location-dot"></i>
                        {displayObj.address}
                    </a>

                    <Link id="website" to={displayObj.website} className="link">
                        <i className="fa-solid fa-earth-americas"></i>
                        Visit Here
                    </Link>
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


const fetchBy5 = (dataType, sortBy, sortOrder, setData) => {
    // fetch data for events, hotels, places and restaurants 
    dataService.fetchByInfo(dataType, 5, sortBy, sortOrder)
    .then(data => {
        setData(data);
    });
}

export default function DisplayAll() {

    // states
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("name");
    const params = useParams();

    useEffect(() => {

        fetchBy5(params.dataType, sortBy, sortOrder, setData);
        
    }, [sortOrder, sortBy, params.dataType]);

    return (
        <div id="displayall-cont" className="center">
            <div id="display-filter" className="center">
                <h1>{(params.dataType).toUpperCase()}</h1>  
                <div id="filter">

                    {params.dataType == "events" ? (
                        <select name="sortBy" id="sortBy" onChange={ e => setSortBy(e.target.value) }>
                            <option value="date">Date</option>
                            <option value="name">Name</option>
                        </select>
                    )  : null } 
                    <select name="sortOrder" id="sortOrder" onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Asc</option>
                        <option value="desc">Desc</option>
                    </select>
                </div>    
            </div>
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
