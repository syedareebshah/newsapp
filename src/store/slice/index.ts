/*
 * combines all th existing reducers
 */
import loadingSlice from './loadingSlice';
import userSlice from './userSlice';
import themeSlice from './themeSlice';

import {combineReducers} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import snackSlice from './snackSlice';
import AuthSlice from './AuthSlice';
import swipeSlice from './swipeSlice';
import selectedChannelSlice from './selectedChannelSlice';

const reducers = {
  loading: loadingSlice,
  theme: themeSlice,
  user: userSlice,
  app: appSlice,
  snackBar: snackSlice,
  auth: AuthSlice,
  addsController: swipeSlice,
  selectedChannels: selectedChannelSlice,
};

// Exports

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
