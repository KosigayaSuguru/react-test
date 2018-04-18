import { inputTest } from "./actions";

// Connect to Redux
export function mapStateToProps(state) {
  return {
    data: state.inputTest.data,
    dataConfirm: state.inputTest.dataConfirm,
    updated: state.inputTest.updated
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    inputTest(value) {
      dispatch(inputTest(value));
    }
  };
}
