
import axios from 'axios';

// baseURL
const baseURL = import.meta.env.VITE_BASE_AUTH_URL;


// fetch all data
const login = (loginInfo) => {
    const request = axios.post(`${baseURL}/login/`, loginInfo);
    console.log("BaseURL: ", baseURL);
    return request.then(response => response.data);
}


export default {
    login
}