import React, {Component} from 'react';
import {connect} from "react-redux"
import {createAddpersonAction} from "../../redux/actions/person";
import {nanoid} from "nanoid";

// 1. 先创建出来UI组件的静态页面，并在 src\App.js 中使用
class Person extends Component {

    // 8. 从容器组件取到状态和操作状态的方法，更新页面
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.jiayiren(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h1>Person组件，上方组件的求和是 {this.props.he}</h1>
                <input ref={c=>this.nameNode=c} type="text" placeholder="输入姓名"/>
                <input ref={c=>this.ageNode=c}  type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map((p)=>{
                            return <li key={p.id}> {p.name} -- {p.age} </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

// 7. 建立容器组件和redux间的联系
export default connect(
    state => ({yiduiren:state.rens,he:state.he}),
    {
        jiayiren: createAddpersonAction
    }
)(Person)