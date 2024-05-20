

import "../scss/displayPage.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dataService from "../services/dataService";


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

    const [displayObj, setDisplayObj] = useState({
            name:"Open Arts Night",
            date:"2024-05-31",
            startTime:"20:00",
            endTime:"00:00",
            address:"2655 South Park Avenue Buffalo, NY 14218",
            website:"https://buffaloriverworks.com/event/derby-day/",
            thumbnail:"https://res.cloudinary.com/dxjfmwr5n/image/upload/v1716049553/discover716/error/no-image_v7nvfz.png",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo. Massa enim nec dui nunc mattis enim ut tellus elementum. Ut lectus arcu bibendum at varius vel pharetra vel. Non diam phasellus vestibulum lorem sed. Velit euismod in pellentesque massa placerat duis ultricies lacus. Et sollicitudin ac orci phasellus egestas. Vitae sapien pellentesque habitant morbi tristique senectus et. Cursus turpis massa tincidunt dui. Porttitor rhoncus dolor purus non enim praesent. Porta non pulvinar neque laoreet. Nullam eget felis eget nunc lobortis. Bibendum enim facilisis gravida neque convallis a cras. Varius vel pharetra vel turpis nunc eget. A cras semper auctor neque vitae tempus quam pellentesque nec. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Imperdiet nulla malesuada pellentesque elit eget. Sed odio morbi quis commodo odio aenean sed. Ut lectus arcu bibendum at varius vel pharetra vel turpis.\r\n\r\nDonec massa sapien faucibus et molestie ac feugiat sed lectus. Sit amet dictum sit amet. A scelerisque purus semper eget duis at tellus at urna. Augue ut lectus arcu bibendum at varius. Tempus egestas sed sed risus pretium. Dui nunc mattis enim ut tellus elementum sagittis vitae. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Lectus sit amet est placerat in. Id semper risus in hendrerit. Sed vulputate odio ut enim blandit volutpat maecenas. Bibendum ut tristique et egestas quis. Mi quis hendrerit dolor magna eget est lorem. Leo integer malesuada nunc vel risus commodo viverra maecenas. Nullam ac tortor vitae purus faucibus. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\r\n\r\nHabitasse platea dictumst vestibulum rhoncus est pellentesque. Sagittis nisl rhoncus mattis rhoncus. Convallis convallis tellus id interdum velit laoreet id. Risus in hendrerit gravida rutrum quisque. Elit pellentesque habitant morbi tristique senectus et. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Gravida dictum fusce ut placerat. Sed euismod nisi porta lorem mollis aliquam ut. Aenean euismod elementum nisi quis. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget mauris pharetra et ultrices neque ornare. Molestie nunc non blandit massa enim nec dui nunc. Sed adipiscing diam donec adipiscing tristique risus nec. Nunc lobortis mattis aliquam faucibus purus in massa. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Sem integer vitae justo eget.",
            email:"gfdsgds@gdfgh.com",
            phone:"1-800-919-6272"
    });

    // fetch an event
    useEffect(() => {

        dataService
        .fetch(params.dataType, params.dataId)
            .then(data => {
                
                setDisplayObj(data);
            })
    }, [params.dataType, params.dataId])

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
                            {displayObj.date ? <p id="date">Date: {displayObj.date}</p> : null }
                            {displayObj.startTime && displayObj.endTime ? <p id="time">Time: {formatTime(displayObj.startTime)} - {formatTime(displayObj.endTime)}</p> : null }
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