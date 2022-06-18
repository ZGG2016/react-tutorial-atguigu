import React,{Component} from "react";
import {Link,NavLink,Route} from 'react-router-dom'
import About from './pages/About'   // 路由组件
import Home from './pages/Home'     // 路由组件
import Header from './components/Header'  // 一般组件

export default class App extends Component{
    /**
     * 路由组件和一般组件区别
     *
     * 1.写法不同：
     *      一般组件：<Demo/>
     *      路由组件：<Route path="/demo" component={Demo}/>
     *
     * 2.存放位置不同：
     *      一般组件：components
     *      路由组件：pages
     *
     * 3.接收到的props不同：
     *     一般组件：写组件标签时传递了什么，就能收到什么
     *     路由组件：接收到三个固定的属性
     *             history:
     *                 go: ƒ go(n)
     *                 goBack: ƒ goBack()
     *                 goForward: ƒ goForward()
     *                 push: ƒ push(path, state)
     *                 replace: ƒ replace(path, state)
     *             location:
     *                 pathname: "/about"
     *                 search: ""
     *                 state: undefined
     *             match:
     *                 params: {}
     *                 path: "/about"
     *                 url: "/about"
     *
     */

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
                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/* 在React中靠路由链接实现切换组件--编写路由链接 （引起浏览器路径的变化）*/}
                            {/* 点击不同的链接进入不同的组件 */}
                            {/* 点击 About, 前端路由监测到路径变化，跳到 About 组件 */}
                            {/*<Link className="list-group-item" to="/about">About</Link>*/}
                            {/*<Link className="list-group-item" to="/home">Home</Link>*/}

                            {/*NavLink可以实现路由链接的高亮，通过activeClassName自定义高亮的css*/}
                            {/*点击 About ，启用activeClassName属性，显示atguigu对应的样式；点击 Home 同理*/}
                            {/* activeClassName 默认是 active*/}
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/*建立路径和组件的键值关系*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}