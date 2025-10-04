import axios from "axios"

// Use environment variable for production, fallback to localhost for development
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

const api = axios.create({
    baseURL: baseURL,
});

export default api;