import React,{Component} from "react";
import {Route,Switch} from 'react-router-dom'
import About from './pages/About'   // 路由组件
import Home from './pages/Home'     // 路由组件
import Test from './pages/Test'     // 路由组件
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
                            {/* 使用封装的NavLink */}
                            {/* 使用props传递属性 ，`About`和 `Home`通过props的children传递 */}
                            <MyNavLink to="/about"> About </MyNavLink>
                            <MyNavLink to="/home"> Home </MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*用Switch包起来，在路径匹配组件的时候，一旦匹配到就不再往下匹配*/}
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/home" component={Test}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}