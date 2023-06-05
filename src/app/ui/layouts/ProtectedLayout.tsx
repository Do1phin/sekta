import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { storageHelper } from '../../../shared/helpers';

interface IProtectedLayoutProps {
  roles: string[];
}

const ProtectedLayout = (props: IProtectedLayoutProps) => {
  const { roles } = props;

  const user = JSON.parse(storageHelper('local').get('user') || '{}');

  return roles.length && roles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} replace />
  );
};

export { ProtectedLayout };
