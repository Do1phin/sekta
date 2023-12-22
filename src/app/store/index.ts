import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import routeSlice from './routeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    route: routeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
