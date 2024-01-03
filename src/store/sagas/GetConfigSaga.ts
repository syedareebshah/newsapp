import { call, put } from "redux-saga/effects";
import * as appAction from "../../store/slice/appSlice";
import * as loadingAction from "../../store/slice/loadingSlice";
import getConfigs from "../../services/getConfigs";

// Our worker Saga that logins the user
export default function* ConfigAsync() {
  try {
    console.log("gfdsgfgfd");
    yield put(loadingAction.enableLoading({}));
    let response = yield call(getConfigs);
    console.log("response", response);

    if (response) {
      let tempTabIndex: any = [];
      var sortable = [];
      for (var category in response?.Category) {
        sortable.push([category, response?.Category[category]]);
      }
      sortable.sort(function (a, b) {
        return a[1].order - b[1].order;
      });
      sortable?.map((item, index) => {
        var tabItem: any = {};
        tabItem["key"] = index;
        tabItem["title"] = item[1].name;
        tabItem["index"] = item[0];
        tabItem["categories"] = item[1].categories;
        tempTabIndex.push(tabItem);
      });

      if (tempTabIndex.length > 0) {
        yield put(
          appAction.getConfigResponse({
            tabs: tempTabIndex,
            channels: response?.Channel,
          })
        );
      } else {
        yield put(loadingAction.disableLoading());
      }
    }

    yield put(loadingAction.disableRefreshing());
  } catch (error) {
    // let data = 'something went wrong';
    // yield put(snackbarActions.enableSnackbar(data));
    yield put(loadingAction.disableLoading());
    yield put(loadingAction.disableRefreshing());
  } finally {
    yield put(loadingAction.disableLoading());
    yield put(loadingAction.disableRefreshing());
  }
}
