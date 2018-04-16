# React-test

## memo

### Redux連携

感覚的にはreduxとreactコンポーネント間の値の受け渡しを、connect()を使って定義するみたいな感じ。。  

* mapStateToProps を使って、storeの値をreactのコンポーネントのpropsに引き渡す
* mapDispatchToProps を使って、実行したいdispatchをreactのコンポーネントのpropsに引き渡す
  ※引き渡されたメソッドを実行すると、storeの状態が更新されるみたいなイメージ
  ※厳密にいうと、dispatchの結果が反映された新しいstoreに差し変わる（はず

> 一番わかりやすい説明

https://mae.chab.in/archives/2885

> サンプルコード

* https://github.com/reactjs/react-router-redux/tree/master/examples/basic
  ※"一番わかりやすい"より実践的

> 参考

* https://qiita.com/mpyw/items/a816c6380219b1d5a3bf#mapdispatchtoprops
* https://qiita.com/kiita312/items/ae3ce31521ad24dd699f

----

### CodeSandbox連携

> GitHubにexportする

サイドメニューのGithubのアイコンから、登録するrepository名を入力してcreateする。

> GitHubと連携させる

1. "Create new Sandbox"から"Import from GitHub"を選んで、連携させたいrepositoryのURLを入力する。
2. importが終わったぽい感じになるので、CodeSanboxで Fork する。
3. ForkしたsandboxのサイドメニューのGitHubを押すと、変更した内容が検出される感じになっているはず。

----

### codepen

> test1

https://codepen.io/wils/pen/RjBjYx?editors=1112

> それ以外もcodepen参照

https://codepen.io/dashboard/

----

### CodeSandbox

> index

https://codesandbox.io/u/KosigayaSuguru
