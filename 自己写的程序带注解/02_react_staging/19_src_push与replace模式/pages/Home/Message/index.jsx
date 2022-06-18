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

	render() {
		const {messArr} = this.state
		return (
			<div>
				<ul>
					{
						messArr.map((msgObj)=>{
							return(
								<li key={msgObj.id}>
									{/*开启replace模式，不留痕迹*/}
									{/*<Link replace={true} to={{pathname:"/home/message/detail/", state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;*/}
									<Link replace to={{pathname:"/home/message/detail/", state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp;
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
			</div>
		)
	}
}
