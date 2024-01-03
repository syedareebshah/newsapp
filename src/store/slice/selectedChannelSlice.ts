/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { channelState } from "../../models/reducers/selectedChannel";
import { createSlice } from "@reduxjs/toolkit";
const initialState: channelState = {
  channel: [],
};

const selectedChannelSlice = createSlice({
  name: "selectedChannels",
  initialState,
  reducers: {
    getSelectedChannels: (state: channelState, action) => {
      return {
        ...state,
        channel: action.payload.channel,
      };
    },
  },
});

export const { getSelectedChannels } = selectedChannelSlice.actions;
export default selectedChannelSlice.reducer;
