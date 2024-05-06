import axios from "axios";
export const requestApi = axios.create({
  baseURL: "https://react-blogify-backend.onrender.com",
});
