import React, { Component } from "react";

const aaa = {
  aaa: "aaaaa",
  url: [
    "https://www.youtube.com/embed/EK8s6E6VbBI?controls=1&showinfo=0&loop=1",
    "https://www.youtube.com/embed/ykeNnlBbma8?controls=1&showinfo=0&loop=1"
  ],
  urlIdx: 0,
  movieSize: 0.5
};

export default class extends Component {
  constructor() {
    super();
    this.state = aaa;
  }
  clickHandler() {
    this.setState({ urlIdx: (this.state.urlIdx + 1) % 2 });
  }
  render() {
    return (
      <div>
        <div>
          this page is component1 {this.props.props1} {this.state.aaa}
        </div>

        <div
          style={{ margin: "5px 0 5px 0", color: "orange" }}
          onClick={e => this.clickHandler()}
        >
          click me
        </div>

        <div>
          <iframe
            width={1280 * this.state.movieSize}
            height={720 * this.state.movieSize}
            title="id1"
            src={this.state.url[this.state.urlIdx]}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}
