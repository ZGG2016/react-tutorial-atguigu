import React,{Component} from "react";
import axios from "axios";

export default class App extends Component{
    // 代理配置方法1：请求server1的数据
    // getStudentsData = ()=>{
    //     // 通过代理请求数据，代理的端口和客户端的端口一样
    //     // 设置的代理在 package.json 中，添加:  "proxy": "http://localhost:5000/"
    //     // 配置的代理并不代表：所有的请求都发给服务器的5000端口，如果在本地服务器3000端口有，就直接响应，没有的话，再发给5000
    //     axios.get("http://localhost:3000/students").then(
    //         response => {console.log("成功了！",response.data);},
    //         error => {console.log("失败了！",error);}
    //     )
    // }

    // 代理配置方法2：请求server1和server2的数据
    // 通过 setupProxy.js 配置
    getStudentsData = ()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('成功了',response.data);},
            error => {console.log('失败了',error);}
        )
    }

    getCarsData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('成功了',response.data);},
            error => {console.log('失败了',error);}
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.getStudentsData}>点我获取学生数据</button>
                <button onClick={this.getCarsData}>点我获取汽车数据</button>
            </div>
        )
    }
}