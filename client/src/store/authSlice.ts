import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../types/user';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggingIn: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    loggingOut: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { loggingIn, loggingOut } = authSlice.actions;

export const activeToken = (state: { auth: AuthState }) => state.auth.token;
export const currentUser = (state: { auth: AuthState }) => state.auth.user;

export default authSlice.reducer;