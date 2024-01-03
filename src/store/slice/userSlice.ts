/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { userState } from "../../models/reducers/user";
import { createSlice } from "@reduxjs/toolkit";
const initialState: userState = {
  saveNews: [],
  isNotification: true,
  nightMode: false,
  adminCredentials: {},
  ratingDetail: null,
  fontSize: "2x",
  sharingDetail: null,
};

const usersState = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveNewsResponse: (state: userState, action) => {
      return {
        ...state,
        saveNews: action.payload.news,
      };
    },
    offNotification: (state: userState) => {
      return {
        ...state,
        isNotification: false,
      };
    },
    onNotification: (state: userState) => {
      return {
        ...state,
        isNotification: true,
      };
    },
    enableNightMode: (state: userState) => {
      return {
        ...state,
        nightMode: true,
      };
    },
    disableNightMode: (state: userState) => {
      return {
        ...state,
        nightMode: false,
      };
    },
    setAdminCredentials: (state: userState, action) => {
      return {
        ...state,
        adminCredentials: action.payload,
      };
    },
    onRate: (state: userState, action) => {
      return {
        ...state,
        ratingDetail: action.payload,
      };
    },
    fontSize: (state: userState, action) => {
      return {
        ...state,
        fontSize: action.payload,
      };
    },
    sharingDetail: (state: userState, action) => {
      return {
        ...state,
        sharingDetail: action.payload,
      };
    },
  },
});

export const {
  saveNewsResponse,
  offNotification,
  onNotification,
  enableNightMode,
  disableNightMode,
  setAdminCredentials,
  onRate,
  fontSize,
  sharingDetail,
} = usersState.actions;
export default usersState.reducer;
