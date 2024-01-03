/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { snackbarState } from "../../models/reducers/snackbar";
import { createSlice } from "@reduxjs/toolkit";
const initialState: snackbarState = {
  isSnackbarVisible: false,
  message: "",
};

const SnackbarState = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    enableSnackbar: (state: snackbarState, action: any) => {
      return {
        ...state,
        isSnackbarVisible: true,
        message: action.payload,
      };
    },
    disableSnackbar: (state: snackbarState) => {
      return {
        ...state,
        isSnackbarVisible: false,
        message: "",
      };
    },
  },
});

export const { enableSnackbar, disableSnackbar } = SnackbarState.actions;
export default SnackbarState.reducer;
