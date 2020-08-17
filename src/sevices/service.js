import axios from "axios"
import { Credentials } from '../store'

let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
})

Service.interceptors.request.use((request) => {
    request.headers['Authorization'] = 'Bearer ' + Credentials.token;
    return request;
})

Service.interceptors.response.use((response) => {
        return response
    },
    (error) => {
        if (error.response.status == 401) { 
            window.localStorage.removeItem('Credentials')
            $router.go()
        }
        throw error
    }
)

export { Service }
