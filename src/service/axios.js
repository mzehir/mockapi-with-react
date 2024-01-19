import axios from "axios";
import { dbConfig } from "../utils/config/config";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = `${dbConfig.API_HOST}`;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
