import axios, { AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com/products", // Replace with your apiClient base URL
});
apiClient.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
