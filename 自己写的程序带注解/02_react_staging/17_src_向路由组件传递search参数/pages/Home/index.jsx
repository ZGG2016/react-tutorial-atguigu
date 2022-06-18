import React, { Component } from 'react'
import MyNavLink from "../../components/MyNavLink";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {

	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						{/*当点击这个 News 时，调整 `/home/news` 这个路径，进行匹配*/}
						{/*首先和 App.js 里注册的路径匹配，当匹配到 `/home` 时，就展示 Home 组件*/}
						{/*然后再匹配 Home 组件下注册的路由 ，就匹配到了 `/home/news`, 就展示 News 组件*/}
						<li>
							<MyNavLink to="/home/news"> News </MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message"> Message </MyNavLink>
						</li>
					</ul>
					<div>
						{/*注册路由*/}
						<Switch>
							<Route path="/home/news" component={News}/>
							<Route path="/home/message" component={Message}/>
							<Redirect to="/home/news" />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}
