/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { loadingState } from "../../models/reducers/loading";
import { createSlice } from "@reduxjs/toolkit";
const initialState: loadingState = {
  isLoadingVisible: false,
  refreshing: false,
};

const loadingStateSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enableLoading: (state: loadingState) => {
      return {
        ...state,
        isLoadingVisible: true,
      };
    },
    disableLoading: (state: loadingState) => {
      return {
        ...state,
        isLoadingVisible: false,
      };
    },
    disableRefreshing: (state: loadingState) => {
      return {
        ...state,
        refreshing: false,
      };
    },
    enableRefreshing: (state: loadingState) => {
      return {
        ...state,
        refreshing: true,
      };
    },
  },
});

export const {
  enableLoading,
  disableLoading,
  disableRefreshing,
  enableRefreshing,
} = loadingStateSlice.actions;
export default loadingStateSlice.reducer;
