import * as Actions from "./actions";

/* Reducersの実装 */

// inputTest用
const initState = {
  data: {},
  dataConfirm: {},
  updated: false
};
export function inputTestReducer(state = initState, action) {
  switch (action.type) {
    case Actions.INPUT_TEST:
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
}
