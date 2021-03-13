import axios from 'axios';


const api = axios.create({
    url: process.env.BASE_URL,
});

export default api;
