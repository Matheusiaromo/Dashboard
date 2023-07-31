import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.put(endpoint);
  },
  login(body) {
    return axiosInstance.post("/jwt-auth/v1/token", body);
  },
  validateToken(token) {
    return axiosInstance.post("/jwt-auth/v1/token/validate", null, {
      headers: {
        Authorization: token
      }
    });
  }
};