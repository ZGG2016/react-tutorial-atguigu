// import React, {Component} from 'react';
//
// // 1. 将 Count 组件改造成 UI 组件，即不包含任何 redux api 【接下来的操作流程参考react-redux模型图理解】
// // 5. 当在这里触发加和事件时，执行 `increment` 函数，而这个函数中的加和逻辑来自父组件，即容器组件，通过 props 取得，
// //    这样，UI组件中触发的事件的执行逻辑，会通过 props 传到容器组件执行，再通过容器组件，dispatch 给 reducer 执行，
// //    在 reducer 中执行完成后，得到了最新的状态，这个最新的状态也是来自父组件，即容器组件，通过 props 取得。
// //    （加和逻辑和最新状态如何传来的，见第6步）
// export default class CountUI extends Component {
//     // 组件还可以有自己的状态
//     state = {"a":1}
//
//     increment = ()=>{
//         const {value} = this.selectNumber
//         this.props.jia(value*1)
//     }
//
//     decrement = ()=>{
//         const {value} = this.selectNumber
//         this.props.jian(value*1)
//     }
//
//     incrementIfOdd = ()=>{
//         const {value} = this.selectNumber
//         if(this.props.count % 2 !== 0){
//             this.props.jia(value*1)
//         }
//     }
//     // 等1秒再加
//     incrementAsync = ()=>{
//         const {value} = this.selectNumber
//         this.props.jiaAsync(value*1,500)
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>当前求和为：{this.props.count}</h1>
//                 <select ref={c => this.selectNumber = c}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                 </select>&nbsp;
//                 <button onClick={this.increment}>+</button>&nbsp;
//                 <button onClick={this.decrement}>-</button>&nbsp;
//                 <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
//                 <button onClick={this.incrementAsync}>异步加</button>&nbsp;
//             </div>
//         );
//     }
// }