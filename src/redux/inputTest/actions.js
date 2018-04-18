/* Actionsの実装 */

// Action名の定義
export const INPUT_TEST = "INPUT_TEST";

// Action Creators
export function inputTest(value) {
  // Action
  return {
    type: INPUT_TEST,
    value
  };
}
