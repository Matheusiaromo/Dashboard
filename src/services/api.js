import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

axiosInstance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint)
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body)
    },
    delete(endpoint) {
        return axiosInstance.put(endpoint)
    },
    login(body) {
        return axiosInstance.post('/jwt-auth/v1/token', body)
    },
    validateToken() {
        return axiosInstance.post('/jwt-auth/v1/token/validate')
    }
}