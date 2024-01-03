/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { authState } from "../../models/reducers/auth";
import { createSlice } from "@reduxjs/toolkit";
const initialState: authState = {
  isLoggedIn: false,
  id: -1,
  username: "",
  password: "",
  token: "",
  email: "",
};

const AuthState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLoginResponse: (state: authState) => {
      return {
        ...state,
        isLoadingVisible: true,
      };
    },
    logOut: (state: authState) => {
      return {
        ...state,
        isLoadingVisible: true,
      };
    },
    // loginFailed: (state: authState, action) => {
    //   return {

    //   };
    // },
    requestRegister: (state: authState, action) => {
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        provider: "email",
        isLoggedIn: true,
      };
    },
    // requestLogin: (state: loadingState, action) => {
    //   return {

    //   };
    // },
  },
});

export const { onLoginResponse, logOut, requestRegister } = AuthState.actions;
export default AuthState.reducer;
