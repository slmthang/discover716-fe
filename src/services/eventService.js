
// import axios
import axios from 'axios';

// baseURL
const baseURL = 'https://discover716-be.onrender.com/api/events';
// const baseURL = '/api/events';


// fetch all events
const fetchAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

// fetch an event by id
const fetch = (eventId) => {

    // get value of eventId from params object
    // eventId = eventId.eventId;

    const request = axios.get(`${baseURL}/${eventId}`);
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
    fetch,
    create
}