import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { AuthPage, CreateRoutePage, MainPage } from '../../pages';
import { HomeLayout, ProtectedLayout } from '../ui/layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<AuthPage action={'login'} />} />
        <Route path='register' element={<AuthPage action={'register'} />} />
      </Route>

      <Route element={<ProtectedLayout roles={['user']} />}>
        <Route path='dashboard' element={<p>Dashboard (private)</p>} />
        <Route path='create-route' element={<CreateRoutePage />} />
      </Route>

      <Route path='*' element={<p>Theres nothing here: 404!</p>} />
    </>,
  ),
);

export { router };
