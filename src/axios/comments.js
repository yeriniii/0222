import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3001/comments",
});

commentsAxios.interceptors.request.use(
  async (config) => {
    const { data } = await authApi.get("user");
    if (data.success) {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use(
  (response) => {
    return alert(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default commentsAxios;
