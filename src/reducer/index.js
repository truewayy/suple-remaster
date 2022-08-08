import { combineReducers } from "redux";
import cart from "./cart";
import loading from "./loading";

// Redcer-Persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  data,
  cart,
  loading,
});

export function* rootSaga() {
  yield all([dataSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
