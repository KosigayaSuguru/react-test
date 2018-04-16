import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hello from "../components/Hello";
import Route1 from "../routes/Route1";
import Route2 from "../routes/Route2";
import Route3 from "../routes/Route3";
import Always from "../routes/Always";

// スタイル読み込み
import { styles } from "../components/style/common";

// ルータで出力される部分用のスタイル
let myStyles = Object.assign({}, styles);
myStyles.padding = "0 20px 0 20px";

export const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">/</Link>
        </li>
        <li>
          <Link to="/route1">route1</Link>
        </li>
        <li>
          <Link to="/route2">route2</Link>
        </li>
        <li>
          <Link to="/route3">route3</Link>
        </li>
      </ul>
      <div style={myStyles}>
        <Route component={Always} />
        <Route exact path="/" component={Hello} />
        <Route path="/route1" component={Route1} />
        <Route path="/route2" component={Route2} />
        <Route path="/route3" component={Route3} />
      </div>
    </div>
  </BrowserRouter>
);
