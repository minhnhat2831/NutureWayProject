import axios from "axios";
import { DEFAULT_API_SERVER , API_ENDPOINT} from "./Api";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: DEFAULT_API_SERVER.BASE_URL,
  timeout: DEFAULT_API_SERVER.TIMEOUT,
  headers: DEFAULT_API_SERVER.HEADERS,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Access token hết hạn
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post(
          `${DEFAULT_API_SERVER.BASE_URL}${API_ENDPOINT.API_REFRESH_TOKEN}`,
          { refreshToken }
        );

        const newAccessToken = res.data.tokens.accessToken;
        const newRefreshToken = res.data.tokens.refreshToken;

        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.clear();
        toast.error("401 Auth")
        window.location.href = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;