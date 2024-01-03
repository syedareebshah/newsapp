import { ThemeState } from "./reducers/theme";

export interface requestAction {
  type: string;
  payload: any;
}

export interface responseAction {
  type: string;
  payload: any;
}

export interface loadingAction {
  type: string;
}

export interface snackBarAction {
  type: string;
  message: any;
}

export interface snackBarState {
  isSnackbarVisible: boolean;
  message: string;
}

export interface loadingState {
  isLoadingVisible: boolean;
  refreshing: boolean;
}

export interface authState {
  isLoggedIn: boolean;
  id: number;
  username: string;
  password: string;
  token: string;
  email: string;
}

export interface appState {
  language: string;
  channels: Object;
  tabs: Array<any>;
  newsStoreData: Object;
  onNewsPressCount: any;
  onExpandDetail: any;
  isRatingDialogVisible: boolean;
  currentRoute: string;
}

export interface userState {
  saveNews: any[];
  isNotification: boolean;
  nightMode: boolean;
  adminCredentials: object;
  ratingDetail: any;
  fontSize: any;
  sharingDetail: null;
}

export interface reducerState {
  addsController: any;
  loading: loadingState;
  app: appState;
  snackBar: snackBarState;
  user: userState;
  theme: ThemeState;
  auth: authState;
  selectedChannels: { channel: [] };
}

export interface swipeState {
  swipeCount: number;
  onExpandDetail: number;
}
