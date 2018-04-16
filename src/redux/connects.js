import { countup, countdown } from "./actions";

// Connect to Redux
export function mapStateToProps(state) {
  return {
    value: state.value
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    countup(value) {
      dispatch(countup(value));
    },
    countdown(value) {
      dispatch(countdown(value));
    }
  };
}
