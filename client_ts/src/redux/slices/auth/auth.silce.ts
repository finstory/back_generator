import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  user: {
    name: string;
    password: string;
  };
  name: string;
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
}

export const initialState: AuthState = {
  user: {
    name: "ale203",
    password: "123",
  },
  name: "FACUNDO",
  token: "",
  isAuthenticated: false,
  loading: true,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
