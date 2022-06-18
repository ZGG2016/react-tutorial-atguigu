import React,{Component} from "react";
// 3. 在 App 中使用容器组件，而不是 UI 组件
import Count from "./containers/count";
import store from "./redux/store";

export default class App extends Component{
  render() {
    return(
        <div>
            {/* 4. 将 store 通过 props 传给容器组件，这样容器组件就连接到了redux */}
          {/*<Count store={store}/>*/}
          {/*  在 src\index.js 中使用优化方法，就不用像上面那样传 store 了*/}
            <Count/>
        </div>
    )
  }
}
