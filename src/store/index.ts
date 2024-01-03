// import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "@ionic/storage";
import rootReducers from "../store/slice";
import sagas from "../store/sagas";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
const init = () => {
  const store = new Storage();
  store.create();
  return store;
};
const customStorage = {
  getItem: async (key: any) => {
    console.log("this", this);

    let store = init();

    const value = await store.get(key);
    return value;
  },
  setItem: async (key, value) => {
    let store = init();

    await store.set(key, value);
  },
  removeItem: async (key) => {
    let store = init();

    await store.remove({ key });
  },
};
const config = {
  key: "root",
  storage: customStorage,
  blacklist: ["loading", "addsController"],
  debug: false, //to get useful logging
};
import { persistStore, persistReducer } from "redux-persist";
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

// if (__DEV__) {
//  middleware.push(createLogger());
// }

const reducers = persistReducer(config, rootReducers);
const enhancers = [...middleware];
const persistConfig: any = { enhancers };

export const store = configureStore({
  reducer: reducers,
  middleware: enhancers,
});

sagaMiddleware.run(sagas);
export const persistor = persistStore(store, persistConfig);
