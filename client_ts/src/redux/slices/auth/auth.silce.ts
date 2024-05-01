import { createAction, createSlice } from "@reduxjs/toolkit";
import { AuthState, initialState } from "../../../services/useAuthService";
// export interface AuthState {
//   user: {
//     name: string;
//     password: string;
//   };
//   name: string;
//   token: string;
//   isAuthenticated: boolean;
//   loading: boolean;
// }

// export const initialState: AuthState = {
//   user: {
//     name: "ale203",
//     password: "123",
//   },
//   name: "FACUNDO",
//   token: "",
//   isAuthenticated: false,
//   loading: true,
// };

const setAuth = createAction<any>("setAuth");

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
const reducer = slice.reducer;

// const rootReducer = (state = initialState, { payload }) => {
//   if (payload) {
//     //* Nombre de mi Reducer : (ej: "home" (string))
//     const nameReducer = Object.keys(payload)[0];
//     //* Objeto Reducer : (ej: state.home (object))
//     const stateReducer = state[nameReducer];
//     //* Reduzco mi payload : (ej: payload.home (object))
//     payload = payload[nameReducer];

//     return { ...state, [nameReducer]: { ...stateReducer, ...payload } };
//   } else return { ...state };
// };

// export const { setAuth } = slice.actions;

export default reducer;
// export default rootReducer;
