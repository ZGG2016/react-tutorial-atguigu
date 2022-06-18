import React, { Component } from 'react'
import {withRouter} from "react-router-dom";

class Header extends Component {

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}
	render() {
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>后退</button>&nbsp;&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;&nbsp;
			</div>
		)
	}
}

// withRouter 可以将一般组件加工成路由组件，让一般组件具有路由组件所特有的API
// 返回值是一个新组件
export default withRouter(Header)
