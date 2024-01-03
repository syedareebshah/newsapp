import { call, put, select } from "redux-saga/effects";

import * as appAction from "../../store/slice/appSlice";
import * as loadingAction from "../../store/slice/loadingSlice";
import * as snackbarActions from "../../store/slice/snackSlice";
import getCategoryNews from "../../services/getCategoryNews";
import { reducerState, requestAction } from "../../models/types";

// Our worker Saga that logins the user
export default function* AllNewsAsync(action: requestAction) {
  try {
    yield put(loadingAction.enableLoading());
    let news: Promise<any> = yield select(
      (state: reducerState) => state.app.newsStoreData
    );
    let temp = { ...news };

    let response: Promise<any> = yield call(
      getCategoryNews,
      action.payload,
      1,
      30
    );

    if (response && response.status == true) {
      if (response?.data.length > 0) {
        temp[action.payload.category] = response.data;

        yield put(
          appAction.getCategoryNewsResponse({
            news: temp,
            key: action.payload.category,
          })
        );
      }
      yield put(loadingAction.disableLoading({}));
    } else if (response.message == "Network request failed") {
      yield put(loadingAction.disableLoading({}));

      yield put(
        appAction.getCategoryNewsResponse({
          news: temp,
          key: action.payload.category,
        })
      );
      yield put(snackbarActions.enableSnackbar("اپنا انٹرنیٹ کنکشن چیک کریں"));
    } else {
      yield put(loadingAction.disableLoading({}));
      let data = "سرور سے رابطہ منقطع ہوگیا ہے";
      yield put(snackbarActions.enableSnackbar(data));
    }
  } catch (error) {
    console.log("errorerror", JSON.stringify(error));

    yield put(loadingAction.disableLoading({}));
    let data = "سرور سے رابطہ منقطع ہوگیا ہے";
    yield put(snackbarActions.enableSnackbar(data));
  }
}
