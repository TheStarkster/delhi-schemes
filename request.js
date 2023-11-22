import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://20.193.132.230:3000`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosInstance