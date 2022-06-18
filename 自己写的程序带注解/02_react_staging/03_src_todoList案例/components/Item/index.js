import React, {Component} from 'react';
import "./index.css"

export default class Index extends Component {

    //标识鼠标移入、移出
    state = {mouse:false}

    //鼠标移入、移出的回调
    handlerMouse = (flag)=>{
        return ()=>{
            //console.log(flag);
            this.setState({"mouse":flag});
        }
    }

    // 勾选、取消勾选某一个todo的回调
    handlerChecked = (id)=>{
        return (event)=>{
            // 通过 App --> List --> Item 这种祖孙传递props的形式修改状态
            const {updateTodo} = this.props;
            updateTodo(id,event.target.checked);
        }
    }

    // 删除一个todo的回调
    // 这里不使用高阶函数
    handleDelete = (id)=>{
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
    }


    render() {
        // 通过 this.props 接收来自父组件 List 的数据
        const {id,name,done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{ backgroundColor: mouse?'#ddd':'white'}} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handlerChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={ ()=>this.handlerDelete(id) } className="btn btn-danger" style={{ display: mouse?'block':'none' }}>删除</button>
            </li>
        )
    }
}
