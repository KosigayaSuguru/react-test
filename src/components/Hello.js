import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/connects";

const styleH1 = {
  margin: "0px"
};

const styleClickMe = { margin: "5px 0 5px 0", color: "orange" };
export class Hello extends React.Component {
  render() {
    return (
      <div>
        <div onClick={e => this.click(e)} style={styleClickMe}>
          click me@redux-test count:{this.props.value}
        </div>
        <h1 style={styleH1}>Hello {this.props.name}!</h1>
      </div>
    );
  }

  click(e) {
    console.log(this.props)
    this.props.countup(this.props.value + 1);
  }
}

// reduxと連携させる
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
