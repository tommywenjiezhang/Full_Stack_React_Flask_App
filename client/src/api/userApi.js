import axios from 'axios'

const userApi = axios.create({
    baseURL:"http://localhost:8081/api",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})

export {userApi}