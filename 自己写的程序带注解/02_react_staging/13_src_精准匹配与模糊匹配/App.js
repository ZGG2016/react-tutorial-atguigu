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
                            <MyNavLink to="/about"> About </MyNavLink>
                            <MyNavLink to="/home/a/b"> Home </MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/* 默认是模糊匹配，下面都可以开启精确匹配 */}
                                    {/* 如果没有影响页面展现，出现问题，就不用开启精确匹配 */}
                                    <Route exact={true} path="/about" component={About}/>
                                    <Route exact path="/home" component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}