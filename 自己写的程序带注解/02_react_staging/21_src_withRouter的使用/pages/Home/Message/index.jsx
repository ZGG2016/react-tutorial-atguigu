import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {

	state = {
		messArr:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'}
		]
	}

	replaceShow = (id,title)=>{
		//replace跳转+携带params参数
		//this.props.history.replace(`/home/message/detail/${id}/${title}`)

		//replace跳转+携带search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		//replace跳转+携带state参数
		this.props.history.replace(`/home/message/detail`,{id,title})
	}

	pushShow = (id,title)=>{
		//push跳转+携带params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		//push跳转+携带search参数
		// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

		//push跳转+携带state参数
		this.props.history.push(`/home/message/detail`,{id,title})

	}

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	go = ()=>{
		this.props.history.go(2)
	}

	render() {
		const {messArr} = this.state
		return (
			<div>
				<ul>
					{
						messArr.map((msgObj)=>{
							return(
								<li key={msgObj.id}>
									{/*向路由组件传 params 参数*/}
									{/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;*/}
									{/*向路由组件传 search 参数*/}
									{/*<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;*/}
									{/*向路由组件传 state 参数*/}
									<Link to={{pathname:"/home/message/detail/", state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;

									<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>&nbsp;&nbsp;
									<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
								</li>
							)
						})
					}
				</ul>

				<hr/>
				{/*注册路由*/}
				{/*声明接收 params 参数*/}
				{/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
				{/*声明接收 search 参数，无需声明，正常注册路由即可*/}
				{/*声明接收 state 参数，无需声明，正常注册路由即可*/}
				<Route path="/home/message/detail/" component={Detail}/>

				<button onClick={this.back}>后退</button>&nbsp;&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;&nbsp;
				<button onClick={this.go}>go</button>&nbsp;&nbsp;

			</div>
		)
	}
}
