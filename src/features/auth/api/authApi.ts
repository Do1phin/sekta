import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

import { removeTokensFromStorage, saveToStorage } from './api.helper';
import { authApi } from './api.interceptor';
import { ILoginUser, IRegisterUser } from '../../../shared/types/authTypes';

enum UrlPath {
  dashboard = 'api/dashboard',
  login = 'api/auth/login',
  register = 'api/auth/register',
  updateTokens = 'api/auth/login/access-token',
}

const getNewTokens = async () => {
  const refreshToken = Cookies.get('refreshToken');
  const response = await authApi.post(UrlPath.updateTokens, {
    refreshToken,
  });

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response;
};

const signUpUser = async (user: IRegisterUser): Promise<AxiosResponse> => {
  const response = await authApi.post(UrlPath.register, user);
  return response.data;
};

const signInUser = async (user: ILoginUser) => {
  const response = await authApi.post(UrlPath.login, user);

  if (response.data) {
    saveToStorage(response.data);
  }

  return response.data;
};

const logout = async () => {
  return removeTokensFromStorage();
};

const checkAuth = async () => {
  try {
    const response = await getNewTokens();

    return response.data;
  } catch (error) {
    if (error) {
      await logout();
    }

    return 'checkAuth error';
  }
};

export { checkAuth, signUpUser, signInUser, getNewTokens };
