export interface appState {
  language: string;
  channels: Object;
  tabs: Array<any>;
  newsStoreData: Object;
  onNewsPressCount: any;
  onExpandDetail: any;
  isRatingDialogVisible: boolean;
  onSwipe: any;
  currentRoute: string;
  selectedTab: any;
  newsDetails: any;
}

export interface responseAction {
  type: string;
  payload: any;
}
