import React, { Component } from 'react'
import Child from './Child'

// 错误边界：用来捕获后代组件错误，渲染出备用页面
// 错误边界找出问题组件的父组件处理
export default class Parent extends Component {

	state = {
		hasError:'' //用于标识子组件是否产生错误
	}

	//当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
	static getDerivedStateFromError(error){
		console.log('@@@',error);
		return {hasError:error}
	}

	componentDidCatch(){
		console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
	}

	render() {
		return (
			<div>
				<h2>我是Parent组件</h2>
				{this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
			</div>
		)
	}
}
