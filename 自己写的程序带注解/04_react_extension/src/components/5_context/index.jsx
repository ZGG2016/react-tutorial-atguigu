import React, {Component} from "react";
import './index.css'

//创建Context对象
const MyContext = React.createContext()
// Provider 仅适用于类组件
// Consumer 函数组件与类组件都可以
const {Provider,Consumer} = MyContext

export default class A extends Component{

    state = {username:'tom',age:18}

    render() {
        const {username,age} = this.state
        return(
            <div className="parent">
                <h1>我是A组件</h1>
                <h4>我的用户名是：{username}</h4>
                {/*<B username={username}/>*/}
                {/*这里是一个对象 {username:username,age:age}*/}
                <Provider value={{username,age}}>
                    <B/>
                </Provider>
            </div>
        )
    }
}

class B extends Component{

    render() {
        return(
            <div className="son">
                <h1>我是B组件</h1>
                {/*父给子传，通过props*/}
                <h4>我从组件A接收到用户名是：{this.props.username}</h4>
                <C/>
            </div>
        )
    }
}

// class C extends Component{
//     //声明接收context
//     static contextType = MyContext
//     render() {
//         //父给孙传，通过context
//         const {username,age} = this.context
//         return(
//             <div className="grandson">
//                 <h1>我是C组件</h1>
//                 {/*<h4>我从组件A接收到用户名是：{this.context}</h4>*/}
//                 <h4>我从组件A接收到用户名是：{username}, 年龄是：{age}</h4>
//             </div>
//         )
//     }
// }

function C() {
    return(
        <div className="grandson">
            <h1>我是C组件</h1>
                <h4>我从组件A接收到用户名是：
                    <Consumer>
                        {value =>  `${value.username}, 年龄是：${value.age}`}
                    </Consumer>
                </h4>
        </div>
    )
}