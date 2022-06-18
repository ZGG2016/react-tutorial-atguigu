import {Component} from "react";


export default class Demo extends Component{

    state = {count:0}

    add = ()=>{
        // 第一种：对象式的setState
        // const {count} = this.state
        // this.setState({count:count+1},
        //     // callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
        //     ()=>{
        //     console.log("更新后的状态为：", this.state.count)
        // })
        // console.log("更新后的状态为：", this.state.count) // 输出0

        // 第二种：函数式的setState
        // this.setState((state,props)=>{
        //     console.log(state,props)
        //     return {count:state.count+1}
        // })
        // 简写
        this.setState((state)=>({count:state.count+1}))
    }

    render(){
        return(
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}