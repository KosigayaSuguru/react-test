/* Reducersの実装 */

export function countReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "COUNTUP":
      return Object.assign({}, state, {
        value: action.value + 1
      });
    case "COUNTDOWN":
      return Object.assign({}, state, {
        value: action.value - 1
      });
    default:
      return state;
  }
}
