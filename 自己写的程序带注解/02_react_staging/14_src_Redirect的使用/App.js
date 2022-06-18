import React,{Component} from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
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
                            <MyNavLink to="/home"> Home </MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    {/*重定向，如果前面两个路由都没匹配上，就跳到 `/home` 下 */}
                                    {/*写在所有路由注册的最下面*/}
                                    <Redirect to="/home"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}