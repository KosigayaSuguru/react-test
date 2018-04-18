import { inputTest } from "./actions";

// Connect to Redux
export function mapStateToProps(state) {
  return {
    data: state.inputTest.data
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    inputTest(value) {
      dispatch(inputTest(value));
    }
  };
}
