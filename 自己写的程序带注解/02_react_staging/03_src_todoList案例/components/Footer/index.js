import React, {Component} from 'react';
import "./index.css"

export default class Index extends Component {

    handlerChecked = (event)=>{
        //  勾选 与 不勾选
        this.props.checkAllTodo(event.target.checked)
    }

    handlerAllDone = ()=>{
        this.props.clearAllTodo()
    }

    render() {
        const {todos} = this.props;
        // 已完成个数
        const countDone = todos.reduce((pre,cur)=>{return pre + (cur.done?1:0)},0);
        // 总个数
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    {/*defaultChecked 返回 checked 属性的默认值，只在第一次加载生效*/}
                    {/*checked	设置或返回 checkbox 是否应被选中。*/}
                    <input type="checkbox" onChange={this.handlerChecked} checked={countDone === total && total !== 0 ? true : false}/>
                </label>
                <span>
                    <span>已完成{countDone}</span> / 全部{total}
                </span>
                <button onClick={this.handlerAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}
