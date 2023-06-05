import Cookies from 'js-cookie';

import { storageHelper } from '../../../shared/helpers';
import { IAuthTokens, IResponseData } from '../../../shared/types/authTypes';

export const getTokensFromStorage = () => {
  return Cookies.get('accessToken') ?? null;
};

export const saveTokensToStorage = (data: IAuthTokens) => {
  Cookies.set('accessToken', data.accessToken, { expires: 1 });
  Cookies.set('refreshToken', data.refreshToken, { expires: 14 });
};

export const removeTokensFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  storageHelper('local').remove('user');
};

export const getUserFromStorage = () => {
  return JSON.parse(storageHelper('local').get('user') || '{}');
};

export const saveToStorage = (data: IResponseData) => {
  saveTokensToStorage({ accessToken: data.accessToken, refreshToken: data.refreshToken });
  storageHelper('local').set('user', JSON.stringify(data.user));
};
