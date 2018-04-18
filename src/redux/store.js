import { createStore, combineReducers } from "redux";
import { countReducer } from "./count/reduce";
import { inputTestReducer } from "./inputTest/reduce";

/* Storeの実装 */
let rootReducer = combineReducers({
  count: countReducer,
  inputTest: inputTestReducer
  // routing: routerReducer
});

export const store = createStore(rootReducer);
