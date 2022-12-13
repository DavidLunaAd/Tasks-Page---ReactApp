import axios from "axios"

//Default config for AXIOS

export default axios.create(
    {
        baseURL:'https://randomuser.me/api',
        responseType: 'json',
        timeout: 5000
    }
)