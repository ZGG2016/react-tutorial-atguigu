//引入Count的UI组件
// import CountUI from '../../components/count'

//引入connect用于连接UI组件与redux
import {connect} from "react-redux"
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action_creator";
import React, {Component} from "react";

//优化4：整合 UI组件和容器组件
class CountUI extends Component {
    // 组件还可以有自己的状态
    state = {"a":1}

    increment = ()=>{
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }

    decrement = ()=>{
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }

    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    }
    // 等1秒再加
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1,500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

// 2. 创建容器组件，只有它使用 redux api，这样容器组件就连接到了UI组件
// 使用connect()()创建并暴露一个Count的容器组件
// 6. 容器组件通过 props 将 “状态”和“操作状态的方法”（redux中的，具体是通过store传reducer中的） 传给UI组件，即父给子传
// 添加这两个参数后，就把它们的返回值作为props传给了子组件，即UI组件
// export default connect(mapStateToProps,mapDispatchToProps)(CountUI) // 给connect()函数的返回值传参数

// const CountContainer =  connect()(CountUI)
// export default CountContainer

// 优化1
export default connect(
    state => ({count:state}),

    //mapDispatchToProps的一般写法
    /* dispatch => ({
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }) */

    //mapDispatchToProps的简写
    {
        // 这里的 createIncrementAction 本身就是一个函数，可以接收参数，相当于：`jia: data => ({type:INCREMENT,data})`
        // 而且，react-redux会自动调用 dispatch 分发
        // 所以，mapDispatchToProps 可以接收一个函数，也可以接收一个对象
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(CountUI)