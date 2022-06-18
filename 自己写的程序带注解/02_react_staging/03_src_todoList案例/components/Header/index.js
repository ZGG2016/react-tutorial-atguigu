import React, {Component} from 'react';
import PropTypes from 'prop-types'
import "./index.css"
import {nanoid} from "nanoid";

export default class Index extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }

    //键盘事件的回调
    handlerKeyUp = (event)=>{
        const {keyCode,target} = event
        //判断是否是回车按键
        if(keyCode!==13) return
        // 添加的todo名字不能为空
        if(target.value.trim() === '') {
            alert("输入的值不能为空！")
            return
        }

        //准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        // 将todoObj传递给App
        // 通过给props传一个函数，实现子组件向父组件传数据
        this.props.addTodo(todoObj)
        // 清空输入框
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handlerKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}
