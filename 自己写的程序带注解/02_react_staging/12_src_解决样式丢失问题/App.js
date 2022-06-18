import React,{Component} from "react";
import {Route,Switch} from 'react-router-dom'
import About from './pages/About'   // 路由组件
import Home from './pages/Home'     // 路由组件
import Header from './components/Header'  // 一般组件
import MyNavLink from './components/MyNavLink'  // 一般组件

export default class App extends Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 如果路由链接添加了 `/atguigu`（多级路径）,那么在刷新页面的时候，就会出现样式丢失的问题 */}
                            {/* http://localhost:3000/ 服务器的根路径就是 src 下的 public 目录 */}
                            {/* 解决办法有三种：*/}
                            {/* 1.在 index.html 中，在导入css文件时，去掉当前目录的点号，即：【常用】 */}
                            {/* <link rel="stylesheet" href="/css/bootstrap.css"> */}
                            {/* 2.在 index.html 中，在导入css文件时，使用绝对路径，即： */}
                            {/* <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css"> */}
                            {/* 3.使用 HashRouter 代替 BrowserRouter*/}
                            <MyNavLink to="/atguigu/about"> About </MyNavLink>
                            <MyNavLink to="/atguigu/home"> Home </MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/atguigu/about" component={About}/>
                                    <Route path="/atguigu/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}