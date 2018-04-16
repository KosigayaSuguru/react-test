import send from "./actions";

// Connect to Redux
export function mapStateToProps(state) {
  return {
    value: state.value
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    }
  };
}
