import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
  headers: {
    "Content-Type": "application/json",
  },
});

//요청할때의 인터셉트

authApi.interceptors.request.use(
  (config) => {
    if (config.url === "user") {
      const accessToken = localStorage.getItem("access");
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      } else {
        alert("인증이 필요합니다.");
        return Promise.reject("인증이 필요합니다.");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
