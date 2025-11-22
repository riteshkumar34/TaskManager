import axios from "axios";

const BASE_URLS = [
    "http://localhost:5001/api",
    "https://taskmanager-4-x5eq.onrender.com/api"
];

const api = axios.create({
    baseURL: process.env.NODE_ENV === "development"
        ? BASE_URLS[0]
        : BASE_URLS[1],
});

export default api;
