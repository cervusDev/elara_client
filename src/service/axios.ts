import axios from 'axios';

import Cookies from 'js-cookie';

const JWT_KEY = process.env.JWT_KEY as string;
const LOGIN_URL = process.env.LOGIN_URL as string;
const SESSION_URL = process.env.SESSION_URL as string;

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL as string,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(async config => {
  const token = Cookies.get(JWT_KEY);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  response => response.data.data,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          const { path } = error.response.data;

          if (path === SESSION_URL) {
            Cookies.remove(JWT_KEY);
          } else {
            Cookies.remove(JWT_KEY);
            window.location.href = LOGIN_URL;
          }
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);
