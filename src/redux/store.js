import { createStore, combineReducers } from "redux";
import { countReducer, inputTestReducer } from "./count/reduce";

/* Storeの実装 */
let rootReducer = combineReducers({
  count: countReducer,
  inputTest: inputTestReducer
  // routing: routerReducer
});

export const store = createStore(rootReducer);
