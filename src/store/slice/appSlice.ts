/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { appState } from "../../models/reducers/app";
import { createSlice } from "@reduxjs/toolkit";

const initialState: appState = {
  language: "en",
  channels: {},
  tabs: [],
  newsStoreData: {},
  onNewsPressCount: 0,
  onExpandDetail: 0,
  onSwipe: 0,
  isRatingDialogVisible: false,
  currentRoute: "Home",
  selectedTab: "TopNews",
  newsDetails: [],
};

const AppState = createSlice({
  name: "app",
  initialState,
  reducers: {
    getConfigResponse: (state: any, action) => {
      console.log({ state });
      return {
        ...state,
        tabs: action.payload.tabs,
        channels: action.payload.channels,
      };
    },
    getCategoryNewsResponse: (state: any, action) => {
      return {
        ...state,
        newsStoreData: action.payload.news,
      };
    },
    onPressNewsDetailCount: (state: any, action) => {
      return {
        ...state,
        onNewsPressCount: action.payload,
      };
    },
    onExpandDetails: (state: any) => {
      return {
        ...state,
        onExpandDetail:
          state.onExpandDetail == 4 ? 0 : state.onExpandDetail + 1,
      };
    },
    onSwipe: (state: any) => {
      return {
        ...state,
        onSwipe: state.onSwipe == 3 ? 0 : state.onSwipe + 1,
      };
    },
    enableRatingDialog: (state: any) => {
      return {
        ...state,
        isRatingDialogVisible: true,
      };
    },
    disableRatingDialog: (state: any) => {
      return {
        ...state,
        isRatingDialogVisible: false,
      };
    },
    saveCurrentRoute: (state: any, action) => {
      return {
        ...state,
        currentRoute: action.payload,
      };
    },
    onSelectTab: (state: any, action) => {
      return {
        ...state,
        selectedTab: action.payload,
      };
    },
    onExpandNews: (state: any, action) => {
      return {
        ...state,
        newsDetails: action.payload,
      };
    },
  },
});

export const {
  getConfigResponse,
  getCategoryNewsResponse,
  onPressNewsDetailCount,
  onExpandDetails,
  enableRatingDialog,
  disableRatingDialog,
  onSwipe,
  saveCurrentRoute,
  onSelectTab,
  onExpandNews,
} = AppState.actions;
export default AppState.reducer;
