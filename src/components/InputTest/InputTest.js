import React, { Component } from "react";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps
} from "../../redux/inputTest/connects";

export class InputTest extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.param + ": "}
          <input type="text" onChange={e => this.change(e)} />
        </div>
      </div>
    );
  }

  change(e) {
    let data = this.props.data;
    data[this.props.param] = e.target.value;
    this.props.inputTest({ data: data, updated: true });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTest);
