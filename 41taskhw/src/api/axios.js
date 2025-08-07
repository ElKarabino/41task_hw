import axios from "axios";

const token = localStorage.getItem('token');

export const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
