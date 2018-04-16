import React, { Component } from "react";
import axios from "axios";

// 元ネタ
// https://headlines.yahoo.co.jp/rss/all-dom.xml
const rssUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fheadlines.yahoo.co.jp%2Frss%2Fall-dom.xml";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rss: null,
      loading: false
    };
  }

  componentDidMount() {
    this.reload();
  }

  render() {
    // console.log(this.props.onClick)
    if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    }

    // rssの読み込みが終わってない（rss2jsonからレスポンスが返って来てない）時用
    if (this.state.rss === null) {
      return <div />;
    }

    // li の奇数行用スタイル
    const listStyle = {
      margin: "0 0 0.5em 0",
      fontSize: "0.75em"
    };
    // li の偶数行用スタイル
    const listStyle2 = Object.assign({}, listStyle, {
      backgroundColor: "#ddffdd"
    });

    // liタグ部分の生成
    let t = this.state.rss.data.items.map((item, idx) => {
      return (
        <li
          key={idx}
          // 偶数行に色付けする
          style={idx % 2 === 1 ? listStyle2 : listStyle}
        >
          <a href={item.link} target={"_blank"}>
            {item.title}
          </a>
          <br />公開日：{item.pubDate}
        </li>
      );
    });
    return (
      <div>
        <span onClick={e => this.reload()}>reload</span>
        <br />
        <span style={{ fontSize: "0.5em", color: "red" }}>
          ※rss2jsonを経由してるせいか公開日がおかしい（日本時間だと+9時間が正しい）
        </span>
        <ul style={{ textAlign: "left" }}>{t}</ul>
      </div>
    );
  }

  reload() {
    console.log("reload");
    // rss2jsonのキャッシュ対策でverパラメータつける
    axios.get(rssUrl + "?ver=" + Date.now() / 100).then(res => {
      this.setState({ rss: res, loading: false });
    });
    this.setState({ loading: true });
  }
}
