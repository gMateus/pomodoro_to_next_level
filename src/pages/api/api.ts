import axios from 'axios';

const apiSecret = process.env.BASE_URL
console.log(apiSecret)
const api = axios.create({
    baseURL: `${apiSecret}`
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