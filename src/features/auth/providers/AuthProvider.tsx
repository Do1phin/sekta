import React, { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react';

import { storageHelper } from '../../../shared/helpers';
import { IUser } from '../../../shared/types/authTypes';

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const user = JSON.parse(storageHelper('local').get('user') || '{}');

  const login = async (data: IUser) => {
    storageHelper('local').set('user', data);
  };

  const logout = () => {
    storageHelper('local').remove('user');
  };

  const auth = useMemo(
    () => ({
      login,
      logout,
      user,
    }),
    [user],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { useAuthContext, AuthProvider };
