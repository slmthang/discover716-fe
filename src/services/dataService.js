
// import axios
import axios from 'axios';

// baseURL
const baseURL = import.meta.env.VITE_BASE_API_URL;

// fetch all data
const fetchAll = (path) => {
    const request = axios.get(`${baseURL}/${path}/all`);
    return request.then(response => response.data);
}

// fetch a object by id
const fetchById = (path, objectId) => {

    const request = axios.get(`${baseURL}/${path}/${objectId}`);
    return request.then(response => response.data);
}

// fetch objects by info
const fetchByInfo = (path, count, sortBy = "name", sortOrder="asc") => {

    const request = axios.get(`${baseURL}/${path}/info/${count}/${sortBy}/${sortOrder}`);
    return request.then(response => response.data);
}

// post an event
const create = (object) => {

    // get token from sessionStorage
    const token = `Bearer ${sessionStorage.getItem('token')}`;

    // config to attach jwt to req
    const config = {
        headers: { Authorization: token }
    }

    const request = axios.post(`${baseURL}/${object.get("type")}`, object, config);
    return request.then(response => response.data);
}

// delete all
const deleteAll = (path) => {


    // get token from sessionStorage
    const token = `Bearer ${sessionStorage.getItem('token')}`;

    // config to attach jwt to req
    const config = {
        headers: { Authorization: token }
    }

    const request = axios.delete(`${baseURL}/${path}/all`, config);
    return request.then(response => response.data);
}

// fetch a object by id
const deleteById = (path, objectId) => {

    // get token from sessionStorage
    const token = `Bearer ${sessionStorage.getItem('token')}`;

    // config to attach jwt to req
    const config = {
        headers: { Authorization: token }
    }

    const request = axios.delete(`${baseURL}/${path}/${objectId}`, config);
    return request.then(response => response.data);
}


// exports
export default {
    fetchAll,
    fetchById,
    fetchByInfo,
    create,
    deleteAll,
    deleteById
}