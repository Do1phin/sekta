import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../shared/types/authTypes';

interface IAuthState {
  isAuthorized: boolean;
  isRegistered: boolean;
  user: IUser | null;
}

const initialState: IAuthState = {
  isAuthorized: false,
  isRegistered: false,
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    changeAuthorized: (state, action) => {
      state.isAuthorized = action.payload.value;
    },
    changeRegistered: (state, action) => {
      state.isRegistered = action.payload.value;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { changeAuthorized, changeRegistered, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
