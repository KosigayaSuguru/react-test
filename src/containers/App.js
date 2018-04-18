import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Hello from "../components/Hello";
import Route1 from "../routes/Route1";
import Route2 from "../routes/Route2";
import Route3 from "../routes/Route3";
import Always from "../routes/Always";

// redux連携用
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/count/connects";

// スタイル読み込み
import { styles } from "../components/style/common";

// ルータで出力される部分用のスタイル
let myStyles = Object.assign({}, styles);
myStyles.margin = "0 20px";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="container">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    /
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/route1" activeClassName="active">
                    route1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/route2" activeClassName="active">
                    route2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/route3" activeClassName="active">
                    route3
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main style={myStyles}>
            <Route component={Always} />
            <Route exact path="/" component={Hello} />
            <Route path="/route1" component={Route1} />
            <Route path="/route2" component={Route2} />
            <Route path="/route3" component={Route3} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

// reduxと連携させる
export default connect(mapStateToProps, mapDispatchToProps)(App);
