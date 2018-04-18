import { countup, countdown } from "./actions";

// Connect to Redux
export function mapStateToProps(state) {
  return {
    value: state.count.value
  };
}

// returnするメソッドがreduxと連携したコンポーネントのpropsに渡される
// 下記の例でいうと、reduxと連携したコンポーネントから、
// this.pops.countup, etc
// が出来るようになる
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
