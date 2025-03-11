import axios from "axios";

console.log("base url", process.env.EXPO_PUBLIC_API_URL);

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});
