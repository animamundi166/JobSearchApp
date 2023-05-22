import axios from 'axios';
import { baseHeaders } from '../constants';
import { getToken } from '../services/getToken';

export const axiosClassic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: baseHeaders,
});

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: baseHeaders,
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token || token.ttl * 1000 < Date.now()) {
      getToken();
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return config;
  }
);

instance.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalConfig = error.config;
  if (error.response.status === 401 && !originalConfig._retry) {
    originalConfig._retry = true;
    try {
      await getToken();
      return instance.request(originalConfig);
    } catch (e) {
      if (e.response && e.response.data) {
        return Promise.reject(e.response.data);
      }
      return Promise.reject(e);
    }
  }

  if (error.response.status === 403 && error.response.data) {
    return Promise.reject(error.response.data);
  }

  return Promise.reject(error);
}
)
