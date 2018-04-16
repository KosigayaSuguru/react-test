import send from "./actions";

// Connect to Redux
export function mapStateToProps(state) {
  return {
    value: state.value
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    countup(value) {
      dispatch(send(value));
    },
    countupDouble(value) {
      dispatch(send(value*2));
    }
  };
}
