import React, {Component} from "react";
import {connect} from "react-redux"
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/actions/count";


class Count extends Component {
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
                <h1>Count组件，下方组件的人数是 {this.props.renshu}</h1>
                <h4>当前求和为：{this.props.count}</h4>
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

export default connect(
    state => ({count:state.he,renshu:state.rens.length}),

    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(Count)