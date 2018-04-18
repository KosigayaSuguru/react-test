import React, { Component } from "react";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps
} from "../../redux/inputTest/connects";

export class InputTestConfirm extends Component {
  render() {
    // console.log("constructor");
    // console.log(this.props);

    let list = [];
    //inputed がフィールド名
    //this.props.dataConfirm[inputed] が値
    for (const inputed of this.props.param) {
      //指定されたフィールド名の値が入っていなければ空文字列、入っていればその値をtmpに設定する
      const tmp =
        this.props.dataConfirm[inputed] === undefined
          ? ""
          : this.props.dataConfirm[inputed];

      //出力部分のHTMLタグを生成する
      const tag = (
        <span key={inputed}>
          {`${inputed}: ${tmp}`}
          <br />
        </span>
      );

      //ループ分、生成したタグを追加していく
      list.push(tag);
    }
    return (
      <div>
        <div>
          <div
            style={{ margin: "5px 0 5px 0", color: "orange" }}
            onClick={e => this.click(e)}
          >
            confirm
          </div>
        </div>
        <div>{list}</div>
      </div>
    );
  }

  click(e) {
    //入力された内容（data）を確定（dataConfirm）側にコピーする
    //※assign使って新しいオブジェクトを渡すこと（dataの参照を渡さないこと）
    this.props.inputTest({
      dataConfirm: Object.assign({}, this.props.data),
      updated: false
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTestConfirm);
