import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/connects";

const styleH1 = {
  margin: "0px"
};

const styleClickMe = { margin: "5px 0 5px 0" };
export class Hello extends React.Component {
  render() {
    return (
      <div>
        <div style={styleClickMe}>
          <span className="count" onClick={e => this.clickPlus(e)}>
            {" "}
            +{" "}
          </span>
          <span>click</span>
          <span className="count" onClick={e => this.clickMinus(e)}>
            {" "}
            -{" "}
          </span>
          @redux-test count:{this.props.value}
        </div>
        <h1 style={styleH1}>Hello {this.props.name}!</h1>
      </div>
    );
  }

  clickPlus(e) {
    console.log(this.props);
    this.props.countup(this.props.value);
  }

  clickMinus(e) {
    console.log(this.props);
    this.props.countdown(this.props.value);
  }
}

// reduxと連携させる
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
