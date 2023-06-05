import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../features/auth/providers/AuthProvider';

const HomeLayout = () => {
  const { user } = useAuthContext();

  return user.id ? <Navigate to='/dashboard' replace /> : <Outlet />;
};

export { HomeLayout };
