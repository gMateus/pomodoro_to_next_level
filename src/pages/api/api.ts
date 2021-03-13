import axios from 'axios';


const api = axios.create({
    baseURL: process.env.BASE_URL,
});







export default api;



/*
const apiSecret = process.env.BASE_URL

async function api(request, response) {

    const users = await fetch(`${apiSecret}`)

    const usersResponse = await users.json()
    const user = usersResponse

    response.json({
        users: user
    })
}

export default api;
*/