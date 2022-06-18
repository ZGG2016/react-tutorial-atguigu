import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Item from "../Item"
import "./index.css"

export default class Index extends Component {

    //对 接收的props进行：类型、必要性的限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }

    render() {
        // 通过 this.props 接收来自父组件 App 的数据
        const {todos,updateTodo,deleteTodo} = this.props;
        return (
            <ul className="todo-main" >
                {/*根据传来的数组的长度，判断需要几个Item组件*/}
                {/*同理，数据通过父组件 List 传给子组件 Item*/}
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}
