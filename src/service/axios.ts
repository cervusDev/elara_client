import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

type Variant = 'error' | 'info' | 'default' | 'success' | 'warning';

const JWT_KEY = process.env.JWT_KEY as string;
const LOGIN_URL = process.env.LOGIN_URL as string;
const SESSION_URL = process.env.SESSION_URL as string;

export namespace AxiosInstance {
  export const api = axios.create({
    baseURL: process.env.BASE_URL as string,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  api.interceptors.request.use(async config => {
    const token = Cookies.get(JWT_KEY);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  function useRedirect(error: any) {
    const { enqueueSnackbar } = useSnackbar();
    if (error.response) {
      switch (error.response.status) {
        case 401:
          const { path } = error.response.data;

          if (path === SESSION_URL) {
            Cookies.remove(JWT_KEY);
          } else {
            Cookies.remove(JWT_KEY);
            window.location.href = LOGIN_URL;
            enqueueSnackbar('Você não possui acesso a essa rota', { variant: 'info' });
          }
          break;
        default:
          break;
      }
    }
    Promise.reject(error);
  }

  api.interceptors.response.use(
    response => response.data,
    error => useRedirect(error)
  );
}


