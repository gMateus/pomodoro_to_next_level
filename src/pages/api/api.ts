import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const api = axios.create({
    baseURL: process.env.BASE_URL,
});

export default api;
