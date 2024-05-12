
// import axios
import axios from 'axios';

// baseURL
const baseURL = '/api/events';


// fetch all events
const fetchAll = () => {
    const request = axios.get(baseURL);
    console.log("Fetchall");
    return request.then(response => response.data);
}

// post an event
const create = (eventObj) => {
    const request = axios.post(baseURL, eventObj);
    return request.then(response => response.data);
}


// exports
export default {
    fetchAll,
    create
}