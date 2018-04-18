/* Actionsの実装 */

// Action名の定義
export const COUNTUP = "COUNTUP";
export const COUNTDOWN = "COUNTDOWN";

// Action Creators
export function countup(value) {
  // Action
  return {
    type: COUNTUP,
    value
  };
}

// Action Creators
export function countdown(value) {
  // Action
  return {
    type: COUNTDOWN,
    value
  };
}
