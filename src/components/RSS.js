import React, { Component } from "react";
import axios from "axios";

// 元ネタ
// https://headlines.yahoo.co.jp/rss/all-dom.xml
const rssUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fheadlines.yahoo.co.jp%2Frss%2Fall-dom.xml";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      rss: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  render() {
    // rssの読み込みが終わってない（rss2jsonからレスポンスが返って来てない）時用
    if (this.state.rss === null) {
      return <div />;
    }

    // liタグ部分の生成
    let t = this.state.rss.data.items.map((item, idx) => {
      return (
        <li
          key={idx}
          // 偶数行に色付けする
          style={idx % 2 === 1 ? { backgroundColor: "#ddffdd" } : {}}
        >
          <a href={item.link} target={"_blank"}>
            {item.title}
          </a>
        </li>
      );
    });
    return (
      <div>
        <span onClick={e => this.reload()}>reload</span>
        <ul style={{ textAlign: "left" }}>{t}</ul>
      </div>
    );
  }

  reload() {
    console.log("reload");
    // rss2jsonのキャッシュ対策でverパラメータつける
    axios.get(rssUrl + "&ver=" + Date.now()).then(res => {
      this.setState({ rss: res });
    });
  }
}
