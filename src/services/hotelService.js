
// import axios
import axios from 'axios';

// baseURL
const baseURL = 'https://discover716-be.onrender.com/api/hotels';
// const baseURL = '/api/hotels';


// fetch all events
const fetchAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

// fetch an event by id
const fetch = (hotelId) => {
    const request = axios.get(`${baseURL}/${hotelId}`);
    return request.then(response => response.data);
}

// post an event
const create = (hotelObj) => {
    const request = axios.post(baseURL, hotelObj);
    return request.then(response => response.data);
}


// exports
export default {
    fetchAll,
    fetch,
    create
}