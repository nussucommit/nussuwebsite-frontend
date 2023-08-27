import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

// Create an Axios instance with custom config
const request = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

export default request;
