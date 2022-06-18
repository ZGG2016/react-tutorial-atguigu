import React from 'react'
import {NavLink,Outlet,useOutlet} from 'react-router-dom'

export default function Home() {
	// 如果嵌套路由没有挂载,则result为null
	// 如果嵌套路由已经挂载,则展示嵌套的路由对象
	console.log('###',useOutlet())
	return (
		<div>
			<h2>Home组件内容</h2>
			<div>
				<ul className="nav nav-tabs">
					<li>
						<NavLink className="list-group-item" replace to="news">News</NavLink>
					</li>
					<li>
						<NavLink className="list-group-item" to="message">Message</NavLink>
					</li>
				</ul>
				{/* 指定路由组件呈现的位置 */}
				<Outlet />
			</div>
		</div>
	)
}
