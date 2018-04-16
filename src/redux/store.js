import { createStore, combineReducers } from "redux";
import { countReducer } from "./reduce";

/* Storeの実装 */
let rootReducer = combineReducers({
  countReducer
  // routing: routerReducer
});

// export const store = createStore(rootReducer);
export const store = createStore(countReducer);
