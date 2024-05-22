
import img from "../../assets/building.jpg";
import "./DisplayAll.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const event = {
//     _id: "664ae8bd87fa9e0d2227f715",
//     name: "National Day",
//     date: "2025-01-11",
//     startTime: "10:00",
//     endTime: "14:30",
//     address: "334 Piston St, NY, 14305",
//     website: "https://www.google.com",
//     thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716185278/discover716/pexels-sharefaith-491036-1202723.jpg.jpg",
//     about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur.",
//     email: "nationalday@gmail.com",
//     phone: "716-334-5784",
//     goingCount: "0"
// }

// const place = {
//     _id: "664ae8ff87fa9e0d2227f717",
//     name: "Buffalo Zoo",
//     thumbnail: "http://res.cloudinary.com/dxjfmwr5n/image/upload/v1716185344/discover716/buffalo-zoo.jpg.jpg",
//     address: "334 Piston St, NY, 14305",
//     website: "https://www.google.com",
//     phone: "716-334-5784",
//     email: "buffalo-zoo@gmail.com",
//     about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero. Interdum consectetur libero id faucibus nisl tincidunt eget. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt nunc pulvinar sapien et ligula. Enim facilisis gravida neque convallis a cras semper auctor neque. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Purus in massa tempor nec feugiat nisl. Vulputate ut pharetra sit amet aliquam id diam maecenas. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et leo duis ut diam.\r\n\r\nFusce id velit ut tortor. Quisque egestas diam in arcu cursus euismod quis viverra. Blandit libero volutpat sed cras ornare. Scelerisque in dictum non consectetur a erat nam at. Sit amet consectetur adipiscing elit duis tristique. Sem viverra aliquet eget sit. Orci dapibus ultrices in iaculis nunc sed augue lacus. Proin sagittis nisl rhoncus mattis rhoncus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Neque viverra justo nec ultrices dui sapien eget.\r\n\r\nAliquet bibendum enim facilisis gravida neque convallis a. At quis risus sed vulputate odio ut enim blandit volutpat. Aliquet risus feugiat in ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida cum sociis. Dui ut ornare lectus sit. Consequat nisl vel pretium lectus quam id leo in. Sit amet justo donec enim. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui nunc. Fames ac turpis egestas sed. Id ornare arcu odio ut sem nulla pharetra diam sit. Euismod elementum nisi quis eleifend quam. Nulla at volutpat diam ut venenatis tellus in metus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Etiam dignissim diam quis enim. Cras sed felis eget velit aliquet sagittis id consectetur",
//     amenities: []
//   }

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
            <div id="thumbnail">
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
