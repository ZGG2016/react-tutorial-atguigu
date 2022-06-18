import {NavLink, Outlet} from "react-router-dom";

export default function Home() {

	return (
		<div>
			<h3>我是Home的内容</h3>
			<div>
				<ul className="nav nav-tabs">
					<li>
						<NavLink className="list-group-item" to="news">News</NavLink>
					</li>
					<li>
						<NavLink className="list-group-item" to="message">Message</NavLink>
					</li>
				</ul>
				{/*指定路由组件呈现的位置*/}
				<Outlet/>
				{/* 注册路由 */}
			</div>
		</div>
	)

}