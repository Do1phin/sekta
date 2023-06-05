import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import process from 'process';

import { getTokensFromStorage, removeTokensFromStorage } from './api.helper';
import { getNewTokens } from './authApi';

const authApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const accessToken = getTokensFromStorage();
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

authApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        error.response.data.message === 'jwt expired' ||
        error.response.data.message === 'just must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const { mutate: getTokens } = useMutation({
          mutationFn: () => getNewTokens(),
        });

        getTokens();

        return authApi.request(originalRequest);
      } catch (e) {
        if (error.response.data.message === 'jwt expired') {
          removeTokensFromStorage();
        }
      }
    }

    throw error;
  },
);

export { authApi };
