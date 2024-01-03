// import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "@ionic/storage";

import { call, put } from "redux-saga/effects";
import * as authActions from "../../store/slice/AuthSlice";

import * as loadingAction from "../../store/slice/loadingSlice";
import * as navigationActions from "../actions/navigationActions";
import * as snackbarActions from "../../store/slice/snackSlice";
import loginUser from "../../services/loginUser";
import { requestAction } from "../../models/types";

// Our worker Saga that logins the user
export default async function* loginAsync(action: requestAction) {
  const store = new Storage();
  await store.create(); // Initialize the storage

  yield put(loadingAction.enableLoading({}));

  //how to call api
  let response = yield call(loginUser, action.data);

  // response = response;

  if (response && response.status == true) {
    await store.set("@token", response.result.token); // Use set() to store data
    yield put(loadingAction.disableLoading({}));
    yield put(
      authActions.onLoginResponse({
        email: action.data.Email,
        token: response.result.token,
      })
    );
    yield call(navigationActions.navigateToHome, "");
    let data = response.message;
    yield put(snackbarActions.enableSnackbar(data));
  } else if (response && response.status == false) {
    yield put(loadingAction.disableLoading({}));
    let data = response.message;
    yield put(snackbarActions.enableSnackbar(data));
  } else {
    yield put(loadingAction.disableLoading({}));
    // let data = "something went wrong";
    // yield put(snackbarActions.enableSnackbar(data));
  }
  // else {
  // yield put(loginActions.loginFailed());
  // yield put(loginActions.disableLoader({}));
  // alert('err');
  // }
}
