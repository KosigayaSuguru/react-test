import React from "react";
import InputTest from "../components/InputTest/InputTest";
import InputTestConfirm from "../components/InputTest/InputTestConfirm";

const confirms = ["hoge", "moge"];
export default () => (
  <div>
    <div style={{ margin: "5px 0 5px 0" }}>input-test with Redux</div>
    <InputTest param="hoge" />
    <InputTest param="moge" />
    <InputTestConfirm param={confirms} />
  </div>
);
