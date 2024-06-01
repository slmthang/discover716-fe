
import "./DisplayAll.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DeleteButton } from "../../components/mini-components";

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

    // check userlogged in status
    const loggedIn = sessionStorage.getItem('loggedIn') ? true : false;

    return (
        <div id="display-element-cont" className="center box-shadow-card">
            { loggedIn ? <DeleteButton path={displayType} objectId={displayObj._id} /> : null }
            <div id="thumbnail" className="center">
                <img src={displayObj.thumbnail} alt="element thumbnail" />
            </div>
            <div id="details-cont" className="center">
                <div id="details">
                    <h1>
                        <Link to={`/display/${displayType}/${displayObj._id}`} className="link" >
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

export default function DisplayAll() {

    // states
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("name");
    const [totalCount, setTotalCount] = useState(0);
    const params = useParams();
    const [skipCount, setSkipCount] = useState(0);
    const perPage = 1;


    useEffect(() => {
        const fetchTotalCount = async (path, set) => {

            const {count} = await dataService.fetchTotalCount(path);

            setTotalCount(Math.floor(count/perPage));
        }

        fetchTotalCount(params.dataType, setTotalCount);

        setSkipCount(0);
    
    }, [params.dataType])

    useEffect(() => {

        const fetchBy5 = async (path, by, order, set, interval) => {
            // fetch data for events, hotels, places and restaurants 
            const data = await dataService.fetchByInfo(path, perPage, by, order, interval);

            // setData
            set(data);

        }

        fetchBy5(params.dataType, sortBy, sortOrder, setData, skipCount);
        
    }, [sortOrder, sortBy, skipCount, params.dataType]);


    const prevHandler = () => {

        if (skipCount >= 1) {

            setSkipCount(prev => prev -= 1);
        }
    }

    const nextHandler = () => {

        if (skipCount + 1 < totalCount) {
            setSkipCount(prev => prev += 1);
        }
        
    }

    return (
        <div id="displayall-cont" className="center">
            <div id="display-filter" className="center box-shadow-card">
                <h1>{(params.dataType).toUpperCase()}</h1>  
                <div id="filter">

                    {params.dataType == "events" ? (
                        <select name="sortBy" id="sortBy" onChange={ e => setSortBy(e.target.value) }>
                            <option value="name">Name</option>
                            <option value="date">Date</option>
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

            {(data.length > 0) ? 
                <div id="pager" className="center">
                    <button onClick={prevHandler} className="prev">prev</button>
                    <button>{skipCount + 1}</button>
                    <button onClick={nextHandler} className="next">next</button>
                </div>
                : null}
        </div>
    )
}
