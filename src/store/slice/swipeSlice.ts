/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { swipeState } from "../../models/reducers/swipe";
import { createSlice } from "@reduxjs/toolkit";
// import analytics from "@react-native-firebase/analytics";

const initialState: swipeState = {
  swipeCount: 0,
  onExpandDetail: 0,
  onEndReachAd: false,
};

const swipeStateSlice = createSlice({
  name: "addsController",
  initialState,
  reducers: {
    swipeCount: (state: swipeState) => {
      return {
        ...state,
        swipeCount: state.swipeCount == 3 ? 0 : state.swipeCount + 1,
      };
    },
    onExpandDetails: (state: swipeState) => {
      return {
        ...state,
        onEndReachAd: true,
        onExpandDetail:
          state.onExpandDetail == 4 ? 0 : state.onExpandDetail + 1,
      };
    },
    onEndReachAd: (state: swipeState) => {
      return {
        ...state,
        onEndReachAd: true,
      };
    },
  },
});

export const { swipeCount, onExpandDetails, onEndReachAd } =
  swipeStateSlice.actions;
export default swipeStateSlice.reducer;
