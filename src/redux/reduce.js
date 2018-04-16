/* Reducersの実装 */

export function countReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "SEND":
      return Object.assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
}
