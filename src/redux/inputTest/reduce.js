import * as Actions from "./actions";

/* Reducersの実装 */

// inputTest用
const initState = {
  data: {}
};
export function inputTestReducer(state = initState, action) {
  switch (action.type) {
    case Actions.INPUT_TEST:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
