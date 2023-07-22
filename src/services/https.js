import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://produtos.omatheusdev.com/'
})

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
        return axiosInstance.post('/login', body)
    },
    refresh() {
        return axiosInstance.post('/refresh')
    }
}