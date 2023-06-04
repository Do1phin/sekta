import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { FC } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from '../../../features/auth/providers/AuthProvider';
import { queryClient } from '../../config/react-query';
import { router } from '../../providers/RouterProvider';
import { store } from '../../store/';

import './App.styles.scss';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export { App };
