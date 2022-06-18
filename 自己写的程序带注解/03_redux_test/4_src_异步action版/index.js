import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

// 这个也要保留
ReactDOM.render(<App/>, document.getElementById("root"))

// 3. 这里监测redux中状态的变化，只要变化，就调用render，更新页面
store.subscribe(()=>{
    ReactDOM.render(<App/>, document.getElementById("root"))
})
