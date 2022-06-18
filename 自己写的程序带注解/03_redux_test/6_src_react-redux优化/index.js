import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import {Provider} from "react-redux";

// 使用如下第三步监测redux方法，这个也要保留
// ReactDOM.render(<App/>, document.getElementById("root"))

// 3. 这里监测redux中状态的变化，只要变化，就调用render，更新页面
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById("root"))
// })
// 优化2：如果使用了 react-redux，就不用使用上面的方法监测redux中状态的变化，容器组件会监测

// 优化3：如果存在多个容器组件，就不需要像 src/APP.js 中那样传 store 了，
// 可以按如下方法：
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"))

