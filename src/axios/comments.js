import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3001/comments/",
  timeout: 1500,
});

commentsAxios.interceptors.request.use(
  async (config) => {
    await authApi.get("user");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default commentsAxios;
