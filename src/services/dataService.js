
// import axios
import axios from 'axios';

// baseURL
const baseURL = import.meta.env.VITE_BASE_API_URL;

// const baseURL = '/api';

// fetch all data
const fetchAll = (path) => {
    const request = axios.get(`${baseURL}/${path}`);
    return request.then(response => response.data);
}

// fetch a object by id
const fetch = (path, objectId) => {

    const request = axios.get(`${baseURL}/${path}/${objectId}`);
    return request.then(response => response.data);
}

// post an event
const create = (object) => {
    const request = axios.post(`${baseURL}/${object.get("type")}`, object);
    return request.then(response => response.data);
}

// exports
export default {
    fetchAll,
    fetch,
    create
}